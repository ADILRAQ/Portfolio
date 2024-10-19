import { Meta, StoryObj } from "@storybook/react/*";
import { ComponentProps } from "react";
import AccordionItem from "../components/AccordionItem";

type AccordionItemProps = ComponentProps<typeof AccordionItem>;

const meta :Meta<AccordionItemProps> = {
  component: AccordionItem,
  argTypes: {
    data: {
      control: 'object',
    }
  }
}

export default meta;

type Story = StoryObj<typeof AccordionItem>;

export const Item :Story = {
  args: {
    data: {
      name: 'Title',
      description: 'Content',
      status: {
        status: true,
        content: 'Done'
      },
      techs: ['ReactJS', 'ExpressJS', 'Docker'],
      link: ''
    },
  },
}
