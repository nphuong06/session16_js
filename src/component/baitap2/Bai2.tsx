import React, { Component } from "react";

type State = {
    isLoggedIn: boolean;
};

export default class LoginStatus extends Component<object, State> {
    constructor(props: object) {
        super(props);
        this.state = {
            isLoggedIn: false,
        };
    }

    toggleLogin = () => {
        this.setState({
            isLoggedIn: !this.state.isLoggedIn
        });
    };

    render() {
        const { isLoggedIn } = this.state;

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
                <h2>
                    {isLoggedIn ? "Xin chào, User" : "Vui lòng đăng nhập để tiếp tục"}
                </h2>
                <button
                    onClick={this.toggleLogin}
                    style={{
                        padding: "10px 20px",
                        borderRadius: 8,
                        border: "none",
                        cursor: "pointer",
                        background: isLoggedIn ? "#ef4444" : "#3b82f6",
                        color: "#fff",
                        fontWeight: 600,
                    }}
                >
                    {isLoggedIn ? "Đăng xuất" : "Đăng nhập"}
                </button>
            </div>
        );
    }
}