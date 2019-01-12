/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
        if (isHttp || isHttps) {
            newSrc = newSrc.substr(isHttp ? 5 : 6);
        }
        this.render.setAttribute(this.el.nativeElement, 'src', newSrc);
    };
    /**
     * @return {?}
     */
    ImageDirective.prototype.updateError = /**
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
    /** @type {?} */
    ImageDirective.prototype.inited;
    /** @type {?} */
    ImageDirective.prototype.el;
    /** @type {?} */
    ImageDirective.prototype.render;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9pbWFnZS8iLCJzb3VyY2VzIjpbImltYWdlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFHTCxTQUFTLEdBR1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUUxQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7QUFRN0M7SUFXRSx3QkFDRSxHQUFnQixFQUNSLEVBQWMsRUFDZCxNQUFpQjtRQURqQixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2QsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQVJILFNBQUksR0FBRyxFQUFFLENBQUM7UUFDekIsVUFBSyxHQUFHLHVCQUF1QixDQUFDO1FBRWpDLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFPckIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLHVCQUFPLElBQUksV0FBVyxFQUFFLEVBQUssR0FBRyxFQUFFLENBQUM7SUFDdkQsQ0FBQzs7OztJQUVELGlDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNkLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDOzs7OztJQUVELG9DQUFXOzs7O0lBQVgsVUFBWSxPQUE2RDtRQUN2RSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU07WUFBRSxPQUFPO1FBQ3pCLElBQUksT0FBTyxDQUFDLEtBQUssRUFBRTtZQUNqQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEI7YUFBTTtZQUNMLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNmO0lBQ0gsQ0FBQzs7OztJQUVPLCtCQUFNOzs7SUFBZDs7WUFDTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUc7UUFFckIsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFOztnQkFDekIsR0FBRyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDOztnQkFDdkIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUNoQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUN4RixNQUFNLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN4Qjs7WUFFSyxNQUFNLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7O1lBQ25DLE9BQU8sR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQztRQUMzQyxJQUFJLE1BQU0sSUFBSSxPQUFPLEVBQUU7WUFDckIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3hDO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2pFLENBQUM7Ozs7SUFFTyxvQ0FBVzs7O0lBQW5CO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsU0FBUyxFQUFFLGVBQWEsSUFBSSxDQUFDLEtBQUssTUFBRyxDQUFDLENBQUM7SUFDekYsQ0FBQzs7Z0JBdkRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsUUFBUTtvQkFDbEIsUUFBUSxFQUFFLGNBQWM7aUJBQ3pCOzs7O2dCQVhRLFdBQVc7Z0JBVmxCLFVBQVU7Z0JBSVYsU0FBUzs7O3NCQW1CUixLQUFLLFNBQUMsTUFBTTt1QkFDWixLQUFLO3dCQUNMLEtBQUs7O0lBRGtCO1FBQWQsV0FBVyxFQUFFOztnREFBVztJQWtEcEMscUJBQUM7Q0FBQSxBQXhERCxJQXdEQztTQXBEWSxjQUFjOzs7SUFDekIsNkJBQTJCOztJQUMzQiw4QkFBa0M7O0lBQ2xDLCtCQUF5Qzs7SUFFekMsZ0NBQXVCOztJQUlyQiw0QkFBc0I7O0lBQ3RCLGdDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZSxcbiAgU2ltcGxlQ2hhbmdlcyxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbnB1dE51bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuaW1wb3J0IHsgSW1hZ2VDb25maWcgfSBmcm9tICcuL2ltYWdlLmNvbmZpZyc7XG5cbi8qKlxuICogaW1n5qCH562+XG4gKiArIOaUr+aMgeW+ruS/oeOAgXFx5aS05YOP6KeE5YiZ57yp55Wl5Zu+6KeE5YiZXG4gKiArIOaUr+aMgeenu+mZpGh0dHAmaHR0cHPljY/orq5odHRwXG4gKiArIOaUr+aMgeWinuWKoG9uZXJyb3Lkuovku7ZcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW19zcmNdJyxcbiAgZXhwb3J0QXM6ICdzcmNEaXJlY3RpdmUnLFxufSlcbmV4cG9ydCBjbGFzcyBJbWFnZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcbiAgQElucHV0KCdfc3JjJykgc3JjOiBzdHJpbmc7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHNpemUgPSA2NDtcbiAgQElucHV0KCkgZXJyb3IgPSAnLi9hc3NldHMvaW1nL2xvZ28uc3ZnJztcblxuICBwcml2YXRlIGluaXRlZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGNvZzogSW1hZ2VDb25maWcsXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcjogUmVuZGVyZXIyLFxuICApIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIHsgLi4ubmV3IEltYWdlQ29uZmlnKCksIC4uLmNvZ30pO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgICB0aGlzLnVwZGF0ZUVycm9yKCk7XG4gICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogeyBbUCBpbiBrZXlvZiB0aGlzXT86IFNpbXBsZUNoYW5nZSB9ICYgU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5pbml0ZWQpIHJldHVybjtcbiAgICBpZiAoY2hhbmdlcy5lcnJvcikge1xuICAgICAgdGhpcy51cGRhdGVFcnJvcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlKCkge1xuICAgIGxldCBuZXdTcmMgPSB0aGlzLnNyYztcblxuICAgIGlmIChuZXdTcmMuaW5jbHVkZXMoJ3Fsb2dvLmNuJykpIHtcbiAgICAgIGNvbnN0IGFyciA9IG5ld1NyYy5zcGxpdCgnLycpO1xuICAgICAgY29uc3Qgc2l6ZSA9IGFyclthcnIubGVuZ3RoIC0gMV07XG4gICAgICBhcnJbYXJyLmxlbmd0aCAtIDFdID0gc2l6ZSA9PT0gJzAnIHx8ICtzaXplICE9PSB0aGlzLnNpemUgPyB0aGlzLnNpemUudG9TdHJpbmcoKSA6IHNpemU7XG4gICAgICBuZXdTcmMgPSBhcnIuam9pbignLycpO1xuICAgIH1cblxuICAgIGNvbnN0IGlzSHR0cCA9IG5ld1NyYy5zdGFydHNXaXRoKCdodHRwOicpO1xuICAgIGNvbnN0IGlzSHR0cHMgPSBuZXdTcmMuc3RhcnRzV2l0aCgnaHR0cHM6Jyk7XG4gICAgaWYgKGlzSHR0cCB8fCBpc0h0dHBzKSB7XG4gICAgICBuZXdTcmMgPSBuZXdTcmMuc3Vic3RyKGlzSHR0cCA/IDUgOiA2KTtcbiAgICB9XG5cbiAgICB0aGlzLnJlbmRlci5zZXRBdHRyaWJ1dGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnc3JjJywgbmV3U3JjKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlRXJyb3IoKSB7XG4gICAgdGhpcy5yZW5kZXIuc2V0QXR0cmlidXRlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ29uZXJyb3InLCBgdGhpcy5zcmM9JyR7dGhpcy5lcnJvcn0nYCk7XG4gIH1cbn1cbiJdfQ==