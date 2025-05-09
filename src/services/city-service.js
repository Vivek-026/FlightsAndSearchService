const { response } = require('express');
const {CityRepository}= require('../repository/index')    

class CityService {
    constructor(){
        this.cityRepository = new CityRepository();
    }

    async createCity(data){
        try{
            const city =await this.cityRepository.createCity(data);
            // console.log(city);
            return city;
        }
        catch(error){

            console.log("something went wrong at service layer")
            throw(error)
        }
  

    }

    async deleteCity(cityId){
        try{
            console.log(cityId);
            const response=await this.cityRepository.deleteCity(cityId)
            return response;

        }
        catch(error){

            console.log("something went wrong at service layer")
            throw(error)
        }

    }
    async updateCity(cityId, data){

        try{
            
            
            const city= await this.cityRepository.updateCity(cityId,data);
            console.log(city);
            return city;
        }
        catch(error){

            console.log("something went wrong at service layer")
            throw(error)
        }


    }
    async getCity(cityId){
        try{

            const city= await this.cityRepository.getCity(cityId);
            return city; 

        }
        catch(error){

            console.log("something went wrong at service layer")
            throw(error)
        }


    }
    async getALL(filter){
        try{

            const response= await this.cityRepository.getAll({name : filter.name});
            return response; 

        }
        catch(error){

            console.log("something went wrong at service layer")
            throw(error)
        }
    }
}

module.exports= CityService;