import type { Meta, StoryObj } from '@storybook/react';

import { SnsLink } from './sns-link';

const meta: Meta<typeof SnsLink> = {
  title: 'Component/Tabs',
  component: SnsLink,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SnsLink>;

export const Primary: Story = {
  args: {
    type: 'instagram',
    url: 'xxxx',
  },
};
