setInterval(() => {

    var d = new Date()

    var hrs = d.getHours();
    var mins = d.getMinutes();
    var sec = d.getSeconds();
    var day = d.getDay();
    var date = d.getDate();
    var month = d.getMonth();
    var year = d.getFullYear();

    var months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUNE", "JULY", "AUG", "SEPT", "OCT", "NOV", "DEC"]

    var days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]


    document.getElementById("hrs").innerHTML = hrs
    document.getElementById("mins").innerHTML = mins
    document.getElementById("sec").innerHTML = sec
    document.getElementById("day").innerHTML = days[day]
    document.getElementById("date").innerHTML = date
    document.getElementById("month").innerHTML = months[month]
    document.getElementById("year").innerHTML = year


    if (hrs > 12) {
        document.getElementById("AM/PM").innerHTML = "PM"
    }
    else {
        document.getElementById("AM/PM").innerHTML = "AM"
    }



}, 1000);