/**
 * @fileoverview added by tsickle
 * Generated from: src/widgets/upload/upload.widget.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __extends } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { deepGet } from '@delon/util';
import { NzModalService } from 'ng-zorro-antd/modal';
import { of } from 'rxjs';
import { getData, toBool } from '../../utils';
import { ControlUIWidget } from '../../widget';
var UploadWidget = /** @class */ (function (_super) {
    __extends(UploadWidget, _super);
    function UploadWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fileList = [];
        _this.btnType = '';
        _this.handleRemove = (/**
         * @return {?}
         */
        function () {
            _this._setValue(_this.fileList);
            return true;
        });
        _this.handlePreview = (/**
         * @param {?} file
         * @return {?}
         */
        function (file) {
            if (_this.ui.preview) {
                _this.ui.preview(file);
                return;
            }
            /** @type {?} */
            var _url = file.thumbUrl || file.url;
            if (!_url) {
                return;
            }
            _this.injector.get(NzModalService).create({
                nzContent: "<img src=\"" + _url + "\" class=\"img-fluid\" />",
                nzFooter: null,
            });
        });
        return _this;
    }
    /**
     * @return {?}
     */
    UploadWidget.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _a = this.ui, type = _a.type, text = _a.text, hint = _a.hint, action = _a.action, accept = _a.accept, limit = _a.limit, filter = _a.filter, fileSize = _a.fileSize, fileType = _a.fileType, listType = _a.listType, multiple = _a.multiple, name = _a.name, showUploadList = _a.showUploadList, withCredentials = _a.withCredentials, resReName = _a.resReName, urlReName = _a.urlReName, beforeUpload = _a.beforeUpload, customRequest = _a.customRequest, directory = _a.directory, openFileDialogOnClick = _a.openFileDialogOnClick, limitFileCount = _a.limitFileCount;
        /** @type {?} */
        var res = {
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
            showUploadList: showUploadList == null ? true : showUploadList,
            withCredentials: toBool(withCredentials, false),
            resReName: (resReName || '').split('.'),
            urlReName: (urlReName || '').split('.'),
            beforeUpload: typeof beforeUpload === 'function' ? beforeUpload : null,
            customRequest: typeof customRequest === 'function' ? customRequest : null,
            limitFileCount: limitFileCount || 999,
        };
        if (res.listType === 'picture-card') {
            this.btnType = 'plus';
        }
        if (res.type === 'drag') {
            res.listType = null;
            this.btnType = 'drag';
            res.text = text || "\u5355\u51FB\u6216\u62D6\u52A8\u6587\u4EF6\u5230\u8BE5\u533A\u57DF\u4E0A\u4F20";
            res.hint = hint || "\u652F\u6301\u5355\u4E2A\u6216\u6279\u91CF\uFF0C\u4E25\u7981\u4E0A\u4F20\u516C\u53F8\u6570\u636E\u6216\u5176\u4ED6\u5B89\u5168\u6587\u4EF6";
        }
        this.i = res;
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
        (fileList ? of(fileList) : Array.isArray(value) ? of(value) : getData(this.schema, this.ui, null)).subscribe((/**
         * @param {?} list
         * @return {?}
         */
        function (list) {
            _this.fileList = (/** @type {?} */ (list));
            _this.formProperty._value = _this.pureValue(list);
            _this.formProperty.updateValueAndValidity({ onlySelf: false, emitValueEvent: false, emitValidator: false });
            _this.detectChanges();
        }));
    };
    /**
     * @private
     * @param {?} file
     * @return {?}
     */
    UploadWidget.prototype._getValue = /**
     * @private
     * @param {?} file
     * @return {?}
     */
    function (file) {
        return deepGet(file.response, this.i.resReName, file.response);
    };
    /**
     * @private
     * @param {?} fileList
     * @return {?}
     */
    UploadWidget.prototype.pureValue = /**
     * @private
     * @param {?} fileList
     * @return {?}
     */
    function (fileList) {
        var _this = this;
        fileList
            .filter((/**
         * @param {?} file
         * @return {?}
         */
        function (file) { return !file.url; }))
            .forEach((/**
         * @param {?} file
         * @return {?}
         */
        function (file) {
            file.url = deepGet(file.response, _this.i.urlReName);
        }));
        /** @type {?} */
        var res = fileList.filter((/**
         * @param {?} w
         * @return {?}
         */
        function (w) { return w.status === 'done'; })).map((/**
         * @param {?} file
         * @return {?}
         */
        function (file) { return _this._getValue(file); }));
        return this.i.multiple === true ? res : res.pop();
    };
    /**
     * @private
     * @param {?} fileList
     * @return {?}
     */
    UploadWidget.prototype._setValue = /**
     * @private
     * @param {?} fileList
     * @return {?}
     */
    function (fileList) {
        this.setValue(this.pureValue(fileList));
    };
    UploadWidget.decorators = [
        { type: Component, args: [{
                    selector: 'sf-upload',
                    template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-upload\n    [nzType]=\"i.type\"\n    [(nzFileList)]=\"fileList\"\n    [nzDisabled]=\"disabled\"\n    [nzAction]=\"i.action\"\n    [nzDirectory]=\"i.directory\"\n    [nzOpenFileDialogOnClick]=\"i.openFileDialogOnClick\"\n    [nzAccept]=\"i.accept\"\n    [nzLimit]=\"i.limit\"\n    [nzFilter]=\"i.filter\"\n    [nzSize]=\"i.size\"\n    [nzFileType]=\"i.fileType\"\n    [nzHeaders]=\"ui.headers\"\n    [nzData]=\"ui.data\"\n    [nzListType]=\"i.listType\"\n    [nzMultiple]=\"i.multiple\"\n    [nzName]=\"i.name\"\n    [nzShowUploadList]=\"i.showUploadList\"\n    [nzWithCredentials]=\"i.withCredentials\"\n    [nzBeforeUpload]=\"i.beforeUpload\"\n    [nzCustomRequest]=\"i.customRequest\"\n    [nzRemove]=\"ui.remove || handleRemove\"\n    [nzPreview]=\"handlePreview\"\n    [nzPreviewFile]=\"ui.previewFile\"\n    [nzDownload]=\"ui.download\"\n    [nzTransformFile]=\"ui.transformFile\"\n    (nzChange)=\"change($event)\"\n    [nzShowButton]=\"fileList.length < i.limitFileCount\"\n  >\n    <ng-container [ngSwitch]=\"btnType\">\n      <ng-container *ngSwitchCase=\"'plus'\">\n        <i nz-icon nzType=\"plus\"></i>\n        <div class=\"ant-upload-text\" [innerHTML]=\"i.text\"></div>\n      </ng-container>\n      <ng-container *ngSwitchCase=\"'drag'\">\n        <p class=\"ant-upload-drag-icon\"><i nz-icon nzType=\"inbox\"></i></p>\n        <p class=\"ant-upload-text\" [innerHTML]=\"i.text\"></p>\n        <p class=\"ant-upload-hint\" [innerHTML]=\"i.hint\"></p>\n      </ng-container>\n      <ng-container *ngSwitchDefault>\n        <button type=\"button\" nz-button><i nz-icon nzType=\"upload\"></i><span [innerHTML]=\"i.text\"></span></button>\n      </ng-container>\n    </ng-container>\n  </nz-upload>\n</sf-item-wrap>\n",
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    return UploadWidget;
}(ControlUIWidget));
export { UploadWidget };
if (false) {
    /** @type {?} */
    UploadWidget.prototype.i;
    /** @type {?} */
    UploadWidget.prototype.fileList;
    /** @type {?} */
    UploadWidget.prototype.btnType;
    /** @type {?} */
    UploadWidget.prototype.handleRemove;
    /** @type {?} */
    UploadWidget.prototype.handlePreview;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9mb3JtLyIsInNvdXJjZXMiOlsic3JjL3dpZGdldHMvdXBsb2FkL3VwbG9hZC53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUVyRCxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTFCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFHL0M7SUFNa0MsZ0NBQXFDO0lBTnZFO1FBQUEscUVBMEhDO1FBbEhDLGNBQVEsR0FBbUIsRUFBRSxDQUFDO1FBQzlCLGFBQU8sR0FBRyxFQUFFLENBQUM7UUE4RmIsa0JBQVk7OztRQUFHO1lBQ2IsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDOUIsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDLEVBQUM7UUFFRixtQkFBYTs7OztRQUFHLFVBQUMsSUFBa0I7WUFDakMsSUFBSSxLQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRTtnQkFDbkIsS0FBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3RCLE9BQU87YUFDUjs7Z0JBQ0ssSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLEdBQUc7WUFDdEMsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDVCxPQUFPO2FBQ1I7WUFDRCxLQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBaUIsY0FBYyxDQUFDLENBQUMs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LGdDQUE4Qjs7SUFDOUIsK0JBQWE7O0lBOEZiLG9DQUdFOztJQUVGLHFDQWFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBkZWVwR2V0IH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgTnpNb2RhbFNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL21vZGFsJztcbmltcG9ydCB7IE56VXBsb2FkQ2hhbmdlUGFyYW0sIE56VXBsb2FkRmlsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvdXBsb2FkJztcbmltcG9ydCB7IG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTRlZhbHVlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlJztcbmltcG9ydCB7IGdldERhdGEsIHRvQm9vbCB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IENvbnRyb2xVSVdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5pbXBvcnQgeyBTRlVwbG9hZFdpZGdldFNjaGVtYSB9IGZyb20gJy4vc2NoZW1hJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtdXBsb2FkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VwbG9hZC53aWRnZXQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBVcGxvYWRXaWRnZXQgZXh0ZW5kcyBDb250cm9sVUlXaWRnZXQ8U0ZVcGxvYWRXaWRnZXRTY2hlbWE+IGltcGxlbWVudHMgT25Jbml0IHtcbiAgaTogYW55O1xuICBmaWxlTGlzdDogTnpVcGxvYWRGaWxlW10gPSBbXTtcbiAgYnRuVHlwZSA9ICcnO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHtcbiAgICAgIHR5cGUsXG4gICAgICB0ZXh0LFxuICAgICAgaGludCxcbiAgICAgIGFjdGlvbixcbiAgICAgIGFjY2VwdCxcbiAgICAgIGxpbWl0LFxuICAgICAgZmlsdGVyLFxuICAgICAgZmlsZVNpemUsXG4gICAgICBmaWxlVHlwZSxcbiAgICAgIGxpc3RUeXBlLFxuICAgICAgbXVsdGlwbGUsXG4gICAgICBuYW1lLFxuICAgICAgc2hvd1VwbG9hZExpc3QsXG4gICAgICB3aXRoQ3JlZGVudGlhbHMsXG4gICAgICByZXNSZU5hbWUsXG4gICAgICB1cmxSZU5hbWUsXG4gICAgICBiZWZvcmVVcGxvYWQsXG4gICAgICBjdXN0b21SZXF1ZXN0LFxuICAgICAgZGlyZWN0b3J5LFxuICAgICAgb3BlbkZpbGVEaWFsb2dPbkNsaWNrLFxuICAgICAgbGltaXRGaWxlQ291bnQsXG4gICAgfSA9IHRoaXMudWk7XG4gICAgY29uc3QgcmVzOiBhbnkgPSB7XG4gICAgICB0eXBlOiB0eXBlIHx8ICdzZWxlY3QnLFxuICAgICAgdGV4dDogdGV4dCB8fCAn54K55Ye75LiK5LygJyxcbiAgICAgIGFjdGlvbjogYWN0aW9uIHx8ICcnLFxuICAgICAgYWNjZXB0OiBhY2NlcHQgfHwgJycsXG4gICAgICBkaXJlY3Rvcnk6IHRvQm9vbChkaXJlY3RvcnksIGZhbHNlKSxcbiAgICAgIG9wZW5GaWxlRGlhbG9nT25DbGljazogdG9Cb29sKG9wZW5GaWxlRGlhbG9nT25DbGljaywgdHJ1ZSksXG4gICAgICBsaW1pdDogbGltaXQgPT0gbnVsbCA/IDAgOiArbGltaXQsXG4gICAgICBmaWx0ZXI6IGZpbHRlciA9PSBudWxsID8gW10gOiBmaWx0ZXIsXG4gICAgICBzaXplOiBmaWxlU2l6ZSA9PSBudWxsID8gMCA6ICtmaWxlU2l6ZSxcbiAgICAgIGZpbGVUeXBlOiBmaWxlVHlwZSB8fCAnJyxcbiAgICAgIGxpc3RUeXBlOiBsaXN0VHlwZSB8fCAndGV4dCcsXG4gICAgICBtdWx0aXBsZTogdG9Cb29sKG11bHRpcGxlLCBmYWxzZSksXG4gICAgICBuYW1lOiBuYW1lIHx8ICdmaWxlJyxcbiAgICAgIHNob3dVcGxvYWRMaXN0OiBzaG93VXBsb2FkTGlzdCA9PSBudWxsID8gdHJ1ZSA6IHNob3dVcGxvYWRMaXN0LFxuICAgICAgd2l0aENyZWRlbnRpYWxzOiB0b0Jvb2wod2l0aENyZWRlbnRpYWxzLCBmYWxzZSksXG4gICAgICByZXNSZU5hbWU6IChyZXNSZU5hbWUgfHwgJycpLnNwbGl0KCcuJyksXG4gICAgICB1cmxSZU5hbWU6ICh1cmxSZU5hbWUgfHwgJycpLnNwbGl0KCcuJyksXG4gICAgICBiZWZvcmVVcGxvYWQ6IHR5cGVvZiBiZWZvcmVVcGxvYWQgPT09ICdmdW5jdGlvbicgPyBiZWZvcmVVcGxvYWQgOiBudWxsLFxuICAgICAgY3VzdG9tUmVxdWVzdDogdHlwZW9mIGN1c3RvbVJlcXVlc3QgPT09ICdmdW5jdGlvbicgPyBjdXN0b21SZXF1ZXN0IDogbnVsbCxcbiAgICAgIGxpbWl0RmlsZUNvdW50OiBsaW1pdEZpbGVDb3VudCB8fCA5OTksXG4gICAgfTtcbiAgICBpZiAocmVzLmxpc3RUeXBlID09PSAncGljdHVyZS1jYXJkJykge1xuICAgICAgdGhpcy5idG5UeXBlID0gJ3BsdXMnO1xuICAgIH1cbiAgICBpZiAocmVzLnR5cGUgPT09ICdkcmFnJykge1xuICAgICAgcmVzLmxpc3RUeXBlID0gbnVsbDtcbiAgICAgIHRoaXMuYnRuVHlwZSA9ICdkcmFnJztcbiAgICAgIHJlcy50ZXh0ID0gdGV4dCB8fCBg5Y2V5Ye75oiW5ouW5Yqo5paH5Lu25Yiw6K+l5Yy65Z+f5LiK5LygYDtcbiAgICAgIHJlcy5oaW50ID0gaGludCB8fCBg5pSv5oyB5Y2V5Liq5oiW5om56YeP77yM5Lil56aB5LiK5Lyg5YWs5Y+45pWw5o2u5oiW5YW25LuW5a6J5YWo5paH5Lu2YDtcbiAgICB9XG4gICAgdGhpcy5pID0gcmVzO1xuICB9XG5cbiAgY2hhbmdlKGFyZ3M6IE56VXBsb2FkQ2hhbmdlUGFyYW0pIHtcbiAgICBpZiAodGhpcy51aS5jaGFuZ2UpIHRoaXMudWkuY2hhbmdlKGFyZ3MpO1xuICAgIGlmIChhcmdzLnR5cGUgIT09ICdzdWNjZXNzJykgcmV0dXJuO1xuICAgIHRoaXMuX3NldFZhbHVlKGFyZ3MuZmlsZUxpc3QpO1xuICB9XG5cbiAgcmVzZXQodmFsdWU6IFNGVmFsdWUpIHtcbiAgICBjb25zdCB7IGZpbGVMaXN0IH0gPSB0aGlzLnVpO1xuICAgIChmaWxlTGlzdCA/IG9mKGZpbGVMaXN0KSA6IEFycmF5LmlzQXJyYXkodmFsdWUpID8gb2YodmFsdWUpIDogZ2V0RGF0YSh0aGlzLnNjaGVtYSwgdGhpcy51aSwgbnVsbCkpLnN1YnNjcmliZShsaXN0ID0+IHtcbiAgICAgIHRoaXMuZmlsZUxpc3QgPSBsaXN0IGFzIE56VXBsb2FkRmlsZVtdO1xuICAgICAgdGhpcy5mb3JtUHJvcGVydHkuX3ZhbHVlID0gdGhpcy5wdXJlVmFsdWUobGlzdCk7XG4gICAgICB0aGlzLmZvcm1Qcm9wZXJ0eS51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHsgb25seVNlbGY6IGZhbHNlLCBlbWl0VmFsdWVFdmVudDogZmFsc2UsIGVtaXRWYWxpZGF0b3I6IGZhbHNlIH0pO1xuICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRWYWx1ZShmaWxlOiBOelVwbG9hZEZpbGUpIHtcbiAgICByZXR1cm4gZGVlcEdldChmaWxlLnJlc3BvbnNlLCB0aGlzLmkucmVzUmVOYW1lLCBmaWxlLnJlc3BvbnNlKTtcbiAgfVxuXG4gIHByaXZhdGUgcHVyZVZhbHVlKGZpbGVMaXN0OiBOelVwbG9hZEZpbGVbXSkge1xuICAgIGZpbGVMaXN0XG4gICAgICAuZmlsdGVyKGZpbGUgPT4gIWZpbGUudXJsKVxuICAgICAgLmZvckVhY2goZmlsZSA9PiB7XG4gICAgICAgIGZpbGUudXJsID0gZGVlcEdldChmaWxlLnJlc3BvbnNlLCB0aGlzLmkudXJsUmVOYW1lKTtcbiAgICAgIH0pO1xuICAgIGNvbnN0IHJlcyA9IGZpbGVMaXN0LmZpbHRlcih3ID0+IHcuc3RhdHVzID09PSAnZG9uZScpLm1hcChmaWxlID0+IHRoaXMuX2dldFZhbHVlKGZpbGUpKTtcbiAgICByZXR1cm4gdGhpcy5pLm11bHRpcGxlID09PSB0cnVlID8gcmVzIDogcmVzLnBvcCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0VmFsdWUoZmlsZUxpc3Q6IE56VXBsb2FkRmlsZVtdKSB7XG4gICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnB1cmVWYWx1ZShmaWxlTGlzdCkpO1xuICB9XG5cbiAgaGFuZGxlUmVtb3ZlID0gKCkgPT4ge1xuICAgIHRoaXMuX3NldFZhbHVlKHRoaXMuZmlsZUxpc3QpO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGhhbmRsZVByZXZpZXcgPSAoZmlsZTogTnpVcGxvYWRGaWxlKSA9PiB7XG4gICAgaWYgKHRoaXMudWkucHJldmlldykge1xuICAgICAgdGhpcy51aS5wcmV2aWV3KGZpbGUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBfdXJsID0gZmlsZS50aHVtYlVybCB8fCBmaWxlLnVybDtcbiAgICBpZiAoIV91cmwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5pbmplY3Rvci5nZXQ8TnpNb2RhbFNlcnZpY2U+KE56TW9kYWxTZXJ2aWNlKS5jcmVhdGUoe1xuICAgICAgbnpDb250ZW50OiBgPGltZyBzcmM9XCIke191cmx9XCIgY2xhc3M9XCJpbWctZmx1aWRcIiAvPmAsXG4gICAgICBuekZvb3RlcjogbnVsbCxcbiAgICB9KTtcbiAgfTtcbn1cbiJdfQ==