class MyArray {
    constructor() {
      this.arr = [1, 2, 3, 0, 10, 5, 22, 11];
  }    
  const map = function(arr, callback, thisArg) {
  let i, length = arr.length, results = [];
  for (i = 0; i < length; i = i + 1) {
    results.push(callback.call(thisArg, arr[i], i, arr));
  }
  return results;
};
  const num = map(arr*2); 
  });
  console.log (num);

  
const filter = function(arr, callback, thisArg) {
    let i, length = arr.length, results = [];
    for (i = 0; i < length; i = i + 1) {
      if (callback.call(thisArg, arr[i], i, arr)) {
        results.push(arr[i]);
      }
    }
    return results;
  };



    sort(callback) {
        for (let i = 0, end = this.arr.length - 1; i < end; i++) {
        for (let j = 0, endj = end - i; j < endj; j++) {
            if (callback(this.arr[j], this.arr[j + 1]) > 0) {
                let swap = this.arr[j];
                    this.arr[j] = this.arr[j + 1];
                    this.arr[j + 1] = swap;
            }
        }
        }
    }
}
    const arr = new MyArray();
        arr.sort(function(a, b) {
            return b - a;
        });

        console.log({
            arr
        });
    






    fetch ("https://jsonplaceholder.typicode.com/todos")

    .then(function (response){
    return response.json();

    }).then(function(data){
    console.log(data);

    }).catch(function(){
    console.log("Error");
    
    });

    const n=10; 
    const fibonacci = [0,1];  
    for (i = 2; i < n; i ++) {
        fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
    }
    console.log(fibonacci.slice(0, n));
    
    const f = [0, 1];

        if (n <= 2) {

    let result = f.slice(0, n);

    } else {
    
    for (i = 0; i < n - 2; i++) { 
        f.push(f[f.length - 1] + f[f.length - 2]); 
        }
    }

    console.log(result);



    const num = function fib(n) {
      
        let a = 1,
          b = 1;
            for (var i = 3; i <= n; i++) {
        
        let temp = a + b;
          a = b;
          b = temp;
      }
      return b;
        
      }
    console.log ();  
    


    const newData = arr.filter(function(number) {
        for (i = 0; i < data.length; i++){
            if (data.id);
    });

    console.log();
  
  
  
  
  