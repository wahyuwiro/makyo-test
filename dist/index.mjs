// src/components/Dropdown.tsx
import React, { useState, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { createPortal } from "react-dom";
import { ChevronDown, Search, Delete } from "lucide-react";
import clsx from "clsx";
var Dropdown = ({
  options,
  multiple = false,
  searchable = true,
  portal = false,
  outline = false,
  onChange
}) => {
  const [selected, setSelected] = useState(
    multiple ? [] : void 0
  );
  const [query, setQuery] = useState("");
  const filteredOptions = query ? options.filter(
    (option) => option.label.toLowerCase().includes(query.toLowerCase())
  ) : options;
  const handleSelect = (options2) => {
    setSelected(options2);
    onChange(options2);
  };
  const dropdownContent = /* @__PURE__ */ React.createElement(
    Transition,
    {
      as: Fragment,
      enter: "transition-opacity duration-200",
      enterFrom: "opacity-0",
      enterTo: "opacity-100",
      leave: "transition-opacity duration-150",
      leaveFrom: "opacity-100",
      leaveTo: "opacity-0"
    },
    /* @__PURE__ */ React.createElement(
      Listbox.Options,
      {
        className: "absolute w-full bg-white border rounded-md shadow-md mt-2 max-h-60 overflow-auto z-[1050]"
      },
      searchable && /* @__PURE__ */ React.createElement("div", { className: "relative p-2" }, /* @__PURE__ */ React.createElement(Search, { className: "absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" }), /* @__PURE__ */ React.createElement(
        "input",
        {
          type: "text",
          className: "w-full p-2 pl-8 border-b focus:outline-none",
          placeholder: "Search...",
          value: query,
          onChange: (e) => setQuery(e.target.value)
        }
      )),
      filteredOptions.length === 0 ? /* @__PURE__ */ React.createElement("p", { className: "p-2 text-gray-500" }, "No options found") : filteredOptions.map((option) => /* @__PURE__ */ React.createElement(
        Listbox.Option,
        {
          key: option.value,
          value: option,
          className: ({ active, selected: selected2 }) => clsx("cursor-pointer p-2 hover:bg-gray-100", active && "bg-gray-200", selected2 && "font-semibold")
        },
        ({ selected: selected2 }) => /* @__PURE__ */ React.createElement("div", { className: "flex justify-between" }, /* @__PURE__ */ React.createElement("span", null, option.label), selected2 && /* @__PURE__ */ React.createElement("span", null, "\u2705"))
      ))
    )
  );
  return /* @__PURE__ */ React.createElement("div", { className: "w-full flex items-center gap-4" }, /* @__PURE__ */ React.createElement("h2", { className: "text-md" }, "Select"), /* @__PURE__ */ React.createElement("div", { className: "relative w-full" }, /* @__PURE__ */ React.createElement(Listbox, { value: selected, onChange: handleSelect, multiple }, /* @__PURE__ */ React.createElement(
    Listbox.Button,
    {
      className: clsx(
        "w-full p-2 border rounded-md bg-white text-left shadow-sm focus:outline-none flex justify-between items-center",
        outline && "!bg-[#e1e3e5]"
      )
    },
    /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between w-full" }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-1" }, multiple && Array.isArray(selected) && selected.length > 0 ? selected.map((opt) => /* @__PURE__ */ React.createElement(
      "span",
      {
        key: opt.value,
        className: "flex items-center gap-1 px-2 py-1 bg-gray-200 rounded-md text-sm"
      },
      opt.label,
      /* @__PURE__ */ React.createElement(
        "button",
        {
          className: "text-gray-500 hover:text-red-500",
          onClick: (e) => {
            e.stopPropagation();
            const newSelection = selected.filter((item) => item.value !== opt.value);
            setSelected(newSelection);
            onChange(newSelection);
          }
        },
        /* @__PURE__ */ React.createElement(Delete, { className: "w-4 h-4" })
      )
    )) : !Array.isArray(selected) && (selected == null ? void 0 : selected.label) ? /* @__PURE__ */ React.createElement("span", { className: "flex items-center gap-1 px-2 py-1 bg-gray-200 rounded-md text-sm" }, selected == null ? void 0 : selected.label, /* @__PURE__ */ React.createElement(
      "button",
      {
        className: "text-gray-500 hover:text-red-500",
        onClick: (e) => {
          e.stopPropagation();
          setSelected(multiple ? [] : void 0);
          onChange([]);
        }
      },
      /* @__PURE__ */ React.createElement(Delete, { className: "w-4 h-4" })
    )) : /* @__PURE__ */ React.createElement("span", null, "Select...")), /* @__PURE__ */ React.createElement(ChevronDown, { className: "w-4 h-4 text-gray-400" }))
  ), portal ? createPortal(dropdownContent, document.body) : dropdownContent)));
};
export {
  Dropdown
};
//# sourceMappingURL=index.mjs.map