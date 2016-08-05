# Greenhill_S-DWA
Deployment of Web Applications

Author: Sarah R. Greenhill
Class: DWA
Date Created: August 4, 2016

Git Repo: https://github.com/Sergeantsarz/Greenhill_S-DWA/tree/master/appStore

Endpoints: 

	GET /api/v1/apps
	Display All Apps Info
	
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
			    "appID": null
			  },
			  {
			    "id": 2,
			    "fName": "Tina",
			    "lName": "Fey",
			    "email": "tina@tinafey.com",
			    "createdAt": "2016-08-05T00:16:40.000Z",
			    "updatedAt": "2016-08-05T00:16:40.000Z",
			    "appID": null
			  },
			  {
			    "id": 3,
			    "fName": "Cheryl",
			    "lName": "Cote",
			    "email": "cheryllynncote@gmail.com",
			    "createdAt": "2016-08-05T00:17:14.000Z",
			    "updatedAt": "2016-08-05T00:17:14.000Z",
			    "appID": null
			  }
			]

	
	GET /api/v1/apps/:id
	Display Single App Info
	
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
			    "appID": null
			}
	

