import React, { Component } from "react";

type Subject = { id: number; name: string };

type Props = {
    title?: string;
    subjects: Subject[];
};

export default class SubjectList extends Component<Props, {}> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        const { title, subjects } = this.props;

        return (
            <div
                style={{
                    width: 360,
                    background: "#111827",
                    padding: 24,
                    borderRadius: 16,
                    boxShadow: "0 12px 32px rgba(0,0,0,.45)",
                    color: "#fff",
                    fontFamily: "system-ui, sans-serif",
                }}
            >
                <h2 style={{ margin: 0, marginBottom: 16, textAlign: "center", fontWeight: 700 }}>
                    {title}
                </h2>

                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 12 }}>
                    {subjects.map((s) => (
                        <li
                            key={s.id}
                            style={{
                                background: "#e5f0f6",
                                color: "#0f172a",
                                padding: "14px 16px",
                                borderRadius: 10,
                                textAlign: "center",
                                fontWeight: 600,
                            }}
                        >
                            {s.name}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
