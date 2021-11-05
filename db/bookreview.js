const knex = require("./knex")

function createReview(review){
    return knex("reviewtable").insert(review)
}

function getAllReviewsPerUser(uid){
    return knex("reviewtable").where({creator:uid}).select("*")
}

function getAllReviews(){
   return knex("reviewtable").select("*");
}
function deleteReview (id){
    return knex("reviewtable").where('id',id).del()
}
function updateReview (id, updatedVersion){
    return knex("reviewtable").where('id',id).update(updatedVersion)
}


module.exports ={
    createReview,getAllReviews,getAllReviewsPerUser,deleteReview,updateReview
}