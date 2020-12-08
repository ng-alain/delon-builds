/**
 * @license ng-alain(cipchk@qq.com) v10.1.2
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/router'), require('@delon/theme'), require('@delon/util'), require('ng-zorro-antd/message'), require('rxjs'), require('rxjs/operators'), require('ng-zorro-antd/avatar'), require('ng-zorro-antd/dropdown'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/tooltip'), require('@angular/platform-browser')) :
  typeof define === 'function' && define.amd ? define('@delon/theme/layout-default', ['exports', '@angular/common', '@angular/core', '@angular/router', '@delon/theme', '@delon/util', 'ng-zorro-antd/message', 'rxjs', 'rxjs/operators', 'ng-zorro-antd/avatar', 'ng-zorro-antd/dropdown', 'ng-zorro-antd/icon', 'ng-zorro-antd/tooltip', '@angular/platform-browser'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.delon = global.delon || {}, global.delon.theme = global.delon.theme || {}, global.delon.theme['layout-default'] = {}), global.ng.common, global.ng.core, global.ng.router, global.delon.theme, global.util, global.message, global.rxjs, global.rxjs.operators, global.avatar, global.dropdown, global.icon, global.tooltip, global.ng.platformBrowser));
}(this, (function (exports, common, core, router, theme, util, message, rxjs, operators, avatar, dropdown, icon, tooltip, platformBrowser) { 'use strict';

  /**
   * @fileoverview added by tsickle
   * Generated from: layout-header-item.component.ts
   * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
   */
  var LayoutDefaultHeaderItemComponent = /** @class */ (function () {
      function LayoutDefaultHeaderItemComponent() {
          this.hidden = 'none';
          this.direction = 'right';
      }
      return LayoutDefaultHeaderItemComponent;
  }());
  LayoutDefaultHeaderItemComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'layout-default-header-item',
                  template: "\n    <ng-template #host>\n      <ng-content></ng-content>\n    </ng-template>\n  "
              }] }
  ];
  LayoutDefaultHeaderItemComponent.propDecorators = {
      host: [{ type: core.ViewChild, args: ['host', { static: true },] }],
      hidden: [{ type: core.Input }],
      direction: [{ type: core.Input }]
  };
  if (false) {
      /** @type {?} */
      LayoutDefaultHeaderItemComponent.prototype.host;
      /** @type {?} */
      LayoutDefaultHeaderItemComponent.prototype.hidden;
      /** @type {?} */
      LayoutDefaultHeaderItemComponent.prototype.direction;
  }

  /**
   * @fileoverview added by tsickle
   * Generated from: layout.component.ts
   * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
   */
  var LayoutDefaultComponent = /** @class */ (function () {
      /**
       * @param {?} router
       * @param {?} msgSrv
       * @param {?} settings
       * @param {?} el
       * @param {?} renderer
       * @param {?} doc
       */
      function LayoutDefaultComponent(router$1, msgSrv, settings, el, renderer, doc) {
          var _this = this;
          this.settings = settings;
          this.el = el;
          this.renderer = renderer;
          this.doc = doc;
          this.unsubscribe$ = new rxjs.Subject();
          this.isFetching = false;
          // scroll to top in change page
          router$1.events.pipe(operators.takeUntil(this.unsubscribe$)).subscribe(( /**
           * @param {?} evt
           * @return {?}
           */function (/**
           * @param {?} evt
           * @return {?}
           */ evt) {
              if (!_this.isFetching && evt instanceof router.RouteConfigLoadStart) {
                  _this.isFetching = true;
              }
              if (evt instanceof router.NavigationError || evt instanceof router.NavigationCancel) {
                  _this.isFetching = false;
                  if (evt instanceof router.NavigationError) {
                      msgSrv.error("\u65E0\u6CD5\u52A0\u8F7D" + evt.url + "\u8DEF\u7531", { nzDuration: 1000 * 3 });
                  }
                  return;
              }
              if (!(evt instanceof router.NavigationEnd || evt instanceof router.RouteConfigLoadEnd)) {
                  return;
              }
              if (_this.isFetching) {
                  setTimeout(( /**
                   * @return {?}
                   */function () {
                      _this.isFetching = false;
                  }), 100);
              }
          }));
      }
      /**
       * @private
       * @return {?}
       */
      LayoutDefaultComponent.prototype.setClass = function () {
          var _a;
          var _b = this, el = _b.el, doc = _b.doc, renderer = _b.renderer, settings = _b.settings;
          /** @type {?} */
          var layout = settings.layout;
          util.updateHostClass(el.nativeElement, renderer, (_a = {},
              _a['alain-default'] = true,
              _a["alain-default__fixed"] = layout.fixed,
              _a["alain-default__collapsed"] = layout.collapsed,
              _a));
          doc.body.classList[layout.colorWeak ? 'add' : 'remove']('color-weak');
      };
      /**
       * @return {?}
       */
      LayoutDefaultComponent.prototype.ngOnInit = function () {
          var _this = this;
          if (this.options == null) {
              throw new Error("Please specify the [options] parameter, otherwise the layout display cannot be completed");
          }
          var _a = this, settings = _a.settings, unsubscribe$ = _a.unsubscribe$;
          settings.notify.pipe(operators.takeUntil(unsubscribe$)).subscribe(( /**
           * @return {?}
           */function () { return _this.setClass(); }));
          this.setClass();
      };
      /**
       * @return {?}
       */
      LayoutDefaultComponent.prototype.ngOnDestroy = function () {
          var unsubscribe$ = this.unsubscribe$;
          unsubscribe$.next();
          unsubscribe$.complete();
      };
      return LayoutDefaultComponent;
  }());
  LayoutDefaultComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'layout-default',
                  template: "\n    <div class=\"alain-default__progress-bar\" *ngIf=\"isFetching\"></div>\n    <layout-default-header></layout-default-header>\n    <div class=\"alain-default__aside\">\n      <div class=\"alain-default__aside-inner\">\n        <ng-container *ngTemplateOutlet=\"asideUser\"></ng-container>\n        <layout-default-nav class=\"d-block py-lg\"></layout-default-nav>\n      </div>\n    </div>\n    <section class=\"alain-default__content\">\n      <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n      <ng-content></ng-content>\n    </section>\n  "
              }] }
  ];
  /** @nocollapse */
  LayoutDefaultComponent.ctorParameters = function () { return [
      { type: router.Router },
      { type: message.NzMessageService },
      { type: theme.SettingsService },
      { type: core.ElementRef },
      { type: core.Renderer2 },
      { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] }
  ]; };
  LayoutDefaultComponent.propDecorators = {
      headerItems: [{ type: core.ContentChildren, args: [LayoutDefaultHeaderItemComponent, { descendants: false },] }],
      options: [{ type: core.Input }],
      asideUser: [{ type: core.Input }],
      content: [{ type: core.Input }]
  };
  if (false) {
      /** @type {?} */
      LayoutDefaultComponent.prototype.headerItems;
      /** @type {?} */
      LayoutDefaultComponent.prototype.options;
      /** @type {?} */
      LayoutDefaultComponent.prototype.asideUser;
      /** @type {?} */
      LayoutDefaultComponent.prototype.content;
      /**
       * @type {?}
       * @private
       */
      LayoutDefaultComponent.prototype.unsubscribe$;
      /** @type {?} */
      LayoutDefaultComponent.prototype.isFetching;
      /**
       * @type {?}
       * @private
       */
      LayoutDefaultComponent.prototype.settings;
      /**
       * @type {?}
       * @private
       */
      LayoutDefaultComponent.prototype.el;
      /**
       * @type {?}
       * @private
       */
      LayoutDefaultComponent.prototype.renderer;
      /**
       * @type {?}
       * @private
       */
      LayoutDefaultComponent.prototype.doc;
  }

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
  function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++)
          ar = ar.concat(__read(arguments[i]));
      return ar;
  }
  function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++)
          s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
              r[k] = a[j];
      return r;
  }
  ;
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
  function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to get private field on non-instance");
      }
      return privateMap.get(receiver);
  }
  function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to set private field on non-instance");
      }
      privateMap.set(receiver, value);
      return value;
  }

  /**
   * @fileoverview added by tsickle
   * Generated from: layout-header-item-trigger.directive.ts
   * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
   */
  var LayoutDefaultHeaderItemTriggerDirective = /** @class */ (function () {
      function LayoutDefaultHeaderItemTriggerDirective() {
      }
      return LayoutDefaultHeaderItemTriggerDirective;
  }());
  LayoutDefaultHeaderItemTriggerDirective.decorators = [
      { type: core.Directive, args: [{
                  selector: '[layout-default-header-item-trigger]',
                  host: {
                      '[class.alain-default__nav-item]': "true",
                  },
              },] }
  ];

  /**
   * @fileoverview added by tsickle
   * Generated from: layout-header.component.ts
   * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
   */
  /**
   * @record
   */
  function LayoutDefaultHeaderItem() { }
  if (false) {
      /** @type {?} */
      LayoutDefaultHeaderItem.prototype.host;
      /** @type {?|undefined} */
      LayoutDefaultHeaderItem.prototype.hidden;
      /** @type {?|undefined} */
      LayoutDefaultHeaderItem.prototype.direction;
  }
  var LayoutDefaultHeaderComponent = /** @class */ (function () {
      /**
       * @param {?} settings
       * @param {?} parent
       * @param {?} cdr
       */
      function LayoutDefaultHeaderComponent(settings, parent, cdr) {
          this.settings = settings;
          this.parent = parent;
          this.cdr = cdr;
          this.unsubscribe$ = new rxjs.Subject();
          this.left = [];
          this.middle = [];
          this.right = [];
      }
      Object.defineProperty(LayoutDefaultHeaderComponent.prototype, "options", {
          /**
           * @return {?}
           */
          get: function () {
              return this.parent.options;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(LayoutDefaultHeaderComponent.prototype, "app", {
          /**
           * @return {?}
           */
          get: function () {
              return this.settings.app;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(LayoutDefaultHeaderComponent.prototype, "collapsed", {
          /**
           * @return {?}
           */
          get: function () {
              return this.settings.layout.collapsed;
          },
          enumerable: false,
          configurable: true
      });
      /**
       * @private
       * @return {?}
       */
      LayoutDefaultHeaderComponent.prototype.refresh = function () {
          /** @type {?} */
          var arr = this.parent.headerItems.toArray();
          this.left = arr.filter(( /**
           * @param {?} i
           * @return {?}
           */function (/**
           * @param {?} i
           * @return {?}
           */ i) { return i.direction === 'left'; }));
          this.middle = arr.filter(( /**
           * @param {?} i
           * @return {?}
           */function (/**
           * @param {?} i
           * @return {?}
           */ i) { return i.direction === 'middle'; }));
          this.right = arr.filter(( /**
           * @param {?} i
           * @return {?}
           */function (/**
           * @param {?} i
           * @return {?}
           */ i) { return i.direction === 'right'; }));
          this.cdr.detectChanges();
      };
      /**
       * @return {?}
       */
      LayoutDefaultHeaderComponent.prototype.ngAfterViewInit = function () {
          var _this = this;
          this.parent.headerItems.changes.pipe(operators.takeUntil(this.unsubscribe$)).subscribe(( /**
           * @return {?}
           */function () { return _this.refresh(); }));
          this.refresh();
      };
      /**
       * @return {?}
       */
      LayoutDefaultHeaderComponent.prototype.toggleCollapsed = function () {
          this.settings.setLayout('collapsed', !this.settings.layout.collapsed);
      };
      /**
       * @return {?}
       */
      LayoutDefaultHeaderComponent.prototype.ngOnDestroy = function () {
          var unsubscribe$ = this.unsubscribe$;
          unsubscribe$.next();
          unsubscribe$.complete();
      };
      return LayoutDefaultHeaderComponent;
  }());
  LayoutDefaultHeaderComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'layout-default-header',
                  template: "\n    <ng-template #render let-ls>\n      <li *ngFor=\"let i of ls\" [class.hidden-mobile]=\"i.hidden === 'mobile'\" [class.hidden-pc]=\"i.hidden === 'pc'\">\n        <ng-container *ngTemplateOutlet=\"i.host\"></ng-container>\n      </li>\n    </ng-template>\n    <div class=\"alain-default__header-logo\">\n      <a [routerLink]=\"['/']\" class=\"alain-default__header-logo-link\">\n        <img class=\"alain-default__header-logo-expanded\" [attr.src]=\"options.logoExpanded\" [attr.alt]=\"app.name\" style=\"max-height: 40px\" />\n        <img\n          class=\"alain-default__header-logo-collapsed\"\n          [attr.src]=\"options.logoCollapsed\"\n          [attr.alt]=\"app.name\"\n          style=\"max-height: 30px\"\n        />\n      </a>\n    </div>\n    <div class=\"alain-default__nav-wrap\">\n      <ul class=\"alain-default__nav\">\n        <li>\n          <div class=\"alain-default__nav-item\" (click)=\"toggleCollapsed()\">\n            <i nz-icon nzType=\"menu-{{ collapsed ? 'unfold' : 'fold' }}\"></i>\n          </div>\n        </li>\n        <ng-template [ngTemplateOutlet]=\"render\" [ngTemplateOutletContext]=\"{ $implicit: left }\"></ng-template>\n      </ul>\n      <div *ngIf=\"middle.length > 0\" class=\"alain-default__nav alain-default__nav-middle\">\n        <ng-container *ngTemplateOutlet=\"middle[0].host\"></ng-container>\n      </div>\n      <ul class=\"alain-default__nav\">\n        <ng-template [ngTemplateOutlet]=\"render\" [ngTemplateOutletContext]=\"{ $implicit: right }\"></ng-template>\n      </ul>\n    </div>\n  ",
                  host: {
                      '[class.alain-default__header]': "true",
                  },
                  changeDetection: core.ChangeDetectionStrategy.OnPush
              }] }
  ];
  /** @nocollapse */
  LayoutDefaultHeaderComponent.ctorParameters = function () { return [
      { type: theme.SettingsService },
      { type: LayoutDefaultComponent },
      { type: core.ChangeDetectorRef }
  ]; };
  if (false) {
      /**
       * @type {?}
       * @private
       */
      LayoutDefaultHeaderComponent.prototype.unsubscribe$;
      /** @type {?} */
      LayoutDefaultHeaderComponent.prototype.left;
      /** @type {?} */
      LayoutDefaultHeaderComponent.prototype.middle;
      /** @type {?} */
      LayoutDefaultHeaderComponent.prototype.right;
      /**
       * @type {?}
       * @private
       */
      LayoutDefaultHeaderComponent.prototype.settings;
      /**
       * @type {?}
       * @private
       */
      LayoutDefaultHeaderComponent.prototype.parent;
      /**
       * @type {?}
       * @private
       */
      LayoutDefaultHeaderComponent.prototype.cdr;
  }

  /**
   * @fileoverview added by tsickle
   * Generated from: layout-nav.component.ts
   * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
   */
  /**
   * @record
   */
  function Nav() { }
  if (false) {
      /** @type {?|undefined} */
      Nav.prototype._needIcon;
      /** @type {?|undefined} */
      Nav.prototype._text;
  }
  /** @type {?} */
  var SHOWCLS = 'sidebar-nav__floating-show';
  /** @type {?} */
  var FLOATINGCLS = 'sidebar-nav__floating';
  var LayoutDefaultNavComponent = /** @class */ (function () {
      /**
       * @param {?} menuSrv
       * @param {?} settings
       * @param {?} router
       * @param {?} render
       * @param {?} cdr
       * @param {?} ngZone
       * @param {?} sanitizer
       * @param {?} doc
       * @param {?} win
       */
      function LayoutDefaultNavComponent(menuSrv, settings, router, render, cdr, ngZone, sanitizer, doc, win) {
          this.menuSrv = menuSrv;
          this.settings = settings;
          this.router = router;
          this.render = render;
          this.cdr = cdr;
          this.ngZone = ngZone;
          this.sanitizer = sanitizer;
          this.doc = doc;
          this.win = win;
          this.unsubscribe$ = new rxjs.Subject();
          this.list = [];
          this.disabledAcl = false;
          this.autoCloseUnderPad = true;
          this.recursivePath = true;
          this.openStrictly = false;
          this.maxLevelIcon = 3;
          // tslint:disable-next-line:no-output-native
          this.select = new core.EventEmitter();
      }
      Object.defineProperty(LayoutDefaultNavComponent.prototype, "collapsed", {
          /**
           * @return {?}
           */
          get: function () {
              return this.settings.layout.collapsed;
          },
          enumerable: false,
          configurable: true
      });
      /**
       * @private
       * @param {?} node
       * @return {?}
       */
      LayoutDefaultNavComponent.prototype.getLinkNode = function (node) {
          node = node.nodeName === 'A' ? node : (( /** @type {?} */(node.parentNode)));
          return node.nodeName !== 'A' ? null : node;
      };
      /**
       * @private
       * @param {?} e
       * @return {?}
       */
      LayoutDefaultNavComponent.prototype.floatingClickHandle = function (e) {
          e.stopPropagation();
          /** @type {?} */
          var linkNode = this.getLinkNode(( /** @type {?} */(e.target)));
          if (linkNode == null) {
              return false;
          }
          /** @type {?} */
          var id = +( /** @type {?} */(( /** @type {?} */(linkNode.dataset)).id));
          // Should be ingore children title trigger event
          if (isNaN(id)) {
              return false;
          }
          /** @type {?} */
          var item;
          this.menuSrv.visit(this.list, ( /**
           * @param {?} i
           * @return {?}
           */function (i) {
              if (!item && i._id === id) {
                  item = i;
              }
          }));
          this.to(( /** @type {?} */(item)));
          this.hideAll();
          e.preventDefault();
          return false;
      };
      /**
       * @private
       * @return {?}
       */
      LayoutDefaultNavComponent.prototype.clearFloating = function () {
          if (!this.floatingEl)
              return;
          this.floatingEl.removeEventListener('click', this.floatingClickHandle.bind(this));
          // fix ie: https://github.com/ng-alain/delon/issues/52
          if (this.floatingEl.hasOwnProperty('remove')) {
              this.floatingEl.remove();
          }
          else if (this.floatingEl.parentNode) {
              this.floatingEl.parentNode.removeChild(this.floatingEl);
          }
      };
      /**
       * @private
       * @return {?}
       */
      LayoutDefaultNavComponent.prototype.genFloating = function () {
          this.clearFloating();
          this.floatingEl = this.render.createElement('div');
          this.floatingEl.classList.add(FLOATINGCLS + '-container');
          this.floatingEl.addEventListener('click', this.floatingClickHandle.bind(this), false);
          this.bodyEl.appendChild(this.floatingEl);
      };
      /**
       * @private
       * @param {?} linkNode
       * @param {?} item
       * @return {?}
       */
      LayoutDefaultNavComponent.prototype.genSubNode = function (linkNode, item) {
          /** @type {?} */
          var id = "_sidebar-nav-" + item._id;
          /** @type {?} */
          var childNode = item.badge ? ( /** @type {?} */(( /** @type {?} */(linkNode.nextElementSibling)).nextElementSibling)) : ( /** @type {?} */(linkNode.nextElementSibling));
          /** @type {?} */
          var node = ( /** @type {?} */(childNode.cloneNode(true)));
          node.id = id;
          node.classList.add(FLOATINGCLS);
          node.addEventListener('mouseleave', ( /**
           * @return {?}
           */function () {
              node.classList.remove(SHOWCLS);
          }), false);
          this.floatingEl.appendChild(node);
          return node;
      };
      /**
       * @private
       * @return {?}
       */
      LayoutDefaultNavComponent.prototype.hideAll = function () {
          /** @type {?} */
          var allNode = this.floatingEl.querySelectorAll('.' + FLOATINGCLS);
          // tslint:disable-next-line:prefer-for-of
          for (var i = 0; i < allNode.length; i++) {
              allNode[i].classList.remove(SHOWCLS);
          }
      };
      // calculate the node position values.
      /**
       * @private
       * @param {?} linkNode
       * @param {?} node
       * @return {?}
       */
      LayoutDefaultNavComponent.prototype.calPos = function (linkNode, node) {
          /** @type {?} */
          var rect = linkNode.getBoundingClientRect();
          // bug: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/14721015/
          /** @type {?} */
          var scrollTop = Math.max(this.doc.documentElement.scrollTop, this.bodyEl.scrollTop);
          /** @type {?} */
          var docHeight = Math.max(this.doc.documentElement.clientHeight, this.bodyEl.clientHeight);
          /** @type {?} */
          var spacing = 5;
          /** @type {?} */
          var offsetHeight = -spacing;
          if (docHeight < rect.top + node.clientHeight) {
              offsetHeight = rect.top + node.clientHeight - docHeight + spacing;
          }
          node.style.top = rect.top + scrollTop - offsetHeight + "px";
          node.style.left = rect.right + spacing + "px";
      };
      /**
       * @param {?} e
       * @param {?} item
       * @return {?}
       */
      LayoutDefaultNavComponent.prototype.showSubMenu = function (e, item) {
          var _this = this;
          if (this.collapsed !== true) {
              return;
          }
          this.ngZone.runOutsideAngular(( /**
           * @return {?}
           */function () {
              e.preventDefault();
              /** @type {?} */
              var linkNode = ( /** @type {?} */(e.target));
              _this.genFloating();
              /** @type {?} */
              var subNode = _this.genSubNode(( /** @type {?} */(linkNode)), item);
              _this.hideAll();
              subNode.classList.add(SHOWCLS);
              _this.calPos(( /** @type {?} */(linkNode)), subNode);
          }));
      };
      /**
       * @param {?} item
       * @return {?}
       */
      LayoutDefaultNavComponent.prototype.to = function (item) {
          var _this = this;
          this.select.emit(item);
          if (item.disabled)
              return;
          if (item.externalLink) {
              if (item.target === '_blank') {
                  this.win.open(item.externalLink);
              }
              else {
                  this.win.location.href = item.externalLink;
              }
              return;
          }
          this.ngZone.run(( /**
           * @return {?}
           */function () { return _this.router.navigateByUrl(( /** @type {?} */(item.link))); }));
      };
      /**
       * @param {?} item
       * @return {?}
       */
      LayoutDefaultNavComponent.prototype.toggleOpen = function (item) {
          if (!this.openStrictly) {
              this.menuSrv.visit(this.list, ( /**
               * @param {?} i
               * @return {?}
               */function (i) {
                  if (i !== item)
                      i._open = false;
              }));
              /** @type {?} */
              var pItem = ( /** @type {?} */(item._parent));
              while (pItem) {
                  pItem._open = true;
                  pItem = ( /** @type {?} */(pItem._parent));
              }
          }
          item._open = !item._open;
          this.cdr.markForCheck();
      };
      /**
       * @return {?}
       */
      LayoutDefaultNavComponent.prototype._click = function () {
          if (this.isPad && this.collapsed) {
              this.openAside(false);
              this.hideAll();
          }
      };
      /**
       * @return {?}
       */
      LayoutDefaultNavComponent.prototype._docClick = function () {
          if (this.collapsed) {
              this.hideAll();
          }
      };
      /**
       * @private
       * @param {?} url
       * @return {?}
       */
      LayoutDefaultNavComponent.prototype.openedByUrl = function (url) {
          var _a = this, menuSrv = _a.menuSrv, recursivePath = _a.recursivePath, openStrictly = _a.openStrictly;
          /** @type {?} */
          var findItem = menuSrv.getHit(this.menuSrv.menus, ( /** @type {?} */(url)), recursivePath, ( /**
           * @param {?} i
           * @return {?}
           */function (i) {
              i._selected = false;
              if (!openStrictly) {
                  i._open = false;
              }
          }));
          if (findItem == null)
              return;
          do {
              findItem._selected = true;
              if (!openStrictly) {
                  findItem._open = true;
              }
              findItem = ( /** @type {?} */(findItem._parent));
          } while (findItem);
      };
      /**
       * @return {?}
       */
      LayoutDefaultNavComponent.prototype.ngOnInit = function () {
          var _this = this;
          var _a = this, doc = _a.doc, router$1 = _a.router, unsubscribe$ = _a.unsubscribe$, menuSrv = _a.menuSrv, settings = _a.settings, cdr = _a.cdr;
          this.bodyEl = doc.querySelector('body');
          this.openedByUrl(router$1.url);
          this.ngZone.runOutsideAngular(( /**
           * @return {?}
           */function () { return _this.genFloating(); }));
          menuSrv.change.pipe(operators.takeUntil(unsubscribe$)).subscribe(( /**
           * @param {?} data
           * @return {?}
           */function (/**
           * @param {?} data
           * @return {?}
           */ data) {
              menuSrv.visit(data, ( /**
               * @param {?} i
               * @param {?} _p
               * @param {?} depth
               * @return {?}
               */function (i, _p, depth) {
                  i._text = _this.sanitizer.bypassSecurityTrustHtml(( /** @type {?} */(i.text)));
                  i._needIcon = ( /** @type {?} */(depth)) <= _this.maxLevelIcon && !!i.icon;
                  if (!i._aclResult) {
                      if (_this.disabledAcl) {
                          i.disabled = true;
                      }
                      else {
                          i._hidden = true;
                      }
                  }
                  if (_this.openStrictly) {
                      i._open = i.open != null ? i.open : false;
                  }
              }));
              _this.list = menuSrv.menus.filter(( /**
               * @param {?} w
               * @return {?}
               */function (w) { return w._hidden !== true; }));
              cdr.detectChanges();
          }));
          router$1.events.pipe(operators.takeUntil(unsubscribe$)).subscribe(( /**
           * @param {?} e
           * @return {?}
           */function (/**
           * @param {?} e
           * @return {?}
           */ e) {
              if (e instanceof router.NavigationEnd) {
                  _this.openedByUrl(e.urlAfterRedirects);
                  _this.underPad();
                  _this.cdr.detectChanges();
              }
          }));
          settings.notify
              .pipe(operators.takeUntil(unsubscribe$), operators.filter(( /**
       * @param {?} t
       * @return {?}
       */function (/**
       * @param {?} t
       * @return {?}
       */ t) { return t.type === 'layout' && t.name === 'collapsed'; })))
              .subscribe(( /**
       * @return {?}
       */function () { return _this.clearFloating(); }));
          this.underPad();
      };
      /**
       * @return {?}
       */
      LayoutDefaultNavComponent.prototype.ngOnDestroy = function () {
          var unsubscribe$ = this.unsubscribe$;
          unsubscribe$.next();
          unsubscribe$.complete();
          this.clearFloating();
      };
      Object.defineProperty(LayoutDefaultNavComponent.prototype, "isPad", {
          // #region Under pad
          /**
           * @private
           * @return {?}
           */
          get: function () {
              return window.innerWidth < 768;
          },
          enumerable: false,
          configurable: true
      });
      /**
       * @private
       * @return {?}
       */
      LayoutDefaultNavComponent.prototype.underPad = function () {
          var _this = this;
          if (this.autoCloseUnderPad && this.isPad && !this.collapsed) {
              setTimeout(( /**
               * @return {?}
               */function () { return _this.openAside(true); }));
          }
      };
      /**
       * @private
       * @param {?} status
       * @return {?}
       */
      LayoutDefaultNavComponent.prototype.openAside = function (status) {
          this.settings.setLayout('collapsed', status);
      };
      return LayoutDefaultNavComponent;
  }());
  LayoutDefaultNavComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'layout-default-nav',
                  template: "<ng-template #icon let-i>\n  <ng-container *ngIf=\"i\" [ngSwitch]=\"i.type\">\n    <i\n      *ngSwitchCase=\"'icon'\"\n      class=\"sidebar-nav__item-icon\"\n      nz-icon\n      [nzType]=\"i.value\"\n      [nzTheme]=\"i.theme\"\n      [nzSpin]=\"i.spin\"\n      [nzTwotoneColor]=\"i.twoToneColor\"\n      [nzIconfont]=\"i.iconfont\"\n      [nzRotate]=\"i.rotate\"\n    ></i>\n    <i *ngSwitchCase=\"'iconfont'\" class=\"sidebar-nav__item-icon\" nz-icon [nzIconfont]=\"i.iconfont\"></i>\n    <img *ngSwitchCase=\"'img'\" [src]=\"i.value\" class=\"sidebar-nav__item-icon sidebar-nav__item-img\" />\n    <i *ngSwitchDefault class=\"sidebar-nav__item-icon {{ i.value }}\"></i>\n  </ng-container>\n</ng-template>\n<ng-template #tree let-ls>\n  <ng-container *ngFor=\"let i of ls\">\n    <li *ngIf=\"i._hidden !== true\" class=\"sidebar-nav__item\" [class.sidebar-nav__selected]=\"i._selected\" [class.sidebar-nav__open]=\"i._open\">\n      <!-- link -->\n      <a\n        *ngIf=\"i.children.length === 0\"\n        (click)=\"to(i)\"\n        [attr.data-id]=\"i._id\"\n        class=\"sidebar-nav__item-link\"\n        [ngClass]=\"{ 'sidebar-nav__item-disabled': i.disabled }\"\n      >\n        <ng-container *ngIf=\"i._needIcon\">\n          <ng-container *ngIf=\"!collapsed\">\n            <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{ $implicit: i.icon }\"></ng-template>\n          </ng-container>\n          <span *ngIf=\"collapsed\" nz-tooltip nzTooltipPlacement=\"right\" [nzTooltipTitle]=\"i.text\">\n            <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{ $implicit: i.icon }\"></ng-template>\n          </span>\n        </ng-container>\n        <span class=\"sidebar-nav__item-text\" [innerHTML]=\"i._text\" [attr.title]=\"i.text\"></span>\n      </a>\n      <!-- has children link -->\n      <a *ngIf=\"i.children.length > 0\" (click)=\"toggleOpen(i)\" (mouseenter)=\"showSubMenu($event, i)\" class=\"sidebar-nav__item-link\">\n        <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{ $implicit: i.icon }\"></ng-template>\n        <span class=\"sidebar-nav__item-text\" [innerHTML]=\"i._text\" [attr.title]=\"i.text\"></span>\n        <i class=\"sidebar-nav__sub-arrow\"></i>\n      </a>\n      <!-- badge -->\n      <div *ngIf=\"i.badge\" [attr.title]=\"i.badge\" class=\"badge badge-{{ i.badgeStatus }}\" [class.badge-dot]=\"i.badgeDot\">\n        <em>{{ i.badge }}</em>\n      </div>\n      <ul *ngIf=\"i.children.length > 0\" class=\"sidebar-nav sidebar-nav__sub sidebar-nav__depth{{ i._depth }}\">\n        <ng-template [ngTemplateOutlet]=\"tree\" [ngTemplateOutletContext]=\"{ $implicit: i.children }\"></ng-template>\n      </ul>\n    </li>\n  </ng-container>\n</ng-template>\n<ul class=\"sidebar-nav\">\n  <ng-container *ngFor=\"let group of list\">\n    <li class=\"sidebar-nav__item sidebar-nav__group-title\" *ngIf=\"group.group\">\n      <span [innerHTML]=\"group._text\"></span>\n    </li>\n    <ng-template [ngTemplateOutlet]=\"tree\" [ngTemplateOutletContext]=\"{ $implicit: group.children }\"></ng-template>\n  </ng-container>\n</ul>\n",
                  host: {
                      '(click)': '_click()',
                      '(document:click)': '_docClick()',
                  },
                  preserveWhitespaces: false,
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  encapsulation: core.ViewEncapsulation.None
              }] }
  ];
  /** @nocollapse */
  LayoutDefaultNavComponent.ctorParameters = function () { return [
      { type: theme.MenuService },
      { type: theme.SettingsService },
      { type: router.Router },
      { type: core.Renderer2 },
      { type: core.ChangeDetectorRef },
      { type: core.NgZone },
      { type: platformBrowser.DomSanitizer },
      { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
      { type: Window, decorators: [{ type: core.Inject, args: [theme.WINDOW,] }] }
  ]; };
  LayoutDefaultNavComponent.propDecorators = {
      disabledAcl: [{ type: core.Input }],
      autoCloseUnderPad: [{ type: core.Input }],
      recursivePath: [{ type: core.Input }],
      openStrictly: [{ type: core.Input }],
      maxLevelIcon: [{ type: core.Input }],
      select: [{ type: core.Output }]
  };
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], LayoutDefaultNavComponent.prototype, "disabledAcl", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], LayoutDefaultNavComponent.prototype, "autoCloseUnderPad", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], LayoutDefaultNavComponent.prototype, "recursivePath", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], LayoutDefaultNavComponent.prototype, "openStrictly", void 0);
  __decorate([
      util.InputNumber(),
      __metadata("design:type", Object)
  ], LayoutDefaultNavComponent.prototype, "maxLevelIcon", void 0);
  if (false) {
      /** @type {?} */
      LayoutDefaultNavComponent.ngAcceptInputType_disabledAcl;
      /** @type {?} */
      LayoutDefaultNavComponent.ngAcceptInputType_autoCloseUnderPad;
      /** @type {?} */
      LayoutDefaultNavComponent.ngAcceptInputType_recursivePath;
      /** @type {?} */
      LayoutDefaultNavComponent.ngAcceptInputType_openStrictly;
      /** @type {?} */
      LayoutDefaultNavComponent.ngAcceptInputType_maxLevelIcon;
      /**
       * @type {?}
       * @private
       */
      LayoutDefaultNavComponent.prototype.bodyEl;
      /**
       * @type {?}
       * @private
       */
      LayoutDefaultNavComponent.prototype.unsubscribe$;
      /**
       * @type {?}
       * @private
       */
      LayoutDefaultNavComponent.prototype.floatingEl;
      /** @type {?} */
      LayoutDefaultNavComponent.prototype.list;
      /** @type {?} */
      LayoutDefaultNavComponent.prototype.disabledAcl;
      /** @type {?} */
      LayoutDefaultNavComponent.prototype.autoCloseUnderPad;
      /** @type {?} */
      LayoutDefaultNavComponent.prototype.recursivePath;
      /** @type {?} */
      LayoutDefaultNavComponent.prototype.openStrictly;
      /** @type {?} */
      LayoutDefaultNavComponent.prototype.maxLevelIcon;
      /** @type {?} */
      LayoutDefaultNavComponent.prototype.select;
      /**
       * @type {?}
       * @private
       */
      LayoutDefaultNavComponent.prototype.menuSrv;
      /**
       * @type {?}
       * @private
       */
      LayoutDefaultNavComponent.prototype.settings;
      /**
       * @type {?}
       * @private
       */
      LayoutDefaultNavComponent.prototype.router;
      /**
       * @type {?}
       * @private
       */
      LayoutDefaultNavComponent.prototype.render;
      /**
       * @type {?}
       * @private
       */
      LayoutDefaultNavComponent.prototype.cdr;
      /**
       * @type {?}
       * @private
       */
      LayoutDefaultNavComponent.prototype.ngZone;
      /**
       * @type {?}
       * @private
       */
      LayoutDefaultNavComponent.prototype.sanitizer;
      /**
       * @type {?}
       * @private
       */
      LayoutDefaultNavComponent.prototype.doc;
      /**
       * @type {?}
       * @private
       */
      LayoutDefaultNavComponent.prototype.win;
  }

  /** @type {?} */
  var COMPONENTS = [
      LayoutDefaultComponent,
      LayoutDefaultNavComponent,
      LayoutDefaultHeaderComponent,
      LayoutDefaultHeaderItemComponent,
      LayoutDefaultHeaderItemTriggerDirective,
  ];
  var LayoutDefaultModule = /** @class */ (function () {
      function LayoutDefaultModule() {
      }
      return LayoutDefaultModule;
  }());
  LayoutDefaultModule.decorators = [
      { type: core.NgModule, args: [{
                  imports: [common.CommonModule, router.RouterModule, tooltip.NzToolTipModule, icon.NzIconModule, avatar.NzAvatarModule, dropdown.NzDropDownModule],
                  declarations: __spread(COMPONENTS),
                  exports: __spread(COMPONENTS),
              },] }
  ];

  /**
   * @fileoverview added by tsickle
   * Generated from: public_api.ts
   * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
   */

  /**
   * @fileoverview added by tsickle
   * Generated from: layout-default.ts
   * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
   */

  exports.LayoutDefaultComponent = LayoutDefaultComponent;
  exports.LayoutDefaultHeaderComponent = LayoutDefaultHeaderComponent;
  exports.LayoutDefaultHeaderItemComponent = LayoutDefaultHeaderItemComponent;
  exports.LayoutDefaultHeaderItemTriggerDirective = LayoutDefaultHeaderItemTriggerDirective;
  exports.LayoutDefaultModule = LayoutDefaultModule;
  exports.LayoutDefaultNavComponent = LayoutDefaultNavComponent;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=layout-default.umd.js.map
