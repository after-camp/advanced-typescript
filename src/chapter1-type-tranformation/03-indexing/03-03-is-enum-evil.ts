const Color = {
    Red:'Red',
    Green: 'Blue',
    Blue: 'Green'
} as const

enum ColorEnum {
    Red = 'Red',
    Green = 'Green',
    Blue = 'Blue'
}

type ColorType = keyof typeof Color

function color(c: ColorType) {

}

function uppercase(str: string) {

}
function enumColor(c: ColorEnum){
    uppercase(c)
}

color("Red")
enumColor(ColorEnum.Green)

