/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { deepGet } from '@delon/util';
import { NzModalService } from 'ng-zorro-antd';
import { of } from 'rxjs';
import { getData, toBool } from '../../utils';
import { ControlWidget } from '../../widget';
var UploadWidget = /** @class */ (function (_super) {
    tslib_1.__extends(UploadWidget, _super);
    function UploadWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fileList = [];
        _this.btnType = '';
        _this.handlePreview = function (file) {
            if (_this.ui.preview) {
                _this.ui.preview(file);
                return;
            }
            _this.injector
                .get(NzModalService)
                .create({
                nzContent: "<img src=\"" + (file.url ||
                    file.thumbUrl) + "\" class=\"img-fluid\" />",
                nzFooter: null,
            })
                .afterClose.subscribe(function () { return _this.detectChanges(); });
        };
        return _this;
    }
    /**
     * @return {?}
     */
    UploadWidget.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _a = this.ui, type = _a.type, text = _a.text, action = _a.action, accept = _a.accept, limit = _a.limit, filter = _a.filter, fileSize = _a.fileSize, fileType = _a.fileType, listType = _a.listType, multiple = _a.multiple, name = _a.name, showUploadList = _a.showUploadList, withCredentials = _a.withCredentials, resReName = _a.resReName, beforeUpload = _a.beforeUpload, customRequest = _a.customRequest, directory = _a.directory, openFileDialogOnClick = _a.openFileDialogOnClick;
        this.i = {
            type: type || 'select',
            text: text || '点击上传',
            action: action || '',
            accept: accept || '',
            directory: toBool(directory, false),
            openFileDialogOnClick: toBool(openFileDialogOnClick, true),
            limit: limit == null ? 0 : +limit,
            filter: filter == null ? [] : filter,
            size: fileSize == null ? 0 : +fileSize,
            fileType: fileType || '',
            listType: listType || 'text',
            multiple: toBool(multiple, false),
            name: name || 'file',
            showUploadList: toBool(showUploadList, true),
            withCredentials: toBool(withCredentials, false),
            resReName: (resReName || '').split('.'),
            beforeUpload: typeof beforeUpload === 'function' ? beforeUpload : null,
            customRequest: typeof customRequest === 'function' ? customRequest : null,
        };
        if (this.i.listType === 'picture-card') {
            this.btnType = 'plus';
        }
        if (this.i.type === 'drag') {
            this.i.listType = null;
            this.btnType = 'drag';
            this.i.text = this.ui.text || "\u5355\u51FB\u6216\u62D6\u52A8\u6587\u4EF6\u5230\u8BE5\u533A\u57DF\u4E0A\u4F20";
            this.i.hint =
                this.ui.hint || "\u652F\u6301\u5355\u4E2A\u6216\u6279\u91CF\uFF0C\u4E25\u7981\u4E0A\u4F20\u516C\u53F8\u6570\u636E\u6216\u5176\u4ED6\u5B89\u5168\u6587\u4EF6";
        }
    };
    /**
     * @param {?} args
     * @return {?}
     */
    UploadWidget.prototype.change = /**
     * @param {?} args
     * @return {?}
     */
    function (args) {
        if (this.ui.change)
            this.ui.change(args);
        if (args.type !== 'success')
            return;
        this._setValue(args.fileList);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    UploadWidget.prototype.reset = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        var fileList = this.ui.fileList;
        (fileList
            ? of(fileList)
            : getData(this.schema, this.ui, this.formProperty.formData)).subscribe(function (list) {
            _this.fileList = (/** @type {?} */ (list));
            _this._setValue(_this.fileList);
            _this.detectChanges();
        });
    };
    /**
     * @param {?} fileList
     * @return {?}
     */
    UploadWidget.prototype._setValue = /**
     * @param {?} fileList
     * @return {?}
     */
    function (fileList) {
        var _this = this;
        /** @type {?} */
        var res = fileList.map(function (item) {
            return deepGet(item.response, _this.i.resReName, item.response);
        });
        this.setValue(this.i.multiple === true ? res : res.pop());
    };
    UploadWidget.decorators = [
        { type: Component, args: [{
                    selector: 'sf-upload',
                    template: "\n    <sf-item-wrap\n      [id]=\"id\"\n      [schema]=\"schema\"\n      [ui]=\"ui\"\n      [showError]=\"showError\"\n      [error]=\"error\"\n      [showTitle]=\"schema.title\"\n    >\n      <nz-upload\n        [nzType]=\"i.type\"\n        [nzFileList]=\"fileList\"\n        [nzDisabled]=\"disabled\"\n        [nzAction]=\"i.action\"\n        [nzDirectory]=\"i.directory\"\n        [nzOpenFileDialogOnClick]=\"i.openFileDialogOnClick\"\n        [nzAccept]=\"i.accept\"\n        [nzLimit]=\"i.limit\"\n        [nzFilter]=\"i.filter\"\n        [nzSize]=\"i.size\"\n        [nzFileType]=\"i.fileType\"\n        [nzHeaders]=\"ui.headers\"\n        [nzData]=\"ui.data\"\n        [nzListType]=\"i.listType\"\n        [nzMultiple]=\"i.multiple\"\n        [nzName]=\"i.name\"\n        [nzShowUploadList]=\"i.showUploadList\"\n        [nzWithCredentials]=\"i.withCredentials\"\n        [nzBeforeUpload]=\"i.beforeUpload\"\n        [nzCustomRequest]=\"i.customRequest\"\n        [nzRemove]=\"ui.remove\"\n        [nzPreview]=\"handlePreview\"\n        (nzChange)=\"change($event)\"\n      >\n        <ng-container [ngSwitch]=\"btnType\">\n          <ng-container *ngSwitchCase=\"'plus'\">\n            <i nz-icon type=\"plus\"></i>\n            <div class=\"ant-upload-text\" [innerHTML]=\"i.text\"></div>\n          </ng-container>\n          <ng-container *ngSwitchCase=\"'drag'\">\n            <p class=\"ant-upload-drag-icon\"><i nz-icon type=\"inbox\"></i></p>\n            <p class=\"ant-upload-text\" [innerHTML]=\"i.text\"></p>\n            <p class=\"ant-upload-hint\" [innerHTML]=\"i.hint\"></p>\n          </ng-container>\n          <ng-container *ngSwitchDefault>\n            <button type=\"button\" nz-button>\n              <i nz-icon type=\"upload\"></i><span [innerHTML]=\"i.text\"></span>\n            </button>\n          </ng-container>\n        </ng-container>\n      </nz-upload>\n    </sf-item-wrap>\n  "
                }] }
    ];
    return UploadWidget;
}(ControlWidget));
export { UploadWidget };
if (false) {
    /** @type {?} */
    UploadWidget.prototype.i;
    /** @type {?} */
    UploadWidget.prototype.fileList;
    /** @type {?} */
    UploadWidget.prototype.btnType;
    /** @type {?} */
    UploadWidget.prototype.handlePreview;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9mb3JtLyIsInNvdXJjZXMiOlsic3JjL3dpZGdldHMvdXBsb2FkL3VwbG9hZC53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDdEMsT0FBTyxFQUFFLGNBQWMsRUFBaUMsTUFBTSxlQUFlLENBQUM7QUFDOUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUxQixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM5QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRTdDO0lBd0RrQyx3Q0FBYTtJQXhEL0M7UUFBQSxxRUEwSkM7UUEvRkMsY0FBUSxHQUFpQixFQUFFLENBQUM7UUFDNUIsYUFBTyxHQUFHLEVBQUUsQ0FBQztRQWdGYixtQkFBYSxHQUFHLFVBQUMsSUFBZ0I7WUFDL0IsSUFBSSxLQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRTtnQkFDbkIsS0FBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3RCLE9BQU87YUFDUjtZQUNELEtBQUksQ0FBQyxRQUFRO2lCQUNWLEdBQUcsQ0FBQyxjQUFjLENBQUM7aUJBQ25CLE1BQU0sQ0FBQztnQkFDTixTQUFTLEVBQUUsaUJBQWEsSUFBSSxDQUFDLEdBQUc7b0JBQzlCLElBQUksQ0FBQyxRQUFRLCtCQUF3QjtnQkFDdkMsUUFBUSxFQUFFLElBQUk7YUFDZixDQUFDO2lCQUNELFVBQVUsQ0FBQyxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxhQUFhLEVBQUUsRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDO1FBQ3RELENBQUMsQ0FBQTs7SUFDSCxDQUFD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LCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZGVlcEdldCB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IE56TW9kYWxTZXJ2aWNlLCBVcGxvYWRDaGFuZ2VQYXJhbSwgVXBsb2FkRmlsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xuaW1wb3J0IHsgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFNGVmFsdWUgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgZ2V0RGF0YSwgdG9Cb29sIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLXVwbG9hZCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHNmLWl0ZW0td3JhcFxuICAgICAgW2lkXT1cImlkXCJcbiAgICAgIFtzY2hlbWFdPVwic2NoZW1hXCJcbiAgICAgIFt1aV09XCJ1aVwiXG4gICAgICBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiXG4gICAgICBbZXJyb3JdPVwiZXJyb3JcIlxuICAgICAgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIlxuICAgID5cbiAgICAgIDxuei11cGxvYWRcbiAgICAgICAgW256VHlwZV09XCJpLnR5cGVcIlxuICAgICAgICBbbnpGaWxlTGlzdF09XCJmaWxlTGlzdFwiXG4gICAgICAgIFtuekRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgW256QWN0aW9uXT1cImkuYWN0aW9uXCJcbiAgICAgICAgW256RGlyZWN0b3J5XT1cImkuZGlyZWN0b3J5XCJcbiAgICAgICAgW256T3BlbkZpbGVEaWFsb2dPbkNsaWNrXT1cImkub3BlbkZpbGVEaWFsb2dPbkNsaWNrXCJcbiAgICAgICAgW256QWNjZXB0XT1cImkuYWNjZXB0XCJcbiAgICAgICAgW256TGltaXRdPVwiaS5saW1pdFwiXG4gICAgICAgIFtuekZpbHRlcl09XCJpLmZpbHRlclwiXG4gICAgICAgIFtuelNpemVdPVwiaS5zaXplXCJcbiAgICAgICAgW256RmlsZVR5cGVdPVwiaS5maWxlVHlwZVwiXG4gICAgICAgIFtuekhlYWRlcnNdPVwidWkuaGVhZGVyc1wiXG4gICAgICAgIFtuekRhdGFdPVwidWkuZGF0YVwiXG4gICAgICAgIFtuekxpc3RUeXBlXT1cImkubGlzdFR5cGVcIlxuICAgICAgICBbbnpNdWx0aXBsZV09XCJpLm11bHRpcGxlXCJcbiAgICAgICAgW256TmFtZV09XCJpLm5hbWVcIlxuICAgICAgICBbbnpTaG93VXBsb2FkTGlzdF09XCJpLnNob3dVcGxvYWRMaXN0XCJcbiAgICAgICAgW256V2l0aENyZWRlbnRpYWxzXT1cImkud2l0aENyZWRlbnRpYWxzXCJcbiAgICAgICAgW256QmVmb3JlVXBsb2FkXT1cImkuYmVmb3JlVXBsb2FkXCJcbiAgICAgICAgW256Q3VzdG9tUmVxdWVzdF09XCJpLmN1c3RvbVJlcXVlc3RcIlxuICAgICAgICBbbnpSZW1vdmVdPVwidWkucmVtb3ZlXCJcbiAgICAgICAgW256UHJldmlld109XCJoYW5kbGVQcmV2aWV3XCJcbiAgICAgICAgKG56Q2hhbmdlKT1cImNoYW5nZSgkZXZlbnQpXCJcbiAgICAgID5cbiAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwiYnRuVHlwZVwiPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidwbHVzJ1wiPlxuICAgICAgICAgICAgPGkgbnotaWNvbiB0eXBlPVwicGx1c1wiPjwvaT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtdXBsb2FkLXRleHRcIiBbaW5uZXJIVE1MXT1cImkudGV4dFwiPjwvZGl2PlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidkcmFnJ1wiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJhbnQtdXBsb2FkLWRyYWctaWNvblwiPjxpIG56LWljb24gdHlwZT1cImluYm94XCI+PC9pPjwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiYW50LXVwbG9hZC10ZXh0XCIgW2lubmVySFRNTF09XCJpLnRleHRcIj48L3A+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImFudC11cGxvYWQtaGludFwiIFtpbm5lckhUTUxdPVwiaS5oaW50XCI+PC9wPlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoRGVmYXVsdD5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG56LWJ1dHRvbj5cbiAgICAgICAgICAgICAgPGkgbnotaWNvbiB0eXBlPVwidXBsb2FkXCI+PC9pPjxzcGFuIFtpbm5lckhUTUxdPVwiaS50ZXh0XCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC9uei11cGxvYWQ+XG4gICAgPC9zZi1pdGVtLXdyYXA+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIFVwbG9hZFdpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIGk6IGFueTtcbiAgZmlsZUxpc3Q6IFVwbG9hZEZpbGVbXSA9IFtdO1xuICBidG5UeXBlID0gJyc7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3Qge1xuICAgICAgdHlwZSxcbiAgICAgIHRleHQsXG4gICAgICBhY3Rpb24sXG4gICAgICBhY2NlcHQsXG4gICAgICBsaW1pdCxcbiAgICAgIGZpbHRlcixcbiAgICAgIGZpbGVTaXplLFxuICAgICAgZmlsZVR5cGUsXG4gICAgICBsaXN0VHlwZSxcbiAgICAgIG11bHRpcGxlLFxuICAgICAgbmFtZSxcbiAgICAgIHNob3dVcGxvYWRMaXN0LFxuICAgICAgd2l0aENyZWRlbnRpYWxzLFxuICAgICAgcmVzUmVOYW1lLFxuICAgICAgYmVmb3JlVXBsb2FkLFxuICAgICAgY3VzdG9tUmVxdWVzdCxcbiAgICAgIGRpcmVjdG9yeSxcbiAgICAgIG9wZW5GaWxlRGlhbG9nT25DbGljayxcbiAgICB9ID0gdGhpcy51aTtcbiAgICB0aGlzLmkgPSB7XG4gICAgICB0eXBlOiB0eXBlIHx8ICdzZWxlY3QnLFxuICAgICAgdGV4dDogdGV4dCB8fCAn54K55Ye75LiK5LygJyxcbiAgICAgIGFjdGlvbjogYWN0aW9uIHx8ICcnLFxuICAgICAgYWNjZXB0OiBhY2NlcHQgfHwgJycsXG4gICAgICBkaXJlY3Rvcnk6IHRvQm9vbChkaXJlY3RvcnksIGZhbHNlKSxcbiAgICAgIG9wZW5GaWxlRGlhbG9nT25DbGljazogdG9Cb29sKG9wZW5GaWxlRGlhbG9nT25DbGljaywgdHJ1ZSksXG4gICAgICBsaW1pdDogbGltaXQgPT0gbnVsbCA/IDAgOiArbGltaXQsXG4gICAgICBmaWx0ZXI6IGZpbHRlciA9PSBudWxsID8gW10gOiBmaWx0ZXIsXG4gICAgICBzaXplOiBmaWxlU2l6ZSA9PSBudWxsID8gMCA6ICtmaWxlU2l6ZSxcbiAgICAgIGZpbGVUeXBlOiBmaWxlVHlwZSB8fCAnJyxcbiAgICAgIGxpc3RUeXBlOiBsaXN0VHlwZSB8fCAndGV4dCcsXG4gICAgICBtdWx0aXBsZTogdG9Cb29sKG11bHRpcGxlLCBmYWxzZSksXG4gICAgICBuYW1lOiBuYW1lIHx8ICdmaWxlJyxcbiAgICAgIHNob3dVcGxvYWRMaXN0OiB0b0Jvb2woc2hvd1VwbG9hZExpc3QsIHRydWUpLFxuICAgICAgd2l0aENyZWRlbnRpYWxzOiB0b0Jvb2wod2l0aENyZWRlbnRpYWxzLCBmYWxzZSksXG4gICAgICByZXNSZU5hbWU6IChyZXNSZU5hbWUgfHwgJycpLnNwbGl0KCcuJyksXG4gICAgICBiZWZvcmVVcGxvYWQ6IHR5cGVvZiBiZWZvcmVVcGxvYWQgPT09ICdmdW5jdGlvbicgPyBiZWZvcmVVcGxvYWQgOiBudWxsLFxuICAgICAgY3VzdG9tUmVxdWVzdDogdHlwZW9mIGN1c3RvbVJlcXVlc3QgPT09ICdmdW5jdGlvbicgPyBjdXN0b21SZXF1ZXN0IDogbnVsbCxcbiAgICB9O1xuICAgIGlmICh0aGlzLmkubGlzdFR5cGUgPT09ICdwaWN0dXJlLWNhcmQnKSB7XG4gICAgICB0aGlzLmJ0blR5cGUgPSAncGx1cyc7XG4gICAgfVxuICAgIGlmICh0aGlzLmkudHlwZSA9PT0gJ2RyYWcnKSB7XG4gICAgICB0aGlzLmkubGlzdFR5cGUgPSBudWxsO1xuICAgICAgdGhpcy5idG5UeXBlID0gJ2RyYWcnO1xuICAgICAgdGhpcy5pLnRleHQgPSB0aGlzLnVpLnRleHQgfHwgYOWNleWHu+aIluaLluWKqOaWh+S7tuWIsOivpeWMuuWfn+S4iuS8oGA7XG4gICAgICB0aGlzLmkuaGludCA9XG4gICAgICAgIHRoaXMudWkuaGludCB8fCBg5pSv5oyB5Y2V5Liq5oiW5om56YeP77yM5Lil56aB5LiK5Lyg5YWs5Y+45pWw5o2u5oiW5YW25LuW5a6J5YWo5paH5Lu2YDtcbiAgICB9XG4gIH1cblxuICBjaGFuZ2UoYXJnczogVXBsb2FkQ2hhbmdlUGFyYW0pIHtcbiAgICBpZiAodGhpcy51aS5jaGFuZ2UpIHRoaXMudWkuY2hhbmdlKGFyZ3MpO1xuICAgIGlmIChhcmdzLnR5cGUgIT09ICdzdWNjZXNzJykgcmV0dXJuO1xuICAgIHRoaXMuX3NldFZhbHVlKGFyZ3MuZmlsZUxpc3QpO1xuICB9XG5cbiAgcmVzZXQodmFsdWU6IFNGVmFsdWUpIHtcbiAgICBjb25zdCB7IGZpbGVMaXN0IH0gPSB0aGlzLnVpO1xuICAgIChmaWxlTGlzdFxuICAgICAgPyBvZihmaWxlTGlzdClcbiAgICAgIDogZ2V0RGF0YSh0aGlzLnNjaGVtYSwgdGhpcy51aSwgdGhpcy5mb3JtUHJvcGVydHkuZm9ybURhdGEpXG4gICAgKS5zdWJzY3JpYmUobGlzdCA9PiB7XG4gICAgICB0aGlzLmZpbGVMaXN0ID0gbGlzdCBhcyBVcGxvYWRGaWxlW107XG4gICAgICB0aGlzLl9zZXRWYWx1ZSh0aGlzLmZpbGVMaXN0KTtcbiAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0VmFsdWUoZmlsZUxpc3Q6IFVwbG9hZEZpbGVbXSkge1xuICAgIGNvbnN0IHJlcyA9IGZpbGVMaXN0Lm1hcChpdGVtID0+XG4gICAgICBkZWVwR2V0KGl0ZW0ucmVzcG9uc2UsIHRoaXMuaS5yZXNSZU5hbWUsIGl0ZW0ucmVzcG9uc2UpLFxuICAgICk7XG4gICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmkubXVsdGlwbGUgPT09IHRydWUgPyByZXMgOiByZXMucG9wKCkpO1xuICB9XG5cbiAgaGFuZGxlUHJldmlldyA9IChmaWxlOiBVcGxvYWRGaWxlKSA9PiB7XG4gICAgaWYgKHRoaXMudWkucHJldmlldykge1xuICAgICAgdGhpcy51aS5wcmV2aWV3KGZpbGUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmluamVjdG9yXG4gICAgICAuZ2V0KE56TW9kYWxTZXJ2aWNlKVxuICAgICAgLmNyZWF0ZSh7XG4gICAgICAgIG56Q29udGVudDogYDxpbWcgc3JjPVwiJHtmaWxlLnVybCB8fFxuICAgICAgICAgIGZpbGUudGh1bWJVcmx9XCIgY2xhc3M9XCJpbWctZmx1aWRcIiAvPmAsXG4gICAgICAgIG56Rm9vdGVyOiBudWxsLFxuICAgICAgfSlcbiAgICAgIC5hZnRlckNsb3NlLnN1YnNjcmliZSgoKSA9PiB0aGlzLmRldGVjdENoYW5nZXMoKSk7XG4gIH1cbn1cbiJdfQ==