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
  { value: '4+ yrs', label: 'Cloud & DevOps delivery' },
  { value: '70% faster', label: 'Deploy cycles via GitOps' },
  { value: '45% lower', label: 'Cloud spend through governance' },
  { value: '99.99%', label: 'Uptime across multi-cloud' },
]

const professionalSummary = `Innovative, performance-driven Cloud & DevOps Engineer with 4+ years of experience designing, automating, and optimizing multi-cloud infrastructure across AWS and Azure. Skilled in Docker and Kubernetes (EKS/AKS) to deploy scalable, secure, and resilient containerized applications. Deep hands-on with IaC (Terraform, Helm, CloudFormation) and CI/CD (Azure DevOps, Jenkins, GitHub Actions) to accelerate releases and boost reliability. Strong in microservices architecture, observability (App Insights, CloudWatch, Prometheus, Grafana), and cloud security via IAM, KMS, and Key Vault. Adept at DevSecOps automation, cost optimization, and cloud-native best practices to deliver compliant, high-performing, future-ready platforms.`

const skillAreas = [
  {
    title: 'Cloud Platforms',
    items: ['AWS (EC2, S3, RDS, Lambda, VPC, IAM, KMS, CloudWatch, Route 53, API Gateway, SQS, EKS, DynamoDB, Amazon Kinesis, AWS Glue, Redshift)', 'Microsoft Azure (App Services, AKS, Key Vault, ARM Templates)'],
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
    items: ['GitHub Actions', 'GitLab CI/CD', 'Jenkins', 'Maven', 'AWS Code Deploy', 'Azure DevOps', 'Nexus'],
  },
  {
    title: 'Containerization & Orchestration',
    items: ['Docker', 'Kubernetes (EKS, AKS)', 'OpenShift', 'Helm'],
  },
  {
    title: 'Monitoring & Logging',
    items: ['Prometheus', 'Grafana', 'Amazon CloudWatch', 'Azure Monitor', 'Splunk', 'JMeter', 'Locust', 'Datadog'],
  },
  {
    title: 'Security & Compliance',
    items: ['AWS IAM', 'KMS', 'VPC Security Groups', 'S3 Bucket Policies', 'Veracode', 'SonarQube', 'HIPAA/GDPR'],
  },
  {
    title: 'Scripting & Automation',
    items: ['Python', 'Bash', 'PowerShell', 'YAML', 'JSON', 'Golang', 'Spring Boot', 'Java', 'JavaScript', 'Node.JS'],
  },
  {
    title: 'Databases & Storage',
    items: ['RDS (PostgreSQL, MySQL)', 'NoSQL', 'Aurora', 'DynamoDB', 'Elasticsearch', 'Azure SQL'],
  },
  {
    title: 'Networking',
    items: ['NAT Gateway', 'Route Tables', 'DNS (Route 53)', 'Load Balancers (Amazon ALB/NLB)', 'Security Groups'],
  },
  {
    title: 'APIs & Microservices',
    items: ['REST APIs', 'SOAP APIs', 'OAuth 2.0', 'AWS API Gateway', 'Lambda', 'GraphQL', 'Kafka'],
  },
  {
    title: 'DevOps Tools',
    items: ['GitOps', 'Blue/Green & Canary Deployments', 'Agile/Scrum', 'Cucumber', 'Runbook Automation'],
  },
]

