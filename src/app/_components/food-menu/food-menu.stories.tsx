import type { Meta, StoryObj } from '@storybook/react';

import { FoodMenu } from './index';

const meta: Meta<typeof FoodMenu> = {
  title: 'Component/FoodMenu',
  component: FoodMenu,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FoodMenu>;

export const Primary: Story = {
  args: {
    foodName: 'foodName',
    price: '1000',
  },
};
