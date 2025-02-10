"use client"; // 👈 Add this to make it a Client Component

import React, { useState, useEffect } from "react";
import { Dropdown } from "@/components";

export default function Page() {
  const [toggles, setToggles] = useState({
    isMultiple: true,
    isSearchable: false,
    isPortal: false,
    isOutline: false,
  });

  const handleToggle = (key: keyof typeof toggles) => {
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const [jsonInput, setJsonInput] = useState(
    JSON.stringify(
      [
        { value: "apple", label: "🍎 Apple" },
        { value: "banana", label: "🍌 Banana" },
        { value: "cherry", label: "🍒 Cherry" },
        { value: "grape", label: "🍇 Grape" },
        { value: "mango", label: "🥭 Mango" },
        { value: "orange", label: "🍊 Orange" },
        { value: "peach", label: "🍑 Peach" },
        { value: "pineapple", label: "🍍 Pineapple" },
        { value: "strawberry", label: "🍓 Strawberry" },
        { value: "watermelon", label: "🍉 Watermelon" },
      ],
      null,
      2
    )
  );

  const [options, setOptions] = useState(() => {
    try {
      return JSON.parse(jsonInput);
    } catch {
      return [];
    }
  });

  // Handle JSON input change
  const handleJsonChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJsonInput(e.target.value);
    try {
      const parsed = JSON.parse(e.target.value);
      if (Array.isArray(parsed)) {
        setOptions(parsed);
      }
    } catch (error) {
      console.error("Invalid JSON:", error);
    }
  };

  useEffect(() => {
    console.log("toggles:", toggles); 
  } , [toggles]);
  return (
    <main className="w-full p-10">
      <div className="py-10 border-b border-gray-900/10">
        <Dropdown
          options={options}
          multiple={toggles.isMultiple}
          searchable={toggles.isSearchable}
          portal={toggles.isPortal}
          outline={toggles.isOutline}
          onChange={(selected) => console.log(selected)}
        />
      </div>
      

      <div className="w-full py-10">
        <h2 className="text-base/7 font-semibold text-gray-900">Control</h2>
        <p className="mt-1 text-sm/6 text-gray-600">Use these toggles to customize the dropdown behavior</p>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-4">
          <div className="sm:col-span-1">
            <label className="block text-sm/6 font-medium text-gray-900">Multiple</label>
            <div className="mt-2">
              <label className='flex cursor-pointer select-none items-center'>
                <div className='relative'>
                  <input
                    type='checkbox'
                    checked={toggles.isMultiple}
                    onChange={() => handleToggle("isMultiple")}
                    className='sr-only'
                  />
                  <div className={`block h-8 w-14 rounded-full transition ${ toggles.isMultiple ? "bg-blue-500" : "bg-gray-300"}`}></div>
                  <div className={`absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition-transform transform ${ toggles.isMultiple ? "translate-x-6" : "translate-x-0" }`} ></div>
                </div>
              </label>
            </div>
          </div>

          <div className="sm:col-span-1">
            <label className="block text-sm/6 font-medium text-gray-900">Searchable</label>
            <div className="mt-2">
              <label className='flex cursor-pointer select-none items-center'>
                <div className='relative'>
                  <input
                    type='checkbox'
                    checked={toggles.isSearchable}
                    onChange={() => handleToggle("isSearchable")}
                    className='sr-only'
                  />
                  <div className={`block h-8 w-14 rounded-full transition ${ toggles.isSearchable ? "bg-blue-500" : "bg-gray-300"}`}></div>
                  <div className={`absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition-transform transform ${ toggles.isSearchable ? "translate-x-6" : "translate-x-0" }`} ></div>
                </div>
              </label>
            </div>
          </div>

          <div className="sm:col-span-1">
            <label className="block text-sm/6 font-medium text-gray-900">Outline</label>
            <div className="mt-2">
              <label className='flex cursor-pointer select-none items-center'>
                <div className='relative'>
                  <input
                    type='checkbox'
                    checked={toggles.isOutline}
                    onChange={() => handleToggle("isOutline")}
                    className='sr-only'
                  />
                  <div className={`block h-8 w-14 rounded-full transition ${ toggles.isOutline ? "bg-blue-500" : "bg-gray-300"}`}></div>
                  <div className={`absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition-transform transform ${ toggles.isOutline ? "translate-x-6" : "translate-x-0" }`} ></div>
                </div>
              </label>
            </div>
          </div>

          <div className="sm:col-span-1">
            <label className="block text-sm/6 font-medium text-gray-900">Portal</label>
            <div className="mt-2">
              <label className='flex cursor-pointer select-none items-center'>
                <div className='relative'>
                  <input
                    type='checkbox'
                    checked={toggles.isPortal}
                    onChange={() => handleToggle("isPortal")}
                    className='sr-only'
                  />
                  <div className={`block h-8 w-14 rounded-full transition ${ toggles.isPortal ? "bg-blue-500" : "bg-gray-300"}`}></div>
                  <div className={`absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition-transform transform ${ toggles.isPortal ? "translate-x-6" : "translate-x-0" }`} ></div>
                </div>
              </label>
            </div>
          </div>
        </div>

                {/* JSON Editor */}
                <div className="mt-10">
          <h2 className="text-base font-semibold text-gray-900">
            Edit Options (JSON Format)
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            Modify the dropdown options below as raw JSON.
          </p>
          <textarea
            value={jsonInput}
            onChange={handleJsonChange}
            className="mt-4 w-full h-48 p-3 border rounded-lg bg-gray-100 text-sm font-mono text-gray-700"
          />
        </div>

      </div>
    </main>
  );
}
