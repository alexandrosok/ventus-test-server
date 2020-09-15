const DataModel = require('../models/Data.model');

const GetData = (req, res) => {
    DataModel.findAll().then(data => {
        if (data) {
            return res.send({
                status: "success",
                data,
            });
        } else {
        }
    }).catch(err => console.error(err));
};

module.exports = {actions: {GetData}};
