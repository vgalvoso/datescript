//month object
var month = {
    index:0,
    shortmonthstr_arr:["Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
    ],
    fullmonthstr_arr:["January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
        ],
    monthstrnum:["01","02","03","04","05","06","07","08","09","10","11","12"],
    monthintnum:[1,2,3,4,5,6,7,8,9,10,11,12],
    getFullString(){
        return this.fullmonthstr_arr[this.index - 1];
    },
    getShortString(){
        return this.shortmonthstr_arr[this.index - 1];
    },
    getStringNum(){
        return this.monthstrnum[this.index];
    },
    getIntNum(){
        return this.monthintnum[this.index];
    }
}
//year object
var year = {
    year:new Date().getFullYear(),
    getShortYear(){
        return this.year.toString().substring(2); 
    }
}
//dates
var date = {
    date:"",
    datepickerToString(){
        var datestring;
        if(this.date == "")
        {
            //alert("No date!");
            datestring = false;
        }
        else
        {
            month.index = this.date.substr(5,2);
            var strmonth = month.getFullString();
            var day = this.date.substr(8,2);
            var stryear = this.date.substr(0,4)
            datestring = strmonth + " " + day + ", " +  stryear;
        }
        return datestring;
    }
}
//add days to date
function addDays(days,selected_date){

    var date = new Date(selected_date);
    var newdate = new Date();
    newdate.setDate(date.getDate()+days);
    
    var dd = newdate.getDate();
    var mm = newdate.getMonth() + 1;
    var y = newdate.getFullYear();

    var someFormattedDate = y + '-' + addZero(mm) + '-' + addZero(dd);
    return someFormattedDate;
}