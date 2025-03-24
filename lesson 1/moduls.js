export const name = "square";

export function draw(ctx, length, x, y, color) {
	ctx.fillStile = color;
	ctx.fillRect(x, y, length, length);

	return {
		length: length,
		x: x,
		y: y,
		color: color,
	};
}
//---------------------------IMPORT

import { name, draw } from "./moduls.js";
import * as Square from "./moduls.js";
