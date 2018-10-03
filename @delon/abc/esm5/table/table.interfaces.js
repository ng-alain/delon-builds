/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function STReq() { }
/**
 * 额外请求参数，默认自动附加 `pi`、`ps` 至URL
 * - `{ status: 'new' }` => `url?pi=1&ps=10&status=new`
 * @type {?|undefined}
 */
STReq.prototype.params;
/**
 * 请求方法，默认：`GET`
 * @type {?|undefined}
 */
STReq.prototype.method;
/**
 * 请求体 `body`
 * @type {?|undefined}
 */
STReq.prototype.body;
/**
 * 请求体 `Header`
 * @type {?|undefined}
 */
STReq.prototype.headers;
/**
 * 重命名参数 `pi`、`ps`，默认：`{ pi: 'pi', ps: 'ps' }`
 * - `{ pi: 'Page' }` => `pi` 会被替换成 Page
 * @type {?|undefined}
 */
STReq.prototype.reName;
/**
 * 是否将请求所有参数数据都放入 `body` 当中（`url` 地址本身参数除外），仅当 `method: 'POST'` 时有效，默认：`false`
 * @type {?|undefined}
 */
STReq.prototype.allInBody;
/**
 * @record
 */
export function STLoadOptions() { }
/**
 * 是否合并，默认：`false`
 * @type {?|undefined}
 */
STLoadOptions.prototype.merge;
/**
 * @record
 */
export function STRes() { }
/**
 * 重命名返回参数 `total`、`list`
 * - `{ total: 'Total' }` => Total 会被当作 `total`
 * @type {?|undefined}
 */
STRes.prototype.reName;
/**
 * 数据预处理
 * @type {?|undefined}
 */
STRes.prototype.process;
/**
 * @record
 */
export function STPage() { }
/**
 * 前端分页，当 `data` 为`any[]` 或 `Observable<any[]>` 有效，默认：`true`
 * - `true` 由 `st` 根据 `data` 长度受控分页，包括：排序、过滤等
 * - `false` 由用户通过 `total` 和 `data` 参数受控分页，并维护 `(change)` 当分页变更时重新加载数据
 * @type {?|undefined}
 */
STPage.prototype.front;
/**
 * 后端分页是否采用`0`基索引，只在`data`类型为`string`时有效，默认：`false`
 * @type {?|undefined}
 */
STPage.prototype.zeroIndexed;
/**
 * 分页方向，默认：`right`
 * @type {?|undefined}
 */
STPage.prototype.placement;
/**
 * 是否显示分页器，默认：`true`
 * @type {?|undefined}
 */
STPage.prototype.show;
/**
 * 是否显示分页器中改变页数，默认：`false`
 * @type {?|undefined}
 */
STPage.prototype.showSize;
/**
 * 分页器中每页显示条目数下拉框值，默认：`[10, 20, 30, 40, 50]`
 * @type {?|undefined}
 */
STPage.prototype.pageSizes;
/**
 * 是否显示分页器中快速跳转，默认：`false`
 * @type {?|undefined}
 */
STPage.prototype.showQuickJumper;
/**
 * 是否显示总数据量
 * - `boolean` 类型显示与否，默认模板：`共 {{total}} 条`
 * - `string` 自定义模板，模板变量：
 *  - `{{total}}` 表示数据总量
 *  - `{{range[0]}}` 表示当前页开始数量值
 *  - `{{range[1]}}` 表示当前页结束数量值
 * @type {?|undefined}
 */
STPage.prototype.total;
/**
 * 数据变更后是否保留在数据变更前的页码，默认：`true`
 * @deprecated
 * @type {?|undefined}
 */
STPage.prototype.indexReset;
/**
 * 切换分页时返回顶部，默认：`true`
 * @type {?|undefined}
 */
STPage.prototype.toTop;
/**
 * 返回顶部偏移值，默认：`100`
 * @type {?|undefined}
 */
STPage.prototype.toTopOffset;
/**
 * 数据源
 * @record
 */
export function STData() { }
/**
 * 选择框或单选框状态值
 * @type {?|undefined}
 */
STData.prototype.checked;
/**
 * 选择框或单选框 `disabled` 值
 * @type {?|undefined}
 */
STData.prototype.disabled;
/**
 * 是否展开状态
 * @type {?|undefined}
 */
STData.prototype.expand;
/**
 * 列描述
 * @record
 */
export function STColumn() { }
/**
 * 列标题
 * @type {?}
 */
STColumn.prototype.title;
/**
 * 列标题 i18n
 * @type {?|undefined}
 */
STColumn.prototype.i18n;
/**
 * 列数据在数据项中对应的 key，支持 `a.b.c` 的嵌套写法，例如：
 * - `id`
 * - `price.market`
 * - `[ 'price', 'market' ]`
 * @type {?|undefined}
 */
STColumn.prototype.index;
/**
 * 类型
 * - `checkbox` 多选
 * - `radio` 单选
 * - `link` 链接，务必指定 `click`
 * - `badge` [徽标](https://ng.ant.design/components/badge/zh)，务必指定 `badge` 参数配置徽标对应值
 * - `tag` [标签](https://ng.ant.design/components/tag/zh)，务必指定 `tag` 参数配置标签对应值
 * - `img` 图片且居中(若 `className` 存在则优先)
 * - `number` 数字且居右(若 `className` 存在则优先)
 * - `currency` 货币且居右(若 `className` 存在则优先)
 * - `date` 日期格式且居中(若 `className` 存在则优先)，使用 `dateFormat` 自定义格式
 * - `yn` 将`boolean`类型徽章化 [document](https://ng-alain.com/docs/data-render#yn)
 * @type {?|undefined}
 */
STColumn.prototype.type;
/**
 * 链接回调，若返回一个字符串表示导航URL会自动触发 `router.navigateByUrl`
 * @type {?|undefined}
 */
STColumn.prototype.click;
/**
 * 按钮组
 * @type {?|undefined}
 */
STColumn.prototype.buttons;
/**
 * 自定义渲染ID
 * \@example
 * <ng-template st-row="custom" let-item let-index="index" let-column="column">
 *  {{ c.title }}
 * </ng-template>
 * @type {?|undefined}
 */
STColumn.prototype.render;
/**
 * 标题自定义渲染ID
 * \@example
 * <ng-template st-row="custom" type="title" let-c>
 *  {{ item | json }}
 * </ng-template>
 * @type {?|undefined}
 */
STColumn.prototype.renderTitle;
/**
 * 列宽（数字型表示 `px` 值），例如：`100`、`10%`、`100px`
 *
 * **注意：** 固定列不支持百分比
 * @type {?|undefined}
 */
STColumn.prototype.width;
/**
 * 排序配置项，远程数据配置**优先**规则：
 * - `true` 表示允许排序
 * - `string` 表示远程数据排序相对应 `key` 值
 * @type {?|undefined}
 */
STColumn.prototype.sort;
/**
 * 过滤配置项
 * @type {?|undefined}
 */
STColumn.prototype.filter;
/**
 * 格式化列值
 * @type {?|undefined}
 */
STColumn.prototype.format;
/**
 * 自定义全/反选选择项
 * @type {?|undefined}
 */
STColumn.prototype.selections;
/**
 * 列 `class` 属性值（注：无须 `.` 点），例如：
 * - `text-center` 居中
 * - `text-right` 居右
 * - `text-success` 成功色
 * - `text-danger` 异常色
 * @type {?|undefined}
 */
STColumn.prototype.className;
/**
 * 合并列
 * @type {?|undefined}
 */
STColumn.prototype.colSpan;
/**
 * 数字格式，`type=number` 有效
 * @type {?|undefined}
 */
STColumn.prototype.numberDigits;
/**
 * 日期格式，`type=date` 有效，（默认：`YYYY-MM-DD HH:mm`）
 * @type {?|undefined}
 */
STColumn.prototype.dateFormat;
/**
 * 当 `type=yn` 有效
 * @type {?|undefined}
 */
STColumn.prototype.yn;
/**
 * 是否允许导出，默认 `true`
 * @type {?|undefined}
 */
STColumn.prototype.exported;
/**
 * 权限，等同 `can()` 参数值
 * @type {?|undefined}
 */
STColumn.prototype.acl;
/**
 * 当不存在数据时以默认值替代
 * @type {?|undefined}
 */
