import { Directionality } from '@angular/cdk/bidi';
import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { AlainConfigService } from '@delon/util/config';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { filter, map } from 'rxjs/operators';
import { SettingsService } from '../settings/settings.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/bidi";
import * as i2 from "../settings/settings.service";
import * as i3 from "ng-zorro-antd/core/config";
import * as i4 from "@delon/util/config";
import * as i5 from "@angular/cdk/platform";
import * as i6 from "@angular/common";
export const HTML_DIR = 'dir';
export const RTL_DIRECTION = 'direction';
export const RTL_NZ_COMPONENTS = ['modal', 'drawer', 'message', 'notification', 'image'];
export const RTL_DELON_COMPONENTS = ['loading', 'onboarding'];
export const LTR = 'ltr';
export const RTL = 'rtl';
export class RTLService {
    constructor(d, srv, nz, delon, platform, doc) {
        this.d = d;
        this.srv = srv;
        this.nz = nz;
        this.delon = delon;
        this.platform = platform;
        this.doc = doc;
        this._dir = LTR;
        this.dir = srv.layout.direction === RTL ? RTL : LTR;
    }
    /**
     * Get or Set the current text direction
     *
     * 获取或设置当前文字方向
     */
    get dir() {
        return this._dir;
    }
    set dir(value) {
        this._dir = value;
        this.updateLibConfig();
        this.updateHtml();
        // Should be wait inited
        Promise.resolve().then(() => {
            this.d.value = value;
            this.d.change.emit(value);
            this.srv.setLayout(RTL_DIRECTION, value);
        });
    }
    /**
     * Get the next text direction
     *
     * 获取下一次文字方向
     */
    get nextDir() {
        return this.dir === LTR ? RTL : LTR;
    }
    /**
     * Subscription change notification
     *
     * 订阅变更通知
     */
    get change() {
        return this.srv.notify.pipe(filter(w => w.name === RTL_DIRECTION), map(v => v.value));
    }
    /**
     * Toggle text direction
     *
     * 切换文字方向
     */
    toggle() {
        this.dir = this.nextDir;
    }
    updateHtml() {
        if (!this.platform.isBrowser) {
            return;
        }
        const htmlEl = this.doc.querySelector('html');
        if (htmlEl) {
            const dir = this.dir;
            htmlEl.style.direction = dir;
            htmlEl.classList.remove(RTL, LTR);
            htmlEl.classList.add(dir);
            htmlEl.setAttribute(HTML_DIR, dir);
        }
    }
    updateLibConfig() {
        RTL_NZ_COMPONENTS.forEach(name => {
            this.nz.set(name, { nzDirection: this.dir });
        });
        RTL_DELON_COMPONENTS.forEach(name => {
            this.delon.set(name, { direction: this.dir });
        });
    }
}
/** @nocollapse */ RTLService.ɵprov = i0.ɵɵdefineInjectable({ factory: function RTLService_Factory() { return new RTLService(i0.ɵɵinject(i1.Directionality), i0.ɵɵinject(i2.SettingsService), i0.ɵɵinject(i3.NzConfigService), i0.ɵɵinject(i4.AlainConfigService), i0.ɵɵinject(i5.Platform), i0.ɵɵinject(i6.DOCUMENT)); }, token: RTLService, providedIn: "root" });
RTLService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
RTLService.ctorParameters = () => [
    { type: Directionality },
    { type: SettingsService },
    { type: NzConfigService },
    { type: AlainConfigService },
    { type: Platform },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnRsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS9zcmMvc2VydmljZXMvcnRsL3J0bC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBYSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUU1RCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7Ozs7QUFFL0QsTUFBTSxDQUFDLE1BQU0sUUFBUSxHQUFHLEtBQUssQ0FBQztBQUM5QixNQUFNLENBQUMsTUFBTSxhQUFhLEdBQUcsV0FBVyxDQUFDO0FBQ3pDLE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixHQUFHLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsY0FBYyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3pGLE1BQU0sQ0FBQyxNQUFNLG9CQUFvQixHQUFHLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxDQUFDO0FBQzlELE1BQU0sQ0FBQyxNQUFNLEdBQUcsR0FBRyxLQUFLLENBQUM7QUFDekIsTUFBTSxDQUFDLE1BQU0sR0FBRyxHQUFHLEtBQUssQ0FBQztBQUd6QixNQUFNLE9BQU8sVUFBVTtJQTJDckIsWUFDVSxDQUFpQixFQUNqQixHQUFvQixF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QUFDLENBQUM7UUFDSCxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBVyxFQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztZQXJGRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O1lBakJkLGNBQWM7WUFRekIsZUFBZTtZQUhmLGVBQWU7WUFEZixrQkFBa0I7WUFIbEIsUUFBUTs0Q0FrRVosTUFBTSxTQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3Rpb24sIERpcmVjdGlvbmFsaXR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbC9jb25maWcnO1xuaW1wb3J0IHsgTnpDb25maWdTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFNldHRpbmdzU2VydmljZSB9IGZyb20gJy4uL3NldHRpbmdzL3NldHRpbmdzLnNlcnZpY2UnO1xuXG5leHBvcnQgY29uc3QgSFRNTF9ESVIgPSAnZGlyJztcbmV4cG9ydCBjb25zdCBSVExfRElSRUNUSU9OID0gJ2RpcmVjdGlvbic7XG5leHBvcnQgY29uc3QgUlRMX05aX0NPTVBPTkVOVFMgPSBbJ21vZGFsJywgJ2RyYXdlcicsICdtZXNzYWdlJywgJ25vdGlmaWNhdGlvbicsICdpbWFnZSddO1xuZXhwb3J0IGNvbnN0IFJUTF9ERUxPTl9DT01QT05FTlRTID0gWydsb2FkaW5nJywgJ29uYm9hcmRpbmcnXTtcbmV4cG9ydCBjb25zdCBMVFIgPSAnbHRyJztcbmV4cG9ydCBjb25zdCBSVEwgPSAncnRsJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBSVExTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfZGlyOiBEaXJlY3Rpb24gPSBMVFI7XG4gIC8qKlxuICAgKiBHZXQgb3IgU2V0IHRoZSBjdXJyZW50IHRleHQgZGlyZWN0aW9uXG4gICAqXG4gICAqIOiOt+WPluaIluiuvue9ruW9k+WJjeaWh+Wtl+aWueWQkVxuICAgKi9cbiAgZ2V0IGRpcigpOiBEaXJlY3Rpb24ge1xuICAgIHJldHVybiB0aGlzLl9kaXI7XG4gIH1cbiAgc2V0IGRpcih2YWx1ZTogRGlyZWN0aW9uKSB7XG4gICAgdGhpcy5fZGlyID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVMaWJDb25maWcoKTtcbiAgICB0aGlzLnVwZGF0ZUh0bWwoKTtcbiAgICAvLyBTaG91bGQgYmUgd2FpdCBpbml0ZWRcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgICh0aGlzLmQgYXMgYW55KS52YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5kLmNoYW5nZS5lbWl0KHZhbHVlKTtcbiAgICAgIHRoaXMuc3J2LnNldExheW91dChSVExfRElSRUNUSU9OLCB2YWx1ZSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBuZXh0IHRleHQgZGlyZWN0aW9uXG4gICAqXG4gICAqIOiOt+WPluS4i+S4gOasoeaWh+Wtl+aWueWQkVxuICAgKi9cbiAgZ2V0IG5leHREaXIoKTogRGlyZWN0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5kaXIgPT09IExUUiA/IFJUTCA6IExUUjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdWJzY3JpcHRpb24gY2hhbmdlIG5vdGlmaWNhdGlvblxuICAgKlxuICAgKiDorqLpmIXlj5jmm7TpgJrnn6VcbiAgICovXG4gIGdldCBjaGFuZ2UoKTogT2JzZXJ2YWJsZTxEaXJlY3Rpb24+IHtcbiAgICByZXR1cm4gdGhpcy5zcnYubm90aWZ5LnBpcGUoXG4gICAgICBmaWx0ZXIodyA9PiB3Lm5hbWUgPT09IFJUTF9ESVJFQ1RJT04pLFxuICAgICAgbWFwKHYgPT4gdi52YWx1ZSksXG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZDogRGlyZWN0aW9uYWxpdHksXG4gICAgcHJpdmF0ZSBzcnY6IFNldHRpbmdzU2VydmljZSxcbiAgICBwcml2YXRlIG56OiBOekNvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBkZWxvbjogQWxhaW5Db25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBhbnksXG4gICkge1xuICAgIHRoaXMuZGlyID0gc3J2LmxheW91dC5kaXJlY3Rpb24gPT09IFJUTCA/IFJUTCA6IExUUjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGUgdGV4dCBkaXJlY3Rpb25cbiAgICpcbiAgICog5YiH5o2i5paH5a2X5pa55ZCRXG4gICAqL1xuICB0b2dnbGUoKTogdm9pZCB7XG4gICAgdGhpcy5kaXIgPSB0aGlzLm5leHREaXI7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUh0bWwoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBodG1sRWwgPSB0aGlzLmRvYy5xdWVyeVNlbGVjdG9yKCdodG1sJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgaWYgKGh0bWxFbCkge1xuICAgICAgY29uc3QgZGlyID0gdGhpcy5kaXI7XG4gICAgICBodG1sRWwuc3R5bGUuZGlyZWN0aW9uID0gZGlyO1xuICAgICAgaHRtbEVsLmNsYXNzTGlzdC5yZW1vdmUoUlRMLCBMVFIpO1xuICAgICAgaHRtbEVsLmNsYXNzTGlzdC5hZGQoZGlyKTtcbiAgICAgIGh0bWxFbC5zZXRBdHRyaWJ1dGUoSFRNTF9ESVIsIGRpcik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVMaWJDb25maWcoKTogdm9pZCB7XG4gICAgUlRMX05aX0NPTVBPTkVOVFMuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgIHRoaXMubnouc2V0KG5hbWUgYXMgYW55LCB7IG56RGlyZWN0aW9uOiB0aGlzLmRpciB9KTtcbiAgICB9KTtcbiAgICBSVExfREVMT05fQ09NUE9ORU5UUy5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgdGhpcy5kZWxvbi5zZXQobmFtZSBhcyBhbnksIHsgZGlyZWN0aW9uOiB0aGlzLmRpciB9KTtcbiAgICB9KTtcbiAgfVxufVxuIl19