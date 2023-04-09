import { useTheme } from "../Context/Theme"
import Button from "./Generic/Button"
import Paper from "./Generic/Paper"
import Typography from "./Generic/Typography"

const ChatRoom = () => {

    const { theme } = useTheme()

    return (
        <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
            <Typography style={{ margin: "0px" }} variant="h2">
                Chat
            </Typography>
            <Paper style={{ flexGrow: 1, margin: "0px" }}>

            </Paper>
            <div>
                <input placeholder="enter message" style={{ padding: "4px 0px 4px 12px", backgroundColor: theme.pallete.border, color: theme.pallete.neutral, borderRadius: "64px", borderStyle: "none" }} />
                <Button variant="text">send</Button>
            </div>
        </div>
    )
}

export default ChatRoom