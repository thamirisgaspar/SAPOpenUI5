sap.ui.define([
    "sap/ui/base/ManagedObject",
    "sap/ui/core/Fragment",
    "sap/ui/core/syncStyleClass"
], function (ManagedObject, Fragment, syncStyleClass) {
    "use strict";
    return ManagedObject.extend("sap.ui.demo.walkthrough.controller.HelloDialog", {
        constructor : function (oView) {
            this._oView = oView;
        },
        exit : function () {
            delete this._oView;
        },
        open : function () {
            var oView = this._oView;

            // create dialog lazily
            // cria um dialog lazily
            if (!oView.byId("helloDialog")) {
                var oFragmentController = {
                    onCloseDialog : function () {
                        oView.byId("helloDialog").close();
                    }
                };

                // load asynchronous XML fragment
                // carregar fragmento XML assíncrono
                Fragment.load({
                    id: oView.getId(),
                    name: "sap.ui.demo.walkthrough.view.HelloDialog",
                    controller: oFragmentController
                }).then(function (oDialog) {
                    // connect dialog to the root view of this component (models, lifecycle)
                    // conecta o dialog com a visualização raiz deste componente (modelos, ciclo de vida)
                    oView.addDependent(oDialog);
                    // forward compact/cozy style into dialog
                    // encaminha o estilo compact/cozy  para o diálogo
					syncStyleClass(oView.getController().getOwnerComponent().getContentDensityClass(), oView, oDialog);
                    oDialog.open();
                });
            } else {
                oView.byId("helloDialog").open();
            }
        }
    });
});