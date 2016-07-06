console.log('starting password manager');

var storage = require("node-persist");
storage.initSync();

function accountConst(name,username,password){
	this.name = name;
	this.username = username;
	this.password = password;
}

function createAccount(account){
	var accounts = storage.getItemSync("accounts")
	if(typeof accounts === "undefined"){
		accounts = [];
	}
	accounts.push(account);
	storage.setItemSync("accounts",accounts);

	console.log(account);

	return account;
}

function getAccount(accountName){
	var accounts = storage.getItemSync("accounts");

	accounts.forEach(function (account){
		if(account.name === accountName){
			return account;
		}
	});
		
	return undefined;
}

var account = new accountConst("alex","alex123","1234");

createAccount(account);

console.log(getAccount("Alex"));