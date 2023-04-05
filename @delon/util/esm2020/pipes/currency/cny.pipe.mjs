import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@delon/util/format";
export class CurrencyCNYPipe {
    constructor(srv) {
        this.srv = srv;
    }
    /**
     * Converted into RMB notation.
     *
     * 转化成人民币表示法
     */
    transform(value, options) {
        return this.srv.cny(value, options);
    }
}
CurrencyCNYPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.5", ngImport: i0, type: CurrencyCNYPipe, deps: [{ token: i1.CurrencyService }], target: i0.ɵɵFactoryTarget.Pipe });
CurrencyCNYPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "15.2.5", ngImport: i0, type: CurrencyCNYPipe, name: "cny" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.5", ngImport: i0, type: CurrencyCNYPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'cny' }]
        }], ctorParameters: function () { return [{ type: i1.CurrencyService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY255LnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy91dGlsL3BpcGVzL2N1cnJlbmN5L2NueS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOzs7QUFLcEQsTUFBTSxPQUFPLGVBQWU7SUFDMUIsWUFBb0IsR0FBb0I7UUFBcEIsUUFBRyxHQUFILEdBQUcsQ0FBaUI7SUFBRyxDQUFDO0lBRTVDOzs7O09BSUc7SUFDSCxTQUFTLENBQUMsS0FBc0IsRUFBRSxPQUE0QjtRQUM1RCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs0R0FWVSxlQUFlOzBHQUFmLGVBQWU7MkZBQWYsZUFBZTtrQkFEM0IsSUFBSTttQkFBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEN1cnJlbmN5Q05ZT3B0aW9ucywgQ3VycmVuY3lTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwvZm9ybWF0JztcblxuQFBpcGUoeyBuYW1lOiAnY255JyB9KVxuZXhwb3J0IGNsYXNzIEN1cnJlbmN5Q05ZUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNydjogQ3VycmVuY3lTZXJ2aWNlKSB7fVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0ZWQgaW50byBSTUIgbm90YXRpb24uXG4gICAqXG4gICAqIOi9rOWMluaIkOS6uuawkeW4geihqOekuuazlVxuICAgKi9cbiAgdHJhbnNmb3JtKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcsIG9wdGlvbnM/OiBDdXJyZW5jeUNOWU9wdGlvbnMpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnNydi5jbnkodmFsdWUsIG9wdGlvbnMpO1xuICB9XG59XG4iXX0=