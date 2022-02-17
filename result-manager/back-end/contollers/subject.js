const Subject =  require('../model/subject');

exports.addSubject = async (req, res, next) => {
    const {sem, sub_name, sub_code} = req.body;

    const subject = await Subject.create({
        sem,
        sub_name,
        sub_code
    })

    res.status(201).json({
        success : true,
        subject
    })
}


exports.updateSubject = async (req, res, next) => {
    const {sub_code, sub_name, new_sub_code} = req.body;

    const subject = await Subject.findOneAndUpdate({sub_code : sub_code},{
            $set: {
              sub_code : new_sub_code,
              sub_name : sub_name
            }}, {
              new: true,
              runValidators : true,
              useFindAndModify: false
            }
    )

    res.status(201).json({
        success : true,
        subject
    })

}

exports.deleteUser = async (req, res, next) => {
    const {sub_code} = req.body;
    const subject = await Subject.findOneAndDelete({sub_code : sub_code});

    res.status(200).json({
        success : true,
        message : 'Subject Deleted!'
    })
}
