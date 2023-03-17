import { PropsWithChildren, createContext, useContext, useState, Dispatch, SetStateAction } from "react"

interface IValue {
    theme: ITheme,
    setTheme: Dispatch<SetStateAction<ITheme>>
}

interface ITheme {
    pallete: {
        primary: string,
        secondary: string,
        base: string,
        neutral: string,
        border: string,
    },
    style: {
        Paper: {
            borderRadius: string,
        },
        Button: {
            borderRadius: string,
            fontWeight: string,
        },
    }
}

const defaultTheme = {
    theme: {
        pallete: {
            primary: "#6699CC",
            secondary: "white",
            base: "white",
            neutral: "black",
            border: "#e5e7eb",
        },
        style: {
            Paper: {
                borderRadius: "8px",
            },
            Button: {
                borderRadius: "6px",
                fontWeight: "600",
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

    const [theme, setTheme] = useState<ITheme>(defaultTheme.theme)

    return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
        {props.children}
    </ThemeContext.Provider>
    )
}

export default ThemeProvider