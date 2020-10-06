sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("demo.ZCustomers.controller.View1", {
		onInit: function () {
var url = "/V2/Northwind/Northwind.svc/V2/Northwind/Northwind.svc/";
			var oModel = new sap.ui.model.odata.v2.ODataModel(url);
			
			this.getView().setModel(oModel, "m2");

		},
		onPress : function(){
		// get a List, and post the data
		this.getView().byId("idList").setVisible(true);
		
	},
	});
});