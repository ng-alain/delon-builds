import { __spread, __decorate, __metadata } from 'tslib';
import { Directive, Input, ElementRef, Renderer2, NgModule } from '@angular/core';
import { deepCopy, InputNumber, DelonUtilModule } from '@delon/util';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ImageConfig = /** @class */ (function () {
    function ImageConfig() {
        /**
         * 默认大小，默认值：`64`，单位：px
         */
        this.size = 64;
        /**
         * 错误图片
         */
        this.error = './assets/img/logo.svg';
    }
    return ImageConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
    __decorate([
        InputNumber(),
        __metadata("design:type", Object)
    ], ImageDirective.prototype, "size", void 0);
    return ImageDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var DIRECTIVES = [ImageDirective];
var ImageModule = /** @class */ (function () {
    function ImageModule() {
    }
    /**
     * @return {?}
     */
    ImageModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: ImageModule, providers: [ImageConfig] };
    };
    ImageModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, DelonUtilModule],
                    declarations: __spread(DIRECTIVES),
                    exports: __spread(DIRECTIVES),
                },] }
    ];
    return ImageModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { ImageDirective, ImageConfig, ImageModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BkZWxvbi9hYmMvaW1hZ2UvaW1hZ2UuY29uZmlnLnRzIiwibmc6Ly9AZGVsb24vYWJjL2ltYWdlL2ltYWdlLmRpcmVjdGl2ZS50cyIsIm5nOi8vQGRlbG9uL2FiYy9pbWFnZS9pbWFnZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEltYWdlQ29uZmlnIHtcbiAgLyoqXG4gICAqIMOpwrvCmMOowq7CpMOlwqTCp8OlwrDCj8OvwrzCjMOpwrvCmMOowq7CpMOlwoDCvMOvwrzCmmA2NGDDr8K8wozDpcKNwpXDpMK9wo3Dr8K8wppweFxuICAgKi9cbiAgc2l6ZT86IG51bWJlciA9IDY0O1xuXG4gIC8qKlxuICAgKiDDqcKUwpnDqMKvwq/DpcKbwr7Dp8KJwodcbiAgICovXG4gIGVycm9yPzogc3RyaW5nID0gJy4vYXNzZXRzL2ltZy9sb2dvLnN2Zyc7XG59XG4iLCJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIEVsZW1lbnRSZWYsXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBTaW1wbGVDaGFuZ2UsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZGVlcENvcHksIElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5pbXBvcnQgeyBJbWFnZUNvbmZpZyB9IGZyb20gJy4vaW1hZ2UuY29uZmlnJztcblxuLyoqXG4gKiBpbWfDpsKgwofDp8Ktwr5cbiAqICsgw6bClMKvw6bCjMKBw6XCvsKuw6TCv8Khw6PCgMKBcXHDpcKkwrTDpcKDwo/DqMKnwoTDpcKIwpnDp8K8wqnDp8KVwqXDpcKbwr7DqMKnwoTDpcKIwplcbiAqICsgw6bClMKvw6bCjMKBw6fCp8K7w6nCmcKkaHR0cCZodHRwc8Olwo3Cj8Oowq7Crmh0dHBcbiAqICsgw6bClMKvw6bCjMKBw6XCosKew6XCisKgb25lcnJvcsOkwrrCi8OkwrvCtlxuICovXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbX3NyY10nIH0pXG5leHBvcnQgY2xhc3MgSW1hZ2VEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG4gIEBJbnB1dCgnX3NyYycpIHNyYzogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHNpemUgPSA2NDtcblxuICBASW5wdXQoKSBlcnJvciA9ICcuL2Fzc2V0cy9pbWcvbG9nby5zdmcnO1xuXG4gIHByaXZhdGUgaW5pdGVkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcjogUmVuZGVyZXIyLFxuICAgIERFRjogSW1hZ2VDb25maWcsXG4gICkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGVlcENvcHkoREVGKSk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIHRoaXMudXBkYXRlRXJyb3IoKTtcbiAgICB0aGlzLmluaXRlZCA9IHRydWU7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhcbiAgICBjaGFuZ2VzOiB7IFtQIGluIGtleW9mIHRoaXNdPzogU2ltcGxlQ2hhbmdlIH0gJiBTaW1wbGVDaGFuZ2VzLFxuICApOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pbml0ZWQpIHtcbiAgICAgIGlmIChjaGFuZ2VzLmVycm9yKSB7XG4gICAgICAgIHRoaXMudXBkYXRlRXJyb3IoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGUoKSB7XG4gICAgbGV0IG5ld1NyYyA9IHRoaXMuc3JjO1xuXG4gICAgaWYgKG5ld1NyYy5pbmNsdWRlcygncWxvZ28uY24nKSkge1xuICAgICAgY29uc3QgYXJyID0gbmV3U3JjLnNwbGl0KCcvJyksXG4gICAgICAgIHNpemUgPSBhcnJbYXJyLmxlbmd0aCAtIDFdO1xuICAgICAgYXJyW2Fyci5sZW5ndGggLSAxXSA9XG4gICAgICAgIHNpemUgPT09ICcwJyB8fCArc2l6ZSAhPT0gdGhpcy5zaXplID8gdGhpcy5zaXplLnRvU3RyaW5nKCkgOiBzaXplO1xuICAgICAgbmV3U3JjID0gYXJyLmpvaW4oJy8nKTtcbiAgICB9XG5cbiAgICBjb25zdCBpc0h0dHAgPSBuZXdTcmMuc3RhcnRzV2l0aCgnaHR0cDonKSxcbiAgICAgIGlzSHR0cHMgPSBuZXdTcmMuc3RhcnRzV2l0aCgnaHR0cHM6Jyk7XG4gICAgaWYgKGlzSHR0cCB8fCBpc0h0dHBzKSBuZXdTcmMgPSBuZXdTcmMuc3Vic3RyKGlzSHR0cCA/IDUgOiA2KTtcblxuICAgIHRoaXMucmVuZGVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdzcmMnLCBuZXdTcmMpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVFcnJvcigpIHtcbiAgICB0aGlzLnJlbmRlci5zZXRBdHRyaWJ1dGUoXG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAnb25lcnJvcicsXG4gICAgICBgdGhpcy5zcmM9JyR7dGhpcy5lcnJvcn0nO2AsXG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEZWxvblV0aWxNb2R1bGUgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbmltcG9ydCB7IEltYWdlRGlyZWN0aXZlIH0gZnJvbSAnLi9pbWFnZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSW1hZ2VDb25maWcgfSBmcm9tICcuL2ltYWdlLmNvbmZpZyc7XG5cbmNvbnN0IERJUkVDVElWRVMgPSBbSW1hZ2VEaXJlY3RpdmVdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBEZWxvblV0aWxNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5ESVJFQ1RJVkVTXSxcbiAgZXhwb3J0czogWy4uLkRJUkVDVElWRVNdLFxufSlcbmV4cG9ydCBjbGFzcyBJbWFnZU1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7IG5nTW9kdWxlOiBJbWFnZU1vZHVsZSwgcHJvdmlkZXJzOiBbSW1hZ2VDb25maWddIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxJQUFBOzs7OztvQkFJa0IsRUFBRTs7OztxQkFLRCx1QkFBdUI7O3NCQVQxQztJQVVDOzs7Ozs7Ozs7Ozs7O0lDb0JDLHdCQUNVLElBQ0EsUUFDUixHQUFnQjtRQUZSLE9BQUUsR0FBRixFQUFFO1FBQ0YsV0FBTSxHQUFOLE1BQU07b0JBUmUsRUFBRTtxQkFFaEIsdUJBQXVCO3NCQUV2QixLQUFLO1FBT3BCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQ3BDOzs7O0lBRUQsaUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2QsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0tBQ3BCOzs7OztJQUVELG9DQUFXOzs7O0lBQVgsVUFDRSxPQUE2RDtRQUU3RCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUNwQjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDZjtTQUNGO0tBQ0Y7Ozs7SUFFTywrQkFBTTs7Ozs7UUFDWixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBRXRCLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRTs7WUFDL0IsSUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FDQTs7WUFEN0IsSUFDRSxJQUFJLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDN0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUM7WUFDcEUsTUFBTSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDeEI7O1FBRUQsSUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FDRDs7UUFEeEMsSUFDRSxPQUFPLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4QyxJQUFJLE1BQU0sSUFBSSxPQUFPO1lBQUUsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUU5RCxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7Ozs7O0lBR3pELG9DQUFXOzs7O1FBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUN0QixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFDckIsU0FBUyxFQUNULGVBQWEsSUFBSSxDQUFDLEtBQUssT0FBSSxDQUM1QixDQUFDOzs7Z0JBM0RMLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUU7Ozs7Z0JBaEIvQixVQUFVO2dCQUNWLFNBQVM7Z0JBT0YsV0FBVzs7O3NCQVVqQixLQUFLLFNBQUMsTUFBTTt1QkFFWixLQUFLO3dCQUVMLEtBQUs7OztRQUZJLFdBQVcsRUFBRTs7O3lCQXhCekI7Ozs7Ozs7O0FDT0EsSUFBTSxVQUFVLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQzs7Ozs7OztJQVEzQixtQkFBTzs7O0lBQWQ7UUFDRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDO0tBQzVEOztnQkFSRixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGVBQWUsQ0FBQztvQkFDeEMsWUFBWSxXQUFNLFVBQVUsQ0FBQztvQkFDN0IsT0FBTyxXQUFNLFVBQVUsQ0FBQztpQkFDekI7O3NCQWJEOzs7Ozs7Ozs7Ozs7Ozs7In0=