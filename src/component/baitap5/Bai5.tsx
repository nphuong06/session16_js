import React, { Component } from "react";

type State = {
    name: string;
    email: string;
    age: string;
    message: string;
    submitted: boolean;
};

export default class UserForm extends Component<object, State> {
    constructor(props: object) {
        super(props);
        this.state = {
            name: "",
            email: "",
            age: "",
            message: "",
            submitted: false,
        };
    }

    handleChange = (e: any) => {
        const { name, value } = e.target;
        this.setState({ [name]: value, submitted: false, message: "" } as Pick<State, keyof State>);
    };

    handleSubmit = (e: any) => {
        e.preventDefault();
        const { name, email, age } = this.state;

        if (!email.includes("@")) {
            this.setState({ message: "Email không hợp lệ", submitted: false });
            return;
        }

        const numAge = Number(age);
        if (isNaN(numAge) || numAge <= 0) {
            this.setState({ message: "Tuổi không được nhỏ hơn hoặc bằng 0", submitted: false });
            return;
        }

        this.setState({ message: "", submitted: true });
    };

    render() {
        const { name, email, age, message, submitted } = this.state;

        return (
            <div
                style={{
                    minHeight: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontFamily: "system-ui, sans-serif",
                }}
            >
                <form
                    onSubmit={this.handleSubmit}
                    style={{
                        background: "#f8fafc",
                        padding: 24,
                        borderRadius: 12,
                        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                        width: 320,
                    }}
                >
                    <h2 style={{ textAlign: "center", marginBottom: 16 }}>Nhập thông tin người dùng</h2>

                    <div style={{ marginBottom: 12 }}>
                        <label>Tên:</label>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={this.handleChange}
                            style={{ width: "100%", padding: 8, borderRadius: 6, border: "1px solid #ccc" }}
                        />
                    </div>

                    <div style={{ marginBottom: 12 }}>
                        <label>Email:</label>
                        <input
                            type="text"
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                            style={{ width: "100%", padding: 8, borderRadius: 6, border: "1px solid #ccc" }}
                        />
                    </div>

                    <div style={{ marginBottom: 12 }}>
                        <label>Tuổi:</label>
                        <input
                            type="number"
                            name="age"
                            value={age}
                            onChange={this.handleChange}
                            style={{ width: "100%", padding: 8, borderRadius: 6, border: "1px solid #ccc" }}
                        />
                    </div>

                    <button
                        type="submit"
                        style={{
                            width: "100%",
                            padding: "10px",
                            border: "none",
                            borderRadius: 6,
                            background: "#0d6efd",
                            color: "#fff",
                            fontWeight: 600,
                            cursor: "pointer",
                        }}
                    >
                        Gửi
                    </button>

                    {message && (
                        <p style={{ color: "red", marginTop: 12, fontWeight: 600, textAlign: "center" }}>
                            {message}
                        </p>
                    )}

                    {submitted && (
                        <div style={{ marginTop: 16 }}>
                            <h3>Thông tin đã nhập:</h3>
                            <p>Tên: {name}</p>
                            <p>Email: {email}</p>
                            <p>Tuổi: {age}</p>
                        </div>
                    )}
                </form>
            </div>
        );
    }
}
