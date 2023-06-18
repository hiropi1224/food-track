import type { Meta, StoryObj } from '@storybook/react';

import { Footer } from './index';

const meta: Meta<typeof Footer> = {
  title: 'Layout/Footer',
  component: Footer,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Primary: Story = {
  args: {},
};
