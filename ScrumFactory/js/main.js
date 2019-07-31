
    // task 1
    var MyObject = {
        Name: "Dima",
    Age: 34,
    Hair: "Brown"
};


// task 2
var MyObject = {
        Name: "Dima",
    Age: 34,
    Hair: "Brown",
    output: function () {
        console.log(this.Name);
    }
};

MyObject.output();


// task 3
const MyArray= [ 1, 2, 3, 4, 5 ];

// task 4
const MyArray = [1, 2, 3, 4, 5];

const arr = MyArray.split(', ');

for (var i = 0; i < arr.length; i++) {
        alert('Значение:' + arr[i]);
}


// task 5
for (var n = 1; n < 100; n++) {
    if (n % 3 === 0) {
        document.write(n, " = Fizz <br/ >");
    } else
        if (n % 5 === 0) {
            document.write(n, " = Buzz <br />");
        }
    if (n % 5 === 0 && n % 3 === 0) {
        document.write(n, " = FizzBuzz <br />")
    }  else
         document.write(n, "<br/ >"); 
}


