const wheel = document.querySelector('.wheel');
const spinButton = document.querySelector('.spin-btn');
const prizeImg = document.querySelector('#prize-img');
const prizeDisplay = document.querySelector('.prize-display');
const prizeName = document.querySelector('#prize-name');
const inventoryWindow = document.querySelector('.inventory-window');
const inventoryBtn = document.querySelector('#inventory');

let isSpinning = false;

let inventory = [];





let prises = [ 
  {
   name: '1000$',
   src:'./assets/монета времени.png'
  },
  {
   name:'КЕРАМБИТ ДЕВОЧКА',
   src:'./assets/tttt.png'
  },
  {
   name:'AWP ПРЯМО В ЦЕЛЬ',
   src:'./assets/qqqqq.png'
  },
  {
   name:'ЗОЛОТОЙ НОЖ',
   src:'./assets/nozh 1.png'
  },
  {
   name:'АУГ-ЗОЛОТОЙ ЗУБ',
   src:'./assets/kkkk.png'
  },
  {
   name:'П-90 АЗИМОВ',
   src:'./assets/hhhh.png'
  },
  {
   name:'Нож Убийца',
   src:'./assets/gggg.png'
  },
  {
   name:'Нож Ризонанс',
   src:'./assets/dddd.png'
  }
]

let audio = new Audio('./sound/spin.mp3');

prises = prises.reverse();

function startSpin() {
  if(isSpinning){
    return;
}

audio.currentTime = 0.2;
audio.play();

isSpinning = true;
wheel.style.transform = `perspective(1000px) rotateY(0deg)`;
let random = Math.floor(Math.random() * prises.length);
let rotation = 3 * 360 + (random * 45);

wheel.style.transform = `perspective(1000px) rotateY(${rotation}deg)`;
wheel.style.transition = 'transform 4s ease';


let timeout = setTimeout(() => {
    audio.pause();
    isSpinning = false;
    wheel.style.transition = '';
    wheel.style.transform = '';
    prizeImg.src = prises[random].src;
    inventory.push(prises[random]);
    prizeName.innerText = prises[random].name;
    prizeDisplay.style.display = 'flex';
    addToInventory();
    clearTimeout(timeout);
},4000)

// alert(`Вы выиграли: ${prises[random]}`);


}



function addToInventory() {
inventoryWindow.innerHTML = '';

 
inventory.forEach((item) => {
let img = document.createElement('img');
img.src = item.src;
inventoryWindow.appendChild(img);
})


}



prizeDisplay.onclick = () => {
  prizeDisplay.style.display = 'none';
}
spinButton.onclick = startSpin;

inventoryWindow.onclick = () => {
  inventoryWindow.style.display = 'none';
}

inventoryBtn.onclick = () => {
  inventoryWindow.style.display = 'flex';
}
