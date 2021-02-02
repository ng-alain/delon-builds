import { Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
export class URLPipe {
    constructor(dom) {
        this.dom = dom;
    }
    transform(url) {
        return url ? this.dom.bypassSecurityTrustUrl(url) : '';
    }
}
/** @nocollapse */ URLPipe.ɵfac = function URLPipe_Factory(t) { return new (t || URLPipe)(i0.ɵɵdirectiveInject(i1.DomSanitizer)); };
/** @nocollapse */ URLPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "url", type: URLPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(URLPipe, [{
        type: Pipe,
        args: [{ name: 'url' }]
    }], function () { return [{ type: i1.DomSanitizer }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS9zcmMvcGlwZXMvc2FmZS91cmwucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsWUFBWSxFQUFXLE1BQU0sMkJBQTJCLENBQUM7OztBQUdsRSxNQUFNLE9BQU8sT0FBTztJQUNsQixZQUFvQixHQUFpQjtRQUFqQixRQUFHLEdBQUgsR0FBRyxDQUFjO0lBQUcsQ0FBQztJQUV6QyxTQUFTLENBQUMsR0FBVztRQUNuQixPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3pELENBQUM7O2lGQUxVLE9BQU87d0VBQVAsT0FBTzt1RkFBUCxPQUFPO2NBRG5CLElBQUk7ZUFBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVVcmwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuQFBpcGUoeyBuYW1lOiAndXJsJyB9KVxuZXhwb3J0IGNsYXNzIFVSTFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkb206IERvbVNhbml0aXplcikge31cblxuICB0cmFuc2Zvcm0odXJsOiBzdHJpbmcpOiBzdHJpbmcgfCBTYWZlVXJsIHtcbiAgICByZXR1cm4gdXJsID8gdGhpcy5kb20uYnlwYXNzU2VjdXJpdHlUcnVzdFVybCh1cmwpIDogJyc7XG4gIH1cbn1cbiJdfQ==