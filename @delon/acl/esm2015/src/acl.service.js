/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DelonACLConfig } from './acl.config';
/**
 * 访问控制服务
 */
export class ACLService {
    /**
     * @param {?} options
     */
    constructor(options) {
        this.options = options;
        this.roles = [];
        this.abilities = [];
        this.full = false;
        this.aclChange = new BehaviorSubject(null);
    }
    /**
     * ACL变更通知
     * @return {?}
     */
    get change() {
        return this.aclChange.asObservable();
    }
    /**
     * 获取所有数据
     * @return {?}
     */
    get data() {
        return {
            full: this.full,
            roles: this.roles,
            abilities: this.abilities,
        };
    }
    /**
     * @private
     * @param {?} val
     * @return {?}
     */
    parseACLType(val) {
        /** @type {?} */
        let t;
        if (typeof val === 'number') {
            t = { ability: [val] };
        }
        else if (Array.isArray(val) && val.length > 0 && typeof val[0] === 'number') {
            t = { ability: val };
        }
        else if (typeof val === 'object' && !Array.isArray(val)) {
            t = Object.assign({}, val);
        }
        else if (Array.isArray(val)) {
            t = { role: (/** @type {?} */ (val)) };
        }
        else {
            t = { role: val == null ? [] : [val] };
        }
        return Object.assign({ except: false }, t);
    }
    /**
     * 设置当前用户角色或权限能力（会先清除所有）
     * @param {?} value
     * @return {?}
     */
    set(value) {
        this.abilities = [];
        this.roles = [];
        this.add(value);
        this.aclChange.next(value);
    }
    /**
     * 标识当前用户为全量，即不受限
     * @param {?} val
     * @return {?}
     */
    setFull(val) {
        this.full = val;
        this.aclChange.next(val);
    }
    /**
     * 设置当前用户权限能力（会先清除所有）
     * @param {?} abilities
     * @return {?}
     */
    setAbility(abilities) {
        this.set((/** @type {?} */ ({ ability: abilities })));
    }
    /**
     * 设置当前用户角色（会先清除所有）
     * @param {?} roles
     * @return {?}
     */
    setRole(roles) {
        this.set((/** @type {?} */ ({ role: roles })));
    }
    /**
     * 为当前用户增加角色或权限能力
     * @param {?} value
     * @return {?}
     */
    add(value) {
        if (value.role && value.role.length > 0) {
            this.roles.push(...value.role);
        }
        if (value.ability && value.ability.length > 0) {
            this.abilities.push(...value.ability);
        }
    }
    /**
     * 为当前用户附加角色
     * @param {?} roles
     * @return {?}
     */
    attachRole(roles) {
        for (const val of roles) {
            if (!this.roles.includes(val)) {
                this.roles.push(val);
            }
        }
        this.aclChange.next(this.data);
    }
    /**
     * 为当前用户附加权限
     * @param {?} abilities
     * @return {?}
     */
    attachAbility(abilities) {
        for (const val of abilities) {
            if (!this.abilities.includes(val)) {
                this.abilities.push(val);
            }
        }
        this.aclChange.next(this.data);
    }
    /**
     * 为当前用户移除角色
     * @param {?} roles
     * @return {?}
     */
    removeRole(roles) {
        for (const val of roles) {
            /** @type {?} */
            const idx = this.roles.indexOf(val);
            if (idx !== -1) {
                this.roles.splice(idx, 1);
            }
        }
        this.aclChange.next(this.data);
    }
    /**
     * 为当前用户移除权限
     * @param {?} abilities
     * @return {?}
     */
    removeAbility(abilities) {
        for (const val of abilities) {
            /** @type {?} */
            const idx = this.abilities.indexOf(val);
            if (idx !== -1) {
                this.abilities.splice(idx, 1);
            }
        }
        this.aclChange.next(this.data);
    }
    /**
     * 当前用户是否有对应角色，其实 `number` 表示Ability
     *
     * - 当 `full: true` 或参数 `null` 时返回 `true`
     * - 若使用 `ACLType` 参数，可以指定 `mode` 校验模式
     * @param {?} roleOrAbility
     * @return {?}
     */
    can(roleOrAbility) {
        const { preCan } = this.options;
        if (preCan) {
            roleOrAbility = preCan((/** @type {?} */ (roleOrAbility)));
        }
        /** @type {?} */
        const t = this.parseACLType(roleOrAbility);
        /** @type {?} */
        let result = false;
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
                    v => this.roles.includes(v)));
                }
                else {
                    result = t.role.some((/**
                     * @param {?} v
                     * @return {?}
                     */
                    v => this.roles.includes(v)));
                }
            }
            if (t.ability && t.ability.length > 0) {
                if (t.mode === 'allOf') {
                    result = ((/** @type {?} */ (t.ability))).every((/**
                     * @param {?} v
                     * @return {?}
                     */
                    v => this.abilities.includes(v)));
                }
                else {
                    result = ((/** @type {?} */ (t.ability))).some((/**
                     * @param {?} v
                     * @return {?}
                     */
                    v => this.abilities.includes(v)));
                }
            }
        }
        return t.except === true ? !result : result;
    }
    /**
     * \@inner
     * @param {?} value
     * @return {?}
     */
    parseAbility(value) {
        if (typeof value === 'number' || typeof value === 'string' || Array.isArray(value)) {
            value = (/** @type {?} */ ({ ability: Array.isArray(value) ? value : [value] }));
        }
        delete value.role;
        return value;
    }
    /**
     * 当前用户是否有对应权限点
     * @param {?} value
     * @return {?}
     */
    canAbility(value) {
        return this.can(this.parseAbility(value));
    }
}
ACLService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ACLService.ctorParameters = () => [
    { type: DelonACLConfig }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWNsLyIsInNvdXJjZXMiOlsic3JjL2FjbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7OztBQU85QyxNQUFNLE9BQU8sVUFBVTs7OztJQW9CckIsWUFBb0IsT0FBdUI7UUFBdkIsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFuQm5DLFVBQUssR0FBYSxFQUFFLENBQUM7UUFDckIsY0FBUyxHQUEyQixFQUFFLENBQUM7UUFDdkMsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUNiLGNBQVMsR0FBRyxJQUFJLGVBQWUsQ0FBMkIsSUFBSSxDQUFDLENBQUM7SUFnQjFCLENBQUM7Ozs7O0lBYi9DLElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN2QyxDQUFDOzs7OztJQUdELElBQUksSUFBSTtRQUNOLE9BQU87WUFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1NBQzFCLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFJTyxZQUFZLENBQUMsR0FBMkQ7O1lBQzFFLENBQVU7UUFDZCxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRTtZQUMzQixDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO1NBQ3hCO2FBQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLE9BQU8sR0FBRyxD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LENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDOUMsQ0FBQzs7Ozs7O0lBR0QsWUFBWSxDQUFDLEtBQWlCO1FBQzVCLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2xGLEtBQUssR0FBRyxtQkFBQSxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBVyxDQUFDO1NBQ3hFO1FBQ0QsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQ2xCLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Ozs7O0lBS0QsVUFBVSxDQUFDLEtBQWlCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7O1lBeExGLFVBQVU7Ozs7WUFORixjQUFjOzs7Ozs7O0lBUXJCLDJCQUE2Qjs7Ozs7SUFDN0IsK0JBQStDOzs7OztJQUMvQywwQkFBcUI7Ozs7O0lBQ3JCLCtCQUF3RTs7Ozs7SUFnQjVELDZCQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRGVsb25BQ0xDb25maWcgfSBmcm9tICcuL2FjbC5jb25maWcnO1xuaW1wb3J0IHsgQUNMQ2FuVHlwZSwgQUNMVHlwZSB9IGZyb20gJy4vYWNsLnR5cGUnO1xuXG4vKipcbiAqIOiuv+mXruaOp+WItuacjeWKoVxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQUNMU2VydmljZSB7XG4gIHByaXZhdGUgcm9sZXM6IHN0cmluZ1tdID0gW107XG4gIHByaXZhdGUgYWJpbGl0aWVzOiBBcnJheTxudW1iZXIgfCBzdHJpbmc+ID0gW107XG4gIHByaXZhdGUgZnVsbCA9IGZhbHNlO1xuICBwcml2YXRlIGFjbENoYW5nZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8QUNMVHlwZSB8IGJvb2xlYW4gfCBudWxsPihudWxsKTtcblxuICAvKiogQUNM5Y+Y5pu06YCa55+lICovXG4gIGdldCBjaGFuZ2UoKTogT2JzZXJ2YWJsZTxBQ0xUeXBlIHwgYm9vbGVhbiB8IG51bGw+IHtcbiAgICByZXR1cm4gdGhpcy5hY2xDaGFuZ2UuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICAvKiog6I635Y+W5omA5pyJ5pWw5o2uICovXG4gIGdldCBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBmdWxsOiB0aGlzLmZ1bGwsXG4gICAgICByb2xlczogdGhpcy5yb2xlcyxcbiAgICAgIGFiaWxpdGllczogdGhpcy5hYmlsaXRpZXMsXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgb3B0aW9uczogRGVsb25BQ0xDb25maWcpIHt9XG5cbiAgcHJpdmF0ZSBwYXJzZUFDTFR5cGUodmFsOiBzdHJpbmcgfCBzdHJpbmdbXSB8IG51bWJlciB8IG51bWJlcltdIHwgQUNMVHlwZSB8IG51bGwpOiBBQ0xUeXBlIHtcbiAgICBsZXQgdDogQUNMVHlwZTtcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICAgIHQgPSB7IGFiaWxpdHk6IFt2YWxdIH07XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbCkgJiYgdmFsLmxlbmd0aCA+IDAgJiYgdHlwZW9mIHZhbFswXSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHQgPSB7IGFiaWxpdHk6IHZhbCB9O1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgICAgdCA9IHsgLi4udmFsIH07XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICAgIHQgPSB7IHJvbGU6IHZhbCBhcyBzdHJpbmdbXSB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB0ID0geyByb2xlOiB2YWwgPT0gbnVsbCA/IFtdIDogW3ZhbF0gfTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBleGNlcHQ6IGZhbHNlLCAuLi50IH07XG4gIH1cblxuICAvKipcbiAgICog6K6+572u5b2T5YmN55So5oi36KeS6Imy5oiW5p2D6ZmQ6IO95Yqb77yI5Lya5YWI5riF6Zmk5omA5pyJ77yJXG4gICAqL1xuICBzZXQodmFsdWU6IEFDTFR5cGUpIHtcbiAgICB0aGlzLmFiaWxpdGllcyA9IFtdO1xuICAgIHRoaXMucm9sZXMgPSBbXTtcbiAgICB0aGlzLmFkZCh2YWx1ZSk7XG4gICAgdGhpcy5hY2xDaGFuZ2UubmV4dCh2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICog5qCH6K+G5b2T5YmN55So5oi35Li65YWo6YeP77yM5Y2z5LiN5Y+X6ZmQXG4gICAqL1xuICBzZXRGdWxsKHZhbDogYm9vbGVhbikge1xuICAgIHRoaXMuZnVsbCA9IHZhbDtcbiAgICB0aGlzLmFjbENoYW5nZS5uZXh0KHZhbCk7XG4gIH1cblxuICAvKipcbiAgICog6K6+572u5b2T5YmN55So5oi35p2D6ZmQ6IO95Yqb77yI5Lya5YWI5riF6Zmk5omA5pyJ77yJXG4gICAqL1xuICBzZXRBYmlsaXR5KGFiaWxpdGllczogQXJyYXk8bnVtYmVyIHwgc3RyaW5nPikge1xuICAgIHRoaXMuc2V0KHsgYWJpbGl0eTogYWJpbGl0aWVzIH0gYXMgQUNMVHlwZSk7XG4gIH1cblxuICAvKipcbiAgICog6K6+572u5b2T5YmN55So5oi36KeS6Imy77yI5Lya5YWI5riF6Zmk5omA5pyJ77yJXG4gICAqL1xuICBzZXRSb2xlKHJvbGVzOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuc2V0KHsgcm9sZTogcm9sZXMgfSBhcyBBQ0xUeXBlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDkuLrlvZPliY3nlKjmiLflop7liqDop5LoibLmiJbmnYPpmZDog73liptcbiAgICovXG4gIGFkZCh2YWx1ZTogQUNMVHlwZSkge1xuICAgIGlmICh2YWx1ZS5yb2xlICYmIHZhbHVlLnJvbGUubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5yb2xlcy5wdXNoKC4uLnZhbHVlLnJvbGUpO1xuICAgIH1cbiAgICBpZiAodmFsdWUuYWJpbGl0eSAmJiB2YWx1ZS5hYmlsaXR5Lmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuYWJpbGl0aWVzLnB1c2goLi4udmFsdWUuYWJpbGl0eSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOS4uuW9k+WJjeeUqOaIt+mZhOWKoOinkuiJslxuICAgKi9cbiAgYXR0YWNoUm9sZShyb2xlczogc3RyaW5nW10pIHtcbiAgICBmb3IgKGNvbnN0IHZhbCBvZiByb2xlcykge1xuICAgICAgaWYgKCF0aGlzLnJvbGVzLmluY2x1ZGVzKHZhbCkpIHtcbiAgICAgICAgdGhpcy5yb2xlcy5wdXNoKHZhbCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuYWNsQ2hhbmdlLm5leHQodGhpcy5kYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDkuLrlvZPliY3nlKjmiLfpmYTliqDmnYPpmZBcbiAgICovXG4gIGF0dGFjaEFiaWxpdHkoYWJpbGl0aWVzOiBBcnJheTxudW1iZXIgfCBzdHJpbmc+KSB7XG4gICAgZm9yIChjb25zdCB2YWwgb2YgYWJpbGl0aWVzKSB7XG4gICAgICBpZiAoIXRoaXMuYWJpbGl0aWVzLmluY2x1ZGVzKHZhbCkpIHtcbiAgICAgICAgdGhpcy5hYmlsaXRpZXMucHVzaCh2YWwpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmFjbENoYW5nZS5uZXh0KHRoaXMuZGF0YSk7XG4gIH1cblxuICAvKipcbiAgICog5Li65b2T5YmN55So5oi356e76Zmk6KeS6ImyXG4gICAqL1xuICByZW1vdmVSb2xlKHJvbGVzOiBzdHJpbmdbXSkge1xuICAgIGZvciAoY29uc3QgdmFsIG9mIHJvbGVzKSB7XG4gICAgICBjb25zdCBpZHggPSB0aGlzLnJvbGVzLmluZGV4T2YodmFsKTtcbiAgICAgIGlmIChpZHggIT09IC0xKSB7XG4gICAgICAgIHRoaXMucm9sZXMuc3BsaWNlKGlkeCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuYWNsQ2hhbmdlLm5leHQodGhpcy5kYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDkuLrlvZPliY3nlKjmiLfnp7vpmaTmnYPpmZBcbiAgICovXG4gIHJlbW92ZUFiaWxpdHkoYWJpbGl0aWVzOiBBcnJheTxudW1iZXIgfCBzdHJpbmc+KSB7XG4gICAgZm9yIChjb25zdCB2YWwgb2YgYWJpbGl0aWVzKSB7XG4gICAgICBjb25zdCBpZHggPSB0aGlzLmFiaWxpdGllcy5pbmRleE9mKHZhbCk7XG4gICAgICBpZiAoaWR4ICE9PSAtMSkge1xuICAgICAgICB0aGlzLmFiaWxpdGllcy5zcGxpY2UoaWR4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5hY2xDaGFuZ2UubmV4dCh0aGlzLmRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIOW9k+WJjeeUqOaIt+aYr+WQpuacieWvueW6lOinkuiJsu+8jOWFtuWuniBgbnVtYmVyYCDooajnpLpBYmlsaXR5XG4gICAqXG4gICAqIC0g5b2TIGBmdWxsOiB0cnVlYCDmiJblj4LmlbAgYG51bGxgIOaXtui/lOWbniBgdHJ1ZWBcbiAgICogLSDoi6Xkvb/nlKggYEFDTFR5cGVgIOWPguaVsO+8jOWPr+S7peaMh+WumiBgbW9kZWAg5qCh6aqM5qih5byPXG4gICAqL1xuICBjYW4ocm9sZU9yQWJpbGl0eTogQUNMQ2FuVHlwZSB8IG51bGwpOiBib29sZWFuIHtcbiAgICBjb25zdCB7IHByZUNhbiB9ID0gdGhpcy5vcHRpb25zO1xuICAgIGlmIChwcmVDYW4pIHtcbiAgICAgIHJvbGVPckFiaWxpdHkgPSBwcmVDYW4ocm9sZU9yQWJpbGl0eSEpO1xuICAgIH1cblxuICAgIGNvbnN0IHQgPSB0aGlzLnBhcnNlQUNMVHlwZShyb2xlT3JBYmlsaXR5KTtcbiAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XG4gICAgaWYgKHRoaXMuZnVsbCA9PT0gdHJ1ZSB8fCAhcm9sZU9yQWJpbGl0eSkge1xuICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHQucm9sZSAmJiB0LnJvbGUubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAodC5tb2RlID09PSAnYWxsT2YnKSB7XG4gICAgICAgICAgcmVzdWx0ID0gdC5yb2xlLmV2ZXJ5KHYgPT4gdGhpcy5yb2xlcy5pbmNsdWRlcyh2KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0ID0gdC5yb2xlLnNvbWUodiA9PiB0aGlzLnJvbGVzLmluY2x1ZGVzKHYpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHQuYWJpbGl0eSAmJiB0LmFiaWxpdHkubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAodC5tb2RlID09PSAnYWxsT2YnKSB7XG4gICAgICAgICAgcmVzdWx0ID0gKHQuYWJpbGl0eSBhcyBhbnlbXSkuZXZlcnkodiA9PiB0aGlzLmFiaWxpdGllcy5pbmNsdWRlcyh2KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0ID0gKHQuYWJpbGl0eSBhcyBhbnlbXSkuc29tZSh2ID0+IHRoaXMuYWJpbGl0aWVzLmluY2x1ZGVzKHYpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0LmV4Y2VwdCA9PT0gdHJ1ZSA/ICFyZXN1bHQgOiByZXN1bHQ7XG4gIH1cblxuICAvKiogQGlubmVyICovXG4gIHBhcnNlQWJpbGl0eSh2YWx1ZTogQUNMQ2FuVHlwZSk6IEFDTENhblR5cGUge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgfHwgQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlID0geyBhYmlsaXR5OiBBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogW3ZhbHVlXSB9IGFzIEFDTFR5cGU7XG4gICAgfVxuICAgIGRlbGV0ZSB2YWx1ZS5yb2xlO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiDlvZPliY3nlKjmiLfmmK/lkKbmnInlr7nlupTmnYPpmZDngrlcbiAgICovXG4gIGNhbkFiaWxpdHkodmFsdWU6IEFDTENhblR5cGUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jYW4odGhpcy5wYXJzZUFiaWxpdHkodmFsdWUpKTtcbiAgfVxufVxuIl19