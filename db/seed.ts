import { db, User, Category, Todo } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(User).values([
		{
			id: "idcerouno",
			email: "uno@gmail.com",
			username: "useruno",
		},
		{
			id: "idcerodos",
			email: "dos@gmail.com",
			username: "userdos",
		},
	]);
	await db.insert(Category).values([
		{
			id: "cat01",
			label: "software",
		},
		{
			id: "cat02",
			label: "marketing",
		},
	]);
	await db.insert(Todo).values([
		{
			id: "todo01",
			title: "Crear funciòn de fecha",
			description: "Drinking blue kickstarter brunch chillwave food literally venmo",
			category_id: "cat01",
			user_id: "idcerodos",
		},
		{
			id: "todo02",
			title: "Neutra vinegar",
			description: "Occupy chillwave blog four vinegar brunch gochujang truck cardigan",
			category_id: "cat02",
			user_id: "idcerouno",
		},
	]);
}
