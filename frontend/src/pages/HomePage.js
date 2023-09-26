import React from 'react';
function HomePage(){
    return(
        <>
        <h2>Hello and Welcome!</h2>
        <article>
            <p>This website encompasses many fundamental technologies and methods of web development. 
            HTML and CSS lay the foundation of this website and provide most of its content and style.
             To provide some aesthetics, it incorporates relevant icons from the React Icons library. To enhance typography and readability, it uses fonts from Google Font.
             On the backend, it uses the Express framework for Node.js to handle server-side logic and route handling. Additionally, it leverages the capabilities of Node.js, 
             a runtime environment, to execute server-side code and provide a scalable and efficient server infrastructure.</p>
             <p>For data storage and retrieval, it relies on MongoDB, 
             a popular NoSQL database, and its integration with Mongoose, a powerful object data modeling library for MongoDB and Node.js. 
             This combination allows it to efficiently manage and organize its data.</p>
             <p>To ensure optimal performance, it employs image optimization techniques, reducing file sizes 
             while maintaining visual quality. This enables faster loading times and a smoother user experience. React, a powerful JavaScript library for building user interfaces, 
             powers the dynamic and interactive aspects of this website, enabling it to create seamless single-page applications. And, adhering to REST principles, this website's backend 
             exposes well-defined APIs, allowing for easy integration with other systems and enabling efficient communication between the client and server.  </p>
        </article>
        </>
    )
}
export default HomePage;