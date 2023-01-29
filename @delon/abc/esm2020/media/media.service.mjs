import { Injectable } from '@angular/core';
import { Subject, share } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@delon/util/config";
import * as i2 from "@delon/util/other";
export class MediaService {
    get cog() {
        return this._cog;
    }
    set cog(val) {
        this._cog = this.cogSrv.merge('media', {
            urls: ['https://cdn.jsdelivr.net/npm/plyr/dist/plyr.min.js', 'https://cdn.jsdelivr.net/npm/plyr/dist/plyr.css']
        }, val);
    }
    constructor(cogSrv, lazySrv) {
        this.cogSrv = cogSrv;
        this.lazySrv = lazySrv;
        this.loading = false;
        this.loaded = false;
        this.notify$ = new Subject();
    }
    load() {
        if (this.loading) {
            if (this.loaded) {
                this.notify$.next();
            }
            return this;
        }
        this.loading = true;
        this.lazySrv.load(this.cog.urls).then(() => {
            this.loaded = true;
            this.notify$.next();
        });
        return this;
    }
    notify() {
        return this.notify$.asObservable().pipe(share());
    }
}
MediaService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: MediaService, deps: [{ token: i1.AlainConfigService }, { token: i2.LazyService }], target: i0.ɵɵFactoryTarget.Injectable });
MediaService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: MediaService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: MediaService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: i1.AlainConfigService }, { type: i2.LazyService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9tZWRpYS9tZWRpYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7QUFNbEQsTUFBTSxPQUFPLFlBQVk7SUFNdkIsSUFBSSxHQUFHO1FBQ0wsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFDRCxJQUFJLEdBQUcsQ0FBQyxHQUFxQjtRQUMzQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUMzQixPQUFPLEVBQ1A7WUFDRSxJQUFJLEVBQUUsQ0FBQyxvREFBb0QsRUFBRSxpREFBaUQsQ0FBQztTQUNoSCxFQUNELEdBQUcsQ0FDSCxDQUFDO0lBQ0wsQ0FBQztJQUVELFlBQW9CLE1BQTBCLEVBQVUsT0FBb0I7UUFBeEQsV0FBTSxHQUFOLE1BQU0sQ0FBb0I7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFhO1FBakJwRSxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixZQUFPLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztJQWV5QyxDQUFDO0lBRWhGLElBQUk7UUFDRixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNmLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDckI7WUFDRCxPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQzFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ25ELENBQUM7O3lHQXRDVSxZQUFZOzZHQUFaLFlBQVksY0FEQyxNQUFNOzJGQUNuQixZQUFZO2tCQUR4QixVQUFVO21CQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QsIHNoYXJlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEFsYWluQ29uZmlnU2VydmljZSwgQWxhaW5NZWRpYUNvbmZpZyB9IGZyb20gJ0BkZWxvbi91dGlsL2NvbmZpZyc7XG5pbXBvcnQgeyBMYXp5U2VydmljZSB9IGZyb20gJ0BkZWxvbi91dGlsL290aGVyJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBNZWRpYVNlcnZpY2Uge1xuICBwcml2YXRlIF9jb2chOiBBbGFpbk1lZGlhQ29uZmlnO1xuICBwcml2YXRlIGxvYWRpbmcgPSBmYWxzZTtcbiAgcHJpdmF0ZSBsb2FkZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBub3RpZnkkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBnZXQgY29nKCk6IEFsYWluTWVkaWFDb25maWcge1xuICAgIHJldHVybiB0aGlzLl9jb2c7XG4gIH1cbiAgc2V0IGNvZyh2YWw6IEFsYWluTWVkaWFDb25maWcpIHtcbiAgICB0aGlzLl9jb2cgPSB0aGlzLmNvZ1Nydi5tZXJnZShcbiAgICAgICdtZWRpYScsXG4gICAgICB7XG4gICAgICAgIHVybHM6IFsnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9wbHlyL2Rpc3QvcGx5ci5taW4uanMnLCAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9wbHlyL2Rpc3QvcGx5ci5jc3MnXVxuICAgICAgfSxcbiAgICAgIHZhbFxuICAgICkhO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb2dTcnY6IEFsYWluQ29uZmlnU2VydmljZSwgcHJpdmF0ZSBsYXp5U3J2OiBMYXp5U2VydmljZSkge31cblxuICBsb2FkKCk6IHRoaXMge1xuICAgIGlmICh0aGlzLmxvYWRpbmcpIHtcbiAgICAgIGlmICh0aGlzLmxvYWRlZCkge1xuICAgICAgICB0aGlzLm5vdGlmeSQubmV4dCgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgdGhpcy5sYXp5U3J2LmxvYWQodGhpcy5jb2cudXJscyEpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xuICAgICAgdGhpcy5ub3RpZnkkLm5leHQoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG5vdGlmeSgpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkkLmFzT2JzZXJ2YWJsZSgpLnBpcGUoc2hhcmUoKSk7XG4gIH1cbn1cbiJdfQ==