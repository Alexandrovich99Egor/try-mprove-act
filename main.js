const data = 'https://rickandmortyapi.com/api/character';

fetch(data)
.then(response=>response.json())
.then(data=>{
  CreateHero(data.results)
})
.catch(error=>{
   console.error('Хуйня',error)
})


// global varibles
let out = document.querySelector('.content_out');
let inp = document.querySelector('.inp');



// Create hero arr map
function CreateHero(heroes){
heroes.map(item=>{
   CreateCartHero(item)
   findHero(item)
   ShowDetal(item.status)
})
}


// Create cart for hero я єбу 
function CreateCartHero(item){
let div = document.createElement('div');
div.classList.add('content__wrapper-hero');



let name = document.createElement('p');
let image = document.createElement('img');
let status = document.createElement('p');


name.innerHTML = `Name:${item.name}`;
status.innerHTML =  `Status:${item.status}`;
image.src = `${item.image}`;


div.append(name,status,image)
out.append(div)
}

// еба нахуй делам шоб вівело))

function findHero(item){
let inpValue = inp.value;
let names = item.name.toLowerCase()
console.log(names);

inp.addEventListener('change',(event)=>{
   let inpTargetValue = event.target.value;
   inpTargetValue = inpTargetValue.toLowerCase();
   if(inpTargetValue == names){
     console.log('Find:'+item.name);
   }else{
      console.log('Not find');
   }
});
}

const arrObjBtn = [];
function ShowDetal(status){
   // let divContentShow = document.createElement('div');
   // divContentShow.classList.add('content__about-hero');
   // divContentShow.innerHTML = status
   let buttonShowInfo = document.createElement('button');
   buttonShowInfo.classList.add('button-show-info');
   buttonShowInfo.innerHTML = 'Show detal info';
   
   arrObjBtn.push(buttonShowInfo)
}