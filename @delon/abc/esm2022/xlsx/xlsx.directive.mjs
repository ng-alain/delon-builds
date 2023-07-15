import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./xlsx.service";
class XlsxDirective {
    constructor(srv) {
        this.srv = srv;
    }
    _click() {
        this.srv.export(this.data);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: XlsxDirective, deps: [{ token: i1.XlsxService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.5", type: XlsxDirective, selector: "[xlsx]", inputs: { data: ["xlsx", "data"] }, host: { listeners: { "click": "_click()" } }, exportAs: ["xlsx"], ngImport: i0 }); }
}
export { XlsxDirective };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: XlsxDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[xlsx]',
                    exportAs: 'xlsx',
                    host: {
                        '(click)': '_click()'
                    }
                }]
        }], ctorParameters: function () { return [{ type: i1.XlsxService }]; }, propDecorators: { data: [{
                type: Input,
                args: ['xlsx']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGxzeC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMveGxzeC94bHN4LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBS2pELE1BT2EsYUFBYTtJQUd4QixZQUFvQixHQUFnQjtRQUFoQixRQUFHLEdBQUgsR0FBRyxDQUFhO0lBQUcsQ0FBQztJQUV4QyxNQUFNO1FBQ0osSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7OEdBUFUsYUFBYTtrR0FBYixhQUFhOztTQUFiLGFBQWE7MkZBQWIsYUFBYTtrQkFQekIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsUUFBUTtvQkFDbEIsUUFBUSxFQUFFLE1BQU07b0JBQ2hCLElBQUksRUFBRTt3QkFDSixTQUFTLEVBQUUsVUFBVTtxQkFDdEI7aUJBQ0Y7a0dBRWdCLElBQUk7c0JBQWxCLEtBQUs7dUJBQUMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgWGxzeFNlcnZpY2UgfSBmcm9tICcuL3hsc3guc2VydmljZSc7XG5pbXBvcnQgeyBYbHN4RXhwb3J0T3B0aW9ucyB9IGZyb20gJy4veGxzeC50eXBlcyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t4bHN4XScsXG4gIGV4cG9ydEFzOiAneGxzeCcsXG4gIGhvc3Q6IHtcbiAgICAnKGNsaWNrKSc6ICdfY2xpY2soKSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBYbHN4RGlyZWN0aXZlIHtcbiAgQElucHV0KCd4bHN4JykgZGF0YSE6IFhsc3hFeHBvcnRPcHRpb25zO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3J2OiBYbHN4U2VydmljZSkge31cblxuICBfY2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5zcnYuZXhwb3J0KHRoaXMuZGF0YSk7XG4gIH1cbn1cbiJdfQ==