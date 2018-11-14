/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9pbWFnZS8iLCJzb3VyY2VzIjpbImltYWdlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUVMLFVBQVUsRUFDVixTQUFTLEdBSVYsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFcEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7O0FBUTdDO0lBVUUsd0JBQ1UsRUFBYyxFQUNkLE1BQWlCLEVBQ3pCLEdBQWdCO1FBRlIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNkLFdBQU0sR0FBTixNQUFNLENBQVc7UUFSSCxTQUFJLEdBQUcsRUFBRSxDQUFDO1FBRXpCLFVBQUssR0FBRyx1QkFBdUIsQ0FBQztRQUVqQyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBT3JCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7SUFFRCxpQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCxvQ0FBVzs7OztJQUFYLFVBQ0UsT0FBNkQ7UUFFN0QsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFO2dCQUNqQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDcEI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ2Y7U0FDRjtJQUNILENBQUM7Ozs7SUFFTywrQkFBTTs7O0lBQWQ7O1lBQ00sTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHO1FBRXJCLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRTs7Z0JBQ3pCLEdBQUcsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzs7Z0JBQzNCLElBQUksR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDNUIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNwRSxNQUFNLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN4Qjs7WUFFSyxNQUFNLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7O1lBQ3ZDLE9BQU8sR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQztRQUN2QyxJQUFJLE1BQU0sSUFBSSxPQUFPO1lBQUUsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTlELElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNqRSxDQUFDOzs7O0lBRU8sb0NBQVc7OztJQUFuQjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUN0QixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFDckIsU0FBUyxFQUNULGVBQWEsSUFBSSxDQUFDLEtBQUssT0FBSSxDQUM1QixDQUFDO0lBQ0osQ0FBQzs7Z0JBNURGLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUU7Ozs7Z0JBaEIvQixVQUFVO2dCQUNWLFNBQVM7Z0JBT0YsV0FBVzs7O3NCQVVqQixLQUFLLFNBQUMsTUFBTTt1QkFFWixLQUFLO3dCQUVMLEtBQUs7O0lBRmtCO1FBQWQsV0FBVyxFQUFFOztnREFBVztJQXlEcEMscUJBQUM7Q0FBQSxBQTdERCxJQTZEQztTQTVEWSxjQUFjOzs7SUFDekIsNkJBQTJCOztJQUUzQiw4QkFBa0M7O0lBRWxDLCtCQUF5Qzs7SUFFekMsZ0NBQXVCOztJQUdyQiw0QkFBc0I7O0lBQ3RCLGdDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgRWxlbWVudFJlZixcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBPbkluaXQsXG4gIFNpbXBsZUNoYW5nZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBkZWVwQ29weSwgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbmltcG9ydCB7IEltYWdlQ29uZmlnIH0gZnJvbSAnLi9pbWFnZS5jb25maWcnO1xuXG4vKipcbiAqIGltZ+agh+etvlxuICogKyDmlK/mjIHlvq7kv6HjgIFxceWktOWDj+inhOWImee8qeeVpeWbvuinhOWImVxuICogKyDmlK/mjIHnp7vpmaRodHRwJmh0dHBz5Y2P6K6uaHR0cFxuICogKyDmlK/mjIHlop7liqBvbmVycm9y5LqL5Lu2XG4gKi9cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tfc3JjXScgfSlcbmV4cG9ydCBjbGFzcyBJbWFnZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcbiAgQElucHV0KCdfc3JjJykgc3JjOiBzdHJpbmc7XG5cbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgc2l6ZSA9IDY0O1xuXG4gIEBJbnB1dCgpIGVycm9yID0gJy4vYXNzZXRzL2ltZy9sb2dvLnN2Zyc7XG5cbiAgcHJpdmF0ZSBpbml0ZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyOiBSZW5kZXJlcjIsXG4gICAgREVGOiBJbWFnZUNvbmZpZyxcbiAgKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkZWVwQ29weShERUYpKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlKCk7XG4gICAgdGhpcy51cGRhdGVFcnJvcigpO1xuICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKFxuICAgIGNoYW5nZXM6IHsgW1AgaW4ga2V5b2YgdGhpc10/OiBTaW1wbGVDaGFuZ2UgfSAmIFNpbXBsZUNoYW5nZXMsXG4gICk6IHZvaWQge1xuICAgIGlmICh0aGlzLmluaXRlZCkge1xuICAgICAgaWYgKGNoYW5nZXMuZXJyb3IpIHtcbiAgICAgICAgdGhpcy51cGRhdGVFcnJvcigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZSgpIHtcbiAgICBsZXQgbmV3U3JjID0gdGhpcy5zcmM7XG5cbiAgICBpZiAobmV3U3JjLmluY2x1ZGVzKCdxbG9nby5jbicpKSB7XG4gICAgICBjb25zdCBhcnIgPSBuZXdTcmMuc3BsaXQoJy8nKSxcbiAgICAgICAgc2l6ZSA9IGFyclthcnIubGVuZ3RoIC0gMV07XG4gICAgICBhcnJbYXJyLmxlbmd0aCAtIDFdID1cbiAgICAgICAgc2l6ZSA9PT0gJzAnIHx8ICtzaXplICE9PSB0aGlzLnNpemUgPyB0aGlzLnNpemUudG9TdHJpbmcoKSA6IHNpemU7XG4gICAgICBuZXdTcmMgPSBhcnIuam9pbignLycpO1xuICAgIH1cblxuICAgIGNvbnN0IGlzSHR0cCA9IG5ld1NyYy5zdGFydHNXaXRoKCdodHRwOicpLFxuICAgICAgaXNIdHRwcyA9IG5ld1NyYy5zdGFydHNXaXRoKCdodHRwczonKTtcbiAgICBpZiAoaXNIdHRwIHx8IGlzSHR0cHMpIG5ld1NyYyA9IG5ld1NyYy5zdWJzdHIoaXNIdHRwID8gNSA6IDYpO1xuXG4gICAgdGhpcy5yZW5kZXIuc2V0QXR0cmlidXRlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3NyYycsIG5ld1NyYyk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUVycm9yKCkge1xuICAgIHRoaXMucmVuZGVyLnNldEF0dHJpYnV0ZShcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudCxcbiAgICAgICdvbmVycm9yJyxcbiAgICAgIGB0aGlzLnNyYz0nJHt0aGlzLmVycm9yfSc7YCxcbiAgICApO1xuICB9XG59XG4iXX0=