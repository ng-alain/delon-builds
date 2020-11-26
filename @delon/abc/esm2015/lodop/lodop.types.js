/**
 * @fileoverview added by tsickle
 * Generated from: lodop.types.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function CLodop() { }
if (false) {
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
     * 结果回调函数保留
     * @type {?}
     */
    CLodop.prototype.On_Return_Remain;
    /**
     * 结果回调函数
     * @type {?}
     */
    CLodop.prototype.On_Return;
    /**
     * 建立打印机名单
     * @param {?} el
     * @return {?}
     */
    CLodop.prototype.Create_Printer_List = function (el) { };
    /**
     * 建立纸张类型名单
     * @param {?} el
     * @param {?} iPrintIndex
     * @return {?}
     */
    CLodop.prototype.Create_PageSize_List = function (el, iPrintIndex) { };
}
/**
 * @record
 */
export function Lodop() { }
if (false) {
    /**
     * 获得软件版本号
     * @type {?}
     */
    Lodop.prototype.VERSION;
    /** @type {?} */
    Lodop.prototype.webskt;
    /* Skipping unhandled member: [key: string]: any;*/
    /**
     * 打印初始化。初始化运行环境，清理异常打印遗留的系统资源，设定打印任务名。
     *
     * **建议或要求：**该函数与PRINT_INITA都有初始化功能，每个打印事务至少初始化一次，建议打印程序首先调用该函数。任务名要尽量区别于其它打印任务，譬如用“XX单位_XX管理信息系统_XX子系统_XX模块_XX打印作业”字样。
     * 不希望最终用户更改打印布局时，则设strTaskName空。
     *
     * @param {?} strTaskName 打印任务名
     * @return {?} 返回逻辑真表示初始化成功，逻辑假表示初始化失败，失败原因有：前一个打印事务没有完成；操作系统没有添加打印机(驱动)等
     */
    Lodop.prototype.PRINT_INIT = function (strTaskName) { };
    /**
     * 设定纸张大小
     * @param {?} intOrient
     * @param {?} PageWidth
     * @param {?} PageHeight
     * @param {?} strPageName
     * @return {?}
     */
    Lodop.prototype.SET_PRINT_PAGESIZE = function (intOrient, PageWidth, PageHeight, strPageName) { };
    /**
     * 增加超文本打印项(普通模式)
     * @param {?} Top
     * @param {?} Left
     * @param {?} Width
     * @param {?} Height
     * @param {?} strHtmlContent
     * @return {?}
     */
    Lodop.prototype.ADD_PRINT_HTM = function (Top, Left, Width, Height, strHtmlContent) { };
    /**
     * 增加表格打印项（超文本模式）
     * @param {?} Top
     * @param {?} Left
     * @param {?} Width
     * @param {?} Height
     * @param {?} strHtml
     * @return {?}
     */
    Lodop.prototype.ADD_PRINT_TABLE = function (Top, Left, Width, Height, strHtml) { };
    /**
     * 增加表格打印项（超文本模式）
     * @param {?} Top
     * @param {?} Left
     * @param {?} Width
     * @param {?} Height
     * @param {?} strHtml
     * @return {?}
     */
    Lodop.prototype.ADD_PRINT_TABLE = function (Top, Left, Width, Height, strHtml) { };
    /**
     * 增加超文本打印项（URL模式）
     * @param {?} Top
     * @param {?} Left
     * @param {?} Width
     * @param {?} Height
     * @param {?} strURL
     * @return {?}
     */
    Lodop.prototype.ADD_PRINT_URL = function (Top, Left, Width, Height, strURL) { };
    /**
     * 增加纯文本打印项
     * @param {?} Top
     * @param {?} Left
     * @param {?} Width
     * @param {?} Height
     * @param {?} strContent
     * @return {?}
     */
    Lodop.prototype.ADD_PRINT_TEXT = function (Top, Left, Width, Height, strContent) { };
    /**
     * 增加图片打印项
     * @param {?} Top
     * @param {?} Left
     * @param {?} Width
     * @param {?} Height
     * @param {?} strHtmlContent
     * @return {?}
     */
    Lodop.prototype.ADD_PRINT_IMAGE = function (Top, Left, Width, Height, strHtmlContent) { };
    /**
     * 增加矩形线
     * @param {?} Top
     * @param {?} Left
     * @param {?} Width
     * @param {?} Height
     * @param {?} intLineStyle
     * @param {?} intLineWidth
     * @return {?}
     */
    Lodop.prototype.ADD_PRINT_RECT = function (Top, Left, Width, Height, intLineStyle, intLineWidth) { };
    /**
     * 增加椭圆线
     * @param {?} Top
     * @param {?} Left
     * @param {?} Width
     * @param {?} Height
     * @param {?} intLineStyle
     * @param {?} intLineWidth
     * @return {?}
     */
    Lodop.prototype.ADD_PRINT_ELLIPSE = function (Top, Left, Width, Height, intLineStyle, intLineWidth) { };
    /**
     * 增加直线
     * @param {?} Top1
     * @param {?} Left1
     * @param {?} Top2
     * @param {?} Left2
     * @param {?} intLineStyle
     * @param {?} intLineWidth
     * @return {?}
     */
    Lodop.prototype.ADD_PRINT_LINE = function (Top1, Left1, Top2, Left2, intLineStyle, intLineWidth) { };
    /**
     * 增加条形码
     * @param {?} Top
     * @param {?} Left
     * @param {?} Width
     * @param {?} Height
     * @param {?} CodeType
     * @param {?} CodeValue
     * @return {?}
     */
    Lodop.prototype.ADD_PRINT_BARCODE = function (Top, Left, Width, Height, CodeType, CodeValue) { };
    /**
     * 增加图表
     * @param {?} Top
     * @param {?} Left
     * @param {?} Width
     * @param {?} Height
     * @param {?} ChartType
     * @param {?} strHtml
     * @return {?}
     */
    Lodop.prototype.ADD_PRINT_CHART = function (Top, Left, Width, Height, ChartType, strHtml) { };
    /**
     * 装载文档式模板
     * @param {?} strDataStyle
     * @param {?} varDataValue
     * @return {?}
     */
    Lodop.prototype.ADD_PRINT_DATA = function (strDataStyle, varDataValue) { };
    /**
     * 设置打印项风格
     * @param {?} strStyleName
     * @param {?} varStyleValue
     * @return {?}
     */
    Lodop.prototype.SET_PRINT_STYLE = function (strStyleName, varStyleValue) { };
    /**
     * 打印预览
     * @return {?}
     */
    Lodop.prototype.PREVIEW = function () { };
    /**
     * 直接打印
     * @return {?}
     */
    Lodop.prototype.PRINT = function () { };
    /**
     * 打印维护
     * @return {?}
     */
    Lodop.prototype.PRINT_SETUP = function () { };
    /**
     * 打印设计
     * @return {?}
     */
    Lodop.prototype.PRINT_DESIGN = function () { };
    /**
     * 强制分页
     * @return {?}
     */
    Lodop.prototype.NEWPAGE = function () { };
    /**
     * 获得打印设备个数
     * @return {?}
     */
    Lodop.prototype.GET_PRINTER_COUNT = function () { };
    /**
     * 获得打印设备名称
     * @param {?} strPrinterIDandType
     * @return {?}
     */
    Lodop.prototype.GET_PRINTER_NAME = function (strPrinterIDandType) { };
    /**
     * 指定打印设备
     * @param {?} oIndexOrName
     * @return {?}
     */
    Lodop.prototype.SET_PRINTER_INDEX = function (oIndexOrName) { };
    /**
     * 【CLodop】指定打印机
     * @param {?} DriverIndex
     * @param {?} PrinterIDandName
     * @param {?} SubDevIndex
     * @return {?}
     */
    Lodop.prototype.SET_PRINTER_INDEX = function (DriverIndex, PrinterIDandName, SubDevIndex) { };
    /**
     * 选择打印设备
     * @return {?}
     */
    Lodop.prototype.SELECT_PRINTER = function () { };
    /**
     * 设置显示模式
     * @param {?} strModeType
     * @param {?} varModeValue
     * @return {?}
     */
    Lodop.prototype.SET_SHOW_MODE = function (strModeType, varModeValue) { };
    /**
     * 设置打印模式
     * @param {?} strModeType
     * @param {?} varModeValue
     * @return {?}
     */
    Lodop.prototype.SET_PRINT_MODE = function (strModeType, varModeValue) { };
    /**
     * 设置打印份数
     * @param {?} intCopies
     * @return {?}
     */
    Lodop.prototype.SET_PRINT_COPIES = function (intCopies) { };
    /**
     * 设置预览窗口
     * @param {?} intDispMode
     * @param {?} intToolMode
     * @param {?} blDirectPrint
     * @param {?} inWidth
     * @param {?} intHeight
     * @param {?} strTitleButtonCaptoin
     * @return {?}
     */
    Lodop.prototype.SET_PREVIEW_WINDOW = function (intDispMode, intToolMode, blDirectPrint, inWidth, intHeight, strTitleButtonCaptoin) { };
    /**
     * 指定背景图
     * @param {?} strImgHtml
     * @return {?}
     */
    Lodop.prototype.ADD_PRINT_SETUP_BKIMG = function (strImgHtml) { };
    /**
     * 发送原始数据
     * @param {?} strRawData
     * @return {?}
     */
    Lodop.prototype.SEND_PRINT_RAWDATA = function (strRawData) { };
    /**
     * 写端口数据
     * @param {?} strPortName
     * @param {?} strData
     * @return {?}
     */
    Lodop.prototype.WRITE_PORT_DATA = function (strPortName, strData) { };
    /**
     * 读端口数据
     * @param {?} strPortName
     * @return {?}
     */
    Lodop.prototype.READ_PORT_DATA = function (strPortName) { };
    /**
     * 获得配置文件名
     * @param {?} strPrintTask
     * @return {?}
     */
    Lodop.prototype.GET_PRINT_INIFFNAME = function (strPrintTask) { };
    /**
     * 获得纸张类型名清单
     * @param {?} oPrinterName
     * @param {?} strSplit
     * @return {?}
     */
    Lodop.prototype.GET_PAGESIZES_LIST = function (oPrinterName, strSplit) { };
    /**
     * 写本地文件内容
     * @param {?} intWriteMode
     * @param {?} strFileName
     * @param {?} strText
     * @return {?}
     */
    Lodop.prototype.WRITE_FILE_TEXT = function (intWriteMode, strFileName, strText) { };
    /**
     * 读本地文件内容
     * @param {?} strFileName
     * @return {?}
     */
    Lodop.prototype.GET_FILE_TEXT = function (strFileName) { };
    /**
     * 读本地文件时间
     * @param {?} strFileName
     * @return {?}
     */
    Lodop.prototype.GET_FILE_TIME = function (strFileName) { };
    /**
     * 判断本地文件是否存在
     * @param {?} strFileName
     * @return {?}
     */
    Lodop.prototype.IS_FILE_EXIST = function (strFileName) { };
    /**
     * 获得系统信息
     * @param {?} strInfoType
     * @return {?}
     */
    Lodop.prototype.GET_SYSTEM_INFO = function (strInfoType) { };
    /**
     * 获得数据值
     * @param {?} ValueType
     * @param {?} ValueIndex
     * @return {?}
     */
    Lodop.prototype.GET_VALUE = function (ValueType, ValueIndex) { };
    /**
     * 数据格式转换
     * @param {?} oType
     * @param {?} oValue
     * @return {?}
     */
    Lodop.prototype.FORMAT = function (oType, oValue) { };
    /**
     * 获得对话框结果值
     * @param {?} oType
     * @param {?} oPreValue
     * @return {?}
     */
    Lodop.prototype.GET_DIALOG_VALUE = function (oType, oPreValue) { };
    /**
     * (增强型)打印初始化
     * @param {?} Top
     * @param {?} Left
     * @param {?} Width
     * @param {?} Height
     * @param {?} strPrintName
     * @return {?}
     */
    Lodop.prototype.PRINT_INITA = function (Top, Left, Width, Height, strPrintName) { };
    /**
     * (增强型)增加超文本打印项(图形模式)
     * @param {?} Top
     * @param {?} Left
     * @param {?} Width
     * @param {?} Height
     * @param {?} strHtmlContent
     * @return {?}
     */
    Lodop.prototype.ADD_PRINT_HTML = function (Top, Left, Width, Height, strHtmlContent) { };
    /**
     * (增强型)增加表格打印项（URL模式）
     * @param {?} Top
     * @param {?} Left
     * @param {?} Width
     * @param {?} Height
     * @param {?} strURL
     * @return {?}
     */
    Lodop.prototype.ADD_PRINT_TBURL = function (Top, Left, Width, Height, strURL) { };
    /**
     * (增强型)增加纯文本打印项
     * @param {?} Top
     * @param {?} Left
     * @param {?} Width
     * @param {?} Height
     * @param {?} strContent
     * @return {?}
     */
    Lodop.prototype.ADD_PRINT_TEXTA = function (Top, Left, Width, Height, strContent) { };
    /**
     * (增强型)设置打印项风格A, 继承 `SET_PRINT_STYLE` 的所有属性
     * @param {?} varItemNameID
     * @param {?} strStyleName
     * @param {?} varStyleValue
     * @return {?}
     */
    Lodop.prototype.SET_PRINT_STYLEA = function (varItemNameID, strStyleName, varStyleValue) { };
    /**
     * (增强型)导出数据到文件
     * @param {?} strFileName
     * @return {?}
     */
    Lodop.prototype.SAVE_TO_FILE = function (strFileName) { };
    /**
     * (增强型)设置保存模式
     * @param {?} varModeName
     * @param {?} varModeValue
     * @return {?}
     */
    Lodop.prototype.SET_SAVE_MODE = function (varModeName, varModeValue) { };
    /**
     * (增强型)增加图形
     * @param {?} intShapeType
     * @param {?} Top
     * @param {?} Left
     * @param {?} Width
     * @param {?} Height
     * @param {?} intLineStyle
     * @param {?} intLineWidth
     * @param {?} varColor
     * @return {?}
     */
    Lodop.prototype.ADD_PRINT_SHAPE = function (intShapeType, Top, Left, Width, Height, intLineStyle, intLineWidth, varColor) { };
    /**
     * (增强型)指定打印设备
     * @param {?} oIndexOrName
     * @return {?}
     */
    Lodop.prototype.SET_PRINTER_INDEXA = function (oIndexOrName) { };
    /**
     * (增强型)强制分页
     * @return {?}
     */
    Lodop.prototype.NEWPAGEA = function () { };
    /**
     * (增强型)打印预览A
     * @return {?}
     */
    Lodop.prototype.PREVIEWA = function () { };
    /**
     * (增强型)打印预览B
     * @return {?}
     */
    Lodop.prototype.PREVIEWB = function () { };
    /**
     * 直接打印A
     * @return {?}
     */
    Lodop.prototype.PRINTA = function () { };
    /**
     * 直接打印B
     * @return {?}
     */
    Lodop.prototype.PRINTB = function () { };
    /**
     * 显示图表
     * @return {?}
     */
    Lodop.prototype.SHOW_CHART = function () { };
    /**
     * 控制界面动作
     * @param {?} ActName
     * @param {?} ActValue
     * @return {?}
     */
    Lodop.prototype.DO_ACTION = function (ActName, ActValue) { };
    /**
     * 设置软件产品注册信息
     *
     * @param {?} strCompanyName 注册单位名称，用途与控件参数CompanyName一样。
     * @param {?} strLicense 主注册号，用途与控件参数License一样。
     * @param {?=} strLicenseA 附加注册号A，用途与控件参数LicenseA一样。
     * @param {?=} strLicenseB 附加注册号B，用途与控件参数LicenseB一样。
     * @return {?}
     */
    Lodop.prototype.SET_LICENSES = function (strCompanyName, strLicense, strLicenseA, strLicenseB) { };
}
/**
 * @record
 */
