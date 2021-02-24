const spans = document.querySelectorAll('h1 span')
spans.forEach(span => span.addEventListener('mouseover', function(e) {
    span.classList.add('animates','rubberband')
}))
spans.forEach(span => span.addEventListener('mouseout', function(e) {
    span.classList.add('animates','rubberband')
}))

const htmlbar =document.querySelector('.bar-Html')
const cssbar =document.querySelector('.bar-css')
const reactbar =document.querySelector('.bar-React')

var t1 = new TimelineLite ()

t1.fromTo(htmlbar, 75{width: `calc(0% - 6px)`},{width: `calc(90% - 6px)`, ease: Power4.easeout})
    .fromTo(cssbar, 75{width: `calc(0% - 6px)`},{width: `calc(95% - 6px)`, ease: Power4.easeout})
    .fromTo(reactbar, 75{width: `calc(0% - 6px)`},{width: `calc(75% - 6px)`, ease: Power4.easeout})


const controller = new ScrollMagic.Controller()
const scene = new ScrollMagic.Scene({
    triggerElement: '.skills',
    triggerHook : 0
})
.setTween(t1)
.addTo(controller)


const showRequiredCategory = event => {
    const getId = event.id
    const links = document.querySelectorAll('.work-category button')
    for (i = 0; i<links.length; i++){
        if (links[i].hasAttribute('class')){
            links[i].classList.remove('active')
        }
    }
    event.classList.add('active')
    const getCategory = document.querySelector('.category-${getid}')
    const categories = document.querySelectorAll('div[class ^="category-"]')
    for (i = 0; i<categories.length; i++){
        if (categories[i].hasAttribute('class')){
            categories[i].classList.remove('showCategory')
            categories[i].classList.add('hideCategory')
        }
    }

    getCategory.classList.remove('hideCategory')
    getCategory.classList.add('showCategory')
}
