const navbar=document.querySelector('.navbar')
const headerContent=document.querySelector('.header-content .visa')
const loading=document.querySelector('.loading')

const scrolltopbuttn=document.querySelector('.scroll-top')
const numbers=document.querySelector('.numbers')

window.addEventListener('scroll',function(){
   
    if(window.scrollY>headerContent.offsetTop){
        navbar.style.backgroundColor=" #4e4e4e7a"
    }
  else{
    navbar.style.backgroundColor="transparent"
  }
  if(window.scrollY>numbers.offsetTop){
    scrolltopbuttn.classList.remove('opacity-0','invisible')
  }else{
    scrolltopbuttn.classList.add('opacity-0','invisible') 
  }
})
window.addEventListener('load', function(){
this.setTimeout(function(){
loading.classList.add('opacity-0','invisible')
document.body.style.overflow='auto'
},2000)
})
scrolltopbuttn.addEventListener('click',function(){
    window.scroll({
        top:0,
        behavior:"smooth"
    })
})