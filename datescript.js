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
        return this.fullmonthstr_arr[this.index];
    },
    getShortString(){
        return this.shortmonthstr_arr[this.index];
    },
    getStringNum(){
        return this.monthstrnum[this.index];
    },
    getIntNum(){
        return this.monthintnum[this.index];
    }
}

class Month{
	
	constructor(){
		this.curr_month = new Date().getMonth();
	}
	
	shortmonthstr_arr = ["Jan",
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
    ];
    fullmonthstr_arr=["January",
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
        ];
	monthstrnum = ["01","02","03","04","05","06","07","08","09","10","11","12"];
	
	monthintnum = [1,2,3,4,5,6,7,8,9,10,11,12];
    
    getFullString(){
        return this.fullmonthstr_arr[this.curr_month];
    }
	
    getShortString(){
        return this.shortmonthstr_arr[this.curr_month];
    }
    getStringNum(){
        return this.monthstrnum[this.curr_month];
    }
    getIntNum(){
        return this.monthintnum[this.curr_month];
    }
}

class DateTime {
	
	today(format){
		var today = "";
		var d = new Date();
		month.index = d.getMonth();
		switch(format){
			case "long12":		
				today = month.getFullString() +
							" " + d.getDate() +
							", " + d.getFullYear();	
			break;
			case "MM/DD/YY":
			break;
			default:
			    today = month.getFullString() +
							" " + d.getDate() +
							", " + d.getFullYear();
			break;
		}
		return today;
	}
	
	dayOfTheWeek(date){
		alert(new Date(date).getDay());
		var d = new Date();
		var day_of_the_week = d.getDay();
		var days = [
				"Sunday",
				"Monday",
				"Tuesday",
				"Wednesday",
				"Thursday",
				"Friday",
				"Saturday",
			];
		var value = "";
		switch(date){
			case undefined:
				value = days[day_of_the_week]; 
			break;
			case date:
				alert(date);
			break;
			default:
				alert("DateTime.dayOfTheWeek(): Invalid date!"); 
			break;
		}
		
		return value;
	}
}


/*
function getCurrWeekDays(selected_date,day_no){
    var date = new Date(selected_date); 
    var day = date.getDay();
    var array = [];
    for(var i=1;i<day_no;i++){
      var days = i-day;
      var newDate =   new Date(date.getTime()+(days * 24 * 60 * 60 * 1000));
      array.push(newDate.getDate());
    }
    return array;
}

//get current day
function day_today(){
    var d = new Date();
    var day = d.getDate();
    return day;
}

//get current month
function month_today(){
    var d = new Date();
    var month = d.getMonth()+1;
    return month;
}

function year_today(){
    var d = new Date();
    var year = d.getFullYear();
    return year;
}

function addZero(number){
	if(number <= 9 && number > 0)
	{
		number = "0"+number;
	}
	return number;
}

function concatDate(year,month,day){
	var date = year + "-" + addZero(month) + "-" + addZero(day);
	return date;
}

function todayForDatepicker(){
    var date = concatDate(year_today(),month_today(),day_today());
    return date;
}

function getSaturdays(year,month)
{
    var saturdays = new Array();
    var total_days = daysInMonth(month,year);
    var day = 0;
    
    for(day = 1; day <= total_days; day++)
    {
        var date = new Date(year,month,day);
        if(date.getDay() === 6)
        {
            saturdays.push(day);
        }
    }
    return saturdays;
}

function getSundays(year,month)
{
    var sundays = new Array();
    var total_days = daysInMonth(month,year);
    var day = 0;
    
    for(day = 1; day <= total_days; day++)
    {
        var date = new Date(year,month,day);
        if(date.getDay() === 0)
        {
            sundays.push(day);
        }
    }
    return sundays;
}

function daysInMonth(month,year) {
  return new Date(year, month, 0).getDate();
}

function getWeekDays(date){
    //get day of the week
    var day = date.getDay();
    var array = [];

    for(var i=0;i<7;i++){
    //
    if(i-day!=0){
      var days = i-day;
      var newDate =   new Date(date.getTime()+(days * 24 * 60 * 60 * 1000));
      array.push(newDate.getDate());
    }
    else 
    array.push(date.getDate());
    }
    return array;
}

function extractDates(from,to){
    var newdate = [];
    for (var d = new Date(from); d <= new Date(to); d.setDate(d.getDate() + 1)) {
        newdate.push(new Date(d));
    }
    return newdate;
}

function getYear(date){
    var year = new Date(date).getFullYear();
    return year;
}

function getMonth(date){
    var month = addZero(new Date(date).getMonth() + 1);
    return month;
}

function getDay(date){
    var day = addZero(new Date(date).getDate());
    return day;
}*/