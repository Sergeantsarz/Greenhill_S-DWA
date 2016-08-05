//()=>{} is how we do anon functions now

module.exports = (express) => {
	const router = express.Router();
	
	router.post('/status' , (req, res) => {
		console.log("Route Working" , req.body);
		res.json({ 
			
			Healthy: true,	
		})
	});
	
	//Routes
	router.use('/api/v1/' , require('./api/user')(express));
	
	return router;
};