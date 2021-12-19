import { replaceItemAtIndex } from "../../utils";
import { ITask, Tags } from "../../types/domain";

export const nothingIsEditing = {
  title: false,
  body: false,
  tags: false,
};
export const everythingIsEditing = {
  title: true,
  body: true,
  tags: true,
};

export function createFieldSetter(setterFunc: (a: any) => void, newData: any) {
  return function (field: string, value: any) {
    setterFunc({ ...newData, [field]: value });
  };
}

export function createFieldEditSetter(
  setterFunc: (a: any) => void,
  fieldStates: any
) {
  return (field: string, value = true) => {
    setterFunc({
      ...fieldStates,
      [field]: value,
    });
  };
}

export function createTaskEditor(
  setterFunc: (a: any) => void,
  tasksList: ITask[],
  taskIndexInList: number
) {
  return (newItem: any) => {
    let newList;
    if (taskIndexInList >= 0) {
      newList = replaceItemAtIndex(tasksList, taskIndexInList, {
        ...newItem,
      });
    } else {
      newList = [...tasksList, newItem];
    }
    setterFunc(newList);
  };
}

export function handleTagClick(
  setterFunc: (s: string, a: Tags[]) => void,
  tags: Tags[],
  tag: keyof typeof Tags
) {
  if (!tags.find((el) => el === Tags[tag])) {
    setterFunc("tags", [...tags, Tags[tag]]);
  } else {
    const tagInd = tags.findIndex((el) => el === Tags[tag]);
    const newTags = [...tags];
    newTags.splice(tagInd, 1);
    setterFunc("tags", newTags);
  }
}

// function setFieldValue(field: string, value: any) {
//     setNewData({...newData, [field]: value});
// }
