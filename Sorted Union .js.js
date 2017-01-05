function uniteUnique(arr) {
var args = Array.from(arguments);
var finalarray=[] ,res=[];
finalarray = args.reduce(function(a, b) {
  return a.concat(b);
}, []);
for(i=0;i<finalarray.length;i++){
if(res.indexOf(finalarray[i])==-1)
res.push(finalarray[i]);
}
  return res;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
