const grid = document.querySelector('.grid')
const gridItems = [...document.querySelectorAll('.grid-item')]
const gridRows = [...document.querySelectorAll('.row')]
const images = [...document.querySelectorAll('.img')]
const heading = document.querySelector('.heading')

images.forEach((img, index) => {
    img.style.backgroundImage = `url(./images/${index + 1}.jpeg)`
})

gridItems.forEach((item, index) => {
    item.addEventListener('click', (e) => {
        let isActive = e.target.classList.contains('active')

        for (let i = 0; i < gridItems.length; i++) {
            gridItems[i].classList.remove('active')
        }

        if (isActive) {
            gridRows[0].style.height = '50%'
            gridRows[1].style.height = '50%'
            for (let i = 0; i < gridItems.length; i++) {
                gridItems[i].classList.remove('expand')
            }
            return
        }

        gridItems[index].classList.add('active')

        if (index === 0 || index === 3) {
            setActive([0,3])
        }

        if (index === 1 || index === 4) {
            setActive([1,4])
        }

        if (index === 2 || index === 5) {
            setActive([2,5])
        }

        if (index <= 2) {
            gridRows[0].style.height = '70%'
            gridRows[1].style.height = '30%'
        } else {
            gridRows[0].style.height = '30%'
            gridRows[1].style.height = '70%'
        }
    })
})

function setActive(indexArr) {
    for (let i = 0; i < gridItems.length; i++) {
        if (indexArr.includes(i)) {
            gridItems[i].classList.add('expand')
        } else {
            gridItems[i].classList.remove('expand')
        }
    }
}

setTimeout(() => {
    heading.classList.add('show')
}, 1000)

setTimeout(() => {
    grid.style.opacity = 1
}, 1000)