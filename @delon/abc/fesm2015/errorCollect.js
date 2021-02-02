import { __decorate, __metadata } from 'tslib';
import { Directionality } from '@angular/cdk/bidi';
import { DOCUMENT, CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { ɵɵdirectiveInject, ElementRef, ChangeDetectorRef, ɵɵngDeclareComponent, ChangeDetectionStrategy, ViewEncapsulation, ɵsetClassMetadata, Component, Inject, Optional, Input, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { AlainConfigService } from '@delon/util/config';
import { InputNumber } from '@delon/util/decorator';
import { Subject, interval } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';

class ErrorCollectComponent {
    constructor(el, cdr, doc, configSrv, directionality) {
        this.el = el;
        this.cdr = cdr;
        this.doc = doc;
        this.directionality = directionality;
        this.destroy$ = new Subject();
        this._hiden = true;
        this.count = 0;
        this.dir = 'ltr';
        configSrv.attach(this, 'errorCollect', { freq: 500, offsetTop: 65 + 64 + 8 * 2 });
    }
    get errEls() {
        return this.formEl.querySelectorAll('.ant-form-item-has-error');
    }
    update() {
        const count = this.errEls.length;
        if (count === this.count)
            return;
        this.count = count;
        this._hiden = count === 0;
        this.cdr.markForCheck();
    }
    _click() {
        if (this.count === 0)
            return false;
        // nz-form-control
        const els = this.errEls;
        const formItemEl = this.findParent(els[0], '[nz-form-control]') || els[0];
        formItemEl.scrollIntoView(true);
        // fix header height
        this.doc.documentElement.scrollTop -= this.offsetTop;
        return true;
    }
    install() {
        var _a;
        this.dir = this.directionality.value;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
        });
        interval(this.freq)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => this.update());
        this.update();
    }
    findParent(el, selector) {
        let retEl = null;
        while (el) {
            if (el.querySelector(selector)) {
                retEl = el;
                break;
            }
            el = el.parentElement;
        }
        return retEl;
    }
    ngOnInit() {
        this.formEl = this.findParent(this.el.nativeElement, 'form');
        if (this.formEl === null)
            throw new Error('No found form element');
        this.install();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
/** @nocollapse */ ErrorCollectComponent.ɵfac = function ErrorCollectComponent_Factory(t) { return new (t || ErrorCollectComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(AlainConfigService), ɵɵdirectiveInject(Directionality, 8)); };
/** @nocollapse */ ErrorCollectComponent.ɵcmp = ɵɵngDeclareComponent({ version: "11.1.1", type: ErrorCollectComponent, selector: "error-collect, [error-collect]", inputs: { freq: "freq", offsetTop: "offsetTop" }, host: { listeners: { "click": "_click()" }, properties: { "class.error-collect": "true", "class.error-collect-rtl": "dir === 'rtl'", "class.d-none": "_hiden" } }, exportAs: ["errorCollect"], ngImport: i0, template: `
    <i nz-icon nzType="exclamation-circle"></i>
    <span class="error-collect__count">{{ count }}</span>
  `, isInline: true, directives: [{ type: NzIconDirective, selector: "[nz-icon]", inputs: ["nzRotate", "nzSpin", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
__decorate([
    InputNumber(),
    __metadata("design:type", Number)
], ErrorCollectComponent.prototype, "freq", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Number)
], ErrorCollectComponent.prototype, "offsetTop", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ErrorCollectComponent, [{
        type: Component,
        args: [{
                selector: 'error-collect, [error-collect]',
                exportAs: 'errorCollect',
                template: `
    <i nz-icon nzType="exclamation-circle"></i>
    <span class="error-collect__count">{{ count }}</span>
  `,
                host: {
                    '[class.error-collect]': 'true',
                    '[class.error-collect-rtl]': `dir === 'rtl'`,
                    '[class.d-none]': '_hiden',
                    '(click)': '_click()',
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: ElementRef }, { type: ChangeDetectorRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: AlainConfigService }, { type: Directionality, decorators: [{
                type: Optional
            }] }]; }, { freq: [{
            type: Input
        }], offsetTop: [{
            type: Input
        }] }); })();

const COMPONENTS = [ErrorCollectComponent];
class ErrorCollectModule {
}
/** @nocollapse */ ErrorCollectModule.ɵmod = ɵɵdefineNgModule({ type: ErrorCollectModule });
/** @nocollapse */ ErrorCollectModule.ɵinj = ɵɵdefineInjector({ factory: function ErrorCollectModule_Factory(t) { return new (t || ErrorCollectModule)(); }, imports: [[CommonModule, NzIconModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(ErrorCollectModule, { declarations: [ErrorCollectComponent], imports: [CommonModule, NzIconModule], exports: [ErrorCollectComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ErrorCollectModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, NzIconModule],
                declarations: COMPONENTS,
                exports: COMPONENTS,
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { ErrorCollectComponent, ErrorCollectModule };
//# sourceMappingURL=errorCollect.js.map
