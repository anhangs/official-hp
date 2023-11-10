import type { Meta, StoryObj } from '@storybook/react';

import SectionTitle from '../../../../app/_components/parts/sectionTitle';
import styles from "../../../../app/_styles/theme.module.scss"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Component/SectionTitle',
  component: SectionTitle,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    content: { type: 'string', control: 'text', name: "content", description: 'text of title.', defaultValue: "Profile" },
    size: { type: 'number', control: "number", name: "size", description: 'size of radius.', defaultValue: 40 },
    color: { type: 'number', control: 'color', name: "color", description: 'color of radius.', defaultValue: "pink" },
    position: { control: { x: { control: "number" }, y: { control: "number" } }, name: "position", description: 'position of radius.', defaultValue: { x: 0, y: 0 } },
  },
} satisfies Meta<typeof SectionTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Profile: Story = {
  args: {
    content: "Profile",
    size: 80,
    position: { x: -30, y: -15 },
    color: "pink",
  },
};

export const Career: Story = {
  args: {
    content: "Career",
    size: 80,
    position: { x: 190, y: -10 },
    color: "pink",
  },
};

