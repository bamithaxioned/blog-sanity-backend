//  Category  
export default {
  name: 'category',
  title: 'Categories',
  type: 'document',
  fields: [
    {
      name: 'categoryname',
      title: 'Category Name',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'categoryslug',
      type: 'slug',
      options: {
        source: 'categoryname',
        maxLength: 200, // will be ignored if slugify is set
        slugify: input => input
                             .toLowerCase()
                             .replace(/\s+/g, '-')
                             .slice(0, 200)
      }
    },
    {
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 3, // Optionally specify the number of rows for the input field
    },
    {
      title: 'Poster',
      name: 'poster',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
        }
      ]
    }
  ]
}