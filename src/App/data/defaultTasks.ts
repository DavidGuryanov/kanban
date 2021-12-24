import { Priorities, Status, Tags } from "../types/domain";
import { getRandomNumber } from "../utils";

const tasks = [
  {
    title: "Make a coffee",
    body: "No milk or sugar, only coffee and gasoline",
    priority: Priorities.low,
    status: Status.inProgress,
    date: new Date(),
    tags: [Tags.ios, Tags.react],
    id: getRandomNumber(),
    authorId: 14222,
  },
  {
    title: "Make a sandwich",
    body: "With peanut butter",
    priority: Priorities.medium,
    status: Status.done,
    date: new Date(),
    tags: [Tags.web, Tags.windows],
    id: getRandomNumber(),
    authorId: 14222,
  },
  {
    title: "Build a rocket ship",
    body: "No steel alowed",
    priority: Priorities.height,
    status: Status.inProgress,
    date: new Date(),
    tags: [Tags.web, Tags.react],
    id: getRandomNumber(),
    authorId: 14222,
  },
  {
    title: "Build thermonuclear reactor",
    body: "Just for fun",
    priority: Priorities.critical,
    status: Status.done,
    date: new Date(),
    tags: [Tags.web, Tags.react],
    id: getRandomNumber(),
    authorId: 14222,
  },
  {
    title: "Add Global theme",
    body: "",
    priority: Priorities.medium,
    status: Status.todo,
    date: new Date(),
    tags: [Tags.web, Tags.react],
    id: getRandomNumber(),
    authorId: 14222,
  },
  {
    title: "Add read me",
    body: "",
    priority: Priorities.medium,
    status: Status.todo,
    date: new Date(),
    tags: [Tags.web, Tags.react],
    id: getRandomNumber(),
    authorId: 14222,
  },
  {
    title: "Change popup opening",
    body: "",
    priority: Priorities.medium,
    status: Status.todo,
    date: new Date(),
    tags: [Tags.web, Tags.react],
    id: getRandomNumber(),
    authorId: 14222,
  },
];

export default tasks;
