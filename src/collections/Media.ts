import { slateEditor } from "@payloadcms/richtext-slate";
import path from "path";
import type { CollectionConfig } from "payload/types";

const Media: CollectionConfig = {
	slug: "media",
	upload: {
		staticDir: path.resolve(__dirname, "../../public/media"),
	},
	access: {
		read: () => true,
	},
	fields: [
		{
			name: "alt",
			type: "text",
			required: true,
		},
		{
			name: "caption",
			type: "richText",
			editor: slateEditor({
				admin: {
					elements: ["link"],
				},
			}),
		},
	],
};

export default Media;
