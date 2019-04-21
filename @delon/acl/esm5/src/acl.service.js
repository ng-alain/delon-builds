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
        var t = {};
        if (typeof roleOrAbility === 'number') {
            t = { ability: [roleOrAbility] };
        }
        else if (Array.isArray(roleOrAbility) &&
            roleOrAbility.length > 0 &&
            typeof roleOrAbility[0] === 'number') {
            t = { ability: roleOrAbility };
        }
        else {
            t = this.parseACLType(roleOrAbility);
        }
        if (t.role) {
            if (t.mode === 'allOf')
                return t.role.every((/**
                 * @param {?} v
                 * @return {?}
                 */
                function (v) { return _this.roles.includes(v); }));
            else
                return t.role.some((/**
                 * @param {?} v
                 * @return {?}
                 */
                function (v) { return _this.roles.includes(v); }));
        }
        if (t.ability) {
            if (t.mode === 'allOf') {
                return ((/** @type {?} */ (t.ability))).every((/**
                 * @param {?} v
                 * @return {?}
                 */
                function (v) { return _this.abilities.includes(v); }));
            }
            else {
                return ((/** @type {?} */ (t.ability))).some((/**
                 * @param {?} v
                 * @return {?}
                 */
                function (v) { return _this.abilities.includes(v); }));
            }
        }
        return false;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWNsLyIsInNvdXJjZXMiOlsic3JjL2FjbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7OztBQU05QztJQXFCRSxvQkFBb0IsT0FBdUI7UUFBdkIsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFuQm5DLFVBQUssR0FBYSxFQUFFLENBQUM7UUFDckIsY0FBUyxHQUEyQixFQUFFLENBQUM7UUFDdkMsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUNiLGNBQVMsR0FBRyxJQUFJLGVBQWUsQ0FBMkIsSUFBSSxDQUFDLENBQUM7SUFnQjFCLENBQUM7SUFiL0Msc0JBQUksOEJBQU07UUFEVixjQUFjOzs7OztRQUNkO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3ZDLENBQUM7OztPQUFBO0lBR0Qsc0JBQUksNEJBQUk7UUFEUixhQUFhOzs7OztRQUNiO1lBQ0UsT0FBTztnQkFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7Z0JBQ2YsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO2dCQUNqQixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7YUFDMUIsQ0FBQztRQUNKLENBQUM7OztPQUFBOzs7Ozs7SUFJTyxpQ0FBWTs7Ozs7SUFBcEIsVUFBcUIsR0FBdUM7UUFDMUQsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2xELE9BQU8sbUJBQUEsR0FBRyxFQUFXLENBQUM7U0FDdkI7UUFDRCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FB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c291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBEZWxvbkFDTENvbmZpZyB9IGZyb20gJy4vYWNsLmNvbmZpZyc7XG5pbXBvcnQgeyBBQ0xDYW5UeXBlLCBBQ0xUeXBlIH0gZnJvbSAnLi9hY2wudHlwZSc7XG5cbi8qKlxuICog6K6/6Zeu5o6n5Yi25pyN5YqhXG4gKi9cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQUNMU2VydmljZSB7XG4gIHByaXZhdGUgcm9sZXM6IHN0cmluZ1tdID0gW107XG4gIHByaXZhdGUgYWJpbGl0aWVzOiBBcnJheTxudW1iZXIgfCBzdHJpbmc+ID0gW107XG4gIHByaXZhdGUgZnVsbCA9IGZhbHNlO1xuICBwcml2YXRlIGFjbENoYW5nZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8QUNMVHlwZSB8IGJvb2xlYW4gfCBudWxsPihudWxsKTtcblxuICAvKiogQUNM5Y+Y5pu06YCa55+lICovXG4gIGdldCBjaGFuZ2UoKTogT2JzZXJ2YWJsZTxBQ0xUeXBlIHwgYm9vbGVhbiB8IG51bGw+IHtcbiAgICByZXR1cm4gdGhpcy5hY2xDaGFuZ2UuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICAvKiog6I635Y+W5omA5pyJ5pWw5o2uICovXG4gIGdldCBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBmdWxsOiB0aGlzLmZ1bGwsXG4gICAgICByb2xlczogdGhpcy5yb2xlcyxcbiAgICAgIGFiaWxpdGllczogdGhpcy5hYmlsaXRpZXMsXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgb3B0aW9uczogRGVsb25BQ0xDb25maWcpIHt9XG5cbiAgcHJpdmF0ZSBwYXJzZUFDTFR5cGUodmFsOiBzdHJpbmcgfCBzdHJpbmdbXSB8IEFDTFR5cGUgfCBudWxsKTogQUNMVHlwZSB7XG4gICAgaWYgKHR5cGVvZiB2YWwgIT09ICdzdHJpbmcnICYmICFBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICAgIHJldHVybiB2YWwgYXMgQUNMVHlwZTtcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgICAgcmV0dXJuIHsgcm9sZTogdmFsIGFzIHN0cmluZ1tdIH0gYXMgQUNMVHlwZTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHJvbGU6IFt2YWxdLFxuICAgIH0gYXMgQUNMVHlwZTtcbiAgfVxuXG4gIC8qKlxuICAgKiDorr7nva7lvZPliY3nlKjmiLfop5LoibLmiJbmnYPpmZDog73lipvvvIjkvJrlhYjmuIXpmaTmiYDmnInvvIlcbiAgICovXG4gIHNldCh2YWx1ZTogQUNMVHlwZSkge1xuICAgIHRoaXMuYWJpbGl0aWVzID0gW107XG4gICAgdGhpcy5yb2xlcyA9IFtdO1xuICAgIHRoaXMuYWRkKHZhbHVlKTtcbiAgICB0aGlzLmFjbENoYW5nZS5uZXh0KHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmoIfor4blvZPliY3nlKjmiLfkuLrlhajph4/vvIzljbPkuI3lj5fpmZBcbiAgICovXG4gIHNldEZ1bGwodmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy5mdWxsID0gdmFsO1xuICAgIHRoaXMuYWNsQ2hhbmdlLm5leHQodmFsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDorr7nva7lvZPliY3nlKjmiLfmnYPpmZDog73lipvvvIjkvJrlhYjmuIXpmaTmiYDmnInvvIlcbiAgICovXG4gIHNldEFiaWxpdHkoYWJpbGl0aWVzOiBBcnJheTxudW1iZXIgfCBzdHJpbmc+KSB7XG4gICAgdGhpcy5zZXQoeyBhYmlsaXR5OiBhYmlsaXRpZXMgfSBhcyBBQ0xUeXBlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDorr7nva7lvZPliY3nlKjmiLfop5LoibLvvIjkvJrlhYjmuIXpmaTmiYDmnInvvIlcbiAgICovXG4gIHNldFJvbGUocm9sZXM6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5zZXQoeyByb2xlOiByb2xlcyB9IGFzIEFDTFR5cGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIOS4uuW9k+WJjeeUqOaIt+WinuWKoOinkuiJsuaIluadg+mZkOiDveWKm1xuICAgKi9cbiAgYWRkKHZhbHVlOiBBQ0xUeXBlKSB7XG4gICAgaWYgKHZhbHVlLnJvbGUgJiYgdmFsdWUucm9sZS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnJvbGVzLnB1c2goLi4udmFsdWUucm9sZSk7XG4gICAgfVxuICAgIGlmICh2YWx1ZS5hYmlsaXR5ICYmIHZhbHVlLmFiaWxpdHkubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5hYmlsaXRpZXMucHVzaCguLi52YWx1ZS5hYmlsaXR5KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog5Li65b2T5YmN55So5oi36ZmE5Yqg6KeS6ImyXG4gICAqL1xuICBhdHRhY2hSb2xlKHJvbGVzOiBzdHJpbmdbXSkge1xuICAgIGZvciAoY29uc3QgdmFsIG9mIHJvbGVzKSB7XG4gICAgICBpZiAoIXRoaXMucm9sZXMuaW5jbHVkZXModmFsKSkge1xuICAgICAgICB0aGlzLnJvbGVzLnB1c2godmFsKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5hY2xDaGFuZ2UubmV4dCh0aGlzLmRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIOS4uuW9k+WJjeeUqOaIt+mZhOWKoOadg+mZkFxuICAgKi9cbiAgYXR0YWNoQWJpbGl0eShhYmlsaXRpZXM6IEFycmF5PG51bWJlciB8IHN0cmluZz4pIHtcbiAgICBmb3IgKGNvbnN0IHZhbCBvZiBhYmlsaXRpZXMpIHtcbiAgICAgIGlmICghdGhpcy5hYmlsaXRpZXMuaW5jbHVkZXModmFsKSkge1xuICAgICAgICB0aGlzLmFiaWxpdGllcy5wdXNoKHZhbCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuYWNsQ2hhbmdlLm5leHQodGhpcy5kYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDkuLrlvZPliY3nlKjmiLfnp7vpmaTop5LoibJcbiAgICovXG4gIHJlbW92ZVJvbGUocm9sZXM6IHN0cmluZ1tdKSB7XG4gICAgZm9yIChjb25zdCB2YWwgb2Ygcm9sZXMpIHtcbiAgICAgIGNvbnN0IGlkeCA9IHRoaXMucm9sZXMuaW5kZXhPZih2YWwpO1xuICAgICAgaWYgKGlkeCAhPT0gLTEpIHtcbiAgICAgICAgdGhpcy5yb2xlcy5zcGxpY2UoaWR4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5hY2xDaGFuZ2UubmV4dCh0aGlzLmRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIOS4uuW9k+WJjeeUqOaIt+enu+mZpOadg+mZkFxuICAgKi9cbiAgcmVtb3ZlQWJpbGl0eShhYmlsaXRpZXM6IEFycmF5PG51bWJlciB8IHN0cmluZz4pIHtcbiAgICBmb3IgKGNvbnN0IHZhbCBvZiBhYmlsaXRpZXMpIHtcbiAgICAgIGNvbnN0IGlkeCA9IHRoaXMuYWJpbGl0aWVzLmluZGV4T2YodmFsKTtcbiAgICAgIGlmIChpZHggIT09IC0xKSB7XG4gICAgICAgIHRoaXMuYWJpbGl0aWVzLnNwbGljZShpZHgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmFjbENoYW5nZS5uZXh0KHRoaXMuZGF0YSk7XG4gIH1cblxuICAvKipcbiAgICog5b2T5YmN55So5oi35piv5ZCm5pyJ5a+55bqU6KeS6Imy77yM5YW25a6eIGBudW1iZXJgIOihqOekukFiaWxpdHlcbiAgICpcbiAgICogLSDlvZMgYGZ1bGw6IHRydWVgIOaIluWPguaVsCBgbnVsbGAg5pe26L+U5ZueIGB0cnVlYFxuICAgKiAtIOiLpeS9v+eUqCBgQUNMVHlwZWAg5Y+C5pWw77yM5Y+v5Lul5oyH5a6aIGBtb2RlYCDmoKHpqozmqKHlvI9cbiAgICovXG4gIGNhbihyb2xlT3JBYmlsaXR5OiBBQ0xDYW5UeXBlIHwgbnVsbCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmZ1bGwgPT09IHRydWUgfHwgIXJvbGVPckFiaWxpdHkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IHsgcHJlQ2FuIH0gPSB0aGlzLm9wdGlvbnM7XG4gICAgaWYgKHByZUNhbikge1xuICAgICAgcm9sZU9yQWJpbGl0eSA9IHByZUNhbihyb2xlT3JBYmlsaXR5KTtcbiAgICB9XG4gICAgbGV0IHQ6IEFDTFR5cGUgPSB7fTtcbiAgICBpZiAodHlwZW9mIHJvbGVPckFiaWxpdHkgPT09ICdudW1iZXInKSB7XG4gICAgICB0ID0geyBhYmlsaXR5OiBbcm9sZU9yQWJpbGl0eV0gfTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgQXJyYXkuaXNBcnJheShyb2xlT3JBYmlsaXR5KSAmJlxuICAgICAgcm9sZU9yQWJpbGl0eS5sZW5ndGggPiAwICYmXG4gICAgICB0eXBlb2Ygcm9sZU9yQWJpbGl0eVswXSA9PT0gJ251bWJlcidcbiAgICApIHtcbiAgICAgIHQgPSB7IGFiaWxpdHk6IHJvbGVPckFiaWxpdHkgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdCA9IHRoaXMucGFyc2VBQ0xUeXBlKHJvbGVPckFiaWxpdHkpO1xuICAgIH1cblxuICAgIGlmICh0LnJvbGUpIHtcbiAgICAgIGlmICh0Lm1vZGUgPT09ICdhbGxPZicpIHJldHVybiB0LnJvbGUuZXZlcnkodiA9PiB0aGlzLnJvbGVzLmluY2x1ZGVzKHYpKTtcbiAgICAgIGVsc2UgcmV0dXJuIHQucm9sZS5zb21lKHYgPT4gdGhpcy5yb2xlcy5pbmNsdWRlcyh2KSk7XG4gICAgfVxuICAgIGlmICh0LmFiaWxpdHkpIHtcbiAgICAgIGlmICh0Lm1vZGUgPT09ICdhbGxPZicpIHtcbiAgICAgICAgcmV0dXJuICh0LmFiaWxpdHkgYXMgYW55W10pLmV2ZXJ5KHYgPT4gdGhpcy5hYmlsaXRpZXMuaW5jbHVkZXModikpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICh0LmFiaWxpdHkgYXMgYW55W10pLnNvbWUodiA9PiB0aGlzLmFiaWxpdGllcy5pbmNsdWRlcyh2KSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKiBAaW5uZXIgKi9cbiAgcGFyc2VBYmlsaXR5KHZhbHVlOiBBQ0xDYW5UeXBlKTogQUNMQ2FuVHlwZSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgfHwgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyB8fCBBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUgPSB7IGFiaWxpdHk6IEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbdmFsdWVdIH0gYXMgQUNMVHlwZTtcbiAgICB9XG4gICAgZGVsZXRlIHZhbHVlLnJvbGU7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIOW9k+WJjeeUqOaIt+aYr+WQpuacieWvueW6lOadg+mZkOeCuVxuICAgKi9cbiAgY2FuQWJpbGl0eSh2YWx1ZTogQUNMQ2FuVHlwZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNhbih0aGlzLnBhcnNlQWJpbGl0eSh2YWx1ZSkpO1xuICB9XG59XG4iXX0=