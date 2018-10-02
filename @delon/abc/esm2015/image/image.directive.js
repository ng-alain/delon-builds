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
export class ImageDirective {
    /**
     * @param {?} el
     * @param {?} render
     * @param {?} DEF
     */
    constructor(el, render, DEF) {
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
        if (this.inited) {
            if (changes.error) {
                this.updateError();
            }
            else {
                this.update();
            }
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
            arr[arr.length - 1] =
                size === '0' || +size !== this.size ? this.size.toString() : size;
            newSrc = arr.join('/');
        }
        /** @type {?} */
        const isHttp = newSrc.startsWith('http:');
        /** @type {?} */
        const isHttps = newSrc.startsWith('https:');
        if (isHttp || isHttps)
            newSrc = newSrc.substr(isHttp ? 5 : 6);
        this.render.setAttribute(this.el.nativeElement, 'src', newSrc);
    }
    /**
     * @return {?}
     */
    updateError() {
        this.render.setAttribute(this.el.nativeElement, 'onerror', `this.src='${this.error}';`);
    }
}
ImageDirective.decorators = [
    { type: Directive, args: [{ selector: '[_src]' },] }
];
/** @nocollapse */
ImageDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ImageConfig }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9pbWFnZS8iLCJzb3VyY2VzIjpbImltYWdlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUVMLFVBQVUsRUFDVixTQUFTLEdBSVYsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFcEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7O0FBUzdDLE1BQU07Ozs7OztJQVNKLFlBQ1UsSUFDQSxRQUNSLEdBQWdCO1FBRlIsT0FBRSxHQUFGLEVBQUU7UUFDRixXQUFNLEdBQU4sTUFBTTtvQkFSZSxFQUFFO3FCQUVoQix1QkFBdUI7c0JBRXZCLEtBQUs7UUFPcEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDcEM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2QsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0tBQ3BCOzs7OztJQUVELFdBQVcsQ0FDVCxPQUE2RDtRQUU3RCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUNwQjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDZjtTQUNGO0tBQ0Y7Ozs7SUFFTyxNQUFNOztRQUNaLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7UUFFdEIsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFOztZQUMvQixNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUNBOztZQUQ3QixNQUNFLElBQUksR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztZQUM3QixHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7Z0JBQ2pCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ3BFLE1BQU0sR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3hCOztRQUVELE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQ0Q7O1FBRHhDLE1BQ0UsT0FBTyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEMsSUFBSSxNQUFNLElBQUksT0FBTztZQUFFLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUU5RCxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7Ozs7O0lBR3pELFdBQVc7UUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQ3RCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUNyQixTQUFTLEVBQ1QsYUFBYSxJQUFJLENBQUMsS0FBSyxJQUFJLENBQzVCLENBQUM7Ozs7WUEzREwsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRTs7OztZQWhCL0IsVUFBVTtZQUNWLFNBQVM7WUFPRixXQUFXOzs7a0JBVWpCLEtBQUssU0FBQyxNQUFNO21CQUVaLEtBQUs7b0JBRUwsS0FBSzs7O0lBRkksV0FBVyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBEaXJlY3RpdmUsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgT25Jbml0LFxyXG4gIFNpbXBsZUNoYW5nZSxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZGVlcENvcHksIElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xyXG5cclxuaW1wb3J0IHsgSW1hZ2VDb25maWcgfSBmcm9tICcuL2ltYWdlLmNvbmZpZyc7XHJcblxyXG4vKipcclxuICogaW1n5qCH562+XHJcbiAqICsg5pSv5oyB5b6u5L+h44CBcXHlpLTlg4/op4TliJnnvKnnlaXlm77op4TliJlcclxuICogKyDmlK/mjIHnp7vpmaRodHRwJmh0dHBz5Y2P6K6uaHR0cFxyXG4gKiArIOaUr+aMgeWinuWKoG9uZXJyb3Lkuovku7ZcclxuICovXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tfc3JjXScgfSlcclxuZXhwb3J0IGNsYXNzIEltYWdlRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xyXG4gIEBJbnB1dCgnX3NyYycpIHNyYzogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBzaXplID0gNjQ7XHJcblxyXG4gIEBJbnB1dCgpIGVycm9yID0gJy4vYXNzZXRzL2ltZy9sb2dvLnN2Zyc7XHJcblxyXG4gIHByaXZhdGUgaW5pdGVkID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgcmVuZGVyOiBSZW5kZXJlcjIsXHJcbiAgICBERUY6IEltYWdlQ29uZmlnLFxyXG4gICkge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkZWVwQ29weShERUYpKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICAgIHRoaXMudXBkYXRlRXJyb3IoKTtcclxuICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKFxyXG4gICAgY2hhbmdlczogeyBbUCBpbiBrZXlvZiB0aGlzXT86IFNpbXBsZUNoYW5nZSB9ICYgU2ltcGxlQ2hhbmdlcyxcclxuICApOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmluaXRlZCkge1xyXG4gICAgICBpZiAoY2hhbmdlcy5lcnJvcikge1xyXG4gICAgICAgIHRoaXMudXBkYXRlRXJyb3IoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZSgpIHtcclxuICAgIGxldCBuZXdTcmMgPSB0aGlzLnNyYztcclxuXHJcbiAgICBpZiAobmV3U3JjLmluY2x1ZGVzKCdxbG9nby5jbicpKSB7XHJcbiAgICAgIGNvbnN0IGFyciA9IG5ld1NyYy5zcGxpdCgnLycpLFxyXG4gICAgICAgIHNpemUgPSBhcnJbYXJyLmxlbmd0aCAtIDFdO1xyXG4gICAgICBhcnJbYXJyLmxlbmd0aCAtIDFdID1cclxuICAgICAgICBzaXplID09PSAnMCcgfHwgK3NpemUgIT09IHRoaXMuc2l6ZSA/IHRoaXMuc2l6ZS50b1N0cmluZygpIDogc2l6ZTtcclxuICAgICAgbmV3U3JjID0gYXJyLmpvaW4oJy8nKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpc0h0dHAgPSBuZXdTcmMuc3RhcnRzV2l0aCgnaHR0cDonKSxcclxuICAgICAgaXNIdHRwcyA9IG5ld1NyYy5zdGFydHNXaXRoKCdodHRwczonKTtcclxuICAgIGlmIChpc0h0dHAgfHwgaXNIdHRwcykgbmV3U3JjID0gbmV3U3JjLnN1YnN0cihpc0h0dHAgPyA1IDogNik7XHJcblxyXG4gICAgdGhpcy5yZW5kZXIuc2V0QXR0cmlidXRlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3NyYycsIG5ld1NyYyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZUVycm9yKCkge1xyXG4gICAgdGhpcy5yZW5kZXIuc2V0QXR0cmlidXRlKFxyXG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICdvbmVycm9yJyxcclxuICAgICAgYHRoaXMuc3JjPScke3RoaXMuZXJyb3J9JztgLFxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19