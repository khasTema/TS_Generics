const logThis = (arg: any): void => console.log(arg);
const getEmployesName = (arg: Person[]): string => {
  let res: string[] = [];
  arg.forEach((a) => res.push(a.name));
  return res.join(", ");
};
const getRank = (arg: Person): string =>
  arg.rank
    .split("")
    .splice(0, 1)
    .concat(arg.rank.split("").splice(1).join("").toLowerCase())
    .join("");
const getAdminName = (arg: Person[]): string => {
  let res = arg.filter((a) => a.rank === RankNames.admin);
  return res[0].name;
};

enum RankNames {
  employee = "EMPLOYEE",
  admin = "ADMIN",
  director = "DIRECTOR",
}

type Rank = RankNames.employee | RankNames.admin | RankNames.director;

type Person = {
  name: string;
  age: number;
  rank: Rank;
};

type CompanyPermissions = [number, number, number];

type Accountant = {
  name: string;
  rank: Rank;
  permissions: CompanyPermissions;
};

type Company<T, S> = {
  companyName: string;
  employees: T[];
  revenue: number;
  bestMoneyMakers: {
    lstMont: T[];
    nextMonth: T[];
  };
  accountants: S[];
};

const myCompany: Company<Person, Accountant> = {
  companyName: "Some Company",
  employees: [
    {
      name: "Ivan Petrov",
      age: 34,
      rank: RankNames.employee,
    },
    {
      name: "Gina Chon",
      age: 30,
      rank: RankNames.admin,
    },
  ],
  revenue: 347889,
  bestMoneyMakers: {
    lstMont: [
      {
        name: "Chika Lupite",
        age: 75,
        rank: RankNames.employee,
      },
    ],
    nextMonth: [
      {
        name: "P.P. Jeans",
        age: 20,
        rank: RankNames.director,
      },
    ],
  },
  accountants: [
    {
      name: "Petrovna",
      rank: RankNames.admin,
      permissions: [33, 45, 67],
    },
  ],
};

logThis(myCompany.companyName);
logThis(getEmployesName(myCompany.employees));
logThis(getRank(myCompany.employees[0]));
logThis(getAdminName(myCompany.employees));

// Uniot Types

type Employee = Person;
type Admin = Person;
type Director = Person;
type CompanyType = Company<Employee, Accountant>;
