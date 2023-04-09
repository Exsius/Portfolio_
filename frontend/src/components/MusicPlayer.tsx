import { useTheme } from "../Context/Theme"
import Typography from "./Generic/Typography"

interface IMusicProps {
    music: {
        status: string,
        position: string,
        length: string,
        name: string,
        art?: string,
    }
}

const MusicPlayer = (props: IMusicProps) => {

    const { status, position, length, name, art } = props.music
    
    const { theme } = useTheme()

    return (
        <div style={{ display: "flex", alignItems: "flex-end" }}>
            <div style={{ borderRadius: "100%", width: "72px", height: "72px", backgroundColor: theme.pallete.buttonNeutral, backgroundImage: art }} />
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <div style={{ paddingLeft: "4px" }}>
                    <Typography variant="subtitle" style={{ color: theme.pallete.buttonNeutral }}>
                        {status === "online" ? "Currently listening to:" : "Last listened to:"}
                    </Typography>
                    <Typography style={{ color: theme.pallete.buttonNeutral }}>
                        {name}
                    </Typography>
                </div>
                <input style={{ background: `linear-gradient(90deg, ${theme.pallete.neutral} 0% ${50}%, ${theme.pallete.border} ${50}% 100%)` }} id="music_player" type="range" min="1" max="100" value="50" />
            </div>
        </div>
    )
}

export default MusicPlayer