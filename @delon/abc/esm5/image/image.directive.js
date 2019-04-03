/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, Input, Renderer2, } from '@angular/core';
import { InputNumber } from '@delon/util';
import { ImageConfig } from './image.config';
/**
 * img标签
 * + 支持微信、qq头像规则缩略图规则
 * + 支持移除http&https协议http
 * + 支持增加onerror事件
 */
var ImageDirective = /** @class */ (function () {
    function ImageDirective(cog, el, render) {
        this.el = el;
        this.render = render;
        this.size = 64;
        this.error = './assets/img/logo.svg';
        this.inited = false;
        Object.assign(this, tslib_1.__assign({}, new ImageConfig(), cog));
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
        if (!this.inited)
            return;
        if (changes.error) {
            this.updateError();
        }
        else {
            this.update();
        }
    };
    /**
     * @private
     * @return {?}
     */
    ImageDirective.prototype.update = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var newSrc = this.src;
        var _a = this, size = _a.size, render = _a.render, el = _a.el;
        if (newSrc.includes('qlogo.cn')) {
            /** @type {?} */
            var arr = newSrc.split('/');
            /** @type {?} */
            var imgSize = arr[arr.length - 1];
            arr[arr.length - 1] = imgSize === '0' || +imgSize !== size ? size.toString() : imgSize;
            newSrc = arr.join('/');
        }
        /** @type {?} */
        var isHttp = newSrc.startsWith('http:');
        /** @type {?} */
        var isHttps = newSrc.startsWith('https:');
        if (isHttp || isHttps) {
            newSrc = newSrc.substr(isHttp ? 5 : 6);
        }
        render.setAttribute(el.nativeElement, 'src', newSrc);
        ['height', 'width'].forEach((/**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            return render.setAttribute(_this.el.nativeElement, v, size.toString());
        }));
    };
    /**
     * @private
     * @return {?}
     */
    ImageDirective.prototype.updateError = /**
     * @private
     * @return {?}
     */
    function () {
        this.render.setAttribute(this.el.nativeElement, 'onerror', "this.src='" + this.error + "'");
    };
    ImageDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[_src]',
                    exportAs: 'srcDirective',
                },] }
    ];
    /** @nocollapse */
    ImageDirective.ctorParameters = function () { return [
        { type: ImageConfig },
        { type: ElementRef },
        { type: Renderer2 }
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
    /**
     * @type {?}
     * @private
     */
    ImageDirective.prototype.inited;
    /**
     * @type {?}
     * @private
     */
    ImageDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    ImageDirective.prototype.render;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9pbWFnZS8iLCJzb3VyY2VzIjpbImltYWdlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFHTCxTQUFTLEdBR1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUUxQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7QUFRN0M7SUFXRSx3QkFBWSxHQUFnQixFQUFVLEVBQWMsRUFBVSxNQUFpQjtRQUF6QyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUx2RCxTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLFVBQUssR0FBRyx1QkFBdUIsQ0FBQztRQUVqQyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBR3JCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSx1QkFBTyxJQUFJLFdBQVcsRUFBRSxFQUFLLEdBQUcsRUFBRyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFFRCxpQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCxvQ0FBVzs7OztJQUFYLFVBQVksT0FBNkQ7UUFDdkUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQUUsT0FBTztRQUN6QixJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUU7WUFDakIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3BCO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDZjtJQUNILENBQUM7Ozs7O0lBRU8sK0JBQU07Ozs7SUFBZDtRQUFBLGlCQXFCQzs7WUFwQkssTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHO1FBQ2YsSUFBQSxTQUEyQixFQUF6QixjQUFJLEVBQUUsa0JBQU0sRUFBRSxVQUFXO1FBRWpDLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRTs7Z0JBQ3pCLEdBQUcsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzs7Z0JBQ3ZCLE9BQU8sR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDbkMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsT0FBTyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQ3ZGLE1BQU0sR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3hCOztZQUVLLE1BQU0sR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQzs7WUFDbkMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO1FBQzNDLElBQUksTUFBTSxJQUFJLE9BQU8sRUFBRTtZQUNyQixNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDeEM7UUFFRCxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3JELENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLE9BQU87Ozs7UUFBQyxVQUFBLENBQUM7WUFDM0IsT0FBQSxNQUFNLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFBOUQsQ0FBOEQsRUFDL0QsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRU8sb0NBQVc7Ozs7SUFBbkI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUUsZUFBYSxJQUFJLENBQUMsS0FBSyxNQUFHLENBQUMsQ0FBQztJQUN6RixDQUFDOztnQkF2REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxRQUFRO29CQUNsQixRQUFRLEVBQUUsY0FBYztpQkFDekI7Ozs7Z0JBWFEsV0FBVztnQkFWbEIsVUFBVTtnQkFJVixTQUFTOzs7c0JBbUJSLEtBQUssU0FBQyxNQUFNO3VCQUNaLEtBQUs7d0JBQ0wsS0FBSzs7SUFEa0I7UUFBZCxXQUFXLEVBQUU7O2dEQUFXO0lBa0RwQyxxQkFBQztDQUFBLEFBeERELElBd0RDO1NBcERZLGNBQWM7OztJQUN6Qiw2QkFBMkI7O0lBQzNCLDhCQUFrQzs7SUFDbEMsK0JBQXlDOzs7OztJQUV6QyxnQ0FBdUI7Ozs7O0lBRU8sNEJBQXNCOzs7OztJQUFFLGdDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZSxcbiAgU2ltcGxlQ2hhbmdlcyxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbnB1dE51bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuaW1wb3J0IHsgSW1hZ2VDb25maWcgfSBmcm9tICcuL2ltYWdlLmNvbmZpZyc7XG5cbi8qKlxuICogaW1n5qCH562+XG4gKiArIOaUr+aMgeW+ruS/oeOAgXFx5aS05YOP6KeE5YiZ57yp55Wl5Zu+6KeE5YiZXG4gKiArIOaUr+aMgeenu+mZpGh0dHAmaHR0cHPljY/orq5odHRwXG4gKiArIOaUr+aMgeWinuWKoG9uZXJyb3Lkuovku7ZcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW19zcmNdJyxcbiAgZXhwb3J0QXM6ICdzcmNEaXJlY3RpdmUnLFxufSlcbmV4cG9ydCBjbGFzcyBJbWFnZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcbiAgQElucHV0KCdfc3JjJykgc3JjOiBzdHJpbmc7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHNpemUgPSA2NDtcbiAgQElucHV0KCkgZXJyb3IgPSAnLi9hc3NldHMvaW1nL2xvZ28uc3ZnJztcblxuICBwcml2YXRlIGluaXRlZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKGNvZzogSW1hZ2VDb25maWcsIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyOiBSZW5kZXJlcjIpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIHsgLi4ubmV3IEltYWdlQ29uZmlnKCksIC4uLmNvZyB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlKCk7XG4gICAgdGhpcy51cGRhdGVFcnJvcigpO1xuICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgW1AgaW4ga2V5b2YgdGhpc10/OiBTaW1wbGVDaGFuZ2UgfSAmIFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaW5pdGVkKSByZXR1cm47XG4gICAgaWYgKGNoYW5nZXMuZXJyb3IpIHtcbiAgICAgIHRoaXMudXBkYXRlRXJyb3IoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZSgpIHtcbiAgICBsZXQgbmV3U3JjID0gdGhpcy5zcmM7XG4gICAgY29uc3QgeyBzaXplLCByZW5kZXIsIGVsIH0gPSB0aGlzO1xuXG4gICAgaWYgKG5ld1NyYy5pbmNsdWRlcygncWxvZ28uY24nKSkge1xuICAgICAgY29uc3QgYXJyID0gbmV3U3JjLnNwbGl0KCcvJyk7XG4gICAgICBjb25zdCBpbWdTaXplID0gYXJyW2Fyci5sZW5ndGggLSAxXTtcbiAgICAgIGFyclthcnIubGVuZ3RoIC0gMV0gPSBpbWdTaXplID09PSAnMCcgfHwgK2ltZ1NpemUgIT09IHNpemUgPyBzaXplLnRvU3RyaW5nKCkgOiBpbWdTaXplO1xuICAgICAgbmV3U3JjID0gYXJyLmpvaW4oJy8nKTtcbiAgICB9XG5cbiAgICBjb25zdCBpc0h0dHAgPSBuZXdTcmMuc3RhcnRzV2l0aCgnaHR0cDonKTtcbiAgICBjb25zdCBpc0h0dHBzID0gbmV3U3JjLnN0YXJ0c1dpdGgoJ2h0dHBzOicpO1xuICAgIGlmIChpc0h0dHAgfHwgaXNIdHRwcykge1xuICAgICAgbmV3U3JjID0gbmV3U3JjLnN1YnN0cihpc0h0dHAgPyA1IDogNik7XG4gICAgfVxuXG4gICAgcmVuZGVyLnNldEF0dHJpYnV0ZShlbC5uYXRpdmVFbGVtZW50LCAnc3JjJywgbmV3U3JjKTtcbiAgICBbJ2hlaWdodCcsICd3aWR0aCddLmZvckVhY2godiA9PlxuICAgICAgcmVuZGVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHYsIHNpemUudG9TdHJpbmcoKSksXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlRXJyb3IoKSB7XG4gICAgdGhpcy5yZW5kZXIuc2V0QXR0cmlidXRlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ29uZXJyb3InLCBgdGhpcy5zcmM9JyR7dGhpcy5lcnJvcn0nYCk7XG4gIH1cbn1cbiJdfQ==