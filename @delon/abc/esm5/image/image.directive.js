/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, Input, Renderer2, } from '@angular/core';
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
            arr[arr.length - 1] = size === '0' || +size !== this.size ? this.size.toString() : size;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9pbWFnZS8iLCJzb3VyY2VzIjpbImltYWdlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFHTCxTQUFTLEdBR1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFcEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7O0FBUTdDO0lBUUUsd0JBQ1UsRUFBYyxFQUNkLE1BQWlCLEVBQ3pCLEdBQWdCO1FBRlIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNkLFdBQU0sR0FBTixNQUFNLENBQVc7UUFQSCxTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLFVBQUssR0FBRyx1QkFBdUIsQ0FBQztRQUVqQyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBT3JCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7SUFFRCxpQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCxvQ0FBVzs7OztJQUFYLFVBQ0UsT0FBNkQ7UUFFN0QsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFO2dCQUNqQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDcEI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ2Y7U0FDRjtJQUNILENBQUM7Ozs7SUFFTywrQkFBTTs7O0lBQWQ7O1lBQ00sTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHO1FBRXJCLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRTs7Z0JBQ3pCLEdBQUcsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzs7Z0JBQ3ZCLElBQUksR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDaEMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDeEYsTUFBTSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDeEI7O1lBRUssTUFBTSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDOztZQUNuQyxPQUFPLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7UUFDM0MsSUFBSSxNQUFNLElBQUksT0FBTztZQUFFLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUU5RCxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDakUsQ0FBQzs7OztJQUVPLG9DQUFXOzs7SUFBbkI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FDdEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQ3JCLFNBQVMsRUFDVCxlQUFhLElBQUksQ0FBQyxLQUFLLE9BQUksQ0FDNUIsQ0FBQztJQUNKLENBQUM7O2dCQXpERixTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFOzs7O2dCQWxCL0IsVUFBVTtnQkFJVixTQUFTO2dCQU1GLFdBQVc7OztzQkFVakIsS0FBSyxTQUFDLE1BQU07dUJBQ1osS0FBSzt3QkFDTCxLQUFLOztJQURrQjtRQUFkLFdBQVcsRUFBRTs7Z0RBQVc7SUF1RHBDLHFCQUFDO0NBQUEsQUExREQsSUEwREM7U0F6RFksY0FBYzs7O0lBQ3pCLDZCQUEyQjs7SUFDM0IsOEJBQWtDOztJQUNsQywrQkFBeUM7O0lBRXpDLGdDQUF1Qjs7SUFHckIsNEJBQXNCOztJQUN0QixnQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2UsXG4gIFNpbXBsZUNoYW5nZXMsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZGVlcENvcHksIElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5pbXBvcnQgeyBJbWFnZUNvbmZpZyB9IGZyb20gJy4vaW1hZ2UuY29uZmlnJztcblxuLyoqXG4gKiBpbWfmoIfnrb5cbiAqICsg5pSv5oyB5b6u5L+h44CBcXHlpLTlg4/op4TliJnnvKnnlaXlm77op4TliJlcbiAqICsg5pSv5oyB56e76ZmkaHR0cCZodHRwc+WNj+iurmh0dHBcbiAqICsg5pSv5oyB5aKe5Yqgb25lcnJvcuS6i+S7tlxuICovXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbX3NyY10nIH0pXG5leHBvcnQgY2xhc3MgSW1hZ2VEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG4gIEBJbnB1dCgnX3NyYycpIHNyYzogc3RyaW5nO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBzaXplID0gNjQ7XG4gIEBJbnB1dCgpIGVycm9yID0gJy4vYXNzZXRzL2ltZy9sb2dvLnN2Zyc7XG5cbiAgcHJpdmF0ZSBpbml0ZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyOiBSZW5kZXJlcjIsXG4gICAgREVGOiBJbWFnZUNvbmZpZyxcbiAgKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkZWVwQ29weShERUYpKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlKCk7XG4gICAgdGhpcy51cGRhdGVFcnJvcigpO1xuICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKFxuICAgIGNoYW5nZXM6IHsgW1AgaW4ga2V5b2YgdGhpc10/OiBTaW1wbGVDaGFuZ2UgfSAmIFNpbXBsZUNoYW5nZXMsXG4gICk6IHZvaWQge1xuICAgIGlmICh0aGlzLmluaXRlZCkge1xuICAgICAgaWYgKGNoYW5nZXMuZXJyb3IpIHtcbiAgICAgICAgdGhpcy51cGRhdGVFcnJvcigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZSgpIHtcbiAgICBsZXQgbmV3U3JjID0gdGhpcy5zcmM7XG5cbiAgICBpZiAobmV3U3JjLmluY2x1ZGVzKCdxbG9nby5jbicpKSB7XG4gICAgICBjb25zdCBhcnIgPSBuZXdTcmMuc3BsaXQoJy8nKTtcbiAgICAgIGNvbnN0IHNpemUgPSBhcnJbYXJyLmxlbmd0aCAtIDFdO1xuICAgICAgYXJyW2Fyci5sZW5ndGggLSAxXSA9IHNpemUgPT09ICcwJyB8fCArc2l6ZSAhPT0gdGhpcy5zaXplID8gdGhpcy5zaXplLnRvU3RyaW5nKCkgOiBzaXplO1xuICAgICAgbmV3U3JjID0gYXJyLmpvaW4oJy8nKTtcbiAgICB9XG5cbiAgICBjb25zdCBpc0h0dHAgPSBuZXdTcmMuc3RhcnRzV2l0aCgnaHR0cDonKTtcbiAgICBjb25zdCBpc0h0dHBzID0gbmV3U3JjLnN0YXJ0c1dpdGgoJ2h0dHBzOicpO1xuICAgIGlmIChpc0h0dHAgfHwgaXNIdHRwcykgbmV3U3JjID0gbmV3U3JjLnN1YnN0cihpc0h0dHAgPyA1IDogNik7XG5cbiAgICB0aGlzLnJlbmRlci5zZXRBdHRyaWJ1dGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnc3JjJywgbmV3U3JjKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlRXJyb3IoKSB7XG4gICAgdGhpcy5yZW5kZXIuc2V0QXR0cmlidXRlKFxuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LFxuICAgICAgJ29uZXJyb3InLFxuICAgICAgYHRoaXMuc3JjPScke3RoaXMuZXJyb3J9JztgLFxuICAgICk7XG4gIH1cbn1cbiJdfQ==