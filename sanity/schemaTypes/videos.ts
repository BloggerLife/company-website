import { defineField, defineType } from "sanity";

const videoGalleryType = defineType({
  name: "videos",
  type: "object",
  title: "Videos",
  fields: [
    {
      name: "videos",
      type: "array",
      of: [
        defineField({
          name: "video",
          type: "file",
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
            },
          ],
        }),
      ],
      options: {
        layout: "grid",
      },
    },
  ],
});

export default videoGalleryType;
