// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'japaneast';
  process.env['AZURE_AUTOSTORAGE'] = 'testaccountfornode';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/providers/Microsoft.Batch/batchAccounts?api-version=2020-03-01')
  .reply(200, "{\"value\":[{\"id\":\"/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/batchexp/providers/Microsoft.Batch/batchAccounts/test2\",\"name\":\"test2\",\"type\":\"Microsoft.Batch/batchAccounts\",\"location\":\"eastus\",\"properties\":{\"accountEndpoint\":\"test2.eastus.batch.azure.com\",\"provisioningState\":\"Succeeded\",\"dedicatedCoreQuota\":20,\"dedicatedCoreQuotaPerVMFamily\":[{\"name\":\"standardA8_A11Family\",\"coreQuota\":20},{\"name\":\"standardNCFamily\",\"coreQuota\":10},{\"name\":\"standardA0_A7Family\",\"coreQuota\":0},{\"name\":\"standardDFamily\",\"coreQuota\":0},{\"name\":\"standardDv2Family\",\"coreQuota\":0},{\"name\":\"standardGFamily\",\"coreQuota\":0},{\"name\":\"basicAFamily\",\"coreQuota\":0},{\"name\":\"standardFFamily\",\"coreQuota\":0},{\"name\":\"standardNVFamily\",\"coreQuota\":0},{\"name\":\"standardNVPromoFamily\",\"coreQuota\":0},{\"name\":\"standardNCPromoFamily\",\"coreQuota\":0},{\"name\":\"standardHFamily\",\"coreQuota\":0},{\"name\":\"standardHPromoFamily\",\"coreQuota\":0},{\"name\":\"standardAv2Family\",\"coreQuota\":0},{\"name\":\"standardMSFamily\",\"coreQuota\":0},{\"name\":\"standardDv3Family\",\"coreQuota\":0},{\"name\":\"standardEv3Family\",\"coreQuota\":0},{\"name\":\"standardDSFamily\",\"coreQuota\":0},{\"name\":\"standardDSv2Family\",\"coreQuota\":0},{\"name\":\"standardDSv3Family\",\"coreQuota\":0},{\"name\":\"standardFSFamily\",\"coreQuota\":0},{\"name\":\"standardESv3Family\",\"coreQuota\":0},{\"name\":\"standardGSFamily\",\"coreQuota\":0},{\"name\":\"standardLSFamily\",\"coreQuota\":0},{\"name\":\"standardLSv2Family\",\"coreQuota\":0},{\"name\":\"standardNCSv2Family\",\"coreQuota\":0},{\"name\":\"standardNDSFamily\",\"coreQuota\":0},{\"name\":\"standardNCSv3Family\",\"coreQuota\":0},{\"name\":\"standardFSv2Family\",\"coreQuota\":0},{\"name\":\"standardHBSFamily\",\"coreQuota\":0},{\"name\":\"standardHCSFamily\",\"coreQuota\":0},{\"name\":\"standardNVSv3Family\",\"coreQuota\":0},{\"name\":\"standardHBrsv2Family\",\"coreQuota\":0},{\"name\":\"standardDASv4Family\",\"coreQuota\":0},{\"name\":\"standardEAv4Family\",\"coreQuota\":0},{\"name\":\"standardEASv4Family\",\"coreQuota\":0}],\"dedicatedCoreQuotaPerVMFamilyEnforced\":false,\"lowPriorityCoreQuota\":100,\"poolQuota\":100,\"activeJobAndJobScheduleQuota\":300,\"poolAllocationMode\":\"BatchService\",\"publicNetworkAccess\":\"Enabled\",\"encryption\":{\"keySource\":\"Microsoft.Batch\"}}},{\"id\":\"/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/batchexp/providers/Microsoft.Batch/batchAccounts/test1\",\"name\":\"test1\",\"type\":\"Microsoft.Batch/batchAccounts\",\"location\":\"westus\",\"properties\":{\"accountEndpoint\":\"test1.westus.batch.azure.com\",\"provisioningState\":\"Succeeded\",\"dedicatedCoreQuota\":20,\"dedicatedCoreQuotaPerVMFamily\":[{\"name\":\"standardDv2Family\",\"coreQuota\":20},{\"name\":\"standardA0_A7Family\",\"coreQuota\":0},{\"name\":\"standardA8_A11Family\",\"coreQuota\":0},{\"name\":\"standardDFamily\",\"coreQuota\":0},{\"name\":\"standardGFamily\",\"coreQuota\":0},{\"name\":\"basicAFamily\",\"coreQuota\":0},{\"name\":\"standardFFamily\",\"coreQuota\":0},{\"name\":\"standardNVFamily\",\"coreQuota\":0},{\"name\":\"standardNVPromoFamily\",\"coreQuota\":0},{\"name\":\"standardNCFamily\",\"coreQuota\":0},{\"name\":\"standardNCPromoFamily\",\"coreQuota\":0},{\"name\":\"standardHFamily\",\"coreQuota\":0},{\"name\":\"standardHPromoFamily\",\"coreQuota\":0},{\"name\":\"standardAv2Family\",\"coreQuota\":0},{\"name\":\"standardMSFamily\",\"coreQuota\":0},{\"name\":\"standardDv3Family\",\"coreQuota\":0},{\"name\":\"standardEv3Family\",\"coreQuota\":0},{\"name\":\"standardDSFamily\",\"coreQuota\":0},{\"name\":\"standardDSv2Family\",\"coreQuota\":0},{\"name\":\"standardDSv3Family\",\"coreQuota\":0},{\"name\":\"standardFSFamily\",\"coreQuota\":0},{\"name\":\"standardESv3Family\",\"coreQuota\":0},{\"name\":\"standardGSFamily\",\"coreQuota\":0},{\"name\":\"standardLSFamily\",\"coreQuota\":0},{\"name\":\"standardLSv2Family\",\"coreQuota\":0},{\"name\":\"standardNCSv2Family\",\"coreQuota\":0},{\"name\":\"standardNDSFamily\",\"coreQuota\":0},{\"name\":\"standardNCSv3Family\",\"coreQuota\":0},{\"name\":\"standardFSv2Family\",\"coreQuota\":0},{\"name\":\"standardHBSFamily\",\"coreQuota\":0},{\"name\":\"standardHCSFamily\",\"coreQuota\":0},{\"name\":\"standardNVSv3Family\",\"coreQuota\":0},{\"name\":\"standardHBrsv2Family\",\"coreQuota\":0},{\"name\":\"standardDASv4Family\",\"coreQuota\":0},{\"name\":\"standardEAv4Family\",\"coreQuota\":0},{\"name\":\"standardEASv4Family\",\"coreQuota\":0}],\"dedicatedCoreQuotaPerVMFamilyEnforced\":false,\"lowPriorityCoreQuota\":20,\"poolQuota\":20,\"activeJobAndJobScheduleQuota\":20,\"autoStorage\":{\"storageAccountId\":\"/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/batchexp/providers/Microsoft.Storage/storageAccounts/testaccountforbatch\",\"lastKeySync\":\"2019-07-09T04:03:36.4046374Z\"},\"poolAllocationMode\":\"BatchService\",\"publicNetworkAccess\":\"Enabled\",\"encryption\":{\"keySource\":\"Microsoft.Batch\"}}},{\"id\":\"/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk\",\"name\":\"batchtestnodesdk\",\"type\":\"Microsoft.Batch/batchAccounts\",\"location\":\"japaneast\",\"properties\":{\"accountEndpoint\":\"batchtestnodesdk.japaneast.batch.azure.com\",\"provisioningState\":\"Succeeded\",\"dedicatedCoreQuota\":0,\"dedicatedCoreQuotaPerVMFamily\":[{\"name\":\"standardAv2Family\",\"coreQuota\":0},{\"name\":\"standardDv2Family\",\"coreQuota\":0},{\"name\":\"standardDv3Family\",\"coreQuota\":0},{\"name\":\"standardEv3Family\",\"coreQuota\":0},{\"name\":\"standardDSv2Family\",\"coreQuota\":0},{\"name\":\"standardDSv3Family\",\"coreQuota\":0},{\"name\":\"standardESv3Family\",\"coreQuota\":0},{\"name\":\"standardFFamily\",\"coreQuota\":0},{\"name\":\"standardFSFamily\",\"coreQuota\":0},{\"name\":\"standardA0_A7Family\",\"coreQuota\":0},{\"name\":\"standardA8_A11Family\",\"coreQuota\":0},{\"name\":\"standardDFamily\",\"coreQuota\":0},{\"name\":\"standardGFamily\",\"coreQuota\":0},{\"name\":\"basicAFamily\",\"coreQuota\":0},{\"name\":\"standardNVFamily\",\"coreQuota\":0},{\"name\":\"standardNVPromoFamily\",\"coreQuota\":0},{\"name\":\"standardNCFamily\",\"coreQuota\":0},{\"name\":\"standardNCPromoFamily\",\"coreQuota\":0},{\"name\":\"standardHFamily\",\"coreQuota\":0},{\"name\":\"standardHPromoFamily\",\"coreQuota\":0},{\"name\":\"standardMSFamily\",\"coreQuota\":0},{\"name\":\"standardDSFamily\",\"coreQuota\":0},{\"name\":\"standardGSFamily\",\"coreQuota\":0},{\"name\":\"standardLSFamily\",\"coreQuota\":0},{\"name\":\"standardLSv2Family\",\"coreQuota\":0},{\"name\":\"standardNCSv2Family\",\"coreQuota\":0},{\"name\":\"standardNDSFamily\",\"coreQuota\":0},{\"name\":\"standardNCSv3Family\",\"coreQuota\":0},{\"name\":\"standardFSv2Family\",\"coreQuota\":0},{\"name\":\"standardHBSFamily\",\"coreQuota\":0},{\"name\":\"standardHCSFamily\",\"coreQuota\":0},{\"name\":\"standardNVSv3Family\",\"coreQuota\":0},{\"name\":\"standardHBrsv2Family\",\"coreQuota\":0},{\"name\":\"standardDASv4Family\",\"coreQuota\":0},{\"name\":\"standardEAv4Family\",\"coreQuota\":0},{\"name\":\"standardEASv4Family\",\"coreQuota\":0}],\"dedicatedCoreQuotaPerVMFamilyEnforced\":false,\"lowPriorityCoreQuota\":0,\"poolQuota\":100,\"activeJobAndJobScheduleQuota\":300,\"autoStorage\":{\"storageAccountId\":\"/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Storage/storageAccounts/testaccountfornode\",\"lastKeySync\":\"2020-05-02T07:21:32.1411454Z\"},\"poolAllocationMode\":\"BatchService\",\"publicNetworkAccess\":\"Enabled\",\"encryption\":{\"keySource\":\"Microsoft.Batch\"}}}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-original-request-ids':
   'fd87e411-4e05-45d5-b347-73a003d8dc48, 788af568-448f-4bb3-8207-211ebaccb150, e818c92c-9e53-4cac-bdac-b98245967d2a',
  'x-ms-ratelimit-remaining-subscription-reads': '11998',
  'x-ms-request-id': 'ee4b0eca-9c7a-4f34-8769-f1b3388d2a38',
  'x-ms-correlation-request-id': 'ee4b0eca-9c7a-4f34-8769-f1b3388d2a38',
  'x-ms-routing-request-id':
   'WESTUS:20200502T072255Z:ee4b0eca-9c7a-4f34-8769-f1b3388d2a38',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  date: 'Sat, 02 May 2020 07:22:55 GMT',
  connection: 'close',
  'content-length': '7007' });
 return result; }]];