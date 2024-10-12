
---

# Frontend Mentor - FAQ Accordion Solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help developers improve their coding skills by building realistic projects. 

## Table of Contents

- [Frontend Mentor - FAQ Accordion Solution](#frontend-mentor---faq-accordion-solution)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
    - [The Challenge](#the-challenge)
    - [Links](#links)
  - [My Process](#my-process)
    - [Built With](#built-with)
    - [What I Learned](#what-i-learned)
      - [HTML Code for FAQ Item:](#html-code-for-faq-item)
      - [JavaScript for redering dom:](#javascript-for-redering-dom)
    - [Continued Development](#continued-development)
    - [Useful Resources](#useful-resources)
  - [Author](#author)

## Overview

### The Challenge

Users should be able to:
- Hide/Show the answer to a question when the question is clicked.
- Navigate the questions and hide/show answers using keyboard navigation alone.
- View the optimal layout for the interface on different screen sizes.
- See hover and focus states for all interactive elements.


### Links

- **Solution URL**: [Add your solution URL](https://your-solution-url.com)  
- **Live Site URL**: [Add your live site URL](https://your-live-site-url.com)

---

## My Process

### Built With

- Semantic **HTML5** markup  
- **CSS** custom properties  
- **Flexbox**  
- **CSS Grid**  
- **Mobile-first workflow**  

### What I Learned

During this challenge, I reinforced my understanding of creating accessible accordions and smooth transitions. Below is a code snippet I'm proud of:

#### HTML Code for FAQ Item:
```html
<details>
  <summary>What is your return policy?</summary>
  <p>We offer a 30-day return policy on all items. Please ensure the product is in its original condition.</p>
</details>
```

#### JavaScript for redering dom:
```js
data.map((e) => {
  faqSection.innerHTML += `
           <article class="">
          <div class="details" >
            <summary class="question">
             ${e.question}
<figure class="icon-container">
             <img class="plus-minus-icon" src="./assets/images/icon-plus.svg" alt="" />
</figure>
            </summary>
            <div class="faq-content">
              <p class="answer">
               ${e.answer}
              </p>
            </div>
          </div>
        </article>
   `;
});

```

This challenge improved my ability to work with `details` and `summary` elements and to enhance user experience with smooth height transitions.

### Continued Development

In future projects, I aim to:
- Explore more accessible design patterns.
- Work with **animations** to make UI interactions smoother.
- Use **ARIA roles** more effectively for better accessibility in interactive elements.

### Useful Resources

- [MDN Web Docs – Details and Summary](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details) – Helped me understand how to structure FAQ content semantically.
- [CSS Tricks – Animating Height](https://css-tricks.com/using-css-transitions-auto-dimensions/) – This article guided me on how to handle height transitions smoothly.

---

## Author

- Frontend Mentor – [@sudarshanHosalli](https://www.frontendmentor.io/profile/sudarshanHosalli)  
- GitHub – [sudarshanHosalli](https://github.com/sudarshanHosalli)

---
