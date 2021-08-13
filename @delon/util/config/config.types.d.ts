import { InjectionToken } from '@angular/core';
import { AlainDateRangePickerConfig, AlainErrorCollectConfig, AlainImageConfig, AlainLoadingConfig, AlainLodopConfig, AlainMediaConfig, AlainOnboardingConfig, AlainPageHeaderConfig, AlainPdfConfig, AlainQRConfig, AlainSEConfig, AlainSGConfig, AlainSTConfig, AlainSVConfig, AlainXlsxConfig, AlainZipConfig } from './abc/index';
import { AlainACLConfig } from './acl/acl.type';
import { AlainAuthConfig } from './auth/auth.type';
import { AlainCacheConfig } from './cache/cache.type';
import { AlainChartConfig } from './chart/chart.type';
import { AlainMockConfig } from './mock/mock.type';
import { AlainSFConfig } from './sf/sf.type';
import { AlainThemeHttpClientConfig, AlainThemeResponsiveConfig, AlainThemeI18nConfig } from './theme/index';
import { AlainUtilArrayConfig } from './util/array.type';
import { AlainUtilCurrencyConfig } from './util/currency.type';
export interface AlainConfig {
    dataRange?: AlainDateRangePickerConfig;
    errorCollect?: AlainErrorCollectConfig;
    image?: AlainImageConfig;
    loading?: AlainLoadingConfig;
    onboarding?: AlainOnboardingConfig;
    lodop?: AlainLodopConfig;
    pageHeader?: AlainPageHeaderConfig;
    qr?: AlainQRConfig;
    se?: AlainSEConfig;
    sg?: AlainSGConfig;
    sv?: AlainSVConfig;
    st?: AlainSTConfig;
    sf?: AlainSFConfig;
    xlsx?: AlainXlsxConfig;
    zip?: AlainZipConfig;
    pdf?: AlainPdfConfig;
    media?: AlainMediaConfig;
    acl?: AlainACLConfig;
    auth?: AlainAuthConfig;
    cache?: AlainCacheConfig;
    chart?: AlainChartConfig;
    mock?: AlainMockConfig;
    utilArray?: AlainUtilArrayConfig;
    utilCurrency?: AlainUtilCurrencyConfig;
    themeHttp?: AlainThemeHttpClientConfig;
    themeResponsive?: AlainThemeResponsiveConfig;
    themeI18n?: AlainThemeI18nConfig;
}
export declare type AlainConfigKey = keyof AlainConfig;
export declare const ALAIN_CONFIG: InjectionToken<AlainConfig>;
export declare function ALAIN_CONFIG_FACTORY(): AlainConfig;
