import { CSSProperties, PropsWithChildren, useEffect, useState } from "react"
import { useTheme } from "../../Context/Theme"

interface IButtonProps extends PropsWithChildren {
    style?: CSSProperties,
    variant?: string,
    className?: string,
    id?: string,
}

const Button = (props: IButtonProps) => {

    const { theme } = useTheme()

    const { style, id, className, variant } = props

    switch(variant) {
        case "contained":
            return <button className={className} id={id} style={{ backgroundColor: theme.pallete.primary, color: theme.pallete.buttonNeutral, borderColor: "transparent", ...(theme.style && theme.style.Button), ...style }}>{props.children}</button>
            break
        case "outlined":
            return <button className={className} id={id} style={{ backgroundColor: "transparent", color: theme.pallete.neutral, borderColor: theme.pallete.border, ...(theme.style && theme.style.Button), ...style }}>{props.children}</button>
            break
        case "text":
            return <button className={className} id={id} style={{ backgroundColor: "transparent", color: theme.pallete.neutral, borderColor: "transparent", ...(theme.style && theme.style.Button), ...style }}>{props.children}</button>
            break
        default:
            return <button className={className} id={id} style={{ backgroundColor: theme.pallete.primary, color: theme.pallete.buttonNeutral, borderColor: "transparent", ...(theme.style && theme.style.Button), ...style }}>{props.children}</button>
    }
}

export default Button