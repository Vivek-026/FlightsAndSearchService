const{ FlightService} =require("../services/index");

const flightService = new FlightService();

const create= async(req,res)=>{
    try {
        const response= await flightService.createFlight(req.body);
        return res.status(201).json(
            {
                data: response,
                success : true,
                err: {},
                message: "successfully created flight"

            }
        )

        
    } catch (error) {
        console.log("error in creating flight");
        return res.status(500).json(
            {
                data:{},
                success : false,
                err: error,
                message: "cannot create flight"

            }
        )
        
       
    }
}

module.exports={
    create,
}