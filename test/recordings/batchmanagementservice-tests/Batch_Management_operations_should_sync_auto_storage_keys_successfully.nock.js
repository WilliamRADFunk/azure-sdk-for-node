// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'japaneast';
  process.env['AZURE_AUTOSTORAGE'] = 'testaccountfornode';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/syncAutoStorageKeys?api-version=2020-03-01')
  .reply(204, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-request-id': '16f1ceeb-74fd-4e5f-b631-7732f0571b54',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': '46385d2b-0a01-448a-bee8-ac1fe53a319e',
  'x-ms-routing-request-id':
   'WESTUS:20200502T072258Z:46385d2b-0a01-448a-bee8-ac1fe53a319e',
  date: 'Sat, 02 May 2020 07:22:58 GMT',
  connection: 'close' });
 return result; }]];