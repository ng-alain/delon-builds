import { CdkObserveContent, ObserversModule } from '@angular/cdk/observers';
import { DOCUMENT, NgTemplateOutlet, CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { inject, ElementRef, Injector, viewChild, signal, input, booleanAttribute, numberAttribute, effect, runInInjectionContext, afterNextRender, ViewEncapsulation, ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NzTooltipDirective, NzTooltipModule } from 'ng-zorro-antd/tooltip';

class EllipsisComponent {
    el = inject(ElementRef).nativeElement;
    injector = inject(Injector);
    dom = inject(DomSanitizer);
    doc = inject(DOCUMENT);
    isSupportLineClamp = this.doc.body.style['webkitLineClamp'] !== undefined;
    orgEl = viewChild.required('orgEl');
    shadowOrgEl = viewChild('shadowOrgEl', ...(ngDevMode ? [{ debugName: "shadowOrgEl" }] : []));
    shadowTextEl = viewChild('shadowTextEl', ...(ngDevMode ? [{ debugName: "shadowTextEl" }] : []));
    orgHtml = signal(null, ...(ngDevMode ? [{ debugName: "orgHtml" }] : []));
    type = signal('default', ...(ngDevMode ? [{ debugName: "type" }] : []));
    cls = signal({}, ...(ngDevMode ? [{ debugName: "cls" }] : []));
    text = signal('', ...(ngDevMode ? [{ debugName: "text" }] : []));
    targetCount = 0;
    tooltip = input(false, { ...(ngDevMode ? { debugName: "tooltip" } : {}), transform: booleanAttribute });
    length = input(null, { ...(ngDevMode ? { debugName: "length" } : {}), transform: (v) => (v == null ? null : numberAttribute(v)) });
    lines = input(null, { ...(ngDevMode ? { debugName: "lines" } : {}), transform: (v) => (v == null ? null : numberAttribute(v)) });
    fullWidthRecognition = input(false, { ...(ngDevMode ? { debugName: "fullWidthRecognition" } : {}), transform: booleanAttribute });
    tail = input('...', ...(ngDevMode ? [{ debugName: "tail" }] : []));
    get linsWord() {
        const { targetCount, text, tail } = this;
        return ((targetCount > 0 ? text().substring(0, targetCount) : '') +
            (targetCount > 0 && targetCount < text().length ? tail() : ''));
    }
    get win() {
        return this.doc.defaultView ?? window;
    }
    constructor() {
        effect(() => {
            this.refresh();
        });
    }
    getStrFullLength(str) {
        return str.split('').reduce((pre, cur) => {
            const charCode = cur.charCodeAt(0);
            if (charCode >= 0 && charCode <= 128) {
                return pre + 1;
            }
            return pre + 2;
        }, 0);
    }
    cutStrByFullLength(str, maxLength) {
        let showLength = 0;
        return str.split('').reduce((pre, cur) => {
            const charCode = cur.charCodeAt(0);
            if (charCode >= 0 && charCode <= 128) {
                showLength += 1;
            }
            else {
                showLength += 2;
            }
            if (showLength <= maxLength) {
                return pre + cur;
            }
            return pre;
        }, '');
    }
    bisection(targetHeight, mid, begin, end, text, node) {
        const suffix = this.tail();
        node.innerHTML = text.substring(0, mid) + suffix;
        let sh = node.offsetHeight;
        if (sh <= targetHeight) {
            node.innerHTML = text.substring(0, mid + 1) + suffix;
            sh = node.offsetHeight;
            if (sh > targetHeight || mid === begin) {
                return mid;
            }
            begin = mid;
            mid = end - begin === 1 ? begin + 1 : Math.floor((end - begin) / 2) + begin;
            return this.bisection(targetHeight, mid, begin, end, text, node);
        }
        if (mid - 1 < 0) {
            return mid;
        }
        node.innerHTML = text.substring(0, mid - 1) + suffix;
        sh = node.offsetHeight;
        if (sh <= targetHeight) {
            return mid - 1;
        }
        end = mid;
        mid = Math.floor((end - begin) / 2) + begin;
        return this.bisection(targetHeight, mid, begin, end, text, node);
    }
    genType() {
        const lines = this.lines();
        const length = this.length();
        const isSupportLineClamp = this.isSupportLineClamp;
        this.cls.set({
            ellipsis: true,
            ellipsis__lines: lines && !isSupportLineClamp,
            'ellipsis__line-clamp': lines && isSupportLineClamp
        });
        if (!lines && !length) {
            this.type.set('default');
        }
        else if (!lines) {
            this.type.set('length');
        }
        else if (isSupportLineClamp) {
            this.type.set('line-clamp');
        }
        else {
            this.type.set('line');
        }
    }
    gen() {
        const lines = this.lines();
        const length = this.length();
        const type = this.type();
        const { fullWidthRecognition, tail, orgEl } = this;
        if (type === 'length') {
            const lengthText = orgEl().nativeElement.textContent;
            const textLength = fullWidthRecognition() ? this.getStrFullLength(lengthText) : lengthText.length;
            if (length == null || textLength <= length || length < 0) {
                this.text.set(lengthText);
            }
            else {
                let displayText;
                if (length - tail().length <= 0) {
                    displayText = '';
                }
                else {
                    displayText = fullWidthRecognition()
                        ? this.cutStrByFullLength(lengthText, length)
                        : lengthText.slice(0, length);
                }
                this.text.set(displayText + tail());
            }
        }
        else if (type === 'line') {
            const { shadowOrgEl, shadowTextEl } = this;
            const orgNode = shadowOrgEl().nativeElement;
            const lineText = orgNode.innerText ?? orgNode.textContent;
            const lineHeight = parseInt(this.win.getComputedStyle(this.getEl('.ellipsis')).lineHeight, 10);
            const targetHeight = lines * lineHeight;
            const handleEl = this.getEl('.ellipsis__handle');
            handleEl.style.height = `${targetHeight}px`;
            if (orgNode.offsetHeight <= targetHeight) {
                this.text.set(lineText);
                this.targetCount = lineText.length;
            }
            else {
                // bisection
                const len = lineText.length;
                const mid = Math.ceil(len / 2);
                const firstChild = shadowTextEl().nativeElement.firstChild;
                const count = this.bisection(targetHeight, mid, 0, len, lineText, firstChild);
                this.text.set(lineText);
                this.targetCount = count;
            }
        }
    }
    getEl(cls) {
        return this.el.querySelector(cls);
    }
    refresh() {
        this.genType();
        const { dom, orgEl } = this;
        const html = orgEl().nativeElement.innerHTML;
        this.orgHtml.set(dom.bypassSecurityTrustHtml(html));
        const type = this.type();
        runInInjectionContext(this.injector, () => {
            afterNextRender(() => {
                this.gen();
                if (type !== 'line') {
                    const el = this.getEl('.ellipsis');
                    if (el) {
                        el.innerHTML = html;
                    }
                }
            });
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.2", ngImport: i0, type: EllipsisComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.1.2", type: EllipsisComponent, isStandalone: true, selector: "ellipsis", inputs: { tooltip: { classPropertyName: "tooltip", publicName: "tooltip", isSignal: true, isRequired: false, transformFunction: null }, length: { classPropertyName: "length", publicName: "length", isSignal: true, isRequired: false, transformFunction: null }, lines: { classPropertyName: "lines", publicName: "lines", isSignal: true, isRequired: false, transformFunction: null }, fullWidthRecognition: { classPropertyName: "fullWidthRecognition", publicName: "fullWidthRecognition", isSignal: true, isRequired: false, transformFunction: null }, tail: { classPropertyName: "tail", publicName: "tail", isSignal: true, isRequired: false, transformFunction: null } }, viewQueries: [{ propertyName: "orgEl", first: true, predicate: ["orgEl"], descendants: true, isSignal: true }, { propertyName: "shadowOrgEl", first: true, predicate: ["shadowOrgEl"], descendants: true, isSignal: true }, { propertyName: "shadowTextEl", first: true, predicate: ["shadowTextEl"], descendants: true, isSignal: true }], exportAs: ["ellipsis"], ngImport: i0, template: `
    <div (cdkObserveContent)="refresh()" #orgEl style="display: none"><ng-content /></div>
    <ng-template #tooltipTpl let-con>
      @if (tooltip()) {
        <span
          nz-tooltip
          [nzTooltipTitle]="titleTpl"
          [nzTooltipOverlayStyle]="{ 'overflow-wrap': 'break-word', 'word-wrap': 'break-word' }"
        >
          <ng-container *ngTemplateOutlet="con" />
          <ng-template #titleTpl><div [innerHTML]="orgHtml()"></div></ng-template>
        </span>
      } @else {
        <ng-container *ngTemplateOutlet="con" />
      }
    </ng-template>
    @let c = cls();
    @switch (type()) {
      @case ('default') {
        <span [class]="c"></span>
      }
      @case ('length') {
        <ng-template [ngTemplateOutlet]="tooltipTpl" [ngTemplateOutletContext]="{ $implicit: lengthTpl }" />
        <ng-template #lengthTpl>{{ text() }}</ng-template>
      }
      @case ('line-clamp') {
        <ng-template [ngTemplateOutlet]="tooltipTpl" [ngTemplateOutletContext]="{ $implicit: lineClampTpl }" />
        <ng-template #lineClampTpl>
          <div [class]="c" [style]="{ '-webkit-line-clamp': lines(), '-webkit-box-orient': 'vertical' }"></div>
        </ng-template>
      }
      @case ('line') {
        <div [class]="c">
          <div class="ellipsis__handle">
            <ng-template [ngTemplateOutlet]="tooltipTpl" [ngTemplateOutletContext]="{ $implicit: lineTpl }" />
            <ng-template #lineTpl>{{ linsWord }}</ng-template>
            <div class="ellipsis__shadow" #shadowOrgEl [innerHTML]="orgHtml()"></div>
            <div class="ellipsis__shadow" #shadowTextEl>
              <span>{{ text() }}</span>
            </div>
          </div>
        </div>
      }
    }
  `, isInline: true, dependencies: [{ kind: "directive", type: CdkObserveContent, selector: "[cdkObserveContent]", inputs: ["cdkObserveContentDisabled", "debounce"], outputs: ["cdkObserveContent"], exportAs: ["cdkObserveContent"] }, { kind: "directive", type: NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "cdkConnectedOverlayPush", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.2", ngImport: i0, type: EllipsisComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ellipsis',
                    exportAs: 'ellipsis',
                    template: `
    <div (cdkObserveContent)="refresh()" #orgEl style="display: none"><ng-content /></div>
    <ng-template #tooltipTpl let-con>
      @if (tooltip()) {
        <span
          nz-tooltip
          [nzTooltipTitle]="titleTpl"
          [nzTooltipOverlayStyle]="{ 'overflow-wrap': 'break-word', 'word-wrap': 'break-word' }"
        >
          <ng-container *ngTemplateOutlet="con" />
          <ng-template #titleTpl><div [innerHTML]="orgHtml()"></div></ng-template>
        </span>
      } @else {
        <ng-container *ngTemplateOutlet="con" />
      }
    </ng-template>
    @let c = cls();
    @switch (type()) {
      @case ('default') {
        <span [class]="c"></span>
      }
      @case ('length') {
        <ng-template [ngTemplateOutlet]="tooltipTpl" [ngTemplateOutletContext]="{ $implicit: lengthTpl }" />
        <ng-template #lengthTpl>{{ text() }}</ng-template>
      }
      @case ('line-clamp') {
        <ng-template [ngTemplateOutlet]="tooltipTpl" [ngTemplateOutletContext]="{ $implicit: lineClampTpl }" />
        <ng-template #lineClampTpl>
          <div [class]="c" [style]="{ '-webkit-line-clamp': lines(), '-webkit-box-orient': 'vertical' }"></div>
        </ng-template>
      }
      @case ('line') {
        <div [class]="c">
          <div class="ellipsis__handle">
            <ng-template [ngTemplateOutlet]="tooltipTpl" [ngTemplateOutletContext]="{ $implicit: lineTpl }" />
            <ng-template #lineTpl>{{ linsWord }}</ng-template>
            <div class="ellipsis__shadow" #shadowOrgEl [innerHTML]="orgHtml()"></div>
            <div class="ellipsis__shadow" #shadowTextEl>
              <span>{{ text() }}</span>
            </div>
          </div>
        </div>
      }
    }
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    imports: [CdkObserveContent, NzTooltipDirective, NgTemplateOutlet]
                }]
        }], ctorParameters: () => [], propDecorators: { orgEl: [{ type: i0.ViewChild, args: ['orgEl', { isSignal: true }] }], shadowOrgEl: [{ type: i0.ViewChild, args: ['shadowOrgEl', { isSignal: true }] }], shadowTextEl: [{ type: i0.ViewChild, args: ['shadowTextEl', { isSignal: true }] }], tooltip: [{ type: i0.Input, args: [{ isSignal: true, alias: "tooltip", required: false }] }], length: [{ type: i0.Input, args: [{ isSignal: true, alias: "length", required: false }] }], lines: [{ type: i0.Input, args: [{ isSignal: true, alias: "lines", required: false }] }], fullWidthRecognition: [{ type: i0.Input, args: [{ isSignal: true, alias: "fullWidthRecognition", required: false }] }], tail: [{ type: i0.Input, args: [{ isSignal: true, alias: "tail", required: false }] }] } });

const COMPONENTS = [EllipsisComponent];
class EllipsisModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.2", ngImport: i0, type: EllipsisModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "21.1.2", ngImport: i0, type: EllipsisModule, imports: [CommonModule, ObserversModule, NzTooltipModule, EllipsisComponent], exports: [EllipsisComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "21.1.2", ngImport: i0, type: EllipsisModule, imports: [CommonModule, ObserversModule, NzTooltipModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.2", ngImport: i0, type: EllipsisModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, ObserversModule, NzTooltipModule, ...COMPONENTS],
                    exports: COMPONENTS
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { EllipsisComponent, EllipsisModule };
//# sourceMappingURL=ellipsis.mjs.map
