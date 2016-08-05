const user = require('../../models/app');

//()=>{} is how we do anon functions now	

	//Read All Apps
	router.get('/app' , (req, res) => {
		user.findAll((err) =>{
			res.status(500).json(err);
		}, (data) => {
			res.status(200).json(data);		
		})
	});
	
	//Read One App
	router.get('/app/:id' , (req, res) => {
		req.body.id = req.params.id;
		user.find(req.body, (err) =>{
			res.status(500).json(err);
		}, (data) => {
			res.status(200).json(data);		
		})
	});
	
	//Destroy One App
	router.delete('/app/:id' , (req, res) => {
		req.body.id = req.params.id;
		user.destroy(req.body, (err) =>{
			res.status(500).json(err);
		}, (data) => {
			res.status(200).json(data);		
		})
	});
	
	//Update One App
	router.post('/app/:id' , (req, res) => {
		req.body.id = req.params.id;
		user.update(req.body, (err) =>{
			res.status(500).json(err);
		}, (data) => {
			res.status(200).json(data);		
		})
	});
	
	//Create App
	router.post('/app' , (req , res) =>{
		user.create(req.body , (err) =>{
			res.status(500).json(err);
		}, (data) =>{
		res.status(200).json(data);
		})
		
	});