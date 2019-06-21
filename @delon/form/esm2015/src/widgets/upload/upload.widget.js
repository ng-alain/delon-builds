/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { deepGet } from '@delon/util';
import { NzModalService } from 'ng-zorro-antd/modal';
import { of } from 'rxjs';
import { getData, toBool } from '../../utils';
import { ControlUIWidget } from '../../widget';
export class UploadWidget extends ControlUIWidget {
    constructor() {
        super(...arguments);
        this.fileList = [];
        this.btnType = '';
        this.handleRemove = (/**
         * @return {?}
         */
        () => {
            this._setValue(this.fileList);
            return true;
        });
        this.handlePreview = (/**
         * @param {?} file
         * @return {?}
         */
        (file) => {
            if (this.ui.preview) {
                this.ui.preview(file);
                return;
            }
            /** @type {?} */
            const _url = file.thumbUrl || file.url;
            if (!_url) {
                return;
            }
            this.injector.get(NzModalService).create({
                nzContent: `<img src="${_url}" class="img-fluid" />`,
                nzFooter: null,
            });
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        const { type, text, action, accept, limit, filter, fileSize, fileType, listType, multiple, name, showUploadList, withCredentials, resReName, urlReName, beforeUpload, customRequest, directory, openFileDialogOnClick, } = this.ui;
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
            urlReName: (urlReName || '').split('.'),
            beforeUpload: typeof beforeUpload === 'function' ? beforeUpload : null,
            customRequest: typeof customRequest === 'function' ? customRequest : null,
        };
        if (this.i.listType === 'picture-card') {
            this.btnType = 'plus';
        }
        if (this.i.type === 'drag') {
            this.i.listType = null;
            this.btnType = 'drag';
            this.i.text = this.ui.text || `单击或拖动文件到该区域上传`;
            this.i.hint = this.ui.hint || `支持单个或批量，严禁上传公司数据或其他安全文件`;
        }
    }
    /**
     * @param {?} args
     * @return {?}
     */
    change(args) {
        if (this.ui.change)
            this.ui.change(args);
        if (args.type !== 'success')
            return;
        this._setValue(args.fileList);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    reset(value) {
        const { fileList } = this.ui;
        (fileList ? of(fileList) : Array.isArray(value) ? of(value) : getData(this.schema, this.ui, null)).subscribe((/**
         * @param {?} list
         * @return {?}
         */
        list => {
            this.fileList = (/** @type {?} */ (list));
            this._setValue(this.fileList);
            this.detectChanges();
        }));
    }
    /**
     * @private
     * @param {?} file
     * @return {?}
     */
    _getValue(file) {
        return deepGet(file.response, this.i.resReName, file.response);
    }
    /**
     * @private
     * @param {?} fileList
     * @return {?}
     */
    _setValue(fileList) {
        fileList
            .filter((/**
         * @param {?} file
         * @return {?}
         */
        file => !file.url))
            .forEach((/**
         * @param {?} file
         * @return {?}
         */
        file => {
            file.url = deepGet(file.response, this.i.urlReName);
        }));
        /** @type {?} */
        const res = fileList.filter((/**
         * @param {?} w
         * @return {?}
         */
        w => w.status === 'done')).map((/**
         * @param {?} file
         * @return {?}
         */
        file => this._getValue(file)));
        this.setValue(this.i.multiple === true ? res : res.pop());
    }
}
UploadWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-upload',
                template: "<sf-item-wrap [id]=\"id\"\n              [schema]=\"schema\"\n              [ui]=\"ui\"\n              [showError]=\"showError\"\n              [error]=\"error\"\n              [showTitle]=\"schema.title\">\n  <nz-upload [nzType]=\"i.type\"\n             [(nzFileList)]=\"fileList\"\n             [nzDisabled]=\"disabled\"\n             [nzAction]=\"i.action\"\n             [nzDirectory]=\"i.directory\"\n             [nzOpenFileDialogOnClick]=\"i.openFileDialogOnClick\"\n             [nzAccept]=\"i.accept\"\n             [nzLimit]=\"i.limit\"\n             [nzFilter]=\"i.filter\"\n             [nzSize]=\"i.size\"\n             [nzFileType]=\"i.fileType\"\n             [nzHeaders]=\"ui.headers\"\n             [nzData]=\"ui.data\"\n             [nzListType]=\"i.listType\"\n             [nzMultiple]=\"i.multiple\"\n             [nzName]=\"i.name\"\n             [nzShowUploadList]=\"i.showUploadList\"\n             [nzWithCredentials]=\"i.withCredentials\"\n             [nzBeforeUpload]=\"i.beforeUpload\"\n             [nzCustomRequest]=\"i.customRequest\"\n             [nzRemove]=\"ui.remove || handleRemove\"\n             [nzPreview]=\"handlePreview\"\n             (nzChange)=\"change($event)\">\n    <ng-container [ngSwitch]=\"btnType\">\n      <ng-container *ngSwitchCase=\"'plus'\">\n        <i nz-icon nzType=\"plus\"></i>\n        <div class=\"ant-upload-text\"\n             [innerHTML]=\"i.text\"></div>\n      </ng-container>\n      <ng-container *ngSwitchCase=\"'drag'\">\n        <p class=\"ant-upload-drag-icon\"><i nz-icon nzType=\"inbox\"></i></p>\n        <p class=\"ant-upload-text\"\n           [innerHTML]=\"i.text\"></p>\n        <p class=\"ant-upload-hint\"\n           [innerHTML]=\"i.hint\"></p>\n      </ng-container>\n      <ng-container *ngSwitchDefault>\n        <button type=\"button\"\n                nz-button>\n          <i nz-icon nzType=\"upload\"></i><span [innerHTML]=\"i.text\"></span>\n        </button>\n      </ng-container>\n    </ng-container>\n  </nz-upload>\n</sf-item-wrap>\n",
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None
            }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9mb3JtLyIsInNvdXJjZXMiOlsic3JjL3dpZGdldHMvdXBsb2FkL3VwbG9hZC53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN0QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFckQsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUxQixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM5QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBUy9DLE1BQU0sT0FBTyxZQUFhLFNBQVEsZUFBcUM7SUFOdkU7O1FBUUUsYUFBUSxHQUFpQixFQUFFLENBQUM7UUFDNUIsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQXFGYixpQkFBWTs7O1FBQUcsR0FBRyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzlCLE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQyxFQUFDO1FBRUYsa0JBQWE7Ozs7UUFBRyxDQUFDLElBQWdCLEVBQUUsRUFBRTtZQUNuQyxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFO2dCQUNuQixJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdEIsT0FBTzthQUNSOztrQkFDSyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsR0FBRztZQUN0QyxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNULE9BQU87YUFDUjtZQUNELElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxD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RUFBRTtZQUNkLElBQUksQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN0RCxDQUFDLEVBQUMsQ0FBQzs7Y0FDQyxHQUFHLEdBQUcsUUFBUSxDQUFDLE1BQU07Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssTUFBTSxFQUFDLENBQUMsR0FBRzs7OztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBQztRQUN2RixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUM1RCxDQUFDOzs7WUE1RkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQiw2L0RBQW1DO2dCQUNuQyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0Qzs7OztJQUVDLHlCQUFPOztJQUNQLGdDQUE0Qjs7SUFDNUIsK0JBQWE7O0lBcUZiLG9DQUdFOztJQUVGLHFDQWFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBkZWVwR2V0IH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgTnpNb2RhbFNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL21vZGFsJztcbmltcG9ydCB7IFVwbG9hZENoYW5nZVBhcmFtLCBVcGxvYWRGaWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC91cGxvYWQnO1xuaW1wb3J0IHsgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFNGVmFsdWUgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgZ2V0RGF0YSwgdG9Cb29sIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgQ29udHJvbFVJV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcbmltcG9ydCB7IFNGVXBsb2FkV2lkZ2V0U2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi11cGxvYWQnLFxuICB0ZW1wbGF0ZVVybDogJy4vdXBsb2FkLndpZGdldC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIFVwbG9hZFdpZGdldCBleHRlbmRzIENvbnRyb2xVSVdpZGdldDxTRlVwbG9hZFdpZGdldFNjaGVtYT4gaW1wbGVtZW50cyBPbkluaXQge1xuICBpOiBhbnk7XG4gIGZpbGVMaXN0OiBVcGxvYWRGaWxlW10gPSBbXTtcbiAgYnRuVHlwZSA9ICcnO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHtcbiAgICAgIHR5cGUsXG4gICAgICB0ZXh0LFxuICAgICAgYWN0aW9uLFxuICAgICAgYWNjZXB0LFxuICAgICAgbGltaXQsXG4gICAgICBmaWx0ZXIsXG4gICAgICBmaWxlU2l6ZSxcbiAgICAgIGZpbGVUeXBlLFxuICAgICAgbGlzdFR5cGUsXG4gICAgICBtdWx0aXBsZSxcbiAgICAgIG5hbWUsXG4gICAgICBzaG93VXBsb2FkTGlzdCxcbiAgICAgIHdpdGhDcmVkZW50aWFscyxcbiAgICAgIHJlc1JlTmFtZSxcbiAgICAgIHVybFJlTmFtZSxcbiAgICAgIGJlZm9yZVVwbG9hZCxcbiAgICAgIGN1c3RvbVJlcXVlc3QsXG4gICAgICBkaXJlY3RvcnksXG4gICAgICBvcGVuRmlsZURpYWxvZ09uQ2xpY2ssXG4gICAgfSA9IHRoaXMudWk7XG4gICAgdGhpcy5pID0ge1xuICAgICAgdHlwZTogdHlwZSB8fCAnc2VsZWN0JyxcbiAgICAgIHRleHQ6IHRleHQgfHwgJ+eCueWHu+S4iuS8oCcsXG4gICAgICBhY3Rpb246IGFjdGlvbiB8fCAnJyxcbiAgICAgIGFjY2VwdDogYWNjZXB0IHx8ICcnLFxuICAgICAgZGlyZWN0b3J5OiB0b0Jvb2woZGlyZWN0b3J5LCBmYWxzZSksXG4gICAgICBvcGVuRmlsZURpYWxvZ09uQ2xpY2s6IHRvQm9vbChvcGVuRmlsZURpYWxvZ09uQ2xpY2ssIHRydWUpLFxuICAgICAgbGltaXQ6IGxpbWl0ID09IG51bGwgPyAwIDogK2xpbWl0LFxuICAgICAgZmlsdGVyOiBmaWx0ZXIgPT0gbnVsbCA/IFtdIDogZmlsdGVyLFxuICAgICAgc2l6ZTogZmlsZVNpemUgPT0gbnVsbCA/IDAgOiArZmlsZVNpemUsXG4gICAgICBmaWxlVHlwZTogZmlsZVR5cGUgfHwgJycsXG4gICAgICBsaXN0VHlwZTogbGlzdFR5cGUgfHwgJ3RleHQnLFxuICAgICAgbXVsdGlwbGU6IHRvQm9vbChtdWx0aXBsZSwgZmFsc2UpLFxuICAgICAgbmFtZTogbmFtZSB8fCAnZmlsZScsXG4gICAgICBzaG93VXBsb2FkTGlzdDogdG9Cb29sKHNob3dVcGxvYWRMaXN0LCB0cnVlKSxcbiAgICAgIHdpdGhDcmVkZW50aWFsczogdG9Cb29sKHdpdGhDcmVkZW50aWFscywgZmFsc2UpLFxuICAgICAgcmVzUmVOYW1lOiAocmVzUmVOYW1lIHx8ICcnKS5zcGxpdCgnLicpLFxuICAgICAgdXJsUmVOYW1lOiAodXJsUmVOYW1lIHx8ICcnKS5zcGxpdCgnLicpLFxuICAgICAgYmVmb3JlVXBsb2FkOiB0eXBlb2YgYmVmb3JlVXBsb2FkID09PSAnZnVuY3Rpb24nID8gYmVmb3JlVXBsb2FkIDogbnVsbCxcbiAgICAgIGN1c3RvbVJlcXVlc3Q6IHR5cGVvZiBjdXN0b21SZXF1ZXN0ID09PSAnZnVuY3Rpb24nID8gY3VzdG9tUmVxdWVzdCA6IG51bGwsXG4gICAgfTtcbiAgICBpZiAodGhpcy5pLmxpc3RUeXBlID09PSAncGljdHVyZS1jYXJkJykge1xuICAgICAgdGhpcy5idG5UeXBlID0gJ3BsdXMnO1xuICAgIH1cbiAgICBpZiAodGhpcy5pLnR5cGUgPT09ICdkcmFnJykge1xuICAgICAgdGhpcy5pLmxpc3RUeXBlID0gbnVsbDtcbiAgICAgIHRoaXMuYnRuVHlwZSA9ICdkcmFnJztcbiAgICAgIHRoaXMuaS50ZXh0ID0gdGhpcy51aS50ZXh0IHx8IGDljZXlh7vmiJbmi5bliqjmlofku7bliLDor6XljLrln5/kuIrkvKBgO1xuICAgICAgdGhpcy5pLmhpbnQgPSB0aGlzLnVpLmhpbnQgfHwgYOaUr+aMgeWNleS4quaIluaJuemHj++8jOS4peemgeS4iuS8oOWFrOWPuOaVsOaNruaIluWFtuS7luWuieWFqOaWh+S7tmA7XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlKGFyZ3M6IFVwbG9hZENoYW5nZVBhcmFtKSB7XG4gICAgaWYgKHRoaXMudWkuY2hhbmdlKSB0aGlzLnVpLmNoYW5nZShhcmdzKTtcbiAgICBpZiAoYXJncy50eXBlICE9PSAnc3VjY2VzcycpIHJldHVybjtcbiAgICB0aGlzLl9zZXRWYWx1ZShhcmdzLmZpbGVMaXN0KTtcbiAgfVxuXG4gIHJlc2V0KHZhbHVlOiBTRlZhbHVlKSB7XG4gICAgY29uc3QgeyBmaWxlTGlzdCB9ID0gdGhpcy51aTtcbiAgICAoZmlsZUxpc3QgPyBvZihmaWxlTGlzdCkgOiBBcnJheS5pc0FycmF5KHZhbHVlKSA/IG9mKHZhbHVlKSA6IGdldERhdGEodGhpcy5zY2hlbWEsIHRoaXMudWksIG51bGwpKS5zdWJzY3JpYmUobGlzdCA9PiB7XG4gICAgICB0aGlzLmZpbGVMaXN0ID0gbGlzdCBhcyBVcGxvYWRGaWxlW107XG4gICAgICB0aGlzLl9zZXRWYWx1ZSh0aGlzLmZpbGVMaXN0KTtcbiAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0VmFsdWUoZmlsZTogVXBsb2FkRmlsZSkge1xuICAgIHJldHVybiBkZWVwR2V0KGZpbGUucmVzcG9uc2UsIHRoaXMuaS5yZXNSZU5hbWUsIGZpbGUucmVzcG9uc2UpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0VmFsdWUoZmlsZUxpc3Q6IFVwbG9hZEZpbGVbXSkge1xuICAgIGZpbGVMaXN0XG4gICAgICAuZmlsdGVyKGZpbGUgPT4gIWZpbGUudXJsKVxuICAgICAgLmZvckVhY2goZmlsZSA9PiB7XG4gICAgICAgIGZpbGUudXJsID0gZGVlcEdldChmaWxlLnJlc3BvbnNlLCB0aGlzLmkudXJsUmVOYW1lKTtcbiAgICAgIH0pO1xuICAgIGNvbnN0IHJlcyA9IGZpbGVMaXN0LmZpbHRlcih3ID0+IHcuc3RhdHVzID09PSAnZG9uZScpLm1hcChmaWxlID0+IHRoaXMuX2dldFZhbHVlKGZpbGUpKTtcbiAgICB0aGlzLnNldFZhbHVlKHRoaXMuaS5tdWx0aXBsZSA9PT0gdHJ1ZSA/IHJlcyA6IHJlcy5wb3AoKSk7XG4gIH1cblxuICBoYW5kbGVSZW1vdmUgPSAoKSA9PiB7XG4gICAgdGhpcy5fc2V0VmFsdWUodGhpcy5maWxlTGlzdCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgaGFuZGxlUHJldmlldyA9IChmaWxlOiBVcGxvYWRGaWxlKSA9PiB7XG4gICAgaWYgKHRoaXMudWkucHJldmlldykge1xuICAgICAgdGhpcy51aS5wcmV2aWV3KGZpbGUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBfdXJsID0gZmlsZS50aHVtYlVybCB8fCBmaWxlLnVybDtcbiAgICBpZiAoIV91cmwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5pbmplY3Rvci5nZXQ8TnpNb2RhbFNlcnZpY2U+KE56TW9kYWxTZXJ2aWNlKS5jcmVhdGUoe1xuICAgICAgbnpDb250ZW50OiBgPGltZyBzcmM9XCIke191cmx9XCIgY2xhc3M9XCJpbWctZmx1aWRcIiAvPmAsXG4gICAgICBuekZvb3RlcjogbnVsbCxcbiAgICB9KTtcbiAgfTtcbn1cbiJdfQ==