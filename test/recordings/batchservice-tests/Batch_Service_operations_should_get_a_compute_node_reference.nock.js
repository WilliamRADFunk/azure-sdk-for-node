// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'batchtestnodesdk';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://batchtestnodesdk.japaneast.batch.azure.com/';
  process.env['AZURE_SUBSCRIPTION_ID'] = '603663e9-700c-46de-9d41-e080ff1d461e';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://batchtestnodesdk.japaneast.batch.azure.com:443')
  .get('/pools/nodesdktestpool1/nodes/tvm-366060774_1-20160401t054638z?api-version=2016-02-01.3.0')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://batchtestnodesdk.japaneast.batch.azure.com/$metadata#nodes/@Element\",\"id\":\"tvm-366060774_1-20160401t054638z\",\"url\":\"https://batchtestnodesdk.japaneast.batch.azure.com/pools/nodesdktestpool1/nodes/tvm-366060774_1-20160401t054638z\",\"state\":\"idle\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2016-04-01T05:50:13.0130144Z\",\"lastBootTime\":\"2016-04-01T05:50:12.9179938Z\",\"allocationTime\":\"2016-04-01T05:46:38.437915Z\",\"ipAddress\":\"100.74.234.29\",\"affinityId\":\"TVM:tvm-366060774_1-20160401t054638z\",\"vmSize\":\"small\",\"totalTasksRun\":0,\"totalTasksSucceeded\":0,\"runningTasksCount\":0\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'f8e025a1-a563-405d-95f3-7dd8a1eb3633',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  date: 'Fri, 01 Apr 2016 05:52:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .get('/pools/nodesdktestpool1/nodes/tvm-366060774_1-20160401t054638z?api-version=2016-02-01.3.0')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://batchtestnodesdk.japaneast.batch.azure.com/$metadata#nodes/@Element\",\"id\":\"tvm-366060774_1-20160401t054638z\",\"url\":\"https://batchtestnodesdk.japaneast.batch.azure.com/pools/nodesdktestpool1/nodes/tvm-366060774_1-20160401t054638z\",\"state\":\"idle\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2016-04-01T05:50:13.0130144Z\",\"lastBootTime\":\"2016-04-01T05:50:12.9179938Z\",\"allocationTime\":\"2016-04-01T05:46:38.437915Z\",\"ipAddress\":\"100.74.234.29\",\"affinityId\":\"TVM:tvm-366060774_1-20160401t054638z\",\"vmSize\":\"small\",\"totalTasksRun\":0,\"totalTasksSucceeded\":0,\"runningTasksCount\":0\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'f8e025a1-a563-405d-95f3-7dd8a1eb3633',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  date: 'Fri, 01 Apr 2016 05:52:03 GMT',
  connection: 'close' });
 return result; }]];