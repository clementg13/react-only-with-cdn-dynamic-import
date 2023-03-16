// components/Main/index.js
const Main = () => {
    const [mainChildLoaded, setMainChildLoaded] = React.useState(false);

    React.useEffect(() => {
        $.getScript("components/MainChild/index.js").then(() => {
            setMainChildLoaded(true);
        });
    }, []);

    const mainStyle = {
        padding: "2rem",
    };

    return React.createElement(
        "main",
        { style: mainStyle },
        React.createElement("h1", null, "Main"),
        mainChildLoaded && React.createElement(MainChild, null),
        React.createElement(
            "p",
            null,
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit lorem id sapien bibendum, eu sollicitudin augue sodales. Praesent vestibulum euismod lorem, et fringilla libero."
        )
    );
};
