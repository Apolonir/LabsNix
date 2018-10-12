function find(arr1,arr2){
    let res = [];
    if(arr1.length !== 0 && arr2.length !== 0){
    for(var i = 0; i < arr2.length; i++){
        if(arr2[i] < arr1.length && arr2[i] >= 0){
        res.push(arr1[arr2[i]]);
        }
    }
}
    return res;
}

function equal(arr){
    let avg = 0;
    let res = [];
    for(var i = 0;i < arr.length; i++){
        avg += arr[i].length;
    }
    avg /= arr.length;
    console.log(avg);
    let l = '';
    let a = [];
    for(var i = 0; i < arr.length; i++){
        function f(){
            w ='';
            l = arr[i][0];
        for(var j = 0; j < avg; j++){
            w += l;
        }
        return w;
    }  
    res.push(f());
}
return res; 
}
console.log(equal(['aa','bbb','cccc']));