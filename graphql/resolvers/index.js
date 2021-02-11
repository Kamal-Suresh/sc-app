const postResolvers= require("./Post")
const userResolvers = require("./User");


module.exports = {
    Query:{...postResolvers.Query}
}