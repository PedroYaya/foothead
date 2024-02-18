# 'foothead'

Library to create configurable components to unify UI criteria across companies.

# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

# Extend / edit lib components:

1. Update version in package.json
2. Run vite build
3. Run npm publish


# Import lib from project

1. npm i foothead
2. In main.js file:
  
  import MainHeader from 'foothead';
  import MainFooter from 'foothead';
  app.use(MainHeader).use(MainFooter)

3. In components: `<main-footer type="landing" :disabled="disableCheckout" etc />`


# API Options:

# MainFooter
The `MainFooter` component is a customizable footer component for Vue.js applications. It provides various options and props that allow you to configure its appearance and behavior according to your needs. Below, you'll find documentation on the available options and props for this component.

## Props

### `hidden` (Boolean, default: `false`)
- Determines whether the footer should be hidden (`true`) or visible (`false`).

### `styles` (Object, default: `{ background: 'white', fixed: true }`)
- Allows you to customize the styling of the footer.
  - `background` (String): Sets the background color of the footer.
  - `fixed` (Boolean): If `true`, the footer will have a fixed position at the bottom of the page.

### `buttons` (Array of objects, default: `[{ label: 'Continue', action: () => {}, class: 'btn-primary' }]`)
- Specifies an array of buttons to display in the footer. Each button is represented by an object with the following properties:
  - `label` (String): The label text for the button.
  - `action` (Function): The function to be executed when the button is clicked.
  - `class` (String): The CSS class to apply to the button.

### `rows` (Number, default: `1`)
- Determines the number of rows in the footer's content. When set to `2`, the content will be displayed in a two-column layout.

### `preTaxTotal` (String, default: `'0.00'`)
- Sets the estimated pre-tax total amount to be displayed in the footer.

### `onCheckout` (Function, default: `() => {}`)
- Specifies a callback function to be executed when the checkout action is triggered.

### `type` (String, default: `'custom'`)
- Defines the type of footer to display. Possible values are:
  - `'landing'`: Used for a landing page-style footer.
  - `'checkout'`: Used for a checkout page-style footer.
  - `'custom'`: Used for a custom footer.

## Computed Property

### `background` (String)
- Generates the `background` CSS property based on the `styles.background` prop value. It is used to dynamically set the footer's background color.

## Styling

The `MainFooter` component includes predefined styling for different types of footers. You can further customize the appearance of the footer by modifying the included SCSS styles.

### Custom Footer (`type: 'custom'`)
- The default style for a custom footer. You can customize this style using the provided SCSS styles.

### Landing Page Footer (`type: 'landing'`)
- Used for landing page-style footers. Provides a specific style for landing page footers, including buttons and pre-tax total display.

### Checkout Page Footer (`type: 'checkout'`)
- Used for checkout page-style footers. Provides a specific style for checkout page footers, including subtotal and action buttons.

### Sticky Footer (`styles.fixed: true`)
- When the `styles.fixed` prop is set to `true`, the footer will have a fixed position at the bottom of the page. This style applies to all types of footers.





# MainHeader

The `MainHeader` component is a customizable header component for Vue.js applications. It provides various options and props that allow you to configure its appearance and behavior according to your needs. Below, you'll find documentation on the available options and props for this component.

## Props

### `hidden` (Boolean, default: `false`)
- Determines whether the header should be hidden (`true`) or visible (`false`).

### `logo` (Object, default: `{ hidden: false, size: 'small', path: '' }`)
- Allows you to configure the logo displayed in the header.
  - `hidden` (Boolean): If `true`, the logo will be hidden.
  - `size` (String): Sets the size of the logo. Possible values are `'small'`, `'medium'`, and `'large'`.
  - `path` (String): Specifies the path to the logo image.

### `mode` (String, default: `'regular'`)
- Defines the mode of the header. Possible values are:
  - `'regular'`: The header displays menu items and a logo in desktop mode.
  - `'hamburger'`: The header displays a hamburger menu icon for mobile devices.

### `styles` (Object, default: `{ background: 'white', fixed: true }`)
- Allows you to customize the styling of the header.
  - `background` (String): Sets the background color of the header.
  - `fixed` (Boolean): If `true`, the header will have a fixed position at the top of the page.

### `menuItems` (Array of objects, default: `[...]`)
- Specifies an array of menu items to display in the header. Each menu item is represented by an object with the following properties:
  - `label` (String): The label text for the menu item.
  - `path` (String): The URL path associated with the menu item.

## Data

### `openMenu` (Boolean, default: `false`)
- Manages the state of the mobile menu. When `true`, the mobile menu is open.

## Computed Properties

### `background` (String)
- Generates the `background` CSS property based on the `styles.background` prop value. It is used to dynamically set the header's background color.

### `showDesktopMenuItems` (Boolean)
- Determines whether to display menu items in desktop mode based on the `mode` prop value.

### `showHamburger` (Boolean)
- Determines whether to display the hamburger menu icon based on the `mode` prop value.

## Styling

The `MainHeader` component includes predefined styling for the header, including fixed positioning, logo sizing, and responsive design. You can further customize the appearance of the header by modifying the included SCSS styles.

