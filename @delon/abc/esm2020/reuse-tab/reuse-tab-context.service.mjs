import { ConnectionPositionPair } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { ReuseTabContextMenuComponent } from './reuse-tab-context-menu.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
export class ReuseTabContextService {
    constructor(overlay) {
        this.overlay = overlay;
        this.show = new Subject();
        this.close = new Subject();
    }
    remove() {
        if (!this.ref)
            return;
        this.ref.detach();
        this.ref.dispose();
        this.ref = null;
    }
    open(context) {
        this.remove();
        const { event, item, customContextMenu } = context;
        const { x, y } = event;
        const positions = [
            new ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
            new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' })
        ];
        const positionStrategy = this.overlay.position().flexibleConnectedTo({ x, y }).withPositions(positions);
        this.ref = this.overlay.create({
            positionStrategy,
            panelClass: 'reuse-tab__cm',
            scrollStrategy: this.overlay.scrollStrategies.close()
        });
        const comp = this.ref.attach(new ComponentPortal(ReuseTabContextMenuComponent));
        const instance = comp.instance;
        instance.i18n = this.i18n;
        instance.item = { ...item };
        instance.customContextMenu = customContextMenu;
        instance.event = event;
        const sub$ = new Subscription();
        sub$.add(instance.close.subscribe((res) => {
            this.close.next(res);
            this.remove();
        }));
        comp.onDestroy(() => sub$.unsubscribe());
    }
}
ReuseTabContextService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: ReuseTabContextService, deps: [{ token: i1.Overlay }], target: i0.ɵɵFactoryTarget.Injectable });
ReuseTabContextService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: ReuseTabContextService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: ReuseTabContextService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.Overlay }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLWNvbnRleHQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9yZXVzZS10YWIvcmV1c2UtdGFiLWNvbnRleHQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsc0JBQXNCLEVBQXVCLE1BQU0sc0JBQXNCLENBQUM7QUFDbkYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFN0MsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7OztBQVNsRixNQUFNLE9BQU8sc0JBQXNCO0lBT2pDLFlBQW9CLE9BQWdCO1FBQWhCLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFIcEMsU0FBSSxHQUErQixJQUFJLE9BQU8sRUFBcUIsQ0FBQztRQUNwRSxVQUFLLEdBQW9DLElBQUksT0FBTyxFQUEwQixDQUFDO0lBRXhDLENBQUM7SUFFeEMsTUFBTTtRQUNKLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRztZQUFFLE9BQU87UUFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxJQUFJLENBQUMsT0FBMEI7UUFDN0IsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2QsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsR0FBRyxPQUFPLENBQUM7UUFDbkQsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUM7UUFDdkIsTUFBTSxTQUFTLEdBQUc7WUFDaEIsSUFBSSxzQkFBc0IsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUM7WUFDM0csSUFBSSxzQkFBc0IsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUM7U0FDNUcsQ0FBQztRQUNGLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN4RyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQzdCLGdCQUFnQjtZQUNoQixVQUFVLEVBQUUsZUFBZTtZQUMzQixjQUFjLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUU7U0FDdEQsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxlQUFlLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxDQUFDO1FBQ2hGLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDL0IsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzFCLFFBQVEsQ0FBQyxJQUFJLEdBQUcsRUFBRSxHQUFHLElBQUksRUFBRSxDQUFDO1FBQzVCLFFBQVEsQ0FBQyxpQkFBaUIsR0FBRyxpQkFBNkMsQ0FBQztRQUMzRSxRQUFRLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUV2QixNQUFNLElBQUksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxHQUFHLENBQ04sUUFBUSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUEyQixFQUFFLEVBQUU7WUFDdkQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUNILENBQUM7UUFDRixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQzNDLENBQUM7O21IQTdDVSxzQkFBc0I7dUhBQXRCLHNCQUFzQjsyRkFBdEIsc0JBQXNCO2tCQURsQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29ubmVjdGlvblBvc2l0aW9uUGFpciwgT3ZlcmxheSwgT3ZlcmxheVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFJldXNlVGFiQ29udGV4dE1lbnVDb21wb25lbnQgfSBmcm9tICcuL3JldXNlLXRhYi1jb250ZXh0LW1lbnUuY29tcG9uZW50JztcbmltcG9ydCB7XG4gIFJldXNlQ29udGV4dENsb3NlRXZlbnQsXG4gIFJldXNlQ29udGV4dEV2ZW50LFxuICBSZXVzZUNvbnRleHRJMThuLFxuICBSZXVzZUN1c3RvbUNvbnRleHRNZW51XG59IGZyb20gJy4vcmV1c2UtdGFiLmludGVyZmFjZXMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUmV1c2VUYWJDb250ZXh0U2VydmljZSB7XG4gIHByaXZhdGUgcmVmOiBPdmVybGF5UmVmIHwgbnVsbDtcbiAgaTE4bjogUmV1c2VDb250ZXh0STE4bjtcblxuICBzaG93OiBTdWJqZWN0PFJldXNlQ29udGV4dEV2ZW50PiA9IG5ldyBTdWJqZWN0PFJldXNlQ29udGV4dEV2ZW50PigpO1xuICBjbG9zZTogU3ViamVjdDxSZXVzZUNvbnRleHRDbG9zZUV2ZW50PiA9IG5ldyBTdWJqZWN0PFJldXNlQ29udGV4dENsb3NlRXZlbnQ+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5KSB7fVxuXG4gIHJlbW92ZSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucmVmKSByZXR1cm47XG4gICAgdGhpcy5yZWYuZGV0YWNoKCk7XG4gICAgdGhpcy5yZWYuZGlzcG9zZSgpO1xuICAgIHRoaXMucmVmID0gbnVsbDtcbiAgfVxuXG4gIG9wZW4oY29udGV4dDogUmV1c2VDb250ZXh0RXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLnJlbW92ZSgpO1xuICAgIGNvbnN0IHsgZXZlbnQsIGl0ZW0sIGN1c3RvbUNvbnRleHRNZW51IH0gPSBjb250ZXh0O1xuICAgIGNvbnN0IHsgeCwgeSB9ID0gZXZlbnQ7XG4gICAgY29uc3QgcG9zaXRpb25zID0gW1xuICAgICAgbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAnYm90dG9tJyB9LCB7IG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ3RvcCcgfSksXG4gICAgICBuZXcgQ29ubmVjdGlvblBvc2l0aW9uUGFpcih7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICd0b3AnIH0sIHsgb3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAnYm90dG9tJyB9KVxuICAgIF07XG4gICAgY29uc3QgcG9zaXRpb25TdHJhdGVneSA9IHRoaXMub3ZlcmxheS5wb3NpdGlvbigpLmZsZXhpYmxlQ29ubmVjdGVkVG8oeyB4LCB5IH0pLndpdGhQb3NpdGlvbnMocG9zaXRpb25zKTtcbiAgICB0aGlzLnJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUoe1xuICAgICAgcG9zaXRpb25TdHJhdGVneSxcbiAgICAgIHBhbmVsQ2xhc3M6ICdyZXVzZS10YWJfX2NtJyxcbiAgICAgIHNjcm9sbFN0cmF0ZWd5OiB0aGlzLm92ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5jbG9zZSgpXG4gICAgfSk7XG4gICAgY29uc3QgY29tcCA9IHRoaXMucmVmLmF0dGFjaChuZXcgQ29tcG9uZW50UG9ydGFsKFJldXNlVGFiQ29udGV4dE1lbnVDb21wb25lbnQpKTtcbiAgICBjb25zdCBpbnN0YW5jZSA9IGNvbXAuaW5zdGFuY2U7XG4gICAgaW5zdGFuY2UuaTE4biA9IHRoaXMuaTE4bjtcbiAgICBpbnN0YW5jZS5pdGVtID0geyAuLi5pdGVtIH07XG4gICAgaW5zdGFuY2UuY3VzdG9tQ29udGV4dE1lbnUgPSBjdXN0b21Db250ZXh0TWVudSBhcyBSZXVzZUN1c3RvbUNvbnRleHRNZW51W107XG4gICAgaW5zdGFuY2UuZXZlbnQgPSBldmVudDtcblxuICAgIGNvbnN0IHN1YiQgPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG4gICAgc3ViJC5hZGQoXG4gICAgICBpbnN0YW5jZS5jbG9zZS5zdWJzY3JpYmUoKHJlczogUmV1c2VDb250ZXh0Q2xvc2VFdmVudCkgPT4ge1xuICAgICAgICB0aGlzLmNsb3NlLm5leHQocmVzKTtcbiAgICAgICAgdGhpcy5yZW1vdmUoKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgICBjb21wLm9uRGVzdHJveSgoKSA9PiBzdWIkLnVuc3Vic2NyaWJlKCkpO1xuICB9XG59XG4iXX0=