/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9kb3AudHlwZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL2xvZG9wLyIsInNvdXJjZXMiOlsibG9kb3AudHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLDRCQXFCQzs7Ozs7Ozs7OztJQWJDLDhCQUE4Qjs7Ozs7SUFHOUIsa0NBQW1DOzs7OztJQUduQywyQkFBc0U7Ozs7OztJQUd0RSx5REFBdUM7Ozs7Ozs7SUFHdkMsdUVBQTZEOzs7OztBQUcvRCwyQkF3VUM7Ozs7OztJQXBVQyx3QkFBZ0I7O0lBbVVoQix1QkFBa0I7Ozs7Ozs7Ozs7O0lBeFRsQix3REFBeUM7Ozs7Ozs7OztJQUd6QyxrR0FLUTs7Ozs7Ozs7OztJQUdSLHdGQU1ROzs7Ozs7Ozs7O0lBS1IsbUZBTVE7Ozs7Ozs7Ozs7SUFLUixtRkFNUTs7Ozs7Ozs7OztJQUtSLGdGQU1ROzs7Ozs7Ozs7O0lBR1IscUZBTVE7Ozs7Ozs7Ozs7SUFHUiwwRkFNUTs7Ozs7Ozs7Ozs7SUFHUixxR0FPUTs7Ozs7Ozs7Ozs7SUFHUix3R0FPUTs7Ozs7Ozs7Ozs7SUFHUixxR0FPUTs7Ozs7Ozs7Ozs7SUFHUixpR0FPUTs7Ozs7Ozs7Ozs7SUFHUiw4RkFPUTs7Ozs7OztJQUdSLDJFQUE4RDs7Ozs7OztJQUc5RCw2RUFBcUY7Ozs7O0lBR3JGLDBDQUFrQjs7Ozs7SUFHbEIsd0NBQWdCOzs7OztJQUdoQiw4Q0FBc0I7Ozs7O0lBR3RCLCtDQUF1Qjs7Ozs7SUFHdkIsMENBQW1COzs7OztJQUduQixvREFBNEI7Ozs7OztJQUc1QixzRUFBK0Q7Ozs7OztJQUcvRCxnRUFBMEQ7Ozs7Ozs7O0lBRTFELDhGQUlXOzs7OztJQUdYLGlEQUF5Qjs7Ozs7OztJQUd6Qix5RUFBMkU7Ozs7Ozs7SUFHM0UsMEVBQXFGOzs7Ozs7SUFHckYsNERBQTZDOzs7Ozs7Ozs7OztJQUc3Qyx1SUFPUTs7Ozs7O0lBR1Isa0VBQWdEOzs7Ozs7SUFHaEQsK0RBQWdEOzs7Ozs7O0lBR2hELHNFQUErRDs7Ozs7O0lBRy9ELDREQUE0Qzs7Ozs7O0lBRzVDLGtFQUFrRDs7Ozs7OztJQUdsRCwyRUFBNEU7Ozs7Ozs7O0lBRzVFLG9GQUE2Rjs7Ozs7O0lBRzdGLDJEQUFrRDs7Ozs7O0lBR2xELDJEQUFrRDs7Ozs7O0lBR2xELDJEQUE0Qzs7Ozs7O0lBRzVDLDZEQUE4Qzs7Ozs7OztJQUc5QyxpRUFBK0Q7Ozs7Ozs7SUFHL0Qsc0RBQXdDOzs7Ozs7O0lBR3hDLG1FQUEyRDs7Ozs7Ozs7OztJQUczRCxvRkFNVzs7Ozs7Ozs7OztJQUdYLHlGQU1ROzs7Ozs7Ozs7O0lBR1Isa0ZBTVE7Ozs7Ozs7Ozs7SUFHUixzRkFNUTs7Ozs7Ozs7SUFHUiw2RkFBNkc7Ozs7OztJQUc3RywwREFBMkM7Ozs7Ozs7SUFHM0MseUVBQTJFOzs7Ozs7Ozs7Ozs7O0lBRzNFLDhIQVNROzs7Ozs7SUFHUixpRUFBMkQ7Ozs7O0lBRzNELDJDQUFvQjs7Ozs7SUFHcEIsMkNBQW1COzs7OztJQUduQiwyQ0FBbUI7Ozs7O0lBR25CLHlDQUFrQjs7Ozs7SUFHbEIseUNBQWtCOzs7OztJQUdsQiw2Q0FBbUI7Ozs7Ozs7SUFHbkIsNkRBQTREOzs7Ozs7Ozs7O0lBVTVELG1HQUEyRzs7Ozs7QUF3QjdHLGlDQVNDOzs7Ozs7SUFQQyx5QkFBWTs7Ozs7SUFFWiw2QkFBZ0I7Ozs7O0lBRWhCLDRCQUFjOzs7OztJQUVkLDRCQUFZOzs7OztBQUdkLHNDQVdDOzs7Ozs7SUFUQyw4QkFBWTs7Ozs7SUFFWixpQ0FBZTs7Ozs7SUFFZixnQ0FBYTs7Ozs7SUFFYixnQ0FBVTs7Ozs7SUFFVixrQ0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIENMb2RvcCB7XG4gIC8qKlxuICAgKiDliKTmlq3mmK/lkKbmlK/mjIFodHRwc+WNj+iurueahOWxnuaAp1xuICAgKlxuICAgKiAtIDAg5LiN5pSv5oyBXG4gICAqIC0gMSDmlK/mjIFcbiAgICogLSAyIOaUr+aMgeS4lOW3suWQr+WKqO+8iGh0dHBz5pyN5Yqh6ZyA5Y2V54us5ZCv5YqoKVxuICAgKi9cbiAgcmVhZG9ubHkgSFRUUFNfU1RBVFVTOiBudW1iZXI7XG5cbiAgLyoqIOe7k+aenOWbnuiwg+WHveaVsOS/neeVmSAqL1xuICByZWFkb25seSBPbl9SZXR1cm5fUmVtYWluOiBib29sZWFuO1xuXG4gIC8qKiDnu5Pmnpzlm57osIPlh73mlbAgKi9cbiAgT25fUmV0dXJuOiAoKHRhc2tJRDogc3RyaW5nLCB2YWx1ZTogYm9vbGVhbiB8IHN0cmluZykgPT4gdm9pZCkgfCBudWxsO1xuXG4gIC8qKiDlu7rnq4vmiZPljbDmnLrlkI3ljZUgKi9cbiAgQ3JlYXRlX1ByaW50ZXJfTGlzdChlbDogRWxlbWVudCk6IHZvaWQ7XG5cbiAgLyoqIOW7uueri+e6uOW8oOexu+Wei+WQjeWNlSAqL1xuICBDcmVhdGVfUGFnZVNpemVfTGlzdChlbDogRWxlbWVudCwgaVByaW50SW5kZXg6IG51bWJlcik6IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9kb3AgZXh0ZW5kcyBDTG9kb3Age1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG5cbiAgLyoqIOiOt+W+l+i9r+S7tueJiOacrOWPtyAqL1xuICBWRVJTSU9OOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIOaJk+WNsOWIneWni+WMluOAguWIneWni+WMlui/kOihjOeOr+Wig++8jOa4heeQhuW8guW4uOaJk+WNsOmBl+eVmeeahOezu+e7n+i1hOa6kO+8jOiuvuWumuaJk+WNsOS7u+WKoeWQjeOAglxuICAgKlxuICAgKiAqKuW7uuiuruaIluimgeaxgu+8mioq6K+l5Ye95pWw5LiOUFJJTlRfSU5JVEHpg73mnInliJ3lp4vljJblip/og73vvIzmr4/kuKrmiZPljbDkuovliqHoh7PlsJHliJ3lp4vljJbkuIDmrKHvvIzlu7rorq7miZPljbDnqIvluo/pppblhYjosIPnlKjor6Xlh73mlbDjgILku7vliqHlkI3opoHlsL3ph4/ljLrliKvkuo7lhbblroPmiZPljbDku7vliqHvvIzorazlpoLnlKjigJxYWOWNleS9jV9YWOeuoeeQhuS/oeaBr+ezu+e7n19YWOWtkOezu+e7n19YWOaooeWdl19YWOaJk+WNsOS9nOS4muKAneWtl+agt+OAglxuICAgKiDkuI3luIzmnJvmnIDnu4jnlKjmiLfmm7TmlLnmiZPljbDluIPlsYDml7bvvIzliJnorr5zdHJUYXNrTmFtZeepuuOAglxuICAgKlxuICAgKiBAcGFyYW0gc3RyVGFza05hbWUg5omT5Y2w5Lu75Yqh5ZCNXG4gICAqIEByZXR1cm5zIOi/lOWbnumAu+i+keecn+ihqOekuuWIneWni+WMluaIkOWKn++8jOmAu+i+keWBh+ihqOekuuWIneWni+WMluWksei0pe+8jOWksei0peWOn+WboOacie+8muWJjeS4gOS4quaJk+WNsOS6i+WKoeayoeacieWujOaIkO+8m+aTjeS9nOezu+e7n+ayoeaciea3u+WKoOaJk+WNsOacuijpqbHliqgp562JXG4gICAqL1xuICBQUklOVF9JTklUKHN0clRhc2tOYW1lOiBzdHJpbmcpOiBib29sZWFuO1xuXG4gIC8qKiDorr7lrprnurjlvKDlpKflsI8gKi9cbiAgU0VUX1BSSU5UX1BBR0VTSVpFKFxuICAgIGludE9yaWVudDogbnVtYmVyLFxuICAgIFBhZ2VXaWR0aDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIFBhZ2VIZWlnaHQ6IG51bWJlciB8IHN0cmluZyxcbiAgICBzdHJQYWdlTmFtZTogc3RyaW5nLFxuICApOiB2b2lkO1xuXG4gIC8qKiDlop7liqDotoXmlofmnKzmiZPljbDpobko5pmu6YCa5qih5byPKSAqL1xuICBBRERfUFJJTlRfSFRNKFxuICAgIFRvcDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIExlZnQ6IG51bWJlciB8IHN0cmluZyxcbiAgICBXaWR0aDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIEhlaWdodDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIHN0ckh0bWxDb250ZW50OiBzdHJpbmcsXG4gICk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIOWinuWKoOihqOagvOaJk+WNsOmhue+8iOi2heaWh+acrOaooeW8j++8iVxuICAgKi9cbiAgQUREX1BSSU5UX1RBQkxFKFxuICAgIFRvcDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIExlZnQ6IG51bWJlciB8IHN0cmluZyxcbiAgICBXaWR0aDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIEhlaWdodDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIHN0ckh0bWw6IHN0cmluZyxcbiAgKTogdm9pZDtcblxuICAvKipcbiAgICog5aKe5Yqg6KGo5qC85omT5Y2w6aG577yI6LaF5paH5pys5qih5byP77yJXG4gICAqL1xuICBBRERfUFJJTlRfVEFCTEUoXG4gICAgVG9wOiBudW1iZXIgfCBzdHJpbmcsXG4gICAgTGVmdDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIFdpZHRoOiBudW1iZXIgfCBzdHJpbmcsXG4gICAgSGVpZ2h0OiBudW1iZXIgfCBzdHJpbmcsXG4gICAgc3RySHRtbDogc3RyaW5nLFxuICApOiB2b2lkO1xuXG4gIC8qKlxuICAgKiDlop7liqDotoXmlofmnKzmiZPljbDpobnvvIhVUkzmqKHlvI/vvIlcbiAgICovXG4gIEFERF9QUklOVF9VUkwoXG4gICAgVG9wOiBudW1iZXIgfCBzdHJpbmcsXG4gICAgTGVmdDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIFdpZHRoOiBudW1iZXIgfCBzdHJpbmcsXG4gICAgSGVpZ2h0OiBudW1iZXIgfCBzdHJpbmcsXG4gICAgc3RyVVJMOiBzdHJpbmcsXG4gICk6IHZvaWQ7XG5cbiAgLyoqIOWinuWKoOe6r+aWh+acrOaJk+WNsOmhuSAqL1xuICBBRERfUFJJTlRfVEVYVChcbiAgICBUb3A6IG51bWJlciB8IHN0cmluZyxcbiAgICBMZWZ0OiBudW1iZXIgfCBzdHJpbmcsXG4gICAgV2lkdGg6IG51bWJlciB8IHN0cmluZyxcbiAgICBIZWlnaHQ6IG51bWJlciB8IHN0cmluZyxcbiAgICBzdHJDb250ZW50OiBzdHJpbmcsXG4gICk6IHZvaWQ7XG5cbiAgLyoqIOWinuWKoOWbvueJh+aJk+WNsOmhuSAqL1xuICBBRERfUFJJTlRfSU1BR0UoXG4gICAgVG9wOiBudW1iZXIgfCBzdHJpbmcsXG4gICAgTGVmdDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIFdpZHRoOiBudW1iZXIgfCBzdHJpbmcsXG4gICAgSGVpZ2h0OiBudW1iZXIgfCBzdHJpbmcsXG4gICAgc3RySHRtbENvbnRlbnQ6IHN0cmluZyxcbiAgKTogdm9pZDtcblxuICAvKiog5aKe5Yqg55+p5b2i57q/ICovXG4gIEFERF9QUklOVF9SRUNUKFxuICAgIFRvcDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIExlZnQ6IG51bWJlciB8IHN0cmluZyxcbiAgICBXaWR0aDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIEhlaWdodDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIGludExpbmVTdHlsZTogbnVtYmVyLFxuICAgIGludExpbmVXaWR0aDogbnVtYmVyLFxuICApOiB2b2lkO1xuXG4gIC8qKiDlop7liqDmpK3lnIbnur8gKi9cbiAgQUREX1BSSU5UX0VMTElQU0UoXG4gICAgVG9wOiBudW1iZXIgfCBzdHJpbmcsXG4gICAgTGVmdDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIFdpZHRoOiBudW1iZXIgfCBzdHJpbmcsXG4gICAgSGVpZ2h0OiBudW1iZXIgfCBzdHJpbmcsXG4gICAgaW50TGluZVN0eWxlOiBudW1iZXIsXG4gICAgaW50TGluZVdpZHRoOiBudW1iZXIsXG4gICk6IHZvaWQ7XG5cbiAgLyoqIOWinuWKoOebtOe6vyAqL1xuICBBRERfUFJJTlRfTElORShcbiAgICBUb3AxOiBudW1iZXIgfCBzdHJpbmcsXG4gICAgTGVmdDE6IG51bWJlciB8IHN0cmluZyxcbiAgICBUb3AyOiBudW1iZXIgfCBzdHJpbmcsXG4gICAgTGVmdDI6IG51bWJlciB8IHN0cmluZyxcbiAgICBpbnRMaW5lU3R5bGU6IG51bWJlcixcbiAgICBpbnRMaW5lV2lkdGg6IG51bWJlcixcbiAgKTogdm9pZDtcblxuICAvKiog5aKe5Yqg5p2h5b2i56CBICovXG4gIEFERF9QUklOVF9CQVJDT0RFKFxuICAgIFRvcDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIExlZnQ6IG51bWJlciB8IHN0cmluZyxcbiAgICBXaWR0aDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIEhlaWdodDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIENvZGVUeXBlOiBzdHJpbmcsXG4gICAgQ29kZVZhbHVlOiBzdHJpbmcsXG4gICk6IHZvaWQ7XG5cbiAgLyoqIOWinuWKoOWbvuihqCAqL1xuICBBRERfUFJJTlRfQ0hBUlQoXG4gICAgVG9wOiBudW1iZXIgfCBzdHJpbmcsXG4gICAgTGVmdDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIFdpZHRoOiBudW1iZXIgfCBzdHJpbmcsXG4gICAgSGVpZ2h0OiBudW1iZXIgfCBzdHJpbmcsXG4gICAgQ2hhcnRUeXBlOiBudW1iZXIsXG4gICAgc3RySHRtbDogc3RyaW5nLFxuICApOiB2b2lkO1xuXG4gIC8qKiDoo4Xovb3mlofmoaPlvI/mqKHmnb8gKi9cbiAgQUREX1BSSU5UX0RBVEEoc3RyRGF0YVN0eWxlOiBzdHJpbmcsIHZhckRhdGFWYWx1ZTogYW55KTogdm9pZDtcblxuICAvKiog6K6+572u5omT5Y2w6aG56aOO5qC8ICovXG4gIFNFVF9QUklOVF9TVFlMRShzdHJTdHlsZU5hbWU6IExvZG9wU3R5bGVWYWx1ZSwgdmFyU3R5bGVWYWx1ZTogbnVtYmVyIHwgc3RyaW5nKTogdm9pZDtcblxuICAvKiog5omT5Y2w6aKE6KeIICovXG4gIFBSRVZJRVcoKTogbnVtYmVyO1xuXG4gIC8qKiDnm7TmjqXmiZPljbAgKi9cbiAgUFJJTlQoKTogc3RyaW5nO1xuXG4gIC8qKiDmiZPljbDnu7TmiqQgKi9cbiAgUFJJTlRfU0VUVVAoKTogc3RyaW5nO1xuXG4gIC8qKiDmiZPljbDorr7orqEgKi9cbiAgUFJJTlRfREVTSUdOKCk6IHN0cmluZztcblxuICAvKiog5by65Yi25YiG6aG1ICovXG4gIE5FV1BBR0UoKTogYm9vbGVhbjtcblxuICAvKiog6I635b6X5omT5Y2w6K6+5aSH5Liq5pWwICovXG4gIEdFVF9QUklOVEVSX0NPVU5UKCk6IG51bWJlcjtcblxuICAvKiog6I635b6X5omT5Y2w6K6+5aSH5ZCN56ewICovXG4gIEdFVF9QUklOVEVSX05BTUUoc3RyUHJpbnRlcklEYW5kVHlwZTogbnVtYmVyIHwgc3RyaW5nKTogc3RyaW5nO1xuXG4gIC8qKiDmjIflrprmiZPljbDorr7lpIcgKi9cbiAgU0VUX1BSSU5URVJfSU5ERVgob0luZGV4T3JOYW1lOiBudW1iZXIgfCBzdHJpbmcpOiBib29sZWFuO1xuICAvKiog44CQQ0xvZG9w44CR5oyH5a6a5omT5Y2w5py6ICovXG4gIFNFVF9QUklOVEVSX0lOREVYKFxuICAgIERyaXZlckluZGV4OiBudW1iZXIgfCBzdHJpbmcsXG4gICAgUHJpbnRlcklEYW5kTmFtZTogbnVtYmVyIHwgc3RyaW5nLFxuICAgIFN1YkRldkluZGV4OiBudW1iZXIgfCBzdHJpbmcsXG4gICk6IGJvb2xlYW47XG5cbiAgLyoqIOmAieaLqeaJk+WNsOiuvuWkhyAqL1xuICBTRUxFQ1RfUFJJTlRFUigpOiBudW1iZXI7XG5cbiAgLyoqIOiuvue9ruaYvuekuuaooeW8jyAqL1xuICBTRVRfU0hPV19NT0RFKHN0ck1vZGVUeXBlOiBzdHJpbmcsIHZhck1vZGVWYWx1ZTogbnVtYmVyIHwgc3RyaW5nKTogYm9vbGVhbjtcblxuICAvKiog6K6+572u5omT5Y2w5qih5byPICovXG4gIFNFVF9QUklOVF9NT0RFKHN0ck1vZGVUeXBlOiBzdHJpbmcsIHZhck1vZGVWYWx1ZTogbnVtYmVyIHwgc3RyaW5nKTogYm9vbGVhbiB8IHN0cmluZztcblxuICAvKiog6K6+572u5omT5Y2w5Lu95pWwICovXG4gIFNFVF9QUklOVF9DT1BJRVMoaW50Q29waWVzOiBudW1iZXIpOiBib29sZWFuO1xuXG4gIC8qKiDorr7nva7pooTop4jnqpflj6MgKi9cbiAgU0VUX1BSRVZJRVdfV0lORE9XKFxuICAgIGludERpc3BNb2RlOiBudW1iZXIsXG4gICAgaW50VG9vbE1vZGU6IG51bWJlcixcbiAgICBibERpcmVjdFByaW50OiBudW1iZXIsXG4gICAgaW5XaWR0aDogbnVtYmVyLFxuICAgIGludEhlaWdodDogbnVtYmVyLFxuICAgIHN0clRpdGxlQnV0dG9uQ2FwdG9pbjogc3RyaW5nLFxuICApOiB2b2lkO1xuXG4gIC8qKiDmjIflrprog4zmma/lm74gKi9cbiAgQUREX1BSSU5UX1NFVFVQX0JLSU1HKHN0ckltZ0h0bWw6IHN0cmluZyk6IHZvaWQ7XG5cbiAgLyoqIOWPkemAgeWOn+Wni+aVsOaNriAqL1xuICBTRU5EX1BSSU5UX1JBV0RBVEEoc3RyUmF3RGF0YTogc3RyaW5nKTogYm9vbGVhbjtcblxuICAvKiog5YaZ56uv5Y+j5pWw5o2uICovXG4gIFdSSVRFX1BPUlRfREFUQShzdHJQb3J0TmFtZTogc3RyaW5nLCBzdHJEYXRhOiBzdHJpbmcpOiBib29sZWFuO1xuXG4gIC8qKiDor7vnq6/lj6PmlbDmja4gKi9cbiAgUkVBRF9QT1JUX0RBVEEoc3RyUG9ydE5hbWU6IHN0cmluZyk6IHN0cmluZztcblxuICAvKiog6I635b6X6YWN572u5paH5Lu25ZCNICovXG4gIEdFVF9QUklOVF9JTklGRk5BTUUoc3RyUHJpbnRUYXNrOiBzdHJpbmcpOiBzdHJpbmc7XG5cbiAgLyoqIOiOt+W+l+e6uOW8oOexu+Wei+WQjea4heWNlSAqL1xuICBHRVRfUEFHRVNJWkVTX0xJU1Qob1ByaW50ZXJOYW1lOiBudW1iZXIgfCBzdHJpbmcsIHN0clNwbGl0OiBzdHJpbmcpOiBzdHJpbmc7XG5cbiAgLyoqIOWGmeacrOWcsOaWh+S7tuWGheWuuSAqL1xuICBXUklURV9GSUxFX1RFWFQoaW50V3JpdGVNb2RlOiBudW1iZXIgfCBzdHJpbmcsIHN0ckZpbGVOYW1lOiBzdHJpbmcsIHN0clRleHQ6IHN0cmluZyk6IHN0cmluZztcblxuICAvKiog6K+75pys5Zyw5paH5Lu25YaF5a65ICovXG4gIEdFVF9GSUxFX1RFWFQoc3RyRmlsZU5hbWU6IHN0cmluZyk6IHN0cmluZyB8IG51bGw7XG5cbiAgLyoqIOivu+acrOWcsOaWh+S7tuaXtumXtCAqL1xuICBHRVRfRklMRV9USU1FKHN0ckZpbGVOYW1lOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsO1xuXG4gIC8qKiDliKTmlq3mnKzlnLDmlofku7bmmK/lkKblrZjlnKggKi9cbiAgSVNfRklMRV9FWElTVChzdHJGaWxlTmFtZTogc3RyaW5nKTogYm9vbGVhbjtcblxuICAvKiog6I635b6X57O757uf5L+h5oGvICovXG4gIEdFVF9TWVNURU1fSU5GTyhzdHJJbmZvVHlwZTogc3RyaW5nKTogYm9vbGVhbjtcblxuICAvKiog6I635b6X5pWw5o2u5YC8ICovXG4gIEdFVF9WQUxVRShWYWx1ZVR5cGU6IHN0cmluZywgVmFsdWVJbmRleDogbnVtYmVyIHwgc3RyaW5nKTogYW55O1xuXG4gIC8qKiDmlbDmja7moLzlvI/ovazmjaIgKi9cbiAgRk9STUFUKG9UeXBlOiBzdHJpbmcsIG9WYWx1ZTogYW55KTogYW55O1xuXG4gIC8qKiDojrflvpflr7nor53moYbnu5PmnpzlgLwgKi9cbiAgR0VUX0RJQUxPR19WQUxVRShvVHlwZTogc3RyaW5nLCBvUHJlVmFsdWU6IHN0cmluZyk6IHN0cmluZztcblxuICAvKiogKOWinuW8uuWeiynmiZPljbDliJ3lp4vljJYgKi9cbiAgUFJJTlRfSU5JVEEoXG4gICAgVG9wOiBudW1iZXIgfCBzdHJpbmcsXG4gICAgTGVmdDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIFdpZHRoOiBudW1iZXIgfCBzdHJpbmcsXG4gICAgSGVpZ2h0OiBudW1iZXIgfCBzdHJpbmcsXG4gICAgc3RyUHJpbnROYW1lOiBzdHJpbmcsXG4gICk6IGJvb2xlYW47XG5cbiAgLyoqICjlop7lvLrlnosp5aKe5Yqg6LaF5paH5pys5omT5Y2w6aG5KOWbvuW9ouaooeW8jykgKi9cbiAgQUREX1BSSU5UX0hUTUwoXG4gICAgVG9wOiBudW1iZXIgfCBzdHJpbmcsXG4gICAgTGVmdDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIFdpZHRoOiBudW1iZXIgfCBzdHJpbmcsXG4gICAgSGVpZ2h0OiBudW1iZXIgfCBzdHJpbmcsXG4gICAgc3RySHRtbENvbnRlbnQ6IHN0cmluZyxcbiAgKTogdm9pZDtcblxuICAvKiogKOWinuW8uuWeiynlop7liqDooajmoLzmiZPljbDpobnvvIhVUkzmqKHlvI/vvIkgKi9cbiAgQUREX1BSSU5UX1RCVVJMKFxuICAgIFRvcDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIExlZnQ6IG51bWJlciB8IHN0cmluZyxcbiAgICBXaWR0aDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIEhlaWdodDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIHN0clVSTDogc3RyaW5nLFxuICApOiB2b2lkO1xuXG4gIC8qKiAo5aKe5by65Z6LKeWinuWKoOe6r+aWh+acrOaJk+WNsOmhuSAqL1xuICBBRERfUFJJTlRfVEVYVEEoXG4gICAgVG9wOiBudW1iZXIgfCBzdHJpbmcsXG4gICAgTGVmdDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIFdpZHRoOiBudW1iZXIgfCBzdHJpbmcsXG4gICAgSGVpZ2h0OiBudW1iZXIgfCBzdHJpbmcsXG4gICAgc3RyQ29udGVudDogc3RyaW5nLFxuICApOiB2b2lkO1xuXG4gIC8qKiAo5aKe5by65Z6LKeiuvue9ruaJk+WNsOmhuemjjuagvEEsIOe7p+aJvyBgU0VUX1BSSU5UX1NUWUxFYCDnmoTmiYDmnInlsZ7mgKcgKi9cbiAgU0VUX1BSSU5UX1NUWUxFQSh2YXJJdGVtTmFtZUlEOiBudW1iZXIgfCBzdHJpbmcsIHN0clN0eWxlTmFtZTogc3RyaW5nLCB2YXJTdHlsZVZhbHVlOiBudW1iZXIgfCBzdHJpbmcpOiB2b2lkO1xuXG4gIC8qKiAo5aKe5by65Z6LKeWvvOWHuuaVsOaNruWIsOaWh+S7tiAqL1xuICBTQVZFX1RPX0ZJTEUoc3RyRmlsZU5hbWU6IHN0cmluZyk6IGJvb2xlYW47XG5cbiAgLyoqICjlop7lvLrlnosp6K6+572u5L+d5a2Y5qih5byPICovXG4gIFNFVF9TQVZFX01PREUodmFyTW9kZU5hbWU6IHN0cmluZywgdmFyTW9kZVZhbHVlOiBudW1iZXIgfCBzdHJpbmcpOiBib29sZWFuO1xuXG4gIC8qKiAo5aKe5by65Z6LKeWinuWKoOWbvuW9oiAqL1xuICBBRERfUFJJTlRfU0hBUEUoXG4gICAgaW50U2hhcGVUeXBlOiBudW1iZXIsXG4gICAgVG9wOiBudW1iZXIgfCBzdHJpbmcsXG4gICAgTGVmdDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIFdpZHRoOiBudW1iZXIgfCBzdHJpbmcsXG4gICAgSGVpZ2h0OiBudW1iZXIgfCBzdHJpbmcsXG4gICAgaW50TGluZVN0eWxlOiBudW1iZXIsXG4gICAgaW50TGluZVdpZHRoOiBudW1iZXIsXG4gICAgdmFyQ29sb3I6IG51bWJlciB8IHN0cmluZyxcbiAgKTogdm9pZDtcblxuICAvKiogKOWinuW8uuWeiynmjIflrprmiZPljbDorr7lpIcgKi9cbiAgU0VUX1BSSU5URVJfSU5ERVhBKG9JbmRleE9yTmFtZTogbnVtYmVyIHwgc3RyaW5nKTogYm9vbGVhbjtcblxuICAvKiogKOWinuW8uuWeiynlvLrliLbliIbpobUgKi9cbiAgTkVXUEFHRUEoKTogYm9vbGVhbjtcblxuICAvKiogKOWinuW8uuWeiynmiZPljbDpooTop4hBICovXG4gIFBSRVZJRVdBKCk6IG51bWJlcjtcblxuICAvKiogKOWinuW8uuWeiynmiZPljbDpooTop4hCICovXG4gIFBSRVZJRVdCKCk6IG51bWJlcjtcblxuICAvKiog55u05o6l5omT5Y2wQSAqL1xuICBQUklOVEEoKTogYm9vbGVhbjtcblxuICAvKiog55u05o6l5omT5Y2wQiAqL1xuICBQUklOVEIoKTogYm9vbGVhbjtcblxuICAvKiog5pi+56S65Zu+6KGoICovXG4gIFNIT1dfQ0hBUlQoKTogdm9pZDtcblxuICAvKiog5o6n5Yi255WM6Z2i5Yqo5L2cICovXG4gIERPX0FDVElPTihBY3ROYW1lOiBzdHJpbmcsIEFjdFZhbHVlOiBudW1iZXIgfCBzdHJpbmcpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiDorr7nva7ova/ku7bkuqflk4Hms6jlhozkv6Hmga9cbiAgICpcbiAgICogQHBhcmFtICBzdHJDb21wYW55TmFtZSDms6jlhozljZXkvY3lkI3np7DvvIznlKjpgJTkuI7mjqfku7blj4LmlbBDb21wYW55TmFtZeS4gOagt+OAglxuICAgKiBAcGFyYW0gIHN0ckxpY2Vuc2Ug5Li75rOo5YaM5Y+377yM55So6YCU5LiO5o6n5Lu25Y+C5pWwTGljZW5zZeS4gOagt+OAglxuICAgKiBAcGFyYW0gIHN0ckxpY2Vuc2VBIOmZhOWKoOazqOWGjOWPt0HvvIznlKjpgJTkuI7mjqfku7blj4LmlbBMaWNlbnNlQeS4gOagt+OAglxuICAgKiBAcGFyYW0gIHN0ckxpY2Vuc2VCIOmZhOWKoOazqOWGjOWPt0LvvIznlKjpgJTkuI7mjqfku7blj4LmlbBMaWNlbnNlQuS4gOagt+OAglxuICAgKi9cbiAgU0VUX0xJQ0VOU0VTKHN0ckNvbXBhbnlOYW1lOiBzdHJpbmcsIHN0ckxpY2Vuc2U6IHN0cmluZywgc3RyTGljZW5zZUE/OiBzdHJpbmcsIHN0ckxpY2Vuc2VCPzogc3RyaW5nKTogdm9pZDtcblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xuICB3ZWJza3Q6IFdlYlNvY2tldDtcbn1cblxuZXhwb3J0IHR5cGUgTG9kb3BTdHlsZVZhbHVlID1cbiAgfCAnRm9udE5hbWUnXG4gIHwgJ0ZvbnRTaXplJ1xuICB8ICdGb250Q29sb3InXG4gIHwgJ0JvbGQnXG4gIHwgJ0l0YWxpYydcbiAgfCAnVW5kZXJsaW5lJ1xuICB8ICdBbGlnbm1lbnQnXG4gIHwgJ0FuZ2xlJ1xuICB8ICdJdGVtVHlwZSdcbiAgfCAnSE9yaWVudCdcbiAgfCAnVk9yaWVudCdcbiAgfCAnUGVuV2lkdGgnXG4gIHwgJ1BlblN0eWxlJ1xuICB8ICdTdHJldGNoJ1xuICB8ICdQcmV2aWV3T25seSdcbiAgfCAnUmVhZE9ubHknO1xuXG5leHBvcnQgaW50ZXJmYWNlIExvZG9wUmVzdWx0IHtcbiAgLyoqIOaYr+WQpuaIkOWKnyAqL1xuICBvazogYm9vbGVhbjtcbiAgLyoqIOmUmeivr+eggSAqL1xuICBzdGF0dXM/OiBzdHJpbmc7XG4gIC8qKiDmiJDlip/ml7bmkLrluKYgTE9ET1Ag5a+56LGhICovXG4gIGxvZG9wPzogTG9kb3A7XG4gIC8qKiDplJnor6/kv6Hmga8gKi9cbiAgZXJyb3I/OiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9kb3BQcmludFJlc3VsdCB7XG4gIC8qKiDmmK/lkKbmiJDlip8gKi9cbiAgb2s6IGJvb2xlYW47XG4gIC8qKiDplJnor6/kv6Hmga8gKi9cbiAgZXJyb3I/OiBzdHJpbmc7XG4gIC8qKiDku6PnoIEgKi9cbiAgY29kZTogc3RyaW5nO1xuICAvKiog5Yqo5oCB5Y+C5pWw5LiK5LiL5paH5a+56LGhICovXG4gIGl0ZW06IGFueTtcbiAgLyoqIOS7o+eggeino+aekOihqOi+vuW8jyAqL1xuICBwYXJzZXI/OiBSZWdFeHA7XG59XG4iXX0=