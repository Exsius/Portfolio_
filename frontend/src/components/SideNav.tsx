import { useTheme } from "../Context/Theme"
import Button from "./Generic/Button"
import Paper from "./Generic/Paper"

const links = [
    {
        name: "Home",
        link: "/",
    },
    {
        name: "About",
        link: "/about",
    },
    {
        name: "Projects",
        link: "/projects",
    },
]

const SideNav = () => {

    const { theme } = useTheme()

    return (
        <Paper style={{ width: "256px", display: "flex", flexGrow: 1, flexDirection: "column" }}>
            {links.map((link) => (
                <div>
                    <Button variant="contained">
                        {link.name}
                    </Button>
                    <Button variant="outlined">
                        {link.name}
                    </Button>
                    <Button variant="text">
                        {link.name}
                    </Button>
                    <Button>
                        {link.name}
                    </Button>
                </div>
            ))}
        </Paper>
    )
}

export default SideNav