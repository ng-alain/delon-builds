import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ACL_DEFAULT_CONFIG } from './acl.config';
import * as i0 from "@angular/core";
import * as i1 from "@delon/util/config";
/**
 * ACL 控制服务，[在线文档](https://ng-alain.com/acl)
 */
export class ACLService {
    /** ACL变更通知 */
    get change() {
        return this.aclChange.asObservable();
    }
    /** 获取所有数据 */
    get data() {
        return {
            full: this.full,
            roles: this.roles,
            abilities: this.abilities
        };
    }
    get guard_url() {
        return this.options.guard_url;
    }
    constructor(configSrv) {
        this.roles = [];
        this.abilities = [];
        this.full = false;
        this.aclChange = new BehaviorSubject(null);
        this.options = configSrv.merge('acl', ACL_DEFAULT_CONFIG);
    }
    parseACLType(val) {
        let t;
        if (typeof val === 'number') {
            t = { ability: [val] };
        }
        else if (Array.isArray(val) && val.length > 0 && typeof val[0] === 'number') {
            t = { ability: val };
        }
        else if (typeof val === 'object' && !Array.isArray(val)) {
            t = { ...val };
        }
        else if (Array.isArray(val)) {
            t = { role: val };
        }
        else {
            t = { role: val == null ? [] : [val] };
        }
        return { except: false, ...t };
    }
    /**
     * 设置当前用户角色或权限能力（会先清除所有）
     */
    set(value) {
        this.full = false;
        this.abilities = [];
        this.roles = [];
        this.add(value);
        this.aclChange.next(value);
    }
    /**
     * 标识当前用户为全量，即不受限
     */
    setFull(val) {
        this.full = val;
        this.aclChange.next(val);
    }
    /**
     * 设置当前用户权限能力（会先清除所有）
     */
    setAbility(abilities) {
        this.set({ ability: abilities });
    }
    /**
     * 设置当前用户角色（会先清除所有）
     */
    setRole(roles) {
        this.set({ role: roles });
    }
    /**
     * 为当前用户增加角色或权限能力
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
     */
    removeRole(roles) {
        for (const val of roles) {
            const idx = this.roles.indexOf(val);
            if (idx !== -1) {
                this.roles.splice(idx, 1);
            }
        }
        this.aclChange.next(this.data);
    }
    /**
     * 为当前用户移除权限
     */
    removeAbility(abilities) {
        for (const val of abilities) {
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
     */
    can(roleOrAbility) {
        const { preCan } = this.options;
        if (preCan) {
            roleOrAbility = preCan(roleOrAbility);
        }
        const t = this.parseACLType(roleOrAbility);
        let result = false;
        if (this.full === true || !roleOrAbility) {
            result = true;
        }
        else {
            if (t.role && t.role.length > 0) {
                if (t.mode === 'allOf') {
                    result = t.role.every(v => this.roles.includes(v));
                }
                else {
                    result = t.role.some(v => this.roles.includes(v));
                }
            }
            if (t.ability && t.ability.length > 0) {
                if (t.mode === 'allOf') {
                    result = t.ability.every(v => this.abilities.includes(v));
                }
                else {
                    result = t.ability.some(v => this.abilities.includes(v));
                }
            }
        }
        return t.except === true ? !result : result;
    }
    /** @inner */
    parseAbility(value) {
        if (typeof value === 'number' || typeof value === 'string' || Array.isArray(value)) {
            value = { ability: Array.isArray(value) ? value : [value] };
        }
        delete value.role;
        return value;
    }
    /**
     * 当前用户是否有对应权限点
     */
    canAbility(value) {
        return this.can(this.parseAbility(value));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: ACLService, deps: [{ token: i1.AlainConfigService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: ACLService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: ACLService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: () => [{ type: i1.AlainConfigService }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hY2wvc3JjL2FjbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUluRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxjQUFjLENBQUM7OztBQUdsRDs7R0FFRztBQUVILE1BQU0sT0FBTyxVQUFVO0lBT3JCLGNBQWM7SUFDZCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUVELGFBQWE7SUFDYixJQUFJLElBQUk7UUFDTixPQUFPO1lBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztTQUMxQixDQUFDO0lBQ0osQ0FBQztJQUVELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFVLENBQUM7SUFDakMsQ0FBQztJQUVELFlBQVksU0FBNkI7UUF2QmpDLFVBQUssR0FBYSxFQUFFLENBQUM7UUFDckIsY0FBUyxHQUEyQixFQUFFLENBQUM7UUFDdkMsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUNiLGNBQVMsR0FBRyxJQUFJLGVBQWUsQ0FBMkIsSUFBSSxDQUFDLENBQUM7UUFxQnRFLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsa0JBQWtCLENBQUUsQ0FBQztJQUM3RCxDQUFDO0lBRU8sWUFBWSxDQUFDLEdBQTJEO1FBQzlFLElBQUksQ0FBVSxDQUFDO1FBQ2YsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUU7WUFDM0Is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QUFDLENBQUM7aUJBQ3ZGO3FCQUFNO29CQUNMLE1BQU0sR0FBSSxDQUFDLENBQUMsT0FBa0MsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUN0RjthQUNGO1NBQ0Y7UUFFRCxPQUFPLENBQUMsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQzlDLENBQUM7SUFFRCxhQUFhO0lBQ2IsWUFBWSxDQUFDLEtBQWlCO1FBQzVCLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2xGLEtBQUssR0FBRyxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQWEsQ0FBQztTQUN4RTtRQUNELE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQztRQUNsQixPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRDs7T0FFRztJQUNILFVBQVUsQ0FBQyxLQUFpQjtRQUMxQixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7OEdBL0xVLFVBQVU7a0hBQVYsVUFBVSxjQURHLE1BQU07OzJGQUNuQixVQUFVO2tCQUR0QixVQUFVO21CQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBBbGFpbkFDTENvbmZpZywgQWxhaW5Db25maWdTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwvY29uZmlnJztcblxuaW1wb3J0IHsgQUNMX0RFRkFVTFRfQ09ORklHIH0gZnJvbSAnLi9hY2wuY29uZmlnJztcbmltcG9ydCB7IEFDTENhblR5cGUsIEFDTFR5cGUgfSBmcm9tICcuL2FjbC50eXBlJztcblxuLyoqXG4gKiBBQ0wg5o6n5Yi25pyN5Yqh77yMW+WcqOe6v+aWh+aho10oaHR0cHM6Ly9uZy1hbGFpbi5jb20vYWNsKVxuICovXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEFDTFNlcnZpY2Uge1xuICBwcml2YXRlIG9wdGlvbnM6IEFsYWluQUNMQ29uZmlnO1xuICBwcml2YXRlIHJvbGVzOiBzdHJpbmdbXSA9IFtdO1xuICBwcml2YXRlIGFiaWxpdGllczogQXJyYXk8bnVtYmVyIHwgc3RyaW5nPiA9IFtdO1xuICBwcml2YXRlIGZ1bGwgPSBmYWxzZTtcbiAgcHJpdmF0ZSBhY2xDaGFuZ2UgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEFDTFR5cGUgfCBib29sZWFuIHwgbnVsbD4obnVsbCk7XG5cbiAgLyoqIEFDTOWPmOabtOmAmuefpSAqL1xuICBnZXQgY2hhbmdlKCk6IE9ic2VydmFibGU8QUNMVHlwZSB8IGJvb2xlYW4gfCBudWxsPiB7XG4gICAgcmV0dXJuIHRoaXMuYWNsQ2hhbmdlLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgLyoqIOiOt+WPluaJgOacieaVsOaNriAqL1xuICBnZXQgZGF0YSgpOiB7IGZ1bGw6IGJvb2xlYW47IHJvbGVzOiBzdHJpbmdbXTsgYWJpbGl0aWVzOiBBcnJheTxzdHJpbmcgfCBudW1iZXI+IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBmdWxsOiB0aGlzLmZ1bGwsXG4gICAgICByb2xlczogdGhpcy5yb2xlcyxcbiAgICAgIGFiaWxpdGllczogdGhpcy5hYmlsaXRpZXNcbiAgICB9O1xuICB9XG5cbiAgZ2V0IGd1YXJkX3VybCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZ3VhcmRfdXJsITtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZ1NydjogQWxhaW5Db25maWdTZXJ2aWNlKSB7XG4gICAgdGhpcy5vcHRpb25zID0gY29uZmlnU3J2Lm1lcmdlKCdhY2wnLCBBQ0xfREVGQVVMVF9DT05GSUcpITtcbiAgfVxuXG4gIHByaXZhdGUgcGFyc2VBQ0xUeXBlKHZhbDogc3RyaW5nIHwgc3RyaW5nW10gfCBudW1iZXIgfCBudW1iZXJbXSB8IEFDTFR5cGUgfCBudWxsKTogQUNMVHlwZSB7XG4gICAgbGV0IHQ6IEFDTFR5cGU7XG4gICAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgICB0ID0geyBhYmlsaXR5OiBbdmFsXSB9O1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWwpICYmIHZhbC5sZW5ndGggPiAwICYmIHR5cGVvZiB2YWxbMF0gPT09ICdudW1iZXInKSB7XG4gICAgICB0ID0geyBhYmlsaXR5OiB2YWwgfTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICAgIHQgPSB7IC4uLnZhbCB9O1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgICB0ID0geyByb2xlOiB2YWwgYXMgc3RyaW5nW10gfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdCA9IHsgcm9sZTogdmFsID09IG51bGwgPyBbXSA6IFt2YWxdIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgZXhjZXB0OiBmYWxzZSwgLi4udCB9O1xuICB9XG5cbiAgLyoqXG4gICAqIOiuvue9ruW9k+WJjeeUqOaIt+inkuiJsuaIluadg+mZkOiDveWKm++8iOS8muWFiOa4hemZpOaJgOacie+8iVxuICAgKi9cbiAgc2V0KHZhbHVlOiBBQ0xUeXBlKTogdm9pZCB7XG4gICAgdGhpcy5mdWxsID0gZmFsc2U7XG4gICAgdGhpcy5hYmlsaXRpZXMgPSBbXTtcbiAgICB0aGlzLnJvbGVzID0gW107XG4gICAgdGhpcy5hZGQodmFsdWUpO1xuICAgIHRoaXMuYWNsQ2hhbmdlLm5leHQodmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIOagh+ivhuW9k+WJjeeUqOaIt+S4uuWFqOmHj++8jOWNs+S4jeWPl+mZkFxuICAgKi9cbiAgc2V0RnVsbCh2YWw6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmZ1bGwgPSB2YWw7XG4gICAgdGhpcy5hY2xDaGFuZ2UubmV4dCh2YWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIOiuvue9ruW9k+WJjeeUqOaIt+adg+mZkOiDveWKm++8iOS8muWFiOa4hemZpOaJgOacie+8iVxuICAgKi9cbiAgc2V0QWJpbGl0eShhYmlsaXRpZXM6IEFycmF5PG51bWJlciB8IHN0cmluZz4pOiB2b2lkIHtcbiAgICB0aGlzLnNldCh7IGFiaWxpdHk6IGFiaWxpdGllcyB9IGFzIEFDTFR5cGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIOiuvue9ruW9k+WJjeeUqOaIt+inkuiJsu+8iOS8muWFiOa4hemZpOaJgOacie+8iVxuICAgKi9cbiAgc2V0Um9sZShyb2xlczogc3RyaW5nW10pOiB2b2lkIHtcbiAgICB0aGlzLnNldCh7IHJvbGU6IHJvbGVzIH0gYXMgQUNMVHlwZSk7XG4gIH1cblxuICAvKipcbiAgICog5Li65b2T5YmN55So5oi35aKe5Yqg6KeS6Imy5oiW5p2D6ZmQ6IO95YqbXG4gICAqL1xuICBhZGQodmFsdWU6IEFDTFR5cGUpOiB2b2lkIHtcbiAgICBpZiAodmFsdWUucm9sZSAmJiB2YWx1ZS5yb2xlLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMucm9sZXMucHVzaCguLi52YWx1ZS5yb2xlKTtcbiAgICB9XG4gICAgaWYgKHZhbHVlLmFiaWxpdHkgJiYgdmFsdWUuYWJpbGl0eS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmFiaWxpdGllcy5wdXNoKC4uLnZhbHVlLmFiaWxpdHkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDkuLrlvZPliY3nlKjmiLfpmYTliqDop5LoibJcbiAgICovXG4gIGF0dGFjaFJvbGUocm9sZXM6IHN0cmluZ1tdKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCB2YWwgb2Ygcm9sZXMpIHtcbiAgICAgIGlmICghdGhpcy5yb2xlcy5pbmNsdWRlcyh2YWwpKSB7XG4gICAgICAgIHRoaXMucm9sZXMucHVzaCh2YWwpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmFjbENoYW5nZS5uZXh0KHRoaXMuZGF0YSk7XG4gIH1cblxuICAvKipcbiAgICog5Li65b2T5YmN55So5oi36ZmE5Yqg5p2D6ZmQXG4gICAqL1xuICBhdHRhY2hBYmlsaXR5KGFiaWxpdGllczogQXJyYXk8bnVtYmVyIHwgc3RyaW5nPik6IHZvaWQge1xuICAgIGZvciAoY29uc3QgdmFsIG9mIGFiaWxpdGllcykge1xuICAgICAgaWYgKCF0aGlzLmFiaWxpdGllcy5pbmNsdWRlcyh2YWwpKSB7XG4gICAgICAgIHRoaXMuYWJpbGl0aWVzLnB1c2godmFsKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5hY2xDaGFuZ2UubmV4dCh0aGlzLmRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIOS4uuW9k+WJjeeUqOaIt+enu+mZpOinkuiJslxuICAgKi9cbiAgcmVtb3ZlUm9sZShyb2xlczogc3RyaW5nW10pOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IHZhbCBvZiByb2xlcykge1xuICAgICAgY29uc3QgaWR4ID0gdGhpcy5yb2xlcy5pbmRleE9mKHZhbCk7XG4gICAgICBpZiAoaWR4ICE9PSAtMSkge1xuICAgICAgICB0aGlzLnJvbGVzLnNwbGljZShpZHgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmFjbENoYW5nZS5uZXh0KHRoaXMuZGF0YSk7XG4gIH1cblxuICAvKipcbiAgICog5Li65b2T5YmN55So5oi356e76Zmk5p2D6ZmQXG4gICAqL1xuICByZW1vdmVBYmlsaXR5KGFiaWxpdGllczogQXJyYXk8bnVtYmVyIHwgc3RyaW5nPik6IHZvaWQge1xuICAgIGZvciAoY29uc3QgdmFsIG9mIGFiaWxpdGllcykge1xuICAgICAgY29uc3QgaWR4ID0gdGhpcy5hYmlsaXRpZXMuaW5kZXhPZih2YWwpO1xuICAgICAgaWYgKGlkeCAhPT0gLTEpIHtcbiAgICAgICAgdGhpcy5hYmlsaXRpZXMuc3BsaWNlKGlkeCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuYWNsQ2hhbmdlLm5leHQodGhpcy5kYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDlvZPliY3nlKjmiLfmmK/lkKbmnInlr7nlupTop5LoibLvvIzlhbblrp4gYG51bWJlcmAg6KGo56S6QWJpbGl0eVxuICAgKlxuICAgKiAtIOW9kyBgZnVsbDogdHJ1ZWAg5oiW5Y+C5pWwIGBudWxsYCDml7bov5Tlm54gYHRydWVgXG4gICAqIC0g6Iul5L2/55SoIGBBQ0xUeXBlYCDlj4LmlbDvvIzlj6/ku6XmjIflrpogYG1vZGVgIOagoemqjOaooeW8j1xuICAgKi9cbiAgY2FuKHJvbGVPckFiaWxpdHk6IEFDTENhblR5cGUgfCBudWxsKTogYm9vbGVhbiB7XG4gICAgY29uc3QgeyBwcmVDYW4gfSA9IHRoaXMub3B0aW9ucztcbiAgICBpZiAocHJlQ2FuKSB7XG4gICAgICByb2xlT3JBYmlsaXR5ID0gcHJlQ2FuKHJvbGVPckFiaWxpdHkhKTtcbiAgICB9XG5cbiAgICBjb25zdCB0ID0gdGhpcy5wYXJzZUFDTFR5cGUocm9sZU9yQWJpbGl0eSk7XG4gICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xuICAgIGlmICh0aGlzLmZ1bGwgPT09IHRydWUgfHwgIXJvbGVPckFiaWxpdHkpIHtcbiAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0LnJvbGUgJiYgdC5yb2xlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgaWYgKHQubW9kZSA9PT0gJ2FsbE9mJykge1xuICAgICAgICAgIHJlc3VsdCA9IHQucm9sZS5ldmVyeSh2ID0+IHRoaXMucm9sZXMuaW5jbHVkZXModikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdCA9IHQucm9sZS5zb21lKHYgPT4gdGhpcy5yb2xlcy5pbmNsdWRlcyh2KSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0LmFiaWxpdHkgJiYgdC5hYmlsaXR5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgaWYgKHQubW9kZSA9PT0gJ2FsbE9mJykge1xuICAgICAgICAgIHJlc3VsdCA9ICh0LmFiaWxpdHkgYXMgQXJyYXk8bnVtYmVyIHwgc3RyaW5nPikuZXZlcnkodiA9PiB0aGlzLmFiaWxpdGllcy5pbmNsdWRlcyh2KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0ID0gKHQuYWJpbGl0eSBhcyBBcnJheTxudW1iZXIgfCBzdHJpbmc+KS5zb21lKHYgPT4gdGhpcy5hYmlsaXRpZXMuaW5jbHVkZXModikpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHQuZXhjZXB0ID09PSB0cnVlID8gIXJlc3VsdCA6IHJlc3VsdDtcbiAgfVxuXG4gIC8qKiBAaW5uZXIgKi9cbiAgcGFyc2VBYmlsaXR5KHZhbHVlOiBBQ0xDYW5UeXBlKTogQUNMQ2FuVHlwZSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgfHwgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyB8fCBBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUgPSB7IGFiaWxpdHk6IEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbdmFsdWVdIH0gYXMgQUNMVHlwZTtcbiAgICB9XG4gICAgZGVsZXRlIHZhbHVlLnJvbGU7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIOW9k+WJjeeUqOaIt+aYr+WQpuacieWvueW6lOadg+mZkOeCuVxuICAgKi9cbiAgY2FuQWJpbGl0eSh2YWx1ZTogQUNMQ2FuVHlwZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNhbih0aGlzLnBhcnNlQWJpbGl0eSh2YWx1ZSkpO1xuICB9XG59XG4iXX0=