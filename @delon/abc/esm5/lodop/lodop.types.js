/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9kb3AudHlwZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL2xvZG9wLyIsInNvdXJjZXMiOlsibG9kb3AudHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLDRCQXFCQzs7Ozs7Ozs7OztJQVBDLDhCQUE4Qjs7Ozs7SUFHOUIsMkJBQTZEOzs7OztJQUc3RCxrQ0FBbUM7Ozs7OztJQWxCbkMseURBQXVDOzs7Ozs7O0lBR3ZDLHVFQUE2RDs7Ozs7QUFrQi9ELDJCQW9WQzs7Ozs7O0lBaFZDLHdCQUFnQjs7SUErVWhCLHVCQUFrQjs7Ozs7Ozs7Ozs7SUFwVWxCLHdEQUF5Qzs7Ozs7Ozs7O0lBR3pDLGtHQUtROzs7Ozs7Ozs7O0lBR1Isd0ZBTVE7Ozs7Ozs7Ozs7SUFHUixtRkFNUTs7Ozs7Ozs7OztJQUdSLG1GQU1ROzs7Ozs7Ozs7O0lBR1IsZ0ZBTVE7Ozs7Ozs7Ozs7SUFHUixxRkFNUTs7Ozs7Ozs7OztJQUdSLDBGQU1ROzs7Ozs7Ozs7OztJQUdSLHFHQU9ROzs7Ozs7Ozs7OztJQUdSLHdHQU9ROzs7Ozs7Ozs7OztJQUdSLHFHQU9ROzs7Ozs7Ozs7OztJQUdSLGlHQU9ROzs7Ozs7Ozs7OztJQUdSLDhGQU9ROzs7Ozs7O0lBR1IsMkVBQThEOzs7Ozs7O0lBRzlELDZFQUdROzs7OztJQUdSLDBDQUFrQjs7Ozs7SUFHbEIsd0NBQWdCOzs7OztJQUdoQiw4Q0FBc0I7Ozs7O0lBR3RCLCtDQUF1Qjs7Ozs7SUFHdkIsMENBQW1COzs7OztJQUduQixvREFBNEI7Ozs7OztJQUc1QixzRUFBK0Q7Ozs7OztJQUcvRCxnRUFBMEQ7Ozs7Ozs7O0lBRTFELDhGQUlXOzs7OztJQUdYLGlEQUF5Qjs7Ozs7OztJQUd6Qix5RUFBMkU7Ozs7Ozs7SUFHM0UsMEVBR29COzs7Ozs7SUFHcEIsNERBQTZDOzs7Ozs7Ozs7OztJQUc3Qyx1SUFPUTs7Ozs7O0lBR1Isa0VBQWdEOzs7Ozs7SUFHaEQsK0RBQWdEOzs7Ozs7O0lBR2hELHNFQUErRDs7Ozs7O0lBRy9ELDREQUE0Qzs7Ozs7O0lBRzVDLGtFQUFrRDs7Ozs7OztJQUdsRCwyRUFBNEU7Ozs7Ozs7O0lBRzVFLG9GQUlVOzs7Ozs7SUFHViwyREFBa0Q7Ozs7OztJQUdsRCwyREFBa0Q7Ozs7OztJQUdsRCwyREFBNEM7Ozs7OztJQUc1Qyw2REFBOEM7Ozs7Ozs7SUFHOUMsaUVBQStEOzs7Ozs7O0lBRy9ELHNEQUF3Qzs7Ozs7OztJQUd4QyxtRUFBMkQ7Ozs7Ozs7Ozs7SUFHM0Qsb0ZBTVc7Ozs7Ozs7Ozs7SUFHWCx5RkFNUTs7Ozs7Ozs7OztJQUdSLGtGQU1ROzs7Ozs7Ozs7O0lBR1Isc0ZBTVE7Ozs7Ozs7O0lBR1IsNkZBSVE7Ozs7OztJQUdSLDBEQUEyQzs7Ozs7OztJQUczQyx5RUFBMkU7Ozs7Ozs7Ozs7Ozs7SUFHM0UsOEhBU1E7Ozs7OztJQUdSLGlFQUEyRDs7Ozs7SUFHM0QsMkNBQW9COzs7OztJQUdwQiwyQ0FBbUI7Ozs7O0lBR25CLDJDQUFtQjs7Ozs7SUFHbkIseUNBQWtCOzs7OztJQUdsQix5Q0FBa0I7Ozs7O0lBR2xCLDZDQUFtQjs7Ozs7OztJQUduQiw2REFBNEQ7Ozs7Ozs7Ozs7SUFVNUQsbUdBS1E7Ozs7O0FBdUJWLGlDQVNDOzs7Ozs7SUFQQyx5QkFBWTs7Ozs7SUFFWiw2QkFBZ0I7Ozs7O0lBRWhCLDRCQUFjOzs7OztJQUVkLDRCQUFZOzs7OztBQUdkLHNDQVdDOzs7Ozs7SUFUQyw4QkFBWTs7Ozs7SUFFWixpQ0FBZTs7Ozs7SUFFZixnQ0FBYTs7Ozs7SUFFYixnQ0FBVTs7Ozs7SUFFVixrQ0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIENMb2RvcCB7XG4gIC8qKiDlu7rnq4vmiZPljbDmnLrlkI3ljZUgKi9cbiAgQ3JlYXRlX1ByaW50ZXJfTGlzdChlbDogRWxlbWVudCk6IHZvaWQ7XG5cbiAgLyoqIOW7uueri+e6uOW8oOexu+Wei+WQjeWNlSAqL1xuICBDcmVhdGVfUGFnZVNpemVfTGlzdChlbDogRWxlbWVudCwgaVByaW50SW5kZXg6IG51bWJlcik6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIOWIpOaWreaYr+WQpuaUr+aMgWh0dHBz5Y2P6K6u55qE5bGe5oCnXG4gICAqXG4gICAqIC0gMCDkuI3mlK/mjIFcbiAgICogLSAxIOaUr+aMgVxuICAgKiAtIDIg5pSv5oyB5LiU5bey5ZCv5Yqo77yIaHR0cHPmnI3liqHpnIDljZXni6zlkK/liqgpXG4gICAqL1xuICByZWFkb25seSBIVFRQU19TVEFUVVM6IG51bWJlcjtcblxuICAvKiog57uT5p6c5Zue6LCD5Ye95pWwICovXG4gIE9uX1JldHVybjogKHRhc2tJRDogc3RyaW5nLCB2YWx1ZTogYm9vbGVhbiB8IHN0cmluZykgPT4gdm9pZDtcblxuICAvKiog57uT5p6c5Zue6LCD5Ye95pWw5L+d55WZICovXG4gIHJlYWRvbmx5IE9uX1JldHVybl9SZW1haW46IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9kb3AgZXh0ZW5kcyBDTG9kb3Age1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG5cbiAgLyoqIOiOt+W+l+i9r+S7tueJiOacrOWPtyAqL1xuICBWRVJTSU9OOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIOaJk+WNsOWIneWni+WMluOAguWIneWni+WMlui/kOihjOeOr+Wig++8jOa4heeQhuW8guW4uOaJk+WNsOmBl+eVmeeahOezu+e7n+i1hOa6kO+8jOiuvuWumuaJk+WNsOS7u+WKoeWQjeOAglxuICAgKlxuICAgKiAqKuW7uuiuruaIluimgeaxgu+8mioq6K+l5Ye95pWw5LiOUFJJTlRfSU5JVEHpg73mnInliJ3lp4vljJblip/og73vvIzmr4/kuKrmiZPljbDkuovliqHoh7PlsJHliJ3lp4vljJbkuIDmrKHvvIzlu7rorq7miZPljbDnqIvluo/pppblhYjosIPnlKjor6Xlh73mlbDjgILku7vliqHlkI3opoHlsL3ph4/ljLrliKvkuo7lhbblroPmiZPljbDku7vliqHvvIzorazlpoLnlKjigJxYWOWNleS9jV9YWOeuoeeQhuS/oeaBr+ezu+e7n19YWOWtkOezu+e7n19YWOaooeWdl19YWOaJk+WNsOS9nOS4muKAneWtl+agt+OAglxuICAgKiDkuI3luIzmnJvmnIDnu4jnlKjmiLfmm7TmlLnmiZPljbDluIPlsYDml7bvvIzliJnorr5zdHJUYXNrTmFtZeepuuOAglxuICAgKlxuICAgKiBAcGFyYW0gc3RyVGFza05hbWUg5omT5Y2w5Lu75Yqh5ZCNXG4gICAqIEByZXR1cm5zIOi/lOWbnumAu+i+keecn+ihqOekuuWIneWni+WMluaIkOWKn++8jOmAu+i+keWBh+ihqOekuuWIneWni+WMluWksei0pe+8jOWksei0peWOn+WboOacie+8muWJjeS4gOS4quaJk+WNsOS6i+WKoeayoeacieWujOaIkO+8m+aTjeS9nOezu+e7n+ayoeaciea3u+WKoOaJk+WNsOacuijpqbHliqgp562JXG4gICAqL1xuICBQUklOVF9JTklUKHN0clRhc2tOYW1lOiBzdHJpbmcpOiBib29sZWFuO1xuXG4gIC8qKiDorr7lrprnurjlvKDlpKflsI8gKi9cbiAgU0VUX1BSSU5UX1BBR0VTSVpFKFxuICAgIGludE9yaWVudDogbnVtYmVyLFxuICAgIFBhZ2VXaWR0aDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIFBhZ2VIZWlnaHQ6IG51bWJlciB8IHN0cmluZyxcbiAgICBzdHJQYWdlTmFtZTogc3RyaW5nLFxuICApOiB2b2lkO1xuXG4gIC8qKiDlop7liqDotoXmlofmnKzmiZPljbDpobko5pmu6YCa5qih5byPKSAqL1xuICBBRERfUFJJTlRfSFRNKFxuICAgIFRvcDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIExlZnQ6IG51bWJlciB8IHN0cmluZyxcbiAgICBXaWR0aDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIEhlaWdodDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIHN0ckh0bWxDb250ZW50OiBzdHJpbmcsXG4gICk6IHZvaWQ7XG5cbiAgLyoqIOWinuWKoOihqOagvOaJk+WNsOmhue+8iOi2heaWh+acrOaooeW8j++8iSovXG4gIEFERF9QUklOVF9UQUJMRShcbiAgICBUb3A6IG51bWJlciB8IHN0cmluZyxcbiAgICBMZWZ0OiBudW1iZXIgfCBzdHJpbmcsXG4gICAgV2lkdGg6IG51bWJlciB8IHN0cmluZyxcbiAgICBIZWlnaHQ6IG51bWJlciB8IHN0cmluZyxcbiAgICBzdHJIdG1sOiBzdHJpbmcsXG4gICk6IHZvaWQ7XG5cbiAgLyoqIOWinuWKoOihqOagvOaJk+WNsOmhue+8iOi2heaWh+acrOaooeW8j++8iSovXG4gIEFERF9QUklOVF9UQUJMRShcbiAgICBUb3A6IG51bWJlciB8IHN0cmluZyxcbiAgICBMZWZ0OiBudW1iZXIgfCBzdHJpbmcsXG4gICAgV2lkdGg6IG51bWJlciB8IHN0cmluZyxcbiAgICBIZWlnaHQ6IG51bWJlciB8IHN0cmluZyxcbiAgICBzdHJIdG1sOiBzdHJpbmcsXG4gICk6IHZvaWQ7XG5cbiAgLyoqIOWinuWKoOi2heaWh+acrOaJk+WNsOmhue+8iFVSTOaooeW8j++8iSovXG4gIEFERF9QUklOVF9VUkwoXG4gICAgVG9wOiBudW1iZXIgfCBzdHJpbmcsXG4gICAgTGVmdDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIFdpZHRoOiBudW1iZXIgfCBzdHJpbmcsXG4gICAgSGVpZ2h0OiBudW1iZXIgfCBzdHJpbmcsXG4gICAgc3RyVVJMOiBzdHJpbmcsXG4gICk6IHZvaWQ7XG5cbiAgLyoqIOWinuWKoOe6r+aWh+acrOaJk+WNsOmhuSAqL1xuICBBRERfUFJJTlRfVEVYVChcbiAgICBUb3A6IG51bWJlciB8IHN0cmluZyxcbiAgICBMZWZ0OiBudW1iZXIgfCBzdHJpbmcsXG4gICAgV2lkdGg6IG51bWJlciB8IHN0cmluZyxcbiAgICBIZWlnaHQ6IG51bWJlciB8IHN0cmluZyxcbiAgICBzdHJDb250ZW50OiBzdHJpbmcsXG4gICk6IHZvaWQ7XG5cbiAgLyoqIOWinuWKoOWbvueJh+aJk+WNsOmhuSAqL1xuICBBRERfUFJJTlRfSU1BR0UoXG4gICAgVG9wOiBudW1iZXIgfCBzdHJpbmcsXG4gICAgTGVmdDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIFdpZHRoOiBudW1iZXIgfCBzdHJpbmcsXG4gICAgSGVpZ2h0OiBudW1iZXIgfCBzdHJpbmcsXG4gICAgc3RySHRtbENvbnRlbnQ6IHN0cmluZyxcbiAgKTogdm9pZDtcblxuICAvKiog5aKe5Yqg55+p5b2i57q/ICovXG4gIEFERF9QUklOVF9SRUNUKFxuICAgIFRvcDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIExlZnQ6IG51bWJlciB8IHN0cmluZyxcbiAgICBXaWR0aDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIEhlaWdodDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIGludExpbmVTdHlsZTogbnVtYmVyLFxuICAgIGludExpbmVXaWR0aDogbnVtYmVyLFxuICApOiB2b2lkO1xuXG4gIC8qKiDlop7liqDmpK3lnIbnur8gKi9cbiAgQUREX1BSSU5UX0VMTElQU0UoXG4gICAgVG9wOiBudW1iZXIgfCBzdHJpbmcsXG4gICAgTGVmdDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIFdpZHRoOiBudW1iZXIgfCBzdHJpbmcsXG4gICAgSGVpZ2h0OiBudW1iZXIgfCBzdHJpbmcsXG4gICAgaW50TGluZVN0eWxlOiBudW1iZXIsXG4gICAgaW50TGluZVdpZHRoOiBudW1iZXIsXG4gICk6IHZvaWQ7XG5cbiAgLyoqIOWinuWKoOebtOe6vyAqL1xuICBBRERfUFJJTlRfTElORShcbiAgICBUb3AxOiBudW1iZXIgfCBzdHJpbmcsXG4gICAgTGVmdDE6IG51bWJlciB8IHN0cmluZyxcbiAgICBUb3AyOiBudW1iZXIgfCBzdHJpbmcsXG4gICAgTGVmdDI6IG51bWJlciB8IHN0cmluZyxcbiAgICBpbnRMaW5lU3R5bGU6IG51bWJlcixcbiAgICBpbnRMaW5lV2lkdGg6IG51bWJlcixcbiAgKTogdm9pZDtcblxuICAvKiog5aKe5Yqg5p2h5b2i56CBICovXG4gIEFERF9QUklOVF9CQVJDT0RFKFxuICAgIFRvcDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIExlZnQ6IG51bWJlciB8IHN0cmluZyxcbiAgICBXaWR0aDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIEhlaWdodDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIENvZGVUeXBlOiBzdHJpbmcsXG4gICAgQ29kZVZhbHVlOiBzdHJpbmcsXG4gICk6IHZvaWQ7XG5cbiAgLyoqIOWinuWKoOWbvuihqCAqL1xuICBBRERfUFJJTlRfQ0hBUlQoXG4gICAgVG9wOiBudW1iZXIgfCBzdHJpbmcsXG4gICAgTGVmdDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIFdpZHRoOiBudW1iZXIgfCBzdHJpbmcsXG4gICAgSGVpZ2h0OiBudW1iZXIgfCBzdHJpbmcsXG4gICAgQ2hhcnRUeXBlOiBudW1iZXIsXG4gICAgc3RySHRtbDogc3RyaW5nLFxuICApOiB2b2lkO1xuXG4gIC8qKiDoo4Xovb3mlofmoaPlvI/mqKHmnb8gKi9cbiAgQUREX1BSSU5UX0RBVEEoc3RyRGF0YVN0eWxlOiBzdHJpbmcsIHZhckRhdGFWYWx1ZTogYW55KTogdm9pZDtcblxuICAvKiog6K6+572u5omT5Y2w6aG56aOO5qC8ICovXG4gIFNFVF9QUklOVF9TVFlMRShcbiAgICBzdHJTdHlsZU5hbWU6IExvZG9wU3R5bGVWYWx1ZSxcbiAgICB2YXJTdHlsZVZhbHVlOiBudW1iZXIgfCBzdHJpbmcsXG4gICk6IHZvaWQ7XG5cbiAgLyoqIOaJk+WNsOmihOiniCAqL1xuICBQUkVWSUVXKCk6IG51bWJlcjtcblxuICAvKiog55u05o6l5omT5Y2wICovXG4gIFBSSU5UKCk6IHN0cmluZztcblxuICAvKiog5omT5Y2w57u05oqkICovXG4gIFBSSU5UX1NFVFVQKCk6IHN0cmluZztcblxuICAvKiog5omT5Y2w6K6+6K6hICovXG4gIFBSSU5UX0RFU0lHTigpOiBzdHJpbmc7XG5cbiAgLyoqIOW8uuWItuWIhumhtSAqL1xuICBORVdQQUdFKCk6IGJvb2xlYW47XG5cbiAgLyoqIOiOt+W+l+aJk+WNsOiuvuWkh+S4quaVsCAqL1xuICBHRVRfUFJJTlRFUl9DT1VOVCgpOiBudW1iZXI7XG5cbiAgLyoqIOiOt+W+l+aJk+WNsOiuvuWkh+WQjeensCAqL1xuICBHRVRfUFJJTlRFUl9OQU1FKHN0clByaW50ZXJJRGFuZFR5cGU6IG51bWJlciB8IHN0cmluZyk6IHN0cmluZztcblxuICAvKiog5oyH5a6a5omT5Y2w6K6+5aSHICovXG4gIFNFVF9QUklOVEVSX0lOREVYKG9JbmRleE9yTmFtZTogbnVtYmVyIHwgc3RyaW5nKTogYm9vbGVhbjtcbiAgLyoqIOOAkENMb2RvcOOAkeaMh+WumuaJk+WNsOacuiAqL1xuICBTRVRfUFJJTlRFUl9JTkRFWChcbiAgICBEcml2ZXJJbmRleDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIFByaW50ZXJJRGFuZE5hbWU6IG51bWJlciB8IHN0cmluZyxcbiAgICBTdWJEZXZJbmRleDogbnVtYmVyIHwgc3RyaW5nLFxuICApOiBib29sZWFuO1xuXG4gIC8qKiDpgInmi6nmiZPljbDorr7lpIcgKi9cbiAgU0VMRUNUX1BSSU5URVIoKTogbnVtYmVyO1xuXG4gIC8qKiDorr7nva7mmL7npLrmqKHlvI8gKi9cbiAgU0VUX1NIT1dfTU9ERShzdHJNb2RlVHlwZTogc3RyaW5nLCB2YXJNb2RlVmFsdWU6IG51bWJlciB8IHN0cmluZyk6IGJvb2xlYW47XG5cbiAgLyoqIOiuvue9ruaJk+WNsOaooeW8jyAqL1xuICBTRVRfUFJJTlRfTU9ERShcbiAgICBzdHJNb2RlVHlwZTogc3RyaW5nLFxuICAgIHZhck1vZGVWYWx1ZTogbnVtYmVyIHwgc3RyaW5nLFxuICApOiBib29sZWFuIHwgc3RyaW5nO1xuXG4gIC8qKiDorr7nva7miZPljbDku73mlbAgKi9cbiAgU0VUX1BSSU5UX0NPUElFUyhpbnRDb3BpZXM6IG51bWJlcik6IGJvb2xlYW47XG5cbiAgLyoqIOiuvue9rumihOiniOeql+WPoyAqL1xuICBTRVRfUFJFVklFV19XSU5ET1coXG4gICAgaW50RGlzcE1vZGU6IG51bWJlcixcbiAgICBpbnRUb29sTW9kZTogbnVtYmVyLFxuICAgIGJsRGlyZWN0UHJpbnQ6IG51bWJlcixcbiAgICBpbldpZHRoOiBudW1iZXIsXG4gICAgaW50SGVpZ2h0OiBudW1iZXIsXG4gICAgc3RyVGl0bGVCdXR0b25DYXB0b2luOiBzdHJpbmcsXG4gICk6IHZvaWQ7XG5cbiAgLyoqIOaMh+WumuiDjOaZr+WbviAqL1xuICBBRERfUFJJTlRfU0VUVVBfQktJTUcoc3RySW1nSHRtbDogc3RyaW5nKTogdm9pZDtcblxuICAvKiog5Y+R6YCB5Y6f5aeL5pWw5o2uICovXG4gIFNFTkRfUFJJTlRfUkFXREFUQShzdHJSYXdEYXRhOiBzdHJpbmcpOiBib29sZWFuO1xuXG4gIC8qKiDlhpnnq6/lj6PmlbDmja4gKi9cbiAgV1JJVEVfUE9SVF9EQVRBKHN0clBvcnROYW1lOiBzdHJpbmcsIHN0ckRhdGE6IHN0cmluZyk6IGJvb2xlYW47XG5cbiAgLyoqIOivu+err+WPo+aVsOaNriAqL1xuICBSRUFEX1BPUlRfREFUQShzdHJQb3J0TmFtZTogc3RyaW5nKTogc3RyaW5nO1xuXG4gIC8qKiDojrflvpfphY3nva7mlofku7blkI0gKi9cbiAgR0VUX1BSSU5UX0lOSUZGTkFNRShzdHJQcmludFRhc2s6IHN0cmluZyk6IHN0cmluZztcblxuICAvKiog6I635b6X57q45byg57G75Z6L5ZCN5riF5Y2VICovXG4gIEdFVF9QQUdFU0laRVNfTElTVChvUHJpbnRlck5hbWU6IG51bWJlciB8IHN0cmluZywgc3RyU3BsaXQ6IHN0cmluZyk6IHN0cmluZztcblxuICAvKiog5YaZ5pys5Zyw5paH5Lu25YaF5a65ICovXG4gIFdSSVRFX0ZJTEVfVEVYVChcbiAgICBpbnRXcml0ZU1vZGU6IG51bWJlciB8IHN0cmluZyxcbiAgICBzdHJGaWxlTmFtZTogc3RyaW5nLFxuICAgIHN0clRleHQ6IHN0cmluZyxcbiAgKTogc3RyaW5nO1xuXG4gIC8qKiDor7vmnKzlnLDmlofku7blhoXlrrkgKi9cbiAgR0VUX0ZJTEVfVEVYVChzdHJGaWxlTmFtZTogc3RyaW5nKTogc3RyaW5nIHwgbnVsbDtcblxuICAvKiog6K+75pys5Zyw5paH5Lu25pe26Ze0ICovXG4gIEdFVF9GSUxFX1RJTUUoc3RyRmlsZU5hbWU6IHN0cmluZyk6IHN0cmluZyB8IG51bGw7XG5cbiAgLyoqIOWIpOaWreacrOWcsOaWh+S7tuaYr+WQpuWtmOWcqCAqL1xuICBJU19GSUxFX0VYSVNUKHN0ckZpbGVOYW1lOiBzdHJpbmcpOiBib29sZWFuO1xuXG4gIC8qKiDojrflvpfns7vnu5/kv6Hmga8gKi9cbiAgR0VUX1NZU1RFTV9JTkZPKHN0ckluZm9UeXBlOiBzdHJpbmcpOiBib29sZWFuO1xuXG4gIC8qKiDojrflvpfmlbDmja7lgLwgKi9cbiAgR0VUX1ZBTFVFKFZhbHVlVHlwZTogc3RyaW5nLCBWYWx1ZUluZGV4OiBudW1iZXIgfCBzdHJpbmcpOiBhbnk7XG5cbiAgLyoqIOaVsOaNruagvOW8j+i9rOaNoiAqL1xuICBGT1JNQVQob1R5cGU6IHN0cmluZywgb1ZhbHVlOiBhbnkpOiBhbnk7XG5cbiAgLyoqIOiOt+W+l+Wvueivneahhue7k+aenOWAvCAqL1xuICBHRVRfRElBTE9HX1ZBTFVFKG9UeXBlOiBzdHJpbmcsIG9QcmVWYWx1ZTogc3RyaW5nKTogc3RyaW5nO1xuXG4gIC8qKiAo5aKe5by65Z6LKeaJk+WNsOWIneWni+WMliAqL1xuICBQUklOVF9JTklUQShcbiAgICBUb3A6IG51bWJlciB8IHN0cmluZyxcbiAgICBMZWZ0OiBudW1iZXIgfCBzdHJpbmcsXG4gICAgV2lkdGg6IG51bWJlciB8IHN0cmluZyxcbiAgICBIZWlnaHQ6IG51bWJlciB8IHN0cmluZyxcbiAgICBzdHJQcmludE5hbWU6IHN0cmluZyxcbiAgKTogYm9vbGVhbjtcblxuICAvKiogKOWinuW8uuWeiynlop7liqDotoXmlofmnKzmiZPljbDpobko5Zu+5b2i5qih5byPKSAqL1xuICBBRERfUFJJTlRfSFRNTChcbiAgICBUb3A6IG51bWJlciB8IHN0cmluZyxcbiAgICBMZWZ0OiBudW1iZXIgfCBzdHJpbmcsXG4gICAgV2lkdGg6IG51bWJlciB8IHN0cmluZyxcbiAgICBIZWlnaHQ6IG51bWJlciB8IHN0cmluZyxcbiAgICBzdHJIdG1sQ29udGVudDogc3RyaW5nLFxuICApOiB2b2lkO1xuXG4gIC8qKiAo5aKe5by65Z6LKeWinuWKoOihqOagvOaJk+WNsOmhue+8iFVSTOaooeW8j++8iSAqL1xuICBBRERfUFJJTlRfVEJVUkwoXG4gICAgVG9wOiBudW1iZXIgfCBzdHJpbmcsXG4gICAgTGVmdDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIFdpZHRoOiBudW1iZXIgfCBzdHJpbmcsXG4gICAgSGVpZ2h0OiBudW1iZXIgfCBzdHJpbmcsXG4gICAgc3RyVVJMOiBzdHJpbmcsXG4gICk6IHZvaWQ7XG5cbiAgLyoqICjlop7lvLrlnosp5aKe5Yqg57qv5paH5pys5omT5Y2w6aG5ICovXG4gIEFERF9QUklOVF9URVhUQShcbiAgICBUb3A6IG51bWJlciB8IHN0cmluZyxcbiAgICBMZWZ0OiBudW1iZXIgfCBzdHJpbmcsXG4gICAgV2lkdGg6IG51bWJlciB8IHN0cmluZyxcbiAgICBIZWlnaHQ6IG51bWJlciB8IHN0cmluZyxcbiAgICBzdHJDb250ZW50OiBzdHJpbmcsXG4gICk6IHZvaWQ7XG5cbiAgLyoqICjlop7lvLrlnosp6K6+572u5omT5Y2w6aG56aOO5qC8QSwg57un5om/IGBTRVRfUFJJTlRfU1RZTEVgIOeahOaJgOacieWxnuaApyAqL1xuICBTRVRfUFJJTlRfU1RZTEVBKFxuICAgIHZhckl0ZW1OYW1lSUQ6IG51bWJlciB8IHN0cmluZyxcbiAgICBzdHJTdHlsZU5hbWU6IHN0cmluZyxcbiAgICB2YXJTdHlsZVZhbHVlOiBudW1iZXIgfCBzdHJpbmcsXG4gICk6IHZvaWQ7XG5cbiAgLyoqICjlop7lvLrlnosp5a+85Ye65pWw5o2u5Yiw5paH5Lu2ICovXG4gIFNBVkVfVE9fRklMRShzdHJGaWxlTmFtZTogc3RyaW5nKTogYm9vbGVhbjtcblxuICAvKiogKOWinuW8uuWeiynorr7nva7kv53lrZjmqKHlvI8gKi9cbiAgU0VUX1NBVkVfTU9ERSh2YXJNb2RlTmFtZTogc3RyaW5nLCB2YXJNb2RlVmFsdWU6IG51bWJlciB8IHN0cmluZyk6IGJvb2xlYW47XG5cbiAgLyoqICjlop7lvLrlnosp5aKe5Yqg5Zu+5b2iICovXG4gIEFERF9QUklOVF9TSEFQRShcbiAgICBpbnRTaGFwZVR5cGU6IG51bWJlcixcbiAgICBUb3A6IG51bWJlciB8IHN0cmluZyxcbiAgICBMZWZ0OiBudW1iZXIgfCBzdHJpbmcsXG4gICAgV2lkdGg6IG51bWJlciB8IHN0cmluZyxcbiAgICBIZWlnaHQ6IG51bWJlciB8IHN0cmluZyxcbiAgICBpbnRMaW5lU3R5bGU6IG51bWJlcixcbiAgICBpbnRMaW5lV2lkdGg6IG51bWJlcixcbiAgICB2YXJDb2xvcjogbnVtYmVyIHwgc3RyaW5nLFxuICApOiB2b2lkO1xuXG4gIC8qKiAo5aKe5by65Z6LKeaMh+WumuaJk+WNsOiuvuWkhyAqL1xuICBTRVRfUFJJTlRFUl9JTkRFWEEob0luZGV4T3JOYW1lOiBudW1iZXIgfCBzdHJpbmcpOiBib29sZWFuO1xuXG4gIC8qKiAo5aKe5by65Z6LKeW8uuWItuWIhumhtSAqL1xuICBORVdQQUdFQSgpOiBib29sZWFuO1xuXG4gIC8qKiAo5aKe5by65Z6LKeaJk+WNsOmihOiniEEgKi9cbiAgUFJFVklFV0EoKTogbnVtYmVyO1xuXG4gIC8qKiAo5aKe5by65Z6LKeaJk+WNsOmihOiniEIgKi9cbiAgUFJFVklFV0IoKTogbnVtYmVyO1xuXG4gIC8qKiDnm7TmjqXmiZPljbBBICovXG4gIFBSSU5UQSgpOiBib29sZWFuO1xuXG4gIC8qKiDnm7TmjqXmiZPljbBCICovXG4gIFBSSU5UQigpOiBib29sZWFuO1xuXG4gIC8qKiDmmL7npLrlm77ooaggKi9cbiAgU0hPV19DSEFSVCgpOiB2b2lkO1xuXG4gIC8qKiDmjqfliLbnlYzpnaLliqjkvZwgKi9cbiAgRE9fQUNUSU9OKEFjdE5hbWU6IHN0cmluZywgQWN0VmFsdWU6IG51bWJlciB8IHN0cmluZyk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIOiuvue9rui9r+S7tuS6p+WTgeazqOWGjOS/oeaBr1xuICAgKlxuICAgKiBAcGFyYW0gIHN0ckNvbXBhbnlOYW1lIOazqOWGjOWNleS9jeWQjeensO+8jOeUqOmAlOS4juaOp+S7tuWPguaVsENvbXBhbnlOYW1l5LiA5qC344CCXG4gICAqIEBwYXJhbSAgc3RyTGljZW5zZSDkuLvms6jlhozlj7fvvIznlKjpgJTkuI7mjqfku7blj4LmlbBMaWNlbnNl5LiA5qC344CCXG4gICAqIEBwYXJhbSAgc3RyTGljZW5zZUEg6ZmE5Yqg5rOo5YaM5Y+3Qe+8jOeUqOmAlOS4juaOp+S7tuWPguaVsExpY2Vuc2VB5LiA5qC344CCXG4gICAqIEBwYXJhbSAgc3RyTGljZW5zZUIg6ZmE5Yqg5rOo5YaM5Y+3Qu+8jOeUqOmAlOS4juaOp+S7tuWPguaVsExpY2Vuc2VC5LiA5qC344CCXG4gICAqL1xuICBTRVRfTElDRU5TRVMoXG4gICAgc3RyQ29tcGFueU5hbWU6IHN0cmluZyxcbiAgICBzdHJMaWNlbnNlOiBzdHJpbmcsXG4gICAgc3RyTGljZW5zZUE/OiBzdHJpbmcsXG4gICAgc3RyTGljZW5zZUI/OiBzdHJpbmcsXG4gICk6IHZvaWQ7XG5cbiAgd2Vic2t0OiBXZWJTb2NrZXQ7XG59XG5cbmV4cG9ydCB0eXBlIExvZG9wU3R5bGVWYWx1ZSA9XG4gIHwgJ0ZvbnROYW1lJ1xuICB8ICdGb250U2l6ZSdcbiAgfCAnRm9udENvbG9yJ1xuICB8ICdCb2xkJ1xuICB8ICdJdGFsaWMnXG4gIHwgJ1VuZGVybGluZSdcbiAgfCAnQWxpZ25tZW50J1xuICB8ICdBbmdsZSdcbiAgfCAnSXRlbVR5cGUnXG4gIHwgJ0hPcmllbnQnXG4gIHwgJ1ZPcmllbnQnXG4gIHwgJ1BlbldpZHRoJ1xuICB8ICdQZW5TdHlsZSdcbiAgfCAnU3RyZXRjaCdcbiAgfCAnUHJldmlld09ubHknXG4gIHwgJ1JlYWRPbmx5JztcblxuZXhwb3J0IGludGVyZmFjZSBMb2RvcFJlc3VsdCB7XG4gIC8qKiDmmK/lkKbmiJDlip8gKi9cbiAgb2s6IGJvb2xlYW47XG4gIC8qKiDplJnor6/noIEgKi9cbiAgc3RhdHVzPzogc3RyaW5nO1xuICAvKiog5oiQ5Yqf5pe25pC65bimIExPRE9QIOWvueixoSAqL1xuICBsb2RvcD86IExvZG9wO1xuICAvKiog6ZSZ6K+v5L+h5oGvICovXG4gIGVycm9yPzogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvZG9wUHJpbnRSZXN1bHQge1xuICAvKiog5piv5ZCm5oiQ5YqfICovXG4gIG9rOiBib29sZWFuO1xuICAvKiog6ZSZ6K+v5L+h5oGvICovXG4gIGVycm9yPzogc3RyaW5nO1xuICAvKiog5Luj56CBICovXG4gIGNvZGU6IHN0cmluZztcbiAgLyoqIOWKqOaAgeWPguaVsOS4iuS4i+aWh+WvueixoSAqL1xuICBpdGVtOiBhbnk7XG4gIC8qKiDku6PnoIHop6PmnpDooajovr7lvI8gKi9cbiAgcGFyc2VyPzogUmVnRXhwO1xufVxuIl19