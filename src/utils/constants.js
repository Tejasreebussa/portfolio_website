import {
  FaHtml5,
  FaCss3,
  FaPython,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaJava,
  FaFlask,
} from "react-icons/fa";

import { BsFiletypeJson, BsFiletypeXml, BsFileExcel } from "react-icons/bs";

import {
  TbBrandJavascript,
  TbBrandCpp,
  TbBrandBootstrap,
} from "react-icons/tb";
import { BiLogoJquery, BiLogoPostgresql } from "react-icons/bi";
import {
  SiPostman,
  SiKeras,
  SiTensorflow,
  SiOpencv,
  SiPandas,
  SiNumpy,
  SiTableau,
  SiPowerbi,
  SiMysql,
  SiMongodb,
} from "react-icons/si";
import { AiFillCode } from "react-icons/ai";
import { FaHashnode, FaAws, FaVuejs } from "react-icons/fa6";
import {
  BsGlobe,
  BsCodeSlash,
  BsRobot,
  BsFileBarGraph,
  BsGit,
  BsMarkdown,
} from "react-icons/bs";
import { GiArchiveResearch, GiArtificialIntelligence } from "react-icons/gi";
import { FcElectronics } from "react-icons/fc";

export const links = [
  { text: "Home", path: "/" },
  { text: "About", path: "/about" },
  { text: "Skills", path: "/skills" },
  { text: "Education", path: "/blogs" },
  { text: "Projects", path: "/projects" },
  { text: "Experience", path: "/experience" },
  { text: "Contact", path: "/contact" },
];

export const interestsData = [
  {
    interest: "Data Analytics",
    icon: BsCodeSlash,
  },
  {
    interest: "Data Science",
    icon: FaHashnode,
  },
  {
    interest: "Machine Learning",
    icon: FcElectronics,
  },
  {
    interest: "Market Research",
    icon: GiArchiveResearch,
  },
  {
    interest: "Visualization",
    icon: BsFileBarGraph,
  },
  {
    interest: "Software Development",
    icon: AiFillCode,
  },
  {
    interest: "Robotics",
    icon: BsRobot,
  },
  {
    interest: "Web Scraping",
    icon: BsGlobe,
  },
];

export const skillsData = [
  {
    name: "JAVA",
    icon: FaJava,
  },
  {
    name: "Python",
    icon: FaPython,
  },
  {
    name: "Javascript",
    icon: TbBrandJavascript,
  },
  {
    name: "C/C++",
    icon: TbBrandCpp,
  },
  {
    name: "Keras",
    icon: SiKeras,
  },
  {
    name: "Tenserflow",
    icon: SiTensorflow,
  },
  {
    name: "OpenCV",
    icon: SiOpencv,
  },
  {
    name: "Pandas",
    icon: SiPandas,
  },
  {
    name: "Numpy",
    icon: SiNumpy,
  },
  {
    name: "Tableau",
    icon: SiTableau,
  },
  {
    name: "Power BI",
    icon: SiPowerbi,
  },
  {
    name: "HTML5",
    icon: FaHtml5,
  },
  {
    name: "CSS3",
    icon: FaCss3,
  },
  {
    name: "Jquery",
    icon: BiLogoJquery,
  },
  {
    name: "XML",
    icon: BsFiletypeXml,
  },
  {
    name: "JSON",
    icon: BsFiletypeJson,
  },
  {
    name: "Excel",
    icon: BsFileExcel,
  },
  {
    name: "Bootstrap",
    icon: TbBrandBootstrap,
  },
  {
    name: "MYSQL",
    icon: SiMysql,
  },
  {
    name: "Postgres",
    icon: BiLogoPostgresql,
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
  },
  {
    name: "AWS",
    icon: FaAws,
  },
  {
    name: "Vue.Js",
    icon: FaVuejs,
  },
  {
    name: "Flask",
    icon: FaFlask,
  },

  {
    name: "Postman",
    icon: SiPostman,
  },
  {
    name: "Git",
    icon: BsGit,
  },
  {
    name: "Github",
    icon: FaGithub,
  },
  {
    name: "ChatGPT",
    icon: GiArtificialIntelligence,
  },
];
export const educationData = [
  {
    name: "San Jose State University",
    designation: "Masters in Data Analystics",
    location: "San Jose, CA",
    duration: "Aug 2022 - May 2024",
    grade: "3.6/4.0",
    companyImg: "sjsu.jpeg",
  },
  {
    name: "CVR College of Engineering",
    designation:
      "Bachelor of Technology in Electrical and Electronics Engineering",
    location: "Hyderabad, India",
    duration: "Aug 2017 - May 2021",
    grade: "3.8/4.0",
    companyImg: "cvr.jpeg",
  },
];
export const workData = [
  {
    company: "Workato",
    designation: "CS Data Management Intern",
    duration: "Jul 2023 - Present",
    companyImg: "partner-logo-6.png",
    description: (
      <>
        <ul>
          <li>
            Demonstrating expertise in utilizing Sigma Computing, Snowflake, and
            Salesforce to orchestrate data management and visualization,
            amplifying organizations data-driven capabilities.
          </li>
          <li>
            Leading in-depth analysis of historical data, identifying critical
            trends and patterns empowered organization to respond to market
            shifts by creating 10 sigma dashboards.
          </li>
          <li>
            Accomplishing 30% reduction in dashboard loading times through data
            optimization, enhancing user experience.
          </li>
        </ul>
      </>
    ),
  },
  {
    company: "Accenture",
    designation: "Application Developer Analyst",
    duration: "Jul 2021 - Jul 2022 ",
    companyImg: "accenture.svg",
    description: (
      <>
        <ul>
          <li>
            Managed as Developer on the ServiceNow platform for Data
            Architecture Handling achieved a 20% reduction in report execution
            time by performing data cleaning.
          </li>
          <li>
            Facilitated data integrations visualizations and supervised
            integrity of data lake. Prepared detailed reports and dashboards
            using Tableau and presented complex analysis
          </li>
          <li>
            Managed troubleshooting for issue raised by customers. Involved in
            Exploratory Data Analysis activities Univariate Analysis,
            Multivariate Analysis, Outlier detection, Correlation helped
            expedite flow of the project and enhanced data quality. Improved
            critical metrics report generation time by 25% and customer
            satisfaction rate by 15%.
          </li>
        </ul>
      </>
    ),
  },
];

