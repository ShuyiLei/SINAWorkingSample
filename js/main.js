// 功能性函数的内外部注释实例
/**
 - 手动切换指定页签
 - @param  {Num} idvalue 指定页签的id
 - @param  {Function} myTab 切换完成后执行的回调
 - @return {Num} index 指定标签的索引  
 */
 (function(){
    var tab0 = new Tab({
       bonds:[
       ['tab0_0','tab0_content0'],
       ['tab0_1','tab0_content1']
       ],
       trigger:'mouseover'
    });
   
    var tab1 = new Tab({
       bonds:[
       ['tab1_0','tab1_content0'],
       ['tab1_1','tab1_content1']],
       trigger:'mouseover'
    });

    var select0 = new DivSelect("searchType","sim-select","selectView",99);
    var select1 = new DivSelect("trendCtrType", "sim-select", "selectView", 99);	
 })();
 
