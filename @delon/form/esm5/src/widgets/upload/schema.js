/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * 上传文件改变时的状态
     * @type {?|undefined}
     */
    SFUploadWidgetSchema.prototype.change;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy91cGxvYWQvc2NoZW1hLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFLQSwwQ0F1SUM7Ozs7OztJQW5JQyx5Q0FBaUQ7Ozs7O0lBS2pELG9DQUF5Qjs7Ozs7SUFLekIsb0NBQWM7Ozs7O0lBS2Qsb0NBQWM7Ozs7O0lBS2QseUNBQW1COzs7OztJQUtuQix5Q0FBbUI7Ozs7O0lBS25CLHNDQUFnQjs7Ozs7SUFLaEIsc0NBQWdCOzs7OztJQUtoQixxQ0FBZTs7Ozs7SUFLZixzQ0FBd0I7Ozs7O0lBS3hCLHdDQUF3Qjs7Ozs7SUFLeEIsd0NBQWtCOzs7OztJQUtsQix3Q0FBa0I7Ozs7O0lBS2xCLHVDQUEwQzs7Ozs7SUFLMUMsd0NBQStDOzs7OztJQUsvQyw4Q0FBeUI7Ozs7O0lBS3pCLHdDQUFtQjs7Ozs7SUFLbkIsb0NBQWM7Ozs7O0lBS2Qsb0NBQXVDOzs7OztJQUt2QywrQ0FBMEI7Ozs7O0lBSzFCLHlDQUFvQjs7Ozs7SUFLcEIscURBQWdDOzs7OztJQUtoQyw0Q0FBMkY7Ozs7O0lBSzNGLDZDQUFzRDs7Ozs7SUFLdEQsc0NBQTZEOzs7OztJQUs3RCx1Q0FBcUM7Ozs7O0lBS3JDLHNDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgVXBsb2FkRmlsdGVyLCBVcGxvYWRGaWxlLCBVcGxvYWRYSFJBcmdzLCBVcGxvYWRDaGFuZ2VQYXJhbSB9IGZyb20gJ25nLXpvcnJvLWFudGQvdXBsb2FkJztcbmltcG9ydCB7IFNGVUlTY2hlbWFJdGVtIH0gZnJvbSAnLi4vLi4vc2NoZW1hL3VpJztcbmltcG9ydCB7IFNGU2NoZW1hRW51bVR5cGUgfSBmcm9tICcuLi8uLi9zY2hlbWEnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNGVXBsb2FkV2lkZ2V0U2NoZW1hIGV4dGVuZHMgU0ZVSVNjaGVtYUl0ZW0ge1xuICAvKipcbiAgICog5byC5q2l5pWw5o2u5rqQXG4gICAqL1xuICBhc3luY0RhdGE/OiAoKSA9PiBPYnNlcnZhYmxlPFNGU2NoZW1hRW51bVR5cGVbXT47XG5cbiAgLyoqXG4gICAqIOS4iuS8oOexu+Wei++8jOm7mOiupO+8mmBzZWxlY3RgXG4gICAqL1xuICB0eXBlPzogJ3NlbGVjdCcgfCAnZHJhZyc7XG5cbiAgLyoqXG4gICAqIOaMiemSruaWh+acrO+8jOm7mOiupO+8mmDngrnlh7vkuIrkvKBgXG4gICAqL1xuICB0ZXh0Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiDmj5DphpLmlofmnKzvvIxkcmFnIOaXtuacieaViO+8jOm7mOiupO+8mmDmlK/mjIHljZXkuKrmiJbmibnph4/vvIzkuKXnpoHkuIrkvKDlhazlj7jmlbDmja7miJblhbbku5blronlhajmlofku7ZgXG4gICAqL1xuICBoaW50Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiDph43lkb3lkI3ov5Tlm57lj4LmlbDvvIzmlK/mjIEgYGEuYi5jYCDnmoTltYzlpZflhpnms5XvvIzoi6XkuI3mjIflrprooajnpLrmlbTkuKrov5Tlm57kvZNcbiAgICovXG4gIHJlc1JlTmFtZT86IHN0cmluZztcblxuICAvKipcbiAgICog6YeN5ZG95ZCN6aKE6KeI5Zu+5YOPVVJM6L+U5Zue5Y+C5pWw77yM5pSv5oyBIGBhLmIuY2Ag55qE5bWM5aWX5YaZ5rOV77yM6Iul5LiN5oyH5a6a6KGo56S65L2/55So5paH5Lu25a+56LGh55qEIGB1cmxg44CBYHRodW1iVXJsYCDlgLxcbiAgICovXG4gIHVybFJlTmFtZT86IHN0cmluZztcblxuICAvKipcbiAgICogKirlv4XpgInlj4LmlbAqKiDkuIrkvKDnmoTlnLDlnYBcbiAgICovXG4gIGFjdGlvbj86IHN0cmluZztcblxuICAvKipcbiAgICog5o6l5Y+X5LiK5Lyg55qE5paH5Lu257G75Z6LLCDor6bop4EgW2lucHV0IGFjY2VwdCBBdHRyaWJ1dGVdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUTUwvRWxlbWVudC9pbnB1dCNhdHRyLWFjY2VwdClcbiAgICovXG4gIGFjY2VwdD86IHN0cmluZztcblxuICAvKipcbiAgICog6ZmQ5Yi25Y2V5qyh5pyA5aSa5LiK5Lyg5pWw6YeP77yMYG11bHRpcGxlYCDmiZPlvIDml7bmnInmlYjvvJtgMGAg6KGo56S65LiN6ZmQ77yM6buY6K6k77yaYDBgXG4gICAqL1xuICBsaW1pdD86IG51bWJlcjtcblxuICAvKipcbiAgICog6Ieq5a6a5LmJ6L+H5ruk5ZmoXG4gICAqL1xuICBmaWx0ZXI/OiBVcGxvYWRGaWx0ZXJbXTtcblxuICAvKipcbiAgICog5paH5Lu25YiX6KGoXG4gICAqL1xuICBmaWxlTGlzdD86IFVwbG9hZEZpbGVbXTtcblxuICAvKipcbiAgICog6ZmQ5Yi25paH5Lu25aSn5bCP77yM5Y2V5L2N77yaS0LvvJtgMGAg6KGo56S65LiN6ZmQ77yM6buY6K6k77yaYDBgXG4gICAqL1xuICBmaWxlU2l6ZT86IG51bWJlcjtcblxuICAvKipcbiAgICog6ZmQ5Yi25paH5Lu257G75Z6L77yM5L6L5aaC77yaYGltYWdlL3BuZyxpbWFnZS9qcGVnLGltYWdlL2dpZixpbWFnZS9ibXBgXG4gICAqL1xuICBmaWxlVHlwZT86IHN0cmluZztcblxuICAvKipcbiAgICog6K6+572u5LiK5Lyg55qE6K+35rGC5aS06YOoXG4gICAqL1xuICBoZWFkZXJzPzoge30gfCAoKGZpbGU6IFVwbG9hZEZpbGUpID0+IHt9KTtcblxuICAvKipcbiAgICog5LiK5Lyg5YiX6KGo55qE5YaF5bu65qC35byP77yM6buY6K6k77yaYHRleHRgXG4gICAqL1xuICBsaXN0VHlwZT86ICd0ZXh0JyB8ICdwaWN0dXJlJyB8ICdwaWN0dXJlLWNhcmQnO1xuXG4gIC8qKlxuICAgKiDmmK/lkKblsZXnpLrliJfooagsIOWPr+iuvuS4uuS4gOS4quWvueixoe+8jOeUqOS6juWNleeLrOiuvuWumiBgc2hvd1ByZXZpZXdJY29uYCDlkowgYHNob3dSZW1vdmVJY29uYO+8jOm7mOiupO+8mmB0cnVlYFxuICAgKi9cbiAgc2hvd1VwbG9hZExpc3Q/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDmmK/lkKbmlK/mjIHlpJrpgInmlofku7bvvIxgSUUxMCtgIOaUr+aMgeOAguW8gOWQr+WQjuaMieS9jyBgY3RybGAg5Y+v6YCJ5oup5aSa5Liq5paH5Lu277yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgbXVsdGlwbGU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDlj5HliLDlkI7lj7DnmoTmlofku7blj4LmlbDlkI3vvIzpu5jorqTvvJpgZmlsZWBcbiAgICovXG4gIG5hbWU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIOS4iuS8oOaJgOmcgOWPguaVsOaIlui/lOWbnuS4iuS8oOWPguaVsOeahOaWueazlVxuICAgKi9cbiAgZGF0YT86IHt9IHwgKChmaWxlOiBVcGxvYWRGaWxlKSA9PiB7fSk7XG5cbiAgLyoqXG4gICAqIOS4iuS8oOivt+axguaXtuaYr+WQpuaQuuW4piBjb29raWXvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDmlK/mjIHkuIrkvKDmlofku7blpLnvvIhbY2FuaXVzZV0oaHR0cHM6Ly9jYW5pdXNlLmNvbS8jZmVhdD1pbnB1dC1maWxlLWRpcmVjdG9yeSnvvInvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBkaXJlY3Rvcnk/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDngrnlh7vmiZPlvIDmlofku7blr7nor53moYbvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICovXG4gIG9wZW5GaWxlRGlhbG9nT25DbGljaz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOS4iuS8oOaWh+S7tuS5i+WJjeeahOmSqeWtkO+8jOWPguaVsOS4uuS4iuS8oOeahOaWh+S7tu+8jOiLpei/lOWbniBgZmFsc2VgIOWImeWBnOatouS4iuS8oFxuICAgKi9cbiAgYmVmb3JlVXBsb2FkPzogKGZpbGU6IFVwbG9hZEZpbGUsIGZpbGVMaXN0OiBVcGxvYWRGaWxlW10pID0+IGJvb2xlYW4gfCBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG4gIC8qKlxuICAgKiDpgJrov4fopobnm5bpu5jorqTnmoTkuIrkvKDooYzkuLrvvIzlj6/ku6Xoh6rlrprkuYnoh6rlt7HnmoTkuIrkvKDlrp7njrBcbiAgICovXG4gIGN1c3RvbVJlcXVlc3Q/OiAoaXRlbTogVXBsb2FkWEhSQXJncykgPT4gU3Vic2NyaXB0aW9uO1xuXG4gIC8qKlxuICAgKiDngrnlh7vnp7vpmaTmlofku7bml7bnmoTlm57osIPvvIzov5Tlm57lgLzkuLogYGZhbHNlYCDml7bkuI3np7vpmaRcbiAgICovXG4gIHJlbW92ZT86IChmaWxlOiBVcGxvYWRGaWxlKSA9PiBib29sZWFuIHwgT2JzZXJ2YWJsZTxib29sZWFuPjtcblxuICAvKipcbiAgICog54K55Ye75paH5Lu26ZO+5o6l5oiW6aKE6KeI5Zu+5qCH5pe255qE5Zue6LCDXG4gICAqL1xuICBwcmV2aWV3PzogKGZpbGU6IFVwbG9hZEZpbGUpID0+IHZvaWQ7XG5cbiAgLyoqXG4gICAqIOS4iuS8oOaWh+S7tuaUueWPmOaXtueahOeKtuaAgVxuICAgKi9cbiAgY2hhbmdlPzogKGFyZ3M6IFVwbG9hZENoYW5nZVBhcmFtKSA9PiB2b2lkO1xufVxuIl19