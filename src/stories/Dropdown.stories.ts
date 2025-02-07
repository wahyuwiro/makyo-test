import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Dropdown } from "./Dropdown";

// Storybook metadata
const meta: Meta<typeof Dropdown> = {
  title: "Form/Select Dropdown Field",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    multiple: { control: "boolean" },
    searchable: { control: "boolean" },
  },
  args: {
    onChange: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

const options = [
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
];  

export const Default: Story = {
  args: {
    options,
    multiple: true,
    searchable: true,
  },
};

export const MultipleSelection: Story = {
  args: {
    options,
    multiple: true,
    searchable: true,
  },
};

export const NoSearch: Story = {
  args: {
    options,
    multiple: false,
    searchable: false,
  },
};
