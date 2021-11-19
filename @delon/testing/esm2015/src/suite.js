import { TestBed } from '@angular/core/testing';
export class TestContext {
    constructor(fixture) {
        this.fixture = fixture;
    }
    get component() {
        return this.fixture.componentInstance;
    }
    get el() {
        return this.fixture.debugElement.nativeElement;
    }
    get dl() {
        return this.fixture.debugElement;
    }
    get context() {
        return this.fixture.componentInstance;
    }
    detectChanges() {
        this.fixture.detectChanges();
    }
    resolve(component) {
        return this.fixture.debugElement.injector.get(component);
    }
}
export const createTestContext = (component) => {
    return new TestContext(TestBed.createComponent(component));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VpdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90ZXN0aW5nL3NyYy9zdWl0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQW9CLE9BQU8sRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRWxFLE1BQU0sT0FBTyxXQUFXO0lBQ3RCLFlBQW1CLE9BQTRCO1FBQTVCLFlBQU8sR0FBUCxPQUFPLENBQXFCO0lBQUcsQ0FBQztJQUVuRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUM7SUFDeEMsQ0FBQztJQUVELElBQUksRUFBRTtRQUNKLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDO0lBQ2pELENBQUM7SUFFRCxJQUFJLEVBQUU7UUFDSixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO0lBQ25DLENBQUM7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUM7SUFDeEMsQ0FBQztJQUVELGFBQWE7UUFDWCxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFRCxPQUFPLENBQUssU0FBbUI7UUFDN0IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBTyxDQUFDO0lBQ2pFLENBQUM7Q0FDRjtBQUVELE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixHQUFHLENBQUksU0FBa0IsRUFBRSxFQUFFO0lBQ3pELE9BQU8sSUFBSSxXQUFXLENBQUksT0FBTyxDQUFDLGVBQWUsQ0FBSSxTQUFTLENBQUMsQ0FBQyxDQUFDO0FBQ25FLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERlYnVnRWxlbWVudCwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tcG9uZW50Rml4dHVyZSwgVGVzdEJlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvdGVzdGluZyc7XG5cbmV4cG9ydCBjbGFzcyBUZXN0Q29udGV4dDxUPiB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBmaXh0dXJlOiBDb21wb25lbnRGaXh0dXJlPFQ+KSB7fVxuXG4gIGdldCBjb21wb25lbnQoKTogVCB7XG4gICAgcmV0dXJuIHRoaXMuZml4dHVyZS5jb21wb25lbnRJbnN0YW5jZTtcbiAgfVxuXG4gIGdldCBlbCgpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuZml4dHVyZS5kZWJ1Z0VsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIGdldCBkbCgpOiBEZWJ1Z0VsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLmZpeHR1cmUuZGVidWdFbGVtZW50O1xuICB9XG5cbiAgZ2V0IGNvbnRleHQoKTogVCB7XG4gICAgcmV0dXJuIHRoaXMuZml4dHVyZS5jb21wb25lbnRJbnN0YW5jZTtcbiAgfVxuXG4gIGRldGVjdENoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5maXh0dXJlLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHJlc29sdmU8VDE+KGNvbXBvbmVudDogVHlwZTxUMT4pOiBUMSB7XG4gICAgcmV0dXJuIHRoaXMuZml4dHVyZS5kZWJ1Z0VsZW1lbnQuaW5qZWN0b3IuZ2V0KGNvbXBvbmVudCkgYXMgVDE7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVRlc3RDb250ZXh0ID0gPFQ+KGNvbXBvbmVudDogVHlwZTxUPikgPT4ge1xuICByZXR1cm4gbmV3IFRlc3RDb250ZXh0PFQ+KFRlc3RCZWQuY3JlYXRlQ29tcG9uZW50PFQ+KGNvbXBvbmVudCkpO1xufTtcbiJdfQ==