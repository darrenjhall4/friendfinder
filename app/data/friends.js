var express = require("express");
var path = require("path");

var friendsArray = [
  {
    name: "Ron Swanson",
    friendsArray: "",
    photo: ""
  },
  {
    name: "Leslie Knope",
    friendsArray: '',
  },
  {
    name: "Andy Dwyer",
    friendsArray: '',
  },
  {
    name: "April Ludgate",
    friendsArray: '',
  },
  {
    name: "Ben Wyatt",
    friendsArray: '',
  },
  {
    name: "Tom Haverford",
    friendsArray: '',
  },
  {
    name: "Ann Perkins",
    friendsArray: '',
  },
  {
    name: "Donna Meagle",
    friendsArray: '',
  },
  {
    name: "Jerry/Larry/Gary Gergich",
    friendsArray: [1,3,4,5,7,9],
  },
  {
    name: "Chris Traeger",
    friendsArray: [1,3,4,5,7,9]
  }
];

module.exports = friendsArray;