import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';

const PRODUCTS: Record<string, { name: string; price: number }> = {
  prosciutto: { name: 'Prosciutto', price: 750 },
  caprese: { name: 'Caprese', price: 700 },
  vegetariano: { name: 'Vegetariano', price: 650 },
};

export const server = {
  placeOrder: defineAction({
    accept: 'json',
    input: z.object({
      customerName: z.string().min(1, 'Name is required'),
      email: z.string().email('Valid email is required'),
      phone: z.string().min(1, 'Phone is required'),
      items: z
        .array(
          z.object({
            productId: z.string(),
            quantity: z.number().int().positive(),
          })
        )
        .min(1, 'Select at least one item'),
    }),
    handler: async (input) => {
      const orderItems = input.items.map((item) => {
        const product = PRODUCTS[item.productId];
        if (!product) throw new Error(`Unknown product: ${item.productId}`);
        return {
          productId: item.productId,
          name: product.name,
          unitPrice: product.price,
          quantity: item.quantity,
          subtotal: product.price * item.quantity,
        };
      });

      const total = orderItems.reduce((sum, item) => sum + item.subtotal, 0);

      // TODO: persist to D1 database
      console.log('Order received:', {
        customer: input.customerName,
        email: input.email,
        phone: input.phone,
        items: orderItems,
        total,
      });

      return { success: true, total };
    },
  }),
};
