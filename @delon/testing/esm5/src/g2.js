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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZzIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdGVzdGluZy8iLCJzb3VyY2VzIjpbInNyYy9nMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBb0Isb0JBQW9CLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFLckcsTUFBTSxLQUFPLGVBQWUsR0FBRyxDQUFDOztBQUNoQyxNQUFNLEtBQU8sWUFBWSxHQUFHLEdBQUc7Ozs7QUFFL0I7Ozs7SUFDRSxnQkFBbUIsT0FBMEM7UUFBMUMsd0JBQUEsRUFBQSxjQUEwQztRQUExQyxZQUFPLEdBQVAsT0FBTyxDQUFtQztJQUFHLENBQUM7SUFFakUsc0JBQUksc0JBQUU7Ozs7UUFBTjtZQUNFLE9BQU8sbUJBQUEsSUFBSSxDQUFDLE9BQU8sRUFBQyxDQUFDLFlBQVksQ0FBQztRQUNwQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDJCQUFPOzs7O1FBQVg7WUFDRSxPQUFPLG1CQUFBLElBQUksQ0FBQyxPQUFPLEVBQUMsQ0FBQyxpQkFBaUIsQ0FBQztRQUN6QyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHdCQUFJOzs7O1FBQVI7WUFDRSw2Q0FBNkM7WUFDN0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlCLENBQUM7OztPQUFBO0lBRUQsc0JBQUkseUJBQUs7Ozs7UUFBVDtZQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDekIsQ0FBQzs7O09BQUE7Ozs7Ozs7O0lBRUQsMEJBQVM7Ozs7Ozs7SUFBVCxVQUFhLE1BQVMsRUFBRSxJQUFhO1FBQ25DLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQztZQUM3QixPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUM7WUFDakIsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDO1NBQ3JCLENBQUMsQ0FBQztRQUNILE9BQU8sbUJBQUEsSUFBSSxFQUFB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QUNkLENBQUM7SUFDSCxhQUFDO0FBQUQsQ0FBQyxBQXRKRCxJQXNKQzs7Ozs7OztJQXJKYSx5QkFBaUQ7Ozs7Ozs7OztBQXVKL0QsTUFBTSxVQUFVLFVBQVUsQ0FBTyxNQUFTLEVBQUUsSUFBYSxFQUFFLElBQTZCO0lBQTdCLHFCQUFBLEVBQUEsV0FBNkI7SUFDdEYsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1FBQ2hCLElBQUksR0FBRyxJQUFJLE1BQU0sRUFBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7S0FDaEU7O1FBQ0ssT0FBTyxHQUFHLG1CQUFBLElBQUksQ0FBQyxPQUFPLEVBQU87SUFDbkMsSUFBSSxPQUFPLE9BQU8sQ0FBQyxLQUFLLEtBQUssV0FBVyxFQUFFO1FBQ3hDLE9BQU8sQ0FBQyxJQUFJLENBQUMseURBQXVELENBQUMsQ0FBQztRQUN0RSxPQUFPO0tBQ1I7SUFDRCxPQUFPLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztJQUNwQixJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDVixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDVixvQkFBb0IsRUFBRSxDQUFDO0FBQ3pCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wb25lbnRGaXh0dXJlLCBkaXNjYXJkUGVyaW9kaWNUYXNrcywgZmx1c2gsIFRlc3RCZWQsIHRpY2sgfSBmcm9tICdAYW5ndWxhci9jb3JlL3Rlc3RpbmcnO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuZXhwb3J0IHR5cGUgUGFnZUcyVHlwZSA9ICdnZW9tcycgfCAndmlld3MnO1xuXG5leHBvcnQgY29uc3QgUGFnZUcyRGF0YUNvdW50ID0gMjtcbmV4cG9ydCBjb25zdCBQYWdlRzJIZWlnaHQgPSAxMDA7XG5cbmV4cG9ydCBjbGFzcyBQYWdlRzI8VD4ge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZml4dHVyZTogQ29tcG9uZW50Rml4dHVyZTxUPiB8IG51bGwgPSBudWxsKSB7fVxuXG4gIGdldCBkbCgpIHtcbiAgICByZXR1cm4gdGhpcy5maXh0dXJlIS5kZWJ1Z0VsZW1lbnQ7XG4gIH1cblxuICBnZXQgY29udGV4dCgpOiBOelNhZmVBbnkge1xuICAgIHJldHVybiB0aGlzLmZpeHR1cmUhLmNvbXBvbmVudEluc3RhbmNlO1xuICB9XG5cbiAgZ2V0IGNvbXAoKSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXN0cmluZy1saXRlcmFsXG4gICAgcmV0dXJuIHRoaXMuY29udGV4dFsnY29tcCddO1xuICB9XG5cbiAgZ2V0IGNoYXJ0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbXAuY2hhcnQ7XG4gIH1cblxuICBnZW5Nb2R1bGU8TT4obW9kdWxlOiBNLCBjb21wOiBUeXBlPFQ+KSB7XG4gICAgVGVzdEJlZC5jb25maWd1cmVUZXN0aW5nTW9kdWxlKHtcbiAgICAgIGltcG9ydHM6IFttb2R1bGVdLFxuICAgICAgZGVjbGFyYXRpb25zOiBbY29tcF0sXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZW5Db21wKGNvbXA6IFR5cGU8VD4sIGRjID0gZmFsc2UpIHtcbiAgICB0aGlzLmZpeHR1cmUgPSBUZXN0QmVkLmNyZWF0ZUNvbXBvbmVudChjb21wKTtcbiAgICBpZiAoZGMpIHtcbiAgICAgIHRoaXMuZGNGaXJzdCgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG1ha2VNb2R1bGU8TT4obW9kdWxlOiBNLCBjb21wOiBUeXBlPFQ+LCBvcHRpb25zID0geyBkYzogdHJ1ZSB9KTogUGFnZUcyPFQ+IHtcbiAgICB0aGlzLmdlbk1vZHVsZShtb2R1bGUsIGNvbXApLmdlbkNvbXAoY29tcCwgb3B0aW9ucy5kYyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBkY0ZpcnN0KCkge1xuICAgIHRoaXMuZGMoKTtcbiAgICBmbHVzaCgpO1xuICAgIGRpc2NhcmRQZXJpb2RpY1Rhc2tzKCk7XG4gICAgLy8gRklYOiBgRXJyb3IgZHVyaW5nIGNsZWFudXAgb2YgY29tcG9uZW50YFxuICAgIGlmICh0aGlzLmNvbXAgJiYgdHlwZW9mIHRoaXMuY29tcC5jaGFydCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHNweU9uKHRoaXMuY29tcC5jaGFydCwgJ2Rlc3Ryb3knKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBkYygpIHtcbiAgICB0aGlzLmZpeHR1cmUhLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIHRoaXMuZml4dHVyZSEuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZW5kKCkge1xuICAgIC8vIFRoZSAyMDEgdmFsdWUgaXMgZGVsYXkgdmFsdWVcbiAgICB0aWNrKDIwMSk7XG4gICAgZGlzY2FyZFBlcmlvZGljVGFza3MoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5jb21wLm5nT25EZXN0cm95KCk7XG4gIH1cblxuICBuZXdEYXRhKGRhdGE6IGFueSk6IHRoaXMge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1zdHJpbmctbGl0ZXJhbFxuICAgIHRoaXMuY29udGV4dFsnZGF0YSddID0gZGF0YTtcbiAgICB0aGlzLmRjKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXRFbHMoY2xzOiBzdHJpbmcpOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiB7XG4gICAgcmV0dXJuICh0aGlzLmRsLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLnF1ZXJ5U2VsZWN0b3JBbGwoY2xzKTtcbiAgfVxuXG4gIGdldEVsKGNsczogc3RyaW5nKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiAodGhpcy5kbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5xdWVyeVNlbGVjdG9yKGNscykgYXMgSFRNTEVsZW1lbnQ7XG4gIH1cblxuICBpc0NhbnZhcyhzdGF1dHM6IGJvb2xlYW4gPSB0cnVlKTogdGhpcyB7XG4gICAgdGhpcy5pc0V4aXN0cygnY2FudmFzJywgc3RhdXRzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGlzVGV4dChjbHM6IHN0cmluZywgdmFsdWU6IHN0cmluZykge1xuICAgIGNvbnN0IGVsID0gdGhpcy5nZXRFbChjbHMpO1xuICAgIGV4cGVjdChlbCA/IGVsLnRleHRDb250ZW50IS50cmltKCkgOiAnJykudG9CZSh2YWx1ZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBpc0V4aXN0cyhjbHM6IHN0cmluZywgc3RhdXRzOiBib29sZWFuID0gdHJ1ZSkge1xuICAgIGV4cGVjdCh0aGlzLmdldEVsKGNscykgIT0gbnVsbCkudG9CZShzdGF1dHMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY2hlY2tPcHRpb25zKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XG4gICAgZXhwZWN0KHRoaXMuY2hhcnQuZ2V0KGtleSkpLnRvQmUodmFsdWUpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY2hlY2tBdHRyT3B0aW9ucyh0eXBlOiBQYWdlRzJUeXBlLCBrZXk6IHN0cmluZywgdmFsdWU6IGFueSkge1xuICAgIGNvbnN0IHggPSB0aGlzLmNoYXJ0LmdldCh0eXBlKVswXS5nZXQoJ2F0dHJPcHRpb25zJylba2V5XTtcbiAgICBleHBlY3QoeC5maWVsZCkudG9CZSh2YWx1ZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBpc1hTY2FsZXNDb3VudChudW06IG51bWJlcikge1xuICAgIGNvbnN0IHggPSB0aGlzLmNoYXJ0LmdldFhTY2FsZXMoKTtcbiAgICBleHBlY3QoeFswXS52YWx1ZXMubGVuZ3RoKS50b0JlKG51bSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBpc1lTY2FsZXNDb3VudChudW06IG51bWJlcikge1xuICAgIGNvbnN0IHkgPSB0aGlzLmNoYXJ0LmdldFlTY2FsZXMoKTtcbiAgICBleHBlY3QoeS5sZW5ndGgpLnRvQmUoMSk7XG4gICAgZXhwZWN0KHlbMF0udmFsdWVzLmxlbmd0aCkudG9CZShudW0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgaXNEYXRhQ291bnQodHlwZTogUGFnZUcyVHlwZSwgbnVtOiBudW1iZXIpIHtcbiAgICBjb25zdCByZXN1bHRzID0gdGhpcy5jaGFydC5nZXQodHlwZSk7XG4gICAgZXhwZWN0KHJlc3VsdHMubGVuZ3RoKS50b0JlR3JlYXRlclRoYW4oMCk7XG4gICAgZXhwZWN0KHJlc3VsdHNbMF0uZ2V0KCdkYXRhJykubGVuZ3RoKS50b0JlKG51bSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjaGVja1Rvb2x0aXAoaW5jbHVkZVRleHQ6IHN0cmluZyB8IG51bGwsIHBvaW50PzogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9KSB7XG4gICAgaWYgKCFwb2ludCkge1xuICAgICAgY29uc3QgZzJFbCA9IHRoaXMuZGwubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIHBvaW50ID0ge1xuICAgICAgICB4OiBnMkVsLm9mZnNldFdpZHRoIC8gMixcbiAgICAgICAgeTogZzJFbC5vZmZzZXRIZWlnaHQgLyAyLFxuICAgICAgfTtcbiAgICB9XG4gICAgdGhpcy5jaGFydC5zaG93VG9vbHRpcChwb2ludCk7XG4gICAgY29uc3QgZWwgPSB0aGlzLmdldEVsKCcuZzItdG9vbHRpcCcpO1xuICAgIGlmIChpbmNsdWRlVGV4dCA9PT0gbnVsbCkge1xuICAgICAgZXhwZWN0KGVsID09IG51bGwpLnRvQmUodHJ1ZSwgYFNob3VsZSBiZSBub3QgZm91bmQgZzItdG9vbHRpcCBlbGVtZW50YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4cGVjdChlbCAhPSBudWxsKS50b0JlKHRydWUsIGBTaG91bGUgYmUgaGFzIGcyLXRvb2x0aXAgZWxlbWVudGApO1xuICAgICAgY29uc3QgdGV4dCA9IGVsLnRleHRDb250ZW50IS50cmltKCk7XG4gICAgICBleHBlY3QodGV4dC5pbmNsdWRlcyhpbmNsdWRlVGV4dCkpLnRvQmUodHJ1ZSwgYFNob3VsZSBiZSBpbmNsdWRlIFwiJHtpbmNsdWRlVGV4dH1cIiB0ZXh0IG9mIHRvb2x0aXAgdGV4dCBjb250ZXh0IFwiJHt0ZXh0fVwiYCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0RlbGF5PE0sIFQ+KG1vZHVsZTogTSwgY29tcDogVHlwZTxUPiwgcGFnZTogUGFnZUcyPFQ+IHwgbnVsbCA9IG51bGwpIHtcbiAgaWYgKHBhZ2UgPT0gbnVsbCkge1xuICAgIHBhZ2UgPSBuZXcgUGFnZUcyPFQ+KCkubWFrZU1vZHVsZShtb2R1bGUsIGNvbXAsIHsgZGM6IGZhbHNlIH0pO1xuICB9XG4gIGNvbnN0IGNvbnRleHQgPSBwYWdlLmNvbnRleHQgYXMgYW55O1xuICBpZiAodHlwZW9mIGNvbnRleHQuZGVsYXkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgY29uc29sZS53YXJuKGBZb3UgbXVzZSBiZSBkaW5mZWQgXCJkZWxheVwiIHByb3BlcnR5IGluIHRlc3QgY29tcG9uZW50YCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnRleHQuZGVsYXkgPSAxMDA7XG4gIHBhZ2UuZGMoKTtcbiAgcGFnZS5jb21wLm5nT25EZXN0cm95KCk7XG4gIGV4cGVjdChwYWdlLmNoYXJ0ID09IG51bGwpLnRvQmUodHJ1ZSk7XG4gIHRpY2soMjAxKTtcbiAgZGlzY2FyZFBlcmlvZGljVGFza3MoKTtcbn1cbiJdfQ==