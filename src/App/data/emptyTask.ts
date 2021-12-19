import {Priorities, Status, Tags} from "../types/domain";
import {getRandomNumber} from "../utils";

export default {
    title: "",
    body: "",
    priority: Priorities.medium,
    status: Status.todo,
    date: new Date(),
    tags: [] as Tags[],
    id: getRandomNumber(),
    authorId: 14222,
};