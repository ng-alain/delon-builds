/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { filter } from 'rxjs/operators';
import { ACLService } from './acl.service';
export class ACLDirective {
    /**
     * @param {?} el
     * @param {?} renderer
     * @param {?} srv
     */
    constructor(el, renderer, srv) {
        this.el = el;
        this.renderer = renderer;
        this.srv = srv;
        this.change$ = this.srv.change.pipe(filter((/**
         * @param {?} r
         * @return {?}
         */
        r => r != null))).subscribe((/**
         * @return {?}
         */
        () => this.set(this._value)));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set acl(value) {
        this.set(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set ability(value) {
        this.set(this.srv.parseAbility(value));
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    set(value) {
        this._value = value;
        /** @type {?} */
        const CLS = 'acl__hide';
        /** @type {?} */
        const el = this.el.nativeElement;
        if (this.srv.can(this._value)) {
            this.renderer.removeClass(el, CLS);
        }
        else {
            this.renderer.addClass(el, CLS);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.change$.unsubscribe();
    }
}
ACLDirective.decorators = [
    { type: Directive, args: [{
                selector: '[acl]',
                exportAs: 'acl',
            },] }
];
/** @nocollapse */
ACLDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ACLService }
];
ACLDirective.propDecorators = {
    acl: [{ type: Input, args: ['acl',] }],
    ability: [{ type: Input, args: ['acl-ability',] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    ACLDirective.prototype._value;
    /**
     * @type {?}
     * @private
     */
    ACLDirective.prototype.change$;
    /**
     * @type {?}
     * @private
     */
    ACLDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    ACLDirective.prototype.renderer;
    /**
     * @type {?}
     * @protected
     */
    ACLDirective.prototype.srv;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNsLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hY2wvIiwic291cmNlcyI6WyJzcmMvYWNsLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFhLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVuRixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8zQyxNQUFNLE9BQU8sWUFBWTs7Ozs7O0lBeUJ2QixZQUFvQixFQUFjLEVBQVUsUUFBbUIsRUFBWSxHQUFlO1FBQXRFLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVksUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUN4RixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFDLENBQUMsQ0FBQyxTQUFTOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBQyxDQUFDO0lBQ3JHLENBQUM7Ozs7O0lBdkJELElBQ0ksR0FBRyxDQUFDLEtBQWlCO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEIsQ0FBQzs7Ozs7SUFFRCxJQUNJLE9BQU8sQ0FBQyxLQUFpQjtRQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDekMsQ0FBQzs7Ozs7O0lBRU8sR0FBRyxDQUFDLEtBQWlCO1FBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDOztjQUNkLEdBQUcsR0FBRyxXQUFXOztjQUNqQixFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhO1FBQ2hDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNwQzthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQzs7OztJQU1ELFdBQVc7UUFDVCxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzdCLENBQUM7OztZQW5DRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLFFBQVEsRUFBRSxLQUFLO2FBQ2hCOzs7O1lBVG1CLFVBQVU7WUFBb0IsU0FBUztZQUdsRCxVQUFVOzs7a0JBV2hCLEtBQUssU0FBQyxLQUFLO3NCQUtYLEtBQUssU0FBQyxhQUFhOzs7Ozs7O0lBUnBCLDhCQUEyQjs7Ozs7SUFDM0IsK0JBQThCOzs7OztJQXVCbEIsMEJBQXNCOzs7OztJQUFFLGdDQUEyQjs7Ozs7SUFBRSwyQkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkRlc3Ryb3ksIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBQ0xTZXJ2aWNlIH0gZnJvbSAnLi9hY2wuc2VydmljZSc7XG5pbXBvcnQgeyBBQ0xDYW5UeXBlIH0gZnJvbSAnLi9hY2wudHlwZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thY2xdJyxcbiAgZXhwb3J0QXM6ICdhY2wnLFxufSlcbmV4cG9ydCBjbGFzcyBBQ0xEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF92YWx1ZTogQUNMQ2FuVHlwZTtcbiAgcHJpdmF0ZSBjaGFuZ2UkOiBTdWJzY3JpcHRpb247XG5cbiAgQElucHV0KCdhY2wnKVxuICBzZXQgYWNsKHZhbHVlOiBBQ0xDYW5UeXBlKSB7XG4gICAgdGhpcy5zZXQodmFsdWUpO1xuICB9XG5cbiAgQElucHV0KCdhY2wtYWJpbGl0eScpXG4gIHNldCBhYmlsaXR5KHZhbHVlOiBBQ0xDYW5UeXBlKSB7XG4gICAgdGhpcy5zZXQodGhpcy5zcnYucGFyc2VBYmlsaXR5KHZhbHVlKSk7XG4gIH1cblxuICBwcml2YXRlIHNldCh2YWx1ZTogQUNMQ2FuVHlwZSkge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgY29uc3QgQ0xTID0gJ2FjbF9faGlkZSc7XG4gICAgY29uc3QgZWwgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgaWYgKHRoaXMuc3J2LmNhbih0aGlzLl92YWx1ZSkpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWwsIENMUyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoZWwsIENMUyk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcm90ZWN0ZWQgc3J2OiBBQ0xTZXJ2aWNlKSB7XG4gICAgdGhpcy5jaGFuZ2UkID0gdGhpcy5zcnYuY2hhbmdlLnBpcGUoZmlsdGVyKHIgPT4gciAhPSBudWxsKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMuc2V0KHRoaXMuX3ZhbHVlKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmNoYW5nZSQudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19