const experience = [
  {
    role: 'Cloud Engineer',
    company: 'Caterpillar · Peoria, IL',
    period: 'Sep 2025 – Present',
    points: [
      'Led infrastructure design and deployment of REDI 3.0, an enterprise AI chatbot platform built on GPU-enabled on-prem Kubernetes clusters powered by NVIDIA H200 GPUs to support large-scale LLM inference workloads.',
      'Architected and implemented Retrieval-Augmented Generation (Light RAG) pipeline integrating LLMs with PostgreSQL and Neo4j Knowledge Graph to deliver context-aware, compliance-controlled AI responses.',
      'Deployed and managed LLM models using Ollama within GPU-backed environments to streamline model orchestration, inference serving, and version control.',
      'Designed and optimized GPU scheduling and resource allocation within Kubernetes, significantly improving model inference performance and compute efficiency.',
      'Engineered end-to-end AI platform using Dockerized microservices deployed via Kubernetes with autoscaling, self-healing, and high-availability configurations.',
      'Implemented GitOps-driven deployment strategy using Argo CD, enabling controlled, versioned, and automated rollouts across dev, QA, and production clusters.',
      'Built and configured GitHub self-hosted runners within on-prem infrastructure to support secure CI/CD pipelines for container builds and Kubernetes deployments.',
      'Built enterprise-grade Knowledge Graph in Neo4j to enforce export control policies and enhance semantic search capabilities within chatbot workflows.',
      'Designed secure ingress architecture using Traefik with SSL termination and traffic routing to expose AI services securely within enterprise network.',
      'Implemented distributed storage architecture using Longhorn to ensure persistent, highly available storage for AI workloads across cluster nodes.',
      'Established full-stack observability using Prometheus, Grafana, and Azure Application Insights to monitor GPU utilization, latency, API performance, and system reliability.',
      'Integrated Azure Service Principals, RBAC, and Azure Key Vault to enforce secure authentication, authorization, and secret management across AI services.',
      'Conducted performance benchmarking, capacity planning, and infrastructure optimization for high-throughput AI inference environments.',
      'Owned production stability, performing root cause analysis across Kubernetes networking, GPU drivers, container runtime, and database layers.',
    ],
  },
  {
    role: 'Senior Cloud Engineer',
    company: 'British Airways · New York, USA',
    period: 'Jun 2024 – Sep 2025',
    points: [
      'Designed and developed the NDC platform using AWS EKS, Auto Scaling, and ALB/NLB to serve high-traffic flight bookings.',
      'Architected and provisioned infrastructure using Terraform, Helm, and AWS CloudFormation, enabling seamless deployments for Kubernetes workloads.',
      'Built secure VPC architectures with IAM, KMS, route tables, NAT gateways, and subnets to meet airline security and compliance standards.',
      'Developed and optimized CI/CD pipelines using GitHub Actions and Jenkins to automate the build, scan, and deployment of over 40 microservices.',
      'Designed and implemented RESTful APIs for airline offer and order services using AWS API Gateway and integrated them with AWS Lambda for serverless compute.',
      'Developed and deployed secure SOAP API endpoints for IATA schema validations, interfacing with external airline systems, which improved data accuracy and compliance with industry standards.',
      'Developed and maintained Python scripts using Boto3 to automate EKS node group scaling, perform S3 access audits, and streamline log shipping to CloudWatch and S3 buckets for the NDC microservices platform, enhancing operational efficiency and reducing manual intervention.',
      'Implemented blue/green and canary deployments using Kubernetes and Helm charts to support zero-downtime releases, which increased deployment reliability and minimized service disruptions.',
      'Configured observability solutions using Prometheus, Grafana, CloudWatch, and Splunk, ensuring high availability and proactive monitoring, which improved system uptime and incident response times.',
      'Implemented and monitored containerization using Docker and Kubernetes for scalable deployments in the NDC platform, improving reliability and reducing operational overhead.',
      'Conducted performance testing using JMeter and Locust, tuning autoscaling configurations for dynamic workloads, which optimized resource utilization and improved application performance under varying loads.',
      'Led disaster recovery and high-availability planning across Multi-AZ with Route 53 and CloudFormation-based failover plans, ensuring minimal downtime and enhanced system reliability.',
      'Worked with QA teams to validate API contract testing using Postman, SoapUI, and custom Python scripts, leading to more accurate testing outcomes and reduced defects.',
      'Participated in Agile ceremonies, sprint planning, and release coordination with NDC product owners and QA leads, facilitating smoother project execution and improved team collaboration.',
    ],
  },
  {
    role: 'Cloud Engineer',
    company: 'TCS · Hyderabad, India',
    period: 'Jun 2021 – Jul 2023',
    points: [
      'Provisioned and maintained secure and scalable AWS infrastructure using EC2, VPC, S3, RDS, Lambda, and IAM to support large-scale financial applications.',
      'Automated infrastructure deployments using Terraform and AWS CloudFormation across development, UAT, and production environments.',
      'Developed and improved CI/CD pipelines using GitLab CI and AWS Code Deploy to automate build, test, and release cycles for containerized services, increasing deployment efficiency.',
      'Deployed microservices on Amazon EKS using Helm charts and managed Docker image versions via private container registries.',
      'Led Docker containerization and Kubernetes orchestration for financial services, streamlining deployments, enabling elasticity, and optimizing CI/CD workflows.',
      'Managed versioning, authentication, and schema validation for REST and SOAP APIs using Terraform and CloudFormation templates.',
      'Developed REST APIs using AWS Lambda and API Gateway to support real-time payment workflows and third-party integrations.',
      'Wrote Python and Bash scripts for EC2 instance automation, AMI backups, log cleanup, and CloudWatch alarm integration.',
      'Designed and implemented IAM policies, S3 bucket policies, and KMS encryption strategies to meet internal security and compliance requirements.',
      'Configured Prometheus and Grafana dashboards along with Amazon CloudWatch alerts for proactive infrastructure and application monitoring.',
      'Supported serverless workloads using AWS Lambda, SQS, and API Gateway to enable real-time processing for payment transaction systems.',
      'Conducted root cause analysis and incident response using AWS CloudTrail, VPC Flow Logs, and Splunk logs.',
      'Participated in daily Agile ceremonies, collaborated with cross-functional DevSecOps teams, and delivered sprint-based cloud deliverables.',
      'Maintained detailed runbooks, environment documentation, and automation repositories in Git for future reference and team onboarding.',
      'Developed and enforced cloud security controls and audit policies aligned with HIPAA, GDPR, and internal governance frameworks, collaborating with InfoSec and QA teams for periodic compliance validation.',
    ],
  },
]

const education = [
  {
    school: 'Eastern Illinois University · Charleston, IL',
    program: 'MS in Computer Science',
    period: 'Aug 2023 – May 2025',
    details: ['Relevant Coursework: Cloud Computing, DevOps, Infrastructure as Code (IaC), CI/CD, Kubernetes, Scripting, Cloud Architecture, Security, and Automation Tools'],
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
