/*! Kaltura Embed Code Generator - v1.2.0 - 2022-02-09
* https://github.com/kaltura/EmbedCodeGenerator
* Copyright (c) 2022 Kaltura Inc. *//**!

 @license
 handlebars v4.7.7

Copyright (C) 2011-2019 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Handlebars"] = factory();
	else
		root["Handlebars"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = __webpack_require__(1)['default'];

	var _interopRequireDefault = __webpack_require__(2)['default'];

	exports.__esModule = true;

	var _handlebarsBase = __webpack_require__(3);

	var base = _interopRequireWildcard(_handlebarsBase);

	// Each of these augment the Handlebars object. No need to setup here.
	// (This is done to easily share code between commonjs and browse envs)

	var _handlebarsSafeString = __webpack_require__(36);

	var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);

	var _handlebarsException = __webpack_require__(5);

	var _handlebarsException2 = _interopRequireDefault(_handlebarsException);

	var _handlebarsUtils = __webpack_require__(4);

	var Utils = _interopRequireWildcard(_handlebarsUtils);

	var _handlebarsRuntime = __webpack_require__(37);

	var runtime = _interopRequireWildcard(_handlebarsRuntime);

	var _handlebarsNoConflict = __webpack_require__(43);

	var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);

	// For compatibility and usage outside of module systems, make the Handlebars object a namespace
	function create() {
	  var hb = new base.HandlebarsEnvironment();

	  Utils.extend(hb, base);
	  hb.SafeString = _handlebarsSafeString2['default'];
	  hb.Exception = _handlebarsException2['default'];
	  hb.Utils = Utils;
	  hb.escapeExpression = Utils.escapeExpression;

	  hb.VM = runtime;
	  hb.template = function (spec) {
	    return runtime.template(spec, hb);
	  };

	  return hb;
	}

	var inst = create();
	inst.create = create;

	_handlebarsNoConflict2['default'](inst);

	inst['default'] = inst;

	exports['default'] = inst;
	module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  if (obj && obj.__esModule) {
	    return obj;
	  } else {
	    var newObj = {};

	    if (obj != null) {
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	      }
	    }

	    newObj["default"] = obj;
	    return newObj;
	  }
	};

	exports.__esModule = true;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};

	exports.__esModule = true;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(2)['default'];

	exports.__esModule = true;
	exports.HandlebarsEnvironment = HandlebarsEnvironment;

	var _utils = __webpack_require__(4);

	var _exception = __webpack_require__(5);

	var _exception2 = _interopRequireDefault(_exception);

	var _helpers = __webpack_require__(9);

	var _decorators = __webpack_require__(29);

	var _logger = __webpack_require__(31);

	var _logger2 = _interopRequireDefault(_logger);

	var _internalProtoAccess = __webpack_require__(32);

	var VERSION = '4.7.7';
	exports.VERSION = VERSION;
	var COMPILER_REVISION = 8;
	exports.COMPILER_REVISION = COMPILER_REVISION;
	var LAST_COMPATIBLE_COMPILER_REVISION = 7;

	exports.LAST_COMPATIBLE_COMPILER_REVISION = LAST_COMPATIBLE_COMPILER_REVISION;
	var REVISION_CHANGES = {
	  1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
	  2: '== 1.0.0-rc.3',
	  3: '== 1.0.0-rc.4',
	  4: '== 1.x.x',
	  5: '== 2.0.0-alpha.x',
	  6: '>= 2.0.0-beta.1',
	  7: '>= 4.0.0 <4.3.0',
	  8: '>= 4.3.0'
	};

	exports.REVISION_CHANGES = REVISION_CHANGES;
	var objectType = '[object Object]';

	function HandlebarsEnvironment(helpers, partials, decorators) {
	  this.helpers = helpers || {};
	  this.partials = partials || {};
	  this.decorators = decorators || {};

	  _helpers.registerDefaultHelpers(this);
	  _decorators.registerDefaultDecorators(this);
	}

	HandlebarsEnvironment.prototype = {
	  constructor: HandlebarsEnvironment,

	  logger: _logger2['default'],
	  log: _logger2['default'].log,

	  registerHelper: function registerHelper(name, fn) {
	    if (_utils.toString.call(name) === objectType) {
	      if (fn) {
	        throw new _exception2['default']('Arg not supported with multiple helpers');
	      }
	      _utils.extend(this.helpers, name);
	    } else {
	      this.helpers[name] = fn;
	    }
	  },
	  unregisterHelper: function unregisterHelper(name) {
	    delete this.helpers[name];
	  },

	  registerPartial: function registerPartial(name, partial) {
	    if (_utils.toString.call(name) === objectType) {
	      _utils.extend(this.partials, name);
	    } else {
	      if (typeof partial === 'undefined') {
	        throw new _exception2['default']('Attempting to register a partial called "' + name + '" as undefined');
	      }
	      this.partials[name] = partial;
	    }
	  },
	  unregisterPartial: function unregisterPartial(name) {
	    delete this.partials[name];
	  },

	  registerDecorator: function registerDecorator(name, fn) {
	    if (_utils.toString.call(name) === objectType) {
	      if (fn) {
	        throw new _exception2['default']('Arg not supported with multiple decorators');
	      }
	      _utils.extend(this.decorators, name);
	    } else {
	      this.decorators[name] = fn;
	    }
	  },
	  unregisterDecorator: function unregisterDecorator(name) {
	    delete this.decorators[name];
	  },
	  /**
	   * Reset the memory of illegal property accesses that have already been logged.
	   * @deprecated should only be used in handlebars test-cases
	   */
	  resetLoggedPropertyAccesses: function resetLoggedPropertyAccesses() {
	    _internalProtoAccess.resetLoggedProperties();
	  }
	};

	var log = _logger2['default'].log;

	exports.log = log;
	exports.createFrame = _utils.createFrame;
	exports.logger = _logger2['default'];

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.extend = extend;
	exports.indexOf = indexOf;
	exports.escapeExpression = escapeExpression;
	exports.isEmpty = isEmpty;
	exports.createFrame = createFrame;
	exports.blockParams = blockParams;
	exports.appendContextPath = appendContextPath;
	var escape = {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '"': '&quot;',
	  "'": '&#x27;',
	  '`': '&#x60;',
	  '=': '&#x3D;'
	};

	var badChars = /[&<>"'`=]/g,
	    possible = /[&<>"'`=]/;

	function escapeChar(chr) {
	  return escape[chr];
	}

	function extend(obj /* , ...source */) {
	  for (var i = 1; i < arguments.length; i++) {
	    for (var key in arguments[i]) {
	      if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
	        obj[key] = arguments[i][key];
	      }
	    }
	  }

	  return obj;
	}

	var toString = Object.prototype.toString;

	exports.toString = toString;
	// Sourced from lodash
	// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
	/* eslint-disable func-style */
	var isFunction = function isFunction(value) {
	  return typeof value === 'function';
	};
	// fallback for older versions of Chrome and Safari
	/* istanbul ignore next */
	if (isFunction(/x/)) {
	  exports.isFunction = isFunction = function (value) {
	    return typeof value === 'function' && toString.call(value) === '[object Function]';
	  };
	}
	exports.isFunction = isFunction;

	/* eslint-enable func-style */

	/* istanbul ignore next */
	var isArray = Array.isArray || function (value) {
	  return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
	};

	exports.isArray = isArray;
	// Older IE versions do not directly support indexOf so we must implement our own, sadly.

	function indexOf(array, value) {
	  for (var i = 0, len = array.length; i < len; i++) {
	    if (array[i] === value) {
	      return i;
	    }
	  }
	  return -1;
	}

	function escapeExpression(string) {
	  if (typeof string !== 'string') {
	    // don't escape SafeStrings, since they're already safe
	    if (string && string.toHTML) {
	      return string.toHTML();
	    } else if (string == null) {
	      return '';
	    } else if (!string) {
	      return string + '';
	    }

	    // Force a string conversion as this will be done by the append regardless and
	    // the regex test will do this transparently behind the scenes, causing issues if
	    // an object's to string has escaped characters in it.
	    string = '' + string;
	  }

	  if (!possible.test(string)) {
	    return string;
	  }
	  return string.replace(badChars, escapeChar);
	}

	function isEmpty(value) {
	  if (!value && value !== 0) {
	    return true;
	  } else if (isArray(value) && value.length === 0) {
	    return true;
	  } else {
	    return false;
	  }
	}

	function createFrame(object) {
	  var frame = extend({}, object);
	  frame._parent = object;
	  return frame;
	}

	function blockParams(params, ids) {
	  params.path = ids;
	  return params;
	}

	function appendContextPath(contextPath, id) {
	  return (contextPath ? contextPath + '.' : '') + id;
	}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _Object$defineProperty = __webpack_require__(6)['default'];

	exports.__esModule = true;
	var errorProps = ['description', 'fileName', 'lineNumber', 'endLineNumber', 'message', 'name', 'number', 'stack'];

	function Exception(message, node) {
	  var loc = node && node.loc,
	      line = undefined,
	      endLineNumber = undefined,
	      column = undefined,
	      endColumn = undefined;

	  if (loc) {
	    line = loc.start.line;
	    endLineNumber = loc.end.line;
	    column = loc.start.column;
	    endColumn = loc.end.column;

	    message += ' - ' + line + ':' + column;
	  }

	  var tmp = Error.prototype.constructor.call(this, message);

	  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
	  for (var idx = 0; idx < errorProps.length; idx++) {
	    this[errorProps[idx]] = tmp[errorProps[idx]];
	  }

	  /* istanbul ignore else */
	  if (Error.captureStackTrace) {
	    Error.captureStackTrace(this, Exception);
	  }

	  try {
	    if (loc) {
	      this.lineNumber = line;
	      this.endLineNumber = endLineNumber;

	      // Work around issue under safari where we can't directly set the column value
	      /* istanbul ignore next */
	      if (_Object$defineProperty) {
	        Object.defineProperty(this, 'column', {
	          value: column,
	          enumerable: true
	        });
	        Object.defineProperty(this, 'endColumn', {
	          value: endColumn,
	          enumerable: true
	        });
	      } else {
	        this.column = column;
	        this.endColumn = endColumn;
	      }
	    }
	  } catch (nop) {
	    /* Ignore if the browser is very particular */
	  }
	}

	Exception.prototype = new Error();

	exports['default'] = Exception;
	module.exports = exports['default'];

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(7), __esModule: true };

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(8);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(2)['default'];

	exports.__esModule = true;
	exports.registerDefaultHelpers = registerDefaultHelpers;
	exports.moveHelperToHooks = moveHelperToHooks;

	var _helpersBlockHelperMissing = __webpack_require__(10);

	var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);

	var _helpersEach = __webpack_require__(11);

	var _helpersEach2 = _interopRequireDefault(_helpersEach);

	var _helpersHelperMissing = __webpack_require__(24);

	var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);

	var _helpersIf = __webpack_require__(25);

	var _helpersIf2 = _interopRequireDefault(_helpersIf);

	var _helpersLog = __webpack_require__(26);

	var _helpersLog2 = _interopRequireDefault(_helpersLog);

	var _helpersLookup = __webpack_require__(27);

	var _helpersLookup2 = _interopRequireDefault(_helpersLookup);

	var _helpersWith = __webpack_require__(28);

	var _helpersWith2 = _interopRequireDefault(_helpersWith);

	function registerDefaultHelpers(instance) {
	  _helpersBlockHelperMissing2['default'](instance);
	  _helpersEach2['default'](instance);
	  _helpersHelperMissing2['default'](instance);
	  _helpersIf2['default'](instance);
	  _helpersLog2['default'](instance);
	  _helpersLookup2['default'](instance);
	  _helpersWith2['default'](instance);
	}

	function moveHelperToHooks(instance, helperName, keepHelper) {
	  if (instance.helpers[helperName]) {
	    instance.hooks[helperName] = instance.helpers[helperName];
	    if (!keepHelper) {
	      delete instance.helpers[helperName];
	    }
	  }
	}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(4);

	exports['default'] = function (instance) {
	  instance.registerHelper('blockHelperMissing', function (context, options) {
	    var inverse = options.inverse,
	        fn = options.fn;

	    if (context === true) {
	      return fn(this);
	    } else if (context === false || context == null) {
	      return inverse(this);
	    } else if (_utils.isArray(context)) {
	      if (context.length > 0) {
	        if (options.ids) {
	          options.ids = [options.name];
	        }

	        return instance.helpers.each(context, options);
	      } else {
	        return inverse(this);
	      }
	    } else {
	      if (options.data && options.ids) {
	        var data = _utils.createFrame(options.data);
	        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
	        options = { data: data };
	      }

	      return fn(context, options);
	    }
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var _Object$keys = __webpack_require__(12)['default'];

	var _interopRequireDefault = __webpack_require__(2)['default'];

	exports.__esModule = true;

	var _utils = __webpack_require__(4);

	var _exception = __webpack_require__(5);

	var _exception2 = _interopRequireDefault(_exception);

	exports['default'] = function (instance) {
	  instance.registerHelper('each', function (context, options) {
	    if (!options) {
	      throw new _exception2['default']('Must pass iterator to #each');
	    }

	    var fn = options.fn,
	        inverse = options.inverse,
	        i = 0,
	        ret = '',
	        data = undefined,
	        contextPath = undefined;

	    if (options.data && options.ids) {
	      contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
	    }

	    if (_utils.isFunction(context)) {
	      context = context.call(this);
	    }

	    if (options.data) {
	      data = _utils.createFrame(options.data);
	    }

	    function execIteration(field, index, last) {
	      if (data) {
	        data.key = field;
	        data.index = index;
	        data.first = index === 0;
	        data.last = !!last;

	        if (contextPath) {
	          data.contextPath = contextPath + field;
	        }
	      }

	      ret = ret + fn(context[field], {
	        data: data,
	        blockParams: _utils.blockParams([context[field], field], [contextPath + field, null])
	      });
	    }

	    if (context && typeof context === 'object') {
	      if (_utils.isArray(context)) {
	        for (var j = context.length; i < j; i++) {
	          if (i in context) {
	            execIteration(i, i, i === context.length - 1);
	          }
	        }
	      } else if (global.Symbol && context[global.Symbol.iterator]) {
	        var newContext = [];
	        var iterator = context[global.Symbol.iterator]();
	        for (var it = iterator.next(); !it.done; it = iterator.next()) {
	          newContext.push(it.value);
	        }
	        context = newContext;
	        for (var j = context.length; i < j; i++) {
	          execIteration(i, i, i === context.length - 1);
	        }
	      } else {
	        (function () {
	          var priorKey = undefined;

	          _Object$keys(context).forEach(function (key) {
	            // We're running the iterations one step out of sync so we can detect
	            // the last iteration without have to scan the object twice and create
	            // an itermediate keys array.
	            if (priorKey !== undefined) {
	              execIteration(priorKey, i - 1);
	            }
	            priorKey = key;
	            i++;
	          });
	          if (priorKey !== undefined) {
	            execIteration(priorKey, i - 1, true);
	          }
	        })();
	      }
	    }

	    if (i === 0) {
	      ret = inverse(this);
	    }

	    return ret;
	  });
	};

	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(13), __esModule: true };

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(14);
	module.exports = __webpack_require__(20).Object.keys;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(15);

	__webpack_require__(17)('keys', function($keys){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(16);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(18)
	  , core    = __webpack_require__(20)
	  , fails   = __webpack_require__(23);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(19)
	  , core      = __webpack_require__(20)
	  , ctx       = __webpack_require__(21)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(22);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(2)['default'];

	exports.__esModule = true;

	var _exception = __webpack_require__(5);

	var _exception2 = _interopRequireDefault(_exception);

	exports['default'] = function (instance) {
	  instance.registerHelper('helperMissing', function () /* [args, ]options */{
	    if (arguments.length === 1) {
	      // A missing field in a {{foo}} construct.
	      return undefined;
	    } else {
	      // Someone is actually trying to call something, blow up.
	      throw new _exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
	    }
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(2)['default'];

	exports.__esModule = true;

	var _utils = __webpack_require__(4);

	var _exception = __webpack_require__(5);

	var _exception2 = _interopRequireDefault(_exception);

	exports['default'] = function (instance) {
	  instance.registerHelper('if', function (conditional, options) {
	    if (arguments.length != 2) {
	      throw new _exception2['default']('#if requires exactly one argument');
	    }
	    if (_utils.isFunction(conditional)) {
	      conditional = conditional.call(this);
	    }

	    // Default behavior is to render the positive path if the value is truthy and not empty.
	    // The `includeZero` option may be set to treat the condtional as purely not empty based on the
	    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
	    if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {
	      return options.inverse(this);
	    } else {
	      return options.fn(this);
	    }
	  });

	  instance.registerHelper('unless', function (conditional, options) {
	    if (arguments.length != 2) {
	      throw new _exception2['default']('#unless requires exactly one argument');
	    }
	    return instance.helpers['if'].call(this, conditional, {
	      fn: options.inverse,
	      inverse: options.fn,
	      hash: options.hash
	    });
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;

	exports['default'] = function (instance) {
	  instance.registerHelper('log', function () /* message, options */{
	    var args = [undefined],
	        options = arguments[arguments.length - 1];
	    for (var i = 0; i < arguments.length - 1; i++) {
	      args.push(arguments[i]);
	    }

	    var level = 1;
	    if (options.hash.level != null) {
	      level = options.hash.level;
	    } else if (options.data && options.data.level != null) {
	      level = options.data.level;
	    }
	    args[0] = level;

	    instance.log.apply(instance, args);
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 27 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;

	exports['default'] = function (instance) {
	  instance.registerHelper('lookup', function (obj, field, options) {
	    if (!obj) {
	      // Note for 5.0: Change to "obj == null" in 5.0
	      return obj;
	    }
	    return options.lookupProperty(obj, field);
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(2)['default'];

	exports.__esModule = true;

	var _utils = __webpack_require__(4);

	var _exception = __webpack_require__(5);

	var _exception2 = _interopRequireDefault(_exception);

	exports['default'] = function (instance) {
	  instance.registerHelper('with', function (context, options) {
	    if (arguments.length != 2) {
	      throw new _exception2['default']('#with requires exactly one argument');
	    }
	    if (_utils.isFunction(context)) {
	      context = context.call(this);
	    }

	    var fn = options.fn;

	    if (!_utils.isEmpty(context)) {
	      var data = options.data;
	      if (options.data && options.ids) {
	        data = _utils.createFrame(options.data);
	        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
	      }

	      return fn(context, {
	        data: data,
	        blockParams: _utils.blockParams([context], [data && data.contextPath])
	      });
	    } else {
	      return options.inverse(this);
	    }
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(2)['default'];

	exports.__esModule = true;
	exports.registerDefaultDecorators = registerDefaultDecorators;

	var _decoratorsInline = __webpack_require__(30);

	var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);

	function registerDefaultDecorators(instance) {
	  _decoratorsInline2['default'](instance);
	}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(4);

	exports['default'] = function (instance) {
	  instance.registerDecorator('inline', function (fn, props, container, options) {
	    var ret = fn;
	    if (!props.partials) {
	      props.partials = {};
	      ret = function (context, options) {
	        // Create a new partials stack frame prior to exec.
	        var original = container.partials;
	        container.partials = _utils.extend({}, original, props.partials);
	        var ret = fn(context, options);
	        container.partials = original;
	        return ret;
	      };
	    }

	    props.partials[options.args[0]] = options.fn;

	    return ret;
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(4);

	var logger = {
	  methodMap: ['debug', 'info', 'warn', 'error'],
	  level: 'info',

	  // Maps a given level value to the `methodMap` indexes above.
	  lookupLevel: function lookupLevel(level) {
	    if (typeof level === 'string') {
	      var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
	      if (levelMap >= 0) {
	        level = levelMap;
	      } else {
	        level = parseInt(level, 10);
	      }
	    }

	    return level;
	  },

	  // Can be overridden in the host environment
	  log: function log(level) {
	    level = logger.lookupLevel(level);

	    if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {
	      var method = logger.methodMap[level];
	      // eslint-disable-next-line no-console
	      if (!console[method]) {
	        method = 'log';
	      }

	      for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        message[_key - 1] = arguments[_key];
	      }

	      console[method].apply(console, message); // eslint-disable-line no-console
	    }
	  }
	};

	exports['default'] = logger;
	module.exports = exports['default'];

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _Object$create = __webpack_require__(33)['default'];

	var _Object$keys = __webpack_require__(12)['default'];

	var _interopRequireWildcard = __webpack_require__(1)['default'];

	exports.__esModule = true;
	exports.createProtoAccessControl = createProtoAccessControl;
	exports.resultIsAllowed = resultIsAllowed;
	exports.resetLoggedProperties = resetLoggedProperties;

	var _createNewLookupObject = __webpack_require__(35);

	var _logger = __webpack_require__(31);

	var logger = _interopRequireWildcard(_logger);

	var loggedProperties = _Object$create(null);

	function createProtoAccessControl(runtimeOptions) {
	  var defaultMethodWhiteList = _Object$create(null);
	  defaultMethodWhiteList['constructor'] = false;
	  defaultMethodWhiteList['__defineGetter__'] = false;
	  defaultMethodWhiteList['__defineSetter__'] = false;
	  defaultMethodWhiteList['__lookupGetter__'] = false;

	  var defaultPropertyWhiteList = _Object$create(null);
	  // eslint-disable-next-line no-proto
	  defaultPropertyWhiteList['__proto__'] = false;

	  return {
	    properties: {
	      whitelist: _createNewLookupObject.createNewLookupObject(defaultPropertyWhiteList, runtimeOptions.allowedProtoProperties),
	      defaultValue: runtimeOptions.allowProtoPropertiesByDefault
	    },
	    methods: {
	      whitelist: _createNewLookupObject.createNewLookupObject(defaultMethodWhiteList, runtimeOptions.allowedProtoMethods),
	      defaultValue: runtimeOptions.allowProtoMethodsByDefault
	    }
	  };
	}

	function resultIsAllowed(result, protoAccessControl, propertyName) {
	  if (typeof result === 'function') {
	    return checkWhiteList(protoAccessControl.methods, propertyName);
	  } else {
	    return checkWhiteList(protoAccessControl.properties, propertyName);
	  }
	}

	function checkWhiteList(protoAccessControlForType, propertyName) {
	  if (protoAccessControlForType.whitelist[propertyName] !== undefined) {
	    return protoAccessControlForType.whitelist[propertyName] === true;
	  }
	  if (protoAccessControlForType.defaultValue !== undefined) {
	    return protoAccessControlForType.defaultValue;
	  }
	  logUnexpecedPropertyAccessOnce(propertyName);
	  return false;
	}

	function logUnexpecedPropertyAccessOnce(propertyName) {
	  if (loggedProperties[propertyName] !== true) {
	    loggedProperties[propertyName] = true;
	    logger.log('error', 'Handlebars: Access has been denied to resolve the property "' + propertyName + '" because it is not an "own property" of its parent.\n' + 'You can add a runtime option to disable the check or this warning:\n' + 'See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details');
	  }
	}

	function resetLoggedProperties() {
	  _Object$keys(loggedProperties).forEach(function (propertyName) {
	    delete loggedProperties[propertyName];
	  });
	}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(34), __esModule: true };

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(8);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _Object$create = __webpack_require__(33)['default'];

	exports.__esModule = true;
	exports.createNewLookupObject = createNewLookupObject;

	var _utils = __webpack_require__(4);

	/**
	 * Create a new object with "null"-prototype to avoid truthy results on prototype properties.
	 * The resulting object can be used with "object[property]" to check if a property exists
	 * @param {...object} sources a varargs parameter of source objects that will be merged
	 * @returns {object}
	 */

	function createNewLookupObject() {
	  for (var _len = arguments.length, sources = Array(_len), _key = 0; _key < _len; _key++) {
	    sources[_key] = arguments[_key];
	  }

	  return _utils.extend.apply(undefined, [_Object$create(null)].concat(sources));
	}

/***/ }),
/* 36 */
/***/ (function(module, exports) {

	// Build out our basic SafeString type
	'use strict';

	exports.__esModule = true;
	function SafeString(string) {
	  this.string = string;
	}

	SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
	  return '' + this.string;
	};

	exports['default'] = SafeString;
	module.exports = exports['default'];

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _Object$seal = __webpack_require__(38)['default'];

	var _Object$keys = __webpack_require__(12)['default'];

	var _interopRequireWildcard = __webpack_require__(1)['default'];

	var _interopRequireDefault = __webpack_require__(2)['default'];

	exports.__esModule = true;
	exports.checkRevision = checkRevision;
	exports.template = template;
	exports.wrapProgram = wrapProgram;
	exports.resolvePartial = resolvePartial;
	exports.invokePartial = invokePartial;
	exports.noop = noop;

	var _utils = __webpack_require__(4);

	var Utils = _interopRequireWildcard(_utils);

	var _exception = __webpack_require__(5);

	var _exception2 = _interopRequireDefault(_exception);

	var _base = __webpack_require__(3);

	var _helpers = __webpack_require__(9);

	var _internalWrapHelper = __webpack_require__(42);

	var _internalProtoAccess = __webpack_require__(32);

	function checkRevision(compilerInfo) {
	  var compilerRevision = compilerInfo && compilerInfo[0] || 1,
	      currentRevision = _base.COMPILER_REVISION;

	  if (compilerRevision >= _base.LAST_COMPATIBLE_COMPILER_REVISION && compilerRevision <= _base.COMPILER_REVISION) {
	    return;
	  }

	  if (compilerRevision < _base.LAST_COMPATIBLE_COMPILER_REVISION) {
	    var runtimeVersions = _base.REVISION_CHANGES[currentRevision],
	        compilerVersions = _base.REVISION_CHANGES[compilerRevision];
	    throw new _exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
	  } else {
	    // Use the embedded version info since the runtime doesn't know about this revision yet
	    throw new _exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
	  }
	}

	function template(templateSpec, env) {
	  /* istanbul ignore next */
	  if (!env) {
	    throw new _exception2['default']('No environment passed to template');
	  }
	  if (!templateSpec || !templateSpec.main) {
	    throw new _exception2['default']('Unknown template object: ' + typeof templateSpec);
	  }

	  templateSpec.main.decorator = templateSpec.main_d;

	  // Note: Using env.VM references rather than local var references throughout this section to allow
	  // for external users to override these as pseudo-supported APIs.
	  env.VM.checkRevision(templateSpec.compiler);

	  // backwards compatibility for precompiled templates with compiler-version 7 (<4.3.0)
	  var templateWasPrecompiledWithCompilerV7 = templateSpec.compiler && templateSpec.compiler[0] === 7;

	  function invokePartialWrapper(partial, context, options) {
	    if (options.hash) {
	      context = Utils.extend({}, context, options.hash);
	      if (options.ids) {
	        options.ids[0] = true;
	      }
	    }
	    partial = env.VM.resolvePartial.call(this, partial, context, options);

	    var extendedOptions = Utils.extend({}, options, {
	      hooks: this.hooks,
	      protoAccessControl: this.protoAccessControl
	    });

	    var result = env.VM.invokePartial.call(this, partial, context, extendedOptions);

	    if (result == null && env.compile) {
	      options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
	      result = options.partials[options.name](context, extendedOptions);
	    }
	    if (result != null) {
	      if (options.indent) {
	        var lines = result.split('\n');
	        for (var i = 0, l = lines.length; i < l; i++) {
	          if (!lines[i] && i + 1 === l) {
	            break;
	          }

	          lines[i] = options.indent + lines[i];
	        }
	        result = lines.join('\n');
	      }
	      return result;
	    } else {
	      throw new _exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
	    }
	  }

	  // Just add water
	  var container = {
	    strict: function strict(obj, name, loc) {
	      if (!obj || !(name in obj)) {
	        throw new _exception2['default']('"' + name + '" not defined in ' + obj, {
	          loc: loc
	        });
	      }
	      return container.lookupProperty(obj, name);
	    },
	    lookupProperty: function lookupProperty(parent, propertyName) {
	      var result = parent[propertyName];
	      if (result == null) {
	        return result;
	      }
	      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
	        return result;
	      }

	      if (_internalProtoAccess.resultIsAllowed(result, container.protoAccessControl, propertyName)) {
	        return result;
	      }
	      return undefined;
	    },
	    lookup: function lookup(depths, name) {
	      var len = depths.length;
	      for (var i = 0; i < len; i++) {
	        var result = depths[i] && container.lookupProperty(depths[i], name);
	        if (result != null) {
	          return depths[i][name];
	        }
	      }
	    },
	    lambda: function lambda(current, context) {
	      return typeof current === 'function' ? current.call(context) : current;
	    },

	    escapeExpression: Utils.escapeExpression,
	    invokePartial: invokePartialWrapper,

	    fn: function fn(i) {
	      var ret = templateSpec[i];
	      ret.decorator = templateSpec[i + '_d'];
	      return ret;
	    },

	    programs: [],
	    program: function program(i, data, declaredBlockParams, blockParams, depths) {
	      var programWrapper = this.programs[i],
	          fn = this.fn(i);
	      if (data || depths || blockParams || declaredBlockParams) {
	        programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
	      } else if (!programWrapper) {
	        programWrapper = this.programs[i] = wrapProgram(this, i, fn);
	      }
	      return programWrapper;
	    },

	    data: function data(value, depth) {
	      while (value && depth--) {
	        value = value._parent;
	      }
	      return value;
	    },
	    mergeIfNeeded: function mergeIfNeeded(param, common) {
	      var obj = param || common;

	      if (param && common && param !== common) {
	        obj = Utils.extend({}, common, param);
	      }

	      return obj;
	    },
	    // An empty object to use as replacement for null-contexts
	    nullContext: _Object$seal({}),

	    noop: env.VM.noop,
	    compilerInfo: templateSpec.compiler
	  };

	  function ret(context) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    var data = options.data;

	    ret._setup(options);
	    if (!options.partial && templateSpec.useData) {
	      data = initData(context, data);
	    }
	    var depths = undefined,
	        blockParams = templateSpec.useBlockParams ? [] : undefined;
	    if (templateSpec.useDepths) {
	      if (options.depths) {
	        depths = context != options.depths[0] ? [context].concat(options.depths) : options.depths;
	      } else {
	        depths = [context];
	      }
	    }

	    function main(context /*, options*/) {
	      return '' + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
	    }

	    main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
	    return main(context, options);
	  }

	  ret.isTop = true;

	  ret._setup = function (options) {
	    if (!options.partial) {
	      var mergedHelpers = Utils.extend({}, env.helpers, options.helpers);
	      wrapHelpersToPassLookupProperty(mergedHelpers, container);
	      container.helpers = mergedHelpers;

	      if (templateSpec.usePartial) {
	        // Use mergeIfNeeded here to prevent compiling global partials multiple times
	        container.partials = container.mergeIfNeeded(options.partials, env.partials);
	      }
	      if (templateSpec.usePartial || templateSpec.useDecorators) {
	        container.decorators = Utils.extend({}, env.decorators, options.decorators);
	      }

	      container.hooks = {};
	      container.protoAccessControl = _internalProtoAccess.createProtoAccessControl(options);

	      var keepHelperInHelpers = options.allowCallsToHelperMissing || templateWasPrecompiledWithCompilerV7;
	      _helpers.moveHelperToHooks(container, 'helperMissing', keepHelperInHelpers);
	      _helpers.moveHelperToHooks(container, 'blockHelperMissing', keepHelperInHelpers);
	    } else {
	      container.protoAccessControl = options.protoAccessControl; // internal option
	      container.helpers = options.helpers;
	      container.partials = options.partials;
	      container.decorators = options.decorators;
	      container.hooks = options.hooks;
	    }
	  };

	  ret._child = function (i, data, blockParams, depths) {
	    if (templateSpec.useBlockParams && !blockParams) {
	      throw new _exception2['default']('must pass block params');
	    }
	    if (templateSpec.useDepths && !depths) {
	      throw new _exception2['default']('must pass parent depths');
	    }

	    return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
	  };
	  return ret;
	}

	function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
	  function prog(context) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    var currentDepths = depths;
	    if (depths && context != depths[0] && !(context === container.nullContext && depths[0] === null)) {
	      currentDepths = [context].concat(depths);
	    }

	    return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);
	  }

	  prog = executeDecorators(fn, prog, container, depths, data, blockParams);

	  prog.program = i;
	  prog.depth = depths ? depths.length : 0;
	  prog.blockParams = declaredBlockParams || 0;
	  return prog;
	}

	/**
	 * This is currently part of the official API, therefore implementation details should not be changed.
	 */

	function resolvePartial(partial, context, options) {
	  if (!partial) {
	    if (options.name === '@partial-block') {
	      partial = options.data['partial-block'];
	    } else {
	      partial = options.partials[options.name];
	    }
	  } else if (!partial.call && !options.name) {
	    // This is a dynamic partial that returned a string
	    options.name = partial;
	    partial = options.partials[partial];
	  }
	  return partial;
	}

	function invokePartial(partial, context, options) {
	  // Use the current closure context to save the partial-block if this partial
	  var currentPartialBlock = options.data && options.data['partial-block'];
	  options.partial = true;
	  if (options.ids) {
	    options.data.contextPath = options.ids[0] || options.data.contextPath;
	  }

	  var partialBlock = undefined;
	  if (options.fn && options.fn !== noop) {
	    (function () {
	      options.data = _base.createFrame(options.data);
	      // Wrapper function to get access to currentPartialBlock from the closure
	      var fn = options.fn;
	      partialBlock = options.data['partial-block'] = function partialBlockWrapper(context) {
	        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	        // Restore the partial-block from the closure for the execution of the block
	        // i.e. the part inside the block of the partial call.
	        options.data = _base.createFrame(options.data);
	        options.data['partial-block'] = currentPartialBlock;
	        return fn(context, options);
	      };
	      if (fn.partials) {
	        options.partials = Utils.extend({}, options.partials, fn.partials);
	      }
	    })();
	  }

	  if (partial === undefined && partialBlock) {
	    partial = partialBlock;
	  }

	  if (partial === undefined) {
	    throw new _exception2['default']('The partial ' + options.name + ' could not be found');
	  } else if (partial instanceof Function) {
	    return partial(context, options);
	  }
	}

	function noop() {
	  return '';
	}

	function initData(context, data) {
	  if (!data || !('root' in data)) {
	    data = data ? _base.createFrame(data) : {};
	    data.root = context;
	  }
	  return data;
	}

	function executeDecorators(fn, prog, container, depths, data, blockParams) {
	  if (fn.decorator) {
	    var props = {};
	    prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
	    Utils.extend(prog, props);
	  }
	  return prog;
	}

	function wrapHelpersToPassLookupProperty(mergedHelpers, container) {
	  _Object$keys(mergedHelpers).forEach(function (helperName) {
	    var helper = mergedHelpers[helperName];
	    mergedHelpers[helperName] = passLookupPropertyOption(helper, container);
	  });
	}

	function passLookupPropertyOption(helper, container) {
	  var lookupProperty = container.lookupProperty;
	  return _internalWrapHelper.wrapHelper(helper, function (options) {
	    return Utils.extend({ lookupProperty: lookupProperty }, options);
	  });
	}

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(39), __esModule: true };

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(40);
	module.exports = __webpack_require__(20).Object.seal;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.17 Object.seal(O)
	var isObject = __webpack_require__(41);

	__webpack_require__(17)('seal', function($seal){
	  return function seal(it){
	    return $seal && isObject(it) ? $seal(it) : it;
	  };
	});

/***/ }),
/* 41 */
/***/ (function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ }),
/* 42 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.wrapHelper = wrapHelper;

	function wrapHelper(helper, transformOptionsFn) {
	  if (typeof helper !== 'function') {
	    // This should not happen, but apparently it does in https://github.com/wycats/handlebars.js/issues/1639
	    // We try to make the wrapper least-invasive by not wrapping it, if the helper is not a function.
	    return helper;
	  }
	  var wrapper = function wrapper() /* dynamic arguments */{
	    var options = arguments[arguments.length - 1];
	    arguments[arguments.length - 1] = transformOptionsFn(options);
	    return helper.apply(this, arguments);
	  };
	  return wrapper;
	}

/***/ }),
/* 43 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	exports.__esModule = true;

	exports['default'] = function (Handlebars) {
	  /* istanbul ignore next */
	  var root = typeof global !== 'undefined' ? global : window,
	      $Handlebars = root.Handlebars;
	  /* istanbul ignore next */
	  Handlebars.noConflict = function () {
	    if (root.Handlebars === Handlebars) {
	      root.Handlebars = $Handlebars;
	    }
	    return Handlebars;
	  };
	};

	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ })
/******/ ])
});
;
(function (window, Handlebars, undefined ) {
/**
* Transforms flashVars object into a string for Url or Flashvars string.
*
* @method flashVarsToUrl
* @param {Object} flashVarsObject A flashvars object
* @param {String} paramName The name parameter to add to url
* @return {String} Returns flashVars string like: &foo=bar or &param[foo]=bar
*/
var flashVarsToUrl = function( flashVarsObject, paramName ) {
	 var params = '';

	 var paramPrefix = (paramName) ? paramName + '[' : '';
	 var paramSuffix = (paramName) ? ']' : '';

	 for( var i in flashVarsObject ){
		 // check for object representation of plugin config:
		 if( typeof flashVarsObject[i] == 'object' ){
			 for( var j in flashVarsObject[i] ){
				 params+= '&' + paramPrefix + encodeURIComponent( i ) +
				 	'.' + encodeURIComponent( j ) + paramSuffix + 
				 	'=' + encodeURIComponent( flashVarsObject[i][j] );
			 }
		 } else {
			 params+= '&' + paramPrefix + encodeURIComponent( i ) + paramSuffix + '=' + encodeURIComponent( flashVarsObject[i] );
		 }
	 }
	 return params;
};

// Setup handlebars helpers
Handlebars.registerHelper('flashVarsUrl', function(flashVars) {
	return flashVarsToUrl(flashVars, 'flashvars');
});
Handlebars.registerHelper('flashVarsString', function(flashVars) {
	return flashVarsToUrl(flashVars);
});
Handlebars.registerHelper('elAttributes', function( attributes ) {
	var str = '';
	for( var i in attributes ) {
		str += ' ' + i + '="' + attributes[i] + '"';
	}
	return str;
});

// Include kaltura links
Handlebars.registerHelper('kalturaLinks', function() {
	if( ! this.includeKalturaLinks ) {
		return '';
	}
	var template = Handlebars.templates['templates/kaltura_links.hbs'];
	return template();
});

Handlebars.registerHelper('seoMetadata', function() {
	var template = Handlebars.templates['templates/seo_metadata.hbs'];
	return template(this);
});

})(this, this.Handlebars);
this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

