
module.exports.getDate = getDate;

function getDate(){

    let today  = new Date();

    let day = "";
    let options = {
        weekday:"long",
        day:"numeric",
        month:"long"
    };
    day = today.toLocaleDateString("en-us",options);

    return day;
}

// below is same as above
// module.exports.getDay = getDay;
// function getDay(){.....}

exports.getDay = function(){
    let today  = new Date();

    let day = "";
    let options = {
        weekday:"long",
    };
    day = today.toLocaleDateString("en-us",options);

    return day;
}
