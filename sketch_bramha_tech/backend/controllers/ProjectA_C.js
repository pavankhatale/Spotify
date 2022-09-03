const express = require("express");
const projects = require("../model/projectA_M");

const add = async (req, res) => {
  const { name } = req.body;

  try {
    const addproject = new projects({
      name,
    });
    await addproject.save();
    res.status(201).json(addproject);
    //  console.log(addproject)
  } catch (err) {
    console.log(err);
  }
};

const getData = async (req, res) => {
  try {
    const projectData = await projects.find();
    res.status(201).json(projectData);
    // console.log(projectData);
  } catch (error) {
    console.log(error);
  }
};

const edit = async (req, res) => {
  try {
    const { id } = req.params;

    const updateproject = await projects.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    //console.log(updateproject);
    res.status(201).json(updateproject);
  } catch (err) {
    res.status(422).json(err);
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;

    const deleteproject = await projects.findByIdAndDelete({ _id: id });

    console.log(deleteproject);
    res.status(201).json(deleteproject);
  } catch (err) {
    console.log("error");
  }
};

exports.add = add;
exports.remove = remove;
exports.getData = getData;
exports.edit = edit;