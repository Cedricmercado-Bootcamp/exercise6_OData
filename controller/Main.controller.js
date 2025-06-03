sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Sorter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/FilterType"
], (Controller, Sorter, Filter, FilterOperator, FilterType) => {
    "use strict";

    return Controller.extend("sapips.training.odata.controller.Main", {
        onInit() {
        },
        onAfterRendering: function() {
            let ODView = this.getView(); 
            let ODSort = new Sorter("ProductName");
            ODView.byId("oProductListItem").getBinding("items").sort(ODSort);
            let odView = this.getView();
            let odFilter = new Filter("Discontinued",FilterOperator.EQ, false);
            odView.byId("oProductListItem").getBinding("items").filter(odFilter, FilterType.Control);
        }
    });
});