sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
	"./controller/HelloDialog",
	"sap/ui/Device"
], function (UIComponent, JSONModel, HelloDialog, Device) {
    "use strict";
    return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
        metadata : {
            manifest: "json"
        },
        init : function () {
            // call the init function of the parent
            // chama a função init do pai
            UIComponent.prototype.init.apply(this, arguments);
            // set data model
            // define o modelo de dados
            var oData = {
                recipient : {
                    name : ""
                }
            };

            var oModel = new JSONModel(oData);
            this.setModel(oModel);

            // set device model
            // defineo modelo do dispositivo
			var oDeviceModel = new JSONModel(Device);
			oDeviceModel.setDefaultBindingMode("OneWay");
			this.setModel(oDeviceModel, "device");

            // set dialog
            // define a caixa de diálogo
            this._helloDialog = new HelloDialog(this.getRootControl());
            
            // create the views based on the url/hash
            // cria as visualizações com base no URL / hash
			this.getRouter().initialize();
        },
        exit : function() {
            this._helloDialog.destroy();
            delete this._helloDialog;
        },
        openHelloDialog : function () {
		    this._helloDialog.open();
		},
        getContentDensityClass : function () {
            if (!this._sContentDensityClass) {
                if (!Device.support.touch) {
                    this._sContentDensityClass = "sapUiSizeCompact";
                } else {
                    this._sContentDensityClass = "sapUiSizeCozy";
                }
            }
            return this._sContentDensityClass;
        }
    });
});