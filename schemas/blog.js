export default {
  title: 'Blog',
  name: 'blog',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: input => input
                             .toLowerCase()
                             .replace(/\s+/g, '-')
                             .slice(0, 200)
      }
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block'
        },
        {
          type: 'image'
        },
      ]
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
          title: 'Alt',
          name: 'alt',
          type: 'string',
        }
      ]
    },
    {
      title: 'Publish Date',
      name: 'publishdate',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        calendarTodayLabel: 'Today'
      },
    },
    {
      title: 'Author',
      name: 'authorName',
      type: 'reference',
      to: [ {type: 'author'} ]
    }
  ]
}