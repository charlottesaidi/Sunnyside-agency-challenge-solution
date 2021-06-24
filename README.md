# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.  

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page  

### Screenshot

<!-- ![](./screenshot.jpg) -->
Incoming

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)  

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- [JQuery](https://code.jquery.com/) - JS library  

### What I learned

The bubble style menu, easier than I thought and fun to do:  

```html
<ul>
  <div class="arrow-up"></div>
  <li><a href="#!">...</a></li>
  ...
</ul>
```

```css
.arrow-up {
  height: 0; 
  border-left: 30px solid transparent; 
  border-right: 0 solid transparent; 
  border-bottom: 30px solid hsl(0, 0%, 100%);
  position: absolute; 
  top: -30px; 
  right: -9px; 
  width: 0; 
}
```

### Useful resources

- [Css Tricks](https://css-tricks.com/snippets/css/css-triangle/) - Gave me the solution for the pointer responsive menu 
 
## Author

- Frontend Mentor - [@charlottesaidi](https://www.frontendmentor.io/profile/charlottesaidi)
