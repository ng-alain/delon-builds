/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var _this = this;
import * as tslib_1 from "tslib";
import { getTestBed, TestBed } from '@angular/core/testing';
/**
 * @template T
 */
var /**
 * @template T
 */
TestContext = /** @class */ (function () {
    function TestContext(fixture) {
        this.fixture = fixture;
    }
    Object.defineProperty(TestContext.prototype, "component", {
        get: /**
         * @return {?}
         */
        function () {
            return this.fixture.componentInstance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TestContext.prototype, "el", {
        get: /**
         * @return {?}
         */
        function () {
            return this.fixture.debugElement.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TestContext.prototype, "dl", {
        get: /**
         * @return {?}
         */
        function () {
            return this.fixture.debugElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TestContext.prototype, "context", {
        get: /**
         * @return {?}
         */
        function () {
            return this.fixture.componentInstance;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TestContext.prototype.detectChanges = /**
     * @return {?}
     */
    function () {
        this.fixture.detectChanges();
    };
    /**
     * @template T1
     * @param {?} component
     * @return {?}
     */
    TestContext.prototype.resolve = /**
     * @template T1
     * @param {?} component
     * @return {?}
     */
    function (component) {
        return (/** @type {?} */ (this.fixture.debugElement.injector.get(component)));
    };
    return TestContext;
}());
/**
 * @template T
 */
export { TestContext };
if (false) {
    /** @type {?} */
    TestContext.prototype.fixture;
}
/** @type {?} */
export var configureTestSuite = (/**
 * @param {?=} configureAction
 * @return {?}
 */
function (configureAction) {
    /** @type {?} */
    var testBedApi = getTestBed();
    /** @type {?} */
    var originReset = TestBed.resetTestingModule;
    beforeAll((/**
     * @return {?}
     */
    function () {
        TestBed.resetTestingModule();
        TestBed.resetTestingModule = (/**
         * @return {?}
         */
        function () { return TestBed; });
    }));
    if (configureAction) {
        beforeAll((/**
         * @param {?} done
         * @return {?}
         */
        function (done) {
            return ((/**
             * @return {?}
             */
            function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            configureAction();
                            return [4 /*yield*/, TestBed.compileComponents()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); }))()
                .then(done)
                .catch(done.fail);
        }));
    }
    afterEach((/**
     * @return {?}
     */
    function () {
        testBedApi._activeFixtures.forEach((/**
         * @param {?} fixture
         * @return {?}
         */
        function (fixture) { return fixture.destroy(); }));
        testBedApi._instantiated = false;
    }));
    afterAll((/**
     * @return {?}
     */
    function () {
        TestBed.resetTestingModule = originReset;
        TestBed.resetTestingModule();
    }));
});
/** @type {?} */
export var createTestContext = (/**
 * @template T
 * @param {?} component
 * @return {?}
 */
function (component) {
    return new TestContext(TestBed.createComponent(component));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VpdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdGVzdGluZy8iLCJzb3VyY2VzIjpbInNyYy9zdWl0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsaUJBaUVBOztBQWhFQSxPQUFPLEVBQUUsVUFBVSxFQUFvQixPQUFPLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7OztBQUU5RTs7OztJQUNFLHFCQUFtQixPQUE0QjtRQUE1QixZQUFPLEdBQVAsT0FBTyxDQUFxQjtJQUFHLENBQUM7SUFFbkQsc0JBQUksa0NBQVM7Ozs7UUFBYjtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztRQUN4QyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDJCQUFFOzs7O1FBQU47WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQztRQUNqRCxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDJCQUFFOzs7O1FBQU47WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO1FBQ25DLENBQUM7OztPQUFBO0lBRUQsc0JBQUksZ0NBQU87Ozs7UUFBWDtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztRQUN4QyxDQUFDOzs7T0FBQTs7OztJQUVELG1DQUFhOzs7SUFBYjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDL0IsQ0FBQzs7Ozs7O0lBRUQsNkJBQU87Ozs7O0lBQVAsVUFBWSxTQUFtQjtRQUM3QixPQUFPLG1CQUFBLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEVBQU0sQ0FBQztJQUNqRSxDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQUFDLEFBMUJELElBMEJDOzs7Ozs7O0lBekJhLDhCQUFtQzs7O0FBMkJqRCxNQUFNLEtBQU8sa0JBQWtCOzs7O0FBQUcsVUFBQyxlQUE0Qjs7UUFDdkQsVUFBVSxHQUFRLFVBQVUsRUFBRTs7UUFDOUIsV0FBVyxHQUFHLE9BQU8sQ0FBQyxrQkFBa0I7SUFFOUMsU0FBUzs7O0lBQUM7UUFDUixPQUFPLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUM3QixPQUFPLENBQUMsa0JBQWtCOzs7UUFBRyxjQUFNLE9BQUEsT0FBTyxFQUFQLENBQU8sQ0FBQSxDQUFDO0lBQzdDLENBQUMsRUFBQyxDQUFDO0lBRUgsSUFBSSxlQUFlLEVBQUU7UUFDbkIsU0FBUzs7OztRQUFDLFVBQUMsSUFBWTtZQUNyQixPQUFBOzs7WUFBQzs7Ozs0QkFDQyxlQUFlLEVBQUUsQ0FBQzs0QkFDbEIscUJBQU0sT0FBTyxDQUFDLGlCQUFpQixFQUFFLEVBQUE7OzRCQUFqQyxTQUFpQyxDQUFDOzs7O2lCQUNuQyxFQUFDLEVBQUU7aUJBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQztpQkFDVixLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUxuQixDQUttQixFQUNwQixDQUFDO0tBQ0g7SUFFRCxTQUFTOzs7SUFBQztRQUNSLFVBQVUsQ0FBQyxlQUFlLENBQUMsT0FBTzs7OztRQUFDLFVBQUMsT0FBOEIsSUFBSyxPQUFBLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBakIsQ0FBaUIsRUFBQyxDQUFDO1FBQzFGLFVBQVUsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQ25DLENBQUMsRUFBQyxDQUFDO0lBRUgsUUFBUTs7O0lBQUM7UUFDUCxPQUFPLENBQUMsa0JBQWtCLEdBQUcsV0FBVyxDQUFDO1FBQ3pDLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQy9CLENBQUMsRUFBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFBOztBQUVELE1BQU0sS0FBTyxpQkFBaUI7Ozs7O0FBQUcsVUFBSSxTQUFrQjtJQUNyRCxPQUFPLElBQUksV0FBVyxDQUFJLE9BQU8sQ0FBQyxlQUFlLENBQUksU0FBUyxDQUFDLENBQUMsQ0FBQztBQUNuRSxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBnZXRUZXN0QmVkLCBDb21wb25lbnRGaXh0dXJlLCBUZXN0QmVkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcblxuZXhwb3J0IGNsYXNzIFRlc3RDb250ZXh0PFQ+IHtcbiAgY29uc3RydWN0b3IocHVibGljIGZpeHR1cmU6IENvbXBvbmVudEZpeHR1cmU8VD4pIHt9XG5cbiAgZ2V0IGNvbXBvbmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5maXh0dXJlLmNvbXBvbmVudEluc3RhbmNlO1xuICB9XG5cbiAgZ2V0IGVsKCk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5maXh0dXJlLmRlYnVnRWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgZ2V0IGRsKCkge1xuICAgIHJldHVybiB0aGlzLmZpeHR1cmUuZGVidWdFbGVtZW50O1xuICB9XG5cbiAgZ2V0IGNvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZml4dHVyZS5jb21wb25lbnRJbnN0YW5jZTtcbiAgfVxuXG4gIGRldGVjdENoYW5nZXMoKSB7XG4gICAgdGhpcy5maXh0dXJlLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHJlc29sdmU8VDE+KGNvbXBvbmVudDogVHlwZTxUMT4pIHtcbiAgICByZXR1cm4gdGhpcy5maXh0dXJlLmRlYnVnRWxlbWVudC5pbmplY3Rvci5nZXQoY29tcG9uZW50KSBhcyBUMTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgY29uZmlndXJlVGVzdFN1aXRlID0gKGNvbmZpZ3VyZUFjdGlvbj86ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3QgdGVzdEJlZEFwaTogYW55ID0gZ2V0VGVzdEJlZCgpO1xuICBjb25zdCBvcmlnaW5SZXNldCA9IFRlc3RCZWQucmVzZXRUZXN0aW5nTW9kdWxlO1xuXG4gIGJlZm9yZUFsbCgoKSA9PiB7XG4gICAgVGVzdEJlZC5yZXNldFRlc3RpbmdNb2R1bGUoKTtcbiAgICBUZXN0QmVkLnJlc2V0VGVzdGluZ01vZHVsZSA9ICgpID0+IFRlc3RCZWQ7XG4gIH0pO1xuXG4gIGlmIChjb25maWd1cmVBY3Rpb24pIHtcbiAgICBiZWZvcmVBbGwoKGRvbmU6IERvbmVGbikgPT5cbiAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbmZpZ3VyZUFjdGlvbigpO1xuICAgICAgICBhd2FpdCBUZXN0QmVkLmNvbXBpbGVDb21wb25lbnRzKCk7XG4gICAgICB9KSgpXG4gICAgICAgIC50aGVuKGRvbmUpXG4gICAgICAgIC5jYXRjaChkb25lLmZhaWwpLFxuICAgICk7XG4gIH1cblxuICBhZnRlckVhY2goKCkgPT4ge1xuICAgIHRlc3RCZWRBcGkuX2FjdGl2ZUZpeHR1cmVzLmZvckVhY2goKGZpeHR1cmU6IENvbXBvbmVudEZpeHR1cmU8YW55PikgPT4gZml4dHVyZS5kZXN0cm95KCkpO1xuICAgIHRlc3RCZWRBcGkuX2luc3RhbnRpYXRlZCA9IGZhbHNlO1xuICB9KTtcblxuICBhZnRlckFsbCgoKSA9PiB7XG4gICAgVGVzdEJlZC5yZXNldFRlc3RpbmdNb2R1bGUgPSBvcmlnaW5SZXNldDtcbiAgICBUZXN0QmVkLnJlc2V0VGVzdGluZ01vZHVsZSgpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVUZXN0Q29udGV4dCA9IDxUPihjb21wb25lbnQ6IFR5cGU8VD4pID0+IHtcbiAgcmV0dXJuIG5ldyBUZXN0Q29udGV4dDxUPihUZXN0QmVkLmNyZWF0ZUNvbXBvbmVudDxUPihjb21wb25lbnQpKTtcbn07XG4iXX0=