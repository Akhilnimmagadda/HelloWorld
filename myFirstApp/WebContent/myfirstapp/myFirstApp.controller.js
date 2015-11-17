sap.ui.controller("myfirstapp.myFirstApp", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf myfirstapp.myFirstApp
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf myfirstapp.myFirstApp
*/
//	onBeforeRendering: function() {
//
//	},
  });
/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf myfirstapp.myFirstApp
*/
//	onAfterRendering: function() {
//
//	},
	
	greetMe: function(param){
		var name=sap.ui.getCore().byId("inputTab1").getValue();
		alert("Hai "+name+"!!, am inside contoller");
	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf myfirstapp.myFirstApp
*/
//	onExit: function() {
//
//	}

});