this["Handlebars"]["templates"]["templates/auto.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"playerId") || (depth0 != null ? lookupProperty(depth0,"playerId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"playerId","hash":{},"data":data,"loc":{"start":{"line":1,"column":35},"end":{"line":1,"column":47}}}) : helper)))
    + "\""
    + ((stack1 = (lookupProperty(helpers,"elAttributes")||(depth0 && lookupProperty(depth0,"elAttributes"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"attributes") : depth0),{"name":"elAttributes","hash":{},"data":data,"loc":{"start":{"line":1,"column":48},"end":{"line":1,"column":77}}})) != null ? stack1 : "")
    + ">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"seoMetadata") || (depth0 != null ? lookupProperty(depth0,"seoMetadata") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"seoMetadata","hash":{},"data":data,"loc":{"start":{"line":1,"column":78},"end":{"line":1,"column":95}}}) : helper))) != null ? stack1 : "")
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"kalturaLinks") || (depth0 != null ? lookupProperty(depth0,"kalturaLinks") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"kalturaLinks","hash":{},"data":data,"loc":{"start":{"line":1,"column":95},"end":{"line":1,"column":113}}}) : helper))) != null ? stack1 : "")
    + "</div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "&entry_id="
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"entryId") || (depth0 != null ? lookupProperty(depth0,"entryId") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"entryId","hash":{},"data":data,"loc":{"start":{"line":2,"column":73},"end":{"line":2,"column":84}}}) : helper)));
},"5":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "&wid="
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"widgetId") || (depth0 != null ? lookupProperty(depth0,"widgetId") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"widgetId","hash":{},"data":data,"loc":{"start":{"line":2,"column":112},"end":{"line":2,"column":124}}}) : helper)));
},"7":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "&cache_st="
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"cacheSt") || (depth0 != null ? lookupProperty(depth0,"cacheSt") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"cacheSt","hash":{},"data":data,"loc":{"start":{"line":2,"column":178},"end":{"line":2,"column":189}}}) : helper)));
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"includeSeoMetadata") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":2,"column":7}}})) != null ? stack1 : "")
    + "<script src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"scriptUrl") || (depth0 != null ? lookupProperty(depth0,"scriptUrl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"scriptUrl","hash":{},"data":data,"loc":{"start":{"line":2,"column":20},"end":{"line":2,"column":33}}}) : helper)))
    + "?autoembed=true"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"entryId") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":48},"end":{"line":2,"column":91}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"widgetId") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":91},"end":{"line":2,"column":131}}})) != null ? stack1 : "")
    + "&playerId="
    + alias4(((helper = (helper = lookupProperty(helpers,"playerId") || (depth0 != null ? lookupProperty(depth0,"playerId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"playerId","hash":{},"data":data,"loc":{"start":{"line":2,"column":141},"end":{"line":2,"column":153}}}) : helper)))
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"cacheSt") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":153},"end":{"line":2,"column":196}}})) != null ? stack1 : "")
    + "&width="
    + alias4(((helper = (helper = lookupProperty(helpers,"width") || (depth0 != null ? lookupProperty(depth0,"width") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"width","hash":{},"data":data,"loc":{"start":{"line":2,"column":203},"end":{"line":2,"column":212}}}) : helper)))
    + "&height="
    + alias4(((helper = (helper = lookupProperty(helpers,"height") || (depth0 != null ? lookupProperty(depth0,"height") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"height","hash":{},"data":data,"loc":{"start":{"line":2,"column":220},"end":{"line":2,"column":230}}}) : helper)))
    + ((stack1 = (lookupProperty(helpers,"flashVarsUrl")||(depth0 && lookupProperty(depth0,"flashVarsUrl"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"flashVars") : depth0),{"name":"flashVarsUrl","hash":{},"data":data,"loc":{"start":{"line":2,"column":230},"end":{"line":2,"column":258}}})) != null ? stack1 : "")
    + "\"></script>";
},"useData":true});

this["Handlebars"]["templates"]["templates/dynamic.hbs"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<script src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"scriptUrl") || (depth0 != null ? lookupProperty(depth0,"scriptUrl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"scriptUrl","hash":{},"data":data,"loc":{"start":{"line":1,"column":13},"end":{"line":1,"column":26}}}) : helper)))
    + "\"></script>\n<div id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"playerId") || (depth0 != null ? lookupProperty(depth0,"playerId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"playerId","hash":{},"data":data,"loc":{"start":{"line":2,"column":9},"end":{"line":2,"column":21}}}) : helper)))
    + "\""
    + ((stack1 = (lookupProperty(helpers,"elAttributes")||(depth0 && lookupProperty(depth0,"elAttributes"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"attributes") : depth0),{"name":"elAttributes","hash":{},"data":data,"loc":{"start":{"line":2,"column":22},"end":{"line":2,"column":51}}})) != null ? stack1 : "")
    + ">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"seoMetadata") || (depth0 != null ? lookupProperty(depth0,"seoMetadata") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"seoMetadata","hash":{},"data":data,"loc":{"start":{"line":2,"column":52},"end":{"line":2,"column":69}}}) : helper))) != null ? stack1 : "")
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"kalturaLinks") || (depth0 != null ? lookupProperty(depth0,"kalturaLinks") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"kalturaLinks","hash":{},"data":data,"loc":{"start":{"line":2,"column":69},"end":{"line":2,"column":87}}}) : helper))) != null ? stack1 : "")
    + "</div>\n<script>\nkWidget."
    + alias4(((helper = (helper = lookupProperty(helpers,"embedMethod") || (depth0 != null ? lookupProperty(depth0,"embedMethod") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"embedMethod","hash":{},"data":data,"loc":{"start":{"line":4,"column":8},"end":{"line":4,"column":23}}}) : helper)))
    + "("
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"kWidgetObject") || (depth0 != null ? lookupProperty(depth0,"kWidgetObject") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"kWidgetObject","hash":{},"data":data,"loc":{"start":{"line":4,"column":24},"end":{"line":4,"column":43}}}) : helper))) != null ? stack1 : "")
    + ");\n</script>";
},"useData":true});

