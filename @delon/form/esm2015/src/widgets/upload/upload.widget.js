/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ChangeDetectorRef } from '@angular/core';
import { deepGet } from '@delon/util';
import { NzModalService } from 'ng-zorro-antd';
import { ControlWidget } from '../../widget';
import { getData, toBool } from '../../utils';
export class UploadWidget extends ControlWidget {
    /**
     * @param {?} cd
     * @param {?} modalSrv
     */
    constructor(cd, modalSrv) {
        super(cd);
        this.modalSrv = modalSrv;
        this.fileList = [];
        this.btnType = '';
        this.handlePreview = (file) => {
            this.modalSrv
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
        this.i = {
            type: this.ui.type || 'select',
            text: this.ui["text"] || '点击上传',
            action: this.ui["action"] || '',
            accept: this.ui["accept"] || '',
            limit: this.ui["limit"] == null ? 0 : +this.ui["limit"],
            size: this.ui["fileSize"] == null ? 0 : +this.ui["fileSize"],
            fileType: this.ui["fileType"] || '',
            listType: this.ui["listType"] || 'text',
            multiple: toBool(this.ui["multiple"], false),
            name: this.ui["name"] || 'file',
            showUploadList: toBool(this.ui["showUploadList"], true),
            withCredentials: toBool(this.ui["withCredentials"], false),
            resReName: (this.ui["resReName"] || '').split('.'),
        };
        if (this.i.listType === 'picture-card')
            this.btnType = 'plus';
        if (this.i.type === 'drag') {
            this.i.listType = null;
            this.btnType = 'drag';
            this.i.text = this.ui["text"] || `单击或拖动文件到该区域上传`;
            this.i.hint =
                this.ui["hint"] || `支持单个或批量，严禁上传公司数据或其他安全文件`;
        }
    }
    /**
     * @param {?} args
     * @return {?}
     */
    change(args) {
        if (this.ui["change"])
            this.ui["change"](args);
        if (args.type !== 'success')
            return;
        this.notify(args.fileList);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    reset(value) {
        getData(this.schema, this.ui, this.formProperty.formData).subscribe(list => {
            this.fileList = /** @type {?} */ (list);
            this.notify(this.fileList);
            this.detectChanges();
        });
    }
    /**
     * @param {?} fileList
     * @return {?}
     */
    notify(fileList) {
        /** @type {?} */
        const res = fileList.map(item => deepGet(item.response, this.i.resReName, item.response));
        this.formProperty.setValue(this.i.multiple === true ? res : res.pop(), false);
    }
}
UploadWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-upload',
                template: `
  <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">

    <nz-upload
      [nzType]="i.type"
      [nzFileList]="fileList"
      [nzDisabled]="disabled"
      [nzAction]="i.action"
      [nzAccept]="i.accept"
      [nzLimit]="i.limit"
      [nzSize]="i.size"
      [nzFileType]="i.fileType"
      [nzHeaders]="ui.headers"
      [nzData]="ui.data"
      [nzListType]="i.listType"
      [nzMultiple]="i.multiple"
      [nzName]="i.name"
      [nzShowUploadList]="i.showUploadList"
      [nzWithCredentials]="i.withCredentials"
      [nzRemove]="ui.remove"
      [nzPreview]="handlePreview"
      (nzChange)="change($event)">
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
  `,
                preserveWhitespaces: false
            }] }
];
/** @nocollapse */
UploadWidget.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NzModalService }
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
    /** @type {?} */
    UploadWidget.prototype.modalSrv;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9mb3JtLyIsInNvdXJjZXMiOlsic3JjL3dpZGdldHMvdXBsb2FkL3VwbG9hZC53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN0QyxPQUFPLEVBQWlDLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzdDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBZ0Q5QyxNQUFNLG1CQUFvQixTQUFRLGFBQWE7Ozs7O0lBSzdDLFlBQVksRUFBcUIsRUFBVSxRQUF3QjtRQUNqRSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7UUFEK0IsYUFBUSxHQUFSLFFBQVEsQ0FBZ0I7d0JBSDFDLEVBQUU7dUJBQ2pCLEVBQUU7NkJBMERJLENBQUMsSUFBZ0IsRUFBRSxFQUFFO1lBQ25DLElBQUksQ0FBQyxRQUFRO2lCQUNWLE1BQU0sQ0FBQztnQkFDTixTQUFTLEVBQUUsYUFBYSxJQUFJLENBQUMsR0FBRztvQkFDOUIsSUFBSSxDQUFDLFFBQVEsd0JBQXdCO2dCQUN2QyxRQUFRLEVBQUUsSUFBSTthQUNmLENBQUM7aUJBQ0QsVUFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztTQUNyRDtLQTlEQTs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsQ0FBQyxHQUFHO1lBQ1AsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLFFBQVE7WUFDOUIsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLFlBQVMsTUFBTTtZQUM1QixN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LEVBQUUsRUFDMUMsS0FBSyxDQUNOLENBQUM7Ozs7WUF4R0wsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBeUNUO2dCQUNELG1CQUFtQixFQUFFLEtBQUs7YUFDM0I7Ozs7WUFuRDJCLGlCQUFpQjtZQUVMLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGRlZXBHZXQgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBVcGxvYWRGaWxlLCBVcGxvYWRDaGFuZ2VQYXJhbSwgTnpNb2RhbFNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkJztcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuaW1wb3J0IHsgZ2V0RGF0YSwgdG9Cb29sIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi11cGxvYWQnLFxuICB0ZW1wbGF0ZTogYFxuICA8c2YtaXRlbS13cmFwIFtpZF09XCJpZFwiIFtzY2hlbWFdPVwic2NoZW1hXCIgW3VpXT1cInVpXCIgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIiBbZXJyb3JdPVwiZXJyb3JcIiBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiPlxuXG4gICAgPG56LXVwbG9hZFxuICAgICAgW256VHlwZV09XCJpLnR5cGVcIlxuICAgICAgW256RmlsZUxpc3RdPVwiZmlsZUxpc3RcIlxuICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgW256QWN0aW9uXT1cImkuYWN0aW9uXCJcbiAgICAgIFtuekFjY2VwdF09XCJpLmFjY2VwdFwiXG4gICAgICBbbnpMaW1pdF09XCJpLmxpbWl0XCJcbiAgICAgIFtuelNpemVdPVwiaS5zaXplXCJcbiAgICAgIFtuekZpbGVUeXBlXT1cImkuZmlsZVR5cGVcIlxuICAgICAgW256SGVhZGVyc109XCJ1aS5oZWFkZXJzXCJcbiAgICAgIFtuekRhdGFdPVwidWkuZGF0YVwiXG4gICAgICBbbnpMaXN0VHlwZV09XCJpLmxpc3RUeXBlXCJcbiAgICAgIFtuek11bHRpcGxlXT1cImkubXVsdGlwbGVcIlxuICAgICAgW256TmFtZV09XCJpLm5hbWVcIlxuICAgICAgW256U2hvd1VwbG9hZExpc3RdPVwiaS5zaG93VXBsb2FkTGlzdFwiXG4gICAgICBbbnpXaXRoQ3JlZGVudGlhbHNdPVwiaS53aXRoQ3JlZGVudGlhbHNcIlxuICAgICAgW256UmVtb3ZlXT1cInVpLnJlbW92ZVwiXG4gICAgICBbbnpQcmV2aWV3XT1cImhhbmRsZVByZXZpZXdcIlxuICAgICAgKG56Q2hhbmdlKT1cImNoYW5nZSgkZXZlbnQpXCI+XG4gICAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJidG5UeXBlXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidwbHVzJ1wiPlxuICAgICAgICAgIDxpIG56LWljb24gdHlwZT1cInBsdXNcIj48L2k+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImFudC11cGxvYWQtdGV4dFwiIFtpbm5lckhUTUxdPVwiaS50ZXh0XCI+PC9kaXY+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInZHJhZydcIj5cbiAgICAgICAgICA8cCBjbGFzcz1cImFudC11cGxvYWQtZHJhZy1pY29uXCI+PGkgbnotaWNvbiB0eXBlPVwiaW5ib3hcIj48L2k+PC9wPlxuICAgICAgICAgIDxwIGNsYXNzPVwiYW50LXVwbG9hZC10ZXh0XCIgW2lubmVySFRNTF09XCJpLnRleHRcIj48L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJhbnQtdXBsb2FkLWhpbnRcIiBbaW5uZXJIVE1MXT1cImkuaGludFwiPjwvcD5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoRGVmYXVsdD5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBuei1idXR0b24+XG4gICAgICAgICAgICA8aSBuei1pY29uIHR5cGU9XCJ1cGxvYWRcIj48L2k+PHNwYW4gW2lubmVySFRNTF09XCJpLnRleHRcIj48L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9uei11cGxvYWQ+XG5cbiAgPC9zZi1pdGVtLXdyYXA+XG4gIGAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBVcGxvYWRXaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IGltcGxlbWVudHMgT25Jbml0IHtcbiAgaTogYW55O1xuICBmaWxlTGlzdDogVXBsb2FkRmlsZVtdID0gW107XG4gIGJ0blR5cGUgPSAnJztcblxuICBjb25zdHJ1Y3RvcihjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgbW9kYWxTcnY6IE56TW9kYWxTZXJ2aWNlKSB7XG4gICAgc3VwZXIoY2QpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pID0ge1xuICAgICAgdHlwZTogdGhpcy51aS50eXBlIHx8ICdzZWxlY3QnLFxuICAgICAgdGV4dDogdGhpcy51aS50ZXh0IHx8ICfngrnlh7vkuIrkvKAnLFxuICAgICAgYWN0aW9uOiB0aGlzLnVpLmFjdGlvbiB8fCAnJyxcbiAgICAgIGFjY2VwdDogdGhpcy51aS5hY2NlcHQgfHwgJycsXG4gICAgICBsaW1pdDogdGhpcy51aS5saW1pdCA9PSBudWxsID8gMCA6ICt0aGlzLnVpLmxpbWl0LFxuICAgICAgc2l6ZTogdGhpcy51aS5maWxlU2l6ZSA9PSBudWxsID8gMCA6ICt0aGlzLnVpLmZpbGVTaXplLFxuICAgICAgZmlsZVR5cGU6IHRoaXMudWkuZmlsZVR5cGUgfHwgJycsXG4gICAgICBsaXN0VHlwZTogdGhpcy51aS5saXN0VHlwZSB8fCAndGV4dCcsXG4gICAgICBtdWx0aXBsZTogdG9Cb29sKHRoaXMudWkubXVsdGlwbGUsIGZhbHNlKSxcbiAgICAgIG5hbWU6IHRoaXMudWkubmFtZSB8fCAnZmlsZScsXG4gICAgICBzaG93VXBsb2FkTGlzdDogdG9Cb29sKHRoaXMudWkuc2hvd1VwbG9hZExpc3QsIHRydWUpLFxuICAgICAgd2l0aENyZWRlbnRpYWxzOiB0b0Jvb2wodGhpcy51aS53aXRoQ3JlZGVudGlhbHMsIGZhbHNlKSxcbiAgICAgIHJlc1JlTmFtZTogKHRoaXMudWkucmVzUmVOYW1lIHx8ICcnKS5zcGxpdCgnLicpLFxuICAgIH07XG4gICAgaWYgKHRoaXMuaS5saXN0VHlwZSA9PT0gJ3BpY3R1cmUtY2FyZCcpIHRoaXMuYnRuVHlwZSA9ICdwbHVzJztcbiAgICBpZiAodGhpcy5pLnR5cGUgPT09ICdkcmFnJykge1xuICAgICAgdGhpcy5pLmxpc3RUeXBlID0gbnVsbDtcbiAgICAgIHRoaXMuYnRuVHlwZSA9ICdkcmFnJztcbiAgICAgIHRoaXMuaS50ZXh0ID0gdGhpcy51aS50ZXh0IHx8IGDljZXlh7vmiJbmi5bliqjmlofku7bliLDor6XljLrln5/kuIrkvKBgO1xuICAgICAgdGhpcy5pLmhpbnQgPVxuICAgICAgICB0aGlzLnVpLmhpbnQgfHwgYOaUr+aMgeWNleS4quaIluaJuemHj++8jOS4peemgeS4iuS8oOWFrOWPuOaVsOaNruaIluWFtuS7luWuieWFqOaWh+S7tmA7XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlKGFyZ3M6IFVwbG9hZENoYW5nZVBhcmFtKSB7XG4gICAgaWYgKHRoaXMudWkuY2hhbmdlKSB0aGlzLnVpLmNoYW5nZShhcmdzKTtcbiAgICBpZiAoYXJncy50eXBlICE9PSAnc3VjY2VzcycpIHJldHVybjtcbiAgICB0aGlzLm5vdGlmeShhcmdzLmZpbGVMaXN0KTtcbiAgfVxuXG4gIHJlc2V0KHZhbHVlOiBhbnkpIHtcbiAgICBnZXREYXRhKHRoaXMuc2NoZW1hLCB0aGlzLnVpLCB0aGlzLmZvcm1Qcm9wZXJ0eS5mb3JtRGF0YSkuc3Vic2NyaWJlKFxuICAgICAgbGlzdCA9PiB7XG4gICAgICAgIHRoaXMuZmlsZUxpc3QgPSBsaXN0IGFzIFVwbG9hZEZpbGVbXTtcbiAgICAgICAgdGhpcy5ub3RpZnkodGhpcy5maWxlTGlzdCk7XG4gICAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfSxcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBub3RpZnkoZmlsZUxpc3Q6IFVwbG9hZEZpbGVbXSkge1xuICAgIGNvbnN0IHJlcyA9IGZpbGVMaXN0Lm1hcChpdGVtID0+XG4gICAgICBkZWVwR2V0KGl0ZW0ucmVzcG9uc2UsIHRoaXMuaS5yZXNSZU5hbWUsIGl0ZW0ucmVzcG9uc2UpLFxuICAgICk7XG4gICAgdGhpcy5mb3JtUHJvcGVydHkuc2V0VmFsdWUoXG4gICAgICB0aGlzLmkubXVsdGlwbGUgPT09IHRydWUgPyByZXMgOiByZXMucG9wKCksXG4gICAgICBmYWxzZSxcbiAgICApO1xuICB9XG5cbiAgaGFuZGxlUHJldmlldyA9IChmaWxlOiBVcGxvYWRGaWxlKSA9PiB7XG4gICAgdGhpcy5tb2RhbFNydlxuICAgICAgLmNyZWF0ZSh7XG4gICAgICAgIG56Q29udGVudDogYDxpbWcgc3JjPVwiJHtmaWxlLnVybCB8fFxuICAgICAgICAgIGZpbGUudGh1bWJVcmx9XCIgY2xhc3M9XCJpbWctZmx1aWRcIiAvPmAsXG4gICAgICAgIG56Rm9vdGVyOiBudWxsLFxuICAgICAgfSlcbiAgICAgIC5hZnRlckNsb3NlLnN1YnNjcmliZSgoKSA9PiB0aGlzLmRldGVjdENoYW5nZXMoKSk7XG4gIH07XG59XG4iXX0=