import { DOCUMENT } from '@angular/common';
import { inject } from '@angular/core';
export function stepPreloader() {
    const doc = inject(DOCUMENT);
    const body = doc.querySelector('body');
    body.style.overflow = 'hidden';
    let done = false;
    return () => {
        if (done)
            return;
        done = true;
        const preloader = doc.querySelector('.preloader');
        if (preloader == null)
            return;
        preloader.addEventListener('transitionend', () => {
            preloader.className = 'preloader-hidden';
        });
        preloader.className += ' preloader-hidden-add preloader-hidden-add-active';
        const body = doc.querySelector('body');
        body.style.overflow = '';
    };
}
export function preloaderFinished() {
    const body = document.querySelector('body');
    body.style.overflow = 'hidden';
    function remove() {
        const preloader = document.querySelector('.preloader');
        // preloader value null when running --hmr
        if (!preloader)
            return;
        preloader.addEventListener('transitionend', () => {
            preloader.className = 'preloader-hidden';
        });
        preloader.className += ' preloader-hidden-add preloader-hidden-add-active';
    }
    window.appBootstrap = () => {
        setTimeout(() => {
            remove();
            body.style.overflow = '';
        }, 25);
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlbG9hZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdGhlbWUvc3JjL3NlcnZpY2VzL3ByZWxvYWRlci9wcmVsb2FkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJdkMsTUFBTSxVQUFVLGFBQWE7SUFDM0IsTUFBTSxHQUFHLEdBQWEsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3ZDLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFFLENBQUM7SUFDeEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQy9CLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQztJQUVqQixPQUFPLEdBQUcsRUFBRTtRQUNWLElBQUksSUFBSTtZQUFFLE9BQU87UUFFakIsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNaLE1BQU0sU0FBUyxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQWMsWUFBWSxDQUFDLENBQUM7UUFDL0QsSUFBSSxTQUFTLElBQUksSUFBSTtZQUFFLE9BQU87UUFFOUIsU0FBUyxDQUFDLGdCQUFnQixDQUFDLGVBQWUsRUFBRSxHQUFHLEVBQUU7WUFDL0MsU0FBUyxDQUFDLFNBQVMsR0FBRyxrQkFBa0IsQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FBQztRQUNILFNBQVMsQ0FBQyxTQUFTLElBQUksbURBQW1ELENBQUM7UUFDM0UsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDM0IsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVELE1BQU0sVUFBVSxpQkFBaUI7SUFDL0IsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUUsQ0FBQztJQUM3QyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFFL0IsU0FBUyxNQUFNO1FBQ2IsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUUsQ0FBQztRQUN4RCwwQ0FBMEM7UUFDMUMsSUFBSSxDQUFDLFNBQVM7WUFBRSxPQUFPO1FBQ3ZCLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLEVBQUUsR0FBRyxFQUFFO1lBQy9DLFNBQVMsQ0FBQyxTQUFTLEdBQUcsa0JBQWtCLENBQUM7UUFDM0MsQ0FBQyxDQUFDLENBQUM7UUFFSCxTQUFTLENBQUMsU0FBUyxJQUFJLG1EQUFtRCxDQUFDO0lBQzdFLENBQUM7SUFFQSxNQUFvQixDQUFDLFlBQVksR0FBRyxHQUFHLEVBQUU7UUFDeEMsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLE1BQU0sRUFBRSxDQUFDO1lBQ1QsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQzNCLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNULENBQUMsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBpbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RlcFByZWxvYWRlcigpOiAoKSA9PiB2b2lkIHtcbiAgY29uc3QgZG9jOiBEb2N1bWVudCA9IGluamVjdChET0NVTUVOVCk7XG4gIGNvbnN0IGJvZHkgPSBkb2MucXVlcnlTZWxlY3RvcignYm9keScpITtcbiAgYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICBsZXQgZG9uZSA9IGZhbHNlO1xuXG4gIHJldHVybiAoKSA9PiB7XG4gICAgaWYgKGRvbmUpIHJldHVybjtcblxuICAgIGRvbmUgPSB0cnVlO1xuICAgIGNvbnN0IHByZWxvYWRlciA9IGRvYy5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignLnByZWxvYWRlcicpO1xuICAgIGlmIChwcmVsb2FkZXIgPT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgcHJlbG9hZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCAoKSA9PiB7XG4gICAgICBwcmVsb2FkZXIuY2xhc3NOYW1lID0gJ3ByZWxvYWRlci1oaWRkZW4nO1xuICAgIH0pO1xuICAgIHByZWxvYWRlci5jbGFzc05hbWUgKz0gJyBwcmVsb2FkZXItaGlkZGVuLWFkZCBwcmVsb2FkZXItaGlkZGVuLWFkZC1hY3RpdmUnO1xuICAgIGNvbnN0IGJvZHkgPSBkb2MucXVlcnlTZWxlY3RvcignYm9keScpITtcbiAgICBib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVsb2FkZXJGaW5pc2hlZCgpOiB2b2lkIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSE7XG4gIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcblxuICBmdW5jdGlvbiByZW1vdmUoKTogdm9pZCB7XG4gICAgY29uc3QgcHJlbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWxvYWRlcicpITtcbiAgICAvLyBwcmVsb2FkZXIgdmFsdWUgbnVsbCB3aGVuIHJ1bm5pbmcgLS1obXJcbiAgICBpZiAoIXByZWxvYWRlcikgcmV0dXJuO1xuICAgIHByZWxvYWRlci5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgKCkgPT4ge1xuICAgICAgcHJlbG9hZGVyLmNsYXNzTmFtZSA9ICdwcmVsb2FkZXItaGlkZGVuJztcbiAgICB9KTtcblxuICAgIHByZWxvYWRlci5jbGFzc05hbWUgKz0gJyBwcmVsb2FkZXItaGlkZGVuLWFkZCBwcmVsb2FkZXItaGlkZGVuLWFkZC1hY3RpdmUnO1xuICB9XG5cbiAgKHdpbmRvdyBhcyBOelNhZmVBbnkpLmFwcEJvb3RzdHJhcCA9ICgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHJlbW92ZSgpO1xuICAgICAgYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xuICAgIH0sIDI1KTtcbiAgfTtcbn1cbiJdfQ==