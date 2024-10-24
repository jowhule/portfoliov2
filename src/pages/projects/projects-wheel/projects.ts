import {
  LoggerThumbnail,
  PokedexThumbnail,
  ProfileWebThumbnail,
} from "../../../assets/images";

export type ProjectInfoType = {
  name: string;
  description: string;
  yearStarted: string;
  languages: string[];
  rawCodeLink: string | null;
  liveSiteLink: string | null;
  thumbnail: string | null;
};

const projectInfoDefault: ProjectInfoType = {
  name: "",
  description: "",
  yearStarted: "",
  languages: [],
  rawCodeLink: null,
  liveSiteLink: null,
  thumbnail: null,
};

export const projectInformation: ProjectInfoType[] = [
  {
    name: "Pokedex (PokeAPI)",
    description:
      "Furthering my ReactJS and TypeScript skills I learnt from a univeristy course, I wanted to build a personalised project with something I am passionate about Planning to further expand this app!",
    yearStarted: "2023",
    languages: ["ReactJS", "TypeScript"],
    rawCodeLink: "https://github.com/jowhule/pokedex",
    liveSiteLink: "https://personalpokedex-one.vercel.app",
    thumbnail: PokedexThumbnail,
  },
  {
    name: "Portfolio Website",
    description:
      "Furthering my HTML, CSS and JavaScript skills I decided to build this website to be a portfolio which is more clean and professional than my last.",
    yearStarted: "2022",
    languages: ["HTML", "CSS", "JavaScript"],
    rawCodeLink: "https://github.com/jowhule/jowu_portfolio",
    liveSiteLink: "https://jowu.vercel.app",
    thumbnail: ProfileWebThumbnail,
  },
  {
    name: "Keylogger",
    description:
      "An exploration into security issues and Python window libraries related to clipboard and threading.",
    yearStarted: "2022",
    languages: ["Python"],
    rawCodeLink: "https://github.com/jowhule/keylogger",
    liveSiteLink: null,
    thumbnail: LoggerThumbnail,
  },
  // dupes begin
  projectInfoDefault,
  projectInfoDefault,
  projectInfoDefault,
  projectInfoDefault,
  projectInfoDefault,
];

export const NUM_PROJECTS = projectInformation.length;
