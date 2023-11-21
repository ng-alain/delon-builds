import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable, Optional } from '@angular/core';
import { Subject, timer, debounce } from 'rxjs';
import { LoadingDefaultComponent } from './loading.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
import * as i2 from "@delon/util/config";
import * as i3 from "@angular/cdk/bidi";
export class LoadingService {
    get instance() {
        return this.compRef != null ? this.compRef.instance : null;
    }
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: LoadingService, deps: [{ token: i1.Overlay }, { token: i2.AlainConfigService }, { token: i3.Directionality, optional: true }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: LoadingService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: LoadingService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: () => [{ type: i1.Overlay }, { type: i2.AlainConfigService }, { type: i3.Directionality, decorators: [{
                    type: Optional
                }] }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL2xvYWRpbmcvbG9hZGluZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQWdCLFVBQVUsRUFBYSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUUsT0FBTyxFQUFFLE9BQU8sRUFBZ0IsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUk5RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7QUFJOUQsTUFBTSxPQUFPLGNBQWM7SUFRekIsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUM3RCxDQUFDO0lBRUQsWUFDVSxPQUFnQixFQUNoQixTQUE2QixFQUNqQixjQUE4QjtRQUYxQyxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQ2hCLGNBQVMsR0FBVCxTQUFTLENBQW9CO1FBQ2pCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQWI1QyxZQUFPLEdBQWlELElBQUksQ0FBQztRQUM3RCxRQUFHLEdBQThCLElBQUksQ0FBQztRQUV0QyxPQUFFLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQVkvQixJQUFJLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFO1lBQ3BDLElBQUksRUFBRSxNQUFNO1lBQ1osSUFBSSxFQUFFLFFBQVE7WUFDZCxJQUFJLEVBQUU7Z0JBQ0osSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLElBQUksRUFBRSxJQUFJO2FBQ1g7WUFDRCxLQUFLLEVBQUUsQ0FBQztTQUNULENBQUUsQ0FBQztRQUNKLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUU7YUFDcEIsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUksQ0FBQyxLQUFNLENBQUMsQ0FBQyxDQUFDO2FBQzdDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRU8sTUFBTTtRQUNaLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJO1lBQUUsT0FBTztRQUU3QixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRW5CLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFDckMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLGdCQUFnQixFQUFFO1lBQzFGLGNBQWMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRTtZQUNyRCxXQUFXLEVBQUUsSUFBSTtZQUNqQixhQUFhLEVBQUUsa0JBQWtCO1NBQ2xDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxlQUFlLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDO1FBQ3JGLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBRSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQztRQUNsRixJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxRQUFVLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDbkMsSUFBSSxDQUFDLFFBQVUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1NBQzNCO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNoRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQUksQ0FBQyxPQUE0QjtRQUMvQixJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsT0FBTyxFQUFFLENBQUM7UUFDdkMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRU8sTUFBTSxDQUFDLFFBQWlCO1FBQzlCLElBQUksUUFBUTtZQUFFLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO1FBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVztZQUFFLE9BQU87UUFDOUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUN0QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILEtBQUs7UUFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM5QixDQUFDOzhHQWpGVSxjQUFjO2tIQUFkLGNBQWMsY0FERCxNQUFNOzsyRkFDbkIsY0FBYztrQkFEMUIsVUFBVTttQkFBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7OzBCQWdCN0IsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGlvbmFsaXR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHsgT3ZlcmxheSwgT3ZlcmxheVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgQ29tcG9uZW50UmVmLCBJbmplY3RhYmxlLCBPbkRlc3Ryb3ksIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0LCBTdWJzY3JpcHRpb24sIHRpbWVyLCBkZWJvdW5jZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UsIEFsYWluTG9hZGluZ0NvbmZpZyB9IGZyb20gJ0BkZWxvbi91dGlsL2NvbmZpZyc7XG5cbmltcG9ydCB7IExvYWRpbmdEZWZhdWx0Q29tcG9uZW50IH0gZnJvbSAnLi9sb2FkaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2FkaW5nU2hvd09wdGlvbnMgfSBmcm9tICcuL2xvYWRpbmcudHlwZXMnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIExvYWRpbmdTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfb3ZlcmxheVJlZj86IE92ZXJsYXlSZWY7XG4gIHByaXZhdGUgY29tcFJlZjogQ29tcG9uZW50UmVmPExvYWRpbmdEZWZhdWx0Q29tcG9uZW50PiB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIG9wdDogTG9hZGluZ1Nob3dPcHRpb25zIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgY29nOiBBbGFpbkxvYWRpbmdDb25maWc7XG4gIHByaXZhdGUgbiQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIGxvYWRpbmckOiBTdWJzY3JpcHRpb247XG5cbiAgZ2V0IGluc3RhbmNlKCk6IExvYWRpbmdEZWZhdWx0Q29tcG9uZW50IHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuY29tcFJlZiAhPSBudWxsID8gdGhpcy5jb21wUmVmLmluc3RhbmNlIDogbnVsbDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSxcbiAgICBwcml2YXRlIGNvbmZpZ1NydjogQWxhaW5Db25maWdTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZGlyZWN0aW9uYWxpdHk6IERpcmVjdGlvbmFsaXR5XG4gICkge1xuICAgIHRoaXMuY29nID0gY29uZmlnU3J2Lm1lcmdlKCdsb2FkaW5nJywge1xuICAgICAgdHlwZTogJ3NwaW4nLFxuICAgICAgdGV4dDogJ+WKoOi9veS4rS4uLicsXG4gICAgICBpY29uOiB7XG4gICAgICAgIHR5cGU6ICdsb2FkaW5nJyxcbiAgICAgICAgdGhlbWU6ICdvdXRsaW5lJyxcbiAgICAgICAgc3BpbjogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGRlbGF5OiAwXG4gICAgfSkhO1xuICAgIHRoaXMubG9hZGluZyQgPSB0aGlzLm4kXG4gICAgICAuYXNPYnNlcnZhYmxlKClcbiAgICAgIC5waXBlKGRlYm91bmNlKCgpID0+IHRpbWVyKHRoaXMub3B0IS5kZWxheSEpKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jcmVhdGUoKSk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vcHQgPT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgdGhpcy5fY2xvc2UoZmFsc2UpO1xuXG4gICAgdGhpcy5fb3ZlcmxheVJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUoe1xuICAgICAgcG9zaXRpb25TdHJhdGVneTogdGhpcy5vdmVybGF5LnBvc2l0aW9uKCkuZ2xvYmFsKCkuY2VudGVySG9yaXpvbnRhbGx5KCkuY2VudGVyVmVydGljYWxseSgpLFxuICAgICAgc2Nyb2xsU3RyYXRlZ3k6IHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLmJsb2NrKCksXG4gICAgICBoYXNCYWNrZHJvcDogdHJ1ZSxcbiAgICAgIGJhY2tkcm9wQ2xhc3M6ICdsb2FkaW5nLWJhY2tkcm9wJ1xuICAgIH0pO1xuICAgIHRoaXMuY29tcFJlZiA9IHRoaXMuX292ZXJsYXlSZWYuYXR0YWNoKG5ldyBDb21wb25lbnRQb3J0YWwoTG9hZGluZ0RlZmF1bHRDb21wb25lbnQpKTtcbiAgICBjb25zdCBkaXIgPSB0aGlzLmNvbmZpZ1Nydi5nZXQoJ2xvYWRpbmcnKSEuZGlyZWN0aW9uIHx8IHRoaXMuZGlyZWN0aW9uYWxpdHkudmFsdWU7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2UgIT0gbnVsbCkge1xuICAgICAgdGhpcy5pbnN0YW5jZSEhLm9wdGlvbnMgPSB0aGlzLm9wdDtcbiAgICAgIHRoaXMuaW5zdGFuY2UhIS5kaXIgPSBkaXI7XG4gICAgfVxuICAgIHRoaXMuY29tcFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVuIGEgbmV3IGxvYWRpbmcgaW5kaWNhdG9yXG4gICAqXG4gICAqIOaJk+W8gOS4gOS4quaWsOWKoOi9veaMh+ekuuesplxuICAgKi9cbiAgb3BlbihvcHRpb25zPzogTG9hZGluZ1Nob3dPcHRpb25zKTogdm9pZCB7XG4gICAgdGhpcy5vcHQgPSB7IC4uLnRoaXMuY29nLCAuLi5vcHRpb25zIH07XG4gICAgdGhpcy5uJC5uZXh0KCk7XG4gIH1cblxuICBwcml2YXRlIF9jbG9zZShjbGVhbk9wdDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmIChjbGVhbk9wdCkgdGhpcy5vcHQgPSBudWxsO1xuICAgIGlmICghdGhpcy5fb3ZlcmxheVJlZikgcmV0dXJuO1xuICAgIHRoaXMuX292ZXJsYXlSZWYuZGV0YWNoKCk7XG4gICAgdGhpcy5jb21wUmVmID0gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUdXJuIG9mZiBhIGxvYWRpbmcgaW5kaWNhdG9yXG4gICAqXG4gICAqIOWFs+mXreS4gOS4quWKoOi9veaMh+ekuuesplxuICAgKi9cbiAgY2xvc2UoKTogdm9pZCB7XG4gICAgdGhpcy5fY2xvc2UodHJ1ZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmxvYWRpbmckLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==