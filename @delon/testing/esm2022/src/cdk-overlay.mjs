/**
 * 清除Cdk的窗体，以便下一次使用，一般这样使用：
 * ```ts
 * afterEach(cleanCdkOverlayHtml);
 * ```
 */
export function cleanCdkOverlayHtml() {
    const els = document.querySelectorAll('.cdk-overlay-container');
    if (els && els.length > 0) {
        els.forEach(el => (el.innerHTML = ''));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLW92ZXJsYXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90ZXN0aW5nL3NyYy9jZGstb3ZlcmxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7R0FLRztBQUNILE1BQU0sVUFBVSxtQkFBbUI7SUFDakMsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFDaEUsSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQztRQUMxQixHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDekMsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIOa4hemZpENka+eahOeql+S9k++8jOS7peS+v+S4i+S4gOasoeS9v+eUqO+8jOS4gOiIrOi/meagt+S9v+eUqO+8mlxuICogYGBgdHNcbiAqIGFmdGVyRWFjaChjbGVhbkNka092ZXJsYXlIdG1sKTtcbiAqIGBgYFxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xlYW5DZGtPdmVybGF5SHRtbCgpOiB2b2lkIHtcbiAgY29uc3QgZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNkay1vdmVybGF5LWNvbnRhaW5lcicpO1xuICBpZiAoZWxzICYmIGVscy5sZW5ndGggPiAwKSB7XG4gICAgZWxzLmZvckVhY2goZWwgPT4gKGVsLmlubmVySFRNTCA9ICcnKSk7XG4gIH1cbn1cbiJdfQ==