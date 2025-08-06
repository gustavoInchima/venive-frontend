# VeniVé Frontend

Frontend de la tienda e inventario **VeniVé**, desarrollado con React. Esta aplicación ofrece una interfaz intuitiva para gestionar la tienda.

---

## Prerequisites

Before running this project locally, make sure you have the following installed:

### System Requirements

- **Node.js** v18 or higher (recommended: LTS version)
- **npm** v9 or higher (comes with Node.js)
- **Git** – for cloning and version control

You can check your installed versions with:

```bash
$ node -v
$ npm -v
$ git --version
```

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

Below is the basic structure of the project:

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

Based on CoreUI Free React Admin Template (MIT).
See LICENSE for details.