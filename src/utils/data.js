export const data = {
	columns: ["New Request", "In Progress", "In Review", "Bug", "Completed"],

	tasks: {
		"New Request": [
			{
				id: 1,
				tags: ["Design", "Website"],
				title: "Create a new design for the homepage",
				description: "The homepage needs to be redesigned",
				members: ["Lee Ji Eun", "Myoui Mina"],
			},
		],
		"In Progress": [
			{
				id: 2,
				tags: ["Design", "Website"],
				title: "Pages About and Careers",
				description:
					"All the details are in the file I'm sure it will turn out cool!",
				members: [],
			},
		],
		"In Review": [
			{
				id: 3,
				tags: ["Dribbble", "Design"],
				title: "Second design concepts",
				description: "Let's do the exact oppsite of the first design",
				members: ["Lee Ji Eun", "Myoui Mina", "Im Nayeon"],
			},
		],
		Bug: [
			{
				id: 4,
				tags: ["App"],
				title: "Fix the bug in the footer",
				description: "The footer is not working properly",
				members: ["Im Nayeon"],
			},
		],
		Completed: [
			{
				id: 5,
				tags: ["Dribbble"],
				title: "Hero Section",
				description: "The hero section is not working properly",
				members: ["Lee Ji Eun", "Myoui Mina", "Im Nayeon"],
			},
		],
	},
};

export default data;
