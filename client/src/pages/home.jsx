import React from "react";
import NavBar from "../components/NavBar";

function Home() {

    return (
        <>
        <NavBar/>
        <div className="flex justify-center items-center h-[500px]">
            <h1 className="font-bold text-3xl text-cyan-800">Welcome to ACODEZ IT SOLUTIONS</h1>
        </div>
        </>
    )
}

export default Home