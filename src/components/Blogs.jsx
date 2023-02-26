import React from "react";

const Blogs = () => {
  return (
    <div className="lg:flex gap-10 mb-20 mt-20 lg:ml-52 lg:mb-40 text-left">
      <div className="max-w-md p-6 overflow-hidden rounded-lg shadow bg-gray-900 text-gray-100 mb-20 ml-3">
        <article>
          <h2 className="text-xl font-bold">
            What is the purpose of React Router?
          </h2>
          <p className="mt-4 dark:dark:text-gray-400">
            ReactJS Router is mainly used for developing Single Page Web
            Applications. React Router is used to define multiple routes in the
            application. When a user types a specific URL into the browser, and
            if this URL path matches any 'route' inside the router file, the
            user will be redirected to that particular route.
          </p>
          
        </article>
      </div>
      <div className="max-w-md p-6 overflow-hidden rounded-lg shadow bg-gray-900 text-gray-100 mb-20 ml-3">
        <article>
          <h2 className="text-xl font-bold">How does Context API Works?</h2>
          <p className="mt-4 dark:dark:text-gray-400">
            Context API can solve many problems that modern applications face,
            related to state management, for example, props drilling. Many
            solutions can solve state management issues and props drilling, but
            they may increase your build size and compromise your app
            performance. Context API is a React built-in feature, so we don’t
            have to worry about performance overhead and library installing
            issues. The props drilling problem occurs when you pass a prop
            somewhere down the tree. When a project grows, data passing through
            props becomes chaotic, making the code more vulnerable and complex.
            To tackle this problem, we use Context API.
          </p>
          
        </article>
      </div>

      <div className="max-w-md p-6 overflow-hidden rounded-lg shadow bg-gray-900 text-gray-100 mb-20 ml-3">
        <article>
          <h2 className="text-xl font-bold">
            What is the use of useRef in React?
          </h2>
          <p className="mt-4 dark:dark:text-gray-400">
            The useRef Hook allows you to persist values between renders. It can
            be used to store a mutable value that does not cause a re-render
            when updated. It can be used to access a DOM element directly.
          </p>
          
          
        </article>
      </div>
    </div>
  );
};

export default Blogs;
