import { ɵHTTP_ROOT_INTERCEPTOR_FNS } from '@angular/common/http';
import { makeEnvironmentProviders } from '@angular/core';
import { CookieService } from '@delon/util/browser';
import { CookieStorageStore, DA_STORE_TOKEN, LocalStorageStore, MemoryStore, SessionStorageStore } from './store';
import { JWTInterceptor, SimpleInterceptor } from './token/index';
export var AuthFeatureKind;
(function (AuthFeatureKind) {
    AuthFeatureKind[AuthFeatureKind["Token"] = 0] = "Token";
    AuthFeatureKind[AuthFeatureKind["Store"] = 1] = "Store";
})(AuthFeatureKind || (AuthFeatureKind = {}));
function makeAuthFeature(kind, providers) {
    return {
        ɵkind: kind,
        ɵproviders: providers
    };
}
/**
 * Configures authentication process service to be available for injection.
 *
 * @see {@link withSimple}
 * @see {@link withJWT}
 * @see {@link withCookie}
 * @see {@link withLocalStorage}
 * @see {@link withSessionStorage}
 */
export function provideAuth(type, store) {
    return makeEnvironmentProviders([type.ɵproviders, (store ?? withLocalStorage()).ɵproviders]);
}
/** Use simple auth type,  */
export function withSimple() {
    return makeAuthFeature(AuthFeatureKind.Token, [
        {
            provide: ɵHTTP_ROOT_INTERCEPTOR_FNS,
            useClass: SimpleInterceptor,
            multi: true
        }
    ]);
}
export function withJWT() {
    return makeAuthFeature(AuthFeatureKind.Token, [
        {
            provide: ɵHTTP_ROOT_INTERCEPTOR_FNS,
            useClass: JWTInterceptor,
            multi: true
        }
    ]);
}
/** `cookie` storage */
export function withCookie() {
    return makeAuthFeature(AuthFeatureKind.Store, [
        { provide: DA_STORE_TOKEN, useClass: CookieStorageStore, deps: [CookieService] }
    ]);
}
/** `localStorage` storage, **not lost after closing the browser**. */
export function withLocalStorage() {
    return makeAuthFeature(AuthFeatureKind.Store, [{ provide: DA_STORE_TOKEN, useClass: LocalStorageStore }]);
}
/** `sessionStorage` storage, **lost after closing the browser**. */
export function withSessionStorage() {
    return makeAuthFeature(AuthFeatureKind.Store, [{ provide: DA_STORE_TOKEN, useClass: SessionStorageStore }]);
}
/** Memory storage, **lost after closing the browser tab**. */
export function withMemoryStorage() {
    return makeAuthFeature(AuthFeatureKind.Store, [{ provide: DA_STORE_TOKEN, useClass: MemoryStore }]);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmlkZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2F1dGgvc3JjL3Byb3ZpZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEUsT0FBTyxFQUFrQyx3QkFBd0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFcEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLGNBQWMsRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDbEgsT0FBTyxFQUFFLGNBQWMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVsRSxNQUFNLENBQU4sSUFBWSxlQUdYO0FBSEQsV0FBWSxlQUFlO0lBQ3pCLHVEQUFLLENBQUE7SUFDTCx1REFBSyxDQUFBO0FBQ1AsQ0FBQyxFQUhXLGVBQWUsS0FBZixlQUFlLFFBRzFCO0FBT0QsU0FBUyxlQUFlLENBQWdDLElBQVcsRUFBRSxTQUFxQjtJQUN4RixPQUFPO1FBQ0wsS0FBSyxFQUFFLElBQUk7UUFDWCxVQUFVLEVBQUUsU0FBUztLQUN0QixDQUFDO0FBQ0osQ0FBQztBQUVEOzs7Ozs7OztHQVFHO0FBQ0gsTUFBTSxVQUFVLFdBQVcsQ0FDekIsSUFBd0MsRUFDeEMsS0FBMEM7SUFFMUMsT0FBTyx3QkFBd0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxLQUFLLElBQUksZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7QUFDL0YsQ0FBQztBQUVELDZCQUE2QjtBQUM3QixNQUFNLFVBQVUsVUFBVTtJQUN4QixPQUFPLGVBQWUsQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFO1FBQzVDO1lBQ0UsT0FBTyxFQUFFLDBCQUEwQjtZQUNuQyxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLEtBQUssRUFBRSxJQUFJO1NBQ1o7S0FDRixDQUFDLENBQUM7QUFDTCxDQUFDO0FBRUQsTUFBTSxVQUFVLE9BQU87SUFDckIsT0FBTyxlQUFlLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRTtRQUM1QztZQUNFLE9BQU8sRUFBRSwwQkFBMEI7WUFDbkMsUUFBUSxFQUFFLGNBQWM7WUFDeEIsS0FBSyxFQUFFLElBQUk7U0FDWjtLQUNGLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFRCx1QkFBdUI7QUFDdkIsTUFBTSxVQUFVLFVBQVU7SUFDeEIsT0FBTyxlQUFlLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRTtRQUM1QyxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFO0tBQ2pGLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFRCxzRUFBc0U7QUFDdEUsTUFBTSxVQUFVLGdCQUFnQjtJQUM5QixPQUFPLGVBQWUsQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM1RyxDQUFDO0FBRUQsb0VBQW9FO0FBQ3BFLE1BQU0sVUFBVSxrQkFBa0I7SUFDaEMsT0FBTyxlQUFlLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDOUcsQ0FBQztBQUVELDhEQUE4RDtBQUM5RCxNQUFNLFVBQVUsaUJBQWlCO0lBQy9CLE9BQU8sZUFBZSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN0RyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgybVIVFRQX1JPT1RfSU5URVJDRVBUT1JfRk5TIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgRW52aXJvbm1lbnRQcm92aWRlcnMsIFByb3ZpZGVyLCBtYWtlRW52aXJvbm1lbnRQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29va2llU2VydmljZSB9IGZyb20gJ0BkZWxvbi91dGlsL2Jyb3dzZXInO1xuXG5pbXBvcnQgeyBDb29raWVTdG9yYWdlU3RvcmUsIERBX1NUT1JFX1RPS0VOLCBMb2NhbFN0b3JhZ2VTdG9yZSwgTWVtb3J5U3RvcmUsIFNlc3Npb25TdG9yYWdlU3RvcmUgfSBmcm9tICcuL3N0b3JlJztcbmltcG9ydCB7IEpXVEludGVyY2VwdG9yLCBTaW1wbGVJbnRlcmNlcHRvciB9IGZyb20gJy4vdG9rZW4vaW5kZXgnO1xuXG5leHBvcnQgZW51bSBBdXRoRmVhdHVyZUtpbmQge1xuICBUb2tlbixcbiAgU3RvcmVcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBdXRoRmVhdHVyZTxLaW5kVCBleHRlbmRzIEF1dGhGZWF0dXJlS2luZD4ge1xuICDJtWtpbmQ6IEtpbmRUO1xuICDJtXByb3ZpZGVyczogUHJvdmlkZXJbXTtcbn1cblxuZnVuY3Rpb24gbWFrZUF1dGhGZWF0dXJlPEtpbmRUIGV4dGVuZHMgQXV0aEZlYXR1cmVLaW5kPihraW5kOiBLaW5kVCwgcHJvdmlkZXJzOiBQcm92aWRlcltdKTogQXV0aEZlYXR1cmU8S2luZFQ+IHtcbiAgcmV0dXJuIHtcbiAgICDJtWtpbmQ6IGtpbmQsXG4gICAgybVwcm92aWRlcnM6IHByb3ZpZGVyc1xuICB9O1xufVxuXG4vKipcbiAqIENvbmZpZ3VyZXMgYXV0aGVudGljYXRpb24gcHJvY2VzcyBzZXJ2aWNlIHRvIGJlIGF2YWlsYWJsZSBmb3IgaW5qZWN0aW9uLlxuICpcbiAqIEBzZWUge0BsaW5rIHdpdGhTaW1wbGV9XG4gKiBAc2VlIHtAbGluayB3aXRoSldUfVxuICogQHNlZSB7QGxpbmsgd2l0aENvb2tpZX1cbiAqIEBzZWUge0BsaW5rIHdpdGhMb2NhbFN0b3JhZ2V9XG4gKiBAc2VlIHtAbGluayB3aXRoU2Vzc2lvblN0b3JhZ2V9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlQXV0aChcbiAgdHlwZTogQXV0aEZlYXR1cmU8QXV0aEZlYXR1cmVLaW5kLlRva2VuPixcbiAgc3RvcmU/OiBBdXRoRmVhdHVyZTxBdXRoRmVhdHVyZUtpbmQuU3RvcmU+XG4pOiBFbnZpcm9ubWVudFByb3ZpZGVycyB7XG4gIHJldHVybiBtYWtlRW52aXJvbm1lbnRQcm92aWRlcnMoW3R5cGUuybVwcm92aWRlcnMsIChzdG9yZSA/PyB3aXRoTG9jYWxTdG9yYWdlKCkpLsm1cHJvdmlkZXJzXSk7XG59XG5cbi8qKiBVc2Ugc2ltcGxlIGF1dGggdHlwZSwgICovXG5leHBvcnQgZnVuY3Rpb24gd2l0aFNpbXBsZSgpOiBBdXRoRmVhdHVyZTxBdXRoRmVhdHVyZUtpbmQuVG9rZW4+IHtcbiAgcmV0dXJuIG1ha2VBdXRoRmVhdHVyZShBdXRoRmVhdHVyZUtpbmQuVG9rZW4sIFtcbiAgICB7XG4gICAgICBwcm92aWRlOiDJtUhUVFBfUk9PVF9JTlRFUkNFUFRPUl9GTlMsXG4gICAgICB1c2VDbGFzczogU2ltcGxlSW50ZXJjZXB0b3IsXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3aXRoSldUKCk6IEF1dGhGZWF0dXJlPEF1dGhGZWF0dXJlS2luZC5Ub2tlbj4ge1xuICByZXR1cm4gbWFrZUF1dGhGZWF0dXJlKEF1dGhGZWF0dXJlS2luZC5Ub2tlbiwgW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IMm1SFRUUF9ST09UX0lOVEVSQ0VQVE9SX0ZOUyxcbiAgICAgIHVzZUNsYXNzOiBKV1RJbnRlcmNlcHRvcixcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdKTtcbn1cblxuLyoqIGBjb29raWVgIHN0b3JhZ2UgKi9cbmV4cG9ydCBmdW5jdGlvbiB3aXRoQ29va2llKCk6IEF1dGhGZWF0dXJlPEF1dGhGZWF0dXJlS2luZC5TdG9yZT4ge1xuICByZXR1cm4gbWFrZUF1dGhGZWF0dXJlKEF1dGhGZWF0dXJlS2luZC5TdG9yZSwgW1xuICAgIHsgcHJvdmlkZTogREFfU1RPUkVfVE9LRU4sIHVzZUNsYXNzOiBDb29raWVTdG9yYWdlU3RvcmUsIGRlcHM6IFtDb29raWVTZXJ2aWNlXSB9XG4gIF0pO1xufVxuXG4vKiogYGxvY2FsU3RvcmFnZWAgc3RvcmFnZSwgKipub3QgbG9zdCBhZnRlciBjbG9zaW5nIHRoZSBicm93c2VyKiouICovXG5leHBvcnQgZnVuY3Rpb24gd2l0aExvY2FsU3RvcmFnZSgpOiBBdXRoRmVhdHVyZTxBdXRoRmVhdHVyZUtpbmQuU3RvcmU+IHtcbiAgcmV0dXJuIG1ha2VBdXRoRmVhdHVyZShBdXRoRmVhdHVyZUtpbmQuU3RvcmUsIFt7IHByb3ZpZGU6IERBX1NUT1JFX1RPS0VOLCB1c2VDbGFzczogTG9jYWxTdG9yYWdlU3RvcmUgfV0pO1xufVxuXG4vKiogYHNlc3Npb25TdG9yYWdlYCBzdG9yYWdlLCAqKmxvc3QgYWZ0ZXIgY2xvc2luZyB0aGUgYnJvd3NlcioqLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdpdGhTZXNzaW9uU3RvcmFnZSgpOiBBdXRoRmVhdHVyZTxBdXRoRmVhdHVyZUtpbmQuU3RvcmU+IHtcbiAgcmV0dXJuIG1ha2VBdXRoRmVhdHVyZShBdXRoRmVhdHVyZUtpbmQuU3RvcmUsIFt7IHByb3ZpZGU6IERBX1NUT1JFX1RPS0VOLCB1c2VDbGFzczogU2Vzc2lvblN0b3JhZ2VTdG9yZSB9XSk7XG59XG5cbi8qKiBNZW1vcnkgc3RvcmFnZSwgKipsb3N0IGFmdGVyIGNsb3NpbmcgdGhlIGJyb3dzZXIgdGFiKiouICovXG5leHBvcnQgZnVuY3Rpb24gd2l0aE1lbW9yeVN0b3JhZ2UoKTogQXV0aEZlYXR1cmU8QXV0aEZlYXR1cmVLaW5kLlN0b3JlPiB7XG4gIHJldHVybiBtYWtlQXV0aEZlYXR1cmUoQXV0aEZlYXR1cmVLaW5kLlN0b3JlLCBbeyBwcm92aWRlOiBEQV9TVE9SRV9UT0tFTiwgdXNlQ2xhc3M6IE1lbW9yeVN0b3JlIH1dKTtcbn1cbiJdfQ==