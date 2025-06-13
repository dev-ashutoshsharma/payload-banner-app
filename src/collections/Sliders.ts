import { CollectionConfig } from "payload/types";

const Sliders: CollectionConfig = {
	slug: "sliders",
	fields: [
		{
			name: "title",
			type: "text",
		},
		{
			name: "position",
			type: "number",
		},
		// {
		// 	name: "websites",
		// 	type: "relationship",
		// 	relationTo: "websites",
		// 	hasMany: true,
		// },
		{
			name: "slider",
			type: "relationship",
			relationTo: "media",
			hasMany: true,
		},
	],
};

export default Sliders;
