/**
 * @fileoverview added by tsickle
 * Generated from: src/g2.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { discardPeriodicTasks, flush, TestBed, tick } from '@angular/core/testing';
/** @type {?} */
export const PageG2DataCount = 2;
/** @type {?} */
export const PageG2Height = 100;
/**
 * @template T
 */
export class PageG2 {
    /**
     * @param {?=} fixture
     */
    constructor(fixture = null) {
        this.fixture = fixture;
    }
    /**
     * @return {?}
     */
    get dl() {
        return (/** @type {?} */ (this.fixture)).debugElement;
    }
    /**
     * @return {?}
     */
    get context() {
        return (/** @type {?} */ (this.fixture)).componentInstance;
    }
    /**
     * @return {?}
     */
    get comp() {
        // tslint:disable-next-line:no-string-literal
        return this.context['comp'];
    }
    /**
     * @return {?}
     */
    get chart() {
        return this.comp.chart;
    }
    /**
     * @template THIS,M
     * @this {THIS}
     * @param {?} module
     * @param {?} comp
     * @return {THIS}
     */
    genModule(module, comp) {
        TestBed.configureTestingModule({
            imports: [module],
            declarations: [comp],
        });
        return (/** @type {?} */ (this));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} comp
     * @param {?=} dc
     * @return {THIS}
     */
    genComp(comp, dc = false) {
        (/** @type {?} */ (this)).fixture = TestBed.createComponent(comp);
        if (dc) {
            (/** @type {?} */ (this)).dcFirst();
        }
        return (/** @type {?} */ (this));
    }
    /**
     * @template M
     * @param {?} module
     * @param {?} comp
     * @param {?=} options
     * @return {?}
     */
    makeModule(module, comp, options = { dc: true }) {
        this.genModule(module, comp).genComp(comp, options.dc);
        return this;
    }
    /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    dcFirst() {
        (/** @type {?} */ (this)).dc();
        flush();
        discardPeriodicTasks();
        // FIX: `Error during cleanup of component`
        if ((/** @type {?} */ (this)).comp && typeof (/** @type {?} */ (this)).comp.chart !== 'undefined') {
            spyOn((/** @type {?} */ (this)).comp.chart, 'destroy');
        }
        return (/** @type {?} */ (this));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    dc() {
        (/** @type {?} */ ((/** @type {?} */ (this)).fixture)).changeDetectorRef.markForCheck();
        (/** @type {?} */ ((/** @type {?} */ (this)).fixture)).detectChanges();
        return (/** @type {?} */ (this));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    end() {
        // The 201 value is delay value
        tick(201);
        flush();
        discardPeriodicTasks();
        return (/** @type {?} */ (this));
    }
    /**
     * @return {?}
     */
    destroy() {
        this.comp.ngOnDestroy();
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} data
     * @return {THIS}
     */
    newData(data) {
        // tslint:disable-next-line:no-string-literal
        (/** @type {?} */ (this)).context['data'] = data;
        (/** @type {?} */ (this)).dc();
        return (/** @type {?} */ (this));
    }
    /**
     * @param {?} cls
     * @return {?}
     */
    getEls(cls) {
        return ((/** @type {?} */ (this.dl.nativeElement))).querySelectorAll(cls);
    }
    /**
     * @param {?} cls
     * @return {?}
     */
    getEl(cls) {
        return (/** @type {?} */ (((/** @type {?} */ (this.dl.nativeElement))).querySelector(cls)));
    }
    /**
     * @param {?} type
     * @return {?}
     */
    getController(type) {
        return (/** @type {?} */ (this.chart.getController(type)));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?=} stauts
     * @return {THIS}
     */
    isCanvas(stauts = true) {
        (/** @type {?} */ (this)).isExists('canvas', stauts);
        return (/** @type {?} */ (this));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} cls
     * @param {?} value
     * @return {THIS}
     */
    isText(cls, value) {
        /** @type {?} */
        const el = (/** @type {?} */ (this)).getEl(cls);
        expect(el ? (/** @type {?} */ (el.textContent)).trim() : '').toBe(value);
        return (/** @type {?} */ (this));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} cls
     * @param {?=} stauts
     * @return {THIS}
     */
    isExists(cls, stauts = true) {
        expect((/** @type {?} */ (this)).getEl(cls) != null).toBe(stauts);
        return (/** @type {?} */ (this));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} key
     * @param {?} value
     * @return {THIS}
     */
    checkOptions(key, value) {
        expect(((/** @type {?} */ ((/** @type {?} */ (this)).chart)))[key]).toBe(value);
        return (/** @type {?} */ (this));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} type
     * @param {?} key
     * @param {?} value
     * @return {THIS}
     */
    checkAttrOptions(type, key, value) {
        /** @type {?} */
        const x = ((/** @type {?} */ ((/** @type {?} */ (this)).chart[type][0]))).attributeOption[key];
        expect(x.field).toBe(value);
        return (/** @type {?} */ (this));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} num
     * @return {THIS}
     */
    isXScalesCount(num) {
        /** @type {?} */
        const x = (/** @type {?} */ (this)).chart.getXScale();
        expect((/** @type {?} */ (x.values)).length).toBe(num);
        return (/** @type {?} */ (this));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} num
     * @return {THIS}
     */
    isYScalesCount(num) {
        /** @type {?} */
        const y = (/** @type {?} */ (this)).chart.getYScales();
        expect(y.length).toBe(1);
        expect((/** @type {?} */ (y[0].values)).length).toBe(num);
        return (/** @type {?} */ (this));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} type
     * @param {?} num
     * @return {THIS}
     */
    isDataCount(type, num) {
        /** @type {?} */
        const results = (/** @type {?} */ (this)).chart[type];
        expect(results.length).toBeGreaterThan(0);
        expect(results[0].data.length).toBe(num);
        return (/** @type {?} */ (this));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} includeText
     * @param {?=} point
     * @return {THIS}
     */
    checkTooltip(includeText, point) {
        if (!point) {
            /** @type {?} */
            const g2El = (/** @type {?} */ ((/** @type {?} */ (this)).dl.nativeElement));
            point = {
                x: g2El.offsetWidth / 2,
                y: g2El.offsetHeight / 2,
            };
        }
        (/** @type {?} */ (this)).chart.showTooltip(point);
        /** @type {?} */
        const el = (/** @type {?} */ (this)).getEl('.g2-tooltip');
        if (includeText === null) {
            expect(el == null).toBe(true, `Shoule be not found g2-tooltip element`);
        }
        else {
            expect(el != null).toBe(true, `Shoule be has g2-tooltip element`);
            /** @type {?} */
            const text = (/** @type {?} */ (el.textContent)).trim();
            expect(text.includes(includeText)).toBe(true, `Shoule be include "${includeText}" text of tooltip text context "${text}"`);
        }
        return (/** @type {?} */ (this));
    }
}
if (false) {
    /** @type {?} */
    PageG2.prototype.fixture;
}
/**
 * @template M, T
 * @param {?} module
 * @param {?} comp
 * @param {?=} page
 * @return {?}
 */
export function checkDelay(module, comp, page = null) {
    if (page == null) {
        page = new PageG2().makeModule(module, comp, { dc: false });
    }
    /** @type {?} */
    const context = (/** @type {?} */ (page.context));
    if (typeof context.delay === 'undefined') {
        console.warn(`You muse be dinfed "delay" property in test component`);
        return;
    }
    context.delay = 100;
    page.dc();
    page.comp.ngOnDestroy();
    expect(page.chart == null).toBe(true);
    tick(201);
    discardPeriodicTasks();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZzIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdGVzdGluZy8iLCJzb3VyY2VzIjpbInNyYy9nMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBb0Isb0JBQW9CLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFNckcsTUFBTSxPQUFPLGVBQWUsR0FBRyxDQUFDOztBQUNoQyxNQUFNLE9BQU8sWUFBWSxHQUFHLEdBQUc7Ozs7QUFFL0IsTUFBTSxPQUFPLE1BQU07Ozs7SUFDakIsWUFBbUIsVUFBc0MsSUFBSTtRQUExQyxZQUFPLEdBQVAsT0FBTyxDQUFtQztJQUFHLENBQUM7Ozs7SUFFakUsSUFBSSxFQUFFO1FBQ0osT0FBTyxtQkFBQSxJQUFJLENBQUMsT0FBTyxFQUFDLENBQUMsWUFBWSxDQUFDO0lBQ3BDLENBQUM7Ozs7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLG1CQUFBLElBQUksQ0FBQyxPQUFPLEVBQUMsQ0FBQyxpQkFBaUIsQ0FBQztJQUN6QyxDQUFDOzs7O0lBRUQsSUFBSSxJQUFJO1FBQ04sNkNBQTZDO1FBQzdDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7O0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN6QixDQUFDOzs7Ozs7OztJQUVELFNBQVMsQ0FBSSxNQUFTLEVBQUUsSUFBYTtRQUNuQyxPQUFPLENBQUMsc0JBQXNCLENBQUM7WUFDN0IsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDO1lBQ2pCLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQztTQUNyQixDQUFDLENBQUM7UUFDSCxPQUFPLG1CQUFBLElBQUksRUFBQSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7Ozs7SUFFRCxPQUFPLENBQUMsSUFBYSxFQUFFLEVBQUUsR0FBRyxLQUFLO1FBQy9CLG1C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Q0FBQyxDQUFDO0tBQ2hFOztVQUNLLE9BQU8sR0FBRyxtQkFBQSxJQUFJLENBQUMsT0FBTyxFQUFPO0lBQ25DLElBQUksT0FBTyxPQUFPLENBQUMsS0FBSyxLQUFLLFdBQVcsRUFBRTtRQUN4QyxPQUFPLENBQUMsSUFBSSxDQUFDLHVEQUF1RCxDQUFDLENBQUM7UUFDdEUsT0FBTztLQUNSO0lBQ0QsT0FBTyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7SUFDcEIsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ1Ysb0JBQW9CLEVBQUUsQ0FBQztBQUN6QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tcG9uZW50Rml4dHVyZSwgZGlzY2FyZFBlcmlvZGljVGFza3MsIGZsdXNoLCBUZXN0QmVkLCB0aWNrIH0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcbmltcG9ydCB7IENoYXJ0IH0gZnJvbSAnQGFudHYvZzInO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuZXhwb3J0IHR5cGUgUGFnZUcyVHlwZSA9ICdnZW9tZXRyaWVzJyB8ICd2aWV3cyc7XG5cbmV4cG9ydCBjb25zdCBQYWdlRzJEYXRhQ291bnQgPSAyO1xuZXhwb3J0IGNvbnN0IFBhZ2VHMkhlaWdodCA9IDEwMDtcblxuZXhwb3J0IGNsYXNzIFBhZ2VHMjxUPiB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBmaXh0dXJlOiBDb21wb25lbnRGaXh0dXJlPFQ+IHwgbnVsbCA9IG51bGwpIHt9XG5cbiAgZ2V0IGRsKCkge1xuICAgIHJldHVybiB0aGlzLmZpeHR1cmUhLmRlYnVnRWxlbWVudDtcbiAgfVxuXG4gIGdldCBjb250ZXh0KCk6IE56U2FmZUFueSB7XG4gICAgcmV0dXJuIHRoaXMuZml4dHVyZSEuY29tcG9uZW50SW5zdGFuY2U7XG4gIH1cblxuICBnZXQgY29tcCgpIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tc3RyaW5nLWxpdGVyYWxcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0Wydjb21wJ107XG4gIH1cblxuICBnZXQgY2hhcnQoKTogQ2hhcnQge1xuICAgIHJldHVybiB0aGlzLmNvbXAuY2hhcnQ7XG4gIH1cblxuICBnZW5Nb2R1bGU8TT4obW9kdWxlOiBNLCBjb21wOiBUeXBlPFQ+KSB7XG4gICAgVGVzdEJlZC5jb25maWd1cmVUZXN0aW5nTW9kdWxlKHtcbiAgICAgIGltcG9ydHM6IFttb2R1bGVdLFxuICAgICAgZGVjbGFyYXRpb25zOiBbY29tcF0sXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZW5Db21wKGNvbXA6IFR5cGU8VD4sIGRjID0gZmFsc2UpIHtcbiAgICB0aGlzLmZpeHR1cmUgPSBUZXN0QmVkLmNyZWF0ZUNvbXBvbmVudChjb21wKTtcbiAgICBpZiAoZGMpIHtcbiAgICAgIHRoaXMuZGNGaXJzdCgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG1ha2VNb2R1bGU8TT4obW9kdWxlOiBNLCBjb21wOiBUeXBlPFQ+LCBvcHRpb25zID0geyBkYzogdHJ1ZSB9KTogUGFnZUcyPFQ+IHtcbiAgICB0aGlzLmdlbk1vZHVsZShtb2R1bGUsIGNvbXApLmdlbkNvbXAoY29tcCwgb3B0aW9ucy5kYyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBkY0ZpcnN0KCkge1xuICAgIHRoaXMuZGMoKTtcbiAgICBmbHVzaCgpO1xuICAgIGRpc2NhcmRQZXJpb2RpY1Rhc2tzKCk7XG4gICAgLy8gRklYOiBgRXJyb3IgZHVyaW5nIGNsZWFudXAgb2YgY29tcG9uZW50YFxuICAgIGlmICh0aGlzLmNvbXAgJiYgdHlwZW9mIHRoaXMuY29tcC5jaGFydCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHNweU9uKHRoaXMuY29tcC5jaGFydCwgJ2Rlc3Ryb3knKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBkYygpIHtcbiAgICB0aGlzLmZpeHR1cmUhLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIHRoaXMuZml4dHVyZSEuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZW5kKCkge1xuICAgIC8vIFRoZSAyMDEgdmFsdWUgaXMgZGVsYXkgdmFsdWVcbiAgICB0aWNrKDIwMSk7XG4gICAgZmx1c2goKTtcbiAgICBkaXNjYXJkUGVyaW9kaWNUYXNrcygpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmNvbXAubmdPbkRlc3Ryb3koKTtcbiAgfVxuXG4gIG5ld0RhdGEoZGF0YTogYW55KTogdGhpcyB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXN0cmluZy1saXRlcmFsXG4gICAgdGhpcy5jb250ZXh0WydkYXRhJ10gPSBkYXRhO1xuICAgIHRoaXMuZGMoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldEVscyhjbHM6IHN0cmluZyk6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+IHtcbiAgICByZXR1cm4gKHRoaXMuZGwubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkucXVlcnlTZWxlY3RvckFsbChjbHMpO1xuICB9XG5cbiAgZ2V0RWwoY2xzOiBzdHJpbmcpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuICh0aGlzLmRsLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLnF1ZXJ5U2VsZWN0b3IoY2xzKSBhcyBIVE1MRWxlbWVudDtcbiAgfVxuXG4gIGdldENvbnRyb2xsZXIodHlwZTogJ2F4aXMnIHwgJ2xlZ2VuZCcpIHtcbiAgICByZXR1cm4gdGhpcy5jaGFydC5nZXRDb250cm9sbGVyKHR5cGUpIGFzIE56U2FmZUFueTtcbiAgfVxuXG4gIGlzQ2FudmFzKHN0YXV0czogYm9vbGVhbiA9IHRydWUpOiB0aGlzIHtcbiAgICB0aGlzLmlzRXhpc3RzKCdjYW52YXMnLCBzdGF1dHMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgaXNUZXh0KGNsczogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSB7XG4gICAgY29uc3QgZWwgPSB0aGlzLmdldEVsKGNscyk7XG4gICAgZXhwZWN0KGVsID8gZWwudGV4dENvbnRlbnQhLnRyaW0oKSA6ICcnKS50b0JlKHZhbHVlKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGlzRXhpc3RzKGNsczogc3RyaW5nLCBzdGF1dHM6IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgZXhwZWN0KHRoaXMuZ2V0RWwoY2xzKSAhPSBudWxsKS50b0JlKHN0YXV0cyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjaGVja09wdGlvbnMoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcbiAgICBleHBlY3QoKHRoaXMuY2hhcnQgYXMgTnpTYWZlQW55KVtrZXldKS50b0JlKHZhbHVlKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNoZWNrQXR0ck9wdGlvbnModHlwZTogUGFnZUcyVHlwZSwga2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcbiAgICBjb25zdCB4ID0gKHRoaXMuY2hhcnRbdHlwZV1bMF0gYXMgTnpTYWZlQW55KS5hdHRyaWJ1dGVPcHRpb25ba2V5XTtcbiAgICBleHBlY3QoeC5maWVsZCkudG9CZSh2YWx1ZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBpc1hTY2FsZXNDb3VudChudW06IG51bWJlcikge1xuICAgIGNvbnN0IHggPSB0aGlzLmNoYXJ0LmdldFhTY2FsZSgpO1xuICAgIGV4cGVjdCh4LnZhbHVlcyEubGVuZ3RoKS50b0JlKG51bSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBpc1lTY2FsZXNDb3VudChudW06IG51bWJlcikge1xuICAgIGNvbnN0IHkgPSB0aGlzLmNoYXJ0LmdldFlTY2FsZXMoKTtcbiAgICBleHBlY3QoeS5sZW5ndGgpLnRvQmUoMSk7XG4gICAgZXhwZWN0KHlbMF0udmFsdWVzIS5sZW5ndGgpLnRvQmUobnVtKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGlzRGF0YUNvdW50KHR5cGU6IFBhZ2VHMlR5cGUsIG51bTogbnVtYmVyKSB7XG4gICAgY29uc3QgcmVzdWx0cyA9IHRoaXMuY2hhcnRbdHlwZV07XG4gICAgZXhwZWN0KHJlc3VsdHMubGVuZ3RoKS50b0JlR3JlYXRlclRoYW4oMCk7XG4gICAgZXhwZWN0KHJlc3VsdHNbMF0uZGF0YS5sZW5ndGgpLnRvQmUobnVtKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNoZWNrVG9vbHRpcChpbmNsdWRlVGV4dDogc3RyaW5nIHwgbnVsbCwgcG9pbnQ/OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0pIHtcbiAgICBpZiAoIXBvaW50KSB7XG4gICAgICBjb25zdCBnMkVsID0gdGhpcy5kbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgICAgcG9pbnQgPSB7XG4gICAgICAgIHg6IGcyRWwub2Zmc2V0V2lkdGggLyAyLFxuICAgICAgICB5OiBnMkVsLm9mZnNldEhlaWdodCAvIDIsXG4gICAgICB9O1xuICAgIH1cbiAgICB0aGlzLmNoYXJ0LnNob3dUb29sdGlwKHBvaW50KTtcbiAgICBjb25zdCBlbCA9IHRoaXMuZ2V0RWwoJy5nMi10b29sdGlwJyk7XG4gICAgaWYgKGluY2x1ZGVUZXh0ID09PSBudWxsKSB7XG4gICAgICBleHBlY3QoZWwgPT0gbnVsbCkudG9CZSh0cnVlLCBgU2hvdWxlIGJlIG5vdCBmb3VuZCBnMi10b29sdGlwIGVsZW1lbnRgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXhwZWN0KGVsICE9IG51bGwpLnRvQmUodHJ1ZSwgYFNob3VsZSBiZSBoYXMgZzItdG9vbHRpcCBlbGVtZW50YCk7XG4gICAgICBjb25zdCB0ZXh0ID0gZWwudGV4dENvbnRlbnQhLnRyaW0oKTtcbiAgICAgIGV4cGVjdCh0ZXh0LmluY2x1ZGVzKGluY2x1ZGVUZXh0KSkudG9CZSh0cnVlLCBgU2hvdWxlIGJlIGluY2x1ZGUgXCIke2luY2x1ZGVUZXh0fVwiIHRleHQgb2YgdG9vbHRpcCB0ZXh0IGNvbnRleHQgXCIke3RleHR9XCJgKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrRGVsYXk8TSwgVD4obW9kdWxlOiBNLCBjb21wOiBUeXBlPFQ+LCBwYWdlOiBQYWdlRzI8VD4gfCBudWxsID0gbnVsbCkge1xuICBpZiAocGFnZSA9PSBudWxsKSB7XG4gICAgcGFnZSA9IG5ldyBQYWdlRzI8VD4oKS5tYWtlTW9kdWxlKG1vZHVsZSwgY29tcCwgeyBkYzogZmFsc2UgfSk7XG4gIH1cbiAgY29uc3QgY29udGV4dCA9IHBhZ2UuY29udGV4dCBhcyBhbnk7XG4gIGlmICh0eXBlb2YgY29udGV4dC5kZWxheSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjb25zb2xlLndhcm4oYFlvdSBtdXNlIGJlIGRpbmZlZCBcImRlbGF5XCIgcHJvcGVydHkgaW4gdGVzdCBjb21wb25lbnRgKTtcbiAgICByZXR1cm47XG4gIH1cbiAgY29udGV4dC5kZWxheSA9IDEwMDtcbiAgcGFnZS5kYygpO1xuICBwYWdlLmNvbXAubmdPbkRlc3Ryb3koKTtcbiAgZXhwZWN0KHBhZ2UuY2hhcnQgPT0gbnVsbCkudG9CZSh0cnVlKTtcbiAgdGljaygyMDEpO1xuICBkaXNjYXJkUGVyaW9kaWNUYXNrcygpO1xufVxuIl19