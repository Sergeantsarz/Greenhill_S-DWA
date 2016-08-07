//This is the model for users, it is the basis for all CRUD functionality

const db = require('./db');

exports.create = (payload , err , success) =>{
	db.user.create(payload).then(success).catch(err);
};

//Get all Users
exports.findAll = (err , success) => {
	
	db.user.findAll().then(success).catch(err);
};

exports.find = (payload, err , success) => {
	
	db.user.find({
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

//Update Users
exports.update = (payload, err , success) => {
	
	db.user.find({
		where: {
			id: payload.id, 
		}
	}).then( (existingData) =>{
		existingData.updateAttributes(payload).then(success).catch(err);
		}).catch(err);		
};

//Delete Users
exports.destroy = (payload, err , success) => {
	
	db.user.destroy({
		where: {
			id: payload.id, 
		}
	}).then(success).catch(err);		
};


