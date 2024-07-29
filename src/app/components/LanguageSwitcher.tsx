import React from 'react';
import * as Select from '@radix-ui/react-select';
import { ChevronDownIcon, CheckIcon } from '@radix-ui/react-icons';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'jp', name: '日本語' },
//   { code: 'fr', name: 'Français' },
];

const LanguageSwitcher = () => {
  return (
    <Select.Root defaultValue='en'>
      <Select.Trigger className="inline-flex items-center justify-center rounded px-[8px] text-[13px] leading-none h-[35px] gap-[5px] bg-transparent text-zinc-400 hover:text-zinc-100 focus:outline-none">
        <Select.Value />
        <Select.Icon className="text-zinc-400">
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content className="overflow-hidden bg-zinc-800 rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] mt-8 z-50">
          <Select.Viewport className="p-[5px]">
            {languages.map((language) => (
              <Select.Item
                key={language.code}
                value={language.code}
                className="text-[13px] leading-none text-zinc-400 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none hover:text-zinc-100 hover:bg-zinc-700 focus:outline-none"
              >
                <Select.ItemText>{language.name}</Select.ItemText>
                <Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
                  <CheckIcon />
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

export default LanguageSwitcher;