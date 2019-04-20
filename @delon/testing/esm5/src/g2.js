/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { discardPeriodicTasks, flush, tick, TestBed, } from '@angular/core/testing';
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
            return this.context['comp'];
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
        (/** @type {?} */ (this)).context['data'] = data;
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
        expect((/** @type {?} */ (this)).chart.get(key)).toBe(value);
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
        var x = (/** @type {?} */ (this)).chart.get(type)[0].get('attrOptions')[key];
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
        var x = (/** @type {?} */ (this)).chart.getXScales();
        expect(x[0].values.length).toBe(num);
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
        expect(y[0].values.length).toBe(num);
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
        var results = (/** @type {?} */ (this)).chart.get(type);
        expect(results.length).toBeGreaterThan(0);
        expect(results[0].get('data').length).toBe(num);
        return (/** @type {?} */ (this));
    };
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} includeText
     * @param {?=} point
     * @return {THIS}
     */
    PageG2.prototype.checkTooltip = /**
     * @template THIS
     * @this {THIS}
     * @param {?} includeText
     * @param {?=} point
     * @return {THIS}
     */
    function (includeText, point) {
        if (!point) {
            /** @type {?} */
            var g2El = (/** @type {?} */ ((/** @type {?} */ (this)).dl.nativeElement));
            point = {
                x: g2El.offsetWidth / 2,
                y: g2El.offsetHeight / 2,
            };
        }
        (/** @type {?} */ (this)).chart.showTooltip(point);
        /** @type {?} */
        var el = (/** @type {?} */ (this)).getEl('.g2-tooltip');
        if (includeText === null) {
            expect(el == null).toBe(true, "Shoule be not found g2-tooltip element");
        }
        else {
            expect(el != null).toBe(true, "Shoule be has g2-tooltip element");
            /** @type {?} */
            var text = (/** @type {?} */ (el.textContent)).trim();
            expect(text.includes(includeText)).toBe(true, "Shoule be include \"" + includeText + "\" text of tooltip text context \"" + text + "\"");
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZzIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdGVzdGluZy8iLCJzb3VyY2VzIjpbInNyYy9nMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixLQUFLLEVBQ0wsSUFBSSxFQUVKLE9BQU8sR0FDUixNQUFNLHVCQUF1QixDQUFDOztBQUkvQixNQUFNLEtBQU8sZUFBZSxHQUFHLENBQUM7O0FBQ2hDLE1BQU0sS0FBTyxZQUFZLEdBQUcsR0FBRzs7OztBQUUvQjs7OztJQUNFLGdCQUFtQixPQUEwQztRQUExQyx3QkFBQSxFQUFBLGNBQTBDO1FBQTFDLFlBQU8sR0FBUCxPQUFPLENBQW1DO0lBQUcsQ0FBQztJQUVqRSxzQkFBSSxzQkFBRTs7OztRQUFOO1lBQ0UsT0FBTyxtQkFBQSxJQUFJLENBQUMsT0FBTyxFQUFDLENBQUMsWUFBWSxDQUFDO1FBQ3BDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksMkJBQU87Ozs7UUFBWDtZQUNFLE9BQU8sbUJBQUEsSUFBSSxDQUFDLE9BQU8sRUFBQyxDQUFDLGlCQUFpQixDQUFDO1FBQ3pDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksd0JBQUk7Ozs7UUFBUjtZQUNFLDZDQUE2QztZQUM3QyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSx5QkFBSzs7OztRQUFUO1lBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN6QixDQUFDOzs7T0FBQTs7Ozs7Ozs7SUFFRCwwQkFBUzs7Ozs7OztJQUFULFVBQWEsTUFBUyxFQUFFLElBQWE7UUFDbkMsT0FBTyxDQUFDLHNCQUFzQixDQUFDO1lBQzdCLE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQztZQUNqQixZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUM7U0FDckIsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxtQkFBQSxJQUFJLEVBQUEs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QUNkLENBQUM7SUFDSCxhQUFDO0FBQUQsQ0FBQyxBQXpKRCxJQXlKQzs7Ozs7OztJQXhKYSx5QkFBaUQ7Ozs7Ozs7OztBQTBKL0QsTUFBTSxVQUFVLFVBQVUsQ0FBTyxNQUFTLEVBQUUsSUFBYSxFQUFFLElBQTZCO0lBQTdCLHFCQUFBLEVBQUEsV0FBNkI7SUFDdEYsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1FBQ2hCLElBQUksR0FBRyxJQUFJLE1BQU0sRUFBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7S0FDaEU7O1FBQ0ssT0FBTyxHQUFHLG1CQUFBLElBQUksQ0FBQyxPQUFPLEVBQU87SUFDbkMsSUFBSSxPQUFPLE9BQU8sQ0FBQyxLQUFLLEtBQUssV0FBVyxFQUFFO1FBQ3hDLE9BQU8sQ0FBQyxJQUFJLENBQUMseURBQXVELENBQUMsQ0FBQztRQUN0RSxPQUFPO0tBQ1I7SUFDRCxPQUFPLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztJQUNwQixJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDVixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDVixvQkFBb0IsRUFBRSxDQUFDO0FBQ3pCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBkaXNjYXJkUGVyaW9kaWNUYXNrcyxcbiAgZmx1c2gsXG4gIHRpY2ssXG4gIENvbXBvbmVudEZpeHR1cmUsXG4gIFRlc3RCZWQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUvdGVzdGluZyc7XG5cbmV4cG9ydCB0eXBlIFBhZ2VHMlR5cGUgPSAnZ2VvbXMnIHwgJ3ZpZXdzJztcblxuZXhwb3J0IGNvbnN0IFBhZ2VHMkRhdGFDb3VudCA9IDI7XG5leHBvcnQgY29uc3QgUGFnZUcySGVpZ2h0ID0gMTAwO1xuXG5leHBvcnQgY2xhc3MgUGFnZUcyPFQ+IHtcbiAgY29uc3RydWN0b3IocHVibGljIGZpeHR1cmU6IENvbXBvbmVudEZpeHR1cmU8VD4gfCBudWxsID0gbnVsbCkge31cblxuICBnZXQgZGwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZml4dHVyZSEuZGVidWdFbGVtZW50O1xuICB9XG5cbiAgZ2V0IGNvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZml4dHVyZSEuY29tcG9uZW50SW5zdGFuY2U7XG4gIH1cblxuICBnZXQgY29tcCgpIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tc3RyaW5nLWxpdGVyYWxcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0Wydjb21wJ107XG4gIH1cblxuICBnZXQgY2hhcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29tcC5jaGFydDtcbiAgfVxuXG4gIGdlbk1vZHVsZTxNPihtb2R1bGU6IE0sIGNvbXA6IFR5cGU8VD4pIHtcbiAgICBUZXN0QmVkLmNvbmZpZ3VyZVRlc3RpbmdNb2R1bGUoe1xuICAgICAgaW1wb3J0czogW21vZHVsZV0sXG4gICAgICBkZWNsYXJhdGlvbnM6IFtjb21wXSxcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdlbkNvbXAoY29tcDogVHlwZTxUPiwgZGMgPSBmYWxzZSkge1xuICAgIHRoaXMuZml4dHVyZSA9IFRlc3RCZWQuY3JlYXRlQ29tcG9uZW50KGNvbXApO1xuICAgIGlmIChkYykge1xuICAgICAgdGhpcy5kY0ZpcnN0KCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbWFrZU1vZHVsZTxNPihtb2R1bGU6IE0sIGNvbXA6IFR5cGU8VD4sIG9wdGlvbnMgPSB7IGRjOiB0cnVlIH0pOiBQYWdlRzI8VD4ge1xuICAgIHRoaXMuZ2VuTW9kdWxlKG1vZHVsZSwgY29tcCkuZ2VuQ29tcChjb21wLCBvcHRpb25zLmRjKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGRjRmlyc3QoKSB7XG4gICAgdGhpcy5kYygpO1xuICAgIGZsdXNoKCk7XG4gICAgZGlzY2FyZFBlcmlvZGljVGFza3MoKTtcbiAgICAvLyBGSVg6IGBFcnJvciBkdXJpbmcgY2xlYW51cCBvZiBjb21wb25lbnRgXG4gICAgaWYgKHRoaXMuY29tcCAmJiB0eXBlb2YgdGhpcy5jb21wLmNoYXJ0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgc3B5T24odGhpcy5jb21wLmNoYXJ0LCAnZGVzdHJveScpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGRjKCkge1xuICAgIHRoaXMuZml4dHVyZSEuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgdGhpcy5maXh0dXJlIS5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBlbmQoKSB7XG4gICAgLy8gVGhlIDIwMSB2YWx1ZSBpcyBkZWxheSB2YWx1ZVxuICAgIHRpY2soMjAxKTtcbiAgICBkaXNjYXJkUGVyaW9kaWNUYXNrcygpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmNvbXAubmdPbkRlc3Ryb3koKTtcbiAgfVxuXG4gIG5ld0RhdGEoZGF0YTogYW55KTogdGhpcyB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXN0cmluZy1saXRlcmFsXG4gICAgdGhpcy5jb250ZXh0WydkYXRhJ10gPSBkYXRhO1xuICAgIHRoaXMuZGMoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldEVscyhjbHM6IHN0cmluZyk6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+IHtcbiAgICByZXR1cm4gKHRoaXMuZGwubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkucXVlcnlTZWxlY3RvckFsbChjbHMpO1xuICB9XG5cbiAgZ2V0RWwoY2xzOiBzdHJpbmcpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuICh0aGlzLmRsLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLnF1ZXJ5U2VsZWN0b3IoY2xzKSBhcyBIVE1MRWxlbWVudDtcbiAgfVxuXG4gIGlzQ2FudmFzKHN0YXV0czogYm9vbGVhbiA9IHRydWUpOiB0aGlzIHtcbiAgICB0aGlzLmlzRXhpc3RzKCdjYW52YXMnLCBzdGF1dHMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgaXNUZXh0KGNsczogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSB7XG4gICAgY29uc3QgZWwgPSB0aGlzLmdldEVsKGNscyk7XG4gICAgZXhwZWN0KGVsID8gZWwudGV4dENvbnRlbnQhLnRyaW0oKSA6ICcnKS50b0JlKHZhbHVlKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGlzRXhpc3RzKGNsczogc3RyaW5nLCBzdGF1dHM6IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgZXhwZWN0KHRoaXMuZ2V0RWwoY2xzKSAhPSBudWxsKS50b0JlKHN0YXV0cyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjaGVja09wdGlvbnMoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcbiAgICBleHBlY3QodGhpcy5jaGFydC5nZXQoa2V5KSkudG9CZSh2YWx1ZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjaGVja0F0dHJPcHRpb25zKHR5cGU6IFBhZ2VHMlR5cGUsIGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XG4gICAgY29uc3QgeCA9IHRoaXMuY2hhcnQuZ2V0KHR5cGUpWzBdLmdldCgnYXR0ck9wdGlvbnMnKVtrZXldO1xuICAgIGV4cGVjdCh4LmZpZWxkKS50b0JlKHZhbHVlKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGlzWFNjYWxlc0NvdW50KG51bTogbnVtYmVyKSB7XG4gICAgY29uc3QgeCA9IHRoaXMuY2hhcnQuZ2V0WFNjYWxlcygpO1xuICAgIGV4cGVjdCh4WzBdLnZhbHVlcy5sZW5ndGgpLnRvQmUobnVtKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGlzWVNjYWxlc0NvdW50KG51bTogbnVtYmVyKSB7XG4gICAgY29uc3QgeSA9IHRoaXMuY2hhcnQuZ2V0WVNjYWxlcygpO1xuICAgIGV4cGVjdCh5Lmxlbmd0aCkudG9CZSgxKTtcbiAgICBleHBlY3QoeVswXS52YWx1ZXMubGVuZ3RoKS50b0JlKG51bSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBpc0RhdGFDb3VudCh0eXBlOiBQYWdlRzJUeXBlLCBudW06IG51bWJlcikge1xuICAgIGNvbnN0IHJlc3VsdHMgPSB0aGlzLmNoYXJ0LmdldCh0eXBlKTtcbiAgICBleHBlY3QocmVzdWx0cy5sZW5ndGgpLnRvQmVHcmVhdGVyVGhhbigwKTtcbiAgICBleHBlY3QocmVzdWx0c1swXS5nZXQoJ2RhdGEnKS5sZW5ndGgpLnRvQmUobnVtKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNoZWNrVG9vbHRpcChpbmNsdWRlVGV4dDogc3RyaW5nIHwgbnVsbCwgcG9pbnQ/OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0pIHtcbiAgICBpZiAoIXBvaW50KSB7XG4gICAgICBjb25zdCBnMkVsID0gdGhpcy5kbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgICAgcG9pbnQgPSB7XG4gICAgICAgIHg6IGcyRWwub2Zmc2V0V2lkdGggLyAyLFxuICAgICAgICB5OiBnMkVsLm9mZnNldEhlaWdodCAvIDIsXG4gICAgICB9O1xuICAgIH1cbiAgICB0aGlzLmNoYXJ0LnNob3dUb29sdGlwKHBvaW50KTtcbiAgICBjb25zdCBlbCA9IHRoaXMuZ2V0RWwoJy5nMi10b29sdGlwJyk7XG4gICAgaWYgKGluY2x1ZGVUZXh0ID09PSBudWxsKSB7XG4gICAgICBleHBlY3QoZWwgPT0gbnVsbCkudG9CZSh0cnVlLCBgU2hvdWxlIGJlIG5vdCBmb3VuZCBnMi10b29sdGlwIGVsZW1lbnRgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXhwZWN0KGVsICE9IG51bGwpLnRvQmUodHJ1ZSwgYFNob3VsZSBiZSBoYXMgZzItdG9vbHRpcCBlbGVtZW50YCk7XG4gICAgICBjb25zdCB0ZXh0ID0gZWwudGV4dENvbnRlbnQhLnRyaW0oKTtcbiAgICAgIGV4cGVjdCh0ZXh0LmluY2x1ZGVzKGluY2x1ZGVUZXh0KSkudG9CZShcbiAgICAgICAgdHJ1ZSxcbiAgICAgICAgYFNob3VsZSBiZSBpbmNsdWRlIFwiJHtpbmNsdWRlVGV4dH1cIiB0ZXh0IG9mIHRvb2x0aXAgdGV4dCBjb250ZXh0IFwiJHt0ZXh0fVwiYCxcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0RlbGF5PE0sIFQ+KG1vZHVsZTogTSwgY29tcDogVHlwZTxUPiwgcGFnZTogUGFnZUcyPFQ+IHwgbnVsbCA9IG51bGwpIHtcbiAgaWYgKHBhZ2UgPT0gbnVsbCkge1xuICAgIHBhZ2UgPSBuZXcgUGFnZUcyPFQ+KCkubWFrZU1vZHVsZShtb2R1bGUsIGNvbXAsIHsgZGM6IGZhbHNlIH0pO1xuICB9XG4gIGNvbnN0IGNvbnRleHQgPSBwYWdlLmNvbnRleHQgYXMgYW55O1xuICBpZiAodHlwZW9mIGNvbnRleHQuZGVsYXkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgY29uc29sZS53YXJuKGBZb3UgbXVzZSBiZSBkaW5mZWQgXCJkZWxheVwiIHByb3BlcnR5IGluIHRlc3QgY29tcG9uZW50YCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnRleHQuZGVsYXkgPSAxMDA7XG4gIHBhZ2UuZGMoKTtcbiAgcGFnZS5jb21wLm5nT25EZXN0cm95KCk7XG4gIGV4cGVjdChwYWdlLmNoYXJ0ID09IG51bGwpLnRvQmUodHJ1ZSk7XG4gIHRpY2soMjAxKTtcbiAgZGlzY2FyZFBlcmlvZGljVGFza3MoKTtcbn1cbiJdfQ==