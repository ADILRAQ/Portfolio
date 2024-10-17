import { Meta, StoryObj } from '@storybook/react';
import Button from "../components/Button";
import { ComponentProps } from 'react';

type StoryProps = ComponentProps<typeof Button>;

const meta: Meta<StoryProps> = {
    component: Button,
}

export default meta;

type Story = StoryObj<StoryProps>;

export const Normal :Story = {
    args: {
        variant: 'normal',
        sz: "sm",
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