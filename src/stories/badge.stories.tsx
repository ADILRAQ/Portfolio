import { Meta, StoryObj } from '@storybook/react'
import Badge from '../components/Badge';
import { ComponentProps } from 'react';

type StoryProps = ComponentProps<typeof Badge>;

const meta :Meta<StoryProps> = {
  component: Badge,
  argTypes: {
    variant: {
      options: ['orange', 'dark', 'bordered'],
      control: 'select'
    },
    sz: {
      options: ['sm', 'md'],
      control: 'select'
    }
  }
}

export default meta;

type Story = StoryObj<StoryProps>;

export const Orange : Story = {
    args: {
      variant: 'orange',
      sz: 'sm',
      children: 'Done'
    }
}

export const Dark : Story = {
    args: {
      variant: 'dark',
      sz: 'sm',
      children: 'In Progress'
    }
  }
  export const Bordered : Story = {
    args: {
      variant: 'bordered',
      sz: 'sm',
      children: 'Express.Js'
    }
}
