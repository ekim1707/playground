import React from 'react';
import "./styles.scss";
import content from "./content";

export default () => 
    <section className="homepageContainer">
        <div className="rainbow rainbow_text_animated">{content.DESCRIPTION}</div>
    </section>;