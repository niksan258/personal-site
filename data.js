// Single source of truth for CV content, rendered into index.html by render.js.
const CV_DATA = {
  name: "Nikola Nikolov",
  tagline: "Full-Stack Developer &middot; Sofia, Bulgaria",
  lede: "I build web applications end to end — from ASP.NET Core and Angular on " +
        "the frontend, to provisioning the Azure infrastructure they run on. I like " +
        "picking things up quickly and I'm just as happy explaining a tricky " +
        "technical concept as I am writing the code behind it.",

  contact: {
    email: "hello@nikolov.cv",
    github: "#",
    linkedin: "#"
  },

  experience: [
    {
      company: "Entian Solutions",
      role: "Full-Stack Developer",
      location: "Sofia, Hybrid",
      dates: "Jan 2025 &ndash; Present",
      bullets: [
        "Developing a multi-regional web application for internal management of Microsoft SQL Servers and databases, built with ASP.NET Core and Angular.",
        "Hands-on experience provisioning and managing IaaS resources in Azure.",
        "Helping run onboarding for new team members."
      ]
    },
    {
      company: "Hitachi Solutions",
      role: "Junior Developer",
      location: "Sofia, Hybrid",
      dates: "Jul 2023 &ndash; Dec 2024",
      bullets: [
        "Took part in building a scalable, event-based solution for a renewable energy company, using .NET Core, Entity Framework and GraphQL.",
        "Migrated a legacy ASP.NET MVC application, porting services to .NET Core and Blazor.",
        "Designed and built a tailored compliance solution from the ground up — sharpened my presentation skills and my ability to explain technical concepts simply.",
        "Took part in initiatives and trainings covering React, TypeScript and CSS, and helped new employees get up to speed."
      ]
    }
  ],

  education: [
    {
      school: "Sofia University &mdash; Faculty of Mathematics and Informatics",
      degree: "Bachelor of Information Systems",
      location: "Sofia, Bulgaria",
      dates: "Sep 2021 &ndash; Sep 2025"
    },
    {
      school: "Math and Science High School",
      degree: "Intensive Math and English",
      location: "Blagoevgrad, Bulgaria",
      dates: "Sep 2015 &ndash; Sep 2021"
    }
  ],

  certifications: [
    "AZ-900 Azure Fundamentals",
    "SC-900 Security, Compliance and Identity Fundamentals"
  ],

  skills: {
    technical: "ASP.NET Core &middot; Angular &middot; React &middot; TypeScript &middot; Entity Framework &middot; GraphQL &middot; Blazor &middot; Microsoft SQL Server &middot; Azure (IaaS) &middot; CI/CD &middot; Infrastructure as code",
    working: "Problem solving &middot; Fast learner &middot; Agile teams &middot; Clear technical communication &middot; Mentoring and onboarding"
  }
};
