import { NgModule } from '@angular/core';
import { CurrencyCNYPipe } from './cny.pipe';
import { CurrencyMegaPipe } from './mega.pipe';
import { CurrencyPricePipe } from './price.pipe';
const PIPES = [CurrencyMegaPipe, CurrencyPricePipe, CurrencyCNYPipe];
export class CurrencyPipeModule {
}
CurrencyPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: PIPES,
                exports: PIPES,
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdXRpbC9waXBlcy9jdXJyZW5jeS9tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMvQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFakQsTUFBTSxLQUFLLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxlQUFlLENBQUMsQ0FBQztBQU1yRSxNQUFNLE9BQU8sa0JBQWtCOzs7WUFKOUIsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxLQUFLO2dCQUNuQixPQUFPLEVBQUUsS0FBSzthQUNmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEN1cnJlbmN5Q05ZUGlwZSB9IGZyb20gJy4vY255LnBpcGUnO1xuaW1wb3J0IHsgQ3VycmVuY3lNZWdhUGlwZSB9IGZyb20gJy4vbWVnYS5waXBlJztcbmltcG9ydCB7IEN1cnJlbmN5UHJpY2VQaXBlIH0gZnJvbSAnLi9wcmljZS5waXBlJztcblxuY29uc3QgUElQRVMgPSBbQ3VycmVuY3lNZWdhUGlwZSwgQ3VycmVuY3lQcmljZVBpcGUsIEN1cnJlbmN5Q05ZUGlwZV07XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogUElQRVMsXG4gIGV4cG9ydHM6IFBJUEVTLFxufSlcbmV4cG9ydCBjbGFzcyBDdXJyZW5jeVBpcGVNb2R1bGUge31cbiJdfQ==