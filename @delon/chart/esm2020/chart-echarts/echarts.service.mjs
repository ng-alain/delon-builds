import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@delon/util/config";
import * as i2 from "@delon/util/other";
export class ChartEChartsService {
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
            echartsLib: 'https://cdnjs.cloudflare.com/ajax/libs/echarts/5.1.0/echarts.min.js'
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
        this.lazySrv
            .load(this.cog.echartsLib)
            .then(() => {
            const extensions = this.cog.echartsExtensions;
            if (Array.isArray(extensions) && extensions.length > 0) {
                return this.lazySrv.load(extensions).then(() => true);
            }
            return Promise.resolve(true);
        })
            .then(() => {
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
ChartEChartsService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.10", ngImport: i0, type: ChartEChartsService, deps: [{ token: i1.AlainConfigService }, { token: i2.LazyService }], target: i0.ɵɵFactoryTarget.Injectable });
ChartEChartsService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.10", ngImport: i0, type: ChartEChartsService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.10", ngImport: i0, type: ChartEChartsService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: i1.AlainConfigService }, { type: i2.LazyService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWNoYXJ0cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY2hhcnQvY2hhcnQtZWNoYXJ0cy9lY2hhcnRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7O0FBTTNDLE1BQU0sT0FBTyxtQkFBbUI7SUFvQjlCLFlBQW9CLE1BQTBCLEVBQVUsT0FBb0I7UUFBeEQsV0FBTSxHQUFOLE1BQU0sQ0FBb0I7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFhO1FBbEJwRSxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixZQUFPLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQWlCcEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBaEJELElBQUksR0FBRztRQUNMLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDO0lBQ0QsSUFBSSxHQUFHLENBQUMsR0FBcUI7UUFDM0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FDM0IsT0FBTyxFQUNQO1lBQ0UsS0FBSyxFQUFFLEVBQUU7WUFDVCxVQUFVLEVBQUUscUVBQXFFO1NBQzlELEVBQ3JCLEdBQUcsQ0FDSCxDQUFDO0lBQ0wsQ0FBQztJQU1ELE9BQU87UUFDTCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNmLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDckI7WUFDRCxPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLE9BQU87YUFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFXLENBQUM7YUFDMUIsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNULE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUM7WUFDOUMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUN0RCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN2RDtZQUNELE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixDQUFDLENBQUM7YUFDRCxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQztRQUNMLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7aUhBdERVLG1CQUFtQjtxSEFBbkIsbUJBQW1CLGNBRE4sTUFBTTs0RkFDbkIsbUJBQW1CO2tCQUQvQixVQUFVO21CQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBBbGFpbkNoYXJ0Q29uZmlnLCBBbGFpbkNvbmZpZ1NlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbC9jb25maWcnO1xuaW1wb3J0IHsgTGF6eVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbC9vdGhlcic7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQ2hhcnRFQ2hhcnRzU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX2NvZyE6IEFsYWluQ2hhcnRDb25maWc7XG4gIHByaXZhdGUgbG9hZGluZyA9IGZhbHNlO1xuICBwcml2YXRlIGxvYWRlZCA9IGZhbHNlO1xuICBwcml2YXRlIG5vdGlmeSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIGdldCBjb2coKTogQWxhaW5DaGFydENvbmZpZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvZztcbiAgfVxuICBzZXQgY29nKHZhbDogQWxhaW5DaGFydENvbmZpZykge1xuICAgIHRoaXMuX2NvZyA9IHRoaXMuY29nU3J2Lm1lcmdlKFxuICAgICAgJ2NoYXJ0JyxcbiAgICAgIHtcbiAgICAgICAgdGhlbWU6ICcnLFxuICAgICAgICBlY2hhcnRzTGliOiAnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZWNoYXJ0cy81LjEuMC9lY2hhcnRzLm1pbi5qcydcbiAgICAgIH0gYXMgQWxhaW5DaGFydENvbmZpZyxcbiAgICAgIHZhbFxuICAgICkhO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb2dTcnY6IEFsYWluQ29uZmlnU2VydmljZSwgcHJpdmF0ZSBsYXp5U3J2OiBMYXp5U2VydmljZSkge1xuICAgIHRoaXMuY29nID0geyB0aGVtZTogJycgfTtcbiAgfVxuXG4gIGxpYkxvYWQoKTogdGhpcyB7XG4gICAgaWYgKHRoaXMubG9hZGluZykge1xuICAgICAgaWYgKHRoaXMubG9hZGVkKSB7XG4gICAgICAgIHRoaXMubm90aWZ5JC5uZXh0KCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLmxhenlTcnZcbiAgICAgIC5sb2FkKHRoaXMuY29nLmVjaGFydHNMaWIhKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICBjb25zdCBleHRlbnNpb25zID0gdGhpcy5jb2cuZWNoYXJ0c0V4dGVuc2lvbnM7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGV4dGVuc2lvbnMpICYmIGV4dGVuc2lvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmxhenlTcnYubG9hZChleHRlbnNpb25zKS50aGVuKCgpID0+IHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodHJ1ZSk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmxvYWRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMubm90aWZ5JC5uZXh0KCk7XG4gICAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldCBub3RpZnkoKTogT2JzZXJ2YWJsZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMubm90aWZ5JC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMubm90aWZ5JC51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=