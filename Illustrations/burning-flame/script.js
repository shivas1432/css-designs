// CSS Magic Collection | Curated by Kanugula Shivashanker | GitHub: @shivas1432
const COUNT_OF_PARTICLES = 100
const container = document.querySelector('.flame')

container.style.setProperty('--particles', COUNT_OF_PARTICLES)

Array(COUNT_OF_PARTICLES).fill('').forEach((particle, i) => {
    let span = document.createElement('span')
    span.style.setProperty('--n', i + 1)
    span.style.setProperty('--rnd', Math.random())
    container.appendChild(span)
})
