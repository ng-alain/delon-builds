/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function CLodop() { }
/**
 * 建立打印机名单
 * @type {?}
 */
CLodop.prototype.Create_Printer_List;
/**
 * 建立纸张类型名单
 * @type {?}
 */
CLodop.prototype.Create_PageSize_List;
/**
 * 判断是否支持https协议的属性
 *
 * - 0 不支持
 * - 1 支持
 * - 2 支持且已启动（https服务需单独启动)
 * @type {?}
 */
CLodop.prototype.HTTPS_STATUS;
/**
 * 结果回调函数
 * @type {?}
 */
CLodop.prototype.On_Return;
/**
 * 结果回调函数保留
 * @type {?}
 */
CLodop.prototype.On_Return_Remain;
/**
 * @record
 */
export function Lodop() { }
/* TODO: handle strange member:
[key: string]: any;
*/
/**
 * 获得软件版本号
 * @type {?}
 */
Lodop.prototype.VERSION;
/**
 * 打印初始化。初始化运行环境，清理异常打印遗留的系统资源，设定打印任务名。
 *
 * **建议或要求：**该函数与PRINT_INITA都有初始化功能，每个打印事务至少初始化一次，建议打印程序首先调用该函数。任务名要尽量区别于其它打印任务，譬如用“XX单位_XX管理信息系统_XX子系统_XX模块_XX打印作业”字样。
 * 不希望最终用户更改打印布局时，则设strTaskName空。
 *
 * \@param strTaskName 打印任务名
 * \@return 返回逻辑真表示初始化成功，逻辑假表示初始化失败，失败原因有：前一个打印事务没有完成；操作系统没有添加打印机(驱动)等
 * @type {?}
 */
Lodop.prototype.PRINT_INIT;
/**
 * 设定纸张大小
 * @type {?}
 */
Lodop.prototype.SET_PRINT_PAGESIZE;
/**
 * 增加超文本打印项(普通模式)
 * @type {?}
 */
Lodop.prototype.ADD_PRINT_HTM;
/**
 * 增加表格打印项（超文本模式）
 * @type {?}
 */
Lodop.prototype.ADD_PRINT_TABLE;
/**
 * 增加表格打印项（超文本模式）
 * @type {?}
 */
Lodop.prototype.ADD_PRINT_TABLE;
/**
 * 增加超文本打印项（URL模式）
 * @type {?}
 */
Lodop.prototype.ADD_PRINT_URL;
/**
 * 增加纯文本打印项
 * @type {?}
 */
Lodop.prototype.ADD_PRINT_TEXT;
/**
 * 增加图片打印项
 * @type {?}
 */
Lodop.prototype.ADD_PRINT_IMAGE;
/**
 * 增加矩形线
 * @type {?}
 */
Lodop.prototype.ADD_PRINT_RECT;
/**
 * 增加椭圆线
 * @type {?}
 */
Lodop.prototype.ADD_PRINT_ELLIPSE;
/**
 * 增加直线
 * @type {?}
 */
Lodop.prototype.ADD_PRINT_LINE;
/**
 * 增加条形码
 * @type {?}
 */
Lodop.prototype.ADD_PRINT_BARCODE;
/**
 * 增加图表
 * @type {?}
 */
Lodop.prototype.ADD_PRINT_CHART;
/**
 * 装载文档式模板
 * @type {?}
 */
Lodop.prototype.ADD_PRINT_DATA;
/**
 * 设置打印项风格
 * @type {?}
 */
Lodop.prototype.SET_PRINT_STYLE;
/**
 * 打印预览
 * @type {?}
 */
Lodop.prototype.PREVIEW;
/**
 * 直接打印
 * @type {?}
 */
Lodop.prototype.PRINT;
/**
 * 打印维护
 * @type {?}
 */
Lodop.prototype.PRINT_SETUP;
/**
 * 打印设计
 * @type {?}
 */
Lodop.prototype.PRINT_DESIGN;
/**
 * 强制分页
 * @type {?}
 */
Lodop.prototype.NEWPAGE;
/**
 * 获得打印设备个数
 * @type {?}
 */
Lodop.prototype.GET_PRINTER_COUNT;
/**
 * 获得打印设备名称
 * @type {?}
 */
Lodop.prototype.GET_PRINTER_NAME;
/**
 * 指定打印设备
 * @type {?}
 */
Lodop.prototype.SET_PRINTER_INDEX;
/**
 * 【CLodop】指定打印机
 * @type {?}
 */
Lodop.prototype.SET_PRINTER_INDEX;
/**
 * 选择打印设备
 * @type {?}
 */
Lodop.prototype.SELECT_PRINTER;
/**
 * 设置显示模式
 * @type {?}
 */
Lodop.prototype.SET_SHOW_MODE;
/**
 * 设置打印模式
 * @type {?}
 */
Lodop.prototype.SET_PRINT_MODE;
/**
 * 设置打印份数
 * @type {?}
 */
Lodop.prototype.SET_PRINT_COPIES;
/**
 * 设置预览窗口
 * @type {?}
 */
Lodop.prototype.SET_PREVIEW_WINDOW;
/**
 * 指定背景图
 * @type {?}
 */
Lodop.prototype.ADD_PRINT_SETUP_BKIMG;
/**
 * 发送原始数据
 * @type {?}
 */
Lodop.prototype.SEND_PRINT_RAWDATA;
/**
 * 写端口数据
 * @type {?}
 */
Lodop.prototype.WRITE_PORT_DATA;
/**
 * 读端口数据
 * @type {?}
 */
