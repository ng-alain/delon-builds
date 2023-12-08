import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class FilterPipe {
    /**
     * Filter array
     *
     * 过滤数组
     */
    transform(array, matcher, ...args) {
        return array.filter(i => matcher(i, ...args));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: FilterPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "17.0.6", ngImport: i0, type: FilterPipe, isStandalone: true, name: "filter" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: FilterPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'filter', standalone: true }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy91dGlsL3BpcGVzL2ZpbHRlci9maWx0ZXIucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7QUFLcEQsTUFBTSxPQUFPLFVBQVU7SUFDckI7Ozs7T0FJRztJQUNILFNBQVMsQ0FBSSxLQUFtQixFQUFFLE9BQW1ELEVBQUUsR0FBRyxJQUFpQjtRQUN6RyxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDOzhHQVJVLFVBQVU7NEdBQVYsVUFBVTs7MkZBQVYsVUFBVTtrQkFEdEIsSUFBSTttQkFBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5AUGlwZSh7IG5hbWU6ICdmaWx0ZXInLCBzdGFuZGFsb25lOiB0cnVlIH0pXG5leHBvcnQgY2xhc3MgRmlsdGVyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAvKipcbiAgICogRmlsdGVyIGFycmF5XG4gICAqXG4gICAqIOi/h+a7pOaVsOe7hFxuICAgKi9cbiAgdHJhbnNmb3JtPFQ+KGFycmF5OiByZWFkb25seSBUW10sIG1hdGNoZXI6IChpdGVtOiBULCAuLi5hcmdzOiBOelNhZmVBbnlbXSkgPT4gYm9vbGVhbiwgLi4uYXJnczogTnpTYWZlQW55W10pOiBUW10ge1xuICAgIHJldHVybiBhcnJheS5maWx0ZXIoaSA9PiBtYXRjaGVyKGksIC4uLmFyZ3MpKTtcbiAgfVxufVxuIl19