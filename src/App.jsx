import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import ProfessionalSummary from "./components/ProfessionalSummary"
import TechnicalSkills from "./components/TechnicalSkills"
import Experience from "./components/Experience"
import Education from "./components/Education"
import Certifications from "./components/Certifications"
import Contact from "./components/Contact"
import heroPhoto from "./assets/Profile.PNG"

const stats = [
  { value: '5+ yrs', label: 'Cloud, DevOps & platform engineering' },
  { value: '4 roles', label: 'Enterprise delivery across AWS and Azure' },
  { value: 'EKS · AKS · ECS', label: 'Containers and orchestration at scale' },
  { value: 'LLMs · RAG · GPU', label: 'AI-ready infrastructure experience' },
]

const professionalSummary = `Cloud & DevOps Engineer with 5+ years of experience designing and managing scalable cloud infrastructure across AWS and Azure, with strong expertise in Kubernetes (EKS, AKS), Docker, and microservices architecture. Proven experience building and automating CI/CD pipelines using GitHub Actions, Jenkins, GitLab CI/CD, and Azure DevOps, enabling reliable and efficient deployments. Skilled in Infrastructure as Code (Terraform, CloudFormation, Helm) and implementing secure cloud networking, IAM, RBAC, and Key Vault/KMS solutions. Hands-on experience in developing high-performance platforms supporting AI/ML workloads (LLMs, RAG) on GPU-enabled Kubernetes environments. Strong background in observability (Prometheus, Grafana, CloudWatch, Splunk), automation (Python, Bash), and DevSecOps practices, delivering highly available, secure, and production-ready systems.`

const skillAreas = [
  {
    title: 'Cloud Platforms',
    items: ['AWS (EC2, S3, RDS, Lambda, VPC, IAM, KMS, CloudWatch, Route 53, API Gateway, SQS, EKS, ECS Fargate, ECR, DynamoDB, Amazon Kinesis, AWS Glue, Redshift, ALB)', 'Microsoft Azure (AKS, App Services, Key Vault, Azure AD, ARM Templates)'],
  },
  {
    title: 'Operating Systems',
    items: ['Amazon Linux/Unix', 'Ubuntu', 'Debian', 'Windows Server'],
  },
  {
    title: 'Infrastructure as Code',
    items: ['Terraform', 'AWS CloudFormation', 'Helm', 'AWS CDK', 'Azure Bicep', 'AWS CLI', 'Ansible', 'Puppet', 'Chef'],
  },
  {
    title: 'CI/CD Tools',
    items: ['GitHub Actions', 'GitLab CI/CD', 'Jenkins', 'Maven', 'AWS Code Deploy', 'Azure DevOps', 'Nexus', 'Argo CD (GitOps)'],
  },
  {
    title: 'Containerization & Orchestration',
    items: ['Docker', 'Kubernetes (EKS, AKS, On-Prem)', 'OpenShift', 'Helm', 'Traefik Ingress Controller'],
  },
  {
    title: 'Monitoring & Logging',
    items: ['Prometheus', 'Grafana', 'Amazon CloudWatch', 'Azure Monitor', 'Splunk', 'JMeter', 'Locust', 'Datadog', 'SonarQube'],
  },
  {
    title: 'Security & Compliance',
    items: ['AWS IAM', 'Azure RBAC', 'KMS', 'Azure Key Vault', 'OAuth 2.0', 'VPC Security Groups', 'S3 Bucket Policies', 'Veracode', 'SonarQube', 'HIPAA/GDPR'],
  },
  {
    title: 'Scripting & Automation',
    items: ['Python', 'Bash', 'PowerShell', 'YAML', 'JSON', 'Ansible', 'Golang', 'TypeScript', 'Spring Boot', 'Java', 'JavaScript', 'Node.JS'],
  },
  {
    title: 'Databases & Storage',
    items: ['RDS (PostgreSQL, MySQL)', 'PostgreSQL', 'NoSQL', 'Aurora', 'DynamoDB', 'Elasticsearch', 'Neo4j', 'Azure SQL'],
  },
  {
    title: 'Networking',
    items: ['VPC', 'Public & Private Subnets', 'NAT Gateway', 'Internet Gateway', 'Route Tables', 'CIDR', 'TCP/IP', 'DNS (Route 53)', 'HTTPS', 'SSL/TLS', 'Nginx', 'Load Balancers (Amazon ALB/NLB)', 'Security Groups'],
  },
  {
    title: 'APIs & Microservices',
    items: ['REST APIs', 'SOAP APIs', 'OAuth 2.0', 'AWS API Gateway', 'Lambda', 'GraphQL', 'Kafka'],
  },
  {
    title: 'DevOps Tools',
    items: ['GitOps', 'Blue/Green & Canary Deployments', 'Agile/Scrum', 'Cucumber', 'Runbook Automation'],
  },
  {
    title: 'AI / ML & GPU Platforms',
    items: ['Large Language Models (LLMs)', 'Retrieval-Augmented Generation (RAG)', 'Knowledge Graphs', 'Ollama', 'GPU Infrastructure', 'NVIDIA H200'],
  },
]

