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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy91cGxvYWQvc2NoZW1hLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBS0EsMENBdUlDOzs7Ozs7SUFuSUMseUNBQWlEOzs7OztJQUtqRCxvQ0FBeUI7Ozs7O0lBS3pCLG9DQUFjOzs7OztJQUtkLG9DQUFjOzs7OztJQUtkLHlDQUFtQjs7Ozs7SUFLbkIseUNBQW1COzs7OztJQUtuQixzQ0FBZ0I7Ozs7O0lBS2hCLHNDQUFnQjs7Ozs7SUFLaEIscUNBQWU7Ozs7O0lBS2Ysc0NBQXdCOzs7OztJQUt4Qix3Q0FBd0I7Ozs7O0lBS3hCLHdDQUFrQjs7Ozs7SUFLbEIsd0NBQWtCOzs7OztJQUtsQix1Q0FBMEM7Ozs7O0lBSzFDLHdDQUErQzs7Ozs7SUFLL0MsOENBQW1EOzs7OztJQUtuRCx3Q0FBbUI7Ozs7O0lBS25CLG9DQUFjOzs7OztJQUtkLG9DQUF1Qzs7Ozs7SUFLdkMsK0NBQTBCOzs7OztJQUsxQix5Q0FBb0I7Ozs7O0lBS3BCLHFEQUFnQzs7Ozs7SUFLaEMsNENBQTJGOzs7OztJQUszRiw2Q0FBc0Q7Ozs7O0lBS3RELHNDQUE2RDs7Ozs7SUFLN0QsdUNBQXFDOzs7OztJQUtyQyxzQ0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFVwbG9hZEZpbHRlciwgVXBsb2FkRmlsZSwgVXBsb2FkWEhSQXJncywgVXBsb2FkQ2hhbmdlUGFyYW0sIFNob3dVcGxvYWRMaXN0SW50ZXJmYWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC91cGxvYWQnO1xuaW1wb3J0IHsgU0ZVSVNjaGVtYUl0ZW0gfSBmcm9tICcuLi8uLi9zY2hlbWEvdWknO1xuaW1wb3J0IHsgU0ZTY2hlbWFFbnVtVHlwZSB9IGZyb20gJy4uLy4uL3NjaGVtYSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU0ZVcGxvYWRXaWRnZXRTY2hlbWEgZXh0ZW5kcyBTRlVJU2NoZW1hSXRlbSB7XG4gIC8qKlxuICAgKiDlvILmraXmlbDmja7mupBcbiAgICovXG4gIGFzeW5jRGF0YT86ICgpID0+IE9ic2VydmFibGU8U0ZTY2hlbWFFbnVtVHlwZVtdPjtcblxuICAvKipcbiAgICog5LiK5Lyg57G75Z6L77yM6buY6K6k77yaYHNlbGVjdGBcbiAgICovXG4gIHR5cGU/OiAnc2VsZWN0JyB8ICdkcmFnJztcblxuICAvKipcbiAgICog5oyJ6ZKu5paH5pys77yM6buY6K6k77yaYOeCueWHu+S4iuS8oGBcbiAgICovXG4gIHRleHQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIOaPkOmGkuaWh+acrO+8jGRyYWcg5pe25pyJ5pWI77yM6buY6K6k77yaYOaUr+aMgeWNleS4quaIluaJuemHj++8jOS4peemgeS4iuS8oOWFrOWPuOaVsOaNruaIluWFtuS7luWuieWFqOaWh+S7tmBcbiAgICovXG4gIGhpbnQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIOmHjeWRveWQjei/lOWbnuWPguaVsO+8jOaUr+aMgSBgYS5iLmNgIOeahOW1jOWll+WGmeazle+8jOiLpeS4jeaMh+WumuihqOekuuaVtOS4qui/lOWbnuS9k1xuICAgKi9cbiAgcmVzUmVOYW1lPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiDph43lkb3lkI3pooTop4jlm77lg49VUkzov5Tlm57lj4LmlbDvvIzmlK/mjIEgYGEuYi5jYCDnmoTltYzlpZflhpnms5XvvIzoi6XkuI3mjIflrprooajnpLrkvb/nlKjmlofku7blr7nosaHnmoQgYHVybGDjgIFgdGh1bWJVcmxgIOWAvFxuICAgKi9cbiAgdXJsUmVOYW1lPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiAqKuW/hemAieWPguaVsCoqIOS4iuS8oOeahOWcsOWdgFxuICAgKi9cbiAgYWN0aW9uPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiDmjqXlj5fkuIrkvKDnmoTmlofku7bnsbvlnossIOivpuingSBbaW5wdXQgYWNjZXB0IEF0dHJpYnV0ZV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRNTC9FbGVtZW50L2lucHV0I2F0dHItYWNjZXB0KVxuICAgKi9cbiAgYWNjZXB0Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiDpmZDliLbljZXmrKHmnIDlpJrkuIrkvKDmlbDph4/vvIxgbXVsdGlwbGVgIOaJk+W8gOaXtuacieaViO+8m2AwYCDooajnpLrkuI3pmZDvvIzpu5jorqTvvJpgMGBcbiAgICovXG4gIGxpbWl0PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiDoh6rlrprkuYnov4fmu6TlmahcbiAgICovXG4gIGZpbHRlcj86IFVwbG9hZEZpbHRlcltdO1xuXG4gIC8qKlxuICAgKiDmlofku7bliJfooahcbiAgICovXG4gIGZpbGVMaXN0PzogVXBsb2FkRmlsZVtdO1xuXG4gIC8qKlxuICAgKiDpmZDliLbmlofku7blpKflsI/vvIzljZXkvY3vvJpLQu+8m2AwYCDooajnpLrkuI3pmZDvvIzpu5jorqTvvJpgMGBcbiAgICovXG4gIGZpbGVTaXplPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiDpmZDliLbmlofku7bnsbvlnovvvIzkvovlpoLvvJpgaW1hZ2UvcG5nLGltYWdlL2pwZWcsaW1hZ2UvZ2lmLGltYWdlL2JtcGBcbiAgICovXG4gIGZpbGVUeXBlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiDorr7nva7kuIrkvKDnmoTor7fmsYLlpLTpg6hcbiAgICovXG4gIGhlYWRlcnM/OiB7fSB8ICgoZmlsZTogVXBsb2FkRmlsZSkgPT4ge30pO1xuXG4gIC8qKlxuICAgKiDkuIrkvKDliJfooajnmoTlhoXlu7rmoLflvI/vvIzpu5jorqTvvJpgdGV4dGBcbiAgICovXG4gIGxpc3RUeXBlPzogJ3RleHQnIHwgJ3BpY3R1cmUnIHwgJ3BpY3R1cmUtY2FyZCc7XG5cbiAgLyoqXG4gICAqIOaYr+WQpuWxleekuuWIl+ihqCwg5Y+v6K6+5Li65LiA5Liq5a+56LGh77yM55So5LqO5Y2V54us6K6+5a6aIGBzaG93UHJldmlld0ljb25gIOWSjCBgc2hvd1JlbW92ZUljb25g77yM6buY6K6k77yaYHRydWVgXG4gICAqL1xuICBzaG93VXBsb2FkTGlzdD86IGJvb2xlYW4gfCBTaG93VXBsb2FkTGlzdEludGVyZmFjZTtcblxuICAvKipcbiAgICog5piv5ZCm5pSv5oyB5aSa6YCJ5paH5Lu277yMYElFMTArYCDmlK/mjIHjgILlvIDlkK/lkI7mjInkvY8gYGN0cmxgIOWPr+mAieaLqeWkmuS4quaWh+S7tu+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIG11bHRpcGxlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICog5Y+R5Yiw5ZCO5Y+w55qE5paH5Lu25Y+C5pWw5ZCN77yM6buY6K6k77yaYGZpbGVgXG4gICAqL1xuICBuYW1lPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiDkuIrkvKDmiYDpnIDlj4LmlbDmiJbov5Tlm57kuIrkvKDlj4LmlbDnmoTmlrnms5VcbiAgICovXG4gIGRhdGE/OiB7fSB8ICgoZmlsZTogVXBsb2FkRmlsZSkgPT4ge30pO1xuXG4gIC8qKlxuICAgKiDkuIrkvKDor7fmsYLml7bmmK/lkKbmkLrluKYgY29va2ll77yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcblxuICAvKipcbiAgICog5pSv5oyB5LiK5Lyg5paH5Lu25aS577yIW2Nhbml1c2VdKGh0dHBzOi8vY2FuaXVzZS5jb20vI2ZlYXQ9aW5wdXQtZmlsZS1kaXJlY3Rvcnkp77yJ77yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgZGlyZWN0b3J5PzogYm9vbGVhbjtcblxuICAvKipcbiAgICog54K55Ye75omT5byA5paH5Lu25a+56K+d5qGG77yM6buY6K6k77yaYHRydWVgXG4gICAqL1xuICBvcGVuRmlsZURpYWxvZ09uQ2xpY2s/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDkuIrkvKDmlofku7bkuYvliY3nmoTpkqnlrZDvvIzlj4LmlbDkuLrkuIrkvKDnmoTmlofku7bvvIzoi6Xov5Tlm54gYGZhbHNlYCDliJnlgZzmraLkuIrkvKBcbiAgICovXG4gIGJlZm9yZVVwbG9hZD86IChmaWxlOiBVcGxvYWRGaWxlLCBmaWxlTGlzdDogVXBsb2FkRmlsZVtdKSA9PiBib29sZWFuIHwgT2JzZXJ2YWJsZTxib29sZWFuPjtcblxuICAvKipcbiAgICog6YCa6L+H6KaG55uW6buY6K6k55qE5LiK5Lyg6KGM5Li677yM5Y+v5Lul6Ieq5a6a5LmJ6Ieq5bex55qE5LiK5Lyg5a6e546wXG4gICAqL1xuICBjdXN0b21SZXF1ZXN0PzogKGl0ZW06IFVwbG9hZFhIUkFyZ3MpID0+IFN1YnNjcmlwdGlvbjtcblxuICAvKipcbiAgICog54K55Ye756e76Zmk5paH5Lu25pe255qE5Zue6LCD77yM6L+U5Zue5YC85Li6IGBmYWxzZWAg5pe25LiN56e76ZmkXG4gICAqL1xuICByZW1vdmU/OiAoZmlsZTogVXBsb2FkRmlsZSkgPT4gYm9vbGVhbiB8IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgLyoqXG4gICAqIOeCueWHu+aWh+S7tumTvuaOpeaIlumihOiniOWbvuagh+aXtueahOWbnuiwg1xuICAgKi9cbiAgcHJldmlldz86IChmaWxlOiBVcGxvYWRGaWxlKSA9PiB2b2lkO1xuXG4gIC8qKlxuICAgKiDkuIrkvKDmlofku7bmlLnlj5jml7bnmoTnirbmgIFcbiAgICovXG4gIGNoYW5nZT86IChhcmdzOiBVcGxvYWRDaGFuZ2VQYXJhbSkgPT4gdm9pZDtcbn1cbiJdfQ==