const cursorParallax = new CursorParallax()

const $header = document.querySelector('header')
const $title = document.querySelector('.title')

const $main = document.querySelector('main')
const $slide = $main.querySelectorAll('.section')
const $footer = document.querySelector('footer')
const $progressBar = $footer.querySelector('.progress')
const $fillBar = $progressBar.querySelector('.fillBar')

const init = () => {
    let id = null
    for (let i = 0; i < $slide.length; i++) {
        if ($slide[i].classList.contains('active')) {
            id = i
            console.log(id)
        }
    }
    switch (id) {
        case 0:
            $fillBar.style.width = '0%'
            $title.classList.remove('active')
            break;
        case 1:
            $fillBar.style.width = '20%'
            $title.classList.add('active')
            break;
        case 2:
            $fillBar.style.width = '40%'
            $title.classList.add('active')
            break;
        case 3:
            $fillBar.style.width = '100%'
            $title.classList.add('active')
            break;
    }
}
window.setInterval(init, 100)