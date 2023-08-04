import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@delon/util/config";
export const REP_MAX = 6;
export const SPAN_MAX = 24;
export class ResponsiveService {
    constructor(cogSrv) {
        this.cog = cogSrv.merge('themeResponsive', {
            rules: {
                1: { xs: 24 },
                2: { xs: 24, sm: 12 },
                3: { xs: 24, sm: 12, md: 8 },
                4: { xs: 24, sm: 12, md: 8, lg: 6 },
                5: { xs: 24, sm: 12, md: 8, lg: 6, xl: 4 },
                6: { xs: 24, sm: 12, md: 8, lg: 6, xl: 4, xxl: 2 }
            }
        });
        if (Object.keys(this.cog.rules)
            .map(i => +i)
            .some((i) => i < 1 || i > REP_MAX)) {
            throw new Error(`[theme] the responseive rule index value range must be 1-${REP_MAX}`);
        }
    }
    genCls(count, defaultCol = 1) {
        const rule = { ...this.cog.rules[count > REP_MAX ? REP_MAX : Math.max(count, 1)] };
        const antColClass = 'ant-col';
        const itemMaxSpan = SPAN_MAX / defaultCol;
        const paddingSpan = (value) => {
            if (value == null || defaultCol <= 1 || count >= defaultCol)
                return value;
            return Math.max(value, count * itemMaxSpan);
        };
        const clsMap = [`${antColClass}-xs-${paddingSpan(rule.xs)}`];
        if (rule.sm)
            clsMap.push(`${antColClass}-sm-${paddingSpan(rule.sm)}`);
        if (rule.md)
            clsMap.push(`${antColClass}-md-${paddingSpan(rule.md)}`);
        if (rule.lg)
            clsMap.push(`${antColClass}-lg-${paddingSpan(rule.lg)}`);
        if (rule.xl)
            clsMap.push(`${antColClass}-xl-${paddingSpan(rule.xl)}`);
        if (rule.xxl)
            clsMap.push(`${antColClass}-xxl-${paddingSpan(rule.xxl)}`);
        return clsMap;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: ResponsiveService, deps: [{ token: i1.AlainConfigService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: ResponsiveService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: ResponsiveService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: i1.AlainConfigService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2l2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lL3NyYy9zZXJ2aWNlcy9yZXNwb25zaXZlL3Jlc3BvbnNpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBSTNDLE1BQU0sQ0FBQyxNQUFNLE9BQU8sR0FBRyxDQUFDLENBQUM7QUFDekIsTUFBTSxDQUFDLE1BQU0sUUFBUSxHQUFHLEVBQUUsQ0FBQztBQUszQixNQUFNLE9BQU8saUJBQWlCO0lBRTVCLFlBQVksTUFBMEI7UUFDcEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFO1lBQ3pDLEtBQUssRUFBRTtnQkFDTCxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFO2dCQUNiLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtnQkFDckIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUU7Z0JBQzVCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUU7Z0JBQ25DLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRTtnQkFDMUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUU7YUFDbkQ7U0FDRixDQUFFLENBQUM7UUFDSixJQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7YUFDeEIsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDWixJQUFJLENBQUMsQ0FBQyxDQUFTLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxFQUM1QztZQUNBLE1BQU0sSUFBSSxLQUFLLENBQUMsNERBQTRELE9BQU8sRUFBRSxDQUFDLENBQUM7U0FDeEY7SUFDSCxDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQWEsRUFBRSxhQUFxQixDQUFDO1FBQzFDLE1BQU0sSUFBSSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNuRixNQUFNLFdBQVcsR0FBRyxTQUFTLENBQUM7UUFFOUIsTUFBTSxXQUFXLEdBQUcsUUFBUSxHQUFHLFVBQVUsQ0FBQztRQUMxQyxNQUFNLFdBQVcsR0FBRyxDQUFDLEtBQXlCLEVBQXNCLEVBQUU7WUFDcEUsSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLFVBQVUsSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLFVBQVU7Z0JBQUUsT0FBTyxLQUFLLENBQUM7WUFDMUUsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxLQUFLLEdBQUcsV0FBVyxDQUFDLENBQUM7UUFDOUMsQ0FBQyxDQUFDO1FBQ0YsTUFBTSxNQUFNLEdBQUcsQ0FBQyxHQUFHLFdBQVcsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM3RCxJQUFJLElBQUksQ0FBQyxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLFdBQVcsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN0RSxJQUFJLElBQUksQ0FBQyxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLFdBQVcsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN0RSxJQUFJLElBQUksQ0FBQyxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLFdBQVcsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN0RSxJQUFJLElBQUksQ0FBQyxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLFdBQVcsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN0RSxJQUFJLElBQUksQ0FBQyxHQUFHO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLFdBQVcsUUFBUSxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN6RSxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzhHQXRDVSxpQkFBaUI7a0hBQWpCLGlCQUFpQixjQURKLE1BQU07OzJGQUNuQixpQkFBaUI7a0JBRDdCLFVBQVU7bUJBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UsIEFsYWluVGhlbWVSZXNwb25zaXZlQ29uZmlnIH0gZnJvbSAnQGRlbG9uL3V0aWwvY29uZmlnJztcblxuZXhwb3J0IGNvbnN0IFJFUF9NQVggPSA2O1xuZXhwb3J0IGNvbnN0IFNQQU5fTUFYID0gMjQ7XG5cbmV4cG9ydCB0eXBlIFJFUF9UWVBFID0gMSB8IDIgfCAzIHwgNCB8IDUgfCA2O1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFJlc3BvbnNpdmVTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBjb2c6IEFsYWluVGhlbWVSZXNwb25zaXZlQ29uZmlnO1xuICBjb25zdHJ1Y3Rvcihjb2dTcnY6IEFsYWluQ29uZmlnU2VydmljZSkge1xuICAgIHRoaXMuY29nID0gY29nU3J2Lm1lcmdlKCd0aGVtZVJlc3BvbnNpdmUnLCB7XG4gICAgICBydWxlczoge1xuICAgICAgICAxOiB7IHhzOiAyNCB9LFxuICAgICAgICAyOiB7IHhzOiAyNCwgc206IDEyIH0sXG4gICAgICAgIDM6IHsgeHM6IDI0LCBzbTogMTIsIG1kOiA4IH0sXG4gICAgICAgIDQ6IHsgeHM6IDI0LCBzbTogMTIsIG1kOiA4LCBsZzogNiB9LFxuICAgICAgICA1OiB7IHhzOiAyNCwgc206IDEyLCBtZDogOCwgbGc6IDYsIHhsOiA0IH0sXG4gICAgICAgIDY6IHsgeHM6IDI0LCBzbTogMTIsIG1kOiA4LCBsZzogNiwgeGw6IDQsIHh4bDogMiB9XG4gICAgICB9XG4gICAgfSkhO1xuICAgIGlmIChcbiAgICAgIE9iamVjdC5rZXlzKHRoaXMuY29nLnJ1bGVzKVxuICAgICAgICAubWFwKGkgPT4gK2kpXG4gICAgICAgIC5zb21lKChpOiBudW1iZXIpID0+IGkgPCAxIHx8IGkgPiBSRVBfTUFYKVxuICAgICkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBbdGhlbWVdIHRoZSByZXNwb25zZWl2ZSBydWxlIGluZGV4IHZhbHVlIHJhbmdlIG11c3QgYmUgMS0ke1JFUF9NQVh9YCk7XG4gICAgfVxuICB9XG5cbiAgZ2VuQ2xzKGNvdW50OiBudW1iZXIsIGRlZmF1bHRDb2w6IG51bWJlciA9IDEpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgcnVsZSA9IHsgLi4udGhpcy5jb2cucnVsZXNbY291bnQgPiBSRVBfTUFYID8gUkVQX01BWCA6IE1hdGgubWF4KGNvdW50LCAxKV0gfTtcbiAgICBjb25zdCBhbnRDb2xDbGFzcyA9ICdhbnQtY29sJztcblxuICAgIGNvbnN0IGl0ZW1NYXhTcGFuID0gU1BBTl9NQVggLyBkZWZhdWx0Q29sO1xuICAgIGNvbnN0IHBhZGRpbmdTcGFuID0gKHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpOiBudW1iZXIgfCB1bmRlZmluZWQgPT4ge1xuICAgICAgaWYgKHZhbHVlID09IG51bGwgfHwgZGVmYXVsdENvbCA8PSAxIHx8IGNvdW50ID49IGRlZmF1bHRDb2wpIHJldHVybiB2YWx1ZTtcbiAgICAgIHJldHVybiBNYXRoLm1heCh2YWx1ZSwgY291bnQgKiBpdGVtTWF4U3Bhbik7XG4gICAgfTtcbiAgICBjb25zdCBjbHNNYXAgPSBbYCR7YW50Q29sQ2xhc3N9LXhzLSR7cGFkZGluZ1NwYW4ocnVsZS54cyl9YF07XG4gICAgaWYgKHJ1bGUuc20pIGNsc01hcC5wdXNoKGAke2FudENvbENsYXNzfS1zbS0ke3BhZGRpbmdTcGFuKHJ1bGUuc20pfWApO1xuICAgIGlmIChydWxlLm1kKSBjbHNNYXAucHVzaChgJHthbnRDb2xDbGFzc30tbWQtJHtwYWRkaW5nU3BhbihydWxlLm1kKX1gKTtcbiAgICBpZiAocnVsZS5sZykgY2xzTWFwLnB1c2goYCR7YW50Q29sQ2xhc3N9LWxnLSR7cGFkZGluZ1NwYW4ocnVsZS5sZyl9YCk7XG4gICAgaWYgKHJ1bGUueGwpIGNsc01hcC5wdXNoKGAke2FudENvbENsYXNzfS14bC0ke3BhZGRpbmdTcGFuKHJ1bGUueGwpfWApO1xuICAgIGlmIChydWxlLnh4bCkgY2xzTWFwLnB1c2goYCR7YW50Q29sQ2xhc3N9LXh4bC0ke3BhZGRpbmdTcGFuKHJ1bGUueHhsKX1gKTtcbiAgICByZXR1cm4gY2xzTWFwO1xuICB9XG59XG4iXX0=