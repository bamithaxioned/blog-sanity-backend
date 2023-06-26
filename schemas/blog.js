// schemas/pet.js
import category from './Category';
export default {
  name: 'blog',
  type: 'document',
	title: 'Blog',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'hortDescription',
      type: 'string',
      title: 'Short Description'
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block'
        },
        {
          type: 'image',
          fields: [
            {
              type: 'text',
              name: 'alt',
              title: 'Alternative text',
              description: `Some of your visitors cannot see images, 
                be they blind, color-blind, low-sighted; 
                alternative text is of great help for those 
                people that can rely on it to have a good idea of 
                what\'s on your page.`,
              options: {
                isHighlighted: true
              }
            }
          ]
        }
      ]
    },
    {
      title: 'Created At',
      name: 'CreatedAt',
      type: 'datetime',
      options: {
        dateFormat: 'DD-MM-YYYY',
        timeFormat: 'HH:mm',
        timeStep: 15,
        calendarTodayLabel: 'Today'
      }
    },
    {
      title: 'Address',
      name: 'address',
      type: 'object',
      fields: [
        {name: 'street', type: 'string', title: 'Street name'},
        {name: 'streetNo', type: 'string', title: 'Street number'},
        {name: 'city', type: 'string', title: 'City'}
      ]
    },
    {
      title: 'Category',
      name: 'category',
      type: 'string',
      options: {
        list: [
          ...category
        ],
      }
    }
  ]
}