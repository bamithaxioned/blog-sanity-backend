export default {
  name: 'section',
  title: 'Section',
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
      title: 'Banner Image',
      name: 'bannerimage',
      type: 'image',
      options: {
        hotspot: true // <-- Defaults to false
      },
      fields: [
        {
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
        }
      ]
    }
  ],
};
