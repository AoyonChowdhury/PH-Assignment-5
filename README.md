# Dev-Stack

This project helps you to add the programming skills you got all the frameworks and libraries you know, Just add and Show off your Skills!

1. TypeScript
2. React
3. Tailwind CSS

Features:

1. Interactive Clean UI
2. Skill Add and Remove Feature
3. Unique Notifications using Toastify

# Questions:

1. What is JSX, and why is it used in React?
   --> JSX is javascript xml which is used to write code with javascript and html combined.

2. What is the difference between props and state?
   --> props are send from one components to another where state is used for Interactive ui

3. What does the useState hook do, and where did you use it in this project?
   -->useState change the UI according the value and setValue here setValue is a function that changes the value.I use it to add the technologies to the stack

4. What does the useEffect hook do, and why did you need it to load the JSON data?
   --> To interact anything outside my code(side effect),without useEffect process isnt going to be asynchronous

5. Why does every item in a .map() list need a unique key prop?
   -->to not to mix up the data

6. What is conditional rendering? Show one place you used it (example: the empty stack message).
   -->conditional rendering is changing the ui based on the condition
   example: active === "Home" ? "text-[#D91B7E]" : "" (Navbar)

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
   -->Parent to child can be passed just by sending props in the component But child to Parent can not be passed as React is a linear process not bilinear.We use lifting state up concept to pass child to parent.
