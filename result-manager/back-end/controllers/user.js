const User = require('../model/user');

exports.addUser = async (req, res, next) => {
    const {name, Encroll_no, Encroll_yr} = req.body;
     const user = await User.create({
         name,
         Encroll_no,
         Encroll_yr
     })

     res.status(201).json({
         success : true,
         user
     })
}

exports.login = async (req, res, next) => {
    const {Encroll_no} = req.body;
    const user = await User.find({Encroll_no : Encroll_no});

    if(!user) {
        res.status(400).json({
            success : false,
            message : "No such user found"
        })
    }

    res.status(201).json({
        success : true, 
        user
    })
}

//TODO: Will have to improve in future.
exports.updateUser = async (req, res, next) => {
   const {name} = req.body;
   const user = await User.findByIdAndUpdate({_id},{
    $set: {
      name: "Pragya Singh"
    }}, {
      new: true,
      runValidators : true,
      useFindAndModify: false
    });

    res.status(201).json({
        success : true,
        user
    })
}

//TODO: Will have to improve in future.
exports.deleteUser = async (req, res, next) => {
    const user = await User.findByIdAndDelete({_id});
    res.status(200).json({
        success : true,
        message : 'User Deleted!'
    })
}
