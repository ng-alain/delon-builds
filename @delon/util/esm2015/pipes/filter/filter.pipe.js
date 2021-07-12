import { Pipe } from '@angular/core';
export class FilterPipe {
    /**
     * Filter array
     *
     * 过滤数组
     */
    transform(array, matcher, ...args) {
        return array.filter(i => matcher(i, ...args));
    }
}
FilterPipe.decorators = [
    { type: Pipe, args: [{ name: 'filter' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy91dGlsL3BpcGVzL2ZpbHRlci9maWx0ZXIucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUdwRCxNQUFNLE9BQU8sVUFBVTtJQUNyQjs7OztPQUlHO0lBQ0gsU0FBUyxDQUFJLEtBQW1CLEVBQUUsT0FBaUQsRUFBRSxHQUFHLElBQWU7UUFDckcsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7O1lBVEYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoeyBuYW1lOiAnZmlsdGVyJyB9KVxuZXhwb3J0IGNsYXNzIEZpbHRlclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgLyoqXG4gICAqIEZpbHRlciBhcnJheVxuICAgKlxuICAgKiDov4fmu6TmlbDnu4RcbiAgICovXG4gIHRyYW5zZm9ybTxUPihhcnJheTogcmVhZG9ubHkgVFtdLCBtYXRjaGVyOiAoaXRlbTogVCwgLi4uYXJnczogdW5rbm93bltdKSA9PiBib29sZWFuLCAuLi5hcmdzOiB1bmtub3duW10pOiBUW10ge1xuICAgIHJldHVybiBhcnJheS5maWx0ZXIoaSA9PiBtYXRjaGVyKGksIC4uLmFyZ3MpKTtcbiAgfVxufVxuIl19