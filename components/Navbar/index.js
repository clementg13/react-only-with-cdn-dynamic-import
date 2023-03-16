// components/Navbar/index.js
const Navbar = () => {
    const navStyle = {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#333",
        padding: "1rem",
    };

    const linkStyle = {
        textDecoration: "none",
        color: "white",
    };

    return React.createElement(
        "nav",
        { style: navStyle },
        React.createElement(
            "a",
            { href: "#", style: linkStyle },
            "Home"
        ),
        React.createElement(
            "a",
            { href: "#", style: linkStyle },
            "About"
        ),
        React.createElement(
            "a",
            { href: "#", style: linkStyle },
            "Contact"
        )
    );
};
