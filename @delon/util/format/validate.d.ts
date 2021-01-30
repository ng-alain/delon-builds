export declare const REGEX: {
    num: RegExp;
    idCard: RegExp;
    mobile: RegExp;
    url: RegExp;
    ip: RegExp;
    color: RegExp;
};
/**
 * Wheter is number
 *
 * 是否为数字
 */
export declare function isNum(value: string | number): boolean;
/**
 * Wheter is integer
 *
 * 是否为整数
 */
export declare function isInt(value: string | number): boolean;
/**
 * Wheter is decimal
 *
 * 是否为小数点数值
 */
export declare function isDecimal(value: string | number): boolean;
/**
 * Wheter is People's Republic of China identity card
 *
 * 是否为中华人民共和国居民身份证
 */
export declare function isIdCard(value: string): boolean;
/**
 * Wheter is china mobile (China)
 *
 * 是否为手机号（中国）
 */
export declare function isMobile(value: string): boolean;
/**
 * Wheter is url address
 *
 * 是否URL地址
 */
export declare function isUrl(url: string): boolean;
/**
 * Wheter is IPv4 address (Support v4, v6)
 *
 * 是否IP4地址（支持v4、v6）
 */
export declare function isIp(ip: string): boolean;
/**
 * Wheter is color
 *
 * 是否颜色代码值
 */
export declare function isColor(color: string): boolean;
