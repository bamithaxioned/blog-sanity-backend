//  Homepage - Category Relationship/Reference
export default {
  name: 'listingcategory',
  title: 'Listing Category',
  type: 'object',
  fields: [
    {
      title: 'Section Heading',
      name: 'sectionheading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Description', 
      name: 'description',
      type: 'text',
      rows: 3, // Optionally specify the number of rows for the input field 
    },
    {
      title: 'Category',
      name: 'categories',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'category' }] }],
    }
  ],
};
