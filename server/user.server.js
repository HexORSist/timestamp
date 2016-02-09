//var unixTime = require('unix-time');
var moment = require('moment');

module.exports = {
    digesttime:function(thedate){
        
        var unixdate='';
        var normdate='';
        
        if(Number(thedate))
            thedate = Number(thedate);
            
        if(moment(new Date(thedate)).isValid()){
            unixdate = moment(new Date(thedate)).valueOf();
            normdate = moment(new Date(thedate)).format("MMMM DD, YYYY");
        } else {
            unixdate = null;
            normdate = null;
        }

        return { "unix": unixdate, "natural": normdate };

    }

};