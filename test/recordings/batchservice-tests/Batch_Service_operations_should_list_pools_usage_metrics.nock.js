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
  .get('/poolusagemetrics?api-version=2015-12-01.2.2&maxresults=1')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://batchtestnodesdk.japaneast.batch.azure.com/$metadata#poolusagemetrics\",\"value\":[\r\n    {\r\n      \"poolId\":\"nodesdktestpool1\",\"startTime\":\"2016-03-18T18:30:00Z\",\"endTime\":\"2016-03-18T19:00:00Z\",\"vmSize\":\"small\",\"totalCoreHours\":0.0041169883055555551,\"dataIngressGiB\":0.0,\"dataEgressGiB\":0.0\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'aa9f728e-0945-4b35-9526-0b2c72a12b61',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  date: 'Sun, 20 Mar 2016 22:01:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .get('/poolusagemetrics?api-version=2015-12-01.2.2&maxresults=1')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://batchtestnodesdk.japaneast.batch.azure.com/$metadata#poolusagemetrics\",\"value\":[\r\n    {\r\n      \"poolId\":\"nodesdktestpool1\",\"startTime\":\"2016-03-18T18:30:00Z\",\"endTime\":\"2016-03-18T19:00:00Z\",\"vmSize\":\"small\",\"totalCoreHours\":0.0041169883055555551,\"dataIngressGiB\":0.0,\"dataEgressGiB\":0.0\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'aa9f728e-0945-4b35-9526-0b2c72a12b61',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  date: 'Sun, 20 Mar 2016 22:01:44 GMT',
  connection: 'close' });
 return result; }]];