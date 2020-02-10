const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray')


module.exports = {
    async index(request, response) {
        const { latitude, longitude, techs } = request.query;
        
        const techsArray = parseStringAsArray(techs);

        console.log('techs', request.query)

        const devs = await Dev.find({
            techs:{
                $in: techsArray,
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude]
                    },
                    $maxDistance: 40000,
                }
            },
        })
        console.log(`DEVS BACK`, devs)
        return response.json({devs})
    }

}
