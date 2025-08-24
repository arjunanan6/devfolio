/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Arjun Anandkumar",
  title: "Hi, I'm Arjun",
  subTitle: emoji(
    "I'm a passionate Data Engineer with a lot of hands-on experience in various databases, programming languages, cloud providers and industries. Although Python, Airflow, Snowflake, dbt and AWS are the main flavors these days, I'm quite open to new experiences and I think my accumulated knowledge helps me fit in practically anywhere."
  ),
  // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/arjunanan6",
  linkedin: "https://www.linkedin.com/in/arjunanand1/",
  gmail: "arjun@arjunanand.me",
  medium: "https://medium.com/@arjun.anand1",

  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "I'm currently working as a Data Platform Engineer for Norlys. The absolute best thing was setting up an entirely new data platform from scratch within a month. \nThe all-time goal? Become a full-stack data nerd",
  skills: [
    emoji(
      "⚡ Develop stable, scalable and intuitive data platforms."
    ),
    emoji("⚡ Write powerful, reliable yet easily understandable ingestions."),
    emoji(
      "⚡ Improve observability and adhere to zero-trust policies."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "kubernetes",
      fontAwesomeClassname: "fas fa-cog"
    },
    {
      skillName: "terraform",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "sql-databases",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "snowflake",
      fontAwesomeClassname: "fas fa-snowflake"
    },
    {
      skillName: "airflow",
      fontAwesomeClassname: "fas fa-fan"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    }

  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Databases", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Distributed computing",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    },
    {
      Stack: "Infrastructure-as-Code",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Platform Engineer",
      company: "Norlys",
      companylogo: require("./assets/images/norlys.webp"),
      date: "Jan 2025 – Present",
      desc: "Data platform engineer in the platform engineering team building up a brand new data platform for the new organisation.",
      descBullets: [
        "Built a new data platform (Snowflake, dbt cloud mainly) for multiple data domain teams in under a month, with all the bells and whistles.",
        "Leading the charge in defining good development practices, quick prototyping and security compliance.",
        "Keenly observing feedback and making incremental improvements to the platform."
      ]
    },
    {
      role: "Data Engineer",
      company: "Telia Denmark (now Norlys)",
      companylogo: require("./assets/images/telia.jpeg"),
      date: "Mar 2024 – Dec 2024",
      desc: "First ever job with the official 'Data Engineer' tag, but it was thoroughly enjoyable.",
      descBullets: [
        "Came in with a lot of Airflow expertise, and since that's so central, it was quick for me to adapt to the tasks at hand.",
        "Had a significant influence in automating and improving existing processes AND documentation.",
        "Contributed a lot of new ingestions, and explored new open-source tools to better unify the codebase."
      ]
    },
    {
      role: "Senior Automation Engineer",
      company: "Ørsted ",
      companylogo: require("./assets/images/orsted_logo.jpeg"),
      date: "Dec 2023 – Feb 2024",
      desc: "Continued the ambitious effort in migrating out of Control-M to Apache Airflow and successfully rolled it out across many existing areas as well as several greenfield use-cases. In this role, I retained previous duties while taking on additional responsibilities for key projects aimed at improving user experience. I also partly functioned as a Product Owner, driving an initiative to promote Airflow awareness and assisting new users. As the migration to Airflow progressed, I engaged with various teams to assess and enhance implementations."
    },
    {
      role: "Automation Engineer",
      company: "Ørsted ",
      companylogo: require("./assets/images/orsted_logo.jpeg"),
      date: "Jun 2022 – Nov 2023",
      desc: "Started out at Ørsted  as an 'Automation Engineer' with the aim of replacing the existing enterprise batch orchestration solution of Control-M to Apache Airflow. This role has easily been one of the most challenging and interesting ones I've ever had because I had to think on my feet and deal with constant changes, quick iterations and several security barriers."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Professional Certifications",

  achievementsCards: [
    {
      title: "DeepLearning.AI Data Engineering",
      subtitle:
        "Data Engineering Professional Certification from Deeplearning.ai.",
      image: require("./assets/images/deeplearning.png"),
      imageAlt: "DeepLearning.ai Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/specialization/certificate/6ZNGP7QVQSK0"
        }
      ]
    },
    {
      title: "Certified Kubernetes Application Developer",
      subtitle:
        "CKAD from CNCF",
      image: require("./assets/images/ckad.png"),
      imageAlt: "Terraform Associate",
      footerLink: [
        {
          name: "Certification",
          url: "https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/43dd7d3f-1231-48d7-b9b5-20e50ab13b97-arjun-anandkumar-3560b2e0-19ca-4692-bd79-481f2a108c84-certificate.pdf"
        }
      ]
    },
    {
      title: "Red Hat Certified Engineer",
      subtitle:
        "Red hat certified Linux Engineer",
      image: require("./assets/images/rhce.webp"),
      imageAlt: "Terraform Associate",
      footerLink: [
        {
          name: "Certification",
          url: "https://rhtapps.redhat.com/verify?certId=180-029-258"
        }
      ]
    },
    {
      title: "HashiCorp Certified: Terraform Associate",
      subtitle:
        "Terraform certification from Hashicorp.",
      image: require("./assets/images/hashi_tf.png"),
      imageAlt: "Terraform Associate",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/0f3da0fb-3ec4-4a33-bf65-d65d0fec2be5/linked_in_profile"
        }
      ]
    },
    {
      title: "Apache Airflow Champion",
      subtitle: "Astronomer Champions Program for Apache Airflow",
      image: require("./assets/images/airflow_champ.png"),
      imageAlt: "Airflow Champions Cert",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/ae7a8678-f892-4fab-a8e4-c704f3771ce4/linked_in_profile"
        },
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blog",
  subtitle:
    "Many tears have been shed behind most (if not all) successful projects. To give back to the lovely open-source community, and to keep my writing skills sharp, I occassionally write about what I have learnt or discovered on Linkedin or Medium.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I am branching out a bit and trying to share my knowledge, and was on a podcast called the Data FlowCast",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://www.youtube.com/embed/uvmyD1viyQI?si=uebH1_YoES-Rgl3b"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? Reach me by email, or Linkedin",
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
