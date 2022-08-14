import { Directive, EventEmitter, Injectable, NgModule, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class SizeObserver {
    constructor() {
        this._observedElements = new Map();
    }
    ngOnDestroy() {
        this._observedElements.forEach((_, element) => this._cleanupObserver(element));
    }
    observe(element) {
        return new Observable((observer) => {
            const stream = this._observeElement(element);
            const subscription = stream.subscribe(observer);
            return () => {
                subscription.unsubscribe();
                this._unobserveElement(element);
            };
        });
    }
    _observeElement(element) {
        if (!this._observedElements.has(element)) {
            const stream = new Subject();
            let observer = null;
            if (typeof MutationObserver !== 'undefined') {
                observer = new MutationObserver(mutations => stream.next(mutations));
                observer.observe(element, {
                    attributes: true,
                    attributeOldValue: true,
                    attributeFilter: ['width', 'height', 'style']
                });
            }
            this._observedElements.set(element, { observer, stream, count: 1 });
        }
        else {
            this._observedElements.get(element).count++;
        }
        return this._observedElements.get(element).stream;
    }
    _unobserveElement(element) {
        if (this._observedElements.has(element)) {
            this._observedElements.get(element).count--;
            if (!this._observedElements.get(element).count) {
                this._cleanupObserver(element);
            }
        }
    }
    _cleanupObserver(element) {
        if (this._observedElements.has(element)) {
            const { observer, stream } = this._observedElements.get(element);
            if (observer) {
                observer.disconnect();
            }
            stream.complete();
            this._observedElements.delete(element);
        }
    }
}
SizeObserver.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.1.2", ngImport: i0, type: SizeObserver, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
SizeObserver.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.1.2", ngImport: i0, type: SizeObserver, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.1.2", ngImport: i0, type: SizeObserver, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });
export class ObserverSize {
    constructor(_obs, el, ngZone) {
        this._obs = _obs;
        this.el = el;
        this.ngZone = ngZone;
        this._sub$ = null;
        this.event = new EventEmitter();
    }
    ngAfterViewInit() {
        if (!this._sub$) {
            this._sub();
        }
    }
    _sub() {
        this._unsub();
        const stream = this._obs.observe(this.el.nativeElement);
        this.ngZone.runOutsideAngular(() => {
            this._sub$ = stream.subscribe(this.event);
        });
    }
    _unsub() {
        this._sub$?.unsubscribe();
    }
    ngOnDestroy() {
        this._unsub();
    }
}
ObserverSize.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.1.2", ngImport: i0, type: ObserverSize, deps: [{ token: SizeObserver }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Directive });
ObserverSize.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.1.2", type: ObserverSize, selector: "[observeSize]", outputs: { event: "observeSize" }, exportAs: ["observeSize"], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.1.2", ngImport: i0, type: ObserverSize, decorators: [{
            type: Directive,
            args: [{
                    selector: '[observeSize]',
                    exportAs: 'observeSize'
                }]
        }], ctorParameters: function () { return [{ type: SizeObserver }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, propDecorators: { event: [{
                type: Output,
                args: ['observeSize']
            }] } });
