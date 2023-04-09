import { PropsWithChildren, useState } from "react"
import ChatRoom from "../components/ChatRoom"
import Footer from "../components/Footer"
import Avatar from "../components/Generic/Avatar"
import Paper from "../components/Generic/Paper"
import Typography from "../components/Generic/Typography"
import Header from "../components/Header"
import MusicPlayer from "../components/MusicPlayer"
import SideNav from "../components/SideNav"
import VisitorsBar from "../components/VisitorsBar"
import { useTheme } from "../Context/Theme"

const Layout = (props: PropsWithChildren) => {

    const { theme } = useTheme()

    const [online, setOnline] = useState<boolean>(false)
    const [music, setMusic] = useState({
        status: "offline",
        position: "30",
        length: "60",
        name: "Song Title"
    })
    const [visitors, setVisitors] = useState({
        all: 0,
        today: 0,
        curr: 0,
    })

    return (
        <div className="container" style={{ display: "flex", flexDirection: "column" }}>
            <Header />
            <div style={{ display: "flex", height: "528px" }}>
                <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                    <SideNav />
                    <VisitorsBar visitors={visitors} />
                </div>
                <Paper style={{ flexGrow: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", paddingRight: "56px" }}>
                        <div>
                            <Typography variant="h1">
                                Hello,
                            </Typography>
                            <Typography style={{ marginBottom: "0px" }} variant="h2">
                                Welcome to my Portfolio
                            </Typography>
                        </div>
                        <Avatar />
                    </div>
                    <div>
                        <Typography variant="body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ipsum mi, porttitor ac sem non, rutrum aliquet urna. Nunc non dictum nisi, vel venenatis augue. Nulla rhoncus eros eget pharetra eleifend. Nam rhoncus, ex vitae pretium finibus, libero eros malesuada sapien, nec semper sem nunc quis urna. Phasellus condimentum tortor vitae enim elementum posuere. Nunc nec libero nisi. Nam porta vulputate suscipit. Suspendisse dapibus, elit vel varius consectetur, ipsum dolor lacinia odio, vehicula volutpat mi ligula ut tellus. Cras scelerisque urna vitae augue sollicitudin aliquam. Cras nec egestas turpis. Aliquam eget eros pharetra, pellentesque nisl nec, facilisis lectus. Cras ac orci tincidunt, pretium magna placerat, laoreet sapien. 
                        </Typography>
                    </div>
                </Paper>
            </div>
            <Paper style={{ display: "flex", justifyContent: "space-between", height: "64px", backgroundColor: theme.pallete.primary }}>
                <Typography variant="h3" style={{ color: online ? undefined : theme.pallete.border }}>
                    {online ? "Currently Online." : "Currently offline."}
                </Typography>
                <MusicPlayer music={music} />
            </Paper>
            <Paper style={{ height: "640px" }}>
                <Typography variant="h1" style={{ textDecoration: "underline" }}>
                    Projects:
                </Typography>
            </Paper>
            <div style={{ display: "flex" }}>
                <Paper style={{ flexGrow: 1 }}>
                    <Typography variant="h1" style={{ textDecoration: "underline", height: "640px" }}>
                        Blog:
                    </Typography>
                </Paper>
                <div style={{ display: "flex", flexDirection: "column", width: "274px", height: "100%" }}>
                    <Paper style={{ height: "266px", backgroundColor: theme.pallete.primary }}></Paper>
                    <Paper style={{ flexGrow: 1 }}>
                        <ChatRoom />
                    </Paper>
                </div>
            </div>
            <Footer />
            <div className="blob1" style={{ backgroundImage: `url("data:image/svg+xml;utf8,%3Csvg width=%22646%22 height=%22660.371%22 viewBox=%22219.037 188.521 646 660.371%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3CclipPath id=%22a%22%3E%3Cpath fill=%22currentColor%22 d=%22M800 650Q673 800 476 841.5t-240-150Q193 500 259 349t246-160q180-9 301 151t-6 310Z%22%2F%3E%3C%2FclipPath%3E%3Cpattern id=%22b%22 patternUnits=%22userSpaceOnUse%22 width=%2225%22 height=%2225%22 viewBox=%220 0 100 100%22 fill=%22${encodeURIComponent(theme.pallete.neutral)}%22%3E%3Ccircle cx=%2250%22 cy=%2250%22 r=%2212.5%22%2F%3E%3C%2Fpattern%3E%3C%2Fdefs%3E%3Cg clip-path=%22url(%23a)%22%3E%3Cpath fill=%22url(%23b)%22 d=%22M800 650Q673 800 476 841.5t-240-150Q193 500 259 349t246-160q180-9 301 151t-6 310Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E")` }} />
            <div className="blob2" style={{ backgroundImage: `url("data:image/svg+xml;utf8,%3Csvg width=%22754.904%22 height=%22711.015%22 viewBox=%22109.847 119.092 754.904 711.015%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3CclipPath id=%22a%22%3E%3Cpath fill=%22currentColor%22 d=%22M818 612.5Q725 725 612.5 768T327 828.5Q154 846 125 673t-2.5-348.5q26.5-175.5 202-200t289 62Q727 273 819 386.5t-1 226Z%22%2F%3E%3C%2FclipPath%3E%3Cpattern id=%22b%22 patternUnits=%22userSpaceOnUse%22 width=%2225%22 height=%2225%22 viewBox=%220 0 100 100%22 fill=%22${encodeURIComponent(theme.pallete.neutral)}%22%3E%3Ccircle cx=%2250%22 cy=%2250%22 r=%2212.5%22%2F%3E%3C%2Fpattern%3E%3C%2Fdefs%3E%3Cg clip-path=%22url(%23a)%22%3E%3Cpath fill=%22url(%23b)%22 d=%22M818 612.5Q725 725 612.5 768T327 828.5Q154 846 125 673t-2.5-348.5q26.5-175.5 202-200t289 62Q727 273 819 386.5t-1 226Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E")` }} />
            <div className="background" style={{ transitionProperty: "all", transitionDuration: "300ms", zIndex: -2, backgroundColor: theme.pallete.base, position: "fixed", top: "0px", left: "0px", width: "100vw", height: "100vh" }} />
        </div>
    )
}

export default Layout