Lodop.prototype.READ_PORT_DATA;
/**
 * 获得配置文件名
 * @type {?}
 */
Lodop.prototype.GET_PRINT_INIFFNAME;
/**
 * 获得纸张类型名清单
 * @type {?}
 */
Lodop.prototype.GET_PAGESIZES_LIST;
/**
 * 写本地文件内容
 * @type {?}
 */
Lodop.prototype.WRITE_FILE_TEXT;
/**
 * 读本地文件内容
 * @type {?}
 */
Lodop.prototype.GET_FILE_TEXT;
/**
 * 读本地文件时间
 * @type {?}
 */
Lodop.prototype.GET_FILE_TIME;
/**
 * 判断本地文件是否存在
 * @type {?}
 */
Lodop.prototype.IS_FILE_EXIST;
/**
 * 获得系统信息
 * @type {?}
 */
Lodop.prototype.GET_SYSTEM_INFO;
/**
 * 获得数据值
 * @type {?}
 */
Lodop.prototype.GET_VALUE;
/**
 * 数据格式转换
 * @type {?}
 */
Lodop.prototype.FORMAT;
/**
 * 获得对话框结果值
 * @type {?}
 */
Lodop.prototype.GET_DIALOG_VALUE;
/**
 * (增强型)打印初始化
 * @type {?}
 */
Lodop.prototype.PRINT_INITA;
/**
 * (增强型)增加超文本打印项(图形模式)
 * @type {?}
 */
Lodop.prototype.ADD_PRINT_HTML;
/**
 * (增强型)增加表格打印项（URL模式）
 * @type {?}
 */
Lodop.prototype.ADD_PRINT_TBURL;
/**
 * (增强型)增加纯文本打印项
 * @type {?}
 */
Lodop.prototype.ADD_PRINT_TEXTA;
/**
 * (增强型)设置打印项风格A, 继承 `SET_PRINT_STYLE` 的所有属性
 * @type {?}
 */
Lodop.prototype.SET_PRINT_STYLEA;
/**
 * (增强型)导出数据到文件
 * @type {?}
 */
Lodop.prototype.SAVE_TO_FILE;
/**
 * (增强型)设置保存模式
 * @type {?}
 */
Lodop.prototype.SET_SAVE_MODE;
/**
 * (增强型)增加图形
 * @type {?}
 */
Lodop.prototype.ADD_PRINT_SHAPE;
/**
 * (增强型)指定打印设备
 * @type {?}
 */
Lodop.prototype.SET_PRINTER_INDEXA;
/**
 * (增强型)强制分页
 * @type {?}
 */
Lodop.prototype.NEWPAGEA;
/**
 * (增强型)打印预览A
 * @type {?}
 */
Lodop.prototype.PREVIEWA;
/**
 * (增强型)打印预览B
 * @type {?}
 */
Lodop.prototype.PREVIEWB;
/**
 * 直接打印A
 * @type {?}
 */
Lodop.prototype.PRINTA;
/**
 * 直接打印B
 * @type {?}
 */
Lodop.prototype.PRINTB;
/**
 * 显示图表
 * @type {?}
 */
Lodop.prototype.SHOW_CHART;
/**
 * 控制界面动作
 * @type {?}
 */
Lodop.prototype.DO_ACTION;
/**
 * 设置软件产品注册信息
 *
 * \@param strCompanyName 注册单位名称，用途与控件参数CompanyName一样。
 * \@param strLicense 主注册号，用途与控件参数License一样。
 * \@param strLicenseA 附加注册号A，用途与控件参数LicenseA一样。
 * \@param strLicenseB 附加注册号B，用途与控件参数LicenseB一样。
 * @type {?}
 */
Lodop.prototype.SET_LICENSES;
/** @type {?} */
Lodop.prototype.webskt;
/** @typedef {?} */
var LodopStyleValue;
export { LodopStyleValue };
/**
 * @record
 */
export function LodopResult() { }
/**
 * 是否成功
 * @type {?}
 */
LodopResult.prototype.ok;
/**
 * 错误码
 * @type {?|undefined}
 */
LodopResult.prototype.status;
/**
 * 成功时携带 LODOP 对象
 * @type {?|undefined}
 */
LodopResult.prototype.lodop;
/**
 * 错误信息
 * @type {?|undefined}
 */
LodopResult.prototype.error;
/**
 * @record
 */
export function LodopPrintResult() { }
/**
 * 是否成功
 * @type {?}
 */
LodopPrintResult.prototype.ok;
/**
 * 错误信息
 * @type {?|undefined}
 */
LodopPrintResult.prototype.error;
/**
 * 代码
 * @type {?}
 */
LodopPrintResult.prototype.code;
/**
 * 动态参数上下文对象
 * @type {?}
 */
LodopPrintResult.prototype.item;
/**
 * 代码解析表达式
 * @type {?|undefined}
 */
