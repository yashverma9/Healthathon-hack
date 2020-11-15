const mongoose = require('mongoose');

const patientSchema = mongoose.Schema({
    healthId : String,
    healthIdNo : String,
    name : String,
    dob: String,
    gender: String,
    phNo : String,
    address: String,
    password: String,
    consentPin: String
});

//This will create a collection patientData based on patientSchema
const patientData = mongoose.model('patientData', patientSchema); 


const consentSchema = mongoose.Schema({
    consentId: String,
    healthId: String,
    requesterName: String,
    requesterOrganization: String,
    purposeOfRequest: String,
    dateFrom : String,
    dateTo : String,
    expiryDate: String,
    hiType: Array,
    status: String //Either of "Active Request", "Expired Request", "Denied Request", "Granted Consent", "Expired Consent", "Revoked Consent"
});

//This will create a collection consentData based on consentSchema
const consentData = mongoose.model('consentData', consentSchema); 



const careContextSchema = mongoose.Schema({
    contextId : String,
    providerName : String,
    contextName : String,
    records: String,
    healthId : String
});

//This will create a collection careContextData based on careContextSchema
const careContextData = mongoose.model('careContextData', careContextSchema); 


module.exports = {
    patientData: patientData,
    consentData: consentData,
    careContextData: careContextData
};
