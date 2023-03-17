import { PropsWithChildren } from "react"
import Footer from "../components/Footer"
import Avatar from "../components/Generic/Avatar"
import Paper from "../components/Generic/Paper"
import Typography from "../components/Generic/Typography"
import Header from "../components/Header"
import SideNav from "../components/SideNav"
import VisitorsBar from "../components/VisitorsBar"
import { useTheme } from "../Context/Theme"

const Layout = (props: PropsWithChildren) => {

    const { theme } = useTheme()

    return (
        <div className="container" style={{ display: "flex", flexDirection: "column" }}>
            <Header />
            <div style={{ display: "flex", height: "528px" }}>
                <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                    <SideNav />
                    <VisitorsBar />
                </div>
                <Paper style={{ flexGrow: 1 }}>
                    <div style={{ display: "flex", justifyContent: "flex-end", paddingRight: "56px" }}>
                        <Avatar />
                    </div>
                    <div>
                        <Typography variant="h1">
                            Hello,
                        </Typography>
                        <Typography variant="h2">
                            Welcome to my Portfolio
                        </Typography>
                        <Typography variant="body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ipsum mi, porttitor ac sem non, rutrum aliquet urna. Nunc non dictum nisi, vel venenatis augue. Nulla rhoncus eros eget pharetra eleifend. Nam rhoncus, ex vitae pretium finibus, libero eros malesuada sapien, nec semper sem nunc quis urna. Phasellus condimentum tortor vitae enim elementum posuere. Nunc nec libero nisi. Nam porta vulputate suscipit. Suspendisse dapibus, elit vel varius consectetur, ipsum dolor lacinia odio, vehicula volutpat mi ligula ut tellus. Cras scelerisque urna vitae augue sollicitudin aliquam. Cras nec egestas turpis. Aliquam eget eros pharetra, pellentesque nisl nec, facilisis lectus. Cras ac orci tincidunt, pretium magna placerat, laoreet sapien. 
                        </Typography>
                    </div>
                </Paper>
            </div>
            <Paper style={{ height: "64px", backgroundColor: theme.pallete.primary }}>

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
                    <Paper style={{ flexGrow: 1 }}></Paper>
                </div>
            </div>
            <Footer />
            <div className="blob1" />
            <div className="blob2" />
            <div className="background" style={{ zIndex: -2, backgroundColor: theme.pallete.base, position: "fixed", top: "0px", left: "0px", width: "100vw", height: "100vh" }} />
        </div>
    )
}

export default Layout