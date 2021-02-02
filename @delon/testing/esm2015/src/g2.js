import { discardPeriodicTasks, flush, TestBed, tick } from '@angular/core/testing';
export const PageG2DataCount = 2;
export const PageG2Height = 100;
export class PageG2 {
    constructor(fixture = null) {
        this.fixture = fixture;
    }
    get dl() {
        return this.fixture.debugElement;
    }
    get context() {
        return this.fixture.componentInstance;
    }
    get comp() {
        // tslint:disable-next-line:no-string-literal
        return this.context['comp'];
    }
    get chart() {
        return this.comp.chart;
    }
    genModule(module, comp) {
        TestBed.configureTestingModule({
            imports: [module],
            declarations: [comp],
        });
        return this;
    }
    genComp(comp, dc = false) {
        this.fixture = TestBed.createComponent(comp);
        if (dc) {
            this.dcFirst();
        }
        return this;
    }
    makeModule(module, comp, options = { dc: true }) {
        this.genModule(module, comp).genComp(comp, options.dc);
        return this;
    }
    dcFirst() {
        this.dc();
        flush();
        discardPeriodicTasks();
        // FIX: `Error during cleanup of component`
        if (this.comp && typeof this.comp.chart !== 'undefined') {
            spyOn(this.comp.chart, 'destroy');
        }
        return this;
    }
    dc() {
        this.fixture.changeDetectorRef.markForCheck();
        this.fixture.detectChanges();
        return this;
    }
    end() {
        // The 201 value is delay value
        tick(201);
        flush();
        discardPeriodicTasks();
        return this;
    }
    destroy() {
        this.comp.ngOnDestroy();
    }
    newData(data) {
        // tslint:disable-next-line:no-string-literal
        this.context['data'] = data;
        this.dc();
        return this;
    }
    getEls(cls) {
        return this.dl.nativeElement.querySelectorAll(cls);
    }
    getEl(cls) {
        return this.dl.nativeElement.querySelector(cls);
    }
    getController(type) {
        return this.chart.getController(type);
    }
    isCanvas(stauts = true) {
        this.isExists('canvas', stauts);
        return this;
    }
    isText(cls, value) {
        const el = this.getEl(cls);
        expect(el ? el.textContent.trim() : '').toBe(value);
        return this;
    }
    isExists(cls, stauts = true) {
        expect(this.getEl(cls) != null).toBe(stauts);
        return this;
    }
    checkOptions(key, value) {
        expect(this.chart[key]).toBe(value);
        return this;
    }
    checkAttrOptions(type, key, value) {
        const x = this.chart[type][0].attributeOption[key];
        expect(x.field).toBe(value);
        return this;
    }
    isXScalesCount(num) {
        const x = this.chart.getXScale();
        expect(x.values.length).toBe(num);
        return this;
    }
    isYScalesCount(num) {
        const y = this.chart.getYScales();
        expect(y.length).toBe(1);
        expect(y[0].values.length).toBe(num);
        return this;
    }
    isDataCount(type, num) {
        const results = this.chart[type];
        expect(results.length).toBeGreaterThan(0);
        expect(results[0].data.length).toBe(num);
        return this;
    }
    get firstDataPoint() {
        // tslint:disable-next-line: no-string-literal
        return this.chart.getXY(this.context['data'][0]);
    }
    checkTooltip(_includeText, point) {
        if (!point) {
            point = this.firstDataPoint;
        }
        this.chart.showTooltip(point);
        expect(this.chart.getController('tooltip') != null).toBe(true);
        return this;
    }
    checkClickItem() {
        const point = this.firstDataPoint;
        const clientPoint = this.chart.canvas.getClientByPoint(point.x, point.y);
        const event = new MouseEvent('click', {
            clientX: clientPoint.x,
            clientY: clientPoint.y,
        });
        this.chart.canvas.get('el').dispatchEvent(event);
        return this;
    }
}
export function checkDelay(module, comp, page = null) {
    if (page == null) {
        page = new PageG2().makeModule(module, comp, { dc: false });
    }
    const context = page.context;
    if (typeof context.delay === 'undefined') {
        console.warn(`You muse be dinfed "delay" property in test component`);
        return;
    }
    context.delay = 100;
    page.dc();
    page.comp.ngOnDestroy();
    expect(page.chart == null).toBe(true);
    tick(201);
    discardPeriodicTasks();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZzIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90ZXN0aW5nL3NyYy9nMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQW9CLG9CQUFvQixFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFNckcsTUFBTSxDQUFDLE1BQU0sZUFBZSxHQUFHLENBQUMsQ0FBQztBQUNqQyxNQUFNLENBQUMsTUFBTSxZQUFZLEdBQUcsR0FBRyxDQUFDO0FBRWhDLE1BQU0sT0FBTyxNQUFNO0lBQ2pCLFlBQW1CLFVBQXNDLElBQUk7UUFBMUMsWUFBTyxHQUFQLE9BQU8sQ0FBbUM7SUFBRyxDQUFDO0lBRWpFLElBQUksRUFBRTtRQUNKLE9BQU8sSUFBSSxDQUFDLE9BQVEsQ0FBQyxZQUFZLENBQUM7SUFDcEMsQ0FBQztJQUVELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLE9BQVEsQ0FBQyxpQkFBaUIsQ0FBQztJQUN6QyxDQUFDO0lBRUQsSUFBSSxJQUFJO1FBQ04sNkNBQTZDO1FBQzdDLE9BQVEsSUFBSSxDQUFDLE9BQXFCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUVELFNBQVMsQ0FBSSxNQUFTLEVBQUUsSUFBYTtRQUNuQyxPQUFPLENBQUMsc0JBQXNCLENBQUM7WUFDN0IsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDO1lBQ2pCLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQztTQUNyQixDQUFDLENBQUM7UUFDSCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxPQUFPLENBQUMsSUFBYSxFQUFFLEtBQWMsS0FBSztRQUN4QyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUMsSUFBSSxD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dkIsQ0FBQyxDQUFDO1FBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBaUIsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEUsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0NBQ0Y7QUFFRCxNQUFNLFVBQVUsVUFBVSxDQUFPLE1BQVMsRUFBRSxJQUFhLEVBQUUsT0FBeUIsSUFBSTtJQUN0RixJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7UUFDaEIsSUFBSSxHQUFHLElBQUksTUFBTSxFQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztLQUNoRTtJQUNELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFjLENBQUM7SUFDcEMsSUFBSSxPQUFPLE9BQU8sQ0FBQyxLQUFLLEtBQUssV0FBVyxFQUFFO1FBQ3hDLE9BQU8sQ0FBQyxJQUFJLENBQUMsdURBQXVELENBQUMsQ0FBQztRQUN0RSxPQUFPO0tBQ1I7SUFDRCxPQUFPLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztJQUNwQixJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDVixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDVixvQkFBb0IsRUFBRSxDQUFDO0FBQ3pCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZWJ1Z0VsZW1lbnQsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBvbmVudEZpeHR1cmUsIGRpc2NhcmRQZXJpb2RpY1Rhc2tzLCBmbHVzaCwgVGVzdEJlZCwgdGljayB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvdGVzdGluZyc7XG5pbXBvcnQgeyBDaGFydCB9IGZyb20gJ0BhbnR2L2cyJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbmV4cG9ydCB0eXBlIFBhZ2VHMlR5cGUgPSAnZ2VvbWV0cmllcycgfCAndmlld3MnO1xuXG5leHBvcnQgY29uc3QgUGFnZUcyRGF0YUNvdW50ID0gMjtcbmV4cG9ydCBjb25zdCBQYWdlRzJIZWlnaHQgPSAxMDA7XG5cbmV4cG9ydCBjbGFzcyBQYWdlRzI8VD4ge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZml4dHVyZTogQ29tcG9uZW50Rml4dHVyZTxUPiB8IG51bGwgPSBudWxsKSB7fVxuXG4gIGdldCBkbCgpOiBEZWJ1Z0VsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLmZpeHR1cmUhLmRlYnVnRWxlbWVudDtcbiAgfVxuXG4gIGdldCBjb250ZXh0KCk6IFQge1xuICAgIHJldHVybiB0aGlzLmZpeHR1cmUhLmNvbXBvbmVudEluc3RhbmNlO1xuICB9XG5cbiAgZ2V0IGNvbXAoKTogYW55IHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tc3RyaW5nLWxpdGVyYWxcbiAgICByZXR1cm4gKHRoaXMuY29udGV4dCBhcyBOelNhZmVBbnkpWydjb21wJ107XG4gIH1cblxuICBnZXQgY2hhcnQoKTogQ2hhcnQge1xuICAgIHJldHVybiB0aGlzLmNvbXAuY2hhcnQ7XG4gIH1cblxuICBnZW5Nb2R1bGU8TT4obW9kdWxlOiBNLCBjb21wOiBUeXBlPFQ+KTogdGhpcyB7XG4gICAgVGVzdEJlZC5jb25maWd1cmVUZXN0aW5nTW9kdWxlKHtcbiAgICAgIGltcG9ydHM6IFttb2R1bGVdLFxuICAgICAgZGVjbGFyYXRpb25zOiBbY29tcF0sXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZW5Db21wKGNvbXA6IFR5cGU8VD4sIGRjOiBib29sZWFuID0gZmFsc2UpOiB0aGlzIHtcbiAgICB0aGlzLmZpeHR1cmUgPSBUZXN0QmVkLmNyZWF0ZUNvbXBvbmVudChjb21wKTtcbiAgICBpZiAoZGMpIHtcbiAgICAgIHRoaXMuZGNGaXJzdCgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG1ha2VNb2R1bGU8TT4obW9kdWxlOiBNLCBjb21wOiBUeXBlPFQ+LCBvcHRpb25zOiB7IGRjOiBib29sZWFuIH0gPSB7IGRjOiB0cnVlIH0pOiBQYWdlRzI8VD4ge1xuICAgIHRoaXMuZ2VuTW9kdWxlKG1vZHVsZSwgY29tcCkuZ2VuQ29tcChjb21wLCBvcHRpb25zLmRjKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGRjRmlyc3QoKTogdGhpcyB7XG4gICAgdGhpcy5kYygpO1xuICAgIGZsdXNoKCk7XG4gICAgZGlzY2FyZFBlcmlvZGljVGFza3MoKTtcbiAgICAvLyBGSVg6IGBFcnJvciBkdXJpbmcgY2xlYW51cCBvZiBjb21wb25lbnRgXG4gICAgaWYgKHRoaXMuY29tcCAmJiB0eXBlb2YgdGhpcy5jb21wLmNoYXJ0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgc3B5T24odGhpcy5jb21wLmNoYXJ0LCAnZGVzdHJveScpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGRjKCk6IHRoaXMge1xuICAgIHRoaXMuZml4dHVyZSEuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgdGhpcy5maXh0dXJlIS5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBlbmQoKTogdGhpcyB7XG4gICAgLy8gVGhlIDIwMSB2YWx1ZSBpcyBkZWxheSB2YWx1ZVxuICAgIHRpY2soMjAxKTtcbiAgICBmbHVzaCgpO1xuICAgIGRpc2NhcmRQZXJpb2RpY1Rhc2tzKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBkZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuY29tcC5uZ09uRGVzdHJveSgpO1xuICB9XG5cbiAgbmV3RGF0YShkYXRhOiBhbnkpOiB0aGlzIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tc3RyaW5nLWxpdGVyYWxcbiAgICAodGhpcy5jb250ZXh0IGFzIE56U2FmZUFueSlbJ2RhdGEnXSA9IGRhdGE7XG4gICAgdGhpcy5kYygpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0RWxzKGNsczogc3RyaW5nKTogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4ge1xuICAgIHJldHVybiAodGhpcy5kbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5xdWVyeVNlbGVjdG9yQWxsKGNscyk7XG4gIH1cblxuICBnZXRFbChjbHM6IHN0cmluZyk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gKHRoaXMuZGwubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkucXVlcnlTZWxlY3RvcihjbHMpIGFzIEhUTUxFbGVtZW50O1xuICB9XG5cbiAgZ2V0Q29udHJvbGxlcih0eXBlOiAnYXhpcycgfCAnbGVnZW5kJyk6IE56U2FmZUFueSB7XG4gICAgcmV0dXJuIHRoaXMuY2hhcnQuZ2V0Q29udHJvbGxlcih0eXBlKSBhcyBOelNhZmVBbnk7XG4gIH1cblxuICBpc0NhbnZhcyhzdGF1dHM6IGJvb2xlYW4gPSB0cnVlKTogdGhpcyB7XG4gICAgdGhpcy5pc0V4aXN0cygnY2FudmFzJywgc3RhdXRzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGlzVGV4dChjbHM6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHRoaXMge1xuICAgIGNvbnN0IGVsID0gdGhpcy5nZXRFbChjbHMpO1xuICAgIGV4cGVjdChlbCA/IGVsLnRleHRDb250ZW50IS50cmltKCkgOiAnJykudG9CZSh2YWx1ZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBpc0V4aXN0cyhjbHM6IHN0cmluZywgc3RhdXRzOiBib29sZWFuID0gdHJ1ZSk6IHRoaXMge1xuICAgIGV4cGVjdCh0aGlzLmdldEVsKGNscykgIT0gbnVsbCkudG9CZShzdGF1dHMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY2hlY2tPcHRpb25zKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogdGhpcyB7XG4gICAgZXhwZWN0KCh0aGlzLmNoYXJ0IGFzIE56U2FmZUFueSlba2V5XSkudG9CZSh2YWx1ZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjaGVja0F0dHJPcHRpb25zKHR5cGU6IFBhZ2VHMlR5cGUsIGtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogdGhpcyB7XG4gICAgY29uc3QgeCA9ICh0aGlzLmNoYXJ0W3R5cGVdWzBdIGFzIE56U2FmZUFueSkuYXR0cmlidXRlT3B0aW9uW2tleV07XG4gICAgZXhwZWN0KHguZmllbGQpLnRvQmUodmFsdWUpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgaXNYU2NhbGVzQ291bnQobnVtOiBudW1iZXIpOiB0aGlzIHtcbiAgICBjb25zdCB4ID0gdGhpcy5jaGFydC5nZXRYU2NhbGUoKTtcbiAgICBleHBlY3QoeC52YWx1ZXMhLmxlbmd0aCkudG9CZShudW0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgaXNZU2NhbGVzQ291bnQobnVtOiBudW1iZXIpOiB0aGlzIHtcbiAgICBjb25zdCB5ID0gdGhpcy5jaGFydC5nZXRZU2NhbGVzKCk7XG4gICAgZXhwZWN0KHkubGVuZ3RoKS50b0JlKDEpO1xuICAgIGV4cGVjdCh5WzBdLnZhbHVlcyEubGVuZ3RoKS50b0JlKG51bSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBpc0RhdGFDb3VudCh0eXBlOiBQYWdlRzJUeXBlLCBudW06IG51bWJlcik6IHRoaXMge1xuICAgIGNvbnN0IHJlc3VsdHMgPSB0aGlzLmNoYXJ0W3R5cGVdO1xuICAgIGV4cGVjdChyZXN1bHRzLmxlbmd0aCkudG9CZUdyZWF0ZXJUaGFuKDApO1xuICAgIGV4cGVjdChyZXN1bHRzWzBdLmRhdGEubGVuZ3RoKS50b0JlKG51bSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXQgZmlyc3REYXRhUG9pbnQoKTogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXN0cmluZy1saXRlcmFsXG4gICAgcmV0dXJuIHRoaXMuY2hhcnQuZ2V0WFkoKHRoaXMuY29udGV4dCBhcyBOelNhZmVBbnkpWydkYXRhJ11bMF0pO1xuICB9XG5cbiAgY2hlY2tUb29sdGlwKF9pbmNsdWRlVGV4dDogc3RyaW5nIHwgbnVsbCwgcG9pbnQ/OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0pOiB0aGlzIHtcbiAgICBpZiAoIXBvaW50KSB7XG4gICAgICBwb2ludCA9IHRoaXMuZmlyc3REYXRhUG9pbnQ7XG4gICAgfVxuICAgIHRoaXMuY2hhcnQuc2hvd1Rvb2x0aXAocG9pbnQpO1xuICAgIGV4cGVjdCh0aGlzLmNoYXJ0LmdldENvbnRyb2xsZXIoJ3Rvb2x0aXAnKSAhPSBudWxsKS50b0JlKHRydWUpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY2hlY2tDbGlja0l0ZW0oKTogdGhpcyB7XG4gICAgY29uc3QgcG9pbnQgPSB0aGlzLmZpcnN0RGF0YVBvaW50O1xuICAgIGNvbnN0IGNsaWVudFBvaW50ID0gdGhpcy5jaGFydC5jYW52YXMuZ2V0Q2xpZW50QnlQb2ludChwb2ludC54LCBwb2ludC55KTtcbiAgICBjb25zdCBldmVudCA9IG5ldyBNb3VzZUV2ZW50KCdjbGljaycsIHtcbiAgICAgIGNsaWVudFg6IGNsaWVudFBvaW50LngsXG4gICAgICBjbGllbnRZOiBjbGllbnRQb2ludC55LFxuICAgIH0pO1xuICAgICh0aGlzLmNoYXJ0LmNhbnZhcy5nZXQoJ2VsJykgYXMgSFRNTEVsZW1lbnQpLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0RlbGF5PE0sIFQ+KG1vZHVsZTogTSwgY29tcDogVHlwZTxUPiwgcGFnZTogUGFnZUcyPFQ+IHwgbnVsbCA9IG51bGwpOiB2b2lkIHtcbiAgaWYgKHBhZ2UgPT0gbnVsbCkge1xuICAgIHBhZ2UgPSBuZXcgUGFnZUcyPFQ+KCkubWFrZU1vZHVsZShtb2R1bGUsIGNvbXAsIHsgZGM6IGZhbHNlIH0pO1xuICB9XG4gIGNvbnN0IGNvbnRleHQgPSBwYWdlLmNvbnRleHQgYXMgYW55O1xuICBpZiAodHlwZW9mIGNvbnRleHQuZGVsYXkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgY29uc29sZS53YXJuKGBZb3UgbXVzZSBiZSBkaW5mZWQgXCJkZWxheVwiIHByb3BlcnR5IGluIHRlc3QgY29tcG9uZW50YCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnRleHQuZGVsYXkgPSAxMDA7XG4gIHBhZ2UuZGMoKTtcbiAgcGFnZS5jb21wLm5nT25EZXN0cm95KCk7XG4gIGV4cGVjdChwYWdlLmNoYXJ0ID09IG51bGwpLnRvQmUodHJ1ZSk7XG4gIHRpY2soMjAxKTtcbiAgZGlzY2FyZFBlcmlvZGljVGFza3MoKTtcbn1cbiJdfQ==