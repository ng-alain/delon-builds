/**
 * @fileoverview added by tsickle
 * Generated from: src/g2.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { discardPeriodicTasks, flush, TestBed, tick } from '@angular/core/testing';
/** @type {?} */
export var PageG2DataCount = 2;
/** @type {?} */
export var PageG2Height = 100;
/**
 * @template T
 */
var /**
 * @template T
 */
PageG2 = /** @class */ (function () {
    function PageG2(fixture) {
        if (fixture === void 0) { fixture = null; }
        this.fixture = fixture;
    }
    Object.defineProperty(PageG2.prototype, "dl", {
        get: /**
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (this.fixture)).debugElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageG2.prototype, "context", {
        get: /**
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (this.fixture)).componentInstance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageG2.prototype, "comp", {
        get: /**
         * @return {?}
         */
        function () {
            // tslint:disable-next-line:no-string-literal
            return ((/** @type {?} */ (this.context)))['comp'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageG2.prototype, "chart", {
        get: /**
         * @return {?}
         */
        function () {
            return this.comp.chart;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @template THIS,M
     * @this {THIS}
     * @param {?} module
     * @param {?} comp
     * @return {THIS}
     */
    PageG2.prototype.genModule = /**
     * @template THIS,M
     * @this {THIS}
     * @param {?} module
     * @param {?} comp
     * @return {THIS}
     */
    function (module, comp) {
        TestBed.configureTestingModule({
            imports: [module],
            declarations: [comp],
        });
        return (/** @type {?} */ (this));
    };
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} comp
     * @param {?=} dc
     * @return {THIS}
     */
    PageG2.prototype.genComp = /**
     * @template THIS
     * @this {THIS}
     * @param {?} comp
     * @param {?=} dc
     * @return {THIS}
     */
    function (comp, dc) {
        if (dc === void 0) { dc = false; }
        (/** @type {?} */ (this)).fixture = TestBed.createComponent(comp);
        if (dc) {
            (/** @type {?} */ (this)).dcFirst();
        }
        return (/** @type {?} */ (this));
    };
    /**
     * @template M
     * @param {?} module
     * @param {?} comp
     * @param {?=} options
     * @return {?}
     */
    PageG2.prototype.makeModule = /**
     * @template M
     * @param {?} module
     * @param {?} comp
     * @param {?=} options
     * @return {?}
     */
    function (module, comp, options) {
        if (options === void 0) { options = { dc: true }; }
        this.genModule(module, comp).genComp(comp, options.dc);
        return this;
    };
    /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    PageG2.prototype.dcFirst = /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    function () {
        (/** @type {?} */ (this)).dc();
        flush();
        discardPeriodicTasks();
        // FIX: `Error during cleanup of component`
        if ((/** @type {?} */ (this)).comp && typeof (/** @type {?} */ (this)).comp.chart !== 'undefined') {
            spyOn((/** @type {?} */ (this)).comp.chart, 'destroy');
        }
        return (/** @type {?} */ (this));
    };
    /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    PageG2.prototype.dc = /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    function () {
        (/** @type {?} */ ((/** @type {?} */ (this)).fixture)).changeDetectorRef.markForCheck();
        (/** @type {?} */ ((/** @type {?} */ (this)).fixture)).detectChanges();
        return (/** @type {?} */ (this));
    };
    /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    PageG2.prototype.end = /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    function () {
        // The 201 value is delay value
        tick(201);
        flush();
        discardPeriodicTasks();
        return (/** @type {?} */ (this));
    };
    /**
     * @return {?}
     */
    PageG2.prototype.destroy = /**
     * @return {?}
     */
    function () {
        this.comp.ngOnDestroy();
    };
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} data
     * @return {THIS}
     */
    PageG2.prototype.newData = /**
     * @template THIS
     * @this {THIS}
     * @param {?} data
     * @return {THIS}
     */
    function (data) {
        // tslint:disable-next-line:no-string-literal
        ((/** @type {?} */ ((/** @type {?} */ (this)).context)))['data'] = data;
        (/** @type {?} */ (this)).dc();
        return (/** @type {?} */ (this));
    };
    /**
     * @param {?} cls
     * @return {?}
     */
    PageG2.prototype.getEls = /**
     * @param {?} cls
     * @return {?}
     */
    function (cls) {
        return ((/** @type {?} */ (this.dl.nativeElement))).querySelectorAll(cls);
    };
    /**
     * @param {?} cls
     * @return {?}
     */
    PageG2.prototype.getEl = /**
     * @param {?} cls
     * @return {?}
     */
    function (cls) {
        return (/** @type {?} */ (((/** @type {?} */ (this.dl.nativeElement))).querySelector(cls)));
    };
    /**
     * @param {?} type
     * @return {?}
     */
    PageG2.prototype.getController = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        return (/** @type {?} */ (this.chart.getController(type)));
    };
    /**
     * @template THIS
     * @this {THIS}
     * @param {?=} stauts
     * @return {THIS}
     */
    PageG2.prototype.isCanvas = /**
     * @template THIS
     * @this {THIS}
     * @param {?=} stauts
     * @return {THIS}
     */
    function (stauts) {
        if (stauts === void 0) { stauts = true; }
        (/** @type {?} */ (this)).isExists('canvas', stauts);
        return (/** @type {?} */ (this));
    };
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} cls
     * @param {?} value
     * @return {THIS}
     */
    PageG2.prototype.isText = /**
     * @template THIS
     * @this {THIS}
     * @param {?} cls
     * @param {?} value
     * @return {THIS}
     */
    function (cls, value) {
        /** @type {?} */
        var el = (/** @type {?} */ (this)).getEl(cls);
        expect(el ? (/** @type {?} */ (el.textContent)).trim() : '').toBe(value);
        return (/** @type {?} */ (this));
    };
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} cls
     * @param {?=} stauts
     * @return {THIS}
     */
    PageG2.prototype.isExists = /**
     * @template THIS
     * @this {THIS}
     * @param {?} cls
     * @param {?=} stauts
     * @return {THIS}
     */
    function (cls, stauts) {
        if (stauts === void 0) { stauts = true; }
        expect((/** @type {?} */ (this)).getEl(cls) != null).toBe(stauts);
        return (/** @type {?} */ (this));
    };
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} key
     * @param {?} value
     * @return {THIS}
     */
    PageG2.prototype.checkOptions = /**
     * @template THIS
     * @this {THIS}
     * @param {?} key
     * @param {?} value
     * @return {THIS}
     */
    function (key, value) {
        expect(((/** @type {?} */ ((/** @type {?} */ (this)).chart)))[key]).toBe(value);
        return (/** @type {?} */ (this));
    };
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} type
     * @param {?} key
     * @param {?} value
     * @return {THIS}
     */
    PageG2.prototype.checkAttrOptions = /**
     * @template THIS
     * @this {THIS}
     * @param {?} type
     * @param {?} key
     * @param {?} value
     * @return {THIS}
     */
    function (type, key, value) {
        /** @type {?} */
        var x = ((/** @type {?} */ ((/** @type {?} */ (this)).chart[type][0]))).attributeOption[key];
        expect(x.field).toBe(value);
        return (/** @type {?} */ (this));
    };
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} num
     * @return {THIS}
     */
    PageG2.prototype.isXScalesCount = /**
     * @template THIS
     * @this {THIS}
     * @param {?} num
     * @return {THIS}
     */
    function (num) {
        /** @type {?} */
        var x = (/** @type {?} */ (this)).chart.getXScale();
        expect((/** @type {?} */ (x.values)).length).toBe(num);
        return (/** @type {?} */ (this));
    };
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} num
     * @return {THIS}
     */
    PageG2.prototype.isYScalesCount = /**
     * @template THIS
     * @this {THIS}
     * @param {?} num
     * @return {THIS}
     */
    function (num) {
        /** @type {?} */
        var y = (/** @type {?} */ (this)).chart.getYScales();
        expect(y.length).toBe(1);
        expect((/** @type {?} */ (y[0].values)).length).toBe(num);
        return (/** @type {?} */ (this));
    };
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} type
     * @param {?} num
     * @return {THIS}
     */
    PageG2.prototype.isDataCount = /**
     * @template THIS
     * @this {THIS}
     * @param {?} type
     * @param {?} num
     * @return {THIS}
     */
    function (type, num) {
        /** @type {?} */
        var results = (/** @type {?} */ (this)).chart[type];
        expect(results.length).toBeGreaterThan(0);
        expect(results[0].data.length).toBe(num);
        return (/** @type {?} */ (this));
    };
    Object.defineProperty(PageG2.prototype, "firstDataPoint", {
        get: /**
         * @return {?}
         */
        function () {
            // tslint:disable-next-line: no-string-literal
            return this.chart.getXY(((/** @type {?} */ (this.context)))['data'][0]);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} _includeText
     * @param {?=} point
     * @return {THIS}
     */
    PageG2.prototype.checkTooltip = /**
     * @template THIS
     * @this {THIS}
     * @param {?} _includeText
     * @param {?=} point
     * @return {THIS}
     */
    function (_includeText, point) {
        if (!point) {
            point = (/** @type {?} */ (this)).firstDataPoint;
        }
        (/** @type {?} */ (this)).chart.showTooltip(point);
        expect((/** @type {?} */ (this)).chart.getController('tooltip') != null).toBe(true);
        return (/** @type {?} */ (this));
    };
    /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    PageG2.prototype.checkClickItem = /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    function () {
        /** @type {?} */
        var point = (/** @type {?} */ (this)).firstDataPoint;
        /** @type {?} */
        var clientPoint = (/** @type {?} */ (this)).chart.canvas.getClientByPoint(point.x, point.y);
        /** @type {?} */
        var event = new MouseEvent('click', {
            clientX: clientPoint.x,
            clientY: clientPoint.y,
        });
        ((/** @type {?} */ ((/** @type {?} */ (this)).chart.canvas.get('el')))).dispatchEvent(event);
        return (/** @type {?} */ (this));
    };
    return PageG2;
}());
/**
 * @template T
 */
