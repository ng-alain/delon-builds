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
OnboardingService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: OnboardingService, deps: [{ token: i1.DelonLocaleService }, { token: i0.ApplicationRef }, { token: i0.ComponentFactoryResolver }, { token: i2.Router }, { token: i0.Injector }, { token: DOCUMENT }, { token: i3.AlainConfigService }, { token: i4.Directionality, optional: true }], target: i0.ɵɵFactoryTarget.Injectable });
OnboardingService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: OnboardingService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: OnboardingService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.DelonLocaleService }, { type: i0.ApplicationRef }, { type: i0.ComponentFactoryResolver }, { type: i2.Router }, { type: i0.Injector }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: i3.AlainConfigService }, { type: i4.Directionality, decorators: [{
                    type: Optional
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL29uYm9hcmRpbmcvb25ib2FyZGluZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBS0wsTUFBTSxFQUNOLFVBQVUsRUFHVixRQUFRLEVBQ1QsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQWdCLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFNaEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7OztBQUk3RCxNQUFNLE9BQU8saUJBQWlCO0lBc0I1QixZQUNVLElBQXdCLEVBQ3hCLE1BQXNCO0lBQzlCLGlFQUFpRTtJQUN6RCxRQUFrQyxFQUNsQyxNQUFjLEVBQ2QsUUFBa0IsRUFDQSxHQUFjLEVBQ2hDLFNBQTZCLEVBQ2pCLGNBQThCO1FBUjFDLFNBQUksR0FBSixJQUFJLENBQW9CO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBRXRCLGFBQVEsR0FBUixRQUFRLENBQTBCO1FBQ2xDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ0EsUUFBRyxHQUFILEdBQUcsQ0FBVztRQUNoQyxjQUFTLEdBQVQsU0FBUyxDQUFvQjtRQUNqQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUEzQjVDLFdBQU0sR0FBRyxDQUFDLENBQUM7UUFDWCxhQUFRLEdBQXdCLElBQUksQ0FBQztRQUNyQyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLFNBQUksR0FBNEIsSUFBSSxDQUFDO0lBeUIxQyxDQUFDO0lBdkJJLE9BQU87UUFDYixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQWNPLE1BQU07UUFDWixNQUFNLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNsSCxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekMsTUFBTSxRQUFRLEdBQUksT0FBTyxDQUFDLFFBQXVDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9FLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMzQixNQUFNLEdBQUcsR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDLHdCQUF3QixDQUFnQixDQUFDO1FBQ3ZFLElBQUksR0FBRyxFQUFFO1lBQ1AsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ3RDO2FBQU07WUFDTCxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNoQztRQUNELElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQXNCLEVBQUUsRUFBRTtZQUN2RSxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLE1BQU07b0JBQ1QsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNaLE1BQU07Z0JBQ1IsS0FBSyxNQUFNO29CQUNULElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDWixNQUFNO2dCQUNSO29CQUNFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDWixNQUFNO2FBQ1Q7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyxhQUFhO1FBQ25CLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQ3RCO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU8sYUFBYSxDQUFDLE1BQWU7UUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7UUFDdkIsSUFBSSxDQUFDLE9BQVEsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVPLE9BQU87UUFDYixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDOUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQztJQUVPLFFBQVEsQ0FBQyxVQUFtQixLQUFLO1FBQ3ZDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBTSxDQUFDO1FBQ2pDLE1BQU0sSUFBSSxHQUFHO1lBQ1gsUUFBUSxFQUFFLFlBQVk7WUFDdEIsTUFBTSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDaEIsS0FBSyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDZixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQztZQUNsQyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ0osQ0FBQztRQUNwQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUUsQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUM7UUFDckYsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ2pILE1BQU0sS0FBSyxHQUFHO1lBQ1osU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUM1RSxTQUFTLENBQUMsR0FBRyxFQUFFO2dCQUNiLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTyxDQUFDO2dCQUM5RCxPQUFPLE9BQU8sR0FBRyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQ25FLENBQUMsQ0FBQztTQUNILENBQUM7UUFDRixJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ1osS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN0QjtRQUVELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDO2FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFrQixDQUFjLENBQUM7YUFDdkQsU0FBUyxDQUFDO1lBQ1QsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO1lBQ3JELEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1NBQ3pCLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsS0FBSyxDQUFDLE1BQXdCO1FBQzVCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsTUFBTSxHQUFHO1lBQ1osS0FBSyxFQUFFLEVBQUU7WUFDVCxJQUFJLEVBQUUsSUFBSTtZQUNWLFlBQVksRUFBRSxJQUFJO1lBQ2xCLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLEdBQUcsTUFBTTtTQUNWLENBQUM7UUFDRixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBSTtRQUNGLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQU0sQ0FBQyxNQUFNLEVBQUU7WUFDakUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ1osT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7UUFDbkIsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ2QsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBSTtRQUNGLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDeEMsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7UUFDbkIsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ2QsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBSTtRQUNGLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO1FBQ25CLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDOzs4R0FuTFUsaUJBQWlCLHdLQTZCbEIsUUFBUTtrSEE3QlAsaUJBQWlCOzJGQUFqQixpQkFBaUI7a0JBRDdCLFVBQVU7OzBCQThCTixNQUFNOzJCQUFDLFFBQVE7OzBCQUVmLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEFwcGxpY2F0aW9uUmVmLFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIENvbXBvbmVudFJlZixcbiAgRW1iZWRkZWRWaWV3UmVmLFxuICBJbmplY3QsXG4gIEluamVjdGFibGUsXG4gIEluamVjdG9yLFxuICBPbkRlc3Ryb3ksXG4gIE9wdGlvbmFsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IG9mLCBwaXBlLCBTdWJzY3JpcHRpb24sIGRlbGF5LCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRGVsb25Mb2NhbGVTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IEFsYWluQ29uZmlnU2VydmljZSB9IGZyb20gJ0BkZWxvbi91dGlsL2NvbmZpZyc7XG5pbXBvcnQgdHlwZSB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbmltcG9ydCB7IE9uYm9hcmRpbmdDb21wb25lbnQgfSBmcm9tICcuL29uYm9hcmRpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IE9uYm9hcmRpbmdDb25maWcsIE9uYm9hcmRpbmdJdGVtLCBPbmJvYXJkaW5nT3BUeXBlIH0gZnJvbSAnLi9vbmJvYXJkaW5nLnR5cGVzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9uYm9hcmRpbmdTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBjb21wUmVmITogQ29tcG9uZW50UmVmPE9uYm9hcmRpbmdDb21wb25lbnQ+O1xuICBwcml2YXRlIG9wJCE6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBjb25maWchOiBPbmJvYXJkaW5nQ29uZmlnO1xuICBwcml2YXRlIGFjdGl2ZSA9IDA7XG4gIHByaXZhdGUgcnVubmluZyQ6IFN1YnNjcmlwdGlvbiB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIF9ydW5uaW5nID0gZmFsc2U7XG4gIHByaXZhdGUgdHlwZTogT25ib2FyZGluZ09wVHlwZSB8IG51bGwgPSBudWxsO1xuXG4gIHByaXZhdGUgX2dldERvYygpOiBEb2N1bWVudCB7XG4gICAgcmV0dXJuIHRoaXMuZG9jO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB3aGV0aGVyIGl0IGlzIGJvb3RpbmdcbiAgICpcbiAgICog6I635Y+W5piv5ZCm5q2j5Zyo5byV5a+85LitXG4gICAqL1xuICBnZXQgcnVubmluZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fcnVubmluZztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaTE4bjogRGVsb25Mb2NhbGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgYXBwUmVmOiBBcHBsaWNhdGlvblJlZixcbiAgICAvLyBUT0RPOiBUcmFja2luZyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy80NTI2M1xuICAgIHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBOelNhZmVBbnksXG4gICAgcHJpdmF0ZSBjb25maWdTcnY6IEFsYWluQ29uZmlnU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGRpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eVxuICApIHt9XG5cbiAgcHJpdmF0ZSBhdHRhY2goKTogdm9pZCB7XG4gICAgY29uc3QgY29tcFJlZiA9ICh0aGlzLmNvbXBSZWYgPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KE9uYm9hcmRpbmdDb21wb25lbnQpLmNyZWF0ZSh0aGlzLmluamVjdG9yKSk7XG4gICAgdGhpcy5hcHBSZWYuYXR0YWNoVmlldyhjb21wUmVmLmhvc3RWaWV3KTtcbiAgICBjb25zdCBjb21wTm9kZSA9IChjb21wUmVmLmhvc3RWaWV3IGFzIEVtYmVkZGVkVmlld1JlZjxOelNhZmVBbnk+KS5yb290Tm9kZXNbMF07XG4gICAgY29uc3QgZG9jID0gdGhpcy5fZ2V0RG9jKCk7XG4gICAgY29uc3QgY2RrID0gZG9jLnF1ZXJ5U2VsZWN0b3IoJy5jZGstb3ZlcmxheS1jb250YWluZXInKSBhcyBIVE1MRWxlbWVudDtcbiAgICBpZiAoY2RrKSB7XG4gICAgICBkb2MuYm9keS5pbnNlcnRCZWZvcmUoY29tcE5vZGUsIGNkayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvYy5ib2R5LmFwcGVuZENoaWxkKGNvbXBOb2RlKTtcbiAgICB9XG4gICAgdGhpcy5vcCQgPSB0aGlzLmNvbXBSZWYuaW5zdGFuY2Uub3Auc3Vic2NyaWJlKCh0eXBlOiBPbmJvYXJkaW5nT3BUeXBlKSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnbmV4dCc6XG4gICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3ByZXYnOlxuICAgICAgICAgIHRoaXMucHJldigpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRoaXMuZG9uZSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBjYW5jZWxSdW5uaW5nKCk6IHRoaXMge1xuICAgIGlmICh0aGlzLnJ1bm5pbmckKSB7XG4gICAgICB0aGlzLnJ1bm5pbmckLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLnJ1bm5pbmckID0gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVJ1bm5pbmcoc3RhdHVzOiBib29sZWFuKTogdGhpcyB7XG4gICAgdGhpcy5fcnVubmluZyA9IHN0YXR1cztcbiAgICB0aGlzLmNvbXBSZWYhLmluc3RhbmNlLnVwZGF0ZVJ1bm5pbmcoc3RhdHVzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByaXZhdGUgZGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmNhbmNlbFJ1bm5pbmcoKTtcbiAgICBpZiAodGhpcy5jb21wUmVmKSB7XG4gICAgICB0aGlzLmFwcFJlZi5kZXRhY2hWaWV3KHRoaXMuY29tcFJlZi5ob3N0Vmlldyk7XG4gICAgICB0aGlzLmNvbXBSZWYuZGVzdHJveSgpO1xuICAgICAgdGhpcy5vcCQudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNob3dJdGVtKGlzU3RhcnQ6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5jb25maWcuaXRlbXMhO1xuICAgIGNvbnN0IGl0ZW0gPSB7XG4gICAgICBwb3NpdGlvbjogJ2JvdHRvbUxlZnQnLFxuICAgICAgYmVmb3JlOiBvZih0cnVlKSxcbiAgICAgIGFmdGVyOiBvZih0cnVlKSxcbiAgICAgIC4uLnRoaXMuaTE4bi5nZXREYXRhKCdvbmJvYXJkaW5nJyksXG4gICAgICAuLi5pdGVtc1t0aGlzLmFjdGl2ZV1cbiAgICB9IGFzIE9uYm9hcmRpbmdJdGVtO1xuICAgIGNvbnN0IGRpciA9IHRoaXMuY29uZmlnU3J2LmdldCgnb25ib2FyZGluZycpIS5kaXJlY3Rpb24gfHwgdGhpcy5kaXJlY3Rpb25hbGl0eS52YWx1ZTtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMuY29tcFJlZi5pbnN0YW5jZSwgeyBpdGVtLCBjb25maWc6IHRoaXMuY29uZmlnLCBhY3RpdmU6IHRoaXMuYWN0aXZlLCBtYXg6IGl0ZW1zLmxlbmd0aCwgZGlyIH0pO1xuICAgIGNvbnN0IHBpcGVzID0gW1xuICAgICAgc3dpdGNoTWFwKCgpID0+IChpdGVtLnVybCA/IHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoaXRlbS51cmwpIDogb2YodHJ1ZSkpKSxcbiAgICAgIHN3aXRjaE1hcCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IG9icyA9IHRoaXMudHlwZSA9PT0gJ3ByZXYnID8gaXRlbS5hZnRlciEgOiBpdGVtLmJlZm9yZSE7XG4gICAgICAgIHJldHVybiB0eXBlb2Ygb2JzID09PSAnbnVtYmVyJyA/IG9mKHRydWUpLnBpcGUoZGVsYXkob2JzKSkgOiBvYnM7XG4gICAgICB9KVxuICAgIF07XG4gICAgaWYgKCFpc1N0YXJ0KSB7XG4gICAgICBwaXBlcy5wdXNoKGRlbGF5KDEpKTtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZVJ1bm5pbmcodHJ1ZSk7XG5cbiAgICB0aGlzLnJ1bm5pbmckID0gb2YodHJ1ZSlcbiAgICAgIC5waXBlKHBpcGUuYXBwbHkodGhpcywgcGlwZXMgYXMgTnpTYWZlQW55KSBhcyBOelNhZmVBbnkpXG4gICAgICAuc3Vic2NyaWJlKHtcbiAgICAgICAgbmV4dDogKCkgPT4gdGhpcy5jYW5jZWxSdW5uaW5nKCkudXBkYXRlUnVubmluZyhmYWxzZSksXG4gICAgICAgIGVycm9yOiAoKSA9PiB0aGlzLmRvbmUoKVxuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU3RhcnQgYSBuZXcgdXNlciBndWlkYW5jZVxuICAgKlxuICAgKiDlvIDlkK/mlrDnmoTnlKjmiLflvJXlr7zmtYHnqItcbiAgICovXG4gIHN0YXJ0KGNvbmZpZzogT25ib2FyZGluZ0NvbmZpZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLnJ1bm5pbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5kZXN0cm95KCk7XG4gICAgdGhpcy5jb25maWcgPSB7XG4gICAgICBpdGVtczogW10sXG4gICAgICBtYXNrOiB0cnVlLFxuICAgICAgbWFza0Nsb3NhYmxlOiB0cnVlLFxuICAgICAgc2hvd1RvdGFsOiBmYWxzZSxcbiAgICAgIC4uLmNvbmZpZ1xuICAgIH07XG4gICAgdGhpcy5hY3RpdmUgPSAwO1xuICAgIHRoaXMudHlwZSA9IG51bGw7XG4gICAgdGhpcy5hdHRhY2goKTtcbiAgICB0aGlzLnNob3dJdGVtKHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIE5leHRcbiAgICpcbiAgICog5LiL5LiA5q2lXG4gICAqL1xuICBuZXh0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9ydW5uaW5nIHx8IHRoaXMuYWN0aXZlICsgMSA+PSB0aGlzLmNvbmZpZy5pdGVtcyEubGVuZ3RoKSB7XG4gICAgICB0aGlzLmRvbmUoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy50eXBlID0gJ25leHQnO1xuICAgICsrdGhpcy5hY3RpdmU7XG4gICAgdGhpcy5zaG93SXRlbSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFByZXZcbiAgICpcbiAgICog5LiK5LiA5q2lXG4gICAqL1xuICBwcmV2KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9ydW5uaW5nIHx8IHRoaXMuYWN0aXZlIC0gMSA8IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy50eXBlID0gJ3ByZXYnO1xuICAgIC0tdGhpcy5hY3RpdmU7XG4gICAgdGhpcy5zaG93SXRlbSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIERvbmVcbiAgICpcbiAgICog5a6M5oiQXG4gICAqL1xuICBkb25lKCk6IHZvaWQge1xuICAgIHRoaXMudHlwZSA9ICdkb25lJztcbiAgICB0aGlzLmRlc3Ryb3koKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSgpO1xuICB9XG59XG4iXX0=