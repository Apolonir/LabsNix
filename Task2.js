var i = 1;
for(; i < 100; i++){
    if(i%3==0 && i%5==0) console.log(i,"FizzBuzz")
    else if(i%3==0){
        console.log(i, "fizz");
    }
    else if(i%5==0){
            console.log(i,"buzz");
            }
    else console.log(i);
        }