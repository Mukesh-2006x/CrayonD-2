import { Container } from "@mui/material"
import { NavBar } from "./navbar"
import { Outlet } from "react-router-dom"

export const Layout=()=>{
    return(
        <>
            <NavBar/>
            <Container>
                <Outlet/>
            </Container>
        </>
    )
}