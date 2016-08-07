//Required model for app to work

const apps = require('../../models/app');

//()=>{} is how we do anon functions now	
module.exports = (express) => {
	const router = express.Router();
	
	//Read All Apps
	router.get('/apps' , (req, res) => {
		apps.findAll((err) =>{
			res.status(500).json(err);
		}, (data) => {
			res.status(200).json(data);		
		})
	});
	
	//Read One App
	router.get('/apps/:id' , (req, res) => {
		req.body.id = req.params.id;
		apps.find(req.body, (err) =>{
			res.status(500).json(err);
		}, (data) => {
			res.status(200).json(data);		
		})
	});
	
	//Destroy One App
	router.delete('/apps/:id' , (req, res) => {
		req.body.id = req.params.id;
		apps.destroy(req.body, (err) =>{
			res.status(500).json(err);
		}, (data) => {
			res.status(200).json(data);		
		})
	});
	
	//Update One App
	router.post('/apps/:id' , (req, res) => {
		req.body.id = req.params.id;
		apps.update(req.body, (err) =>{
			res.status(500).json(err);
		}, (data) => {
			res.status(200).json(data);		
		})
	});
	
	//Create App
	router.post('/apps' , (req , res) =>{
		apps.create(req.body , (err) =>{
			res.status(500).json(err);
		}, (data) =>{
		res.status(200).json(data);
		})
		
	});
	
	return router;
};