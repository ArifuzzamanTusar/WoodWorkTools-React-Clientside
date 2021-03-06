import React from 'react';
import { Container } from 'react-bootstrap';
import PageHeader from '../../Global/Pagecomponents/PageHeader';

const Blog = () => {
    return (
        <div>
            <PageHeader title="Blogs" subtitle="Assignment Question and answers"></PageHeader>
            <Container>
                <div className="py-5">
                    <div className="question-answer p-5 shadow-lg rounded my-5">
                        <div className="question">
                            <h5>Q1. How will you improve the performance of a React Application?</h5>
                        </div>
                        <hr />
                        <div className="answer">
                            <p>Memorizing react components to avoid re-rendering is one approach to improve react apps. Also, component state should be kept local. If the application renders a big list, we can utilize the windowing technique, which renders a tiny subset of rows at a time. To improve performance, we can also use lazy loading pictures to prevent the development of extra DOM nodes. If you're using Webpack 4, you may set the module set mode option to production, which instructs Webpack to employ built-in optimization.</p>
                        </div>
                    </div>
                    <div className="question-answer p-5 shadow-lg rounded my-5">
                        <div className="question">
                            <h5>Q2. What are the different ways to manage a state in a React application?
                            </h5>
                        </div>
                        <hr />
                        <div className="answer">
                            <p>In a React app, there are four types of state to manage: local state, global state, server state, and URL state. Local state is managed by one or more components, which are frequently managed by the useState hook. The local state could be displayed or hidden. The global state is required by multiple components, such as the authenticated user state. The server state is retrieved from an external server and integrated into the UI state. It's difficult to manage, but tools like React query can help. URL state exists on URLs that contain query parameters.</p>
                        </div>
                    </div>
                    <div className="question-answer p-5 shadow-lg rounded my-5">
                        <div className="question">
                            <h5>Q3. How does prototypical inheritance work?</h5>
                        </div>
                        <hr />
                        <div className="answer">
                            <p>To add methods and properties in objects can be used Prototypal inheritance of JavaScript features. By this method, can inherit properties and methods from another object. So, mainly these features allow us to reuse the properties and methods. This feature does have some limitations like objects can not inherit from multiple prototypes. Prototypical relationships can only be made with objects.</p>
                        </div>
                    </div>
                    <div className="question-answer p-5 shadow-lg rounded my-5">
                        <div className="question">
                            <h5>Q4. Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h5>
                        </div>
                        <hr />
                        <div className="answer">
                            <p>setProducts() will replace previous value in state. setProducts is asynchronous. React components get re-rendered whenever the state changed. But, if you want to merge the previous value and updated value you must use the callback syntax of state updating along with the correct use of spread syntax. So, we don't want to merge previous value in products that's why we don't use the spread operator.</p>
                        </div>
                    </div>
                    <div className="question-answer p-5 shadow-lg rounded my-5">
                        <div className="question">
                            <h5>Q5. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h5>
                        </div>
                        <hr />
                        <div className="answer">
                            <p>Let's make a function as searchProduct and pass product and search query(product name) as parameters. Let's take empty as an array as result. Now, loop on products and inside that if product.name.includes(searchQuery) then push the product on that empty array. Call the function where you need it and pass the parameters as well. That's how we can get the product by name.</p>
                        </div>
                    </div>
                    <div className="question-answer p-5 shadow-lg rounded my-5">
                        <div className="question">
                            <h5>Q6. What is a unit test? Why should write unit tests?</h5>
                        </div>
                        <hr />
                        <div className="answer">
                            <p>Unit test to ensure a unit or components of application meets its design and behaves intended. For a unit test, a unit could be an individual function, method, procedure, module, or object. Unit testing helps to fix bugs in the development cycle and save costs. Also, helps with code re-use. So, the unit test helps developers to understand the testing code base and enables them to make changes quickly.</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Blog;