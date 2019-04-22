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
export class ImageDirective {
    /**
     * @param {?} cog
     * @param {?} el
     * @param {?} render
     */
    constructor(cog, el, render) {
        this.el = el;
        this.render = render;
        this.size = 64;
        this.error = './assets/img/logo.svg';
        this.inited = false;
        Object.assign(this, Object.assign({}, new ImageConfig(), cog));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.update();
        this.updateError();
        this.inited = true;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (!this.inited)
            return;
        if (changes.error) {
            this.updateError();
        }
        else {
            this.update();
        }
    }
    /**
     * @private
     * @return {?}
     */
    update() {
        /** @type {?} */
        let newSrc = this.src;
        const { size, render, el } = this;
        if (newSrc.includes('qlogo.cn')) {
            /** @type {?} */
            const arr = newSrc.split('/');
            /** @type {?} */
            const imgSize = arr[arr.length - 1];
            arr[arr.length - 1] = imgSize === '0' || +imgSize !== size ? size.toString() : imgSize;
            newSrc = arr.join('/');
        }
        /** @type {?} */
        const isHttp = newSrc.startsWith('http:');
        /** @type {?} */
        const isHttps = newSrc.startsWith('https:');
        if (isHttp || isHttps) {
            newSrc = newSrc.substr(isHttp ? 5 : 6);
        }
        render.setAttribute(el.nativeElement, 'src', newSrc);
        ['height', 'width'].forEach((/**
         * @param {?} v
         * @return {?}
         */
        v => render.setAttribute(this.el.nativeElement, v, size.toString())));
    }
    /**
     * @private
     * @return {?}
     */
    updateError() {
        this.render.setAttribute(this.el.nativeElement, 'onerror', `this.src='${this.error}'`);
    }
}
ImageDirective.decorators = [
    { type: Directive, args: [{
                selector: '[_src]',
                exportAs: '_src',
            },] }
];
/** @nocollapse */
ImageDirective.ctorParameters = () => [
    { type: ImageConfig },
    { type: ElementRef },
    { type: Renderer2 }
];
ImageDirective.propDecorators = {
    src: [{ type: Input, args: ['_src',] }],
    size: [{ type: Input }],
    error: [{ type: Input }]
};
tslib_1.__decorate([
    InputNumber(),
    tslib_1.__metadata("design:type", Object)
], ImageDirective.prototype, "size", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9pbWFnZS8iLCJzb3VyY2VzIjpbImltYWdlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFHTCxTQUFTLEdBR1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUUxQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7QUFZN0MsTUFBTSxPQUFPLGNBQWM7Ozs7OztJQU96QixZQUFZLEdBQWdCLEVBQVUsRUFBYyxFQUFVLE1BQWlCO1FBQXpDLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBTHZELFNBQUksR0FBRyxFQUFFLENBQUM7UUFDekIsVUFBSyxHQUFHLHVCQUF1QixDQUFDO1FBRWpDLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFHckIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLG9CQUFPLElBQUksV0FBVyxFQUFFLEVBQUssR0FBRyxFQUFHLENBQUM7SUFDeEQsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBNkQ7UUFDdkUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQUUsT0FBTztRQUN6QixJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUU7WUFDakIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3BCO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDZjtJQUNILENBQUM7Ozs7O0lBRU8sTUFBTTs7WUFDUixNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUc7Y0FDZixFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLEdBQUcsSUFBSTtRQUVqQyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUU7O2tCQUN6QixHQUFHLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7O2tCQUN2QixPQUFPLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ25DLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLE9BQU8sS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUN2RixNQUFNLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN4Qjs7Y0FFSyxNQUFNLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7O2NBQ25DLE9BQU8sR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQztRQUMzQyxJQUFJLE1BQU0sSUFBSSxPQUFPLEVBQUU7WUFDckIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3hDO1FBRUQsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNyRCxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FDOUIsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQy9ELENBQUM7SUFDSixDQUFDOzs7OztJQUVPLFdBQVc7UUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsU0FBUyxFQUFFLGFBQWEsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDekYsQ0FBQzs7O1lBdkRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsUUFBUTtnQkFDbEIsUUFBUSxFQUFFLE1BQU07YUFDakI7Ozs7WUFYUSxXQUFXO1lBVmxCLFVBQVU7WUFJVixTQUFTOzs7a0JBbUJSLEtBQUssU0FBQyxNQUFNO21CQUNaLEtBQUs7b0JBQ0wsS0FBSzs7QUFEa0I7SUFBZCxXQUFXLEVBQUU7OzRDQUFXOzs7SUFEbEMsNkJBQTJCOztJQUMzQiw4QkFBa0M7O0lBQ2xDLCtCQUF5Qzs7Ozs7SUFFekMsZ0NBQXVCOzs7OztJQUVPLDRCQUFzQjs7Ozs7SUFBRSxnQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2UsXG4gIFNpbXBsZUNoYW5nZXMsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbmltcG9ydCB7IEltYWdlQ29uZmlnIH0gZnJvbSAnLi9pbWFnZS5jb25maWcnO1xuXG4vKipcbiAqIGltZ+agh+etvlxuICogKyDmlK/mjIHlvq7kv6HjgIFxceWktOWDj+inhOWImee8qeeVpeWbvuinhOWImVxuICogKyDmlK/mjIHnp7vpmaRodHRwJmh0dHBz5Y2P6K6uaHR0cFxuICogKyDmlK/mjIHlop7liqBvbmVycm9y5LqL5Lu2XG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tfc3JjXScsXG4gIGV4cG9ydEFzOiAnX3NyYycsXG59KVxuZXhwb3J0IGNsYXNzIEltYWdlRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuICBASW5wdXQoJ19zcmMnKSBzcmM6IHN0cmluZztcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgc2l6ZSA9IDY0O1xuICBASW5wdXQoKSBlcnJvciA9ICcuL2Fzc2V0cy9pbWcvbG9nby5zdmcnO1xuXG4gIHByaXZhdGUgaW5pdGVkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoY29nOiBJbWFnZUNvbmZpZywgcHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXI6IFJlbmRlcmVyMikge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgeyAuLi5uZXcgSW1hZ2VDb25maWcoKSwgLi4uY29nIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgICB0aGlzLnVwZGF0ZUVycm9yKCk7XG4gICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogeyBbUCBpbiBrZXlvZiB0aGlzXT86IFNpbXBsZUNoYW5nZSB9ICYgU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5pbml0ZWQpIHJldHVybjtcbiAgICBpZiAoY2hhbmdlcy5lcnJvcikge1xuICAgICAgdGhpcy51cGRhdGVFcnJvcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlKCkge1xuICAgIGxldCBuZXdTcmMgPSB0aGlzLnNyYztcbiAgICBjb25zdCB7IHNpemUsIHJlbmRlciwgZWwgfSA9IHRoaXM7XG5cbiAgICBpZiAobmV3U3JjLmluY2x1ZGVzKCdxbG9nby5jbicpKSB7XG4gICAgICBjb25zdCBhcnIgPSBuZXdTcmMuc3BsaXQoJy8nKTtcbiAgICAgIGNvbnN0IGltZ1NpemUgPSBhcnJbYXJyLmxlbmd0aCAtIDFdO1xuICAgICAgYXJyW2Fyci5sZW5ndGggLSAxXSA9IGltZ1NpemUgPT09ICcwJyB8fCAraW1nU2l6ZSAhPT0gc2l6ZSA/IHNpemUudG9TdHJpbmcoKSA6IGltZ1NpemU7XG4gICAgICBuZXdTcmMgPSBhcnIuam9pbignLycpO1xuICAgIH1cblxuICAgIGNvbnN0IGlzSHR0cCA9IG5ld1NyYy5zdGFydHNXaXRoKCdodHRwOicpO1xuICAgIGNvbnN0IGlzSHR0cHMgPSBuZXdTcmMuc3RhcnRzV2l0aCgnaHR0cHM6Jyk7XG4gICAgaWYgKGlzSHR0cCB8fCBpc0h0dHBzKSB7XG4gICAgICBuZXdTcmMgPSBuZXdTcmMuc3Vic3RyKGlzSHR0cCA/IDUgOiA2KTtcbiAgICB9XG5cbiAgICByZW5kZXIuc2V0QXR0cmlidXRlKGVsLm5hdGl2ZUVsZW1lbnQsICdzcmMnLCBuZXdTcmMpO1xuICAgIFsnaGVpZ2h0JywgJ3dpZHRoJ10uZm9yRWFjaCh2ID0+XG4gICAgICByZW5kZXIuc2V0QXR0cmlidXRlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdiwgc2l6ZS50b1N0cmluZygpKSxcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVFcnJvcigpIHtcbiAgICB0aGlzLnJlbmRlci5zZXRBdHRyaWJ1dGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnb25lcnJvcicsIGB0aGlzLnNyYz0nJHt0aGlzLmVycm9yfSdgKTtcbiAgfVxufVxuIl19