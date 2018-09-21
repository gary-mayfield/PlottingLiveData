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
})({"editor.worker.js":[function(require,module,exports) {
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
  }, n.p = "", n(n.s = 4);
}([function (e, t, n) {
  "use strict";
  (function (e, r) {
    var i;n.d(t, "a", function () {
      return o;
    }), function () {
      var t = Object.create(null);t["WinJS/Core/_WinJS"] = {};var n = function n(e, _n, r) {
        var i = {},
            o = !1,
            s = _n.map(function (e) {
          return "exports" === e ? (o = !0, i) : t[e];
        }),
            u = r.apply({}, s);t[e] = o ? i : u;
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
              s = Object.keys(t),
              u = Array.isArray(e);for (i = 0, o = s.length; i < o; i++) {
            var a = s[i],
                l = 95 !== a.charCodeAt(0),
                c = t[a];!c || "object" != (typeof c === "undefined" ? "undefined" : _typeof(c)) || void 0 === c.value && "function" != typeof c.get && "function" != typeof c.set ? l ? u ? e.forEach(function (e) {
              e[a] = c;
            }) : e[a] = c : (r = r || {})[a] = { value: c, enumerable: l, configurable: !0, writable: !0 } : (void 0 === c.enumerable && (c.enumerable = l), n && c.setName && "function" == typeof c.setName && c.setName(n + "." + a), (r = r || {})[a] = c);
          }r && (u ? e.forEach(function (e) {
            Object.defineProperties(e, r);
          }) : Object.defineProperties(e, r));
        }return function () {
          var n = e;function o(n, r) {
            var i = n || {};if (r) {
              var o = r.split(".");i === t && "WinJS" === o[0] && (i = e, o.splice(0, 1));for (var s = 0, u = o.length; s < u; s++) {
                var a = o[s];i[a] || Object.defineProperty(i, a, { value: {}, writable: !1, enumerable: !0, configurable: !0 }), i = i[a];
              }
            }return i;
          }function s(e, t, n) {
            var r = o(e, t);return n && i(r, n, t || "<ANONYMOUS>"), r;
          }n.Namespace || (n.Namespace = Object.create(Object.prototype));var u = { uninitialized: 1, working: 2, initialized: 3 };Object.defineProperties(n.Namespace, { defineWithParent: { value: s, writable: !0, enumerable: !0, configurable: !0 }, define: { value: function value(e, n) {
                return s(t, e, n);
              }, writable: !0, enumerable: !0, configurable: !0 }, _lazy: { value: function value(e) {
                var t,
                    n,
                    i = u.uninitialized;return { setName: function setName(e) {
                    t = e;
                  }, get: function get() {
                    switch (i) {case u.initialized:
                        return n;case u.uninitialized:
                        i = u.working;try {
                          r("WinJS.Namespace._lazy:" + t + ",StartTM"), n = e();
                        } finally {
                          r("WinJS.Namespace._lazy:" + t + ",StopTM"), i = u.uninitialized;
                        }return e = null, i = u.initialized, n;case u.working:
                        throw "Illegal: reentrancy on initialization";default:
                        throw "Illegal";}
                  }, set: function set(e) {
                    switch (i) {case u.working:
                        throw "Illegal: reentrancy on initialization";default:
                        i = u.initialized, n = e;}
                  }, enumerable: !0, configurable: !0 };
              }, writable: !0, enumerable: !0, configurable: !0 }, _moduleDefine: { value: function value(e, n, r) {
                var s = [e],
                    u = null;return n && (u = o(t, n), s.push(u)), i(s, r, n || "<ANONYMOUS>"), u;
              }, writable: !0, enumerable: !0, configurable: !0 } });
        }(), function () {
          function t(e, t, r) {
            return e = e || function () {}, n.markSupportedForProcessing(e), t && i(e.prototype, t), r && i(e, r), e;
          }e.Namespace.define("WinJS.Class", { define: t, derive: function derive(e, r, o, s) {
              if (e) {
                r = r || function () {};var u = e.prototype;return r.prototype = Object.create(u), n.markSupportedForProcessing(r), Object.defineProperty(r.prototype, "constructor", { value: r, writable: !0, configurable: !0, enumerable: !0 }), o && i(r.prototype, o), s && i(r, s), r;
              }return t(r, o, s);
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
              var s = r[i];if (s.useCapture === n && s.listener === t) return;
            }r.push({ listener: t, useCapture: n });
          }, dispatchEvent: function dispatchEvent(e, t) {
            var n = this._listeners && this._listeners[e];if (n) {
              for (var i = new r(e, t, this), o = 0, s = (n = n.slice(0, n.length)).length; o < s && !i._stopImmediatePropagationCalled; o++) {
                n[o].listener(i);
              }return i.defaultPrevented || !1;
            }return !1;
          }, removeEventListener: function removeEventListener(e, t, n) {
            n = n || !1;var r = this._listeners && this._listeners[e];if (r) for (var i = 0, o = r.length; i < o; i++) {
              var s = r[i];if (s.listener === t && s.useCapture === n) {
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
        e.Debug && (e.Debug.setNonUserCodeExceptions = !0);var s = new (n.Class.mix(n.Class.define(null, {}, { supportedForProcessing: !1 }), i.eventMixin))();s._listeners = {};var u = "error",
            a = "Canceled",
            l = !1,
            c = { promise: 1, thenPromise: 2, errorPromise: 4, exceptionPromise: 8, completePromise: 16 };c.all = c.promise | c.thenPromise | c.errorPromise | c.exceptionPromise | c.completePromise;var h,
            f,
            d,
            m,
            p,
            _,
            g,
            v,
            y,
            b,
            C = 1;function S() {}h = { name: "created", enter: function enter(e) {
            e._setState(f);
          }, cancel: S, done: S, then: S, _completed: S, _error: S, _notify: S, _progress: S, _setCompleteValue: S, _setErrorValue: S }, f = { name: "working", enter: S, cancel: function cancel(e) {
            e._setState(p);
          }, done: M, then: F, _completed: N, _error: k, _notify: S, _progress: D, _setCompleteValue: q, _setErrorValue: K }, d = { name: "waiting", enter: function enter(e) {
            var t = e._value;if (t instanceof W && t._state !== b && t._state !== v) U(t, { promise: e });else {
              var n = function n(r) {
                t._errorId ? e._chainedError(r, t) : (I(e, r, A, t, n), e._error(r));
              };n.handlesOnError = !0, t.then(e._completed.bind(e), n, e._progress.bind(e));
            }
          }, cancel: function cancel(e) {
            e._setState(m);
          }, done: M, then: F, _completed: N, _error: k, _notify: S, _progress: D, _setCompleteValue: q, _setErrorValue: K }, m = { name: "waiting_canceled", enter: function enter(e) {
            e._setState(_);var t = e._value;t.cancel && t.cancel();
          }, cancel: S, done: M, then: F, _completed: N, _error: k, _notify: S, _progress: D, _setCompleteValue: q, _setErrorValue: K }, p = { name: "canceled", enter: function enter(e) {
            e._setState(_), e._cancelAction();
          }, cancel: S, done: M, then: F, _completed: N, _error: k, _notify: S, _progress: D, _setCompleteValue: q, _setErrorValue: K }, _ = { name: "canceling", enter: function enter(e) {
            var t = new Error(a);t.name = t.message, e._value = t, e._setState(y);
          }, cancel: S, done: S, then: S, _completed: S, _error: S, _notify: S, _progress: S, _setCompleteValue: S, _setErrorValue: S }, g = { name: "complete_notify", enter: function enter(e) {
            if (e.done = B.prototype.done, e.then = B.prototype.then, e._listeners) for (var t, n = [e]; n.length;) {
              (t = n.shift())._state._notify(t, n);
            }e._setState(v);
          }, cancel: S, done: null, then: null, _completed: S, _error: S, _notify: O, _progress: S, _setCompleteValue: S, _setErrorValue: S }, v = { name: "success", enter: function enter(e) {
            e.done = B.prototype.done, e.then = B.prototype.then, e._cleanupAction();
          }, cancel: S, done: null, then: null, _completed: S, _error: S, _notify: O, _progress: S, _setCompleteValue: S, _setErrorValue: S }, y = { name: "error_notify", enter: function enter(e) {
            if (e.done = Y.prototype.done, e.then = Y.prototype.then, e._listeners) for (var t, n = [e]; n.length;) {
              (t = n.shift())._state._notify(t, n);
            }e._setState(b);
          }, cancel: S, done: null, then: null, _completed: S, _error: S, _notify: T, _progress: S, _setCompleteValue: S, _setErrorValue: S }, b = { name: "error", enter: function enter(e) {
            e.done = Y.prototype.done, e.then = Y.prototype.then, e._cleanupAction();
          }, cancel: S, done: null, then: null, _completed: S, _error: S, _notify: T, _progress: S, _setCompleteValue: S, _setErrorValue: S };var L = n.Class.define(null, { _listeners: null, _nextState: null, _state: null, _value: null, cancel: function cancel() {
            this._state.cancel(this), this._run();
          }, done: function done(e, t, n) {
            this._state.done(this, e, t, n);
          }, then: function e(t, n, r) {
            if (this.then === e) return this._state.then(this, t, n, r);this.then(t, n, r);
          }, _chainedError: function _chainedError(e, t) {
            var n = this._state._error(this, e, w, t);return this._run(), n;
          }, _completed: function _completed(e) {
            var t = this._state._completed(this, e);return this._run(), t;
          }, _error: function _error(e) {
            var t = this._state._error(this, e, P);return this._run(), t;
          }, _progress: function _progress(e) {
            this._state._progress(this, e);
          }, _setState: function _setState(e) {
            this._nextState = e;
          }, _setCompleteValue: function _setCompleteValue(e) {
            this._state._setCompleteValue(this, e), this._run();
          }, _setChainedErrorValue: function _setChainedErrorValue(e, t) {
            var n = this._state._setErrorValue(this, e, w, t);return this._run(), n;
          }, _setExceptionValue: function _setExceptionValue(e) {
            var t = this._state._setErrorValue(this, e, x);return this._run(), t;
          }, _run: function _run() {
            for (; this._nextState;) {
              this._state = this._nextState, this._nextState = null, this._state.enter(this);
            }
          } }, { supportedForProcessing: !1 });function N(e, t) {
          var n;n = t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" == typeof t.then ? d : g, e._value = t, e._setState(n);
        }function E(e, t, n, r, i, o) {
          return { exception: e, error: t, promise: n, handler: o, id: r, parent: i };
        }function A(e, t, n, r) {
          var i = n._isException,
              o = n._errorId;return E(i ? t : null, i ? null : t, e, o, n, r);
        }function w(e, t, n) {
          var r = n._isException,
              i = n._errorId;return R(e, i, r), E(r ? t : null, r ? null : t, e, i, n);
        }function P(e, t) {
          var n = ++C;return R(e, n), E(null, t, e, n);
        }function x(e, t) {
          var n = ++C;return R(e, n, !0), E(t, null, e, n);
        }function M(e, t, n, r) {
          U(e, { c: t, e: n, p: r, asyncOpID: o._traceAsyncOperationStarting("WinJS.Promise.done") });
        }function k(e, t, n, r) {
          e._value = t, I(e, t, n, r), e._setState(y);
        }function O(t, n) {
          var r,
              i,
              s = t._value,
              u = t._listeners;if (u) for (t._listeners = null, r = 0, i = Array.isArray(u) ? u.length : 1; r < i; r++) {
            var a = 1 === i ? u : u[r],
                l = a.c,
                c = a.promise;if (o._traceAsyncOperationCompleted(a.asyncOpID, e.Debug && e.Debug.MS_ASYNC_OP_STATUS_SUCCESS), c) {
              o._traceAsyncCallbackStarting(a.asyncOpID);try {
                c._setCompleteValue(l ? l(s) : s);
              } catch (e) {
                c._setExceptionValue(e);
              } finally {
                o._traceAsyncCallbackCompleted();
              }c._state !== d && c._listeners && n.push(c);
            } else B.prototype.done.call(t, l);
          }
        }function T(t, n) {
          var r,
              i,
              s = t._value,
              u = t._listeners;if (u) for (t._listeners = null, r = 0, i = Array.isArray(u) ? u.length : 1; r < i; r++) {
            var l = 1 === i ? u : u[r],
                c = l.e,
                h = l.promise,
                f = e.Debug && (s && s.name === a ? e.Debug.MS_ASYNC_OP_STATUS_CANCELED : e.Debug.MS_ASYNC_OP_STATUS_ERROR);if (o._traceAsyncOperationCompleted(l.asyncOpID, f), h) {
              var m = !1;try {
                c ? (o._traceAsyncCallbackStarting(l.asyncOpID), m = !0, c.handlesOnError || I(h, s, A, t, c), h._setCompleteValue(c(s))) : h._setChainedErrorValue(s, t);
              } catch (e) {
                h._setExceptionValue(e);
              } finally {
                m && o._traceAsyncCallbackCompleted();
              }h._state !== d && h._listeners && n.push(h);
            } else Y.prototype.done.call(t, null, c);
          }
        }function I(e, t, n, r, i) {
          if (s._listeners[u]) {
            if (t instanceof Error && t.message === a) return;s.dispatchEvent(u, n(e, t, r, i));
          }
        }function D(e, t) {
          var n,
              r,
              i = e._listeners;if (i) for (n = 0, r = Array.isArray(i) ? i.length : 1; n < r; n++) {
            var o = 1 === r ? i : i[n],
                s = o.p;if (s) try {
              s(t);
            } catch (e) {}o.c || o.e || !o.promise || o.promise._progress(t);
          }
        }function U(e, t) {
          var n = e._listeners;n ? (n = Array.isArray(n) ? n : [n]).push(t) : n = t, e._listeners = n;
        }function R(e, t, n) {
          e._isException = n || !1, e._errorId = t;
        }function K(e, t, n, r) {
          e._value = t, I(e, t, n, r), e._setState(b);
        }function q(e, t) {
          var n;n = t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" == typeof t.then ? d : v, e._value = t, e._setState(n);
        }function F(e, t, n, r) {
          var i = new W(e);return U(e, { promise: i, c: t, e: n, p: r, asyncOpID: o._traceAsyncOperationStarting("WinJS.Promise.then") }), i;
        }var V,
            W = n.Class.derive(L, function (e) {
          l && (!0 === l || l & c.thenPromise) && (this._stack = H._getStack()), this._creator = e, this._setState(h), this._run();
        }, { _creator: null, _cancelAction: function _cancelAction() {
            this._creator && this._creator.cancel();
          }, _cleanupAction: function _cleanupAction() {
            this._creator = null;
          } }, { supportedForProcessing: !1 }),
            Y = n.Class.define(function (e) {
          l && (!0 === l || l & c.errorPromise) && (this._stack = H._getStack()), this._value = e, I(this, e, P);
        }, { cancel: function cancel() {}, done: function done(e, t) {
            var n = this._value;if (t) try {
              t.handlesOnError || I(null, n, A, this, t);var r = t(n);return void (r && "object" == (typeof r === "undefined" ? "undefined" : _typeof(r)) && "function" == typeof r.done && r.done());
            } catch (e) {
              n = e;
            }n instanceof Error && n.message === a || H._doneHandler(n);
          }, then: function then(e, t) {
            if (!t) return this;var n,
                r = this._value;try {
              t.handlesOnError || I(null, r, A, this, t), n = new B(t(r));
            } catch (e) {
              n = e === r ? this : new j(e);
            }return n;
          } }, { supportedForProcessing: !1 }),
            j = n.Class.derive(Y, function (e) {
          l && (!0 === l || l & c.exceptionPromise) && (this._stack = H._getStack()), this._value = e, I(this, e, x);
        }, {}, { supportedForProcessing: !1 }),
            B = n.Class.define(function (e) {
          if (l && (!0 === l || l & c.completePromise) && (this._stack = H._getStack()), e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" == typeof e.then) {
            var t = new W(null);return t._setCompleteValue(e), t;
          }this._value = e;
        }, { cancel: function cancel() {}, done: function done(e) {
            if (e) try {
              var t = e(this._value);t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" == typeof t.done && t.done();
            } catch (e) {
              H._doneHandler(e);
            }
          }, then: function then(e) {
            try {
              var t = e ? e(this._value) : this._value;return t === this._value ? this : new B(t);
            } catch (e) {
              return new j(e);
            }
          } }, { supportedForProcessing: !1 });var H = n.Class.derive(L, function (e, t) {
          l && (!0 === l || l & c.promise) && (this._stack = H._getStack()), this._oncancel = t, this._setState(h), this._run();try {
            e(this._completed.bind(this), this._error.bind(this), this._progress.bind(this));
          } catch (e) {
            this._setExceptionValue(e);
          }
        }, { _oncancel: null, _cancelAction: function _cancelAction() {
            try {
              if (!this._oncancel) throw new Error("Promise did not implement oncancel");this._oncancel();
            } catch (e) {
              e.message, e.stack;s.dispatchEvent("error", e);
            }
          }, _cleanupAction: function _cleanupAction() {
            this._oncancel = null;
          } }, { addEventListener: function addEventListener(e, t, n) {
            s.addEventListener(e, t, n);
          }, any: function any(e) {
            return new H(function (t, n) {
              var r = Object.keys(e);0 === r.length && t();var i = 0;r.forEach(function (o) {
                H.as(e[o]).then(function () {
                  t({ key: o, value: e[o] });
                }, function (s) {
                  s instanceof Error && s.name === a ? ++i === r.length && t(H.cancel) : n({ key: o, value: e[o] });
                });
              });
            }, function () {
              Object.keys(e).forEach(function (t) {
                var n = H.as(e[t]);"function" == typeof n.cancel && n.cancel();
              });
            });
          }, as: function as(e) {
            return e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" == typeof e.then ? e : new B(e);
          }, cancel: { get: function get() {
              return V = V || new Y(new r(a));
            } }, dispatchEvent: function dispatchEvent(e, t) {
            return s.dispatchEvent(e, t);
          }, is: function is(e) {
            return e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" == typeof e.then;
          }, join: function join(e) {
            return new H(function (t, n, r) {
              var i = Object.keys(e),
                  o = Array.isArray(e) ? [] : {},
                  s = Array.isArray(e) ? [] : {},
                  u = 0,
                  l = i.length,
                  c = function c(e) {
                if (0 == --l) {
                  var u = Object.keys(o).length;if (0 === u) t(s);else {
                    var c = 0;i.forEach(function (e) {
                      var t = o[e];t instanceof Error && t.name === a && c++;
                    }), c === u ? t(H.cancel) : n(o);
                  }
                } else r({ Key: e, Done: !0 });
              };i.forEach(function (t) {
                var n = e[t];void 0 === n ? u++ : H.then(n, function (e) {
                  s[t] = e, c(t);
                }, function (e) {
                  o[t] = e, c(t);
                });
              }), 0 !== (l -= u) || t(s);
            }, function () {
              Object.keys(e).forEach(function (t) {
                var n = H.as(e[t]);"function" == typeof n.cancel && n.cancel();
              });
            });
          }, removeEventListener: function removeEventListener(e, t, n) {
            s.removeEventListener(e, t, n);
          }, supportedForProcessing: !1, then: function then(e, t, n, r) {
            return H.as(e).then(t, n, r);
          }, thenEach: function thenEach(e, t, n, r) {
            var i = Array.isArray(e) ? [] : {};return Object.keys(e).forEach(function (o) {
              i[o] = H.as(e[o]).then(t, n, r);
            }), H.join(i);
          }, timeout: function timeout(n, r) {
            var i,
                o,
                s = (i = n, new H(function (n) {
              i ? o = e.setTimeout(n, i) : t._setImmediate(n);
            }, function () {
              o && e.clearTimeout(o);
            }));return r ? function (e, t) {
              var n = function n() {
                e.cancel();
              };return e.then(function () {
                t.cancel();
              }), t.then(n, n), t;
            }(s, r) : s;
          }, wrap: function wrap(e) {
            return new B(e);
          }, wrapError: function wrapError(e) {
            return new Y(e);
          }, _veryExpensiveTagWithStack: { get: function get() {
              return l;
            }, set: function set(e) {
              l = e;
            } }, _veryExpensiveTagWithStack_tag: c, _getStack: function _getStack() {
            if (e.Debug && e.Debug.debuggerEnabled) try {
              throw new Error();
            } catch (e) {
              return e.stack;
            }
          }, _cancelBlocker: function _cancelBlocker(e, t) {
            if (!H.is(e)) return H.wrap(e);var n,
                r,
                i = new H(function (e, t) {
              n = e, r = t;
            }, function () {
              n = null, r = null, t && t();
            });return e.then(function (e) {
              n && n(e);
            }, function (e) {
              r && r(e);
            }), i;
          } });return Object.defineProperties(H, i.createEventProperties(u)), H._doneHandler = function (e) {
          t._setImmediate(function () {
            throw e;
          });
        }, { PromiseStateMachine: L, Promise: H, state_created: h };
      }), n("WinJS/Promise", ["WinJS/Core/_Base", "WinJS/Promise/_StateMachine"], function (e, t) {
        return e.Namespace.define("WinJS", { Promise: t.Promise }), t.Promise;
      }), (i = t["WinJS/Core/_WinJS"]).TPromise = i.Promise, i.PPromise = i.Promise;
    }();i.Promise;var o = i.TPromise;i.PPromise;
  }).call(this, n(2), n(3));
}, function (e, t, n) {
  "use strict";
  (function (e, r) {
    n.d(t, "c", function () {
      return m;
    }), n.d(t, "b", function () {
      return p;
    }), n.d(t, "a", function () {
      return _;
    });var i,
        o = !1,
        s = !1,
        u = !1,
        a = !1,
        l = !1;if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" == typeof e.nextTick && "string" == typeof e.platform) {
      o = "win32" === e.platform, s = "darwin" === e.platform, u = "linux" === e.platform, "en", "en";var c = e.env.VSCODE_NLS_CONFIG;if (c) try {
        var h = JSON.parse(c),
            f = h.availableLanguages["*"];h.locale, f || "en", h._translationsConfigFile;
      } catch (e) {}a = !0;
    } else if ("object" == (typeof navigator === "undefined" ? "undefined" : _typeof(navigator))) {
      var d = navigator.userAgent;o = d.indexOf("Windows") >= 0, s = d.indexOf("Macintosh") >= 0, u = d.indexOf("Linux") >= 0, l = !0, navigator.language;
    }!function (e) {
      e[e.Web = 0] = "Web", e[e.Mac = 1] = "Mac", e[e.Linux = 2] = "Linux", e[e.Windows = 3] = "Windows";
    }(i || (i = {}));i.Web;a && (s ? i.Mac : o ? i.Windows : u && i.Linux);var m = o,
        p = l,
        _ = "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) ? self : "object" == (typeof r === "undefined" ? "undefined" : _typeof(r)) ? r : {};
  }).call(this, n(3), n(2));
}, function (e, t) {
  var n;n = function () {
    return this;
  }();try {
    n = n || Function("return this")() || (0, eval)("this");
  } catch (e) {
    "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (n = window);
  }e.exports = n;
}, function (e, t) {
  var n,
      r,
      i = e.exports = {};function o() {
    throw new Error("setTimeout has not been defined");
  }function s() {
    throw new Error("clearTimeout has not been defined");
  }function u(e) {
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
      r = "function" == typeof clearTimeout ? clearTimeout : s;
    } catch (e) {
      r = s;
    }
  }();var a,
      l = [],
      c = !1,
      h = -1;function f() {
    c && a && (c = !1, a.length ? l = a.concat(l) : h = -1, l.length && d());
  }function d() {
    if (!c) {
      var e = u(f);c = !0;for (var t = l.length; t;) {
        for (a = l, l = []; ++h < t;) {
          a && a[h].run();
        }h = -1, t = l.length;
      }a = null, c = !1, function (e) {
        if (r === clearTimeout) return clearTimeout(e);if ((r === s || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);try {
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
  }function m(e, t) {
    this.fun = e, this.array = t;
  }function p() {}i.nextTick = function (e) {
    var t = new Array(arguments.length - 1);if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) {
      t[n - 1] = arguments[n];
    }l.push(new m(e, t)), 1 !== l.length || c || u(d);
  }, m.prototype.run = function () {
    this.fun.apply(null, this.array);
  }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = p, i.addListener = p, i.once = p, i.off = p, i.removeListener = p, i.removeAllListeners = p, i.emit = p, i.prependListener = p, i.prependOnceListener = p, i.listeners = function (e) {
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
}, function (e, t, n) {
  "use strict";
  n.r(t);var r,
      i,
      o = n(1),
      s = (r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {
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
      u = /^\w[\w\d+.-]*$/,
      a = /^\//,
      l = /^\/\//;var c = "",
      h = "/",
      f = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,
      d = function () {
    function e(e, t, n, r, i) {
      "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? (this.scheme = e.scheme || c, this.authority = e.authority || c, this.path = e.path || c, this.query = e.query || c, this.fragment = e.fragment || c) : (this.scheme = e || c, this.authority = t || c, this.path = function (e, t) {
        switch (e) {case "https":case "http":case "file":
            t ? t[0] !== h && (t = h + t) : t = h;}return t;
      }(this.scheme, n || c), this.query = r || c, this.fragment = i || c, function (e) {
        if (e.scheme && !u.test(e.scheme)) throw new Error("[UriError]: Scheme contains illegal characters.");if (e.path) if (e.authority) {
          if (!a.test(e.path)) throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character');
        } else if (l.test(e.path)) throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")');
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
          o = e.fragment;return void 0 === t ? t = this.scheme : null === t && (t = c), void 0 === n ? n = this.authority : null === n && (n = c), void 0 === r ? r = this.path : null === r && (r = c), void 0 === i ? i = this.query : null === i && (i = c), void 0 === o ? o = this.fragment : null === o && (o = c), t === this.scheme && n === this.authority && r === this.path && i === this.query && o === this.fragment ? this : new p(t, n, r, i, o);
    }, e.parse = function (e) {
      var t = f.exec(e);return t ? new p(t[2] || c, decodeURIComponent(t[4] || c), decodeURIComponent(t[5] || c), decodeURIComponent(t[7] || c), decodeURIComponent(t[9] || c)) : new p(c, c, c, c, c);
    }, e.file = function (e) {
      var t = c;if (o.c && (e = e.replace(/\\/g, h)), e[0] === h && e[1] === h) {
        var n = e.indexOf(h, 2);-1 === n ? (t = e.substring(2), e = h) : (t = e.substring(2, n), e = e.substring(n) || h);
      }return new p("file", t, e, c, c);
    }, e.from = function (e) {
      return new p(e.scheme, e.authority, e.path, e.query, e.fragment);
    }, e.prototype.toString = function (e) {
      return void 0 === e && (e = !1), b(this, e);
    }, e.prototype.toJSON = function () {
      return this;
    }, e.revive = function (t) {
      if (t) {
        if (t instanceof e) return t;var n = new p(t);return n._fsPath = t.fsPath, n._formatted = t.external, n;
      }return t;
    }, e;
  }(),
      m = d,
      p = function (e) {
    function t() {
      var t = null !== e && e.apply(this, arguments) || this;return t._formatted = null, t._fsPath = null, t;
    }return s(t, e), Object.defineProperty(t.prototype, "fsPath", { get: function get() {
        return this._fsPath || (this._fsPath = y(this)), this._fsPath;
      }, enumerable: !0, configurable: !0 }), t.prototype.toString = function (e) {
      return void 0 === e && (e = !1), e ? b(this, !0) : (this._formatted || (this._formatted = b(this, !1)), this._formatted);
    }, t.prototype.toJSON = function () {
      var e = { $mid: 1 };return this._fsPath && (e.fsPath = this._fsPath), this._formatted && (e.external = this._formatted), this.path && (e.path = this.path), this.scheme && (e.scheme = this.scheme), this.authority && (e.authority = this.authority), this.query && (e.query = this.query), this.fragment && (e.fragment = this.fragment), e;
    }, t;
  }(d),
      _ = ((i = {})[58] = "%3A", i[47] = "%2F", i[63] = "%3F", i[35] = "%23", i[91] = "%5B", i[93] = "%5D", i[64] = "%40", i[33] = "%21", i[36] = "%24", i[38] = "%26", i[39] = "%27", i[40] = "%28", i[41] = "%29", i[42] = "%2A", i[43] = "%2B", i[44] = "%2C", i[59] = "%3B", i[61] = "%3D", i[32] = "%20", i);function g(e, t) {
    for (var n = void 0, r = -1, i = 0; i < e.length; i++) {
      var o = e.charCodeAt(i);if (o >= 97 && o <= 122 || o >= 65 && o <= 90 || o >= 48 && o <= 57 || 45 === o || 46 === o || 95 === o || 126 === o || t && 47 === o) -1 !== r && (n += encodeURIComponent(e.substring(r, i)), r = -1), void 0 !== n && (n += e.charAt(i));else {
        void 0 === n && (n = e.substr(0, i));var s = _[o];void 0 !== s ? (-1 !== r && (n += encodeURIComponent(e.substring(r, i)), r = -1), n += s) : -1 === r && (r = i);
      }
    }return -1 !== r && (n += encodeURIComponent(e.substring(r))), void 0 !== n ? n : e;
  }function v(e) {
    for (var t = void 0, n = 0; n < e.length; n++) {
      var r = e.charCodeAt(n);35 === r || 63 === r ? (void 0 === t && (t = e.substr(0, n)), t += _[r]) : void 0 !== t && (t += e[n]);
    }return void 0 !== t ? t : e;
  }function y(e) {
    var t;return t = e.authority && e.path.length > 1 && "file" === e.scheme ? "//" + e.authority + e.path : 47 === e.path.charCodeAt(0) && (e.path.charCodeAt(1) >= 65 && e.path.charCodeAt(1) <= 90 || e.path.charCodeAt(1) >= 97 && e.path.charCodeAt(1) <= 122) && 58 === e.path.charCodeAt(2) ? e.path[1].toLowerCase() + e.path.substr(2) : e.path, o.c && (t = t.replace(/\//g, "\\")), t;
  }function b(e, t) {
    var n = t ? v : g,
        r = "",
        i = e.scheme,
        o = e.authority,
        s = e.path,
        u = e.query,
        a = e.fragment;if (i && (r += i, r += ":"), (o || "file" === i) && (r += h, r += h), o) {
      var l = o.indexOf("@");if (-1 !== l) {
        var c = o.substr(0, l);o = o.substr(l + 1), -1 === (l = c.indexOf(":")) ? r += n(c, !1) : (r += n(c.substr(0, l), !1), r += ":", r += n(c.substr(l + 1), !1)), r += "@";
      }-1 === (l = (o = o.toLowerCase()).indexOf(":")) ? r += n(o, !1) : (r += n(o.substr(0, l), !1), r += o.substr(l));
    }if (s) {
      if (s.length >= 3 && 47 === s.charCodeAt(0) && 58 === s.charCodeAt(2)) (f = s.charCodeAt(1)) >= 65 && f <= 90 && (s = "/" + String.fromCharCode(f + 32) + ":" + s.substr(3));else if (s.length >= 2 && 58 === s.charCodeAt(1)) {
        var f;(f = s.charCodeAt(0)) >= 65 && f <= 90 && (s = String.fromCharCode(f + 32) + ":" + s.substr(2));
      }r += n(s, !0);
    }return u && (r += "?", r += n(u, !1)), a && (r += "#", r += t ? a : g(a, !1)), r;
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
      L = function () {
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
      var r, i, o, s;return n.startLineNumber < t.startLineNumber ? (r = n.startLineNumber, i = n.startColumn) : n.startLineNumber === t.startLineNumber ? (r = n.startLineNumber, i = Math.min(n.startColumn, t.startColumn)) : (r = t.startLineNumber, i = t.startColumn), n.endLineNumber > t.endLineNumber ? (o = n.endLineNumber, s = n.endColumn) : n.endLineNumber === t.endLineNumber ? (o = n.endLineNumber, s = Math.max(n.endColumn, t.endColumn)) : (o = t.endLineNumber, s = t.endColumn), new e(r, i, o, s);
    }, e.prototype.intersectRanges = function (t) {
      return e.intersectRanges(this, t);
    }, e.intersectRanges = function (t, n) {
      var r = t.startLineNumber,
          i = t.startColumn,
          o = t.endLineNumber,
          s = t.endColumn,
          u = n.startLineNumber,
          a = n.startColumn,
          l = n.endLineNumber,
          c = n.endColumn;return r < u ? (r = u, i = a) : r === u && (i = Math.max(i, a)), o > l ? (o = l, s = c) : o === l && (s = Math.min(s, c)), r > o ? null : r === o && i > s ? null : new e(r, i, o, s);
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
          var s = 0 | e.endLineNumber,
              u = 0 | t.endLineNumber;return s === u ? (0 | e.endColumn) - (0 | t.endColumn) : s - u;
        }return i - o;
      }return n - r;
    }, e.compareRangesUsingEnds = function (e, t) {
      return e.endLineNumber === t.endLineNumber ? e.endColumn === t.endColumn ? e.startLineNumber === t.startLineNumber ? e.startColumn - t.startColumn : e.startLineNumber - t.startLineNumber : e.endColumn - t.endColumn : e.endLineNumber - t.endLineNumber;
    }, e.spansMultipleLines = function (e) {
      return e.endLineNumber > e.startLineNumber;
    }, e;
  }(),
      N = function () {
    function e(e, t, n, r) {
      this.originalStart = e, this.originalLength = t, this.modifiedStart = n, this.modifiedLength = r;
    }return e.prototype.getOriginalEnd = function () {
      return this.originalStart + this.originalLength;
    }, e.prototype.getModifiedEnd = function () {
      return this.modifiedStart + this.modifiedLength;
    }, e;
  }();function E(e) {
    return { getLength: function getLength() {
        return e.length;
      }, getElementAtIndex: function getElementAtIndex(t) {
        return e.charCodeAt(t);
      } };
  }function A(e, t, n) {
    return new M(E(e), E(t)).ComputeDiff(n);
  }var w = function () {
    function e() {}return e.Assert = function (e, t) {
      if (!e) throw new Error(t);
    }, e;
  }(),
      P = function () {
    function e() {}return e.Copy = function (e, t, n, r, i) {
      for (var o = 0; o < i; o++) {
        n[r + o] = e[t + o];
      }
    }, e;
  }(),
      x = function () {
    function e() {
      this.m_changes = [], this.m_originalStart = Number.MAX_VALUE, this.m_modifiedStart = Number.MAX_VALUE, this.m_originalCount = 0, this.m_modifiedCount = 0;
    }return e.prototype.MarkNextChange = function () {
      (this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.m_changes.push(new N(this.m_originalStart, this.m_originalCount, this.m_modifiedStart, this.m_modifiedCount)), this.m_originalCount = 0, this.m_modifiedCount = 0, this.m_originalStart = Number.MAX_VALUE, this.m_modifiedStart = Number.MAX_VALUE;
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
      M = function () {
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
        var o = void 0;return n <= r ? (w.Assert(e === t + 1, "originalStart should only be one more than originalEnd"), o = [new N(e, 0, n, r - n + 1)]) : e <= t ? (w.Assert(n === r + 1, "modifiedStart should only be one more than modifiedEnd"), o = [new N(e, t - e + 1, n, 0)]) : (w.Assert(e === t + 1, "originalStart should only be one more than originalEnd"), w.Assert(n === r + 1, "modifiedStart should only be one more than modifiedEnd"), o = []), o;
      }var s = [0],
          u = [0],
          a = this.ComputeRecursionPoint(e, t, n, r, s, u, i),
          l = s[0],
          c = u[0];if (null !== a) return a;if (!i[0]) {
        var h = this.ComputeDiffRecursive(e, l, n, c, i),
            f = [];return f = i[0] ? [new N(l + 1, t - (l + 1) + 1, c + 1, r - (c + 1) + 1)] : this.ComputeDiffRecursive(l + 1, t, c + 1, r, i), this.ConcatenateChanges(h, f);
      }return [new N(e, t - e + 1, n, r - n + 1)];
    }, e.prototype.WALKTRACE = function (e, t, n, r, i, o, s, u, a, l, c, h, f, d, m, p, _, g) {
      var v,
          y,
          b = null,
          C = new x(),
          S = t,
          L = n,
          E = f[0] - p[0] - r,
          A = Number.MIN_VALUE,
          w = this.m_forwardHistory.length - 1;do {
        (y = E + e) === S || y < L && a[y - 1] < a[y + 1] ? (d = (c = a[y + 1]) - E - r, c < A && C.MarkNextChange(), A = c, C.AddModifiedElement(c + 1, d), E = y + 1 - e) : (d = (c = a[y - 1] + 1) - E - r, c < A && C.MarkNextChange(), A = c - 1, C.AddOriginalElement(c, d + 1), E = y - 1 - e), w >= 0 && (e = (a = this.m_forwardHistory[w])[0], S = 1, L = a.length - 1);
      } while (--w >= -1);if (v = C.getReverseChanges(), g[0]) {
        var P = f[0] + 1,
            M = p[0] + 1;if (null !== v && v.length > 0) {
          var k = v[v.length - 1];P = Math.max(P, k.getOriginalEnd()), M = Math.max(M, k.getModifiedEnd());
        }b = [new N(P, h - P + 1, M, m - M + 1)];
      } else {
        C = new x(), S = o, L = s, E = f[0] - p[0] - u, A = Number.MAX_VALUE, w = _ ? this.m_reverseHistory.length - 1 : this.m_reverseHistory.length - 2;do {
          (y = E + i) === S || y < L && l[y - 1] >= l[y + 1] ? (d = (c = l[y + 1] - 1) - E - u, c > A && C.MarkNextChange(), A = c + 1, C.AddOriginalElement(c + 1, d + 1), E = y + 1 - i) : (d = (c = l[y - 1]) - E - u, c > A && C.MarkNextChange(), A = c, C.AddModifiedElement(c + 1, d + 1), E = y - 1 - i), w >= 0 && (i = (l = this.m_reverseHistory[w])[0], S = 1, L = l.length - 1);
        } while (--w >= -1);b = C.getChanges();
      }return this.ConcatenateChanges(v, b);
    }, e.prototype.ComputeRecursionPoint = function (e, t, n, r, i, o, s) {
      var u,
          a,
          l,
          c = 0,
          h = 0,
          f = 0,
          d = 0;e--, n--, i[0] = 0, o[0] = 0, this.m_forwardHistory = [], this.m_reverseHistory = [];var m,
          p,
          _ = t - e + (r - n),
          g = _ + 1,
          v = new Array(g),
          y = new Array(g),
          b = r - n,
          C = t - e,
          S = e - n,
          L = t - r,
          E = (C - b) % 2 == 0;for (v[b] = e, y[C] = t, s[0] = !1, l = 1; l <= _ / 2 + 1; l++) {
        var A = 0,
            w = 0;for (c = this.ClipDiagonalBound(b - l, l, b, g), h = this.ClipDiagonalBound(b + l, l, b, g), m = c; m <= h; m += 2) {
          for (a = (u = m === c || m < h && v[m - 1] < v[m + 1] ? v[m + 1] : v[m - 1] + 1) - (m - b) - S, p = u; u < t && a < r && this.ElementsAreEqual(u + 1, a + 1);) {
            u++, a++;
          }if (v[m] = u, u + a > A + w && (A = u, w = a), !E && Math.abs(m - C) <= l - 1 && u >= y[m]) return i[0] = u, o[0] = a, p <= y[m] && l <= 1448 ? this.WALKTRACE(b, c, h, S, C, f, d, L, v, y, u, t, i, a, r, o, E, s) : null;
        }var x = (A - e + (w - n) - l) / 2;if (null !== this.ContinueProcessingPredicate && !this.ContinueProcessingPredicate(A, this.OriginalSequence, x)) return s[0] = !0, i[0] = A, o[0] = w, x > 0 && l <= 1448 ? this.WALKTRACE(b, c, h, S, C, f, d, L, v, y, u, t, i, a, r, o, E, s) : [new N(++e, t - e + 1, ++n, r - n + 1)];for (f = this.ClipDiagonalBound(C - l, l, C, g), d = this.ClipDiagonalBound(C + l, l, C, g), m = f; m <= d; m += 2) {
          for (a = (u = m === f || m < d && y[m - 1] >= y[m + 1] ? y[m + 1] - 1 : y[m - 1]) - (m - C) - L, p = u; u > e && a > n && this.ElementsAreEqual(u, a);) {
            u--, a--;
          }if (y[m] = u, E && Math.abs(m - b) <= l && u <= v[m]) return i[0] = u, o[0] = a, p >= v[m] && l <= 1448 ? this.WALKTRACE(b, c, h, S, C, f, d, L, v, y, u, t, i, a, r, o, E, s) : null;
        }if (l <= 1447) {
          var M = new Array(h - c + 2);M[0] = b - c + 1, P.Copy(v, c, M, 1, h - c + 1), this.m_forwardHistory.push(M), (M = new Array(d - f + 2))[0] = C - f + 1, P.Copy(y, f, M, 1, d - f + 1), this.m_reverseHistory.push(M);
        }
      }return this.WALKTRACE(b, c, h, S, C, f, d, L, v, y, u, t, i, a, r, o, E, s);
    }, e.prototype.ShiftChanges = function (e) {
      var t;do {
        t = !1;for (var n = 0; n < e.length; n++) {
          for (var r = e[n], i = n < e.length - 1 ? e[n + 1].originalStart : this.OriginalSequence.getLength(), o = n < e.length - 1 ? e[n + 1].modifiedStart : this.ModifiedSequence.getLength(), s = r.originalLength > 0, u = r.modifiedLength > 0; r.originalStart + r.originalLength < i && r.modifiedStart + r.modifiedLength < o && (!s || this.OriginalElementsAreEqual(r.originalStart, r.originalStart + r.originalLength)) && (!u || this.ModifiedElementsAreEqual(r.modifiedStart, r.modifiedStart + r.modifiedLength));) {
            r.originalStart++, r.modifiedStart++;
          }
        }var a = new Array(),
            l = [null];for (n = 0; n < e.length; n++) {
          n < e.length - 1 && this.ChangesOverlap(e[n], e[n + 1], l) ? (t = !0, a.push(l[0]), n++) : a.push(e[n]);
        }e = a;
      } while (t);for (n = e.length - 1; n >= 0; n--) {
        r = e[n], i = 0, o = 0;if (n > 0) {
          var c = e[n - 1];c.originalLength > 0 && (i = c.originalStart + c.originalLength), c.modifiedLength > 0 && (o = c.modifiedStart + c.modifiedLength);
        }s = r.originalLength > 0, u = r.modifiedLength > 0;for (var h = 0, f = this._boundaryScore(r.originalStart, r.originalLength, r.modifiedStart, r.modifiedLength), d = 1;; d++) {
          var m = r.originalStart - d,
              p = r.modifiedStart - d;if (m < i || p < o) break;if (s && !this.OriginalElementsAreEqual(m, m + r.originalLength)) break;if (u && !this.ModifiedElementsAreEqual(p, p + r.modifiedLength)) break;var _ = this._boundaryScore(m, r.originalLength, p, r.modifiedLength);_ > f && (f = _, h = d);
        }r.originalStart -= h, r.modifiedStart -= h;
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
          r = null;return 0 === e.length || 0 === t.length ? t.length > 0 ? t : e : this.ChangesOverlap(e[e.length - 1], t[0], n) ? (r = new Array(e.length + t.length - 1), P.Copy(e, 0, r, 0, e.length - 1), r[e.length - 1] = n[0], P.Copy(t, 1, r, e.length, t.length - 1), r) : (r = new Array(e.length + t.length), P.Copy(e, 0, r, 0, e.length), P.Copy(t, 0, r, e.length, t.length), r);
    }, e.prototype.ChangesOverlap = function (e, t, n) {
      if (w.Assert(e.originalStart <= t.originalStart, "Left change is not less than or equal to right change"), w.Assert(e.modifiedStart <= t.modifiedStart, "Left change is not less than or equal to right change"), e.originalStart + e.originalLength >= t.originalStart || e.modifiedStart + e.modifiedLength >= t.modifiedStart) {
        var r = e.originalStart,
            i = e.originalLength,
            o = e.modifiedStart,
            s = e.modifiedLength;return e.originalStart + e.originalLength >= t.originalStart && (i = t.originalStart + t.originalLength - e.originalStart), e.modifiedStart + e.modifiedLength >= t.modifiedStart && (s = t.modifiedStart + t.modifiedLength - e.modifiedStart), n[0] = new N(r, i, o, s), !0;
      }return n[0] = null, !1;
    }, e.prototype.ClipDiagonalBound = function (e, t, n, r) {
      if (e >= 0 && e < r) return e;var i = t % 2 == 0;return e < 0 ? i === (n % 2 == 0) ? 0 : 1 : i === ((r - n - 1) % 2 == 0) ? r - 1 : r - 2;
    }, e;
  }();String.fromCharCode(65279);var k = 5e3,
      O = 3;function T(e, t, n, r) {
    return new M(e, t, n).ComputeDiff(r);
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
      for (var r = [], i = [], o = [], s = 0, u = t; u <= n; u++) {
        for (var a = this._lines[u], l = e ? this._startColumns[u] : 1, c = e ? this._endColumns[u] : a.length + 1, h = l; h < c; h++) {
          r[s] = a.charCodeAt(h - 1), i[s] = u + 1, o[s] = h, s++;
        }
      }return new D(r, i, o);
    }, e;
  }(),
      D = function () {
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
      U = function () {
    function e(e, t, n, r, i, o, s, u) {
      this.originalStartLineNumber = e, this.originalStartColumn = t, this.originalEndLineNumber = n, this.originalEndColumn = r, this.modifiedStartLineNumber = i, this.modifiedStartColumn = o, this.modifiedEndLineNumber = s, this.modifiedEndColumn = u;
    }return e.createFromDiffChange = function (t, n, r) {
      var i, o, s, u, a, l, c, h;return 0 === t.originalLength ? (i = 0, o = 0, s = 0, u = 0) : (i = n.getStartLineNumber(t.originalStart), o = n.getStartColumn(t.originalStart), s = n.getEndLineNumber(t.originalStart + t.originalLength - 1), u = n.getEndColumn(t.originalStart + t.originalLength - 1)), 0 === t.modifiedLength ? (a = 0, l = 0, c = 0, h = 0) : (a = r.getStartLineNumber(t.modifiedStart), l = r.getStartColumn(t.modifiedStart), c = r.getEndLineNumber(t.modifiedStart + t.modifiedLength - 1), h = r.getEndColumn(t.modifiedStart + t.modifiedLength - 1)), new e(i, o, s, u, a, l, c, h);
    }, e;
  }();var R = function () {
    function e(e, t, n, r, i) {
      this.originalStartLineNumber = e, this.originalEndLineNumber = t, this.modifiedStartLineNumber = n, this.modifiedEndLineNumber = r, this.charChanges = i;
    }return e.createFromDiffResult = function (t, n, r, i, o, s, u) {
      var a, l, c, h, f;if (0 === n.originalLength ? (a = r.getStartLineNumber(n.originalStart) - 1, l = 0) : (a = r.getStartLineNumber(n.originalStart), l = r.getEndLineNumber(n.originalStart + n.originalLength - 1)), 0 === n.modifiedLength ? (c = i.getStartLineNumber(n.modifiedStart) - 1, h = 0) : (c = i.getStartLineNumber(n.modifiedStart), h = i.getEndLineNumber(n.modifiedStart + n.modifiedLength - 1)), s && 0 !== n.originalLength && 0 !== n.modifiedLength && o()) {
        var d = r.getCharSequence(t, n.originalStart, n.originalStart + n.originalLength - 1),
            m = i.getCharSequence(t, n.modifiedStart, n.modifiedStart + n.modifiedLength - 1),
            p = T(d, m, o, !0);u && (p = function (e) {
          if (e.length <= 1) return e;for (var t = [e[0]], n = t[0], r = 1, i = e.length; r < i; r++) {
            var o = e[r],
                s = o.originalStart - (n.originalStart + n.originalLength),
                u = o.modifiedStart - (n.modifiedStart + n.modifiedLength);Math.min(s, u) < O ? (n.originalLength = o.originalStart + o.originalLength - n.originalStart, n.modifiedLength = o.modifiedStart + o.modifiedLength - n.modifiedStart) : (t.push(o), n = o);
          }return t;
        }(p)), f = [];for (var _ = 0, g = p.length; _ < g; _++) {
          f.push(U.createFromDiffChange(p[_], d, m));
        }
      }return new e(a, l, c, h, f);
    }, e;
  }(),
      K = function () {
    function e(e, t, n) {
      this.shouldComputeCharChanges = n.shouldComputeCharChanges, this.shouldPostProcessCharChanges = n.shouldPostProcessCharChanges, this.shouldIgnoreTrimWhitespace = n.shouldIgnoreTrimWhitespace, this.shouldMakePrettyDiff = n.shouldMakePrettyDiff, this.maximumRunTimeMs = k, this.originalLines = e, this.modifiedLines = t, this.original = new I(e), this.modified = new I(t);
    }return e.prototype.computeDiff = function () {
      if (1 === this.original.getLength() && 0 === this.original.getElementAtIndex(0).length) return [{ originalStartLineNumber: 1, originalEndLineNumber: 1, modifiedStartLineNumber: 1, modifiedEndLineNumber: this.modified.getLength(), charChanges: [{ modifiedEndColumn: 0, modifiedEndLineNumber: 0, modifiedStartColumn: 0, modifiedStartLineNumber: 0, originalEndColumn: 0, originalEndLineNumber: 0, originalStartColumn: 0, originalStartLineNumber: 0 }] }];if (1 === this.modified.getLength() && 0 === this.modified.getElementAtIndex(0).length) return [{ originalStartLineNumber: 1, originalEndLineNumber: this.original.getLength(), modifiedStartLineNumber: 1, modifiedEndLineNumber: 1, charChanges: [{ modifiedEndColumn: 0, modifiedEndLineNumber: 0, modifiedStartColumn: 0, modifiedStartLineNumber: 0, originalEndColumn: 0, originalEndLineNumber: 0, originalStartColumn: 0, originalStartLineNumber: 0 }] }];this.computationStartTime = new Date().getTime();var e = T(this.original, this.modified, this._continueProcessingPredicate.bind(this), this.shouldMakePrettyDiff);if (this.shouldIgnoreTrimWhitespace) {
        for (var t = [], n = 0, r = e.length; n < r; n++) {
          t.push(R.createFromDiffResult(this.shouldIgnoreTrimWhitespace, e[n], this.original, this.modified, this._continueProcessingPredicate.bind(this), this.shouldComputeCharChanges, this.shouldPostProcessCharChanges));
        }return t;
      }for (var i = [], o = 0, s = 0, u = (n = -1, e.length); n < u; n++) {
        for (var a = n + 1 < u ? e[n + 1] : null, l = a ? a.originalStart : this.originalLines.length, c = a ? a.modifiedStart : this.modifiedLines.length; o < l && s < c;) {
          var h = this.originalLines[o],
              f = this.modifiedLines[s];if (h !== f) {
            for (var d = I._getFirstNonBlankColumn(h, 1), m = I._getFirstNonBlankColumn(f, 1); d > 1 && m > 1;) {
              if (h.charCodeAt(d - 2) !== f.charCodeAt(m - 2)) break;d--, m--;
            }(d > 1 || m > 1) && this._pushTrimWhitespaceCharChange(i, o + 1, 1, d, s + 1, 1, m);for (var p = I._getLastNonBlankColumn(h, 1), _ = I._getLastNonBlankColumn(f, 1), g = h.length + 1, v = f.length + 1; p < g && _ < v;) {
              if (h.charCodeAt(p - 1) !== h.charCodeAt(_ - 1)) break;p++, _++;
            }(p < g || _ < v) && this._pushTrimWhitespaceCharChange(i, o + 1, p, g, s + 1, _, v);
          }o++, s++;
        }a && (i.push(R.createFromDiffResult(this.shouldIgnoreTrimWhitespace, a, this.original, this.modified, this._continueProcessingPredicate.bind(this), this.shouldComputeCharChanges, this.shouldPostProcessCharChanges)), o += a.originalLength, s += a.modifiedLength);
      }return i;
    }, e.prototype._pushTrimWhitespaceCharChange = function (e, t, n, r, i, o, s) {
      var u;this._mergeTrimWhitespaceCharChange(e, t, n, r, i, o, s) || (this.shouldComputeCharChanges && (u = [new U(t, n, t, r, i, o, i, s)]), e.push(new R(t, t, i, i, u)));
    }, e.prototype._mergeTrimWhitespaceCharChange = function (e, t, n, r, i, o, s) {
      var u = e.length;if (0 === u) return !1;var a = e[u - 1];return 0 !== a.originalEndLineNumber && 0 !== a.modifiedEndLineNumber && a.originalEndLineNumber + 1 === t && a.modifiedEndLineNumber + 1 === i && (a.originalEndLineNumber = t, a.modifiedEndLineNumber = i, this.shouldComputeCharChanges && a.charChanges.push(new U(t, n, t, r, i, o, i, s)), !0);
    }, e.prototype._continueProcessingPredicate = function () {
      return 0 === this.maximumRunTimeMs || new Date().getTime() - this.computationStartTime < this.maximumRunTimeMs;
    }, e;
  }(),
      q = function () {
    function e(e, t, n) {
      for (var r = new Uint8Array(e * t), i = 0, o = e * t; i < o; i++) {
        r[i] = n;
      }this._data = r, this.rows = e, this.cols = t;
    }return e.prototype.get = function (e, t) {
      return this._data[e * this.cols + t];
    }, e.prototype.set = function (e, t, n) {
      this._data[e * this.cols + t] = n;
    }, e;
  }();function F(e) {
    return e < 0 ? 0 : e > 255 ? 255 : 0 | e;
  }function V(e) {
    return e < 0 ? 0 : e > 4294967295 ? 4294967295 : 0 | e;
  }var W = function () {
    return function (e, t) {
      this.index = e, this.remainder = t;
    };
  }(),
      Y = function () {
    function e(e) {
      this.values = e, this.prefixSum = new Uint32Array(e.length), this.prefixSumValidIndex = new Int32Array(1), this.prefixSumValidIndex[0] = -1;
    }return e.prototype.getCount = function () {
      return this.values.length;
    }, e.prototype.insertValues = function (e, t) {
      e = V(e);var n = this.values,
          r = this.prefixSum,
          i = t.length;return 0 !== i && (this.values = new Uint32Array(n.length + i), this.values.set(n.subarray(0, e), 0), this.values.set(n.subarray(e), e + i), this.values.set(t, e), e - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = e - 1), this.prefixSum = new Uint32Array(this.values.length), this.prefixSumValidIndex[0] >= 0 && this.prefixSum.set(r.subarray(0, this.prefixSumValidIndex[0] + 1)), !0);
    }, e.prototype.changeValue = function (e, t) {
      return e = V(e), t = V(t), this.values[e] !== t && (this.values[e] = t, e - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = e - 1), !0);
    }, e.prototype.removeValues = function (e, t) {
      e = V(e), t = V(t);var n = this.values,
          r = this.prefixSum;if (e >= n.length) return !1;var i = n.length - e;return t >= i && (t = i), 0 !== t && (this.values = new Uint32Array(n.length - t), this.values.set(n.subarray(0, e), 0), this.values.set(n.subarray(e + t), e), this.prefixSum = new Uint32Array(this.values.length), e - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = e - 1), this.prefixSumValidIndex[0] >= 0 && this.prefixSum.set(r.subarray(0, this.prefixSumValidIndex[0] + 1)), !0);
    }, e.prototype.getTotalValue = function () {
      return 0 === this.values.length ? 0 : this._getAccumulatedValue(this.values.length - 1);
    }, e.prototype.getAccumulatedValue = function (e) {
      return e < 0 ? 0 : (e = V(e), this._getAccumulatedValue(e));
    }, e.prototype._getAccumulatedValue = function (e) {
      if (e <= this.prefixSumValidIndex[0]) return this.prefixSum[e];var t = this.prefixSumValidIndex[0] + 1;0 === t && (this.prefixSum[0] = this.values[0], t++), e >= this.values.length && (e = this.values.length - 1);for (var n = t; n <= e; n++) {
        this.prefixSum[n] = this.prefixSum[n - 1] + this.values[n];
      }return this.prefixSumValidIndex[0] = Math.max(this.prefixSumValidIndex[0], e), this.prefixSum[e];
    }, e.prototype.getIndexOf = function (e) {
      e = Math.floor(e), this.getTotalValue();for (var t, n, r, i = 0, o = this.values.length - 1; i <= o;) {
        if (t = i + (o - i) / 2 | 0, e < (r = (n = this.prefixSum[t]) - this.values[t])) o = t - 1;else {
          if (!(e >= n)) break;i = t + 1;
        }
      }return new W(t, e - r);
    }, e;
  }(),
      j = (function () {
    function e(e) {
      this._cacheAccumulatedValueStart = 0, this._cache = null, this._actual = new Y(e), this._bustCache();
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
        }this._lineStarts = new Y(n);
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
      B = function () {
    function e(t) {
      var n = F(t);this._defaultValue = n, this._asciiMap = e._createAsciiMap(n), this._map = new Map();
    }return e._createAsciiMap = function (e) {
      for (var t = new Uint8Array(256), n = 0; n < 256; n++) {
        t[n] = e;
      }return t;
    }, e.prototype.set = function (e, t) {
      var n = F(t);e >= 0 && e < 256 ? this._asciiMap[e] = n : this._map.set(e, n);
    }, e.prototype.get = function (e) {
      return e >= 0 && e < 256 ? this._asciiMap[e] : this._map.get(e) || this._defaultValue;
    }, e;
  }(),
      H = (function () {
    function e() {
      this._actual = new B(0);
    }e.prototype.add = function (e) {
      this._actual.set(e, 1);
    }, e.prototype.has = function (e) {
      return 1 === this._actual.get(e);
    };
  }(), function () {
    function e(e) {
      for (var t = 0, n = 0, r = 0, i = e.length; r < i; r++) {
        var o = e[r],
            s = o[0],
            u = o[1],
            a = o[2];u > t && (t = u), s > n && (n = s), a > n && (n = a);
      }var l = new q(++n, ++t, 0);for (r = 0, i = e.length; r < i; r++) {
        var c = e[r];s = c[0], u = c[1], a = c[2];l.set(s, u, a);
      }this._states = l, this._maxCharCode = t;
    }return e.prototype.nextState = function (e, t) {
      return t < 0 || t >= this._maxCharCode ? 0 : this._states.get(e, t);
    }, e;
  }()),
      J = null;var z = null;var Q = function () {
    function e() {}return e._createLink = function (e, t, n, r, i) {
      var o = i - 1;do {
        var s = t.charCodeAt(o);if (2 !== e.get(s)) break;o--;
      } while (o > r);if (r > 0) {
        var u = t.charCodeAt(r - 1),
            a = t.charCodeAt(o);(40 === u && 41 === a || 91 === u && 93 === a || 123 === u && 125 === a) && o--;
      }return { range: { startLineNumber: n, startColumn: r + 1, endLineNumber: n, endColumn: o + 2 }, url: t.substring(r, o + 1) };
    }, e.computeLinks = function (t) {
      for (var n = (null === J && (J = new H([[1, 104, 2], [1, 72, 2], [1, 102, 6], [1, 70, 6], [2, 116, 3], [2, 84, 3], [3, 116, 4], [3, 84, 4], [4, 112, 5], [4, 80, 5], [5, 115, 9], [5, 83, 9], [5, 58, 10], [6, 105, 7], [6, 73, 7], [7, 108, 8], [7, 76, 8], [8, 101, 9], [8, 69, 9], [9, 58, 10], [10, 47, 11], [11, 47, 12]])), J), r = function () {
        if (null === z) {
          z = new B(0);for (var e = 0; e < " \t<>'\"、。｡､，．：；？！＠＃＄％＆＊‘“〈《「『【〔（［｛｢｣｝］）〕】』」》〉”’｀～…".length; e++) {
            z.set(" \t<>'\"、。｡､，．：；？！＠＃＄％＆＊‘“〈《「『【〔（［｛｢｣｝］）〕】』」》〉”’｀～…".charCodeAt(e), 1);
          }for (e = 0; e < ".,;".length; e++) {
            z.set(".,;".charCodeAt(e), 2);
          }
        }return z;
      }(), i = [], o = 1, s = t.getLineCount(); o <= s; o++) {
        for (var u = t.getLineContent(o), a = u.length, l = 0, c = 0, h = 0, f = 1, d = !1, m = !1, p = !1; l < a;) {
          var _ = !1,
              g = u.charCodeAt(l);if (13 === f) {
            var v = void 0;switch (g) {case 40:
                d = !0, v = 0;break;case 41:
                v = d ? 0 : 1;break;case 91:
                m = !0, v = 0;break;case 93:
                v = m ? 0 : 1;break;case 123:
                p = !0, v = 0;break;case 125:
                v = p ? 0 : 1;break;case 39:
                v = 34 === h || 96 === h ? 0 : 1;break;case 34:
                v = 39 === h || 96 === h ? 0 : 1;break;case 96:
                v = 39 === h || 34 === h ? 0 : 1;break;default:
                v = r.get(g);}1 === v && (i.push(e._createLink(r, u, o, c, l)), _ = !0);
          } else if (12 === f) {
            1 === (v = r.get(g)) ? _ = !0 : f = 13;
          } else 0 === (f = n.nextState(f, g)) && (_ = !0);_ && (f = 1, d = !1, m = !1, p = !1, c = l + 1, h = g), l++;
        }13 === f && i.push(e._createLink(r, u, o, c, a));
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
      X = "`~!@#$%^&*()-=+[{]}\\|;:'\",.<>/?";var $ = function (e) {
    void 0 === e && (e = "");for (var t = "(-?\\d*\\.\\d\\w*)|([^", n = 0; n < X.length; n++) {
      e.indexOf(X[n]) >= 0 || (t += "\\" + X[n]);
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
  }function se(e) {
    for (var t = [], n = 1; n < arguments.length; n++) {
      t[n - 1] = arguments[n];
    }return Array.isArray(e) ? (e.forEach(function (e) {
      return e && e.dispose();
    }), []) : 0 === t.length ? e ? (e.dispose(), e) : void 0 : (se(e), se(t), []);
  }var ue,
      ae = function () {
    function e() {
      this._toDispose = [];
    }return Object.defineProperty(e.prototype, "toDispose", { get: function get() {
        return this._toDispose;
      }, enumerable: !0, configurable: !0 }), e.prototype.dispose = function () {
      this._toDispose = se(this._toDispose);
    }, e.prototype._register = function (e) {
      return this._toDispose.push(e), e;
    }, e.None = Object.freeze({ dispose: function dispose() {} }), e;
  }(),
      le = (function () {
    function e(e) {
      this.object = e;
    }e.prototype.dispose = function () {};
  }(), function () {
    return function (e) {
      this.element = e;
    };
  }()),
      ce = function () {
    function e() {}return e.prototype.isEmpty = function () {
      return !this._first;
    }, e.prototype.unshift = function (e) {
      return this.insert(e, !1);
    }, e.prototype.push = function (e) {
      return this.insert(e, !0);
    }, e.prototype.insert = function (e, t) {
      var n = this,
          r = new le(e);if (this._first) {
        if (t) {
          var i = this._last;this._last = r, r.prev = i, i.next = r;
        } else {
          var o = this._first;this._first = r, r.next = o, o.prev = r;
        }
      } else this._first = r, this._last = r;return function () {
        for (var e = n._first; e instanceof le; e = e.next) {
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
  }(ue || (ue = {}));var he = function () {
    function e(e) {
      this._options = e;
    }return Object.defineProperty(e.prototype, "event", { get: function get() {
        var t = this;return this._event || (this._event = function (n, r, i) {
          t._listeners || (t._listeners = new ce());var o = t._listeners.isEmpty();o && t._options && t._options.onFirstListenerAdd && t._options.onFirstListenerAdd(t);var s,
              u = t._listeners.push(r ? [n, r] : n);return o && t._options && t._options.onFirstListenerDidAdd && t._options.onFirstListenerDidAdd(t), t._options && t._options.onListenerDidAdd && t._options.onListenerDidAdd(t, n, r), s = { dispose: function dispose() {
              s.dispose = e._noop, t._disposed || (u(), t._options && t._options.onLastListenerRemove && t._listeners.isEmpty() && t._options.onLastListenerRemove(t));
            } }, Array.isArray(i) && i.push(s), s;
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
      var e = this;this.hasListeners = !1, this.events = [], this.emitter = new he({ onFirstListenerAdd: function onFirstListenerAdd() {
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
      this.emitter = new he(), this.event = this.emitter.event, this.disposable = ae.None;
    }Object.defineProperty(e.prototype, "input", { set: function set(e) {
        this.disposable.dispose(), this.disposable = e(this.emitter.fire, this.emitter);
      }, enumerable: !0, configurable: !0 }), e.prototype.dispose = function () {
      this.disposable.dispose(), this.emitter.dispose();
    };
  }();var fe,
      de = function () {
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
      me = new de(),
      pe = new de(),
      _e = new de();!function () {
    function e(e, t, n, r) {
      void 0 === n && (n = t), void 0 === r && (r = n), me.define(e, t), pe.define(e, n), _e.define(e, r);
    }e(0, "unknown"), e(1, "Backspace"), e(2, "Tab"), e(3, "Enter"), e(4, "Shift"), e(5, "Ctrl"), e(6, "Alt"), e(7, "PauseBreak"), e(8, "CapsLock"), e(9, "Escape"), e(10, "Space"), e(11, "PageUp"), e(12, "PageDown"), e(13, "End"), e(14, "Home"), e(15, "LeftArrow", "Left"), e(16, "UpArrow", "Up"), e(17, "RightArrow", "Right"), e(18, "DownArrow", "Down"), e(19, "Insert"), e(20, "Delete"), e(21, "0"), e(22, "1"), e(23, "2"), e(24, "3"), e(25, "4"), e(26, "5"), e(27, "6"), e(28, "7"), e(29, "8"), e(30, "9"), e(31, "A"), e(32, "B"), e(33, "C"), e(34, "D"), e(35, "E"), e(36, "F"), e(37, "G"), e(38, "H"), e(39, "I"), e(40, "J"), e(41, "K"), e(42, "L"), e(43, "M"), e(44, "N"), e(45, "O"), e(46, "P"), e(47, "Q"), e(48, "R"), e(49, "S"), e(50, "T"), e(51, "U"), e(52, "V"), e(53, "W"), e(54, "X"), e(55, "Y"), e(56, "Z"), e(57, "Meta"), e(58, "ContextMenu"), e(59, "F1"), e(60, "F2"), e(61, "F3"), e(62, "F4"), e(63, "F5"), e(64, "F6"), e(65, "F7"), e(66, "F8"), e(67, "F9"), e(68, "F10"), e(69, "F11"), e(70, "F12"), e(71, "F13"), e(72, "F14"), e(73, "F15"), e(74, "F16"), e(75, "F17"), e(76, "F18"), e(77, "F19"), e(78, "NumLock"), e(79, "ScrollLock"), e(80, ";", ";", "OEM_1"), e(81, "=", "=", "OEM_PLUS"), e(82, ",", ",", "OEM_COMMA"), e(83, "-", "-", "OEM_MINUS"), e(84, ".", ".", "OEM_PERIOD"), e(85, "/", "/", "OEM_2"), e(86, "`", "`", "OEM_3"), e(110, "ABNT_C1"), e(111, "ABNT_C2"), e(87, "[", "[", "OEM_4"), e(88, "\\", "\\", "OEM_5"), e(89, "]", "]", "OEM_6"), e(90, "'", "'", "OEM_7"), e(91, "OEM_8"), e(92, "OEM_102"), e(93, "NumPad0"), e(94, "NumPad1"), e(95, "NumPad2"), e(96, "NumPad3"), e(97, "NumPad4"), e(98, "NumPad5"), e(99, "NumPad6"), e(100, "NumPad7"), e(101, "NumPad8"), e(102, "NumPad9"), e(103, "NumPad_Multiply"), e(104, "NumPad_Add"), e(105, "NumPad_Separator"), e(106, "NumPad_Subtract"), e(107, "NumPad_Decimal"), e(108, "NumPad_Divide");
  }(), function (e) {
    e.toString = function (e) {
      return me.keyCodeToStr(e);
    }, e.fromString = function (e) {
      return me.strToKeyCode(e);
    }, e.toUserSettingsUS = function (e) {
      return pe.keyCodeToStr(e);
    }, e.toUserSettingsGeneral = function (e) {
      return _e.keyCodeToStr(e);
    }, e.fromUserSettings = function (e) {
      return pe.strToKeyCode(e) || _e.strToKeyCode(e);
    };
  }(fe || (fe = {}));!function () {
    function e(e, t, n, r, i) {
      this.type = 1, this.ctrlKey = e, this.shiftKey = t, this.altKey = n, this.metaKey = r, this.keyCode = i;
    }e.prototype.equals = function (e) {
      return 1 === e.type && this.ctrlKey === e.ctrlKey && this.shiftKey === e.shiftKey && this.altKey === e.altKey && this.metaKey === e.metaKey && this.keyCode === e.keyCode;
    }, e.prototype.isModifierKey = function () {
      return 0 === this.keyCode || 5 === this.keyCode || 57 === this.keyCode || 6 === this.keyCode || 4 === this.keyCode;
    }, e.prototype.isDuplicateModifierCase = function () {
      return this.ctrlKey && 5 === this.keyCode || this.shiftKey && 4 === this.keyCode || this.altKey && 6 === this.keyCode || this.metaKey && 57 === this.keyCode;
    };
  }();var ge,
      ve = function () {
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
  }(ge || (ge = {}));var ye,
      be,
      Ce = function (e) {
    function t(t, n, r, i) {
      var o = e.call(this, t, n, r, i) || this;return o.selectionStartLineNumber = t, o.selectionStartColumn = n, o.positionLineNumber = r, o.positionColumn = i, o;
    }return ve(t, e), t.prototype.clone = function () {
      return new t(this.selectionStartLineNumber, this.selectionStartColumn, this.positionLineNumber, this.positionColumn);
    }, t.prototype.toString = function () {
      return "[" + this.selectionStartLineNumber + "," + this.selectionStartColumn + " -> " + this.positionLineNumber + "," + this.positionColumn + "]";
    }, t.prototype.equalsSelection = function (e) {
      return t.selectionsEqual(this, e);
    }, t.selectionsEqual = function (e, t) {
      return e.selectionStartLineNumber === t.selectionStartLineNumber && e.selectionStartColumn === t.selectionStartColumn && e.positionLineNumber === t.positionLineNumber && e.positionColumn === t.positionColumn;
    }, t.prototype.getDirection = function () {
      return this.selectionStartLineNumber === this.startLineNumber && this.selectionStartColumn === this.startColumn ? ge.LTR : ge.RTL;
    }, t.prototype.setEndPosition = function (e, n) {
      return this.getDirection() === ge.LTR ? new t(this.startLineNumber, this.startColumn, e, n) : new t(e, n, this.startLineNumber, this.startColumn);
    }, t.prototype.getPosition = function () {
      return new S(this.positionLineNumber, this.positionColumn);
    }, t.prototype.setStartPosition = function (e, n) {
      return this.getDirection() === ge.LTR ? new t(e, n, this.endLineNumber, this.endColumn) : new t(this.endLineNumber, this.endColumn, e, n);
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
      return o === ge.LTR ? new t(e, n, r, i) : new t(r, i, e, n);
    }, t;
  }(L),
      Se = Object.freeze(function (e, t) {
    var n = setTimeout(e.bind(t), 0);return { dispose: function dispose() {
        clearTimeout(n);
      } };
  });(be = ye || (ye = {})).None = Object.freeze({ isCancellationRequested: !1, onCancellationRequested: ue.None }), be.Cancelled = Object.freeze({ isCancellationRequested: !0, onCancellationRequested: Se });var Le,
      Ne,
      Ee = function () {
    function e() {
      this._isCancelled = !1;
    }return e.prototype.cancel = function () {
      this._isCancelled || (this._isCancelled = !0, this._emitter && (this._emitter.fire(void 0), this.dispose()));
    }, Object.defineProperty(e.prototype, "isCancellationRequested", { get: function get() {
        return this._isCancelled;
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "onCancellationRequested", { get: function get() {
        return this._isCancelled ? Se : (this._emitter || (this._emitter = new he()), this._emitter.event);
      }, enumerable: !0, configurable: !0 }), e.prototype.dispose = function () {
      this._emitter && (this._emitter.dispose(), this._emitter = void 0);
    }, e;
  }(),
      Ae = function () {
    function e() {}return Object.defineProperty(e.prototype, "token", { get: function get() {
        return this._token || (this._token = new Ee()), this._token;
      }, enumerable: !0, configurable: !0 }), e.prototype.cancel = function () {
      this._token ? this._token instanceof Ee && this._token.cancel() : this._token = ye.Cancelled;
    }, e.prototype.dispose = function () {
      this._token ? this._token instanceof Ee && this._token.dispose() : this._token = ye.None;
    }, e;
  }(),
      we = function () {
    function e(e, t, n) {
      this.offset = 0 | e, this.type = t, this.language = n;
    }return e.prototype.toString = function () {
      return "(" + this.offset + ", " + this.type + ")";
    }, e;
  }();!function (e) {
    e[e.Unnecessary = 1] = "Unnecessary";
  }(Le || (Le = {})), function (e) {
    e[e.Hint = 1] = "Hint", e[e.Info = 2] = "Info", e[e.Warning = 4] = "Warning", e[e.Error = 8] = "Error";
  }(Ne || (Ne = {}));var Pe,
      xe = function () {
    function e() {}return e.chord = function (e, t) {
      return function (e, t) {
        return (e | (65535 & t) << 16 >>> 0) >>> 0;
      }(e, t);
    }, e.CtrlCmd = 2048, e.Shift = 1024, e.Alt = 512, e.WinCtrl = 256, e;
  }();!function (e) {
    e[e.Unknown = 0] = "Unknown", e[e.Backspace = 1] = "Backspace", e[e.Tab = 2] = "Tab", e[e.Enter = 3] = "Enter", e[e.Shift = 4] = "Shift", e[e.Ctrl = 5] = "Ctrl", e[e.Alt = 6] = "Alt", e[e.PauseBreak = 7] = "PauseBreak", e[e.CapsLock = 8] = "CapsLock", e[e.Escape = 9] = "Escape", e[e.Space = 10] = "Space", e[e.PageUp = 11] = "PageUp", e[e.PageDown = 12] = "PageDown", e[e.End = 13] = "End", e[e.Home = 14] = "Home", e[e.LeftArrow = 15] = "LeftArrow", e[e.UpArrow = 16] = "UpArrow", e[e.RightArrow = 17] = "RightArrow", e[e.DownArrow = 18] = "DownArrow", e[e.Insert = 19] = "Insert", e[e.Delete = 20] = "Delete", e[e.KEY_0 = 21] = "KEY_0", e[e.KEY_1 = 22] = "KEY_1", e[e.KEY_2 = 23] = "KEY_2", e[e.KEY_3 = 24] = "KEY_3", e[e.KEY_4 = 25] = "KEY_4", e[e.KEY_5 = 26] = "KEY_5", e[e.KEY_6 = 27] = "KEY_6", e[e.KEY_7 = 28] = "KEY_7", e[e.KEY_8 = 29] = "KEY_8", e[e.KEY_9 = 30] = "KEY_9", e[e.KEY_A = 31] = "KEY_A", e[e.KEY_B = 32] = "KEY_B", e[e.KEY_C = 33] = "KEY_C", e[e.KEY_D = 34] = "KEY_D", e[e.KEY_E = 35] = "KEY_E", e[e.KEY_F = 36] = "KEY_F", e[e.KEY_G = 37] = "KEY_G", e[e.KEY_H = 38] = "KEY_H", e[e.KEY_I = 39] = "KEY_I", e[e.KEY_J = 40] = "KEY_J", e[e.KEY_K = 41] = "KEY_K", e[e.KEY_L = 42] = "KEY_L", e[e.KEY_M = 43] = "KEY_M", e[e.KEY_N = 44] = "KEY_N", e[e.KEY_O = 45] = "KEY_O", e[e.KEY_P = 46] = "KEY_P", e[e.KEY_Q = 47] = "KEY_Q", e[e.KEY_R = 48] = "KEY_R", e[e.KEY_S = 49] = "KEY_S", e[e.KEY_T = 50] = "KEY_T", e[e.KEY_U = 51] = "KEY_U", e[e.KEY_V = 52] = "KEY_V", e[e.KEY_W = 53] = "KEY_W", e[e.KEY_X = 54] = "KEY_X", e[e.KEY_Y = 55] = "KEY_Y", e[e.KEY_Z = 56] = "KEY_Z", e[e.Meta = 57] = "Meta", e[e.ContextMenu = 58] = "ContextMenu", e[e.F1 = 59] = "F1", e[e.F2 = 60] = "F2", e[e.F3 = 61] = "F3", e[e.F4 = 62] = "F4", e[e.F5 = 63] = "F5", e[e.F6 = 64] = "F6", e[e.F7 = 65] = "F7", e[e.F8 = 66] = "F8", e[e.F9 = 67] = "F9", e[e.F10 = 68] = "F10", e[e.F11 = 69] = "F11", e[e.F12 = 70] = "F12", e[e.F13 = 71] = "F13", e[e.F14 = 72] = "F14", e[e.F15 = 73] = "F15", e[e.F16 = 74] = "F16", e[e.F17 = 75] = "F17", e[e.F18 = 76] = "F18", e[e.F19 = 77] = "F19", e[e.NumLock = 78] = "NumLock", e[e.ScrollLock = 79] = "ScrollLock", e[e.US_SEMICOLON = 80] = "US_SEMICOLON", e[e.US_EQUAL = 81] = "US_EQUAL", e[e.US_COMMA = 82] = "US_COMMA", e[e.US_MINUS = 83] = "US_MINUS", e[e.US_DOT = 84] = "US_DOT", e[e.US_SLASH = 85] = "US_SLASH", e[e.US_BACKTICK = 86] = "US_BACKTICK", e[e.US_OPEN_SQUARE_BRACKET = 87] = "US_OPEN_SQUARE_BRACKET", e[e.US_BACKSLASH = 88] = "US_BACKSLASH", e[e.US_CLOSE_SQUARE_BRACKET = 89] = "US_CLOSE_SQUARE_BRACKET", e[e.US_QUOTE = 90] = "US_QUOTE", e[e.OEM_8 = 91] = "OEM_8", e[e.OEM_102 = 92] = "OEM_102", e[e.NUMPAD_0 = 93] = "NUMPAD_0", e[e.NUMPAD_1 = 94] = "NUMPAD_1", e[e.NUMPAD_2 = 95] = "NUMPAD_2", e[e.NUMPAD_3 = 96] = "NUMPAD_3", e[e.NUMPAD_4 = 97] = "NUMPAD_4", e[e.NUMPAD_5 = 98] = "NUMPAD_5", e[e.NUMPAD_6 = 99] = "NUMPAD_6", e[e.NUMPAD_7 = 100] = "NUMPAD_7", e[e.NUMPAD_8 = 101] = "NUMPAD_8", e[e.NUMPAD_9 = 102] = "NUMPAD_9", e[e.NUMPAD_MULTIPLY = 103] = "NUMPAD_MULTIPLY", e[e.NUMPAD_ADD = 104] = "NUMPAD_ADD", e[e.NUMPAD_SEPARATOR = 105] = "NUMPAD_SEPARATOR", e[e.NUMPAD_SUBTRACT = 106] = "NUMPAD_SUBTRACT", e[e.NUMPAD_DECIMAL = 107] = "NUMPAD_DECIMAL", e[e.NUMPAD_DIVIDE = 108] = "NUMPAD_DIVIDE", e[e.KEY_IN_COMPOSITION = 109] = "KEY_IN_COMPOSITION", e[e.ABNT_C1 = 110] = "ABNT_C1", e[e.ABNT_C2 = 111] = "ABNT_C2", e[e.MAX_VALUE = 112] = "MAX_VALUE";
  }(Pe || (Pe = {}));var Me = function () {
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
      ke = function (e) {
    function t() {
      return null !== e && e.apply(this, arguments) || this;
    }return Me(t, e), Object.defineProperty(t.prototype, "uri", { get: function get() {
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
              s = n.lastIndexOf(" ", o - 1) + 1,
              u = n.indexOf(" ", o);for (-1 === u && (u = n.length), t.lastIndex = s; i = t.exec(n);) {
            if (i.index <= o && t.lastIndex >= o) return { word: i[0], startColumn: r + 1 + i.index, endColumn: r + 1 + t.lastIndex };
          }return null;
        }(e, t, n, r);return t.lastIndex = 0, o;
      }(e.column, function (e) {
        var t = $;if (e && e instanceof RegExp) if (e.global) t = e;else {
          var n = "g";e.ignoreCase && (n += "i"), e.multiline && (n += "m"), t = new RegExp(e.source, n);
        }return t.lastIndex = 0, t;
      }(t), this._lines[e.lineNumber - 1], 0);return n ? new L(e.lineNumber, n.startColumn, e.lineNumber, n.endColumn) : null;
    }, t.prototype.getWordUntilPosition = function (e, t) {
      var n = this.getWordAtPosition(e, t);return n ? { word: this._lines[e.lineNumber - 1].substring(n.startColumn - 1, e.column - 1), startColumn: n.startColumn, endColumn: e.column } : { word: "", startColumn: e.column, endColumn: e.column };
    }, t.prototype.createWordIterator = function (e) {
      var t,
          n = this,
          r = { done: !1, value: "" },
          i = 0,
          o = 0,
          s = [],
          u = function u() {
        if (o < s.length) r.done = !1, r.value = t.substring(s[o].start, s[o].end), o += 1;else {
          if (!(i >= n._lines.length)) return t = n._lines[i], s = n._wordenize(t, e), o = 0, i += 1, u();r.done = !0, r.value = void 0;
        }return r;
      };return { next: u };
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
  }(j),
      Oe = function (e) {
    function t(t) {
      var n = e.call(this, t) || this;return n._models = Object.create(null), n;
    }return Me(t, e), t.prototype.dispose = function () {
      this._models = Object.create(null);
    }, t.prototype._getModel = function (e) {
      return this._models[e];
    }, t.prototype._getModels = function () {
      var e = this,
          t = [];return Object.keys(this._models).forEach(function (n) {
        return t.push(e._models[n]);
      }), t;
    }, t.prototype.acceptNewModel = function (e) {
      this._models[e.url] = new ke(m.parse(e.url), e.lines, e.EOL, e.versionId);
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
          s = i.getLinesContent(),
          u = new K(o, s, { shouldComputeCharChanges: !0, shouldPostProcessCharChanges: !0, shouldIgnoreTrimWhitespace: n, shouldMakePrettyDiff: !0 });return C.a.as(u.computeDiff());
    }, e.prototype.computeMoreMinimalEdits = function (t, n) {
      var r = this._getModel(t);if (!r) return C.a.as(n);for (var i, o = [], s = 0, u = n; s < u.length; s++) {
        var a = u[s],
            l = a.range,
            c = a.text,
            h = a.eol;if ("number" == typeof h && (i = h), l) {
          var f = r.getValueInRange(l);if (f !== (c = c.replace(/\r\n|\n|\r/g, r.eol))) if (Math.max(c.length, f.length) > e._diffLimit) o.push({ range: l, text: c });else for (var d = A(f, c, !1), m = r.offsetAt(L.lift(l).getStartPosition()), p = 0, _ = d; p < _.length; p++) {
            var g = _[p],
                v = r.positionAt(m + g.originalStart),
                y = r.positionAt(m + g.originalStart + g.originalLength),
                b = { text: c.substr(g.modifiedStart, g.modifiedLength), range: { startLineNumber: v.lineNumber, startColumn: v.column, endLineNumber: y.lineNumber, endColumn: y.column } };r.getValueInRange(b.range) !== b.text && o.push(b);
          }
        }
      }return "number" == typeof i && o.push({ eol: i, text: void 0, range: void 0 }), C.a.as(o);
    }, e.prototype.computeLinks = function (e) {
      var t = this._getModel(e);return t ? C.a.as(function (e) {
        return e && "function" == typeof e.getLineCount && "function" == typeof e.getLineContent ? Q.computeLinks(e) : [];
      }(t)) : null;
    }, e.prototype.textualSuggest = function (t, n, r, i) {
      var o = this._getModel(t);if (o) {
        var s = [],
            u = new RegExp(r, i),
            a = o.getWordUntilPosition(n, u).word,
            l = Object.create(null);l[a] = !0;for (var c = o.createWordIterator(u), h = c.next(); !h.done && s.length <= e._suggestionsLimit; h = c.next()) {
          var f = h.value;l[f] || (l[f] = !0, isNaN(Number(f)) && s.push({ type: "text", label: f, insertText: f, noAutoAccept: !0, overwriteBefore: a.length }));
        }return C.a.as({ suggestions: s });
      }
    }, e.prototype.navigateValueSet = function (e, t, n, r, i) {
      var o = this._getModel(e);if (!o) return null;var s = new RegExp(r, i);t.startColumn === t.endColumn && (t = { startLineNumber: t.startLineNumber, startColumn: t.startColumn, endLineNumber: t.endLineNumber, endColumn: t.endColumn + 1 });var u = o.getValueInRange(t),
          a = o.getWordAtPosition({ lineNumber: t.startLineNumber, column: t.startColumn }, s),
          l = null;null !== a && (l = o.getValueInRange(a));var c = G.INSTANCE.navigateValueSet(t, u, a, l, n);return C.a.as(c);
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
  }());"function" == typeof importScripts && (o.a.monaco = { editor: void 0, languages: void 0, CancellationTokenSource: Ae, Emitter: he, KeyCode: Pe, KeyMod: xe, Position: S, Range: L, Selection: Ce, SelectionDirection: ge, MarkerSeverity: Ne, MarkerTag: Le, Promise: C.a, Uri: m, Token: we });var Te = function () {
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
    }return Te(t, e), t;
  }(C.a);(function (e) {
    function t() {
      var t = e.call(this) || this;return t._token = -1, t;
    }Te(t, e), t.prototype.dispose = function () {
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
  })(ae), function (e) {
    function t() {
      var t = e.call(this) || this;return t._token = -1, t;
    }Te(t, e), t.prototype.dispose = function () {
      this.cancel(), e.prototype.dispose.call(this);
    }, t.prototype.cancel = function () {
      -1 !== this._token && (clearInterval(this._token), this._token = -1);
    }, t.prototype.cancelAndSet = function (e, t) {
      this.cancel(), this._token = setInterval(function () {
        e();
      }, t);
    };
  }(ae), function () {
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
  }();var De = function () {
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
      Ue = "$initialize";var Re = function () {
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
            s = o.req;this._handler.handleMessage(o.method, o.args).then(function (e) {
          t._send({ vsWorker: t._workerId, seq: s, res: e, err: void 0 });
        }, function (e) {
          e.detail instanceof Error && (e.detail = ne(e.detail)), t._send({ vsWorker: t._workerId, seq: s, res: void 0, err: ne(e) });
        });
      }
    }, e.prototype._send = function (e) {
      var t = JSON.stringify(e);this._handler.sendMessage(t);
    }, e;
  }(),
      Ke = (function (e) {
    function t(t, n) {
      var r = e.call(this) || this,
          i = null,
          o = null;r._worker = r._register(t.create("vs/base/common/worker/simpleWorker", function (e) {
        r._protocol.handleMessage(e);
      }, function (e) {
        o(e);
      })), r._protocol = new Re({ sendMessage: function sendMessage(e) {
          r._worker.postMessage(e);
        }, handleMessage: function handleMessage(e, t) {
          return C.a.as(null);
        } }), r._protocol.setWorkerId(r._worker.getId());var s = null;void 0 !== self.require && "function" == typeof self.require.getConfig ? s = self.require.getConfig() : void 0 !== self.requirejs && (s = self.requirejs.s.contexts._.config), r._lazyProxy = new C.a(function (e, t) {
        i = e, o = t;
      }, function () {}), r._onModuleLoaded = r._protocol.sendMessage(Ue, [r._worker.getId(), n, s]), r._onModuleLoaded.then(function (e) {
        for (var t = {}, n = 0; n < e.length; n++) {
          t[e[n]] = a(e[n], u);
        }i(t);
      }, function (e) {
        o(e), r._onError("Worker failed to load " + n, e);
      });var u = function u(e, t) {
        return r._request(e, t);
      },
          a = function a(e, t) {
        return function () {
          var n = Array.prototype.slice.call(arguments, 0);return t(e, n);
        };
      };return r;
    }De(t, e), t.prototype.getProxyObject = function () {
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
  }(ae), function () {
    function e(e, t) {
      var n = this;this._requestHandler = t, this._protocol = new Re({ sendMessage: function sendMessage(t) {
          e(t);
        }, handleMessage: function handleMessage(e, t) {
          return n._handleMessage(e, t);
        } });
    }return e.prototype.onmessage = function (e) {
      this._protocol.handleMessage(e);
    }, e.prototype._handleMessage = function (e, t) {
      if (e === Ue) return this.initialize(t[0], t[1], t[2]);if (!this._requestHandler || "function" != typeof this._requestHandler[e]) return C.a.wrapError(new Error("Missing requestHandler or method: " + e));try {
        return C.a.as(this._requestHandler[e].apply(this._requestHandler, t));
      } catch (e) {
        return C.a.wrapError(e);
      }
    }, e.prototype.initialize = function (e, t, n) {
      var r,
          i,
          o = this;if (this._protocol.setWorkerId(e), this._requestHandler) {
        var s = [];for (var u in this._requestHandler) {
          "function" == typeof this._requestHandler[u] && s.push(u);
        }return C.a.as(s);
      }n && (void 0 !== n.baseUrl && delete n.baseUrl, void 0 !== n.paths && void 0 !== n.paths.vs && delete n.paths.vs, n.catchError = !0, self.require.config(n));var a = new C.a(function (e, t) {
        r = e, i = t;
      });return self.require([t], function () {
        for (var e = [], t = 0; t < arguments.length; t++) {
          e[t] = arguments[t];
        }var n = e[0];o._requestHandler = n.create();var i = [];for (var s in o._requestHandler) {
          "function" == typeof o._requestHandler[s] && i.push(s);
        }r(i);
      }, i), a;
    }, e;
  }());n.d(t, "initialize", function () {
    return Fe;
  });var qe = !1;function Fe(e) {
    if (!qe) {
      qe = !0;var t = new Oe(e),
          n = new Ke(function (e) {
        self.postMessage(e);
      }, t);self.onmessage = function (e) {
        n.onmessage(e.data);
      };
    }
  }self.onmessage = function (e) {
    qe || Fe(null);
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
},{}]},{},["..\\..\\..\\AppData\\Roaming\\npm\\node_modules\\parcel-bundler\\src\\builtins\\hmr-runtime.js","editor.worker.js"], null)
//# sourceMappingURL=/editor.worker.5b01f77d.map