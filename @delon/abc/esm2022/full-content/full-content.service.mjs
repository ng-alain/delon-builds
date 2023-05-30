import { Injectable } from '@angular/core';
import { BehaviorSubject, share } from 'rxjs';
import * as i0 from "@angular/core";
class FullContentService {
    constructor() {
        this._change = new BehaviorSubject(null);
    }
    /** 切换全屏工作区状态 */
    toggle() {
        this._change.next(true);
    }
    get change() {
        return this._change.pipe(share());
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.3", ngImport: i0, type: FullContentService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.3", ngImport: i0, type: FullContentService, providedIn: 'root' }); }
}
export { FullContentService };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.3", ngImport: i0, type: FullContentService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbC1jb250ZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvZnVsbC1jb250ZW50L2Z1bGwtY29udGVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBYyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBRTFELE1BQ2Esa0JBQWtCO0lBRC9CO1FBRVUsWUFBTyxHQUFHLElBQUksZUFBZSxDQUFpQixJQUFJLENBQUMsQ0FBQztLQVU3RDtJQVJDLGdCQUFnQjtJQUNoQixNQUFNO1FBQ0osSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUNwQyxDQUFDOzhHQVZVLGtCQUFrQjtrSEFBbEIsa0JBQWtCLGNBREwsTUFBTTs7U0FDbkIsa0JBQWtCOzJGQUFsQixrQkFBa0I7a0JBRDlCLFVBQVU7bUJBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBzaGFyZSB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEZ1bGxDb250ZW50U2VydmljZSB7XG4gIHByaXZhdGUgX2NoYW5nZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbiB8IG51bGw+KG51bGwpO1xuXG4gIC8qKiDliIfmjaLlhajlsY/lt6XkvZzljLrnirbmgIEgKi9cbiAgdG9nZ2xlKCk6IHZvaWQge1xuICAgIHRoaXMuX2NoYW5nZS5uZXh0KHRydWUpO1xuICB9XG5cbiAgZ2V0IGNoYW5nZSgpOiBPYnNlcnZhYmxlPGJvb2xlYW4gfCBudWxsPiB7XG4gICAgcmV0dXJuIHRoaXMuX2NoYW5nZS5waXBlKHNoYXJlKCkpO1xuICB9XG59XG4iXX0=