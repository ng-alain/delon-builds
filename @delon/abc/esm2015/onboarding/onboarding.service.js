import { Directionality } from '@angular/cdk/bidi';
import { DOCUMENT } from '@angular/common';
import { ApplicationRef, ComponentFactoryResolver, Inject, Injectable, Injector, Optional, } from '@angular/core';
import { Router } from '@angular/router';
import { DelonLocaleService } from '@delon/theme';
import { AlainConfigService } from '@delon/util/config';
import { of, pipe } from 'rxjs';
import { delay, switchMap } from 'rxjs/operators';
import { OnboardingComponent } from './onboarding.component';
import * as i0 from "@angular/core";
import * as i1 from "@delon/theme";
import * as i2 from "@angular/router";
import * as i3 from "@delon/util/config";
import * as i4 from "@angular/cdk/bidi";
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
            }),
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
/** @nocollapse */ OnboardingService.ɵfac = function OnboardingService_Factory(t) { return new (t || OnboardingService)(i0.ɵɵinject(i1.DelonLocaleService), i0.ɵɵinject(i0.ApplicationRef), i0.ɵɵinject(i0.ComponentFactoryResolver), i0.ɵɵinject(i2.Router), i0.ɵɵinject(i0.Injector), i0.ɵɵinject(DOCUMENT), i0.ɵɵinject(i3.AlainConfigService), i0.ɵɵinject(i4.Directionality, 8)); };
/** @nocollapse */ OnboardingService.ɵprov = i0.ɵɵdefineInjectable({ token: OnboardingService, factory: OnboardingService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OnboardingService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: i1.DelonLocaleService }, { type: i0.ApplicationRef }, { type: i0.ComponentFactoryResolver }, { type: i2.Router }, { type: i0.Injector }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: i3.AlainConfigService }, { type: i4.Directionality, decorators: [{
                type: Optional
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL29uYm9hcmRpbmcvb25ib2FyZGluZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUNMLGNBQWMsRUFDZCx3QkFBd0IsRUFHeEIsTUFBTSxFQUNOLFVBQVUsRUFDVixRQUFRLEVBRVIsUUFBUSxHQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDbEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDeEQsT0FBTyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7OztBQUk3RCxNQUFNLE9BQU8saUJBQWlCO0lBc0I1QixZQUNVLElBQXdCLEVBQ3hCLE1BQXNCLEVBQ3RCLFFBQWtDLEVBQ2xDLE1BQWMsRUFDZCxRQUFrQixFQUNBLEdBQVEsRUFDMUIsU0FBNkIsRUFDakIsY0FBOEI7UUFQMUMsU0FBSSxHQUFKLElBQUksQ0FBb0I7UUFDeEIsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFDdEIsYUFBUSxHQUFSLFFBQVEsQ0FBMEI7UUFDbEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDQSxRQUFHLEdBQUgsR0FBRyxDQUFL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QUU7WUFDakUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ1osT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7UUFDbkIsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ2QsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBSTtRQUNGLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDeEMsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7UUFDbkIsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ2QsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBSTtRQUNGLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO1FBQ25CLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDOztxR0FsTFUsaUJBQWlCLDhLQTRCbEIsUUFBUTs0RUE1QlAsaUJBQWlCLFdBQWpCLGlCQUFpQixtQkFESixNQUFNO3VGQUNuQixpQkFBaUI7Y0FEN0IsVUFBVTtlQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7c0JBNkI3QixNQUFNO3VCQUFDLFFBQVE7O3NCQUVmLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEFwcGxpY2F0aW9uUmVmLFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIENvbXBvbmVudFJlZixcbiAgRW1iZWRkZWRWaWV3UmVmLFxuICBJbmplY3QsXG4gIEluamVjdGFibGUsXG4gIEluamVjdG9yLFxuICBPbkRlc3Ryb3ksXG4gIE9wdGlvbmFsLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBEZWxvbkxvY2FsZVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwvY29uZmlnJztcbmltcG9ydCB7IG9mLCBwaXBlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlbGF5LCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPbmJvYXJkaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9vbmJvYXJkaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPbmJvYXJkaW5nQ29uZmlnLCBPbmJvYXJkaW5nSXRlbSwgT25ib2FyZGluZ09wVHlwZSB9IGZyb20gJy4vb25ib2FyZGluZy50eXBlcyc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgT25ib2FyZGluZ1NlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGNvbXBSZWY6IENvbXBvbmVudFJlZjxPbmJvYXJkaW5nQ29tcG9uZW50PjtcbiAgcHJpdmF0ZSBvcCQ6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBjb25maWc6IE9uYm9hcmRpbmdDb25maWc7XG4gIHByaXZhdGUgYWN0aXZlID0gMDtcbiAgcHJpdmF0ZSBydW5uaW5nJDogU3Vic2NyaXB0aW9uIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgX3J1bm5pbmcgPSBmYWxzZTtcbiAgcHJpdmF0ZSB0eXBlOiBPbmJvYXJkaW5nT3BUeXBlIHwgbnVsbCA9IG51bGw7XG5cbiAgcHJpdmF0ZSBfZ2V0RG9jKCk6IERvY3VtZW50IHtcbiAgICByZXR1cm4gdGhpcy5kb2M7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHdoZXRoZXIgaXQgaXMgYm9vdGluZ1xuICAgKlxuICAgKiDojrflj5bmmK/lkKbmraPlnKjlvJXlr7zkuK1cbiAgICovXG4gIGdldCBydW5uaW5nKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9ydW5uaW5nO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBpMThuOiBEZWxvbkxvY2FsZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBhcHBSZWY6IEFwcGxpY2F0aW9uUmVmLFxuICAgIHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBhbnksXG4gICAgcHJpdmF0ZSBjb25maWdTcnY6IEFsYWluQ29uZmlnU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGRpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eSxcbiAgKSB7fVxuXG4gIHByaXZhdGUgYXR0YWNoKCk6IHZvaWQge1xuICAgIGNvbnN0IGNvbXBSZWYgPSAodGhpcy5jb21wUmVmID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShPbmJvYXJkaW5nQ29tcG9uZW50KS5jcmVhdGUodGhpcy5pbmplY3RvcikpO1xuICAgIHRoaXMuYXBwUmVmLmF0dGFjaFZpZXcoY29tcFJlZi5ob3N0Vmlldyk7XG4gICAgY29uc3QgY29tcE5vZGUgPSAoY29tcFJlZi5ob3N0VmlldyBhcyBFbWJlZGRlZFZpZXdSZWY8YW55Pikucm9vdE5vZGVzWzBdO1xuICAgIGNvbnN0IGRvYyA9IHRoaXMuX2dldERvYygpO1xuICAgIGNvbnN0IGNkayA9IGRvYy5xdWVyeVNlbGVjdG9yKCcuY2RrLW92ZXJsYXktY29udGFpbmVyJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgaWYgKGNkaykge1xuICAgICAgZG9jLmJvZHkuaW5zZXJ0QmVmb3JlKGNvbXBOb2RlLCBjZGspO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2MuYm9keS5hcHBlbmRDaGlsZChjb21wTm9kZSk7XG4gICAgfVxuICAgIHRoaXMub3AkID0gdGhpcy5jb21wUmVmLmluc3RhbmNlLm9wLnN1YnNjcmliZSgodHlwZTogT25ib2FyZGluZ09wVHlwZSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ25leHQnOlxuICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdwcmV2JzpcbiAgICAgICAgICB0aGlzLnByZXYoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aGlzLmRvbmUoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgY2FuY2VsUnVubmluZygpOiB0aGlzIHtcbiAgICBpZiAodGhpcy5ydW5uaW5nJCkge1xuICAgICAgdGhpcy5ydW5uaW5nJC51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5ydW5uaW5nJCA9IG51bGw7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVSdW5uaW5nKHN0YXR1czogYm9vbGVhbik6IHRoaXMge1xuICAgIHRoaXMuX3J1bm5pbmcgPSBzdGF0dXM7XG4gICAgdGhpcy5jb21wUmVmIS5pbnN0YW5jZS51cGRhdGVSdW5uaW5nKHN0YXR1cyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcml2YXRlIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5jYW5jZWxSdW5uaW5nKCk7XG4gICAgaWYgKHRoaXMuY29tcFJlZikge1xuICAgICAgdGhpcy5hcHBSZWYuZGV0YWNoVmlldyh0aGlzLmNvbXBSZWYuaG9zdFZpZXcpO1xuICAgICAgdGhpcy5jb21wUmVmLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMub3AkLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzaG93SXRlbShpc1N0YXJ0OiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICBjb25zdCBpdGVtcyA9IHRoaXMuY29uZmlnLml0ZW1zITtcbiAgICBjb25zdCBpdGVtID0ge1xuICAgICAgcG9zaXRpb246ICdib3R0b21MZWZ0JyxcbiAgICAgIGJlZm9yZTogb2YodHJ1ZSksXG4gICAgICBhZnRlcjogb2YodHJ1ZSksXG4gICAgICAuLi50aGlzLmkxOG4uZ2V0RGF0YSgnb25ib2FyZGluZycpLFxuICAgICAgLi4uaXRlbXNbdGhpcy5hY3RpdmVdLFxuICAgIH0gYXMgT25ib2FyZGluZ0l0ZW07XG4gICAgY29uc3QgZGlyID0gdGhpcy5jb25maWdTcnYuZ2V0KCdvbmJvYXJkaW5nJykhLmRpcmVjdGlvbiB8fCB0aGlzLmRpcmVjdGlvbmFsaXR5LnZhbHVlO1xuICAgIE9iamVjdC5hc3NpZ24odGhpcy5jb21wUmVmLmluc3RhbmNlLCB7IGl0ZW0sIGNvbmZpZzogdGhpcy5jb25maWcsIGFjdGl2ZTogdGhpcy5hY3RpdmUsIG1heDogaXRlbXMubGVuZ3RoLCBkaXIgfSk7XG4gICAgY29uc3QgcGlwZXMgPSBbXG4gICAgICBzd2l0Y2hNYXAoKCkgPT4gKGl0ZW0udXJsID8gdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChpdGVtLnVybCkgOiBvZih0cnVlKSkpLFxuICAgICAgc3dpdGNoTWFwKCgpID0+IHtcbiAgICAgICAgY29uc3Qgb2JzID0gdGhpcy50eXBlID09PSAncHJldicgPyBpdGVtLmFmdGVyISA6IGl0ZW0uYmVmb3JlITtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBvYnMgPT09ICdudW1iZXInID8gb2YodHJ1ZSkucGlwZShkZWxheShvYnMpKSA6IG9icztcbiAgICAgIH0pLFxuICAgIF07XG4gICAgaWYgKCFpc1N0YXJ0KSB7XG4gICAgICBwaXBlcy5wdXNoKGRlbGF5KDEpKTtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZVJ1bm5pbmcodHJ1ZSk7XG5cbiAgICB0aGlzLnJ1bm5pbmckID0gb2YodHJ1ZSlcbiAgICAgIC5waXBlKHBpcGUuYXBwbHkodGhpcywgcGlwZXMpKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKCkgPT4gdGhpcy5jYW5jZWxSdW5uaW5nKCkudXBkYXRlUnVubmluZyhmYWxzZSksXG4gICAgICAgICgpID0+IHRoaXMuZG9uZSgpLFxuICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydCBhIG5ldyB1c2VyIGd1aWRhbmNlXG4gICAqXG4gICAqIOW8gOWQr+aWsOeahOeUqOaIt+W8leWvvOa1geeoi1xuICAgKi9cbiAgc3RhcnQoY29uZmlnOiBPbmJvYXJkaW5nQ29uZmlnKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucnVubmluZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICB0aGlzLmNvbmZpZyA9IHtcbiAgICAgIGl0ZW1zOiBbXSxcbiAgICAgIG1hc2s6IHRydWUsXG4gICAgICBtYXNrQ2xvc2FibGU6IHRydWUsXG4gICAgICBzaG93VG90YWw6IGZhbHNlLFxuICAgICAgLi4uY29uZmlnLFxuICAgIH07XG4gICAgdGhpcy5hY3RpdmUgPSAwO1xuICAgIHRoaXMudHlwZSA9IG51bGw7XG4gICAgdGhpcy5hdHRhY2goKTtcbiAgICB0aGlzLnNob3dJdGVtKHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIE5leHRcbiAgICpcbiAgICog5LiL5LiA5q2lXG4gICAqL1xuICBuZXh0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9ydW5uaW5nIHx8IHRoaXMuYWN0aXZlICsgMSA+PSB0aGlzLmNvbmZpZy5pdGVtcyEubGVuZ3RoKSB7XG4gICAgICB0aGlzLmRvbmUoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy50eXBlID0gJ25leHQnO1xuICAgICsrdGhpcy5hY3RpdmU7XG4gICAgdGhpcy5zaG93SXRlbSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFByZXZcbiAgICpcbiAgICog5LiK5LiA5q2lXG4gICAqL1xuICBwcmV2KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9ydW5uaW5nIHx8IHRoaXMuYWN0aXZlIC0gMSA8IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy50eXBlID0gJ3ByZXYnO1xuICAgIC0tdGhpcy5hY3RpdmU7XG4gICAgdGhpcy5zaG93SXRlbSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIERvbmVcbiAgICpcbiAgICog5a6M5oiQXG4gICAqL1xuICBkb25lKCk6IHZvaWQge1xuICAgIHRoaXMudHlwZSA9ICdkb25lJztcbiAgICB0aGlzLmRlc3Ryb3koKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSgpO1xuICB9XG59XG4iXX0=