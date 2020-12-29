class Actor
{
	constructor ( fnameOrObject, lname, birthday, image, linkIMDB)
	{
		if(arguments.length === 1 && typeof fnameOrObject === 'object')
		{
			this.fname = fnameOrObject.fname;
			this.lname = fnameOrObject.lname;
			this.birthday = new Date(fnameOrObject.birthday);
			this.image = fnameOrObject.image;
			this.linkIMDB = fnameOrObject.linkIMDB;
		} 
		else if (arguments.length === 5)
		{
			this.fname = fnameOrObject;
			this.lname = lname;
			this.birthday = new Date(birthday);
			this.image = image;
			this.linkIMDB = linkIMDB;
		}
		else 
		{
			// errror
			console.log("Throw exception bad actor creation");
			//throw "Bad actor creation";
		}
	}

	age () 
	{
		// calculates the age based on the birthday
		return (new Date().getFullYear() - this.birthday.getFullYear());
	}
	
}
export default Actor;