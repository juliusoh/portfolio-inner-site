import React from 'react';

export interface SoftwareProjectsProps {}

const SoftwareProjects: React.FC<SoftwareProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Software</h1>
            <h3>Projects</h3>
            <br />
            <p>
                Below are some of my most impactful software projects, spanning
                open-source government work, AI integrations, and cloud
                infrastructure.
            </p>
            <br />
            <div className="text-block">
                <h2>VA OCTO VistA API x MCP Server</h2>
                <br />
                <p>
                    Architected and developed a Model Context Protocol (MCP)
                    server for the Department of Veterans Affairs' VistA
                    electronic health record system, enabling AI agents to
                    securely access veteran health data. Built a comprehensive
                    API layer bridging legacy VistA systems with modern AI
                    agents, implementing FHIR-compliant data transformations
                    for interoperability.
                </p>
                <br />
                <p>
                    Established security patterns for AI agent authentication
                    and authorization within federal healthcare systems,
                    ensuring HIPAA compliance. Implemented real-time data
                    synchronization and caching strategies to optimize AI agent
                    performance while maintaining data integrity.
                </p>
                <br />
                <p>
                    <b>Tech:</b> Python, Model Context Protocol (MCP), VistA
                    EHR, FastAPI, FHIR Standards, AI Agent Integration, HIPAA
                    Compliance
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/department-of-veterans-affairs/octo-vista-api-x-mcp-server"
                        >
                            <p>
                                <b>[GitHub]</b> - OCTO VistA API x MCP Server
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h2>US Mobile Design System</h2>
                <br />
                <p>
                    Created and maintained a comprehensive React Native UI
                    component library implementing official US government
                    design specifications for mobile applications. Architected
                    and developed 40+ reusable, accessible components following
                    USWDS (US Web Design System) guidelines, ensuring WCAG 2.1
                    AA compliance.
                </p>
                <br />
                <p>
                    Established a comprehensive documentation site with
                    interactive examples, implementation guides, and best
                    practices for government mobile app developers. Published
                    as an open-source npm package, enabling federal agencies to
                    rapidly build compliant mobile applications with consistent
                    government branding.
                </p>
                <br />
                <p>
                    <b>Tech:</b> React Native, TypeScript, Expo, USWDS,
                    Accessibility (a11y), Component Libraries, npm Publishing
                </p>
            </div>
            <div className="text-block">
                <h2>VA AI Assist</h2>
                <br />
                <p>
                    Contributed to an open-source AI assistance platform for
                    the Department of Veterans Affairs, improving veteran
                    services through intelligent automation. Developed
                    AI-powered tools to streamline veteran support workflows,
                    reducing response times and improving service quality.
                </p>
                <br />
                <p>
                    Implemented secure integration patterns for handling
                    sensitive veteran data while maintaining compliance with
                    federal security standards.
                </p>
                <br />
                <p>
                    <b>Tech:</b> Python, AI/ML Integration, Government
                    Security Compliance, OpenAI APIs, FastAPI
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/department-of-veterans-affairs/ai-assist"
                        >
                            <p>
                                <b>[GitHub]</b> - VA AI Assist
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SoftwareProjects;
