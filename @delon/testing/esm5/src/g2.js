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
            return this.fixture.debugElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageG2.prototype, "context", {
        get: /**
         * @return {?}
         */
        function () {
            return this.fixture.componentInstance;
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
        (/** @type {?} */ (this)).fixture.changeDetectorRef.markForCheck();
        (/** @type {?} */ (this)).fixture.detectChanges();
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
        return ((/** @type {?} */ (this.dl.nativeElement))).querySelector(cls);
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
        expect(el ? el.textContent.trim() : '').toBe(value);
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
            var text = el.textContent.trim();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZzIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdGVzdGluZy8iLCJzb3VyY2VzIjpbInNyYy9nMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixLQUFLLEVBQ0wsSUFBSSxFQUVKLE9BQU8sR0FDUixNQUFNLHVCQUF1QixDQUFDOztBQUkvQixNQUFNLEtBQU8sZUFBZSxHQUFHLENBQUM7O0FBQ2hDLE1BQU0sS0FBTyxZQUFZLEdBQUcsR0FBRzs7OztBQUUvQjs7OztJQUNFLGdCQUFtQixPQUFtQztRQUFuQyx3QkFBQSxFQUFBLGNBQW1DO1FBQW5DLFlBQU8sR0FBUCxPQUFPLENBQTRCO0lBQUcsQ0FBQztJQUUxRCxzQkFBSSxzQkFBRTs7OztRQUFOO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQztRQUNuQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDJCQUFPOzs7O1FBQVg7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUM7UUFDeEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSx3QkFBSTs7OztRQUFSO1lBQ0UsNkNBQTZDO1lBQzdDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHlCQUFLOzs7O1FBQVQ7WUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3pCLENBQUM7OztPQUFBOzs7Ozs7OztJQUVELDBCQUFTOzs7Ozs7O0lBQVQsVUFBYSxNQUFTLEVBQUUsSUFBYTtRQUNuQyxPQUFPLENBQUMsc0JBQXNCLENBQUM7WUFDN0IsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDO1lBQ2pCLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQztTQUNyQixDQUFDLENBQUM7UUFDSCxPQUFPLG1CQUFBLElBQUksRUFBQSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7Ozs7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QU0sVUFBVSxVQUFVLENBQU8sTUFBUyxFQUFFLElBQWEsRUFBRSxJQUFzQjtJQUF0QixxQkFBQSxFQUFBLFdBQXNCO0lBQy9FLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtRQUNoQixJQUFJLEdBQUcsSUFBSSxNQUFNLEVBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0tBQ2hFOztRQUNLLE9BQU8sR0FBRyxtQkFBQSxJQUFJLENBQUMsT0FBTyxFQUFPO0lBQ25DLElBQUksT0FBTyxPQUFPLENBQUMsS0FBSyxLQUFLLFdBQVcsRUFBRTtRQUN4QyxPQUFPLENBQUMsSUFBSSxDQUFDLHlEQUF1RCxDQUFDLENBQUM7UUFDdEUsT0FBTztLQUNSO0lBQ0QsT0FBTyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7SUFDcEIsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ1Ysb0JBQW9CLEVBQUUsQ0FBQztBQUN6QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgZGlzY2FyZFBlcmlvZGljVGFza3MsXG4gIGZsdXNoLFxuICB0aWNrLFxuICBDb21wb25lbnRGaXh0dXJlLFxuICBUZXN0QmVkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlL3Rlc3RpbmcnO1xuXG5leHBvcnQgdHlwZSBQYWdlRzJUeXBlID0gJ2dlb21zJyB8ICd2aWV3cyc7XG5cbmV4cG9ydCBjb25zdCBQYWdlRzJEYXRhQ291bnQgPSAyO1xuZXhwb3J0IGNvbnN0IFBhZ2VHMkhlaWdodCA9IDEwMDtcblxuZXhwb3J0IGNsYXNzIFBhZ2VHMjxUPiB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBmaXh0dXJlOiBDb21wb25lbnRGaXh0dXJlPFQ+ID0gbnVsbCkge31cblxuICBnZXQgZGwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZml4dHVyZS5kZWJ1Z0VsZW1lbnQ7XG4gIH1cblxuICBnZXQgY29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5maXh0dXJlLmNvbXBvbmVudEluc3RhbmNlO1xuICB9XG5cbiAgZ2V0IGNvbXAoKSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXN0cmluZy1saXRlcmFsXG4gICAgcmV0dXJuIHRoaXMuY29udGV4dFsnY29tcCddO1xuICB9XG5cbiAgZ2V0IGNoYXJ0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbXAuY2hhcnQ7XG4gIH1cblxuICBnZW5Nb2R1bGU8TT4obW9kdWxlOiBNLCBjb21wOiBUeXBlPFQ+KSB7XG4gICAgVGVzdEJlZC5jb25maWd1cmVUZXN0aW5nTW9kdWxlKHtcbiAgICAgIGltcG9ydHM6IFttb2R1bGVdLFxuICAgICAgZGVjbGFyYXRpb25zOiBbY29tcF0sXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZW5Db21wKGNvbXA6IFR5cGU8VD4sIGRjID0gZmFsc2UpIHtcbiAgICB0aGlzLmZpeHR1cmUgPSBUZXN0QmVkLmNyZWF0ZUNvbXBvbmVudChjb21wKTtcbiAgICBpZiAoZGMpIHtcbiAgICAgIHRoaXMuZGNGaXJzdCgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG1ha2VNb2R1bGU8TT4obW9kdWxlOiBNLCBjb21wOiBUeXBlPFQ+LCBvcHRpb25zID0geyBkYzogdHJ1ZSB9KTogUGFnZUcyPFQ+IHtcbiAgICB0aGlzLmdlbk1vZHVsZShtb2R1bGUsIGNvbXApLmdlbkNvbXAoY29tcCwgb3B0aW9ucy5kYyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBkY0ZpcnN0KCkge1xuICAgIHRoaXMuZGMoKTtcbiAgICBmbHVzaCgpO1xuICAgIGRpc2NhcmRQZXJpb2RpY1Rhc2tzKCk7XG4gICAgLy8gRklYOiBgRXJyb3IgZHVyaW5nIGNsZWFudXAgb2YgY29tcG9uZW50YFxuICAgIGlmICh0aGlzLmNvbXAgJiYgdHlwZW9mIHRoaXMuY29tcC5jaGFydCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHNweU9uKHRoaXMuY29tcC5jaGFydCwgJ2Rlc3Ryb3knKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBkYygpIHtcbiAgICB0aGlzLmZpeHR1cmUuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgdGhpcy5maXh0dXJlLmRldGVjdENoYW5nZXMoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGVuZCgpIHtcbiAgICAvLyBUaGUgMjAxIHZhbHVlIGlzIGRlbGF5IHZhbHVlXG4gICAgdGljaygyMDEpO1xuICAgIGRpc2NhcmRQZXJpb2RpY1Rhc2tzKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuY29tcC5uZ09uRGVzdHJveSgpO1xuICB9XG5cbiAgbmV3RGF0YShkYXRhOiBhbnkpOiB0aGlzIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tc3RyaW5nLWxpdGVyYWxcbiAgICB0aGlzLmNvbnRleHRbJ2RhdGEnXSA9IGRhdGE7XG4gICAgdGhpcy5kYygpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0RWxzKGNsczogc3RyaW5nKTogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4ge1xuICAgIHJldHVybiAodGhpcy5kbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5xdWVyeVNlbGVjdG9yQWxsKGNscyk7XG4gIH1cblxuICBnZXRFbChjbHM6IHN0cmluZyk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gKHRoaXMuZGwubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkucXVlcnlTZWxlY3RvcihjbHMpO1xuICB9XG5cbiAgaXNDYW52YXMoc3RhdXRzOiBib29sZWFuID0gdHJ1ZSk6IHRoaXMge1xuICAgIHRoaXMuaXNFeGlzdHMoJ2NhbnZhcycsIHN0YXV0cyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBpc1RleHQoY2xzOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBlbCA9IHRoaXMuZ2V0RWwoY2xzKTtcbiAgICBleHBlY3QoZWwgPyBlbC50ZXh0Q29udGVudC50cmltKCkgOiAnJykudG9CZSh2YWx1ZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBpc0V4aXN0cyhjbHM6IHN0cmluZywgc3RhdXRzOiBib29sZWFuID0gdHJ1ZSkge1xuICAgIGV4cGVjdCh0aGlzLmdldEVsKGNscykgIT0gbnVsbCkudG9CZShzdGF1dHMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY2hlY2tPcHRpb25zKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XG4gICAgZXhwZWN0KHRoaXMuY2hhcnQuZ2V0KGtleSkpLnRvQmUodmFsdWUpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY2hlY2tBdHRyT3B0aW9ucyh0eXBlOiBQYWdlRzJUeXBlLCBrZXk6IHN0cmluZywgdmFsdWU6IGFueSkge1xuICAgIGNvbnN0IHggPSB0aGlzLmNoYXJ0LmdldCh0eXBlKVswXS5nZXQoJ2F0dHJPcHRpb25zJylba2V5XTtcbiAgICBleHBlY3QoeC5maWVsZCkudG9CZSh2YWx1ZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBpc1hTY2FsZXNDb3VudChudW06IG51bWJlcikge1xuICAgIGNvbnN0IHggPSB0aGlzLmNoYXJ0LmdldFhTY2FsZXMoKTtcbiAgICBleHBlY3QoeFswXS52YWx1ZXMubGVuZ3RoKS50b0JlKG51bSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBpc1lTY2FsZXNDb3VudChudW06IG51bWJlcikge1xuICAgIGNvbnN0IHkgPSB0aGlzLmNoYXJ0LmdldFlTY2FsZXMoKTtcbiAgICBleHBlY3QoeS5sZW5ndGgpLnRvQmUoMSk7XG4gICAgZXhwZWN0KHlbMF0udmFsdWVzLmxlbmd0aCkudG9CZShudW0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgaXNEYXRhQ291bnQodHlwZTogUGFnZUcyVHlwZSwgbnVtOiBudW1iZXIpIHtcbiAgICBjb25zdCByZXN1bHRzID0gdGhpcy5jaGFydC5nZXQodHlwZSk7XG4gICAgZXhwZWN0KHJlc3VsdHMubGVuZ3RoKS50b0JlR3JlYXRlclRoYW4oMCk7XG4gICAgZXhwZWN0KHJlc3VsdHNbMF0uZ2V0KCdkYXRhJykubGVuZ3RoKS50b0JlKG51bSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjaGVja1Rvb2x0aXAoaW5jbHVkZVRleHQ6IHN0cmluZywgcG9pbnQ/OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0pIHtcbiAgICBpZiAoIXBvaW50KSB7XG4gICAgICBjb25zdCBnMkVsID0gdGhpcy5kbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgICAgcG9pbnQgPSB7XG4gICAgICAgIHg6IGcyRWwub2Zmc2V0V2lkdGggLyAyLFxuICAgICAgICB5OiBnMkVsLm9mZnNldEhlaWdodCAvIDIsXG4gICAgICB9O1xuICAgIH1cbiAgICB0aGlzLmNoYXJ0LnNob3dUb29sdGlwKHBvaW50KTtcbiAgICBjb25zdCBlbCA9IHRoaXMuZ2V0RWwoJy5nMi10b29sdGlwJyk7XG4gICAgaWYgKGluY2x1ZGVUZXh0ID09PSBudWxsKSB7XG4gICAgICBleHBlY3QoZWwgPT0gbnVsbCkudG9CZSh0cnVlLCBgU2hvdWxlIGJlIG5vdCBmb3VuZCBnMi10b29sdGlwIGVsZW1lbnRgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXhwZWN0KGVsICE9IG51bGwpLnRvQmUodHJ1ZSwgYFNob3VsZSBiZSBoYXMgZzItdG9vbHRpcCBlbGVtZW50YCk7XG4gICAgICBjb25zdCB0ZXh0ID0gZWwudGV4dENvbnRlbnQudHJpbSgpO1xuICAgICAgZXhwZWN0KHRleHQuaW5jbHVkZXMoaW5jbHVkZVRleHQpKS50b0JlKFxuICAgICAgICB0cnVlLFxuICAgICAgICBgU2hvdWxlIGJlIGluY2x1ZGUgXCIke2luY2x1ZGVUZXh0fVwiIHRleHQgb2YgdG9vbHRpcCB0ZXh0IGNvbnRleHQgXCIke3RleHR9XCJgLFxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrRGVsYXk8TSwgVD4obW9kdWxlOiBNLCBjb21wOiBUeXBlPFQ+LCBwYWdlOiBQYWdlRzI8VD4gPSBudWxsKSB7XG4gIGlmIChwYWdlID09IG51bGwpIHtcbiAgICBwYWdlID0gbmV3IFBhZ2VHMjxUPigpLm1ha2VNb2R1bGUobW9kdWxlLCBjb21wLCB7IGRjOiBmYWxzZSB9KTtcbiAgfVxuICBjb25zdCBjb250ZXh0ID0gcGFnZS5jb250ZXh0IGFzIGFueTtcbiAgaWYgKHR5cGVvZiBjb250ZXh0LmRlbGF5ID09PSAndW5kZWZpbmVkJykge1xuICAgIGNvbnNvbGUud2FybihgWW91IG11c2UgYmUgZGluZmVkIFwiZGVsYXlcIiBwcm9wZXJ0eSBpbiB0ZXN0IGNvbXBvbmVudGApO1xuICAgIHJldHVybjtcbiAgfVxuICBjb250ZXh0LmRlbGF5ID0gMTAwO1xuICBwYWdlLmRjKCk7XG4gIHBhZ2UuY29tcC5uZ09uRGVzdHJveSgpO1xuICBleHBlY3QocGFnZS5jaGFydCA9PSBudWxsKS50b0JlKHRydWUpO1xuICB0aWNrKDIwMSk7XG4gIGRpc2NhcmRQZXJpb2RpY1Rhc2tzKCk7XG59XG4iXX0=