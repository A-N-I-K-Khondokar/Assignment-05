 <h2>1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?</h2>
 <p>
   Answer: These are element selector i.e method that allow to select <b>one or multiple</b> HTML element form the DOM.<br>
   <br>getElementById --> it returns the HTML element if it finds it or return NULL if not. With getElementById we can access a single elemet of HTML by it's unique ID.<br>
   <br>getElementsByClassName --> It select all elements with a specific class it is a HTML collection but not an Array i.e we can loop through it but can not use the array funtion like forEach().
   <br><br>querySelector --> It select the first element that matches a CSS selector. And if it does not find any match then it return null.
   <br><br>querySelectorAll---> It select all elements that match a CSS selector. It return a static NodeList not like getElementByClassName but it is loopable usign Array funtion like forEach();

 </p>
    <br><br>
    <h2>2. How do you create and insert a new element into the DOM?
</h2>
    <p>
      // Create a new div element <br>
     const div = document.createElement('div');
        <br><br>
        // Style the div (optional for just creating a new element!)
      <br>div.style.backgroundColor = "green"; 
       <br>div.style.padding = "12px";
        <br><br>
        // add some text <br>
        div.innerText ="Hello, Anik "<br><br>
      // Finally, append the div to the document body
     <br> document.body.appendChild(div);
    </p>
    <br>
    <h2>3. What is Event Bubbling and how does it work?</h2>
    <p>
      Event bubbling is the process where an event triggered on a child element automatically propagates upward through its parent elements, all the way to the root or parent.
      <br>Instead of attaching event listeners to every child element, we can attach one listener to a parent and handle all child interactions through bubbling.
    </p>
    <br>
    <h2>4. What is Event Delegation in JavaScript? Why is it useful?</h2>
      <p>Event delegation in JavaScript means attaching a single event listener to a parent element to handle events from its child elements, using event bubbling.</p>
      <p>It is useful because if we want to add all the child element a eventListner that would be painful and not efficient and also
      <br>by the Event delegation we can add newly created child a listener that saves time and make the code clean and also memory!</p>
<br>
<h2>5. What is the difference between preventDefault() and stopPropagation() methods?</h2>
<p>preventDefault() stops the browser’s default action or behaviour like form submission.</p>
<p>stopPropagation() stops the event from bubbling up to parent elements.</p>
