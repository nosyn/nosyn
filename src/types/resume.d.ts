/* eslint-disable @typescript-eslint/no-explicit-any */
type Resume = {
  name: string;
  initials: string;
  url: string;
  location: string;
  locationLink: string;
  description: string;
  summary: string;
  avatarUrl: string;
  skills: string[];
  navbar: { href: string; icon: any; label: string }[];
  contact: {
    email: string;
    tel: string;
    social: {
      GitHub: SocialLink;
      LinkedIn: SocialLink;
      X: SocialLink;
      email: SocialLink;
    };
  };
  work: WorkExperience[];
  education: Education[];
  projects: Project[];
};

type SocialLink = {
  name: string;
  url: string;
  icon: any;
  navbar: boolean;
};

type WorkExperience = {
  company: string;
  href: string;
  badges: string[];
  location: string;
  title: string;
  logoUrl: string;
  start: string;
  end: string;
  description: string;
};

type Education = {
  school: string;
  href: string;
  degree: string;
  logoUrl: string;
  start: string;
  end: string;
};

type Project = {
  title: string;
  href: string;
  dates: string;
  active: boolean;
  description: string;
  technologies: string[];
  links: { type: string; href: string; icon: any }[];
  image: string;
  video: string;
};
