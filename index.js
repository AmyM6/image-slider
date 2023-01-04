//get the arrow button for next
const nextEl = document.querySelector('.next');

//get the arrow button for the prev
const prevEl = document.querySelector('.prev');

//get all the images
const imgsEl = document.querySelectorAll('img');

//pull the image-container class
const imageContainerEl = document.querySelector('.image-container');

//set the inital number of image to start with
let currentImg = 1;

//create a variable for timeout
let timeOut;

nextEl.addEventListener("click", () =>{
    //increment the image when user clicks on the arrow
    currentImg++;
    clearTimeout(timeOut);
    updateImg();
})

prevEl.addEventListener("click", () =>{
    //decrement the image 
    currentImg--;
    clearTimeout(timeOut);
    updateImg();
})

//call the updateImg function
updateImg();

function updateImg(){
    if(currentImg > imgsEl.length){
        currentImg = 1;
    }else if(currentImg < 1) {
        currentImg = imgsEl.length;    
    }
    imageContainerEl.style.transform = `translateX(-${(currentImg - 1) * 500}px`;
    let timeOut = setTimeout(()=> {
        currentImg++;
        updateImg();
    }, 3000);
};