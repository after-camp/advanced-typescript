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

function color(c: ColorType){

}

color(Color.Red)
