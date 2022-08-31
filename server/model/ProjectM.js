const mongoose = require("mongoose");

const project_Schema = new mongoose.Schema({
  name: {
    type: String,
   
},
task:{
  type:String
}

});

const projects = new mongoose.model('projects',project_Schema)

module.exports = projects;