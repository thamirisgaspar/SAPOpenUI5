sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
	"sap/ui/core/Fragment"
], function (Controller, MessageToast, Fragment) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.controller.HelloPanel", {
        onShowHello : function () {
            // show a native JavaScript alert
            // mostrar um alerta JavaScript nativo
            //alert("Hello World");

            // read msg from i18n model
            // ler msg do modelo i18n
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            var sMsg = oBundle.getText("helloMsg", [sRecipient]);

            // show message
            // mostra a mensagem
            MessageToast.show(sMsg);
        },
		onOpenDialog : function () {
			this.getOwnerComponent().openHelloDialog();
		}
    });
});