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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9kb3AudHlwZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL2xvZG9wLyIsInNvdXJjZXMiOlsibG9kb3AudHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLDRCQXFCQzs7Ozs7Ozs7OztJQVBDLDhCQUE4Qjs7Ozs7SUFHOUIsMkJBQXNFOzs7OztJQUd0RSxrQ0FBbUM7Ozs7OztJQWxCbkMseURBQXVDOzs7Ozs7O0lBR3ZDLHVFQUE2RDs7Ozs7QUFrQi9ELDJCQWlVQzs7Ozs7O0lBN1RDLHdCQUFnQjs7SUE0VGhCLHVCQUFrQjs7Ozs7Ozs7Ozs7SUFqVGxCLHdEQUF5Qzs7Ozs7Ozs7O0lBR3pDLGtHQUtROzs7Ozs7Ozs7O0lBR1Isd0ZBTVE7Ozs7Ozs7Ozs7SUFHUixtRkFNUTs7Ozs7Ozs7OztJQUdSLG1GQU1ROzs7Ozs7Ozs7O0lBR1IsZ0ZBTVE7Ozs7Ozs7Ozs7SUFHUixxRkFNUTs7Ozs7Ozs7OztJQUdSLDBGQU1ROzs7Ozs7Ozs7OztJQUdSLHFHQU9ROzs7Ozs7Ozs7OztJQUdSLHdHQU9ROzs7Ozs7Ozs7OztJQUdSLHFHQU9ROzs7Ozs7Ozs7OztJQUdSLGlHQU9ROzs7Ozs7Ozs7OztJQUdSLDhGQU9ROzs7Ozs7O0lBR1IsMkVBQThEOzs7Ozs7O0lBRzlELDZFQUFxRjs7Ozs7SUFHckYsMENBQWtCOzs7OztJQUdsQix3Q0FBZ0I7Ozs7O0lBR2hCLDhDQUFzQjs7Ozs7SUFHdEIsK0NBQXVCOzs7OztJQUd2QiwwQ0FBbUI7Ozs7O0lBR25CLG9EQUE0Qjs7Ozs7O0lBRzVCLHNFQUErRDs7Ozs7O0lBRy9ELGdFQUEwRDs7Ozs7Ozs7SUFFMUQsOEZBSVc7Ozs7O0lBR1gsaURBQXlCOzs7Ozs7O0lBR3pCLHlFQUEyRTs7Ozs7OztJQUczRSwwRUFBcUY7Ozs7OztJQUdyRiw0REFBNkM7Ozs7Ozs7Ozs7O0lBRzdDLHVJQU9ROzs7Ozs7SUFHUixrRUFBZ0Q7Ozs7OztJQUdoRCwrREFBZ0Q7Ozs7Ozs7SUFHaEQsc0VBQStEOzs7Ozs7SUFHL0QsNERBQTRDOzs7Ozs7SUFHNUMsa0VBQWtEOzs7Ozs7O0lBR2xELDJFQUE0RTs7Ozs7Ozs7SUFHNUUsb0ZBQTZGOzs7Ozs7SUFHN0YsMkRBQWtEOzs7Ozs7SUFHbEQsMkRBQWtEOzs7Ozs7SUFHbEQsMkRBQTRDOzs7Ozs7SUFHNUMsNkRBQThDOzs7Ozs7O0lBRzlDLGlFQUErRDs7Ozs7OztJQUcvRCxzREFBd0M7Ozs7Ozs7SUFHeEMsbUVBQTJEOzs7Ozs7Ozs7O0lBRzNELG9GQU1XOzs7Ozs7Ozs7O0lBR1gseUZBTVE7Ozs7Ozs7Ozs7SUFHUixrRkFNUTs7Ozs7Ozs7OztJQUdSLHNGQU1ROzs7Ozs7OztJQUdSLDZGQUE2Rzs7Ozs7O0lBRzdHLDBEQUEyQzs7Ozs7OztJQUczQyx5RUFBMkU7Ozs7Ozs7Ozs7Ozs7SUFHM0UsOEhBU1E7Ozs7OztJQUdSLGlFQUEyRDs7Ozs7SUFHM0QsMkNBQW9COzs7OztJQUdwQiwyQ0FBbUI7Ozs7O0lBR25CLDJDQUFtQjs7Ozs7SUFHbkIseUNBQWtCOzs7OztJQUdsQix5Q0FBa0I7Ozs7O0lBR2xCLDZDQUFtQjs7Ozs7OztJQUduQiw2REFBNEQ7Ozs7Ozs7Ozs7SUFVNUQsbUdBQTJHOzs7OztBQXVCN0csaUNBU0M7Ozs7OztJQVBDLHlCQUFZOzs7OztJQUVaLDZCQUFnQjs7Ozs7SUFFaEIsNEJBQWM7Ozs7O0lBRWQsNEJBQVk7Ozs7O0FBR2Qsc0NBV0M7Ozs7OztJQVRDLDhCQUFZOzs7OztJQUVaLGlDQUFlOzs7OztJQUVmLGdDQUFhOzs7OztJQUViLGdDQUFVOzs7OztJQUVWLGtDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgQ0xvZG9wIHtcbiAgLyoqIOW7uueri+aJk+WNsOacuuWQjeWNlSAqL1xuICBDcmVhdGVfUHJpbnRlcl9MaXN0KGVsOiBFbGVtZW50KTogdm9pZDtcblxuICAvKiog5bu656uL57q45byg57G75Z6L5ZCN5Y2VICovXG4gIENyZWF0ZV9QYWdlU2l6ZV9MaXN0KGVsOiBFbGVtZW50LCBpUHJpbnRJbmRleDogbnVtYmVyKTogdm9pZDtcblxuICAvKipcbiAgICog5Yik5pat5piv5ZCm5pSv5oyBaHR0cHPljY/orq7nmoTlsZ7mgKdcbiAgICpcbiAgICogLSAwIOS4jeaUr+aMgVxuICAgKiAtIDEg5pSv5oyBXG4gICAqIC0gMiDmlK/mjIHkuJTlt7LlkK/liqjvvIhodHRwc+acjeWKoemcgOWNleeLrOWQr+WKqClcbiAgICovXG4gIHJlYWRvbmx5IEhUVFBTX1NUQVRVUzogbnVtYmVyO1xuXG4gIC8qKiDnu5Pmnpzlm57osIPlh73mlbAgKi9cbiAgT25fUmV0dXJuOiAoKHRhc2tJRDogc3RyaW5nLCB2YWx1ZTogYm9vbGVhbiB8IHN0cmluZykgPT4gdm9pZCkgfCBudWxsO1xuXG4gIC8qKiDnu5Pmnpzlm57osIPlh73mlbDkv53nlZkgKi9cbiAgcmVhZG9ubHkgT25fUmV0dXJuX1JlbWFpbjogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2RvcCBleHRlbmRzIENMb2RvcCB7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcblxuICAvKiog6I635b6X6L2v5Lu254mI5pys5Y+3ICovXG4gIFZFUlNJT046IHN0cmluZztcblxuICAvKipcbiAgICog5omT5Y2w5Yid5aeL5YyW44CC5Yid5aeL5YyW6L+Q6KGM546v5aKD77yM5riF55CG5byC5bi45omT5Y2w6YGX55WZ55qE57O757uf6LWE5rqQ77yM6K6+5a6a5omT5Y2w5Lu75Yqh5ZCN44CCXG4gICAqXG4gICAqICoq5bu66K6u5oiW6KaB5rGC77yaKiror6Xlh73mlbDkuI5QUklOVF9JTklUQemDveacieWIneWni+WMluWKn+iDve+8jOavj+S4quaJk+WNsOS6i+WKoeiHs+WwkeWIneWni+WMluS4gOasoe+8jOW7uuiuruaJk+WNsOeoi+W6j+mmluWFiOiwg+eUqOivpeWHveaVsOOAguS7u+WKoeWQjeimgeWwvemHj+WMuuWIq+S6juWFtuWug+aJk+WNsOS7u+WKoe+8jOitrOWmgueUqOKAnFhY5Y2V5L2NX1hY566h55CG5L+h5oGv57O757ufX1hY5a2Q57O757ufX1hY5qih5Z2XX1hY5omT5Y2w5L2c5Lia4oCd5a2X5qC344CCXG4gICAqIOS4jeW4jOacm+acgOe7iOeUqOaIt+abtOaUueaJk+WNsOW4g+WxgOaXtu+8jOWImeiuvnN0clRhc2tOYW1l56m644CCXG4gICAqXG4gICAqIEBwYXJhbSBzdHJUYXNrTmFtZSDmiZPljbDku7vliqHlkI1cbiAgICogQHJldHVybnMg6L+U5Zue6YC76L6R55yf6KGo56S65Yid5aeL5YyW5oiQ5Yqf77yM6YC76L6R5YGH6KGo56S65Yid5aeL5YyW5aSx6LSl77yM5aSx6LSl5Y6f5Zug5pyJ77ya5YmN5LiA5Liq5omT5Y2w5LqL5Yqh5rKh5pyJ5a6M5oiQ77yb5pON5L2c57O757uf5rKh5pyJ5re75Yqg5omT5Y2w5py6KOmpseWKqCnnrYlcbiAgICovXG4gIFBSSU5UX0lOSVQoc3RyVGFza05hbWU6IHN0cmluZyk6IGJvb2xlYW47XG5cbiAgLyoqIOiuvuWumue6uOW8oOWkp+WwjyAqL1xuICBTRVRfUFJJTlRfUEFHRVNJWkUoXG4gICAgaW50T3JpZW50OiBudW1iZXIsXG4gICAgUGFnZVdpZHRoOiBudW1iZXIgfCBzdHJpbmcsXG4gICAgUGFnZUhlaWdodDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIHN0clBhZ2VOYW1lOiBzdHJpbmcsXG4gICk6IHZvaWQ7XG5cbiAgLyoqIOWinuWKoOi2heaWh+acrOaJk+WNsOmhuSjmma7pgJrmqKHlvI8pICovXG4gIEFERF9QUklOVF9IVE0oXG4gICAgVG9wOiBudW1iZXIgfCBzdHJpbmcsXG4gICAgTGVmdDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIFdpZHRoOiBudW1iZXIgfCBzdHJpbmcsXG4gICAgSGVpZ2h0OiBudW1iZXIgfCBzdHJpbmcsXG4gICAgc3RySHRtbENvbnRlbnQ6IHN0cmluZyxcbiAgKTogdm9pZDtcblxuICAvKiog5aKe5Yqg6KGo5qC85omT5Y2w6aG577yI6LaF5paH5pys5qih5byP77yJKi9cbiAgQUREX1BSSU5UX1RBQkxFKFxuICAgIFRvcDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIExlZnQ6IG51bWJlciB8IHN0cmluZyxcbiAgICBXaWR0aDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIEhlaWdodDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIHN0ckh0bWw6IHN0cmluZyxcbiAgKTogdm9pZDtcblxuICAvKiog5aKe5Yqg6KGo5qC85omT5Y2w6aG577yI6LaF5paH5pys5qih5byP77yJKi9cbiAgQUREX1BSSU5UX1RBQkxFKFxuICAgIFRvcDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIExlZnQ6IG51bWJlciB8IHN0cmluZyxcbiAgICBXaWR0aDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIEhlaWdodDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIHN0ckh0bWw6IHN0cmluZyxcbiAgKTogdm9pZDtcblxuICAvKiog5aKe5Yqg6LaF5paH5pys5omT5Y2w6aG577yIVVJM5qih5byP77yJKi9cbiAgQUREX1BSSU5UX1VSTChcbiAgICBUb3A6IG51bWJlciB8IHN0cmluZyxcbiAgICBMZWZ0OiBudW1iZXIgfCBzdHJpbmcsXG4gICAgV2lkdGg6IG51bWJlciB8IHN0cmluZyxcbiAgICBIZWlnaHQ6IG51bWJlciB8IHN0cmluZyxcbiAgICBzdHJVUkw6IHN0cmluZyxcbiAgKTogdm9pZDtcblxuICAvKiog5aKe5Yqg57qv5paH5pys5omT5Y2w6aG5ICovXG4gIEFERF9QUklOVF9URVhUKFxuICAgIFRvcDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIExlZnQ6IG51bWJlciB8IHN0cmluZyxcbiAgICBXaWR0aDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIEhlaWdodDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIHN0ckNvbnRlbnQ6IHN0cmluZyxcbiAgKTogdm9pZDtcblxuICAvKiog5aKe5Yqg5Zu+54mH5omT5Y2w6aG5ICovXG4gIEFERF9QUklOVF9JTUFHRShcbiAgICBUb3A6IG51bWJlciB8IHN0cmluZyxcbiAgICBMZWZ0OiBudW1iZXIgfCBzdHJpbmcsXG4gICAgV2lkdGg6IG51bWJlciB8IHN0cmluZyxcbiAgICBIZWlnaHQ6IG51bWJlciB8IHN0cmluZyxcbiAgICBzdHJIdG1sQ29udGVudDogc3RyaW5nLFxuICApOiB2b2lkO1xuXG4gIC8qKiDlop7liqDnn6nlvaLnur8gKi9cbiAgQUREX1BSSU5UX1JFQ1QoXG4gICAgVG9wOiBudW1iZXIgfCBzdHJpbmcsXG4gICAgTGVmdDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIFdpZHRoOiBudW1iZXIgfCBzdHJpbmcsXG4gICAgSGVpZ2h0OiBudW1iZXIgfCBzdHJpbmcsXG4gICAgaW50TGluZVN0eWxlOiBudW1iZXIsXG4gICAgaW50TGluZVdpZHRoOiBudW1iZXIsXG4gICk6IHZvaWQ7XG5cbiAgLyoqIOWinuWKoOakreWchue6vyAqL1xuICBBRERfUFJJTlRfRUxMSVBTRShcbiAgICBUb3A6IG51bWJlciB8IHN0cmluZyxcbiAgICBMZWZ0OiBudW1iZXIgfCBzdHJpbmcsXG4gICAgV2lkdGg6IG51bWJlciB8IHN0cmluZyxcbiAgICBIZWlnaHQ6IG51bWJlciB8IHN0cmluZyxcbiAgICBpbnRMaW5lU3R5bGU6IG51bWJlcixcbiAgICBpbnRMaW5lV2lkdGg6IG51bWJlcixcbiAgKTogdm9pZDtcblxuICAvKiog5aKe5Yqg55u057q/ICovXG4gIEFERF9QUklOVF9MSU5FKFxuICAgIFRvcDE6IG51bWJlciB8IHN0cmluZyxcbiAgICBMZWZ0MTogbnVtYmVyIHwgc3RyaW5nLFxuICAgIFRvcDI6IG51bWJlciB8IHN0cmluZyxcbiAgICBMZWZ0MjogbnVtYmVyIHwgc3RyaW5nLFxuICAgIGludExpbmVTdHlsZTogbnVtYmVyLFxuICAgIGludExpbmVXaWR0aDogbnVtYmVyLFxuICApOiB2b2lkO1xuXG4gIC8qKiDlop7liqDmnaHlvaLnoIEgKi9cbiAgQUREX1BSSU5UX0JBUkNPREUoXG4gICAgVG9wOiBudW1iZXIgfCBzdHJpbmcsXG4gICAgTGVmdDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIFdpZHRoOiBudW1iZXIgfCBzdHJpbmcsXG4gICAgSGVpZ2h0OiBudW1iZXIgfCBzdHJpbmcsXG4gICAgQ29kZVR5cGU6IHN0cmluZyxcbiAgICBDb2RlVmFsdWU6IHN0cmluZyxcbiAgKTogdm9pZDtcblxuICAvKiog5aKe5Yqg5Zu+6KGoICovXG4gIEFERF9QUklOVF9DSEFSVChcbiAgICBUb3A6IG51bWJlciB8IHN0cmluZyxcbiAgICBMZWZ0OiBudW1iZXIgfCBzdHJpbmcsXG4gICAgV2lkdGg6IG51bWJlciB8IHN0cmluZyxcbiAgICBIZWlnaHQ6IG51bWJlciB8IHN0cmluZyxcbiAgICBDaGFydFR5cGU6IG51bWJlcixcbiAgICBzdHJIdG1sOiBzdHJpbmcsXG4gICk6IHZvaWQ7XG5cbiAgLyoqIOijhei9veaWh+aho+W8j+aooeadvyAqL1xuICBBRERfUFJJTlRfREFUQShzdHJEYXRhU3R5bGU6IHN0cmluZywgdmFyRGF0YVZhbHVlOiBhbnkpOiB2b2lkO1xuXG4gIC8qKiDorr7nva7miZPljbDpobnpo47moLwgKi9cbiAgU0VUX1BSSU5UX1NUWUxFKHN0clN0eWxlTmFtZTogTG9kb3BTdHlsZVZhbHVlLCB2YXJTdHlsZVZhbHVlOiBudW1iZXIgfCBzdHJpbmcpOiB2b2lkO1xuXG4gIC8qKiDmiZPljbDpooTop4ggKi9cbiAgUFJFVklFVygpOiBudW1iZXI7XG5cbiAgLyoqIOebtOaOpeaJk+WNsCAqL1xuICBQUklOVCgpOiBzdHJpbmc7XG5cbiAgLyoqIOaJk+WNsOe7tOaKpCAqL1xuICBQUklOVF9TRVRVUCgpOiBzdHJpbmc7XG5cbiAgLyoqIOaJk+WNsOiuvuiuoSAqL1xuICBQUklOVF9ERVNJR04oKTogc3RyaW5nO1xuXG4gIC8qKiDlvLrliLbliIbpobUgKi9cbiAgTkVXUEFHRSgpOiBib29sZWFuO1xuXG4gIC8qKiDojrflvpfmiZPljbDorr7lpIfkuKrmlbAgKi9cbiAgR0VUX1BSSU5URVJfQ09VTlQoKTogbnVtYmVyO1xuXG4gIC8qKiDojrflvpfmiZPljbDorr7lpIflkI3np7AgKi9cbiAgR0VUX1BSSU5URVJfTkFNRShzdHJQcmludGVySURhbmRUeXBlOiBudW1iZXIgfCBzdHJpbmcpOiBzdHJpbmc7XG5cbiAgLyoqIOaMh+WumuaJk+WNsOiuvuWkhyAqL1xuICBTRVRfUFJJTlRFUl9JTkRFWChvSW5kZXhPck5hbWU6IG51bWJlciB8IHN0cmluZyk6IGJvb2xlYW47XG4gIC8qKiDjgJBDTG9kb3DjgJHmjIflrprmiZPljbDmnLogKi9cbiAgU0VUX1BSSU5URVJfSU5ERVgoXG4gICAgRHJpdmVySW5kZXg6IG51bWJlciB8IHN0cmluZyxcbiAgICBQcmludGVySURhbmROYW1lOiBudW1iZXIgfCBzdHJpbmcsXG4gICAgU3ViRGV2SW5kZXg6IG51bWJlciB8IHN0cmluZyxcbiAgKTogYm9vbGVhbjtcblxuICAvKiog6YCJ5oup5omT5Y2w6K6+5aSHICovXG4gIFNFTEVDVF9QUklOVEVSKCk6IG51bWJlcjtcblxuICAvKiog6K6+572u5pi+56S65qih5byPICovXG4gIFNFVF9TSE9XX01PREUoc3RyTW9kZVR5cGU6IHN0cmluZywgdmFyTW9kZVZhbHVlOiBudW1iZXIgfCBzdHJpbmcpOiBib29sZWFuO1xuXG4gIC8qKiDorr7nva7miZPljbDmqKHlvI8gKi9cbiAgU0VUX1BSSU5UX01PREUoc3RyTW9kZVR5cGU6IHN0cmluZywgdmFyTW9kZVZhbHVlOiBudW1iZXIgfCBzdHJpbmcpOiBib29sZWFuIHwgc3RyaW5nO1xuXG4gIC8qKiDorr7nva7miZPljbDku73mlbAgKi9cbiAgU0VUX1BSSU5UX0NPUElFUyhpbnRDb3BpZXM6IG51bWJlcik6IGJvb2xlYW47XG5cbiAgLyoqIOiuvue9rumihOiniOeql+WPoyAqL1xuICBTRVRfUFJFVklFV19XSU5ET1coXG4gICAgaW50RGlzcE1vZGU6IG51bWJlcixcbiAgICBpbnRUb29sTW9kZTogbnVtYmVyLFxuICAgIGJsRGlyZWN0UHJpbnQ6IG51bWJlcixcbiAgICBpbldpZHRoOiBudW1iZXIsXG4gICAgaW50SGVpZ2h0OiBudW1iZXIsXG4gICAgc3RyVGl0bGVCdXR0b25DYXB0b2luOiBzdHJpbmcsXG4gICk6IHZvaWQ7XG5cbiAgLyoqIOaMh+WumuiDjOaZr+WbviAqL1xuICBBRERfUFJJTlRfU0VUVVBfQktJTUcoc3RySW1nSHRtbDogc3RyaW5nKTogdm9pZDtcblxuICAvKiog5Y+R6YCB5Y6f5aeL5pWw5o2uICovXG4gIFNFTkRfUFJJTlRfUkFXREFUQShzdHJSYXdEYXRhOiBzdHJpbmcpOiBib29sZWFuO1xuXG4gIC8qKiDlhpnnq6/lj6PmlbDmja4gKi9cbiAgV1JJVEVfUE9SVF9EQVRBKHN0clBvcnROYW1lOiBzdHJpbmcsIHN0ckRhdGE6IHN0cmluZyk6IGJvb2xlYW47XG5cbiAgLyoqIOivu+err+WPo+aVsOaNriAqL1xuICBSRUFEX1BPUlRfREFUQShzdHJQb3J0TmFtZTogc3RyaW5nKTogc3RyaW5nO1xuXG4gIC8qKiDojrflvpfphY3nva7mlofku7blkI0gKi9cbiAgR0VUX1BSSU5UX0lOSUZGTkFNRShzdHJQcmludFRhc2s6IHN0cmluZyk6IHN0cmluZztcblxuICAvKiog6I635b6X57q45byg57G75Z6L5ZCN5riF5Y2VICovXG4gIEdFVF9QQUdFU0laRVNfTElTVChvUHJpbnRlck5hbWU6IG51bWJlciB8IHN0cmluZywgc3RyU3BsaXQ6IHN0cmluZyk6IHN0cmluZztcblxuICAvKiog5YaZ5pys5Zyw5paH5Lu25YaF5a65ICovXG4gIFdSSVRFX0ZJTEVfVEVYVChpbnRXcml0ZU1vZGU6IG51bWJlciB8IHN0cmluZywgc3RyRmlsZU5hbWU6IHN0cmluZywgc3RyVGV4dDogc3RyaW5nKTogc3RyaW5nO1xuXG4gIC8qKiDor7vmnKzlnLDmlofku7blhoXlrrkgKi9cbiAgR0VUX0ZJTEVfVEVYVChzdHJGaWxlTmFtZTogc3RyaW5nKTogc3RyaW5nIHwgbnVsbDtcblxuICAvKiog6K+75pys5Zyw5paH5Lu25pe26Ze0ICovXG4gIEdFVF9GSUxFX1RJTUUoc3RyRmlsZU5hbWU6IHN0cmluZyk6IHN0cmluZyB8IG51bGw7XG5cbiAgLyoqIOWIpOaWreacrOWcsOaWh+S7tuaYr+WQpuWtmOWcqCAqL1xuICBJU19GSUxFX0VYSVNUKHN0ckZpbGVOYW1lOiBzdHJpbmcpOiBib29sZWFuO1xuXG4gIC8qKiDojrflvpfns7vnu5/kv6Hmga8gKi9cbiAgR0VUX1NZU1RFTV9JTkZPKHN0ckluZm9UeXBlOiBzdHJpbmcpOiBib29sZWFuO1xuXG4gIC8qKiDojrflvpfmlbDmja7lgLwgKi9cbiAgR0VUX1ZBTFVFKFZhbHVlVHlwZTogc3RyaW5nLCBWYWx1ZUluZGV4OiBudW1iZXIgfCBzdHJpbmcpOiBhbnk7XG5cbiAgLyoqIOaVsOaNruagvOW8j+i9rOaNoiAqL1xuICBGT1JNQVQob1R5cGU6IHN0cmluZywgb1ZhbHVlOiBhbnkpOiBhbnk7XG5cbiAgLyoqIOiOt+W+l+Wvueivneahhue7k+aenOWAvCAqL1xuICBHRVRfRElBTE9HX1ZBTFVFKG9UeXBlOiBzdHJpbmcsIG9QcmVWYWx1ZTogc3RyaW5nKTogc3RyaW5nO1xuXG4gIC8qKiAo5aKe5by65Z6LKeaJk+WNsOWIneWni+WMliAqL1xuICBQUklOVF9JTklUQShcbiAgICBUb3A6IG51bWJlciB8IHN0cmluZyxcbiAgICBMZWZ0OiBudW1iZXIgfCBzdHJpbmcsXG4gICAgV2lkdGg6IG51bWJlciB8IHN0cmluZyxcbiAgICBIZWlnaHQ6IG51bWJlciB8IHN0cmluZyxcbiAgICBzdHJQcmludE5hbWU6IHN0cmluZyxcbiAgKTogYm9vbGVhbjtcblxuICAvKiogKOWinuW8uuWeiynlop7liqDotoXmlofmnKzmiZPljbDpobko5Zu+5b2i5qih5byPKSAqL1xuICBBRERfUFJJTlRfSFRNTChcbiAgICBUb3A6IG51bWJlciB8IHN0cmluZyxcbiAgICBMZWZ0OiBudW1iZXIgfCBzdHJpbmcsXG4gICAgV2lkdGg6IG51bWJlciB8IHN0cmluZyxcbiAgICBIZWlnaHQ6IG51bWJlciB8IHN0cmluZyxcbiAgICBzdHJIdG1sQ29udGVudDogc3RyaW5nLFxuICApOiB2b2lkO1xuXG4gIC8qKiAo5aKe5by65Z6LKeWinuWKoOihqOagvOaJk+WNsOmhue+8iFVSTOaooeW8j++8iSAqL1xuICBBRERfUFJJTlRfVEJVUkwoXG4gICAgVG9wOiBudW1iZXIgfCBzdHJpbmcsXG4gICAgTGVmdDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIFdpZHRoOiBudW1iZXIgfCBzdHJpbmcsXG4gICAgSGVpZ2h0OiBudW1iZXIgfCBzdHJpbmcsXG4gICAgc3RyVVJMOiBzdHJpbmcsXG4gICk6IHZvaWQ7XG5cbiAgLyoqICjlop7lvLrlnosp5aKe5Yqg57qv5paH5pys5omT5Y2w6aG5ICovXG4gIEFERF9QUklOVF9URVhUQShcbiAgICBUb3A6IG51bWJlciB8IHN0cmluZyxcbiAgICBMZWZ0OiBudW1iZXIgfCBzdHJpbmcsXG4gICAgV2lkdGg6IG51bWJlciB8IHN0cmluZyxcbiAgICBIZWlnaHQ6IG51bWJlciB8IHN0cmluZyxcbiAgICBzdHJDb250ZW50OiBzdHJpbmcsXG4gICk6IHZvaWQ7XG5cbiAgLyoqICjlop7lvLrlnosp6K6+572u5omT5Y2w6aG56aOO5qC8QSwg57un5om/IGBTRVRfUFJJTlRfU1RZTEVgIOeahOaJgOacieWxnuaApyAqL1xuICBTRVRfUFJJTlRfU1RZTEVBKHZhckl0ZW1OYW1lSUQ6IG51bWJlciB8IHN0cmluZywgc3RyU3R5bGVOYW1lOiBzdHJpbmcsIHZhclN0eWxlVmFsdWU6IG51bWJlciB8IHN0cmluZyk6IHZvaWQ7XG5cbiAgLyoqICjlop7lvLrlnosp5a+85Ye65pWw5o2u5Yiw5paH5Lu2ICovXG4gIFNBVkVfVE9fRklMRShzdHJGaWxlTmFtZTogc3RyaW5nKTogYm9vbGVhbjtcblxuICAvKiogKOWinuW8uuWeiynorr7nva7kv53lrZjmqKHlvI8gKi9cbiAgU0VUX1NBVkVfTU9ERSh2YXJNb2RlTmFtZTogc3RyaW5nLCB2YXJNb2RlVmFsdWU6IG51bWJlciB8IHN0cmluZyk6IGJvb2xlYW47XG5cbiAgLyoqICjlop7lvLrlnosp5aKe5Yqg5Zu+5b2iICovXG4gIEFERF9QUklOVF9TSEFQRShcbiAgICBpbnRTaGFwZVR5cGU6IG51bWJlcixcbiAgICBUb3A6IG51bWJlciB8IHN0cmluZyxcbiAgICBMZWZ0OiBudW1iZXIgfCBzdHJpbmcsXG4gICAgV2lkdGg6IG51bWJlciB8IHN0cmluZyxcbiAgICBIZWlnaHQ6IG51bWJlciB8IHN0cmluZyxcbiAgICBpbnRMaW5lU3R5bGU6IG51bWJlcixcbiAgICBpbnRMaW5lV2lkdGg6IG51bWJlcixcbiAgICB2YXJDb2xvcjogbnVtYmVyIHwgc3RyaW5nLFxuICApOiB2b2lkO1xuXG4gIC8qKiAo5aKe5by65Z6LKeaMh+WumuaJk+WNsOiuvuWkhyAqL1xuICBTRVRfUFJJTlRFUl9JTkRFWEEob0luZGV4T3JOYW1lOiBudW1iZXIgfCBzdHJpbmcpOiBib29sZWFuO1xuXG4gIC8qKiAo5aKe5by65Z6LKeW8uuWItuWIhumhtSAqL1xuICBORVdQQUdFQSgpOiBib29sZWFuO1xuXG4gIC8qKiAo5aKe5by65Z6LKeaJk+WNsOmihOiniEEgKi9cbiAgUFJFVklFV0EoKTogbnVtYmVyO1xuXG4gIC8qKiAo5aKe5by65Z6LKeaJk+WNsOmihOiniEIgKi9cbiAgUFJFVklFV0IoKTogbnVtYmVyO1xuXG4gIC8qKiDnm7TmjqXmiZPljbBBICovXG4gIFBSSU5UQSgpOiBib29sZWFuO1xuXG4gIC8qKiDnm7TmjqXmiZPljbBCICovXG4gIFBSSU5UQigpOiBib29sZWFuO1xuXG4gIC8qKiDmmL7npLrlm77ooaggKi9cbiAgU0hPV19DSEFSVCgpOiB2b2lkO1xuXG4gIC8qKiDmjqfliLbnlYzpnaLliqjkvZwgKi9cbiAgRE9fQUNUSU9OKEFjdE5hbWU6IHN0cmluZywgQWN0VmFsdWU6IG51bWJlciB8IHN0cmluZyk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIOiuvue9rui9r+S7tuS6p+WTgeazqOWGjOS/oeaBr1xuICAgKlxuICAgKiBAcGFyYW0gIHN0ckNvbXBhbnlOYW1lIOazqOWGjOWNleS9jeWQjeensO+8jOeUqOmAlOS4juaOp+S7tuWPguaVsENvbXBhbnlOYW1l5LiA5qC344CCXG4gICAqIEBwYXJhbSAgc3RyTGljZW5zZSDkuLvms6jlhozlj7fvvIznlKjpgJTkuI7mjqfku7blj4LmlbBMaWNlbnNl5LiA5qC344CCXG4gICAqIEBwYXJhbSAgc3RyTGljZW5zZUEg6ZmE5Yqg5rOo5YaM5Y+3Qe+8jOeUqOmAlOS4juaOp+S7tuWPguaVsExpY2Vuc2VB5LiA5qC344CCXG4gICAqIEBwYXJhbSAgc3RyTGljZW5zZUIg6ZmE5Yqg5rOo5YaM5Y+3Qu+8jOeUqOmAlOS4juaOp+S7tuWPguaVsExpY2Vuc2VC5LiA5qC344CCXG4gICAqL1xuICBTRVRfTElDRU5TRVMoc3RyQ29tcGFueU5hbWU6IHN0cmluZywgc3RyTGljZW5zZTogc3RyaW5nLCBzdHJMaWNlbnNlQT86IHN0cmluZywgc3RyTGljZW5zZUI/OiBzdHJpbmcpOiB2b2lkO1xuXG4gIHdlYnNrdDogV2ViU29ja2V0O1xufVxuXG5leHBvcnQgdHlwZSBMb2RvcFN0eWxlVmFsdWUgPVxuICB8ICdGb250TmFtZSdcbiAgfCAnRm9udFNpemUnXG4gIHwgJ0ZvbnRDb2xvcidcbiAgfCAnQm9sZCdcbiAgfCAnSXRhbGljJ1xuICB8ICdVbmRlcmxpbmUnXG4gIHwgJ0FsaWdubWVudCdcbiAgfCAnQW5nbGUnXG4gIHwgJ0l0ZW1UeXBlJ1xuICB8ICdIT3JpZW50J1xuICB8ICdWT3JpZW50J1xuICB8ICdQZW5XaWR0aCdcbiAgfCAnUGVuU3R5bGUnXG4gIHwgJ1N0cmV0Y2gnXG4gIHwgJ1ByZXZpZXdPbmx5J1xuICB8ICdSZWFkT25seSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9kb3BSZXN1bHQge1xuICAvKiog5piv5ZCm5oiQ5YqfICovXG4gIG9rOiBib29sZWFuO1xuICAvKiog6ZSZ6K+v56CBICovXG4gIHN0YXR1cz86IHN0cmluZztcbiAgLyoqIOaIkOWKn+aXtuaQuuW4piBMT0RPUCDlr7nosaEgKi9cbiAgbG9kb3A/OiBMb2RvcDtcbiAgLyoqIOmUmeivr+S/oeaBryAqL1xuICBlcnJvcj86IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2RvcFByaW50UmVzdWx0IHtcbiAgLyoqIOaYr+WQpuaIkOWKnyAqL1xuICBvazogYm9vbGVhbjtcbiAgLyoqIOmUmeivr+S/oeaBryAqL1xuICBlcnJvcj86IHN0cmluZztcbiAgLyoqIOS7o+eggSAqL1xuICBjb2RlOiBzdHJpbmc7XG4gIC8qKiDliqjmgIHlj4LmlbDkuIrkuIvmloflr7nosaEgKi9cbiAgaXRlbTogYW55O1xuICAvKiog5Luj56CB6Kej5p6Q6KGo6L6+5byPICovXG4gIHBhcnNlcj86IFJlZ0V4cDtcbn1cbiJdfQ==