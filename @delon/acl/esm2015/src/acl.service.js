/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
/**
 * 访问控制服务
 */
export class ACLService {
    constructor() {
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
     * @param {?} val
     * @return {?}
     */
    parseACLType(val) {
        if (typeof val !== 'string' && !Array.isArray(val)) {
            return /** @type {?} */ (val);
        }
        if (Array.isArray(val)) {
            return /** @type {?} */ ({ role: /** @type {?} */ (val) });
        }
        return /** @type {?} */ ({
            role: [val],
        });
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
        this.set(/** @type {?} */ ({ ability: abilities }));
    }
    /**
     * 设置当前用户角色（会先清除所有）
     * @param {?} roles
     * @return {?}
     */
    setRole(roles) {
        this.set(/** @type {?} */ ({ role: roles }));
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
        /** @type {?} */
        let t = {};
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
                return t.role.every(v => this.roles.includes(v));
            else
                return t.role.some(v => this.roles.includes(v));
        }
        if (t.ability) {
            if (t.mode === 'allOf')
                return (/** @type {?} */ (t.ability)).every(v => this.abilities.includes(v));
            else
                return (/** @type {?} */ (t.ability)).some(v => this.abilities.includes(v));
        }
        return false;
    }
    /**
     * \@inner
     * @param {?} value
     * @return {?}
     */
    parseAbility(value) {
        if (typeof value === 'number' ||
            typeof value === 'string' ||
            Array.isArray(value)) {
            value = /** @type {?} */ ({ ability: Array.isArray(value) ? value : [value] });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWNsLyIsInNvdXJjZXMiOlsic3JjL2FjbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7QUFPbkQsTUFBTTs7cUJBQ3NCLEVBQUU7eUJBQ2EsRUFBRTtvQkFDNUIsS0FBSzt5QkFDb0MsSUFBSSxlQUFlLENBRXpFLElBQUksQ0FBQzs7Ozs7O0lBR1AsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO0tBQ3RDOzs7OztJQUdELElBQUksSUFBSTtRQUNOLE9BQU87WUFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1NBQzFCLENBQUM7S0FDSDs7Ozs7SUFFTyxZQUFZLENBQUMsR0FBZ0M7UUFDbkQsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2xELHlCQUFnQixHQUFHLEVBQUM7U0FDckI7UUFDRCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDdEIseUJBQWdCLEVBQUUsSUFBSSxvQkFBWSxHQUFHLENBQUEsRUFBRSxFQUFDO1NBQ3pDO1FBQ0QseUJBQWdCO1lBQ2QsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDO1NBQ1osRUFBQzs7Ozs7OztJQU1KLEdBQUcsQ0FBQyxLQUFjO1FBQ2hCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDNUI7Ozs7OztJQUtELE9BQU8sQ0FBQyxHQUFZO1FBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQzFCOzs7Ozs7SUFLRCxVQUFVLENBQUMsU0FBOEI7UUFDdkMsSUFBSSxDQUFDLEdBQUcsbUJBQVUsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLEVBQUMsQ0FBQztLQUMzQzs7Ozs7O0lBS0QsT0FBTyxDQUFDLEtBQWU7UUFDckIsSUFBSSxDQUFDLEdBQUcsbUJBQVUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUMsQ0FBQztLQUNwQzs7Ozs7O0lBS0QsR0FBRyxDQUFDLEtBQWM7UUFDaEIsSUFBSSxLQUFLLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN2QyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNoQztRQUNELElBQUksS0FBSyxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDN0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDdkM7S0FDRjs7Ozs7O0lBS0QsVUFBVSxDQUFDLEtBQWU7UUFDeEIsS0FBSyxNQUFNLEdBQUcsSUFBSSxLQUFLLEVBQUU7WUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUN0QjtTQUNGO1FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2hDOzs7Ozs7SUFLRCxhQUFhLENBQUMsU0FBOEI7UUFDMUMsS0FBSyxNQUFNLEdBQUcsSUFBSSxTQUFTLEVBQUU7WUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUMxQjtTQUNGO1FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2hDOzs7Ozs7SUFLRCxVQUFVLENBQUMsS0FBZTtRQUN4QixLQUFLLE1BQU0sR0FBRyxJQUFJLEtBQUssRUFBRTs7WUFDdkIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDcEMsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQzNCO1NBQ0Y7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDaEM7Ozs7OztJQUtELGFBQWEsQ0FBQyxTQUE4QjtRQUMxQyxLQUFLLE1BQU0sR0FBRyxJQUFJLFNBQVMsRUFBRTs7WUFDM0IsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDeEMsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQy9CO1NBQ0Y7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDaEM7Ozs7Ozs7OztJQVFELEdBQUcsQ0FBQyxhQUF5QjtRQUMzQixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3hDLE9BQU8sSUFBSSxDQUFDO1NBQ2I7O1FBRUQsSUFBSSxDQUFDLEdBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksT0FBTyxhQUFhLEtBQUssUUFBUSxFQUFFO1lBQ3JDLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUM7U0FDbEM7YUFBTSxJQUNMLEtBQUssQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO1lBQzVCLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQztZQUN4QixPQUFPLGFBQWEsQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRLEVBQ3BDO1lBQ0EsQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxDQUFDO1NBQ2hDO2FBQU07WUFDTCxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUN0QztRQUVELElBQUksQ0FBQyxDQUFDLElBQUksRUFBRTtZQUNWLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxPQUFPO2dCQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOztnQkFDcEUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdEQ7UUFDRCxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUU7WUFDYixJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssT0FBTztnQkFDcEIsT0FBTyxtQkFBQyxDQUFDLENBQUMsT0FBZ0IsRUFBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O2dCQUNoRSxPQUFPLG1CQUFDLENBQUMsQ0FBQyxPQUFnQixFQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN4RTtRQUNELE9BQU8sS0FBSyxDQUFDO0tBQ2Q7Ozs7OztJQUdELFlBQVksQ0FBQyxLQUFpQjtRQUM1QixJQUNFLE9BQU8sS0FBSyxLQUFLLFFBQVE7WUFDekIsT0FBTyxLQUFLLEtBQUssUUFBUTtZQUN6QixLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUNwQjtZQUNBLEtBQUsscUJBQVksRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUEsQ0FBQztTQUN0RTtRQUNELE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQztRQUNsQixPQUFPLEtBQUssQ0FBQztLQUNkOzs7Ozs7SUFLRCxVQUFVLENBQUMsS0FBaUI7UUFDMUIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztLQUMzQzs7O1lBdkxGLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBBQ0xUeXBlLCBBQ0xDYW5UeXBlIH0gZnJvbSAnLi9hY2wudHlwZSc7XHJcblxyXG4vKipcclxuICog6K6/6Zeu5o6n5Yi25pyN5YqhXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBQ0xTZXJ2aWNlIHtcclxuICBwcml2YXRlIHJvbGVzOiBzdHJpbmdbXSA9IFtdO1xyXG4gIHByaXZhdGUgYWJpbGl0aWVzOiAobnVtYmVyIHwgc3RyaW5nKVtdID0gW107XHJcbiAgcHJpdmF0ZSBmdWxsID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBhY2xDaGFuZ2U6IEJlaGF2aW9yU3ViamVjdDxBQ0xUeXBlIHwgYm9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFxyXG4gICAgQUNMVHlwZSB8IGJvb2xlYW5cclxuICA+KG51bGwpO1xyXG5cclxuICAvKiogQUNM5Y+Y5pu06YCa55+lICovXHJcbiAgZ2V0IGNoYW5nZSgpOiBPYnNlcnZhYmxlPEFDTFR5cGUgfCBib29sZWFuPiB7XHJcbiAgICByZXR1cm4gdGhpcy5hY2xDaGFuZ2UuYXNPYnNlcnZhYmxlKCk7XHJcbiAgfVxyXG5cclxuICAvKiog6I635Y+W5omA5pyJ5pWw5o2uICovXHJcbiAgZ2V0IGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBmdWxsOiB0aGlzLmZ1bGwsXHJcbiAgICAgIHJvbGVzOiB0aGlzLnJvbGVzLFxyXG4gICAgICBhYmlsaXRpZXM6IHRoaXMuYWJpbGl0aWVzLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcGFyc2VBQ0xUeXBlKHZhbDogc3RyaW5nIHwgc3RyaW5nW10gfCBBQ0xUeXBlKTogQUNMVHlwZSB7XHJcbiAgICBpZiAodHlwZW9mIHZhbCAhPT0gJ3N0cmluZycgJiYgIUFycmF5LmlzQXJyYXkodmFsKSkge1xyXG4gICAgICByZXR1cm4gPEFDTFR5cGU+dmFsO1xyXG4gICAgfVxyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xyXG4gICAgICByZXR1cm4gPEFDTFR5cGU+eyByb2xlOiA8c3RyaW5nW10+dmFsIH07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gPEFDTFR5cGU+e1xyXG4gICAgICByb2xlOiBbdmFsXSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDorr7nva7lvZPliY3nlKjmiLfop5LoibLmiJbmnYPpmZDog73lipvvvIjkvJrlhYjmuIXpmaTmiYDmnInvvIlcclxuICAgKi9cclxuICBzZXQodmFsdWU6IEFDTFR5cGUpIHtcclxuICAgIHRoaXMuYWJpbGl0aWVzID0gW107XHJcbiAgICB0aGlzLnJvbGVzID0gW107XHJcbiAgICB0aGlzLmFkZCh2YWx1ZSk7XHJcbiAgICB0aGlzLmFjbENoYW5nZS5uZXh0KHZhbHVlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOagh+ivhuW9k+WJjeeUqOaIt+S4uuWFqOmHj++8jOWNs+S4jeWPl+mZkFxyXG4gICAqL1xyXG4gIHNldEZ1bGwodmFsOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmZ1bGwgPSB2YWw7XHJcbiAgICB0aGlzLmFjbENoYW5nZS5uZXh0KHZhbCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDorr7nva7lvZPliY3nlKjmiLfmnYPpmZDog73lipvvvIjkvJrlhYjmuIXpmaTmiYDmnInvvIlcclxuICAgKi9cclxuICBzZXRBYmlsaXR5KGFiaWxpdGllczogKG51bWJlciB8IHN0cmluZylbXSkge1xyXG4gICAgdGhpcy5zZXQoPEFDTFR5cGU+eyBhYmlsaXR5OiBhYmlsaXRpZXMgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDorr7nva7lvZPliY3nlKjmiLfop5LoibLvvIjkvJrlhYjmuIXpmaTmiYDmnInvvIlcclxuICAgKi9cclxuICBzZXRSb2xlKHJvbGVzOiBzdHJpbmdbXSkge1xyXG4gICAgdGhpcy5zZXQoPEFDTFR5cGU+eyByb2xlOiByb2xlcyB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOS4uuW9k+WJjeeUqOaIt+WinuWKoOinkuiJsuaIluadg+mZkOiDveWKm1xyXG4gICAqL1xyXG4gIGFkZCh2YWx1ZTogQUNMVHlwZSkge1xyXG4gICAgaWYgKHZhbHVlLnJvbGUgJiYgdmFsdWUucm9sZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMucm9sZXMucHVzaCguLi52YWx1ZS5yb2xlKTtcclxuICAgIH1cclxuICAgIGlmICh2YWx1ZS5hYmlsaXR5ICYmIHZhbHVlLmFiaWxpdHkubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLmFiaWxpdGllcy5wdXNoKC4uLnZhbHVlLmFiaWxpdHkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5Li65b2T5YmN55So5oi36ZmE5Yqg6KeS6ImyXHJcbiAgICovXHJcbiAgYXR0YWNoUm9sZShyb2xlczogc3RyaW5nW10pIHtcclxuICAgIGZvciAoY29uc3QgdmFsIG9mIHJvbGVzKSB7XHJcbiAgICAgIGlmICghdGhpcy5yb2xlcy5pbmNsdWRlcyh2YWwpKSB7XHJcbiAgICAgICAgdGhpcy5yb2xlcy5wdXNoKHZhbCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuYWNsQ2hhbmdlLm5leHQodGhpcy5kYXRhKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOS4uuW9k+WJjeeUqOaIt+mZhOWKoOadg+mZkFxyXG4gICAqL1xyXG4gIGF0dGFjaEFiaWxpdHkoYWJpbGl0aWVzOiAobnVtYmVyIHwgc3RyaW5nKVtdKSB7XHJcbiAgICBmb3IgKGNvbnN0IHZhbCBvZiBhYmlsaXRpZXMpIHtcclxuICAgICAgaWYgKCF0aGlzLmFiaWxpdGllcy5pbmNsdWRlcyh2YWwpKSB7XHJcbiAgICAgICAgdGhpcy5hYmlsaXRpZXMucHVzaCh2YWwpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmFjbENoYW5nZS5uZXh0KHRoaXMuZGF0YSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDkuLrlvZPliY3nlKjmiLfnp7vpmaTop5LoibJcclxuICAgKi9cclxuICByZW1vdmVSb2xlKHJvbGVzOiBzdHJpbmdbXSkge1xyXG4gICAgZm9yIChjb25zdCB2YWwgb2Ygcm9sZXMpIHtcclxuICAgICAgY29uc3QgaWR4ID0gdGhpcy5yb2xlcy5pbmRleE9mKHZhbCk7XHJcbiAgICAgIGlmIChpZHggIT09IC0xKSB7XHJcbiAgICAgICAgdGhpcy5yb2xlcy5zcGxpY2UoaWR4LCAxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5hY2xDaGFuZ2UubmV4dCh0aGlzLmRhdGEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5Li65b2T5YmN55So5oi356e76Zmk5p2D6ZmQXHJcbiAgICovXHJcbiAgcmVtb3ZlQWJpbGl0eShhYmlsaXRpZXM6IChudW1iZXIgfCBzdHJpbmcpW10pIHtcclxuICAgIGZvciAoY29uc3QgdmFsIG9mIGFiaWxpdGllcykge1xyXG4gICAgICBjb25zdCBpZHggPSB0aGlzLmFiaWxpdGllcy5pbmRleE9mKHZhbCk7XHJcbiAgICAgIGlmIChpZHggIT09IC0xKSB7XHJcbiAgICAgICAgdGhpcy5hYmlsaXRpZXMuc3BsaWNlKGlkeCwgMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuYWNsQ2hhbmdlLm5leHQodGhpcy5kYXRhKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOW9k+WJjeeUqOaIt+aYr+WQpuacieWvueW6lOinkuiJsu+8jOWFtuWuniBgbnVtYmVyYCDooajnpLpBYmlsaXR5XHJcbiAgICpcclxuICAgKiAtIOW9kyBgZnVsbDogdHJ1ZWAg5oiW5Y+C5pWwIGBudWxsYCDml7bov5Tlm54gYHRydWVgXHJcbiAgICogLSDoi6Xkvb/nlKggYEFDTFR5cGVgIOWPguaVsO+8jOWPr+S7peaMh+WumiBgbW9kZWAg5qCh6aqM5qih5byPXHJcbiAgICovXHJcbiAgY2FuKHJvbGVPckFiaWxpdHk6IEFDTENhblR5cGUpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLmZ1bGwgPT09IHRydWUgfHwgIXJvbGVPckFiaWxpdHkpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHQ6IEFDTFR5cGUgPSB7fTtcclxuICAgIGlmICh0eXBlb2Ygcm9sZU9yQWJpbGl0eSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgdCA9IHsgYWJpbGl0eTogW3JvbGVPckFiaWxpdHldIH07XHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICBBcnJheS5pc0FycmF5KHJvbGVPckFiaWxpdHkpICYmXHJcbiAgICAgIHJvbGVPckFiaWxpdHkubGVuZ3RoID4gMCAmJlxyXG4gICAgICB0eXBlb2Ygcm9sZU9yQWJpbGl0eVswXSA9PT0gJ251bWJlcidcclxuICAgICkge1xyXG4gICAgICB0ID0geyBhYmlsaXR5OiByb2xlT3JBYmlsaXR5IH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0ID0gdGhpcy5wYXJzZUFDTFR5cGUocm9sZU9yQWJpbGl0eSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHQucm9sZSkge1xyXG4gICAgICBpZiAodC5tb2RlID09PSAnYWxsT2YnKSByZXR1cm4gdC5yb2xlLmV2ZXJ5KHYgPT4gdGhpcy5yb2xlcy5pbmNsdWRlcyh2KSk7XHJcbiAgICAgIGVsc2UgcmV0dXJuIHQucm9sZS5zb21lKHYgPT4gdGhpcy5yb2xlcy5pbmNsdWRlcyh2KSk7XHJcbiAgICB9XHJcbiAgICBpZiAodC5hYmlsaXR5KSB7XHJcbiAgICAgIGlmICh0Lm1vZGUgPT09ICdhbGxPZicpXHJcbiAgICAgICAgcmV0dXJuICh0LmFiaWxpdHkgYXMgYW55W10pLmV2ZXJ5KHYgPT4gdGhpcy5hYmlsaXRpZXMuaW5jbHVkZXModikpO1xyXG4gICAgICBlbHNlIHJldHVybiAodC5hYmlsaXR5IGFzIGFueVtdKS5zb21lKHYgPT4gdGhpcy5hYmlsaXRpZXMuaW5jbHVkZXModikpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBpbm5lciAqL1xyXG4gIHBhcnNlQWJpbGl0eSh2YWx1ZTogQUNMQ2FuVHlwZSk6IEFDTENhblR5cGUge1xyXG4gICAgaWYgKFxyXG4gICAgICB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInIHx8XHJcbiAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgfHxcclxuICAgICAgQXJyYXkuaXNBcnJheSh2YWx1ZSlcclxuICAgICkge1xyXG4gICAgICB2YWx1ZSA9IDxBQ0xUeXBlPnsgYWJpbGl0eTogQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IFt2YWx1ZV0gfTtcclxuICAgIH1cclxuICAgIGRlbGV0ZSB2YWx1ZS5yb2xlO1xyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5b2T5YmN55So5oi35piv5ZCm5pyJ5a+55bqU5p2D6ZmQ54K5XHJcbiAgICovXHJcbiAgY2FuQWJpbGl0eSh2YWx1ZTogQUNMQ2FuVHlwZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY2FuKHRoaXMucGFyc2VBYmlsaXR5KHZhbHVlKSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==