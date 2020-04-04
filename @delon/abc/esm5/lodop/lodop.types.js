/**
 * @fileoverview added by tsickle
 * Generated from: lodop.types.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9kb3AudHlwZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL2xvZG9wLyIsInNvdXJjZXMiOlsibG9kb3AudHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSw0QkFxQkM7Ozs7Ozs7Ozs7SUFiQyw4QkFBOEI7Ozs7O0lBRzlCLGtDQUFtQzs7Ozs7SUFHbkMsMkJBQXNFOzs7Ozs7SUFHdEUseURBQXVDOzs7Ozs7O0lBR3ZDLHVFQUE2RDs7Ozs7QUFHL0QsMkJBK1FDOzs7Ozs7SUEzUUMsd0JBQWdCOztJQTBRaEIsdUJBQWtCOzs7Ozs7Ozs7OztJQS9QbEIsd0RBQXlDOzs7Ozs7Ozs7SUFHekMsa0dBQTBIOzs7Ozs7Ozs7O0lBRzFILHdGQUEwSTs7Ozs7Ozs7OztJQUsxSSxtRkFBcUk7Ozs7Ozs7Ozs7SUFLckksbUZBQXFJOzs7Ozs7Ozs7O0lBS3JJLGdGQUFrSTs7Ozs7Ozs7OztJQUdsSSxxRkFBdUk7Ozs7Ozs7Ozs7SUFHdkksMEZBTVE7Ozs7Ozs7Ozs7O0lBR1IscUdBT1E7Ozs7Ozs7Ozs7O0lBR1Isd0dBT1E7Ozs7Ozs7Ozs7O0lBR1IscUdBT1E7Ozs7Ozs7Ozs7O0lBR1IsaUdBT1E7Ozs7Ozs7Ozs7O0lBR1IsOEZBT1E7Ozs7Ozs7SUFHUiwyRUFBOEQ7Ozs7Ozs7SUFHOUQsNkVBQXFGOzs7OztJQUdyRiwwQ0FBa0I7Ozs7O0lBR2xCLHdDQUFnQjs7Ozs7SUFHaEIsOENBQXNCOzs7OztJQUd0QiwrQ0FBdUI7Ozs7O0lBR3ZCLDBDQUFtQjs7Ozs7SUFHbkIsb0RBQTRCOzs7Ozs7SUFHNUIsc0VBQStEOzs7Ozs7SUFHL0QsZ0VBQTBEOzs7Ozs7OztJQUUxRCw4RkFBMEg7Ozs7O0lBRzFILGlEQUF5Qjs7Ozs7OztJQUd6Qix5RUFBMkU7Ozs7Ozs7SUFHM0UsMEVBQXFGOzs7Ozs7SUFHckYsNERBQTZDOzs7Ozs7Ozs7OztJQUc3Qyx1SUFPUTs7Ozs7O0lBR1Isa0VBQWdEOzs7Ozs7SUFHaEQsK0RBQWdEOzs7Ozs7O0lBR2hELHNFQUErRDs7Ozs7O0lBRy9ELDREQUE0Qzs7Ozs7O0lBRzVDLGtFQUFrRDs7Ozs7OztJQUdsRCwyRUFBNEU7Ozs7Ozs7O0lBRzVFLG9GQUE2Rjs7Ozs7O0lBRzdGLDJEQUFrRDs7Ozs7O0lBR2xELDJEQUFrRDs7Ozs7O0lBR2xELDJEQUE0Qzs7Ozs7O0lBRzVDLDZEQUE4Qzs7Ozs7OztJQUc5QyxpRUFBK0Q7Ozs7Ozs7SUFHL0Qsc0RBQXdDOzs7Ozs7O0lBR3hDLG1FQUEyRDs7Ozs7Ozs7OztJQUczRCxvRkFBeUk7Ozs7Ozs7Ozs7SUFHekkseUZBTVE7Ozs7Ozs7Ozs7SUFHUixrRkFBb0k7Ozs7Ozs7Ozs7SUFHcEksc0ZBQXdJOzs7Ozs7OztJQUd4SSw2RkFBNkc7Ozs7OztJQUc3RywwREFBMkM7Ozs7Ozs7SUFHM0MseUVBQTJFOzs7Ozs7Ozs7Ozs7O0lBRzNFLDhIQVNROzs7Ozs7SUFHUixpRUFBMkQ7Ozs7O0lBRzNELDJDQUFvQjs7Ozs7SUFHcEIsMkNBQW1COzs7OztJQUduQiwyQ0FBbUI7Ozs7O0lBR25CLHlDQUFrQjs7Ozs7SUFHbEIseUNBQWtCOzs7OztJQUdsQiw2Q0FBbUI7Ozs7Ozs7SUFHbkIsNkRBQTREOzs7Ozs7Ozs7O0lBVTVELG1HQUEyRzs7Ozs7QUF3QjdHLGlDQVNDOzs7Ozs7SUFQQyx5QkFBWTs7Ozs7SUFFWiw2QkFBZ0I7Ozs7O0lBRWhCLDRCQUFjOzs7OztJQUVkLDRCQUFZOzs7OztBQUdkLHNDQVdDOzs7Ozs7SUFUQyw4QkFBWTs7Ozs7SUFFWixpQ0FBZTs7Ozs7SUFFZixnQ0FBYTs7Ozs7SUFFYixnQ0FBVTs7Ozs7SUFFVixrQ0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIENMb2RvcCB7XG4gIC8qKlxuICAgKiDliKTmlq3mmK/lkKbmlK/mjIFodHRwc+WNj+iurueahOWxnuaAp1xuICAgKlxuICAgKiAtIDAg5LiN5pSv5oyBXG4gICAqIC0gMSDmlK/mjIFcbiAgICogLSAyIOaUr+aMgeS4lOW3suWQr+WKqO+8iGh0dHBz5pyN5Yqh6ZyA5Y2V54us5ZCv5YqoKVxuICAgKi9cbiAgcmVhZG9ubHkgSFRUUFNfU1RBVFVTOiBudW1iZXI7XG5cbiAgLyoqIOe7k+aenOWbnuiwg+WHveaVsOS/neeVmSAqL1xuICByZWFkb25seSBPbl9SZXR1cm5fUmVtYWluOiBib29sZWFuO1xuXG4gIC8qKiDnu5Pmnpzlm57osIPlh73mlbAgKi9cbiAgT25fUmV0dXJuOiAoKHRhc2tJRDogc3RyaW5nLCB2YWx1ZTogYm9vbGVhbiB8IHN0cmluZykgPT4gdm9pZCkgfCBudWxsO1xuXG4gIC8qKiDlu7rnq4vmiZPljbDmnLrlkI3ljZUgKi9cbiAgQ3JlYXRlX1ByaW50ZXJfTGlzdChlbDogRWxlbWVudCk6IHZvaWQ7XG5cbiAgLyoqIOW7uueri+e6uOW8oOexu+Wei+WQjeWNlSAqL1xuICBDcmVhdGVfUGFnZVNpemVfTGlzdChlbDogRWxlbWVudCwgaVByaW50SW5kZXg6IG51bWJlcik6IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9kb3AgZXh0ZW5kcyBDTG9kb3Age1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG5cbiAgLyoqIOiOt+W+l+i9r+S7tueJiOacrOWPtyAqL1xuICBWRVJTSU9OOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIOaJk+WNsOWIneWni+WMluOAguWIneWni+WMlui/kOihjOeOr+Wig++8jOa4heeQhuW8guW4uOaJk+WNsOmBl+eVmeeahOezu+e7n+i1hOa6kO+8jOiuvuWumuaJk+WNsOS7u+WKoeWQjeOAglxuICAgKlxuICAgKiAqKuW7uuiuruaIluimgeaxgu+8mioq6K+l5Ye95pWw5LiOUFJJTlRfSU5JVEHpg73mnInliJ3lp4vljJblip/og73vvIzmr4/kuKrmiZPljbDkuovliqHoh7PlsJHliJ3lp4vljJbkuIDmrKHvvIzlu7rorq7miZPljbDnqIvluo/pppblhYjosIPnlKjor6Xlh73mlbDjgILku7vliqHlkI3opoHlsL3ph4/ljLrliKvkuo7lhbblroPmiZPljbDku7vliqHvvIzorazlpoLnlKjigJxYWOWNleS9jV9YWOeuoeeQhuS/oeaBr+ezu+e7n19YWOWtkOezu+e7n19YWOaooeWdl19YWOaJk+WNsOS9nOS4muKAneWtl+agt+OAglxuICAgKiDkuI3luIzmnJvmnIDnu4jnlKjmiLfmm7TmlLnmiZPljbDluIPlsYDml7bvvIzliJnorr5zdHJUYXNrTmFtZeepuuOAglxuICAgKlxuICAgKiBAcGFyYW0gc3RyVGFza05hbWUg5omT5Y2w5Lu75Yqh5ZCNXG4gICAqIEByZXR1cm5zIOi/lOWbnumAu+i+keecn+ihqOekuuWIneWni+WMluaIkOWKn++8jOmAu+i+keWBh+ihqOekuuWIneWni+WMluWksei0pe+8jOWksei0peWOn+WboOacie+8muWJjeS4gOS4quaJk+WNsOS6i+WKoeayoeacieWujOaIkO+8m+aTjeS9nOezu+e7n+ayoeaciea3u+WKoOaJk+WNsOacuijpqbHliqgp562JXG4gICAqL1xuICBQUklOVF9JTklUKHN0clRhc2tOYW1lOiBzdHJpbmcpOiBib29sZWFuO1xuXG4gIC8qKiDorr7lrprnurjlvKDlpKflsI8gKi9cbiAgU0VUX1BSSU5UX1BBR0VTSVpFKGludE9yaWVudDogbnVtYmVyLCBQYWdlV2lkdGg6IG51bWJlciB8IHN0cmluZywgUGFnZUhlaWdodDogbnVtYmVyIHwgc3RyaW5nLCBzdHJQYWdlTmFtZTogc3RyaW5nKTogdm9pZDtcblxuICAvKiog5aKe5Yqg6LaF5paH5pys5omT5Y2w6aG5KOaZrumAmuaooeW8jykgKi9cbiAgQUREX1BSSU5UX0hUTShUb3A6IG51bWJlciB8IHN0cmluZywgTGVmdDogbnVtYmVyIHwgc3RyaW5nLCBXaWR0aDogbnVtYmVyIHwgc3RyaW5nLCBIZWlnaHQ6IG51bWJlciB8IHN0cmluZywgc3RySHRtbENvbnRlbnQ6IHN0cmluZyk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIOWinuWKoOihqOagvOaJk+WNsOmhue+8iOi2heaWh+acrOaooeW8j++8iVxuICAgKi9cbiAgQUREX1BSSU5UX1RBQkxFKFRvcDogbnVtYmVyIHwgc3RyaW5nLCBMZWZ0OiBudW1iZXIgfCBzdHJpbmcsIFdpZHRoOiBudW1iZXIgfCBzdHJpbmcsIEhlaWdodDogbnVtYmVyIHwgc3RyaW5nLCBzdHJIdG1sOiBzdHJpbmcpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiDlop7liqDooajmoLzmiZPljbDpobnvvIjotoXmlofmnKzmqKHlvI/vvIlcbiAgICovXG4gIEFERF9QUklOVF9UQUJMRShUb3A6IG51bWJlciB8IHN0cmluZywgTGVmdDogbnVtYmVyIHwgc3RyaW5nLCBXaWR0aDogbnVtYmVyIHwgc3RyaW5nLCBIZWlnaHQ6IG51bWJlciB8IHN0cmluZywgc3RySHRtbDogc3RyaW5nKTogdm9pZDtcblxuICAvKipcbiAgICog5aKe5Yqg6LaF5paH5pys5omT5Y2w6aG577yIVVJM5qih5byP77yJXG4gICAqL1xuICBBRERfUFJJTlRfVVJMKFRvcDogbnVtYmVyIHwgc3RyaW5nLCBMZWZ0OiBudW1iZXIgfCBzdHJpbmcsIFdpZHRoOiBudW1iZXIgfCBzdHJpbmcsIEhlaWdodDogbnVtYmVyIHwgc3RyaW5nLCBzdHJVUkw6IHN0cmluZyk6IHZvaWQ7XG5cbiAgLyoqIOWinuWKoOe6r+aWh+acrOaJk+WNsOmhuSAqL1xuICBBRERfUFJJTlRfVEVYVChUb3A6IG51bWJlciB8IHN0cmluZywgTGVmdDogbnVtYmVyIHwgc3RyaW5nLCBXaWR0aDogbnVtYmVyIHwgc3RyaW5nLCBIZWlnaHQ6IG51bWJlciB8IHN0cmluZywgc3RyQ29udGVudDogc3RyaW5nKTogdm9pZDtcblxuICAvKiog5aKe5Yqg5Zu+54mH5omT5Y2w6aG5ICovXG4gIEFERF9QUklOVF9JTUFHRShcbiAgICBUb3A6IG51bWJlciB8IHN0cmluZyxcbiAgICBMZWZ0OiBudW1iZXIgfCBzdHJpbmcsXG4gICAgV2lkdGg6IG51bWJlciB8IHN0cmluZyxcbiAgICBIZWlnaHQ6IG51bWJlciB8IHN0cmluZyxcbiAgICBzdHJIdG1sQ29udGVudDogc3RyaW5nLFxuICApOiB2b2lkO1xuXG4gIC8qKiDlop7liqDnn6nlvaLnur8gKi9cbiAgQUREX1BSSU5UX1JFQ1QoXG4gICAgVG9wOiBudW1iZXIgfCBzdHJpbmcsXG4gICAgTGVmdDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIFdpZHRoOiBudW1iZXIgfCBzdHJpbmcsXG4gICAgSGVpZ2h0OiBudW1iZXIgfCBzdHJpbmcsXG4gICAgaW50TGluZVN0eWxlOiBudW1iZXIsXG4gICAgaW50TGluZVdpZHRoOiBudW1iZXIsXG4gICk6IHZvaWQ7XG5cbiAgLyoqIOWinuWKoOakreWchue6vyAqL1xuICBBRERfUFJJTlRfRUxMSVBTRShcbiAgICBUb3A6IG51bWJlciB8IHN0cmluZyxcbiAgICBMZWZ0OiBudW1iZXIgfCBzdHJpbmcsXG4gICAgV2lkdGg6IG51bWJlciB8IHN0cmluZyxcbiAgICBIZWlnaHQ6IG51bWJlciB8IHN0cmluZyxcbiAgICBpbnRMaW5lU3R5bGU6IG51bWJlcixcbiAgICBpbnRMaW5lV2lkdGg6IG51bWJlcixcbiAgKTogdm9pZDtcblxuICAvKiog5aKe5Yqg55u057q/ICovXG4gIEFERF9QUklOVF9MSU5FKFxuICAgIFRvcDE6IG51bWJlciB8IHN0cmluZyxcbiAgICBMZWZ0MTogbnVtYmVyIHwgc3RyaW5nLFxuICAgIFRvcDI6IG51bWJlciB8IHN0cmluZyxcbiAgICBMZWZ0MjogbnVtYmVyIHwgc3RyaW5nLFxuICAgIGludExpbmVTdHlsZTogbnVtYmVyLFxuICAgIGludExpbmVXaWR0aDogbnVtYmVyLFxuICApOiB2b2lkO1xuXG4gIC8qKiDlop7liqDmnaHlvaLnoIEgKi9cbiAgQUREX1BSSU5UX0JBUkNPREUoXG4gICAgVG9wOiBudW1iZXIgfCBzdHJpbmcsXG4gICAgTGVmdDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIFdpZHRoOiBudW1iZXIgfCBzdHJpbmcsXG4gICAgSGVpZ2h0OiBudW1iZXIgfCBzdHJpbmcsXG4gICAgQ29kZVR5cGU6IHN0cmluZyxcbiAgICBDb2RlVmFsdWU6IHN0cmluZyxcbiAgKTogdm9pZDtcblxuICAvKiog5aKe5Yqg5Zu+6KGoICovXG4gIEFERF9QUklOVF9DSEFSVChcbiAgICBUb3A6IG51bWJlciB8IHN0cmluZyxcbiAgICBMZWZ0OiBudW1iZXIgfCBzdHJpbmcsXG4gICAgV2lkdGg6IG51bWJlciB8IHN0cmluZyxcbiAgICBIZWlnaHQ6IG51bWJlciB8IHN0cmluZyxcbiAgICBDaGFydFR5cGU6IG51bWJlcixcbiAgICBzdHJIdG1sOiBzdHJpbmcsXG4gICk6IHZvaWQ7XG5cbiAgLyoqIOijhei9veaWh+aho+W8j+aooeadvyAqL1xuICBBRERfUFJJTlRfREFUQShzdHJEYXRhU3R5bGU6IHN0cmluZywgdmFyRGF0YVZhbHVlOiBhbnkpOiB2b2lkO1xuXG4gIC8qKiDorr7nva7miZPljbDpobnpo47moLwgKi9cbiAgU0VUX1BSSU5UX1NUWUxFKHN0clN0eWxlTmFtZTogTG9kb3BTdHlsZVZhbHVlLCB2YXJTdHlsZVZhbHVlOiBudW1iZXIgfCBzdHJpbmcpOiB2b2lkO1xuXG4gIC8qKiDmiZPljbDpooTop4ggKi9cbiAgUFJFVklFVygpOiBudW1iZXI7XG5cbiAgLyoqIOebtOaOpeaJk+WNsCAqL1xuICBQUklOVCgpOiBzdHJpbmc7XG5cbiAgLyoqIOaJk+WNsOe7tOaKpCAqL1xuICBQUklOVF9TRVRVUCgpOiBzdHJpbmc7XG5cbiAgLyoqIOaJk+WNsOiuvuiuoSAqL1xuICBQUklOVF9ERVNJR04oKTogc3RyaW5nO1xuXG4gIC8qKiDlvLrliLbliIbpobUgKi9cbiAgTkVXUEFHRSgpOiBib29sZWFuO1xuXG4gIC8qKiDojrflvpfmiZPljbDorr7lpIfkuKrmlbAgKi9cbiAgR0VUX1BSSU5URVJfQ09VTlQoKTogbnVtYmVyO1xuXG4gIC8qKiDojrflvpfmiZPljbDorr7lpIflkI3np7AgKi9cbiAgR0VUX1BSSU5URVJfTkFNRShzdHJQcmludGVySURhbmRUeXBlOiBudW1iZXIgfCBzdHJpbmcpOiBzdHJpbmc7XG5cbiAgLyoqIOaMh+WumuaJk+WNsOiuvuWkhyAqL1xuICBTRVRfUFJJTlRFUl9JTkRFWChvSW5kZXhPck5hbWU6IG51bWJlciB8IHN0cmluZyk6IGJvb2xlYW47XG4gIC8qKiDjgJBDTG9kb3DjgJHmjIflrprmiZPljbDmnLogKi9cbiAgU0VUX1BSSU5URVJfSU5ERVgoRHJpdmVySW5kZXg6IG51bWJlciB8IHN0cmluZywgUHJpbnRlcklEYW5kTmFtZTogbnVtYmVyIHwgc3RyaW5nLCBTdWJEZXZJbmRleDogbnVtYmVyIHwgc3RyaW5nKTogYm9vbGVhbjtcblxuICAvKiog6YCJ5oup5omT5Y2w6K6+5aSHICovXG4gIFNFTEVDVF9QUklOVEVSKCk6IG51bWJlcjtcblxuICAvKiog6K6+572u5pi+56S65qih5byPICovXG4gIFNFVF9TSE9XX01PREUoc3RyTW9kZVR5cGU6IHN0cmluZywgdmFyTW9kZVZhbHVlOiBudW1iZXIgfCBzdHJpbmcpOiBib29sZWFuO1xuXG4gIC8qKiDorr7nva7miZPljbDmqKHlvI8gKi9cbiAgU0VUX1BSSU5UX01PREUoc3RyTW9kZVR5cGU6IHN0cmluZywgdmFyTW9kZVZhbHVlOiBudW1iZXIgfCBzdHJpbmcpOiBib29sZWFuIHwgc3RyaW5nO1xuXG4gIC8qKiDorr7nva7miZPljbDku73mlbAgKi9cbiAgU0VUX1BSSU5UX0NPUElFUyhpbnRDb3BpZXM6IG51bWJlcik6IGJvb2xlYW47XG5cbiAgLyoqIOiuvue9rumihOiniOeql+WPoyAqL1xuICBTRVRfUFJFVklFV19XSU5ET1coXG4gICAgaW50RGlzcE1vZGU6IG51bWJlcixcbiAgICBpbnRUb29sTW9kZTogbnVtYmVyLFxuICAgIGJsRGlyZWN0UHJpbnQ6IG51bWJlcixcbiAgICBpbldpZHRoOiBudW1iZXIsXG4gICAgaW50SGVpZ2h0OiBudW1iZXIsXG4gICAgc3RyVGl0bGVCdXR0b25DYXB0b2luOiBzdHJpbmcsXG4gICk6IHZvaWQ7XG5cbiAgLyoqIOaMh+WumuiDjOaZr+WbviAqL1xuICBBRERfUFJJTlRfU0VUVVBfQktJTUcoc3RySW1nSHRtbDogc3RyaW5nKTogdm9pZDtcblxuICAvKiog5Y+R6YCB5Y6f5aeL5pWw5o2uICovXG4gIFNFTkRfUFJJTlRfUkFXREFUQShzdHJSYXdEYXRhOiBzdHJpbmcpOiBib29sZWFuO1xuXG4gIC8qKiDlhpnnq6/lj6PmlbDmja4gKi9cbiAgV1JJVEVfUE9SVF9EQVRBKHN0clBvcnROYW1lOiBzdHJpbmcsIHN0ckRhdGE6IHN0cmluZyk6IGJvb2xlYW47XG5cbiAgLyoqIOivu+err+WPo+aVsOaNriAqL1xuICBSRUFEX1BPUlRfREFUQShzdHJQb3J0TmFtZTogc3RyaW5nKTogc3RyaW5nO1xuXG4gIC8qKiDojrflvpfphY3nva7mlofku7blkI0gKi9cbiAgR0VUX1BSSU5UX0lOSUZGTkFNRShzdHJQcmludFRhc2s6IHN0cmluZyk6IHN0cmluZztcblxuICAvKiog6I635b6X57q45byg57G75Z6L5ZCN5riF5Y2VICovXG4gIEdFVF9QQUdFU0laRVNfTElTVChvUHJpbnRlck5hbWU6IG51bWJlciB8IHN0cmluZywgc3RyU3BsaXQ6IHN0cmluZyk6IHN0cmluZztcblxuICAvKiog5YaZ5pys5Zyw5paH5Lu25YaF5a65ICovXG4gIFdSSVRFX0ZJTEVfVEVYVChpbnRXcml0ZU1vZGU6IG51bWJlciB8IHN0cmluZywgc3RyRmlsZU5hbWU6IHN0cmluZywgc3RyVGV4dDogc3RyaW5nKTogc3RyaW5nO1xuXG4gIC8qKiDor7vmnKzlnLDmlofku7blhoXlrrkgKi9cbiAgR0VUX0ZJTEVfVEVYVChzdHJGaWxlTmFtZTogc3RyaW5nKTogc3RyaW5nIHwgbnVsbDtcblxuICAvKiog6K+75pys5Zyw5paH5Lu25pe26Ze0ICovXG4gIEdFVF9GSUxFX1RJTUUoc3RyRmlsZU5hbWU6IHN0cmluZyk6IHN0cmluZyB8IG51bGw7XG5cbiAgLyoqIOWIpOaWreacrOWcsOaWh+S7tuaYr+WQpuWtmOWcqCAqL1xuICBJU19GSUxFX0VYSVNUKHN0ckZpbGVOYW1lOiBzdHJpbmcpOiBib29sZWFuO1xuXG4gIC8qKiDojrflvpfns7vnu5/kv6Hmga8gKi9cbiAgR0VUX1NZU1RFTV9JTkZPKHN0ckluZm9UeXBlOiBzdHJpbmcpOiBib29sZWFuO1xuXG4gIC8qKiDojrflvpfmlbDmja7lgLwgKi9cbiAgR0VUX1ZBTFVFKFZhbHVlVHlwZTogc3RyaW5nLCBWYWx1ZUluZGV4OiBudW1iZXIgfCBzdHJpbmcpOiBhbnk7XG5cbiAgLyoqIOaVsOaNruagvOW8j+i9rOaNoiAqL1xuICBGT1JNQVQob1R5cGU6IHN0cmluZywgb1ZhbHVlOiBhbnkpOiBhbnk7XG5cbiAgLyoqIOiOt+W+l+Wvueivneahhue7k+aenOWAvCAqL1xuICBHRVRfRElBTE9HX1ZBTFVFKG9UeXBlOiBzdHJpbmcsIG9QcmVWYWx1ZTogc3RyaW5nKTogc3RyaW5nO1xuXG4gIC8qKiAo5aKe5by65Z6LKeaJk+WNsOWIneWni+WMliAqL1xuICBQUklOVF9JTklUQShUb3A6IG51bWJlciB8IHN0cmluZywgTGVmdDogbnVtYmVyIHwgc3RyaW5nLCBXaWR0aDogbnVtYmVyIHwgc3RyaW5nLCBIZWlnaHQ6IG51bWJlciB8IHN0cmluZywgc3RyUHJpbnROYW1lOiBzdHJpbmcpOiBib29sZWFuO1xuXG4gIC8qKiAo5aKe5by65Z6LKeWinuWKoOi2heaWh+acrOaJk+WNsOmhuSjlm77lvaLmqKHlvI8pICovXG4gIEFERF9QUklOVF9IVE1MKFxuICAgIFRvcDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIExlZnQ6IG51bWJlciB8IHN0cmluZyxcbiAgICBXaWR0aDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIEhlaWdodDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIHN0ckh0bWxDb250ZW50OiBzdHJpbmcsXG4gICk6IHZvaWQ7XG5cbiAgLyoqICjlop7lvLrlnosp5aKe5Yqg6KGo5qC85omT5Y2w6aG577yIVVJM5qih5byP77yJICovXG4gIEFERF9QUklOVF9UQlVSTChUb3A6IG51bWJlciB8IHN0cmluZywgTGVmdDogbnVtYmVyIHwgc3RyaW5nLCBXaWR0aDogbnVtYmVyIHwgc3RyaW5nLCBIZWlnaHQ6IG51bWJlciB8IHN0cmluZywgc3RyVVJMOiBzdHJpbmcpOiB2b2lkO1xuXG4gIC8qKiAo5aKe5by65Z6LKeWinuWKoOe6r+aWh+acrOaJk+WNsOmhuSAqL1xuICBBRERfUFJJTlRfVEVYVEEoVG9wOiBudW1iZXIgfCBzdHJpbmcsIExlZnQ6IG51bWJlciB8IHN0cmluZywgV2lkdGg6IG51bWJlciB8IHN0cmluZywgSGVpZ2h0OiBudW1iZXIgfCBzdHJpbmcsIHN0ckNvbnRlbnQ6IHN0cmluZyk6IHZvaWQ7XG5cbiAgLyoqICjlop7lvLrlnosp6K6+572u5omT5Y2w6aG56aOO5qC8QSwg57un5om/IGBTRVRfUFJJTlRfU1RZTEVgIOeahOaJgOacieWxnuaApyAqL1xuICBTRVRfUFJJTlRfU1RZTEVBKHZhckl0ZW1OYW1lSUQ6IG51bWJlciB8IHN0cmluZywgc3RyU3R5bGVOYW1lOiBzdHJpbmcsIHZhclN0eWxlVmFsdWU6IG51bWJlciB8IHN0cmluZyk6IHZvaWQ7XG5cbiAgLyoqICjlop7lvLrlnosp5a+85Ye65pWw5o2u5Yiw5paH5Lu2ICovXG4gIFNBVkVfVE9fRklMRShzdHJGaWxlTmFtZTogc3RyaW5nKTogYm9vbGVhbjtcblxuICAvKiogKOWinuW8uuWeiynorr7nva7kv53lrZjmqKHlvI8gKi9cbiAgU0VUX1NBVkVfTU9ERSh2YXJNb2RlTmFtZTogc3RyaW5nLCB2YXJNb2RlVmFsdWU6IG51bWJlciB8IHN0cmluZyk6IGJvb2xlYW47XG5cbiAgLyoqICjlop7lvLrlnosp5aKe5Yqg5Zu+5b2iICovXG4gIEFERF9QUklOVF9TSEFQRShcbiAgICBpbnRTaGFwZVR5cGU6IG51bWJlcixcbiAgICBUb3A6IG51bWJlciB8IHN0cmluZyxcbiAgICBMZWZ0OiBudW1iZXIgfCBzdHJpbmcsXG4gICAgV2lkdGg6IG51bWJlciB8IHN0cmluZyxcbiAgICBIZWlnaHQ6IG51bWJlciB8IHN0cmluZyxcbiAgICBpbnRMaW5lU3R5bGU6IG51bWJlcixcbiAgICBpbnRMaW5lV2lkdGg6IG51bWJlcixcbiAgICB2YXJDb2xvcjogbnVtYmVyIHwgc3RyaW5nLFxuICApOiB2b2lkO1xuXG4gIC8qKiAo5aKe5by65Z6LKeaMh+WumuaJk+WNsOiuvuWkhyAqL1xuICBTRVRfUFJJTlRFUl9JTkRFWEEob0luZGV4T3JOYW1lOiBudW1iZXIgfCBzdHJpbmcpOiBib29sZWFuO1xuXG4gIC8qKiAo5aKe5by65Z6LKeW8uuWItuWIhumhtSAqL1xuICBORVdQQUdFQSgpOiBib29sZWFuO1xuXG4gIC8qKiAo5aKe5by65Z6LKeaJk+WNsOmihOiniEEgKi9cbiAgUFJFVklFV0EoKTogbnVtYmVyO1xuXG4gIC8qKiAo5aKe5by65Z6LKeaJk+WNsOmihOiniEIgKi9cbiAgUFJFVklFV0IoKTogbnVtYmVyO1xuXG4gIC8qKiDnm7TmjqXmiZPljbBBICovXG4gIFBSSU5UQSgpOiBib29sZWFuO1xuXG4gIC8qKiDnm7TmjqXmiZPljbBCICovXG4gIFBSSU5UQigpOiBib29sZWFuO1xuXG4gIC8qKiDmmL7npLrlm77ooaggKi9cbiAgU0hPV19DSEFSVCgpOiB2b2lkO1xuXG4gIC8qKiDmjqfliLbnlYzpnaLliqjkvZwgKi9cbiAgRE9fQUNUSU9OKEFjdE5hbWU6IHN0cmluZywgQWN0VmFsdWU6IG51bWJlciB8IHN0cmluZyk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIOiuvue9rui9r+S7tuS6p+WTgeazqOWGjOS/oeaBr1xuICAgKlxuICAgKiBAcGFyYW0gIHN0ckNvbXBhbnlOYW1lIOazqOWGjOWNleS9jeWQjeensO+8jOeUqOmAlOS4juaOp+S7tuWPguaVsENvbXBhbnlOYW1l5LiA5qC344CCXG4gICAqIEBwYXJhbSAgc3RyTGljZW5zZSDkuLvms6jlhozlj7fvvIznlKjpgJTkuI7mjqfku7blj4LmlbBMaWNlbnNl5LiA5qC344CCXG4gICAqIEBwYXJhbSAgc3RyTGljZW5zZUEg6ZmE5Yqg5rOo5YaM5Y+3Qe+8jOeUqOmAlOS4juaOp+S7tuWPguaVsExpY2Vuc2VB5LiA5qC344CCXG4gICAqIEBwYXJhbSAgc3RyTGljZW5zZUIg6ZmE5Yqg5rOo5YaM5Y+3Qu+8jOeUqOmAlOS4juaOp+S7tuWPguaVsExpY2Vuc2VC5LiA5qC344CCXG4gICAqL1xuICBTRVRfTElDRU5TRVMoc3RyQ29tcGFueU5hbWU6IHN0cmluZywgc3RyTGljZW5zZTogc3RyaW5nLCBzdHJMaWNlbnNlQT86IHN0cmluZywgc3RyTGljZW5zZUI/OiBzdHJpbmcpOiB2b2lkO1xuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXG4gIHdlYnNrdDogV2ViU29ja2V0O1xufVxuXG5leHBvcnQgdHlwZSBMb2RvcFN0eWxlVmFsdWUgPVxuICB8ICdGb250TmFtZSdcbiAgfCAnRm9udFNpemUnXG4gIHwgJ0ZvbnRDb2xvcidcbiAgfCAnQm9sZCdcbiAgfCAnSXRhbGljJ1xuICB8ICdVbmRlcmxpbmUnXG4gIHwgJ0FsaWdubWVudCdcbiAgfCAnQW5nbGUnXG4gIHwgJ0l0ZW1UeXBlJ1xuICB8ICdIT3JpZW50J1xuICB8ICdWT3JpZW50J1xuICB8ICdQZW5XaWR0aCdcbiAgfCAnUGVuU3R5bGUnXG4gIHwgJ1N0cmV0Y2gnXG4gIHwgJ1ByZXZpZXdPbmx5J1xuICB8ICdSZWFkT25seSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9kb3BSZXN1bHQge1xuICAvKiog5piv5ZCm5oiQ5YqfICovXG4gIG9rOiBib29sZWFuO1xuICAvKiog6ZSZ6K+v56CBICovXG4gIHN0YXR1cz86IHN0cmluZztcbiAgLyoqIOaIkOWKn+aXtuaQuuW4piBMT0RPUCDlr7nosaEgKi9cbiAgbG9kb3A/OiBMb2RvcDtcbiAgLyoqIOmUmeivr+S/oeaBryAqL1xuICBlcnJvcj86IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2RvcFByaW50UmVzdWx0IHtcbiAgLyoqIOaYr+WQpuaIkOWKnyAqL1xuICBvazogYm9vbGVhbjtcbiAgLyoqIOmUmeivr+S/oeaBryAqL1xuICBlcnJvcj86IHN0cmluZztcbiAgLyoqIOS7o+eggSAqL1xuICBjb2RlOiBzdHJpbmc7XG4gIC8qKiDliqjmgIHlj4LmlbDkuIrkuIvmloflr7nosaEgKi9cbiAgaXRlbTogYW55O1xuICAvKiog5Luj56CB6Kej5p6Q6KGo6L6+5byPICovXG4gIHBhcnNlcj86IFJlZ0V4cDtcbn1cbiJdfQ==