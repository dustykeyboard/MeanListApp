# MeanListApp

Socially authenticated List app, built on the MEAN stack

This app was started as an excercise in learning the MEAN stack - Mongo, Express, Angular and Node.
Most example applications dealt with only a single function or controller, so here is an example bringing together multiple components into a useable product.

## Features

The target features of **MeanListApp** are:

1. User authentication via
	* Local accounts with username and password  
	  With client-side password encryption and no clear-text password storage.
	* A password reset function will also be required, potentially using emails with a single use reset token (planned)
	* Twitter authentication (planned)
	* Facebook authentication (planned)
	* Optionally combining multiple authentication methods for a single account (planned)
2. Separation of front-end application code and back-end code
	* Front-end Web application should be completely separate from back-end
	* Front-end communicates through API calls 
2. Custom List creation and management
	* A list will have an *owner*, a *name* a collection of *items* and a *privacy level*. Each *item* will have a *name*, *description* and *complete* status. Other metadata, such as created and modified dates will also be stored.
	* On-boarding process to create a first list and first item.
	* List can be renamed
	* Lists will have permanent URL, perhaps using Mongo's _id, otherwise generating a separate unique identifier
3. List can be public, read-only or private?
	* *Public*  
	List can be viewed and items can be *edited* by anyone
	* *Shared*  
	List can be viewed and items can be *completed* by anyone
	* *Published*  
	List can be viewed by anyone
	* *Private*  
	List can only be accessed by the owner

## Learning

Through this program, the tools I am using and learning are:

* Nodejs
* Express
* Jade Templates
* Mongo
* Angular
* Bootstrap
* Visual Studio Code
* Git
* GitHub
