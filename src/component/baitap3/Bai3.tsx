import React, { Component } from "react";

type Props = {
    label: string;
    type: "primary" | "secondary" | "success" | "warning" | "danger" | "info" | "light" | "dark" | "link";
    onClick?: () => void;
};

export default class Button extends Component<Props> {
    getStyle = () => {
        const baseStyle: React.CSSProperties = {
            fontFamily: "system-ui, sans-serif",
            padding: "10px 20px",
            margin: "6px",
            border: "none",
            borderRadius: 6,
            fontWeight: 600,
            cursor: "pointer",
            transition: "0.2s",
        };

        const variants: Record<string, React.CSSProperties> = {
            primary: { backgroundColor: "#0d6efd", color: "#fff" },
            secondary: { backgroundColor: "#6c757d", color: "#fff" },
            success: { backgroundColor: "#198754", color: "#fff" },
            warning: { backgroundColor: "#ffc107", color: "#000" },
            danger: { backgroundColor: "#dc3545", color: "#fff" },
            info: { backgroundColor: "#0dcaf0", color: "#000" },
            light: { backgroundColor: "#f8f9fa", color: "#000", border: "1px solid #ccc" },
            dark: { backgroundColor: "#212529", color: "#fff" },
            link: {
                background: "none",
                color: "#0d6efd",
                textDecoration: "underline",
                padding: 0,
            },
        };

        return { ...baseStyle, ...variants[this.props.type] };
    };

    render() {
        const { label, onClick } = this.props;

        return (
            <button style={this.getStyle()} onClick={onClick}>
                {label}
            </button>
        );
    }
}

export class App extends Component {
    render() {
        return (
            <div style={{ padding: 20 }}>
                <Button label="Primary" type="primary" />
                <Button label="Secondary" type="secondary" />
                <Button label="Success" type="success" />
                <Button label="Warning" type="warning" />
                <Button label="Danger" type="danger" />
                <Button label="Info" type="info" />
                <Button label="Light" type="light" />
                <Button label="Dark" type="dark" />
                <Button label="Link" type="link" />
            </div>
        );
    }
}