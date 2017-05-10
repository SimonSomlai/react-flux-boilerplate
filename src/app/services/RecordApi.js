var $ = require("jquery");

let RecordAPI = {
  var url_endpoint = "http://www.myapi.com/users"
  getAllRecords: (success, error) => {
    console.log("getting all records from api");
    $.ajax({url: url_endpoint,
    method: 'GET',
    cache: false,
    dataType: 'json'
    }).done(function(result) {
      success(result);
    }).fail(function() {
      error();
    });
  },
  getRecord: (id, success, error) => {
    console.log("getting record from api with id", id);
    $.ajax({
      url: url_endpoint + id,
      method: 'GET',
      cache: false,
      dataType: 'json'
    }).done(function(result) {
      success(result);
    }).fail(function() {
      error();
    });
  },
  createRecord: (record, success, error) => {
    console.log("creating new record through api call", record);
    $.ajax({
      url: url_endpoint,
      method: 'POST',
      cache: false,
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify(record)
    }).done(function(result) {
      console.log('success', result);
      success(result);
    }).fail(function() {
      console.log('error');
      error();
    });
  },
  updateRecord: (id, newRecord, success, error) => {
    console.log("updating record through api call with id", id, newRecord);
    var params = JSON.stringify(newRecord)
    console.log('params =', id, params);
    $.ajax({
      url: url_endpoint + id,
      method: 'PUT',
      cache: false,
      dataType: 'json',
      contentType: 'application/json',
      data: params
    }).done(function(result) {
      success(result);
    }).fail(function() {
      error();
    });

  },
  deleteRecord: (id, success, error) => {
  console.log("deleting record through api call with id", id);
  $.ajax({
    "async": true,
    "crossDomain": true,
    "url": url_endpoint + id,
    "method": "DELETE"
  }).done(function(result) {
      success(result);
    }).fail(function() {
      error();
    });
  }
};

module.exports = RecordAPI;
