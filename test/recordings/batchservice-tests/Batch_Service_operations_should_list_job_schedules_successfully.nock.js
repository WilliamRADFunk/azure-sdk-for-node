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
  .get('/jobschedules?api-version=2015-12-01.2.2')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://batchtestnodesdk.japaneast.batch.azure.com/$metadata#jobschedules\",\"value\":[\r\n    {\r\n      \"id\":\"NodeSDKTestSchedule\",\"url\":\"https://batchtestnodesdk.japaneast.batch.azure.com/jobschedules/NodeSDKTestSchedule\",\"eTag\":\"0x8D3510BBF0DD6BF\",\"lastModified\":\"2016-03-20T22:05:28.1217215Z\",\"creationTime\":\"2016-03-20T22:05:28.1217215Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-03-20T22:05:28.1217215Z\",\"schedule\":{\r\n        \"doNotRunUntil\":\"2017-12-25T00:00:00Z\",\"startWindow\":\"PT6M\"\r\n      },\"jobSpecification\":{\r\n        \"priority\":0,\"usesTaskDependencies\":false,\"constraints\":{\r\n          \"maxWallClockTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":0\r\n        },\"poolInfo\":{\r\n          \"poolId\":\"nodesdktestpool1\"\r\n        }\r\n      },\"executionInfo\":{\r\n        \"nextRunTime\":\"2017-12-25T00:00:00Z\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '875926b6-124e-479f-82e6-276077a431a7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  date: 'Sun, 20 Mar 2016 22:05:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .get('/jobschedules?api-version=2015-12-01.2.2')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://batchtestnodesdk.japaneast.batch.azure.com/$metadata#jobschedules\",\"value\":[\r\n    {\r\n      \"id\":\"NodeSDKTestSchedule\",\"url\":\"https://batchtestnodesdk.japaneast.batch.azure.com/jobschedules/NodeSDKTestSchedule\",\"eTag\":\"0x8D3510BBF0DD6BF\",\"lastModified\":\"2016-03-20T22:05:28.1217215Z\",\"creationTime\":\"2016-03-20T22:05:28.1217215Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-03-20T22:05:28.1217215Z\",\"schedule\":{\r\n        \"doNotRunUntil\":\"2017-12-25T00:00:00Z\",\"startWindow\":\"PT6M\"\r\n      },\"jobSpecification\":{\r\n        \"priority\":0,\"usesTaskDependencies\":false,\"constraints\":{\r\n          \"maxWallClockTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":0\r\n        },\"poolInfo\":{\r\n          \"poolId\":\"nodesdktestpool1\"\r\n        }\r\n      },\"executionInfo\":{\r\n        \"nextRunTime\":\"2017-12-25T00:00:00Z\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '875926b6-124e-479f-82e6-276077a431a7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  date: 'Sun, 20 Mar 2016 22:05:28 GMT',
  connection: 'close' });
 return result; }]];