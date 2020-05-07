import React, { Component } from 'react';
import "./styles.scss";
import FirstChild from "./components/FirstChild";
import SecondChild from "./components/SecondChild";

export default class PracticeWithClass extends Component {
    state = {
        visible: 0
    };
    render() {
        window[`class-practice--first`] = () => {
            this.setState({
                visible: 0
            });
        }
        window[`class-practice-second`] = () => {
            this.setState({
                visible: 1
            })
        }
        console.log(this.state.visible);
        let visibleChild = this.state.visible === 0 ? <FirstChild /> : <SecondChild />;
        return (
            <div className="practiceWithClassContainer">
                {visibleChild}
            </div>
        )
    }
};