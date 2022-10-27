import { __decorate } from 'tslib';
import { DOCUMENT, CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Injectable, EventEmitter, Component, ChangeDetectionStrategy, ViewEncapsulation, Inject, Input, Output, Directive, NgModule } from '@angular/core';
import * as i2 from '@angular/router';
import { ActivationStart, ActivationEnd } from '@angular/router';
import { BehaviorSubject, share, Subject, fromEvent, takeUntil, debounceTime, filter } from 'rxjs';
import { InputBoolean, InputNumber } from '@delon/util/decorator';

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
FullContentService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.8", ngImport: i0, type: FullContentService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
FullContentService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.8", ngImport: i0, type: FullContentService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.8", ngImport: i0, type: FullContentService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });

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
        this.destroy$ = new Subject();
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
        this._height =
            this.bodyEl.getBoundingClientRect().height - this.el.nativeElement.getBoundingClientRect().top - this.padding;
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
        fromEvent(window, 'resize')
            .pipe(takeUntil(this.destroy$), debounceTime(200))
            .subscribe(() => this.updateHeight());
        // when servier changed
        this.srv.change
            .pipe(takeUntil(this.destroy$), filter(res => res !== null))
            .subscribe(() => this.toggle());
        // when router changed
        this.router.events
            .pipe(takeUntil(this.destroy$), filter((e) => e instanceof ActivationStart || e instanceof ActivationEnd), debounceTime(200))
            .subscribe(() => {
            if (!!this.doc.querySelector(`#${this.id}`)) {
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
        const { destroy$ } = this;
        destroy$.next();
        destroy$.complete();
    }
}
FullContentComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.8", ngImport: i0, type: FullContentComponent, deps: [{ token: i0.ElementRef }, { token: i0.ChangeDetectorRef }, { token: FullContentService }, { token: i2.Router }, { token: DOCUMENT }], target: i0.ɵɵFactoryTarget.Component });
FullContentComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.8", type: FullContentComponent, selector: "full-content", inputs: { fullscreen: "fullscreen", hideTitle: "hideTitle", padding: "padding" }, outputs: { fullscreenChange: "fullscreenChange" }, host: { properties: { "class.full-content": "true", "style.height.px": "_height" } }, exportAs: ["fullContent"], usesOnChanges: true, ngImport: i0, template: ` <ng-content></ng-content> `, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    InputBoolean()
], FullContentComponent.prototype, "fullscreen", void 0);
__decorate([
    InputBoolean()
], FullContentComponent.prototype, "hideTitle", void 0);
__decorate([
    InputNumber()
], FullContentComponent.prototype, "padding", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.8", ngImport: i0, type: FullContentComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'full-content',
                    exportAs: 'fullContent',
                    template: ` <ng-content></ng-content> `,
                    host: {
                        '[class.full-content]': 'true',
                        '[style.height.px]': '_height'
                    },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: FullContentService }, { type: i2.Router }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }]; }, propDecorators: { fullscreen: [{
                type: Input
            }], hideTitle: [{
                type: Input
            }], padding: [{
                type: Input
            }], fullscreenChange: [{
                type: Output
            }] } });

class FullContentToggleDirective {
    constructor(parent) {
        this.parent = parent;
    }
    _click() {
        this.parent.toggle();
    }
}
FullContentToggleDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.8", ngImport: i0, type: FullContentToggleDirective, deps: [{ token: FullContentComponent }], target: i0.ɵɵFactoryTarget.Directive });
FullContentToggleDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.8", type: FullContentToggleDirective, selector: "[full-toggle]", host: { listeners: { "click": "_click()" } }, exportAs: ["fullToggle"], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.8", ngImport: i0, type: FullContentToggleDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[full-toggle]',
                    exportAs: 'fullToggle',
                    host: {
                        '(click)': '_click()'
                    }
                }]
        }], ctorParameters: function () { return [{ type: FullContentComponent }]; } });

const COMPONENTS = [FullContentComponent, FullContentToggleDirective];
class FullContentModule {
}
FullContentModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.8", ngImport: i0, type: FullContentModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FullContentModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.8", ngImport: i0, type: FullContentModule, declarations: [FullContentComponent, FullContentToggleDirective], imports: [CommonModule], exports: [FullContentComponent, FullContentToggleDirective] });
FullContentModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.8", ngImport: i0, type: FullContentModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.8", ngImport: i0, type: FullContentModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: COMPONENTS,
                    exports: COMPONENTS
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { FullContentComponent, FullContentModule, FullContentService, FullContentToggleDirective };
//# sourceMappingURL=full-content.mjs.map
