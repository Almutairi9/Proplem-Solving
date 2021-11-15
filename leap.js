// I used if-else because I want to compare between years and search for LeapYear ... 

function isLeapYear(year) {
    if( 0 == year%400) return true;
    else 
    if( 0 == year%100) return false;
    else
    if(0 == year%4) return  true;
    else
    return false ;
  } 

  //////////////////////////////////////////////////////// 

