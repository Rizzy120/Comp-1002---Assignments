document.addEventListener('DOMContentLoaded', (loaded) => {
    console.log('hello world');
    
    let a = 200;
    let b = 180;
    let c = a + b;
    
    const value1 = 500;
    const value2 = 600;
    let total = value1 + value2;
    
    document.getElementById("ex1").innerHTML = "<h4>JavaScript Variables</h4>" + 
        "<p>let: the value of c is " + c + "</p>" + 
        "<p>const: the total is: " + total + "</p>";
    
    document.getElementById("ex1").style.color = "#f8f8f8";
    document.getElementById("ex1").style.padding = "0% 10%";
    
    document.getElementById("lesson-global-header").innerHTML =
        "<div id='logo-container'>" +
        "<a href='index.html'>" +
        "<img id='logo' src='./img/logo.png' alt='header logo'>" +
        "</a>" +
        "</div>" +
        "<nav><ul>" +
        "<li><a href='#'>Item 1</a></li>" +
        "<li><a href='#'>Item 2</a></li>" +
        "<li><a href='#'>Item 3</a></li>" +
        "</ul></nav>";
    
    document.getElementById("lesson-global-header").style.cssText = 
        "display: flex; height: 125px; background-color: #f8f8f8; align-items: center;";
    document.getElementById("logo-container").style.cssText = 
        "flex-grow: 1; height: 110px; width: auto;";
    document.getElementById("logo").style.cssText = 
        "width: auto; height: 100%;";

    console.log('Welcome To JavaScript');

    document.getElementById("main").innerHTML =
    "<section id = 'lab 3 container'>" +
    "<a href='index.html'>" +
    "<img id='logo' src='./img/logo1.png' alt='header logo1'>" +
    "</a>" +
    "</div>" +
    "<section>" +
    "<h4>lab3 content</h4>" +
    "<p>This is new content added to the main section for lab 3.</p>";
    "</section>";
    
    document.getElementById("main").style.color = "#73648A";



});




