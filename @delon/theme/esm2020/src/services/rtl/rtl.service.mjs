import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/bidi";
import * as i2 from "../settings/settings.service";
import * as i3 from "ng-zorro-antd/core/config";
import * as i4 from "@delon/util/config";
import * as i5 from "@angular/cdk/platform";
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
RTLService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.2", ngImport: i0, type: RTLService, deps: [{ token: i1.Directionality }, { token: i2.SettingsService }, { token: i3.NzConfigService }, { token: i4.AlainConfigService }, { token: i5.Platform }, { token: DOCUMENT }], target: i0.ɵɵFactoryTarget.Injectable });
RTLService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.1.2", ngImport: i0, type: RTLService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.2", ngImport: i0, type: RTLService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: i1.Directionality }, { type: i2.SettingsService }, { type: i3.NzConfigService }, { type: i4.AlainConfigService }, { type: i5.Platform }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnRsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS9zcmMvc2VydmljZXMvcnRsL3J0bC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVuRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7O0FBUTdDLE1BQU0sQ0FBQyxNQUFNLFFBQVEsR0FBRyxLQUFLLENBQUM7QUFDOUIsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFHLFdBQVcsQ0FBQztBQUN6QyxNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FBRyxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN6RixNQUFNLENBQUMsTUFBTSxvQkFBb0IsR0FBRyxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsQ0FBQztBQUM5RCxNQUFNLENBQUMsTUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDO0FBQ3pCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsR0FBRyxLQUFLLENBQUM7QUFHekIsTUFBTSxPQUFPLFVBQVU7SUEyQ3JCLFlBQ1UsQ0FBaUIsRUFDakIsR0FBb0IsRUFDcEIsRUFBbUIsRUFDbkIsS0FBeUIsRUFDekIsUUFBa0IsRUFDQSxHQUFjO1FBTGhDLE1BQUMsR0FBRCxDQUFDLENBQWdCO1FBQ2pCLFFBQUcsR0FBSCxHQUFHLENBQWlCO1FBQ3BCLE9BQUUsR0FBRixFQUFFLENBQWlCO1FBQ25CLFVBQUssR0FBTCxLQUFLLENBQW9CO1FBQ3pCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDQSxRQUFHLEdBQUgsR0FBRyxDQUFXO1FBaERsQyxTQUFJLEdB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QUFNOzJGQUNuQixVQUFVO2tCQUR0QixVQUFVO21CQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7MEJBa0Q3QixNQUFNOzJCQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3Rpb24sIERpcmVjdGlvbmFsaXR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwvY29uZmlnJztcbmltcG9ydCB7IE56Q29uZmlnU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9jb25maWcnO1xuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5pbXBvcnQgeyBTZXR0aW5nc1NlcnZpY2UgfSBmcm9tICcuLi9zZXR0aW5ncy9zZXR0aW5ncy5zZXJ2aWNlJztcblxuZXhwb3J0IGNvbnN0IEhUTUxfRElSID0gJ2Rpcic7XG5leHBvcnQgY29uc3QgUlRMX0RJUkVDVElPTiA9ICdkaXJlY3Rpb24nO1xuZXhwb3J0IGNvbnN0IFJUTF9OWl9DT01QT05FTlRTID0gWydtb2RhbCcsICdkcmF3ZXInLCAnbWVzc2FnZScsICdub3RpZmljYXRpb24nLCAnaW1hZ2UnXTtcbmV4cG9ydCBjb25zdCBSVExfREVMT05fQ09NUE9ORU5UUyA9IFsnbG9hZGluZycsICdvbmJvYXJkaW5nJ107XG5leHBvcnQgY29uc3QgTFRSID0gJ2x0cic7XG5leHBvcnQgY29uc3QgUlRMID0gJ3J0bCc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgUlRMU2VydmljZSB7XG4gIHByaXZhdGUgX2RpcjogRGlyZWN0aW9uID0gTFRSO1xuICAvKipcbiAgICogR2V0IG9yIFNldCB0aGUgY3VycmVudCB0ZXh0IGRpcmVjdGlvblxuICAgKlxuICAgKiDojrflj5bmiJborr7nva7lvZPliY3mloflrZfmlrnlkJFcbiAgICovXG4gIGdldCBkaXIoKTogRGlyZWN0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5fZGlyO1xuICB9XG4gIHNldCBkaXIodmFsdWU6IERpcmVjdGlvbikge1xuICAgIHRoaXMuX2RpciA9IHZhbHVlO1xuICAgIHRoaXMudXBkYXRlTGliQ29uZmlnKCk7XG4gICAgdGhpcy51cGRhdGVIdG1sKCk7XG4gICAgLy8gU2hvdWxkIGJlIHdhaXQgaW5pdGVkXG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICAodGhpcy5kIGFzIE56U2FmZUFueSkudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMuZC5jaGFuZ2UuZW1pdCh2YWx1ZSk7XG4gICAgICB0aGlzLnNydi5zZXRMYXlvdXQoUlRMX0RJUkVDVElPTiwgdmFsdWUpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbmV4dCB0ZXh0IGRpcmVjdGlvblxuICAgKlxuICAgKiDojrflj5bkuIvkuIDmrKHmloflrZfmlrnlkJFcbiAgICovXG4gIGdldCBuZXh0RGlyKCk6IERpcmVjdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuZGlyID09PSBMVFIgPyBSVEwgOiBMVFI7XG4gIH1cblxuICAvKipcbiAgICogU3Vic2NyaXB0aW9uIGNoYW5nZSBub3RpZmljYXRpb25cbiAgICpcbiAgICog6K6i6ZiF5Y+Y5pu06YCa55+lXG4gICAqL1xuICBnZXQgY2hhbmdlKCk6IE9ic2VydmFibGU8RGlyZWN0aW9uPiB7XG4gICAgcmV0dXJuIHRoaXMuc3J2Lm5vdGlmeS5waXBlKFxuICAgICAgZmlsdGVyKHcgPT4gdy5uYW1lID09PSBSVExfRElSRUNUSU9OKSxcbiAgICAgIG1hcCh2ID0+IHYudmFsdWUpXG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZDogRGlyZWN0aW9uYWxpdHksXG4gICAgcHJpdmF0ZSBzcnY6IFNldHRpbmdzU2VydmljZSxcbiAgICBwcml2YXRlIG56OiBOekNvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBkZWxvbjogQWxhaW5Db25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBOelNhZmVBbnlcbiAgKSB7XG4gICAgdGhpcy5kaXIgPSBzcnYubGF5b3V0LmRpcmVjdGlvbiA9PT0gUlRMID8gUlRMIDogTFRSO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZSB0ZXh0IGRpcmVjdGlvblxuICAgKlxuICAgKiDliIfmjaLmloflrZfmlrnlkJFcbiAgICovXG4gIHRvZ2dsZSgpOiB2b2lkIHtcbiAgICB0aGlzLmRpciA9IHRoaXMubmV4dERpcjtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlSHRtbCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGh0bWxFbCA9IHRoaXMuZG9jLnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKSBhcyBIVE1MRWxlbWVudDtcbiAgICBpZiAoaHRtbEVsKSB7XG4gICAgICBjb25zdCBkaXIgPSB0aGlzLmRpcjtcbiAgICAgIGh0bWxFbC5zdHlsZS5kaXJlY3Rpb24gPSBkaXI7XG4gICAgICBodG1sRWwuY2xhc3NMaXN0LnJlbW92ZShSVEwsIExUUik7XG4gICAgICBodG1sRWwuY2xhc3NMaXN0LmFkZChkaXIpO1xuICAgICAgaHRtbEVsLnNldEF0dHJpYnV0ZShIVE1MX0RJUiwgZGlyKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUxpYkNvbmZpZygpOiB2b2lkIHtcbiAgICBSVExfTlpfQ09NUE9ORU5UUy5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgdGhpcy5uei5zZXQobmFtZSBhcyBOelNhZmVBbnksIHsgbnpEaXJlY3Rpb246IHRoaXMuZGlyIH0pO1xuICAgIH0pO1xuICAgIFJUTF9ERUxPTl9DT01QT05FTlRTLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICB0aGlzLmRlbG9uLnNldChuYW1lIGFzIE56U2FmZUFueSwgeyBkaXJlY3Rpb246IHRoaXMuZGlyIH0pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=