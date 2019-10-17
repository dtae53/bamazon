var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

var connection = mysql.createConnection({
	host:"localhost",
	port:3306,
	user:"root",
	password:"Huskies03!",
	database:"bamazon"
});

connection.connect(function(err){
	if(err)throw err;
	console.log("connected as id" + connection.threadId);
});

var displayProducts = function(){
	var query = "Select * FROM products";
	connection.query(query, function(err, res){
		if(err) throw err;
		var displayTable = new Table ({
			head: ["Item ID", "Product Name", "Category", "Price", "Quantity"],
			colWidths: [10,25,25,10,14]
		});
		for(var i = 0; i < res.length; i++){
			displayTable.push(
				[res[i].item_id,res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]
				);
		}
		console.log(displayTable.toString());
		purchasePrompt();
	});
}

function purchasePrompt(){
	inquirer.prompt([
	{
		name: "ID",
		type: "input",
		message:"Please enter Item ID you like to purchase.",
		//filter:Number
	},
	{
		name:"Quantity",
		type:"input",
		message:"How many items do you wish to purchase?", 
		//filter:Number
	}

 ]).then(function(answers){ 
	 console.log("Not working")
 	var quantityNeeded = answers.Quantity;
	var IDrequested = answers.ID;
	console.log("QUANT" + quantityNeeded);
	console.log("ID" + IDrequested);
	var newQuery ="SELECT * FROM products";
	connection.query(newQuery, function(err,res) {
		if(err) { throw err }
		console.log(res)
		connection.end()
	}); 
	//purchaseOrder(IDrequested, quantityNeeded);
 });
}; 

function purchaseOrder(ID, amtNeeded){
	console.log(typeof ID, ID);
	console.log("hey") 
	console.log(typeof amtNeeded, amtNeeded)
	var newQuery ="SELECT * FROM products";
	connection.query(newQuery, function(err,res) {
		if(err) { throw err }
		console.log(res)
		connection.end()
	});
	/*connection.query("SELECT * FROM products WHERE item_id = " + ID, function(err,res){
		if(err){
			connection.end()
			console.log(err)};
		console.log("beep")
		if(amtNeeded <= res[0].stock_quantity){
			var totalCost = res[0].price * amtNeeded;
			console.log("Good news your order is in stock!");
			console.log("Your total cost for " + amtNeeded + " " + res[0].product_name + " is " + totalCost + " Thank you!");

			connection.query("UPDATE products SET stock_quantity = stock_quantity - " + amtNeeded + " WHERE item_id = " + ID);
		} else{
			console.log("Insufficient quantity, sorry we do not have enough " + res[0].product_name + "to complete your order.");
		};
		//displayProducts();
	});*/
//	connection.end()
};

displayProducts(); 

