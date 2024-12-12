const button = document.getElementById('buto')
const displayELE = document.getElementById('nonn')
button.addEventListener('click',() => {
    if (displayELE.style.display === 'none') {
        displayELE.style.display = 'block'
    } else {
        displayELE.style.display = 'none'
    }
})
const buttoni = document.getElementById('butt')
const displayELe = document.getElementById('noon')
buttoni.addEventListener('click',() => {
    if (displayELe.style.display === 'none') {
        displayELe.style.display = 'block'
    } else {
        displayELe.style.display = 'none'
    }
})
const carouselItems = document.querySelectorAll(".carousel_item"); 
let i = 1;

setInterval(() => {
// Accessing All the carousel Items
 Array.from(carouselItems).forEach((item,index) => {

   if(i < carouselItems.length){
    item.style.transform = `translateX(-${i*100}%)`
   }
  })


  if(i < carouselItems.length){
    i++;
  }
  else{
    i=0;
  }
},2000)