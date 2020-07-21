/**
 * @fileoverview added by tsickle
 * Generated from: src/terminator.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from 'rxjs';
export class TerminatorService {
    constructor() {
        this.onDestroy = new Subject();
    }
    /**
     * @return {?}
     */
    destroy() {
        this.onDestroy.next(true);
    }
}
if (false) {
    /** @type {?} */
    TerminatorService.prototype.onDestroy;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVybWluYXRvci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS9zcmMvdGVybWluYXRvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvQixNQUFNLE9BQU8saUJBQWlCO0lBRzVCO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO0lBQ2pDLENBQUM7Ozs7SUFFRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztDQUNGOzs7SUFUQyxzQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBjbGFzcyBUZXJtaW5hdG9yU2VydmljZSB7XG4gIG9uRGVzdHJveTogU3ViamVjdDxib29sZWFuPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm9uRGVzdHJveSA9IG5ldyBTdWJqZWN0KCk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMub25EZXN0cm95Lm5leHQodHJ1ZSk7XG4gIH1cbn1cbiJdfQ==