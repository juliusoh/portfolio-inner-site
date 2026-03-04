import React from 'react';
import me from '../../assets/pictures/workingAtComputer.jpg';
import meNow from '../../assets/pictures/currentme.jpg';
import { Link } from 'react-router-dom';
export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (
        // add on resize listener
        <div className="site-page-content">
            {/* <img src={me} style={styles.topImage} alt="" /> */}
            <h1 style={{ marginLeft: -16 }}>Welcome</h1>
            <h3>I'm Julius Oh</h3>
            <br />
            <div className="text-block">
                <p>
                    I'm a Software Engineer based in Orange County / Los Angeles,
                    California. I'm a versatile technology enthusiast with
                    experience spanning DevOps, software engineering, and cloud
                    engineering roles.
                </p>
                <br />
                <p>
                    Thank you for taking the time to check out my portfolio. I
                    really hope you enjoy exploring it as much as I enjoyed
                    building it. If you have any questions or comments, feel
                    free to contact me using{' '}
                    <Link to="/contact">this form</Link> or shoot me an email at{' '}
                    <a href="mailto:juliusoh@gmail.com">
                        juliusoh@gmail.com
                    </a>
                </p>
            </div>
            <div className="text-block">
                <h3>About Me</h3>
                <br />
                <p>
                    My proficiency is drawn from a wide range of projects
                    involving the development, deployment, and maintenance of
                    applications, infrastructures, and cloud environments.
                    My experience encompasses tools and frameworks such as
                    Terraform, AWS, Kubernetes, React, Node.js, and TypeScript.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={me} style={styles.image} alt="" />
                    <p>
                        <sub>
                            <b>Figure 1:</b> A real photo of me developing this
                            website :)
                        </sub>
                    </p>
                </div>

                <p>
                    I attended California State University, Long Beach where I
                    earned my Bachelor of Arts. I then completed an Accelerated
                    Development Program at LearningFuze, which launched my
                    career in software engineering.
                </p>
                <br />
                <p>
                    As a Cloud Engineer, I enjoy working directly with clients,
                    addressing their business needs, and providing tailored
                    technical recommendations. I'm adept at using tools like
                    Terraform and Cloud Deployment Manager to create and
                    maintain infrastructures, with a keen eye on implementing
                    security controls for cloud environments.
                </p>
                <br />
                <p>
                    In software engineering, my strength lies in creating and
                    optimizing front-end applications using TypeScript and
                    React, always ensuring cross-browser compatibility and
                    optimal performance. I've also managed and provisioned AWS
                    resources and implemented CI/CD pipelines using GitLab,
                    Jenkins, and CircleCI.
                </p>
                <br />
                <br />
                <div style={{}}>
                    <div
                        style={{
                            flex: 1,
                            textAlign: 'justify',
                            alignSelf: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <h3>My Hobbies</h3>
                        <br />
                        <p>
                            Beyond software, I have a lot of hobbies that I
                            enjoy doing in my free time. I'm passionate about
                            photography and design art. I also practice
                            Brazilian Jiu Jitsu — I'm currently a purple belt
                            at Art Of Jiu Jitsu. Some other hobbies I enjoy are
                            working out, cooking, and programming side projects.
                        </p>
                    </div>
                    <div style={styles.verticalImage}>
                        <img src={meNow} style={styles.image} alt="" />
                        <p>
                            <sub>
                                <b>Figure 2:</b> Me
                            </sub>
                        </p>
                    </div>
                </div>
                <br />
                <br />
                <p>
                    Thanks for reading about me! I hope that you enjoy exploring
                    the rest of my portfolio website and everything it has to
                    offer.
                </p>
                <br />
                <p>
                    If you have any questions or comments I would love to hear
                    them. You can reach me through the{' '}
                    <Link to="/contact">contact page</Link> or shoot me an email
                    at{' '}
                    <a href="mailto:juliusoh@gmail.com">
                        juliusoh@gmail.com
                    </a>
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    contentHeader: {
        marginBottom: 16,
        fontSize: 48,
    },
    image: {
        height: 'auto',
        width: '100%',
    },
    topImage: {
        height: 'auto',
        width: '100%',
        marginBottom: 32,
    },
    verticalImage: {
        alignSelf: 'center',
        // width: '80%',
        marginLeft: 32,
        flex: 0.8,

        alignItems: 'center',
        // marginBottom: 32,
        textAlign: 'center',
        flexDirection: 'column',
    },
};

export default About;
