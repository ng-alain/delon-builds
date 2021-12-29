export function genMiniTooltipOptions(type, options) {
    const res = {
        showTitle: false,
        showMarkers: true,
        enterable: true,
        domStyles: {
            'g2-tooltip': { padding: '0px' },
            'g2-tooltip-title': { display: 'none' },
            'g2-tooltip-list-item': { margin: '4px' }
        },
        ...options
    };
    if (type === 'mini') {
        res.position = 'top';
        res.domStyles['g2-tooltip'] = { padding: '0px', backgroundColor: 'transparent', boxShadow: 'none' };
        res.itemTpl = `<li>{value}</li>`;
        res.offset = 8;
    }
    return res;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jaGFydC9jb3JlL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sVUFBVSxxQkFBcUIsQ0FBQyxJQUF3QixFQUFFLE9BQTBCO0lBQ3hGLE1BQU0sR0FBRyxHQUFxQjtRQUM1QixTQUFTLEVBQUUsS0FBSztRQUNoQixXQUFXLEVBQUUsSUFBSTtRQUNqQixTQUFTLEVBQUUsSUFBSTtRQUNmLFNBQVMsRUFBRTtZQUNULFlBQVksRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUU7WUFDaEMsa0JBQWtCLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFO1lBQ3ZDLHNCQUFzQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtTQUMxQztRQUNELEdBQUcsT0FBTztLQUNYLENBQUM7SUFDRixJQUFJLElBQUksS0FBSyxNQUFNLEVBQUU7UUFDbkIsR0FBRyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDckIsR0FBRyxDQUFDLFNBQVUsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLENBQUM7UUFDckcsR0FBRyxDQUFDLE9BQU8sR0FBRyxrQkFBa0IsQ0FBQztRQUNqQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztLQUNoQjtJQUVELE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgVHlwZXMgfSBmcm9tICdAYW50di9nMic7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5NaW5pVG9vbHRpcE9wdGlvbnModHlwZTogJ21pbmknIHwgJ2RlZmF1bHQnLCBvcHRpb25zPzogVHlwZXMuVG9vbHRpcENmZyk6IFR5cGVzLlRvb2x0aXBDZmcge1xuICBjb25zdCByZXM6IFR5cGVzLlRvb2x0aXBDZmcgPSB7XG4gICAgc2hvd1RpdGxlOiBmYWxzZSxcbiAgICBzaG93TWFya2VyczogdHJ1ZSxcbiAgICBlbnRlcmFibGU6IHRydWUsXG4gICAgZG9tU3R5bGVzOiB7XG4gICAgICAnZzItdG9vbHRpcCc6IHsgcGFkZGluZzogJzBweCcgfSxcbiAgICAgICdnMi10b29sdGlwLXRpdGxlJzogeyBkaXNwbGF5OiAnbm9uZScgfSxcbiAgICAgICdnMi10b29sdGlwLWxpc3QtaXRlbSc6IHsgbWFyZ2luOiAnNHB4JyB9XG4gICAgfSxcbiAgICAuLi5vcHRpb25zXG4gIH07XG4gIGlmICh0eXBlID09PSAnbWluaScpIHtcbiAgICByZXMucG9zaXRpb24gPSAndG9wJztcbiAgICByZXMuZG9tU3R5bGVzIVsnZzItdG9vbHRpcCddID0geyBwYWRkaW5nOiAnMHB4JywgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLCBib3hTaGFkb3c6ICdub25lJyB9O1xuICAgIHJlcy5pdGVtVHBsID0gYDxsaT57dmFsdWV9PC9saT5gO1xuICAgIHJlcy5vZmZzZXQgPSA4O1xuICB9XG5cbiAgcmV0dXJuIHJlcztcbn1cbiJdfQ==