export class ObserversModule {
}
ObserversModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.1.2", ngImport: i0, type: ObserversModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ObserversModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.1.2", ngImport: i0, type: ObserversModule, declarations: [ObserverSize], exports: [ObserverSize] });
ObserversModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.1.2", ngImport: i0, type: ObserversModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.1.2", ngImport: i0, type: ObserversModule, decorators: [{
            type: NgModule,
            args: [{
                    exports: [ObserverSize],
                    declarations: [ObserverSize]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JzZXJ2ZXItc2l6ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9vYnNlcnZlcnMvb2JzZXJ2ZXItc2l6ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsU0FBUyxFQUVULFlBQVksRUFDWixVQUFVLEVBQ1YsUUFBUSxFQUdSLE1BQU0sRUFDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsVUFBVSxFQUFZLE9BQU8sRUFBZ0IsTUFBTSxNQUFNLENBQUM7O0FBR25FLE1BQU0sT0FBTyxZQUFZO0lBRHpCO1FBRVUsc0JBQWlCLEdBQUcsSUFBSSxHQUFHLEVBT2hDLENBQUM7S0F3REw7SUF0REMsV0FBVztRQUNULElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNqRixDQUFDO0lBRUQsT0FBTyxDQUFDLE9BQWdCO1FBQ3RCLE9BQU8sSUFBSSxVQUFVLENBQUMsQ0FBQyxRQUFvQyxFQUFFLEVBQUU7WUFDN0QsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM3QyxNQUFNLFlBQVksR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRWhELE9BQU8sR0FBRyxFQUFFO2dCQUNWLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2xDLENBQUMsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLGVBQWUsQ0FBQyxPQUFnQjtRQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUN4QyxN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QUNqQyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLE1BQU07UUFDWixJQUFJLENBQUMsS0FBSyxFQUFFLFdBQVcsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7O3lHQTFCVSxZQUFZLGtCQUlHLFlBQVk7NkZBSjNCLFlBQVk7MkZBQVosWUFBWTtrQkFKeEIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsUUFBUSxFQUFFLGFBQWE7aUJBQ3hCOzBEQUsyQixZQUFZLHdFQUZOLEtBQUs7c0JBQXBDLE1BQU07dUJBQUMsYUFBYTs7QUErQnZCLE1BQU0sT0FBTyxlQUFlOzs0R0FBZixlQUFlOzZHQUFmLGVBQWUsaUJBakNmLFlBQVksYUFBWixZQUFZOzZHQWlDWixlQUFlOzJGQUFmLGVBQWU7a0JBSjNCLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUN2QixZQUFZLEVBQUUsQ0FBQyxZQUFZLENBQUM7aUJBQzdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdGFibGUsXG4gIE5nTW9kdWxlLFxuICBOZ1pvbmUsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFNpemVPYnNlcnZlciBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX29ic2VydmVkRWxlbWVudHMgPSBuZXcgTWFwPFxuICAgIEVsZW1lbnQsXG4gICAge1xuICAgICAgb2JzZXJ2ZXI6IE11dGF0aW9uT2JzZXJ2ZXIgfCBudWxsO1xuICAgICAgcmVhZG9ubHkgc3RyZWFtOiBTdWJqZWN0PE11dGF0aW9uUmVjb3JkW10+O1xuICAgICAgY291bnQ6IG51bWJlcjtcbiAgICB9XG4gID4oKTtcblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9vYnNlcnZlZEVsZW1lbnRzLmZvckVhY2goKF8sIGVsZW1lbnQpID0+IHRoaXMuX2NsZWFudXBPYnNlcnZlcihlbGVtZW50KSk7XG4gIH1cblxuICBvYnNlcnZlKGVsZW1lbnQ6IEVsZW1lbnQpOiBPYnNlcnZhYmxlPE11dGF0aW9uUmVjb3JkW10+IHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBPYnNlcnZlcjxNdXRhdGlvblJlY29yZFtdPikgPT4ge1xuICAgICAgY29uc3Qgc3RyZWFtID0gdGhpcy5fb2JzZXJ2ZUVsZW1lbnQoZWxlbWVudCk7XG4gICAgICBjb25zdCBzdWJzY3JpcHRpb24gPSBzdHJlYW0uc3Vic2NyaWJlKG9ic2VydmVyKTtcblxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMuX3Vub2JzZXJ2ZUVsZW1lbnQoZWxlbWVudCk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfb2JzZXJ2ZUVsZW1lbnQoZWxlbWVudDogRWxlbWVudCk6IFN1YmplY3Q8TXV0YXRpb25SZWNvcmRbXT4ge1xuICAgIGlmICghdGhpcy5fb2JzZXJ2ZWRFbGVtZW50cy5oYXMoZWxlbWVudCkpIHtcbiAgICAgIGNvbnN0IHN0cmVhbSA9IG5ldyBTdWJqZWN0PE11dGF0aW9uUmVjb3JkW10+KCk7XG4gICAgICBsZXQgb2JzZXJ2ZXI6IE11dGF0aW9uT2JzZXJ2ZXIgfCBudWxsID0gbnVsbDtcbiAgICAgIGlmICh0eXBlb2YgTXV0YXRpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihtdXRhdGlvbnMgPT4gc3RyZWFtLm5leHQobXV0YXRpb25zKSk7XG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCwge1xuICAgICAgICAgIGF0dHJpYnV0ZXM6IHRydWUsXG4gICAgICAgICAgYXR0cmlidXRlT2xkVmFsdWU6IHRydWUsXG4gICAgICAgICAgYXR0cmlidXRlRmlsdGVyOiBbJ3dpZHRoJywgJ2hlaWdodCcsICdzdHlsZSddXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy5fb2JzZXJ2ZWRFbGVtZW50cy5zZXQoZWxlbWVudCwgeyBvYnNlcnZlciwgc3RyZWFtLCBjb3VudDogMSB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fb2JzZXJ2ZWRFbGVtZW50cy5nZXQoZWxlbWVudCkhLmNvdW50Kys7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9vYnNlcnZlZEVsZW1lbnRzLmdldChlbGVtZW50KSEuc3RyZWFtO1xuICB9XG5cbiAgcHJpdmF0ZSBfdW5vYnNlcnZlRWxlbWVudChlbGVtZW50OiBFbGVtZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX29ic2VydmVkRWxlbWVudHMuaGFzKGVsZW1lbnQpKSB7XG4gICAgICB0aGlzLl9vYnNlcnZlZEVsZW1lbnRzLmdldChlbGVtZW50KSEuY291bnQtLTtcbiAgICAgIGlmICghdGhpcy5fb2JzZXJ2ZWRFbGVtZW50cy5nZXQoZWxlbWVudCkhLmNvdW50KSB7XG4gICAgICAgIHRoaXMuX2NsZWFudXBPYnNlcnZlcihlbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jbGVhbnVwT2JzZXJ2ZXIoZWxlbWVudDogRWxlbWVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9vYnNlcnZlZEVsZW1lbnRzLmhhcyhlbGVtZW50KSkge1xuICAgICAgY29uc3QgeyBvYnNlcnZlciwgc3RyZWFtIH0gPSB0aGlzLl9vYnNlcnZlZEVsZW1lbnRzLmdldChlbGVtZW50KSE7XG4gICAgICBpZiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgfVxuICAgICAgc3RyZWFtLmNvbXBsZXRlKCk7XG4gICAgICB0aGlzLl9vYnNlcnZlZEVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtcbiAgICB9XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW29ic2VydmVTaXplXScsXG4gIGV4cG9ydEFzOiAnb2JzZXJ2ZVNpemUnXG59KVxuZXhwb3J0IGNsYXNzIE9ic2VydmVyU2l6ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX3N1YiQ6IFN1YnNjcmlwdGlvbiB8IG51bGwgPSBudWxsO1xuICBAT3V0cHV0KCdvYnNlcnZlU2l6ZScpIHJlYWRvbmx5IGV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxNdXRhdGlvblJlY29yZFtdPigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX29iczogU2l6ZU9ic2VydmVyLCBwcml2YXRlIGVsOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PiwgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSkge31cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9zdWIkKSB7XG4gICAgICB0aGlzLl9zdWIoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zdWIoKTogdm9pZCB7XG4gICAgdGhpcy5fdW5zdWIoKTtcbiAgICBjb25zdCBzdHJlYW0gPSB0aGlzLl9vYnMub2JzZXJ2ZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpO1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHRoaXMuX3N1YiQgPSBzdHJlYW0uc3Vic2NyaWJlKHRoaXMuZXZlbnQpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfdW5zdWIoKTogdm9pZCB7XG4gICAgdGhpcy5fc3ViJD8udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX3Vuc3ViKCk7XG4gIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgZXhwb3J0czogW09ic2VydmVyU2l6ZV0sXG4gIGRlY2xhcmF0aW9uczogW09ic2VydmVyU2l6ZV1cbn0pXG5leHBvcnQgY2xhc3MgT2JzZXJ2ZXJzTW9kdWxlIHt9XG4iXX0=