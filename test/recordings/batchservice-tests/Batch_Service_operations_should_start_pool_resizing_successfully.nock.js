// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'batchtestnodesdk';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://batchtestnodesdk.japaneast.batch.azure.com/';
  process.env['AZURE_SUBSCRIPTION_ID'] = '603663e9-700c-46de-9d41-e080ff1d461e';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://batchtestnodesdk.japaneast.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/pools/nodesdktestpool2/resize?api-version=2016-02-01.3.0', '*')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Fri, 01 Apr 2016 05:52:20 GMT',
  etag: '0x8D359F1CA5B5FB6',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'c4d3409b-c58b-4e35-af49-4580bcbd6075',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  dataserviceid: 'https://batchtestnodesdk.japaneast.batch.azure.com/pools/nodesdktestpool2/resize',
  date: 'Fri, 01 Apr 2016 05:52:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/pools/nodesdktestpool2/resize?api-version=2016-02-01.3.0', '*')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Fri, 01 Apr 2016 05:52:20 GMT',
  etag: '0x8D359F1CA5B5FB6',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'c4d3409b-c58b-4e35-af49-4580bcbd6075',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  dataserviceid: 'https://batchtestnodesdk.japaneast.batch.azure.com/pools/nodesdktestpool2/resize',
  date: 'Fri, 01 Apr 2016 05:52:20 GMT',
  connection: 'close' });
 return result; }]];