this["Handlebars"]["templates"]["templates/iframe.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "&entry_id="
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"entryId") || (depth0 != null ? lookupProperty(depth0,"entryId") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"entryId","hash":{},"data":data,"loc":{"start":{"line":1,"column":215},"end":{"line":1,"column":226}}}) : helper)));
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "&wid="
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"widgetId") || (depth0 != null ? lookupProperty(depth0,"widgetId") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"widgetId","hash":{},"data":data,"loc":{"start":{"line":1,"column":254},"end":{"line":1,"column":266}}}) : helper)));
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<iframe id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"playerId") || (depth0 != null ? lookupProperty(depth0,"playerId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"playerId","hash":{},"data":data,"loc":{"start":{"line":1,"column":12},"end":{"line":1,"column":24}}}) : helper)))
    + "\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"protocol") || (depth0 != null ? lookupProperty(depth0,"protocol") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"protocol","hash":{},"data":data,"loc":{"start":{"line":1,"column":31},"end":{"line":1,"column":43}}}) : helper)))
    + "://"
    + alias4(((helper = (helper = lookupProperty(helpers,"host") || (depth0 != null ? lookupProperty(depth0,"host") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"host","hash":{},"data":data,"loc":{"start":{"line":1,"column":46},"end":{"line":1,"column":54}}}) : helper)))
    + "/p/"
    + alias4(((helper = (helper = lookupProperty(helpers,"partnerId") || (depth0 != null ? lookupProperty(depth0,"partnerId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"partnerId","hash":{},"data":data,"loc":{"start":{"line":1,"column":57},"end":{"line":1,"column":70}}}) : helper)))
    + "/sp/"
    + alias4(((helper = (helper = lookupProperty(helpers,"partnerId") || (depth0 != null ? lookupProperty(depth0,"partnerId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"partnerId","hash":{},"data":data,"loc":{"start":{"line":1,"column":74},"end":{"line":1,"column":87}}}) : helper)))
    + "00/embedIframeJs/uiconf_id/"
    + alias4(((helper = (helper = lookupProperty(helpers,"uiConfId") || (depth0 != null ? lookupProperty(depth0,"uiConfId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"uiConfId","hash":{},"data":data,"loc":{"start":{"line":1,"column":114},"end":{"line":1,"column":126}}}) : helper)))
    + "/partner_id/"
    + alias4(((helper = (helper = lookupProperty(helpers,"partnerId") || (depth0 != null ? lookupProperty(depth0,"partnerId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"partnerId","hash":{},"data":data,"loc":{"start":{"line":1,"column":138},"end":{"line":1,"column":151}}}) : helper)))
    + "?iframeembed=true&playerId="
    + alias4(((helper = (helper = lookupProperty(helpers,"playerId") || (depth0 != null ? lookupProperty(depth0,"playerId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"playerId","hash":{},"data":data,"loc":{"start":{"line":1,"column":178},"end":{"line":1,"column":190}}}) : helper)))
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"entryId") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":190},"end":{"line":1,"column":233}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"widgetId") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":233},"end":{"line":1,"column":273}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"flashVarsUrl")||(depth0 && lookupProperty(depth0,"flashVarsUrl"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"flashVars") : depth0),{"name":"flashVarsUrl","hash":{},"data":data,"loc":{"start":{"line":1,"column":273},"end":{"line":1,"column":301}}})) != null ? stack1 : "")
    + "\" width=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"width") || (depth0 != null ? lookupProperty(depth0,"width") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"width","hash":{},"data":data,"loc":{"start":{"line":1,"column":310},"end":{"line":1,"column":319}}}) : helper)))
    + "\" height=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"height") || (depth0 != null ? lookupProperty(depth0,"height") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"height","hash":{},"data":data,"loc":{"start":{"line":1,"column":329},"end":{"line":1,"column":339}}}) : helper)))
    + "\" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow=\"autoplay *; fullscreen *; encrypted-media *\" frameborder=\"0\""
    + ((stack1 = (lookupProperty(helpers,"elAttributes")||(depth0 && lookupProperty(depth0,"elAttributes"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"attributes") : depth0),{"name":"elAttributes","hash":{},"data":data,"loc":{"start":{"line":1,"column":465},"end":{"line":1,"column":494}}})) != null ? stack1 : "")
    + ">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"seoMetadata") || (depth0 != null ? lookupProperty(depth0,"seoMetadata") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"seoMetadata","hash":{},"data":data,"loc":{"start":{"line":1,"column":495},"end":{"line":1,"column":512}}}) : helper))) != null ? stack1 : "")
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"kalturaLinks") || (depth0 != null ? lookupProperty(depth0,"kalturaLinks") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"kalturaLinks","hash":{},"data":data,"loc":{"start":{"line":1,"column":512},"end":{"line":1,"column":530}}}) : helper))) != null ? stack1 : "")
    + "</iframe>";
},"useData":true});

this["Handlebars"]["templates"]["templates/kaltura_links.hbs"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<a href=\"http://corp.kaltura.com/products/video-platform-features\">Video Platform</a>\n<a href=\"http://corp.kaltura.com/Products/Features/Video-Management\">Video Management</a> \n<a href=\"http://corp.kaltura.com/Video-Solutions\">Video Solutions</a>\n<a href=\"http://corp.kaltura.com/Products/Features/Video-Player\">Video Player</a>";
},"useData":true});

this["Handlebars"]["templates"]["templates/legacy.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<script src=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"scriptUrl") || (depth0 != null ? lookupProperty(depth0,"scriptUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"scriptUrl","hash":{},"data":data,"loc":{"start":{"line":1,"column":40},"end":{"line":1,"column":53}}}) : helper)))
    + "\"></script>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=container.hooks.helperMissing, alias5="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "	<a rel=\"media:thumbnail\" href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"entryMeta") : depth0)) != null ? lookupProperty(stack1,"thumbnailUrl") : stack1), depth0))
    + "\"></a>\n	<span property=\"dc:description\" content=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"entryMeta") : depth0)) != null ? lookupProperty(stack1,"description") : stack1), depth0))
    + "\"></span>\n	<span property=\"media:title\" content=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"entryMeta") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "\"></span>\n    <span property=\"media:uploadDate\" content=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"entryMeta") : depth0)) != null ? lookupProperty(stack1,"uploadDate") : stack1), depth0))
    + "\"></span>\n	<span property=\"media:width\" content=\""
    + alias2(((helper = (helper = lookupProperty(helpers,"width") || (depth0 != null ? lookupProperty(depth0,"width") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"width","hash":{},"data":data,"loc":{"start":{"line":14,"column":39},"end":{"line":14,"column":48}}}) : helper)))
    + "\"></span>\n	<span property=\"media:height\" content=\""
    + alias2(((helper = (helper = lookupProperty(helpers,"height") || (depth0 != null ? lookupProperty(depth0,"height") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"height","hash":{},"data":data,"loc":{"start":{"line":15,"column":40},"end":{"line":15,"column":50}}}) : helper)))
    + "\"></span>\n	<span property=\"media:type\" content=\"application/x-shockwave-flash\"></span>	\n	";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"includeHtml5Library") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":2,"column":7}}})) != null ? stack1 : "")
    + "<object id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"playerId") || (depth0 != null ? lookupProperty(depth0,"playerId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"playerId","hash":{},"data":data,"loc":{"start":{"line":2,"column":19},"end":{"line":2,"column":31}}}) : helper)))
    + "\" name=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"playerId") || (depth0 != null ? lookupProperty(depth0,"playerId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"playerId","hash":{},"data":data,"loc":{"start":{"line":2,"column":39},"end":{"line":2,"column":51}}}) : helper)))
    + "\" type=\"application/x-shockwave-flash\" allowFullScreen=\"true\" allowNetworking=\"all\" allowScriptAccess=\"always\" height=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"height") || (depth0 != null ? lookupProperty(depth0,"height") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"height","hash":{},"data":data,"loc":{"start":{"line":2,"column":170},"end":{"line":2,"column":180}}}) : helper)))
    + "\" width=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"width") || (depth0 != null ? lookupProperty(depth0,"width") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"width","hash":{},"data":data,"loc":{"start":{"line":2,"column":189},"end":{"line":2,"column":198}}}) : helper)))
    + "\" bgcolor=\"#000000\""
    + ((stack1 = (lookupProperty(helpers,"elAttributes")||(depth0 && lookupProperty(depth0,"elAttributes"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"attributes") : depth0),{"name":"elAttributes","hash":{},"data":data,"loc":{"start":{"line":2,"column":217},"end":{"line":2,"column":246}}})) != null ? stack1 : "")
    + " data=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"swfUrl") || (depth0 != null ? lookupProperty(depth0,"swfUrl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"swfUrl","hash":{},"data":data,"loc":{"start":{"line":2,"column":253},"end":{"line":2,"column":263}}}) : helper)))
    + "\">\n	<param name=\"allowFullScreen\" value=\"true\" />\n	<param name=\"allowNetworking\" value=\"all\" />\n	<param name=\"allowScriptAccess\" value=\"always\" />\n	<param name=\"bgcolor\" value=\"#000000\" />\n	<param name=\"flashVars\" value=\""
    + ((stack1 = (lookupProperty(helpers,"flashVarsString")||(depth0 && lookupProperty(depth0,"flashVarsString"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"flashVars") : depth0),{"name":"flashVarsString","hash":{},"data":data,"loc":{"start":{"line":7,"column":32},"end":{"line":7,"column":63}}})) != null ? stack1 : "")
    + "\" />\n	<param name=\"movie\" value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"swfUrl") || (depth0 != null ? lookupProperty(depth0,"swfUrl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"swfUrl","hash":{},"data":data,"loc":{"start":{"line":8,"column":28},"end":{"line":8,"column":38}}}) : helper)))
    + "\" />\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"includeSeoMetadata") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":1},"end":{"line":17,"column":8}}})) != null ? stack1 : "")
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"kalturaLinks") || (depth0 != null ? lookupProperty(depth0,"kalturaLinks") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"kalturaLinks","hash":{},"data":data,"loc":{"start":{"line":17,"column":8},"end":{"line":17,"column":26}}}) : helper))) != null ? stack1 : "")
    + "\n</object>";
},"useData":true});

