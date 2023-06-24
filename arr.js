// Написать свою реализацию поведения arr[Symbol.iterator]()
// перебора элементов массива через метод next.
//     Написать функцию реализовывающую данный функционал.
let arr =[1,2,3,4];
function inter(arr){
    let nextIndex = 0;
    return{
        next: function(){
            return nextIndex < arr.length ?
                {value: arr[nextIndex++], done: false} :
                {done: true};
        }
    }
}
const number =inter(arr);
number.next();
number.next();
number.next();
number.next();
number.next();

