/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, Input, ElementRef, Renderer2, } from '@angular/core';
import { deepCopy, InputNumber } from '@delon/util';
import { ImageConfig } from './image.config';
/**
 * img标签
 * + 支持微信、qq头像规则缩略图规则
 * + 支持移除http&https协议http
 * + 支持增加onerror事件
 */
var ImageDirective = /** @class */ (function () {
    function ImageDirective(el, render, DEF) {
        this.el = el;
        this.render = render;
        this.size = 64;
        this.error = './assets/img/logo.svg';
        this.inited = false;
        Object.assign(this, deepCopy(DEF));
    }
    /**
     * @return {?}
     */
    ImageDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.update();
        this.updateError();
        this.inited = true;
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    ImageDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.inited) {
            if (changes.error) {
                this.updateError();
            }
            else {
                this.update();
            }
        }
    };
    /**
     * @return {?}
     */
    ImageDirective.prototype.update = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var newSrc = this.src;
        if (newSrc.includes('qlogo.cn')) {
            /** @type {?} */
            var arr = newSrc.split('/');
            /** @type {?} */
            var size = arr[arr.length - 1];
            arr[arr.length - 1] =
                size === '0' || +size !== this.size ? this.size.toString() : size;
            newSrc = arr.join('/');
        }
        /** @type {?} */
        var isHttp = newSrc.startsWith('http:');
        /** @type {?} */
        var isHttps = newSrc.startsWith('https:');
        if (isHttp || isHttps)
            newSrc = newSrc.substr(isHttp ? 5 : 6);
        this.render.setAttribute(this.el.nativeElement, 'src', newSrc);
    };
    /**
     * @return {?}
     */
    ImageDirective.prototype.updateError = /**
     * @return {?}
     */
    function () {
        this.render.setAttribute(this.el.nativeElement, 'onerror', "this.src='" + this.error + "';");
    };
    ImageDirective.decorators = [
        { type: Directive, args: [{ selector: '[_src]' },] }
    ];
    /** @nocollapse */
    ImageDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: ImageConfig }
    ]; };
    ImageDirective.propDecorators = {
        src: [{ type: Input, args: ['_src',] }],
        size: [{ type: Input }],
        error: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Object)
    ], ImageDirective.prototype, "size", void 0);
    return ImageDirective;
}());
export { ImageDirective };
if (false) {
    /** @type {?} */
    ImageDirective.prototype.src;
    /** @type {?} */
    ImageDirective.prototype.size;
    /** @type {?} */
    ImageDirective.prototype.error;
    /** @type {?} */
    ImageDirective.prototype.inited;
    /** @type {?} */
    ImageDirective.prototype.el;
    /** @type {?} */
    ImageDirective.prototype.render;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9pbWFnZS8iLCJzb3VyY2VzIjpbImltYWdlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUVMLFVBQVUsRUFDVixTQUFTLEdBSVYsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFcEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7OztJQWtCM0Msd0JBQ1UsSUFDQSxRQUNSLEdBQWdCO1FBRlIsT0FBRSxHQUFGLEVBQUU7UUFDRixXQUFNLEdBQU4sTUFBTTtvQkFSZSxFQUFFO3FCQUVoQix1QkFBdUI7c0JBRXZCLEtBQUs7UUFPcEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDcEM7Ozs7SUFFRCxpQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7S0FDcEI7Ozs7O0lBRUQsb0NBQVc7Ozs7SUFBWCxVQUNFLE9BQTZEO1FBRTdELElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksT0FBTyxDQUFDLEtBQUssRUFBRTtnQkFDakIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQ3BCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUNmO1NBQ0Y7S0FDRjs7OztJQUVPLCtCQUFNOzs7OztRQUNaLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7UUFFdEIsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFOztZQUMvQixJQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUNBOztZQUQ3QixJQUNFLElBQUksR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztZQUM3QixHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7Z0JBQ2pCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ3BFLE1BQU0sR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3hCOztRQUVELElBQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQ0Q7O1FBRHhDLElBQ0UsT0FBTyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEMsSUFBSSxNQUFNLElBQUksT0FBTztZQUFFLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUU5RCxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7Ozs7O0lBR3pELG9DQUFXOzs7O1FBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUN0QixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFDckIsU0FBUyxFQUNULGVBQWEsSUFBSSxDQUFDLEtBQUssT0FBSSxDQUM1QixDQUFDOzs7Z0JBM0RMLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUU7Ozs7Z0JBaEIvQixVQUFVO2dCQUNWLFNBQVM7Z0JBT0YsV0FBVzs7O3NCQVVqQixLQUFLLFNBQUMsTUFBTTt1QkFFWixLQUFLO3dCQUVMLEtBQUs7OztRQUZJLFdBQVcsRUFBRTs7O3lCQXhCekI7O1NBcUJhLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIERpcmVjdGl2ZSxcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgRWxlbWVudFJlZixcclxuICBSZW5kZXJlcjIsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBPbkluaXQsXHJcbiAgU2ltcGxlQ2hhbmdlLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBkZWVwQ29weSwgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XHJcblxyXG5pbXBvcnQgeyBJbWFnZUNvbmZpZyB9IGZyb20gJy4vaW1hZ2UuY29uZmlnJztcclxuXHJcbi8qKlxyXG4gKiBpbWfmoIfnrb5cclxuICogKyDmlK/mjIHlvq7kv6HjgIFxceWktOWDj+inhOWImee8qeeVpeWbvuinhOWImVxyXG4gKiArIOaUr+aMgeenu+mZpGh0dHAmaHR0cHPljY/orq5odHRwXHJcbiAqICsg5pSv5oyB5aKe5Yqgb25lcnJvcuS6i+S7tlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW19zcmNdJyB9KVxyXG5leHBvcnQgY2xhc3MgSW1hZ2VEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XHJcbiAgQElucHV0KCdfc3JjJykgc3JjOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHNpemUgPSA2NDtcclxuXHJcbiAgQElucHV0KCkgZXJyb3IgPSAnLi9hc3NldHMvaW1nL2xvZ28uc3ZnJztcclxuXHJcbiAgcHJpdmF0ZSBpbml0ZWQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSByZW5kZXI6IFJlbmRlcmVyMixcclxuICAgIERFRjogSW1hZ2VDb25maWcsXHJcbiAgKSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRlZXBDb3B5KERFRikpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgdGhpcy51cGRhdGVFcnJvcigpO1xyXG4gICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoXHJcbiAgICBjaGFuZ2VzOiB7IFtQIGluIGtleW9mIHRoaXNdPzogU2ltcGxlQ2hhbmdlIH0gJiBTaW1wbGVDaGFuZ2VzLFxyXG4gICk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaW5pdGVkKSB7XHJcbiAgICAgIGlmIChjaGFuZ2VzLmVycm9yKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVFcnJvcigpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlKCkge1xyXG4gICAgbGV0IG5ld1NyYyA9IHRoaXMuc3JjO1xyXG5cclxuICAgIGlmIChuZXdTcmMuaW5jbHVkZXMoJ3Fsb2dvLmNuJykpIHtcclxuICAgICAgY29uc3QgYXJyID0gbmV3U3JjLnNwbGl0KCcvJyksXHJcbiAgICAgICAgc2l6ZSA9IGFyclthcnIubGVuZ3RoIC0gMV07XHJcbiAgICAgIGFyclthcnIubGVuZ3RoIC0gMV0gPVxyXG4gICAgICAgIHNpemUgPT09ICcwJyB8fCArc2l6ZSAhPT0gdGhpcy5zaXplID8gdGhpcy5zaXplLnRvU3RyaW5nKCkgOiBzaXplO1xyXG4gICAgICBuZXdTcmMgPSBhcnIuam9pbignLycpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGlzSHR0cCA9IG5ld1NyYy5zdGFydHNXaXRoKCdodHRwOicpLFxyXG4gICAgICBpc0h0dHBzID0gbmV3U3JjLnN0YXJ0c1dpdGgoJ2h0dHBzOicpO1xyXG4gICAgaWYgKGlzSHR0cCB8fCBpc0h0dHBzKSBuZXdTcmMgPSBuZXdTcmMuc3Vic3RyKGlzSHR0cCA/IDUgOiA2KTtcclxuXHJcbiAgICB0aGlzLnJlbmRlci5zZXRBdHRyaWJ1dGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnc3JjJywgbmV3U3JjKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlRXJyb3IoKSB7XHJcbiAgICB0aGlzLnJlbmRlci5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudCxcclxuICAgICAgJ29uZXJyb3InLFxyXG4gICAgICBgdGhpcy5zcmM9JyR7dGhpcy5lcnJvcn0nO2AsXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=