const experience = [
  {
    role: 'Software Development Engineer – Cloud Engineer',
    company: 'Amazon · Remote, USA',
    period: 'Apr 2026 – Present',
    points: [
      'Designed and implemented scalable AWS cloud infrastructure using AWS CDK, Amazon ECS Fargate, Application Load Balancer, Amazon RDS PostgreSQL, Amazon ECR, Amazon S3, and Amazon CloudWatch across dev, test, UAT, and production environments.',
      'Built and managed secure AWS VPC networking architecture with public and private subnets, NAT gateways, route tables, internet gateway, security groups, and IAM-based access controls.',
      'Developed reusable Infrastructure as Code modules using AWS CDK and TypeScript for networking, ECS services, databases, monitoring, secrets management, and security configurations.',
      'Deployed and managed containerized microservices using Docker and Amazon ECS Fargate, supporting scalable frontend and backend application deployments.',
      'Created ECS task definitions, ECS services, autoscaling policies, ALB target groups, health checks, and environment-specific deployment configurations for multiple microservices.',
      'Configured ALB routing, SSL integration, path-based routing rules, and target group management for secure and scalable traffic handling.',
      'Implemented CI/CD pipelines using GitHub Actions for automated code builds, Docker image creation, Amazon ECR publishing, Amazon ECS deployments, and AWS CDK infrastructure rollouts.',
      'Automated deployment workflows for Docker build automation, ECR image publishing, ECS rollout validation, deployment verification, and rollback handling.',
      'Integrated AWS Secrets Manager, AWS Systems Manager Parameter Store, and AWS KMS encryption for secure secrets management and environment configuration handling.',
      'Built centralized monitoring and observability solutions using Amazon CloudWatch dashboards, alarms, ECS metrics, ALB metrics, RDS monitoring, and centralized logging.',
      'Collaborated with frontend, backend, and security teams to define infrastructure standards, deployment strategies, environment configurations, networking requirements, and operational processes.',
      'Developed local development environments using Docker Compose, mock services, environment-based configurations, and local PostgreSQL setups to streamline onboarding and testing.',
      'Created deployment runbooks, operational documentation, disaster recovery procedures, backup strategies, and support guides for production support and incident management.',
    ],
  },
  {
    role: 'Cloud Engineer',
    company: 'Caterpillar · Peoria, IL',
    period: 'Sep 2025 – Mar 2026',
    points: [
      'Led design and deployment of GPU-enabled on-prem Kubernetes infrastructure for an enterprise AI platform, supporting LLM inference workloads with high availability and scalability.',
      'Architected and implemented a Retrieval-Augmented Generation pipeline integrating LLMs, PostgreSQL, and Neo4j, enabling context-aware AI applications.',
      'Deployed and managed containerized applications using Docker and Kubernetes, ensuring scalable microservices architecture with autoscaling and self-healing.',
      'Built and managed Docker container images for microservices and AI workloads, enabling consistent and portable deployments across on-prem Kubernetes clusters.',
      'Integrated Docker image build and deployment workflows into CI/CD pipelines using GitHub Actions and Argo CD, including image versioning and secure container registry management.',
      'Implemented CI/CD pipelines using GitHub Actions and Argo CD for automated build, test, and deployment across multiple environments.',
      'Designed and optimized Kubernetes resource scheduling and GPU utilization, improving application performance and infrastructure efficiency.',
      'Configured secure cloud and on-prem authentication using Azure AD, RBAC, and Azure Key Vault, ensuring compliance with enterprise security standards.',
      'Built and maintained infrastructure automation and deployment workflows, improving release reliability and reducing manual effort.',
      'Developed and maintained Ansible playbooks and roles for node provisioning, configuration management, and patch automation.',
      'Designed ingress and networking architecture using Traefik, SSL/TLS, and load balancing, ensuring secure service exposure.',
      'Implemented distributed storage solutions using Longhorn for persistent and highly available data storage across Kubernetes clusters.',
      'Established monitoring and observability using Prometheus, Grafana, and Azure Monitor, enabling proactive alerting and performance tracking.',
      'Built and managed GitHub self-hosted runners to support secure and scalable CI/CD pipelines for Kubernetes workloads.',
      'Conducted performance tuning, capacity planning, and system optimization for high-throughput AI applications.',
      'Performed root cause analysis across Kubernetes, networking, container runtime, and database layers to ensure production stability.',
      'Improved system reliability, scalability, and production performance using DevOps and cloud automation best practices.',
      'Collaborated with cross-functional teams to implement DevOps best practices, automation, and cloud-native solutions.',
    ],
  },
  {
    role: 'Cloud Engineer',
    company: 'British Airways · New York, USA',
    period: 'Jun 2024 – Sep 2025',
    points: [
      'Designed and deployed AWS EKS-based Kubernetes infrastructure using Auto Scaling and ALB/NLB, supporting high-traffic, production-grade flight booking applications.',
      'Provisioned and managed cloud infrastructure using Terraform, AWS CloudFormation, and Helm, enabling automated and scalable Infrastructure as Code deployments.',
      'Built and secured AWS VPC architecture with subnets, route tables, NAT gateway, IAM, and KMS, ensuring compliance with enterprise security and governance standards.',
      'Built and optimized CI/CD pipelines using GitHub Actions and Jenkins for automated build, test, and deployment of 40+ microservices.',
      'Implemented Docker containerization and Kubernetes orchestration on EKS to deploy scalable, highly available microservices architecture.',
      'Designed and deployed REST APIs using AWS API Gateway and AWS Lambda, enabling serverless and event-driven application workflows.',
      'Developed Python automation scripts with Boto3 for EKS scaling, S3 audits, and CloudWatch log management, improving operational efficiency and reducing manual tasks.',
      'Implemented blue/green and canary deployment strategies using Kubernetes and Helm, enabling zero-downtime releases and improved deployment reliability.',
      'Configured monitoring and observability using Prometheus, Grafana, AWS CloudWatch, and Splunk, ensuring proactive alerting and system performance monitoring.',
      'Performed performance testing and load testing using JMeter and Locust, optimizing autoscaling and improving application performance under dynamic workloads.',
      'Integrated SonarQube into CI/CD pipelines for static code analysis, enforcing quality gates and improving code quality and secure deployments.',
      'Designed and implemented high availability and disaster recovery solutions across multi-AZ using Route 53 and CloudFormation failover mechanisms.',
      'Built and maintained secure SOAP APIs for IATA integrations, ensuring compliance with airline data standards and external system interoperability.',
      'Collaborated with QA and development teams to implement API testing using Postman, SoapUI, and automation scripts, improving release quality and reducing defects.',
      'Participated in Agile and Scrum processes, including sprint planning, release coordination, and cross-team collaboration for continuous delivery.',
      'Applied DevOps best practices, automation, and cloud-native architecture patterns to improve system reliability, scalability, and deployment efficiency.',
    ],
  },
  {
    role: 'Cloud Engineer',
    company: 'TCS · Hyderabad, India',
    period: 'May 2021 – Jul 2023',
    points: [
      'Provisioned and managed AWS cloud infrastructure using EC2, VPC, S3, RDS, Lambda, and IAM to support scalable and secure financial applications.',
      'Automated Infrastructure as Code using Terraform and AWS CloudFormation, enabling consistent deployments across dev, UAT, and production environments.',
      'Built and optimized CI/CD pipelines using GitLab CI and AWS CodeDeploy for automated build, test, and deployment of containerized microservices.',
      'Implemented Docker containerization and Kubernetes orchestration on Amazon EKS to deploy scalable, highly available microservices architecture.',
      'Deployed and managed microservices on Kubernetes using Helm charts, improving deployment automation and release consistency.',
      'Developed serverless applications using AWS Lambda, API Gateway, and SQS to support real-time payment processing systems.',
      'Created Python and Bash automation scripts for EC2 lifecycle management, AMI backups, log cleanup, and CloudWatch monitoring integration.',
      'Designed and enforced AWS security best practices using IAM policies, KMS encryption, and S3 bucket policies, ensuring compliance with enterprise standards.',
      'Configured monitoring and observability using Prometheus, Grafana, and AWS CloudWatch, enabling proactive alerting and performance monitoring.',
      'Performed root cause analysis and incident management using CloudTrail, VPC Flow Logs, and Splunk, improving system reliability and uptime.',
      'Managed API lifecycle for REST and SOAP APIs, including versioning, authentication, and schema validation using cloud-native services.',
      'Maintained runbooks, documentation, and automation repositories in Git, supporting operational efficiency and team onboarding.',
      'Collaborated with cross-functional teams to implement DevOps and DevSecOps practices, improving deployment automation and system security.',
      'Participated in Agile and Scrum processes, delivering sprint-based cloud and DevOps solutions.',
      'Implemented and enforced compliance and governance policies aligned with HIPAA and GDPR in collaboration with InfoSec teams.',
    ],
  },
]

