import { EnvironmentProviders, Provider } from '@angular/core';
export declare enum ReuseTabFeatureKind {
    Cache = 0,
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
 * @see {@link withCache}
 */
export declare function provideReuseTabConfig(options?: {
    storeKey?: string;
    cache?: ReuseTabFeature<ReuseTabFeatureKind.Cache>;
    store?: ReuseTabFeature<ReuseTabFeatureKind.Store>;
}): EnvironmentProviders;
export declare function withLocalStorage(): ReuseTabFeature<ReuseTabFeatureKind.Store>;
export declare function withCache(): ReuseTabFeature<ReuseTabFeatureKind.Cache>;
