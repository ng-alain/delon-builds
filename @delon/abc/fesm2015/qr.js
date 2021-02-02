import { __decorate, __metadata } from 'tslib';
import { Platform } from '@angular/cdk/platform';
import * as i0 from '@angular/core';
import { EventEmitter, ɵɵdirectiveInject, ChangeDetectorRef, ɵɵngDeclareComponent, ChangeDetectionStrategy, ViewEncapsulation, ɵsetClassMetadata, Component, Input, Output, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { AlainConfigService } from '@delon/util/config';
import { InputNumber } from '@delon/util/decorator';
import { LazyService } from '@delon/util/other';
import { filter } from 'rxjs/operators';
import { NgIf, CommonModule } from '@angular/common';

const QR_DEFULAT_CONFIG = {
    lib: `https://cdn.bootcdn.net/ajax/libs/qrious/4.0.2/qrious.min.js`,
    background: 'white',
    backgroundAlpha: 1,
    foreground: 'black',
    foregroundAlpha: 1,
    level: 'L',
    mime: 'image/png',
    padding: 10,
    size: 220,
    delay: 0,
};

class QRComponent {
    constructor(cdr, configSrv, lazySrv, platform) {
        this.cdr = cdr;
        this.lazySrv = lazySrv;
        this.platform = platform;
        this.inited = false;
        this.value = '';
        this.change = new EventEmitter();
        this.cog = configSrv.merge('qr', QR_DEFULAT_CONFIG);
        Object.assign(this, this.cog);
    }
    init() {
        if (!this.inited) {
            return;
        }
        if (this.qr == null) {
            this.qr = new window.QRious();
        }
        this.qr.set(this.option);
        this.dataURL = this.qr.toDataURL();
        this.change.emit(this.dataURL);
        this.cdr.detectChanges();
    }
    initDelay() {
        this.inited = true;
        setTimeout(() => this.init(), this.delay);
    }
    ngAfterViewInit() {
        if (!this.platform.isBrowser) {
            return;
        }
        if (window.QRious) {
            this.initDelay();
            return;
        }
        const url = this.cog.lib;
        this.lazy$ = this.lazySrv.change
            .pipe(filter(ls => ls.length === 1 && ls[0].path === url && ls[0].status === 'ok'))
            .subscribe(() => this.initDelay());
        this.lazySrv.load(url);
    }
    ngOnChanges() {
        const option = {
            background: this.background,
            backgroundAlpha: this.backgroundAlpha,
            foreground: this.foreground,
            foregroundAlpha: this.foregroundAlpha,
            level: this.level,
            mime: this.mime,
            padding: this.padding,
            size: this.size,
            value: this.toUtf8ByteArray(this.value),
        };
        this.option = option;
        this.init();
    }
    toUtf8ByteArray(str) {
        str = encodeURI(str);
        const result = [];
        for (let i = 0; i < str.length; i++) {
            if (str.charAt(i) !== '%') {
                result.push(str.charCodeAt(i));
            }
            else {
                result.push(parseInt(str.substr(i + 1, 2), 16));
                i += 2;
            }
        }
        return result.map(v => String.fromCharCode(v)).join('');
    }
    ngOnDestroy() {
        if (this.lazy$) {
            this.lazy$.unsubscribe();
        }
    }
}
/** @nocollapse */ QRComponent.ɵfac = function QRComponent_Factory(t) { return new (t || QRComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(AlainConfigService), ɵɵdirectiveInject(LazyService), ɵɵdirectiveInject(Platform)); };
/** @nocollapse */ QRComponent.ɵcmp = ɵɵngDeclareComponent({ version: "11.1.1", type: QRComponent, selector: "qr", inputs: { background: "background", backgroundAlpha: "backgroundAlpha", foreground: "foreground", foregroundAlpha: "foregroundAlpha", level: "level", mime: "mime", padding: "padding", size: "size", value: "value", delay: "delay" }, outputs: { change: "change" }, host: { properties: { "style.display": "'inline-block'", "style.height.px": "size", "style.width.px": "size" } }, exportAs: ["qr"], usesOnChanges: true, ngImport: i0, template: ` <img *ngIf="dataURL" style="max-width: 100%; max-height: 100%;" [src]="dataURL" /> `, isInline: true, directives: [{ type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
__decorate([
    InputNumber(),
    __metadata("design:type", Number)
], QRComponent.prototype, "padding", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Number)
], QRComponent.prototype, "size", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Number)
], QRComponent.prototype, "delay", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(QRComponent, [{
        type: Component,
        args: [{
                selector: 'qr',
                exportAs: 'qr',
                template: ` <img *ngIf="dataURL" style="max-width: 100%; max-height: 100%;" [src]="dataURL" /> `,
                host: {
                    '[style.display]': `'inline-block'`,
                    '[style.height.px]': 'size',
                    '[style.width.px]': 'size',
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: AlainConfigService }, { type: LazyService }, { type: Platform }]; }, { background: [{
            type: Input
        }], backgroundAlpha: [{
            type: Input
        }], foreground: [{
            type: Input
        }], foregroundAlpha: [{
            type: Input
        }], level: [{
            type: Input
        }], mime: [{
            type: Input
        }], padding: [{
            type: Input
        }], size: [{
            type: Input
        }], value: [{
            type: Input
        }], delay: [{
            type: Input
        }], change: [{
            type: Output
        }] }); })();

const COMPONENTS = [QRComponent];
class QRModule {
}
/** @nocollapse */ QRModule.ɵmod = ɵɵdefineNgModule({ type: QRModule });
/** @nocollapse */ QRModule.ɵinj = ɵɵdefineInjector({ factory: function QRModule_Factory(t) { return new (t || QRModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(QRModule, { declarations: [QRComponent], imports: [CommonModule], exports: [QRComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(QRModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: COMPONENTS,
                exports: COMPONENTS,
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { QRComponent, QRModule, QR_DEFULAT_CONFIG };
//# sourceMappingURL=qr.js.map
