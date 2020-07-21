/**
 * @fileoverview added by tsickle
 * Generated from: src/suite.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { TestBed } from '@angular/core/testing';
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
export const createTestContext = (/**
 * @template T
 * @param {?} component
 * @return {?}
 */
(component) => {
    return new TestContext(TestBed.createComponent(component));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VpdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90ZXN0aW5nL3NyYy9zdWl0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBb0IsT0FBTyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7QUFFbEUsTUFBTSxPQUFPLFdBQVc7Ozs7SUFDdEIsWUFBbUIsT0FBNEI7UUFBNUIsWUFBTyxHQUFQLE9BQU8sQ0FBcUI7SUFBRyxDQUFDOzs7O0lBRW5ELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztJQUN4QyxDQUFDOzs7O0lBRUQsSUFBSSxFQUFFO1FBQ0osT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUM7SUFDakQsQ0FBQzs7OztJQUVELElBQUksRUFBRTtRQUNKLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7SUFDbkMsQ0FBQzs7OztJQUVELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztJQUN4QyxDQUFDOzs7O0lBRUQsYUFBYTtRQUNYLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDL0IsQ0FBQzs7Ozs7O0lBRUQsT0FBTyxDQUFLLFNBQW1CO1FBQzdCLE9BQU8sbUJBQUEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsRUFBTSxDQUFDO0lBQ2pFLENBQUM7Q0FDRjs7O0lBekJhLDhCQUFtQzs7O0FBMkJqRCxNQUFNLE9BQU8saUJBQWlCOzs7OztBQUFHLENBQUksU0FBa0IsRUFBRSxFQUFFO0lBQ3pELE9BQU8sSUFBSSxXQUFXLENBQUksT0FBTyxDQUFDLGVBQWUsQ0FBSSxTQUFTLENBQUMsQ0FBQyxDQUFDO0FBQ25FLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBvbmVudEZpeHR1cmUsIFRlc3RCZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlL3Rlc3RpbmcnO1xuXG5leHBvcnQgY2xhc3MgVGVzdENvbnRleHQ8VD4ge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZml4dHVyZTogQ29tcG9uZW50Rml4dHVyZTxUPikge31cblxuICBnZXQgY29tcG9uZW50KCkge1xuICAgIHJldHVybiB0aGlzLmZpeHR1cmUuY29tcG9uZW50SW5zdGFuY2U7XG4gIH1cblxuICBnZXQgZWwoKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLmZpeHR1cmUuZGVidWdFbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBnZXQgZGwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZml4dHVyZS5kZWJ1Z0VsZW1lbnQ7XG4gIH1cblxuICBnZXQgY29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5maXh0dXJlLmNvbXBvbmVudEluc3RhbmNlO1xuICB9XG5cbiAgZGV0ZWN0Q2hhbmdlcygpIHtcbiAgICB0aGlzLmZpeHR1cmUuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgcmVzb2x2ZTxUMT4oY29tcG9uZW50OiBUeXBlPFQxPikge1xuICAgIHJldHVybiB0aGlzLmZpeHR1cmUuZGVidWdFbGVtZW50LmluamVjdG9yLmdldChjb21wb25lbnQpIGFzIFQxO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVUZXN0Q29udGV4dCA9IDxUPihjb21wb25lbnQ6IFR5cGU8VD4pID0+IHtcbiAgcmV0dXJuIG5ldyBUZXN0Q29udGV4dDxUPihUZXN0QmVkLmNyZWF0ZUNvbXBvbmVudDxUPihjb21wb25lbnQpKTtcbn07XG4iXX0=