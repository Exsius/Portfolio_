import { useEffect, useState } from "react"
import { useTheme } from "../Context/Theme"
import Typography from "./Generic/Typography"

const Header = () => {

    const themes = [
        {
            pallete: {
                primary: "#ffddba",
                secondary: "white",
                base: "#f8efe8",
                baseSecondary: "#fffbff",
                neutral: "#4f453b",
                buttonNeutral: "#4f453b",
                border: "#bab3ad",
            }
        },
        {
            pallete: {
                primary: "#ffddba",
                secondary: "white",
                base: "#000000",
                baseSecondary: "#352f2a",
                neutral: "#fff",
                buttonNeutral: "#000000",
                border: "#47443f",
            }
        },
        {
            pallete: {
                primary: "#6699CC",
                secondary: "white",
                base: "white",
                baseSecondary: "white",
                neutral: "#212121",
                buttonNeutral: "white",
                border: "#e5e7eb",
            }
        },
        {
            pallete: {
                primary: "#bf360c",
                secondary: "white",
                base: "#121212",
                baseSecondary: "#121212",
                neutral: "#fff",
                buttonNeutral: "#fff",
                border: "#2f2f2f",
            }
        },
    ]

    const { theme, setTheme } = useTheme()

    const [activeTheme, setActiveTheme] = useState<number | null>()
    const [themeNotif, setThemeNotif] = useState<boolean>(true)

    useEffect(() => {
        setTheme(themes[activeTheme ?? 0])
    },[activeTheme])

    return(
        <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "48px" }}>
            <Typography style={{ margin: "8px" }} variant="h1">
                Christopher Pravlik.
            </Typography>
            <div style={{ display: "flex", gap: "8px", alignItems: "center", paddingBottom: "8px" }}>
                {themes.map((th, index) => (
                    <div onClick={() => {setActiveTheme(index); index !== 0 && themeNotif && setThemeNotif(false)}} style={{ animation: themeNotif ? `bounce 4s infinite ${index}00ms` : undefined, WebkitAnimation: themeNotif ? `bounce 4s infinite ${index}00ms` : undefined, cursor: "pointer", display: "flex", justifyContent: "center", alignItems: "center", height: "24px", width: "24px", borderRadius: "100%", borderWidth: "2px", backgroundColor: th.pallete.primary, border: "solid", borderColor: theme.pallete.neutral }}>
                        <div style={{ height: "8px", width: "8px", borderRadius: "100%", backgroundColor: th.pallete.base }} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Header