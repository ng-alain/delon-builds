/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { discardPeriodicTasks, flush, tick, TestBed, } from '@angular/core/testing';
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
        return this.fixture.debugElement;
    }
    /**
     * @return {?}
     */
    get context() {
        return this.fixture.componentInstance;
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
        (/** @type {?} */ (this)).fixture.changeDetectorRef.markForCheck();
        (/** @type {?} */ (this)).fixture.detectChanges();
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
        return ((/** @type {?} */ (this.dl.nativeElement))).querySelector(cls);
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
        expect(el ? el.textContent.trim() : '').toBe(value);
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
            const text = el.textContent.trim();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZzIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdGVzdGluZy8iLCJzb3VyY2VzIjpbInNyYy9nMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixLQUFLLEVBQ0wsSUFBSSxFQUVKLE9BQU8sR0FDUixNQUFNLHVCQUF1QixDQUFDOztBQUkvQixNQUFNLE9BQU8sZUFBZSxHQUFHLENBQUM7O0FBQ2hDLE1BQU0sT0FBTyxZQUFZLEdBQUcsR0FBRzs7OztBQUUvQixNQUFNLE9BQU8sTUFBTTs7OztJQUNqQixZQUFtQixVQUErQixJQUFJO1FBQW5DLFlBQU8sR0FBUCxPQUFPLENBQTRCO0lBQUcsQ0FBQzs7OztJQUUxRCxJQUFJLEVBQUU7UUFDSixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO0lBQ25DLENBQUM7Ozs7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUM7SUFDeEMsQ0FBQzs7OztJQUVELElBQUksSUFBSTtRQUNOLDZDQUE2QztRQUM3QyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7OztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDekIsQ0FBQzs7Ozs7Ozs7SUFFRCxTQUFTLENBQUksTUFBUyxFQUFFLElBQWE7UUFDbkMsT0FBTyxDQUFDLHNCQUFzQixDQUFDO1lBQzdCLE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQztZQUNqQixZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUM7U0FDckIsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxtQkFBQSxJQUFJLEVBQUEsQ0FBQztJQUNkLENBQUM7Ozs7Ozs7O0lBRUQsT0FBTyxDQUFDLElBQWEsRUFBRSxFQUFFLEdBQUcsS0FBSztRQUMvQixtQkFBQSxJQUFJLEVBQUEsQ0FBQyxPQUFP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QUFHLENBQUM7SUFDcEIsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ1Ysb0JBQW9CLEVBQUUsQ0FBQztBQUN6QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgZGlzY2FyZFBlcmlvZGljVGFza3MsXG4gIGZsdXNoLFxuICB0aWNrLFxuICBDb21wb25lbnRGaXh0dXJlLFxuICBUZXN0QmVkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlL3Rlc3RpbmcnO1xuXG5leHBvcnQgdHlwZSBQYWdlRzJUeXBlID0gJ2dlb21zJyB8ICd2aWV3cyc7XG5cbmV4cG9ydCBjb25zdCBQYWdlRzJEYXRhQ291bnQgPSAyO1xuZXhwb3J0IGNvbnN0IFBhZ2VHMkhlaWdodCA9IDEwMDtcblxuZXhwb3J0IGNsYXNzIFBhZ2VHMjxUPiB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBmaXh0dXJlOiBDb21wb25lbnRGaXh0dXJlPFQ+ID0gbnVsbCkge31cblxuICBnZXQgZGwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZml4dHVyZS5kZWJ1Z0VsZW1lbnQ7XG4gIH1cblxuICBnZXQgY29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5maXh0dXJlLmNvbXBvbmVudEluc3RhbmNlO1xuICB9XG5cbiAgZ2V0IGNvbXAoKSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXN0cmluZy1saXRlcmFsXG4gICAgcmV0dXJuIHRoaXMuY29udGV4dFsnY29tcCddO1xuICB9XG5cbiAgZ2V0IGNoYXJ0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbXAuY2hhcnQ7XG4gIH1cblxuICBnZW5Nb2R1bGU8TT4obW9kdWxlOiBNLCBjb21wOiBUeXBlPFQ+KSB7XG4gICAgVGVzdEJlZC5jb25maWd1cmVUZXN0aW5nTW9kdWxlKHtcbiAgICAgIGltcG9ydHM6IFttb2R1bGVdLFxuICAgICAgZGVjbGFyYXRpb25zOiBbY29tcF0sXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZW5Db21wKGNvbXA6IFR5cGU8VD4sIGRjID0gZmFsc2UpIHtcbiAgICB0aGlzLmZpeHR1cmUgPSBUZXN0QmVkLmNyZWF0ZUNvbXBvbmVudChjb21wKTtcbiAgICBpZiAoZGMpIHtcbiAgICAgIHRoaXMuZGNGaXJzdCgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG1ha2VNb2R1bGU8TT4obW9kdWxlOiBNLCBjb21wOiBUeXBlPFQ+LCBvcHRpb25zID0geyBkYzogdHJ1ZSB9KTogUGFnZUcyPFQ+IHtcbiAgICB0aGlzLmdlbk1vZHVsZShtb2R1bGUsIGNvbXApLmdlbkNvbXAoY29tcCwgb3B0aW9ucy5kYyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBkY0ZpcnN0KCkge1xuICAgIHRoaXMuZGMoKTtcbiAgICBmbHVzaCgpO1xuICAgIGRpc2NhcmRQZXJpb2RpY1Rhc2tzKCk7XG4gICAgLy8gRklYOiBgRXJyb3IgZHVyaW5nIGNsZWFudXAgb2YgY29tcG9uZW50YFxuICAgIGlmICh0aGlzLmNvbXAgJiYgdHlwZW9mIHRoaXMuY29tcC5jaGFydCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHNweU9uKHRoaXMuY29tcC5jaGFydCwgJ2Rlc3Ryb3knKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBkYygpIHtcbiAgICB0aGlzLmZpeHR1cmUuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgdGhpcy5maXh0dXJlLmRldGVjdENoYW5nZXMoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGVuZCgpIHtcbiAgICAvLyBUaGUgMjAxIHZhbHVlIGlzIGRlbGF5IHZhbHVlXG4gICAgdGljaygyMDEpO1xuICAgIGRpc2NhcmRQZXJpb2RpY1Rhc2tzKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuY29tcC5uZ09uRGVzdHJveSgpO1xuICB9XG5cbiAgbmV3RGF0YShkYXRhOiBhbnkpOiB0aGlzIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tc3RyaW5nLWxpdGVyYWxcbiAgICB0aGlzLmNvbnRleHRbJ2RhdGEnXSA9IGRhdGE7XG4gICAgdGhpcy5kYygpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0RWxzKGNsczogc3RyaW5nKTogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4ge1xuICAgIHJldHVybiAodGhpcy5kbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5xdWVyeVNlbGVjdG9yQWxsKGNscyk7XG4gIH1cblxuICBnZXRFbChjbHM6IHN0cmluZyk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gKHRoaXMuZGwubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkucXVlcnlTZWxlY3RvcihjbHMpO1xuICB9XG5cbiAgaXNDYW52YXMoc3RhdXRzOiBib29sZWFuID0gdHJ1ZSk6IHRoaXMge1xuICAgIHRoaXMuaXNFeGlzdHMoJ2NhbnZhcycsIHN0YXV0cyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBpc1RleHQoY2xzOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBlbCA9IHRoaXMuZ2V0RWwoY2xzKTtcbiAgICBleHBlY3QoZWwgPyBlbC50ZXh0Q29udGVudC50cmltKCkgOiAnJykudG9CZSh2YWx1ZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBpc0V4aXN0cyhjbHM6IHN0cmluZywgc3RhdXRzOiBib29sZWFuID0gdHJ1ZSkge1xuICAgIGV4cGVjdCh0aGlzLmdldEVsKGNscykgIT0gbnVsbCkudG9CZShzdGF1dHMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY2hlY2tPcHRpb25zKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XG4gICAgZXhwZWN0KHRoaXMuY2hhcnQuZ2V0KGtleSkpLnRvQmUodmFsdWUpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY2hlY2tBdHRyT3B0aW9ucyh0eXBlOiBQYWdlRzJUeXBlLCBrZXk6IHN0cmluZywgdmFsdWU6IGFueSkge1xuICAgIGNvbnN0IHggPSB0aGlzLmNoYXJ0LmdldCh0eXBlKVswXS5nZXQoJ2F0dHJPcHRpb25zJylba2V5XTtcbiAgICBleHBlY3QoeC5maWVsZCkudG9CZSh2YWx1ZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBpc1hTY2FsZXNDb3VudChudW06IG51bWJlcikge1xuICAgIGNvbnN0IHggPSB0aGlzLmNoYXJ0LmdldFhTY2FsZXMoKTtcbiAgICBleHBlY3QoeFswXS52YWx1ZXMubGVuZ3RoKS50b0JlKG51bSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBpc1lTY2FsZXNDb3VudChudW06IG51bWJlcikge1xuICAgIGNvbnN0IHkgPSB0aGlzLmNoYXJ0LmdldFlTY2FsZXMoKTtcbiAgICBleHBlY3QoeS5sZW5ndGgpLnRvQmUoMSk7XG4gICAgZXhwZWN0KHlbMF0udmFsdWVzLmxlbmd0aCkudG9CZShudW0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgaXNEYXRhQ291bnQodHlwZTogUGFnZUcyVHlwZSwgbnVtOiBudW1iZXIpIHtcbiAgICBjb25zdCByZXN1bHRzID0gdGhpcy5jaGFydC5nZXQodHlwZSk7XG4gICAgZXhwZWN0KHJlc3VsdHMubGVuZ3RoKS50b0JlR3JlYXRlclRoYW4oMCk7XG4gICAgZXhwZWN0KHJlc3VsdHNbMF0uZ2V0KCdkYXRhJykubGVuZ3RoKS50b0JlKG51bSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjaGVja1Rvb2x0aXAoaW5jbHVkZVRleHQ6IHN0cmluZywgcG9pbnQ/OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0pIHtcbiAgICBpZiAoIXBvaW50KSB7XG4gICAgICBjb25zdCBnMkVsID0gdGhpcy5kbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgICAgcG9pbnQgPSB7XG4gICAgICAgIHg6IGcyRWwub2Zmc2V0V2lkdGggLyAyLFxuICAgICAgICB5OiBnMkVsLm9mZnNldEhlaWdodCAvIDIsXG4gICAgICB9O1xuICAgIH1cbiAgICB0aGlzLmNoYXJ0LnNob3dUb29sdGlwKHBvaW50KTtcbiAgICBjb25zdCBlbCA9IHRoaXMuZ2V0RWwoJy5nMi10b29sdGlwJyk7XG4gICAgaWYgKGluY2x1ZGVUZXh0ID09PSBudWxsKSB7XG4gICAgICBleHBlY3QoZWwgPT0gbnVsbCkudG9CZSh0cnVlLCBgU2hvdWxlIGJlIG5vdCBmb3VuZCBnMi10b29sdGlwIGVsZW1lbnRgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXhwZWN0KGVsICE9IG51bGwpLnRvQmUodHJ1ZSwgYFNob3VsZSBiZSBoYXMgZzItdG9vbHRpcCBlbGVtZW50YCk7XG4gICAgICBjb25zdCB0ZXh0ID0gZWwudGV4dENvbnRlbnQudHJpbSgpO1xuICAgICAgZXhwZWN0KHRleHQuaW5jbHVkZXMoaW5jbHVkZVRleHQpKS50b0JlKFxuICAgICAgICB0cnVlLFxuICAgICAgICBgU2hvdWxlIGJlIGluY2x1ZGUgXCIke2luY2x1ZGVUZXh0fVwiIHRleHQgb2YgdG9vbHRpcCB0ZXh0IGNvbnRleHQgXCIke3RleHR9XCJgLFxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrRGVsYXk8TSwgVD4obW9kdWxlOiBNLCBjb21wOiBUeXBlPFQ+LCBwYWdlOiBQYWdlRzI8VD4gPSBudWxsKSB7XG4gIGlmIChwYWdlID09IG51bGwpIHtcbiAgICBwYWdlID0gbmV3IFBhZ2VHMjxUPigpLm1ha2VNb2R1bGUobW9kdWxlLCBjb21wLCB7IGRjOiBmYWxzZSB9KTtcbiAgfVxuICBjb25zdCBjb250ZXh0ID0gcGFnZS5jb250ZXh0IGFzIGFueTtcbiAgaWYgKHR5cGVvZiBjb250ZXh0LmRlbGF5ID09PSAndW5kZWZpbmVkJykge1xuICAgIGNvbnNvbGUud2FybihgWW91IG11c2UgYmUgZGluZmVkIFwiZGVsYXlcIiBwcm9wZXJ0eSBpbiB0ZXN0IGNvbXBvbmVudGApO1xuICAgIHJldHVybjtcbiAgfVxuICBjb250ZXh0LmRlbGF5ID0gMTAwO1xuICBwYWdlLmRjKCk7XG4gIHBhZ2UuY29tcC5uZ09uRGVzdHJveSgpO1xuICBleHBlY3QocGFnZS5jaGFydCA9PSBudWxsKS50b0JlKHRydWUpO1xuICB0aWNrKDIwMSk7XG4gIGRpc2NhcmRQZXJpb2RpY1Rhc2tzKCk7XG59XG4iXX0=