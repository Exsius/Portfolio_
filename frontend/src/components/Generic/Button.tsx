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
            return <button className={className} id={id} style={{ cursor: "pointer", backgroundColor: theme.pallete.primary, color: theme.pallete.base, border: "solid", borderColor: "transparent", borderRadius: theme.style.Button.borderRadius, margin: "2px", padding: "6px", borderWidth: '1px', fontWeight: theme.style.Button.fontWeight, ...style }}>{props.children}</button>
            break
        case "outlined":
            return <button className={className} id={id} style={{ cursor: "pointer", backgroundColor: "transparent", color: theme.pallete.neutral, border: "solid", borderColor: theme.pallete.border, borderRadius: theme.style.Button.borderRadius, margin: "2px", padding: "6px", borderWidth: '1px', fontWeight: theme.style.Button.fontWeight, ...style }}>{props.children}</button>
            break
        case "text":
            return <button className={className} id={id} style={{ cursor: "pointer", backgroundColor: "transparent", color: theme.pallete.primary, border: "solid", borderColor: "transparent", borderRadius: theme.style.Button.borderRadius, margin: "2px", padding: "6px" }}>{props.children}</button>
            break
        default:
            return <button className={className} id={id} style={{ cursor: "pointer", backgroundColor: theme.pallete.primary, color: theme.pallete.base, border: "solid", borderColor: "transparent", borderRadius: theme.style.Button.borderRadius, margin: "2px", padding: "6px", borderWidth: '1px', fontWeight: theme.style.Button.fontWeight, ...style }}>{props.children}</button>
    }
}

export default Button