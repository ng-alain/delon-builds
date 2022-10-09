import { Injectable } from '@angular/core';
import { Subject, share } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@delon/util/config";
import * as i2 from "@delon/util/other";
export class MediaService {
    constructor(cogSrv, lazySrv) {
        this.cogSrv = cogSrv;
        this.lazySrv = lazySrv;
        this.loading = false;
        this.loaded = false;
        this.notify$ = new Subject();
    }
    get cog() {
        return this._cog;
    }
    set cog(val) {
        this._cog = this.cogSrv.merge('media', {
            urls: ['https://cdn.jsdelivr.net/npm/plyr/dist/plyr.min.js', 'https://cdn.jsdelivr.net/npm/plyr/dist/plyr.css']
        }, val);
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
MediaService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.5", ngImport: i0, type: MediaService, deps: [{ token: i1.AlainConfigService }, { token: i2.LazyService }], target: i0.ɵɵFactoryTarget.Injectable });
MediaService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.5", ngImport: i0, type: MediaService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.5", ngImport: i0, type: MediaService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: i1.AlainConfigService }, { type: i2.LazyService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9tZWRpYS9tZWRpYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7QUFNbEQsTUFBTSxPQUFPLFlBQVk7SUFtQnZCLFlBQW9CLE1BQTBCLEVBQVUsT0FBb0I7UUFBeEQsV0FBTSxHQUFOLE1BQU0sQ0FBb0I7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFhO1FBakJwRSxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixZQUFPLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztJQWV5QyxDQUFDO0lBYmhGLElBQUksR0FBRztRQUNMLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDO0lBQ0QsSUFBSSxHQUFHLENBQUMsR0FBcUI7UUFDM0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FDM0IsT0FBTyxFQUNQO1lBQ0UsSUFBSSxFQUFFLENBQUMsb0RBQW9ELEVBQUUsaURBQWlELENBQUM7U0FDaEgsRUFDRCxHQUFHLENBQ0gsQ0FBQztJQUNMLENBQUM7SUFJRCxJQUFJO1FBQ0YsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDZixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3JCO1lBQ0QsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUMxQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUNuRCxDQUFDOzt5R0F0Q1UsWUFBWTs2R0FBWixZQUFZLGNBREMsTUFBTTsyRkFDbkIsWUFBWTtrQkFEeEIsVUFBVTttQkFBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0LCBzaGFyZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UsIEFsYWluTWVkaWFDb25maWcgfSBmcm9tICdAZGVsb24vdXRpbC9jb25maWcnO1xuaW1wb3J0IHsgTGF6eVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbC9vdGhlcic7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgTWVkaWFTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfY29nITogQWxhaW5NZWRpYUNvbmZpZztcbiAgcHJpdmF0ZSBsb2FkaW5nID0gZmFsc2U7XG4gIHByaXZhdGUgbG9hZGVkID0gZmFsc2U7XG4gIHByaXZhdGUgbm90aWZ5JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgZ2V0IGNvZygpOiBBbGFpbk1lZGlhQ29uZmlnIHtcbiAgICByZXR1cm4gdGhpcy5fY29nO1xuICB9XG4gIHNldCBjb2codmFsOiBBbGFpbk1lZGlhQ29uZmlnKSB7XG4gICAgdGhpcy5fY29nID0gdGhpcy5jb2dTcnYubWVyZ2UoXG4gICAgICAnbWVkaWEnLFxuICAgICAge1xuICAgICAgICB1cmxzOiBbJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vcGx5ci9kaXN0L3BseXIubWluLmpzJywgJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vcGx5ci9kaXN0L3BseXIuY3NzJ11cbiAgICAgIH0sXG4gICAgICB2YWxcbiAgICApITtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29nU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2UsIHByaXZhdGUgbGF6eVNydjogTGF6eVNlcnZpY2UpIHt9XG5cbiAgbG9hZCgpOiB0aGlzIHtcbiAgICBpZiAodGhpcy5sb2FkaW5nKSB7XG4gICAgICBpZiAodGhpcy5sb2FkZWQpIHtcbiAgICAgICAgdGhpcy5ub3RpZnkkLm5leHQoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMubGF6eVNydi5sb2FkKHRoaXMuY29nLnVybHMhKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMubm90aWZ5JC5uZXh0KCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBub3RpZnkoKTogT2JzZXJ2YWJsZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMubm90aWZ5JC5hc09ic2VydmFibGUoKS5waXBlKHNoYXJlKCkpO1xuICB9XG59XG4iXX0=