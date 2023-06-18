import type { Meta, StoryObj } from '@storybook/react';

import { TabsTemplate } from './tabs';

const meta: Meta<typeof TabsTemplate> = {
  title: 'Component/Tabs',
  component: TabsTemplate,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TabsTemplate>;

export const Primary: Story = {
  args: {
    tabs: [
      { path: '/1', tabText: 'Mon', isActive: true },
      { path: '/2', tabText: 'Tue', isActive: false },
      { path: '/3', tabText: 'Wed', isActive: false },
      { path: '/4', tabText: 'Thu', isActive: false },
      { path: '/5', tabText: 'Fri', isActive: false },
    ],
  },
};
