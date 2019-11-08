/**
 * @fileoverview added by tsickle
 * Generated from: src/widgets/autocomplete/schema.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function SFAutoCompleteWidgetSchema() { }
if (false) {
    /**
     * 异步静态数据源
     * @type {?|undefined}
     */
    SFAutoCompleteWidgetSchema.prototype.asyncData;
    /**
     * 在文字框中显示提示讯息
     * @type {?|undefined}
     */
    SFAutoCompleteWidgetSchema.prototype.placeholder;
    /**
     * 是否根据输入项进行筛选，默认只对 `label` 属性执行不区分大小定 `indexOf` 过滤
     * 当其为一个函数时，会接收 `inputValue` `option` 两个参数，当 `option` 符合筛选条件时，应返回 `true`，反之则返回 `false`。
     * @type {?|undefined}
     */
    SFAutoCompleteWidgetSchema.prototype.filterOption;
    /**
     * 模式，自动完成常见邮箱后缀，可以重新使用 `enum` 来指定新后缀
     * @type {?|undefined}
     */
    SFAutoCompleteWidgetSchema.prototype.type;
    /**
     * 去抖时间，当实时数据源时默认最少 `50`，单位：毫秒
     * @type {?|undefined}
     */
    SFAutoCompleteWidgetSchema.prototype.debounceTime;
    /**
     * 是否默认高亮第一个选项，默认：`true`
     * @type {?|undefined}
     */
    SFAutoCompleteWidgetSchema.prototype.defaultActiveFirstOption;
    /**
     * 使用键盘选择选项的时候把选中项回填到输入框中，默认：`false`
     * @type {?|undefined}
     */
    SFAutoCompleteWidgetSchema.prototype.backfill;
    /**
     * 自定义宽度单位 `px`，默认：触发元素宽度
     * @type {?|undefined}
     */
    SFAutoCompleteWidgetSchema.prototype.nzWidth;
    /**
     * 变更回调
     * @type {?|undefined}
     */
    SFAutoCompleteWidgetSchema.prototype.change;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy9hdXRvY29tcGxldGUvc2NoZW1hLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBS0EsZ0RBOENDOzs7Ozs7SUExQ0MsK0NBQThEOzs7OztJQUs5RCxpREFBcUI7Ozs7OztJQU1yQixrREFBNEU7Ozs7O0lBSzVFLDBDQUFlOzs7OztJQUtmLGtEQUFzQjs7Ozs7SUFLdEIsOERBQW1DOzs7OztJQUtuQyw4Q0FBbUI7Ozs7O0lBS25CLDZDQUFpQjs7Ozs7SUFLakIsNENBQXVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTnpBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL2F1dG8tY29tcGxldGUnO1xuaW1wb3J0IHsgU0ZVSVNjaGVtYUl0ZW0gfSBmcm9tICcuLi8uLi9zY2hlbWEvdWknO1xuaW1wb3J0IHsgU0ZTY2hlbWFFbnVtLCBTRlNjaGVtYUVudW1UeXBlIH0gZnJvbSAnLi4vLi4vc2NoZW1hJztcblxuZXhwb3J0IGludGVyZmFjZSBTRkF1dG9Db21wbGV0ZVdpZGdldFNjaGVtYSBleHRlbmRzIFNGVUlTY2hlbWFJdGVtIHtcbiAgLyoqXG4gICAqIOW8guatpemdmeaAgeaVsOaNrua6kFxuICAgKi9cbiAgYXN5bmNEYXRhPzogKGlucHV0OiBzdHJpbmcpID0+IE9ic2VydmFibGU8U0ZTY2hlbWFFbnVtVHlwZVtdPjtcblxuICAvKipcbiAgICog5Zyo5paH5a2X5qGG5Lit5pi+56S65o+Q56S66K6v5oGvXG4gICAqL1xuICBwbGFjZWhvbGRlcj86IHN0cmluZztcblxuICAvKipcbiAgICog5piv5ZCm5qC55o2u6L6T5YWl6aG56L+b6KGM562b6YCJ77yM6buY6K6k5Y+q5a+5IGBsYWJlbGAg5bGe5oCn5omn6KGM5LiN5Yy65YiG5aSn5bCP5a6aIGBpbmRleE9mYCDov4fmu6RcbiAgICog5b2T5YW25Li65LiA5Liq5Ye95pWw5pe277yM5Lya5o6l5pS2IGBpbnB1dFZhbHVlYCBgb3B0aW9uYCDkuKTkuKrlj4LmlbDvvIzlvZMgYG9wdGlvbmAg56ym5ZCI562b6YCJ5p2h5Lu25pe277yM5bqU6L+U5ZueIGB0cnVlYO+8jOWPjeS5i+WImei/lOWbniBgZmFsc2Vg44CCXG4gICAqL1xuICBmaWx0ZXJPcHRpb24/OiBib29sZWFuIHwgKChpbnB1dDogc3RyaW5nLCBvcHRpb246IFNGU2NoZW1hRW51bSkgPT4gYm9vbGVhbik7XG5cbiAgLyoqXG4gICAqIOaooeW8j++8jOiHquWKqOWujOaIkOW4uOingemCrueuseWQjue8gO+8jOWPr+S7pemHjeaWsOS9v+eUqCBgZW51bWAg5p2l5oyH5a6a5paw5ZCO57yAXG4gICAqL1xuICB0eXBlPzogJ2VtYWlsJztcblxuICAvKipcbiAgICog5Y675oqW5pe26Ze077yM5b2T5a6e5pe25pWw5o2u5rqQ5pe26buY6K6k5pyA5bCRIGA1MGDvvIzljZXkvY3vvJrmr6vnp5JcbiAgICovXG4gIGRlYm91bmNlVGltZT86IG51bWJlcjtcblxuICAvKipcbiAgICog5piv5ZCm6buY6K6k6auY5Lqu56ys5LiA5Liq6YCJ6aG577yM6buY6K6k77yaYHRydWVgXG4gICAqL1xuICBkZWZhdWx0QWN0aXZlRmlyc3RPcHRpb24/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDkvb/nlKjplK7nm5jpgInmi6npgInpobnnmoTml7blgJnmiorpgInkuK3pobnlm57loavliLDovpPlhaXmoYbkuK3vvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBiYWNrZmlsbD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOiHquWumuS5ieWuveW6puWNleS9jSBgcHhg77yM6buY6K6k77ya6Kem5Y+R5YWD57Sg5a695bqmXG4gICAqL1xuICBueldpZHRoPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiDlj5jmm7Tlm57osINcbiAgICovXG4gIGNoYW5nZT86IChpdGVtOiBOekF1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudCkgPT4gdm9pZDtcbn1cbiJdfQ==