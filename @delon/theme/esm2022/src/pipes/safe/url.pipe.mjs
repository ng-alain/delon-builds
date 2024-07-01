import { Pipe, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export class URLPipe {
    constructor() {
        this.dom = inject(DomSanitizer);
    }
    transform(url) {
        return url ? this.dom.bypassSecurityTrustUrl(url) : '';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.5", ngImport: i0, type: URLPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "18.0.5", ngImport: i0, type: URLPipe, isStandalone: true, name: "url" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.5", ngImport: i0, type: URLPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'url', standalone: true }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS9zcmMvcGlwZXMvc2FmZS91cmwucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFFLFlBQVksRUFBVyxNQUFNLDJCQUEyQixDQUFDOztBQUdsRSxNQUFNLE9BQU8sT0FBTztJQURwQjtRQUVtQixRQUFHLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO0tBSzdDO0lBSEMsU0FBUyxDQUFDLEdBQVc7UUFDbkIsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN6RCxDQUFDOzhHQUxVLE9BQU87NEdBQVAsT0FBTzs7MkZBQVAsT0FBTztrQkFEbkIsSUFBSTttQkFBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0sIGluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlVXJsIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbkBQaXBlKHsgbmFtZTogJ3VybCcsIHN0YW5kYWxvbmU6IHRydWUgfSlcbmV4cG9ydCBjbGFzcyBVUkxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgZG9tID0gaW5qZWN0KERvbVNhbml0aXplcik7XG5cbiAgdHJhbnNmb3JtKHVybDogc3RyaW5nKTogc3RyaW5nIHwgU2FmZVVybCB7XG4gICAgcmV0dXJuIHVybCA/IHRoaXMuZG9tLmJ5cGFzc1NlY3VyaXR5VHJ1c3RVcmwodXJsKSA6ICcnO1xuICB9XG59XG4iXX0=