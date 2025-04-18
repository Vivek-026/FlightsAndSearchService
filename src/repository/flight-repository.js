const {Flights}= require('../models/index');

 class FlightRepository{


        async createFlight(data){
            try {
                console.log("data in flight repo:", data)
                const response=await Flights.create(data);
                console.log(response);
                return response;
                
            } catch (error) {
                console.log("error in flight repo");
                throw error;
                
            }
        }

 }

 module.exports= FlightRepository;