# Frontend Mentor - QR code component solution

This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

-   [Overview](#overview)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
    -   [Useful resources](#useful-resources)
-   [Author](#author)

## Overview

### Screenshot

![](./src/images/screenshot/Screenshot%20Frontend%20Mentor%20QR%20code%20component-desktop (2).png)

### Links

-   Solution URL: [qr-code-component](https://fm-qr-code-component-beta-eight.vercel.app/)
<!-- -   Live Site URL: [Add live site URL here](https://your-live-site-url.com) -->

## My process

### Built with

-   Semantic HTML5 markup
-   CSS custom properties
-   Flexbox
-   Mobile-first workflow
-   [tailwindcss](https://tailwindcss.com/) - For styles

### What I learned

Use Tailwind CSS theme configuration to add a new class to the theme.
Here’s a step-by-step guide:

1. create tailwind.config.js.

```bash
npx tailwindcss init
```

2. Add the new class to the theme.

```js
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {
            fontSize: {
                'custom-2xl': [
                    '22px',
                    {
                        lineHeight: '120%',
                        letterSpacing: '0px',
                    },
                ],
            },
        },
    },
    plugins: [],
};
```

3. Run the tailwindcss command to watch the changes.

```bash
npx tailwindcss -i ./src/styles.css -o ./src/output.css --watch
```

4. Add the new class to the HTML file.

```html
<h1 class="text-custom-2xl">Hello World!</h1>
```

### Useful resources

-   [tailwindcss Theme Configuration](https://tailwindcss.com/docs/theme#customizing-the-default-theme) - This helped me for customizing the default theme of tailwindcss.

## Author

-   Frontend Mentor - [@Yunlearning](https://www.frontendmentor.io/profile/Yunlearning)
