// import required modules;
const staff= require('../model/staff');
const staffService = require('../services/staffService');

// create staffcontroller object and add methods to it
const staffController = {};

staffController.addStaff= async (req, res) => {
    try {
        const result = await staffService.addStaff(req.body);
        if (!result) {
            res.json({message: 'Error adding staff'}).status(400)
        } else {
            const newResult = await staffService.getAllStaff();
            res.json(newResult).status(200);
        }
       
    } catch (error) {
        console.log(error)
       
    }
   
}


staffController.updateStaff= async (req, res) => {
    try {
        const staffId = Number(req.params.id);
        const staffDetails = { ...req.body, staffId };
         const result = await staffService.updateStaff(staffDetails);
          if (!result) {
            res.json({ message: 'Error updating staff' }).status(400);
        } else {
            const newResult = await staffService.getAllStaff();
            res.json(newResult).status(200);
        }
    } catch (error) {
        console.log(error);
       
    }
    
}

staffController.getStaff = async (req, res) => {
    try {
        const staffId  = Number(req.params.id);
        const result = await staffService.getStaff(staffId);
        if (!result) {
            res.json({ message: 'The staff with the given ID does not exist' }).status(400)
        } else {
            res.json(result).status(200);
        }
    } catch (error) {
        console.log(error);
       
    }
    
}

staffController.getAllStaff = async (req, res) => {
    try {
        const result = await staffService.getAllStaff();
      if (!result) {
            res.json({ message: 'Error fetching all staff' }).status(400);
        } else {
            res.json(result).status(200);
        }
    } catch (error) {
        console.log(error);
       
    }
}

staffController.deleteStaff = async (req, res) => {
     try {
        const staffId  = Number(req.params.id);
         const result = await staffService.deleteStaff(staffId);
         if (result) {
            res.json({message: `Successfully deleted staff with id ${staffId}`}).status(200)
         } else {
            res.json({ message: 'Error deleting staff' }).status(400);
         }  
    } catch (error) {
        console.log(error);
       
    }
}


module.exports = staffController;