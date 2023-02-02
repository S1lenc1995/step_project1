const tabs = [...document.querySelectorAll('.tabs-title')];
console.log(tabs)
        const tabsContent = document.querySelectorAll('.tabs-content li');
        console.log(tabsContent)
        tabs.forEach((elem) => elem.addEventListener("click", toggle))
        function toggle(e){
            e.target.closest('ul').querySelector('.tabs-title-click').classList.remove('tabs-title-click');
            e.target.classList.add('tabs-title-click')
            const index = tabs.findIndex(elem => elem.classList.contains("tabs-title-click"));
            showText(index)
        }
        function showText(index) {
            console.log(index);
            tabsContent.forEach(elem => elem.classList.add("hidden"));
            tabsContent[index].classList.remove("hidden");
        }

   
        






        function showOnClick (){
          let a = document.querySelector('.work-list-active').id
          console.log(a)
          showPhoto(a)
        }


function show(){
let workList = document.querySelector('.work-list')
console.log(workList)
workList.addEventListener('click', (elem)=>{
  if(elem.target == workList){
    return
  }
    let chapter = elem.target.id
    elem.target.closest('ul').querySelector('.work-list-active').classList.remove('work-list-active');
    elem.target.classList.add('work-list-active');
    showPhoto(chapter)
})

 
}



show()

function showPhoto(chapter){
  console.log(chapter)
  for(let picture of photosList){
    if(picture.getAttribute("data-name") !==  chapter){
      picture.style.display='none'
    }
    if(picture.getAttribute("data-name") ==  chapter && !picture.classList.contains('second-photo-list-hidden') && !picture.classList.contains('third-photo-list-hidden') ){
    picture.style.display='block'
    }
    if(chapter == 'All' && !picture.classList.contains('second-photo-list-hidden') && !picture.classList.contains('third-photo-list-hidden') ){
      picture.style.display='block'
    }
  }
}




let counter = 0;
let firstButtonLoad = document.querySelector('#first-button-load')
let photosList = document.querySelectorAll('.first-grid li');
console.log(photosList)
let load = document.querySelector('.lds-roller')
firstButtonLoad.addEventListener('click', ()=>{
  if(counter==0){
    load.classList.remove('load-hiden')
  setTimeout(()=>{let secondPhotoList = document.querySelectorAll('.second-photo-list-hidden');
  for(let picture of secondPhotoList){
    picture.classList.remove("second-photo-list-hidden"); 
  }
  showOnClick ()
  load.classList.add('load-hiden')
  counter++ },2000)
}
if(counter==1){
  
  load.classList.remove('load-hiden')
  firstButtonLoad.style.display='none'
  setTimeout(()=>{
    let thirdPhotoList = document.querySelectorAll('.third-photo-list-hidden');
    for(let thirdPicture of thirdPhotoList){
      thirdPicture.classList.remove("third-photo-list-hidden"); 
    }
    showOnClick ()
    load.classList.add('load-hiden')
    },2000)
  
}
}) 


























let slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
    showSlides(slideIndex += 1);
}

function minusSlide() {
    showSlides(slideIndex -= 1);  
}

let roundabout = document.querySelectorAll('.roundabout li img')
let listRoundabout = document.querySelector('.roundabout')


function currentSlide(n) {
    showSlides(slideIndex = n);
    listRoundabout.addEventListener('click',(elem)=>{
    console.log(elem)
    })
}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("item");
    let dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    let flyPhoto =document.querySelectorAll('.fly')
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    flyPhoto.forEach((elem)=>{
      if(elem.getAttribute("data-slide") == slideIndex ){
        elem.style.marginBottom = '30px'
      }
      else if(elem.getAttribute("data-slide") !== slideIndex ){
        elem.style.marginBottom = '0px'
      }
 
    })
}


  
  








