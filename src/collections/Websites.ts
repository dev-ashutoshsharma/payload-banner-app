import type { CollectionConfig } from "payload/types";

const Websites: CollectionConfig = {
	slug: "websites",
	access: {
		read: () => true,
	},
	fields: [
		{
			name: "thumbnail",
			type: "upload",
			relationTo: "media",
		},
		{
			name: "title",
			type: "text",
			required: true,
		},
		{
			name: "link",
			type: "text",
			required: true,
		},
	],
};

export default Websites;
