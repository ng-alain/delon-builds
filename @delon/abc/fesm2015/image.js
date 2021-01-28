import { __decorate, __metadata } from 'tslib';
import { Platform } from '@angular/cdk/platform';
import * as i0 from '@angular/core';
import { ɵɵdirectiveInject, ElementRef, ɵɵngDeclareDirective, ɵsetClassMetadata, Directive, Input, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { AlainConfigService, InputNumber, InputBoolean, DelonUtilModule } from '@delon/util';
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
/** @nocollapse */ ImageDirective.ɵfac = function ImageDirective_Factory(t) { return new (t || ImageDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(AlainConfigService), ɵɵdirectiveInject(_HttpClient), ɵɵdirectiveInject(Platform)); };
/** @nocollapse */ ImageDirective.ɵdir = ɵɵngDeclareDirective({ version: "11.1.1", type: ImageDirective, selector: "[_src]", inputs: { src: ["_src", "src"], size: "size", error: "error", useHttp: "useHttp" }, exportAs: ["_src"], usesOnChanges: true, ngImport: i0 });
__decorate([
    InputNumber(),
    __metadata("design:type", Number)
], ImageDirective.prototype, "size", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], ImageDirective.prototype, "useHttp", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ImageDirective, [{
        type: Directive,
        args: [{
                selector: '[_src]',
                exportAs: '_src',
            }]
    }], function () { return [{ type: ElementRef }, { type: AlainConfigService }, { type: _HttpClient }, { type: Platform }]; }, { src: [{
            type: Input,
            args: ['_src']
        }], size: [{
            type: Input
        }], error: [{
            type: Input
        }], useHttp: [{
            type: Input
        }] }); })();

const DIRECTIVES = [ImageDirective];
class ImageModule {
}
/** @nocollapse */ ImageModule.ɵmod = ɵɵdefineNgModule({ type: ImageModule });
/** @nocollapse */ ImageModule.ɵinj = ɵɵdefineInjector({ factory: function ImageModule_Factory(t) { return new (t || ImageModule)(); }, imports: [[CommonModule, DelonUtilModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(ImageModule, { declarations: [ImageDirective], imports: [CommonModule, DelonUtilModule], exports: [ImageDirective] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ImageModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, DelonUtilModule],
                declarations: [...DIRECTIVES],
                exports: [...DIRECTIVES],
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { ImageDirective, ImageModule };
//# sourceMappingURL=image.js.map
