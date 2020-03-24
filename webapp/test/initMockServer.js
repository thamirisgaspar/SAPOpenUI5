sap.ui.define([
	"./localService/mockserver"
], function (mockserver) {
	"use strict";

	// initialize the mock server
	// inicializa o servidor mockado
	mockserver.init();

	// initialize the embedded component on the HTML page
	// inicializa o componente incorporado na página HTML
	sap.ui.require(["sap/ui/core/ComponentSupport"]);
});