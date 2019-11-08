/**
 * @fileoverview added by tsickle
 * Generated from: src/acl.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DelonACLConfig } from './acl.config';
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
        /** @type {?} */
        var t;
        if (typeof val === 'number') {
            t = { ability: [val] };
        }
        else if (Array.isArray(val) && val.length > 0 && typeof val[0] === 'number') {
            t = { ability: val };
        }
        else if (typeof val === 'object' && !Array.isArray(val)) {
            t = tslib_1.__assign({}, val);
        }
        else if (Array.isArray(val)) {
            t = { role: (/** @type {?} */ (val)) };
        }
        else {
            t = { role: val == null ? [] : [val] };
        }
        return tslib_1.__assign({ except: false }, t);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWNsLyIsInNvdXJjZXMiOlsic3JjL2FjbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7O0FBTTlDO0lBcUJFLG9CQUFvQixPQUF1QjtRQUF2QixZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQW5CbkMsVUFBSyxHQUFhLEVBQUUsQ0FBQztRQUNyQixjQUFTLEdBQTJCLEVBQUUsQ0FBQztRQUN2QyxTQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2IsY0FBUyxHQUFHLElBQUksZUFBZSxDQUEyQixJQUFJLENBQUMsQ0FBQztJQWdCMUIsQ0FBQztJQWIvQyxzQkFBSSw4QkFBTTtRQURWLGNBQWM7Ozs7O1FBQ2Q7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdkMsQ0FBQzs7O09BQUE7SUFHRCxzQkFBSSw0QkFBSTtRQURSLGFBQWE7Ozs7O1FBQ2I7WUFDRSxPQUFPO2dCQUNMLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtnQkFDZixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7Z0JBQ2pCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUzthQUMxQixDQUFDO1FBQ0osQ0FBQzs7O09BQUE7Ozs7OztJQUlPLGlDQUFZOzs7OztJQUFwQixVQUFxQixHQUEyRDs7WUFDMUUsQ0FBVTtRQUNkLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxFQUFFO1lBQzNCLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7U0FDeEI7YUFBTSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFD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RUc7Ozs7OztJQUNILCtCQUFVOzs7OztJQUFWLFVBQVcsS0FBaUI7UUFDMUIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUM1QyxDQUFDOztnQkF4TEYsVUFBVTs7OztnQkFORixjQUFjOztJQStMdkIsaUJBQUM7Q0FBQSxBQXpMRCxJQXlMQztTQXhMWSxVQUFVOzs7Ozs7SUFDckIsMkJBQTZCOzs7OztJQUM3QiwrQkFBK0M7Ozs7O0lBQy9DLDBCQUFxQjs7Ozs7SUFDckIsK0JBQXdFOzs7OztJQWdCNUQsNkJBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBEZWxvbkFDTENvbmZpZyB9IGZyb20gJy4vYWNsLmNvbmZpZyc7XG5pbXBvcnQgeyBBQ0xDYW5UeXBlLCBBQ0xUeXBlIH0gZnJvbSAnLi9hY2wudHlwZSc7XG5cbi8qKlxuICog6K6/6Zeu5o6n5Yi25pyN5YqhXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBQ0xTZXJ2aWNlIHtcbiAgcHJpdmF0ZSByb2xlczogc3RyaW5nW10gPSBbXTtcbiAgcHJpdmF0ZSBhYmlsaXRpZXM6IEFycmF5PG51bWJlciB8IHN0cmluZz4gPSBbXTtcbiAgcHJpdmF0ZSBmdWxsID0gZmFsc2U7XG4gIHByaXZhdGUgYWNsQ2hhbmdlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxBQ0xUeXBlIHwgYm9vbGVhbiB8IG51bGw+KG51bGwpO1xuXG4gIC8qKiBBQ0zlj5jmm7TpgJrnn6UgKi9cbiAgZ2V0IGNoYW5nZSgpOiBPYnNlcnZhYmxlPEFDTFR5cGUgfCBib29sZWFuIHwgbnVsbD4ge1xuICAgIHJldHVybiB0aGlzLmFjbENoYW5nZS5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIC8qKiDojrflj5bmiYDmnInmlbDmja4gKi9cbiAgZ2V0IGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZ1bGw6IHRoaXMuZnVsbCxcbiAgICAgIHJvbGVzOiB0aGlzLnJvbGVzLFxuICAgICAgYWJpbGl0aWVzOiB0aGlzLmFiaWxpdGllcyxcbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBvcHRpb25zOiBEZWxvbkFDTENvbmZpZykge31cblxuICBwcml2YXRlIHBhcnNlQUNMVHlwZSh2YWw6IHN0cmluZyB8IHN0cmluZ1tdIHwgbnVtYmVyIHwgbnVtYmVyW10gfCBBQ0xUeXBlIHwgbnVsbCk6IEFDTFR5cGUge1xuICAgIGxldCB0OiBBQ0xUeXBlO1xuICAgIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgICAgdCA9IHsgYWJpbGl0eTogW3ZhbF0gfTtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsKSAmJiB2YWwubGVuZ3RoID4gMCAmJiB0eXBlb2YgdmFsWzBdID09PSAnbnVtYmVyJykge1xuICAgICAgdCA9IHsgYWJpbGl0eTogdmFsIH07XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgICB0ID0geyAuLi52YWwgfTtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgICAgdCA9IHsgcm9sZTogdmFsIGFzIHN0cmluZ1tdIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHQgPSB7IHJvbGU6IHZhbCA9PSBudWxsID8gW10gOiBbdmFsXSB9O1xuICAgIH1cblxuICAgIHJldHVybiB7IGV4Y2VwdDogZmFsc2UsIC4uLnQgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiDorr7nva7lvZPliY3nlKjmiLfop5LoibLmiJbmnYPpmZDog73lipvvvIjkvJrlhYjmuIXpmaTmiYDmnInvvIlcbiAgICovXG4gIHNldCh2YWx1ZTogQUNMVHlwZSkge1xuICAgIHRoaXMuYWJpbGl0aWVzID0gW107XG4gICAgdGhpcy5yb2xlcyA9IFtdO1xuICAgIHRoaXMuYWRkKHZhbHVlKTtcbiAgICB0aGlzLmFjbENoYW5nZS5uZXh0KHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmoIfor4blvZPliY3nlKjmiLfkuLrlhajph4/vvIzljbPkuI3lj5fpmZBcbiAgICovXG4gIHNldEZ1bGwodmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy5mdWxsID0gdmFsO1xuICAgIHRoaXMuYWNsQ2hhbmdlLm5leHQodmFsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDorr7nva7lvZPliY3nlKjmiLfmnYPpmZDog73lipvvvIjkvJrlhYjmuIXpmaTmiYDmnInvvIlcbiAgICovXG4gIHNldEFiaWxpdHkoYWJpbGl0aWVzOiBBcnJheTxudW1iZXIgfCBzdHJpbmc+KSB7XG4gICAgdGhpcy5zZXQoeyBhYmlsaXR5OiBhYmlsaXRpZXMgfSBhcyBBQ0xUeXBlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDorr7nva7lvZPliY3nlKjmiLfop5LoibLvvIjkvJrlhYjmuIXpmaTmiYDmnInvvIlcbiAgICovXG4gIHNldFJvbGUocm9sZXM6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5zZXQoeyByb2xlOiByb2xlcyB9IGFzIEFDTFR5cGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIOS4uuW9k+WJjeeUqOaIt+WinuWKoOinkuiJsuaIluadg+mZkOiDveWKm1xuICAgKi9cbiAgYWRkKHZhbHVlOiBBQ0xUeXBlKSB7XG4gICAgaWYgKHZhbHVlLnJvbGUgJiYgdmFsdWUucm9sZS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnJvbGVzLnB1c2goLi4udmFsdWUucm9sZSk7XG4gICAgfVxuICAgIGlmICh2YWx1ZS5hYmlsaXR5ICYmIHZhbHVlLmFiaWxpdHkubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5hYmlsaXRpZXMucHVzaCguLi52YWx1ZS5hYmlsaXR5KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog5Li65b2T5YmN55So5oi36ZmE5Yqg6KeS6ImyXG4gICAqL1xuICBhdHRhY2hSb2xlKHJvbGVzOiBzdHJpbmdbXSkge1xuICAgIGZvciAoY29uc3QgdmFsIG9mIHJvbGVzKSB7XG4gICAgICBpZiAoIXRoaXMucm9sZXMuaW5jbHVkZXModmFsKSkge1xuICAgICAgICB0aGlzLnJvbGVzLnB1c2godmFsKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5hY2xDaGFuZ2UubmV4dCh0aGlzLmRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIOS4uuW9k+WJjeeUqOaIt+mZhOWKoOadg+mZkFxuICAgKi9cbiAgYXR0YWNoQWJpbGl0eShhYmlsaXRpZXM6IEFycmF5PG51bWJlciB8IHN0cmluZz4pIHtcbiAgICBmb3IgKGNvbnN0IHZhbCBvZiBhYmlsaXRpZXMpIHtcbiAgICAgIGlmICghdGhpcy5hYmlsaXRpZXMuaW5jbHVkZXModmFsKSkge1xuICAgICAgICB0aGlzLmFiaWxpdGllcy5wdXNoKHZhbCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuYWNsQ2hhbmdlLm5leHQodGhpcy5kYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDkuLrlvZPliY3nlKjmiLfnp7vpmaTop5LoibJcbiAgICovXG4gIHJlbW92ZVJvbGUocm9sZXM6IHN0cmluZ1tdKSB7XG4gICAgZm9yIChjb25zdCB2YWwgb2Ygcm9sZXMpIHtcbiAgICAgIGNvbnN0IGlkeCA9IHRoaXMucm9sZXMuaW5kZXhPZih2YWwpO1xuICAgICAgaWYgKGlkeCAhPT0gLTEpIHtcbiAgICAgICAgdGhpcy5yb2xlcy5zcGxpY2UoaWR4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5hY2xDaGFuZ2UubmV4dCh0aGlzLmRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIOS4uuW9k+WJjeeUqOaIt+enu+mZpOadg+mZkFxuICAgKi9cbiAgcmVtb3ZlQWJpbGl0eShhYmlsaXRpZXM6IEFycmF5PG51bWJlciB8IHN0cmluZz4pIHtcbiAgICBmb3IgKGNvbnN0IHZhbCBvZiBhYmlsaXRpZXMpIHtcbiAgICAgIGNvbnN0IGlkeCA9IHRoaXMuYWJpbGl0aWVzLmluZGV4T2YodmFsKTtcbiAgICAgIGlmIChpZHggIT09IC0xKSB7XG4gICAgICAgIHRoaXMuYWJpbGl0aWVzLnNwbGljZShpZHgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmFjbENoYW5nZS5uZXh0KHRoaXMuZGF0YSk7XG4gIH1cblxuICAvKipcbiAgICog5b2T5YmN55So5oi35piv5ZCm5pyJ5a+55bqU6KeS6Imy77yM5YW25a6eIGBudW1iZXJgIOihqOekukFiaWxpdHlcbiAgICpcbiAgICogLSDlvZMgYGZ1bGw6IHRydWVgIOaIluWPguaVsCBgbnVsbGAg5pe26L+U5ZueIGB0cnVlYFxuICAgKiAtIOiLpeS9v+eUqCBgQUNMVHlwZWAg5Y+C5pWw77yM5Y+v5Lul5oyH5a6aIGBtb2RlYCDmoKHpqozmqKHlvI9cbiAgICovXG4gIGNhbihyb2xlT3JBYmlsaXR5OiBBQ0xDYW5UeXBlIHwgbnVsbCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHsgcHJlQ2FuIH0gPSB0aGlzLm9wdGlvbnM7XG4gICAgaWYgKHByZUNhbikge1xuICAgICAgcm9sZU9yQWJpbGl0eSA9IHByZUNhbihyb2xlT3JBYmlsaXR5ISk7XG4gICAgfVxuXG4gICAgY29uc3QgdCA9IHRoaXMucGFyc2VBQ0xUeXBlKHJvbGVPckFiaWxpdHkpO1xuICAgIGxldCByZXN1bHQgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5mdWxsID09PSB0cnVlIHx8ICFyb2xlT3JBYmlsaXR5KSB7XG4gICAgICByZXN1bHQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodC5yb2xlICYmIHQucm9sZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGlmICh0Lm1vZGUgPT09ICdhbGxPZicpIHtcbiAgICAgICAgICByZXN1bHQgPSB0LnJvbGUuZXZlcnkodiA9PiB0aGlzLnJvbGVzLmluY2x1ZGVzKHYpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHQgPSB0LnJvbGUuc29tZSh2ID0+IHRoaXMucm9sZXMuaW5jbHVkZXModikpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodC5hYmlsaXR5ICYmIHQuYWJpbGl0eS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGlmICh0Lm1vZGUgPT09ICdhbGxPZicpIHtcbiAgICAgICAgICByZXN1bHQgPSAodC5hYmlsaXR5IGFzIGFueVtdKS5ldmVyeSh2ID0+IHRoaXMuYWJpbGl0aWVzLmluY2x1ZGVzKHYpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHQgPSAodC5hYmlsaXR5IGFzIGFueVtdKS5zb21lKHYgPT4gdGhpcy5hYmlsaXRpZXMuaW5jbHVkZXModikpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHQuZXhjZXB0ID09PSB0cnVlID8gIXJlc3VsdCA6IHJlc3VsdDtcbiAgfVxuXG4gIC8qKiBAaW5uZXIgKi9cbiAgcGFyc2VBYmlsaXR5KHZhbHVlOiBBQ0xDYW5UeXBlKTogQUNMQ2FuVHlwZSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgfHwgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyB8fCBBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUgPSB7IGFiaWxpdHk6IEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbdmFsdWVdIH0gYXMgQUNMVHlwZTtcbiAgICB9XG4gICAgZGVsZXRlIHZhbHVlLnJvbGU7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIOW9k+WJjeeUqOaIt+aYr+WQpuacieWvueW6lOadg+mZkOeCuVxuICAgKi9cbiAgY2FuQWJpbGl0eSh2YWx1ZTogQUNMQ2FuVHlwZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNhbih0aGlzLnBhcnNlQWJpbGl0eSh2YWx1ZSkpO1xuICB9XG59XG4iXX0=