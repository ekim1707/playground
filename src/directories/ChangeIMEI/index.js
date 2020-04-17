import React, { Component } from 'react';
import "./styles.scss";
import content from "./content";
import { Tabs } from 'antd';

const { TabPane } = Tabs;

class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();

    }
    state = {
        activeTab: ""
    }

    handleClick = (ref) => {
        console.log(this.myRef);
    }

    render() {
        return (
            <div className="container">
                <Tabs ref={this.myRef}>
                    {content.map((CONTENT, i) => {
                        return (
                            <TabPane tab={`Tab ${i + 1}`} key={i + 1} forceRender={true}>
                                {CONTENT}
                                <button onClick={() => this.handleClick(this.myRef)}>Click</button>
                            </TabPane>
                        );
                    })}
                </Tabs>
            </div>
        );
    }
};

export default MyComponent;