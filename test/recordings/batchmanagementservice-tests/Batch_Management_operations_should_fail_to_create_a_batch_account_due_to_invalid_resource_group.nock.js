// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'japaneast';
  process.env['AZURE_AUTOSTORAGE'] = 'testaccountfornode';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/does-not-exist/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk?api-version=2020-03-01', '*')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'does-not-exist' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'dc8e4d7e-51c7-4651-a651-4a80bf5e3f4a',
  'x-ms-correlation-request-id': 'dc8e4d7e-51c7-4651-a651-4a80bf5e3f4a',
  'x-ms-routing-request-id':
   'WESTUS:20200502T072254Z:dc8e4d7e-51c7-4651-a651-4a80bf5e3f4a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  date: 'Sat, 02 May 2020 07:22:53 GMT',
  connection: 'close',
  'content-length': '106' });
 return result; }]];