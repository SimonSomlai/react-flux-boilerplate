const AppDispatcher = require('../dispatcher/AppDispatcher'),
  AppConstants = require('../constants/AppConstants');
import _ from "underscore";
import EventEmitter from "events";

let CHANGE_EVENT = "CHANGE";

var RecordStore = _.extend({}, EventEmitter.prototype, {
  records: [],
  findRecord: function(id){
    return this.records.find((record) => {
      return record.id === parseInt(id)
    })
  },
  updateRecord: function(newRecord){
    var record = this.findRecord(newRecord.id)
    console.log('Record found in store! -> ', record.name);
    var index = this.records.findIndex((oldRecord) => oldRecord.id === newRecord.id)
    console.log('changing object!');
    this.records[index] = newRecord
    console.log(this.getRecordData());
  },
  deleteRecord: function(id){
    console.log("deleting record from store with id " + id);
    var oldRecord = this.findRecord(id)
    var index = this.records.findIndex((record) => record === oldRecord)
    this.records.splice(index,1)
    console.log(this.getRecordData());
  },
  setRecords: function(data) {
    this.records = data;
    console.log(this.getRecordData());
  },
  getRecordData: function() {
    return this.records;
  },
  addRecord: function(record) {
    console.log("Adding new record to the store!", record);
    this.records.push(record)
  },
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback)
  },
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback)
  },
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  }
})

AppDispatcher.register(function(data) {
  console.log("hitting store with ", data.action.actionType, " and params are ", data.action.data);
  switch (data.action.actionType) {
    case AppConstants.SET_RECORDS:
    console.log("Setting records in the store!");
      RecordStore.setRecords([data.action.data]);
      RecordStore.emitChange();
      break;
    case AppConstants.GET_ALL_RECORDS:
    console.log("Setting all records in the store!");
      RecordStore.setRecord(data.action.data);
      RecordStore.emitChange();
      break;
    case AppConstants.CREATE_RECORD:
    console.log("adding record to store!");
      RecordStore.addRecord(data.action.data);
      RecordStore.emitChange();
      break;
    case AppConstants.UPDATE_RECORD:
    console.log("updating record in the store!");
      RecordStore.updateRecord(data.action.data);
      RecordStore.emitChange();
      break;
    case AppConstants.DELETE_RECORD:
    console.log("deleting record in the store!");
      RecordStore.deleteRecord(data.action.data.id);
      RecordStore.emitChange();
      break;
    default:
  }
  return true;
})

module.exports = RecordStore;
