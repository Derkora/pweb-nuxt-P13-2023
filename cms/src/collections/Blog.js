import payload from 'payload';
/** @type {import('payload/types').CollectionConfig} */
const Blog = {
    slug : "blog",
    admin: {
        useAsTitle: "title"
    },
    hooks: {
    afterOperation: [
        async (args) => {
        if (args.operation == "create") {
            payload.create({
            collection: "log",
            data: {
                namalog: "Blog",
                action: "create",
                timestamp: new Date(),
            },
            });
        } 
        if (args.operation == "update") {
            payload.create({
            collection: "log",
            data: {
                namalog: "Blog",
                action: "update",
                timestamp: new Date(),
            },
            });
        } 
        if (args.operation == "delete") {
            payload.create({
            collection: "log",
            data: {
                namalog: "Blog",
                action: "delete",
                timestamp: new Date(),
            },
            });
        }
        },
    ],
    },
    fields : [
      {
        name: "title",
        type: "text",
        required: true,
      },
      {
        name: 'date',
        type: 'date',
        required: true,
        admin: {
          date: {
              pickerAppearance: 'dayOnly',
              displayFormat: 'd MMM yyy',
          },
        },
      },
      {
        name: 'writer',
        type: 'relationship',
        required: true,
        relationTo: 'author',
        filterOptions: ({ relationTo, siblingData }) => {
          return {
            division : { equals : 'content writer' }
          }
        }
      },
      {
        name: 'image', 
        type: 'upload', 
        relationTo: 'media',
        required: true,
      },
      {
        name: "isiBlog", 
        type: "textarea", 
        required: true,
      },
    ]
  }
  
  export default Blog
  
  