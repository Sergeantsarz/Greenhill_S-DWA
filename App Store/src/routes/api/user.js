//Requires the user model to keep this functioning

const user = require('../../models/user');

//()=>{} is how we do anon functions now

module.exports = (express) => {
	const router = express.Router();
	
	//Read All Users
	router.get('/users' , (req, res) => {
		user.findAll((err) =>{
			res.status(500).json(err);
		}, (data) => {
			res.status(200).json(data);		
		})
	});
	
	//Read One User
	router.get('/users/:id' , (req, res) => {
		req.body.id = req.params.id;
		user.find(req.body, (err) =>{
			res.status(500).json(err);
		}, (data) => {
			res.status(200).json(data);		
		})
	});
	
	//Delete Single User
	router.delete('/users/:id' , (req, res) => {
		req.body.id = req.params.id;
		user.destroy(req.body, (err) =>{
			res.status(500).json(err);
		}, (data) => {
			res.status(200).json(data);		
		})
	});
	
	//Update Single User
	router.post('/users/:id' , (req, res) => {
		req.body.id = req.params.id;
		user.update(req.body, (err) =>{
			res.status(500).json(err);
		}, (data) => {
			res.status(200).json(data);		
		})
	});
	
	//Create a User
	router.post('/users' , (req , res) =>{
		user.create(req.body , (err) =>{
			res.status(500).json(err);
		}, (data) =>{
		res.status(200).json(data);
		})
		
	});	
	
	return router;
};