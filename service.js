// service.js
const AssistantV1 = require("ibm-watson/assistant/v1");
const { IamAuthenticator } = require("ibm-watson/auth");

const assistant = new AssistantV1({
  authenticator: new IamAuthenticator({
    apikey: "akstNPBSZK9L2omDppMn_Ra88TA7Y02QKPVu3XsdG8fV"
  }),
  url: "https://gateway-lon.watsonplatform.net/assistant/api",
  version: "2019-11-20"
});

exports.getMessage = body =>
  new Promise((resolve, reject) => {
    assistant.message(
      {
        workspaceId: "857b7ecd-5142-4eb2-bff3-6642cbaabd98",
        input: { text: body.text }
      },
      function(err, response) {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          resolve(response);
        }
      }
    );
  });
