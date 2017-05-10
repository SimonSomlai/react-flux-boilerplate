const AppDispatcher = require('../dispatcher/AppDispatcher'),
    AppConstants = require('../constants/AppConstants');
import RecordApi from "../services/RecordApi"

// Define action methods
let RecordActions = {
  getAllRecords: () => {
    console.log('trigger get all records action');
    RecordApi.getAllRecords(function(result){
      AppDispatcher.handleAction({actionType: AppConstants.GET_ALL_RECORDS, data: result });
    }, function(err){
      console.log(err);
    });
  },
  getRecord: (id) => {
    console.log('trigger find action');
    RecordApi.getRecord(id, function(result){
      AppDispatcher.handleAction({actionType: AppConstants.ADD_RECORD, data: result });
    }, function(err){
      console.log(err);
    });
  },

  createRecord: (record) => {
    console.log("trigger create action");
    RecordApi.createRecord(record, function(result){
      AppDispatcher.handleAction({actionType: AppConstants.CREATE_RECORD, data: result });
    }, function(err){
      console.log(err);
    });
  },

  updateRecord: (id, newRecord) => {
    console.log("trigger update action");
    RecordApi.updateRecord(id, newRecord, function(result){
      AppDispatcher.handleAction({actionType: AppConstants.UPDATE_RECORD, data: newRecord});
    }, function(err){
      console.log(err);
    });
  },

  deleteRecord: (id) => {
    console.log("trigger delete action");
    RecordApi.deleteRecord(id, function(result){
      AppDispatcher.handleAction({actionType: AppConstants.DELETE_RECORD, data: id});
    }, function(err){
      console.log(err);
    });
  }
};

module.exports = RecordActions;
