import { Directionality } from '@angular/cdk/bidi';
import { DOCUMENT } from '@angular/common';
import { ApplicationRef, ComponentFactoryResolver, Inject, Injectable, Injector, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { of, pipe } from 'rxjs';
import { delay, switchMap } from 'rxjs/operators';
import { DelonLocaleService } from '@delon/theme';
import { AlainConfigService } from '@delon/util/config';
import { OnboardingComponent } from './onboarding.component';
import * as i0 from "@angular/core";
import * as i1 from "@delon/theme";
import * as i2 from "@angular/router";
import * as i3 from "@angular/common";
import * as i4 from "@delon/util/config";
import * as i5 from "@angular/cdk/bidi";
export class OnboardingService {
    constructor(i18n, appRef, resolver, router, injector, doc, configSrv, directionality) {
        this.i18n = i18n;
        this.appRef = appRef;
        this.resolver = resolver;
        this.router = router;
        this.injector = injector;
        this.doc = doc;
        this.configSrv = configSrv;
        this.directionality = directionality;
        this.active = 0;
        this.running$ = null;
        this._running = false;
        this.type = null;
    }
    _getDoc() {
        return this.doc;
    }
    /**
     * Get whether it is booting
     *
     * 获取是否正在引导中
     */
    get running() {
        return this._running;
    }
    attach() {
        const compRef = (this.compRef = this.resolver.resolveComponentFactory(OnboardingComponent).create(this.injector));
        this.appRef.attachView(compRef.hostView);
        const compNode = compRef.hostView.rootNodes[0];
        const doc = this._getDoc();
        const cdk = doc.querySelector('.cdk-overlay-container');
        if (cdk) {
            doc.body.insertBefore(compNode, cdk);
        }
        else {
            doc.body.appendChild(compNode);
        }
        this.op$ = this.compRef.instance.op.subscribe((type) => {
            switch (type) {
                case 'next':
                    this.next();
                    break;
                case 'prev':
                    this.prev();
                    break;
                default:
                    this.done();
                    break;
            }
        });
    }
    cancelRunning() {
        if (this.running$) {
            this.running$.unsubscribe();
            this.running$ = null;
        }
        return this;
    }
    updateRunning(status) {
        this._running = status;
        this.compRef.instance.updateRunning(status);
        return this;
    }
    destroy() {
        this.cancelRunning();
        if (this.compRef) {
            this.appRef.detachView(this.compRef.hostView);
            this.compRef.destroy();
            this.op$.unsubscribe();
        }
    }
    showItem(isStart = false) {
        const items = this.config.items;
        const item = Object.assign(Object.assign({ position: 'bottomLeft', before: of(true), after: of(true) }, this.i18n.getData('onboarding')), items[this.active]);
        const dir = this.configSrv.get('onboarding').direction || this.directionality.value;
        Object.assign(this.compRef.instance, { item, config: this.config, active: this.active, max: items.length, dir });
        const pipes = [
            switchMap(() => (item.url ? this.router.navigateByUrl(item.url) : of(true))),
            switchMap(() => {
                const obs = this.type === 'prev' ? item.after : item.before;
                return typeof obs === 'number' ? of(true).pipe(delay(obs)) : obs;
            })
        ];
        if (!isStart) {
            pipes.push(delay(1));
        }
        this.updateRunning(true);
        this.running$ = of(true)
            .pipe(pipe.apply(this, pipes))
            .subscribe(() => this.cancelRunning().updateRunning(false), () => this.done());
    }
    /**
     * Start a new user guidance
     *
     * 开启新的用户引导流程
     */
    start(config) {
        if (this.running) {
            return;
        }
        this.destroy();
        this.config = Object.assign({ items: [], mask: true, maskClosable: true, showTotal: false }, config);
        this.active = 0;
        this.type = null;
        this.attach();
        this.showItem(true);
    }
    /**
     * Next
     *
     * 下一步
     */
    next() {
        if (this._running || this.active + 1 >= this.config.items.length) {
            this.done();
            return;
        }
        this.type = 'next';
        ++this.active;
        this.showItem();
    }
    /**
     * Prev
     *
     * 上一步
     */
    prev() {
        if (this._running || this.active - 1 < 0) {
            return;
        }
        this.type = 'prev';
        --this.active;
        this.showItem();
    }
    /**
     * Done
     *
     * 完成
     */
    done() {
        this.type = 'done';
        this.destroy();
    }
    ngOnDestroy() {
        this.destroy();
    }
}
OnboardingService.ɵprov = i0.ɵɵdefineInjectable({ factory: function OnboardingService_Factory() { return new OnboardingService(i0.ɵɵinject(i1.DelonLocaleService), i0.ɵɵinject(i0.ApplicationRef), i0.ɵɵinject(i0.ComponentFactoryResolver), i0.ɵɵinject(i2.Router), i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject(i3.DOCUMENT), i0.ɵɵinject(i4.AlainConfigService), i0.ɵɵinject(i5.Directionality, 8)); }, token: OnboardingService, providedIn: "root" });
OnboardingService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
OnboardingService.ctorParameters = () => [
    { type: DelonLocaleService },
    { type: ApplicationRef },
    { type: ComponentFactoryResolver },
    { type: Router },
    { type: Injector },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: AlainConfigService },
    { type: Directionality, decorators: [{ type: Optional }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL29uYm9hcmRpbmcvb25ib2FyZGluZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUNMLGNBQWMsRUFDZCx3QkFBd0IsRUFHeEIsTUFBTSxFQUNOLFVBQVUsRUFDVixRQUFRLEVBRVIsUUFBUSxFQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDbEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFeEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7QUFJN0QsTUFBTSxPQUFPLGlCQUFpQjtJQXNCNUIsWUFDVSxJQUF3QixFQUN4QixNQUFzQixFQUN0QixRQUFrQyxFQUNsQyxNQUFjLEVBQ2QsUUFBa0IsRUFDQSxHQUFRLEVBQzFCLFNBQTZCLEVBQ2pCLGNBQThCO1FBUDFDLFNBQUksR0FBSixJQUFJLENBQW9CO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQ3RCLGFBQVEsR0FBUixRQUFRLENBQTBCO1FBQ2xDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ0EsUUFBRyxHQUFILEdBQUcsQ0FB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QUFFO1lBQ2pFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNaLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO1FBQ25CLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNkLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQUk7UUFDRixJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3hDLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO1FBQ25CLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNkLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQUk7UUFDRixJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztRQUNuQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQzs7OztZQW5MRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7WUFOekIsa0JBQWtCO1lBZHpCLGNBQWM7WUFDZCx3QkFBd0I7WUFTakIsTUFBTTtZQUpiLFFBQVE7NENBMkNMLE1BQU0sU0FBQyxRQUFRO1lBbENYLGtCQUFrQjtZQWxCbEIsY0FBYyx1QkFzRGxCLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEFwcGxpY2F0aW9uUmVmLFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIENvbXBvbmVudFJlZixcbiAgRW1iZWRkZWRWaWV3UmVmLFxuICBJbmplY3QsXG4gIEluamVjdGFibGUsXG4gIEluamVjdG9yLFxuICBPbkRlc3Ryb3ksXG4gIE9wdGlvbmFsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IG9mLCBwaXBlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlbGF5LCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IERlbG9uTG9jYWxlU2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbC9jb25maWcnO1xuXG5pbXBvcnQgeyBPbmJvYXJkaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9vbmJvYXJkaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPbmJvYXJkaW5nQ29uZmlnLCBPbmJvYXJkaW5nSXRlbSwgT25ib2FyZGluZ09wVHlwZSB9IGZyb20gJy4vb25ib2FyZGluZy50eXBlcyc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgT25ib2FyZGluZ1NlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGNvbXBSZWY6IENvbXBvbmVudFJlZjxPbmJvYXJkaW5nQ29tcG9uZW50PjtcbiAgcHJpdmF0ZSBvcCQ6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBjb25maWc6IE9uYm9hcmRpbmdDb25maWc7XG4gIHByaXZhdGUgYWN0aXZlID0gMDtcbiAgcHJpdmF0ZSBydW5uaW5nJDogU3Vic2NyaXB0aW9uIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgX3J1bm5pbmcgPSBmYWxzZTtcbiAgcHJpdmF0ZSB0eXBlOiBPbmJvYXJkaW5nT3BUeXBlIHwgbnVsbCA9IG51bGw7XG5cbiAgcHJpdmF0ZSBfZ2V0RG9jKCk6IERvY3VtZW50IHtcbiAgICByZXR1cm4gdGhpcy5kb2M7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHdoZXRoZXIgaXQgaXMgYm9vdGluZ1xuICAgKlxuICAgKiDojrflj5bmmK/lkKbmraPlnKjlvJXlr7zkuK1cbiAgICovXG4gIGdldCBydW5uaW5nKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9ydW5uaW5nO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBpMThuOiBEZWxvbkxvY2FsZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBhcHBSZWY6IEFwcGxpY2F0aW9uUmVmLFxuICAgIHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBhbnksXG4gICAgcHJpdmF0ZSBjb25maWdTcnY6IEFsYWluQ29uZmlnU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGRpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eVxuICApIHt9XG5cbiAgcHJpdmF0ZSBhdHRhY2goKTogdm9pZCB7XG4gICAgY29uc3QgY29tcFJlZiA9ICh0aGlzLmNvbXBSZWYgPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KE9uYm9hcmRpbmdDb21wb25lbnQpLmNyZWF0ZSh0aGlzLmluamVjdG9yKSk7XG4gICAgdGhpcy5hcHBSZWYuYXR0YWNoVmlldyhjb21wUmVmLmhvc3RWaWV3KTtcbiAgICBjb25zdCBjb21wTm9kZSA9IChjb21wUmVmLmhvc3RWaWV3IGFzIEVtYmVkZGVkVmlld1JlZjxhbnk+KS5yb290Tm9kZXNbMF07XG4gICAgY29uc3QgZG9jID0gdGhpcy5fZ2V0RG9jKCk7XG4gICAgY29uc3QgY2RrID0gZG9jLnF1ZXJ5U2VsZWN0b3IoJy5jZGstb3ZlcmxheS1jb250YWluZXInKSBhcyBIVE1MRWxlbWVudDtcbiAgICBpZiAoY2RrKSB7XG4gICAgICBkb2MuYm9keS5pbnNlcnRCZWZvcmUoY29tcE5vZGUsIGNkayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvYy5ib2R5LmFwcGVuZENoaWxkKGNvbXBOb2RlKTtcbiAgICB9XG4gICAgdGhpcy5vcCQgPSB0aGlzLmNvbXBSZWYuaW5zdGFuY2Uub3Auc3Vic2NyaWJlKCh0eXBlOiBPbmJvYXJkaW5nT3BUeXBlKSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnbmV4dCc6XG4gICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3ByZXYnOlxuICAgICAgICAgIHRoaXMucHJldigpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRoaXMuZG9uZSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBjYW5jZWxSdW5uaW5nKCk6IHRoaXMge1xuICAgIGlmICh0aGlzLnJ1bm5pbmckKSB7XG4gICAgICB0aGlzLnJ1bm5pbmckLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLnJ1bm5pbmckID0gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVJ1bm5pbmcoc3RhdHVzOiBib29sZWFuKTogdGhpcyB7XG4gICAgdGhpcy5fcnVubmluZyA9IHN0YXR1cztcbiAgICB0aGlzLmNvbXBSZWYhLmluc3RhbmNlLnVwZGF0ZVJ1bm5pbmcoc3RhdHVzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByaXZhdGUgZGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmNhbmNlbFJ1bm5pbmcoKTtcbiAgICBpZiAodGhpcy5jb21wUmVmKSB7XG4gICAgICB0aGlzLmFwcFJlZi5kZXRhY2hWaWV3KHRoaXMuY29tcFJlZi5ob3N0Vmlldyk7XG4gICAgICB0aGlzLmNvbXBSZWYuZGVzdHJveSgpO1xuICAgICAgdGhpcy5vcCQudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNob3dJdGVtKGlzU3RhcnQ6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5jb25maWcuaXRlbXMhO1xuICAgIGNvbnN0IGl0ZW0gPSB7XG4gICAgICBwb3NpdGlvbjogJ2JvdHRvbUxlZnQnLFxuICAgICAgYmVmb3JlOiBvZih0cnVlKSxcbiAgICAgIGFmdGVyOiBvZih0cnVlKSxcbiAgICAgIC4uLnRoaXMuaTE4bi5nZXREYXRhKCdvbmJvYXJkaW5nJyksXG4gICAgICAuLi5pdGVtc1t0aGlzLmFjdGl2ZV1cbiAgICB9IGFzIE9uYm9hcmRpbmdJdGVtO1xuICAgIGNvbnN0IGRpciA9IHRoaXMuY29uZmlnU3J2LmdldCgnb25ib2FyZGluZycpIS5kaXJlY3Rpb24gfHwgdGhpcy5kaXJlY3Rpb25hbGl0eS52YWx1ZTtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMuY29tcFJlZi5pbnN0YW5jZSwgeyBpdGVtLCBjb25maWc6IHRoaXMuY29uZmlnLCBhY3RpdmU6IHRoaXMuYWN0aXZlLCBtYXg6IGl0ZW1zLmxlbmd0aCwgZGlyIH0pO1xuICAgIGNvbnN0IHBpcGVzID0gW1xuICAgICAgc3dpdGNoTWFwKCgpID0+IChpdGVtLnVybCA/IHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoaXRlbS51cmwpIDogb2YodHJ1ZSkpKSxcbiAgICAgIHN3aXRjaE1hcCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IG9icyA9IHRoaXMudHlwZSA9PT0gJ3ByZXYnID8gaXRlbS5hZnRlciEgOiBpdGVtLmJlZm9yZSE7XG4gICAgICAgIHJldHVybiB0eXBlb2Ygb2JzID09PSAnbnVtYmVyJyA/IG9mKHRydWUpLnBpcGUoZGVsYXkob2JzKSkgOiBvYnM7XG4gICAgICB9KVxuICAgIF07XG4gICAgaWYgKCFpc1N0YXJ0KSB7XG4gICAgICBwaXBlcy5wdXNoKGRlbGF5KDEpKTtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZVJ1bm5pbmcodHJ1ZSk7XG5cbiAgICB0aGlzLnJ1bm5pbmckID0gb2YodHJ1ZSlcbiAgICAgIC5waXBlKHBpcGUuYXBwbHkodGhpcywgcGlwZXMpKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKCkgPT4gdGhpcy5jYW5jZWxSdW5uaW5nKCkudXBkYXRlUnVubmluZyhmYWxzZSksXG4gICAgICAgICgpID0+IHRoaXMuZG9uZSgpXG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0IGEgbmV3IHVzZXIgZ3VpZGFuY2VcbiAgICpcbiAgICog5byA5ZCv5paw55qE55So5oi35byV5a+85rWB56iLXG4gICAqL1xuICBzdGFydChjb25maWc6IE9uYm9hcmRpbmdDb25maWcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5ydW5uaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZGVzdHJveSgpO1xuICAgIHRoaXMuY29uZmlnID0ge1xuICAgICAgaXRlbXM6IFtdLFxuICAgICAgbWFzazogdHJ1ZSxcbiAgICAgIG1hc2tDbG9zYWJsZTogdHJ1ZSxcbiAgICAgIHNob3dUb3RhbDogZmFsc2UsXG4gICAgICAuLi5jb25maWdcbiAgICB9O1xuICAgIHRoaXMuYWN0aXZlID0gMDtcbiAgICB0aGlzLnR5cGUgPSBudWxsO1xuICAgIHRoaXMuYXR0YWNoKCk7XG4gICAgdGhpcy5zaG93SXRlbSh0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOZXh0XG4gICAqXG4gICAqIOS4i+S4gOatpVxuICAgKi9cbiAgbmV4dCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fcnVubmluZyB8fCB0aGlzLmFjdGl2ZSArIDEgPj0gdGhpcy5jb25maWcuaXRlbXMhLmxlbmd0aCkge1xuICAgICAgdGhpcy5kb25lKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudHlwZSA9ICduZXh0JztcbiAgICArK3RoaXMuYWN0aXZlO1xuICAgIHRoaXMuc2hvd0l0ZW0oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmV2XG4gICAqXG4gICAqIOS4iuS4gOatpVxuICAgKi9cbiAgcHJldigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fcnVubmluZyB8fCB0aGlzLmFjdGl2ZSAtIDEgPCAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudHlwZSA9ICdwcmV2JztcbiAgICAtLXRoaXMuYWN0aXZlO1xuICAgIHRoaXMuc2hvd0l0ZW0oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEb25lXG4gICAqXG4gICAqIOWujOaIkFxuICAgKi9cbiAgZG9uZSgpOiB2b2lkIHtcbiAgICB0aGlzLnR5cGUgPSAnZG9uZSc7XG4gICAgdGhpcy5kZXN0cm95KCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3koKTtcbiAgfVxufVxuIl19