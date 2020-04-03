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
    /**
     * 限制上传文件数量，超过数量隐藏上传按钮
     * @type {?|undefined}
     */
    SFUploadWidgetSchema.prototype.limitFileCount;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy91cGxvYWQvc2NoZW1hLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBS0EsMENBNElDOzs7Ozs7SUF4SUMseUNBQWlEOzs7OztJQUtqRCxvQ0FBeUI7Ozs7O0lBS3pCLG9DQUFjOzs7OztJQUtkLG9DQUFjOzs7OztJQUtkLHlDQUFtQjs7Ozs7SUFLbkIseUNBQW1COzs7OztJQUtuQixzQ0FBZ0I7Ozs7O0lBS2hCLHNDQUFnQjs7Ozs7SUFLaEIscUNBQWU7Ozs7O0lBS2Ysc0NBQXdCOzs7OztJQUt4Qix3Q0FBd0I7Ozs7O0lBS3hCLHdDQUFrQjs7Ozs7SUFLbEIsd0NBQWtCOzs7OztJQUtsQix1Q0FBMEM7Ozs7O0lBSzFDLHdDQUErQzs7Ozs7SUFLL0MsOENBQW1EOzs7OztJQUtuRCx3Q0FBbUI7Ozs7O0lBS25CLG9DQUFjOzs7OztJQUtkLG9DQUF1Qzs7Ozs7SUFLdkMsK0NBQTBCOzs7OztJQUsxQix5Q0FBb0I7Ozs7O0lBS3BCLHFEQUFnQzs7Ozs7SUFLaEMsNENBQTJGOzs7OztJQUszRiw2Q0FBc0Q7Ozs7O0lBS3RELHNDQUE2RDs7Ozs7SUFLN0QsdUNBQXFDOzs7OztJQUtyQyxzQ0FBMkM7Ozs7O0lBSzNDLDhDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgVXBsb2FkRmlsdGVyLCBVcGxvYWRGaWxlLCBVcGxvYWRYSFJBcmdzLCBVcGxvYWRDaGFuZ2VQYXJhbSwgU2hvd1VwbG9hZExpc3RJbnRlcmZhY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL3VwbG9hZCc7XG5pbXBvcnQgeyBTRlVJU2NoZW1hSXRlbSB9IGZyb20gJy4uLy4uL3NjaGVtYS91aSc7XG5pbXBvcnQgeyBTRlNjaGVtYUVudW1UeXBlIH0gZnJvbSAnLi4vLi4vc2NoZW1hJztcblxuZXhwb3J0IGludGVyZmFjZSBTRlVwbG9hZFdpZGdldFNjaGVtYSBleHRlbmRzIFNGVUlTY2hlbWFJdGVtIHtcbiAgLyoqXG4gICAqIOW8guatpeaVsOaNrua6kFxuICAgKi9cbiAgYXN5bmNEYXRhPzogKCkgPT4gT2JzZXJ2YWJsZTxTRlNjaGVtYUVudW1UeXBlW10+O1xuXG4gIC8qKlxuICAgKiDkuIrkvKDnsbvlnovvvIzpu5jorqTvvJpgc2VsZWN0YFxuICAgKi9cbiAgdHlwZT86ICdzZWxlY3QnIHwgJ2RyYWcnO1xuXG4gIC8qKlxuICAgKiDmjInpkq7mlofmnKzvvIzpu5jorqTvvJpg54K55Ye75LiK5LygYFxuICAgKi9cbiAgdGV4dD86IHN0cmluZztcblxuICAvKipcbiAgICog5o+Q6YaS5paH5pys77yMZHJhZyDml7bmnInmlYjvvIzpu5jorqTvvJpg5pSv5oyB5Y2V5Liq5oiW5om56YeP77yM5Lil56aB5LiK5Lyg5YWs5Y+45pWw5o2u5oiW5YW25LuW5a6J5YWo5paH5Lu2YFxuICAgKi9cbiAgaGludD86IHN0cmluZztcblxuICAvKipcbiAgICog6YeN5ZG95ZCN6L+U5Zue5Y+C5pWw77yM5pSv5oyBIGBhLmIuY2Ag55qE5bWM5aWX5YaZ5rOV77yM6Iul5LiN5oyH5a6a6KGo56S65pW05Liq6L+U5Zue5L2TXG4gICAqL1xuICByZXNSZU5hbWU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIOmHjeWRveWQjemihOiniOWbvuWDj1VSTOi/lOWbnuWPguaVsO+8jOaUr+aMgSBgYS5iLmNgIOeahOW1jOWll+WGmeazle+8jOiLpeS4jeaMh+WumuihqOekuuS9v+eUqOaWh+S7tuWvueixoeeahCBgdXJsYOOAgWB0aHVtYlVybGAg5YC8XG4gICAqL1xuICB1cmxSZU5hbWU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqICoq5b+F6YCJ5Y+C5pWwKiog5LiK5Lyg55qE5Zyw5Z2AXG4gICAqL1xuICBhY3Rpb24/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIOaOpeWPl+S4iuS8oOeahOaWh+S7tuexu+Weiywg6K+m6KeBIFtpbnB1dCBhY2NlcHQgQXR0cmlidXRlXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVE1ML0VsZW1lbnQvaW5wdXQjYXR0ci1hY2NlcHQpXG4gICAqL1xuICBhY2NlcHQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIOmZkOWItuWNleasoeacgOWkmuS4iuS8oOaVsOmHj++8jGBtdWx0aXBsZWAg5omT5byA5pe25pyJ5pWI77ybYDBgIOihqOekuuS4jemZkO+8jOm7mOiupO+8mmAwYFxuICAgKi9cbiAgbGltaXQ/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIOiHquWumuS5iei/h+a7pOWZqFxuICAgKi9cbiAgZmlsdGVyPzogVXBsb2FkRmlsdGVyW107XG5cbiAgLyoqXG4gICAqIOaWh+S7tuWIl+ihqFxuICAgKi9cbiAgZmlsZUxpc3Q/OiBVcGxvYWRGaWxlW107XG5cbiAgLyoqXG4gICAqIOmZkOWItuaWh+S7tuWkp+Wwj++8jOWNleS9je+8mktC77ybYDBgIOihqOekuuS4jemZkO+8jOm7mOiupO+8mmAwYFxuICAgKi9cbiAgZmlsZVNpemU/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIOmZkOWItuaWh+S7tuexu+Wei++8jOS+i+Wmgu+8mmBpbWFnZS9wbmcsaW1hZ2UvanBlZyxpbWFnZS9naWYsaW1hZ2UvYm1wYFxuICAgKi9cbiAgZmlsZVR5cGU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIOiuvue9ruS4iuS8oOeahOivt+axguWktOmDqFxuICAgKi9cbiAgaGVhZGVycz86IHt9IHwgKChmaWxlOiBVcGxvYWRGaWxlKSA9PiB7fSk7XG5cbiAgLyoqXG4gICAqIOS4iuS8oOWIl+ihqOeahOWGheW7uuagt+W8j++8jOm7mOiupO+8mmB0ZXh0YFxuICAgKi9cbiAgbGlzdFR5cGU/OiAndGV4dCcgfCAncGljdHVyZScgfCAncGljdHVyZS1jYXJkJztcblxuICAvKipcbiAgICog5piv5ZCm5bGV56S65YiX6KGoLCDlj6/orr7kuLrkuIDkuKrlr7nosaHvvIznlKjkuo7ljZXni6zorr7lrpogYHNob3dQcmV2aWV3SWNvbmAg5ZKMIGBzaG93UmVtb3ZlSWNvbmDvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICovXG4gIHNob3dVcGxvYWRMaXN0PzogYm9vbGVhbiB8IFNob3dVcGxvYWRMaXN0SW50ZXJmYWNlO1xuXG4gIC8qKlxuICAgKiDmmK/lkKbmlK/mjIHlpJrpgInmlofku7bvvIxgSUUxMCtgIOaUr+aMgeOAguW8gOWQr+WQjuaMieS9jyBgY3RybGAg5Y+v6YCJ5oup5aSa5Liq5paH5Lu277yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgbXVsdGlwbGU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDlj5HliLDlkI7lj7DnmoTmlofku7blj4LmlbDlkI3vvIzpu5jorqTvvJpgZmlsZWBcbiAgICovXG4gIG5hbWU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIOS4iuS8oOaJgOmcgOWPguaVsOaIlui/lOWbnuS4iuS8oOWPguaVsOeahOaWueazlVxuICAgKi9cbiAgZGF0YT86IHt9IHwgKChmaWxlOiBVcGxvYWRGaWxlKSA9PiB7fSk7XG5cbiAgLyoqXG4gICAqIOS4iuS8oOivt+axguaXtuaYr+WQpuaQuuW4piBjb29raWXvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDmlK/mjIHkuIrkvKDmlofku7blpLnvvIhbY2FuaXVzZV0oaHR0cHM6Ly9jYW5pdXNlLmNvbS8jZmVhdD1pbnB1dC1maWxlLWRpcmVjdG9yeSnvvInvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBkaXJlY3Rvcnk/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDngrnlh7vmiZPlvIDmlofku7blr7nor53moYbvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICovXG4gIG9wZW5GaWxlRGlhbG9nT25DbGljaz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOS4iuS8oOaWh+S7tuS5i+WJjeeahOmSqeWtkO+8jOWPguaVsOS4uuS4iuS8oOeahOaWh+S7tu+8jOiLpei/lOWbniBgZmFsc2VgIOWImeWBnOatouS4iuS8oFxuICAgKi9cbiAgYmVmb3JlVXBsb2FkPzogKGZpbGU6IFVwbG9hZEZpbGUsIGZpbGVMaXN0OiBVcGxvYWRGaWxlW10pID0+IGJvb2xlYW4gfCBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG4gIC8qKlxuICAgKiDpgJrov4fopobnm5bpu5jorqTnmoTkuIrkvKDooYzkuLrvvIzlj6/ku6Xoh6rlrprkuYnoh6rlt7HnmoTkuIrkvKDlrp7njrBcbiAgICovXG4gIGN1c3RvbVJlcXVlc3Q/OiAoaXRlbTogVXBsb2FkWEhSQXJncykgPT4gU3Vic2NyaXB0aW9uO1xuXG4gIC8qKlxuICAgKiDngrnlh7vnp7vpmaTmlofku7bml7bnmoTlm57osIPvvIzov5Tlm57lgLzkuLogYGZhbHNlYCDml7bkuI3np7vpmaRcbiAgICovXG4gIHJlbW92ZT86IChmaWxlOiBVcGxvYWRGaWxlKSA9PiBib29sZWFuIHwgT2JzZXJ2YWJsZTxib29sZWFuPjtcblxuICAvKipcbiAgICog54K55Ye75paH5Lu26ZO+5o6l5oiW6aKE6KeI5Zu+5qCH5pe255qE5Zue6LCDXG4gICAqL1xuICBwcmV2aWV3PzogKGZpbGU6IFVwbG9hZEZpbGUpID0+IHZvaWQ7XG5cbiAgLyoqXG4gICAqIOS4iuS8oOaWh+S7tuaUueWPmOaXtueahOeKtuaAgVxuICAgKi9cbiAgY2hhbmdlPzogKGFyZ3M6IFVwbG9hZENoYW5nZVBhcmFtKSA9PiB2b2lkO1xuXG4gIC8qKlxuICAgKiDpmZDliLbkuIrkvKDmlofku7bmlbDph4/vvIzotoXov4fmlbDph4/pmpDol4/kuIrkvKDmjInpkq5cbiAgICovXG4gIGxpbWl0RmlsZUNvdW50PzogbnVtYmVyO1xufVxuIl19