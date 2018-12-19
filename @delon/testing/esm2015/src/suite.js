/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
    get component() { return this.fixture.componentInstance; }
    /**
     * @return {?}
     */
    get el() { return this.fixture.debugElement.nativeElement; }
    /**
     * @return {?}
     */
    get dl() { return this.fixture.debugElement; }
    /**
     * @return {?}
     */
    get context() { return this.fixture.componentInstance; }
    /**
     * @return {?}
     */
    detectChanges() { this.fixture.detectChanges(); }
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
export const configureTestSuite = (configureAction) => {
    /** @type {?} */
    const testBedApi = getTestBed();
    /** @type {?} */
    const originReset = TestBed.resetTestingModule;
    beforeAll(() => {
        TestBed.resetTestingModule();
        TestBed.resetTestingModule = () => TestBed;
    });
    if (configureAction) {
        beforeAll((done) => (() => tslib_1.__awaiter(this, void 0, void 0, function* () {
            configureAction();
            yield TestBed.compileComponents();
        }))().then(done).catch(done.fail));
    }
    afterEach(() => {
        testBedApi._activeFixtures.forEach((fixture) => fixture.destroy());
        testBedApi._instantiated = false;
    });
    afterAll(() => {
        TestBed.resetTestingModule = originReset;
        TestBed.resetTestingModule();
    });
};
/** @type {?} */
export const createTestContext = (component) => {
    return new TestContext(TestBed.createComponent(component));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VpdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdGVzdGluZy8iLCJzb3VyY2VzIjpbInNyYy9zdWl0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQW9CLE9BQU8sRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7O0FBRTlFLE1BQU0sT0FBTyxXQUFXOzs7O0lBQ3RCLFlBQW1CLE9BQTRCO1FBQTVCLFlBQU8sR0FBUCxPQUFPLENBQXFCO0lBQUksQ0FBQzs7OztJQUVwRCxJQUFJLFNBQVMsS0FBSyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDOzs7O0lBRTFELElBQUksRUFBRSxLQUFrQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7Ozs7SUFFekUsSUFBSSxFQUFFLEtBQUssT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7Ozs7SUFFOUMsSUFBSSxPQUFPLEtBQUssT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQzs7OztJQUV4RCxhQUFhLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUM7Ozs7OztJQUVqRCxPQUFPLENBQUssU0FBbUI7UUFDN0IsT0FBTyxtQkFBQSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUFNLENBQUM7SUFDakUsQ0FBQztDQUNGOzs7SUFmYSw4QkFBbUM7OztBQWlCakQsTUFBTSxPQUFPLGtCQUFrQixHQUFHLENBQUMsZUFBNEIsRUFBRSxFQUFFOztVQUMzRCxVQUFVLEdBQVEsVUFBVSxFQUFFOztVQUM5QixXQUFXLEdBQUcsT0FBTyxDQUFDLGtCQUFrQjtJQUU5QyxTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2IsT0FBTyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDN0IsT0FBTyxDQUFDLGtCQUFrQixHQUFHLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQztJQUM3QyxDQUFDLENBQUMsQ0FBQztJQUVILElBQUksZUFBZSxFQUFFO1FBQ25CLFNBQVMsQ0FBQyxDQUFDLElBQVksRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFTLEVBQUU7WUFDdEMsZUFBZSxFQUFFLENBQUM7WUFDbEIsTUFBTSxPQUFPLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUNwQyxDQUFDLENBQUEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztLQUNuQztJQUVELFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDYixVQUFVLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQThCLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQzFGLFVBQVUsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQ25DLENBQUMsQ0FBQyxDQUFDO0lBRUgsUUFBUSxDQUFDLEdBQUcsRUFBRTtRQUNaLE9BQU8sQ0FBQyxrQkFBa0IsR0FBRyxXQUFXLENBQUM7UUFDekMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDL0IsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDOztBQUVELE1BQU0sT0FBTyxpQkFBaUIsR0FBRyxDQUFJLFNBQWtCLEVBQUUsRUFBRTtJQUN6RCxPQUFPLElBQUksV0FBVyxDQUFJLE9BQU8sQ0FBQyxlQUFlLENBQUksU0FBUyxDQUFDLENBQUMsQ0FBQztBQUNuRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZ2V0VGVzdEJlZCwgQ29tcG9uZW50Rml4dHVyZSwgVGVzdEJlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvdGVzdGluZyc7XG5cbmV4cG9ydCBjbGFzcyBUZXN0Q29udGV4dDxUPiB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBmaXh0dXJlOiBDb21wb25lbnRGaXh0dXJlPFQ+KSB7IH1cblxuICBnZXQgY29tcG9uZW50KCkgeyByZXR1cm4gdGhpcy5maXh0dXJlLmNvbXBvbmVudEluc3RhbmNlOyB9XG5cbiAgZ2V0IGVsKCk6IEhUTUxFbGVtZW50IHsgcmV0dXJuIHRoaXMuZml4dHVyZS5kZWJ1Z0VsZW1lbnQubmF0aXZlRWxlbWVudDsgfVxuXG4gIGdldCBkbCgpIHsgcmV0dXJuIHRoaXMuZml4dHVyZS5kZWJ1Z0VsZW1lbnQ7IH1cblxuICBnZXQgY29udGV4dCgpIHsgcmV0dXJuIHRoaXMuZml4dHVyZS5jb21wb25lbnRJbnN0YW5jZTsgfVxuXG4gIGRldGVjdENoYW5nZXMoKSB7IHRoaXMuZml4dHVyZS5kZXRlY3RDaGFuZ2VzKCk7IH1cblxuICByZXNvbHZlPFQxPihjb21wb25lbnQ6IFR5cGU8VDE+KSB7XG4gICAgcmV0dXJuIHRoaXMuZml4dHVyZS5kZWJ1Z0VsZW1lbnQuaW5qZWN0b3IuZ2V0KGNvbXBvbmVudCkgYXMgVDE7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNvbmZpZ3VyZVRlc3RTdWl0ZSA9IChjb25maWd1cmVBY3Rpb24/OiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IHRlc3RCZWRBcGk6IGFueSA9IGdldFRlc3RCZWQoKTtcbiAgY29uc3Qgb3JpZ2luUmVzZXQgPSBUZXN0QmVkLnJlc2V0VGVzdGluZ01vZHVsZTtcblxuICBiZWZvcmVBbGwoKCkgPT4ge1xuICAgIFRlc3RCZWQucmVzZXRUZXN0aW5nTW9kdWxlKCk7XG4gICAgVGVzdEJlZC5yZXNldFRlc3RpbmdNb2R1bGUgPSAoKSA9PiBUZXN0QmVkO1xuICB9KTtcblxuICBpZiAoY29uZmlndXJlQWN0aW9uKSB7XG4gICAgYmVmb3JlQWxsKChkb25lOiBEb25lRm4pID0+IChhc3luYyAoKSA9PiB7XG4gICAgICBjb25maWd1cmVBY3Rpb24oKTtcbiAgICAgIGF3YWl0IFRlc3RCZWQuY29tcGlsZUNvbXBvbmVudHMoKTtcbiAgICB9KSgpLnRoZW4oZG9uZSkuY2F0Y2goZG9uZS5mYWlsKSk7XG4gIH1cblxuICBhZnRlckVhY2goKCkgPT4ge1xuICAgIHRlc3RCZWRBcGkuX2FjdGl2ZUZpeHR1cmVzLmZvckVhY2goKGZpeHR1cmU6IENvbXBvbmVudEZpeHR1cmU8YW55PikgPT4gZml4dHVyZS5kZXN0cm95KCkpO1xuICAgIHRlc3RCZWRBcGkuX2luc3RhbnRpYXRlZCA9IGZhbHNlO1xuICB9KTtcblxuICBhZnRlckFsbCgoKSA9PiB7XG4gICAgVGVzdEJlZC5yZXNldFRlc3RpbmdNb2R1bGUgPSBvcmlnaW5SZXNldDtcbiAgICBUZXN0QmVkLnJlc2V0VGVzdGluZ01vZHVsZSgpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVUZXN0Q29udGV4dCA9IDxUPihjb21wb25lbnQ6IFR5cGU8VD4pID0+IHtcbiAgcmV0dXJuIG5ldyBUZXN0Q29udGV4dDxUPihUZXN0QmVkLmNyZWF0ZUNvbXBvbmVudDxUPihjb21wb25lbnQpKTtcbn07XG4iXX0=