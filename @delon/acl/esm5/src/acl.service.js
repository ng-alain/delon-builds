/**
 * @fileoverview added by tsickle
 * Generated from: src/acl.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __assign, __read, __spread, __values } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DelonACLConfig } from './acl.config';
/**
 * ACL 控制服务，[在线文档](https://ng-alain.com/acl)
 *
 * 务必在根目录注册 `DelonACLModule.forRoot()` 才能使用服务
 */
var ACLService = /** @class */ (function () {
    function ACLService(options) {
        this.options = options;
        this.roles = [];
        this.abilities = [];
        this.full = false;
        this.aclChange = new BehaviorSubject(null);
    }
    Object.defineProperty(ACLService.prototype, "change", {
        /** ACL变更通知 */
        get: /**
         * ACL变更通知
         * @return {?}
         */
        function () {
            return this.aclChange.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ACLService.prototype, "data", {
        /** 获取所有数据 */
        get: /**
         * 获取所有数据
         * @return {?}
         */
        function () {
            return {
                full: this.full,
                roles: this.roles,
                abilities: this.abilities,
            };
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @param {?} val
     * @return {?}
     */
    ACLService.prototype.parseACLType = /**
     * @private
     * @param {?} val
     * @return {?}
     */
    function (val) {
        /** @type {?} */
        var t;
        if (typeof val === 'number') {
            t = { ability: [val] };
        }
        else if (Array.isArray(val) && val.length > 0 && typeof val[0] === 'number') {
            t = { ability: val };
        }
        else if (typeof val === 'object' && !Array.isArray(val)) {
            t = __assign({}, val);
        }
        else if (Array.isArray(val)) {
            t = { role: (/** @type {?} */ (val)) };
        }
        else {
            t = { role: val == null ? [] : [val] };
        }
        return __assign({ except: false }, t);
    };
    /**
     * 设置当前用户角色或权限能力（会先清除所有）
     */
    /**
     * 设置当前用户角色或权限能力（会先清除所有）
     * @param {?} value
     * @return {?}
     */
    ACLService.prototype.set = /**
     * 设置当前用户角色或权限能力（会先清除所有）
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.abilities = [];
        this.roles = [];
        this.add(value);
        this.aclChange.next(value);
    };
    /**
     * 标识当前用户为全量，即不受限
     */
    /**
     * 标识当前用户为全量，即不受限
     * @param {?} val
     * @return {?}
     */
    ACLService.prototype.setFull = /**
     * 标识当前用户为全量，即不受限
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.full = val;
        this.aclChange.next(val);
    };
    /**
     * 设置当前用户权限能力（会先清除所有）
     */
    /**
     * 设置当前用户权限能力（会先清除所有）
     * @param {?} abilities
     * @return {?}
     */
    ACLService.prototype.setAbility = /**
     * 设置当前用户权限能力（会先清除所有）
     * @param {?} abilities
     * @return {?}
     */
    function (abilities) {
        this.set((/** @type {?} */ ({ ability: abilities })));
    };
    /**
     * 设置当前用户角色（会先清除所有）
     */
    /**
     * 设置当前用户角色（会先清除所有）
     * @param {?} roles
     * @return {?}
     */
    ACLService.prototype.setRole = /**
     * 设置当前用户角色（会先清除所有）
     * @param {?} roles
     * @return {?}
     */
    function (roles) {
        this.set((/** @type {?} */ ({ role: roles })));
    };
    /**
     * 为当前用户增加角色或权限能力
     */
    /**
     * 为当前用户增加角色或权限能力
     * @param {?} value
     * @return {?}
     */
    ACLService.prototype.add = /**
     * 为当前用户增加角色或权限能力
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _a, _b;
        if (value.role && value.role.length > 0) {
            (_a = this.roles).push.apply(_a, __spread(value.role));
        }
        if (value.ability && value.ability.length > 0) {
            (_b = this.abilities).push.apply(_b, __spread(value.ability));
        }
    };
    /**
     * 为当前用户附加角色
     */
    /**
     * 为当前用户附加角色
     * @param {?} roles
     * @return {?}
     */
    ACLService.prototype.attachRole = /**
     * 为当前用户附加角色
     * @param {?} roles
     * @return {?}
     */
    function (roles) {
        var e_1, _a;
        try {
            for (var roles_1 = __values(roles), roles_1_1 = roles_1.next(); !roles_1_1.done; roles_1_1 = roles_1.next()) {
                var val = roles_1_1.value;
                if (!this.roles.includes(val)) {
                    this.roles.push(val);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (roles_1_1 && !roles_1_1.done && (_a = roles_1.return)) _a.call(roles_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.aclChange.next(this.data);
    };
    /**
     * 为当前用户附加权限
     */
    /**
     * 为当前用户附加权限
     * @param {?} abilities
     * @return {?}
     */
    ACLService.prototype.attachAbility = /**
     * 为当前用户附加权限
     * @param {?} abilities
     * @return {?}
     */
    function (abilities) {
        var e_2, _a;
        try {
            for (var abilities_1 = __values(abilities), abilities_1_1 = abilities_1.next(); !abilities_1_1.done; abilities_1_1 = abilities_1.next()) {
                var val = abilities_1_1.value;
                if (!this.abilities.includes(val)) {
                    this.abilities.push(val);
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (abilities_1_1 && !abilities_1_1.done && (_a = abilities_1.return)) _a.call(abilities_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        this.aclChange.next(this.data);
    };
    /**
     * 为当前用户移除角色
     */
    /**
     * 为当前用户移除角色
     * @param {?} roles
     * @return {?}
     */
    ACLService.prototype.removeRole = /**
     * 为当前用户移除角色
     * @param {?} roles
     * @return {?}
     */
    function (roles) {
        var e_3, _a;
        try {
            for (var roles_2 = __values(roles), roles_2_1 = roles_2.next(); !roles_2_1.done; roles_2_1 = roles_2.next()) {
                var val = roles_2_1.value;
                /** @type {?} */
                var idx = this.roles.indexOf(val);
                if (idx !== -1) {
                    this.roles.splice(idx, 1);
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (roles_2_1 && !roles_2_1.done && (_a = roles_2.return)) _a.call(roles_2);
            }
            finally { if (e_3) throw e_3.error; }
        }
        this.aclChange.next(this.data);
    };
    /**
     * 为当前用户移除权限
     */
    /**
     * 为当前用户移除权限
     * @param {?} abilities
     * @return {?}
     */
    ACLService.prototype.removeAbility = /**
     * 为当前用户移除权限
     * @param {?} abilities
     * @return {?}
     */
    function (abilities) {
        var e_4, _a;
        try {
            for (var abilities_2 = __values(abilities), abilities_2_1 = abilities_2.next(); !abilities_2_1.done; abilities_2_1 = abilities_2.next()) {
                var val = abilities_2_1.value;
                /** @type {?} */
                var idx = this.abilities.indexOf(val);
                if (idx !== -1) {
                    this.abilities.splice(idx, 1);
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (abilities_2_1 && !abilities_2_1.done && (_a = abilities_2.return)) _a.call(abilities_2);
            }
            finally { if (e_4) throw e_4.error; }
        }
        this.aclChange.next(this.data);
    };
    /**
     * 当前用户是否有对应角色，其实 `number` 表示Ability
     *
     * - 当 `full: true` 或参数 `null` 时返回 `true`
     * - 若使用 `ACLType` 参数，可以指定 `mode` 校验模式
     */
    /**
     * 当前用户是否有对应角色，其实 `number` 表示Ability
     *
     * - 当 `full: true` 或参数 `null` 时返回 `true`
     * - 若使用 `ACLType` 参数，可以指定 `mode` 校验模式
     * @param {?} roleOrAbility
     * @return {?}
     */
    ACLService.prototype.can = /**
     * 当前用户是否有对应角色，其实 `number` 表示Ability
     *
     * - 当 `full: true` 或参数 `null` 时返回 `true`
     * - 若使用 `ACLType` 参数，可以指定 `mode` 校验模式
     * @param {?} roleOrAbility
     * @return {?}
     */
    function (roleOrAbility) {
        var _this = this;
        var preCan = this.options.preCan;
        if (preCan) {
            roleOrAbility = preCan((/** @type {?} */ (roleOrAbility)));
        }
        /** @type {?} */
        var t = this.parseACLType(roleOrAbility);
        /** @type {?} */
        var result = false;
        if (this.full === true || !roleOrAbility) {
            result = true;
        }
        else {
            if (t.role && t.role.length > 0) {
                if (t.mode === 'allOf') {
                    result = t.role.every((/**
                     * @param {?} v
                     * @return {?}
                     */
                    function (v) { return _this.roles.includes(v); }));
                }
                else {
                    result = t.role.some((/**
                     * @param {?} v
                     * @return {?}
                     */
                    function (v) { return _this.roles.includes(v); }));
                }
            }
            if (t.ability && t.ability.length > 0) {
                if (t.mode === 'allOf') {
                    result = ((/** @type {?} */ (t.ability))).every((/**
                     * @param {?} v
                     * @return {?}
                     */
                    function (v) { return _this.abilities.includes(v); }));
                }
                else {
                    result = ((/** @type {?} */ (t.ability))).some((/**
                     * @param {?} v
                     * @return {?}
                     */
                    function (v) { return _this.abilities.includes(v); }));
                }
            }
        }
        return t.except === true ? !result : result;
    };
    /** @inner */
    /**
     * \@inner
     * @param {?} value
     * @return {?}
     */
    ACLService.prototype.parseAbility = /**
     * \@inner
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (typeof value === 'number' || typeof value === 'string' || Array.isArray(value)) {
            value = (/** @type {?} */ ({ ability: Array.isArray(value) ? value : [value] }));
        }
        delete value.role;
        return value;
    };
    /**
     * 当前用户是否有对应权限点
     */
    /**
     * 当前用户是否有对应权限点
     * @param {?} value
     * @return {?}
     */
    ACLService.prototype.canAbility = /**
     * 当前用户是否有对应权限点
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return this.can(this.parseAbility(value));
    };
    ACLService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ACLService.ctorParameters = function () { return [
        { type: DelonACLConfig }
    ]; };
    return ACLService;
}());
export { ACLService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ACLService.prototype.roles;
    /**
     * @type {?}
     * @private
     */
    ACLService.prototype.abilities;
    /**
     * @type {?}
     * @private
     */
    ACLService.prototype.full;
    /**
     * @type {?}
     * @private
     */
    ACLService.prototype.aclChange;
    /**
     * @type {?}
     * @private
     */
    ACLService.prototype.options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWNsLyIsInNvdXJjZXMiOlsic3JjL2FjbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7Ozs7QUFROUM7SUFxQkUsb0JBQW9CLE9BQXVCO1FBQXZCLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBbkJuQyxVQUFLLEdBQWEsRUFBRSxDQUFDO1FBQ3JCLGNBQVMsR0FBMkIsRUFBRSxDQUFDO1FBQ3ZDLFNBQUksR0FBRyxLQUFLLENBQUM7UUFDYixjQUFTLEdBQUcsSUFBSSxlQUFlLENBQTJCLElBQUksQ0FBQyxDQUFDO0lBZ0IxQixDQUFDO0lBYi9DLHNCQUFJLDhCQUFNO1FBRFYsY0FBYzs7Ozs7UUFDZDtZQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN2QyxDQUFDOzs7T0FBQTtJQUdELHNCQUFJLDRCQUFJO1FBRFIsYUFBYTs7Ozs7UUFDYjtZQUNFLE9BQU87Z0JBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO2dCQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztnQkFDakIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO2FBQzFCLENBQUM7UUFDSixDQUFDOzs7T0FBQTs7Ozs7O0lBSU8saUNBQVk7Ozs7O0lBQXBCLFVBQXFCLEdBQTJEOztZQUMxRSxDQUFVO1FBQ2QsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUU7WUFDM0IsQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztTQUN4QjthQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENB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Ozs7Ozs7SUFDSCwrQkFBVTs7Ozs7SUFBVixVQUFXLEtBQWlCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7Z0JBeExGLFVBQVU7Ozs7Z0JBUkYsY0FBYzs7SUFpTXZCLGlCQUFDO0NBQUEsQUF6TEQsSUF5TEM7U0F4TFksVUFBVTs7Ozs7O0lBQ3JCLDJCQUE2Qjs7Ozs7SUFDN0IsK0JBQStDOzs7OztJQUMvQywwQkFBcUI7Ozs7O0lBQ3JCLCtCQUF3RTs7Ozs7SUFnQjVELDZCQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRGVsb25BQ0xDb25maWcgfSBmcm9tICcuL2FjbC5jb25maWcnO1xuaW1wb3J0IHsgQUNMQ2FuVHlwZSwgQUNMVHlwZSB9IGZyb20gJy4vYWNsLnR5cGUnO1xuXG4vKipcbiAqIEFDTCDmjqfliLbmnI3liqHvvIxb5Zyo57q/5paH5qGjXShodHRwczovL25nLWFsYWluLmNvbS9hY2wpXG4gKlxuICog5Yqh5b+F5Zyo5qC555uu5b2V5rOo5YaMIGBEZWxvbkFDTE1vZHVsZS5mb3JSb290KClgIOaJjeiDveS9v+eUqOacjeWKoVxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQUNMU2VydmljZSB7XG4gIHByaXZhdGUgcm9sZXM6IHN0cmluZ1tdID0gW107XG4gIHByaXZhdGUgYWJpbGl0aWVzOiBBcnJheTxudW1iZXIgfCBzdHJpbmc+ID0gW107XG4gIHByaXZhdGUgZnVsbCA9IGZhbHNlO1xuICBwcml2YXRlIGFjbENoYW5nZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8QUNMVHlwZSB8IGJvb2xlYW4gfCBudWxsPihudWxsKTtcblxuICAvKiogQUNM5Y+Y5pu06YCa55+lICovXG4gIGdldCBjaGFuZ2UoKTogT2JzZXJ2YWJsZTxBQ0xUeXBlIHwgYm9vbGVhbiB8IG51bGw+IHtcbiAgICByZXR1cm4gdGhpcy5hY2xDaGFuZ2UuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICAvKiog6I635Y+W5omA5pyJ5pWw5o2uICovXG4gIGdldCBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBmdWxsOiB0aGlzLmZ1bGwsXG4gICAgICByb2xlczogdGhpcy5yb2xlcyxcbiAgICAgIGFiaWxpdGllczogdGhpcy5hYmlsaXRpZXMsXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgb3B0aW9uczogRGVsb25BQ0xDb25maWcpIHt9XG5cbiAgcHJpdmF0ZSBwYXJzZUFDTFR5cGUodmFsOiBzdHJpbmcgfCBzdHJpbmdbXSB8IG51bWJlciB8IG51bWJlcltdIHwgQUNMVHlwZSB8IG51bGwpOiBBQ0xUeXBlIHtcbiAgICBsZXQgdDogQUNMVHlwZTtcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICAgIHQgPSB7IGFiaWxpdHk6IFt2YWxdIH07XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbCkgJiYgdmFsLmxlbmd0aCA+IDAgJiYgdHlwZW9mIHZhbFswXSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHQgPSB7IGFiaWxpdHk6IHZhbCB9O1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgICAgdCA9IHsgLi4udmFsIH07XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICAgIHQgPSB7IHJvbGU6IHZhbCBhcyBzdHJpbmdbXSB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB0ID0geyByb2xlOiB2YWwgPT0gbnVsbCA/IFtdIDogW3ZhbF0gfTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBleGNlcHQ6IGZhbHNlLCAuLi50IH07XG4gIH1cblxuICAvKipcbiAgICog6K6+572u5b2T5YmN55So5oi36KeS6Imy5oiW5p2D6ZmQ6IO95Yqb77yI5Lya5YWI5riF6Zmk5omA5pyJ77yJXG4gICAqL1xuICBzZXQodmFsdWU6IEFDTFR5cGUpIHtcbiAgICB0aGlzLmFiaWxpdGllcyA9IFtdO1xuICAgIHRoaXMucm9sZXMgPSBbXTtcbiAgICB0aGlzLmFkZCh2YWx1ZSk7XG4gICAgdGhpcy5hY2xDaGFuZ2UubmV4dCh2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICog5qCH6K+G5b2T5YmN55So5oi35Li65YWo6YeP77yM5Y2z5LiN5Y+X6ZmQXG4gICAqL1xuICBzZXRGdWxsKHZhbDogYm9vbGVhbikge1xuICAgIHRoaXMuZnVsbCA9IHZhbDtcbiAgICB0aGlzLmFjbENoYW5nZS5uZXh0KHZhbCk7XG4gIH1cblxuICAvKipcbiAgICog6K6+572u5b2T5YmN55So5oi35p2D6ZmQ6IO95Yqb77yI5Lya5YWI5riF6Zmk5omA5pyJ77yJXG4gICAqL1xuICBzZXRBYmlsaXR5KGFiaWxpdGllczogQXJyYXk8bnVtYmVyIHwgc3RyaW5nPikge1xuICAgIHRoaXMuc2V0KHsgYWJpbGl0eTogYWJpbGl0aWVzIH0gYXMgQUNMVHlwZSk7XG4gIH1cblxuICAvKipcbiAgICog6K6+572u5b2T5YmN55So5oi36KeS6Imy77yI5Lya5YWI5riF6Zmk5omA5pyJ77yJXG4gICAqL1xuICBzZXRSb2xlKHJvbGVzOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuc2V0KHsgcm9sZTogcm9sZXMgfSBhcyBBQ0xUeXBlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDkuLrlvZPliY3nlKjmiLflop7liqDop5LoibLmiJbmnYPpmZDog73liptcbiAgICovXG4gIGFkZCh2YWx1ZTogQUNMVHlwZSkge1xuICAgIGlmICh2YWx1ZS5yb2xlICYmIHZhbHVlLnJvbGUubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5yb2xlcy5wdXNoKC4uLnZhbHVlLnJvbGUpO1xuICAgIH1cbiAgICBpZiAodmFsdWUuYWJpbGl0eSAmJiB2YWx1ZS5hYmlsaXR5Lmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuYWJpbGl0aWVzLnB1c2goLi4udmFsdWUuYWJpbGl0eSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOS4uuW9k+WJjeeUqOaIt+mZhOWKoOinkuiJslxuICAgKi9cbiAgYXR0YWNoUm9sZShyb2xlczogc3RyaW5nW10pIHtcbiAgICBmb3IgKGNvbnN0IHZhbCBvZiByb2xlcykge1xuICAgICAgaWYgKCF0aGlzLnJvbGVzLmluY2x1ZGVzKHZhbCkpIHtcbiAgICAgICAgdGhpcy5yb2xlcy5wdXNoKHZhbCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuYWNsQ2hhbmdlLm5leHQodGhpcy5kYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDkuLrlvZPliY3nlKjmiLfpmYTliqDmnYPpmZBcbiAgICovXG4gIGF0dGFjaEFiaWxpdHkoYWJpbGl0aWVzOiBBcnJheTxudW1iZXIgfCBzdHJpbmc+KSB7XG4gICAgZm9yIChjb25zdCB2YWwgb2YgYWJpbGl0aWVzKSB7XG4gICAgICBpZiAoIXRoaXMuYWJpbGl0aWVzLmluY2x1ZGVzKHZhbCkpIHtcbiAgICAgICAgdGhpcy5hYmlsaXRpZXMucHVzaCh2YWwpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmFjbENoYW5nZS5uZXh0KHRoaXMuZGF0YSk7XG4gIH1cblxuICAvKipcbiAgICog5Li65b2T5YmN55So5oi356e76Zmk6KeS6ImyXG4gICAqL1xuICByZW1vdmVSb2xlKHJvbGVzOiBzdHJpbmdbXSkge1xuICAgIGZvciAoY29uc3QgdmFsIG9mIHJvbGVzKSB7XG4gICAgICBjb25zdCBpZHggPSB0aGlzLnJvbGVzLmluZGV4T2YodmFsKTtcbiAgICAgIGlmIChpZHggIT09IC0xKSB7XG4gICAgICAgIHRoaXMucm9sZXMuc3BsaWNlKGlkeCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuYWNsQ2hhbmdlLm5leHQodGhpcy5kYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDkuLrlvZPliY3nlKjmiLfnp7vpmaTmnYPpmZBcbiAgICovXG4gIHJlbW92ZUFiaWxpdHkoYWJpbGl0aWVzOiBBcnJheTxudW1iZXIgfCBzdHJpbmc+KSB7XG4gICAgZm9yIChjb25zdCB2YWwgb2YgYWJpbGl0aWVzKSB7XG4gICAgICBjb25zdCBpZHggPSB0aGlzLmFiaWxpdGllcy5pbmRleE9mKHZhbCk7XG4gICAgICBpZiAoaWR4ICE9PSAtMSkge1xuICAgICAgICB0aGlzLmFiaWxpdGllcy5zcGxpY2UoaWR4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5hY2xDaGFuZ2UubmV4dCh0aGlzLmRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIOW9k+WJjeeUqOaIt+aYr+WQpuacieWvueW6lOinkuiJsu+8jOWFtuWuniBgbnVtYmVyYCDooajnpLpBYmlsaXR5XG4gICAqXG4gICAqIC0g5b2TIGBmdWxsOiB0cnVlYCDmiJblj4LmlbAgYG51bGxgIOaXtui/lOWbniBgdHJ1ZWBcbiAgICogLSDoi6Xkvb/nlKggYEFDTFR5cGVgIOWPguaVsO+8jOWPr+S7peaMh+WumiBgbW9kZWAg5qCh6aqM5qih5byPXG4gICAqL1xuICBjYW4ocm9sZU9yQWJpbGl0eTogQUNMQ2FuVHlwZSB8IG51bGwpOiBib29sZWFuIHtcbiAgICBjb25zdCB7IHByZUNhbiB9ID0gdGhpcy5vcHRpb25zO1xuICAgIGlmIChwcmVDYW4pIHtcbiAgICAgIHJvbGVPckFiaWxpdHkgPSBwcmVDYW4ocm9sZU9yQWJpbGl0eSEpO1xuICAgIH1cblxuICAgIGNvbnN0IHQgPSB0aGlzLnBhcnNlQUNMVHlwZShyb2xlT3JBYmlsaXR5KTtcbiAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XG4gICAgaWYgKHRoaXMuZnVsbCA9PT0gdHJ1ZSB8fCAhcm9sZU9yQWJpbGl0eSkge1xuICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHQucm9sZSAmJiB0LnJvbGUubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAodC5tb2RlID09PSAnYWxsT2YnKSB7XG4gICAgICAgICAgcmVzdWx0ID0gdC5yb2xlLmV2ZXJ5KHYgPT4gdGhpcy5yb2xlcy5pbmNsdWRlcyh2KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0ID0gdC5yb2xlLnNvbWUodiA9PiB0aGlzLnJvbGVzLmluY2x1ZGVzKHYpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHQuYWJpbGl0eSAmJiB0LmFiaWxpdHkubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAodC5tb2RlID09PSAnYWxsT2YnKSB7XG4gICAgICAgICAgcmVzdWx0ID0gKHQuYWJpbGl0eSBhcyBhbnlbXSkuZXZlcnkodiA9PiB0aGlzLmFiaWxpdGllcy5pbmNsdWRlcyh2KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0ID0gKHQuYWJpbGl0eSBhcyBhbnlbXSkuc29tZSh2ID0+IHRoaXMuYWJpbGl0aWVzLmluY2x1ZGVzKHYpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0LmV4Y2VwdCA9PT0gdHJ1ZSA/ICFyZXN1bHQgOiByZXN1bHQ7XG4gIH1cblxuICAvKiogQGlubmVyICovXG4gIHBhcnNlQWJpbGl0eSh2YWx1ZTogQUNMQ2FuVHlwZSk6IEFDTENhblR5cGUge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgfHwgQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlID0geyBhYmlsaXR5OiBBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogW3ZhbHVlXSB9IGFzIEFDTFR5cGU7XG4gICAgfVxuICAgIGRlbGV0ZSB2YWx1ZS5yb2xlO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiDlvZPliY3nlKjmiLfmmK/lkKbmnInlr7nlupTmnYPpmZDngrlcbiAgICovXG4gIGNhbkFiaWxpdHkodmFsdWU6IEFDTENhblR5cGUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jYW4odGhpcy5wYXJzZUFiaWxpdHkodmFsdWUpKTtcbiAgfVxufVxuIl19