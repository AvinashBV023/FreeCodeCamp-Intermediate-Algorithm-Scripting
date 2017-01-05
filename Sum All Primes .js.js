
function sumPrimes(num) {
 var sum=5,k;
 for(j=5;j<=num;j+=2)
 	{k=0;
    	for(i=2;i<=Math.sqrt(j);i++){
 		if(j%i===0)
        k++;}
        if(k===0)
        sum +=j;}
    return sum;
}
sumPrimes(10);
