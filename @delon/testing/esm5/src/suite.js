/**
 * @fileoverview added by tsickle
 * Generated from: src/suite.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { TestBed } from '@angular/core/testing';
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
export var createTestContext = (/**
 * @template T
 * @param {?} component
 * @return {?}
 */
function (component) {
    return new TestContext(TestBed.createComponent(component));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VpdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdGVzdGluZy8iLCJzb3VyY2VzIjpbInNyYy9zdWl0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBb0IsT0FBTyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7QUFFbEU7Ozs7SUFDRSxxQkFBbUIsT0FBNEI7UUFBNUIsWUFBTyxHQUFQLE9BQU8sQ0FBcUI7SUFBRyxDQUFDO0lBRW5ELHNCQUFJLGtDQUFTOzs7O1FBQWI7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUM7UUFDeEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwyQkFBRTs7OztRQUFOO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUM7UUFDakQsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwyQkFBRTs7OztRQUFOO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQztRQUNuQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGdDQUFPOzs7O1FBQVg7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUM7UUFDeEMsQ0FBQzs7O09BQUE7Ozs7SUFFRCxtQ0FBYTs7O0lBQWI7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQy9CLENBQUM7Ozs7OztJQUVELDZCQUFPOzs7OztJQUFQLFVBQVksU0FBbUI7UUFDN0IsT0FBTyxtQkFBQSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUFNLENBQUM7SUFDakUsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQTFCRCxJQTBCQzs7Ozs7OztJQXpCYSw4QkFBbUM7OztBQTJCakQsTUFBTSxLQUFPLGlCQUFpQjs7Ozs7QUFBRyxVQUFJLFNBQWtCO0lBQ3JELE9BQU8sSUFBSSxXQUFXLENBQUksT0FBTyxDQUFDLGVBQWUsQ0FBSSxTQUFTLENBQUMsQ0FBQyxDQUFDO0FBQ25FLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBvbmVudEZpeHR1cmUsIFRlc3RCZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlL3Rlc3RpbmcnO1xuXG5leHBvcnQgY2xhc3MgVGVzdENvbnRleHQ8VD4ge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZml4dHVyZTogQ29tcG9uZW50Rml4dHVyZTxUPikge31cblxuICBnZXQgY29tcG9uZW50KCkge1xuICAgIHJldHVybiB0aGlzLmZpeHR1cmUuY29tcG9uZW50SW5zdGFuY2U7XG4gIH1cblxuICBnZXQgZWwoKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLmZpeHR1cmUuZGVidWdFbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBnZXQgZGwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZml4dHVyZS5kZWJ1Z0VsZW1lbnQ7XG4gIH1cblxuICBnZXQgY29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5maXh0dXJlLmNvbXBvbmVudEluc3RhbmNlO1xuICB9XG5cbiAgZGV0ZWN0Q2hhbmdlcygpIHtcbiAgICB0aGlzLmZpeHR1cmUuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgcmVzb2x2ZTxUMT4oY29tcG9uZW50OiBUeXBlPFQxPikge1xuICAgIHJldHVybiB0aGlzLmZpeHR1cmUuZGVidWdFbGVtZW50LmluamVjdG9yLmdldChjb21wb25lbnQpIGFzIFQxO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVUZXN0Q29udGV4dCA9IDxUPihjb21wb25lbnQ6IFR5cGU8VD4pID0+IHtcbiAgcmV0dXJuIG5ldyBUZXN0Q29udGV4dDxUPihUZXN0QmVkLmNyZWF0ZUNvbXBvbmVudDxUPihjb21wb25lbnQpKTtcbn07XG4iXX0=