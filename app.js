// app.js
const loadComponents = async () => {
    await $.getScript("components/Navbar/index.js");
    await $.getScript("components/Footer/index.js");
    await $.getScript("components/Main/index.js");
};

const App = () => {
    const [componentsLoaded, setComponentsLoaded] = React.useState(false);

    React.useEffect(() => {
        const loadWithDelay = async () => {
            await loadComponents();
            setTimeout(() => {
                setComponentsLoaded(true);
            }, 1000); // Attendre 1 seconde (1000 ms)
        };

        loadWithDelay();
    }, []);

    if (!componentsLoaded) {
        return React.createElement(Loader, null);
    }

    return React.createElement(
        "div",
        null,
        React.createElement(Navbar, null),
        React.createElement(Main, null),
        React.createElement(Footer, null)
    );
};
