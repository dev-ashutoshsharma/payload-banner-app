import express from "express";
import payload from "payload";

require("dotenv").config();
const app = express();

// Redirect root to Admin panel
app.get("/", (_, res) => {
	res.redirect("/admin");
});

app.get("/api/images", async (_, res) => {
	try {
		const media = await payload.find({
			collection: "media",
		});
		console.log(media, "media");
		res.json({
			images: media?.docs.map((doc) => doc.url),
		});
	} catch (error) {
		return res.status(500).json({ error });
	}
});

const start = async () => {
	// Initialize Payload
	await payload.init({
		secret: process.env.PAYLOAD_SECRET,
		express: app,
		onInit: async () => {
			payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
		},
	});

	// Add your own express routes here

	app.listen(3000);
};

start();
