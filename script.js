
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

var mySwiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


let intro = document.querySelector('.intro')
let introh1 = document.querySelector('.intro h1')
let main = document.querySelector('.main')


let flag = 0

function introplay(){

    main.style.display = 'none'

    if (flag === 0) {
        introh1.innerHTML = 'EXPERIENCES'
        flag = 1
        
    }
    else if (flag === 1) {
        introh1.innerHTML = 'CONTENT'
        flag = 2
        
    }
    else if (flag === 2) {
        intro.style.top = '-100%'
        main.style.display = 'block'
        clearInterval(myInterval)
    }
    
    
}

const myInterval = setInterval(() => {
    introplay()
},1000);




let cet = document.querySelector('.cetigory')
let fixed = document.querySelector('.fixed')
let elem = document.querySelectorAll('.cet')



cet.addEventListener('mouseenter',function(){
    fixed.style.display = 'block'
})
cet.addEventListener('mouseleave',function(){
    fixed.style.display = 'none'
})


elem.forEach(element => {
    element.addEventListener('mouseenter',function(){
        var image1 = element.getAttribute('data-image')
        fixed.style.backgroundImage = `url(${image1})`
    })
});


let swipers = document.querySelector('.swiper')
let curser = document.querySelector('.curser')

swipers.addEventListener('mouseenter',function(){
    gsap.to(curser,{
        opacity: 1,
        scale: 1
    })
})

swipers.addEventListener('mouseleave',function(){
    gsap.to(curser,{
        opacity: 0,
        scale: 0
    })
})

swipers.addEventListener('mousemove',function(e){
    gsap.to(curser,{
        x: e.pageX - mySwiper.translate - 50,
        y: e.pageY - 420,
        duration: 0.3,
        ease: 'power2.out',
    })
})

console.log('hello');