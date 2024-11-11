import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Filter array
 *
 * 过滤数组
 */
// eslint-disable-next-line @angular-eslint/no-pipe-impure
export class FilterPipe {
    transform(array, matcher, ...args) {
        return array.filter(i => matcher(i, ...args));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.11", ngImport: i0, type: FilterPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "18.2.11", ngImport: i0, type: FilterPipe, isStandalone: true, name: "filter", pure: false }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.11", ngImport: i0, type: FilterPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'filter', standalone: true, pure: false }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy91dGlsL3BpcGVzL2ZpbHRlci9maWx0ZXIucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7QUFJcEQ7Ozs7R0FJRztBQUNILDBEQUEwRDtBQUUxRCxNQUFNLE9BQU8sVUFBVTtJQUNyQixTQUFTLENBQUksS0FBbUIsRUFBRSxPQUFtRCxFQUFFLEdBQUcsSUFBaUI7UUFDekcsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDaEQsQ0FBQzsrR0FIVSxVQUFVOzZHQUFWLFVBQVU7OzRGQUFWLFVBQVU7a0JBRHRCLElBQUk7bUJBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG4vKipcbiAqIEZpbHRlciBhcnJheVxuICpcbiAqIOi/h+a7pOaVsOe7hFxuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLXBpcGUtaW1wdXJlXG5AUGlwZSh7IG5hbWU6ICdmaWx0ZXInLCBzdGFuZGFsb25lOiB0cnVlLCBwdXJlOiBmYWxzZSB9KVxuZXhwb3J0IGNsYXNzIEZpbHRlclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtPFQ+KGFycmF5OiByZWFkb25seSBUW10sIG1hdGNoZXI6IChpdGVtOiBULCAuLi5hcmdzOiBOelNhZmVBbnlbXSkgPT4gYm9vbGVhbiwgLi4uYXJnczogTnpTYWZlQW55W10pOiBUW10ge1xuICAgIHJldHVybiBhcnJheS5maWx0ZXIoaSA9PiBtYXRjaGVyKGksIC4uLmFyZ3MpKTtcbiAgfVxufVxuIl19