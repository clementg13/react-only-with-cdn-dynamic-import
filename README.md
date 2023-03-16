### English

## React App with CDN and Dynamic Components

This project demonstrates how to create a React application using CDNs for React, ReactDOM, and Babel. Components are loaded dynamically using jQuery for AJAX requests.

### Project Structure
```.
├── components
│   ├── Footer
│   │   └── index.js
│   ├── Loader
│   │   └── index.js
│   ├── Main
│   │   └── index.js
│   ├── MainChild
│   │   └── index.js
│   └── Navbar
│       └── index.js
├── app.js
├── index.html
└── index.js
```


### Functioning

The application is based on using CDNs to load React, ReactDOM, and Babel, as well as jQuery to load components dynamically. Components are defined in separate files, and the main application (`app.js`) manages the loading and displaying of components.

The `index.html` file contains references to the necessary CDNs for React, ReactDOM, Babel, and jQuery. The `index.js` file is responsible for loading the `Loader` component and the `app.js` file. Finally, `app.js` handles the loading and displaying of the `Navbar`, `Footer`, and `Main` components, which in turn loads and displays the `MainChild` component.

### Why not using JSX?

In this project, we are not using JSX because we want to create a React app without using Node.js and build tools like Webpack or Parcel. By avoiding JSX, we can build the app using only CDN resources and simple script tags without any additional build step.

### Français

## Application React avec CDN et Composants Dynamiques

Ce projet démontre comment créer une application React en utilisant des CDN pour React, ReactDOM et Babel. Les composants sont chargés dynamiquement en utilisant jQuery pour les requêtes AJAX.

### Structure du projet
```.├── components
│ ├── Footer
│ │ └── index.js
│ ├── Loader
│ │ └── index.js
│ ├── Main
│ │ └── index.js
│ ├── MainChild
│ │ └── index.js
│ └── Navbar
│ └── index.js
├── app.js
├── index.html
└── index.js
```


### Fonctionnement

L'application est basée sur l'utilisation de CDN pour charger React, ReactDOM et Babel, ainsi que sur jQuery pour charger les composants de manière dynamique. Les composants sont définis dans des fichiers séparés, et l'application principale (`app.js`) gère le chargement et l'affichage des composants.

Le fichier `index.html` contient les références aux CDN nécessaires pour React, ReactDOM, Babel et jQuery. Le fichier `index.js` est responsable du chargement du composant `Loader` et du fichier `app.js`. Enfin, `app.js` gère le chargement et l'affichage des composants `Navbar`, `Footer` et `Main`, qui à son tour charge et affiche le composant `MainChild`.

### Pourquoi ne pas utiliser JSX ?

Dans ce projet, nous n'utilisons pas JSX parce que nous voulons créer une application React sans utiliser Node.js et des outils de construction comme Webpack ou Parcel. En évitant JSX, nous pouvons construire l'application en utilisant uniquement des ressources CDN et des balises de script simples sans étape de construction supplémentaire.


