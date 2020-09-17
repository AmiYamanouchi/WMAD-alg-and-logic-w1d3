const talkingCalendar = function(date) {
    

    let newDate = date.split('/');
    
    let changeMonth = {"01":"January", "02":"February", "03":"March", "04":"April", "05":"May", "06":"June", "07":"July", "08":"August", "09":"September", "10":"October", "11":"November", "12":"December"}

    let year = newDate[0];
    
    let monthNum = newDate[1];
    let month = changeMonth[monthNum];

    let dayNum = Number(newDate[2]);
    let day = "";

    if (dayNum == 1 || dayNum == 21 || dayNum == 31) {
        day = `${dayNum}st`;
    } else if (dayNum == 2 || dayNum == 22) {
        day = `${dayNum}nd`;
    } else if (dayNum == 3 || dayNum == 23) {
        day = `${dayNum}rd`;
    } else {
        day = `${dayNum}th`;
    }

    let originalDate = `${month} ${day}, ${year}`;

    return originalDate;



  };
  console.log(talkingCalendar("2017/12/02"));
  console.log(talkingCalendar("2007/11/11"));
  console.log(talkingCalendar("1987/08/24"));

// December 2nd, 2017
// November 11th, 2007
// August 24th, 1987