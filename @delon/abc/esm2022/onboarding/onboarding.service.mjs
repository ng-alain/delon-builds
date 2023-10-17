import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Optional, createComponent } from '@angular/core';
import { of, pipe, delay, switchMap } from 'rxjs';
import { OnboardingComponent } from './onboarding.component';
import { ONBOARDING_STORE_TOKEN } from './onboarding.storage';
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
    constructor(i18n, appRef, router, doc, configSrv, keyStoreSrv, directionality) {
        this.i18n = i18n;
        this.appRef = appRef;
        this.router = router;
        this.doc = doc;
        this.configSrv = configSrv;
        this.keyStoreSrv = keyStoreSrv;
        this.directionality = directionality;
        this.active = 0;
        this.running$ = null;
        this._running = false;
        this.type = null;
    }
    attach() {
        const compRef = createComponent(OnboardingComponent, {
            environmentInjector: this.appRef.injector
        });
        this.compRef = compRef;
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
        const storeKey = this.config?.key;
        if (storeKey != null) {
            this.keyStoreSrv.set(storeKey, this.config?.keyVersion);
        }
        this.cancelRunning();
        if (this.compRef) {
            this.appRef.detachView(this.compRef.hostView);
            this.compRef.destroy();
            this.op$.unsubscribe();
        }
    }
    showItem(isStart = false) {
        const items = this.config?.items;
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
        const cog = {
            keyVersion: '',
            items: [],
            mask: true,
            maskClosable: true,
            showTotal: false,
            ...config
        };
        const storeKey = cog?.key;
        if (storeKey != null && this.keyStoreSrv.get(storeKey) === cog.keyVersion) {
            return;
        }
        if (this.running) {
            return;
        }
        this.destroy();
        this.config = cog;
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.9", ngImport: i0, type: OnboardingService, deps: [{ token: i1.DelonLocaleService }, { token: i0.ApplicationRef }, { token: i2.Router }, { token: DOCUMENT }, { token: i3.AlainConfigService }, { token: ONBOARDING_STORE_TOKEN }, { token: i4.Directionality, optional: true }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.9", ngImport: i0, type: OnboardingService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.9", ngImport: i0, type: OnboardingService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.DelonLocaleService }, { type: i0.ApplicationRef }, { type: i2.Router }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: i3.AlainConfigService }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [ONBOARDING_STORE_TOKEN]
                }] }, { type: i4.Directionality, decorators: [{
                    type: Optional
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL29uYm9hcmRpbmcvb25ib2FyZGluZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBSUwsTUFBTSxFQUNOLFVBQVUsRUFFVixRQUFRLEVBQ1IsZUFBZSxFQUNoQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBZ0IsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQU1oRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsc0JBQXNCLEVBQXNCLE1BQU0sc0JBQXNCLENBQUM7Ozs7OztBQUlsRixNQUFNLE9BQU8saUJBQWlCO0lBU3BCLE9BQU87UUFDYixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUVELFlBQ1UsSUFBd0IsRUFDeEIsTUFBc0IsRUFDdEIsTUFBYyxFQUNJLEdBQWMsRUFDaEMsU0FBNkIsRUFDRyxXQUErQixFQUNuRCxjQUE4QjtRQU4xQyxTQUFJLEdBQUosSUFBSSxDQUFvQjtRQUN4QixXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUN0QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ0ksUUFBRyxHQUFILEdBQUcsQ0FBVztRQUNoQyxjQUFTLEdBQVQsU0FBUyxDQUFvQjtRQUNHLGdCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQUNuRCxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUF6QjVDLFdBQU0sR0FBRyxDQUFDLENBQUM7UUFDWCxhQUFRLEdBQXdCLElBQUksQ0FBQztRQUNyQyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLFNBQUksR0FBNEIsSUFBSSxDQUFDO0lBdUIxQyxDQUFDO0lBRUksTUFBTTtRQUNaLE1BQU0sT0FBTyxHQUFHLGVBQWUsQ0FBQyxtQkFBbUIsRUFBRTtZQUNuRCxtQkFBbUIsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVE7U0FDMUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3pDLE1BQU0sUUFBUSxHQUFJLE9BQU8sQ0FBQyxRQUF1QyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvRSxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDM0IsTUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBZ0IsQ0FBQztRQUN2RSxJQUFJLEdBQUcsRUFBRTtZQUNQLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUN0QzthQUFNO1lBQ0wsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDaEM7UUFDRCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFzQixFQUFFLEVBQUU7WUFDdkUsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyxNQUFNO29CQUNULElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDWixNQUFNO2dCQUNSLEtBQUssTUFBTTtvQkFDVCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ1osTUFBTTtnQkFDUjtvQkFDRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ1osTUFBTTthQUNUO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sYUFBYTtRQUNuQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztTQUN0QjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVPLGFBQWEsQ0FBQyxNQUFlO1FBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxPQUFRLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3QyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTyxPQUFPO1FBQ2IsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUM7UUFDbEMsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1NBQ3pEO1FBQ0QsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzlDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN4QjtJQUNILENBQUM7SUFFTyxRQUFRLENBQUMsVUFBbUIsS0FBSztRQUN2QyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQU0sQ0FBQztRQUNsQyxNQUFNLElBQUksR0FBRztZQUNYLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLE1BQU0sRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ2hCLEtBQUssRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ2YsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7WUFDbEMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUNKLENBQUM7UUFDcEIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFFLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDO1FBQ3JGLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUNqSCxNQUFNLEtBQUssR0FBRztZQUNaLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDNUUsU0FBUyxDQUFDLEdBQUcsRUFBRTtnQkFDYixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU8sQ0FBQztnQkFDOUQsT0FBTyxPQUFPLEdBQUcsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztZQUNuRSxDQUFDLENBQUM7U0FDSCxDQUFDO1FBQ0YsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNaLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdEI7UUFFRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXpCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQzthQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBa0IsQ0FBYyxDQUFDO2FBQ3ZELFNBQVMsQ0FBQztZQUNULElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztZQUNyRCxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtTQUN6QixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILEtBQUssQ0FBQyxNQUF3QjtRQUM1QixNQUFNLEdBQUcsR0FBcUI7WUFDNUIsVUFBVSxFQUFFLEVBQUU7WUFDZCxLQUFLLEVBQUUsRUFBRTtZQUNULElBQUksRUFBRSxJQUFJO1lBQ1YsWUFBWSxFQUFFLElBQUk7WUFDbEIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsR0FBRyxNQUFNO1NBQ1YsQ0FBQztRQUNGLE1BQU0sUUFBUSxHQUFHLEdBQUcsRUFBRSxHQUFHLENBQUM7UUFDMUIsSUFBSSxRQUFRLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxVQUFVLEVBQUU7WUFDekUsT0FBTztTQUNSO1FBQ0QsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNkLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFJO1FBQ0YsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFPLENBQUMsS0FBTSxDQUFDLE1BQU0sRUFBRTtZQUNsRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDWixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztRQUNuQixFQUFFLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDZCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFJO1FBQ0YsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN4QyxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztRQUNuQixFQUFFLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDZCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFJO1FBQ0YsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7UUFDbkIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7OEdBOUxVLGlCQUFpQix3R0EwQmxCLFFBQVEsK0NBRVIsc0JBQXNCO2tIQTVCckIsaUJBQWlCOzsyRkFBakIsaUJBQWlCO2tCQUQ3QixVQUFVOzswQkEyQk4sTUFBTTsyQkFBQyxRQUFROzswQkFFZixNQUFNOzJCQUFDLHNCQUFzQjs7MEJBQzdCLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEFwcGxpY2F0aW9uUmVmLFxuICBDb21wb25lbnRSZWYsXG4gIEVtYmVkZGVkVmlld1JlZixcbiAgSW5qZWN0LFxuICBJbmplY3RhYmxlLFxuICBPbkRlc3Ryb3ksXG4gIE9wdGlvbmFsLFxuICBjcmVhdGVDb21wb25lbnRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgb2YsIHBpcGUsIFN1YnNjcmlwdGlvbiwgZGVsYXksIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBEZWxvbkxvY2FsZVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwvY29uZmlnJztcbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuaW1wb3J0IHsgT25ib2FyZGluZ0NvbXBvbmVudCB9IGZyb20gJy4vb25ib2FyZGluZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgT05CT0FSRElOR19TVE9SRV9UT0tFTiwgT25Cb2FyZGluZ0tleVN0b3JlIH0gZnJvbSAnLi9vbmJvYXJkaW5nLnN0b3JhZ2UnO1xuaW1wb3J0IHsgT25ib2FyZGluZ0NvbmZpZywgT25ib2FyZGluZ0l0ZW0sIE9uYm9hcmRpbmdPcFR5cGUgfSBmcm9tICcuL29uYm9hcmRpbmcudHlwZXMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT25ib2FyZGluZ1NlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGNvbXBSZWYhOiBDb21wb25lbnRSZWY8T25ib2FyZGluZ0NvbXBvbmVudD47XG4gIHByaXZhdGUgb3AkITogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIGNvbmZpZz86IE9uYm9hcmRpbmdDb25maWc7XG4gIHByaXZhdGUgYWN0aXZlID0gMDtcbiAgcHJpdmF0ZSBydW5uaW5nJDogU3Vic2NyaXB0aW9uIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgX3J1bm5pbmcgPSBmYWxzZTtcbiAgcHJpdmF0ZSB0eXBlOiBPbmJvYXJkaW5nT3BUeXBlIHwgbnVsbCA9IG51bGw7XG5cbiAgcHJpdmF0ZSBfZ2V0RG9jKCk6IERvY3VtZW50IHtcbiAgICByZXR1cm4gdGhpcy5kb2M7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHdoZXRoZXIgaXQgaXMgYm9vdGluZ1xuICAgKlxuICAgKiDojrflj5bmmK/lkKbmraPlnKjlvJXlr7zkuK1cbiAgICovXG4gIGdldCBydW5uaW5nKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9ydW5uaW5nO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBpMThuOiBEZWxvbkxvY2FsZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBhcHBSZWY6IEFwcGxpY2F0aW9uUmVmLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IE56U2FmZUFueSxcbiAgICBwcml2YXRlIGNvbmZpZ1NydjogQWxhaW5Db25maWdTZXJ2aWNlLFxuICAgIEBJbmplY3QoT05CT0FSRElOR19TVE9SRV9UT0tFTikgcHJpdmF0ZSBrZXlTdG9yZVNydjogT25Cb2FyZGluZ0tleVN0b3JlLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZGlyZWN0aW9uYWxpdHk6IERpcmVjdGlvbmFsaXR5XG4gICkge31cblxuICBwcml2YXRlIGF0dGFjaCgpOiB2b2lkIHtcbiAgICBjb25zdCBjb21wUmVmID0gY3JlYXRlQ29tcG9uZW50KE9uYm9hcmRpbmdDb21wb25lbnQsIHtcbiAgICAgIGVudmlyb25tZW50SW5qZWN0b3I6IHRoaXMuYXBwUmVmLmluamVjdG9yXG4gICAgfSk7XG4gICAgdGhpcy5jb21wUmVmID0gY29tcFJlZjtcbiAgICB0aGlzLmFwcFJlZi5hdHRhY2hWaWV3KGNvbXBSZWYuaG9zdFZpZXcpO1xuICAgIGNvbnN0IGNvbXBOb2RlID0gKGNvbXBSZWYuaG9zdFZpZXcgYXMgRW1iZWRkZWRWaWV3UmVmPE56U2FmZUFueT4pLnJvb3ROb2Rlc1swXTtcbiAgICBjb25zdCBkb2MgPSB0aGlzLl9nZXREb2MoKTtcbiAgICBjb25zdCBjZGsgPSBkb2MucXVlcnlTZWxlY3RvcignLmNkay1vdmVybGF5LWNvbnRhaW5lcicpIGFzIEhUTUxFbGVtZW50O1xuICAgIGlmIChjZGspIHtcbiAgICAgIGRvYy5ib2R5Lmluc2VydEJlZm9yZShjb21wTm9kZSwgY2RrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jLmJvZHkuYXBwZW5kQ2hpbGQoY29tcE5vZGUpO1xuICAgIH1cbiAgICB0aGlzLm9wJCA9IHRoaXMuY29tcFJlZi5pbnN0YW5jZS5vcC5zdWJzY3JpYmUoKHR5cGU6IE9uYm9hcmRpbmdPcFR5cGUpID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICduZXh0JzpcbiAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncHJldic6XG4gICAgICAgICAgdGhpcy5wcmV2KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhpcy5kb25lKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNhbmNlbFJ1bm5pbmcoKTogdGhpcyB7XG4gICAgaWYgKHRoaXMucnVubmluZyQpIHtcbiAgICAgIHRoaXMucnVubmluZyQudW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMucnVubmluZyQgPSBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlUnVubmluZyhzdGF0dXM6IGJvb2xlYW4pOiB0aGlzIHtcbiAgICB0aGlzLl9ydW5uaW5nID0gc3RhdHVzO1xuICAgIHRoaXMuY29tcFJlZiEuaW5zdGFuY2UudXBkYXRlUnVubmluZyhzdGF0dXMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJpdmF0ZSBkZXN0cm95KCk6IHZvaWQge1xuICAgIGNvbnN0IHN0b3JlS2V5ID0gdGhpcy5jb25maWc/LmtleTtcbiAgICBpZiAoc3RvcmVLZXkgIT0gbnVsbCkge1xuICAgICAgdGhpcy5rZXlTdG9yZVNydi5zZXQoc3RvcmVLZXksIHRoaXMuY29uZmlnPy5rZXlWZXJzaW9uKTtcbiAgICB9XG4gICAgdGhpcy5jYW5jZWxSdW5uaW5nKCk7XG4gICAgaWYgKHRoaXMuY29tcFJlZikge1xuICAgICAgdGhpcy5hcHBSZWYuZGV0YWNoVmlldyh0aGlzLmNvbXBSZWYuaG9zdFZpZXcpO1xuICAgICAgdGhpcy5jb21wUmVmLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMub3AkLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzaG93SXRlbShpc1N0YXJ0OiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICBjb25zdCBpdGVtcyA9IHRoaXMuY29uZmlnPy5pdGVtcyE7XG4gICAgY29uc3QgaXRlbSA9IHtcbiAgICAgIHBvc2l0aW9uOiAnYm90dG9tTGVmdCcsXG4gICAgICBiZWZvcmU6IG9mKHRydWUpLFxuICAgICAgYWZ0ZXI6IG9mKHRydWUpLFxuICAgICAgLi4udGhpcy5pMThuLmdldERhdGEoJ29uYm9hcmRpbmcnKSxcbiAgICAgIC4uLml0ZW1zW3RoaXMuYWN0aXZlXVxuICAgIH0gYXMgT25ib2FyZGluZ0l0ZW07XG4gICAgY29uc3QgZGlyID0gdGhpcy5jb25maWdTcnYuZ2V0KCdvbmJvYXJkaW5nJykhLmRpcmVjdGlvbiB8fCB0aGlzLmRpcmVjdGlvbmFsaXR5LnZhbHVlO1xuICAgIE9iamVjdC5hc3NpZ24odGhpcy5jb21wUmVmLmluc3RhbmNlLCB7IGl0ZW0sIGNvbmZpZzogdGhpcy5jb25maWcsIGFjdGl2ZTogdGhpcy5hY3RpdmUsIG1heDogaXRlbXMubGVuZ3RoLCBkaXIgfSk7XG4gICAgY29uc3QgcGlwZXMgPSBbXG4gICAgICBzd2l0Y2hNYXAoKCkgPT4gKGl0ZW0udXJsID8gdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChpdGVtLnVybCkgOiBvZih0cnVlKSkpLFxuICAgICAgc3dpdGNoTWFwKCgpID0+IHtcbiAgICAgICAgY29uc3Qgb2JzID0gdGhpcy50eXBlID09PSAncHJldicgPyBpdGVtLmFmdGVyISA6IGl0ZW0uYmVmb3JlITtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBvYnMgPT09ICdudW1iZXInID8gb2YodHJ1ZSkucGlwZShkZWxheShvYnMpKSA6IG9icztcbiAgICAgIH0pXG4gICAgXTtcbiAgICBpZiAoIWlzU3RhcnQpIHtcbiAgICAgIHBpcGVzLnB1c2goZGVsYXkoMSkpO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlUnVubmluZyh0cnVlKTtcblxuICAgIHRoaXMucnVubmluZyQgPSBvZih0cnVlKVxuICAgICAgLnBpcGUocGlwZS5hcHBseSh0aGlzLCBwaXBlcyBhcyBOelNhZmVBbnkpIGFzIE56U2FmZUFueSlcbiAgICAgIC5zdWJzY3JpYmUoe1xuICAgICAgICBuZXh0OiAoKSA9PiB0aGlzLmNhbmNlbFJ1bm5pbmcoKS51cGRhdGVSdW5uaW5nKGZhbHNlKSxcbiAgICAgICAgZXJyb3I6ICgpID0+IHRoaXMuZG9uZSgpXG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydCBhIG5ldyB1c2VyIGd1aWRhbmNlXG4gICAqXG4gICAqIOW8gOWQr+aWsOeahOeUqOaIt+W8leWvvOa1geeoi1xuICAgKi9cbiAgc3RhcnQoY29uZmlnOiBPbmJvYXJkaW5nQ29uZmlnKTogdm9pZCB7XG4gICAgY29uc3QgY29nOiBPbmJvYXJkaW5nQ29uZmlnID0ge1xuICAgICAga2V5VmVyc2lvbjogJycsXG4gICAgICBpdGVtczogW10sXG4gICAgICBtYXNrOiB0cnVlLFxuICAgICAgbWFza0Nsb3NhYmxlOiB0cnVlLFxuICAgICAgc2hvd1RvdGFsOiBmYWxzZSxcbiAgICAgIC4uLmNvbmZpZ1xuICAgIH07XG4gICAgY29uc3Qgc3RvcmVLZXkgPSBjb2c/LmtleTtcbiAgICBpZiAoc3RvcmVLZXkgIT0gbnVsbCAmJiB0aGlzLmtleVN0b3JlU3J2LmdldChzdG9yZUtleSkgPT09IGNvZy5rZXlWZXJzaW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLnJ1bm5pbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5kZXN0cm95KCk7XG4gICAgdGhpcy5jb25maWcgPSBjb2c7XG4gICAgdGhpcy5hY3RpdmUgPSAwO1xuICAgIHRoaXMudHlwZSA9IG51bGw7XG4gICAgdGhpcy5hdHRhY2goKTtcbiAgICB0aGlzLnNob3dJdGVtKHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIE5leHRcbiAgICpcbiAgICog5LiL5LiA5q2lXG4gICAqL1xuICBuZXh0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9ydW5uaW5nIHx8IHRoaXMuYWN0aXZlICsgMSA+PSB0aGlzLmNvbmZpZyEuaXRlbXMhLmxlbmd0aCkge1xuICAgICAgdGhpcy5kb25lKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudHlwZSA9ICduZXh0JztcbiAgICArK3RoaXMuYWN0aXZlO1xuICAgIHRoaXMuc2hvd0l0ZW0oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmV2XG4gICAqXG4gICAqIOS4iuS4gOatpVxuICAgKi9cbiAgcHJldigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fcnVubmluZyB8fCB0aGlzLmFjdGl2ZSAtIDEgPCAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudHlwZSA9ICdwcmV2JztcbiAgICAtLXRoaXMuYWN0aXZlO1xuICAgIHRoaXMuc2hvd0l0ZW0oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEb25lXG4gICAqXG4gICAqIOWujOaIkFxuICAgKi9cbiAgZG9uZSgpOiB2b2lkIHtcbiAgICB0aGlzLnR5cGUgPSAnZG9uZSc7XG4gICAgdGhpcy5kZXN0cm95KCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3koKTtcbiAgfVxufVxuIl19