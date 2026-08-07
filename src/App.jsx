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
      'Architected and implemented secure, highly available AWS cloud infrastructure using Amazon ECS Fargate, VPC, IAM, Amazon RDS, Amazon S3, Application Load Balancer (ALB), CloudWatch, Route Tables, NAT Gateways, and Security Groups, supporting scalable multi-environment enterprise applications.',
      'Designed and automated end-to-end CI/CD pipelines using GitHub Actions, Docker, Amazon ECR, Amazon ECS Fargate, and AWS CDK, enabling automated build, image publishing, infrastructure provisioning, application deployment, rollback, and release management.',
      'Developed reusable Infrastructure as Code (IaC) solutions using AWS CDK (TypeScript) for networking, ECS services, databases, monitoring, secrets management, and security configurations, ensuring standardized and consistent infrastructure deployments.',
      'Deployed and managed containerized microservices using Docker, Amazon ECS Fargate, Application Load Balancer (ALB), ECS Task Definitions, Auto Scaling Policies, and SSL integration, delivering highly available, secure, and production-ready application environments.',
      'Implemented secure cloud architecture by integrating AWS IAM, AWS KMS, AWS Secrets Manager, Systems Manager Parameter Store, Security Groups, and VPC networking, strengthening access control, secrets management, and enterprise security compliance.',
      'Built centralized monitoring and observability solutions using Amazon CloudWatch Dashboards, CloudWatch Alarms, ECS Metrics, ALB Metrics, RDS Monitoring, and centralized logging, enabling proactive alerting, performance optimization, and incident management.',
      'Developed Python and Bash automation scripts to streamline infrastructure provisioning, deployment workflows, environment configuration, operational tasks, and production support, improving deployment consistency and reducing manual effort.',
    ],
  },
  {
    role: 'Cloud Engineer',
    company: 'Caterpillar · Peoria, IL',
    period: 'Sep 2025 – Mar 2026',
    points: [
      'Architected and deployed GPU-enabled Kubernetes (On-Prem) infrastructure supporting enterprise AI platforms, enabling highly available and scalable Large Language Model (LLM) inference workloads for production environments.',
      'Designed and automated infrastructure provisioning and deployment workflows using Terraform, Azure Bicep, ARM Templates, Ansible, and Azure Key Vault, ensuring consistent, secure, and repeatable infrastructure deployments.',
      'Built and implemented automated CI/CD pipelines using GitHub Actions and Argo CD (GitOps), enabling continuous integration, automated testing, image versioning, and application deployment across multiple environments.',
      'Deployed and managed containerized microservices using Docker, Kubernetes, Helm, OpenShift, and Traefik Ingress Controller, implementing autoscaling, self-healing, secure ingress, and highly available application deployments.',
      'Designed and implemented enterprise AI/ML solutions by integrating Retrieval-Augmented Generation (RAG) pipelines with Large Language Models (LLMs), PostgreSQL, Neo4j, and GPU infrastructure, enabling scalable and context-aware AI applications.',
      'Configured secure authentication and access management using Azure Active Directory, Azure RBAC, and Azure Key Vault, enforcing enterprise security standards and protecting cloud-native workloads.',
      'Developed and maintained Ansible playbooks for node provisioning, configuration management, patch automation, and infrastructure lifecycle management, improving deployment consistency and reducing manual operational effort.',
      'Implemented distributed storage and Kubernetes networking using Longhorn, Traefik, SSL/TLS, and load balancing, ensuring persistent storage, secure service exposure, and resilient application connectivity.',
      'Established comprehensive monitoring and observability using Prometheus, Grafana, Azure Monitor, and GitHub self-hosted runners, enabling proactive alerting, infrastructure monitoring, performance optimization, and production stability.',
      'Collaborated with cross-functional Agile teams to perform performance tuning, capacity planning, root cause analysis (RCA), and infrastructure optimization, improving reliability, scalability, and operational efficiency across enterprise AI platforms.',
    ],
  },
  {
    role: 'Cloud Engineer',
    company: 'British Airways · New York, USA',
    period: 'Jun 2024 – Sep 2025',
    points: [
      'Designed and deployed highly available AWS EKS infrastructure using Terraform, AWS CloudFormation, VPC, Public/Private Subnets, NAT Gateway, IAM, KMS, Route 53, and Application Load Balancer (ALB), supporting scalable enterprise applications.',
      'Built and optimized end-to-end CI/CD pipelines using GitHub Actions, Jenkins, Docker, Helm, and Amazon ECR, automating application build, testing, container image management, and Kubernetes deployments across multiple environments.',
      'Deployed and managed containerized microservices using Docker and Kubernetes (Amazon EKS), implementing autoscaling, self-healing, rolling updates, and highly available cloud-native application architectures.',
      'Designed and implemented RESTful APIs using AWS API Gateway and AWS Lambda, enabling secure, scalable, and event-driven application integration for enterprise services.',
      'Automated cloud infrastructure and operational tasks using Python (Boto3) for EKS scaling, Amazon S3 audits, CloudWatch log management, and infrastructure optimization, reducing manual operational effort.',
      'Implemented comprehensive monitoring and observability using Prometheus, Grafana, Amazon CloudWatch, and Splunk, enabling proactive alerting, performance monitoring, root cause analysis, and production support.',
      'Strengthened cloud security by implementing AWS IAM, AWS KMS, SSL/TLS, Security Groups, and secure VPC networking, ensuring enterprise security, compliance, and secure application communication.',
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
