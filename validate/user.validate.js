module.exports.postCreate=function(req,res,next){
    var errors=[];
    if(!req.body.name){
        errors.push('Name is required');
    }
    if(!req.body.phone){
        errors.push('Phone is required');
    }
    // if(!req.body.upload){
    //     errors.push('upload is required');
    // }
    if(errors.length){
        res.render('banh/create',{
            errors:errors,
            values:req.body
        });
        return;
    }
    // res.local.success=true;
    next();
};