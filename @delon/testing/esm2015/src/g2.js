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
        expect((/** @type {?} */ (this)).chart.get(key)).toBe(value);
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
        const x = (/** @type {?} */ (this)).chart.get(type)[0].get('attrOptions')[key];
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
        const x = (/** @type {?} */ (this)).chart.getXScales();
        expect(x[0].values.length).toBe(num);
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
        expect(y[0].values.length).toBe(num);
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
        const results = (/** @type {?} */ (this)).chart.get(type);
        expect(results.length).toBeGreaterThan(0);
        expect(results[0].get('data').length).toBe(num);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZzIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdGVzdGluZy8iLCJzb3VyY2VzIjpbInNyYy9nMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBb0Isb0JBQW9CLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFLckcsTUFBTSxPQUFPLGVBQWUsR0FBRyxDQUFDOztBQUNoQyxNQUFNLE9BQU8sWUFBWSxHQUFHLEdBQUc7Ozs7QUFFL0IsTUFBTSxPQUFPLE1BQU07Ozs7SUFDakIsWUFBbUIsVUFBc0MsSUFBSTtRQUExQyxZQUFPLEdBQVAsT0FBTyxDQUFtQztJQUFHLENBQUM7Ozs7SUFFakUsSUFBSSxFQUFFO1FBQ0osT0FBTyxtQkFBQSxJQUFJLENBQUMsT0FBTyxFQUFDLENBQUMsWUFBWSxDQUFDO0lBQ3BDLENBQUM7Ozs7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLG1CQUFBLElBQUksQ0FBQyxPQUFPLEVBQUMsQ0FBQyxpQkFBaUIsQ0FBQztJQUN6QyxDQUFDOzs7O0lBRUQsSUFBSSxJQUFJO1FBQ04sNkNBQTZDO1FBQzdDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7O0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN6QixDQUFDOzs7Ozs7OztJQUVELFNBQVMsQ0FBSSxNQUFTLEVBQUUsSUFBYTtRQUNuQyxPQUFPLENBQUMsc0JBQXNCLENBQUM7WUFDN0IsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDO1lBQ2pCLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQztTQUNyQixDQUFDLENBQUM7UUFDSCxPQUFPLG1CQUFBLElBQUksRUFBQSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7Ozs7SUFFRCxPQUFPLENBQUMsSUFBYSxFQUFFLEVBQUUsR0FBRyxLQUFLO1FBQy9CLG1C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QU8sQ0FBQyxJQUFJLENBQUMsdURBQXVELENBQUMsQ0FBQztRQUN0RSxPQUFPO0tBQ1I7SUFDRCxPQUFPLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztJQUNwQixJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDVixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDVixvQkFBb0IsRUFBRSxDQUFDO0FBQ3pCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wb25lbnRGaXh0dXJlLCBkaXNjYXJkUGVyaW9kaWNUYXNrcywgZmx1c2gsIFRlc3RCZWQsIHRpY2sgfSBmcm9tICdAYW5ndWxhci9jb3JlL3Rlc3RpbmcnO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuZXhwb3J0IHR5cGUgUGFnZUcyVHlwZSA9ICdnZW9tcycgfCAndmlld3MnO1xuXG5leHBvcnQgY29uc3QgUGFnZUcyRGF0YUNvdW50ID0gMjtcbmV4cG9ydCBjb25zdCBQYWdlRzJIZWlnaHQgPSAxMDA7XG5cbmV4cG9ydCBjbGFzcyBQYWdlRzI8VD4ge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZml4dHVyZTogQ29tcG9uZW50Rml4dHVyZTxUPiB8IG51bGwgPSBudWxsKSB7fVxuXG4gIGdldCBkbCgpIHtcbiAgICByZXR1cm4gdGhpcy5maXh0dXJlIS5kZWJ1Z0VsZW1lbnQ7XG4gIH1cblxuICBnZXQgY29udGV4dCgpOiBOelNhZmVBbnkge1xuICAgIHJldHVybiB0aGlzLmZpeHR1cmUhLmNvbXBvbmVudEluc3RhbmNlO1xuICB9XG5cbiAgZ2V0IGNvbXAoKSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXN0cmluZy1saXRlcmFsXG4gICAgcmV0dXJuIHRoaXMuY29udGV4dFsnY29tcCddO1xuICB9XG5cbiAgZ2V0IGNoYXJ0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbXAuY2hhcnQ7XG4gIH1cblxuICBnZW5Nb2R1bGU8TT4obW9kdWxlOiBNLCBjb21wOiBUeXBlPFQ+KSB7XG4gICAgVGVzdEJlZC5jb25maWd1cmVUZXN0aW5nTW9kdWxlKHtcbiAgICAgIGltcG9ydHM6IFttb2R1bGVdLFxuICAgICAgZGVjbGFyYXRpb25zOiBbY29tcF0sXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZW5Db21wKGNvbXA6IFR5cGU8VD4sIGRjID0gZmFsc2UpIHtcbiAgICB0aGlzLmZpeHR1cmUgPSBUZXN0QmVkLmNyZWF0ZUNvbXBvbmVudChjb21wKTtcbiAgICBpZiAoZGMpIHtcbiAgICAgIHRoaXMuZGNGaXJzdCgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG1ha2VNb2R1bGU8TT4obW9kdWxlOiBNLCBjb21wOiBUeXBlPFQ+LCBvcHRpb25zID0geyBkYzogdHJ1ZSB9KTogUGFnZUcyPFQ+IHtcbiAgICB0aGlzLmdlbk1vZHVsZShtb2R1bGUsIGNvbXApLmdlbkNvbXAoY29tcCwgb3B0aW9ucy5kYyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBkY0ZpcnN0KCkge1xuICAgIHRoaXMuZGMoKTtcbiAgICBmbHVzaCgpO1xuICAgIGRpc2NhcmRQZXJpb2RpY1Rhc2tzKCk7XG4gICAgLy8gRklYOiBgRXJyb3IgZHVyaW5nIGNsZWFudXAgb2YgY29tcG9uZW50YFxuICAgIGlmICh0aGlzLmNvbXAgJiYgdHlwZW9mIHRoaXMuY29tcC5jaGFydCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHNweU9uKHRoaXMuY29tcC5jaGFydCwgJ2Rlc3Ryb3knKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBkYygpIHtcbiAgICB0aGlzLmZpeHR1cmUhLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIHRoaXMuZml4dHVyZSEuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZW5kKCkge1xuICAgIC8vIFRoZSAyMDEgdmFsdWUgaXMgZGVsYXkgdmFsdWVcbiAgICB0aWNrKDIwMSk7XG4gICAgZGlzY2FyZFBlcmlvZGljVGFza3MoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5jb21wLm5nT25EZXN0cm95KCk7XG4gIH1cblxuICBuZXdEYXRhKGRhdGE6IGFueSk6IHRoaXMge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1zdHJpbmctbGl0ZXJhbFxuICAgIHRoaXMuY29udGV4dFsnZGF0YSddID0gZGF0YTtcbiAgICB0aGlzLmRjKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXRFbHMoY2xzOiBzdHJpbmcpOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiB7XG4gICAgcmV0dXJuICh0aGlzLmRsLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLnF1ZXJ5U2VsZWN0b3JBbGwoY2xzKTtcbiAgfVxuXG4gIGdldEVsKGNsczogc3RyaW5nKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiAodGhpcy5kbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5xdWVyeVNlbGVjdG9yKGNscykgYXMgSFRNTEVsZW1lbnQ7XG4gIH1cblxuICBpc0NhbnZhcyhzdGF1dHM6IGJvb2xlYW4gPSB0cnVlKTogdGhpcyB7XG4gICAgdGhpcy5pc0V4aXN0cygnY2FudmFzJywgc3RhdXRzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGlzVGV4dChjbHM6IHN0cmluZywgdmFsdWU6IHN0cmluZykge1xuICAgIGNvbnN0IGVsID0gdGhpcy5nZXRFbChjbHMpO1xuICAgIGV4cGVjdChlbCA/IGVsLnRleHRDb250ZW50IS50cmltKCkgOiAnJykudG9CZSh2YWx1ZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBpc0V4aXN0cyhjbHM6IHN0cmluZywgc3RhdXRzOiBib29sZWFuID0gdHJ1ZSkge1xuICAgIGV4cGVjdCh0aGlzLmdldEVsKGNscykgIT0gbnVsbCkudG9CZShzdGF1dHMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY2hlY2tPcHRpb25zKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XG4gICAgZXhwZWN0KHRoaXMuY2hhcnQuZ2V0KGtleSkpLnRvQmUodmFsdWUpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY2hlY2tBdHRyT3B0aW9ucyh0eXBlOiBQYWdlRzJUeXBlLCBrZXk6IHN0cmluZywgdmFsdWU6IGFueSkge1xuICAgIGNvbnN0IHggPSB0aGlzLmNoYXJ0LmdldCh0eXBlKVswXS5nZXQoJ2F0dHJPcHRpb25zJylba2V5XTtcbiAgICBleHBlY3QoeC5maWVsZCkudG9CZSh2YWx1ZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBpc1hTY2FsZXNDb3VudChudW06IG51bWJlcikge1xuICAgIGNvbnN0IHggPSB0aGlzLmNoYXJ0LmdldFhTY2FsZXMoKTtcbiAgICBleHBlY3QoeFswXS52YWx1ZXMubGVuZ3RoKS50b0JlKG51bSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBpc1lTY2FsZXNDb3VudChudW06IG51bWJlcikge1xuICAgIGNvbnN0IHkgPSB0aGlzLmNoYXJ0LmdldFlTY2FsZXMoKTtcbiAgICBleHBlY3QoeS5sZW5ndGgpLnRvQmUoMSk7XG4gICAgZXhwZWN0KHlbMF0udmFsdWVzLmxlbmd0aCkudG9CZShudW0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgaXNEYXRhQ291bnQodHlwZTogUGFnZUcyVHlwZSwgbnVtOiBudW1iZXIpIHtcbiAgICBjb25zdCByZXN1bHRzID0gdGhpcy5jaGFydC5nZXQodHlwZSk7XG4gICAgZXhwZWN0KHJlc3VsdHMubGVuZ3RoKS50b0JlR3JlYXRlclRoYW4oMCk7XG4gICAgZXhwZWN0KHJlc3VsdHNbMF0uZ2V0KCdkYXRhJykubGVuZ3RoKS50b0JlKG51bSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjaGVja1Rvb2x0aXAoaW5jbHVkZVRleHQ6IHN0cmluZyB8IG51bGwsIHBvaW50PzogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9KSB7XG4gICAgaWYgKCFwb2ludCkge1xuICAgICAgY29uc3QgZzJFbCA9IHRoaXMuZGwubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIHBvaW50ID0ge1xuICAgICAgICB4OiBnMkVsLm9mZnNldFdpZHRoIC8gMixcbiAgICAgICAgeTogZzJFbC5vZmZzZXRIZWlnaHQgLyAyLFxuICAgICAgfTtcbiAgICB9XG4gICAgdGhpcy5jaGFydC5zaG93VG9vbHRpcChwb2ludCk7XG4gICAgY29uc3QgZWwgPSB0aGlzLmdldEVsKCcuZzItdG9vbHRpcCcpO1xuICAgIGlmIChpbmNsdWRlVGV4dCA9PT0gbnVsbCkge1xuICAgICAgZXhwZWN0KGVsID09IG51bGwpLnRvQmUodHJ1ZSwgYFNob3VsZSBiZSBub3QgZm91bmQgZzItdG9vbHRpcCBlbGVtZW50YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4cGVjdChlbCAhPSBudWxsKS50b0JlKHRydWUsIGBTaG91bGUgYmUgaGFzIGcyLXRvb2x0aXAgZWxlbWVudGApO1xuICAgICAgY29uc3QgdGV4dCA9IGVsLnRleHRDb250ZW50IS50cmltKCk7XG4gICAgICBleHBlY3QodGV4dC5pbmNsdWRlcyhpbmNsdWRlVGV4dCkpLnRvQmUodHJ1ZSwgYFNob3VsZSBiZSBpbmNsdWRlIFwiJHtpbmNsdWRlVGV4dH1cIiB0ZXh0IG9mIHRvb2x0aXAgdGV4dCBjb250ZXh0IFwiJHt0ZXh0fVwiYCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0RlbGF5PE0sIFQ+KG1vZHVsZTogTSwgY29tcDogVHlwZTxUPiwgcGFnZTogUGFnZUcyPFQ+IHwgbnVsbCA9IG51bGwpIHtcbiAgaWYgKHBhZ2UgPT0gbnVsbCkge1xuICAgIHBhZ2UgPSBuZXcgUGFnZUcyPFQ+KCkubWFrZU1vZHVsZShtb2R1bGUsIGNvbXAsIHsgZGM6IGZhbHNlIH0pO1xuICB9XG4gIGNvbnN0IGNvbnRleHQgPSBwYWdlLmNvbnRleHQgYXMgYW55O1xuICBpZiAodHlwZW9mIGNvbnRleHQuZGVsYXkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgY29uc29sZS53YXJuKGBZb3UgbXVzZSBiZSBkaW5mZWQgXCJkZWxheVwiIHByb3BlcnR5IGluIHRlc3QgY29tcG9uZW50YCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnRleHQuZGVsYXkgPSAxMDA7XG4gIHBhZ2UuZGMoKTtcbiAgcGFnZS5jb21wLm5nT25EZXN0cm95KCk7XG4gIGV4cGVjdChwYWdlLmNoYXJ0ID09IG51bGwpLnRvQmUodHJ1ZSk7XG4gIHRpY2soMjAxKTtcbiAgZGlzY2FyZFBlcmlvZGljVGFza3MoKTtcbn1cbiJdfQ==