function drawHighcharts(){Highcharts.chart("chart-container-bull-one-year",{chart:{type:"line",styledMode:!0,spacingBottom:25,spacingRight:100,spacingLeft:0,spacingTop:20},title:{text:null},data:{googleSpreadsheetKey:"17Ql0YYsBM29J-qIuWYxL0o2NP67QLj8VBkvt8WD_Abk"},plotOptions:{series:{lineWidth:1,marker:{enabled:!1,symbol:"circle",fillColor:"#ffffff",states:{hover:{fillColor:"#ffffff"}}}}},legend:{align:"right",symbolRadius:0,verticalAlign:"top",x:10,y:-10},xAxis:{labels:{style:{whiteSpace:"nowrap"}},tickLength:5},yAxis:{title:!1,labels:{useHTML:!0,overflow:"allow"}},credits:{enabled:!1},tooltip:{shadow:!1,padding:10,shared:!0,valueSuffix:"%",valueDecimals:2},responsive:{rules:[{condition:{maxWidth:500},chartOptions:{chart:{spacingRight:10},legend:{align:"left",x:-8},tooltip:{enabled:!1}}}]}}),Highcharts.chart("chart-container-bull-one-year-2",{chart:{type:"bar",styledMode:!0,spacingBottom:25,spacingRight:100,spacingLeft:0,spacingTop:25},title:{text:null},data:{googleSpreadsheetKey:"17Ql0YYsBM29J-qIuWYxL0o2NP67QLj8VBkvt8WD_Abk",googleSpreadsheetWorksheet:2},plotOptions:{series:{groupPadding:.1,clip:!1}},legend:{enabled:!1},xAxis:{labels:{style:{whiteSpace:"nowrap"}},tickLength:5},yAxis:{title:!1,labels:{useHTML:!0,overflow:"allow",formatter:function(){return Highcharts.numberFormat(this.value,0,".",",")}},plotLines:[{width:2,value:76.12,zIndex:5,label:{text:"S&P 500",align:"center",y:-5,rotation:0}}],max:1e3},credits:{enabled:!1},tooltip:{shadow:!1,padding:10,valueSuffix:"%",valueDecimals:2},responsive:{rules:[{condition:{maxWidth:500},chartOptions:{chart:{spacingRight:20},legend:{align:"left",x:-8},tooltip:{enabled:!1}}}]}})}Highcharts.setOptions({lang:{thousandsSep:","}}),"complete"===document.readyState||"interactive"===document.readyState?drawHighcharts():document.addEventListener("DOMContentLoaded",drawHighcharts);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiZHJhd0hpZ2hjaGFydHMiLCJIaWdoY2hhcnRzIiwiY2hhcnQiLCJ0eXBlIiwic3R5bGVkTW9kZSIsInNwYWNpbmdCb3R0b20iLCJzcGFjaW5nUmlnaHQiLCJzcGFjaW5nTGVmdCIsInNwYWNpbmdUb3AiLCJ0aXRsZSIsInRleHQiLCJkYXRhIiwiZ29vZ2xlU3ByZWFkc2hlZXRLZXkiLCJwbG90T3B0aW9ucyIsInNlcmllcyIsImxpbmVXaWR0aCIsIm1hcmtlciIsImVuYWJsZWQiLCJzeW1ib2wiLCJmaWxsQ29sb3IiLCJzdGF0ZXMiLCJob3ZlciIsImxlZ2VuZCIsImFsaWduIiwic3ltYm9sUmFkaXVzIiwidmVydGljYWxBbGlnbiIsIngiLCJ5IiwieEF4aXMiLCJsYWJlbHMiLCJzdHlsZSIsIndoaXRlU3BhY2UiLCJ0aWNrTGVuZ3RoIiwieUF4aXMiLCJ1c2VIVE1MIiwib3ZlcmZsb3ciLCJjcmVkaXRzIiwidG9vbHRpcCIsInNoYWRvdyIsInBhZGRpbmciLCJzaGFyZWQiLCJ2YWx1ZVN1ZmZpeCIsInZhbHVlRGVjaW1hbHMiLCJyZXNwb25zaXZlIiwicnVsZXMiLCJjb25kaXRpb24iLCJtYXhXaWR0aCIsImNoYXJ0T3B0aW9ucyIsImdvb2dsZVNwcmVhZHNoZWV0V29ya3NoZWV0IiwiZ3JvdXBQYWRkaW5nIiwiY2xpcCIsImZvcm1hdHRlciIsIm51bWJlckZvcm1hdCIsInRoaXMiLCJ2YWx1ZSIsInBsb3RMaW5lcyIsIndpZHRoIiwiekluZGV4IiwibGFiZWwiLCJyb3RhdGlvbiIsIm1heCIsInNldE9wdGlvbnMiLCJsYW5nIiwidGhvdXNhbmRzU2VwIiwiZG9jdW1lbnQiLCJyZWFkeVN0YXRlIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6IkFBT0EsU0FBQUEsaUJBQ0FDLFdBQUFDLE1BQUEsZ0NBQUEsQ0FDQUEsTUFBQSxDQUNBQyxLQUFBLE9BQ0FDLFlBQUEsRUFDQUMsY0FBQSxHQUNBQyxhQUFBLElBQ0FDLFlBQUEsRUFDQUMsV0FBQSxJQUVBQyxNQUFBLENBQ0FDLEtBQUEsTUFFQUMsS0FBQSxDQUNBQyxxQkFBQSxnREFHQUMsWUFBQSxDQUNBQyxPQUFBLENBQ0FDLFVBQUEsRUFFQUMsT0FBQSxDQUNBQyxTQUFBLEVBQ0FDLE9BQUEsU0FDQUMsVUFBQSxVQUNBQyxPQUFBLENBQ0FDLE1BQUEsQ0FDQUYsVUFBQSxlQU1BRyxPQUFBLENBQ0FDLE1BQUEsUUFDQUMsYUFBQSxFQUNBQyxjQUFBLE1BQ0FDLEVBQUEsR0FDQUMsR0FBQSxJQUdBQyxNQUFBLENBQ0FDLE9BQUEsQ0FDQUMsTUFBQSxDQUNBQyxXQUFBLFdBT0FDLFdBQUEsR0FHQUMsTUFBQSxDQUNBeEIsT0FBQSxFQUNBb0IsT0FBQSxDQUNBSyxTQUFBLEVBQ0FDLFNBQUEsVUFVQUMsUUFBQSxDQUNBbkIsU0FBQSxHQUVBb0IsUUFBQSxDQUNBQyxRQUFBLEVBQ0FDLFFBQUEsR0FDQUMsUUFBQSxFQUNBQyxZQUFBLElBRUFDLGNBQUEsR0FFQUMsV0FBQSxDQUNBQyxNQUFBLENBQUEsQ0FDQUMsVUFBQSxDQUNBQyxTQUFBLEtBRUFDLGFBQUEsQ0FDQTdDLE1BQUEsQ0FDQUksYUFBQSxJQUVBZ0IsT0FBQSxDQUNBQyxNQUFBLE9BQ0FHLEdBQUEsR0FFQVcsUUFBQSxDQUNBcEIsU0FBQSxTQU1BaEIsV0FBQUMsTUFBQSxrQ0FBQSxDQUNBQSxNQUFBLENBQ0FDLEtBQUEsTUFDQUMsWUFBQSxFQUNBQyxjQUFBLEdBQ0FDLGFBQUEsSUFDQUMsWUFBQSxFQUNBQyxXQUFBLElBRUFDLE1BQUEsQ0FDQUMsS0FBQSxNQUVBQyxLQUFBLENBQ0FDLHFCQUFBLCtDQUNBb0MsMkJBQUEsR0FHQW5DLFlBQUEsQ0FDQUMsT0FBQSxDQUNBbUMsYUFBQSxHQUNBQyxNQUFBLElBb0JBNUIsT0FBQSxDQUNBTCxTQUFBLEdBRUFXLE1BQUEsQ0FDQUMsT0FBQSxDQUNBQyxNQUFBLENBQ0FDLFdBQUEsV0FPQUMsV0FBQSxHQUdBQyxNQUFBLENBQ0F4QixPQUFBLEVBQ0FvQixPQUFBLENBQ0FLLFNBQUEsRUFDQUMsU0FBQSxRQUNBZ0IsVUFBQSxXQUNBLE9BQUFsRCxXQUFBbUQsYUFBQUMsS0FBQUMsTUFBQSxFQUFBLElBQUEsT0FHQUMsVUFBQSxDQUFBLENBQ0FDLE1BQUEsRUFDQUYsTUFBQSxNQUNBRyxPQUFBLEVBQ0FDLE1BQUEsQ0FDQWhELEtBQUEsVUFDQWEsTUFBQSxTQUNBSSxHQUFBLEVBQ0FnQyxTQUFBLEtBSUFDLElBQUEsS0FJQXhCLFFBQUEsQ0FDQW5CLFNBQUEsR0FFQW9CLFFBQUEsQ0FDQUMsUUFBQSxFQUNBQyxRQUFBLEdBQ0FFLFlBQUEsSUFFQUMsY0FBQSxHQUVBQyxXQUFBLENBQ0FDLE1BQUEsQ0FBQSxDQUNBQyxVQUFBLENBQ0FDLFNBQUEsS0FFQUMsYUFBQSxDQUNBN0MsTUFBQSxDQUNBSSxhQUFBLElBRUFnQixPQUFBLENBQ0FDLE1BQUEsT0FDQUcsR0FBQSxHQUVBVyxRQUFBLENBQ0FwQixTQUFBLFNBbk5BaEIsV0FBQTRELFdBQUEsQ0FDQUMsS0FBQSxDQUNBQyxhQUFBLE9BeU5BLGFBQUFDLFNBQUFDLFlBQUEsZ0JBQUFELFNBQUFDLFdBQ0FqRSxpQkFFQWdFLFNBQUFFLGlCQUFBLG1CQUFBbEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIkhpZ2hjaGFydHMuc2V0T3B0aW9ucyh7XG4gICAgbGFuZzoge1xuICAgICAgdGhvdXNhbmRzU2VwOiAnLCdcbiAgICB9XG59KTtcblxuXG5mdW5jdGlvbiBkcmF3SGlnaGNoYXJ0cygpIHtcbiAgICBIaWdoY2hhcnRzLmNoYXJ0KFwiY2hhcnQtY29udGFpbmVyLWJ1bGwtb25lLXllYXJcIiwgeyAvLyBhZGQgdGhlIHByb3BlciBJRCBoZXJlXG4gICAgICAgIGNoYXJ0OiB7XG4gICAgICAgICAgICB0eXBlOiAnbGluZScsXG4gICAgICAgICAgICBzdHlsZWRNb2RlOiB0cnVlLFxuICAgICAgICAgICAgc3BhY2luZ0JvdHRvbTogMjUsXG4gICAgICAgICAgICBzcGFjaW5nUmlnaHQ6IDEwMCxcbiAgICAgICAgICAgIHNwYWNpbmdMZWZ0OiAwLFxuICAgICAgICAgICAgc3BhY2luZ1RvcDogMjBcbiAgICAgICAgfSwgXG4gICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICB0ZXh0OiBudWxsXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGdvb2dsZVNwcmVhZHNoZWV0S2V5OiAnMTdRbDBZWXNCTTI5Si1xSXVXWXhMMG8yTlA2N1FMajhWQmt2dDhXRF9BYmsnLFxuICAgICAgICB9LFxuICAgICAgICAvLyBmb3IgbGluZSBjaGFydHMgb25seVxuICAgICAgICBwbG90T3B0aW9uczoge1xuICAgICAgICAgICAgc2VyaWVzOiB7XG4gICAgICAgICAgICAgICAgbGluZVdpZHRoOiAxLFxuICAgICAgICAgICAgICAgIC8vIGNsaXA6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG1hcmtlcjoge1xuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgc3ltYm9sOiAnY2lyY2xlJyxcbiAgICAgICAgICAgICAgICAgICAgZmlsbENvbG9yOiAnI2ZmZmZmZicsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaG92ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsQ29sb3I6ICcjZmZmZmZmJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgIGFsaWduOiAncmlnaHQnLFxuICAgICAgICAgICAgc3ltYm9sUmFkaXVzOiAwLFxuICAgICAgICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICAgICAgICB4OiAxMCxcbiAgICAgICAgICAgIHk6IC0xMCxcbiAgICAgICAgICAgIC8vIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIHhBeGlzOiB7XG4gICAgICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgLy8gZWRpdHMgeEF4aXMgdGlja3NcbiAgICAgICAgICAgICAgICAvLyBkYXRlVGltZUxhYmVsRm9ybWF0czoge1xuICAgICAgICAgICAgICAgIC8vICAgICB3ZWVrOiAnJWIuICVlJyxcbiAgICAgICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRpY2tMZW5ndGg6IDUsXG4gICAgICAgICAgICAvLyB0aWNrSW50ZXJ2YWw6IDI0ICogMzYwMCAqIDEwMDAgKiA3XG4gICAgICAgIH0sXG4gICAgICAgIHlBeGlzOiB7XG4gICAgICAgICAgICB0aXRsZTogZmFsc2UsXG4gICAgICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICAgICAgICB1c2VIVE1MOiB0cnVlLFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnYWxsb3cnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZvcm1hdHRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gICAgIHJldHVybiBIaWdoY2hhcnRzLm51bWJlckZvcm1hdCh0aGlzLnZhbHVlLDAsJy4nLCcsJyk7XG4gICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIG1pbjogLFxuICAgICAgICAgICAgLy8gbWF4OiAsXG4gICAgICAgICAgICAvLyB0aWNrQW1vdW50OiAsXG4gICAgICAgICAgICAvLyBhZGRzIGNvbW1hcyB0byB0aG91c2FuZHNcbiAgICAgICAgfSxcbiAgICAgICAgY3JlZGl0czoge1xuICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgICAgc2hhZG93OiBmYWxzZSxcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwLFxuICAgICAgICAgICAgc2hhcmVkOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWVTdWZmaXg6ICclJyxcbiAgICAgICAgICAgIC8vIHZhbHVlUHJlZml4OiAnJyxcbiAgICAgICAgICAgIHZhbHVlRGVjaW1hbHM6IDIsXG4gICAgICAgIH0sXG4gICAgICAgIHJlc3BvbnNpdmU6IHtcbiAgICAgICAgICAgIHJ1bGVzOiBbe1xuICAgICAgICAgICAgY29uZGl0aW9uOiB7XG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6IDUwMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNoYXJ0T3B0aW9uczoge1xuICAgICAgICAgICAgICAgIGNoYXJ0OiB7XG4gICAgICAgICAgICAgICAgc3BhY2luZ1JpZ2h0OiAxMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduOiAnbGVmdCcsXG4gICAgICAgICAgICAgICAgICAgIHg6IC04XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfVxuICAgIH0pLFxuICAgIEhpZ2hjaGFydHMuY2hhcnQoXCJjaGFydC1jb250YWluZXItYnVsbC1vbmUteWVhci0yXCIsIHsgLy8gYWRkIHRoZSBwcm9wZXIgSUQgaGVyZVxuICAgICAgICBjaGFydDoge1xuICAgICAgICAgICAgdHlwZTogJ2JhcicsXG4gICAgICAgICAgICBzdHlsZWRNb2RlOiB0cnVlLFxuICAgICAgICAgICAgc3BhY2luZ0JvdHRvbTogMjUsXG4gICAgICAgICAgICBzcGFjaW5nUmlnaHQ6IDEwMCxcbiAgICAgICAgICAgIHNwYWNpbmdMZWZ0OiAwLFxuICAgICAgICAgICAgc3BhY2luZ1RvcDogMjVcbiAgICAgICAgfSwgXG4gICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICB0ZXh0OiBudWxsXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGdvb2dsZVNwcmVhZHNoZWV0S2V5OiAnMTdRbDBZWXNCTTI5Si1xSXVXWXhMMG8yTlA2N1FMajhWQmt2dDhXRF9BYmsnLFxuICAgICAgICAgICAgZ29vZ2xlU3ByZWFkc2hlZXRXb3Jrc2hlZXQ6IDJcbiAgICAgICAgfSxcbiAgICAgICAgLy8gZm9yIGJhciBjaGFydHMgb25seVxuICAgICAgICBwbG90T3B0aW9uczoge1xuICAgICAgICAgICAgc2VyaWVzOiB7XG4gICAgICAgICAgICAgICAgZ3JvdXBQYWRkaW5nOiAwLjEsXG4gICAgICAgICAgICAgICAgY2xpcDogZmFsc2UsXG4gICAgICAgICAgICB9IFxuICAgICAgICB9LFxuICAgICAgICAvLyBmb3IgbGluZSBjaGFydHMgb25seVxuICAgICAgICAvLyBwbG90T3B0aW9uczoge1xuICAgICAgICAvLyAgICAgc2VyaWVzOiB7XG4gICAgICAgIC8vICAgICAgICAgbGluZVdpZHRoOiAxLFxuICAgICAgICAvLyAgICAgICAgIC8vIGNsaXA6IGZhbHNlLFxuICAgICAgICAvLyAgICAgICAgIG1hcmtlcjoge1xuICAgICAgICAvLyAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgLy8gICAgICAgICAgICAgc3ltYm9sOiAnY2lyY2xlJyxcbiAgICAgICAgLy8gICAgICAgICAgICAgZmlsbENvbG9yOiAnI2ZmZmZmZicsXG4gICAgICAgIC8vICAgICAgICAgICAgIHN0YXRlczoge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgaG92ZXI6IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBmaWxsQ29sb3I6ICcjZmZmZmZmJ1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9LFxuICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIHhBeGlzOiB7XG4gICAgICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgLy8gZWRpdHMgeEF4aXMgdGlja3NcbiAgICAgICAgICAgICAgICAvLyBkYXRlVGltZUxhYmVsRm9ybWF0czoge1xuICAgICAgICAgICAgICAgIC8vICAgICB3ZWVrOiAnJWIuICVlJyxcbiAgICAgICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRpY2tMZW5ndGg6IDUsXG4gICAgICAgICAgICAvLyB0aWNrSW50ZXJ2YWw6IDI0ICogMzYwMCAqIDEwMDAgKiA3XG4gICAgICAgIH0sXG4gICAgICAgIHlBeGlzOiB7XG4gICAgICAgICAgICB0aXRsZTogZmFsc2UsXG4gICAgICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICAgICAgICB1c2VIVE1MOiB0cnVlLFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnYWxsb3cnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBIaWdoY2hhcnRzLm51bWJlckZvcm1hdCh0aGlzLnZhbHVlLDAsJy4nLCcsJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBsb3RMaW5lczogW3tcbiAgICAgICAgICAgICAgICB3aWR0aDogMixcbiAgICAgICAgICAgICAgICB2YWx1ZTogNzYuMTIsXG4gICAgICAgICAgICAgICAgekluZGV4OiA1LFxuICAgICAgICAgICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdTJlAgNTAwJyxcbiAgICAgICAgICAgICAgICAgICAgYWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICB5OiAtNSxcbiAgICAgICAgICAgICAgICAgICAgcm90YXRpb246IDBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIC8vIG1pbjogLFxuICAgICAgICAgICAgbWF4OiAxMDAwLFxuICAgICAgICAgICAgLy8gdGlja0Ftb3VudDogLFxuICAgICAgICAgICAgLy8gYWRkcyBjb21tYXMgdG8gdGhvdXNhbmRzXG4gICAgICAgIH0sXG4gICAgICAgIGNyZWRpdHM6IHtcbiAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICAgIHNoYWRvdzogZmFsc2UsXG4gICAgICAgICAgICBwYWRkaW5nOiAxMCxcbiAgICAgICAgICAgIHZhbHVlU3VmZml4OiAnJScsXG4gICAgICAgICAgICAvLyB2YWx1ZVByZWZpeDogJycsXG4gICAgICAgICAgICB2YWx1ZURlY2ltYWxzOiAyLFxuICAgICAgICB9LFxuICAgICAgICByZXNwb25zaXZlOiB7XG4gICAgICAgICAgICBydWxlczogW3tcbiAgICAgICAgICAgIGNvbmRpdGlvbjoge1xuICAgICAgICAgICAgICAgIG1heFdpZHRoOiA1MDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGFydE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBjaGFydDoge1xuICAgICAgICAgICAgICAgIHNwYWNpbmdSaWdodDogMjBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgICAgICBhbGlnbjogJ2xlZnQnLFxuICAgICAgICAgICAgICAgICAgICB4OiAtOFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5pZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJyB8fCBkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnaW50ZXJhY3RpdmUnKSB7XG4gICAgZHJhd0hpZ2hjaGFydHMoKTtcbn0gZWxzZSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZHJhd0hpZ2hjaGFydHMpO1xufSJdfQ==
