/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DelonACLConfig } from './acl.config';
import * as i0 from "@angular/core";
import * as i1 from "./acl.config";
/**
 * 访问控制服务
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
        if (typeof val !== 'string' && !Array.isArray(val)) {
            return (/** @type {?} */ (val));
        }
        if (Array.isArray(val)) {
            return (/** @type {?} */ ({ role: (/** @type {?} */ (val)) }));
        }
        return (/** @type {?} */ ({
            role: [val],
        }));
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
            (_a = this.roles).push.apply(_a, tslib_1.__spread(value.role));
        }
        if (value.ability && value.ability.length > 0) {
            (_b = this.abilities).push.apply(_b, tslib_1.__spread(value.ability));
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
            for (var roles_1 = tslib_1.__values(roles), roles_1_1 = roles_1.next(); !roles_1_1.done; roles_1_1 = roles_1.next()) {
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
            for (var abilities_1 = tslib_1.__values(abilities), abilities_1_1 = abilities_1.next(); !abilities_1_1.done; abilities_1_1 = abilities_1.next()) {
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
            for (var roles_2 = tslib_1.__values(roles), roles_2_1 = roles_2.next(); !roles_2_1.done; roles_2_1 = roles_2.next()) {
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
            for (var abilities_2 = tslib_1.__values(abilities), abilities_2_1 = abilities_2.next(); !abilities_2_1.done; abilities_2_1 = abilities_2.next()) {
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
        if (this.full === true || !roleOrAbility) {
            return true;
        }
        var preCan = this.options.preCan;
        if (preCan) {
            roleOrAbility = preCan(roleOrAbility);
        }
        /** @type {?} */
        var t = { except: false };
        if (typeof roleOrAbility === 'number') {
            t = tslib_1.__assign({}, t, { ability: [roleOrAbility] });
        }
        else if (Array.isArray(roleOrAbility) && roleOrAbility.length > 0 && typeof roleOrAbility[0] === 'number') {
            t = tslib_1.__assign({}, t, { ability: roleOrAbility });
        }
        else {
            t = tslib_1.__assign({}, t, this.parseACLType(roleOrAbility));
        }
        /** @type {?} */
        var result = false;
        if (t.role) {
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
        if (t.ability) {
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
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ACLService.ctorParameters = function () { return [
        { type: DelonACLConfig }
    ]; };
    /** @nocollapse */ ACLService.ngInjectableDef = i0.defineInjectable({ factory: function ACLService_Factory() { return new ACLService(i0.inject(i1.DelonACLConfig)); }, token: ACLService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWNsLyIsInNvdXJjZXMiOlsic3JjL2FjbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7OztBQU05QztJQXFCRSxvQkFBb0IsT0FBdUI7UUFBdkIsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFuQm5DLFVBQUssR0FBYSxFQUFFLENBQUM7UUFDckIsY0FBUyxHQUEyQixFQUFFLENBQUM7UUFDdkMsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUNiLGNBQVMsR0FBRyxJQUFJLGVBQWUsQ0FBMkIsSUFBSSxDQUFDLENBQUM7SUFnQjFCLENBQUM7SUFiL0Msc0JBQUksOEJBQU07UUFEVixjQUFjOzs7OztRQUNkO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3ZDLENBQUM7OztPQUFBO0lBR0Qsc0JBQUksNEJBQUk7UUFEUixhQUFhOzs7OztRQUNiO1lBQ0UsT0FBTztnQkFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7Z0JBQ2YsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO2dCQUNqQixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7YUFDMUIsQ0FBQztRQUNKLENBQUM7OztPQUFBOzs7Ozs7SUFJTyxpQ0FBWTs7Ozs7SUFBcEIsVUFBcUIsR0FBdUM7UUFDMUQsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2xELE9BQU8sbUJBQUEsR0FBRyxFQUFXLENBQUM7U0FDdkI7UUFDRCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FB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QVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7Z0JBTnpCLGNBQWM7OztxQkFGdkI7Q0FrTUMsQUExTEQsSUEwTEM7U0F6TFksVUFBVTs7Ozs7O0lBQ3JCLDJCQUE2Qjs7Ozs7SUFDN0IsK0JBQStDOzs7OztJQUMvQywwQkFBcUI7Ozs7O0lBQ3JCLCtCQUF3RTs7Ozs7SUFnQjVELDZCQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRGVsb25BQ0xDb25maWcgfSBmcm9tICcuL2FjbC5jb25maWcnO1xuaW1wb3J0IHsgQUNMQ2FuVHlwZSwgQUNMVHlwZSB9IGZyb20gJy4vYWNsLnR5cGUnO1xuXG4vKipcbiAqIOiuv+mXruaOp+WItuacjeWKoVxuICovXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEFDTFNlcnZpY2Uge1xuICBwcml2YXRlIHJvbGVzOiBzdHJpbmdbXSA9IFtdO1xuICBwcml2YXRlIGFiaWxpdGllczogQXJyYXk8bnVtYmVyIHwgc3RyaW5nPiA9IFtdO1xuICBwcml2YXRlIGZ1bGwgPSBmYWxzZTtcbiAgcHJpdmF0ZSBhY2xDaGFuZ2UgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEFDTFR5cGUgfCBib29sZWFuIHwgbnVsbD4obnVsbCk7XG5cbiAgLyoqIEFDTOWPmOabtOmAmuefpSAqL1xuICBnZXQgY2hhbmdlKCk6IE9ic2VydmFibGU8QUNMVHlwZSB8IGJvb2xlYW4gfCBudWxsPiB7XG4gICAgcmV0dXJuIHRoaXMuYWNsQ2hhbmdlLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgLyoqIOiOt+WPluaJgOacieaVsOaNriAqL1xuICBnZXQgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZnVsbDogdGhpcy5mdWxsLFxuICAgICAgcm9sZXM6IHRoaXMucm9sZXMsXG4gICAgICBhYmlsaXRpZXM6IHRoaXMuYWJpbGl0aWVzLFxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG9wdGlvbnM6IERlbG9uQUNMQ29uZmlnKSB7fVxuXG4gIHByaXZhdGUgcGFyc2VBQ0xUeXBlKHZhbDogc3RyaW5nIHwgc3RyaW5nW10gfCBBQ0xUeXBlIHwgbnVsbCk6IEFDTFR5cGUge1xuICAgIGlmICh0eXBlb2YgdmFsICE9PSAnc3RyaW5nJyAmJiAhQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgICByZXR1cm4gdmFsIGFzIEFDTFR5cGU7XG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICAgIHJldHVybiB7IHJvbGU6IHZhbCBhcyBzdHJpbmdbXSB9IGFzIEFDTFR5cGU7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICByb2xlOiBbdmFsXSxcbiAgICB9IGFzIEFDTFR5cGU7XG4gIH1cblxuICAvKipcbiAgICog6K6+572u5b2T5YmN55So5oi36KeS6Imy5oiW5p2D6ZmQ6IO95Yqb77yI5Lya5YWI5riF6Zmk5omA5pyJ77yJXG4gICAqL1xuICBzZXQodmFsdWU6IEFDTFR5cGUpIHtcbiAgICB0aGlzLmFiaWxpdGllcyA9IFtdO1xuICAgIHRoaXMucm9sZXMgPSBbXTtcbiAgICB0aGlzLmFkZCh2YWx1ZSk7XG4gICAgdGhpcy5hY2xDaGFuZ2UubmV4dCh2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICog5qCH6K+G5b2T5YmN55So5oi35Li65YWo6YeP77yM5Y2z5LiN5Y+X6ZmQXG4gICAqL1xuICBzZXRGdWxsKHZhbDogYm9vbGVhbikge1xuICAgIHRoaXMuZnVsbCA9IHZhbDtcbiAgICB0aGlzLmFjbENoYW5nZS5uZXh0KHZhbCk7XG4gIH1cblxuICAvKipcbiAgICog6K6+572u5b2T5YmN55So5oi35p2D6ZmQ6IO95Yqb77yI5Lya5YWI5riF6Zmk5omA5pyJ77yJXG4gICAqL1xuICBzZXRBYmlsaXR5KGFiaWxpdGllczogQXJyYXk8bnVtYmVyIHwgc3RyaW5nPikge1xuICAgIHRoaXMuc2V0KHsgYWJpbGl0eTogYWJpbGl0aWVzIH0gYXMgQUNMVHlwZSk7XG4gIH1cblxuICAvKipcbiAgICog6K6+572u5b2T5YmN55So5oi36KeS6Imy77yI5Lya5YWI5riF6Zmk5omA5pyJ77yJXG4gICAqL1xuICBzZXRSb2xlKHJvbGVzOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuc2V0KHsgcm9sZTogcm9sZXMgfSBhcyBBQ0xUeXBlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDkuLrlvZPliY3nlKjmiLflop7liqDop5LoibLmiJbmnYPpmZDog73liptcbiAgICovXG4gIGFkZCh2YWx1ZTogQUNMVHlwZSkge1xuICAgIGlmICh2YWx1ZS5yb2xlICYmIHZhbHVlLnJvbGUubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5yb2xlcy5wdXNoKC4uLnZhbHVlLnJvbGUpO1xuICAgIH1cbiAgICBpZiAodmFsdWUuYWJpbGl0eSAmJiB2YWx1ZS5hYmlsaXR5Lmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuYWJpbGl0aWVzLnB1c2goLi4udmFsdWUuYWJpbGl0eSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOS4uuW9k+WJjeeUqOaIt+mZhOWKoOinkuiJslxuICAgKi9cbiAgYXR0YWNoUm9sZShyb2xlczogc3RyaW5nW10pIHtcbiAgICBmb3IgKGNvbnN0IHZhbCBvZiByb2xlcykge1xuICAgICAgaWYgKCF0aGlzLnJvbGVzLmluY2x1ZGVzKHZhbCkpIHtcbiAgICAgICAgdGhpcy5yb2xlcy5wdXNoKHZhbCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuYWNsQ2hhbmdlLm5leHQodGhpcy5kYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDkuLrlvZPliY3nlKjmiLfpmYTliqDmnYPpmZBcbiAgICovXG4gIGF0dGFjaEFiaWxpdHkoYWJpbGl0aWVzOiBBcnJheTxudW1iZXIgfCBzdHJpbmc+KSB7XG4gICAgZm9yIChjb25zdCB2YWwgb2YgYWJpbGl0aWVzKSB7XG4gICAgICBpZiAoIXRoaXMuYWJpbGl0aWVzLmluY2x1ZGVzKHZhbCkpIHtcbiAgICAgICAgdGhpcy5hYmlsaXRpZXMucHVzaCh2YWwpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmFjbENoYW5nZS5uZXh0KHRoaXMuZGF0YSk7XG4gIH1cblxuICAvKipcbiAgICog5Li65b2T5YmN55So5oi356e76Zmk6KeS6ImyXG4gICAqL1xuICByZW1vdmVSb2xlKHJvbGVzOiBzdHJpbmdbXSkge1xuICAgIGZvciAoY29uc3QgdmFsIG9mIHJvbGVzKSB7XG4gICAgICBjb25zdCBpZHggPSB0aGlzLnJvbGVzLmluZGV4T2YodmFsKTtcbiAgICAgIGlmIChpZHggIT09IC0xKSB7XG4gICAgICAgIHRoaXMucm9sZXMuc3BsaWNlKGlkeCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuYWNsQ2hhbmdlLm5leHQodGhpcy5kYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDkuLrlvZPliY3nlKjmiLfnp7vpmaTmnYPpmZBcbiAgICovXG4gIHJlbW92ZUFiaWxpdHkoYWJpbGl0aWVzOiBBcnJheTxudW1iZXIgfCBzdHJpbmc+KSB7XG4gICAgZm9yIChjb25zdCB2YWwgb2YgYWJpbGl0aWVzKSB7XG4gICAgICBjb25zdCBpZHggPSB0aGlzLmFiaWxpdGllcy5pbmRleE9mKHZhbCk7XG4gICAgICBpZiAoaWR4ICE9PSAtMSkge1xuICAgICAgICB0aGlzLmFiaWxpdGllcy5zcGxpY2UoaWR4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5hY2xDaGFuZ2UubmV4dCh0aGlzLmRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIOW9k+WJjeeUqOaIt+aYr+WQpuacieWvueW6lOinkuiJsu+8jOWFtuWuniBgbnVtYmVyYCDooajnpLpBYmlsaXR5XG4gICAqXG4gICAqIC0g5b2TIGBmdWxsOiB0cnVlYCDmiJblj4LmlbAgYG51bGxgIOaXtui/lOWbniBgdHJ1ZWBcbiAgICogLSDoi6Xkvb/nlKggYEFDTFR5cGVgIOWPguaVsO+8jOWPr+S7peaMh+WumiBgbW9kZWAg5qCh6aqM5qih5byPXG4gICAqL1xuICBjYW4ocm9sZU9yQWJpbGl0eTogQUNMQ2FuVHlwZSB8IG51bGwpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5mdWxsID09PSB0cnVlIHx8ICFyb2xlT3JBYmlsaXR5KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCB7IHByZUNhbiB9ID0gdGhpcy5vcHRpb25zO1xuICAgIGlmIChwcmVDYW4pIHtcbiAgICAgIHJvbGVPckFiaWxpdHkgPSBwcmVDYW4ocm9sZU9yQWJpbGl0eSk7XG4gICAgfVxuICAgIGxldCB0OiBBQ0xUeXBlID0geyBleGNlcHQ6IGZhbHNlIH07XG4gICAgaWYgKHR5cGVvZiByb2xlT3JBYmlsaXR5ID09PSAnbnVtYmVyJykge1xuICAgICAgdCA9IHsgLi4udCwgYWJpbGl0eTogW3JvbGVPckFiaWxpdHldIH07XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHJvbGVPckFiaWxpdHkpICYmIHJvbGVPckFiaWxpdHkubGVuZ3RoID4gMCAmJiB0eXBlb2Ygcm9sZU9yQWJpbGl0eVswXSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHQgPSB7IC4uLnQsIGFiaWxpdHk6IHJvbGVPckFiaWxpdHkgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdCA9IHsgLi4udCwgLi4udGhpcy5wYXJzZUFDTFR5cGUocm9sZU9yQWJpbGl0eSkgfTtcbiAgICB9XG5cbiAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XG4gICAgaWYgKHQucm9sZSkge1xuICAgICAgaWYgKHQubW9kZSA9PT0gJ2FsbE9mJykge1xuICAgICAgICByZXN1bHQgPSB0LnJvbGUuZXZlcnkodiA9PiB0aGlzLnJvbGVzLmluY2x1ZGVzKHYpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IHQucm9sZS5zb21lKHYgPT4gdGhpcy5yb2xlcy5pbmNsdWRlcyh2KSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0LmFiaWxpdHkpIHtcbiAgICAgIGlmICh0Lm1vZGUgPT09ICdhbGxPZicpIHtcbiAgICAgICAgcmVzdWx0ID0gKHQuYWJpbGl0eSBhcyBhbnlbXSkuZXZlcnkodiA9PiB0aGlzLmFiaWxpdGllcy5pbmNsdWRlcyh2KSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSAodC5hYmlsaXR5IGFzIGFueVtdKS5zb21lKHYgPT4gdGhpcy5hYmlsaXRpZXMuaW5jbHVkZXModikpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdC5leGNlcHQgPT09IHRydWUgPyAhcmVzdWx0IDogcmVzdWx0O1xuICB9XG5cbiAgLyoqIEBpbm5lciAqL1xuICBwYXJzZUFiaWxpdHkodmFsdWU6IEFDTENhblR5cGUpOiBBQ0xDYW5UeXBlIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnIHx8IEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZSA9IHsgYWJpbGl0eTogQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IFt2YWx1ZV0gfSBhcyBBQ0xUeXBlO1xuICAgIH1cbiAgICBkZWxldGUgdmFsdWUucm9sZTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICog5b2T5YmN55So5oi35piv5ZCm5pyJ5a+55bqU5p2D6ZmQ54K5XG4gICAqL1xuICBjYW5BYmlsaXR5KHZhbHVlOiBBQ0xDYW5UeXBlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY2FuKHRoaXMucGFyc2VBYmlsaXR5KHZhbHVlKSk7XG4gIH1cbn1cbiJdfQ==