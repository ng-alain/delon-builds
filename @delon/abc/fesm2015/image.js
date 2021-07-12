import { __decorate } from 'tslib';
import { Platform } from '@angular/cdk/platform';
import { Directive, ElementRef, Input, NgModule } from '@angular/core';
import { Subject, of, throwError, Observable } from 'rxjs';
import { takeUntil, take, finalize, filter } from 'rxjs/operators';
import { NzModalService, NzModalModule } from 'ng-zorro-antd/modal';
import { _HttpClient } from '@delon/theme';
import { AlainConfigService } from '@delon/util/config';
import { InputNumber, InputBoolean } from '@delon/util/decorator';
import { CommonModule } from '@angular/common';

/**
 * @deprecated Will be removed in 13.0.0, Pls used [nz-image](https://ng.ant.design/components/image/en) instead, for examples:
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
            .subscribe(src => (this.imgEl.src = src), () => this.setError());
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
            return throwError(`Not supported`);
        }
        return new Observable((observer) => {
            this.http
                .get(url, null, { responseType: 'blob' })
                .pipe(takeUntil(this.destroy$), take(1), finalize(() => observer.complete()))
                .subscribe((blob) => {
                const reader = new FileReader();
                reader.onloadend = () => observer.next(reader.result);
                reader.onerror = () => observer.error(`Can't reader image data by ${url}`);
                reader.readAsDataURL(blob);
            }, () => observer.error(`Can't access remote url ${url}`));
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
            this.modal.create(Object.assign({ nzTitle: undefined, nzFooter: null, nzContent: `<img class="img-fluid" src="${src}" />` }, this.previewModalOptions));
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
ImageDirective.decorators = [
    { type: Directive, args: [{
                selector: '[_src]',
                exportAs: '_src',
                host: {
                    '(click)': 'open($event)',
                    '[class.point]': `previewSrc`
                }
            },] }
];
ImageDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: AlainConfigService },
    { type: _HttpClient },
    { type: Platform },
    { type: NzModalService }
];
ImageDirective.propDecorators = {
    src: [{ type: Input, args: ['_src',] }],
    size: [{ type: Input }],
    error: [{ type: Input }],
    useHttp: [{ type: Input }],
    previewSrc: [{ type: Input }],
    previewModalOptions: [{ type: Input }]
};
__decorate([
    InputNumber()
], ImageDirective.prototype, "size", void 0);
__decorate([
    InputBoolean()
], ImageDirective.prototype, "useHttp", void 0);

const DIRECTIVES = [ImageDirective];
class ImageModule {
}
ImageModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, NzModalModule],
                declarations: DIRECTIVES,
                exports: DIRECTIVES
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { ImageDirective, ImageModule };
//# sourceMappingURL=image.js.map
