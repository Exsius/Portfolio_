import { PropsWithChildren, createContext, useContext, useState, Dispatch, SetStateAction } from "react"

interface IValue {
    theme: ITheme,
    setTheme: (newTheme: ITheme) => void
}

interface ITheme {
    pallete: {
        primary: string,
        secondary: string,
        base: string,
        baseSecondary: string,
        neutral: string,
        buttonNeutral: string,
        border: string,
    },
    style?: {
        Paper: {
            borderRadius: string,
        },
        Button: {
            borderRadius: string,
            fontWeight: string,
            cursor: string,
            margin: string,
            padding: string,
            borderWidth: string,
            borderStyle: string,
        },
    }
}

const defaultTheme = {
    theme: {
        pallete: {
            primary: "#ffddba",
            secondary: "white",
            base: "#f8efe8",
            baseSecondary: "#fffbff",
            neutral: "#4f453b",
            buttonNeutral: "#4f453b",
            border: "#bab3ad",
        },
        style: {
            Paper: {
                transitionProperty: "all",
                transitionDuration: "300ms",
                transistion: "0.3s",
                borderRadius: "8px",
            },
            Button: {
                transitionProperty: "all",
                transitionDuration: "300ms",
                borderRadius: "6px",
                fontWeight: "600",
                cursor: "pointer",
                margin: "2px",
                padding: "6px",
                borderWidth: "1px",
                borderStyle: "solid",
            },
        }
    },
    //bruh.
    setTheme: () => {}
}

const ThemeContext = createContext<IValue>(defaultTheme)

export const useTheme = () => (
    useContext(ThemeContext)
)

const ThemeProvider = (props: PropsWithChildren) => {

    const [theme, setThemeInternal] = useState<ITheme>(defaultTheme.theme)

    const setTheme = (newTheme: ITheme) => {
        setThemeInternal({...theme, ...newTheme})
    }

    return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
        {props.children}
    </ThemeContext.Provider>
    )
}

export default ThemeProvider