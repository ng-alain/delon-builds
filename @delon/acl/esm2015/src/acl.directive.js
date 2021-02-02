import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { filter } from 'rxjs/operators';
import { ACLService } from './acl.service';
import * as i0 from "@angular/core";
import * as i1 from "./acl.service";
export class ACLDirective {
    constructor(el, renderer, srv) {
        this.el = el;
        this.renderer = renderer;
        this.srv = srv;
        this.change$ = this.srv.change.pipe(filter(r => r != null)).subscribe(() => this.set(this._value));
    }
    set acl(value) {
        this.set(value);
    }
    set ability(value) {
        this.set(this.srv.parseAbility(value));
    }
    set(value) {
        this._value = value;
        const CLS = 'acl__hide';
        const el = this.el.nativeElement;
        if (this.srv.can(this._value)) {
            this.renderer.removeClass(el, CLS);
        }
        else {
            this.renderer.addClass(el, CLS);
        }
    }
    ngOnDestroy() {
        this.change$.unsubscribe();
    }
}
/** @nocollapse */ ACLDirective.ɵfac = function ACLDirective_Factory(t) { return new (t || ACLDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.ACLService)); };
/** @nocollapse */ ACLDirective.ɵdir = i0.ɵɵngDeclareDirective({ version: "11.1.1", type: ACLDirective, selector: "[acl]", inputs: { acl: "acl", ability: ["acl-ability", "ability"] }, exportAs: ["acl"], ngImport: i0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ACLDirective, [{
        type: Directive,
        args: [{
                selector: '[acl]',
                exportAs: 'acl',
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.ACLService }]; }, { acl: [{
            type: Input,
            args: ['acl']
        }], ability: [{
            type: Input,
            args: ['acl-ability']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNsLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FjbC9zcmMvYWNsLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQWEsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5GLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFPM0MsTUFBTSxPQUFPLFlBQVk7SUF5QnZCLFlBQW9CLEVBQWMsRUFBVSxRQUFtQixFQUFZLEdBQWU7UUFBdEUsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBWSxRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQ3hGLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3JHLENBQUM7SUF2QkQsSUFDSSxHQUFHLENBQUMsS0FBaUI7UUFDdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBRUQsSUFDSSxPQUFPLENBQUMsS0FBaUI7UUFDM0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFTyxHQUFHLENBQUMsS0FBaUI7UUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsTUFBTSxHQUFHLEdBQUcsV0FBVyxDQUFDO1FBQ3hCLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDO1FBQ2pDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNwQzthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQztJQU1ELFdBQVc7UUFDVCxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzdCLENBQUM7OzJGQS9CVSxZQUFZOzBGQUFaLFlBQVk7dUZBQVosWUFBWTtjQUp4QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLFFBQVEsRUFBRSxLQUFLO2FBQ2hCOzhHQU1LLEdBQUc7a0JBRE4sS0FBSzttQkFBQyxLQUFLO1lBTVIsT0FBTztrQkFEVixLQUFLO21CQUFDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkRlc3Ryb3ksIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBQ0xTZXJ2aWNlIH0gZnJvbSAnLi9hY2wuc2VydmljZSc7XG5pbXBvcnQgeyBBQ0xDYW5UeXBlIH0gZnJvbSAnLi9hY2wudHlwZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thY2xdJyxcbiAgZXhwb3J0QXM6ICdhY2wnLFxufSlcbmV4cG9ydCBjbGFzcyBBQ0xEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF92YWx1ZTogQUNMQ2FuVHlwZTtcbiAgcHJpdmF0ZSBjaGFuZ2UkOiBTdWJzY3JpcHRpb247XG5cbiAgQElucHV0KCdhY2wnKVxuICBzZXQgYWNsKHZhbHVlOiBBQ0xDYW5UeXBlKSB7XG4gICAgdGhpcy5zZXQodmFsdWUpO1xuICB9XG5cbiAgQElucHV0KCdhY2wtYWJpbGl0eScpXG4gIHNldCBhYmlsaXR5KHZhbHVlOiBBQ0xDYW5UeXBlKSB7XG4gICAgdGhpcy5zZXQodGhpcy5zcnYucGFyc2VBYmlsaXR5KHZhbHVlKSk7XG4gIH1cblxuICBwcml2YXRlIHNldCh2YWx1ZTogQUNMQ2FuVHlwZSk6IHZvaWQge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgY29uc3QgQ0xTID0gJ2FjbF9faGlkZSc7XG4gICAgY29uc3QgZWwgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgaWYgKHRoaXMuc3J2LmNhbih0aGlzLl92YWx1ZSkpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWwsIENMUyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoZWwsIENMUyk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcm90ZWN0ZWQgc3J2OiBBQ0xTZXJ2aWNlKSB7XG4gICAgdGhpcy5jaGFuZ2UkID0gdGhpcy5zcnYuY2hhbmdlLnBpcGUoZmlsdGVyKHIgPT4gciAhPSBudWxsKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMuc2V0KHRoaXMuX3ZhbHVlKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmNoYW5nZSQudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19