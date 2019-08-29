/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VpdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdGVzdGluZy8iLCJzb3VyY2VzIjpbInNyYy9zdWl0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQW9CLE9BQU8sRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7O0FBRTlFLE1BQU0sT0FBTyxXQUFXOzs7O0lBQ3RCLFlBQW1CLE9BQTRCO1FBQTVCLFlBQU8sR0FBUCxPQUFPLENBQXFCO0lBQUcsQ0FBQzs7OztJQUVuRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUM7SUFDeEMsQ0FBQzs7OztJQUVELElBQUksRUFBRTtRQUNKLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDO0lBQ2pELENBQUM7Ozs7SUFFRCxJQUFJLEVBQUU7UUFDSixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO0lBQ25DLENBQUM7Ozs7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUM7SUFDeEMsQ0FBQzs7OztJQUVELGFBQWE7UUFDWCxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQy9CLENBQUM7Ozs7OztJQUVELE9BQU8sQ0FBSyxTQUFtQjtRQUM3QixPQUFPLG1CQUFBLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEVBQU0sQ0FBQztJQUNqRSxDQUFDO0NBQ0Y7OztJQXpCYSw4QkFBbUM7OztBQTJCakQsTUFBTSxPQUFPLGtCQUFrQjs7OztBQUFHLENBQUMsZUFBNEIsRUFBRSxFQUFFOztVQUMzRCxVQUFVLEdBQVEsVUFBVSxFQUFFOztVQUM5QixXQUFXLEdBQUcsT0FBTyxDQUFDLGtCQUFrQjtJQUU5QyxTQUFTOzs7SUFBQyxHQUFHLEVBQUU7UUFDYixPQUFPLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUM3QixPQUFPLENBQUMsa0JBQWtCOzs7UUFBRyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUEsQ0FBQztJQUM3QyxDQUFDLEVBQUMsQ0FBQztJQUVILElBQUksZUFBZSxFQUFFO1FBQ25CLFNBQVM7Ozs7UUFBQyxDQUFDLElBQVksRUFBRSxFQUFFLENBQ3pCOzs7UUFBQyxHQUFTLEVBQUU7WUFDVixlQUFlLEVBQUUsQ0FBQztZQUNsQixNQUFNLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3BDLENBQUMsQ0FBQSxFQUFDLEVBQUU7YUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ1YsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFDcEIsQ0FBQztLQUNIO0lBRUQsU0FBUzs7O0lBQUMsR0FBRyxFQUFFO1FBQ2IsVUFBVSxDQUFDLGVBQWUsQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxPQUE4QixFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQUMsQ0FBQztRQUMxRixVQUFVLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUNuQyxDQUFDLEVBQUMsQ0FBQztJQUVILFFBQVE7OztJQUFDLEdBQUcsRUFBRTtRQUNaLE9BQU8sQ0FBQyxrQkFBa0IsR0FBRyxXQUFXLENBQUM7UUFDekMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDL0IsQ0FBQyxFQUFDLENBQUM7QUFDTCxDQUFDLENBQUE7O0FBRUQsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7QUFBRyxDQUFJLFNBQWtCLEVBQUUsRUFBRTtJQUN6RCxPQUFPLElBQUksV0FBVyxDQUFJLE9BQU8sQ0FBQyxlQUFlLENBQUksU0FBUyxDQUFDLENBQUMsQ0FBQztBQUNuRSxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBnZXRUZXN0QmVkLCBDb21wb25lbnRGaXh0dXJlLCBUZXN0QmVkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcblxuZXhwb3J0IGNsYXNzIFRlc3RDb250ZXh0PFQ+IHtcbiAgY29uc3RydWN0b3IocHVibGljIGZpeHR1cmU6IENvbXBvbmVudEZpeHR1cmU8VD4pIHt9XG5cbiAgZ2V0IGNvbXBvbmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5maXh0dXJlLmNvbXBvbmVudEluc3RhbmNlO1xuICB9XG5cbiAgZ2V0IGVsKCk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5maXh0dXJlLmRlYnVnRWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgZ2V0IGRsKCkge1xuICAgIHJldHVybiB0aGlzLmZpeHR1cmUuZGVidWdFbGVtZW50O1xuICB9XG5cbiAgZ2V0IGNvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZml4dHVyZS5jb21wb25lbnRJbnN0YW5jZTtcbiAgfVxuXG4gIGRldGVjdENoYW5nZXMoKSB7XG4gICAgdGhpcy5maXh0dXJlLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHJlc29sdmU8VDE+KGNvbXBvbmVudDogVHlwZTxUMT4pIHtcbiAgICByZXR1cm4gdGhpcy5maXh0dXJlLmRlYnVnRWxlbWVudC5pbmplY3Rvci5nZXQoY29tcG9uZW50KSBhcyBUMTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgY29uZmlndXJlVGVzdFN1aXRlID0gKGNvbmZpZ3VyZUFjdGlvbj86ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3QgdGVzdEJlZEFwaTogYW55ID0gZ2V0VGVzdEJlZCgpO1xuICBjb25zdCBvcmlnaW5SZXNldCA9IFRlc3RCZWQucmVzZXRUZXN0aW5nTW9kdWxlO1xuXG4gIGJlZm9yZUFsbCgoKSA9PiB7XG4gICAgVGVzdEJlZC5yZXNldFRlc3RpbmdNb2R1bGUoKTtcbiAgICBUZXN0QmVkLnJlc2V0VGVzdGluZ01vZHVsZSA9ICgpID0+IFRlc3RCZWQ7XG4gIH0pO1xuXG4gIGlmIChjb25maWd1cmVBY3Rpb24pIHtcbiAgICBiZWZvcmVBbGwoKGRvbmU6IERvbmVGbikgPT5cbiAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbmZpZ3VyZUFjdGlvbigpO1xuICAgICAgICBhd2FpdCBUZXN0QmVkLmNvbXBpbGVDb21wb25lbnRzKCk7XG4gICAgICB9KSgpXG4gICAgICAgIC50aGVuKGRvbmUpXG4gICAgICAgIC5jYXRjaChkb25lLmZhaWwpLFxuICAgICk7XG4gIH1cblxuICBhZnRlckVhY2goKCkgPT4ge1xuICAgIHRlc3RCZWRBcGkuX2FjdGl2ZUZpeHR1cmVzLmZvckVhY2goKGZpeHR1cmU6IENvbXBvbmVudEZpeHR1cmU8YW55PikgPT4gZml4dHVyZS5kZXN0cm95KCkpO1xuICAgIHRlc3RCZWRBcGkuX2luc3RhbnRpYXRlZCA9IGZhbHNlO1xuICB9KTtcblxuICBhZnRlckFsbCgoKSA9PiB7XG4gICAgVGVzdEJlZC5yZXNldFRlc3RpbmdNb2R1bGUgPSBvcmlnaW5SZXNldDtcbiAgICBUZXN0QmVkLnJlc2V0VGVzdGluZ01vZHVsZSgpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVUZXN0Q29udGV4dCA9IDxUPihjb21wb25lbnQ6IFR5cGU8VD4pID0+IHtcbiAgcmV0dXJuIG5ldyBUZXN0Q29udGV4dDxUPihUZXN0QmVkLmNyZWF0ZUNvbXBvbmVudDxUPihjb21wb25lbnQpKTtcbn07XG4iXX0=