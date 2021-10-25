//All imports
const colors = require("colors/safe");

//All data Declarations
const answers = {
	q1: "1943",
	q2: "eniac",
	q3: "tim berners lee",
	q4: "bill gates",
	q5: "sundar pichai",
	q6: "tifrac",
	q7: "tim berners lee",
	q8: "mh hasham premji",
	q9: "charles babbage",
	q10: "param-8000",
};
const allQuestions = [
	{
		name: "q1",
		description: colors.white(
			`When was first computer launched:  ` +
				colors.bold(`Options: 1943, 1944, 1937, 1956`)
		),
		type: "string",
		required: true,
	},
	{
		name: "q2",
		description: colors.white(
			"What was the name of first computer:  " +
				colors.bold("Options: eniac, param, superx, ibm-2000")
		),
		type: "string",
		required: true,
	},
	{
		name: "q3",
		description: colors.white(
			"Who Invented the world wide web:  " +
				colors.bold(
					"Options: bill gates, tim berners lee, dennis ritche, bjarne stroustrup"
				)
		),
		type: "string",
		required: true,
	},
	{
		name: "q4",
		description: colors.white(
			"Who is the founder of Microsoft:  " +
				colors.bold(
					"Options: bill gates, steve jobs, charles babbage, us state department"
				)
		),
		type: "string",
		required: true,
	},
	{
		name: "q5",
		description: colors.white(
			"Who is the current CEO of Google:  " +
				colors.bold(
					"Options: larry page, sundar pichai, satya nadella, andy rubin"
				)
		),
		type: "string",
		required: true,
	},
	{
		name: "q6",
		description: colors.white(
			"What was the name of first computer launched in India:  " +
				colors.bold("Options: tifrac, param-8000, mitsubishi-9v, nic-5000")
		),
		type: "string",
		required: true,
	},
	{
		name: "q7",
		description: colors.white(
			"Who invented HTML:  " +
				colors.bold(
					"Options: satya nadella, tim berners lee, jack ma, dennis ritchie"
				)
		),
		type: "string",
		required: true,
	},
	{
		name: "q8",
		description: colors.white(
			"Who is the founder of Wipro:  " +
				colors.bold(
					"Options: azim hasham premji, mh hasham premji, satyarthi premji, subarao premji"
				)
		),
		type: "string",
		required: true,
	},
	{
		name: "q9",
		description: colors.white(
			"Who is known as the father of computers:  " +
				colors.bold(
					"Options: arya bhatta, leonardo da vinci, charles babbage, dennis ritchie"
				)
		),
		type: "string",
		required: true,
	},
	{
		name: "q10",
		description: colors.white(
			"Name of India's first super computer:  " +
				colors.bold(
					"Options: tifrac, param-8000, param-500, param-9000, shakti-mk1"
				)
		),
		type: "string",
		required: true,
	},
];

//exports
module.exports = { allQuestions, answers };
