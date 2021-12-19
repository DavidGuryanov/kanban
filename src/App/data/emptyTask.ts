import { Priorities, Status, Tags } from "../types/domain";
import { getRandomNumber } from "../utils";

export const emptyTask = {
  title: "",
  body: "",
  priority: Priorities.medium,
  status: Status.todo,
  date: new Date(),
  tags: [] as Tags[],
  id: getRandomNumber(),
  authorId: 14222,
};

export default emptyTask