STColumn.prototype.default;
/**
 * 固定前后列，当指定时务必指定 `width` 否则视为无效，有若干 **注意：** 项：
 *
 * - 若列头与内容不对齐或出现列重复，请指定列的宽度 `width`
 * - 建议指定 `scroll.x` 为大于表格宽度的固定值或百分比。注意，且非固定列宽度之和不要超过 `scroll.x`
 * @type {?|undefined}
 */
STColumn.prototype.fixed;
/**
 * 徽标配置项
 * @type {?|undefined}
 */
STColumn.prototype.badge;
/**
 * 标签配置项
 * @type {?|undefined}
 */
STColumn.prototype.tag;
/**
 * @record
 */
export function STColumnSort() { }
/**
 * 排序的默认受控属性
 * @type {?|undefined}
 */
STColumnSort.prototype.default;
/**
 * 本地数据的排序函数，使用一个函数(参考 [Array.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) 的 compareFunction)
 * @type {?|undefined}
 */
STColumnSort.prototype.compare;
/**
 * 远程数据的排序时后端相对应的KEY，默认使用 `index` 属性
 * - 若 `multiSort: false` 时：`key: 'name' => ?name=1&pi=1`
 * - 若 `multiSort: true` 允许多个排序 key 存在，或使用 `STMultiSort` 指定多列排序key合并规则
 * @type {?|undefined}
 */
STColumnSort.prototype.key;
/**
 * 远程数据的排序时后端相对应的VALUE
 * - `{ ascend: '0', descend: '1' }` 结果 `?name=1&pi=1`
 * - `{ ascend: 'asc', descend: 'desc' }` 结果 `?name=desc&pi=1`
 * @type {?|undefined}
 */
STColumnSort.prototype.reName;
/**
 * @record
 */
export function STColumnFilter() { }
/**
 * 表头的筛选菜单项，至少一项才会生效
 * @type {?}
 */
STColumnFilter.prototype.menus;
/**
 * 本地数据的筛选函数
 * @type {?|undefined}
 */
STColumnFilter.prototype.fn;
/**
 * 标识数据是否已过滤，筛选图标会高亮
 * @type {?|undefined}
 */
STColumnFilter.prototype.default;
/**
 * 自定义 filter 图标，默认 `anticon anticon-filter`
 * @type {?|undefined}
 */
STColumnFilter.prototype.icon;
/**
 * 确认按钮文本，默认 `确认`
 * @type {?|undefined}
 */
STColumnFilter.prototype.confirmText;
/**
 * 清除按钮文本，默认 `重置`
 * @type {?|undefined}
 */
STColumnFilter.prototype.clearText;
/**
 * 是否多选，默认 `true`
 * @type {?|undefined}
 */
STColumnFilter.prototype.multiple;
/**
 * 远程数据的过滤时后端相对应的KEY，默认使用 `index` 属性
 * `key: 'name'` 结果 `?name=1&pi=1`
 * @type {?|undefined}
 */
STColumnFilter.prototype.key;
/**
 * 远程数据的过滤时后端相对应的VALUE
 * - 默认当 `multiple: true` 时以英文逗号拼接的字符串
 * \@return 返回为 Object 对象
 * @type {?|undefined}
 */
STColumnFilter.prototype.reName;
/**
 * @record
 */
export function STColumnFilterMenu() { }
/**
 * 文本
 * @type {?}
 */
STColumnFilterMenu.prototype.text;
/**
 * 值
 * @type {?|undefined}
 */
STColumnFilterMenu.prototype.value;
/**
 * 是否选中
 * @type {?|undefined}
 */
STColumnFilterMenu.prototype.checked;
/**
 * 权限，等同 `can()` 参数值
 * @type {?|undefined}
 */
STColumnFilterMenu.prototype.acl;
/**
 * @record
 */
export function STColumnSelection() { }
/**
 * 选择项显示的文字
 * @type {?}
 */
STColumnSelection.prototype.text;
/**
 * 选择项点击回调，允许对参数 `data.checked` 进行操作
 * @type {?}
 */
STColumnSelection.prototype.select;
/**
 * 权限，等同 `can()` 参数值
 * @type {?|undefined}
 */
STColumnSelection.prototype.acl;
/**
 * 当 `type=yn` 有效
 * @record
 */
export function STColumnYn() { }
/**
 * 真值条件，（默认：`true`）
 * @type {?|undefined}
 */
STColumnYn.prototype.truth;
/**
 * 徽章 `true` 时文本，（默认：`是`）
 * @type {?|undefined}
 */
STColumnYn.prototype.yes;
/**
 * 徽章 `false` 时文本，（默认：`否`）
 * @type {?|undefined}
 */
STColumnYn.prototype.no;
/**
 * 按钮配置
 * @record
 */
export function STColumnButton() { }
/**
 * 文本
 * @type {?}
 */
STColumnButton.prototype.text;
/**
 * 文本 i18n
 * @type {?|undefined}
 */
STColumnButton.prototype.i18n;
/**
 * 格式化文本，较高调用频率，请勿过多复杂计算免得产生性能问题
 * @type {?|undefined}
 */
STColumnButton.prototype.format;
/**
 * 按钮类型
 * - `none` 无任何互动
 * - `del` 删除，默认开启 `pop: true`
 * - `modal` 对话框，需要指定 `component` 才会生效
 * - `static` 静态对话框，需要指定 `component` 才会生效
 * - `drawer` 抽屉，需要指定 `component` 才会生效
 * - `link` 链接，当 `click` 返回字符串时自动调用 `navigateByUrl` 导航
 * @type {?|undefined}
 */
STColumnButton.prototype.type;
/**
 * 点击回调
 * - Function
 *  - `type=modal` 只会在当有传回值时才会触发回调
 * - reload：重新刷新当前页
 * - load：重新加载数据，并重置页码为：`1`
 * @type {?|undefined}
 */
STColumnButton.prototype.click;
/**
 * 是否需要气泡确认框
 * @type {?|undefined}
 */
STColumnButton.prototype.pop;
/**
 * 气泡确认框内容，默认 `确认删除吗？`
 * @type {?|undefined}
 */
STColumnButton.prototype.popTitle;
/**
 * 对话框参数
 * @type {?|undefined}
 */
STColumnButton.prototype.modal;
/**
 * 抽屉参数
 * @type {?|undefined}
 */
STColumnButton.prototype.drawer;
/**
 * 下拉菜单，当存在时以 `dropdown` 形式渲染
 * - 只支持一级
 * @type {?|undefined}
 */
STColumnButton.prototype.children;
/**
 * 权限，等同 `can()` 参数值
 * @type {?|undefined}
 */
STColumnButton.prototype.acl;
/**
 * 条件表达式，较高调用频率，请勿过多复杂计算免得产生性能问题
 * @type {?|undefined}
 */
STColumnButton.prototype.iif;
/**
 * @record
 */
export function STColumnButtonModal() { }
/**
 * 对话框组件对象，务必在 `entryComponents` 注册
 * @type {?|undefined}
 */
STColumnButtonModal.prototype.component;
/**
 * 对话框参数
 * @type {?|undefined}
 */
STColumnButtonModal.prototype.params;
/**
 * 对话框目标组件的接收参数名，默认：`record`
 * @type {?|undefined}
 */
STColumnButtonModal.prototype.paramsName;
/**
 * @record
 */
export function STColumnButtonModalConfig() { }
/**
 * 指定模态框目标组件的接收参数名，默认：`record`
 * @type {?|undefined}
 */
STColumnButtonModalConfig.prototype.paramsName;
/**
 * 大小；例如：lg、600，默认：`lg`
 * @type {?|undefined}
 */
STColumnButtonModalConfig.prototype.size;
/**
 * 对话框 [ModalOptionsForService](https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/components/modal/nz-modal.type.ts) 参数
 * @type {?|undefined}
 */
STColumnButtonModalConfig.prototype.modalOptions;
/**
 * 是否精准（默认：`true`），若返回值非空值（`null`或`undefined`）视为成功，否则视为错误
 * @type {?|undefined}
 */
STColumnButtonModalConfig.prototype.exact;
/**
 * @record
 */
export function STColumnButtonDrawer() { }
/**
 * 标题
 * @type {?|undefined}
 */
STColumnButtonDrawer.prototype.title;
/**
 * 抽屉组件对象，务必在 `entryComponents` 注册
 * @type {?|undefined}
 */
STColumnButtonDrawer.prototype.component;
/**
 * 抽屉参数
 * @type {?|undefined}
 */
STColumnButtonDrawer.prototype.params;
/**
 * 抽屉目标组件的接收参数名，默认：`record`
 * @type {?|undefined}
 */