LodopPrintResult.prototype.parser;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9kb3AudHlwZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL2xvZG9wLyIsInNvdXJjZXMiOlsibG9kb3AudHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgQ0xvZG9wIHtcclxuICAvKiog5bu656uL5omT5Y2w5py65ZCN5Y2VICovXHJcbiAgQ3JlYXRlX1ByaW50ZXJfTGlzdChlbDogRWxlbWVudCk6IHZvaWQ7XHJcblxyXG4gIC8qKiDlu7rnq4vnurjlvKDnsbvlnovlkI3ljZUgKi9cclxuICBDcmVhdGVfUGFnZVNpemVfTGlzdChlbDogRWxlbWVudCwgaVByaW50SW5kZXg6IG51bWJlcik6IHZvaWQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIOWIpOaWreaYr+WQpuaUr+aMgWh0dHBz5Y2P6K6u55qE5bGe5oCnXHJcbiAgICpcclxuICAgKiAtIDAg5LiN5pSv5oyBXHJcbiAgICogLSAxIOaUr+aMgVxyXG4gICAqIC0gMiDmlK/mjIHkuJTlt7LlkK/liqjvvIhodHRwc+acjeWKoemcgOWNleeLrOWQr+WKqClcclxuICAgKi9cclxuICByZWFkb25seSBIVFRQU19TVEFUVVM6IG51bWJlcjtcclxuXHJcbiAgLyoqIOe7k+aenOWbnuiwg+WHveaVsCAqL1xyXG4gIE9uX1JldHVybjogKHRhc2tJRDogc3RyaW5nLCB2YWx1ZTogYm9vbGVhbiB8IHN0cmluZykgPT4gdm9pZDtcclxuXHJcbiAgLyoqIOe7k+aenOWbnuiwg+WHveaVsOS/neeVmSAqL1xyXG4gIHJlYWRvbmx5IE9uX1JldHVybl9SZW1haW46IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTG9kb3AgZXh0ZW5kcyBDTG9kb3Age1xyXG4gIFtrZXk6IHN0cmluZ106IGFueTtcclxuXHJcbiAgLyoqIOiOt+W+l+i9r+S7tueJiOacrOWPtyAqL1xyXG4gIFZFUlNJT046IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICog5omT5Y2w5Yid5aeL5YyW44CC5Yid5aeL5YyW6L+Q6KGM546v5aKD77yM5riF55CG5byC5bi45omT5Y2w6YGX55WZ55qE57O757uf6LWE5rqQ77yM6K6+5a6a5omT5Y2w5Lu75Yqh5ZCN44CCXHJcbiAgICpcclxuICAgKiAqKuW7uuiuruaIluimgeaxgu+8mioq6K+l5Ye95pWw5LiOUFJJTlRfSU5JVEHpg73mnInliJ3lp4vljJblip/og73vvIzmr4/kuKrmiZPljbDkuovliqHoh7PlsJHliJ3lp4vljJbkuIDmrKHvvIzlu7rorq7miZPljbDnqIvluo/pppblhYjosIPnlKjor6Xlh73mlbDjgILku7vliqHlkI3opoHlsL3ph4/ljLrliKvkuo7lhbblroPmiZPljbDku7vliqHvvIzorazlpoLnlKjigJxYWOWNleS9jV9YWOeuoeeQhuS/oeaBr+ezu+e7n19YWOWtkOezu+e7n19YWOaooeWdl19YWOaJk+WNsOS9nOS4muKAneWtl+agt+OAglxyXG4gICAqIOS4jeW4jOacm+acgOe7iOeUqOaIt+abtOaUueaJk+WNsOW4g+WxgOaXtu+8jOWImeiuvnN0clRhc2tOYW1l56m644CCXHJcbiAgICpcclxuICAgKiBAcGFyYW0gc3RyVGFza05hbWUg5omT5Y2w5Lu75Yqh5ZCNXHJcbiAgICogQHJldHVybnMg6L+U5Zue6YC76L6R55yf6KGo56S65Yid5aeL5YyW5oiQ5Yqf77yM6YC76L6R5YGH6KGo56S65Yid5aeL5YyW5aSx6LSl77yM5aSx6LSl5Y6f5Zug5pyJ77ya5YmN5LiA5Liq5omT5Y2w5LqL5Yqh5rKh5pyJ5a6M5oiQ77yb5pON5L2c57O757uf5rKh5pyJ5re75Yqg5omT5Y2w5py6KOmpseWKqCnnrYlcclxuICAgKi9cclxuICBQUklOVF9JTklUKHN0clRhc2tOYW1lOiBzdHJpbmcpOiBib29sZWFuO1xyXG5cclxuICAvKiog6K6+5a6a57q45byg5aSn5bCPICovXHJcbiAgU0VUX1BSSU5UX1BBR0VTSVpFKFxyXG4gICAgaW50T3JpZW50OiBudW1iZXIsXHJcbiAgICBQYWdlV2lkdGg6IG51bWJlciB8IHN0cmluZyxcclxuICAgIFBhZ2VIZWlnaHQ6IG51bWJlciB8IHN0cmluZyxcclxuICAgIHN0clBhZ2VOYW1lOiBzdHJpbmcsXHJcbiAgKTogdm9pZDtcclxuXHJcbiAgLyoqIOWinuWKoOi2heaWh+acrOaJk+WNsOmhuSjmma7pgJrmqKHlvI8pICovXHJcbiAgQUREX1BSSU5UX0hUTShcclxuICAgIFRvcDogbnVtYmVyIHwgc3RyaW5nLFxyXG4gICAgTGVmdDogbnVtYmVyIHwgc3RyaW5nLFxyXG4gICAgV2lkdGg6IG51bWJlciB8IHN0cmluZyxcclxuICAgIEhlaWdodDogbnVtYmVyIHwgc3RyaW5nLFxyXG4gICAgc3RySHRtbENvbnRlbnQ6IHN0cmluZyxcclxuICApOiB2b2lkO1xyXG5cclxuICAvKiog5aKe5Yqg6KGo5qC85omT5Y2w6aG577yI6LaF5paH5pys5qih5byP77yJKi9cclxuICBBRERfUFJJTlRfVEFCTEUoXHJcbiAgICBUb3A6IG51bWJlciB8IHN0cmluZyxcclxuICAgIExlZnQ6IG51bWJlciB8IHN0cmluZyxcclxuICAgIFdpZHRoOiBudW1iZXIgfCBzdHJpbmcsXHJcbiAgICBIZWlnaHQ6IG51bWJlciB8IHN0cmluZyxcclxuICAgIHN0ckh0bWw6IHN0cmluZyxcclxuICApOiB2b2lkO1xyXG5cclxuICAvKiog5aKe5Yqg6KGo5qC85omT5Y2w6aG577yI6LaF5paH5pys5qih5byP77yJKi9cclxuICBBRERfUFJJTlRfVEFCTEUoXHJcbiAgICBUb3A6IG51bWJlciB8IHN0cmluZyxcclxuICAgIExlZnQ6IG51bWJlciB8IHN0cmluZyxcclxuICAgIFdpZHRoOiBudW1iZXIgfCBzdHJpbmcsXHJcbiAgICBIZWlnaHQ6IG51bWJlciB8IHN0cmluZyxcclxuICAgIHN0ckh0bWw6IHN0cmluZyxcclxuICApOiB2b2lkO1xyXG5cclxuICAvKiog5aKe5Yqg6LaF5paH5pys5omT5Y2w6aG577yIVVJM5qih5byP77yJKi9cclxuICBBRERfUFJJTlRfVVJMKFxyXG4gICAgVG9wOiBudW1iZXIgfCBzdHJpbmcsXHJcbiAgICBMZWZ0OiBudW1iZXIgfCBzdHJpbmcsXHJcbiAgICBXaWR0aDogbnVtYmVyIHwgc3RyaW5nLFxyXG4gICAgSGVpZ2h0OiBudW1iZXIgfCBzdHJpbmcsXHJcbiAgICBzdHJVUkw6IHN0cmluZyxcclxuICApOiB2b2lkO1xyXG5cclxuICAvKiog5aKe5Yqg57qv5paH5pys5omT5Y2w6aG5ICovXHJcbiAgQUREX1BSSU5UX1RFWFQoXHJcbiAgICBUb3A6IG51bWJlciB8IHN0cmluZyxcclxuICAgIExlZnQ6IG51bWJlciB8IHN0cmluZyxcclxuICAgIFdpZHRoOiBudW1iZXIgfCBzdHJpbmcsXHJcbiAgICBIZWlnaHQ6IG51bWJlciB8IHN0cmluZyxcclxuICAgIHN0ckNvbnRlbnQ6IHN0cmluZyxcclxuICApOiB2b2lkO1xyXG5cclxuICAvKiog5aKe5Yqg5Zu+54mH5omT5Y2w6aG5ICovXHJcbiAgQUREX1BSSU5UX0lNQUdFKFxyXG4gICAgVG9wOiBudW1iZXIgfCBzdHJpbmcsXHJcbiAgICBMZWZ0OiBudW1iZXIgfCBzdHJpbmcsXHJcbiAgICBXaWR0aDogbnVtYmVyIHwgc3RyaW5nLFxyXG4gICAgSGVpZ2h0OiBudW1iZXIgfCBzdHJpbmcsXHJcbiAgICBzdHJIdG1sQ29udGVudDogc3RyaW5nLFxyXG4gICk6IHZvaWQ7XHJcblxyXG4gIC8qKiDlop7liqDnn6nlvaLnur8gKi9cclxuICBBRERfUFJJTlRfUkVDVChcclxuICAgIFRvcDogbnVtYmVyIHwgc3RyaW5nLFxyXG4gICAgTGVmdDogbnVtYmVyIHwgc3RyaW5nLFxyXG4gICAgV2lkdGg6IG51bWJlciB8IHN0cmluZyxcclxuICAgIEhlaWdodDogbnVtYmVyIHwgc3RyaW5nLFxyXG4gICAgaW50TGluZVN0eWxlOiBudW1iZXIsXHJcbiAgICBpbnRMaW5lV2lkdGg6IG51bWJlcixcclxuICApOiB2b2lkO1xyXG5cclxuICAvKiog5aKe5Yqg5qSt5ZyG57q/ICovXHJcbiAgQUREX1BSSU5UX0VMTElQU0UoXHJcbiAgICBUb3A6IG51bWJlciB8IHN0cmluZyxcclxuICAgIExlZnQ6IG51bWJlciB8IHN0cmluZyxcclxuICAgIFdpZHRoOiBudW1iZXIgfCBzdHJpbmcsXHJcbiAgICBIZWlnaHQ6IG51bWJlciB8IHN0cmluZyxcclxuICAgIGludExpbmVTdHlsZTogbnVtYmVyLFxyXG4gICAgaW50TGluZVdpZHRoOiBudW1iZXIsXHJcbiAgKTogdm9pZDtcclxuXHJcbiAgLyoqIOWinuWKoOebtOe6vyAqL1xyXG4gIEFERF9QUklOVF9MSU5FKFxyXG4gICAgVG9wMTogbnVtYmVyIHwgc3RyaW5nLFxyXG4gICAgTGVmdDE6IG51bWJlciB8IHN0cmluZyxcclxuICAgIFRvcDI6IG51bWJlciB8IHN0cmluZyxcclxuICAgIExlZnQyOiBudW1iZXIgfCBzdHJpbmcsXHJcbiAgICBpbnRMaW5lU3R5bGU6IG51bWJlcixcclxuICAgIGludExpbmVXaWR0aDogbnVtYmVyLFxyXG4gICk6IHZvaWQ7XHJcblxyXG4gIC8qKiDlop7liqDmnaHlvaLnoIEgKi9cclxuICBBRERfUFJJTlRfQkFSQ09ERShcclxuICAgIFRvcDogbnVtYmVyIHwgc3RyaW5nLFxyXG4gICAgTGVmdDogbnVtYmVyIHwgc3RyaW5nLFxyXG4gICAgV2lkdGg6IG51bWJlciB8IHN0cmluZyxcclxuICAgIEhlaWdodDogbnVtYmVyIHwgc3RyaW5nLFxyXG4gICAgQ29kZVR5cGU6IHN0cmluZyxcclxuICAgIENvZGVWYWx1ZTogc3RyaW5nLFxyXG4gICk6IHZvaWQ7XHJcblxyXG4gIC8qKiDlop7liqDlm77ooaggKi9cclxuICBBRERfUFJJTlRfQ0hBUlQoXHJcbiAgICBUb3A6IG51bWJlciB8IHN0cmluZyxcclxuICAgIExlZnQ6IG51bWJlciB8IHN0cmluZyxcclxuICAgIFdpZHRoOiBudW1iZXIgfCBzdHJpbmcsXHJcbiAgICBIZWlnaHQ6IG51bWJlciB8IHN0cmluZyxcclxuICAgIENoYXJ0VHlwZTogbnVtYmVyLFxyXG4gICAgc3RySHRtbDogc3RyaW5nLFxyXG4gICk6IHZvaWQ7XHJcblxyXG4gIC8qKiDoo4Xovb3mlofmoaPlvI/mqKHmnb8gKi9cclxuICBBRERfUFJJTlRfREFUQShzdHJEYXRhU3R5bGU6IHN0cmluZywgdmFyRGF0YVZhbHVlOiBhbnkpOiB2b2lkO1xyXG5cclxuICAvKiog6K6+572u5omT5Y2w6aG56aOO5qC8ICovXHJcbiAgU0VUX1BSSU5UX1NUWUxFKFxyXG4gICAgc3RyU3R5bGVOYW1lOiBMb2RvcFN0eWxlVmFsdWUsXHJcbiAgICB2YXJTdHlsZVZhbHVlOiBudW1iZXIgfCBzdHJpbmcsXHJcbiAgKTogdm9pZDtcclxuXHJcbiAgLyoqIOaJk+WNsOmihOiniCAqL1xyXG4gIFBSRVZJRVcoKTogbnVtYmVyO1xyXG5cclxuICAvKiog55u05o6l5omT5Y2wICovXHJcbiAgUFJJTlQoKTogc3RyaW5nO1xyXG5cclxuICAvKiog5omT5Y2w57u05oqkICovXHJcbiAgUFJJTlRfU0VUVVAoKTogc3RyaW5nO1xyXG5cclxuICAvKiog5omT5Y2w6K6+6K6hICovXHJcbiAgUFJJTlRfREVTSUdOKCk6IHN0cmluZztcclxuXHJcbiAgLyoqIOW8uuWItuWIhumhtSAqL1xyXG4gIE5FV1BBR0UoKTogYm9vbGVhbjtcclxuXHJcbiAgLyoqIOiOt+W+l+aJk+WNsOiuvuWkh+S4quaVsCAqL1xyXG4gIEdFVF9QUklOVEVSX0NPVU5UKCk6IG51bWJlcjtcclxuXHJcbiAgLyoqIOiOt+W+l+aJk+WNsOiuvuWkh+WQjeensCAqL1xyXG4gIEdFVF9QUklOVEVSX05BTUUoc3RyUHJpbnRlcklEYW5kVHlwZTogbnVtYmVyIHwgc3RyaW5nKTogc3RyaW5nO1xyXG5cclxuICAvKiog5oyH5a6a5omT5Y2w6K6+5aSHICovXHJcbiAgU0VUX1BSSU5URVJfSU5ERVgob0luZGV4T3JOYW1lOiBudW1iZXIgfCBzdHJpbmcpOiBib29sZWFuO1xyXG4gIC8qKiDjgJBDTG9kb3DjgJHmjIflrprmiZPljbDmnLogKi9cclxuICBTRVRfUFJJTlRFUl9JTkRFWChcclxuICAgIERyaXZlckluZGV4OiBudW1iZXIgfCBzdHJpbmcsXHJcbiAgICBQcmludGVySURhbmROYW1lOiBudW1iZXIgfCBzdHJpbmcsXHJcbiAgICBTdWJEZXZJbmRleDogbnVtYmVyIHwgc3RyaW5nLFxyXG4gICk6IGJvb2xlYW47XHJcblxyXG4gIC8qKiDpgInmi6nmiZPljbDorr7lpIcgKi9cclxuICBTRUxFQ1RfUFJJTlRFUigpOiBudW1iZXI7XHJcblxyXG4gIC8qKiDorr7nva7mmL7npLrmqKHlvI8gKi9cclxuICBTRVRfU0hPV19NT0RFKHN0ck1vZGVUeXBlOiBzdHJpbmcsIHZhck1vZGVWYWx1ZTogbnVtYmVyIHwgc3RyaW5nKTogYm9vbGVhbjtcclxuXHJcbiAgLyoqIOiuvue9ruaJk+WNsOaooeW8jyAqL1xyXG4gIFNFVF9QUklOVF9NT0RFKFxyXG4gICAgc3RyTW9kZVR5cGU6IHN0cmluZyxcclxuICAgIHZhck1vZGVWYWx1ZTogbnVtYmVyIHwgc3RyaW5nLFxyXG4gICk6IGJvb2xlYW4gfCBzdHJpbmc7XHJcblxyXG4gIC8qKiDorr7nva7miZPljbDku73mlbAgKi9cclxuICBTRVRfUFJJTlRfQ09QSUVTKGludENvcGllczogbnVtYmVyKTogYm9vbGVhbjtcclxuXHJcbiAgLyoqIOiuvue9rumihOiniOeql+WPoyAqL1xyXG4gIFNFVF9QUkVWSUVXX1dJTkRPVyhcclxuICAgIGludERpc3BNb2RlOiBudW1iZXIsXHJcbiAgICBpbnRUb29sTW9kZTogbnVtYmVyLFxyXG4gICAgYmxEaXJlY3RQcmludDogbnVtYmVyLFxyXG4gICAgaW5XaWR0aDogbnVtYmVyLFxyXG4gICAgaW50SGVpZ2h0OiBudW1iZXIsXHJcbiAgICBzdHJUaXRsZUJ1dHRvbkNhcHRvaW46IHN0cmluZyxcclxuICApOiB2b2lkO1xyXG5cclxuICAvKiog5oyH5a6a6IOM5pmv5Zu+ICovXHJcbiAgQUREX1BSSU5UX1NFVFVQX0JLSU1HKHN0ckltZ0h0bWw6IHN0cmluZyk6IHZvaWQ7XHJcblxyXG4gIC8qKiDlj5HpgIHljp/lp4vmlbDmja4gKi9cclxuICBTRU5EX1BSSU5UX1JBV0RBVEEoc3RyUmF3RGF0YTogc3RyaW5nKTogYm9vbGVhbjtcclxuXHJcbiAgLyoqIOWGmeerr+WPo+aVsOaNriAqL1xyXG4gIFdSSVRFX1BPUlRfREFUQShzdHJQb3J0TmFtZTogc3RyaW5nLCBzdHJEYXRhOiBzdHJpbmcpOiBib29sZWFuO1xyXG5cclxuICAvKiog6K+756uv5Y+j5pWw5o2uICovXHJcbiAgUkVBRF9QT1JUX0RBVEEoc3RyUG9ydE5hbWU6IHN0cmluZyk6IHN0cmluZztcclxuXHJcbiAgLyoqIOiOt+W+l+mFjee9ruaWh+S7tuWQjSAqL1xyXG4gIEdFVF9QUklOVF9JTklGRk5BTUUoc3RyUHJpbnRUYXNrOiBzdHJpbmcpOiBzdHJpbmc7XHJcblxyXG4gIC8qKiDojrflvpfnurjlvKDnsbvlnovlkI3muIXljZUgKi9cclxuICBHRVRfUEFHRVNJWkVTX0xJU1Qob1ByaW50ZXJOYW1lOiBudW1iZXIgfCBzdHJpbmcsIHN0clNwbGl0OiBzdHJpbmcpOiBzdHJpbmc7XHJcblxyXG4gIC8qKiDlhpnmnKzlnLDmlofku7blhoXlrrkgKi9cclxuICBXUklURV9GSUxFX1RFWFQoXHJcbiAgICBpbnRXcml0ZU1vZGU6IG51bWJlciB8IHN0cmluZyxcclxuICAgIHN0ckZpbGVOYW1lOiBzdHJpbmcsXHJcbiAgICBzdHJUZXh0OiBzdHJpbmcsXHJcbiAgKTogc3RyaW5nO1xyXG5cclxuICAvKiog6K+75pys5Zyw5paH5Lu25YaF5a65ICovXHJcbiAgR0VUX0ZJTEVfVEVYVChzdHJGaWxlTmFtZTogc3RyaW5nKTogc3RyaW5nIHwgbnVsbDtcclxuXHJcbiAgLyoqIOivu+acrOWcsOaWh+S7tuaXtumXtCAqL1xyXG4gIEdFVF9GSUxFX1RJTUUoc3RyRmlsZU5hbWU6IHN0cmluZyk6IHN0cmluZyB8IG51bGw7XHJcblxyXG4gIC8qKiDliKTmlq3mnKzlnLDmlofku7bmmK/lkKblrZjlnKggKi9cclxuICBJU19GSUxFX0VYSVNUKHN0ckZpbGVOYW1lOiBzdHJpbmcpOiBib29sZWFuO1xyXG5cclxuICAvKiog6I635b6X57O757uf5L+h5oGvICovXHJcbiAgR0VUX1NZU1RFTV9JTkZPKHN0ckluZm9UeXBlOiBzdHJpbmcpOiBib29sZWFuO1xyXG5cclxuICAvKiog6I635b6X5pWw5o2u5YC8ICovXHJcbiAgR0VUX1ZBTFVFKFZhbHVlVHlwZTogc3RyaW5nLCBWYWx1ZUluZGV4OiBudW1iZXIgfCBzdHJpbmcpOiBhbnk7XHJcblxyXG4gIC8qKiDmlbDmja7moLzlvI/ovazmjaIgKi9cclxuICBGT1JNQVQob1R5cGU6IHN0cmluZywgb1ZhbHVlOiBhbnkpOiBhbnk7XHJcblxyXG4gIC8qKiDojrflvpflr7nor53moYbnu5PmnpzlgLwgKi9cclxuICBHRVRfRElBTE9HX1ZBTFVFKG9UeXBlOiBzdHJpbmcsIG9QcmVWYWx1ZTogc3RyaW5nKTogc3RyaW5nO1xyXG5cclxuICAvKiogKOWinuW8uuWeiynmiZPljbDliJ3lp4vljJYgKi9cclxuICBQUklOVF9JTklUQShcclxuICAgIFRvcDogbnVtYmVyIHwgc3RyaW5nLFxyXG4gICAgTGVmdDogbnVtYmVyIHwgc3RyaW5nLFxyXG4gICAgV2lkdGg6IG51bWJlciB8IHN0cmluZyxcclxuICAgIEhlaWdodDogbnVtYmVyIHwgc3RyaW5nLFxyXG4gICAgc3RyUHJpbnROYW1lOiBzdHJpbmcsXHJcbiAgKTogYm9vbGVhbjtcclxuXHJcbiAgLyoqICjlop7lvLrlnosp5aKe5Yqg6LaF5paH5pys5omT5Y2w6aG5KOWbvuW9ouaooeW8jykgKi9cclxuICBBRERfUFJJTlRfSFRNTChcclxuICAgIFRvcDogbnVtYmVyIHwgc3RyaW5nLFxyXG4gICAgTGVmdDogbnVtYmVyIHwgc3RyaW5nLFxyXG4gICAgV2lkdGg6IG51bWJlciB8IHN0cmluZyxcclxuICAgIEhlaWdodDogbnVtYmVyIHwgc3RyaW5nLFxyXG4gICAgc3RySHRtbENvbnRlbnQ6IHN0cmluZyxcclxuICApOiB2b2lkO1xyXG5cclxuICAvKiogKOWinuW8uuWeiynlop7liqDooajmoLzmiZPljbDpobnvvIhVUkzmqKHlvI/vvIkgKi9cclxuICBBRERfUFJJTlRfVEJVUkwoXHJcbiAgICBUb3A6IG51bWJlciB8IHN0cmluZyxcclxuICAgIExlZnQ6IG51bWJlciB8IHN0cmluZyxcclxuICAgIFdpZHRoOiBudW1iZXIgfCBzdHJpbmcsXHJcbiAgICBIZWlnaHQ6IG51bWJlciB8IHN0cmluZyxcclxuICAgIHN0clVSTDogc3RyaW5nLFxyXG4gICk6IHZvaWQ7XHJcblxyXG4gIC8qKiAo5aKe5by65Z6LKeWinuWKoOe6r+aWh+acrOaJk+WNsOmhuSAqL1xyXG4gIEFERF9QUklOVF9URVhUQShcclxuICAgIFRvcDogbnVtYmVyIHwgc3RyaW5nLFxyXG4gICAgTGVmdDogbnVtYmVyIHwgc3RyaW5nLFxyXG4gICAgV2lkdGg6IG51bWJlciB8IHN0cmluZyxcclxuICAgIEhlaWdodDogbnVtYmVyIHwgc3RyaW5nLFxyXG4gICAgc3RyQ29udGVudDogc3RyaW5nLFxyXG4gICk6IHZvaWQ7XHJcblxyXG4gIC8qKiAo5aKe5by65Z6LKeiuvue9ruaJk+WNsOmhuemjjuagvEEsIOe7p+aJvyBgU0VUX1BSSU5UX1NUWUxFYCDnmoTmiYDmnInlsZ7mgKcgKi9cclxuICBTRVRfUFJJTlRfU1RZTEVBKFxyXG4gICAgdmFySXRlbU5hbWVJRDogbnVtYmVyIHwgc3RyaW5nLFxyXG4gICAgc3RyU3R5bGVOYW1lOiBzdHJpbmcsXHJcbiAgICB2YXJTdHlsZVZhbHVlOiBudW1iZXIgfCBzdHJpbmcsXHJcbiAgKTogdm9pZDtcclxuXHJcbiAgLyoqICjlop7lvLrlnosp5a+85Ye65pWw5o2u5Yiw5paH5Lu2ICovXHJcbiAgU0FWRV9UT19GSUxFKHN0ckZpbGVOYW1lOiBzdHJpbmcpOiBib29sZWFuO1xyXG5cclxuICAvKiogKOWinuW8uuWeiynorr7nva7kv53lrZjmqKHlvI8gKi9cclxuICBTRVRfU0FWRV9NT0RFKHZhck1vZGVOYW1lOiBzdHJpbmcsIHZhck1vZGVWYWx1ZTogbnVtYmVyIHwgc3RyaW5nKTogYm9vbGVhbjtcclxuXHJcbiAgLyoqICjlop7lvLrlnosp5aKe5Yqg5Zu+5b2iICovXHJcbiAgQUREX1BSSU5UX1NIQVBFKFxyXG4gICAgaW50U2hhcGVUeXBlOiBudW1iZXIsXHJcbiAgICBUb3A6IG51bWJlciB8IHN0cmluZyxcclxuICAgIExlZnQ6IG51bWJlciB8IHN0cmluZyxcclxuICAgIFdpZHRoOiBudW1iZXIgfCBzdHJpbmcsXHJcbiAgICBIZWlnaHQ6IG51bWJlciB8IHN0cmluZyxcclxuICAgIGludExpbmVTdHlsZTogbnVtYmVyLFxyXG4gICAgaW50TGluZVdpZHRoOiBudW1iZXIsXHJcbiAgICB2YXJDb2xvcjogbnVtYmVyIHwgc3RyaW5nLFxyXG4gICk6IHZvaWQ7XHJcblxyXG4gIC8qKiAo5aKe5by65Z6LKeaMh+WumuaJk+WNsOiuvuWkhyAqL1xyXG4gIFNFVF9QUklOVEVSX0lOREVYQShvSW5kZXhPck5hbWU6IG51bWJlciB8IHN0cmluZyk6IGJvb2xlYW47XHJcblxyXG4gIC8qKiAo5aKe5by65Z6LKeW8uuWItuWIhumhtSAqL1xyXG4gIE5FV1BBR0VBKCk6IGJvb2xlYW47XHJcblxyXG4gIC8qKiAo5aKe5by65Z6LKeaJk+WNsOmihOiniEEgKi9cclxuICBQUkVWSUVXQSgpOiBudW1iZXI7XHJcblxyXG4gIC8qKiAo5aKe5by65Z6LKeaJk+WNsOmihOiniEIgKi9cclxuICBQUkVWSUVXQigpOiBudW1iZXI7XHJcblxyXG4gIC8qKiDnm7TmjqXmiZPljbBBICovXHJcbiAgUFJJTlRBKCk6IGJvb2xlYW47XHJcblxyXG4gIC8qKiDnm7TmjqXmiZPljbBCICovXHJcbiAgUFJJTlRCKCk6IGJvb2xlYW47XHJcblxyXG4gIC8qKiDmmL7npLrlm77ooaggKi9cclxuICBTSE9XX0NIQVJUKCk6IHZvaWQ7XHJcblxyXG4gIC8qKiDmjqfliLbnlYzpnaLliqjkvZwgKi9cclxuICBET19BQ1RJT04oQWN0TmFtZTogc3RyaW5nLCBBY3RWYWx1ZTogbnVtYmVyIHwgc3RyaW5nKTogdm9pZDtcclxuXHJcbiAgLyoqXHJcbiAgICog6K6+572u6L2v5Lu25Lqn5ZOB5rOo5YaM5L+h5oGvXHJcbiAgICpcclxuICAgKiBAcGFyYW0gIHN0ckNvbXBhbnlOYW1lIOazqOWGjOWNleS9jeWQjeensO+8jOeUqOmAlOS4juaOp+S7tuWPguaVsENvbXBhbnlOYW1l5LiA5qC344CCXHJcbiAgICogQHBhcmFtICBzdHJMaWNlbnNlIOS4u+azqOWGjOWPt++8jOeUqOmAlOS4juaOp+S7tuWPguaVsExpY2Vuc2XkuIDmoLfjgIJcclxuICAgKiBAcGFyYW0gIHN0ckxpY2Vuc2VBIOmZhOWKoOazqOWGjOWPt0HvvIznlKjpgJTkuI7mjqfku7blj4LmlbBMaWNlbnNlQeS4gOagt+OAglxyXG4gICAqIEBwYXJhbSAgc3RyTGljZW5zZUIg6ZmE5Yqg5rOo5YaM5Y+3Qu+8jOeUqOmAlOS4juaOp+S7tuWPguaVsExpY2Vuc2VC5LiA5qC344CCXHJcbiAgICovXHJcbiAgU0VUX0xJQ0VOU0VTKFxyXG4gICAgc3RyQ29tcGFueU5hbWU6IHN0cmluZyxcclxuICAgIHN0ckxpY2Vuc2U6IHN0cmluZyxcclxuICAgIHN0ckxpY2Vuc2VBPzogc3RyaW5nLFxyXG4gICAgc3RyTGljZW5zZUI/OiBzdHJpbmcsXHJcbiAgKTogdm9pZDtcclxuXHJcbiAgd2Vic2t0OiBXZWJTb2NrZXQ7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIExvZG9wU3R5bGVWYWx1ZSA9XHJcbiAgfCAnRm9udE5hbWUnXHJcbiAgfCAnRm9udFNpemUnXHJcbiAgfCAnRm9udENvbG9yJ1xyXG4gIHwgJ0JvbGQnXHJcbiAgfCAnSXRhbGljJ1xyXG4gIHwgJ1VuZGVybGluZSdcclxuICB8ICdBbGlnbm1lbnQnXHJcbiAgfCAnQW5nbGUnXHJcbiAgfCAnSXRlbVR5cGUnXHJcbiAgfCAnSE9yaWVudCdcclxuICB8ICdWT3JpZW50J1xyXG4gIHwgJ1BlbldpZHRoJ1xyXG4gIHwgJ1BlblN0eWxlJ1xyXG4gIHwgJ1N0cmV0Y2gnXHJcbiAgfCAnUHJldmlld09ubHknXHJcbiAgfCAnUmVhZE9ubHknO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMb2RvcFJlc3VsdCB7XHJcbiAgLyoqIOaYr+WQpuaIkOWKnyAqL1xyXG4gIG9rOiBib29sZWFuO1xyXG4gIC8qKiDplJnor6/noIEgKi9cclxuICBzdGF0dXM/OiBzdHJpbmc7XHJcbiAgLyoqIOaIkOWKn+aXtuaQuuW4piBMT0RPUCDlr7nosaEgKi9cclxuICBsb2RvcD86IExvZG9wO1xyXG4gIC8qKiDplJnor6/kv6Hmga8gKi9cclxuICBlcnJvcj86IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMb2RvcFByaW50UmVzdWx0IHtcclxuICAvKiog5piv5ZCm5oiQ5YqfICovXHJcbiAgb2s6IGJvb2xlYW47XHJcbiAgLyoqIOmUmeivr+S/oeaBryAqL1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG4gIC8qKiDku6PnoIEgKi9cclxuICBjb2RlOiBzdHJpbmc7XHJcbiAgLyoqIOWKqOaAgeWPguaVsOS4iuS4i+aWh+WvueixoSAqL1xyXG4gIGl0ZW06IGFueTtcclxuICAvKiog5Luj56CB6Kej5p6Q6KGo6L6+5byPICovXHJcbiAgcGFyc2VyPzogUmVnRXhwO1xyXG59XHJcbiJdfQ==