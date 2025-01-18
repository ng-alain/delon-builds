import { DOCUMENT, CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Injectable, inject, DestroyRef, ElementRef, ChangeDetectorRef, EventEmitter, booleanAttribute, numberAttribute, Component, ChangeDetectionStrategy, ViewEncapsulation, Input, Output, Directive, NgModule } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router, ActivationStart, ActivationEnd } from '@angular/router';
import { BehaviorSubject, share, fromEvent, debounceTime, filter } from 'rxjs';

class FullContentService {
    _change = new BehaviorSubject(null);
    /** 切换全屏工作区状态 */
    toggle() {
        this._change.next(true);
    }
    get change() {
        return this._change.pipe(share());
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.1", ngImport: i0, type: FullContentService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.1", ngImport: i0, type: FullContentService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.1", ngImport: i0, type: FullContentService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });

const wrapCls = `full-content__body`;
const openedCls = `full-content__opened`;
const hideTitleCls = `full-content__hidden-title`;
class FullContentComponent {
    destroy$ = inject(DestroyRef);
    el = inject(ElementRef).nativeElement;
    cdr = inject(ChangeDetectorRef);
    srv = inject(FullContentService);
    router = inject(Router);
    doc = inject(DOCUMENT);
    bodyEl = this.doc.querySelector('body');
    inited = false;
    id = `_full-content-${Math.random().toString(36).substring(2)}`;
    _height = 0;
    fullscreen;
    hideTitle = true;
    padding = 24;
    fullscreenChange = new EventEmitter();
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
        this._height = this.bodyEl.getBoundingClientRect().height - this.el.getBoundingClientRect().top - this.padding;
        this.cdr.detectChanges();
    }
    removeInBody() {
        this.bodyEl.classList.remove(wrapCls, openedCls, hideTitleCls);
    }
    ngOnInit() {
        this.inited = true;
        this.bodyEl.classList.add(wrapCls);
        this.el.id = this.id;
        this.updateCls();
        // when window resize
        fromEvent(window, 'resize')
            .pipe(takeUntilDestroyed(this.destroy$), debounceTime(200))
            .subscribe(() => this.updateHeight());
        // when servier changed
        this.srv.change
            .pipe(takeUntilDestroyed(this.destroy$), filter(res => res !== null))
            .subscribe(() => this.toggle());
        // when router changed
        this.router.events
            .pipe(takeUntilDestroyed(this.destroy$), filter((e) => e instanceof ActivationStart || e instanceof ActivationEnd), debounceTime(200))
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
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.1", ngImport: i0, type: FullContentComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "19.1.1", type: FullContentComponent, isStandalone: true, selector: "full-content", inputs: { fullscreen: ["fullscreen", "fullscreen", booleanAttribute], hideTitle: ["hideTitle", "hideTitle", booleanAttribute], padding: ["padding", "padding", numberAttribute] }, outputs: { fullscreenChange: "fullscreenChange" }, host: { properties: { "class.full-content": "true", "style.height.px": "_height" } }, exportAs: ["fullContent"], usesOnChanges: true, ngImport: i0, template: ` <ng-content /> `, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.1", ngImport: i0, type: FullContentComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'full-content',
                    exportAs: 'fullContent',
                    template: ` <ng-content /> `,
                    host: {
                        '[class.full-content]': 'true',
                        '[style.height.px]': '_height'
                    },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], propDecorators: { fullscreen: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], hideTitle: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], padding: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], fullscreenChange: [{
                type: Output
            }] } });

class FullContentToggleDirective {
    parent = inject(FullContentComponent);
    _click() {
        this.parent.toggle();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.1", ngImport: i0, type: FullContentToggleDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "19.1.1", type: FullContentToggleDirective, isStandalone: true, selector: "[full-toggle]", host: { listeners: { "click": "_click()" } }, exportAs: ["fullToggle"], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.1", ngImport: i0, type: FullContentToggleDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[full-toggle]',
                    exportAs: 'fullToggle',
                    host: {
                        '(click)': '_click()'
                    }
                }]
        }] });

const COMPONENTS = [FullContentComponent, FullContentToggleDirective];
class FullContentModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.1", ngImport: i0, type: FullContentModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "19.1.1", ngImport: i0, type: FullContentModule, imports: [CommonModule, FullContentComponent, FullContentToggleDirective], exports: [FullContentComponent, FullContentToggleDirective] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "19.1.1", ngImport: i0, type: FullContentModule, imports: [CommonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.1", ngImport: i0, type: FullContentModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, ...COMPONENTS],
                    exports: COMPONENTS
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { FullContentComponent, FullContentModule, FullContentService, FullContentToggleDirective };
//# sourceMappingURL=full-content.mjs.map
