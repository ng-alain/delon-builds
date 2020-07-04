/**
 * @fileoverview added by tsickle
 * Generated from: src/widgets/upload/schema.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function SFUploadWidgetSchema() { }
if (false) {
    /**
     * 异步数据源
     * @type {?|undefined}
     */
    SFUploadWidgetSchema.prototype.asyncData;
    /**
     * 上传类型，默认：`select`
     * @type {?|undefined}
     */
    SFUploadWidgetSchema.prototype.type;
    /**
     * 按钮文本，默认：`点击上传`
     * @type {?|undefined}
     */
    SFUploadWidgetSchema.prototype.text;
    /**
     * 提醒文本，drag 时有效，默认：`支持单个或批量，严禁上传公司数据或其他安全文件`
     * @type {?|undefined}
     */
    SFUploadWidgetSchema.prototype.hint;
    /**
     * 重命名返回参数，支持 `a.b.c` 的嵌套写法，若不指定表示整个返回体
     * @type {?|undefined}
     */
    SFUploadWidgetSchema.prototype.resReName;
    /**
     * 重命名预览图像URL返回参数，支持 `a.b.c` 的嵌套写法，若不指定表示使用文件对象的 `url`、`thumbUrl` 值
     * @type {?|undefined}
     */
    SFUploadWidgetSchema.prototype.urlReName;
    /**
     * **必选参数** 上传的地址
     * @type {?|undefined}
     */
    SFUploadWidgetSchema.prototype.action;
    /**
     * 接受上传的文件类型, 详见 [input accept Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept)
     * @type {?|undefined}
     */
    SFUploadWidgetSchema.prototype.accept;
    /**
     * 限制单次最多上传数量，`multiple` 打开时有效；`0` 表示不限，默认：`0`
     * @type {?|undefined}
     */
    SFUploadWidgetSchema.prototype.limit;
    /**
     * 限制上传文件数量，超过数量隐藏上传按钮
     * @type {?|undefined}
     */
    SFUploadWidgetSchema.prototype.limitFileCount;
    /**
     * 自定义过滤器
     * @type {?|undefined}
     */
    SFUploadWidgetSchema.prototype.filter;
    /**
     * 文件列表
     * @type {?|undefined}
     */
    SFUploadWidgetSchema.prototype.fileList;
    /**
     * 限制文件大小，单位：KB；`0` 表示不限，默认：`0`
     * @type {?|undefined}
     */
    SFUploadWidgetSchema.prototype.fileSize;
    /**
     * 限制文件类型，例如：`image/png,image/jpeg,image/gif,image/bmp`
     * @type {?|undefined}
     */
    SFUploadWidgetSchema.prototype.fileType;
    /**
     * 设置上传的请求头部
     * @type {?|undefined}
     */
    SFUploadWidgetSchema.prototype.headers;
    /**
     * 上传列表的内建样式，默认：`text`
     * @type {?|undefined}
     */
    SFUploadWidgetSchema.prototype.listType;
    /**
     * 是否展示列表, 可设为一个对象，用于单独设定 `showPreviewIcon` 和 `showRemoveIcon`，默认：`true`
     * @type {?|undefined}
     */
    SFUploadWidgetSchema.prototype.showUploadList;
    /**
     * 是否支持多选文件，`IE10+` 支持。开启后按住 `ctrl` 可选择多个文件，默认：`false`
     * @type {?|undefined}
     */
    SFUploadWidgetSchema.prototype.multiple;
    /**
     * 发到后台的文件参数名，默认：`file`
     * @type {?|undefined}
     */
    SFUploadWidgetSchema.prototype.name;
    /**
     * 上传所需参数或返回上传参数的方法
     * @type {?|undefined}
     */
    SFUploadWidgetSchema.prototype.data;
    /**
     * 上传请求时是否携带 cookie，默认：`false`
     * @type {?|undefined}
     */
    SFUploadWidgetSchema.prototype.withCredentials;
    /**
     * 支持上传文件夹（[caniuse](https://caniuse.com/#feat=input-file-directory)），默认：`false`
     * @type {?|undefined}
     */
    SFUploadWidgetSchema.prototype.directory;
    /**
     * 点击打开文件对话框，默认：`true`
     * @type {?|undefined}
     */
    SFUploadWidgetSchema.prototype.openFileDialogOnClick;
    /**
     * 上传文件之前的钩子，参数为上传的文件，若返回 `false` 则停止上传
     * @type {?|undefined}
     */
    SFUploadWidgetSchema.prototype.beforeUpload;
    /**
     * 通过覆盖默认的上传行为，可以自定义自己的上传实现
     * @type {?|undefined}
     */
    SFUploadWidgetSchema.prototype.customRequest;
    /**
     * 点击移除文件时的回调，返回值为 `false` 时不移除
     * @type {?|undefined}
     */
    SFUploadWidgetSchema.prototype.remove;
    /**
     * 点击文件链接或预览图标时的回调
     * @type {?|undefined}
     */
    SFUploadWidgetSchema.prototype.preview;
    /**
     * 自定义文件预览逻辑
     * @type {?|undefined}
     */
    SFUploadWidgetSchema.prototype.previewFile;
    /**
     * 点击下载文件时的回调，如果没有指定，则默认跳转到文件 url 对应的标签页
     * @type {?|undefined}
     */
    SFUploadWidgetSchema.prototype.download;
    /**
     * 在上传之前转换文件。支持返回一个 Observable 对象
     * @type {?|undefined}
     */
    SFUploadWidgetSchema.prototype.transformFile;
    /**
     * 上传文件改变时的状态
     * @type {?|undefined}
     */
    SFUploadWidgetSchema.prototype.change;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy91cGxvYWQvc2NoZW1hLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBWUEsMENBMkpDOzs7Ozs7SUF2SkMseUNBQWlEOzs7OztJQUtqRCxvQ0FBeUI7Ozs7O0lBS3pCLG9DQUFjOzs7OztJQUtkLG9DQUFjOzs7OztJQUtkLHlDQUFtQjs7Ozs7SUFLbkIseUNBQW1COzs7OztJQUtuQixzQ0FBd0U7Ozs7O0lBS3hFLHNDQUEyQjs7Ozs7SUFLM0IscUNBQWU7Ozs7O0lBS2YsOENBQXdCOzs7OztJQUt4QixzQ0FBd0I7Ozs7O0lBS3hCLHdDQUEwQjs7Ozs7SUFLMUIsd0NBQWtCOzs7OztJQUtsQix3Q0FBa0I7Ozs7O0lBS2xCLHVDQUE2RDs7Ozs7SUFLN0Qsd0NBQStDOzs7OztJQUsvQyw4Q0FBcUQ7Ozs7O0lBS3JELHdDQUFtQjs7Ozs7SUFLbkIsb0NBQWM7Ozs7O0lBS2Qsb0NBQTBEOzs7OztJQUsxRCwrQ0FBMEI7Ozs7O0lBSzFCLHlDQUFvQjs7Ozs7SUFLcEIscURBQWdDOzs7OztJQUtoQyw0Q0FBK0Y7Ozs7O0lBSy9GLDZDQUF3RDs7Ozs7SUFLeEQsc0NBQStEOzs7OztJQUsvRCx1Q0FBdUM7Ozs7O0lBS3ZDLDJDQUF5RDs7Ozs7SUFLekQsd0NBQXdDOzs7OztJQUt4Qyw2Q0FBa0U7Ozs7O0lBS2xFLHNDQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIE56U2hvd1VwbG9hZExpc3RJbnRlcmZhY2UsXG4gIE56VXBsb2FkQ2hhbmdlUGFyYW0sXG4gIE56VXBsb2FkRmlsZSxcbiAgTnpVcGxvYWRUcmFuc2Zvcm1GaWxlVHlwZSxcbiAgTnpVcGxvYWRYSFJBcmdzLFxuICBVcGxvYWRGaWx0ZXIsXG59IGZyb20gJ25nLXpvcnJvLWFudGQvdXBsb2FkJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU0ZTY2hlbWFFbnVtVHlwZSB9IGZyb20gJy4uLy4uL3NjaGVtYSc7XG5pbXBvcnQgeyBTRlVJU2NoZW1hSXRlbSB9IGZyb20gJy4uLy4uL3NjaGVtYS91aSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU0ZVcGxvYWRXaWRnZXRTY2hlbWEgZXh0ZW5kcyBTRlVJU2NoZW1hSXRlbSB7XG4gIC8qKlxuICAgKiDlvILmraXmlbDmja7mupBcbiAgICovXG4gIGFzeW5jRGF0YT86ICgpID0+IE9ic2VydmFibGU8U0ZTY2hlbWFFbnVtVHlwZVtdPjtcblxuICAvKipcbiAgICog5LiK5Lyg57G75Z6L77yM6buY6K6k77yaYHNlbGVjdGBcbiAgICovXG4gIHR5cGU/OiAnc2VsZWN0JyB8ICdkcmFnJztcblxuICAvKipcbiAgICog5oyJ6ZKu5paH5pys77yM6buY6K6k77yaYOeCueWHu+S4iuS8oGBcbiAgICovXG4gIHRleHQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIOaPkOmGkuaWh+acrO+8jGRyYWcg5pe25pyJ5pWI77yM6buY6K6k77yaYOaUr+aMgeWNleS4quaIluaJuemHj++8jOS4peemgeS4iuS8oOWFrOWPuOaVsOaNruaIluWFtuS7luWuieWFqOaWh+S7tmBcbiAgICovXG4gIGhpbnQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIOmHjeWRveWQjei/lOWbnuWPguaVsO+8jOaUr+aMgSBgYS5iLmNgIOeahOW1jOWll+WGmeazle+8jOiLpeS4jeaMh+WumuihqOekuuaVtOS4qui/lOWbnuS9k1xuICAgKi9cbiAgcmVzUmVOYW1lPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiDph43lkb3lkI3pooTop4jlm77lg49VUkzov5Tlm57lj4LmlbDvvIzmlK/mjIEgYGEuYi5jYCDnmoTltYzlpZflhpnms5XvvIzoi6XkuI3mjIflrprooajnpLrkvb/nlKjmlofku7blr7nosaHnmoQgYHVybGDjgIFgdGh1bWJVcmxgIOWAvFxuICAgKi9cbiAgdXJsUmVOYW1lPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiAqKuW/hemAieWPguaVsCoqIOS4iuS8oOeahOWcsOWdgFxuICAgKi9cbiAgYWN0aW9uPzogc3RyaW5nIHwgKChmaWxlOiBOelVwbG9hZEZpbGUpID0+IHN0cmluZyB8IE9ic2VydmFibGU8c3RyaW5nPik7XG5cbiAgLyoqXG4gICAqIOaOpeWPl+S4iuS8oOeahOaWh+S7tuexu+Weiywg6K+m6KeBIFtpbnB1dCBhY2NlcHQgQXR0cmlidXRlXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVE1ML0VsZW1lbnQvaW5wdXQjYXR0ci1hY2NlcHQpXG4gICAqL1xuICBhY2NlcHQ/OiBzdHJpbmcgfCBzdHJpbmdbXTtcblxuICAvKipcbiAgICog6ZmQ5Yi25Y2V5qyh5pyA5aSa5LiK5Lyg5pWw6YeP77yMYG11bHRpcGxlYCDmiZPlvIDml7bmnInmlYjvvJtgMGAg6KGo56S65LiN6ZmQ77yM6buY6K6k77yaYDBgXG4gICAqL1xuICBsaW1pdD86IG51bWJlcjtcblxuICAvKipcbiAgICog6ZmQ5Yi25LiK5Lyg5paH5Lu25pWw6YeP77yM6LaF6L+H5pWw6YeP6ZqQ6JeP5LiK5Lyg5oyJ6ZKuXG4gICAqL1xuICBsaW1pdEZpbGVDb3VudD86IG51bWJlcjtcblxuICAvKipcbiAgICog6Ieq5a6a5LmJ6L+H5ruk5ZmoXG4gICAqL1xuICBmaWx0ZXI/OiBVcGxvYWRGaWx0ZXJbXTtcblxuICAvKipcbiAgICog5paH5Lu25YiX6KGoXG4gICAqL1xuICBmaWxlTGlzdD86IE56VXBsb2FkRmlsZVtdO1xuXG4gIC8qKlxuICAgKiDpmZDliLbmlofku7blpKflsI/vvIzljZXkvY3vvJpLQu+8m2AwYCDooajnpLrkuI3pmZDvvIzpu5jorqTvvJpgMGBcbiAgICovXG4gIGZpbGVTaXplPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiDpmZDliLbmlofku7bnsbvlnovvvIzkvovlpoLvvJpgaW1hZ2UvcG5nLGltYWdlL2pwZWcsaW1hZ2UvZ2lmLGltYWdlL2JtcGBcbiAgICovXG4gIGZpbGVUeXBlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiDorr7nva7kuIrkvKDnmoTor7fmsYLlpLTpg6hcbiAgICovXG4gIGhlYWRlcnM/OiB7fSB8ICgoZmlsZTogTnpVcGxvYWRGaWxlKSA9PiB7fSB8IE9ic2VydmFibGU8e30+KTtcblxuICAvKipcbiAgICog5LiK5Lyg5YiX6KGo55qE5YaF5bu65qC35byP77yM6buY6K6k77yaYHRleHRgXG4gICAqL1xuICBsaXN0VHlwZT86ICd0ZXh0JyB8ICdwaWN0dXJlJyB8ICdwaWN0dXJlLWNhcmQnO1xuXG4gIC8qKlxuICAgKiDmmK/lkKblsZXnpLrliJfooagsIOWPr+iuvuS4uuS4gOS4quWvueixoe+8jOeUqOS6juWNleeLrOiuvuWumiBgc2hvd1ByZXZpZXdJY29uYCDlkowgYHNob3dSZW1vdmVJY29uYO+8jOm7mOiupO+8mmB0cnVlYFxuICAgKi9cbiAgc2hvd1VwbG9hZExpc3Q/OiBib29sZWFuIHwgTnpTaG93VXBsb2FkTGlzdEludGVyZmFjZTtcblxuICAvKipcbiAgICog5piv5ZCm5pSv5oyB5aSa6YCJ5paH5Lu277yMYElFMTArYCDmlK/mjIHjgILlvIDlkK/lkI7mjInkvY8gYGN0cmxgIOWPr+mAieaLqeWkmuS4quaWh+S7tu+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIG11bHRpcGxlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICog5Y+R5Yiw5ZCO5Y+w55qE5paH5Lu25Y+C5pWw5ZCN77yM6buY6K6k77yaYGZpbGVgXG4gICAqL1xuICBuYW1lPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiDkuIrkvKDmiYDpnIDlj4LmlbDmiJbov5Tlm57kuIrkvKDlj4LmlbDnmoTmlrnms5VcbiAgICovXG4gIGRhdGE/OiB7fSB8ICgoZmlsZTogTnpVcGxvYWRGaWxlKSA9PiB7fSB8IE9ic2VydmFibGU8e30+KTtcblxuICAvKipcbiAgICog5LiK5Lyg6K+35rGC5pe25piv5ZCm5pC65bimIGNvb2tpZe+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOaUr+aMgeS4iuS8oOaWh+S7tuWkue+8iFtjYW5pdXNlXShodHRwczovL2Nhbml1c2UuY29tLyNmZWF0PWlucHV0LWZpbGUtZGlyZWN0b3J5Ke+8ie+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIGRpcmVjdG9yeT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOeCueWHu+aJk+W8gOaWh+S7tuWvueivneahhu+8jOm7mOiupO+8mmB0cnVlYFxuICAgKi9cbiAgb3BlbkZpbGVEaWFsb2dPbkNsaWNrPzogYm9vbGVhbjtcblxuICAvKipcbiAgICog5LiK5Lyg5paH5Lu25LmL5YmN55qE6ZKp5a2Q77yM5Y+C5pWw5Li65LiK5Lyg55qE5paH5Lu277yM6Iul6L+U5ZueIGBmYWxzZWAg5YiZ5YGc5q2i5LiK5LygXG4gICAqL1xuICBiZWZvcmVVcGxvYWQ/OiAoZmlsZTogTnpVcGxvYWRGaWxlLCBmaWxlTGlzdDogTnpVcGxvYWRGaWxlW10pID0+IGJvb2xlYW4gfCBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG4gIC8qKlxuICAgKiDpgJrov4fopobnm5bpu5jorqTnmoTkuIrkvKDooYzkuLrvvIzlj6/ku6Xoh6rlrprkuYnoh6rlt7HnmoTkuIrkvKDlrp7njrBcbiAgICovXG4gIGN1c3RvbVJlcXVlc3Q/OiAoaXRlbTogTnpVcGxvYWRYSFJBcmdzKSA9PiBTdWJzY3JpcHRpb247XG5cbiAgLyoqXG4gICAqIOeCueWHu+enu+mZpOaWh+S7tuaXtueahOWbnuiwg++8jOi/lOWbnuWAvOS4uiBgZmFsc2VgIOaXtuS4jeenu+mZpFxuICAgKi9cbiAgcmVtb3ZlPzogKGZpbGU6IE56VXBsb2FkRmlsZSkgPT4gYm9vbGVhbiB8IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgLyoqXG4gICAqIOeCueWHu+aWh+S7tumTvuaOpeaIlumihOiniOWbvuagh+aXtueahOWbnuiwg1xuICAgKi9cbiAgcHJldmlldz86IChmaWxlOiBOelVwbG9hZEZpbGUpID0+IHZvaWQ7XG5cbiAgLyoqXG4gICAqIOiHquWumuS5ieaWh+S7tumihOiniOmAu+i+kVxuICAgKi9cbiAgcHJldmlld0ZpbGU/OiAoZmlsZTogTnpVcGxvYWRGaWxlKSA9PiBPYnNlcnZhYmxlPHN0cmluZz47XG5cbiAgLyoqXG4gICAqIOeCueWHu+S4i+i9veaWh+S7tuaXtueahOWbnuiwg++8jOWmguaenOayoeacieaMh+Wumu+8jOWImem7mOiupOi3s+i9rOWIsOaWh+S7tiB1cmwg5a+55bqU55qE5qCH562+6aG1XG4gICAqL1xuICBkb3dubG9hZD86IChmaWxlOiBOelVwbG9hZEZpbGUpID0+IHZvaWQ7XG5cbiAgLyoqXG4gICAqIOWcqOS4iuS8oOS5i+WJjei9rOaNouaWh+S7tuOAguaUr+aMgei/lOWbnuS4gOS4qiBPYnNlcnZhYmxlIOWvueixoVxuICAgKi9cbiAgdHJhbnNmb3JtRmlsZT86IChmaWxlOiBOelVwbG9hZEZpbGUpID0+IE56VXBsb2FkVHJhbnNmb3JtRmlsZVR5cGU7XG5cbiAgLyoqXG4gICAqIOS4iuS8oOaWh+S7tuaUueWPmOaXtueahOeKtuaAgVxuICAgKi9cbiAgY2hhbmdlPzogKGFyZ3M6IE56VXBsb2FkQ2hhbmdlUGFyYW0pID0+IHZvaWQ7XG59XG4iXX0=