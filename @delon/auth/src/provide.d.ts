import { EnvironmentProviders, Provider } from '@angular/core';
export declare enum AuthFeatureKind {
    Store = 0
}
export interface AuthFeature<KindT extends AuthFeatureKind> {
    ɵkind: KindT;
    ɵproviders: Provider[];
}
/**
 * Configures authentication process service to be available for injection.
 *
 * @see {@link withCookie}
 * @see {@link withLocalStorage}
 * @see {@link withSessionStorage}
 */
export declare function provideAuth(store?: AuthFeature<AuthFeatureKind.Store>): EnvironmentProviders;
/** `cookie` storage */
export declare function withCookie(): AuthFeature<AuthFeatureKind.Store>;
/** `localStorage` storage, **not lost after closing the browser**. */
export declare function withLocalStorage(): AuthFeature<AuthFeatureKind.Store>;
/** `sessionStorage` storage, **lost after closing the browser**. */
export declare function withSessionStorage(): AuthFeature<AuthFeatureKind.Store>;
/** Memory storage, **lost after closing the browser tab**. */
export declare function withMemoryStorage(): AuthFeature<AuthFeatureKind.Store>;
