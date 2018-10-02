/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, Input, ElementRef, Renderer2, } from '@angular/core';
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
        this.change$ = /** @type {?} */ (this.srv.change.subscribe(() => this.set(this._value)));
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
     * @param {?} value
     * @return {?}
     */
    set(value) {
        /** @type {?} */
        const CLS = 'acl__hide';
        /** @type {?} */
        const el = this.el.nativeElement;
        if (this.srv.can(value)) {
            this.renderer.removeClass(el, CLS);
        }
        else {
            this.renderer.addClass(el, CLS);
        }
        this._value = value;
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
    /** @type {?} */
    ACLDirective.prototype._value;
    /** @type {?} */
    ACLDirective.prototype.change$;
    /** @type {?} */
    ACLDirective.prototype.el;
    /** @type {?} */
    ACLDirective.prototype.renderer;
    /** @type {?} */
    ACLDirective.prototype.srv;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNsLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hY2wvIiwic291cmNlcyI6WyJzcmMvYWNsLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsVUFBVSxFQUNWLFNBQVMsR0FFVixNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTTNDLE1BQU07Ozs7OztJQXlCSixZQUNVLElBQ0EsVUFDQTtRQUZBLE9BQUUsR0FBRixFQUFFO1FBQ0YsYUFBUSxHQUFSLFFBQVE7UUFDUixRQUFHLEdBQUgsR0FBRztRQUVYLElBQUksQ0FBQyxPQUFPLHFCQUFRLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBLENBQUM7S0FDNUU7Ozs7O0lBM0JELElBQ0ksR0FBRyxDQUFDLEtBQWlCO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDakI7Ozs7O0lBRUQsSUFDSSxPQUFPLENBQUMsS0FBaUI7UUFDM0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0tBQ3hDOzs7OztJQUVPLEdBQUcsQ0FBQyxLQUFpQjs7UUFDM0IsTUFBTSxHQUFHLEdBQUcsV0FBVyxDQUFDOztRQUN4QixNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQztRQUNqQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNwQzthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ2pDO1FBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Ozs7O0lBV3RCLFdBQVc7UUFDVCxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQzVCOzs7WUF0Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxPQUFPO2FBQ2xCOzs7O1lBWEMsVUFBVTtZQUNWLFNBQVM7WUFLRixVQUFVOzs7a0JBVWhCLEtBQUssU0FBQyxLQUFLO3NCQUtYLEtBQUssU0FBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBEaXJlY3RpdmUsXHJcbiAgSW5wdXQsXHJcbiAgRWxlbWVudFJlZixcclxuICBSZW5kZXJlcjIsXHJcbiAgT25EZXN0cm95LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IEFDTFNlcnZpY2UgfSBmcm9tICcuL2FjbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQUNMQ2FuVHlwZSB9IGZyb20gJy4vYWNsLnR5cGUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYWNsXScsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBQ0xEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgX3ZhbHVlOiBhbnk7XHJcbiAgcHJpdmF0ZSBjaGFuZ2UkOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIEBJbnB1dCgnYWNsJylcclxuICBzZXQgYWNsKHZhbHVlOiBBQ0xDYW5UeXBlKSB7XHJcbiAgICB0aGlzLnNldCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoJ2FjbC1hYmlsaXR5JylcclxuICBzZXQgYWJpbGl0eSh2YWx1ZTogQUNMQ2FuVHlwZSkge1xyXG4gICAgdGhpcy5zZXQodGhpcy5zcnYucGFyc2VBYmlsaXR5KHZhbHVlKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldCh2YWx1ZTogQUNMQ2FuVHlwZSkge1xyXG4gICAgY29uc3QgQ0xTID0gJ2FjbF9faGlkZSc7XHJcbiAgICBjb25zdCBlbCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcclxuICAgIGlmICh0aGlzLnNydi5jYW4odmFsdWUpKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWwsIENMUyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGVsLCBDTFMpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgc3J2OiBBQ0xTZXJ2aWNlLFxyXG4gICkge1xyXG4gICAgdGhpcy5jaGFuZ2UkID0gPGFueT50aGlzLnNydi5jaGFuZ2Uuc3Vic2NyaWJlKCgpID0+IHRoaXMuc2V0KHRoaXMuX3ZhbHVlKSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2hhbmdlJC51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=