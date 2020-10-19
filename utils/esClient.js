/**
 * @description : contains elasticsearch setup and functions
 */

const elasticsearch = require("elasticsearch");
const configs = require("../configs");

const esClient = elasticsearch.Client({
    host: `${configs.ES_IP}:${configs.ES_PORT}`,
    log
})

const esC = {};

esC.upsert = async(index, doc)=> {

}

esC.delete = async(index, docId)=> {

}

esC.search = async(index, text)=> {

}

module.exports = esC;