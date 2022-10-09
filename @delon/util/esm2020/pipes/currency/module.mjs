import { NgModule } from '@angular/core';
import { CurrencyCNYPipe } from './cny.pipe';
import { CurrencyMegaPipe } from './mega.pipe';
import { CurrencyPricePipe } from './price.pipe';
import * as i0 from "@angular/core";
const PIPES = [CurrencyMegaPipe, CurrencyPricePipe, CurrencyCNYPipe];
export class CurrencyPipeModule {
}
CurrencyPipeModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.5", ngImport: i0, type: CurrencyPipeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CurrencyPipeModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.5", ngImport: i0, type: CurrencyPipeModule, declarations: [CurrencyMegaPipe, CurrencyPricePipe, CurrencyCNYPipe], exports: [CurrencyMegaPipe, CurrencyPricePipe, CurrencyCNYPipe] });
CurrencyPipeModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.5", ngImport: i0, type: CurrencyPipeModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.5", ngImport: i0, type: CurrencyPipeModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: PIPES,
                    exports: PIPES
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdXRpbC9waXBlcy9jdXJyZW5jeS9tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMvQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxjQUFjLENBQUM7O0FBRWpELE1BQU0sS0FBSyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsZUFBZSxDQUFDLENBQUM7QUFNckUsTUFBTSxPQUFPLGtCQUFrQjs7K0dBQWxCLGtCQUFrQjtnSEFBbEIsa0JBQWtCLGlCQU5oQixnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxlQUFlLGFBQXBELGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLGVBQWU7Z0hBTXRELGtCQUFrQjsyRkFBbEIsa0JBQWtCO2tCQUo5QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxLQUFLO29CQUNuQixPQUFPLEVBQUUsS0FBSztpQkFDZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEN1cnJlbmN5Q05ZUGlwZSB9IGZyb20gJy4vY255LnBpcGUnO1xuaW1wb3J0IHsgQ3VycmVuY3lNZWdhUGlwZSB9IGZyb20gJy4vbWVnYS5waXBlJztcbmltcG9ydCB7IEN1cnJlbmN5UHJpY2VQaXBlIH0gZnJvbSAnLi9wcmljZS5waXBlJztcblxuY29uc3QgUElQRVMgPSBbQ3VycmVuY3lNZWdhUGlwZSwgQ3VycmVuY3lQcmljZVBpcGUsIEN1cnJlbmN5Q05ZUGlwZV07XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogUElQRVMsXG4gIGV4cG9ydHM6IFBJUEVTXG59KVxuZXhwb3J0IGNsYXNzIEN1cnJlbmN5UGlwZU1vZHVsZSB7fVxuIl19