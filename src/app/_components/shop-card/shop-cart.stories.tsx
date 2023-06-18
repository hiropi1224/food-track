import { Meta, StoryObj } from '@storybook/react';

import { ShopCard } from '@/app/_components/shop-card';

const meta: Meta<typeof ShopCard> = {
  title: 'component/ShopCard',
  component: ShopCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ShopCard>;

export const Primary: Story = {
  args: {
    shop: {
      id: '37b6b7be-3d0b-4021-8f5f-04064f33dbc6',
      created_at: '2023-06-17T08:00:25.965784+00:00',
      updated_at: null,
      shop_name: 'Twenty’s TacoRice 20’s',
      business_day: '3',
      shop_image: null,
      food_image: null,
      food_tag: 'タコライス',
      is_cashless: true,
      lng: '139.712424',
      lat: '35.673893',
    },
  },
};
