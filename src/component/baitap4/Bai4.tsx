import React, { Component } from "react";

type State = {
    count: number;
};

export default class ClickCounter extends Component<object, State> {
    constructor(props: object) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    handleClick = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }));
    };

    render() {
        return (
            <div
                style={{
                    minHeight: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    fontFamily: "system-ui, sans-serif",
                }}
            >
                <h2>Bạn đã Click {this.state.count} lần</h2>
                <button
                    onClick={this.handleClick}
                    style={{
                        padding: "10px 20px",
                        borderRadius: 6,
                        border: "none",
                        background: "#0d6efd",
                        color: "#fff",
                        fontWeight: 600,
                        cursor: "pointer",
                    }}
                >
                    Click me
                </button>
            </div>
        );
    }
}