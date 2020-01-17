captureData = (data) => {
    let dataArr = [];

    data.forEach( val => {
        dataArr.push(val.dataValues)
    })
    
    return dataArr;
};

captureAllData = (data) => {
    // console.log(data);
    let dataObj = {
        data_app: [],
        data_ft: []
    };
    console.log(dataObj);

    data.forEach( app => {
        dataObj.data_app.push(app.dataValues)
        
        app.dataValues.Features.forEach( ft => {
            dataObj.data_ft.push(ft.dataValues)
        })
    })

    console.table(
        dataObj.data_app,
        [
            'id', 'name', 'Features'
        ]
    )
    console.table(
        dataObj.data_ft,
        [
            'id', 'name', 'type', 'ApplicationId'
        ]
    )

    return dataObj;
};


module.exports = {
    captureData,
    captureAllData
};