console.log('Hello World');

let text = 'Hello';

//text = 44 as String; //BEURK

//function must declare types of its inputs
export function double(x : number) {
    return 2*x;
}

const result = double(text.length);
console.log(result);

//Arrays are typed already
function maxReducer(max : number, next: number) {
    return next > max ? next : max;
}

let max = [2, 10, -10, 13, 56].reduce( maxReducer);

let array:String[] = [];
array.push("12","15");
console.log(array);

class User {
    name: String;
    age = 18;
    city:City;

    eat() {
        console.log('Miam');
    }
}
class City {
    name:String;
}

let peter = new User();
peter.name = "Peter";
let london = new City();
london.name = "London";
peter.city = london;

let julia = {
    name : "Julia",
    age : 24,
    city:{
        name : "Toulouse"
    },
    eat(){/*vite casse-pied...*/}
};

peter = julia; //This is Duck Typing