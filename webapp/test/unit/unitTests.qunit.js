/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"Hello_World/Hello_World/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});