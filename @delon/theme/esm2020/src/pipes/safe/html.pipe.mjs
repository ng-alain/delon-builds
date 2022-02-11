import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
export class HTMLPipe {
    constructor(dom) {
        this.dom = dom;
    }
    transform(html) {
        return html ? this.dom.bypassSecurityTrustHtml(html) : '';
    }
}
HTMLPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: HTMLPipe, deps: [{ token: i1.DomSanitizer }], target: i0.ɵɵFactoryTarget.Pipe });
HTMLPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: HTMLPipe, name: "html" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: HTMLPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'html' }]
        }], ctorParameters: function () { return [{ type: i1.DomSanitizer }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHRtbC5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdGhlbWUvc3JjL3BpcGVzL3NhZmUvaHRtbC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOzs7QUFJcEQsTUFBTSxPQUFPLFFBQVE7SUFDbkIsWUFBb0IsR0FBaUI7UUFBakIsUUFBRyxHQUFILEdBQUcsQ0FBYztJQUFHLENBQUM7SUFFekMsU0FBUyxDQUFDLElBQVk7UUFDcEIsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUM1RCxDQUFDOztxR0FMVSxRQUFRO21HQUFSLFFBQVE7MkZBQVIsUUFBUTtrQkFEcEIsSUFBSTttQkFBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbkBQaXBlKHsgbmFtZTogJ2h0bWwnIH0pXG5leHBvcnQgY2xhc3MgSFRNTFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkb206IERvbVNhbml0aXplcikge31cblxuICB0cmFuc2Zvcm0oaHRtbDogc3RyaW5nKTogc3RyaW5nIHwgU2FmZUh0bWwge1xuICAgIHJldHVybiBodG1sID8gdGhpcy5kb20uYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoaHRtbCkgOiAnJztcbiAgfVxufVxuIl19