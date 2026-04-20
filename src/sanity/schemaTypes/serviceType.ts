import { defineField, defineType } from 'sanity'

export const serviceType = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
      validation: (rule) => rule.required(),
      description: 'Example: Rp 80.000',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Haircut', value: 'Haircut' },
          { title: 'Treatment', value: 'Treatment' },
          { title: 'Coloring', value: 'Coloring' },
          { title: 'Package', value: 'Package' },
        ],
      },
    }),
  ],
})
