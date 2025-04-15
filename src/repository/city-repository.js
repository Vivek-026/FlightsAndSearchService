const {Op} = require('sequelize');

const {City} = require('../models/index')

class CityRepository {
    async createCity({name}) {
        try {
            const city = await City.create({name})
            console.log(city)
            return city;
        }
        catch(error) {
            throw {error};
        }
    }

    async deleteCity(cityId){
        try{
            await City.destroy({
                where : {
                    id: cityId
                }
            });
            return true;
        }
        catch(error){
            throw(error);
        }
    }

    async updateCity(cityId, data) {

        try{
            
            const city = await City.update(data,{
                where: {
                    id: cityId
                }
            })
            console.log(city);
            
            return city;
        }

        catch(error){
            throw(error);
        }

    }

    async getCity( cityId ) {
        try {
            const city = await City.findByPk(cityId);  
            console.log(city);
            return city;
        } catch (error) {
            throw error; 
        }
    }
    async getAll(filter){
        
        try {
            if(filter.name)
            {
                const response = await City.findAll({
                    where: {
                        name: {
                            [Op.startsWith]: filter.name

                        }
                    }
                })
                return response;
            }
            const response= await City.findAll();
            return response;
            
        } catch (error) {
            throw (error);
            
        }
    }
}


module.exports = CityRepository;