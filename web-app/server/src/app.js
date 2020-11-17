'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const util = require('util');
const path = require('path');
const fs = require('fs');
const axios = require('axios');
const {spawn} = require('child_process');
var http = require("http");
const CircularJSON = require('circular-json');
const uuid = require("uuid")

const {patientData}  = require('./dbModel.js');
const {consentData} = require('./dbModel.js');
const {careContextData} = require('./dbModel.js');


//App Config
const app = express();
const port = 8081;


//Middleware
app.use(express.json());


//DB Config
const connection_url = "mongodb+srv://admin:admin@cluster0.ia3lg.mongodb.net/health?retryWrites=true&w=majority";


mongoose.connect(connection_url, {
    useNewUrlParser : true,
    useCreateIndex: true,
    useUnifiedTopology: true
});



//Dummy Patient
var patX = {
healthId: "vermayash@sbx",
password: "healthisgold",
lang: ""
}

var consentId = "";



app.get(['/', '/test'], async (req, res) => {
  console.log('This is working');
  res.send("Hi! Hello this is working!")  
});





//-------------------PATIENT SIDE APIs-------------------------

//To set language initially
app.post('/setLanguageData', (req, res) => {
  patX.lang = req.body.lang;
  res.send("success");
});


//To get language
app.get('/getLanguageData', (req, res) => {
  let name = './languages/'+patX.lang+'.json'
  let jsonData = require(name);
  res.send(jsonData);
});






//To login Patient (args: healthId, password)
app.post('/loginPatient', async (req, res) => {
  console.log('req.body: ');
  console.log(req.body);
  let msg;
  if (patX.healthId == req.body.healthId){
    console.log("Inside if:1");
    if (patX.password == req.body.password)
      {console.log("Inside if:2");
      msg = "Success"}
    else{
    console.log("Inside else:1");
      msg ="Incorrect Password";}
    }
  else{
  console.log("inside else:2");
    msg = "Patient doesn't exist";}
  
  console.log(patX)
  
  res.send({"msg": msg});

});



//Post patient data to MongoDB (args: check patientData schema)
app.post('/postPatientData', (req, res) => {
  const dataInput = req.body;
  patientData.create(dataInput, (err, data) => {
      if(err) {
          res.status(500).send(err);
      }else{
          res.status(201).send("Successfully Posted");
      }
  });
});



//Fetch Patient Profile Data from MongoDB (args: healthId)
app.post('/getPatientData', (req, res) => {
  console.log(req.body.healthId);
  let healthId = req.body.healthId;
  patientData.find({'healthId': healthId}, (err, data) =>{
      if(err){
          res.status(500).send(err);
      }
      else{
          res.status(200).send(data);
      }
});

});



//Get list of all providers (Hospitals, Labs and Clinics available)
app.get('/getAllProviders', (req, res) => {
  res.status(200).send(["Livehealth (Full Featured)", "Livehealth (Bidirectional Outsourcing)"])
});



//Fetch all/provider wise care contexts of a patient (args: healthId, providerName)
app.post('/getCareContexts', (req, res) => {
  console.log("req.body :");
  console.log(req.body);
  let healthId = req.body.healthId;
  let providerName = req.body.providerName;
  careContextData.find({'healthId': healthId, 'providerName': providerName}, (err, data) =>{
      if(err){
          res.status(500).send(err);
      }
      else{
          res.status(200).send(data);
      }
}); 
});



//Update status of consent request (args: newStatus, consentId)
app.post('/updateStatusConsentRequest', (req, res) => {
  const newStatus = req.body.newStatus;
  console.log(newStatus);
  console.log(req.body.consentId);
  var query = {consentId: req.body.consentId};
  var newValues = { $set: {status: newStatus} };
  consentData.updateOne(query, newValues, (err, data) => {
      if(err) {
          res.status(500).send(err);
      }else{
          res.status(201).send("Successfully updated status Consent Request ");
      }
  });
});



app.post('/sendConsentId', (req, res) => {
  consentId = req.body.consentId;
  console.log(consentId);
  res.status(201).send("Recieved");
});


app.get('/getConsentId', (req, res) => {
  console.log(consentId);
  res.status(201).send(consentId);
});





//-------------------HIU SIDE APIs-------------------------

//Fetch consent Data from MongoDB (args: healthId)
app.post('/getConsentData', (req, res) => {
  console.log(req.body.healthId);
  let healthId = req.body.healthId;
  consentData.find({'healthId': healthId}, (err, data) =>{
      if(err){
          res.status(500).send(err);
      }
      else{
          res.status(200).send(data);
      }
});

});






//Create consent request (args: refer consentSchema - consentId and status)
app.post('/createConsentRequest', (req, res) => {
  const dataInput = req.body;
  //console.log(dataInput);
  req.body.consentId = uuid.v1();
  req.body.status = "Active Request"
  consentData.create(dataInput, (err, data) => {
      if(err) {
          res.status(500).send(err);
      }else{
          res.status(201).send("Successfully Created Consent Request "+data);
      }
  });
});








//-------------------PROVIDER SIDE APIs-------------------------

//Post patient records (careContexts) to MongoDB (args: check careContextData schema)
app.post('/postCareContext', (req, res) => {
  const dataInput = req.body;
  console.log(req.body);
  careContextData.create(dataInput, (err, data) => {
      if(err) {
          res.status(500).send(err);
      }else{
          res.status(201).send("Successfully Posted");
      }
  });
});










//Listen
app.listen(port, () => console.log(`Listening on port number ${port}`)); // Only works with back ticks (variable using ${} notation)

