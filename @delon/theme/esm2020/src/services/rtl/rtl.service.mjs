import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { filter, map } from 'rxjs';
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
RTLService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: RTLService, deps: [{ token: i1.Directionality }, { token: i2.SettingsService }, { token: i3.NzConfigService }, { token: i4.AlainConfigService }, { token: i5.Platform }, { token: DOCUMENT }], target: i0.ɵɵFactoryTarget.Injectable });
RTLService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: RTLService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: RTLService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: i1.Directionality }, { type: i2.SettingsService }, { type: i3.NzConfigService }, { type: i4.AlainConfigService }, { type: i5.Platform }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnRsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS9zcmMvc2VydmljZXMvcnRsL3J0bC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQWMsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7OztBQVEvQyxNQUFNLENBQUMsTUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDO0FBQzlCLE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBRyxXQUFXLENBQUM7QUFDekMsTUFBTSxDQUFDLE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDekYsTUFBTSxDQUFDLE1BQU0sb0JBQW9CLEdBQUcsQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFDOUQsTUFBTSxDQUFDLE1BQU0sR0FBRyxHQUFHLEtBQUssQ0FBQztBQUN6QixNQUFNLENBQUMsTUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDO0FBR3pCLE1BQU0sT0FBTyxVQUFVO0lBRXJCOzs7O09BSUc7SUFDSCxJQUFJLEdBQUc7UUFDTCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUNELElBQUksR0FBRyxDQUFDLEtBQWdCO1FBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsd0JBQXdCO1FBQ3hCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxDQUFlLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNwQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzNDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUN0QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUN6QixNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLGFBQWEsQ0FBQyxFQUNyQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQ2xCLENBQUM7SUFDSixDQUFDO0lBRUQsWUFDVSxDQUFpQixFQUNqQixHQUFvQixFQUNwQixFQUFtQixFQUNuQixLQUF5QixFQUN6QixRQUFrQixFQUNBLEdBQWM7UUFMaEMsTUFBQyxHQUFELENBQUMsQ0FBZ0I7UUFDakIsUUFBRyxHQUFILEdBQUcsQ0FBaUI7UUFDcEIsT0FBRSxHQUFGLEVBQUUsQ0FBaUI7UUFDbkIsVUFBSyxHQUFMLEtBQUssQ0FBb0I7UUFDekIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNBLFFBQUcsR0FBSCxHQUFHLENBQVc7UUFoRGxDLFNBQUksR0FBYyxHQUFHLENBQUM7UUFrRDVCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUN0RCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU07UUFDSixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDMUIsQ0FBQztJQUVPLFVBQVU7UUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFO1lBQzVCLE9BQU87U0FDUjtRQUNELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBZ0IsQ0FBQztRQUM3RCxJQUFJLE1BQU0sRUFBRTtZQUNWLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDckIsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1lBQzdCLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNsQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMxQixNQUFNLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNwQztJQUNILENBQUM7SUFFTyxlQUFlO1FBQ3JCLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMvQixJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFpQixFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQzVELENBQUMsQ0FBQyxDQUFDO1FBQ0gsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQWlCLEVBQUUsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDN0QsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzt1R0FwRlUsVUFBVSx3S0FpRFgsUUFBUTsyR0FqRFAsVUFBVSxjQURHLE1BQU07MkZBQ25CLFVBQVU7a0JBRHRCLFVBQVU7bUJBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzswQkFrRDdCLE1BQU07MkJBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIGZpbHRlciwgbWFwIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEFsYWluQ29uZmlnU2VydmljZSB9IGZyb20gJ0BkZWxvbi91dGlsL2NvbmZpZyc7XG5pbXBvcnQgeyBOekNvbmZpZ1NlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvY29uZmlnJztcbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuaW1wb3J0IHsgU2V0dGluZ3NTZXJ2aWNlIH0gZnJvbSAnLi4vc2V0dGluZ3Mvc2V0dGluZ3Muc2VydmljZSc7XG5cbmV4cG9ydCBjb25zdCBIVE1MX0RJUiA9ICdkaXInO1xuZXhwb3J0IGNvbnN0IFJUTF9ESVJFQ1RJT04gPSAnZGlyZWN0aW9uJztcbmV4cG9ydCBjb25zdCBSVExfTlpfQ09NUE9ORU5UUyA9IFsnbW9kYWwnLCAnZHJhd2VyJywgJ21lc3NhZ2UnLCAnbm90aWZpY2F0aW9uJywgJ2ltYWdlJ107XG5leHBvcnQgY29uc3QgUlRMX0RFTE9OX0NPTVBPTkVOVFMgPSBbJ2xvYWRpbmcnLCAnb25ib2FyZGluZyddO1xuZXhwb3J0IGNvbnN0IExUUiA9ICdsdHInO1xuZXhwb3J0IGNvbnN0IFJUTCA9ICdydGwnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFJUTFNlcnZpY2Uge1xuICBwcml2YXRlIF9kaXI6IERpcmVjdGlvbiA9IExUUjtcbiAgLyoqXG4gICAqIEdldCBvciBTZXQgdGhlIGN1cnJlbnQgdGV4dCBkaXJlY3Rpb25cbiAgICpcbiAgICog6I635Y+W5oiW6K6+572u5b2T5YmN5paH5a2X5pa55ZCRXG4gICAqL1xuICBnZXQgZGlyKCk6IERpcmVjdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuX2RpcjtcbiAgfVxuICBzZXQgZGlyKHZhbHVlOiBEaXJlY3Rpb24pIHtcbiAgICB0aGlzLl9kaXIgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZUxpYkNvbmZpZygpO1xuICAgIHRoaXMudXBkYXRlSHRtbCgpO1xuICAgIC8vIFNob3VsZCBiZSB3YWl0IGluaXRlZFxuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgKHRoaXMuZCBhcyBOelNhZmVBbnkpLnZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLmQuY2hhbmdlLmVtaXQodmFsdWUpO1xuICAgICAgdGhpcy5zcnYuc2V0TGF5b3V0KFJUTF9ESVJFQ1RJT04sIHZhbHVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG5leHQgdGV4dCBkaXJlY3Rpb25cbiAgICpcbiAgICog6I635Y+W5LiL5LiA5qyh5paH5a2X5pa55ZCRXG4gICAqL1xuICBnZXQgbmV4dERpcigpOiBEaXJlY3Rpb24ge1xuICAgIHJldHVybiB0aGlzLmRpciA9PT0gTFRSID8gUlRMIDogTFRSO1xuICB9XG5cbiAgLyoqXG4gICAqIFN1YnNjcmlwdGlvbiBjaGFuZ2Ugbm90aWZpY2F0aW9uXG4gICAqXG4gICAqIOiuoumYheWPmOabtOmAmuefpVxuICAgKi9cbiAgZ2V0IGNoYW5nZSgpOiBPYnNlcnZhYmxlPERpcmVjdGlvbj4ge1xuICAgIHJldHVybiB0aGlzLnNydi5ub3RpZnkucGlwZShcbiAgICAgIGZpbHRlcih3ID0+IHcubmFtZSA9PT0gUlRMX0RJUkVDVElPTiksXG4gICAgICBtYXAodiA9PiB2LnZhbHVlKVxuICAgICk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGQ6IERpcmVjdGlvbmFsaXR5LFxuICAgIHByaXZhdGUgc3J2OiBTZXR0aW5nc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBuejogTnpDb25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgZGVsb246IEFsYWluQ29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogTnpTYWZlQW55XG4gICkge1xuICAgIHRoaXMuZGlyID0gc3J2LmxheW91dC5kaXJlY3Rpb24gPT09IFJUTCA/IFJUTCA6IExUUjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGUgdGV4dCBkaXJlY3Rpb25cbiAgICpcbiAgICog5YiH5o2i5paH5a2X5pa55ZCRXG4gICAqL1xuICB0b2dnbGUoKTogdm9pZCB7XG4gICAgdGhpcy5kaXIgPSB0aGlzLm5leHREaXI7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUh0bWwoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBodG1sRWwgPSB0aGlzLmRvYy5xdWVyeVNlbGVjdG9yKCdodG1sJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgaWYgKGh0bWxFbCkge1xuICAgICAgY29uc3QgZGlyID0gdGhpcy5kaXI7XG4gICAgICBodG1sRWwuc3R5bGUuZGlyZWN0aW9uID0gZGlyO1xuICAgICAgaHRtbEVsLmNsYXNzTGlzdC5yZW1vdmUoUlRMLCBMVFIpO1xuICAgICAgaHRtbEVsLmNsYXNzTGlzdC5hZGQoZGlyKTtcbiAgICAgIGh0bWxFbC5zZXRBdHRyaWJ1dGUoSFRNTF9ESVIsIGRpcik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVMaWJDb25maWcoKTogdm9pZCB7XG4gICAgUlRMX05aX0NPTVBPTkVOVFMuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgIHRoaXMubnouc2V0KG5hbWUgYXMgTnpTYWZlQW55LCB7IG56RGlyZWN0aW9uOiB0aGlzLmRpciB9KTtcbiAgICB9KTtcbiAgICBSVExfREVMT05fQ09NUE9ORU5UUy5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgdGhpcy5kZWxvbi5zZXQobmFtZSBhcyBOelNhZmVBbnksIHsgZGlyZWN0aW9uOiB0aGlzLmRpciB9KTtcbiAgICB9KTtcbiAgfVxufVxuIl19