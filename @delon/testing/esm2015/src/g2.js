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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZzIuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdnN0cy93b3JrLzEvcy9wYWNrYWdlcy90ZXN0aW5nLyIsInNvdXJjZXMiOlsic3JjL2cyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFvQixvQkFBb0IsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQU1yRyxNQUFNLE9BQU8sZUFBZSxHQUFHLENBQUM7O0FBQ2hDLE1BQU0sT0FBTyxZQUFZLEdBQUcsR0FBRzs7OztBQUUvQixNQUFNLE9BQU8sTUFBTTs7OztJQUNqQixZQUFtQixVQUFzQyxJQUFJO1FBQTFDLFlBQU8sR0FBUCxPQUFPLENBQW1DO0lBQUcsQ0FBQzs7OztJQUVqRSxJQUFJLEVBQUU7UUFDSixPQUFPLG1CQUFBLElBQUksQ0FBQyxPQUFPLEVBQUMsQ0FBQyxZQUFZLENBQUM7SUFDcEMsQ0FBQzs7OztJQUVELElBQUksT0FBTztRQUNULE9BQU8sbUJBQUEsSUFBSSxDQUFDLE9BQU8sRUFBQyxDQUFDLGlCQUFpQixDQUFDO0lBQ3pDLENBQUM7Ozs7SUFFRCxJQUFJLElBQUk7UUFDTiw2Q0FBNkM7UUFDN0MsT0FBTyxDQUFDLG1CQUFBLElBQUksQ0FBQyxPQUFPLEVBQWEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3pCLENBQUM7Ozs7Ozs7O0lBRUQsU0FBUyxDQUFJLE1BQVMsRUFBRSxJQUFhO1FBQ25DLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQztZQUM3QixPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUM7WUFDakIsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDO1NBQ3JCLENBQUMsQ0FBQztRQUNILE9BQU8sbUJBQUEsSUFBSSxFQUFBLENBQUM7SUFDZCxDQUFDOzs7Ozs7OztJQUVELE9BQU8s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SUEvSmEseUJBQWlEOzs7Ozs7Ozs7QUFpSy9ELE1BQU0sVUFBVSxVQUFVLENBQU8sTUFBUyxFQUFFLElBQWEsRUFBRSxPQUF5QixJQUFJO0lBQ3RGLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtRQUNoQixJQUFJLEdBQUcsSUFBSSxNQUFNLEVBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0tBQ2hFOztVQUNLLE9BQU8sR0FBRyxtQkFBQSxJQUFJLENBQUMsT0FBTyxFQUFPO0lBQ25DLElBQUksT0FBTyxPQUFPLENBQUMsS0FBSyxLQUFLLFdBQVcsRUFBRTtRQUN4QyxPQUFPLENBQUMsSUFBSSxDQUFDLHVEQUF1RCxDQUFDLENBQUM7UUFDdEUsT0FBTztLQUNSO0lBQ0QsT0FBTyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7SUFDcEIsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ1Ysb0JBQW9CLEVBQUUsQ0FBQztBQUN6QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGVidWdFbGVtZW50LCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wb25lbnRGaXh0dXJlLCBkaXNjYXJkUGVyaW9kaWNUYXNrcywgZmx1c2gsIFRlc3RCZWQsIHRpY2sgfSBmcm9tICdAYW5ndWxhci9jb3JlL3Rlc3RpbmcnO1xuaW1wb3J0IHsgQ2hhcnQgfSBmcm9tICdAYW50di9nMic7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5leHBvcnQgdHlwZSBQYWdlRzJUeXBlID0gJ2dlb21ldHJpZXMnIHwgJ3ZpZXdzJztcblxuZXhwb3J0IGNvbnN0IFBhZ2VHMkRhdGFDb3VudCA9IDI7XG5leHBvcnQgY29uc3QgUGFnZUcySGVpZ2h0ID0gMTAwO1xuXG5leHBvcnQgY2xhc3MgUGFnZUcyPFQ+IHtcbiAgY29uc3RydWN0b3IocHVibGljIGZpeHR1cmU6IENvbXBvbmVudEZpeHR1cmU8VD4gfCBudWxsID0gbnVsbCkge31cblxuICBnZXQgZGwoKTogRGVidWdFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5maXh0dXJlIS5kZWJ1Z0VsZW1lbnQ7XG4gIH1cblxuICBnZXQgY29udGV4dCgpOiBUIHtcbiAgICByZXR1cm4gdGhpcy5maXh0dXJlIS5jb21wb25lbnRJbnN0YW5jZTtcbiAgfVxuXG4gIGdldCBjb21wKCk6IGFueSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXN0cmluZy1saXRlcmFsXG4gICAgcmV0dXJuICh0aGlzLmNvbnRleHQgYXMgTnpTYWZlQW55KVsnY29tcCddO1xuICB9XG5cbiAgZ2V0IGNoYXJ0KCk6IENoYXJ0IHtcbiAgICByZXR1cm4gdGhpcy5jb21wLmNoYXJ0O1xuICB9XG5cbiAgZ2VuTW9kdWxlPE0+KG1vZHVsZTogTSwgY29tcDogVHlwZTxUPik6IHRoaXMge1xuICAgIFRlc3RCZWQuY29uZmlndXJlVGVzdGluZ01vZHVsZSh7XG4gICAgICBpbXBvcnRzOiBbbW9kdWxlXSxcbiAgICAgIGRlY2xhcmF0aW9uczogW2NvbXBdLFxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2VuQ29tcChjb21wOiBUeXBlPFQ+LCBkYzogYm9vbGVhbiA9IGZhbHNlKTogdGhpcyB7XG4gICAgdGhpcy5maXh0dXJlID0gVGVzdEJlZC5jcmVhdGVDb21wb25lbnQoY29tcCk7XG4gICAgaWYgKGRjKSB7XG4gICAgICB0aGlzLmRjRmlyc3QoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBtYWtlTW9kdWxlPE0+KG1vZHVsZTogTSwgY29tcDogVHlwZTxUPiwgb3B0aW9uczogeyBkYzogYm9vbGVhbiB9ID0geyBkYzogdHJ1ZSB9KTogUGFnZUcyPFQ+IHtcbiAgICB0aGlzLmdlbk1vZHVsZShtb2R1bGUsIGNvbXApLmdlbkNvbXAoY29tcCwgb3B0aW9ucy5kYyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBkY0ZpcnN0KCk6IHRoaXMge1xuICAgIHRoaXMuZGMoKTtcbiAgICBmbHVzaCgpO1xuICAgIGRpc2NhcmRQZXJpb2RpY1Rhc2tzKCk7XG4gICAgLy8gRklYOiBgRXJyb3IgZHVyaW5nIGNsZWFudXAgb2YgY29tcG9uZW50YFxuICAgIGlmICh0aGlzLmNvbXAgJiYgdHlwZW9mIHRoaXMuY29tcC5jaGFydCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHNweU9uKHRoaXMuY29tcC5jaGFydCwgJ2Rlc3Ryb3knKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBkYygpOiB0aGlzIHtcbiAgICB0aGlzLmZpeHR1cmUhLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIHRoaXMuZml4dHVyZSEuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZW5kKCk6IHRoaXMge1xuICAgIC8vIFRoZSAyMDEgdmFsdWUgaXMgZGVsYXkgdmFsdWVcbiAgICB0aWNrKDIwMSk7XG4gICAgZmx1c2goKTtcbiAgICBkaXNjYXJkUGVyaW9kaWNUYXNrcygpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmNvbXAubmdPbkRlc3Ryb3koKTtcbiAgfVxuXG4gIG5ld0RhdGEoZGF0YTogYW55KTogdGhpcyB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXN0cmluZy1saXRlcmFsXG4gICAgKHRoaXMuY29udGV4dCBhcyBOelNhZmVBbnkpWydkYXRhJ10gPSBkYXRhO1xuICAgIHRoaXMuZGMoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldEVscyhjbHM6IHN0cmluZyk6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+IHtcbiAgICByZXR1cm4gKHRoaXMuZGwubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkucXVlcnlTZWxlY3RvckFsbChjbHMpO1xuICB9XG5cbiAgZ2V0RWwoY2xzOiBzdHJpbmcpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuICh0aGlzLmRsLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLnF1ZXJ5U2VsZWN0b3IoY2xzKSBhcyBIVE1MRWxlbWVudDtcbiAgfVxuXG4gIGdldENvbnRyb2xsZXIodHlwZTogJ2F4aXMnIHwgJ2xlZ2VuZCcpOiBOelNhZmVBbnkge1xuICAgIHJldHVybiB0aGlzLmNoYXJ0LmdldENvbnRyb2xsZXIodHlwZSkgYXMgTnpTYWZlQW55O1xuICB9XG5cbiAgaXNDYW52YXMoc3RhdXRzOiBib29sZWFuID0gdHJ1ZSk6IHRoaXMge1xuICAgIHRoaXMuaXNFeGlzdHMoJ2NhbnZhcycsIHN0YXV0cyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBpc1RleHQoY2xzOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB0aGlzIHtcbiAgICBjb25zdCBlbCA9IHRoaXMuZ2V0RWwoY2xzKTtcbiAgICBleHBlY3QoZWwgPyBlbC50ZXh0Q29udGVudCEudHJpbSgpIDogJycpLnRvQmUodmFsdWUpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgaXNFeGlzdHMoY2xzOiBzdHJpbmcsIHN0YXV0czogYm9vbGVhbiA9IHRydWUpOiB0aGlzIHtcbiAgICBleHBlY3QodGhpcy5nZXRFbChjbHMpICE9IG51bGwpLnRvQmUoc3RhdXRzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNoZWNrT3B0aW9ucyhrZXk6IHN0cmluZywgdmFsdWU6IGFueSk6IHRoaXMge1xuICAgIGV4cGVjdCgodGhpcy5jaGFydCBhcyBOelNhZmVBbnkpW2tleV0pLnRvQmUodmFsdWUpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY2hlY2tBdHRyT3B0aW9ucyh0eXBlOiBQYWdlRzJUeXBlLCBrZXk6IHN0cmluZywgdmFsdWU6IGFueSk6IHRoaXMge1xuICAgIGNvbnN0IHggPSAodGhpcy5jaGFydFt0eXBlXVswXSBhcyBOelNhZmVBbnkpLmF0dHJpYnV0ZU9wdGlvbltrZXldO1xuICAgIGV4cGVjdCh4LmZpZWxkKS50b0JlKHZhbHVlKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGlzWFNjYWxlc0NvdW50KG51bTogbnVtYmVyKTogdGhpcyB7XG4gICAgY29uc3QgeCA9IHRoaXMuY2hhcnQuZ2V0WFNjYWxlKCk7XG4gICAgZXhwZWN0KHgudmFsdWVzIS5sZW5ndGgpLnRvQmUobnVtKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGlzWVNjYWxlc0NvdW50KG51bTogbnVtYmVyKTogdGhpcyB7XG4gICAgY29uc3QgeSA9IHRoaXMuY2hhcnQuZ2V0WVNjYWxlcygpO1xuICAgIGV4cGVjdCh5Lmxlbmd0aCkudG9CZSgxKTtcbiAgICBleHBlY3QoeVswXS52YWx1ZXMhLmxlbmd0aCkudG9CZShudW0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgaXNEYXRhQ291bnQodHlwZTogUGFnZUcyVHlwZSwgbnVtOiBudW1iZXIpOiB0aGlzIHtcbiAgICBjb25zdCByZXN1bHRzID0gdGhpcy5jaGFydFt0eXBlXTtcbiAgICBleHBlY3QocmVzdWx0cy5sZW5ndGgpLnRvQmVHcmVhdGVyVGhhbigwKTtcbiAgICBleHBlY3QocmVzdWx0c1swXS5kYXRhLmxlbmd0aCkudG9CZShudW0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0IGZpcnN0RGF0YVBvaW50KCk6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1zdHJpbmctbGl0ZXJhbFxuICAgIHJldHVybiB0aGlzLmNoYXJ0LmdldFhZKCh0aGlzLmNvbnRleHQgYXMgTnpTYWZlQW55KVsnZGF0YSddWzBdKTtcbiAgfVxuXG4gIGNoZWNrVG9vbHRpcChfaW5jbHVkZVRleHQ6IHN0cmluZyB8IG51bGwsIHBvaW50PzogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9KTogdGhpcyB7XG4gICAgaWYgKCFwb2ludCkge1xuICAgICAgcG9pbnQgPSB0aGlzLmZpcnN0RGF0YVBvaW50O1xuICAgIH1cbiAgICB0aGlzLmNoYXJ0LnNob3dUb29sdGlwKHBvaW50KTtcbiAgICBleHBlY3QodGhpcy5jaGFydC5nZXRDb250cm9sbGVyKCd0b29sdGlwJykgIT0gbnVsbCkudG9CZSh0cnVlKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNoZWNrQ2xpY2tJdGVtKCk6IHRoaXMge1xuICAgIGNvbnN0IHBvaW50ID0gdGhpcy5maXJzdERhdGFQb2ludDtcbiAgICBjb25zdCBjbGllbnRQb2ludCA9IHRoaXMuY2hhcnQuY2FudmFzLmdldENsaWVudEJ5UG9pbnQocG9pbnQueCwgcG9pbnQueSk7XG4gICAgY29uc3QgZXZlbnQgPSBuZXcgTW91c2VFdmVudCgnY2xpY2snLCB7XG4gICAgICBjbGllbnRYOiBjbGllbnRQb2ludC54LFxuICAgICAgY2xpZW50WTogY2xpZW50UG9pbnQueSxcbiAgICB9KTtcbiAgICAodGhpcy5jaGFydC5jYW52YXMuZ2V0KCdlbCcpIGFzIEhUTUxFbGVtZW50KS5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tEZWxheTxNLCBUPihtb2R1bGU6IE0sIGNvbXA6IFR5cGU8VD4sIHBhZ2U6IFBhZ2VHMjxUPiB8IG51bGwgPSBudWxsKTogdm9pZCB7XG4gIGlmIChwYWdlID09IG51bGwpIHtcbiAgICBwYWdlID0gbmV3IFBhZ2VHMjxUPigpLm1ha2VNb2R1bGUobW9kdWxlLCBjb21wLCB7IGRjOiBmYWxzZSB9KTtcbiAgfVxuICBjb25zdCBjb250ZXh0ID0gcGFnZS5jb250ZXh0IGFzIGFueTtcbiAgaWYgKHR5cGVvZiBjb250ZXh0LmRlbGF5ID09PSAndW5kZWZpbmVkJykge1xuICAgIGNvbnNvbGUud2FybihgWW91IG11c2UgYmUgZGluZmVkIFwiZGVsYXlcIiBwcm9wZXJ0eSBpbiB0ZXN0IGNvbXBvbmVudGApO1xuICAgIHJldHVybjtcbiAgfVxuICBjb250ZXh0LmRlbGF5ID0gMTAwO1xuICBwYWdlLmRjKCk7XG4gIHBhZ2UuY29tcC5uZ09uRGVzdHJveSgpO1xuICBleHBlY3QocGFnZS5jaGFydCA9PSBudWxsKS50b0JlKHRydWUpO1xuICB0aWNrKDIwMSk7XG4gIGRpc2NhcmRQZXJpb2RpY1Rhc2tzKCk7XG59XG4iXX0=