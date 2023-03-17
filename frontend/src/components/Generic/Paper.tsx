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

    const [paperStyle, setPaperStyle] = useState({ backgroundColor: theme.pallete.base, border: "solid", borderRadius: theme.style.Paper.borderRadius, borderWidth: '1px', borderColor: theme.pallete.border, padding: "16px 8px", margin: "4px" })

    const { style, id, className, variant } = props

    return (
        <div style={{ ...paperStyle, ...style }}>
            {props.children}
        </div>
    )
}

export default Paper