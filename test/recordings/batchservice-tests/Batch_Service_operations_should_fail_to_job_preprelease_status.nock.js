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
  .get('/jobs/HelloWorldJobNodeSDKTest/jobpreparationandreleasetaskstatus?api-version=2015-12-01.2.2')
  .reply(409, "{\r\n  \"odata.metadata\":\"https://batchtestnodesdk.japaneast.batch.azure.com/$metadata#Microsoft.Azure.Batch.Protocol.Entities.Container.errors/@Element\",\"code\":\"JobPreparationTaskOrReleaseTaskNotSpecified\",\"message\":{\r\n    \"lang\":\"en-US\",\"value\":\"The specified job does not have either job preparation task or job release task.\\nRequestId:c214096f-bfcc-428f-8567-1001fa657e35\\nTime:2016-03-20T22:05:24.1618918Z\"\r\n  }\r\n}", { 'content-length': '417',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'c214096f-bfcc-428f-8567-1001fa657e35',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  date: 'Sun, 20 Mar 2016 22:05:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .get('/jobs/HelloWorldJobNodeSDKTest/jobpreparationandreleasetaskstatus?api-version=2015-12-01.2.2')
  .reply(409, "{\r\n  \"odata.metadata\":\"https://batchtestnodesdk.japaneast.batch.azure.com/$metadata#Microsoft.Azure.Batch.Protocol.Entities.Container.errors/@Element\",\"code\":\"JobPreparationTaskOrReleaseTaskNotSpecified\",\"message\":{\r\n    \"lang\":\"en-US\",\"value\":\"The specified job does not have either job preparation task or job release task.\\nRequestId:c214096f-bfcc-428f-8567-1001fa657e35\\nTime:2016-03-20T22:05:24.1618918Z\"\r\n  }\r\n}", { 'content-length': '417',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'c214096f-bfcc-428f-8567-1001fa657e35',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  date: 'Sun, 20 Mar 2016 22:05:24 GMT',
  connection: 'close' });
 return result; }]];