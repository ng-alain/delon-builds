import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Optional } from '@angular/core';
import { of, pipe, delay, switchMap } from 'rxjs';
import { OnboardingComponent } from './onboarding.component';
import * as i0 from "@angular/core";
import * as i1 from "@delon/theme";
import * as i2 from "@angular/router";
import * as i3 from "@delon/util/config";
import * as i4 from "@angular/cdk/bidi";
export class OnboardingService {
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
    constructor(i18n, appRef, 
    // TODO: Tracking https://github.com/angular/angular/issues/45263
    resolver, router, injector, doc, configSrv, directionality) {
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
        const item = {
            position: 'bottomLeft',
            before: of(true),
            after: of(true),
            ...this.i18n.getData('onboarding'),
            ...items[this.active]
        };
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
            .subscribe({
            next: () => this.cancelRunning().updateRunning(false),
            error: () => this.done()
        });
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
        this.config = {
            items: [],
            mask: true,
            maskClosable: true,
            showTotal: false,
            ...config
        };
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
OnboardingService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: OnboardingService, deps: [{ token: i1.DelonLocaleService }, { token: i0.ApplicationRef }, { token: i0.ComponentFactoryResolver }, { token: i2.Router }, { token: i0.Injector }, { token: DOCUMENT }, { token: i3.AlainConfigService }, { token: i4.Directionality, optional: true }], target: i0.ɵɵFactoryTarget.Injectable });
OnboardingService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: OnboardingService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: OnboardingService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.DelonLocaleService }, { type: i0.ApplicationRef }, { type: i0.ComponentFactoryResolver }, { type: i2.Router }, { type: i0.Injector }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: i3.AlainConfigService }, { type: i4.Directionality, decorators: [{
                    type: Optional
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL29uYm9hcmRpbmcvb25ib2FyZGluZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBS0wsTUFBTSxFQUNOLFVBQVUsRUFHVixRQUFRLEVBQ1QsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQWdCLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFNaEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7OztBQUk3RCxNQUFNLE9BQU8saUJBQWlCO0lBU3BCLE9BQU87UUFDYixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUVELFlBQ1UsSUFBd0IsRUFDeEIsTUFBc0I7SUFDOUIsaUVBQWlFO0lBQ3pELFFBQWtDLEVBQ2xDLE1BQWMsRUFDZCxRQUFrQixFQUNBLEdBQWMsRUFDaEMsU0FBNkIsRUFDakIsY0FBOEI7UUFSMUMsU0FBSSxHQUFKLElBQUksQ0FBb0I7UUFDeEIsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFFdEIsYUFBUSxHQUFSLFFBQVEsQ0FBMEI7UUFDbEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDQSxRQUFHLEdBQUgsR0FBRyxDQUFXO1FBQ2hDLGNBQVMsR0FBVCxTQUFTLENBQW9CO1FBQ2pCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQTNCNUMsV0FBTSxHQUFHLENBQUMsQ0FBQztRQUNYLGFBQVEsR0FBd0IsSUFBSSxDQUFDO1FBQ3JDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsU0FBSSxHQUE0QixJQUFJLENBQUM7SUF5QjFDLENBQUM7SUFFSSxNQUFNO1FBQ1osTUFBTSxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDbEgsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3pDLE1BQU0sUUFBUSxHQUFJLE9BQU8sQ0FBQyxRQUF1QyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvRSxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDM0IsTUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBZ0IsQ0FBQztRQUN2RSxJQUFJLEdBQUcsRUFBRTtZQUNQLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUN0QzthQUFNO1lBQ0wsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDaEM7UUFDRCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFzQixFQUFFLEVBQUU7WUFDdkUsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyxNQUFNO29CQUNULElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDWixNQUFNO2dCQUNSLEtBQUssTUFBTTtvQkFDVCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ1osTUFBTTtnQkFDUjtvQkFDRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ1osTUFBTTthQUNUO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sYUFBYTtRQUNuQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztTQUN0QjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVPLGFBQWEsQ0FBQyxNQUFlO1FBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxPQUFRLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3QyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTyxPQUFPO1FBQ2IsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzlDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN4QjtJQUNILENBQUM7SUFFTyxRQUFRLENBQUMsVUFBbUIsS0FBSztRQUN2QyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQU0sQ0FBQztRQUNqQyxNQUFNLElBQUksR0FBRztZQUNYLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLE1BQU0sRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ2hCLEtBQUssRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ2YsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7WUFDbEMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUNKLENBQUM7UUFDcEIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFFLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDO1FBQ3JGLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUNqSCxNQUFNLEtBQUssR0FBRztZQUNaLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDNUUsU0FBUyxDQUFDLEdBQUcsRUFBRTtnQkFDYixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU8sQ0FBQztnQkFDOUQsT0FBTyxPQUFPLEdBQUcsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztZQUNuRSxDQUFDLENBQUM7U0FDSCxDQUFDO1FBQ0YsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNaLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdEI7UUFFRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXpCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQzthQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBa0IsQ0FBYyxDQUFDO2FBQ3ZELFNBQVMsQ0FBQztZQUNULElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztZQUNyRCxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtTQUN6QixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILEtBQUssQ0FBQyxNQUF3QjtRQUM1QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRztZQUNaLEtBQUssRUFBRSxFQUFFO1lBQ1QsSUFBSSxFQUFFLElBQUk7WUFDVixZQUFZLEVBQUUsSUFBSTtZQUNsQixTQUFTLEVBQUUsS0FBSztZQUNoQixHQUFHLE1BQU07U0FDVixDQUFDO1FBQ0YsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDaEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQUk7UUFDRixJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFNLENBQUMsTUFBTSxFQUFFO1lBQ2pFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNaLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO1FBQ25CLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNkLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQUk7UUFDRixJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3hDLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO1FBQ25CLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNkLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQUk7UUFDRixJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztRQUNuQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQzs7OEdBbkxVLGlCQUFpQix3S0E2QmxCLFFBQVE7a0hBN0JQLGlCQUFpQjsyRkFBakIsaUJBQWlCO2tCQUQ3QixVQUFVOzswQkE4Qk4sTUFBTTsyQkFBQyxRQUFROzswQkFFZixRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBBcHBsaWNhdGlvblJlZixcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBDb21wb25lbnRSZWYsXG4gIEVtYmVkZGVkVmlld1JlZixcbiAgSW5qZWN0LFxuICBJbmplY3RhYmxlLFxuICBJbmplY3RvcixcbiAgT25EZXN0cm95LFxuICBPcHRpb25hbFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBvZiwgcGlwZSwgU3Vic2NyaXB0aW9uLCBkZWxheSwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IERlbG9uTG9jYWxlU2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbC9jb25maWcnO1xuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5pbXBvcnQgeyBPbmJvYXJkaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9vbmJvYXJkaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPbmJvYXJkaW5nQ29uZmlnLCBPbmJvYXJkaW5nSXRlbSwgT25ib2FyZGluZ09wVHlwZSB9IGZyb20gJy4vb25ib2FyZGluZy50eXBlcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPbmJvYXJkaW5nU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgY29tcFJlZiE6IENvbXBvbmVudFJlZjxPbmJvYXJkaW5nQ29tcG9uZW50PjtcbiAgcHJpdmF0ZSBvcCQhOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgY29uZmlnITogT25ib2FyZGluZ0NvbmZpZztcbiAgcHJpdmF0ZSBhY3RpdmUgPSAwO1xuICBwcml2YXRlIHJ1bm5pbmckOiBTdWJzY3JpcHRpb24gfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBfcnVubmluZyA9IGZhbHNlO1xuICBwcml2YXRlIHR5cGU6IE9uYm9hcmRpbmdPcFR5cGUgfCBudWxsID0gbnVsbDtcblxuICBwcml2YXRlIF9nZXREb2MoKTogRG9jdW1lbnQge1xuICAgIHJldHVybiB0aGlzLmRvYztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgd2hldGhlciBpdCBpcyBib290aW5nXG4gICAqXG4gICAqIOiOt+WPluaYr+WQpuato+WcqOW8leWvvOS4rVxuICAgKi9cbiAgZ2V0IHJ1bm5pbmcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3J1bm5pbmc7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGkxOG46IERlbG9uTG9jYWxlU2VydmljZSxcbiAgICBwcml2YXRlIGFwcFJlZjogQXBwbGljYXRpb25SZWYsXG4gICAgLy8gVE9ETzogVHJhY2tpbmcgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvNDUyNjNcbiAgICBwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogTnpTYWZlQW55LFxuICAgIHByaXZhdGUgY29uZmlnU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBkaXJlY3Rpb25hbGl0eTogRGlyZWN0aW9uYWxpdHlcbiAgKSB7fVxuXG4gIHByaXZhdGUgYXR0YWNoKCk6IHZvaWQge1xuICAgIGNvbnN0IGNvbXBSZWYgPSAodGhpcy5jb21wUmVmID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShPbmJvYXJkaW5nQ29tcG9uZW50KS5jcmVhdGUodGhpcy5pbmplY3RvcikpO1xuICAgIHRoaXMuYXBwUmVmLmF0dGFjaFZpZXcoY29tcFJlZi5ob3N0Vmlldyk7XG4gICAgY29uc3QgY29tcE5vZGUgPSAoY29tcFJlZi5ob3N0VmlldyBhcyBFbWJlZGRlZFZpZXdSZWY8TnpTYWZlQW55Pikucm9vdE5vZGVzWzBdO1xuICAgIGNvbnN0IGRvYyA9IHRoaXMuX2dldERvYygpO1xuICAgIGNvbnN0IGNkayA9IGRvYy5xdWVyeVNlbGVjdG9yKCcuY2RrLW92ZXJsYXktY29udGFpbmVyJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgaWYgKGNkaykge1xuICAgICAgZG9jLmJvZHkuaW5zZXJ0QmVmb3JlKGNvbXBOb2RlLCBjZGspO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2MuYm9keS5hcHBlbmRDaGlsZChjb21wTm9kZSk7XG4gICAgfVxuICAgIHRoaXMub3AkID0gdGhpcy5jb21wUmVmLmluc3RhbmNlLm9wLnN1YnNjcmliZSgodHlwZTogT25ib2FyZGluZ09wVHlwZSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ25leHQnOlxuICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdwcmV2JzpcbiAgICAgICAgICB0aGlzLnByZXYoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aGlzLmRvbmUoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgY2FuY2VsUnVubmluZygpOiB0aGlzIHtcbiAgICBpZiAodGhpcy5ydW5uaW5nJCkge1xuICAgICAgdGhpcy5ydW5uaW5nJC51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5ydW5uaW5nJCA9IG51bGw7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVSdW5uaW5nKHN0YXR1czogYm9vbGVhbik6IHRoaXMge1xuICAgIHRoaXMuX3J1bm5pbmcgPSBzdGF0dXM7XG4gICAgdGhpcy5jb21wUmVmIS5pbnN0YW5jZS51cGRhdGVSdW5uaW5nKHN0YXR1cyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcml2YXRlIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5jYW5jZWxSdW5uaW5nKCk7XG4gICAgaWYgKHRoaXMuY29tcFJlZikge1xuICAgICAgdGhpcy5hcHBSZWYuZGV0YWNoVmlldyh0aGlzLmNvbXBSZWYuaG9zdFZpZXcpO1xuICAgICAgdGhpcy5jb21wUmVmLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMub3AkLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzaG93SXRlbShpc1N0YXJ0OiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICBjb25zdCBpdGVtcyA9IHRoaXMuY29uZmlnLml0ZW1zITtcbiAgICBjb25zdCBpdGVtID0ge1xuICAgICAgcG9zaXRpb246ICdib3R0b21MZWZ0JyxcbiAgICAgIGJlZm9yZTogb2YodHJ1ZSksXG4gICAgICBhZnRlcjogb2YodHJ1ZSksXG4gICAgICAuLi50aGlzLmkxOG4uZ2V0RGF0YSgnb25ib2FyZGluZycpLFxuICAgICAgLi4uaXRlbXNbdGhpcy5hY3RpdmVdXG4gICAgfSBhcyBPbmJvYXJkaW5nSXRlbTtcbiAgICBjb25zdCBkaXIgPSB0aGlzLmNvbmZpZ1Nydi5nZXQoJ29uYm9hcmRpbmcnKSEuZGlyZWN0aW9uIHx8IHRoaXMuZGlyZWN0aW9uYWxpdHkudmFsdWU7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLmNvbXBSZWYuaW5zdGFuY2UsIHsgaXRlbSwgY29uZmlnOiB0aGlzLmNvbmZpZywgYWN0aXZlOiB0aGlzLmFjdGl2ZSwgbWF4OiBpdGVtcy5sZW5ndGgsIGRpciB9KTtcbiAgICBjb25zdCBwaXBlcyA9IFtcbiAgICAgIHN3aXRjaE1hcCgoKSA9PiAoaXRlbS51cmwgPyB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKGl0ZW0udXJsKSA6IG9mKHRydWUpKSksXG4gICAgICBzd2l0Y2hNYXAoKCkgPT4ge1xuICAgICAgICBjb25zdCBvYnMgPSB0aGlzLnR5cGUgPT09ICdwcmV2JyA/IGl0ZW0uYWZ0ZXIhIDogaXRlbS5iZWZvcmUhO1xuICAgICAgICByZXR1cm4gdHlwZW9mIG9icyA9PT0gJ251bWJlcicgPyBvZih0cnVlKS5waXBlKGRlbGF5KG9icykpIDogb2JzO1xuICAgICAgfSlcbiAgICBdO1xuICAgIGlmICghaXNTdGFydCkge1xuICAgICAgcGlwZXMucHVzaChkZWxheSgxKSk7XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVSdW5uaW5nKHRydWUpO1xuXG4gICAgdGhpcy5ydW5uaW5nJCA9IG9mKHRydWUpXG4gICAgICAucGlwZShwaXBlLmFwcGx5KHRoaXMsIHBpcGVzIGFzIE56U2FmZUFueSkgYXMgTnpTYWZlQW55KVxuICAgICAgLnN1YnNjcmliZSh7XG4gICAgICAgIG5leHQ6ICgpID0+IHRoaXMuY2FuY2VsUnVubmluZygpLnVwZGF0ZVJ1bm5pbmcoZmFsc2UpLFxuICAgICAgICBlcnJvcjogKCkgPT4gdGhpcy5kb25lKClcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0IGEgbmV3IHVzZXIgZ3VpZGFuY2VcbiAgICpcbiAgICog5byA5ZCv5paw55qE55So5oi35byV5a+85rWB56iLXG4gICAqL1xuICBzdGFydChjb25maWc6IE9uYm9hcmRpbmdDb25maWcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5ydW5uaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZGVzdHJveSgpO1xuICAgIHRoaXMuY29uZmlnID0ge1xuICAgICAgaXRlbXM6IFtdLFxuICAgICAgbWFzazogdHJ1ZSxcbiAgICAgIG1hc2tDbG9zYWJsZTogdHJ1ZSxcbiAgICAgIHNob3dUb3RhbDogZmFsc2UsXG4gICAgICAuLi5jb25maWdcbiAgICB9O1xuICAgIHRoaXMuYWN0aXZlID0gMDtcbiAgICB0aGlzLnR5cGUgPSBudWxsO1xuICAgIHRoaXMuYXR0YWNoKCk7XG4gICAgdGhpcy5zaG93SXRlbSh0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOZXh0XG4gICAqXG4gICAqIOS4i+S4gOatpVxuICAgKi9cbiAgbmV4dCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fcnVubmluZyB8fCB0aGlzLmFjdGl2ZSArIDEgPj0gdGhpcy5jb25maWcuaXRlbXMhLmxlbmd0aCkge1xuICAgICAgdGhpcy5kb25lKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudHlwZSA9ICduZXh0JztcbiAgICArK3RoaXMuYWN0aXZlO1xuICAgIHRoaXMuc2hvd0l0ZW0oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmV2XG4gICAqXG4gICAqIOS4iuS4gOatpVxuICAgKi9cbiAgcHJldigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fcnVubmluZyB8fCB0aGlzLmFjdGl2ZSAtIDEgPCAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudHlwZSA9ICdwcmV2JztcbiAgICAtLXRoaXMuYWN0aXZlO1xuICAgIHRoaXMuc2hvd0l0ZW0oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEb25lXG4gICAqXG4gICAqIOWujOaIkFxuICAgKi9cbiAgZG9uZSgpOiB2b2lkIHtcbiAgICB0aGlzLnR5cGUgPSAnZG9uZSc7XG4gICAgdGhpcy5kZXN0cm95KCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3koKTtcbiAgfVxufVxuIl19