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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy91cGxvYWQvc2NoZW1hLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBWUEsMENBMkpDOzs7Ozs7SUF2SkMseUNBQWlEOzs7OztJQUtqRCxvQ0FBeUI7Ozs7O0lBS3pCLG9DQUFjOzs7OztJQUtkLG9DQUFjOzs7OztJQUtkLHlDQUFtQjs7Ozs7SUFLbkIseUNBQW1COzs7OztJQUtuQixzQ0FBc0U7Ozs7O0lBS3RFLHNDQUEyQjs7Ozs7SUFLM0IscUNBQWU7Ozs7O0lBS2YsOENBQXdCOzs7OztJQUt4QixzQ0FBd0I7Ozs7O0lBS3hCLHdDQUF3Qjs7Ozs7SUFLeEIsd0NBQWtCOzs7OztJQUtsQix3Q0FBa0I7Ozs7O0lBS2xCLHVDQUEyRDs7Ozs7SUFLM0Qsd0NBQStDOzs7OztJQUsvQyw4Q0FBbUQ7Ozs7O0lBS25ELHdDQUFtQjs7Ozs7SUFLbkIsb0NBQWM7Ozs7O0lBS2Qsb0NBQXdEOzs7OztJQUt4RCwrQ0FBMEI7Ozs7O0lBSzFCLHlDQUFvQjs7Ozs7SUFLcEIscURBQWdDOzs7OztJQUtoQyw0Q0FBMkY7Ozs7O0lBSzNGLDZDQUFzRDs7Ozs7SUFLdEQsc0NBQTZEOzs7OztJQUs3RCx1Q0FBcUM7Ozs7O0lBS3JDLDJDQUF1RDs7Ozs7SUFLdkQsd0NBQXNDOzs7OztJQUt0Qyw2Q0FBOEQ7Ozs7O0lBSzlELHNDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIFNob3dVcGxvYWRMaXN0SW50ZXJmYWNlLFxuICBVcGxvYWRDaGFuZ2VQYXJhbSxcbiAgVXBsb2FkRmlsZSxcbiAgVXBsb2FkRmlsdGVyLFxuICBVcGxvYWRUcmFuc2Zvcm1GaWxlVHlwZSxcbiAgVXBsb2FkWEhSQXJncyxcbn0gZnJvbSAnbmctem9ycm8tYW50ZC91cGxvYWQnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTRlNjaGVtYUVudW1UeXBlIH0gZnJvbSAnLi4vLi4vc2NoZW1hJztcbmltcG9ydCB7IFNGVUlTY2hlbWFJdGVtIH0gZnJvbSAnLi4vLi4vc2NoZW1hL3VpJztcblxuZXhwb3J0IGludGVyZmFjZSBTRlVwbG9hZFdpZGdldFNjaGVtYSBleHRlbmRzIFNGVUlTY2hlbWFJdGVtIHtcbiAgLyoqXG4gICAqIOW8guatpeaVsOaNrua6kFxuICAgKi9cbiAgYXN5bmNEYXRhPzogKCkgPT4gT2JzZXJ2YWJsZTxTRlNjaGVtYUVudW1UeXBlW10+O1xuXG4gIC8qKlxuICAgKiDkuIrkvKDnsbvlnovvvIzpu5jorqTvvJpgc2VsZWN0YFxuICAgKi9cbiAgdHlwZT86ICdzZWxlY3QnIHwgJ2RyYWcnO1xuXG4gIC8qKlxuICAgKiDmjInpkq7mlofmnKzvvIzpu5jorqTvvJpg54K55Ye75LiK5LygYFxuICAgKi9cbiAgdGV4dD86IHN0cmluZztcblxuICAvKipcbiAgICog5o+Q6YaS5paH5pys77yMZHJhZyDml7bmnInmlYjvvIzpu5jorqTvvJpg5pSv5oyB5Y2V5Liq5oiW5om56YeP77yM5Lil56aB5LiK5Lyg5YWs5Y+45pWw5o2u5oiW5YW25LuW5a6J5YWo5paH5Lu2YFxuICAgKi9cbiAgaGludD86IHN0cmluZztcblxuICAvKipcbiAgICog6YeN5ZG95ZCN6L+U5Zue5Y+C5pWw77yM5pSv5oyBIGBhLmIuY2Ag55qE5bWM5aWX5YaZ5rOV77yM6Iul5LiN5oyH5a6a6KGo56S65pW05Liq6L+U5Zue5L2TXG4gICAqL1xuICByZXNSZU5hbWU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIOmHjeWRveWQjemihOiniOWbvuWDj1VSTOi/lOWbnuWPguaVsO+8jOaUr+aMgSBgYS5iLmNgIOeahOW1jOWll+WGmeazle+8jOiLpeS4jeaMh+WumuihqOekuuS9v+eUqOaWh+S7tuWvueixoeeahCBgdXJsYOOAgWB0aHVtYlVybGAg5YC8XG4gICAqL1xuICB1cmxSZU5hbWU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqICoq5b+F6YCJ5Y+C5pWwKiog5LiK5Lyg55qE5Zyw5Z2AXG4gICAqL1xuICBhY3Rpb24/OiBzdHJpbmcgfCAoKGZpbGU6IFVwbG9hZEZpbGUpID0+IHN0cmluZyB8IE9ic2VydmFibGU8c3RyaW5nPik7XG5cbiAgLyoqXG4gICAqIOaOpeWPl+S4iuS8oOeahOaWh+S7tuexu+Weiywg6K+m6KeBIFtpbnB1dCBhY2NlcHQgQXR0cmlidXRlXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVE1ML0VsZW1lbnQvaW5wdXQjYXR0ci1hY2NlcHQpXG4gICAqL1xuICBhY2NlcHQ/OiBzdHJpbmcgfCBzdHJpbmdbXTtcblxuICAvKipcbiAgICog6ZmQ5Yi25Y2V5qyh5pyA5aSa5LiK5Lyg5pWw6YeP77yMYG11bHRpcGxlYCDmiZPlvIDml7bmnInmlYjvvJtgMGAg6KGo56S65LiN6ZmQ77yM6buY6K6k77yaYDBgXG4gICAqL1xuICBsaW1pdD86IG51bWJlcjtcblxuICAvKipcbiAgICog6ZmQ5Yi25LiK5Lyg5paH5Lu25pWw6YeP77yM6LaF6L+H5pWw6YeP6ZqQ6JeP5LiK5Lyg5oyJ6ZKuXG4gICAqL1xuICBsaW1pdEZpbGVDb3VudD86IG51bWJlcjtcblxuICAvKipcbiAgICog6Ieq5a6a5LmJ6L+H5ruk5ZmoXG4gICAqL1xuICBmaWx0ZXI/OiBVcGxvYWRGaWx0ZXJbXTtcblxuICAvKipcbiAgICog5paH5Lu25YiX6KGoXG4gICAqL1xuICBmaWxlTGlzdD86IFVwbG9hZEZpbGVbXTtcblxuICAvKipcbiAgICog6ZmQ5Yi25paH5Lu25aSn5bCP77yM5Y2V5L2N77yaS0LvvJtgMGAg6KGo56S65LiN6ZmQ77yM6buY6K6k77yaYDBgXG4gICAqL1xuICBmaWxlU2l6ZT86IG51bWJlcjtcblxuICAvKipcbiAgICog6ZmQ5Yi25paH5Lu257G75Z6L77yM5L6L5aaC77yaYGltYWdlL3BuZyxpbWFnZS9qcGVnLGltYWdlL2dpZixpbWFnZS9ibXBgXG4gICAqL1xuICBmaWxlVHlwZT86IHN0cmluZztcblxuICAvKipcbiAgICog6K6+572u5LiK5Lyg55qE6K+35rGC5aS06YOoXG4gICAqL1xuICBoZWFkZXJzPzoge30gfCAoKGZpbGU6IFVwbG9hZEZpbGUpID0+IHt9IHwgT2JzZXJ2YWJsZTx7fT4pO1xuXG4gIC8qKlxuICAgKiDkuIrkvKDliJfooajnmoTlhoXlu7rmoLflvI/vvIzpu5jorqTvvJpgdGV4dGBcbiAgICovXG4gIGxpc3RUeXBlPzogJ3RleHQnIHwgJ3BpY3R1cmUnIHwgJ3BpY3R1cmUtY2FyZCc7XG5cbiAgLyoqXG4gICAqIOaYr+WQpuWxleekuuWIl+ihqCwg5Y+v6K6+5Li65LiA5Liq5a+56LGh77yM55So5LqO5Y2V54us6K6+5a6aIGBzaG93UHJldmlld0ljb25gIOWSjCBgc2hvd1JlbW92ZUljb25g77yM6buY6K6k77yaYHRydWVgXG4gICAqL1xuICBzaG93VXBsb2FkTGlzdD86IGJvb2xlYW4gfCBTaG93VXBsb2FkTGlzdEludGVyZmFjZTtcblxuICAvKipcbiAgICog5piv5ZCm5pSv5oyB5aSa6YCJ5paH5Lu277yMYElFMTArYCDmlK/mjIHjgILlvIDlkK/lkI7mjInkvY8gYGN0cmxgIOWPr+mAieaLqeWkmuS4quaWh+S7tu+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIG11bHRpcGxlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICog5Y+R5Yiw5ZCO5Y+w55qE5paH5Lu25Y+C5pWw5ZCN77yM6buY6K6k77yaYGZpbGVgXG4gICAqL1xuICBuYW1lPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiDkuIrkvKDmiYDpnIDlj4LmlbDmiJbov5Tlm57kuIrkvKDlj4LmlbDnmoTmlrnms5VcbiAgICovXG4gIGRhdGE/OiB7fSB8ICgoZmlsZTogVXBsb2FkRmlsZSkgPT4ge30gfCBPYnNlcnZhYmxlPHt9Pik7XG5cbiAgLyoqXG4gICAqIOS4iuS8oOivt+axguaXtuaYr+WQpuaQuuW4piBjb29raWXvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDmlK/mjIHkuIrkvKDmlofku7blpLnvvIhbY2FuaXVzZV0oaHR0cHM6Ly9jYW5pdXNlLmNvbS8jZmVhdD1pbnB1dC1maWxlLWRpcmVjdG9yeSnvvInvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBkaXJlY3Rvcnk/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDngrnlh7vmiZPlvIDmlofku7blr7nor53moYbvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICovXG4gIG9wZW5GaWxlRGlhbG9nT25DbGljaz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOS4iuS8oOaWh+S7tuS5i+WJjeeahOmSqeWtkO+8jOWPguaVsOS4uuS4iuS8oOeahOaWh+S7tu+8jOiLpei/lOWbniBgZmFsc2VgIOWImeWBnOatouS4iuS8oFxuICAgKi9cbiAgYmVmb3JlVXBsb2FkPzogKGZpbGU6IFVwbG9hZEZpbGUsIGZpbGVMaXN0OiBVcGxvYWRGaWxlW10pID0+IGJvb2xlYW4gfCBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG4gIC8qKlxuICAgKiDpgJrov4fopobnm5bpu5jorqTnmoTkuIrkvKDooYzkuLrvvIzlj6/ku6Xoh6rlrprkuYnoh6rlt7HnmoTkuIrkvKDlrp7njrBcbiAgICovXG4gIGN1c3RvbVJlcXVlc3Q/OiAoaXRlbTogVXBsb2FkWEhSQXJncykgPT4gU3Vic2NyaXB0aW9uO1xuXG4gIC8qKlxuICAgKiDngrnlh7vnp7vpmaTmlofku7bml7bnmoTlm57osIPvvIzov5Tlm57lgLzkuLogYGZhbHNlYCDml7bkuI3np7vpmaRcbiAgICovXG4gIHJlbW92ZT86IChmaWxlOiBVcGxvYWRGaWxlKSA9PiBib29sZWFuIHwgT2JzZXJ2YWJsZTxib29sZWFuPjtcblxuICAvKipcbiAgICog54K55Ye75paH5Lu26ZO+5o6l5oiW6aKE6KeI5Zu+5qCH5pe255qE5Zue6LCDXG4gICAqL1xuICBwcmV2aWV3PzogKGZpbGU6IFVwbG9hZEZpbGUpID0+IHZvaWQ7XG5cbiAgLyoqXG4gICAqIOiHquWumuS5ieaWh+S7tumihOiniOmAu+i+kVxuICAgKi9cbiAgcHJldmlld0ZpbGU/OiAoZmlsZTogVXBsb2FkRmlsZSkgPT4gT2JzZXJ2YWJsZTxzdHJpbmc+O1xuXG4gIC8qKlxuICAgKiDngrnlh7vkuIvovb3mlofku7bml7bnmoTlm57osIPvvIzlpoLmnpzmsqHmnInmjIflrprvvIzliJnpu5jorqTot7PovazliLDmlofku7YgdXJsIOWvueW6lOeahOagh+etvumhtVxuICAgKi9cbiAgZG93bmxvYWQ/OiAoZmlsZTogVXBsb2FkRmlsZSkgPT4gdm9pZDtcblxuICAvKipcbiAgICog5Zyo5LiK5Lyg5LmL5YmN6L2s5o2i5paH5Lu244CC5pSv5oyB6L+U5Zue5LiA5LiqIE9ic2VydmFibGUg5a+56LGhXG4gICAqL1xuICB0cmFuc2Zvcm1GaWxlPzogKGZpbGU6IFVwbG9hZEZpbGUpID0+IFVwbG9hZFRyYW5zZm9ybUZpbGVUeXBlO1xuXG4gIC8qKlxuICAgKiDkuIrkvKDmlofku7bmlLnlj5jml7bnmoTnirbmgIFcbiAgICovXG4gIGNoYW5nZT86IChhcmdzOiBVcGxvYWRDaGFuZ2VQYXJhbSkgPT4gdm9pZDtcbn1cbiJdfQ==