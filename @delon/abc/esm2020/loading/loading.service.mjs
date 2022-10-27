import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable, Optional } from '@angular/core';
import { Subject, timer, debounce } from 'rxjs';
import { LoadingDefaultComponent } from './loading.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
import * as i2 from "@delon/util/config";
import * as i3 from "@angular/cdk/bidi";
export class LoadingService {
    constructor(overlay, configSrv, directionality) {
        this.overlay = overlay;
        this.configSrv = configSrv;
        this.directionality = directionality;
        this.compRef = null;
        this.opt = null;
        this.n$ = new Subject();
        this.cog = configSrv.merge('loading', {
            type: 'spin',
            text: '加载中...',
            icon: {
                type: 'loading',
                theme: 'outline',
                spin: true
            },
            delay: 0
        });
        this.loading$ = this.n$
            .asObservable()
            .pipe(debounce(() => timer(this.opt.delay)))
            .subscribe(() => this.create());
    }
    get instance() {
        return this.compRef != null ? this.compRef.instance : null;
    }
    create() {
        if (this.opt == null)
            return;
        this._close(false);
        this._overlayRef = this.overlay.create({
            positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
            scrollStrategy: this.overlay.scrollStrategies.block(),
            hasBackdrop: true,
            backdropClass: 'loading-backdrop'
        });
        this.compRef = this._overlayRef.attach(new ComponentPortal(LoadingDefaultComponent));
        const dir = this.configSrv.get('loading').direction || this.directionality.value;
        if (this.instance != null) {
            this.instance.options = this.opt;
            this.instance.dir = dir;
        }
        this.compRef.changeDetectorRef.markForCheck();
    }
    /**
     * Open a new loading indicator
     *
     * 打开一个新加载指示符
     */
    open(options) {
        this.opt = { ...this.cog, ...options };
        this.n$.next();
    }
    _close(cleanOpt) {
        if (cleanOpt)
            this.opt = null;
        if (!this._overlayRef)
            return;
        this._overlayRef.detach();
        this.compRef = null;
    }
    /**
     * Turn off a loading indicator
     *
     * 关闭一个加载指示符
     */
    close() {
        this._close(true);
    }
    ngOnDestroy() {
        this.loading$.unsubscribe();
    }
}
LoadingService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.8", ngImport: i0, type: LoadingService, deps: [{ token: i1.Overlay }, { token: i2.AlainConfigService }, { token: i3.Directionality, optional: true }], target: i0.ɵɵFactoryTarget.Injectable });
LoadingService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.8", ngImport: i0, type: LoadingService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.8", ngImport: i0, type: LoadingService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: i1.Overlay }, { type: i2.AlainConfigService }, { type: i3.Directionality, decorators: [{
                    type: Optional
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL2xvYWRpbmcvbG9hZGluZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQWdCLFVBQVUsRUFBYSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUUsT0FBTyxFQUFFLE9BQU8sRUFBZ0IsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUk5RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7QUFJOUQsTUFBTSxPQUFPLGNBQWM7SUFZekIsWUFDVSxPQUFnQixFQUNoQixTQUE2QixFQUNqQixjQUE4QjtRQUYxQyxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQ2hCLGNBQVMsR0FBVCxTQUFTLENBQW9CO1FBQ2pCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQWI1QyxZQUFPLEdBQWlELElBQUksQ0FBQztRQUM3RCxRQUFHLEdBQThCLElBQUksQ0FBQztRQUV0QyxPQUFFLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQVkvQixJQUFJLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFO1lBQ3BDLElBQUksRUFBRSxNQUFNO1lBQ1osSUFBSSxFQUFFLFFBQVE7WUFDZCxJQUFJLEVBQUU7Z0JBQ0osSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLElBQUksRUFBRSxJQUFJO2FBQ1g7WUFDRCxLQUFLLEVBQUUsQ0FBQztTQUNULENBQUUsQ0FBQztRQUNKLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUU7YUFDcEIsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUksQ0FBQyxLQUFNLENBQUMsQ0FBQyxDQUFDO2FBQzdDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBdkJELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDN0QsQ0FBQztJQXVCTyxNQUFNO1FBQ1osSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUk7WUFBRSxPQUFPO1FBRTdCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFbkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUNyQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLGtCQUFrQixFQUFFLENBQUMsZ0JBQWdCLEVBQUU7WUFDMUYsY0FBYyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFO1lBQ3JELFdBQVcsRUFBRSxJQUFJO1lBQ2pCLGFBQWEsRUFBRSxrQkFBa0I7U0FDbEMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLGVBQWUsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUM7UUFDckYsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFFLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDO1FBQ2xGLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFDekIsSUFBSSxDQUFDLFFBQVUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUNuQyxJQUFJLENBQUMsUUFBVSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7U0FDM0I7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ2hELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBSSxDQUFDLE9BQTRCO1FBQy9CLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxPQUFPLEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFTyxNQUFNLENBQUMsUUFBaUI7UUFDOUIsSUFBSSxRQUFRO1lBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUM7UUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXO1lBQUUsT0FBTztRQUM5QixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3RCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsS0FBSztRQUNILElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzlCLENBQUM7OzJHQWpGVSxjQUFjOytHQUFkLGNBQWMsY0FERCxNQUFNOzJGQUNuQixjQUFjO2tCQUQxQixVQUFVO21CQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7MEJBZ0I3QixRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQgeyBPdmVybGF5LCBPdmVybGF5UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgQ29tcG9uZW50UG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQgeyBDb21wb25lbnRSZWYsIEluamVjdGFibGUsIE9uRGVzdHJveSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QsIFN1YnNjcmlwdGlvbiwgdGltZXIsIGRlYm91bmNlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEFsYWluQ29uZmlnU2VydmljZSwgQWxhaW5Mb2FkaW5nQ29uZmlnIH0gZnJvbSAnQGRlbG9uL3V0aWwvY29uZmlnJztcblxuaW1wb3J0IHsgTG9hZGluZ0RlZmF1bHRDb21wb25lbnQgfSBmcm9tICcuL2xvYWRpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IExvYWRpbmdTaG93T3B0aW9ucyB9IGZyb20gJy4vbG9hZGluZy50eXBlcyc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgTG9hZGluZ1NlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9vdmVybGF5UmVmPzogT3ZlcmxheVJlZjtcbiAgcHJpdmF0ZSBjb21wUmVmOiBDb21wb25lbnRSZWY8TG9hZGluZ0RlZmF1bHRDb21wb25lbnQ+IHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgb3B0OiBMb2FkaW5nU2hvd09wdGlvbnMgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBjb2c6IEFsYWluTG9hZGluZ0NvbmZpZztcbiAgcHJpdmF0ZSBuJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHByaXZhdGUgbG9hZGluZyQ6IFN1YnNjcmlwdGlvbjtcblxuICBnZXQgaW5zdGFuY2UoKTogTG9hZGluZ0RlZmF1bHRDb21wb25lbnQgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5jb21wUmVmICE9IG51bGwgPyB0aGlzLmNvbXBSZWYuaW5zdGFuY2UgOiBudWxsO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5LFxuICAgIHByaXZhdGUgY29uZmlnU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBkaXJlY3Rpb25hbGl0eTogRGlyZWN0aW9uYWxpdHlcbiAgKSB7XG4gICAgdGhpcy5jb2cgPSBjb25maWdTcnYubWVyZ2UoJ2xvYWRpbmcnLCB7XG4gICAgICB0eXBlOiAnc3BpbicsXG4gICAgICB0ZXh0OiAn5Yqg6L295LitLi4uJyxcbiAgICAgIGljb246IHtcbiAgICAgICAgdHlwZTogJ2xvYWRpbmcnLFxuICAgICAgICB0aGVtZTogJ291dGxpbmUnLFxuICAgICAgICBzcGluOiB0cnVlXG4gICAgICB9LFxuICAgICAgZGVsYXk6IDBcbiAgICB9KSE7XG4gICAgdGhpcy5sb2FkaW5nJCA9IHRoaXMubiRcbiAgICAgIC5hc09ic2VydmFibGUoKVxuICAgICAgLnBpcGUoZGVib3VuY2UoKCkgPT4gdGltZXIodGhpcy5vcHQhLmRlbGF5ISkpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNyZWF0ZSgpKTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm9wdCA9PSBudWxsKSByZXR1cm47XG5cbiAgICB0aGlzLl9jbG9zZShmYWxzZSk7XG5cbiAgICB0aGlzLl9vdmVybGF5UmVmID0gdGhpcy5vdmVybGF5LmNyZWF0ZSh7XG4gICAgICBwb3NpdGlvblN0cmF0ZWd5OiB0aGlzLm92ZXJsYXkucG9zaXRpb24oKS5nbG9iYWwoKS5jZW50ZXJIb3Jpem9udGFsbHkoKS5jZW50ZXJWZXJ0aWNhbGx5KCksXG4gICAgICBzY3JvbGxTdHJhdGVneTogdGhpcy5vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMuYmxvY2soKSxcbiAgICAgIGhhc0JhY2tkcm9wOiB0cnVlLFxuICAgICAgYmFja2Ryb3BDbGFzczogJ2xvYWRpbmctYmFja2Ryb3AnXG4gICAgfSk7XG4gICAgdGhpcy5jb21wUmVmID0gdGhpcy5fb3ZlcmxheVJlZi5hdHRhY2gobmV3IENvbXBvbmVudFBvcnRhbChMb2FkaW5nRGVmYXVsdENvbXBvbmVudCkpO1xuICAgIGNvbnN0IGRpciA9IHRoaXMuY29uZmlnU3J2LmdldCgnbG9hZGluZycpIS5kaXJlY3Rpb24gfHwgdGhpcy5kaXJlY3Rpb25hbGl0eS52YWx1ZTtcbiAgICBpZiAodGhpcy5pbnN0YW5jZSAhPSBudWxsKSB7XG4gICAgICB0aGlzLmluc3RhbmNlISEub3B0aW9ucyA9IHRoaXMub3B0O1xuICAgICAgdGhpcy5pbnN0YW5jZSEhLmRpciA9IGRpcjtcbiAgICB9XG4gICAgdGhpcy5jb21wUmVmLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW4gYSBuZXcgbG9hZGluZyBpbmRpY2F0b3JcbiAgICpcbiAgICog5omT5byA5LiA5Liq5paw5Yqg6L295oyH56S656ymXG4gICAqL1xuICBvcGVuKG9wdGlvbnM/OiBMb2FkaW5nU2hvd09wdGlvbnMpOiB2b2lkIHtcbiAgICB0aGlzLm9wdCA9IHsgLi4udGhpcy5jb2csIC4uLm9wdGlvbnMgfTtcbiAgICB0aGlzLm4kLm5leHQoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2Nsb3NlKGNsZWFuT3B0OiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKGNsZWFuT3B0KSB0aGlzLm9wdCA9IG51bGw7XG4gICAgaWYgKCF0aGlzLl9vdmVybGF5UmVmKSByZXR1cm47XG4gICAgdGhpcy5fb3ZlcmxheVJlZi5kZXRhY2goKTtcbiAgICB0aGlzLmNvbXBSZWYgPSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFR1cm4gb2ZmIGEgbG9hZGluZyBpbmRpY2F0b3JcbiAgICpcbiAgICog5YWz6Zet5LiA5Liq5Yqg6L295oyH56S656ymXG4gICAqL1xuICBjbG9zZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9jbG9zZSh0cnVlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMubG9hZGluZyQudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19