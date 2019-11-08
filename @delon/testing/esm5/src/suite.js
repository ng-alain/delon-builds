/**
 * @fileoverview added by tsickle
 * Generated from: src/suite.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VpdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdGVzdGluZy8iLCJzb3VyY2VzIjpbInNyYy9zdWl0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGlCQWlFQTs7QUFoRUEsT0FBTyxFQUFFLFVBQVUsRUFBb0IsT0FBTyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7QUFFOUU7Ozs7SUFDRSxxQkFBbUIsT0FBNEI7UUFBNUIsWUFBTyxHQUFQLE9BQU8sQ0FBcUI7SUFBRyxDQUFDO0lBRW5ELHNCQUFJLGtDQUFTOzs7O1FBQWI7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUM7UUFDeEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwyQkFBRTs7OztRQUFOO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUM7UUFDakQsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwyQkFBRTs7OztRQUFOO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQztRQUNuQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGdDQUFPOzs7O1FBQVg7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUM7UUFDeEMsQ0FBQzs7O09BQUE7Ozs7SUFFRCxtQ0FBYTs7O0lBQWI7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQy9CLENBQUM7Ozs7OztJQUVELDZCQUFPOzs7OztJQUFQLFVBQVksU0FBbUI7UUFDN0IsT0FBTyxtQkFBQSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUFNLENBQUM7SUFDakUsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQTFCRCxJQTBCQzs7Ozs7OztJQXpCYSw4QkFBbUM7OztBQTJCakQsTUFBTSxLQUFPLGtCQUFrQjs7OztBQUFHLFVBQUMsZUFBNEI7O1FBQ3ZELFVBQVUsR0FBUSxVQUFVLEVBQUU7O1FBQzlCLFdBQVcsR0FBRyxPQUFPLENBQUMsa0JBQWtCO0lBRTlDLFNBQVM7OztJQUFDO1FBQ1IsT0FBTyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDN0IsT0FBTyxDQUFDLGtCQUFrQjs7O1FBQUcsY0FBTSxPQUFBLE9BQU8sRUFBUCxDQUFPLENBQUEsQ0FBQztJQUM3QyxDQUFDLEVBQUMsQ0FBQztJQUVILElBQUksZUFBZSxFQUFFO1FBQ25CLFNBQVM7Ozs7UUFBQyxVQUFDLElBQVk7WUFDckIsT0FBQTs7O1lBQUM7Ozs7NEJBQ0MsZUFBZSxFQUFFLENBQUM7NEJBQ2xCLHFCQUFNLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxFQUFBOzs0QkFBakMsU0FBaUMsQ0FBQzs7OztpQkFDbkMsRUFBQyxFQUFFO2lCQUNELElBQUksQ0FBQyxJQUFJLENBQUM7aUJBQ1YsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFMbkIsQ0FLbUIsRUFDcEIsQ0FBQztLQUNIO0lBRUQsU0FBUzs7O0lBQUM7UUFDUixVQUFVLENBQUMsZUFBZSxDQUFDLE9BQU87Ozs7UUFBQyxVQUFDLE9BQThCLElBQUssT0FBQSxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQWpCLENBQWlCLEVBQUMsQ0FBQztRQUMxRixVQUFVLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUNuQyxDQUFDLEVBQUMsQ0FBQztJQUVILFFBQVE7OztJQUFDO1FBQ1AsT0FBTyxDQUFDLGtCQUFrQixHQUFHLFdBQVcsQ0FBQztRQUN6QyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUMvQixDQUFDLEVBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQTs7QUFFRCxNQUFNLEtBQU8saUJBQWlCOzs7OztBQUFHLFVBQUksU0FBa0I7SUFDckQsT0FBTyxJQUFJLFdBQVcsQ0FBSSxPQUFPLENBQUMsZUFBZSxDQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUM7QUFDbkUsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZ2V0VGVzdEJlZCwgQ29tcG9uZW50Rml4dHVyZSwgVGVzdEJlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvdGVzdGluZyc7XG5cbmV4cG9ydCBjbGFzcyBUZXN0Q29udGV4dDxUPiB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBmaXh0dXJlOiBDb21wb25lbnRGaXh0dXJlPFQ+KSB7fVxuXG4gIGdldCBjb21wb25lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZml4dHVyZS5jb21wb25lbnRJbnN0YW5jZTtcbiAgfVxuXG4gIGdldCBlbCgpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuZml4dHVyZS5kZWJ1Z0VsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIGdldCBkbCgpIHtcbiAgICByZXR1cm4gdGhpcy5maXh0dXJlLmRlYnVnRWxlbWVudDtcbiAgfVxuXG4gIGdldCBjb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmZpeHR1cmUuY29tcG9uZW50SW5zdGFuY2U7XG4gIH1cblxuICBkZXRlY3RDaGFuZ2VzKCkge1xuICAgIHRoaXMuZml4dHVyZS5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICByZXNvbHZlPFQxPihjb21wb25lbnQ6IFR5cGU8VDE+KSB7XG4gICAgcmV0dXJuIHRoaXMuZml4dHVyZS5kZWJ1Z0VsZW1lbnQuaW5qZWN0b3IuZ2V0KGNvbXBvbmVudCkgYXMgVDE7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNvbmZpZ3VyZVRlc3RTdWl0ZSA9IChjb25maWd1cmVBY3Rpb24/OiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IHRlc3RCZWRBcGk6IGFueSA9IGdldFRlc3RCZWQoKTtcbiAgY29uc3Qgb3JpZ2luUmVzZXQgPSBUZXN0QmVkLnJlc2V0VGVzdGluZ01vZHVsZTtcblxuICBiZWZvcmVBbGwoKCkgPT4ge1xuICAgIFRlc3RCZWQucmVzZXRUZXN0aW5nTW9kdWxlKCk7XG4gICAgVGVzdEJlZC5yZXNldFRlc3RpbmdNb2R1bGUgPSAoKSA9PiBUZXN0QmVkO1xuICB9KTtcblxuICBpZiAoY29uZmlndXJlQWN0aW9uKSB7XG4gICAgYmVmb3JlQWxsKChkb25lOiBEb25lRm4pID0+XG4gICAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25maWd1cmVBY3Rpb24oKTtcbiAgICAgICAgYXdhaXQgVGVzdEJlZC5jb21waWxlQ29tcG9uZW50cygpO1xuICAgICAgfSkoKVxuICAgICAgICAudGhlbihkb25lKVxuICAgICAgICAuY2F0Y2goZG9uZS5mYWlsKSxcbiAgICApO1xuICB9XG5cbiAgYWZ0ZXJFYWNoKCgpID0+IHtcbiAgICB0ZXN0QmVkQXBpLl9hY3RpdmVGaXh0dXJlcy5mb3JFYWNoKChmaXh0dXJlOiBDb21wb25lbnRGaXh0dXJlPGFueT4pID0+IGZpeHR1cmUuZGVzdHJveSgpKTtcbiAgICB0ZXN0QmVkQXBpLl9pbnN0YW50aWF0ZWQgPSBmYWxzZTtcbiAgfSk7XG5cbiAgYWZ0ZXJBbGwoKCkgPT4ge1xuICAgIFRlc3RCZWQucmVzZXRUZXN0aW5nTW9kdWxlID0gb3JpZ2luUmVzZXQ7XG4gICAgVGVzdEJlZC5yZXNldFRlc3RpbmdNb2R1bGUoKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlVGVzdENvbnRleHQgPSA8VD4oY29tcG9uZW50OiBUeXBlPFQ+KSA9PiB7XG4gIHJldHVybiBuZXcgVGVzdENvbnRleHQ8VD4oVGVzdEJlZC5jcmVhdGVDb21wb25lbnQ8VD4oY29tcG9uZW50KSk7XG59O1xuIl19