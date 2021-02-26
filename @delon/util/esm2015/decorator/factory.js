import { warn } from '@delon/util/other';
export function propDecoratorFactory(name, fallback, defaultValue) {
    function propDecorator(target, propName, originalDescriptor) {
        const privatePropName = `$$__${propName}`;
        if (Object.prototype.hasOwnProperty.call(target, privatePropName)) {
            warn(`The prop "${privatePropName}" is already exist, it will be overrided by ${name} decorator.`);
        }
        Object.defineProperty(target, privatePropName, {
            configurable: true,
            writable: true,
        });
        return {
            get() {
                return originalDescriptor && originalDescriptor.get ? originalDescriptor.get.bind(this)() : this[privatePropName];
            },
            set(value) {
                if (originalDescriptor && originalDescriptor.set) {
                    originalDescriptor.set.bind(this)(fallback(value, defaultValue));
                }
                this[privatePropName] = fallback(value, defaultValue);
            },
        };
    }
    return propDecorator;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3V0aWwvZGVjb3JhdG9yL2ZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBR3pDLE1BQU0sVUFBVSxvQkFBb0IsQ0FDbEMsSUFBWSxFQUNaLFFBQXNDLEVBQ3RDLFlBQXVCO0lBRXZCLFNBQVMsYUFBYSxDQUFDLE1BQWlCLEVBQUUsUUFBZ0IsRUFBRSxrQkFBdUQ7UUFDakgsTUFBTSxlQUFlLEdBQUcsT0FBTyxRQUFRLEVBQUUsQ0FBQztRQUUxQyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsZUFBZSxDQUFDLEVBQUU7WUFDakUsSUFBSSxDQUFDLGFBQWEsZUFBZSwrQ0FBK0MsSUFBSSxhQUFhLENBQUMsQ0FBQztTQUNwRztRQUVELE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLGVBQWUsRUFBRTtZQUM3QyxZQUFZLEVBQUUsSUFBSTtZQUNsQixRQUFRLEVBQUUsSUFBSTtTQUNmLENBQUMsQ0FBQztRQUVILE9BQU87WUFDTCxHQUFHO2dCQUNELE9BQU8sa0JBQWtCLElBQUksa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUNwSCxDQUFDO1lBQ0QsR0FBRyxDQUFDLEtBQVE7Z0JBQ1YsSUFBSSxrQkFBa0IsSUFBSSxrQkFBa0IsQ0FBQyxHQUFHLEVBQUU7b0JBQ2hELGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDO2lCQUNsRTtnQkFDRCxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQztZQUN4RCxDQUFDO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCxPQUFPLGFBQWEsQ0FBQztBQUN2QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgd2FybiB9IGZyb20gJ0BkZWxvbi91dGlsL290aGVyJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wRGVjb3JhdG9yRmFjdG9yeTxULCBEPihcbiAgbmFtZTogc3RyaW5nLFxuICBmYWxsYmFjazogKHY6IFQsIGRlZmF1bHRWYWx1ZTogRCkgPT4gRCxcbiAgZGVmYXVsdFZhbHVlOiBOelNhZmVBbnksXG4pOiAodGFyZ2V0OiBOelNhZmVBbnksIHByb3BOYW1lOiBzdHJpbmcpID0+IHZvaWQge1xuICBmdW5jdGlvbiBwcm9wRGVjb3JhdG9yKHRhcmdldDogTnpTYWZlQW55LCBwcm9wTmFtZTogc3RyaW5nLCBvcmlnaW5hbERlc2NyaXB0b3I/OiBUeXBlZFByb3BlcnR5RGVzY3JpcHRvcjxOelNhZmVBbnk+KTogTnpTYWZlQW55IHtcbiAgICBjb25zdCBwcml2YXRlUHJvcE5hbWUgPSBgJCRfXyR7cHJvcE5hbWV9YDtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGFyZ2V0LCBwcml2YXRlUHJvcE5hbWUpKSB7XG4gICAgICB3YXJuKGBUaGUgcHJvcCBcIiR7cHJpdmF0ZVByb3BOYW1lfVwiIGlzIGFscmVhZHkgZXhpc3QsIGl0IHdpbGwgYmUgb3ZlcnJpZGVkIGJ5ICR7bmFtZX0gZGVjb3JhdG9yLmApO1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByaXZhdGVQcm9wTmFtZSwge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgZ2V0KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBvcmlnaW5hbERlc2NyaXB0b3IgJiYgb3JpZ2luYWxEZXNjcmlwdG9yLmdldCA/IG9yaWdpbmFsRGVzY3JpcHRvci5nZXQuYmluZCh0aGlzKSgpIDogdGhpc1twcml2YXRlUHJvcE5hbWVdO1xuICAgICAgfSxcbiAgICAgIHNldCh2YWx1ZTogVCk6IHZvaWQge1xuICAgICAgICBpZiAob3JpZ2luYWxEZXNjcmlwdG9yICYmIG9yaWdpbmFsRGVzY3JpcHRvci5zZXQpIHtcbiAgICAgICAgICBvcmlnaW5hbERlc2NyaXB0b3Iuc2V0LmJpbmQodGhpcykoZmFsbGJhY2sodmFsdWUsIGRlZmF1bHRWYWx1ZSkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXNbcHJpdmF0ZVByb3BOYW1lXSA9IGZhbGxiYWNrKHZhbHVlLCBkZWZhdWx0VmFsdWUpO1xuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHByb3BEZWNvcmF0b3I7XG59XG4iXX0=