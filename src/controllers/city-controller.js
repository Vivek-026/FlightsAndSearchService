const { up } = require('../migrations/20250408165051-create-city')
const {CityService}= require('../services/index')

const cityService =new CityService();


const create =async(req,res)=>{

    try{
        const city= await cityService.createCity(req.body);
        return res.status(201).json({
            data : city, 
            success : true,
            message: 'Successfuly create City',
            err: {}
        });

    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data :{},
            success : false,
            message :"not able to create City",
            err: error
        })
    }

}

const destroy = async (req,res)=>{
    try{
        const response= await cityService.deleteCity(req.params.id);
        return res.status(200).json({ 
            data : response, 
            success : true,
            message: 'Successfuly deleted City',
            err: {}
        });

    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data :{},
            success : false,
            message :"not able to delete City",
            err: error
        })
    }
    
}

const get =async (req,res)=>{
    try{
        const city= await cityService.getCity(req.params.id);
        return res.status(201).json({ 
            data : city, 
            success : true,
            message: 'Successfuly fetched City',
            err: {}
        });

    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data :{},
            success : false,
            message :"not able to fetched City",
            err: error
        })
    }
    
}

const update = async (req,res)=>{
    try{
        const city= await cityService.updateCity(req.params.id, req.body);
        return res.status(201).json({ 
            data : city, 
            success : true,
            message: 'Successfuly updated City',
            err: {}
        });

    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data :{},
            success : false,
            message :"not able to update City",
            err: error
        })
    }
    
}

module.exports={
    create, 
    destroy,
    update, 
    update
}