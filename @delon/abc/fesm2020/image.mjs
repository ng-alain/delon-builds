import { __decorate } from 'tslib';
import * as i0 from '@angular/core';
import { Directive, Input, NgModule } from '@angular/core';
import { Subject, of, throwError, Observable } from 'rxjs';
import { takeUntil, take, finalize, filter } from 'rxjs/operators';
import { InputNumber, InputBoolean } from '@delon/util/decorator';
import * as i1 from '@delon/util/config';
import * as i2 from '@delon/theme';
import * as i3 from '@angular/cdk/platform';
import * as i4 from 'ng-zorro-antd/modal';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { CommonModule } from '@angular/common';

/**
 * @deprecated Will be removed in 14.0.0, Pls used [nz-image](https://ng.ant.design/components/image/en) instead, for examples:
 */
class ImageDirective {
    constructor(el, configSrv, http, platform, modal) {
        this.http = http;
        this.platform = platform;
        this.modal = modal;
        this.useHttp = false;
        this.inited = false;
        this.destroy$ = new Subject();
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
        this.getSrc(this.src, true)
            .pipe(takeUntil(this.destroy$), take(1))
            .subscribe({
            next: src => (this.imgEl.src = src),
            error: () => this.setError()
        });
    }
    getSrc(data, isSize) {
        const { size, useHttp } = this;
        if (useHttp) {
            return this.getByHttp(data);
        }
        if (isSize && data.includes('qlogo.cn')) {
            const arr = data.split('/');
            const imgSize = arr[arr.length - 1];
            arr[arr.length - 1] = imgSize === '0' || +imgSize !== size ? size.toString() : imgSize;
            data = arr.join('/');
        }
        return of(data.replace(/^(?:https?:)/i, ''));
    }
    getByHttp(url) {
        if (!this.platform.isBrowser) {
            return throwError(() => Error(`Not supported`));
        }
        return new Observable((observer) => {
            this.http
                .get(url, null, { responseType: 'blob' })
                .pipe(takeUntil(this.destroy$), take(1), finalize(() => observer.complete()))
                .subscribe({
                next: (blob) => {
                    const reader = new FileReader();
                    reader.onloadend = () => observer.next(reader.result);
                    reader.onerror = () => observer.error(`Can't reader image data by ${url}`);
                    reader.readAsDataURL(blob);
                },
                error: () => observer.error(`Can't access remote url ${url}`)
            });
        });
    }
    updateError() {
        const { imgEl, error } = this;
        imgEl.onerror = function () {
            this.onerror = null;
            this.src = error;
        };
    }
    setError() {
        const { imgEl, error } = this;
        imgEl.src = error;
    }
    open(ev) {
        if (!this.previewSrc) {
            return;
        }
        ev.stopPropagation();
        ev.preventDefault();
        this.getSrc(this.previewSrc, false)
            .pipe(takeUntil(this.destroy$), filter(w => !!w), take(1))
            .subscribe(src => {
            this.modal.create({
                nzTitle: undefined,
                nzFooter: null,
                nzContent: `<img class="img-fluid" src="${src}" />`,
                ...this.previewModalOptions
            });
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
ImageDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: ImageDirective, deps: [{ token: i0.ElementRef }, { token: i1.AlainConfigService }, { token: i2._HttpClient }, { token: i3.Platform }, { token: i4.NzModalService }], target: i0.ɵɵFactoryTarget.Directive });
ImageDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.0", type: ImageDirective, selector: "[_src]", inputs: { src: ["_src", "src"], size: "size", error: "error", useHttp: "useHttp", previewSrc: "previewSrc", previewModalOptions: "previewModalOptions" }, host: { listeners: { "click": "open($event)" }, properties: { "class.point": "previewSrc" } }, exportAs: ["_src"], usesOnChanges: true, ngImport: i0 });
__decorate([
    InputNumber()
], ImageDirective.prototype, "size", void 0);
__decorate([
    InputBoolean()
], ImageDirective.prototype, "useHttp", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: ImageDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[_src]',
                    exportAs: '_src',
                    host: {
                        '(click)': 'open($event)',
                        '[class.point]': `previewSrc`
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.AlainConfigService }, { type: i2._HttpClient }, { type: i3.Platform }, { type: i4.NzModalService }]; }, propDecorators: { src: [{
                type: Input,
                args: ['_src']
            }], size: [{
                type: Input
            }], error: [{
                type: Input
            }], useHttp: [{
                type: Input
            }], previewSrc: [{
                type: Input
            }], previewModalOptions: [{
                type: Input
            }] } });

const DIRECTIVES = [ImageDirective];
class ImageModule {
}
ImageModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: ImageModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ImageModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: ImageModule, declarations: [ImageDirective], imports: [CommonModule, NzModalModule], exports: [ImageDirective] });
ImageModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: ImageModule, imports: [[CommonModule, NzModalModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: ImageModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, NzModalModule],
                    declarations: DIRECTIVES,
                    exports: DIRECTIVES
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { ImageDirective, ImageModule };
//# sourceMappingURL=image.mjs.map
