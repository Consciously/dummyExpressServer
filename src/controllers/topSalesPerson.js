/**
 * @Route = /api/v1/topSalesPerson
 * @Desc Get single top sales person
 * @Access public
 */

export const getSingleTopSalesPerson = (req, res) => {
	res.status(200).json({
		success: true,
		data: 'Top Sales Person'
	});
};
