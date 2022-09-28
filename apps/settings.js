import {KroemelsSimpleSheet} from "../main.js";

export class Settings {
	static registerBoolean(key, settings = { scope: 'world', default: 'true'}) {
		game.settings.register(KroemelsSimpleSheet.name, key, {
			name: game.i18n.localize(`${KroemelsSimpleSheet.name}.settings.${key}.name`),
			hint: game.i18n.localize(`${KroemelsSimpleSheet.name}.settings.${key}.hint`),
			scope: settings.scope,
			config: true,
			default: settings.default,
			type: Boolean,
		});
	}

	static get = key => {
		return game.settings.get(KroemelsSimpleSheet.name, key);
	};

	static onRender($html) {
		// TODO folders
		//$('<div>').addClass('form-group group-header').html(i18n("MonksTokenbar.TokenbarSettings")).insertBefore($('[name="monks-tokenbar.allow-player"]').parents('div.form-group:first'));
	}
}