export function LodopResult() { }
if (false) {
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
}
/**
 * @record
 */
export function LodopPrintResult() { }
if (false) {
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9kb3AudHlwZXMuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdnN0cy93b3JrLzEvcy9wYWNrYWdlcy9hYmMvbG9kb3AvIiwic291cmNlcyI6WyJsb2RvcC50eXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLDRCQXFCQzs7Ozs7Ozs7OztJQWJDLDhCQUE4Qjs7Ozs7SUFHOUIsa0NBQTBCOzs7OztJQUcxQiwyQkFBc0U7Ozs7OztJQUd0RSx5REFBdUM7Ozs7Ozs7SUFHdkMsdUVBQTZEOzs7OztBQUcvRCwyQkErUUM7Ozs7OztJQTNRQyx3QkFBZ0I7O0lBMFFoQix1QkFBa0I7Ozs7Ozs7Ozs7O0lBL1BsQix3REFBeUM7Ozs7Ozs7OztJQUd6QyxrR0FBMEg7Ozs7Ozs7Ozs7SUFHMUgsd0ZBQTBJOzs7Ozs7Ozs7O0lBSzFJLG1GQUFxSTs7Ozs7Ozs7OztJQUtySSxtRkFBcUk7Ozs7Ozs7Ozs7SUFLckksZ0ZBQWtJOzs7Ozs7Ozs7O0lBR2xJLHFGQUF1STs7Ozs7Ozs7OztJQUd2SSwwRkFNUTs7Ozs7Ozs7Ozs7SUFHUixxR0FPUTs7Ozs7Ozs7Ozs7SUFHUix3R0FPUTs7Ozs7Ozs7Ozs7SUFHUixxR0FPUTs7Ozs7Ozs7Ozs7SUFHUixpR0FPUTs7Ozs7Ozs7Ozs7SUFHUiw4RkFPUTs7Ozs7OztJQUdSLDJFQUE4RDs7Ozs7OztJQUc5RCw2RUFBcUY7Ozs7O0lBR3JGLDBDQUFrQjs7Ozs7SUFHbEIsd0NBQWdCOzs7OztJQUdoQiw4Q0FBc0I7Ozs7O0lBR3RCLCtDQUF1Qjs7Ozs7SUFHdkIsMENBQW1COzs7OztJQUduQixvREFBNEI7Ozs7OztJQUc1QixzRUFBK0Q7Ozs7OztJQUcvRCxnRUFBMEQ7Ozs7Ozs7O0lBRTFELDhGQUEwSDs7Ozs7SUFHMUgsaURBQXlCOzs7Ozs7O0lBR3pCLHlFQUEyRTs7Ozs7OztJQUczRSwwRUFBcUY7Ozs7OztJQUdyRiw0REFBNkM7Ozs7Ozs7Ozs7O0lBRzdDLHVJQU9ROzs7Ozs7SUFHUixrRUFBZ0Q7Ozs7OztJQUdoRCwrREFBZ0Q7Ozs7Ozs7SUFHaEQsc0VBQStEOzs7Ozs7SUFHL0QsNERBQTRDOzs7Ozs7SUFHNUMsa0VBQWtEOzs7Ozs7O0lBR2xELDJFQUE0RTs7Ozs7Ozs7SUFHNUUsb0ZBQTZGOzs7Ozs7SUFHN0YsMkRBQWtEOzs7Ozs7SUFHbEQsMkRBQWtEOzs7Ozs7SUFHbEQsMkRBQTRDOzs7Ozs7SUFHNUMsNkRBQThDOzs7Ozs7O0lBRzlDLGlFQUErRDs7Ozs7OztJQUcvRCxzREFBd0M7Ozs7Ozs7SUFHeEMsbUVBQTJEOzs7Ozs7Ozs7O0lBRzNELG9GQUF5STs7Ozs7Ozs7OztJQUd6SSx5RkFNUTs7Ozs7Ozs7OztJQUdSLGtGQUFvSTs7Ozs7Ozs7OztJQUdwSSxzRkFBd0k7Ozs7Ozs7O0lBR3hJLDZGQUE2Rzs7Ozs7O0lBRzdHLDBEQUEyQzs7Ozs7OztJQUczQyx5RUFBMkU7Ozs7Ozs7Ozs7Ozs7SUFHM0UsOEhBU1E7Ozs7OztJQUdSLGlFQUEyRDs7Ozs7SUFHM0QsMkNBQW9COzs7OztJQUdwQiwyQ0FBbUI7Ozs7O0lBR25CLDJDQUFtQjs7Ozs7SUFHbkIseUNBQWtCOzs7OztJQUdsQix5Q0FBa0I7Ozs7O0lBR2xCLDZDQUFtQjs7Ozs7OztJQUduQiw2REFBNEQ7Ozs7Ozs7Ozs7SUFVNUQsbUdBQTJHOzs7OztBQXdCN0csaUNBU0M7Ozs7OztJQVBDLHlCQUFZOzs7OztJQUVaLDZCQUFnQjs7Ozs7SUFFaEIsNEJBQWM7Ozs7O0lBRWQsNEJBQVk7Ozs7O0FBR2Qsc0NBV0M7Ozs7OztJQVRDLDhCQUFZOzs7OztJQUVaLGlDQUFlOzs7OztJQUVmLGdDQUFhOzs7OztJQUViLGdDQUFVOzs7OztJQUVWLGtDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgQ0xvZG9wIHtcbiAgLyoqXG4gICAqIOWIpOaWreaYr+WQpuaUr+aMgWh0dHBz5Y2P6K6u55qE5bGe5oCnXG4gICAqXG4gICAqIC0gMCDkuI3mlK/mjIFcbiAgICogLSAxIOaUr+aMgVxuICAgKiAtIDIg5pSv5oyB5LiU5bey5ZCv5Yqo77yIaHR0cHPmnI3liqHpnIDljZXni6zlkK/liqgpXG4gICAqL1xuICByZWFkb25seSBIVFRQU19TVEFUVVM6IG51bWJlcjtcblxuICAvKiog57uT5p6c5Zue6LCD5Ye95pWw5L+d55WZICovXG4gIE9uX1JldHVybl9SZW1haW46IGJvb2xlYW47XG5cbiAgLyoqIOe7k+aenOWbnuiwg+WHveaVsCAqL1xuICBPbl9SZXR1cm46ICgodGFza0lEOiBzdHJpbmcsIHZhbHVlOiBib29sZWFuIHwgc3RyaW5nKSA9PiB2b2lkKSB8IG51bGw7XG5cbiAgLyoqIOW7uueri+aJk+WNsOacuuWQjeWNlSAqL1xuICBDcmVhdGVfUHJpbnRlcl9MaXN0KGVsOiBFbGVtZW50KTogdm9pZDtcblxuICAvKiog5bu656uL57q45byg57G75Z6L5ZCN5Y2VICovXG4gIENyZWF0ZV9QYWdlU2l6ZV9MaXN0KGVsOiBFbGVtZW50LCBpUHJpbnRJbmRleDogbnVtYmVyKTogdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2RvcCBleHRlbmRzIENMb2RvcCB7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcblxuICAvKiog6I635b6X6L2v5Lu254mI5pys5Y+3ICovXG4gIFZFUlNJT046IHN0cmluZztcblxuICAvKipcbiAgICog5omT5Y2w5Yid5aeL5YyW44CC5Yid5aeL5YyW6L+Q6KGM546v5aKD77yM5riF55CG5byC5bi45omT5Y2w6YGX55WZ55qE57O757uf6LWE5rqQ77yM6K6+5a6a5omT5Y2w5Lu75Yqh5ZCN44CCXG4gICAqXG4gICAqICoq5bu66K6u5oiW6KaB5rGC77yaKiror6Xlh73mlbDkuI5QUklOVF9JTklUQemDveacieWIneWni+WMluWKn+iDve+8jOavj+S4quaJk+WNsOS6i+WKoeiHs+WwkeWIneWni+WMluS4gOasoe+8jOW7uuiuruaJk+WNsOeoi+W6j+mmluWFiOiwg+eUqOivpeWHveaVsOOAguS7u+WKoeWQjeimgeWwvemHj+WMuuWIq+S6juWFtuWug+aJk+WNsOS7u+WKoe+8jOitrOWmgueUqOKAnFhY5Y2V5L2NX1hY566h55CG5L+h5oGv57O757ufX1hY5a2Q57O757ufX1hY5qih5Z2XX1hY5omT5Y2w5L2c5Lia4oCd5a2X5qC344CCXG4gICAqIOS4jeW4jOacm+acgOe7iOeUqOaIt+abtOaUueaJk+WNsOW4g+WxgOaXtu+8jOWImeiuvnN0clRhc2tOYW1l56m644CCXG4gICAqXG4gICAqIEBwYXJhbSBzdHJUYXNrTmFtZSDmiZPljbDku7vliqHlkI1cbiAgICogQHJldHVybnMg6L+U5Zue6YC76L6R55yf6KGo56S65Yid5aeL5YyW5oiQ5Yqf77yM6YC76L6R5YGH6KGo56S65Yid5aeL5YyW5aSx6LSl77yM5aSx6LSl5Y6f5Zug5pyJ77ya5YmN5LiA5Liq5omT5Y2w5LqL5Yqh5rKh5pyJ5a6M5oiQ77yb5pON5L2c57O757uf5rKh5pyJ5re75Yqg5omT5Y2w5py6KOmpseWKqCnnrYlcbiAgICovXG4gIFBSSU5UX0lOSVQoc3RyVGFza05hbWU6IHN0cmluZyk6IGJvb2xlYW47XG5cbiAgLyoqIOiuvuWumue6uOW8oOWkp+WwjyAqL1xuICBTRVRfUFJJTlRfUEFHRVNJWkUoaW50T3JpZW50OiBudW1iZXIsIFBhZ2VXaWR0aDogbnVtYmVyIHwgc3RyaW5nLCBQYWdlSGVpZ2h0OiBudW1iZXIgfCBzdHJpbmcsIHN0clBhZ2VOYW1lOiBzdHJpbmcpOiB2b2lkO1xuXG4gIC8qKiDlop7liqDotoXmlofmnKzmiZPljbDpobko5pmu6YCa5qih5byPKSAqL1xuICBBRERfUFJJTlRfSFRNKFRvcDogbnVtYmVyIHwgc3RyaW5nLCBMZWZ0OiBudW1iZXIgfCBzdHJpbmcsIFdpZHRoOiBudW1iZXIgfCBzdHJpbmcsIEhlaWdodDogbnVtYmVyIHwgc3RyaW5nLCBzdHJIdG1sQ29udGVudDogc3RyaW5nKTogdm9pZDtcblxuICAvKipcbiAgICog5aKe5Yqg6KGo5qC85omT5Y2w6aG577yI6LaF5paH5pys5qih5byP77yJXG4gICAqL1xuICBBRERfUFJJTlRfVEFCTEUoVG9wOiBudW1iZXIgfCBzdHJpbmcsIExlZnQ6IG51bWJlciB8IHN0cmluZywgV2lkdGg6IG51bWJlciB8IHN0cmluZywgSGVpZ2h0OiBudW1iZXIgfCBzdHJpbmcsIHN0ckh0bWw6IHN0cmluZyk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIOWinuWKoOihqOagvOaJk+WNsOmhue+8iOi2heaWh+acrOaooeW8j++8iVxuICAgKi9cbiAgQUREX1BSSU5UX1RBQkxFKFRvcDogbnVtYmVyIHwgc3RyaW5nLCBMZWZ0OiBudW1iZXIgfCBzdHJpbmcsIFdpZHRoOiBudW1iZXIgfCBzdHJpbmcsIEhlaWdodDogbnVtYmVyIHwgc3RyaW5nLCBzdHJIdG1sOiBzdHJpbmcpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiDlop7liqDotoXmlofmnKzmiZPljbDpobnvvIhVUkzmqKHlvI/vvIlcbiAgICovXG4gIEFERF9QUklOVF9VUkwoVG9wOiBudW1iZXIgfCBzdHJpbmcsIExlZnQ6IG51bWJlciB8IHN0cmluZywgV2lkdGg6IG51bWJlciB8IHN0cmluZywgSGVpZ2h0OiBudW1iZXIgfCBzdHJpbmcsIHN0clVSTDogc3RyaW5nKTogdm9pZDtcblxuICAvKiog5aKe5Yqg57qv5paH5pys5omT5Y2w6aG5ICovXG4gIEFERF9QUklOVF9URVhUKFRvcDogbnVtYmVyIHwgc3RyaW5nLCBMZWZ0OiBudW1iZXIgfCBzdHJpbmcsIFdpZHRoOiBudW1iZXIgfCBzdHJpbmcsIEhlaWdodDogbnVtYmVyIHwgc3RyaW5nLCBzdHJDb250ZW50OiBzdHJpbmcpOiB2b2lkO1xuXG4gIC8qKiDlop7liqDlm77niYfmiZPljbDpobkgKi9cbiAgQUREX1BSSU5UX0lNQUdFKFxuICAgIFRvcDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIExlZnQ6IG51bWJlciB8IHN0cmluZyxcbiAgICBXaWR0aDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIEhlaWdodDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIHN0ckh0bWxDb250ZW50OiBzdHJpbmcsXG4gICk6IHZvaWQ7XG5cbiAgLyoqIOWinuWKoOefqeW9oue6vyAqL1xuICBBRERfUFJJTlRfUkVDVChcbiAgICBUb3A6IG51bWJlciB8IHN0cmluZyxcbiAgICBMZWZ0OiBudW1iZXIgfCBzdHJpbmcsXG4gICAgV2lkdGg6IG51bWJlciB8IHN0cmluZyxcbiAgICBIZWlnaHQ6IG51bWJlciB8IHN0cmluZyxcbiAgICBpbnRMaW5lU3R5bGU6IG51bWJlcixcbiAgICBpbnRMaW5lV2lkdGg6IG51bWJlcixcbiAgKTogdm9pZDtcblxuICAvKiog5aKe5Yqg5qSt5ZyG57q/ICovXG4gIEFERF9QUklOVF9FTExJUFNFKFxuICAgIFRvcDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIExlZnQ6IG51bWJlciB8IHN0cmluZyxcbiAgICBXaWR0aDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIEhlaWdodDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIGludExpbmVTdHlsZTogbnVtYmVyLFxuICAgIGludExpbmVXaWR0aDogbnVtYmVyLFxuICApOiB2b2lkO1xuXG4gIC8qKiDlop7liqDnm7Tnur8gKi9cbiAgQUREX1BSSU5UX0xJTkUoXG4gICAgVG9wMTogbnVtYmVyIHwgc3RyaW5nLFxuICAgIExlZnQxOiBudW1iZXIgfCBzdHJpbmcsXG4gICAgVG9wMjogbnVtYmVyIHwgc3RyaW5nLFxuICAgIExlZnQyOiBudW1iZXIgfCBzdHJpbmcsXG4gICAgaW50TGluZVN0eWxlOiBudW1iZXIsXG4gICAgaW50TGluZVdpZHRoOiBudW1iZXIsXG4gICk6IHZvaWQ7XG5cbiAgLyoqIOWinuWKoOadoeW9oueggSAqL1xuICBBRERfUFJJTlRfQkFSQ09ERShcbiAgICBUb3A6IG51bWJlciB8IHN0cmluZyxcbiAgICBMZWZ0OiBudW1iZXIgfCBzdHJpbmcsXG4gICAgV2lkdGg6IG51bWJlciB8IHN0cmluZyxcbiAgICBIZWlnaHQ6IG51bWJlciB8IHN0cmluZyxcbiAgICBDb2RlVHlwZTogc3RyaW5nLFxuICAgIENvZGVWYWx1ZTogc3RyaW5nLFxuICApOiB2b2lkO1xuXG4gIC8qKiDlop7liqDlm77ooaggKi9cbiAgQUREX1BSSU5UX0NIQVJUKFxuICAgIFRvcDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIExlZnQ6IG51bWJlciB8IHN0cmluZyxcbiAgICBXaWR0aDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIEhlaWdodDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIENoYXJ0VHlwZTogbnVtYmVyLFxuICAgIHN0ckh0bWw6IHN0cmluZyxcbiAgKTogdm9pZDtcblxuICAvKiog6KOF6L295paH5qGj5byP5qih5p2/ICovXG4gIEFERF9QUklOVF9EQVRBKHN0ckRhdGFTdHlsZTogc3RyaW5nLCB2YXJEYXRhVmFsdWU6IGFueSk6IHZvaWQ7XG5cbiAgLyoqIOiuvue9ruaJk+WNsOmhuemjjuagvCAqL1xuICBTRVRfUFJJTlRfU1RZTEUoc3RyU3R5bGVOYW1lOiBMb2RvcFN0eWxlVmFsdWUsIHZhclN0eWxlVmFsdWU6IG51bWJlciB8IHN0cmluZyk6IHZvaWQ7XG5cbiAgLyoqIOaJk+WNsOmihOiniCAqL1xuICBQUkVWSUVXKCk6IG51bWJlcjtcblxuICAvKiog55u05o6l5omT5Y2wICovXG4gIFBSSU5UKCk6IHN0cmluZztcblxuICAvKiog5omT5Y2w57u05oqkICovXG4gIFBSSU5UX1NFVFVQKCk6IHN0cmluZztcblxuICAvKiog5omT5Y2w6K6+6K6hICovXG4gIFBSSU5UX0RFU0lHTigpOiBzdHJpbmc7XG5cbiAgLyoqIOW8uuWItuWIhumhtSAqL1xuICBORVdQQUdFKCk6IGJvb2xlYW47XG5cbiAgLyoqIOiOt+W+l+aJk+WNsOiuvuWkh+S4quaVsCAqL1xuICBHRVRfUFJJTlRFUl9DT1VOVCgpOiBudW1iZXI7XG5cbiAgLyoqIOiOt+W+l+aJk+WNsOiuvuWkh+WQjeensCAqL1xuICBHRVRfUFJJTlRFUl9OQU1FKHN0clByaW50ZXJJRGFuZFR5cGU6IG51bWJlciB8IHN0cmluZyk6IHN0cmluZztcblxuICAvKiog5oyH5a6a5omT5Y2w6K6+5aSHICovXG4gIFNFVF9QUklOVEVSX0lOREVYKG9JbmRleE9yTmFtZTogbnVtYmVyIHwgc3RyaW5nKTogYm9vbGVhbjtcbiAgLyoqIOOAkENMb2RvcOOAkeaMh+WumuaJk+WNsOacuiAqL1xuICBTRVRfUFJJTlRFUl9JTkRFWChEcml2ZXJJbmRleDogbnVtYmVyIHwgc3RyaW5nLCBQcmludGVySURhbmROYW1lOiBudW1iZXIgfCBzdHJpbmcsIFN1YkRldkluZGV4OiBudW1iZXIgfCBzdHJpbmcpOiBib29sZWFuO1xuXG4gIC8qKiDpgInmi6nmiZPljbDorr7lpIcgKi9cbiAgU0VMRUNUX1BSSU5URVIoKTogbnVtYmVyO1xuXG4gIC8qKiDorr7nva7mmL7npLrmqKHlvI8gKi9cbiAgU0VUX1NIT1dfTU9ERShzdHJNb2RlVHlwZTogc3RyaW5nLCB2YXJNb2RlVmFsdWU6IG51bWJlciB8IHN0cmluZyk6IGJvb2xlYW47XG5cbiAgLyoqIOiuvue9ruaJk+WNsOaooeW8jyAqL1xuICBTRVRfUFJJTlRfTU9ERShzdHJNb2RlVHlwZTogc3RyaW5nLCB2YXJNb2RlVmFsdWU6IG51bWJlciB8IHN0cmluZyk6IGJvb2xlYW4gfCBzdHJpbmc7XG5cbiAgLyoqIOiuvue9ruaJk+WNsOS7veaVsCAqL1xuICBTRVRfUFJJTlRfQ09QSUVTKGludENvcGllczogbnVtYmVyKTogYm9vbGVhbjtcblxuICAvKiog6K6+572u6aKE6KeI56qX5Y+jICovXG4gIFNFVF9QUkVWSUVXX1dJTkRPVyhcbiAgICBpbnREaXNwTW9kZTogbnVtYmVyLFxuICAgIGludFRvb2xNb2RlOiBudW1iZXIsXG4gICAgYmxEaXJlY3RQcmludDogbnVtYmVyLFxuICAgIGluV2lkdGg6IG51bWJlcixcbiAgICBpbnRIZWlnaHQ6IG51bWJlcixcbiAgICBzdHJUaXRsZUJ1dHRvbkNhcHRvaW46IHN0cmluZyxcbiAgKTogdm9pZDtcblxuICAvKiog5oyH5a6a6IOM5pmv5Zu+ICovXG4gIEFERF9QUklOVF9TRVRVUF9CS0lNRyhzdHJJbWdIdG1sOiBzdHJpbmcpOiB2b2lkO1xuXG4gIC8qKiDlj5HpgIHljp/lp4vmlbDmja4gKi9cbiAgU0VORF9QUklOVF9SQVdEQVRBKHN0clJhd0RhdGE6IHN0cmluZyk6IGJvb2xlYW47XG5cbiAgLyoqIOWGmeerr+WPo+aVsOaNriAqL1xuICBXUklURV9QT1JUX0RBVEEoc3RyUG9ydE5hbWU6IHN0cmluZywgc3RyRGF0YTogc3RyaW5nKTogYm9vbGVhbjtcblxuICAvKiog6K+756uv5Y+j5pWw5o2uICovXG4gIFJFQURfUE9SVF9EQVRBKHN0clBvcnROYW1lOiBzdHJpbmcpOiBzdHJpbmc7XG5cbiAgLyoqIOiOt+W+l+mFjee9ruaWh+S7tuWQjSAqL1xuICBHRVRfUFJJTlRfSU5JRkZOQU1FKHN0clByaW50VGFzazogc3RyaW5nKTogc3RyaW5nO1xuXG4gIC8qKiDojrflvpfnurjlvKDnsbvlnovlkI3muIXljZUgKi9cbiAgR0VUX1BBR0VTSVpFU19MSVNUKG9QcmludGVyTmFtZTogbnVtYmVyIHwgc3RyaW5nLCBzdHJTcGxpdDogc3RyaW5nKTogc3RyaW5nO1xuXG4gIC8qKiDlhpnmnKzlnLDmlofku7blhoXlrrkgKi9cbiAgV1JJVEVfRklMRV9URVhUKGludFdyaXRlTW9kZTogbnVtYmVyIHwgc3RyaW5nLCBzdHJGaWxlTmFtZTogc3RyaW5nLCBzdHJUZXh0OiBzdHJpbmcpOiBzdHJpbmc7XG5cbiAgLyoqIOivu+acrOWcsOaWh+S7tuWGheWuuSAqL1xuICBHRVRfRklMRV9URVhUKHN0ckZpbGVOYW1lOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsO1xuXG4gIC8qKiDor7vmnKzlnLDmlofku7bml7bpl7QgKi9cbiAgR0VUX0ZJTEVfVElNRShzdHJGaWxlTmFtZTogc3RyaW5nKTogc3RyaW5nIHwgbnVsbDtcblxuICAvKiog5Yik5pat5pys5Zyw5paH5Lu25piv5ZCm5a2Y5ZyoICovXG4gIElTX0ZJTEVfRVhJU1Qoc3RyRmlsZU5hbWU6IHN0cmluZyk6IGJvb2xlYW47XG5cbiAgLyoqIOiOt+W+l+ezu+e7n+S/oeaBryAqL1xuICBHRVRfU1lTVEVNX0lORk8oc3RySW5mb1R5cGU6IHN0cmluZyk6IGJvb2xlYW47XG5cbiAgLyoqIOiOt+W+l+aVsOaNruWAvCAqL1xuICBHRVRfVkFMVUUoVmFsdWVUeXBlOiBzdHJpbmcsIFZhbHVlSW5kZXg6IG51bWJlciB8IHN0cmluZyk6IGFueTtcblxuICAvKiog5pWw5o2u5qC85byP6L2s5o2iICovXG4gIEZPUk1BVChvVHlwZTogc3RyaW5nLCBvVmFsdWU6IGFueSk6IGFueTtcblxuICAvKiog6I635b6X5a+56K+d5qGG57uT5p6c5YC8ICovXG4gIEdFVF9ESUFMT0dfVkFMVUUob1R5cGU6IHN0cmluZywgb1ByZVZhbHVlOiBzdHJpbmcpOiBzdHJpbmc7XG5cbiAgLyoqICjlop7lvLrlnosp5omT5Y2w5Yid5aeL5YyWICovXG4gIFBSSU5UX0lOSVRBKFRvcDogbnVtYmVyIHwgc3RyaW5nLCBMZWZ0OiBudW1iZXIgfCBzdHJpbmcsIFdpZHRoOiBudW1iZXIgfCBzdHJpbmcsIEhlaWdodDogbnVtYmVyIHwgc3RyaW5nLCBzdHJQcmludE5hbWU6IHN0cmluZyk6IGJvb2xlYW47XG5cbiAgLyoqICjlop7lvLrlnosp5aKe5Yqg6LaF5paH5pys5omT5Y2w6aG5KOWbvuW9ouaooeW8jykgKi9cbiAgQUREX1BSSU5UX0hUTUwoXG4gICAgVG9wOiBudW1iZXIgfCBzdHJpbmcsXG4gICAgTGVmdDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIFdpZHRoOiBudW1iZXIgfCBzdHJpbmcsXG4gICAgSGVpZ2h0OiBudW1iZXIgfCBzdHJpbmcsXG4gICAgc3RySHRtbENvbnRlbnQ6IHN0cmluZyxcbiAgKTogdm9pZDtcblxuICAvKiogKOWinuW8uuWeiynlop7liqDooajmoLzmiZPljbDpobnvvIhVUkzmqKHlvI/vvIkgKi9cbiAgQUREX1BSSU5UX1RCVVJMKFRvcDogbnVtYmVyIHwgc3RyaW5nLCBMZWZ0OiBudW1iZXIgfCBzdHJpbmcsIFdpZHRoOiBudW1iZXIgfCBzdHJpbmcsIEhlaWdodDogbnVtYmVyIHwgc3RyaW5nLCBzdHJVUkw6IHN0cmluZyk6IHZvaWQ7XG5cbiAgLyoqICjlop7lvLrlnosp5aKe5Yqg57qv5paH5pys5omT5Y2w6aG5ICovXG4gIEFERF9QUklOVF9URVhUQShUb3A6IG51bWJlciB8IHN0cmluZywgTGVmdDogbnVtYmVyIHwgc3RyaW5nLCBXaWR0aDogbnVtYmVyIHwgc3RyaW5nLCBIZWlnaHQ6IG51bWJlciB8IHN0cmluZywgc3RyQ29udGVudDogc3RyaW5nKTogdm9pZDtcblxuICAvKiogKOWinuW8uuWeiynorr7nva7miZPljbDpobnpo47moLxBLCDnu6fmib8gYFNFVF9QUklOVF9TVFlMRWAg55qE5omA5pyJ5bGe5oCnICovXG4gIFNFVF9QUklOVF9TVFlMRUEodmFySXRlbU5hbWVJRDogbnVtYmVyIHwgc3RyaW5nLCBzdHJTdHlsZU5hbWU6IHN0cmluZywgdmFyU3R5bGVWYWx1ZTogbnVtYmVyIHwgc3RyaW5nKTogdm9pZDtcblxuICAvKiogKOWinuW8uuWeiynlr7zlh7rmlbDmja7liLDmlofku7YgKi9cbiAgU0FWRV9UT19GSUxFKHN0ckZpbGVOYW1lOiBzdHJpbmcpOiBib29sZWFuO1xuXG4gIC8qKiAo5aKe5by65Z6LKeiuvue9ruS/neWtmOaooeW8jyAqL1xuICBTRVRfU0FWRV9NT0RFKHZhck1vZGVOYW1lOiBzdHJpbmcsIHZhck1vZGVWYWx1ZTogbnVtYmVyIHwgc3RyaW5nKTogYm9vbGVhbjtcblxuICAvKiogKOWinuW8uuWeiynlop7liqDlm77lvaIgKi9cbiAgQUREX1BSSU5UX1NIQVBFKFxuICAgIGludFNoYXBlVHlwZTogbnVtYmVyLFxuICAgIFRvcDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIExlZnQ6IG51bWJlciB8IHN0cmluZyxcbiAgICBXaWR0aDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIEhlaWdodDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIGludExpbmVTdHlsZTogbnVtYmVyLFxuICAgIGludExpbmVXaWR0aDogbnVtYmVyLFxuICAgIHZhckNvbG9yOiBudW1iZXIgfCBzdHJpbmcsXG4gICk6IHZvaWQ7XG5cbiAgLyoqICjlop7lvLrlnosp5oyH5a6a5omT5Y2w6K6+5aSHICovXG4gIFNFVF9QUklOVEVSX0lOREVYQShvSW5kZXhPck5hbWU6IG51bWJlciB8IHN0cmluZyk6IGJvb2xlYW47XG5cbiAgLyoqICjlop7lvLrlnosp5by65Yi25YiG6aG1ICovXG4gIE5FV1BBR0VBKCk6IGJvb2xlYW47XG5cbiAgLyoqICjlop7lvLrlnosp5omT5Y2w6aKE6KeIQSAqL1xuICBQUkVWSUVXQSgpOiBudW1iZXI7XG5cbiAgLyoqICjlop7lvLrlnosp5omT5Y2w6aKE6KeIQiAqL1xuICBQUkVWSUVXQigpOiBudW1iZXI7XG5cbiAgLyoqIOebtOaOpeaJk+WNsEEgKi9cbiAgUFJJTlRBKCk6IGJvb2xlYW47XG5cbiAgLyoqIOebtOaOpeaJk+WNsEIgKi9cbiAgUFJJTlRCKCk6IGJvb2xlYW47XG5cbiAgLyoqIOaYvuekuuWbvuihqCAqL1xuICBTSE9XX0NIQVJUKCk6IHZvaWQ7XG5cbiAgLyoqIOaOp+WItueVjOmdouWKqOS9nCAqL1xuICBET19BQ1RJT04oQWN0TmFtZTogc3RyaW5nLCBBY3RWYWx1ZTogbnVtYmVyIHwgc3RyaW5nKTogdm9pZDtcblxuICAvKipcbiAgICog6K6+572u6L2v5Lu25Lqn5ZOB5rOo5YaM5L+h5oGvXG4gICAqXG4gICAqIEBwYXJhbSAgc3RyQ29tcGFueU5hbWUg5rOo5YaM5Y2V5L2N5ZCN56ew77yM55So6YCU5LiO5o6n5Lu25Y+C5pWwQ29tcGFueU5hbWXkuIDmoLfjgIJcbiAgICogQHBhcmFtICBzdHJMaWNlbnNlIOS4u+azqOWGjOWPt++8jOeUqOmAlOS4juaOp+S7tuWPguaVsExpY2Vuc2XkuIDmoLfjgIJcbiAgICogQHBhcmFtICBzdHJMaWNlbnNlQSDpmYTliqDms6jlhozlj7dB77yM55So6YCU5LiO5o6n5Lu25Y+C5pWwTGljZW5zZUHkuIDmoLfjgIJcbiAgICogQHBhcmFtICBzdHJMaWNlbnNlQiDpmYTliqDms6jlhozlj7dC77yM55So6YCU5LiO5o6n5Lu25Y+C5pWwTGljZW5zZULkuIDmoLfjgIJcbiAgICovXG4gIFNFVF9MSUNFTlNFUyhzdHJDb21wYW55TmFtZTogc3RyaW5nLCBzdHJMaWNlbnNlOiBzdHJpbmcsIHN0ckxpY2Vuc2VBPzogc3RyaW5nLCBzdHJMaWNlbnNlQj86IHN0cmluZyk6IHZvaWQ7XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcbiAgd2Vic2t0OiBXZWJTb2NrZXQ7XG59XG5cbmV4cG9ydCB0eXBlIExvZG9wU3R5bGVWYWx1ZSA9XG4gIHwgJ0ZvbnROYW1lJ1xuICB8ICdGb250U2l6ZSdcbiAgfCAnRm9udENvbG9yJ1xuICB8ICdCb2xkJ1xuICB8ICdJdGFsaWMnXG4gIHwgJ1VuZGVybGluZSdcbiAgfCAnQWxpZ25tZW50J1xuICB8ICdBbmdsZSdcbiAgfCAnSXRlbVR5cGUnXG4gIHwgJ0hPcmllbnQnXG4gIHwgJ1ZPcmllbnQnXG4gIHwgJ1BlbldpZHRoJ1xuICB8ICdQZW5TdHlsZSdcbiAgfCAnU3RyZXRjaCdcbiAgfCAnUHJldmlld09ubHknXG4gIHwgJ1JlYWRPbmx5JztcblxuZXhwb3J0IGludGVyZmFjZSBMb2RvcFJlc3VsdCB7XG4gIC8qKiDmmK/lkKbmiJDlip8gKi9cbiAgb2s6IGJvb2xlYW47XG4gIC8qKiDplJnor6/noIEgKi9cbiAgc3RhdHVzPzogc3RyaW5nO1xuICAvKiog5oiQ5Yqf5pe25pC65bimIExPRE9QIOWvueixoSAqL1xuICBsb2RvcD86IExvZG9wO1xuICAvKiog6ZSZ6K+v5L+h5oGvICovXG4gIGVycm9yPzogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvZG9wUHJpbnRSZXN1bHQge1xuICAvKiog5piv5ZCm5oiQ5YqfICovXG4gIG9rOiBib29sZWFuO1xuICAvKiog6ZSZ6K+v5L+h5oGvICovXG4gIGVycm9yPzogc3RyaW5nO1xuICAvKiog5Luj56CBICovXG4gIGNvZGU6IHN0cmluZztcbiAgLyoqIOWKqOaAgeWPguaVsOS4iuS4i+aWh+WvueixoSAqL1xuICBpdGVtOiBhbnk7XG4gIC8qKiDku6PnoIHop6PmnpDooajovr7lvI8gKi9cbiAgcGFyc2VyPzogUmVnRXhwO1xufVxuIl19