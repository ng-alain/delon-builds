/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWNsLyIsInNvdXJjZXMiOlsic3JjL2FjbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7QUFNOUM7SUFxQkUsb0JBQW9CLE9BQXVCO1FBQXZCLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBbkJuQyxVQUFLLEdBQWEsRUFBRSxDQUFDO1FBQ3JCLGNBQVMsR0FBMkIsRUFBRSxDQUFDO1FBQ3ZDLFNBQUksR0FBRyxLQUFLLENBQUM7UUFDYixjQUFTLEdBQUcsSUFBSSxlQUFlLENBQTJCLElBQUksQ0FBQyxDQUFDO0lBZ0IxQixDQUFDO0lBYi9DLHNCQUFJLDhCQUFNO1FBRFYsY0FBYzs7Ozs7UUFDZDtZQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN2QyxDQUFDOzs7T0FBQTtJQUdELHNCQUFJLDRCQUFJO1FBRFIsYUFBYTs7Ozs7UUFDYjtZQUNFLE9BQU87Z0JBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO2dCQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztnQkFDakIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO2FBQzFCLENBQUM7UUFDSixDQUFDOzs7T0FBQTs7Ozs7O0lBSU8saUNBQVk7Ozs7O0lBQXBCLFVBQXFCLEdBQTJEOztZQUMxRSxDQUFVO1FBQ2QsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUU7WUFDM0IsQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztTQUN4QjthQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMs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Rzs7Ozs7O0lBQ0gsK0JBQVU7Ozs7O0lBQVYsVUFBVyxLQUFpQjtRQUMxQixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7O2dCQXhMRixVQUFVOzs7O2dCQU5GLGNBQWM7O0lBK0x2QixpQkFBQztDQUFBLEFBekxELElBeUxDO1NBeExZLFVBQVU7Ozs7OztJQUNyQiwyQkFBNkI7Ozs7O0lBQzdCLCtCQUErQzs7Ozs7SUFDL0MsMEJBQXFCOzs7OztJQUNyQiwrQkFBd0U7Ozs7O0lBZ0I1RCw2QkFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IERlbG9uQUNMQ29uZmlnIH0gZnJvbSAnLi9hY2wuY29uZmlnJztcbmltcG9ydCB7IEFDTENhblR5cGUsIEFDTFR5cGUgfSBmcm9tICcuL2FjbC50eXBlJztcblxuLyoqXG4gKiDorr/pl67mjqfliLbmnI3liqFcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFDTFNlcnZpY2Uge1xuICBwcml2YXRlIHJvbGVzOiBzdHJpbmdbXSA9IFtdO1xuICBwcml2YXRlIGFiaWxpdGllczogQXJyYXk8bnVtYmVyIHwgc3RyaW5nPiA9IFtdO1xuICBwcml2YXRlIGZ1bGwgPSBmYWxzZTtcbiAgcHJpdmF0ZSBhY2xDaGFuZ2UgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEFDTFR5cGUgfCBib29sZWFuIHwgbnVsbD4obnVsbCk7XG5cbiAgLyoqIEFDTOWPmOabtOmAmuefpSAqL1xuICBnZXQgY2hhbmdlKCk6IE9ic2VydmFibGU8QUNMVHlwZSB8IGJvb2xlYW4gfCBudWxsPiB7XG4gICAgcmV0dXJuIHRoaXMuYWNsQ2hhbmdlLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgLyoqIOiOt+WPluaJgOacieaVsOaNriAqL1xuICBnZXQgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZnVsbDogdGhpcy5mdWxsLFxuICAgICAgcm9sZXM6IHRoaXMucm9sZXMsXG4gICAgICBhYmlsaXRpZXM6IHRoaXMuYWJpbGl0aWVzLFxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG9wdGlvbnM6IERlbG9uQUNMQ29uZmlnKSB7fVxuXG4gIHByaXZhdGUgcGFyc2VBQ0xUeXBlKHZhbDogc3RyaW5nIHwgc3RyaW5nW10gfCBudW1iZXIgfCBudW1iZXJbXSB8IEFDTFR5cGUgfCBudWxsKTogQUNMVHlwZSB7XG4gICAgbGV0IHQ6IEFDTFR5cGU7XG4gICAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgICB0ID0geyBhYmlsaXR5OiBbdmFsXSB9O1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWwpICYmIHZhbC5sZW5ndGggPiAwICYmIHR5cGVvZiB2YWxbMF0gPT09ICdudW1iZXInKSB7XG4gICAgICB0ID0geyBhYmlsaXR5OiB2YWwgfTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICAgIHQgPSB7IC4uLnZhbCB9O1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgICB0ID0geyByb2xlOiB2YWwgYXMgc3RyaW5nW10gfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdCA9IHsgcm9sZTogdmFsID09IG51bGwgPyBbXSA6IFt2YWxdIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgZXhjZXB0OiBmYWxzZSwgLi4udCB9O1xuICB9XG5cbiAgLyoqXG4gICAqIOiuvue9ruW9k+WJjeeUqOaIt+inkuiJsuaIluadg+mZkOiDveWKm++8iOS8muWFiOa4hemZpOaJgOacie+8iVxuICAgKi9cbiAgc2V0KHZhbHVlOiBBQ0xUeXBlKSB7XG4gICAgdGhpcy5hYmlsaXRpZXMgPSBbXTtcbiAgICB0aGlzLnJvbGVzID0gW107XG4gICAgdGhpcy5hZGQodmFsdWUpO1xuICAgIHRoaXMuYWNsQ2hhbmdlLm5leHQodmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIOagh+ivhuW9k+WJjeeUqOaIt+S4uuWFqOmHj++8jOWNs+S4jeWPl+mZkFxuICAgKi9cbiAgc2V0RnVsbCh2YWw6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmZ1bGwgPSB2YWw7XG4gICAgdGhpcy5hY2xDaGFuZ2UubmV4dCh2YWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIOiuvue9ruW9k+WJjeeUqOaIt+adg+mZkOiDveWKm++8iOS8muWFiOa4hemZpOaJgOacie+8iVxuICAgKi9cbiAgc2V0QWJpbGl0eShhYmlsaXRpZXM6IEFycmF5PG51bWJlciB8IHN0cmluZz4pIHtcbiAgICB0aGlzLnNldCh7IGFiaWxpdHk6IGFiaWxpdGllcyB9IGFzIEFDTFR5cGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIOiuvue9ruW9k+WJjeeUqOaIt+inkuiJsu+8iOS8muWFiOa4hemZpOaJgOacie+8iVxuICAgKi9cbiAgc2V0Um9sZShyb2xlczogc3RyaW5nW10pIHtcbiAgICB0aGlzLnNldCh7IHJvbGU6IHJvbGVzIH0gYXMgQUNMVHlwZSk7XG4gIH1cblxuICAvKipcbiAgICog5Li65b2T5YmN55So5oi35aKe5Yqg6KeS6Imy5oiW5p2D6ZmQ6IO95YqbXG4gICAqL1xuICBhZGQodmFsdWU6IEFDTFR5cGUpIHtcbiAgICBpZiAodmFsdWUucm9sZSAmJiB2YWx1ZS5yb2xlLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMucm9sZXMucHVzaCguLi52YWx1ZS5yb2xlKTtcbiAgICB9XG4gICAgaWYgKHZhbHVlLmFiaWxpdHkgJiYgdmFsdWUuYWJpbGl0eS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmFiaWxpdGllcy5wdXNoKC4uLnZhbHVlLmFiaWxpdHkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDkuLrlvZPliY3nlKjmiLfpmYTliqDop5LoibJcbiAgICovXG4gIGF0dGFjaFJvbGUocm9sZXM6IHN0cmluZ1tdKSB7XG4gICAgZm9yIChjb25zdCB2YWwgb2Ygcm9sZXMpIHtcbiAgICAgIGlmICghdGhpcy5yb2xlcy5pbmNsdWRlcyh2YWwpKSB7XG4gICAgICAgIHRoaXMucm9sZXMucHVzaCh2YWwpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmFjbENoYW5nZS5uZXh0KHRoaXMuZGF0YSk7XG4gIH1cblxuICAvKipcbiAgICog5Li65b2T5YmN55So5oi36ZmE5Yqg5p2D6ZmQXG4gICAqL1xuICBhdHRhY2hBYmlsaXR5KGFiaWxpdGllczogQXJyYXk8bnVtYmVyIHwgc3RyaW5nPikge1xuICAgIGZvciAoY29uc3QgdmFsIG9mIGFiaWxpdGllcykge1xuICAgICAgaWYgKCF0aGlzLmFiaWxpdGllcy5pbmNsdWRlcyh2YWwpKSB7XG4gICAgICAgIHRoaXMuYWJpbGl0aWVzLnB1c2godmFsKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5hY2xDaGFuZ2UubmV4dCh0aGlzLmRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIOS4uuW9k+WJjeeUqOaIt+enu+mZpOinkuiJslxuICAgKi9cbiAgcmVtb3ZlUm9sZShyb2xlczogc3RyaW5nW10pIHtcbiAgICBmb3IgKGNvbnN0IHZhbCBvZiByb2xlcykge1xuICAgICAgY29uc3QgaWR4ID0gdGhpcy5yb2xlcy5pbmRleE9mKHZhbCk7XG4gICAgICBpZiAoaWR4ICE9PSAtMSkge1xuICAgICAgICB0aGlzLnJvbGVzLnNwbGljZShpZHgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmFjbENoYW5nZS5uZXh0KHRoaXMuZGF0YSk7XG4gIH1cblxuICAvKipcbiAgICog5Li65b2T5YmN55So5oi356e76Zmk5p2D6ZmQXG4gICAqL1xuICByZW1vdmVBYmlsaXR5KGFiaWxpdGllczogQXJyYXk8bnVtYmVyIHwgc3RyaW5nPikge1xuICAgIGZvciAoY29uc3QgdmFsIG9mIGFiaWxpdGllcykge1xuICAgICAgY29uc3QgaWR4ID0gdGhpcy5hYmlsaXRpZXMuaW5kZXhPZih2YWwpO1xuICAgICAgaWYgKGlkeCAhPT0gLTEpIHtcbiAgICAgICAgdGhpcy5hYmlsaXRpZXMuc3BsaWNlKGlkeCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuYWNsQ2hhbmdlLm5leHQodGhpcy5kYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDlvZPliY3nlKjmiLfmmK/lkKbmnInlr7nlupTop5LoibLvvIzlhbblrp4gYG51bWJlcmAg6KGo56S6QWJpbGl0eVxuICAgKlxuICAgKiAtIOW9kyBgZnVsbDogdHJ1ZWAg5oiW5Y+C5pWwIGBudWxsYCDml7bov5Tlm54gYHRydWVgXG4gICAqIC0g6Iul5L2/55SoIGBBQ0xUeXBlYCDlj4LmlbDvvIzlj6/ku6XmjIflrpogYG1vZGVgIOagoemqjOaooeW8j1xuICAgKi9cbiAgY2FuKHJvbGVPckFiaWxpdHk6IEFDTENhblR5cGUgfCBudWxsKTogYm9vbGVhbiB7XG4gICAgY29uc3QgeyBwcmVDYW4gfSA9IHRoaXMub3B0aW9ucztcbiAgICBpZiAocHJlQ2FuKSB7XG4gICAgICByb2xlT3JBYmlsaXR5ID0gcHJlQ2FuKHJvbGVPckFiaWxpdHkhKTtcbiAgICB9XG5cbiAgICBjb25zdCB0ID0gdGhpcy5wYXJzZUFDTFR5cGUocm9sZU9yQWJpbGl0eSk7XG4gICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xuICAgIGlmICh0aGlzLmZ1bGwgPT09IHRydWUgfHwgIXJvbGVPckFiaWxpdHkpIHtcbiAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0LnJvbGUgJiYgdC5yb2xlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgaWYgKHQubW9kZSA9PT0gJ2FsbE9mJykge1xuICAgICAgICAgIHJlc3VsdCA9IHQucm9sZS5ldmVyeSh2ID0+IHRoaXMucm9sZXMuaW5jbHVkZXModikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdCA9IHQucm9sZS5zb21lKHYgPT4gdGhpcy5yb2xlcy5pbmNsdWRlcyh2KSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0LmFiaWxpdHkgJiYgdC5hYmlsaXR5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgaWYgKHQubW9kZSA9PT0gJ2FsbE9mJykge1xuICAgICAgICAgIHJlc3VsdCA9ICh0LmFiaWxpdHkgYXMgYW55W10pLmV2ZXJ5KHYgPT4gdGhpcy5hYmlsaXRpZXMuaW5jbHVkZXModikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdCA9ICh0LmFiaWxpdHkgYXMgYW55W10pLnNvbWUodiA9PiB0aGlzLmFiaWxpdGllcy5pbmNsdWRlcyh2KSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdC5leGNlcHQgPT09IHRydWUgPyAhcmVzdWx0IDogcmVzdWx0O1xuICB9XG5cbiAgLyoqIEBpbm5lciAqL1xuICBwYXJzZUFiaWxpdHkodmFsdWU6IEFDTENhblR5cGUpOiBBQ0xDYW5UeXBlIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnIHx8IEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZSA9IHsgYWJpbGl0eTogQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IFt2YWx1ZV0gfSBhcyBBQ0xUeXBlO1xuICAgIH1cbiAgICBkZWxldGUgdmFsdWUucm9sZTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICog5b2T5YmN55So5oi35piv5ZCm5pyJ5a+55bqU5p2D6ZmQ54K5XG4gICAqL1xuICBjYW5BYmlsaXR5KHZhbHVlOiBBQ0xDYW5UeXBlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY2FuKHRoaXMucGFyc2VBYmlsaXR5KHZhbHVlKSk7XG4gIH1cbn1cbiJdfQ==