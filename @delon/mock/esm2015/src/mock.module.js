import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MockInterceptor } from './mock.interceptor';
import * as i0 from "@angular/core";
export class DelonMockModule {
    static forRoot() {
        return {
            ngModule: DelonMockModule,
            providers: [{ provide: HTTP_INTERCEPTORS, useClass: MockInterceptor, multi: true }],
        };
    }
    static forChild() {
        return {
            ngModule: DelonMockModule,
            providers: [{ provide: HTTP_INTERCEPTORS, useClass: MockInterceptor, multi: true }],
        };
    }
}
/** @nocollapse */ DelonMockModule.ɵmod = i0.ɵɵdefineNgModule({ type: DelonMockModule });
/** @nocollapse */ DelonMockModule.ɵinj = i0.ɵɵdefineInjector({ factory: function DelonMockModule_Factory(t) { return new (t || DelonMockModule)(); } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DelonMockModule, [{
        type: NgModule,
        args: [{}]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9tb2NrL3NyYy9tb2NrLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBR3JELE1BQU0sT0FBTyxlQUFlO0lBQzFCLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDO1NBQ3BGLENBQUM7SUFDSixDQUFDO0lBRUQsTUFBTSxDQUFDLFFBQVE7UUFDYixPQUFPO1lBQ0wsUUFBUSxFQUFFLGVBQWU7WUFDekIsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUM7U0FDcEYsQ0FBQztJQUNKLENBQUM7O3NFQWJVLGVBQWU7Z0lBQWYsZUFBZTt1RkFBZixlQUFlO2NBRDNCLFFBQVE7ZUFBQyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSFRUUF9JTlRFUkNFUFRPUlMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTW9ja0ludGVyY2VwdG9yIH0gZnJvbSAnLi9tb2NrLmludGVyY2VwdG9yJztcblxuQE5nTW9kdWxlKHt9KVxuZXhwb3J0IGNsYXNzIERlbG9uTW9ja01vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8RGVsb25Nb2NrTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBEZWxvbk1vY2tNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLCB1c2VDbGFzczogTW9ja0ludGVyY2VwdG9yLCBtdWx0aTogdHJ1ZSB9XSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGZvckNoaWxkKCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8RGVsb25Nb2NrTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBEZWxvbk1vY2tNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLCB1c2VDbGFzczogTW9ja0ludGVyY2VwdG9yLCBtdWx0aTogdHJ1ZSB9XSxcbiAgICB9O1xuICB9XG59XG4iXX0=