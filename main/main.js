const arrClear = [];
const arrClearSecond = [];
let numbers = [1,2,4,10,34];
let strings = 'Hello world';
let outContent = document.querySelector('.out');
let btn = document.createElement('button');
btn.innerText ="Click";
outContent.append(btn);
btn.addEventListener('click',()=>{
    func();
})
function func() {
 for(let i = 0;i<numbers.length;i++){
    let num ;
    if(numbers[i] !== 2 && numbers[i] !== 10 ){
        num =+ numbers[i];
        arrClearSecond.push(num)
    }else{
        ''
    };
   console.log(arrClearSecond);
 }
  arrClear.push(numbers);
}
console.log(arrClear);