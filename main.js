// change navbar style on scroll
window.addEventListener('scroll',() =>{
    document.querySelector('nav').classList.toggle('window-scroll',window,scrollY > 0)
})
// hide container
const faqs =document.querySelectorAll('.faq');
faqs.forEach(faq =>{
    faq.addEventListener('click',()=>{
       faq.classList.toggle ('open');
       const icon = faq.querySelector('.faq_icon i');
       if(icon.className ==='fa-solid fa-plus'){
           icon.className="fa-solid fa-minus"
       }
       else{
           icon.className ="fa-solid fa-plus"
       }
      
    })
})

// nav manu 
const menu = document.querySelector(".nav_manu");
const menuBtn = document.querySelector("#opan_manu_btn");
const closeBtn = document.querySelector("#close_manu_btn");


menuBtn.addEventListener('click', () => {
    menu.style.display="flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display ="none";
})

// close nav manu 
const closenav = () =>{
    menu.style.display="none";
    closeBtn.style.display = "none";
    menuBtn.style.display ="inline-block";
}

closeBtn.addEventListener('click',closenav)