
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); 
var yy = today.getFullYear();
day = mm + '/' + dd + '/' + yy;
week = mm + '/' + dd + '/' + yy;
month =  mm + '/' + yy;
year = yy;

function clickDay(){    
    document.getElementById("date").innerHTML = day;
    document.getElementById("table").src="images/day_table.png";
}

function clickWeek(){
    const today = new Date();
    const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
    const pastDaysOfYear = (today - firstDayOfYear) / 86400000;
    const num_week = Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
    const total_week = 52;
    var week = 'Week ' + num_week + '/' + total_week
    document.getElementById("date").innerHTML = week;
    document.getElementById("table").src="images/week_table.png";

}

function clickMonth(){
    document.getElementById("date").innerHTML = month;
    document.getElementById("table").src="images/month_table.png";
}

function clickYear(){
    document.getElementById("date").innerHTML = year;
    document.getElementById("table").src="images/year_table.png";

}



