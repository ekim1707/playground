import React from 'react';
import "./styles.scss";
import content from "./content";
import Button from "../../common/Button";
import { NavLink } from "react-router-dom";

export default ({
    navIsOpen,
    setNavIsOpen
}) => {
    const linkArray = content.map((LINK, i) => <NavLink to={LINK === "home" ? "/" : `/${LINK}`} key={i}>{LINK}</NavLink>);
    return (
        <section className="navContainer" style={navIsOpen ? {} : { height: "20px" }}>
            <Button 
                onClick={() => setNavIsOpen(!navIsOpen)}
                className="navButton"
                buttonText={navIsOpen ? "MINIMIZE" : "EXPAND"}
            />
            {linkArray}
        </section>
    );
};