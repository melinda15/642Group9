// ********** Section: date
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); 
var yy = today.getFullYear();

day =  mm + '/' + dd + '/' + yy;
week = mm + '/' + dd + '/' + yy;
month =  mm + '/' + yy;
year = yy;
// set default value
document.getElementById("today").innerHTML = day;


// ********* Section: Total hour
total_h_day   = 'Total: 3.6h'
total_h_week  = 'Total: 18h'
total_h_month = 'Total: 75h'
total_h_year  = 'Total: 683h'
// set defaul value
document.getElementById("total_hours").innerHTML = 'Total: 3.6h';


// ********* Section: Completed Tasks
// day
day_comitem_1 = '• HW1 - 20m'
day_comitem_2 = '• HW2 - 20m'
day_comitem_3 = '• ...'
// day_comitem_4 = ''
// day_comitem_5 = ''
// day_comitem_6 = ''
// day_comitem_7 = ''
day_unitem_1  = '• HW3'
day_unitem_2  = ''
day_unitem_3  = ''
// default
document.getElementById("com_item1").innerHTML = day_comitem_1;
document.getElementById("com_item2").innerHTML = day_comitem_2;
document.getElementById("com_item3").innerHTML = day_comitem_3;
document.getElementById("un_item1").innerHTML = day_unitem_1;
document.getElementById("un_item2").innerHTML = day_unitem_2;
document.getElementById("un_item3").innerHTML = day_unitem_3;



week_comitem_1 = "• Sun - 1.5h"
week_comitem_2 = "• Mon - 4h"
week_comitem_3 = "• ..."
// week_comitem_4 = "• Wed - 3h"
// week_comitem_5 = "• Thu - 2h"
// week_comitem_6 = "• Fri - 2h"
// week_comitem_7 = "• Sat - 0.5h"
week_unitem_1 = "• 1 task"
week_unitem_2 = "• 0 task"
week_unitem_3 = "• ..."


month_comitem_1 = "• 11/1 - 5 tasks - 4h"
month_comitem_2 = "• 11/2 - 3 tasks - 2h"
month_comitem_3 = "• ..."
month_unitem_1 = "• 2 tasks"
month_unitem_2 = "• 0 task"
month_unitem_3 = "• ..."

year_comitem_1 = "• JAN - 55 tasks - 45h"
year_comitem_2 = "• Feb - 14 tasks - 32h"
year_comitem_3 = "..."
year_unitem_1 = "• 8 tasks"
year_unitem_2 = "• 10 tasks"
year_unitem_3 = "..."



// *********** Function 

function clickDay(){
    document.getElementById("date").innerHTML = day;
    document.getElementById("table").src="images/day_table.png";
    document.getElementById("total_hours").innerHTML = total_h_day;

    document.getElementById("com_item1").innerHTML = day_comitem_1;
    document.getElementById("com_item2").innerHTML = day_comitem_2;
    document.getElementById("com_item3").innerHTML = day_comitem_3;
    // document.getElementById("com_item4").innerHTML = day_comitem_4;
    // document.getElementById("com_item5").innerHTML = day_comitem_5;
    // document.getElementById("com_item6").innerHTML = day_comitem_6;
    // document.getElementById("com_item7").innerHTML = day_comitem_7;
    document.getElementById("un_item1").innerHTML = day_unitem_1;
    document.getElementById("un_item2").innerHTML = day_unitem_2;
    document.getElementById("un_item3").innerHTML = day_unitem_3;
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
    document.getElementById("total_hours").innerHTML = total_h_week;
    document.getElementById("com_item1").innerHTML = week_comitem_1;
    document.getElementById("com_item2").innerHTML = week_comitem_2;
    document.getElementById("com_item3").innerHTML = week_comitem_3;
    // document.getElementById("com_item4").innerHTML = week_comitem_4;
    // document.getElementById("com_item5").innerHTML = week_comitem_5;
    // document.getElementById("com_item6").innerHTML = week_comitem_6;
    // document.getElementById("com_item7").innerHTML = week_comitem_7;
    document.getElementById("un_item1").innerHTML = week_unitem_1;
    document.getElementById("un_item2").innerHTML = week_unitem_2;
    document.getElementById("un_item3").innerHTML = week_unitem_3;
}

function clickMonth(){
    document.getElementById("date").innerHTML = month;
    document.getElementById("table").src="images/month_table.png";
    document.getElementById("total_hours").innerHTML = total_h_month = total_h_month
    document.getElementById("com_item1").innerHTML = month_comitem_1;
    document.getElementById("com_item2").innerHTML = month_comitem_2;
    document.getElementById("com_item3").innerHTML = month_comitem_3;
    document.getElementById("un_item1").innerHTML = month_unitem_1;
    document.getElementById("un_item2").innerHTML = month_unitem_2;
    document.getElementById("un_item3").innerHTML = month_unitem_3;

}

function clickYear(){
    document.getElementById("date").innerHTML = year;
    document.getElementById("table").src="images/year_table.png";
    document.getElementById("total_hours").innerHTML = total_h_month = total_h_year
    document.getElementById("com_item1").innerHTML = year_comitem_1;
    document.getElementById("com_item2").innerHTML = year_comitem_2;
    document.getElementById("com_item3").innerHTML = year_comitem_3;
    document.getElementById("un_item1").innerHTML = year_unitem_1;
    document.getElementById("un_item2").innerHTML = year_unitem_2;
    document.getElementById("un_item3").innerHTML = year_unitem_3;

}

// sideBar function
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("sideBarButton").style.marginLeft = "250px";
    test.style.display = 'none';

  }
  
  
function closeNav() {
document.getElementById("mySidebar").style.width = "0";
document.getElementById("sideBarButton").style.marginLeft= "0";
}



