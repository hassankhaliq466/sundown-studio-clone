
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
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


let selectedH1 = null;

function changeBackgroundColor(clickedH1) {
    // Reset background color for the previously clicked h1
    if (selectedH1 !== null) {
        selectedH1.style.color = `rgba(255, 255, 255, 0.3)`
        selectedH1.querySelector('span').style.backgroundColor = `rgba(255, 255, 255, 0.204)`;
    }

    // Set background color for the clicked h1
    clickedH1.querySelector('span').style.backgroundColor = '#FE330A';
    clickedH1.style.color = 'white'

    // Update the selectedH1 variable
    selectedH1 = clickedH1;
}