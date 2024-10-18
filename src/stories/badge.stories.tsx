import { Meta, StoryObj } from '@storybook/react'
import Badge from '../components/Badge';
import { ComponentProps } from 'react';

type StoryProps = ComponentProps<typeof Badge>;

const meta :Meta<StoryProps> = {
  component: Badge,
  argTypes: {
    style: {
      options: ['orange', 'dark', 'bordered'],
      control: 'select'
    }
  }
}

export default meta;

type Story = StoryObj<StoryProps>;

export const Orange : Story = {
    args: {
      style: 'orange',
      children: 'Done'
    }
}

export const Dark : Story = {
    args: {
      style: 'dark',
      children: 'In Progress'
    }
}
export const Bordered : Story = {
    args: {
      style: 'bordered',
      children: 'Express.Js'
    }
}