export const projectsData = [
  {
    type: "WEB-APP",
    title: "Traffic Forecasting",
    image: null,
    link: null,
    source: "https://github.com/Tejasreebussa/Traffic_forecasting",
    description: [
      "Analyzed real-time METRLA dataset in HD5 File format collected from 207 sensors in LA using 3 test metrics.",
      "Conducted data analysis and pre-processing by cleaning and transforming raw data into 34,272-time sequence adjacency matrix.",
      "Developed a functional model to forecast traffic using GNN and GCN as spatial models.",
    ],
  },
  {
    type: "WEB-APP",
    title: "Stack Overflow Data Analysis",
    image: null,
    link: null,
    source: null,
    description: [
      "Implemented a Hadoop and Spark-based data analysis project for Stack Overflow, processing large datasets (over 100 GB) and retaining processed data in HDFS with a replication factor of 3.",
      "Built Python scripts for data analytic tasks achieving a 95% accuracy rate for sentiment analysis.",
      "Analyzed 50 top tags from 10 million Stack Overflow questions and answers and presented results.",
    ],
  },
  {
    type: "WEB-APP",
    title: "Data Warehouse Implementation & Analysis",
    image: null,
    link: null,
    source: null,
    description: [
      "Established a private VPC network for Cloud SQL and moved data to BigQuery and Google Cloud Storage.",
      "Leveraged Cloud Composer to design over 3 environments for scaling, implemented ETL pipeline and DAGs.",
      "Built and executed SQL queries to extract 10 KPIs, and presented on an interactive dashboard.",
    ],
  },
  {
    type: "WEB-APP",
    title: "Portfolio Website",
    image: "portfolio-website",
    link: null,
    source: "null",
    description: ["A Portfolio Website"],
  },
];

export const socialMediaLinks = [
  {
    href: "https://github.com/Tejasreebussa/",
    icon: FaGithub,
    backgroundColor: "gray.700",
    hoverColor: "gray.600",
  },
  {
    href: "https://www.instagram.com/tejasree_22/",
    icon: FaInstagram,
    backgroundColor: "social.instagram",
    hoverColor: "social.instagramHover",
  },
  {
    href: "https://www.linkedin.com/in/tejasree-bussa/",
    icon: FaLinkedin,
    backgroundColor: "social.linkedin",
    hoverColor: "social.linkedinHover",
  },
  // {
  //   href: "https://twitter.com/codersk36",
  //   icon: FaTwitter,
  //   backgroundColor: "social.twitter",
  //   hoverColor: "social.twitterHover",
  // },
];

export const query = `
query GetUserArticles($page: Int = 0) {
  user(username: "vaheed") {
    publication {
      posts(page: $page) {
        title
        brief
        slug
        coverImage
      }
    }
  }
}
`;
