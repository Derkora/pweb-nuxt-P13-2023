import payload from 'payload';
/** @type {import('payload/types').CollectionConfig} */
const Artikel = {
    slug : "artikel",
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
                namalog: "Artikel",
                action: "create",
                timestamp: new Date(),
            },
            });
        } 
        if (args.operation == "update") {
            payload.create({
            collection: "log",
            data: {
                namalog: "Artikel",
                action: "update",
                timestamp: new Date(),
            },
            });
        } 
        if (args.operation == "delete") {
            payload.create({
            collection: "log",
            data: {
                namalog: "Artikel",
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
        name: 'image', 
        type: 'upload',
        relationTo: 'media',
        required: true,
      },
      {
        name: 'isiArti', 
        type: 'textarea', 
        required: true,
      },
    ]
  }
  
  export default Artikel