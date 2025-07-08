{
  "name": "ve-frontend",
  "version": "1.0.0",
  "private": true,
  "description": "VE-SHOP is a modern e-commerce frontend using Next.js, React, and Redux Toolkit.",
  "homepage": "https://veshop.co",
  "repository": {
    "type": "git",
    "url": "https://github.com/Ascoor/ve-shop"
  },
  "author": "Ask-ar.net Developer",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "format": "prettier --write .",
    "precopy-build": "rm -rf /var/www/html/ve-shop.co/public/*",
    "copy-build": "cp -R out/* /var/www/html/ve-shop.co/public",
    "lint": "eslint . --ignore-path .gitignore"
  },
  "dependencies": {
    "@headlessui/react": "^2.1.9",
    "@heroicons/react": "^2.1.5",
    "@reduxjs/toolkit": "^2.2.7",
    "@tailwindcss/forms": "^0.5.9",
    "@tailwindcss/typography": "^0.5.15",
    "axios": "^1.7.7",
    "chart.js": "^4.4.5",
    "formik": "^2.4.6",
    "next": "^14.2.14",
    "next-redux-wrapper": "^8.1.0",
    "prop-types": "^15.8.1",
    "react": "^18.3.1",
    "react-chartjs-2": "^5.2.0",
    "react-dom": "^18.3.1",
    "react-icons": "^5.3.0",
    "react-redux": "^9.1.2",
    "react-redux-toastr": "^8.0.0",
    "react-star-ratings": "^2.3.0",
    "redux": "^5.0.1",
    "redux-persist": "^6.0.0",
    "swiper": "^11.1.14",
    "yup": "^1.4.0"
  },
  "devDependencies": {
    "@tailwindcss/aspect-ratio": "^0.4.2",
    "autoprefixer": "^10.4.20",
    "eslint": "^8.32.0",
    "eslint-config-next": "^14.2.14",
    "postcss": "^8.4.47",
    "prettier": "^3.3.3",
    "tailwindcss": "^3.4.14"
  },
  "engines": {
    "node": ">=18.20.4",
    "yarn": ">=1.22.0"
  }
}
