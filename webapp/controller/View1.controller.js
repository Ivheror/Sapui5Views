sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast"
	
], function (Controller, JSONModel,MessageToast) {
	"use strict";

	return Controller.extend("Hello_World.Hello_World.controller.View1", {
		onInit: function () {
			
			var oTable = this.getView().byId("tablePrueba");
			var serviceUrl = "/V3/Northwind/Northwind.svc/";
			var oModelData = new sap.ui.model.odata.ODataModel(serviceUrl,{
				JSON:true,
				useBatch: false
			});
		
			oModelData.read("/Customers",{
			success: function(data){
				var oModel = new JSONModel(data.results);
				oTable.setModel(oModel);

			},
			error:function(error){}
			
		});
			
		},
		selectCustomers:function(oEvento){
			var oRoute = sap.ui.core.UIComponent.getRouterFor(this);
			var id = oEvento.getSource().getBindingContext().getObject().CustomerID; //esto me devuelve ALFKI por ejemplo al seleccionar el primero
			oRoute.navTo("View2",{data:id});
		}
	});
});