const education = [
  {
    school: 'Eastern Illinois University · Charleston, IL',
    program: 'MS in Computer Science',
    period: 'Aug 2023 – May 2025',
    details: ['Relevant Coursework: Cloud Computing, DevOps, Infrastructure as Code (IaC), CI/CD, Kubernetes, Scripting, Cloud Architecture, Security, AI Models, and Automation Tools'],
  },
  {
    school: 'Chennai Institute of Technology',
    program: 'B.E, Electronics & Communication Engineering',
    period: '2017 – 2021',
    details: ['CGPA: 8.0'],
  },
  {
    school: 'Sri Chaitanya Junior College',
    program: 'Intermediate (Science)',
    period: '2015 – 2017',
    details: ['Marks: 953'],
  },
  {
    school: 'Ratnam High School',
    program: 'High School',
    period: '2014 – 2015',
    details: ['CGPA: 8.3'],
  },
]

const certifications = [
  'AWS Certified Solution Architect',
  'Microsoft Azure Fundamentals',
  'AWS Certified Cloud Practitioner',
  'Pega Certified System Architect (CSA)',
  'Pega Certified Senior System Architect (CSSA)',
  'Certified Kubernetes',
  'Certified Terraform',
]

function App() {
  return (
    <div className="flex flex-col">
      <Navbar />
      
      <Hero 
        heroPhoto={heroPhoto}
        professionalSummary={professionalSummary}
        stats={stats}
      />

      <div className="max-w-[95%] xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 pb-16 sm:pb-20 flex flex-col gap-10 sm:gap-14">

      <ProfessionalSummary professionalSummary={professionalSummary} />

      <TechnicalSkills skillAreas={skillAreas} />

      <Experience experience={experience} />

      <Education education={education} />

      <Certifications certifications={certifications} />

      <Contact />
      </div>
    </div>
  )
}

export default App
