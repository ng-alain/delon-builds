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
        beforeAll(function (done) {
            return (function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
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
            }); })()
                .then(done)
                .catch(done.fail);
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VpdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdGVzdGluZy8iLCJzb3VyY2VzIjpbInNyYy9zdWl0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFpRUE7Ozs7OztBQWhFQSxPQUFPLEVBQUUsVUFBVSxFQUFvQixPQUFPLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7OztBQUU5RTs7OztJQUNFLHFCQUFtQixPQUE0QjtRQUE1QixZQUFPLEdBQVAsT0FBTyxDQUFxQjtJQUFHLENBQUM7SUFFbkQsc0JBQUksa0NBQVM7Ozs7UUFBYjtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztRQUN4QyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDJCQUFFOzs7O1FBQU47WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQztRQUNqRCxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDJCQUFFOzs7O1FBQU47WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO1FBQ25DLENBQUM7OztPQUFBO0lBRUQsc0JBQUksZ0NBQU87Ozs7UUFBWDtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztRQUN4QyxDQUFDOzs7T0FBQTs7OztJQUVELG1DQUFhOzs7SUFBYjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDL0IsQ0FBQzs7Ozs7O0lBRUQsNkJBQU87Ozs7O0lBQVAsVUFBWSxTQUFtQjtRQUM3QixPQUFPLG1CQUFBLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEVBQU0sQ0FBQztJQUNqRSxDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQUFDLEFBMUJELElBMEJDOzs7Ozs7O0lBekJhLDhCQUFtQzs7O0FBMkJqRCxNQUFNLEtBQU8sa0JBQWtCLEdBQUcsVUFBQyxlQUE0Qjs7UUFDdkQsVUFBVSxHQUFRLFVBQVUsRUFBRTs7UUFDOUIsV0FBVyxHQUFHLE9BQU8sQ0FBQyxrQkFBa0I7SUFFOUMsU0FBUyxDQUFDO1FBQ1IsT0FBTyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDN0IsT0FBTyxDQUFDLGtCQUFrQixHQUFHLGNBQU0sT0FBQSxPQUFPLEVBQVAsQ0FBTyxDQUFDO0lBQzdDLENBQUMsQ0FBQyxDQUFDO0lBRUgsSUFBSSxlQUFlLEVBQUU7UUFDbkIsU0FBUyxDQUFDLFVBQUMsSUFBWTtZQUNyQixPQUFBLENBQUM7Ozs7NEJBQ0MsZUFBZSxFQUFFLENBQUM7NEJBQ2xCLHFCQUFNLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxFQUFBOzs0QkFBakMsU0FBaUMsQ0FBQzs7OztpQkFDbkMsQ0FBQyxFQUFFO2lCQUNELElBQUksQ0FBQyxJQUFJLENBQUM7aUJBQ1YsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFMbkIsQ0FLbUIsQ0FDcEIsQ0FBQztLQUNIO0lBRUQsU0FBUyxDQUFDO1FBQ1IsVUFBVSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsVUFBQyxPQUE4QixJQUFLLE9BQUEsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFqQixDQUFpQixDQUFDLENBQUM7UUFDMUYsVUFBVSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDbkMsQ0FBQyxDQUFDLENBQUM7SUFFSCxRQUFRLENBQUM7UUFDUCxPQUFPLENBQUMsa0JBQWtCLEdBQUcsV0FBVyxDQUFDO1FBQ3pDLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQy9CLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQzs7QUFFRCxNQUFNLEtBQU8saUJBQWlCLEdBQUcsVUFBSSxTQUFrQjtJQUNyRCxPQUFPLElBQUksV0FBVyxDQUFJLE9BQU8sQ0FBQyxlQUFlLENBQUksU0FBUyxDQUFDLENBQUMsQ0FBQztBQUNuRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZ2V0VGVzdEJlZCwgQ29tcG9uZW50Rml4dHVyZSwgVGVzdEJlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvdGVzdGluZyc7XG5cbmV4cG9ydCBjbGFzcyBUZXN0Q29udGV4dDxUPiB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBmaXh0dXJlOiBDb21wb25lbnRGaXh0dXJlPFQ+KSB7fVxuXG4gIGdldCBjb21wb25lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZml4dHVyZS5jb21wb25lbnRJbnN0YW5jZTtcbiAgfVxuXG4gIGdldCBlbCgpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuZml4dHVyZS5kZWJ1Z0VsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIGdldCBkbCgpIHtcbiAgICByZXR1cm4gdGhpcy5maXh0dXJlLmRlYnVnRWxlbWVudDtcbiAgfVxuXG4gIGdldCBjb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmZpeHR1cmUuY29tcG9uZW50SW5zdGFuY2U7XG4gIH1cblxuICBkZXRlY3RDaGFuZ2VzKCkge1xuICAgIHRoaXMuZml4dHVyZS5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICByZXNvbHZlPFQxPihjb21wb25lbnQ6IFR5cGU8VDE+KSB7XG4gICAgcmV0dXJuIHRoaXMuZml4dHVyZS5kZWJ1Z0VsZW1lbnQuaW5qZWN0b3IuZ2V0KGNvbXBvbmVudCkgYXMgVDE7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNvbmZpZ3VyZVRlc3RTdWl0ZSA9IChjb25maWd1cmVBY3Rpb24/OiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IHRlc3RCZWRBcGk6IGFueSA9IGdldFRlc3RCZWQoKTtcbiAgY29uc3Qgb3JpZ2luUmVzZXQgPSBUZXN0QmVkLnJlc2V0VGVzdGluZ01vZHVsZTtcblxuICBiZWZvcmVBbGwoKCkgPT4ge1xuICAgIFRlc3RCZWQucmVzZXRUZXN0aW5nTW9kdWxlKCk7XG4gICAgVGVzdEJlZC5yZXNldFRlc3RpbmdNb2R1bGUgPSAoKSA9PiBUZXN0QmVkO1xuICB9KTtcblxuICBpZiAoY29uZmlndXJlQWN0aW9uKSB7XG4gICAgYmVmb3JlQWxsKChkb25lOiBEb25lRm4pID0+XG4gICAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25maWd1cmVBY3Rpb24oKTtcbiAgICAgICAgYXdhaXQgVGVzdEJlZC5jb21waWxlQ29tcG9uZW50cygpO1xuICAgICAgfSkoKVxuICAgICAgICAudGhlbihkb25lKVxuICAgICAgICAuY2F0Y2goZG9uZS5mYWlsKSxcbiAgICApO1xuICB9XG5cbiAgYWZ0ZXJFYWNoKCgpID0+IHtcbiAgICB0ZXN0QmVkQXBpLl9hY3RpdmVGaXh0dXJlcy5mb3JFYWNoKChmaXh0dXJlOiBDb21wb25lbnRGaXh0dXJlPGFueT4pID0+IGZpeHR1cmUuZGVzdHJveSgpKTtcbiAgICB0ZXN0QmVkQXBpLl9pbnN0YW50aWF0ZWQgPSBmYWxzZTtcbiAgfSk7XG5cbiAgYWZ0ZXJBbGwoKCkgPT4ge1xuICAgIFRlc3RCZWQucmVzZXRUZXN0aW5nTW9kdWxlID0gb3JpZ2luUmVzZXQ7XG4gICAgVGVzdEJlZC5yZXNldFRlc3RpbmdNb2R1bGUoKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlVGVzdENvbnRleHQgPSA8VD4oY29tcG9uZW50OiBUeXBlPFQ+KSA9PiB7XG4gIHJldHVybiBuZXcgVGVzdENvbnRleHQ8VD4oVGVzdEJlZC5jcmVhdGVDb21wb25lbnQ8VD4oY29tcG9uZW50KSk7XG59O1xuIl19