this["Handlebars"]["templates"]["templates/seo_metadata.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=container.hooks.helperMissing, alias5="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<span itemprop=\"name\" content=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"entryMeta") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "\"></span>\n<span itemprop=\"description\" content=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"entryMeta") : depth0)) != null ? lookupProperty(stack1,"description") : stack1), depth0))
    + "\"></span>\n<span itemprop=\"duration\" content=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"entryMeta") : depth0)) != null ? lookupProperty(stack1,"duration") : stack1), depth0))
    + "\"></span>\n<span itemprop=\"thumbnailUrl\" content=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"entryMeta") : depth0)) != null ? lookupProperty(stack1,"thumbnailUrl") : stack1), depth0))
    + "\"></span>\n<span itemprop=\"uploadDate\" content=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"entryMeta") : depth0)) != null ? lookupProperty(stack1,"uploadDate") : stack1), depth0))
    + "\"></span>\n<span itemprop=\"width\" content=\""
    + alias2(((helper = (helper = lookupProperty(helpers,"width") || (depth0 != null ? lookupProperty(depth0,"width") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"width","hash":{},"data":data,"loc":{"start":{"line":7,"column":32},"end":{"line":7,"column":41}}}) : helper)))
    + "\"></span>\n<span itemprop=\"height\" content=\""
    + alias2(((helper = (helper = lookupProperty(helpers,"height") || (depth0 != null ? lookupProperty(depth0,"height") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"height","hash":{},"data":data,"loc":{"start":{"line":8,"column":33},"end":{"line":8,"column":43}}}) : helper)))
    + "\"></span>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"includeSeoMetadata") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":9,"column":7}}})) != null ? stack1 : "");
},"useData":true});
// Add indexOf to array object
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (searchElement /*, fromIndex */ ) {
        "use strict";
        if (this == null) {
            throw new TypeError();
        }
        var t = Object(this);
        var len = t.length >>> 0;
        if (len === 0) {
            return -1;
        }
        var n = 0;
        if (arguments.length > 1) {
            n = Number(arguments[1]);
            if (n !== n) { // shortcut for verifying if it's NaN
                n = 0;
            } else if (n !== 0 && n !== Infinity && n !== -Infinity) {
                n = (n > 0 || -1) * Math.floor(Math.abs(n));
            }
        }
        if (n >= len) {
            return -1;
        }
        var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
        for (; k < len; k++) {
            if (k in t && t[k] === searchElement) {
                return k;
            }
        }
        return -1;
    };
}
// Add keys for Object
if (!Object.keys) {
  Object.keys = (function () {
    var hasOwnProperty = Object.prototype.hasOwnProperty,
        hasDontEnumBug = !({toString: null}).propertyIsEnumerable('toString'),
        dontEnums = [
          'toString',
          'toLocaleString',
          'valueOf',
          'hasOwnProperty',
          'isPrototypeOf',
          'propertyIsEnumerable',
          'constructor'
        ],
        dontEnumsLength = dontEnums.length;
 
    return function (obj) {
      if (typeof obj !== 'object' && typeof obj !== 'function' || obj === null) {
        throw new TypeError('Object.keys called on non-object');
      }
 
      var result = [];
 
      for (var prop in obj) {
        if (hasOwnProperty.call(obj, prop)) {
          result.push(prop);
        }
      }
 
      if (hasDontEnumBug) {
        for (var i=0; i < dontEnumsLength; i++) {
          if (hasOwnProperty.call(obj, dontEnums[i])) {
            result.push(dontEnums[i]);
          } 
        }
      }
      return result;
    };
  })();
}
(function( window, undefined ) {
/**
* Kaltura Embed Code Generator
* Used to generate different type of embed codes
* Depended on Handlebars ( http://handlebarsjs.com/ )
* 
* @class EmbedCodeGenerator
* @constructor
*/
var EmbedCodeGenerator = function( options ) {
	this.init( options );
};

EmbedCodeGenerator.prototype = {

	types: ['auto', 'dynamic', 'thumb', 'iframe', 'legacy'],
	required: ['widgetId', 'partnerId', 'uiConfId'],

	defaults: {
		/**
		* Embed code type to generate
		* Can we one of: ['auto', 'dynamic', 'thumb', 'iframe', 'legacy']
		* 
		* @property embedType
		* @type {String}
		* @default "auto"
		*/		
		embedType: 'auto',
		/**
		* The Player element Id / Name that will be used for embed code
		* 
		* @property playerId
		* @type {String}
		* @default "kaltura_player"
		*/			
		playerId: 'kaltura_player',
		/**
		* Embed HTTP protocol to use
		* Can we one of: ['http', 'https']
		* 
		* @property protocol
		* @type {String}
		* @default "http"
		*/			
		protocol: 'http',
		/**
		* Host for loading html5 library & kdp swf
		* 
		* @property host
		* @type {String}
		* @default "www.kaltura.com"
		*/			
		host: 'www.kaltura.com',
		/**
		* Secured host for loading html5 library & kdp swf
		* Used if protocol is: 'https'
		* 
		* @property securedHost
		* @type {String}
		* @default "www.kaltura.com"
		*/		
		securedHost: 'www.kaltura.com',
		/**
		* Kaltura Widget Id
		* 
		* @property widgetId
		* @type {String}
		* @default "_{partnerId}"
		*/
		widgetId: null,
		/**
		* Kaltura Partner Id
		* 
		* @property partnerId
		* @type {Number}
		* @default null,
		*/
		partnerId: null,
		/**
		* Add cacheSt parameter to bust cache
		* Should be unix timestamp of future time
		* 
		* @property cacheSt
		* @type {Number}
		* @default null,
		*/		
		cacheSt: null,
		/**
		* Kaltura UiConf Id
		* 
		* @property uiConfId
		* @type {Number}
		* @default null,
		*/		
		uiConfId: null,
		/**
		* Kaltura Entry Id
		* 
		* @property entryId
		* @type {String}
		* @default null,
		*/		
		entryId: null,		
		/**
		* Entry Object similar to:
		* {
		*	name: 'Foo', 
		*	description: 'Bar', 
		*	thumbUrl: 'http://cdnbakmi.kaltura.com/thumbnail/...'
		* }
		* 
		* @property entryMeta
		* @type {Object}
		* @default {},
		*/		
		entryMeta: {},
		/**
		* Sets Player Width
		* 
		* @property width
		* @type {Number}
		* @default 400,
		*/		
		width: 400,
		/**
		* Sets Player Height
		* 
		* @property height
		* @type {Number}
		* @default 330,
		*/		
		height: 330,
		/**
		* Adds additonal attributes to embed code.
		* Example:
		* {
		*	"class": "player"
		* }
		* 
		* @property attributes
		* @type {Object}
		* @default {},
		*/	
		attributes: {},
		/**
		* Adds flashVars to player
		* Example:
		* {
		*	"autoPlay": "true"
		* }
		* 
		* @property flashVars
		* @type {Object}
		* @default {},
		*/			
		flashVars: {},
		/**
		* Include Kaltura SEO links to embed code
		* 
		* @property includeKalturaLinks
		* @type {Boolean}
		* @default true,
		*/
		includeKalturaLinks: true,
		/**
		* Include Entry Seo Metadata
		* Metadata is taken from {entryMeta} object
		* 
		* @property includeSeoMetadata
		* @type {Boolean}
		* @default false,
		*/
		includeSeoMetadata: false,
		/**
		* Include HTML5 library script
		* 
		* @property includeHtml5Library
		* @type {Boolean}
		* @default true,
		*/
		includeHtml5Library: true
	},
	/**
	* Merge two object together
	*
	* @method extend
	* @param {Object} destination object to merge into
	* @param {Object} sourece object to merge from
	* @return {Object} Merged object
	*/
	extend: function(destination, source) {
	    for (var property in source) {
	        if (source.hasOwnProperty(property) && !destination.hasOwnProperty(property)) {
	            destination[property] = source[property];
	        }
	    }
	    return destination;
	},
	/**
	* Check if property is null
	*
	* @method isNull
	* @param {Any} property some var
	* @return {Boolean}
	*/
	isNull: function( property ) {

		// Null ?
		if (property === null) {
			return true;
		}

		if (property.length && property.length > 0) {
			return false;
		}
	    if (property.length && property.length === 0) {
	    	return true;
	    }
		if( typeof property === 'object' ) {
			return (Object.keys(property).length > 0) ? false : true;
		}
		return !property;
	},
	/**
	* Set default options to EmbedCodeGenerator instance
	*
	* @method init
	* @param {Object} options Configuration object based on defaults object
	* @return {Object} Returns the current instance
	*/
	init: function( options ) {

		options = options || {}; 

		var defaults = this.defaults;

		// Make sure Handlebars is available
		if( typeof Handlebars === undefined ) {
			throw 'Handlebars is not defined, please include Handlebars.js before this script';
		}

		// Merge options with defaults
		if( typeof options === 'object' ) {
			this.options = this.extend(options, this.defaults);
		}
		// Set widgetId to partnerId if not defined
		if( ! this.config('widgetId') && this.config('partnerId') ) {
			this.config('widgetId', '_' + this.config('partnerId'));
		}

		return this;
	},
	/**
	* Get or Set default configuration
	*
	* @method config
	* @param {String} key configuration property name
	* @param {Any} value to set
	* @return {Mixed} Return the value for the key, configuration object or null
	*/
	config: function( key, val ) {
		// Used as getter
		if( val === undefined && typeof key === 'string' && this.options.hasOwnProperty(key) ) {
			return this.options[ key ];
		}
		// Get all options
		if( key === undefined && val === undefined ) {
			return this.options;
		}
		// Used as setter
		if( typeof key === 'string' && val !== undefined ) {
			this.options[ key ] = val;
		}
		return null;
	},
	/**
	* Check if required parameters are missing
	*
	* @method checkRequiredParams
	* @param {Object} Configuration object
	* @return throws exception if missing parameters
	*/
	checkRequiredParams: function( params ) {
		var requiredLength = this.required.length,
			i = 0;
		// Check for required configuration
		for(i; i<requiredLength; i++) {
			if( this.isNull(params[this.required[i]]) ) {
				throw 'Missing required parameter: ' + this.required[i];
			}
		}
	},	
	/**
	* Check if embed type is part of types array
	*
	* @method checkValidType
	* @param {String} type - One of config embed types
	* @return throws exception if not valid
	*/
	checkValidType: function( type ) {
		var valid = (this.types.indexOf(type) !== -1) ? true : false;;
		if( !valid ) {
			throw 'Embed type: ' + type + ' is not valid. Available types: ' + this.types.join(",");
		}
	},
	/**
	* Get Handlebars template based on embed type
	*
	* @method getTemplate
	* @param {String} type - One of config embed types
	* @return {Mixed} If found returns Handlebars template function, else null
	*/
	getTemplate: function( type ) {
		// Dynamic embed and Thumb embed has the same template
		type = (type == 'thumb') ? 'dynamic' : type;
		var templateName = 'templates/' + type + '.hbs';
		return ( type && Handlebars.templates && Handlebars.templates[ templateName ] ) ? Handlebars.templates[ templateName ] : null;
	},
	/**
	* Check if embed type is using kWidget embed
	*
	* @method isKWidgetEmbed
	* @param {String} type - One of config embed types
	* @return {Boolean} true / false
	*/
	isKWidgetEmbed: function( type ) {
		return ( type == 'dynamic' || type == 'thumb' ) ? true : false;
	},
	/**
	* Get embed host based on protocol
	*
	* @method getHost
	* @param {Object} params Configuration object
	* @return {String} Embed host
	*/
	getHost: function( params ) {
		return (params.protocol === 'http') ? params.host : params.securedHost;
	},
	/**
	* Generate HTML5 library script url
	*
	* @method getScriptUrl
	* @param {Object} params Configuration object
	* @return {String} HTML5 library script Url
	*/
	getScriptUrl: function( params ) {
		return params.protocol + '://' + this.getHost(params) + '/p/' + params.partnerId + '/sp/' + params.partnerId + '00/embedIframeJs/uiconf_id/' + params.uiConfId + '/partner_id/' + params.partnerId;
	},
	/**
	* Generate Flash SWF url
	*
	* @method getSwfUrl
	* @param {Object} params Configuration object
	* @return {String} Flash player SWF url
	*/
	getSwfUrl: function( params ) {
		var cacheSt = (params.cacheSt) ? '/cache_st/' + params.cacheSt : '';
		var entryId = (params.entryId) ? '/entry_id/' + params.entryId : '';
		return params.protocol + '://' + this.getHost(params) + '/index.php/kwidget' + cacheSt + 
				'/wid/' + params.widgetId + '/uiconf_id/' + params.uiConfId + entryId;
	},
	/**
	* Generate attributes object based on configuration
	*
	* @method getAttributes
	* @param {Object} params Configuration object
	* @return {Object} Attributes object
	*/
	getAttributes: function( params ) {
		var attrs = {};

		// Add style attribute for dynamic / thumb embeds
		// Or if includeSeoMetadata is true
		if( this.isKWidgetEmbed( params.embedType ) || params.includeSeoMetadata ) {
			attrs['style'] = 'width: ' + params.width + 'px; height: ' + params.height + 'px;';
		}

		// Add Seo attributes
		if( params.includeSeoMetadata ) {
			if( params.embedType == 'legacy' ) {
				attrs["xmlns:dc"] = "http://purl.org/dc/terms/";
				attrs["xmlns:media"] = "http://search.yahoo.com/searchmonkey/media/";
				attrs["rel"] = "media:video";
				attrs["resource"] = this.getSwfUrl( params );
			} else {
				attrs['itemprop'] = 'video'; 
				attrs['itemscope itemtype'] = 'http://schema.org/VideoObject';
			}
		}

		return attrs;
	},
	/**
	* Generate kWidget object for HTML5 library
	*
	* @method getEmbedObject
	* @param {Object} params Configuration object
	* @return {Object} kWidget object
	*/
	getEmbedObject: function( params ) {
		// Used by kWidget.embed
		var embedObject = {
			targetId: params.playerId,		
			wid: params.widgetId,
			uiconf_id: params.uiConfId,
			flashvars: params.flashVars
		};
		// Add cacheSt
		if( params.cacheSt ) {
			embedObject['cache_st'] = params.cacheSt;
		}
		// Add entryId
		if( params.entryId ) {
			embedObject['entry_id'] = params.entryId;
		}
		// Transform object into a string
		return JSON.stringify(embedObject, null, 2);
	},
	/**
	* Generate Final Embed Code
	*
	* @method getCode
	* @param {Object} params Configuration object
	* @return {String} HTML embed code
	*/
	getCode: function( localParams ) {
		// Set default for params
		var params = (localParams === undefined) ? {} : this.extend({}, localParams);
		// Merge with options
		params = this.extend( params, this.config() );
		// Set widgetId to partnerId if undefined
		if( ! params.widgetId && params.partnerId ) {
			params.widgetId = '_' + params.partnerId;
		}

		this.checkRequiredParams(params); // Check for missing params
		this.checkValidType(params.embedType); // Check if embed type is valid

		// Check if we have a template
		var template = this.getTemplate(params.embedType);
		if( ! template ) {
			throw 'Template: ' + params.embedType + ' is not defined as Handlebars template';
		}

		// Add basic attributes for all embed codes
		var data = {
			host: this.getHost( params ),
			scriptUrl: this.getScriptUrl( params ),
			attributes: this.getAttributes( params )
		};
		// Add SWF Url for flash embeds
		if( params.embedType === 'legacy' ) {
			data['swfUrl'] = this.getSwfUrl( params );
		}
		// Add embed method and embed object for dynamic embeds
		if( this.isKWidgetEmbed( params.embedType ) ) {
			data['embedMethod'] = (params.embedType == 'dynamic') ? 'embed' : 'thumbEmbed';
			data['kWidgetObject'] = this.getEmbedObject( params );
		}
		data = this.extend( data, params );
		return template( data );
	}
};

// Export module to window object
window.kEmbedCodeGenerator = EmbedCodeGenerator;

 })(this);
