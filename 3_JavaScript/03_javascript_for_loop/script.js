var i = 1;
do{
    console.log(i)
    i++;

}while(i<=10)

for(var i =1;i<=10;i++){
    console.log(i)
}

var a = [10,20,30,40];
for(j in a){
    console.log(j)
}
function kurkure(){
    var y = document.getElementById('username');
    var z = y.value.toUpperCase();
    y.value = z;
}
s ={
    'name':'Sandeep',
    'address':'Maharajganj',
}
console.log(s['name'])