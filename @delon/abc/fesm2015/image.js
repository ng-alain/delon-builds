import { __decorate, __metadata } from 'tslib';
import { Platform } from '@angular/cdk/platform';
import { Directive, ElementRef, Input, NgModule } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { AlainConfigService } from '@delon/util/config';
import { InputNumber, InputBoolean } from '@delon/util/decorator';
import { CommonModule } from '@angular/common';

class ImageDirective {
    constructor(el, configSrv, http, platform) {
        this.http = http;
        this.platform = platform;
        this.useHttp = false;
        this.inited = false;
        configSrv.attach(this, 'image', { size: 64, error: `./assets/img/logo.svg` });
        this.imgEl = el.nativeElement;
    }
    ngOnInit() {
        this.update();
        this.updateError();
        this.inited = true;
    }
    ngOnChanges(changes) {
        const { size, imgEl } = this;
        imgEl.height = size;
        imgEl.width = size;
        if (this.inited) {
            if (changes.error) {
                this.updateError();
            }
            this.update();
        }
    }
    update() {
        const { size, imgEl, useHttp } = this;
        if (useHttp) {
            this.getByHttp();
            return;
        }
        let newSrc = this.src;
        if (newSrc.includes('qlogo.cn')) {
            const arr = newSrc.split('/');
            const imgSize = arr[arr.length - 1];
            arr[arr.length - 1] = imgSize === '0' || +imgSize !== size ? size.toString() : imgSize;
            newSrc = arr.join('/');
        }
        newSrc = newSrc.replace(/^(?:https?:)/i, '');
        imgEl.src = newSrc;
    }
    getByHttp() {
        if (!this.platform.isBrowser) {
            return;
        }
        const { imgEl } = this;
        this.http.get(this.src, null, { responseType: 'blob' }).subscribe((blob) => {
            const reader = new FileReader();
            reader.onloadend = () => (imgEl.src = reader.result);
            reader.onerror = () => this.setError();
            reader.readAsDataURL(blob);
        }, () => this.setError());
    }
    updateError() {
        const { imgEl, error } = this;
        // tslint:disable-next-line: only-arrow-functions, typedef
        imgEl.onerror = function () {
            this.onerror = null;
            this.src = error;
        };
    }
    setError() {
        const { imgEl, error } = this;
        imgEl.src = error;
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
    { type: ElementRef },
    { type: AlainConfigService },
    { type: _HttpClient },
    { type: Platform }
];
ImageDirective.propDecorators = {
    src: [{ type: Input, args: ['_src',] }],
    size: [{ type: Input }],
    error: [{ type: Input }],
    useHttp: [{ type: Input }]
};
__decorate([
    InputNumber(),
    __metadata("design:type", Number)
], ImageDirective.prototype, "size", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], ImageDirective.prototype, "useHttp", void 0);

const DIRECTIVES = [ImageDirective];
class ImageModule {
}
ImageModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [...DIRECTIVES],
                exports: [...DIRECTIVES],
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { ImageDirective, ImageModule };
//# sourceMappingURL=image.js.map
