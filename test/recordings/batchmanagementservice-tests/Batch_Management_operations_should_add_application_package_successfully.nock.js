// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'japaneast';
  process.env['AZURE_AUTOSTORAGE'] = 'testaccountfornode';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .put('/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/applications/my_application_id/versions/v1.0?api-version=2020-03-01')
  .reply(200, "{\"type\":\"Microsoft.Batch/batchAccounts/applications/versions\",\"id\":\"/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/applications/my_application_id/versions/v1.0\",\"name\":\"v1.0\",\"etag\":\"W/\\\"0x8D7EE6984F39F75\\\"\",\"properties\":{\"storageUrl\":\"https://testaccountfornode.blob.core.windows.net/app-my-application-id-36d75d44174f483689980a93991e429c/v1.0?sv=2018-03-28&sr=b&sig=YgfavGEDUzbGcFsp06ldI%2FlpphZTdKr5LT9Y54MmgGE%3D&st=2020-05-02T07%3A17%3A06Z&se=2020-05-02T11%3A22%3A06Z&sp=rw\",\"storageUrlExpiry\":\"2020-05-02T11:22:06.5783972Z\",\"state\":\"Pending\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '655',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'last-modified': 'Sat, 02 May 2020 07:22:06 GMT',
  etag: 'W/"0x8D7EE6984F39F75"',
  'x-ms-correlation-request-id': '3bb2f4ed-cf74-4575-985b-ebff20a18235',
  'x-ms-request-id': '2bd89e24-1d9e-4d28-a007-7b25932d2b3f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-routing-request-id':
   'WESTUS:20200502T072206Z:3bb2f4ed-cf74-4575-985b-ebff20a18235',
  date: 'Sat, 02 May 2020 07:22:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://testaccountfornode.blob.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/app-my-application-id-36d75d44174f483689980a93991e429c/v1.0?sv=2018-03-28&sr=b&sig=YgfavGEDUzbGcFsp06ldI%2FlpphZTdKr5LT9Y54MmgGE%3D&st=2020-05-02T07%3A17%3A06Z&se=2020-05-02T11%3A22%3A06Z&sp=rw', '*')
  .reply(201, "", { 'content-length': '0',
  'content-md5': 'Evetq3j5z4ehYa3l4kFC1w==',
  'last-modified': 'Sat, 02 May 2020 07:22:08 GMT',
  etag: '"0x8D7EE698616304D"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'a4e99001-001e-002c-3552-2047c7000000',
  'x-ms-version': '2018-03-28',
  'x-ms-request-server-encrypted': 'true',
  date: 'Sat, 02 May 2020 07:22:07 GMT',
  connection: 'close' });
 return result; }]];