import {useEffect} from "react";
import {atom, useRecoilSnapshot} from "recoil";
import {Status} from "../types/domain";
import tasks from "../data/defaultTasks";

export const popupState = atom({
    key: "popupState",
    default: {isOpen: false, taskId: 1},
});

export const tasksListState = atom({
    key: "tasksListState",
    default: tasks,
});

export const tasksFilterState = atom({
    key: "tasksFilterState",
    default: Status.todo,
});

export function DebugObserver() {
    const snapshot = useRecoilSnapshot();
    useEffect(() => {
        console.debug('The following atoms were modified:');
        for (const node of snapshot.getNodes_UNSTABLE({isModified: true}) as any) {
            console.debug(node.key, snapshot.getLoadable(node));
        }
    }, [snapshot]);

    return null;
}
