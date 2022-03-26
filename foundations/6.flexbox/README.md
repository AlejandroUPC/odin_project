# Flexbox

1. Introduction to Flexbox

Flexbox is a way to arrange items into rows or columns, where those items will flex (i.e. grow or shrink) based on some simple rules that you can define.

A flex container is any element that has display: flex on it. A flex item is any element that lives directly inside of a flex container.

2. Growing and Shrinking

The flex declaration is actually a shorthand for 3 properties that you can set on a flex item.
In this case, flex is actually a shorthand for flex-grow, flex-shrink and flex-basis.

flex-grow

flex-grow expects a single number as its value, and that number is used as the flex-item’s “growth factor”. When we applied flex: 1 to every div inside our container, we were telling every div to grow the same amount. The result of this is that every div ends up the exact same size. If we instead add flex: 2 to just one of the divs, then that div would grow to 2x the size of the others.

flex-shrink

flex-shrink is similar to flex-grow, but sets the “shrink factor” of a flex item. _flex-shrink only ends up being applied if the size of all flex items is larger than their parent container_. For example, if our 3 divs from above had a width declaration like: width: 100px, and .flex-container was smaller than 300px, our divs would have to shrink to fit.

flex-basis

flex-basis simply sets the initial size of a flex item, so any sort of flex-growing or flex-shrinking starts from that baseline size. The shorthand value defaults to flex-basis: 0%. The reason we had to change it to auto in the flex-shrink example is that with the basis set to 0, those items would ignore the item’s width, and everything would shrink evenly. Using auto as a flex-basis tells the item to check for a width declaration (width: 250px).

3. Axes

4. Alignment

5. Project: Landing Page
