import Paper from "./Generic/Paper"
import Typography from "./Generic/Typography"

interface IVisitorsProps {
    visitors: {
        all: number,
        today: number,
        curr: number,
    }
}

const VisitorsBar = (props: IVisitorsProps) => {

    const { all, today, curr } = props.visitors

    return (
        <Paper style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography style={{ margin: "0px" }} variant="h3">
                    {all}
                </Typography>
                <Typography variant="subtitle">
                    All time visits
                </Typography>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography style={{ margin: "0px" }} variant="h3">
                    {today}
                </Typography>
                <Typography variant="subtitle">
                    Today's visits
                </Typography>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography style={{ margin: "0px" }} variant="h3">
                    {curr}
                </Typography>
                <Typography variant="subtitle">
                    current visitors
                </Typography>
            </div>
        </Paper>
    )
}

export default VisitorsBar