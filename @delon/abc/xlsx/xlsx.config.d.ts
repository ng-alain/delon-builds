/**
 * @deprecated `XlsxConfig` is going to be removed in 10.0.0. Please refer to https://ng-alain.com/docs/global-config
 */
export declare class XlsxConfig {
    constructor();
    /**
     * Xlsx library path
     */
    url?: string;
    /**
     * Defines which Xlsx optional modules should get loaded, e.g:
     *
     * `[ '//cdn.bootcss.com/xlsx/0.12.13/cpexcel.js' ]`
     */
    modules?: string[];
}
