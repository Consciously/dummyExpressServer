/**
 * @Route = /api/v1/salesPerson
 * @Desc Get all sales persons
 * @Access public
 */

export const getSalesPersons = (req, res) => {
	res.status(200).json({
		success: true,
		data: 'Get all sales person'
	});
};
