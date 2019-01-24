import RepublicImage from './static/working/7republic.png'
import MarvelicImage from './static/working/marvelic.jpg'
import ProntoToolsImage from './static/working/prontotools.png'
import TopvalueImage from './static/working/topvalue.png'

import YWC15Image from './static/projects/ywc15.png'
import LunaImage from './static/projects/luna.png'
import SimplesatImage from './static/projects/simplesat.png'
import KMUTTElectionImage from './static/projects/kmutt_election.png'
import WIPCamp9Image from './static/projects/wipcamp9.jpg'

const data = {
  profile: {
    position: 'Former Software Engineer Intern',
    company_link: 'https://www.prontotools.io/',
    company_name: 'Pronto Tools'
  },
  now: {
    list: [
      `👨🏻‍💻 I'm study at a last semester of 4 year in university. I'm looking for a job.`,
      `✍🏻 I’m trying to publish more on this blog. About my experiences in last year. It've a lot of good and bad moment but all them are great experiences.`,
      '🏃🏻‍ I’m moving to a 16/8 intermittent fasting.',
      '📖 I’m trying to read for at least 30 minutes per day.'
    ],
    updated: 'Jan 2019'
  },
  experiences: [
    {
      time: 'June 2018 – August 2018',
      title: 'Software Engineer Intern',
      location: 'Pronto Tools',
      locationUrl: 'https://prontotools.io',
      logo: ProntoToolsImage,
      description: `&bull; Worked with simplesat.io team to develop the simple satisfaction system.
      &bull; Using React / Django with TDD concept
      &bull; UI Testing with Robot Framework
      &bull; Using CI/CD with CircleCI.
      &bull; Learned and following Agile methodology from certificated scrum master and product owner.
      `
    },
    {
      time: 'June 2016 – July 2016',
      title: 'Full Stack Developer Intern',
      location: 'Marvelic Engine Co., Ltd',
      locationUrl: 'https://www.marvelic.co.th/en/',
      logo: MarvelicImage,
      description: `&bull; An internet application studio
      &bull; Developed an e-commerce website with Magento and created Magento plugin to use in the production.
      `
    },
    {
      time: 'April 2015 – June 2015',
      title: 'Front-End Developer (Volunteer)',
      location: 'Topvalue Co., Ltd',
      locationUrl: 'https://www.topvalue.com/',
      logo: TopvalueImage,
      description: `&bull; A C2C & B2C e-commerce startup
      &bull; Coded HTML, CSS, Javascript, and some part of PHP
      &bull; Learned about corporation culture`
    },
    {
      time: 'March 2014 – May 2014',
      title: 'Web Developer Intern',
      location: '7republic',
      locationUrl: 'https://www.facebook.com/sevenrepublic/',
      logo: RepublicImage,
      description: `&bull; An internet application studio
      &bull; Coded HTML, CSS, Javascript and developed with front end frameworks such as jQuery.`
    }
  ],
  projects: [
    {
      time: '2018',
      location: 'School of Information Technology, KMUTT',
      locationUrl: 'http://sit.kmutt.ac.th',
      title: 'Luna.codes',
      shortDesc: 'Web Application for Improving (Java) Programming Skill',
      logo: LunaImage,
      description: `&bull; Inspiration by HackerRank, LeetCode, CodeSignal, CodinGame but focuses on education purpose.
      &bull; Working with teammates in Agile methodology
      &bull; Developing by React, Django, NodeJS, Java and implement on Docker Compose, CI/CD with CircleCI
      `,
      tags: [
        'React',
        'MobX',
        'Django',
        'PostgresDB',
        'NodeJS',
        'Javac',
        'Docker Compose/Swarm',
        'CircleCI',
        'Datadog',
        'Zabbix'
      ],
      githubUrl: '',
      projectUrl: '',
      mediumUrl: ''
    },
    // {
    //   time: 'July 2017',
    //   location: 'School of Information Technology, KMUTT',
    //   locationUrl: '',
    //   title: 'SIT Connect 2018',
    //   shortDesc: 'The KMUTT Student Council and Student Organization Election',
    //   logo:
    //     'https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_120,w_120,f_auto,b_white,q_auto:eco/v1476930694/his8lxs1d2ljks4jyzd0.png',
    //   description: `...`,
    //   tags: ['React', 'Redux', 'Django'],
    //   githubUrl: '',
    //   projectUrl: '',
    //   mediumUrl: ''
    // },
    {
      time: '2018',
      location: 'Pronto Tools',
      locationUrl: '',
      title: 'Simplesat.io',
      shortDesc:
        'The CSAT/NPS Satisfaction System that can integrate with ConnectWise, Zendesk, and Autotask',
      logo: SimplesatImage,
      description: `&bull; Developed by React, Django with Micro-services concept
      &bull; Doing UI testing, Unit test with TDD concept.`,
      tags: [
        'React',
        'Redux',
        'Django',
        'Microservices',
        'Pytest',
        'Robot Framework',
        'PostgresDB',
        'CircleCI'
      ],
      githubUrl: '',
      projectUrl: '',
      mediumUrl: ''
    },
    {
      time: '2018',
      location: 'Alchemist',
      locationUrl: 'https://alchemist.itbangmod.in.th',
      title: 'KMUTT Election 2018',
      shortDesc: 'The KMUTT Student Council and Student Organization Election',
      logo: KMUTTElectionImage,
      description: `&bull; Developed by React, Laravel, MariaDB with docker load balancing system
      &bull; Developed with cybersecurity awareness according to OWASP Top 10
      `,
      tags: ['React', 'Redux', 'Laravel', 'Docker', 'Nginx', 'OWASP TOP TEN', 'Jenkins'],
      githubUrl: '',
      projectUrl: '',
      mediumUrl: ''
    },
    {
      time: '2017',
      location: 'Thai Webmaster Association',
      locationUrl: 'https://www.webmaster.or.th/',
      title: 'Young Webmaster Camp 15th Website',
      shortDesc: '',
      logo: YWC15Image,
      description: `&bull; Developed by React with NextJS Framework for Server-side Rendering`,
      tags: ['React', 'Redux', 'NodeJS', 'MongoDB', 'Docker'],
      githubUrl: '',
      projectUrl: '',
      mediumUrl: ''
    },
    // {
    //   time: 'July 2017',
    //   location: 'Alchemist',
    //   locationUrl: '',
    //   title: 'KMUTT Club 2018',
    //   shortDesc: '',
    //   logo:
    //     'https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_120,w_120,f_auto,b_white,q_auto:eco/v1476930694/his8lxs1d2ljks4jyzd0.png',
    //   description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet ipsa nam unde amet consequuntur! Perspiciatis facilis quas voluptate?'`,
    //   tags: ['React', 'Redux', 'Django'],
    //   githubUrl: '',
    //   projectUrl: '',
    //   mediumUrl: ''
    // },
    {
      time: '2016 -',
      location: 'School of Information Technology, KMUTT',
      locationUrl: 'http://sit.kmutt.ac.th',
      title: 'WIP Camp 8th and 9th — Web Application and Tools',
      shortDesc: '',
      logo: WIPCamp9Image,
      description: `&bull; Developed a registration system with Laravel and the camp landing web page with Greensock, jQuery`,
      tags: ['jQuery', 'Greensock', 'Laravel', 'MariaDB', 'CentOS'],
      githubUrl: '',
      projectUrl: '',
      mediumUrl: ''
    }
    // {
    //   time: 'July 2017',
    //   location: 'Alchemist',
    //   locationUrl: '',
    //   title: 'SIT CRAFT CAMP Website',
    //   shortDesc: '',
    //   logo:
    //     'https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_120,w_120,f_auto,b_white,q_auto:eco/v1476930694/his8lxs1d2ljks4jyzd0.png',
    //   description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet ipsa nam unde amet consequuntur! Perspiciatis facilis quas voluptate?'`,
    //   tags: ['React', 'Redux', 'Django'],
    //   githubUrl: '',
    //   projectUrl: '',
    //   mediumUrl: ''
    // },
    // {
    //   time: 'July 2017',
    //   location: 'KMUTT',
    //   locationUrl: '',
    //   title: 'TEDxKMUTT Landing Website',
    //   shortDesc: '',
    //   logo:
    //     'https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_120,w_120,f_auto,b_white,q_auto:eco/v1476930694/his8lxs1d2ljks4jyzd0.png',
    //   description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet ipsa nam unde amet consequuntur! Perspiciatis facilis quas voluptate?'`,
    //   tags: ['React', 'Redux', 'Django'],
    //   githubUrl: '',
    //   projectUrl: '',
    //   mediumUrl: ''
    // }
  ]
}

export default data
