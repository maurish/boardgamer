const AWS = require('aws-sdk');
const uuidv4 = require('uuid/v4');

const dynamodb = new AWS.DynamoDB.DocumentClient({
  params: { TableName : process.env.TABLE_NAME }
});


module.exports.getGames = () =>
  dynamodb.scan({}).promise().then(r => r.Items)


module.exports.saveGame = game => {
  var params = {
    Item: Object.assign({ id: uuidv4() }, game)
  };
  return dynamodb.put(params).promise();
};
