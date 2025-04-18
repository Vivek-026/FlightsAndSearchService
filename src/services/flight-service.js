const {FightRepository, AirplaneRepository} = require('../repository/index');
const {compare} = require('../utils/helper');

class FlightService{

    constructor(){
        this.airplaneRepository= new AirplaneRepository();
        this.fightRepository= new FightRepository();
    }

    async createFlight(data){
        

        try {

            if(!compare(data.arrivalTime, data.departureTime)){
                throw {error: " arrival time cannot be grater that departure time"}
            }
            const airplane= await this.airplaneRepository.getAirplane(data.airplaneId);
           
            console.log(airplane.dataValues.capacity);
            
            
        

            const flight = await this.fightRepository.createFlight({...data,totalSeats: airplane.dataValues.capacity});
            console.log(flight);
            return flight;

        } catch (error) {
            console.log("error in flight service");
            throw error;
            
            
        }
    }

}
module.exports= FlightService;