STColumnButtonDrawer.prototype.paramsName;
/**
 * @record
 */
export function STColumnButtonDrawerConfig() { }
/**
 * 抽屉目标组件的接收参数名，默认：`record`
 * @type {?|undefined}
 */
STColumnButtonDrawerConfig.prototype.paramsName;
/**
 * 大小；例如：lg、600，默认：`md`
 *
 * | 类型 | 默认大小 |
 * | --- | ------ |
 * | `sm` | `300` |
 * | `md` | `600` |
 * | `lg` | `900` |
 * | `xl` | `1200` |
 *
 * > 以上值，可通过覆盖相应的LESS参数自行调整
 * @type {?|undefined}
 */
STColumnButtonDrawerConfig.prototype.size;
/**
 * 是否包含底部工具条，默认：`true`
 * @type {?|undefined}
 */
STColumnButtonDrawerConfig.prototype.footer;
/**
 * 底部工具条高度，默认：`55`
 * @type {?|undefined}
 */
STColumnButtonDrawerConfig.prototype.footerHeight;
/**
 * 抽屉 [NzDrawerOptions](https://ng.ant.design/components/drawer/zh#nzdraweroptions) 参数
 * @type {?|undefined}
 */
STColumnButtonDrawerConfig.prototype.drawerOptions;
/**
 * @record
 */
export function STReqReNameType() { }
/** @type {?|undefined} */
STReqReNameType.prototype.pi;
/** @type {?|undefined} */
STReqReNameType.prototype.ps;
/**
 * @record
 */
export function STResReNameType() { }
/** @type {?|undefined} */
STResReNameType.prototype.total;
/** @type {?|undefined} */
STResReNameType.prototype.list;
/**
 * @record
 */
export function STExportOptions() { }
/** @type {?|undefined} */
STExportOptions.prototype._d;
/** @type {?|undefined} */
STExportOptions.prototype._c;
/**
 * 工作溥名
 * @type {?|undefined}
 */
STExportOptions.prototype.sheetname;
/**
 * 文件名
 * @type {?|undefined}
 */
STExportOptions.prototype.filename;
/**
 * triggers when saveas
 * @type {?|undefined}
 */
STExportOptions.prototype.callback;
/**
 * 多排序相同排序 key 时合并规则
 * @record
 */
export function STMultiSort() { }
/**
 * 请求参数名，默认：`sort`
 * @type {?|undefined}
 */
STMultiSort.prototype.key;
/**
 * 不同属性间分隔符，默认：`-`
 * @type {?|undefined}
 */
STMultiSort.prototype.separator;
/**
 * 列名与状态间分隔符，默认：`.`
 * @type {?|undefined}
 */
STMultiSort.prototype.nameSeparator;
/**
 * 徽标信息
 * @record
 */
export function STColumnBadge() { }
/**
 * @record
 */
export function STColumnBadgeValue() { }
/**
 * 文本
 * @type {?|undefined}
 */
STColumnBadgeValue.prototype.text;
/**
 * 徽标颜色值
 * @type {?|undefined}
 */
STColumnBadgeValue.prototype.color;
/**
 * 标签信息
 * @record
 */
export function STColumnTag() { }
/**
 * @record
 */
export function STColumnTagValue() { }
/**
 * 文本
 * @type {?|undefined}
 */
STColumnTagValue.prototype.text;
/**
 * 颜色值，支持预设和色值
 * - 预设：geekblue,blue,purple,success,red,volcano,orange,gold,lime,green,cyan
 * - 色值：#f50,#ff0
 * @type {?|undefined}
 */
STColumnTagValue.prototype.color;
/** @typedef {?} */
var STChangeType;
export { STChangeType };
/**
 * 回调数据
 * @record
 */
export function STChange() { }
/**
 * 回调类型
 * @type {?}
 */
STChange.prototype.type;
/**
 * 当前页码
 * @type {?}
 */
STChange.prototype.pi;
/**
 * 每页数量
 * @type {?}
 */
STChange.prototype.ps;
/**
 * 数据总量
 * @type {?}
 */
STChange.prototype.total;
/**
 * `checkbox` 参数
 * @type {?|undefined}
 */
STChange.prototype.checkbox;
/**
 * `radio` 参数
 * @type {?|undefined}
 */
STChange.prototype.radio;
/**
 * 排序参数
 * @type {?|undefined}
 */
STChange.prototype.sort;
/**
 * 过滤参数
 * @type {?|undefined}
 */
STChange.prototype.filter;
/**
 * 行点击或双击参数
 * @type {?|undefined}
 */
STChange.prototype.click;
/**
 * 行单击参数
 * @record
 */
export function STChangeSort() { }
/** @type {?|undefined} */
STChangeSort.prototype.value;
/** @type {?|undefined} */
STChangeSort.prototype.map;
/** @type {?|undefined} */
STChangeSort.prototype.column;
/**
 * 行单击参数
 * @record
 */
export function STChangeRowClick() { }
/** @type {?|undefined} */
STChangeRowClick.prototype.e;
/** @type {?|undefined} */
STChangeRowClick.prototype.item;
/** @type {?|undefined} */
STChangeRowClick.prototype.index;
/**
 * @record
 */
