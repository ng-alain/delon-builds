/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DelonACLConfig } from './acl.config';
import * as i0 from "@angular/core";
import * as i1 from "./acl.config";
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
        if (typeof val !== 'string' && !Array.isArray(val)) {
            return (/** @type {?} */ (val));
        }
        if (Array.isArray(val)) {
            return (/** @type {?} */ ({ role: (/** @type {?} */ (val)) }));
        }
        return (/** @type {?} */ ({
            role: [val],
        }));
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
        if (this.full === true || !roleOrAbility) {
            return true;
        }
        const { preCan } = this.options;
        if (preCan) {
            roleOrAbility = preCan(roleOrAbility);
        }
        /** @type {?} */
        let t = { except: false };
        if (typeof roleOrAbility === 'number') {
            t = Object.assign({}, t, { ability: [roleOrAbility] });
        }
        else if (Array.isArray(roleOrAbility) && roleOrAbility.length > 0 && typeof roleOrAbility[0] === 'number') {
            t = Object.assign({}, t, { ability: roleOrAbility });
        }
        else {
            t = Object.assign({}, t, this.parseACLType(roleOrAbility));
        }
        /** @type {?} */
        let result = false;
        if (t.role) {
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
        if (t.ability) {
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
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ACLService.ctorParameters = () => [
    { type: DelonACLConfig }
];
/** @nocollapse */ ACLService.ngInjectableDef = i0.defineInjectable({ factory: function ACLService_Factory() { return new ACLService(i0.inject(i1.DelonACLConfig)); }, token: ACLService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWNsLyIsInNvdXJjZXMiOlsic3JjL2FjbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7Ozs7O0FBTzlDLE1BQU0sT0FBTyxVQUFVOzs7O0lBb0JyQixZQUFvQixPQUF1QjtRQUF2QixZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQW5CbkMsVUFBSyxHQUFhLEVBQUUsQ0FBQztRQUNyQixjQUFTLEdBQTJCLEVBQUUsQ0FBQztRQUN2QyxTQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2IsY0FBUyxHQUFHLElBQUksZUFBZSxDQUEyQixJQUFJLENBQUMsQ0FBQztJQWdCMUIsQ0FBQzs7Ozs7SUFiL0MsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3ZDLENBQUM7Ozs7O0lBR0QsSUFBSSxJQUFJO1FBQ04sT0FBTztZQUNMLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7U0FDMUIsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUlPLFlBQVksQ0FBQyxHQUF1QztRQUMxRCxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDbEQsT0FBTyxtQkFBQSxHQUFHLEVBQVcsQ0FBQztTQUN2QjtRQUNELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN0QixPQUFPLG1CQUFBLEVBQUUsSUFBSSxFQUFFLG1C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QUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbEYsS0FBSyxHQUFHLG1CQUFBLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFXLENBQUM7U0FDeEU7UUFDRCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFDbEIsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7Ozs7SUFLRCxVQUFVLENBQUMsS0FBaUI7UUFDMUIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7WUF6TEYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztZQU56QixjQUFjOzs7Ozs7OztJQVFyQiwyQkFBNkI7Ozs7O0lBQzdCLCtCQUErQzs7Ozs7SUFDL0MsMEJBQXFCOzs7OztJQUNyQiwrQkFBd0U7Ozs7O0lBZ0I1RCw2QkFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IERlbG9uQUNMQ29uZmlnIH0gZnJvbSAnLi9hY2wuY29uZmlnJztcbmltcG9ydCB7IEFDTENhblR5cGUsIEFDTFR5cGUgfSBmcm9tICcuL2FjbC50eXBlJztcblxuLyoqXG4gKiDorr/pl67mjqfliLbmnI3liqFcbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBBQ0xTZXJ2aWNlIHtcbiAgcHJpdmF0ZSByb2xlczogc3RyaW5nW10gPSBbXTtcbiAgcHJpdmF0ZSBhYmlsaXRpZXM6IEFycmF5PG51bWJlciB8IHN0cmluZz4gPSBbXTtcbiAgcHJpdmF0ZSBmdWxsID0gZmFsc2U7XG4gIHByaXZhdGUgYWNsQ2hhbmdlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxBQ0xUeXBlIHwgYm9vbGVhbiB8IG51bGw+KG51bGwpO1xuXG4gIC8qKiBBQ0zlj5jmm7TpgJrnn6UgKi9cbiAgZ2V0IGNoYW5nZSgpOiBPYnNlcnZhYmxlPEFDTFR5cGUgfCBib29sZWFuIHwgbnVsbD4ge1xuICAgIHJldHVybiB0aGlzLmFjbENoYW5nZS5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIC8qKiDojrflj5bmiYDmnInmlbDmja4gKi9cbiAgZ2V0IGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZ1bGw6IHRoaXMuZnVsbCxcbiAgICAgIHJvbGVzOiB0aGlzLnJvbGVzLFxuICAgICAgYWJpbGl0aWVzOiB0aGlzLmFiaWxpdGllcyxcbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBvcHRpb25zOiBEZWxvbkFDTENvbmZpZykge31cblxuICBwcml2YXRlIHBhcnNlQUNMVHlwZSh2YWw6IHN0cmluZyB8IHN0cmluZ1tdIHwgQUNMVHlwZSB8IG51bGwpOiBBQ0xUeXBlIHtcbiAgICBpZiAodHlwZW9mIHZhbCAhPT0gJ3N0cmluZycgJiYgIUFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgICAgcmV0dXJuIHZhbCBhcyBBQ0xUeXBlO1xuICAgIH1cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgICByZXR1cm4geyByb2xlOiB2YWwgYXMgc3RyaW5nW10gfSBhcyBBQ0xUeXBlO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgcm9sZTogW3ZhbF0sXG4gICAgfSBhcyBBQ0xUeXBlO1xuICB9XG5cbiAgLyoqXG4gICAqIOiuvue9ruW9k+WJjeeUqOaIt+inkuiJsuaIluadg+mZkOiDveWKm++8iOS8muWFiOa4hemZpOaJgOacie+8iVxuICAgKi9cbiAgc2V0KHZhbHVlOiBBQ0xUeXBlKSB7XG4gICAgdGhpcy5hYmlsaXRpZXMgPSBbXTtcbiAgICB0aGlzLnJvbGVzID0gW107XG4gICAgdGhpcy5hZGQodmFsdWUpO1xuICAgIHRoaXMuYWNsQ2hhbmdlLm5leHQodmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIOagh+ivhuW9k+WJjeeUqOaIt+S4uuWFqOmHj++8jOWNs+S4jeWPl+mZkFxuICAgKi9cbiAgc2V0RnVsbCh2YWw6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmZ1bGwgPSB2YWw7XG4gICAgdGhpcy5hY2xDaGFuZ2UubmV4dCh2YWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIOiuvue9ruW9k+WJjeeUqOaIt+adg+mZkOiDveWKm++8iOS8muWFiOa4hemZpOaJgOacie+8iVxuICAgKi9cbiAgc2V0QWJpbGl0eShhYmlsaXRpZXM6IEFycmF5PG51bWJlciB8IHN0cmluZz4pIHtcbiAgICB0aGlzLnNldCh7IGFiaWxpdHk6IGFiaWxpdGllcyB9IGFzIEFDTFR5cGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIOiuvue9ruW9k+WJjeeUqOaIt+inkuiJsu+8iOS8muWFiOa4hemZpOaJgOacie+8iVxuICAgKi9cbiAgc2V0Um9sZShyb2xlczogc3RyaW5nW10pIHtcbiAgICB0aGlzLnNldCh7IHJvbGU6IHJvbGVzIH0gYXMgQUNMVHlwZSk7XG4gIH1cblxuICAvKipcbiAgICog5Li65b2T5YmN55So5oi35aKe5Yqg6KeS6Imy5oiW5p2D6ZmQ6IO95YqbXG4gICAqL1xuICBhZGQodmFsdWU6IEFDTFR5cGUpIHtcbiAgICBpZiAodmFsdWUucm9sZSAmJiB2YWx1ZS5yb2xlLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMucm9sZXMucHVzaCguLi52YWx1ZS5yb2xlKTtcbiAgICB9XG4gICAgaWYgKHZhbHVlLmFiaWxpdHkgJiYgdmFsdWUuYWJpbGl0eS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmFiaWxpdGllcy5wdXNoKC4uLnZhbHVlLmFiaWxpdHkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDkuLrlvZPliY3nlKjmiLfpmYTliqDop5LoibJcbiAgICovXG4gIGF0dGFjaFJvbGUocm9sZXM6IHN0cmluZ1tdKSB7XG4gICAgZm9yIChjb25zdCB2YWwgb2Ygcm9sZXMpIHtcbiAgICAgIGlmICghdGhpcy5yb2xlcy5pbmNsdWRlcyh2YWwpKSB7XG4gICAgICAgIHRoaXMucm9sZXMucHVzaCh2YWwpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmFjbENoYW5nZS5uZXh0KHRoaXMuZGF0YSk7XG4gIH1cblxuICAvKipcbiAgICog5Li65b2T5YmN55So5oi36ZmE5Yqg5p2D6ZmQXG4gICAqL1xuICBhdHRhY2hBYmlsaXR5KGFiaWxpdGllczogQXJyYXk8bnVtYmVyIHwgc3RyaW5nPikge1xuICAgIGZvciAoY29uc3QgdmFsIG9mIGFiaWxpdGllcykge1xuICAgICAgaWYgKCF0aGlzLmFiaWxpdGllcy5pbmNsdWRlcyh2YWwpKSB7XG4gICAgICAgIHRoaXMuYWJpbGl0aWVzLnB1c2godmFsKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5hY2xDaGFuZ2UubmV4dCh0aGlzLmRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIOS4uuW9k+WJjeeUqOaIt+enu+mZpOinkuiJslxuICAgKi9cbiAgcmVtb3ZlUm9sZShyb2xlczogc3RyaW5nW10pIHtcbiAgICBmb3IgKGNvbnN0IHZhbCBvZiByb2xlcykge1xuICAgICAgY29uc3QgaWR4ID0gdGhpcy5yb2xlcy5pbmRleE9mKHZhbCk7XG4gICAgICBpZiAoaWR4ICE9PSAtMSkge1xuICAgICAgICB0aGlzLnJvbGVzLnNwbGljZShpZHgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmFjbENoYW5nZS5uZXh0KHRoaXMuZGF0YSk7XG4gIH1cblxuICAvKipcbiAgICog5Li65b2T5YmN55So5oi356e76Zmk5p2D6ZmQXG4gICAqL1xuICByZW1vdmVBYmlsaXR5KGFiaWxpdGllczogQXJyYXk8bnVtYmVyIHwgc3RyaW5nPikge1xuICAgIGZvciAoY29uc3QgdmFsIG9mIGFiaWxpdGllcykge1xuICAgICAgY29uc3QgaWR4ID0gdGhpcy5hYmlsaXRpZXMuaW5kZXhPZih2YWwpO1xuICAgICAgaWYgKGlkeCAhPT0gLTEpIHtcbiAgICAgICAgdGhpcy5hYmlsaXRpZXMuc3BsaWNlKGlkeCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuYWNsQ2hhbmdlLm5leHQodGhpcy5kYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDlvZPliY3nlKjmiLfmmK/lkKbmnInlr7nlupTop5LoibLvvIzlhbblrp4gYG51bWJlcmAg6KGo56S6QWJpbGl0eVxuICAgKlxuICAgKiAtIOW9kyBgZnVsbDogdHJ1ZWAg5oiW5Y+C5pWwIGBudWxsYCDml7bov5Tlm54gYHRydWVgXG4gICAqIC0g6Iul5L2/55SoIGBBQ0xUeXBlYCDlj4LmlbDvvIzlj6/ku6XmjIflrpogYG1vZGVgIOagoemqjOaooeW8j1xuICAgKi9cbiAgY2FuKHJvbGVPckFiaWxpdHk6IEFDTENhblR5cGUgfCBudWxsKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuZnVsbCA9PT0gdHJ1ZSB8fCAhcm9sZU9yQWJpbGl0eSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY29uc3QgeyBwcmVDYW4gfSA9IHRoaXMub3B0aW9ucztcbiAgICBpZiAocHJlQ2FuKSB7XG4gICAgICByb2xlT3JBYmlsaXR5ID0gcHJlQ2FuKHJvbGVPckFiaWxpdHkpO1xuICAgIH1cbiAgICBsZXQgdDogQUNMVHlwZSA9IHsgZXhjZXB0OiBmYWxzZSB9O1xuICAgIGlmICh0eXBlb2Ygcm9sZU9yQWJpbGl0eSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHQgPSB7IC4uLnQsIGFiaWxpdHk6IFtyb2xlT3JBYmlsaXR5XSB9O1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShyb2xlT3JBYmlsaXR5KSAmJiByb2xlT3JBYmlsaXR5Lmxlbmd0aCA+IDAgJiYgdHlwZW9mIHJvbGVPckFiaWxpdHlbMF0gPT09ICdudW1iZXInKSB7XG4gICAgICB0ID0geyAuLi50LCBhYmlsaXR5OiByb2xlT3JBYmlsaXR5IH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHQgPSB7IC4uLnQsIC4uLnRoaXMucGFyc2VBQ0xUeXBlKHJvbGVPckFiaWxpdHkpIH07XG4gICAgfVxuXG4gICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xuICAgIGlmICh0LnJvbGUpIHtcbiAgICAgIGlmICh0Lm1vZGUgPT09ICdhbGxPZicpIHtcbiAgICAgICAgcmVzdWx0ID0gdC5yb2xlLmV2ZXJ5KHYgPT4gdGhpcy5yb2xlcy5pbmNsdWRlcyh2KSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSB0LnJvbGUuc29tZSh2ID0+IHRoaXMucm9sZXMuaW5jbHVkZXModikpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodC5hYmlsaXR5KSB7XG4gICAgICBpZiAodC5tb2RlID09PSAnYWxsT2YnKSB7XG4gICAgICAgIHJlc3VsdCA9ICh0LmFiaWxpdHkgYXMgYW55W10pLmV2ZXJ5KHYgPT4gdGhpcy5hYmlsaXRpZXMuaW5jbHVkZXModikpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gKHQuYWJpbGl0eSBhcyBhbnlbXSkuc29tZSh2ID0+IHRoaXMuYWJpbGl0aWVzLmluY2x1ZGVzKHYpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHQuZXhjZXB0ID09PSB0cnVlID8gIXJlc3VsdCA6IHJlc3VsdDtcbiAgfVxuXG4gIC8qKiBAaW5uZXIgKi9cbiAgcGFyc2VBYmlsaXR5KHZhbHVlOiBBQ0xDYW5UeXBlKTogQUNMQ2FuVHlwZSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgfHwgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyB8fCBBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUgPSB7IGFiaWxpdHk6IEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbdmFsdWVdIH0gYXMgQUNMVHlwZTtcbiAgICB9XG4gICAgZGVsZXRlIHZhbHVlLnJvbGU7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIOW9k+WJjeeUqOaIt+aYr+WQpuacieWvueW6lOadg+mZkOeCuVxuICAgKi9cbiAgY2FuQWJpbGl0eSh2YWx1ZTogQUNMQ2FuVHlwZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNhbih0aGlzLnBhcnNlQWJpbGl0eSh2YWx1ZSkpO1xuICB9XG59XG4iXX0=