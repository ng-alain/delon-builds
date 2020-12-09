/**
 * @fileoverview added by tsickle
 * Generated from: src/widgets/upload/schema.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3ZzdHMvd29yay8xL3MvcGFja2FnZXMvZm9ybS8iLCJzb3VyY2VzIjpbInNyYy93aWRnZXRzL3VwbG9hZC9zY2hlbWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFZQSwwQ0EySkM7Ozs7OztJQXZKQyx5Q0FBaUQ7Ozs7O0lBS2pELG9DQUF5Qjs7Ozs7SUFLekIsb0NBQWM7Ozs7O0lBS2Qsb0NBQWM7Ozs7O0lBS2QseUNBQW1COzs7OztJQUtuQix5Q0FBbUI7Ozs7O0lBS25CLHNDQUF3RTs7Ozs7SUFLeEUsc0NBQTJCOzs7OztJQUszQixxQ0FBZTs7Ozs7SUFLZiw4Q0FBd0I7Ozs7O0lBS3hCLHNDQUF3Qjs7Ozs7SUFLeEIsd0NBQTBCOzs7OztJQUsxQix3Q0FBa0I7Ozs7O0lBS2xCLHdDQUFrQjs7Ozs7SUFLbEIsdUNBQTZEOzs7OztJQUs3RCx3Q0FBK0M7Ozs7O0lBSy9DLDhDQUE0Qzs7Ozs7SUFLNUMsd0NBQW1COzs7OztJQUtuQixvQ0FBYzs7Ozs7SUFLZCxvQ0FBMEQ7Ozs7O0lBSzFELCtDQUEwQjs7Ozs7SUFLMUIseUNBQW9COzs7OztJQUtwQixxREFBZ0M7Ozs7O0lBS2hDLDRDQUErRjs7Ozs7SUFLL0YsNkNBQXdEOzs7OztJQUt4RCxzQ0FBK0Q7Ozs7O0lBSy9ELHVDQUF1Qzs7Ozs7SUFLdkMsMkNBQXlEOzs7OztJQUt6RCx3Q0FBd0M7Ozs7O0lBS3hDLDZDQUFrRTs7Ozs7SUFLbEUsc0NBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgTnpTaG93VXBsb2FkTGlzdCxcbiAgTnpVcGxvYWRDaGFuZ2VQYXJhbSxcbiAgTnpVcGxvYWRGaWxlLFxuICBOelVwbG9hZFRyYW5zZm9ybUZpbGVUeXBlLFxuICBOelVwbG9hZFhIUkFyZ3MsXG4gIFVwbG9hZEZpbHRlcixcbn0gZnJvbSAnbmctem9ycm8tYW50ZC91cGxvYWQnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTRlNjaGVtYUVudW1UeXBlIH0gZnJvbSAnLi4vLi4vc2NoZW1hJztcbmltcG9ydCB7IFNGVUlTY2hlbWFJdGVtIH0gZnJvbSAnLi4vLi4vc2NoZW1hL3VpJztcblxuZXhwb3J0IGludGVyZmFjZSBTRlVwbG9hZFdpZGdldFNjaGVtYSBleHRlbmRzIFNGVUlTY2hlbWFJdGVtIHtcbiAgLyoqXG4gICAqIOW8guatpeaVsOaNrua6kFxuICAgKi9cbiAgYXN5bmNEYXRhPzogKCkgPT4gT2JzZXJ2YWJsZTxTRlNjaGVtYUVudW1UeXBlW10+O1xuXG4gIC8qKlxuICAgKiDkuIrkvKDnsbvlnovvvIzpu5jorqTvvJpgc2VsZWN0YFxuICAgKi9cbiAgdHlwZT86ICdzZWxlY3QnIHwgJ2RyYWcnO1xuXG4gIC8qKlxuICAgKiDmjInpkq7mlofmnKzvvIzpu5jorqTvvJpg54K55Ye75LiK5LygYFxuICAgKi9cbiAgdGV4dD86IHN0cmluZztcblxuICAvKipcbiAgICog5o+Q6YaS5paH5pys77yMZHJhZyDml7bmnInmlYjvvIzpu5jorqTvvJpg5pSv5oyB5Y2V5Liq5oiW5om56YeP77yM5Lil56aB5LiK5Lyg5YWs5Y+45pWw5o2u5oiW5YW25LuW5a6J5YWo5paH5Lu2YFxuICAgKi9cbiAgaGludD86IHN0cmluZztcblxuICAvKipcbiAgICog6YeN5ZG95ZCN6L+U5Zue5Y+C5pWw77yM5pSv5oyBIGBhLmIuY2Ag55qE5bWM5aWX5YaZ5rOV77yM6Iul5LiN5oyH5a6a6KGo56S65pW05Liq6L+U5Zue5L2TXG4gICAqL1xuICByZXNSZU5hbWU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIOmHjeWRveWQjemihOiniOWbvuWDj1VSTOi/lOWbnuWPguaVsO+8jOaUr+aMgSBgYS5iLmNgIOeahOW1jOWll+WGmeazle+8jOiLpeS4jeaMh+WumuihqOekuuS9v+eUqOaWh+S7tuWvueixoeeahCBgdXJsYOOAgWB0aHVtYlVybGAg5YC8XG4gICAqL1xuICB1cmxSZU5hbWU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqICoq5b+F6YCJ5Y+C5pWwKiog5LiK5Lyg55qE5Zyw5Z2AXG4gICAqL1xuICBhY3Rpb24/OiBzdHJpbmcgfCAoKGZpbGU6IE56VXBsb2FkRmlsZSkgPT4gc3RyaW5nIHwgT2JzZXJ2YWJsZTxzdHJpbmc+KTtcblxuICAvKipcbiAgICog5o6l5Y+X5LiK5Lyg55qE5paH5Lu257G75Z6LLCDor6bop4EgW2lucHV0IGFjY2VwdCBBdHRyaWJ1dGVdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUTUwvRWxlbWVudC9pbnB1dCNhdHRyLWFjY2VwdClcbiAgICovXG4gIGFjY2VwdD86IHN0cmluZyB8IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiDpmZDliLbljZXmrKHmnIDlpJrkuIrkvKDmlbDph4/vvIxgbXVsdGlwbGVgIOaJk+W8gOaXtuacieaViO+8m2AwYCDooajnpLrkuI3pmZDvvIzpu5jorqTvvJpgMGBcbiAgICovXG4gIGxpbWl0PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiDpmZDliLbkuIrkvKDmlofku7bmlbDph4/vvIzotoXov4fmlbDph4/pmpDol4/kuIrkvKDmjInpkq5cbiAgICovXG4gIGxpbWl0RmlsZUNvdW50PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiDoh6rlrprkuYnov4fmu6TlmahcbiAgICovXG4gIGZpbHRlcj86IFVwbG9hZEZpbHRlcltdO1xuXG4gIC8qKlxuICAgKiDmlofku7bliJfooahcbiAgICovXG4gIGZpbGVMaXN0PzogTnpVcGxvYWRGaWxlW107XG5cbiAgLyoqXG4gICAqIOmZkOWItuaWh+S7tuWkp+Wwj++8jOWNleS9je+8mktC77ybYDBgIOihqOekuuS4jemZkO+8jOm7mOiupO+8mmAwYFxuICAgKi9cbiAgZmlsZVNpemU/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIOmZkOWItuaWh+S7tuexu+Wei++8jOS+i+Wmgu+8mmBpbWFnZS9wbmcsaW1hZ2UvanBlZyxpbWFnZS9naWYsaW1hZ2UvYm1wYFxuICAgKi9cbiAgZmlsZVR5cGU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIOiuvue9ruS4iuS8oOeahOivt+axguWktOmDqFxuICAgKi9cbiAgaGVhZGVycz86IHt9IHwgKChmaWxlOiBOelVwbG9hZEZpbGUpID0+IHt9IHwgT2JzZXJ2YWJsZTx7fT4pO1xuXG4gIC8qKlxuICAgKiDkuIrkvKDliJfooajnmoTlhoXlu7rmoLflvI/vvIzpu5jorqTvvJpgdGV4dGBcbiAgICovXG4gIGxpc3RUeXBlPzogJ3RleHQnIHwgJ3BpY3R1cmUnIHwgJ3BpY3R1cmUtY2FyZCc7XG5cbiAgLyoqXG4gICAqIOaYr+WQpuWxleekuuWIl+ihqCwg5Y+v6K6+5Li65LiA5Liq5a+56LGh77yM55So5LqO5Y2V54us6K6+5a6aIGBzaG93UHJldmlld0ljb25gIOWSjCBgc2hvd1JlbW92ZUljb25g77yM6buY6K6k77yaYHRydWVgXG4gICAqL1xuICBzaG93VXBsb2FkTGlzdD86IGJvb2xlYW4gfCBOelNob3dVcGxvYWRMaXN0O1xuXG4gIC8qKlxuICAgKiDmmK/lkKbmlK/mjIHlpJrpgInmlofku7bvvIxgSUUxMCtgIOaUr+aMgeOAguW8gOWQr+WQjuaMieS9jyBgY3RybGAg5Y+v6YCJ5oup5aSa5Liq5paH5Lu277yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgbXVsdGlwbGU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDlj5HliLDlkI7lj7DnmoTmlofku7blj4LmlbDlkI3vvIzpu5jorqTvvJpgZmlsZWBcbiAgICovXG4gIG5hbWU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIOS4iuS8oOaJgOmcgOWPguaVsOaIlui/lOWbnuS4iuS8oOWPguaVsOeahOaWueazlVxuICAgKi9cbiAgZGF0YT86IHt9IHwgKChmaWxlOiBOelVwbG9hZEZpbGUpID0+IHt9IHwgT2JzZXJ2YWJsZTx7fT4pO1xuXG4gIC8qKlxuICAgKiDkuIrkvKDor7fmsYLml7bmmK/lkKbmkLrluKYgY29va2ll77yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcblxuICAvKipcbiAgICog5pSv5oyB5LiK5Lyg5paH5Lu25aS577yIW2Nhbml1c2VdKGh0dHBzOi8vY2FuaXVzZS5jb20vI2ZlYXQ9aW5wdXQtZmlsZS1kaXJlY3Rvcnkp77yJ77yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgZGlyZWN0b3J5PzogYm9vbGVhbjtcblxuICAvKipcbiAgICog54K55Ye75omT5byA5paH5Lu25a+56K+d5qGG77yM6buY6K6k77yaYHRydWVgXG4gICAqL1xuICBvcGVuRmlsZURpYWxvZ09uQ2xpY2s/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDkuIrkvKDmlofku7bkuYvliY3nmoTpkqnlrZDvvIzlj4LmlbDkuLrkuIrkvKDnmoTmlofku7bvvIzoi6Xov5Tlm54gYGZhbHNlYCDliJnlgZzmraLkuIrkvKBcbiAgICovXG4gIGJlZm9yZVVwbG9hZD86IChmaWxlOiBOelVwbG9hZEZpbGUsIGZpbGVMaXN0OiBOelVwbG9hZEZpbGVbXSkgPT4gYm9vbGVhbiB8IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgLyoqXG4gICAqIOmAmui/h+imhueblum7mOiupOeahOS4iuS8oOihjOS4uu+8jOWPr+S7peiHquWumuS5ieiHquW3seeahOS4iuS8oOWunueOsFxuICAgKi9cbiAgY3VzdG9tUmVxdWVzdD86IChpdGVtOiBOelVwbG9hZFhIUkFyZ3MpID0+IFN1YnNjcmlwdGlvbjtcblxuICAvKipcbiAgICog54K55Ye756e76Zmk5paH5Lu25pe255qE5Zue6LCD77yM6L+U5Zue5YC85Li6IGBmYWxzZWAg5pe25LiN56e76ZmkXG4gICAqL1xuICByZW1vdmU/OiAoZmlsZTogTnpVcGxvYWRGaWxlKSA9PiBib29sZWFuIHwgT2JzZXJ2YWJsZTxib29sZWFuPjtcblxuICAvKipcbiAgICog54K55Ye75paH5Lu26ZO+5o6l5oiW6aKE6KeI5Zu+5qCH5pe255qE5Zue6LCDXG4gICAqL1xuICBwcmV2aWV3PzogKGZpbGU6IE56VXBsb2FkRmlsZSkgPT4gdm9pZDtcblxuICAvKipcbiAgICog6Ieq5a6a5LmJ5paH5Lu26aKE6KeI6YC76L6RXG4gICAqL1xuICBwcmV2aWV3RmlsZT86IChmaWxlOiBOelVwbG9hZEZpbGUpID0+IE9ic2VydmFibGU8c3RyaW5nPjtcblxuICAvKipcbiAgICog54K55Ye75LiL6L295paH5Lu25pe255qE5Zue6LCD77yM5aaC5p6c5rKh5pyJ5oyH5a6a77yM5YiZ6buY6K6k6Lez6L2s5Yiw5paH5Lu2IHVybCDlr7nlupTnmoTmoIfnrb7pobVcbiAgICovXG4gIGRvd25sb2FkPzogKGZpbGU6IE56VXBsb2FkRmlsZSkgPT4gdm9pZDtcblxuICAvKipcbiAgICog5Zyo5LiK5Lyg5LmL5YmN6L2s5o2i5paH5Lu244CC5pSv5oyB6L+U5Zue5LiA5LiqIE9ic2VydmFibGUg5a+56LGhXG4gICAqL1xuICB0cmFuc2Zvcm1GaWxlPzogKGZpbGU6IE56VXBsb2FkRmlsZSkgPT4gTnpVcGxvYWRUcmFuc2Zvcm1GaWxlVHlwZTtcblxuICAvKipcbiAgICog5LiK5Lyg5paH5Lu25pS55Y+Y5pe255qE54q25oCBXG4gICAqL1xuICBjaGFuZ2U/OiAoYXJnczogTnpVcGxvYWRDaGFuZ2VQYXJhbSkgPT4gdm9pZDtcbn1cbiJdfQ==