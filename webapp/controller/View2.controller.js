sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast"
	
], function (Controller, JSONModel,Fragment,SimpleForm,MessageToast) {
	"use strict";
	
	return Controller.extend("Hello_World.Hello_World.controller.View2", {
			onInit: function() {
		        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		        oRouter.getRoute("View2").attachMatched(this._onRouteMatched, this);
			    },
			    
			    _onRouteMatched: function(oEvent) {
					var idDevuelto = oEvent.getParameter("arguments").data;
					var idCompleto = "/Customers('" + idDevuelto + "')"; //url para el model.read
					var oForm = this.getView().byId("formPruebas");
					var serviceUrl = "/V3/Northwind/Northwind.svc/";
					
					var oModelData = new sap.ui.model.odata.ODataModel(serviceUrl,{
					 	JSON:true,
					 	useBatch: false
					});
					
					oModelData.read(idCompleto, {
					    success: function (oData) {
					        sap.m.MessageToast.show(oData.CustomerID);
					        //sap.m.MessageToast.show(JSON.stringify(oData));
					        var oModel = new JSONModel(oData);
							oForm.setModel(oModel);
							
					    },
					    error: function (oError) {
					    	sap.m.MessageToast.show("No funca");
					    }
					});
			    },
			patras:function(){
					var oRoute = sap.ui.core.UIComponent.getRouterFor(this);
					oRoute.navTo("RouteViewFirst");
				}
			});
});