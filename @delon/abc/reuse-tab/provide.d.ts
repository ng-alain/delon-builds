import { EnvironmentProviders, Provider } from '@angular/core';
export declare enum ReuseTabFeatureKind {
    CacheManager = 0,
    Store = 1
}
export interface ReuseTabFeature<KindT extends ReuseTabFeatureKind> {
    ɵkind: KindT;
    ɵproviders: Provider[];
}
/**
 * Configures reuse-tab to be available for injection.
 *
 * @see {@link withLocalStorage}
 * @see {@link withCacheManager}
 */
export declare function provideReuseTabConfig(options?: {
    storeKey?: string;
    cacheManager?: ReuseTabFeature<ReuseTabFeatureKind.CacheManager>;
    store?: ReuseTabFeature<ReuseTabFeatureKind.Store>;
}): EnvironmentProviders;
export declare function withCacheManager(): ReuseTabFeature<ReuseTabFeatureKind.CacheManager>;
export declare function withLocalStorage(): ReuseTabFeature<ReuseTabFeatureKind.Store>;
