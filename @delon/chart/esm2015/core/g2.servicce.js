import { Injectable } from '@angular/core';
import { AlainConfigService } from '@delon/util/config';
import { LazyService } from '@delon/util/other';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@delon/util/config";
import * as i2 from "@delon/util/other";
export class G2Service {
    constructor(cogSrv, lazySrv) {
        this.cogSrv = cogSrv;
        this.lazySrv = lazySrv;
        this.loading = false;
        this.loaded = false;
        this.notify$ = new Subject();
        this.cog = { theme: '' };
    }
    get cog() {
        return this._cog;
    }
    set cog(val) {
        this._cog = this.cogSrv.merge('chart', {
            theme: '',
            libs: [
                'https://gw.alipayobjects.com/os/lib/antv/g2/4.1.14/dist/g2.min.js',
                'https://gw.alipayobjects.com/os/lib/antv/data-set/0.11.8/dist/data-set.js',
            ],
        }, val);
    }
    libLoad() {
        if (this.loading) {
            if (this.loaded) {
                this.notify$.next();
            }
            return this;
        }
        this.loading = true;
        this.lazySrv.load(this.cog.libs).then(() => {
            this.loaded = true;
            this.notify$.next();
        });
        return this;
    }
    get notify() {
        return this.notify$.asObservable();
    }
    ngOnDestroy() {
        this.notify$.unsubscribe();
    }
}
G2Service.ɵprov = i0.ɵɵdefineInjectable({ factory: function G2Service_Factory() { return new G2Service(i0.ɵɵinject(i1.AlainConfigService), i0.ɵɵinject(i2.LazyService)); }, token: G2Service, providedIn: "root" });
G2Service.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
G2Service.ctorParameters = () => [
    { type: AlainConfigService },
    { type: LazyService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZzIuc2VydmljY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jaGFydC9jb3JlL2cyLnNlcnZpY2NlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFvQixrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNoRCxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7O0FBRzNDLE1BQU0sT0FBTyxTQUFTO0lBdUJwQixZQUFvQixNQUEwQixFQUFVLE9BQW9CO1FBQXhELFdBQU0sR0FBTixNQUFNLENBQW9CO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBYTtRQXJCcEUsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsWUFBTyxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFvQnBDLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQW5CRCxJQUFJLEdBQUc7UUFDTCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUNELElBQUksR0FBRyxDQUFDLEdBQXFCO1FBQzNCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQzNCLE9BQU8sRUFDUDtZQUNFLEtBQUssRUFBRSxFQUFFO1lBQ1QsSUFBSSxFQUFFO2dCQUNKLG1FQUFtRTtnQkFDbkUsMkVBQTJFO2FBQzVFO1NBQ2tCLEVBQ3JCLEdBQUcsQ0FDSCxDQUFDO0lBQ0wsQ0FBQztJQU1ELE9BQU87UUFDTCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNmLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDckI7WUFDRCxPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQzFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzdCLENBQUM7Ozs7WUFqREYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7O1lBSlAsa0JBQWtCO1lBQ3BDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFsYWluQ2hhcnRDb25maWcsIEFsYWluQ29uZmlnU2VydmljZSB9IGZyb20gJ0BkZWxvbi91dGlsL2NvbmZpZyc7XG5pbXBvcnQgeyBMYXp5U2VydmljZSB9IGZyb20gJ0BkZWxvbi91dGlsL290aGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBHMlNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9jb2c6IEFsYWluQ2hhcnRDb25maWc7XG4gIHByaXZhdGUgbG9hZGluZyA9IGZhbHNlO1xuICBwcml2YXRlIGxvYWRlZCA9IGZhbHNlO1xuICBwcml2YXRlIG5vdGlmeSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIGdldCBjb2coKTogQWxhaW5DaGFydENvbmZpZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvZztcbiAgfVxuICBzZXQgY29nKHZhbDogQWxhaW5DaGFydENvbmZpZykge1xuICAgIHRoaXMuX2NvZyA9IHRoaXMuY29nU3J2Lm1lcmdlKFxuICAgICAgJ2NoYXJ0JyxcbiAgICAgIHtcbiAgICAgICAgdGhlbWU6ICcnLFxuICAgICAgICBsaWJzOiBbXG4gICAgICAgICAgJ2h0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vb3MvbGliL2FudHYvZzIvNC4xLjE0L2Rpc3QvZzIubWluLmpzJyxcbiAgICAgICAgICAnaHR0cHM6Ly9ndy5hbGlwYXlvYmplY3RzLmNvbS9vcy9saWIvYW50di9kYXRhLXNldC8wLjExLjgvZGlzdC9kYXRhLXNldC5qcycsXG4gICAgICAgIF0sXG4gICAgICB9IGFzIEFsYWluQ2hhcnRDb25maWcsXG4gICAgICB2YWwsXG4gICAgKSE7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvZ1NydjogQWxhaW5Db25maWdTZXJ2aWNlLCBwcml2YXRlIGxhenlTcnY6IExhenlTZXJ2aWNlKSB7XG4gICAgdGhpcy5jb2cgPSB7IHRoZW1lOiAnJyB9O1xuICB9XG5cbiAgbGliTG9hZCgpOiB0aGlzIHtcbiAgICBpZiAodGhpcy5sb2FkaW5nKSB7XG4gICAgICBpZiAodGhpcy5sb2FkZWQpIHtcbiAgICAgICAgdGhpcy5ub3RpZnkkLm5leHQoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMubGF6eVNydi5sb2FkKHRoaXMuY29nLmxpYnMhKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMubm90aWZ5JC5uZXh0KCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXQgbm90aWZ5KCk6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLm5vdGlmeSQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLm5vdGlmeSQudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19