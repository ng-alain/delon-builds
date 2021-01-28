import { __decorate, __metadata } from 'tslib';
import { DOCUMENT, CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, EventEmitter, ɵɵdirectiveInject, ElementRef, ChangeDetectorRef, ɵɵngDeclareComponent, ChangeDetectionStrategy, ViewEncapsulation, Component, Inject, Input, Output, ɵɵngDeclareDirective, Directive, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { ActivationStart, ActivationEnd, Router } from '@angular/router';
import { InputBoolean, InputNumber, DelonUtilModule } from '@delon/util';
import { BehaviorSubject, fromEvent } from 'rxjs';
import { share, debounceTime, filter } from 'rxjs/operators';

class FullContentService {
    constructor() {
        this._change = new BehaviorSubject(null);
    }
    /** 切换全屏工作区状态 */
    toggle() {
        this._change.next(true);
    }
    get change() {
        return this._change.pipe(share());
    }
}
/** @nocollapse */ FullContentService.ɵfac = function FullContentService_Factory(t) { return new (t || FullContentService)(); };
/** @nocollapse */ FullContentService.ɵprov = ɵɵdefineInjectable({ token: FullContentService, factory: FullContentService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(FullContentService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();

const wrapCls = `full-content__body`;
const openedCls = `full-content__opened`;
const hideTitleCls = `full-content__hidden-title`;
class FullContentComponent {
    constructor(el, cdr, srv, router, doc) {
        this.el = el;
        this.cdr = cdr;
        this.srv = srv;
        this.router = router;
        this.doc = doc;
        this.inited = false;
        this.id = `_full-content-${Math.random().toString(36).substring(2)}`;
        this.scroll$ = null;
        this._height = 0;
        this.hideTitle = true;
        this.padding = 24;
        this.fullscreenChange = new EventEmitter();
    }
    updateCls() {
        const clss = this.bodyEl.classList;
        if (this.fullscreen) {
            clss.add(openedCls);
            if (this.hideTitle) {
                clss.add(hideTitleCls);
            }
        }
        else {
            clss.remove(openedCls);
            if (this.hideTitle) {
                clss.remove(hideTitleCls);
            }
        }
    }
    update() {
        this.updateCls();
        this.updateHeight();
        this.fullscreenChange.emit(this.fullscreen);
    }
    updateHeight() {
        this._height = this.bodyEl.getBoundingClientRect().height - this.el.nativeElement.getBoundingClientRect().top - this.padding;
        this.cdr.detectChanges();
    }
    removeInBody() {
        this.bodyEl.classList.remove(wrapCls, openedCls, hideTitleCls);
    }
    ngOnInit() {
        this.inited = true;
        this.bodyEl = this.doc.querySelector('body');
        this.bodyEl.classList.add(wrapCls);
        this.el.nativeElement.id = this.id;
        this.updateCls();
        // when window resize
        this.scroll$ = fromEvent(window, 'resize')
            .pipe(debounceTime(200))
            .subscribe(() => this.updateHeight());
        // when servier changed
        this.srv$ = this.srv.change.pipe(filter(res => res !== null)).subscribe(() => this.toggle());
        // when router changed
        this.route$ = this.router.events
            .pipe(filter((e) => e instanceof ActivationStart || e instanceof ActivationEnd), debounceTime(200))
            .subscribe(() => {
            if (!!this.doc.querySelector('#' + this.id)) {
                this.bodyEl.classList.add(wrapCls);
                this.updateCls();
            }
            else {
                this.removeInBody();
            }
        });
    }
    toggle() {
        this.fullscreen = !this.fullscreen;
        this.update();
        this.updateHeight();
    }
    ngAfterViewInit() {
        setTimeout(() => this.updateHeight());
    }
    ngOnChanges() {
        if (this.inited)
            this.update();
    }
    ngOnDestroy() {
        this.removeInBody();
        this.scroll$.unsubscribe();
        this.srv$.unsubscribe();
        this.route$.unsubscribe();
    }
}
/** @nocollapse */ FullContentComponent.ɵfac = function FullContentComponent_Factory(t) { return new (t || FullContentComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(FullContentService), ɵɵdirectiveInject(Router), ɵɵdirectiveInject(DOCUMENT)); };
/** @nocollapse */ FullContentComponent.ɵcmp = ɵɵngDeclareComponent({ version: "11.1.1", type: FullContentComponent, selector: "full-content", inputs: { fullscreen: "fullscreen", hideTitle: "hideTitle", padding: "padding" }, outputs: { fullscreenChange: "fullscreenChange" }, host: { properties: { "class.full-content": "true", "style.height.px": "_height" } }, exportAs: ["fullContent"], usesOnChanges: true, ngImport: i0, template: ` <ng-content></ng-content> `, isInline: true, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], FullContentComponent.prototype, "fullscreen", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], FullContentComponent.prototype, "hideTitle", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], FullContentComponent.prototype, "padding", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(FullContentComponent, [{
        type: Component,
        args: [{
                selector: 'full-content',
                exportAs: 'fullContent',
                template: ` <ng-content></ng-content> `,
                host: {
                    '[class.full-content]': 'true',
                    '[style.height.px]': '_height',
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: ElementRef }, { type: ChangeDetectorRef }, { type: FullContentService }, { type: Router }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, { fullscreen: [{
            type: Input
        }], hideTitle: [{
            type: Input
        }], padding: [{
            type: Input
        }], fullscreenChange: [{
            type: Output
        }] }); })();

class FullContentToggleDirective {
    constructor(parent) {
        this.parent = parent;
    }
    _click() {
        this.parent.toggle();
    }
}
/** @nocollapse */ FullContentToggleDirective.ɵfac = function FullContentToggleDirective_Factory(t) { return new (t || FullContentToggleDirective)(ɵɵdirectiveInject(FullContentComponent)); };
/** @nocollapse */ FullContentToggleDirective.ɵdir = ɵɵngDeclareDirective({ version: "11.1.1", type: FullContentToggleDirective, selector: "[full-toggle]", host: { listeners: { "click": "_click()" } }, exportAs: ["fullToggle"], ngImport: i0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(FullContentToggleDirective, [{
        type: Directive,
        args: [{
                selector: '[full-toggle]',
                exportAs: 'fullToggle',
                host: {
                    '(click)': '_click()',
                },
            }]
    }], function () { return [{ type: FullContentComponent }]; }, null); })();

const COMPONENTS = [FullContentComponent, FullContentToggleDirective];
class FullContentModule {
}
/** @nocollapse */ FullContentModule.ɵmod = ɵɵdefineNgModule({ type: FullContentModule });
/** @nocollapse */ FullContentModule.ɵinj = ɵɵdefineInjector({ factory: function FullContentModule_Factory(t) { return new (t || FullContentModule)(); }, imports: [[CommonModule, DelonUtilModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(FullContentModule, { declarations: [FullContentComponent, FullContentToggleDirective], imports: [CommonModule, DelonUtilModule], exports: [FullContentComponent, FullContentToggleDirective] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(FullContentModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, DelonUtilModule],
                declarations: [...COMPONENTS],
                exports: [...COMPONENTS],
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { FullContentComponent, FullContentModule, FullContentService, FullContentToggleDirective };
//# sourceMappingURL=fullContent.js.map
