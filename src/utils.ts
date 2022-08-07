export const getRandomName = () => {
	const names = [
		'john',
		'jane',
		'mary',
		'bob',
		'tom',
		'sam',
		'peter',
		'linda',
		'sara',
		'ike',
		'lily',
		'jim'
	];
	return names[Math.floor(Math.random() * names.length)];
};

export const getSeed = () => {
	const seed = Math.round(Math.random() * 100);
	return seed;
};
