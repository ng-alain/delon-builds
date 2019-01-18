/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { deepGet } from '@delon/util';
import { NzModalService } from 'ng-zorro-antd';
import { of } from 'rxjs';
import { getData, toBool } from '../../utils';
import { ControlWidget } from '../../widget';
export class UploadWidget extends ControlWidget {
    constructor() {
        super(...arguments);
        this.fileList = [];
        this.btnType = '';
        this.handlePreview = (file) => {
            if (this.ui.preview) {
                this.ui.preview(file);
                return;
            }
            this.injector
                .get(NzModalService)
                .create({
                nzContent: `<img src="${file.url ||
                    file.thumbUrl}" class="img-fluid" />`,
                nzFooter: null,
            })
                .afterClose.subscribe(() => this.detectChanges());
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        const { type, text, action, accept, limit, filter, fileSize, fileType, listType, multiple, name, showUploadList, withCredentials, resReName, beforeUpload, customRequest, directory, openFileDialogOnClick, } = this.ui;
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
            this.i.text = this.ui.text || `单击或拖动文件到该区域上传`;
            this.i.hint =
                this.ui.hint || `支持单个或批量，严禁上传公司数据或其他安全文件`;
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
        (fileList
            ? of(fileList)
            : getData(this.schema, this.ui, this.formProperty.formData)).subscribe(list => {
            this.fileList = (/** @type {?} */ (list));
            this._setValue(this.fileList);
            this.detectChanges();
        });
    }
    /**
     * @param {?} fileList
     * @return {?}
     */
    _setValue(fileList) {
        /** @type {?} */
        const res = fileList.map(item => deepGet(item.response, this.i.resReName, item.response));
        this.setValue(this.i.multiple === true ? res : res.pop());
    }
}
UploadWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-upload',
                template: `
    <sf-item-wrap
      [id]="id"
      [schema]="schema"
      [ui]="ui"
      [showError]="showError"
      [error]="error"
      [showTitle]="schema.title"
    >
      <nz-upload
        [nzType]="i.type"
        [nzFileList]="fileList"
        [nzDisabled]="disabled"
        [nzAction]="i.action"
        [nzDirectory]="i.directory"
        [nzOpenFileDialogOnClick]="i.openFileDialogOnClick"
        [nzAccept]="i.accept"
        [nzLimit]="i.limit"
        [nzFilter]="i.filter"
        [nzSize]="i.size"
        [nzFileType]="i.fileType"
        [nzHeaders]="ui.headers"
        [nzData]="ui.data"
        [nzListType]="i.listType"
        [nzMultiple]="i.multiple"
        [nzName]="i.name"
        [nzShowUploadList]="i.showUploadList"
        [nzWithCredentials]="i.withCredentials"
        [nzBeforeUpload]="i.beforeUpload"
        [nzCustomRequest]="i.customRequest"
        [nzRemove]="ui.remove"
        [nzPreview]="handlePreview"
        (nzChange)="change($event)"
      >
        <ng-container [ngSwitch]="btnType">
          <ng-container *ngSwitchCase="'plus'">
            <i nz-icon type="plus"></i>
            <div class="ant-upload-text" [innerHTML]="i.text"></div>
          </ng-container>
          <ng-container *ngSwitchCase="'drag'">
            <p class="ant-upload-drag-icon"><i nz-icon type="inbox"></i></p>
            <p class="ant-upload-text" [innerHTML]="i.text"></p>
            <p class="ant-upload-hint" [innerHTML]="i.hint"></p>
          </ng-container>
          <ng-container *ngSwitchDefault>
            <button type="button" nz-button>
              <i nz-icon type="upload"></i><span [innerHTML]="i.text"></span>
            </button>
          </ng-container>
        </ng-container>
      </nz-upload>
    </sf-item-wrap>
  `
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
    UploadWidget.prototype.handlePreview;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9mb3JtLyIsInNvdXJjZXMiOlsic3JjL3dpZGdldHMvdXBsb2FkL3VwbG9hZC53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN0QyxPQUFPLEVBQUUsY0FBYyxFQUFpQyxNQUFNLGVBQWUsQ0FBQztBQUM5RSxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTFCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxjQUFjLENBQUM7QUEwRDdDLE1BQU0sT0FBTyxZQUFhLFNBQVEsYUFBYTtJQXhEL0M7O1FBMkRFLGFBQVEsR0FBaUIsRUFBRSxDQUFDO1FBQzVCLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFnRmIsa0JBQWEsR0FBRyxDQUFDLElBQWdCLEVBQUUsRUFBRTtZQUNuQyxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFO2dCQUNuQixJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdEIsT0FBTzthQUNSO1lBQ0QsSUFBSSxDQUFDLFFBQVE7aUJBQ1YsR0FBRyxDQUFDLGNBQWMsQ0FBQztpQkFDbkIsTUFBTSxDQUFDO2dCQUNOLFNBQVMsRUFBRSxhQUFhLElBQUksQ0FBQyxHQUFHO29CQUM5QixJQUFJLENBQUMsUUFBUSx3QkFBd0I7Z0JBQ3ZDLFFBQVEsRUFBRSxJQUFJO2FBQ2YsQ0FBQztpQkFDRCxVQUFVLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1FBQ3RELENBQUMsQ0FBQTtJQUNILENB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IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBkZWVwR2V0IH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgTnpNb2RhbFNlcnZpY2UsIFVwbG9hZENoYW5nZVBhcmFtLCBVcGxvYWRGaWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XG5pbXBvcnQgeyBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU0ZWYWx1ZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBnZXREYXRhLCB0b0Jvb2wgfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtdXBsb2FkJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c2YtaXRlbS13cmFwXG4gICAgICBbaWRdPVwiaWRcIlxuICAgICAgW3NjaGVtYV09XCJzY2hlbWFcIlxuICAgICAgW3VpXT1cInVpXCJcbiAgICAgIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCJcbiAgICAgIFtlcnJvcl09XCJlcnJvclwiXG4gICAgICBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiXG4gICAgPlxuICAgICAgPG56LXVwbG9hZFxuICAgICAgICBbbnpUeXBlXT1cImkudHlwZVwiXG4gICAgICAgIFtuekZpbGVMaXN0XT1cImZpbGVMaXN0XCJcbiAgICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICBbbnpBY3Rpb25dPVwiaS5hY3Rpb25cIlxuICAgICAgICBbbnpEaXJlY3RvcnldPVwiaS5kaXJlY3RvcnlcIlxuICAgICAgICBbbnpPcGVuRmlsZURpYWxvZ09uQ2xpY2tdPVwiaS5vcGVuRmlsZURpYWxvZ09uQ2xpY2tcIlxuICAgICAgICBbbnpBY2NlcHRdPVwiaS5hY2NlcHRcIlxuICAgICAgICBbbnpMaW1pdF09XCJpLmxpbWl0XCJcbiAgICAgICAgW256RmlsdGVyXT1cImkuZmlsdGVyXCJcbiAgICAgICAgW256U2l6ZV09XCJpLnNpemVcIlxuICAgICAgICBbbnpGaWxlVHlwZV09XCJpLmZpbGVUeXBlXCJcbiAgICAgICAgW256SGVhZGVyc109XCJ1aS5oZWFkZXJzXCJcbiAgICAgICAgW256RGF0YV09XCJ1aS5kYXRhXCJcbiAgICAgICAgW256TGlzdFR5cGVdPVwiaS5saXN0VHlwZVwiXG4gICAgICAgIFtuek11bHRpcGxlXT1cImkubXVsdGlwbGVcIlxuICAgICAgICBbbnpOYW1lXT1cImkubmFtZVwiXG4gICAgICAgIFtuelNob3dVcGxvYWRMaXN0XT1cImkuc2hvd1VwbG9hZExpc3RcIlxuICAgICAgICBbbnpXaXRoQ3JlZGVudGlhbHNdPVwiaS53aXRoQ3JlZGVudGlhbHNcIlxuICAgICAgICBbbnpCZWZvcmVVcGxvYWRdPVwiaS5iZWZvcmVVcGxvYWRcIlxuICAgICAgICBbbnpDdXN0b21SZXF1ZXN0XT1cImkuY3VzdG9tUmVxdWVzdFwiXG4gICAgICAgIFtuelJlbW92ZV09XCJ1aS5yZW1vdmVcIlxuICAgICAgICBbbnpQcmV2aWV3XT1cImhhbmRsZVByZXZpZXdcIlxuICAgICAgICAobnpDaGFuZ2UpPVwiY2hhbmdlKCRldmVudClcIlxuICAgICAgPlxuICAgICAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJidG5UeXBlXCI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ3BsdXMnXCI+XG4gICAgICAgICAgICA8aSBuei1pY29uIHR5cGU9XCJwbHVzXCI+PC9pPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFudC11cGxvYWQtdGV4dFwiIFtpbm5lckhUTUxdPVwiaS50ZXh0XCI+PC9kaXY+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ2RyYWcnXCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImFudC11cGxvYWQtZHJhZy1pY29uXCI+PGkgbnotaWNvbiB0eXBlPVwiaW5ib3hcIj48L2k+PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJhbnQtdXBsb2FkLXRleHRcIiBbaW5uZXJIVE1MXT1cImkudGV4dFwiPjwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiYW50LXVwbG9hZC1oaW50XCIgW2lubmVySFRNTF09XCJpLmhpbnRcIj48L3A+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hEZWZhdWx0PlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgbnotYnV0dG9uPlxuICAgICAgICAgICAgICA8aSBuei1pY29uIHR5cGU9XCJ1cGxvYWRcIj48L2k+PHNwYW4gW2lubmVySFRNTF09XCJpLnRleHRcIj48L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8L256LXVwbG9hZD5cbiAgICA8L3NmLWl0ZW0td3JhcD5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgVXBsb2FkV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgaTogYW55O1xuICBmaWxlTGlzdDogVXBsb2FkRmlsZVtdID0gW107XG4gIGJ0blR5cGUgPSAnJztcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCB7XG4gICAgICB0eXBlLFxuICAgICAgdGV4dCxcbiAgICAgIGFjdGlvbixcbiAgICAgIGFjY2VwdCxcbiAgICAgIGxpbWl0LFxuICAgICAgZmlsdGVyLFxuICAgICAgZmlsZVNpemUsXG4gICAgICBmaWxlVHlwZSxcbiAgICAgIGxpc3RUeXBlLFxuICAgICAgbXVsdGlwbGUsXG4gICAgICBuYW1lLFxuICAgICAgc2hvd1VwbG9hZExpc3QsXG4gICAgICB3aXRoQ3JlZGVudGlhbHMsXG4gICAgICByZXNSZU5hbWUsXG4gICAgICBiZWZvcmVVcGxvYWQsXG4gICAgICBjdXN0b21SZXF1ZXN0LFxuICAgICAgZGlyZWN0b3J5LFxuICAgICAgb3BlbkZpbGVEaWFsb2dPbkNsaWNrLFxuICAgIH0gPSB0aGlzLnVpO1xuICAgIHRoaXMuaSA9IHtcbiAgICAgIHR5cGU6IHR5cGUgfHwgJ3NlbGVjdCcsXG4gICAgICB0ZXh0OiB0ZXh0IHx8ICfngrnlh7vkuIrkvKAnLFxuICAgICAgYWN0aW9uOiBhY3Rpb24gfHwgJycsXG4gICAgICBhY2NlcHQ6IGFjY2VwdCB8fCAnJyxcbiAgICAgIGRpcmVjdG9yeTogdG9Cb29sKGRpcmVjdG9yeSwgZmFsc2UpLFxuICAgICAgb3BlbkZpbGVEaWFsb2dPbkNsaWNrOiB0b0Jvb2wob3BlbkZpbGVEaWFsb2dPbkNsaWNrLCB0cnVlKSxcbiAgICAgIGxpbWl0OiBsaW1pdCA9PSBudWxsID8gMCA6ICtsaW1pdCxcbiAgICAgIGZpbHRlcjogZmlsdGVyID09IG51bGwgPyBbXSA6IGZpbHRlcixcbiAgICAgIHNpemU6IGZpbGVTaXplID09IG51bGwgPyAwIDogK2ZpbGVTaXplLFxuICAgICAgZmlsZVR5cGU6IGZpbGVUeXBlIHx8ICcnLFxuICAgICAgbGlzdFR5cGU6IGxpc3RUeXBlIHx8ICd0ZXh0JyxcbiAgICAgIG11bHRpcGxlOiB0b0Jvb2wobXVsdGlwbGUsIGZhbHNlKSxcbiAgICAgIG5hbWU6IG5hbWUgfHwgJ2ZpbGUnLFxuICAgICAgc2hvd1VwbG9hZExpc3Q6IHRvQm9vbChzaG93VXBsb2FkTGlzdCwgdHJ1ZSksXG4gICAgICB3aXRoQ3JlZGVudGlhbHM6IHRvQm9vbCh3aXRoQ3JlZGVudGlhbHMsIGZhbHNlKSxcbiAgICAgIHJlc1JlTmFtZTogKHJlc1JlTmFtZSB8fCAnJykuc3BsaXQoJy4nKSxcbiAgICAgIGJlZm9yZVVwbG9hZDogdHlwZW9mIGJlZm9yZVVwbG9hZCA9PT0gJ2Z1bmN0aW9uJyA/IGJlZm9yZVVwbG9hZCA6IG51bGwsXG4gICAgICBjdXN0b21SZXF1ZXN0OiB0eXBlb2YgY3VzdG9tUmVxdWVzdCA9PT0gJ2Z1bmN0aW9uJyA/IGN1c3RvbVJlcXVlc3QgOiBudWxsLFxuICAgIH07XG4gICAgaWYgKHRoaXMuaS5saXN0VHlwZSA9PT0gJ3BpY3R1cmUtY2FyZCcpIHtcbiAgICAgIHRoaXMuYnRuVHlwZSA9ICdwbHVzJztcbiAgICB9XG4gICAgaWYgKHRoaXMuaS50eXBlID09PSAnZHJhZycpIHtcbiAgICAgIHRoaXMuaS5saXN0VHlwZSA9IG51bGw7XG4gICAgICB0aGlzLmJ0blR5cGUgPSAnZHJhZyc7XG4gICAgICB0aGlzLmkudGV4dCA9IHRoaXMudWkudGV4dCB8fCBg5Y2V5Ye75oiW5ouW5Yqo5paH5Lu25Yiw6K+l5Yy65Z+f5LiK5LygYDtcbiAgICAgIHRoaXMuaS5oaW50ID1cbiAgICAgICAgdGhpcy51aS5oaW50IHx8IGDmlK/mjIHljZXkuKrmiJbmibnph4/vvIzkuKXnpoHkuIrkvKDlhazlj7jmlbDmja7miJblhbbku5blronlhajmlofku7ZgO1xuICAgIH1cbiAgfVxuXG4gIGNoYW5nZShhcmdzOiBVcGxvYWRDaGFuZ2VQYXJhbSkge1xuICAgIGlmICh0aGlzLnVpLmNoYW5nZSkgdGhpcy51aS5jaGFuZ2UoYXJncyk7XG4gICAgaWYgKGFyZ3MudHlwZSAhPT0gJ3N1Y2Nlc3MnKSByZXR1cm47XG4gICAgdGhpcy5fc2V0VmFsdWUoYXJncy5maWxlTGlzdCk7XG4gIH1cblxuICByZXNldCh2YWx1ZTogU0ZWYWx1ZSkge1xuICAgIGNvbnN0IHsgZmlsZUxpc3QgfSA9IHRoaXMudWk7XG4gICAgKGZpbGVMaXN0XG4gICAgICA/IG9mKGZpbGVMaXN0KVxuICAgICAgOiBnZXREYXRhKHRoaXMuc2NoZW1hLCB0aGlzLnVpLCB0aGlzLmZvcm1Qcm9wZXJ0eS5mb3JtRGF0YSlcbiAgICApLnN1YnNjcmliZShsaXN0ID0+IHtcbiAgICAgIHRoaXMuZmlsZUxpc3QgPSBsaXN0IGFzIFVwbG9hZEZpbGVbXTtcbiAgICAgIHRoaXMuX3NldFZhbHVlKHRoaXMuZmlsZUxpc3QpO1xuICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9zZXRWYWx1ZShmaWxlTGlzdDogVXBsb2FkRmlsZVtdKSB7XG4gICAgY29uc3QgcmVzID0gZmlsZUxpc3QubWFwKGl0ZW0gPT5cbiAgICAgIGRlZXBHZXQoaXRlbS5yZXNwb25zZSwgdGhpcy5pLnJlc1JlTmFtZSwgaXRlbS5yZXNwb25zZSksXG4gICAgKTtcbiAgICB0aGlzLnNldFZhbHVlKHRoaXMuaS5tdWx0aXBsZSA9PT0gdHJ1ZSA/IHJlcyA6IHJlcy5wb3AoKSk7XG4gIH1cblxuICBoYW5kbGVQcmV2aWV3ID0gKGZpbGU6IFVwbG9hZEZpbGUpID0+IHtcbiAgICBpZiAodGhpcy51aS5wcmV2aWV3KSB7XG4gICAgICB0aGlzLnVpLnByZXZpZXcoZmlsZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuaW5qZWN0b3JcbiAgICAgIC5nZXQoTnpNb2RhbFNlcnZpY2UpXG4gICAgICAuY3JlYXRlKHtcbiAgICAgICAgbnpDb250ZW50OiBgPGltZyBzcmM9XCIke2ZpbGUudXJsIHx8XG4gICAgICAgICAgZmlsZS50aHVtYlVybH1cIiBjbGFzcz1cImltZy1mbHVpZFwiIC8+YCxcbiAgICAgICAgbnpGb290ZXI6IG51bGwsXG4gICAgICB9KVxuICAgICAgLmFmdGVyQ2xvc2Uuc3Vic2NyaWJlKCgpID0+IHRoaXMuZGV0ZWN0Q2hhbmdlcygpKTtcbiAgfVxufVxuIl19