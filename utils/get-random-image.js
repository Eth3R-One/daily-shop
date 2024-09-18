export const generateRandomImageUrl = (title) => {
	return `${process.env.API_BASE_URL}/icon/${title}/800`;
};
