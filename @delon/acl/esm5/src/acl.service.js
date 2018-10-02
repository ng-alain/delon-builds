/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
/**
 * 访问控制服务
 */
var ACLService = /** @class */ (function () {
    function ACLService() {
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
     * @param {?} val
     * @return {?}
     */
    ACLService.prototype.parseACLType = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        if (typeof val !== 'string' && !Array.isArray(val)) {
            return /** @type {?} */ (val);
        }
        if (Array.isArray(val)) {
            return /** @type {?} */ ({ role: /** @type {?} */ (val) });
        }
        return /** @type {?} */ ({
            role: [val],
        });
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
        this.set(/** @type {?} */ ({ ability: abilities }));
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
        this.set(/** @type {?} */ ({ role: roles }));
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
                return t.role.every(function (v) { return _this.roles.includes(v); });
            else
                return t.role.some(function (v) { return _this.roles.includes(v); });
        }
        if (t.ability) {
            if (t.mode === 'allOf')
                return (/** @type {?} */ (t.ability)).every(function (v) { return _this.abilities.includes(v); });
            else
                return (/** @type {?} */ (t.ability)).some(function (v) { return _this.abilities.includes(v); });
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
        if (typeof value === 'number' ||
            typeof value === 'string' ||
            Array.isArray(value)) {
            value = /** @type {?} */ ({ ability: Array.isArray(value) ? value : [value] });
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
    return ACLService;
}());
export { ACLService };
if (false) {
    /** @type {?} */
    ACLService.prototype.roles;
    /** @type {?} */
    ACLService.prototype.abilities;
    /** @type {?} */
    ACLService.prototype.full;
    /** @type {?} */
    ACLService.prototype.aclChange;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWNsLyIsInNvdXJjZXMiOlsic3JjL2FjbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7Ozs7cUJBUXZCLEVBQUU7eUJBQ2EsRUFBRTtvQkFDNUIsS0FBSzt5QkFDb0MsSUFBSSxlQUFlLENBRXpFLElBQUksQ0FBQzs7SUFHUCxzQkFBSSw4QkFBTTtRQURWLGNBQWM7Ozs7O1FBQ2Q7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDdEM7OztPQUFBO0lBR0Qsc0JBQUksNEJBQUk7UUFEUixhQUFhOzs7OztRQUNiO1lBQ0UsT0FBTztnQkFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7Z0JBQ2YsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO2dCQUNqQixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7YUFDMUIsQ0FBQztTQUNIOzs7T0FBQTs7Ozs7SUFFTyxpQ0FBWTs7OztjQUFDLEdBQWdDO1FBQ25ELElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNsRCx5QkFBZ0IsR0FBRyxFQUFDO1NBQ3JCO1FBQ0QsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3RCLHlCQUFnQixFQUFFLElBQUksb0JBQVksR0FBRyxDQUFBLEVBQUUsRUFBQztTQUN6QztRQUNELHlCQUFnQjtZQUNkLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQztTQUNaLEVBQUM7O0lBR0o7O09BRUc7Ozs7OztJQUNILHdCQUFHOzs7OztJQUFILFVBQUksS0FBYztRQUNoQixJQUFJLENBQUMsU0FBUyxHQUFH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LHFCQUFZLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFBLENBQUM7U0FDdEU7UUFDRCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFDbEIsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVEOztPQUVHOzs7Ozs7SUFDSCwrQkFBVTs7Ozs7SUFBVixVQUFXLEtBQWlCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7S0FDM0M7O2dCQXZMRixVQUFVOztxQkFQWDs7U0FRYSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQUNMVHlwZSwgQUNMQ2FuVHlwZSB9IGZyb20gJy4vYWNsLnR5cGUnO1xyXG5cclxuLyoqXHJcbiAqIOiuv+mXruaOp+WItuacjeWKoVxyXG4gKi9cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQUNMU2VydmljZSB7XHJcbiAgcHJpdmF0ZSByb2xlczogc3RyaW5nW10gPSBbXTtcclxuICBwcml2YXRlIGFiaWxpdGllczogKG51bWJlciB8IHN0cmluZylbXSA9IFtdO1xyXG4gIHByaXZhdGUgZnVsbCA9IGZhbHNlO1xyXG4gIHByaXZhdGUgYWNsQ2hhbmdlOiBCZWhhdmlvclN1YmplY3Q8QUNMVHlwZSB8IGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxcclxuICAgIEFDTFR5cGUgfCBib29sZWFuXHJcbiAgPihudWxsKTtcclxuXHJcbiAgLyoqIEFDTOWPmOabtOmAmuefpSAqL1xyXG4gIGdldCBjaGFuZ2UoKTogT2JzZXJ2YWJsZTxBQ0xUeXBlIHwgYm9vbGVhbj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuYWNsQ2hhbmdlLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqIOiOt+WPluaJgOacieaVsOaNriAqL1xyXG4gIGdldCBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZnVsbDogdGhpcy5mdWxsLFxyXG4gICAgICByb2xlczogdGhpcy5yb2xlcyxcclxuICAgICAgYWJpbGl0aWVzOiB0aGlzLmFiaWxpdGllcyxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHBhcnNlQUNMVHlwZSh2YWw6IHN0cmluZyB8IHN0cmluZ1tdIHwgQUNMVHlwZSk6IEFDTFR5cGUge1xyXG4gICAgaWYgKHR5cGVvZiB2YWwgIT09ICdzdHJpbmcnICYmICFBcnJheS5pc0FycmF5KHZhbCkpIHtcclxuICAgICAgcmV0dXJuIDxBQ0xUeXBlPnZhbDtcclxuICAgIH1cclxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcclxuICAgICAgcmV0dXJuIDxBQ0xUeXBlPnsgcm9sZTogPHN0cmluZ1tdPnZhbCB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIDxBQ0xUeXBlPntcclxuICAgICAgcm9sZTogW3ZhbF0sXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog6K6+572u5b2T5YmN55So5oi36KeS6Imy5oiW5p2D6ZmQ6IO95Yqb77yI5Lya5YWI5riF6Zmk5omA5pyJ77yJXHJcbiAgICovXHJcbiAgc2V0KHZhbHVlOiBBQ0xUeXBlKSB7XHJcbiAgICB0aGlzLmFiaWxpdGllcyA9IFtdO1xyXG4gICAgdGhpcy5yb2xlcyA9IFtdO1xyXG4gICAgdGhpcy5hZGQodmFsdWUpO1xyXG4gICAgdGhpcy5hY2xDaGFuZ2UubmV4dCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDmoIfor4blvZPliY3nlKjmiLfkuLrlhajph4/vvIzljbPkuI3lj5fpmZBcclxuICAgKi9cclxuICBzZXRGdWxsKHZhbDogYm9vbGVhbikge1xyXG4gICAgdGhpcy5mdWxsID0gdmFsO1xyXG4gICAgdGhpcy5hY2xDaGFuZ2UubmV4dCh2YWwpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog6K6+572u5b2T5YmN55So5oi35p2D6ZmQ6IO95Yqb77yI5Lya5YWI5riF6Zmk5omA5pyJ77yJXHJcbiAgICovXHJcbiAgc2V0QWJpbGl0eShhYmlsaXRpZXM6IChudW1iZXIgfCBzdHJpbmcpW10pIHtcclxuICAgIHRoaXMuc2V0KDxBQ0xUeXBlPnsgYWJpbGl0eTogYWJpbGl0aWVzIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog6K6+572u5b2T5YmN55So5oi36KeS6Imy77yI5Lya5YWI5riF6Zmk5omA5pyJ77yJXHJcbiAgICovXHJcbiAgc2V0Um9sZShyb2xlczogc3RyaW5nW10pIHtcclxuICAgIHRoaXMuc2V0KDxBQ0xUeXBlPnsgcm9sZTogcm9sZXMgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDkuLrlvZPliY3nlKjmiLflop7liqDop5LoibLmiJbmnYPpmZDog73liptcclxuICAgKi9cclxuICBhZGQodmFsdWU6IEFDTFR5cGUpIHtcclxuICAgIGlmICh2YWx1ZS5yb2xlICYmIHZhbHVlLnJvbGUubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLnJvbGVzLnB1c2goLi4udmFsdWUucm9sZSk7XHJcbiAgICB9XHJcbiAgICBpZiAodmFsdWUuYWJpbGl0eSAmJiB2YWx1ZS5hYmlsaXR5Lmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5hYmlsaXRpZXMucHVzaCguLi52YWx1ZS5hYmlsaXR5KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOS4uuW9k+WJjeeUqOaIt+mZhOWKoOinkuiJslxyXG4gICAqL1xyXG4gIGF0dGFjaFJvbGUocm9sZXM6IHN0cmluZ1tdKSB7XHJcbiAgICBmb3IgKGNvbnN0IHZhbCBvZiByb2xlcykge1xyXG4gICAgICBpZiAoIXRoaXMucm9sZXMuaW5jbHVkZXModmFsKSkge1xyXG4gICAgICAgIHRoaXMucm9sZXMucHVzaCh2YWwpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmFjbENoYW5nZS5uZXh0KHRoaXMuZGF0YSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDkuLrlvZPliY3nlKjmiLfpmYTliqDmnYPpmZBcclxuICAgKi9cclxuICBhdHRhY2hBYmlsaXR5KGFiaWxpdGllczogKG51bWJlciB8IHN0cmluZylbXSkge1xyXG4gICAgZm9yIChjb25zdCB2YWwgb2YgYWJpbGl0aWVzKSB7XHJcbiAgICAgIGlmICghdGhpcy5hYmlsaXRpZXMuaW5jbHVkZXModmFsKSkge1xyXG4gICAgICAgIHRoaXMuYWJpbGl0aWVzLnB1c2godmFsKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5hY2xDaGFuZ2UubmV4dCh0aGlzLmRhdGEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5Li65b2T5YmN55So5oi356e76Zmk6KeS6ImyXHJcbiAgICovXHJcbiAgcmVtb3ZlUm9sZShyb2xlczogc3RyaW5nW10pIHtcclxuICAgIGZvciAoY29uc3QgdmFsIG9mIHJvbGVzKSB7XHJcbiAgICAgIGNvbnN0IGlkeCA9IHRoaXMucm9sZXMuaW5kZXhPZih2YWwpO1xyXG4gICAgICBpZiAoaWR4ICE9PSAtMSkge1xyXG4gICAgICAgIHRoaXMucm9sZXMuc3BsaWNlKGlkeCwgMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuYWNsQ2hhbmdlLm5leHQodGhpcy5kYXRhKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOS4uuW9k+WJjeeUqOaIt+enu+mZpOadg+mZkFxyXG4gICAqL1xyXG4gIHJlbW92ZUFiaWxpdHkoYWJpbGl0aWVzOiAobnVtYmVyIHwgc3RyaW5nKVtdKSB7XHJcbiAgICBmb3IgKGNvbnN0IHZhbCBvZiBhYmlsaXRpZXMpIHtcclxuICAgICAgY29uc3QgaWR4ID0gdGhpcy5hYmlsaXRpZXMuaW5kZXhPZih2YWwpO1xyXG4gICAgICBpZiAoaWR4ICE9PSAtMSkge1xyXG4gICAgICAgIHRoaXMuYWJpbGl0aWVzLnNwbGljZShpZHgsIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmFjbENoYW5nZS5uZXh0KHRoaXMuZGF0YSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDlvZPliY3nlKjmiLfmmK/lkKbmnInlr7nlupTop5LoibLvvIzlhbblrp4gYG51bWJlcmAg6KGo56S6QWJpbGl0eVxyXG4gICAqXHJcbiAgICogLSDlvZMgYGZ1bGw6IHRydWVgIOaIluWPguaVsCBgbnVsbGAg5pe26L+U5ZueIGB0cnVlYFxyXG4gICAqIC0g6Iul5L2/55SoIGBBQ0xUeXBlYCDlj4LmlbDvvIzlj6/ku6XmjIflrpogYG1vZGVgIOagoemqjOaooeW8j1xyXG4gICAqL1xyXG4gIGNhbihyb2xlT3JBYmlsaXR5OiBBQ0xDYW5UeXBlKTogYm9vbGVhbiB7XHJcbiAgICBpZiAodGhpcy5mdWxsID09PSB0cnVlIHx8ICFyb2xlT3JBYmlsaXR5KSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCB0OiBBQ0xUeXBlID0ge307XHJcbiAgICBpZiAodHlwZW9mIHJvbGVPckFiaWxpdHkgPT09ICdudW1iZXInKSB7XHJcbiAgICAgIHQgPSB7IGFiaWxpdHk6IFtyb2xlT3JBYmlsaXR5XSB9O1xyXG4gICAgfSBlbHNlIGlmIChcclxuICAgICAgQXJyYXkuaXNBcnJheShyb2xlT3JBYmlsaXR5KSAmJlxyXG4gICAgICByb2xlT3JBYmlsaXR5Lmxlbmd0aCA+IDAgJiZcclxuICAgICAgdHlwZW9mIHJvbGVPckFiaWxpdHlbMF0gPT09ICdudW1iZXInXHJcbiAgICApIHtcclxuICAgICAgdCA9IHsgYWJpbGl0eTogcm9sZU9yQWJpbGl0eSB9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdCA9IHRoaXMucGFyc2VBQ0xUeXBlKHJvbGVPckFiaWxpdHkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0LnJvbGUpIHtcclxuICAgICAgaWYgKHQubW9kZSA9PT0gJ2FsbE9mJykgcmV0dXJuIHQucm9sZS5ldmVyeSh2ID0+IHRoaXMucm9sZXMuaW5jbHVkZXModikpO1xyXG4gICAgICBlbHNlIHJldHVybiB0LnJvbGUuc29tZSh2ID0+IHRoaXMucm9sZXMuaW5jbHVkZXModikpO1xyXG4gICAgfVxyXG4gICAgaWYgKHQuYWJpbGl0eSkge1xyXG4gICAgICBpZiAodC5tb2RlID09PSAnYWxsT2YnKVxyXG4gICAgICAgIHJldHVybiAodC5hYmlsaXR5IGFzIGFueVtdKS5ldmVyeSh2ID0+IHRoaXMuYWJpbGl0aWVzLmluY2x1ZGVzKHYpKTtcclxuICAgICAgZWxzZSByZXR1cm4gKHQuYWJpbGl0eSBhcyBhbnlbXSkuc29tZSh2ID0+IHRoaXMuYWJpbGl0aWVzLmluY2x1ZGVzKHYpKTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIC8qKiBAaW5uZXIgKi9cclxuICBwYXJzZUFiaWxpdHkodmFsdWU6IEFDTENhblR5cGUpOiBBQ0xDYW5UeXBlIHtcclxuICAgIGlmIChcclxuICAgICAgdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyB8fFxyXG4gICAgICB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnIHx8XHJcbiAgICAgIEFycmF5LmlzQXJyYXkodmFsdWUpXHJcbiAgICApIHtcclxuICAgICAgdmFsdWUgPSA8QUNMVHlwZT57IGFiaWxpdHk6IEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbdmFsdWVdIH07XHJcbiAgICB9XHJcbiAgICBkZWxldGUgdmFsdWUucm9sZTtcclxuICAgIHJldHVybiB2YWx1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOW9k+WJjeeUqOaIt+aYr+WQpuacieWvueW6lOadg+mZkOeCuVxyXG4gICAqL1xyXG4gIGNhbkFiaWxpdHkodmFsdWU6IEFDTENhblR5cGUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmNhbih0aGlzLnBhcnNlQWJpbGl0eSh2YWx1ZSkpO1xyXG4gIH1cclxufVxyXG4iXX0=