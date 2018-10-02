import { __decorate, __metadata, __spread } from 'tslib';
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BkZWxvbi9hYmMvaW1hZ2UvaW1hZ2UuY29uZmlnLnRzIiwibmc6Ly9AZGVsb24vYWJjL2ltYWdlL2ltYWdlLmRpcmVjdGl2ZS50cyIsIm5nOi8vQGRlbG9uL2FiYy9pbWFnZS9pbWFnZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEltYWdlQ29uZmlnIHtcclxuICAvKipcclxuICAgKiDDqcK7wpjDqMKuwqTDpcKkwqfDpcKwwo/Dr8K8wozDqcK7wpjDqMKuwqTDpcKAwrzDr8K8wppgNjRgw6/CvMKMw6XCjcKVw6TCvcKNw6/CvMKacHhcclxuICAgKi9cclxuICBzaXplPzogbnVtYmVyID0gNjQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIMOpwpTCmcOowq/Cr8OlwpvCvsOnwonCh1xyXG4gICAqL1xyXG4gIGVycm9yPzogc3RyaW5nID0gJy4vYXNzZXRzL2ltZy9sb2dvLnN2Zyc7XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBEaXJlY3RpdmUsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgT25Jbml0LFxyXG4gIFNpbXBsZUNoYW5nZSxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZGVlcENvcHksIElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xyXG5cclxuaW1wb3J0IHsgSW1hZ2VDb25maWcgfSBmcm9tICcuL2ltYWdlLmNvbmZpZyc7XHJcblxyXG4vKipcclxuICogaW1nw6bCoMKHw6fCrcK+XHJcbiAqICsgw6bClMKvw6bCjMKBw6XCvsKuw6TCv8Khw6PCgMKBcXHDpcKkwrTDpcKDwo/DqMKnwoTDpcKIwpnDp8K8wqnDp8KVwqXDpcKbwr7DqMKnwoTDpcKIwplcclxuICogKyDDpsKUwq/DpsKMwoHDp8KnwrvDqcKZwqRodHRwJmh0dHBzw6XCjcKPw6jCrsKuaHR0cFxyXG4gKiArIMOmwpTCr8OmwozCgcOlwqLCnsOlworCoG9uZXJyb3LDpMK6wovDpMK7wrZcclxuICovXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tfc3JjXScgfSlcclxuZXhwb3J0IGNsYXNzIEltYWdlRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xyXG4gIEBJbnB1dCgnX3NyYycpIHNyYzogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBzaXplID0gNjQ7XHJcblxyXG4gIEBJbnB1dCgpIGVycm9yID0gJy4vYXNzZXRzL2ltZy9sb2dvLnN2Zyc7XHJcblxyXG4gIHByaXZhdGUgaW5pdGVkID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgcmVuZGVyOiBSZW5kZXJlcjIsXHJcbiAgICBERUY6IEltYWdlQ29uZmlnLFxyXG4gICkge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkZWVwQ29weShERUYpKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICAgIHRoaXMudXBkYXRlRXJyb3IoKTtcclxuICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKFxyXG4gICAgY2hhbmdlczogeyBbUCBpbiBrZXlvZiB0aGlzXT86IFNpbXBsZUNoYW5nZSB9ICYgU2ltcGxlQ2hhbmdlcyxcclxuICApOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmluaXRlZCkge1xyXG4gICAgICBpZiAoY2hhbmdlcy5lcnJvcikge1xyXG4gICAgICAgIHRoaXMudXBkYXRlRXJyb3IoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZSgpIHtcclxuICAgIGxldCBuZXdTcmMgPSB0aGlzLnNyYztcclxuXHJcbiAgICBpZiAobmV3U3JjLmluY2x1ZGVzKCdxbG9nby5jbicpKSB7XHJcbiAgICAgIGNvbnN0IGFyciA9IG5ld1NyYy5zcGxpdCgnLycpLFxyXG4gICAgICAgIHNpemUgPSBhcnJbYXJyLmxlbmd0aCAtIDFdO1xyXG4gICAgICBhcnJbYXJyLmxlbmd0aCAtIDFdID1cclxuICAgICAgICBzaXplID09PSAnMCcgfHwgK3NpemUgIT09IHRoaXMuc2l6ZSA/IHRoaXMuc2l6ZS50b1N0cmluZygpIDogc2l6ZTtcclxuICAgICAgbmV3U3JjID0gYXJyLmpvaW4oJy8nKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpc0h0dHAgPSBuZXdTcmMuc3RhcnRzV2l0aCgnaHR0cDonKSxcclxuICAgICAgaXNIdHRwcyA9IG5ld1NyYy5zdGFydHNXaXRoKCdodHRwczonKTtcclxuICAgIGlmIChpc0h0dHAgfHwgaXNIdHRwcykgbmV3U3JjID0gbmV3U3JjLnN1YnN0cihpc0h0dHAgPyA1IDogNik7XHJcblxyXG4gICAgdGhpcy5yZW5kZXIuc2V0QXR0cmlidXRlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3NyYycsIG5ld1NyYyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZUVycm9yKCkge1xyXG4gICAgdGhpcy5yZW5kZXIuc2V0QXR0cmlidXRlKFxyXG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICdvbmVycm9yJyxcclxuICAgICAgYHRoaXMuc3JjPScke3RoaXMuZXJyb3J9JztgLFxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRGVsb25VdGlsTW9kdWxlIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xyXG5cclxuaW1wb3J0IHsgSW1hZ2VEaXJlY3RpdmUgfSBmcm9tICcuL2ltYWdlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEltYWdlQ29uZmlnIH0gZnJvbSAnLi9pbWFnZS5jb25maWcnO1xyXG5cclxuY29uc3QgRElSRUNUSVZFUyA9IFtJbWFnZURpcmVjdGl2ZV07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIERlbG9uVXRpbE1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbLi4uRElSRUNUSVZFU10sXHJcbiAgZXhwb3J0czogWy4uLkRJUkVDVElWRVNdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW1hZ2VNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHsgbmdNb2R1bGU6IEltYWdlTW9kdWxlLCBwcm92aWRlcnM6IFtJbWFnZUNvbmZpZ10gfTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLElBQUE7Ozs7O29CQUlrQixFQUFFOzs7O3FCQUtELHVCQUF1Qjs7c0JBVDFDO0lBVUM7Ozs7Ozs7Ozs7Ozs7SUNvQkMsd0JBQ1UsSUFDQSxRQUNSLEdBQWdCO1FBRlIsT0FBRSxHQUFGLEVBQUU7UUFDRixXQUFNLEdBQU4sTUFBTTtvQkFSZSxFQUFFO3FCQUVoQix1QkFBdUI7c0JBRXZCLEtBQUs7UUFPcEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDcEM7Ozs7SUFFRCxpQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7S0FDcEI7Ozs7O0lBRUQsb0NBQVc7Ozs7SUFBWCxVQUNFLE9BQTZEO1FBRTdELElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksT0FBTyxDQUFDLEtBQUssRUFBRTtnQkFDakIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQ3BCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUNmO1NBQ0Y7S0FDRjs7OztJQUVPLCtCQUFNOzs7OztRQUNaLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7UUFFdEIsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFOztZQUMvQixJQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUNBOztZQUQ3QixJQUNFLElBQUksR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztZQUM3QixHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7Z0JBQ2pCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQztZQUNwRSxNQUFNLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN4Qjs7UUFFRCxJQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUNEOztRQUR4QyxJQUNFLE9BQU8sR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hDLElBQUksTUFBTSxJQUFJLE9BQU87WUFBRSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRTlELElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQzs7Ozs7SUFHekQsb0NBQVc7Ozs7UUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQ3RCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUNyQixTQUFTLEVBQ1QsZUFBYSxJQUFJLENBQUMsS0FBSyxPQUFJLENBQzVCLENBQUM7OztnQkEzREwsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRTs7OztnQkFoQi9CLFVBQVU7Z0JBQ1YsU0FBUztnQkFPRixXQUFXOzs7c0JBVWpCLEtBQUssU0FBQyxNQUFNO3VCQUVaLEtBQUs7d0JBRUwsS0FBSzs7O1FBRkksV0FBVyxFQUFFOzs7eUJBeEJ6Qjs7Ozs7Ozs7QUNPQSxJQUFNLFVBQVUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDOzs7Ozs7O0lBUTNCLG1CQUFPOzs7SUFBZDtRQUNFLE9BQU8sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUM7S0FDNUQ7O2dCQVJGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZUFBZSxDQUFDO29CQUN4QyxZQUFZLFdBQU0sVUFBVSxDQUFDO29CQUM3QixPQUFPLFdBQU0sVUFBVSxDQUFDO2lCQUN6Qjs7c0JBYkQ7Ozs7Ozs7Ozs7Ozs7OzsifQ==