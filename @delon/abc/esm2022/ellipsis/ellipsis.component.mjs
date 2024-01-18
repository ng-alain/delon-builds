import { __decorate } from "tslib";
import { ObserversModule } from '@angular/cdk/observers';
import { DOCUMENT, NgClass, NgStyle, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { take } from 'rxjs';
import { InputBoolean, InputNumber } from '@delon/util/decorator';
import { NzTooltipDirective } from 'ng-zorro-antd/tooltip';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "@angular/cdk/observers";
export class EllipsisComponent {
    get linsWord() {
        const { targetCount, text, tail } = this;
        return ((targetCount > 0 ? text.substring(0, targetCount) : '') +
            (targetCount > 0 && targetCount < text.length ? tail : ''));
    }
    get win() {
        return this.doc.defaultView || window;
    }
    constructor(el, ngZone, dom, doc, cdr) {
        this.el = el;
        this.ngZone = ngZone;
        this.dom = dom;
        this.doc = doc;
        this.cdr = cdr;
        this.isSupportLineClamp = this.doc.body.style['webkitLineClamp'] !== undefined;
        this.inited = false;
        this.type = 'default';
        this.cls = {};
        this.text = '';
        this.targetCount = 0;
        this.tooltip = false;
        this.fullWidthRecognition = false;
        this.tail = '...';
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
        const suffix = this.tail;
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
        const { lines, length, isSupportLineClamp } = this;
        this.cls = {
            ellipsis: true,
            ellipsis__lines: lines && !isSupportLineClamp,
            'ellipsis__line-clamp': lines && isSupportLineClamp
        };
        if (!lines && !length) {
            this.type = 'default';
        }
        else if (!lines) {
            this.type = 'length';
        }
        else if (isSupportLineClamp) {
            this.type = 'line-clamp';
        }
        else {
            this.type = 'line';
        }
    }
    gen() {
        const { type, lines, length, fullWidthRecognition, tail, orgEl, cdr, ngZone } = this;
        if (type === 'length') {
            const el = orgEl.nativeElement;
            if (el.children.length > 0) {
                throw new Error('Ellipsis content must be string.');
            }
            const lengthText = el.textContent;
            const textLength = fullWidthRecognition ? this.getStrFullLength(lengthText) : lengthText.length;
            if (textLength <= length || length < 0) {
                this.text = lengthText;
            }
            else {
                let displayText;
                if (length - tail.length <= 0) {
                    displayText = '';
                }
                else {
                    displayText = fullWidthRecognition
                        ? this.cutStrByFullLength(lengthText, length)
                        : lengthText.slice(0, length);
                }
                this.text = displayText + tail;
            }
            ngZone.run(() => cdr.detectChanges());
        }
        else if (type === 'line') {
            const { shadowOrgEl, shadowTextEl } = this;
            const orgNode = shadowOrgEl.nativeElement;
            const lineText = orgNode.innerText || orgNode.textContent;
            const lineHeight = parseInt(this.win.getComputedStyle(this.getEl('.ellipsis')).lineHeight, 10);
            const targetHeight = lines * lineHeight;
            this.getEl('.ellipsis__handle').style.height = `${targetHeight}px`;
            if (orgNode.offsetHeight <= targetHeight) {
                this.text = lineText;
                this.targetCount = lineText.length;
            }
            else {
                // bisection
                const len = lineText.length;
                const mid = Math.ceil(len / 2);
                const count = this.bisection(targetHeight, mid, 0, len, lineText, shadowTextEl.nativeElement.firstChild);
                this.text = lineText;
                this.targetCount = count;
            }
            ngZone.run(() => cdr.detectChanges());
        }
    }
    getEl(cls) {
        return this.el.nativeElement.querySelector(cls);
    }
    executeOnStable(fn) {
        if (this.ngZone.isStable) {
            fn();
        }
        else {
            this.ngZone.onStable.asObservable().pipe(take(1)).subscribe(fn);
        }
    }
    refresh() {
        this.genType();
        const { type, dom, orgEl, cdr } = this;
        const html = orgEl.nativeElement.innerHTML;
        this.orgHtml = dom.bypassSecurityTrustHtml(html);
        cdr.detectChanges();
        this.executeOnStable(() => {
            this.gen();
            if (type !== 'line') {
                const el = this.getEl('.ellipsis');
                if (el) {
                    el.innerHTML = html;
                }
            }
        });
    }
    ngAfterViewInit() {
        this.inited = true;
        this.refresh();
    }
    ngOnChanges() {
        if (this.inited) {
            this.refresh();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: EllipsisComponent, deps: [{ token: i0.ElementRef }, { token: i0.NgZone }, { token: i1.DomSanitizer }, { token: DOCUMENT }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.1.0", type: EllipsisComponent, isStandalone: true, selector: "ellipsis", inputs: { tooltip: "tooltip", length: "length", lines: "lines", fullWidthRecognition: "fullWidthRecognition", tail: "tail" }, viewQueries: [{ propertyName: "orgEl", first: true, predicate: ["orgEl"], descendants: true }, { propertyName: "shadowOrgEl", first: true, predicate: ["shadowOrgEl"], descendants: true }, { propertyName: "shadowTextEl", first: true, predicate: ["shadowTextEl"], descendants: true }], exportAs: ["ellipsis"], usesOnChanges: true, ngImport: i0, template: "<div (cdkObserveContent)=\"refresh()\" #orgEl style=\"display: none\"><ng-content /></div>\n<ng-template #tooltipTpl let-con>\n  @if (tooltip) {\n    <span\n      nz-tooltip\n      [nzTooltipTitle]=\"titleTpl\"\n      [nzTooltipOverlayStyle]=\"{ 'overflow-wrap': 'break-word', 'word-wrap': 'break-word' }\"\n    >\n      <ng-container *ngTemplateOutlet=\"con\" />\n      <ng-template #titleTpl><div [innerHTML]=\"orgHtml\"></div></ng-template>\n    </span>\n  } @else {\n    <ng-container *ngTemplateOutlet=\"con\" />\n  }\n</ng-template>\n@switch (type) {\n  @case ('default') {\n    <span [ngClass]=\"cls\"></span>\n  }\n  @case ('length') {\n    <ng-template [ngTemplateOutlet]=\"tooltipTpl\" [ngTemplateOutletContext]=\"{ $implicit: lengthTpl }\" />\n    <ng-template #lengthTpl>{{ text }}</ng-template>\n  }\n  @case ('line-clamp') {\n    <ng-template [ngTemplateOutlet]=\"tooltipTpl\" [ngTemplateOutletContext]=\"{ $implicit: lineClampTpl }\" />\n    <ng-template #lineClampTpl>\n      <div [ngClass]=\"cls\" [ngStyle]=\"{ '-webkit-line-clamp': lines, '-webkit-box-orient': 'vertical' }\"></div>\n    </ng-template>\n  }\n  @case ('line') {\n    <div [ngClass]=\"cls\">\n      <div class=\"ellipsis__handle\">\n        <ng-template [ngTemplateOutlet]=\"tooltipTpl\" [ngTemplateOutletContext]=\"{ $implicit: lineTpl }\" />\n        <ng-template #lineTpl>{{ linsWord }}</ng-template>\n        <div class=\"ellipsis__shadow\" #shadowOrgEl [innerHTML]=\"orgHtml\"></div>\n        <div class=\"ellipsis__shadow\" #shadowTextEl>\n          <span>{{ text }}</span>\n        </div>\n      </div>\n    </div>\n  }\n}\n", dependencies: [{ kind: "ngmodule", type: ObserversModule }, { kind: "directive", type: i2.CdkObserveContent, selector: "[cdkObserveContent]", inputs: ["cdkObserveContentDisabled", "debounce"], outputs: ["cdkObserveContent"], exportAs: ["cdkObserveContent"] }, { kind: "directive", type: NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "cdkConnectedOverlayPush", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
__decorate([
    InputBoolean()
], EllipsisComponent.prototype, "tooltip", void 0);
__decorate([
    InputNumber(null)
], EllipsisComponent.prototype, "length", void 0);
__decorate([
    InputNumber(null)
], EllipsisComponent.prototype, "lines", void 0);
__decorate([
    InputBoolean()
], EllipsisComponent.prototype, "fullWidthRecognition", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: EllipsisComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ellipsis', exportAs: 'ellipsis', preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, standalone: true, imports: [ObserversModule, NzTooltipDirective, NgTemplateOutlet, NgClass, NgStyle], template: "<div (cdkObserveContent)=\"refresh()\" #orgEl style=\"display: none\"><ng-content /></div>\n<ng-template #tooltipTpl let-con>\n  @if (tooltip) {\n    <span\n      nz-tooltip\n      [nzTooltipTitle]=\"titleTpl\"\n      [nzTooltipOverlayStyle]=\"{ 'overflow-wrap': 'break-word', 'word-wrap': 'break-word' }\"\n    >\n      <ng-container *ngTemplateOutlet=\"con\" />\n      <ng-template #titleTpl><div [innerHTML]=\"orgHtml\"></div></ng-template>\n    </span>\n  } @else {\n    <ng-container *ngTemplateOutlet=\"con\" />\n  }\n</ng-template>\n@switch (type) {\n  @case ('default') {\n    <span [ngClass]=\"cls\"></span>\n  }\n  @case ('length') {\n    <ng-template [ngTemplateOutlet]=\"tooltipTpl\" [ngTemplateOutletContext]=\"{ $implicit: lengthTpl }\" />\n    <ng-template #lengthTpl>{{ text }}</ng-template>\n  }\n  @case ('line-clamp') {\n    <ng-template [ngTemplateOutlet]=\"tooltipTpl\" [ngTemplateOutletContext]=\"{ $implicit: lineClampTpl }\" />\n    <ng-template #lineClampTpl>\n      <div [ngClass]=\"cls\" [ngStyle]=\"{ '-webkit-line-clamp': lines, '-webkit-box-orient': 'vertical' }\"></div>\n    </ng-template>\n  }\n  @case ('line') {\n    <div [ngClass]=\"cls\">\n      <div class=\"ellipsis__handle\">\n        <ng-template [ngTemplateOutlet]=\"tooltipTpl\" [ngTemplateOutletContext]=\"{ $implicit: lineTpl }\" />\n        <ng-template #lineTpl>{{ linsWord }}</ng-template>\n        <div class=\"ellipsis__shadow\" #shadowOrgEl [innerHTML]=\"orgHtml\"></div>\n        <div class=\"ellipsis__shadow\" #shadowTextEl>\n          <span>{{ text }}</span>\n        </div>\n      </div>\n    </div>\n  }\n}\n" }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.NgZone }, { type: i1.DomSanitizer }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: i0.ChangeDetectorRef }], propDecorators: { orgEl: [{
                type: ViewChild,
                args: ['orgEl', { static: false }]
            }], shadowOrgEl: [{
                type: ViewChild,
                args: ['shadowOrgEl', { static: false }]
            }], shadowTextEl: [{
                type: ViewChild,
                args: ['shadowTextEl', { static: false }]
            }], tooltip: [{
                type: Input
            }], length: [{
                type: Input
            }], lines: [{
                type: Input
            }], fullWidthRecognition: [{
                type: Input
            }], tail: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxsaXBzaXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL2VsbGlwc2lzL2VsbGlwc2lzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9lbGxpcHNpcy9lbGxpcHNpcy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9FLE9BQU8sRUFFTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUVULE1BQU0sRUFDTixLQUFLLEVBR0wsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTVCLE9BQU8sRUFBZ0IsWUFBWSxFQUFFLFdBQVcsRUFBZSxNQUFNLHVCQUF1QixDQUFDO0FBRTdGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7O0FBYTNELE1BQU0sT0FBTyxpQkFBaUI7SUF1QjVCLElBQUksUUFBUTtRQUNWLE1BQU0sRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQztRQUN6QyxPQUFPLENBQ0wsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ3ZELENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FDM0Qs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QiwyZ0JDakM5QixpbERBMENBLDJDRFhZLGVBQWUsdU9BQUUsa0JBQWtCLHFjQUFFLGdCQUFnQixvSkFBRSxPQUFPLG9GQUFFLE9BQU87O0FBbUJ4RDtJQUFmLFlBQVksRUFBRTtrREFBaUI7QUFDYjtJQUFsQixXQUFXLENBQUMsSUFBSSxDQUFDO2lEQUFpQjtBQUNoQjtJQUFsQixXQUFXLENBQUMsSUFBSSxDQUFDO2dEQUFnQjtBQUNsQjtJQUFmLFlBQVksRUFBRTsrREFBOEI7MkZBcEIzQyxpQkFBaUI7a0JBWDdCLFNBQVM7K0JBQ0UsVUFBVSxZQUNWLFVBQVUsdUJBRUMsS0FBSyxtQkFDVCx1QkFBdUIsQ0FBQyxNQUFNLGlCQUNoQyxpQkFBaUIsQ0FBQyxJQUFJLGNBQ3pCLElBQUksV0FFUCxDQUFDLGVBQWUsRUFBRSxrQkFBa0IsRUFBRSxnQkFBZ0IsRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDOzswQkF5Qy9FLE1BQU07MkJBQUMsUUFBUTt5RUFoQzZCLEtBQUs7c0JBQW5ELFNBQVM7dUJBQUMsT0FBTyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtnQkFDZ0IsV0FBVztzQkFBL0QsU0FBUzt1QkFBQyxhQUFhLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO2dCQUNXLFlBQVk7c0JBQWpFLFNBQVM7dUJBQUMsY0FBYyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtnQkFRbkIsT0FBTztzQkFBL0IsS0FBSztnQkFDc0IsTUFBTTtzQkFBakMsS0FBSztnQkFDc0IsS0FBSztzQkFBaEMsS0FBSztnQkFDbUIsb0JBQW9CO3NCQUE1QyxLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmVyc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vYnNlcnZlcnMnO1xuaW1wb3J0IHsgRE9DVU1FTlQsIE5nQ2xhc3MsIE5nU3R5bGUsIE5nVGVtcGxhdGVPdXRsZXQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25DaGFuZ2VzLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIsIE51bWJlcklucHV0IH0gZnJvbSAnQGRlbG9uL3V0aWwvZGVjb3JhdG9yJztcbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IE56VG9vbHRpcERpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvdG9vbHRpcCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2VsbGlwc2lzJyxcbiAgZXhwb3J0QXM6ICdlbGxpcHNpcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9lbGxpcHNpcy5jb21wb25lbnQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgLy8gVE9ETzogY2FuJ3QgdXNlIENka09ic2VydmVDb250ZW50XG4gIGltcG9ydHM6IFtPYnNlcnZlcnNNb2R1bGUsIE56VG9vbHRpcERpcmVjdGl2ZSwgTmdUZW1wbGF0ZU91dGxldCwgTmdDbGFzcywgTmdTdHlsZV1cbn0pXG5leHBvcnQgY2xhc3MgRWxsaXBzaXNDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfdG9vbHRpcDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbGVuZ3RoOiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2xpbmVzOiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Z1bGxXaWR0aFJlY29nbml0aW9uOiBCb29sZWFuSW5wdXQ7XG5cbiAgcHJpdmF0ZSBpc1N1cHBvcnRMaW5lQ2xhbXAgPSB0aGlzLmRvYy5ib2R5LnN0eWxlWyd3ZWJraXRMaW5lQ2xhbXAnXSAhPT0gdW5kZWZpbmVkO1xuICBAVmlld0NoaWxkKCdvcmdFbCcsIHsgc3RhdGljOiBmYWxzZSB9KSBwcml2YXRlIG9yZ0VsITogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnc2hhZG93T3JnRWwnLCB7IHN0YXRpYzogZmFsc2UgfSkgcHJpdmF0ZSBzaGFkb3dPcmdFbCE6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3NoYWRvd1RleHRFbCcsIHsgc3RhdGljOiBmYWxzZSB9KSBwcml2YXRlIHNoYWRvd1RleHRFbCE6IEVsZW1lbnRSZWY7XG4gIHByaXZhdGUgaW5pdGVkID0gZmFsc2U7XG4gIG9yZ0h0bWwhOiBTYWZlSHRtbDtcbiAgdHlwZSA9ICdkZWZhdWx0JztcbiAgY2xzID0ge307XG4gIHRleHQgPSAnJztcbiAgdGFyZ2V0Q291bnQgPSAwO1xuXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSB0b29sdGlwID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcihudWxsKSBsZW5ndGg/OiBudW1iZXI7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcihudWxsKSBsaW5lcz86IG51bWJlcjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGZ1bGxXaWR0aFJlY29nbml0aW9uID0gZmFsc2U7XG4gIEBJbnB1dCgpIHRhaWwgPSAnLi4uJztcblxuICBnZXQgbGluc1dvcmQoKTogc3RyaW5nIHtcbiAgICBjb25zdCB7IHRhcmdldENvdW50LCB0ZXh0LCB0YWlsIH0gPSB0aGlzO1xuICAgIHJldHVybiAoXG4gICAgICAodGFyZ2V0Q291bnQgPiAwID8gdGV4dC5zdWJzdHJpbmcoMCwgdGFyZ2V0Q291bnQpIDogJycpICtcbiAgICAgICh0YXJnZXRDb3VudCA+IDAgJiYgdGFyZ2V0Q291bnQgPCB0ZXh0Lmxlbmd0aCA/IHRhaWwgOiAnJylcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgd2luKCk6IE56U2FmZUFueSB7XG4gICAgcmV0dXJuIHRoaXMuZG9jLmRlZmF1bHRWaWV3IHx8IHdpbmRvdztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIGRvbTogRG9tU2FuaXRpemVyLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBOelNhZmVBbnksXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmXG4gICkge31cblxuICBwcml2YXRlIGdldFN0ckZ1bGxMZW5ndGgoc3RyOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIHJldHVybiBzdHIuc3BsaXQoJycpLnJlZHVjZSgocHJlLCBjdXIpID0+IHtcbiAgICAgIGNvbnN0IGNoYXJDb2RlID0gY3VyLmNoYXJDb2RlQXQoMCk7XG4gICAgICBpZiAoY2hhckNvZGUgPj0gMCAmJiBjaGFyQ29kZSA8PSAxMjgpIHtcbiAgICAgICAgcmV0dXJuIHByZSArIDE7XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJlICsgMjtcbiAgICB9LCAwKTtcbiAgfVxuXG4gIHByaXZhdGUgY3V0U3RyQnlGdWxsTGVuZ3RoKHN0cjogc3RyaW5nLCBtYXhMZW5ndGg6IG51bWJlcik6IHN0cmluZyB7XG4gICAgbGV0IHNob3dMZW5ndGggPSAwO1xuICAgIHJldHVybiBzdHIuc3BsaXQoJycpLnJlZHVjZSgocHJlLCBjdXIpID0+IHtcbiAgICAgIGNvbnN0IGNoYXJDb2RlID0gY3VyLmNoYXJDb2RlQXQoMCk7XG4gICAgICBpZiAoY2hhckNvZGUgPj0gMCAmJiBjaGFyQ29kZSA8PSAxMjgpIHtcbiAgICAgICAgc2hvd0xlbmd0aCArPSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2hvd0xlbmd0aCArPSAyO1xuICAgICAgfVxuICAgICAgaWYgKHNob3dMZW5ndGggPD0gbWF4TGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBwcmUgKyBjdXI7XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJlO1xuICAgIH0sICcnKTtcbiAgfVxuXG4gIHByaXZhdGUgYmlzZWN0aW9uKFxuICAgIHRhcmdldEhlaWdodDogbnVtYmVyLFxuICAgIG1pZDogbnVtYmVyLFxuICAgIGJlZ2luOiBudW1iZXIsXG4gICAgZW5kOiBudW1iZXIsXG4gICAgdGV4dDogc3RyaW5nLFxuICAgIG5vZGU6IEhUTUxFbGVtZW50XG4gICk6IG51bWJlciB7XG4gICAgY29uc3Qgc3VmZml4ID0gdGhpcy50YWlsO1xuICAgIG5vZGUuaW5uZXJIVE1MID0gdGV4dC5zdWJzdHJpbmcoMCwgbWlkKSArIHN1ZmZpeDtcbiAgICBsZXQgc2ggPSBub2RlLm9mZnNldEhlaWdodDtcblxuICAgIGlmIChzaCA8PSB0YXJnZXRIZWlnaHQpIHtcbiAgICAgIG5vZGUuaW5uZXJIVE1MID0gdGV4dC5zdWJzdHJpbmcoMCwgbWlkICsgMSkgKyBzdWZmaXg7XG4gICAgICBzaCA9IG5vZGUub2Zmc2V0SGVpZ2h0O1xuICAgICAgaWYgKHNoID4gdGFyZ2V0SGVpZ2h0IHx8IG1pZCA9PT0gYmVnaW4pIHtcbiAgICAgICAgcmV0dXJuIG1pZDtcbiAgICAgIH1cbiAgICAgIGJlZ2luID0gbWlkO1xuICAgICAgbWlkID0gZW5kIC0gYmVnaW4gPT09IDEgPyBiZWdpbiArIDEgOiBNYXRoLmZsb29yKChlbmQgLSBiZWdpbikgLyAyKSArIGJlZ2luO1xuICAgICAgcmV0dXJuIHRoaXMuYmlzZWN0aW9uKHRhcmdldEhlaWdodCwgbWlkLCBiZWdpbiwgZW5kLCB0ZXh0LCBub2RlKTtcbiAgICB9XG4gICAgaWYgKG1pZCAtIDEgPCAwKSB7XG4gICAgICByZXR1cm4gbWlkO1xuICAgIH1cbiAgICBub2RlLmlubmVySFRNTCA9IHRleHQuc3Vic3RyaW5nKDAsIG1pZCAtIDEpICsgc3VmZml4O1xuICAgIHNoID0gbm9kZS5vZmZzZXRIZWlnaHQ7XG4gICAgaWYgKHNoIDw9IHRhcmdldEhlaWdodCkge1xuICAgICAgcmV0dXJuIG1pZCAtIDE7XG4gICAgfVxuICAgIGVuZCA9IG1pZDtcbiAgICBtaWQgPSBNYXRoLmZsb29yKChlbmQgLSBiZWdpbikgLyAyKSArIGJlZ2luO1xuICAgIHJldHVybiB0aGlzLmJpc2VjdGlvbih0YXJnZXRIZWlnaHQsIG1pZCwgYmVnaW4sIGVuZCwgdGV4dCwgbm9kZSk7XG4gIH1cblxuICBwcml2YXRlIGdlblR5cGUoKTogdm9pZCB7XG4gICAgY29uc3QgeyBsaW5lcywgbGVuZ3RoLCBpc1N1cHBvcnRMaW5lQ2xhbXAgfSA9IHRoaXM7XG4gICAgdGhpcy5jbHMgPSB7XG4gICAgICBlbGxpcHNpczogdHJ1ZSxcbiAgICAgIGVsbGlwc2lzX19saW5lczogbGluZXMgJiYgIWlzU3VwcG9ydExpbmVDbGFtcCxcbiAgICAgICdlbGxpcHNpc19fbGluZS1jbGFtcCc6IGxpbmVzICYmIGlzU3VwcG9ydExpbmVDbGFtcFxuICAgIH07XG4gICAgaWYgKCFsaW5lcyAmJiAhbGVuZ3RoKSB7XG4gICAgICB0aGlzLnR5cGUgPSAnZGVmYXVsdCc7XG4gICAgfSBlbHNlIGlmICghbGluZXMpIHtcbiAgICAgIHRoaXMudHlwZSA9ICdsZW5ndGgnO1xuICAgIH0gZWxzZSBpZiAoaXNTdXBwb3J0TGluZUNsYW1wKSB7XG4gICAgICB0aGlzLnR5cGUgPSAnbGluZS1jbGFtcCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudHlwZSA9ICdsaW5lJztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdlbigpOiB2b2lkIHtcbiAgICBjb25zdCB7IHR5cGUsIGxpbmVzLCBsZW5ndGgsIGZ1bGxXaWR0aFJlY29nbml0aW9uLCB0YWlsLCBvcmdFbCwgY2RyLCBuZ1pvbmUgfSA9IHRoaXM7XG4gICAgaWYgKHR5cGUgPT09ICdsZW5ndGgnKSB7XG4gICAgICBjb25zdCBlbCA9IG9yZ0VsLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBpZiAoZWwuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0VsbGlwc2lzIGNvbnRlbnQgbXVzdCBiZSBzdHJpbmcuJyk7XG4gICAgICB9XG4gICAgICBjb25zdCBsZW5ndGhUZXh0ID0gZWwudGV4dENvbnRlbnQhO1xuICAgICAgY29uc3QgdGV4dExlbmd0aCA9IGZ1bGxXaWR0aFJlY29nbml0aW9uID8gdGhpcy5nZXRTdHJGdWxsTGVuZ3RoKGxlbmd0aFRleHQpIDogbGVuZ3RoVGV4dC5sZW5ndGg7XG4gICAgICBpZiAodGV4dExlbmd0aCA8PSBsZW5ndGghIHx8IGxlbmd0aCEgPCAwKSB7XG4gICAgICAgIHRoaXMudGV4dCA9IGxlbmd0aFRleHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgZGlzcGxheVRleHQ6IHN0cmluZztcbiAgICAgICAgaWYgKGxlbmd0aCEgLSB0YWlsLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgZGlzcGxheVRleHQgPSAnJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkaXNwbGF5VGV4dCA9IGZ1bGxXaWR0aFJlY29nbml0aW9uXG4gICAgICAgICAgICA/IHRoaXMuY3V0U3RyQnlGdWxsTGVuZ3RoKGxlbmd0aFRleHQsIGxlbmd0aCEpXG4gICAgICAgICAgICA6IGxlbmd0aFRleHQuc2xpY2UoMCwgbGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRleHQgPSBkaXNwbGF5VGV4dCArIHRhaWw7XG4gICAgICB9XG4gICAgICBuZ1pvbmUucnVuKCgpID0+IGNkci5kZXRlY3RDaGFuZ2VzKCkpO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2xpbmUnKSB7XG4gICAgICBjb25zdCB7IHNoYWRvd09yZ0VsLCBzaGFkb3dUZXh0RWwgfSA9IHRoaXM7XG4gICAgICBjb25zdCBvcmdOb2RlID0gc2hhZG93T3JnRWwubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGNvbnN0IGxpbmVUZXh0ID0gb3JnTm9kZS5pbm5lclRleHQgfHwgb3JnTm9kZS50ZXh0Q29udGVudCE7XG4gICAgICBjb25zdCBsaW5lSGVpZ2h0ID0gcGFyc2VJbnQodGhpcy53aW4uZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmdldEVsKCcuZWxsaXBzaXMnKSkubGluZUhlaWdodCEsIDEwKTtcbiAgICAgIGNvbnN0IHRhcmdldEhlaWdodCA9IGxpbmVzISAqIGxpbmVIZWlnaHQ7XG4gICAgICB0aGlzLmdldEVsKCcuZWxsaXBzaXNfX2hhbmRsZScpLnN0eWxlLmhlaWdodCA9IGAke3RhcmdldEhlaWdodH1weGA7XG5cbiAgICAgIGlmIChvcmdOb2RlLm9mZnNldEhlaWdodCA8PSB0YXJnZXRIZWlnaHQpIHtcbiAgICAgICAgdGhpcy50ZXh0ID0gbGluZVRleHQ7XG4gICAgICAgIHRoaXMudGFyZ2V0Q291bnQgPSBsaW5lVGV4dC5sZW5ndGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBiaXNlY3Rpb25cbiAgICAgICAgY29uc3QgbGVuID0gbGluZVRleHQubGVuZ3RoO1xuICAgICAgICBjb25zdCBtaWQgPSBNYXRoLmNlaWwobGVuIC8gMik7XG5cbiAgICAgICAgY29uc3QgY291bnQgPSB0aGlzLmJpc2VjdGlvbih0YXJnZXRIZWlnaHQsIG1pZCwgMCwgbGVuLCBsaW5lVGV4dCwgc2hhZG93VGV4dEVsLm5hdGl2ZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgICAgIHRoaXMudGV4dCA9IGxpbmVUZXh0O1xuICAgICAgICB0aGlzLnRhcmdldENvdW50ID0gY291bnQ7XG4gICAgICB9XG4gICAgICBuZ1pvbmUucnVuKCgpID0+IGNkci5kZXRlY3RDaGFuZ2VzKCkpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0RWwoY2xzOiBzdHJpbmcpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuZWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKGNscyk7XG4gIH1cblxuICBwcml2YXRlIGV4ZWN1dGVPblN0YWJsZShmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm5nWm9uZS5pc1N0YWJsZSkge1xuICAgICAgZm4oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5uZ1pvbmUub25TdGFibGUuYXNPYnNlcnZhYmxlKCkucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoZm4pO1xuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2goKTogdm9pZCB7XG4gICAgdGhpcy5nZW5UeXBlKCk7XG4gICAgY29uc3QgeyB0eXBlLCBkb20sIG9yZ0VsLCBjZHIgfSA9IHRoaXM7XG4gICAgY29uc3QgaHRtbCA9IG9yZ0VsLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MO1xuICAgIHRoaXMub3JnSHRtbCA9IGRvbS5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChodG1sKTtcbiAgICBjZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHRoaXMuZXhlY3V0ZU9uU3RhYmxlKCgpID0+IHtcbiAgICAgIHRoaXMuZ2VuKCk7XG4gICAgICBpZiAodHlwZSAhPT0gJ2xpbmUnKSB7XG4gICAgICAgIGNvbnN0IGVsID0gdGhpcy5nZXRFbCgnLmVsbGlwc2lzJyk7XG4gICAgICAgIGlmIChlbCkge1xuICAgICAgICAgIGVsLmlubmVySFRNTCA9IGh0bWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmluaXRlZCA9IHRydWU7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pbml0ZWQpIHtcbiAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgIH1cbiAgfVxufVxuIiwiPGRpdiAoY2RrT2JzZXJ2ZUNvbnRlbnQpPVwicmVmcmVzaCgpXCIgI29yZ0VsIHN0eWxlPVwiZGlzcGxheTogbm9uZVwiPjxuZy1jb250ZW50IC8+PC9kaXY+XG48bmctdGVtcGxhdGUgI3Rvb2x0aXBUcGwgbGV0LWNvbj5cbiAgQGlmICh0b29sdGlwKSB7XG4gICAgPHNwYW5cbiAgICAgIG56LXRvb2x0aXBcbiAgICAgIFtuelRvb2x0aXBUaXRsZV09XCJ0aXRsZVRwbFwiXG4gICAgICBbbnpUb29sdGlwT3ZlcmxheVN0eWxlXT1cInsgJ292ZXJmbG93LXdyYXAnOiAnYnJlYWstd29yZCcsICd3b3JkLXdyYXAnOiAnYnJlYWstd29yZCcgfVwiXG4gICAgPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImNvblwiIC8+XG4gICAgICA8bmctdGVtcGxhdGUgI3RpdGxlVHBsPjxkaXYgW2lubmVySFRNTF09XCJvcmdIdG1sXCI+PC9kaXY+PC9uZy10ZW1wbGF0ZT5cbiAgICA8L3NwYW4+XG4gIH0gQGVsc2Uge1xuICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjb25cIiAvPlxuICB9XG48L25nLXRlbXBsYXRlPlxuQHN3aXRjaCAodHlwZSkge1xuICBAY2FzZSAoJ2RlZmF1bHQnKSB7XG4gICAgPHNwYW4gW25nQ2xhc3NdPVwiY2xzXCI+PC9zcGFuPlxuICB9XG4gIEBjYXNlICgnbGVuZ3RoJykge1xuICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJ0b29sdGlwVHBsXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBsZW5ndGhUcGwgfVwiIC8+XG4gICAgPG5nLXRlbXBsYXRlICNsZW5ndGhUcGw+e3sgdGV4dCB9fTwvbmctdGVtcGxhdGU+XG4gIH1cbiAgQGNhc2UgKCdsaW5lLWNsYW1wJykge1xuICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJ0b29sdGlwVHBsXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBsaW5lQ2xhbXBUcGwgfVwiIC8+XG4gICAgPG5nLXRlbXBsYXRlICNsaW5lQ2xhbXBUcGw+XG4gICAgICA8ZGl2IFtuZ0NsYXNzXT1cImNsc1wiIFtuZ1N0eWxlXT1cInsgJy13ZWJraXQtbGluZS1jbGFtcCc6IGxpbmVzLCAnLXdlYmtpdC1ib3gtb3JpZW50JzogJ3ZlcnRpY2FsJyB9XCI+PC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgfVxuICBAY2FzZSAoJ2xpbmUnKSB7XG4gICAgPGRpdiBbbmdDbGFzc109XCJjbHNcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJlbGxpcHNpc19faGFuZGxlXCI+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJ0b29sdGlwVHBsXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBsaW5lVHBsIH1cIiAvPlxuICAgICAgICA8bmctdGVtcGxhdGUgI2xpbmVUcGw+e3sgbGluc1dvcmQgfX08L25nLXRlbXBsYXRlPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZWxsaXBzaXNfX3NoYWRvd1wiICNzaGFkb3dPcmdFbCBbaW5uZXJIVE1MXT1cIm9yZ0h0bWxcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImVsbGlwc2lzX19zaGFkb3dcIiAjc2hhZG93VGV4dEVsPlxuICAgICAgICAgIDxzcGFuPnt7IHRleHQgfX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIH1cbn1cbiJdfQ==