// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'batchtestnodesdk';
  process.env['AZURE_BATCH_ACCOUNT_KEY'] = 'AUn+pY/wAMwDrDp5dls7q5hxhMdYH3ReM6mnzeW280tJ7NtEptgsPTpAm+0OJvGoVhddjYHShLRH9SM3VGfoBQ==';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://batchtestnodesdk.japaneast.batch.azure.com/';
  process.env['AZURE_SUBSCRIPTION_ID'] = '603663e9-700c-46de-9d41-e080ff1d461e';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://batchtestnodesdk.japaneast.batch.azure.com:443')
  .get('/pools/nodesdktestpool1/nodes?api-version=2015-12-01.2.2')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://batchtestnodesdk.japaneast.batch.azure.com/$metadata#nodes\",\"value\":[\r\n    {\r\n      \"id\":\"tvm-366060774_2-20160320t215552z\",\"url\":\"https://batchtestnodesdk.japaneast.batch.azure.com/pools/nodesdktestpool1/nodes/tvm-366060774_2-20160320t215552z\",\"state\":\"reimaging\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2016-03-20T22:01:36.9092255Z\",\"lastBootTime\":\"2016-03-20T21:59:40.7298613Z\",\"allocationTime\":\"2016-03-20T21:55:52.6951346Z\",\"ipAddress\":\"100.75.36.100\",\"affinityId\":\"TVM:tvm-366060774_2-20160320t215552z\",\"vmSize\":\"small\",\"totalTasksRun\":0\r\n    },{\r\n      \"id\":\"tvm-366060774_3-20160320t215552z\",\"url\":\"https://batchtestnodesdk.japaneast.batch.azure.com/pools/nodesdktestpool1/nodes/tvm-366060774_3-20160320t215552z\",\"state\":\"idle\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2016-03-20T21:59:59.5750935Z\",\"lastBootTime\":\"2016-03-20T21:59:59.4710942Z\",\"allocationTime\":\"2016-03-20T21:55:52.6951346Z\",\"ipAddress\":\"100.75.32.23\",\"affinityId\":\"TVM:tvm-366060774_3-20160320t215552z\",\"vmSize\":\"small\",\"totalTasksRun\":1\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '3bc5b0d5-8445-4a36-ad6e-8081363fa918',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  date: 'Sun, 20 Mar 2016 22:03:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .get('/pools/nodesdktestpool1/nodes?api-version=2015-12-01.2.2')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://batchtestnodesdk.japaneast.batch.azure.com/$metadata#nodes\",\"value\":[\r\n    {\r\n      \"id\":\"tvm-366060774_2-20160320t215552z\",\"url\":\"https://batchtestnodesdk.japaneast.batch.azure.com/pools/nodesdktestpool1/nodes/tvm-366060774_2-20160320t215552z\",\"state\":\"reimaging\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2016-03-20T22:01:36.9092255Z\",\"lastBootTime\":\"2016-03-20T21:59:40.7298613Z\",\"allocationTime\":\"2016-03-20T21:55:52.6951346Z\",\"ipAddress\":\"100.75.36.100\",\"affinityId\":\"TVM:tvm-366060774_2-20160320t215552z\",\"vmSize\":\"small\",\"totalTasksRun\":0\r\n    },{\r\n      \"id\":\"tvm-366060774_3-20160320t215552z\",\"url\":\"https://batchtestnodesdk.japaneast.batch.azure.com/pools/nodesdktestpool1/nodes/tvm-366060774_3-20160320t215552z\",\"state\":\"idle\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2016-03-20T21:59:59.5750935Z\",\"lastBootTime\":\"2016-03-20T21:59:59.4710942Z\",\"allocationTime\":\"2016-03-20T21:55:52.6951346Z\",\"ipAddress\":\"100.75.32.23\",\"affinityId\":\"TVM:tvm-366060774_3-20160320t215552z\",\"vmSize\":\"small\",\"totalTasksRun\":1\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '3bc5b0d5-8445-4a36-ad6e-8081363fa918',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  date: 'Sun, 20 Mar 2016 22:03:35 GMT',
  connection: 'close' });
 return result; }]];