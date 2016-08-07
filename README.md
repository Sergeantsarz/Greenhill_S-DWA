# Greenhill_S-DWA
Deployment of Web Applications

Author: Sarah R. Greenhill
Class: DWA
Date Created: August 4, 2016
Date Updated: August 7, 2016

Git Repo: https://github.com/Sergeantsarz/Greenhill_S-DWA/tree/master/App Store

Examples show what your output should look like for each entry into the database.

Endpoints: 

	GET /api/v1/apps
	Display All Apps Info
	EXAMPLE:
		[
		  {
		    "id": 2,
		    "title": "Angry Birds",
		    "description": "Throw birds, knock things down.",
		    "createdAt": "2016-08-07T17:22:10.000Z",
		    "updatedAt": "2016-08-07T17:29:30.000Z"
		  },
		  {
		    "id": 4,
		    "title": "Facebook",
		    "description": "A social networking app that connects you to all Facebook has to offer.",
		    "createdAt": "2016-08-07T17:36:19.000Z",
		    "updatedAt": "2016-08-07T17:36:19.000Z"
		  },
		  {
		    "id": 5,
		    "title": "Temple Run",
		    "description": "Guide your avatar through fast-paced mazes while avoiding dangerous obstacles.",
		    "createdAt": "2016-08-07T17:36:57.000Z",
		    "updatedAt": "2016-08-07T17:36:57.000Z"
		  },
		  {
		    "id": 6,
		    "title": "Instagram",
		    "description": "Share your life in pictures with this social media app.",
		    "createdAt": "2016-08-07T17:37:31.000Z",
		    "updatedAt": "2016-08-07T17:37:31.000Z"
		  }
		]
	
	GET /api/v1/apps/:id
	Display Single App Info
	EXAMPLE:
		{
		    "id": 2,
		    "title": "Angry Birds",
		    "description": "Throw birds, knock things down.",
		    "createdAt": "2016-08-07T17:22:10.000Z",
		    "updatedAt": "2016-08-07T17:29:30.000Z"
		  }
		  
	GET /api/v1/users
	Display All Users Info
	EXAMPLE:
			[
			  {
			    "id": 1,
			    "fName": "Bob",
			    "lName": "Barker",
			    "email": "bob@bobbarker.com",
			    "createdAt": "2016-08-05T00:15:00.000Z",
			    "updatedAt": "2016-08-05T00:15:00.000Z",
			    "appID": 2
			  },
			  {
			    "id": 2,
			    "fName": "Tina",
			    "lName": "Fey",
			    "email": "tina@tinafey.com",
			    "createdAt": "2016-08-05T00:16:40.000Z",
			    "updatedAt": "2016-08-05T00:16:40.000Z",
			    "appID": 5
			  },
			  {
			    "id": 3,
			    "fName": "Cheryl",
			    "lName": "Cote",
			    "email": "cheryllynncote@gmail.com",
			    "createdAt": "2016-08-05T00:17:14.000Z",
			    "updatedAt": "2016-08-05T00:17:14.000Z",
			    "appID": 4
			  }
			]
	
	GET /api/v1/users/:id
	Display Single User Info
	EXAMPLE: 
			
			{
			    "id": 1,
			    "fName": "Bob",
			    "lName": "Barker",
			    "email": "bob@bobbarker.com",
			    "createdAt": "2016-08-05T00:15:00.000Z",
			    "updatedAt": "2016-08-05T00:15:00.000Z",
			    "appID": "2"
			}
	

