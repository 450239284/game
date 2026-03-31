System.register("chunks:///_virtual/ActionsManager.ts", ['cc'], function (exports) {
  var cclegacy, v3, tween, Tween;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      v3 = module.v3;
      tween = module.tween;
      Tween = module.Tween;
    }],
    execute: function () {
      cclegacy._RF.push({}, "16cb0Jb+lBJt4RFfIBh6I5n", "ActionsManager", undefined);
      var Easing = exports('Easing', /*#__PURE__*/function (Easing) {
        Easing["quadIn"] = "quadIn";
        Easing["quadOut"] = "quadOut";
        Easing["quadInOut"] = "quadInOut";
        Easing["cubicIn"] = "cubicIn";
        Easing["cubicOut"] = "cubicOut";
        Easing["cubicInOut"] = "cubicInOut";
        Easing["quartIn"] = "quartIn";
        Easing["quartOut"] = "quartOut";
        Easing["quartInOut"] = "quartInOut";
        Easing["quintIn"] = "quintIn";
        Easing["quintOut"] = "quintOut";
        Easing["quintInOut"] = "quintInOut";
        Easing["sineIn"] = "sineIn";
        Easing["sineOut"] = "sineOut";
        Easing["sineInOut"] = "sineInOut";
        Easing["expoIn"] = "expoIn";
        Easing["expoOut"] = "expoOut";
        Easing["expoInOut"] = "expoInOut";
        Easing["circIn"] = "circIn";
        Easing["circOut"] = "circOut";
        Easing["circInOut"] = "circInOut";
        Easing["elasticIn"] = "elasticIn";
        Easing["elasticOut"] = "elasticOut";
        Easing["elasticInOut"] = "elasticInOut";
        Easing["backIn"] = "backIn";
        Easing["backOut"] = "backOut";
        Easing["backInOut"] = "backInOut";
        Easing["bounceIn"] = "bounceIn";
        Easing["bounceOut"] = "bounceOut";
        Easing["bounceInOut"] = "bounceInOut";
        Easing["smooth"] = "smooth";
        Easing["fade"] = "fade";
        return Easing;
      }({})); //渐褪效果函数。 
      var ActionsManager = exports('ActionsManager', /*#__PURE__*/function () {
        function ActionsManager() {}
        var _proto = ActionsManager.prototype;
        _proto.panelOpenAnim = function panelOpenAnim(node, callBack, scale, timeScale, value) {
          if (callBack === void 0) {
            callBack = null;
          }
          if (scale === void 0) {
            scale = 0.6;
          }
          if (timeScale === void 0) {
            timeScale = 0.3;
          }
          if (value === void 0) {
            value = null;
          }
          if (node) {
            node.scale = v3(scale, scale);
            tween(node).to(1 * timeScale, {
              scale: v3(1, 1)
            }, {
              easing: 'backOut'
            }).call(function () {
              return callBack && callBack(value);
            }).start();
          }
        };
        _proto.shakeAni = function shakeAni(node, delayTime) {
          if (delayTime === void 0) {
            delayTime = 0.6;
          }
          if (node) {
            Tween.stopAllByTarget(node);
            tween(node).repeatForever(tween().to(0.1, {
              angle: -8
            }).to(0.2, {
              angle: 16
            }).to(0.1, {
              angle: 0
            }).delay(delayTime)).start();
          }
        };
        _proto.buttonBreath = function buttonBreath(node, timeScale) {
          if (timeScale === void 0) {
            timeScale = 1;
          }
          if (node) {
            this.stopBreath(node);
            tween(node).repeatForever(tween().to(0.25 * timeScale, {
              scale: v3(1.05, 1.05)
            }).to(0.5 * timeScale, {
              scale: v3(0.95, 0.95)
            }).to(0.25 * timeScale, {
              scale: v3(1, 1)
            })).start();
          }
        };
        _proto.stopBreath = function stopBreath(node) {
          if (node) {
            node.scale = v3(1, 1);
            Tween.stopAllByTarget(node);
          }
        };
        _proto.iconScaleAnim = function iconScaleAnim(node) {
          if (node && node.isValid) {
            node.scale = v3(1, 1);
            Tween.stopAllByTarget(node);
            tween(node).to(0.1, {
              scale: v3(1.2, 1.2)
            }).to(0.1, {
              scale: v3(1, 1)
            }).start();
          }
        };
        _proto.iconScaleAnim2 = function iconScaleAnim2(node) {
          if (node && node.isValid) {
            node.scale = v3(1, 1);
            Tween.stopAllByTarget(node);
            tween(node).to(0.1, {
              scale: v3(1.2, 1.2)
            }).to(0.1, {
              scale: v3(1, 1)
            }).to(0.1, {
              scale: v3(1.2, 1.2)
            }).to(0.1, {
              scale: v3(1, 1)
            }).start();
          }
        };
        _proto.moveToAnim = function moveToAnim(node, toPos, time, callback) {
          if (time === void 0) {
            time = 0.8;
          }
          if (callback === void 0) {
            callback = null;
          }
          if (node) {
            Tween.stopAllByTarget(node);
            tween(node).to(time, {
              position: toPos
            }).call(function () {
              return callback && callback();
            }).start();
          }
        }

        //掉落回弹效果
        ;

        _proto.dropReboundAni = function dropReboundAni(node, fromY, toY, callback) {
          if (node) {
            Tween.stopAllByTarget(node);
            var sub = fromY - toY;
            tween(node.position).to(0.1, {
              y: fromY + sub * 0.5
            }).to(0.1, {
              y: toY
            }, {
              easing: "circOut"
            }).to(0.15, {
              y: toY + sub * 0.8
            }, {
              easing: "circOut"
            }).to(0.1, {
              y: toY
            }, {
              easing: "circOut"
            }).to(0.12, {
              y: toY + sub * 0.4
            }, {
              easing: "circOut"
            }).to(0.1, {
              y: toY
            }, {
              easing: "circOut"
            }).to(0.09, {
              y: toY + sub * 0.2
            }, {
              easing: "circOut"
            }).to(0.1, {
              y: toY
            }, {
              easing: "circOut"
            }).to(0.06, {
              y: toY + sub * 0.1
            }, {
              easing: "circOut"
            }).to(0.1, {
              y: toY
            }, {
              easing: "circOut"
            }).to(0.03, {
              y: toY + sub * 0.05
            }, {
              easing: "circOut"
            }).to(0.1, {
              y: toY
            }, {
              easing: "circOut"
            }).call(function () {
              callback && callback();
            }).start();
          }
        }

        //果冻缩放效果
        ;

        _proto.jellyScaleAni = function jellyScaleAni(node, sca, callback) {
          if (sca === void 0) {
            sca = 1;
          }
          if (node) {
            Tween.stopAllByTarget(node);
            tween(node).to(0.1, {
              scale: v3(1.2 * sca, 0.6 * sca)
            }, {
              easing: "sineOut"
            }).to(0.1, {
              scale: v3(0.85 * sca, 1.3 * sca)
            }, {
              easing: "sineInOut"
            }).to(0.1, {
              scale: v3(1.1 * sca, 0.8 * sca)
            }, {
              easing: "sineInOut"
            }).to(0.1, {
              scale: v3(0.95 * sca, 1.1 * sca)
            }, {
              easing: "sineInOut"
            }).to(0.1, {
              scale: v3(1 * sca, 1 * sca)
            }, {
              easing: "sineOut"
            }).call(function () {
              return callback && callback();
            }).start();
          }
        }

        // 重复播放 红点缩放效果
        ;

        _proto.actRedScaleAni = function actRedScaleAni(node, sca) {
          if (sca === void 0) {
            sca = 1;
          }
          if (node) {
            Tween.stopAllByTarget(node);
            var ani = this.getMainActRedAni(sca);
            tween(node).repeatForever(ani).start();
          }
        };
        _proto.rotationRepeat = function rotationRepeat(node, time) {
          if (time === void 0) {
            time = 4;
          }
          if (node) {
            Tween.stopAllByTarget(node);
            tween(node).repeatForever(tween().to(time, {
              angle: 360
            }).call(function () {
              return node.angle = 0;
            })).start();
          }
        }

        // 红点缩放效果
        ;

        _proto.getMainActRedAni = function getMainActRedAni(sca) {
          if (sca === void 0) {
            sca = 1;
          }
          var t = tween().to(0.2, {
            scale: 0.8 * sca
          }).to(0.2, {
            scale: 1 * sca
          }).to(0.2, {
            scale: 0.9 * sca
          }).to(0.2, {
            scale: 1 * sca
          }).delay(0.5).union();
          return t;
        };
        _proto.shakeEffect = function shakeEffect(node) {
          if (node) {
            Tween.stopAllByTarget(node);
            tween(node).repeatForever(tween().to(0.02, v3(1, 2)).to(0.02, v3(-1, 2)).to(0.02, v3(-4, 0)).to(0.02, v3(0, -2)).to(0.02, v3(-1, 1)).to(0.02, v3(1, -2)).to(0.02, v3(-3, -3)).to(0.02, v3(0, 2)).to(0.02, v3(0, 0))).start();
          }
        };
        _proto.shakeOnce = function shakeOnce(node) {
          if (node) {
            var x = node.position.x;
            var y = node.position.y;
            Tween.stopAllByTarget(node);
            tween(node).to(0.02, {
              position: v3(x + 1, y + 2)
            }).to(0.02, {
              position: v3(x - 1, y + 2)
            }).to(0.02, {
              position: v3(x - 4, y + 0)
            }).to(0.02, {
              position: v3(x + 0, y - 2)
            }).to(0.02, {
              position: v3(x - 1, y + 1)
            }).to(0.02, {
              position: v3(x + 1, y - 2)
            }).to(0.02, {
              position: v3(x - 3, y - 3)
            }).to(0.02, {
              position: v3(x + 0, y + 2)
            }).to(0.02, {
              position: v3(x + 0, y + 0)
            }).start();
          }
        };
        _proto.swing = function swing(e, t) {
          tween(e).to(.06, {
            angle: 15
          }).to(.12, {
            angle: -15
          }).to(.12, {
            angle: 15
          }).to(.12, {
            angle: -15
          }).to(.06, {
            angle: 0
          }).call(function () {
            t && t();
          }).start();
        };
        return ActionsManager;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AudioManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './PathCongfig.ts', './GameControl.ts'], function (exports) {
  var _createClass, cclegacy, Node, AudioSource, director, AudioClip, AudioPath, GC;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
      AudioSource = module.AudioSource;
      director = module.director;
      AudioClip = module.AudioClip;
    }, function (module) {
      AudioPath = module.AudioPath;
    }, function (module) {
      GC = module.GC;
    }],
    execute: function () {
      cclegacy._RF.push({}, "0af92sAgtJKNLltHFK1DRei", "AudioManager", undefined);
      var AudioManager = exports('AudioManager', /*#__PURE__*/function () {
        function AudioManager() {
          this._cache = new Map();
          // 音量
          this._volumeKey = "VolumeKey";
          // 用于 音量设置 本地存储的key
          this._soundKey = "SoundSettingKey";
          this._musicKey = "MusicSettingKey";
          this._vibratKey = "VibrateSettingKey";
          this._sound = true;
          this._music = true;
          this._vibrat = true;
          this._musicPath = "";
          this._musicAudioSource = null;
          this._soundAudioSource = null;
          /** 用于循环音效（如跑步），可单独停止 */
          this._loopSoundAudioSource = null;
        }
        var _proto = AudioManager.prototype;
        _proto.init = function init(soundMgr, musicMgr) {
          this._soundAudioSource = soundMgr;
          this._musicAudioSource = musicMgr;
          var loopNode = new Node('AudioLoop');
          this._loopSoundAudioSource = loopNode.addComponent(AudioSource);
          var scene = director.getScene();
          if (scene) scene.addChild(loopNode);

          // let v = GC.localStore.getItem(this._volumeKey)
          // this.volume = Utils.isNull(v) ? 1 : v;
          this.volume = 1;

          // let sound = GC.localStore.getItem(this._soundKey)
          // this.sound = Utils.isNull(sound) ? true : sound;
          this.sound = true;

          // let music = GC.localStore.getItem(this._musicKey)
          // this.music = Utils.isNull(music) ? true : music;
          this.music = true;

          // let vibrate = GC.localStore.getItem(this._vibratKey)
          // this.vibrate = Utils.isNull(vibrate) ? true : vibrate;
          this.vibrate = true;
          this.playMusic(AudioPath.bmg);
        };
        _proto.stopMusic = function stopMusic() {
          this._musicAudioSource.stop();
        };
        _proto.pauseMusic = function pauseMusic() {
          this._musicAudioSource.pause();
        };
        _proto.playMusic = function playMusic(path) {
          var _this = this;
          if (path === void 0) {
            path = this._musicPath;
          }
          this._musicPath = path;
          var clip = this._cache.get(path);
          if (clip) {
            this.playMusicClip(clip);
          } else if (path) {
            this.loadAudioRes(path, function (clip) {
              if (clip) {
                _this.playMusicClip(clip);
              }
            });
          }
        };
        _proto.playMusicClip = function playMusicClip(clip) {
          if (!this._musicAudioSource || !clip) return;
          this._musicAudioSource.stop();
          this._musicAudioSource.clip = clip;
          this._musicAudioSource.loop = true; // 设置循环播放

          if (!this.music) return;

          // 尝试播放音乐，如果失败则标记需要用户交互后播放
          try {
            this._musicAudioSource.play();
          } catch (error) {
            console.warn('[AudioManager] Failed to play music automatically:', error);
          }
        }

        /**
         * 检查背景音乐是否正在播放
         */;
        _proto.isMusicPlaying = function isMusicPlaying() {
          if (!this._musicAudioSource) return false;
          return this._musicAudioSource.playing || false;
        }

        /**
         * 尝试播放背景音乐（如果未播放）
         */;
        _proto.tryPlayMusic = function tryPlayMusic() {
          if (!this.music) return;

          // 如果已经在播放，不需要处理
          if (this.isMusicPlaying()) return;

          // 如果已经有音乐路径，尝试播放
          if (this._musicPath) {
            this.playMusic(this._musicPath);
          }
        };
        _proto.playSound = function playSound(path) {
          var _this2 = this;
          if (!this.sound) return;
          var clip = this._cache.get(path);
          if (clip) {
            this.playSoundClip(clip);
          } else if (path) {
            this.loadAudioRes(path, function (clip) {
              _this2.playSoundClip(clip);
            });
          }
        };
        _proto.playSoundClip = function playSoundClip(clip) {
          this._soundAudioSource.playOneShot(clip, this.volume);
        }

        /**
         * 循环播放音效（如跑步），需配合 stopLoopSound 在停止时调用。
         */;
        _proto.playLoopSound = function playLoopSound(path) {
          var _this3 = this;
          if (!this.sound) return;
          if (!this._loopSoundAudioSource) return;
          var clip = this._cache.get(path);
          if (clip) {
            this._loopSoundAudioSource.stop();
            this._loopSoundAudioSource.clip = clip;
            this._loopSoundAudioSource.loop = true;
            this._loopSoundAudioSource.volume = this.volume;
            this._loopSoundAudioSource.play();
          } else if (path) {
            this.loadAudioRes(path, function (c) {
              if (!c || !_this3._loopSoundAudioSource) return;
              _this3._loopSoundAudioSource.stop();
              _this3._loopSoundAudioSource.clip = c;
              _this3._loopSoundAudioSource.loop = true;
              _this3._loopSoundAudioSource.volume = _this3.volume;
              _this3._loopSoundAudioSource.play();
            });
          }
        }

        /** 停止当前循环音效（如跑步停止时） */;
        _proto.stopLoopSound = function stopLoopSound() {
          if (this._loopSoundAudioSource) this._loopSoundAudioSource.stop();
        };
        _proto.loadAudioRes = function loadAudioRes(path, callback) {
          var _this4 = this;
          GC.res.loadRes(AudioPath.rootPath + path, AudioClip, function (clip) {
            _this4._cache.set(path, clip);
            callback && callback(clip);
          });

          // GC.res.loadFromBundleName("audios", path, AudioClip, (clip: AudioClip) => {
          //     this._cache.set(path, clip);
          //     callback && callback(clip);
          // });
        };

        _createClass(AudioManager, [{
          key: "volume",
          get: function get() {
            return this._musicAudioSource.volume;
          }

          //vol: 0.0 ~ 1.0
          ,

          set: function set(v) {
            this._musicAudioSource.volume = v;
            GC.localStore.setItem(this._volumeKey, v);
          }
        }, {
          key: "sound",
          get: function get() {
            return Boolean(this._sound);
          },
          set: function set(v) {
            this._sound = Boolean(v);
            GC.localStore.setItem(this._soundKey, v);
          }
        }, {
          key: "music",
          get: function get() {
            return Boolean(this._music);
          },
          set: function set(v) {
            this._music = Boolean(v);
            GC.localStore.setItem(this._musicKey, v);
            if (this._music) {
              this.playMusic();
            } else {
              this.pauseMusic();
            }
          }
        }, {
          key: "vibrate",
          get: function get() {
            return Boolean(this._vibrat);
          },
          set: function set(v) {
            this._vibrat = Boolean(v);
            GC.localStore.setItem(this._vibratKey, v);
          }
        }]);
        return AudioManager;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Base.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventName.ts', './GameControl.ts', './md51.ts', './Utils.ts'], function (exports) {
  var _inheritsLoose, cclegacy, Component, EventName, GC, hex_md5, Utils;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
    }, function (module) {
      EventName = module.EventName;
    }, function (module) {
      GC = module.GC;
    }, function (module) {
      hex_md5 = module.hex_md5;
    }, function (module) {
      Utils = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "bba92nMrUtDoJKn1HRA5tZ1", "Base", undefined);
      var Base = exports('Base', /*#__PURE__*/function (_Component) {
        _inheritsLoose(Base, _Component);
        function Base() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._listensArr = [];
          return _this;
        }
        var _proto = Base.prototype;
        _proto.onLoad = function onLoad() {
          this.initListen();
          this.initTouchs();
        };
        _proto.start = function start() {};
        _proto.onEnable = function onEnable() {};
        _proto.initListen = function initListen() {
          this.listen(EventName.serverResponse, this.notify);
        };
        _proto.initTouchs = function initTouchs() {};
        _proto.openDialog = function openDialog(name) {
          var _GC$dialog;
          for (var _len2 = arguments.length, data = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            data[_key2 - 1] = arguments[_key2];
          }
          (_GC$dialog = GC.dialog).openDialog.apply(_GC$dialog, [name].concat(data));
        };
        _proto.close = function close(name) {
          GC.dialog.close(name);
        };
        _proto.closeAll = function closeAll() {
          GC.dialog.closeAll();
        };
        _proto.listen = function listen(eventType, callback) {
          if (GC.notify.register(eventType, callback, this)) {
            var event = {
              eventType: eventType,
              callback: callback,
              context: this
            };
            this._listensArr.push(event);
          }
        };
        _proto.unregisterListener = function unregisterListener(eventType) {
          var index = this._listensArr.findIndex(function (event) {
            return event.eventType == eventType;
          });
          if (index >= 0) {
            var event = this._listensArr.splice(index, 1)[0];
            GC.notify.removeListener(event.eventType, event.callback, event.context);
          }
        }

        // 销毁所有监听事件
        ;

        _proto.unregisterAllListener = function unregisterAllListener() {
          this._listensArr.forEach(function (event) {
            GC.notify.removeListener(event.eventType, event.callback, event.context);
          });
          this._listensArr.length = 0;
        };
        _proto.post = function post(name) {
          var _GC$notify;
          for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
            args[_key3 - 1] = arguments[_key3];
          }
          (_GC$notify = GC.notify).post.apply(_GC$notify, [name].concat(args));
        };
        _proto.notify = function notify(id, msg) {};
        _proto.reqServeGet = function reqServeGet(msgId, data, showLoading, isShowBg) {
          if (data === void 0) {
            data = null;
          }
          if (showLoading === void 0) {
            showLoading = true;
          }
          if (isShowBg === void 0) {
            isShowBg = false;
          }
          this.reqServe(msgId, data, showLoading, isShowBg, true);
        };
        _proto.reqServePost = function reqServePost(msgId, data, showLoading, isShowBg) {
          if (data === void 0) {
            data = null;
          }
          if (showLoading === void 0) {
            showLoading = true;
          }
          if (isShowBg === void 0) {
            isShowBg = false;
          }
          this.reqServe(msgId, data, showLoading, isShowBg, false);
        };
        _proto.reqServe = function reqServe(msgId, data, showLoading, isShowBg, isGet) {
          data = this.getComData(data);
          GC.net.http.reqServe(GC.config.game.gameUrl, msgId, data, showLoading, isShowBg, isGet);
        };
        _proto.getComData = function getComData(data) {
          if (data === void 0) {
            data = null;
          }
          data = Utils.isNull(data) ? {} : data;
          var config = GC.config.game;
          data.app_id = config.appId;
          data.channel_id = config.channelId;
          data.client_ver = config.version;
          data.trace_id = config.trace_id;
          data.pf_openid = config.pf_openid;
          data.client_env = config.client_env;
          // data.t = Date.now();
          // data.sign = hex_md5(data.app_id + data.channel_id + data.client_ver + data.trace_id);
          data = this.doSign(data);
          if (!Utils.isNull(GC.data.user.user_id)) {
            data.open_id = GC.data.user.open_id;
            data.user_id = GC.data.user.user_id;
            data.token = GC.data.login.token;
          }
          this.stringifySendData(data);
          return data;
        };
        _proto.doSign = function doSign(params) {
          delete params['t'], params['sign'];
          params['t'] = Math.floor(Date.now() / 1000);
          params = Utils.ksort(params);

          // 此处千万不要修改!!!
          var signFields = ['app_id', 'channel_id', 'client_ver', 't', 'trace_id'];
          var _str = '';
          for (var key in params) {
            if (signFields.indexOf(key) != -1) {
              var value = params[key];
              _str += key + "=" + value + "&";
            }
          }
          _str = _str.slice(0, _str.length - 1);
          var sign = hex_md5(_str + GC.config.game.appKey);
          params['sign'] = sign;
          return params;
        };
        _proto.stringifySendData = function stringifySendData(sendData) {
          if (!Utils.isNull(sendData.data)) {
            if (sendData.data != '{}') {
              sendData.data = JSON.stringify(sendData.data);
            }
          }
        };
        return Base;
      }(Component));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaseComponent.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './PathCongfig.ts', './GameControl.ts', './Base.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, Component, Node, Tween, tween, macro, UITransform, AudioPath, GC, Base;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
      Node = module.Node;
      Tween = module.Tween;
      tween = module.tween;
      macro = module.macro;
      UITransform = module.UITransform;
    }, function (module) {
      AudioPath = module.AudioPath;
    }, function (module) {
      GC = module.GC;
    }, function (module) {
      Base = module.Base;
    }],
    execute: function () {
      cclegacy._RF.push({}, "7274dtyUplFYYestC7XeZwl", "BaseComponent", undefined);
      var BaseComponent = exports('default', /*#__PURE__*/function (_Base) {
        _inheritsLoose(BaseComponent, _Base);
        function BaseComponent() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Base.call.apply(_Base, [this].concat(args)) || this;
          _this._path = "";
          _this._isCanClickMulty = false;
          _this.touchStart = function (event) {
            var _event$touch;
            event.propagationStopped = true;
            var curId = event == null || (_event$touch = event.touch) == null ? void 0 : _event$touch.getID();
            if (GC.config.game.touchId == -1) {
              GC.config.game.touchId = curId;
            }
            // console.log("touchStart ==>");
            if (_this.onTouchStart && (curId == GC.config.game.touchId || _this._isCanClickMulty)) {
              _this.onTouchStart(event);
            }
          };
          _this.touchMove = function (event) {
            var _event$touch2;
            event.propagationStopped = true;
            if (_this.onTouchMove && ((event == null || (_event$touch2 = event.touch) == null ? void 0 : _event$touch2.getID()) == GC.config.game.touchId || _this._isCanClickMulty)) {
              _this.onTouchMove(event);
            }
          };
          _this.touchEnd = function (event) {
            event.propagationStopped = true;
            if (_this.onTouchEnd && (_this.touchEndIsNotMulti(event) || _this._isCanClickMulty)) {
              _this.onTouchEnd(event);
            }
          };
          _this.touchCancel = function (event) {
            event.propagationStopped = true;
            if (_this.onTouchCancel && (_this.touchEndIsNotMulti(event) || _this._isCanClickMulty)) {
              _this.onTouchCancel(event);
            }
          };
          return _this;
        }
        var _proto = BaseComponent.prototype;
        _proto.onLoad = function onLoad() {
          _Base.prototype.onLoad.call(this);
        };
        _proto.start = function start() {
          _Base.prototype.start.call(this);
        };
        _proto.onEnable = function onEnable() {
          _Base.prototype.onEnable.call(this);
        };
        _proto.unBindClick = function unBindClick(com) {
          var node = com instanceof Component ? com.node : com;
          node.targetOff(this);
          return node;
        };
        _proto.bindClick = function bindClick(com, callBack, scaleAni, data, start, stopPro, isSound) {
          if (scaleAni === void 0) {
            scaleAni = true;
          }
          if (start === void 0) {
            start = false;
          }
          if (stopPro === void 0) {
            stopPro = true;
          }
          if (isSound === void 0) {
            isSound = true;
          }
          var node = this.unBindClick(com);
          var scale = node.scale.clone();
          var self = this;
          node.on(Node.EventType.TOUCH_START, function (event) {
            event.propagationStopped = stopPro;
            // stopPro && event.stopPropagation()
            scaleAni && Tween.stopAllByTarget(node);
            scaleAni && tween(node).to(0.1, {
              scale: node.scale.multiplyScalar(1.1)
            }).start();
            start && callBack.call(self, event, data);
          }, this);
          node.on(Node.EventType.TOUCH_CANCEL, function (event) {
            event.propagationStopped = stopPro;
            // stopPro && event.stopPropagation()
            scaleAni && Tween.stopAllByTarget(node);
            scaleAni && tween(node).to(0.1, {
              scale: scale
            }).start();
          }, this);
          node.on(Node.EventType.TOUCH_END, function (event) {
            event.propagationStopped = stopPro;
            // stopPro && event.stopPropagation()
            scaleAni && Tween.stopAllByTarget(node);
            scaleAni && tween(node).to(0.1, {
              scale: scale
            }).start();
            isSound && GC.audio.playSound(AudioPath.btnClick);
            !start && callBack.call(self, event, data);
          }, this);
        };
        _proto.bindClickByDownAni = function bindClickByDownAni(com, callBack, offsetY) {
          if (offsetY === void 0) {
            offsetY = 5;
          }
          var node = this.unBindClick(com);
          var startY = node.y;
          var self = this;
          node.on(Node.EventType.TOUCH_START, function (event) {
            event.propagationStopped = true;
            // stopPro && event.stopPropagation()
            Tween.stopAllByTarget(node);
            tween(node).to(0.1, {
              y: startY - offsetY
            }).start();
          }, this);
          node.on(Node.EventType.TOUCH_CANCEL, function (event) {
            event.propagationStopped = true;
            // stopPro && event.stopPropagation()
            Tween.stopAllByTarget(node);
            tween(node).to(0.1, {
              y: startY
            }).start();
          }, this);
          node.on(Node.EventType.TOUCH_END, function (event) {
            event.propagationStopped = true;
            // stopPro && event.stopPropagation()
            Tween.stopAllByTarget(node);
            tween(node).to(0.1, {
              y: startY
            }).start();
            GC.audio.playSound(AudioPath.btnClick);
            callBack.call(self, event);
          }, this);
        }

        /***  touches start */;
        _proto.bindTouchs = function bindTouchs(com, start, move, end, cancle) {
          if (start === void 0) {
            start = true;
          }
          if (move === void 0) {
            move = true;
          }
          if (end === void 0) {
            end = true;
          }
          if (cancle === void 0) {
            cancle = true;
          }
          var node = this.unBindClick(com);
          start && node.on(Node.EventType.TOUCH_START, this.touchStart, this);
          move && node.on(Node.EventType.TOUCH_MOVE, this.touchMove, this);
          end && node.on(Node.EventType.TOUCH_END, this.touchEnd, this);
          cancle && node.on(Node.EventType.TOUCH_CANCEL, this.touchCancel, this);
        };
        _proto.bindTouch = function bindTouch(com, type, callback) {
          var node = this.unBindClick(com);
          node.on(type, callback, this);
        };
        _proto.bindLongTouch = function bindLongTouch(com, callBack, scaleAni, daily) {
          var _this2 = this;
          if (scaleAni === void 0) {
            scaleAni = true;
          }
          if (daily === void 0) {
            daily = 0.1;
          }
          var node = this.unBindClick(com);
          var scale = node.scale;
          var self = this;
          node.on(Node.EventType.TOUCH_START, function (event) {
            event.propagationStopped = true;
            scaleAni && Tween.stopAllByTarget(node);
            scaleAni && tween(node).to(0.1, {
              scale: scale.multiplyScalar(1.1)
            }).start();
            _this2.schedule(callBack, daily, macro.REPEAT_FOREVER, 0.5);
          }, this);
          node.on(Node.EventType.TOUCH_CANCEL, function (event) {
            event.propagationStopped = true;
            scaleAni && Tween.stopAllByTarget(node);
            scaleAni && tween(node).to(0.1, {
              scale: scale
            }).start();
            _this2.unschedule(callBack);
          }, this);
          node.on(Node.EventType.TOUCH_END, function (event) {
            event.propagationStopped = true;
            scaleAni && Tween.stopAllByTarget(node);
            scaleAni && tween(node).to(0.1, {
              scale: scale
            }).start();
            _this2.unschedule(callBack);
            callBack.call(self);
          }, this);
        };
        _proto.touchEndIsNotMulti = function touchEndIsNotMulti(event) {
          var _event$touch3;
          var curId = event == null || (_event$touch3 = event.touch) == null ? void 0 : _event$touch3.getID();
          var isNotMulti = curId == GC.config.game.touchId;
          if (isNotMulti) {
            GC.config.game.touchId = -1;
          }
          return isNotMulti;
        };
        _proto.onTouchStart = function onTouchStart(event) {};
        _proto.onTouchMove = function onTouchMove(event) {};
        _proto.onTouchEnd = function onTouchEnd(event) {};
        _proto.onTouchCancel = function onTouchCancel(event) {}
        /***  touches end */;
        _proto.onDisable = function onDisable() {};
        _proto.onDestroy = function onDestroy() {
          // 停止所有注册
          this.unscheduleAllCallbacks();
          // 移除所有监听
          this.unregisterAllListener();
          // 停止所有动作
          // this.node.stopAllActions();
          Tween.stopAllByTarget(this.node);
        };
        _createClass(BaseComponent, [{
          key: "path",
          get: function get() {
            return this._path;
          },
          set: function set(p) {
            this._path = p;
          }
        }, {
          key: "isMulty",
          set: function set(multy) {
            this._isCanClickMulty = multy;
          }
        }, {
          key: "workRect",
          get: function get() {
            return this.node.getComponent(UITransform).getBoundingBoxToWorld();
          }
        }, {
          key: "rect",
          get: function get() {
            return this.node.getComponent(UITransform).getBoundingBox();
          }
        }]);
        return BaseComponent;
      }(Base));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaseData.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameControl.ts', './Base.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, GC, Base;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      GC = module.GC;
    }, function (module) {
      Base = module.Base;
    }],
    execute: function () {
      cclegacy._RF.push({}, "3d62bI8gvFPPIuY4ocg/PfZ", "BaseData", undefined);
      var BaseData = exports('BaseData', /*#__PURE__*/function (_Base) {
        _inheritsLoose(BaseData, _Base);
        function BaseData() {
          var _this;
          _this = _Base.call(this) || this;
          _this.initListen();
          return _this;
        }
        var _proto = BaseData.prototype;
        _proto.checkCoverNewKey = function checkCoverNewKey(msg) {
          for (var key in this.defaultMsg) {
            if (!msg.hasOwnProperty(key)) {
              msg[key] = this.defaultMsg[key];
            }
          }
        };
        _proto.initData = function initData(msg) {};
        _proto.endGame = function endGame() {};
        _proto.saveNow = function saveNow() {
          GC.data.game.saveNow();
        };
        _createClass(BaseData, [{
          key: "defaultMsg",
          get: function get() {
            return {};
          }
        }]);
        return BaseData;
      }(Base));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaseDialog.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './PathCongfig.ts', './GameControl.ts', './BasePrefab.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, UITransform, screen, Widget, Sprite, Color, UIOpacity, BlockInputEvents, v3, tween, Vec3, ResPath, GC, BasePrefab;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      UITransform = module.UITransform;
      screen = module.screen;
      Widget = module.Widget;
      Sprite = module.Sprite;
      Color = module.Color;
      UIOpacity = module.UIOpacity;
      BlockInputEvents = module.BlockInputEvents;
      v3 = module.v3;
      tween = module.tween;
      Vec3 = module.Vec3;
    }, function (module) {
      ResPath = module.ResPath;
    }, function (module) {
      GC = module.GC;
    }, function (module) {
      BasePrefab = module.default;
    }],
    execute: function () {
      var _dec, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "3e1fe+FMp1D8ocZjHI3hCyP", "BaseDialog", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BaseDialog = exports('default', (_dec = property(Node), ccclass(_class = (_class2 = /*#__PURE__*/function (_BasePrefab) {
        _inheritsLoose(BaseDialog, _BasePrefab);
        function BaseDialog() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BasePrefab.call.apply(_BasePrefab, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "safeArea", _descriptor, _assertThisInitialized(_this));
          _this._bgNode = null;
          _this._isClose = false;
          _this._isFullScreen = false;
          _this.bindBgClick = function (callBack, data) {
            _this.bindClick(_this._bgNode, callBack);
          };
          return _this;
        }
        var _proto = BaseDialog.prototype;
        _proto.show = function show() {
          this.setActive(this.node, true);
        };
        _proto.onLoad = function onLoad(isFullScreen, opacity, haveBgTouch) {
          if (isFullScreen === void 0) {
            isFullScreen = false;
          }
          if (opacity === void 0) {
            opacity = 150;
          }
          if (haveBgTouch === void 0) {
            haveBgTouch = true;
          }
          this._isFullScreen = isFullScreen;
          this.addBg(opacity, haveBgTouch);
          _BasePrefab.prototype.onLoad.call(this);
        };
        _proto.onEnable = function onEnable() {
          _BasePrefab.prototype.onEnable.call(this);
          if (this._bgNode) {
            this._bgNode.getComponent(UITransform).setContentSize(screen.windowSize);
          }
        };
        _proto.start = function start(openAnim) {
          if (openAnim === void 0) {
            openAnim = true;
          }
          _BasePrefab.prototype.start.call(this);
          this.safeArea && this._isFullScreen && this.adaptUi();
          openAnim && this.safeArea && !this._isFullScreen && this.playOpenAnim(this.safeArea);
        };
        _proto.adaptUi = function adaptUi() {
          if (GC.sdk.isPlatform) {
            var StatusBatHeight = GC.sdk.getOffHeight();
            var widget = this.safeArea.getComponent(Widget);
            if (widget) {
              widget.top += StatusBatHeight;
            }
          }
        };
        _proto.addBg = function addBg(opacity, haveBgTouch) {
          if (opacity === void 0) {
            opacity = 204;
          }
          if (haveBgTouch === void 0) {
            haveBgTouch = true;
          }
          this._bgNode = new Node("bgNode");
          this.node.insertChild(this._bgNode, 0);
          var sp = this._bgNode.addComponent(Sprite);
          sp.color = new Color(0, 0, 0);
          sp.sizeMode = Sprite.SizeMode.CUSTOM;
          this.setSprite(sp, ResPath.defaultSp);
          var w = this._bgNode.addComponent(Widget);
          w.isAlignTop = true;
          w.isAlignBottom = true;
          w.isAlignLeft = true;
          w.isAlignRight = true;
          w.top = 0;
          w.bottom = 0;
          w.left = 0;
          w.right = 0;
          w.updateAlignment();
          this.resetBg(opacity, haveBgTouch);
        };
        _proto.resetBg = function resetBg(opacity, haveBgTouch) {
          var _this$node$getCompone;
          if (opacity === void 0) {
            opacity = 204;
          }
          if (haveBgTouch === void 0) {
            haveBgTouch = true;
          }
          var opa = this._bgNode.addComponent(UIOpacity);
          opa.opacity = opacity;
          haveBgTouch ? this.node.addComponent(BlockInputEvents) : (_this$node$getCompone = this.node.getComponent(BlockInputEvents)) == null ? void 0 : _this$node$getCompone.destroy();
        }

        //界面打开动画
        ;

        _proto.playOpenAnim = function playOpenAnim(node, callBack, scale, timeScale, value) {
          if (callBack === void 0) {
            callBack = null;
          }
          if (scale === void 0) {
            scale = 0.6;
          }
          if (timeScale === void 0) {
            timeScale = 0.3;
          }
          if (value === void 0) {
            value = null;
          }
          if (node) {
            node.scale = v3(scale, scale);
            tween(node).to(1 * timeScale, {
              scale: Vec3.ONE
            }, {
              easing: 'backOut'
            }).call(function () {
              return callBack && callBack(value);
            }).start();
          }
        }

        //渐显
        ;

        _proto.fadeInBgNode = function fadeInBgNode(time) {
          tween(this._bgNode.getComponent(UIOpacity)).to(time, {
            opacity: 204
          }).start();
        }
        //渐隐
        ;

        _proto.fadeOutBgNode = function fadeOutBgNode(time) {
          tween(this._bgNode.getComponent(UIOpacity)).to(time, {
            opacity: 0
          }).start();
        };
        _proto.closeMySelf = function closeMySelf() {
          if (this._isClose == false) {
            this._isClose = true;
            GC.dialog.close(this.path);
          }
        };
        _proto.hide = function hide() {
          this.setActive(this.node, false);
        };
        _proto.onDestroy = function onDestroy() {
          _BasePrefab.prototype.onDestroy.call(this);
        };
        _createClass(BaseDialog, [{
          key: "isFullScreen",
          get: function get() {
            return this._isFullScreen;
          }
        }]);
        return BaseDialog;
      }(BasePrefab), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "safeArea", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaseModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameControl.ts', './Base.ts'], function (exports) {
  var _inheritsLoose, cclegacy, GC, Base;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      GC = module.GC;
    }, function (module) {
      Base = module.Base;
    }],
    execute: function () {
      cclegacy._RF.push({}, "e0ed2vbxjlBK6g8uz5hQheP", "BaseModel", undefined);
      var BaseModel = exports('BaseModel', /*#__PURE__*/function (_Base) {
        _inheritsLoose(BaseModel, _Base);
        function BaseModel() {
          return _Base.apply(this, arguments) || this;
        }
        var _proto = BaseModel.prototype;
        _proto.saveNow = function saveNow() {
          GC.data.game.saveNow();
        };
        return BaseModel;
      }(Base));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BasePrefab.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameControl.ts', './MyLog.ts', './TimeUtils.ts', './Utils.ts', './BaseComponent.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, SpriteFrame, Color, Node, Sprite, assetManager, Texture2D, Prefab, sp, js, Label, Font, Component, UIOpacity, Vec2, Vec3, GC, MyLog, timeUtils, Utils, BaseComponent;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      SpriteFrame = module.SpriteFrame;
      Color = module.Color;
      Node = module.Node;
      Sprite = module.Sprite;
      assetManager = module.assetManager;
      Texture2D = module.Texture2D;
      Prefab = module.Prefab;
      sp = module.sp;
      js = module.js;
      Label = module.Label;
      Font = module.Font;
      Component = module.Component;
      UIOpacity = module.UIOpacity;
      Vec2 = module.Vec2;
      Vec3 = module.Vec3;
    }, function (module) {
      GC = module.GC;
    }, function (module) {
      MyLog = module.default;
    }, function (module) {
      timeUtils = module.timeUtils;
    }, function (module) {
      Utils = module.default;
    }, function (module) {
      BaseComponent = module.default;
    }],
    execute: function () {
      var _class;
      cclegacy._RF.push({}, "05463jCe1VC0Yrax4chBUNB", "BasePrefab", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BasePrefab = exports('default', ccclass(_class = /*#__PURE__*/function (_BaseComponent) {
        _inheritsLoose(BasePrefab, _BaseComponent);
        function BasePrefab() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseComponent.call.apply(_BaseComponent, [this].concat(args)) || this;
          // 单个界面展示而不带有黑色遮罩 
          _this._prefabScripts = [];
          return _this;
        }
        var _proto = BasePrefab.prototype;
        _proto.setSprite = function setSprite(sp, url, cb) {
          var _this2 = this;
          if (cb === void 0) {
            cb = null;
          }
          if (Utils.isNull(url)) {
            sp.spriteFrame = null;
            return;
          }

          //防止连续两次赋值，由于加载速度不同，导致图片为第一次的图片
          var flagId = Symbol();
          sp.node["flagId"] = flagId;
          this.loadAsset(url, function (spriteframe) {
            if (_this2.nodeIsValid(sp) && sp.node["flagId"] && sp.node["flagId"] == flagId) {
              sp.spriteFrame = spriteframe;
              cb && cb(spriteframe);
            }
          }, SpriteFrame);
        };
        _proto.setSpriteShowGray = function setSpriteShowGray(sp, showGray) {
          if (showGray === void 0) {
            showGray = true;
          }
          if (this.nodeIsValid(sp)) {
            sp.grayscale = showGray;
          }
        };
        _proto.setSpriteColor = function setSpriteColor(sp, colorStr) {
          var color = new Color().fromHEX(colorStr);
          sp = sp instanceof Node ? sp.getComponent(Sprite) : sp;
          sp.color = color;
        };
        _proto.setLabShowGray = function setLabShowGray(lab, gray) {
          if (gray === void 0) {
            gray = true;
          }
          if (gray == false) {
            return;
          }
          var grayC = lab.color.r * 0.2126 + lab.color.g * 0.7152 + lab.color.b * 0.0722;
          var color = new Color(grayC, grayC, grayC);
          lab.color = color;
        };
        _proto.setTexture = function setTexture(sp, url, cb) {
          if (cb === void 0) {
            cb = null;
          }
          if (Utils.isNull(url)) {
            sp.spriteFrame = null;
            return;
          }
          assetManager.loadRemote(url, {
            ext: '.jpg'
          }, function (err, imageAsset) {
            var sf = new SpriteFrame();
            var texture = new Texture2D();
            texture.image = imageAsset;
            sf.texture = texture;
            sp.spriteFrame = sf;
            if (cb) {
              cb();
            }
          });
        }

        /**
         * 
         * @param dra 龙骨
         * @param path 模型path
         * @param aniName 动画名
         * @param playTime 播放次数
         * @param timescale 速度
         * @param cb 完成callBack
         * @param armatureName 
         * @param modelId modelId
         */
        // protected setDragon(dra: dragonBones.ArmatureDisplay, path: string, aniName: string = "", playTime: number = 0, timescale: number = 1, cb: Function = undefined) {
        //     if (Utils.isNull(path)) {
        //         dra.dragonAsset = null;
        //         dra.dragonAtlasAsset = null;
        //         return;
        //     }

        //     //防止连续两次赋值，由于加载速度不同，导致龙骨为第一次的龙骨
        //     let flagId = Symbol();
        //     dra.node["flagId"] = flagId;
        //     this.loadAsset(path, (asset, atlas) => {
        //         if (this.nodeIsValid(dra) && dra.node["flagId"] && dra.node["flagId"] == flagId) {
        //             dra.animationName = null;
        //             dra.dragonAsset = asset;
        //             dra.dragonAtlasAsset = atlas;
        //             dra.armatureName = JSON.parse(asset.dragonBonesJson)["armature"][0]["name"];
        //             dra.timeScale = timescale;
        //             dra.playAnimation(aniName, playTime);
        //             Boolean(cb) && cb(dra, asset, atlas);
        //         }
        //     }, dragonBones.DragonBonesAsset);
        // }
        ;

        _proto.loadPrefab = function loadPrefab(path, cb, errorCb) {
          var _this3 = this;
          if (cb === void 0) {
            cb = null;
          }
          if (errorCb === void 0) {
            errorCb = null;
          }
          this.loadAsset(path, function (node) {
            if (Boolean(_this3)) {
              cb && cb(node);
            }
          }, Prefab, errorCb);
        };
        _proto.setSpine = function setSpine(spine, path, cb, errorCb) {
          var _this4 = this;
          if (cb === void 0) {
            cb = null;
          }
          if (errorCb === void 0) {
            errorCb = null;
          }
          if (Utils.isNull(path)) {
            spine.skeletonData = null;
            return;
          }
          var flagId = Symbol();
          spine.node["flagId"] = flagId;
          this.loadAsset(path, function (res) {
            if (_this4.nodeIsValid(spine) && spine.node["flagId"] && spine.node["flagId"] == flagId) {
              var copy = new sp.SkeletonData(); //拷贝一份纹理，避免重复纹理缓存
              js.mixin(copy, res);
              copy._uuid = res._uuid + "_" + timeUtils.getNow() + "_copy"; //增加一个时间戳 读取到毫秒应该不会重复吧？
              var old = copy.name;
              var newName = copy.name + '_copy';
              copy.name = newName;
              copy.atlasText = copy.atlasText.replace(old, newName);
              copy.textureNames[0] = newName + '.png';
              copy.init && copy.init();
              spine.skeletonData = copy;
              // spine.skeletonData = res;
              spine.markForUpdateRenderData();
              cb && cb();
            }
          }, sp.SkeletonData, errorCb);
        }

        //外部图片皮肤替换
        ;

        _proto.spineChangeSlot = function spineChangeSlot(sk, slotName, path) {
          var _this5 = this;
          if (path === void 0) {
            path = "equipSkin/empty";
          }
          if (Utils.isNull(path)) {
            sk.setSlotTexture(slotName, null);
            return;
          }
          var slot;
          slot = sk.findSlot(slotName);
          if (!slot) {
            MyLog.warn('spineChangeSlot slot not found:', slotName);
            return;
          }

          //防止连续两次赋值，由于加载速度不同，导致图片为第一次的图片
          var flagId = Utils.onceNotRepeatNum;
          slot["flagId"] = flagId;
          this.loadAsset(path, function (tex2d) {
            if (_this5.nodeIsValid(sk) && slot["flagId"] && slot["flagId"] == flagId) {
              if (tex2d == null) {
                MyLog.warn('spineChangeSlot tex2d null:', slotName);
                return;
              }
              sk.setSlotTexture(slotName, tex2d, true);
              sk.markForUpdateRenderData();
            }
          }, Texture2D);
        };
        _proto.setTextLimitLen = function setTextLimitLen(label, str, len, replaceStr) {
          if (replaceStr === void 0) {
            replaceStr = "";
          }
          str = GC.language.getStrByLen(str, len, replaceStr);
          this.setText(label, str);
        };
        _proto.setText = function setText(label, msg) {
          if (this.nodeIsValid(label)) {
            var _GC$language;
            if (Utils.isNull(msg)) {
              label.string = "";
              return;
            }
            for (var _len2 = arguments.length, params = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
              params[_key2 - 2] = arguments[_key2];
            }
            var text = (_GC$language = GC.language).getLocal.apply(_GC$language, [msg].concat(params));
            if (!text.startsWith("缺少字段")) {
              msg = text;
            }
            label.string = String(msg);
          }
        };
        _proto.setLabelColor = function setLabelColor(label, colorStr) {
          var color = new Color().fromHEX(colorStr);
          label = label instanceof Node ? label.getComponent(Label) : label;
          label.color = color;
        }

        //打字机效果
        ;

        _proto.setTextTyper = function setTextTyper(lab, str, callBack) {
          var timer = 0;
          var delimiterCharList = ['✁', '✂', '✃', '✄', '✺', '✻', '✼', '❄', '❅', '❆', '❇', '❈', '❉', '❊'];
          var regexp = /<.+?\/?>/g;
          var matchArr = str.match(regexp);
          var delimiterChar = delimiterCharList.find(function (item) {
            return str.indexOf(item) == -1;
          });
          var replaceStr = str.replace(regexp, delimiterChar);
          var tagInfoArr = [];
          var temp = [];
          var tagInfo = {};
          var num = 0;
          for (var i = 0; i < replaceStr.length; i++) {
            if (replaceStr[i] == delimiterChar) {
              temp.push(i);
              if (temp.length >= 2) {
                tagInfo.endStr = matchArr[tagInfoArr.length * 2 + 1];
                tagInfo.endtIdx = i - num;
                tagInfoArr.push(tagInfo);
                temp = [];
                tagInfo = {};
              } else {
                tagInfo.startIdx = i - num;
                tagInfo.startStr = matchArr[tagInfoArr.length * 2];
              }
              num += 1;
            }
          }
          var showCharArr = str.replace(regexp, '').split('');
          var typerArr = [];
          for (var _i = 1; _i <= showCharArr.length; _i++) {
            var _temp = showCharArr.join('').slice(0, _i);
            var addLen = 0;
            for (var j = 0; j < tagInfoArr.length; j++) {
              var _tagInfo = tagInfoArr[j];
              var start = _tagInfo.startIdx;
              var end = _tagInfo.endtIdx;
              if (_i > start && _i <= end) {
                _temp = _temp.slice(0, start + addLen) + _tagInfo.startStr + _temp.slice(start + addLen) + _tagInfo.endStr;
                addLen += _tagInfo.startStr.length + _tagInfo.endStr.length;
              } else if (_i > end) {
                _temp = _temp.slice(0, start + addLen) + _tagInfo.startStr + _temp.slice(start + addLen, end + addLen) + _tagInfo.endStr + _temp.slice(end + addLen);
                addLen += _tagInfo.startStr.length + _tagInfo.endStr.length;
              }
            }
            typerArr.unshift(_temp);
          }
          timer && clearInterval(timer);
          timer = setInterval(function () {
            if (typerArr.length) {
              lab.string = typerArr.pop();
            } else {
              timer && clearInterval(timer);
              callBack && callBack();
            }
          }, 80);
          return timer;
        }

        /**
         * 设置描边
         * @param label 
         * @param outLineColor 
         * @param outLineWidth 
         */;
        _proto.setOutLine = function setOutLine(label, outLineColor, outLineWidth) {
          if (outLineWidth === void 0) {
            outLineWidth = null;
          }
          if (this.nodeIsValid(label) && outLineColor) {
            var color = outLineColor instanceof Color ? outLineColor : new Color().fromHEX(outLineColor);
            label.enableOutline = true;
            label.outlineColor = color;
            outLineWidth && (label.outlineWidth = outLineWidth);
          }
        };
        _proto.setShadow = function setShadow(label, shadowColor, offset) {
          if (offset === void 0) {
            offset = null;
          }
          if (this.nodeIsValid(label) && shadowColor) {
            var color = shadowColor instanceof Color ? shadowColor : new Color().fromHEX(shadowColor);
            label.enableShadow = true;
            label.shadowColor = color;
            offset && (label.shadowOffset = offset);
          }
        };
        _proto.setFontSize = function setFontSize(label, size) {
          if (this.nodeIsValid(label) && !isNaN(size)) {
            label.fontSize = size;
          }
        };
        _proto.setFont = function setFont(lab, fontName, cb) {
          var _this6 = this;
          if (cb === void 0) {
            cb = null;
          }
          if (Utils.isNull(fontName)) {
            lab.font = null;
            return;
          }
          var flagId = Symbol();
          lab.node["flagId"] = flagId;
          this.loadAsset(fontName, function (font) {
            if (_this6.nodeIsValid(lab) && lab.node["flagId"] && lab.node["flagId"] == flagId) {
              lab.font = font;
              cb && cb(font);
            }
          }, Font);
        };
        _proto.setOpacity = function setOpacity(node, v) {
          if (this.nodeIsValid(node)) {
            var n = node instanceof Component ? node.node : node;
            if (!n.getComponent(UIOpacity)) {
              n.addComponent(UIOpacity);
            }
            n.getComponent(UIOpacity).opacity = v;
          }
        };
        _proto.setActive = function setActive(node, act) {
          if (this.nodeIsValid(node)) {
            if (node instanceof Node) {
              node.active = Boolean(act);
            } else if (node instanceof Component) {
              node.node.active = Boolean(act);
            }
          }
        };
        _proto.setScale = function setScale(node, scaleV) {
          if (scaleV === void 0) {
            scaleV = 1;
          }
          if (this.nodeIsValid(node)) {
            var n = node instanceof Component ? node.node : node;
            n.setScale(scaleV, scaleV);
          }
        };
        _proto.setPosHandler = function setPosHandler(node, newPosOrX, y) {
          if (this.nodeIsValid(node)) {
            var n = node instanceof Component ? node.node : node;
            if (newPosOrX instanceof Vec2 || newPosOrX instanceof Vec3) {
              n.setPosition(newPosOrX);
            } else if (typeof newPosOrX == "number") {
              n.setPosition(newPosOrX, y);
            }
          }
        };
        _proto.nodeIsValid = function nodeIsValid(node) {
          if (Boolean(this) && Boolean(node)) {
            if (node instanceof Node) {
              return node.isValid;
            } else if (node instanceof Component) {
              return node.node && node.node.isValid;
            }
          }
          return false;
        }

        /**
         * 生成对象
         * @param url
         * @param type
         * @param handle
         */;
        _proto.loadAsset = function loadAsset(path, callBack, asset_type, errorCb) {
          var _this7 = this;
          if (errorCb === void 0) {
            errorCb = null;
          }
          switch (asset_type) {
            case Prefab:
              {
                GC.res.loadRes(path, Prefab, function (node) {
                  // 使用类型字符串检查避免循环引用
                  if (_this7.constructor.name === 'BaseDialog') {
                    var prefabComponent = node.getComponent(BasePrefab);
                    if (prefabComponent) {
                      _this7._prefabScripts.push(prefabComponent);
                    }
                  }
                  callBack && callBack(node);
                }, errorCb);
              }
              break;
            case SpriteFrame:
              path += "/spriteFrame";
              GC.res.loadRes(path, asset_type, callBack);
              break;
            case Texture2D:
              path += "/texture";
              GC.res.loadRes(path, asset_type, callBack);
              break;
            default:
              {
                GC.res.loadRes(path, asset_type, callBack);
              }
              break;
          }
        };
        _proto.onBeforeDestory = function onBeforeDestory() {
          if (!Utils.isNull(this._prefabScripts)) {
            this._prefabScripts.forEach(function (prefab) {
              return !prefab.isValid && prefab.onBeforeDestory();
            });
            this._prefabScripts.length = 0;
          }
        };
        _proto.onDestroy = function onDestroy(release) {
          _BaseComponent.prototype.onDestroy.call(this);
        };
        return BasePrefab;
      }(BaseComponent)) || _class);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaseScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LodingView.ts', './PathCongfig.ts', './GameControl.ts', './BasePrefab.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, AudioSource, Node, view, screen, ResolutionPolicy, UITransform, UIOpacity, Widget, LodingView, PrefabPath, GC, BasePrefab;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      AudioSource = module.AudioSource;
      Node = module.Node;
      view = module.view;
      screen = module.screen;
      ResolutionPolicy = module.ResolutionPolicy;
      UITransform = module.UITransform;
      UIOpacity = module.UIOpacity;
      Widget = module.Widget;
    }, function (module) {
      LodingView = module.default;
    }, function (module) {
      PrefabPath = module.PrefabPath;
    }, function (module) {
      GC = module.GC;
    }, function (module) {
      BasePrefab = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "e4fbfDViR1BgJaUmLJWQEcq", "BaseScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BaseScene = exports('default', (_dec = property(AudioSource), _dec2 = property(AudioSource), _dec3 = property(Node), ccclass(_class = (_class2 = /*#__PURE__*/function (_BasePrefab) {
        _inheritsLoose(BaseScene, _BasePrefab);
        function BaseScene() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BasePrefab.call.apply(_BasePrefab, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "soundMgr", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "musicMgr", _descriptor2, _assertThisInitialized(_this));
          _this.mapLayer = null;
          _this.upMapLayer = null;
          _this.uiLayer = null;
          _this.moveLayer = null;
          _this.dialogLayer = null;
          _this.tipsLayer = null;
          _this.guideLayer = null;
          _this.loadingLayer = null;
          _this.touchLayer = null;
          _initializerDefineProperty(_this, "blackMask", _descriptor3, _assertThisInitialized(_this));
          _this._lodingView = null;
          _this._isLoadSoftGuide = false;
          return _this;
        }
        var _proto = BaseScene.prototype;
        _proto.onLoad = function onLoad(adapt) {
          if (adapt === void 0) {
            adapt = true;
          }
          _BasePrefab.prototype.onLoad.call(this);
          GC.scene.curScene = this;
          adapt && this.adaptView();
          this.blackMask.setSiblingIndex(9999);
        };
        _proto.addLayers = function addLayers() {
          this.mapLayer = this.addLayer("mapLayer", 1);
          this.uiLayer = this.addLayer("uiLayer", 2);
          this.moveLayer = this.addLayer("moveLayer", 3);
          this.dialogLayer = this.addLayer("dialogLayer", 4);
          this.tipsLayer = this.addLayer("tipsLayer", 5);
          this.guideLayer = this.addLayer("guideLayer", 6);
          this.loadingLayer = this.addLayer("loadingLayer", 7);
          this.touchLayer = this.addLayer("touchLayer", 8);
          this.initLoadingLayer();
        };
        _proto.adaptView = function adaptView() {
          var designS = view.getDesignResolutionSize();
          var ratio = screen.windowSize.height / screen.windowSize.width;
          var fitHeight = ratio < designS.height / designS.width;
          var policy = fitHeight ? ResolutionPolicy.FIXED_HEIGHT : ResolutionPolicy.FIXED_WIDTH;
          // view.setDesignResolutionSize(designS.width, designS.height, policy)
          view.setResolutionPolicy(policy);
        };
        _proto.initLoadingLayer = function initLoadingLayer() {
          var _this2 = this;
          this.loadPrefab(PrefabPath.loadingView, function (node) {
            node.parent = _this2.loadingLayer;
            _this2._lodingView = node.getComponent(LodingView);
          });
          this.setActive(this.loadingLayer, false);
        };
        _proto.showLoading = function showLoading(showBg, autoRemove, delay) {
          var _this3 = this;
          if (showBg === void 0) {
            showBg = true;
          }
          if (autoRemove === void 0) {
            autoRemove = false;
          }
          if (delay === void 0) {
            delay = 5;
          }
          this.setActive(this.loadingLayer, true);
          this._lodingView && this._lodingView.showBg(showBg);
          if (autoRemove) {
            this.unscheduleAllCallbacks();
            this.scheduleOnce(function () {
              _this3.hideLoading();
            }, delay);
          }
        };
        _proto.hideLoading = function hideLoading() {
          this.setActive(this.loadingLayer, false);
        };
        _proto.addLayer = function addLayer(name, index) {
          var l = new Node(name);
          l.addComponent(UITransform);
          l.addComponent(UIOpacity);
          var w = l.addComponent(Widget);
          w.isAlignTop = true;
          w.isAlignBottom = true;
          w.isAlignLeft = false;
          w.isAlignRight = false;
          w.top = 0;
          w.bottom = 0;
          l.getComponent(UITransform).width = view.getDesignResolutionSize().width;
          this.node.insertChild(l, index);
          return l;
        };
        _proto.showDownLayers = function showDownLayers() {
          this.mapLayer.getComponent(UIOpacity).opacity = 255;
          this.uiLayer.getComponent(UIOpacity).opacity = 255;
        };
        _proto.hideDownLayers = function hideDownLayers() {
          this.mapLayer.getComponent(UIOpacity).opacity = 0;
          this.uiLayer.getComponent(UIOpacity).opacity = 0;
        };
        _proto.showGuide = function showGuide(node) {};
        _proto.hideGuide = function hideGuide() {};
        return BaseScene;
      }(BasePrefab), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "soundMgr", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "musicMgr", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "blackMask", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaseSdk.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, cclegacy;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "80909w8ggRP97kWAnZN3/jK", "BaseSdk", undefined);
      var BaseSdk = exports('default', /*#__PURE__*/function () {
        function BaseSdk() {}
        _createClass(BaseSdk, null, [{
          key: "adHostData",
          get: function get() {
            return this._adHostData;
          }

          //是否是从充值进入的客服
        }, {
          key: "fromRechargeIntoKefu",
          get: function get() {
            return this._fromRechargeIntoKefu;
          },
          set: function set(v) {
            this._fromRechargeIntoKefu = v;
          }
        }]);
        return BaseSdk;
      }());
      BaseSdk._adHostData = {
        shareValue: 1,
        rewardValue: 0
      };
      BaseSdk._fromRechargeIntoKefu = false;
      BaseSdk.option = null;
      BaseSdk.system_info = null;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BlSdk.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EnumConfig.ts', './GameControl.ts', './MyLog.ts', './BaseSdk.ts'], function (exports) {
  var _inheritsLoose, cclegacy, EVideoOrShare, GC, MyLog, BaseSdk;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      EVideoOrShare = module.EVideoOrShare;
    }, function (module) {
      GC = module.GC;
    }, function (module) {
      MyLog = module.default;
    }, function (module) {
      BaseSdk = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "e2fefKmpcBI6I8CTKlbNA8/", "BlSdk", undefined);
      var BlSdk = exports('default', /*#__PURE__*/function (_BaseSdk) {
        _inheritsLoose(BlSdk, _BaseSdk);
        function BlSdk() {
          return _BaseSdk.apply(this, arguments) || this;
        }
        BlSdk.init = function init() {
          this.system_info = bl.getSystemInfoSync();
          this.option = bl.getLaunchOptionsSync();
          MyLog.green("current device system info  ", this.system_info);
          MyLog.green("current device option  ", this.option);
          this.openShareMenu();

          // wx?.onMemoryWarning((res) => wx?.triggerGC());
          this.initAd();

          // this.updateManager();
        };

        BlSdk.checkScene = function checkScene(cb) {
          if (!bl.checkScene) {
            cb && cb(false);
            return;
          }
          bl.checkScene({
            scene: "sidebar",
            success: function success(res) {
              MyLog.log("check scene success: ", res.isExist);
              //成功回调逻辑
              cb && cb(true);
            },
            fail: function fail(res) {
              MyLog.log("check scene fail:", res);
              //失败回调逻辑
              cb && cb(false);
            }
          });
        };
        BlSdk.navigateToScene = function navigateToScene(cb) {
          if (!bl.navigateToScene) {
            GC.dialog.comTipDlg("跳转失败");
            cb && cb(false);
            return;
          }
          bl.navigateToScene({
            scene: "sidebar",
            success: function success(res) {
              MyLog.log("navigate to scene success");
              // 跳转成功回调逻辑
              cb && cb(true);
            },
            fail: function fail(res) {
              MyLog.log("navigate to scene fail: ", res);
              // 跳转失败回调逻辑
              GC.dialog.comTipDlg("跳转失败");
              cb && cb(false);
            }
          });
        };
        BlSdk.addShortcut = function addShortcut(cb) {
          bl.addShortcut({
            success: function success() {
              MyLog.log("添加桌面成功");
              cb && cb(true);
              // GC.data.game.mod.data.isAddShortcut = true;
              // self.setActive(self.addDeskTopBtn, false);
              // GC.sdk.clickStat(EStatType.add_desktop)
            },

            fail: function fail(err) {
              MyLog.log("添加桌面失败", err.errMsg);
              GC.dialog.comTextTips("添加桌面失败");
              cb && cb(false);
            }
          });
        }

        // 检测是否已经添加桌面
        ;

        BlSdk.checkShortcut = function checkShortcut(sucCB) {
          bl.checkShortcut({
            success: function success(res) {
              MyLog.log("checkShortcut suc-----", res.status);
              sucCB && sucCB(res.status);
            },
            fail: function fail(res) {
              MyLog.log("checkShortcut fail-----", res);
              sucCB && sucCB(false);
            }
          });
        }

        /*** 登录 */;
        BlSdk.login = function login(callback) {
          MyLog.purple('开始登录1');
          bl.login({
            success: function success(login_data) {
              MyLog.purple('wxLogin-------', login_data);
              if (login_data.code) {
                callback && callback(login_data.code);
                // this.getSetting(login_data, callback)
              } else {
                MyLog.purple('登录失败！' + login_data.errMsg);
              }
            },
            fail: function fail(res) {
              MyLog.purple('开始登录失败', res);
              GC.dialog.comTextTips("worn_net_login");
            }
          });
        };
        BlSdk.getSetting = function getSetting(code, callback) {
          bl.getSetting({
            success: function success(res) {
              MyLog.purple('getSetting-------', res);
              if (res.authSetting['scope.userInfo']) {
                // 已经授权，可以直接调用 getUserInfo 获取头像昵称
                BlSdk.getUserInfo(code, callback);
              } else {
                BlSdk.loginSuc(null, code, callback);
              }
            }
          });
        };
        BlSdk.openSetting = function openSetting(callback) {
          bl.openSetting({
            success: function success(res) {
              MyLog.log("success2::" + JSON.stringify(res));
              if (res.authSetting['scope.userInfo']) {
                callback && callback();
              }
            }
          });
        };
        BlSdk.getUserInfo = function getUserInfo(code, callback) {
          bl.getUserInfo({
            withCredentials: true,
            success: function success(res) {
              MyLog.purple('getUserInfo-------', res);
              BlSdk.loginSuc(res, code, callback);
            }
          });
        };
        BlSdk.getAuthorizeUserInfo = function getAuthorizeUserInfo(callBack) {
          bl.getSetting({
            success: function success(res) {
              MyLog.purple('getSetting-------', res);
              if (res.authSetting['scope.userInfo']) {
                callBack && callBack(true);
              } else {
                callBack && callBack(false);
              }
            }
          });
        };
        BlSdk.authorize = function authorize(sucCB) {
          MyLog.log(" 开始 authorize:");
          bl.authorize({
            scope: "scope.userInfo",
            success: function success(res) {
              MyLog.log("success::" + JSON.stringify(res));
              sucCB && sucCB();
            },
            fail: function fail(err) {
              MyLog.log(" authorize fail:" + JSON.stringify(err));
              if (err.errMsg === "authorize:fail auth deny") {
                BlSdk.showModal(function (res) {
                  if (res.confirm) {
                    BlSdk.openSetting(sucCB);
                  }
                }, "排行榜需获取用户信息，请您确定重新获取授权");
              }
            }
          });
        };
        BlSdk.loginSuc = function loginSuc(res, code, callback) {
          callback && callback(code, res);
        };
        BlSdk.quit = function quit() {
          bl.exitMiniProgram();
        };
        BlSdk.restart = function restart() {
          bl.restartMiniProgram({});
        };
        BlSdk.showModal = function showModal(callFunc, content, showCancel, title, sureTxt) {
          if (callFunc === void 0) {
            callFunc = null;
          }
          if (showCancel === void 0) {
            showCancel = false;
          }
          if (title === void 0) {
            title = '提示';
          }
          if (sureTxt === void 0) {
            sureTxt = '确定';
          }
          bl.showModal({
            title: title,
            content: content,
            showCancel: showCancel,
            confirmText: sureTxt,
            success: function success(res) {
              if (res.confirm) {
                MyLog.log('用户点击确定');
              } else if (res.cancel) {
                MyLog.log('用户点击取消');
              }
              callFunc && callFunc(res);
            }
          });
        }

        //震动
        ;

        BlSdk.vibrate = function vibrate() {
          //heavy、medium、light
          bl.vibrateShort();
        };
        BlSdk.openShareMenu = function openShareMenu() {
          bl.showShareMenu({
            withShareTicket: true
            // menus: ['shareAppMessage', 'shareTimeline']
          });

          bl.onShareAppMessage(function () {
            var params = {
              title: GC.config.game.shareTitles[Math.floor(Math.random() * GC.config.game.shareTitles.length)],
              imageUrl: GC.config.game.shareImags[Math.floor(Math.random() * GC.config.game.shareImags.length)],
              query: "userId=" + GC.data.user.user_id + "&adType=" + EVideoOrShare.share_menu
            };
            return params;
          });
          // bl.onShareTimeline(() => {
          //     let params = {
          //         title: GC.config.game.shareTitles[Math.floor(Math.random() * GC.config.game.shareTitles.length)],
          //         imageUrl: GC.config.game.shareImags[Math.floor(Math.random() * GC.config.game.shareImags.length)],
          //         query: `userId=${GC.data.user.user_id}&adType=${EVideoOrShare.share_timeLine}`
          //     }
          //     return params;
          // })
        }

        //分享
        ;

        BlSdk.share = function share(adType, callBack, query, channel, extra, isHostShare) {
          if (callBack === void 0) {
            callBack = function callBack() {};
          }
          if (query === void 0) {
            query = '';
          }
          this._adType = adType;
          var params = GC.config.game.getShareParams(adType, query);
          params.success = function (res) {
            return callBack && callBack(true);
          };
          params.fail = function (err) {
            return callBack && callBack(false);
          };
          bl.shareAppMessage(params);
        };
        BlSdk.initAd = function initAd() {
          // this.initBanner();
          this.reloadRewardAd();
        }

        // reward ad
        ;

        BlSdk.reloadRewardAd = function reloadRewardAd() {
          var _this = this;
          if (this._rewardAd) {
            this._rewardAd.destroy();
            this._rewardAd = null;
          }
          this._rewardAd = bl.createRewardedVideoAd({
            adUnitId: GC.config.game.videoId,
            multiton: true
          });
          this._rewardAd.onError(function (err) {
            MyLog.log(err);
          });
          MyLog.log("adSdk " + GC.config.game.videoId);
          this._rewardAd.onClose(function (res) {
            MyLog.log('adSdk 激励视频 广告关闭 ' + GC.config.game.videoId);
            // 用户点击了【关闭广告】按钮
            // 小于 2.1.0 的基础库版本，res 是一个 undefined
            if (res && res.isEnded || res === undefined) {
              // 正常播放结束，可以下发游戏奖励
              _this._onAdSuccess && _this._onAdSuccess(res);
            } else {
              MyLog.log('播放中途退出，不下发游戏奖励');
            }
            // GC.data.level.info.startTimeReduceOutTime(timeUtils.getNow() - this._rewardAdStartTime);
            _this.reloadRewardAd();
          });
          this._rewardAd.onLoad();
          this._rewardAd.load().then(function () {});
        };
        BlSdk.showAd = function showAd(onSuccess, adType) {
          this._adType = adType;
          this._onAdSuccess = onSuccess;
          this._rewardAd.show()["catch"](function (err) {
            MyLog.log('adSdk  激励视频 错误 ' + err);
          });
        };
        return BlSdk;
      }(BaseSdk));
      BlSdk._adType = null;
      BlSdk._rewardAd = null;
      BlSdk._onAdSuccess = null;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ClickEffect.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EffectManager.ts'], function (exports) {
  var _asyncToGenerator, _regeneratorRuntime, cclegacy, EffectType, EffectManager;
  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      EffectType = module.EffectType;
      EffectManager = module.EffectManager;
    }],
    execute: function () {
      cclegacy._RF.push({}, "5bb200IJD9KGrif24GZGDHf", "ClickEffect", undefined);

      /**
       * 点击特效类
       */
      var ClickEffect = exports('ClickEffect', /*#__PURE__*/function () {
        function ClickEffect() {}
        /**
         * 播放点击特效
         * @param targetNode 目标节点（点击的节点）
         * @param onComplete 播放完成回调
         */
        ClickEffect.play = /*#__PURE__*/
        function () {
          var _play = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(targetNode, onComplete) {
            var worldPos;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (targetNode) {
                    _context.next = 3;
                    break;
                  }
                  console.warn('ClickEffect: 目标节点为空');
                  return _context.abrupt("return");
                case 3:
                  if (!this.effectMgr) {
                    this.effectMgr = EffectManager.getInstance();
                  }
                  if (this.effectMgr) {
                    _context.next = 7;
                    break;
                  }
                  console.warn('ClickEffect: EffectManager未初始化');
                  return _context.abrupt("return");
                case 7:
                  // 获取目标节点的世界位置
                  worldPos = targetNode.getWorldPosition(); // 播放点击特效
                  _context.next = 10;
                  return this.effectMgr.playEffect(worldPos, {
                    type: EffectType.Click,
                    resourcePath: 'game/images/seqPic/effect/点击',
                    fps: 24,
                    loop: false
                  }, onComplete);
                case 10:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function play(_x, _x2) {
            return _play.apply(this, arguments);
          }
          return play;
        }();
        return ClickEffect;
      }());
      ClickEffect.effectMgr = null;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/cn_sensitive.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "0a8d2rrCoNOv77JFApcUnjq", "cn_sensitive", undefined);
      var cn_shield = exports('default', ["台独"]);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/cn_text.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "91278KvoclCqpgRvlEuWSAz", "cn_text", undefined);
      var cn_text = exports('default', {
        "com_loading1": "小提示:提示1..",
        "com_loading2": "小提示:提示2..",
        "com_loading3": "小提示:提示3..",
        "company_info": "著作权人：{0}",
        "plate_number_info": "登记号：{0}",
        "game_tip_info": "抵制不良游戏，拒绝盗版游戏。注意自我保护，谨防受骗上当。\n适度游戏益脑，沉迷游戏伤身。合理安排时间，享受健康生活。",
        "version_info": "版本：{0}",
        "worn_net": "网络异常，请刷新重试~",
        "worn_net_relogin": "您的网络异常，请检查重新登录尝试~",
        "worn_net_login": "登录网络异常，请刷新重试~",
        "com_video_not_finish_tip": "观看完整视频才可以获得奖励",
        "share_fail": "分享成功后可以获得奖励哦~",
        "no_video_tip": "暂无广告，请稍后再试",
        "no_share_tip": "今日分享次数已达上限~",
        "scene_loading": "场景初始化中~",
        "com_lv": "Lv.{0}",
        "com_lv_cn": "第{0}关",
        "com_level_cn": "{0}级",
        "com_x%": "{0}%",
        "com_+x%": "+{0}%",
        "com_x/x": "{0}/{1}",
        "com_free_x/x": "免费{0}/{1}",
        "com_-x": "-{0}",
        "com_+x": "+{0}",
        "com_x-x": "{0}-{1}",
        "com_kh": "({0})",
        "com_xs": "{0}s",
        "com_xx": "x{0}",
        "com_pro_x%": "进度{0}%",
        "com_text_tip": "提示",
        "com_sure": "确定",
        "com_cancel": "取消",
        "com_get": "领取",
        "com_have_get": "已领取",
        "com_have_finish": "已完成",
        "com_giveup": "残忍拒绝",
        "com_win": "胜利",
        "com_fail": "失败",
        "com_xx_lv": "第{0}关",
        "com_func_unlock_top": "暂未开放",
        "com_wz_jh": "激活",
        "com_wz_wjh": "未激活",
        "com_wz_yjh": "已激活",
        "com_wz_xx_js": "{0}装备后激活",
        "com_get_reward": "成功获得{0}{1}",
        "com_get_reward2": "获得{0}{1}",
        "get_reward_success": "奖励领取成功",
        //
        "curversion_doesnot_support": "当前抖音版本不支持跳转",
        //
        "com_another_chanllenge": "再次挑战",
        "com_back": "返回",
        "com_single_get": "单倍领取",
        "com_double_get": "双倍领取",
        "com_xmul_get": "{0}倍领取",
        "com_prop_no": "资源不足",
        "com_times_no": "次数不足",
        "com_last_time": "剩余时间：{0}",
        "hp+xx": "生命+{0}",
        "atk+xx": "攻击+{0}",
        "def+xx": "防御+{0}",
        "today_last_times": "今日剩余次数：{0}",
        "chapter_tip": "第{0}章 {1}",
        "skin_big_reward_tip": "再铸造<color=#FE7252>{0}</color>次，必获得一件<color=#FE7252>神装</color>",
        "quality1": "普通",
        "quality2": "精良",
        "quality3": "珍稀",
        "quality4": "传说"
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ComTextTip.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BasePrefab.ts', './EnumConfig.ts', './GameControl.ts', './ResUtils.ts', './Utils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Sprite, Color, v3, UITransform, UIOpacity, Tween, tween, Vec3, BasePrefab, EQuality, GC, ResUtils, Utils;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Sprite = module.Sprite;
      Color = module.Color;
      v3 = module.v3;
      UITransform = module.UITransform;
      UIOpacity = module.UIOpacity;
      Tween = module.Tween;
      tween = module.tween;
      Vec3 = module.Vec3;
    }, function (module) {
      BasePrefab = module.default;
    }, function (module) {
      EQuality = module.EQuality;
    }, function (module) {
      GC = module.GC;
    }, function (module) {
      ResUtils = module.default;
    }, function (module) {
      Utils = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "cc505cZ4AxBn7GpEra249Dj", "ComTextTip", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ComTextTip = exports('default', (_dec = ccclass('ComTextTip'), _dec2 = property(Label), _dec3 = property('RichText'), _dec4 = property(Sprite), _dec(_class = (_class2 = /*#__PURE__*/function (_BasePrefab) {
        _inheritsLoose(ComTextTip, _BasePrefab);
        function ComTextTip() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BasePrefab.call.apply(_BasePrefab, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "left", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "right", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "img", _descriptor3, _assertThisInitialized(_this));
          _this._endPosY1 = 0;
          _this._endPosY2 = 0;
          _this._delayTime = 0;
          //延迟上票的时间
          _this._data = null;
          _this.finished = function () {
            GC.pool.putComTextTip(_assertThisInitialized(_this));
          };
          return _this;
        }
        var _proto = ComTextTip.prototype;
        /**
         * 
         * @param data number或者string类型 如果是any类型 {str,imgUrl,itemVo(表示植物宝珠)}
         * @param delayTime 
         * @param pos 
         */
        _proto.initData = function initData(data, delayTime, y) {
          if (y === void 0) {
            y = 0;
          }
          this._data = data;
          this._delayTime = delayTime;
          this._endPosY1 = y + 100;
          this._endPosY2 = y + 200;
          this.initView();
        };
        _proto.initView = function initView() {
          this.setQuality();
          this.setRightStr();
          this.setLeftStr();
          this.setIcon();
          this.startAni();
        };
        _proto.setQuality = function setQuality() {
          var _this$_data;
          var quality = ((_this$_data = this._data) == null ? void 0 : _this$_data.quality) >= 0 ? this._data.quality : EQuality.white;
          var color = ResUtils.getQualityColor(quality);
          this.right.fontColor = new Color().fromHEX(color);
        };
        _proto.setRightStr = function setRightStr() {
          this.setActive(this.right, !Utils.isNull(this._data.rightStr));
          if (this.right.node.active) {
            var bStr = "<b>" + this._data.rightStr + "</b>";
            this.setText(this.right, bStr);
          }
        };
        _proto.setLeftStr = function setLeftStr() {
          this.setActive(this.left, !Utils.isNull(this._data.leftStr));
          if (this.left.node.active) {
            this.setText(this.left, this._data.leftStr);
          }
        };
        _proto.setIcon = function setIcon() {
          var _this2 = this;
          this.setActive(this.img, !Utils.isNull(this._data.icon));
          if (this.img.node.active) {
            this.setSprite(this.img, this._data.icon, function () {
              var s = _this2.getIconScale(_this2.img.node);
              _this2.img.node.scale = v3(s, s, s);
            });
          }
        };
        _proto.getIconScale = function getIconScale(node) {
          var hmul = node.getComponent(UITransform).height / 50;
          var wmul = node.getComponent(UITransform).width / 50;
          var b = Math.max(hmul, wmul);
          return b > 1 ? 1 / b : 1;
        };
        _proto.startAni = function startAni() {
          this.node.scale = v3(0.2, 0.2, 0.2);
          this.node.getComponent(UIOpacity).opacity = 0;
          Tween.stopAllByTarget(this.node);
          tween(this.node).to(0.3, {
            scale: Vec3.ONE
          }).delay(this._delayTime).to(0.8, {
            position: v3(0, this._endPosY1, 0)
          }).to(0.8, {
            position: v3(0, this._endPosY2, 0)
          }).call(this.finished).start();
          tween(this.node.getComponent(UIOpacity)).to(0.3, {
            opacity: 255
          }).delay(this._delayTime + 0.8).to(0.8, {
            opacity: 0
          }).start();
        };
        return ComTextTip;
      }(BasePrefab), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "left", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "right", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "img", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ConfigManager.ts", ['cc', './GameConfig.ts'], function (exports) {
  var cclegacy, GameConfig;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      GameConfig = module.GameConfig;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ee998R5UqFBmIWZtu468tuL", "ConfigManager", undefined);
      var ConfigManager = exports('ConfigManager', function ConfigManager() {
        this.game = void 0;
        this.game = new GameConfig();
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CountDown.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BasePrefab.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Sprite, BasePrefab;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
    }, function (module) {
      BasePrefab = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "00f74zprpJFEYUwrrZmBK00", "CountDown", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var CountDown = exports('CountDown', (_dec = ccclass('CountDown'), _dec2 = property(Sprite), _dec(_class = (_class2 = /*#__PURE__*/function (_BasePrefab) {
        _inheritsLoose(CountDown, _BasePrefab);
        function CountDown() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BasePrefab.call.apply(_BasePrefab, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "countDownSprite", _descriptor, _assertThisInitialized(_this));
          _this.duration = 0;
          _this.endTimeSec = 0;
          _this.running = false;
          return _this;
        }
        var _proto = CountDown.prototype;
        _proto.start = function start() {
          this.ensureFilledMode();
        };
        _proto.showCountDown = function showCountDown(durationSec, endTimeSec) {
          this.ensureFilledMode();
          this.duration = Math.max(0.01, durationSec || 0.01);
          this.endTimeSec = Math.max(0, endTimeSec || 0);
          this.running = true;
          this.node.active = true;
          this.refreshFillRange(Date.now() / 1000);
        };
        _proto.hide = function hide() {
          this.running = false;
          this.node.active = false;
        };
        _proto.update = function update(_deltaTime) {
          if (!this.running || !this.node.active) return;
          this.refreshFillRange(Date.now() / 1000);
        };
        _proto.ensureFilledMode = function ensureFilledMode() {
          //     if (!this.countDownSprite) {
          //         this.countDownSprite = this.getComponent(Sprite);
          //     }
          //     if (!this.countDownSprite) return;
          //     this.countDownSprite.type = Sprite.Type.FILLED;
          //     this.countDownSprite.fillType = Sprite.FillType.RADIAL;
          //     this.countDownSprite.fillCenter = this.countDownSprite.fillCenter.set(0.5, 0.5);
        };
        _proto.refreshFillRange = function refreshFillRange(nowSec) {
          if (!this.countDownSprite) return;
          var remain = Math.max(0, this.endTimeSec - nowSec);
          var ratio = Math.max(0, Math.min(1, 1 - remain / this.duration));
          this.countDownSprite.fillRange = ratio;
          if (remain <= 0) {
            this.running = false;
          }
        };
        return CountDown;
      }(BasePrefab), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "countDownSprite", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DamageText.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BasePrefab.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, instantiate, Node, UITransform, Vec3, Color, UIOpacity, tween, BasePrefab;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      instantiate = module.instantiate;
      Node = module.Node;
      UITransform = module.UITransform;
      Vec3 = module.Vec3;
      Color = module.Color;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
    }, function (module) {
      BasePrefab = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "5d795rdhQFEBYxMmOnO7ci/", "DamageText", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * 掉血飘字类
       * 用于传奇类型怪物受击时显示伤害数值
       */
      var DamageText = exports('DamageText', (_dec = ccclass('DamageText'), _dec2 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_BasePrefab) {
        _inheritsLoose(DamageText, _BasePrefab);
        function DamageText() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BasePrefab.call.apply(_BasePrefab, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "label", _descriptor, _assertThisInitialized(_this));
          _this.tweenAction = null;
          _this.isActive = false;
          return _this;
        }
        var _proto = DamageText.prototype;
        _proto.onLoad = function onLoad() {
          // 确保节点有UITransform组件
          var transform = this.node.getComponent(UITransform);
          if (!transform) {
            transform = this.node.addComponent(UITransform);
            transform.setContentSize(200, 100); // 设置初始大小
          }

          // 确保有Label组件
          if (!this.label) {
            this.label = this.node.getComponent(Label);
            if (!this.label) {
              this.label = this.node.addComponent(Label);
            }
          }

          // 确保Label的string不为空，避免显示默认的"Label"文本
          if (this.label) {
            this.label.string = '';
          }

          // 确保节点初始状态是隐藏的
          this.node.active = false;
          this.isActive = false;
        }

        /**
         * 显示掉血飘字
         * @param text 显示文本（如"-30000"）
         * @param color 文字颜色
         * @param startPos 起始位置（世界坐标）
         * @param parentNode 父节点
         */;
        _proto.show = function show(text, color, startPos, parentNode) {
          var _this2 = this;
          if (!this.label) {
            this.label = this.node.getComponent(Label);
            if (!this.label) {
              this.label = this.node.addComponent(Label);
            }
          }
          if (!this.label) {
            console.error('DamageText: Label component not found');
            return;
          }

          // 确保节点有UITransform组件
          var transform = this.node.getComponent(UITransform);
          if (!transform) {
            transform = this.node.addComponent(UITransform);
            transform.setContentSize(200, 100);
          }

          // 设置父节点（如果还没有父节点）
          if (!this.node.parent || this.node.parent !== parentNode) {
            this.node.setParent(parentNode);
          }

          // 转换为父节点的本地坐标
          var parentTransform = parentNode.getComponent(UITransform);
          var localPos;
          if (parentTransform) {
            localPos = parentTransform.convertToNodeSpaceAR(startPos);
          } else {
            // 如果没有UITransform，尝试使用世界坐标
            var worldPos = startPos.clone();
            // 如果父节点有位置，需要减去父节点的世界位置
            var parentWorldPos = parentNode.getWorldPosition();
            localPos = new Vec3(worldPos.x - parentWorldPos.x, worldPos.y - parentWorldPos.y, 0);
          }

          // 在初始位置附近随机偏移（横向小幅度，纵向主要由动效决定）
          var randomOffsetX = (Math.random() - 0.5) * 20;
          var randomOffsetY = (Math.random() - 0.5) * 10;
          localPos.x += randomOffsetX;
          localPos.y += randomOffsetY;
          localPos.z = 0;
          this.node.setPosition(localPos);

          // 强制统一样式：白色 30号字、加粗、黑色描边
          this.label.fontSize = 30;
          this.label.isBold = true;

          // 设置颜色（忽略传入 color，确保统一白字）
          this.label.color = new Color(255, 255, 255, 255);

          // 设置黑色描边，2像素宽度
          this.label.enableOutline = true;
          this.label.outlineColor = Color.BLACK;
          this.label.outlineWidth = 3;

          // 最后设置文字内容
          this.label.string = text;

          // 确保节点激活
          this.node.active = true;
          this.isActive = true;

          // 确保掉血飘字在最顶层
          this.scheduleOnce(function () {
            if (_this2.node && _this2.node.isValid && _this2.node.parent) {
              // 设置到父节点的最后一个位置（最高层级），确保在所有特效之上
              var maxIndex = _this2.node.parent.children.length - 1;
              _this2.node.setSiblingIndex(maxIndex);
            }
          }, 0);

          // 停止之前的动画
          this.stopAnimation();

          // 初始透明度为0，轻微缩小后弹出（更自然）
          var opacity = this.node.getComponent(UIOpacity) || this.node.addComponent(UIOpacity);
          opacity.opacity = 0;
          this.node.setScale(0.9, 0.9, 1);

          // 播放飘动动画（只往上飘：上移 -> 停顿 -> 渐隐）
          this.playFloatAnimation();
        }

        /**
         * 播放飘动动画（往右上方飘）
         */;
        _proto.playFloatAnimation = function playFloatAnimation() {
          var _this3 = this;
          var startPos = this.node.getPosition();

          // 两段式上移：先快速上冲、再停顿，然后继续上移并渐隐
          var rise1 = 55 + Math.random() * 15;
          var rise2 = 65 + Math.random() * 20;
          var driftX = (Math.random() - 0.5) * 18; // 轻微横向漂移（增强自然感）

          var pos1 = new Vec3(startPos.x + driftX * 0.5, startPos.y + rise1, startPos.z);
          var pos2 = new Vec3(startPos.x + driftX, startPos.y + rise1 + rise2, startPos.z);
          var opacity = this.node.getComponent(UIOpacity);
          if (!opacity) opacity = this.node.addComponent(UIOpacity);

          // 创建复合动画：上移（含停顿）+ 缩放 + 渐隐
          // 时间分配：0.22上冲 + 0.14停顿 + 0.42继续上移渐隐
          var tMove = tween(this.node).to(0.22, {
            position: pos1
          }, {
            easing: 'sineOut'
          }).delay(0.14).to(0.42, {
            position: pos2
          }, {
            easing: 'sineIn'
          });
          var tScale = tween(this.node).to(0.18, {
            scale: new Vec3(1.18, 1.18, 1)
          }, {
            easing: 'backOut'
          }).delay(0.28).to(0.28, {
            scale: new Vec3(1.02, 1.02, 1)
          }, {
            easing: 'sineIn'
          });
          var tOpacity = tween(opacity).to(0.12, {
            opacity: 255
          }).delay(0.30).to(0.52, {
            opacity: 0
          }, {
            easing: 'sineIn'
          });

          // 将 opacity tween 也纳入统一 tweenAction，保证 stopAnimation 能正确停止全部分支
          this.tweenAction = tween(this.node).parallel(tMove, tScale, tOpacity).call(function () {
            _this3.recycle();
          }).start();
        }

        /**
         * 停止动画
         */;
        _proto.stopAnimation = function stopAnimation() {
          if (this.tweenAction) {
            this.tweenAction.stop();
            this.tweenAction = null;
          }
        }

        /**
         * 回收对象到对象池
         */;
        _proto.recycle = function recycle() {
          this.stopAnimation();
          this.isActive = false;
          this.node.active = false;

          // 清空Label文本，避免显示"Label"
          if (this.label) {
            this.label.string = '';
          }

          // 重置状态
          this.node.setScale(1, 1, 1);
          var opacity = this.node.getComponent(UIOpacity);
          if (opacity) {
            opacity.opacity = 255;
          }

          // 通知对象池回收
          this.node.emit('recycle', this);
        }

        /**
         * 是否正在使用
         */;
        _proto.getIsActive = function getIsActive() {
          return this.isActive;
        }

        /**
         * 设置激活状态（供对象池使用）
         */;
        _proto.setDamageTextActive = function setDamageTextActive(active) {
          this.isActive = active;
          if (this.node) {
            this.node.active = active;
          }
        };
        _proto.onDestroy = function onDestroy() {
          this.stopAnimation();
        };
        return DamageText;
      }(BasePrefab), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      /**
       * 掉血飘字对象池
       */
      var DamageTextPool = exports('DamageTextPool', /*#__PURE__*/function () {
        function DamageTextPool() {
          this.pool = [];
          this.prefab = null;
          this.parentNode = null;
        }

        /**
         * 获取单例
         */
        DamageTextPool.getInstance = function getInstance() {
          if (!DamageTextPool.instance) {
            DamageTextPool.instance = new DamageTextPool();
          }
          return DamageTextPool.instance;
        }

        /**
         * 初始化对象池
         * @param prefab 飘字预制体
         * @param parentNode 父节点
         */;
        var _proto2 = DamageTextPool.prototype;
        _proto2.init = function init(prefab, parentNode) {
          this.prefab = prefab;
          this.parentNode = parentNode;
        }

        /**
         * 设置父节点
         * @param parentNode 父节点
         */;
        _proto2.setParentNode = function setParentNode(parentNode) {
          this.parentNode = parentNode;
        }

        /**
         * 获取父节点
         * @param referenceNode 参考节点，用于查找Canvas
         */;
        _proto2.getParentNode = function getParentNode(referenceNode) {
          if (this.parentNode) {
            return this.parentNode;
          }

          // 如果没有设置父节点，尝试查找Canvas
          if (referenceNode) {
            var current = referenceNode;
            while (current) {
              if (current.getComponent('Canvas')) {
                return current;
              }
              current = current.parent;
            }
          }
          return null;
        }

        /**
         * 从对象池获取一个飘字对象
         */;
        _proto2.get = function get() {
          // 只保留一个飘字实例：反复复用同一个节点
          // 即使外部短时间多次 show()，也会被新的 show() 动画覆盖，实现“只飘一个”的效果。
          var damageText = this.pool.length > 0 ? this.pool[0] : null;

          // 如果池为空，创建第一个
          if (!damageText) {
            var node;
            if (this.prefab) {
              node = instantiate(this.prefab);
            } else {
              node = new Node('DamageText');
            }
            damageText = node.getComponent(DamageText);
            if (!damageText) {
              damageText = node.addComponent(DamageText);
            }
            if (!damageText) return null;
            if (damageText.label) {
              damageText.label.string = '';
            }

            // 节点初始隐藏
            node.active = false;
            damageText.setDamageTextActive(false);
            if (this.parentNode) {
              this.parentNode.addChild(node);
            }
            node.on('recycle', this.onRecycle, this);
            this.pool.push(damageText);
          }

          // 如果池中不止一个，销毁多余的（保证“只飘一个”）
          if (this.pool.length > 1) {
            for (var i = 1; i < this.pool.length; i++) {
              var extra = this.pool[i];
              if (extra != null && extra.node) extra.node.destroy();
            }
            this.pool.length = 1;
          }

          // 准备复用：先清空文本，再标记激活（节点仍保持 false，直到 show() 内激活）
          if (damageText.label) {
            damageText.label.string = '';
          }
          damageText.setDamageTextActive(true);
          if (damageText.node) {
            damageText.node.active = false;
          }
          return damageText;
        }

        /**
         * 回收对象
         */;
        _proto2.onRecycle = function onRecycle(damageText) {
          // 对象已经自动设置为未激活，不需要额外处理
        }

        /**
         * 清理对象池
         */;
        _proto2.clear = function clear() {
          this.pool.forEach(function (dt) {
            if (dt && dt.node) {
              dt.node.destroy();
            }
          });
          this.pool = [];
        };
        return DamageTextPool;
      }());
      DamageTextPool.instance = null;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DataManager.ts", ['cc', './GameData.ts', './LoginData.ts', './OnlineParamData.ts', './UserData.ts'], function (exports) {
  var cclegacy, GameData, LoginData, OnlineParamData, UserData;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      GameData = module.default;
    }, function (module) {
      LoginData = module.LoginData;
    }, function (module) {
      OnlineParamData = module.default;
    }, function (module) {
      UserData = module.UserData;
    }],
    execute: function () {
      cclegacy._RF.push({}, "65881g8LO5BuIzOSBm5sU/F", "DataManager", undefined);
      var DataManager = exports('DataManager', /*#__PURE__*/function () {
        function DataManager() {
          this.login = null;
          this.game = null;
          this.user = null;
          this.onlineParam = null;
        }
        var _proto = DataManager.prototype;
        _proto.init = function init() {
          this.login == null && (this.login = new LoginData());
          this.game == null && (this.game = new GameData());
          this.user == null && (this.user = new UserData());
          this.onlineParam == null && (this.onlineParam = new OnlineParamData());
        };
        return DataManager;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DialogManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseDialog.ts', './BasePrefab.ts', './EnumConfig.ts', './EventName.ts', './PathCongfig.ts', './GameControl.ts', './DialogUtils.ts', './MyLog.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, Vec3, UIOpacity, macro, BaseDialog, BasePrefab, EQuality, EventName, DialogPath, GC, DialogUtils, MyLog;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      Vec3 = module.Vec3;
      UIOpacity = module.UIOpacity;
      macro = module.macro;
    }, function (module) {
      BaseDialog = module.default;
    }, function (module) {
      BasePrefab = module.default;
    }, function (module) {
      EQuality = module.EQuality;
    }, function (module) {
      EventName = module.EventName;
    }, function (module) {
      DialogPath = module.DialogPath;
    }, function (module) {
      GC = module.GC;
    }, function (module) {
      DialogUtils = module.DialogUtils;
    }, function (module) {
      MyLog = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "406440afJlMkZ69bcoMdZzk", "DialogManager", undefined);
      var DialogManager = exports('DialogManager', /*#__PURE__*/function (_BasePrefab) {
        _inheritsLoose(DialogManager, _BasePrefab);
        function DialogManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BasePrefab.call.apply(_BasePrefab, [this].concat(args)) || this;
          _this._openMap = new Map();
          _this._opening = new Map();
          _this._isOpening = false;
          //正在打开界面
          _this._closeAllHaveOpening = false;
          //标记 关闭所有界面时，有正在打开的界面
          _this._comTextTipQueue = [];
          _this._textTiping = false;
          _this._comTipDlgQueue = [];
          _this._decorationSelectNode = null;
          _this.onecTextTip = function () {
            DialogUtils.comTextTips(_this._comTextTipQueue.shift());
            if (!_this._comTextTipQueue.length) {
              _this.unschedule(_this.onecTextTip);
              _this._textTiping = false;
            }
          };
          return _this;
        }
        var _proto = DialogManager.prototype;
        _proto.reset = function reset() {
          this._openMap.clear();
          this._opening.clear();
          this._isOpening = false; //正在打开界面
          this._closeAllHaveOpening = false; //标记 关闭所有界面时，有正在打开的界面
          this._comTextTipQueue.length = 0;
          this._textTiping = false;
          this._comTipDlgQueue.length = 0;
        };
        _proto.openDialog = function openDialog(path) {
          MyLog.green("open dialog : " + path);
          for (var _len2 = arguments.length, data = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            data[_key2 - 1] = arguments[_key2];
          }
          this.open.apply(this, [GC.scene.curScene.dialogLayer, path].concat(data));
        };
        _proto.open = function open(parent, path) {
          var _this2 = this;
          for (var _len3 = arguments.length, data = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
            data[_key3 - 2] = arguments[_key3];
          }
          if (this._opening.has(path)) {
            MyLog.warn('面板重复打开  ==>', path);
            return;
          }
          this.post(EventName.blocktouch, false);
          // GC.scene.curScene.showLoading(true, true);
          this._isOpening = true;
          this._opening.set(path, path);
          if (this._openMap.has(path)) {
            this.post(EventName.blocktouch, true);
            this._opening["delete"](path);
            var node = this._openMap.get(path);
            this._openMap["delete"](path); // 先删除，后面再加入map以保证界面顺序
            this.setDialog.apply(this, [parent, path, node].concat(data));
          } else {
            this.loadPrefab(path, function (node) {
              _this2.post(EventName.blocktouch, true);
              _this2._opening["delete"](path);
              if (_this2.checkHaveCloseAllMark()) ;else {
                _this2.setDialog.apply(_this2, [parent, path, node].concat(data));
              }
            }, function () {
              MyLog.warn("面板加载失败  ==>" + path);
              _this2._opening["delete"](path);
            });
          }
        }

        // 关闭所有时，有正在打开的界面
        ;

        _proto.checkHaveCloseAllMark = function checkHaveCloseAllMark() {
          if (this._closeAllHaveOpening) {
            this._closeAllHaveOpening = false;
            this._isOpening = false;
            return true;
          }
          return false;
        };
        _proto.setDialog = function setDialog(parent, path, node) {
          // GC.audio.playSound(AudioPath.popDialog);
          node.parent && node.removeFromParent();
          var dialog = node.getComponent(BaseDialog);
          if (!Boolean(dialog.path)) {
            dialog.path = path;
          }
          for (var _len4 = arguments.length, data = new Array(_len4 > 3 ? _len4 - 3 : 0), _key4 = 3; _key4 < _len4; _key4++) {
            data[_key4 - 3] = arguments[_key4];
          }
          dialog.show.apply(dialog, data);
          node.setPosition(Vec3.ZERO);
          parent.addChild(node);
          GC.scene.curScene.hideLoading();

          // 处理已存在页面的显隐
          if (dialog.isFullScreen) {
            this._openMap.forEach(function (v, k) {
              v.getComponent(UIOpacity).opacity = 0; // 被挡住的界面透明度设为0
            });

            GC.scene.curScene.hideDownLayers();
          }

          // 添加到map
          this._openMap.set(path, node);
          this._isOpening = false;
          GC.notify.post(EventName.curDialogNum, this.dialogNum);
          GC.notify.post(EventName.dialogOpened, dialog.path, dialog.isFullScreen);
        };
        _proto.close = function close(path) {
          MyLog.green("close dialog : " + path);
          if (this._openMap.has(path)) {
            var node = this._openMap.get(path);
            var dialog = node.getComponent(BaseDialog);
            this._openMap["delete"](path);

            // 处理下层页面的显隐
            if (dialog.isFullScreen) {
              var arr = Array.from(this._openMap);
              arr.reverse();
              for (var _i = 0, _arr = arr; _i < _arr.length; _i++) {
                var _arr$_i = _arr[_i],
                  k = _arr$_i[0],
                  v = _arr$_i[1];
                v.getComponent(UIOpacity).opacity = 255; // 显示页面
                var dialogComp = v.getComponent(BaseDialog);
                if (dialogComp.isFullScreen) {
                  // 碰到全屏的页面，再下层的就不需要处理了
                  break;
                }
              }
              !this.hasFullscreenDialog && GC.scene.curScene.showDownLayers();
            }
            dialog.hide();
            if (node && node.isValid) {
              var basePrefab = node.getComponent(BasePrefab);
              (basePrefab == null ? void 0 : basePrefab.onBeforeDestory) && basePrefab.onBeforeDestory();
              node.destroy(); //销毁这个node
            }

            GC.notify.post(EventName.dialogClosed, path, dialog.isFullScreen);
          }
          if (path == DialogPath.commonTipDlg) {
            //通用提示框队列，在关闭通用提示框的时候检查
            this.checkOpenComTipDlg();
          }

          //很多时候都是关闭当前界面打开下一个界面，此时当前界面关闭时就会抛出0，实际上马上就打开下一个界面
          GC.notify.post(EventName.curDialogNum, this.dialogNum);
        };
        _proto.closeAll = function closeAll(without) {
          var _this3 = this;
          if (without === void 0) {
            without = '';
          }
          this._comTipDlgQueue.length = 0;
          this._openMap.forEach(function (v, k, m) {
            if (k != without) {
              _this3.close(k);
            }
          });
          this._closeAllHaveOpening = this._isOpening;
        };
        _proto.hideAllDialog = function hideAllDialog() {
          this._openMap.forEach(function (v, k, m) {
            v.active = false;
          });
        };
        _proto.showAllDialog = function showAllDialog() {
          this._openMap.forEach(function (v, k, m) {
            v.active = true;
          });
        };
        _proto.getDialogByPath = function getDialogByPath(path) {
          var dialog = this._openMap.get(path);
          return dialog;
        };
        _proto.getOpeningDialogByPath = function getOpeningDialogByPath(path) {
          return this._opening.get(path);
        };
        _proto.checkOpenComTipDlg = function checkOpenComTipDlg() {
          if (!this.getOpeningDialogByPath(DialogPath.commonTipDlg) && !this.getDialogByPath(DialogPath.commonTipDlg) && this._comTipDlgQueue.length) {
            DialogUtils.comTipDlg(this._comTipDlgQueue.shift());
          }
        }

        /** 公用文字提示条 */;
        _proto.comTextTips = function comTextTips(str) {
          var _GC$language;
          for (var _len5 = arguments.length, param = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
            param[_key5 - 1] = arguments[_key5];
          }
          var s = (_GC$language = GC.language).getLocal.apply(_GC$language, [str].concat(param));
          if (!s.startsWith("缺少字段")) {
            str = s;
          }
          this.addOneTextTip(str);
        };
        _proto.comOneRewardTips = function comOneRewardTips(id, value, quality, leftStr) {
          if (leftStr === void 0) {
            leftStr = "获得";
          }
          this.addOneTextTip("", "", leftStr, quality, id);
        };
        _proto.addOneTextTip = function addOneTextTip(rightStr, icon, leftStr, quality, id) {
          if (icon === void 0) {
            icon = null;
          }
          if (leftStr === void 0) {
            leftStr = "";
          }
          if (quality === void 0) {
            quality = EQuality.all;
          }
          if (id === void 0) {
            id = 0;
          }
          var data = {
            leftStr: leftStr,
            rightStr: rightStr,
            icon: icon,
            quality: quality,
            id: id
          };
          if (!this._comTextTipQueue.length || rightStr != this._comTextTipQueue[this._comTextTipQueue.length - 1].rightStr) {
            this._comTextTipQueue.push(data);
          }
          if (this._comTextTipQueue.length == 1) {
            this.scheduleOnce(this.onecTextTip);
          } else if (!this._textTiping && this._comTextTipQueue.length) {
            this._textTiping = true;
            this.unschedule(this.onecTextTip);
            this.schedule(this.onecTextTip, 0.5, macro.REPEAT_FOREVER);
          }
        };
        /** 公用文字提示框 */
        _proto.comTipDlg = function comTipDlg(data) {
          DialogUtils.comTipDlg(data);
        }

        // guide
        ;

        _proto.showGuide = function showGuide(node) {
          var _GC$scene$curScene;
          for (var _len6 = arguments.length, params = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
            params[_key6 - 1] = arguments[_key6];
          }
          (_GC$scene$curScene = GC.scene.curScene).showGuide.apply(_GC$scene$curScene, [node].concat(params));
        };
        _proto.hideGuide = function hideGuide() {
          GC.scene.curScene.hideGuide();
        };
        _createClass(DialogManager, [{
          key: "noDialog",
          get: function get() {
            var haveDialog = Array.from(this._openMap.values()).some(function (node) {
              return node.parent;
            });
            return !haveDialog && !this._isOpening;
          }
        }, {
          key: "dialogNum",
          get: function get() {
            var openingNum = this._isOpening ? 1 : 0;
            return Array.from(this._openMap.values()).filter(function (node) {
              return node.parent;
            }).length + openingNum;
          }
        }, {
          key: "hasFullscreenDialog",
          get: function get() {
            var hasFullscreen = Array.from(this._openMap.values()).some(function (node) {
              return node.getComponent(BaseDialog).isFullScreen;
            });
            return hasFullscreen;
          }
        }]);
        return DialogManager;
      }(BasePrefab));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DialogUtils.ts", ['cc', './PathCongfig.ts', './GameControl.ts'], function (exports) {
  var cclegacy, v3, director, screen, DialogPath, GC;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      v3 = module.v3;
      director = module.director;
      screen = module.screen;
    }, function (module) {
      DialogPath = module.DialogPath;
    }, function (module) {
      GC = module.GC;
    }],
    execute: function () {
      cclegacy._RF.push({}, "fa614YZgcZC9KtsuLvkBUc6", "DialogUtils", undefined);
      var DialogUtils = exports('DialogUtils', /*#__PURE__*/function () {
        function DialogUtils() {}
        DialogUtils.comTextTips = function comTextTips(data, delayTime) {
          var _GC$scene;
          if (delayTime === void 0) {
            delayTime = 0.25;
          }
          var item = GC.pool.getComTextTip();
          if ((_GC$scene = GC.scene) != null && (_GC$scene = _GC$scene.curScene) != null && _GC$scene.tipsLayer) {
            GC.scene.curScene.tipsLayer.addChild(item.node);
            item.node.setPosition(v3(0, 0, 0));
          } else {
            director.getScene().addChild(item.node);
            item.node.setPosition(v3(screen.windowSize.width / 2, screen.windowSize.height / 2, 0));
          }
          item.initData(data, delayTime, item.node.y);
        };
        DialogUtils.comTipDlg = function comTipDlg(data) {
          var param = {};
          if (Boolean(data) && typeof data == "string") {
            param.des = data;
          } else if (Boolean(data)) {
            param = data;
          }
          GC.dialog.openDialog(DialogPath.commonTipDlg, param);
        };
        return DialogUtils;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DySdk.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameControl.ts', './EventName.ts', './MyLog.ts', './TimeUtils.ts', './BaseSdk.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, screen, GC, EventName, MyLog, timeUtils, BaseSdk;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      screen = module.screen;
    }, function (module) {
      GC = module.GC;
    }, function (module) {
      EventName = module.EventName;
    }, function (module) {
      MyLog = module.default;
    }, function (module) {
      timeUtils = module.timeUtils;
    }, function (module) {
      BaseSdk = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "6ecc95BN1pI+7rKvu+vePNn", "DySdk", undefined);
      var ERecordState = exports('ERecordState', /*#__PURE__*/function (ERecordState) {
        ERecordState[ERecordState["no"] = 1] = "no";
        ERecordState[ERecordState["ing"] = 2] = "ing";
        ERecordState[ERecordState["end"] = 3] = "end";
        return ERecordState;
      }({}));
      var DySdk = exports('DySdk', /*#__PURE__*/function (_BaseSdk) {
        _inheritsLoose(DySdk, _BaseSdk);
        function DySdk() {
          return _BaseSdk.apply(this, arguments) || this;
        }
        DySdk.init = function init() {
          this.system_info = tt.getSystemInfoSync();
          this.option = tt.getLaunchOptionsSync();
          GC.config.game.isDouyin = this.system_info.appName == "Douyin" || this.system_info.appName == "douyin_lite";
          MyLog.log("isDouyin:" + GC.config.game.isDouyin);
          this.initRecorder();
          // this.initAd();

          // this.updateManager();
        };

        DySdk.updateManager = function updateManager() {
          if (tt.getUpdateManager) {
            var updateManager = tt.getUpdateManager();
            updateManager.onUpdateReady(function (res) {
              tt.showModal({
                title: "更新提示",
                content: "新版本已经准备好，是否重启小游戏？",
                success: function success(res) {
                  if (res.confirm) {
                    // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                    updateManager.applyUpdate();
                  }
                }
              });
            });
            updateManager.onUpdateFailed(function (err) {
              // 新的版本下载失败
              MyLog.log("版本下载失败原因", err);
            });
          }
        };
        DySdk.initRecorder = function initRecorder() {
          var _this = this;
          this._recorder = tt.getGameRecorderManager();
          console.log("yrc registerRecord ", this._recorder);
          this._recorder.onStart(function (res) {
            _this.onStartRecord(res);
          });
          this._recorder.onStop(function (res) {
            _this.onStopRecord(res);
          });
          this._recorder.onError(function (res) {
            console.log("yrc 录屏 onError", JSON.stringify(res));
          });
        }

        // /**对开始录屏注册事件 */
        ;

        DySdk.onStartRecord = function onStartRecord(res) {
          console.log("yrc 开始录屏");
          console.log(res);
          this._recordState = ERecordState.ing;
          this._recorderStartTime = timeUtils.getNow(false);
          this._recorderVideoPath = "";
          GC.notify.post(EventName.recordStateChange);
        };
        // /**对结束录屏注册事件 */
        DySdk.onStopRecord = function onStopRecord(res) {
          this._recorderEndTime = timeUtils.getNow(false);
          console.log("yrc 结束录屏,时长==>", this.recorderSucTime, " ", JSON.stringify(res));
          if (this.recorderSucTime <= 4) {
            // GC.dialog.comTextTips("录屏时间不足，请重新录屏");
            this._recorderStartTime = 0;
            this._recorderEndTime = 0;
            this._recordState = ERecordState.no;
            this._recorderVideoPath = "";
            GC.notify.post(EventName.recordStateChange);
          } else {
            this._recordState = ERecordState.end;
            this._recorderVideoPath = res.videoPath;
            GC.notify.post(EventName.recordStateChange);
          }
        };
        DySdk.recorderStart = function recorderStart(duration) {
          if (duration === void 0) {
            duration = 300;
          }
          this._recorder && this._recorder.start({
            duration: duration
          });
        };
        DySdk.recorderStop = function recorderStop() {
          this._recorder && this._recorder.stop();
        };
        DySdk.recorderEditVideo = function recorderEditVideo(callBack) {
          var _this2 = this;
          if (this.haveRecorderVideo) {
            this._recorder.clipVideo({
              path: this._recorderVideoPath,
              success: function success(res) {
                console.log("yrc clipvideo succ", JSON.stringify(res));
                _this2._recorderVideoPath = res.videoPath;
                callBack && callBack();
              },
              fail: function fail(err) {
                console.log('yrc clipvideo fail', JSON.stringify(err));
              }
            });
          }
        };
        DySdk.recorderShareVideo = function recorderShareVideo(callBack) {
          tt.shareAppMessage({
            channel: "video",
            query: "userId=" + GC.data.user.user_id,
            extra: {
              videoPath: this._recorderVideoPath,
              // 可替换成录屏得到的视频地址
              videoTopics: [GC.config.game.gameName],
              hashtag_list: [GC.config.game.gameName]
            },
            success: function success() {
              callBack && callBack();
            },
            fail: function fail(e) {
              GC.dialog.comTextTips("分享失败");
            }
          });
        }

        /*** 登录 */;
        DySdk.login = function login(callback) {
          tt.login({
            force: true,
            success: function success(loginRes) {
              MyLog.purple("code: " + loginRes.code);
              if (loginRes.code) {
                callback && callback(loginRes.code);
                // this.getSetting(loginRes.code, callback);
              } else {
                MyLog.purple('登录失败！', loginRes);
              }
            },
            fail: function fail(res) {
              MyLog.purple("\u767B\u5F55 \u8C03\u7528\u5931\u8D25", res);
            }
          });
        };
        DySdk.getSetting = function getSetting(code, callback) {
          var _this3 = this;
          tt.getSetting({
            success: function success(res) {
              MyLog.purple('getSetting-------', res);
              if (res.authSetting['scope.userInfo']) {
                // 已经授权，可以直接调用 getUserInfo 获取头像昵称
                _this3.getUserInfo(code, callback);
              } else {
                _this3.getAuthorize(code, callback);
              }
            }
          });
        };
        DySdk.openSetting = function openSetting(callback) {
          tt.openSetting({
            success: function success(res) {
              MyLog.log("success2::" + JSON.stringify(res));
              if (res.authSetting['scope.userInfo']) {
                callback && callback();
              }
            }
          });
        };
        DySdk.getAuthorize = function getAuthorize(code, callBack) {
          var _this4 = this;
          tt.authorize({
            scope: "scope.userInfo",
            success: function success(res) {
              MyLog.purple('Authorize Suc -------', res);
              _this4.getUserInfo(code, callBack);
            },
            fail: function fail(res) {
              MyLog.purple("Authorize Fail --------", res.errMsg);
              callBack && callBack(code, null);
            }
          });
        };
        DySdk.getUserInfo = function getUserInfo(code, callback) {
          tt.getUserInfo({
            withCredentials: true,
            success: function success(res) {
              MyLog.purple('getUserInfo-------', res);
              callback && callback(code, res);
            },
            fail: function fail(res) {
              MyLog.purple("getUserInfo \u8C03\u7528\u5931\u8D25", res.errMsg);
            }
          });
        };
        DySdk.getAuthorizeUserInfo = function getAuthorizeUserInfo(callBack) {
          tt.getSetting({
            success: function success(res) {
              MyLog.purple('getSetting-------', res);
              if (res.authSetting['scope.userInfo']) {
                callBack && callBack(true);
              } else {
                tt.authorize({
                  scope: "scope.userInfo",
                  success: function success(res) {
                    callBack && callBack(true);
                  },
                  fail: function fail(res) {
                    callBack && callBack(false);
                  }
                });
              }
            }
          });
        };
        DySdk.authorize = function authorize(sucCB) {
          MyLog.log(" 开始 authorize:");
          tt.authorize({
            scope: "scope.userInfo",
            success: function success(res) {
              MyLog.log("success::" + JSON.stringify(res));
              sucCB && sucCB();
            },
            fail: function fail(err) {
              MyLog.log(" authorize fail:" + JSON.stringify(err));
              if (err.errMsg === "authorize:fail auth deny") {
                DySdk.showModal(function (res) {
                  if (res.confirm) {
                    DySdk.openSetting(sucCB);
                  }
                }, "排行榜需获取用户信息，请您确定重新获取授权");
              }
            }
          });
        }

        //震动
        ;

        DySdk.vibrate = function vibrate() {
          tt.vibrateShort();
        }

        //排行榜 开放数据域  数据上报
        ;

        DySdk.setUserCloudStorage = function setUserCloudStorage() {
          var params = {
            KVDataList: [{
              key: "level",
              value: "0"
            }],
            complete: function complete(res) {
              MyLog.log("======>open data upData level complete : ", res);
            },
            fail: function fail(res) {
              MyLog.log("======>open data upData level fail: ", res);
            },
            success: function success(res) {
              MyLog.log("======>open data upData level sucess : ", res);
            }
          };
          MyLog.log("======>open data upData level : ", params);
          tt.setUserCloudStorage(params);
        };
        DySdk.postMessage = function postMessage(openId, height) {
          MyLog.green("======> open data post : ", openId, height);
          this.openDataContext.postMessage({
            openId: openId,
            height: height
          });
        };
        //分享
        DySdk.share = function share(adType, callBack, query, channel, extra) {
          if (callBack === void 0) {
            callBack = function callBack() {};
          }
          if (query === void 0) {
            query = '';
          }
          this._adType = adType;
          var params = GC.config.game.getShareParams(adType, query);
          tt.shareAppMessage({
            channel: channel,
            title: params.title,
            // templateId: this._shareTempIds[Utils.random(this._shareTempIds.length)],
            // desc: "",
            // imageUrl: "",
            query: "userId=" + GC.data.user.user_id,
            extra: extra,
            success: function success() {
              callBack && callBack(true);
            },
            fail: function fail(e) {
              callBack && callBack(false);
            }
          });
        };
        DySdk.initAd = function initAd() {
          // this.initBanner();
          this.initRewardAd();
        };
        DySdk.initRewardAd = function initRewardAd() {
          var _this5 = this;
          this._adHostData = {
            shareValue: 0,
            rewardValue: 1
          };
          this._rewardAd = tt.createRewardedVideoAd({
            adUnitId: this._rewardPosId
          });
          this._rewardAd.onError(function (err) {
            MyLog.log(err);
          });
          this._rewardAd.onClose(function (res) {
            MyLog.log('adSdk 激励视频 广告关闭 ' + _this5._rewardPosId);
            if (res && res.isEnded || res === undefined) {
              // 正常播放结束，可以下发游戏奖励
              _this5._onAdSuccess && _this5._onAdSuccess(res);
            } else {
              MyLog.log('播放中途退出，不下发游戏奖励');
            }
          });
          this._rewardAd.onLoad(function (res) {
            if (res) {
              MyLog.log("============ > reward onLoad : ", res);
              // this._adHostData = res;
            }
          });
        };

        DySdk.showAd = function showAd(onSuccess, adType) {
          this._onAdSuccess = onSuccess;
          if (this._adHostData.shareValue) {
            this.share(adType, onSuccess);
          } else {
            this._rewardAdStartTime = timeUtils.getNow(false);
            this._rewardAd.show().then(function () {
              MyLog.log("视频广告展示");
            });
          }
        };
        DySdk.pay = function pay(vo, order, callBack) {
          //extraInfo要转成字符串
          var extraInfo = JSON.stringify({
            userId: GC.data.user.user_id,
            //用户自定义额外信息,支付结果回调信息包含此字段， 基础库版本低于1.55.0没有此字段
            productId: vo.shopId,
            price: vo.prize,
            ourOrderNo: order
          });
          DySdk.out_order_no = null;
          // tt.requestGamePayment({
          //     mode: "game", // 支付类型
          //     env: 0, //支付环境
          //     currencyType: "CNY", // 币种：目前仅为 "CNY"
          //     platform: "android", // 申请接入时的平台：目前仅为"android"
          //     buyQuantity: vo.prizeDY, // 购买数量，必须满足：金币数量*金币单价 = 限定价格等级（详见金币限定等级）
          //     customId: order, //开发者自定义唯一订单号。如不填，支付结果回调将不包含此字段，将导致游戏开发者无法发放游戏道具, 基础库版本低于1.55.0没有此字段
          //     extraInfo: extraInfo,//extraInfo要转成字符串
          //     success: (res) => {
          //         MyLog.purple("dy pay success : ", res);
          //         callBack && callBack(DySdk.out_order_no)
          //     },
          //     fail: (res) => {
          //         MyLog.purple("dy pay fail : ", res);
          //     },
          //     complete: (res) => {
          //         MyLog.purple("dy pay complete : ", res);
          //         if (res?.data?.out_order_no) {
          //             DySdk.out_order_no = res?.data?.out_order_no;
          //         }
          //     },
          // })
        };

        DySdk.kefu = function kefu() {
          tt.openCustomerServiceConversation({});
        };
        DySdk.createKefuBtn = function createKefuBtn(rect) {
          MyLog.purple("------------>", screen.windowSize, rect, this.system_info);
          this._kefuBtn = tt.createContactButton({
            type: "image",
            // image | text
            image: "https://xxx/lxkf.png",
            text: "",
            style: {
              left: rect.xMin / screen.windowSize.width * this.system_info.screenWidth,
              top: (screen.windowSize.height - rect.yMax) / screen.windowSize.height * this.system_info.screenHeight,
              width: rect.width / screen.windowSize.width * this.system_info.screenWidth,
              height: rect.height / screen.windowSize.width * this.system_info.screenWidth,
              fontSize: 15,
              lineHeight: 40,
              textAlign: "center",
              textColor: "#5DF8FE",
              borderRadius: 0,
              borderWidth: 0,
              backgroundColor: null,
              borderColor: null
            },
            complete: function complete(res) {
              MyLog.log("create complete", res);
            }
          });
          this._kefuBtn.show();
          this._kefuBtn.onTap(function (res) {
            MyLog.purple("点击客服 -------", res);
          });
        };
        DySdk.removeFefuBtn = function removeFefuBtn() {
          if (this != null && this._kefuBtn) {
            var _this$_kefuBtn;
            this == null || (_this$_kefuBtn = this._kefuBtn) == null || _this$_kefuBtn.destroy();
          }
        };
        DySdk.showFefuBtn = function showFefuBtn() {
          if (this != null && this._kefuBtn) {
            var _this$_kefuBtn2;
            this == null || (_this$_kefuBtn2 = this._kefuBtn) == null || _this$_kefuBtn2.show();
          }
        };
        DySdk.hideFefuBtn = function hideFefuBtn() {
          if (this != null && this._kefuBtn) {
            var _this$_kefuBtn3;
            this == null || (_this$_kefuBtn3 = this._kefuBtn) == null || _this$_kefuBtn3.hide();
          }
        };
        DySdk.quit = function quit() {
          tt.exitMiniProgram();
        };
        DySdk.restart = function restart() {
          tt.restartMiniProgramSync();
        };
        DySdk.showModal = function showModal(callFunc, content, showCancel, title, sureTxt) {
          if (callFunc === void 0) {
            callFunc = null;
          }
          if (showCancel === void 0) {
            showCancel = false;
          }
          if (title === void 0) {
            title = '提示';
          }
          if (sureTxt === void 0) {
            sureTxt = '确定';
          }
          tt.showModal({
            title: title,
            content: content,
            showCancel: showCancel,
            confirmText: sureTxt,
            success: function success(res) {
              if (res.confirm) {
                MyLog.log('用户点击确定');
              } else if (res.cancel) {
                MyLog.log('用户点击取消');
              }
              callFunc && callFunc(res);
            }
          });
        }

        //敏感词
        ;

        DySdk.msgSecCheck = function msgSecCheck(callBack) {
          tt.onKeyboardComplete(function (data) {
            MyLog.log('键盘输入的当前值', data.value);
            callBack && callBack(data.value);
          });
        };
        _createClass(DySdk, null, [{
          key: "recorderSucTime",
          get: function get() {
            return this._recorderEndTime - this._recorderStartTime;
          }
        }, {
          key: "haveRecorderVideo",
          get: function get() {
            console.log("yrc clipvideo haveRecorderVideo", this._recordState, this._recorderVideoPath, this._recordState);
            return this._recorder && this._recorderVideoPath && this._recordState == ERecordState.end;
          }
        }, {
          key: "openDataContext",
          get: function get() {
            return tt.getOpenDataContext();
          }
        }]);
        return DySdk;
      }(BaseSdk));
      DySdk._recordState = ERecordState.no;
      DySdk._recorder = null;
      DySdk._recorderStartTime = 0;
      DySdk._recorderEndTime = 0;
      DySdk._recorderVideoPath = "";
      DySdk._shareTempIds = ["317q39u2pmc243few8"];
      DySdk._adType = null;
      DySdk._rewardPosId = "d79a3rbs5o2iaq747m";
      DySdk._bannerPosId = "adunit-7f87be714cb98d6d";
      DySdk._insertPosId = "adunit-cbafb953dfcbf07b";
      DySdk._rewardAd = void 0;
      DySdk._bannerAd = void 0;
      DySdk._insertAd = void 0;
      DySdk._rewardAdStartTime = 0;
      DySdk._onAdSuccess = null;
      DySdk.out_order_no = null;
      DySdk._kefuBtn = null;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EffectManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BasePrefab.ts', './SpriteFrameManager.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, UITransform, Sprite, Vec3, BasePrefab, SpriteFrameManager;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      UITransform = module.UITransform;
      Sprite = module.Sprite;
      Vec3 = module.Vec3;
    }, function (module) {
      BasePrefab = module.default;
    }, function (module) {
      SpriteFrameManager = module.SpriteFrameManager;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "ddf3cjRbIhAwLrlmLzicL2j", "EffectManager", undefined);
      var ccclass = _decorator.ccclass;

      /**
       * 特效类型枚举
       */
      var EffectType = exports('EffectType', /*#__PURE__*/function (EffectType) {
        EffectType["Click"] = "click";
        return EffectType;
      }({})); // 点击特效
      // 可以在这里添加更多特效类型

      /**
       * 特效配置接口
       */

      /**
       * 特效管理器
       */
      var EffectManager = exports('EffectManager', (_dec = ccclass('EffectManager'), _dec(_class = (_class2 = /*#__PURE__*/function (_BasePrefab) {
        _inheritsLoose(EffectManager, _BasePrefab);
        function EffectManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BasePrefab.call.apply(_BasePrefab, [this].concat(args)) || this;
          _this.effectPools = new Map();
          _this.effectContainer = null;
          _this.animMgr = SpriteFrameManager.instance;
          return _this;
        }
        var _proto = EffectManager.prototype;
        _proto.onLoad = function onLoad() {
          EffectManager.instance = this;
          this.initEffectContainer();
        };
        _proto.start = function start() {
          // 确保在start时也初始化容器（如果onLoad时还没准备好）
          if (!this.effectContainer) {
            this.initEffectContainer();
          }
        }

        /**
         * 获取单例
         */;
        EffectManager.getInstance = function getInstance() {
          return EffectManager.instance;
        }

        /**
         * 初始化特效容器
         */;
        _proto.initEffectContainer = function initEffectContainer() {
          this.effectContainer = new Node('EffectContainer');
          if (!this.effectContainer.getComponent(UITransform)) {
            this.effectContainer.addComponent(UITransform);
          }
          this.node.addChild(this.effectContainer);
        }

        /**
         * 播放特效
         * @param worldPos 世界坐标位置
         * @param config 特效配置
         * @param onComplete 播放完成回调
         */;
        _proto.playEffect = /*#__PURE__*/
        function () {
          var _playEffect = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(worldPos, config, onComplete) {
            var _this2 = this;
            var parentNode, effectNode, localPos, baseScale, targetScaleX, targetScaleY, currentIndex, maxIndex, targetIndex, sprite;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!this.effectContainer) {
                    this.initEffectContainer();
                  }
                  if (this.effectContainer) {
                    _context.next = 4;
                    break;
                  }
                  console.warn('EffectManager: 特效容器初始化失败');
                  return _context.abrupt("return");
                case 4:
                  parentNode = config.parentNode || this.effectContainer; // 从对象池获取特效节点
                  effectNode = this.getEffectFromPool(config.type, parentNode);
                  if (effectNode) {
                    _context.next = 9;
                    break;
                  }
                  console.warn('EffectManager: 无法获取特效节点');
                  return _context.abrupt("return");
                case 9:
                  // 将世界坐标转换为容器局部坐标
                  localPos = this.getLocalPos(parentNode, worldPos);
                  effectNode.setPosition(localPos);
                  effectNode.active = true;

                  // 设置缩放：
                  // 优先级：scaleX/scaleY > scale > 默认不改（但回收时会重置为 1）
                  if (config.scaleX !== undefined || config.scaleY !== undefined || config.scale !== undefined) {
                    baseScale = config.scale !== undefined ? config.scale : 1;
                    targetScaleX = config.scaleX !== undefined ? config.scaleX : baseScale;
                    targetScaleY = config.scaleY !== undefined ? config.scaleY : baseScale;
                    effectNode.setScale(targetScaleX, targetScaleY, 1);
                  }

                  // 设置层级（如果指定了siblingIndex）
                  if (config.siblingIndex !== undefined && parentNode) {
                    currentIndex = parentNode.children.indexOf(effectNode);
                    if (currentIndex !== -1) {
                      // 计算目标索引（确保在有效范围内）
                      maxIndex = parentNode.children.length - 1;
                      targetIndex = Math.min(Math.max(0, config.siblingIndex), maxIndex);
                      effectNode.setSiblingIndex(targetIndex);
                    }
                  }

                  // 获取或添加Sprite组件
                  sprite = effectNode.getComponent(Sprite);
                  if (!sprite) {
                    sprite = effectNode.addComponent(Sprite);
                  }
                  if (sprite) {
                    _context.next = 19;
                    break;
                  }
                  console.warn('EffectManager: 无法创建Sprite组件');
                  return _context.abrupt("return");
                case 19:
                  _context.prev = 19;
                  _context.next = 22;
                  return this.animMgr.playDir(sprite, config.resourcePath, config.fps || 24, config.loop || false, function () {
                    // 播放完成后回收特效
                    _this2.recycleEffect(config.type, effectNode);
                    if (onComplete) {
                      onComplete();
                    }
                  });
                case 22:
                  _context.next = 28;
                  break;
                case 24:
                  _context.prev = 24;
                  _context.t0 = _context["catch"](19);
                  console.warn('EffectManager: 播放特效失败', _context.t0);
                  // 播放失败时也要回收节点
                  this.recycleEffect(config.type, effectNode);
                case 28:
                case "end":
                  return _context.stop();
              }
            }, _callee, this, [[19, 24]]);
          }));
          function playEffect(_x, _x2, _x3) {
            return _playEffect.apply(this, arguments);
          }
          return playEffect;
        }()
        /**
         * 从对象池获取特效节点
         */;

        _proto.getEffectFromPool = function getEffectFromPool(type, parentNode) {
          if (!this.effectPools.has(type)) {
            this.effectPools.set(type, []);
          }
          var pool = this.effectPools.get(type);
          var effectNode = pool.find(function (node) {
            return !node.active;
          });
          if (!effectNode) {
            // 池中没有可用节点，创建新的
            effectNode = new Node("Effect_" + type);
            var sprite = effectNode.addComponent(Sprite);
            var uiTransform = effectNode.addComponent(UITransform);
            uiTransform.setContentSize(100, 100); // 默认大小，可根据实际调整

            parentNode.addChild(effectNode);
            pool.push(effectNode);
          } else if (effectNode.parent !== parentNode) {
            parentNode.addChild(effectNode);
          }
          return effectNode;
        }

        /**
         * 回收特效到对象池
         */;
        _proto.recycleEffect = function recycleEffect(type, effectNode) {
          if (!effectNode) return;

          // 停止动画
          this.animMgr.stopAnimation(effectNode);

          // 重置状态
          effectNode.active = false;
          effectNode.setPosition(Vec3.ZERO);
          effectNode.setScale(1, 1, 1); // 重置缩放

          // 清除Sprite的spriteFrame
          var sprite = effectNode.getComponent(Sprite);
          if (sprite) {
            sprite.spriteFrame = null;
          }
        }

        /**
         * 将世界坐标转换为节点局部坐标
         */;
        _proto.getLocalPos = function getLocalPos(node, worldPos) {
          var trans = node.getComponent(UITransform);
          if (trans) {
            return trans.convertToNodeSpaceAR(worldPos);
          }
          // 如果没有UITransform，使用矩阵转换
          var localPos = new Vec3();
          var invWorldMatrix = node.worldMatrix.clone();
          invWorldMatrix.invert();
          Vec3.transformMat4(localPos, worldPos, invWorldMatrix);
          return localPos;
        }

        /**
         * 清理所有特效
         */;
        _proto.clearAllEffects = function clearAllEffects() {
          var _this3 = this;
          this.effectPools.forEach(function (pool, type) {
            pool.forEach(function (node) {
              _this3.animMgr.stopAnimation(node);
              node.destroy();
            });
          });
          this.effectPools.clear();
        };
        return EffectManager;
      }(BasePrefab), _class2.instance = null, _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EnemySoldier.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BasePrefab.ts', './SpriteFrameManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Sprite, BasePrefab, SpriteFrameManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
    }, function (module) {
      BasePrefab = module.default;
    }, function (module) {
      SpriteFrameManager = module.SpriteFrameManager;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "f89c9STYlRKeLL2IhemkePC", "EnemySoldier", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var EnemySoldier = exports('EnemySoldier', (_dec = ccclass('EnemySoldier'), _dec2 = property(Sprite), _dec(_class = (_class2 = /*#__PURE__*/function (_BasePrefab) {
        _inheritsLoose(EnemySoldier, _BasePrefab);
        function EnemySoldier() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BasePrefab.call.apply(_BasePrefab, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "soldierSprite", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = EnemySoldier.prototype;
        _proto.playMoveAnim = /*#__PURE__*/function () {
          var _playMoveAnim = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var target;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  target = this.soldierSprite || this.node.getComponent(Sprite);
                  if (target) {
                    _context.next = 3;
                    break;
                  }
                  return _context.abrupt("return");
                case 3:
                  _context.next = 5;
                  return SpriteFrameManager.instance.playDir(target, 'game/images/seqPic/enemySoldier/移动', 36, true);
                case 5:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function playMoveAnim() {
            return _playMoveAnim.apply(this, arguments);
          }
          return playMoveAnim;
        }();
        return EnemySoldier;
      }(BasePrefab), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "soldierSprite", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EnumConfig.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "1be71mBuyRMO4lpMeIA5oaF", "EnumConfig", undefined);
      var EBannerType = exports('EBannerType', /*#__PURE__*/function (EBannerType) {
        EBannerType[EBannerType["banner1"] = 1] = "banner1";
        return EBannerType;
      }({}));
      var EVideoOrShare = exports('EVideoOrShare', /*#__PURE__*/function (EVideoOrShare) {
        EVideoOrShare[EVideoOrShare["video"] = 1] = "video";
        EVideoOrShare[EVideoOrShare["share_video_fail"] = 2] = "share_video_fail";
        EVideoOrShare[EVideoOrShare["share_get_tip_prop"] = 3] = "share_get_tip_prop";
        EVideoOrShare["revive"] = "revive";
        EVideoOrShare["power"] = "power";
        return EVideoOrShare;
      }({}));
      var EStatType = exports('EStatType', /*#__PURE__*/function (EStatType) {
        EStatType["share_video"] = "share_video";
        EStatType["guide_step"] = "guide_step";
        EStatType["enterSideCardScene"] = "enterSideCardScene";
        EStatType["hcSdk_init_err"] = "hcSdk_init_err";
        EStatType["hcSdk_login_fail"] = "hcSdk_login_fail";
        EStatType["get_online_params_fail"] = "get_online_params_fail";
        EStatType["share_suc"] = "share_suc";
        EStatType["addShortcut"] = "addShortcut";
        EStatType["fensi"] = "fensi";
        EStatType["followDouYin"] = "followDouYin";
        return EStatType;
      }({}));
      var ESceneName = exports('ESceneName', /*#__PURE__*/function (ESceneName) {
        ESceneName["preLoading"] = "preLoading";
        ESceneName["loading"] = "loading";
        ESceneName["main"] = "main";
        return ESceneName;
      }({}));
      var EQuality = exports('EQuality', /*#__PURE__*/function (EQuality) {
        EQuality[EQuality["all"] = 0] = "all";
        EQuality[EQuality["white"] = 1] = "white";
        EQuality[EQuality["green"] = 2] = "green";
        EQuality[EQuality["blue"] = 3] = "blue";
        EQuality[EQuality["purple"] = 4] = "purple";
        EQuality[EQuality["orange"] = 5] = "orange";
        EQuality[EQuality["red"] = 6] = "red";
        return EQuality;
      }({}));
      var EColor = exports('EColor', /*#__PURE__*/function (EColor) {
        EColor["all"] = "#FFFFFF";
        EColor["white"] = "#FFFFFF";
        EColor["green"] = "#c5e9cb";
        EColor["blue"] = "#c5dee9";
        EColor["purple"] = "#dfc5e9";
        EColor["orange"] = "#fdc7a0";
        EColor["red"] = "#ffafaf";
        return EColor;
      }({})); //红
      // c5e9cb c5dee9 dfc5e9 fdc7a0 ffafaf
      var ERecordState = exports('ERecordState', /*#__PURE__*/function (ERecordState) {
        ERecordState[ERecordState["no"] = 1] = "no";
        ERecordState[ERecordState["ing"] = 2] = "ing";
        ERecordState[ERecordState["end"] = 3] = "end";
        return ERecordState;
      }({}));

      /**
       * 排行
       */
      var ERankType = exports('ERankType', /*#__PURE__*/function (ERankType) {
        ERankType[ERankType["level"] = 1] = "level";
        return ERankType;
      }({})); //等级
      var AdAction = exports('AdAction', /*#__PURE__*/function (AdAction) {
        AdAction["PreLoadPull"] = "pre_load_pull";
        AdAction["PreLoadSuccess"] = "pre_load_success";
        AdAction["PreLoadFail"] = "pre_load_fail";
        AdAction["Pull"] = "pull";
        AdAction["LoadSuccess"] = "load_success";
        AdAction["LoadFail"] = "load_fail";
        AdAction["Show"] = "show";
        AdAction["PlayComplete"] = "play_complete";
        AdAction["Close"] = "close";
        AdAction["Click"] = "click";
        AdAction["Skip"] = "skip";
        AdAction["Hide"] = "hide";
        AdAction["LoadTimeOut"] = "load_timeout";
        AdAction["Error"] = "error";
        return AdAction;
      }({}));
      var EGuideStep = exports('EGuideStep', /*#__PURE__*/function (EGuideStep) {
        EGuideStep[EGuideStep["guide_click1"] = 0] = "guide_click1";
        EGuideStep[EGuideStep["guide_click2"] = 1] = "guide_click2";
        EGuideStep[EGuideStep["guide_zoom"] = 2] = "guide_zoom";
        EGuideStep[EGuideStep["guide_end"] = 3] = "guide_end";
        return EGuideStep;
      }({}));
      var GameState = exports('GameState', /*#__PURE__*/function (GameState) {
        GameState[GameState["start"] = 0] = "start";
        GameState[GameState["playing"] = 1] = "playing";
        GameState[GameState["pause"] = 2] = "pause";
        GameState[GameState["prop"] = 3] = "prop";
        GameState[GameState["end"] = 4] = "end";
        return GameState;
      }({}));
      var PropType = exports('PropType', /*#__PURE__*/function (PropType) {
        PropType[PropType["tip"] = 0] = "tip";
        PropType[PropType["refresh"] = 1] = "refresh";
        PropType[PropType["hp"] = 3] = "hp";
        PropType[PropType["remove"] = 4] = "remove";
        return PropType;
      }({})); //移除
      var ReviveType = exports('ReviveType', /*#__PURE__*/function (ReviveType) {
        ReviveType["hp"] = "hp";
        ReviveType["time"] = "time";
        return ReviveType;
      }({}));
      var PoolPrefabType = exports('PoolPrefabType', /*#__PURE__*/function (PoolPrefabType) {
        PoolPrefabType["headPre"] = "headPrefab";
        PoolPrefabType["bodyPre"] = "bodyPrefab";
        PoolPrefabType["tailEndPre"] = "tailEndPrefab";
        PoolPrefabType["tailPre"] = "tailPrefab";
        return PoolPrefabType;
      }({}));
      var ResId = exports('ResId', /*#__PURE__*/function (ResId) {
        ResId[ResId["power"] = 10001] = "power";
        return ResId;
      }({}));

      // export enum GridDisplayType{
      //     ArrowDown = 0,
      //     ArrowUp = 1,
      //     ArrowLeft = 2,
      //     ArrowRight = 3,
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EventName.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "18b7cSy+M9FI5DvqbtjtIfm", "EventName", undefined);
      var EventName = exports('EventName', {
        serverResponse: "SERVER_RESPONSE",
        curDialogNum: "cur_dialog_num",
        dialogOpened: "dialogOpened",
        dialogClosed: "dialogClosed",
        videoShareSuccess: "videoShareSuccess",
        recordStateChange: "recordStateChange",
        stepStageChange: "stepStageChange",
        login_sdk_suc: "login_sdk_suc",
        sideLimitGiftChange: "sideLimitGiftChange",
        blocktouch: "blocktouch",
        lookVideoSuc: "lookVideoSuc",
        nextLevel: "nextLevel",
        FIND_BEAR_AGAIN: "FIND_BEAR_AGAIN",
        GAME_ROLE_CHANGE: "GAME_ROLE_CHANGE",
        GAME_ROLE_CHANGE_GM: "GAME_ROLE_CHANGE_GM",
        REFRESH_SELECT_ROLE_VIEW: "REFRESH_SELECT_ROLE_VIEW",
        GAME_EDITOR_CHANGE: "GAME_EDITOR_CHANGE",
        AWARDCELL_SHOWDESC: "AWARDCELL_SHOWDESC",
        getLimitGift: "getLimitGift",
        gm_select_pic: "gm_select_pic",
        UPDATE_MARK_POS: "UPDATE_MARK_POS",
        DRAG_ITEM: "DRAG_ITEM",
        next_level: "next_level",
        newFlowerChange: "newFlowerChange",
        skinChange: "skinChange",
        levelChange: "levelChange",
        itemChange: "itemChange",
        guideStepChange: "guideStepChange",
        skinGet: "skinGet",
        settingSliderValueChange: "settingSliderValueChange"
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ExcelManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, cclegacy;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "569f73wl29N3qZgYz3WCVXA", "ExcelManager", undefined);
      /**
       * 数值表管理类
       */
      var ExcelManager = exports('default', /*#__PURE__*/function () {
        function ExcelManager() {
          this._jsonMap = new Map();
          this._jsonMap = new Map();
        }
        var _proto = ExcelManager.prototype;
        _proto.initJson = function initJson(data) {
          for (var jsonKey in data) {
            this._jsonMap.set(jsonKey, data[jsonKey]);
          }
        }
        // prop
        ;

        _createClass(ExcelManager, [{
          key: "levels",
          get: function get() {
            return this._jsonMap.get("level");
          }
        }, {
          key: "maxLevels",
          get: function get() {
            return this.levels.length;
          }
        }]);
        return ExcelManager;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FloatCurrency.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BasePrefab.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, BasePrefab;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Label = module.Label;
    }, function (module) {
      BasePrefab = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "698b4KUrRRM8Y2wfUCmrxvd", "FloatCurrency", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var FloatCurrencyType = exports('FloatCurrencyType', /*#__PURE__*/function (FloatCurrencyType) {
        FloatCurrencyType["Population"] = "population";
        FloatCurrencyType["Food"] = "food";
        return FloatCurrencyType;
      }({}));
      var FloatCurrency = exports('FloatCurrency', (_dec = ccclass('FloatCurrency'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_BasePrefab) {
        _inheritsLoose(FloatCurrency, _BasePrefab);
        function FloatCurrency() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BasePrefab.call.apply(_BasePrefab, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "\u4EBA\u53E3icon", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "\u7CAE\u98DFicon", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "numLabel", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = FloatCurrency.prototype;
        _proto.setData = function setData(type, amount) {
          var safeAmount = Math.max(0, Math.floor(amount || 0));
          if (this.numLabel) {
            this.numLabel.string = "+" + safeAmount;
          }
          if (this.人口icon) {
            this.人口icon.active = type === FloatCurrencyType.Population;
          }
          if (this.粮食icon) {
            this.粮食icon.active = type === FloatCurrencyType.Food;
          }
        };
        return FloatCurrency;
      }(BasePrefab), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "\u4EBA\u53E3icon", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "\u7CAE\u98DFicon", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "numLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameConfig.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameControl.ts', './Utils.ts'], function (exports) {
  var _createClass, cclegacy, Size, GC, Utils;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      Size = module.Size;
    }, function (module) {
      GC = module.GC;
    }, function (module) {
      Utils = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "3b7c6sx3HxA/ahgef1MGv3Q", "GameConfig", undefined);
      var GameConfig = exports('GameConfig', /*#__PURE__*/function () {
        function GameConfig() {
          this.debug = true;
          //是否是debug模式
          this.GM = false;
          //gm开关 
          this.isOnline = false;
          //线上测试开关
          this.gameUrl = "";
          // cur use (构造函数中动态设置)
          this.gameUrl_dev = "https://gameapi.51feibai.com/api/v1/";
          //测试服
          this.gameUrl_prev = "https://gameapi.51feibai.com/api/v1/";
          //预发布
          this.gameUrl_release = "https://gameapi.51feibai.com/api/v1/";
          //正式服
          this.token = void 0;
          this.version = '1.0.3';
          this.touchId = -1;
          this.bgSzie = new Size(750, 1624);
          this.launchOption = null;
          this.cdnPath = 'https://game-static.heicheng51.com/';
          this.imgUrl = 'https://game-static.heicheng51.com/shareImg/';
          this.company = "黑橙（北京）科技有限公司";
          this.plateNumber = "2024SA0007228";
          this.signkey = "Game)HC^%@!_-";
          this.videoMax = 50;
          this.videoGetTime = 10000;
          //拉取视频超时时长
          this.shareLimit = 5;
          //分享次数限制
          this.isFirstVideo = true;
          this.videoIndex = 0;
          this.isAllLoad = false;
          this.isDouyin = false;
          this.isAndroid = true;
          this.gameName = "眼力你最牛";
          this.gameKey = "yxmys";
          this.openId = "";
          //登录ID
          this.app_id = "";
          this.trace_id = "";
          //登录校验ID
          this.pf_openid = "test";
          this.channel_id = "";
          this.env = 0;
          this.client_env = "dev";
          this.gemColors = ["#71fc6a", "#5ac7ff", "#e44dff", "#ff642e", "#ff2121", "#fdff37"];
          this.showBackBtn = true;
          this.enter_scence = "level";
          this.initial_skin = "skin_008";
          this.scence_ab = ["ui_id2", "ui_id2"];
          this.subscribe = [];
          this.challenge_share = -1;
          this.home_type = "findGirl";
          this.showChooseGirlSkin = true;
          this.game_info = "game_a";
          this.findbear_hard1 = .02;
          this.findbear_hard2 = .04;
          this.loadAni = 4;
          this.isDarkMode = false;
          this.gameCountDownOn = !0;
          this.countDownScale = 5;
          this.reviveCountDown = 120;
          this.propAddTime = 120;
          this.powerSysOn = !0;
          this.reviveHp = 1;
          this.gridResType = 0;
          this.energyReviveCount = 1;
          this.reviveTime = 300;
          this.powerMax = 5;
          this.payCount = 1;
          this.isPool = true;
          this.maxDis = 1;
          this.moveLength = 10;
          this.shiWanId = 0;
          this.isShiWan = false;
          this.drawTotalDuration = 1100;
          this.paintPer5levels = 5;
          /*** 分享 */
          this.shareImags = ["https://game-static.heicheng51.com/shareImg/zlnzn.jpg"];
          this.shareTitles = ["眼力你最牛"];
          if (this.isOnline) {
            this.gameUrl = this.gameUrl_release;
          } else {
            this.gameUrl = this.debug ? this.gameUrl_dev : this.gameUrl_release;
            this.env = this.debug ? 1 : 0;
            this.client_env = this.debug ? "dev" : "prod";
          }
          this.trace_id = this.traceId;
        }
        var _proto = GameConfig.prototype;
        _proto.setLaunchOption = function setLaunchOption(option) {
          this.launchOption = option;
        };
        _proto.getShareParams = function getShareParams(index, query) {
          if (query === void 0) {
            query = '';
          }
          var params = {
            imageUrl: this.shareImags[Math.floor(Math.random() * this.shareImags.length)],
            title: this.shareTitles[Math.floor(Math.random() * this.shareTitles.length)],
            query: "requestAddFrom=" + GC.data.user.user_id + "&userId=" + GC.data.user.user_id + "&shareId=" + index
          };
          if (!Utils.isNull(query)) {
            params.query += "&" + query;
          }
          return params;
        };
        _createClass(GameConfig, [{
          key: "traceId",
          get: function get() {
            var timerStr = Date.now();
            var randomStr = Utils.generateRandomString(19);
            return timerStr + randomStr;
          }
        }, {
          key: "cdnZipUrl",
          get: function get() {
            if (this.GM) {
              console.log("使用gm资源路径---------");
              return "waterData/gm/";
            } else {
              console.log("使用线上资源路径----------");
              return "waterData/online/";
            }
          }
        }, {
          key: "appId_platform",
          get: function get() {
            if (GC.sdk.isBl) return "";
            if (GC.sdk.isKs) return "ks709598419658034004";
            if (GC.sdk.isDy) return "ttc1c5b7785eccc82a02";
            if (GC.sdk.isWx) return "wx255866d163d015c1";
            return "ttc1c5b7785eccc82a02";
          }
        }, {
          key: "appId",
          get: function get() {
            return "1751947671";
          }
        }, {
          key: "appKey",
          get: function get() {
            return "djXvoPD0ms4nZCZZo5aXSlrw3l6Iuz7F";
          }
        }, {
          key: "appSecret",
          get: function get() {
            return "uZm6CahZeji2Vb83PSOfVQ3bVXCMauuoZfqjL1kuojMyALWTUW0Wyk8cu3D6mGvv";
          }
        }, {
          key: "channelId",
          get: function get() {
            if (GC.sdk.isBl) return "";
            if (GC.sdk.isKs) return "1002";
            if (GC.sdk.isDy) return "1001";
            if (GC.sdk.isWx) return "1000";
            return "1001";
          }
        }, {
          key: "bannerId",
          get: function get() {
            if (GC.sdk.isBl) return "";
            if (GC.sdk.isKs) return "2300014271_03";
            if (GC.sdk.isDy) return "1001";
            if (GC.sdk.isWx) return "1001";
            return "1001";
          }
        }, {
          key: "videoId",
          get: function get() {
            if (GC.sdk.isBl) return "";
            if (GC.sdk.isKs) return "2300014271_01";
            if (GC.sdk.isDy) return "2739rqamn5y1f8q49b";
            if (GC.sdk.isWx) return "3ghkb919485a379o74";
            return "2739rqamn5y1f8q49b";
          }
        }, {
          key: "boxId",
          get: function get() {
            if (GC.sdk.isBl) return "";
            if (GC.sdk.isKs) return "";
            if (GC.sdk.isDy) return "";
            if (GC.sdk.isWx) return "1001";
            return "1001";
          }
        }, {
          key: "interstId",
          get: function get() {
            if (GC.sdk.isBl) return "";
            if (GC.sdk.isKs) return "2300014271_02";
            if (GC.sdk.isDy) return "6ccc97g6b7k6krek6d";
            if (GC.sdk.isWx) return "1001";
            return "6ccc97g6b7k6krek6d";
          }
        }]);
        return GameConfig;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameControl.ts", ['cc', './ActionsManager.ts', './AudioManager.ts', './ConfigManager.ts', './DataManager.ts', './DialogManager.ts', './ExcelManager.ts', './LanguageManager.ts', './LocalStoreManager.ts', './NetManager.ts', './NotifyManager.ts', './PoolManager.ts', './ResourceManager.ts', './SceneManger.ts', './SDKManager.ts', './MyLog.ts', './TimeUtils.ts'], function (exports) {
  var cclegacy, ActionsManager, AudioManager, ConfigManager, DataManager, DialogManager, ExcelManager, LanguageManager, LocalStoreManager, NetManager, NotifyManager, PoolManager, ResourceManager, SceneManager, SDKManager, MyLog, timeUtils;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ActionsManager = module.ActionsManager;
    }, function (module) {
      AudioManager = module.AudioManager;
    }, function (module) {
      ConfigManager = module.ConfigManager;
    }, function (module) {
      DataManager = module.DataManager;
    }, function (module) {
      DialogManager = module.DialogManager;
    }, function (module) {
      ExcelManager = module.default;
    }, function (module) {
      LanguageManager = module.LanguageManager;
    }, function (module) {
      LocalStoreManager = module.LocalStoreManager;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      NotifyManager = module.NotifyManager;
    }, function (module) {
      PoolManager = module.default;
    }, function (module) {
      ResourceManager = module.ResourceManager;
    }, function (module) {
      SceneManager = module.SceneManager;
    }, function (module) {
      SDKManager = module.SDKManager;
    }, function (module) {
      MyLog = module.default;
    }, function (module) {
      timeUtils = module.timeUtils;
    }],
    execute: function () {
      cclegacy._RF.push({}, "09074NGgClPF6JDbHU7TrFy", "GameControl", undefined);
      var GameControl = /*#__PURE__*/function () {
        function GameControl() {
          var _this = this;
          this.pool = null;
          this.notify = null;
          this.config = null;
          this.excel = null;
          this.audio = null;
          this.scene = null;
          this.dialog = null;
          this.data = null;
          this.res = null;
          this.net = null;
          this.action = null;
          this.language = null;
          this.localStore = null;
          this.sdk = null;
          this._intoBackTime = 0;
          this.intoFron = function () {
            MyLog.green('游戏进入前台---');
            GC.audio.music && GC.audio.playMusic();
          };
          this.intoBackGround = function () {
            MyLog.green('游戏进入后台---');
            GC.audio.music && GC.audio.pauseMusic();
            _this._intoBackTime = timeUtils.getNow(false);

            // GC.data.game?.mod?.data && GC.data.game.saveNow();
          };

          this.notify = new NotifyManager();
          this.config = new ConfigManager();
          this.excel = new ExcelManager();
          this.audio = new AudioManager();
          this.data = new DataManager();
          this.scene = new SceneManager();
          this.dialog = new DialogManager();
          this.res = new ResourceManager();
          this.net = new NetManager();
          this.action = new ActionsManager();
          this.language = new LanguageManager();
          this.localStore = new LocalStoreManager();
          this.sdk = new SDKManager();
          this.pool = new PoolManager();
          this.initEvents();
        }
        var _proto = GameControl.prototype;
        _proto.init = function init() {
          this.data.init();
          this.sdk.init();
        };
        _proto.initEvents = function initEvents() {};
        return GameControl;
      }();
      var GC = exports('GC', new GameControl());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameData.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EnumConfig.ts', './EventName.ts', './ProtocolConfig.ts', './GameControl.ts', './TimeUtils.ts', './Utils.ts', './GameDataBase.ts', './SkinData.ts'], function (exports) {
  var _inheritsLoose, _extends, _createClass, cclegacy, ResId, EventName, ProtocolName, GC, timeUtils, Utils, GameDataBase, SkinData;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _extends = module.extends;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ResId = module.ResId;
    }, function (module) {
      EventName = module.EventName;
    }, function (module) {
      ProtocolName = module.ProtocolName;
    }, function (module) {
      GC = module.GC;
    }, function (module) {
      timeUtils = module.timeUtils;
    }, function (module) {
      Utils = module.default;
    }, function (module) {
      GameDataBase = module.default;
    }, function (module) {
      SkinData = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "c5eccnP0wVE2Z7V5BqkuWIF", "GameData", undefined);
      var GameData = exports('default', /*#__PURE__*/function (_GameDataBase) {
        _inheritsLoose(GameData, _GameDataBase);
        function GameData() {
          var _this;
          _this = _GameDataBase.call(this) || this;
          _this.saveNow = function () {
            _this.saveLocal();
          };
          //新的一天刷新每日重置数据
          _this.refreshDay = function () {
            _this._msg.time = timeUtils.getNow();
          };
          _this.isGetNewSkin = false;
          _this._msg = {
            time: 0,
            isLimitGiftGet: false,
            isAddShortcut: false,
            joinGroupId: "",
            //参加的群id
            curSkinId: 0,
            firstInGame: true,
            level: 0,
            paintingIds: [],
            //已解锁的画
            waitLookPaints: [],
            //待查看的画
            skinsIds: [0],
            //已解锁的装扮id
            power: 5,
            powerStartResumeTime: 0,
            guideStep: 0,
            isFirstInGame: true
          };
          return _this;
        }
        var _proto = GameData.prototype;
        _proto.getDefaultData = function getDefaultData() {
          this._msg = {
            time: 0,
            isLimitGiftGet: false,
            isAddShortcut: false,
            joinGroupId: "",
            //参加的群id
            curSkinId: 0,
            firstInGame: true,
            level: 0,
            paintingIds: [],
            //已解锁的画
            waitLookPaints: [],
            //待查看的画
            skinsIds: [0],
            //已解锁的装扮id
            power: 5,
            powerStartResumeTime: 0,
            guideStep: 0,
            isFirstInGame: true,
            skinVideoCount: 0,
            sliderValue: 0.5,
            tipPropCount: 0,
            removePropCount: 0,
            addTimePropCount: 0,
            reverseDirPropCount: 0
          };
          return this._msg;
        };
        _proto.initData = function initData(msg) {
          _GameDataBase.prototype.initData.call(this, msg);
          var defaultData = this.getDefaultData();
          var needSync = false;
          if (Utils.isNull(msg)) {
            needSync = true;
            this._msg = defaultData;
          } else {
            var local = this.getLocal();
            if (!Utils.isNull(local)) {
              // 合并本地数据和默认值
              this._msg = this.mergeWithDefault(local);
            } else {
              // 合并服务器数据和默认值
              this._msg = this.mergeWithDefault(msg);
            }
          }
          this.checkRefresh();
          needSync && (this.saveLocal(), this.syncData());
          this.fixMarkGetSkinData();
        }
        // 合并现有数据与默认值
        ;

        _proto.mergeWithDefault = function mergeWithDefault(existingData) {
          var defaultData = this.getDefaultData();
          var merged = _extends({}, defaultData, existingData);

          // 对于数组，确保它们存在且是数组类型
          if (!Array.isArray(merged.paintingIds)) merged.paintingIds = [];
          if (!Array.isArray(merged.waitLookPaints)) merged.waitLookPaints = [];
          if (!Array.isArray(merged.skinsIds)) merged.skinsIds = [0];
          return merged;
        };
        _proto.initDefault = function initDefault() {
          this._msg = this.getDefaultData();
        };
        _proto.saveLocal = function saveLocal() {
          var saveInfo = Utils.isNull(this._msg) ? null : this._msg;
          GC.localStore.setItem("" + GC.config.game.openId, saveInfo);
        };
        _proto.getLocal = function getLocal() {
          var data = GC.localStore.getItem("" + GC.config.game.openId, null);
          return data;
        };
        _proto.syncData = function syncData() {
          this.reqServePost(ProtocolName.UPDATE_USER, {
            data: this._msg
          });
        };
        _proto.resetAllData = function resetAllData() {
          GC.localStore.clear();
          this.reqServePost(ProtocolName.UPDATE_USER, {
            data: "{}"
          });
          if (GC.sdk.isPlatform) {
            this.scheduleOnce(function () {
              wx.restartMiniProgramSync();
            }, 1);
          }
        };
        _proto.checkRefresh = function checkRefresh() {
          this.checkDayRefresh();
        }

        //是否是新的一天
        ;

        _proto.checkDayRefresh = function checkDayRefresh() {
          if (!timeUtils.isToday(this._msg.time)) {
            this.refreshDay();
          }
        };
        /**
        * 获取排行榜
        */
        _proto.reqRankData = function reqRankData(rankType, count) {
          if (count === void 0) {
            count = 100;
          }
          var data = {
            rank_id: rankType,
            rank_type: 1,
            score: count
          };
          this.reqServeGet(ProtocolName.RANK_LIST, data);
        }
        /**
        * 排行数据
        * 上传数据：
        */;
        _proto.sendRankData = function sendRankData(rankType, score) {
          // if (this.nickname != null && this.nickname != "") {
          var data = {
            rank_id: rankType,
            rank_type: 1,
            score: score
          };
          this.reqServePost(ProtocolName.RANK_UPLOAD, data);
        };
        _proto.getCurLevelJson = function getCurLevelJson(lv) {
          var level = lv || this.level;
          var levels = GC.excel.levels;
          if (!levels || levels.length === 0) {
            return null;
          }
          if (level >= levels.length) {
            level = Utils.random(1, levels.length - 1);
          }
          // return levels[17]
          return levels[level];
        };
        _proto.paintHaveOpen = function paintHaveOpen(id) {
          return this._msg.paintingIds.includes(id);
        };
        _proto.isNewPaint = function isNewPaint(paintingId) {
          return this._msg.waitLookPaints.includes(paintingId);
        };
        _proto.markGetPaint = function markGetPaint(paintId) {
          if (!this._msg.paintingIds.includes(paintId)) {
            this._msg.paintingIds.push(paintId);
            this._msg.waitLookPaints.push(paintId);
            this.saveNow();
            this.post(EventName.newFlowerChange);
          }
        };
        _proto.markLookPaintById = function markLookPaintById(paintId) {
          var index = this._msg.waitLookPaints.indexOf(paintId);
          if (index > -1) {
            this._msg.waitLookPaints.splice(index, 1);
          }
          this.saveNow();
          this.post(EventName.newFlowerChange);
        };
        _proto.markGetSkin = function markGetSkin(skinId) {
          if (!this.skinsIds.includes(skinId)) {
            this.skinsIds.push(skinId);
            this.isHaveNewSkin = true;
            this.post(EventName.skinGet);
            this.saveNow();
          }
        };
        _proto.useSkin = function useSkin(skinId) {
          this._msg.curSkinId = skinId;
          this.post(EventName.skinChange);
          this.saveNow();
        };
        _proto.skinIsUnlock = function skinIsUnlock(id) {
          return this.skinsIds.includes(id);
        };
        _proto.skinIsUse = function skinIsUse(id) {
          return this._msg.curSkinId == id;
        };
        _proto.addItem = function addItem(id, addAmount) {
          switch (id) {
            case ResId.power:
              this._msg.power += addAmount;
              break;
            case ResId.reverseDir:
              this._msg.reverseDirPropCount += addAmount;
              break;
            case ResId.tip:
              this._msg.tipPropCount += addAmount;
              break;
            case ResId.remove:
              this._msg.removePropCount += addAmount;
              break;
            case ResId.addTime:
              this._msg.addTimePropCount += addAmount;
              break;
            default:
              // 处理未知id或记录日志
              console.warn("Unknown item id: " + id);
              return;
          }
          this.post(EventName.itemChange);
          this.saveNow();
        };
        _proto.removeItem = function removeItem(id, removeAmount) {
          if (removeAmount === void 0) {
            removeAmount = 1;
          }
          if (removeAmount <= 0) return;
          switch (id) {
            case ResId.power:
              this._msg.power -= removeAmount;
              break;
            case ResId.reverseDir:
              this._msg.reverseDirPropCount -= removeAmount;
              break;
            case ResId.tip:
              this._msg.tipPropCount -= removeAmount;
              break;
            case ResId.remove:
              this._msg.removePropCount -= removeAmount;
              break;
            case ResId.addTime:
              this._msg.addTimePropCount -= removeAmount;
              break;
          }
          this.post(EventName.itemChange);
          this.saveNow();
        };
        _proto.getItemCount = function getItemCount(id) {
          var _itemCountMap, _itemCountMap$id;
          var itemCountMap = (_itemCountMap = {}, _itemCountMap[ResId.power] = this._getPowerCount(), _itemCountMap[ResId.reverseDir] = this._msg.reverseDirPropCount, _itemCountMap[ResId.tip] = this._msg.tipPropCount, _itemCountMap[ResId.remove] = this._msg.removePropCount, _itemCountMap[ResId.addTime] = this._msg.addTimePropCount, _itemCountMap);
          return (_itemCountMap$id = itemCountMap[id]) != null ? _itemCountMap$id : 0;
        };
        _proto._getPowerCount = function _getPowerCount() {
          if (Utils.isNull(this._msg.power)) {
            this._msg.power = GC.config.game.powerMax;
          }
          return this._msg.power;
        };
        _proto.getPaintIdByLevel = function getPaintIdByLevel(levelId) {
          var id = Math.ceil((levelId + 1) / 5);
          return id + 1;
        };
        _proto.getCurrentPaintingProgress = function getCurrentPaintingProgress(level) {
          var currentLevel;
          if (level) {
            currentLevel = level;
          } else {
            currentLevel = this.level;
          }
          var paintingsPerLevel = GC.config.game.paintPer5levels;
          var currentPaintingProgress = currentLevel % paintingsPerLevel;
          return currentPaintingProgress;
        };
        _proto.setGuideStep = function setGuideStep(step) {
          this._msg.guideStep = step;
          this.post(EventName.guideStepChange);
          this.saveNow();
        };
        _proto.getGuideStep = function getGuideStep() {
          return this._msg.guideStep;
        };
        _proto.fixMarkGetSkinData = function fixMarkGetSkinData() {
          for (var i = 0; i < SkinData.skinConfigs.length; i++) {
            var skin = SkinData.skinConfigs[i];
            if (GC.data.game.level + 1 >= skin.unlock && !skin.videoCount) {
              GC.data.game.markGetSkin(skin.id);
            }
          }
        };
        _proto.getCurMarkSkinUnlockLevel = function getCurMarkSkinUnlockLevel() {
          for (var i = 0; i < SkinData.skinConfigs.length; i++) {
            var skin = SkinData.skinConfigs[i];
            if (GC.data.game.level + 1 <= skin.unlock) {
              return skin.unlock;
            }
          }
          return 0;
        };
        _proto.skinVideoCountAdd = function skinVideoCountAdd(skinVo) {
          this._msg.skinVideoCount++;
          if (this._msg.skinVideoCount >= skinVo.videoCount) {
            GC.data.game.markGetSkin(skinVo.id);
          }
          this.saveNow();
        };
        _createClass(GameData, [{
          key: "isLimitGiftGet",
          get: function get() {
            return this._msg.isLimitGiftGet;
          },
          set: function set(val) {
            this._msg.isLimitGiftGet = val;
            this.saveNow();
          }
        }, {
          key: "isAddShortcut",
          get: function get() {
            return this._msg.isAddShortcut;
          },
          set: function set(val) {
            this._msg.isAddShortcut = val;
            this.saveNow();
          }
        }, {
          key: "joinGroupId",
          get: function get() {
            return this._msg.joinGroupId;
          },
          set: function set(val) {
            this._msg.joinGroupId = val;
            this.saveNow();
          }
        }, {
          key: "data",
          get: function get() {
            return this._msg;
          }

          // get userId() {
          //     return this._loginMsg?.user?.user_id || null;
          // }
        }, {
          key: "curSkinId",
          get: function get() {
            return 0;
          }
        }, {
          key: "firstInGame",
          get: function get() {
            return false;
          }
          // 设置是否为首次进入游戏的标记
          ,

          set: function set(val) {
            this._msg.firstInGame = val;
            this.saveNow();
          }
        }, {
          key: "level",
          get: function get() {
            return this._msg.level || 0;
          },
          set: function set(val) {
            this._msg.level = val;
            this.post(EventName.levelChange);
            this.saveNow();
          }
        }, {
          key: "paintingIds",
          get: function get() {
            return this._msg.paintingIds;
          }
        }, {
          key: "unlockPaintIds",
          get: function get() {
            return this._msg.paintingIds;
          }
        }, {
          key: "haveRedPaint",
          get: function get() {
            return this._msg.waitLookPaints.length > 0;
          }
        }, {
          key: "isHaveNewSkin",
          get: function get() {
            return this.isGetNewSkin;
          },
          set: function set(val) {
            this.isGetNewSkin = val;
          }
        }, {
          key: "skinsIds",
          get: function get() {
            if (this._msg.skinsIds == null || this._msg.skinsIds.length == 0) {
              this._msg.skinsIds = [0];
              this.saveNow();
            }
            return this._msg.skinsIds;
          }
        }, {
          key: "powerStartResumeTime",
          get: function get() {
            if (Utils.isNull(this._msg.powerStartResumeTime)) {
              this._msg.powerStartResumeTime = 0;
            }
            return this._msg.powerStartResumeTime;
          },
          set: function set(val) {
            this._msg.powerStartResumeTime = val;
            this.saveNow();
          }
        }, {
          key: "isDarenGM",
          get: function get() {
            return GC.data.onlineParam.daren_white_list.some(function (item) {
              return item == GC.data.user.user_id;
            });
          }
        }, {
          key: "isFirstInGame",
          get: function get() {
            return this._msg.isFirstInGame;
          },
          set: function set(val) {
            this._msg.isFirstInGame = val;
            this.saveNow();
          }
        }, {
          key: "skinVideoCount",
          get: function get() {
            return this._msg.skinVideoCount;
          }
        }, {
          key: "sliderValue",
          get: function get() {
            return this._msg.sliderValue;
          },
          set: function set(val) {
            this._msg.sliderValue = val;
            this.saveNow();
          }
        }]);
        return GameData;
      }(GameDataBase));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameDataBase.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseData.ts', './TimeUtils.ts'], function (exports) {
  var _inheritsLoose, cclegacy, macro, BaseData, timeUtils;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      macro = module.macro;
    }, function (module) {
      BaseData = module.BaseData;
    }, function (module) {
      timeUtils = module.timeUtils;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ea5429Fu6tDV6zTszzJgigW", "GameDataBase", undefined);
      var GameDataBase = exports('default', /*#__PURE__*/function (_BaseData) {
        _inheritsLoose(GameDataBase, _BaseData);
        function GameDataBase() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseData.call.apply(_BaseData, [this].concat(args)) || this;
          _this._msg = null;
          _this._pollingTimes = 0;
          _this.polling = function () {
            if (_this._pollingTimes >= Number.MAX_VALUE) {
              _this._pollingTimes = 1;
            }

            // GC.data.lianxiRecord.polling(this._pollingTimes);
            _this._pollingTimes++;
          };
          _this.refreshDay = function () {
            // GC.notify.post(EventName.refreshDay);
          };
          _this.refreshWeek = function () {
            // GC.data.lunhui.refreshWeek();
            // GC.data.guild.refreshWeek();
          };
          return _this;
        }
        var _proto = GameDataBase.prototype;
        _proto.initData = function initData(msg) {
          this._msg = msg;
          this.startPolling();
        };
        _proto.startPolling = function startPolling() {
          this.unschedule(this.polling);
          this.schedule(this.polling, 1);
          this.startCheckRefreshDay();
          this.startCheckRefreshWeek();
        };
        _proto.startCheckRefreshDay = function startCheckRefreshDay() {
          var todayEnd = timeUtils.getToday24Time(false);
          var nextSubTime = todayEnd - timeUtils.getNow(false);
          this.unschedule(this.refreshDay);
          this.schedule(this.refreshDay, 24 * 60 * 60, macro.REPEAT_FOREVER, nextSubTime + 1);
        };
        _proto.startCheckRefreshWeek = function startCheckRefreshWeek() {
          var weekEnd = timeUtils.get24TimeOfWeek(false);
          var nextSubTime = weekEnd - timeUtils.getNow(false);
          this.unschedule(this.refreshWeek);
          this.schedule(this.refreshWeek, 7 * 24 * 60 * 60, macro.REPEAT_FOREVER, nextSubTime + 1);
        };
        return GameDataBase;
      }(BaseData));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BasePrefab.ts', './SpriteFrameManager.ts', './EffectManager.ts', './GuideManager.ts', './CountDown.ts', './FloatCurrency.ts', './PathCongfig.ts', './GameControl.ts', './GameViewConfig.ts', './OurSoldier.ts', './EnemySoldier.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, Label, Prefab, Vec3, UITransform, view, Graphics, Color, tween, Tween, instantiate, Sprite, UIOpacity, Camera, BasePrefab, SpriteFrameManager, EffectType, EffectManager, GuideManager, CountDown, FloatCurrencyType, FloatCurrency, AudioPath, DialogPath, GC, GAME_VIEW_CONFIG, HexCampState, OurSoldier, EnemySoldier;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Label = module.Label;
      Prefab = module.Prefab;
      Vec3 = module.Vec3;
      UITransform = module.UITransform;
      view = module.view;
      Graphics = module.Graphics;
      Color = module.Color;
      tween = module.tween;
      Tween = module.Tween;
      instantiate = module.instantiate;
      Sprite = module.Sprite;
      UIOpacity = module.UIOpacity;
      Camera = module.Camera;
    }, function (module) {
      BasePrefab = module.default;
    }, function (module) {
      SpriteFrameManager = module.SpriteFrameManager;
    }, function (module) {
      EffectType = module.EffectType;
      EffectManager = module.EffectManager;
    }, function (module) {
      GuideManager = module.GuideManager;
    }, function (module) {
      CountDown = module.CountDown;
    }, function (module) {
      FloatCurrencyType = module.FloatCurrencyType;
      FloatCurrency = module.FloatCurrency;
    }, function (module) {
      AudioPath = module.AudioPath;
      DialogPath = module.DialogPath;
    }, function (module) {
      GC = module.GC;
    }, function (module) {
      GAME_VIEW_CONFIG = module.GAME_VIEW_CONFIG;
      HexCampState = module.HexCampState;
    }, function (module) {
      OurSoldier = module.OurSoldier;
    }, function (module) {
      EnemySoldier = module.EnemySoldier;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _class3;
      cclegacy._RF.push({}, "fbd02083/BBSbQAGddEMZ/T", "GameView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var GameView = exports('GameView', (_dec = ccclass('GameView'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Label), _dec14 = property(Label), _dec15 = property(Label), _dec16 = property(Label), _dec17 = property(Prefab), _dec18 = property(Prefab), _dec19 = property(Prefab), _dec20 = property(Prefab), _dec21 = property(Node), _dec22 = property(Node), _dec23 = property(Node), _dec24 = property(Node), _dec25 = property(Node), _dec26 = property(Node), _dec27 = property(Node), _dec28 = property(Node), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_BasePrefab) {
        _inheritsLoose(GameView, _BasePrefab);
        function GameView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BasePrefab.call.apply(_BasePrefab, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "gridMapParent", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "\u6211\u65B9\u5927\u672C\u8425", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "\u6211\u65B9\u519C\u573A", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "\u6211\u65B9\u5175\u84251", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "\u6211\u65B9\u5175\u84252", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "\u6211\u65B9\u5175\u84253", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "\u654C\u65B9\u5927\u672C\u8425", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "\u654C\u65B9\u519C\u573A", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "\u654C\u65B9\u5175\u84251", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "\u654C\u65B9\u5175\u84252", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "\u654C\u65B9\u5175\u84253", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "\u6211\u65B9\u4EBA\u53E3\u6570", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "\u6211\u65B9\u7CAE\u98DF\u6570", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "\u654C\u65B9\u4EBA\u53E3\u6570", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "\u654C\u65B9\u7CAE\u98DF\u6570", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ourSoldierPrefab", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "enemySoldierPrefab", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "countDownPrefab", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "floatCurrencyPrefab", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ourLight1", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ourLight2", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ourLight3", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "enemyLight1", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "enemyLight2", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "enemyLight3", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "warningNode", _descriptor26, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "guideHandNode", _descriptor27, _assertThisInitialized(_this));
          _this.config = GAME_VIEW_CONFIG;
          _this.hexCells = new Map();
          /** 批量绘制六边形，将原先每格 2 个 Graphics 合并为 3 个，显著降低 draw call */
          _this.hexOutlineGraphics = null;
          _this.hexAllyFillGraphics = null;
          _this.hexEnemyFillGraphics = null;
          _this.pendingAnimHexKeys = new Set();
          /** 单格占领动画冷却（秒级时间戳），避免同格被双方争抢时每帧重播动画 */
          _this.hexAnimCooldownUntilMap = new Map();
          _this.activeHexCaptureAnimCount = 0;
          _this.hexFillBatchesDirty = false;
          _this.suppressHexBatchRebuild = false;
          _this.areaCircleLayer = null;
          _this.allyEconomy = {
            population: 0,
            food: 0,
            farmLevel: 1
          };
          _this.enemyEconomy = {
            population: 0,
            food: 0,
            farmLevel: 1
          };
          _this.barracksCircleNodes = new Map();
          _this.allyBarracksLevels = [0, 0, 0];
          _this.enemyBarracksLevels = [0, 0, 0];
          _this.barracksRuntime = new Map();
          _this.barracksNextSpawnAt = new Map();
          _this.barracksCountDownMap = new Map();
          /** 兵营升级光效节点在编辑器中的原始缩放（避免呼吸/满级缩放叠乘） */
          _this.barracksUpgradeLightBaseScale = new Map();
          /** 士兵层本地坐标系下，屏幕垂直中线对应的 y（懒计算后缓存） */
          _this.soldierSpaceScreenCenterY = 0;
          _this.soldierSpaceScreenCenterYCached = false;
          /** 本局内是否已为「首个越过屏幕 Y 中线的敌方士兵」播过倒吸凉气（整局仅一次） */
          _this.enemyFirstGaspAtScreenCenterPlayed = false;
          /** 本局内敌方首次攻击我方大本营时播过一次警告 UI+音效，之后不再触发 */
          _this.allyBaseUnderAttackWarningPlayedOnce = false;
          /** 升级光效呼吸时播放「闪烁」音效的节流（秒） */
          _this.lastBarracksUpgradeBlinkSoundTime = -999;
          /** 手指引导：首步强制升级我方农场期间暂停战斗与产出 */
          _this.guideGameplayPausedForFarm = false;
          /** 手指引导：已完成农场首升，进入兵营指引阶段（不暂停） */
          _this.guideFarmStepCompleted = false;
          /** 手指相对目标锚点偏移（在原先基础上整体左移 80、上移 80） */
          _this.guideHandOffset = new Vec3(0, 30, 0);
          /**
           * 兵营手指：首次出现「我方某槽可升级且对岸同槽已解锁」时锁定槽位；之后敌方再解锁其它槽也不改指位
           */
          _this.guideBarracksTargetSlot = -1;
          /** 兵营手指流程已结束（完成升级或条件不满足），本局不再显示兵营指引 */
          _this.guideBarracksFingerFinished = false;
          /** 兵营指引呼吸动画已作用过的槽位，避免每帧重开 tween */
          _this.guideBarracksPulseSlot = -2;
          _this.soldierList = [];
          _this.soldierLayer = null;
          _this.isGameOver = false;
          _this.allyBaseHp = 0;
          _this.enemyBaseHp = 0;
          _this.allyFarmHp = 0;
          _this.enemyFarmHp = 0;
          _this.isAllyFarmCaptured = false;
          _this.isEnemyFarmCaptured = false;
          _this.resourceFloatPool = [];
          _this.activeResourceFloats = new Set();
          _this.hintTextFloatPool = [];
          _this.activeHintFloats = new Set();
          _this.upgradeSuccessFloatPool = [];
          _this.activeUpgradeSuccessFloats = new Set();
          _this.ourSoldierPool = [];
          _this.enemySoldierPool = [];
          _this.soldierPoolHolder = null;
          // 特效管理器
          _this.effectManager = null;
          // 引导管理
          _this.guideManager = null;
          _this.currentGuideStep = 0;
          // 1=drop1,2=drop2,3=mergeBtn,4=clothes1,5=clothes2,6=newClothesSure,7=clothes3,8=monster3
          _this.testAnimPaths = ["game/images/seqPic/role/待机", "game/images/seqPic/role/攻击", "game/images/seqPic/role/移动"];
          _this.currentAnimIndex = 0;
          _this.codeTestSprite = null;
          _this.codeTestSpriteNode = null;
          _this.onSpawnTick = function () {
            if (_this.isGameOver || _this.guideGameplayPausedForFarm) return;
            _this.spawnWaveByCamp(HexCampState.Ally);
            _this.spawnWaveByCamp(HexCampState.Enemy);
          };
          _this.onAllyBaseProduce = function () {
            if (_this.guideGameplayPausedForFarm) return;
            // 我方主城人口产出：初始每次+1，农场达到2级后提升为每次+2
            var amount = _this.allyEconomy.farmLevel >= 2 ? 2 : 1;
            if (amount <= 0) return;
            _this.allyEconomy.population += amount;
            _this.refreshEconomyLabels();
            _this.showCurrencyFloat(_this.我方大本营, FloatCurrencyType.Population, amount);
          };
          _this.onEnemyBaseProduce = function () {
            if (_this.guideGameplayPausedForFarm) return;
            var amount = _this.config.economy.enemy.base.populationPerTick;
            if (amount <= 0) return;
            _this.enemyEconomy.population += amount;
            _this.refreshEconomyLabels();
            _this.showCurrencyFloat(_this.敌方大本营, FloatCurrencyType.Population, amount);
            _this.tryEnemyAutoUpgradeByPriority();
          };
          _this.onAllyFarmProduce = function () {
            if (_this.guideGameplayPausedForFarm) return;
            _this.produceFarmFood(_this.我方农场, _this.allyEconomy, _this.config.economy.ally, true);
          };
          _this.onEnemyFarmProduce = function () {
            if (_this.guideGameplayPausedForFarm) return;
            if (_this.isEnemyFarmCaptured) return;
            _this.produceFarmFood(_this.敌方农场, _this.enemyEconomy, _this.config.economy.enemy, false);
          };
          return _this;
        }
        /** 获取单例实例（可能为 null，需调用方判空） */
        GameView.getInstance = function getInstance() {
          return GameView._instance;
        };
        var _proto = GameView.prototype;
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          // 单例初始化：保证任意界面都能通过 GameView.getInstance() 调用
          if (GameView._instance && GameView._instance !== this) {
            // 多个 GameView 同时存在时，后加载的忽略旧实例，避免错用
            console.warn('[GameView] 检测到重复实例，将使用最新实例');
          }
          GameView._instance = this;
          this.initEffectManager();
          this.initGuideManager();
          this.initHexMap();
          this.scheduleOnce(function () {
            _this2.initCampTerritory();
          }, 0);
          this.initEconomySystem();
          this.initFarmUpgradeInteraction();
          this.initBarracksSystem();
          this.initBattleSystem();
          this.scheduleOnce(function () {
            _this2.beginFarmGuideIfNeeded();
          }, 0);
        };
        _proto.start = function start() {};
        _proto.onDestroy = function onDestroy() {
          this.stopBattleSystem();
          this.stopEconomySystem();
          this.clearFarmUpgradeInteraction();
          this.clearBarracksListeners();
          this.clearBarracksRangeCircles();
          this.clearBarracksCountDownNodes();
          this.clearResourceFloatNodes();
          this.clearSoldierPools();
          this.stopAllBarracksUpgradeLightBreath();
          this.stopAllyBaseWarningEffect();
          this.stopGuideHandPulseAnim();
          if (GameView._instance === this) {
            GameView._instance = null;
          }
        };
        _proto.update = function update(deltaTime) {
          if (this.hexFillBatchesDirty) {
            this.hexFillBatchesDirty = false;
            this.rebuildHexFillBatches();
          }
          if (this.guideGameplayPausedForFarm) {
            return;
          }
          this.updateSoldiers(deltaTime);
        }

        /**
         * 初始化屏幕范围蜂窝地图
         */;
        _proto.initHexMap = function initHexMap() {
          if (!this.gridMapParent) {
            console.warn('[GameView] gridMapParent 未设置，跳过蜂窝地图初始化');
            return;
          }
          this.hexCells.clear();
          this.pendingAnimHexKeys.clear();
          this.hexAnimCooldownUntilMap.clear();
          this.activeHexCaptureAnimCount = 0;
          this.hexOutlineGraphics = null;
          this.hexAllyFillGraphics = null;
          this.hexEnemyFillGraphics = null;
          this.gridMapParent.removeAllChildren();
          var mapParentTransform = this.gridMapParent.getComponent(UITransform) || this.gridMapParent.addComponent(UITransform);
          var visibleSize = view.getVisibleSize();
          // 强制以当前可视尺寸生成，避免父节点尺寸过小导致只生成少量格子
          mapParentTransform.setContentSize(visibleSize.width, visibleSize.height);
          var mapWidth = visibleSize.width;
          var mapHeight = visibleSize.height;
          var radius = this.config.map.hexRadius;
          var hexWidth = Math.sqrt(3) * radius;
          var rowHeight = 1.5 * radius;

          // 额外扩展边界，确保上下左右都不会出现漏缝
          var minX = -mapWidth * 0.5 - hexWidth * 2;
          var maxX = mapWidth * 0.5 + hexWidth * 2;
          var minY = -mapHeight * 0.5 - radius * 2;
          var maxY = mapHeight * 0.5 + radius * 2;
          var rowCount = Math.ceil((maxY - minY) / rowHeight) + 1;
          var colCount = Math.ceil((maxX - minX) / hexWidth) + 1;
          this.suppressHexBatchRebuild = true;
          this.createHexBatchLayers();
          for (var row = 0; row < rowCount; row++) {
            var y = maxY - row * rowHeight;
            var offsetX = row % 2 === 0 ? 0 : hexWidth * 0.5;
            var rowStartX = minX + offsetX;
            for (var col = 0; col < colCount; col++) {
              var x = rowStartX + col * hexWidth;
              this.createHexCell(row, col, x, y, HexCampState.Neutral);
            }
          }
          this.suppressHexBatchRebuild = false;
          this.hexFillBatchesDirty = false;
          this.rebuildHexOutlines();
          this.rebuildHexFillBatches();
        }

        /**
         * 初始化阵营领地：绘制主基地圈并填充主基地/农场覆盖格子
         */;
        _proto.initCampTerritory = function initCampTerritory() {
          if (!this.gridMapParent || this.hexCells.size === 0) {
            return;
          }
          this.ensureAreaCircleLayer();
          this.areaCircleLayer.removeAllChildren();
          var areas = [{
            node: this.我方大本营,
            radius: this.config.map.baseCoverRadius,
            camp: HexCampState.Ally,
            drawCircle: false
          }, {
            node: this.敌方大本营,
            radius: this.config.map.baseCoverRadius,
            camp: HexCampState.Enemy,
            drawCircle: false
          }];

          // 农场0级时不占地；升到1级后才开始占地
          if (this.allyEconomy.farmLevel > 0) {
            areas.push({
              node: this.我方农场,
              radius: this.config.map.farmCoverRadius,
              camp: HexCampState.Ally,
              drawCircle: false
            });
          }
          if (this.enemyEconomy.farmLevel > 0) {
            areas.push({
              node: this.敌方农场,
              radius: this.config.map.farmCoverRadius,
              camp: HexCampState.Enemy,
              drawCircle: false
            });
          }
          this.suppressHexBatchRebuild = true;
          for (var i = 0; i < areas.length; i++) {
            var area = areas[i];
            if (!area.node) continue;
            var center = this.convertWorldToMapLocal(area.node.getWorldPosition(new Vec3()));
            if (area.node === this.我方大本营) {
              center.y -= 100;
            }
            this.paintHexCellsInCircle(center, area.radius, area.camp);
            if (area.drawCircle) {
              this.drawAreaCircle(center, area.radius, area.camp);
            }
          }

          // 农场0级时强制回退为中立地块，避免被其它区域覆盖后看起来像“农场占地”
          this.clearFarmTerritoryIfLocked();
          this.suppressHexBatchRebuild = false;
          this.hexFillBatchesDirty = false;
          this.rebuildHexFillBatches();
        }

        /**
         * 更新格子占领状态并刷新颜色
         */;
        _proto.updateHexCellCamp = function updateHexCellCamp(row, col, camp) {
          var key = this.getHexCellKey(row, col);
          var cell = this.hexCells.get(key);
          if (!cell) return;
          this.setHexCellCamp(cell, camp, true);
        };
        _proto.createHexCell = function createHexCell(row, col, x, y, camp) {
          var cellNode = new Node("Hex_" + row + "_" + col);
          var uiTransform = cellNode.addComponent(UITransform);
          var cellSize = this.config.map.hexRadius * 2;
          uiTransform.setContentSize(cellSize, cellSize);
          cellNode.setPosition(x, y, 0);
          this.gridMapParent.addChild(cellNode);
          var key = this.getHexCellKey(row, col);
          var cellData = {
            key: key,
            row: row,
            col: col,
            node: cellNode,
            camp: HexCampState.Neutral
          };
          this.hexCells.set(key, cellData);
          this.setHexCellCamp(cellData, camp, false);
        };
        _proto.createHexBatchLayers = function createHexBatchLayers() {
          if (!this.gridMapParent) {
            return;
          }
          var outlineNode = new Node('HexBatchOutlines');
          outlineNode.addComponent(UITransform);
          this.gridMapParent.addChild(outlineNode);
          outlineNode.setSiblingIndex(0);
          this.hexOutlineGraphics = outlineNode.addComponent(Graphics);
          var allyNode = new Node('HexBatchAllyFills');
          allyNode.addComponent(UITransform);
          this.gridMapParent.addChild(allyNode);
          allyNode.setSiblingIndex(1);
          this.hexAllyFillGraphics = allyNode.addComponent(Graphics);
          var enemyNode = new Node('HexBatchEnemyFills');
          enemyNode.addComponent(UITransform);
          this.gridMapParent.addChild(enemyNode);
          enemyNode.setSiblingIndex(2);
          this.hexEnemyFillGraphics = enemyNode.addComponent(Graphics);
        };
        _proto.appendHexShapeAt = function appendHexShapeAt(graphics, centerX, centerY, radius, fill, stroke) {
          for (var i = 0; i < 6; i++) {
            var rad = Math.PI / 180 * (60 * i - 30);
            var px = centerX + radius * Math.cos(rad);
            var py = centerY + radius * Math.sin(rad);
            if (i === 0) {
              graphics.moveTo(px, py);
            } else {
              graphics.lineTo(px, py);
            }
          }
          graphics.close();
          if (fill) {
            graphics.fill();
          }
          if (stroke) {
            graphics.stroke();
          }
        };
        _proto.rebuildHexOutlines = function rebuildHexOutlines() {
          var _this3 = this;
          var g = this.hexOutlineGraphics;
          if (!(g != null && g.isValid)) {
            return;
          }
          g.clear();
          var cfg = this.config.map;
          // 中立网格描边透明度减半（不影响占领层描边）
          var baseStroke = cfg.strokeColor;
          g.strokeColor = new Color(baseStroke.r, baseStroke.g, baseStroke.b, Math.floor(baseStroke.a * 0.5));
          g.lineWidth = cfg.strokeWidth;
          var r = cfg.hexRadius;
          this.hexCells.forEach(function (cell) {
            var p = cell.node.position;
            _this3.appendHexShapeAt(g, p.x, p.y, r, false, true);
          });
        };
        _proto.rebuildHexFillBatches = function rebuildHexFillBatches() {
          var _this4 = this;
          var allyG = this.hexAllyFillGraphics;
          var enemyG = this.hexEnemyFillGraphics;
          if (!(allyG != null && allyG.isValid) || !(enemyG != null && enemyG.isValid)) {
            return;
          }
          var cfg = this.config.map;
          allyG.clear();
          enemyG.clear();
          var baseStroke = cfg.strokeColor;
          var halfAlphaStroke = new Color(baseStroke.r, baseStroke.g, baseStroke.b, Math.floor(baseStroke.a * 0.5));
          allyG.lineWidth = cfg.strokeWidth;
          allyG.strokeColor = halfAlphaStroke;
          enemyG.lineWidth = cfg.strokeWidth;
          enemyG.strokeColor = halfAlphaStroke;
          var r = cfg.hexRadius;
          this.hexCells.forEach(function (cell) {
            if (_this4.pendingAnimHexKeys.has(cell.key)) {
              return;
            }
            var p = cell.node.position;
            if (cell.camp === HexCampState.Ally) {
              allyG.fillColor = cfg.campColors[HexCampState.Ally];
              _this4.appendHexShapeAt(allyG, p.x, p.y, r, true, true);
            } else if (cell.camp === HexCampState.Enemy) {
              enemyG.fillColor = cfg.campColors[HexCampState.Enemy];
              _this4.appendHexShapeAt(enemyG, p.x, p.y, r, true, true);
            }
          });
        }

        /** 用于士兵占格缩放动画的临时节点（与批量 mesh 并存一小段时间） */;
        _proto.playHexCapturePopAnim = function playHexCapturePopAnim(cell, camp) {
          var _this$gridMapParent,
            _this5 = this;
          if (!((_this$gridMapParent = this.gridMapParent) != null && _this$gridMapParent.isValid)) {
            this.pendingAnimHexKeys["delete"](cell.key);
            this.rebuildHexFillBatches();
            return;
          }
          this.activeHexCaptureAnimCount++;
          var temp = new Node('HexCaptureAnim');
          var p = cell.node.position;
          temp.setPosition(p.x, p.y, 0);
          var g = temp.addComponent(Graphics);
          this.drawHexCell(g, camp, false);
          this.gridMapParent.addChild(temp);
          temp.setSiblingIndex(this.gridMapParent.children.length - 1);
          temp.setScale(0, 0, 1);
          tween(temp).to(0.1, {
            scale: new Vec3(1, 1, 1)
          }, {
            easing: 'sineOut'
          }).call(function () {
            if (temp.isValid) {
              temp.destroy();
            }
            _this5.activeHexCaptureAnimCount = Math.max(0, _this5.activeHexCaptureAnimCount - 1);
            _this5.pendingAnimHexKeys["delete"](cell.key);
            _this5.rebuildHexFillBatches();
          }).start();
        };
        _proto.clearHexCaptureAnimNodes = function clearHexCaptureAnimNodes() {
          var _this$gridMapParent2;
          if (!((_this$gridMapParent2 = this.gridMapParent) != null && _this$gridMapParent2.isValid)) {
            return;
          }
          var list = this.gridMapParent.children.slice();
          for (var i = 0; i < list.length; i++) {
            var ch = list[i];
            if (ch != null && ch.isValid && ch.name === 'HexCaptureAnim') {
              Tween.stopAllByTarget(ch);
              ch.destroy();
            }
          }
          this.activeHexCaptureAnimCount = 0;
        };
        _proto.drawHexCell = function drawHexCell(graphics, camp, isBaseLayer) {
          if (isBaseLayer === void 0) {
            isBaseLayer = false;
          }
          var radius = this.config.map.hexRadius;
          var fillColor = isBaseLayer ? this.config.map.campColors[HexCampState.Neutral] : this.config.map.campColors[camp] || this.config.map.campColors[HexCampState.Neutral];
          var shouldFill = camp !== HexCampState.Neutral;
          graphics.clear();
          if (shouldFill) {
            graphics.fillColor = fillColor;
          }
          graphics.strokeColor = this.config.map.strokeColor;
          graphics.lineWidth = this.config.map.strokeWidth;
          for (var i = 0; i < 6; i++) {
            // pointy-top 六边形：起始角度 -30 度
            var rad = Math.PI / 180 * (60 * i - 30);
            var px = radius * Math.cos(rad);
            var py = radius * Math.sin(rad);
            if (i === 0) {
              graphics.moveTo(px, py);
            } else {
              graphics.lineTo(px, py);
            }
          }
          graphics.close();
          if (shouldFill) {
            graphics.fill();
          }
          graphics.stroke();
        };
        _proto.setHexCellCamp = function setHexCellCamp(cell, camp, playAnim) {
          if (!cell) return;
          if (cell.camp === camp) return;
          cell.camp = camp;
          if (camp === HexCampState.Neutral) {
            this.pendingAnimHexKeys["delete"](cell.key);
            if (!this.suppressHexBatchRebuild) {
              this.hexFillBatchesDirty = true;
            }
            return;
          }
          if (playAnim && !this.suppressHexBatchRebuild) {
            var _this$hexAnimCooldown;
            // 正在播放该格动画时，只改最终归属，不重复创建动画节点
            if (this.pendingAnimHexKeys.has(cell.key)) {
              this.hexFillBatchesDirty = true;
              return;
            }
            var nowSec = Date.now() * 0.001;
            var cooldownUntil = (_this$hexAnimCooldown = this.hexAnimCooldownUntilMap.get(cell.key)) != null ? _this$hexAnimCooldown : 0;
            var canPlayAnim = nowSec >= cooldownUntil && this.activeHexCaptureAnimCount < GameView.MAX_HEX_CAPTURE_ANIM_CONCURRENT;
            if (canPlayAnim) {
              this.hexAnimCooldownUntilMap.set(cell.key, nowSec + GameView.HEX_CAPTURE_ANIM_COOLDOWN_SEC);
              this.pendingAnimHexKeys.add(cell.key);
              this.rebuildHexFillBatches();
              this.playHexCapturePopAnim(cell, camp);
              return;
            }

            // 冷却中或并发过高：直接走批量刷新，不播缩放动画
            this.pendingAnimHexKeys["delete"](cell.key);
            this.hexFillBatchesDirty = true;
          } else {
            this.pendingAnimHexKeys["delete"](cell.key);
            if (!this.suppressHexBatchRebuild) {
              this.hexFillBatchesDirty = true;
            }
          }
        };
        _proto.getHexCellKey = function getHexCellKey(row, col) {
          return row + "_" + col;
        };
        _proto.ensureAreaCircleLayer = function ensureAreaCircleLayer() {
          if (this.areaCircleLayer && this.areaCircleLayer.isValid) {
            return;
          }
          this.areaCircleLayer = new Node('AreaCircleLayer');
          var uiTransform = this.areaCircleLayer.addComponent(UITransform);
          var mapTransform = this.gridMapParent.getComponent(UITransform);
          if (mapTransform) {
            uiTransform.setContentSize(mapTransform.width, mapTransform.height);
          }
          this.gridMapParent.addChild(this.areaCircleLayer);
          this.areaCircleLayer.setSiblingIndex(this.gridMapParent.children.length - 1);
        };
        _proto.drawAreaCircle = function drawAreaCircle(center, radius, camp) {
          var circleNode = new Node("AreaCircle_" + camp);
          circleNode.setPosition(center);
          this.areaCircleLayer.addChild(circleNode);
          var graphics = circleNode.addComponent(Graphics);
          graphics.strokeColor = Color.BLACK;
          graphics.lineWidth = this.config.map.areaCircleLineWidth;
          graphics.circle(0, 0, radius);
          graphics.stroke();
        };
        _proto.paintHexCellsInCircle = function paintHexCellsInCircle(center, radius, camp) {
          var _this6 = this;
          // 覆盖判定采用“圆与六边形相交”近似：给圆半径加一个格子半径余量，
          // 避免仅按格子中心点判定时漏掉边缘格子。
          var overlapRadius = radius + this.config.map.hexRadius;
          var radiusSqr = overlapRadius * overlapRadius;
          this.hexCells.forEach(function (cell) {
            var pos = cell.node.getPosition();
            var dx = pos.x - center.x;
            var dy = pos.y - center.y;
            var distSqr = dx * dx + dy * dy;
            if (distSqr <= radiusSqr) {
              // 领地批量涂抹无需每格动画，避免大量临时节点并减少重复重建
              _this6.setHexCellCamp(cell, camp, false);
            }
          });
          if (!this.suppressHexBatchRebuild) {
            this.hexFillBatchesDirty = true;
          }
        };
        _proto.clearFarmTerritoryIfLocked = function clearFarmTerritoryIfLocked() {
          if (this.allyEconomy.farmLevel <= 0 && this.我方农场) {
            var center = this.convertWorldToMapLocal(this.我方农场.getWorldPosition(new Vec3()));
            this.paintHexCellsInCircle(center, this.config.map.farmCoverRadius, HexCampState.Neutral);
          }
          if (this.enemyEconomy.farmLevel <= 0 && this.敌方农场) {
            var _center = this.convertWorldToMapLocal(this.敌方农场.getWorldPosition(new Vec3()));
            this.paintHexCellsInCircle(_center, this.config.map.farmCoverRadius, HexCampState.Neutral);
          }
        };
        _proto.convertWorldToMapLocal = function convertWorldToMapLocal(worldPos) {
          var mapTransform = this.gridMapParent.getComponent(UITransform);
          if (!mapTransform) {
            return worldPos.clone();
          }
          return mapTransform.convertToNodeSpaceAR(worldPos);
        }

        /**
         * 初始化兵营系统（点击升级/解锁、需求文案）
         */;
        _proto.initBarracksSystem = function initBarracksSystem() {
          this.stopAllBarracksUpgradeLightBreath();
          this.allyBarracksLevels = [0, 0, 0];
          this.enemyBarracksLevels = [0, 0, 0];
          this.barracksRuntime.clear();
          this.clearBarracksCountDownNodes();
          var allyBarracks = this.getAllyBarracksNodes();
          for (var i = 0; i < allyBarracks.length; i++) {
            var node = allyBarracks[i];
            if (!node) continue;
            var data = {
              node: node,
              originalCamp: HexCampState.Ally,
              ownerCamp: HexCampState.Ally,
              level: 0,
              hp: this.getBarracksHpByLevel(0),
              slotIndex: i
            };
            this.barracksRuntime.set(node, data);
            node.on(Node.EventType.TOUCH_END, this.onAllyBarracksClick, this);
            this.refreshBarracksUpgradeView(node, this.allyBarracksLevels[i]);
            this.refreshBarracksVisualByOwner(data);
            this.refreshBarracksLevelSprite(data);
            this.updateBarracksCountDown(data);
          }
          var enemyBarracks = this.getEnemyBarracksNodes();
          for (var _i = 0; _i < enemyBarracks.length; _i++) {
            var _node = enemyBarracks[_i];
            if (!_node) continue;
            var _data = {
              node: _node,
              originalCamp: HexCampState.Enemy,
              ownerCamp: HexCampState.Enemy,
              level: 0,
              hp: this.getBarracksHpByLevel(0),
              slotIndex: _i
            };
            this.barracksRuntime.set(_node, _data);
            this.refreshBarracksUpgradeView(enemyBarracks[_i], this.enemyBarracksLevels[_i]);
            this.refreshBarracksVisualByOwner(_data);
            this.refreshBarracksLevelSprite(_data);
            this.updateBarracksCountDown(_data);
          }
          this.refreshAllBarracksUpgradeLights();
        };
        _proto.clearBarracksListeners = function clearBarracksListeners() {
          var allyBarracks = this.getAllyBarracksNodes();
          for (var i = 0; i < allyBarracks.length; i++) {
            var node = allyBarracks[i];
            if (!node) continue;
            node.off(Node.EventType.TOUCH_END, this.onAllyBarracksClick, this);
          }
        };
        _proto.getAllyBarracksNodes = function getAllyBarracksNodes() {
          return [this.我方兵营1, this.我方兵营2, this.我方兵营3];
        };
        _proto.getEnemyBarracksNodes = function getEnemyBarracksNodes() {
          return [this.敌方兵营1, this.敌方兵营2, this.敌方兵营3];
        };
        _proto.onAllyBarracksClick = function onAllyBarracksClick(event) {
          var clickedNode = event == null ? void 0 : event.target;
          if (!clickedNode) return;
          GC.audio.playSound(AudioPath.click);
          this.playBuildingClickEffect(this.getTouchWorldPos(event, clickedNode));
          var data = this.barracksRuntime.get(clickedNode);
          if (data && data.ownerCamp !== HexCampState.Ally) {
            this.showResourceGainFloat(clickedNode, '已被敌方占领');
            return;
          }
          var allyBarracks = this.getAllyBarracksNodes();
          var index = allyBarracks.findIndex(function (node) {
            return node === clickedNode;
          });
          if (index < 0) return;
          var result = this.tryUpgradeBarracks(index, true, true);
          if (!result.success) {
            this.playAllyResourceInsufficientSound(result.message);
            this.showResourceGainFloat(clickedNode, result.message);
          }
        };
        _proto.tryUpgradeBarracks = function tryUpgradeBarracks(index, isAlly, fromPlayerClick) {
          if (fromPlayerClick === void 0) {
            fromPlayerClick = false;
          }
          var runtime = isAlly ? this.allyEconomy : this.enemyEconomy;
          var barracksLevels = isAlly ? this.allyBarracksLevels : this.enemyBarracksLevels;
          var barracksNodes = isAlly ? this.getAllyBarracksNodes() : this.getEnemyBarracksNodes();
          var node = barracksNodes[index];
          if (!node) {
            return {
              success: false
            };
          }
          var data = this.barracksRuntime.get(node);
          if (!data) {
            return {
              success: false
            };
          }
          var camp = isAlly ? HexCampState.Ally : HexCampState.Enemy;
          if (data.ownerCamp !== camp) {
            return {
              success: false,
              message: '该兵营不属于我方'
            };
          }
          var currentLevel = data.level;
          var maxLevel = this.config.economy.barracks.maxLevel;
          if (currentLevel >= maxLevel) {
            return {
              success: false,
              message: '当前兵营已满级'
            };
          }
          var targetLevel = currentLevel + 1;
          var cost = this.getBarracksUpgradeCost(targetLevel);
          if (!cost) {
            return {
              success: false
            };
          }
          if (runtime.population < cost.population) {
            return {
              success: false,
              message: '人口不足'
            };
          }
          if (runtime.food < cost.food) {
            return {
              success: false,
              message: '粮草不足'
            };
          }
          runtime.population -= cost.population;
          runtime.food -= cost.food;
          barracksLevels[index] = targetLevel;
          data.level = targetLevel;
          data.hp = this.getBarracksHpByLevel(targetLevel);
          // 升级后按新等级的更短间隔重新计时
          this.barracksNextSpawnAt.set(node, Date.now() / 1000 + this.getBarracksSpawnInterval(targetLevel, camp));
          this.refreshEconomyLabels();
          this.refreshBarracksUpgradeView(node, targetLevel);
          this.updateBarracksCountDown(data);
          this.refreshBarracksLevelSprite(data);
          this.refreshBarracksVisualByOwner(data);
          this.playUpgradeEffect(node);
          GC.audio.playSound(AudioPath.升级);
          if (targetLevel === 1) {
            this.applyBarracksTerritory(node, camp);
          }
          if (targetLevel === 1) {
            this.showHintTextFloat(node, '解锁成功');
          } else {
            this.showUpgradeSuccessImageFloat(node);
          }
          if (fromPlayerClick && isAlly) {
            var upNeed = node.getChildByName('upNeedNode');
            if (upNeed != null && upNeed.active) {
              this.playAllyUpNeedNodeIntroPop(upNeed);
            }
          }
          return {
            success: true
          };
        };
        _proto.getBarracksUpgradeCost = function getBarracksUpgradeCost(targetLevel) {
          return this.config.economy.barracks.upgradeCostByTargetLevel[targetLevel - 1];
        };
        _proto.applyBarracksTerritory = function applyBarracksTerritory(node, camp) {
          var center = this.convertWorldToMapLocal(node.getWorldPosition(new Vec3()));
          this.paintHexCellsInCircle(center, this.config.map.barracksCoverRadius, camp);
        };
        _proto.drawBarracksRangeCircle = function drawBarracksRangeCircle(barracksNode, camp) {
          if (!barracksNode) return;
          var key = barracksNode.uuid;
          var oldNode = this.barracksCircleNodes.get(key);
          if (oldNode && oldNode.isValid) {
            oldNode.destroy();
          }
          this.ensureAreaCircleLayer();
          var center = this.convertWorldToMapLocal(barracksNode.getWorldPosition(new Vec3()));
          var circleNode = new Node("BarracksCircle_" + key);
          circleNode.setPosition(center);
          this.areaCircleLayer.addChild(circleNode);
          var graphics = circleNode.addComponent(Graphics);
          graphics.strokeColor = this.config.map.campColors[camp];
          graphics.lineWidth = this.config.map.areaCircleLineWidth;
          graphics.circle(0, 0, this.config.map.barracksCoverRadius);
          graphics.stroke();
          this.barracksCircleNodes.set(key, circleNode);
        };
        _proto.clearBarracksRangeCircles = function clearBarracksRangeCircles() {
          this.barracksCircleNodes.forEach(function (node) {
            if (node && node.isValid) {
              node.destroy();
            }
          });
          this.barracksCircleNodes.clear();
        };
        _proto.clearBarracksCountDownNodes = function clearBarracksCountDownNodes() {
          this.barracksCountDownMap.forEach(function (comp) {
            if (comp != null && comp.node && comp.node.isValid) {
              comp.node.destroy();
            }
          });
          this.barracksCountDownMap.clear();
        };
        _proto.ensureBarracksCountDownComp = function ensureBarracksCountDownComp(barracksNode) {
          if (!barracksNode || !this.countDownPrefab) return null;
          var cached = this.barracksCountDownMap.get(barracksNode);
          if (cached != null && cached.node && cached.node.isValid) {
            return cached;
          }
          var node = instantiate(this.countDownPrefab);
          node.name = 'BarracksCountDown';
          barracksNode.addChild(node);
          node.setPosition(30, -30, 0);
          node.setSiblingIndex(barracksNode.children.length - 1);
          var comp = node.getComponent(CountDown) || node.addComponent(CountDown);
          this.barracksCountDownMap.set(barracksNode, comp);
          return comp;
        };
        _proto.updateBarracksCountDown = function updateBarracksCountDown(data) {
          var _this$barracksNextSpa;
          if (!(data != null && data.node)) return;
          var comp = this.ensureBarracksCountDownComp(data.node);
          if (!comp) return;
          if (data.level <= 0 || this.isGameOver) {
            comp.hide();
            return;
          }
          var interval = this.getBarracksSpawnInterval(data.level, data.ownerCamp);
          var nextSpawnAt = (_this$barracksNextSpa = this.barracksNextSpawnAt.get(data.node)) != null ? _this$barracksNextSpa : 0;
          if (nextSpawnAt <= 0) {
            comp.hide();
            return;
          }
          comp.showCountDown(interval, nextSpawnAt);
        };
        _proto.refreshBarracksVisualByOwner = function refreshBarracksVisualByOwner(data) {
          if (!(data != null && data.node)) return;
          var barracksSprite = this.findBarracksMainSprite(data.node);
          if (!barracksSprite) return;
          var level = Math.max(0, Math.min(3, Math.floor(data.level || 0)));
          var isAllyOwner = data.ownerCamp === HexCampState.Ally;
          var spritePath;
          if (level >= 2) {
            spritePath = isAllyOwner ? 'game/images/build/我方兵营2' : 'game/images/build/敌方兵营2';
          } else {
            spritePath = isAllyOwner ? 'game/images/build/我方兵营' : 'game/images/build/敌方兵营';
          }
          this.setSprite(barracksSprite, spritePath);
          var scaleNode = barracksSprite.node;
          var s = level > 2 ? 1.2 : 1;
          scaleNode.setScale(s, s, 1);
        };
        _proto.findBarracksMainSprite = function findBarracksMainSprite(barracksNode) {
          if (!barracksNode) return null;
          var selfSprite = barracksNode.getComponent(Sprite);
          if (selfSprite) return selfSprite;
          var queue = [].concat(barracksNode.children);
          while (queue.length > 0) {
            var cur = queue.shift();
            if (!cur || cur.name === 'upNeedNode') continue;
            var sprite = cur.getComponent(Sprite);
            if (sprite) return sprite;
            if (cur.children.length > 0) {
              queue.push.apply(queue, cur.children);
            }
          }
          return null;
        };
        _proto.refreshBarracksUpgradeView = function refreshBarracksUpgradeView(barracksNode, level) {
          var _upNeedNode$getChildB, _upNeedNode$getChildB2;
          if (!barracksNode) return;
          var upNeedNode = barracksNode.getChildByName('upNeedNode');
          if (!upNeedNode) return;
          var isAllyBarracks = this.getAllyBarracksNodes().indexOf(barracksNode) >= 0;
          var runtimeData = this.barracksRuntime.get(barracksNode);
          if (isAllyBarracks && runtimeData && runtimeData.ownerCamp !== HexCampState.Ally) {
            this.refreshUpgradeUpFlag(upNeedNode, false);
            upNeedNode.active = false;
            return;
          }
          var maxLevel = this.config.economy.barracks.maxLevel;
          if (level >= maxLevel) {
            this.refreshUpgradeUpFlag(upNeedNode, false);
            upNeedNode.active = false;
            return;
          }
          upNeedNode.active = true;
          var targetLevel = level + 1;
          var cost = this.getBarracksUpgradeCost(targetLevel);
          if (!cost) return;
          var populationLabel = (_upNeedNode$getChildB = upNeedNode.getChildByName('人口数')) == null ? void 0 : _upNeedNode$getChildB.getComponent(Label);
          var foodLabel = (_upNeedNode$getChildB2 = upNeedNode.getChildByName('粮食数')) == null ? void 0 : _upNeedNode$getChildB2.getComponent(Label);
          var campEconomy = isAllyBarracks ? this.allyEconomy : this.enemyEconomy;
          var canAffordPopulation = campEconomy.population >= cost.population;
          var canAffordFood = campEconomy.food >= cost.food;
          if (populationLabel) {
            populationLabel.string = "" + cost.population;
            if (isAllyBarracks) {
              populationLabel.color = canAffordPopulation ? new Color(0, 255, 0, 255) : new Color(255, 0, 0, 255);
            }
          }
          if (foodLabel) {
            foodLabel.string = "" + cost.food;
            if (isAllyBarracks) {
              foodLabel.color = canAffordFood ? new Color(0, 255, 0, 255) : new Color(255, 0, 0, 255);
            }
          }
          this.refreshUpgradeUpFlag(upNeedNode, canAffordPopulation && canAffordFood);
        }

        /** 三方兵营 1/2/3 槽位：资源足够可升级时显示对应光效，否则隐藏并停掉呼吸 */;
        _proto.refreshAllBarracksUpgradeLights = function refreshAllBarracksUpgradeLights() {
          var allyNodes = this.getAllyBarracksNodes();
          var allyLights = [this.ourLight1, this.ourLight2, this.ourLight3];
          var enemyNodes = this.getEnemyBarracksNodes();
          var enemyLights = [this.enemyLight1, this.enemyLight2, this.enemyLight3];
          for (var i = 0; i < 3; i++) {
            var _this$allyBarracksLev, _this$enemyBarracksLe;
            this.syncBarracksUpgradeLight(allyNodes[i], allyLights[i], (_this$allyBarracksLev = this.allyBarracksLevels[i]) != null ? _this$allyBarracksLev : 0, HexCampState.Ally);
            this.syncBarracksUpgradeLight(enemyNodes[i], enemyLights[i], (_this$enemyBarracksLe = this.enemyBarracksLevels[i]) != null ? _this$enemyBarracksLe : 0, HexCampState.Enemy);
          }
        };
        _proto.syncBarracksUpgradeLight = function syncBarracksUpgradeLight(barracksNode, lightRoot, trackedLevel, expectedOwner) {
          var _this7 = this,
            _data$level,
            _b$upgradeLightScaleW;
          if (!lightRoot || !lightRoot.isValid) return;
          var hideLight = function hideLight() {
            var op = lightRoot.getComponent(UIOpacity) || lightRoot.addComponent(UIOpacity);
            Tween.stopAllByTarget(op);
            var base = _this7.barracksUpgradeLightBaseScale.get(lightRoot.uuid);
            if (base) {
              lightRoot.setScale(base.x, base.y, base.z);
            }
            lightRoot.active = false;
            lightRoot['__lightBreath'] = false;
            op.opacity = 255;
          };
          if (!barracksNode || !barracksNode.isValid) {
            hideLight();
            return;
          }
          var data = this.barracksRuntime.get(barracksNode);
          var level = (_data$level = data == null ? void 0 : data.level) != null ? _data$level : trackedLevel;
          var maxLevel = this.config.economy.barracks.maxLevel;
          if (data && data.ownerCamp !== expectedOwner) {
            hideLight();
            return;
          }
          if (level >= maxLevel) {
            hideLight();
            return;
          }
          var targetLevel = level + 1;
          var cost = this.getBarracksUpgradeCost(targetLevel);
          if (!cost) {
            hideLight();
            return;
          }
          var economy = expectedOwner === HexCampState.Ally ? this.allyEconomy : this.enemyEconomy;
          var canAfford = economy.population >= cost.population && economy.food >= cost.food;
          if (!canAfford) {
            hideLight();
            return;
          }
          var b = this.config.economy.barracks;
          var texPath = level >= 2 ? b.upgradeLightSpritePathHigh : b.upgradeLightSpritePathLow;
          // 需求：我方 3 级（2->3 升级提示）光效不额外放大
          var extraScale = expectedOwner === HexCampState.Ally ? 1 : level >= 2 ? (_b$upgradeLightScaleW = b.upgradeLightScaleWhenUpgradingToMax) != null ? _b$upgradeLightScaleW : 1 : 1;
          if (!this.barracksUpgradeLightBaseScale.has(lightRoot.uuid)) {
            var s = lightRoot.scale;
            this.barracksUpgradeLightBaseScale.set(lightRoot.uuid, new Vec3(s.x, s.y, s.z));
          }
          var baseScale = this.barracksUpgradeLightBaseScale.get(lightRoot.uuid);
          lightRoot.setScale(baseScale.x * extraScale, baseScale.y * extraScale, baseScale.z);
          lightRoot.active = true;
          var sprite = this.findUpgradeLightSprite(lightRoot);
          if (sprite) {
            var last = lightRoot['_lastUpgradeLightTex'];
            if (last !== texPath) {
              lightRoot['_lastUpgradeLightTex'] = texPath;
              this.setSprite(sprite, texPath);
            }
          }
          this.startBarracksUpgradeLightBreath(lightRoot);
        };
        _proto.findUpgradeLightSprite = function findUpgradeLightSprite(root) {
          if (!root) return null;
          var self = root.getComponent(Sprite);
          if (self) return self;
          var queue = [].concat(root.children);
          while (queue.length > 0) {
            var cur = queue.shift();
            if (!cur) continue;
            var sp = cur.getComponent(Sprite);
            if (sp) return sp;
            if (cur.children.length > 0) {
              queue.push.apply(queue, cur.children);
            }
          }
          return null;
        };
        _proto.startBarracksUpgradeLightBreath = function startBarracksUpgradeLightBreath(lightRoot) {
          var _b$upgradeLightBreath,
            _b$upgradeLightOpacit,
            _b$upgradeLightOpacit2,
            _this8 = this;
          if (!lightRoot || !lightRoot.isValid) return;
          if (lightRoot['__lightBreath']) {
            return;
          }
          var b = this.config.economy.barracks;
          var half = (_b$upgradeLightBreath = b.upgradeLightBreathHalfPeriod) != null ? _b$upgradeLightBreath : 0.85;
          var omin = (_b$upgradeLightOpacit = b.upgradeLightOpacityMin) != null ? _b$upgradeLightOpacit : 72;
          var omax = (_b$upgradeLightOpacit2 = b.upgradeLightOpacityMax) != null ? _b$upgradeLightOpacit2 : 255;
          var op = lightRoot.getComponent(UIOpacity) || lightRoot.addComponent(UIOpacity);
          Tween.stopAllByTarget(op);
          lightRoot['__lightBreath'] = true;
          op.opacity = omin;
          tween(op).repeatForever(tween().to(half, {
            opacity: omax
          }, {
            easing: 'sineInOut'
          }).call(function () {
            return _this8.tryPlayBarracksUpgradeLightBlinkSound();
          }).to(half, {
            opacity: omin
          }, {
            easing: 'sineInOut'
          })).start();
        }

        /** 多座兵营光效同时呼吸时，限制「闪烁」音效最小间隔，避免叠音过密 */;
        _proto.tryPlayBarracksUpgradeLightBlinkSound = function tryPlayBarracksUpgradeLightBlinkSound() {
          if (this.isGameOver) return;
          var now = Date.now() * 0.001;
          if (now - this.lastBarracksUpgradeBlinkSoundTime < 0.12) return;
          this.lastBarracksUpgradeBlinkSoundTime = now;
          GC.audio.playSound(AudioPath.闪烁);
        };
        _proto.stopAllBarracksUpgradeLightBreath = function stopAllBarracksUpgradeLightBreath() {
          var lights = [this.ourLight1, this.ourLight2, this.ourLight3, this.enemyLight1, this.enemyLight2, this.enemyLight3];
          for (var i = 0; i < lights.length; i++) {
            var n = lights[i];
            if (!n || !n.isValid) continue;
            var op = n.getComponent(UIOpacity);
            if (op) {
              Tween.stopAllByTarget(op);
            }
            n['__lightBreath'] = false;
          }
        };
        _proto.tryEnemyAutoUnlockBarracks = function tryEnemyAutoUnlockBarracks() {
          var enemyBarracks = this.getEnemyBarracksNodes();
          var candidateIndexes = [];
          for (var i = 0; i < enemyBarracks.length; i++) {
            var level = this.enemyBarracksLevels[i];
            if (level < this.config.economy.barracks.maxLevel) {
              var cost = this.getBarracksUpgradeCost(level + 1);
              if (cost && this.enemyEconomy.population >= cost.population && this.enemyEconomy.food >= cost.food) {
                candidateIndexes.push(i);
              }
            }
          }
          if (candidateIndexes.length === 0) return;
          var randomIdx = Math.floor(Math.random() * candidateIndexes.length);
          var barracksIndex = candidateIndexes[randomIdx];
          var result = this.tryUpgradeBarracks(barracksIndex, false);
          if (result.success) ;
        };
        _proto.initBattleSystem = function initBattleSystem() {
          this.stopBattleSystem();
          this.stopAllyBaseWarningEffect();
          this.isGameOver = false;
          this.allyBaseHp = this.config.battle.baseHp;
          this.enemyBaseHp = this.config.battle.baseHp;
          this.ensureSoldierLayer();
          this.soldierSpaceScreenCenterYCached = false;
          this.enemyFirstGaspAtScreenCenterPlayed = false;
          this.allyBaseUnderAttackWarningPlayedOnce = false;
          this.lastBarracksUpgradeBlinkSoundTime = -999;
          this.barracksNextSpawnAt.clear();
          this.schedule(this.onSpawnTick, this.config.battle.spawnCheckInterval);
        };
        _proto.stopBattleSystem = function stopBattleSystem() {
          this.unschedule(this.onSpawnTick);
          this.barracksNextSpawnAt.clear();
          this.barracksCountDownMap.forEach(function (comp) {
            return comp == null ? void 0 : comp.hide();
          });
          for (var i = 0; i < this.soldierList.length; i++) {
            var soldier = this.soldierList[i];
            if (soldier.node && soldier.node.isValid) {
              this.recycleSoldierNode(soldier.node, soldier.camp);
            }
          }
          this.soldierList.length = 0;
        };
        _proto.ensureSoldierLayer = function ensureSoldierLayer() {
          if (!this.soldierLayer || !this.soldierLayer.isValid) {
            this.soldierLayer = new Node('SoldierLayer');
            this.node.addChild(this.soldierLayer);
          }
          this.soldierLayer.setPosition(0, 0, 0);

          // 建筑层级高于士兵层
          var buildParent = this.node.getChildByName('buildParent');
          if (buildParent) {
            var idx = Math.max(0, buildParent.getSiblingIndex() - 1);
            this.soldierLayer.setSiblingIndex(idx);
          }
        };
        _proto.spawnWaveByCamp = function spawnWaveByCamp(camp) {
          // 箭头队形：
          // 1个中间最前；左右两侧低30；最外两侧再低30
          var formation = [new Vec3(0, 30, 0), new Vec3(-30, 15, 0), new Vec3(30, 15, 0), new Vec3(-60, 0, 0), new Vec3(60, 0, 0)];
          var now = Date.now() / 1000;
          var barracksList = Array.from(this.barracksRuntime.values()).filter(function (data) {
            return data.ownerCamp === camp && data.level > 0;
          });
          var spawnCount = Math.min(this.config.battle.spawnCountPerWave, formation.length);
          for (var i = 0; i < barracksList.length; i++) {
            var _this$barracksNextSpa2;
            var data = barracksList[i];
            var nextSpawnAt = (_this$barracksNextSpa2 = this.barracksNextSpawnAt.get(data.node)) != null ? _this$barracksNextSpa2 : 0;
            if (now < nextSpawnAt) {
              continue;
            }
            var centerWorld = data.node.getWorldPosition(new Vec3());
            var parentTransform = this.node.getComponent(UITransform) || this.node.addComponent(UITransform);
            var centerLocal = parentTransform.convertToNodeSpaceAR(centerWorld);
            var campSpawnYOffset = camp === HexCampState.Ally ? 50 : -50;
            for (var j = 0; j < spawnCount; j++) {
              var p = formation[j];
              var offsetY = camp === HexCampState.Ally ? p.y : -p.y;
              var spawnPos = new Vec3(centerLocal.x + p.x, centerLocal.y + offsetY + campSpawnYOffset, 0);
              this.spawnSingleSoldier(camp, data.level, spawnPos, centerLocal.x, data.slotIndex, data.ownerCamp !== data.originalCamp);
            }
            this.barracksNextSpawnAt.set(data.node, now + this.getBarracksSpawnInterval(data.level, camp));
            this.updateBarracksCountDown(data);
          }
        };
        _proto.getBarracksSpawnInterval = function getBarracksSpawnInterval(level, ownerCamp) {
          var _ref, _arr$idx;
          var arr = this.config.battle.spawnIntervalByBarracksLevel;
          var idx = Math.max(0, Math.min(level - 1, arr.length - 1));
          var t = (_ref = (_arr$idx = arr[idx]) != null ? _arr$idx : arr[0]) != null ? _ref : 1.5;
          var mult = this.getAllyBarracksFastMultiplier(level, ownerCamp);
          if (mult > 1) {
            t /= mult;
          }
          return t;
        };
        _proto.spawnSingleSoldier = function spawnSingleSoldier(camp, level, localPos, laneX, laneSlot, fromCapturedBarracks) {
          var node = this.acquireSoldierNode(camp);
          if (!node) return;
          this.ensureSoldierLayer();
          this.soldierLayer.addChild(node);
          node.setPosition(localPos);
          if (camp === HexCampState.Ally) {
            var comp = node.getComponent(OurSoldier) || node.addComponent(OurSoldier);
            comp.playMoveAnim();
          } else {
            var _comp = node.getComponent(EnemySoldier) || node.addComponent(EnemySoldier);
            _comp.playMoveAnim();
          }
          var speed = this.getSoldierSpeed(level, camp);
          this.soldierList.push({
            node: node,
            camp: camp,
            speed: speed,
            level: level,
            laneX: laneX,
            laneSlot: laneSlot,
            fromCapturedBarracks: fromCapturedBarracks,
            alive: true
          });
        };
        _proto.ensureSoldierPoolHolder = function ensureSoldierPoolHolder() {
          if (!this.soldierPoolHolder || !this.soldierPoolHolder.isValid) {
            this.soldierPoolHolder = new Node('SoldierPoolHolder');
            this.soldierPoolHolder.active = false;
            this.node.addChild(this.soldierPoolHolder);
          }
        };
        _proto.acquireSoldierNode = function acquireSoldierNode(camp) {
          var prefab = camp === HexCampState.Ally ? this.ourSoldierPrefab : this.enemySoldierPrefab;
          if (!prefab) return null;
          var pool = camp === HexCampState.Ally ? this.ourSoldierPool : this.enemySoldierPool;
          var reused = pool.pop();
          if (reused != null && reused.isValid) {
            reused.removeFromParent();
            reused.active = true;
            return reused;
          }
          return instantiate(prefab);
        };
        _proto.recycleSoldierNode = function recycleSoldierNode(node, camp) {
          if (!(node != null && node.isValid)) return;
          Tween.stopAllByTarget(node);
          var comp = camp === HexCampState.Ally ? node.getComponent(OurSoldier) : node.getComponent(EnemySoldier);
          var sp = (comp == null ? void 0 : comp.soldierSprite) || node.getComponent(Sprite);
          if (sp) {
            SpriteFrameManager.instance.stopAnimation(sp);
          }
          node.removeFromParent();
          node.active = false;
          var s = node.getScale();
          node.setScale(1, s.y, s.z);
          var pool = camp === HexCampState.Ally ? this.ourSoldierPool : this.enemySoldierPool;
          if (pool.length >= GameView.MAX_SOLDIER_POOL_PER_CAMP) {
            node.destroy();
            return;
          }
          this.ensureSoldierPoolHolder();
          this.soldierPoolHolder.addChild(node);
          pool.push(node);
        };
        _proto.clearSoldierPools = function clearSoldierPools() {
          var _this$soldierPoolHold;
          var stopAndDestroy = function stopAndDestroy(n) {
            if (!(n != null && n.isValid)) return;
            Tween.stopAllByTarget(n);
            var comp = n.getComponent(OurSoldier) || n.getComponent(EnemySoldier);
            var sp = (comp == null ? void 0 : comp.soldierSprite) || n.getComponent(Sprite);
            if (sp) {
              SpriteFrameManager.instance.stopAnimation(sp);
            }
            n.destroy();
          };
          for (var i = 0; i < this.ourSoldierPool.length; i++) {
            stopAndDestroy(this.ourSoldierPool[i]);
          }
          this.ourSoldierPool.length = 0;
          for (var _i2 = 0; _i2 < this.enemySoldierPool.length; _i2++) {
            stopAndDestroy(this.enemySoldierPool[_i2]);
          }
          this.enemySoldierPool.length = 0;
          if ((_this$soldierPoolHold = this.soldierPoolHolder) != null && _this$soldierPoolHold.isValid) {
            this.soldierPoolHolder.destroy();
            this.soldierPoolHolder = null;
          }
        };
        _proto.getSoldierSpeed = function getSoldierSpeed(level, soldierCamp) {
          var idx = Math.max(0, Math.min(level - 1, this.config.battle.soldierSpeedByLevel.length - 1));
          var v = this.config.battle.soldierSpeedByLevel[idx] || this.config.battle.soldierSpeedByLevel[0];
          var mult = this.getAllyBarracksFastMultiplier(level, soldierCamp);
          if (mult > 1) {
            v *= mult;
          }
          return v;
        }

        /** 我方兵营达到配置等级后，返回加速倍率；敌方恒为 1 */;
        _proto.getAllyBarracksFastMultiplier = function getAllyBarracksFastMultiplier(barracksLevel, ownerCamp) {
          var _b$allyBarracksFastTi, _b$allyBarracksFastMu;
          if (ownerCamp !== HexCampState.Ally) return 1;
          var b = this.config.battle;
          var threshold = (_b$allyBarracksFastTi = b.allyBarracksFastTierThreshold) != null ? _b$allyBarracksFastTi : 2;
          var mult = (_b$allyBarracksFastMu = b.allyBarracksFastMultiplier) != null ? _b$allyBarracksFastMu : 1;
          if (barracksLevel >= threshold && mult > 1) {
            return mult;
          }
          return 1;
        };
        _proto.updateSoldiers = function updateSoldiers(deltaTime) {
          if (this.isGameOver) return;
          if (this.soldierList.length === 0) return;
          for (var i = 0; i < this.soldierList.length; i++) {
            var soldier = this.soldierList[i];
            if (!soldier.alive || !soldier.node || !soldier.node.isValid) continue;
            var cur = soldier.node.getPosition();
            var nextPos = void 0;
            if (soldier.fromCapturedBarracks) {
              // 被占领兵营创建的士兵：跳过敌方兵营，直接优先寻找农场/大本营
              var targetBuilding = this.findNearestEnemyBuildingPosition(soldier, true);
              if (targetBuilding) {
                var dir = targetBuilding.clone().subtract(cur);
                if (dir.lengthSqr() > 0.0001) {
                  dir.normalize();
                }
                nextPos = new Vec3(cur.x + dir.x * soldier.speed * deltaTime, cur.y + dir.y * soldier.speed * deltaTime, 0);
              } else {
                var yDir = soldier.camp === HexCampState.Ally ? 1 : -1;
                nextPos = new Vec3(cur.x, cur.y + yDir * soldier.speed * deltaTime, 0);
              }
            } else {
              // 常规行军：保持阵型沿Y前进
              var _yDir = soldier.camp === HexCampState.Ally ? 1 : -1;
              nextPos = new Vec3(cur.x, cur.y + _yDir * soldier.speed * deltaTime, 0);
            }
            if (this.shouldDespawnAtCapturedLaneBarracks(soldier, nextPos)) {
              soldier.alive = false;
              continue;
            }
            this.updateSoldierFacingByMove(soldier.node, cur, nextPos);
            this.tryPlayEnemyGaspAtScreenCenterY(soldier, cur, nextPos);
            soldier.node.setPosition(nextPos);
            this.captureHexBySoldier(nextPos, soldier.camp);
          }
          this.processSoldierVsSoldierCollision();
          this.processSoldierVsBuildingCollision();
          this.cleanupDeadSoldiers();
          this.refreshSoldierRenderOrderByY();
        };
        _proto.updateSoldierFacingByMove = function updateSoldierFacingByMove(soldierNode, curPos, nextPos) {
          if (!soldierNode || !curPos || !nextPos) return;
          var deltaX = nextPos.x - curPos.x;
          var targetScaleX = deltaX < -0.001 ? -1 : 1;
          var scale = soldierNode.getScale();
          if (scale.x === targetScaleX) return;
          soldierNode.setScale(targetScaleX, scale.y, scale.z);
        }

        /** 将屏幕几何中心转为士兵层本地坐标的 y（用于「越过屏幕垂直中线」判断） */;
        _proto.getSoldierSpaceScreenCenterY = function getSoldierSpaceScreenCenterY() {
          if (this.soldierSpaceScreenCenterYCached) {
            return this.soldierSpaceScreenCenterY;
          }
          var y = 0;
          var layer = this.soldierLayer;
          if (layer != null && layer.isValid) {
            var ui = layer.getComponent(UITransform);
            var scene = this.node.scene;
            if (ui && scene) {
              var cam = null;
              var list = scene.getComponentsInChildren(Camera);
              for (var i = 0; i < list.length; i++) {
                if (list[i].enabled) {
                  cam = list[i];
                  break;
                }
              }
              if (cam) {
                var vs = view.getVisibleSize();
                var world = new Vec3();
                cam.screenToWorld(new Vec3(vs.width * 0.5, vs.height * 0.5, 0), world);
                var local = ui.convertToNodeSpaceAR(world);
                y = local.y;
              }
            }
          }
          this.soldierSpaceScreenCenterY = y;
          this.soldierSpaceScreenCenterYCached = true;
          return y;
        }

        /** 全局仅一次：第一个在移动轨迹上越过屏幕 y 中线的敌方士兵播放「倒吸凉气」 */;
        _proto.tryPlayEnemyGaspAtScreenCenterY = function tryPlayEnemyGaspAtScreenCenterY(soldier, cur, nextPos) {
          if (soldier.camp !== HexCampState.Enemy || this.enemyFirstGaspAtScreenCenterPlayed) {
            return;
          }
          var cy = this.getSoldierSpaceScreenCenterY();
          var dy0 = cur.y - cy;
          var dy1 = nextPos.y - cy;
          if (dy0 * dy1 <= 0) {
            this.enemyFirstGaspAtScreenCenterPlayed = true;
            GC.audio.playSound(AudioPath.倒吸凉气);
          }
        };
        _proto.refreshSoldierRenderOrderByY = function refreshSoldierRenderOrderByY() {
          var _this9 = this;
          if (!this.soldierLayer || !this.soldierLayer.isValid) return;
          var aliveNodes = this.soldierList.filter(function (s) {
            return s.alive && s.node && s.node.isValid && s.node.parent === _this9.soldierLayer;
          }).map(function (s) {
            return s.node;
          });

          // y 越高越靠后（siblingIndex 越小）
          aliveNodes.sort(function (a, b) {
            return b.position.y - a.position.y;
          });
          for (var i = 0; i < aliveNodes.length; i++) {
            aliveNodes[i].setSiblingIndex(i);
          }
        }

        /**
         * @param excludeEnemyBarracks 为 true 时不把敌方兵营纳入候选（用于被占领兵营出兵）
         */;
        _proto.findNearestEnemyBuildingPosition = function findNearestEnemyBuildingPosition(soldier, excludeEnemyBarracks) {
          var _this10 = this;
          if (excludeEnemyBarracks === void 0) {
            excludeEnemyBarracks = false;
          }
          var enemyCamp = soldier.camp === HexCampState.Ally ? HexCampState.Enemy : HexCampState.Ally;
          var cur = soldier.node.getPosition();
          var minSqr = Number.MAX_VALUE;
          var nearest = null;
          if (!excludeEnemyBarracks) {
            this.barracksRuntime.forEach(function (b) {
              if (!b.node || !b.node.isValid) return;
              if (b.ownerCamp !== enemyCamp) return;
              if (b.hp <= 0) return;
              var p = _this10.convertWorldToGameLocal(b.node.getWorldPosition(new Vec3()));
              var dx = p.x - cur.x;
              var dy = p.y - cur.y;
              var d = dx * dx + dy * dy;
              if (d < minSqr) {
                minSqr = d;
                nearest = p;
              }
            });
          }
          var baseNode = enemyCamp === HexCampState.Ally ? this.我方大本营 : this.敌方大本营;
          var baseHp = enemyCamp === HexCampState.Ally ? this.allyBaseHp : this.enemyBaseHp;
          if (baseNode && baseHp > 0) {
            var p = this.convertWorldToGameLocal(baseNode.getWorldPosition(new Vec3()));
            var dx = p.x - cur.x;
            var dy = p.y - cur.y;
            var d = dx * dx + dy * dy;
            if (d < minSqr) {
              minSqr = d;
              nearest = p;
            }
          }
          var farmNode = enemyCamp === HexCampState.Ally ? this.我方农场 : this.敌方农场;
          var farmHp = enemyCamp === HexCampState.Ally ? this.allyFarmHp : this.enemyFarmHp;
          var farmLevel = enemyCamp === HexCampState.Ally ? this.allyEconomy.farmLevel : this.enemyEconomy.farmLevel;
          if (farmNode && farmHp > 0 && farmLevel > 0) {
            var samples = this.collectFarmHitSamplePositionsGameLocal(farmNode);
            for (var s = 0; s < samples.length; s++) {
              var _p = samples[s];
              var _dx = _p.x - cur.x;
              var _dy = _p.y - cur.y;
              var _d = _dx * _dx + _dy * _dy;
              if (_d < minSqr) {
                minSqr = _d;
                nearest = new Vec3(_p.x, _p.y, _p.z);
              }
            }
          }
          return nearest;
        };
        _proto.shouldDespawnAtCapturedLaneBarracks = function shouldDespawnAtCapturedLaneBarracks(soldier, nextPos) {
          // 被占领兵营自己创建的兵不走“到达占领兵营即销毁”规则
          if (soldier.fromCapturedBarracks) {
            return false;
          }
          var enemyOriginalCamp = soldier.camp === HexCampState.Ally ? HexCampState.Enemy : HexCampState.Ally;
          var capturedLaneBarracks = null;
          this.barracksRuntime.forEach(function (b) {
            if (capturedLaneBarracks) return;
            if (b.slotIndex !== soldier.laneSlot) return;
            if (b.originalCamp !== enemyOriginalCamp) return;
            if (b.ownerCamp !== soldier.camp) return;
            capturedLaneBarracks = b;
          });
          if (!capturedLaneBarracks || !capturedLaneBarracks.node || !capturedLaneBarracks.node.isValid) {
            return false;
          }
          var targetPos = this.convertWorldToGameLocal(capturedLaneBarracks.node.getWorldPosition(new Vec3()));
          var yDir = soldier.camp === HexCampState.Ally ? 1 : -1;
          if (yDir > 0) {
            return nextPos.y >= targetPos.y;
          }
          return nextPos.y <= targetPos.y;
        };
        _proto.processSoldierVsSoldierCollision = function processSoldierVsSoldierCollision() {
          var hitDist = this.config.battle.soldierCollisionRadius * 2;
          var hitSqr = hitDist * hitDist;
          for (var i = 0; i < this.soldierList.length; i++) {
            var a = this.soldierList[i];
            if (!a.alive || !a.node || !a.node.isValid) continue;
            var pa = a.node.getPosition();
            for (var j = i + 1; j < this.soldierList.length; j++) {
              var b = this.soldierList[j];
              if (!b.alive || !b.node || !b.node.isValid) continue;
              if (a.camp === b.camp) continue;
              var pb = b.node.getPosition();
              var dx = pa.x - pb.x;
              var dy = pa.y - pb.y;
              if (dx * dx + dy * dy <= hitSqr) {
                var aWorld = a.node.getWorldPosition(new Vec3());
                var bWorld = b.node.getWorldPosition(new Vec3());
                var random = Math.random();
                if (random < 0.2) {
                  GC.audio.playSound(AudioPath.死亡);
                }
                this.playSoldierDeathEffect(aWorld);
                this.playSoldierDeathEffect(bWorld);
                a.alive = false;
                b.alive = false;
                break;
              }
            }
          }
        };
        _proto.playSoldierDeathEffect = function playSoldierDeathEffect(worldPos) {
          if (!this.effectManager || !worldPos) return;
          this.effectManager.playEffect(worldPos, {
            type: EffectType.Click,
            resourcePath: 'game/images/seqPic/effect/死亡',
            fps: 24,
            loop: false,
            siblingIndex: 9999,
            parentNode: this.node,
            scale: 1
          });
          this.effectManager.playEffect(worldPos, {
            type: EffectType.Click,
            resourcePath: 'game/images/seqPic/effect/骷髅',
            fps: 36,
            loop: false,
            siblingIndex: 10000,
            parentNode: this.node,
            scale: 1.2
          });
        };
        _proto.processSoldierVsBuildingCollision = function processSoldierVsBuildingCollision() {
          var _this11 = this;
          var _loop = function _loop() {
              var soldier = _this11.soldierList[i];
              if (!soldier.alive || !soldier.node || !soldier.node.isValid) return 0; // continue
              var enemyCamp = soldier.camp === HexCampState.Ally ? HexCampState.Enemy : HexCampState.Ally;
              var pos = soldier.node.getPosition();
              if (_this11.checkHitFarm(pos, enemyCamp, soldier.camp)) {
                var worldPos = soldier.node.getWorldPosition(new Vec3());
                _this11.playSoldierDeathEffect(worldPos);
                soldier.alive = false;
                return 0; // continue
              }

              if (_this11.checkHitBase(pos, enemyCamp)) {
                var _worldPos = soldier.node.getWorldPosition(new Vec3());
                _this11.playSoldierDeathEffect(_worldPos);
                soldier.alive = false;
                return 0; // continue
              }

              var hitBarracks = false;
              _this11.barracksRuntime.forEach(function (b) {
                if (hitBarracks) return;
                if (!b.node || !b.node.isValid) return;
                if (b.ownerCamp !== enemyCamp) return;
                if (b.hp <= 0) return;
                var bPos = _this11.convertWorldToGameLocal(b.node.getWorldPosition(new Vec3()));
                var dx = pos.x - bPos.x;
                var dy = pos.y - bPos.y;
                var r = _this11.config.battle.soldierCollisionRadius + _this11.config.battle.barracksHitRadius;
                if (dx * dx + dy * dy <= r * r) {
                  var _worldPos2 = soldier.node.getWorldPosition(new Vec3());
                  _this11.playSoldierDeathEffect(_worldPos2);
                  b.hp -= _this11.config.battle.soldierDamageToBuilding;
                  soldier.alive = false;
                  hitBarracks = true;
                  if (b.hp <= 0) {
                    _this11.onBarracksCaptured(b, soldier.camp);
                  }
                }
              });
            },
            _ret;
          for (var i = 0; i < this.soldierList.length; i++) {
            _ret = _loop();
            if (_ret === 0) continue;
          }
        }

        /** 农场整块受击判定：父节点锚点 + 子地块 1~4 的世界坐标转游戏本地后的采样点 */;
        _proto.collectFarmHitSamplePositionsGameLocal = function collectFarmHitSamplePositionsGameLocal(farmNode) {
          var out = [];
          if (!(farmNode != null && farmNode.isValid)) return out;
          out.push(this.convertWorldToGameLocal(farmNode.getWorldPosition(new Vec3())));
          var fieldNameSet = new Set(['1', '2', '3', '4']);
          var children = farmNode.children;
          for (var i = 0; i < children.length; i++) {
            var ch = children[i];
            if (!(ch != null && ch.isValid) || !fieldNameSet.has(ch.name)) continue;
            out.push(this.convertWorldToGameLocal(ch.getWorldPosition(new Vec3())));
          }
          return out;
        };
        _proto.isSoldierNearAnyFarmSample = function isSoldierNearAnyFarmSample(soldierPos, samples, extraHitRadius) {
          var r = this.config.battle.soldierCollisionRadius + extraHitRadius;
          var rSqr = r * r;
          for (var i = 0; i < samples.length; i++) {
            var p = samples[i];
            var dx = soldierPos.x - p.x;
            var dy = soldierPos.y - p.y;
            if (dx * dx + dy * dy <= rSqr) return true;
          }
          return false;
        };
        _proto.checkHitFarm = function checkHitFarm(soldierPos, targetCamp, attackerCamp) {
          var farmNode = targetCamp === HexCampState.Ally ? this.我方农场 : this.敌方农场;
          if (!farmNode) return false;
          var farmLevel = targetCamp === HexCampState.Ally ? this.allyEconomy.farmLevel : this.enemyEconomy.farmLevel;
          var farmHp = targetCamp === HexCampState.Ally ? this.allyFarmHp : this.enemyFarmHp;
          if (farmLevel <= 0 || farmHp <= 0) return false;
          var samples = this.collectFarmHitSamplePositionsGameLocal(farmNode);
          if (!this.isSoldierNearAnyFarmSample(soldierPos, samples, this.config.battle.barracksHitRadius)) {
            return false;
          }
          if (targetCamp === HexCampState.Ally) {
            this.allyFarmHp -= this.config.battle.soldierDamageToBuilding;
            if (this.allyFarmHp <= 0) {
              this.onFarmDestroyed(HexCampState.Ally, attackerCamp);
            }
          } else {
            this.enemyFarmHp -= this.config.battle.soldierDamageToBuilding;
            if (this.enemyFarmHp <= 0) {
              this.onFarmDestroyed(HexCampState.Enemy, attackerCamp);
            }
          }
          return true;
        }

        /** 占领/摧毁后整块农田子节点统一显示（避免个别子节点被关闭导致半块地状态） */;
        _proto.ensureAllFarmFieldChildrenActive = function ensureAllFarmFieldChildrenActive(farmNode) {
          if (!(farmNode != null && farmNode.isValid)) return;
          var fieldNameSet = new Set(['1', '2', '3', '4']);
          var children = farmNode.children;
          for (var i = 0; i < children.length; i++) {
            var ch = children[i];
            if (ch && ch.isValid && fieldNameSet.has(ch.name)) {
              ch.active = true;
            }
          }
        };
        _proto.onFarmDestroyed = function onFarmDestroyed(camp, newOwner) {
          var farmNode = camp === HexCampState.Ally ? this.我方农场 : this.敌方农场;
          if (camp === HexCampState.Ally) {
            this.allyFarmHp = 0;
            this.allyEconomy.farmLevel = 0;
            this.isAllyFarmCaptured = newOwner !== HexCampState.Ally;
            this.ensureAllFarmFieldChildrenActive(this.我方农场);
            this.refreshFarmFieldSprites(this.我方农场, 0);
            this.refreshAllyFarmUpgradeNeedView();
          } else {
            this.enemyFarmHp = 0;
            this.enemyEconomy.farmLevel = 0;
            this.isEnemyFarmCaptured = newOwner !== HexCampState.Enemy;
            this.ensureAllFarmFieldChildrenActive(this.敌方农场);
            this.refreshFarmFieldSprites(this.敌方农场, 0);
          }
          if (farmNode) {
            var center = this.convertWorldToMapLocal(farmNode.getWorldPosition(new Vec3()));
            this.paintHexCellsInCircle(center, this.config.map.farmCoverRadius, newOwner);
          }
        };
        _proto.checkHitBase = function checkHitBase(soldierPos, targetCamp) {
          var baseNode = targetCamp === HexCampState.Ally ? this.我方大本营 : this.敌方大本营;
          if (!baseNode) return false;
          var basePos = this.convertWorldToGameLocal(baseNode.getWorldPosition(new Vec3()));
          var dx = soldierPos.x - basePos.x;
          var dy = soldierPos.y - basePos.y;
          var r = this.config.battle.soldierCollisionRadius + this.config.battle.baseHitRadius;
          if (dx * dx + dy * dy > r * r) {
            return false;
          }
          if (targetCamp === HexCampState.Ally) {
            this.playAllyBaseUnderAttackWarning();
            this.allyBaseHp -= this.config.battle.soldierDamageToBuilding;
            if (this.allyBaseHp <= 0) {
              this.endGame(false);
            }
          } else {
            this.enemyBaseHp -= this.config.battle.soldierDamageToBuilding;
            if (this.enemyBaseHp <= 0) {
              this.endGame(true);
            }
          }
          return true;
        }

        /** 停止大本营受击警告闪烁并隐藏节点 */;
        _proto.stopAllyBaseWarningEffect = function stopAllyBaseWarningEffect() {
          var n = this.warningNode;
          if (!n || !n.isValid) return;
          var op = n.getComponent(UIOpacity);
          Tween.stopAllByTarget(n);
          if (op) Tween.stopAllByTarget(op);
          n.active = false;
          if (op) op.opacity = 255;
        }

        /**
         * 敌方士兵击中我方大本营：本局仅第一次触发——显示警告节点，约 1s 内透明度闪烁，播放一次「警告」音效，随后隐藏。
         */;
        _proto.playAllyBaseUnderAttackWarning = function playAllyBaseUnderAttackWarning() {
          if (this.allyBaseUnderAttackWarningPlayedOnce || this.isGameOver) return;
          var n = this.warningNode;
          if (!(n != null && n.isValid)) return;
          this.allyBaseUnderAttackWarningPlayedOnce = true;
          var op = n.getComponent(UIOpacity) || n.addComponent(UIOpacity);
          Tween.stopAllByTarget(n);
          Tween.stopAllByTarget(op);
          n.active = true;
          op.opacity = 255;
          GC.audio.playSound(AudioPath.警告);
          tween(op).repeat(5, tween().to(0.1, {
            opacity: 55
          }, {
            easing: 'sineInOut'
          }).to(0.1, {
            opacity: 255
          }, {
            easing: 'sineInOut'
          })).call(function () {
            if (n.isValid) {
              n.active = false;
              op.opacity = 255;
            }
          }).start();
        };
        _proto.onBarracksCaptured = function onBarracksCaptured(data, newOwner) {
          data.ownerCamp = newOwner;
          data.level = 1;
          data.hp = this.getBarracksHpByLevel(1);
          this.barracksNextSpawnAt.set(data.node, Date.now() / 1000 + this.getBarracksSpawnInterval(1, newOwner));
          this.updateBarracksCountDown(data);
          var allyIdx = this.getAllyBarracksNodes().findIndex(function (n) {
            return n === data.node;
          });
          var enemyIdx = this.getEnemyBarracksNodes().findIndex(function (n) {
            return n === data.node;
          });
          if (allyIdx >= 0) {
            this.allyBarracksLevels[allyIdx] = newOwner === HexCampState.Ally ? 1 : 0;
          }
          if (enemyIdx >= 0) {
            this.enemyBarracksLevels[enemyIdx] = newOwner === HexCampState.Enemy ? 1 : 0;
          }
          this.refreshBarracksUpgradeView(data.node, data.level);
          this.refreshBarracksVisualByOwner(data);
          this.refreshBarracksLevelSprite(data);
          if (data.originalCamp === HexCampState.Ally && data.ownerCamp !== HexCampState.Ally) {
            var upNeedNode = data.node.getChildByName('upNeedNode');
            if (upNeedNode) {
              upNeedNode.active = false;
            }
          }
          this.applyBarracksTerritory(data.node, newOwner);
          // this.showResourceGainFloat(data.node, newOwner === HexCampState.Ally ? '我方占领兵营' : '敌方占领兵营');
          this.refreshAllBarracksUpgradeLights();
        };
        _proto.refreshBarracksLevelSprite = function refreshBarracksLevelSprite(data) {
          if (!(data != null && data.node)) return;
          var lvNode = data.node.getChildByName('lvSp');
          if (!lvNode || !lvNode.isValid) return;
          var lvSprite = lvNode.getComponent(Sprite);
          if (!lvSprite) return;
          var spritePath = this.getBarracksLevelSpritePath(data.ownerCamp, data.level);
          this.setSprite(lvSprite, spritePath);
        };
        _proto.getBarracksLevelSpritePath = function getBarracksLevelSpritePath(ownerCamp, level) {
          var lv = Math.max(0, Math.min(3, Math.floor(level || 0)));
          if (lv <= 0) {
            return 'game/images/lv/0';
          }
          var campPrefix = ownerCamp === HexCampState.Ally ? '蓝' : '红';
          return "game/images/lv/" + campPrefix + lv;
        };
        _proto.getBarracksHpByLevel = function getBarracksHpByLevel(level) {
          return this.config.battle.barracksBaseHp + level * this.config.battle.barracksHpPerLevel;
        };
        _proto.captureHexBySoldier = function captureHexBySoldier(localPosInGame, camp) {
          var mapLocal = this.convertGameLocalToMapLocal(localPosInGame);
          var nearest = null;
          var minSqr = Number.MAX_VALUE;
          this.hexCells.forEach(function (cell) {
            var p = cell.node.getPosition();
            var dx = p.x - mapLocal.x;
            var dy = p.y - mapLocal.y;
            var d = dx * dx + dy * dy;
            if (d < minSqr) {
              minSqr = d;
              nearest = cell;
            }
          });
          if (!nearest) return;
          if (minSqr <= this.config.map.hexRadius * this.config.map.hexRadius * 1.2) {
            this.setHexCellCamp(nearest, camp, true);
          }
        };
        _proto.cleanupDeadSoldiers = function cleanupDeadSoldiers() {
          for (var i = this.soldierList.length - 1; i >= 0; i--) {
            var s = this.soldierList[i];
            if (!s.alive || !s.node || !s.node.isValid) {
              if (s.node && s.node.isValid) {
                this.recycleSoldierNode(s.node, s.camp);
              }
              this.soldierList.splice(i, 1);
            }
          }
        };
        _proto.convertWorldToGameLocal = function convertWorldToGameLocal(worldPos) {
          var transform = this.node.getComponent(UITransform) || this.node.addComponent(UITransform);
          return transform.convertToNodeSpaceAR(worldPos);
        };
        _proto.convertGameLocalToMapLocal = function convertGameLocalToMapLocal(gameLocalPos) {
          var _this$node$getCompone;
          var world = ((_this$node$getCompone = this.node.getComponent(UITransform)) == null ? void 0 : _this$node$getCompone.convertToWorldSpaceAR(gameLocalPos)) || gameLocalPos;
          return this.convertWorldToMapLocal(world);
        };
        _proto.endGame = function endGame(isAllyWin) {
          if (this.isGameOver) return;
          this.isGameOver = true;
          this.stopAllyBaseWarningEffect();
          this.stopBattleSystem();
          this.stopEconomySystem();
          this.convertLoserHexCellsToWinner(isAllyWin ? HexCampState.Ally : HexCampState.Enemy);
          this.onGameOver(isAllyWin);
        };
        _proto.convertLoserHexCellsToWinner = function convertLoserHexCellsToWinner(winnerCamp) {
          var _this12 = this;
          var loserCamp = winnerCamp === HexCampState.Ally ? HexCampState.Enemy : HexCampState.Ally;
          this.suppressHexBatchRebuild = true;
          this.hexCells.forEach(function (cell) {
            if (!cell) return;
            if (cell.camp !== loserCamp) return;
            _this12.setHexCellCamp(cell, winnerCamp, false);
          });
          this.suppressHexBatchRebuild = false;
          this.hexFillBatchesDirty = false;
          this.rebuildHexFillBatches();
        };
        _proto.resetHexMapToNeutral = function resetHexMapToNeutral() {
          var _this13 = this;
          this.clearHexCaptureAnimNodes();
          this.pendingAnimHexKeys.clear();
          this.hexAnimCooldownUntilMap.clear();
          this.suppressHexBatchRebuild = true;
          this.hexCells.forEach(function (cell) {
            if (!cell) return;
            _this13.setHexCellCamp(cell, HexCampState.Neutral, false);
          });
          this.suppressHexBatchRebuild = false;
          this.hexFillBatchesDirty = false;
          this.rebuildHexFillBatches();
          if (this.areaCircleLayer && this.areaCircleLayer.isValid) {
            this.areaCircleLayer.removeAllChildren();
          }
        }

        /**
         * 初始化资源系统（主城产人口、农场产粮）
         */;
        _proto.initEconomySystem = function initEconomySystem() {
          var _this14 = this;
          this.stopEconomySystem();
          this.allyEconomy.population = this.config.economy.ally.init.population;
          this.allyEconomy.food = this.config.economy.ally.init.food;
          this.allyEconomy.farmLevel = this.clampFarmLevel(this.config.economy.ally.init.farmLevel);
          this.enemyEconomy.population = this.config.economy.enemy.init.population;
          this.enemyEconomy.food = this.config.economy.enemy.init.food;
          this.enemyEconomy.farmLevel = this.clampFarmLevel(this.config.economy.enemy.init.farmLevel);
          this.allyFarmHp = this.allyEconomy.farmLevel > 0 ? GameView.FARM_HP_MAX : 0;
          this.enemyFarmHp = this.enemyEconomy.farmLevel > 0 ? GameView.FARM_HP_MAX : 0;
          this.isAllyFarmCaptured = false;
          this.isEnemyFarmCaptured = false;
          this.refreshFarmFieldSprites(this.我方农场, this.allyEconomy.farmLevel);
          this.refreshFarmFieldSprites(this.敌方农场, this.enemyEconomy.farmLevel);
          this.refreshEconomyLabels();
          this.schedule(this.onAllyBaseProduce, this.config.economy.ally.base.interval);
          this.schedule(this.onEnemyBaseProduce, this.config.economy.enemy.base.interval);
          this.schedule(this.onAllyFarmProduce, this.config.economy.ally.farm.interval);
          this.schedule(this.onEnemyFarmProduce, this.config.economy.enemy.farm.interval);

          // 开局1秒后，敌方先自动升到1级农场
          this.scheduleOnce(function () {
            if (_this14.enemyEconomy.farmLevel < 1) {
              _this14.tryUpgradeEnemyFarm();
            }
          }, 1);
        };
        _proto.stopEconomySystem = function stopEconomySystem() {
          this.unschedule(this.onAllyBaseProduce);
          this.unschedule(this.onEnemyBaseProduce);
          this.unschedule(this.onAllyFarmProduce);
          this.unschedule(this.onEnemyFarmProduce);
        };
        _proto.initFarmUpgradeInteraction = function initFarmUpgradeInteraction() {
          if (!this.我方农场) return;
          this.我方农场.on(Node.EventType.TOUCH_END, this.onAllyFarmClickUpgrade, this);
          this.refreshAllyFarmUpgradeNeedView();
          this.refreshFarmFieldSprites(this.我方农场, this.allyEconomy.farmLevel);
        };
        _proto.clearFarmUpgradeInteraction = function clearFarmUpgradeInteraction() {
          if (!this.我方农场) return;
          this.我方农场.off(Node.EventType.TOUCH_END, this.onAllyFarmClickUpgrade, this);
        };
        _proto.onAllyFarmClickUpgrade = function onAllyFarmClickUpgrade(event) {
          if (this.isAllyFarmCaptured) {
            return;
          }
          var maxLevel = this.getFarmMaxLevel(this.config.economy.ally);
          if (this.allyEconomy.farmLevel >= maxLevel) {
            return;
          }
          GC.audio.playSound(AudioPath.click);
          this.playBuildingClickEffect(this.getTouchWorldPos(event, this.我方农场));
          var ok = this.tryUpgradeAllyFarm(true);
          if (ok) {
            this.completeFarmGuidePauseAfterFarmUpgrade();
          }
          if (!ok) {
            GC.audio.playSound(AudioPath.错误);
            this.showResourceGainFloat(this.我方农场, '粮草不足');
          }
        }

        /** 点击我方建筑升级因人口/粮食不足失败时播放 */;
        _proto.playAllyResourceInsufficientSound = function playAllyResourceInsufficientSound(message) {
          if (message === '人口不足' || message === '粮草不足') {
            GC.audio.playSound(AudioPath.错误);
          }
        };
        _proto.getTouchWorldPos = function getTouchWorldPos(event, fallbackNode) {
          var uiPos = event == null || event.getUILocation == null ? void 0 : event.getUILocation();
          if (uiPos) {
            var visibleSize = view.getVisibleSize();
            var localPos = new Vec3(uiPos.x - visibleSize.width * 0.5, uiPos.y - visibleSize.height * 0.5, 0);
            var transform = this.node.getComponent(UITransform) || this.node.addComponent(UITransform);
            return transform.convertToWorldSpaceAR(localPos);
          }
          return (fallbackNode == null ? void 0 : fallbackNode.getWorldPosition(new Vec3())) || new Vec3();
        };
        _proto.playBuildingClickEffect = function playBuildingClickEffect(worldPos) {
          if (!this.effectManager || !worldPos) return;
          this.effectManager.playEffect(worldPos, {
            type: EffectType.Click,
            resourcePath: 'game/images/seqPic/effect/点击',
            fps: 36,
            loop: false,
            siblingIndex: 9999,
            parentNode: this.node,
            scale: 0.3
          });
        };
        _proto.playUpgradeEffect = function playUpgradeEffect(targetNode) {
          if (!this.effectManager || !targetNode || !targetNode.isValid) return;
          var worldPos = targetNode.getWorldPosition(new Vec3());
          this.effectManager.playEffect(new Vec3(worldPos.x, worldPos.y + 60, worldPos.z), {
            type: EffectType.Click,
            resourcePath: 'game/images/seqPic/effect/升级',
            fps: 48,
            loop: false,
            siblingIndex: 9999,
            parentNode: this.node,
            scale: 0.7
          });
        };
        _proto.playFarmFieldUpgradeEffects = function playFarmFieldUpgradeEffects(farmNode) {
          if (!this.effectManager || !farmNode || !farmNode.isValid) return;
          var fieldNameSet = new Set(['1', '2', '3', '4']);
          var fields = farmNode.children.filter(function (child) {
            return child && child.isValid && fieldNameSet.has(child.name);
          });
          for (var i = 0; i < fields.length; i++) {
            var worldPos = fields[i].getWorldPosition(new Vec3());
            this.effectManager.playEffect(new Vec3(worldPos.x, worldPos.y + 30, worldPos.z), {
              type: EffectType.Click,
              resourcePath: 'game/images/seqPic/effect/农田升级',
              fps: 36,
              loop: false,
              siblingIndex: 9999,
              parentNode: this.node,
              scale: 1.2
            });
          }
        };
        _proto.tryEnemyAutoUpgradeByPriority = function tryEnemyAutoUpgradeByPriority() {
          if (this.isEnemyFarmCaptured) return;
          // 阶段1：敌方农场到1级后，优先解锁3个兵营（升到1级）
          if (this.enemyEconomy.farmLevel >= 1 && !this.isEnemyBarracksAllUnlocked()) {
            this.tryEnemyAutoUnlockBarracks();
            return;
          }

          // 阶段2：3个兵营都解锁后，资源足够时优先升级农场；农场未升级成功时再升级兵营
          var upgradedFarm = this.tryUpgradeEnemyFarm();
          if (upgradedFarm) return;
          this.tryEnemyAutoUnlockBarracks();
        };
        _proto.isEnemyBarracksAllUnlocked = function isEnemyBarracksAllUnlocked() {
          for (var i = 0; i < this.enemyBarracksLevels.length; i++) {
            if ((this.enemyBarracksLevels[i] || 0) < 1) {
              return false;
            }
          }
          return true;
        };
        _proto.produceFarmFood = function produceFarmFood(farmNode, runtime, cfg, isAlly) {
          var _this15 = this;
          if (!farmNode) return;
          if (runtime.farmLevel <= 0) return;
          var fieldNameSet = new Set(['1', '2', '3', '4']);
          var fields = farmNode.children.filter(function (child) {
            return child && child.isValid && child.active && fieldNameSet.has(child.name);
          });
          if (fields.length === 0) return;
          var levelIndex = this.clampFarmLevel(runtime.farmLevel) - 1;
          var perField = cfg.farm.foodPerFieldByLevel[levelIndex] || 0;
          if (perField <= 0) return;
          var total = perField * fields.length;
          runtime.food += total;
          this.refreshEconomyLabels();
          var _loop2 = function _loop2() {
            var field = fields[i];
            _this15.scheduleOnce(function () {
              _this15.showCurrencyFloat(field, FloatCurrencyType.Food, perField);
            }, i * 0.08);
          };
          for (var i = 0; i < fields.length; i++) {
            _loop2();
          }

          // 农场父节点不显示总量飘字，仅在每个农田子节点显示产出
        }

        /**
         * 升级我方农场（1->2->3）
         */;
        _proto.tryUpgradeAllyFarm = function tryUpgradeAllyFarm(fromPlayerClick) {
          if (fromPlayerClick === void 0) {
            fromPlayerClick = false;
          }
          return this.tryUpgradeFarm(this.allyEconomy, this.config.economy.ally, true, fromPlayerClick);
        }

        /**
         * 升级敌方农场（AI可调用）
         */;
        _proto.tryUpgradeEnemyFarm = function tryUpgradeEnemyFarm() {
          if (this.isEnemyFarmCaptured) return false;
          return this.tryUpgradeFarm(this.enemyEconomy, this.config.economy.enemy, false);
        };
        _proto.tryUpgradeFarm = function tryUpgradeFarm(runtime, cfg, isAlly, fromPlayerClick) {
          if (fromPlayerClick === void 0) {
            fromPlayerClick = false;
          }
          var maxLevel = this.getFarmMaxLevel(cfg);
          if (runtime.farmLevel >= maxLevel) {
            return false;
          }
          var targetLevel = runtime.farmLevel + 1;
          var cost = cfg.farm.upgradeCostByTargetLevel[targetLevel - 1];
          if (!cost) return false;
          if (runtime.population < cost.population || runtime.food < cost.food) {
            return false;
          }
          runtime.population -= cost.population;
          runtime.food -= cost.food;
          var prevLevel = runtime.farmLevel;
          runtime.farmLevel = targetLevel;
          this.refreshEconomyLabels();
          if (targetLevel > 0 && prevLevel <= 0) {
            if (isAlly) {
              this.allyFarmHp = GameView.FARM_HP_MAX;
            } else {
              this.enemyFarmHp = GameView.FARM_HP_MAX;
            }
          }
          var farmNode = isAlly ? this.我方农场 : this.敌方农场;
          this.refreshFarmFieldSprites(farmNode, runtime.farmLevel);
          this.playFarmFieldUpgradeEffects(farmNode);

          // 农场从0级升到1级时，开始占领农场范围地块
          if (targetLevel === 1) {
            var camp = isAlly ? HexCampState.Ally : HexCampState.Enemy;
            if (farmNode) {
              var center = this.convertWorldToMapLocal(farmNode.getWorldPosition(new Vec3()));
              this.paintHexCellsInCircle(center, this.config.map.farmCoverRadius, camp);
            }
          }
          if (isAlly) {
            this.refreshAllyFarmUpgradeNeedView();
            if (fromPlayerClick) {
              var _this$我方农场;
              var upNeed = (_this$我方农场 = this.我方农场) == null ? void 0 : _this$我方农场.getChildByName('upNeedNode');
              if (upNeed != null && upNeed.active) {
                this.playAllyUpNeedNodeIntroPop(upNeed);
              }
            }
          }
          this.showUpgradeSuccessImageFloat(farmNode);
          GC.audio.playSound(AudioPath.升级);
          return true;
        };
        _proto.clampFarmLevel = function clampFarmLevel(level) {
          if (level < 0) return 0;
          if (level > 3) return 3;
          return level;
        };
        _proto.getFarmMaxLevel = function getFarmMaxLevel(cfg) {
          return cfg.farm.upgradeCostByTargetLevel.length;
        };
        _proto.refreshFarmFieldSprites = function refreshFarmFieldSprites(farmNode, farmLevel) {
          if (!farmNode) return;
          var spritePath = this.getFarmFieldSpritePathByLevel(farmLevel);
          var fieldNameSet = new Set(['1', '2', '3', '4']);
          var fields = farmNode.children.filter(function (child) {
            return child && child.isValid && fieldNameSet.has(child.name);
          });
          for (var i = 0; i < fields.length; i++) {
            var sprite = fields[i].getComponent(Sprite);
            if (!sprite) continue;
            this.setSprite(sprite, spritePath);
          }
        };
        _proto.getFarmFieldSpritePathByLevel = function getFarmFieldSpritePathByLevel(farmLevel) {
          var level = this.clampFarmLevel(farmLevel);
          if (level <= 1) return 'game/images/build/一级农田';
          if (level === 2) return 'game/images/build/二级农田';
          return 'game/images/build/三级农田';
        };
        _proto.refreshAllyFarmUpgradeNeedView = function refreshAllyFarmUpgradeNeedView() {
          var _upNeedNode$getChildB3;
          if (!this.我方农场) return;
          var upNeedNode = this.我方农场.getChildByName('upNeedNode');
          if (!upNeedNode) return;
          if (this.isAllyFarmCaptured) {
            this.refreshUpgradeUpFlag(upNeedNode, false);
            upNeedNode.active = false;
            return;
          }
          var currentLevel = this.allyEconomy.farmLevel;
          var maxLevel = this.getFarmMaxLevel(this.config.economy.ally);
          if (currentLevel >= maxLevel) {
            this.refreshUpgradeUpFlag(upNeedNode, false);
            upNeedNode.active = false;
            return;
          }
          upNeedNode.active = true;
          var targetLevel = currentLevel + 1;
          var cost = this.config.economy.ally.farm.upgradeCostByTargetLevel[targetLevel - 1];
          var foodLabel = (_upNeedNode$getChildB3 = upNeedNode.getChildByName('粮食数')) == null ? void 0 : _upNeedNode$getChildB3.getComponent(Label);
          var canUpgrade = false;
          if (foodLabel && cost) {
            foodLabel.string = "" + cost.food;
            var canAffordFood = this.allyEconomy.food >= cost.food;
            foodLabel.color = canAffordFood ? new Color(0, 255, 0, 255) : new Color(255, 0, 0, 255);
            canUpgrade = canAffordFood;
          }
          this.refreshUpgradeUpFlag(upNeedNode, canUpgrade);
        }

        /**
         * 我方 upNeedNode 弹出：先缩放到 0，再弹至 1.1，最后落回 1（仅玩家点击升级成功等按需调用）
         */;
        _proto.playAllyUpNeedNodeIntroPop = function playAllyUpNeedNodeIntroPop(upNeedNode) {
          if (!upNeedNode || !upNeedNode.isValid || !upNeedNode.active) return;
          GC.audio.playSound(AudioPath.弹跳);
          Tween.stopAllByTarget(upNeedNode);
          upNeedNode.setScale(0, 0, 1);
          var peak = new Vec3(1.1, 1.1, 1);
          var rest = new Vec3(1, 1, 1);
          tween(upNeedNode).to(0.28, {
            scale: peak
          }, {
            easing: 'backOut'
          }).to(0.22, {
            scale: rest
          }, {
            easing: 'backOut'
          }).start();
        };
        _proto.refreshUpgradeUpFlag = function refreshUpgradeUpFlag(upNeedNode, canUpgrade) {
          if (!upNeedNode || !upNeedNode.isValid) return;
          var upFlag = upNeedNode.getChildByName('upFlag');
          if (!upFlag || !upFlag.isValid) return;
          if (!canUpgrade) {
            upFlag.active = false;
            upFlag.setScale(1, 1, 1);
            Tween.stopAllByTarget(upFlag);
            upFlag['__breathing'] = false;
            return;
          }
          upFlag.active = true;
          if (upFlag['__breathing']) {
            return;
          }
          upFlag['__breathing'] = true;
          upFlag.setScale(1, 1, 1);
          Tween.stopAllByTarget(upFlag);
          tween(upFlag).repeatForever(tween().to(0.45, {
            scale: new Vec3(1.3, 1.3, 1)
          }, {
            easing: 'sineInOut'
          }).to(0.45, {
            scale: new Vec3(0.92, 0.92, 1)
          }, {
            easing: 'sineInOut'
          })).start();
        };
        _proto.refreshEconomyLabels = function refreshEconomyLabels() {
          if (this.我方人口数) this.我方人口数.string = "" + this.allyEconomy.population;
          if (this.我方粮食数) this.我方粮食数.string = "" + this.allyEconomy.food;
          if (this.敌方人口数) this.敌方人口数.string = "" + this.enemyEconomy.population;
          if (this.敌方粮食数) this.敌方粮食数.string = "" + this.enemyEconomy.food;
          this.refreshAllyFarmUpgradeNeedView();
          var allyBarracks = this.getAllyBarracksNodes();
          for (var i = 0; i < allyBarracks.length; i++) {
            var _this$allyBarracksLev2;
            var node = allyBarracks[i];
            if (!node) continue;
            var level = (_this$allyBarracksLev2 = this.allyBarracksLevels[i]) != null ? _this$allyBarracksLev2 : 0;
            this.refreshBarracksUpgradeView(node, level);
          }
          var enemyBarracks = this.getEnemyBarracksNodes();
          for (var _i3 = 0; _i3 < enemyBarracks.length; _i3++) {
            var _this$enemyBarracksLe2;
            var _node2 = enemyBarracks[_i3];
            if (!_node2) continue;
            var _level = (_this$enemyBarracksLe2 = this.enemyBarracksLevels[_i3]) != null ? _this$enemyBarracksLe2 : 0;
            this.refreshBarracksUpgradeView(_node2, _level);
          }
          this.refreshAllBarracksUpgradeLights();
          this.updateGuideHandBarracksPhase();
        };
        _proto.showResourceGainFloat = function showResourceGainFloat(targetNode, text) {
          if (!text) return;
          if (text.charAt(0) === '+') {
            var amount = Number.parseInt(text.slice(1), 10);
            if (!Number.isFinite(amount) || amount <= 0) return;
            this.showCurrencyFloat(targetNode, FloatCurrencyType.Food, amount);
            return;
          }
          this.showHintTextFloat(targetNode, text);
        };
        _proto.showHintTextFloat = function showHintTextFloat(targetNode, text) {
          var _this16 = this;
          if (!targetNode || !targetNode.isValid || !targetNode.activeInHierarchy) return;
          var floatNode = this.getOrCreateHintFloatNode();
          var opacity = floatNode.getComponent(UIOpacity) || floatNode.addComponent(UIOpacity);
          var label = floatNode.getComponent(Label);
          if (label) {
            label.string = text;
          }
          Tween.stopAllByTarget(floatNode);
          Tween.stopAllByTarget(opacity);
          var hostTransform = this.node.getComponent(UITransform) || this.node.addComponent(UITransform);
          var worldPos = targetNode.getWorldPosition(new Vec3());
          var localPos = hostTransform.convertToNodeSpaceAR(worldPos);
          floatNode.setPosition(localPos.x, localPos.y, 0);
          floatNode.setScale(0.95, 0.95, 1);
          opacity.opacity = 0;
          floatNode.active = true;
          this.activeHintFloats.add(floatNode);
          var endPos = new Vec3(localPos.x, localPos.y + 80, 0);
          tween(floatNode).parallel(tween(floatNode).to(0.62, {
            position: endPos
          }, {
            easing: 'sineOut'
          }).to(0.18, {
            scale: new Vec3(1.12, 1.12, 1)
          }, {
            easing: 'backOut'
          }).to(0.44, {
            scale: new Vec3(1.0, 1.0, 1)
          }, {
            easing: 'sineIn'
          }), tween(opacity).to(0.12, {
            opacity: 255
          }).delay(0.24).to(0.38, {
            opacity: 0
          }, {
            easing: 'sineIn'
          })).call(function () {
            return _this16.recycleHintFloatNode(floatNode);
          }).start();
        };
        _proto.showCurrencyFloat = function showCurrencyFloat(targetNode, type, amount) {
          var _this17 = this;
          if (!targetNode || !targetNode.isValid || !targetNode.activeInHierarchy) return;
          var floatNode = this.getOrCreateResourceFloatNode();
          var floatComp = floatNode.getComponent(FloatCurrency);
          var opacity = floatNode.getComponent(UIOpacity) || floatNode.addComponent(UIOpacity);
          Tween.stopAllByTarget(floatNode);
          Tween.stopAllByTarget(opacity);
          var hostTransform = this.node.getComponent(UITransform) || this.node.addComponent(UITransform);
          var worldPos = targetNode.getWorldPosition(new Vec3());
          var localPos = hostTransform.convertToNodeSpaceAR(worldPos);
          floatComp == null || floatComp.setData(type, amount);
          floatNode.setPosition(localPos.x + 30, localPos.y, 0);
          floatNode.setScale(0.95, 0.95, 1);
          opacity.opacity = 0;
          floatNode.active = true;
          this.activeResourceFloats.add(floatNode);
          var startPos = floatNode.getPosition();
          var endPos = new Vec3(startPos.x, startPos.y + 80, startPos.z);
          tween(floatNode).parallel(tween(floatNode).to(0.62, {
            position: endPos
          }, {
            easing: 'sineOut'
          }).to(0.18, {
            scale: new Vec3(1.12, 1.12, 1)
          }, {
            easing: 'backOut'
          }).to(0.44, {
            scale: new Vec3(1.0, 1.0, 1)
          }, {
            easing: 'sineIn'
          }), tween(opacity).to(0.12, {
            opacity: 255
          }).delay(0.24).to(0.38, {
            opacity: 0
          }, {
            easing: 'sineIn'
          })).call(function () {
            return _this17.recycleResourceFloatNode(floatNode);
          }).start();
        };
        _proto.showUpgradeSuccessImageFloat = function showUpgradeSuccessImageFloat(targetNode) {
          var _this18 = this;
          if (!targetNode || !targetNode.isValid || !targetNode.activeInHierarchy) return;
          var floatNode = this.getOrCreateUpgradeSuccessFloatNode();
          var sprite = floatNode.getComponent(Sprite);
          var opacity = floatNode.getComponent(UIOpacity) || floatNode.addComponent(UIOpacity);
          if (sprite) {
            this.setSprite(sprite, 'game/images/ui/升级成功');
          }
          Tween.stopAllByTarget(floatNode);
          Tween.stopAllByTarget(opacity);
          var hostTransform = this.node.getComponent(UITransform) || this.node.addComponent(UITransform);
          var worldPos = targetNode.getWorldPosition(new Vec3());
          var localPos = hostTransform.convertToNodeSpaceAR(worldPos);
          floatNode.setPosition(localPos.x, localPos.y + 20, 0);
          floatNode.setScale(0.9, 0.9, 1);
          opacity.opacity = 0;
          floatNode.active = true;
          this.activeUpgradeSuccessFloats.add(floatNode);
          var endPos = new Vec3(localPos.x, localPos.y + 100, 0);
          tween(floatNode).parallel(tween(floatNode).to(0.6, {
            position: endPos
          }, {
            easing: 'sineOut'
          }).to(0.18, {
            scale: new Vec3(1.06, 1.06, 1)
          }, {
            easing: 'backOut'
          }).to(0.42, {
            scale: new Vec3(1, 1, 1)
          }, {
            easing: 'sineIn'
          }), tween(opacity).to(0.1, {
            opacity: 255
          }).delay(0.24).to(0.3, {
            opacity: 0
          }, {
            easing: 'sineIn'
          })).call(function () {
            return _this18.recycleUpgradeSuccessFloatNode(floatNode);
          }).start();
        };
        _proto.getOrCreateResourceFloatNode = function getOrCreateResourceFloatNode() {
          var node = this.resourceFloatPool.pop() || this.createResourceFloatNode();
          if (!node.parent) {
            this.node.addChild(node);
          }
          Tween.stopAllByTarget(node);
          var op = node.getComponent(UIOpacity);
          if (op) {
            Tween.stopAllByTarget(op);
          }
          return node;
        };
        _proto.createResourceFloatNode = function createResourceFloatNode() {
          if (this.floatCurrencyPrefab) {
            var _node3 = instantiate(this.floatCurrencyPrefab);
            _node3.name = 'ResourceFloatCurrency';
            _node3.active = false;
            this.node.addChild(_node3);
            return _node3;
          }
          var node = new Node('ResourceFloatCurrencyFallback');
          node.addComponent(UITransform).setContentSize(220, 90);
          node.addComponent(UIOpacity);
          node.active = false;
          this.node.addChild(node);
          return node;
        };
        _proto.recycleResourceFloatNode = function recycleResourceFloatNode(node) {
          if (!node || !node.isValid) return;
          Tween.stopAllByTarget(node);
          var opacity = node.getComponent(UIOpacity);
          if (opacity) {
            Tween.stopAllByTarget(opacity);
            opacity.opacity = 255;
          }
          node.active = false;
          node.setScale(1, 1, 1);
          this.activeResourceFloats["delete"](node);
          if (this.resourceFloatPool.length >= GameView.MAX_RESOURCE_FLOAT_POOL) {
            node.destroy();
            return;
          }
          this.resourceFloatPool.push(node);
        };
        _proto.getOrCreateHintFloatNode = function getOrCreateHintFloatNode() {
          var node = this.hintTextFloatPool.pop() || this.createHintFloatNode();
          if (!node.parent) {
            this.node.addChild(node);
          }
          Tween.stopAllByTarget(node);
          var op = node.getComponent(UIOpacity);
          if (op) {
            Tween.stopAllByTarget(op);
          }
          return node;
        };
        _proto.createHintFloatNode = function createHintFloatNode() {
          var floatNode = new Node('HintFloatText');
          var transform = floatNode.addComponent(UITransform);
          transform.setContentSize(260, 90);
          var label = floatNode.addComponent(Label);
          label.fontSize = 40;
          label.isBold = true;
          label.color = Color.WHITE;
          label.enableOutline = true;
          label.outlineColor = Color.BLACK;
          label.outlineWidth = 2;
          label.horizontalAlign = Label.HorizontalAlign.CENTER;
          label.verticalAlign = Label.VerticalAlign.CENTER;
          floatNode.addComponent(UIOpacity);
          floatNode.active = false;
          this.node.addChild(floatNode);
          return floatNode;
        };
        _proto.recycleHintFloatNode = function recycleHintFloatNode(node) {
          if (!node || !node.isValid) return;
          Tween.stopAllByTarget(node);
          var opacity = node.getComponent(UIOpacity);
          if (opacity) {
            Tween.stopAllByTarget(opacity);
            opacity.opacity = 255;
          }
          node.active = false;
          node.setScale(1, 1, 1);
          this.activeHintFloats["delete"](node);
          if (this.hintTextFloatPool.length >= GameView.MAX_HINT_FLOAT_POOL) {
            node.destroy();
            return;
          }
          this.hintTextFloatPool.push(node);
        };
        _proto.getOrCreateUpgradeSuccessFloatNode = function getOrCreateUpgradeSuccessFloatNode() {
          var node = this.upgradeSuccessFloatPool.pop() || this.createUpgradeSuccessFloatNode();
          if (!node.parent) {
            this.node.addChild(node);
          }
          Tween.stopAllByTarget(node);
          var op = node.getComponent(UIOpacity);
          if (op) {
            Tween.stopAllByTarget(op);
          }
          return node;
        };
        _proto.createUpgradeSuccessFloatNode = function createUpgradeSuccessFloatNode() {
          var floatNode = new Node('UpgradeSuccessFloat');
          var transform = floatNode.addComponent(UITransform);
          transform.setContentSize(220, 90);
          floatNode.addComponent(Sprite);
          floatNode.addComponent(UIOpacity);
          floatNode.active = false;
          this.node.addChild(floatNode);
          return floatNode;
        };
        _proto.recycleUpgradeSuccessFloatNode = function recycleUpgradeSuccessFloatNode(node) {
          if (!node || !node.isValid) return;
          Tween.stopAllByTarget(node);
          var opacity = node.getComponent(UIOpacity);
          if (opacity) {
            Tween.stopAllByTarget(opacity);
            opacity.opacity = 255;
          }
          node.active = false;
          node.setScale(1, 1, 1);
          this.activeUpgradeSuccessFloats["delete"](node);
          if (this.upgradeSuccessFloatPool.length >= GameView.MAX_UPGRADE_SUCCESS_FLOAT_POOL) {
            node.destroy();
            return;
          }
          this.upgradeSuccessFloatPool.push(node);
        };
        _proto.clearResourceFloatNodes = function clearResourceFloatNodes() {
          this.activeResourceFloats.forEach(function (node) {
            if (node && node.isValid) {
              Tween.stopAllByTarget(node);
              var op = node.getComponent(UIOpacity);
              if (op) {
                Tween.stopAllByTarget(op);
              }
              node.destroy();
            }
          });
          this.activeResourceFloats.clear();
          for (var i = 0; i < this.resourceFloatPool.length; i++) {
            var node = this.resourceFloatPool[i];
            if (node && node.isValid) {
              Tween.stopAllByTarget(node);
              var op = node.getComponent(UIOpacity);
              if (op) {
                Tween.stopAllByTarget(op);
              }
              node.destroy();
            }
          }
          this.resourceFloatPool.length = 0;
          this.activeHintFloats.forEach(function (node) {
            if (node && node.isValid) {
              Tween.stopAllByTarget(node);
              var _op = node.getComponent(UIOpacity);
              if (_op) {
                Tween.stopAllByTarget(_op);
              }
              node.destroy();
            }
          });
          this.activeHintFloats.clear();
          for (var _i4 = 0; _i4 < this.hintTextFloatPool.length; _i4++) {
            var _node4 = this.hintTextFloatPool[_i4];
            if (_node4 && _node4.isValid) {
              Tween.stopAllByTarget(_node4);
              var _op2 = _node4.getComponent(UIOpacity);
              if (_op2) {
                Tween.stopAllByTarget(_op2);
              }
              _node4.destroy();
            }
          }
          this.hintTextFloatPool.length = 0;
          this.activeUpgradeSuccessFloats.forEach(function (node) {
            if (node && node.isValid) {
              Tween.stopAllByTarget(node);
              var _op3 = node.getComponent(UIOpacity);
              if (_op3) {
                Tween.stopAllByTarget(_op3);
              }
              node.destroy();
            }
          });
          this.activeUpgradeSuccessFloats.clear();
          for (var _i5 = 0; _i5 < this.upgradeSuccessFloatPool.length; _i5++) {
            var _node5 = this.upgradeSuccessFloatPool[_i5];
            if (_node5 && _node5.isValid) {
              Tween.stopAllByTarget(_node5);
              var _op4 = _node5.getComponent(UIOpacity);
              if (_op4) {
                Tween.stopAllByTarget(_op4);
              }
              _node5.destroy();
            }
          }
          this.upgradeSuccessFloatPool.length = 0;
        }

        /**
        * 初始化特效管理器
        */;
        _proto.initEffectManager = function initEffectManager() {
          // 检查是否已有EffectManager组件
          this.effectManager = this.node.getComponent(EffectManager);
          if (!this.effectManager) {
            // 如果没有，添加EffectManager组件
            this.effectManager = this.node.addComponent(EffectManager);
          }
        }

        /**
        * 初始化引导管理器
        */;
        _proto.initGuideManager = function initGuideManager() {
          var _this19 = this;
          this.guideManager = this.node.getComponent(GuideManager);
          if (!this.guideManager) {
            this.guideManager = this.node.addComponent(GuideManager);
          }
          // 延迟一帧，确保GuideManager的onLoad完成后再设置父节点
          this.scheduleOnce(function () {
            if (_this19.guideManager) {
              // 将蒙版、手指等挂在到当前节点（通常是Canvas根节点）
              _this19.guideManager.setParentNode(_this19.node);
            }
          }, 0);
        }

        /**
        * 显示引导步骤
        */;
        _proto.showGuideStep = function showGuideStep(step) {
          if (!this.guideManager) return;
          this.currentGuideStep = step;
          var targetNode = null;
          var guideText = null;
          switch (step) {
            case 0:
              targetNode = this.node;
              guideText = 'xxxx';
              break;
          }
          if (targetNode && targetNode.active) {
            this.guideManager.showGuide(targetNode, step, guideText);
          }
        }

        /**
        * 隐藏引导
        */;
        _proto.hideGuide = function hideGuide() {
          if (this.guideManager) {
            this.guideManager.hideGuide();
          }
          this.currentGuideStep = 0;
        }

        /** 开局：手指指向我方农场并暂停战斗/产出，直到玩家完成农场首升 */;
        _proto.beginFarmGuideIfNeeded = function beginFarmGuideIfNeeded() {
          var _this$guideHandNode, _this$我方农场2;
          if (!((_this$guideHandNode = this.guideHandNode) != null && _this$guideHandNode.isValid)) {
            this.guideFarmStepCompleted = true;
            this.guideGameplayPausedForFarm = false;
            this.updateGuideHandBarracksPhase();
            return;
          }
          if (!((_this$我方农场2 = this.我方农场) != null && _this$我方农场2.isValid) || this.isAllyFarmCaptured) {
            this.guideFarmStepCompleted = true;
            this.guideGameplayPausedForFarm = false;
            this.updateGuideHandBarracksPhase();
            return;
          }
          var maxFarmLv = this.getFarmMaxLevel(this.config.economy.ally);
          if (this.allyEconomy.farmLevel >= maxFarmLv) {
            this.guideFarmStepCompleted = true;
            this.guideGameplayPausedForFarm = false;
            this.updateGuideHandBarracksPhase();
            return;
          }
          this.guideFarmStepCompleted = false;
          this.guideGameplayPausedForFarm = true;
          this.resetGuideBarracksFingerState();
          this.syncGuideHandToTargetNode(this.我方农场, '点击升级');
          this.startGuideHandPulseAnim();
        }

        /**
         * 农场点击升级成功：必须解除暂停、标记农场引导完成，并关闭手指节点（不依赖是否仍处在暂停标志，避免早退导致不隐藏）
         */;
        _proto.completeFarmGuidePauseAfterFarmUpgrade = function completeFarmGuidePauseAfterFarmUpgrade() {
          var _this$guideHandNode2,
            _this20 = this;
          this.guideGameplayPausedForFarm = false;
          this.guideFarmStepCompleted = true;
          this.stopGuideHandPulseAnim();
          if ((_this$guideHandNode2 = this.guideHandNode) != null && _this$guideHandNode2.isValid) {
            this.guideHandNode.active = false;
          }
          this.guideBarracksPulseSlot = -2;
          this.scheduleOnce(function () {
            _this20.updateGuideHandBarracksPhase();
          }, 0);
        };
        _proto.syncGuideHandToTargetNode = function syncGuideHandToTargetNode(target, guideText) {
          var _this$guideHandNode3, _this$guideHandNode$g;
          if (!((_this$guideHandNode3 = this.guideHandNode) != null && _this$guideHandNode3.isValid) || !(target != null && target.isValid)) return;
          var parent = this.guideHandNode.parent;
          var ui = parent == null ? void 0 : parent.getComponent(UITransform);
          var wp = target.getWorldPosition(new Vec3());
          if (ui) {
            var lp = ui.convertToNodeSpaceAR(wp);
            this.guideHandNode.setPosition(lp.x + this.guideHandOffset.x, lp.y + this.guideHandOffset.y, lp.z + this.guideHandOffset.z);
          } else {
            this.guideHandNode.setWorldPosition(wp.x + this.guideHandOffset.x, wp.y + this.guideHandOffset.y, wp.z + this.guideHandOffset.z);
          }
          if (parent) {
            this.guideHandNode.setSiblingIndex(parent.children.length - 1);
          }
          this.guideHandNode.active = true;
          var lab = (_this$guideHandNode$g = this.guideHandNode.getChildByName('Label')) == null ? void 0 : _this$guideHandNode$g.getComponent(Label);
          if (lab) {
            lab.string = guideText;
          }
        };
        _proto.startGuideHandPulseAnim = function startGuideHandPulseAnim() {
          var _this$guideHandNode4;
          if (!((_this$guideHandNode4 = this.guideHandNode) != null && _this$guideHandNode4.isValid)) return;
          this.stopGuideHandPulseAnim();
          var finger = this.guideHandNode.getChildByName('手指');
          var targetNode = finger != null && finger.isValid ? finger : this.guideHandNode;
          tween(targetNode).repeatForever(tween().to(0.38, {
            scale: new Vec3(1.12, 1.12, 1)
          }, {
            easing: 'sineInOut'
          }).to(0.38, {
            scale: new Vec3(1, 1, 1)
          }, {
            easing: 'sineInOut'
          })).start();
        };
        _proto.stopGuideHandPulseAnim = function stopGuideHandPulseAnim() {
          var n = this.guideHandNode;
          if (!(n != null && n.isValid)) return;
          Tween.stopAllByTarget(n);
          var finger = n.getChildByName('手指');
          if (finger != null && finger.isValid) {
            Tween.stopAllByTarget(finger);
            finger.setScale(1, 1, 1);
          }
          n.setScale(1, 1, 1);
        };
        _proto.canAllyUpgradeBarracksAtIndex = function canAllyUpgradeBarracksAtIndex(index) {
          var nodes = this.getAllyBarracksNodes();
          var node = nodes[index];
          if (!node) return false;
          var data = this.barracksRuntime.get(node);
          if (!data || data.ownerCamp !== HexCampState.Ally) return false;
          var level = data.level;
          var maxLevel = this.config.economy.barracks.maxLevel;
          if (level >= maxLevel) return false;
          var targetLevel = level + 1;
          var cost = this.getBarracksUpgradeCost(targetLevel);
          if (!cost) return false;
          return this.allyEconomy.population >= cost.population && this.allyEconomy.food >= cost.food;
        };
        _proto.resetGuideBarracksFingerState = function resetGuideBarracksFingerState() {
          this.guideBarracksTargetSlot = -1;
          this.guideBarracksFingerFinished = false;
          this.guideBarracksPulseSlot = -2;
        }

        /**
         * 农场引导结束后：仅「第一次」出现我方某槽可升级且对岸同槽已解锁时锁定该槽并显示手指；
         * 后续敌方再解锁其它槽位不再切换手指位置；该槽升级完成或不再可升后永久结束兵营指引。
         */;
        _proto.updateGuideHandBarracksPhase = function updateGuideHandBarracksPhase() {
          var _this$guideHandNode5;
          if (!((_this$guideHandNode5 = this.guideHandNode) != null && _this$guideHandNode5.isValid)) return;
          if (!this.guideFarmStepCompleted || this.guideGameplayPausedForFarm) {
            return;
          }
          if (this.guideBarracksFingerFinished) {
            return;
          }
          if (this.guideBarracksTargetSlot < 0) {
            for (var _i6 = 0; _i6 < 3; _i6++) {
              if ((this.enemyBarracksLevels[_i6] || 0) < 1) continue;
              if (!this.canAllyUpgradeBarracksAtIndex(_i6)) continue;
              this.guideBarracksTargetSlot = _i6;
              break;
            }
            if (this.guideBarracksTargetSlot < 0) {
              return;
            }
          }
          var i = this.guideBarracksTargetSlot;
          var allyNodes = this.getAllyBarracksNodes();
          var target = allyNodes[i];
          if (!(target != null && target.isValid) || (this.enemyBarracksLevels[i] || 0) < 1 || !this.canAllyUpgradeBarracksAtIndex(i)) {
            this.guideBarracksFingerFinished = true;
            this.guideBarracksPulseSlot = -2;
            this.stopGuideHandPulseAnim();
            this.guideHandNode.active = false;
            return;
          }
          var needNewPulse = this.guideBarracksPulseSlot !== i;
          this.guideBarracksPulseSlot = i;
          this.syncGuideHandToTargetNode(target, '点击升级');
          if (needNewPulse) {
            this.startGuideHandPulseAnim();
          }
        }

        /*******************************************************************************
         * 
         * 参考示例代码  spriteFrameManager 播放序列帧 和 effectctManager 播放特效
         * 
         ******************************************************************************/

        /**
         * 参考 EffectManager 的方式，直接通过动画管理器播放目录序列帧
         */;
        _proto.testPlayCurrentTestSpriteAnim = /*#__PURE__*/
        function () {
          var _testPlayCurrentTestSpriteAnim = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var path;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  path = this.testAnimPaths[this.currentAnimIndex];
                  if (this.codeTestSprite) {
                    _context.next = 3;
                    break;
                  }
                  return _context.abrupt("return");
                case 3:
                  _context.next = 5;
                  return SpriteFrameManager.instance.playDir(this.codeTestSprite, path, 36, true);
                case 5:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function testPlayCurrentTestSpriteAnim() {
            return _testPlayCurrentTestSpriteAnim.apply(this, arguments);
          }
          return testPlayCurrentTestSpriteAnim;
        }();
        _proto.testPlayEffect = function testPlayEffect() {
          if (!this.effectManager) {
            return;
          }
          var targetNode = this.node;
          var worldPos = targetNode.getWorldPosition(new Vec3());
          this.effectManager.playEffect(worldPos, {
            type: EffectType.Click,
            resourcePath: "game/images/seqPic/effect/点击",
            fps: 60,
            loop: false
          });
        }

        /**
         * 游戏胜利失败接口
         */;
        _proto.onGameOver = function onGameOver(isWin) {
          this.openDialog(DialogPath.resultDlg, isWin);
        }

        /**
         * 游戏重新开始接口
         */;
        _proto.onGameRestart = function onGameRestart() {
          var _this$guideHandNode6,
            _this$effectManager,
            _this21 = this;
          // 重新开局：重置地图、经济、建筑、战斗与引导状态（不切场景）
          this.hideGuide();
          this.guideGameplayPausedForFarm = false;
          this.guideFarmStepCompleted = false;
          this.stopGuideHandPulseAnim();
          if ((_this$guideHandNode6 = this.guideHandNode) != null && _this$guideHandNode6.isValid) {
            this.guideHandNode.active = false;
          }
          this.resetGuideBarracksFingerState();
          this.stopBattleSystem();
          this.stopEconomySystem();
          this.clearFarmUpgradeInteraction();
          this.clearBarracksListeners();
          this.clearBarracksRangeCircles();
          this.clearBarracksCountDownNodes();
          this.clearResourceFloatNodes();
          (_this$effectManager = this.effectManager) == null || _this$effectManager.clearAllEffects();
          if (this.hexCells.size === 0) {
            this.initHexMap();
          } else {
            this.resetHexMapToNeutral();
          }
          this.initEconomySystem();
          this.initFarmUpgradeInteraction();
          this.initBarracksSystem();
          this.initBattleSystem();
          this.scheduleOnce(function () {
            _this21.initCampTerritory();
          }, 0);
          this.scheduleOnce(function () {
            _this21.beginFarmGuideIfNeeded();
          }, 0);
        }

        /**
         * 游戏播放音效示例
         */;
        _proto.testPlaySound = function testPlaySound() {
          GC.audio.playSound(AudioPath.click);
        };
        return GameView;
      }(BasePrefab), _class3._instance = null, _class3.HEX_CAPTURE_ANIM_COOLDOWN_SEC = 0.2, _class3.MAX_HEX_CAPTURE_ANIM_CONCURRENT = 8, _class3.MAX_RESOURCE_FLOAT_POOL = 32, _class3.MAX_HINT_FLOAT_POOL = 12, _class3.MAX_UPGRADE_SUCCESS_FLOAT_POOL = 8, _class3.MAX_SOLDIER_POOL_PER_CAMP = 96, _class3.FARM_HP_MAX = 10, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "gridMapParent", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "\u6211\u65B9\u5927\u672C\u8425", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "\u6211\u65B9\u519C\u573A", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "\u6211\u65B9\u5175\u84251", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "\u6211\u65B9\u5175\u84252", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "\u6211\u65B9\u5175\u84253", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "\u654C\u65B9\u5927\u672C\u8425", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "\u654C\u65B9\u519C\u573A", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "\u654C\u65B9\u5175\u84251", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "\u654C\u65B9\u5175\u84252", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "\u654C\u65B9\u5175\u84253", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "\u6211\u65B9\u4EBA\u53E3\u6570", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "\u6211\u65B9\u7CAE\u98DF\u6570", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "\u654C\u65B9\u4EBA\u53E3\u6570", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "\u654C\u65B9\u7CAE\u98DF\u6570", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "ourSoldierPrefab", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "enemySoldierPrefab", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "countDownPrefab", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "floatCurrencyPrefab", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "ourLight1", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "ourLight2", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "ourLight3", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "enemyLight1", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "enemyLight2", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "enemyLight3", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "warningNode", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "guideHandNode", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameViewConfig.ts", ['cc'], function (exports) {
  var cclegacy, Color;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Color = module.Color;
    }],
    execute: function () {
      var _campColors;
      cclegacy._RF.push({}, "782691JN+JA/rcginF59X+F", "GameViewConfig", undefined);
      var HexCampState = exports('HexCampState', /*#__PURE__*/function (HexCampState) {
        HexCampState["Ally"] = "ally";
        HexCampState["Neutral"] = "neutral";
        HexCampState["Enemy"] = "enemy";
        return HexCampState;
      }({}));
      var GAME_VIEW_CONFIG = exports('GAME_VIEW_CONFIG', {
        map: {
          /** 六边形格子半径 */
          hexRadius: 50,
          /** 六边形黑边线宽 */
          strokeWidth: 5,
          /** 六边形黑边颜色 */
          strokeColor: new Color(200, 200, 200, 200),
          /** 主城覆盖地块半径 */
          baseCoverRadius: 150,
          /** 农场覆盖地块半径 */
          farmCoverRadius: 100,
          /** 兵营覆盖地块半径 */
          barracksCoverRadius: 70,
          /** 范围圈线宽 */
          areaCircleLineWidth: 5,
          /** 阵营地块颜色 */
          campColors: (_campColors = {}, _campColors[HexCampState.Ally] = new Color(47, 120, 224, 120), _campColors[HexCampState.Neutral] = new Color(88, 180, 88, 255), _campColors[HexCampState.Enemy] = new Color(225, 47, 97, 160), _campColors)
        },
        economy: {
          ally: {
            base: {
              /** 我方主城人口产出间隔（秒） */
              interval: 0.2,
              /** 我方主城每次产出人口 */
              populationPerTick: 2
            },
            farm: {
              /** 我方农场产出间隔（秒） */
              interval: 0.5,
              /** 我方农场1~3级单农田每次产粮 */
              foodPerFieldByLevel: [3, 8, 12],
              /** 我方农场升级消耗（目标等级1~3，仅消耗粮食） */
              upgradeCostByTargetLevel: [{
                population: 0,
                food: 50
              }, {
                population: 0,
                food: 100
              }, {
                population: 0,
                food: 200
              }]
            },
            init: {
              /** 我方初始人口 */
              population: 10,
              /** 我方初始粮食 */
              food: 50,
              /** 我方初始农场等级 */
              farmLevel: 0
            }
          },
          enemy: {
            base: {
              /** 敌方主城人口产出间隔（秒） */
              interval: 0.2,
              /** 敌方主城每次产出人口 */
              populationPerTick: 1
            },
            farm: {
              /** 敌方农场产出间隔（秒） */
              interval: 0.5,
              /** 敌方农场1~3级单农田每次产粮 */
              foodPerFieldByLevel: [3, 5, 8],
              /** 敌方农场升级消耗（目标等级1~3，仅消耗粮食） */
              upgradeCostByTargetLevel: [{
                population: 0,
                food: 50
              }, {
                population: 0,
                food: 100
              }, {
                population: 0,
                food: 200
              }]
            },
            init: {
              /** 敌方初始人口 */
              population: 10,
              /** 敌方初始粮食 */
              food: 50,
              /** 敌方初始农场等级 */
              farmLevel: 0
            }
          },
          barracks: {
            /** 兵营最高等级 */
            maxLevel: 3,
            /** 兵营升级消耗（目标1级、2级、3级） */
            upgradeCostByTargetLevel: [{
              population: 20,
              food: 100
            }, {
              population: 40,
              food: 400
            }, {
              population: 60,
              food: 600
            }],
            /** 0→1、1→2 可升级时的光效 */
            upgradeLightSpritePathLow: 'game/images/build/光效1',
            /** 2→3 可升级时的光效 */
            upgradeLightSpritePathHigh: 'game/images/build/光效2',
            /** 2 级升 3 级时光效在编辑器尺寸上额外放大 */
            upgradeLightScaleWhenUpgradingToMax: 1.2,
            upgradeLightBreathHalfPeriod: 0.85,
            upgradeLightOpacityMin: 72,
            upgradeLightOpacityMax: 255
          }
        },
        battle: {
          /** 出兵轮询检测间隔（秒） */
          spawnCheckInterval: 0.2,
          /** 兵营1~3级出兵间隔（秒） */
          spawnIntervalByBarracksLevel: [2, 1.5, 1],
          /** 每次出兵数量 */
          spawnCountPerWave: 5,
          /** 士兵1~3级移速（像素/秒） */
          soldierSpeedByLevel: [140, 170, 210],
          /** 士兵碰撞半径 */
          soldierCollisionRadius: 30,
          /** 士兵撞建筑时单次伤害 */
          soldierDamageToBuilding: 1,
          /** 主城初始血量 */
          baseHp: 20,
          /** 兵营0级基础血量 */
          barracksBaseHp: 10,
          /** 兵营每升1级增加的血量 */
          barracksHpPerLevel: 5,
          /** 兵营受击判定半径 */
          barracksHitRadius: 56,
          /** 主城受击判定半径 */
          baseHitRadius: 72,
          /** 我方兵营≥该等级时启用加速（默认 2 级起） */
          allyBarracksFastTierThreshold: 2,
          /** 我方加速倍率：出兵间隔 ÷ 倍率、移速 × 倍率 */
          allyBarracksFastMultiplier: 1.5
        }
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GlobalData.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "bcce9Vrv/ZJ/af9HatpTsEZ", "GlobalData", undefined);
      // 定义枚举类型

      var eGameBottomItemId = exports('eGameBottomItemId', /*#__PURE__*/function (eGameBottomItemId) {
        eGameBottomItemId[eGameBottomItemId["tips"] = 0] = "tips";
        eGameBottomItemId[eGameBottomItemId["refresh"] = 1] = "refresh";
        eGameBottomItemId[eGameBottomItemId["remove"] = 2] = "remove";
        eGameBottomItemId[eGameBottomItemId["changeDir"] = 3] = "changeDir";
        return eGameBottomItemId;
      }({}));
      var eGameType = exports('eGameType', /*#__PURE__*/function (eGameType) {
        eGameType[eGameType["lianliankan"] = 0] = "lianliankan";
        eGameType[eGameType["huaRong"] = 1] = "huaRong";
        eGameType[eGameType["duiduipeng"] = 2] = "duiduipeng";
        eGameType[eGameType["hechengdaxigua"] = 3] = "hechengdaxigua";
        eGameType[eGameType["lianlianxiao"] = 4] = "lianlianxiao";
        eGameType[eGameType["dragon"] = 5] = "dragon";
        eGameType[eGameType["findDifference"] = 6] = "findDifference";
        eGameType[eGameType["findGood"] = 7] = "findGood";
        eGameType[eGameType["findPic"] = 8] = "findPic";
        eGameType[eGameType["findKaPiBaLa"] = 9] = "findKaPiBaLa";
        eGameType[eGameType["findGirl"] = 10] = "findGirl";
        eGameType[eGameType["findogirl"] = 11] = "findogirl";
        eGameType[eGameType["guessIdiom"] = 12] = "guessIdiom";
        eGameType[eGameType["findWord"] = 13] = "findWord";
        eGameType[eGameType["tangPoetry"] = 14] = "tangPoetry";
        eGameType[eGameType["daDiZhiMu"] = 15] = "daDiZhiMu";
        eGameType[eGameType["DuJuNvHai"] = 16] = "DuJuNvHai";
        eGameType[eGameType["max"] = 17] = "max";
        return eGameType;
      }({}));
      var eSnakeItemType = exports('eSnakeItemType', /*#__PURE__*/function (eSnakeItemType) {
        eSnakeItemType[eSnakeItemType["majiang"] = 0] = "majiang";
        eSnakeItemType[eSnakeItemType["obstacle"] = 1] = "obstacle";
        return eSnakeItemType;
      }({}));
      var eFindType = exports('eFindType', /*#__PURE__*/function (eFindType) {
        eFindType[eFindType["finddifference"] = 0] = "finddifference";
        eFindType[eFindType["findgood"] = 1] = "findgood";
        eFindType[eFindType["findpic"] = 2] = "findpic";
        eFindType[eFindType["findKaPiBaLa"] = 3] = "findKaPiBaLa";
        eFindType[eFindType["findgirl"] = 4] = "findgirl";
        eFindType[eFindType["findogirl"] = 5] = "findogirl";
        eFindType[eFindType["guessidiom"] = 6] = "guessidiom";
        eFindType[eFindType["findword"] = 7] = "findword";
        eFindType[eFindType["findTangPoetry"] = 8] = "findTangPoetry";
        eFindType[eFindType["findDaDiZhiMu"] = 9] = "findDaDiZhiMu";
        eFindType[eFindType["findDuJuNvHai"] = 10] = "findDuJuNvHai";
        return eFindType;
      }({}));

      // 主配置类
      var GlobalData = exports('default', /*#__PURE__*/function () {
        function GlobalData() {}
        GlobalData.getBearSpineName = function getBearSpineName(roleId) {
          var spinePath;
          if (roleId == 1) {
            spinePath = "xiong/xiong";
          } else {
            spinePath = "player" + (roleId - 1) + "/a_" + (roleId - 1);
          }
          return spinePath;
        };
        return GlobalData;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GuideManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BasePrefab.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Node, UITransform, Widget, Graphics, Sprite, Label, Color, Vec3, tween, BasePrefab;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      UITransform = module.UITransform;
      Widget = module.Widget;
      Graphics = module.Graphics;
      Sprite = module.Sprite;
      Label = module.Label;
      Color = module.Color;
      Vec3 = module.Vec3;
      tween = module.tween;
    }, function (module) {
      BasePrefab = module.default;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "ad87fEfm91J6LFPAdbqS3cG", "GuideManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * 引导管理器
       * 实现半透明蒙版、挖空和手指指引动画
       */
      var GuideManager = exports('GuideManager', (_dec = ccclass('GuideManager'), _dec(_class = /*#__PURE__*/function (_BasePrefab) {
        _inheritsLoose(GuideManager, _BasePrefab);
        function GuideManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BasePrefab.call.apply(_BasePrefab, [this].concat(args)) || this;
          _this.maskNode = null;
          // 蒙版节点
          _this.fingerNode = null;
          // 手指节点
          _this.fingerSprite = null;
          // 手指精灵
          _this.graphics = null;
          // 用于绘制挖空的图形组件
          _this.textNode = null;
          // 文本节点
          _this.textLabel = null;
          // 文本标签
          _this.currentGuideStep = 0;
          // 当前引导步骤
          _this.targetNode = null;
          // 当前目标节点
          _this.fingerTween = null;
          return _this;
        }
        var _proto = GuideManager.prototype;
        // 手指动画tween
        _proto.onLoad = function onLoad() {
          this.createMaskNode();
          this.createFingerNode();
          this.createTextNode(); // 启用文本节点
          this.hideGuide();
        }

        /**
         * 创建蒙版节点
         */;
        _proto.createMaskNode = function createMaskNode() {
          // 创建蒙版节点
          this.maskNode = new Node('GuideMask');
          var uiTransform = this.maskNode.addComponent(UITransform);
          // 设置蒙版大小为屏幕大小（这里给一个较大的固定值，具体由 Widget 适配）
          uiTransform.setContentSize(2000, 2000);
          this.maskNode.setPosition(0, 0, 0);

          // 添加Widget组件，让蒙版自动适配屏幕大小
          var widget = this.maskNode.addComponent(Widget);
          widget.isAlignTop = true;
          widget.isAlignBottom = true;
          widget.isAlignLeft = true;
          widget.isAlignRight = true;
          widget.top = 0;
          widget.bottom = 0;
          widget.left = 0;
          widget.right = 0;
          widget.updateAlignment();

          // 只使用Graphics组件绘制蒙版和挖空（不使用Sprite，避免覆盖问题）
          this.graphics = this.maskNode.addComponent(Graphics);

          // 确保蒙版在较上层，具体层级再由 setParentNode 调整
          this.maskNode.setSiblingIndex(9998);
        }

        /**
         * 创建手指节点
         */;
        _proto.createFingerNode = function createFingerNode() {
          var _this2 = this;
          this.fingerNode = new Node('GuideFinger');
          var uiTransform = this.fingerNode.addComponent(UITransform);
          uiTransform.setContentSize(133, 102); // 手指图片尺寸
          // 添加Sprite组件
          this.fingerSprite = this.fingerNode.addComponent(Sprite);

          // 使用BasePrefab的setSprite方法加载手指图片
          this.setSprite(this.fingerSprite, 'game/images/ui/手指', function (spriteFrame) {
            if (spriteFrame && _this2.fingerSprite) {
              _this2.fingerSprite.spriteFrame = spriteFrame;
            }
          });

          // 初始隐藏
          this.fingerNode.active = false;
        }

        /**
         * 创建文本节点（当前未启用）
         */;
        _proto.createTextNode = function createTextNode() {
          this.textNode = new Node('GuideText');
          var uiTransform = this.textNode.addComponent(UITransform);
          uiTransform.setContentSize(300, 100);

          // 添加Label组件
          this.textLabel = this.textNode.addComponent(Label);
          // 设置默认文本为空字符串，避免显示"Label"
          this.textLabel.string = '';
          this.textLabel.fontSize = 60;
          this.textLabel.color = new Color(255, 255, 0, 255); // 黄色
          this.textLabel.enableOutline = true; // 启用描边
          this.textLabel.outlineColor = Color.BLACK; // 黑色描边
          this.textLabel.outlineWidth = 2; // 描边宽度
          this.textLabel.isBold = true; // 加粗

          // 初始隐藏
          this.textNode.active = false;
        }

        /**
         * 显示引导
         * @param targetNode 目标节点
         * @param step 引导步骤
         * @param text 引导文本（可选）
         */;
        _proto.showGuide = function showGuide(targetNode, step, text) {
          if (!targetNode || !this.maskNode || !this.fingerNode) return;

          // 如有需要可播放引导音效
          // GC.audio.playSound(AudioPath.引导出现);

          this.currentGuideStep = step;
          this.targetNode = targetNode;

          // 显示蒙版
          if (this.maskNode) {
            this.maskNode.active = true;
          }
          if (step === 8) {
            this.maskNode.active = false;
          }

          // 更新蒙版和挖空
          this.updateMask();

          // 先设置手指位置，再显示手指并开始动画（避免闪动）
          this.setFingerPosition();
          this.fingerNode.active = true;
          this.startFingerAnimation();

          // 如果提供了文本，显示文本
          if (text && this.textNode && this.textLabel) {
            this.textLabel.string = text;
            this.showText();
          } else {
            // 如果没有提供文本，确保隐藏文本节点并清空文本
            if (this.textNode) {
              this.hideText();
            }
            if (this.textLabel) {
              this.textLabel.string = '';
            }
          }
        }

        /**
         * 隐藏引导
         */;
        _proto.hideGuide = function hideGuide() {
          if (this.maskNode) {
            this.maskNode.active = false;
          }
          if (this.fingerNode) {
            this.fingerNode.active = false;
          }
          if (this.textNode) {
            this.textNode.active = false;
          }
          // 确保清空文本，避免显示"Label"
          if (this.textLabel) {
            this.textLabel.string = '';
          }
          this.stopFingerAnimation();
          this.targetNode = null;
        }

        /**
         * 更新蒙版和挖空
         */;
        _proto.updateMask = function updateMask() {
          var _this3 = this;
          if (!this.targetNode || !this.maskNode || !this.graphics) return;

          // 延迟一帧更新，确保节点位置已更新
          this.scheduleOnce(function () {
            _this3.doUpdateMask();
          }, 0);
        }

        /**
         * 执行蒙版更新
         */;
        _proto.doUpdateMask = function doUpdateMask() {
          if (!this.targetNode || !this.maskNode || !this.graphics) return;

          // 清除之前的绘制
          this.graphics.clear();

          // 获取目标节点的世界位置和大小
          this.targetNode.updateWorldTransform();
          var targetWorldPos = this.targetNode.getWorldPosition();
          var targetUITransform = this.targetNode.getComponent(UITransform);
          if (!targetUITransform) return;

          // 获取蒙版节点的父节点
          var parent = this.maskNode.parent;
          if (!parent) return;

          // 更新父节点和蒙版节点的世界变换矩阵
          parent.updateWorldTransform();
          this.maskNode.updateWorldTransform();

          // 将目标节点的世界坐标转换为蒙版节点的本地坐标
          var maskUITransform = this.maskNode.getComponent(UITransform);
          if (!maskUITransform) return;
          var targetLocalPos = maskUITransform.convertToNodeSpaceAR(targetWorldPos);
          var targetWidth = targetUITransform.width;
          var targetHeight = targetUITransform.height;

          // 获取蒙版大小（使用Widget更新后的实际大小）
          var maskWidth = maskUITransform.width;
          var maskHeight = maskUITransform.height;

          // 计算目标区域
          var halfTargetWidth = targetWidth / 2;
          var halfTargetHeight = targetHeight / 2;
          var targetX = targetLocalPos.x;
          var targetY = targetLocalPos.y;

          // 设置填充颜色（半透明黑色）
          var maxAlpha = 120;
          this.graphics.fillColor = new Color(0, 0, 0, maxAlpha);
          var halfMaskWidth = maskWidth / 2;
          var halfMaskHeight = maskHeight / 2;

          // 计算目标区域的边界
          var targetLeft = targetX - halfTargetWidth;
          var targetRight = targetX + halfTargetWidth;
          var targetTop = targetY + halfTargetHeight;
          var targetBottom = targetY - halfTargetHeight;

          // 绘制上部分矩形
          this.graphics.rect(-halfMaskWidth, targetTop, maskWidth, halfMaskHeight - targetTop);
          this.graphics.fill();

          // 绘制下部分矩形
          this.graphics.rect(-halfMaskWidth, -halfMaskHeight, maskWidth, targetBottom - -halfMaskHeight);
          this.graphics.fill();

          // 绘制左部分矩形
          this.graphics.rect(-halfMaskWidth, targetBottom, targetLeft - -halfMaskWidth, targetHeight);
          this.graphics.fill();

          // 绘制右部分矩形
          this.graphics.rect(targetRight, targetBottom, halfMaskWidth - targetRight, targetHeight);
          this.graphics.fill();
        }

        /**
         * 设置手指位置（在显示前先设置，避免闪动）
         */;
        _proto.setFingerPosition = function setFingerPosition() {
          if (!this.targetNode || !this.fingerNode) return;

          // 获取目标节点的世界位置
          this.targetNode.updateWorldTransform();
          var targetWorldPos = this.targetNode.getWorldPosition();
          var targetUITransform = this.targetNode.getComponent(UITransform);
          if (!targetUITransform) return;

          // 获取手指节点的父节点
          var parent = this.fingerNode.parent;
          if (!parent) return;

          // 更新父节点的世界变换矩阵
          parent.updateWorldTransform();
          var parentUITransform = parent.getComponent(UITransform);
          if (!parentUITransform) return;

          // 将目标节点的世界坐标转换为父节点的本地坐标
          var targetLocalPos = parentUITransform.convertToNodeSpaceAR(targetWorldPos);

          // 目标节点的中心位置（考虑锚点）
          var anchorPoint = targetUITransform.anchorPoint;
          var targetCenterX = targetLocalPos.x + (0.5 - anchorPoint.x) * targetUITransform.width + 50;
          var targetCenterY = targetLocalPos.y + (0.5 - anchorPoint.y) * targetUITransform.height - 50;
          var startPos = new Vec3(targetCenterX, targetCenterY, 0);

          // 设置初始位置（在激活前设置，避免闪动）
          this.fingerNode.setPosition(startPos);
        }

        /**
         * 开始手指动画
         */;
        _proto.startFingerAnimation = function startFingerAnimation() {
          var _this4 = this;
          if (!this.targetNode || !this.fingerNode) return;
          this.stopFingerAnimation();

          // 延迟一帧，确保节点位置已更新
          this.scheduleOnce(function () {
            _this4.doStartFingerAnimation();
          }, 0);
        }

        /**
         * 执行手指动画
         */;
        _proto.doStartFingerAnimation = function doStartFingerAnimation() {
          if (!this.targetNode || !this.fingerNode) return;

          // 获取目标节点的世界位置
          this.targetNode.updateWorldTransform();
          var targetWorldPos = this.targetNode.getWorldPosition();
          var targetUITransform = this.targetNode.getComponent(UITransform);
          if (!targetUITransform) return;

          // 获取手指节点的父节点
          var parent = this.fingerNode.parent;
          if (!parent) return;

          // 更新父节点的世界变换矩阵
          parent.updateWorldTransform();
          var parentUITransform = parent.getComponent(UITransform);
          if (!parentUITransform) return;

          // 将目标节点的世界坐标转换为父节点的本地坐标
          var targetLocalPos = parentUITransform.convertToNodeSpaceAR(targetWorldPos);

          // 目标节点的中心位置（考虑锚点）
          var anchorPoint = targetUITransform.anchorPoint;
          var targetCenterX = targetLocalPos.x + (0.5 - anchorPoint.x) * targetUITransform.width + 50;
          var targetCenterY = targetLocalPos.y + (0.5 - anchorPoint.y) * targetUITransform.height - 50;

          // 起始位置：统一从目标中心附近开始
          var startPos = new Vec3(targetCenterX, targetCenterY, 0);

          // 结束位置：默认向右下（+100, -100）
          var endPosX = targetCenterX + 100;
          var endPosY = targetCenterY - 100;

          // 如果是最后一个怪物步骤（第8步），改为向左下移动，并把手指朝向翻转（x为-1）
          if (this.currentGuideStep === 8) {
            endPosX = targetCenterX - 250;
            endPosY = targetCenterY - 250;
            if (this.fingerNode) {
              var s = this.fingerNode.scale;
              // x 方向取负值，y/z 取绝对值，避免之前有缩放残留
              this.fingerNode.setScale(-Math.abs(s.x || 1), Math.abs(s.y || 1), Math.abs(s.z || 1));
            }
          } else if (this.fingerNode) {
            // 其他步骤保持正常朝向（x为正）
            var _s = this.fingerNode.scale;
            this.fingerNode.setScale(Math.abs(_s.x || 1), Math.abs(_s.y || 1), Math.abs(_s.z || 1));
          }
          var endPos = new Vec3(endPosX, endPosY, 0);

          // 确保位置正确
          this.fingerNode.setPosition(startPos);
          var duration = 0.5;
          if (this.currentGuideStep === 8) {
            duration = .8;
          }

          // 来回移动动画
          this.fingerTween = tween(this.fingerNode).to(duration, {
            position: endPos
          }, {
            easing: 'sineInOut'
          }).to(duration, {
            position: startPos
          }, {
            easing: 'sineInOut'
          }).union().repeatForever().start();
        }

        /**
         * 停止手指动画
         */;
        _proto.stopFingerAnimation = function stopFingerAnimation() {
          if (this.fingerTween) {
            this.fingerTween.stop();
            this.fingerTween = null;
          }
        }

        /**
         * 显示文本
         */;
        _proto.showText = function showText() {
          var _this5 = this;
          if (!this.textNode || !this.targetNode) return;

          // 延迟一帧，确保节点位置已更新
          this.scheduleOnce(function () {
            _this5.doShowText();
          }, 0);
        }

        /**
         * 执行显示文本
         */;
        _proto.doShowText = function doShowText() {
          if (!this.textNode || !this.targetNode || !this.textLabel) return;

          // 获取目标节点的世界位置
          this.targetNode.updateWorldTransform();
          var targetWorldPos = this.targetNode.getWorldPosition();
          var targetUITransform = this.targetNode.getComponent(UITransform);
          if (!targetUITransform) return;

          // 获取文本节点的父节点
          var parent = this.textNode.parent;
          if (!parent) return;

          // 更新父节点的世界变换矩阵
          parent.updateWorldTransform();
          var parentUITransform = parent.getComponent(UITransform);
          if (!parentUITransform) return;

          // 将目标节点的世界坐标转换为父节点的本地坐标
          var targetLocalPos = parentUITransform.convertToNodeSpaceAR(targetWorldPos);

          // 计算目标节点的中心位置（考虑锚点）
          var anchorPoint = targetUITransform.anchorPoint;
          var targetCenterX = targetLocalPos.x + (0.5 - anchorPoint.x) * targetUITransform.width;
          var targetCenterY = targetLocalPos.y + (0.5 - anchorPoint.y) * targetUITransform.height;

          // 文本位置：在目标节点上方
          var textOffsetY = targetUITransform.height / 2 + 120; // 在目标上方120像素
          this.textNode.setPosition(targetCenterX, targetCenterY + textOffsetY, 0);

          // 确保文本内容不为空，避免显示"Label"
          if (!this.textLabel.string || this.textLabel.string.trim() === '') {
            this.textLabel.string = '';
            // 如果文本为空，不显示节点
            this.textNode.active = false;
            return;
          }

          // 显示文本
          this.textNode.active = true;
        }

        /**
         * 隐藏文本
         */;
        _proto.hideText = function hideText() {
          if (this.textNode) {
            this.textNode.active = false;
          }
          // 确保清空文本，避免显示"Label"
          if (this.textLabel) {
            this.textLabel.string = '';
          }
        }

        /**
         * 设置父节点（通常为 Canvas 或 GameView 根节点）
         */;
        _proto.setParentNode = function setParentNode(parent) {
          if (this.maskNode && this.maskNode.parent !== parent) {
            parent.addChild(this.maskNode);
            // 确保蒙版在最上层
            this.maskNode.setSiblingIndex(9998);
            // 更新Widget对齐
            var widget = this.maskNode.getComponent(Widget);
            if (widget) {
              widget.updateAlignment();
            }
          }
          if (this.fingerNode && this.fingerNode.parent !== parent) {
            parent.addChild(this.fingerNode);
            // 确保手指在蒙版之上
            this.fingerNode.setSiblingIndex(9999);
          }
          if (this.textNode && this.textNode.parent !== parent) {
            parent.addChild(this.textNode);
            // 文本在最上层
            this.textNode.setSiblingIndex(10000);
          }
        };
        _proto.onDestroy = function onDestroy() {
          this.stopFingerAnimation();
        };
        return GuideManager;
      }(BasePrefab)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/HcSdk.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameControl.ts', './EnumConfig.ts', './EventName.ts', './MyLog.ts'], function (exports) {
  var _createClass, cclegacy, screen, GC, EStatType, EventName, MyLog;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      screen = module.screen;
    }, function (module) {
      GC = module.GC;
    }, function (module) {
      EStatType = module.EStatType;
    }, function (module) {
      EventName = module.EventName;
    }, function (module) {
      MyLog = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "993e7yqfP9C9ZH9hed6BBAG", "HcSdk", undefined);
      var HcSdk = exports('default', /*#__PURE__*/function () {
        function HcSdk() {}
        HcSdk.init = function init() {
          this.setGlobalListener();
          if (!this.isInited()) {
            MyLog.log('***初始化SDK***', this.initoption);
            // GC.sdk.clickStat(EStatType.hcSdk_init);
            HCSDK.init(this.initoption);
          }
        };
        HcSdk.setGlobalListener = function setGlobalListener() {
          var _this = this;
          // 设置全局监听
          HCSDK.setGlobalListener(function (code, data, err) {
            var CODE_OF_SDK_INIT_SUCCESS = 1000; // SDK初始化成功
            var CODE_OF_SDK_INIT_FAILURE = 1001; // SDK初始化失败
            var CODE_OF_LOGIN_SUCCESS = 2000; // 登录成功
            var CODE_OF_LOGIN_FAILURE = 2001; // 登录失败
            var CODE_OF_LOGIN_CANCEL = 2002; // 登录取消
            var CODE_OF_LOGOUT_SUCCESS = 3000; // 注销成功
            var CODE_OF_LOGOUT_FAILURE = 3001; // 注销失败
            var CODE_OF_PAY_SUCCESS = 4000; // 支付成功
            var CODE_OF_PAY_FAILURE = 4001; // 支付失败
            var CODE_OF_PAY_CANCEL = 4002; // 支付取消

            // code: 返回码（数据类型：number）
            // data: 返回数据（数据类型：object）
            // err: 返回错误（数据类型：object）
            switch (code) {
              case CODE_OF_SDK_INIT_SUCCESS:
                // SDK初始化成功
                {
                  MyLog.log('***初始化成功***');
                  // GC.sdk.clickStat(EStatType.hcSdk_login);
                  HCSDK.login();
                  HCSDK.preLoadRewardVideo({
                    adUnitId: GC.config.game.videoId
                  });
                  HCSDK.sendLoadingStartLog();
                }
                break;
              case CODE_OF_SDK_INIT_FAILURE:
                // SDK初始化失败
                {
                  console.error('***初始化失败***', JSON.stringify(err));
                  GC.sdk.clickStat(EStatType.hcSdk_init_err);
                  if (!_this.isInited()) {
                    HCSDK.init(_this.initoption);
                  }
                }
                break;
              case CODE_OF_LOGIN_SUCCESS:
                // 登录成功
                {
                  MyLog.log('***登录成功***', JSON.stringify(data));
                  GC.config.game.openId = data.open_id;
                  GC.config.game.pf_openid = data.pf_openid;
                  _this.getOnlineParam(function (res) {
                    GC.notify.post(EventName.login_sdk_suc, data.open_id, data.pf_openid);
                  });
                }
                break;
              case CODE_OF_LOGIN_FAILURE:
                // 登录失败
                {
                  console.error('***登录失败***', JSON.stringify(err));
                  GC.sdk.clickStat(EStatType.hcSdk_login_fail);
                  if (_this.loginErrTime == 0) {
                    _this.loginErrTime = 1;
                    HCSDK.login();
                  }
                }
                break;
              case CODE_OF_LOGIN_CANCEL:
                // 登录取消
                {
                  console.warn('***登录取消***');
                }
                break;
              case CODE_OF_LOGOUT_SUCCESS:
                // 注销成功
                {
                  MyLog.log('***注销成功***');
                }
                break;
              case CODE_OF_LOGOUT_FAILURE:
                // 注销失败
                {
                  console.error('***注销失败***', JSON.stringify(err));
                }
                break;
              case CODE_OF_PAY_SUCCESS:
                // 支付成功
                {
                  MyLog.log('***支付成功***');
                }
                break;
              case CODE_OF_PAY_FAILURE:
                // 支付失败
                {
                  console.error('***支付失败***', JSON.stringify(err));
                }
                break;
              case CODE_OF_PAY_CANCEL:
                // 支付取消
                {
                  console.warn('***支付取消***');
                }
                break;
            }
          });
        };
        HcSdk.preLoadBanner = function preLoadBanner() {
          if (GC.sdk.isPlatform) {
            var options = {
              adUnitId: GC.config.game.bannerId
            };
            var width = screen.windowSize.width;
            var height = 80;
            var left = screen.windowSize.width - width + 0.1;
            options.style = {
              top: 0,
              left: left,
              width: width,
              height: height
            };
            HCSDK.preLoadBanner(options);
          }
        };
        HcSdk.stageBegin = function stageBegin(stageId, event) {
          if (event === void 0) {
            event = '';
          }
          // if (WXApi.enable) {
          var opts = {
            stageId: stageId,
            event: event
          };
          HCSDK.stageBegin(opts);
          // }
        };

        HcSdk.stageEnd = function stageEnd(stageId, event) {
          if (event === void 0) {
            event = '';
          }
          // if (WXApi.enable) {
          var opts = {
            stageId: stageId,
            event: event
          };
          HCSDK.stageEnd(opts);
          // }
        };

        HcSdk.sendNoticeAction = function sendNoticeAction(noticeId, action, event) {
          if (event === void 0) {
            event = "";
          }
          var opts = {
            noticeId: noticeId,
            action: action,
            event: event
          };
          HCSDK.sendNoticeAction(opts);
        };
        HcSdk.sendWxAdxShowLog = function sendWxAdxShowLog(slot, ids) {
          HCSDK.sendWxAdxShowLog(slot, ids);
        };
        HcSdk.isInited = function isInited() {
          return HCSDK.isInited();
        };
        HcSdk.wxAdNavigate = function wxAdNavigate(slot, id, obj) {
          if (obj === void 0) {
            obj = null;
          }
          if (GC.sdk.isPlatform) {
            HCSDK.wxAdNavigate(slot, id, obj);
          }
        }

        //显示盒子
        ;

        HcSdk.showBoxAd = function showBoxAd(index) {
          if (index === void 0) {
            index = 0;
          }
          if (GC.config.game.debug) {
            return;
          }
          var options = {
            adUnitId: GC.config.game.boxId
          };
          HCSDK.showBoxAd(index, options, function (res) {});
        };
        HcSdk.showBanner = function showBanner(index, offsetY) {
          if (index === void 0) {
            index = 0;
          }
          HCSDK.hideBanner();
          var options = {
            adUnitId: GC.config.game.bannerId
          };

          //设置y轴位置
          var winsize = screen.windowSize;
          var width = winsize.width;
          var height = 80;
          var left = winsize.width - width + 0.1;
          options.adIntervals = 30;
          options.style = {
            top: 0,
            left: left,
            width: width,
            height: height
          };
          // MyLog.log('options ==>',options);
          HCSDK.showBanner(index, options);
        };
        HcSdk.hideBanner = function hideBanner() {
          if (GC.sdk.isWxOrDy) {
            HCSDK.hideBanner();
          }
        };
        HcSdk.share = function share(shareId, callback, query) {
          if (callback === void 0) {
            callback = null;
          }
          if (query === void 0) {
            query = '';
          }
          var params = GC.config.game.getShareParams(shareId, query);
          HCSDK.shareAppMessage({
            shareId: shareId,
            // 必填，分享位ID
            title: params.title,
            // 可选设置，自定义分享标题，优先级比设置scene中自动设置的title高
            imageUrl: params.imageUrl,
            // 可选设置，自定义分享标题，优先级比设置scene中自动设置的imageUrl高
            success: function success() {
              callback && callback(true);
            },
            fail: function fail() {
              callback && callback(false);
            },
            query: params.query,
            // 自行定义传入分享的参数
            delay: 3
          });
        };
        HcSdk.getOnlineParam = function getOnlineParam(callBack) {
          // GC.sdk.clickStat(EStatType.get_online_params);
          HCSDK.getOnlineParam().then(function (res) {
            MyLog.log("获取在线参数成功 ：");
            // GC.sdk.clickStat(EStatType.get_online_params_suc);
            GC.data.onlineParam.initData(res);
            callBack && callBack(res);
          })["catch"](function (err) {
            GC.sdk.clickStat(EStatType.get_online_params_fail);
            MyLog.log("获取在线参数失败 ：", err);
          });
        };
        HcSdk.msgSecCheck = function msgSecCheck(content, callBack) {
          if (GC.config.game.debug) {
            callBack && callBack(true);
            return;
          }
          MyLog.log("输入词-----", content);
          HCSDK.msgSecCheck(content).then(function (res) {
            MyLog.log("敏感词检测结果", res);
            callBack && callBack(res.pass);
          })["catch"](function (err) {
            MyLog.log("敏感词检测结果异常", err);
          });
        };
        _createClass(HcSdk, null, [{
          key: "initoption",
          get: function get() {
            return {
              app_id: GC.config.game.appId,
              app_key: GC.config.game.appKey,
              channel_id: GC.config.game.channelId,
              version: GC.config.game.version,
              // debug: GC.config.game.debug
              debug: true
            };
          }
        }]);
        return HcSdk;
      }());
      HcSdk.loginErrTime = 0;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/HttpLink.ts", ['cc', './EventName.ts', './ProtocolConfig.ts', './GameControl.ts', './MyLog.ts', './TimeUtils.ts', './Utils.ts'], function (exports) {
  var cclegacy, EventName, ProtocolName, GC, MyLog, timeUtils, Utils;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      EventName = module.EventName;
    }, function (module) {
      ProtocolName = module.ProtocolName;
    }, function (module) {
      GC = module.GC;
    }, function (module) {
      MyLog = module.default;
    }, function (module) {
      timeUtils = module.timeUtils;
    }, function (module) {
      Utils = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "10a5b46hVxBrJTMsVtsP/7i", "HttpLink", undefined);
      var HttpLink = exports('HttpLink', /*#__PURE__*/function () {
        // 15 seconds for timeout

        function HttpLink() {
          var _this = this;
          // private _sendQueue: Array<ISendInfo> = [];
          this._timeOut = 15000;
          this.onreadystatechange = function (xhr, sendInfo) {
            if (xhr.readyState === 4) {
              if (xhr.status >= 200 && xhr.status < 400) {
                if (sendInfo.showLoading) {
                  GC.scene.curScene.hideLoading();
                }
                _this.paraseResponse(xhr.responseText);
              } else {
                if (sendInfo.showLoading) {
                  GC.scene.curScene.hideLoading();
                }
                MyLog.error("http response status : " + xhr.status);
              }
            }
          };
          this.ontimeout = function (err, xhr, sendInfo) {
            MyLog.warn("request timeout...");
            if (sendInfo.showLoading) {
              GC.scene.curScene.hideLoading();
            }
            xhr.abort();
            // this.errorHander(sendInfo.msgId, sendInfo.params);
            GC.dialog.comTextTips('request timeout...');
          };
          this.onerror = function (err, xhr, sendInfo) {
            if (sendInfo.showLoading) {
              GC.scene.curScene.hideLoading();
            }
            MyLog.error("request error : " + err);
            // this.errorHander(sendInfo.msgId, sendInfo.params);
            // GC.dialog.comTextTips('request error');
          };
        } // setInterval(this.checkQueue)
        var _proto = HttpLink.prototype;
        _proto.reqServe = function reqServe(url, msgId, params, showLoading, showLoadingBg, isGet) {
          if (params === void 0) {
            params = {};
          }
          if (showLoading === void 0) {
            showLoading = true;
          }
          if (showLoadingBg === void 0) {
            showLoadingBg = false;
          }
          if (isGet === void 0) {
            isGet = false;
          }
          var sendInfo = {
            url: url,
            msgId: msgId,
            params: params,
            isGet: isGet,
            showLoading: showLoading,
            showLoadingBg: showLoadingBg
          };
          // this._sendQueue.push(sendInfo);
          this.send(sendInfo);
        }

        // checkQueue = () => {
        //     if (this._sendQueue.length) {
        //         this.send(this._sendQueue.shift());
        //     }
        // }
        ;

        _proto.getUrlParams = function getUrlParams(url, param) {
          if (param === void 0) {
            param = null;
          }
          if (!Utils.isNull(param)) {
            var paramStr = "";
            for (var key in param) {
              paramStr += GC.language.formatString("&{0}={1}", key, param[key]);
            }
            url += "?" + paramStr.substr(1);
          }
          return url;
        };
        _proto.send = function send(sendInfo) {
          var _this2 = this;
          if (sendInfo.showLoading) {
            GC.scene.curScene.showLoading(sendInfo.showLoadingBg);
          }
          var reqUrl = this.checkGetUrl(sendInfo);
          var xhr = new XMLHttpRequest();
          xhr.open(sendInfo.isGet ? "GET" : "POST", reqUrl);
          xhr.setRequestHeader("Content-Type", "application/json;charset=utf-8");
          xhr.onreadystatechange = function () {
            return _this2.onreadystatechange(xhr, sendInfo);
          };
          xhr.ontimeout = function (err) {
            return _this2.ontimeout(err, xhr, sendInfo);
          };
          xhr.onerror = function (err) {
            return _this2.onerror(err, xhr, sendInfo);
          };
          xhr.timeout = this._timeOut;

          // MyLog.log(`request(${sendInfo.isGet ? "GET" : "POST"}) : `, sendInfo.params);
          if (sendInfo.isGet) {
            xhr.send();
          } else {
            var jsonStr = JSON.stringify(sendInfo.params);
            xhr.send(jsonStr);
          }
        };
        _proto.checkGetUrl = function checkGetUrl(sendInfo) {
          var reqUrl = sendInfo.url + sendInfo.msgId;
          if (sendInfo.isGet) {
            reqUrl = this.getUrlParams(reqUrl, sendInfo.params);
          }
          return reqUrl;
        };
        _proto.paraseResponse = function paraseResponse(responseText) {
          var respone = this.paraseData(responseText);
          // MyLog.log(`response:===(${respone.code == 0 ? respone.msgId : "error"}):\n`, respone);
          if (respone.code == 0) {
            if (respone.time) {
              timeUtils.setNow(respone.time * 1000);
            }
            GC.notify.post(EventName.serverResponse, respone.msgId, respone.data);
          } else {
            GC.dialog.comTextTips(respone.msg);
          }
        };
        _proto.paraseData = function paraseData(responseText) {
          var respone = JSON.parse(responseText);
          if (respone.data && !Utils.isNull(respone.data.data)) {
            respone.data.data = JSON.parse(respone.data.data);
          }
          return respone;
        }

        /**
         * 网络错误处理
         */;
        _proto.errorHander = function errorHander(url, params) {
          MyLog.error("errorHander(" + url + ") : " + JSON.stringify(params));
          if (GC.sdk.isPlatform) {
            var tip = GC.language.getLocal("worn_net_relogin");
            GC.sdk.showModal(function () {
              GC.sdk.quit();
            }, tip);
          } else if (url == ProtocolName.LOGIN) {
            GC.dialog.comTextTips('worn_net_login');
          } else {
            GC.dialog.comTextTips('worn_net');
          }
        };
        return HttpLink;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/KsSdk.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameControl.ts', './MyLog.ts', './Utils.ts', './BaseSdk.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, GC, MyLog, Utils, BaseSdk;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      GC = module.GC;
    }, function (module) {
      MyLog = module.default;
    }, function (module) {
      Utils = module.default;
    }, function (module) {
      BaseSdk = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "2b16fJh0GFLLpiF0L2UYJOq", "KsSdk", undefined);
      var hideTime = 0;
      var KsSdk = exports('default', /*#__PURE__*/function (_BaseSdk) {
        _inheritsLoose(KsSdk, _BaseSdk);
        function KsSdk() {
          return _BaseSdk.apply(this, arguments) || this;
        }
        KsSdk.init = function init() {
          this.system_info = ks.getSystemInfoSync();
          this.option = ks.getLaunchOptionsSync();
          MyLog.green("current device system info  ", this.system_info);
          MyLog.green("current device option  ", this.option);
          this.initVideo();
        };
        KsSdk.getOffHeight = function getOffHeight() {
          var statusBarHeight = this.system_info.statusBarHeight;
          var model = this.system_info.model;
          var lowModel = model.toLowerCase();
          if (lowModel.indexOf('ana-an00') != -1) {
            // 华为p40Pro
            return 80;
          }
          MyLog.log('statusbar height =>', statusBarHeight);
          return statusBarHeight;
        }

        /** 后台时间 */;
        KsSdk.backgroundTime = /*#__PURE__*/
        function () {
          var _backgroundTime = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  return _context.abrupt("return", new Promise(function (resolve) {
                    var onShow = function onShow(res) {
                      ks.offShow(onShow);
                      var currentTime = new Date().getTime();
                      // AppLog.log("backgroundTime====>onShow", currentTime);
                      resolve(currentTime - hideTime);
                    };
                    ks.onShow(onShow);
                  }));
                case 1:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          function backgroundTime() {
            return _backgroundTime.apply(this, arguments);
          }
          return backgroundTime;
        }() /*** 登录 */;
        KsSdk.login = function login(callback) {
          MyLog.purple('开始登录1');
          ks.login({
            success: function success(login_data) {
              MyLog.purple('ksLogin-------', login_data);
              if (login_data.code) {
                callback && callback(login_data.code);
                // this.getSetting(login_data, callback)
              } else {
                MyLog.purple('登录失败！');
              }
            },
            fail: function fail(res) {
              MyLog.purple('开始登录失败', res);
              GC.dialog.comTextTips("worn_net_login");
            }
          });
        };
        KsSdk.getSetting = function getSetting(code, callback) {
          ks.getSetting({
            success: function success(res) {
              MyLog.purple('getSetting-------', res);
              if (res.authSetting['scope.userInfo']) {
                // 已经授权，可以直接调用 getUserInfo 获取头像昵称
                KsSdk.getUserInfo(code, callback);
              } else {
                // ks.authorize({ scope: "scope.userInfo" })
                KsSdk.loginSuc(null, code, callback);
                // WxSdk.createUserInfoButton(code, callback);
              }
            }
          });
        };

        KsSdk.openSetting = function openSetting(callback) {
          ks.openSetting({
            success: function success(res) {
              MyLog.log("success2::" + JSON.stringify(res));
              if (res.authSetting['scope.userInfo']) {
                callback && callback();
              }
            }
          });
        };
        KsSdk.getUserInfo = function getUserInfo(code, callback) {
          ks.getUserInfo({
            withCredentials: true,
            success: function success(res) {
              MyLog.purple('getUserInfo-------', res);
              KsSdk.loginSuc(res, code, callback);
            }
          });
        };
        KsSdk.getAuthorizeUserInfo = function getAuthorizeUserInfo(callBack) {
          ks.getSetting({
            success: function success(res) {
              MyLog.purple('getSetting-------', res);
              if (res.authSetting['scope.userInfo']) {
                callBack && callBack(true);
              } else {
                callBack && callBack(false);
              }
            }
          });
        };
        KsSdk.loginSuc = function loginSuc(res, code, callback) {
          callback && callback(code, res);
        };
        KsSdk.bindOpenId = function bindOpenId(code, openId, sucCB) {
          var _this = this;
          MyLog.green("ks bindOpenId", code, openId);
          var xhr = new XMLHttpRequest();
          xhr.open("POST", "https://xsdk.jilaihuyu.com/game/kuaishou/login");
          xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
          xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 400) {
              var respone = JSON.parse(xhr.responseText);
              MyLog.blue("ks bind response : ", respone);
              if (respone.err_code == 0) {
                _this._ksOpenId = respone.result.openid;
                sucCB && sucCB(respone.result.openid);
              } else {
                GC.dialog.comTextTips(respone.err_msg);
              }
            }
          };
          xhr.ontimeout = function (err) {
            return MyLog.error("ks bind request timeout : " + err);
          };
          xhr.onerror = function (err) {
            return MyLog.error("ks bind request error : " + err);
          };
          xhr.timeout = 15000;
          var jsonStr = "appid=" + GC.config.game.appId_platform + "&other=" + JSON.stringify(GC.sdk.option.query);
          code && (jsonStr += "&code=" + code);
          openId && (jsonStr += "&openid=" + openId);
          xhr.send(jsonStr);
        };
        KsSdk.initVideo = function initVideo(multiton) {
          var _this2 = this;
          if (multiton === void 0) {
            multiton = true;
          }
          MyLog.green("ks initVideo");
          this.resetVideo(multiton);
          if (this._rewardedVideoAd) {
            this._rewardedVideoAd.onClose(function (res) {
              MyLog.green("ks video close");
              // 用户点击了【关闭广告】按钮
              if (res && res.isEnded) {
                // 正常播放结束，可以下发游戏奖励
                if (res.count) {
                  _this2._showVideoSuc && _this2._showVideoSuc(true, res.count);
                }
              } else {
                // 播放中途退出，不下发游戏奖励
                _this2._showVideoSuc && _this2._showVideoSuc(false);
              }
            });
            this._rewardedVideoAd.onError(function (res) {
              // 激励视频广告Error事件
              MyLog.green("ks video error", res);
              _this2._showVideoSuc && _this2._showVideoSuc(false);
            });
          } else {
            MyLog.log("创建激励视频组件失败");
          }
        };
        KsSdk.resetVideo = function resetVideo(multiton) {
          if (multiton === void 0) {
            multiton = true;
          }
          MyLog.green("ks resetVideo start : ", multiton);
          var param = {};
          param.adUnitId = "2300006347_01";
          param.multiton = multiton; //需要注意再看一个生效的版本11.11.40
          param.multitonRewardMsg = ['在看一个~'];
          param.multitonRewardTimes = 1;
          param.progressTip = false;
          this._rewardedVideoAd = ks.createRewardedVideoAd(param);
          MyLog.green("ks resetVideo end");
        };
        KsSdk.showVideo = function showVideo(sucCB, mul) {
          if (mul === void 0) {
            mul = 1;
          }
          MyLog.green("ks showVideo : ", mul);
          this._showVideoSuc = sucCB;
          this.resetVideo(mul > 1);
          this.reportVideo();
          MyLog.green("ks showVideo : show");
          var p = this._rewardedVideoAd.show();
          p.then(function (result) {
            // 激励视频展示成功
            MyLog.log("show rewarded video ad success, result is " + result);
          })["catch"](function (error) {
            // 激励视频展示失败
            MyLog.log("show rewarded video ad failed, error is " + error);
          });
        }

        // 视频上报
        ;

        KsSdk.reportVideo = function reportVideo() {
          MyLog.green("ks reportVideo");
          var xhr = new XMLHttpRequest();
          xhr.open("POST", "https://xsdk.jilaihuyu.com/game/kuaishou/adreport");
          xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
          xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 400) {
              var respone = JSON.parse(xhr.responseText);
              MyLog.green("response:=== reportVideo :\n", respone);
              if (respone.err_code == 0) {
                // 上报成功
                // sucCB && sucCB(respone.result.openid);
                MyLog.green("ks reportVideo suc");
              } else {
                GC.dialog.comTextTips(respone.err_msg);
              }
            }
          };
          xhr.ontimeout = function (err) {
            return MyLog.error("ks report video timeout error : " + err);
          };
          xhr.onerror = function (err) {
            return MyLog.error("ks report video request error : " + err);
          };
          xhr.timeout = 15000;
          var jsonStr = "openid=" + this._ksOpenId + "&appid=" + GC.config.game.appId_platform;
          MyLog.blue("request reportVideo : ", jsonStr);
          xhr.send(jsonStr);
        };
        KsSdk.authorize = function authorize(sucCB) {
          MyLog.log(" 开始 authorize:");
          ks.authorize({
            scope: "scope.userInfo",
            success: function success(res) {
              MyLog.log("success::" + JSON.stringify(res));
              sucCB && sucCB();
            },
            fail: function fail(err) {
              MyLog.log(" authorize fail:" + JSON.stringify(err));
              if (err.errMsg === "authorize:fail auth deny") {
                KsSdk.showModal(function (res) {
                  if (res.confirm) {
                    KsSdk.openSetting(sucCB);
                  }
                }, "排行榜需获取用户信息，请您确定重新获取授权");
              }
            }
          });
        };
        KsSdk.share = function share(shareId, callback, query, channel, extra) {
          if (callback === void 0) {
            callback = null;
          }
          if (query === void 0) {
            query = '';
          }
          ks.shareAppMessage({
            query: "userId=" + GC.data.user.user_id + "&shareId=" + shareId + (Utils.isNull(query) ? "" : "&" + query),
            success: function success(res) {
              MyLog.log("=====分享成功///////////////////", res);
              callback && callback(true);
            },
            fail: function fail(res) {
              MyLog.log("=====分享失败///////////////////", res);
              callback && callback(false);
            }
          });
        }

        //震动
        ;

        KsSdk.vibrate = function vibrate() {
          //heavy、medium、light
          ks.vibrateShort();
        }

        // 添加桌面
        ;

        KsSdk.addShortcut = function addShortcut(sucCB) {
          ks.addShortcut({
            success: function success() {
              MyLog.log("添加桌面成功");
              sucCB && sucCB(true);
            },
            fail: function fail(err) {
              MyLog.log("添加桌面失败", err.msg);
              GC.dialog.comTextTips("添加桌面失败");
              sucCB && sucCB(false);
            }
          });
        }
        // 检测是否已经添加桌面
        ;

        KsSdk.checkShortcut = function checkShortcut(sucCB) {
          ks.checkShortcut({
            success: function success(res) {
              MyLog.log("checkShortcut suc-----", res.installed);
              sucCB && sucCB(res.installed);
            },
            fail: function fail(res) {
              MyLog.log("checkShortcut fail-----", res);
              sucCB && sucCB(false);
            }
          });
        }
        // 是否从添加的桌面中启动
        ;

        KsSdk.isLaunchFromShortcut = function isLaunchFromShortcut() {
          return ks.isLaunchFromShortcut();
        }

        // 设为常用
        ;

        KsSdk.addCommonUse = function addCommonUse(sucCB) {
          ks.addCommonUse({
            success: function success() {
              MyLog.log("设为常用成功");
              sucCB && sucCB(true);
            },
            fail: function fail(err) {
              MyLog.log("设为常用失败", err.msg);
              GC.dialog.comTextTips("设为常用失败");
              sucCB && sucCB(false);
            }
          });
        }
        // 检测是否已经设为常用
        ;

        KsSdk.checkCommonUse = /*#__PURE__*/
        function () {
          var _checkCommonUse = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(sucCB) {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  ks.checkCommonUse({
                    success: function success(res) {
                      MyLog.log("checkCommonUse suc-----", res.isCommonUse);
                      sucCB && sucCB(res.isCommonUse);
                    },
                    fail: function fail(res) {
                      MyLog.log("checkCommonUse fail-----", res);
                      sucCB && sucCB(false);
                    }
                  });
                case 1:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          }));
          function checkCommonUse(_x) {
            return _checkCommonUse.apply(this, arguments);
          }
          return checkCommonUse;
        }();
        KsSdk.showModal = function showModal(callFunc, content, showCancel, title, sureTxt) {
          if (callFunc === void 0) {
            callFunc = null;
          }
          if (showCancel === void 0) {
            showCancel = false;
          }
          if (title === void 0) {
            title = '提示';
          }
          if (sureTxt === void 0) {
            sureTxt = '确定';
          }
          ks.showModal({
            title: title,
            content: content,
            showCancel: showCancel,
            confirmText: sureTxt,
            success: function success(res) {
              if (res.confirm) {
                MyLog.log('用户点击确定');
              } else if (res.cancel) {
                MyLog.log('用户点击取消');
              }
              callFunc && callFunc(res);
            }
          });
        };
        KsSdk.quit = function quit() {
          tt.exitMiniProgram();
        };
        KsSdk.restart = function restart() {
          tt.restartMiniProgram({});
        };
        return KsSdk;
      }(BaseSdk));
      KsSdk._rewardedVideoAd = null;
      KsSdk._ksOpenId = null;
      KsSdk._showVideoSuc = null;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LanguageManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cn_sensitive.ts', './cn_text.ts', './GameControl.ts', './Utils.ts'], function (exports) {
  var _createClass, cclegacy, cn_shield, cn_text, GC, Utils;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      cn_shield = module.default;
    }, function (module) {
      cn_text = module.default;
    }, function (module) {
      GC = module.GC;
    }, function (module) {
      Utils = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "3b2a7j4nNBKErbliiqxadea", "LanguageManager", undefined);
      var ILanguageType = exports('ILanguageType', /*#__PURE__*/function (ILanguageType) {
        ILanguageType["CN"] = "cn";
        ILanguageType["EN"] = "en";
        return ILanguageType;
      }({}));
      var LanguageManager = exports('LanguageManager', /*#__PURE__*/function () {
        function LanguageManager() {
          this._languageListMap = new Map();
          this._sensitiveListMap = new Map();
          // 语言适配
          this.languageKey = "LanguageKey";
          // 用于 语言设置 本地存储的key
          this._language = ILanguageType.CN;
          this.registerLanguage();
        }
        var _proto = LanguageManager.prototype;
        _proto.registerLanguage = function registerLanguage() {
          this._languageListMap.set(ILanguageType.CN, this.getMapByObject(cn_text));
          this._sensitiveListMap.set(ILanguageType.CN, cn_shield);
        };
        _proto.getMapByObject = function getMapByObject(obj) {
          var list = [];
          for (var key in obj) {
            list.push([key, obj[key]]);
          }
          return new Map(list);
        };
        _proto.getLocal = function getLocal(key) {
          var _this$languageList;
          var str = (_this$languageList = this.languageList) == null ? void 0 : _this$languageList.get(key);
          for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            params[_key - 1] = arguments[_key];
          }
          if (!Boolean(str)) {
            str = "缺少字段:" + key;
          } else if (params && params.length) {
            str = this.formatString.apply(this, [str].concat(params));
          }
          return str;
        };
        _proto.formatString = function formatString(localValue) {
          var _this = this;
          for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            params[_key2 - 1] = arguments[_key2];
          }
          if (params.length) {
            params.forEach(function (value, index) {
              var _this$languageList2;
              var paramStr = String(value);
              var str = (_this$languageList2 = _this.languageList) == null ? void 0 : _this$languageList2.get(paramStr);
              if (Boolean(str)) {
                paramStr = str;
              }
              var needReplaceStr = "{" + index + "}";
              while (localValue.indexOf(needReplaceStr) != -1) {
                localValue = localValue.replace(needReplaceStr, paramStr);
              }
            });
          }
          return localValue;
        }

        /**
         * 是否有屏蔽字
         * @param str 
         */;
        _proto.checkShield = function checkShield(str) {
          var targetStr = str.toUpperCase();
          var aaa = this.sensitiveList;
          for (var index = 0; index < aaa.length; index++) {
            var element = aaa[index];
            if (targetStr.indexOf(element.toUpperCase(), 0) != -1) {
              return true;
            }
          }
          return false;
        }

        /**
         * 检查文本字节数，汉字占2位，字母占1位
         * @param str 
         * @param char 是否按字节计算长度
         */;
        _proto.getStrLen = function getStrLen(str, _char) {
          if (_char === void 0) {
            _char = true;
          }
          var realLength = 0,
            len = str.length,
            charCode = -1;
          for (var i = 0; i < len; i++) {
            if (_char) {
              charCode = str.charCodeAt(i);
              if (charCode >= 0 && charCode <= 128) realLength += 1;else realLength += 2;
            } else {
              realLength += 1;
            }
          }
          return realLength;
        }

        /**
         * 检查文本字节数，截取一定长度的字符
         * @param str 
         * @param count 截取长度 
         * @param replaceStr 字符串最后以什么符号链接   
         * @param char 是否按字节计算长度
         */;
        _proto.getStrByLen = function getStrByLen(str, count, replaceStr, _char2) {
          if (replaceStr === void 0) {
            replaceStr = "...";
          }
          if (_char2 === void 0) {
            _char2 = true;
          }
          str = str.trim();
          var realLength = 0,
            len = str.length,
            charCode = -1,
            curLen = 0;
          for (var i = 0; i < len; i++) {
            curLen = 1;
            if (_char2) {
              charCode = str.charCodeAt(i);
              if (charCode >= 0 && charCode <= 128) curLen = 1;else curLen = 2;
            }
            realLength += curLen;
            if (realLength > count) {
              if (Utils.isNull(replaceStr)) {
                str = str.substr(0, i);
              } else {
                str = str.substring(0, i - 1) + replaceStr;
              }
              break;
            }
          }
          return str;
        };
        _createClass(LanguageManager, [{
          key: "language",
          get: function get() {
            // if (this._language == null) {
            //     this._language = <ILanguageType>GC.localStore.getItem(this.languageKey, ILanguageType.CN);
            // }
            return this._language;
          },
          set: function set(lan) {
            this._language = lan;
            GC.localStore.setItem(this.languageKey, this._language);
          }
        }, {
          key: "sensitiveList",
          get: function get() {
            return this._sensitiveListMap.get(this.language);
          }
        }, {
          key: "languageList",
          get: function get() {
            return this._languageListMap.get(this.language);
          }
        }]);
        return LanguageManager;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/List.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './env', './ListItem.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, ScrollView, Enum, Node, Prefab, CCFloat, EventHandler, CCBoolean, CCInteger, isValid, UITransform, Layout, instantiate, NodePool, Vec3, Size, Widget, tween, Event, Component, DEV, ListItem;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      ScrollView = module.ScrollView;
      Enum = module.Enum;
      Node = module.Node;
      Prefab = module.Prefab;
      CCFloat = module.CCFloat;
      EventHandler = module.EventHandler;
      CCBoolean = module.CCBoolean;
      CCInteger = module.CCInteger;
      isValid = module.isValid;
      UITransform = module.UITransform;
      Layout = module.Layout;
      instantiate = module.instantiate;
      NodePool = module.NodePool;
      Vec3 = module.Vec3;
      Size = module.Size;
      Widget = module.Widget;
      tween = module.tween;
      Event = module.Event;
      Component = module.Component;
    }, function (module) {
      DEV = module.DEV;
    }, function (module) {
      ListItem = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17;
      cclegacy._RF.push({}, "61c33qlGp1Kbo2oXE64mKQ1", "List", undefined);
      /******************************************
       * @author kL <klk0@qq.com>
       * @date 2020/12/9
       * @doc 列表组件.
       * @end
       ******************************************/
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        disallowMultiple = _decorator.disallowMultiple,
        menu = _decorator.menu,
        executionOrder = _decorator.executionOrder,
        requireComponent = _decorator.requireComponent;
      var TemplateType = /*#__PURE__*/function (TemplateType) {
        TemplateType[TemplateType["NODE"] = 1] = "NODE";
        TemplateType[TemplateType["PREFAB"] = 2] = "PREFAB";
        return TemplateType;
      }(TemplateType || {});
      var SlideType = /*#__PURE__*/function (SlideType) {
        SlideType[SlideType["NORMAL"] = 1] = "NORMAL";
        SlideType[SlideType["ADHERING"] = 2] = "ADHERING";
        SlideType[SlideType["PAGE"] = 3] = "PAGE";
        return SlideType;
      }(SlideType || {}); //页面模式，将强制关闭滚动惯性
      var SelectedType = /*#__PURE__*/function (SelectedType) {
        SelectedType[SelectedType["NONE"] = 0] = "NONE";
        SelectedType[SelectedType["SINGLE"] = 1] = "SINGLE";
        SelectedType[SelectedType["MULT"] = 2] = "MULT";
        return SelectedType;
      }(SelectedType || {}); //多选
      var List = exports('default', (_dec = disallowMultiple(), _dec2 = menu('List'), _dec3 = requireComponent(ScrollView), _dec4 = executionOrder(-5000), _dec5 = property({
        type: Enum(TemplateType),
        tooltip: DEV
      }), _dec6 = property({
        type: Node,
        tooltip: DEV,
        visible: function visible() {
          return this.templateType == TemplateType.NODE;
        }
      }), _dec7 = property({
        type: Prefab,
        tooltip: DEV,
        visible: function visible() {
          return this.templateType == TemplateType.PREFAB;
        }
      }), _dec8 = property({}), _dec9 = property({
        type: Enum(SlideType),
        tooltip: DEV
      }), _dec10 = property({
        type: CCFloat,
        range: [0, 1, .1],
        tooltip: DEV,
        slide: true,
        visible: function visible() {
          return this._slideMode == SlideType.PAGE;
        }
      }), _dec11 = property({
        type: EventHandler,
        tooltip: DEV,
        visible: function visible() {
          return this._slideMode == SlideType.PAGE;
        }
      }), _dec12 = property({}), _dec13 = property({
        type: CCBoolean,
        tooltip: DEV
      }), _dec14 = property({
        tooltip: DEV,
        visible: function visible() {
          var val = /*this.virtual &&*/this.slideMode == SlideType.NORMAL;
          if (!val) this.cyclic = false;
          return val;
        }
      }), _dec15 = property({
        tooltip: DEV,
        visible: function visible() {
          return this.virtual;
        }
      }), _dec16 = property({
        tooltip: DEV,
        visible: function visible() {
          var val = this.virtual && !this.lackCenter;
          if (!val) this.lackSlide = false;
          return val;
        }
      }), _dec17 = property({
        type: CCInteger
      }), _dec18 = property({
        type: CCInteger,
        range: [0, 6, 1],
        tooltip: DEV,
        slide: true
      }), _dec19 = property({
        type: CCInteger,
        range: [0, 12, 1],
        tooltip: DEV,
        slide: true
      }), _dec20 = property({
        type: EventHandler,
        tooltip: DEV
      }), _dec21 = property({
        type: Enum(SelectedType),
        tooltip: DEV
      }), _dec22 = property({
        type: EventHandler,
        tooltip: DEV,
        visible: function visible() {
          return this.selectedMode > SelectedType.NONE;
        }
      }), _dec23 = property({
        tooltip: DEV,
        visible: function visible() {
          return this.selectedMode == SelectedType.SINGLE;
        }
      }), _dec24 = property({
        serializable: false
      }), ccclass(_class = _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(List, _Component);
        function List() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //模板类型
          _initializerDefineProperty(_this, "templateType", _descriptor, _assertThisInitialized(_this));
          //模板Item（Node）
          _initializerDefineProperty(_this, "tmpNode", _descriptor2, _assertThisInitialized(_this));
          //模板Item（Prefab）
          _initializerDefineProperty(_this, "tmpPrefab", _descriptor3, _assertThisInitialized(_this));
          //滑动模式
          _initializerDefineProperty(_this, "_slideMode", _descriptor4, _assertThisInitialized(_this));
          //翻页作用距离
          _initializerDefineProperty(_this, "pageDistance", _descriptor5, _assertThisInitialized(_this));
          //页面改变事件
          _initializerDefineProperty(_this, "pageChangeEvent", _descriptor6, _assertThisInitialized(_this));
          //是否为虚拟列表（动态列表）
          _initializerDefineProperty(_this, "_virtual", _descriptor7, _assertThisInitialized(_this));
          //是否为循环列表
          _initializerDefineProperty(_this, "cyclic", _descriptor8, _assertThisInitialized(_this));
          //缺省居中
          _initializerDefineProperty(_this, "lackCenter", _descriptor9, _assertThisInitialized(_this));
          //缺省可滑动
          _initializerDefineProperty(_this, "lackSlide", _descriptor10, _assertThisInitialized(_this));
          //刷新频率
          _initializerDefineProperty(_this, "_updateRate", _descriptor11, _assertThisInitialized(_this));
          //分帧渲染（每帧渲染的Item数量（<=0时关闭分帧渲染））
          _initializerDefineProperty(_this, "frameByFrameRenderNum", _descriptor12, _assertThisInitialized(_this));
          //渲染事件（渲染器）
          _initializerDefineProperty(_this, "renderEvent", _descriptor13, _assertThisInitialized(_this));
          //选择模式
          _initializerDefineProperty(_this, "selectedMode", _descriptor14, _assertThisInitialized(_this));
          //触发选择事件
          _initializerDefineProperty(_this, "selectedEvent", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "repeatEventSingle", _descriptor16, _assertThisInitialized(_this));
          //当前选择id
          _this._selectedId = -1;
          _this._lastSelectedId = void 0;
          _this.multSelected = void 0;
          _this._forceUpdate = false;
          _this._align = void 0;
          _this._horizontalDir = void 0;
          _this._verticalDir = void 0;
          _this._startAxis = void 0;
          _this._alignCalcType = void 0;
          _this.content = void 0;
          _this._contentUt = void 0;
          _this.firstListId = void 0;
          _this.displayItemNum = void 0;
          _this._updateDone = true;
          _this._updateCounter = void 0;
          _this._actualNumItems = void 0;
          _this._cyclicNum = void 0;
          _this._cyclicPos1 = void 0;
          _this._cyclicPos2 = void 0;
          //列表数量
          _initializerDefineProperty(_this, "_numItems", _descriptor17, _assertThisInitialized(_this));
          _this._inited = false;
          _this._scrollView = void 0;
          _this._layout = void 0;
          _this._resizeMode = void 0;
          _this._topGap = void 0;
          _this._rightGap = void 0;
          _this._bottomGap = void 0;
          _this._leftGap = void 0;
          _this._columnGap = void 0;
          _this._lineGap = void 0;
          _this._colLineNum = void 0;
          _this._lastDisplayData = void 0;
          _this.displayData = void 0;
          _this._pool = void 0;
          _this._itemTmp = void 0;
          _this._itemTmpUt = void 0;
          _this._needUpdateWidget = false;
          _this._itemSize = void 0;
          _this._sizeType = void 0;
          _this._customSize = void 0;
          _this.frameCount = void 0;
          _this._aniDelRuning = false;
          _this._aniDelCB = void 0;
          _this._aniDelItem = void 0;
          _this._aniDelBeforePos = void 0;
          _this._aniDelBeforeScale = void 0;
          _this.viewTop = void 0;
          _this.viewRight = void 0;
          _this.viewBottom = void 0;
          _this.viewLeft = void 0;
          _this._doneAfterUpdate = false;
          _this.elasticTop = void 0;
          _this.elasticRight = void 0;
          _this.elasticBottom = void 0;
          _this.elasticLeft = void 0;
          _this.scrollToListId = void 0;
          _this.adhering = false;
          _this._adheringBarrier = false;
          _this.nearestListId = void 0;
          _this.curPageNum = 0;
          _this._beganPos = void 0;
          _this._scrollPos = void 0;
          _this._curScrollIsTouch = void 0;
          //当前滑动是否为手动
          _this._scrollToListId = void 0;
          _this._scrollToEndTime = void 0;
          _this._scrollToSo = void 0;
          _this._lack = void 0;
          _this._allItemSize = void 0;
          _this._allItemSizeNoEdge = void 0;
          _this._scrollItem = void 0;
          //当前控制 ScrollView 滚动的 Item
          _this._thisNodeUt = void 0;
          return _this;
        }
        var _proto = List.prototype;
        //----------------------------------------------------------------------------
        _proto.onLoad = function onLoad() {
          this._init();
        };
        _proto.onDestroy = function onDestroy() {
          var t = this;
          if (isValid(t._itemTmp)) t._itemTmp.destroy();
          if (isValid(t.tmpNode)) t.tmpNode.destroy();
          t._pool && t._pool.clear();
        };
        _proto.onEnable = function onEnable() {
          // if (!EDITOR) 
          this._registerEvent();
          this._init();
          // 处理重新显示后，有可能上一次的动画移除还未播放完毕，导致动画卡住的问题
          if (this._aniDelRuning) {
            this._aniDelRuning = false;
            if (this._aniDelItem) {
              if (this._aniDelBeforePos) {
                this._aniDelItem.position = this._aniDelBeforePos;
                delete this._aniDelBeforePos;
              }
              if (this._aniDelBeforeScale) {
                this._aniDelItem.scale = this._aniDelBeforeScale;
                delete this._aniDelBeforeScale;
              }
              delete this._aniDelItem;
            }
            if (this._aniDelCB) {
              this._aniDelCB();
              delete this._aniDelCB;
            }
          }
        };
        _proto.onDisable = function onDisable() {
          // if (!EDITOR) 
          this._unregisterEvent();
        }
        //注册事件
        ;

        _proto._registerEvent = function _registerEvent() {
          var t = this;
          t.node.on(Node.EventType.TOUCH_START, t._onTouchStart, t);
          t.node.on('touch-up', t._onTouchUp, t);
          t.node.on(Node.EventType.TOUCH_CANCEL, t._onTouchCancelled, t);
          t.node.on('scroll-began', t._onScrollBegan, t);
          t.node.on('scroll-ended', t._onScrollEnded, t);
          t.node.on('scrolling', t._onScrolling, t);
          t.node.on(Node.EventType.SIZE_CHANGED, t._onSizeChanged, t);
        }
        //卸载事件
        ;

        _proto._unregisterEvent = function _unregisterEvent() {
          var t = this;
          t.node.off(Node.EventType.TOUCH_START, t._onTouchStart, t);
          t.node.off('touch-up', t._onTouchUp, t);
          t.node.off(Node.EventType.TOUCH_CANCEL, t._onTouchCancelled, t);
          t.node.off('scroll-began', t._onScrollBegan, t);
          t.node.off('scroll-ended', t._onScrollEnded, t);
          t.node.off('scrolling', t._onScrolling, t);
          t.node.off(Node.EventType.SIZE_CHANGED, t._onSizeChanged, t);
        }
        //初始化各种..
        ;

        _proto._init = function _init() {
          var t = this;
          if (t._inited) return;
          t._thisNodeUt = t.node.getComponent(UITransform);
          t._scrollView = t.node.getComponent(ScrollView);
          t.content = t._scrollView.content;
          t._contentUt = t.content.getComponent(UITransform);
          if (!t.content) {
            console.error(t.node.name + "'s ScrollView unset content!");
            return;
          }
          t._layout = t.content.getComponent(Layout);
          t._align = t._layout.type; //排列模式
          t._resizeMode = t._layout.resizeMode; //自适应模式
          t._startAxis = t._layout.startAxis;
          t._topGap = t._layout.paddingTop; //顶边距
          t._rightGap = t._layout.paddingRight; //右边距
          t._bottomGap = t._layout.paddingBottom; //底边距
          t._leftGap = t._layout.paddingLeft; //左边距

          t._columnGap = t._layout.spacingX; //列距
          t._lineGap = t._layout.spacingY; //行距

          t._colLineNum; //列数或行数（非GRID模式则=1，表示单列或单行）;

          t._verticalDir = t._layout.verticalDirection; //垂直排列子节点的方向
          t._horizontalDir = t._layout.horizontalDirection; //水平排列子节点的方向

          t.setTemplateItem(instantiate(t.templateType == TemplateType.PREFAB ? t.tmpPrefab : t.tmpNode));

          // 特定的滑动模式处理
          if (t._slideMode == SlideType.ADHERING || t._slideMode == SlideType.PAGE) {
            t._scrollView.inertia = false;
            t._scrollView._onMouseWheel = function () {
              return;
            };
          }
          if (!t.virtual)
            // lackCenter 仅支持 Virtual 模式
            t.lackCenter = false;
          t._lastDisplayData = []; //最后一次刷新的数据
          t.displayData = []; //当前数据
          t._pool = new NodePool(); //这是个池子..
          t._forceUpdate = false; //是否强制更新
          t._updateCounter = 0; //当前分帧渲染帧数
          t._updateDone = true; //分帧渲染是否完成

          t.curPageNum = 0; //当前页数

          if (t.cyclic || 0) {
            t._scrollView._processAutoScrolling = this._processAutoScrolling.bind(t);
            t._scrollView._startBounceBackIfNeeded = function () {
              return false;
            };
          }
          switch (t._align) {
            case Layout.Type.HORIZONTAL:
              {
                switch (t._horizontalDir) {
                  case Layout.HorizontalDirection.LEFT_TO_RIGHT:
                    t._alignCalcType = 1;
                    break;
                  case Layout.HorizontalDirection.RIGHT_TO_LEFT:
                    t._alignCalcType = 2;
                    break;
                }
                break;
              }
            case Layout.Type.VERTICAL:
              {
                switch (t._verticalDir) {
                  case Layout.VerticalDirection.TOP_TO_BOTTOM:
                    t._alignCalcType = 3;
                    break;
                  case Layout.VerticalDirection.BOTTOM_TO_TOP:
                    t._alignCalcType = 4;
                    break;
                }
                break;
              }
            case Layout.Type.GRID:
              {
                switch (t._startAxis) {
                  case Layout.AxisDirection.HORIZONTAL:
                    switch (t._verticalDir) {
                      case Layout.VerticalDirection.TOP_TO_BOTTOM:
                        t._alignCalcType = 3;
                        break;
                      case Layout.VerticalDirection.BOTTOM_TO_TOP:
                        t._alignCalcType = 4;
                        break;
                    }
                    break;
                  case Layout.AxisDirection.VERTICAL:
                    switch (t._horizontalDir) {
                      case Layout.HorizontalDirection.LEFT_TO_RIGHT:
                        t._alignCalcType = 1;
                        break;
                      case Layout.HorizontalDirection.RIGHT_TO_LEFT:
                        t._alignCalcType = 2;
                        break;
                    }
                    break;
                }
                break;
              }
          }
          // 清空 content
          // t.content.children.forEach((child: Node) => {
          //     child.removeFromParent();
          //     if (child != t.tmpNode && child.isValid)
          //         child.destroy();
          // });
          t.content.removeAllChildren();
          t._inited = true;
        }
        /**
         * 为了实现循环列表，必须覆写cc.ScrollView的某些函数
         * @param {Number} dt
         */;
        _proto._processAutoScrolling = function _processAutoScrolling(dt) {
          // ------------- scroll-view 里定义的一些常量 -------------
          var OUT_OF_BOUNDARY_BREAKING_FACTOR = 0.05;
          var EPSILON = 1e-4;
          var ZERO = new Vec3();
          var quintEaseOut = function quintEaseOut(time) {
            time -= 1;
            return time * time * time * time * time + 1;
          };
          // ------------- scroll-view 里定义的一些常量 -------------

          var sv = this._scrollView;
          var isAutoScrollBrake = sv['_isNecessaryAutoScrollBrake']();
          var brakingFactor = isAutoScrollBrake ? OUT_OF_BOUNDARY_BREAKING_FACTOR : 1;
          sv['_autoScrollAccumulatedTime'] += dt * (1 / brakingFactor);
          var percentage = Math.min(1, sv['_autoScrollAccumulatedTime'] / sv['_autoScrollTotalTime']);
          if (sv['_autoScrollAttenuate']) {
            percentage = quintEaseOut(percentage);
          }
          var clonedAutoScrollTargetDelta = sv['_autoScrollTargetDelta'].clone();
          clonedAutoScrollTargetDelta.multiplyScalar(percentage);
          var clonedAutoScrollStartPosition = sv['_autoScrollStartPosition'].clone();
          clonedAutoScrollStartPosition.add(clonedAutoScrollTargetDelta);
          var reachedEnd = Math.abs(percentage - 1) <= EPSILON;
          var fireEvent = Math.abs(percentage - 1) <= sv['getScrollEndedEventTiming']();
          if (fireEvent && !sv['_isScrollEndedWithThresholdEventFired']) {
            sv['_dispatchEvent'](ScrollView.EventType.SCROLL_ENG_WITH_THRESHOLD);
            sv['_isScrollEndedWithThresholdEventFired'] = true;
          }
          if (sv['elastic']) {
            var brakeOffsetPosition = clonedAutoScrollStartPosition.clone();
            brakeOffsetPosition.subtract(sv['_autoScrollBrakingStartPosition']);
            if (isAutoScrollBrake) {
              brakeOffsetPosition.multiplyScalar(brakingFactor);
            }
            clonedAutoScrollStartPosition.set(sv['_autoScrollBrakingStartPosition']);
            clonedAutoScrollStartPosition.add(brakeOffsetPosition);
          } else {
            var moveDelta = clonedAutoScrollStartPosition.clone();
            moveDelta.subtract(sv['_getContentPosition']());
            var outOfBoundary = sv['_getHowMuchOutOfBoundary'](moveDelta);
            if (!outOfBoundary.equals(ZERO, EPSILON)) {
              clonedAutoScrollStartPosition.add(outOfBoundary);
              reachedEnd = true;
            }
          }
          if (reachedEnd) {
            sv['_autoScrolling'] = false;
          }
          var deltaMove = new Vec3(clonedAutoScrollStartPosition);
          deltaMove.subtract(sv['_getContentPosition']());
          sv['_clampDelta'](deltaMove);
          sv['_moveContent'](deltaMove, reachedEnd);
          sv['_dispatchEvent'](ScrollView.EventType.SCROLLING);
          if (!sv['_autoScrolling']) {
            sv['_isBouncing'] = false;
            sv['_scrolling'] = false;
            sv['_dispatchEvent'](ScrollView.EventType.SCROLL_ENDED);
          }
        }
        //设置模板Item
        ;

        _proto.setTemplateItem = function setTemplateItem(item) {
          if (!item) return;
          var t = this;
          t._itemTmp = item;
          t._itemTmpUt = item.getComponent(UITransform);
          if (t._resizeMode == Layout.ResizeMode.CHILDREN) t._itemSize = t._layout.cellSize;else {
            var itemUt = item.getComponent(UITransform);
            t._itemSize = new Size(itemUt.width, itemUt.height);
          }

          //获取ListItem，如果没有就取消选择模式
          var com = item.getComponent(ListItem);
          var remove = false;
          if (!com) remove = true;
          // if (com) {
          //     if (!com._btnCom && !item.getComponent(cc.Button)) {
          //         remove = true;
          //     }
          // }
          if (remove) {
            t.selectedMode = SelectedType.NONE;
          }
          com = item.getComponent(Widget);
          if (com && com.enabled) {
            t._needUpdateWidget = true;
          }
          if (t.selectedMode == SelectedType.MULT) t.multSelected = [];
          switch (t._align) {
            case Layout.Type.HORIZONTAL:
              t._colLineNum = 1;
              t._sizeType = false;
              break;
            case Layout.Type.VERTICAL:
              t._colLineNum = 1;
              t._sizeType = true;
              break;
            case Layout.Type.GRID:
              switch (t._startAxis) {
                case Layout.AxisDirection.HORIZONTAL:
                  //计算列数
                  var trimW = t._contentUt.width - t._leftGap - t._rightGap;
                  t._colLineNum = Math.floor((trimW + t._columnGap) / (t._itemSize.width + t._columnGap));
                  t._sizeType = true;
                  break;
                case Layout.AxisDirection.VERTICAL:
                  //计算行数
                  var trimH = t._contentUt.height - t._topGap - t._bottomGap;
                  t._colLineNum = Math.floor((trimH + t._lineGap) / (t._itemSize.height + t._lineGap));
                  t._sizeType = false;
                  break;
              }
              break;
          }
        }
        /**
         * 检查是否初始化
         * @param {Boolean} printLog 是否打印错误信息
         * @returns
         */;
        _proto.checkInited = function checkInited(printLog) {
          if (printLog === void 0) {
            printLog = true;
          }
          if (!this._inited) {
            if (printLog) console.error('List initialization not completed!');
            return false;
          }
          return true;
        }
        //禁用 Layout 组件，自行计算 Content Size
        ;

        _proto._resizeContent = function _resizeContent() {
          var t = this;
          var result;
          switch (t._align) {
            case Layout.Type.HORIZONTAL:
              {
                if (t._customSize) {
                  var fixed = t._getFixedSize(null);
                  result = t._leftGap + fixed.val + t._itemSize.width * (t._numItems - fixed.count) + t._columnGap * (t._numItems - 1) + t._rightGap;
                } else {
                  result = t._leftGap + t._itemSize.width * t._numItems + t._columnGap * (t._numItems - 1) + t._rightGap;
                }
                break;
              }
            case Layout.Type.VERTICAL:
              {
                if (t._customSize) {
                  var _fixed = t._getFixedSize(null);
                  result = t._topGap + _fixed.val + t._itemSize.height * (t._numItems - _fixed.count) + t._lineGap * (t._numItems - 1) + t._bottomGap;
                } else {
                  result = t._topGap + t._itemSize.height * t._numItems + t._lineGap * (t._numItems - 1) + t._bottomGap;
                }
                break;
              }
            case Layout.Type.GRID:
              {
                //网格模式不支持居中
                if (t.lackCenter) t.lackCenter = false;
                switch (t._startAxis) {
                  case Layout.AxisDirection.HORIZONTAL:
                    var lineNum = Math.ceil(t._numItems / t._colLineNum);
                    result = t._topGap + t._itemSize.height * lineNum + t._lineGap * (lineNum - 1) + t._bottomGap;
                    break;
                  case Layout.AxisDirection.VERTICAL:
                    var colNum = Math.ceil(t._numItems / t._colLineNum);
                    result = t._leftGap + t._itemSize.width * colNum + t._columnGap * (colNum - 1) + t._rightGap;
                    break;
                }
                break;
              }
          }
          var layout = t.content.getComponent(Layout);
          if (layout) layout.enabled = false;
          t._allItemSize = result;
          t._allItemSizeNoEdge = t._allItemSize - (t._sizeType ? t._topGap + t._bottomGap : t._leftGap + t._rightGap);
          if (t.cyclic) {
            var totalSize = t._sizeType ? t._thisNodeUt.height : t._thisNodeUt.width;
            t._cyclicPos1 = 0;
            totalSize -= t._cyclicPos1;
            t._cyclicNum = Math.ceil(totalSize / t._allItemSizeNoEdge) + 1;
            var spacing = t._sizeType ? t._lineGap : t._columnGap;
            t._cyclicPos2 = t._cyclicPos1 + t._allItemSizeNoEdge + spacing;
            t._cyclicAllItemSize = t._allItemSize + t._allItemSizeNoEdge * (t._cyclicNum - 1) + spacing * (t._cyclicNum - 1);
            t._cycilcAllItemSizeNoEdge = t._allItemSizeNoEdge * t._cyclicNum;
            t._cycilcAllItemSizeNoEdge += spacing * (t._cyclicNum - 1);
            // cc.log('_cyclicNum ->', t._cyclicNum, t._allItemSizeNoEdge, t._allItemSize, t._cyclicPos1, t._cyclicPos2);
          }

          t._lack = !t.cyclic && t._allItemSize < (t._sizeType ? t._thisNodeUt.height : t._thisNodeUt.width);
          var slideOffset = (!t._lack || !t.lackCenter) && t.lackSlide ? 0 : .1;
          var targetWH = t._lack ? (t._sizeType ? t._thisNodeUt.height : t._thisNodeUt.width) - slideOffset : t.cyclic ? t._cyclicAllItemSize : t._allItemSize;
          if (targetWH < 0) targetWH = 0;
          if (t._sizeType) {
            t._contentUt.height = targetWH;
          } else {
            t._contentUt.width = targetWH;
          }

          // cc.log('_resizeContent()  numItems =', t._numItems, '，content =', t.content);
        }

        //滚动进行时...
        ;

        _proto._onScrolling = function _onScrolling(ev) {
          if (ev === void 0) {
            ev = null;
          }
          if (this.frameCount == null) this.frameCount = this._updateRate;
          if (!this._forceUpdate && ev && ev.type != 'scroll-ended' && this.frameCount > 0) {
            this.frameCount--;
            return;
          } else this.frameCount = this._updateRate;
          if (this._aniDelRuning) return;

          //循环列表处理
          if (this.cyclic) {
            var scrollPos = this.content.getPosition();
            scrollPos = this._sizeType ? scrollPos.y : scrollPos.x;
            var addVal = this._allItemSizeNoEdge + (this._sizeType ? this._lineGap : this._columnGap);
            var add = this._sizeType ? new Vec3(0, addVal, 0) : new Vec3(addVal, 0, 0);
            var contentPos = this.content.getPosition();
            switch (this._alignCalcType) {
              case 1:
                //单行HORIZONTAL（LEFT_TO_RIGHT）、网格VERTICAL（LEFT_TO_RIGHT）
                if (scrollPos > -this._cyclicPos1) {
                  contentPos.set(-this._cyclicPos2, contentPos.y, contentPos.z);
                  this.content.setPosition(contentPos);
                  if (this._scrollView.isAutoScrolling()) {
                    this._scrollView['_autoScrollStartPosition'] = this._scrollView['_autoScrollStartPosition'].subtract(add);
                  }
                  // if (this._beganPos) {
                  //     this._beganPos += add;
                  // }
                } else if (scrollPos < -this._cyclicPos2) {
                  contentPos.set(-this._cyclicPos1, contentPos.y, contentPos.z);
                  this.content.setPosition(contentPos);
                  if (this._scrollView.isAutoScrolling()) {
                    this._scrollView['_autoScrollStartPosition'] = this._scrollView['_autoScrollStartPosition'].add(add);
                  }
                  // if (this._beganPos) {
                  //     this._beganPos -= add;
                  // }
                }

                break;
              case 2:
                //单行HORIZONTAL（RIGHT_TO_LEFT）、网格VERTICAL（RIGHT_TO_LEFT）
                if (scrollPos < this._cyclicPos1) {
                  contentPos.set(this._cyclicPos2, contentPos.y, contentPos.z);
                  this.content.setPosition(contentPos);
                  if (this._scrollView.isAutoScrolling()) {
                    this._scrollView['_autoScrollStartPosition'] = this._scrollView['_autoScrollStartPosition'].add(add);
                  }
                } else if (scrollPos > this._cyclicPos2) {
                  contentPos.set(this._cyclicPos1, contentPos.y, contentPos.z);
                  this.content.setPosition(contentPos);
                  if (this._scrollView.isAutoScrolling()) {
                    this._scrollView['_autoScrollStartPosition'] = this._scrollView['_autoScrollStartPosition'].subtract(add);
                  }
                }
                break;
              case 3:
                //单列VERTICAL（TOP_TO_BOTTOM）、网格HORIZONTAL（TOP_TO_BOTTOM）
                if (scrollPos < this._cyclicPos1) {
                  contentPos.set(contentPos.x, this._cyclicPos2, contentPos.z);
                  this.content.setPosition(contentPos);
                  if (this._scrollView.isAutoScrolling()) {
                    this._scrollView['_autoScrollStartPosition'] = this._scrollView['_autoScrollStartPosition'].add(add);
                  }
                } else if (scrollPos > this._cyclicPos2) {
                  contentPos.set(contentPos.x, this._cyclicPos1, contentPos.z);
                  this.content.setPosition(contentPos);
                  if (this._scrollView.isAutoScrolling()) {
                    this._scrollView['_autoScrollStartPosition'] = this._scrollView['_autoScrollStartPosition'].subtract(add);
                  }
                }
                break;
              case 4:
                //单列VERTICAL（BOTTOM_TO_TOP）、网格HORIZONTAL（BOTTOM_TO_TOP）
                if (scrollPos > -this._cyclicPos1) {
                  contentPos.set(contentPos.x, -this._cyclicPos2, contentPos.z);
                  this.content.setPosition(contentPos);
                  if (this._scrollView.isAutoScrolling()) {
                    this._scrollView['_autoScrollStartPosition'] = this._scrollView['_autoScrollStartPosition'].subtract(add);
                  }
                } else if (scrollPos < -this._cyclicPos2) {
                  contentPos.set(contentPos.x, -this._cyclicPos1, contentPos.z);
                  this.content.setPosition(contentPos);
                  if (this._scrollView.isAutoScrolling()) {
                    this._scrollView['_autoScrollStartPosition'] = this._scrollView['_autoScrollStartPosition'].add(add);
                  }
                }
                break;
            }
          }
          this._calcViewPos();
          var vTop, vRight, vBottom, vLeft;
          if (this._sizeType) {
            vTop = this.viewTop;
            vBottom = this.viewBottom;
          } else {
            vRight = this.viewRight;
            vLeft = this.viewLeft;
          }
          if (this._virtual) {
            this.displayData = [];
            var itemPos;
            var curId = 0;
            var endId = this._numItems - 1;
            if (this._customSize) {
              var breakFor = false;
              //如果该item的位置在可视区域内，就推入displayData
              for (; curId <= endId && !breakFor; curId++) {
                itemPos = this._calcItemPos(curId);
                switch (this._align) {
                  case Layout.Type.HORIZONTAL:
                    if (itemPos.right >= vLeft && itemPos.left <= vRight) {
                      this.displayData.push(itemPos);
                    } else if (curId != 0 && this.displayData.length > 0) {
                      breakFor = true;
                    }
                    break;
                  case Layout.Type.VERTICAL:
                    if (itemPos.bottom <= vTop && itemPos.top >= vBottom) {
                      this.displayData.push(itemPos);
                    } else if (curId != 0 && this.displayData.length > 0) {
                      breakFor = true;
                    }
                    break;
                  case Layout.Type.GRID:
                    switch (this._startAxis) {
                      case Layout.AxisDirection.HORIZONTAL:
                        if (itemPos.bottom <= vTop && itemPos.top >= vBottom) {
                          this.displayData.push(itemPos);
                        } else if (curId != 0 && this.displayData.length > 0) {
                          breakFor = true;
                        }
                        break;
                      case Layout.AxisDirection.VERTICAL:
                        if (itemPos.right >= vLeft && itemPos.left <= vRight) {
                          this.displayData.push(itemPos);
                        } else if (curId != 0 && this.displayData.length > 0) {
                          breakFor = true;
                        }
                        break;
                    }
                    break;
                }
              }
            } else {
              var ww = this._itemSize.width + this._columnGap;
              var hh = this._itemSize.height + this._lineGap;
              switch (this._alignCalcType) {
                case 1:
                  //单行HORIZONTAL（LEFT_TO_RIGHT）、网格VERTICAL（LEFT_TO_RIGHT）
                  curId = (vLeft - this._leftGap) / ww;
                  endId = (vRight - this._leftGap) / ww;
                  break;
                case 2:
                  //单行HORIZONTAL（RIGHT_TO_LEFT）、网格VERTICAL（RIGHT_TO_LEFT）
                  curId = (-vRight - this._rightGap) / ww;
                  endId = (-vLeft - this._rightGap) / ww;
                  break;
                case 3:
                  //单列VERTICAL（TOP_TO_BOTTOM）、网格HORIZONTAL（TOP_TO_BOTTOM）
                  curId = (-vTop - this._topGap) / hh;
                  endId = (-vBottom - this._topGap) / hh;
                  break;
                case 4:
                  //单列VERTICAL（BOTTOM_TO_TOP）、网格HORIZONTAL（BOTTOM_TO_TOP）
                  curId = (vBottom - this._bottomGap) / hh;
                  endId = (vTop - this._bottomGap) / hh;
                  break;
              }
              curId = Math.floor(curId) * this._colLineNum;
              endId = Math.ceil(endId) * this._colLineNum;
              endId--;
              if (curId < 0) curId = 0;
              if (endId >= this._numItems) endId = this._numItems - 1;
              for (; curId <= endId; curId++) {
                this.displayData.push(this._calcItemPos(curId));
              }
            }
            this._delRedundantItem();
            if (this.displayData.length <= 0 || !this._numItems) {
              //if none, delete all.
              this._lastDisplayData = [];
              return;
            }
            this.firstListId = this.displayData[0].id;
            this.displayItemNum = this.displayData.length;
            var len = this._lastDisplayData.length;
            var haveDataChange = this.displayItemNum != len;
            if (haveDataChange) {
              // 如果是逐帧渲染，需要排序
              if (this.frameByFrameRenderNum > 0) {
                this._lastDisplayData.sort(function (a, b) {
                  return a - b;
                });
              }
              // 因List的显示数据是有序的，所以只需要判断数组长度是否相等，以及头、尾两个元素是否相等即可。
              haveDataChange = this.firstListId != this._lastDisplayData[0] || this.displayData[this.displayItemNum - 1].id != this._lastDisplayData[len - 1];
            }
            if (this._forceUpdate || haveDataChange) {
              //如果是强制更新
              if (this.frameByFrameRenderNum > 0) {
                // if (this._updateDone) {
                // this._lastDisplayData = [];
                //逐帧渲染
                if (this._numItems > 0) {
                  if (!this._updateDone) {
                    this._doneAfterUpdate = true;
                  } else {
                    this._updateCounter = 0;
                  }
                  this._updateDone = false;
                } else {
                  this._updateCounter = 0;
                  this._updateDone = true;
                }
                // }
              } else {
                //直接渲染
                this._lastDisplayData = [];
                // cc.log('List Display Data II::', this.displayData);
                for (var c = 0; c < this.displayItemNum; c++) {
                  this._createOrUpdateItem(this.displayData[c]);
                }
                this._forceUpdate = false;
              }
            }
            this._calcNearestItem();
          }
        }
        //计算可视范围
        ;

        _proto._calcViewPos = function _calcViewPos() {
          var scrollPos = this.content.getPosition();
          switch (this._alignCalcType) {
            case 1:
              //单行HORIZONTAL（LEFT_TO_RIGHT）、网格VERTICAL（LEFT_TO_RIGHT）
              this.elasticLeft = scrollPos.x > 0 ? scrollPos.x : 0;
              this.viewLeft = (scrollPos.x < 0 ? -scrollPos.x : 0) - this.elasticLeft;
              this.viewRight = this.viewLeft + this._thisNodeUt.width;
              this.elasticRight = this.viewRight > this._contentUt.width ? Math.abs(this.viewRight - this._contentUt.width) : 0;
              this.viewRight += this.elasticRight;
              // cc.log(this.elasticLeft, this.elasticRight, this.viewLeft, this.viewRight);
              break;
            case 2:
              //单行HORIZONTAL（RIGHT_TO_LEFT）、网格VERTICAL（RIGHT_TO_LEFT）
              this.elasticRight = scrollPos.x < 0 ? -scrollPos.x : 0;
              this.viewRight = (scrollPos.x > 0 ? -scrollPos.x : 0) + this.elasticRight;
              this.viewLeft = this.viewRight - this._thisNodeUt.width;
              this.elasticLeft = this.viewLeft < -this._contentUt.width ? Math.abs(this.viewLeft + this._contentUt.width) : 0;
              this.viewLeft -= this.elasticLeft;
              // cc.log(this.elasticLeft, this.elasticRight, this.viewLeft, this.viewRight);
              break;
            case 3:
              //单列VERTICAL（TOP_TO_BOTTOM）、网格HORIZONTAL（TOP_TO_BOTTOM）
              this.elasticTop = scrollPos.y < 0 ? Math.abs(scrollPos.y) : 0;
              this.viewTop = (scrollPos.y > 0 ? -scrollPos.y : 0) + this.elasticTop;
              this.viewBottom = this.viewTop - this._thisNodeUt.height;
              this.elasticBottom = this.viewBottom < -this._contentUt.height ? Math.abs(this.viewBottom + this._contentUt.height) : 0;
              this.viewBottom += this.elasticBottom;
              // cc.log(this.elasticTop, this.elasticBottom, this.viewTop, this.viewBottom);
              break;
            case 4:
              //单列VERTICAL（BOTTOM_TO_TOP）、网格HORIZONTAL（BOTTOM_TO_TOP）
              this.elasticBottom = scrollPos.y > 0 ? Math.abs(scrollPos.y) : 0;
              this.viewBottom = (scrollPos.y < 0 ? -scrollPos.y : 0) - this.elasticBottom;
              this.viewTop = this.viewBottom + this._thisNodeUt.height;
              this.elasticTop = this.viewTop > this._contentUt.height ? Math.abs(this.viewTop - this._contentUt.height) : 0;
              this.viewTop -= this.elasticTop;
              // cc.log(this.elasticTop, this.elasticBottom, this.viewTop, this.viewBottom);
              break;
          }
        }
        //计算位置 根据id
        ;

        _proto._calcItemPos = function _calcItemPos(id) {
          var width, height, top, bottom, left, right, itemX, itemY;
          switch (this._align) {
            case Layout.Type.HORIZONTAL:
              switch (this._horizontalDir) {
                case Layout.HorizontalDirection.LEFT_TO_RIGHT:
                  {
                    if (this._customSize) {
                      var fixed = this._getFixedSize(id);
                      left = this._leftGap + (this._itemSize.width + this._columnGap) * (id - fixed.count) + (fixed.val + this._columnGap * fixed.count);
                      var cs = this._customSize[id];
                      width = cs > 0 ? cs : this._itemSize.width;
                    } else {
                      left = this._leftGap + (this._itemSize.width + this._columnGap) * id;
                      width = this._itemSize.width;
                    }
                    if (this.lackCenter) {
                      left -= this._leftGap;
                      var offset = this._contentUt.width / 2 - this._allItemSizeNoEdge / 2;
                      left += offset;
                    }
                    right = left + width;
                    return {
                      id: id,
                      left: left,
                      right: right,
                      x: left + this._itemTmpUt.anchorX * width,
                      y: this._itemTmp.y
                    };
                  }
                case Layout.HorizontalDirection.RIGHT_TO_LEFT:
                  {
                    if (this._customSize) {
                      var _fixed2 = this._getFixedSize(id);
                      right = -this._rightGap - (this._itemSize.width + this._columnGap) * (id - _fixed2.count) - (_fixed2.val + this._columnGap * _fixed2.count);
                      var _cs = this._customSize[id];
                      width = _cs > 0 ? _cs : this._itemSize.width;
                    } else {
                      right = -this._rightGap - (this._itemSize.width + this._columnGap) * id;
                      width = this._itemSize.width;
                    }
                    if (this.lackCenter) {
                      right += this._rightGap;
                      var _offset = this._contentUt.width / 2 - this._allItemSizeNoEdge / 2;
                      right -= _offset;
                    }
                    left = right - width;
                    return {
                      id: id,
                      right: right,
                      left: left,
                      x: left + this._itemTmpUt.anchorX * width,
                      y: this._itemTmp.y
                    };
                  }
              }
              break;
            case Layout.Type.VERTICAL:
              {
                switch (this._verticalDir) {
                  case Layout.VerticalDirection.TOP_TO_BOTTOM:
                    {
                      if (this._customSize) {
                        var _fixed3 = this._getFixedSize(id);
                        top = -this._topGap - (this._itemSize.height + this._lineGap) * (id - _fixed3.count) - (_fixed3.val + this._lineGap * _fixed3.count);
                        var _cs2 = this._customSize[id];
                        height = _cs2 > 0 ? _cs2 : this._itemSize.height;
                      } else {
                        top = -this._topGap - (this._itemSize.height + this._lineGap) * id;
                        height = this._itemSize.height;
                      }
                      if (this.lackCenter) {
                        top += this._topGap;
                        var _offset2 = this._contentUt.height / 2 - this._allItemSizeNoEdge / 2;
                        top -= _offset2;
                      }
                      bottom = top - height;
                      return {
                        id: id,
                        top: top,
                        bottom: bottom,
                        x: this._itemTmp.x,
                        y: bottom + this._itemTmpUt.anchorY * height
                      };
                    }
                  case Layout.VerticalDirection.BOTTOM_TO_TOP:
                    {
                      if (this._customSize) {
                        var _fixed4 = this._getFixedSize(id);
                        bottom = this._bottomGap + (this._itemSize.height + this._lineGap) * (id - _fixed4.count) + (_fixed4.val + this._lineGap * _fixed4.count);
                        var _cs3 = this._customSize[id];
                        height = _cs3 > 0 ? _cs3 : this._itemSize.height;
                      } else {
                        bottom = this._bottomGap + (this._itemSize.height + this._lineGap) * id;
                        height = this._itemSize.height;
                      }
                      if (this.lackCenter) {
                        bottom -= this._bottomGap;
                        var _offset3 = this._contentUt.height / 2 - this._allItemSizeNoEdge / 2;
                        bottom += _offset3;
                      }
                      top = bottom + height;
                      return {
                        id: id,
                        top: top,
                        bottom: bottom,
                        x: this._itemTmp.x,
                        y: bottom + this._itemTmpUt.anchorY * height
                      };
                    }
                }
              }
            case Layout.Type.GRID:
              {
                var colLine = Math.floor(id / this._colLineNum);
                switch (this._startAxis) {
                  case Layout.AxisDirection.HORIZONTAL:
                    {
                      switch (this._verticalDir) {
                        case Layout.VerticalDirection.TOP_TO_BOTTOM:
                          {
                            top = -this._topGap - (this._itemSize.height + this._lineGap) * colLine;
                            bottom = top - this._itemSize.height;
                            itemY = bottom + this._itemTmpUt.anchorY * this._itemSize.height;
                            break;
                          }
                        case Layout.VerticalDirection.BOTTOM_TO_TOP:
                          {
                            bottom = this._bottomGap + (this._itemSize.height + this._lineGap) * colLine;
                            top = bottom + this._itemSize.height;
                            itemY = bottom + this._itemTmpUt.anchorY * this._itemSize.height;
                            break;
                          }
                      }
                      itemX = this._leftGap + id % this._colLineNum * (this._itemSize.width + this._columnGap);
                      switch (this._horizontalDir) {
                        case Layout.HorizontalDirection.LEFT_TO_RIGHT:
                          {
                            itemX += this._itemTmpUt.anchorX * this._itemSize.width;
                            itemX -= this._contentUt.anchorX * this._contentUt.width;
                            break;
                          }
                        case Layout.HorizontalDirection.RIGHT_TO_LEFT:
                          {
                            itemX += (1 - this._itemTmpUt.anchorX) * this._itemSize.width;
                            itemX -= (1 - this._contentUt.anchorX) * this._contentUt.width;
                            itemX *= -1;
                            break;
                          }
                      }
                      return {
                        id: id,
                        top: top,
                        bottom: bottom,
                        x: itemX,
                        y: itemY
                      };
                    }
                  case Layout.AxisDirection.VERTICAL:
                    {
                      switch (this._horizontalDir) {
                        case Layout.HorizontalDirection.LEFT_TO_RIGHT:
                          {
                            left = this._leftGap + (this._itemSize.width + this._columnGap) * colLine;
                            right = left + this._itemSize.width;
                            itemX = left + this._itemTmpUt.anchorX * this._itemSize.width;
                            itemX -= this._contentUt.anchorX * this._contentUt.width;
                            break;
                          }
                        case Layout.HorizontalDirection.RIGHT_TO_LEFT:
                          {
                            right = -this._rightGap - (this._itemSize.width + this._columnGap) * colLine;
                            left = right - this._itemSize.width;
                            itemX = left + this._itemTmpUt.anchorX * this._itemSize.width;
                            itemX += (1 - this._contentUt.anchorX) * this._contentUt.width;
                            break;
                          }
                      }
                      itemY = -this._topGap - id % this._colLineNum * (this._itemSize.height + this._lineGap);
                      switch (this._verticalDir) {
                        case Layout.VerticalDirection.TOP_TO_BOTTOM:
                          {
                            itemY -= (1 - this._itemTmpUt.anchorY) * this._itemSize.height;
                            itemY += (1 - this._contentUt.anchorY) * this._contentUt.height;
                            break;
                          }
                        case Layout.VerticalDirection.BOTTOM_TO_TOP:
                          {
                            itemY -= this._itemTmpUt.anchorY * this._itemSize.height;
                            itemY += this._contentUt.anchorY * this._contentUt.height;
                            itemY *= -1;
                            break;
                          }
                      }
                      return {
                        id: id,
                        left: left,
                        right: right,
                        x: itemX,
                        y: itemY
                      };
                    }
                }
                break;
              }
          }
        }
        //计算已存在的Item的位置
        ;

        _proto._calcExistItemPos = function _calcExistItemPos(id) {
          var item = this.getItemByListId(id);
          if (!item) return null;
          var ut = item.getComponent(UITransform);
          var pos = item.getPosition();
          var data = {
            id: id,
            x: pos.x,
            y: pos.y
          };
          if (this._sizeType) {
            data.top = pos.y + ut.height * (1 - ut.anchorY);
            data.bottom = pos.y - ut.height * ut.anchorY;
          } else {
            data.left = pos.x - ut.width * ut.anchorX;
            data.right = pos.x + ut.width * (1 - ut.anchorX);
          }
          return data;
        }
        //获取Item位置
        ;

        _proto.getItemPos = function getItemPos(id) {
          if (this._virtual) return this._calcItemPos(id);else {
            if (this.frameByFrameRenderNum) return this._calcItemPos(id);else return this._calcExistItemPos(id);
          }
        }
        //获取固定尺寸
        ;

        _proto._getFixedSize = function _getFixedSize(listId) {
          if (!this._customSize) return null;
          if (listId == null) listId = this._numItems;
          var fixed = 0;
          var count = 0;
          for (var id in this._customSize) {
            if (parseInt(id) < listId) {
              fixed += this._customSize[id];
              count++;
            }
          }
          return {
            val: fixed,
            count: count
          };
        }
        //滚动结束时..
        ;

        _proto._onScrollBegan = function _onScrollBegan() {
          this._beganPos = this._sizeType ? this.viewTop : this.viewLeft;
        }
        //滚动结束时..
        ;

        _proto._onScrollEnded = function _onScrollEnded() {
          var t = this;
          t._curScrollIsTouch = false;
          if (t.scrollToListId != null) {
            var item = t.getItemByListId(t.scrollToListId);
            t.scrollToListId = null;
            if (item) {
              tween(item).to(.1, {
                scale: 1.06
              }).to(.1, {
                scale: 1
              }).start();
            }
          }
          t._onScrolling();
          if (t._slideMode == SlideType.ADHERING && !t.adhering) {
            //cc.log(t.adhering, t._scrollView.isAutoScrolling(), t._scrollView.isScrolling());
            t.adhere();
          } else if (t._slideMode == SlideType.PAGE) {
            if (t._beganPos != null && t._curScrollIsTouch) {
              this._pageAdhere();
            } else {
              t.adhere();
            }
          }
        }
        // 触摸时
        ;

        _proto._onTouchStart = function _onTouchStart(ev, captureListeners) {
          if (this._scrollView['_hasNestedViewGroup'](ev, captureListeners)) return;
          this._curScrollIsTouch = true;
          var isMe = ev.eventPhase === Event.AT_TARGET && ev.target === this.node;
          if (!isMe) {
            var itemNode = ev.target;
            while (itemNode._listId == null && itemNode.parent) itemNode = itemNode.parent;
            this._scrollItem = itemNode._listId != null ? itemNode : ev.target;
          }
        }
        //触摸抬起时..
        ;

        _proto._onTouchUp = function _onTouchUp() {
          var t = this;
          t._scrollPos = null;
          if (t._slideMode == SlideType.ADHERING) {
            if (this.adhering) this._adheringBarrier = true;
            t.adhere();
          } else if (t._slideMode == SlideType.PAGE) {
            if (t._beganPos != null) {
              this._pageAdhere();
            } else {
              t.adhere();
            }
          }
          this._scrollItem = null;
        };
        _proto._onTouchCancelled = function _onTouchCancelled(ev, captureListeners) {
          var t = this;
          if (t._scrollView['_hasNestedViewGroup'](ev, captureListeners) || ev.simulate) return;
          t._scrollPos = null;
          if (t._slideMode == SlideType.ADHERING) {
            if (t.adhering) t._adheringBarrier = true;
            t.adhere();
          } else if (t._slideMode == SlideType.PAGE) {
            if (t._beganPos != null) {
              t._pageAdhere();
            } else {
              t.adhere();
            }
          }
          this._scrollItem = null;
        }
        //当尺寸改变
        ;

        _proto._onSizeChanged = function _onSizeChanged() {
          if (this.checkInited(false)) this._onScrolling();
        }
        //当Item自适应
        ;

        _proto._onItemAdaptive = function _onItemAdaptive(item) {
          var ut = item.getComponent(UITransform);
          // if (this.checkInited(false)) {
          if (!this._sizeType && ut.width != this._itemSize.width || this._sizeType && ut.height != this._itemSize.height) {
            if (!this._customSize) this._customSize = {};
            var val = this._sizeType ? ut.height : ut.width;
            if (this._customSize[item._listId] != val) {
              this._customSize[item._listId] = val;
              this._resizeContent();
              // this.content.children.forEach((child: Node) => {
              //     this._updateItemPos(child);
              // });
              this.updateAll();
              // 如果当前正在运行 scrollTo，肯定会不准确，在这里做修正
              if (this._scrollToListId != null) {
                this._scrollPos = null;
                this.unschedule(this._scrollToSo);
                this.scrollTo(this._scrollToListId, Math.max(0, this._scrollToEndTime - new Date().getTime() / 1000));
              }
            }
          }
          // }
        }
        //PAGE粘附
        ;

        _proto._pageAdhere = function _pageAdhere() {
          var t = this;
          if (!t.cyclic && (t.elasticTop > 0 || t.elasticRight > 0 || t.elasticBottom > 0 || t.elasticLeft > 0)) return;
          var curPos = t._sizeType ? t.viewTop : t.viewLeft;
          var dis = (t._sizeType ? t._thisNodeUt.height : t._thisNodeUt.width) * t.pageDistance;
          var canSkip = Math.abs(t._beganPos - curPos) > dis;
          if (canSkip) {
            var timeInSecond = .5;
            switch (t._alignCalcType) {
              case 1: //单行HORIZONTAL（LEFT_TO_RIGHT）、网格VERTICAL（LEFT_TO_RIGHT）
              case 4:
                //单列VERTICAL（BOTTOM_TO_TOP）、网格HORIZONTAL（BOTTOM_TO_TOP）
                if (t._beganPos > curPos) {
                  t.prePage(timeInSecond);
                  // cc.log('_pageAdhere   PPPPPPPPPPPPPPP');
                } else {
                  t.nextPage(timeInSecond);
                  // cc.log('_pageAdhere   NNNNNNNNNNNNNNN');
                }

                break;
              case 2: //单行HORIZONTAL（RIGHT_TO_LEFT）、网格VERTICAL（RIGHT_TO_LEFT）
              case 3:
                //单列VERTICAL（TOP_TO_BOTTOM）、网格HORIZONTAL（TOP_TO_BOTTOM）
                if (t._beganPos < curPos) {
                  t.prePage(timeInSecond);
                } else {
                  t.nextPage(timeInSecond);
                }
                break;
            }
          } else if (t.elasticTop <= 0 && t.elasticRight <= 0 && t.elasticBottom <= 0 && t.elasticLeft <= 0) {
            t.adhere();
          }
          t._beganPos = null;
        }
        //粘附
        ;

        _proto.adhere = function adhere() {
          var t = this;
          if (!t.checkInited()) return;
          if (t.elasticTop > 0 || t.elasticRight > 0 || t.elasticBottom > 0 || t.elasticLeft > 0) return;
          t.adhering = true;
          t._calcNearestItem();
          var offset = (t._sizeType ? t._topGap : t._leftGap) / (t._sizeType ? t._thisNodeUt.height : t._thisNodeUt.width);
          var timeInSecond = .7;
          t.scrollTo(t.nearestListId, timeInSecond, offset);
        }
        //Update..
        ;

        _proto.update = function update() {
          if (this.frameByFrameRenderNum <= 0 || this._updateDone) return;
          // cc.log(this.displayData.length, this._updateCounter, this.displayData[this._updateCounter]);
          if (this._virtual) {
            var len = this._updateCounter + this.frameByFrameRenderNum > this.displayItemNum ? this.displayItemNum : this._updateCounter + this.frameByFrameRenderNum;
            for (var n = this._updateCounter; n < len; n++) {
              var data = this.displayData[n];
              if (data) {
                this._createOrUpdateItem(data);
              }
            }
            if (this._updateCounter >= this.displayItemNum - 1) {
              //最后一个
              if (this._doneAfterUpdate) {
                this._updateCounter = 0;
                this._updateDone = false;
                // if (!this._scrollView.isScrolling())
                this._doneAfterUpdate = false;
              } else {
                this._updateDone = true;
                this._delRedundantItem();
                this._forceUpdate = false;
                this._calcNearestItem();
                if (this.slideMode == SlideType.PAGE) this.curPageNum = this.nearestListId;
              }
            } else {
              this._updateCounter += this.frameByFrameRenderNum;
            }
          } else {
            if (this._updateCounter < this._numItems) {
              var _len2 = this._updateCounter + this.frameByFrameRenderNum > this._numItems ? this._numItems : this._updateCounter + this.frameByFrameRenderNum;
              for (var _n = this._updateCounter; _n < _len2; _n++) {
                this._createOrUpdateItem2(_n);
              }
              this._updateCounter += this.frameByFrameRenderNum;
            } else {
              this._updateDone = true;
              this._calcNearestItem();
              if (this.slideMode == SlideType.PAGE) this.curPageNum = this.nearestListId;
            }
          }
        }
        /**
         * 创建或更新Item（虚拟列表用）
         * @param {Object} data 数据
         */;
        _proto._createOrUpdateItem = function _createOrUpdateItem(data) {
          var item = this.getItemByListId(data.id);
          if (!item) {
            //如果不存在
            var canGet = this._pool.size() > 0;
            if (canGet) {
              item = this._pool.get();
              // cc.log('从池中取出::   旧id =', item['_listId'], '，新id =', data.id, item);
            } else {
              item = instantiate(this._itemTmp);
              // cc.log('新建::', data.id, item);
            }

            if (!canGet || !isValid(item)) {
              item = instantiate(this._itemTmp);
              canGet = false;
            }
            if (item._listId != data.id) {
              item._listId = data.id;
              var ut = item.getComponent(UITransform);
              ut.setContentSize(this._itemSize);
            }
            item.setPosition(new Vec3(data.x, data.y, 0));
            this._resetItemSize(item);
            this.content.addChild(item);
            if (canGet && this._needUpdateWidget) {
              var widget = item.getComponent(Widget);
              if (widget) widget.updateAlignment();
            }
            item.setSiblingIndex(this.content.children.length - 1);
            var listItem = item.getComponent(ListItem);
            item['listItem'] = listItem;
            if (listItem) {
              listItem.listId = data.id;
              listItem.list = this;
              listItem._registerEvent();
            }
            if (this.renderEvent) {
              EventHandler.emitEvents([this.renderEvent], item, data.id % this._actualNumItems);
            }
          } else if (this._forceUpdate && this.renderEvent) {
            //强制更新
            item.setPosition(new Vec3(data.x, data.y, 0));
            this._resetItemSize(item);
            // cc.log('ADD::', data.id, item);
            if (this.renderEvent) {
              EventHandler.emitEvents([this.renderEvent], item, data.id % this._actualNumItems);
            }
          }
          this._resetItemSize(item);
          this._updateListItem(item['listItem']);
          if (this._lastDisplayData.indexOf(data.id) < 0) {
            this._lastDisplayData.push(data.id);
          }
        }
        //创建或更新Item（非虚拟列表用）
        ;

        _proto._createOrUpdateItem2 = function _createOrUpdateItem2(listId) {
          var item = this.content.children[listId];
          var listItem;
          if (!item) {
            //如果不存在
            item = instantiate(this._itemTmp);
            item._listId = listId;
            this.content.addChild(item);
            listItem = item.getComponent(ListItem);
            item['listItem'] = listItem;
            if (listItem) {
              listItem.listId = listId;
              listItem.list = this;
              listItem._registerEvent();
            }
            if (this.renderEvent) {
              EventHandler.emitEvents([this.renderEvent], item, listId % this._actualNumItems);
            }
          } else if (this._forceUpdate && this.renderEvent) {
            //强制更新
            item._listId = listId;
            if (listItem) listItem.listId = listId;
            if (this.renderEvent) {
              EventHandler.emitEvents([this.renderEvent], item, listId % this._actualNumItems);
            }
          }
          this._updateListItem(listItem);
          if (this._lastDisplayData.indexOf(listId) < 0) {
            this._lastDisplayData.push(listId);
          }
        };
        _proto._updateListItem = function _updateListItem(listItem) {
          if (!listItem) return;
          if (this.selectedMode > SelectedType.NONE) {
            var item = listItem.node;
            switch (this.selectedMode) {
              case SelectedType.SINGLE:
                listItem.selected = this.selectedId == item._listId;
                break;
              case SelectedType.MULT:
                listItem.selected = this.multSelected.indexOf(item._listId) >= 0;
                break;
            }
          }
        }
        //仅虚拟列表用
        ;

        _proto._resetItemSize = function _resetItemSize(item) {
          return;
        }
        /**
         * 更新Item位置
         * @param {Number||Node} listIdOrItem
         */;
        _proto._updateItemPos = function _updateItemPos(listIdOrItem) {
          var item = isNaN(listIdOrItem) ? listIdOrItem : this.getItemByListId(listIdOrItem);
          var pos = this.getItemPos(item._listId);
          item.setPosition(pos.x, pos.y);
        }
        /**
         * 设置多选
         * @param {Array} args 可以是单个listId，也可是个listId数组
         * @param {Boolean} bool 值，如果为null的话，则直接用args覆盖
         */;
        _proto.setMultSelected = function setMultSelected(args, bool) {
          var t = this;
          if (!t.checkInited()) return;
          if (!Array.isArray(args)) {
            args = [args];
          }
          if (bool == null) {
            t.multSelected = args;
          } else {
            var listId, sub;
            if (bool) {
              for (var n = args.length - 1; n >= 0; n--) {
                listId = args[n];
                sub = t.multSelected.indexOf(listId);
                if (sub < 0) {
                  t.multSelected.push(listId);
                }
              }
            } else {
              for (var _n2 = args.length - 1; _n2 >= 0; _n2--) {
                listId = args[_n2];
                sub = t.multSelected.indexOf(listId);
                if (sub >= 0) {
                  t.multSelected.splice(sub, 1);
                }
              }
            }
          }
          t._forceUpdate = true;
          t._onScrolling();
        }
        /**
         * 获取多选数据
         * @returns
         */;
        _proto.getMultSelected = function getMultSelected() {
          return this.multSelected;
        }
        /**
         * 多选是否有选择
         * @param {number} listId 索引
         * @returns
         */;
        _proto.hasMultSelected = function hasMultSelected(listId) {
          return this.multSelected && this.multSelected.indexOf(listId) >= 0;
        }
        /**
         * 更新指定的Item
         * @param {Array} args 单个listId，或者数组
         * @returns
         */;
        _proto.updateItem = function updateItem(args) {
          if (!this.checkInited()) return;
          if (!Array.isArray(args)) {
            args = [args];
          }
          for (var n = 0, len = args.length; n < len; n++) {
            var listId = args[n];
            var item = this.getItemByListId(listId);
            if (item) EventHandler.emitEvents([this.renderEvent], item, listId % this._actualNumItems);
          }
        }
        /**
         * 更新全部
         */;
        _proto.updateAll = function updateAll() {
          if (!this.checkInited()) return;
          this.numItems = this.numItems;
        }
        /**
         * 根据ListID获取Item
         * @param {Number} listId
         * @returns
         */;
        _proto.getItemByListId = function getItemByListId(listId) {
          if (this.content) {
            for (var n = this.content.children.length - 1; n >= 0; n--) {
              var item = this.content.children[n];
              if (item._listId == listId) return item;
            }
          }
        }
        /**
         * 获取在显示区域外的Item
         * @returns
         */;
        _proto._getOutsideItem = function _getOutsideItem() {
          var item;
          var result = [];
          for (var n = this.content.children.length - 1; n >= 0; n--) {
            item = this.content.children[n];
            if (!this.displayData.find(function (d) {
              return d.id == item._listId;
            })) {
              result.push(item);
            }
          }
          return result;
        }
        //删除显示区域以外的Item
        ;

        _proto._delRedundantItem = function _delRedundantItem() {
          if (this._virtual) {
            var arr = this._getOutsideItem();
            for (var n = arr.length - 1; n >= 0; n--) {
              var item = arr[n];
              if (this._scrollItem && item._listId == this._scrollItem._listId) continue;
              item.isCached = true;
              this._pool.put(item);
              for (var m = this._lastDisplayData.length - 1; m >= 0; m--) {
                if (this._lastDisplayData[m] == item._listId) {
                  this._lastDisplayData.splice(m, 1);
                  break;
                }
              }
            }
            // cc.log('存入::', str, '    pool.length =', this._pool.length);
          } else {
            while (this.content.children.length > this._numItems) {
              this._delSingleItem(this.content.children[this.content.children.length - 1]);
            }
          }
        }
        //删除单个Item
        ;

        _proto._delSingleItem = function _delSingleItem(item) {
          // cc.log('DEL::', item['_listId'], item);
          item.removeFromParent();
          if (item.destroy) item.destroy();
          item = null;
        }
        /** 
         * 动效删除Item（此方法只适用于虚拟列表，即_virtual=true）
         * 一定要在回调函数里重新设置新的numItems进行刷新，毕竟本List是靠数据驱动的。
         */;
        _proto.aniDelItem = function aniDelItem(listId, callFunc, aniType) {
          var t = this;
          if (!t.checkInited() || t.cyclic || !t._virtual) return console.error('This function is not allowed to be called!');
          if (!callFunc) return console.error('CallFunc are not allowed to be NULL, You need to delete the corresponding index in the data array in the CallFunc!');
          if (t._aniDelRuning) return console.warn('Please wait for the current deletion to finish!');
          var item = t.getItemByListId(listId);
          var listItem;
          if (!item) {
            callFunc(listId);
            return;
          } else {
            listItem = item.getComponent(ListItem);
          }
          t._aniDelRuning = true;
          t._aniDelCB = callFunc;
          t._aniDelItem = item;
          t._aniDelBeforePos = item.position;
          t._aniDelBeforeScale = item.scale;
          var curLastId = t.displayData[t.displayData.length - 1].id;
          var resetSelectedId = listItem.selected;
          listItem.showAni(aniType, function () {
            //判断有没有下一个，如果有的话，创建粗来
            var newId;
            if (curLastId < t._numItems - 2) {
              newId = curLastId + 1;
            }
            if (newId != null) {
              var newData = t._calcItemPos(newId);
              t.displayData.push(newData);
              if (t._virtual) t._createOrUpdateItem(newData);else t._createOrUpdateItem2(newId);
            } else t._numItems--;
            if (t.selectedMode == SelectedType.SINGLE) {
              if (resetSelectedId) {
                t._selectedId = -1;
              } else if (t._selectedId - 1 >= 0) {
                t._selectedId--;
              }
            } else if (t.selectedMode == SelectedType.MULT && t.multSelected.length) {
              var sub = t.multSelected.indexOf(listId);
              if (sub >= 0) {
                t.multSelected.splice(sub, 1);
              }
              //多选的数据，在其后的全部减一
              for (var n = t.multSelected.length - 1; n >= 0; n--) {
                var id = t.multSelected[n];
                if (id >= listId) t.multSelected[n]--;
              }
            }
            if (t._customSize) {
              if (t._customSize[listId]) delete t._customSize[listId];
              var newCustomSize = {};
              var size;
              for (var _id in t._customSize) {
                size = t._customSize[_id];
                var idNumber = parseInt(_id);
                newCustomSize[idNumber - (idNumber >= listId ? 1 : 0)] = size;
              }
              t._customSize = newCustomSize;
            }
            //后面的Item向前怼的动效
            var sec = .2333;
            var twe, haveCB;
            for (var _n3 = newId != null ? newId : curLastId; _n3 >= listId + 1; _n3--) {
              item = t.getItemByListId(_n3);
              if (item) {
                var posData = t._calcItemPos(_n3 - 1);
                twe = tween(item).to(sec, {
                  position: new Vec3(posData.x, posData.y, 0)
                });
                if (_n3 <= listId + 1) {
                  haveCB = true;
                  twe.call(function () {
                    t._aniDelRuning = false;
                    callFunc(listId);
                    delete t._aniDelCB;
                  });
                }
                twe.start();
              }
            }
            if (!haveCB) {
              t._aniDelRuning = false;
              callFunc(listId);
              t._aniDelCB = null;
            }
          }, true);
        }
        /**
         * 滚动到..
         * @param {Number} listId 索引（如果<0，则滚到首个Item位置，如果>=_numItems，则滚到最末Item位置）
         * @param {Number} timeInSecond 时间
         * @param {Number} offset 索引目标位置偏移，0-1
         * @param {Boolean} overStress 滚动后是否强调该Item（这只是个实验功能）
         */;
        _proto.scrollTo = function scrollTo(listId, timeInSecond, offset, overStress) {
          if (timeInSecond === void 0) {
            timeInSecond = .5;
          }
          if (offset === void 0) {
            offset = null;
          }
          if (overStress === void 0) {
            overStress = false;
          }
          var t = this;
          if (!t.checkInited(false)) return;
          // t._scrollView.stopAutoScroll();
          if (timeInSecond == null)
            //默认0.5
            timeInSecond = .5;else if (timeInSecond < 0) timeInSecond = 0;
          if (listId < 0) listId = 0;else if (listId >= t._numItems) listId = t._numItems - 1;
          // 以防设置了numItems之后layout的尺寸还未更新
          if (!t._virtual && t._layout && t._layout.enabled) t._layout.updateLayout();
          var pos = t.getItemPos(listId);
          if (!pos) {
            return DEV;
          }
          var targetX, targetY;
          switch (t._alignCalcType) {
            case 1:
              //单行HORIZONTAL（LEFT_TO_RIGHT）、网格VERTICAL（LEFT_TO_RIGHT）
              targetX = pos.left;
              if (offset != null) targetX -= t._thisNodeUt.width * offset;else targetX -= t._leftGap;
              pos = new Vec3(targetX, 0, 0);
              break;
            case 2:
              //单行HORIZONTAL（RIGHT_TO_LEFT）、网格VERTICAL（RIGHT_TO_LEFT）
              targetX = pos.right - t._thisNodeUt.width;
              if (offset != null) targetX += t._thisNodeUt.width * offset;else targetX += t._rightGap;
              pos = new Vec3(targetX + t._contentUt.width, 0, 0);
              break;
            case 3:
              //单列VERTICAL（TOP_TO_BOTTOM）、网格HORIZONTAL（TOP_TO_BOTTOM）
              targetY = pos.top;
              if (offset != null) targetY += t._thisNodeUt.height * offset;else targetY += t._topGap;
              pos = new Vec3(0, -targetY, 0);
              break;
            case 4:
              //单列VERTICAL（BOTTOM_TO_TOP）、网格HORIZONTAL（BOTTOM_TO_TOP）
              targetY = pos.bottom + t._thisNodeUt.height;
              if (offset != null) targetY -= t._thisNodeUt.height * offset;else targetY -= t._bottomGap;
              pos = new Vec3(0, -targetY + t._contentUt.height, 0);
              break;
          }
          var viewPos = t.content.getPosition();
          viewPos = Math.abs(t._sizeType ? viewPos.y : viewPos.x);
          var comparePos = t._sizeType ? pos.y : pos.x;
          var runScroll = Math.abs((t._scrollPos != null ? t._scrollPos : viewPos) - comparePos) > .5;
          // cc.log(runScroll, t._scrollPos, viewPos, comparePos)

          // t._scrollView.stopAutoScroll();
          if (runScroll) {
            t._scrollView.scrollToOffset(pos, timeInSecond);
            t._scrollToListId = listId;
            t._scrollToEndTime = new Date().getTime() / 1000 + timeInSecond;
            // cc.log(listId, t.content.width, t.content.getPosition(), pos);
            t._scrollToSo = t.scheduleOnce(function () {
              if (!t._adheringBarrier) {
                t.adhering = t._adheringBarrier = false;
              }
              t._scrollPos = t._scrollToListId = t._scrollToEndTime = t._scrollToSo = null;
              //cc.log('2222222222', t._adheringBarrier)
              if (overStress) {
                // t.scrollToListId = listId;
                var item = t.getItemByListId(listId);
                if (item) {
                  tween(item).to(.1, {
                    scale: 1.05
                  }).to(.1, {
                    scale: 1
                  }).start();
                }
              }
            }, timeInSecond + .1);
            if (timeInSecond <= 0) {
              t._onScrolling();
            }
          }
        }
        /**
         * 计算当前滚动窗最近的Item
         */;
        _proto._calcNearestItem = function _calcNearestItem() {
          var t = this;
          t.nearestListId = null;
          var data, center;
          if (t._virtual) t._calcViewPos();
          var vTop, vRight, vBottom, vLeft;
          vTop = t.viewTop;
          vRight = t.viewRight;
          vBottom = t.viewBottom;
          vLeft = t.viewLeft;
          var breakFor = false;
          for (var n = 0; n < t.content.children.length && !breakFor; n += t._colLineNum) {
            data = t._virtual ? t.displayData[n] : t._calcExistItemPos(n);
            if (data) {
              center = t._sizeType ? (data.top + data.bottom) / 2 : center = (data.left + data.right) / 2;
              switch (t._alignCalcType) {
                case 1:
                  //单行HORIZONTAL（LEFT_TO_RIGHT）、网格VERTICAL（LEFT_TO_RIGHT）
                  if (data.right >= vLeft) {
                    t.nearestListId = data.id;
                    if (vLeft > center) t.nearestListId += t._colLineNum;
                    breakFor = true;
                  }
                  break;
                case 2:
                  //单行HORIZONTAL（RIGHT_TO_LEFT）、网格VERTICAL（RIGHT_TO_LEFT）
                  if (data.left <= vRight) {
                    t.nearestListId = data.id;
                    if (vRight < center) t.nearestListId += t._colLineNum;
                    breakFor = true;
                  }
                  break;
                case 3:
                  //单列VERTICAL（TOP_TO_BOTTOM）、网格HORIZONTAL（TOP_TO_BOTTOM）
                  if (data.bottom <= vTop) {
                    t.nearestListId = data.id;
                    if (vTop < center) t.nearestListId += t._colLineNum;
                    breakFor = true;
                  }
                  break;
                case 4:
                  //单列VERTICAL（BOTTOM_TO_TOP）、网格HORIZONTAL（BOTTOM_TO_TOP）
                  if (data.top >= vBottom) {
                    t.nearestListId = data.id;
                    if (vBottom > center) t.nearestListId += t._colLineNum;
                    breakFor = true;
                  }
                  break;
              }
            }
          }
          //判断最后一个Item。。。（哎，这些判断真心恶心，判断了前面的还要判断最后一个。。。一开始呢，就只有一个布局（单列布局），那时候代码才三百行，后来就想着完善啊，艹..这坑真深，现在这行数都一千五了= =||）
          data = t._virtual ? t.displayData[t.displayItemNum - 1] : t._calcExistItemPos(t._numItems - 1);
          if (data && data.id == t._numItems - 1) {
            center = t._sizeType ? (data.top + data.bottom) / 2 : center = (data.left + data.right) / 2;
            switch (t._alignCalcType) {
              case 1:
                //单行HORIZONTAL（LEFT_TO_RIGHT）、网格VERTICAL（LEFT_TO_RIGHT）
                if (vRight > center) t.nearestListId = data.id;
                break;
              case 2:
                //单行HORIZONTAL（RIGHT_TO_LEFT）、网格VERTICAL（RIGHT_TO_LEFT）
                if (vLeft < center) t.nearestListId = data.id;
                break;
              case 3:
                //单列VERTICAL（TOP_TO_BOTTOM）、网格HORIZONTAL（TOP_TO_BOTTOM）
                if (vBottom < center) t.nearestListId = data.id;
                break;
              case 4:
                //单列VERTICAL（BOTTOM_TO_TOP）、网格HORIZONTAL（BOTTOM_TO_TOP）
                if (vTop > center) t.nearestListId = data.id;
                break;
            }
          }
          // cc.log('t.nearestListId =', t.nearestListId);
        }
        //上一页
        ;

        _proto.prePage = function prePage(timeInSecond) {
          if (timeInSecond === void 0) {
            timeInSecond = .5;
          }
          // cc.log('👈');
          if (!this.checkInited()) return;
          this.skipPage(this.curPageNum - 1, timeInSecond);
        }
        //下一页
        ;

        _proto.nextPage = function nextPage(timeInSecond) {
          if (timeInSecond === void 0) {
            timeInSecond = .5;
          }
          // cc.log('👉');
          if (!this.checkInited()) return;
          this.skipPage(this.curPageNum + 1, timeInSecond);
        }
        //跳转到第几页
        ;

        _proto.skipPage = function skipPage(pageNum, timeInSecond) {
          var t = this;
          if (!t.checkInited()) return;
          if (t._slideMode != SlideType.PAGE) return console.error('This function is not allowed to be called, Must SlideMode = PAGE!');
          if (pageNum < 0 || pageNum >= t._numItems) return;
          if (t.curPageNum == pageNum) return;
          // cc.log(pageNum);
          t.curPageNum = pageNum;
          if (t.pageChangeEvent) {
            EventHandler.emitEvents([t.pageChangeEvent], pageNum);
          }
          t.scrollTo(pageNum, timeInSecond);
        }
        //计算 CustomSize（这个函数还是保留吧，某些罕见的情况的确还是需要手动计算customSize的）
        ;

        _proto.calcCustomSize = function calcCustomSize(numItems) {
          var t = this;
          if (!t.checkInited()) return;
          if (!t._itemTmp) return console.error('Unset template item!');
          if (!t.renderEvent) return console.error('Unset Render-Event!');
          t._customSize = {};
          var temp = instantiate(t._itemTmp);
          var ut = temp.getComponent(UITransform);
          t.content.addChild(temp);
          for (var n = 0; n < numItems; n++) {
            EventHandler.emitEvents([t.renderEvent], temp, n);
            if (ut.height != t._itemSize.height || ut.width != t._itemSize.width) {
              t._customSize[n] = t._sizeType ? ut.height : ut.width;
            }
          }
          if (!Object.keys(t._customSize).length) t._customSize = null;
          temp.removeFromParent();
          if (temp.destroy) temp.destroy();
          return t._customSize;
        };
        _createClass(List, [{
          key: "slideMode",
          get: function get() {
            return this._slideMode;
          },
          set: function set(val) {
            this._slideMode = val;
          }
        }, {
          key: "virtual",
          get: function get() {
            return this._virtual;
          },
          set: function set(val) {
            if (val != null) this._virtual = val;
            if (this._numItems != 0) {
              this._onScrolling();
            }
          }
        }, {
          key: "updateRate",
          get: function get() {
            return this._updateRate;
          },
          set: function set(val) {
            if (val >= 0 && val <= 6) {
              this._updateRate = val;
            }
          }
        }, {
          key: "selectedId",
          get: function get() {
            return this._selectedId;
          },
          set: function set(val) {
            var t = this;
            var item;
            switch (t.selectedMode) {
              case SelectedType.SINGLE:
                {
                  if (!t.repeatEventSingle && val == t._selectedId) return;
                  item = t.getItemByListId(val);
                  // if (!item && val >= 0)
                  //     return;
                  var listItem;
                  if (t._selectedId >= 0) t._lastSelectedId = t._selectedId;else
                    //如果＜0则取消选择，把_lastSelectedId也置空吧，如果以后有特殊需求再改吧。
                    t._lastSelectedId = null;
                  t._selectedId = val;
                  if (item) {
                    listItem = item.getComponent(ListItem);
                    listItem.selected = true;
                  }
                  if (t._lastSelectedId >= 0 && t._lastSelectedId != t._selectedId) {
                    var lastItem = t.getItemByListId(t._lastSelectedId);
                    if (lastItem) {
                      lastItem.getComponent(ListItem).selected = false;
                    }
                  }
                  if (t.selectedEvent) {
                    EventHandler.emitEvents([t.selectedEvent], item, val % this._actualNumItems, t._lastSelectedId == null ? null : t._lastSelectedId % this._actualNumItems);
                  }
                  break;
                }
              case SelectedType.MULT:
                {
                  item = t.getItemByListId(val);
                  if (!item) return;
                  var _listItem = item.getComponent(ListItem);
                  if (t._selectedId >= 0) t._lastSelectedId = t._selectedId;
                  t._selectedId = val;
                  var bool = !_listItem.selected;
                  _listItem.selected = bool;
                  var sub = t.multSelected.indexOf(val);
                  if (bool && sub < 0) {
                    t.multSelected.push(val);
                  } else if (!bool && sub >= 0) {
                    t.multSelected.splice(sub, 1);
                  }
                  if (t.selectedEvent) {
                    EventHandler.emitEvents([t.selectedEvent], item, val % this._actualNumItems, t._lastSelectedId == null ? null : t._lastSelectedId % this._actualNumItems, bool);
                  }
                  break;
                }
            }
          }
        }, {
          key: "numItems",
          get: function get() {
            return this._actualNumItems;
          },
          set: function set(val) {
            var t = this;
            if (!t.checkInited(false)) return;
            if (val == null || val < 0) {
              console.error('numItems set the wrong::', val);
              return;
            }
            t._actualNumItems = t._numItems = val;
            t._forceUpdate = true;
            if (t._virtual) {
              t._resizeContent();
              if (t.cyclic) {
                t._numItems = t._cyclicNum * t._numItems;
              }
              t._onScrolling();
              if (!t.frameByFrameRenderNum && t.slideMode == SlideType.PAGE) t.curPageNum = t.nearestListId;
            } else {
              if (t.cyclic) {
                t._resizeContent();
                t._numItems = t._cyclicNum * t._numItems;
              }
              var layout = t.content.getComponent(Layout);
              if (layout) {
                layout.enabled = true;
              }
              t._delRedundantItem();
              t.firstListId = 0;
              if (t.frameByFrameRenderNum > 0) {
                //先渲染几个出来
                var len = t.frameByFrameRenderNum > t._numItems ? t._numItems : t.frameByFrameRenderNum;
                for (var n = 0; n < len; n++) {
                  t._createOrUpdateItem2(n);
                }
                if (t.frameByFrameRenderNum < t._numItems) {
                  t._updateCounter = t.frameByFrameRenderNum;
                  t._updateDone = false;
                }
              } else {
                for (var _n4 = 0; _n4 < t._numItems; _n4++) {
                  t._createOrUpdateItem2(_n4);
                }
                t.displayItemNum = t._numItems;
              }
            }
          }
        }, {
          key: "scrollView",
          get: function get() {
            return this._scrollView;
          }
        }]);
        return List;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "templateType", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return TemplateType.NODE;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "tmpNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "tmpPrefab", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_slideMode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return SlideType.NORMAL;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "slideMode", [_dec9], Object.getOwnPropertyDescriptor(_class2.prototype, "slideMode"), _class2.prototype), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "pageDistance", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return .3;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "pageChangeEvent", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new EventHandler();
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "_virtual", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "virtual", [_dec13], Object.getOwnPropertyDescriptor(_class2.prototype, "virtual"), _class2.prototype), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "cyclic", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "lackCenter", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "lackSlide", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "_updateRate", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "updateRate", [_dec18], Object.getOwnPropertyDescriptor(_class2.prototype, "updateRate"), _class2.prototype), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "frameByFrameRenderNum", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "renderEvent", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new EventHandler();
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "selectedMode", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return SelectedType.NONE;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "selectedEvent", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new EventHandler();
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "repeatEventSingle", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "_numItems", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2)) || _class) || _class) || _class) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ListItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './env'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Sprite, Node, Enum, SpriteFrame, EventHandler, UITransform, tween, Vec3, Button, Component, DEV;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
      Node = module.Node;
      Enum = module.Enum;
      SpriteFrame = module.SpriteFrame;
      EventHandler = module.EventHandler;
      UITransform = module.UITransform;
      tween = module.tween;
      Vec3 = module.Vec3;
      Button = module.Button;
      Component = module.Component;
    }, function (module) {
      DEV = module.DEV;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "e9171VgYRNKK4cZrWEbQV6s", "ListItem", undefined);
      /******************************************
       * @author kL <klk0@qq.com>
       * @date 2019/12/9
       * @doc 列表Item组件.
       * 说明：
       *      1、此组件须配合List组件使用。（配套的配套的..）
       * @end
       ******************************************/
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        disallowMultiple = _decorator.disallowMultiple,
        menu = _decorator.menu,
        executionOrder = _decorator.executionOrder;
      var SelectedType = /*#__PURE__*/function (SelectedType) {
        SelectedType[SelectedType["NONE"] = 0] = "NONE";
        SelectedType[SelectedType["TOGGLE"] = 1] = "TOGGLE";
        SelectedType[SelectedType["SWITCH"] = 2] = "SWITCH";
        return SelectedType;
      }(SelectedType || {});
      var ListItem = exports('default', (_dec = disallowMultiple(), _dec2 = menu('List Item'), _dec3 = executionOrder(-5001), _dec4 = property({
        type: Sprite,
        tooltip: DEV
      }), _dec5 = property({
        type: Node,
        tooltip: DEV
      }), _dec6 = property({
        type: Enum(SelectedType),
        tooltip: DEV
      }), _dec7 = property({
        type: Node,
        tooltip: DEV,
        visible: function visible() {
          return this.selectedMode > SelectedType.NONE;
        }
      }), _dec8 = property({
        type: SpriteFrame,
        tooltip: DEV,
        visible: function visible() {
          return this.selectedMode == SelectedType.SWITCH;
        }
      }), _dec9 = property({
        tooltip: DEV
      }), ccclass(_class = _dec(_class = _dec2(_class = _dec3(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ListItem, _Component);
        function ListItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //图标
          _initializerDefineProperty(_this, "icon", _descriptor, _assertThisInitialized(_this));
          //标题
          _initializerDefineProperty(_this, "title", _descriptor2, _assertThisInitialized(_this));
          //选择模式
          _initializerDefineProperty(_this, "selectedMode", _descriptor3, _assertThisInitialized(_this));
          //被选标志
          _initializerDefineProperty(_this, "selectedFlag", _descriptor4, _assertThisInitialized(_this));
          //被选择的SpriteFrame
          _initializerDefineProperty(_this, "selectedSpriteFrame", _descriptor5, _assertThisInitialized(_this));
          //未被选择的SpriteFrame
          _this._unselectedSpriteFrame = null;
          //自适应尺寸
          _initializerDefineProperty(_this, "adaptiveSize", _descriptor6, _assertThisInitialized(_this));
          //选择
          _this._selected = false;
          //按钮组件
          _this._btnCom = void 0;
          //依赖的List组件
          _this.list = void 0;
          //是否已经注册过事件
          _this._eventReg = false;
          //序列id
          _this.listId = void 0;
          return _this;
        }
        var _proto = ListItem.prototype;
        _proto.onLoad = function onLoad() {
          // //没有按钮组件的话，selectedFlag无效
          // if (!this.btnCom)
          //     this.selectedMode == SelectedType.NONE;
          //有选择模式时，保存相应的东西
          if (this.selectedMode == SelectedType.SWITCH) {
            var com = this.selectedFlag.getComponent(Sprite);
            this._unselectedSpriteFrame = com.spriteFrame;
          }
        };
        _proto.onDestroy = function onDestroy() {
          this.node.off(Node.EventType.SIZE_CHANGED, this._onSizeChange, this);
        };
        _proto._registerEvent = function _registerEvent() {
          if (!this._eventReg) {
            if (this.btnCom && this.list.selectedMode > 0) {
              this.btnCom.clickEvents.unshift(this.createEvt(this, 'onClickThis'));
            }
            if (this.adaptiveSize) {
              this.node.on(Node.EventType.SIZE_CHANGED, this._onSizeChange, this);
            }
            this._eventReg = true;
          }
        };
        _proto._onSizeChange = function _onSizeChange() {
          this.list._onItemAdaptive(this.node);
        }
        /**
         * 创建事件
         * @param {cc.Component} component 组件脚本
         * @param {string} handlerName 触发函数名称
         * @param {cc.Node} node 组件所在node（不传的情况下取component.node）
         * @returns cc.Component.EventHandler
         */;
        _proto.createEvt = function createEvt(component, handlerName, node) {
          if (node === void 0) {
            node = null;
          }
          if (!component.isValid) return; //有些异步加载的，节点以及销毁了。
          component['comName'] = component['comName'] || component.name.match(/\<(.*?)\>/g).pop().replace(/\<|>/g, '');
          var evt = new EventHandler();
          evt.target = node || component.node;
          evt.component = component['comName'];
          evt.handler = handlerName;
          return evt;
        };
        _proto.showAni = function showAni(aniType, callFunc, del) {
          var t = this;
          var twe;
          var ut = t.node.getComponent(UITransform);
          switch (aniType) {
            case 0:
              //向上消失
              twe = tween(t.node).to(.2, {
                scale: new Vec3(.7, .7)
              }).by(.3, {
                position: new Vec3(0, ut.height * 2)
              });
              break;
            case 1:
              //向右消失
              twe = tween(t.node).to(.2, {
                scale: new Vec3(.7, .7)
              }).by(.3, {
                position: new Vec3(ut.width * 2, 0)
              });
              break;
            case 2:
              //向下消失
              twe = tween(t.node).to(.2, {
                scale: new Vec3(.7, .7)
              }).by(.3, {
                position: new Vec3(0, ut.height * -2)
              });
              break;
            case 3:
              //向左消失
              twe = tween(t.node).to(.2, {
                scale: new Vec3(.7, .7)
              }).by(.3, {
                position: new Vec3(ut.width * -2, 0)
              });
              break;
            default:
              //默认：缩小消失
              twe = tween(t.node).to(.3, {
                scale: new Vec3(.1, .1)
              });
              break;
          }
          if (callFunc || del) {
            twe.call(function () {
              if (del) {
                t.list._delSingleItem(t.node);
                for (var n = t.list.displayData.length - 1; n >= 0; n--) {
                  if (t.list.displayData[n].id == t.listId) {
                    t.list.displayData.splice(n, 1);
                    break;
                  }
                }
              }
              callFunc();
            });
          }
          twe.start();
        };
        _proto.onClickThis = function onClickThis() {
          this.list.selectedId = this.listId;
        };
        _createClass(ListItem, [{
          key: "selected",
          get: function get() {
            return this._selected;
          },
          set: function set(val) {
            this._selected = val;
            if (!this.selectedFlag) return;
            switch (this.selectedMode) {
              case SelectedType.TOGGLE:
                this.selectedFlag.active = val;
                break;
              case SelectedType.SWITCH:
                var sp = this.selectedFlag.getComponent(Sprite);
                if (sp) {
                  sp.spriteFrame = val ? this.selectedSpriteFrame : this._unselectedSpriteFrame;
                }
                break;
            }
          }
        }, {
          key: "btnCom",
          get: function get() {
            if (!this._btnCom) this._btnCom = this.node.getComponent(Button);
            return this._btnCom;
          }
        }]);
        return ListItem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "icon", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "title", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "selectedMode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return SelectedType.NONE;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "selectedFlag", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "selectedSpriteFrame", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "adaptiveSize", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class) || _class) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Loading.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseScene.ts', './GameControl.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, BaseScene, GC;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      BaseScene = module.default;
    }, function (module) {
      GC = module.GC;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "5f069iwL5ZDobOfQ/Bu8oHw", "Loading", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var Loading = exports('default', (_dec = menu('scene/Loading'), ccclass(_class = _dec(_class = /*#__PURE__*/function (_BaseScene) {
        _inheritsLoose(Loading, _BaseScene);
        function Loading() {
          return _BaseScene.apply(this, arguments) || this;
        }
        var _proto = Loading.prototype;
        _proto.onLoad = function onLoad() {
          GC.init();
          _BaseScene.prototype.onLoad.call(this);
          this.addLayers();
          GC.audio.init(this.soundMgr, this.musicMgr);
        };
        _proto.start = function start() {
          _BaseScene.prototype.start.call(this);

          // 延迟尝试播放背景音乐，给音频资源足够的加载时间
          this.scheduleOnce(function () {
            if (GC.audio && !GC.audio.isMusicPlaying()) {
              GC.audio.tryPlayMusic();
            }
          }, 0.5);
          this.loadPrefab("game/prefab/gameView", function (node) {
            GC.scene.curScene.dialogLayer.addChild(node);
          });
        };
        return Loading;
      }(BaseScene)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LocalStoreManager.ts", ['cc', './GameControl.ts', './Utils.ts', './MyLog.ts'], function (exports) {
  var cclegacy, sys, GC, Utils, MyLog;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      sys = module.sys;
    }, function (module) {
      GC = module.GC;
    }, function (module) {
      Utils = module.default;
    }, function (module) {
      MyLog = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "67fbcnahHJO4a7ReoZpPiSN", "LocalStoreManager", undefined);
      var LocalStoreManager = exports('LocalStoreManager', /*#__PURE__*/function () {
        function LocalStoreManager() {}
        var _proto = LocalStoreManager.prototype;
        _proto.keyPre = function keyPre() {
          var cf = GC.config.game;
          return cf.gameKey + "_" + cf.appId + "_" + cf.channelId + "_";
        };
        _proto.setItem = function setItem(key, value) {
          if (Utils.isNull(value)) {
            value = null;
          }
          sys.localStorage.setItem(this.keyPre() + key, this.encryptData(value));
        };
        _proto.getItem = function getItem(key, df) {
          if (df === void 0) {
            df = null;
          }
          var value = sys.localStorage.getItem(this.keyPre() + key);
          if (Boolean(value)) {
            df = this.decodeData(value);
          }
          return df;
        };
        _proto.removeItem = function removeItem(key) {
          sys.localStorage.removeItem(this.keyPre() + key);
        };
        _proto.clear = function clear() {
          sys.localStorage.clear();
        }

        //加密压缩
        ;

        _proto.encryptData = function encryptData(value) {
          var str = JSON.stringify(value);
          return str;
        }

        //解密 解压缩
        ;

        _proto.decodeData = function decodeData(value) {
          value = JSON.parse(value);
          return value;
        }

        /******************临时添加*************** */;
        _proto.getLocalItem = function getLocalItem(e, t) {
          var i = this._getData(e, t);
          if ("boolean" == typeof t) {
            MyLog.log(e, i);
            i = this._toBoolean(i, t);
          } else if ("number" == typeof t) {
            i = this._toNumber(i, t);
          } else if (Utils.isMap(t)) {
            i = this._toMap(i, t);
          } else {
            "object" == typeof t && (i = this._toJSON(i, t));
          }
          return i;
        };
        _proto._getData = function _getData(e, t) {
          var i = sys.localStorage.getItem(e);
          null !== i && "null" !== i && "" !== i || null == t || (i = t);
          return i;
        };
        _proto._toBoolean = function _toBoolean(e, t) {
          if ("boolean" == typeof e) {
            return e;
          } else if (null == e || "" == e) {
            return t;
          } else {
            return "false" !== e && false !== e && ("true" === e || true === e || undefined);
          }
        };
        _proto._toMap = function _toMap(e, t) {
          return Utils.Obj2Map(e) || t;
        };
        _proto._toNumber = function _toNumber(e, t) {
          if ("" === e) {
            return t;
          }
          var i = Number(e);
          if (isNaN(i)) {
            return t;
          } else {
            return i;
          }
        };
        _proto._toJSON = function _toJSON(e, t) {
          try {
            var r = JSON.parse(e);
            if ("object" == typeof r && r) {
              if (Utils.isObject(t) == Utils.isObject(r)) {
                return r;
              } else if (Utils.isObject(t)) {
                return Utils.Arr2Obj(r);
              } else {
                return r;
              }
            } else {
              return t;
            }
          } catch (i) {
            return t;
          }
        };
        return LocalStoreManager;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LodingView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BasePrefab.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, BasePrefab;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
    }, function (module) {
      BasePrefab = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "6302cHAkO1HTrj5W7Tr/30m", "LodingView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var LodingView = exports('default', (_dec = ccclass('LodingView'), _dec2 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_BasePrefab) {
        _inheritsLoose(LodingView, _BasePrefab);
        function LodingView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BasePrefab.call.apply(_BasePrefab, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "bg", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = LodingView.prototype;
        _proto.start = function start() {
          _BasePrefab.prototype.start.call(this);
        };
        _proto.showBg = function showBg(v) {
          if (v === void 0) {
            v = true;
          }
          this.setActive(this.bg, v);
        };
        return LodingView;
      }(BasePrefab), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "bg", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LoginData.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ProtocolConfig.ts', './GameControl.ts', './LoginDataBase.ts'], function (exports) {
  var _inheritsLoose, cclegacy, ProtocolName, GC, LoginDataBase;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ProtocolName = module.ProtocolName;
    }, function (module) {
      GC = module.GC;
    }, function (module) {
      LoginDataBase = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "d4cbdC9qJtGzbjM8VfhGNV0", "LoginData", undefined);
      var LoginData = exports('LoginData', /*#__PURE__*/function (_LoginDataBase) {
        _inheritsLoose(LoginData, _LoginDataBase);
        function LoginData() {
          return _LoginDataBase.apply(this, arguments) || this;
        }
        var _proto = LoginData.prototype;
        _proto.notify = function notify(id, msg) {
          switch (id) {
            case ProtocolName.LOGIN:
              {
                this.initData(msg);
              }
              break;
          }
        };
        _proto.initData = function initData(msg) {
          _LoginDataBase.prototype.initData.call(this, msg);
          GC.data.user.initData(msg.user);
          GC.data.game.initData(msg.user_ext);
        };
        _proto.reqLogin = function reqLogin(openId, ticketId) {
          this.reqServeGet(ProtocolName.LOGIN, {
            open_id: openId,
            login_ticket: ticketId
          });
        };
        return LoginData;
      }(LoginDataBase));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LoginDataBase.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseData.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, BaseData;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      BaseData = module.BaseData;
    }],
    execute: function () {
      cclegacy._RF.push({}, "640feJlcGVOD4wfsN+Bojd6", "LoginDataBase", undefined);
      var LoginDataBase = exports('default', /*#__PURE__*/function (_BaseData) {
        _inheritsLoose(LoginDataBase, _BaseData);
        function LoginDataBase() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseData.call.apply(_BaseData, [this].concat(args)) || this;
          _this._msg = {};
          return _this;
        }
        var _proto = LoginDataBase.prototype;
        _proto.initData = function initData(msg) {
          this._msg = msg;
        };
        _createClass(LoginDataBase, [{
          key: "token",
          get: function get() {
            var _this$_msg;
            return this == null || (_this$_msg = this._msg) == null ? void 0 : _this$_msg.token;
          }
        }, {
          key: "open_gm",
          get: function get() {
            var _this$_msg2;
            return this == null || (_this$_msg2 = this._msg) == null ? void 0 : _this$_msg2.open_gm;
          }
        }, {
          key: "active_user",
          get: function get() {
            var _this$_msg3;
            return this == null || (_this$_msg3 = this._msg) == null || (_this$_msg3 = _this$_msg3.analyse) == null ? void 0 : _this$_msg3.active_user;
          }
        }]);
        return LoginDataBase;
      }(BaseData));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./WxAuthView.ts', './GameControl.ts', './Base.ts', './BaseComponent.ts', './BaseData.ts', './BaseDialog.ts', './BaseModel.ts', './BasePrefab.ts', './BaseScene.ts', './EnumConfig.ts', './EventName.ts', './GameConfig.ts', './PathCongfig.ts', './ProtocolConfig.ts', './TypeConfig.ts', './cn_sensitive.ts', './cn_text.ts', './GameData.ts', './GameDataBase.ts', './SkinData.ts', './LoginData.ts', './LoginDataBase.ts', './OnlineParamData.ts', './OnlineData.ts', './SevenDayData.ts', './SevenDayDataBase.ts', './UserData.ts', './UserDataBase.ts', './ActionsManager.ts', './AudioManager.ts', './ConfigManager.ts', './DataManager.ts', './DialogManager.ts', './ExcelManager.ts', './LanguageManager.ts', './LocalStoreManager.ts', './NetManager.ts', './NotifyManager.ts', './PoolManager.ts', './ResourceManager.ts', './SDKManager.ts', './SceneManger.ts', './SpriteFrameManager.ts', './HttpLink.ts', './SocketLink.ts', './BaseSdk.ts', './HcSdk.ts', './BlSdk.ts', './DySdk.ts', './KsSdk.ts', './WxSdk.ts', './DialogUtils.ts', './MyLog.ts', './ResUtils.ts', './TimeUtils.ts', './Utils.ts', './md51.ts', './ComTextTip.ts', './List.ts', './ListItem.ts', './LodingView.ts', './uv1.ts', './GlobalData.ts', './ClickEffect.ts', './CountDown.ts', './DamageText.ts', './EffectManager.ts', './EnemySoldier.ts', './FloatCurrency.ts', './GameView.ts', './GuideManager.ts', './Monster.ts', './OurSoldier.ts', './ResultDlg.ts', './Role.ts', './GameViewConfig.ts', './Loading.ts', './SettingDlg.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/md51.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('hex_md5', hex_md5);
      cclegacy._RF.push({}, "c7fa7ELVi5J+45QukUb+2t6", "md51", undefined);
      //计算MD5算法  
      var hexcase = 0;
      function hex_md5(a) {
        if (a == "") return a;
        return rstr2hex(rstr_md5(str2rstr_utf8(a)));
      }
      function rstr_md5(a) {
        return binl2rstr(binl_md5(rstr2binl(a), a.length * 8));
      }
      function rstr2hex(c) {
        try {
          hexcase;
        } catch (g) {
          hexcase = 0;
        }
        var f = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
        var b = "";
        var a;
        for (var d = 0; d < c.length; d++) {
          a = c.charCodeAt(d);
          b += f.charAt(a >>> 4 & 15) + f.charAt(a & 15);
        }
        return b;
      }
      function str2rstr_utf8(c) {
        var b = "";
        var d = -1;
        var a, e;
        while (++d < c.length) {
          a = c.charCodeAt(d);
          e = d + 1 < c.length ? c.charCodeAt(d + 1) : 0;
          if (55296 <= a && a <= 56319 && 56320 <= e && e <= 57343) {
            a = 65536 + ((a & 1023) << 10) + (e & 1023);
            d++;
          }
          if (a <= 127) {
            b += String.fromCharCode(a);
          } else {
            if (a <= 2047) {
              b += String.fromCharCode(192 | a >>> 6 & 31, 128 | a & 63);
            } else {
              if (a <= 65535) {
                b += String.fromCharCode(224 | a >>> 12 & 15, 128 | a >>> 6 & 63, 128 | a & 63);
              } else {
                if (a <= 2097151) {
                  b += String.fromCharCode(240 | a >>> 18 & 7, 128 | a >>> 12 & 63, 128 | a >>> 6 & 63, 128 | a & 63);
                }
              }
            }
          }
        }
        return b;
      }
      function rstr2binl(b) {
        var a = Array(b.length >> 2);
        for (var c = 0; c < a.length; c++) {
          a[c] = 0;
        }
        for (var c = 0; c < b.length * 8; c += 8) {
          a[c >> 5] |= (b.charCodeAt(c / 8) & 255) << c % 32;
        }
        return a;
      }
      function binl2rstr(b) {
        var a = "";
        for (var c = 0; c < b.length * 32; c += 8) {
          a += String.fromCharCode(b[c >> 5] >>> c % 32 & 255);
        }
        return a;
      }
      function binl_md5(p, k) {
        p[k >> 5] |= 128 << k % 32;
        p[(k + 64 >>> 9 << 4) + 14] = k;
        var o = 1732584193;
        var n = -271733879;
        var m = -1732584194;
        var l = 271733878;
        for (var g = 0; g < p.length; g += 16) {
          var j = o;
          var h = n;
          var f = m;
          var e = l;
          o = md5_ff(o, n, m, l, p[g + 0], 7, -680876936);
          l = md5_ff(l, o, n, m, p[g + 1], 12, -389564586);
          m = md5_ff(m, l, o, n, p[g + 2], 17, 606105819);
          n = md5_ff(n, m, l, o, p[g + 3], 22, -1044525330);
          o = md5_ff(o, n, m, l, p[g + 4], 7, -176418897);
          l = md5_ff(l, o, n, m, p[g + 5], 12, 1200080426);
          m = md5_ff(m, l, o, n, p[g + 6], 17, -1473231341);
          n = md5_ff(n, m, l, o, p[g + 7], 22, -45705983);
          o = md5_ff(o, n, m, l, p[g + 8], 7, 1770035416);
          l = md5_ff(l, o, n, m, p[g + 9], 12, -1958414417);
          m = md5_ff(m, l, o, n, p[g + 10], 17, -42063);
          n = md5_ff(n, m, l, o, p[g + 11], 22, -1990404162);
          o = md5_ff(o, n, m, l, p[g + 12], 7, 1804603682);
          l = md5_ff(l, o, n, m, p[g + 13], 12, -40341101);
          m = md5_ff(m, l, o, n, p[g + 14], 17, -1502002290);
          n = md5_ff(n, m, l, o, p[g + 15], 22, 1236535329);
          o = md5_gg(o, n, m, l, p[g + 1], 5, -165796510);
          l = md5_gg(l, o, n, m, p[g + 6], 9, -1069501632);
          m = md5_gg(m, l, o, n, p[g + 11], 14, 643717713);
          n = md5_gg(n, m, l, o, p[g + 0], 20, -373897302);
          o = md5_gg(o, n, m, l, p[g + 5], 5, -701558691);
          l = md5_gg(l, o, n, m, p[g + 10], 9, 38016083);
          m = md5_gg(m, l, o, n, p[g + 15], 14, -660478335);
          n = md5_gg(n, m, l, o, p[g + 4], 20, -405537848);
          o = md5_gg(o, n, m, l, p[g + 9], 5, 568446438);
          l = md5_gg(l, o, n, m, p[g + 14], 9, -1019803690);
          m = md5_gg(m, l, o, n, p[g + 3], 14, -187363961);
          n = md5_gg(n, m, l, o, p[g + 8], 20, 1163531501);
          o = md5_gg(o, n, m, l, p[g + 13], 5, -1444681467);
          l = md5_gg(l, o, n, m, p[g + 2], 9, -51403784);
          m = md5_gg(m, l, o, n, p[g + 7], 14, 1735328473);
          n = md5_gg(n, m, l, o, p[g + 12], 20, -1926607734);
          o = md5_hh(o, n, m, l, p[g + 5], 4, -378558);
          l = md5_hh(l, o, n, m, p[g + 8], 11, -2022574463);
          m = md5_hh(m, l, o, n, p[g + 11], 16, 1839030562);
          n = md5_hh(n, m, l, o, p[g + 14], 23, -35309556);
          o = md5_hh(o, n, m, l, p[g + 1], 4, -1530992060);
          l = md5_hh(l, o, n, m, p[g + 4], 11, 1272893353);
          m = md5_hh(m, l, o, n, p[g + 7], 16, -155497632);
          n = md5_hh(n, m, l, o, p[g + 10], 23, -1094730640);
          o = md5_hh(o, n, m, l, p[g + 13], 4, 681279174);
          l = md5_hh(l, o, n, m, p[g + 0], 11, -358537222);
          m = md5_hh(m, l, o, n, p[g + 3], 16, -722521979);
          n = md5_hh(n, m, l, o, p[g + 6], 23, 76029189);
          o = md5_hh(o, n, m, l, p[g + 9], 4, -640364487);
          l = md5_hh(l, o, n, m, p[g + 12], 11, -421815835);
          m = md5_hh(m, l, o, n, p[g + 15], 16, 530742520);
          n = md5_hh(n, m, l, o, p[g + 2], 23, -995338651);
          o = md5_ii(o, n, m, l, p[g + 0], 6, -198630844);
          l = md5_ii(l, o, n, m, p[g + 7], 10, 1126891415);
          m = md5_ii(m, l, o, n, p[g + 14], 15, -1416354905);
          n = md5_ii(n, m, l, o, p[g + 5], 21, -57434055);
          o = md5_ii(o, n, m, l, p[g + 12], 6, 1700485571);
          l = md5_ii(l, o, n, m, p[g + 3], 10, -1894986606);
          m = md5_ii(m, l, o, n, p[g + 10], 15, -1051523);
          n = md5_ii(n, m, l, o, p[g + 1], 21, -2054922799);
          o = md5_ii(o, n, m, l, p[g + 8], 6, 1873313359);
          l = md5_ii(l, o, n, m, p[g + 15], 10, -30611744);
          m = md5_ii(m, l, o, n, p[g + 6], 15, -1560198380);
          n = md5_ii(n, m, l, o, p[g + 13], 21, 1309151649);
          o = md5_ii(o, n, m, l, p[g + 4], 6, -145523070);
          l = md5_ii(l, o, n, m, p[g + 11], 10, -1120210379);
          m = md5_ii(m, l, o, n, p[g + 2], 15, 718787259);
          n = md5_ii(n, m, l, o, p[g + 9], 21, -343485551);
          o = safe_add(o, j);
          n = safe_add(n, h);
          m = safe_add(m, f);
          l = safe_add(l, e);
        }
        return Array(o, n, m, l);
      }
      function md5_cmn(h, e, d, c, g, f) {
        return safe_add(bit_rol(safe_add(safe_add(e, h), safe_add(c, f)), g), d);
      }
      function md5_ff(g, f, k, j, e, i, h) {
        return md5_cmn(f & k | ~f & j, g, f, e, i, h);
      }
      function md5_gg(g, f, k, j, e, i, h) {
        return md5_cmn(f & j | k & ~j, g, f, e, i, h);
      }
      function md5_hh(g, f, k, j, e, i, h) {
        return md5_cmn(f ^ k ^ j, g, f, e, i, h);
      }
      function md5_ii(g, f, k, j, e, i, h) {
        return md5_cmn(k ^ (f | ~j), g, f, e, i, h);
      }
      function safe_add(a, d) {
        var c = (a & 65535) + (d & 65535);
        var b = (a >> 16) + (d >> 16) + (c >> 16);
        return b << 16 | c & 65535;
      }
      function bit_rol(a, b) {
        return a << b | a >>> 32 - b;
      }
      var STR_UTF8 = exports('STR_UTF8', str2rstr_utf8);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Monster.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BasePrefab.ts', './DamageText.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Sprite, Color, Vec3, BasePrefab, DamageTextPool;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
      Color = module.Color;
      Vec3 = module.Vec3;
    }, function (module) {
      BasePrefab = module.default;
    }, function (module) {
      DamageTextPool = module.DamageTextPool;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "e179f0h9YlIKZhP5BDR6Px1", "Monster", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Monster = exports('Monster', (_dec = ccclass('Monster'), _dec2 = property(Sprite), _dec(_class = (_class2 = /*#__PURE__*/function (_BasePrefab) {
        _inheritsLoose(Monster, _BasePrefab);
        function Monster() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BasePrefab.call.apply(_BasePrefab, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "monsterSprite", _descriptor, _assertThisInitialized(_this));
          _this.isDead = false;
          // 掉血飘字对象池
          _this.damageTextPool = DamageTextPool.getInstance();
          return _this;
        }
        var _proto = Monster.prototype;
        //掉血飘字对象池 如需显示掉血飘字，则需要初始化掉血飘字对象池
        _proto.start = function start() {}

        /**
        * 显示掉血飘字（使用对象池）
        */;
        _proto.playDamageFloat = function playDamageFloat() {
          if (this.isDead) return;

          // 获取父节点（通常是Canvas或GameView的根节点）
          var parentNode = this.damageTextPool.getParentNode(this.node);
          if (!parentNode) {
            console.warn('Monster: 无法获取掉血飘字父节点');
            return;
          }

          // 获取怪物的世界位置（在怪物上方）
          var monsterWorldPos = this.node.getWorldPosition();
          {
            // 普通怪物：显示1个飘字
            var _damageText = this.damageTextPool.get();
            if (!_damageText) {
              console.warn('Monster: 无法获取掉血飘字对象');
              return;
            }
            var _value = this.randomInt(10000, 50000);
            var _color = new Color(255, 64, 64, 255); // 红色

            var _startWorldPos = new Vec3(monsterWorldPos.x - 50, monsterWorldPos.y + 50,
            // 在怪物上方50像素
            monsterWorldPos.z);

            // 显示飘字
            _damageText.show("-" + _value, _color, _startWorldPos, parentNode);
          }
        }
        /**
        * 随机整数
        */;
        _proto.randomInt = function randomInt(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        _proto.update = function update(deltaTime) {};
        return Monster;
      }(BasePrefab), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "monsterSprite", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MyLog.ts", ['cc', './EnumConfig.ts', './GameControl.ts'], function (exports) {
  var cclegacy, EColor, GC;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      EColor = module.EColor;
    }, function (module) {
      GC = module.GC;
    }],
    execute: function () {
      cclegacy._RF.push({}, "96408hlEIxHNbxJmI5jDr44", "MyLog", undefined);
      var MyLog = exports('default', /*#__PURE__*/function () {
        function MyLog() {}
        MyLog.log = function log(msg) {
          if (GC.config.game.debug || GC.config.game.GM || MyLog.needLog) {
            var _console;
            for (var _len = arguments.length, subst = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              subst[_key - 1] = arguments[_key];
            }
            (_console = console).log.apply(_console, [msg].concat(subst));
          }
        };
        MyLog.warn = function warn(msg) {
          if (GC.config.game.debug || GC.config.game.GM || MyLog.needLog) {
            var _console2;
            for (var _len2 = arguments.length, subst = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              subst[_key2 - 1] = arguments[_key2];
            }
            (_console2 = console).warn.apply(_console2, [msg].concat(subst));
          }
        };
        MyLog.error = function error(msg) {
          if (GC.config.game.debug || GC.config.game.GM || MyLog.needLog) {
            var _console3;
            for (var _len3 = arguments.length, subst = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
              subst[_key3 - 1] = arguments[_key3];
            }
            (_console3 = console).error.apply(_console3, [msg].concat(subst));
          }
        };
        MyLog.red = function red(msg) {
          for (var _len4 = arguments.length, subst = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
            subst[_key4 - 1] = arguments[_key4];
          }
          this.log.apply(this, [":==> %c" + msg, "color:" + EColor.red].concat(subst));
        };
        MyLog.orange = function orange(msg) {
          for (var _len5 = arguments.length, subst = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
            subst[_key5 - 1] = arguments[_key5];
          }
          this.log.apply(this, [":==> %c" + msg, "color:" + EColor.orange].concat(subst));
        };
        MyLog.purple = function purple(msg) {
          for (var _len6 = arguments.length, subst = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
            subst[_key6 - 1] = arguments[_key6];
          }
          this.log.apply(this, [":==> %c" + msg, "color:" + EColor.purple].concat(subst));
        };
        MyLog.blue = function blue(msg) {
          for (var _len7 = arguments.length, subst = new Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
            subst[_key7 - 1] = arguments[_key7];
          }
          this.log.apply(this, [":==> %c" + msg, "color:" + EColor.blue].concat(subst));
        };
        MyLog.green = function green(msg) {
          for (var _len8 = arguments.length, subst = new Array(_len8 > 1 ? _len8 - 1 : 0), _key8 = 1; _key8 < _len8; _key8++) {
            subst[_key8 - 1] = arguments[_key8];
          }
          this.log.apply(this, [":==> %c" + msg, "color:" + EColor.green].concat(subst));
        };
        return MyLog;
      }());
      MyLog.needLog = false;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/NetManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './HttpLink.ts', './SocketLink.ts'], function (exports) {
  var _createClass, cclegacy, log, HttpLink, SocketLink;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      log = module.log;
    }, function (module) {
      HttpLink = module.HttpLink;
    }, function (module) {
      SocketLink = module.SocketLink;
    }],
    execute: function () {
      cclegacy._RF.push({}, "7c5d7aU8OZDJrwPH3nSU5M0", "NetManager", undefined);
      var NetManager = exports('default', /*#__PURE__*/function () {
        function NetManager() {
          this._http = null;
          this._socket = null;
        }
        var _proto = NetManager.prototype;
        _proto.protoBufAddMsgId = function protoBufAddMsgId(msgId, buffer) {
          var addtag_buffer = new Uint8Array(buffer.length + 2);
          var tagBinary = this.intToUint8Array(msgId, 16);
          var tagUnit8 = new Uint8Array(tagBinary);
          addtag_buffer.set(tagUnit8, 0);
          addtag_buffer.set(buffer.subarray(0, buffer.length), 2);
          return addtag_buffer;
        }

        // parseProtoBufId(obj: MessageEvent): { msgId: number, data: Uint8Array } {
        //     let arrayBuffer: ArrayBuffer = obj.data;
        //     let dataUnit8Array = new Uint8Array(arrayBuffer);
        ;

        _proto.parseProtoBufId = function parseProtoBufId(dataUnit8Array) {
          var id = this.uint8ArrayToInt(dataUnit8Array.slice(0, 2));
          log("receive message id = " + id);
          dataUnit8Array = dataUnit8Array.slice(2);
          return {
            msgId: id,
            data: dataUnit8Array
          };
        };
        _proto.intToUint8Array = function intToUint8Array(num, Bits) {
          var resArry = [];
          var xresArry = [];
          var binaryStr = num.toString(2);
          for (var i = 0; i < binaryStr.length; i++) {
            resArry.push(parseInt(binaryStr[i]));
          }
          if (Bits) {
            for (var r = resArry.length; r < Bits; r++) {
              resArry.unshift(0);
            }
          }
          var resArryStr = resArry.join("");
          for (var j = 0; j < Bits; j += 8) {
            xresArry.push(parseInt(resArryStr.slice(j, j + 8), 2));
          }
          return xresArry;
        };
        _proto.uint8ArrayToInt = function uint8ArrayToInt(uint8Ary) {
          var retInt = 0;
          for (var i = 0; i < uint8Ary.length; i++) {
            retInt |= uint8Ary[i] << 8 * (uint8Ary.length - i - 1);
          }
          return retInt;
        };
        _createClass(NetManager, [{
          key: "http",
          get: function get() {
            if (this._http == null) {
              this._http = new HttpLink();
            }
            return this._http;
          }
        }, {
          key: "socket",
          get: function get() {
            if (this._socket == null) {
              this._socket = new SocketLink();
            }
            return this._socket;
          }
        }]);
        return NetManager;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/NotifyManager.ts", ['cc', './Utils.ts'], function (exports) {
  var cclegacy, Utils;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      Utils = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "72a83+kkLVOM7DM/q7a7gE5", "NotifyManager", undefined);
      var Observer = exports('Observer', /*#__PURE__*/function () {
        function Observer(callback, context) {
          /** 回调函数 */
          this._callback = null;
          /** 上下文 */
          this._context = null;
          this._callback = callback;
          this._context = context;
        }
        var _proto = Observer.prototype;
        _proto.notify = function notify() {
          var _this$_callback;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          (_this$_callback = this._callback).call.apply(_this$_callback, [this._context].concat(args));
        };
        _proto.compar = function compar(context) {
          return context == this._context;
        };
        return Observer;
      }());

      /**
       * 事件消息处理
       */
      var NotifyManager = exports('NotifyManager', /*#__PURE__*/function () {
        function NotifyManager() {
          /** 监听数组 */
          this._listeners = new Map();
        }
        var _proto2 = NotifyManager.prototype;
        _proto2.register = function register(name, callback, context) {
          var observers = this._listeners.get(name);
          if (!observers) {
            this._listeners.set(name, new Array());
          }
          var haveListener = this.isHaveListener(name, context);
          if (!haveListener) {
            this._listeners.get(name).push(new Observer(callback, context));
          }
          return !haveListener;
        };
        _proto2.isHaveListener = function isHaveListener(name, context) {
          var observers = this._listeners.get(name);
          if (!Utils.isNull(observers)) {
            return observers.some(function (observer) {
              return observer.compar(context);
            });
          }
          return false;
        };
        _proto2.removeListener = function removeListener(name, callback, context) {
          var observers = this._listeners.get(name);
          if (!observers) return;
          observers.some(function (observer, index) {
            if (observer.compar(context)) {
              observers.splice(index, 1);
              return true;
            }
            return false;
          });
          if (observers.length == 0) {
            this._listeners["delete"](name);
          }
        };
        _proto2.post = function post(name) {
          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }
          var observers = this._listeners.get(name);
          if (Utils.isNull(observers)) return;
          observers.forEach(function (observer) {
            return observer.notify.apply(observer, args);
          });
        };
        return NotifyManager;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/OnlineData.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      // import { _decorator, Component, Node } from 'cc';
      cclegacy._RF.push({}, "27f81ldgS1LFrANvTwJGG8k", "OnlineData", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/OnlineParamData.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseData.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, BaseData;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      BaseData = module.BaseData;
    }],
    execute: function () {
      cclegacy._RF.push({}, "602aaTAfcBDQ6ZnM5VO2H6D", "OnlineParamData", undefined);
      var OnlineParamData = exports('default', /*#__PURE__*/function (_BaseData) {
        _inheritsLoose(OnlineParamData, _BaseData);
        function OnlineParamData() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseData.call.apply(_BaseData, [this].concat(args)) || this;
          _this._params = null;
          return _this;
        }
        var _proto = OnlineParamData.prototype;
        _proto.initData = function initData(res) {
          this._params = res;
        }

        // get cdKeys(): Array<TCdKeyData> {
        //     var c = JSON.parse(this._params?.cdKeys || null);
        //     return c;
        // }
        ;

        _createClass(OnlineParamData, [{
          key: "daren_white_list",
          get: function get() {
            var _this$_params;
            return ((_this$_params = this._params) == null ? void 0 : _this$_params.daren_white_list.split("_").map(Number)) || [];
          }
        }]);
        return OnlineParamData;
      }(BaseData));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/OurSoldier.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BasePrefab.ts', './SpriteFrameManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Sprite, BasePrefab, SpriteFrameManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
    }, function (module) {
      BasePrefab = module.default;
    }, function (module) {
      SpriteFrameManager = module.SpriteFrameManager;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "815dcl8KLZGIZ6InVQQs1q7", "OurSoldier", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var OurSoldier = exports('OurSoldier', (_dec = ccclass('OurSoldier'), _dec2 = property(Sprite), _dec(_class = (_class2 = /*#__PURE__*/function (_BasePrefab) {
        _inheritsLoose(OurSoldier, _BasePrefab);
        function OurSoldier() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BasePrefab.call.apply(_BasePrefab, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "soldierSprite", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = OurSoldier.prototype;
        _proto.playMoveAnim = /*#__PURE__*/function () {
          var _playMoveAnim = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var target;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  target = this.soldierSprite || this.node.getComponent(Sprite);
                  if (target) {
                    _context.next = 3;
                    break;
                  }
                  return _context.abrupt("return");
                case 3:
                  _context.next = 5;
                  return SpriteFrameManager.instance.playDir(target, 'game/images/seqPic/ourSoldier/移动', 36, true);
                case 5:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function playMoveAnim() {
            return _playMoveAnim.apply(this, arguments);
          }
          return playMoveAnim;
        }();
        return OurSoldier;
      }(BasePrefab), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "soldierSprite", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PathCongfig.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "73fb3hDTJdA0Ykrmvr5FOIC", "PathCongfig", undefined);
      var ResPath = exports('ResPath', {
        defaultSp: "images/defaultSp",
        findBear: "findBearSpines"
      });
      var DialogPath = exports('DialogPath', {
        commonTipDlg: "prefabs/common/comTipDlg",
        duihuanmaDig: "prefabs/setting/duihuanmaDig",
        rankDlg: "prefabs/rank/rankDlg",
        resultDlg: "game/prefab/resultDlg"
      });
      var PrefabPath = exports('PrefabPath', {
        comTextTips: "prefabs/common/comTextTips",
        loadingView: "prefabs/common/loadingView",
        touchNode: "prefabs/common/touchNode",
        propItem: "prefabs/common/propItem"
      });
      var AudioPath = exports('AudioPath', {
        rootPath: "audios/",
        bmg: "bgm",
        win: "\u6E38\u620F\u80DC\u5229",
        lose: "\u6E38\u620F\u5931\u8D25",
        click: "\u70B9\u51FB",
        倒吸凉气: "\u5012\u5438\u51C9\u6C14",
        升级: "\u5347\u7EA7",
        弹跳: "\u5F39\u8DF3",
        死亡: "\u6B7B\u4EA1",
        警告: "\u8B66\u544A",
        错误: "\u9519\u8BEF",
        闪烁: "\u95EA\u70C1"
      });
      var bundleRes = exports('bundleRes', {
        // 资源名称 ：包名
        // UIPlantDetailsView: 'skill', //植物详情界面
      });

      // 分包目录
      var bundleDir = exports('bundleDir', {
        // 动态加载的资源包名 
        // data: 1,
        // prefabs: 1,
        // images: 1,
        // findBearSpines: 1,
        // flowerIcon: 1,
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PoolManager.ts", ['cc', './ComTextTip.ts', './PathCongfig.ts'], function (exports) {
  var cclegacy, instantiate, NodePool, ComTextTip, PrefabPath;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      instantiate = module.instantiate;
      NodePool = module.NodePool;
    }, function (module) {
      ComTextTip = module.default;
    }, function (module) {
      PrefabPath = module.PrefabPath;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a8eb0u6BxlN44Sa1+jHxlXG", "PoolManager", undefined);

      // 定义临时池项接口
      var PoolManager = exports('default', /*#__PURE__*/function () {
        function PoolManager() {
          this._comTextTipPool = new NodePool();
          this._comTextTipPrefab = null;
          this._propItemPool = new NodePool();
          this._propItemPrefab = null;
          this._poolDict = {};
          this.tempPool = new Map();
        }
        var _proto = PoolManager.prototype;
        _proto.setPrefabByPath = function setPrefabByPath(path, prefab) {
          switch (path) {
            case PrefabPath.comTextTips:
              {
                this._comTextTipPrefab = prefab;
                this._comTextTipPool.clear();
              }
              break;
            case PrefabPath.propItem:
              {
                this._propItemPrefab = prefab;
                this._propItemPool.clear();
              }
              break;
          }
        }

        //comTextTip
        ;

        _proto.getComTextTip = function getComTextTip(parent, prefab) {
          var node = this._comTextTipPool.get();
          if (!node) {
            if (!this._comTextTipPrefab && prefab) this._comTextTipPrefab = prefab;
            node = instantiate(this._comTextTipPrefab);
          }
          parent && (node.parent = parent);
          return node.getComponent(ComTextTip);
        };
        _proto.putComTextTip = function putComTextTip(item) {
          this._comTextTipPool.put(item.node);
        };
        _proto.get = function get(prefab, parent) {
          var name = prefab.data.name;
          var node;
          if (this._poolDict.hasOwnProperty(name)) {
            var dicPrfab = this._poolDict[name].get();
            if (dicPrfab) {
              node = dicPrfab;
            } else {
              node = instantiate(prefab);
            }
          } else {
            this._poolDict[name] = new NodePool();
            node = instantiate(prefab);
          }
          if (!node.isValid) {
            node = instantiate(prefab);
          }
          if (parent) {
            node.setParent(parent);
          }
          return node;
        };
        _proto.put = function put(node) {
          if (!node) return;
          var name = node.name;
          var pool;
          if (this._poolDict.hasOwnProperty(name)) {
            pool = this._poolDict[name];
          } else {
            pool = new NodePool();
            this._poolDict[name] = pool;
          }
          pool.put(node);
        };
        _proto.clear = function clear(prefabOrName) {
          var name = typeof prefabOrName === 'string' ? prefabOrName : prefabOrName.data.name;
          if (this._poolDict.hasOwnProperty(name)) {
            this._poolDict[name].clear();
          }
        };
        return PoolManager;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ProtocolConfig.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "617acfL8qpOFac72uKQyjVP", "ProtocolConfig", undefined);
      var ProtocolName = exports('ProtocolName', {
        LOGIN: "users/login",
        UPDATE_USER: "users/update",
        RANK_UPLOAD: "rank/upload",
        RANK_LIST: "rank/list",
        UPDATE_USER_INFO: "users/update_info",
        getGiftList: "wx/gift_list",
        getGift: "wx/gift_reward",
        reportInvite: "invite/upload",
        getInviteRecord: "invite/list",
        getInviteReward: "invite/reward"
      }); //POST 领取礼物：（常规参数 + record_id)
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ResourceManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MyLog.ts', './PathCongfig.ts', './BasePrefab.ts', './Utils.ts'], function (exports) {
  var _asyncToGenerator, _regeneratorRuntime, cclegacy, assetManager, resources, instantiate, Vec3, AnimationClip, SpriteFrame, Prefab, MyLog, bundleDir, BasePrefab, Utils;
  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      assetManager = module.assetManager;
      resources = module.resources;
      instantiate = module.instantiate;
      Vec3 = module.Vec3;
      AnimationClip = module.AnimationClip;
      SpriteFrame = module.SpriteFrame;
      Prefab = module.Prefab;
    }, function (module) {
      MyLog = module.default;
    }, function (module) {
      bundleDir = module.bundleDir;
    }, function (module) {
      BasePrefab = module.default;
    }, function (module) {
      Utils = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ba96bgC6nJCPryIrO6m6Zba", "ResourceManager", undefined);
      var ResourceManager = exports('ResourceManager', /*#__PURE__*/function () {
        function ResourceManager() {}
        var _proto = ResourceManager.prototype;
        //获取加载过的资源
        _proto.getRes = function getRes(path, asset_type, bundle) {
          if (bundle === void 0) {
            bundle = resources;
          }
          var res = bundle.get(path, asset_type);
          return res;
        };
        _proto.getDir = function getDir(path, asset_type, bundle) {
          if (bundle === void 0) {
            bundle = resources;
          }
          var dir = bundle.getDirWithPath(path, asset_type);
          return dir;
        };
        _proto.getBundle = function getBundle(path) {
          return assetManager.getBundle(path);
        }

        // 在网络断获取资源
        ;

        _proto.loadUrl = function loadUrl(url, callBack, endFlag, errorCb) {
          var res = this.getRes(url);
          if (res) {
            callBack && callBack(res);
            return;
          }
          var endStr = endFlag || this.getUrlEnd(url);
          assetManager.loadRemote(url, {
            ext: endStr
          }, function (error, res) {
            if (error) {
              MyLog.warn("ResourceMgr load error : ", url, error);
              errorCb && errorCb(error);
              return;
            }
            try {
              callBack && callBack(res);
            } catch (e) {
              MyLog.warn(e.stack);
              errorCb && errorCb(error);
            }
          });
        };
        _proto.getUrlEnd = function getUrlEnd(url) {
          var end = ".txt";
          if (url.match(".png")) end = ".png";else if (url.match(".mp3")) end = ".mp3";else if (url.match(".json")) end = ".json";else if (url.match(".jpg")) end = ".jpg";else if (url.match(".jpeg")) end = ".jpeg";else if (url.match(".wav")) end = ".wav";else if (url.match(".bin")) end = ".bin";else if (url.match(".zip")) end = ".zip";
          return end;
        };
        _proto.getBundleInfoFromPath = function getBundleInfoFromPath(path) {
          var index = path.indexOf('/');
          var bundleName = path.substring(0, index);
          var urlName = path.substring(index + 1);
          var isBundle = Boolean(bundleDir[bundleName]);
          return {
            isBundle: isBundle,
            bundleName: bundleName,
            urlName: urlName
          };
        }

        //加载本地资源
        ;

        _proto.loadRes = function loadRes(path, asset_type, callBack, errorCb, pro) {
          var _this = this;
          if (asset_type === void 0) {
            asset_type = SpriteFrame;
          }
          if (pro === void 0) {
            pro = null;
          }
          var _this$getBundleInfoFr = this.getBundleInfoFromPath(path),
            isBundle = _this$getBundleInfoFr.isBundle,
            bundleName = _this$getBundleInfoFr.bundleName,
            urlName = _this$getBundleInfoFr.urlName;
          if (isBundle) {
            //读取的分包资源
            this.loadFromBundleName(bundleName, urlName, asset_type, callBack, errorCb, pro);
            return;
          }
          var res = this.getRes(path, asset_type);
          if (res) {
            this.checkAssetIsPrefab(path, res, asset_type, callBack);
            return;
          }
          resources.load(path, asset_type, function (error, res) {
            if (error) {
              MyLog.warn("ResourceMgr loadRes error : ", path, error);
              errorCb && errorCb(error);
              return;
            }
            try {
              _this.checkAssetIsPrefab(path, res, asset_type, callBack);
            } catch (e) {
              MyLog.warn(e.stack);
              errorCb && errorCb(e);
            }
          });
        }

        //异步  加载单个资源
        ;

        _proto.loadResAwait = /*#__PURE__*/
        function () {
          var _loadResAwait = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(path, asset_type, pro, overFun) {
            var _this2 = this;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (pro === void 0) {
                    pro = null;
                  }
                  if (overFun === void 0) {
                    overFun = null;
                  }
                  return _context.abrupt("return", new Promise(function (resolve, reject) {
                    _this2.loadRes(path, asset_type, function (res) {
                      overFun && overFun();
                      resolve(res);
                    }, function (error) {
                      reject(error);
                    }, pro);
                  }));
                case 3:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          function loadResAwait(_x, _x2, _x3, _x4) {
            return _loadResAwait.apply(this, arguments);
          }
          return loadResAwait;
        }();
        _proto.checkAssetIsPrefab = function checkAssetIsPrefab(path, res, asset_type, callBack) {
          var isPrefab = asset_type == Prefab;
          if (isPrefab) {
            this.setPrefab(path, res, callBack);
          } else {
            callBack && callBack(res);
          }
        };
        _proto.setPrefab = function setPrefab(path, res, callBack) {
          var node = instantiate(res);
          node.setPosition(Vec3.ZERO);
          var prefab = node.getComponent(BasePrefab);
          if (!Boolean(prefab)) {
            prefab = node.addComponent(BasePrefab);
          }
          callBack && callBack(node);
        };
        _proto.loadDir = function loadDir(path, asset_type, callBack, errorCd) {
          var _this$getBundleInfoFr2 = this.getBundleInfoFromPath(path),
            isBundle = _this$getBundleInfoFr2.isBundle,
            bundleName = _this$getBundleInfoFr2.bundleName,
            urlName = _this$getBundleInfoFr2.urlName;
          if (isBundle) {
            //读取的分包资源
            this.loadDirFromBundleName(bundleName, urlName, asset_type, callBack, errorCd);
            return;
          }
          var items = this.getDir(path, asset_type);
          if (items && items.length) {
            callBack && callBack(items);
            return;
          }
          resources.loadDir(path, asset_type, function (error, items) {
            if (error) {
              errorCd && errorCd(error);
              return;
            }
            callBack && callBack(items);
          });
        }

        //异步  加载单个资源
        ;

        _proto.loadDirAwait = /*#__PURE__*/
        function () {
          var _loadDirAwait = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(path, asset_type) {
            var _this3 = this;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  return _context2.abrupt("return", new Promise(function (resolve, reject) {
                    _this3.loadDir(path, asset_type, function (items) {
                      resolve(items);
                    }, function (error) {
                      reject(error);
                    });
                  }));
                case 1:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          }));
          function loadDirAwait(_x5, _x6) {
            return _loadDirAwait.apply(this, arguments);
          }
          return loadDirAwait;
        }() //预加载资源
        ;

        _proto.preloadRes = function preloadRes(path, asset_type, callBack, errorCb) {
          var _this$getBundleInfoFr3 = this.getBundleInfoFromPath(path),
            isBundle = _this$getBundleInfoFr3.isBundle,
            bundleName = _this$getBundleInfoFr3.bundleName,
            urlName = _this$getBundleInfoFr3.urlName;
          if (isBundle) {
            this.preloadFromBundleName(bundleName, urlName, asset_type, callBack, errorCb);
            return;
          }
          var res = this.getRes(path, asset_type);
          if (res) {
            callBack && callBack();
            return;
          }
          resources.preload(path, asset_type, function (error, items) {
            if (error) {
              errorCb && errorCb(error);
              return;
            }
            callBack && callBack();
          });
        };
        _proto.reloadResAwait = /*#__PURE__*/function () {
          var _reloadResAwait = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(urls, type, proCallBack) {
            var _this4 = this;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  return _context3.abrupt("return", new Promise(function (resolve, reject) {
                    var _this4$getBundleInfoF = _this4.getBundleInfoFromPath(urls),
                      isBundle = _this4$getBundleInfoF.isBundle,
                      bundleName = _this4$getBundleInfoF.bundleName,
                      urlName = _this4$getBundleInfoF.urlName;
                    if (isBundle) {
                      _this4.preloadFromBundleName(bundleName, urlName, type, function () {
                        resolve(true);
                      });
                      return;
                    }
                    var res = _this4.getRes(urls, type);
                    if (res) {
                      resolve(res);
                    }
                    resources.preload(urls, type, function (finish, total, item) {
                      proCallBack && proCallBack(finish, total, item);
                    }, function (error, items) {
                      if (error == null) {
                        resolve(items);
                      } else {
                        reject(error);
                        // MyLog.worn("reloadRes error : ", error.message);
                      }
                    });
                  }));

                case 1:
                case "end":
                  return _context3.stop();
              }
            }, _callee3);
          }));
          function reloadResAwait(_x7, _x8, _x9) {
            return _reloadResAwait.apply(this, arguments);
          }
          return reloadResAwait;
        }() //预加载资源
        ;

        _proto.preloadResAwait = /*#__PURE__*/
        function () {
          var _preloadResAwait = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(path, asset_type) {
            var _this5 = this;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  return _context4.abrupt("return", new Promise(function (resolve, reject) {
                    _this5.preloadRes(path, asset_type, function () {
                      resolve(true);
                    }, function (error) {
                      reject(error);
                    });
                  }));
                case 1:
                case "end":
                  return _context4.stop();
              }
            }, _callee4);
          }));
          function preloadResAwait(_x10, _x11) {
            return _preloadResAwait.apply(this, arguments);
          }
          return preloadResAwait;
        }() //预加载场景
        ;

        _proto.preloadScene = function preloadScene(sceneName, callBack, errorCb) {
          resources.preloadScene(sceneName, function (error) {
            if (error) {
              errorCb && errorCb(error);
              return;
            }
            callBack && callBack();
          });
        }
        //异步  加载场景
        ;

        _proto.preloadSceneAwait = /*#__PURE__*/
        function () {
          var _preloadSceneAwait = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(sceneName) {
            var _this6 = this;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  return _context5.abrupt("return", new Promise(function (resolve, reject) {
                    _this6.preloadScene(sceneName, function () {
                      resolve(true);
                    }, function (error) {
                      reject(error);
                    });
                  }));
                case 1:
                case "end":
                  return _context5.stop();
              }
            }, _callee5);
          }));
          function preloadSceneAwait(_x12) {
            return _preloadSceneAwait.apply(this, arguments);
          }
          return preloadSceneAwait;
        }() // //释放节点资源
        // releaseNode(obj: Node, release: boolean = true): void {
        //     if (isValid(obj)) {
        //         if (release) {
        //             obj.destroy()
        //         } else {
        //             obj.removeFromParent();
        //         }
        //     }
        // }
        // //释放资源对象
        // releaseObj(asset: Asset) {
        //     //图片资源先不释放,此处最好只释放资源当前的引用
        //     if (asset.refCount == 0) {
        //         assetManager.releaseAsset(asset);
        //     }
        // }
        /***  
         * Asset Bundle
         * 加载分包资源 
         ***/
        /***
         * nameOrUrl: 传入包名  或者url路径（如果是复用其他项目的包，则只能使用url）
         ***/;

        _proto.loadBundle = function loadBundle(nameOrUrl, callBack, errorCb) {
          if (errorCb === void 0) {
            errorCb = null;
          }
          var bundle = this.getBundle(nameOrUrl);
          if (bundle) {
            callBack && callBack(bundle);
            return;
          }
          assetManager.loadBundle(nameOrUrl, null, function (error, bundle) {
            if (error) {
              console.warn("ResourceMgr loadBundle error : ", nameOrUrl, error);
              errorCb && errorCb(error);
              return;
            }
            callBack && callBack(bundle);
          });
        }

        //异步  加载分包
        ;

        _proto.loadBundleAwait = /*#__PURE__*/
        function () {
          var _loadBundleAwait = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(nameOrUrl) {
            var _this7 = this;
            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  return _context6.abrupt("return", new Promise(function (resolve, reject) {
                    _this7.loadBundle(nameOrUrl, function (bundle) {
                      resolve(bundle);
                    }, function (error) {
                      reject(error);
                    });
                  }));
                case 1:
                case "end":
                  return _context6.stop();
              }
            }, _callee6);
          }));
          function loadBundleAwait(_x13) {
            return _loadBundleAwait.apply(this, arguments);
          }
          return loadBundleAwait;
        }();
        _proto.loadFromBundleName = function loadFromBundleName(bundleName, path, asset_type, callBack, errorCb, pro) {
          var _this8 = this;
          if (errorCb === void 0) {
            errorCb = null;
          }
          if (pro === void 0) {
            pro = null;
          }
          this.loadBundle(bundleName, function (bundle) {
            _this8.loadFromBundle(bundle, path, asset_type, callBack, errorCb, pro);
          }, errorCb);
        };
        _proto.loadFromBundle = function loadFromBundle(bundle, path, asset_type, callBack, errorCb, proCallBack) {
          var _this9 = this;
          if (errorCb === void 0) {
            errorCb = null;
          }
          if (proCallBack === void 0) {
            proCallBack = null;
          }
          var res = this.getRes(path, asset_type, bundle);
          if (res) {
            this.checkAssetIsPrefab(path, res, asset_type, callBack);
            return;
          }
          bundle.load(path, asset_type, function (finish, total, item) {
            proCallBack && proCallBack(finish, total, item);
          }, function (error, res) {
            if (error) {
              MyLog.warn("ResourceMgr loadFromBundle error : ", error);
              errorCb && errorCb();
              return;
            }
            _this9.checkAssetIsPrefab(path, res, asset_type, callBack);
          });
        };
        _proto.loadFromBundleAwait = /*#__PURE__*/function () {
          var _loadFromBundleAwait = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(bundle, path, asset_type) {
            var _this10 = this;
            return _regeneratorRuntime().wrap(function _callee8$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
                case 0:
                  return _context8.abrupt("return", new Promise( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(resolve, reject) {
                    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                      while (1) switch (_context7.prev = _context7.next) {
                        case 0:
                          _this10.loadFromBundle(bundle, path, asset_type, function (res) {
                            resolve(res);
                          }, function (error) {
                            reject(error);
                          });
                        case 1:
                        case "end":
                          return _context7.stop();
                      }
                    }, _callee7);
                  }))));
                case 1:
                case "end":
                  return _context8.stop();
              }
            }, _callee8);
          }));
          function loadFromBundleAwait(_x14, _x15, _x16) {
            return _loadFromBundleAwait.apply(this, arguments);
          }
          return loadFromBundleAwait;
        }();
        _proto.preloadFromBundleName = function preloadFromBundleName(bundleName, path, asset_type, callBack, errorCb) {
          var _this11 = this;
          if (errorCb === void 0) {
            errorCb = null;
          }
          this.loadBundle(bundleName, function (bundle) {
            _this11.preloadFromBundle(bundle, path, asset_type, callBack, errorCb);
          }, errorCb);
        };
        _proto.preloadFromBundle = function preloadFromBundle(bundle, path, asset_type, callBack, errorCb) {
          if (errorCb === void 0) {
            errorCb = null;
          }
          var res = bundle.get(path, asset_type);
          if (res) {
            callBack && callBack();
            return;
          }
          bundle.preload(path, asset_type, function (error, items) {
            if (error) {
              MyLog.warn("ResourceMgr loadFromBundle error : ", error);
              errorCb && errorCb();
              return;
            }
            callBack && callBack();
          });
        };
        _proto.loadDirFromBundleName = function loadDirFromBundleName(bundleName, path, asset_type, callBack, errorCb) {
          var _this12 = this;
          if (errorCb === void 0) {
            errorCb = null;
          }
          this.loadBundle(bundleName, function (bundle) {
            _this12.loadDirFromBundle(bundle, path, asset_type, callBack, errorCb);
          }, errorCb);
        };
        _proto.loadDirFromBundle = function loadDirFromBundle(bundle, path, asset_type, callBack, errorCb) {
          if (errorCb === void 0) {
            errorCb = null;
          }
          var items = this.getDir(path, asset_type, bundle);
          if (items && items.length) {
            callBack && callBack(items);
            return;
          }
          bundle.loadDir(path, asset_type, function (error, items) {
            if (error) {
              MyLog.warn("ResourceMgr loadFromBundle error : ", error);
              errorCb && errorCb(error);
              return;
            }
            callBack && callBack(items);
          });
        };
        _proto.releaseBundleByName = function releaseBundleByName(name) {
          var bundle = assetManager.getBundle(name);
          this.releaseBundle(bundle);
        };
        _proto.releaseBundle = function releaseBundle(bundle) {
          if (bundle) {
            assetManager.removeBundle(bundle);
          }
        }

        //动态加载AnimationClip并播放第1个动画（或者播放指定animName的动画）
        ;

        _proto.asyncPlayAnim = function asyncPlayAnim(animation, animationUrl, callBack, animName, speed) {
          var _this13 = this;
          if (animation.node && animation.node.isValid && !animation.node.active) {
            animation.node.active = true;
          }
          var clips = animation.clips;
          if (clips.length) {
            var urlName = animationUrl.substring(animationUrl.lastIndexOf("/") + 1);
            clips.forEach(function (clip) {
              if (!Utils.isNull(clip) && clip.name != urlName) {
                animation.removeClip(clip, true);
              }
            });
          }
          if (this.isAnimEmpty(animation)) {
            // MyLog.log('animationUrl ==>', animationUrl);
            this.asyncSetAnim(animation, animationUrl, function (clip) {
              if (animName) {
                _this13.playAnim(animation, animName, speed);
              } else {
                _this13.playFirstAnim(animation, speed);
              }
              callBack && callBack();
            });
          } else {
            if (animName) {
              this.playAnim(animation, animName, speed);
            } else {
              this.playFirstAnim(animation, speed);
            }
            callBack && callBack();
          }
        };
        _proto.isAnimEmpty = function isAnimEmpty(animation) {
          return animation.clips.length == 0;
        }

        //动态加载animation，注意不支持设置包含有多个clip的动画组件
        ;

        _proto.asyncSetAnim = function asyncSetAnim(animation, animationUrl, callBack) {
          var _this14 = this;
          if (!animation || !animation.isValid) {
            MyLog.log("asyncSetAnim --> animation is null or lost! animationUrl=", animationUrl);
            return;
          }

          // MyLog.log('animationUrl1111 ==>',animationUrl);
          this.loadRes(animationUrl, AnimationClip, function (clip) {
            _this14.setFirstAnim(animation, clip);
            callBack && callBack(clip);
          });
        }

        //设置第一个动画剪辑，并把其他的删除掉
        ;

        _proto.setFirstAnim = function setFirstAnim(animation, animClip) {
          if (!animation || !animation.isValid) {
            MyLog.log("setFirstAnim --> animation is null or lost! animationUrl=");
            return;
          }
          var clips = animation.clips;
          if (!clips) return;
          this.clearAnim(animation, clips);
          animation.addClip(animClip);
        };
        _proto.clearAnim = function clearAnim(animation, clips) {
          clips.forEach(function (clip) {
            animation.removeClip(clip, true);
          });
        }

        //播放第1个动画
        ;

        _proto.playFirstAnim = function playFirstAnim(animation, speed) {
          var clips = animation.clips;
          if (!clips) return;
          var animName = clips[0].name;
          this.playAnim(animation, animName, speed);
        }

        //播放指定名称的动画，如果正在播放中则不播放
        ;

        _proto.playAnim = function playAnim(animation, animName, speed) {
          // let animState = animation.getState(animName);
          // if (!animState) return;
          // if (animState.isPlaying) {
          //     animation.playAdditive(animName);
          //     return;
          // }
          // if (speed && animation.currentClip) {
          //     animation.currentClip.speed = speed;
          // }
          animation.play(animName);
        };
        return ResourceManager;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ResultDlg.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseDialog.ts', './GameControl.ts', './PathCongfig.ts', './GameView.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, BaseDialog, GC, AudioPath, GameView;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
    }, function (module) {
      BaseDialog = module.default;
    }, function (module) {
      GC = module.GC;
    }, function (module) {
      AudioPath = module.AudioPath;
    }, function (module) {
      GameView = module.GameView;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "0e058zXKlpAuaRS0Z86Ke0u", "ResultDlg", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ResultDlg = exports('ResultDlg', (_dec = ccclass('ResultDlg'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseDialog) {
        _inheritsLoose(ResultDlg, _BaseDialog);
        function ResultDlg() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseDialog.call.apply(_BaseDialog, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "winNode", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "loseNode", _descriptor2, _assertThisInitialized(_this));
          _this._isWin = false;
          return _this;
        }
        var _proto = ResultDlg.prototype;
        _proto.show = function show(isWin) {
          this._isWin = isWin;
        };
        _proto.start = function start() {
          _BaseDialog.prototype.start.call(this, true);
          this.winNode.active = this._isWin;
          this.loseNode.active = !this._isWin;
          this._isWin ? GC.audio.playSound(AudioPath.win) : GC.audio.playSound(AudioPath.lose);
        };
        _proto.onClickHandle = function onClickHandle() {
          GC.audio.playSound(AudioPath.click);
          wx.notifyMiniProgramPlayableStatus({
            isEnd: true
          });
        };
        _proto.onClickRestart = function onClickRestart() {
          var _GameView$getInstance;
          GC.audio.playSound(AudioPath.click);
          this.closeMySelf();
          (_GameView$getInstance = GameView.getInstance()) == null || _GameView$getInstance.onGameRestart();
        };
        return ResultDlg;
      }(BaseDialog), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "winNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "loseNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ResUtils.ts", ['cc', './EnumConfig.ts', './GameControl.ts'], function (exports) {
  var cclegacy, EColor, GC;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      EColor = module.EColor;
    }, function (module) {
      GC = module.GC;
    }],
    execute: function () {
      cclegacy._RF.push({}, "6b10a4YKpRAHbcYIMPFMJEb", "ResUtils", undefined);
      var ResUtils = exports('default', /*#__PURE__*/function () {
        function ResUtils() {}
        //品质颜色
        ResUtils.getQualityColor = function getQualityColor(quality) {
          return [EColor.all, EColor.white, EColor.green, EColor.blue, EColor.purple, EColor.orange, EColor.red][quality];
        };
        ResUtils.getQualityName = function getQualityName(quality) {
          return GC.language.getLocal("quality_name_" + quality);
        };
        return ResUtils;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Role.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BasePrefab.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Sprite, BasePrefab;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
    }, function (module) {
      BasePrefab = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "12af6mLB5lJ0pFQOvCFMYAl", "Role", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Role = exports('Role', (_dec = ccclass('Role'), _dec2 = property(Sprite), _dec(_class = (_class2 = /*#__PURE__*/function (_BasePrefab) {
        _inheritsLoose(Role, _BasePrefab);
        function Role() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BasePrefab.call.apply(_BasePrefab, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "roleSprite", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = Role.prototype;
        _proto.start = function start() {};
        _proto.update = function update(deltaTime) {};
        return Role;
      }(BasePrefab), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "roleSprite", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SceneManger.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameControl.ts', './EnumConfig.ts'], function (exports) {
  var _createClass, cclegacy, director, GC, ESceneName;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      director = module.director;
    }, function (module) {
      GC = module.GC;
    }, function (module) {
      ESceneName = module.ESceneName;
    }],
    execute: function () {
      cclegacy._RF.push({}, "d16feb8zvJE1oxjywaVZ8qB", "SceneManger", undefined);
      var SceneManager = exports('SceneManager', /*#__PURE__*/function () {
        function SceneManager() {
          this._currScene = null;
        }
        var _proto = SceneManager.prototype;
        //预加载场景
        _proto.preLoadScene = function preLoadScene(sceneName, callBack) {
          director.preloadScene(sceneName, null, function () {
            callBack && callBack();
          });
        }

        //跳转场景
        ;

        _proto.gotoScene = function gotoScene(name) {
          GC.dialog.closeAll();
          director.loadScene(name);
        };
        _proto.enterLoadingScene = function enterLoadingScene() {
          this.gotoScene(ESceneName.loading);
        };
        _proto.enterMainScene = function enterMainScene() {
          this.gotoScene(ESceneName.main);
        };
        _createClass(SceneManager, [{
          key: "curScene",
          get: function get() {
            return this._currScene;
          },
          set: function set(s) {
            this._currScene = s;
          }
        }]);
        return SceneManager;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SDKManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EnumConfig.ts', './EventName.ts', './GameControl.ts', './BlSdk.ts', './DySdk.ts', './KsSdk.ts', './WxSdk.ts', './MyLog.ts', './HcSdk.ts'], function (exports) {
  var _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, game, sys, EStatType, AdAction, EVideoOrShare, EventName, GC, BlSdk, DySdk, KsSdk, WxSdk, MyLog, HcSdk;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      game = module.game;
      sys = module.sys;
    }, function (module) {
      EStatType = module.EStatType;
      AdAction = module.AdAction;
      EVideoOrShare = module.EVideoOrShare;
    }, function (module) {
      EventName = module.EventName;
    }, function (module) {
      GC = module.GC;
    }, function (module) {
      BlSdk = module.default;
    }, function (module) {
      DySdk = module.DySdk;
    }, function (module) {
      KsSdk = module.default;
    }, function (module) {
      WxSdk = module.default;
    }, function (module) {
      MyLog = module.default;
    }, function (module) {
      HcSdk = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "fe6195YejNBdLGdrw8iwdPT", "SDKManager", undefined);
      var SDKManager = exports('SDKManager', /*#__PURE__*/function () {
        function SDKManager() {}
        var _proto = SDKManager.prototype;
        _proto.getOffHeight = function getOffHeight() {
          if (this.system_info) {
            var model = this.system_info.model;
            var lowModel = model.toLowerCase();
            if (lowModel.indexOf('ana-an00') != -1) {
              // 华为p40Pro
              return 80;
            }
            return this.system_info.statusBarHeight;
          }
          return 0;
        };
        _proto.init = function init() {
          if (GC.config.game.debug) return;
          this.sdk.init();
          // this.isBl && this.bl.init();
          // this.isKs && this.ks.init()
          // this.isDy && this.dy.init();
          // this.isWx && this.wx.init();
        };

        _proto.platformLogin = function platformLogin() {
          if (this.isPlatform) {
            this.hc.init();
          }
        };
        _proto.getOnlineParam = function getOnlineParam(cb) {
          if (this.isPlatform) {
            this.hc.getOnlineParam(cb);
          } else {
            cb && cb();
          }
        }

        //打点   自定义事件名   自定义参数
        ;

        _proto.clickStat = function clickStat(name, data, isDiamond) {
          if (data === void 0) {
            data = {};
          }
          MyLog.log("clickStat ==>name:", name, "data:", data);
          if (this.isWxOrDy) {
            // WXApi.addYuMenEvent(name, data);
            HCSDK.isInited() && HCSDK.sendEventLog(name, data);
          }
        }

        /**
         * 发送加载开始日志
         */;
        _proto.sendLoadingStartLog = function sendLoadingStartLog() {
          if (!GC.config.game.debug) {
            HCSDK.sendLoadingStartLog();
          }
        }

        /**
         * 发送加载结束日志。
         * 如果配置中不处于调试模式，则调用HCSDK.sendLoadingEndLog()发送加载结束日志。
         */;
        _proto.sendLoadingEndLog = function sendLoadingEndLog() {
          if (!GC.config.game.debug) {
            HCSDK.sendLoadingEndLog();
          }
        }

        /**
         * 发送进入游戏日志
         *
         * @param opt - 游戏信息选项
         */;
        _proto.sendEnterGameLog = function sendEnterGameLog(opt) {
          if (!GC.config.game.debug) {
            HCSDK.sendEnterGameLog(opt);
          }
        }

        /**
         * 发送角色等级日志
         *
         * @param opt 角色信息选项
         */;
        _proto.sendRoleLevelLog = function sendRoleLevelLog(opt) {
          if (!GC.config.game.debug) {
            HCSDK.sendRoleLevelLog(opt);
          }
        };
        _proto.sendStageStartLog = function sendStageStartLog(stageId) {
          MyLog.log("sendStageStartLog ==>stageId:", stageId);
          if (!GC.config.game.debug) {
            HCSDK.sendStageStartLog(stageId);
          }
        };
        _proto.sendStageEndLog = function sendStageEndLog(stageId, isClear) {
          if (isClear === void 0) {
            isClear = true;
          }
          MyLog.log("sendStageEndLog ==>stageId:", stageId, "isClear:", isClear);
          if (!GC.config.game.debug) {
            HCSDK.sendStageEndLog(stageId, isClear);
          }
        };
        _proto.createAuthorizeButton = function createAuthorizeButton(node, callBack) {
          if (this.isWx) {
            // 微信登录
            return this.wx.createAuthorizeButton(node, function (res) {
              GC.data.user.updateUserInfo(res.userInfo);
              callBack && callBack();
            });
          } else if (this.isDy) {
            callBack && callBack();
            return null;
          } else {
            callBack && callBack();
            return null;
          }
        };
        _proto.createGameClubButton = function createGameClubButton(node) {
          if (this.isWx) {
            //游戏圈
            return this.wx.createGameClubButton(node);
          } else if (this.isDy) {
            return null;
          } else {
            return null;
          }
        };
        _proto.setUserCloudStorage = function setUserCloudStorage() {
          if (this.isWx) {
            this.wx.setUserCloudStorage();
          } else if (this.isDy) {
            this.dy.setUserCloudStorage();
          }
        };
        _proto.postMessage = function postMessage(openId, height) {
          if (this.isWx) {
            this.wx.postMessage(openId, height);
          } else if (this.isDy) {
            this.dy.postMessage(openId, height);
          }
        };
        _proto.setOpenDataContextSize = function setOpenDataContextSize(w, h) {
          if (this.isWx) {
            this.wx.setOpenDataContextSize(w, h);
          } else if (this.isDy) ;
        }

        //分享  id    回掉    自定义参数
        ;

        _proto.share = function share(shareId, callback, channel, extra, query) {
          if (callback === void 0) {
            callback = null;
          }
          if (query === void 0) {
            query = '';
          }
          GC.config.game.debug && callback && callback(true);
          this.sdk && this.sdk.share(shareId, function (suc) {
            suc && GC.sdk.clickStat(EStatType.share_suc, {
              shareId: shareId
            });
            callback && callback(suc);
          }, query, channel, extra);
        };
        _proto.checkShareState = function checkShareState(startTime) {
          if (this.isWx) {
            this.wx.checkShareState(startTime);
          }
        }

        //激励视频  id  回掉   失败提示   自定义参数
        ;

        _proto.showVideo = /*#__PURE__*/
        function () {
          var _showVideo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(index, callBack, tipStr) {
            var _this = this;
            var gameCfg;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (callBack === void 0) {
                    callBack = null;
                  }
                  if (tipStr === void 0) {
                    tipStr = 'com_video_not_finish_tip';
                  }
                  MyLog.log("showVideo ==>index:", index);
                  // GC.data.game.watchAd = true;
                  gameCfg = GC.config.game;
                  if (gameCfg.debug || gameCfg.GM || GC.data.game.isDarenGM) {
                    GC.notify.post(EventName.lookVideoSuc);
                    callBack && callBack(true);
                    GC.data.game.syncData();
                  } else if (this.isKs) {
                    this.ks.showVideo(callBack);
                  } else if (this.isPlatform) {
                    // if (!GC.data.onlineParam.rewardVideoParam.openVideo) {
                    //     this.share(EVideoOrShare.video, callBack)
                    //     return;
                    // }

                    // MyLog.log("videoId---------", GC.config.game.videoId)

                    GC.audio.music && GC.audio.stopMusic();
                    GC.scene.curScene.showLoading(true, true, 10);
                    // this.clickStat(EStatType.video, { index: index, result: 1 })//触发激励视频
                    HCSDK.showRewardVideo(index + "", {
                      adUnitId: GC.config.game.videoId,
                      timeout: 10000
                    }, function (action, aderror) {
                      switch (action) {
                        case AdAction.Show:
                          MyLog.log('显示成功, 不做任何处理');
                          break;
                        case AdAction.LoadTimeOut:
                          MyLog.log('拉取超时,关闭加载进度条');
                          _this.share(EVideoOrShare.share_video_fail, function (issuc) {
                            issuc && (GC.notify.post(EventName.lookVideoSuc), callBack(true));
                          });
                          GC.scene.curScene.hideLoading();
                          GC.dialog.comTextTips('no_video_tip');
                          break;
                        case AdAction.PlayComplete:
                          GC.notify.post(EventName.lookVideoSuc);
                          callBack(true);
                          GC.audio.music && GC.audio.playMusic();
                          GC.scene.curScene.hideLoading();
                          GC.data.game.syncData();
                          break;
                        case AdAction.Skip:
                          GC.audio.music && GC.audio.playMusic();
                          GC.dialog.comTextTips(tipStr);
                          GC.scene.curScene.hideLoading();
                          break;
                        case AdAction.Error:
                          GC.audio.music && GC.audio.playMusic();
                          GC.dialog.comTextTips('no_video_tip');
                          GC.scene.curScene.hideLoading();
                          break;
                      }
                    });
                  }
                case 5:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function showVideo(_x, _x2, _x3) {
            return _showVideo.apply(this, arguments);
          }
          return showVideo;
        }();
        _proto.showInterstitialAd = function showInterstitialAd() {
          var gameCfg = GC.config.game;
          if (gameCfg.debug || gameCfg.GM) {
            return;
          }
          if (this.isWxOrDy) {
            HCSDK.showInterstitialAd("game", {
              adUnitId: GC.config.game.interstId
            }, function (code, err) {
              MyLog.log("interstitialAd result:", code, err);
            });
          }
        };
        _proto.vibrateShort = function vibrateShort() {
          var _this$sdk;
          GC.audio.vibrate && (this == null || (_this$sdk = this.sdk) == null ? void 0 : _this$sdk.vibrate());
        };
        _proto.authorize = function authorize(sucCB) {
          var _this$sdk2;
          this == null || (_this$sdk2 = this.sdk) == null || _this$sdk2.authorize(sucCB);
        };
        _proto.showModal = function showModal(callFunc, content, showCancel, title, sureTxt) {
          var _this$sdk3;
          if (callFunc === void 0) {
            callFunc = null;
          }
          if (showCancel === void 0) {
            showCancel = false;
          }
          if (title === void 0) {
            title = '提示';
          }
          if (sureTxt === void 0) {
            sureTxt = '确定';
          }
          this == null || (_this$sdk3 = this.sdk) == null || _this$sdk3.showModal(callFunc, content, showCancel, title, sureTxt);
        };
        _proto.quit = function quit() {
          var _this$sdk4;
          this == null || (_this$sdk4 = this.sdk) == null || _this$sdk4.quit();
        };
        _proto.msgSecCheck = function msgSecCheck(callBack, content) {
          if (this.isDy) {
            this.dy.msgSecCheck(callBack);
          } else {
            this.hc.msgSecCheck(content, callBack);
          }
        };
        _proto.checkUpdate = function checkUpdate(cb) {
          MyLog.log("----------checkUpdate1");
          if (this.isWxOrDy && wx.getUpdateManager) {
            MyLog.log("----------checkUpdate2");
            var updateManager = wx.getUpdateManager();
            MyLog.log("----------checkUpdate3", updateManager);
            updateManager.onCheckForUpdate(function (res) {
              // 请求完新版本信息的回调
              MyLog.log("----------checkUpdate4", res.hasUpdate);
              if (res.hasUpdate) {
                updateManager.onUpdateReady(function () {
                  wx.showModal({
                    title: '更新提示',
                    content: '新版本已经准备好，是否重启应用？',
                    success: function success(res) {
                      if (res.confirm) {
                        // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                        updateManager.applyUpdate();
                      } else if (res.cancel) {
                        cb && cb();
                      }
                    }
                  });
                });
                updateManager.onUpdateFailed(function () {
                  // 新版本下载失败
                  MyLog.log("----------updateManager.onUpdateFailed");
                  cb && cb();
                });
              } else {
                cb && cb();
              }
            });
          } else {
            cb && cb();
          }
        };
        _proto.restart = function restart() {
          GC.dialog.closeAll();
          if (this.isWeb) {
            game.restart();
          } else {
            var _this$sdk5;
            this == null || (_this$sdk5 = this.sdk) == null || _this$sdk5.restart();
          }
        };
        _proto.showTtRank = function showTtRank() {
          if (GC.config.game.isDouyin) {
            if (wx.getImRankList) {
              wx.getImRankList({
                relationType: "default",
                //只展示好友榜
                dataType: 1,
                //只圈选type为数字类型的数据进行排序
                rankType: "week",
                //每月1号更新，只对当月1号到现在写入的数据进行排序
                suffix: "",
                //数据后缀，成绩后续默认带上 “分”
                rankTitle: "通关排行榜",
                //标题
                success: function success(res) {},
                fail: function fail(res) {}
              });
            } else {
              GC.dialog.comTextTips("App版本过低，请更新版本后查看！");
            }
          }
        };
        _proto.checkScene = function checkScene(cb) {
          if (this.isWxOrDy) {
            this.wx.checkScene(cb);
          } else if (this.isBl) {
            this.bl.checkScene(cb);
          } else {
            cb && cb(false);
          }
        };
        _proto.navigateToScene = function navigateToScene(cb) {
          if (this.isWxOrDy) {
            this.wx.navigateToScene(cb);
          } else if (this.isBl) {
            this.bl.navigateToScene(cb);
          } else {
            cb && cb(false);
          }
        };
        _proto.addShortcut = function addShortcut(cb) {
          if (this.isDy) {
            this.wx.addShortcut(cb);
          } else if (this.isKs) {
            this.ks.addShortcut(cb);
          } else if (this.isBl) {
            this.bl.addShortcut(cb);
          } else {
            cb && cb(false);
          }
        };
        _proto.checkShortcut = function checkShortcut(cb) {
          if (this.isDy) {
            this.wx.checkShortcut(cb);
          } else if (this.isKs) {
            this.ks.checkShortcut(cb);
          } else if (this.isBl) {
            this.bl.checkShortcut(cb);
          } else {
            cb && cb(false);
          }
        };
        _createClass(SDKManager, [{
          key: "isPlatform",
          get: function get() {
            return this.isWx || this.isDy || this.isKs || this.isBl;
          }
        }, {
          key: "isWxOrDy",
          get: function get() {
            return this.isWx || this.isDy;
          }
        }, {
          key: "isWx",
          get: function get() {
            return typeof wx != "undefined" && sys.platform == sys.Platform.WECHAT_GAME && !this.isKs;
          }
        }, {
          key: "isDy",
          get: function get() {
            return typeof tt != "undefined" && sys.platform == sys.Platform.BYTEDANCE_MINI_GAME;
          }
        }, {
          key: "isKs",
          get: function get() {
            return typeof ks != "undefined";
          }
        }, {
          key: "isBl",
          get: function get() {
            return typeof bl != "undefined";
          }
        }, {
          key: "isWeb",
          get: function get() {
            return sys.isBrowser;
          }
        }, {
          key: "wx",
          get: function get() {
            return WxSdk;
          }
        }, {
          key: "dy",
          get: function get() {
            return DySdk;
          }
        }, {
          key: "ks",
          get: function get() {
            return KsSdk;
          }
        }, {
          key: "hc",
          get: function get() {
            return HcSdk;
          }
        }, {
          key: "bl",
          get: function get() {
            return BlSdk;
          }
        }, {
          key: "sdk",
          get: function get() {
            if (this.isBl) return this.bl;
            if (this.isKs) return this.ks;
            if (this.isDy) return this.dy;
            if (this.isWx) return this.wx;
            return null;
          }
        }, {
          key: "system_info",
          get: function get() {
            if (this.sdk) {
              return this.sdk.system_info;
            }
            return null;
          }
        }, {
          key: "option",
          get: function get() {
            if (this.sdk) {
              return this.sdk.option;
            }
            return null;
          }
        }, {
          key: "adHostData",
          get: function get() {
            if (this.isWx) {
              return this.wx.adHostData;
            } else if (this.isDy) {
              return this.dy.adHostData;
            }
            return {
              shareValue: 1,
              rewardValue: 0
            };
          }
        }, {
          key: "isIpad",
          get: function get() {
            if (this.system_info) {
              var model = this.system_info.model;
              var lowModel = model.toLowerCase();
              var lowBrandMod = this.system_info.brand.toLowerCase();
              if (lowModel.indexOf('pad') != -1 || lowBrandMod.indexOf('eebbk') != -1) {
                return true;
              }
            }
            return false;
          }
        }]);
        return SDKManager;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SettingDlg.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameControl.ts', './BaseDialog.ts', './PathCongfig.ts', './EventName.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, UITransform, Label, Node, Slider, GC, BaseDialog, DialogPath, EventName;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      UITransform = module.UITransform;
      Label = module.Label;
      Node = module.Node;
      Slider = module.Slider;
    }, function (module) {
      GC = module.GC;
    }, function (module) {
      BaseDialog = module.default;
    }, function (module) {
      DialogPath = module.DialogPath;
    }, function (module) {
      EventName = module.EventName;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14;
      cclegacy._RF.push({}, "9977duky89O2pf9FgZrAYbu", "SettingDlg", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SettingDlg = exports('default', (_dec = ccclass('SettingDlg'), _dec2 = property(UITransform), _dec3 = property(Label), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Label), _dec9 = property(Node), _dec10 = property(Label), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Node), _dec15 = property(Slider), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseDialog) {
        _inheritsLoose(SettingDlg, _BaseDialog);
        function SettingDlg() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseDialog.call.apply(_BaseDialog, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "bgTf", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "title", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "closeBtn", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "musicNode", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "soundNode", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "vibratNode", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "versionLab", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "boxOpen", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "uidLab", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "inGameNode", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "quitBtn", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "continueBtn", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gmNode", _descriptor13, _assertThisInitialized(_this));
          _this._inGame = false;
          _this.closeCallBack = null;
          _initializerDefineProperty(_this, "slider", _descriptor14, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = SettingDlg.prototype;
        //value 0-1;
        _proto.onLoad = function onLoad() {
          _BaseDialog.prototype.onLoad.call(this);
        };
        _proto.show = function show(inGame, closeCallBack) {
          if (inGame === void 0) {
            inGame = false;
          }
          this._inGame = inGame;
          this.closeCallBack = closeCallBack;
        };
        _proto.initTouchs = function initTouchs() {
          _BaseDialog.prototype.initTouchs.call(this);
          this.bindClick(this.quitBtn, this.clickQuit, null, true);
          this.bindClick(this.continueBtn, this.clickContinue, null, true);
          this.bindClick(this.closeBtn, this.closeMySelf, null, true);
          this.slider.node.on('slide', this.onSliderChange, this);
        };
        _proto.start = function start() {
          _BaseDialog.prototype.start.call(this);
          this.versionLab.string = "\u7248\u672C\u53F7:" + GC.config.game.version;
          this.setUiView();
          this.uidLab.string = "UID:" + GC.data.user.user_id;
          this.title.string = this._inGame ? "暂停" : "设置";
          this.closeBtn.active = !this._inGame;
          this.bgTf.height = this._inGame ? 606 : 530;

          // this.duihuanmaBtn.active = !this._inGame;
          this.inGameNode.active = this._inGame;
          this.gmNode.active = GC.config.game.debug || GC.config.game.GM || GC.data.game.isDarenGM;
          this.slider.progress = GC.data.game.sliderValue;
        };
        _proto.setUiView = function setUiView() {
          this.setOne(this.musicNode, GC.audio.music);
          this.setOne(this.soundNode, GC.audio.sound);
          this.setOne(this.vibratNode, GC.audio.vibrate);
        };
        _proto.setOne = function setOne(node, isOpen) {
          var on = node.getChildByName("on");
          var off = node.getChildByName("off");
          on.active = isOpen;
          off.active = !isOpen;
        };
        _proto.soundHandle = function soundHandle() {
          GC.audio.sound = !GC.audio.sound;
          this.setUiView();
        };
        _proto.musicHandle = function musicHandle() {
          GC.audio.music = !GC.audio.music;
          this.setUiView();
        };
        _proto.vibratHandle = function vibratHandle() {
          GC.audio.vibrate = !GC.audio.vibrate;
          this.setUiView();
        }
        //    // //验证字符串是否是数字
        ;

        _proto.checkNumber = function checkNumber(str) {
          // var type = "^[0-9]*[1-9][0-9]*$";
          // var r = new RegExp(type);
          // var flag = r.test(str);
          // return flag;
        };
        _proto.clickDuihuanma = function clickDuihuanma() {
          this.openDialog(DialogPath.duihuanmaDig);
        };
        _proto.clickQuit = function clickQuit() {
          this.closeMySelf();
          GC.gameView.onClose();
        };
        _proto.clickContinue = function clickContinue() {
          this.closeMySelf();
          if (this.closeCallBack) {
            this.closeCallBack();
          }
        };
        _proto.onSliderChange = function onSliderChange(slider) {
          GC.data.game.sliderValue = slider.progress;
          this.post(EventName.settingSliderValueChange);
        };
        return SettingDlg;
      }(BaseDialog), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bgTf", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "title", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "closeBtn", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "musicNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "soundNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "vibratNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "versionLab", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "boxOpen", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "uidLab", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "inGameNode", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "quitBtn", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "continueBtn", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "gmNode", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "slider", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SevenDayData.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      // import { TGameMsg, TUserMsg } from "../../../../../Type";
      cclegacy._RF.push({}, "04205rLqMRPJ75qwZgkUzDE", "SevenDayData", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SevenDayDataBase.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseData.ts', './GameControl.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, BaseData, GC;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      BaseData = module.BaseData;
    }, function (module) {
      GC = module.GC;
    }],
    execute: function () {
      cclegacy._RF.push({}, "11ed7aLRHtG7ZfeIwDmLKL6", "SevenDayDataBase", undefined);
      var SevenDayDataBase = exports('default', /*#__PURE__*/function (_BaseData) {
        _inheritsLoose(SevenDayDataBase, _BaseData);
        function SevenDayDataBase() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseData.call.apply(_BaseData, [this].concat(args)) || this;
          _this._msg = null;
          _this._createDay = null;
          return _this;
        }
        var _proto = SevenDayDataBase.prototype;
        _proto.initParams = function initParams() {
          this._createDay = new Date(GC.data.user.register_time).getDay();
        };
        _createClass(SevenDayDataBase, [{
          key: "defaultMsg",
          get: function get() {
            return {
              currentWeekStartTime: this.CurWeekDate.getTime(),
              pickStatus: [0, 0, 0, 0, 0, 0, 0]
            };
          }
        }, {
          key: "TodayIndex",
          get: function get() {
            var e = new Date().getDay() - this._createDay;
            return e < 0 && (e += 7), e;
          }
        }, {
          key: "CurWeekDate",
          get: function get() {
            var e = new Date(),
              i = new Date(e);
            return i.setDate(e.getDate() - this.TodayIndex), i.setHours(0), i.setMinutes(0), i.setSeconds(0), i.setMilliseconds(0), i;
          }
        }]);
        return SevenDayDataBase;
      }(BaseData));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SkinData.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "c0494e4cKBPx6aJR+Cr3OFX", "SkinData", undefined);
      var SkinData = exports('default', /*#__PURE__*/function () {
        function SkinData() {}
        SkinData.getSkinData = function getSkinData(id) {
          return this.skinConfigs.find(function (v) {
            return v.id === id;
          });
        };
        return SkinData;
      }());
      SkinData.skinConfigs = [{
        id: 0,
        name: "黑色",
        unlock: 0
      }, {
        id: 1,
        name: "毛线",
        unlock: 0,
        videoCount: 3
      }, {
        id: 2,
        name: "彩色",
        unlock: 5
      }, {
        id: 3,
        name: "虫子",
        unlock: 10
      }];
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SocketLink.ts", ['cc', './MyLog.ts'], function (exports) {
  var cclegacy, MyLog;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      MyLog = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "f01c2c0XcJOq48Zp0wHZz4X", "SocketLink", undefined);
      var SocketLink = exports('SocketLink', /*#__PURE__*/function () {
        function SocketLink() {
          var _this = this;
          this._socket = null;
          this.onOpen = function () {
            MyLog.log("link suc");
            _this.socketLinkSuc();
          };
          this.onmessage = function (event) {
            MyLog.log("client rcv data=" + event.data);
            _this.parseResponse(event.data);
          };
          this.onclose = function () {
            _this._socket.close();
            _this._socket = null;
          };
          this.onerror = function () {
            MyLog.log("link error");
          };
        }
        var _proto = SocketLink.prototype;
        _proto.connect = function connect(url) {
          if (this._socket == null || this._socket.readyState !== 1) {
            this._socket = new WebSocket(url);
            this._socket.binaryType = "arraybuffer";
            this._socket.onopen = this.onOpen;
            this._socket.onmessage = this.onmessage;
            this._socket.onclose = this.onclose;
            this._socket.onerror = this.onerror;
          }
        };
        _proto.socketLinkSuc = function socketLinkSuc() {
          // this.send(ProtoCfg.gameLogin, {
          //     token: GC.data.game.token,
          //     uid: GC.data.game.puid,
          //     roleId: GC.data.role.base.roldId
          // })
          // GC.sdk.clickStat(EStatType.enter_game, "2")
        };
        _proto.send = function send(msgId, msg) {
          var data = JSON.stringify({
            id: msgId,
            data: msg
          });
          if (this._socket.readyState == 1) {
            this._socket.send(data);
          }
        };
        _proto.parseResponse = function parseResponse(arrayBuffer) {
          // if (arrayBuffer instanceof ArrayBuffer) {
          //     let response = ProtoParseUtils.parseProtoBufId(arrayBuffer);
          //     if (response) {
          //         MyLog.log(`response(socket) ==> ${response.msgId}:\n`, timeUtils.getCurHMS(), "  ", response.data);
          //         if (response.msgId == ProtoCfg.s2c_error.msgId) {
          //             this.errorDeal(response.data)
          //         }
          //         GC.notify.post(EventName.serverResponse, response.msgId, response.data);
          //     }
          // } else {
          //     GC.dialog.comTextTips("response data type error");
          // }
        };
        return SocketLink;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SpriteFrameManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameControl.ts'], function (exports) {
  var _applyDecoratedDescriptor, _createClass, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _extends, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Sprite, Node, isValid, resources, SpriteFrame, Component, SpriteAtlas, GC;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _createClass = module.createClass;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _extends = module.extends;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
      Node = module.Node;
      isValid = module.isValid;
      resources = module.resources;
      SpriteFrame = module.SpriteFrame;
      Component = module.Component;
      SpriteAtlas = module.SpriteAtlas;
    }, function (module) {
      GC = module.GC;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "6b272+NmwNDN583egA33YlN", "SpriteFrameManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PlayMode = exports('PlayMode', /*#__PURE__*/function (PlayMode) {
        PlayMode[PlayMode["ATLAS"] = 0] = "ATLAS";
        PlayMode[PlayMode["FOLDER"] = 1] = "FOLDER";
        PlayMode[PlayMode["ARRAY"] = 2] = "ARRAY";
        return PlayMode;
      }({}));
      var DEFAULT_CONFIG = {
        fps: 12,
        loop: false,
        playOnLoad: true,
        autoDestroy: false
      };
      var SpriteFramePlayer = exports('SpriteFramePlayer', (_dec = ccclass("SpriteFramePlayer"), _dec2 = property(Sprite), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SpriteFramePlayer, _Component);
        function SpriteFramePlayer() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "sprite", _descriptor, _assertThisInitialized(_this));
          _this._currentIndex = 0;
          _this._frames = [];
          _this._isPlaying = false;
          _this._isPaused = false;
          _this._config = _extends({}, DEFAULT_CONFIG);
          _this._loadToken = 0;
          _this._nextFrame = function () {
            if (!_this._isPlaying || _this._isPaused || _this._frames.length === 0) {
              return;
            }
            _this._currentIndex += 1;
            if (_this._currentIndex >= _this._frames.length) {
              if (_this._config.loop) {
                _this._currentIndex = 0;
                _this._applyCurrentFrame();
                return;
              }
              _this._currentIndex = _this._frames.length - 1;
              _this._applyCurrentFrame();
              _this.stop();
              _this._config.onComplete == null || _this._config.onComplete();
              if (_this._config.autoDestroy && isValid(_this.node)) {
                _this.node.destroy();
              }
              return;
            }
            _this._applyCurrentFrame();
          };
          return _this;
        }
        var _proto = SpriteFramePlayer.prototype;
        _proto.onLoad = function onLoad() {
          if (!this.sprite) {
            this.sprite = this.getComponent(Sprite);
          }
          if (!this.sprite) {
            this.sprite = this.addComponent(Sprite);
          }
        };
        _proto.onDestroy = function onDestroy() {
          this.stop();
        }

        /**
         * 从图集加载并播放
         */;
        _proto.playFromAtlas = /*#__PURE__*/
        function () {
          var _playFromAtlas = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(atlasPath, config) {
            var token, atlas, _frames;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (config === void 0) {
                    config = {};
                  }
                  this.stop();
                  this._config = this._mergeConfig(config);
                  token = ++this._loadToken;
                  _context.prev = 4;
                  _context.next = 7;
                  return GC.res.loadResAwait(atlasPath, SpriteAtlas);
                case 7:
                  atlas = _context.sent;
                  if (!(token !== this._loadToken || !isValid(this.node))) {
                    _context.next = 10;
                    break;
                  }
                  return _context.abrupt("return", false);
                case 10:
                  _frames = this._sortFramesByName(((atlas == null || atlas.getSpriteFrames == null ? void 0 : atlas.getSpriteFrames()) || []).slice());
                  return _context.abrupt("return", this._setFramesAndMaybePlay(_frames));
                case 14:
                  _context.prev = 14;
                  _context.t0 = _context["catch"](4);
                  console.warn("[SpriteFramePlayer] \u52A0\u8F7D\u56FE\u96C6\u5931\u8D25: " + atlasPath, _context.t0);
                  return _context.abrupt("return", false);
                case 18:
                case "end":
                  return _context.stop();
              }
            }, _callee, this, [[4, 14]]);
          }));
          function playFromAtlas(_x, _x2) {
            return _playFromAtlas.apply(this, arguments);
          }
          return playFromAtlas;
        }()
        /**
         * 从目录加载并播放
         */;

        _proto.playFromFolder = /*#__PURE__*/
        function () {
          var _playFromFolder = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(folderPath, config) {
            var token, _frames2;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (config === void 0) {
                    config = {};
                  }
                  this.stop();
                  this._config = this._mergeConfig(config);
                  token = ++this._loadToken;
                  _context2.prev = 4;
                  _context2.next = 7;
                  return this._loadFramesFromDir(folderPath);
                case 7:
                  _frames2 = _context2.sent;
                  if (!(token !== this._loadToken || !isValid(this.node))) {
                    _context2.next = 10;
                    break;
                  }
                  return _context2.abrupt("return", false);
                case 10:
                  return _context2.abrupt("return", this._setFramesAndMaybePlay(this._sortFramesByName((_frames2 || []).slice())));
                case 13:
                  _context2.prev = 13;
                  _context2.t0 = _context2["catch"](4);
                  console.warn("[SpriteFramePlayer] \u52A0\u8F7D\u76EE\u5F55\u5931\u8D25: " + folderPath, _context2.t0);
                  return _context2.abrupt("return", false);
                case 17:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this, [[4, 13]]);
          }));
          function playFromFolder(_x3, _x4) {
            return _playFromFolder.apply(this, arguments);
          }
          return playFromFolder;
        }()
        /**
         * 兼容旧调用：
         * - play(): 直接播放当前帧序列
         * - play(frames, config): 设置帧后播放
         */;

        _proto.play = function play(frames, config) {
          if (config === void 0) {
            config = {};
          }
          if (frames) {
            this.stop();
            this._config = this._mergeConfig(config);
            this._frames = frames.slice();
            if (this._frames.length === 0) {
              console.warn("[SpriteFramePlayer] SpriteFrame 数组为空");
              return;
            }
            if (this._config.playOnLoad !== false) {
              this.play();
            }
            return;
          }
          if (this._frames.length === 0) {
            console.warn("[SpriteFramePlayer] 没有可播放的帧");
            return;
          }
          this.unschedule(this._nextFrame);
          this._isPlaying = true;
          this._isPaused = false;
          this._currentIndex = 0;
          this._applyCurrentFrame();
          this._scheduleTicker();
        };
        _proto.pause = function pause() {
          if (!this._isPlaying || this._isPaused) {
            return;
          }
          this._isPaused = true;
          this.unschedule(this._nextFrame);
        };
        _proto.resume = function resume() {
          if (!this._isPlaying || !this._isPaused) {
            return;
          }
          this._isPaused = false;
          this._scheduleTicker();
        };
        _proto.stop = function stop() {
          this._isPlaying = false;
          this._isPaused = false;
          this.unschedule(this._nextFrame);
        };
        _proto.gotoFrame = function gotoFrame(index) {
          if (index < 0 || index >= this._frames.length) {
            console.warn("[SpriteFramePlayer] \u5E27\u7D22\u5F15\u8D85\u51FA\u8303\u56F4: " + index);
            return;
          }
          this._currentIndex = index;
          this._applyCurrentFrame();
        };
        _proto.gotoFirstFrame = function gotoFirstFrame() {
          this.gotoFrame(0);
        };
        _proto.gotoLastFrame = function gotoLastFrame() {
          if (this._frames.length > 0) {
            this.gotoFrame(this._frames.length - 1);
          }
        };
        _proto.getCurrentFrameIndex = function getCurrentFrameIndex() {
          return this._currentIndex;
        };
        _proto.getTotalFrames = function getTotalFrames() {
          return this._frames.length;
        };
        _proto.isPlaying = function isPlaying() {
          return this._isPlaying && !this._isPaused;
        };
        _proto.isPaused = function isPaused() {
          return this._isPaused;
        };
        _proto.setFPS = function setFPS(fps) {
          var safeFps = Math.max(1, Math.floor(fps || DEFAULT_CONFIG.fps));
          this._config.fps = safeFps;
          if (this.isPlaying()) {
            this._scheduleTicker();
          }
        };
        _proto.setLoop = function setLoop(loop) {
          this._config.loop = !!loop;
        };
        _proto._setFramesAndMaybePlay = function _setFramesAndMaybePlay(frames) {
          this._frames = frames;
          if (this._frames.length === 0) {
            console.warn("[SpriteFramePlayer] 未加载到有效帧");
            return false;
          }
          if (this._config.playOnLoad !== false) {
            this.play();
          } else {
            this._currentIndex = 0;
            this._applyCurrentFrame();
          }
          return true;
        };
        _proto._mergeConfig = function _mergeConfig(config) {
          return _extends({}, DEFAULT_CONFIG, config);
        };
        _proto._applyCurrentFrame = function _applyCurrentFrame() {
          var _this$_config$onFrame, _this$_config;
          if (this._frames.length === 0 || !this.sprite || !isValid(this.sprite)) {
            return;
          }
          var frame = this._frames[this._currentIndex];
          if (!frame) {
            return;
          }
          this.sprite.spriteFrame = frame;
          (_this$_config$onFrame = (_this$_config = this._config).onFrame) == null || _this$_config$onFrame.call(_this$_config, this._currentIndex);
        };
        _proto._scheduleTicker = function _scheduleTicker() {
          this.unschedule(this._nextFrame);
          var fps = Math.max(1, Math.floor(this._config.fps || DEFAULT_CONFIG.fps));
          var interval = 1 / fps;
          this.schedule(this._nextFrame, interval);
        };
        _proto._sortFramesByName = function _sortFramesByName(frames) {
          var _this2 = this;
          return frames.sort(function (a, b) {
            var aName = (a == null ? void 0 : a.name) || "";
            var bName = (b == null ? void 0 : b.name) || "";
            var aNum = _this2._extractNumber(aName);
            var bNum = _this2._extractNumber(bName);
            if (aNum !== null && bNum !== null && aNum !== bNum) {
              return aNum - bNum;
            }
            return aName.localeCompare(bName);
          });
        };
        _proto._extractNumber = function _extractNumber(name) {
          var match = name.match(/\d+/);
          return match ? parseInt(match[0], 10) : null;
        };
        _proto._loadFramesFromDir = function _loadFramesFromDir(dirPath) {
          return new Promise(function (resolve) {
            resources.loadDir(dirPath, SpriteFrame, function (err, items) {
              if (err || !items || items.length === 0) {
                if (err) {
                  console.warn("[SpriteFramePlayer] \u76EE\u5F55\u52A0\u8F7D\u5931\u8D25: " + dirPath, err);
                }
                resolve([]);
                return;
              }
              resolve(items.filter(function (item) {
                return !!item;
              }));
            });
          });
        };
        return SpriteFramePlayer;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "sprite", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      /**
       * 序列帧播放器工厂
       */
      var SpriteFrameManager = exports('SpriteFrameManager', /*#__PURE__*/function () {
        function SpriteFrameManager() {
          this._runtimePlayers = new Map();
        }
        SpriteFrameManager.getInstance = function getInstance() {
          return this.instance;
        }

        /**
         * 参考 FrameAnimationManager.playDir 的管理器直播放接口
         * - target 支持 Node / Sprite
         * - 不要求在目标图片节点手动挂载 SpriteFramePlayer
         */;
        var _proto2 = SpriteFrameManager.prototype;
        _proto2.playDir = /*#__PURE__*/
        function () {
          var _playDir = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(target, dirPath, fps, loop, _onComplete) {
            var sprite, player, config;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  if (fps === void 0) {
                    fps = 10;
                  }
                  if (loop === void 0) {
                    loop = true;
                  }
                  sprite = this._getSprite(target);
                  if (!(!sprite || !isValid(sprite.node))) {
                    _context4.next = 6;
                    break;
                  }
                  console.warn("[SpriteFrameManager] playDir 目标无效");
                  return _context4.abrupt("return");
                case 6:
                  player = this._getOrCreateRuntimePlayer(sprite);
                  if (!(!player || !isValid(player.node))) {
                    _context4.next = 10;
                    break;
                  }
                  console.warn("[SpriteFrameManager] playDir 创建播放器失败");
                  return _context4.abrupt("return");
                case 10:
                  config = {
                    fps: fps,
                    loop: loop,
                    playOnLoad: true,
                    onComplete: _onComplete
                  };
                  if (!loop) {
                    _context4.next = 15;
                    break;
                  }
                  _context4.next = 14;
                  return player.playFromFolder(dirPath, config);
                case 14:
                  return _context4.abrupt("return");
                case 15:
                  _context4.next = 17;
                  return new Promise( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(resolve) {
                    var ok;
                    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                      while (1) switch (_context3.prev = _context3.next) {
                        case 0:
                          _context3.next = 2;
                          return player.playFromFolder(dirPath, _extends({}, config, {
                            onComplete: function onComplete() {
                              _onComplete == null || _onComplete();
                              resolve();
                            }
                          }));
                        case 2:
                          ok = _context3.sent;
                          // 加载失败时，确保 Promise 不悬挂
                          if (!ok) {
                            resolve();
                          }
                        case 4:
                        case "end":
                          return _context3.stop();
                      }
                    }, _callee3);
                  })));
                case 17:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this);
          }));
          function playDir(_x5, _x6, _x7, _x8, _x9) {
            return _playDir.apply(this, arguments);
          }
          return playDir;
        }();
        _proto2.stopAnimation = function stopAnimation(target) {
          var sprite = this._getSprite(target);
          if (!sprite) {
            return;
          }
          var player = this._runtimePlayers.get(sprite.node);
          player == null || player.stop();
        };
        _proto2.pauseAnimation = function pauseAnimation(target) {
          var sprite = this._getSprite(target);
          if (!sprite) {
            return;
          }
          var player = this._runtimePlayers.get(sprite.node);
          player == null || player.pause();
        };
        _proto2.resumeAnimation = function resumeAnimation(target) {
          var sprite = this._getSprite(target);
          if (!sprite) {
            return;
          }
          var player = this._runtimePlayers.get(sprite.node);
          player == null || player.resume();
        };
        _proto2.isPlaying = function isPlaying(target) {
          var sprite = this._getSprite(target);
          if (!sprite) {
            return false;
          }
          var player = this._runtimePlayers.get(sprite.node);
          return player ? player.isPlaying() : false;
        };
        _proto2.create = function create(parentNode, _playMode) {
          if (_playMode === void 0) {
            _playMode = PlayMode.ARRAY;
          }
          var node = new Node("SpriteFramePlayer");
          parentNode.addChild(node);
          return node.addComponent(SpriteFramePlayer);
        };
        _proto2.playFromAtlas = /*#__PURE__*/function () {
          var _playFromAtlas2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(parentNode, atlasPath, config) {
            var player, ok;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  if (config === void 0) {
                    config = {};
                  }
                  player = this.create(parentNode, PlayMode.ATLAS);
                  _context5.next = 4;
                  return player.playFromAtlas(atlasPath, config);
                case 4:
                  ok = _context5.sent;
                  if (!(!ok && isValid(player.node))) {
                    _context5.next = 8;
                    break;
                  }
                  player.node.destroy();
                  return _context5.abrupt("return", null);
                case 8:
                  return _context5.abrupt("return", player);
                case 9:
                case "end":
                  return _context5.stop();
              }
            }, _callee5, this);
          }));
          function playFromAtlas(_x11, _x12, _x13) {
            return _playFromAtlas2.apply(this, arguments);
          }
          return playFromAtlas;
        }();
        _proto2.playFromFolder = /*#__PURE__*/function () {
          var _playFromFolder2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(parentNode, folderPath, config) {
            var player, ok;
            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  if (config === void 0) {
                    config = {};
                  }
                  player = this.create(parentNode, PlayMode.FOLDER);
                  _context6.next = 4;
                  return player.playFromFolder(folderPath, config);
                case 4:
                  ok = _context6.sent;
                  if (!(!ok && isValid(player.node))) {
                    _context6.next = 8;
                    break;
                  }
                  player.node.destroy();
                  return _context6.abrupt("return", null);
                case 8:
                  return _context6.abrupt("return", player);
                case 9:
                case "end":
                  return _context6.stop();
              }
            }, _callee6, this);
          }));
          function playFromFolder(_x14, _x15, _x16) {
            return _playFromFolder2.apply(this, arguments);
          }
          return playFromFolder;
        }();
        _proto2.playFromArray = function playFromArray(parentNode, frames, config) {
          if (config === void 0) {
            config = {};
          }
          var player = this.create(parentNode, PlayMode.ARRAY);
          player.play(frames, config);
          return player;
        };
        _proto2._getSprite = function _getSprite(target) {
          if (target instanceof Sprite) {
            return target;
          }
          var sprite = target.getComponent(Sprite);
          if (!sprite) {
            sprite = target.addComponent(Sprite);
          }
          return sprite;
        };
        _proto2._getOrCreateRuntimePlayer = function _getOrCreateRuntimePlayer(sprite) {
          var hostNode = sprite.node;
          var cached = this._runtimePlayers.get(hostNode);
          if (cached && isValid(cached.node)) {
            cached.sprite = sprite;
            return cached;
          }
          var runtimeNode = new Node("__SpriteFrameRuntimePlayer__");
          hostNode.addChild(runtimeNode);
          var player = runtimeNode.addComponent(SpriteFramePlayer);
          player.sprite = sprite;
          this._runtimePlayers.set(hostNode, player);
          return player;
        };
        _createClass(SpriteFrameManager, null, [{
          key: "instance",
          get: function get() {
            if (!this._instance) {
              this._instance = new SpriteFrameManager();
            }
            return this._instance;
          }
        }]);
        return SpriteFrameManager;
      }());
      SpriteFrameManager._instance = null;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TimeUtils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameControl.ts'], function (exports) {
  var _createClass, cclegacy, GC;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      GC = module.GC;
    }],
    execute: function () {
      cclegacy._RF.push({}, "3d257zArIdKaKeazpEgnfqf", "TimeUtils", undefined);
      var TimeUtils = /*#__PURE__*/function () {
        function TimeUtils() {
          //毫秒
          this.serverStartTime = 0;
          this.clientStartTime = 0;
          this.serverStartTime = Date.now();
          this.clientStartTime = Date.now();
        }
        var _proto = TimeUtils.prototype;
        _proto.setNow = function setNow(time, isMil) {
          if (isMil === void 0) {
            isMil = true;
          }
          this.serverStartTime = Math.floor(time * (isMil ? 1 : 1000));
          this.clientStartTime = Date.now();
        };
        _proto.getNow = function getNow(isMil) {
          if (isMil === void 0) {
            isMil = true;
          }
          var now = Date.now();
          var clientSubTime = now - this.clientStartTime;
          var curTime = this.serverStartTime + clientSubTime;
          return Math.floor(curTime / (isMil ? 1 : 1000));
        };
        _proto.getYMDHMS = function getYMDHMS(t, flag, isMil) {
          if (t === void 0) {
            t = this.getNow();
          }
          if (flag === void 0) {
            flag = "-";
          }
          if (isMil === void 0) {
            isMil = true;
          }
          return this.getYMD(t, flag, isMil) + " " + this.getHMS(t, flag, isMil);
        };
        _proto.getYMD = function getYMD(t, flag, isMil) {
          if (t === void 0) {
            t = this.getNow();
          }
          if (flag === void 0) {
            flag = "-";
          }
          if (isMil === void 0) {
            isMil = true;
          }
          var data = this.getDateStructYMD(t, isMil);
          if (flag) {
            return "" + data.year + flag + data.month + flag + data.day;
          }
          return data.year + "\u5E74" + data.month + "\u6708" + data.day + "\u65E5";
        };
        _proto.getMD = function getMD(t, flag, isMil) {
          if (t === void 0) {
            t = this.getNow();
          }
          if (flag === void 0) {
            flag = "-";
          }
          if (isMil === void 0) {
            isMil = true;
          }
          var data = this.getDateStructYMD(t, isMil);
          if (flag) {
            return "" + data.month + flag + data.day;
          }
          return data.month + "\u6708" + data.day + "\u65E5";
        }

        /**
         * 
         * @param t :
         * @param flag 
         * @param isMil 
         * @returns 
         */;
        _proto.getHM = function getHM(t, flag, isMil) {
          if (t === void 0) {
            t = this.getNow();
          }
          if (flag === void 0) {
            flag = ":";
          }
          if (isMil === void 0) {
            isMil = true;
          }
          var data = this.getDateStructHMS(t, isMil);
          if (flag) {
            return "" + data.hour + flag + data.min;
          }
          return data.hour + "\u65F6" + data.min + "\u5206";
        };
        _proto.getHMS = function getHMS(t, flag, isMil) {
          if (t === void 0) {
            t = this.getNow();
          }
          if (flag === void 0) {
            flag = ":";
          }
          if (isMil === void 0) {
            isMil = true;
          }
          var data = this.getDateStructHMS(t, isMil);
          if (flag) {
            return "" + data.hour + flag + data.min + flag + data.sec;
          }
          return data.hour + "\u65F6" + data.min + "\u5206" + data.sec + "\u79D2";
        };
        _proto.getSubHMS = function getSubHMS(subTime, flag, isMil) {
          if (flag === void 0) {
            flag = ":";
          }
          if (isMil === void 0) {
            isMil = true;
          }
          var data = this.getSubDateStructHMS(subTime, isMil);
          if (flag) {
            return "" + data.hour + flag + data.min + flag + data.sec;
          }
          return data.hour + "小时" + data.min + "分钟" + data.sec + "秒";
        };
        _proto.getSubMS = function getSubMS(subTime, flag, isMil) {
          if (flag === void 0) {
            flag = ":";
          }
          if (isMil === void 0) {
            isMil = true;
          }
          var data = this.getSubDateStructHMS(subTime, isMil);
          if (flag) {
            return "" + data.min + flag + data.sec;
          }
          return data.min + "分钟" + data.sec + "秒";
        };
        _proto.getSubHM = function getSubHM(subTime, flag, isMil) {
          if (flag === void 0) {
            flag = ":";
          }
          if (isMil === void 0) {
            isMil = true;
          }
          var data = this.getSubDateStructHMS(subTime, isMil);
          if (flag) {
            return "" + data.hour + flag + data.min + flag + data.sec;
          }
          return data.hour + "小时" + data.min + "分钟 ";
        };
        _proto.getSubD = function getSubD(subTime, flag, isMil, isUp) {
          if (flag === void 0) {
            flag = null;
          }
          if (isMil === void 0) {
            isMil = true;
          }
          if (isUp === void 0) {
            isUp = true;
          }
          var day = subTime / (24 * 3600 * (isMil ? 1000 : 1));
          day = isUp ? Math.ceil(day) : Math.floor(day);
          if (flag) {
            return "" + day + flag;
          }
          return day + "天";
        }

        /**
         * 返回天-小时
         * @param subTime 
         * @param flag 
         * @param isMil 
         * @param isUp 
         * @returns 
         */;
        _proto.getSubDH = function getSubDH(subTime, flag, isMil, isUp) {
          if (flag === void 0) {
            flag = null;
          }
          if (isMil === void 0) {
            isMil = true;
          }
          if (isUp === void 0) {
            isUp = true;
          }
          var day = subTime / (24 * 3600 * (isMil ? 1000 : 1));
          day = isUp ? Math.ceil(day) : Math.floor(day);
          if (flag) {
            return "" + day + flag;
          }
          if (day > 0) {
            subTime -= day * 24 * 3600 * (isMil ? 1000 : 1);
            return day + "天" + this.getSubH(subTime, flag, isMil, isUp);
          }
        };
        _proto.getSubH = function getSubH(subTime, flag, isMil, isUp) {
          if (flag === void 0) {
            flag = null;
          }
          if (isMil === void 0) {
            isMil = true;
          }
          if (isUp === void 0) {
            isUp = true;
          }
          var hour = subTime / (3600 * (isMil ? 1000 : 1));
          hour = isUp ? Math.ceil(hour) : Math.floor(hour);
          if (flag) {
            return "" + hour + flag;
          }
          return hour + "小时";
        };
        _proto.getSubM = function getSubM(subTime, flag, isMil, isUp) {
          if (flag === void 0) {
            flag = null;
          }
          if (isMil === void 0) {
            isMil = true;
          }
          if (isUp === void 0) {
            isUp = true;
          }
          var m = subTime / (60 * (isMil ? 1000 : 1));
          m = isUp ? Math.ceil(m) : Math.floor(m);
          if (flag) {
            return "" + m + flag;
          }
          return m + "分";
        };
        _proto.getDays = function getDays(time, isMil) {
          if (time === void 0) {
            time = this.getNow();
          }
          if (isMil === void 0) {
            isMil = true;
          }
          // 0是从8点开始，所以加8；  0点算第二天的开始，所以加一
          time = time / (isMil ? 1000 : 1) + 8 * 60 * 60 + 1;
          return Math.ceil(time / 86400);
        }

        /**
         * 
         * @param timestamp  时间戳  转换为X分钟前
         */;
        _proto.getBeforeTime = function getBeforeTime(timestamp, isMil) {
          if (isMil === void 0) {
            isMil = true;
          }
          timestamp = Math.ceil(timestamp / (isMil ? 1000 : 1));
          var curTimestamp = Math.ceil(this.getNow(false)); //当前时间戳
          var timestampDiff = curTimestamp - timestamp; // 参数时间戳与当前时间戳相差秒数

          if (timestampDiff < 60) {
            // 一分钟以内
            return "刚刚";
          } else if (timestampDiff < 60 * 60) {
            // 一小时前之内
            return Math.floor(timestampDiff / 60) + "分钟前";
          } else if (timestampDiff < 60 * 60 * 24) {
            return Math.floor(timestampDiff / (60 * 60)) + "小时前";
          } else {
            return Math.floor(timestampDiff / (60 * 60 * 24)) + "天前";
          }
        }

        /** 时间戳与当前时间戳相差秒数*/;
        _proto.getSubSNum = function getSubSNum(timestamp, isMil) {
          if (isMil === void 0) {
            isMil = true;
          }
          timestamp = Math.ceil(timestamp / (isMil ? 1000 : 1));
          var curTimestamp = Math.ceil(this.getNow(false)); //当前时间戳
          var timestampDiff = timestamp - curTimestamp; // 参数时间戳与当前时间戳相差秒数
          return timestampDiff;
        };
        _proto.isToday = function isToday(milTime, isMil) {
          if (isMil === void 0) {
            isMil = true;
          }
          var now = this.getNow(isMil);
          return this.isSameDay(milTime, now, isMil);
        };
        _proto.isSameDay = function isSameDay(milTime1, milTime2, isMil) {
          if (isMil === void 0) {
            isMil = true;
          }
          var day1 = new Date(milTime1 * (isMil ? 1 : 1000));
          var day2 = new Date(milTime2 * (isMil ? 1 : 1000));
          return day1.getFullYear() == day2.getFullYear() && day1.getMonth() == day2.getMonth() && day1.getDate() == day2.getDate();
        };
        _proto.getSubDateStructHMS = function getSubDateStructHMS(subTime, isMil) {
          if (isMil === void 0) {
            isMil = true;
          }
          var subSecond = Math.floor(isMil ? subTime / 1000 : subTime);
          var subDaySecond = subSecond;
          //计算相差分钟数
          var subHourSecond = subSecond % 3600; //计算小时数后剩余的秒数
          //计算相差秒数
          var subMinSecond = subSecond % 60; //计算分钟数后剩余的秒数

          var hour = this.zeroNum(Math.floor(subDaySecond / 3600));
          var min = this.zeroNum(Math.floor(subHourSecond / 60));
          var sec = this.zeroNum(subMinSecond);
          return {
            hour: hour,
            min: min,
            sec: sec
          };
        };
        _proto.getDateStructYMD = function getDateStructYMD(t, isMil) {
          if (isMil === void 0) {
            isMil = true;
          }
          var data = new Date(t * (isMil ? 1 : 1000));
          var year = this.zeroNum(data.getFullYear());
          var month = this.zeroNum(data.getMonth() + 1);
          var day = this.zeroNum(data.getDate());
          return {
            year: year,
            month: month,
            day: day
          };
        };
        _proto.getDateStructHMS = function getDateStructHMS(t, isMil) {
          if (isMil === void 0) {
            isMil = true;
          }
          var data = new Date(t * (isMil ? 1 : 1000));
          var hour = this.zeroNum(data.getHours());
          var min = this.zeroNum(data.getMinutes());
          var sec = this.zeroNum(data.getSeconds());
          return {
            hour: hour,
            min: min,
            sec: sec
          };
        };
        _proto.zeroNum = function zeroNum(num) {
          return num.toString().padStart(2, '0');
        };
        _proto.getTodayTimeByH = function getTodayTimeByH(hour, isMil) {
          if (isMil === void 0) {
            isMil = true;
          }
          var zero_timestamp = this.getTodayZeroTime(isMil);
          var timestamp = zero_timestamp + hour * 60 * 60 * (isMil ? 1000 : 1);
          return timestamp;
        };
        _proto.getTodayZeroTime = function getTodayZeroTime(isMil) {
          if (isMil === void 0) {
            isMil = true;
          }
          var millTime = this.getNow(true);
          var date = new Date(millTime);
          date.setHours(0);
          date.setMinutes(0);
          date.setSeconds(0);
          date.setMilliseconds(1);
          var timeStamp = date.getTime();
          return Math.floor(timeStamp / (isMil ? 1 : 1000));
        };
        _proto.getToday24Time = function getToday24Time(isMil) {
          if (isMil === void 0) {
            isMil = true;
          }
          var t = this.getTodayZeroTime(isMil);
          t += 24 * 60 * 60 * (isMil ? 1000 : 1);
          return t;
        };
        _proto.getZeroTimeOfWeek = function getZeroTimeOfWeek(isMil) {
          if (isMil === void 0) {
            isMil = true;
          }
          var millTime = this.getNow(true);
          var date = new Date(millTime);
          date.setHours(0);
          date.setMinutes(0);
          date.setSeconds(0);
          date.setMilliseconds(1);
          var day = date.getDay();
          var timeStamp = date.getTime();
          var subTime = timeStamp - (day ? day - 1 : 6) * 24 * 60 * 60 * 1000;
          return Math.floor(subTime / (isMil ? 1 : 1000));
        };
        _proto.get24TimeOfWeek = function get24TimeOfWeek(isMil) {
          if (isMil === void 0) {
            isMil = true;
          }
          var t = this.getZeroTimeOfWeek(isMil);
          t += 7 * 24 * 60 * 60 * (isMil ? 1000 : 1);
          return t;
        };
        _proto.getWeekIndex = function getWeekIndex(timeStamp) {
          if (timeStamp === void 0) {
            timeStamp = this.getNow();
          }
          var date = new Date(timeStamp);
          return date.getDay();
        };
        _proto.getWeekDay = function getWeekDay(timeStamp) {
          if (timeStamp === void 0) {
            timeStamp = this.getNow();
          }
          var index = this.getWeekIndex(timeStamp);
          return [7, 1, 2, 3, 4, 5, 6][index];
        };
        _proto.getWeekStr = function getWeekStr(timeStamp) {
          if (timeStamp === void 0) {
            timeStamp = this.getNow();
          }
          var index = this.getWeekIndex(timeStamp);
          return ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"][index];
        }

        /**
         * 是否首日
         */;
        _proto.GetTimer = function GetTimer(t) {
          var e = Math.floor(t / 3600),
            i = Math.floor((t - 3600 * e) / 60),
            n = Math.floor(t - 3600 * e - 60 * i);
          return (e < 10 ? "0" + e : "" + e) + ":" + (i < 10 ? "0" + i : "" + i) + ":" + (n < 10 ? "0" + n : "" + n);
        };
        _proto.getTimeBySecond = function getTimeBySecond(t) {
          t = Math.floor(t);
          var e = Math.round((t - 30) / 60) % 60,
            r = t % 60;
          return (e > 0 ? e >= 10 ? e % 100 + ":" : "0" + e + ":" : "00:") + (r > 0 ? r >= 10 ? r % 100 : "0" + r : "00");
        };
        _createClass(TimeUtils, [{
          key: "isFirstDay",
          get: function get() {
            return this.createDay == 1;
          }

          //创建账号的天数
        }, {
          key: "createDay",
          get: function get() {
            var createDay = Math.ceil(GC.data.user.register_date / 86400);
            GC.data.user;
            var curDay = Math.ceil(this.getNow(false) / 86400);
            return curDay - createDay + 1;
          }
        }, {
          key: "GetDate",
          get: function get() {
            var t = new Date();
            return 1e4 * t.getFullYear() + 100 * (t.getMonth() + 1) + t.getDate();
          }
        }]);
        return TimeUtils;
      }();
      var timeUtils = exports('timeUtils', new TimeUtils());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TypeConfig.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "9ff7cVVml9HLJ5chKlE+ukN", "TypeConfig", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UserData.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ProtocolConfig.ts', './UserDataBase.ts'], function (exports) {
  var _inheritsLoose, cclegacy, ProtocolName, UserDataBase;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ProtocolName = module.ProtocolName;
    }, function (module) {
      UserDataBase = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "daaebxim5tIpq/ee/jRWJ4C", "UserData", undefined);
      var UserData = exports('UserData', /*#__PURE__*/function (_UserDataBase) {
        _inheritsLoose(UserData, _UserDataBase);
        function UserData() {
          return _UserDataBase.apply(this, arguments) || this;
        }
        var _proto = UserData.prototype;
        _proto.initData = function initData(msg) {
          _UserDataBase.prototype.initData.call(this, msg);
        };
        _proto.updateUserInfo = function updateUserInfo(data) {
          var nickName = data.nickName;
          var avatarUrl = data.avatarUrl;
          this.avatar = avatarUrl;
          this.nickname = nickName;
          this.reqServePost(ProtocolName.UPDATE_USER_INFO, {
            avatar: avatarUrl,
            nickname: nickName
          });
        };
        return UserData;
      }(UserDataBase));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UserDataBase.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseData.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, BaseData;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      BaseData = module.BaseData;
    }],
    execute: function () {
      cclegacy._RF.push({}, "aef8ddMT2FHrJMGac7b/uRX", "UserDataBase", undefined);
      var UserDataBase = exports('default', /*#__PURE__*/function (_BaseData) {
        _inheritsLoose(UserDataBase, _BaseData);
        function UserDataBase() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseData.call.apply(_BaseData, [this].concat(args)) || this;
          _this._msg = {};
          _this._asscess_token = "";
          return _this;
        }
        var _proto = UserDataBase.prototype;
        _proto.initData = function initData(msg) {
          this._msg = msg;
        };
        _proto.updateUserInfo = function updateUserInfo(msg) {
          this._msg.nickname = msg.nickname;
          this._msg.avatar = msg.avatar;
        };
        _createClass(UserDataBase, [{
          key: "nickname",
          get: function get() {
            var _this$_msg;
            return this == null || (_this$_msg = this._msg) == null ? void 0 : _this$_msg.nickname;
          },
          set: function set(v) {
            this._msg.nickname = v;
          }
        }, {
          key: "avatar",
          get: function get() {
            var _this$_msg2;
            return this == null || (_this$_msg2 = this._msg) == null ? void 0 : _this$_msg2.avatar;
          },
          set: function set(v) {
            this._msg.avatar = v;
          }
        }, {
          key: "user_id",
          get: function get() {
            var _this$_msg3;
            return this == null || (_this$_msg3 = this._msg) == null ? void 0 : _this$_msg3.user_id;
          },
          set: function set(v) {
            this._msg.user_id = v;
          }
        }, {
          key: "open_id",
          get: function get() {
            var _this$_msg4;
            return (this == null || (_this$_msg4 = this._msg) == null ? void 0 : _this$_msg4.open_id) || "openid";
          },
          set: function set(v) {
            this._msg.open_id = v;
          }
        }, {
          key: "pf_openid",
          get: function get() {
            var _this$_msg5;
            return (this == null || (_this$_msg5 = this._msg) == null ? void 0 : _this$_msg5.pf_openid) || "pfopenid";
          },
          set: function set(v) {
            this._msg.pf_openid = v;
          }
        }, {
          key: "asscess_token",
          get: function get() {
            return this._asscess_token;
          },
          set: function set(v) {
            this._asscess_token = v;
          }
        }, {
          key: "register_date",
          get: function get() {
            var _this$_msg6;
            return this == null || (_this$_msg6 = this._msg) == null ? void 0 : _this$_msg6.register_date;
          },
          set: function set(v) {
            this._msg.register_date = v;
          }
        }, {
          key: "register_time",
          get: function get() {
            var _this$_msg7;
            return this == null || (_this$_msg7 = this._msg) == null ? void 0 : _this$_msg7.register_time;
          },
          set: function set(v) {
            this._msg.register_time = v;
          }
        }, {
          key: "last_login_time",
          get: function get() {
            var _this$_msg8;
            return this == null || (_this$_msg8 = this._msg) == null ? void 0 : _this$_msg8.last_login_time;
          },
          set: function set(v) {
            this._msg.last_login_time = v;
          }
        }, {
          key: "login_times",
          get: function get() {
            var _this$_msg9;
            return this == null || (_this$_msg9 = this._msg) == null ? void 0 : _this$_msg9.login_times;
          },
          set: function set(v) {
            this._msg.login_times = v;
          }
        }, {
          key: "continue_login_days",
          get: function get() {
            var _this$_msg10;
            return this == null || (_this$_msg10 = this._msg) == null ? void 0 : _this$_msg10.continue_login_days;
          },
          set: function set(v) {
            this._msg.continue_login_days = v;
          }
        }, {
          key: "total_login_days",
          get: function get() {
            var _this$_msg11;
            return this == null || (_this$_msg11 = this._msg) == null ? void 0 : _this$_msg11.total_login_days;
          },
          set: function set(v) {
            this._msg.total_login_days = v;
          }
        }, {
          key: "last_login_ip",
          get: function get() {
            var _this$_msg12;
            return this == null || (_this$_msg12 = this._msg) == null ? void 0 : _this$_msg12.last_login_ip;
          },
          set: function set(v) {
            this._msg.last_login_ip = v;
          }
        }, {
          key: "region_name",
          get: function get() {
            var _this$_msg13;
            return this == null || (_this$_msg13 = this._msg) == null ? void 0 : _this$_msg13.region_name;
          },
          set: function set(v) {
            this._msg.region_name = v;
          }
        }, {
          key: "region_code",
          get: function get() {
            var _this$_msg14;
            return this == null || (_this$_msg14 = this._msg) == null ? void 0 : _this$_msg14.region_code;
          },
          set: function set(v) {
            this._msg.region_code = v;
          }
        }, {
          key: "province_name",
          get: function get() {
            var _this$_msg15;
            return this == null || (_this$_msg15 = this._msg) == null ? void 0 : _this$_msg15.province_name;
          },
          set: function set(v) {
            this._msg.province_name = v;
          }
        }, {
          key: "province_code",
          get: function get() {
            var _this$_msg16;
            return this == null || (_this$_msg16 = this._msg) == null ? void 0 : _this$_msg16.province_code;
          },
          set: function set(v) {
            this._msg.province_code = v;
          }
        }, {
          key: "city_name",
          get: function get() {
            var _this$_msg17;
            return this == null || (_this$_msg17 = this._msg) == null ? void 0 : _this$_msg17.city_name;
          },
          set: function set(v) {
            this._msg.city_name = v;
          }
        }, {
          key: "city_code",
          get: function get() {
            var _this$_msg18;
            return this == null || (_this$_msg18 = this._msg) == null ? void 0 : _this$_msg18.city_code;
          },
          set: function set(v) {
            this._msg.city_code = v;
          }
        }]);
        return UserDataBase;
      }(BaseData));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Utils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameControl.ts', './TimeUtils.ts'], function (exports) {
  var _createClass, _createForOfIteratorHelperLoose, cclegacy, v2, GC, timeUtils;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      v2 = module.v2;
    }, function (module) {
      GC = module.GC;
    }, function (module) {
      timeUtils = module.timeUtils;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b158dhyCHRLzqb5LvpDJzR9", "Utils", undefined);
      // @ts-ignore
      var Utils = exports('default', /*#__PURE__*/function () {
        function Utils() {}
        /**货币格式转换 */
        Utils.fomateMoney = function fomateMoney(money_) {
          var money = Math.floor(money_);
          return money.toString();
          // let numStr = "";
          // let digits = GC.template.digits;
          // digits.some((value, index, list) => {
          //     if (money < Math.pow(10, value.digits)) {
          //         if (index > 0) {
          //             let flag = value.letter ? value.letter : "";
          //             numStr = `${Utils.formate(money, list[index - 1].digits, 1)}${flag}`;
          //         } else {
          //             numStr = money.toString();
          //         }
          //         return true;
          //     }
          //     return false;
          // })
          // return Utils.isNull(numStr) ? `9999${digits[digits.length - 1].letter}` : numStr;
        }

        /** LevelNum:单位，fixNum：保留小数的位数*/;
        Utils.formate = function formate(money, LevelNum, fixNum) {
          var unit = Math.pow(10, LevelNum);
          var ret = money / unit;
          ret = Math.floor(ret * Math.pow(10, fixNum)) / Math.pow(10, fixNum);
          return ret.toString();
        }

        /**  
         * 随机min到max的数 连续随机用
         *   max 不传， 返回 0~min-1 的数
         */;
        Utils.random = function random(min, max) {
          if (!Utils.isNull(max)) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
          } else if (!Utils.isNull(min)) {
            return Math.floor(Math.random() * min);
          }
          return Math.random();
        };
        Utils.randomFloat = function randomFloat(t, e) {
          return Math.random() * (e - t) + t;
        }

        /** 
         * 通过时间随机  无规律调用， 有规律的调用会使尾数相同 
         * max 不传， 返回 0~min-1 的数
        */;
        Utils.randomByTime = function randomByTime(min, max) {
          var time = timeUtils.getNow();
          if (!Utils.isNull(max)) {
            return time % (max - min) + min;
          }
          return time % min;
        }

        /***种子随机数***/;
        Utils.seedRandom = function seedRandom(seed, min, max) {
          seed = (seed * 9301 + 49297) % 233280 / 233280.0;
          if (!Utils.isNull(max)) {
            return Math.floor(seed * (max - min + 1)) + min;
          } else if (!Utils.isNull(min)) {
            return Math.floor(seed * min);
          }
          return seed;
        }

        //单局不重复的数字
        ;
        /**
         * 数组去重
         * @param arr
         */
        Utils.unique = function unique(arr) {
          var s = new Set(arr);
          return Array.from(s.values());
        }

        //小数相加
        ;

        Utils.addDecimal = function addDecimal() {
          var maxDigit = 0;
          for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
            params[_key] = arguments[_key];
          }
          for (var _i = 0, _params = params; _i < _params.length; _i++) {
            var n = _params[_i];
            var s = String(n);
            if (s.indexOf(".") != -1) {
              var digit = s.split(".")[1].length;
              maxDigit = maxDigit < digit ? digit : maxDigit;
            }
          }
          var sum = 0;
          for (var _i2 = 0, _params2 = params; _i2 < _params2.length; _i2++) {
            var _n = _params2[_i2];
            sum += _n * Math.pow(10, maxDigit);
          }
          return sum / Math.pow(10, maxDigit);
        };
        Utils.isNull = function isNull(obj) {
          if (obj == null || obj == undefined) {
            return true;
          }
          if (obj instanceof Array) {
            return obj.length == 0;
          } else if (obj instanceof Map) {
            return obj.size == 0;
          } else if (obj instanceof Object) {
            for (var k in obj) {
              return false;
            }
            return true;
          } else if (typeof obj == "number") {
            return isNaN(obj);
          } else if (typeof obj == "string") {
            return obj == "";
          }
          return false;
        }
        /**
         * str: "level*(1+0.01*star)*Math.pow(1.1,quality)+10"
         * obj {level:1,star:1,quality:2}
         * @param str 公式字符串
         * @param obj 替换的字段和值
         */;
        Utils.getFormulaStr = function getFormulaStr(str, obj) {
          for (var key in obj) {
            str = str.replace(new RegExp(key, 'g'), obj[key] + "");
          }
          return str;
        };
        Utils.sum = function sum() {
          var totle = 0;
          for (var _len2 = arguments.length, params = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            params[_key2] = arguments[_key2];
          }
          params.forEach(function (param) {
            if (param instanceof Array) {
              param.forEach(function (num) {
                return totle += num;
              });
            } else {
              totle += Number(param);
            }
          });
          return totle;
        };
        Utils.reverseRomveItemFromArray = function reverseRomveItemFromArray(list, item) {
          for (var index = list.length - 1; index >= 0; index--) {
            if (list[index] == item) {
              list.splice(index, 1);
              break;
            }
          }
        };
        Utils.cutDecimalPoint = function cutDecimalPoint(num, limit) {
          return Math.floor(num * Math.pow(10, limit)) / Math.pow(10, limit);
        };
        Utils.randomListSort = function randomListSort(list) {
          list.sort(function () {
            return Math.random() - 0.5;
          });
        }

        /**
         * 数字转化成汉字
         */;
        Utils.numToChinese = function numToChinese(num) {
          var str = "";
          switch (num) {
            case 0:
              str = "零";
              break;
            case 1:
              str = "一";
              break;
            case 2:
              str = "二";
              break;
            case 3:
              str = "三";
              break;
            case 4:
              str = "四";
              break;
            case 5:
              str = "五";
              break;
            case 6:
              str = "六";
              break;
            case 7:
              str = "七";
              break;
            case 8:
              str = "八";
              break;
            case 9:
              str = "九";
              break;
            case 10:
              str = "十";
              break;
          }
          return str;
        }
        //数组 随机元素
        ;

        Utils.randomElement = function randomElement(aArr) {
          if (aArr.length == 0) {
            return null;
          }
          var index = Math.floor(Math.random() * aArr.length);
          return aArr[index];
        };
        Utils.objToArr = function objToArr(t, e) {
          if (e === void 0) {
            e = null;
          }
          var n = [];
          if (!t) return n;
          for (var i in t) e && !e(t[i]) || n.push(t[i]);
          return n;
        };
        Utils.genRandomNumEx = function genRandomNumEx(t, e, n, i) {
          for (var r = [], o = 0; o < n; o++) {
            var s = this.random(t, e);
            -1 == r.indexOf(s) && -1 == i.indexOf(s) ? r.push(s) : o--;
          }
          return r;
        };
        Utils.shuffle = function shuffle(e) {
          for (var n = e.slice(), i = 0; i < n.length; i++) {
            var r = this.random(0, i),
              o = n[i];
            n[i] = n[r], n[r] = o;
          }
          return n;
        };
        Utils.calcDistance = function calcDistance(t, e) {
          var n = v2(t.x - e.x, t.y - e.y);
          return Math.sqrt(n.x * n.x + n.y * n.y);
        };
        Utils.covertThousand = function covertThousand(t) {
          return t < 1e3 ? t.toString() : parseFloat((t / 1e3).toFixed(2)) + "k";
        };
        Utils.randomIntNew = function randomIntNew(x, y) {
          var z = y - x + 1;
          return Math.floor(Math.random() * z + x);
        };
        Utils.getNickName = function getNickName(nickName) {
          var n = nickName;
          if (nickName.length > 6) {
            n = nickName.substring(0, 6) + "...";
          }
          return n;
        };
        Utils.muddleArray = function muddleArray(e) {
          for (var t = 1; t < e.length; t++) {
            var n = Math.floor(Math.random() * (t + 1)),
              i = [e[n], e[t]];
            e[t] = i[0], e[n] = i[1];
          }
        };
        Utils.deepCopy = function deepCopy(t) {
          var cache = new WeakMap();
          var handleCopy = function handleCopy(value) {
            if (value === null || typeof value !== 'object') {
              return value;
            }
            if (cache.has(value)) {
              return cache.get(value);
            }
            var constructor = value.constructor;
            switch (constructor) {
              case Array:
                return cache.set(value, value.map(handleCopy));
              case Map:
                return cache.set(value, new Map(Array.from(value.entries(), function (_ref) {
                  var key = _ref[0],
                    val = _ref[1];
                  return [key, handleCopy(val)];
                })));
              case Set:
                return cache.set(value, new Set(Array.from(value, handleCopy)));
              case Date:
                return cache.set(value, new Date(value.getTime()));
              case RegExp:
                return cache.set(value, new RegExp(value.source, value.flags));
              default:
                var result = new constructor();
                cache.set(value, result);
                Object.keys(value).forEach(function (key) {
                  if (value.hasOwnProperty(key)) {
                    result[key] = handleCopy(value[key]);
                  }
                });
                return result;
            }
          };
          return handleCopy(t);
        };
        Utils.deleteRepeatItem = function deleteRepeatItem(e) {
          for (var t = {}, n = [], i = 0; i < e.length; i++) e[i] in t ? t[e[i]] = !1 : t[e[i]] = !0;
          for (var o in t) 1 == t[o] && n.push(parseInt(o));
          return n;
        };
        Utils.no_repeatArray = function no_repeatArray(e) {
          for (var t = [], n = 0; n < e.length; n++) -1 === t.indexOf(e[n]) && t.push(e[n]);
          return t;
        };
        Utils.findElementByList = function findElementByList(e, t) {
          for (var n = 0, i = e.length; n < i; n++) if (t == e[n]) return n;
          return -1;
        };
        Utils.generateRandomString = function generateRandomString(length) {
          var result = '';
          var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
          var charactersLength = characters.length;
          for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
          }
          return result;
        }

        /**
         * javascript实现PHP字典排序
         */;
        Utils.ksort = function ksort(obj) {
          var sorted = {};
          var keys = Object.keys(obj);
          keys.sort();
          keys.forEach(function (key) {
            sorted[key] = obj[key];
          });
          return sorted;
        };
        Utils.child = function child(e, t, o) {
          var n = e.getChildByName(t);
          if (n) return n.getComponent(o);
          console.error("\u6CA1\u6709\u627E\u5230\u8282\u70B9 ", t, e.name);
        };
        Utils.randomRang = function randomRang(t, e) {
          return Math.floor(Math.random() * (e - t)) + t;
        };
        Utils.StringFormat = function StringFormat(t) {
          for (var _len3 = arguments.length, P = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
            P[_key3 - 1] = arguments[_key3];
          }
          for (var e = [], n = 1; n < arguments.length; n++) {
            e[n - 1] = arguments[n];
          }
          for (var a = 0; a < e.length; a++) {
            var r = new RegExp("\\{" + a + "\\}", "gm");
            t = t.replace(r, arguments[a + 1]);
          }
          return t;
        };
        Utils.numberFomat = function numberFomat(t) {
          for (var e, n = ["", "万", "亿", "兆", "京", "垓", "秭", "穰", "沟", "涧", "正", "载", "极", "恒", "河沙", "阿僧祇", "那由他", "不可思议", "无量大数"], a = 0, r = t, i = 0; Math.abs(r) >= 1e4;) {
            i = Math.floor(r % 1e4);
            r = Math.floor(r / 1e4);
            a++;
          }
          switch (a) {
            case 0:
              e = r.toString();
              break;
            default:
              e = 0 == i ? r.toString() + n[a] : (r + i / 1e4).toFixed(2).replace(/\.?0*$/, "") + n[a];
          }
          return e;
        };
        Utils.getRandomString = function getRandomString(length, isNum) {
          if (isNum === void 0) {
            isNum = false;
          }
          var result = '';
          var characters = isNum ? '0123456789' : 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
          var charactersLength = characters.length;
          for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
          }
          return result;
        };
        Utils.pointInRect = function pointInRect(e, t) {
          var o = t.x - t.width / 2;
          var n = t.x + t.width / 2;
          var i = t.y - t.height / 2;
          var a = t.x + t.height / 2;
          return e.x > o && e.x < n && e.y > i && e.y < a;
        };
        Utils.replaceSymbols = function replaceSymbols(e, t, o) {
          var n = e;
          for (var i = 0; i < o.length; i++) {
            n = n.replace(t, o[i] + "");
          }
          return n;
        };
        Utils.limit = function limit(e, t) {
          e = Math.min(e, t);
          var o = (t = Math.max(e, t)) - e;
          return e + Math.random() * o;
        };
        Utils.limitInteger = function limitInteger(e, t) {
          return Math.floor(this.limit(e, t + 1));
        };
        Utils.getPointAngle = function getPointAngle(e, t) {
          var o = t.x - e.x;
          var n = t.y - e.y;
          return -v2(o, n).signAngle(v2(1, 0)) / Math.PI * 180;
        };
        Utils.getWeightRandom = function getWeightRandom(e) {
          var t = 0;
          e.forEach(function (e) {
            return t += e;
          });
          t *= Math.random();
          for (var o = 0; o < e.length; o++) {
            if ((t -= e[o]) <= 0) {
              return o;
            }
          }
          return 0;
        };
        Utils.getWeightRandomByArr = function getWeightRandomByArr(arr) {
          var wIndex = arr[0].length - 1;
          var sum = this.sum.apply(this, arr.map(function (v) {
            return v[wIndex];
          }));
          var r = this.random(sum);
          for (var i = 0; i < arr.length; i++) {
            if ((r -= arr[i][wIndex]) <= 0) {
              return arr[i][0];
            }
          }
          return 0;
        };
        Utils.getWeightRandomByArrBackFullArr = function getWeightRandomByArrBackFullArr(arr) {
          var wIndex = arr[0].length - 1;
          var sum = this.sum.apply(this, arr.map(function (v) {
            return v[wIndex];
          }));
          var r = this.random(sum);
          for (var i = 0; i < arr.length; i++) {
            if ((r -= arr[i][wIndex]) <= 0) {
              return arr[i];
            }
          }
          return [];
        };
        Utils.convertExcelArr = function convertExcelArr(str) {
          var arr = JSON.parse(str);
          var propList = [];
          arr.forEach(function (a) {
            propList.push({
              id: a[0],
              value: a[1]
            });
          });
          return propList;
        };
        Utils.LimitSpriteMaxSize = function LimitSpriteMaxSize(e, t) {
          if (e.spriteFrame) {
            var o = e.spriteFrame.getOriginalSize();
            if (o.width > t || o.height > t) {
              var n = o.width > o.height ? t / o.width : t / o.height;
              n = n > 1 ? 1 : n;
              return void (e.node.scale = n);
            }
          }
          e.node.scale = 1;
        };
        Utils.clamp = function clamp(e, t, i) {
          if (e < t) {
            return t;
          } else if (e > i) {
            return i;
          } else {
            return e;
          }
        };
        Utils.rnd = function rnd(e, t) {
          return e + (t - e) * Math.random();
        };
        Utils.rndInt = function rndInt(e, t) {
          return Math.round(e + Math.floor(Math.random() * (t - e + 1)));
        }

        //打字机效果
        ;

        Utils.setTextTyper = function setTextTyper(lab, str, callback) {
          var timer = 0;
          var delimiterCharList = ['✁', '✂', '✃', '✄', '✺', '✻', '✼', '❄', '❅', '❆', '❇', '❈', '❉', '❊'];
          var regexp = /<.+?\/?>/g;
          var matchArr = str.match(regexp);
          var delimiterChar = delimiterCharList.find(function (item) {
            return str.indexOf(item) == -1;
          });
          var replaceStr = str.replace(regexp, delimiterChar);
          var tagInfoArr = [];
          var temp = [];
          var tagInfo = {};
          var num = 0;
          for (var i = 0; i < replaceStr.length; i++) {
            if (replaceStr[i] == delimiterChar) {
              temp.push(i);
              if (temp.length >= 2) {
                tagInfo.endStr = matchArr[tagInfoArr.length * 2 + 1];
                tagInfo.endtIdx = i - num;
                tagInfoArr.push(tagInfo);
                temp = [];
                tagInfo = {};
              } else {
                tagInfo.startIdx = i - num;
                tagInfo.startStr = matchArr[tagInfoArr.length * 2];
              }
              num += 1;
            }
          }
          var showCharArr = str.replace(regexp, '').split('');
          var typerArr = [];
          for (var _i3 = 1; _i3 <= showCharArr.length; _i3++) {
            var _temp = showCharArr.join('').slice(0, _i3);
            var addLen = 0;
            for (var j = 0; j < tagInfoArr.length; j++) {
              var _tagInfo = tagInfoArr[j];
              var start = _tagInfo.startIdx;
              var end = _tagInfo.endtIdx;
              if (_i3 > start && _i3 <= end) {
                _temp = _temp.slice(0, start + addLen) + _tagInfo.startStr + _temp.slice(start + addLen) + _tagInfo.endStr;
                addLen += _tagInfo.startStr.length + _tagInfo.endStr.length;
              } else if (_i3 > end) {
                _temp = _temp.slice(0, start + addLen) + _tagInfo.startStr + _temp.slice(start + addLen, end + addLen) + _tagInfo.endStr + _temp.slice(end + addLen);
                addLen += _tagInfo.startStr.length + _tagInfo.endStr.length;
              }
            }
            typerArr.unshift(_temp);
          }
          timer && clearInterval(timer);
          timer = setInterval(function () {
            if (typerArr.length) {
              lab.string = typerArr.pop();
              GC.audio.playSound("dz" + Utils.random(1, 7));
            } else {
              timer && clearInterval(timer);
              callback && callback();
            }
          }, 80);
          return timer;
        };
        Utils.isObject = function isObject(e) {
          return "[object Object]" === Object.prototype.toString.call(e);
        };
        Utils.isArray = function isArray(e) {
          return "[object Array]" === Object.prototype.toString.call(e);
        };
        Utils.isMap = function isMap(e) {
          return "[object Map]" === Object.prototype.toString.call(e);
        };
        Utils.Arr2Obj = function Arr2Obj(e) {
          if (this.isObject(e)) {
            return e;
          }
          var t = new Object();
          if (this.isArray(e)) {
            for (var i = 0; i < e.length; i++) {
              t[i] = e[i];
            }
          }
          return t;
        };
        Utils.Obj2Map = function Obj2Map(e) {
          if (this.isMap(e)) {
            return e;
          }
          var t = new Map();
          if ("{}" == e || "" == e) {
            return t;
          }
          this.isObject(e) || (e = JSON.parse(e));
          for (var _i4 = 0, _Object$keys = Object.keys(e); _i4 < _Object$keys.length; _i4++) {
            var i = _Object$keys[_i4];
            t.set(i, e[i]);
          }
          return t;
        };
        Utils.clonJson = function clonJson(e) {
          return JSON.parse(JSON.stringify(e));
        };
        Utils.mathshuffle = function mathshuffle(e) {
          for (var t = e.length - 1; t >= 0; t--) {
            var i = Math.floor(Math.random() * (t + 1));
            var r = e[i];
            e[i] = e[t];
            e[t] = r;
          }
          return e;
        };
        Utils.addTwoSameMap = function addTwoSameMap(map1, map2) {
          map2.forEach(function (value, key) {
            if (map1.has(key)) {
              var v = map1.get(key);
              v += value;
              map1.set(key, v);
            } else {
              map1.set(key, value);
            }
          });
          return map1;
        };
        Utils.clone = function clone(t) {
          if (null === t || "object" != typeof t) return t;
          var e = {};
          for (var r in t.constructor === Array && (e = []), t) t.hasOwnProperty(r) && (e[r] = this.clone(t[r]));
          return e;
        };
        Utils.weightedRandom = function weightedRandom(t) {
          //todo  临时修改 上方为原始代码
          if (t.length === 0) {
            throw new Error("Weights array cannot be empty.");
          }
          var e = t.reduce(function (sum, item) {
            return sum + item[1];
          }, 0);
          if (e === 0) {
            throw new Error("Sum of weights must be greater than zero.");
          }
          var o = Math.floor(Math.random() * e);

          // 直接使用for循环替代迭代器
          for (var _iterator = _createForOfIteratorHelperLoose(t), _step; !(_step = _iterator()).done;) {
            var item = _step.value;
            var u = item[0];
            var f = item[1];
            if (o < f) {
              return u;
            }
            o -= f;
          }
          return t[0][0];
        };
        Utils.getRandomInt = function getRandomInt(t, e) {
          var r = Math.random() * (e - t + 1) + t;
          return Math.floor(r);
        };
        Utils.remove = function remove(r, n) {
          var t = r.indexOf(n);
          t >= 0 && r.splice(t, 1);
        };
        Utils.shuffleHC = function shuffleHC(r) {
          for (var n, t, e = r.length; e;) t = Math.floor(Math.random() * e--), n = r[e], r[e] = r[t], r[t] = n;
          return r;
        }

        /**
        * 从数组中随机选择元素
        */;
        Utils.getRandomElement = function getRandomElement(array) {
          return array[Math.floor(Math.random() * array.length)];
        }

        /**
         * 从数组中随机选择指定数量的元素
         */;
        Utils.getRandomElements = function getRandomElements(array, count) {
          var shuffled = [].concat(array).sort(function () {
            return 0.5 - Math.random();
          });
          return shuffled.slice(0, count);
        };
        _createClass(Utils, null, [{
          key: "onceNotRepeatNum",
          get: function get() {
            if (Utils._noRepeatNum == Number.MAX_VALUE) {
              Utils._noRepeatNum = 100;
            }
            return Utils._noRepeatNum++;
          }
        }]);
        return Utils;
      }());
      Utils.seed = (9301 * 1 + 49297) % 233280;
      Utils._noRepeatNum = 100;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/uv1.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Sprite, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "c9a41apC95Az7JKVJTGcbm5", "uv1", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var spritearrow = exports('default', (_dec = ccclass('Uv1'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(spritearrow, _Component);
        function spritearrow() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.time = 0;
          _this._material = void 0;
          return _this;
        }
        var _proto = spritearrow.prototype;
        _proto.start = function start() {
          this.time = 0;
          this._material = this.getComponent(Sprite).getSharedMaterial(0);
        };
        _proto.update = function update() {
          this.time += 0.003;
          // this._material.setProperty('time', this.time);
        };

        return spritearrow;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/WxAuthView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseDialog.ts', './PathCongfig.ts', './GameControl.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, BaseDialog, DialogPath, GC;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
    }, function (module) {
      BaseDialog = module.default;
    }, function (module) {
      DialogPath = module.DialogPath;
    }, function (module) {
      GC = module.GC;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "adeabNBWM5OMaoO5mkwiC+W", "WxAuthView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var WxAuthView = exports('default', (_dec = ccclass('WxAuthView'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseDialog) {
        _inheritsLoose(WxAuthView, _BaseDialog);
        function WxAuthView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseDialog.call.apply(_BaseDialog, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "sureBtn", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bg", _descriptor2, _assertThisInitialized(_this));
          _this._btn = null;
          return _this;
        }
        var _proto = WxAuthView.prototype;
        _proto.start = function start() {
          var _this2 = this;
          GC.action.panelOpenAnim(this.bg);
          this.scheduleOnce(function () {
            _this2.createAuthorizeBtn();
          }, 0.05);
        };
        _proto.createAuthorizeBtn = function createAuthorizeBtn() {
          var _this3 = this;
          if (GC.sdk.isWx) {
            this._btn = GC.sdk.createAuthorizeButton(this.sureBtn, function () {
              _this3.onCloseHandle();
              GC.dialog.openDialog(DialogPath.rankDlg);
            });
          }
        };
        _proto.onCloseHandle = function onCloseHandle() {
          this._btn && this._btn.hide();
          this.closeMySelf();
        };
        return WxAuthView;
      }(BaseDialog), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sureBtn", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bg", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      // import { DialogPath } from "../frame/config/PathCongfig";
      // import { GC } from "../frame/GameControl";
      // 
      // 
      // const { ccclass, property } = cc._decorator;
      // 
      // @ccclass
      // export default class WxAuthView extends BaseDialog {
      // 
      //     @property(cc.Node)
      //     sureBtn: cc.Node = null;
      //     @property(cc.Node)
      //     bg: cc.Node = null;
      // 
      //     private _btn: WechatMinigame.UserInfoButton = null;
      //     start() {
      //         GC.action.panelOpenAnim(this.bg);
      //         this.scheduleOnce(() => {
      //             this.createAuthorizeBtn();
      //         }, 0.05);
      //     }
      // 
      //     createAuthorizeBtn() {
      //         if (GC.sdk.isWx) {
      //             console.log("创建授权按钮");
      //             this._btn = GC.sdk.createAuthorizeButton(this.sureBtn, () => {
      //                 console.log("----->授权成功");
      //                 this.onCloseHandle();
      //                 GC.dialog.openDialog(DialogPath.rankDlg)
      //             });
      //         }
      //     }
      // 
      //     onCloseHandle() {
      //         this._btn && this._btn.hide();
      //         this.closeMySelf();
      //     }
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/WxSdk.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameControl.ts', './EnumConfig.ts', './MyLog.ts', './TimeUtils.ts', './BaseSdk.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, UITransform, screen, GC, EVideoOrShare, MyLog, timeUtils, BaseSdk;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      UITransform = module.UITransform;
      screen = module.screen;
    }, function (module) {
      GC = module.GC;
    }, function (module) {
      EVideoOrShare = module.EVideoOrShare;
    }, function (module) {
      MyLog = module.default;
    }, function (module) {
      timeUtils = module.timeUtils;
    }, function (module) {
      BaseSdk = module.default;
    }],
    execute: function () {
      var _class;
      cclegacy._RF.push({}, "17b16aF9tZG7olHpyR4mKyz", "WxSdk", undefined);
      var WxSdk = exports('default', /*#__PURE__*/function (_BaseSdk) {
        _inheritsLoose(WxSdk, _BaseSdk);
        function WxSdk() {
          return _BaseSdk.apply(this, arguments) || this;
        }
        WxSdk.init = function init() {
          var _wx;
          this.system_info = wx.getSystemInfoSync();
          this.option = wx.getLaunchOptionsSync();
          MyLog.green("current device system info  ", this.system_info);
          MyLog.green("current device option  ", this.option);
          (_wx = wx) == null || _wx.onMemoryWarning(function (res) {
            var _wx2;
            return (_wx2 = wx) == null ? void 0 : _wx2.triggerGC();
          });
          this.openShareMenu();

          // this.initAd();

          // this.updateManager();
        };

        WxSdk.updateManager = function updateManager() {
          if (wx.getUpdateManager) {
            var updateManager = wx.getUpdateManager();
            updateManager.onUpdateReady(function (res) {
              wx.showModal({
                title: "更新提示",
                content: "新版本已经准备好，是否重启小游戏？",
                success: function success(res) {
                  if (res.confirm) {
                    // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                    updateManager.applyUpdate();
                  }
                }
              });
            });
            updateManager.onUpdateFailed(function (err) {
              // 新的版本下载失败
              MyLog.log("版本下载失败原因", err);
            });
          }
        }

        /*** 登录 */;
        WxSdk.login = function login(callback) {
          MyLog.purple('开始登录1');
          wx.login({
            success: function success(login_data) {
              MyLog.purple('wxLogin-------', login_data);
              if (login_data.code) {
                callback && callback(login_data.code);
                // this.getSetting(login_data, callback)
              } else {
                MyLog.purple('登录失败！' + login_data.errMsg);
              }
            },
            fail: function fail(res) {
              MyLog.purple('开始登录失败', res);
              GC.dialog.comTextTips("worn_net_login");
            }
          });
        };
        WxSdk.getSetting = function getSetting(code, callback) {
          wx.getSetting({
            success: function success(res) {
              MyLog.purple('getSetting-------', res);
              if (res.authSetting['scope.userInfo']) {
                // 已经授权，可以直接调用 getUserInfo 获取头像昵称
                WxSdk.getUserInfo(code, callback);
              } else {
                // wx.authorize({ scope: "scope.userInfo" })
                WxSdk.loginSuc(null, code, callback);
                // WxSdk.createUserInfoButton(code, callback);
              }
            }
          });
        };

        WxSdk.openSetting = function openSetting(callback) {
          wx.openSetting({
            success: function success(res) {
              MyLog.log("success2::" + JSON.stringify(res));
              if (res.authSetting['scope.userInfo']) {
                callback && callback();
              }
            }
          });
        };
        WxSdk.getUserInfo = function getUserInfo(code, callback) {
          wx.getUserInfo({
            withCredentials: true,
            success: function success(res) {
              MyLog.purple('getUserInfo-------', res);
              WxSdk.loginSuc(res, code, callback);
            }
          });
        };
        WxSdk.getAuthorizeUserInfo = function getAuthorizeUserInfo(callBack) {
          wx.getSetting({
            success: function success(res) {
              MyLog.purple('getSetting-------', res);
              if (res.authSetting['scope.userInfo']) {
                callBack && callBack(true);
              } else {
                callBack && callBack(false);
              }
            }
          });
        };
        WxSdk.authorize = function authorize(sucCB) {
          MyLog.log(" 开始 authorize:");
          wx.authorize({
            scope: "scope.userInfo",
            success: function success(res) {
              MyLog.log("success::" + JSON.stringify(res));
              sucCB && sucCB();
            },
            fail: function fail(err) {
              MyLog.log(" authorize fail:" + JSON.stringify(err));
              if (err.errMsg === "authorize:fail auth deny") {
                WxSdk.showModal(function (res) {
                  if (res.confirm) {
                    WxSdk.openSetting(sucCB);
                  }
                }, "排行榜需获取用户信息，请您确定重新获取授权");
              }
            }
          });
        };
        WxSdk.createUserInfoButton = function createUserInfoButton(code, callback) {
          var _this = this;
          var width = 426 / 2;
          var height = 164 / 2;
          var button = wx.createUserInfoButton({
            withCredentials: true,
            type: 'image',
            text: '',
            image: 'https://g9-project.shinet.cn/fhjq/wx/comImages/startBtn.png',
            style: {
              left: this.system_info.screenWidth / 2 - width / 2,
              top: this.system_info.screenHeight * 0.6,
              width: width,
              height: height,
              lineHeight: 40,
              textAlign: 'center',
              fontSize: 16,
              borderRadius: 4,
              backgroundColor: null,
              borderColor: null,
              borderWidth: 0,
              color: null
            }
          });
          button.show();
          button.onTap(function (res) {
            MyLog.purple("点击登录 getUserInfo-------", res);
            if (res.errMsg.indexOf('getUserInfo:ok') >= 0) {
              button.hide();
              _this.loginSuc(res, code, callback);
            } else {
              MyLog.purple("点击登录 getUserInfo------- fail");
            }
          });
        };
        WxSdk.createAuthorizeButton = function createAuthorizeButton(node, callback) {
          var rect = node.getComponent(UITransform).getBoundingBoxToWorld();
          var mul = this.system_info.screenWidth / screen.windowSize.width;
          MyLog.log("==============>", screen.windowSize, rect, this.system_info.screenWidth, this.system_info.screenHeight);
          var button = wx.createUserInfoButton({
            withCredentials: false,
            type: 'text',
            text: '',
            image: '',
            style: {
              left: rect.xMin * mul,
              top: (screen.windowSize.height - rect.yMax) * mul,
              width: rect.width * mul,
              height: rect.height * mul,
              lineHeight: 40,
              textAlign: 'center',
              fontSize: 16,
              borderRadius: 4,
              backgroundColor: null,
              borderColor: null,
              borderWidth: 0,
              color: null
            }
          });
          button.show();
          button.onTap(function (res) {
            MyLog.log("点击登录 getUserInfo-------", res);
            if (res.errMsg.indexOf('getUserInfo:ok') >= 0) {
              // button.hide();
              callback && callback(res);
            } else {
              MyLog.log("点击登录 getUserInfo------- fail");
            }
          });
          return button;
        };
        WxSdk.createGameClubButton = function createGameClubButton(node) {
          var rect = node.getComponent(UITransform).getBoundingBoxToWorld();
          var mul = this.system_info.screenWidth / screen.windowSize.width;
          MyLog.green("==============>", screen.windowSize, rect, this.system_info.screenWidth, this.system_info.screenHeight);
          var button = wx.createGameClubButton({
            icon: "green",
            type: 'text',
            text: '',
            image: '',
            style: {
              left: rect.xMin * mul,
              top: (screen.windowSize.height - rect.yMax) * mul,
              width: rect.width * mul,
              height: rect.height * mul,
              lineHeight: 40,
              textAlign: 'center',
              fontSize: 16,
              borderRadius: 4,
              backgroundColor: null,
              borderColor: null,
              borderWidth: 0,
              color: null
            }
          });
          button.show();
          button.onTap(function (res) {
            MyLog.purple("点击 游戏圈按钮-------", res);
          });
          return button;
        };
        WxSdk.loginSuc = function loginSuc(res, code, callback) {
          callback && callback(code, res);
        }

        //震动
        ;

        WxSdk.vibrate = function vibrate() {
          //heavy、medium、light
          wx.vibrateShort();
        }

        //排行榜 开放数据域  数据上报
        ;

        WxSdk.setUserCloudStorage = function setUserCloudStorage() {
          var params = {
            KVDataList: [{
              key: "towerId",
              value: "0"
            }],
            complete: function complete(res) {
              MyLog.log("======>open data upData level complete : ", res);
            },
            fail: function fail(res) {
              MyLog.log("======>open data upData level fail: ", res);
            },
            success: function success(res) {
              MyLog.log("======>open data upData level sucess : ", res);
            }
          };
          MyLog.log("======>open data upData power : ", params);
          wx.setUserCloudStorage(params);
        };
        WxSdk.setOpenDataContextSize = function setOpenDataContextSize(w, h) {
          var canvas = this.openDataContext.canvas;
          canvas.width = w;
          canvas.height = h;
        };
        WxSdk.postMessage = function postMessage(openId, height) {
          MyLog.green("======> open data post : ", openId, height);
          this.openDataContext.postMessage({
            openId: openId,
            height: height
          });
        }

        /*** 分享 */;
        WxSdk.openShareMenu = function openShareMenu() {
          wx.showShareMenu({
            withShareTicket: true,
            menus: ['shareAppMessage', 'shareTimeline']
          });
          wx.onShareAppMessage(function () {
            var params = {
              title: GC.config.game.shareTitles[Math.floor(Math.random() * GC.config.game.shareTitles.length)],
              imageUrl: GC.config.game.shareImags[Math.floor(Math.random() * GC.config.game.shareImags.length)],
              query: "userId=" + GC.data.user.user_id + "&adType=" + EVideoOrShare.share_menu
            };
            return params;
          });
          wx.onShareTimeline(function () {
            var params = {
              title: GC.config.game.shareTitles[Math.floor(Math.random() * GC.config.game.shareTitles.length)],
              imageUrl: GC.config.game.shareImags[Math.floor(Math.random() * GC.config.game.shareImags.length)],
              query: "userId=" + GC.data.user.user_id + "&adType=" + EVideoOrShare.share_timeLine
            };
            return params;
          });
        }

        //分享
        ;

        WxSdk.share = function share(adType, callBack, query, channel, extra, isHostShare) {
          if (callBack === void 0) {
            callBack = function callBack() {};
          }
          if (query === void 0) {
            query = '';
          }
          if (isHostShare === void 0) {
            isHostShare = false;
          }
          this._adType = adType;
          this._isHostShare = isHostShare;
          this._shareCallBack = callBack;
          this.reportShareBehavior(2, 1, this._isHostShare ? 1 : 0, adType);
          var params = GC.config.game.getShareParams(adType, query);
          wx.shareAppMessage(params);
        };
        WxSdk.checkShareState = function checkShareState(startTime) {
          var subTime = timeUtils.getNow(false) - startTime;
          if (this._shareCallBack) {
            if (subTime >= 2) {
              this._shareCallBack(true);
              this._isHostShare && this.reloadRewardAd();
              this.reportShareBehavior(4, 1, this._isHostShare ? 1 : 0, this._adType);
            } else {
              this._shareCallBack(false);
              this.reportShareBehavior(5, 1, this._isHostShare ? 1 : 0, this._adType);
            }
          }
          // GC.data.level.info.startTimeReduceOutTime(subTime);
          this._shareCallBack = null;
        }

        //订阅消息
        ;

        WxSdk.requestSubscribeMessage = function requestSubscribeMessage(tmplId, callback) {
          wx.requestSubscribeMessage({
            //调起消息订阅提醒
            tmplIds: [tmplId],
            success: function success(res) {
              if (res[tmplId] === 'accept') {
                // MyLog.log("允许");
                callback && callback(true);
              }
              if (res[tmplId] === 'reject') {
                // MyLog.log("拒绝");
                callback && callback(false);
              }
              MyLog.log(res);
            },
            fail: function fail(err) {
              if (err.errCode == 20004) {
                // MyLog.log("关闭小程序主开关");
                GC.dialog.comTextTips("小程序主开关被关闭");
              } else {
                //订阅失败
                GC.dialog.comTextTips("订阅失败");
              }
            }
          });
        }

        /*** 广告 */;
        WxSdk.initAd = function initAd() {
          this.initBanner();
          this.reloadRewardAd();
        }

        // reward ad
        ;

        WxSdk.reloadRewardAd = function reloadRewardAd() {
          var _this2 = this;
          this._adHostData = {
            shareValue: 0,
            rewardValue: 1
          };
          if (this._rewardAd) {
            this._rewardAd.destroy();
            this._rewardAd = null;
          }
          this._rewardAd = wx.createRewardedVideoAd({
            adUnitId: GC.config.game.videoId,
            multiton: true
          });
          this._rewardAd.onError(function (err) {
            MyLog.log(err);
          });
          MyLog.log("adSdk " + GC.config.game.videoId);
          this._rewardAd.onClose(function (res) {
            MyLog.log('adSdk 激励视频 广告关闭 ' + GC.config.game.videoId);
            // 用户点击了【关闭广告】按钮
            // 小于 2.1.0 的基础库版本，res 是一个 undefined
            if (res && res.isEnded || res === undefined) {
              // 正常播放结束，可以下发游戏奖励
              _this2.reportShareBehavior(4, 0, 1, _this2._adType, _this2._adHostData.shareValue, _this2._adHostData.rewardValue);
              _this2._onAdSuccess && _this2._onAdSuccess(res);
            } else {
              _this2.reportShareBehavior(5, 0, 1, _this2._adType, _this2._adHostData.shareValue, _this2._adHostData.rewardValue);
              MyLog.log('播放中途退出，不下发游戏奖励');
            }
            // GC.data.level.info.startTimeReduceOutTime(timeUtils.getNow() - this._rewardAdStartTime);
            _this2.reloadRewardAd();
          });
          this._rewardAd.onLoad(function (res) {
            if (res) {
              MyLog.log("============ > reward onLoad : ", res);
              _this2._adHostData = res;
            }
          });
          this._rewardAd.load().then(function () {});
        };
        WxSdk.showAd = function showAd(onSuccess, adType) {
          this._adType = adType;
          var startTime = Date.parse(new Date().toString());
          if (this._adHostData && this._adHostData.shareValue) {
            MyLog.log('微信推荐分享，转入分享逻辑');
            this.reportShareBehavior(2, 1, 1, this._adType, this._adHostData.shareValue, this._adHostData.rewardValue);
            var endTime = Date.parse(new Date().toString());
            this.share(this._adType, onSuccess, "", null, null, true);
          } else {
            this._onAdSuccess = onSuccess;
            this.reportShareBehavior(2, 0, 1, this._adType, this._adHostData.shareValue, this._adHostData.rewardValue);
            this._rewardAd.show()["catch"](function (err) {
              MyLog.log('adSdk  激励视频 错误 ' + err);
            });
          }
        }

        /***
         * operation:  1 | 2 | 3 | 4 | 5 | 6; // 1-曝光 2-点击 3-关闭 4-操作成功 5-操作失败 // 6-分享拉起
         * currentShow:  0 | 1; // 0-广告 1-分享，当 operation 为 1-5 时必填
         * strategy: 0 | 1; // 0-业务 1-微信策略
         * sceneID:string; //当前点位的sceneID
         * shareValue: number; // 分享推荐值，必填，当strategy = 0时，填充0
         * rewardValue: number; // 激励广告推荐值，必填，当strategy = 0时，填充0
         * inviteUser: string; // 当 operation 为 6 时必填，填写分享拉起人（即分享者）的 openId
         */;
        WxSdk.reportShareBehavior = function reportShareBehavior(operation, currentShow, strategy, adType, shareValue, rewardValue) {
          if (shareValue === void 0) {
            shareValue = 0;
          }
          if (rewardValue === void 0) {
            rewardValue = 0;
          }
          if (this._rewardAd) {
            this._rewardAd.reportShareBehavior({
              operation: operation,
              currentShow: currentShow,
              strategy: strategy,
              adunit: GC.config.game.videoId,
              sceneID: adType,
              shareValue: shareValue,
              rewardValue: rewardValue,
              inviteUser: GC.data.user.user_id
            });
          }
        };
        WxSdk.reportAdEnterShow = function reportAdEnterShow(type) {
          this._adType = type;
          if (this._adHostData && this._adHostData.shareValue) {
            this.reportShareBehavior(1, 1, 1, this._adType, this._adHostData.shareValue, this._adHostData.rewardValue);
          } else {
            this.reportShareBehavior(1, 0, 1, this._adType, this._adHostData.shareValue, this._adHostData.rewardValue);
          }
        };
        WxSdk.reportShareEnterShow = function reportShareEnterShow(type) {
          this._adType = type;
          this.reportShareBehavior(1, 1, 0, type);
        }

        //banner
        ;

        WxSdk.initBanner = function initBanner() {
          var _this3 = this;
          this._bannerAd = wx.createBannerAd({
            adUnitId: GC.config.game.bannerId,
            style: {
              left: 0,
              width: this.system_info.screenWidth,
              top: this.system_info.screenHeight - 80,
              height: 80
            }
          });
          this._bannerAd.onError(function (err) {
            MyLog.log(err);
            if (_this3._bannerAd) {
              _this3._bannerAd.hide();
            }
          });
        };
        WxSdk.showBanner = function showBanner(height, reason) {
          if (height === void 0) {
            height = 50;
          }
          var startTime = Date.parse(new Date().toString());
          MyLog.log("adSdk  bannerPosId " + GC.config.game.bannerId);
          if (!this._bannerAd) {
            this.initBanner();
          }
          var designH = 1334 / this.system_info.pixelRatio;
          var offSetH = this.system_info.screenHeight - designH;
          offSetH = offSetH < 0 ? 0 : offSetH;
          height += offSetH;
          height = height > this._bannerAd.style.realHeight ? this._bannerAd.style.realHeight : height;
          this._bannerAd.style.height = height;
          this._bannerAd.style.top = this.system_info.screenHeight - height;
          var isErr = false;
          this._bannerAd.show()["catch"](function (err) {
            isErr = true;
            MyLog.log('adSdk banner 广告显示错误 ' + err);
          });
          if (!isErr) {
            var endTime = Date.parse(new Date().toString());
            MyLog.log('adSdk banner 广告显示');
          }
        };
        WxSdk.hidBanner = function hidBanner() {
          if (this._bannerAd) {
            this._bannerAd.hide();
          }
        }

        //insert
        ;

        WxSdk.showInsert = function showInsert(onSuccess, reason) {
          var startTime = Date.parse(new Date().toString());
          MyLog.log("adSdk showInsert posId " + GC.config.game.interstId);
          if (!this._bannerAd) {
            this._insertAd = wx.createInterstitialAd({
              adUnitId: GC.config.game.interstId
            });
            this._insertAd.onError(function (err) {
              MyLog.log(err);
            });
            this._insertAd.onClose(function (res) {
              var endTime = Date.parse(new Date().toString());
              MyLog.log('adSdk  onClose 插屏 广告关闭');
              onSuccess && onSuccess(res);
            });
          }
          var isError = false;
          this._insertAd.show()["catch"](function (err) {
            MyLog.error(err);
            isError = true;
          });
          if (!isError) {
            MyLog.log('adSdk insert 广告显示');
          }
        }

        // 图片预览
        ;

        WxSdk.previewImage = function previewImage() {
          for (var _len = arguments.length, urls = new Array(_len), _key = 0; _key < _len; _key++) {
            urls[_key] = arguments[_key];
          }
          wx.previewImage({
            urls: urls,
            fail: function fail(res) {
              MyLog.purple("previewImage fail : ", res);
            },
            success: function success(res) {
              MyLog.purple("previewImage success : ", res);
            }
          });
        }

        // 符纸文字
        ;

        WxSdk.copyString = function copyString(str) {
          MyLog.log("微信复制：" + str);
          wx.setClipboardData({
            data: str,
            success: function success(res) {
              MyLog.log("微信复制：成功");
              wx.getClipboardData({
                success: function success(res) {
                  MyLog.log(res.data); // data
                }
              });

              return true;
            },
            fail: function fail(err) {
              MyLog.log("失败" + err);
              return false;
            },
            complete: function complete(res) {
              MyLog.log(res);
            }
          });
          return true;
        };
        WxSdk.pay = function pay(vo, sucCallBack, failCallBack) {
          wx.requestMidasPayment({
            currencyType: 'CNY',
            mode: 'game',
            offerId: "1450046582",
            /** 在米大师侧申请的应用 id */
            platform: GC.sdk.system_info.platform,
            buyQuantity: vo.prizeDY,
            env: 0,
            //0: 米大师正式环境   1: 米大师沙箱环境
            zoneId: "1",
            outTradeNo: "xx",
            //唯一的订单号
            success: function success(result) {
              /** 接口调用成功的回调函数 */
              MyLog.purple("wx pay success : ", result);
              sucCallBack && sucCallBack(result);
            },
            fail: function fail(res) {
              /** 接口调用失败的回调函数 */
              MyLog.purple("wx pay fail : ", res);
              failCallBack && failCallBack();
            },
            complete: function complete(res) {
              /** 接口调用结束的回调函数（调用成功、失败都会执行） */
              MyLog.purple("wx pay complete : ", res);
            }
          });
        };
        WxSdk.quit = function quit() {
          wx.exitMiniProgram();
        };
        WxSdk.restart = function restart() {
          wx.restartMiniProgram({});
        };
        WxSdk.showModal = function showModal(callFunc, content, showCancel, title, sureTxt) {
          if (callFunc === void 0) {
            callFunc = null;
          }
          if (showCancel === void 0) {
            showCancel = false;
          }
          if (title === void 0) {
            title = '提示';
          }
          if (sureTxt === void 0) {
            sureTxt = '确定';
          }
          wx.showModal({
            title: title,
            content: content,
            showCancel: showCancel,
            confirmText: sureTxt,
            success: function success(res) {
              if (res.confirm) {
                MyLog.log('用户点击确定');
              } else if (res.cancel) {
                MyLog.log('用户点击取消');
              }
              callFunc && callFunc(res);
            }
          });
        };
        WxSdk.checkScene = function checkScene(cb) {
          if (!wx.checkScene) {
            cb && cb(false);
            return;
          }
          wx.checkScene({
            scene: "sidebar",
            success: function success(res) {
              MyLog.log("check scene success: ", res.isExist);
              //成功回调逻辑
              cb && cb(true);
            },
            fail: function fail(res) {
              MyLog.log("check scene fail:", res);
              //失败回调逻辑
              cb && cb(false);
            }
          });
        };
        WxSdk.navigateToScene = function navigateToScene(cb) {
          if (!wx.navigateToScene) {
            GC.dialog.comTipDlg("跳转失败");
            cb && cb(false);
            return;
          }
          wx.navigateToScene({
            scene: "sidebar",
            success: function success(res) {
              MyLog.log("navigate to scene success");
              // 跳转成功回调逻辑
              cb && cb(true);
            },
            fail: function fail(res) {
              MyLog.log("navigate to scene fail: ", res);
              // 跳转失败回调逻辑
              GC.dialog.comTipDlg("跳转失败");
              cb && cb(false);
            }
          });
        };
        WxSdk.addShortcut = function addShortcut(cb) {
          wx.addShortcut({
            success: function success() {
              MyLog.log("添加桌面成功");
              cb && cb(true);
              // GC.data.game.mod.data.isAddShortcut = true;
              // self.setActive(self.addDeskTopBtn, false);
              // GC.sdk.clickStat(EStatType.add_desktop)
            },

            fail: function fail(err) {
              MyLog.log("添加桌面失败", err.errMsg);
              GC.dialog.comTextTips("添加桌面失败");
              cb && cb(false);
            }
          });
        }

        // 检测是否已经添加桌面
        ;

        WxSdk.checkShortcut = function checkShortcut(sucCB) {
          wx.checkShortcut({
            success: function success(res) {
              MyLog.log("checkShortcut suc-----", res.installed);
              sucCB && sucCB(res.installed);
            },
            fail: function fail(res) {
              MyLog.log("checkShortcut fail-----", res);
              sucCB && sucCB(false);
            }
          });
        };
        _createClass(WxSdk, null, [{
          key: "openDataContext",
          get: function get() {
            return wx.getOpenDataContext();
          }
        }]);
        return WxSdk;
      }(BaseSdk));
      _class = WxSdk;
      WxSdk._shareCallBack = null;
      WxSdk.subscribeMsssage = function (tmplId, callback) {
        wx.getSetting({
          withSubscriptions: true,
          //这里设置true，下面才会返回mainswitch；
          success: function success(res) {
            if (res.subscriptionsSetting.mainSwitch) {
              //用户打开了订阅消息总开关
              if (res.subscriptionsSetting.itemSettings != null) {
                // 用户同意总是保持是否推送消息的选择，这里表示以后不会
                var moIdState = res.subscriptionsSetting.itemSettings[tmplId]; // 用户同意的消息id模板
                if (moIdState === 'accept') {
                  //接受了消息推送
                  callback && callback(true);
                } else if (moIdState === 'reject') {
                  //拒绝消息推送
                  callback && callback(false);
                } else if (moIdState === 'ban') {
                  //已被后台封禁
                  // callback && callback(false);
                  GC.dialog.comTextTips("已被后台封禁");
                }
                MyLog.log(res);
              } else {
                // 当用户没有点击’总是保持以上选择，不再询问‘ 按钮。那每次执行到这里都会拉起授权弹窗
                _class.showModal(function (res) {
                  if (res.confirm) {
                    _class.requestSubscribeMessage(tmplId, callback);
                  }
                }, '请授权开通服务通知', true);
              }
            } else {
              // MyLog.log("订阅消息未开启");
              // GC.dialog.comTextTips("setting_subscript_lock");
              callback && callback(false);
            }
          },
          fail: function fail(error) {
            MyLog.log(error);
          }
        });
      };
      WxSdk._bannerAd = null;
      WxSdk._rewardAd = null;
      WxSdk._insertAd = null;
      WxSdk._onAdSuccess = null;
      WxSdk._adType = null;
      WxSdk._isHostShare = false;
      WxSdk._rewardAdStartTime = 0;
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
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