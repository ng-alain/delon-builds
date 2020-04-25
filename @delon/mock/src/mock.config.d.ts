export declare class DelonMockConfig {
    /**
     * 规则定义数据
     */
    data: any;
    /**
     * 请求延迟，单位：毫秒，默认：`300`
     */
    delay?: number;
    /**
     * 是否强制所有请求都Mock，`true` 表示当请求的URL不存在时直接返回 404 错误，`false` 表示未命中时发送真实HTTP请求
     */
    force?: boolean;
    /**
     * 是否打印 Mock 请求信息，弥补浏览器无Network信息
     */
    log?: boolean;
    /**
     * 是否返回副本数据
     */
    copy?: boolean;
    /**
     * 是否拦截命中后继续调用后续拦截器的 `intercept` 方法，默认：`true`
     */
    executeOtherInterceptors?: boolean;
}
