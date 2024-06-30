// CSS Magic Collection | Curated by Kanugula Shivashanker | GitHub: @shivas1432
window.onload = init

function init() {
    let items = document.querySelectorAll('.item')
    items.forEach((item) => {
        item.addEventListener('mousemove', e => {
            let mask = item.querySelector('.mask')
            mask.style.transform = 'translate(' + e.offsetX + 'px, ' + e.offsetY + 'px)'
        })
    })
}
