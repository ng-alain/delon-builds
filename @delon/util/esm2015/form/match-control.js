/**
 * Match two control values
 *
 * 匹配两个控件值
 * ```ts
 * this.form = new FormGroup({
 *  pwd: new FormControl(''),
 *  repwd: new FormControl(''),
 * }, {
 *  validators: MatchControl('pwd', 'repwd'),
 * });
 * ```
 */
export function MatchControl(controlName, matchingControlName) {
    return (formGroup) => {
        const control = formGroup.get(controlName);
        const matchingControl = formGroup.get(matchingControlName);
        if (matchingControl.errors && !matchingControl.errors.matchControl) {
            return null;
        }
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ matchControl: true });
        }
        else {
            matchingControl.setErrors(null);
        }
        return null;
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0Y2gtY29udHJvbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3V0aWwvZm9ybS9tYXRjaC1jb250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBOzs7Ozs7Ozs7Ozs7R0FZRztBQUNILE1BQU0sVUFBVSxZQUFZLENBQUMsV0FBbUIsRUFBRSxtQkFBMkI7SUFDM0UsT0FBTyxDQUFDLFNBQTBCLEVBQUUsRUFBRTtRQUNwQyxNQUFNLE9BQU8sR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBRSxDQUFDO1FBQzVDLE1BQU0sZUFBZSxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUUsQ0FBQztRQUM1RCxJQUFJLGVBQWUsQ0FBQyxNQUFNLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRTtZQUNsRSxPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsSUFBSSxPQUFPLENBQUMsS0FBSyxLQUFLLGVBQWUsQ0FBQyxLQUFLLEVBQUU7WUFDM0MsZUFBZSxDQUFDLFNBQVMsQ0FBQyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQ25EO2FBQU07WUFDTCxlQUFlLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2pDO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBWYWxpZGF0b3JGbiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLyoqXG4gKiBNYXRjaCB0d28gY29udHJvbCB2YWx1ZXNcbiAqXG4gKiDljLnphY3kuKTkuKrmjqfku7blgLxcbiAqIGBgYHRzXG4gKiB0aGlzLmZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcbiAqICBwd2Q6IG5ldyBGb3JtQ29udHJvbCgnJyksXG4gKiAgcmVwd2Q6IG5ldyBGb3JtQ29udHJvbCgnJyksXG4gKiB9LCB7XG4gKiAgdmFsaWRhdG9yczogTWF0Y2hDb250cm9sKCdwd2QnLCAncmVwd2QnKSxcbiAqIH0pO1xuICogYGBgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBNYXRjaENvbnRyb2woY29udHJvbE5hbWU6IHN0cmluZywgbWF0Y2hpbmdDb250cm9sTmFtZTogc3RyaW5nKTogVmFsaWRhdG9yRm4ge1xuICByZXR1cm4gKGZvcm1Hcm91cDogQWJzdHJhY3RDb250cm9sKSA9PiB7XG4gICAgY29uc3QgY29udHJvbCA9IGZvcm1Hcm91cC5nZXQoY29udHJvbE5hbWUpITtcbiAgICBjb25zdCBtYXRjaGluZ0NvbnRyb2wgPSBmb3JtR3JvdXAuZ2V0KG1hdGNoaW5nQ29udHJvbE5hbWUpITtcbiAgICBpZiAobWF0Y2hpbmdDb250cm9sLmVycm9ycyAmJiAhbWF0Y2hpbmdDb250cm9sLmVycm9ycy5tYXRjaENvbnRyb2wpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAoY29udHJvbC52YWx1ZSAhPT0gbWF0Y2hpbmdDb250cm9sLnZhbHVlKSB7XG4gICAgICBtYXRjaGluZ0NvbnRyb2wuc2V0RXJyb3JzKHsgbWF0Y2hDb250cm9sOiB0cnVlIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBtYXRjaGluZ0NvbnRyb2wuc2V0RXJyb3JzKG51bGwpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcbn1cbiJdfQ==