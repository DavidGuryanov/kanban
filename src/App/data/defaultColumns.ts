import { Status } from "../types/domain";

const columns = [
  {
    columnTitle: Status.todo,
    tasks: [],
    order: 1,
  },
  {
    columnTitle: Status.inProgress,
    tasks: [],
    order: 2,
  },
  {
    columnTitle: Status.done,
    tasks: [],
    order: 3,
  },
];

export default columns;
