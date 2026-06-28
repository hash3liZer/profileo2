// Resume content, curated from the latest CV (tightened, typos fixed) plus the
// CTF record from blog.shameerkashif.me/resume. Edit here to update /resume.

export const resume = {
  title: 'Senior Security Engineer · Application Security, Agentic AI & Full Stack',
  location: 'Islamabad, Pakistan',
  phone: '', // intentionally omitted from the public site; set to show it
  summary:
    'Application security engineer and founder specializing in Agentic AI, DevSecOps, Cloud, and Full Stack. I build agentic AI tooling for autonomous vulnerability discovery and dynamic testing, lead offensive engagements that turn into publicly credited CVEs, and embed security across CI/CD and infrastructure at scale.',

  highlights: [
    { value: '5+', label: 'Public CVEs' },
    { value: 'OSCP', label: 'OSWP · eCPPTv2' },
    { value: 'Founder', label: 'Shellvoide · KLUE' },
    { value: '#1', label: 'CTF team in Pakistan' },
  ],

  experience: [
    {
      role: 'Security Engineer & Founder',
      org: 'Shellvoide',
      location: 'New Mexico, US',
      period: 'Jan 2026 to Present',
      summary:
        'Building KLUE, an autonomous security testing platform for VAPT, SAST, and DAST, wired directly into CI/CD pipelines.',
      bullets: [
        'Architected and shipped KLUE, an agentic AI penetration testing platform with reasoning based vulnerability discovery and multi model orchestration, delivering working PoCs within 24 hours of kickoff.',
        'Led offensive engagements across companies and open source targets, driving full code, cloud, and application reviews and coordinating responsible disclosure into 5+ publicly credited CVEs.',
        'Built production infrastructure for long running autonomous workloads with containerized multi hour agent orchestration and safe, model driven deployment.',
      ],
    },
    {
      role: 'AI Security Engineer',
      org: 'Nua Security (Trustline)',
      location: 'Riyadh, Saudi Arabia',
      period: 'Sep 2023 to Dec 2025',
      summary:
        'Application security for a bug bounty platform, with cloud native deployments and an agentic AI autonomous pentest prototype.',
      bullets: [
        'Built the core prototype for an agentic AI autonomous penetration testing tool, integrating scanning and exploitation modules with end to end orchestration.',
        'Led application security and remediation for the bug bounty platform, triaging reports and patching web and API vulnerabilities to harden production.',
        'Designed and maintained containerized deployment pipelines, improving release reliability and automation.',
      ],
    },
    {
      role: 'Cyber Security Engineer',
      org: 'The COZM',
      location: 'London, United Kingdom',
      period: 'Jun 2023 to Dec 2024',
      summary:
        'Cloud native, multi tenant AWS infrastructure with DevSecOps embedded across the SDLC.',
      bullets: [
        'Built and operated production AWS infrastructure from the ground up: multi tenant, multi cluster, auto scaling containerized environments.',
        'Integrated SAST and DAST into CI/CD and established remediation workflows to catch vulnerabilities earlier.',
        'Supported ISO 27001 readiness and improved system uptime by 40% through optimized deployment strategies.',
      ],
    },
    {
      role: 'Security Engineer, DevSec',
      org: 'Zettabyte',
      location: 'Islamabad, Pakistan',
      period: 'Jan 2021 to Oct 2023',
      summary:
        'Cyber Range platform built on an OpenStack base layer with automated lab orchestration.',
      bullets: [
        'Extended the OpenStack foundation for the Cyber Range with plugins for compute, networking, and storage.',
        'Built orchestration to provision multi node lab environments automatically, cutting manual setup time.',
        'Ran penetration tests on client web applications and range components with remediation guidance.',
      ],
    },
  ],

  education: [
    {
      degree: 'BS in Cyber Security',
      org: 'Air University, Islamabad',
      period: '2019 to 2023',
      detail:
        '3.48 / 4.0 CGPA. Vice President of the Bits & Bytes Society. Built Subrake, a subdomain takeover toolkit, as the final year project.',
    },
  ],

  leadership: [
    {
      role: 'Co founder & COO',
      org: 'AirOverflow',
      period: '2021 to Present',
      detail:
        "Co founded Pakistan's top CTF team. Organize tech talks, HackTheBox meetups, and live streams, and compete internationally. Leading development of ARENA, a Pakistani CTF learning and training platform.",
    },
  ],

  certifications: [
    { name: 'OSCP', full: 'Offensive Security Certified Professional', year: '2024' },
    { name: 'OSWP', full: 'Offensive Security Wireless Professional', year: '2024' },
    { name: 'eCPPTv2', full: 'Certified Professional Penetration Tester', year: '2023' },
  ],

  awards: [
    { name: 'Digital Pakistan Cyber Security Hackathon, Red & Blue Team CTF', result: 'Winner', year: '2024' },
    { name: 'Turkish COMSEC HackMaster CTF, Istanbul', result: 'Winner', year: '2024' },
    { name: 'Digital Pakistan Cyber Security Hackathon CTF', result: 'Winner', year: '2023' },
    { name: 'Dante & Zephyr Pro Labs, HackTheBox', result: 'Completed', year: '2024' },
    { name: 'Black Hat MEA CTF', result: '20th place', year: '2024' },
    { name: 'HackDay, Paris', result: 'Qualified', year: '2024' },
    { name: 'Digital Pakistan Hackathon, Network Exploitation', result: '2nd place', year: '2021' },
  ],

  skills: [
    {
      title: 'Security',
      items: [
        'Web & API Exploitation',
        'Penetration Testing',
        'Secure Code Review',
        'OWASP Top 10',
        'SAST & DAST',
        'Threat Modelling',
        'Vulnerability Triage',
        'Reconnaissance',
        'Post Exploitation',
      ],
    },
    {
      title: 'Agentic AI',
      items: [
        'LangChain',
        'LangGraph',
        'Deep Agents',
        'LLM Orchestration',
        'Playwright Automation',
        'Langfuse',
        'RAG Pipelines',
      ],
    },
    {
      title: 'DevSecOps & Cloud',
      items: [
        'AWS',
        'OpenStack',
        'Docker',
        'Kubernetes',
        'Terraform',
        'CI/CD',
        'Snyk',
        'SonarQube',
        'Ansible',
      ],
    },
    {
      title: 'Engineering',
      items: [
        'Python',
        'C / C++',
        'JavaScript / TypeScript',
        'Django / DRF',
        'FastAPI',
        'React & Next.js',
        'Node.js',
        'PostgreSQL / Redis',
      ],
    },
  ],
};
