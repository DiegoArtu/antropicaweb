window.onscroll = () => {
    const docScrollTop = document.documentElement.scrollTop;

    if (window.innerWidth> 991) {
        if (docScrollTop>100) {
            document.querySelector('header').classList.add('fixed');            
        } else {
            document.querySelector('header').classList.remove('fixed');
        }
    }
}


//Ham-burger

const hamburger = document.querySelector('.ham-burger');

hamburger.addEventListener('click', () =>{

    document.querySelector('.navbar').classList.toggle('show')

});

//Active Navbar

const navbar = document.querySelector('.navbar');
const a = navbar.querySelectorAll('a');
const img = navbar.querySelectorAll('img');
console.log(img);

a.forEach(function(element){
    element.addEventListener("click", function(){
        for (let i = 0; i < a.length; i++) {
            a[i].classList.remove('active')
        }
        this.classList.add('active');
        document.querySelector('.navbar').classList.toggle('show')
    })
})

img.forEach(function(element){
    element.addEventListener("click", function(){
        for (let i = 0; i < img.length; i++) {
            img[i].classList.remove('active')
        }
        this.classList.add('active')
    })
})


//Up Button
document.querySelector('.up')
.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})
