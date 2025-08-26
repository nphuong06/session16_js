import React, { useState } from "react";

export default function ThemeSwitcher() {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    const themeStyle = {
        backgroundColor: isDarkMode ? "#333" : "#fff",
        color: isDarkMode ? "#fff" : "#000",
        padding: "20px",
        textAlign: "center" as const,
        minHeight: "100px",
    };

    return (
        <div style={themeStyle}>
            <h2>
                {isDarkMode ? "Chế độ tối đang bật" : "Chế độ sáng đang bật"}
            </h2>
            <button onClick={toggleTheme}>Chuyển theme</button>
        </div>
    );
}