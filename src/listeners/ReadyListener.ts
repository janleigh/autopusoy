import { ApplyOptions } from "@sapphire/decorators";
import { Listener } from "@sapphire/framework";

@ApplyOptions<Listener.Options>({
	event: "ready",
	once: true
})
export class UserEvent extends Listener {
	public override run() {
		this.container.logger.info("Ready!");
	}
}
