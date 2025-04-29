import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/button";
import Logo from "../Logo/Logo";
import Search from '../SearchBox/searchbox';
import styles from "./Navbar.module.css";

export default function Navbar ({ searchData }){
    return(
        <>
        <nav className={styles.navbar}>
            <Logo />
            <Search 
            placeholder="Search a song of your choice"
            searchData={searchData} />
            <Button>Give Feedback</Button>
        </nav>
        </>
    )
}