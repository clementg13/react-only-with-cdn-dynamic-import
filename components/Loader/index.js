// components/Loader/index.js
const Loader = () => {
    const loaderStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
    };

    const LoadingText = React.createElement(
        "h1",
        null,
        "Chargement..."
    );

    return React.createElement(
        "div",
        { style: loaderStyle },
        LoadingText
    );
};
