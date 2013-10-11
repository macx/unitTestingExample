'use strict';

function myappModule(translations) {
	var DEFAULT_LANG = 'en';
	var DEFAULT_TRANSLATIONS = {};

	module('myapp', function config($translateProvider) {
		$translateProvider.translations(DEFAULT_LANG, translations || DEFAULT_TRANSLATIONS);
		$translateProvider.preferredLanguage(DEFAULT_LANG);
	});

}