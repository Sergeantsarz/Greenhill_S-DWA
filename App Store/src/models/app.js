//This is the model for apps, it is the basis for all CRUD functionality

const db = require('./db');

exports.create = (payload , err , success) =>{
	db.app.create(payload).then(success).catch(err);
};

//Get all apps
exports.findAll = (err , success) => {
	
	db.app.findAll().then(success).catch(err);
};

exports.find = (payload, err , success) => {
	
	db.app.find({
		where: {
			id: payload.id, 
		}, 
		//Find all relations in sequelize
		include: [{
			all: true, 
			nested: true, 
		}],
	}).then(success).catch(err);
};

//Update app
exports.update = (payload, err , success) => {
	
	db.app.find({
		where: {
			id: payload.id, 
		}
	}).then( (existingData) =>{
		existingData.updateAttributes(payload).then(success).catch(err);
		}).catch(err);		
};

//Delete app
exports.destroy = (payload, err , success) => {
	
	db.app.destroy({
		where: {
			id: payload.id, 
		}
	}).then(success).catch(err);		
};