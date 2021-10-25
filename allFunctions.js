//All imports
const prompt = require("prompt");
const { answers, allQuestions } = require("./questions");
const colors = require("colors/safe");

//Funtions

function generalRules() {
	console.log("You have all the time in the world to give answers");
	console.log("This game has 10 questions.");
	console.log("make sure you spell your answers correctly correctly.");
	console.log("for convenience, you will be provided with four options.");
	console.log("So lets begin");
}

async function firstCall() {
	generalRules();
	prompt.get(
		[
			{
				name: "inres",
				description: "type 'y' to proceed and 'n' to quit!",
			},
		],
		(err, res) => {
			if (res.inres == "y") {
				mainQuizFunction();
			} else {
				console.log(
					`You either exited the quiz or there was a type, start again to continue with the quiz`
				);
				process.exit(0);
			}
		}
	);
}

function getResult(obj1, obj2) {
	let rights = 0;
	let wrongs = 0;

	for (let elem in obj1) {
		if (obj1[elem] == obj2[elem]) {
			rights++;
		} else {
			wrongs++;
		}
	}
	if (rights === 10) {
		return (
			colors.bgGreen(colors.bold(colors.black(`Perfection! Result > `))) +
			"  " +
			colors.bgMagenta(
				colors.black(`Right answers: ${rights},` + `Wrong answes: ${wrongs}`)
			)
		);
	} else if (rights >= 5) {
		return (
			colors.bgBlue(colors.bold(colors.black("Achieveing! Result > "))) +
			"  " +
			colors.bgMagenta(
				colors.black(`Right answers: ${rights},` + `Wrong answes: ${wrongs}`)
			)
		);
	}
	return (
		colors.bgRed(colors.bold(colors.black("Practice hard! Result > "))) +
		"  " +
		colors.bgMagenta(
			colors.black(`Right answers: ${rights},` + `Wrong answes: ${wrongs}`)
		)
	);
}
const mainQuizFunction = () => {
	console.log(
		`Let's check your knowledge of computers and personalities related to it`
	);
	prompt.get(allQuestions, (err, answer) => {
		console.log(getResult(answers, answer));
	});
};
console.log(
	"Before entering this game you should know about the two rules of the game"
);

//exporting functions
module.exports = { generalRules, firstCall, getResult };
