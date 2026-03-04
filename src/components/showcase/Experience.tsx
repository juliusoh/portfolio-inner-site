import React from 'react';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Education</h1>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <div style={styles.headerRow}>
                    <h3>California State University, Long Beach</h3>
                    <b>
                        <p>Bachelor of Arts, Chemistry</p>
                    </b>
                </div>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Certifications</h1>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <ul>
                    <li>
                        <p>Certified Kubernetes Administrator (CKA)</p>
                    </li>
                    <li>
                        <p>
                            <a
                                rel="noreferrer"
                                target="_blank"
                                href="https://www.credly.com/badges/dde3d690-5db6-40e3-8aae-14384387d53d/linked_in_profile"
                            >
                                HashiCorp Certified: Terraform Associate
                            </a>
                        </p>
                    </li>
                    <li>
                        <p>
                            <a
                                rel="noreferrer"
                                target="_blank"
                                href="https://www.credly.com/badges/84f959b7-e8f8-49cd-bca2-b0df73425ad7/linked_in_profile"
                            >
                                AWS Certified Developer - Associate
                            </a>
                        </p>
                    </li>
                    <li>
                        <p>AWS Certified Cloud Practitioner</p>
                    </li>
                    <li>
                        <p>AWS Partner: Accreditation (Technical)</p>
                    </li>
                    <li>
                        <p>
                            <a
                                rel="noreferrer"
                                target="_blank"
                                href="https://www.credential.net/47cbff28-ac6b-436b-b473-0eff22ab9432"
                            >
                                GCP Professional Cloud Architect
                            </a>
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Technical Skills</h1>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <ul>
                    <li>
                        <p>
                            <b>Languages:</b> TypeScript, JavaScript, Python,
                            Golang, Bash, SQL
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Cloud:</b> AWS (EC2, ECS, EKS, Lambda, RDS, S3,
                            CloudFront, VPC, SNS, SQS, EventBridge), GCP
                            (GKE, CloudSQL, Pub/Sub, Cloud Functions), Azure
                            (App Service, Cosmos DB, Functions)
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>IaC & Automation:</b> Terraform (advanced),
                            CloudFormation, Kubernetes (EKS, GKE, AKS), Helm,
                            Docker, Jenkins, GitLab CI, GitHub Actions, CircleCI
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>DevOps & SRE:</b> CI/CD pipeline architecture,
                            Event-Driven Design (SNS, SQS, Pub/Sub),
                            Serverless (Lambda, Step Functions), Microservices,
                            MCP Server, Monitoring (CloudWatch, Prometheus,
                            Grafana), Autoscaling, HA Design
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>AI/ML:</b> AI Agent integration (OpenAI, Google
                            AgentSpace), ML pipeline orchestration, data
                            ingestion pipelines
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Backend:</b> Node.js (Express, Exegesis), REST
                            API design, GraphQL (Apollo Client & Server),
                            Microservices, Event-driven architectures,
                            Serverless patterns
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Frontend & Mobile:</b> React.js, React Native
                            (Expo EAS), Angular, Redux, React Query, TypeScript
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Databases:</b> PostgreSQL, MySQL, DynamoDB,
                            Google Cloud SQL, Cosmos DB, Sequelize ORM
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Testing:</b> Mocha, Jest, Cypress, Sinon,
                            End-to-End & Unit Testing
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
};

export default Experience;
