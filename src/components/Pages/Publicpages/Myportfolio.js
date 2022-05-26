import React from 'react';
import { Container } from 'react-bootstrap';
import PageHeader from '../../Global/Pagecomponents/PageHeader';

const Myportfolio = () => {
    return (
        <div>

            <PageHeader title="My Portfolio" subtitle="About Me and my projects"></PageHeader>
            <Container>
                <div className="py-5">
                    <div className="rounded shadow-lg p-5">
                        <h2>Arifuzzaman Tusar</h2>
                        <p>Full Stack Web Developer</p>
                        <p>Email: arifuzzamantusar50gmail.com</p>
                        <p>Education: Completed B.Sc. in Computer Science and Engineering</p>
                        <div className="h4 py-3">My Programming skills</div>

                        <div className="skills d-flex" style={{ flexWrap: 'wrap' }}>
                            <div className="skills rounded shadow-sm p-2 m-2">HTML</div>
                            <div className="skills rounded shadow-sm p-2 m-2">CSS</div>
                            <div className="skills rounded shadow-sm p-2 m-2">Bootstrap 5</div>
                            <div className="skills rounded shadow-sm p-2 m-2">React-Bootstrap</div>
                            <div className="skills rounded shadow-sm p-2 m-2">Tailwind CSS</div>
                            <div className="skills rounded shadow-sm p-2 m-2"> Daisy UI</div>
                            <div className="skills rounded shadow-sm p-2 m-2"> Javascript</div>
                            <div className="skills rounded shadow-sm p-2 m-2"> ES6</div>
                            <div className="skills rounded shadow-sm p-2 m-2"> React</div>
                            <div className="skills rounded shadow-sm p-2 m-2"> React</div>
                            <div className="skills rounded shadow-sm p-2 m-2"> React router</div>
                            <div className="skills rounded shadow-sm p-2 m-2"> Express js </div>
                            <div className="skills rounded shadow-sm p-2 m-2"> Mongodb</div>
                        </div>

                        <div className="h4 py-3">My Recent Project</div>
                        <div className="project">
                            <a className='d-inline-block text-decoration-none p-2 m-2 shadow-sm  text-dark' href="https://gpu-point.web.app/"> GPU POINT </a>
                            <a className='d-inline-block text-decoration-none p-2 m-2 shadow-sm  text-dark' href="https://todo-tusar.web.app/">TODO </a>
                            <a className='d-inline-block text-decoration-none p-2 m-2 shadow-sm  text-dark' href="https://touraholic-4138d.web.app/"> Touraholic </a>
                        </div>

                    </div>
                </div>
            </Container>

        </div>
    );
};

export default Myportfolio;