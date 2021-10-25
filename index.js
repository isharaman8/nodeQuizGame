//Imports
const prompt = require("prompt");
const colors = require("colors/safe");
const { firstCall } = require("./allFunctions");

prompt.message = colors.white(">>");
prompt.delimiter = colors.white(": ");
prompt.addProperties = colors.white;
prompt.start();

//Quiz initialization
firstCall();