export function STError() { }
/** @type {?|undefined} */
STError.prototype.type;
/** @type {?|undefined} */
STError.prototype.error;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuaW50ZXJmYWNlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvdGFibGUvIiwic291cmNlcyI6WyJ0YWJsZS5pbnRlcmZhY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTVENvbXBvbmVudCB9IGZyb20gJy4vdGFibGUuY29tcG9uZW50JztcbmltcG9ydCB7IE1vZGFsSGVscGVyT3B0aW9ucywgRHJhd2VySGVscGVyT3B0aW9ucyB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlLCBOekRyYXdlck9wdGlvbnMgfSBmcm9tICduZy16b3Jyby1hbnRkJztcblxuZXhwb3J0IGludGVyZmFjZSBTVFJlcSB7XG4gIC8qKlxuICAgKiDpop3lpJbor7fmsYLlj4LmlbDvvIzpu5jorqToh6rliqjpmYTliqAgYHBpYOOAgWBwc2Ag6IezVVJMXG4gICAqIC0gYHsgc3RhdHVzOiAnbmV3JyB9YCA9PiBgdXJsP3BpPTEmcHM9MTAmc3RhdHVzPW5ld2BcbiAgICovXG4gIHBhcmFtcz86IGFueTtcbiAgLyoqIOivt+axguaWueazle+8jOm7mOiupO+8mmBHRVRgICovXG4gIG1ldGhvZD86IHN0cmluZztcbiAgLyoqIOivt+axguS9kyBgYm9keWAgKi9cbiAgYm9keT86IGFueTtcbiAgLyoqIOivt+axguS9kyBgSGVhZGVyYCAqL1xuICBoZWFkZXJzPzogYW55O1xuICAvKipcbiAgICog6YeN5ZG95ZCN5Y+C5pWwIGBwaWDjgIFgcHNg77yM6buY6K6k77yaYHsgcGk6ICdwaScsIHBzOiAncHMnIH1gXG4gICAqIC0gYHsgcGk6ICdQYWdlJyB9YCA9PiBgcGlgIOS8muiiq+abv+aNouaIkCBQYWdlXG4gICAqL1xuICByZU5hbWU/OiBTVFJlcVJlTmFtZVR5cGU7XG4gIC8qKlxuICAgKiDmmK/lkKblsIbor7fmsYLmiYDmnInlj4LmlbDmlbDmja7pg73mlL7lhaUgYGJvZHlgIOW9k+S4re+8iGB1cmxgIOWcsOWdgOacrOi6q+WPguaVsOmZpOWklu+8ie+8jOS7heW9kyBgbWV0aG9kOiAnUE9TVCdgIOaXtuacieaViO+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIGFsbEluQm9keT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RMb2FkT3B0aW9ucyB7XG4gIC8qKiDmmK/lkKblkIjlubbvvIzpu5jorqTvvJpgZmFsc2VgICovXG4gIG1lcmdlPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVFJlcyB7XG4gIC8qKlxuICAgKiDph43lkb3lkI3ov5Tlm57lj4LmlbAgYHRvdGFsYOOAgWBsaXN0YFxuICAgKiAtIGB7IHRvdGFsOiAnVG90YWwnIH1gID0+IFRvdGFsIOS8muiiq+W9k+S9nCBgdG90YWxgXG4gICAqL1xuICByZU5hbWU/OiBTVFJlc1JlTmFtZVR5cGU7XG4gIC8qKlxuICAgKiDmlbDmja7pooTlpITnkIZcbiAgICovXG4gIHByb2Nlc3M/OiAoZGF0YTogU1REYXRhW10pID0+IFNURGF0YVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUUGFnZSB7XG4gIC8qKlxuICAgKiDliY3nq6/liIbpobXvvIzlvZMgYGRhdGFgIOS4umBhbnlbXWAg5oiWIGBPYnNlcnZhYmxlPGFueVtdPmAg5pyJ5pWI77yM6buY6K6k77yaYHRydWVgXG4gICAqIC0gYHRydWVgIOeUsSBgc3RgIOagueaNriBgZGF0YWAg6ZW/5bqm5Y+X5o6n5YiG6aG177yM5YyF5ous77ya5o6S5bqP44CB6L+H5ruk562JXG4gICAqIC0gYGZhbHNlYCDnlLHnlKjmiLfpgJrov4cgYHRvdGFsYCDlkowgYGRhdGFgIOWPguaVsOWPl+aOp+WIhumhte+8jOW5tue7tOaKpCBgKGNoYW5nZSlgIOW9k+WIhumhteWPmOabtOaXtumHjeaWsOWKoOi9veaVsOaNrlxuICAgKi9cbiAgZnJvbnQ/OiBib29sZWFuO1xuICAvKipcbiAgICog5ZCO56uv5YiG6aG15piv5ZCm6YeH55SoYDBg5Z+657Si5byV77yM5Y+q5ZyoYGRhdGFg57G75Z6L5Li6YHN0cmluZ2Dml7bmnInmlYjvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICB6ZXJvSW5kZXhlZD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDliIbpobXmlrnlkJHvvIzpu5jorqTvvJpgcmlnaHRgXG4gICAqL1xuICBwbGFjZW1lbnQ/OiAnbGVmdCcgfCAnY2VudGVyJyB8ICdyaWdodCc7XG4gIC8qKlxuICAgKiDmmK/lkKbmmL7npLrliIbpobXlmajvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICovXG4gIHNob3c/OiBib29sZWFuO1xuICAvKipcbiAgICog5piv5ZCm5pi+56S65YiG6aG15Zmo5Lit5pS55Y+Y6aG15pWw77yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgc2hvd1NpemU/OiBib29sZWFuO1xuICAvKipcbiAgICog5YiG6aG15Zmo5Lit5q+P6aG15pi+56S65p2h55uu5pWw5LiL5ouJ5qGG5YC877yM6buY6K6k77yaYFsxMCwgMjAsIDMwLCA0MCwgNTBdYFxuICAgKi9cbiAgcGFnZVNpemVzPzogbnVtYmVyW107XG4gIC8qKlxuICAgKiDmmK/lkKbmmL7npLrliIbpobXlmajkuK3lv6vpgJ/ot7PovazvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBzaG93UXVpY2tKdW1wZXI/OiBib29sZWFuO1xuICAvKipcbiAgICog5piv5ZCm5pi+56S65oC75pWw5o2u6YePXG4gICAqIC0gYGJvb2xlYW5gIOexu+Wei+aYvuekuuS4juWQpu+8jOm7mOiupOaooeadv++8mmDlhbEge3t0b3RhbH19IOadoWBcbiAgICogLSBgc3RyaW5nYCDoh6rlrprkuYnmqKHmnb/vvIzmqKHmnb/lj5jph4/vvJpcbiAgICogIC0gYHt7dG90YWx9fWAg6KGo56S65pWw5o2u5oC76YePXG4gICAqICAtIGB7e3JhbmdlWzBdfX1gIOihqOekuuW9k+WJjemhteW8gOWni+aVsOmHj+WAvFxuICAgKiAgLSBge3tyYW5nZVsxXX19YCDooajnpLrlvZPliY3pobXnu5PmnZ/mlbDph4/lgLxcbiAgICovXG4gIHRvdGFsPzogc3RyaW5nIHwgYm9vbGVhbjtcbiAgLyoqXG4gICAqIOaVsOaNruWPmOabtOWQjuaYr+WQpuS/neeVmeWcqOaVsOaNruWPmOabtOWJjeeahOmhteegge+8jOm7mOiupO+8mmB0cnVlYFxuICAgKiBAZGVwcmVjYXRlZFxuICAgKi9cbiAgaW5kZXhSZXNldD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDliIfmjaLliIbpobXml7bov5Tlm57pobbpg6jvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICovXG4gIHRvVG9wPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOi/lOWbnumhtumDqOWBj+enu+WAvO+8jOm7mOiupO+8mmAxMDBgXG4gICAqL1xuICB0b1RvcE9mZnNldD86IG51bWJlcjtcbn1cblxuLyoqXG4gKiDmlbDmja7mupBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTVERhdGEge1xuICAvKipcbiAgICog6YCJ5oup5qGG5oiW5Y2V6YCJ5qGG54q25oCB5YC8XG4gICAqL1xuICBjaGVja2VkPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOmAieaLqeahhuaIluWNlemAieahhiBgZGlzYWJsZWRgIOWAvFxuICAgKi9cbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICAvKipcbiAgICog5piv5ZCm5bGV5byA54q25oCBXG4gICAqL1xuICBleHBhbmQ/OiBib29sZWFuO1xuXG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuLyoqXG4gKiDliJfmj4/ov7BcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtbiB7XG4gIC8qKlxuICAgKiDliJfmoIfpophcbiAgICovXG4gIHRpdGxlOiBzdHJpbmc7XG4gIC8qKlxuICAgKiDliJfmoIfpopggaTE4blxuICAgKi9cbiAgaTE4bj86IHN0cmluZztcbiAgLyoqXG4gICAqIOWIl+aVsOaNruWcqOaVsOaNrumhueS4reWvueW6lOeahCBrZXnvvIzmlK/mjIEgYGEuYi5jYCDnmoTltYzlpZflhpnms5XvvIzkvovlpoLvvJpcbiAgICogLSBgaWRgXG4gICAqIC0gYHByaWNlLm1hcmtldGBcbiAgICogLSBgWyAncHJpY2UnLCAnbWFya2V0JyBdYFxuICAgKi9cbiAgaW5kZXg/OiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgLyoqXG4gICAqIOexu+Wei1xuICAgKiAtIGBjaGVja2JveGAg5aSa6YCJXG4gICAqIC0gYHJhZGlvYCDljZXpgIlcbiAgICogLSBgbGlua2Ag6ZO+5o6l77yM5Yqh5b+F5oyH5a6aIGBjbGlja2BcbiAgICogLSBgYmFkZ2VgIFvlvr3moIddKGh0dHBzOi8vbmcuYW50LmRlc2lnbi9jb21wb25lbnRzL2JhZGdlL3poKe+8jOWKoeW/heaMh+WumiBgYmFkZ2VgIOWPguaVsOmFjee9ruW+veagh+WvueW6lOWAvFxuICAgKiAtIGB0YWdgIFvmoIfnrb5dKGh0dHBzOi8vbmcuYW50LmRlc2lnbi9jb21wb25lbnRzL3RhZy96aCnvvIzliqHlv4XmjIflrpogYHRhZ2Ag5Y+C5pWw6YWN572u5qCH562+5a+55bqU5YC8XG4gICAqIC0gYGltZ2Ag5Zu+54mH5LiU5bGF5LitKOiLpSBgY2xhc3NOYW1lYCDlrZjlnKjliJnkvJjlhYgpXG4gICAqIC0gYG51bWJlcmAg5pWw5a2X5LiU5bGF5Y+zKOiLpSBgY2xhc3NOYW1lYCDlrZjlnKjliJnkvJjlhYgpXG4gICAqIC0gYGN1cnJlbmN5YCDotKfluIHkuJTlsYXlj7Mo6IulIGBjbGFzc05hbWVgIOWtmOWcqOWImeS8mOWFiClcbiAgICogLSBgZGF0ZWAg5pel5pyf5qC85byP5LiU5bGF5LitKOiLpSBgY2xhc3NOYW1lYCDlrZjlnKjliJnkvJjlhYgp77yM5L2/55SoIGBkYXRlRm9ybWF0YCDoh6rlrprkuYnmoLzlvI9cbiAgICogLSBgeW5gIOWwhmBib29sZWFuYOexu+Wei+W+veeroOWMliBbZG9jdW1lbnRdKGh0dHBzOi8vbmctYWxhaW4uY29tL2RvY3MvZGF0YS1yZW5kZXIjeW4pXG4gICAqL1xuICB0eXBlPzpcbiAgICB8ICdjaGVja2JveCdcbiAgICB8ICdsaW5rJ1xuICAgIHwgJ2JhZGdlJ1xuICAgIHwgJ3RhZydcbiAgICB8ICdyYWRpbydcbiAgICB8ICdpbWcnXG4gICAgfCAnY3VycmVuY3knXG4gICAgfCAnbnVtYmVyJ1xuICAgIHwgJ2RhdGUnXG4gICAgfCAneW4nO1xuICAvKipcbiAgICog6ZO+5o6l5Zue6LCD77yM6Iul6L+U5Zue5LiA5Liq5a2X56ym5Liy6KGo56S65a+86IiqVVJM5Lya6Ieq5Yqo6Kem5Y+RIGByb3V0ZXIubmF2aWdhdGVCeVVybGBcbiAgICovXG4gIGNsaWNrPzogKHJlY29yZDogYW55LCBpbnN0YW5jZT86IFNUQ29tcG9uZW50KSA9PiBhbnk7XG4gIC8qKlxuICAgKiDmjInpkq7nu4RcbiAgICovXG4gIGJ1dHRvbnM/OiBTVENvbHVtbkJ1dHRvbltdO1xuICAvKipcbiAgICog6Ieq5a6a5LmJ5riy5p+TSURcbiAgICogQGV4YW1wbGVcbiAgICogPG5nLXRlbXBsYXRlIHN0LXJvdz1cImN1c3RvbVwiIGxldC1pdGVtIGxldC1pbmRleD1cImluZGV4XCIgbGV0LWNvbHVtbj1cImNvbHVtblwiPlxuICAgKiAge3sgYy50aXRsZSB9fVxuICAgKiA8L25nLXRlbXBsYXRlPlxuICAgKi9cbiAgcmVuZGVyPzogc3RyaW5nO1xuICAvKipcbiAgICog5qCH6aKY6Ieq5a6a5LmJ5riy5p+TSURcbiAgICogQGV4YW1wbGVcbiAgICogPG5nLXRlbXBsYXRlIHN0LXJvdz1cImN1c3RvbVwiIHR5cGU9XCJ0aXRsZVwiIGxldC1jPlxuICAgKiAge3sgaXRlbSB8IGpzb24gfX1cbiAgICogPC9uZy10ZW1wbGF0ZT5cbiAgICovXG4gIHJlbmRlclRpdGxlPzogc3RyaW5nO1xuICAvKipcbiAgICog5YiX5a6977yI5pWw5a2X5Z6L6KGo56S6IGBweGAg5YC877yJ77yM5L6L5aaC77yaYDEwMGDjgIFgMTAlYOOAgWAxMDBweGBcbiAgICpcbiAgICogKirms6jmhI/vvJoqKiDlm7rlrprliJfkuI3mlK/mjIHnmb7liIbmr5RcbiAgICovXG4gIHdpZHRoPzogc3RyaW5nIHwgbnVtYmVyO1xuICAvKipcbiAgICog5o6S5bqP6YWN572u6aG577yM6L+c56iL5pWw5o2u6YWN572uKirkvJjlhYgqKuinhOWIme+8mlxuICAgKiAtIGB0cnVlYCDooajnpLrlhYHorrjmjpLluo9cbiAgICogLSBgc3RyaW5nYCDooajnpLrov5znqIvmlbDmja7mjpLluo/nm7jlr7nlupQgYGtleWAg5YC8XG4gICAqL1xuICBzb3J0PzogdHJ1ZSB8IHN0cmluZyB8IFNUQ29sdW1uU29ydDtcbiAgLyoqXG4gICAqIOi/h+a7pOmFjee9rumhuVxuICAgKi9cbiAgZmlsdGVyPzogU1RDb2x1bW5GaWx0ZXI7XG4gIC8qKlxuICAgKiDmoLzlvI/ljJbliJflgLxcbiAgICovXG4gIGZvcm1hdD86IEZ1bmN0aW9uO1xuICAvKipcbiAgICog6Ieq5a6a5LmJ5YWoL+WPjemAiemAieaLqemhuVxuICAgKi9cbiAgc2VsZWN0aW9ucz86IFNUQ29sdW1uU2VsZWN0aW9uW107XG4gIC8qKlxuICAgKiDliJcgYGNsYXNzYCDlsZ7mgKflgLzvvIjms6jvvJrml6DpobsgYC5gIOeCue+8ie+8jOS+i+Wmgu+8mlxuICAgKiAtIGB0ZXh0LWNlbnRlcmAg5bGF5LitXG4gICAqIC0gYHRleHQtcmlnaHRgIOWxheWPs1xuICAgKiAtIGB0ZXh0LXN1Y2Nlc3NgIOaIkOWKn+iJslxuICAgKiAtIGB0ZXh0LWRhbmdlcmAg5byC5bi46ImyXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDlkIjlubbliJdcbiAgICovXG4gIGNvbFNwYW4/OiBudW1iZXI7XG4gIC8qKlxuICAgKiDmlbDlrZfmoLzlvI/vvIxgdHlwZT1udW1iZXJgIOacieaViFxuICAgKi9cbiAgbnVtYmVyRGlnaXRzPzogc3RyaW5nO1xuICAvKipcbiAgICog5pel5pyf5qC85byP77yMYHR5cGU9ZGF0ZWAg5pyJ5pWI77yM77yI6buY6K6k77yaYFlZWVktTU0tREQgSEg6bW1g77yJXG4gICAqL1xuICBkYXRlRm9ybWF0Pzogc3RyaW5nO1xuICAvKipcbiAgICog5b2TIGB0eXBlPXluYCDmnInmlYhcbiAgICovXG4gIHluPzogU1RDb2x1bW5ZbjtcbiAgLyoqXG4gICAqIOaYr+WQpuWFgeiuuOWvvOWHuu+8jOm7mOiupCBgdHJ1ZWBcbiAgICovXG4gIGV4cG9ydGVkPzogYm9vbGVhbjtcbiAgLyoqIOadg+mZkO+8jOetieWQjCBgY2FuKClgIOWPguaVsOWAvCAqL1xuICBhY2w/OiBhbnk7XG4gIC8qKiDlvZPkuI3lrZjlnKjmlbDmja7ml7bku6Xpu5jorqTlgLzmm7/ku6MgKi9cbiAgZGVmYXVsdD86IHN0cmluZztcbiAgLyoqXG4gICAqIOWbuuWumuWJjeWQjuWIl++8jOW9k+aMh+WumuaXtuWKoeW/heaMh+WumiBgd2lkdGhgIOWQpuWImeinhuS4uuaXoOaViO+8jOacieiLpeW5siAqKuazqOaEj++8mioqIOmhue+8mlxuICAgKlxuICAgKiAtIOiLpeWIl+WktOS4juWGheWuueS4jeWvuem9kOaIluWHuueOsOWIl+mHjeWkje+8jOivt+aMh+WumuWIl+eahOWuveW6piBgd2lkdGhgXG4gICAqIC0g5bu66K6u5oyH5a6aIGBzY3JvbGwueGAg5Li65aSn5LqO6KGo5qC85a695bqm55qE5Zu65a6a5YC85oiW55m+5YiG5q+U44CC5rOo5oSP77yM5LiU6Z2e5Zu65a6a5YiX5a695bqm5LmL5ZKM5LiN6KaB6LaF6L+HIGBzY3JvbGwueGBcbiAgICovXG4gIGZpeGVkPzogJ2xlZnQnIHwgJ3JpZ2h0JztcbiAgLyoqXG4gICAqIOW+veagh+mFjee9rumhuVxuICAgKi9cbiAgYmFkZ2U/OiBTVENvbHVtbkJhZGdlO1xuICAvKipcbiAgICog5qCH562+6YWN572u6aG5XG4gICAqL1xuICB0YWc/OiBTVENvbHVtblRhZztcblxuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RDb2x1bW5Tb3J0IHtcbiAgLyoqXG4gICAqIOaOkuW6j+eahOm7mOiupOWPl+aOp+WxnuaAp1xuICAgKi9cbiAgZGVmYXVsdD86ICdhc2NlbmQnIHwgJ2Rlc2NlbmQnO1xuICAvKipcbiAgICog5pys5Zyw5pWw5o2u55qE5o6S5bqP5Ye95pWw77yM5L2/55So5LiA5Liq5Ye95pWwKOWPguiAgyBbQXJyYXkuc29ydF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvc29ydCkg55qEIGNvbXBhcmVGdW5jdGlvbilcbiAgICovXG4gIGNvbXBhcmU/OiAoYTogYW55LCBiOiBhbnkpID0+IG51bWJlcjtcbiAgLyoqXG4gICAqIOi/nOeoi+aVsOaNrueahOaOkuW6j+aXtuWQjuerr+ebuOWvueW6lOeahEtFWe+8jOm7mOiupOS9v+eUqCBgaW5kZXhgIOWxnuaAp1xuICAgKiAtIOiLpSBgbXVsdGlTb3J0OiBmYWxzZWAg5pe277yaYGtleTogJ25hbWUnID0+ID9uYW1lPTEmcGk9MWBcbiAgICogLSDoi6UgYG11bHRpU29ydDogdHJ1ZWAg5YWB6K645aSa5Liq5o6S5bqPIGtleSDlrZjlnKjvvIzmiJbkvb/nlKggYFNUTXVsdGlTb3J0YCDmjIflrprlpJrliJfmjpLluo9rZXnlkIjlubbop4TliJlcbiAgICovXG4gIGtleT86IHN0cmluZztcbiAgLyoqXG4gICAqIOi/nOeoi+aVsOaNrueahOaOkuW6j+aXtuWQjuerr+ebuOWvueW6lOeahFZBTFVFXG4gICAqIC0gYHsgYXNjZW5kOiAnMCcsIGRlc2NlbmQ6ICcxJyB9YCDnu5PmnpwgYD9uYW1lPTEmcGk9MWBcbiAgICogLSBgeyBhc2NlbmQ6ICdhc2MnLCBkZXNjZW5kOiAnZGVzYycgfWAg57uT5p6cIGA/bmFtZT1kZXNjJnBpPTFgXG4gICAqL1xuICByZU5hbWU/OiB7IGFzY2VuZD86IHN0cmluZzsgZGVzY2VuZD86IHN0cmluZyB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uRmlsdGVyIHtcbiAgLyoqXG4gICAqIOihqOWktOeahOetm+mAieiPnOWNlemhue+8jOiHs+WwkeS4gOmhueaJjeS8mueUn+aViFxuICAgKi9cbiAgbWVudXM6IFNUQ29sdW1uRmlsdGVyTWVudVtdO1xuICAvKipcbiAgICog5pys5Zyw5pWw5o2u55qE562b6YCJ5Ye95pWwXG4gICAqL1xuICBmbj86IChmaWx0ZXI6IFNUQ29sdW1uRmlsdGVyTWVudSwgcmVjb3JkOiBhbnkpID0+IGJvb2xlYW47XG4gIC8qKlxuICAgKiDmoIfor4bmlbDmja7mmK/lkKblt7Lov4fmu6TvvIznrZvpgInlm77moIfkvJrpq5jkuq5cbiAgICovXG4gIGRlZmF1bHQ/OiBib29sZWFuO1xuICAvKipcbiAgICog6Ieq5a6a5LmJIGZpbHRlciDlm77moIfvvIzpu5jorqQgYGFudGljb24gYW50aWNvbi1maWx0ZXJgXG4gICAqL1xuICBpY29uPzogc3RyaW5nO1xuICAvKipcbiAgICog56Gu6K6k5oyJ6ZKu5paH5pys77yM6buY6K6kIGDnoa7orqRgXG4gICAqL1xuICBjb25maXJtVGV4dD86IHN0cmluZztcbiAgLyoqXG4gICAqIOa4hemZpOaMiemSruaWh+acrO+8jOm7mOiupCBg6YeN572uYFxuICAgKi9cbiAgY2xlYXJUZXh0Pzogc3RyaW5nO1xuICAvKipcbiAgICog5piv5ZCm5aSa6YCJ77yM6buY6K6kIGB0cnVlYFxuICAgKi9cbiAgbXVsdGlwbGU/OiBib29sZWFuO1xuICAvKipcbiAgICog6L+c56iL5pWw5o2u55qE6L+H5ruk5pe25ZCO56uv55u45a+55bqU55qES0VZ77yM6buY6K6k5L2/55SoIGBpbmRleGAg5bGe5oCnXG4gICAqIGBrZXk6ICduYW1lJ2Ag57uT5p6cIGA/bmFtZT0xJnBpPTFgXG4gICAqL1xuICBrZXk/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDov5znqIvmlbDmja7nmoTov4fmu6Tml7blkI7nq6/nm7jlr7nlupTnmoRWQUxVRVxuICAgKiAtIOm7mOiupOW9kyBgbXVsdGlwbGU6IHRydWVgIOaXtuS7peiLseaWh+mAl+WPt+aLvOaOpeeahOWtl+espuS4slxuICAgKiBAcmV0dXJuIOi/lOWbnuS4uiBPYmplY3Qg5a+56LGhXG4gICAqL1xuICByZU5hbWU/OiAobGlzdDogU1RDb2x1bW5GaWx0ZXJNZW51W10sIGNvbDogU1RDb2x1bW4pID0+IE9iamVjdDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtbkZpbHRlck1lbnUge1xuICAvKipcbiAgICog5paH5pysXG4gICAqL1xuICB0ZXh0OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDlgLxcbiAgICovXG4gIHZhbHVlPzogYW55O1xuICAvKipcbiAgICog5piv5ZCm6YCJ5LitXG4gICAqL1xuICBjaGVja2VkPzogYm9vbGVhbjtcbiAgLyoqIOadg+mZkO+8jOetieWQjCBgY2FuKClgIOWPguaVsOWAvCAqL1xuICBhY2w/OiBhbnk7XG5cbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uU2VsZWN0aW9uIHtcbiAgLyoqXG4gICAqIOmAieaLqemhueaYvuekuueahOaWh+Wtl1xuICAgKi9cbiAgdGV4dDogc3RyaW5nO1xuICAvKipcbiAgICog6YCJ5oup6aG554K55Ye75Zue6LCD77yM5YWB6K645a+55Y+C5pWwIGBkYXRhLmNoZWNrZWRgIOi/m+ihjOaTjeS9nFxuICAgKi9cbiAgc2VsZWN0OiAoZGF0YTogU1REYXRhW10pID0+IHZvaWQ7XG4gIC8qKiDmnYPpmZDvvIznrYnlkIwgYGNhbigpYCDlj4LmlbDlgLwgKi9cbiAgYWNsPzogYW55O1xufVxuXG4vKiog5b2TIGB0eXBlPXluYCDmnInmlYggKi9cbmV4cG9ydCBpbnRlcmZhY2UgU1RDb2x1bW5ZbiB7XG4gIC8qKlxuICAgKiDnnJ/lgLzmnaHku7bvvIzvvIjpu5jorqTvvJpgdHJ1ZWDvvIlcbiAgICovXG4gIHRydXRoPzogYW55O1xuICAvKipcbiAgICog5b6956ugIGB0cnVlYCDml7bmlofmnKzvvIzvvIjpu5jorqTvvJpg5pivYO+8iVxuICAgKi9cbiAgeWVzPzogc3RyaW5nO1xuICAvKipcbiAgICog5b6956ugIGBmYWxzZWAg5pe25paH5pys77yM77yI6buY6K6k77yaYOWQpmDvvIlcbiAgICovXG4gIG5vPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIOaMiemSrumFjee9rlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uQnV0dG9uIHtcbiAgLyoqXG4gICAqIOaWh+acrFxuICAgKi9cbiAgdGV4dDogc3RyaW5nO1xuICAvKipcbiAgICog5paH5pysIGkxOG5cbiAgICovXG4gIGkxOG4/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDmoLzlvI/ljJbmlofmnKzvvIzovoPpq5josIPnlKjpopHnjofvvIzor7fli7/ov4flpJrlpI3mnYLorqHnrpflhY3lvpfkuqfnlJ/mgKfog73pl67pophcbiAgICovXG4gIGZvcm1hdD86IChyZWNvcmQ6IGFueSwgYnRuOiBTVENvbHVtbkJ1dHRvbikgPT4gc3RyaW5nO1xuICAvKipcbiAgICog5oyJ6ZKu57G75Z6LXG4gICAqIC0gYG5vbmVgIOaXoOS7u+S9leS6kuWKqFxuICAgKiAtIGBkZWxgIOWIoOmZpO+8jOm7mOiupOW8gOWQryBgcG9wOiB0cnVlYFxuICAgKiAtIGBtb2RhbGAg5a+56K+d5qGG77yM6ZyA6KaB5oyH5a6aIGBjb21wb25lbnRgIOaJjeS8mueUn+aViFxuICAgKiAtIGBzdGF0aWNgIOmdmeaAgeWvueivneahhu+8jOmcgOimgeaMh+WumiBgY29tcG9uZW50YCDmiY3kvJrnlJ/mlYhcbiAgICogLSBgZHJhd2VyYCDmir3lsYnvvIzpnIDopoHmjIflrpogYGNvbXBvbmVudGAg5omN5Lya55Sf5pWIXG4gICAqIC0gYGxpbmtgIOmTvuaOpe+8jOW9kyBgY2xpY2tgIOi/lOWbnuWtl+espuS4suaXtuiHquWKqOiwg+eUqCBgbmF2aWdhdGVCeVVybGAg5a+86IiqXG4gICAqL1xuICB0eXBlPzogJ25vbmUnIHwgJ2RlbCcgfCAnbW9kYWwnIHwgJ3N0YXRpYycgfCAnZHJhd2VyJyB8ICdsaW5rJztcbiAgLyoqXG4gICAqIOeCueWHu+Wbnuiwg1xuICAgKiAtIEZ1bmN0aW9uXG4gICAqICAtIGB0eXBlPW1vZGFsYCDlj6rkvJrlnKjlvZPmnInkvKDlm57lgLzml7bmiY3kvJrop6blj5Hlm57osINcbiAgICogLSByZWxvYWTvvJrph43mlrDliLfmlrDlvZPliY3pobVcbiAgICogLSBsb2Fk77ya6YeN5paw5Yqg6L295pWw5o2u77yM5bm26YeN572u6aG156CB5Li677yaYDFgXG4gICAqL1xuICBjbGljaz86XG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2xvYWQnXG4gICAgfCAoKHJlY29yZDogYW55LCBtb2RhbD86IGFueSwgaW5zdGFuY2U/OiBTVENvbXBvbmVudCkgPT4gYW55KTtcbiAgLyoqXG4gICAqIOaYr+WQpumcgOimgeawlOazoeehruiupOahhlxuICAgKi9cbiAgcG9wPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOawlOazoeehruiupOahhuWGheWuue+8jOm7mOiupCBg56Gu6K6k5Yig6Zmk5ZCX77yfYFxuICAgKi9cbiAgcG9wVGl0bGU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDlr7nor53moYblj4LmlbBcbiAgICovXG4gIG1vZGFsPzogU1RDb2x1bW5CdXR0b25Nb2RhbDtcbiAgLyoqXG4gICAqIOaKveWxieWPguaVsFxuICAgKi9cbiAgZHJhd2VyPzogU1RDb2x1bW5CdXR0b25EcmF3ZXI7XG4gIC8qKlxuICAgKiDkuIvmi4noj5zljZXvvIzlvZPlrZjlnKjml7bku6UgYGRyb3Bkb3duYCDlvaLlvI/muLLmn5NcbiAgICogLSDlj6rmlK/mjIHkuIDnuqdcbiAgICovXG4gIGNoaWxkcmVuPzogU1RDb2x1bW5CdXR0b25bXTtcbiAgLyoqXG4gICAqIOadg+mZkO+8jOetieWQjCBgY2FuKClgIOWPguaVsOWAvFxuICAgKi9cbiAgYWNsPzogYW55O1xuICAvKipcbiAgICog5p2h5Lu26KGo6L6+5byP77yM6L6D6auY6LCD55So6aKR546H77yM6K+35Yu/6L+H5aSa5aSN5p2C6K6h566X5YWN5b6X5Lqn55Sf5oCn6IO96Zeu6aKYXG4gICAqL1xuICBpaWY/OiAoXG4gICAgaXRlbTogYW55LFxuICAgIGJ0bjogU1RDb2x1bW5CdXR0b24sXG4gICAgY29sdW1uOiBTVENvbHVtbixcbiAgKSA9PiBib29sZWFuO1xuXG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtbkJ1dHRvbk1vZGFsIGV4dGVuZHMgTW9kYWxIZWxwZXJPcHRpb25zIHtcbiAgLyoqXG4gICAqIOWvueivneahhue7hOS7tuWvueixoe+8jOWKoeW/heWcqCBgZW50cnlDb21wb25lbnRzYCDms6jlhoxcbiAgICovXG4gIGNvbXBvbmVudD86IGFueTtcbiAgLyoqXG4gICAqIOWvueivneahhuWPguaVsFxuICAgKi9cbiAgcGFyYW1zPzogKHJlY29yZDogYW55KSA9PiBPYmplY3Q7XG4gIC8qKlxuICAgKiDlr7nor53moYbnm67moIfnu4Tku7bnmoTmjqXmlLblj4LmlbDlkI3vvIzpu5jorqTvvJpgcmVjb3JkYFxuICAgKi9cbiAgcGFyYW1zTmFtZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtbkJ1dHRvbk1vZGFsQ29uZmlnIHtcbiAgLyoqXG4gICAqIOaMh+WumuaooeaAgeahhuebruagh+e7hOS7tueahOaOpeaUtuWPguaVsOWQje+8jOm7mOiupO+8mmByZWNvcmRgXG4gICAqL1xuICBwYXJhbXNOYW1lPzogc3RyaW5nO1xuICAvKiog5aSn5bCP77yb5L6L5aaC77yabGfjgIE2MDDvvIzpu5jorqTvvJpgbGdgICovXG4gIHNpemU/OiAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnIHwgJycgfCBudW1iZXI7XG4gIC8qKiDlr7nor53moYYgW01vZGFsT3B0aW9uc0ZvclNlcnZpY2VdKGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL2NvbXBvbmVudHMvbW9kYWwvbnotbW9kYWwudHlwZS50cykg5Y+C5pWwICovXG4gIG1vZGFsT3B0aW9ucz86IE1vZGFsT3B0aW9uc0ZvclNlcnZpY2U7XG4gIC8qKiDmmK/lkKbnsr7lh4bvvIjpu5jorqTvvJpgdHJ1ZWDvvInvvIzoi6Xov5Tlm57lgLzpnZ7nqbrlgLzvvIhgbnVsbGDmiJZgdW5kZWZpbmVkYO+8ieinhuS4uuaIkOWKn++8jOWQpuWImeinhuS4uumUmeivryAqL1xuICBleGFjdD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RDb2x1bW5CdXR0b25EcmF3ZXIgZXh0ZW5kcyBEcmF3ZXJIZWxwZXJPcHRpb25zIHtcbiAgLyoqXG4gICAqIOagh+mimFxuICAgKi9cbiAgdGl0bGU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDmir3lsYnnu4Tku7blr7nosaHvvIzliqHlv4XlnKggYGVudHJ5Q29tcG9uZW50c2Ag5rOo5YaMXG4gICAqL1xuICBjb21wb25lbnQ/OiBhbnk7XG4gIC8qKlxuICAgKiDmir3lsYnlj4LmlbBcbiAgICovXG4gIHBhcmFtcz86IChyZWNvcmQ6IGFueSkgPT4gT2JqZWN0O1xuICAvKipcbiAgICog5oq95bGJ55uu5qCH57uE5Lu255qE5o6l5pS25Y+C5pWw5ZCN77yM6buY6K6k77yaYHJlY29yZGBcbiAgICovXG4gIHBhcmFtc05hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RDb2x1bW5CdXR0b25EcmF3ZXJDb25maWcge1xuICAvKipcbiAgICog5oq95bGJ55uu5qCH57uE5Lu255qE5o6l5pS25Y+C5pWw5ZCN77yM6buY6K6k77yaYHJlY29yZGBcbiAgICovXG4gIHBhcmFtc05hbWU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDlpKflsI/vvJvkvovlpoLvvJpsZ+OAgTYwMO+8jOm7mOiupO+8mmBtZGBcbiAgICogXG4gICAqIHwg57G75Z6LIHwg6buY6K6k5aSn5bCPIHxcbiAgICogfCAtLS0gfCAtLS0tLS0gfFxuICAgKiB8IGBzbWAgfCBgMzAwYCB8XG4gICAqIHwgYG1kYCB8IGA2MDBgIHxcbiAgICogfCBgbGdgIHwgYDkwMGAgfFxuICAgKiB8IGB4bGAgfCBgMTIwMGAgfFxuICAgKiBcbiAgICogPiDku6XkuIrlgLzvvIzlj6/pgJrov4fopobnm5bnm7jlupTnmoRMRVNT5Y+C5pWw6Ieq6KGM6LCD5pW0XG4gICAqL1xuICBzaXplPzogJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8IG51bWJlcjtcbiAgLyoqXG4gICAqIOaYr+WQpuWMheWQq+W6lemDqOW3peWFt+adoe+8jOm7mOiupO+8mmB0cnVlYFxuICAgKi9cbiAgZm9vdGVyPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOW6lemDqOW3peWFt+adoemrmOW6pu+8jOm7mOiupO+8mmA1NWBcbiAgICovXG4gIGZvb3RlckhlaWdodD86IG51bWJlcjtcbiAgLyoqIOaKveWxiSBbTnpEcmF3ZXJPcHRpb25zXShodHRwczovL25nLmFudC5kZXNpZ24vY29tcG9uZW50cy9kcmF3ZXIvemgjbnpkcmF3ZXJvcHRpb25zKSDlj4LmlbAgKi9cbiAgZHJhd2VyT3B0aW9ucz86IE56RHJhd2VyT3B0aW9ucztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVFJlcVJlTmFtZVR5cGUge1xuICBwaT86IHN0cmluZztcbiAgcHM/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RSZXNSZU5hbWVUeXBlIHtcbiAgdG90YWw/OiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgbGlzdD86IHN0cmluZyB8IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNURXhwb3J0T3B0aW9ucyB7XG4gIF9kPzogYW55W107XG4gIF9jPzogU1RDb2x1bW5bXTtcbiAgLyoqIOW3peS9nOa6peWQjSAqL1xuICBzaGVldG5hbWU/OiBzdHJpbmc7XG4gIC8qKiDmlofku7blkI0gKi9cbiAgZmlsZW5hbWU/OiBzdHJpbmc7XG4gIC8qKiB0cmlnZ2VycyB3aGVuIHNhdmVhcyAqL1xuICBjYWxsYmFjaz86ICh3YjogYW55KSA9PiB2b2lkO1xufVxuXG4vKipcbiAqIOWkmuaOkuW6j+ebuOWQjOaOkuW6jyBrZXkg5pe25ZCI5bm26KeE5YiZXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU1RNdWx0aVNvcnQge1xuICAvKiog6K+35rGC5Y+C5pWw5ZCN77yM6buY6K6k77yaYHNvcnRgICovXG4gIGtleT86IHN0cmluZztcbiAgLyoqIOS4jeWQjOWxnuaAp+mXtOWIhumalOespu+8jOm7mOiupO+8mmAtYCAqL1xuICBzZXBhcmF0b3I/OiBzdHJpbmc7XG4gIC8qKiDliJflkI3kuI7nirbmgIHpl7TliIbpmpTnrKbvvIzpu5jorqTvvJpgLmAgKi9cbiAgbmFtZVNlcGFyYXRvcj86IHN0cmluZztcbn1cblxuLyoqXG4gKiDlvr3moIfkv6Hmga9cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtbkJhZGdlIHtcbiAgW2tleTogbnVtYmVyXTogU1RDb2x1bW5CYWRnZVZhbHVlO1xuICBba2V5OiBzdHJpbmddOiBTVENvbHVtbkJhZGdlVmFsdWU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RDb2x1bW5CYWRnZVZhbHVlIHtcbiAgLyoqXG4gICAqIOaWh+acrFxuICAgKi9cbiAgdGV4dD86IHN0cmluZztcbiAgLyoqXG4gICAqIOW+veagh+minOiJsuWAvFxuICAgKi9cbiAgY29sb3I/OiAnc3VjY2VzcycgfCAncHJvY2Vzc2luZycgfCAnZGVmYXVsdCcgfCAnZXJyb3InIHwgJ3dhcm5pbmcnO1xufVxuXG4vKipcbiAqIOagh+etvuS/oeaBr1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uVGFnIHtcbiAgW2tleTogbnVtYmVyXTogU1RDb2x1bW5UYWdWYWx1ZTtcbiAgW2tleTogc3RyaW5nXTogU1RDb2x1bW5UYWdWYWx1ZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtblRhZ1ZhbHVlIHtcbiAgLyoqXG4gICAqIOaWh+acrFxuICAgKi9cbiAgdGV4dD86IHN0cmluZztcbiAgLyoqXG4gICAqIOminOiJsuWAvO+8jOaUr+aMgemihOiuvuWSjOiJsuWAvFxuICAgKiAtIOmihOiuvu+8mmdlZWtibHVlLGJsdWUscHVycGxlLHN1Y2Nlc3MscmVkLHZvbGNhbm8sb3JhbmdlLGdvbGQsbGltZSxncmVlbixjeWFuXG4gICAqIC0g6Imy5YC877yaI2Y1MCwjZmYwXG4gICAqL1xuICBjb2xvcj86XG4gICAgfCAnZ2Vla2JsdWUnXG4gICAgfCAnYmx1ZSdcbiAgICB8ICdwdXJwbGUnXG4gICAgfCAnc3VjY2VzcydcbiAgICB8ICdyZWQnXG4gICAgfCAndm9sY2FubydcbiAgICB8ICdvcmFuZ2UnXG4gICAgfCAnZ29sZCdcbiAgICB8ICdsaW1lJ1xuICAgIHwgJ2dyZWVuJ1xuICAgIHwgJ2N5YW4nXG4gICAgfCBzdHJpbmc7XG59XG5cbmV4cG9ydCB0eXBlIFNUQ2hhbmdlVHlwZSA9ICdwaScgfCAncHMnIHwgJ2NoZWNrYm94JyB8ICdyYWRpbycgfCAnc29ydCcgfCAnZmlsdGVyJyB8ICdjbGljaycgfCAnZGJsQ2xpY2snO1xuXG4vKipcbiAqIOWbnuiwg+aVsOaNrlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNUQ2hhbmdlIHtcbiAgLyoqXG4gICAqIOWbnuiwg+exu+Wei1xuICAgKi9cbiAgdHlwZTogU1RDaGFuZ2VUeXBlO1xuICAvKipcbiAgICog5b2T5YmN6aG156CBXG4gICAqL1xuICBwaTogbnVtYmVyO1xuICAvKipcbiAgICog5q+P6aG15pWw6YePXG4gICAqL1xuICBwczogbnVtYmVyO1xuICAvKipcbiAgICog5pWw5o2u5oC76YePXG4gICAqL1xuICB0b3RhbDogbnVtYmVyO1xuICAvKipcbiAgICogYGNoZWNrYm94YCDlj4LmlbBcbiAgICovXG4gIGNoZWNrYm94PzogU1REYXRhW107XG4gIC8qKlxuICAgKiBgcmFkaW9gIOWPguaVsFxuICAgKi9cbiAgcmFkaW8/OiBTVERhdGE7XG4gIC8qKlxuICAgKiDmjpLluo/lj4LmlbBcbiAgICovXG4gIHNvcnQ/OiBTVENoYW5nZVNvcnQ7XG4gIC8qKlxuICAgKiDov4fmu6Tlj4LmlbBcbiAgICovXG4gIGZpbHRlcj86IFNUQ29sdW1uO1xuICAvKipcbiAgICog6KGM54K55Ye75oiW5Y+M5Ye75Y+C5pWwXG4gICAqL1xuICBjbGljaz86IFNUQ2hhbmdlUm93Q2xpY2s7XG59XG5cbi8qKiDooYzljZXlh7vlj4LmlbAgKi9cbmV4cG9ydCBpbnRlcmZhY2UgU1RDaGFuZ2VTb3J0IHtcbiAgdmFsdWU/OiAnYXNjZW5kJyB8ICdkZXNjZW5kJztcbiAgbWFwPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgY29sdW1uPzogU1RDb2x1bW47XG59XG5cbi8qKiDooYzljZXlh7vlj4LmlbAgKi9cbmV4cG9ydCBpbnRlcmZhY2UgU1RDaGFuZ2VSb3dDbGljayB7XG4gIGU/OiBFdmVudDtcbiAgaXRlbT86IFNURGF0YTtcbiAgaW5kZXg/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RFcnJvciB7XG4gIHR5cGU/OiAncmVxJztcbiAgZXJyb3I/OiBhbnk7XG59XG4iXX0=