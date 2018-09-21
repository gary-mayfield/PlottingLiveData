// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"json.worker.js":[function(require,module,exports) {
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (e) {
  var t = {};function n(r) {
    if (t[r]) return t[r].exports;var i = t[r] = { i: r, l: !1, exports: {} };return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
  }n.m = e, n.c = t, n.d = function (e, t, r) {
    n.o(e, t) || Object.defineProperty(e, t, { configurable: !1, enumerable: !0, get: r });
  }, n.r = function (e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 5);
}([function (e, t, n) {
  "use strict";
  (function (e, r) {
    var i;n.d(t, "a", function () {
      return o;
    }), function () {
      var t = Object.create(null);t["WinJS/Core/_WinJS"] = {};var n = function n(e, _n2, r) {
        var i = {},
            o = !1,
            a = _n2.map(function (e) {
          return "exports" === e ? (o = !0, i) : t[e];
        }),
            s = r.apply({}, a);t[e] = o ? i : s;
      };n("WinJS/Core/_Global", [], function () {
        return "undefined" != typeof window ? window : "undefined" != typeof self ? self : void 0 !== e ? e : {};
      }), n("WinJS/Core/_BaseCoreUtils", ["WinJS/Core/_Global"], function (e) {
        var t = null;return { hasWinRT: !!e.Windows, markSupportedForProcessing: function markSupportedForProcessing(e) {
            return e.supportedForProcessing = !0, e;
          }, _setImmediate: function _setImmediate(n) {
            null === t && (t = e.setImmediate ? e.setImmediate.bind(e) : void 0 !== r && "function" == typeof r.nextTick ? r.nextTick.bind(r) : e.setTimeout.bind(e)), t(n);
          } };
      }), n("WinJS/Core/_WriteProfilerMark", ["WinJS/Core/_Global"], function (e) {
        return e.msWriteProfilerMark || function () {};
      }), n("WinJS/Core/_Base", ["WinJS/Core/_WinJS", "WinJS/Core/_Global", "WinJS/Core/_BaseCoreUtils", "WinJS/Core/_WriteProfilerMark"], function (e, t, n, r) {
        function i(e, t, n) {
          var r,
              i,
              o,
              a = Object.keys(t),
              s = Array.isArray(e);for (i = 0, o = a.length; i < o; i++) {
            var u = a[i],
                c = 95 !== u.charCodeAt(0),
                l = t[u];!l || "object" != (typeof l === "undefined" ? "undefined" : _typeof(l)) || void 0 === l.value && "function" != typeof l.get && "function" != typeof l.set ? c ? s ? e.forEach(function (e) {
              e[u] = l;
            }) : e[u] = l : (r = r || {})[u] = { value: l, enumerable: c, configurable: !0, writable: !0 } : (void 0 === l.enumerable && (l.enumerable = c), n && l.setName && "function" == typeof l.setName && l.setName(n + "." + u), (r = r || {})[u] = l);
          }r && (s ? e.forEach(function (e) {
            Object.defineProperties(e, r);
          }) : Object.defineProperties(e, r));
        }return function () {
          var n = e;function o(n, r) {
            var i = n || {};if (r) {
              var o = r.split(".");i === t && "WinJS" === o[0] && (i = e, o.splice(0, 1));for (var a = 0, s = o.length; a < s; a++) {
                var u = o[a];i[u] || Object.defineProperty(i, u, { value: {}, writable: !1, enumerable: !0, configurable: !0 }), i = i[u];
              }
            }return i;
          }function a(e, t, n) {
            var r = o(e, t);return n && i(r, n, t || "<ANONYMOUS>"), r;
          }n.Namespace || (n.Namespace = Object.create(Object.prototype));var s = { uninitialized: 1, working: 2, initialized: 3 };Object.defineProperties(n.Namespace, { defineWithParent: { value: a, writable: !0, enumerable: !0, configurable: !0 }, define: { value: function value(e, n) {
                return a(t, e, n);
              }, writable: !0, enumerable: !0, configurable: !0 }, _lazy: { value: function value(e) {
                var t,
                    n,
                    i = s.uninitialized;return { setName: function setName(e) {
                    t = e;
                  }, get: function get() {
                    switch (i) {case s.initialized:
                        return n;case s.uninitialized:
                        i = s.working;try {
                          r("WinJS.Namespace._lazy:" + t + ",StartTM"), n = e();
                        } finally {
                          r("WinJS.Namespace._lazy:" + t + ",StopTM"), i = s.uninitialized;
                        }return e = null, i = s.initialized, n;case s.working:
                        throw "Illegal: reentrancy on initialization";default:
                        throw "Illegal";}
                  }, set: function set(e) {
                    switch (i) {case s.working:
                        throw "Illegal: reentrancy on initialization";default:
                        i = s.initialized, n = e;}
                  }, enumerable: !0, configurable: !0 };
              }, writable: !0, enumerable: !0, configurable: !0 }, _moduleDefine: { value: function value(e, n, r) {
                var a = [e],
                    s = null;return n && (s = o(t, n), a.push(s)), i(a, r, n || "<ANONYMOUS>"), s;
              }, writable: !0, enumerable: !0, configurable: !0 } });
        }(), function () {
          function t(e, t, r) {
            return e = e || function () {}, n.markSupportedForProcessing(e), t && i(e.prototype, t), r && i(e, r), e;
          }e.Namespace.define("WinJS.Class", { define: t, derive: function derive(e, r, o, a) {
              if (e) {
                r = r || function () {};var s = e.prototype;return r.prototype = Object.create(s), n.markSupportedForProcessing(r), Object.defineProperty(r.prototype, "constructor", { value: r, writable: !0, configurable: !0, enumerable: !0 }), o && i(r.prototype, o), a && i(r, a), r;
              }return t(r, o, a);
            }, mix: function mix(e) {
              var t, n;for (e = e || function () {}, t = 1, n = arguments.length; t < n; t++) {
                i(e.prototype, arguments[t]);
              }return e;
            } });
        }(), { Namespace: e.Namespace, Class: e.Class };
      }), n("WinJS/Core/_ErrorFromName", ["WinJS/Core/_Base"], function (e) {
        var t = e.Class.derive(Error, function (e, t) {
          this.name = e, this.message = t || e;
        }, {}, { supportedForProcessing: !1 });return e.Namespace.define("WinJS", { ErrorFromName: t }), t;
      }), n("WinJS/Core/_Events", ["exports", "WinJS/Core/_Base"], function (e, t) {
        function n(e) {
          var t = "_on" + e + "state";return { get: function get() {
              var e = this[t];return e && e.userHandler;
            }, set: function set(n) {
              var r = this[t];n ? (r || (r = { wrapper: function wrapper(e) {
                  return r.userHandler(e);
                }, userHandler: n }, Object.defineProperty(this, t, { value: r, enumerable: !1, writable: !0, configurable: !0 }), this.addEventListener(e, r.wrapper, !1)), r.userHandler = n) : r && (this.removeEventListener(e, r.wrapper, !1), this[t] = null);
            }, enumerable: !0 };
        }var r = t.Class.define(function (e, t, n) {
          this.detail = t, this.target = n, this.timeStamp = Date.now(), this.type = e;
        }, { bubbles: { value: !1, writable: !1 }, cancelable: { value: !1, writable: !1 }, currentTarget: { get: function get() {
              return this.target;
            } }, defaultPrevented: { get: function get() {
              return this._preventDefaultCalled;
            } }, trusted: { value: !1, writable: !1 }, eventPhase: { value: 0, writable: !1 }, target: null, timeStamp: null, type: null, preventDefault: function preventDefault() {
            this._preventDefaultCalled = !0;
          }, stopImmediatePropagation: function stopImmediatePropagation() {
            this._stopImmediatePropagationCalled = !0;
          }, stopPropagation: function stopPropagation() {} }, { supportedForProcessing: !1 }),
            i = { _listeners: null, addEventListener: function addEventListener(e, t, n) {
            n = n || !1, this._listeners = this._listeners || {};for (var r = this._listeners[e] = this._listeners[e] || [], i = 0, o = r.length; i < o; i++) {
              var a = r[i];if (a.useCapture === n && a.listener === t) return;
            }r.push({ listener: t, useCapture: n });
          }, dispatchEvent: function dispatchEvent(e, t) {
            var n = this._listeners && this._listeners[e];if (n) {
              for (var i = new r(e, t, this), o = 0, a = (n = n.slice(0, n.length)).length; o < a && !i._stopImmediatePropagationCalled; o++) {
                n[o].listener(i);
              }return i.defaultPrevented || !1;
            }return !1;
          }, removeEventListener: function removeEventListener(e, t, n) {
            n = n || !1;var r = this._listeners && this._listeners[e];if (r) for (var i = 0, o = r.length; i < o; i++) {
              var a = r[i];if (a.listener === t && a.useCapture === n) {
                r.splice(i, 1), 0 === r.length && delete this._listeners[e];break;
              }
            }
          } };t.Namespace._moduleDefine(e, "WinJS.Utilities", { _createEventProperty: n, createEventProperties: function createEventProperties() {
            for (var e = {}, t = 0, r = arguments.length; t < r; t++) {
              var i = arguments[t];e["on" + i] = n(i);
            }return e;
          }, eventMixin: i });
      }), n("WinJS/Core/_Trace", ["WinJS/Core/_Global"], function (e) {
        function t(e) {
          return e;
        }return { _traceAsyncOperationStarting: e.Debug && e.Debug.msTraceAsyncOperationStarting && e.Debug.msTraceAsyncOperationStarting.bind(e.Debug) || t, _traceAsyncOperationCompleted: e.Debug && e.Debug.msTraceAsyncOperationCompleted && e.Debug.msTraceAsyncOperationCompleted.bind(e.Debug) || t, _traceAsyncCallbackStarting: e.Debug && e.Debug.msTraceAsyncCallbackStarting && e.Debug.msTraceAsyncCallbackStarting.bind(e.Debug) || t, _traceAsyncCallbackCompleted: e.Debug && e.Debug.msTraceAsyncCallbackCompleted && e.Debug.msTraceAsyncCallbackCompleted.bind(e.Debug) || t };
      }), n("WinJS/Promise/_StateMachine", ["WinJS/Core/_Global", "WinJS/Core/_BaseCoreUtils", "WinJS/Core/_Base", "WinJS/Core/_ErrorFromName", "WinJS/Core/_Events", "WinJS/Core/_Trace"], function (e, t, n, r, i, o) {
        e.Debug && (e.Debug.setNonUserCodeExceptions = !0);var a = new (n.Class.mix(n.Class.define(null, {}, { supportedForProcessing: !1 }), i.eventMixin))();a._listeners = {};var s = "error",
            u = "Canceled",
            c = !1,
            l = { promise: 1, thenPromise: 2, errorPromise: 4, exceptionPromise: 8, completePromise: 16 };l.all = l.promise | l.thenPromise | l.errorPromise | l.exceptionPromise | l.completePromise;var f,
            h,
            p,
            d,
            m,
            g,
            v,
            y,
            b,
            _,
            C = 1;function S() {}f = { name: "created", enter: function enter(e) {
            e._setState(h);
          }, cancel: S, done: S, then: S, _completed: S, _error: S, _notify: S, _progress: S, _setCompleteValue: S, _setErrorValue: S }, h = { name: "working", enter: S, cancel: function cancel(e) {
            e._setState(m);
          }, done: P, then: U, _completed: A, _error: O, _notify: S, _progress: V, _setCompleteValue: R, _setErrorValue: F }, p = { name: "waiting", enter: function enter(e) {
            var t = e._value;if (t instanceof q && t._state !== _ && t._state !== y) j(t, { promise: e });else {
              var n = function n(r) {
                t._errorId ? e._chainedError(r, t) : (I(e, r, N, t, n), e._error(r));
              };n.handlesOnError = !0, t.then(e._completed.bind(e), n, e._progress.bind(e));
            }
          }, cancel: function cancel(e) {
            e._setState(d);
          }, done: P, then: U, _completed: A, _error: O, _notify: S, _progress: V, _setCompleteValue: R, _setErrorValue: F }, d = { name: "waiting_canceled", enter: function enter(e) {
            e._setState(g);var t = e._value;t.cancel && t.cancel();
          }, cancel: S, done: P, then: U, _completed: A, _error: O, _notify: S, _progress: V, _setCompleteValue: R, _setErrorValue: F }, m = { name: "canceled", enter: function enter(e) {
            e._setState(g), e._cancelAction();
          }, cancel: S, done: P, then: U, _completed: A, _error: O, _notify: S, _progress: V, _setCompleteValue: R, _setErrorValue: F }, g = { name: "canceling", enter: function enter(e) {
            var t = new Error(u);t.name = t.message, e._value = t, e._setState(b);
          }, cancel: S, done: S, then: S, _completed: S, _error: S, _notify: S, _progress: S, _setCompleteValue: S, _setErrorValue: S }, v = { name: "complete_notify", enter: function enter(e) {
            if (e.done = Y.prototype.done, e.then = Y.prototype.then, e._listeners) for (var t, n = [e]; n.length;) {
              (t = n.shift())._state._notify(t, n);
            }e._setState(y);
          }, cancel: S, done: null, then: null, _completed: S, _error: S, _notify: T, _progress: S, _setCompleteValue: S, _setErrorValue: S }, y = { name: "success", enter: function enter(e) {
            e.done = Y.prototype.done, e.then = Y.prototype.then, e._cleanupAction();
          }, cancel: S, done: null, then: null, _completed: S, _error: S, _notify: T, _progress: S, _setCompleteValue: S, _setErrorValue: S }, b = { name: "error_notify", enter: function enter(e) {
            if (e.done = K.prototype.done, e.then = K.prototype.then, e._listeners) for (var t, n = [e]; n.length;) {
              (t = n.shift())._state._notify(t, n);
            }e._setState(_);
          }, cancel: S, done: null, then: null, _completed: S, _error: S, _notify: M, _progress: S, _setCompleteValue: S, _setErrorValue: S }, _ = { name: "error", enter: function enter(e) {
            e.done = K.prototype.done, e.then = K.prototype.then, e._cleanupAction();
          }, cancel: S, done: null, then: null, _completed: S, _error: S, _notify: M, _progress: S, _setCompleteValue: S, _setErrorValue: S };var E = n.Class.define(null, { _listeners: null, _nextState: null, _state: null, _value: null, cancel: function cancel() {
            this._state.cancel(this), this._run();
          }, done: function done(e, t, n) {
            this._state.done(this, e, t, n);
          }, then: function e(t, n, r) {
            if (this.then === e) return this._state.then(this, t, n, r);this.then(t, n, r);
          }, _chainedError: function _chainedError(e, t) {
            var n = this._state._error(this, e, k, t);return this._run(), n;
          }, _completed: function _completed(e) {
            var t = this._state._completed(this, e);return this._run(), t;
          }, _error: function _error(e) {
            var t = this._state._error(this, e, w);return this._run(), t;
          }, _progress: function _progress(e) {
            this._state._progress(this, e);
          }, _setState: function _setState(e) {
            this._nextState = e;
          }, _setCompleteValue: function _setCompleteValue(e) {
            this._state._setCompleteValue(this, e), this._run();
          }, _setChainedErrorValue: function _setChainedErrorValue(e, t) {
            var n = this._state._setErrorValue(this, e, k, t);return this._run(), n;
          }, _setExceptionValue: function _setExceptionValue(e) {
            var t = this._state._setErrorValue(this, e, L);return this._run(), t;
          }, _run: function _run() {
            for (; this._nextState;) {
              this._state = this._nextState, this._nextState = null, this._state.enter(this);
            }
          } }, { supportedForProcessing: !1 });function A(e, t) {
          var n;n = t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" == typeof t.then ? p : v, e._value = t, e._setState(n);
        }function x(e, t, n, r, i, o) {
          return { exception: e, error: t, promise: n, handler: o, id: r, parent: i };
        }function N(e, t, n, r) {
          var i = n._isException,
              o = n._errorId;return x(i ? t : null, i ? null : t, e, o, n, r);
        }function k(e, t, n) {
          var r = n._isException,
              i = n._errorId;return D(e, i, r), x(r ? t : null, r ? null : t, e, i, n);
        }function w(e, t) {
          var n = ++C;return D(e, n), x(null, t, e, n);
        }function L(e, t) {
          var n = ++C;return D(e, n, !0), x(t, null, e, n);
        }function P(e, t, n, r) {
          j(e, { c: t, e: n, p: r, asyncOpID: o._traceAsyncOperationStarting("WinJS.Promise.done") });
        }function O(e, t, n, r) {
          e._value = t, I(e, t, n, r), e._setState(b);
        }function T(t, n) {
          var r,
              i,
              a = t._value,
              s = t._listeners;if (s) for (t._listeners = null, r = 0, i = Array.isArray(s) ? s.length : 1; r < i; r++) {
            var u = 1 === i ? s : s[r],
                c = u.c,
                l = u.promise;if (o._traceAsyncOperationCompleted(u.asyncOpID, e.Debug && e.Debug.MS_ASYNC_OP_STATUS_SUCCESS), l) {
              o._traceAsyncCallbackStarting(u.asyncOpID);try {
                l._setCompleteValue(c ? c(a) : a);
              } catch (e) {
                l._setExceptionValue(e);
              } finally {
                o._traceAsyncCallbackCompleted();
              }l._state !== p && l._listeners && n.push(l);
            } else Y.prototype.done.call(t, c);
          }
        }function M(t, n) {
          var r,
              i,
              a = t._value,
              s = t._listeners;if (s) for (t._listeners = null, r = 0, i = Array.isArray(s) ? s.length : 1; r < i; r++) {
            var c = 1 === i ? s : s[r],
                l = c.e,
                f = c.promise,
                h = e.Debug && (a && a.name === u ? e.Debug.MS_ASYNC_OP_STATUS_CANCELED : e.Debug.MS_ASYNC_OP_STATUS_ERROR);if (o._traceAsyncOperationCompleted(c.asyncOpID, h), f) {
              var d = !1;try {
                l ? (o._traceAsyncCallbackStarting(c.asyncOpID), d = !0, l.handlesOnError || I(f, a, N, t, l), f._setCompleteValue(l(a))) : f._setChainedErrorValue(a, t);
              } catch (e) {
                f._setExceptionValue(e);
              } finally {
                d && o._traceAsyncCallbackCompleted();
              }f._state !== p && f._listeners && n.push(f);
            } else K.prototype.done.call(t, null, l);
          }
        }function I(e, t, n, r, i) {
          if (a._listeners[s]) {
            if (t instanceof Error && t.message === u) return;a.dispatchEvent(s, n(e, t, r, i));
          }
        }function V(e, t) {
          var n,
              r,
              i = e._listeners;if (i) for (n = 0, r = Array.isArray(i) ? i.length : 1; n < r; n++) {
            var o = 1 === r ? i : i[n],
                a = o.p;if (a) try {
              a(t);
            } catch (e) {}o.c || o.e || !o.promise || o.promise._progress(t);
          }
        }function j(e, t) {
          var n = e._listeners;n ? (n = Array.isArray(n) ? n : [n]).push(t) : n = t, e._listeners = n;
        }function D(e, t, n) {
          e._isException = n || !1, e._errorId = t;
        }function F(e, t, n, r) {
          e._value = t, I(e, t, n, r), e._setState(_);
        }function R(e, t) {
          var n;n = t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" == typeof t.then ? p : y, e._value = t, e._setState(n);
        }function U(e, t, n, r) {
          var i = new q(e);return j(e, { promise: i, c: t, e: n, p: r, asyncOpID: o._traceAsyncOperationStarting("WinJS.Promise.then") }), i;
        }var W,
            q = n.Class.derive(E, function (e) {
          c && (!0 === c || c & l.thenPromise) && (this._stack = $._getStack()), this._creator = e, this._setState(f), this._run();
        }, { _creator: null, _cancelAction: function _cancelAction() {
            this._creator && this._creator.cancel();
          }, _cleanupAction: function _cleanupAction() {
            this._creator = null;
          } }, { supportedForProcessing: !1 }),
            K = n.Class.define(function (e) {
          c && (!0 === c || c & l.errorPromise) && (this._stack = $._getStack()), this._value = e, I(this, e, w);
        }, { cancel: function cancel() {}, done: function done(e, t) {
            var n = this._value;if (t) try {
              t.handlesOnError || I(null, n, N, this, t);var r = t(n);return void (r && "object" == (typeof r === "undefined" ? "undefined" : _typeof(r)) && "function" == typeof r.done && r.done());
            } catch (e) {
              n = e;
            }n instanceof Error && n.message === u || $._doneHandler(n);
          }, then: function then(e, t) {
            if (!t) return this;var n,
                r = this._value;try {
              t.handlesOnError || I(null, r, N, this, t), n = new Y(t(r));
            } catch (e) {
              n = e === r ? this : new B(e);
            }return n;
          } }, { supportedForProcessing: !1 }),
            B = n.Class.derive(K, function (e) {
          c && (!0 === c || c & l.exceptionPromise) && (this._stack = $._getStack()), this._value = e, I(this, e, L);
        }, {}, { supportedForProcessing: !1 }),
            Y = n.Class.define(function (e) {
          if (c && (!0 === c || c & l.completePromise) && (this._stack = $._getStack()), e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" == typeof e.then) {
            var t = new q(null);return t._setCompleteValue(e), t;
          }this._value = e;
        }, { cancel: function cancel() {}, done: function done(e) {
            if (e) try {
              var t = e(this._value);t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" == typeof t.done && t.done();
            } catch (e) {
              $._doneHandler(e);
            }
          }, then: function then(e) {
            try {
              var t = e ? e(this._value) : this._value;return t === this._value ? this : new Y(t);
            } catch (e) {
              return new B(e);
            }
          } }, { supportedForProcessing: !1 });var $ = n.Class.derive(E, function (e, t) {
          c && (!0 === c || c & l.promise) && (this._stack = $._getStack()), this._oncancel = t, this._setState(f), this._run();try {
            e(this._completed.bind(this), this._error.bind(this), this._progress.bind(this));
          } catch (e) {
            this._setExceptionValue(e);
          }
        }, { _oncancel: null, _cancelAction: function _cancelAction() {
            try {
              if (!this._oncancel) throw new Error("Promise did not implement oncancel");this._oncancel();
            } catch (e) {
              e.message, e.stack;a.dispatchEvent("error", e);
            }
          }, _cleanupAction: function _cleanupAction() {
            this._oncancel = null;
          } }, { addEventListener: function addEventListener(e, t, n) {
            a.addEventListener(e, t, n);
          }, any: function any(e) {
            return new $(function (t, n) {
              var r = Object.keys(e);0 === r.length && t();var i = 0;r.forEach(function (o) {
                $.as(e[o]).then(function () {
                  t({ key: o, value: e[o] });
                }, function (a) {
                  a instanceof Error && a.name === u ? ++i === r.length && t($.cancel) : n({ key: o, value: e[o] });
                });
              });
            }, function () {
              Object.keys(e).forEach(function (t) {
                var n = $.as(e[t]);"function" == typeof n.cancel && n.cancel();
              });
            });
          }, as: function as(e) {
            return e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" == typeof e.then ? e : new Y(e);
          }, cancel: { get: function get() {
              return W = W || new K(new r(u));
            } }, dispatchEvent: function dispatchEvent(e, t) {
            return a.dispatchEvent(e, t);
          }, is: function is(e) {
            return e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" == typeof e.then;
          }, join: function join(e) {
            return new $(function (t, n, r) {
              var i = Object.keys(e),
                  o = Array.isArray(e) ? [] : {},
                  a = Array.isArray(e) ? [] : {},
                  s = 0,
                  c = i.length,
                  l = function l(e) {
                if (0 == --c) {
                  var s = Object.keys(o).length;if (0 === s) t(a);else {
                    var l = 0;i.forEach(function (e) {
                      var t = o[e];t instanceof Error && t.name === u && l++;
                    }), l === s ? t($.cancel) : n(o);
                  }
                } else r({ Key: e, Done: !0 });
              };i.forEach(function (t) {
                var n = e[t];void 0 === n ? s++ : $.then(n, function (e) {
                  a[t] = e, l(t);
                }, function (e) {
                  o[t] = e, l(t);
                });
              }), 0 !== (c -= s) || t(a);
            }, function () {
              Object.keys(e).forEach(function (t) {
                var n = $.as(e[t]);"function" == typeof n.cancel && n.cancel();
              });
            });
          }, removeEventListener: function removeEventListener(e, t, n) {
            a.removeEventListener(e, t, n);
          }, supportedForProcessing: !1, then: function then(e, t, n, r) {
            return $.as(e).then(t, n, r);
          }, thenEach: function thenEach(e, t, n, r) {
            var i = Array.isArray(e) ? [] : {};return Object.keys(e).forEach(function (o) {
              i[o] = $.as(e[o]).then(t, n, r);
            }), $.join(i);
          }, timeout: function timeout(n, r) {
            var i,
                o,
                a = (i = n, new $(function (n) {
              i ? o = e.setTimeout(n, i) : t._setImmediate(n);
            }, function () {
              o && e.clearTimeout(o);
            }));return r ? function (e, t) {
              var n = function n() {
                e.cancel();
              };return e.then(function () {
                t.cancel();
              }), t.then(n, n), t;
            }(a, r) : a;
          }, wrap: function wrap(e) {
            return new Y(e);
          }, wrapError: function wrapError(e) {
            return new K(e);
          }, _veryExpensiveTagWithStack: { get: function get() {
              return c;
            }, set: function set(e) {
              c = e;
            } }, _veryExpensiveTagWithStack_tag: l, _getStack: function _getStack() {
            if (e.Debug && e.Debug.debuggerEnabled) try {
              throw new Error();
            } catch (e) {
              return e.stack;
            }
          }, _cancelBlocker: function _cancelBlocker(e, t) {
            if (!$.is(e)) return $.wrap(e);var n,
                r,
                i = new $(function (e, t) {
              n = e, r = t;
            }, function () {
              n = null, r = null, t && t();
            });return e.then(function (e) {
              n && n(e);
            }, function (e) {
              r && r(e);
            }), i;
          } });return Object.defineProperties($, i.createEventProperties(s)), $._doneHandler = function (e) {
          t._setImmediate(function () {
            throw e;
          });
        }, { PromiseStateMachine: E, Promise: $, state_created: f };
      }), n("WinJS/Promise", ["WinJS/Core/_Base", "WinJS/Promise/_StateMachine"], function (e, t) {
        return e.Namespace.define("WinJS", { Promise: t.Promise }), t.Promise;
      }), (i = t["WinJS/Core/_WinJS"]).TPromise = i.Promise, i.PPromise = i.Promise;
    }();i.Promise;var o = i.TPromise;i.PPromise;
  }).call(this, n(4), n(3));
}, function (e, t, n) {
  "use strict";
  (function (e, r) {
    n.d(t, "c", function () {
      return d;
    }), n.d(t, "b", function () {
      return m;
    }), n.d(t, "a", function () {
      return g;
    });var i,
        o = !1,
        a = !1,
        s = !1,
        u = !1,
        c = !1;if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" == typeof e.nextTick && "string" == typeof e.platform) {
      o = "win32" === e.platform, a = "darwin" === e.platform, s = "linux" === e.platform, "en", "en";var l = e.env.VSCODE_NLS_CONFIG;if (l) try {
        var f = JSON.parse(l),
            h = f.availableLanguages["*"];f.locale, h || "en", f._translationsConfigFile;
      } catch (e) {}u = !0;
    } else if ("object" == (typeof navigator === "undefined" ? "undefined" : _typeof(navigator))) {
      var p = navigator.userAgent;o = p.indexOf("Windows") >= 0, a = p.indexOf("Macintosh") >= 0, s = p.indexOf("Linux") >= 0, c = !0, navigator.language;
    }!function (e) {
      e[e.Web = 0] = "Web", e[e.Mac = 1] = "Mac", e[e.Linux = 2] = "Linux", e[e.Windows = 3] = "Windows";
    }(i || (i = {}));i.Web;u && (a ? i.Mac : o ? i.Windows : s && i.Linux);var d = o,
        m = c,
        g = "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) ? self : "object" == (typeof r === "undefined" ? "undefined" : _typeof(r)) ? r : {};
  }).call(this, n(3), n(4));
}, function (e, t, n) {
  "use strict";
  (function (e) {
    var n,
        r,
        i = (n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var n in t) {
        t.hasOwnProperty(n) && (e[n] = t[n]);
      }
    }, function (e, t) {
      function r() {
        this.constructor = e;
      }n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
    });if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e))) r = "win32" === e.platform;else if ("object" == (typeof navigator === "undefined" ? "undefined" : _typeof(navigator))) {
      var o = navigator.userAgent;r = o.indexOf("Windows") >= 0;
    }var a = /^\w[\w\d+.-]*$/,
        s = /^\//,
        u = /^\/\//;var c = "",
        l = "/",
        f = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,
        h = function () {
      function e(e, t, n, r, i) {
        "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? (this.scheme = e.scheme || c, this.authority = e.authority || c, this.path = e.path || c, this.query = e.query || c, this.fragment = e.fragment || c) : (this.scheme = e || c, this.authority = t || c, this.path = function (e, t) {
          switch (e) {case "https":case "http":case "file":
              t ? t[0] !== l && (t = l + t) : t = l;}return t;
        }(this.scheme, n || c), this.query = r || c, this.fragment = i || c, function (e) {
          if (e.scheme && !a.test(e.scheme)) throw new Error("[UriError]: Scheme contains illegal characters.");if (e.path) if (e.authority) {
            if (!s.test(e.path)) throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character');
          } else if (u.test(e.path)) throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")');
        }(this));
      }return e.isUri = function (t) {
        return t instanceof e || !!t && "string" == typeof t.authority && "string" == typeof t.fragment && "string" == typeof t.path && "string" == typeof t.query && "string" == typeof t.scheme;
      }, Object.defineProperty(e.prototype, "fsPath", { get: function get() {
          return y(this);
        }, enumerable: !0, configurable: !0 }), e.prototype.with = function (e) {
        if (!e) return this;var t = e.scheme,
            n = e.authority,
            r = e.path,
            i = e.query,
            o = e.fragment;return void 0 === t ? t = this.scheme : null === t && (t = c), void 0 === n ? n = this.authority : null === n && (n = c), void 0 === r ? r = this.path : null === r && (r = c), void 0 === i ? i = this.query : null === i && (i = c), void 0 === o ? o = this.fragment : null === o && (o = c), t === this.scheme && n === this.authority && r === this.path && i === this.query && o === this.fragment ? this : new d(t, n, r, i, o);
      }, e.parse = function (e) {
        var t = f.exec(e);return t ? new d(t[2] || c, decodeURIComponent(t[4] || c), decodeURIComponent(t[5] || c), decodeURIComponent(t[7] || c), decodeURIComponent(t[9] || c)) : new d(c, c, c, c, c);
      }, e.file = function (e) {
        var t = c;if (r && (e = e.replace(/\\/g, l)), e[0] === l && e[1] === l) {
          var n = e.indexOf(l, 2);-1 === n ? (t = e.substring(2), e = l) : (t = e.substring(2, n), e = e.substring(n) || l);
        }return new d("file", t, e, c, c);
      }, e.from = function (e) {
        return new d(e.scheme, e.authority, e.path, e.query, e.fragment);
      }, e.prototype.toString = function (e) {
        return void 0 === e && (e = !1), b(this, e);
      }, e.prototype.toJSON = function () {
        return this;
      }, e.revive = function (t) {
        if (t) {
          if (t instanceof e) return t;var n = new d(t);return n._fsPath = t.fsPath, n._formatted = t.external, n;
        }return t;
      }, e;
    }();t.a = h;var p,
        d = function (e) {
      function t() {
        var t = null !== e && e.apply(this, arguments) || this;return t._formatted = null, t._fsPath = null, t;
      }return i(t, e), Object.defineProperty(t.prototype, "fsPath", { get: function get() {
          return this._fsPath || (this._fsPath = y(this)), this._fsPath;
        }, enumerable: !0, configurable: !0 }), t.prototype.toString = function (e) {
        return void 0 === e && (e = !1), e ? b(this, !0) : (this._formatted || (this._formatted = b(this, !1)), this._formatted);
      }, t.prototype.toJSON = function () {
        var e = { $mid: 1 };return this._fsPath && (e.fsPath = this._fsPath), this._formatted && (e.external = this._formatted), this.path && (e.path = this.path), this.scheme && (e.scheme = this.scheme), this.authority && (e.authority = this.authority), this.query && (e.query = this.query), this.fragment && (e.fragment = this.fragment), e;
      }, t;
    }(h),
        m = ((p = {})[58] = "%3A", p[47] = "%2F", p[63] = "%3F", p[35] = "%23", p[91] = "%5B", p[93] = "%5D", p[64] = "%40", p[33] = "%21", p[36] = "%24", p[38] = "%26", p[39] = "%27", p[40] = "%28", p[41] = "%29", p[42] = "%2A", p[43] = "%2B", p[44] = "%2C", p[59] = "%3B", p[61] = "%3D", p[32] = "%20", p);function g(e, t) {
      for (var n = void 0, r = -1, i = 0; i < e.length; i++) {
        var o = e.charCodeAt(i);if (o >= 97 && o <= 122 || o >= 65 && o <= 90 || o >= 48 && o <= 57 || 45 === o || 46 === o || 95 === o || 126 === o || t && 47 === o) -1 !== r && (n += encodeURIComponent(e.substring(r, i)), r = -1), void 0 !== n && (n += e.charAt(i));else {
          void 0 === n && (n = e.substr(0, i));var a = m[o];void 0 !== a ? (-1 !== r && (n += encodeURIComponent(e.substring(r, i)), r = -1), n += a) : -1 === r && (r = i);
        }
      }return -1 !== r && (n += encodeURIComponent(e.substring(r))), void 0 !== n ? n : e;
    }function v(e) {
      for (var t = void 0, n = 0; n < e.length; n++) {
        var r = e.charCodeAt(n);35 === r || 63 === r ? (void 0 === t && (t = e.substr(0, n)), t += m[r]) : void 0 !== t && (t += e[n]);
      }return void 0 !== t ? t : e;
    }function y(e) {
      var t;return t = e.authority && e.path.length > 1 && "file" === e.scheme ? "//" + e.authority + e.path : 47 === e.path.charCodeAt(0) && (e.path.charCodeAt(1) >= 65 && e.path.charCodeAt(1) <= 90 || e.path.charCodeAt(1) >= 97 && e.path.charCodeAt(1) <= 122) && 58 === e.path.charCodeAt(2) ? e.path[1].toLowerCase() + e.path.substr(2) : e.path, r && (t = t.replace(/\//g, "\\")), t;
    }function b(e, t) {
      var n = t ? v : g,
          r = "",
          i = e.scheme,
          o = e.authority,
          a = e.path,
          s = e.query,
          u = e.fragment;if (i && (r += i, r += ":"), (o || "file" === i) && (r += l, r += l), o) {
        var c = o.indexOf("@");if (-1 !== c) {
          var f = o.substr(0, c);o = o.substr(c + 1), -1 === (c = f.indexOf(":")) ? r += n(f, !1) : (r += n(f.substr(0, c), !1), r += ":", r += n(f.substr(c + 1), !1)), r += "@";
        }-1 === (c = (o = o.toLowerCase()).indexOf(":")) ? r += n(o, !1) : (r += n(o.substr(0, c), !1), r += o.substr(c));
      }if (a) {
        if (a.length >= 3 && 47 === a.charCodeAt(0) && 58 === a.charCodeAt(2)) (h = a.charCodeAt(1)) >= 65 && h <= 90 && (a = "/" + String.fromCharCode(h + 32) + ":" + a.substr(3));else if (a.length >= 2 && 58 === a.charCodeAt(1)) {
          var h;(h = a.charCodeAt(0)) >= 65 && h <= 90 && (a = String.fromCharCode(h + 32) + ":" + a.substr(2));
        }r += n(a, !0);
      }return s && (r += "?", r += n(s, !1)), u && (r += "#", r += n(u, !1)), r;
    }
  }).call(this, n(3));
}, function (e, t) {
  var n,
      r,
      i = e.exports = {};function o() {
    throw new Error("setTimeout has not been defined");
  }function a() {
    throw new Error("clearTimeout has not been defined");
  }function s(e) {
    if (n === setTimeout) return setTimeout(e, 0);if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);try {
      return n(e, 0);
    } catch (t) {
      try {
        return n.call(null, e, 0);
      } catch (t) {
        return n.call(this, e, 0);
      }
    }
  }!function () {
    try {
      n = "function" == typeof setTimeout ? setTimeout : o;
    } catch (e) {
      n = o;
    }try {
      r = "function" == typeof clearTimeout ? clearTimeout : a;
    } catch (e) {
      r = a;
    }
  }();var u,
      c = [],
      l = !1,
      f = -1;function h() {
    l && u && (l = !1, u.length ? c = u.concat(c) : f = -1, c.length && p());
  }function p() {
    if (!l) {
      var e = s(h);l = !0;for (var t = c.length; t;) {
        for (u = c, c = []; ++f < t;) {
          u && u[f].run();
        }f = -1, t = c.length;
      }u = null, l = !1, function (e) {
        if (r === clearTimeout) return clearTimeout(e);if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);try {
          r(e);
        } catch (t) {
          try {
            return r.call(null, e);
          } catch (t) {
            return r.call(this, e);
          }
        }
      }(e);
    }
  }function d(e, t) {
    this.fun = e, this.array = t;
  }function m() {}i.nextTick = function (e) {
    var t = new Array(arguments.length - 1);if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) {
      t[n - 1] = arguments[n];
    }c.push(new d(e, t)), 1 !== c.length || l || s(p);
  }, d.prototype.run = function () {
    this.fun.apply(null, this.array);
  }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = m, i.addListener = m, i.once = m, i.off = m, i.removeListener = m, i.removeAllListeners = m, i.emit = m, i.prependListener = m, i.prependOnceListener = m, i.listeners = function (e) {
    return [];
  }, i.binding = function (e) {
    throw new Error("process.binding is not supported");
  }, i.cwd = function () {
    return "/";
  }, i.chdir = function (e) {
    throw new Error("process.chdir is not supported");
  }, i.umask = function () {
    return 0;
  };
}, function (e, t) {
  var n;n = function () {
    return this;
  }();try {
    n = n || Function("return this")() || (0, eval)("this");
  } catch (e) {
    "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (n = window);
  }e.exports = n;
}, function (e, t, n) {
  "use strict";
  n.r(t);var r,
      i,
      o = n(1),
      a = (r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {
    e.__proto__ = t;
  } || function (e, t) {
    for (var n in t) {
      t.hasOwnProperty(n) && (e[n] = t[n]);
    }
  }, function (e, t) {
    function n() {
      this.constructor = e;
    }r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
  }),
      s = /^\w[\w\d+.-]*$/,
      u = /^\//,
      c = /^\/\//;var l = "",
      f = "/",
      h = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,
      p = function () {
    function e(e, t, n, r, i) {
      "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? (this.scheme = e.scheme || l, this.authority = e.authority || l, this.path = e.path || l, this.query = e.query || l, this.fragment = e.fragment || l) : (this.scheme = e || l, this.authority = t || l, this.path = function (e, t) {
        switch (e) {case "https":case "http":case "file":
            t ? t[0] !== f && (t = f + t) : t = f;}return t;
      }(this.scheme, n || l), this.query = r || l, this.fragment = i || l, function (e) {
        if (e.scheme && !s.test(e.scheme)) throw new Error("[UriError]: Scheme contains illegal characters.");if (e.path) if (e.authority) {
          if (!u.test(e.path)) throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character');
        } else if (c.test(e.path)) throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")');
      }(this));
    }return e.isUri = function (t) {
      return t instanceof e || !!t && "string" == typeof t.authority && "string" == typeof t.fragment && "string" == typeof t.path && "string" == typeof t.query && "string" == typeof t.scheme;
    }, Object.defineProperty(e.prototype, "fsPath", { get: function get() {
        return b(this);
      }, enumerable: !0, configurable: !0 }), e.prototype.with = function (e) {
      if (!e) return this;var t = e.scheme,
          n = e.authority,
          r = e.path,
          i = e.query,
          o = e.fragment;return void 0 === t ? t = this.scheme : null === t && (t = l), void 0 === n ? n = this.authority : null === n && (n = l), void 0 === r ? r = this.path : null === r && (r = l), void 0 === i ? i = this.query : null === i && (i = l), void 0 === o ? o = this.fragment : null === o && (o = l), t === this.scheme && n === this.authority && r === this.path && i === this.query && o === this.fragment ? this : new m(t, n, r, i, o);
    }, e.parse = function (e) {
      var t = h.exec(e);return t ? new m(t[2] || l, decodeURIComponent(t[4] || l), decodeURIComponent(t[5] || l), decodeURIComponent(t[7] || l), decodeURIComponent(t[9] || l)) : new m(l, l, l, l, l);
    }, e.file = function (e) {
      var t = l;if (o.c && (e = e.replace(/\\/g, f)), e[0] === f && e[1] === f) {
        var n = e.indexOf(f, 2);-1 === n ? (t = e.substring(2), e = f) : (t = e.substring(2, n), e = e.substring(n) || f);
      }return new m("file", t, e, l, l);
    }, e.from = function (e) {
      return new m(e.scheme, e.authority, e.path, e.query, e.fragment);
    }, e.prototype.toString = function (e) {
      return void 0 === e && (e = !1), _(this, e);
    }, e.prototype.toJSON = function () {
      return this;
    }, e.revive = function (t) {
      if (t) {
        if (t instanceof e) return t;var n = new m(t);return n._fsPath = t.fsPath, n._formatted = t.external, n;
      }return t;
    }, e;
  }(),
      d = p,
      m = function (e) {
    function t() {
      var t = null !== e && e.apply(this, arguments) || this;return t._formatted = null, t._fsPath = null, t;
    }return a(t, e), Object.defineProperty(t.prototype, "fsPath", { get: function get() {
        return this._fsPath || (this._fsPath = b(this)), this._fsPath;
      }, enumerable: !0, configurable: !0 }), t.prototype.toString = function (e) {
      return void 0 === e && (e = !1), e ? _(this, !0) : (this._formatted || (this._formatted = _(this, !1)), this._formatted);
    }, t.prototype.toJSON = function () {
      var e = { $mid: 1 };return this._fsPath && (e.fsPath = this._fsPath), this._formatted && (e.external = this._formatted), this.path && (e.path = this.path), this.scheme && (e.scheme = this.scheme), this.authority && (e.authority = this.authority), this.query && (e.query = this.query), this.fragment && (e.fragment = this.fragment), e;
    }, t;
  }(p),
      g = ((i = {})[58] = "%3A", i[47] = "%2F", i[63] = "%3F", i[35] = "%23", i[91] = "%5B", i[93] = "%5D", i[64] = "%40", i[33] = "%21", i[36] = "%24", i[38] = "%26", i[39] = "%27", i[40] = "%28", i[41] = "%29", i[42] = "%2A", i[43] = "%2B", i[44] = "%2C", i[59] = "%3B", i[61] = "%3D", i[32] = "%20", i);function v(e, t) {
    for (var n = void 0, r = -1, i = 0; i < e.length; i++) {
      var o = e.charCodeAt(i);if (o >= 97 && o <= 122 || o >= 65 && o <= 90 || o >= 48 && o <= 57 || 45 === o || 46 === o || 95 === o || 126 === o || t && 47 === o) -1 !== r && (n += encodeURIComponent(e.substring(r, i)), r = -1), void 0 !== n && (n += e.charAt(i));else {
        void 0 === n && (n = e.substr(0, i));var a = g[o];void 0 !== a ? (-1 !== r && (n += encodeURIComponent(e.substring(r, i)), r = -1), n += a) : -1 === r && (r = i);
      }
    }return -1 !== r && (n += encodeURIComponent(e.substring(r))), void 0 !== n ? n : e;
  }function y(e) {
    for (var t = void 0, n = 0; n < e.length; n++) {
      var r = e.charCodeAt(n);35 === r || 63 === r ? (void 0 === t && (t = e.substr(0, n)), t += g[r]) : void 0 !== t && (t += e[n]);
    }return void 0 !== t ? t : e;
  }function b(e) {
    var t;return t = e.authority && e.path.length > 1 && "file" === e.scheme ? "//" + e.authority + e.path : 47 === e.path.charCodeAt(0) && (e.path.charCodeAt(1) >= 65 && e.path.charCodeAt(1) <= 90 || e.path.charCodeAt(1) >= 97 && e.path.charCodeAt(1) <= 122) && 58 === e.path.charCodeAt(2) ? e.path[1].toLowerCase() + e.path.substr(2) : e.path, o.c && (t = t.replace(/\//g, "\\")), t;
  }function _(e, t) {
    var n = t ? y : v,
        r = "",
        i = e.scheme,
        o = e.authority,
        a = e.path,
        s = e.query,
        u = e.fragment;if (i && (r += i, r += ":"), (o || "file" === i) && (r += f, r += f), o) {
      var c = o.indexOf("@");if (-1 !== c) {
        var l = o.substr(0, c);o = o.substr(c + 1), -1 === (c = l.indexOf(":")) ? r += n(l, !1) : (r += n(l.substr(0, c), !1), r += ":", r += n(l.substr(c + 1), !1)), r += "@";
      }-1 === (c = (o = o.toLowerCase()).indexOf(":")) ? r += n(o, !1) : (r += n(o.substr(0, c), !1), r += o.substr(c));
    }if (a) {
      if (a.length >= 3 && 47 === a.charCodeAt(0) && 58 === a.charCodeAt(2)) (h = a.charCodeAt(1)) >= 65 && h <= 90 && (a = "/" + String.fromCharCode(h + 32) + ":" + a.substr(3));else if (a.length >= 2 && 58 === a.charCodeAt(1)) {
        var h;(h = a.charCodeAt(0)) >= 65 && h <= 90 && (a = String.fromCharCode(h + 32) + ":" + a.substr(2));
      }r += n(a, !0);
    }return s && (r += "?", r += n(s, !1)), u && (r += "#", r += t ? u : v(u, !1)), r;
  }var C = n(0),
      S = function () {
    function e(e, t) {
      this.lineNumber = e, this.column = t;
    }return e.prototype.equals = function (t) {
      return e.equals(this, t);
    }, e.equals = function (e, t) {
      return !e && !t || !!e && !!t && e.lineNumber === t.lineNumber && e.column === t.column;
    }, e.prototype.isBefore = function (t) {
      return e.isBefore(this, t);
    }, e.isBefore = function (e, t) {
      return e.lineNumber < t.lineNumber || !(t.lineNumber < e.lineNumber) && e.column < t.column;
    }, e.prototype.isBeforeOrEqual = function (t) {
      return e.isBeforeOrEqual(this, t);
    }, e.isBeforeOrEqual = function (e, t) {
      return e.lineNumber < t.lineNumber || !(t.lineNumber < e.lineNumber) && e.column <= t.column;
    }, e.compare = function (e, t) {
      var n = 0 | e.lineNumber,
          r = 0 | t.lineNumber;return n === r ? (0 | e.column) - (0 | t.column) : n - r;
    }, e.prototype.clone = function () {
      return new e(this.lineNumber, this.column);
    }, e.prototype.toString = function () {
      return "(" + this.lineNumber + "," + this.column + ")";
    }, e.lift = function (t) {
      return new e(t.lineNumber, t.column);
    }, e.isIPosition = function (e) {
      return e && "number" == typeof e.lineNumber && "number" == typeof e.column;
    }, e;
  }(),
      E = function () {
    function e(e, t, n, r) {
      e > n || e === n && t > r ? (this.startLineNumber = n, this.startColumn = r, this.endLineNumber = e, this.endColumn = t) : (this.startLineNumber = e, this.startColumn = t, this.endLineNumber = n, this.endColumn = r);
    }return e.prototype.isEmpty = function () {
      return e.isEmpty(this);
    }, e.isEmpty = function (e) {
      return e.startLineNumber === e.endLineNumber && e.startColumn === e.endColumn;
    }, e.prototype.containsPosition = function (t) {
      return e.containsPosition(this, t);
    }, e.containsPosition = function (e, t) {
      return !(t.lineNumber < e.startLineNumber || t.lineNumber > e.endLineNumber) && !(t.lineNumber === e.startLineNumber && t.column < e.startColumn) && !(t.lineNumber === e.endLineNumber && t.column > e.endColumn);
    }, e.prototype.containsRange = function (t) {
      return e.containsRange(this, t);
    }, e.containsRange = function (e, t) {
      return !(t.startLineNumber < e.startLineNumber || t.endLineNumber < e.startLineNumber) && !(t.startLineNumber > e.endLineNumber || t.endLineNumber > e.endLineNumber) && !(t.startLineNumber === e.startLineNumber && t.startColumn < e.startColumn) && !(t.endLineNumber === e.endLineNumber && t.endColumn > e.endColumn);
    }, e.prototype.plusRange = function (t) {
      return e.plusRange(this, t);
    }, e.plusRange = function (t, n) {
      var r, i, o, a;return n.startLineNumber < t.startLineNumber ? (r = n.startLineNumber, i = n.startColumn) : n.startLineNumber === t.startLineNumber ? (r = n.startLineNumber, i = Math.min(n.startColumn, t.startColumn)) : (r = t.startLineNumber, i = t.startColumn), n.endLineNumber > t.endLineNumber ? (o = n.endLineNumber, a = n.endColumn) : n.endLineNumber === t.endLineNumber ? (o = n.endLineNumber, a = Math.max(n.endColumn, t.endColumn)) : (o = t.endLineNumber, a = t.endColumn), new e(r, i, o, a);
    }, e.prototype.intersectRanges = function (t) {
      return e.intersectRanges(this, t);
    }, e.intersectRanges = function (t, n) {
      var r = t.startLineNumber,
          i = t.startColumn,
          o = t.endLineNumber,
          a = t.endColumn,
          s = n.startLineNumber,
          u = n.startColumn,
          c = n.endLineNumber,
          l = n.endColumn;return r < s ? (r = s, i = u) : r === s && (i = Math.max(i, u)), o > c ? (o = c, a = l) : o === c && (a = Math.min(a, l)), r > o ? null : r === o && i > a ? null : new e(r, i, o, a);
    }, e.prototype.equalsRange = function (t) {
      return e.equalsRange(this, t);
    }, e.equalsRange = function (e, t) {
      return !!e && !!t && e.startLineNumber === t.startLineNumber && e.startColumn === t.startColumn && e.endLineNumber === t.endLineNumber && e.endColumn === t.endColumn;
    }, e.prototype.getEndPosition = function () {
      return new S(this.endLineNumber, this.endColumn);
    }, e.prototype.getStartPosition = function () {
      return new S(this.startLineNumber, this.startColumn);
    }, e.prototype.toString = function () {
      return "[" + this.startLineNumber + "," + this.startColumn + " -> " + this.endLineNumber + "," + this.endColumn + "]";
    }, e.prototype.setEndPosition = function (t, n) {
      return new e(this.startLineNumber, this.startColumn, t, n);
    }, e.prototype.setStartPosition = function (t, n) {
      return new e(t, n, this.endLineNumber, this.endColumn);
    }, e.prototype.collapseToStart = function () {
      return e.collapseToStart(this);
    }, e.collapseToStart = function (t) {
      return new e(t.startLineNumber, t.startColumn, t.startLineNumber, t.startColumn);
    }, e.fromPositions = function (t, n) {
      return void 0 === n && (n = t), new e(t.lineNumber, t.column, n.lineNumber, n.column);
    }, e.lift = function (t) {
      return t ? new e(t.startLineNumber, t.startColumn, t.endLineNumber, t.endColumn) : null;
    }, e.isIRange = function (e) {
      return e && "number" == typeof e.startLineNumber && "number" == typeof e.startColumn && "number" == typeof e.endLineNumber && "number" == typeof e.endColumn;
    }, e.areIntersectingOrTouching = function (e, t) {
      return !(e.endLineNumber < t.startLineNumber || e.endLineNumber === t.startLineNumber && e.endColumn < t.startColumn) && !(t.endLineNumber < e.startLineNumber || t.endLineNumber === e.startLineNumber && t.endColumn < e.startColumn);
    }, e.areIntersecting = function (e, t) {
      return !(e.endLineNumber < t.startLineNumber || e.endLineNumber === t.startLineNumber && e.endColumn <= t.startColumn) && !(t.endLineNumber < e.startLineNumber || t.endLineNumber === e.startLineNumber && t.endColumn <= e.startColumn);
    }, e.compareRangesUsingStarts = function (e, t) {
      var n = 0 | e.startLineNumber,
          r = 0 | t.startLineNumber;if (n === r) {
        var i = 0 | e.startColumn,
            o = 0 | t.startColumn;if (i === o) {
          var a = 0 | e.endLineNumber,
              s = 0 | t.endLineNumber;return a === s ? (0 | e.endColumn) - (0 | t.endColumn) : a - s;
        }return i - o;
      }return n - r;
    }, e.compareRangesUsingEnds = function (e, t) {
      return e.endLineNumber === t.endLineNumber ? e.endColumn === t.endColumn ? e.startLineNumber === t.startLineNumber ? e.startColumn - t.startColumn : e.startLineNumber - t.startLineNumber : e.endColumn - t.endColumn : e.endLineNumber - t.endLineNumber;
    }, e.spansMultipleLines = function (e) {
      return e.endLineNumber > e.startLineNumber;
    }, e;
  }(),
      A = function () {
    function e(e, t, n, r) {
      this.originalStart = e, this.originalLength = t, this.modifiedStart = n, this.modifiedLength = r;
    }return e.prototype.getOriginalEnd = function () {
      return this.originalStart + this.originalLength;
    }, e.prototype.getModifiedEnd = function () {
      return this.modifiedStart + this.modifiedLength;
    }, e;
  }();function x(e) {
    return { getLength: function getLength() {
        return e.length;
      }, getElementAtIndex: function getElementAtIndex(t) {
        return e.charCodeAt(t);
      } };
  }function N(e, t, n) {
    return new P(x(e), x(t)).ComputeDiff(n);
  }var k = function () {
    function e() {}return e.Assert = function (e, t) {
      if (!e) throw new Error(t);
    }, e;
  }(),
      w = function () {
    function e() {}return e.Copy = function (e, t, n, r, i) {
      for (var o = 0; o < i; o++) {
        n[r + o] = e[t + o];
      }
    }, e;
  }(),
      L = function () {
    function e() {
      this.m_changes = [], this.m_originalStart = Number.MAX_VALUE, this.m_modifiedStart = Number.MAX_VALUE, this.m_originalCount = 0, this.m_modifiedCount = 0;
    }return e.prototype.MarkNextChange = function () {
      (this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.m_changes.push(new A(this.m_originalStart, this.m_originalCount, this.m_modifiedStart, this.m_modifiedCount)), this.m_originalCount = 0, this.m_modifiedCount = 0, this.m_originalStart = Number.MAX_VALUE, this.m_modifiedStart = Number.MAX_VALUE;
    }, e.prototype.AddOriginalElement = function (e, t) {
      this.m_originalStart = Math.min(this.m_originalStart, e), this.m_modifiedStart = Math.min(this.m_modifiedStart, t), this.m_originalCount++;
    }, e.prototype.AddModifiedElement = function (e, t) {
      this.m_originalStart = Math.min(this.m_originalStart, e), this.m_modifiedStart = Math.min(this.m_modifiedStart, t), this.m_modifiedCount++;
    }, e.prototype.getChanges = function () {
      return (this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.MarkNextChange(), this.m_changes;
    }, e.prototype.getReverseChanges = function () {
      return (this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.MarkNextChange(), this.m_changes.reverse(), this.m_changes;
    }, e;
  }(),
      P = function () {
    function e(e, t, n) {
      void 0 === n && (n = null), this.OriginalSequence = e, this.ModifiedSequence = t, this.ContinueProcessingPredicate = n, this.m_forwardHistory = [], this.m_reverseHistory = [];
    }return e.prototype.ElementsAreEqual = function (e, t) {
      return this.OriginalSequence.getElementAtIndex(e) === this.ModifiedSequence.getElementAtIndex(t);
    }, e.prototype.OriginalElementsAreEqual = function (e, t) {
      return this.OriginalSequence.getElementAtIndex(e) === this.OriginalSequence.getElementAtIndex(t);
    }, e.prototype.ModifiedElementsAreEqual = function (e, t) {
      return this.ModifiedSequence.getElementAtIndex(e) === this.ModifiedSequence.getElementAtIndex(t);
    }, e.prototype.ComputeDiff = function (e) {
      return this._ComputeDiff(0, this.OriginalSequence.getLength() - 1, 0, this.ModifiedSequence.getLength() - 1, e);
    }, e.prototype._ComputeDiff = function (e, t, n, r, i) {
      var o = this.ComputeDiffRecursive(e, t, n, r, [!1]);return i ? this.ShiftChanges(o) : o;
    }, e.prototype.ComputeDiffRecursive = function (e, t, n, r, i) {
      for (i[0] = !1; e <= t && n <= r && this.ElementsAreEqual(e, n);) {
        e++, n++;
      }for (; t >= e && r >= n && this.ElementsAreEqual(t, r);) {
        t--, r--;
      }if (e > t || n > r) {
        var o = void 0;return n <= r ? (k.Assert(e === t + 1, "originalStart should only be one more than originalEnd"), o = [new A(e, 0, n, r - n + 1)]) : e <= t ? (k.Assert(n === r + 1, "modifiedStart should only be one more than modifiedEnd"), o = [new A(e, t - e + 1, n, 0)]) : (k.Assert(e === t + 1, "originalStart should only be one more than originalEnd"), k.Assert(n === r + 1, "modifiedStart should only be one more than modifiedEnd"), o = []), o;
      }var a = [0],
          s = [0],
          u = this.ComputeRecursionPoint(e, t, n, r, a, s, i),
          c = a[0],
          l = s[0];if (null !== u) return u;if (!i[0]) {
        var f = this.ComputeDiffRecursive(e, c, n, l, i),
            h = [];return h = i[0] ? [new A(c + 1, t - (c + 1) + 1, l + 1, r - (l + 1) + 1)] : this.ComputeDiffRecursive(c + 1, t, l + 1, r, i), this.ConcatenateChanges(f, h);
      }return [new A(e, t - e + 1, n, r - n + 1)];
    }, e.prototype.WALKTRACE = function (e, t, n, r, i, o, a, s, u, c, l, f, h, p, d, m, g, v) {
      var y,
          b,
          _ = null,
          C = new L(),
          S = t,
          E = n,
          x = h[0] - m[0] - r,
          N = Number.MIN_VALUE,
          k = this.m_forwardHistory.length - 1;do {
        (b = x + e) === S || b < E && u[b - 1] < u[b + 1] ? (p = (l = u[b + 1]) - x - r, l < N && C.MarkNextChange(), N = l, C.AddModifiedElement(l + 1, p), x = b + 1 - e) : (p = (l = u[b - 1] + 1) - x - r, l < N && C.MarkNextChange(), N = l - 1, C.AddOriginalElement(l, p + 1), x = b - 1 - e), k >= 0 && (e = (u = this.m_forwardHistory[k])[0], S = 1, E = u.length - 1);
      } while (--k >= -1);if (y = C.getReverseChanges(), v[0]) {
        var w = h[0] + 1,
            P = m[0] + 1;if (null !== y && y.length > 0) {
          var O = y[y.length - 1];w = Math.max(w, O.getOriginalEnd()), P = Math.max(P, O.getModifiedEnd());
        }_ = [new A(w, f - w + 1, P, d - P + 1)];
      } else {
        C = new L(), S = o, E = a, x = h[0] - m[0] - s, N = Number.MAX_VALUE, k = g ? this.m_reverseHistory.length - 1 : this.m_reverseHistory.length - 2;do {
          (b = x + i) === S || b < E && c[b - 1] >= c[b + 1] ? (p = (l = c[b + 1] - 1) - x - s, l > N && C.MarkNextChange(), N = l + 1, C.AddOriginalElement(l + 1, p + 1), x = b + 1 - i) : (p = (l = c[b - 1]) - x - s, l > N && C.MarkNextChange(), N = l, C.AddModifiedElement(l + 1, p + 1), x = b - 1 - i), k >= 0 && (i = (c = this.m_reverseHistory[k])[0], S = 1, E = c.length - 1);
        } while (--k >= -1);_ = C.getChanges();
      }return this.ConcatenateChanges(y, _);
    }, e.prototype.ComputeRecursionPoint = function (e, t, n, r, i, o, a) {
      var s,
          u,
          c,
          l = 0,
          f = 0,
          h = 0,
          p = 0;e--, n--, i[0] = 0, o[0] = 0, this.m_forwardHistory = [], this.m_reverseHistory = [];var d,
          m,
          g = t - e + (r - n),
          v = g + 1,
          y = new Array(v),
          b = new Array(v),
          _ = r - n,
          C = t - e,
          S = e - n,
          E = t - r,
          x = (C - _) % 2 == 0;for (y[_] = e, b[C] = t, a[0] = !1, c = 1; c <= g / 2 + 1; c++) {
        var N = 0,
            k = 0;for (l = this.ClipDiagonalBound(_ - c, c, _, v), f = this.ClipDiagonalBound(_ + c, c, _, v), d = l; d <= f; d += 2) {
          for (u = (s = d === l || d < f && y[d - 1] < y[d + 1] ? y[d + 1] : y[d - 1] + 1) - (d - _) - S, m = s; s < t && u < r && this.ElementsAreEqual(s + 1, u + 1);) {
            s++, u++;
          }if (y[d] = s, s + u > N + k && (N = s, k = u), !x && Math.abs(d - C) <= c - 1 && s >= b[d]) return i[0] = s, o[0] = u, m <= b[d] && c <= 1448 ? this.WALKTRACE(_, l, f, S, C, h, p, E, y, b, s, t, i, u, r, o, x, a) : null;
        }var L = (N - e + (k - n) - c) / 2;if (null !== this.ContinueProcessingPredicate && !this.ContinueProcessingPredicate(N, this.OriginalSequence, L)) return a[0] = !0, i[0] = N, o[0] = k, L > 0 && c <= 1448 ? this.WALKTRACE(_, l, f, S, C, h, p, E, y, b, s, t, i, u, r, o, x, a) : [new A(++e, t - e + 1, ++n, r - n + 1)];for (h = this.ClipDiagonalBound(C - c, c, C, v), p = this.ClipDiagonalBound(C + c, c, C, v), d = h; d <= p; d += 2) {
          for (u = (s = d === h || d < p && b[d - 1] >= b[d + 1] ? b[d + 1] - 1 : b[d - 1]) - (d - C) - E, m = s; s > e && u > n && this.ElementsAreEqual(s, u);) {
            s--, u--;
          }if (b[d] = s, x && Math.abs(d - _) <= c && s <= y[d]) return i[0] = s, o[0] = u, m >= y[d] && c <= 1448 ? this.WALKTRACE(_, l, f, S, C, h, p, E, y, b, s, t, i, u, r, o, x, a) : null;
        }if (c <= 1447) {
          var P = new Array(f - l + 2);P[0] = _ - l + 1, w.Copy(y, l, P, 1, f - l + 1), this.m_forwardHistory.push(P), (P = new Array(p - h + 2))[0] = C - h + 1, w.Copy(b, h, P, 1, p - h + 1), this.m_reverseHistory.push(P);
        }
      }return this.WALKTRACE(_, l, f, S, C, h, p, E, y, b, s, t, i, u, r, o, x, a);
    }, e.prototype.ShiftChanges = function (e) {
      var t;do {
        t = !1;for (var n = 0; n < e.length; n++) {
          for (var r = e[n], i = n < e.length - 1 ? e[n + 1].originalStart : this.OriginalSequence.getLength(), o = n < e.length - 1 ? e[n + 1].modifiedStart : this.ModifiedSequence.getLength(), a = r.originalLength > 0, s = r.modifiedLength > 0; r.originalStart + r.originalLength < i && r.modifiedStart + r.modifiedLength < o && (!a || this.OriginalElementsAreEqual(r.originalStart, r.originalStart + r.originalLength)) && (!s || this.ModifiedElementsAreEqual(r.modifiedStart, r.modifiedStart + r.modifiedLength));) {
            r.originalStart++, r.modifiedStart++;
          }
        }var u = new Array(),
            c = [null];for (n = 0; n < e.length; n++) {
          n < e.length - 1 && this.ChangesOverlap(e[n], e[n + 1], c) ? (t = !0, u.push(c[0]), n++) : u.push(e[n]);
        }e = u;
      } while (t);for (n = e.length - 1; n >= 0; n--) {
        r = e[n], i = 0, o = 0;if (n > 0) {
          var l = e[n - 1];l.originalLength > 0 && (i = l.originalStart + l.originalLength), l.modifiedLength > 0 && (o = l.modifiedStart + l.modifiedLength);
        }a = r.originalLength > 0, s = r.modifiedLength > 0;for (var f = 0, h = this._boundaryScore(r.originalStart, r.originalLength, r.modifiedStart, r.modifiedLength), p = 1;; p++) {
          var d = r.originalStart - p,
              m = r.modifiedStart - p;if (d < i || m < o) break;if (a && !this.OriginalElementsAreEqual(d, d + r.originalLength)) break;if (s && !this.ModifiedElementsAreEqual(m, m + r.modifiedLength)) break;var g = this._boundaryScore(d, r.originalLength, m, r.modifiedLength);g > h && (h = g, f = p);
        }r.originalStart -= f, r.modifiedStart -= f;
      }return e;
    }, e.prototype._OriginalIsBoundary = function (e) {
      if (e <= 0 || e >= this.OriginalSequence.getLength() - 1) return !0;var t = this.OriginalSequence.getElementAtIndex(e);return "string" == typeof t && /^\s*$/.test(t);
    }, e.prototype._OriginalRegionIsBoundary = function (e, t) {
      if (this._OriginalIsBoundary(e) || this._OriginalIsBoundary(e - 1)) return !0;if (t > 0) {
        var n = e + t;if (this._OriginalIsBoundary(n - 1) || this._OriginalIsBoundary(n)) return !0;
      }return !1;
    }, e.prototype._ModifiedIsBoundary = function (e) {
      if (e <= 0 || e >= this.ModifiedSequence.getLength() - 1) return !0;var t = this.ModifiedSequence.getElementAtIndex(e);return "string" == typeof t && /^\s*$/.test(t);
    }, e.prototype._ModifiedRegionIsBoundary = function (e, t) {
      if (this._ModifiedIsBoundary(e) || this._ModifiedIsBoundary(e - 1)) return !0;if (t > 0) {
        var n = e + t;if (this._ModifiedIsBoundary(n - 1) || this._ModifiedIsBoundary(n)) return !0;
      }return !1;
    }, e.prototype._boundaryScore = function (e, t, n, r) {
      return (this._OriginalRegionIsBoundary(e, t) ? 1 : 0) + (this._ModifiedRegionIsBoundary(n, r) ? 1 : 0);
    }, e.prototype.ConcatenateChanges = function (e, t) {
      var n = [],
          r = null;return 0 === e.length || 0 === t.length ? t.length > 0 ? t : e : this.ChangesOverlap(e[e.length - 1], t[0], n) ? (r = new Array(e.length + t.length - 1), w.Copy(e, 0, r, 0, e.length - 1), r[e.length - 1] = n[0], w.Copy(t, 1, r, e.length, t.length - 1), r) : (r = new Array(e.length + t.length), w.Copy(e, 0, r, 0, e.length), w.Copy(t, 0, r, e.length, t.length), r);
    }, e.prototype.ChangesOverlap = function (e, t, n) {
      if (k.Assert(e.originalStart <= t.originalStart, "Left change is not less than or equal to right change"), k.Assert(e.modifiedStart <= t.modifiedStart, "Left change is not less than or equal to right change"), e.originalStart + e.originalLength >= t.originalStart || e.modifiedStart + e.modifiedLength >= t.modifiedStart) {
        var r = e.originalStart,
            i = e.originalLength,
            o = e.modifiedStart,
            a = e.modifiedLength;return e.originalStart + e.originalLength >= t.originalStart && (i = t.originalStart + t.originalLength - e.originalStart), e.modifiedStart + e.modifiedLength >= t.modifiedStart && (a = t.modifiedStart + t.modifiedLength - e.modifiedStart), n[0] = new A(r, i, o, a), !0;
      }return n[0] = null, !1;
    }, e.prototype.ClipDiagonalBound = function (e, t, n, r) {
      if (e >= 0 && e < r) return e;var i = t % 2 == 0;return e < 0 ? i === (n % 2 == 0) ? 0 : 1 : i === ((r - n - 1) % 2 == 0) ? r - 1 : r - 2;
    }, e;
  }();String.fromCharCode(65279);var O = 5e3,
      T = 3;function M(e, t, n, r) {
    return new P(e, t, n).ComputeDiff(r);
  }var I = function () {
    function e(t) {
      for (var n = [], r = [], i = 0, o = t.length; i < o; i++) {
        n[i] = e._getFirstNonBlankColumn(t[i], 1), r[i] = e._getLastNonBlankColumn(t[i], 1);
      }this._lines = t, this._startColumns = n, this._endColumns = r;
    }return e.prototype.getLength = function () {
      return this._lines.length;
    }, e.prototype.getElementAtIndex = function (e) {
      return this._lines[e].substring(this._startColumns[e] - 1, this._endColumns[e] - 1);
    }, e.prototype.getStartLineNumber = function (e) {
      return e + 1;
    }, e.prototype.getEndLineNumber = function (e) {
      return e + 1;
    }, e._getFirstNonBlankColumn = function (e, t) {
      var n = function (e) {
        for (var t = 0, n = e.length; t < n; t++) {
          var r = e.charCodeAt(t);if (32 !== r && 9 !== r) return t;
        }return -1;
      }(e);return -1 === n ? t : n + 1;
    }, e._getLastNonBlankColumn = function (e, t) {
      var n = function (e, t) {
        void 0 === t && (t = e.length - 1);for (var n = t; n >= 0; n--) {
          var r = e.charCodeAt(n);if (32 !== r && 9 !== r) return n;
        }return -1;
      }(e);return -1 === n ? t : n + 2;
    }, e.prototype.getCharSequence = function (e, t, n) {
      for (var r = [], i = [], o = [], a = 0, s = t; s <= n; s++) {
        for (var u = this._lines[s], c = e ? this._startColumns[s] : 1, l = e ? this._endColumns[s] : u.length + 1, f = c; f < l; f++) {
          r[a] = u.charCodeAt(f - 1), i[a] = s + 1, o[a] = f, a++;
        }
      }return new V(r, i, o);
    }, e;
  }(),
      V = function () {
    function e(e, t, n) {
      this._charCodes = e, this._lineNumbers = t, this._columns = n;
    }return e.prototype.getLength = function () {
      return this._charCodes.length;
    }, e.prototype.getElementAtIndex = function (e) {
      return this._charCodes[e];
    }, e.prototype.getStartLineNumber = function (e) {
      return this._lineNumbers[e];
    }, e.prototype.getStartColumn = function (e) {
      return this._columns[e];
    }, e.prototype.getEndLineNumber = function (e) {
      return this._lineNumbers[e];
    }, e.prototype.getEndColumn = function (e) {
      return this._columns[e] + 1;
    }, e;
  }(),
      j = function () {
    function e(e, t, n, r, i, o, a, s) {
      this.originalStartLineNumber = e, this.originalStartColumn = t, this.originalEndLineNumber = n, this.originalEndColumn = r, this.modifiedStartLineNumber = i, this.modifiedStartColumn = o, this.modifiedEndLineNumber = a, this.modifiedEndColumn = s;
    }return e.createFromDiffChange = function (t, n, r) {
      var i, o, a, s, u, c, l, f;return 0 === t.originalLength ? (i = 0, o = 0, a = 0, s = 0) : (i = n.getStartLineNumber(t.originalStart), o = n.getStartColumn(t.originalStart), a = n.getEndLineNumber(t.originalStart + t.originalLength - 1), s = n.getEndColumn(t.originalStart + t.originalLength - 1)), 0 === t.modifiedLength ? (u = 0, c = 0, l = 0, f = 0) : (u = r.getStartLineNumber(t.modifiedStart), c = r.getStartColumn(t.modifiedStart), l = r.getEndLineNumber(t.modifiedStart + t.modifiedLength - 1), f = r.getEndColumn(t.modifiedStart + t.modifiedLength - 1)), new e(i, o, a, s, u, c, l, f);
    }, e;
  }();var D = function () {
    function e(e, t, n, r, i) {
      this.originalStartLineNumber = e, this.originalEndLineNumber = t, this.modifiedStartLineNumber = n, this.modifiedEndLineNumber = r, this.charChanges = i;
    }return e.createFromDiffResult = function (t, n, r, i, o, a, s) {
      var u, c, l, f, h;if (0 === n.originalLength ? (u = r.getStartLineNumber(n.originalStart) - 1, c = 0) : (u = r.getStartLineNumber(n.originalStart), c = r.getEndLineNumber(n.originalStart + n.originalLength - 1)), 0 === n.modifiedLength ? (l = i.getStartLineNumber(n.modifiedStart) - 1, f = 0) : (l = i.getStartLineNumber(n.modifiedStart), f = i.getEndLineNumber(n.modifiedStart + n.modifiedLength - 1)), a && 0 !== n.originalLength && 0 !== n.modifiedLength && o()) {
        var p = r.getCharSequence(t, n.originalStart, n.originalStart + n.originalLength - 1),
            d = i.getCharSequence(t, n.modifiedStart, n.modifiedStart + n.modifiedLength - 1),
            m = M(p, d, o, !0);s && (m = function (e) {
          if (e.length <= 1) return e;for (var t = [e[0]], n = t[0], r = 1, i = e.length; r < i; r++) {
            var o = e[r],
                a = o.originalStart - (n.originalStart + n.originalLength),
                s = o.modifiedStart - (n.modifiedStart + n.modifiedLength);Math.min(a, s) < T ? (n.originalLength = o.originalStart + o.originalLength - n.originalStart, n.modifiedLength = o.modifiedStart + o.modifiedLength - n.modifiedStart) : (t.push(o), n = o);
          }return t;
        }(m)), h = [];for (var g = 0, v = m.length; g < v; g++) {
          h.push(j.createFromDiffChange(m[g], p, d));
        }
      }return new e(u, c, l, f, h);
    }, e;
  }(),
      F = function () {
    function e(e, t, n) {
      this.shouldComputeCharChanges = n.shouldComputeCharChanges, this.shouldPostProcessCharChanges = n.shouldPostProcessCharChanges, this.shouldIgnoreTrimWhitespace = n.shouldIgnoreTrimWhitespace, this.shouldMakePrettyDiff = n.shouldMakePrettyDiff, this.maximumRunTimeMs = O, this.originalLines = e, this.modifiedLines = t, this.original = new I(e), this.modified = new I(t);
    }return e.prototype.computeDiff = function () {
      if (1 === this.original.getLength() && 0 === this.original.getElementAtIndex(0).length) return [{ originalStartLineNumber: 1, originalEndLineNumber: 1, modifiedStartLineNumber: 1, modifiedEndLineNumber: this.modified.getLength(), charChanges: [{ modifiedEndColumn: 0, modifiedEndLineNumber: 0, modifiedStartColumn: 0, modifiedStartLineNumber: 0, originalEndColumn: 0, originalEndLineNumber: 0, originalStartColumn: 0, originalStartLineNumber: 0 }] }];if (1 === this.modified.getLength() && 0 === this.modified.getElementAtIndex(0).length) return [{ originalStartLineNumber: 1, originalEndLineNumber: this.original.getLength(), modifiedStartLineNumber: 1, modifiedEndLineNumber: 1, charChanges: [{ modifiedEndColumn: 0, modifiedEndLineNumber: 0, modifiedStartColumn: 0, modifiedStartLineNumber: 0, originalEndColumn: 0, originalEndLineNumber: 0, originalStartColumn: 0, originalStartLineNumber: 0 }] }];this.computationStartTime = new Date().getTime();var e = M(this.original, this.modified, this._continueProcessingPredicate.bind(this), this.shouldMakePrettyDiff);if (this.shouldIgnoreTrimWhitespace) {
        for (var t = [], n = 0, r = e.length; n < r; n++) {
          t.push(D.createFromDiffResult(this.shouldIgnoreTrimWhitespace, e[n], this.original, this.modified, this._continueProcessingPredicate.bind(this), this.shouldComputeCharChanges, this.shouldPostProcessCharChanges));
        }return t;
      }for (var i = [], o = 0, a = 0, s = (n = -1, e.length); n < s; n++) {
        for (var u = n + 1 < s ? e[n + 1] : null, c = u ? u.originalStart : this.originalLines.length, l = u ? u.modifiedStart : this.modifiedLines.length; o < c && a < l;) {
          var f = this.originalLines[o],
              h = this.modifiedLines[a];if (f !== h) {
            for (var p = I._getFirstNonBlankColumn(f, 1), d = I._getFirstNonBlankColumn(h, 1); p > 1 && d > 1;) {
              if (f.charCodeAt(p - 2) !== h.charCodeAt(d - 2)) break;p--, d--;
            }(p > 1 || d > 1) && this._pushTrimWhitespaceCharChange(i, o + 1, 1, p, a + 1, 1, d);for (var m = I._getLastNonBlankColumn(f, 1), g = I._getLastNonBlankColumn(h, 1), v = f.length + 1, y = h.length + 1; m < v && g < y;) {
              if (f.charCodeAt(m - 1) !== f.charCodeAt(g - 1)) break;m++, g++;
            }(m < v || g < y) && this._pushTrimWhitespaceCharChange(i, o + 1, m, v, a + 1, g, y);
          }o++, a++;
        }u && (i.push(D.createFromDiffResult(this.shouldIgnoreTrimWhitespace, u, this.original, this.modified, this._continueProcessingPredicate.bind(this), this.shouldComputeCharChanges, this.shouldPostProcessCharChanges)), o += u.originalLength, a += u.modifiedLength);
      }return i;
    }, e.prototype._pushTrimWhitespaceCharChange = function (e, t, n, r, i, o, a) {
      var s;this._mergeTrimWhitespaceCharChange(e, t, n, r, i, o, a) || (this.shouldComputeCharChanges && (s = [new j(t, n, t, r, i, o, i, a)]), e.push(new D(t, t, i, i, s)));
    }, e.prototype._mergeTrimWhitespaceCharChange = function (e, t, n, r, i, o, a) {
      var s = e.length;if (0 === s) return !1;var u = e[s - 1];return 0 !== u.originalEndLineNumber && 0 !== u.modifiedEndLineNumber && u.originalEndLineNumber + 1 === t && u.modifiedEndLineNumber + 1 === i && (u.originalEndLineNumber = t, u.modifiedEndLineNumber = i, this.shouldComputeCharChanges && u.charChanges.push(new j(t, n, t, r, i, o, i, a)), !0);
    }, e.prototype._continueProcessingPredicate = function () {
      return 0 === this.maximumRunTimeMs || new Date().getTime() - this.computationStartTime < this.maximumRunTimeMs;
    }, e;
  }(),
      R = function () {
    function e(e, t, n) {
      for (var r = new Uint8Array(e * t), i = 0, o = e * t; i < o; i++) {
        r[i] = n;
      }this._data = r, this.rows = e, this.cols = t;
    }return e.prototype.get = function (e, t) {
      return this._data[e * this.cols + t];
    }, e.prototype.set = function (e, t, n) {
      this._data[e * this.cols + t] = n;
    }, e;
  }();function U(e) {
    return e < 0 ? 0 : e > 255 ? 255 : 0 | e;
  }function W(e) {
    return e < 0 ? 0 : e > 4294967295 ? 4294967295 : 0 | e;
  }var q = function () {
    return function (e, t) {
      this.index = e, this.remainder = t;
    };
  }(),
      K = function () {
    function e(e) {
      this.values = e, this.prefixSum = new Uint32Array(e.length), this.prefixSumValidIndex = new Int32Array(1), this.prefixSumValidIndex[0] = -1;
    }return e.prototype.getCount = function () {
      return this.values.length;
    }, e.prototype.insertValues = function (e, t) {
      e = W(e);var n = this.values,
          r = this.prefixSum,
          i = t.length;return 0 !== i && (this.values = new Uint32Array(n.length + i), this.values.set(n.subarray(0, e), 0), this.values.set(n.subarray(e), e + i), this.values.set(t, e), e - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = e - 1), this.prefixSum = new Uint32Array(this.values.length), this.prefixSumValidIndex[0] >= 0 && this.prefixSum.set(r.subarray(0, this.prefixSumValidIndex[0] + 1)), !0);
    }, e.prototype.changeValue = function (e, t) {
      return e = W(e), t = W(t), this.values[e] !== t && (this.values[e] = t, e - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = e - 1), !0);
    }, e.prototype.removeValues = function (e, t) {
      e = W(e), t = W(t);var n = this.values,
          r = this.prefixSum;if (e >= n.length) return !1;var i = n.length - e;return t >= i && (t = i), 0 !== t && (this.values = new Uint32Array(n.length - t), this.values.set(n.subarray(0, e), 0), this.values.set(n.subarray(e + t), e), this.prefixSum = new Uint32Array(this.values.length), e - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = e - 1), this.prefixSumValidIndex[0] >= 0 && this.prefixSum.set(r.subarray(0, this.prefixSumValidIndex[0] + 1)), !0);
    }, e.prototype.getTotalValue = function () {
      return 0 === this.values.length ? 0 : this._getAccumulatedValue(this.values.length - 1);
    }, e.prototype.getAccumulatedValue = function (e) {
      return e < 0 ? 0 : (e = W(e), this._getAccumulatedValue(e));
    }, e.prototype._getAccumulatedValue = function (e) {
      if (e <= this.prefixSumValidIndex[0]) return this.prefixSum[e];var t = this.prefixSumValidIndex[0] + 1;0 === t && (this.prefixSum[0] = this.values[0], t++), e >= this.values.length && (e = this.values.length - 1);for (var n = t; n <= e; n++) {
        this.prefixSum[n] = this.prefixSum[n - 1] + this.values[n];
      }return this.prefixSumValidIndex[0] = Math.max(this.prefixSumValidIndex[0], e), this.prefixSum[e];
    }, e.prototype.getIndexOf = function (e) {
      e = Math.floor(e), this.getTotalValue();for (var t, n, r, i = 0, o = this.values.length - 1; i <= o;) {
        if (t = i + (o - i) / 2 | 0, e < (r = (n = this.prefixSum[t]) - this.values[t])) o = t - 1;else {
          if (!(e >= n)) break;i = t + 1;
        }
      }return new q(t, e - r);
    }, e;
  }(),
      B = (function () {
    function e(e) {
      this._cacheAccumulatedValueStart = 0, this._cache = null, this._actual = new K(e), this._bustCache();
    }e.prototype._bustCache = function () {
      this._cacheAccumulatedValueStart = 0, this._cache = null;
    }, e.prototype.insertValues = function (e, t) {
      this._actual.insertValues(e, t) && this._bustCache();
    }, e.prototype.changeValue = function (e, t) {
      this._actual.changeValue(e, t) && this._bustCache();
    }, e.prototype.removeValues = function (e, t) {
      this._actual.removeValues(e, t) && this._bustCache();
    }, e.prototype.getTotalValue = function () {
      return this._actual.getTotalValue();
    }, e.prototype.getAccumulatedValue = function (e) {
      return this._actual.getAccumulatedValue(e);
    }, e.prototype.getIndexOf = function (e) {
      if (e = Math.floor(e), null !== this._cache) {
        var t = e - this._cacheAccumulatedValueStart;if (t >= 0 && t < this._cache.length) return this._cache[t];
      }return this._actual.getIndexOf(e);
    }, e.prototype.warmUpCache = function (e, t) {
      for (var n = [], r = e; r <= t; r++) {
        n[r - e] = this.getIndexOf(r);
      }this._cache = n, this._cacheAccumulatedValueStart = e;
    };
  }(), function () {
    function e(e, t, n, r) {
      this._uri = e, this._lines = t, this._eol = n, this._versionId = r;
    }return e.prototype.dispose = function () {
      this._lines.length = 0;
    }, e.prototype.getText = function () {
      return this._lines.join(this._eol);
    }, e.prototype.onEvents = function (e) {
      e.eol && e.eol !== this._eol && (this._eol = e.eol, this._lineStarts = null);for (var t = e.changes, n = 0, r = t.length; n < r; n++) {
        var i = t[n];this._acceptDeleteRange(i.range), this._acceptInsertText(new S(i.range.startLineNumber, i.range.startColumn), i.text);
      }this._versionId = e.versionId;
    }, e.prototype._ensureLineStarts = function () {
      if (!this._lineStarts) {
        for (var e = this._eol.length, t = this._lines.length, n = new Uint32Array(t), r = 0; r < t; r++) {
          n[r] = this._lines[r].length + e;
        }this._lineStarts = new K(n);
      }
    }, e.prototype._setLineText = function (e, t) {
      this._lines[e] = t, this._lineStarts && this._lineStarts.changeValue(e, this._lines[e].length + this._eol.length);
    }, e.prototype._acceptDeleteRange = function (e) {
      if (e.startLineNumber !== e.endLineNumber) this._setLineText(e.startLineNumber - 1, this._lines[e.startLineNumber - 1].substring(0, e.startColumn - 1) + this._lines[e.endLineNumber - 1].substring(e.endColumn - 1)), this._lines.splice(e.startLineNumber, e.endLineNumber - e.startLineNumber), this._lineStarts && this._lineStarts.removeValues(e.startLineNumber, e.endLineNumber - e.startLineNumber);else {
        if (e.startColumn === e.endColumn) return;this._setLineText(e.startLineNumber - 1, this._lines[e.startLineNumber - 1].substring(0, e.startColumn - 1) + this._lines[e.startLineNumber - 1].substring(e.endColumn - 1));
      }
    }, e.prototype._acceptInsertText = function (e, t) {
      if (0 !== t.length) {
        var n = t.split(/\r\n|\r|\n/);if (1 !== n.length) {
          n[n.length - 1] += this._lines[e.lineNumber - 1].substring(e.column - 1), this._setLineText(e.lineNumber - 1, this._lines[e.lineNumber - 1].substring(0, e.column - 1) + n[0]);for (var r = new Uint32Array(n.length - 1), i = 1; i < n.length; i++) {
            this._lines.splice(e.lineNumber + i - 1, 0, n[i]), r[i - 1] = n[i].length + this._eol.length;
          }this._lineStarts && this._lineStarts.insertValues(e.lineNumber, r);
        } else this._setLineText(e.lineNumber - 1, this._lines[e.lineNumber - 1].substring(0, e.column - 1) + n[0] + this._lines[e.lineNumber - 1].substring(e.column - 1));
      }
    }, e;
  }()),
      Y = function () {
    function e(t) {
      var n = U(t);this._defaultValue = n, this._asciiMap = e._createAsciiMap(n), this._map = new Map();
    }return e._createAsciiMap = function (e) {
      for (var t = new Uint8Array(256), n = 0; n < 256; n++) {
        t[n] = e;
      }return t;
    }, e.prototype.set = function (e, t) {
      var n = U(t);e >= 0 && e < 256 ? this._asciiMap[e] = n : this._map.set(e, n);
    }, e.prototype.get = function (e) {
      return e >= 0 && e < 256 ? this._asciiMap[e] : this._map.get(e) || this._defaultValue;
    }, e;
  }(),
      $ = (function () {
    function e() {
      this._actual = new Y(0);
    }e.prototype.add = function (e) {
      this._actual.set(e, 1);
    }, e.prototype.has = function (e) {
      return 1 === this._actual.get(e);
    };
  }(), function () {
    function e(e) {
      for (var t = 0, n = 0, r = 0, i = e.length; r < i; r++) {
        var o = e[r],
            a = o[0],
            s = o[1],
            u = o[2];s > t && (t = s), a > n && (n = a), u > n && (n = u);
      }var c = new R(++n, ++t, 0);for (r = 0, i = e.length; r < i; r++) {
        var l = e[r];a = l[0], s = l[1], u = l[2];c.set(a, s, u);
      }this._states = c, this._maxCharCode = t;
    }return e.prototype.nextState = function (e, t) {
      return t < 0 || t >= this._maxCharCode ? 0 : this._states.get(e, t);
    }, e;
  }()),
      J = null;var H = null;var z = function () {
    function e() {}return e._createLink = function (e, t, n, r, i) {
      var o = i - 1;do {
        var a = t.charCodeAt(o);if (2 !== e.get(a)) break;o--;
      } while (o > r);if (r > 0) {
        var s = t.charCodeAt(r - 1),
            u = t.charCodeAt(o);(40 === s && 41 === u || 91 === s && 93 === u || 123 === s && 125 === u) && o--;
      }return { range: { startLineNumber: n, startColumn: r + 1, endLineNumber: n, endColumn: o + 2 }, url: t.substring(r, o + 1) };
    }, e.computeLinks = function (t) {
      for (var n = (null === J && (J = new $([[1, 104, 2], [1, 72, 2], [1, 102, 6], [1, 70, 6], [2, 116, 3], [2, 84, 3], [3, 116, 4], [3, 84, 4], [4, 112, 5], [4, 80, 5], [5, 115, 9], [5, 83, 9], [5, 58, 10], [6, 105, 7], [6, 73, 7], [7, 108, 8], [7, 76, 8], [8, 101, 9], [8, 69, 9], [9, 58, 10], [10, 47, 11], [11, 47, 12]])), J), r = function () {
        if (null === H) {
          H = new Y(0);for (var e = 0; e < " \t<>'\"、。｡､，．：；？！＠＃＄％＆＊‘“〈《「『【〔（［｛｢｣｝］）〕】』」》〉”’｀～…".length; e++) {
            H.set(" \t<>'\"、。｡､，．：；？！＠＃＄％＆＊‘“〈《「『【〔（［｛｢｣｝］）〕】』」》〉”’｀～…".charCodeAt(e), 1);
          }for (e = 0; e < ".,;".length; e++) {
            H.set(".,;".charCodeAt(e), 2);
          }
        }return H;
      }(), i = [], o = 1, a = t.getLineCount(); o <= a; o++) {
        for (var s = t.getLineContent(o), u = s.length, c = 0, l = 0, f = 0, h = 1, p = !1, d = !1, m = !1; c < u;) {
          var g = !1,
              v = s.charCodeAt(c);if (13 === h) {
            var y = void 0;switch (v) {case 40:
                p = !0, y = 0;break;case 41:
                y = p ? 0 : 1;break;case 91:
                d = !0, y = 0;break;case 93:
                y = d ? 0 : 1;break;case 123:
                m = !0, y = 0;break;case 125:
                y = m ? 0 : 1;break;case 39:
                y = 34 === f || 96 === f ? 0 : 1;break;case 34:
                y = 39 === f || 96 === f ? 0 : 1;break;case 96:
                y = 39 === f || 34 === f ? 0 : 1;break;default:
                y = r.get(v);}1 === y && (i.push(e._createLink(r, s, o, l, c)), g = !0);
          } else if (12 === h) {
            1 === (y = r.get(v)) ? g = !0 : h = 13;
          } else 0 === (h = n.nextState(h, v)) && (g = !0);g && (h = 1, p = !1, d = !1, m = !1, l = c + 1, f = v), c++;
        }13 === h && i.push(e._createLink(r, s, o, l, u));
      }return i;
    }, e;
  }();var G = function () {
    function e() {
      this._defaultValueSet = [["true", "false"], ["True", "False"], ["Private", "Public", "Friend", "ReadOnly", "Partial", "Protected", "WriteOnly"], ["public", "protected", "private"]];
    }return e.prototype.navigateValueSet = function (e, t, n, r, i) {
      var o;if (e && t && (o = this.doNavigateValueSet(t, i))) return { range: e, value: o };if (n && r && (o = this.doNavigateValueSet(r, i))) return { range: n, value: o };return null;
    }, e.prototype.doNavigateValueSet = function (e, t) {
      var n = this.numberReplace(e, t);return null !== n ? n : this.textReplace(e, t);
    }, e.prototype.numberReplace = function (e, t) {
      var n = Math.pow(10, e.length - (e.lastIndexOf(".") + 1)),
          r = Number(e),
          i = parseFloat(e);return isNaN(r) || isNaN(i) || r !== i ? null : 0 !== r || t ? (r = Math.floor(r * n), r += t ? n : -n, String(r / n)) : null;
    }, e.prototype.textReplace = function (e, t) {
      return this.valueSetsReplace(this._defaultValueSet, e, t);
    }, e.prototype.valueSetsReplace = function (e, t, n) {
      for (var r = null, i = 0, o = e.length; null === r && i < o; i++) {
        r = this.valueSetReplace(e[i], t, n);
      }return r;
    }, e.prototype.valueSetReplace = function (e, t, n) {
      var r = e.indexOf(t);return r >= 0 ? ((r += n ? 1 : -1) < 0 ? r = e.length - 1 : r %= e.length, e[r]) : null;
    }, e.INSTANCE = new e(), e;
  }(),
      Q = "`~!@#$%^&*()-=+[{]}\\|;:'\",.<>/?";var X = function (e) {
    void 0 === e && (e = "");for (var t = "(-?\\d*\\.\\d\\w*)|([^", n = 0; n < Q.length; n++) {
      e.indexOf(Q[n]) >= 0 || (t += "\\" + Q[n]);
    }return t += "\\s]+)", new RegExp(t, "g");
  }();var Z = {};C.a.addEventListener("error", function (e) {
    var t = e.detail,
        n = t.id;t.parent ? t.handler && Z && delete Z[n] : (Z[n] = t, 1 === Object.keys(Z).length && setTimeout(function () {
      var e = Z;Z = {}, Object.keys(e).forEach(function (t) {
        var n = e[t];n.exception ? te(n.exception) : n.error && te(n.error), console.log("WARNING: Promise with no error callback:" + n.id), console.log(n), n.exception && console.log(n.exception.stack);
      });
    }, 0));
  });var ee = new (function () {
    function e() {
      this.listeners = [], this.unexpectedErrorHandler = function (e) {
        setTimeout(function () {
          if (e.stack) throw new Error(e.message + "\n\n" + e.stack);throw e;
        }, 0);
      };
    }return e.prototype.emit = function (e) {
      this.listeners.forEach(function (t) {
        t(e);
      });
    }, e.prototype.onUnexpectedError = function (e) {
      this.unexpectedErrorHandler(e), this.emit(e);
    }, e.prototype.onUnexpectedExternalError = function (e) {
      this.unexpectedErrorHandler(e);
    }, e;
  }())();function te(e) {
    ie(e) || ee.onUnexpectedError(e);
  }function ne(e) {
    return e instanceof Error ? { $isError: !0, name: e.name, message: e.message, stack: e.stacktrace || e.stack } : e;
  }var re = "Canceled";function ie(e) {
    return e instanceof Error && e.name === re && e.message === re;
  }function oe() {
    var e = new Error(re);return e.name = e.message, e;
  }function ae(e) {
    for (var t = [], n = 1; n < arguments.length; n++) {
      t[n - 1] = arguments[n];
    }return Array.isArray(e) ? (e.forEach(function (e) {
      return e && e.dispose();
    }), []) : 0 === t.length ? e ? (e.dispose(), e) : void 0 : (ae(e), ae(t), []);
  }var se,
      ue = function () {
    function e() {
      this._toDispose = [];
    }return Object.defineProperty(e.prototype, "toDispose", { get: function get() {
        return this._toDispose;
      }, enumerable: !0, configurable: !0 }), e.prototype.dispose = function () {
      this._toDispose = ae(this._toDispose);
    }, e.prototype._register = function (e) {
      return this._toDispose.push(e), e;
    }, e.None = Object.freeze({ dispose: function dispose() {} }), e;
  }(),
      ce = (function () {
    function e(e) {
      this.object = e;
    }e.prototype.dispose = function () {};
  }(), function () {
    return function (e) {
      this.element = e;
    };
  }()),
      le = function () {
    function e() {}return e.prototype.isEmpty = function () {
      return !this._first;
    }, e.prototype.unshift = function (e) {
      return this.insert(e, !1);
    }, e.prototype.push = function (e) {
      return this.insert(e, !0);
    }, e.prototype.insert = function (e, t) {
      var n = this,
          r = new ce(e);if (this._first) {
        if (t) {
          var i = this._last;this._last = r, r.prev = i, i.next = r;
        } else {
          var o = this._first;this._first = r, r.next = o, o.prev = r;
        }
      } else this._first = r, this._last = r;return function () {
        for (var e = n._first; e instanceof ce; e = e.next) {
          if (e === r) {
            if (e.prev && e.next) {
              var t = e.prev;t.next = e.next, e.next.prev = t;
            } else e.prev || e.next ? e.next ? e.prev || (n._first = n._first.next, n._first.prev = void 0) : (n._last = n._last.prev, n._last.next = void 0) : (n._first = void 0, n._last = void 0);break;
          }
        }
      };
    }, e.prototype.iterator = function () {
      var e = { done: void 0, value: void 0 },
          t = this._first;return { next: function next() {
          return t ? (e.done = !1, e.value = t.element, t = t.next) : (e.done = !0, e.value = void 0), e;
        } };
    }, e;
  }();!function (e) {
    var t = { dispose: function dispose() {} };e.None = function () {
      return t;
    };
  }(se || (se = {}));var fe = function () {
    function e(e) {
      this._options = e;
    }return Object.defineProperty(e.prototype, "event", { get: function get() {
        var t = this;return this._event || (this._event = function (n, r, i) {
          t._listeners || (t._listeners = new le());var o = t._listeners.isEmpty();o && t._options && t._options.onFirstListenerAdd && t._options.onFirstListenerAdd(t);var a,
              s = t._listeners.push(r ? [n, r] : n);return o && t._options && t._options.onFirstListenerDidAdd && t._options.onFirstListenerDidAdd(t), t._options && t._options.onListenerDidAdd && t._options.onListenerDidAdd(t, n, r), a = { dispose: function dispose() {
              a.dispose = e._noop, t._disposed || (s(), t._options && t._options.onLastListenerRemove && t._listeners.isEmpty() && t._options.onLastListenerRemove(t));
            } }, Array.isArray(i) && i.push(a), a;
        }), this._event;
      }, enumerable: !0, configurable: !0 }), e.prototype.fire = function (e) {
      if (this._listeners) {
        this._deliveryQueue || (this._deliveryQueue = []);for (var t = this._listeners.iterator(), n = t.next(); !n.done; n = t.next()) {
          this._deliveryQueue.push([n.value, e]);
        }for (; this._deliveryQueue.length > 0;) {
          var r = this._deliveryQueue.shift(),
              i = r[0],
              o = r[1];try {
            "function" == typeof i ? i.call(void 0, o) : i[0].call(i[1], o);
          } catch (n) {
            te(n);
          }
        }
      }
    }, e.prototype.dispose = function () {
      this._listeners && (this._listeners = void 0), this._deliveryQueue && (this._deliveryQueue.length = 0), this._disposed = !0;
    }, e._noop = function () {}, e;
  }();!function () {
    function e() {
      var e = this;this.hasListeners = !1, this.events = [], this.emitter = new fe({ onFirstListenerAdd: function onFirstListenerAdd() {
          return e.onFirstListenerAdd();
        }, onLastListenerRemove: function onLastListenerRemove() {
          return e.onLastListenerRemove();
        } });
    }Object.defineProperty(e.prototype, "event", { get: function get() {
        return this.emitter.event;
      }, enumerable: !0, configurable: !0 }), e.prototype.add = function (e) {
      var t = this,
          n = { event: e, listener: null };this.events.push(n), this.hasListeners && this.hook(n);var r;return r = function (e) {
        var t,
            n = this,
            r = !1;return function () {
          return r ? t : (r = !0, t = e.apply(n, arguments));
        };
      }(function () {
        t.hasListeners && t.unhook(n);var e = t.events.indexOf(n);t.events.splice(e, 1);
      }), { dispose: function dispose() {
          r();
        } };
    }, e.prototype.onFirstListenerAdd = function () {
      var e = this;this.hasListeners = !0, this.events.forEach(function (t) {
        return e.hook(t);
      });
    }, e.prototype.onLastListenerRemove = function () {
      var e = this;this.hasListeners = !1, this.events.forEach(function (t) {
        return e.unhook(t);
      });
    }, e.prototype.hook = function (e) {
      var t = this;e.listener = e.event(function (e) {
        return t.emitter.fire(e);
      });
    }, e.prototype.unhook = function (e) {
      e.listener.dispose(), e.listener = null;
    }, e.prototype.dispose = function () {
      this.emitter.dispose();
    };
  }();!function () {
    function e() {
      this.buffers = [];
    }e.prototype.wrapEvent = function (e) {
      var t = this;return function (n, r, i) {
        return e(function (e) {
          var i = t.buffers[t.buffers.length - 1];i ? i.push(function () {
            return n.call(r, e);
          }) : n.call(r, e);
        }, void 0, i);
      };
    }, e.prototype.bufferEvents = function (e) {
      var t = [];this.buffers.push(t), e(), this.buffers.pop(), t.forEach(function (e) {
        return e();
      });
    };
  }();!function () {
    function e(e) {
      this._event = e;
    }Object.defineProperty(e.prototype, "event", { get: function get() {
        return this._event;
      }, enumerable: !0, configurable: !0 }), e.prototype.map = function (t) {
      return new e((n = this._event, r = t, function (e, t, i) {
        return void 0 === t && (t = null), n(function (n) {
          return e.call(t, r(n));
        }, null, i);
      }));var n, r;
    }, e.prototype.filter = function (t) {
      return new e((n = this._event, r = t, function (e, t, i) {
        return void 0 === t && (t = null), n(function (n) {
          return r(n) && e.call(t, n);
        }, null, i);
      }));var n, r;
    }, e.prototype.on = function (e, t, n) {
      return this._event(e, t, n);
    };
  }();!function () {
    function e() {
      this.emitter = new fe(), this.event = this.emitter.event, this.disposable = ue.None;
    }Object.defineProperty(e.prototype, "input", { set: function set(e) {
        this.disposable.dispose(), this.disposable = e(this.emitter.fire, this.emitter);
      }, enumerable: !0, configurable: !0 }), e.prototype.dispose = function () {
      this.disposable.dispose(), this.emitter.dispose();
    };
  }();var he,
      pe = function () {
    function e() {
      this._keyCodeToStr = [], this._strToKeyCode = Object.create(null);
    }return e.prototype.define = function (e, t) {
      this._keyCodeToStr[e] = t, this._strToKeyCode[t.toLowerCase()] = e;
    }, e.prototype.keyCodeToStr = function (e) {
      return this._keyCodeToStr[e];
    }, e.prototype.strToKeyCode = function (e) {
      return this._strToKeyCode[e.toLowerCase()] || 0;
    }, e;
  }(),
      de = new pe(),
      me = new pe(),
      ge = new pe();!function () {
    function e(e, t, n, r) {
      void 0 === n && (n = t), void 0 === r && (r = n), de.define(e, t), me.define(e, n), ge.define(e, r);
    }e(0, "unknown"), e(1, "Backspace"), e(2, "Tab"), e(3, "Enter"), e(4, "Shift"), e(5, "Ctrl"), e(6, "Alt"), e(7, "PauseBreak"), e(8, "CapsLock"), e(9, "Escape"), e(10, "Space"), e(11, "PageUp"), e(12, "PageDown"), e(13, "End"), e(14, "Home"), e(15, "LeftArrow", "Left"), e(16, "UpArrow", "Up"), e(17, "RightArrow", "Right"), e(18, "DownArrow", "Down"), e(19, "Insert"), e(20, "Delete"), e(21, "0"), e(22, "1"), e(23, "2"), e(24, "3"), e(25, "4"), e(26, "5"), e(27, "6"), e(28, "7"), e(29, "8"), e(30, "9"), e(31, "A"), e(32, "B"), e(33, "C"), e(34, "D"), e(35, "E"), e(36, "F"), e(37, "G"), e(38, "H"), e(39, "I"), e(40, "J"), e(41, "K"), e(42, "L"), e(43, "M"), e(44, "N"), e(45, "O"), e(46, "P"), e(47, "Q"), e(48, "R"), e(49, "S"), e(50, "T"), e(51, "U"), e(52, "V"), e(53, "W"), e(54, "X"), e(55, "Y"), e(56, "Z"), e(57, "Meta"), e(58, "ContextMenu"), e(59, "F1"), e(60, "F2"), e(61, "F3"), e(62, "F4"), e(63, "F5"), e(64, "F6"), e(65, "F7"), e(66, "F8"), e(67, "F9"), e(68, "F10"), e(69, "F11"), e(70, "F12"), e(71, "F13"), e(72, "F14"), e(73, "F15"), e(74, "F16"), e(75, "F17"), e(76, "F18"), e(77, "F19"), e(78, "NumLock"), e(79, "ScrollLock"), e(80, ";", ";", "OEM_1"), e(81, "=", "=", "OEM_PLUS"), e(82, ",", ",", "OEM_COMMA"), e(83, "-", "-", "OEM_MINUS"), e(84, ".", ".", "OEM_PERIOD"), e(85, "/", "/", "OEM_2"), e(86, "`", "`", "OEM_3"), e(110, "ABNT_C1"), e(111, "ABNT_C2"), e(87, "[", "[", "OEM_4"), e(88, "\\", "\\", "OEM_5"), e(89, "]", "]", "OEM_6"), e(90, "'", "'", "OEM_7"), e(91, "OEM_8"), e(92, "OEM_102"), e(93, "NumPad0"), e(94, "NumPad1"), e(95, "NumPad2"), e(96, "NumPad3"), e(97, "NumPad4"), e(98, "NumPad5"), e(99, "NumPad6"), e(100, "NumPad7"), e(101, "NumPad8"), e(102, "NumPad9"), e(103, "NumPad_Multiply"), e(104, "NumPad_Add"), e(105, "NumPad_Separator"), e(106, "NumPad_Subtract"), e(107, "NumPad_Decimal"), e(108, "NumPad_Divide");
  }(), function (e) {
    e.toString = function (e) {
      return de.keyCodeToStr(e);
    }, e.fromString = function (e) {
      return de.strToKeyCode(e);
    }, e.toUserSettingsUS = function (e) {
      return me.keyCodeToStr(e);
    }, e.toUserSettingsGeneral = function (e) {
      return ge.keyCodeToStr(e);
    }, e.fromUserSettings = function (e) {
      return me.strToKeyCode(e) || ge.strToKeyCode(e);
    };
  }(he || (he = {}));!function () {
    function e(e, t, n, r, i) {
      this.type = 1, this.ctrlKey = e, this.shiftKey = t, this.altKey = n, this.metaKey = r, this.keyCode = i;
    }e.prototype.equals = function (e) {
      return 1 === e.type && this.ctrlKey === e.ctrlKey && this.shiftKey === e.shiftKey && this.altKey === e.altKey && this.metaKey === e.metaKey && this.keyCode === e.keyCode;
    }, e.prototype.isModifierKey = function () {
      return 0 === this.keyCode || 5 === this.keyCode || 57 === this.keyCode || 6 === this.keyCode || 4 === this.keyCode;
    }, e.prototype.isDuplicateModifierCase = function () {
      return this.ctrlKey && 5 === this.keyCode || this.shiftKey && 4 === this.keyCode || this.altKey && 6 === this.keyCode || this.metaKey && 57 === this.keyCode;
    };
  }();var ve,
      ye = function () {
    var e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var n in t) {
        t.hasOwnProperty(n) && (e[n] = t[n]);
      }
    };return function (t, n) {
      function r() {
        this.constructor = t;
      }e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
    };
  }();!function (e) {
    e[e.LTR = 0] = "LTR", e[e.RTL = 1] = "RTL";
  }(ve || (ve = {}));var be,
      _e,
      Ce = function (e) {
    function t(t, n, r, i) {
      var o = e.call(this, t, n, r, i) || this;return o.selectionStartLineNumber = t, o.selectionStartColumn = n, o.positionLineNumber = r, o.positionColumn = i, o;
    }return ye(t, e), t.prototype.clone = function () {
      return new t(this.selectionStartLineNumber, this.selectionStartColumn, this.positionLineNumber, this.positionColumn);
    }, t.prototype.toString = function () {
      return "[" + this.selectionStartLineNumber + "," + this.selectionStartColumn + " -> " + this.positionLineNumber + "," + this.positionColumn + "]";
    }, t.prototype.equalsSelection = function (e) {
      return t.selectionsEqual(this, e);
    }, t.selectionsEqual = function (e, t) {
      return e.selectionStartLineNumber === t.selectionStartLineNumber && e.selectionStartColumn === t.selectionStartColumn && e.positionLineNumber === t.positionLineNumber && e.positionColumn === t.positionColumn;
    }, t.prototype.getDirection = function () {
      return this.selectionStartLineNumber === this.startLineNumber && this.selectionStartColumn === this.startColumn ? ve.LTR : ve.RTL;
    }, t.prototype.setEndPosition = function (e, n) {
      return this.getDirection() === ve.LTR ? new t(this.startLineNumber, this.startColumn, e, n) : new t(e, n, this.startLineNumber, this.startColumn);
    }, t.prototype.getPosition = function () {
      return new S(this.positionLineNumber, this.positionColumn);
    }, t.prototype.setStartPosition = function (e, n) {
      return this.getDirection() === ve.LTR ? new t(e, n, this.endLineNumber, this.endColumn) : new t(this.endLineNumber, this.endColumn, e, n);
    }, t.fromPositions = function (e, n) {
      return void 0 === n && (n = e), new t(e.lineNumber, e.column, n.lineNumber, n.column);
    }, t.liftSelection = function (e) {
      return new t(e.selectionStartLineNumber, e.selectionStartColumn, e.positionLineNumber, e.positionColumn);
    }, t.selectionsArrEqual = function (e, t) {
      if (e && !t || !e && t) return !1;if (!e && !t) return !0;if (e.length !== t.length) return !1;for (var n = 0, r = e.length; n < r; n++) {
        if (!this.selectionsEqual(e[n], t[n])) return !1;
      }return !0;
    }, t.isISelection = function (e) {
      return e && "number" == typeof e.selectionStartLineNumber && "number" == typeof e.selectionStartColumn && "number" == typeof e.positionLineNumber && "number" == typeof e.positionColumn;
    }, t.createWithDirection = function (e, n, r, i, o) {
      return o === ve.LTR ? new t(e, n, r, i) : new t(r, i, e, n);
    }, t;
  }(E),
      Se = Object.freeze(function (e, t) {
    var n = setTimeout(e.bind(t), 0);return { dispose: function dispose() {
        clearTimeout(n);
      } };
  });(_e = be || (be = {})).None = Object.freeze({ isCancellationRequested: !1, onCancellationRequested: se.None }), _e.Cancelled = Object.freeze({ isCancellationRequested: !0, onCancellationRequested: Se });var Ee,
      Ae,
      xe = function () {
    function e() {
      this._isCancelled = !1;
    }return e.prototype.cancel = function () {
      this._isCancelled || (this._isCancelled = !0, this._emitter && (this._emitter.fire(void 0), this.dispose()));
    }, Object.defineProperty(e.prototype, "isCancellationRequested", { get: function get() {
        return this._isCancelled;
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "onCancellationRequested", { get: function get() {
        return this._isCancelled ? Se : (this._emitter || (this._emitter = new fe()), this._emitter.event);
      }, enumerable: !0, configurable: !0 }), e.prototype.dispose = function () {
      this._emitter && (this._emitter.dispose(), this._emitter = void 0);
    }, e;
  }(),
      Ne = function () {
    function e() {}return Object.defineProperty(e.prototype, "token", { get: function get() {
        return this._token || (this._token = new xe()), this._token;
      }, enumerable: !0, configurable: !0 }), e.prototype.cancel = function () {
      this._token ? this._token instanceof xe && this._token.cancel() : this._token = be.Cancelled;
    }, e.prototype.dispose = function () {
      this._token ? this._token instanceof xe && this._token.dispose() : this._token = be.None;
    }, e;
  }(),
      ke = function () {
    function e(e, t, n) {
      this.offset = 0 | e, this.type = t, this.language = n;
    }return e.prototype.toString = function () {
      return "(" + this.offset + ", " + this.type + ")";
    }, e;
  }();!function (e) {
    e[e.Unnecessary = 1] = "Unnecessary";
  }(Ee || (Ee = {})), function (e) {
    e[e.Hint = 1] = "Hint", e[e.Info = 2] = "Info", e[e.Warning = 4] = "Warning", e[e.Error = 8] = "Error";
  }(Ae || (Ae = {}));var we,
      Le = function () {
    function e() {}return e.chord = function (e, t) {
      return function (e, t) {
        return (e | (65535 & t) << 16 >>> 0) >>> 0;
      }(e, t);
    }, e.CtrlCmd = 2048, e.Shift = 1024, e.Alt = 512, e.WinCtrl = 256, e;
  }();!function (e) {
    e[e.Unknown = 0] = "Unknown", e[e.Backspace = 1] = "Backspace", e[e.Tab = 2] = "Tab", e[e.Enter = 3] = "Enter", e[e.Shift = 4] = "Shift", e[e.Ctrl = 5] = "Ctrl", e[e.Alt = 6] = "Alt", e[e.PauseBreak = 7] = "PauseBreak", e[e.CapsLock = 8] = "CapsLock", e[e.Escape = 9] = "Escape", e[e.Space = 10] = "Space", e[e.PageUp = 11] = "PageUp", e[e.PageDown = 12] = "PageDown", e[e.End = 13] = "End", e[e.Home = 14] = "Home", e[e.LeftArrow = 15] = "LeftArrow", e[e.UpArrow = 16] = "UpArrow", e[e.RightArrow = 17] = "RightArrow", e[e.DownArrow = 18] = "DownArrow", e[e.Insert = 19] = "Insert", e[e.Delete = 20] = "Delete", e[e.KEY_0 = 21] = "KEY_0", e[e.KEY_1 = 22] = "KEY_1", e[e.KEY_2 = 23] = "KEY_2", e[e.KEY_3 = 24] = "KEY_3", e[e.KEY_4 = 25] = "KEY_4", e[e.KEY_5 = 26] = "KEY_5", e[e.KEY_6 = 27] = "KEY_6", e[e.KEY_7 = 28] = "KEY_7", e[e.KEY_8 = 29] = "KEY_8", e[e.KEY_9 = 30] = "KEY_9", e[e.KEY_A = 31] = "KEY_A", e[e.KEY_B = 32] = "KEY_B", e[e.KEY_C = 33] = "KEY_C", e[e.KEY_D = 34] = "KEY_D", e[e.KEY_E = 35] = "KEY_E", e[e.KEY_F = 36] = "KEY_F", e[e.KEY_G = 37] = "KEY_G", e[e.KEY_H = 38] = "KEY_H", e[e.KEY_I = 39] = "KEY_I", e[e.KEY_J = 40] = "KEY_J", e[e.KEY_K = 41] = "KEY_K", e[e.KEY_L = 42] = "KEY_L", e[e.KEY_M = 43] = "KEY_M", e[e.KEY_N = 44] = "KEY_N", e[e.KEY_O = 45] = "KEY_O", e[e.KEY_P = 46] = "KEY_P", e[e.KEY_Q = 47] = "KEY_Q", e[e.KEY_R = 48] = "KEY_R", e[e.KEY_S = 49] = "KEY_S", e[e.KEY_T = 50] = "KEY_T", e[e.KEY_U = 51] = "KEY_U", e[e.KEY_V = 52] = "KEY_V", e[e.KEY_W = 53] = "KEY_W", e[e.KEY_X = 54] = "KEY_X", e[e.KEY_Y = 55] = "KEY_Y", e[e.KEY_Z = 56] = "KEY_Z", e[e.Meta = 57] = "Meta", e[e.ContextMenu = 58] = "ContextMenu", e[e.F1 = 59] = "F1", e[e.F2 = 60] = "F2", e[e.F3 = 61] = "F3", e[e.F4 = 62] = "F4", e[e.F5 = 63] = "F5", e[e.F6 = 64] = "F6", e[e.F7 = 65] = "F7", e[e.F8 = 66] = "F8", e[e.F9 = 67] = "F9", e[e.F10 = 68] = "F10", e[e.F11 = 69] = "F11", e[e.F12 = 70] = "F12", e[e.F13 = 71] = "F13", e[e.F14 = 72] = "F14", e[e.F15 = 73] = "F15", e[e.F16 = 74] = "F16", e[e.F17 = 75] = "F17", e[e.F18 = 76] = "F18", e[e.F19 = 77] = "F19", e[e.NumLock = 78] = "NumLock", e[e.ScrollLock = 79] = "ScrollLock", e[e.US_SEMICOLON = 80] = "US_SEMICOLON", e[e.US_EQUAL = 81] = "US_EQUAL", e[e.US_COMMA = 82] = "US_COMMA", e[e.US_MINUS = 83] = "US_MINUS", e[e.US_DOT = 84] = "US_DOT", e[e.US_SLASH = 85] = "US_SLASH", e[e.US_BACKTICK = 86] = "US_BACKTICK", e[e.US_OPEN_SQUARE_BRACKET = 87] = "US_OPEN_SQUARE_BRACKET", e[e.US_BACKSLASH = 88] = "US_BACKSLASH", e[e.US_CLOSE_SQUARE_BRACKET = 89] = "US_CLOSE_SQUARE_BRACKET", e[e.US_QUOTE = 90] = "US_QUOTE", e[e.OEM_8 = 91] = "OEM_8", e[e.OEM_102 = 92] = "OEM_102", e[e.NUMPAD_0 = 93] = "NUMPAD_0", e[e.NUMPAD_1 = 94] = "NUMPAD_1", e[e.NUMPAD_2 = 95] = "NUMPAD_2", e[e.NUMPAD_3 = 96] = "NUMPAD_3", e[e.NUMPAD_4 = 97] = "NUMPAD_4", e[e.NUMPAD_5 = 98] = "NUMPAD_5", e[e.NUMPAD_6 = 99] = "NUMPAD_6", e[e.NUMPAD_7 = 100] = "NUMPAD_7", e[e.NUMPAD_8 = 101] = "NUMPAD_8", e[e.NUMPAD_9 = 102] = "NUMPAD_9", e[e.NUMPAD_MULTIPLY = 103] = "NUMPAD_MULTIPLY", e[e.NUMPAD_ADD = 104] = "NUMPAD_ADD", e[e.NUMPAD_SEPARATOR = 105] = "NUMPAD_SEPARATOR", e[e.NUMPAD_SUBTRACT = 106] = "NUMPAD_SUBTRACT", e[e.NUMPAD_DECIMAL = 107] = "NUMPAD_DECIMAL", e[e.NUMPAD_DIVIDE = 108] = "NUMPAD_DIVIDE", e[e.KEY_IN_COMPOSITION = 109] = "KEY_IN_COMPOSITION", e[e.ABNT_C1 = 110] = "ABNT_C1", e[e.ABNT_C2 = 111] = "ABNT_C2", e[e.MAX_VALUE = 112] = "MAX_VALUE";
  }(we || (we = {}));var Pe = function () {
    var e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var n in t) {
        t.hasOwnProperty(n) && (e[n] = t[n]);
      }
    };return function (t, n) {
      function r() {
        this.constructor = t;
      }e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
    };
  }(),
      Oe = function (e) {
    function t() {
      return null !== e && e.apply(this, arguments) || this;
    }return Pe(t, e), Object.defineProperty(t.prototype, "uri", { get: function get() {
        return this._uri;
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "version", { get: function get() {
        return this._versionId;
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "eol", { get: function get() {
        return this._eol;
      }, enumerable: !0, configurable: !0 }), t.prototype.getValue = function () {
      return this.getText();
    }, t.prototype.getLinesContent = function () {
      return this._lines.slice(0);
    }, t.prototype.getLineCount = function () {
      return this._lines.length;
    }, t.prototype.getLineContent = function (e) {
      return this._lines[e - 1];
    }, t.prototype.getWordAtPosition = function (e, t) {
      var n = function (e, t, n, r) {
        t.lastIndex = 0;var i = t.exec(n);if (!i) return null;var o = i[0].indexOf(" ") >= 0 ? function (e, t, n, r) {
          var i,
              o = e - 1 - r;for (t.lastIndex = 0; i = t.exec(n);) {
            if (i.index > o) return null;if (t.lastIndex >= o) return { word: i[0], startColumn: r + 1 + i.index, endColumn: r + 1 + t.lastIndex };
          }return null;
        }(e, t, n, r) : function (e, t, n, r) {
          var i,
              o = e - 1 - r,
              a = n.lastIndexOf(" ", o - 1) + 1,
              s = n.indexOf(" ", o);for (-1 === s && (s = n.length), t.lastIndex = a; i = t.exec(n);) {
            if (i.index <= o && t.lastIndex >= o) return { word: i[0], startColumn: r + 1 + i.index, endColumn: r + 1 + t.lastIndex };
          }return null;
        }(e, t, n, r);return t.lastIndex = 0, o;
      }(e.column, function (e) {
        var t = X;if (e && e instanceof RegExp) if (e.global) t = e;else {
          var n = "g";e.ignoreCase && (n += "i"), e.multiline && (n += "m"), t = new RegExp(e.source, n);
        }return t.lastIndex = 0, t;
      }(t), this._lines[e.lineNumber - 1], 0);return n ? new E(e.lineNumber, n.startColumn, e.lineNumber, n.endColumn) : null;
    }, t.prototype.getWordUntilPosition = function (e, t) {
      var n = this.getWordAtPosition(e, t);return n ? { word: this._lines[e.lineNumber - 1].substring(n.startColumn - 1, e.column - 1), startColumn: n.startColumn, endColumn: e.column } : { word: "", startColumn: e.column, endColumn: e.column };
    }, t.prototype.createWordIterator = function (e) {
      var t,
          n = this,
          r = { done: !1, value: "" },
          i = 0,
          o = 0,
          a = [],
          s = function s() {
        if (o < a.length) r.done = !1, r.value = t.substring(a[o].start, a[o].end), o += 1;else {
          if (!(i >= n._lines.length)) return t = n._lines[i], a = n._wordenize(t, e), o = 0, i += 1, s();r.done = !0, r.value = void 0;
        }return r;
      };return { next: s };
    }, t.prototype._wordenize = function (e, t) {
      var n,
          r = [];for (t.lastIndex = 0; (n = t.exec(e)) && 0 !== n[0].length;) {
        r.push({ start: n.index, end: n.index + n[0].length });
      }return r;
    }, t.prototype.getValueInRange = function (e) {
      if ((e = this._validateRange(e)).startLineNumber === e.endLineNumber) return this._lines[e.startLineNumber - 1].substring(e.startColumn - 1, e.endColumn - 1);var t = this._eol,
          n = e.startLineNumber - 1,
          r = e.endLineNumber - 1,
          i = [];i.push(this._lines[n].substring(e.startColumn - 1));for (var o = n + 1; o < r; o++) {
        i.push(this._lines[o]);
      }return i.push(this._lines[r].substring(0, e.endColumn - 1)), i.join(t);
    }, t.prototype.offsetAt = function (e) {
      return e = this._validatePosition(e), this._ensureLineStarts(), this._lineStarts.getAccumulatedValue(e.lineNumber - 2) + (e.column - 1);
    }, t.prototype.positionAt = function (e) {
      e = Math.floor(e), e = Math.max(0, e), this._ensureLineStarts();var t = this._lineStarts.getIndexOf(e),
          n = this._lines[t.index].length;return { lineNumber: 1 + t.index, column: 1 + Math.min(t.remainder, n) };
    }, t.prototype._validateRange = function (e) {
      var t = this._validatePosition({ lineNumber: e.startLineNumber, column: e.startColumn }),
          n = this._validatePosition({ lineNumber: e.endLineNumber, column: e.endColumn });return t.lineNumber !== e.startLineNumber || t.column !== e.startColumn || n.lineNumber !== e.endLineNumber || n.column !== e.endColumn ? { startLineNumber: t.lineNumber, startColumn: t.column, endLineNumber: n.lineNumber, endColumn: n.column } : e;
    }, t.prototype._validatePosition = function (e) {
      if (!S.isIPosition(e)) throw new Error("bad position");var t = e.lineNumber,
          n = e.column,
          r = !1;if (t < 1) t = 1, n = 1, r = !0;else if (t > this._lines.length) t = this._lines.length, n = this._lines[t - 1].length + 1, r = !0;else {
        var i = this._lines[t - 1].length + 1;n < 1 ? (n = 1, r = !0) : n > i && (n = i, r = !0);
      }return r ? { lineNumber: t, column: n } : e;
    }, t;
  }(B),
      Te = function (e) {
    function t(t) {
      var n = e.call(this, t) || this;return n._models = Object.create(null), n;
    }return Pe(t, e), t.prototype.dispose = function () {
      this._models = Object.create(null);
    }, t.prototype._getModel = function (e) {
      return this._models[e];
    }, t.prototype._getModels = function () {
      var e = this,
          t = [];return Object.keys(this._models).forEach(function (n) {
        return t.push(e._models[n]);
      }), t;
    }, t.prototype.acceptNewModel = function (e) {
      this._models[e.url] = new Oe(d.parse(e.url), e.lines, e.EOL, e.versionId);
    }, t.prototype.acceptModelChanged = function (e, t) {
      this._models[e] && this._models[e].onEvents(t);
    }, t.prototype.acceptRemovedModel = function (e) {
      this._models[e] && delete this._models[e];
    }, t;
  }(function () {
    function e(e) {
      this._foreignModuleFactory = e, this._foreignModule = null;
    }return e.prototype.computeDiff = function (e, t, n) {
      var r = this._getModel(e),
          i = this._getModel(t);if (!r || !i) return null;var o = r.getLinesContent(),
          a = i.getLinesContent(),
          s = new F(o, a, { shouldComputeCharChanges: !0, shouldPostProcessCharChanges: !0, shouldIgnoreTrimWhitespace: n, shouldMakePrettyDiff: !0 });return C.a.as(s.computeDiff());
    }, e.prototype.computeMoreMinimalEdits = function (t, n) {
      var r = this._getModel(t);if (!r) return C.a.as(n);for (var i, o = [], a = 0, s = n; a < s.length; a++) {
        var u = s[a],
            c = u.range,
            l = u.text,
            f = u.eol;if ("number" == typeof f && (i = f), c) {
          var h = r.getValueInRange(c);if (h !== (l = l.replace(/\r\n|\n|\r/g, r.eol))) if (Math.max(l.length, h.length) > e._diffLimit) o.push({ range: c, text: l });else for (var p = N(h, l, !1), d = r.offsetAt(E.lift(c).getStartPosition()), m = 0, g = p; m < g.length; m++) {
            var v = g[m],
                y = r.positionAt(d + v.originalStart),
                b = r.positionAt(d + v.originalStart + v.originalLength),
                _ = { text: l.substr(v.modifiedStart, v.modifiedLength), range: { startLineNumber: y.lineNumber, startColumn: y.column, endLineNumber: b.lineNumber, endColumn: b.column } };r.getValueInRange(_.range) !== _.text && o.push(_);
          }
        }
      }return "number" == typeof i && o.push({ eol: i, text: void 0, range: void 0 }), C.a.as(o);
    }, e.prototype.computeLinks = function (e) {
      var t = this._getModel(e);return t ? C.a.as(function (e) {
        return e && "function" == typeof e.getLineCount && "function" == typeof e.getLineContent ? z.computeLinks(e) : [];
      }(t)) : null;
    }, e.prototype.textualSuggest = function (t, n, r, i) {
      var o = this._getModel(t);if (o) {
        var a = [],
            s = new RegExp(r, i),
            u = o.getWordUntilPosition(n, s).word,
            c = Object.create(null);c[u] = !0;for (var l = o.createWordIterator(s), f = l.next(); !f.done && a.length <= e._suggestionsLimit; f = l.next()) {
          var h = f.value;c[h] || (c[h] = !0, isNaN(Number(h)) && a.push({ type: "text", label: h, insertText: h, noAutoAccept: !0, overwriteBefore: u.length }));
        }return C.a.as({ suggestions: a });
      }
    }, e.prototype.navigateValueSet = function (e, t, n, r, i) {
      var o = this._getModel(e);if (!o) return null;var a = new RegExp(r, i);t.startColumn === t.endColumn && (t = { startLineNumber: t.startLineNumber, startColumn: t.startColumn, endLineNumber: t.endLineNumber, endColumn: t.endColumn + 1 });var s = o.getValueInRange(t),
          u = o.getWordAtPosition({ lineNumber: t.startLineNumber, column: t.startColumn }, a),
          c = null;null !== u && (c = o.getValueInRange(u));var l = G.INSTANCE.navigateValueSet(t, s, u, c, n);return C.a.as(l);
    }, e.prototype.loadForeignModule = function (e, t) {
      var n = this,
          r = { getMirrorModels: function getMirrorModels() {
          return n._getModels();
        } };if (this._foreignModuleFactory) {
        this._foreignModule = this._foreignModuleFactory(r, t);var i = [];for (var o in this._foreignModule) {
          "function" == typeof this._foreignModule[o] && i.push(o);
        }return C.a.as(i);
      }return C.a.wrapError(new Error("Unexpected usage"));
    }, e.prototype.fmr = function (e, t) {
      if (!this._foreignModule || "function" != typeof this._foreignModule[e]) return C.a.wrapError(new Error("Missing requestHandler or method: " + e));try {
        return C.a.as(this._foreignModule[e].apply(this._foreignModule, t));
      } catch (e) {
        return C.a.wrapError(e);
      }
    }, e._diffLimit = 1e4, e._suggestionsLimit = 1e4, e;
  }());"function" == typeof importScripts && (o.a.monaco = { editor: void 0, languages: void 0, CancellationTokenSource: Ne, Emitter: fe, KeyCode: we, KeyMod: Le, Position: S, Range: E, Selection: Ce, SelectionDirection: ve, MarkerSeverity: Ae, MarkerTag: Ee, Promise: C.a, Uri: d, Token: ke });var Me = function () {
    var e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var n in t) {
        t.hasOwnProperty(n) && (e[n] = t[n]);
      }
    };return function (t, n) {
      function r() {
        this.constructor = t;
      }e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
    };
  }();(function () {
    function e() {
      this.activePromise = null, this.queuedPromise = null, this.queuedPromiseFactory = null;
    }e.prototype.queue = function (e) {
      var t = this;if (this.activePromise) {
        if (this.queuedPromiseFactory = e, !this.queuedPromise) {
          var n = function n() {
            t.queuedPromise = null;var e = t.queue(t.queuedPromiseFactory);return t.queuedPromiseFactory = null, e;
          };this.queuedPromise = new C.a(function (e, r, i) {
            t.activePromise.then(n, n, i).done(e);
          }, function () {
            t.activePromise.cancel();
          });
        }return new C.a(function (e, n, r) {
          t.queuedPromise.then(e, n, r);
        }, function () {});
      }return this.activePromise = e(), new C.a(function (e, n, r) {
        t.activePromise.done(function (n) {
          t.activePromise = null, e(n);
        }, function (e) {
          t.activePromise = null, n(e);
        }, r);
      }, function () {
        t.activePromise.cancel();
      });
    };
  })(), function () {
    function e(e) {
      this.defaultDelay = e, this.timeout = null, this.completionPromise = null, this.onSuccess = null, this.task = null;
    }e.prototype.trigger = function (e, t) {
      var n = this;return void 0 === t && (t = this.defaultDelay), this.task = e, this.cancelTimeout(), this.completionPromise || (this.completionPromise = new C.a(function (e) {
        n.onSuccess = e;
      }, function () {}).then(function () {
        n.completionPromise = null, n.onSuccess = null;var e = n.task;return n.task = null, e();
      })), this.timeout = setTimeout(function () {
        n.timeout = null, n.onSuccess(null);
      }, t), this.completionPromise;
    }, e.prototype.cancel = function () {
      this.cancelTimeout(), this.completionPromise && (this.completionPromise.cancel(), this.completionPromise = null);
    }, e.prototype.cancelTimeout = function () {
      null !== this.timeout && (clearTimeout(this.timeout), this.timeout = null);
    };
  }();var Ie = function (e) {
    function t(t) {
      var n, r, i, o;return n = e.call(this, function (e, t, n) {
        r = e, i = t, o = n;
      }, function () {
        i(oe());
      }) || this, t.then(r, i, o), n;
    }return Me(t, e), t;
  }(C.a);(function (e) {
    function t() {
      var t = e.call(this) || this;return t._token = -1, t;
    }Me(t, e), t.prototype.dispose = function () {
      this.cancel(), e.prototype.dispose.call(this);
    }, t.prototype.cancel = function () {
      -1 !== this._token && (clearTimeout(this._token), this._token = -1);
    }, t.prototype.cancelAndSet = function (e, t) {
      var n = this;this.cancel(), this._token = setTimeout(function () {
        n._token = -1, e();
      }, t);
    }, t.prototype.setIfNotSet = function (e, t) {
      var n = this;-1 === this._token && (this._token = setTimeout(function () {
        n._token = -1, e();
      }, t));
    };
  })(ue), function (e) {
    function t() {
      var t = e.call(this) || this;return t._token = -1, t;
    }Me(t, e), t.prototype.dispose = function () {
      this.cancel(), e.prototype.dispose.call(this);
    }, t.prototype.cancel = function () {
      -1 !== this._token && (clearInterval(this._token), this._token = -1);
    }, t.prototype.cancelAndSet = function (e, t) {
      this.cancel(), this._token = setInterval(function () {
        e();
      }, t);
    };
  }(ue), function () {
    function e(e, t) {
      this.timeoutToken = -1, this.runner = e, this.timeout = t, this.timeoutHandler = this.onTimeout.bind(this);
    }e.prototype.dispose = function () {
      this.cancel(), this.runner = null;
    }, e.prototype.cancel = function () {
      this.isScheduled() && (clearTimeout(this.timeoutToken), this.timeoutToken = -1);
    }, e.prototype.schedule = function (e) {
      void 0 === e && (e = this.timeout), this.cancel(), this.timeoutToken = setTimeout(this.timeoutHandler, e);
    }, e.prototype.isScheduled = function () {
      return -1 !== this.timeoutToken;
    }, e.prototype.onTimeout = function () {
      this.timeoutToken = -1, this.runner && this.doRun();
    }, e.prototype.doRun = function () {
      this.runner();
    };
  }();var Ve = function () {
    var e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var n in t) {
        t.hasOwnProperty(n) && (e[n] = t[n]);
      }
    };return function (t, n) {
      function r() {
        this.constructor = t;
      }e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
    };
  }(),
      je = "$initialize";var De = function () {
    function e(e) {
      this._workerId = -1, this._handler = e, this._lastSentReq = 0, this._pendingReplies = Object.create(null);
    }return e.prototype.setWorkerId = function (e) {
      this._workerId = e;
    }, e.prototype.sendMessage = function (e, t) {
      var n = String(++this._lastSentReq),
          r = { c: null, e: null },
          i = new C.a(function (e, t) {
        r.c = e, r.e = t;
      }, function () {});return this._pendingReplies[n] = r, this._send({ vsWorker: this._workerId, req: n, method: e, args: t }), i;
    }, e.prototype.handleMessage = function (e) {
      var t;try {
        t = JSON.parse(e);
      } catch (e) {}t && t.vsWorker && (-1 !== this._workerId && t.vsWorker !== this._workerId || this._handleMessage(t));
    }, e.prototype._handleMessage = function (e) {
      var t = this;if (e.seq) {
        var n = e;if (!this._pendingReplies[n.seq]) return void console.warn("Got reply to unknown seq");var r = this._pendingReplies[n.seq];if (delete this._pendingReplies[n.seq], n.err) {
          var i = n.err;return n.err.$isError && ((i = new Error()).name = n.err.name, i.message = n.err.message, i.stack = n.err.stack), void r.e(i);
        }r.c(n.res);
      } else {
        var o = e,
            a = o.req;this._handler.handleMessage(o.method, o.args).then(function (e) {
          t._send({ vsWorker: t._workerId, seq: a, res: e, err: void 0 });
        }, function (e) {
          e.detail instanceof Error && (e.detail = ne(e.detail)), t._send({ vsWorker: t._workerId, seq: a, res: void 0, err: ne(e) });
        });
      }
    }, e.prototype._send = function (e) {
      var t = JSON.stringify(e);this._handler.sendMessage(t);
    }, e;
  }(),
      Fe = (function (e) {
    function t(t, n) {
      var r = e.call(this) || this,
          i = null,
          o = null;r._worker = r._register(t.create("vs/base/common/worker/simpleWorker", function (e) {
        r._protocol.handleMessage(e);
      }, function (e) {
        o(e);
      })), r._protocol = new De({ sendMessage: function sendMessage(e) {
          r._worker.postMessage(e);
        }, handleMessage: function handleMessage(e, t) {
          return C.a.as(null);
        } }), r._protocol.setWorkerId(r._worker.getId());var a = null;void 0 !== self.require && "function" == typeof self.require.getConfig ? a = self.require.getConfig() : void 0 !== self.requirejs && (a = self.requirejs.s.contexts._.config), r._lazyProxy = new C.a(function (e, t) {
        i = e, o = t;
      }, function () {}), r._onModuleLoaded = r._protocol.sendMessage(je, [r._worker.getId(), n, a]), r._onModuleLoaded.then(function (e) {
        for (var t = {}, n = 0; n < e.length; n++) {
          t[e[n]] = u(e[n], s);
        }i(t);
      }, function (e) {
        o(e), r._onError("Worker failed to load " + n, e);
      });var s = function s(e, t) {
        return r._request(e, t);
      },
          u = function u(e, t) {
        return function () {
          var n = Array.prototype.slice.call(arguments, 0);return t(e, n);
        };
      };return r;
    }Ve(t, e), t.prototype.getProxyObject = function () {
      return new Ie(this._lazyProxy);
    }, t.prototype._request = function (e, t) {
      var n = this;return new C.a(function (r, i) {
        n._onModuleLoaded.then(function () {
          n._protocol.sendMessage(e, t).then(r, i);
        }, i);
      }, function () {});
    }, t.prototype._onError = function (e, t) {
      console.error(e), console.info(t);
    };
  }(ue), function () {
    function e(e, t) {
      var n = this;this._requestHandler = t, this._protocol = new De({ sendMessage: function sendMessage(t) {
          e(t);
        }, handleMessage: function handleMessage(e, t) {
          return n._handleMessage(e, t);
        } });
    }return e.prototype.onmessage = function (e) {
      this._protocol.handleMessage(e);
    }, e.prototype._handleMessage = function (e, t) {
      if (e === je) return this.initialize(t[0], t[1], t[2]);if (!this._requestHandler || "function" != typeof this._requestHandler[e]) return C.a.wrapError(new Error("Missing requestHandler or method: " + e));try {
        return C.a.as(this._requestHandler[e].apply(this._requestHandler, t));
      } catch (e) {
        return C.a.wrapError(e);
      }
    }, e.prototype.initialize = function (e, t, n) {
      var r,
          i,
          o = this;if (this._protocol.setWorkerId(e), this._requestHandler) {
        var a = [];for (var s in this._requestHandler) {
          "function" == typeof this._requestHandler[s] && a.push(s);
        }return C.a.as(a);
      }n && (void 0 !== n.baseUrl && delete n.baseUrl, void 0 !== n.paths && void 0 !== n.paths.vs && delete n.paths.vs, n.catchError = !0, self.require.config(n));var u = new C.a(function (e, t) {
        r = e, i = t;
      });return self.require([t], function () {
        for (var e = [], t = 0; t < arguments.length; t++) {
          e[t] = arguments[t];
        }var n = e[0];o._requestHandler = n.create();var i = [];for (var a in o._requestHandler) {
          "function" == typeof o._requestHandler[a] && i.push(a);
        }r(i);
      }, i), u;
    }, e;
  }());var Re,
      Ue,
      We,
      qe,
      Ke,
      Be,
      Ye,
      $e,
      Je,
      He,
      ze,
      Ge,
      Qe,
      Xe,
      Ze,
      et = !1;function tt(e) {
    if (!et) {
      et = !0;var t = new Te(e),
          n = new Fe(function (e) {
        self.postMessage(e);
      }, t);self.onmessage = function (e) {
        n.onmessage(e.data);
      };
    }
  }self.onmessage = function (e) {
    et || tt(null);
  }, function (e) {
    e.create = function (e, t) {
      return { line: e, character: t };
    }, e.is = function (e) {
      var t = e;return Lt.objectLiteral(t) && Lt.number(t.line) && Lt.number(t.character);
    };
  }(Re || (Re = {})), function (e) {
    e.create = function (e, t, n, r) {
      if (Lt.number(e) && Lt.number(t) && Lt.number(n) && Lt.number(r)) return { start: Re.create(e, t), end: Re.create(n, r) };if (Re.is(e) && Re.is(t)) return { start: e, end: t };throw new Error("Range#create called with invalid arguments[" + e + ", " + t + ", " + n + ", " + r + "]");
    }, e.is = function (e) {
      var t = e;return Lt.objectLiteral(t) && Re.is(t.start) && Re.is(t.end);
    };
  }(Ue || (Ue = {})), function (e) {
    e.create = function (e, t) {
      return { uri: e, range: t };
    }, e.is = function (e) {
      var t = e;return Lt.defined(t) && Ue.is(t.range) && (Lt.string(t.uri) || Lt.undefined(t.uri));
    };
  }(We || (We = {})), function (e) {
    e.create = function (e, t, n, r) {
      return { red: e, green: t, blue: n, alpha: r };
    }, e.is = function (e) {
      var t = e;return Lt.number(t.red) && Lt.number(t.green) && Lt.number(t.blue) && Lt.number(t.alpha);
    };
  }(qe || (qe = {})), function (e) {
    e.create = function (e, t) {
      return { range: e, color: t };
    }, e.is = function (e) {
      var t = e;return Ue.is(t.range) && qe.is(t.color);
    };
  }(Ke || (Ke = {})), function (e) {
    e.create = function (e, t, n) {
      return { label: e, textEdit: t, additionalTextEdits: n };
    }, e.is = function (e) {
      var t = e;return Lt.string(t.label) && (Lt.undefined(t.textEdit) || Qe.is(t)) && (Lt.undefined(t.additionalTextEdits) || Lt.typedArray(t.additionalTextEdits, Qe.is));
    };
  }(Be || (Be = {})), function (e) {
    e.Comment = "comment", e.Imports = "imports", e.Region = "region";
  }(Ye || (Ye = {})), function (e) {
    e.create = function (e, t, n, r, i) {
      var o = { startLine: e, endLine: t };return Lt.defined(n) && (o.startCharacter = n), Lt.defined(r) && (o.endCharacter = r), Lt.defined(i) && (o.kind = i), o;
    }, e.is = function (e) {
      var t = e;return Lt.number(t.startLine) && Lt.number(t.startLine) && (Lt.undefined(t.startCharacter) || Lt.number(t.startCharacter)) && (Lt.undefined(t.endCharacter) || Lt.number(t.endCharacter)) && (Lt.undefined(t.kind) || Lt.string(t.kind));
    };
  }($e || ($e = {})), function (e) {
    e.create = function (e, t) {
      return { location: e, message: t };
    }, e.is = function (e) {
      var t = e;return Lt.defined(t) && We.is(t.location) && Lt.string(t.message);
    };
  }(Je || (Je = {})), function (e) {
    e.Error = 1, e.Warning = 2, e.Information = 3, e.Hint = 4;
  }(He || (He = {})), function (e) {
    e.create = function (e, t, n, r, i, o) {
      var a = { range: e, message: t };return Lt.defined(n) && (a.severity = n), Lt.defined(r) && (a.code = r), Lt.defined(i) && (a.source = i), Lt.defined(o) && (a.relatedInformation = o), a;
    }, e.is = function (e) {
      var t = e;return Lt.defined(t) && Ue.is(t.range) && Lt.string(t.message) && (Lt.number(t.severity) || Lt.undefined(t.severity)) && (Lt.number(t.code) || Lt.string(t.code) || Lt.undefined(t.code)) && (Lt.string(t.source) || Lt.undefined(t.source)) && (Lt.undefined(t.relatedInformation) || Lt.typedArray(t.relatedInformation, Je.is));
    };
  }(ze || (ze = {})), function (e) {
    e.create = function (e, t) {
      for (var n = [], r = 2; r < arguments.length; r++) {
        n[r - 2] = arguments[r];
      }var i = { title: e, command: t };return Lt.defined(n) && n.length > 0 && (i.arguments = n), i;
    }, e.is = function (e) {
      var t = e;return Lt.defined(t) && Lt.string(t.title) && Lt.string(t.command);
    };
  }(Ge || (Ge = {})), function (e) {
    e.replace = function (e, t) {
      return { range: e, newText: t };
    }, e.insert = function (e, t) {
      return { range: { start: e, end: e }, newText: t };
    }, e.del = function (e) {
      return { range: e, newText: "" };
    }, e.is = function (e) {
      var t = e;return Lt.objectLiteral(t) && Lt.string(t.newText) && Ue.is(t.range);
    };
  }(Qe || (Qe = {})), function (e) {
    e.create = function (e, t) {
      return { textDocument: e, edits: t };
    }, e.is = function (e) {
      var t = e;return Lt.defined(t) && rt.is(t.textDocument) && Array.isArray(t.edits);
    };
  }(Xe || (Xe = {})), function (e) {
    e.is = function (e) {
      var t = e;return t && (void 0 !== t.changes || void 0 !== t.documentChanges) && (void 0 === t.documentChanges || Lt.typedArray(t.documentChanges, Xe.is));
    };
  }(Ze || (Ze = {}));var nt,
      rt,
      it,
      ot,
      at,
      st,
      ut,
      ct,
      lt,
      ft,
      ht,
      pt,
      dt,
      mt,
      gt,
      vt,
      yt,
      bt = function () {
    function e(e) {
      this.edits = e;
    }return e.prototype.insert = function (e, t) {
      this.edits.push(Qe.insert(e, t));
    }, e.prototype.replace = function (e, t) {
      this.edits.push(Qe.replace(e, t));
    }, e.prototype.delete = function (e) {
      this.edits.push(Qe.del(e));
    }, e.prototype.add = function (e) {
      this.edits.push(e);
    }, e.prototype.all = function () {
      return this.edits;
    }, e.prototype.clear = function () {
      this.edits.splice(0, this.edits.length);
    }, e;
  }();!function () {
    function e(e) {
      var t = this;this._textEditChanges = Object.create(null), e && (this._workspaceEdit = e, e.documentChanges ? e.documentChanges.forEach(function (e) {
        var n = new bt(e.edits);t._textEditChanges[e.textDocument.uri] = n;
      }) : e.changes && Object.keys(e.changes).forEach(function (n) {
        var r = new bt(e.changes[n]);t._textEditChanges[n] = r;
      }));
    }Object.defineProperty(e.prototype, "edit", { get: function get() {
        return this._workspaceEdit;
      }, enumerable: !0, configurable: !0 }), e.prototype.getTextEditChange = function (e) {
      if (rt.is(e)) {
        if (this._workspaceEdit || (this._workspaceEdit = { documentChanges: [] }), !this._workspaceEdit.documentChanges) throw new Error("Workspace edit is not configured for versioned document changes.");var t = e;if (!(r = this._textEditChanges[t.uri])) {
          var n = { textDocument: t, edits: i = [] };this._workspaceEdit.documentChanges.push(n), r = new bt(i), this._textEditChanges[t.uri] = r;
        }return r;
      }if (this._workspaceEdit || (this._workspaceEdit = { changes: Object.create(null) }), !this._workspaceEdit.changes) throw new Error("Workspace edit is not configured for normal text edit changes.");var r;if (!(r = this._textEditChanges[e])) {
        var i = [];this._workspaceEdit.changes[e] = i, r = new bt(i), this._textEditChanges[e] = r;
      }return r;
    };
  }();!function (e) {
    e.create = function (e) {
      return { uri: e };
    }, e.is = function (e) {
      var t = e;return Lt.defined(t) && Lt.string(t.uri);
    };
  }(nt || (nt = {})), function (e) {
    e.create = function (e, t) {
      return { uri: e, version: t };
    }, e.is = function (e) {
      var t = e;return Lt.defined(t) && Lt.string(t.uri) && Lt.number(t.version);
    };
  }(rt || (rt = {})), function (e) {
    e.create = function (e, t, n, r) {
      return { uri: e, languageId: t, version: n, text: r };
    }, e.is = function (e) {
      var t = e;return Lt.defined(t) && Lt.string(t.uri) && Lt.string(t.languageId) && Lt.number(t.version) && Lt.string(t.text);
    };
  }(it || (it = {})), function (e) {
    e.PlainText = "plaintext", e.Markdown = "markdown";
  }(ot || (ot = {})), function (e) {
    e.is = function (t) {
      var n = t;return n === e.PlainText || n === e.Markdown;
    };
  }(ot || (ot = {})), function (e) {
    e.is = function (e) {
      var t = e;return Lt.objectLiteral(e) && ot.is(t.kind) && Lt.string(t.value);
    };
  }(at || (at = {})), function (e) {
    e.Text = 1, e.Method = 2, e.Function = 3, e.Constructor = 4, e.Field = 5, e.Variable = 6, e.Class = 7, e.Interface = 8, e.Module = 9, e.Property = 10, e.Unit = 11, e.Value = 12, e.Enum = 13, e.Keyword = 14, e.Snippet = 15, e.Color = 16, e.File = 17, e.Reference = 18, e.Folder = 19, e.EnumMember = 20, e.Constant = 21, e.Struct = 22, e.Event = 23, e.Operator = 24, e.TypeParameter = 25;
  }(st || (st = {})), function (e) {
    e.PlainText = 1, e.Snippet = 2;
  }(ut || (ut = {})), function (e) {
    e.create = function (e) {
      return { label: e };
    };
  }(ct || (ct = {})), function (e) {
    e.create = function (e, t) {
      return { items: e || [], isIncomplete: !!t };
    };
  }(lt || (lt = {})), function (e) {
    e.fromPlainText = function (e) {
      return e.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
    }, e.is = function (e) {
      var t = e;return Lt.string(t) || Lt.objectLiteral(t) && Lt.string(t.language) && Lt.string(t.value);
    };
  }(ft || (ft = {})), function (e) {
    e.is = function (e) {
      var t = e;return Lt.objectLiteral(t) && (at.is(t.contents) || ft.is(t.contents) || Lt.typedArray(t.contents, ft.is)) && (void 0 === e.range || Ue.is(e.range));
    };
  }(ht || (ht = {})), function (e) {
    e.create = function (e, t) {
      return t ? { label: e, documentation: t } : { label: e };
    };
  }(pt || (pt = {})), function (e) {
    e.create = function (e, t) {
      for (var n = [], r = 2; r < arguments.length; r++) {
        n[r - 2] = arguments[r];
      }var i = { label: e };return Lt.defined(t) && (i.documentation = t), Lt.defined(n) ? i.parameters = n : i.parameters = [], i;
    };
  }(dt || (dt = {})), function (e) {
    e.Text = 1, e.Read = 2, e.Write = 3;
  }(mt || (mt = {})), function (e) {
    e.create = function (e, t) {
      var n = { range: e };return Lt.number(t) && (n.kind = t), n;
    };
  }(gt || (gt = {})), function (e) {
    e.File = 1, e.Module = 2, e.Namespace = 3, e.Package = 4, e.Class = 5, e.Method = 6, e.Property = 7, e.Field = 8, e.Constructor = 9, e.Enum = 10, e.Interface = 11, e.Function = 12, e.Variable = 13, e.Constant = 14, e.String = 15, e.Number = 16, e.Boolean = 17, e.Array = 18, e.Object = 19, e.Key = 20, e.Null = 21, e.EnumMember = 22, e.Struct = 23, e.Event = 24, e.Operator = 25, e.TypeParameter = 26;
  }(vt || (vt = {})), function (e) {
    e.create = function (e, t, n, r, i) {
      var o = { name: e, kind: t, location: { uri: r, range: n } };return i && (o.containerName = i), o;
    };
  }(yt || (yt = {}));var _t,
      Ct,
      St,
      Et,
      At,
      xt = function () {
    return function () {};
  }();!function (e) {
    e.create = function (e, t, n, r, i, o) {
      var a = { name: e, detail: t, kind: n, range: r, selectionRange: i };return void 0 !== o && (a.children = o), a;
    }, e.is = function (e) {
      var t = e;return t && Lt.string(t.name) && Lt.string(t.detail) && Lt.number(t.kind) && Ue.is(t.range) && Ue.is(t.selectionRange) && (void 0 === t.deprecated || Lt.boolean(t.deprecated)) && (void 0 === t.children || Array.isArray(t.children));
    };
  }(xt || (xt = {})), function (e) {
    e.QuickFix = "quickfix", e.Refactor = "refactor", e.RefactorExtract = "refactor.extract", e.RefactorInline = "refactor.inline", e.RefactorRewrite = "refactor.rewrite", e.Source = "source", e.SourceOrganizeImports = "source.organizeImports";
  }(_t || (_t = {})), function (e) {
    e.create = function (e, t) {
      var n = { diagnostics: e };return void 0 !== t && null !== t && (n.only = t), n;
    }, e.is = function (e) {
      var t = e;return Lt.defined(t) && Lt.typedArray(t.diagnostics, ze.is) && (void 0 === t.only || Lt.typedArray(t.only, Lt.string));
    };
  }(Ct || (Ct = {})), function (e) {
    e.create = function (e, t, n) {
      var r = { title: e };return Ge.is(t) ? r.command = t : r.edit = t, void 0 !== n && (r.kind = n), r;
    }, e.is = function (e) {
      var t = e;return t && Lt.string(t.title) && (void 0 === t.diagnostics || Lt.typedArray(t.diagnostics, ze.is)) && (void 0 === t.kind || Lt.string(t.kind)) && (void 0 !== t.edit || void 0 !== t.command) && (void 0 === t.command || Ge.is(t.command)) && (void 0 === t.edit || Ze.is(t.edit));
    };
  }(St || (St = {})), function (e) {
    e.create = function (e, t) {
      var n = { range: e };return Lt.defined(t) && (n.data = t), n;
    }, e.is = function (e) {
      var t = e;return Lt.defined(t) && Ue.is(t.range) && (Lt.undefined(t.command) || Ge.is(t.command));
    };
  }(Et || (Et = {})), function (e) {
    e.create = function (e, t) {
      return { tabSize: e, insertSpaces: t };
    }, e.is = function (e) {
      var t = e;return Lt.defined(t) && Lt.number(t.tabSize) && Lt.boolean(t.insertSpaces);
    };
  }(At || (At = {}));var Nt = function () {
    return function () {};
  }();!function (e) {
    e.create = function (e, t, n) {
      return { range: e, target: t, data: n };
    }, e.is = function (e) {
      var t = e;return Lt.defined(t) && Ue.is(t.range) && (Lt.undefined(t.target) || Lt.string(t.target));
    };
  }(Nt || (Nt = {}));var kt, wt;!function (e) {
    e.create = function (e, t, n, r) {
      return new Pt(e, t, n, r);
    }, e.is = function (e) {
      var t = e;return !!(Lt.defined(t) && Lt.string(t.uri) && (Lt.undefined(t.languageId) || Lt.string(t.languageId)) && Lt.number(t.lineCount) && Lt.func(t.getText) && Lt.func(t.positionAt) && Lt.func(t.offsetAt));
    }, e.applyEdits = function (e, t) {
      for (var n = e.getText(), r = function e(t, n) {
        if (t.length <= 1) return t;var r = t.length / 2 | 0,
            i = t.slice(0, r),
            o = t.slice(r);e(i, n), e(o, n);for (var a = 0, s = 0, u = 0; a < i.length && s < o.length;) {
          var c = n(i[a], o[s]);t[u++] = c <= 0 ? i[a++] : o[s++];
        }for (; a < i.length;) {
          t[u++] = i[a++];
        }for (; s < o.length;) {
          t[u++] = o[s++];
        }return t;
      }(t, function (e, t) {
        var n = e.range.start.line - t.range.start.line;return 0 === n ? e.range.start.character - t.range.start.character : n;
      }), i = n.length, o = r.length - 1; o >= 0; o--) {
        var a = r[o],
            s = e.offsetAt(a.range.start),
            u = e.offsetAt(a.range.end);if (!(u <= i)) throw new Error("Ovelapping edit");n = n.substring(0, s) + a.newText + n.substring(u, n.length), i = s;
      }return n;
    };
  }(kt || (kt = {})), function (e) {
    e.Manual = 1, e.AfterDelay = 2, e.FocusOut = 3;
  }(wt || (wt = {}));var Lt,
      Pt = function () {
    function e(e, t, n, r) {
      this._uri = e, this._languageId = t, this._version = n, this._content = r, this._lineOffsets = null;
    }return Object.defineProperty(e.prototype, "uri", { get: function get() {
        return this._uri;
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "languageId", { get: function get() {
        return this._languageId;
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "version", { get: function get() {
        return this._version;
      }, enumerable: !0, configurable: !0 }), e.prototype.getText = function (e) {
      if (e) {
        var t = this.offsetAt(e.start),
            n = this.offsetAt(e.end);return this._content.substring(t, n);
      }return this._content;
    }, e.prototype.update = function (e, t) {
      this._content = e.text, this._version = t, this._lineOffsets = null;
    }, e.prototype.getLineOffsets = function () {
      if (null === this._lineOffsets) {
        for (var e = [], t = this._content, n = !0, r = 0; r < t.length; r++) {
          n && (e.push(r), n = !1);var i = t.charAt(r);n = "\r" === i || "\n" === i, "\r" === i && r + 1 < t.length && "\n" === t.charAt(r + 1) && r++;
        }n && t.length > 0 && e.push(t.length), this._lineOffsets = e;
      }return this._lineOffsets;
    }, e.prototype.positionAt = function (e) {
      e = Math.max(Math.min(e, this._content.length), 0);var t = this.getLineOffsets(),
          n = 0,
          r = t.length;if (0 === r) return Re.create(0, e);for (; n < r;) {
        var i = Math.floor((n + r) / 2);t[i] > e ? r = i : n = i + 1;
      }var o = n - 1;return Re.create(o, e - t[o]);
    }, e.prototype.offsetAt = function (e) {
      var t = this.getLineOffsets();if (e.line >= t.length) return this._content.length;if (e.line < 0) return 0;var n = t[e.line],
          r = e.line + 1 < t.length ? t[e.line + 1] : this._content.length;return Math.max(Math.min(n + e.character, r), n);
    }, Object.defineProperty(e.prototype, "lineCount", { get: function get() {
        return this.getLineOffsets().length;
      }, enumerable: !0, configurable: !0 }), e;
  }();function Ot(e, t) {
    void 0 === t && (t = !1);var n = 0,
        r = e.length,
        i = "",
        o = 0,
        a = 16,
        s = 0;function u(t, r) {
      for (var i = 0, o = 0; i < t || !r;) {
        var a = e.charCodeAt(n);if (a >= 48 && a <= 57) o = 16 * o + a - 48;else if (a >= 65 && a <= 70) o = 16 * o + a - 65 + 10;else {
          if (!(a >= 97 && a <= 102)) break;o = 16 * o + a - 97 + 10;
        }n++, i++;
      }return i < t && (o = -1), o;
    }function c() {
      if (i = "", s = 0, o = n, n >= r) return o = r, a = 17;var t = e.charCodeAt(n);if (Tt(t)) {
        do {
          n++, i += String.fromCharCode(t), t = e.charCodeAt(n);
        } while (Tt(t));return a = 15;
      }if (Mt(t)) return n++, i += String.fromCharCode(t), 13 === t && 10 === e.charCodeAt(n) && (n++, i += "\n"), a = 14;switch (t) {case 123:
          return n++, a = 1;case 125:
          return n++, a = 2;case 91:
          return n++, a = 3;case 93:
          return n++, a = 4;case 58:
          return n++, a = 6;case 44:
          return n++, a = 5;case 34:
          return n++, i = function () {
            for (var t = "", i = n;;) {
              if (n >= r) {
                t += e.substring(i, n), s = 2;break;
              }var o = e.charCodeAt(n);if (34 === o) {
                t += e.substring(i, n), n++;break;
              }if (92 !== o) {
                if (o >= 0 && o <= 31) {
                  if (Mt(o)) {
                    t += e.substring(i, n), s = 2;break;
                  }s = 6;
                }n++;
              } else {
                if (t += e.substring(i, n), ++n >= r) {
                  s = 2;break;
                }switch (o = e.charCodeAt(n++)) {case 34:
                    t += '"';break;case 92:
                    t += "\\";break;case 47:
                    t += "/";break;case 98:
                    t += "\b";break;case 102:
                    t += "\f";break;case 110:
                    t += "\n";break;case 114:
                    t += "\r";break;case 116:
                    t += "\t";break;case 117:
                    var a = u(4, !0);a >= 0 ? t += String.fromCharCode(a) : s = 4;break;default:
                    s = 5;}i = n;
              }
            }return t;
          }(), a = 10;case 47:
          var c = n - 1;if (47 === e.charCodeAt(n + 1)) {
            for (n += 2; n < r && !Mt(e.charCodeAt(n));) {
              n++;
            }return i = e.substring(c, n), a = 12;
          }if (42 === e.charCodeAt(n + 1)) {
            n += 2;for (var f = !1; n < r;) {
              if (42 === e.charCodeAt(n) && n + 1 < r && 47 === e.charCodeAt(n + 1)) {
                n += 2, f = !0;break;
              }n++;
            }return f || (n++, s = 1), i = e.substring(c, n), a = 13;
          }return i += String.fromCharCode(t), n++, a = 16;case 45:
          if (i += String.fromCharCode(t), ++n === r || !It(e.charCodeAt(n))) return a = 16;case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:
          return i += function () {
            var t = n;if (48 === e.charCodeAt(n)) n++;else for (n++; n < e.length && It(e.charCodeAt(n));) {
              n++;
            }if (n < e.length && 46 === e.charCodeAt(n)) {
              if (!(++n < e.length && It(e.charCodeAt(n)))) return s = 3, e.substring(t, n);for (n++; n < e.length && It(e.charCodeAt(n));) {
                n++;
              }
            }var r = n;if (n < e.length && (69 === e.charCodeAt(n) || 101 === e.charCodeAt(n))) if ((++n < e.length && 43 === e.charCodeAt(n) || 45 === e.charCodeAt(n)) && n++, n < e.length && It(e.charCodeAt(n))) {
              for (n++; n < e.length && It(e.charCodeAt(n));) {
                n++;
              }r = n;
            } else s = 3;return e.substring(t, r);
          }(), a = 11;default:
          for (; n < r && l(t);) {
            n++, t = e.charCodeAt(n);
          }if (o !== n) {
            switch (i = e.substring(o, n)) {case "true":
                return a = 8;case "false":
                return a = 9;case "null":
                return a = 7;}return a = 16;
          }return i += String.fromCharCode(t), n++, a = 16;}
    }function l(e) {
      if (Tt(e) || Mt(e)) return !1;switch (e) {case 125:case 93:case 123:case 91:case 34:case 58:case 44:case 47:
          return !1;}return !0;
    }return { setPosition: function setPosition(e) {
        n = e, i = "", o = 0, a = 16, s = 0;
      }, getPosition: function getPosition() {
        return n;
      }, scan: t ? function () {
        var e;do {
          e = c();
        } while (e >= 12 && e <= 15);return e;
      } : c, getToken: function getToken() {
        return a;
      }, getTokenValue: function getTokenValue() {
        return i;
      }, getTokenOffset: function getTokenOffset() {
        return o;
      }, getTokenLength: function getTokenLength() {
        return n - o;
      }, getTokenError: function getTokenError() {
        return s;
      } };
  }function Tt(e) {
    return 32 === e || 9 === e || 11 === e || 12 === e || 160 === e || 5760 === e || e >= 8192 && e <= 8203 || 8239 === e || 8287 === e || 12288 === e || 65279 === e;
  }function Mt(e) {
    return 10 === e || 13 === e || 8232 === e || 8233 === e;
  }function It(e) {
    return e >= 48 && e <= 57;
  }function Vt(e, t, n) {
    var r, i, o, a, s;if (t) {
      for (a = t.offset, s = a + t.length, o = a; o > 0 && !Dt(e, o - 1);) {
        o--;
      }for (var u = s; u < e.length && !Dt(e, u);) {
        u++;
      }i = e.substring(o, u), r = function (e, t) {
        var n = 0,
            r = 0,
            i = t.tabSize || 4;for (; n < e.length;) {
          var o = e.charAt(n);if (" " === o) r++;else {
            if ("\t" !== o) break;r += i;
          }n++;
        }return Math.floor(r / i);
      }(i, n);
    } else i = e, r = 0, o = 0, a = 0, s = e.length;var c,
        l = function (e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t.charAt(n);if ("\r" === r) return n + 1 < t.length && "\n" === t.charAt(n + 1) ? "\r\n" : "\r";if ("\n" === r) return "\n";
      }return e && e.eol || "\n";
    }(n, e),
        f = !1,
        h = 0;c = n.insertSpaces ? jt(" ", n.tabSize || 4) : "\t";var p = Ot(i, !1),
        d = !1;function m() {
      return l + jt(c, r + h);
    }function g() {
      var e = p.scan();for (f = !1; 15 === e || 14 === e;) {
        f = f || 14 === e, e = p.scan();
      }return d = 16 === e || 0 !== p.getTokenError(), e;
    }var v = [];function y(t, n, r) {
      !d && n < s && r > a && e.substring(n, r) !== t && v.push({ offset: n, length: r - n, content: t });
    }var b = g();if (17 !== b) {
      var _ = p.getTokenOffset() + o;y(jt(c, r), o, _);
    }for (; 17 !== b;) {
      for (var C = p.getTokenOffset() + p.getTokenLength() + o, S = g(), E = ""; !f && (12 === S || 13 === S);) {
        y(" ", C, p.getTokenOffset() + o), C = p.getTokenOffset() + p.getTokenLength() + o, E = 12 === S ? m() : "", S = g();
      }if (2 === S) 1 !== b && (h--, E = m());else if (4 === S) 3 !== b && (h--, E = m());else {
        switch (b) {case 3:case 1:
            h++, E = m();break;case 5:case 12:
            E = m();break;case 13:
            E = f ? m() : " ";break;case 6:
            E = " ";break;case 10:
            if (6 === S) {
              E = "";break;
            }case 7:case 8:case 9:case 11:case 2:case 4:
            12 === S || 13 === S ? E = " " : 5 !== S && 17 !== S && (d = !0);break;case 16:
            d = !0;}!f || 12 !== S && 13 !== S || (E = m());
      }y(E, C, p.getTokenOffset() + o), b = S;
    }return v;
  }function jt(e, t) {
    for (var n = "", r = 0; r < t; r++) {
      n += e;
    }return n;
  }function Dt(e, t) {
    return -1 !== "\r\n".indexOf(e.charAt(t));
  }function Ft(e, t, n) {
    var r = Ot(e, !1);function i(e) {
      return e ? function () {
        return e(r.getTokenOffset(), r.getTokenLength());
      } : function () {
        return !0;
      };
    }function o(e) {
      return e ? function (t) {
        return e(t, r.getTokenOffset(), r.getTokenLength());
      } : function () {
        return !0;
      };
    }var a = i(t.onObjectBegin),
        s = o(t.onObjectProperty),
        u = i(t.onObjectEnd),
        c = i(t.onArrayBegin),
        l = i(t.onArrayEnd),
        f = o(t.onLiteralValue),
        h = o(t.onSeparator),
        p = i(t.onComment),
        d = o(t.onError),
        m = n && n.disallowComments,
        g = n && n.allowTrailingComma;function v() {
      for (;;) {
        var e = r.scan();switch (r.getTokenError()) {case 4:
            y(14);break;case 5:
            y(15);break;case 3:
            y(13);break;case 1:
            m || y(11);break;case 2:
            y(12);break;case 6:
            y(16);}switch (e) {case 12:case 13:
            m ? y(10) : p();break;case 16:
            y(1);break;case 15:case 14:
            break;default:
            return e;}
      }
    }function y(e, t, n) {
      if (void 0 === t && (t = []), void 0 === n && (n = []), d(e), t.length + n.length > 0) for (var i = r.getToken(); 17 !== i;) {
        if (-1 !== t.indexOf(i)) {
          v();break;
        }if (-1 !== n.indexOf(i)) break;i = v();
      }
    }function b(e) {
      var t = r.getTokenValue();return e ? f(t) : s(t), v(), !0;
    }function _() {
      switch (r.getToken()) {case 3:
          return function () {
            c(), v();for (var e = !1; 4 !== r.getToken() && 17 !== r.getToken();) {
              if (5 === r.getToken()) {
                if (e || y(4, [], []), h(","), v(), 4 === r.getToken() && g) break;
              } else e && y(6, [], []);_() || y(4, [], [4, 5]), e = !0;
            }return l(), 4 !== r.getToken() ? y(8, [4], []) : v(), !0;
          }();case 1:
          return function () {
            a(), v();for (var e = !1; 2 !== r.getToken() && 17 !== r.getToken();) {
              if (5 === r.getToken()) {
                if (e || y(4, [], []), h(","), v(), 2 === r.getToken() && g) break;
              } else e && y(6, [], []);(10 !== r.getToken() ? (y(3, [], [2, 5]), 0) : (b(!1), 6 === r.getToken() ? (h(":"), v(), _() || y(4, [], [2, 5])) : y(5, [], [2, 5]), 1)) || y(4, [], [2, 5]), e = !0;
            }return u(), 2 !== r.getToken() ? y(7, [2], []) : v(), !0;
          }();case 10:
          return b(!0);default:
          return function () {
            switch (r.getToken()) {case 11:
                var e = 0;try {
                  "number" != typeof (e = JSON.parse(r.getTokenValue())) && (y(2), e = 0);
                } catch (e) {
                  y(2);
                }f(e);break;case 7:
                f(null);break;case 8:
                f(!0);break;case 9:
                f(!1);break;default:
                return !1;}return v(), !0;
          }();}
    }return v(), 17 === r.getToken() || (_() ? (17 !== r.getToken() && y(9, [], []), !0) : (y(4, [], []), !1));
  }!function (e) {
    var t = Object.prototype.toString;e.defined = function (e) {
      return void 0 !== e;
    }, e.undefined = function (e) {
      return void 0 === e;
    }, e.boolean = function (e) {
      return !0 === e || !1 === e;
    }, e.string = function (e) {
      return "[object String]" === t.call(e);
    }, e.number = function (e) {
      return "[object Number]" === t.call(e);
    }, e.func = function (e) {
      return "[object Function]" === t.call(e);
    }, e.objectLiteral = function (e) {
      return null !== e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e));
    }, e.typedArray = function (e, t) {
      return Array.isArray(e) && e.every(t);
    };
  }(Lt || (Lt = {}));var Rt,
      Ut = Ot,
      Wt = function Wt(e, t, n) {
    void 0 === t && (t = []);var r = null,
        i = [],
        o = [];function a(e) {
      Array.isArray(i) ? i.push(e) : r && (i[r] = e);
    }return Ft(e, { onObjectBegin: function onObjectBegin() {
        var e = {};a(e), o.push(i), i = e, r = null;
      }, onObjectProperty: function onObjectProperty(e) {
        r = e;
      }, onObjectEnd: function onObjectEnd() {
        i = o.pop();
      }, onArrayBegin: function onArrayBegin() {
        var e = [];a(e), o.push(i), i = e, r = null;
      }, onArrayEnd: function onArrayEnd() {
        i = o.pop();
      }, onLiteralValue: a, onError: function onError(e, n, r) {
        t.push({ error: e, offset: n, length: r });
      } }, n), i[0];
  },
      qt = function e(t, n, r) {
    if (void 0 === r && (r = !1), function (e, t, n) {
      return void 0 === n && (n = !1), t >= e.offset && t < e.offset + e.length || n && t === e.offset + e.length;
    }(t, n, r)) {
      var i = t.children;if (Array.isArray(i)) for (var o = 0; o < i.length && i[o].offset <= n; o++) {
        var a = e(i[o], n, r);if (a) return a;
      }return t;
    }
  },
      Kt = function e(t) {
    if (!t.parent || !t.parent.children) return [];var n = e(t.parent);if ("property" === t.parent.type) {
      var r = t.parent.children[0].value;n.push(r);
    } else if ("array" === t.parent.type) {
      var i = t.parent.children.indexOf(t);-1 !== i && n.push(i);
    }return n;
  },
      Bt = function e(t) {
    switch (t.type) {case "array":
        return t.children.map(e);case "object":
        for (var n = Object.create(null), r = 0, i = t.children; r < i.length; r++) {
          var o = i[r],
              a = o.children[1];a && (n[o.children[0].value] = e(a));
        }return n;case "null":case "string":case "number":case "boolean":
        return t.value;default:
        return;}
  };function Yt(e, t) {
    if (e === t) return !0;if (null === e || void 0 === e || null === t || void 0 === t) return !1;if ((typeof e === "undefined" ? "undefined" : _typeof(e)) != (typeof t === "undefined" ? "undefined" : _typeof(t))) return !1;if ("object" != (typeof e === "undefined" ? "undefined" : _typeof(e))) return !1;if (Array.isArray(e) !== Array.isArray(t)) return !1;var n, r;if (Array.isArray(e)) {
      if (e.length !== t.length) return !1;for (n = 0; n < e.length; n++) {
        if (!Yt(e[n], t[n])) return !1;
      }
    } else {
      var i = [];for (r in e) {
        i.push(r);
      }i.sort();var o = [];for (r in t) {
        o.push(r);
      }if (o.sort(), !Yt(i, o)) return !1;for (n = 0; n < i.length; n++) {
        if (!Yt(e[i[n]], t[i[n]])) return !1;
      }
    }return !0;
  }function $t(e, t) {
    for (var n = [], r = 2; r < arguments.length; r++) {
      n[r - 2] = arguments[r];
    }return function (e, t) {
      return 0 === t.length ? e : e.replace(/\{(\d+)\}/g, function (e, n) {
        var r = n[0];return void 0 !== t[r] ? t[r] : e;
      });
    }(t, n);
  }function Jt(e) {
    return $t;
  }!function (e) {
    e[e.Undefined = 0] = "Undefined", e[e.EnumValueMismatch = 1] = "EnumValueMismatch", e[e.UnexpectedEndOfComment = 257] = "UnexpectedEndOfComment", e[e.UnexpectedEndOfString = 258] = "UnexpectedEndOfString", e[e.UnexpectedEndOfNumber = 259] = "UnexpectedEndOfNumber", e[e.InvalidUnicode = 260] = "InvalidUnicode", e[e.InvalidEscapeCharacter = 261] = "InvalidEscapeCharacter", e[e.InvalidCharacter = 262] = "InvalidCharacter", e[e.PropertyExpected = 513] = "PropertyExpected", e[e.CommaExpected = 514] = "CommaExpected", e[e.ColonExpected = 515] = "ColonExpected", e[e.ValueExpected = 516] = "ValueExpected", e[e.CommaOrCloseBacketExpected = 517] = "CommaOrCloseBacketExpected", e[e.CommaOrCloseBraceExpected = 518] = "CommaOrCloseBraceExpected", e[e.TrailingComma = 519] = "TrailingComma", e[e.DuplicateKey = 520] = "DuplicateKey", e[e.CommentNotPermitted = 521] = "CommentNotPermitted", e[e.SchemaResolveError = 768] = "SchemaResolveError";
  }(Rt || (Rt = {}));var Ht,
      zt = n(2),
      Gt = function () {
    var e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var n in t) {
        t.hasOwnProperty(n) && (e[n] = t[n]);
      }
    };return function (t, n) {
      function r() {
        this.constructor = t;
      }e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
    };
  }(),
      Qt = Jt(),
      Xt = /^#([0-9A-Fa-f]{3,4}|([0-9A-Fa-f]{2}){3,4})$/,
      Zt = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      en = function () {
    function e(e, t, n) {
      this.offset = t, this.length = n, this.parent = e;
    }return Object.defineProperty(e.prototype, "children", { get: function get() {
        return [];
      }, enumerable: !0, configurable: !0 }), e.prototype.toString = function () {
      return "type: " + this.type + " (" + this.offset + "/" + this.length + ")" + (this.parent ? " parent: {" + this.parent.toString() + "}" : "");
    }, e;
  }(),
      tn = function (e) {
    function t(t, n) {
      var r = e.call(this, t, n) || this;return r.type = "null", r.value = null, r;
    }return Gt(t, e), t;
  }(en),
      nn = function (e) {
    function t(t, n, r) {
      var i = e.call(this, t, r) || this;return i.type = "boolean", i.value = n, i;
    }return Gt(t, e), t;
  }(en),
      rn = function (e) {
    function t(t, n) {
      var r = e.call(this, t, n) || this;return r.type = "array", r.items = [], r;
    }return Gt(t, e), Object.defineProperty(t.prototype, "children", { get: function get() {
        return this.items;
      }, enumerable: !0, configurable: !0 }), t;
  }(en),
      on = function (e) {
    function t(t, n) {
      var r = e.call(this, t, n) || this;return r.type = "number", r.isInteger = !0, r.value = Number.NaN, r;
    }return Gt(t, e), t;
  }(en),
      an = function (e) {
    function t(t, n, r) {
      var i = e.call(this, t, n, r) || this;return i.type = "string", i.value = "", i;
    }return Gt(t, e), t;
  }(en),
      sn = function (e) {
    function t(t, n) {
      var r = e.call(this, t, n) || this;return r.type = "property", r.colonOffset = -1, r;
    }return Gt(t, e), Object.defineProperty(t.prototype, "children", { get: function get() {
        return this.valueNode ? [this.keyNode, this.valueNode] : [this.keyNode];
      }, enumerable: !0, configurable: !0 }), t;
  }(en),
      un = function (e) {
    function t(t, n) {
      var r = e.call(this, t, n) || this;return r.type = "object", r.properties = [], r;
    }return Gt(t, e), Object.defineProperty(t.prototype, "children", { get: function get() {
        return this.properties;
      }, enumerable: !0, configurable: !0 }), t;
  }(en);function cn(e) {
    return "boolean" == typeof e ? e ? {} : { not: {} } : e;
  }!function (e) {
    e[e.Key = 0] = "Key", e[e.Enum = 1] = "Enum";
  }(Ht || (Ht = {}));var ln = function () {
    function e(e, t) {
      void 0 === e && (e = -1), void 0 === t && (t = null), this.focusOffset = e, this.exclude = t, this.schemas = [];
    }return e.prototype.add = function (e) {
      this.schemas.push(e);
    }, e.prototype.merge = function (e) {
      var t;(t = this.schemas).push.apply(t, e.schemas);
    }, e.prototype.include = function (e) {
      return (-1 === this.focusOffset || mn(e, this.focusOffset)) && e !== this.exclude;
    }, e.prototype.newSub = function () {
      return new e(-1, this.exclude);
    }, e;
  }(),
      fn = function () {
    function e() {}return Object.defineProperty(e.prototype, "schemas", { get: function get() {
        return [];
      }, enumerable: !0, configurable: !0 }), e.prototype.add = function (e) {}, e.prototype.merge = function (e) {}, e.prototype.include = function (e) {
      return !0;
    }, e.prototype.newSub = function () {
      return this;
    }, e.instance = new e(), e;
  }(),
      hn = function () {
    function e() {
      this.problems = [], this.propertiesMatches = 0, this.propertiesValueMatches = 0, this.primaryValueMatches = 0, this.enumValueMatch = !1, this.enumValues = null;
    }return e.prototype.hasProblems = function () {
      return !!this.problems.length;
    }, e.prototype.mergeAll = function (e) {
      var t = this;e.forEach(function (e) {
        t.merge(e);
      });
    }, e.prototype.merge = function (e) {
      this.problems = this.problems.concat(e.problems);
    }, e.prototype.mergeEnumValues = function (e) {
      if (!this.enumValueMatch && !e.enumValueMatch && this.enumValues && e.enumValues) {
        this.enumValues = this.enumValues.concat(e.enumValues);for (var t = 0, n = this.problems; t < n.length; t++) {
          var r = n[t];r.code === Rt.EnumValueMismatch && (r.message = Qt("enumWarning", "Value is not accepted. Valid values: {0}.", this.enumValues.map(function (e) {
            return JSON.stringify(e);
          }).join(", ")));
        }
      }
    }, e.prototype.mergePropertyMatch = function (e) {
      this.merge(e), this.propertiesMatches++, (e.enumValueMatch || !e.hasProblems() && e.propertiesMatches) && this.propertiesValueMatches++, e.enumValueMatch && e.enumValues && 1 === e.enumValues.length && this.primaryValueMatches++;
    }, e.prototype.compare = function (e) {
      var t = this.hasProblems();return t !== e.hasProblems() ? t ? -1 : 1 : this.enumValueMatch !== e.enumValueMatch ? e.enumValueMatch ? -1 : 1 : this.primaryValueMatches !== e.primaryValueMatches ? this.primaryValueMatches - e.primaryValueMatches : this.propertiesValueMatches !== e.propertiesValueMatches ? this.propertiesValueMatches - e.propertiesValueMatches : this.propertiesMatches - e.propertiesMatches;
    }, e;
  }();function pn(e) {
    return Bt(e);
  }function dn(e) {
    return Kt(e);
  }function mn(e, t, n) {
    return void 0 === n && (n = !1), t >= e.offset && t < e.offset + e.length || n && t === e.offset + e.length;
  }var gn = function () {
    function e(e, t, n) {
      void 0 === t && (t = []), void 0 === n && (n = []), this.root = e, this.syntaxErrors = t, this.comments = n;
    }return e.prototype.getNodeFromOffset = function (e, t) {
      if (void 0 === t && (t = !1), this.root) return qt(this.root, e, t);
    }, e.prototype.visit = function (e) {
      if (this.root) {
        var t = function t(n) {
          var r = e(n),
              i = n.children;if (Array.isArray(i)) for (var o = 0; o < i.length && r; o++) {
            r = t(i[o]);
          }return r;
        };t(this.root);
      }
    }, e.prototype.validate = function (e, t) {
      if (this.root && t) {
        var n = new hn();return vn(this.root, t, n, fn.instance), n.problems.map(function (t) {
          var n = Ue.create(e.positionAt(t.location.offset), e.positionAt(t.location.offset + t.location.length));return ze.create(n, t.message, t.severity, t.code);
        });
      }return null;
    }, e.prototype.getMatchingSchemas = function (e, t, n) {
      void 0 === t && (t = -1), void 0 === n && (n = null);var r = new ln(t, n);return this.root && e && vn(this.root, e, new hn(), r), r.schemas;
    }, e;
  }();function vn(e, t, n, r) {
    if (e && r.include(e)) {
      switch (e.type) {case "object":
          !function (e, t, n, r) {
            var i = Object.create(null),
                o = [];e.properties.forEach(function (e) {
              var t = e.keyNode.value;i[t] = e.valueNode, o.push(t);
            }), Array.isArray(t.required) && t.required.forEach(function (t) {
              if (!i[t]) {
                var r = e.parent && "property" === e.parent.type && e.parent.keyNode,
                    o = r ? { offset: r.offset, length: r.length } : { offset: e.offset, length: 1 };n.problems.push({ location: o, severity: He.Warning, message: Qt("MissingRequiredPropWarning", 'Missing property "{0}".', t) });
              }
            });var a = function a(e) {
              for (var t = o.indexOf(e); t >= 0;) {
                o.splice(t, 1), t = o.indexOf(e);
              }
            };t.properties && Object.keys(t.properties).forEach(function (e) {
              a(e);var o = t.properties[e],
                  s = i[e];if (s) if ("boolean" == typeof o) {
                if (o) n.propertiesMatches++, n.propertiesValueMatches++;else {
                  var u = s.parent;n.problems.push({ location: { offset: u.keyNode.offset, length: u.keyNode.length }, severity: He.Warning, message: t.errorMessage || Qt("DisallowedExtraPropWarning", "Property {0} is not allowed.", e) });
                }
              } else {
                var c = new hn();vn(s, o, c, r), n.mergePropertyMatch(c);
              }
            });t.patternProperties && Object.keys(t.patternProperties).forEach(function (e) {
              var s = new RegExp(e);o.slice(0).forEach(function (o) {
                if (s.test(o)) {
                  a(o);var u = i[o];if (u) {
                    var c = t.patternProperties[e];if ("boolean" == typeof c) {
                      if (c) n.propertiesMatches++, n.propertiesValueMatches++;else {
                        var l = u.parent;n.problems.push({ location: { offset: l.keyNode.offset, length: l.keyNode.length }, severity: He.Warning, message: t.errorMessage || Qt("DisallowedExtraPropWarning", "Property {0} is not allowed.", o) });
                      }
                    } else {
                      var f = new hn();vn(u, c, f, r), n.mergePropertyMatch(f);
                    }
                  }
                }
              });
            });"object" == _typeof(t.additionalProperties) ? o.forEach(function (e) {
              var o = i[e];if (o) {
                var a = new hn();vn(o, t.additionalProperties, a, r), n.mergePropertyMatch(a);
              }
            }) : !1 === t.additionalProperties && o.length > 0 && o.forEach(function (e) {
              var r = i[e];if (r) {
                var o = r.parent;n.problems.push({ location: { offset: o.keyNode.offset, length: o.keyNode.length }, severity: He.Warning, message: t.errorMessage || Qt("DisallowedExtraPropWarning", "Property {0} is not allowed.", e) });
              }
            });t.maxProperties && e.properties.length > t.maxProperties && n.problems.push({ location: { offset: e.offset, length: e.length }, severity: He.Warning, message: Qt("MaxPropWarning", "Object has more properties than limit of {0}.", t.maxProperties) });t.minProperties && e.properties.length < t.minProperties && n.problems.push({ location: { offset: e.offset, length: e.length }, severity: He.Warning, message: Qt("MinPropWarning", "Object has fewer properties than the required number of {0}", t.minProperties) });t.dependencies && Object.keys(t.dependencies).forEach(function (o) {
              var a = i[o];if (a) {
                var s = t.dependencies[o];if (Array.isArray(s)) s.forEach(function (t) {
                  i[t] ? n.propertiesValueMatches++ : n.problems.push({ location: { offset: e.offset, length: e.length }, severity: He.Warning, message: Qt("RequiredDependentPropWarning", "Object is missing property {0} required by property {1}.", t, o) });
                });else {
                  var u = cn(s);if (u) {
                    var c = new hn();vn(e, u, c, r), n.mergePropertyMatch(c);
                  }
                }
              }
            });var s = cn(t.propertyNames);s && e.properties.forEach(function (e) {
              var t = e.keyNode;t && vn(t, s, n, fn.instance);
            });
          }(e, t, n, r);break;case "array":
          !function (e, t, n, r) {
            if (Array.isArray(t.items)) {
              var i = t.items;if (i.forEach(function (t, o) {
                var a = cn(t),
                    s = new hn(),
                    u = e.items[o];u ? (vn(u, a, s, r), n.mergePropertyMatch(s)) : e.items.length >= i.length && n.propertiesValueMatches++;
              }), e.items.length > i.length) if ("object" == _typeof(t.additionalItems)) for (var o = i.length; o < e.items.length; o++) {
                var a = new hn();vn(e.items[o], t.additionalItems, a, r), n.mergePropertyMatch(a);
              } else !1 === t.additionalItems && n.problems.push({ location: { offset: e.offset, length: e.length }, severity: He.Warning, message: Qt("additionalItemsWarning", "Array has too many items according to schema. Expected {0} or fewer.", i.length) });
            } else {
              var s = cn(t.items);s && e.items.forEach(function (e) {
                var t = new hn();vn(e, s, t, r), n.mergePropertyMatch(t);
              });
            }var u = cn(t.contains);if (u) {
              var c = e.items.some(function (e) {
                var t = new hn();return vn(e, u, t, fn.instance), !t.hasProblems();
              });c || n.problems.push({ location: { offset: e.offset, length: e.length }, severity: He.Warning, message: t.errorMessage || Qt("requiredItemMissingWarning", "Array does not contain required item.") });
            }t.minItems && e.items.length < t.minItems && n.problems.push({ location: { offset: e.offset, length: e.length }, severity: He.Warning, message: Qt("minItemsWarning", "Array has too few items. Expected {0} or more.", t.minItems) });t.maxItems && e.items.length > t.maxItems && n.problems.push({ location: { offset: e.offset, length: e.length }, severity: He.Warning, message: Qt("maxItemsWarning", "Array has too many items. Expected {0} or fewer.", t.maxItems) });if (!0 === t.uniqueItems) {
              var l = pn(e),
                  f = l.some(function (e, t) {
                return t !== l.lastIndexOf(e);
              });f && n.problems.push({ location: { offset: e.offset, length: e.length }, severity: He.Warning, message: Qt("uniqueItemsWarning", "Array has duplicate items.") });
            }
          }(e, t, n, r);break;case "string":
          !function (e, t, n, r) {
            t.minLength && e.value.length < t.minLength && n.problems.push({ location: { offset: e.offset, length: e.length }, severity: He.Warning, message: Qt("minLengthWarning", "String is shorter than the minimum length of {0}.", t.minLength) });t.maxLength && e.value.length > t.maxLength && n.problems.push({ location: { offset: e.offset, length: e.length }, severity: He.Warning, message: Qt("maxLengthWarning", "String is longer than the maximum length of {0}.", t.maxLength) });if (t.pattern) {
              var i = new RegExp(t.pattern);i.test(e.value) || n.problems.push({ location: { offset: e.offset, length: e.length }, severity: He.Warning, message: t.patternErrorMessage || t.errorMessage || Qt("patternWarning", 'String does not match the pattern of "{0}".', t.pattern) });
            }if (t.format) switch (t.format) {case "uri":case "uri-reference":
                var o = void 0;if (e.value) try {
                  var a = zt.a.parse(e.value);a.scheme || "uri" !== t.format || (o = Qt("uriSchemeMissing", "URI with a scheme is expected."));
                } catch (e) {
                  o = e.message;
                } else o = Qt("uriEmpty", "URI expected.");o && n.problems.push({ location: { offset: e.offset, length: e.length }, severity: He.Warning, message: t.patternErrorMessage || t.errorMessage || Qt("uriFormatWarning", "String is not a URI: {0}", o) });break;case "email":
                e.value.match(Zt) || n.problems.push({ location: { offset: e.offset, length: e.length }, severity: He.Warning, message: t.patternErrorMessage || t.errorMessage || Qt("emailFormatWarning", "String is not an e-mail address.") });break;case "color-hex":
                e.value.match(Xt) || n.problems.push({ location: { offset: e.offset, length: e.length }, severity: He.Warning, message: t.patternErrorMessage || t.errorMessage || Qt("colorHexFormatWarning", "Invalid color format. Use #RGB, #RGBA, #RRGGBB or #RRGGBBAA.") });}
          }(e, t, n);break;case "number":
          !function (e, t, n, r) {
            var i = e.value;"number" == typeof t.multipleOf && i % t.multipleOf != 0 && n.problems.push({ location: { offset: e.offset, length: e.length }, severity: He.Warning, message: Qt("multipleOfWarning", "Value is not divisible by {0}.", t.multipleOf) });function o(e, t) {
              return "number" == typeof t ? t : "boolean" == typeof t && t ? e : void 0;
            }function a(e, t) {
              if ("boolean" != typeof t || !t) return e;
            }var s = o(t.minimum, t.exclusiveMinimum);"number" == typeof s && i <= s && n.problems.push({ location: { offset: e.offset, length: e.length }, severity: He.Warning, message: Qt("exclusiveMinimumWarning", "Value is below the exclusive minimum of {0}.", s) });var u = o(t.maximum, t.exclusiveMaximum);"number" == typeof u && i >= u && n.problems.push({ location: { offset: e.offset, length: e.length }, severity: He.Warning, message: Qt("exclusiveMaximumWarning", "Value is above the exclusive maximum of {0}.", u) });var c = a(t.minimum, t.exclusiveMinimum);"number" == typeof c && i < c && n.problems.push({ location: { offset: e.offset, length: e.length }, severity: He.Warning, message: Qt("minimumWarning", "Value is below the minimum of {0}.", c) });var l = a(t.maximum, t.exclusiveMaximum);"number" == typeof l && i > l && n.problems.push({ location: { offset: e.offset, length: e.length }, severity: He.Warning, message: Qt("maximumWarning", "Value is above the maximum of {0}.", l) });
          }(e, t, n);break;case "property":
          return vn(e.valueNode, t, n, r);}!function () {
        function i(t) {
          return e.type === t || "integer" === t && "number" === e.type && e.isInteger;
        }Array.isArray(t.type) ? t.type.some(i) || n.problems.push({ location: { offset: e.offset, length: e.length }, severity: He.Warning, message: t.errorMessage || Qt("typeArrayMismatchWarning", "Incorrect type. Expected one of {0}.", t.type.join(", ")) }) : t.type && (i(t.type) || n.problems.push({ location: { offset: e.offset, length: e.length }, severity: He.Warning, message: t.errorMessage || Qt("typeMismatchWarning", 'Incorrect type. Expected "{0}".', t.type) }));Array.isArray(t.allOf) && t.allOf.forEach(function (t) {
          vn(e, cn(t), n, r);
        });var o = cn(t.not);if (o) {
          var a = new hn(),
              s = r.newSub();vn(e, o, a, s), a.hasProblems() || n.problems.push({ location: { offset: e.offset, length: e.length }, severity: He.Warning, message: Qt("notSchemaWarning", "Matches a schema that is not allowed.") }), s.schemas.forEach(function (e) {
            e.inverted = !e.inverted, r.add(e);
          });
        }var u = function u(t, i) {
          var o = [],
              a = null;return t.forEach(function (t) {
            var n = cn(t),
                s = new hn(),
                u = r.newSub();if (vn(e, n, s, u), s.hasProblems() || o.push(n), a) {
              if (i || s.hasProblems() || a.validationResult.hasProblems()) {
                var c = s.compare(a.validationResult);c > 0 ? a = { schema: n, validationResult: s, matchingSchemas: u } : 0 === c && (a.matchingSchemas.merge(u), a.validationResult.mergeEnumValues(s));
              } else a.matchingSchemas.merge(u), a.validationResult.propertiesMatches += s.propertiesMatches, a.validationResult.propertiesValueMatches += s.propertiesValueMatches;
            } else a = { schema: n, validationResult: s, matchingSchemas: u };
          }), o.length > 1 && i && n.problems.push({ location: { offset: e.offset, length: 1 }, severity: He.Warning, message: Qt("oneOfWarning", "Matches multiple schemas when only one must validate.") }), null !== a && (n.merge(a.validationResult), n.propertiesMatches += a.validationResult.propertiesMatches, n.propertiesValueMatches += a.validationResult.propertiesValueMatches, r.merge(a.matchingSchemas)), o.length;
        };Array.isArray(t.anyOf) && u(t.anyOf, !1);Array.isArray(t.oneOf) && u(t.oneOf, !0);if (Array.isArray(t.enum)) {
          for (var c = pn(e), l = !1, f = 0, h = t.enum; f < h.length; f++) {
            var p = h[f];if (Yt(c, p)) {
              l = !0;break;
            }
          }n.enumValues = t.enum, n.enumValueMatch = l, l || n.problems.push({ location: { offset: e.offset, length: e.length }, severity: He.Warning, code: Rt.EnumValueMismatch, message: t.errorMessage || Qt("enumWarning", "Value is not accepted. Valid values: {0}.", t.enum.map(function (e) {
              return JSON.stringify(e);
            }).join(", ")) });
        }if (t.const) {
          var c = pn(e);Yt(c, t.const) ? n.enumValueMatch = !0 : (n.problems.push({ location: { offset: e.offset, length: e.length }, severity: He.Warning, code: Rt.EnumValueMismatch, message: t.errorMessage || Qt("constWarning", "Value must be {0}.", JSON.stringify(t.const)) }), n.enumValueMatch = !1), n.enumValues = [t.const];
        }t.deprecationMessage && e.parent && n.problems.push({ location: { offset: e.parent.offset, length: e.parent.length }, severity: He.Warning, message: t.deprecationMessage });
      }(), r.add({ node: e, schema: t });
    }
  }function yn(e, t) {
    var n = [],
        r = -1,
        i = e.getText(),
        o = Ut(i, !1),
        a = t && t.collectComments ? [] : void 0;function s() {
      for (;;) {
        var t = o.scan();switch (l(), t) {case 12:case 13:
            Array.isArray(a) && a.push(Ue.create(e.positionAt(o.getTokenOffset()), e.positionAt(o.getTokenOffset() + o.getTokenLength())));break;case 15:case 14:
            break;default:
            return t;}
      }
    }function u(t, i, o, a, s) {
      if (void 0 === s && (s = He.Error), 0 === n.length || o !== r) {
        var u = Ue.create(e.positionAt(o), e.positionAt(a));n.push(ze.create(u, t, s, i, e.languageId)), r = o;
      }
    }function c(e, t, n, r, a) {
      void 0 === n && (n = null), void 0 === r && (r = []), void 0 === a && (a = []);var c = o.getTokenOffset(),
          l = o.getTokenOffset() + o.getTokenLength();if (c === l && c > 0) {
        for (c--; c > 0 && /\s/.test(i.charAt(c));) {
          c--;
        }l = c + 1;
      }if (u(e, t, c, l), n && f(n, !1), r.length + a.length > 0) for (var h = o.getToken(); 17 !== h;) {
        if (-1 !== r.indexOf(h)) {
          s();break;
        }if (-1 !== a.indexOf(h)) break;h = s();
      }return n;
    }function l() {
      switch (o.getTokenError()) {case 4:
          return c(Qt("InvalidUnicode", "Invalid unicode sequence in string."), Rt.InvalidUnicode), !0;case 5:
          return c(Qt("InvalidEscapeCharacter", "Invalid escape character in string."), Rt.InvalidEscapeCharacter), !0;case 3:
          return c(Qt("UnexpectedEndOfNumber", "Unexpected end of number."), Rt.UnexpectedEndOfNumber), !0;case 1:
          return c(Qt("UnexpectedEndOfComment", "Unexpected end of comment."), Rt.UnexpectedEndOfComment), !0;case 2:
          return c(Qt("UnexpectedEndOfString", "Unexpected end of string."), Rt.UnexpectedEndOfString), !0;case 6:
          return c(Qt("InvalidCharacter", "Invalid characters in string. Control characters must be escaped."), Rt.InvalidCharacter), !0;}return !1;
    }function f(e, t) {
      return e.length = o.getTokenOffset() + o.getTokenLength() - e.offset, t && s(), e;
    }function h(t, n) {
      var r = new sn(t, o.getTokenOffset()),
          i = p(r);if (!i) {
        if (16 !== o.getToken()) return null;c(Qt("DoubleQuotesExpected", "Property keys must be doublequoted"), Rt.Undefined);var a = new an(r, o.getTokenOffset(), o.getTokenLength());a.value = o.getTokenValue(), i = a, s();
      }r.keyNode = i;var l = n[i.value];if (l ? (u(Qt("DuplicateKeyWarning", "Duplicate object key"), Rt.DuplicateKey, r.keyNode.offset, r.keyNode.offset + r.keyNode.length, He.Warning), "object" == (typeof l === "undefined" ? "undefined" : _typeof(l)) && u(Qt("DuplicateKeyWarning", "Duplicate object key"), Rt.DuplicateKey, l.keyNode.offset, l.keyNode.offset + l.keyNode.length, He.Warning), n[i.value] = !0) : n[i.value] = r, 6 === o.getToken()) r.colonOffset = o.getTokenOffset(), s();else if (c(Qt("ColonExpected", "Colon expected"), Rt.ColonExpected), 10 === o.getToken() && e.positionAt(i.offset + i.length).line < e.positionAt(o.getTokenOffset()).line) return r.length = i.length, r;var f = d(r, i.value);return f ? (r.valueNode = f, r.length = f.offset + f.length - r.offset, r) : c(Qt("ValueExpected", "Value expected"), Rt.ValueExpected, r, [], [2, 5]);
    }function p(e) {
      if (10 !== o.getToken()) return null;var t = new an(e, o.getTokenOffset());return t.value = o.getTokenValue(), f(t, !0);
    }function d(e, t) {
      return function (e) {
        if (3 !== o.getToken()) return null;var t = new rn(e, o.getTokenOffset());s();for (var n = 0, r = !1; 4 !== o.getToken() && 17 !== o.getToken();) {
          if (5 === o.getToken()) {
            r || c(Qt("ValueExpected", "Value expected"), Rt.ValueExpected);var i = o.getTokenOffset();if (s(), 4 === o.getToken()) {
              r && u(Qt("TrailingComma", "Trailing comma"), Rt.TrailingComma, i, i + 1);continue;
            }
          } else r && c(Qt("ExpectedComma", "Expected comma"), Rt.CommaExpected);var a = d(t, n++);a ? t.items.push(a) : c(Qt("PropertyExpected", "Value expected"), Rt.ValueExpected, null, [], [4, 5]), r = !0;
        }return 4 !== o.getToken() ? c(Qt("ExpectedCloseBracket", "Expected comma or closing bracket"), Rt.CommaOrCloseBacketExpected, t) : f(t, !0);
      }(e) || function (e) {
        if (1 !== o.getToken()) return null;var t = new un(e, o.getTokenOffset()),
            n = Object.create(null);s();for (var r = !1; 2 !== o.getToken() && 17 !== o.getToken();) {
          if (5 === o.getToken()) {
            r || c(Qt("PropertyExpected", "Property expected"), Rt.PropertyExpected);var i = o.getTokenOffset();if (s(), 2 === o.getToken()) {
              r && u(Qt("TrailingComma", "Trailing comma"), Rt.TrailingComma, i, i + 1);continue;
            }
          } else r && c(Qt("ExpectedComma", "Expected comma"), Rt.CommaExpected);var a = h(t, n);a ? t.properties.push(a) : c(Qt("PropertyExpected", "Property expected"), Rt.PropertyExpected, null, [], [2, 5]), r = !0;
        }return 2 !== o.getToken() ? c(Qt("ExpectedCloseBrace", "Expected comma or closing brace"), Rt.CommaOrCloseBraceExpected, t) : f(t, !0);
      }(e) || p(e) || function (e) {
        if (11 !== o.getToken()) return null;var t = new on(e, o.getTokenOffset());if (0 === o.getTokenError()) {
          var n = o.getTokenValue();try {
            var r = JSON.parse(n);if ("number" != typeof r) return c(Qt("InvalidNumberFormat", "Invalid number format."), Rt.Undefined, t);t.value = r;
          } catch (e) {
            return c(Qt("InvalidNumberFormat", "Invalid number format."), Rt.Undefined, t);
          }t.isInteger = -1 === n.indexOf(".");
        }return f(t, !0);
      }(e) || function (e) {
        switch (o.getToken()) {case 7:
            return f(new tn(e, o.getTokenOffset()), !0);case 8:
            return f(new nn(e, !0, o.getTokenOffset()), !0);case 9:
            return f(new nn(e, !1, o.getTokenOffset()), !0);default:
            return null;}
      }(e);
    }var m = null;return 17 !== s() && ((m = d(null)) ? 17 !== o.getToken() && c(Qt("End of file expected", "End of file expected."), Rt.Undefined) : c(Qt("Invalid symbol", "Expected a JSON object, array or literal."), Rt.Undefined)), new gn(m, n, a);
  }function bn(e, t) {
    var n = e.length - t.length;return n > 0 ? e.lastIndexOf(t) === n : 0 === n && e === t;
  }var _n = Jt(),
      Cn = function () {
    function e(e, t, n) {
      void 0 === t && (t = []), this.templateVarIdCounter = 0, this.schemaService = e, this.contributions = t, this.promise = n || Promise;
    }return e.prototype.doResolve = function (e) {
      for (var t = this.contributions.length - 1; t >= 0; t--) {
        if (this.contributions[t].resolveCompletion) {
          var n = this.contributions[t].resolveCompletion(e);if (n) return n;
        }
      }return this.promise.resolve(e);
    }, e.prototype.doComplete = function (e, t, n) {
      var r = this,
          i = { items: [], isIncomplete: !1 },
          o = e.offsetAt(t),
          a = n.getNodeFromOffset(o, !0);if (this.isInComment(e, a ? a.offset : 0, o)) return Promise.resolve(i);var s = this.getCurrentWord(e, o),
          u = null;if (!a || "string" !== a.type && "number" !== a.type && "boolean" !== a.type && "null" !== a.type) {
        var c = o - s.length;c > 0 && '"' === e.getText()[c - 1] && c--, u = Ue.create(e.positionAt(c), t);
      } else u = Ue.create(e.positionAt(a.offset), e.positionAt(a.offset + a.length));var l = {},
          f = { add: function add(e) {
          var t = l[e.label];t ? t.documentation || (t.documentation = e.documentation) : (l[e.label] = e, u && (e.textEdit = Qe.replace(u, e.insertText)), i.items.push(e));
        }, setAsIncomplete: function setAsIncomplete() {
          i.isIncomplete = !0;
        }, error: function error(e) {
          console.error(e);
        }, log: function log(e) {
          console.log(e);
        }, getNumberOfProposals: function getNumberOfProposals() {
          return i.items.length;
        } };return this.schemaService.getSchemaForResource(e.uri, n).then(function (t) {
        var c = [],
            h = !0,
            p = "",
            d = null;if (a && "string" === a.type) {
          var m = a.parent;m && "property" === m.type && m.keyNode === a && (h = !m.valueNode, d = m, p = e.getText().substr(a.offset + 1, a.length - 2), m && (a = m.parent));
        }if (a && "object" === a.type) {
          if (a.offset === o) return i;a.properties.forEach(function (e) {
            d && d === e || (l[e.keyNode.value] = ct.create("__"));
          });var g = "";h && (g = r.evaluateSeparatorAfter(e, e.offsetAt(u.end))), t ? r.getPropertyCompletions(t, n, a, h, g, f) : r.getSchemaLessPropertyCompletions(n, a, p, f);var v = dn(a);r.contributions.forEach(function (t) {
            var n = t.collectPropertyCompletions(e.uri, v, s, h, "" === g, f);n && c.push(n);
          }), !t && s.length > 0 && '"' !== e.getText().charAt(o - s.length - 1) && f.add({ kind: st.Property, label: r.getLabelForValue(s), insertText: r.getInsertTextForProperty(s, null, !1, g), insertTextFormat: ut.Snippet, documentation: "" });
        }var y = {};return t ? r.getValueCompletions(t, n, a, o, e, f, y) : r.getSchemaLessValueCompletions(n, a, o, e, f), r.contributions.length > 0 && r.getContributedValueCompletions(n, a, o, e, f, c), r.promise.all(c).then(function () {
          if (0 === f.getNumberOfProposals()) {
            var t = o;!a || "string" !== a.type && "number" !== a.type && "boolean" !== a.type && "null" !== a.type || (t = a.offset + a.length);var n = r.evaluateSeparatorAfter(e, t);r.addFillerValueCompletions(y, n, f);
          }return i;
        });
      });
    }, e.prototype.getPropertyCompletions = function (e, t, n, r, i, o) {
      var a = this;t.getMatchingSchemas(e.schema, n.offset).forEach(function (e) {
        if (e.node === n && !e.inverted) {
          var t = e.schema.properties;t && Object.keys(t).forEach(function (e) {
            var n = t[e];if ("object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && !n.deprecationMessage && !n.doNotSuggest) {
              var s = { kind: st.Property, label: e, insertText: a.getInsertTextForProperty(e, n, r, i), insertTextFormat: ut.Snippet, filterText: a.getFilterTextForValue(e), documentation: n.description || "" };bn(s.insertText, "$1" + i) && (s.command = { title: "Suggest", command: "editor.action.triggerSuggest" }), o.add(s);
            }
          });
        }
      });
    }, e.prototype.getSchemaLessPropertyCompletions = function (e, t, n, r) {
      var i = this,
          o = function o(e) {
        e.properties.forEach(function (e) {
          var t = e.keyNode.value;r.add({ kind: st.Property, label: t, insertText: i.getInsertTextForValue(t, ""), insertTextFormat: ut.Snippet, filterText: i.getFilterTextForValue(t), documentation: "" });
        });
      };if (t.parent) {
        if ("property" === t.parent.type) {
          var a = t.parent.keyNode.value;e.visit(function (e) {
            return "property" === e.type && e !== t.parent && e.keyNode.value === a && e.valueNode && "object" === e.valueNode.type && o(e.valueNode), !0;
          });
        } else "array" === t.parent.type && t.parent.items.forEach(function (e) {
          "object" === e.type && e !== t && o(e);
        });
      } else "object" === t.type && r.add({ kind: st.Property, label: "$schema", insertText: this.getInsertTextForProperty("$schema", null, !0, ""), insertTextFormat: ut.Snippet, documentation: "", filterText: this.getFilterTextForValue("$schema") });
    }, e.prototype.getSchemaLessValueCompletions = function (e, t, n, r, i) {
      var o = this,
          a = n;if (!t || "string" !== t.type && "number" !== t.type && "boolean" !== t.type && "null" !== t.type || (a = t.offset + t.length, t = t.parent), !t) return i.add({ kind: this.getSuggestionKind("object"), label: "Empty object", insertText: this.getInsertTextForValue({}, ""), insertTextFormat: ut.Snippet, documentation: "" }), void i.add({ kind: this.getSuggestionKind("array"), label: "Empty array", insertText: this.getInsertTextForValue([], ""), insertTextFormat: ut.Snippet, documentation: "" });var s = this.evaluateSeparatorAfter(r, a),
          u = function u(e) {
        mn(e.parent, n, !0) || i.add({ kind: o.getSuggestionKind(e.type), label: o.getLabelTextForMatchingNode(e, r), insertText: o.getInsertTextForMatchingNode(e, r, s), insertTextFormat: ut.Snippet, documentation: "" }), "boolean" === e.type && o.addBooleanValueCompletion(!e.value, s, i);
      };if ("property" === t.type && n > t.colonOffset) {
        var c = t.valueNode;if (c && (n > c.offset + c.length || "object" === c.type || "array" === c.type)) return;var l = t.keyNode.value;e.visit(function (e) {
          return "property" === e.type && e.keyNode.value === l && e.valueNode && u(e.valueNode), !0;
        }), "$schema" === l && t.parent && !t.parent.parent && this.addDollarSchemaCompletions(s, i);
      }if ("array" === t.type) if (t.parent && "property" === t.parent.type) {
        var f = t.parent.keyNode.value;e.visit(function (e) {
          return "property" === e.type && e.keyNode.value === f && e.valueNode && "array" === e.valueNode.type && e.valueNode.items.forEach(u), !0;
        });
      } else t.items.forEach(u);
    }, e.prototype.getValueCompletions = function (e, t, n, r, i, o, a) {
      var s = this,
          u = r,
          c = null,
          l = null;if (!n || "string" !== n.type && "number" !== n.type && "boolean" !== n.type && "null" !== n.type || (u = n.offset + n.length, l = n, n = n.parent), n) {
        if ("property" === n.type && r > n.colonOffset) {
          var f = n.valueNode;if (f && r > f.offset + f.length) return;c = n.keyNode.value, n = n.parent;
        }if (n && (null !== c || "array" === n.type)) {
          var h = this.evaluateSeparatorAfter(i, u);t.getMatchingSchemas(e.schema, n.offset, l).forEach(function (e) {
            if (e.node === n && !e.inverted && e.schema) {
              if ("array" === n.type && e.schema.items) if (Array.isArray(e.schema.items)) {
                var t = s.findItemAtOffset(n, i, r);t < e.schema.items.length && s.addSchemaValueCompletions(e.schema.items[t], h, o, a);
              } else s.addSchemaValueCompletions(e.schema.items, h, o, a);if (e.schema.properties) {
                var u = e.schema.properties[c];u && s.addSchemaValueCompletions(u, h, o, a);
              }
            }
          }), "$schema" !== c || n.parent || this.addDollarSchemaCompletions(h, o), a.boolean && (this.addBooleanValueCompletion(!0, h, o), this.addBooleanValueCompletion(!1, h, o)), a.null && this.addNullValueCompletion(h, o);
        }
      } else this.addSchemaValueCompletions(e.schema, "", o, a);
    }, e.prototype.getContributedValueCompletions = function (e, t, n, r, i, o) {
      if (t) {
        if ("string" !== t.type && "number" !== t.type && "boolean" !== t.type && "null" !== t.type || (t = t.parent), "property" === t.type && n > t.colonOffset) {
          var a = t.keyNode.value,
              s = t.valueNode;if (!s || n <= s.offset + s.length) {
            var u = dn(t.parent);this.contributions.forEach(function (e) {
              var t = e.collectValueCompletions(r.uri, u, a, i);t && o.push(t);
            });
          }
        }
      } else this.contributions.forEach(function (e) {
        var t = e.collectDefaultCompletions(r.uri, i);t && o.push(t);
      });
    }, e.prototype.addSchemaValueCompletions = function (e, t, n, r) {
      var i = this;"object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && (this.addEnumValueCompletions(e, t, n), this.addDefaultValueCompletions(e, t, n), this.collectTypes(e, r), Array.isArray(e.allOf) && e.allOf.forEach(function (e) {
        return i.addSchemaValueCompletions(e, t, n, r);
      }), Array.isArray(e.anyOf) && e.anyOf.forEach(function (e) {
        return i.addSchemaValueCompletions(e, t, n, r);
      }), Array.isArray(e.oneOf) && e.oneOf.forEach(function (e) {
        return i.addSchemaValueCompletions(e, t, n, r);
      }));
    }, e.prototype.addDefaultValueCompletions = function (e, t, n, r) {
      var i = this;void 0 === r && (r = 0);var o = !1;if (Sn(e.default)) {
        for (var a = e.type, s = e.default, u = r; u > 0; u--) {
          s = [s], a = "array";
        }n.add({ kind: this.getSuggestionKind(a), label: this.getLabelForValue(s), insertText: this.getInsertTextForValue(s, t), insertTextFormat: ut.Snippet, detail: _n("json.suggest.default", "Default value") }), o = !0;
      }Array.isArray(e.defaultSnippets) && e.defaultSnippets.forEach(function (a) {
        var s,
            u,
            c = e.type,
            l = a.body,
            f = a.label;if (Sn(l)) {
          e.type;for (var h = r; h > 0; h--) {
            l = [l], "array";
          }s = i.getInsertTextForSnippetValue(l, t), u = i.getFilterTextForSnippetValue(l), f = f || i.getLabelForSnippetValue(l);
        } else if ("string" == typeof a.bodyText) {
          var p = "",
              d = "",
              m = "";for (h = r; h > 0; h--) {
            p = p + m + "[\n", d = d + "\n" + m + "]", m += "\t", c = "array";
          }s = p + m + a.bodyText.split("\n").join("\n" + m) + d + t, f = f || s, u = s.replace(/[\n]/g, "");
        }n.add({ kind: i.getSuggestionKind(c), label: f, documentation: a.description, insertText: s, insertTextFormat: ut.Snippet, filterText: u }), o = !0;
      }), o || "object" != _typeof(e.items) || Array.isArray(e.items) || this.addDefaultValueCompletions(e.items, t, n, r + 1);
    }, e.prototype.addEnumValueCompletions = function (e, t, n) {
      if (Sn(e.const) && n.add({ kind: this.getSuggestionKind(e.type), label: this.getLabelForValue(e.const), insertText: this.getInsertTextForValue(e.const, t), insertTextFormat: ut.Snippet, documentation: e.description }), Array.isArray(e.enum)) for (var r = 0, i = e.enum.length; r < i; r++) {
        var o = e.enum[r],
            a = e.description;e.enumDescriptions && r < e.enumDescriptions.length && (a = e.enumDescriptions[r]), n.add({ kind: this.getSuggestionKind(e.type), label: this.getLabelForValue(o), insertText: this.getInsertTextForValue(o, t), insertTextFormat: ut.Snippet, documentation: a });
      }
    }, e.prototype.collectTypes = function (e, t) {
      if (!Array.isArray(e.enum) && !Sn(e.const)) {
        var n = e.type;Array.isArray(n) ? n.forEach(function (e) {
          return t[e] = !0;
        }) : t[n] = !0;
      }
    }, e.prototype.addFillerValueCompletions = function (e, t, n) {
      e.object && n.add({ kind: this.getSuggestionKind("object"), label: "{}", insertText: this.getInsertTextForGuessedValue({}, t), insertTextFormat: ut.Snippet, detail: _n("defaults.object", "New object"), documentation: "" }), e.array && n.add({ kind: this.getSuggestionKind("array"), label: "[]", insertText: this.getInsertTextForGuessedValue([], t), insertTextFormat: ut.Snippet, detail: _n("defaults.array", "New array"), documentation: "" });
    }, e.prototype.addBooleanValueCompletion = function (e, t, n) {
      n.add({ kind: this.getSuggestionKind("boolean"), label: e ? "true" : "false", insertText: this.getInsertTextForValue(e, t), insertTextFormat: ut.Snippet, documentation: "" });
    }, e.prototype.addNullValueCompletion = function (e, t) {
      t.add({ kind: this.getSuggestionKind("null"), label: "null", insertText: "null" + e, insertTextFormat: ut.Snippet, documentation: "" });
    }, e.prototype.addDollarSchemaCompletions = function (e, t) {
      var n = this;this.schemaService.getRegisteredSchemaIds(function (e) {
        return "http" === e || "https" === e;
      }).forEach(function (r) {
        return t.add({ kind: st.Module, label: n.getLabelForValue(r), filterText: n.getFilterTextForValue(r), insertText: n.getInsertTextForValue(r, e), insertTextFormat: ut.Snippet, documentation: "" });
      });
    }, e.prototype.getLabelForValue = function (e) {
      var t = JSON.stringify(e);return t.length > 57 ? t.substr(0, 57).trim() + "..." : t;
    }, e.prototype.getFilterTextForValue = function (e) {
      return JSON.stringify(e);
    }, e.prototype.getFilterTextForSnippetValue = function (e) {
      return JSON.stringify(e).replace(/\$\{\d+:([^}]+)\}|\$\d+/g, "$1");
    }, e.prototype.getLabelForSnippetValue = function (e) {
      var t = JSON.stringify(e);return (t = t.replace(/\$\{\d+:([^}]+)\}|\$\d+/g, "$1")).length > 57 ? t.substr(0, 57).trim() + "..." : t;
    }, e.prototype.getInsertTextForPlainText = function (e) {
      return e.replace(/[\\\$\}]/g, "\\$&");
    }, e.prototype.getInsertTextForValue = function (e, t) {
      var n = JSON.stringify(e, null, "\t");return "{}" === n ? "{\n\t$1\n}" + t : "[]" === n ? "[\n\t$1\n]" + t : this.getInsertTextForPlainText(n + t);
    }, e.prototype.getInsertTextForSnippetValue = function (e, t) {
      return function e(t, n, r) {
        if (null !== t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t))) {
          var i = n + "\t";if (Array.isArray(t)) {
            if (0 === t.length) return "[]";for (var o = "[\n", a = 0; a < t.length; a++) {
              o += i + e(t[a], i, r), a < t.length - 1 && (o += ","), o += "\n";
            }return o += n + "]";
          }var s = Object.keys(t);if (0 === s.length) return "{}";for (o = "{\n", a = 0; a < s.length; a++) {
            var u = s[a];o += i + JSON.stringify(u) + ": " + e(t[u], i, r), a < s.length - 1 && (o += ","), o += "\n";
          }return o += n + "}";
        }return r(t);
      }(e, "", function (e) {
        return "string" == typeof e && "^" === e[0] ? e.substr(1) : JSON.stringify(e);
      }) + t;
    }, e.prototype.getInsertTextForGuessedValue = function (e, t) {
      switch (typeof e === "undefined" ? "undefined" : _typeof(e)) {case "object":
          return null === e ? "${1:null}" + t : this.getInsertTextForValue(e, t);case "string":
          var n = JSON.stringify(e);return n = n.substr(1, n.length - 2), '"${1:' + (n = this.getInsertTextForPlainText(n)) + '}"' + t;case "number":case "boolean":
          return "${1:" + JSON.stringify(e) + "}" + t;}return this.getInsertTextForValue(e, t);
    }, e.prototype.getSuggestionKind = function (e) {
      if (Array.isArray(e)) {
        var t = e;e = t.length > 0 ? t[0] : null;
      }if (!e) return st.Value;switch (e) {case "string":
          return st.Value;case "object":
          return st.Module;case "property":
          return st.Property;default:
          return st.Value;}
    }, e.prototype.getLabelTextForMatchingNode = function (e, t) {
      switch (e.type) {case "array":
          return "[]";case "object":
          return "{}";default:
          return t.getText().substr(e.offset, e.length);}
    }, e.prototype.getInsertTextForMatchingNode = function (e, t, n) {
      switch (e.type) {case "array":
          return this.getInsertTextForValue([], n);case "object":
          return this.getInsertTextForValue({}, n);default:
          var r = t.getText().substr(e.offset, e.length) + n;return this.getInsertTextForPlainText(r);}
    }, e.prototype.getInsertTextForProperty = function (e, t, n, r) {
      var i = this.getInsertTextForValue(e, "");if (!n) return i;var o,
          a = i + ": ",
          s = 0;if (t) {
        if (Array.isArray(t.defaultSnippets)) {
          if (1 === t.defaultSnippets.length) {
            var u = t.defaultSnippets[0].body;Sn(u) && (o = this.getInsertTextForSnippetValue(u, ""));
          }s += t.defaultSnippets.length;
        }if (t.enum && (o || 1 !== t.enum.length || (o = this.getInsertTextForGuessedValue(t.enum[0], "")), s += t.enum.length), Sn(t.default) && (o || (o = this.getInsertTextForGuessedValue(t.default, "")), s++), 0 === s) {
          var c = Array.isArray(t.type) ? t.type[0] : t.type;switch (c || (t.properties ? c = "object" : t.items && (c = "array")), c) {case "boolean":
              o = "$1";break;case "string":
              o = '"$1"';break;case "object":
              o = "{\n\t$1\n}";break;case "array":
              o = "[\n\t$1\n]";break;case "number":case "integer":
              o = "${1:0}";break;case "null":
              o = "${1:null}";break;default:
              return i;}
        }
      }return (!o || s > 1) && (o = "$1"), a + o + r;
    }, e.prototype.getCurrentWord = function (e, t) {
      for (var n = t - 1, r = e.getText(); n >= 0 && -1 === ' \t\n\r\v":{[,]}'.indexOf(r.charAt(n));) {
        n--;
      }return r.substring(n + 1, t);
    }, e.prototype.evaluateSeparatorAfter = function (e, t) {
      var n = Ut(e.getText(), !0);switch (n.setPosition(t), n.scan()) {case 5:case 2:case 4:case 17:
          return "";default:
          return ",";}
    }, e.prototype.findItemAtOffset = function (e, t, n) {
      for (var r = Ut(t.getText(), !0), i = e.items, o = i.length - 1; o >= 0; o--) {
        var a = i[o];if (n > a.offset + a.length) return r.setPosition(a.offset + a.length), 5 === r.scan() && n >= r.getTokenOffset() + r.getTokenLength() ? o + 1 : o;if (n >= a.offset) return o;
      }return 0;
    }, e.prototype.isInComment = function (e, t, n) {
      var r = Ut(e.getText(), !1);r.setPosition(t);for (var i = r.scan(); 17 !== i && r.getTokenOffset() + r.getTokenLength() < n;) {
        i = r.scan();
      }return (12 === i || 13 === i) && r.getTokenOffset() <= n;
    }, e;
  }();function Sn(e) {
    return void 0 !== e;
  }var En = function () {
    function e(e, t, n) {
      void 0 === t && (t = []), this.schemaService = e, this.contributions = t, this.promise = n || Promise;
    }return e.prototype.doHover = function (e, t, n) {
      var r = e.offsetAt(t),
          i = n.getNodeFromOffset(r);if (!i || ("object" === i.type || "array" === i.type) && r > i.offset + 1 && r < i.offset + i.length - 1) return this.promise.resolve(null);var o = i;if ("string" === i.type) {
        var a = i.parent;if ("property" === a.type && a.keyNode === i && !(i = a.valueNode)) return this.promise.resolve(null);
      }for (var s = Ue.create(e.positionAt(o.offset), e.positionAt(o.offset + o.length)), u = function u(e) {
        return { contents: e, range: s };
      }, c = dn(i), l = this.contributions.length - 1; l >= 0; l--) {
        var f = this.contributions[l].getInfoContribution(e.uri, c);if (f) return f.then(function (e) {
          return u(e);
        });
      }return this.schemaService.getSchemaForResource(e.uri, n).then(function (e) {
        if (e) {
          var t = null,
              r = null,
              o = null,
              a = null;n.getMatchingSchemas(e.schema, i.offset).every(function (e) {
            if (e.node === i && !e.inverted && e.schema && (t = t || e.schema.title, r = r || e.schema.markdownDescription || An(e.schema.description), e.schema.enum)) {
              var n = e.schema.enum.indexOf(pn(i));e.schema.markdownEnumDescriptions ? o = e.schema.markdownEnumDescriptions[n] : e.schema.enumDescriptions && (o = An(e.schema.enumDescriptions[n])), o && "string" != typeof (a = e.schema.enum[n]) && (a = JSON.stringify(a));
            }return !0;
          });var s = "";return t && (s = An(t)), r && (s.length > 0 && (s += "\n\n"), s += r), o && (s.length > 0 && (s += "\n\n"), s += "`" + An(a) + "`: " + o), u([s]);
        }return null;
      });
    }, e;
  }();function An(e) {
    if (e) return e.replace(/([^\n\r])(\r?\n)([^\n\r])/gm, "$1\n\n$3").replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
  }var xn = Jt(),
      Nn = function () {
    function e(e, t) {
      this.jsonSchemaService = e, this.promise = t, this.validationEnabled = !0;
    }return e.prototype.configure = function (e) {
      e && (this.validationEnabled = e.validate, this.commentSeverity = e.allowComments ? void 0 : He.Error);
    }, e.prototype.doValidation = function (e, t, n, r) {
      var i = this;if (!this.validationEnabled) return this.promise.resolve([]);var o = [],
          a = {},
          s = function s(e) {
        var t = e.range.start.line + " " + e.range.start.character + " " + e.message;a[t] || (a[t] = !0, o.push(e));
      },
          u = function u(r) {
        var a = n ? wn(n.trailingCommas) : He.Error,
            u = n ? wn(n.comments) : i.commentSeverity;if (r) {
          if (r.errors.length && t.root) {
            var c = t.root,
                l = "object" === c.type ? c.properties[0] : null;if (l && "$schema" === l.keyNode.value) {
              var f = l.valueNode || l,
                  h = Ue.create(e.positionAt(f.offset), e.positionAt(f.offset + f.length));s(ze.create(h, r.errors[0], He.Warning, Rt.SchemaResolveError));
            } else {
              h = Ue.create(e.positionAt(c.offset), e.positionAt(c.offset + 1));s(ze.create(h, r.errors[0], He.Warning, Rt.SchemaResolveError));
            }
          } else {
            var p = t.validate(e, r.schema);p && p.forEach(s);
          }kn(r.schema) && (a = u = void 0);
        }if (t.syntaxErrors.forEach(function (e) {
          if (e.code === Rt.TrailingComma) {
            if ("number" != typeof u) return;e.severity = a;
          }s(e);
        }), "number" == typeof u) {
          var d = xn("InvalidCommentToken", "Comments are not permitted in JSON.");t.comments.forEach(function (e) {
            s(ze.create(e, d, u, Rt.CommentNotPermitted));
          });
        }return o;
      };return r ? this.promise.resolve(u(r)) : this.jsonSchemaService.getSchemaForResource(e.uri, t).then(function (e) {
        return u(e);
      });
    }, e;
  }();function kn(e) {
    if (e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e))) {
      if (e.allowComments) return !0;if (e.allOf) return e.allOf.some(kn);
    }return !1;
  }function wn(e) {
    switch (e) {case "error":
        return He.Error;case "warning":
        return He.Warning;case "ignore":
        return;}
  }var Ln = 48,
      Pn = 57,
      On = 65,
      Tn = 97,
      Mn = 102;function In(e) {
    return e < Ln ? 0 : e <= Pn ? e - Ln : (e < Tn && (e += Tn - On), e >= Tn && e <= Mn ? e - Tn + 10 : 0);
  }function Vn(e) {
    if ("#" !== e[0]) return null;switch (e.length) {case 4:
        return { red: 17 * In(e.charCodeAt(1)) / 255, green: 17 * In(e.charCodeAt(2)) / 255, blue: 17 * In(e.charCodeAt(3)) / 255, alpha: 1 };case 5:
        return { red: 17 * In(e.charCodeAt(1)) / 255, green: 17 * In(e.charCodeAt(2)) / 255, blue: 17 * In(e.charCodeAt(3)) / 255, alpha: 17 * In(e.charCodeAt(4)) / 255 };case 7:
        return { red: (16 * In(e.charCodeAt(1)) + In(e.charCodeAt(2))) / 255, green: (16 * In(e.charCodeAt(3)) + In(e.charCodeAt(4))) / 255, blue: (16 * In(e.charCodeAt(5)) + In(e.charCodeAt(6))) / 255, alpha: 1 };case 9:
        return { red: (16 * In(e.charCodeAt(1)) + In(e.charCodeAt(2))) / 255, green: (16 * In(e.charCodeAt(3)) + In(e.charCodeAt(4))) / 255, blue: (16 * In(e.charCodeAt(5)) + In(e.charCodeAt(6))) / 255, alpha: (16 * In(e.charCodeAt(7)) + In(e.charCodeAt(8))) / 255 };}return null;
  }var jn = function () {
    function e(e) {
      this.schemaService = e;
    }return e.prototype.findDocumentSymbols = function (e, t) {
      var n = this,
          r = t.root;if (!r) return null;var i = e.uri;if (("vscode://defaultsettings/keybindings.json" === i || bn(i.toLowerCase(), "/user/keybindings.json")) && "array" === r.type) {
        var o = [];return r.items.forEach(function (t) {
          if ("object" === t.type) for (var n = 0, r = t.properties; n < r.length; n++) {
            var i = r[n];if ("key" === i.keyNode.value) {
              if (i.valueNode) {
                var a = We.create(e.uri, Ue.create(e.positionAt(t.offset), e.positionAt(t.offset + t.length)));o.push({ name: pn(i.valueNode), kind: vt.Function, location: a });
              }return;
            }
          }
        }), o;
      }var a = function a(t, r, i) {
        return "array" === r.type ? r.items.forEach(function (e) {
          return a(t, e, i);
        }) : "object" === r.type && r.properties.forEach(function (r) {
          var o = We.create(e.uri, Ue.create(e.positionAt(r.offset), e.positionAt(r.offset + r.length))),
              s = r.valueNode;if (s) {
            var u = i ? i + "." + r.keyNode.value : r.keyNode.value;t.push({ name: r.keyNode.value, kind: n.getSymbolKind(s.type), location: o, containerName: i }), a(t, s, u);
          }
        }), t;
      };return a([], r, void 0);
    }, e.prototype.getSymbolKind = function (e) {
      switch (e) {case "object":
          return vt.Module;case "string":
          return vt.String;case "number":
          return vt.Number;case "array":
          return vt.Array;case "boolean":
          return vt.Boolean;default:
          return vt.Variable;}
    }, e.prototype.findDocumentColors = function (e, t) {
      return this.schemaService.getSchemaForResource(e.uri, t).then(function (n) {
        var r = [];if (n) for (var i = {}, o = 0, a = t.getMatchingSchemas(n.schema); o < a.length; o++) {
          var s = a[o];if (!s.inverted && s.schema && ("color" === s.schema.format || "color-hex" === s.schema.format) && s.node && "string" === s.node.type) {
            var u = String(s.node.offset);if (!i[u]) {
              var c = Vn(pn(s.node));if (c) {
                var l = Ue.create(e.positionAt(s.node.offset), e.positionAt(s.node.offset + s.node.length));r.push({ color: c, range: l });
              }i[u] = !0;
            }
          }
        }return r;
      });
    }, e.prototype.getColorPresentations = function (e, t, n, r) {
      var i,
          o = [],
          a = Math.round(255 * n.red),
          s = Math.round(255 * n.green),
          u = Math.round(255 * n.blue);function c(e) {
        var t = e.toString(16);return 2 !== t.length ? "0" + t : t;
      }return i = 1 === n.alpha ? "#" + c(a) + c(s) + c(u) : "#" + c(a) + c(s) + c(u) + c(Math.round(255 * n.alpha)), o.push({ label: i, textEdit: Qe.replace(r, JSON.stringify(i)) }), o;
    }, e;
  }(),
      Dn = Jt(),
      Fn = { schemaAssociations: {}, schemas: { "http://json-schema.org/draft-04/schema#": { title: Dn("schema.json", "Describes a JSON file using a schema. See json-schema.org for more info."), $schema: "http://json-schema.org/draft-04/schema#", definitions: { schemaArray: { type: "array", minItems: 1, items: { $ref: "#" } }, positiveInteger: { type: "integer", minimum: 0 }, positiveIntegerDefault0: { allOf: [{ $ref: "#/definitions/positiveInteger" }, { default: 0 }] }, simpleTypes: { type: "string", enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, minItems: 1, uniqueItems: !0 } }, type: "object", properties: { id: { type: "string", format: "uri", description: Dn("schema.json.id", "A unique identifier for the schema.") }, $schema: { type: "string", format: "uri", description: Dn("schema.json.$schema", "The schema to verify this document against ") }, title: { type: "string", description: Dn("schema.json.title", "A descriptive title of the element") }, description: { type: "string", description: Dn("schema.json.description", "A long description of the element. Used in hover menus and suggestions.") }, default: { description: Dn("schema.json.default", "A default value. Used by suggestions.") }, multipleOf: { type: "number", minimum: 0, exclusiveMinimum: !0, description: Dn("schema.json.multipleOf", "A number that should cleanly divide the current value (i.e. have no remainder)") }, maximum: { type: "number", description: Dn("schema.json.maximum", "The maximum numerical value, inclusive by default.") }, exclusiveMaximum: { type: "boolean", default: !1, description: Dn("schema.json.exclusiveMaximum", "Makes the maximum property exclusive.") }, minimum: { type: "number", description: Dn("schema.json.minimum", "The minimum numerical value, inclusive by default.") }, exclusiveMinimum: { type: "boolean", default: !1, description: Dn("schema.json.exclusiveMininum", "Makes the minimum property exclusive.") }, maxLength: { allOf: [{ $ref: "#/definitions/positiveInteger" }], description: Dn("schema.json.maxLength", "The maximum length of a string.") }, minLength: { allOf: [{ $ref: "#/definitions/positiveIntegerDefault0" }], description: Dn("schema.json.minLength", "The minimum length of a string.") }, pattern: { type: "string", format: "regex", description: Dn("schema.json.pattern", "A regular expression to match the string against. It is not implicitly anchored.") }, additionalItems: { anyOf: [{ type: "boolean" }, { $ref: "#" }], default: {}, description: Dn("schema.json.additionalItems", "For arrays, only when items is set as an array. If it is a schema, then this schema validates items after the ones specified by the items array. If it is false, then additional items will cause validation to fail.") }, items: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/schemaArray" }], default: {}, description: Dn("schema.json.items", "For arrays. Can either be a schema to validate every element against or an array of schemas to validate each item against in order (the first schema will validate the first element, the second schema will validate the second element, and so on.") }, maxItems: { allOf: [{ $ref: "#/definitions/positiveInteger" }], description: Dn("schema.json.maxItems", "The maximum number of items that can be inside an array. Inclusive.") }, minItems: { allOf: [{ $ref: "#/definitions/positiveIntegerDefault0" }], description: Dn("schema.json.minItems", "The minimum number of items that can be inside an array. Inclusive.") }, uniqueItems: { type: "boolean", default: !1, description: Dn("schema.json.uniqueItems", "If all of the items in the array must be unique. Defaults to false.") }, maxProperties: { allOf: [{ $ref: "#/definitions/positiveInteger" }], description: Dn("schema.json.maxProperties", "The maximum number of properties an object can have. Inclusive.") }, minProperties: { allOf: [{ $ref: "#/definitions/positiveIntegerDefault0" }], description: Dn("schema.json.minProperties", "The minimum number of properties an object can have. Inclusive.") }, required: { allOf: [{ $ref: "#/definitions/stringArray" }], description: Dn("schema.json.required", "An array of strings that lists the names of all properties required on this object.") }, additionalProperties: { anyOf: [{ type: "boolean" }, { $ref: "#" }], default: {}, description: Dn("schema.json.additionalProperties", "Either a schema or a boolean. If a schema, then used to validate all properties not matched by 'properties' or 'patternProperties'. If false, then any properties not matched by either will cause this schema to fail.") }, definitions: { type: "object", additionalProperties: { $ref: "#" }, default: {}, description: Dn("schema.json.definitions", "Not used for validation. Place subschemas here that you wish to reference inline with $ref") }, properties: { type: "object", additionalProperties: { $ref: "#" }, default: {}, description: Dn("schema.json.properties", "A map of property names to schemas for each property.") }, patternProperties: { type: "object", additionalProperties: { $ref: "#" }, default: {}, description: Dn("schema.json.patternProperties", "A map of regular expressions on property names to schemas for matching properties.") }, dependencies: { type: "object", additionalProperties: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/stringArray" }] }, description: Dn("schema.json.dependencies", "A map of property names to either an array of property names or a schema. An array of property names means the property named in the key depends on the properties in the array being present in the object in order to be valid. If the value is a schema, then the schema is only applied to the object if the property in the key exists on the object.") }, enum: { type: "array", minItems: 1, uniqueItems: !0, description: Dn("schema.json.enum", "The set of literal values that are valid") }, type: { anyOf: [{ $ref: "#/definitions/simpleTypes" }, { type: "array", items: { $ref: "#/definitions/simpleTypes" }, minItems: 1, uniqueItems: !0 }], description: Dn("schema.json.type", "Either a string of one of the basic schema types (number, integer, null, array, object, boolean, string) or an array of strings specifying a subset of those types.") }, format: { anyOf: [{ type: "string", description: Dn("schema.json.format", "Describes the format expected for the value."), enum: ["date-time", "uri", "email", "hostname", "ipv4", "ipv6", "regex"] }, { type: "string" }] }, allOf: { allOf: [{ $ref: "#/definitions/schemaArray" }], description: Dn("schema.json.allOf", "An array of schemas, all of which must match.") }, anyOf: { allOf: [{ $ref: "#/definitions/schemaArray" }], description: Dn("schema.json.anyOf", "An array of schemas, where at least one must match.") }, oneOf: { allOf: [{ $ref: "#/definitions/schemaArray" }], description: Dn("schema.json.oneOf", "An array of schemas, exactly one of which must match.") }, not: { allOf: [{ $ref: "#" }], description: Dn("schema.json.not", "A schema which must not match.") } }, dependencies: { exclusiveMaximum: ["maximum"], exclusiveMinimum: ["minimum"] }, default: {} } } },
      Rn = Jt(),
      Un = function () {
    function e(e) {
      try {
        this.patternRegExp = new RegExp(function (e) {
          return e.replace(/[\-\\\{\}\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, "\\$&").replace(/[\*]/g, ".*");
        }(e) + "$");
      } catch (e) {
        this.patternRegExp = null;
      }this.schemas = [];
    }return e.prototype.addSchema = function (e) {
      this.schemas.push(e);
    }, e.prototype.matchesPattern = function (e) {
      return this.patternRegExp && this.patternRegExp.test(e);
    }, e.prototype.getSchemas = function () {
      return this.schemas;
    }, e;
  }(),
      Wn = function () {
    function e(e, t, n) {
      this.service = e, this.url = t, n && (this.unresolvedSchema = this.service.promise.resolve(new qn(n)));
    }return e.prototype.getUnresolvedSchema = function () {
      return this.unresolvedSchema || (this.unresolvedSchema = this.service.loadSchema(this.url)), this.unresolvedSchema;
    }, e.prototype.getResolvedSchema = function () {
      var e = this;return this.resolvedSchema || (this.resolvedSchema = this.getUnresolvedSchema().then(function (t) {
        return e.service.resolveSchemaContent(t, e.url);
      })), this.resolvedSchema;
    }, e.prototype.clearSchema = function () {
      this.resolvedSchema = null, this.unresolvedSchema = null;
    }, e;
  }(),
      qn = function () {
    return function (e, t) {
      void 0 === t && (t = []), this.schema = e, this.errors = t;
    };
  }(),
      Kn = function () {
    function e(e, t) {
      void 0 === t && (t = []), this.schema = e, this.errors = t;
    }return e.prototype.getSection = function (e) {
      return cn(this.getSectionRecursive(e, this.schema));
    }, e.prototype.getSectionRecursive = function (e, t) {
      var n = this;if (!t || "boolean" == typeof t || 0 === e.length) return t;var r = e.shift();if (t.properties && (t.properties[r], 1)) return this.getSectionRecursive(e, t.properties[r]);if (t.patternProperties) Object.keys(t.patternProperties).forEach(function (i) {
        if (new RegExp(i).test(r)) return n.getSectionRecursive(e, t.patternProperties[i]);
      });else {
        if ("object" == _typeof(t.additionalProperties)) return this.getSectionRecursive(e, t.additionalProperties);if (r.match("[0-9]+")) if (Array.isArray(t.items)) {
          var i = parseInt(r, 10);if (!isNaN(i) && t.items[i]) return this.getSectionRecursive(e, t.items[i]);
        } else if (t.items) return this.getSectionRecursive(e, t.items);
      }return null;
    }, e;
  }(),
      Bn = function () {
    function e(e, t, n) {
      this.contextService = t, this.requestService = e, this.promiseConstructor = n || Promise, this.callOnDispose = [], this.contributionSchemas = {}, this.contributionAssociations = {}, this.schemasById = {}, this.filePatternAssociations = [], this.filePatternAssociationById = {}, this.registeredSchemasIds = {};
    }return e.prototype.getRegisteredSchemaIds = function (e) {
      return Object.keys(this.registeredSchemasIds).filter(function (t) {
        var n = zt.a.parse(t).scheme;return "schemaservice" !== n && (!e || e(n));
      });
    }, Object.defineProperty(e.prototype, "promise", { get: function get() {
        return this.promiseConstructor;
      }, enumerable: !0, configurable: !0 }), e.prototype.dispose = function () {
      for (; this.callOnDispose.length > 0;) {
        this.callOnDispose.pop()();
      }
    }, e.prototype.onResourceChange = function (e) {
      e = this.normalizeId(e);var t = this.schemasById[e];return !!t && (t.clearSchema(), !0);
    }, e.prototype.normalizeId = function (e) {
      return zt.a.parse(e).toString();
    }, e.prototype.setSchemaContributions = function (e) {
      var t = this;if (e.schemas) {
        var n = e.schemas;for (var r in n) {
          var i = this.normalizeId(r);this.contributionSchemas[i] = this.addSchemaHandle(i, n[r]);
        }
      }if (e.schemaAssociations) {
        var o = e.schemaAssociations;for (var a in o) {
          var s = o[a];this.contributionAssociations[a] = s;var u = this.getOrAddFilePatternAssociation(a);s.forEach(function (e) {
            var n = t.normalizeId(e);u.addSchema(n);
          });
        }
      }
    }, e.prototype.addSchemaHandle = function (e, t) {
      var n = new Wn(this, e, t);return this.schemasById[e] = n, n;
    }, e.prototype.getOrAddSchemaHandle = function (e, t) {
      return this.schemasById[e] || this.addSchemaHandle(e, t);
    }, e.prototype.getOrAddFilePatternAssociation = function (e) {
      var t = this.filePatternAssociationById[e];return t || (t = new Un(e), this.filePatternAssociationById[e] = t, this.filePatternAssociations.push(t)), t;
    }, e.prototype.registerExternalSchema = function (e, t, n) {
      var r = this;void 0 === t && (t = null);var i = this.normalizeId(e);return this.registeredSchemasIds[i] = !0, t && t.forEach(function (e) {
        r.getOrAddFilePatternAssociation(e).addSchema(i);
      }), n ? this.addSchemaHandle(i, n) : this.getOrAddSchemaHandle(i);
    }, e.prototype.clearExternalSchemas = function () {
      var e = this;for (var t in this.schemasById = {}, this.filePatternAssociations = [], this.filePatternAssociationById = {}, this.registeredSchemasIds = {}, this.contributionSchemas) {
        this.schemasById[t] = this.contributionSchemas[t], this.registeredSchemasIds[t] = !0;
      }for (var n in this.contributionAssociations) {
        var r = this.getOrAddFilePatternAssociation(n);this.contributionAssociations[n].forEach(function (t) {
          var n = e.normalizeId(t);r.addSchema(n);
        });
      }
    }, e.prototype.getResolvedSchema = function (e) {
      var t = this.normalizeId(e),
          n = this.schemasById[t];return n ? n.getResolvedSchema() : this.promise.resolve(null);
    }, e.prototype.loadSchema = function (e) {
      if (!this.requestService) {
        var t = Rn("json.schema.norequestservice", "Unable to load schema from '{0}'. No schema request service available", Yn(e));return this.promise.resolve(new qn({}, [t]));
      }return this.requestService(e).then(function (t) {
        if (!t) {
          var n = Rn("json.schema.nocontent", "Unable to load schema from '{0}': No content.", Yn(e));return new qn({}, [n]);
        }var r,
            i = [];r = Wt(t, i);var o = i.length ? [Rn("json.schema.invalidFormat", "Unable to parse content from '{0}': Parse error at offset {1}.", Yn(e), i[0].offset)] : [];return new qn(r, o);
      }, function (t) {
        var n = Rn("json.schema.unabletoload", "Unable to load schema from '{0}': {1}", Yn(e), t.toString());return new qn({}, [n]);
      });
    }, e.prototype.resolveSchemaContent = function (e, t) {
      var n = this,
          r = e.errors.slice(0),
          i = e.schema,
          o = this.contextService,
          a = function a(e, t, n, i) {
        var o = function (e, t) {
          if (!t) return e;var n = e;return "/" === t[0] && (t = t.substr(1)), t.split("/").some(function (e) {
            return !(n = n[e]);
          }), n;
        }(t, i);if (o) for (var a in o) {
          o.hasOwnProperty(a) && !e.hasOwnProperty(a) && (e[a] = o[a]);
        } else r.push(Rn("json.schema.invalidref", "$ref '{0}' in '{1}' can not be resolved.", i, n));
      },
          s = function s(e, t, i, _s) {
        return o && !/^\w+:\/\/.*/.test(t) && (t = o.resolveRelativePath(t, _s)), t = n.normalizeId(t), n.getOrAddSchemaHandle(t).getUnresolvedSchema().then(function (n) {
          if (n.errors.length) {
            var o = i ? t + "#" + i : t;r.push(Rn("json.schema.problemloadingref", "Problems loading reference '{0}': {1}", o, n.errors[0]));
          }return a(e, n.schema, t, i), u(e, n.schema, t);
        });
      },
          u = function u(e, t, r) {
        if (!e || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e))) return Promise.resolve(null);for (var i = [e], o = [], u = [], c = function c(e) {
          for (; e.$ref;) {
            var n = e.$ref.split("#", 2);if (delete e.$ref, n[0].length > 0) return void u.push(s(e, n[0], n[1], r));a(e, t, r, n[1]);
          }!function () {
            for (var e = [], t = 0; t < arguments.length; t++) {
              e[t] = arguments[t];
            }for (var n = 0, r = e; n < r.length; n++) {
              var o = r[n];"object" == (typeof o === "undefined" ? "undefined" : _typeof(o)) && i.push(o);
            }
          }(e.items, e.additionalProperties, e.not, e.contains, e.propertyNames), function () {
            for (var e = [], t = 0; t < arguments.length; t++) {
              e[t] = arguments[t];
            }for (var n = 0, r = e; n < r.length; n++) {
              var o = r[n];if ("object" == (typeof o === "undefined" ? "undefined" : _typeof(o))) for (var a in o) {
                var s = o[a];"object" == (typeof s === "undefined" ? "undefined" : _typeof(s)) && i.push(s);
              }
            }
          }(e.definitions, e.properties, e.patternProperties, e.dependencies), function () {
            for (var e = [], t = 0; t < arguments.length; t++) {
              e[t] = arguments[t];
            }for (var n = 0, r = e; n < r.length; n++) {
              var o = r[n];if (Array.isArray(o)) for (var a = 0, s = o; a < s.length; a++) {
                var u = s[a];"object" == (typeof u === "undefined" ? "undefined" : _typeof(u)) && i.push(u);
              }
            }
          }(e.anyOf, e.allOf, e.oneOf, e.items);
        }; i.length;) {
          var l = i.pop();o.indexOf(l) >= 0 || (o.push(l), c(l));
        }return n.promise.all(u);
      };return u(i, i, t).then(function (e) {
        return new Kn(i, r);
      });
    }, e.prototype.getSchemaForResource = function (e, t) {
      if (t && t.root && "object" === t.root.type) {
        var n = t.root.properties.filter(function (e) {
          return "$schema" === e.keyNode.value && e.valueNode && "string" === e.valueNode.type;
        });if (n.length > 0) {
          var r = pn(n[0].valueNode);if (r && function (e, t) {
            if (e.length < t.length) return !1;for (var n = 0; n < t.length; n++) {
              if (e[n] !== t[n]) return !1;
            }return !0;
          }(r, ".") && this.contextService && (r = this.contextService.resolveRelativePath(r, e)), r) {
            var i = this.normalizeId(r);return this.getOrAddSchemaHandle(i).getResolvedSchema();
          }
        }
      }for (var o = Object.create(null), a = [], s = 0, u = this.filePatternAssociations; s < u.length; s++) {
        var c = u[s];if (c.matchesPattern(e)) for (var l = 0, f = c.getSchemas(); l < f.length; l++) {
          var h = f[l];o[h] || (a.push(h), o[h] = !0);
        }
      }return a.length > 0 ? this.createCombinedSchema(e, a).getResolvedSchema() : this.promise.resolve(null);
    }, e.prototype.createCombinedSchema = function (e, t) {
      if (1 === t.length) return this.getOrAddSchemaHandle(t[0]);var n = "schemaservice://combinedSchema/" + encodeURIComponent(e),
          r = { allOf: t.map(function (e) {
          return { $ref: e };
        }) };return this.addSchemaHandle(n, r);
    }, e;
  }();function Yn(e) {
    try {
      var t = zt.a.parse(e);if ("file" === t.scheme) return t.fsPath;
    } catch (e) {}return e;
  }function $n(e, t) {
    var n = [],
        r = [],
        i = [],
        o = -1,
        a = Ut(e.getText(), !1),
        s = a.scan();function u(e) {
      n.push(e), r.push(i.length);
    }for (; 17 !== s;) {
      switch (s) {case 1:case 3:
          var c = { startLine: h = e.positionAt(a.getTokenOffset()).line, endLine: h, kind: 1 === s ? "object" : "array" };i.push(c);break;case 2:case 4:
          var l = 2 === s ? "object" : "array";if (i.length > 0 && i[i.length - 1].kind === l) {
            c = i.pop();var f = e.positionAt(a.getTokenOffset()).line;c && f > c.startLine + 1 && o !== c.startLine && (c.endLine = f - 1, u(c), o = c.startLine);
          }break;case 13:
          var h = e.positionAt(a.getTokenOffset()).line,
              p = e.positionAt(a.getTokenOffset() + a.getTokenLength()).line;1 === a.getTokenError() && h + 1 < e.lineCount ? a.setPosition(e.offsetAt(Re.create(h + 1, 0))) : h < p && (u({ startLine: h, endLine: p, kind: Ye.Comment }), o = h);break;case 12:
          var d = e.getText().substr(a.getTokenOffset(), a.getTokenLength()).match(/^\/\/\s*#(region\b)|(endregion\b)/);if (d) {
            f = e.positionAt(a.getTokenOffset()).line;if (d[1]) {
              c = { startLine: f, endLine: f, kind: Ye.Region };i.push(c);
            } else {
              for (var m = i.length - 1; m >= 0 && i[m].kind !== Ye.Region;) {
                m--;
              }if (m >= 0) {
                c = i[m];i.length = m, f > c.startLine && o !== c.startLine && (c.endLine = f, u(c), o = c.startLine);
              }
            }
          }}s = a.scan();
    }var g = t && t.rangeLimit;if ("number" != typeof g || n.length <= g) return n;for (var v = [], y = 0, b = r; y < b.length; y++) {
      (A = b[y]) < 30 && (v[A] = (v[A] || 0) + 1);
    }var _ = 0,
        C = 0;for (m = 0; m < v.length; m++) {
      var S = v[m];if (S) {
        if (S + _ > g) {
          C = m;break;
        }_ += S;
      }
    }var E = [];for (m = 0; m < n.length; m++) {
      var A;"number" == typeof (A = r[m]) && (A < C || A === C && _++ < g) && E.push(n[m]);
    }return E;
  }function Jn(e) {
    var t = e.promiseConstructor || Promise,
        n = new Bn(e.schemaRequestService, e.workspaceContext, t);n.setSchemaContributions(Fn);var r = new Cn(n, e.contributions, t),
        i = new En(n, e.contributions, t),
        o = new jn(n),
        a = new Nn(n, t);return { configure: function configure(e) {
        n.clearExternalSchemas(), e.schemas && e.schemas.forEach(function (e) {
          n.registerExternalSchema(e.uri, e.fileMatch, e.schema);
        }), a.configure(e);
      }, resetSchema: function resetSchema(e) {
        return n.onResourceChange(e);
      }, doValidation: a.doValidation.bind(a), parseJSONDocument: function parseJSONDocument(e) {
        return yn(e, { collectComments: !0 });
      }, newJSONDocument: function newJSONDocument(e, t) {
        return function (e, t) {
          return void 0 === t && (t = []), new gn(e, t, []);
        }(e, t);
      }, doResolve: r.doResolve.bind(r), doComplete: r.doComplete.bind(r), findDocumentSymbols: o.findDocumentSymbols.bind(o), findColorSymbols: function findColorSymbols(e, t) {
        return o.findDocumentColors(e, t).then(function (e) {
          return e.map(function (e) {
            return e.range;
          });
        });
      }, findDocumentColors: o.findDocumentColors.bind(o), getColorPresentations: o.getColorPresentations.bind(o), doHover: i.doHover.bind(i), getFoldingRanges: $n, format: function format(e, t, n) {
        var r = void 0;if (t) {
          var i = e.offsetAt(t.start);r = { offset: i, length: e.offsetAt(t.end) - i };
        }var o = { tabSize: n ? n.tabSize : 4, insertSpaces: !n || n.insertSpaces, eol: "\n" };return function (e, t, n) {
          return Vt(e, t, n);
        }(e.getText(), r, o).map(function (t) {
          return Qe.replace(Ue.create(e.positionAt(t.offset), e.positionAt(t.offset + t.length)), t.content);
        });
      } };
  }var Hn = monaco.Promise,
      zn = function () {
    function e(e) {
      this.wrapped = new monaco.Promise(e);
    }return e.prototype.then = function (e, t) {
      return this.wrapped.then(e, t);
    }, e.prototype.getWrapped = function () {
      return this.wrapped;
    }, e.prototype.cancel = function () {
      this.wrapped.cancel();
    }, e.resolve = function (e) {
      return monaco.Promise.as(e);
    }, e.reject = function (e) {
      return monaco.Promise.wrapError(e);
    }, e.all = function (e) {
      return monaco.Promise.join(e);
    }, e;
  }(),
      Gn = function () {
    function e(e, t) {
      this._ctx = e, this._languageSettings = t.languageSettings, this._languageId = t.languageId, this._languageService = Jn({ promiseConstructor: zn }), this._languageService.configure(this._languageSettings);
    }return e.prototype.doValidation = function (e) {
      var t = this._getTextDocument(e);if (t) {
        var n = this._languageService.parseJSONDocument(t);return this._languageService.doValidation(t, n);
      }return Hn.as([]);
    }, e.prototype.doComplete = function (e, t) {
      var n = this._getTextDocument(e),
          r = this._languageService.parseJSONDocument(n);return this._languageService.doComplete(n, t, r);
    }, e.prototype.doResolve = function (e) {
      return this._languageService.doResolve(e);
    }, e.prototype.doHover = function (e, t) {
      var n = this._getTextDocument(e),
          r = this._languageService.parseJSONDocument(n);return this._languageService.doHover(n, t, r);
    }, e.prototype.format = function (e, t, n) {
      var r = this._getTextDocument(e),
          i = this._languageService.format(r, t, n);return Hn.as(i);
    }, e.prototype.resetSchema = function (e) {
      return Hn.as(this._languageService.resetSchema(e));
    }, e.prototype.findDocumentSymbols = function (e) {
      var t = this._getTextDocument(e),
          n = this._languageService.parseJSONDocument(t),
          r = this._languageService.findDocumentSymbols(t, n);return Hn.as(r);
    }, e.prototype.findDocumentColors = function (e) {
      var t = this._getTextDocument(e),
          n = this._languageService.parseJSONDocument(t),
          r = this._languageService.findDocumentColors(t, n);return Hn.as(r);
    }, e.prototype.getColorPresentations = function (e, t, n) {
      var r = this._getTextDocument(e),
          i = this._languageService.parseJSONDocument(r),
          o = this._languageService.getColorPresentations(r, i, t, n);return Hn.as(o);
    }, e.prototype.provideFoldingRanges = function (e, t) {
      var n = this._getTextDocument(e),
          r = this._languageService.getFoldingRanges(n, t);return Hn.as(r);
    }, e.prototype._getTextDocument = function (e) {
      for (var t = 0, n = this._ctx.getMirrorModels(); t < n.length; t++) {
        var r = n[t];if (r.uri.toString() === e) return kt.create(e, this._languageId, r.version, r.getValue());
      }return null;
    }, e;
  }();self.onmessage = function () {
    tt(function (e, t) {
      return new Gn(e, t);
    });
  };
}]);
},{}],"..\\..\\..\\AppData\\Roaming\\npm\\node_modules\\parcel-bundler\\src\\builtins\\hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '55447' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["..\\..\\..\\AppData\\Roaming\\npm\\node_modules\\parcel-bundler\\src\\builtins\\hmr-runtime.js","json.worker.js"], null)
//# sourceMappingURL=/json.worker.e7f92236.map