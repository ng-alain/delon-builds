import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Optional } from '@angular/core';
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
OnboardingService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: OnboardingService, deps: [{ token: i1.DelonLocaleService }, { token: i0.ApplicationRef }, { token: i0.ComponentFactoryResolver }, { token: i2.Router }, { token: i0.Injector }, { token: DOCUMENT }, { token: i3.AlainConfigService }, { token: i4.Directionality, optional: true }], target: i0.ɵɵFactoryTarget.Injectable });
OnboardingService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: OnboardingService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: OnboardingService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: i1.DelonLocaleService }, { type: i0.ApplicationRef }, { type: i0.ComponentFactoryResolver }, { type: i2.Router }, { type: i0.Injector }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: i3.AlainConfigService }, { type: i4.Directionality, decorators: [{
                    type: Optional
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL29uYm9hcmRpbmcvb25ib2FyZGluZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBS0wsTUFBTSxFQUNOLFVBQVUsRUFHVixRQUFRLEVBQ1QsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFNbEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7OztBQUk3RCxNQUFNLE9BQU8saUJBQWlCO0lBc0I1QixZQUNVLElBQXdCLEVBQ3hCLE1BQXNCLEVBQ3RCLFFBQWtDLEVBQ2xDLE1BQWMsRUFDZCxRQUFrQixFQUNBLEdBQWMsRUFDaEMsU0FBNkIsRUFDakIsY0FBOEI7UUFQMUMsU0FBSSxHQUFKLElBQUksQ0FBb0I7UUFDeEIsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFDdEIsYUFBUSxHQUFSLFFBQVEsQ0FBMEI7UUFDbEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDQSxRQUFHLEdBQUgsR0FBRyxDQUFXO1FBQ2hDLGNBQVMsR0FBVCxTQUFTLENBQW9CO1FBQ2pCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQTFCNUMsV0FBTSxHQUFHLENBQUMsQ0FBQztRQUNYLGFBQVEsR0FBd0IsSUFBSSxDQUFDO1FBQ3JDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsU0FBSSxHQUE0QixJQUFJLENBQUM7SUF3QjFDLENBQUM7SUF0QkksT0FBTztRQUNiLE9BQU8sSUFBSSxDQUFDLEdB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QUVEOzs7O09BSUc7SUFDSCxJQUFJO1FBQ0YsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN4QyxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztRQUNuQixFQUFFLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDZCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFJO1FBQ0YsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7UUFDbkIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7OzhHQWxMVSxpQkFBaUIsd0tBNEJsQixRQUFRO2tIQTVCUCxpQkFBaUIsY0FESixNQUFNOzJGQUNuQixpQkFBaUI7a0JBRDdCLFVBQVU7bUJBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzswQkE2QjdCLE1BQU07MkJBQUMsUUFBUTs7MEJBRWYsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGlvbmFsaXR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQXBwbGljYXRpb25SZWYsXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgQ29tcG9uZW50UmVmLFxuICBFbWJlZGRlZFZpZXdSZWYsXG4gIEluamVjdCxcbiAgSW5qZWN0YWJsZSxcbiAgSW5qZWN0b3IsXG4gIE9uRGVzdHJveSxcbiAgT3B0aW9uYWxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgb2YsIHBpcGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVsYXksIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRGVsb25Mb2NhbGVTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IEFsYWluQ29uZmlnU2VydmljZSB9IGZyb20gJ0BkZWxvbi91dGlsL2NvbmZpZyc7XG5pbXBvcnQgdHlwZSB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbmltcG9ydCB7IE9uYm9hcmRpbmdDb21wb25lbnQgfSBmcm9tICcuL29uYm9hcmRpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IE9uYm9hcmRpbmdDb25maWcsIE9uYm9hcmRpbmdJdGVtLCBPbmJvYXJkaW5nT3BUeXBlIH0gZnJvbSAnLi9vbmJvYXJkaW5nLnR5cGVzJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBPbmJvYXJkaW5nU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgY29tcFJlZiE6IENvbXBvbmVudFJlZjxPbmJvYXJkaW5nQ29tcG9uZW50PjtcbiAgcHJpdmF0ZSBvcCQhOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgY29uZmlnITogT25ib2FyZGluZ0NvbmZpZztcbiAgcHJpdmF0ZSBhY3RpdmUgPSAwO1xuICBwcml2YXRlIHJ1bm5pbmckOiBTdWJzY3JpcHRpb24gfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBfcnVubmluZyA9IGZhbHNlO1xuICBwcml2YXRlIHR5cGU6IE9uYm9hcmRpbmdPcFR5cGUgfCBudWxsID0gbnVsbDtcblxuICBwcml2YXRlIF9nZXREb2MoKTogRG9jdW1lbnQge1xuICAgIHJldHVybiB0aGlzLmRvYztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgd2hldGhlciBpdCBpcyBib290aW5nXG4gICAqXG4gICAqIOiOt+WPluaYr+WQpuato+WcqOW8leWvvOS4rVxuICAgKi9cbiAgZ2V0IHJ1bm5pbmcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3J1bm5pbmc7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGkxOG46IERlbG9uTG9jYWxlU2VydmljZSxcbiAgICBwcml2YXRlIGFwcFJlZjogQXBwbGljYXRpb25SZWYsXG4gICAgcHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IE56U2FmZUFueSxcbiAgICBwcml2YXRlIGNvbmZpZ1NydjogQWxhaW5Db25maWdTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZGlyZWN0aW9uYWxpdHk6IERpcmVjdGlvbmFsaXR5XG4gICkge31cblxuICBwcml2YXRlIGF0dGFjaCgpOiB2b2lkIHtcbiAgICBjb25zdCBjb21wUmVmID0gKHRoaXMuY29tcFJlZiA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoT25ib2FyZGluZ0NvbXBvbmVudCkuY3JlYXRlKHRoaXMuaW5qZWN0b3IpKTtcbiAgICB0aGlzLmFwcFJlZi5hdHRhY2hWaWV3KGNvbXBSZWYuaG9zdFZpZXcpO1xuICAgIGNvbnN0IGNvbXBOb2RlID0gKGNvbXBSZWYuaG9zdFZpZXcgYXMgRW1iZWRkZWRWaWV3UmVmPE56U2FmZUFueT4pLnJvb3ROb2Rlc1swXTtcbiAgICBjb25zdCBkb2MgPSB0aGlzLl9nZXREb2MoKTtcbiAgICBjb25zdCBjZGsgPSBkb2MucXVlcnlTZWxlY3RvcignLmNkay1vdmVybGF5LWNvbnRhaW5lcicpIGFzIEhUTUxFbGVtZW50O1xuICAgIGlmIChjZGspIHtcbiAgICAgIGRvYy5ib2R5Lmluc2VydEJlZm9yZShjb21wTm9kZSwgY2RrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jLmJvZHkuYXBwZW5kQ2hpbGQoY29tcE5vZGUpO1xuICAgIH1cbiAgICB0aGlzLm9wJCA9IHRoaXMuY29tcFJlZi5pbnN0YW5jZS5vcC5zdWJzY3JpYmUoKHR5cGU6IE9uYm9hcmRpbmdPcFR5cGUpID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICduZXh0JzpcbiAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncHJldic6XG4gICAgICAgICAgdGhpcy5wcmV2KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhpcy5kb25lKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNhbmNlbFJ1bm5pbmcoKTogdGhpcyB7XG4gICAgaWYgKHRoaXMucnVubmluZyQpIHtcbiAgICAgIHRoaXMucnVubmluZyQudW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMucnVubmluZyQgPSBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlUnVubmluZyhzdGF0dXM6IGJvb2xlYW4pOiB0aGlzIHtcbiAgICB0aGlzLl9ydW5uaW5nID0gc3RhdHVzO1xuICAgIHRoaXMuY29tcFJlZiEuaW5zdGFuY2UudXBkYXRlUnVubmluZyhzdGF0dXMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJpdmF0ZSBkZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuY2FuY2VsUnVubmluZygpO1xuICAgIGlmICh0aGlzLmNvbXBSZWYpIHtcbiAgICAgIHRoaXMuYXBwUmVmLmRldGFjaFZpZXcodGhpcy5jb21wUmVmLmhvc3RWaWV3KTtcbiAgICAgIHRoaXMuY29tcFJlZi5kZXN0cm95KCk7XG4gICAgICB0aGlzLm9wJC51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2hvd0l0ZW0oaXNTdGFydDogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLmNvbmZpZy5pdGVtcyE7XG4gICAgY29uc3QgaXRlbSA9IHtcbiAgICAgIHBvc2l0aW9uOiAnYm90dG9tTGVmdCcsXG4gICAgICBiZWZvcmU6IG9mKHRydWUpLFxuICAgICAgYWZ0ZXI6IG9mKHRydWUpLFxuICAgICAgLi4udGhpcy5pMThuLmdldERhdGEoJ29uYm9hcmRpbmcnKSxcbiAgICAgIC4uLml0ZW1zW3RoaXMuYWN0aXZlXVxuICAgIH0gYXMgT25ib2FyZGluZ0l0ZW07XG4gICAgY29uc3QgZGlyID0gdGhpcy5jb25maWdTcnYuZ2V0KCdvbmJvYXJkaW5nJykhLmRpcmVjdGlvbiB8fCB0aGlzLmRpcmVjdGlvbmFsaXR5LnZhbHVlO1xuICAgIE9iamVjdC5hc3NpZ24odGhpcy5jb21wUmVmLmluc3RhbmNlLCB7IGl0ZW0sIGNvbmZpZzogdGhpcy5jb25maWcsIGFjdGl2ZTogdGhpcy5hY3RpdmUsIG1heDogaXRlbXMubGVuZ3RoLCBkaXIgfSk7XG4gICAgY29uc3QgcGlwZXMgPSBbXG4gICAgICBzd2l0Y2hNYXAoKCkgPT4gKGl0ZW0udXJsID8gdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChpdGVtLnVybCkgOiBvZih0cnVlKSkpLFxuICAgICAgc3dpdGNoTWFwKCgpID0+IHtcbiAgICAgICAgY29uc3Qgb2JzID0gdGhpcy50eXBlID09PSAncHJldicgPyBpdGVtLmFmdGVyISA6IGl0ZW0uYmVmb3JlITtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBvYnMgPT09ICdudW1iZXInID8gb2YodHJ1ZSkucGlwZShkZWxheShvYnMpKSA6IG9icztcbiAgICAgIH0pXG4gICAgXTtcbiAgICBpZiAoIWlzU3RhcnQpIHtcbiAgICAgIHBpcGVzLnB1c2goZGVsYXkoMSkpO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlUnVubmluZyh0cnVlKTtcblxuICAgIHRoaXMucnVubmluZyQgPSBvZih0cnVlKVxuICAgICAgLnBpcGUocGlwZS5hcHBseSh0aGlzLCBwaXBlcyBhcyBOelNhZmVBbnkpIGFzIE56U2FmZUFueSlcbiAgICAgIC5zdWJzY3JpYmUoe1xuICAgICAgICBuZXh0OiAoKSA9PiB0aGlzLmNhbmNlbFJ1bm5pbmcoKS51cGRhdGVSdW5uaW5nKGZhbHNlKSxcbiAgICAgICAgZXJyb3I6ICgpID0+IHRoaXMuZG9uZSgpXG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydCBhIG5ldyB1c2VyIGd1aWRhbmNlXG4gICAqXG4gICAqIOW8gOWQr+aWsOeahOeUqOaIt+W8leWvvOa1geeoi1xuICAgKi9cbiAgc3RhcnQoY29uZmlnOiBPbmJvYXJkaW5nQ29uZmlnKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucnVubmluZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICB0aGlzLmNvbmZpZyA9IHtcbiAgICAgIGl0ZW1zOiBbXSxcbiAgICAgIG1hc2s6IHRydWUsXG4gICAgICBtYXNrQ2xvc2FibGU6IHRydWUsXG4gICAgICBzaG93VG90YWw6IGZhbHNlLFxuICAgICAgLi4uY29uZmlnXG4gICAgfTtcbiAgICB0aGlzLmFjdGl2ZSA9IDA7XG4gICAgdGhpcy50eXBlID0gbnVsbDtcbiAgICB0aGlzLmF0dGFjaCgpO1xuICAgIHRoaXMuc2hvd0l0ZW0odHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogTmV4dFxuICAgKlxuICAgKiDkuIvkuIDmraVcbiAgICovXG4gIG5leHQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3J1bm5pbmcgfHwgdGhpcy5hY3RpdmUgKyAxID49IHRoaXMuY29uZmlnLml0ZW1zIS5sZW5ndGgpIHtcbiAgICAgIHRoaXMuZG9uZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnR5cGUgPSAnbmV4dCc7XG4gICAgKyt0aGlzLmFjdGl2ZTtcbiAgICB0aGlzLnNob3dJdGVtKCk7XG4gIH1cblxuICAvKipcbiAgICogUHJldlxuICAgKlxuICAgKiDkuIrkuIDmraVcbiAgICovXG4gIHByZXYoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3J1bm5pbmcgfHwgdGhpcy5hY3RpdmUgLSAxIDwgMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnR5cGUgPSAncHJldic7XG4gICAgLS10aGlzLmFjdGl2ZTtcbiAgICB0aGlzLnNob3dJdGVtKCk7XG4gIH1cblxuICAvKipcbiAgICogRG9uZVxuICAgKlxuICAgKiDlrozmiJBcbiAgICovXG4gIGRvbmUoKTogdm9pZCB7XG4gICAgdGhpcy50eXBlID0gJ2RvbmUnO1xuICAgIHRoaXMuZGVzdHJveSgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95KCk7XG4gIH1cbn1cbiJdfQ==