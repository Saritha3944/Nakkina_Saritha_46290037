var n = prompt("Enter the Number", 9);
var sum = 0;
for(i=1; i<=n; i++){
    sum+=i;
}
//console.log(sum);
document.getElementById("demo").innerHTML = sum;