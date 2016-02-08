//var unixTime = require('unix-time');
var moment = require('moment');

module.exports = {
    digesttime:function(thedate){
        
        var unixdate='';
        var normdate='';
        
        if(Number(thedate))
            thedate = Number(thedate);
            
        if(moment(thedate).isValid()){
            unixdate = Number(moment(thedate).valueOf().toString().slice(0,10));
            normdate = moment(thedate).format("MMMM DD, YYYY");
        } else {
            unixdate = null;
            normdate = null;
        }

        return { "unix": unixdate, "natural": normdate };

    }

};