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
     * @template M
     * @param {?} module
     * @param {?} comp
     * @param {?=} options
     * @return {?}
     */
    makeModule(module, comp, options = { dc: true }) {
        TestBed.configureTestingModule({
            imports: [module],
            declarations: [comp],
        });
        this.fixture = TestBed.createComponent(comp);
        if (options.dc) {
            this.dcFirst();
        }
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
 * @return {?}
 */
export function checkDelay(module, comp) {
    /** @type {?} */
    const page = new PageG2().makeModule(module, comp, { dc: false });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZzIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdGVzdGluZy8iLCJzb3VyY2VzIjpbInNyYy9nMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixLQUFLLEVBQ0wsSUFBSSxFQUVKLE9BQU8sR0FDUixNQUFNLHVCQUF1QixDQUFDOztBQUkvQixNQUFNLE9BQU8sZUFBZSxHQUFHLENBQUM7O0FBQ2hDLE1BQU0sT0FBTyxZQUFZLEdBQUcsR0FBRzs7OztBQUUvQixNQUFNLE9BQU8sTUFBTTs7OztJQUNqQixZQUFtQixVQUErQixJQUFJO1FBQW5DLFlBQU8sR0FBUCxPQUFPLENBQTRCO0lBQUcsQ0FBQzs7OztJQUUxRCxJQUFJLEVBQUU7UUFDSixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO0lBQ25DLENBQUM7Ozs7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUM7SUFDeEMsQ0FBQzs7OztJQUVELElBQUksSUFBSTtRQUNOLDZDQUE2QztRQUM3QyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7OztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDekIsQ0FBQzs7Ozs7Ozs7SUFFRCxVQUFVLENBQUksTUFBUyxFQUFFLElBQWEsRUFBRSxPQUFPLEdBQUcsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFO1FBQzVELE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQztZQUM3QixPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUM7WUFDakIsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDO1NBQ3JCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QyxJQUFJLE9BQU8sQ0FB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Q0FBa0MsQ0FBQyxDQUFDOztrQkFDNUQsSUFBSSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFO1lBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUNyQyxJQUFJLEVBQ0osc0JBQXNCLFdBQVcsbUNBQW1DLElBQUksR0FBRyxDQUM1RSxDQUFDO1NBQ0g7UUFDRCxPQUFPLG1CQUFBLElBQUksRUFBQSxDQUFDO0lBQ2QsQ0FBQztDQUNGOzs7SUEvSWEseUJBQTBDOzs7Ozs7OztBQWlKeEQsTUFBTSxVQUFVLFVBQVUsQ0FBTyxNQUFTLEVBQUUsSUFBYTs7VUFDakQsSUFBSSxHQUFHLElBQUksTUFBTSxFQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUM7O1VBQzlELE9BQU8sR0FBRyxtQkFBQSxJQUFJLENBQUMsT0FBTyxFQUFPO0lBQ25DLElBQUksT0FBTyxPQUFPLENBQUMsS0FBSyxLQUFLLFdBQVcsRUFBRTtRQUN4QyxPQUFPLENBQUMsSUFBSSxDQUFDLHVEQUF1RCxDQUFDLENBQUM7UUFDdEUsT0FBTztLQUNSO0lBQ0QsT0FBTyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7SUFDcEIsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ1Ysb0JBQW9CLEVBQUUsQ0FBQztBQUN6QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgZGlzY2FyZFBlcmlvZGljVGFza3MsXG4gIGZsdXNoLFxuICB0aWNrLFxuICBDb21wb25lbnRGaXh0dXJlLFxuICBUZXN0QmVkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlL3Rlc3RpbmcnO1xuXG5leHBvcnQgdHlwZSBQYWdlRzJUeXBlID0gJ2dlb21zJyB8ICd2aWV3cyc7XG5cbmV4cG9ydCBjb25zdCBQYWdlRzJEYXRhQ291bnQgPSAyO1xuZXhwb3J0IGNvbnN0IFBhZ2VHMkhlaWdodCA9IDEwMDtcblxuZXhwb3J0IGNsYXNzIFBhZ2VHMjxUPiB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBmaXh0dXJlOiBDb21wb25lbnRGaXh0dXJlPFQ+ID0gbnVsbCkge31cblxuICBnZXQgZGwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZml4dHVyZS5kZWJ1Z0VsZW1lbnQ7XG4gIH1cblxuICBnZXQgY29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5maXh0dXJlLmNvbXBvbmVudEluc3RhbmNlO1xuICB9XG5cbiAgZ2V0IGNvbXAoKSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXN0cmluZy1saXRlcmFsXG4gICAgcmV0dXJuIHRoaXMuY29udGV4dFsnY29tcCddO1xuICB9XG5cbiAgZ2V0IGNoYXJ0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbXAuY2hhcnQ7XG4gIH1cblxuICBtYWtlTW9kdWxlPE0+KG1vZHVsZTogTSwgY29tcDogVHlwZTxUPiwgb3B0aW9ucyA9IHsgZGM6IHRydWUgfSk6IFBhZ2VHMjxUPiB7XG4gICAgVGVzdEJlZC5jb25maWd1cmVUZXN0aW5nTW9kdWxlKHtcbiAgICAgIGltcG9ydHM6IFttb2R1bGVdLFxuICAgICAgZGVjbGFyYXRpb25zOiBbY29tcF0sXG4gICAgfSk7XG4gICAgdGhpcy5maXh0dXJlID0gVGVzdEJlZC5jcmVhdGVDb21wb25lbnQoY29tcCk7XG4gICAgaWYgKG9wdGlvbnMuZGMpIHtcbiAgICAgIHRoaXMuZGNGaXJzdCgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGRjRmlyc3QoKSB7XG4gICAgdGhpcy5kYygpO1xuICAgIGZsdXNoKCk7XG4gICAgZGlzY2FyZFBlcmlvZGljVGFza3MoKTtcbiAgICAvLyBGSVg6IGBFcnJvciBkdXJpbmcgY2xlYW51cCBvZiBjb21wb25lbnRgXG4gICAgaWYgKHRoaXMuY29tcCAmJiB0eXBlb2YgdGhpcy5jb21wLmNoYXJ0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgc3B5T24odGhpcy5jb21wLmNoYXJ0LCAnZGVzdHJveScpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGRjKCkge1xuICAgIHRoaXMuZml4dHVyZS5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB0aGlzLmZpeHR1cmUuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZW5kKCkge1xuICAgIC8vIFRoZSAyMDEgdmFsdWUgaXMgZGVsYXkgdmFsdWVcbiAgICB0aWNrKDIwMSk7XG4gICAgZGlzY2FyZFBlcmlvZGljVGFza3MoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5jb21wLm5nT25EZXN0cm95KCk7XG4gIH1cblxuICBuZXdEYXRhKGRhdGE6IGFueSk6IHRoaXMge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1zdHJpbmctbGl0ZXJhbFxuICAgIHRoaXMuY29udGV4dFsnZGF0YSddID0gZGF0YTtcbiAgICB0aGlzLmRjKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXRFbHMoY2xzOiBzdHJpbmcpOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiB7XG4gICAgcmV0dXJuICh0aGlzLmRsLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLnF1ZXJ5U2VsZWN0b3JBbGwoY2xzKTtcbiAgfVxuXG4gIGdldEVsKGNsczogc3RyaW5nKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiAodGhpcy5kbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5xdWVyeVNlbGVjdG9yKGNscyk7XG4gIH1cblxuICBpc0NhbnZhcyhzdGF1dHM6IGJvb2xlYW4gPSB0cnVlKTogdGhpcyB7XG4gICAgdGhpcy5pc0V4aXN0cygnY2FudmFzJywgc3RhdXRzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGlzVGV4dChjbHM6IHN0cmluZywgdmFsdWU6IHN0cmluZykge1xuICAgIGNvbnN0IGVsID0gdGhpcy5nZXRFbChjbHMpO1xuICAgIGV4cGVjdChlbCA/IGVsLnRleHRDb250ZW50LnRyaW0oKSA6ICcnKS50b0JlKHZhbHVlKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGlzRXhpc3RzKGNsczogc3RyaW5nLCBzdGF1dHM6IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgZXhwZWN0KHRoaXMuZ2V0RWwoY2xzKSAhPSBudWxsKS50b0JlKHN0YXV0cyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjaGVja09wdGlvbnMoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcbiAgICBleHBlY3QodGhpcy5jaGFydC5nZXQoa2V5KSkudG9CZSh2YWx1ZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjaGVja0F0dHJPcHRpb25zKHR5cGU6IFBhZ2VHMlR5cGUsIGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XG4gICAgY29uc3QgeCA9IHRoaXMuY2hhcnQuZ2V0KHR5cGUpWzBdLmdldCgnYXR0ck9wdGlvbnMnKVtrZXldO1xuICAgIGV4cGVjdCh4LmZpZWxkKS50b0JlKHZhbHVlKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGlzWFNjYWxlc0NvdW50KG51bTogbnVtYmVyKSB7XG4gICAgY29uc3QgeCA9IHRoaXMuY2hhcnQuZ2V0WFNjYWxlcygpO1xuICAgIGV4cGVjdCh4WzBdLnZhbHVlcy5sZW5ndGgpLnRvQmUobnVtKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGlzWVNjYWxlc0NvdW50KG51bTogbnVtYmVyKSB7XG4gICAgY29uc3QgeSA9IHRoaXMuY2hhcnQuZ2V0WVNjYWxlcygpO1xuICAgIGV4cGVjdCh5Lmxlbmd0aCkudG9CZSgxKTtcbiAgICBleHBlY3QoeVswXS52YWx1ZXMubGVuZ3RoKS50b0JlKG51bSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBpc0RhdGFDb3VudCh0eXBlOiBQYWdlRzJUeXBlLCBudW06IG51bWJlcikge1xuICAgIGNvbnN0IHJlc3VsdHMgPSB0aGlzLmNoYXJ0LmdldCh0eXBlKTtcbiAgICBleHBlY3QocmVzdWx0cy5sZW5ndGgpLnRvQmVHcmVhdGVyVGhhbigwKTtcbiAgICBleHBlY3QocmVzdWx0c1swXS5nZXQoJ2RhdGEnKS5sZW5ndGgpLnRvQmUobnVtKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNoZWNrVG9vbHRpcChpbmNsdWRlVGV4dDogc3RyaW5nLCBwb2ludD86IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSkge1xuICAgIGlmICghcG9pbnQpIHtcbiAgICAgIGNvbnN0IGcyRWwgPSB0aGlzLmRsLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBwb2ludCA9IHtcbiAgICAgICAgeDogZzJFbC5vZmZzZXRXaWR0aCAvIDIsXG4gICAgICAgIHk6IGcyRWwub2Zmc2V0SGVpZ2h0IC8gMixcbiAgICAgIH07XG4gICAgfVxuICAgIHRoaXMuY2hhcnQuc2hvd1Rvb2x0aXAocG9pbnQpO1xuICAgIGNvbnN0IGVsID0gdGhpcy5nZXRFbCgnLmcyLXRvb2x0aXAnKTtcbiAgICBpZiAoaW5jbHVkZVRleHQgPT09IG51bGwpIHtcbiAgICAgIGV4cGVjdChlbCA9PSBudWxsKS50b0JlKHRydWUsIGBTaG91bGUgYmUgbm90IGZvdW5kIGcyLXRvb2x0aXAgZWxlbWVudGApO1xuICAgIH0gZWxzZSB7XG4gICAgICBleHBlY3QoZWwgIT0gbnVsbCkudG9CZSh0cnVlLCBgU2hvdWxlIGJlIGhhcyBnMi10b29sdGlwIGVsZW1lbnRgKTtcbiAgICAgIGNvbnN0IHRleHQgPSBlbC50ZXh0Q29udGVudC50cmltKCk7XG4gICAgICBleHBlY3QodGV4dC5pbmNsdWRlcyhpbmNsdWRlVGV4dCkpLnRvQmUoXG4gICAgICAgIHRydWUsXG4gICAgICAgIGBTaG91bGUgYmUgaW5jbHVkZSBcIiR7aW5jbHVkZVRleHR9XCIgdGV4dCBvZiB0b29sdGlwIHRleHQgY29udGV4dCBcIiR7dGV4dH1cImAsXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tEZWxheTxNLCBUPihtb2R1bGU6IE0sIGNvbXA6IFR5cGU8VD4pIHtcbiAgY29uc3QgcGFnZSA9IG5ldyBQYWdlRzI8VD4oKS5tYWtlTW9kdWxlKG1vZHVsZSwgY29tcCwgeyBkYzogZmFsc2UgfSk7XG4gIGNvbnN0IGNvbnRleHQgPSBwYWdlLmNvbnRleHQgYXMgYW55O1xuICBpZiAodHlwZW9mIGNvbnRleHQuZGVsYXkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgY29uc29sZS53YXJuKGBZb3UgbXVzZSBiZSBkaW5mZWQgXCJkZWxheVwiIHByb3BlcnR5IGluIHRlc3QgY29tcG9uZW50YCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnRleHQuZGVsYXkgPSAxMDA7XG4gIHBhZ2UuZGMoKTtcbiAgcGFnZS5jb21wLm5nT25EZXN0cm95KCk7XG4gIGV4cGVjdChwYWdlLmNoYXJ0ID09IG51bGwpLnRvQmUodHJ1ZSk7XG4gIHRpY2soMjAxKTtcbiAgZGlzY2FyZFBlcmlvZGljVGFza3MoKTtcbn1cbiJdfQ==