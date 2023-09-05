interface Interns {
    name: string;
    age: number;
    skills: string[];
}
declare enum JuniorDomain {
    Web = "Web",
    Connect = "Connect",
    Backend = "Backend",
  }
interface Juniors{
    name: string;
    age: number;
    skills: string[];
    date_of_promotion: Date;
    domain: JuniorDomain;
}

interface Company {
    Interns: Interns[];
    Juniors: Juniors[];
    Country: string;
}

export default Company;