sap.ui.jsview("mysampleapp.sampleApp", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf mysampleapp.sampleApp
	*/ 
	getControllerName : function() {
		return "mysampleapp.sampleApp";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf mysampleapp.sampleApp
	*/ 
	
	
	createContent : function(oController) {
 		
		
		var sampleTxt=new sap.m.Text({text:"Hello Akhil !, Welcome to SAP UI5."});
		//var toastMsg=new sap.m.MessageToast.show("Heyy","");
		var name=new sap.m.Input("name");
		
		var sampleBtn=new sap.m.Button("btn1", {
			text:"sayHello",
			tap:[oController.onShowHello,oController.param2]
		});
		var App=new sap.m.Page({
			title: "Hello World", 
			content:[
			         sampleTxt,
			         name,
			         sampleBtn
			         
	
	     	         ]
			
		});
 		return App;
 		
	}	
 		
});