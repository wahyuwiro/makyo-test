import React, { useState, Fragment, useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { createPortal } from "react-dom";
import { ChevronDown, Search, Delete } from "lucide-react"; 
import clsx from "clsx";

export interface Option {
  value: string;
  label: string;
}

export interface DropdownProps {
  options: Option[];
  multiple?: boolean;
  searchable?: boolean;
  portal?: boolean;
  outline?: boolean;
  onChange: (selected: Option[]) => void;
}

export const Dropdown = ({
  options,
  multiple = false,
  searchable = true,
  portal = false,
  outline = false,
  onChange,
}: DropdownProps) => {
    const [selected, setSelected] = useState<Option | Option[]>(
        multiple ? [] : undefined as unknown as Option
    );
  
  const [query, setQuery] = useState("");

  const filteredOptions = query
    ? options.filter((option) =>
        option.label.toLowerCase().includes(query.toLowerCase())
      )
    : options;

  const handleSelect = (options: Option[]) => {
    setSelected(options);
    onChange(options);
  };

  const dropdownContent = (
    <Transition
      as={Fragment}
      enter="transition-opacity duration-200"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <Listbox.Options
        className="absolute w-full bg-white border rounded-md shadow-md mt-2 max-h-60 overflow-auto z-[1050]"
      >
        {searchable && (
          <div className="relative p-2">
            <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              className="w-full p-2 pl-8 border-b focus:outline-none"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        )}

        {filteredOptions.length === 0 ? (
          <p className="p-2 text-gray-500">No options found</p>
        ) : (
          filteredOptions.map((option) => (
            <Listbox.Option
              key={option.value}
              value={option}
              className={({ active, selected }) =>
                clsx("cursor-pointer p-2 hover:bg-gray-100", active && "bg-gray-200", selected && "font-semibold")
              }
            >
              {({ selected }) => (
                <div className="flex justify-between">
                  <span>{option.label}</span>
                  {selected && <span>✅</span>}
                </div>
              )}
            </Listbox.Option>
          ))
        )}
      </Listbox.Options>
    </Transition>
  );

  useEffect(() => {
    console.log('selected :', selected);
  }, [selected]);
  return (
    <div className="w-full flex items-center gap-4">
        <h2 className="text-md">Select</h2>

        <div className="relative w-full">
            <Listbox value={selected} onChange={handleSelect} multiple={multiple}>
                <Listbox.Button
                    className={clsx(
                        "w-full p-2 border rounded-md bg-white text-left shadow-sm focus:outline-none flex justify-between items-center",
                        outline && "bg-[#e1e3e5]"
                    )}
                >

                    <div className="flex items-center justify-between w-full">
                        <div className="flex flex-wrap gap-1">
                        {multiple && Array.isArray(selected) && selected.length > 0 ? (
                            selected.map((opt) => (
                            <span
                                key={opt.value}
                                className="flex items-center gap-1 px-2 py-1 bg-gray-200 rounded-md text-sm"
                            >
                                {opt.label}
                                <button
                                className="text-gray-500 hover:text-red-500"
                                onClick={(e) => {
                                    e.stopPropagation(); // Prevent dropdown toggle
                                    const newSelection = selected.filter((item) => item.value !== opt.value);
                                    setSelected(newSelection);
                                    onChange(newSelection);
                                }}
                                >
                                <Delete className="w-4 h-4" />
                                </button>
                            </span>
                            ))
                        ) : !Array.isArray(selected) && selected?.label ? (
                            <span className="flex items-center gap-1 px-2 py-1 bg-gray-200 rounded-md text-sm">
                            {(selected as Option)?.label}
                            <button
                                className="text-gray-500 hover:text-red-500"
                                onClick={(e) => {
                                e.stopPropagation(); // Prevent dropdown toggle
                                setSelected(multiple ? [] : (undefined as unknown as Option));
                                onChange([]);
                                }}
                            >
                                <Delete className="w-4 h-4" />
                            </button>
                            </span>
                        ) : (
                            <span>Select...</span>
                        )}
                        </div>
                        <ChevronDown className="w-4 h-4 text-gray-400" />
                    </div>
                    </Listbox.Button>


                {/* Render inside portal if enabled */}
                {portal ? createPortal(dropdownContent, document.body) : dropdownContent}

            </Listbox>
        </div>
    </div>
  );
};
