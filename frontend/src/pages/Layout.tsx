import { PropsWithChildren } from "react"
import Header from "../components/Header"
import SideNav from "../components/SideNav"

const Layout = (props: PropsWithChildren) => {
    return (
        <div className="container" style={{ backgroundColor: "green" }}>
            <Header />
            <SideNav />
        </div>
    )
}

export default Layout