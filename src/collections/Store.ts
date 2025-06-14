import type { CollectionConfig } from "payload/types";

const Store: CollectionConfig = {
	slug: "store",
	access: {
		read: () => true,
	},
	fields: [
		{
			name: "id",
			type: "text",
			required: true,
		},
		{
			name: "name",
			type: "text",
			required: true,
		},
		{
			name: "domain",
			type: "text",
			required: true,
		},
		{
			name: "token",
			type: "text",
			required: true,
		},
	],
};

export default Store;
