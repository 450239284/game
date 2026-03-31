System.register("chunks:///_virtual/MultTextures.ts", ['cc', './env'], function (exports) {
  var cclegacy, gfx, Material, Component, ImageAsset, Texture2D, game, Game, director, Director, StencilManager, assert, resources, renderer, murmurhash2_32_gc, Color, Label, BitmapFont, Sprite, MotionStreak, TiledLayer, JSB;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      gfx = module.gfx;
      Material = module.Material;
      Component = module.Component;
      ImageAsset = module.ImageAsset;
      Texture2D = module.Texture2D;
      game = module.game;
      Game = module.Game;
      director = module.director;
      Director = module.Director;
      StencilManager = module.StencilManager;
      assert = module.assert;
      resources = module.resources;
      renderer = module.renderer;
      murmurhash2_32_gc = module.murmurhash2_32_gc;
      Color = module.Color;
      Label = module.Label;
      BitmapFont = module.BitmapFont;
      Sprite = module.Sprite;
      MotionStreak = module.MotionStreak;
      TiledLayer = module.TiledLayer;
    }, function (module) {
      JSB = module.JSB;
    }],
    execute: function () {
      cclegacy._RF.push({}, "bd7e7vtojdMUJODlbuIb/Yi", "MultTextures", undefined);

      //最大纹理,固定8张
      var MAX_TEX = 8;

      //原生开关,根据需要开启或关闭
      var SUPPORT_NATIVE = true;

      //@ts-ignore
      gfx.Texture.prototype.texID = -1; //当前纹理id
      //@ts-ignore
      Material.prototype.isMult = false; //多纹理材质的标记
      //@ts-ignore
      Component.prototype.useMult = false; //组件多纹理开关

      var MultBatch2D = exports('MultBatch2D', {
        "native": !SUPPORT_NATIVE,
        enable: false,
        parent: null,
        incID: 0,
        count: 0,
        hash: 0,
        reset: function reset() {
          this.incID += this.count;
          this.count = 0;
        }
      });
      var _image = new ImageAsset({
        width: 1,
        height: 1,
        _compressed: false,
        format: gfx.Format.RGBA32F,
        _data: new Float32Array(4).fill(0)
      });
      var Texture = new Texture2D();
      Texture.setFilters(1, 1);
      Texture.image = _image;
      Texture.addRef();

      //预加载多纹理材质
      var loadMultTextures = function loadMultTextures() {
        MultBatch2D.enable = false;
        resources.load("multTextures/Mult-material", Material, function (err, material) {
          if (!err) {
            var mat = cclegacy.builtinResMgr.get('ui-sprite-material');
            if (mat) {
              mat._hash = MultBatch2D.hash = Material.getHash(mat);
              MultBatch2D.parent = material;
              MultBatch2D.enable = true;
              material.addRef();
            }
          }
        });
      };

      //多纹理材质缓存队列
      var _cacheUseCount = 0;
      var _cacheMaterials = [];
      var getMultMaterial = function getMultMaterial(oldMat, rd) {
        if (rd === void 0) {
          rd = null;
        }
        var MB = MultBatch2D;
        MB.reset();
        if (!MB.enable || !oldMat || !rd || !rd.isMult) {
          return oldMat;
        }
        if (!MB.parent || !MB.parent.isValid) {
          loadMultTextures();
          return oldMat;
        }
        var newMat = _cacheMaterials[_cacheUseCount++];
        if (!newMat || !newMat.isValid) {
          var material = {
            parent: MB.parent
          };
          newMat = new renderer.MaterialInstance(material);
          _cacheMaterials[_cacheUseCount - 1] = newMat;
          newMat['cacheTextures'] = [];
          newMat['isMult'] = true;
          newMat.addRef();
        }
        return newMat;
      };

      //游戏启动前，务必加载多纹理材质
      game.once(Game.EVENT_GAME_INITED, function () {
        if (MultBatch2D["native"]) return; //|| JSB

        loadMultTextures();
      });

      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // 多纹理合批，sprite , label , renderdata ，等其他组件的重写和监听
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      var inject_Renderdata = function inject_Renderdata() {
        var RenderData = cclegacy.UI.RenderData.prototype;
        RenderData.texID = -1;
        RenderData.isMult = false;
        RenderData.matDirty = true;
        RenderData.texDirty = true;
        RenderData.dataDirty = 0x0;

        //兼容多纹理hash计算
        RenderData.updateHash = function () {
          if (this.isMult && MultBatch2D.enable) {
            var bid = this.chunk ? this.chunk.bufferId : -1;
            var hashString = "" + bid + this.layer + '98k';
            this.dataHash = murmurhash2_32_gc(hashString, 666);
            this.hashDirty = false;
          } else {
            var _bid = this.chunk ? this.chunk.bufferId : -1;
            var _hashString = "" + _bid + this.layer + " " + this.textureHash;
            this.dataHash = murmurhash2_32_gc(_hashString, 666);
            this.hashDirty = false;
          }
          this.matDirty = false;
        };

        //监听纹理的变更
        Object.defineProperty(RenderData, "textureDirty", {
          get: function get() {
            return this.texDirty;
          },
          set: function set(val) {
            this.texDirty = val;
            if (val === true) {
              this.texID = -1;
            }
          }
        });

        //检测是否支持多纹理合批
        var isMultTextures = function isMultTextures(rd, uir) {
          rd.isMult = false;
          var material = uir.getRenderMaterial(0);
          if (!material || !MultBatch2D.enable) {
            return;
          }

          //@ts-ignore
          //组件控制开关 useMult: 可以开启自定义组件参与多纹理
          if (uir.useMult && !rd._isMeshBuffer) {
            material._hash = material.hash || material._hash;
            if (!material._hash) {
              material._hash = Material.getHash(material);
            }
            rd.isMult = MultBatch2D.hash == material._hash;
          }
        };

        //监听pass变更，检测是否多纹理支持
        var updatePass = RenderData.updatePass;
        RenderData.updatePass = function (comp) {
          isMultTextures(this, comp);
          updatePass.call(this, comp);
        };

        //监听pass变更，检测是否多纹理支持
        var updateRenderData = RenderData.updateRenderData;
        RenderData.updateRenderData = function (comp, frame) {
          if (this.passDirty) {
            isMultTextures(this, comp);
          }
          //isMultTextures(this, comp);
          updateRenderData.call(this, comp, frame);
        };
      };
      var fillMeshVertices3D = function fillMeshVertices3D(node, renderer, cmp, color) {
        var renderData = cmp.renderData;
        var chunk = renderData.chunk;
        var dataList = renderData.data;
        var vData = chunk.vb;
        var vertexCount = renderData.vertexCount;
        if (node.hasChangedFlags || renderData.dataDirty === 1) {
          var m = node.worldMatrix; // node.getWorldMatrix(m);
          var m00 = m.m00,
            m01 = m.m01,
            m02 = m.m02,
            m03 = m.m03,
            m04 = m.m04,
            m05 = m.m05,
            m06 = m.m06,
            m07 = m.m07,
            m12 = m.m12,
            m13 = m.m13,
            m14 = m.m14,
            m15 = m.m15;
          var scale = 1.0 / 255;
          var vertexOffset = 0;
          for (var i = 0; i < vertexCount; i++) {
            var vert = dataList[i];
            var x = vert.x;
            var y = vert.y;
            var rhw = m03 * x + m07 * y + m15;
            rhw = rhw ? 1 / rhw : 1;
            vData[vertexOffset + 0] = (m00 * x + m04 * y + m12) * rhw;
            vData[vertexOffset + 1] = (m01 * x + m05 * y + m13) * rhw;
            vData[vertexOffset + 2] = (m02 * x + m06 * y + m14) * rhw;
            //Color.toArray(vData, color, vertexOffset + 5);
            //const scale = (a instanceof Color || a.a > 1) ? 1 / 255 : 1;
            vData[vertexOffset + 5] = color.r * scale;
            vData[vertexOffset + 6] = color.g * scale;
            vData[vertexOffset + 7] = color.b * scale;
            vData[vertexOffset + 8] = color.a * scale;
            vertexOffset += 9;
          }
        }

        // fill index data
        var bid = chunk.bufferId;
        var vid = chunk.vertexOffset;
        var meshBuffer = chunk.meshBuffer;
        var ib = chunk.meshBuffer.iData;
        var indexOffset = meshBuffer.indexOffset;
        for (var _i = 0, count = vertexCount / 4; _i < count; _i++) {
          var start = vid + _i * 4;
          ib[indexOffset++] = start;
          ib[indexOffset++] = start + 1;
          ib[indexOffset++] = start + 2;
          ib[indexOffset++] = start + 1;
          ib[indexOffset++] = start + 3;
          ib[indexOffset++] = start + 2;
        }
        meshBuffer.setDirty();
        meshBuffer.indexOffset += renderData.indexCount;
      };
      var inject_Label = function inject_Label() {
        var tempColor0 = new Color(255, 255, 255, 255);
        var tempColor1 = new Color(255, 255, 255, 255);
        var bmfillBuffers = function bmfillBuffers(comp, renderer) {
          var node = comp.node;
          tempColor0.set(comp.color);
          tempColor0.a = node._uiProps.opacity * 255;
          // Fill All
          fillMeshVertices3D(node, renderer, comp, tempColor0);
        };
        var lefillBuffers = function lefillBuffers(comp, renderer) {
          if (!comp.renderData) {
            return;
          }
          var node = comp.node;
          tempColor1.a = node._uiProps.opacity * 255;
          // Fill All
          fillMeshVertices3D(node, renderer, comp, tempColor1);
        };

        //@ts-ignore
        Label.prototype.useMult = true;
        //监听 Label 的 uv 变更
        var label = Label.Assembler;
        if (label) {
          var getAssembler = label.getAssembler;
          label.getAssembler = function (comp) {
            var assembler = getAssembler.call(this, comp);
            if (assembler.changeUV == undefined) {
              assembler.changeUV = function (s) {
                var rd = s.renderData;
                rd && (rd.dataDirty = 1);
              };
              var UVs = assembler.updateUVs;
              if (UVs) {
                if (comp.font instanceof BitmapFont) {
                  assembler.updateUVs = function (comp) {
                    UVs.call(this, comp);
                    this.changeUV(comp);
                  };
                } else if (comp.cacheMode === Label.CacheMode.CHAR) {
                  assembler.updateUVs = function (comp) {
                    UVs.call(this, comp);
                    this.changeUV(comp);
                  };
                } else {
                  assembler.updateUVs = function (comp) {
                    UVs.call(this, comp);
                    var renderData = comp.renderData;
                    if (!renderData || !comp.ttfSpriteFrame) {
                      return;
                    }
                    this.changeUV(comp);
                  };
                }
              }
            }
            if (comp.font instanceof BitmapFont) {
              assembler.fillBuffers = bmfillBuffers;
            } else {
              assembler.fillBuffers = lefillBuffers;
            }
            return assembler;
          };
        }
      };
      var inject_Sprite = function inject_Sprite() {
        //@ts-ignore
        Sprite.prototype.useMult = true;
        //监听 sprite 的 uv 变更
        var sprite = Sprite.Assembler;
        if (sprite) {
          var getAssembler = sprite.getAssembler;
          sprite.getAssembler = function (comp) {
            var assembler = getAssembler.call(this, comp);
            if (assembler.changeUV == undefined) {
              assembler.changeUV = function (s) {
                var rd = s.renderData;
                rd && (rd.dataDirty = 1);
              };
              var UVs = assembler.updateUVs;
              if (UVs) {
                if (comp.type == Sprite.Type.FILLED) {
                  if (comp.fillType != Sprite.FillType.RADIAL) {
                    assembler.updateUVs = function (s, f0, f1) {
                      UVs.call(this, s, f0, f1);
                      this.changeUV(s);
                    };
                  }
                } else {
                  if (comp.type != Sprite.Type.TILED) {
                    assembler.updateUVs = function (s) {
                      UVs.call(this, s);
                      if (s.spriteFrame) this.changeUV(s);
                    };
                  }
                }
              }
              var verUV = assembler.updateWorldVertexAndUVData;
              if (verUV) {
                assembler.updateWorldVertexAndUVData = function (s, c) {
                  verUV.call(this, s, c);
                  this.changeUV(s);
                };
              }
            }
            return assembler;
          };
        }
      };
      var inject_MotionStreak = function inject_MotionStreak() {
        if (MotionStreak) {
          var motionStreak = MotionStreak.prototype;
          motionStreak.useMult = true; //参与多纹理合批

          var lateUpdate = motionStreak.lateUpdate;
          motionStreak.lateUpdate = function (dt) {
            lateUpdate.call(this, dt);
            if (this._assembler) {
              if (this.points.length >= 2) {
                var rd = this.renderData;
                //全局标记刷新纹理uv
                rd && (rd.dataDirty = 1);
              }
            }
          };
        }
      };
      var inject_TiledLayer = function inject_TiledLayer() {
        if (TiledLayer && !JSB) {
          var Tiled = TiledLayer.prototype;
          Tiled.useMult = true; //参与多纹理合批
          Tiled.dataDirty = false; //全局标记刷新纹理uv

          var setUserNodeDirty = Tiled.setUserNodeDirty;
          Tiled.setUserNodeDirty = function (dirty) {
            setUserNodeDirty.call(this, dirty);
            if (!dirty) {
              //全局标记刷新纹理uv
              this.dataDirty = true;
            }
          };
          Tiled._render = function (ui) {
            var _this = this;
            var layer = this.node.layer;
            var _loop = function _loop(_j) {
              _this._tiledDataArrayIdx = i;
              var m = _this._tiledDataArray[i];
              var info = _this._drawInfoList[_j];
              if (m.subNodes) {
                // 提前处理 User Nodes
                m.subNodes.forEach(function (c) {
                  if (c) {
                    ui.walk(c.node);
                    _j++;
                  }
                });
              } else {
                var td = m;
                if (td.texture) {
                  var isDirty = false;
                  var rd = td.renderData;
                  rd.material = _this.getRenderMaterial(0);
                  if (rd.texture !== td.texture) {
                    rd.texture = td.texture;
                    // isDirty = true;
                  }

                  if (rd.layer !== layer) {
                    rd.layer = layer;
                    isDirty = true;
                  }
                  rd.isMult = true; //强制参与多纹理

                  // if (JSB) rd._renderDrawInfo = info;

                  //更新renderdata hash
                  isDirty && rd.updateHash();
                  if (_this.dataDirty) rd.dataDirty = 1;

                  // NOTE: 由于 commitComp 只支持单张纹理, 故分多次提交
                  ui.commitComp(_this, td.renderData, td.texture, _this._assembler, null);
                  _j++;
                }
              }
              j = _j;
            };
            for (var i = 0, j = 0; i < this._tiledDataArray.length; i++) {
              _loop(j);
            }
            this.dataDirty = false;
            this.node._static = true;
          };
        }
      };
      game.once(Game.EVENT_ENGINE_INITED, function () {
        if (MultBatch2D["native"]) return; //|| JSB

        inject_Label();
        inject_Sprite();
        inject_Renderdata();
        inject_TiledLayer();
        inject_MotionStreak();
        director.on(Director.EVENT_AFTER_DRAW, function (dt) {
          MultBatch2D.reset();
          _cacheUseCount = 0;
        });

        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // 多纹理合批，合批核心过程修改
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        var Batcher2D = cclegacy.internal.Batcher2D.prototype;
        Batcher2D.isMult = false; //多纹理标记
        Batcher2D.isNative = JSB; //原生的开关
        Batcher2D.cacheTextures = []; //纹理缓存数据
        Batcher2D.currMaterial = null; //当前指定材质
        Object.defineProperty(Batcher2D, "_currMaterial", {
          get: function get() {
            return this.currMaterial;
          },
          set: function set(material) {
            //检测多纹理材质，接替 _currMaterial
            var rd = this._currRenderData; //重置检测
            if (material == this._emptyMaterial) rd = null;
            // if (this.currMaterial === material) return;
            this.currMaterial = getMultMaterial(material, rd);
            this.isMult = false;
            if (MultBatch2D.enable) {
              if (this.currMaterial && this.currMaterial.isMult) {
                this.cacheTextures = this.currMaterial.cacheTextures;
                this.isMult = true; //当前 batcher 多纹理标记
              }
            }
          }
        });

        var Stage_ENTER_LEVEL = 2;
        var Stage_ENTER_LEVEL_INVERTED = 6;
        //@ts-ignore

        Batcher2D.commitComp = function (comp, renderData, frame, assembler, transform) {
          var dataHash = 0;
          var mat = null;
          var bufferID = -1;
          if (renderData && renderData.chunk) {
            if (!renderData.isValid()) return;
            dataHash = renderData.dataHash;
            mat = renderData.material;
            bufferID = renderData.chunk.bufferId;
          }

          // Notice: A little hack, if it is for mask, not need update here, while control by stencilManger
          if (comp.stencilStage === Stage_ENTER_LEVEL || comp.stencilStage === Stage_ENTER_LEVEL_INVERTED) {
            this._insertMaskBatch(comp);
          } else {
            //@ts-ignore
            comp._stencilStage = StencilManager.sharedManager.stage;
          }
          var depthStencilStateStage = comp.stencilStage;
          var texID = -1;
          var texture = null;
          var MB = MultBatch2D;
          var flushBatch = false;
          var isNative = this.isNative;
          //@ts-ignore
          if (MB.enable && renderData && renderData.isMult) {
            if (frame && frame.isValid) texture = frame.getGFXTexture();
            if (texture) {
              //@ts-ignore
              if (texture.texID === undefined) texture.texID = -1;
              //@ts-ignore
              texID = texture.texID - MB.incID;
              flushBatch = texID < 0 && MB.count >= MAX_TEX;
              if (this.isMult) mat = this._currMaterial;
            }
          }
          if (flushBatch || this._currHash !== dataHash || dataHash === 0 || this._currMaterial !== mat || this._currDepthStencilStateStage !== depthStencilStateStage) {
            // Merge all previous data to a render batch, and update buffer for next render data
            this.autoMergeBatches(this._currComponent);
            if (!isNative && renderData && !renderData._isMeshBuffer) {
              this.updateBuffer(renderData.vertexFormat, bufferID);
            }
            this._currRenderData = renderData;
            this._currHash = renderData ? renderData.dataHash : 0;
            this._currComponent = comp;
            this._currTransform = transform;
            this._currMaterial = comp.getRenderMaterial(0);
            this._currDepthStencilStateStage = depthStencilStateStage;
            this._currLayer = comp.node.layer;
            if (frame) {
              {
                assert(frame.isValid, 'frame should not be invalid, it may have been released');
              }
              this._currTexture = frame.getGFXTexture();
              this._currSampler = frame.getGFXSampler();
              this._currTextureHash = frame.getHash();
              this._currSamplerHash = this._currSampler.hash;
            } else {
              this._currTexture = null;
              this._currSampler = null;
              this._currTextureHash = 0;
              this._currSamplerHash = 0;
            }
          }
          if (!isNative && assembler.fillBuffers) assembler.fillBuffers(comp, this);
          if (texture && this.isMult) {
            if (texID < 0 || MB.count === 0) {
              texID = MB.count++;
              //@ts-ignore
              //let id = texture.objectID;
              //@ts-ignore
              texture.texID = texID + MB.incID;
              var caches = this.cacheTextures;
              if (caches[texID] !== texture) {
                caches[texID] = texture;
                //@ts-ignore
                texture = frame.texture;
                if (!texture) texture = frame;
                this._currMaterial.setProperty("texture" + texID, texture);
              }
            }
            this.fillTextureID(renderData, texID);
            if (isNative) {
              renderData.renderDrawInfo.setMaterial(this._currMaterial);
            }
          }
        };

        //填充多纹理 id 到顶点数据
        Batcher2D.fillTextureID = function (renderData, texID) {
          // if (!renderData) return;
          var vbuf = renderData.chunk.vb;
          var uvX = 0,
            length = vbuf.length;
          if (renderData.dataDirty === 1) {
            for (var i = 0; i < length; i += 9) {
              uvX = ~~(vbuf[i + 3] * 100000);
              vbuf[i + 3] = uvX * 10 + texID;
            }
          } else {
            if (renderData.texID !== texID) {
              for (var _i2 = 0; _i2 < length; _i2 += 9) {
                uvX = ~~(vbuf[_i2 + 3] * 0.1);
                vbuf[_i2 + 3] = uvX * 10 + texID;
              }
            }
          }
          renderData.dataDirty = 0;
          renderData.texID = texID;
        };
      });

      //*/
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/resources", ['./MultTextures.ts'], function () {
  return {
    setters: [null],
    execute: function () {}
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/resources', 'chunks:///_virtual/resources'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});