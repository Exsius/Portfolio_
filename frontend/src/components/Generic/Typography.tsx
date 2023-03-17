import { useState, CSSProperties, PropsWithChildren } from "react"
import { useTheme } from "../../Context/Theme"

interface ITypographyProps extends PropsWithChildren {
    style?: CSSProperties,
    variant?: string,
    className?: string,
    id?: string,
}

const Typography = (props: ITypographyProps) => {

    const { theme } = useTheme()

    const { style, id, className, variant } = props

    switch(variant) {
        case "h1":
            return (<h1 style={{}}>{props.children}</h1>)
            break
        case "h2":
            return (<h2 style={{}}>{props.children}</h2>)
            break
        case "h3":
            return (<h3 style={{}}>{props.children}</h3>)
            break
        case "body":
            return (<p style={{}}>{props.children}</p>)
            break
        case "body":
            return (<p style={{}}>{props.children}</p>)
            break
        default:
            return (<p style={{}}>{props.children}</p>)
    }

}

export default Typography