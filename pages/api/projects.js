// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { db } from "../../firebase"
import { ref, onValue } from "firebase/database"
import projectData from "../../src/data/nicolaschiong-portfolio-default-rtdb-export.json"

export default function handler(req, res) {
  res.status(200).json([
    {
      appType: "Web & Mobile",
      backendStack: ["node-js", "graphql", "mongodb"],
      clientName: "LabSavvy/CWS",
      description:
        "A SaaS web and mobile healthcare application for patients to order, take and interpret lab results",
      frontendStack: ["react", "typescript", "javascript", "storybook", "html", "css", "emotion"],
      industry: "Healthcare",
      infrastructureStack: ["google-cloud", "jenkins", "bitbucket", "jira", "confluence"],
      location: "Virginia, USA",
      name: "LabSavvy",
      projectLogo: "labsavvy",
      projectStart: "July 2021",
      projectType: "Client Project",
      slug: "labsavvy",
      theChallenges:
        "The team had a problem on maintaining react components across 4 separate web apps for our doctors, patients, admins and CMS users. It is not setup as a monorepo and each project has its own repository and CI/CD pipelines. The problem begins when the a react component is created or updated, the team has to manually roll over the updates to all apps which takes time and is prone to errors.  ",
      theResult:
        "My solution for that setup was to create a custom component library that can be imported to all web apps as a dependency. I implemented Storybook, a development tool to build, test and debug react components isolated from the target apps. It is a way to organize our reusable components. Then I setup the custom library to be built, packaged and published to npm. ",
    },
    {
      appType: "Web",
      backendStack: ["java", "spring", "docker"],
      clientName: "Compass Group USA",
      description: "A web healthcare application to manage and dispatch tasks to hospital staff",
      frontendStack: [
        "react",
        "typescript",
        "javascript",
        "storybook",
        "html",
        "css",
        "emotion",
        "figma",
      ],
      industry: "Healthcare",
      infrastructureStack: ["google-cloud", "jenkins", "bitbucket"],
      location: "USA",
      name: "TaskUp",
      projectLogo: "compass-group",
      projectStart: "July 2021",
      projectType: "Client Project",
      slug: "taskup",
      theChallenges: "",
      theResult: ",",
    },
    {
      appType: "Web",
      backendStack: ["php"],
      clientName: "Results at Hand",
      description: "A drop and drop navigation page builder",
      frontendStack: ["react", "typescript", "javascript", "storybook", "html", "css", "emotion"],
      industry: "Marketing",
      infrastructureStack: ["trello", "gitlab"],
      location: "USA",
      name: "Results at Hand - Navigation Builder",
      projectLogo: "labsavvy",
      projectStart: "May 2023",
      projectType: "Client Project",
      slug: "results-at-hand-navigation-builder",
      theChallenges: "This client was challenging but finished the application",
      theResult: "Finished ",
    },
    {
      appType: "Web",
      backendStack: ["node-js", "graphql", "mongodb"],
      clientName: "Accenture",
      description: "The landing page of Accenture, a Tech Consulting company",
      frontendStack: ["react", "typescript", "javascript", "storybook"],
      industry: "Consulting",
      infrastructureStack: ["google-cloud", "jenkins", "bitbucket"],
      location: "Cebu, Philippines",
      name: "Accenture.com",
      projectLogo: "accenture",
      projectStart: "July 2021",
      projectType: "Client Project",
      slug: "accenture-com",
      theChallenges: "",
      theResult: ",",
    },
    {
      appType: "Web",
      backendStack: ["node-js", "graphql", "mongodb"],
      clientName: "Accenture",
      description: "An internal web application to match employee talent to projects",
      frontendStack: ["react", "typescript", "javascript", "storybook"],
      industry: "Consulting",
      infrastructureStack: ["google-cloud", "jenkins", "bitbucket"],
      location: "Cebu, Philippines",
      name: "Accenture MyScheduling",
      projectLogo: "accenture",
      projectStart: "July 2021",
      projectType: "Client Project",
      slug: "accenture-myscheduling",
      theChallenges: "",
      theResult: ",",
    },
    {
      appType: "Web & Mobile",
      clientName: "VeggieGo",
      backendStack: ["node-js", "graphql", "mongodb"],
      description:
        "A mobile app for riders to track deliveries and a web app to track orders and inventory",
      frontendStack: ["react", "typescript", "javascript", "storybook"],
      industry: "Commerce, Agriculture",
      infrastructureStack: ["firebase", "github", "git"],
      name: "Veggie Go ",
      projectLogo: "labsavvy",
      projectType: "Client Project",
      slug: "veggie-go",
      theChallenges: "",
      theResult: ",",
    },
    {
      appType: "Mobile",
      clientName: "FishingBuddy",
      backendStack: ["node-js", "graphql", "mongodb"],
      description: "A mobile app platform that sells fishing related gear and harvest locally",
      frontendStack: ["react", "typescript", "javascript", "storybook"],
      industry: "Commerce, Agriculture",
      infrastructureStack: ["firebase", "github", "git"],
      name: "FishingBuddy",
      projectLogo: "fishingbuddy",
      projectType: "Client Project",
      slug: "fishingbuddy",
      theChallenges: "",
      theResult: ",",
    },
    {
      appType: "Web",
      clientName: "Singtel",
      backendStack: ["node-js", "graphql", "mongodb"],
      description:
        "I did this demo project for a Frontend developer position I applied to at Singtel",
      frontendStack: ["react", "typescript", "javascript", "storybook"],
      industry: "Telecommunications",
      infrastructureStack: ["google-cloud", "jenkins", "bitbucket"],
      name: "thedogapi.com Dog Search",
      projectLogo: "singtel",
      projectType: "Demo Project",
      slug: "dog-search-api",
      theChallenges: "",
      theResult: ",",
    },
    {
      appType: "Web",
      clientName: "Nicolas Chiong",
      backendStack: ["firebase", "next"],
      description: "This is my personal portfolio where I share my latest projects and ideas",
      frontendStack: ["react", "typescript", "javascript", "storybook", "html", "css", "emotion"],
      industry: "Personal",
      infrastructureStack: ["firebase", "github", "git"],
      name: "Nicolas Chiong Portfolio and Project Showcase",
      projectLogo: "nicolaschiong",
      projectType: "Personal Project",
      slug: "nicolas-chiong-portfolio",
      theChallenges: "",
      theResult: ",",
    },
  ])
  // try {
  //   if (db) {
  //     const projectRef = ref(db, "projects/")

  //     onValue(projectRef, (snapshot) => {
  //       const data = snapshot.val()
  //       res.status(200).json(projectData)
  //       console.log(projectData)
  //     })
  //   }
  // } catch (error) {
  //   res.status(500).json(error)

  //   console.log("Error occured", error)
  // }
}
