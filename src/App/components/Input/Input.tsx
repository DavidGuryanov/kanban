import React from "react";
import { TextInput, TitleInput } from "./styles";
import { InputProps, InputVariants } from "../../types/domain";

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
        />
      );
    case InputVariants.text:
      return (
        <TextInput
          rows={5}
          value={value}
          onChange={(evt) => onChange(field, evt.target.value)}
          placeholder="Task description"
        />
      );

    default:
      return null;
  }
};
