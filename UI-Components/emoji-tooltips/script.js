// CSS Magic Collection | Curated by Kanugula Shivashanker | GitHub: @shivas1432
const $ = (className) => document.getElementsByClassName(className)[0]
const EVENTS = ['mouseover', 'mouseout']
const DIRECTIONS = ['top', 'bottom', 'left', 'right']

DIRECTIONS.forEach(direction => 
    EVENTS.forEach((e) => 
        $(`tip ${direction}`).addEventListener(e, () =>
            $('emoji').classList.toggle(direction)
        )
    )
)
