
function freq(arr){
var histogramMap = {};
for(var i=0, len=arr.length; i<len; i++){
  var key = arr[i];
  histogramMap[key] = (histogramMap[key] || 0) + 1;
}

var histogram = [];
for(key in histogramMap) histogram.push({key: key, freq: histogramMap[key]});

histogram.sort(function(a,b){return b.freq - a.freq})
var result=histogram.slice(0,10);
  return result;
}


function makeTable(JQuery){
   var arr= $('#text').val();
  var re= /\w+/g;
   var arr1=arr.match(re);
  var text= freq(arr1);
    var $table = $( "<tbody></tbody>" );

for ( var i = 0; i < text.length; i++ ) {
    var emp = text[i];
    var $line = $( "<tr></tr>" );
    $line.append( $( "<td></td>" ).html( emp.freq ) );
    $line.append( $( "<td></td>" ).html( emp.key ) );
    $table.append( $line );
}
$table.appendTo( $( "#result" ) );

}
