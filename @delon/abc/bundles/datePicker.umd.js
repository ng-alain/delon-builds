/**
 * @license ng-alain(cipchk@qq.com) v12.0.1
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('ng-zorro-antd/date-picker'), require('@angular/platform-browser'), require('rxjs'), require('@delon/util/config'), require('@delon/util/date-time'), require('@delon/util/other')) :
  typeof define === 'function' && define.amd ? define('@delon/abc/date-picker', ['exports', '@angular/common', '@angular/core', '@angular/forms', 'ng-zorro-antd/date-picker', '@angular/platform-browser', 'rxjs', '@delon/util/config', '@delon/util/date-time', '@delon/util/other'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.delon = global.delon || {}, global.delon.abc = global.delon.abc || {}, global.delon.abc['date-picker'] = {}), global.ng.common, global.ng.core, global.ng.forms, global['ng-zorro-antd/date-picker'], global.ng.platformBrowser, global.rxjs, global.config, global.dateTime, global.other));
}(this, (function (exports, common, core, forms, datePicker, platformBrowser, rxjs, config, dateTime, other) { 'use strict';

  var RangePickerShortcutTplComponent = /** @class */ (function () {
      function RangePickerShortcutTplComponent() {
          this.list = [];
      }
      RangePickerShortcutTplComponent.prototype.click = function (_) { };
      return RangePickerShortcutTplComponent;
  }());
  RangePickerShortcutTplComponent.decorators = [
      { type: core.Component, args: [{
                  selector: '',
                  template: "\n    <ng-template #tpl>\n      <a\n        *ngFor=\"let i of list; let first = first\"\n        (click)=\"click(i)\"\n        [innerHTML]=\"i._text\"\n        [ngClass]=\"{ 'ml-sm': !first }\"\n      ></a>\n    </ng-template>\n  "
              },] }
  ];
  RangePickerShortcutTplComponent.propDecorators = {
      tpl: [{ type: core.ViewChild, args: ['tpl', { static: true },] }]
  };

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
  /* global Reflect, Promise */
  var extendStatics = function (d, b) {
      extendStatics = Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
          function (d, b) { for (var p in b)
              if (Object.prototype.hasOwnProperty.call(b, p))
                  d[p] = b[p]; };
      return extendStatics(d, b);
  };
  function __extends(d, b) {
      if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }
  var __assign = function () {
      __assign = Object.assign || function __assign(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s)
                  if (Object.prototype.hasOwnProperty.call(s, p))
                      t[p] = s[p];
          }
          return t;
      };
      return __assign.apply(this, arguments);
  };
  function __rest(s, e) {
      var t = {};
      for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
              t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
              if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                  t[p[i]] = s[p[i]];
          }
      return t;
  }
  function __decorate(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
      else
          for (var i = decorators.length - 1; i >= 0; i--)
              if (d = decorators[i])
                  r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  }
  function __param(paramIndex, decorator) {
      return function (target, key) { decorator(target, key, paramIndex); };
  }
  function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(metadataKey, metadataValue);
  }
  function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
      return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) { try {
              step(generator.next(value));
          }
          catch (e) {
              reject(e);
          } }
          function rejected(value) { try {
              step(generator["throw"](value));
          }
          catch (e) {
              reject(e);
          } }
          function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
  }
  function __generator(thisArg, body) {
      var _ = { label: 0, sent: function () { if (t[0] & 1)
              throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
      function verb(n) { return function (v) { return step([n, v]); }; }
      function step(op) {
          if (f)
              throw new TypeError("Generator is already executing.");
          while (_)
              try {
                  if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                      return t;
                  if (y = 0, t)
                      op = [op[0] & 2, t.value];
                  switch (op[0]) {
                      case 0:
                      case 1:
                          t = op;
                          break;
                      case 4:
                          _.label++;
                          return { value: op[1], done: false };
                      case 5:
                          _.label++;
                          y = op[1];
                          op = [0];
                          continue;
                      case 7:
                          op = _.ops.pop();
                          _.trys.pop();
                          continue;
                      default:
                          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                              _ = 0;
                              continue;
                          }
                          if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                              _.label = op[1];
                              break;
                          }
                          if (op[0] === 6 && _.label < t[1]) {
                              _.label = t[1];
                              t = op;
                              break;
                          }
                          if (t && _.label < t[2]) {
                              _.label = t[2];
                              _.ops.push(op);
                              break;
                          }
                          if (t[2])
                              _.ops.pop();
                          _.trys.pop();
                          continue;
                  }
                  op = body.call(thisArg, _);
              }
              catch (e) {
                  op = [6, e];
                  y = 0;
              }
              finally {
                  f = t = 0;
              }
          if (op[0] & 5)
              throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
      }
  }
  var __createBinding = Object.create ? (function (o, m, k, k2) {
      if (k2 === undefined)
          k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
  }) : (function (o, m, k, k2) {
      if (k2 === undefined)
          k2 = k;
      o[k2] = m[k];
  });
  function __exportStar(m, o) {
      for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
              __createBinding(o, m, p);
  }
  function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m)
          return m.call(o);
      if (o && typeof o.length === "number")
          return {
              next: function () {
                  if (o && i >= o.length)
                      o = void 0;
                  return { value: o && o[i++], done: !o };
              }
          };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
          return o;
      var i = m.call(o), r, ar = [], e;
      try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
              ar.push(r.value);
      }
      catch (error) {
          e = { error: error };
      }
      finally {
          try {
              if (r && !r.done && (m = i["return"]))
                  m.call(i);
          }
          finally {
              if (e)
                  throw e.error;
          }
      }
      return ar;
  }
  /** @deprecated */
  function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++)
          ar = ar.concat(__read(arguments[i]));
      return ar;
  }
  /** @deprecated */
  function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++)
          s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
              r[k] = a[j];
      return r;
  }
  function __spreadArray(to, from, pack) {
      if (pack || arguments.length === 2)
          for (var i = 0, l = from.length, ar; i < l; i++) {
              if (ar || !(i in from)) {
                  if (!ar)
                      ar = Array.prototype.slice.call(from, 0, i);
                  ar[i] = from[i];
              }
          }
      return to.concat(ar || from);
  }
  function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
  }
  function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []), i, q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
      function verb(n) { if (g[n])
          i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
      function resume(n, v) { try {
          step(g[n](v));
      }
      catch (e) {
          settle(q[0][3], e);
      } }
      function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
      function fulfill(value) { resume("next", value); }
      function reject(value) { resume("throw", value); }
      function settle(f, v) { if (f(v), q.shift(), q.length)
          resume(q[0][0], q[0][1]); }
  }
  function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
      function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
  }
  function __asyncValues(o) {
      if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator], i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
      function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
      function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
  }
  function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", { value: raw });
      }
      else {
          cooked.raw = raw;
      }
      return cooked;
  }
  ;
  var __setModuleDefault = Object.create ? (function (o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
  }) : function (o, v) {
      o["default"] = v;
  };
  function __importStar(mod) {
      if (mod && mod.__esModule)
          return mod;
      var result = {};
      if (mod != null)
          for (var k in mod)
              if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                  __createBinding(result, mod, k);
      __setModuleDefault(result, mod);
      return result;
  }
  function __importDefault(mod) {
      return (mod && mod.__esModule) ? mod : { default: mod };
  }
  function __classPrivateFieldGet(receiver, state, kind, f) {
      if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
  }
  function __classPrivateFieldSet(receiver, state, value, kind, f) {
      if (kind === "m")
          throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
  }

  var RangePickerDirective = /** @class */ (function () {
      function RangePickerDirective(dom, configSrv, nativeComp, resolver, injector) {
          this.dom = dom;
          this.nativeComp = nativeComp;
          this.resolver = resolver;
          this.injector = injector;
          this.destroy$ = new rxjs.Subject();
          this.shortcutFactory = null;
          this.start = null;
          this.end = null;
          this.ngModelEndChange = new core.EventEmitter();
          other.assert(!!nativeComp, "It should be attached to nz-range-picker component, for example: '<nz-range-picker [(ngModel)]=\"i.start\" extend [(ngModelEnd)]=\"i.end\" shortcut></nz-range-picker>'");
          var cog = configSrv.merge('dataRange', {
              nzFormat: 'yyyy-MM-dd',
              nzAllowClear: true,
              nzAutoFocus: false,
              nzPopupStyle: { position: 'relative' },
              nzShowToday: true,
              shortcuts: {
                  enabled: false,
                  closed: true,
                  list: [
                      {
                          text: '今天',
                          fn: function () { return dateTime.getTimeDistance('today'); }
                      },
                      {
                          text: '昨天',
                          fn: function () { return dateTime.getTimeDistance('yesterday'); }
                      },
                      {
                          text: '近3天',
                          fn: function () { return dateTime.getTimeDistance(-2); }
                      },
                      {
                          text: '近7天',
                          fn: function () { return dateTime.getTimeDistance(-6); }
                      },
                      {
                          text: '本周',
                          fn: function () { return dateTime.getTimeDistance('week'); }
                      },
                      {
                          text: '本月',
                          fn: function () { return dateTime.getTimeDistance('month'); }
                      },
                      {
                          text: '全年',
                          fn: function () { return dateTime.getTimeDistance('year'); }
                      }
                  ]
              }
          });
          this.defaultShortcuts = Object.assign({}, cog.shortcuts);
          Object.assign(this, cog);
      }
      Object.defineProperty(RangePickerDirective.prototype, "shortcut", {
          get: function () {
              return this._shortcut;
          },
          set: function (val) {
              var _this = this;
              var item = other.deepMergeKey({ list: [] }, true, this.defaultShortcuts, val == null ? {} : val);
              if (typeof val !== 'object') {
                  item.enabled = val !== false;
              }
              (item.list || []).forEach(function (i) {
                  i._text = _this.dom.bypassSecurityTrustHtml(i.text);
              });
              this._shortcut = item;
              this.refreshShortcut();
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(RangePickerDirective.prototype, "dp", {
          get: function () {
              return this.nativeComp.datePicker;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(RangePickerDirective.prototype, "srv", {
          get: function () {
              return this.dp.datePickerService;
          },
          enumerable: false,
          configurable: true
      });
      RangePickerDirective.prototype.cd = function () {
          this.dp.cdr.markForCheck();
      };
      RangePickerDirective.prototype.overrideNative = function () {
          var _this = this;
          var dp = this.dp;
          dp.writeValue = function (value) {
              var dates = (value && _this.ngModelEnd ? [value, _this.ngModelEnd] : []).filter(function (w) { return !!w; });
              _this.srv.setValue(_this.srv.makeValue(dates));
              _this.start = dates.length > 0 ? dates[0] : null;
              _this.end = dates.length > 0 ? dates[1] : null;
              _this.cd();
          };
          var oldOnChangeFn = dp.onChangeFn;
          dp.onChangeFn = function (list) {
              var _a;
              var start = null;
              var end = null;
              if (list.length > 0 && list.filter(function (w) { return w != null; }).length === 2) {
                  _a = __read(dateTime.fixEndTimeOfRange([list[0], list[1]]), 2), start = _a[0], end = _a[1];
              }
              _this.start = start;
              _this.end = end;
              oldOnChangeFn(start);
              _this.ngModelEnd = end;
              _this.ngModelEndChange.emit(end);
          };
      };
      RangePickerDirective.prototype.refreshShortcut = function () {
          var _this = this;
          if (!this._shortcut) {
              return;
          }
          var _a = this._shortcut, enabled = _a.enabled, list = _a.list;
          var extraFooter;
          if (!this.nativeComp || !enabled) {
              extraFooter = undefined;
          }
          else {
              if (!this.shortcutFactory) {
                  var factory = this.resolver.resolveComponentFactory(RangePickerShortcutTplComponent);
                  this.shortcutFactory = factory.create(this.injector);
              }
              var instance = this.shortcutFactory.instance;
              instance.list = list;
              instance.click = function (item) {
                  var res = item.fn([_this.start, _this.end]);
                  _this.srv.setValue(_this.srv.makeValue(res));
                  _this.dp.onChangeFn(res);
                  _this.dp.close();
              };
              extraFooter = instance.tpl;
          }
          this.nativeComp.datePicker.extraFooter = extraFooter;
          Promise.resolve().then(function () { return _this.cd(); });
      };
      RangePickerDirective.prototype.ngAfterViewInit = function () {
          this.overrideNative();
          this.refreshShortcut();
      };
      RangePickerDirective.prototype.destoryShortcut = function () {
          if (this.shortcutFactory != null) {
              this.shortcutFactory.destroy();
          }
      };
      RangePickerDirective.prototype.ngOnDestroy = function () {
          this.destoryShortcut();
          this.destroy$.next();
          this.destroy$.complete();
      };
      return RangePickerDirective;
  }());
  RangePickerDirective.decorators = [
      { type: core.Directive, args: [{
                  selector: 'nz-range-picker[extend]',
                  exportAs: 'extendRangePicker'
              },] }
  ];
  RangePickerDirective.ctorParameters = function () { return [
      { type: platformBrowser.DomSanitizer },
      { type: config.AlainConfigService },
      { type: datePicker.NzRangePickerComponent, decorators: [{ type: core.Host }, { type: core.Optional }] },
      { type: core.ComponentFactoryResolver },
      { type: core.Injector }
  ]; };
  RangePickerDirective.propDecorators = {
      shortcut: [{ type: core.Input }],
      ngModelEnd: [{ type: core.Input }],
      ngModelEndChange: [{ type: core.Output }]
  };

  var COMPONENTS = [RangePickerDirective, RangePickerShortcutTplComponent];
  var DatePickerModule = /** @class */ (function () {
      function DatePickerModule() {
      }
      return DatePickerModule;
  }());
  DatePickerModule.decorators = [
      { type: core.NgModule, args: [{
                  imports: [common.CommonModule, forms.FormsModule, datePicker.NzDatePickerModule],
                  declarations: COMPONENTS,
                  exports: COMPONENTS
              },] }
  ];

  /**
   * Generated bundle index. Do not edit.
   */

  exports.DatePickerModule = DatePickerModule;
  exports.RangePickerDirective = RangePickerDirective;
  exports.ɵa = RangePickerShortcutTplComponent;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=datePicker.umd.js.map
