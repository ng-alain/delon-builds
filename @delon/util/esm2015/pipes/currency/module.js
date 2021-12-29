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
                exports: PIPES
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdXRpbC9waXBlcy9jdXJyZW5jeS9tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMvQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFakQsTUFBTSxLQUFLLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxlQUFlLENBQUMsQ0FBQztBQU1yRSxNQUFNLE9BQU8sa0JBQWtCOzs7WUFKOUIsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxLQUFLO2dCQUNuQixPQUFPLEVBQUUsS0FBSzthQUNmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ3VycmVuY3lDTllQaXBlIH0gZnJvbSAnLi9jbnkucGlwZSc7XG5pbXBvcnQgeyBDdXJyZW5jeU1lZ2FQaXBlIH0gZnJvbSAnLi9tZWdhLnBpcGUnO1xuaW1wb3J0IHsgQ3VycmVuY3lQcmljZVBpcGUgfSBmcm9tICcuL3ByaWNlLnBpcGUnO1xuXG5jb25zdCBQSVBFUyA9IFtDdXJyZW5jeU1lZ2FQaXBlLCBDdXJyZW5jeVByaWNlUGlwZSwgQ3VycmVuY3lDTllQaXBlXTtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBQSVBFUyxcbiAgZXhwb3J0czogUElQRVNcbn0pXG5leHBvcnQgY2xhc3MgQ3VycmVuY3lQaXBlTW9kdWxlIHt9XG4iXX0=