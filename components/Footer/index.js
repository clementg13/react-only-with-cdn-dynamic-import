// components/Footer/index.js
const Footer = () => {
    const footerStyle = {
        textAlign: "center",
        backgroundColor: "#333",
        color: "white",
        padding: "1rem"
    };

    return React.createElement(
        "footer",
        { style: footerStyle },
        "Copyright © 2023 - Clément"
    );
};
