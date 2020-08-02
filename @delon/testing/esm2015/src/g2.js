/**
 * @fileoverview added by tsickle
 * Generated from: src/g2.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        return ((/** @type {?} */ (this.context)))['comp'];
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
        ((/** @type {?} */ ((/** @type {?} */ (this)).context)))['data'] = data;
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
     * @return {?}
     */
    get firstDataPoint() {
        // tslint:disable-next-line: no-string-literal
        return this.chart.getXY(((/** @type {?} */ (this.context)))['data'][0]);
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} _includeText
     * @param {?=} point
     * @return {THIS}
     */
    checkTooltip(_includeText, point) {
        if (!point) {
            point = (/** @type {?} */ (this)).firstDataPoint;
        }
        (/** @type {?} */ (this)).chart.showTooltip(point);
        expect((/** @type {?} */ (this)).chart.getController('tooltip') != null).toBe(true);
        return (/** @type {?} */ (this));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    checkClickItem() {
        /** @type {?} */
        const point = (/** @type {?} */ (this)).firstDataPoint;
        /** @type {?} */
        const clientPoint = (/** @type {?} */ (this)).chart.canvas.getClientByPoint(point.x, point.y);
        /** @type {?} */
        const event = new MouseEvent('click', {
            clientX: clientPoint.x,
            clientY: clientPoint.y,
        });
        ((/** @type {?} */ ((/** @type {?} */ (this)).chart.canvas.get('el')))).dispatchEvent(event);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZzIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90ZXN0aW5nL3NyYy9nMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBb0Isb0JBQW9CLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFNckcsTUFBTSxPQUFPLGVBQWUsR0FBRyxDQUFDOztBQUNoQyxNQUFNLE9BQU8sWUFBWSxHQUFHLEdBQUc7Ozs7QUFFL0IsTUFBTSxPQUFPLE1BQU07Ozs7SUFDakIsWUFBbUIsVUFBc0MsSUFBSTtRQUExQyxZQUFPLEdBQVAsT0FBTyxDQUFtQztJQUFHLENBQUM7Ozs7SUFFakUsSUFBSSxFQUFFO1FBQ0osT0FBTyxtQkFBQSxJQUFJLENBQUMsT0FBTyxFQUFDLENBQUMsWUFBWSxDQUFDO0lBQ3BDLENBQUM7Ozs7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLG1CQUFBLElBQUksQ0FBQyxPQUFPLEVBQUMsQ0FBQyxpQkFBaUIsQ0FBQztJQUN6QyxDQUFDOzs7O0lBRUQsSUFBSSxJQUFJO1FBQ04sNkNBQTZDO1FBQzdDLE9BQU8sQ0FBQyxtQkFBQSxJQUFJLENBQUMsT0FBTyxFQUFhLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7O0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN6QixDQUFDOzs7Ozs7OztJQUVELFNBQVMsQ0FBSSxNQUFTLEVBQUUsSUFBYTtRQUNuQyxPQUFPLENBQUMsc0JBQXNCLENBQUM7WUFDN0IsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDO1lBQ2pCLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQztTQUNyQixDQUFDLENBQUM7UUFDSCxPQUFPLG1CQUFBLElBQUksRUFBQSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7Ozs7SUFFRCxPQUFPLENBQUMs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LHlCQUFpRDs7Ozs7Ozs7O0FBaUsvRCxNQUFNLFVBQVUsVUFBVSxDQUFPLE1BQVMsRUFBRSxJQUFhLEVBQUUsT0FBeUIsSUFBSTtJQUN0RixJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7UUFDaEIsSUFBSSxHQUFHLElBQUksTUFBTSxFQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztLQUNoRTs7VUFDSyxPQUFPLEdBQUcsbUJBQUEsSUFBSSxDQUFDLE9BQU8sRUFBTztJQUNuQyxJQUFJLE9BQU8sT0FBTyxDQUFDLEtBQUssS0FBSyxXQUFXLEVBQUU7UUFDeEMsT0FBTyxDQUFDLElBQUksQ0FBQyx1REFBdUQsQ0FBQyxDQUFDO1FBQ3RFLE9BQU87S0FDUjtJQUNELE9BQU8sQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO0lBQ3BCLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDeEIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNWLG9CQUFvQixFQUFFLENBQUM7QUFDekIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERlYnVnRWxlbWVudCwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tcG9uZW50Rml4dHVyZSwgZGlzY2FyZFBlcmlvZGljVGFza3MsIGZsdXNoLCBUZXN0QmVkLCB0aWNrIH0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcbmltcG9ydCB7IENoYXJ0IH0gZnJvbSAnQGFudHYvZzInO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuZXhwb3J0IHR5cGUgUGFnZUcyVHlwZSA9ICdnZW9tZXRyaWVzJyB8ICd2aWV3cyc7XG5cbmV4cG9ydCBjb25zdCBQYWdlRzJEYXRhQ291bnQgPSAyO1xuZXhwb3J0IGNvbnN0IFBhZ2VHMkhlaWdodCA9IDEwMDtcblxuZXhwb3J0IGNsYXNzIFBhZ2VHMjxUPiB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBmaXh0dXJlOiBDb21wb25lbnRGaXh0dXJlPFQ+IHwgbnVsbCA9IG51bGwpIHt9XG5cbiAgZ2V0IGRsKCk6IERlYnVnRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuZml4dHVyZSEuZGVidWdFbGVtZW50O1xuICB9XG5cbiAgZ2V0IGNvbnRleHQoKTogVCB7XG4gICAgcmV0dXJuIHRoaXMuZml4dHVyZSEuY29tcG9uZW50SW5zdGFuY2U7XG4gIH1cblxuICBnZXQgY29tcCgpOiBhbnkge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1zdHJpbmctbGl0ZXJhbFxuICAgIHJldHVybiAodGhpcy5jb250ZXh0IGFzIE56U2FmZUFueSlbJ2NvbXAnXTtcbiAgfVxuXG4gIGdldCBjaGFydCgpOiBDaGFydCB7XG4gICAgcmV0dXJuIHRoaXMuY29tcC5jaGFydDtcbiAgfVxuXG4gIGdlbk1vZHVsZTxNPihtb2R1bGU6IE0sIGNvbXA6IFR5cGU8VD4pOiB0aGlzIHtcbiAgICBUZXN0QmVkLmNvbmZpZ3VyZVRlc3RpbmdNb2R1bGUoe1xuICAgICAgaW1wb3J0czogW21vZHVsZV0sXG4gICAgICBkZWNsYXJhdGlvbnM6IFtjb21wXSxcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdlbkNvbXAoY29tcDogVHlwZTxUPiwgZGM6IGJvb2xlYW4gPSBmYWxzZSk6IHRoaXMge1xuICAgIHRoaXMuZml4dHVyZSA9IFRlc3RCZWQuY3JlYXRlQ29tcG9uZW50KGNvbXApO1xuICAgIGlmIChkYykge1xuICAgICAgdGhpcy5kY0ZpcnN0KCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbWFrZU1vZHVsZTxNPihtb2R1bGU6IE0sIGNvbXA6IFR5cGU8VD4sIG9wdGlvbnM6IHsgZGM6IGJvb2xlYW4gfSA9IHsgZGM6IHRydWUgfSk6IFBhZ2VHMjxUPiB7XG4gICAgdGhpcy5nZW5Nb2R1bGUobW9kdWxlLCBjb21wKS5nZW5Db21wKGNvbXAsIG9wdGlvbnMuZGMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZGNGaXJzdCgpOiB0aGlzIHtcbiAgICB0aGlzLmRjKCk7XG4gICAgZmx1c2goKTtcbiAgICBkaXNjYXJkUGVyaW9kaWNUYXNrcygpO1xuICAgIC8vIEZJWDogYEVycm9yIGR1cmluZyBjbGVhbnVwIG9mIGNvbXBvbmVudGBcbiAgICBpZiAodGhpcy5jb21wICYmIHR5cGVvZiB0aGlzLmNvbXAuY2hhcnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBzcHlPbih0aGlzLmNvbXAuY2hhcnQsICdkZXN0cm95Jyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZGMoKTogdGhpcyB7XG4gICAgdGhpcy5maXh0dXJlIS5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB0aGlzLmZpeHR1cmUhLmRldGVjdENoYW5nZXMoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGVuZCgpOiB0aGlzIHtcbiAgICAvLyBUaGUgMjAxIHZhbHVlIGlzIGRlbGF5IHZhbHVlXG4gICAgdGljaygyMDEpO1xuICAgIGZsdXNoKCk7XG4gICAgZGlzY2FyZFBlcmlvZGljVGFza3MoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5jb21wLm5nT25EZXN0cm95KCk7XG4gIH1cblxuICBuZXdEYXRhKGRhdGE6IGFueSk6IHRoaXMge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1zdHJpbmctbGl0ZXJhbFxuICAgICh0aGlzLmNvbnRleHQgYXMgTnpTYWZlQW55KVsnZGF0YSddID0gZGF0YTtcbiAgICB0aGlzLmRjKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXRFbHMoY2xzOiBzdHJpbmcpOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiB7XG4gICAgcmV0dXJuICh0aGlzLmRsLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLnF1ZXJ5U2VsZWN0b3JBbGwoY2xzKTtcbiAgfVxuXG4gIGdldEVsKGNsczogc3RyaW5nKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiAodGhpcy5kbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5xdWVyeVNlbGVjdG9yKGNscykgYXMgSFRNTEVsZW1lbnQ7XG4gIH1cblxuICBnZXRDb250cm9sbGVyKHR5cGU6ICdheGlzJyB8ICdsZWdlbmQnKTogTnpTYWZlQW55IHtcbiAgICByZXR1cm4gdGhpcy5jaGFydC5nZXRDb250cm9sbGVyKHR5cGUpIGFzIE56U2FmZUFueTtcbiAgfVxuXG4gIGlzQ2FudmFzKHN0YXV0czogYm9vbGVhbiA9IHRydWUpOiB0aGlzIHtcbiAgICB0aGlzLmlzRXhpc3RzKCdjYW52YXMnLCBzdGF1dHMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgaXNUZXh0KGNsczogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdGhpcyB7XG4gICAgY29uc3QgZWwgPSB0aGlzLmdldEVsKGNscyk7XG4gICAgZXhwZWN0KGVsID8gZWwudGV4dENvbnRlbnQhLnRyaW0oKSA6ICcnKS50b0JlKHZhbHVlKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGlzRXhpc3RzKGNsczogc3RyaW5nLCBzdGF1dHM6IGJvb2xlYW4gPSB0cnVlKTogdGhpcyB7XG4gICAgZXhwZWN0KHRoaXMuZ2V0RWwoY2xzKSAhPSBudWxsKS50b0JlKHN0YXV0cyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjaGVja09wdGlvbnMoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB0aGlzIHtcbiAgICBleHBlY3QoKHRoaXMuY2hhcnQgYXMgTnpTYWZlQW55KVtrZXldKS50b0JlKHZhbHVlKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNoZWNrQXR0ck9wdGlvbnModHlwZTogUGFnZUcyVHlwZSwga2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB0aGlzIHtcbiAgICBjb25zdCB4ID0gKHRoaXMuY2hhcnRbdHlwZV1bMF0gYXMgTnpTYWZlQW55KS5hdHRyaWJ1dGVPcHRpb25ba2V5XTtcbiAgICBleHBlY3QoeC5maWVsZCkudG9CZSh2YWx1ZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBpc1hTY2FsZXNDb3VudChudW06IG51bWJlcik6IHRoaXMge1xuICAgIGNvbnN0IHggPSB0aGlzLmNoYXJ0LmdldFhTY2FsZSgpO1xuICAgIGV4cGVjdCh4LnZhbHVlcyEubGVuZ3RoKS50b0JlKG51bSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBpc1lTY2FsZXNDb3VudChudW06IG51bWJlcik6IHRoaXMge1xuICAgIGNvbnN0IHkgPSB0aGlzLmNoYXJ0LmdldFlTY2FsZXMoKTtcbiAgICBleHBlY3QoeS5sZW5ndGgpLnRvQmUoMSk7XG4gICAgZXhwZWN0KHlbMF0udmFsdWVzIS5sZW5ndGgpLnRvQmUobnVtKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGlzRGF0YUNvdW50KHR5cGU6IFBhZ2VHMlR5cGUsIG51bTogbnVtYmVyKTogdGhpcyB7XG4gICAgY29uc3QgcmVzdWx0cyA9IHRoaXMuY2hhcnRbdHlwZV07XG4gICAgZXhwZWN0KHJlc3VsdHMubGVuZ3RoKS50b0JlR3JlYXRlclRoYW4oMCk7XG4gICAgZXhwZWN0KHJlc3VsdHNbMF0uZGF0YS5sZW5ndGgpLnRvQmUobnVtKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldCBmaXJzdERhdGFQb2ludCgpOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0ge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tc3RyaW5nLWxpdGVyYWxcbiAgICByZXR1cm4gdGhpcy5jaGFydC5nZXRYWSgodGhpcy5jb250ZXh0IGFzIE56U2FmZUFueSlbJ2RhdGEnXVswXSk7XG4gIH1cblxuICBjaGVja1Rvb2x0aXAoX2luY2x1ZGVUZXh0OiBzdHJpbmcgfCBudWxsLCBwb2ludD86IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSk6IHRoaXMge1xuICAgIGlmICghcG9pbnQpIHtcbiAgICAgIHBvaW50ID0gdGhpcy5maXJzdERhdGFQb2ludDtcbiAgICB9XG4gICAgdGhpcy5jaGFydC5zaG93VG9vbHRpcChwb2ludCk7XG4gICAgZXhwZWN0KHRoaXMuY2hhcnQuZ2V0Q29udHJvbGxlcigndG9vbHRpcCcpICE9IG51bGwpLnRvQmUodHJ1ZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjaGVja0NsaWNrSXRlbSgpOiB0aGlzIHtcbiAgICBjb25zdCBwb2ludCA9IHRoaXMuZmlyc3REYXRhUG9pbnQ7XG4gICAgY29uc3QgY2xpZW50UG9pbnQgPSB0aGlzLmNoYXJ0LmNhbnZhcy5nZXRDbGllbnRCeVBvaW50KHBvaW50LngsIHBvaW50LnkpO1xuICAgIGNvbnN0IGV2ZW50ID0gbmV3IE1vdXNlRXZlbnQoJ2NsaWNrJywge1xuICAgICAgY2xpZW50WDogY2xpZW50UG9pbnQueCxcbiAgICAgIGNsaWVudFk6IGNsaWVudFBvaW50LnksXG4gICAgfSk7XG4gICAgKHRoaXMuY2hhcnQuY2FudmFzLmdldCgnZWwnKSBhcyBIVE1MRWxlbWVudCkuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrRGVsYXk8TSwgVD4obW9kdWxlOiBNLCBjb21wOiBUeXBlPFQ+LCBwYWdlOiBQYWdlRzI8VD4gfCBudWxsID0gbnVsbCk6IHZvaWQge1xuICBpZiAocGFnZSA9PSBudWxsKSB7XG4gICAgcGFnZSA9IG5ldyBQYWdlRzI8VD4oKS5tYWtlTW9kdWxlKG1vZHVsZSwgY29tcCwgeyBkYzogZmFsc2UgfSk7XG4gIH1cbiAgY29uc3QgY29udGV4dCA9IHBhZ2UuY29udGV4dCBhcyBhbnk7XG4gIGlmICh0eXBlb2YgY29udGV4dC5kZWxheSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjb25zb2xlLndhcm4oYFlvdSBtdXNlIGJlIGRpbmZlZCBcImRlbGF5XCIgcHJvcGVydHkgaW4gdGVzdCBjb21wb25lbnRgKTtcbiAgICByZXR1cm47XG4gIH1cbiAgY29udGV4dC5kZWxheSA9IDEwMDtcbiAgcGFnZS5kYygpO1xuICBwYWdlLmNvbXAubmdPbkRlc3Ryb3koKTtcbiAgZXhwZWN0KHBhZ2UuY2hhcnQgPT0gbnVsbCkudG9CZSh0cnVlKTtcbiAgdGljaygyMDEpO1xuICBkaXNjYXJkUGVyaW9kaWNUYXNrcygpO1xufVxuIl19