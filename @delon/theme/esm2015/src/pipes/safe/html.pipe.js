import { Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
export class HTMLPipe {
    constructor(dom) {
        this.dom = dom;
    }
    transform(html) {
        return html ? this.dom.bypassSecurityTrustHtml(html) : '';
    }
}
HTMLPipe.decorators = [
    { type: Pipe, args: [{ name: 'html' },] }
];
/** @nocollapse */
HTMLPipe.ctorParameters = () => [
    { type: DomSanitizer }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHRtbC5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdGhlbWUvc3JjL3BpcGVzL3NhZmUvaHRtbC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxZQUFZLEVBQVksTUFBTSwyQkFBMkIsQ0FBQztBQUduRSxNQUFNLE9BQU8sUUFBUTtJQUNuQixZQUFvQixHQUFpQjtRQUFqQixRQUFHLEdBQUgsR0FBRyxDQUFjO0lBQUcsQ0FBQztJQUV6QyxTQUFTLENBQUMsSUFBWTtRQUNwQixPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzVELENBQUM7OztZQU5GLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7Ozs7WUFGYixZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5AUGlwZSh7IG5hbWU6ICdodG1sJyB9KVxuZXhwb3J0IGNsYXNzIEhUTUxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZG9tOiBEb21TYW5pdGl6ZXIpIHt9XG5cbiAgdHJhbnNmb3JtKGh0bWw6IHN0cmluZyk6IHN0cmluZyB8IFNhZmVIdG1sIHtcbiAgICByZXR1cm4gaHRtbCA/IHRoaXMuZG9tLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKGh0bWwpIDogJyc7XG4gIH1cbn1cbiJdfQ==