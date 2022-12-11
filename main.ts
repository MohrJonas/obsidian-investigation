import {Plugin} from "obsidian";
import {platform} from "process"

export default class ObsidianInvestigation extends Plugin {
	async onload() {
		console.log(`Detected OS ${platform}`)
		this.app.vault.on("create", (file) => {
			console.log(`Called create on file ${file.path}`)
		});
	}
}
