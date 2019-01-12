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
     * @return {?}
     */
    update() {
        /** @type {?} */
        let newSrc = this.src;
        if (newSrc.includes('qlogo.cn')) {
            /** @type {?} */
            const arr = newSrc.split('/');
            /** @type {?} */
            const size = arr[arr.length - 1];
            arr[arr.length - 1] = size === '0' || +size !== this.size ? this.size.toString() : size;
            newSrc = arr.join('/');
        }
        /** @type {?} */
        const isHttp = newSrc.startsWith('http:');
        /** @type {?} */
        const isHttps = newSrc.startsWith('https:');
        if (isHttp || isHttps) {
            newSrc = newSrc.substr(isHttp ? 5 : 6);
        }
        this.render.setAttribute(this.el.nativeElement, 'src', newSrc);
    }
    /**
     * @return {?}
     */
    updateError() {
        this.render.setAttribute(this.el.nativeElement, 'onerror', `this.src='${this.error}'`);
    }
}
ImageDirective.decorators = [
    { type: Directive, args: [{
                selector: '[_src]',
                exportAs: 'srcDirective',
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
    /** @type {?} */
    ImageDirective.prototype.inited;
    /** @type {?} */
    ImageDirective.prototype.el;
    /** @type {?} */
    ImageDirective.prototype.render;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9pbWFnZS8iLCJzb3VyY2VzIjpbImltYWdlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFHTCxTQUFTLEdBR1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUUxQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7QUFZN0MsTUFBTSxPQUFPLGNBQWM7Ozs7OztJQU96QixZQUNFLEdBQWdCLEVBQ1IsRUFBYyxFQUNkLE1BQWlCO1FBRGpCLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDZCxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBUkgsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUN6QixVQUFLLEdBQUcsdUJBQXVCLENBQUM7UUFFakMsV0FBTSxHQUFHLEtBQUssQ0FBQztRQU9yQixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksb0JBQU8sSUFBSSxXQUFXLEVBQUUsRUFBSyxHQUFHLEVBQUUsQ0FBQztJQUN2RCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNkLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUE2RDtRQUN2RSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU07WUFBRSxPQUFPO1FBQ3pCLElBQUksT0FBTyxDQUFDLEtBQUssRUFBRTtZQUNqQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEI7YUFBTTtZQUNMLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNmO0lBQ0gsQ0FBQzs7OztJQUVPLE1BQU07O1lBQ1IsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHO1FBRXJCLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRTs7a0JBQ3pCLEdBQUcsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzs7a0JBQ3ZCLElBQUksR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDaEMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDeEYsTUFBTSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDeEI7O2NBRUssTUFBTSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDOztjQUNuQyxPQUFPLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7UUFDM0MsSUFBSSxNQUFNLElBQUksT0FBTyxFQUFFO1lBQ3JCLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN4QztRQUVELElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNqRSxDQUFDOzs7O0lBRU8sV0FBVztRQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUUsYUFBYSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztJQUN6RixDQUFDOzs7WUF2REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxRQUFRO2dCQUNsQixRQUFRLEVBQUUsY0FBYzthQUN6Qjs7OztZQVhRLFdBQVc7WUFWbEIsVUFBVTtZQUlWLFNBQVM7OztrQkFtQlIsS0FBSyxTQUFDLE1BQU07bUJBQ1osS0FBSztvQkFDTCxLQUFLOztBQURrQjtJQUFkLFdBQVcsRUFBRTs7NENBQVc7OztJQURsQyw2QkFBMkI7O0lBQzNCLDhCQUFrQzs7SUFDbEMsK0JBQXlDOztJQUV6QyxnQ0FBdUI7O0lBSXJCLDRCQUFzQjs7SUFDdEIsZ0NBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlLFxuICBTaW1wbGVDaGFuZ2VzLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5pbXBvcnQgeyBJbWFnZUNvbmZpZyB9IGZyb20gJy4vaW1hZ2UuY29uZmlnJztcblxuLyoqXG4gKiBpbWfmoIfnrb5cbiAqICsg5pSv5oyB5b6u5L+h44CBcXHlpLTlg4/op4TliJnnvKnnlaXlm77op4TliJlcbiAqICsg5pSv5oyB56e76ZmkaHR0cCZodHRwc+WNj+iurmh0dHBcbiAqICsg5pSv5oyB5aKe5Yqgb25lcnJvcuS6i+S7tlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbX3NyY10nLFxuICBleHBvcnRBczogJ3NyY0RpcmVjdGl2ZScsXG59KVxuZXhwb3J0IGNsYXNzIEltYWdlRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuICBASW5wdXQoJ19zcmMnKSBzcmM6IHN0cmluZztcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgc2l6ZSA9IDY0O1xuICBASW5wdXQoKSBlcnJvciA9ICcuL2Fzc2V0cy9pbWcvbG9nby5zdmcnO1xuXG4gIHByaXZhdGUgaW5pdGVkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgY29nOiBJbWFnZUNvbmZpZyxcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyOiBSZW5kZXJlcjIsXG4gICkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgeyAuLi5uZXcgSW1hZ2VDb25maWcoKSwgLi4uY29nfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIHRoaXMudXBkYXRlRXJyb3IoKTtcbiAgICB0aGlzLmluaXRlZCA9IHRydWU7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtQIGluIGtleW9mIHRoaXNdPzogU2ltcGxlQ2hhbmdlIH0gJiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmluaXRlZCkgcmV0dXJuO1xuICAgIGlmIChjaGFuZ2VzLmVycm9yKSB7XG4gICAgICB0aGlzLnVwZGF0ZUVycm9yKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGUoKSB7XG4gICAgbGV0IG5ld1NyYyA9IHRoaXMuc3JjO1xuXG4gICAgaWYgKG5ld1NyYy5pbmNsdWRlcygncWxvZ28uY24nKSkge1xuICAgICAgY29uc3QgYXJyID0gbmV3U3JjLnNwbGl0KCcvJyk7XG4gICAgICBjb25zdCBzaXplID0gYXJyW2Fyci5sZW5ndGggLSAxXTtcbiAgICAgIGFyclthcnIubGVuZ3RoIC0gMV0gPSBzaXplID09PSAnMCcgfHwgK3NpemUgIT09IHRoaXMuc2l6ZSA/IHRoaXMuc2l6ZS50b1N0cmluZygpIDogc2l6ZTtcbiAgICAgIG5ld1NyYyA9IGFyci5qb2luKCcvJyk7XG4gICAgfVxuXG4gICAgY29uc3QgaXNIdHRwID0gbmV3U3JjLnN0YXJ0c1dpdGgoJ2h0dHA6Jyk7XG4gICAgY29uc3QgaXNIdHRwcyA9IG5ld1NyYy5zdGFydHNXaXRoKCdodHRwczonKTtcbiAgICBpZiAoaXNIdHRwIHx8IGlzSHR0cHMpIHtcbiAgICAgIG5ld1NyYyA9IG5ld1NyYy5zdWJzdHIoaXNIdHRwID8gNSA6IDYpO1xuICAgIH1cblxuICAgIHRoaXMucmVuZGVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdzcmMnLCBuZXdTcmMpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVFcnJvcigpIHtcbiAgICB0aGlzLnJlbmRlci5zZXRBdHRyaWJ1dGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnb25lcnJvcicsIGB0aGlzLnNyYz0nJHt0aGlzLmVycm9yfSdgKTtcbiAgfVxufVxuIl19