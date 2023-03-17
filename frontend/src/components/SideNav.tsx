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

const SideNav = () => (
    <Paper style={{ display: "flex", flexDirection: "column" }}>
        {links.map((link) => (
            <div>
                <Button variant="outlined">
                    {link.name}
                </Button>
            </div>
        ))}
    </Paper>
)

export default SideNav