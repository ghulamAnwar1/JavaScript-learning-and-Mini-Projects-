import React from "react";
import { Bookmark } from "lucide-react";
import Card from "./components/Card";
const App = (elem) => {
  const jobs = [
    {
      id: 1,
      brandLogo:
        "https://ui-avatars.com/api/?name=Systems&background=0D47A1&color=fff&bold=true",
      company: "Systems Limited",
      datePosted: "2 days ago",
      post: "Frontend Developer (React)",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: 9,
      location: "Karachi, Pakistan",
    },
    {
      id: 2,
      brandLogo:
        "https://ui-avatars.com/api/?name=Devsinc&background=E53935&color=fff&bold=true",
      company: "Devsinc",
      datePosted: "5 days ago",
      post: "MERN Stack Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 18,
      location: "Islamabad, Pakistan",
    },
    {
      id: 3,
      brandLogo:
        "https://ui-avatars.com/api/?name=Folio3&background=00897B&color=fff&bold=true",
      company: "Folio3",
      datePosted: "1 week ago",
      post: "Node.js Backend Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 32,
      location: "Karachi, Pakistan",
    },
    {
      id: 4,
      brandLogo:
        "https://ui-avatars.com/api/?name=NETSOL&background=6A1B9A&color=fff&bold=true",
      company: "NETSOL Technologies",
      datePosted: "3 days ago",
      post: "React Native Developer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: 11,
      location: "Hyderabad, Pakistan",
    },
    {
      id: 5,
      brandLogo:
        "https://ui-avatars.com/api/?name=10Pearls&background=F57C00&color=fff&bold=true",
      company: "10Pearls",
      datePosted: "2 weeks ago",
      post: "Full Stack Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 22,
      location: "Islamabad, Pakistan",
    },
    {
      id: 6,
      brandLogo:
        "https://ui-avatars.com/api/?name=Arbisoft&background=2E7D32&color=fff&bold=true",
      company: "Arbisoft",
      datePosted: "6 days ago",
      post: "Junior JavaScript Developer",
      tag1: "Internship",
      tag2: "Junior Level",
      pay: 6,
      location: "Larkana, Pakistan",
    },
    {
      id: 7,
      brandLogo:
        "https://ui-avatars.com/api/?name=Contour&background=1565C0&color=fff&bold=true",
      company: "Contour Software",
      datePosted: "4 days ago",
      post: "MongoDB Database Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 28,
      location: "Karachi, Pakistan",
    },
    {
      id: 8,
      brandLogo:
        "https://ui-avatars.com/api/?name=Techlogix&background=AD1457&color=fff&bold=true",
      company: "Techlogix",
      datePosted: "1 day ago",
      post: "UI Engineer (React + Tailwind)",
      tag1: "Part Time",
      tag2: "Mid Level",
      pay: 15,
      location: "Islamabad, Pakistan",
    },
    {
      id: 9,
      brandLogo:
        "https://ui-avatars.com/api/?name=VentureDive&background=00838F&color=fff&bold=true",
      company: "VentureDive",
      datePosted: "3 weeks ago",
      post: "Express.js API Developer",
      tag1: "Contract",
      tag2: "Mid Level",
      pay: 20,
      location: "Hyderabad, Pakistan",
    },
    {
      id: 10,
      brandLogo:
        "https://ui-avatars.com/api/?name=Confiz&background=4527A0&color=fff&bold=true",
      company: "Confiz",
      datePosted: "1 week ago",
      post: "Lead Frontend Architect",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 40,
      location: "Karachi, Pakistan",
    },
  ];

  return (
    <div className="parent">
      {jobs.map((elem) => {
        return (
          <Card
            company={elem.company}
            post={elem.post}
            tag1={elem.tag1}
            tag2={elem.tag2}
            pay={elem.pay}
            brandLogo={elem.brandLogo}
          />
        );
      })}
    </div>
  );
};

export default App;
