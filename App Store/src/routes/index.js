//()=>{} is how we do anon functions now

module.exports = (express) => {
	const router = express.Router();
	
	//Route for users
	router.use('/api/v1/' , require('./api/user')(express));
	
	//Route for apps
	router.use('/api/v1/' , require('./api/app')(express));
	
	return router;
};