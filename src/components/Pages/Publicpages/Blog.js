import React from 'react';
import { Container } from 'react-bootstrap';
import PageHeader from '../../Global/Pagecomponents/PageHeader';

const Blog = () => {
    return (
        <div>
            <PageHeader title="Blogs" subtitle="All wood work tools"></PageHeader>
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
                            <p>There are many ways to optimize react apps like memoizing react components to avoid re-render. Also, keeping component state local. Then, if the application renders if long list we can use the technique of windowing which renders a small subset of rows at a given time. We can also use lazy loading images to prevent the creation of unnecessary DOM nodes to boost performance. And, there is a way if you are using webpack 4 then in module set mode option to production which tells webpack to use built-in optimization.</p>
                        </div>
                    </div>
                    <div className="question-answer p-5 shadow-lg rounded my-5">
                        <div className="question">
                            <h5>Q4. Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h5>
                        </div>
                        <hr />
                        <div className="answer">
                            <p>There are many ways to optimize react apps like memoizing react components to avoid re-render. Also, keeping component state local. Then, if the application renders if long list we can use the technique of windowing which renders a small subset of rows at a given time. We can also use lazy loading images to prevent the creation of unnecessary DOM nodes to boost performance. And, there is a way if you are using webpack 4 then in module set mode option to production which tells webpack to use built-in optimization.</p>
                        </div>
                    </div>
                    <div className="question-answer p-5 shadow-lg rounded my-5">
                        <div className="question">
                            <h5>Q5. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h5>
                        </div>
                        <hr />
                        <div className="answer">
                            <p>There are many ways to optimize react apps like memoizing react components to avoid re-render. Also, keeping component state local. Then, if the application renders if long list we can use the technique of windowing which renders a small subset of rows at a given time. We can also use lazy loading images to prevent the creation of unnecessary DOM nodes to boost performance. And, there is a way if you are using webpack 4 then in module set mode option to production which tells webpack to use built-in optimization.</p>
                        </div>
                    </div>
                    <div className="question-answer p-5 shadow-lg rounded my-5">
                        <div className="question">
                            <h5>Q6. What is a unit test? Why should write unit tests?</h5>
                        </div>
                        <hr />
                        <div className="answer">
                            <p>There are many ways to optimize react apps like memoizing react components to avoid re-render. Also, keeping component state local. Then, if the application renders if long list we can use the technique of windowing which renders a small subset of rows at a given time. We can also use lazy loading images to prevent the creation of unnecessary DOM nodes to boost performance. And, there is a way if you are using webpack 4 then in module set mode option to production which tells webpack to use built-in optimization.</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Blog;