const navMobile = document.querySelector(".nav-mobile");
const navBtn = document.querySelector(".hamburger");
const footerYear = document.querySelector(".footer__year");
const allNavItems = document.querySelectorAll(".nav__link-m")



const handleNav= () => {
    navMobile.classList.toggle("nav-mobile--active")
    
    navBtn.classList.toggle("is-active")

allNavItems.forEach(item =>{
    item.addEventListener("click",()=>{
        navBtn.classList.remove("is-active")
        
    })
})
allNavItems.forEach(item =>{
    item.addEventListener("click",()=>{
        navMobile.classList.remove("nav-mobile--active")
    })
    })
}

navBtn.addEventListener("click", handleNav)

const handleCurrentYear = () => {
	const year = (new Date).getFullYear();
	footerYear.innerText = year;
};
handleCurrentYear();
