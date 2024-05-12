# JS Theme Changer Training

This is just a repository for me to train myself to learn how to change theme

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

- Finding the algorithm to implement the logic to change the theme
- Experiment with the ".toggle" property from JS
- Using great custom variable name (eg: --color-base-text, --color-base-bg, --color-btn-bg, --border-btn)

### Screenshot

![Screenshot Project](assets/images/screenshot.png)

### Links

- Solution URL: [GitHub](https://github.com/Ryusaem/js-theme-changer-training)
- Live Site URL: [Github Live Demo](https://ryusaem.github.io/js-theme-changer-training/)

## My process

- Create HTML Structure

  - H1
  - p: Use it to say which theme we are using...using <span> to dynamicly choose the correct theme
  - button: click to change the color theme

- Algorithm:

### Built with

- HTML
- CSS custom properties
- Flexbox
- JavaScript

### What I learned

1. to push a content (which possess a "flex" parent) at the extrem bottom (like a footer):

- set an height to your parent (.container) of 100vh
- set a "margin-top: auto" to your "footer"

```css
.container {
  height: 100vh;
}

footer {
  margin-top: auto;
}
```

2. Always remove the underline from any <a> because it doesn't look pretty. And do not forget to change the color of your text based on the theme.

```css
a {
  text-decoration: none;
  color: var(--color-base-text);
}
```

3. Using descriptive name for your variable, and your attribute can become a game changer. So I have to memorize the variable name that I really feel good like:

```css
:root {
  --color-base-bg: #fff;
  --color-base-text: #333;
  --border-btn: #333;
  --color-btn-bg: #fff;
}

:root.dark {
  --color-base-bg: #333;
  --color-base-text: #fff;
  --border-btn: #fff;
  --color-btn-bg: #333;
}
```

```html
<div class="container">
  <p>
    You're now viewing this example with the
    <span class="theme-name">dark</span> theme!
  </p>
  <button class="theme-toggle">Toggle Theme</button>
</div>
```

4. To make a beautiful button, you do not need a lot of property (a padding, a border radius, a border, a background color, a color, a width and a cursor):

```css
.theme-toggle {
  background-color: var(--color-base-bg);
  color: var(--color-base-text);
  border: 1px solid var(--border-btn);
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  width: 35%;
}
```

5. Media query are very important to control the look of your website for your phone or tablet...Important to learn the basic use of it.

```css
@media screen and (max-width: 768px) {
  .container {
    padding: 0 3rem;
  }

  .theme-toggle {
    width: 100%;
  }
}
```

6. It is important to reset both the padding and the margin, to make your website work on all browser...This is called the global reset:

```css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
```

7. To access the local Storage and GET an item, use the "localStorage.getItem("items")". To access the local Storage and SET an item to a different value, use "localStorage.setItem("items", newValue)"

```js
localStorage.getItem("theme") || "light";
```

```js
localStorage.setItem("theme", newTheme); // Save the new theme to localStorage
```

8. Toggle button work like that:

- Every time a user click on the button, 4 things happens:

  - If the "document.querySelector(".theme-name").textContent" is 'light' then switch it to "dark"...vice versa.
  - Replace the :root class to "dark" if it "light" .. vice versa.
  - Set the local storage to the name of the correct them
  - Then update the variable "currentTheme" to the updated name.

- There is a lot of other way possible, and some are way more simplier than mine ([for example](https://codepen.io/TheOdinProjectExamples/pen/PojVRMb))

```js
toggleButton.addEventListener("click", () => {
  const newTheme = themeName.textContent === "light" ? "dark" : "light"; // Determine the new theme based on the current one
  themeName.textContent = newTheme; // Update the display text

  rootElement.classList.replace(currentTheme, newTheme); // Replace the current theme class with the new one
  localStorage.setItem("theme", newTheme); // Save the new theme to localStorage
  currentTheme = newTheme; // Update the currentTheme variable to the new theme
});
```

```js
// This is the code from The Odin Project, which is so beautiful and simple
function setTheme() {
  const root = document.documentElement;
  const newTheme = root.className === "dark" ? "light" : "dark";
  root.className = newTheme;

  document.querySelector(".theme-name").textContent = newTheme;
}

document.querySelector(".theme-toggle").addEventListener("click", setTheme);
```

9. One of the mistake that I had, is that my :root didn't wanted to write the correct class when I push to the button. So I use the console.log() to investigate and saw that I used a "const" while I should have use a "let" especially because we need to update the value. The other is that I forget to update the currentTheme variable with the updated version. So making mistake earlier is great and important for any kind of project.

10. Doing your own project like this one teach you so much more things than a project that you made with someone or with YouTube. Because when you are lost, when you make a mistake, there is no one that can help you, and you have to do everything in your power to solve and fix it. For that, you'll use much more brain power than simply watching someone creating something passively.
    We have great tool to help us fix thing and investigate and it is "console.log()" ... one of the best tool for any kind of developer

11. Lastly, I have discover two powerful property through this project which are "classList.replace("old", "new")" and "classList.toggle("new")"

- classList.replace("old", "new") replace an old (or current) class with a new one, which is very useful for switching theme in this probjet.
- classList.toggle('new') will add the class "new" if it is not present (and return True), and delete it if it here (and return False), which is also very useful, but I choose the .replace one because it is more practical for me.

### Continued development - Be better at crafting algorithm. Be better a think

in a logical way the step needed to be taken to do any project. - Ankify the
most complicated things like the process of switching themes - Read
more...Study more...Practice more ## Useful resources [The Odin
Project](https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-custom-properties)

- For me they possess the best course and the best content to become a master
  at web development. ## Author Github - [@Ryusaem](https://github.com/Ryusaem)
- Linkedin - [@sambath-meas](https://www.linkedin.com/in/sambath-meas) -
  Coursera - [@sambath-meas](https://www.coursera.org/learner/sambath-meas) -
  Twitter - [@RyuBraveheart](https://twitter.com/RyuBraveheart) - Frontend
  Mentor - [@Ryusaem](https://www.frontendmentor.io/profile/Ryusaem) - CodeWars
- [@Ryusaem](https://www.codewars.com/users/Ryusaem)
</div>

```

```

```

```

```

```
