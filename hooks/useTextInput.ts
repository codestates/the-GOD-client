import { useState } from 'react';
import { IInputEvent } from '@interfaces';

const useTextInput = (initValue: string) => {
  const [value, setValue] = useState(initValue);

  const inputEvent: IInputEvent = {
    value: value,
    onChange: ({
      target,
    }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValue(target.value);
    },
    onKeyDown: ({
      key,
    }: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      switch (key) {
        case 'Enter':
          break;
        default:
          break;
      }
    },
    onClick: () => {},
    setValue: setValue,
  };
  return { value, inputEvent };
};

export default useTextInput;
