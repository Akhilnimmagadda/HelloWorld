sap.ui.jsview("myfirstapp.myFirstApp", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf myfirstapp.myFirstApp
	*/ 
	getControllerName : function() {
		return "myfirstapp.myFirstApp";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf myfirstapp.myFirstApp
	*/ 
	createContent : function(oController) {
 		
		var firstBtn=new sap.m.Button("idBtn1",{
 			
 		text:"Am First!!",
 		tap:[oController.greetMe,oController.param]
 		});
		
		var secndBtn=new sap.m.Button("idBtn2", {
			
			text:"Am Second !!",
			tap:[oController.greetMe,oController.param2]
		});
		
		var inputTab1=new sap.m.Input("inputTab1", {
			 
		});
		var page= new sap.m.Page({
			title: "Hello Akhil !!",
			content: [
			          firstBtn,
			          secndBtn,
			          inputTab1
			]
		});
 		
 		return page;
	}

});