// components/MainChild/index.js
const MainChild = () => {
    const childStyle = {
        backgroundColor: "#f1f1f1",
        borderRadius: "10px",
        padding: "1rem",
        margin: "1rem 0",
    };

    return React.createElement(
        "div",
        { style: childStyle },
        "This is a child component of Main"
    );
};
