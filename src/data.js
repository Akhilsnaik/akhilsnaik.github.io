export const profile = {
  name: 'Akhil S Naik',
  title: 'Senior Member of Technical Staff',
  company: 'Salesforce',
  tagline:
    'Building and supporting Mule connectors on the Customer-Centric Engineering team at MuleSoft. Formerly a Senior Staff Software Engineer at Cloudera, and a committer on Apache Ambari & Apache Hue.',
  email: 'akhilsnaikk@gmail.com',
  github: 'https://github.com/akhilsnaik',
  linkedin: 'https://www.linkedin.com/in/akhilsnaik/',
  twitter: 'https://x.com/akhilsnaik',
  instagram: 'https://instagram.com/akhilsnaik',
  resume: '/files/Akhil_S_Naik_Resume.pdf',
  avatar: '/images/akhil.png',
};

export const about = [
  "I'm a Senior Member of Technical Staff at Salesforce, working with the MuleSoft Connectors team in Customer-Centric Engineering. I spend most of my time building, maintaining, and troubleshooting connectors that help customers connect MuleSoft to the systems they rely on—from databases and messaging platforms to cloud services and enterprise applications.",
  "Before Salesforce, I spent seven years at Hortonworks and Cloudera (2017–2024), working across the Apache Hadoop ecosystem. I'm a committer on Apache Ambari and Apache Hue, and a contributor to Apache Zeppelin. My work has ranged from backend engineering in Java and Python to frontend development, distributed systems, and solving the kind of production issues that require digging through logs, code, protocols, and infrastructure to understand what is really happening.",
  "I enjoy engineering problems that sit somewhere between **building things and figuring things out**. Whether it's debugging a stubborn SFTP connection, understanding a Kafka or database failure, improving a connector, or simplifying a repetitive investigation, I like getting to the root cause and turning that understanding into something useful.",
  "Outside of work, I enjoy badminton, cycling, traveling, reading, and building small web projects just for the fun of it. I'm also curious about machine learning, deep learning, and computer vision—and generally enjoy experimenting with new technologies and ideas.",
];

export const experience = [
  {
    company: 'Salesforce (MuleSoft)',
    role: 'Senior Member of Technical Staff — Customer-Centric Engineering',
    duration: 'Feb 2024 — Present',
    points: [
      'Build and support Mule connectors on the Customer-Centric Engineering team at MuleSoft.',
      "Work directly on issues affecting customer integrations, contributing to customer success and connector reliability.",
    ],
  },
  {
    company: 'Cloudera Data Platform',
    role: 'Senior Staff Software Engineer — Backline Team',
    duration: 'Jan 2019 — Feb 2024',
    points: [
      'Backline engineer for Apache Ambari, Apache Hue, and Cloudera Manager — analyzing and resolving customer-reported issues across the cluster management stack.',
      'Committer on Apache Ambari and Apache Hue (Apache Software Foundation); active in code review and issue triage for the Hue open-source community.',
      'UI developer for supportmatrix.cloudera.com, which surfaces product compatibility across Cloudera distributions.',
      'On-call for critical/hot issues including cluster upgrades; write troubleshooting guides and mentor customer-facing engineers.',
    ],
  },
  {
    company: 'Hortonworks Data Platform',
    role: 'Staff Software Engineer — Break/Fix & Automation',
    duration: 'May 2017 — Jan 2019',
    points: [
      'Subject-matter expert for customer-reported issues on Apache Ambari, shipping hotfixes and features on top of the open-source codebase.',
      'Code contributor to Apache Ambari, Apache Zeppelin, YARN UI, Tez View, Hive Views, and the HDFS Files View.',
      'UI engineer for Hortonworks automation initiatives, the Support Matrix project, and the SmartSearch diagnostics tool.',
      'Stack: Java, JavaScript, Ember.js / AngularJS, Handlebars.js, Python (agent scripts), jQuery, Bootstrap, LESS.',
    ],
  },
  {
    company: 'Huawei Technologies',
    role: 'Software Development Engineer → Senior SDE',
    duration: 'Dec 2012 — May 2017',
    points: [
      "Built a web client for Huawei's OSS platform used by telecom operators worldwide: network element management, system monitoring, and alarm handling.",
      'Implemented topology visualization for entire network layouts using HTML5 Canvas.',
      'Stack: Java, JavaScript (ES6), Handlebars.js, Canvas.',
    ],
  },
];

export const education = {
  school: 'Viswajyothi College of Engineering and Technology, MG University',
  degree: 'B.Tech, Computer Science & Engineering',
  duration: '2008 — 2012',
  detail: '80.42%',
};

export const skills = {
  Languages: ['Java', 'Python', 'JavaScript', 'HTML5', 'CSS / LESS / Sass'],
  'Frameworks & Libraries': ['MuleSoft / Anypoint', 'React', 'Ember.js', 'AngularJS', 'Django', 'Node.js / Express', 'Handlebars.js', 'jQuery', 'Tailwind CSS'],
  'Tools & Practices': ['Git', 'Maven', 'Linux', 'JUnit', 'Canvas', 'Bootstrap'],
};

export const projects = [
  {
    name: 'Flip A Coin',
    description:
      'A free online coin-flip tool with a realistic 3D animation, spoken heads-or-tails result, dark/light theme, and a live global toss counter.',
    link: 'https://akhilsnaik.github.io/flipacoin/',
    code: 'https://github.com/akhilsnaik/flipacoin',
    tags: ['JavaScript', 'CSS'],
  },
  {
    name: 'Keyboard Smash',
    description:
      'A toddler-friendly page inspired by toddlersmash.com — press any key or tap the screen and emoji pop and float away with a little sound.',
    link: 'https://akhilsnaik.github.io/smashkeyboard/',
    code: 'https://github.com/akhilsnaik/smashkeyboard',
    tags: ['JavaScript'],
  },
];

export const openSource = [
  { name: 'Apache Ambari', role: 'Committer', url: 'https://ambari.apache.org/' },
  { name: 'Apache Hue', role: 'Committer', url: 'https://github.com/cloudera/hue' },
  { name: 'Apache Zeppelin', role: 'Contributor', url: 'https://zeppelin.apache.org/' },
];
