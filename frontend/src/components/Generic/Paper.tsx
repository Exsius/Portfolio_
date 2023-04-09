import { useState, CSSProperties, PropsWithChildren } from "react"
import { useTheme } from "../../Context/Theme"

interface IPaperProps extends PropsWithChildren {
    style?: CSSProperties,
    variant?: string,
    className?: string,
    id?: string,
}


const Paper = (props: IPaperProps) => {

    const { theme } = useTheme()

    const { style, id, className, variant } = props

    return (
        <div style={{ ...(theme.style && theme.style.Paper), backgroundColor: theme.pallete.baseSecondary, border: "solid", borderWidth: '1px', borderColor: theme.pallete.border, padding: "16px 8px", margin: "4px", ...style }}>
            {props.children}
        </div>
    )
}

export default Paper