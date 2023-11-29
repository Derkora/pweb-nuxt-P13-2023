/** @type {import('payload/types').CollectionConfig} */
const Author = {
    slug : "author",
    admin : {
      useAsTitle : "nama"
    },
    fields : [
      {
        name: "nama",
        type: "text",
        required: true,
      },
      {
        name: "email",
        type: "email",
        required: true,
        unique : true
      },
      {
        name: 'division',
        type: 'radio',
        options: [
            {
                label: 'Content Writer',
                value: 'content writer',
            },
            {
                label: 'Web dev',
                value: 'Web dev',
            },
        ],
        defaultValue: 'content writer',
      },
    ]
  }
  
  export default Author