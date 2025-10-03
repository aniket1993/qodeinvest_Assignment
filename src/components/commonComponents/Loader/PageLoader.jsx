'use client'
import { Box, styled } from "@mui/material";
// import { useSelector } from "react-redux";


const LoaderDiv = styled(Box)(({ theme }) => ({
    width: '100%',
    height: '100%',
    zIndex: '9999',
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    // -webkit-transform: 'translate(-50%, -50%);
    //transform: "translate(-50%, -50%)",
    // backgroundColor: "#ffffff80",
    backgroundColor: "#11111180",
}));

const LoaderRing = styled(Box)(({ theme }) => ({
    background: `url(${"/assets/img/loader_img.gif"}) no-repeat center center`,
    width: "80px",
    height: "80px",
    position: "absolute",
    top: "50%",
    left: "50%",
    // -webkit-transform: translate(-50%, -50%);
    transform: "translate(-50%, -50%)",
    backgroundSize: "100%",
}));

export default function PageLoader() {

    const showLoader = false;
    // console.log("showLoader", showLoader);
    // Or a custom loading skeleton component
    return showLoader && <LoaderDiv>
        <LoaderRing />
    </LoaderDiv>
}