export { PageG2 };
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
export function checkDelay(module, comp, page) {
    if (page === void 0) { page = null; }
    if (page == null) {
        page = new PageG2().makeModule(module, comp, { dc: false });
    }
    /** @type {?} */
    var context = (/** @type {?} */ (page.context));
    if (typeof context.delay === 'undefined') {
        console.warn("You muse be dinfed \"delay\" property in test component");
        return;
    }
    context.delay = 100;
    page.dc();
    page.comp.ngOnDestroy();
    expect(page.chart == null).toBe(true);
    tick(201);
    discardPeriodicTasks();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZzIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdGVzdGluZy8iLCJzb3VyY2VzIjpbInNyYy9nMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBb0Isb0JBQW9CLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFNckcsTUFBTSxLQUFPLGVBQWUsR0FBRyxDQUFDOztBQUNoQyxNQUFNLEtBQU8sWUFBWSxHQUFHLEdBQUc7Ozs7QUFFL0I7Ozs7SUFDRSxnQkFBbUIsT0FBMEM7UUFBMUMsd0JBQUEsRUFBQSxjQUEwQztRQUExQyxZQUFPLEdBQVAsT0FBTyxDQUFtQztJQUFHLENBQUM7SUFFakUsc0JBQUksc0JBQUU7Ozs7UUFBTjtZQUNFLE9BQU8sbUJBQUEsSUFBSSxDQUFDLE9BQU8sRUFBQyxDQUFDLFlBQVksQ0FBQztRQUNwQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDJCQUFPOzs7O1FBQVg7WUFDRSxPQUFPLG1CQUFBLElBQUksQ0FBQyxPQUFPLEVBQUMsQ0FBQyxpQkFBaUIsQ0FBQztRQUN6QyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHdCQUFJOzs7O1FBQVI7WUFDRSw2Q0FBNkM7WUFDN0MsT0FBTyxDQUFDLG1CQUFBLElBQUksQ0FBQyxPQUFPLEVBQWEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdDLENBQUM7OztPQUFBO0lBRUQsc0JBQUkseUJBQUs7Ozs7UUFBVDtZQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDekIsQ0FBQzs7O09BQUE7Ozs7Ozs7O0lBRUQsMEJBQVM7Ozs7Ozs7SUFBVCxVQUFhLE1BQVMsRUFBRSxJQUFhO1FBQ25DLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQztZQUM3QixPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUM7WUFDakIsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDO1NBQ3JCLENBQUMsQ0FBQztRQUNI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QUFLLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNWLG9CQUFvQixFQUFFLENBQUM7QUFDekIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBvbmVudEZpeHR1cmUsIGRpc2NhcmRQZXJpb2RpY1Rhc2tzLCBmbHVzaCwgVGVzdEJlZCwgdGljayB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvdGVzdGluZyc7XG5pbXBvcnQgeyBDaGFydCB9IGZyb20gJ0BhbnR2L2cyJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbmV4cG9ydCB0eXBlIFBhZ2VHMlR5cGUgPSAnZ2VvbWV0cmllcycgfCAndmlld3MnO1xuXG5leHBvcnQgY29uc3QgUGFnZUcyRGF0YUNvdW50ID0gMjtcbmV4cG9ydCBjb25zdCBQYWdlRzJIZWlnaHQgPSAxMDA7XG5cbmV4cG9ydCBjbGFzcyBQYWdlRzI8VD4ge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZml4dHVyZTogQ29tcG9uZW50Rml4dHVyZTxUPiB8IG51bGwgPSBudWxsKSB7fVxuXG4gIGdldCBkbCgpIHtcbiAgICByZXR1cm4gdGhpcy5maXh0dXJlIS5kZWJ1Z0VsZW1lbnQ7XG4gIH1cblxuICBnZXQgY29udGV4dCgpOiBUIHtcbiAgICByZXR1cm4gdGhpcy5maXh0dXJlIS5jb21wb25lbnRJbnN0YW5jZTtcbiAgfVxuXG4gIGdldCBjb21wKCkge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1zdHJpbmctbGl0ZXJhbFxuICAgIHJldHVybiAodGhpcy5jb250ZXh0IGFzIE56U2FmZUFueSlbJ2NvbXAnXTtcbiAgfVxuXG4gIGdldCBjaGFydCgpOiBDaGFydCB7XG4gICAgcmV0dXJuIHRoaXMuY29tcC5jaGFydDtcbiAgfVxuXG4gIGdlbk1vZHVsZTxNPihtb2R1bGU6IE0sIGNvbXA6IFR5cGU8VD4pIHtcbiAgICBUZXN0QmVkLmNvbmZpZ3VyZVRlc3RpbmdNb2R1bGUoe1xuICAgICAgaW1wb3J0czogW21vZHVsZV0sXG4gICAgICBkZWNsYXJhdGlvbnM6IFtjb21wXSxcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdlbkNvbXAoY29tcDogVHlwZTxUPiwgZGMgPSBmYWxzZSkge1xuICAgIHRoaXMuZml4dHVyZSA9IFRlc3RCZWQuY3JlYXRlQ29tcG9uZW50KGNvbXApO1xuICAgIGlmIChkYykge1xuICAgICAgdGhpcy5kY0ZpcnN0KCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbWFrZU1vZHVsZTxNPihtb2R1bGU6IE0sIGNvbXA6IFR5cGU8VD4sIG9wdGlvbnMgPSB7IGRjOiB0cnVlIH0pOiBQYWdlRzI8VD4ge1xuICAgIHRoaXMuZ2VuTW9kdWxlKG1vZHVsZSwgY29tcCkuZ2VuQ29tcChjb21wLCBvcHRpb25zLmRjKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGRjRmlyc3QoKSB7XG4gICAgdGhpcy5kYygpO1xuICAgIGZsdXNoKCk7XG4gICAgZGlzY2FyZFBlcmlvZGljVGFza3MoKTtcbiAgICAvLyBGSVg6IGBFcnJvciBkdXJpbmcgY2xlYW51cCBvZiBjb21wb25lbnRgXG4gICAgaWYgKHRoaXMuY29tcCAmJiB0eXBlb2YgdGhpcy5jb21wLmNoYXJ0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgc3B5T24odGhpcy5jb21wLmNoYXJ0LCAnZGVzdHJveScpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGRjKCkge1xuICAgIHRoaXMuZml4dHVyZSEuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgdGhpcy5maXh0dXJlIS5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBlbmQoKSB7XG4gICAgLy8gVGhlIDIwMSB2YWx1ZSBpcyBkZWxheSB2YWx1ZVxuICAgIHRpY2soMjAxKTtcbiAgICBmbHVzaCgpO1xuICAgIGRpc2NhcmRQZXJpb2RpY1Rhc2tzKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuY29tcC5uZ09uRGVzdHJveSgpO1xuICB9XG5cbiAgbmV3RGF0YShkYXRhOiBhbnkpOiB0aGlzIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tc3RyaW5nLWxpdGVyYWxcbiAgICAodGhpcy5jb250ZXh0IGFzIE56U2FmZUFueSlbJ2RhdGEnXSA9IGRhdGE7XG4gICAgdGhpcy5kYygpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0RWxzKGNsczogc3RyaW5nKTogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4ge1xuICAgIHJldHVybiAodGhpcy5kbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5xdWVyeVNlbGVjdG9yQWxsKGNscyk7XG4gIH1cblxuICBnZXRFbChjbHM6IHN0cmluZyk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gKHRoaXMuZGwubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkucXVlcnlTZWxlY3RvcihjbHMpIGFzIEhUTUxFbGVtZW50O1xuICB9XG5cbiAgZ2V0Q29udHJvbGxlcih0eXBlOiAnYXhpcycgfCAnbGVnZW5kJykge1xuICAgIHJldHVybiB0aGlzLmNoYXJ0LmdldENvbnRyb2xsZXIodHlwZSkgYXMgTnpTYWZlQW55O1xuICB9XG5cbiAgaXNDYW52YXMoc3RhdXRzOiBib29sZWFuID0gdHJ1ZSk6IHRoaXMge1xuICAgIHRoaXMuaXNFeGlzdHMoJ2NhbnZhcycsIHN0YXV0cyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBpc1RleHQoY2xzOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBlbCA9IHRoaXMuZ2V0RWwoY2xzKTtcbiAgICBleHBlY3QoZWwgPyBlbC50ZXh0Q29udGVudCEudHJpbSgpIDogJycpLnRvQmUodmFsdWUpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgaXNFeGlzdHMoY2xzOiBzdHJpbmcsIHN0YXV0czogYm9vbGVhbiA9IHRydWUpIHtcbiAgICBleHBlY3QodGhpcy5nZXRFbChjbHMpICE9IG51bGwpLnRvQmUoc3RhdXRzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNoZWNrT3B0aW9ucyhrZXk6IHN0cmluZywgdmFsdWU6IGFueSkge1xuICAgIGV4cGVjdCgodGhpcy5jaGFydCBhcyBOelNhZmVBbnkpW2tleV0pLnRvQmUodmFsdWUpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY2hlY2tBdHRyT3B0aW9ucyh0eXBlOiBQYWdlRzJUeXBlLCBrZXk6IHN0cmluZywgdmFsdWU6IGFueSkge1xuICAgIGNvbnN0IHggPSAodGhpcy5jaGFydFt0eXBlXVswXSBhcyBOelNhZmVBbnkpLmF0dHJpYnV0ZU9wdGlvbltrZXldO1xuICAgIGV4cGVjdCh4LmZpZWxkKS50b0JlKHZhbHVlKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGlzWFNjYWxlc0NvdW50KG51bTogbnVtYmVyKSB7XG4gICAgY29uc3QgeCA9IHRoaXMuY2hhcnQuZ2V0WFNjYWxlKCk7XG4gICAgZXhwZWN0KHgudmFsdWVzIS5sZW5ndGgpLnRvQmUobnVtKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGlzWVNjYWxlc0NvdW50KG51bTogbnVtYmVyKSB7XG4gICAgY29uc3QgeSA9IHRoaXMuY2hhcnQuZ2V0WVNjYWxlcygpO1xuICAgIGV4cGVjdCh5Lmxlbmd0aCkudG9CZSgxKTtcbiAgICBleHBlY3QoeVswXS52YWx1ZXMhLmxlbmd0aCkudG9CZShudW0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgaXNEYXRhQ291bnQodHlwZTogUGFnZUcyVHlwZSwgbnVtOiBudW1iZXIpIHtcbiAgICBjb25zdCByZXN1bHRzID0gdGhpcy5jaGFydFt0eXBlXTtcbiAgICBleHBlY3QocmVzdWx0cy5sZW5ndGgpLnRvQmVHcmVhdGVyVGhhbigwKTtcbiAgICBleHBlY3QocmVzdWx0c1swXS5kYXRhLmxlbmd0aCkudG9CZShudW0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0IGZpcnN0RGF0YVBvaW50KCk6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1zdHJpbmctbGl0ZXJhbFxuICAgIHJldHVybiB0aGlzLmNoYXJ0LmdldFhZKCh0aGlzLmNvbnRleHQgYXMgTnpTYWZlQW55KVsnZGF0YSddWzBdKTtcbiAgfVxuXG4gIGNoZWNrVG9vbHRpcChfaW5jbHVkZVRleHQ6IHN0cmluZyB8IG51bGwsIHBvaW50PzogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9KSB7XG4gICAgaWYgKCFwb2ludCkge1xuICAgICAgcG9pbnQgPSB0aGlzLmZpcnN0RGF0YVBvaW50O1xuICAgIH1cbiAgICB0aGlzLmNoYXJ0LnNob3dUb29sdGlwKHBvaW50KTtcbiAgICBleHBlY3QodGhpcy5jaGFydC5nZXRDb250cm9sbGVyKCd0b29sdGlwJykgIT0gbnVsbCkudG9CZSh0cnVlKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNoZWNrQ2xpY2tJdGVtKCk6IHRoaXMge1xuICAgIGNvbnN0IHBvaW50ID0gdGhpcy5maXJzdERhdGFQb2ludDtcbiAgICBjb25zdCBjbGllbnRQb2ludCA9IHRoaXMuY2hhcnQuY2FudmFzLmdldENsaWVudEJ5UG9pbnQocG9pbnQueCwgcG9pbnQueSk7XG4gICAgY29uc3QgZXZlbnQgPSBuZXcgTW91c2VFdmVudCgnY2xpY2snLCB7XG4gICAgICBjbGllbnRYOiBjbGllbnRQb2ludC54LFxuICAgICAgY2xpZW50WTogY2xpZW50UG9pbnQueSxcbiAgICB9KTtcbiAgICAodGhpcy5jaGFydC5jYW52YXMuZ2V0KCdlbCcpIGFzIEhUTUxFbGVtZW50KS5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tEZWxheTxNLCBUPihtb2R1bGU6IE0sIGNvbXA6IFR5cGU8VD4sIHBhZ2U6IFBhZ2VHMjxUPiB8IG51bGwgPSBudWxsKSB7XG4gIGlmIChwYWdlID09IG51bGwpIHtcbiAgICBwYWdlID0gbmV3IFBhZ2VHMjxUPigpLm1ha2VNb2R1bGUobW9kdWxlLCBjb21wLCB7IGRjOiBmYWxzZSB9KTtcbiAgfVxuICBjb25zdCBjb250ZXh0ID0gcGFnZS5jb250ZXh0IGFzIGFueTtcbiAgaWYgKHR5cGVvZiBjb250ZXh0LmRlbGF5ID09PSAndW5kZWZpbmVkJykge1xuICAgIGNvbnNvbGUud2FybihgWW91IG11c2UgYmUgZGluZmVkIFwiZGVsYXlcIiBwcm9wZXJ0eSBpbiB0ZXN0IGNvbXBvbmVudGApO1xuICAgIHJldHVybjtcbiAgfVxuICBjb250ZXh0LmRlbGF5ID0gMTAwO1xuICBwYWdlLmRjKCk7XG4gIHBhZ2UuY29tcC5uZ09uRGVzdHJveSgpO1xuICBleHBlY3QocGFnZS5jaGFydCA9PSBudWxsKS50b0JlKHRydWUpO1xuICB0aWNrKDIwMSk7XG4gIGRpc2NhcmRQZXJpb2RpY1Rhc2tzKCk7XG59XG4iXX0=