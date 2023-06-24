import {theme} from "./Theme";

type FontPropsType = {
    family?: string
    weight?: number
    color?: string
    lineHeight?: number
    Fmin?: number
    Fmax?: number
    letterSpacing?:string
    textTransform?:string
}
export const font = ({family, weight, color, lineHeight, Fmax, Fmin,letterSpacing,textTransform}: FontPropsType) => `

font-family:${family || 'Epilogue'};
font-weight: ${weight || 400};
color:${color || theme.colors.font};
line-height:${lineHeight || 1.2};
letter-spacing:${letterSpacing};
text-transform:${textTransform};
font-size: calc( (100vw - 360px)/(1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`