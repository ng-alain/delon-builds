import { EnvironmentProviders, Provider } from '@angular/core';
export declare enum AuthFeatureKind {
    Token = 0,
    Store = 1
}
export interface AuthFeature<KindT extends AuthFeatureKind> {
    ɵkind: KindT;
    ɵproviders: Provider[];
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
export declare function provideAuth(type: AuthFeature<AuthFeatureKind.Token>, store?: AuthFeature<AuthFeatureKind.Store>): EnvironmentProviders;
/** Use simple auth type,  */
export declare function withSimple(): AuthFeature<AuthFeatureKind.Token>;
export declare function withJWT(): AuthFeature<AuthFeatureKind.Token>;
/** `cookie` storage */
export declare function withCookie(): AuthFeature<AuthFeatureKind.Store>;
/** `localStorage` storage, **not lost after closing the browser**. */
export declare function withLocalStorage(): AuthFeature<AuthFeatureKind.Store>;
/** `sessionStorage` storage, **lost after closing the browser**. */
export declare function withSessionStorage(): AuthFeature<AuthFeatureKind.Store>;
/** Memory storage, **lost after closing the browser tab**. */
export declare function withMemoryStorage(): AuthFeature<AuthFeatureKind.Store>;
