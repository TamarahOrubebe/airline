// imoort staff model;
const staff = require('../model/staff');

// create staff service object and add methods to it.
const staffService = {};

staffService.addStaff = async (staffDetails) => {
    return await staff.addStaff(staffDetails);
}

staffService.updateStaff = async (staffDetails) => {
    return await staff.updateStaff(staffDetails);
}


staffService.getStaff = async (staffId) => {
    return await staff.getStaff(staffId);
}

staffService.getAllStaff = async () => {
    return await staff.getAllStaff();
}

staffService.deleteStaff = async (staffId) => {
    return await staff.deleteStaff(staffId);    
}

module.exports = staffService;