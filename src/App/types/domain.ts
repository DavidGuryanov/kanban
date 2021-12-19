export interface SingleColumn {
  columnTitle: Status;
  tasks: any[];
  order: number;
}
export interface ColumnsProps {
  columnsData: SingleColumn[];
}

export enum Status {
  todo = "Todo",
  inProgress = "In Progress",
  done = "Done",
}

export enum Priorities {
  low = "Low",
  medium = "Medium",
  height = "Hight",
  critical = "Critical",
}

export enum Tags {
  web = "Web",
  mobile = "Mobile",
  ios = "iOS",
  windows = "Windows",
  react = "React",
}

export enum Icons {
  check = "check",
  cancel = "cancel",
  edit = "edit",
}

export interface ITask {
  title: string;
  body: string;
  priority: Priorities;
  tags: Tags[];
  status: Status;
  date: Date;
  id: number;
  authorId: number;
}

export interface ITaskProps {
  taskData: ITask;
}

export interface ICardPopupProps {
  taskData: ITask;
  taskIndexInList: number;
}

export enum InputVariants {
  title = "title",
  text = "text",
}

export interface InputProps {
  value: string;
  field: string;
  onChange: (field: string, value: string) => void;
  variant: InputVariants;
}