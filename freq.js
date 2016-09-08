
function freq(arr){
 var sorted = [];
for (var i = 0; i < arr.length; i++) {
    sorted.push(arr[i].toLowerCase());
}
var map = {};
for(var i=0; i<sorted.length; i++){
  var key = sorted[i];
  map[key] = (map[key] || 0) + 1;
}

var fre = [];
for(key in map) fre.push({key: key, freq: map[key]});

fre.sort(function(a,b){return b.freq - a.freq})
var result=fre.slice(0,10);
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
