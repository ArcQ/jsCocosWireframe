var Model = require('./Model');
var View = require('./View');

//MenuOne Ctrl
var Ctrl = function(){
	this.model = null;
	this.view=null;
};

Ctrl.prototype.start = function(){
		if(this.model ===null){
			this.model = new Model();
		}
    if (this.view === null){
    	this.view  = new View(this);
    }

};

Ctrl.prototype.menuToggleClicked = function(){
		var isShowMenu = this.model.menuToggleClicked();
		this.view.toggleSecondMenu(isShowMenu);
};
module.exports = Ctrl;
