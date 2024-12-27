/** 
  * Copyright (C) 2024 Jan Leigh Muñoz
  * 
  * This program is free software: you can redistribute it and/or modify
  * it under the terms of the GNU Affero General Public License as published
  * by the Free Software Foundation, either version 3 of the License, o
  * (at your option) any later version.
  * 
  * This program is distributed in the hope that it will be useful,
  * but WITHOUT ANY WARRANTY; without even the implied warranty of
  * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  * GNU Affero General Public License for more details.
  * 
  * You should have received a copy of the GNU Affero General Public License
  * along with this program.  If not, see <https://www.gnu.org/licenses/>. 
  */
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
