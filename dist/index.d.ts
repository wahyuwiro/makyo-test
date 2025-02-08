import React from 'react';

interface Option {
    value: string;
    label: string;
}
interface DropdownProps {
    options: Option[];
    multiple?: boolean;
    searchable?: boolean;
    portal?: boolean;
    outline?: boolean;
    onChange: (selected: Option[]) => void;
}
declare const Dropdown: ({ options, multiple, searchable, portal, outline, onChange, }: DropdownProps) => React.JSX.Element;

export { Dropdown, type DropdownProps, type Option };
