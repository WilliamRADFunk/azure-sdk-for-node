// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'japaneast';
  process.env['AZURE_AUTOSTORAGE'] = 'testaccountfornode';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/applications/my_application_id/versions/v1.0?api-version=2020-03-01')
  .reply(200, "{\"type\":\"Microsoft.Batch/batchAccounts/applications/versions\",\"id\":\"/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/applications/my_application_id/versions/v1.0\",\"name\":\"v1.0\",\"etag\":\"W/\\\"0x8D7EE6987931CFA\\\"\",\"properties\":{\"storageUrl\":\"https://testaccountfornode.blob.core.windows.net/app-my-application-id-36d75d44174f483689980a93991e429c/v1.0?sv=2018-03-28&sr=b&sig=%2FS0UapIx1jaNfxhPjPtHN0x08oV5j4Kz3ef6RV3L85g%3D&st=2020-05-02T07%3A17%3A14Z&se=2020-05-02T11%3A22%3A14Z&sp=r\",\"storageUrlExpiry\":\"2020-05-02T11:22:14.2798006Z\",\"state\":\"Active\",\"format\":\"zip\",\"lastActivationTime\":\"2020-05-02T07:22:10.9680074Z\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '720',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'last-modified': 'Sat, 02 May 2020 07:22:10 GMT',
  etag: 'W/"0x8D7EE6987931CFA"',
  'x-ms-correlation-request-id': 'f43b050f-b401-4082-a63d-b6ce84ca7d33',
  'x-ms-request-id': '92a05669-664d-4601-ad6a-e6563fa78cca',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-reads': '11999',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-routing-request-id':
   'WESTUS:20200502T072214Z:f43b050f-b401-4082-a63d-b6ce84ca7d33',
  date: 'Sat, 02 May 2020 07:22:14 GMT',
  connection: 'close' });
 return result; }]];