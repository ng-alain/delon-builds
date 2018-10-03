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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9kb3AudHlwZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL2xvZG9wLyIsInNvdXJjZXMiOlsibG9kb3AudHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgQ0xvZG9wIHtcbiAgLyoqIOW7uueri+aJk+WNsOacuuWQjeWNlSAqL1xuICBDcmVhdGVfUHJpbnRlcl9MaXN0KGVsOiBFbGVtZW50KTogdm9pZDtcblxuICAvKiog5bu656uL57q45byg57G75Z6L5ZCN5Y2VICovXG4gIENyZWF0ZV9QYWdlU2l6ZV9MaXN0KGVsOiBFbGVtZW50LCBpUHJpbnRJbmRleDogbnVtYmVyKTogdm9pZDtcblxuICAvKipcbiAgICog5Yik5pat5piv5ZCm5pSv5oyBaHR0cHPljY/orq7nmoTlsZ7mgKdcbiAgICpcbiAgICogLSAwIOS4jeaUr+aMgVxuICAgKiAtIDEg5pSv5oyBXG4gICAqIC0gMiDmlK/mjIHkuJTlt7LlkK/liqjvvIhodHRwc+acjeWKoemcgOWNleeLrOWQr+WKqClcbiAgICovXG4gIHJlYWRvbmx5IEhUVFBTX1NUQVRVUzogbnVtYmVyO1xuXG4gIC8qKiDnu5Pmnpzlm57osIPlh73mlbAgKi9cbiAgT25fUmV0dXJuOiAodGFza0lEOiBzdHJpbmcsIHZhbHVlOiBib29sZWFuIHwgc3RyaW5nKSA9PiB2b2lkO1xuXG4gIC8qKiDnu5Pmnpzlm57osIPlh73mlbDkv53nlZkgKi9cbiAgcmVhZG9ubHkgT25fUmV0dXJuX1JlbWFpbjogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2RvcCBleHRlbmRzIENMb2RvcCB7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcblxuICAvKiog6I635b6X6L2v5Lu254mI5pys5Y+3ICovXG4gIFZFUlNJT046IHN0cmluZztcblxuICAvKipcbiAgICog5omT5Y2w5Yid5aeL5YyW44CC5Yid5aeL5YyW6L+Q6KGM546v5aKD77yM5riF55CG5byC5bi45omT5Y2w6YGX55WZ55qE57O757uf6LWE5rqQ77yM6K6+5a6a5omT5Y2w5Lu75Yqh5ZCN44CCXG4gICAqXG4gICAqICoq5bu66K6u5oiW6KaB5rGC77yaKiror6Xlh73mlbDkuI5QUklOVF9JTklUQemDveacieWIneWni+WMluWKn+iDve+8jOavj+S4quaJk+WNsOS6i+WKoeiHs+WwkeWIneWni+WMluS4gOasoe+8jOW7uuiuruaJk+WNsOeoi+W6j+mmluWFiOiwg+eUqOivpeWHveaVsOOAguS7u+WKoeWQjeimgeWwvemHj+WMuuWIq+S6juWFtuWug+aJk+WNsOS7u+WKoe+8jOitrOWmgueUqOKAnFhY5Y2V5L2NX1hY566h55CG5L+h5oGv57O757ufX1hY5a2Q57O757ufX1hY5qih5Z2XX1hY5omT5Y2w5L2c5Lia4oCd5a2X5qC344CCXG4gICAqIOS4jeW4jOacm+acgOe7iOeUqOaIt+abtOaUueaJk+WNsOW4g+WxgOaXtu+8jOWImeiuvnN0clRhc2tOYW1l56m644CCXG4gICAqXG4gICAqIEBwYXJhbSBzdHJUYXNrTmFtZSDmiZPljbDku7vliqHlkI1cbiAgICogQHJldHVybnMg6L+U5Zue6YC76L6R55yf6KGo56S65Yid5aeL5YyW5oiQ5Yqf77yM6YC76L6R5YGH6KGo56S65Yid5aeL5YyW5aSx6LSl77yM5aSx6LSl5Y6f5Zug5pyJ77ya5YmN5LiA5Liq5omT5Y2w5LqL5Yqh5rKh5pyJ5a6M5oiQ77yb5pON5L2c57O757uf5rKh5pyJ5re75Yqg5omT5Y2w5py6KOmpseWKqCnnrYlcbiAgICovXG4gIFBSSU5UX0lOSVQoc3RyVGFza05hbWU6IHN0cmluZyk6IGJvb2xlYW47XG5cbiAgLyoqIOiuvuWumue6uOW8oOWkp+WwjyAqL1xuICBTRVRfUFJJTlRfUEFHRVNJWkUoXG4gICAgaW50T3JpZW50OiBudW1iZXIsXG4gICAgUGFnZVdpZHRoOiBudW1iZXIgfCBzdHJpbmcsXG4gICAgUGFnZUhlaWdodDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIHN0clBhZ2VOYW1lOiBzdHJpbmcsXG4gICk6IHZvaWQ7XG5cbiAgLyoqIOWinuWKoOi2heaWh+acrOaJk+WNsOmhuSjmma7pgJrmqKHlvI8pICovXG4gIEFERF9QUklOVF9IVE0oXG4gICAgVG9wOiBudW1iZXIgfCBzdHJpbmcsXG4gICAgTGVmdDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIFdpZHRoOiBudW1iZXIgfCBzdHJpbmcsXG4gICAgSGVpZ2h0OiBudW1iZXIgfCBzdHJpbmcsXG4gICAgc3RySHRtbENvbnRlbnQ6IHN0cmluZyxcbiAgKTogdm9pZDtcblxuICAvKiog5aKe5Yqg6KGo5qC85omT5Y2w6aG577yI6LaF5paH5pys5qih5byP77yJKi9cbiAgQUREX1BSSU5UX1RBQkxFKFxuICAgIFRvcDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIExlZnQ6IG51bWJlciB8IHN0cmluZyxcbiAgICBXaWR0aDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIEhlaWdodDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIHN0ckh0bWw6IHN0cmluZyxcbiAgKTogdm9pZDtcblxuICAvKiog5aKe5Yqg6KGo5qC85omT5Y2w6aG577yI6LaF5paH5pys5qih5byP77yJKi9cbiAgQUREX1BSSU5UX1RBQkxFKFxuICAgIFRvcDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIExlZnQ6IG51bWJlciB8IHN0cmluZyxcbiAgICBXaWR0aDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIEhlaWdodDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIHN0ckh0bWw6IHN0cmluZyxcbiAgKTogdm9pZDtcblxuICAvKiog5aKe5Yqg6LaF5paH5pys5omT5Y2w6aG577yIVVJM5qih5byP77yJKi9cbiAgQUREX1BSSU5UX1VSTChcbiAgICBUb3A6IG51bWJlciB8IHN0cmluZyxcbiAgICBMZWZ0OiBudW1iZXIgfCBzdHJpbmcsXG4gICAgV2lkdGg6IG51bWJlciB8IHN0cmluZyxcbiAgICBIZWlnaHQ6IG51bWJlciB8IHN0cmluZyxcbiAgICBzdHJVUkw6IHN0cmluZyxcbiAgKTogdm9pZDtcblxuICAvKiog5aKe5Yqg57qv5paH5pys5omT5Y2w6aG5ICovXG4gIEFERF9QUklOVF9URVhUKFxuICAgIFRvcDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIExlZnQ6IG51bWJlciB8IHN0cmluZyxcbiAgICBXaWR0aDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIEhlaWdodDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIHN0ckNvbnRlbnQ6IHN0cmluZyxcbiAgKTogdm9pZDtcblxuICAvKiog5aKe5Yqg5Zu+54mH5omT5Y2w6aG5ICovXG4gIEFERF9QUklOVF9JTUFHRShcbiAgICBUb3A6IG51bWJlciB8IHN0cmluZyxcbiAgICBMZWZ0OiBudW1iZXIgfCBzdHJpbmcsXG4gICAgV2lkdGg6IG51bWJlciB8IHN0cmluZyxcbiAgICBIZWlnaHQ6IG51bWJlciB8IHN0cmluZyxcbiAgICBzdHJIdG1sQ29udGVudDogc3RyaW5nLFxuICApOiB2b2lkO1xuXG4gIC8qKiDlop7liqDnn6nlvaLnur8gKi9cbiAgQUREX1BSSU5UX1JFQ1QoXG4gICAgVG9wOiBudW1iZXIgfCBzdHJpbmcsXG4gICAgTGVmdDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIFdpZHRoOiBudW1iZXIgfCBzdHJpbmcsXG4gICAgSGVpZ2h0OiBudW1iZXIgfCBzdHJpbmcsXG4gICAgaW50TGluZVN0eWxlOiBudW1iZXIsXG4gICAgaW50TGluZVdpZHRoOiBudW1iZXIsXG4gICk6IHZvaWQ7XG5cbiAgLyoqIOWinuWKoOakreWchue6vyAqL1xuICBBRERfUFJJTlRfRUxMSVBTRShcbiAgICBUb3A6IG51bWJlciB8IHN0cmluZyxcbiAgICBMZWZ0OiBudW1iZXIgfCBzdHJpbmcsXG4gICAgV2lkdGg6IG51bWJlciB8IHN0cmluZyxcbiAgICBIZWlnaHQ6IG51bWJlciB8IHN0cmluZyxcbiAgICBpbnRMaW5lU3R5bGU6IG51bWJlcixcbiAgICBpbnRMaW5lV2lkdGg6IG51bWJlcixcbiAgKTogdm9pZDtcblxuICAvKiog5aKe5Yqg55u057q/ICovXG4gIEFERF9QUklOVF9MSU5FKFxuICAgIFRvcDE6IG51bWJlciB8IHN0cmluZyxcbiAgICBMZWZ0MTogbnVtYmVyIHwgc3RyaW5nLFxuICAgIFRvcDI6IG51bWJlciB8IHN0cmluZyxcbiAgICBMZWZ0MjogbnVtYmVyIHwgc3RyaW5nLFxuICAgIGludExpbmVTdHlsZTogbnVtYmVyLFxuICAgIGludExpbmVXaWR0aDogbnVtYmVyLFxuICApOiB2b2lkO1xuXG4gIC8qKiDlop7liqDmnaHlvaLnoIEgKi9cbiAgQUREX1BSSU5UX0JBUkNPREUoXG4gICAgVG9wOiBudW1iZXIgfCBzdHJpbmcsXG4gICAgTGVmdDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIFdpZHRoOiBudW1iZXIgfCBzdHJpbmcsXG4gICAgSGVpZ2h0OiBudW1iZXIgfCBzdHJpbmcsXG4gICAgQ29kZVR5cGU6IHN0cmluZyxcbiAgICBDb2RlVmFsdWU6IHN0cmluZyxcbiAgKTogdm9pZDtcblxuICAvKiog5aKe5Yqg5Zu+6KGoICovXG4gIEFERF9QUklOVF9DSEFSVChcbiAgICBUb3A6IG51bWJlciB8IHN0cmluZyxcbiAgICBMZWZ0OiBudW1iZXIgfCBzdHJpbmcsXG4gICAgV2lkdGg6IG51bWJlciB8IHN0cmluZyxcbiAgICBIZWlnaHQ6IG51bWJlciB8IHN0cmluZyxcbiAgICBDaGFydFR5cGU6IG51bWJlcixcbiAgICBzdHJIdG1sOiBzdHJpbmcsXG4gICk6IHZvaWQ7XG5cbiAgLyoqIOijhei9veaWh+aho+W8j+aooeadvyAqL1xuICBBRERfUFJJTlRfREFUQShzdHJEYXRhU3R5bGU6IHN0cmluZywgdmFyRGF0YVZhbHVlOiBhbnkpOiB2b2lkO1xuXG4gIC8qKiDorr7nva7miZPljbDpobnpo47moLwgKi9cbiAgU0VUX1BSSU5UX1NUWUxFKFxuICAgIHN0clN0eWxlTmFtZTogTG9kb3BTdHlsZVZhbHVlLFxuICAgIHZhclN0eWxlVmFsdWU6IG51bWJlciB8IHN0cmluZyxcbiAgKTogdm9pZDtcblxuICAvKiog5omT5Y2w6aKE6KeIICovXG4gIFBSRVZJRVcoKTogbnVtYmVyO1xuXG4gIC8qKiDnm7TmjqXmiZPljbAgKi9cbiAgUFJJTlQoKTogc3RyaW5nO1xuXG4gIC8qKiDmiZPljbDnu7TmiqQgKi9cbiAgUFJJTlRfU0VUVVAoKTogc3RyaW5nO1xuXG4gIC8qKiDmiZPljbDorr7orqEgKi9cbiAgUFJJTlRfREVTSUdOKCk6IHN0cmluZztcblxuICAvKiog5by65Yi25YiG6aG1ICovXG4gIE5FV1BBR0UoKTogYm9vbGVhbjtcblxuICAvKiog6I635b6X5omT5Y2w6K6+5aSH5Liq5pWwICovXG4gIEdFVF9QUklOVEVSX0NPVU5UKCk6IG51bWJlcjtcblxuICAvKiog6I635b6X5omT5Y2w6K6+5aSH5ZCN56ewICovXG4gIEdFVF9QUklOVEVSX05BTUUoc3RyUHJpbnRlcklEYW5kVHlwZTogbnVtYmVyIHwgc3RyaW5nKTogc3RyaW5nO1xuXG4gIC8qKiDmjIflrprmiZPljbDorr7lpIcgKi9cbiAgU0VUX1BSSU5URVJfSU5ERVgob0luZGV4T3JOYW1lOiBudW1iZXIgfCBzdHJpbmcpOiBib29sZWFuO1xuICAvKiog44CQQ0xvZG9w44CR5oyH5a6a5omT5Y2w5py6ICovXG4gIFNFVF9QUklOVEVSX0lOREVYKFxuICAgIERyaXZlckluZGV4OiBudW1iZXIgfCBzdHJpbmcsXG4gICAgUHJpbnRlcklEYW5kTmFtZTogbnVtYmVyIHwgc3RyaW5nLFxuICAgIFN1YkRldkluZGV4OiBudW1iZXIgfCBzdHJpbmcsXG4gICk6IGJvb2xlYW47XG5cbiAgLyoqIOmAieaLqeaJk+WNsOiuvuWkhyAqL1xuICBTRUxFQ1RfUFJJTlRFUigpOiBudW1iZXI7XG5cbiAgLyoqIOiuvue9ruaYvuekuuaooeW8jyAqL1xuICBTRVRfU0hPV19NT0RFKHN0ck1vZGVUeXBlOiBzdHJpbmcsIHZhck1vZGVWYWx1ZTogbnVtYmVyIHwgc3RyaW5nKTogYm9vbGVhbjtcblxuICAvKiog6K6+572u5omT5Y2w5qih5byPICovXG4gIFNFVF9QUklOVF9NT0RFKFxuICAgIHN0ck1vZGVUeXBlOiBzdHJpbmcsXG4gICAgdmFyTW9kZVZhbHVlOiBudW1iZXIgfCBzdHJpbmcsXG4gICk6IGJvb2xlYW4gfCBzdHJpbmc7XG5cbiAgLyoqIOiuvue9ruaJk+WNsOS7veaVsCAqL1xuICBTRVRfUFJJTlRfQ09QSUVTKGludENvcGllczogbnVtYmVyKTogYm9vbGVhbjtcblxuICAvKiog6K6+572u6aKE6KeI56qX5Y+jICovXG4gIFNFVF9QUkVWSUVXX1dJTkRPVyhcbiAgICBpbnREaXNwTW9kZTogbnVtYmVyLFxuICAgIGludFRvb2xNb2RlOiBudW1iZXIsXG4gICAgYmxEaXJlY3RQcmludDogbnVtYmVyLFxuICAgIGluV2lkdGg6IG51bWJlcixcbiAgICBpbnRIZWlnaHQ6IG51bWJlcixcbiAgICBzdHJUaXRsZUJ1dHRvbkNhcHRvaW46IHN0cmluZyxcbiAgKTogdm9pZDtcblxuICAvKiog5oyH5a6a6IOM5pmv5Zu+ICovXG4gIEFERF9QUklOVF9TRVRVUF9CS0lNRyhzdHJJbWdIdG1sOiBzdHJpbmcpOiB2b2lkO1xuXG4gIC8qKiDlj5HpgIHljp/lp4vmlbDmja4gKi9cbiAgU0VORF9QUklOVF9SQVdEQVRBKHN0clJhd0RhdGE6IHN0cmluZyk6IGJvb2xlYW47XG5cbiAgLyoqIOWGmeerr+WPo+aVsOaNriAqL1xuICBXUklURV9QT1JUX0RBVEEoc3RyUG9ydE5hbWU6IHN0cmluZywgc3RyRGF0YTogc3RyaW5nKTogYm9vbGVhbjtcblxuICAvKiog6K+756uv5Y+j5pWw5o2uICovXG4gIFJFQURfUE9SVF9EQVRBKHN0clBvcnROYW1lOiBzdHJpbmcpOiBzdHJpbmc7XG5cbiAgLyoqIOiOt+W+l+mFjee9ruaWh+S7tuWQjSAqL1xuICBHRVRfUFJJTlRfSU5JRkZOQU1FKHN0clByaW50VGFzazogc3RyaW5nKTogc3RyaW5nO1xuXG4gIC8qKiDojrflvpfnurjlvKDnsbvlnovlkI3muIXljZUgKi9cbiAgR0VUX1BBR0VTSVpFU19MSVNUKG9QcmludGVyTmFtZTogbnVtYmVyIHwgc3RyaW5nLCBzdHJTcGxpdDogc3RyaW5nKTogc3RyaW5nO1xuXG4gIC8qKiDlhpnmnKzlnLDmlofku7blhoXlrrkgKi9cbiAgV1JJVEVfRklMRV9URVhUKFxuICAgIGludFdyaXRlTW9kZTogbnVtYmVyIHwgc3RyaW5nLFxuICAgIHN0ckZpbGVOYW1lOiBzdHJpbmcsXG4gICAgc3RyVGV4dDogc3RyaW5nLFxuICApOiBzdHJpbmc7XG5cbiAgLyoqIOivu+acrOWcsOaWh+S7tuWGheWuuSAqL1xuICBHRVRfRklMRV9URVhUKHN0ckZpbGVOYW1lOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsO1xuXG4gIC8qKiDor7vmnKzlnLDmlofku7bml7bpl7QgKi9cbiAgR0VUX0ZJTEVfVElNRShzdHJGaWxlTmFtZTogc3RyaW5nKTogc3RyaW5nIHwgbnVsbDtcblxuICAvKiog5Yik5pat5pys5Zyw5paH5Lu25piv5ZCm5a2Y5ZyoICovXG4gIElTX0ZJTEVfRVhJU1Qoc3RyRmlsZU5hbWU6IHN0cmluZyk6IGJvb2xlYW47XG5cbiAgLyoqIOiOt+W+l+ezu+e7n+S/oeaBryAqL1xuICBHRVRfU1lTVEVNX0lORk8oc3RySW5mb1R5cGU6IHN0cmluZyk6IGJvb2xlYW47XG5cbiAgLyoqIOiOt+W+l+aVsOaNruWAvCAqL1xuICBHRVRfVkFMVUUoVmFsdWVUeXBlOiBzdHJpbmcsIFZhbHVlSW5kZXg6IG51bWJlciB8IHN0cmluZyk6IGFueTtcblxuICAvKiog5pWw5o2u5qC85byP6L2s5o2iICovXG4gIEZPUk1BVChvVHlwZTogc3RyaW5nLCBvVmFsdWU6IGFueSk6IGFueTtcblxuICAvKiog6I635b6X5a+56K+d5qGG57uT5p6c5YC8ICovXG4gIEdFVF9ESUFMT0dfVkFMVUUob1R5cGU6IHN0cmluZywgb1ByZVZhbHVlOiBzdHJpbmcpOiBzdHJpbmc7XG5cbiAgLyoqICjlop7lvLrlnosp5omT5Y2w5Yid5aeL5YyWICovXG4gIFBSSU5UX0lOSVRBKFxuICAgIFRvcDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIExlZnQ6IG51bWJlciB8IHN0cmluZyxcbiAgICBXaWR0aDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIEhlaWdodDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIHN0clByaW50TmFtZTogc3RyaW5nLFxuICApOiBib29sZWFuO1xuXG4gIC8qKiAo5aKe5by65Z6LKeWinuWKoOi2heaWh+acrOaJk+WNsOmhuSjlm77lvaLmqKHlvI8pICovXG4gIEFERF9QUklOVF9IVE1MKFxuICAgIFRvcDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIExlZnQ6IG51bWJlciB8IHN0cmluZyxcbiAgICBXaWR0aDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIEhlaWdodDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIHN0ckh0bWxDb250ZW50OiBzdHJpbmcsXG4gICk6IHZvaWQ7XG5cbiAgLyoqICjlop7lvLrlnosp5aKe5Yqg6KGo5qC85omT5Y2w6aG577yIVVJM5qih5byP77yJICovXG4gIEFERF9QUklOVF9UQlVSTChcbiAgICBUb3A6IG51bWJlciB8IHN0cmluZyxcbiAgICBMZWZ0OiBudW1iZXIgfCBzdHJpbmcsXG4gICAgV2lkdGg6IG51bWJlciB8IHN0cmluZyxcbiAgICBIZWlnaHQ6IG51bWJlciB8IHN0cmluZyxcbiAgICBzdHJVUkw6IHN0cmluZyxcbiAgKTogdm9pZDtcblxuICAvKiogKOWinuW8uuWeiynlop7liqDnuq/mlofmnKzmiZPljbDpobkgKi9cbiAgQUREX1BSSU5UX1RFWFRBKFxuICAgIFRvcDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIExlZnQ6IG51bWJlciB8IHN0cmluZyxcbiAgICBXaWR0aDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIEhlaWdodDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIHN0ckNvbnRlbnQ6IHN0cmluZyxcbiAgKTogdm9pZDtcblxuICAvKiogKOWinuW8uuWeiynorr7nva7miZPljbDpobnpo47moLxBLCDnu6fmib8gYFNFVF9QUklOVF9TVFlMRWAg55qE5omA5pyJ5bGe5oCnICovXG4gIFNFVF9QUklOVF9TVFlMRUEoXG4gICAgdmFySXRlbU5hbWVJRDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIHN0clN0eWxlTmFtZTogc3RyaW5nLFxuICAgIHZhclN0eWxlVmFsdWU6IG51bWJlciB8IHN0cmluZyxcbiAgKTogdm9pZDtcblxuICAvKiogKOWinuW8uuWeiynlr7zlh7rmlbDmja7liLDmlofku7YgKi9cbiAgU0FWRV9UT19GSUxFKHN0ckZpbGVOYW1lOiBzdHJpbmcpOiBib29sZWFuO1xuXG4gIC8qKiAo5aKe5by65Z6LKeiuvue9ruS/neWtmOaooeW8jyAqL1xuICBTRVRfU0FWRV9NT0RFKHZhck1vZGVOYW1lOiBzdHJpbmcsIHZhck1vZGVWYWx1ZTogbnVtYmVyIHwgc3RyaW5nKTogYm9vbGVhbjtcblxuICAvKiogKOWinuW8uuWeiynlop7liqDlm77lvaIgKi9cbiAgQUREX1BSSU5UX1NIQVBFKFxuICAgIGludFNoYXBlVHlwZTogbnVtYmVyLFxuICAgIFRvcDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIExlZnQ6IG51bWJlciB8IHN0cmluZyxcbiAgICBXaWR0aDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIEhlaWdodDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIGludExpbmVTdHlsZTogbnVtYmVyLFxuICAgIGludExpbmVXaWR0aDogbnVtYmVyLFxuICAgIHZhckNvbG9yOiBudW1iZXIgfCBzdHJpbmcsXG4gICk6IHZvaWQ7XG5cbiAgLyoqICjlop7lvLrlnosp5oyH5a6a5omT5Y2w6K6+5aSHICovXG4gIFNFVF9QUklOVEVSX0lOREVYQShvSW5kZXhPck5hbWU6IG51bWJlciB8IHN0cmluZyk6IGJvb2xlYW47XG5cbiAgLyoqICjlop7lvLrlnosp5by65Yi25YiG6aG1ICovXG4gIE5FV1BBR0VBKCk6IGJvb2xlYW47XG5cbiAgLyoqICjlop7lvLrlnosp5omT5Y2w6aKE6KeIQSAqL1xuICBQUkVWSUVXQSgpOiBudW1iZXI7XG5cbiAgLyoqICjlop7lvLrlnosp5omT5Y2w6aKE6KeIQiAqL1xuICBQUkVWSUVXQigpOiBudW1iZXI7XG5cbiAgLyoqIOebtOaOpeaJk+WNsEEgKi9cbiAgUFJJTlRBKCk6IGJvb2xlYW47XG5cbiAgLyoqIOebtOaOpeaJk+WNsEIgKi9cbiAgUFJJTlRCKCk6IGJvb2xlYW47XG5cbiAgLyoqIOaYvuekuuWbvuihqCAqL1xuICBTSE9XX0NIQVJUKCk6IHZvaWQ7XG5cbiAgLyoqIOaOp+WItueVjOmdouWKqOS9nCAqL1xuICBET19BQ1RJT04oQWN0TmFtZTogc3RyaW5nLCBBY3RWYWx1ZTogbnVtYmVyIHwgc3RyaW5nKTogdm9pZDtcblxuICAvKipcbiAgICog6K6+572u6L2v5Lu25Lqn5ZOB5rOo5YaM5L+h5oGvXG4gICAqXG4gICAqIEBwYXJhbSAgc3RyQ29tcGFueU5hbWUg5rOo5YaM5Y2V5L2N5ZCN56ew77yM55So6YCU5LiO5o6n5Lu25Y+C5pWwQ29tcGFueU5hbWXkuIDmoLfjgIJcbiAgICogQHBhcmFtICBzdHJMaWNlbnNlIOS4u+azqOWGjOWPt++8jOeUqOmAlOS4juaOp+S7tuWPguaVsExpY2Vuc2XkuIDmoLfjgIJcbiAgICogQHBhcmFtICBzdHJMaWNlbnNlQSDpmYTliqDms6jlhozlj7dB77yM55So6YCU5LiO5o6n5Lu25Y+C5pWwTGljZW5zZUHkuIDmoLfjgIJcbiAgICogQHBhcmFtICBzdHJMaWNlbnNlQiDpmYTliqDms6jlhozlj7dC77yM55So6YCU5LiO5o6n5Lu25Y+C5pWwTGljZW5zZULkuIDmoLfjgIJcbiAgICovXG4gIFNFVF9MSUNFTlNFUyhcbiAgICBzdHJDb21wYW55TmFtZTogc3RyaW5nLFxuICAgIHN0ckxpY2Vuc2U6IHN0cmluZyxcbiAgICBzdHJMaWNlbnNlQT86IHN0cmluZyxcbiAgICBzdHJMaWNlbnNlQj86IHN0cmluZyxcbiAgKTogdm9pZDtcblxuICB3ZWJza3Q6IFdlYlNvY2tldDtcbn1cblxuZXhwb3J0IHR5cGUgTG9kb3BTdHlsZVZhbHVlID1cbiAgfCAnRm9udE5hbWUnXG4gIHwgJ0ZvbnRTaXplJ1xuICB8ICdGb250Q29sb3InXG4gIHwgJ0JvbGQnXG4gIHwgJ0l0YWxpYydcbiAgfCAnVW5kZXJsaW5lJ1xuICB8ICdBbGlnbm1lbnQnXG4gIHwgJ0FuZ2xlJ1xuICB8ICdJdGVtVHlwZSdcbiAgfCAnSE9yaWVudCdcbiAgfCAnVk9yaWVudCdcbiAgfCAnUGVuV2lkdGgnXG4gIHwgJ1BlblN0eWxlJ1xuICB8ICdTdHJldGNoJ1xuICB8ICdQcmV2aWV3T25seSdcbiAgfCAnUmVhZE9ubHknO1xuXG5leHBvcnQgaW50ZXJmYWNlIExvZG9wUmVzdWx0IHtcbiAgLyoqIOaYr+WQpuaIkOWKnyAqL1xuICBvazogYm9vbGVhbjtcbiAgLyoqIOmUmeivr+eggSAqL1xuICBzdGF0dXM/OiBzdHJpbmc7XG4gIC8qKiDmiJDlip/ml7bmkLrluKYgTE9ET1Ag5a+56LGhICovXG4gIGxvZG9wPzogTG9kb3A7XG4gIC8qKiDplJnor6/kv6Hmga8gKi9cbiAgZXJyb3I/OiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9kb3BQcmludFJlc3VsdCB7XG4gIC8qKiDmmK/lkKbmiJDlip8gKi9cbiAgb2s6IGJvb2xlYW47XG4gIC8qKiDplJnor6/kv6Hmga8gKi9cbiAgZXJyb3I/OiBzdHJpbmc7XG4gIC8qKiDku6PnoIEgKi9cbiAgY29kZTogc3RyaW5nO1xuICAvKiog5Yqo5oCB5Y+C5pWw5LiK5LiL5paH5a+56LGhICovXG4gIGl0ZW06IGFueTtcbiAgLyoqIOS7o+eggeino+aekOihqOi+vuW8jyAqL1xuICBwYXJzZXI/OiBSZWdFeHA7XG59XG4iXX0=