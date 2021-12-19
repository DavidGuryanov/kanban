import React from "react";
import { TextInput, TitleInput } from "./styles";

export enum InputVariants {
  title = "title",
  text = "text",
}

interface InputProps {
  value: string;
  field: string;
  onChange: (field: string, value: string) => void;
  variant: InputVariants;
}

export const StyledInput = ({
  value,
  field,
  onChange,
  variant,
}: InputProps) => {
  switch (variant) {
    case InputVariants.title:
      return (
        <TitleInput
          type="text"
          value={value}
          onChange={(evt) => onChange(field, evt.target.value)}
          placeholder="Task title"
        ></TitleInput>
      );
    case InputVariants.text:
      return (
        <TextInput
          rows={5}
          value={value}
          onChange={(evt) => onChange(field, evt.target.value)}
          placeholder="Task description"
        ></TextInput>
      );

    default:
      return null;
  }
};
