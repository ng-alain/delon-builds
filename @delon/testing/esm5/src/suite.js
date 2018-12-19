var _this = this;
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
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
        function () { return this.fixture.componentInstance; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TestContext.prototype, "el", {
        get: /**
         * @return {?}
         */
        function () { return this.fixture.debugElement.nativeElement; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TestContext.prototype, "dl", {
        get: /**
         * @return {?}
         */
        function () { return this.fixture.debugElement; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TestContext.prototype, "context", {
        get: /**
         * @return {?}
         */
        function () { return this.fixture.componentInstance; },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TestContext.prototype.detectChanges = /**
     * @return {?}
     */
    function () { this.fixture.detectChanges(); };
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
export var configureTestSuite = function (configureAction) {
    /** @type {?} */
    var testBedApi = getTestBed();
    /** @type {?} */
    var originReset = TestBed.resetTestingModule;
    beforeAll(function () {
        TestBed.resetTestingModule();
        TestBed.resetTestingModule = function () { return TestBed; };
    });
    if (configureAction) {
        beforeAll(function (done) { return (function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
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
        }); })().then(done).catch(done.fail); });
    }
    afterEach(function () {
        testBedApi._activeFixtures.forEach(function (fixture) { return fixture.destroy(); });
        testBedApi._instantiated = false;
    });
    afterAll(function () {
        TestBed.resetTestingModule = originReset;
        TestBed.resetTestingModule();
    });
};
/** @type {?} */
export var createTestContext = function (component) {
    return new TestContext(TestBed.createComponent(component));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VpdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdGVzdGluZy8iLCJzb3VyY2VzIjpbInNyYy9zdWl0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFtREE7Ozs7OztBQWxEQSxPQUFPLEVBQUUsVUFBVSxFQUFvQixPQUFPLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7OztBQUU5RTs7OztJQUNFLHFCQUFtQixPQUE0QjtRQUE1QixZQUFPLEdBQVAsT0FBTyxDQUFxQjtJQUFJLENBQUM7SUFFcEQsc0JBQUksa0NBQVM7Ozs7UUFBYixjQUFrQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUUxRCxzQkFBSSwyQkFBRTs7OztRQUFOLGNBQXdCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFFekUsc0JBQUksMkJBQUU7Ozs7UUFBTixjQUFXLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUU5QyxzQkFBSSxnQ0FBTzs7OztRQUFYLGNBQWdCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7OztPQUFBOzs7O0lBRXhELG1DQUFhOzs7SUFBYixjQUFrQixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQzs7Ozs7O0lBRWpELDZCQUFPOzs7OztJQUFQLFVBQVksU0FBbUI7UUFDN0IsT0FBTyxtQkFBQSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUFNLENBQUM7SUFDakUsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQWhCRCxJQWdCQzs7Ozs7OztJQWZhLDhCQUFtQzs7O0FBaUJqRCxNQUFNLEtBQU8sa0JBQWtCLEdBQUcsVUFBQyxlQUE0Qjs7UUFDdkQsVUFBVSxHQUFRLFVBQVUsRUFBRTs7UUFDOUIsV0FBVyxHQUFHLE9BQU8sQ0FBQyxrQkFBa0I7SUFFOUMsU0FBUyxDQUFDO1FBQ1IsT0FBTyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDN0IsT0FBTyxDQUFDLGtCQUFrQixHQUFHLGNBQU0sT0FBQSxPQUFPLEVBQVAsQ0FBTyxDQUFDO0lBQzdDLENBQUMsQ0FBQyxDQUFDO0lBRUgsSUFBSSxlQUFlLEVBQUU7UUFDbkIsU0FBUyxDQUFDLFVBQUMsSUFBWSxJQUFLLE9BQUEsQ0FBQzs7Ozt3QkFDM0IsZUFBZSxFQUFFLENBQUM7d0JBQ2xCLHFCQUFNLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxFQUFBOzt3QkFBakMsU0FBaUMsQ0FBQzs7OzthQUNuQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFISixDQUdJLENBQUMsQ0FBQztLQUNuQztJQUVELFNBQVMsQ0FBQztRQUNSLFVBQVUsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBOEIsSUFBSyxPQUFBLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBakIsQ0FBaUIsQ0FBQyxDQUFDO1FBQzFGLFVBQVUsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQ25DLENBQUMsQ0FBQyxDQUFDO0lBRUgsUUFBUSxDQUFDO1FBQ1AsT0FBTyxDQUFDLGtCQUFrQixHQUFHLFdBQVcsQ0FBQztRQUN6QyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUMvQixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7O0FBRUQsTUFBTSxLQUFPLGlCQUFpQixHQUFHLFVBQUksU0FBa0I7SUFDckQsT0FBTyxJQUFJLFdBQVcsQ0FBSSxPQUFPLENBQUMsZUFBZSxDQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUM7QUFDbkUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGdldFRlc3RCZWQsIENvbXBvbmVudEZpeHR1cmUsIFRlc3RCZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlL3Rlc3RpbmcnO1xuXG5leHBvcnQgY2xhc3MgVGVzdENvbnRleHQ8VD4ge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZml4dHVyZTogQ29tcG9uZW50Rml4dHVyZTxUPikgeyB9XG5cbiAgZ2V0IGNvbXBvbmVudCgpIHsgcmV0dXJuIHRoaXMuZml4dHVyZS5jb21wb25lbnRJbnN0YW5jZTsgfVxuXG4gIGdldCBlbCgpOiBIVE1MRWxlbWVudCB7IHJldHVybiB0aGlzLmZpeHR1cmUuZGVidWdFbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7IH1cblxuICBnZXQgZGwoKSB7IHJldHVybiB0aGlzLmZpeHR1cmUuZGVidWdFbGVtZW50OyB9XG5cbiAgZ2V0IGNvbnRleHQoKSB7IHJldHVybiB0aGlzLmZpeHR1cmUuY29tcG9uZW50SW5zdGFuY2U7IH1cblxuICBkZXRlY3RDaGFuZ2VzKCkgeyB0aGlzLmZpeHR1cmUuZGV0ZWN0Q2hhbmdlcygpOyB9XG5cbiAgcmVzb2x2ZTxUMT4oY29tcG9uZW50OiBUeXBlPFQxPikge1xuICAgIHJldHVybiB0aGlzLmZpeHR1cmUuZGVidWdFbGVtZW50LmluamVjdG9yLmdldChjb21wb25lbnQpIGFzIFQxO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBjb25maWd1cmVUZXN0U3VpdGUgPSAoY29uZmlndXJlQWN0aW9uPzogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCB0ZXN0QmVkQXBpOiBhbnkgPSBnZXRUZXN0QmVkKCk7XG4gIGNvbnN0IG9yaWdpblJlc2V0ID0gVGVzdEJlZC5yZXNldFRlc3RpbmdNb2R1bGU7XG5cbiAgYmVmb3JlQWxsKCgpID0+IHtcbiAgICBUZXN0QmVkLnJlc2V0VGVzdGluZ01vZHVsZSgpO1xuICAgIFRlc3RCZWQucmVzZXRUZXN0aW5nTW9kdWxlID0gKCkgPT4gVGVzdEJlZDtcbiAgfSk7XG5cbiAgaWYgKGNvbmZpZ3VyZUFjdGlvbikge1xuICAgIGJlZm9yZUFsbCgoZG9uZTogRG9uZUZuKSA9PiAoYXN5bmMgKCkgPT4ge1xuICAgICAgY29uZmlndXJlQWN0aW9uKCk7XG4gICAgICBhd2FpdCBUZXN0QmVkLmNvbXBpbGVDb21wb25lbnRzKCk7XG4gICAgfSkoKS50aGVuKGRvbmUpLmNhdGNoKGRvbmUuZmFpbCkpO1xuICB9XG5cbiAgYWZ0ZXJFYWNoKCgpID0+IHtcbiAgICB0ZXN0QmVkQXBpLl9hY3RpdmVGaXh0dXJlcy5mb3JFYWNoKChmaXh0dXJlOiBDb21wb25lbnRGaXh0dXJlPGFueT4pID0+IGZpeHR1cmUuZGVzdHJveSgpKTtcbiAgICB0ZXN0QmVkQXBpLl9pbnN0YW50aWF0ZWQgPSBmYWxzZTtcbiAgfSk7XG5cbiAgYWZ0ZXJBbGwoKCkgPT4ge1xuICAgIFRlc3RCZWQucmVzZXRUZXN0aW5nTW9kdWxlID0gb3JpZ2luUmVzZXQ7XG4gICAgVGVzdEJlZC5yZXNldFRlc3RpbmdNb2R1bGUoKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlVGVzdENvbnRleHQgPSA8VD4oY29tcG9uZW50OiBUeXBlPFQ+KSA9PiB7XG4gIHJldHVybiBuZXcgVGVzdENvbnRleHQ8VD4oVGVzdEJlZC5jcmVhdGVDb21wb25lbnQ8VD4oY29tcG9uZW50KSk7XG59O1xuIl19