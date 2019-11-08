/**
 * @fileoverview added by tsickle
 * Generated from: src/suite.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { getTestBed, TestBed } from '@angular/core/testing';
/**
 * @template T
 */
export class TestContext {
    /**
     * @param {?} fixture
     */
    constructor(fixture) {
        this.fixture = fixture;
    }
    /**
     * @return {?}
     */
    get component() {
        return this.fixture.componentInstance;
    }
    /**
     * @return {?}
     */
    get el() {
        return this.fixture.debugElement.nativeElement;
    }
    /**
     * @return {?}
     */
    get dl() {
        return this.fixture.debugElement;
    }
    /**
     * @return {?}
     */
    get context() {
        return this.fixture.componentInstance;
    }
    /**
     * @return {?}
     */
    detectChanges() {
        this.fixture.detectChanges();
    }
    /**
     * @template T1
     * @param {?} component
     * @return {?}
     */
    resolve(component) {
        return (/** @type {?} */ (this.fixture.debugElement.injector.get(component)));
    }
}
if (false) {
    /** @type {?} */
    TestContext.prototype.fixture;
}
/** @type {?} */
export const configureTestSuite = (/**
 * @param {?=} configureAction
 * @return {?}
 */
(configureAction) => {
    /** @type {?} */
    const testBedApi = getTestBed();
    /** @type {?} */
    const originReset = TestBed.resetTestingModule;
    beforeAll((/**
     * @return {?}
     */
    () => {
        TestBed.resetTestingModule();
        TestBed.resetTestingModule = (/**
         * @return {?}
         */
        () => TestBed);
    }));
    if (configureAction) {
        beforeAll((/**
         * @param {?} done
         * @return {?}
         */
        (done) => ((/**
         * @return {?}
         */
        () => tslib_1.__awaiter(this, void 0, void 0, function* () {
            configureAction();
            yield TestBed.compileComponents();
        })))()
            .then(done)
            .catch(done.fail)));
    }
    afterEach((/**
     * @return {?}
     */
    () => {
        testBedApi._activeFixtures.forEach((/**
         * @param {?} fixture
         * @return {?}
         */
        (fixture) => fixture.destroy()));
        testBedApi._instantiated = false;
    }));
    afterAll((/**
     * @return {?}
     */
    () => {
        TestBed.resetTestingModule = originReset;
        TestBed.resetTestingModule();
    }));
});
/** @type {?} */
export const createTestContext = (/**
 * @template T
 * @param {?} component
 * @return {?}
 */
(component) => {
    return new TestContext(TestBed.createComponent(component));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VpdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdGVzdGluZy8iLCJzb3VyY2VzIjpbInNyYy9zdWl0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFvQixPQUFPLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7OztBQUU5RSxNQUFNLE9BQU8sV0FBVzs7OztJQUN0QixZQUFtQixPQUE0QjtRQUE1QixZQUFPLEdBQVAsT0FBTyxDQUFxQjtJQUFHLENBQUM7Ozs7SUFFbkQsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDO0lBQ3hDLENBQUM7Ozs7SUFFRCxJQUFJLEVBQUU7UUFDSixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQztJQUNqRCxDQUFDOzs7O0lBRUQsSUFBSSxFQUFFO1FBQ0osT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQztJQUNuQyxDQUFDOzs7O0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDO0lBQ3hDLENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMvQixDQUFDOzs7Ozs7SUFFRCxPQUFPLENBQUssU0FBbUI7UUFDN0IsT0FBTyxtQkFBQSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUFNLENBQUM7SUFDakUsQ0FBQztDQUNGOzs7SUF6QmEsOEJBQW1DOzs7QUEyQmpELE1BQU0sT0FBTyxrQkFBa0I7Ozs7QUFBRyxDQUFDLGVBQTRCLEVBQUUsRUFBRTs7VUFDM0QsVUFBVSxHQUFRLFVBQVUsRUFBRTs7VUFDOUIsV0FBVyxHQUFHLE9BQU8sQ0FBQyxrQkFBa0I7SUFFOUMsU0FBUzs7O0lBQUMsR0FBRyxFQUFFO1FBQ2IsT0FBTyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDN0IsT0FBTyxDQUFDLGtCQUFrQjs7O1FBQUcsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFBLENBQUM7SUFDN0MsQ0FBQyxFQUFDLENBQUM7SUFFSCxJQUFJLGVBQWUsRUFBRTtRQUNuQixTQUFTOzs7O1FBQUMsQ0FBQyxJQUFZLEVBQUUsRUFBRSxDQUN6Qjs7O1FBQUMsR0FBUyxFQUFFO1lBQ1YsZUFBZSxFQUFFLENBQUM7WUFDbEIsTUFBTSxPQUFPLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUNwQyxDQUFDLENBQUEsRUFBQyxFQUFFO2FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNWLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQ3BCLENBQUM7S0FDSDtJQUVELFNBQVM7OztJQUFDLEdBQUcsRUFBRTtRQUNiLFVBQVUsQ0FBQyxlQUFlLENBQUMsT0FBTzs7OztRQUFDLENBQUMsT0FBOEIsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFDLENBQUM7UUFDMUYsVUFBVSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDbkMsQ0FBQyxFQUFDLENBQUM7SUFFSCxRQUFROzs7SUFBQyxHQUFHLEVBQUU7UUFDWixPQUFPLENBQUMsa0JBQWtCLEdBQUcsV0FBVyxDQUFDO1FBQ3pDLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQy9CLENBQUMsRUFBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFBOztBQUVELE1BQU0sT0FBTyxpQkFBaUI7Ozs7O0FBQUcsQ0FBSSxTQUFrQixFQUFFLEVBQUU7SUFDekQsT0FBTyxJQUFJLFdBQVcsQ0FBSSxPQUFPLENBQUMsZUFBZSxDQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUM7QUFDbkUsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZ2V0VGVzdEJlZCwgQ29tcG9uZW50Rml4dHVyZSwgVGVzdEJlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvdGVzdGluZyc7XG5cbmV4cG9ydCBjbGFzcyBUZXN0Q29udGV4dDxUPiB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBmaXh0dXJlOiBDb21wb25lbnRGaXh0dXJlPFQ+KSB7fVxuXG4gIGdldCBjb21wb25lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZml4dHVyZS5jb21wb25lbnRJbnN0YW5jZTtcbiAgfVxuXG4gIGdldCBlbCgpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuZml4dHVyZS5kZWJ1Z0VsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIGdldCBkbCgpIHtcbiAgICByZXR1cm4gdGhpcy5maXh0dXJlLmRlYnVnRWxlbWVudDtcbiAgfVxuXG4gIGdldCBjb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmZpeHR1cmUuY29tcG9uZW50SW5zdGFuY2U7XG4gIH1cblxuICBkZXRlY3RDaGFuZ2VzKCkge1xuICAgIHRoaXMuZml4dHVyZS5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICByZXNvbHZlPFQxPihjb21wb25lbnQ6IFR5cGU8VDE+KSB7XG4gICAgcmV0dXJuIHRoaXMuZml4dHVyZS5kZWJ1Z0VsZW1lbnQuaW5qZWN0b3IuZ2V0KGNvbXBvbmVudCkgYXMgVDE7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNvbmZpZ3VyZVRlc3RTdWl0ZSA9IChjb25maWd1cmVBY3Rpb24/OiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IHRlc3RCZWRBcGk6IGFueSA9IGdldFRlc3RCZWQoKTtcbiAgY29uc3Qgb3JpZ2luUmVzZXQgPSBUZXN0QmVkLnJlc2V0VGVzdGluZ01vZHVsZTtcblxuICBiZWZvcmVBbGwoKCkgPT4ge1xuICAgIFRlc3RCZWQucmVzZXRUZXN0aW5nTW9kdWxlKCk7XG4gICAgVGVzdEJlZC5yZXNldFRlc3RpbmdNb2R1bGUgPSAoKSA9PiBUZXN0QmVkO1xuICB9KTtcblxuICBpZiAoY29uZmlndXJlQWN0aW9uKSB7XG4gICAgYmVmb3JlQWxsKChkb25lOiBEb25lRm4pID0+XG4gICAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25maWd1cmVBY3Rpb24oKTtcbiAgICAgICAgYXdhaXQgVGVzdEJlZC5jb21waWxlQ29tcG9uZW50cygpO1xuICAgICAgfSkoKVxuICAgICAgICAudGhlbihkb25lKVxuICAgICAgICAuY2F0Y2goZG9uZS5mYWlsKSxcbiAgICApO1xuICB9XG5cbiAgYWZ0ZXJFYWNoKCgpID0+IHtcbiAgICB0ZXN0QmVkQXBpLl9hY3RpdmVGaXh0dXJlcy5mb3JFYWNoKChmaXh0dXJlOiBDb21wb25lbnRGaXh0dXJlPGFueT4pID0+IGZpeHR1cmUuZGVzdHJveSgpKTtcbiAgICB0ZXN0QmVkQXBpLl9pbnN0YW50aWF0ZWQgPSBmYWxzZTtcbiAgfSk7XG5cbiAgYWZ0ZXJBbGwoKCkgPT4ge1xuICAgIFRlc3RCZWQucmVzZXRUZXN0aW5nTW9kdWxlID0gb3JpZ2luUmVzZXQ7XG4gICAgVGVzdEJlZC5yZXNldFRlc3RpbmdNb2R1bGUoKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlVGVzdENvbnRleHQgPSA8VD4oY29tcG9uZW50OiBUeXBlPFQ+KSA9PiB7XG4gIHJldHVybiBuZXcgVGVzdENvbnRleHQ8VD4oVGVzdEJlZC5jcmVhdGVDb21wb25lbnQ8VD4oY29tcG9uZW50KSk7XG59O1xuIl19