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
  .filteringRequestBody(function (path) { return '*';})
.post('/pools?api-version=2015-12-01.2.2', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Sun, 20 Mar 2016 22:01:39 GMT',
  etag: '0x8D3510B3683DF80',
  location: 'https://batchtestnodesdk.japaneast.batch.azure.com/pools/nodesdktestpool2',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '3cc6e6f4-a850-49bd-95b5-833048064437',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  dataserviceid: 'https://batchtestnodesdk.japaneast.batch.azure.com/pools/nodesdktestpool2',
  date: 'Sun, 20 Mar 2016 22:01:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/pools?api-version=2015-12-01.2.2', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Sun, 20 Mar 2016 22:01:39 GMT',
  etag: '0x8D3510B3683DF80',
  location: 'https://batchtestnodesdk.japaneast.batch.azure.com/pools/nodesdktestpool2',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '3cc6e6f4-a850-49bd-95b5-833048064437',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  dataserviceid: 'https://batchtestnodesdk.japaneast.batch.azure.com/pools/nodesdktestpool2',
  date: 'Sun, 20 Mar 2016 22:01:39 GMT',
  connection: 'close' });
 return result; }]];