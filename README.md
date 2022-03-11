## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1) **Make a drawing of your app. Simple "wireframes"** 
1) **Look at the drawing and imagine using the app. What _state_ do you need to track?**
1) **Once you have a drawing, name the HTML elements you'll need to realize your vision**
1) **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")**
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change? Does any DOM update?**
1) **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:
- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model.
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need?
  - What are the key/value pairs?
  - What arrays might you need?
  - What needs to live in a persistence layer?
- Is there some state we need to initialize?
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)

## Rubric

| User should be able to . . .                                                         |             |
| :----------------------------------------------------------------------------------| ----------: |
| Visit the deployed pages on GitHub pages, with link in the About section of the Github repo |    2 |

| Events . . .                                                         |             |
| :----------------------------------------------------------------------------------- | ----------: |
| Select from at least three dropdowns (i.e. waterfront, skyline, castle) with at least three options each                |           2 |
| Three images displayed on the page. On choosing an option from the dropdown and see the change reflected in the UI with a new images (https://pixabay.com/ is a good source for free images) |     2 |
| When submitting a slogan, add it to an array of slogans, clear the current DOM's list of slogans, and list all slogans a `p` tags in the DOM         |           4 |
| See displayed how many times each dropdown has been changed in the current session. Should report on all 3 dropdowns in the same div   |           4 |

| Functions                                                              |             |
| :----------------------------------------------------------------------------------- | ----------: |
| IMPURE: `displayCountStats() : attaches a string to the DOM describing how many times each dropdown has been changed` | 3 |
| IMPURE: `displaySlogans() : clears DOM, loops through slogans, displays slogans on the page` | 3 |
## Plan

![wireframes](/assets/wireframes.png)

- HTML Elements
  - two divs to split page between the left (image) side, and the right (dropdown/info) side
    - Why? will make styling easier
    - How? section { display: grid; grid-template-columns: some% some%; }
  - four divs to split the right side up
    - Why? will make styling easier
    - How? right-side-div { display: grid; grid-template-rows: some% some% some% some%;
  - three image tags
    - Why? to display the three selected images
    - How? img1.src = `/assets/${selected-image}.png`
  - three dropdowns
    - Why? so we know which images the user selected and can then display those images in the three image tags
    - How? dropdown1.addEventListener('change', () => { const newImg = dropdown1.value; do something with that; })
  - div for displaying stats - already included in the four divs to be added to the right side
    - Why? so we have a place to display how many times the user used each dropdown
    - How? put text in p tags and the numbers that we want to change as the state changes in span tags
  - input for slogans
    - Why? so we can add slogans the user inputs to the slogan list area
    - How? const newSlogan = sloganInput.value
  - button for slogans
    - Why? so the user can submit the slogan and we can grab what they typed in the input field
    - How? sloganButton.addEventListener('click', () => { const newSlogan = sloganInput.value; add newSlogan to the slogan list array with .push(); clear slogan list area; append updated slogan list array to the slogan area with dynamically created p tags })
  - div for slogan list - already included in the four divs to be added to the right side
    - Why? to hold the slogan list
    - How? text is cleared and we append new slogans with their own p tags using our slogan button event listener
- Events
  - user selects an option from one of the dropdowns (x3)
    - new image is displayed in the respective image tag on the left
      - grab value of the selected option from the dropdown
      - the value selected determines which image is displayed
    - update state with how many times that dropdowns been selected and display the updated state
      - increment how many times that dropdown has been changed: dropdown1++
      - update the text content in the display stats area to show current state
  - user clicks slogan button
    - value in the slogan input field is grabbed and pushed to the slogan list array
    - text is cleared from slogan list area
    - new slogan list is appended to the slogan list area
      - loops through slogan list array and appends each item in the array to the slogan list area as a p tag
- Order
  - add HTML elements to index.html
    - include necessary class and ID tags
    - validate by looking at live server
  - add grid styling to split page into a left and right side & to split the right side into four separate areas
    - validate with borders and by looking at live server
  - get DOM elements in app.js
    - three img tags
    - three dropdowns
    - three spans for displaying stats
    - slogan input
    - slogan button
    - slogan list area
    - validate by console logging the DOM elements
  - initialize state
  - declare functions
    - validate by calling functions and using console.log()
  - write event listeners
    - one for each dropdown
    - one for slogan button
    - validate by console logging in the event listeners
  - adjust styling as needed
  