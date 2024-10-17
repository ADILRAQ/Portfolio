import { Meta, StoryObj } from '@storybook/react';
import Button from "../components/Button";
import React, { ComponentProps } from 'react';
// import '../index.css';

type StoryProps = ComponentProps<typeof Button>;

const meta: Meta<StoryProps> = {
    component: Button,
    argTypes: {
        sz: {
            options: ['sm', 'md', 'lg'],
            control: 'select',
        },
        variant: {
            options: ['normal', 'styled', 'dark'],
            control: 'select',
        }
    }
}

export default meta;

type Story = StoryObj<StoryProps>;

export const Normal :Story = {
    args: {
        variant: "normal",
        sz: "md",
        children: 'Projects'
    },
    // render: (args) => {
    //     return (
    //         <Button {...args}>{'Resume >'}</Button>
    //     );
    // }
};

export const Styled :Story = {
    args: {
        variant: 'styled',
        sz: 'md',
        children: 'Projects'
    },
    // render: (args) => {
    //     return (
    //         <Button {...args}>{'Resume >'}</Button>
    //     );
    // }
};

export const Dark :Story = {
    args: {
        variant: 'dark',
        sz: 'md',
        children: 'Projects'
    },
    // render: (args) => {
    //     return (
    //         <Button {...args}>{'Resume >'}</Button>
    //     );
    // }
};