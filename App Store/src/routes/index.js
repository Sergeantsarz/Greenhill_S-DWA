//()=>{} is how we do anon functions now

module.exports = (express) => {
	const router = express.Router();
	
	//Routes
	router.use('/api/v1/' , require('./api/user')(express));
	
	router.use('/api/v1/' , require('./api/app')(express));
	
	return router;
};