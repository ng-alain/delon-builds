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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZzIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdGVzdGluZy8iLCJzb3VyY2VzIjpbInNyYy9nMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBb0Isb0JBQW9CLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFPckcsTUFBTSxPQUFPLGVBQWUsR0FBRyxDQUFDOztBQUNoQyxNQUFNLE9BQU8sWUFBWSxHQUFHLEdBQUc7Ozs7QUFFL0IsTUFBTSxPQUFPLE1BQU07Ozs7SUFDakIsWUFBbUIsVUFBc0MsSUFBSTtRQUExQyxZQUFPLEdBQVAsT0FBTyxDQUFtQztJQUFHLENBQUM7Ozs7SUFFakUsSUFBSSxFQUFFO1FBQ0osT0FBTyxtQkFBQSxJQUFJLENBQUMsT0FBTyxFQUFDLENBQUMsWUFBWSxDQUFDO0lBQ3BDLENBQUM7Ozs7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLG1CQUFBLElBQUksQ0FBQyxPQUFPLEVBQUMsQ0FBQyxpQkFBaUIsQ0FBQztJQUN6QyxDQUFDOzs7O0lBRUQsSUFBSSxJQUFJO1FBQ04sNkNBQTZDO1FBQzdDLE9BQU8sQ0FBQyxtQkFBQSxJQUFJLENBQUMsT0FBTyxFQUFhLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7O0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN6QixDQUFDOzs7Ozs7OztJQUVELFNBQVMsQ0FBSSxNQUFTLEVBQUUsSUFBYTtRQUNuQyxPQUFPLENBQUMsc0JBQXNCLENBQUM7WUFDN0IsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDO1lBQ2pCLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQztTQUNyQixDQUFDLENBQUM7UUFDSCxPQUFPLG1CQUFBLElBQUksRUFBQSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7Ozs7SUFFRCxPQUFPLENBQUMsSUFBYSxFQUFFLEVB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QWlEOzs7Ozs7Ozs7QUFpSy9ELE1BQU0sVUFBVSxVQUFVLENBQU8sTUFBUyxFQUFFLElBQWEsRUFBRSxPQUF5QixJQUFJO0lBQ3RGLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtRQUNoQixJQUFJLEdBQUcsSUFBSSxNQUFNLEVBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0tBQ2hFOztVQUNLLE9BQU8sR0FBRyxtQkFBQSxJQUFJLENBQUMsT0FBTyxFQUFPO0lBQ25DLElBQUksT0FBTyxPQUFPLENBQUMsS0FBSyxLQUFLLFdBQVcsRUFBRTtRQUN4QyxPQUFPLENBQUMsSUFBSSxDQUFDLHVEQUF1RCxDQUFDLENBQUM7UUFDdEUsT0FBTztLQUNSO0lBQ0QsT0FBTyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7SUFDcEIsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ1Ysb0JBQW9CLEVBQUUsQ0FBQztBQUN6QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tcG9uZW50Rml4dHVyZSwgZGlzY2FyZFBlcmlvZGljVGFza3MsIGZsdXNoLCBUZXN0QmVkLCB0aWNrIH0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcbmltcG9ydCB7IENoYXJ0IH0gZnJvbSAnQGFudHYvZzInO1xuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICdAYW50di9nMi9saWIvaW50ZXJmYWNlJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbmV4cG9ydCB0eXBlIFBhZ2VHMlR5cGUgPSAnZ2VvbWV0cmllcycgfCAndmlld3MnO1xuXG5leHBvcnQgY29uc3QgUGFnZUcyRGF0YUNvdW50ID0gMjtcbmV4cG9ydCBjb25zdCBQYWdlRzJIZWlnaHQgPSAxMDA7XG5cbmV4cG9ydCBjbGFzcyBQYWdlRzI8VD4ge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZml4dHVyZTogQ29tcG9uZW50Rml4dHVyZTxUPiB8IG51bGwgPSBudWxsKSB7fVxuXG4gIGdldCBkbCgpIHtcbiAgICByZXR1cm4gdGhpcy5maXh0dXJlIS5kZWJ1Z0VsZW1lbnQ7XG4gIH1cblxuICBnZXQgY29udGV4dCgpOiBUIHtcbiAgICByZXR1cm4gdGhpcy5maXh0dXJlIS5jb21wb25lbnRJbnN0YW5jZTtcbiAgfVxuXG4gIGdldCBjb21wKCkge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1zdHJpbmctbGl0ZXJhbFxuICAgIHJldHVybiAodGhpcy5jb250ZXh0IGFzIE56U2FmZUFueSlbJ2NvbXAnXTtcbiAgfVxuXG4gIGdldCBjaGFydCgpOiBDaGFydCB7XG4gICAgcmV0dXJuIHRoaXMuY29tcC5jaGFydDtcbiAgfVxuXG4gIGdlbk1vZHVsZTxNPihtb2R1bGU6IE0sIGNvbXA6IFR5cGU8VD4pIHtcbiAgICBUZXN0QmVkLmNvbmZpZ3VyZVRlc3RpbmdNb2R1bGUoe1xuICAgICAgaW1wb3J0czogW21vZHVsZV0sXG4gICAgICBkZWNsYXJhdGlvbnM6IFtjb21wXSxcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdlbkNvbXAoY29tcDogVHlwZTxUPiwgZGMgPSBmYWxzZSkge1xuICAgIHRoaXMuZml4dHVyZSA9IFRlc3RCZWQuY3JlYXRlQ29tcG9uZW50KGNvbXApO1xuICAgIGlmIChkYykge1xuICAgICAgdGhpcy5kY0ZpcnN0KCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbWFrZU1vZHVsZTxNPihtb2R1bGU6IE0sIGNvbXA6IFR5cGU8VD4sIG9wdGlvbnMgPSB7IGRjOiB0cnVlIH0pOiBQYWdlRzI8VD4ge1xuICAgIHRoaXMuZ2VuTW9kdWxlKG1vZHVsZSwgY29tcCkuZ2VuQ29tcChjb21wLCBvcHRpb25zLmRjKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGRjRmlyc3QoKSB7XG4gICAgdGhpcy5kYygpO1xuICAgIGZsdXNoKCk7XG4gICAgZGlzY2FyZFBlcmlvZGljVGFza3MoKTtcbiAgICAvLyBGSVg6IGBFcnJvciBkdXJpbmcgY2xlYW51cCBvZiBjb21wb25lbnRgXG4gICAgaWYgKHRoaXMuY29tcCAmJiB0eXBlb2YgdGhpcy5jb21wLmNoYXJ0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgc3B5T24odGhpcy5jb21wLmNoYXJ0LCAnZGVzdHJveScpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGRjKCkge1xuICAgIHRoaXMuZml4dHVyZSEuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgdGhpcy5maXh0dXJlIS5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBlbmQoKSB7XG4gICAgLy8gVGhlIDIwMSB2YWx1ZSBpcyBkZWxheSB2YWx1ZVxuICAgIHRpY2soMjAxKTtcbiAgICBmbHVzaCgpO1xuICAgIGRpc2NhcmRQZXJpb2RpY1Rhc2tzKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuY29tcC5uZ09uRGVzdHJveSgpO1xuICB9XG5cbiAgbmV3RGF0YShkYXRhOiBhbnkpOiB0aGlzIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tc3RyaW5nLWxpdGVyYWxcbiAgICAodGhpcy5jb250ZXh0IGFzIE56U2FmZUFueSlbJ2RhdGEnXSA9IGRhdGE7XG4gICAgdGhpcy5kYygpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0RWxzKGNsczogc3RyaW5nKTogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4ge1xuICAgIHJldHVybiAodGhpcy5kbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5xdWVyeVNlbGVjdG9yQWxsKGNscyk7XG4gIH1cblxuICBnZXRFbChjbHM6IHN0cmluZyk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gKHRoaXMuZGwubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkucXVlcnlTZWxlY3RvcihjbHMpIGFzIEhUTUxFbGVtZW50O1xuICB9XG5cbiAgZ2V0Q29udHJvbGxlcih0eXBlOiAnYXhpcycgfCAnbGVnZW5kJykge1xuICAgIHJldHVybiB0aGlzLmNoYXJ0LmdldENvbnRyb2xsZXIodHlwZSkgYXMgTnpTYWZlQW55O1xuICB9XG5cbiAgaXNDYW52YXMoc3RhdXRzOiBib29sZWFuID0gdHJ1ZSk6IHRoaXMge1xuICAgIHRoaXMuaXNFeGlzdHMoJ2NhbnZhcycsIHN0YXV0cyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBpc1RleHQoY2xzOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBlbCA9IHRoaXMuZ2V0RWwoY2xzKTtcbiAgICBleHBlY3QoZWwgPyBlbC50ZXh0Q29udGVudCEudHJpbSgpIDogJycpLnRvQmUodmFsdWUpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgaXNFeGlzdHMoY2xzOiBzdHJpbmcsIHN0YXV0czogYm9vbGVhbiA9IHRydWUpIHtcbiAgICBleHBlY3QodGhpcy5nZXRFbChjbHMpICE9IG51bGwpLnRvQmUoc3RhdXRzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNoZWNrT3B0aW9ucyhrZXk6IHN0cmluZywgdmFsdWU6IGFueSkge1xuICAgIGV4cGVjdCgodGhpcy5jaGFydCBhcyBOelNhZmVBbnkpW2tleV0pLnRvQmUodmFsdWUpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY2hlY2tBdHRyT3B0aW9ucyh0eXBlOiBQYWdlRzJUeXBlLCBrZXk6IHN0cmluZywgdmFsdWU6IGFueSkge1xuICAgIGNvbnN0IHggPSAodGhpcy5jaGFydFt0eXBlXVswXSBhcyBOelNhZmVBbnkpLmF0dHJpYnV0ZU9wdGlvbltrZXldO1xuICAgIGV4cGVjdCh4LmZpZWxkKS50b0JlKHZhbHVlKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGlzWFNjYWxlc0NvdW50KG51bTogbnVtYmVyKSB7XG4gICAgY29uc3QgeCA9IHRoaXMuY2hhcnQuZ2V0WFNjYWxlKCk7XG4gICAgZXhwZWN0KHgudmFsdWVzIS5sZW5ndGgpLnRvQmUobnVtKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGlzWVNjYWxlc0NvdW50KG51bTogbnVtYmVyKSB7XG4gICAgY29uc3QgeSA9IHRoaXMuY2hhcnQuZ2V0WVNjYWxlcygpO1xuICAgIGV4cGVjdCh5Lmxlbmd0aCkudG9CZSgxKTtcbiAgICBleHBlY3QoeVswXS52YWx1ZXMhLmxlbmd0aCkudG9CZShudW0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgaXNEYXRhQ291bnQodHlwZTogUGFnZUcyVHlwZSwgbnVtOiBudW1iZXIpIHtcbiAgICBjb25zdCByZXN1bHRzID0gdGhpcy5jaGFydFt0eXBlXTtcbiAgICBleHBlY3QocmVzdWx0cy5sZW5ndGgpLnRvQmVHcmVhdGVyVGhhbigwKTtcbiAgICBleHBlY3QocmVzdWx0c1swXS5kYXRhLmxlbmd0aCkudG9CZShudW0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0IGZpcnN0RGF0YVBvaW50KCk6IFBvaW50IHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXN0cmluZy1saXRlcmFsXG4gICAgcmV0dXJuIHRoaXMuY2hhcnQuZ2V0WFkoKHRoaXMuY29udGV4dCBhcyBOelNhZmVBbnkpWydkYXRhJ11bMF0pO1xuICB9XG5cbiAgY2hlY2tUb29sdGlwKF9pbmNsdWRlVGV4dDogc3RyaW5nIHwgbnVsbCwgcG9pbnQ/OiBQb2ludCkge1xuICAgIGlmICghcG9pbnQpIHtcbiAgICAgIHBvaW50ID0gdGhpcy5maXJzdERhdGFQb2ludDtcbiAgICB9XG4gICAgdGhpcy5jaGFydC5zaG93VG9vbHRpcChwb2ludCk7XG4gICAgZXhwZWN0KHRoaXMuY2hhcnQuZ2V0Q29udHJvbGxlcigndG9vbHRpcCcpICE9IG51bGwpLnRvQmUodHJ1ZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjaGVja0NsaWNrSXRlbSgpOiB0aGlzIHtcbiAgICBjb25zdCBwb2ludCA9IHRoaXMuZmlyc3REYXRhUG9pbnQ7XG4gICAgY29uc3QgY2xpZW50UG9pbnQgPSB0aGlzLmNoYXJ0LmNhbnZhcy5nZXRDbGllbnRCeVBvaW50KHBvaW50LngsIHBvaW50LnkpO1xuICAgIGNvbnN0IGV2ZW50ID0gbmV3IE1vdXNlRXZlbnQoJ2NsaWNrJywge1xuICAgICAgY2xpZW50WDogY2xpZW50UG9pbnQueCxcbiAgICAgIGNsaWVudFk6IGNsaWVudFBvaW50LnksXG4gICAgfSk7XG4gICAgKHRoaXMuY2hhcnQuY2FudmFzLmdldCgnZWwnKSBhcyBIVE1MRWxlbWVudCkuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrRGVsYXk8TSwgVD4obW9kdWxlOiBNLCBjb21wOiBUeXBlPFQ+LCBwYWdlOiBQYWdlRzI8VD4gfCBudWxsID0gbnVsbCkge1xuICBpZiAocGFnZSA9PSBudWxsKSB7XG4gICAgcGFnZSA9IG5ldyBQYWdlRzI8VD4oKS5tYWtlTW9kdWxlKG1vZHVsZSwgY29tcCwgeyBkYzogZmFsc2UgfSk7XG4gIH1cbiAgY29uc3QgY29udGV4dCA9IHBhZ2UuY29udGV4dCBhcyBhbnk7XG4gIGlmICh0eXBlb2YgY29udGV4dC5kZWxheSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjb25zb2xlLndhcm4oYFlvdSBtdXNlIGJlIGRpbmZlZCBcImRlbGF5XCIgcHJvcGVydHkgaW4gdGVzdCBjb21wb25lbnRgKTtcbiAgICByZXR1cm47XG4gIH1cbiAgY29udGV4dC5kZWxheSA9IDEwMDtcbiAgcGFnZS5kYygpO1xuICBwYWdlLmNvbXAubmdPbkRlc3Ryb3koKTtcbiAgZXhwZWN0KHBhZ2UuY2hhcnQgPT0gbnVsbCkudG9CZSh0cnVlKTtcbiAgdGljaygyMDEpO1xuICBkaXNjYXJkUGVyaW9kaWNUYXNrcygpO1xufVxuIl19