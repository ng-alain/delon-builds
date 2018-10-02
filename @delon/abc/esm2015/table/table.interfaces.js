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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuaW50ZXJmYWNlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvdGFibGUvIiwic291cmNlcyI6WyJ0YWJsZS5pbnRlcmZhY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTVENvbXBvbmVudCB9IGZyb20gJy4vdGFibGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTW9kYWxIZWxwZXJPcHRpb25zLCBEcmF3ZXJIZWxwZXJPcHRpb25zIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcclxuaW1wb3J0IHsgTW9kYWxPcHRpb25zRm9yU2VydmljZSwgTnpEcmF3ZXJPcHRpb25zIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNUUmVxIHtcclxuICAvKipcclxuICAgKiDpop3lpJbor7fmsYLlj4LmlbDvvIzpu5jorqToh6rliqjpmYTliqAgYHBpYOOAgWBwc2Ag6IezVVJMXHJcbiAgICogLSBgeyBzdGF0dXM6ICduZXcnIH1gID0+IGB1cmw/cGk9MSZwcz0xMCZzdGF0dXM9bmV3YFxyXG4gICAqL1xyXG4gIHBhcmFtcz86IGFueTtcclxuICAvKiog6K+35rGC5pa55rOV77yM6buY6K6k77yaYEdFVGAgKi9cclxuICBtZXRob2Q/OiBzdHJpbmc7XHJcbiAgLyoqIOivt+axguS9kyBgYm9keWAgKi9cclxuICBib2R5PzogYW55O1xyXG4gIC8qKiDor7fmsYLkvZMgYEhlYWRlcmAgKi9cclxuICBoZWFkZXJzPzogYW55O1xyXG4gIC8qKlxyXG4gICAqIOmHjeWRveWQjeWPguaVsCBgcGlg44CBYHBzYO+8jOm7mOiupO+8mmB7IHBpOiAncGknLCBwczogJ3BzJyB9YFxyXG4gICAqIC0gYHsgcGk6ICdQYWdlJyB9YCA9PiBgcGlgIOS8muiiq+abv+aNouaIkCBQYWdlXHJcbiAgICovXHJcbiAgcmVOYW1lPzogU1RSZXFSZU5hbWVUeXBlO1xyXG4gIC8qKlxyXG4gICAqIOaYr+WQpuWwhuivt+axguaJgOacieWPguaVsOaVsOaNrumDveaUvuWFpSBgYm9keWAg5b2T5Lit77yIYHVybGAg5Zyw5Z2A5pys6Lqr5Y+C5pWw6Zmk5aSW77yJ77yM5LuF5b2TIGBtZXRob2Q6ICdQT1NUJ2Ag5pe25pyJ5pWI77yM6buY6K6k77yaYGZhbHNlYFxyXG4gICAqL1xyXG4gIGFsbEluQm9keT86IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU1RMb2FkT3B0aW9ucyB7XHJcbiAgLyoqIOaYr+WQpuWQiOW5tu+8jOm7mOiupO+8mmBmYWxzZWAgKi9cclxuICBtZXJnZT86IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU1RSZXMge1xyXG4gIC8qKlxyXG4gICAqIOmHjeWRveWQjei/lOWbnuWPguaVsCBgdG90YWxg44CBYGxpc3RgXHJcbiAgICogLSBgeyB0b3RhbDogJ1RvdGFsJyB9YCA9PiBUb3RhbCDkvJrooqvlvZPkvZwgYHRvdGFsYFxyXG4gICAqL1xyXG4gIHJlTmFtZT86IFNUUmVzUmVOYW1lVHlwZTtcclxuICAvKipcclxuICAgKiDmlbDmja7pooTlpITnkIZcclxuICAgKi9cclxuICBwcm9jZXNzPzogKGRhdGE6IFNURGF0YVtdKSA9PiBTVERhdGFbXTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTVFBhZ2Uge1xyXG4gIC8qKlxyXG4gICAqIOWJjeerr+WIhumhte+8jOW9kyBgZGF0YWAg5Li6YGFueVtdYCDmiJYgYE9ic2VydmFibGU8YW55W10+YCDmnInmlYjvvIzpu5jorqTvvJpgdHJ1ZWBcclxuICAgKiAtIGB0cnVlYCDnlLEgYHN0YCDmoLnmja4gYGRhdGFgIOmVv+W6puWPl+aOp+WIhumhte+8jOWMheaLrO+8muaOkuW6j+OAgei/h+a7pOetiVxyXG4gICAqIC0gYGZhbHNlYCDnlLHnlKjmiLfpgJrov4cgYHRvdGFsYCDlkowgYGRhdGFgIOWPguaVsOWPl+aOp+WIhumhte+8jOW5tue7tOaKpCBgKGNoYW5nZSlgIOW9k+WIhumhteWPmOabtOaXtumHjeaWsOWKoOi9veaVsOaNrlxyXG4gICAqL1xyXG4gIGZyb250PzogYm9vbGVhbjtcclxuICAvKipcclxuICAgKiDlkI7nq6/liIbpobXmmK/lkKbph4fnlKhgMGDln7rntKLlvJXvvIzlj6rlnKhgZGF0YWDnsbvlnovkuLpgc3RyaW5nYOaXtuacieaViO+8jOm7mOiupO+8mmBmYWxzZWBcclxuICAgKi9cclxuICB6ZXJvSW5kZXhlZD86IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICog5YiG6aG15pa55ZCR77yM6buY6K6k77yaYHJpZ2h0YFxyXG4gICAqL1xyXG4gIHBsYWNlbWVudD86ICdsZWZ0JyB8ICdjZW50ZXInIHwgJ3JpZ2h0JztcclxuICAvKipcclxuICAgKiDmmK/lkKbmmL7npLrliIbpobXlmajvvIzpu5jorqTvvJpgdHJ1ZWBcclxuICAgKi9cclxuICBzaG93PzogYm9vbGVhbjtcclxuICAvKipcclxuICAgKiDmmK/lkKbmmL7npLrliIbpobXlmajkuK3mlLnlj5jpobXmlbDvvIzpu5jorqTvvJpgZmFsc2VgXHJcbiAgICovXHJcbiAgc2hvd1NpemU/OiBib29sZWFuO1xyXG4gIC8qKlxyXG4gICAqIOWIhumhteWZqOS4reavj+mhteaYvuekuuadoeebruaVsOS4i+aLieahhuWAvO+8jOm7mOiupO+8mmBbMTAsIDIwLCAzMCwgNDAsIDUwXWBcclxuICAgKi9cclxuICBwYWdlU2l6ZXM/OiBudW1iZXJbXTtcclxuICAvKipcclxuICAgKiDmmK/lkKbmmL7npLrliIbpobXlmajkuK3lv6vpgJ/ot7PovazvvIzpu5jorqTvvJpgZmFsc2VgXHJcbiAgICovXHJcbiAgc2hvd1F1aWNrSnVtcGVyPzogYm9vbGVhbjtcclxuICAvKipcclxuICAgKiDmmK/lkKbmmL7npLrmgLvmlbDmja7ph49cclxuICAgKiAtIGBib29sZWFuYCDnsbvlnovmmL7npLrkuI7lkKbvvIzpu5jorqTmqKHmnb/vvJpg5YWxIHt7dG90YWx9fSDmnaFgXHJcbiAgICogLSBgc3RyaW5nYCDoh6rlrprkuYnmqKHmnb/vvIzmqKHmnb/lj5jph4/vvJpcclxuICAgKiAgLSBge3t0b3RhbH19YCDooajnpLrmlbDmja7mgLvph49cclxuICAgKiAgLSBge3tyYW5nZVswXX19YCDooajnpLrlvZPliY3pobXlvIDlp4vmlbDph4/lgLxcclxuICAgKiAgLSBge3tyYW5nZVsxXX19YCDooajnpLrlvZPliY3pobXnu5PmnZ/mlbDph4/lgLxcclxuICAgKi9cclxuICB0b3RhbD86IHN0cmluZyB8IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICog5pWw5o2u5Y+Y5pu05ZCO5piv5ZCm5L+d55WZ5Zyo5pWw5o2u5Y+Y5pu05YmN55qE6aG156CB77yM6buY6K6k77yaYHRydWVgXHJcbiAgICogQGRlcHJlY2F0ZWRcclxuICAgKi9cclxuICBpbmRleFJlc2V0PzogYm9vbGVhbjtcclxuICAvKipcclxuICAgKiDliIfmjaLliIbpobXml7bov5Tlm57pobbpg6jvvIzpu5jorqTvvJpgdHJ1ZWBcclxuICAgKi9cclxuICB0b1RvcD86IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICog6L+U5Zue6aG26YOo5YGP56e75YC877yM6buY6K6k77yaYDEwMGBcclxuICAgKi9cclxuICB0b1RvcE9mZnNldD86IG51bWJlcjtcclxufVxyXG5cclxuLyoqXHJcbiAqIOaVsOaNrua6kFxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBTVERhdGEge1xyXG4gIC8qKlxyXG4gICAqIOmAieaLqeahhuaIluWNlemAieahhueKtuaAgeWAvFxyXG4gICAqL1xyXG4gIGNoZWNrZWQ/OiBib29sZWFuO1xyXG4gIC8qKlxyXG4gICAqIOmAieaLqeahhuaIluWNlemAieahhiBgZGlzYWJsZWRgIOWAvFxyXG4gICAqL1xyXG4gIGRpc2FibGVkPzogYm9vbGVhbjtcclxuICAvKipcclxuICAgKiDmmK/lkKblsZXlvIDnirbmgIFcclxuICAgKi9cclxuICBleHBhbmQ/OiBib29sZWFuO1xyXG5cclxuICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDliJfmj4/ov7BcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgU1RDb2x1bW4ge1xyXG4gIC8qKlxyXG4gICAqIOWIl+agh+mimFxyXG4gICAqL1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICog5YiX5qCH6aKYIGkxOG5cclxuICAgKi9cclxuICBpMThuPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIOWIl+aVsOaNruWcqOaVsOaNrumhueS4reWvueW6lOeahCBrZXnvvIzmlK/mjIEgYGEuYi5jYCDnmoTltYzlpZflhpnms5XvvIzkvovlpoLvvJpcclxuICAgKiAtIGBpZGBcclxuICAgKiAtIGBwcmljZS5tYXJrZXRgXHJcbiAgICogLSBgWyAncHJpY2UnLCAnbWFya2V0JyBdYFxyXG4gICAqL1xyXG4gIGluZGV4Pzogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgLyoqXHJcbiAgICog57G75Z6LXHJcbiAgICogLSBgY2hlY2tib3hgIOWkmumAiVxyXG4gICAqIC0gYHJhZGlvYCDljZXpgIlcclxuICAgKiAtIGBsaW5rYCDpk77mjqXvvIzliqHlv4XmjIflrpogYGNsaWNrYFxyXG4gICAqIC0gYGJhZGdlYCBb5b695qCHXShodHRwczovL25nLmFudC5kZXNpZ24vY29tcG9uZW50cy9iYWRnZS96aCnvvIzliqHlv4XmjIflrpogYGJhZGdlYCDlj4LmlbDphY3nva7lvr3moIflr7nlupTlgLxcclxuICAgKiAtIGB0YWdgIFvmoIfnrb5dKGh0dHBzOi8vbmcuYW50LmRlc2lnbi9jb21wb25lbnRzL3RhZy96aCnvvIzliqHlv4XmjIflrpogYHRhZ2Ag5Y+C5pWw6YWN572u5qCH562+5a+55bqU5YC8XHJcbiAgICogLSBgaW1nYCDlm77niYfkuJTlsYXkuK0o6IulIGBjbGFzc05hbWVgIOWtmOWcqOWImeS8mOWFiClcclxuICAgKiAtIGBudW1iZXJgIOaVsOWtl+S4lOWxheWPsyjoi6UgYGNsYXNzTmFtZWAg5a2Y5Zyo5YiZ5LyY5YWIKVxyXG4gICAqIC0gYGN1cnJlbmN5YCDotKfluIHkuJTlsYXlj7Mo6IulIGBjbGFzc05hbWVgIOWtmOWcqOWImeS8mOWFiClcclxuICAgKiAtIGBkYXRlYCDml6XmnJ/moLzlvI/kuJTlsYXkuK0o6IulIGBjbGFzc05hbWVgIOWtmOWcqOWImeS8mOWFiCnvvIzkvb/nlKggYGRhdGVGb3JtYXRgIOiHquWumuS5ieagvOW8j1xyXG4gICAqIC0gYHluYCDlsIZgYm9vbGVhbmDnsbvlnovlvr3nq6DljJYgW2RvY3VtZW50XShodHRwczovL25nLWFsYWluLmNvbS9kb2NzL2RhdGEtcmVuZGVyI3luKVxyXG4gICAqL1xyXG4gIHR5cGU/OlxyXG4gICAgfCAnY2hlY2tib3gnXHJcbiAgICB8ICdsaW5rJ1xyXG4gICAgfCAnYmFkZ2UnXHJcbiAgICB8ICd0YWcnXHJcbiAgICB8ICdyYWRpbydcclxuICAgIHwgJ2ltZydcclxuICAgIHwgJ2N1cnJlbmN5J1xyXG4gICAgfCAnbnVtYmVyJ1xyXG4gICAgfCAnZGF0ZSdcclxuICAgIHwgJ3luJztcclxuICAvKipcclxuICAgKiDpk77mjqXlm57osIPvvIzoi6Xov5Tlm57kuIDkuKrlrZfnrKbkuLLooajnpLrlr7zoiKpVUkzkvJroh6rliqjop6blj5EgYHJvdXRlci5uYXZpZ2F0ZUJ5VXJsYFxyXG4gICAqL1xyXG4gIGNsaWNrPzogKHJlY29yZDogYW55LCBpbnN0YW5jZT86IFNUQ29tcG9uZW50KSA9PiBhbnk7XHJcbiAgLyoqXHJcbiAgICog5oyJ6ZKu57uEXHJcbiAgICovXHJcbiAgYnV0dG9ucz86IFNUQ29sdW1uQnV0dG9uW107XHJcbiAgLyoqXHJcbiAgICog6Ieq5a6a5LmJ5riy5p+TSURcclxuICAgKiBAZXhhbXBsZVxyXG4gICAqIDxuZy10ZW1wbGF0ZSBzdC1yb3c9XCJjdXN0b21cIiBsZXQtaXRlbSBsZXQtaW5kZXg9XCJpbmRleFwiIGxldC1jb2x1bW49XCJjb2x1bW5cIj5cclxuICAgKiAge3sgYy50aXRsZSB9fVxyXG4gICAqIDwvbmctdGVtcGxhdGU+XHJcbiAgICovXHJcbiAgcmVuZGVyPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIOagh+mimOiHquWumuS5iea4suafk0lEXHJcbiAgICogQGV4YW1wbGVcclxuICAgKiA8bmctdGVtcGxhdGUgc3Qtcm93PVwiY3VzdG9tXCIgdHlwZT1cInRpdGxlXCIgbGV0LWM+XHJcbiAgICogIHt7IGl0ZW0gfCBqc29uIH19XHJcbiAgICogPC9uZy10ZW1wbGF0ZT5cclxuICAgKi9cclxuICByZW5kZXJUaXRsZT86IHN0cmluZztcclxuICAvKipcclxuICAgKiDliJflrr3vvIjmlbDlrZflnovooajnpLogYHB4YCDlgLzvvInvvIzkvovlpoLvvJpgMTAwYOOAgWAxMCVg44CBYDEwMHB4YFxyXG4gICAqXHJcbiAgICogKirms6jmhI/vvJoqKiDlm7rlrprliJfkuI3mlK/mjIHnmb7liIbmr5RcclxuICAgKi9cclxuICB3aWR0aD86IHN0cmluZyB8IG51bWJlcjtcclxuICAvKipcclxuICAgKiDmjpLluo/phY3nva7pobnvvIzov5znqIvmlbDmja7phY3nva4qKuS8mOWFiCoq6KeE5YiZ77yaXHJcbiAgICogLSBgdHJ1ZWAg6KGo56S65YWB6K645o6S5bqPXHJcbiAgICogLSBgc3RyaW5nYCDooajnpLrov5znqIvmlbDmja7mjpLluo/nm7jlr7nlupQgYGtleWAg5YC8XHJcbiAgICovXHJcbiAgc29ydD86IHRydWUgfCBzdHJpbmcgfCBTVENvbHVtblNvcnQ7XHJcbiAgLyoqXHJcbiAgICog6L+H5ruk6YWN572u6aG5XHJcbiAgICovXHJcbiAgZmlsdGVyPzogU1RDb2x1bW5GaWx0ZXI7XHJcbiAgLyoqXHJcbiAgICog5qC85byP5YyW5YiX5YC8XHJcbiAgICovXHJcbiAgZm9ybWF0PzogRnVuY3Rpb247XHJcbiAgLyoqXHJcbiAgICog6Ieq5a6a5LmJ5YWoL+WPjemAiemAieaLqemhuVxyXG4gICAqL1xyXG4gIHNlbGVjdGlvbnM/OiBTVENvbHVtblNlbGVjdGlvbltdO1xyXG4gIC8qKlxyXG4gICAqIOWIlyBgY2xhc3NgIOWxnuaAp+WAvO+8iOazqO+8muaXoOmhuyBgLmAg54K577yJ77yM5L6L5aaC77yaXHJcbiAgICogLSBgdGV4dC1jZW50ZXJgIOWxheS4rVxyXG4gICAqIC0gYHRleHQtcmlnaHRgIOWxheWPs1xyXG4gICAqIC0gYHRleHQtc3VjY2Vzc2Ag5oiQ5Yqf6ImyXHJcbiAgICogLSBgdGV4dC1kYW5nZXJgIOW8guW4uOiJslxyXG4gICAqL1xyXG4gIGNsYXNzTmFtZT86IHN0cmluZztcclxuICAvKipcclxuICAgKiDlkIjlubbliJdcclxuICAgKi9cclxuICBjb2xTcGFuPzogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIOaVsOWtl+agvOW8j++8jGB0eXBlPW51bWJlcmAg5pyJ5pWIXHJcbiAgICovXHJcbiAgbnVtYmVyRGlnaXRzPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIOaXpeacn+agvOW8j++8jGB0eXBlPWRhdGVgIOacieaViO+8jO+8iOm7mOiupO+8mmBZWVlZLU1NLUREIEhIOm1tYO+8iVxyXG4gICAqL1xyXG4gIGRhdGVGb3JtYXQ/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICog5b2TIGB0eXBlPXluYCDmnInmlYhcclxuICAgKi9cclxuICB5bj86IFNUQ29sdW1uWW47XHJcbiAgLyoqXHJcbiAgICog5piv5ZCm5YWB6K645a+85Ye677yM6buY6K6kIGB0cnVlYFxyXG4gICAqL1xyXG4gIGV4cG9ydGVkPzogYm9vbGVhbjtcclxuICAvKiog5p2D6ZmQ77yM562J5ZCMIGBjYW4oKWAg5Y+C5pWw5YC8ICovXHJcbiAgYWNsPzogYW55O1xyXG4gIC8qKiDlvZPkuI3lrZjlnKjmlbDmja7ml7bku6Xpu5jorqTlgLzmm7/ku6MgKi9cclxuICBkZWZhdWx0Pzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIOWbuuWumuWJjeWQjuWIl++8jOW9k+aMh+WumuaXtuWKoeW/heaMh+WumiBgd2lkdGhgIOWQpuWImeinhuS4uuaXoOaViO+8jOacieiLpeW5siAqKuazqOaEj++8mioqIOmhue+8mlxyXG4gICAqXHJcbiAgICogLSDoi6XliJflpLTkuI7lhoXlrrnkuI3lr7npvZDmiJblh7rnjrDliJfph43lpI3vvIzor7fmjIflrprliJfnmoTlrr3luqYgYHdpZHRoYFxyXG4gICAqIC0g5bu66K6u5oyH5a6aIGBzY3JvbGwueGAg5Li65aSn5LqO6KGo5qC85a695bqm55qE5Zu65a6a5YC85oiW55m+5YiG5q+U44CC5rOo5oSP77yM5LiU6Z2e5Zu65a6a5YiX5a695bqm5LmL5ZKM5LiN6KaB6LaF6L+HIGBzY3JvbGwueGBcclxuICAgKi9cclxuICBmaXhlZD86ICdsZWZ0JyB8ICdyaWdodCc7XHJcbiAgLyoqXHJcbiAgICog5b695qCH6YWN572u6aG5XHJcbiAgICovXHJcbiAgYmFkZ2U/OiBTVENvbHVtbkJhZGdlO1xyXG4gIC8qKlxyXG4gICAqIOagh+etvumFjee9rumhuVxyXG4gICAqL1xyXG4gIHRhZz86IFNUQ29sdW1uVGFnO1xyXG5cclxuICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU1RDb2x1bW5Tb3J0IHtcclxuICAvKipcclxuICAgKiDmjpLluo/nmoTpu5jorqTlj5fmjqflsZ7mgKdcclxuICAgKi9cclxuICBkZWZhdWx0PzogJ2FzY2VuZCcgfCAnZGVzY2VuZCc7XHJcbiAgLyoqXHJcbiAgICog5pys5Zyw5pWw5o2u55qE5o6S5bqP5Ye95pWw77yM5L2/55So5LiA5Liq5Ye95pWwKOWPguiAgyBbQXJyYXkuc29ydF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvc29ydCkg55qEIGNvbXBhcmVGdW5jdGlvbilcclxuICAgKi9cclxuICBjb21wYXJlPzogKGE6IGFueSwgYjogYW55KSA9PiBudW1iZXI7XHJcbiAgLyoqXHJcbiAgICog6L+c56iL5pWw5o2u55qE5o6S5bqP5pe25ZCO56uv55u45a+55bqU55qES0VZ77yM6buY6K6k5L2/55SoIGBpbmRleGAg5bGe5oCnXHJcbiAgICogLSDoi6UgYG11bHRpU29ydDogZmFsc2VgIOaXtu+8mmBrZXk6ICduYW1lJyA9PiA/bmFtZT0xJnBpPTFgXHJcbiAgICogLSDoi6UgYG11bHRpU29ydDogdHJ1ZWAg5YWB6K645aSa5Liq5o6S5bqPIGtleSDlrZjlnKjvvIzmiJbkvb/nlKggYFNUTXVsdGlTb3J0YCDmjIflrprlpJrliJfmjpLluo9rZXnlkIjlubbop4TliJlcclxuICAgKi9cclxuICBrZXk/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICog6L+c56iL5pWw5o2u55qE5o6S5bqP5pe25ZCO56uv55u45a+55bqU55qEVkFMVUVcclxuICAgKiAtIGB7IGFzY2VuZDogJzAnLCBkZXNjZW5kOiAnMScgfWAg57uT5p6cIGA/bmFtZT0xJnBpPTFgXHJcbiAgICogLSBgeyBhc2NlbmQ6ICdhc2MnLCBkZXNjZW5kOiAnZGVzYycgfWAg57uT5p6cIGA/bmFtZT1kZXNjJnBpPTFgXHJcbiAgICovXHJcbiAgcmVOYW1lPzogeyBhc2NlbmQ/OiBzdHJpbmc7IGRlc2NlbmQ/OiBzdHJpbmcgfTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtbkZpbHRlciB7XHJcbiAgLyoqXHJcbiAgICog6KGo5aS055qE562b6YCJ6I+c5Y2V6aG577yM6Iez5bCR5LiA6aG55omN5Lya55Sf5pWIXHJcbiAgICovXHJcbiAgbWVudXM6IFNUQ29sdW1uRmlsdGVyTWVudVtdO1xyXG4gIC8qKlxyXG4gICAqIOacrOWcsOaVsOaNrueahOetm+mAieWHveaVsFxyXG4gICAqL1xyXG4gIGZuPzogKGZpbHRlcjogU1RDb2x1bW5GaWx0ZXJNZW51LCByZWNvcmQ6IGFueSkgPT4gYm9vbGVhbjtcclxuICAvKipcclxuICAgKiDmoIfor4bmlbDmja7mmK/lkKblt7Lov4fmu6TvvIznrZvpgInlm77moIfkvJrpq5jkuq5cclxuICAgKi9cclxuICBkZWZhdWx0PzogYm9vbGVhbjtcclxuICAvKipcclxuICAgKiDoh6rlrprkuYkgZmlsdGVyIOWbvuagh++8jOm7mOiupCBgYW50aWNvbiBhbnRpY29uLWZpbHRlcmBcclxuICAgKi9cclxuICBpY29uPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIOehruiupOaMiemSruaWh+acrO+8jOm7mOiupCBg56Gu6K6kYFxyXG4gICAqL1xyXG4gIGNvbmZpcm1UZXh0Pzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIOa4hemZpOaMiemSruaWh+acrO+8jOm7mOiupCBg6YeN572uYFxyXG4gICAqL1xyXG4gIGNsZWFyVGV4dD86IHN0cmluZztcclxuICAvKipcclxuICAgKiDmmK/lkKblpJrpgInvvIzpu5jorqQgYHRydWVgXHJcbiAgICovXHJcbiAgbXVsdGlwbGU/OiBib29sZWFuO1xyXG4gIC8qKlxyXG4gICAqIOi/nOeoi+aVsOaNrueahOi/h+a7pOaXtuWQjuerr+ebuOWvueW6lOeahEtFWe+8jOm7mOiupOS9v+eUqCBgaW5kZXhgIOWxnuaAp1xyXG4gICAqIGBrZXk6ICduYW1lJ2Ag57uT5p6cIGA/bmFtZT0xJnBpPTFgXHJcbiAgICovXHJcbiAga2V5Pzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIOi/nOeoi+aVsOaNrueahOi/h+a7pOaXtuWQjuerr+ebuOWvueW6lOeahFZBTFVFXHJcbiAgICogLSDpu5jorqTlvZMgYG11bHRpcGxlOiB0cnVlYCDml7bku6Xoi7HmlofpgJflj7fmi7zmjqXnmoTlrZfnrKbkuLJcclxuICAgKiBAcmV0dXJuIOi/lOWbnuS4uiBPYmplY3Qg5a+56LGhXHJcbiAgICovXHJcbiAgcmVOYW1lPzogKGxpc3Q6IFNUQ29sdW1uRmlsdGVyTWVudVtdLCBjb2w6IFNUQ29sdW1uKSA9PiBPYmplY3Q7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU1RDb2x1bW5GaWx0ZXJNZW51IHtcclxuICAvKipcclxuICAgKiDmlofmnKxcclxuICAgKi9cclxuICB0ZXh0OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICog5YC8XHJcbiAgICovXHJcbiAgdmFsdWU/OiBhbnk7XHJcbiAgLyoqXHJcbiAgICog5piv5ZCm6YCJ5LitXHJcbiAgICovXHJcbiAgY2hlY2tlZD86IGJvb2xlYW47XHJcbiAgLyoqIOadg+mZkO+8jOetieWQjCBgY2FuKClgIOWPguaVsOWAvCAqL1xyXG4gIGFjbD86IGFueTtcclxuXHJcbiAgW2tleTogc3RyaW5nXTogYW55O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uU2VsZWN0aW9uIHtcclxuICAvKipcclxuICAgKiDpgInmi6npobnmmL7npLrnmoTmloflrZdcclxuICAgKi9cclxuICB0ZXh0OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICog6YCJ5oup6aG554K55Ye75Zue6LCD77yM5YWB6K645a+55Y+C5pWwIGBkYXRhLmNoZWNrZWRgIOi/m+ihjOaTjeS9nFxyXG4gICAqL1xyXG4gIHNlbGVjdDogKGRhdGE6IFNURGF0YVtdKSA9PiB2b2lkO1xyXG4gIC8qKiDmnYPpmZDvvIznrYnlkIwgYGNhbigpYCDlj4LmlbDlgLwgKi9cclxuICBhY2w/OiBhbnk7XHJcbn1cclxuXHJcbi8qKiDlvZMgYHR5cGU9eW5gIOacieaViCAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uWW4ge1xyXG4gIC8qKlxyXG4gICAqIOecn+WAvOadoeS7tu+8jO+8iOm7mOiupO+8mmB0cnVlYO+8iVxyXG4gICAqL1xyXG4gIHRydXRoPzogYW55O1xyXG4gIC8qKlxyXG4gICAqIOW+veeroCBgdHJ1ZWAg5pe25paH5pys77yM77yI6buY6K6k77yaYOaYr2DvvIlcclxuICAgKi9cclxuICB5ZXM/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICog5b6956ugIGBmYWxzZWAg5pe25paH5pys77yM77yI6buY6K6k77yaYOWQpmDvvIlcclxuICAgKi9cclxuICBubz86IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIOaMiemSrumFjee9rlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtbkJ1dHRvbiB7XHJcbiAgLyoqXHJcbiAgICog5paH5pysXHJcbiAgICovXHJcbiAgdGV4dDogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIOaWh+acrCBpMThuXHJcbiAgICovXHJcbiAgaTE4bj86IHN0cmluZztcclxuICAvKipcclxuICAgKiDmoLzlvI/ljJbmlofmnKzvvIzovoPpq5josIPnlKjpopHnjofvvIzor7fli7/ov4flpJrlpI3mnYLorqHnrpflhY3lvpfkuqfnlJ/mgKfog73pl67pophcclxuICAgKi9cclxuICBmb3JtYXQ/OiAocmVjb3JkOiBhbnksIGJ0bjogU1RDb2x1bW5CdXR0b24pID0+IHN0cmluZztcclxuICAvKipcclxuICAgKiDmjInpkq7nsbvlnotcclxuICAgKiAtIGBub25lYCDml6Dku7vkvZXkupLliqhcclxuICAgKiAtIGBkZWxgIOWIoOmZpO+8jOm7mOiupOW8gOWQryBgcG9wOiB0cnVlYFxyXG4gICAqIC0gYG1vZGFsYCDlr7nor53moYbvvIzpnIDopoHmjIflrpogYGNvbXBvbmVudGAg5omN5Lya55Sf5pWIXHJcbiAgICogLSBgc3RhdGljYCDpnZnmgIHlr7nor53moYbvvIzpnIDopoHmjIflrpogYGNvbXBvbmVudGAg5omN5Lya55Sf5pWIXHJcbiAgICogLSBgZHJhd2VyYCDmir3lsYnvvIzpnIDopoHmjIflrpogYGNvbXBvbmVudGAg5omN5Lya55Sf5pWIXHJcbiAgICogLSBgbGlua2Ag6ZO+5o6l77yM5b2TIGBjbGlja2Ag6L+U5Zue5a2X56ym5Liy5pe26Ieq5Yqo6LCD55SoIGBuYXZpZ2F0ZUJ5VXJsYCDlr7zoiKpcclxuICAgKi9cclxuICB0eXBlPzogJ25vbmUnIHwgJ2RlbCcgfCAnbW9kYWwnIHwgJ3N0YXRpYycgfCAnZHJhd2VyJyB8ICdsaW5rJztcclxuICAvKipcclxuICAgKiDngrnlh7vlm57osINcclxuICAgKiAtIEZ1bmN0aW9uXHJcbiAgICogIC0gYHR5cGU9bW9kYWxgIOWPquS8muWcqOW9k+acieS8oOWbnuWAvOaXtuaJjeS8muinpuWPkeWbnuiwg1xyXG4gICAqIC0gcmVsb2Fk77ya6YeN5paw5Yi35paw5b2T5YmN6aG1XHJcbiAgICogLSBsb2Fk77ya6YeN5paw5Yqg6L295pWw5o2u77yM5bm26YeN572u6aG156CB5Li677yaYDFgXHJcbiAgICovXHJcbiAgY2xpY2s/OlxyXG4gICAgfCAncmVsb2FkJ1xyXG4gICAgfCAnbG9hZCdcclxuICAgIHwgKChyZWNvcmQ6IGFueSwgbW9kYWw/OiBhbnksIGluc3RhbmNlPzogU1RDb21wb25lbnQpID0+IGFueSk7XHJcbiAgLyoqXHJcbiAgICog5piv5ZCm6ZyA6KaB5rCU5rOh56Gu6K6k5qGGXHJcbiAgICovXHJcbiAgcG9wPzogYm9vbGVhbjtcclxuICAvKipcclxuICAgKiDmsJTms6Hnoa7orqTmoYblhoXlrrnvvIzpu5jorqQgYOehruiupOWIoOmZpOWQl++8n2BcclxuICAgKi9cclxuICBwb3BUaXRsZT86IHN0cmluZztcclxuICAvKipcclxuICAgKiDlr7nor53moYblj4LmlbBcclxuICAgKi9cclxuICBtb2RhbD86IFNUQ29sdW1uQnV0dG9uTW9kYWw7XHJcbiAgLyoqXHJcbiAgICog5oq95bGJ5Y+C5pWwXHJcbiAgICovXHJcbiAgZHJhd2VyPzogU1RDb2x1bW5CdXR0b25EcmF3ZXI7XHJcbiAgLyoqXHJcbiAgICog5LiL5ouJ6I+c5Y2V77yM5b2T5a2Y5Zyo5pe25LulIGBkcm9wZG93bmAg5b2i5byP5riy5p+TXHJcbiAgICogLSDlj6rmlK/mjIHkuIDnuqdcclxuICAgKi9cclxuICBjaGlsZHJlbj86IFNUQ29sdW1uQnV0dG9uW107XHJcbiAgLyoqXHJcbiAgICog5p2D6ZmQ77yM562J5ZCMIGBjYW4oKWAg5Y+C5pWw5YC8XHJcbiAgICovXHJcbiAgYWNsPzogYW55O1xyXG4gIC8qKlxyXG4gICAqIOadoeS7tuihqOi+vuW8j++8jOi+g+mrmOiwg+eUqOmikeeOh++8jOivt+WLv+i/h+WkmuWkjeadguiuoeeul+WFjeW+l+S6p+eUn+aAp+iDvemXrumimFxyXG4gICAqL1xyXG4gIGlpZj86IChcclxuICAgIGl0ZW06IGFueSxcclxuICAgIGJ0bjogU1RDb2x1bW5CdXR0b24sXHJcbiAgICBjb2x1bW46IFNUQ29sdW1uLFxyXG4gICkgPT4gYm9vbGVhbjtcclxuXHJcbiAgW2tleTogc3RyaW5nXTogYW55O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uQnV0dG9uTW9kYWwgZXh0ZW5kcyBNb2RhbEhlbHBlck9wdGlvbnMge1xyXG4gIC8qKlxyXG4gICAqIOWvueivneahhue7hOS7tuWvueixoe+8jOWKoeW/heWcqCBgZW50cnlDb21wb25lbnRzYCDms6jlhoxcclxuICAgKi9cclxuICBjb21wb25lbnQ/OiBhbnk7XHJcbiAgLyoqXHJcbiAgICog5a+56K+d5qGG5Y+C5pWwXHJcbiAgICovXHJcbiAgcGFyYW1zPzogKHJlY29yZDogYW55KSA9PiBPYmplY3Q7XHJcbiAgLyoqXHJcbiAgICog5a+56K+d5qGG55uu5qCH57uE5Lu255qE5o6l5pS25Y+C5pWw5ZCN77yM6buY6K6k77yaYHJlY29yZGBcclxuICAgKi9cclxuICBwYXJhbXNOYW1lPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uQnV0dG9uTW9kYWxDb25maWcge1xyXG4gIC8qKlxyXG4gICAqIOaMh+WumuaooeaAgeahhuebruagh+e7hOS7tueahOaOpeaUtuWPguaVsOWQje+8jOm7mOiupO+8mmByZWNvcmRgXHJcbiAgICovXHJcbiAgcGFyYW1zTmFtZT86IHN0cmluZztcclxuICAvKiog5aSn5bCP77yb5L6L5aaC77yabGfjgIE2MDDvvIzpu5jorqTvvJpgbGdgICovXHJcbiAgc2l6ZT86ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcgfCAnJyB8IG51bWJlcjtcclxuICAvKiog5a+56K+d5qGGIFtNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlXShodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9jb21wb25lbnRzL21vZGFsL256LW1vZGFsLnR5cGUudHMpIOWPguaVsCAqL1xyXG4gIG1vZGFsT3B0aW9ucz86IE1vZGFsT3B0aW9uc0ZvclNlcnZpY2U7XHJcbiAgLyoqIOaYr+WQpueyvuWHhu+8iOm7mOiupO+8mmB0cnVlYO+8ie+8jOiLpei/lOWbnuWAvOmdnuepuuWAvO+8iGBudWxsYOaIlmB1bmRlZmluZWRg77yJ6KeG5Li65oiQ5Yqf77yM5ZCm5YiZ6KeG5Li66ZSZ6K+vICovXHJcbiAgZXhhY3Q/OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uQnV0dG9uRHJhd2VyIGV4dGVuZHMgRHJhd2VySGVscGVyT3B0aW9ucyB7XHJcbiAgLyoqXHJcbiAgICog5qCH6aKYXHJcbiAgICovXHJcbiAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICog5oq95bGJ57uE5Lu25a+56LGh77yM5Yqh5b+F5ZyoIGBlbnRyeUNvbXBvbmVudHNgIOazqOWGjFxyXG4gICAqL1xyXG4gIGNvbXBvbmVudD86IGFueTtcclxuICAvKipcclxuICAgKiDmir3lsYnlj4LmlbBcclxuICAgKi9cclxuICBwYXJhbXM/OiAocmVjb3JkOiBhbnkpID0+IE9iamVjdDtcclxuICAvKipcclxuICAgKiDmir3lsYnnm67moIfnu4Tku7bnmoTmjqXmlLblj4LmlbDlkI3vvIzpu5jorqTvvJpgcmVjb3JkYFxyXG4gICAqL1xyXG4gIHBhcmFtc05hbWU/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU1RDb2x1bW5CdXR0b25EcmF3ZXJDb25maWcge1xyXG4gIC8qKlxyXG4gICAqIOaKveWxieebruagh+e7hOS7tueahOaOpeaUtuWPguaVsOWQje+8jOm7mOiupO+8mmByZWNvcmRgXHJcbiAgICovXHJcbiAgcGFyYW1zTmFtZT86IHN0cmluZztcclxuICAvKipcclxuICAgKiDlpKflsI/vvJvkvovlpoLvvJpsZ+OAgTYwMO+8jOm7mOiupO+8mmBtZGBcclxuICAgKiBcclxuICAgKiB8IOexu+WeiyB8IOm7mOiupOWkp+WwjyB8XHJcbiAgICogfCAtLS0gfCAtLS0tLS0gfFxyXG4gICAqIHwgYHNtYCB8IGAzMDBgIHxcclxuICAgKiB8IGBtZGAgfCBgNjAwYCB8XHJcbiAgICogfCBgbGdgIHwgYDkwMGAgfFxyXG4gICAqIHwgYHhsYCB8IGAxMjAwYCB8XHJcbiAgICogXHJcbiAgICogPiDku6XkuIrlgLzvvIzlj6/pgJrov4fopobnm5bnm7jlupTnmoRMRVNT5Y+C5pWw6Ieq6KGM6LCD5pW0XHJcbiAgICovXHJcbiAgc2l6ZT86ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcgfCBudW1iZXI7XHJcbiAgLyoqXHJcbiAgICog5piv5ZCm5YyF5ZCr5bqV6YOo5bel5YW35p2h77yM6buY6K6k77yaYHRydWVgXHJcbiAgICovXHJcbiAgZm9vdGVyPzogYm9vbGVhbjtcclxuICAvKipcclxuICAgKiDlupXpg6jlt6XlhbfmnaHpq5jluqbvvIzpu5jorqTvvJpgNTVgXHJcbiAgICovXHJcbiAgZm9vdGVySGVpZ2h0PzogbnVtYmVyO1xyXG4gIC8qKiDmir3lsYkgW056RHJhd2VyT3B0aW9uc10oaHR0cHM6Ly9uZy5hbnQuZGVzaWduL2NvbXBvbmVudHMvZHJhd2VyL3poI256ZHJhd2Vyb3B0aW9ucykg5Y+C5pWwICovXHJcbiAgZHJhd2VyT3B0aW9ucz86IE56RHJhd2VyT3B0aW9ucztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTVFJlcVJlTmFtZVR5cGUge1xyXG4gIHBpPzogc3RyaW5nO1xyXG4gIHBzPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNUUmVzUmVOYW1lVHlwZSB7XHJcbiAgdG90YWw/OiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICBsaXN0Pzogc3RyaW5nIHwgc3RyaW5nW107XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU1RFeHBvcnRPcHRpb25zIHtcclxuICBfZD86IGFueVtdO1xyXG4gIF9jPzogU1RDb2x1bW5bXTtcclxuICAvKiog5bel5L2c5rql5ZCNICovXHJcbiAgc2hlZXRuYW1lPzogc3RyaW5nO1xyXG4gIC8qKiDmlofku7blkI0gKi9cclxuICBmaWxlbmFtZT86IHN0cmluZztcclxuICAvKiogdHJpZ2dlcnMgd2hlbiBzYXZlYXMgKi9cclxuICBjYWxsYmFjaz86ICh3YjogYW55KSA9PiB2b2lkO1xyXG59XHJcblxyXG4vKipcclxuICog5aSa5o6S5bqP55u45ZCM5o6S5bqPIGtleSDml7blkIjlubbop4TliJlcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgU1RNdWx0aVNvcnQge1xyXG4gIC8qKiDor7fmsYLlj4LmlbDlkI3vvIzpu5jorqTvvJpgc29ydGAgKi9cclxuICBrZXk/OiBzdHJpbmc7XHJcbiAgLyoqIOS4jeWQjOWxnuaAp+mXtOWIhumalOespu+8jOm7mOiupO+8mmAtYCAqL1xyXG4gIHNlcGFyYXRvcj86IHN0cmluZztcclxuICAvKiog5YiX5ZCN5LiO54q25oCB6Ze05YiG6ZqU56ym77yM6buY6K6k77yaYC5gICovXHJcbiAgbmFtZVNlcGFyYXRvcj86IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIOW+veagh+S/oeaBr1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtbkJhZGdlIHtcclxuICBba2V5OiBudW1iZXJdOiBTVENvbHVtbkJhZGdlVmFsdWU7XHJcbiAgW2tleTogc3RyaW5nXTogU1RDb2x1bW5CYWRnZVZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uQmFkZ2VWYWx1ZSB7XHJcbiAgLyoqXHJcbiAgICog5paH5pysXHJcbiAgICovXHJcbiAgdGV4dD86IHN0cmluZztcclxuICAvKipcclxuICAgKiDlvr3moIfpopzoibLlgLxcclxuICAgKi9cclxuICBjb2xvcj86ICdzdWNjZXNzJyB8ICdwcm9jZXNzaW5nJyB8ICdkZWZhdWx0JyB8ICdlcnJvcicgfCAnd2FybmluZyc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmoIfnrb7kv6Hmga9cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgU1RDb2x1bW5UYWcge1xyXG4gIFtrZXk6IG51bWJlcl06IFNUQ29sdW1uVGFnVmFsdWU7XHJcbiAgW2tleTogc3RyaW5nXTogU1RDb2x1bW5UYWdWYWx1ZTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtblRhZ1ZhbHVlIHtcclxuICAvKipcclxuICAgKiDmlofmnKxcclxuICAgKi9cclxuICB0ZXh0Pzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIOminOiJsuWAvO+8jOaUr+aMgemihOiuvuWSjOiJsuWAvFxyXG4gICAqIC0g6aKE6K6+77yaZ2Vla2JsdWUsYmx1ZSxwdXJwbGUsc3VjY2VzcyxyZWQsdm9sY2FubyxvcmFuZ2UsZ29sZCxsaW1lLGdyZWVuLGN5YW5cclxuICAgKiAtIOiJsuWAvO+8miNmNTAsI2ZmMFxyXG4gICAqL1xyXG4gIGNvbG9yPzpcclxuICAgIHwgJ2dlZWtibHVlJ1xyXG4gICAgfCAnYmx1ZSdcclxuICAgIHwgJ3B1cnBsZSdcclxuICAgIHwgJ3N1Y2Nlc3MnXHJcbiAgICB8ICdyZWQnXHJcbiAgICB8ICd2b2xjYW5vJ1xyXG4gICAgfCAnb3JhbmdlJ1xyXG4gICAgfCAnZ29sZCdcclxuICAgIHwgJ2xpbWUnXHJcbiAgICB8ICdncmVlbidcclxuICAgIHwgJ2N5YW4nXHJcbiAgICB8IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgU1RDaGFuZ2VUeXBlID0gJ3BpJyB8ICdwcycgfCAnY2hlY2tib3gnIHwgJ3JhZGlvJyB8ICdzb3J0JyB8ICdmaWx0ZXInIHwgJ2NsaWNrJyB8ICdkYmxDbGljayc7XHJcblxyXG4vKipcclxuICog5Zue6LCD5pWw5o2uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFNUQ2hhbmdlIHtcclxuICAvKipcclxuICAgKiDlm57osIPnsbvlnotcclxuICAgKi9cclxuICB0eXBlOiBTVENoYW5nZVR5cGU7XHJcbiAgLyoqXHJcbiAgICog5b2T5YmN6aG156CBXHJcbiAgICovXHJcbiAgcGk6IG51bWJlcjtcclxuICAvKipcclxuICAgKiDmr4/pobXmlbDph49cclxuICAgKi9cclxuICBwczogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIOaVsOaNruaAu+mHj1xyXG4gICAqL1xyXG4gIHRvdGFsOiBudW1iZXI7XHJcbiAgLyoqXHJcbiAgICogYGNoZWNrYm94YCDlj4LmlbBcclxuICAgKi9cclxuICBjaGVja2JveD86IFNURGF0YVtdO1xyXG4gIC8qKlxyXG4gICAqIGByYWRpb2Ag5Y+C5pWwXHJcbiAgICovXHJcbiAgcmFkaW8/OiBTVERhdGE7XHJcbiAgLyoqXHJcbiAgICog5o6S5bqP5Y+C5pWwXHJcbiAgICovXHJcbiAgc29ydD86IFNUQ2hhbmdlU29ydDtcclxuICAvKipcclxuICAgKiDov4fmu6Tlj4LmlbBcclxuICAgKi9cclxuICBmaWx0ZXI/OiBTVENvbHVtbjtcclxuICAvKipcclxuICAgKiDooYzngrnlh7vmiJblj4zlh7vlj4LmlbBcclxuICAgKi9cclxuICBjbGljaz86IFNUQ2hhbmdlUm93Q2xpY2s7XHJcbn1cclxuXHJcbi8qKiDooYzljZXlh7vlj4LmlbAgKi9cclxuZXhwb3J0IGludGVyZmFjZSBTVENoYW5nZVNvcnQge1xyXG4gIHZhbHVlPzogJ2FzY2VuZCcgfCAnZGVzY2VuZCc7XHJcbiAgbWFwPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcclxuICBjb2x1bW4/OiBTVENvbHVtbjtcclxufVxyXG5cclxuLyoqIOihjOWNleWHu+WPguaVsCAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFNUQ2hhbmdlUm93Q2xpY2sge1xyXG4gIGU/OiBFdmVudDtcclxuICBpdGVtPzogU1REYXRhO1xyXG4gIGluZGV4PzogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNURXJyb3Ige1xyXG4gIHR5cGU/OiAncmVxJztcclxuICBlcnJvcj86IGFueTtcclxufVxyXG4iXX0=