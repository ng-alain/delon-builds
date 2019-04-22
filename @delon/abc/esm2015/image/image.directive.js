/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9pbWFnZS8iLCJzb3VyY2VzIjpbImltYWdlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBcUIsU0FBUyxFQUErQixNQUFNLGVBQWUsQ0FBQztBQUN4SCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7OztBQVk3QyxNQUFNLE9BQU8sY0FBYzs7Ozs7O0lBT3pCLFlBQVksR0FBZ0IsRUFBVSxFQUFjLEVBQVUsTUFBaUI7UUFBekMsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVc7UUFMdkQsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUN6QixVQUFLLEdBQUcsdUJBQXVCLENBQUM7UUFFakMsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUdyQixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksb0JBQU8sSUFBSSxXQUFXLEVBQUUsRUFBSyxHQUFHLEVBQUcsQ0FBQztJQUN4RCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNkLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUE2RDtRQUN2RSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU07WUFBRSxPQUFPO1FBQ3pCLElBQUksT0FBTyxDQUFDLEtBQUssRUFBRTtZQUNqQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEI7YUFBTTtZQUNMLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNmO0lBQ0gsQ0FBQzs7Ozs7SUFFTyxNQUFNOztZQUNSLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRztjQUNmLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxJQUFJO1FBRWpDLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRTs7a0JBQ3pCLEdBQUcsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzs7a0JBQ3ZCLE9BQU8sR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDbkMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsT0FBTyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQ3ZGLE1BQU0sR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3hCOztjQUVLLE1BQU0sR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQzs7Y0FDbkMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO1FBQzNDLElBQUksTUFBTSxJQUFJLE9BQU8sRUFBRTtZQUNyQixNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDeEM7UUFFRCxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3JELENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFDLENBQUM7SUFDbkcsQ0FBQzs7Ozs7SUFFTyxXQUFXO1FBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFNBQVMsRUFBRSxhQUFhLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7OztZQXJERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLFFBQVEsRUFBRSxNQUFNO2FBQ2pCOzs7O1lBWFEsV0FBVztZQUhBLFVBQVU7WUFBNEIsU0FBUzs7O2tCQWdCaEUsS0FBSyxTQUFDLE1BQU07bUJBQ1osS0FBSztvQkFDTCxLQUFLOztBQURrQjtJQUFkLFdBQVcsRUFBRTs7NENBQVc7OztJQURsQyw2QkFBMkI7O0lBQzNCLDhCQUFrQzs7SUFDbEMsK0JBQXlDOzs7OztJQUV6QyxnQ0FBdUI7Ozs7O0lBRU8sNEJBQXNCOzs7OztJQUFFLGdDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBSZW5kZXJlcjIsIFNpbXBsZUNoYW5nZSwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbmltcG9ydCB7IEltYWdlQ29uZmlnIH0gZnJvbSAnLi9pbWFnZS5jb25maWcnO1xuXG4vKipcbiAqIGltZ+agh+etvlxuICogKyDmlK/mjIHlvq7kv6HjgIFxceWktOWDj+inhOWImee8qeeVpeWbvuinhOWImVxuICogKyDmlK/mjIHnp7vpmaRodHRwJmh0dHBz5Y2P6K6uaHR0cFxuICogKyDmlK/mjIHlop7liqBvbmVycm9y5LqL5Lu2XG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tfc3JjXScsXG4gIGV4cG9ydEFzOiAnX3NyYycsXG59KVxuZXhwb3J0IGNsYXNzIEltYWdlRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuICBASW5wdXQoJ19zcmMnKSBzcmM6IHN0cmluZztcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgc2l6ZSA9IDY0O1xuICBASW5wdXQoKSBlcnJvciA9ICcuL2Fzc2V0cy9pbWcvbG9nby5zdmcnO1xuXG4gIHByaXZhdGUgaW5pdGVkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoY29nOiBJbWFnZUNvbmZpZywgcHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXI6IFJlbmRlcmVyMikge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgeyAuLi5uZXcgSW1hZ2VDb25maWcoKSwgLi4uY29nIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgICB0aGlzLnVwZGF0ZUVycm9yKCk7XG4gICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogeyBbUCBpbiBrZXlvZiB0aGlzXT86IFNpbXBsZUNoYW5nZSB9ICYgU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5pbml0ZWQpIHJldHVybjtcbiAgICBpZiAoY2hhbmdlcy5lcnJvcikge1xuICAgICAgdGhpcy51cGRhdGVFcnJvcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlKCkge1xuICAgIGxldCBuZXdTcmMgPSB0aGlzLnNyYztcbiAgICBjb25zdCB7IHNpemUsIHJlbmRlciwgZWwgfSA9IHRoaXM7XG5cbiAgICBpZiAobmV3U3JjLmluY2x1ZGVzKCdxbG9nby5jbicpKSB7XG4gICAgICBjb25zdCBhcnIgPSBuZXdTcmMuc3BsaXQoJy8nKTtcbiAgICAgIGNvbnN0IGltZ1NpemUgPSBhcnJbYXJyLmxlbmd0aCAtIDFdO1xuICAgICAgYXJyW2Fyci5sZW5ndGggLSAxXSA9IGltZ1NpemUgPT09ICcwJyB8fCAraW1nU2l6ZSAhPT0gc2l6ZSA/IHNpemUudG9TdHJpbmcoKSA6IGltZ1NpemU7XG4gICAgICBuZXdTcmMgPSBhcnIuam9pbignLycpO1xuICAgIH1cblxuICAgIGNvbnN0IGlzSHR0cCA9IG5ld1NyYy5zdGFydHNXaXRoKCdodHRwOicpO1xuICAgIGNvbnN0IGlzSHR0cHMgPSBuZXdTcmMuc3RhcnRzV2l0aCgnaHR0cHM6Jyk7XG4gICAgaWYgKGlzSHR0cCB8fCBpc0h0dHBzKSB7XG4gICAgICBuZXdTcmMgPSBuZXdTcmMuc3Vic3RyKGlzSHR0cCA/IDUgOiA2KTtcbiAgICB9XG5cbiAgICByZW5kZXIuc2V0QXR0cmlidXRlKGVsLm5hdGl2ZUVsZW1lbnQsICdzcmMnLCBuZXdTcmMpO1xuICAgIFsnaGVpZ2h0JywgJ3dpZHRoJ10uZm9yRWFjaCh2ID0+IHJlbmRlci5zZXRBdHRyaWJ1dGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCB2LCBzaXplLnRvU3RyaW5nKCkpKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlRXJyb3IoKSB7XG4gICAgdGhpcy5yZW5kZXIuc2V0QXR0cmlidXRlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ29uZXJyb3InLCBgdGhpcy5zcmM9JyR7dGhpcy5lcnJvcn0nYCk7XG4gIH1cbn1cbiJdfQ==