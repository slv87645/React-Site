import React from 'react';

function TopicPage() {
    return (
        <>
            <h2>Web Development Concepts</h2>
        <nav class="ec1">
            <a href="#web-servers">Web Servers</a>
            <a href="#frontend-design">Frontend Design</a>
            <a href="#optimizing-images">Optimizing Images</a> 
            <a href="#cascading-stylesheets">Cascading Stylesheets</a>
            <a href="#javascript">Javascript</a>
            <a href="#DOM">DOM</a>
        </nav>
        <article id ="web-servers">
            <h3>Web Servers</h3>
            <p>The <strong>index page</strong> is the designated homepage for an apache web server. 
                The homepage has different names on other web servers, such as default.html on Microsoft's .NET or index.js.
                If a file is not requested in the URL, the server displays the index page by default.</p>

             <p>When comparing the file's details on the <strong>web server</strong> versus the <strong>local server</strong>, the request URL differs in each instance. 
                 The <strong>local server </strong> request has a file scheme, while the <strong>web server</strong> request has an <strong>HTTPS</strong> scheme. 
                 In addition, the web server file has more descriptive request and response headers compared to the local computer file.
                 For example, the web server request headers include accept, accept-language, and host, which are not present in the local computer file request.</p>

             <p>The main.css and main.js files both have <strong>status codes</strong> of 404 indicating that the requested resources were not found on the server. 
                 The favicon.ico file has a <strong>status code</strong> of 200 because the web server automatically provides it from the disk cache.</p>
                 
             <p>The <strong>scheme</strong> of my URL is https. The <strong>subdomain</strong> is web.engr. The <strong>host domain</strong> is oregonstate.edu. The <strong>resource</strong> is /~vust/Assignment_1.</p>
        </article> 

        <article id="frontend-design">
            <h3>Frontend Design</h3>
            <p><strong>Frontend design</strong> revolves around crafting the experience a user has when navigating a website. 
                It is responsible for the graphic design and user interface of a website.</p>

            <dl>
                <dt><strong>"Effective"</strong></dt>
                <dd>The website is effective by fulfilling the goals of the user.</dd>
                <dt><strong>"Efficient"</strong></dt>
                <dd>An efficient website allows the user to quickly accomplish their goals without excessive steps.</dd>
                <dt><strong>"Easy to navigate"</strong></dt>
                <dd>The user can move through pages of the website seamlessly and refer back to pages of interest with ease.</dd>
                <dt><strong>"Error-Free"</strong></dt>
                <dd>An error-free website can handle user traffic and presents information accurately without typos or broken links/buttons.</dd>
                <dt><strong>"Enjoyable or Engaging"</strong></dt>
                <dd>The website is visually appealing, and the user interface encourages users to interact with it. Users are more likely to return to the site as a result. </dd>
            </dl>

            <p><strong>Page layout tags</strong> help organize and section off content on the website. These tags do this by displaying 
                a line break before and after their contents. Additionally, they label different areas of a web page so 
                that machines can understand which area of the page includes which components.</p>

                <p>The <strong>anchor element</strong> allows us to create links between the current 
                    page and a section within the page or another page. These links can be compiled in a navigation section. To create a link to another page, we describe the content of the link between 
                    the opening and closing anchor tags. We then use the <strong>HREF</strong> attribute to specify the <strong>URL</strong> that the user is taken to when clicking on the link. 
                    Additionally, we can create links to specific locations within a document by adding an <strong>ID</strong> attribute to the element we want to link to. We then 
                    add the value of the ID attribute to the <strong>HREF attribute</strong> URL. In conclusion, <strong>text anchors</strong> let us link an element on the page to another page, while <strong>navigation tags</strong> designate sections of 
                    a page that contain links formed by anchors. They are not links themselves.</p> 
        </article>
        <article id="optimizing-images">
            <h3>Optimizing Images</h3>
            <p>There are 6 major specifications of images for the web. A <strong>descriptive file name</strong> should include the who, what, when, and where of the image. This helps search engines categorize the image. 
                <strong>Small file sizes</strong> ensure that the image is able to load as quick as possible. Cropping images to the <strong>exact dimensions</strong> of their space on the web page ensures that it will load properly. 
                The <strong>correct file format</strong> for an image ensures that the quality of the image isn't too compromised when reducing the file size. Images must have <strong>reduced resolutions</strong> to ensure that they display 
                properly on the monitor they're viewed on. Lastly, using the correct <strong>color mode</strong> allows for consistent design and optimal size and quality.</p>
            <p>Line art and photos each have different file formats that are optimal for them. Specifically, .GIF, .PNG, and .SVG are best used for line art, while .JPG and WebP are best used for photos.
                 .JPG files use a specific compression method for photos that allow them to retain good quality after being compressed to small sizes. .PNG is best for line art because it uses lossless compression. 
                 This preserves the sharp edges and solid colors of line art.
            </p>
        </article>
        <article id="cascading-stylesheets">
            <h3>Cascading Stylesheets</h3>
            <p><strong>Stylesheets</strong> redefine the structure of an HTML document. They add organization, color, and style to improve usability and legibility. 
            </p>
            <p>There are 5 ways to incorporate style into an HTML document. The first way is by linking an external stylesheet file to the 
                global head area of an HTML document using the link element. This provides styles to all pages that link to the stylesheet. The next 4 ways are embedded directly in HTML and JavaScript files. 
                For example, you can embed styles within the style tag of an HTML document, or you can use a style inline within an element. Additionally, you can use JavaScript template 
                literals within a JavaScript function, or manipulate the Document Object Model if you're using regular JavaScript.
            </p>
        </article>
        <article id="javascript">
            <h3>Javascript</h3>
            <p>Values in <strong>Javascript</strong> can be of many different types. These types consist of numbers, Boolean values, strings, symbols, 
                special values like <strong>undefined</strong> and <strong>null</strong>, and objects. Numbers in Javascript are double-precision floating-point numbers. 
                Boolean values consist of <strong>true</strong> and <strong>false</strong>. Strings can be either <strong>string literals</strong> where there are only characters embedded by single or 
                double quotes or <strong>template literals</strong>. Template literals contain expressions and are enclosed by backticks. The special values null and undefined are used to indicate the absence of a value.
                </p>
            <p><strong>Objects</strong> are sets of name-value pairs that serve many purposes. Object properties can be created, read, updated, and deleted. Arrays are objects, but their names are string numbers like '0' or 
                '1'. Values in arrays can be of any type and they can be accessed in the array using 0-based integer index in square brackets. <strong>JSON</strong> stands for Javascript Object Notation and is used to exchange data between applications. 
                It allows data from programs of different languages to exchanged between each other by creating JSON strings.</p>
            <p>Conditionals allow for decision trees to be made in Javascript. <strong>If-statements</strong> and <strong>switch-statements</strong> are used to compare values and decide which path to take. Typically, these statements are combined with 
                various equality and Boolean operators like ===, !==, and &&. Javascript also presents different types of loops for different needs. The two broad types of loops are <strong>while loops</strong> where the body of the loop is executed 
                while as an initial expression is true and <strong>for loops</strong> where a block of code is executed a certain number of times.</p>
            <p> At its core, object-oriented programming is based on the concept of "objects," which are essentially data structures that contain both data (in the form of properties or attributes) and behavior (in the form of methods or functions). 
                Javascript objects are expected to have an <strong>identity</strong>, <strong>state</strong>, and <strong>behavior</strong>. In JavaScript, objects can be created using <strong>prototypes</strong> or the <strong>constructor</strong> notation. The constructor takes a varying 
                number of arguments and establishes them as data members for the newly created object. </p>
            <p>In JavaScript, <strong>functional programming</strong> involves treating functions as <strong>first-class</strong>, meaning that they can be assigned to variables, passed as arguments to other functions, and returned as values from functions. Functional programming in JavaScript 
                often involves using <strong>higher-order functions</strong>, which are functions that take other functions as arguments or return functions as values. Some examples would be <strong>map</strong>, <strong>filter</strong>, and <strong>reduce</strong>.</p>
        </article>
        <article id="DOM">
            <h3>Updating the Document Object Model</h3>
            <p>Developers use Javascript and <strong>Express</strong> to update the <strong>DOM (Document Object Model)</strong> for various reasons. For example, it allows for developers to create dynamic content. Javascript lets developers make changes to the DOM in response 
                to user interactions like clicks or button presses. Content can be changed and provided without having to reload the entire page. Another reason is for <strong>asynchronous operations</strong>. Asynchronous operations allow for web apps to be scalable and load multiple features at once. 
                Features like submitting forms, fetching APIs, or handling user input can be run smoothly without interrupting each other. </p>
        </article>

        </>
    );
}

export default TopicPage;