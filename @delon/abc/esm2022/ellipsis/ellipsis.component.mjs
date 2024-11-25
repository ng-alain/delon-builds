import { CdkObserveContent } from '@angular/cdk/observers';
import { DOCUMENT, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, NgZone, ViewChild, ViewEncapsulation, booleanAttribute, inject, numberAttribute } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { take } from 'rxjs';
import { NzTooltipDirective } from 'ng-zorro-antd/tooltip';
import * as i0 from "@angular/core";
export class EllipsisComponent {
    constructor() {
        this.el = inject(ElementRef).nativeElement;
        this.ngZone = inject(NgZone);
        this.dom = inject(DomSanitizer);
        this.doc = inject(DOCUMENT);
        this.cdr = inject(ChangeDetectorRef);
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
    get linsWord() {
        const { targetCount, text, tail } = this;
        return ((targetCount > 0 ? text.substring(0, targetCount) : '') +
            (targetCount > 0 && targetCount < text.length ? tail : ''));
    }
    get win() {
        return this.doc.defaultView || window;
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
            const handleEl = this.getEl('.ellipsis__handle');
            handleEl.style.height = `${targetHeight}px`;
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
        return this.el.querySelector(cls);
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.11", ngImport: i0, type: EllipsisComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.11", type: EllipsisComponent, isStandalone: true, selector: "ellipsis", inputs: { tooltip: ["tooltip", "tooltip", booleanAttribute], length: ["length", "length", (v) => (v == null ? null : numberAttribute(v))], lines: ["lines", "lines", (v) => (v == null ? null : numberAttribute(v))], fullWidthRecognition: ["fullWidthRecognition", "fullWidthRecognition", booleanAttribute], tail: "tail" }, viewQueries: [{ propertyName: "orgEl", first: true, predicate: ["orgEl"], descendants: true }, { propertyName: "shadowOrgEl", first: true, predicate: ["shadowOrgEl"], descendants: true }, { propertyName: "shadowTextEl", first: true, predicate: ["shadowTextEl"], descendants: true }], exportAs: ["ellipsis"], usesOnChanges: true, ngImport: i0, template: "<div (cdkObserveContent)=\"refresh()\" #orgEl style=\"display: none\"><ng-content /></div>\n<ng-template #tooltipTpl let-con>\n  @if (tooltip) {\n    <span\n      nz-tooltip\n      [nzTooltipTitle]=\"titleTpl\"\n      [nzTooltipOverlayStyle]=\"{ 'overflow-wrap': 'break-word', 'word-wrap': 'break-word' }\"\n    >\n      <ng-container *ngTemplateOutlet=\"con\" />\n      <ng-template #titleTpl><div [innerHTML]=\"orgHtml\"></div></ng-template>\n    </span>\n  } @else {\n    <ng-container *ngTemplateOutlet=\"con\" />\n  }\n</ng-template>\n@switch (type) {\n  @case ('default') {\n    <span [class]=\"cls\"></span>\n  }\n  @case ('length') {\n    <ng-template [ngTemplateOutlet]=\"tooltipTpl\" [ngTemplateOutletContext]=\"{ $implicit: lengthTpl }\" />\n    <ng-template #lengthTpl>{{ text }}</ng-template>\n  }\n  @case ('line-clamp') {\n    <ng-template [ngTemplateOutlet]=\"tooltipTpl\" [ngTemplateOutletContext]=\"{ $implicit: lineClampTpl }\" />\n    <ng-template #lineClampTpl>\n      <div [class]=\"cls\" [style]=\"{ '-webkit-line-clamp': lines, '-webkit-box-orient': 'vertical' }\"></div>\n    </ng-template>\n  }\n  @case ('line') {\n    <div [class]=\"cls\">\n      <div class=\"ellipsis__handle\">\n        <ng-template [ngTemplateOutlet]=\"tooltipTpl\" [ngTemplateOutletContext]=\"{ $implicit: lineTpl }\" />\n        <ng-template #lineTpl>{{ linsWord }}</ng-template>\n        <div class=\"ellipsis__shadow\" #shadowOrgEl [innerHTML]=\"orgHtml\"></div>\n        <div class=\"ellipsis__shadow\" #shadowTextEl>\n          <span>{{ text }}</span>\n        </div>\n      </div>\n    </div>\n  }\n}\n", dependencies: [{ kind: "directive", type: CdkObserveContent, selector: "[cdkObserveContent]", inputs: ["cdkObserveContentDisabled", "debounce"], outputs: ["cdkObserveContent"], exportAs: ["cdkObserveContent"] }, { kind: "directive", type: NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "cdkConnectedOverlayPush", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.11", ngImport: i0, type: EllipsisComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ellipsis', exportAs: 'ellipsis', preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, standalone: true, imports: [CdkObserveContent, NzTooltipDirective, NgTemplateOutlet], template: "<div (cdkObserveContent)=\"refresh()\" #orgEl style=\"display: none\"><ng-content /></div>\n<ng-template #tooltipTpl let-con>\n  @if (tooltip) {\n    <span\n      nz-tooltip\n      [nzTooltipTitle]=\"titleTpl\"\n      [nzTooltipOverlayStyle]=\"{ 'overflow-wrap': 'break-word', 'word-wrap': 'break-word' }\"\n    >\n      <ng-container *ngTemplateOutlet=\"con\" />\n      <ng-template #titleTpl><div [innerHTML]=\"orgHtml\"></div></ng-template>\n    </span>\n  } @else {\n    <ng-container *ngTemplateOutlet=\"con\" />\n  }\n</ng-template>\n@switch (type) {\n  @case ('default') {\n    <span [class]=\"cls\"></span>\n  }\n  @case ('length') {\n    <ng-template [ngTemplateOutlet]=\"tooltipTpl\" [ngTemplateOutletContext]=\"{ $implicit: lengthTpl }\" />\n    <ng-template #lengthTpl>{{ text }}</ng-template>\n  }\n  @case ('line-clamp') {\n    <ng-template [ngTemplateOutlet]=\"tooltipTpl\" [ngTemplateOutletContext]=\"{ $implicit: lineClampTpl }\" />\n    <ng-template #lineClampTpl>\n      <div [class]=\"cls\" [style]=\"{ '-webkit-line-clamp': lines, '-webkit-box-orient': 'vertical' }\"></div>\n    </ng-template>\n  }\n  @case ('line') {\n    <div [class]=\"cls\">\n      <div class=\"ellipsis__handle\">\n        <ng-template [ngTemplateOutlet]=\"tooltipTpl\" [ngTemplateOutletContext]=\"{ $implicit: lineTpl }\" />\n        <ng-template #lineTpl>{{ linsWord }}</ng-template>\n        <div class=\"ellipsis__shadow\" #shadowOrgEl [innerHTML]=\"orgHtml\"></div>\n        <div class=\"ellipsis__shadow\" #shadowTextEl>\n          <span>{{ text }}</span>\n        </div>\n      </div>\n    </div>\n  }\n}\n" }]
        }], propDecorators: { orgEl: [{
                type: ViewChild,
                args: ['orgEl', { static: false }]
            }], shadowOrgEl: [{
                type: ViewChild,
                args: ['shadowOrgEl', { static: false }]
            }], shadowTextEl: [{
                type: ViewChild,
                args: ['shadowTextEl', { static: false }]
            }], tooltip: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], length: [{
                type: Input,
                args: [{ transform: (v) => (v == null ? null : numberAttribute(v)) }]
            }], lines: [{
                type: Input,
                args: [{ transform: (v) => (v == null ? null : numberAttribute(v)) }]
            }], fullWidthRecognition: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], tail: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxsaXBzaXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL2VsbGlwc2lzL2VsbGlwc2lzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9lbGxpcHNpcy9lbGxpcHNpcy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDN0QsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUVOLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsZ0JBQWdCLEVBQ2hCLE1BQU0sRUFDTixlQUFlLEVBQ2hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQVksTUFBTSwyQkFBMkIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRzVCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQVkzRCxNQUFNLE9BQU8saUJBQWlCO0lBVjlCO1FBV21CLE9BQUUsR0FBZ0IsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLGFBQWEsQ0FBQztRQUNuRCxXQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hCLFFBQUcsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDM0IsUUFBRyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN2QixRQUFHLEdBQUcsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDekMsdUJBQWtCLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FB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QyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ0UsS0FBSztzQkFBbkYsS0FBSzt1QkFBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNyQyxvQkFBb0I7c0JBQTNELEtBQUs7dUJBQUMsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUU7Z0JBQzdCLElBQUk7c0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENka09ic2VydmVDb250ZW50IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL29ic2VydmVycyc7XG5pbXBvcnQgeyBET0NVTUVOVCwgTmdUZW1wbGF0ZU91dGxldCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25DaGFuZ2VzLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBib29sZWFuQXR0cmlidXRlLFxuICBpbmplY3QsXG4gIG51bWJlckF0dHJpYnV0ZVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgTnpUb29sdGlwRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC90b29sdGlwJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZWxsaXBzaXMnLFxuICBleHBvcnRBczogJ2VsbGlwc2lzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2VsbGlwc2lzLmNvbXBvbmVudC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbQ2RrT2JzZXJ2ZUNvbnRlbnQsIE56VG9vbHRpcERpcmVjdGl2ZSwgTmdUZW1wbGF0ZU91dGxldF1cbn0pXG5leHBvcnQgY2xhc3MgRWxsaXBzaXNDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xuICBwcml2YXRlIHJlYWRvbmx5IGVsOiBIVE1MRWxlbWVudCA9IGluamVjdChFbGVtZW50UmVmKS5uYXRpdmVFbGVtZW50O1xuICBwcml2YXRlIHJlYWRvbmx5IG5nWm9uZSA9IGluamVjdChOZ1pvbmUpO1xuICBwcml2YXRlIHJlYWRvbmx5IGRvbSA9IGluamVjdChEb21TYW5pdGl6ZXIpO1xuICBwcml2YXRlIHJlYWRvbmx5IGRvYyA9IGluamVjdChET0NVTUVOVCk7XG4gIHByaXZhdGUgcmVhZG9ubHkgY2RyID0gaW5qZWN0KENoYW5nZURldGVjdG9yUmVmKTtcbiAgcHJpdmF0ZSBpc1N1cHBvcnRMaW5lQ2xhbXAgPSB0aGlzLmRvYy5ib2R5LnN0eWxlWyd3ZWJraXRMaW5lQ2xhbXAnXSAhPT0gdW5kZWZpbmVkO1xuICBAVmlld0NoaWxkKCdvcmdFbCcsIHsgc3RhdGljOiBmYWxzZSB9KSBwcml2YXRlIG9yZ0VsITogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnc2hhZG93T3JnRWwnLCB7IHN0YXRpYzogZmFsc2UgfSkgcHJpdmF0ZSBzaGFkb3dPcmdFbCE6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3NoYWRvd1RleHRFbCcsIHsgc3RhdGljOiBmYWxzZSB9KSBwcml2YXRlIHNoYWRvd1RleHRFbCE6IEVsZW1lbnRSZWY7XG4gIHByaXZhdGUgaW5pdGVkID0gZmFsc2U7XG4gIG9yZ0h0bWwhOiBTYWZlSHRtbDtcbiAgdHlwZSA9ICdkZWZhdWx0JztcbiAgY2xzID0ge307XG4gIHRleHQgPSAnJztcbiAgdGFyZ2V0Q291bnQgPSAwO1xuXG4gIEBJbnB1dCh7IHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZSB9KSB0b29sdGlwID0gZmFsc2U7XG4gIEBJbnB1dCh7IHRyYW5zZm9ybTogKHY6IHVua25vd24pID0+ICh2ID09IG51bGwgPyBudWxsIDogbnVtYmVyQXR0cmlidXRlKHYpKSB9KSBsZW5ndGg/OiBudW1iZXI7XG4gIEBJbnB1dCh7IHRyYW5zZm9ybTogKHY6IHVua25vd24pID0+ICh2ID09IG51bGwgPyBudWxsIDogbnVtYmVyQXR0cmlidXRlKHYpKSB9KSBsaW5lcz86IG51bWJlcjtcbiAgQElucHV0KHsgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlIH0pIGZ1bGxXaWR0aFJlY29nbml0aW9uID0gZmFsc2U7XG4gIEBJbnB1dCgpIHRhaWwgPSAnLi4uJztcblxuICBnZXQgbGluc1dvcmQoKTogc3RyaW5nIHtcbiAgICBjb25zdCB7IHRhcmdldENvdW50LCB0ZXh0LCB0YWlsIH0gPSB0aGlzO1xuICAgIHJldHVybiAoXG4gICAgICAodGFyZ2V0Q291bnQgPiAwID8gdGV4dC5zdWJzdHJpbmcoMCwgdGFyZ2V0Q291bnQpIDogJycpICtcbiAgICAgICh0YXJnZXRDb3VudCA+IDAgJiYgdGFyZ2V0Q291bnQgPCB0ZXh0Lmxlbmd0aCA/IHRhaWwgOiAnJylcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgd2luKCk6IE56U2FmZUFueSB7XG4gICAgcmV0dXJuIHRoaXMuZG9jLmRlZmF1bHRWaWV3IHx8IHdpbmRvdztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U3RyRnVsbExlbmd0aChzdHI6IHN0cmluZyk6IG51bWJlciB7XG4gICAgcmV0dXJuIHN0ci5zcGxpdCgnJykucmVkdWNlKChwcmUsIGN1cikgPT4ge1xuICAgICAgY29uc3QgY2hhckNvZGUgPSBjdXIuY2hhckNvZGVBdCgwKTtcbiAgICAgIGlmIChjaGFyQ29kZSA+PSAwICYmIGNoYXJDb2RlIDw9IDEyOCkge1xuICAgICAgICByZXR1cm4gcHJlICsgMTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwcmUgKyAyO1xuICAgIH0sIDApO1xuICB9XG5cbiAgcHJpdmF0ZSBjdXRTdHJCeUZ1bGxMZW5ndGgoc3RyOiBzdHJpbmcsIG1heExlbmd0aDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBsZXQgc2hvd0xlbmd0aCA9IDA7XG4gICAgcmV0dXJuIHN0ci5zcGxpdCgnJykucmVkdWNlKChwcmUsIGN1cikgPT4ge1xuICAgICAgY29uc3QgY2hhckNvZGUgPSBjdXIuY2hhckNvZGVBdCgwKTtcbiAgICAgIGlmIChjaGFyQ29kZSA+PSAwICYmIGNoYXJDb2RlIDw9IDEyOCkge1xuICAgICAgICBzaG93TGVuZ3RoICs9IDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaG93TGVuZ3RoICs9IDI7XG4gICAgICB9XG4gICAgICBpZiAoc2hvd0xlbmd0aCA8PSBtYXhMZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHByZSArIGN1cjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwcmU7XG4gICAgfSwgJycpO1xuICB9XG5cbiAgcHJpdmF0ZSBiaXNlY3Rpb24oXG4gICAgdGFyZ2V0SGVpZ2h0OiBudW1iZXIsXG4gICAgbWlkOiBudW1iZXIsXG4gICAgYmVnaW46IG51bWJlcixcbiAgICBlbmQ6IG51bWJlcixcbiAgICB0ZXh0OiBzdHJpbmcsXG4gICAgbm9kZTogSFRNTEVsZW1lbnRcbiAgKTogbnVtYmVyIHtcbiAgICBjb25zdCBzdWZmaXggPSB0aGlzLnRhaWw7XG4gICAgbm9kZS5pbm5lckhUTUwgPSB0ZXh0LnN1YnN0cmluZygwLCBtaWQpICsgc3VmZml4O1xuICAgIGxldCBzaCA9IG5vZGUub2Zmc2V0SGVpZ2h0O1xuXG4gICAgaWYgKHNoIDw9IHRhcmdldEhlaWdodCkge1xuICAgICAgbm9kZS5pbm5lckhUTUwgPSB0ZXh0LnN1YnN0cmluZygwLCBtaWQgKyAxKSArIHN1ZmZpeDtcbiAgICAgIHNoID0gbm9kZS5vZmZzZXRIZWlnaHQ7XG4gICAgICBpZiAoc2ggPiB0YXJnZXRIZWlnaHQgfHwgbWlkID09PSBiZWdpbikge1xuICAgICAgICByZXR1cm4gbWlkO1xuICAgICAgfVxuICAgICAgYmVnaW4gPSBtaWQ7XG4gICAgICBtaWQgPSBlbmQgLSBiZWdpbiA9PT0gMSA/IGJlZ2luICsgMSA6IE1hdGguZmxvb3IoKGVuZCAtIGJlZ2luKSAvIDIpICsgYmVnaW47XG4gICAgICByZXR1cm4gdGhpcy5iaXNlY3Rpb24odGFyZ2V0SGVpZ2h0LCBtaWQsIGJlZ2luLCBlbmQsIHRleHQsIG5vZGUpO1xuICAgIH1cbiAgICBpZiAobWlkIC0gMSA8IDApIHtcbiAgICAgIHJldHVybiBtaWQ7XG4gICAgfVxuICAgIG5vZGUuaW5uZXJIVE1MID0gdGV4dC5zdWJzdHJpbmcoMCwgbWlkIC0gMSkgKyBzdWZmaXg7XG4gICAgc2ggPSBub2RlLm9mZnNldEhlaWdodDtcbiAgICBpZiAoc2ggPD0gdGFyZ2V0SGVpZ2h0KSB7XG4gICAgICByZXR1cm4gbWlkIC0gMTtcbiAgICB9XG4gICAgZW5kID0gbWlkO1xuICAgIG1pZCA9IE1hdGguZmxvb3IoKGVuZCAtIGJlZ2luKSAvIDIpICsgYmVnaW47XG4gICAgcmV0dXJuIHRoaXMuYmlzZWN0aW9uKHRhcmdldEhlaWdodCwgbWlkLCBiZWdpbiwgZW5kLCB0ZXh0LCBub2RlKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuVHlwZSgpOiB2b2lkIHtcbiAgICBjb25zdCB7IGxpbmVzLCBsZW5ndGgsIGlzU3VwcG9ydExpbmVDbGFtcCB9ID0gdGhpcztcbiAgICB0aGlzLmNscyA9IHtcbiAgICAgIGVsbGlwc2lzOiB0cnVlLFxuICAgICAgZWxsaXBzaXNfX2xpbmVzOiBsaW5lcyAmJiAhaXNTdXBwb3J0TGluZUNsYW1wLFxuICAgICAgJ2VsbGlwc2lzX19saW5lLWNsYW1wJzogbGluZXMgJiYgaXNTdXBwb3J0TGluZUNsYW1wXG4gICAgfTtcbiAgICBpZiAoIWxpbmVzICYmICFsZW5ndGgpIHtcbiAgICAgIHRoaXMudHlwZSA9ICdkZWZhdWx0JztcbiAgICB9IGVsc2UgaWYgKCFsaW5lcykge1xuICAgICAgdGhpcy50eXBlID0gJ2xlbmd0aCc7XG4gICAgfSBlbHNlIGlmIChpc1N1cHBvcnRMaW5lQ2xhbXApIHtcbiAgICAgIHRoaXMudHlwZSA9ICdsaW5lLWNsYW1wJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50eXBlID0gJ2xpbmUnO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2VuKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgdHlwZSwgbGluZXMsIGxlbmd0aCwgZnVsbFdpZHRoUmVjb2duaXRpb24sIHRhaWwsIG9yZ0VsLCBjZHIsIG5nWm9uZSB9ID0gdGhpcztcbiAgICBpZiAodHlwZSA9PT0gJ2xlbmd0aCcpIHtcbiAgICAgIGNvbnN0IGVsID0gb3JnRWwubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGlmIChlbC5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRWxsaXBzaXMgY29udGVudCBtdXN0IGJlIHN0cmluZy4nKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGxlbmd0aFRleHQgPSBlbC50ZXh0Q29udGVudCE7XG4gICAgICBjb25zdCB0ZXh0TGVuZ3RoID0gZnVsbFdpZHRoUmVjb2duaXRpb24gPyB0aGlzLmdldFN0ckZ1bGxMZW5ndGgobGVuZ3RoVGV4dCkgOiBsZW5ndGhUZXh0Lmxlbmd0aDtcbiAgICAgIGlmICh0ZXh0TGVuZ3RoIDw9IGxlbmd0aCEgfHwgbGVuZ3RoISA8IDApIHtcbiAgICAgICAgdGhpcy50ZXh0ID0gbGVuZ3RoVGV4dDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBkaXNwbGF5VGV4dDogc3RyaW5nO1xuICAgICAgICBpZiAobGVuZ3RoISAtIHRhaWwubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICBkaXNwbGF5VGV4dCA9ICcnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRpc3BsYXlUZXh0ID0gZnVsbFdpZHRoUmVjb2duaXRpb25cbiAgICAgICAgICAgID8gdGhpcy5jdXRTdHJCeUZ1bGxMZW5ndGgobGVuZ3RoVGV4dCwgbGVuZ3RoISlcbiAgICAgICAgICAgIDogbGVuZ3RoVGV4dC5zbGljZSgwLCBsZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudGV4dCA9IGRpc3BsYXlUZXh0ICsgdGFpbDtcbiAgICAgIH1cbiAgICAgIG5nWm9uZS5ydW4oKCkgPT4gY2RyLmRldGVjdENoYW5nZXMoKSk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnbGluZScpIHtcbiAgICAgIGNvbnN0IHsgc2hhZG93T3JnRWwsIHNoYWRvd1RleHRFbCB9ID0gdGhpcztcbiAgICAgIGNvbnN0IG9yZ05vZGUgPSBzaGFkb3dPcmdFbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgICAgY29uc3QgbGluZVRleHQgPSBvcmdOb2RlLmlubmVyVGV4dCB8fCBvcmdOb2RlLnRleHRDb250ZW50ITtcbiAgICAgIGNvbnN0IGxpbmVIZWlnaHQgPSBwYXJzZUludCh0aGlzLndpbi5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZ2V0RWwoJy5lbGxpcHNpcycpKS5saW5lSGVpZ2h0ISwgMTApO1xuICAgICAgY29uc3QgdGFyZ2V0SGVpZ2h0ID0gbGluZXMhICogbGluZUhlaWdodDtcbiAgICAgIGNvbnN0IGhhbmRsZUVsID0gdGhpcy5nZXRFbCgnLmVsbGlwc2lzX19oYW5kbGUnKTtcbiAgICAgIGhhbmRsZUVsIS5zdHlsZS5oZWlnaHQgPSBgJHt0YXJnZXRIZWlnaHR9cHhgO1xuXG4gICAgICBpZiAob3JnTm9kZS5vZmZzZXRIZWlnaHQgPD0gdGFyZ2V0SGVpZ2h0KSB7XG4gICAgICAgIHRoaXMudGV4dCA9IGxpbmVUZXh0O1xuICAgICAgICB0aGlzLnRhcmdldENvdW50ID0gbGluZVRleHQubGVuZ3RoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gYmlzZWN0aW9uXG4gICAgICAgIGNvbnN0IGxlbiA9IGxpbmVUZXh0Lmxlbmd0aDtcbiAgICAgICAgY29uc3QgbWlkID0gTWF0aC5jZWlsKGxlbiAvIDIpO1xuXG4gICAgICAgIGNvbnN0IGNvdW50ID0gdGhpcy5iaXNlY3Rpb24odGFyZ2V0SGVpZ2h0LCBtaWQsIDAsIGxlbiwgbGluZVRleHQsIHNoYWRvd1RleHRFbC5uYXRpdmVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgICB0aGlzLnRleHQgPSBsaW5lVGV4dDtcbiAgICAgICAgdGhpcy50YXJnZXRDb3VudCA9IGNvdW50O1xuICAgICAgfVxuICAgICAgbmdab25lLnJ1bigoKSA9PiBjZHIuZGV0ZWN0Q2hhbmdlcygpKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldEVsKGNsczogc3RyaW5nKTogSFRNTEVsZW1lbnQgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5lbC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihjbHMpO1xuICB9XG5cbiAgcHJpdmF0ZSBleGVjdXRlT25TdGFibGUoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uZ1pvbmUuaXNTdGFibGUpIHtcbiAgICAgIGZuKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubmdab25lLm9uU3RhYmxlLmFzT2JzZXJ2YWJsZSgpLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKGZuKTtcbiAgICB9XG4gIH1cblxuICByZWZyZXNoKCk6IHZvaWQge1xuICAgIHRoaXMuZ2VuVHlwZSgpO1xuICAgIGNvbnN0IHsgdHlwZSwgZG9tLCBvcmdFbCwgY2RyIH0gPSB0aGlzO1xuICAgIGNvbnN0IGh0bWwgPSBvcmdFbC5uYXRpdmVFbGVtZW50LmlubmVySFRNTDtcbiAgICB0aGlzLm9yZ0h0bWwgPSBkb20uYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoaHRtbCk7XG4gICAgY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB0aGlzLmV4ZWN1dGVPblN0YWJsZSgoKSA9PiB7XG4gICAgICB0aGlzLmdlbigpO1xuICAgICAgaWYgKHR5cGUgIT09ICdsaW5lJykge1xuICAgICAgICBjb25zdCBlbCA9IHRoaXMuZ2V0RWwoJy5lbGxpcHNpcycpO1xuICAgICAgICBpZiAoZWwpIHtcbiAgICAgICAgICBlbC5pbm5lckhUTUwgPSBodG1sO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW5pdGVkKSB7XG4gICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICB9XG4gIH1cbn1cbiIsIjxkaXYgKGNka09ic2VydmVDb250ZW50KT1cInJlZnJlc2goKVwiICNvcmdFbCBzdHlsZT1cImRpc3BsYXk6IG5vbmVcIj48bmctY29udGVudCAvPjwvZGl2PlxuPG5nLXRlbXBsYXRlICN0b29sdGlwVHBsIGxldC1jb24+XG4gIEBpZiAodG9vbHRpcCkge1xuICAgIDxzcGFuXG4gICAgICBuei10b29sdGlwXG4gICAgICBbbnpUb29sdGlwVGl0bGVdPVwidGl0bGVUcGxcIlxuICAgICAgW256VG9vbHRpcE92ZXJsYXlTdHlsZV09XCJ7ICdvdmVyZmxvdy13cmFwJzogJ2JyZWFrLXdvcmQnLCAnd29yZC13cmFwJzogJ2JyZWFrLXdvcmQnIH1cIlxuICAgID5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjb25cIiAvPlxuICAgICAgPG5nLXRlbXBsYXRlICN0aXRsZVRwbD48ZGl2IFtpbm5lckhUTUxdPVwib3JnSHRtbFwiPjwvZGl2PjwvbmctdGVtcGxhdGU+XG4gICAgPC9zcGFuPlxuICB9IEBlbHNlIHtcbiAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiY29uXCIgLz5cbiAgfVxuPC9uZy10ZW1wbGF0ZT5cbkBzd2l0Y2ggKHR5cGUpIHtcbiAgQGNhc2UgKCdkZWZhdWx0Jykge1xuICAgIDxzcGFuIFtjbGFzc109XCJjbHNcIj48L3NwYW4+XG4gIH1cbiAgQGNhc2UgKCdsZW5ndGgnKSB7XG4gICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRvb2x0aXBUcGxcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IGxlbmd0aFRwbCB9XCIgLz5cbiAgICA8bmctdGVtcGxhdGUgI2xlbmd0aFRwbD57eyB0ZXh0IH19PC9uZy10ZW1wbGF0ZT5cbiAgfVxuICBAY2FzZSAoJ2xpbmUtY2xhbXAnKSB7XG4gICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRvb2x0aXBUcGxcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IGxpbmVDbGFtcFRwbCB9XCIgLz5cbiAgICA8bmctdGVtcGxhdGUgI2xpbmVDbGFtcFRwbD5cbiAgICAgIDxkaXYgW2NsYXNzXT1cImNsc1wiIFtzdHlsZV09XCJ7ICctd2Via2l0LWxpbmUtY2xhbXAnOiBsaW5lcywgJy13ZWJraXQtYm94LW9yaWVudCc6ICd2ZXJ0aWNhbCcgfVwiPjwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIH1cbiAgQGNhc2UgKCdsaW5lJykge1xuICAgIDxkaXYgW2NsYXNzXT1cImNsc1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImVsbGlwc2lzX19oYW5kbGVcIj5cbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRvb2x0aXBUcGxcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IGxpbmVUcGwgfVwiIC8+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjbGluZVRwbD57eyBsaW5zV29yZCB9fTwvbmctdGVtcGxhdGU+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJlbGxpcHNpc19fc2hhZG93XCIgI3NoYWRvd09yZ0VsIFtpbm5lckhUTUxdPVwib3JnSHRtbFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZWxsaXBzaXNfX3NoYWRvd1wiICNzaGFkb3dUZXh0RWw+XG4gICAgICAgICAgPHNwYW4+e3sgdGV4dCB9fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgfVxufVxuIl19