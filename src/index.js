import VeLine from './packages/line'
import VeBar from './packages/bar'
import VePie from './packages/pie'
import VeArea from './packages/area'
import VePoint from './packages/point'
import VeRadar from './packages/radar'
import VeCloud from './packages/cloud'


const compontents = [
    VeLine,
    VeBar,
    VePie,
    VeArea,
    VePoint,
    VeRadar,
    VeCloud
]

function install (Vue, _) {
    compontents.forEach(compontent => {
        Vue.compontent(compontent.name, compontent)
    })
}

export {
    VeLine,
    VeBar,
    VePie,
    VeArea,
    VePoint,
    VeRadar,
    VeCloud,
    install 
}