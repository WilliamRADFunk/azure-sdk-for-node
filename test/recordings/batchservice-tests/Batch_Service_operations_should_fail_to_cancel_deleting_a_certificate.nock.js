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
  .post('/certificates(thumbprintAlgorithm=sha1,thumbprint=cff2ab63c8c955aaf71989efa641b906558d9fb7)/canceldelete?api-version=2015-12-01.2.2')
  .reply(409, "{\r\n  \"odata.metadata\":\"https://batchtestnodesdk.japaneast.batch.azure.com/$metadata#Microsoft.Azure.Batch.Protocol.Entities.Container.errors/@Element\",\"code\":\"CertificateBeingDeleted\",\"message\":{\r\n    \"lang\":\"en-US\",\"value\":\"The specified certificate has been marked for deletion and is being deleted.\\nRequestId:7a679e63-9b32-4fbb-a595-bcbe6805a739\\nTime:2016-03-20T22:05:37.8920415Z\"\r\n  }\r\n}", { 'content-length': '393',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '7a679e63-9b32-4fbb-a595-bcbe6805a739',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  date: 'Sun, 20 Mar 2016 22:05:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .post('/certificates(thumbprintAlgorithm=sha1,thumbprint=cff2ab63c8c955aaf71989efa641b906558d9fb7)/canceldelete?api-version=2015-12-01.2.2')
  .reply(409, "{\r\n  \"odata.metadata\":\"https://batchtestnodesdk.japaneast.batch.azure.com/$metadata#Microsoft.Azure.Batch.Protocol.Entities.Container.errors/@Element\",\"code\":\"CertificateBeingDeleted\",\"message\":{\r\n    \"lang\":\"en-US\",\"value\":\"The specified certificate has been marked for deletion and is being deleted.\\nRequestId:7a679e63-9b32-4fbb-a595-bcbe6805a739\\nTime:2016-03-20T22:05:37.8920415Z\"\r\n  }\r\n}", { 'content-length': '393',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '7a679e63-9b32-4fbb-a595-bcbe6805a739',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  date: 'Sun, 20 Mar 2016 22:05:37 GMT',
  connection: 'close' });
 return result; }]];