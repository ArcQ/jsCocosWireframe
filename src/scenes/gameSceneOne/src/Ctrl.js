var Model = require('./Model');
var View = require('./View');
var MenuOne = require('./MenuOne/MenuOne');
var PlayLayerOne = require('./Layers/PlayLayerOne')

//GameScene Ctrl
var Ctrl = function(){
	this.model = null;
	this.view = null;
	this.menuOne = null;
};

Ctrl.prototype.start = function(){
	
	if (this.model === null){
		this.model = new Model();
	}

	if((this.view === null)||(this.view === undefined)){
		
		this.view = new View();
		this.view.addLayer(new PlayLayerOne());

		if(this.menuOne === null){
			this.menuOne = new MenuOne();
			this.menuOne.start();
		}
		console.log(this.menuOne.getLayer());
		this.view.addLayer(this.menuOne.getLayer());
	}
};

module.exports = Ctrl;
