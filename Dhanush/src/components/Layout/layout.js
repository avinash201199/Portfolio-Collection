import { PropaneSharp } from "@mui/icons-material";
import { Fragment } from "react";
import NavBar from "../header/header";
import Bottom from "../Bottom/bottom";
const Layout=(props)=>{
    return (
        <Fragment>
            <NavBar />
            
            <main>{props.children}</main>
            {/* <Bottom /> */}
        </Fragment>

    )
}

export default Layout;