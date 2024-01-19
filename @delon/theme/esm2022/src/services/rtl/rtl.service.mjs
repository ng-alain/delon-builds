import { Directionality } from '@angular/cdk/bidi';
import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { filter, map } from 'rxjs';
import { AlainConfigService } from '@delon/util/config';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { SettingsService } from '../settings/settings.service';
import * as i0 from "@angular/core";
export const HTML_DIR = 'dir';
export const RTL_DIRECTION = 'direction';
export const RTL_NZ_COMPONENTS = ['modal', 'drawer', 'message', 'notification', 'image'];
export const RTL_DELON_COMPONENTS = ['loading', 'onboarding'];
export const LTR = 'ltr';
export const RTL = 'rtl';
export class RTLService {
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
    constructor() {
        this.d = inject(Directionality);
        this.nz = inject(NzConfigService);
        this.delon = inject(AlainConfigService);
        this.platform = inject(Platform);
        this.doc = inject(DOCUMENT);
        this.srv = inject(SettingsService);
        this._dir = LTR;
        this.dir = this.srv.layout.direction === RTL ? RTL : LTR;
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: RTLService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: RTLService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: RTLService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnRsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS9zcmMvc2VydmljZXMvcnRsL3J0bC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBYSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBYyxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9DLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUc1RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7O0FBRS9ELE1BQU0sQ0FBQyxNQUFNLFFBQVEsR0FBRyxLQUFLLENBQUM7QUFDOUIsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFHLFdBQVcsQ0FBQztBQUN6QyxNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FBRyxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN6RixNQUFNLENBQUMsTUFBTSxvQkFBb0IsR0FBRyxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsQ0FBQztBQUM5RCxNQUFNLENBQUMsTUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDO0FBQ3pCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsR0FBRyxLQUFLLENBQUM7QUFHekIsTUFBTSxPQUFPLFVBQVU7SUFTckI7Ozs7T0FJRztJQUNILElBQUksR0FBRztRQUNMLE9BQU8s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QUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUM1RCxDQUFDLENBQUMsQ0FBQztRQUNILG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFpQixFQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQzdELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs4R0FwRlUsVUFBVTtrSEFBVixVQUFVLGNBREcsTUFBTTs7MkZBQ25CLFVBQVU7a0JBRHRCLFVBQVU7bUJBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdGFibGUsIGluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwvY29uZmlnJztcbmltcG9ydCB7IE56Q29uZmlnU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9jb25maWcnO1xuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5pbXBvcnQgeyBTZXR0aW5nc1NlcnZpY2UgfSBmcm9tICcuLi9zZXR0aW5ncy9zZXR0aW5ncy5zZXJ2aWNlJztcblxuZXhwb3J0IGNvbnN0IEhUTUxfRElSID0gJ2Rpcic7XG5leHBvcnQgY29uc3QgUlRMX0RJUkVDVElPTiA9ICdkaXJlY3Rpb24nO1xuZXhwb3J0IGNvbnN0IFJUTF9OWl9DT01QT05FTlRTID0gWydtb2RhbCcsICdkcmF3ZXInLCAnbWVzc2FnZScsICdub3RpZmljYXRpb24nLCAnaW1hZ2UnXTtcbmV4cG9ydCBjb25zdCBSVExfREVMT05fQ09NUE9ORU5UUyA9IFsnbG9hZGluZycsICdvbmJvYXJkaW5nJ107XG5leHBvcnQgY29uc3QgTFRSID0gJ2x0cic7XG5leHBvcnQgY29uc3QgUlRMID0gJ3J0bCc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgUlRMU2VydmljZSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgZCA9IGluamVjdChEaXJlY3Rpb25hbGl0eSk7XG4gIHByaXZhdGUgcmVhZG9ubHkgbnogPSBpbmplY3QoTnpDb25maWdTZXJ2aWNlKTtcbiAgcHJpdmF0ZSByZWFkb25seSBkZWxvbiA9IGluamVjdChBbGFpbkNvbmZpZ1NlcnZpY2UpO1xuICBwcml2YXRlIHJlYWRvbmx5IHBsYXRmb3JtID0gaW5qZWN0KFBsYXRmb3JtKTtcbiAgcHJpdmF0ZSByZWFkb25seSBkb2MgPSBpbmplY3QoRE9DVU1FTlQpO1xuICBwcml2YXRlIHJlYWRvbmx5IHNydiA9IGluamVjdChTZXR0aW5nc1NlcnZpY2UpO1xuXG4gIHByaXZhdGUgX2RpcjogRGlyZWN0aW9uID0gTFRSO1xuICAvKipcbiAgICogR2V0IG9yIFNldCB0aGUgY3VycmVudCB0ZXh0IGRpcmVjdGlvblxuICAgKlxuICAgKiDojrflj5bmiJborr7nva7lvZPliY3mloflrZfmlrnlkJFcbiAgICovXG4gIGdldCBkaXIoKTogRGlyZWN0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5fZGlyO1xuICB9XG4gIHNldCBkaXIodmFsdWU6IERpcmVjdGlvbikge1xuICAgIHRoaXMuX2RpciA9IHZhbHVlO1xuICAgIHRoaXMudXBkYXRlTGliQ29uZmlnKCk7XG4gICAgdGhpcy51cGRhdGVIdG1sKCk7XG4gICAgLy8gU2hvdWxkIGJlIHdhaXQgaW5pdGVkXG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICAodGhpcy5kIGFzIE56U2FmZUFueSkudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMuZC5jaGFuZ2UuZW1pdCh2YWx1ZSk7XG4gICAgICB0aGlzLnNydi5zZXRMYXlvdXQoUlRMX0RJUkVDVElPTiwgdmFsdWUpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbmV4dCB0ZXh0IGRpcmVjdGlvblxuICAgKlxuICAgKiDojrflj5bkuIvkuIDmrKHmloflrZfmlrnlkJFcbiAgICovXG4gIGdldCBuZXh0RGlyKCk6IERpcmVjdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuZGlyID09PSBMVFIgPyBSVEwgOiBMVFI7XG4gIH1cblxuICAvKipcbiAgICogU3Vic2NyaXB0aW9uIGNoYW5nZSBub3RpZmljYXRpb25cbiAgICpcbiAgICog6K6i6ZiF5Y+Y5pu06YCa55+lXG4gICAqL1xuICBnZXQgY2hhbmdlKCk6IE9ic2VydmFibGU8RGlyZWN0aW9uPiB7XG4gICAgcmV0dXJuIHRoaXMuc3J2Lm5vdGlmeS5waXBlKFxuICAgICAgZmlsdGVyKHcgPT4gdy5uYW1lID09PSBSVExfRElSRUNUSU9OKSxcbiAgICAgIG1hcCh2ID0+IHYudmFsdWUpXG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZGlyID0gdGhpcy5zcnYubGF5b3V0LmRpcmVjdGlvbiA9PT0gUlRMID8gUlRMIDogTFRSO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZSB0ZXh0IGRpcmVjdGlvblxuICAgKlxuICAgKiDliIfmjaLmloflrZfmlrnlkJFcbiAgICovXG4gIHRvZ2dsZSgpOiB2b2lkIHtcbiAgICB0aGlzLmRpciA9IHRoaXMubmV4dERpcjtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlSHRtbCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGh0bWxFbCA9IHRoaXMuZG9jLnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKSBhcyBIVE1MRWxlbWVudDtcbiAgICBpZiAoaHRtbEVsKSB7XG4gICAgICBjb25zdCBkaXIgPSB0aGlzLmRpcjtcbiAgICAgIGh0bWxFbC5zdHlsZS5kaXJlY3Rpb24gPSBkaXI7XG4gICAgICBodG1sRWwuY2xhc3NMaXN0LnJlbW92ZShSVEwsIExUUik7XG4gICAgICBodG1sRWwuY2xhc3NMaXN0LmFkZChkaXIpO1xuICAgICAgaHRtbEVsLnNldEF0dHJpYnV0ZShIVE1MX0RJUiwgZGlyKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUxpYkNvbmZpZygpOiB2b2lkIHtcbiAgICBSVExfTlpfQ09NUE9ORU5UUy5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgdGhpcy5uei5zZXQobmFtZSBhcyBOelNhZmVBbnksIHsgbnpEaXJlY3Rpb246IHRoaXMuZGlyIH0pO1xuICAgIH0pO1xuICAgIFJUTF9ERUxPTl9DT01QT05FTlRTLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICB0aGlzLmRlbG9uLnNldChuYW1lIGFzIE56U2FmZUFueSwgeyBkaXJlY3Rpb246IHRoaXMuZGlyIH0pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=