# VeniVé Frontend

Frontend de la tienda e inventario **VeniVé**, desarrollado con React. Esta aplicación ofrece una interfaz intuitiva para gestionar la tienda.

---

### Installation

``` bash
$ npm install
```

or

``` bash
$ yarn install
```

### Basic usage

``` bash
# dev server with hot reload at http://localhost:3000
$ npm dev 
```

or 

``` bash
# dev server with hot reload at http://localhost:3000
$ yarn dev
```

Navigate to [http://localhost:3000](http://localhost:3000). The app will automatically reload if you change any of the source files.

#### Build

Run `build` to build the project. The build artifacts will be stored in the `build/` directory.

```bash
# build for production with minification
$ npm run build
```

or

```bash
# build for production with minification
$ yarn build
```

## What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
venive-frontend/
├── public/                # Static public assets
│   ├── favicon.ico        # App favicon
│   └── manifest.json      # PWA manifest
│
├── src/                   # Application source code
│   ├── App.js             # Main app wrapper
│   ├── assets/            # Static resources like images and logos
│   ├── components/        # Reusable UI components (buttons, sidebar, etc.)
│   ├── config/            # Configuration files (e.g. navigation, constants)
│   ├── index.js           # App entry point
│   ├── layout/            # Layout containers (default layout, wrappers)
│   ├── routes.js          # Route definitions
│   ├── scss/              # Global styles and SCSS partials
│   ├── store.js           # Application state (Redux, Zustand, etc.)
│   └── views/             # Main application pages and modules
│
├── README.md              # Project overview and instructions
├── vite.config.mjs        # Vite configuration
├── package.json           # Project dependencies and scripts
└── ...                    # Other config and meta files
```

## Notice

This project is based on the CoreUI Free React Admin Template licensed under the MIT License.

All original CoreUI code and assets remain under their respective license. This project includes modifications and customizations specific to the VENÍVÉ storefront application.

Please refer to the LICENSE file in this repository for full licensing details.