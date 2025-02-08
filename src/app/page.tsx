"use client"; // 👈 Add this to make it a Client Component

import { Dropdown } from "@/components";

export default function Page() {
  return (
    <main>
      <Dropdown
        options={[
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
        ]}

        multiple={true}       // Add multiple selection
        searchable={true}     // Add search functionality
        onChange={(selected) => console.log(selected)}
      />
    </main>
  );
}
