"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Dropdown: () => Dropdown
});
module.exports = __toCommonJS(index_exports);

// src/components/Dropdown.tsx
var import_react = __toESM(require("react"));
var import_react2 = require("@headlessui/react");
var import_react_dom = require("react-dom");
var import_lucide_react = require("lucide-react");
var import_clsx = __toESM(require("clsx"));
var Dropdown = ({
  options,
  multiple = false,
  searchable = true,
  portal = false,
  outline = false,
  onChange
}) => {
  const [selected, setSelected] = (0, import_react.useState)(
    multiple ? [] : void 0
  );
  const [query, setQuery] = (0, import_react.useState)("");
  const filteredOptions = query ? options.filter(
    (option) => option.label.toLowerCase().includes(query.toLowerCase())
  ) : options;
  const handleSelect = (options2) => {
    setSelected(options2);
    onChange(options2);
  };
  const dropdownContent = /* @__PURE__ */ import_react.default.createElement(
    import_react2.Transition,
    {
      as: import_react.Fragment,
      enter: "transition-opacity duration-200",
      enterFrom: "opacity-0",
      enterTo: "opacity-100",
      leave: "transition-opacity duration-150",
      leaveFrom: "opacity-100",
      leaveTo: "opacity-0"
    },
    /* @__PURE__ */ import_react.default.createElement(
      import_react2.Listbox.Options,
      {
        className: "absolute w-full bg-white border rounded-md shadow-md mt-2 max-h-60 overflow-auto z-[1050]"
      },
      searchable && /* @__PURE__ */ import_react.default.createElement("div", { className: "relative p-2" }, /* @__PURE__ */ import_react.default.createElement(import_lucide_react.Search, { className: "absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" }), /* @__PURE__ */ import_react.default.createElement(
        "input",
        {
          type: "text",
          className: "w-full p-2 pl-8 border-b focus:outline-none",
          placeholder: "Search...",
          value: query,
          onChange: (e) => setQuery(e.target.value)
        }
      )),
      filteredOptions.length === 0 ? /* @__PURE__ */ import_react.default.createElement("p", { className: "p-2 text-gray-500" }, "No options found") : filteredOptions.map((option) => /* @__PURE__ */ import_react.default.createElement(
        import_react2.Listbox.Option,
        {
          key: option.value,
          value: option,
          className: ({ active, selected: selected2 }) => (0, import_clsx.default)("cursor-pointer p-2 hover:bg-gray-100", active && "bg-gray-200", selected2 && "font-semibold")
        },
        ({ selected: selected2 }) => /* @__PURE__ */ import_react.default.createElement("div", { className: "flex justify-between" }, /* @__PURE__ */ import_react.default.createElement("span", null, option.label), selected2 && /* @__PURE__ */ import_react.default.createElement("span", null, "\u2705"))
      ))
    )
  );
  return /* @__PURE__ */ import_react.default.createElement("div", { className: "w-full flex items-center gap-4" }, /* @__PURE__ */ import_react.default.createElement("h2", { className: "text-md" }, "Select"), /* @__PURE__ */ import_react.default.createElement("div", { className: "relative w-full" }, /* @__PURE__ */ import_react.default.createElement(import_react2.Listbox, { value: selected, onChange: handleSelect, multiple }, /* @__PURE__ */ import_react.default.createElement(
    import_react2.Listbox.Button,
    {
      className: (0, import_clsx.default)(
        "w-full p-2 border rounded-md bg-white text-left shadow-sm focus:outline-none flex justify-between items-center",
        outline && "!bg-[#e1e3e5]"
      )
    },
    /* @__PURE__ */ import_react.default.createElement("div", { className: "flex items-center justify-between w-full" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "flex flex-wrap gap-1" }, multiple && Array.isArray(selected) && selected.length > 0 ? selected.map((opt) => /* @__PURE__ */ import_react.default.createElement(
      "span",
      {
        key: opt.value,
        className: "flex items-center gap-1 px-2 py-1 bg-gray-200 rounded-md text-sm"
      },
      opt.label,
      /* @__PURE__ */ import_react.default.createElement(
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
        /* @__PURE__ */ import_react.default.createElement(import_lucide_react.Delete, { className: "w-4 h-4" })
      )
    )) : !Array.isArray(selected) && (selected == null ? void 0 : selected.label) ? /* @__PURE__ */ import_react.default.createElement("span", { className: "flex items-center gap-1 px-2 py-1 bg-gray-200 rounded-md text-sm" }, selected == null ? void 0 : selected.label, /* @__PURE__ */ import_react.default.createElement(
      "button",
      {
        className: "text-gray-500 hover:text-red-500",
        onClick: (e) => {
          e.stopPropagation();
          setSelected(multiple ? [] : void 0);
          onChange([]);
        }
      },
      /* @__PURE__ */ import_react.default.createElement(import_lucide_react.Delete, { className: "w-4 h-4" })
    )) : /* @__PURE__ */ import_react.default.createElement("span", null, "Select...")), /* @__PURE__ */ import_react.default.createElement(import_lucide_react.ChevronDown, { className: "w-4 h-4 text-gray-400" }))
  ), portal ? (0, import_react_dom.createPortal)(dropdownContent, document.body) : dropdownContent)));
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Dropdown
});
//# sourceMappingURL=index.js.map