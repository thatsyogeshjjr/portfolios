import express from "express";
import dotenv from "dotenv";

const app = express();
const PORT = process.env.PORT;

app.get("/api/v1/profile", (req, res) => {
  res.send({
    name: "Yogesh Jajoria",
    title: "Software Engineer",
    about:
      "Crafting efficient solutions, leading a way into the future. I like to explore technology as much as I like watching movies",
    resume: "",
    skills: [
      "MERN",
      "Git",
      "Github",
      "Tailwindcss",
      "Flask",
      "Bash",
      "MySQL",
      "Firebase",
      "ElectronJS",
    ],
    Education: [
      {
        icon: "",
        degree: "Bachelor of Technology in Robotics and AI",
        university: "Manipal University Jaipur",
      },
    ],
  });
});

app.get("/api/v1/publications", (req, res) => {
  res.send([
    {
      link: "https://drive.google.com/file/d/1KLHdsC_R6x9Kh-aQDrzRV0D8-UdkiAfg/view",
      title: "Application of Mathematics in Computer Graphics",
      desc: "Studies and explores mathematics of basic projects with Python and Pygame",
    },
    {
      link: "https://drive.google.com/file/d/1m3cSBb1oadn5CrGZX7xelVgNUcTyi6rk/view",
      title: "FortiFin",
      desc: "Project file for the Fortifin project developed for the CBSE class XII project final",
    },
  ]);
});

app.get("/api/v1/socials", (req, res) => {
  res.send([
    {
      icon: "https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png",
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/yogesh-jjr/",
    },
    {
      icon: "https://cdn.icon-icons.com/icons2/2428/PNG/512/github_black_logo_icon_147128.png",
      title: "Github",
      link: "https://github.com/thatsyogeshjjr",
    },
  ]);
});

app.get("/api/v1/projects", (req, res) => {
  res.send([
    {
      video: "./assets/sample.mp4",
      link: "https://github.com/thatsyogeshjjr/keylogger",
      blog: "",
      stack: ["Python", "Cryptography", "Sockets"],
      icon: "",
      title: "Keylogger",
      description:
        "The Keylogger Project is focused on comprehensively understanding advanced keylogging techniques by recreating their functionality. Through features such as keystroke logging, local server communication, and data encryption using libraries like Cryptography.fernet and RSA, the project aims to delve into functions the of modern keyloggers.",
    },
  ]);
});

app.listen(PORT, () => console.log(`Server started @ localhost:${PORT}`));
