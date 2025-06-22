//1.
function is_date(input) {  
     return input instanceof Date && !isNaN(input);  
} 
 
console.log(is_date("October 13, 2014 11:13:00"));  
console.log(is_date(new Date(86400000)));  
console.log(is_date(new Date(99,5,24,11,33,30,0)));  
console.log(is_date([1, 2, 4, 0])); 

//2.

function curday(separator) {  
      let today = new Date();  
      let day = today.getDate();  
      let month = today.getMonth() + 1;  
      let year = today.getFullYear(); 
 
  return `${month < 10 ? '0' + month : month}${separator}${day < 10 ? '0' + day : 
day}${separator}${year}`; 
} 
 
console.log(curday('/'));  
console.log(curday('-'));

//3.

function getDaysInMonth(month, year) {  
    return new Date(year, month, 0).getDate();  
}  
 
console.log(getDaysInMonth(1, 2012)); console.log(getDaysInMonth(2, 2012)); 
console.log(getDaysInMonth(9, 2012)); console.log(getDaysInMonth(12, 2012));  

//4.

function month_name(date) {  
const months = ["January", "February", "March", "April", "May", "June", "July", "August", 
"September", "October", "November", "December"]; 
       return months[date.getMonth()]; 
} 
 
console.log(month_name(new Date("10/11/2009")));  
console.log(month_name(new Date("11/13/2014"))); 
 
//5.  
function compare_dates(date1, date2) {  
     if (date1.getTime() === date2.getTime()) return "Date1 = Date2";  
     if (date1.getTime() > date2.getTime()) return "Date1 > Date2";  
     return "Date2 > Date1"; 
} 
 
console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00'))); 
console.log(compare_dates(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00'))); 
console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01'))); 
 
//6. 
function add_minutes(date, minutes) { 
     date.setMinutes(date.getMinutes() + minutes);  
     return date; 
} 
 
console.log(add_minutes(new Date(2014,10,2), 30).toString());  
//7. 
function is_weekend(date) { 
     const day = new Date(date).getDay();  
     return (day === 0 || day === 6) ? "weekend" : undefined;  
}  
 
console.log(is_weekend('Nov 15, 2014'));  
console.log(is_weekend('Nov 16, 2014'));  
console.log(is_weekend('Nov 17, 2014')); 
 
//8. 
function date_diff_indays(date1, date2) { 
     const oneDay = 24 * 60 * 60 * 1000;  
     const diffDays = Math.round((new Date(date2) - new Date(date1)) / oneDay); 
     return diffDays; 
} 
 
console.log(date_diff_indays('04/02/2014', '11/04/2014')); 
console.log(date_diff_indays('12/02/2014', '11/04/2014')); 
 
//9. 
function lastday(year, month) { 
     return new Date(year, month + 1, 0).getDate(); 
} 
 
console.log(lastday(2014,0));  
console.log(lastday(2014,1));  
console.log(lastday(2014,11)); 
 
 
//10. 
function yesterday(date) { 
     const yesterdayDate = new Date(date); 
     yesterdayDate.setDate(yesterdayDate.getDate() - 1);  
    return yesterdayDate.toString(); 
} 
 
console.log(yesterday('Nov 15, 2014'));  
console.log(yesterday('Nov 16, 2015'));  
console.log(yesterday('Nov 17, 2016')); 
 
 
//11. 
function max_date(dates) { 
     const max = new Date(Math.max(...dates.map(date => new Date(date)))); 
     return max.toISOString().split('T')[0]; 
} 
 
console.log(max_date(['2015/02/01', '2015/02/02', '2015/01/03'])); 
 
 
//12. 
function min_date(dates) { 
     const min = new Date(Math.min(...dates.map(date => new Date(date))));  
     return min.toISOString().split('T')[0]; 
} 
 
console.log(min_date(['2015/02/01', '2015/02/02', '2015/01/03'])); 
 
//13. 
function timeConvert(minutes) { 
      const hours = Math.floor(minutes / 60); 
    const remainingMinutes = minutes % 60;  
    return `${minutes} minutes = ${hours} hour(s) and ${remainingMinutes} minute(s).`;  
} 
 
console.log(timeConvert(200)); 
 
 
//14 
function days_of_a_year(year) { 
     return (new Date(year, 1, 29).getDate() === 29) ? 366 : 365; 
} 
 
console.log(days_of_a_year(2015));  
console.log(days_of_a_year(2016)); 
 
 
//15 
function quarter_of_the_year(date) { 
     const month = date.getMonth() + 1;  
     if (month <= 3) return 1;  
     if (month <= 6) return 2;  
     if (month <= 9) return 3;  
     return 4; 
} 
 
console.log(quarter_of_the_year(new Date(2015, 1, 21))); 
console.log(quarter_of_the_year(new Date(2015, 10, 18))); 
 
 
 
//16 
function days_passed(date) {  
     const start = new Date(date.getFullYear(), 0, 1);  
     const diff = date - start; 
     return Math.floor(diff / (1000 * 60 * 60 * 24)); 
} 
console.log(days_passed(new Date(2015, 0, 15)));  
console.log(days_passed(new Date(2015, 11, 14))); 
 
//17 
Function 
   
    unix_to_time(timestamp) { 
        return new Date(timestamp * 1000).toString(); 
} 
 
console.log(unix_to_time(1428567261)); 
  
//18. 
function calculate_age(birthdate) {  
     const today = new Date();  
     let age = today.getFullYear() - birthdate.getFullYear(); 
      const month = today.getMonth() - birthdate.getMonth();  
     if (month < 0 || (month === 0 && today.getDate() < birthdate.getDate())) { 
         age--; 
   } 
    return age;  
} 
 
console.log(calculate_age(new Date(1982, 11, 4)));  
console.log(calculate_age(new Date(1962, 1, 1))); 
 
//19. 
  
function day_of_the_month(d) { 
 return String(d.getDate()).padStart(2, '0'); 
} 
const d = new Date(2015, 10, 1); 
console.log(day_of_the_month(d)); 
  
  
//20. 
  
function short_Days(dt) { 
return dt.toLocaleString('en-US', { weekday: 'short' }); 
} 
const dt = new Date(2015, 10, 1); 
console.log(short_Days(dt)); 
21. 
function long_Days(dt) { 
return dt.toLocaleString('en-US', { weekday: 'long' }); 
} 
const dt = new Date(2015, 10, 1); 
console.log(long_Days(dt)); 
//22. 
function ISO_numeric_date(dt) { 
return (dt.getDay() === 0 ? 7 : dt.getDay()); 
} 
const dt = new Date(2015, 10, 1); 
console.log(ISO_numeric_date(dt)); 
//23. 
function english_ordinal_suffix(dt) { 
const day = dt.getDate(); 
if (day % 10 === 1 && day !== 11) return day + "st"; 
if (day % 10 === 2 && day !== 12) return day + "nd"; 
if (day % 10 === 3 && day !== 13) return day + "rd"; 
return day + "th"; 
} 
const dt = new Date(2015, 10, 1); 
console.log(english_ordinal_suffix(dt)); 
//24. 
function ISO8601_week_no(dt) { 
const tempDate = new Date(dt.getTime()); 
tempDate.setHours(0, 0, 0, 0); 
tempDate.setDate(tempDate.getDate() + 3 - (tempDate.getDay() || 7)); 
const week1 = new Date(tempDate.getFullYear(), 0, 4); 
return Math.ceil(((tempDate - week1) / 86400000 + 1) / 7); 
} 
const dt = new Date(2015, 10, 1); 
console.log(ISO8601_week_no(dt)); 
//25. 
function full_month(dt) { 
return dt.toLocaleString('en-US', { month: 'long' }); 
} 
const dt = new Date(2015, 10, 1); 
console.log(full_month(dt)); 
//26. 
function numeric_month(dt) { 
return String(dt.getMonth() + 1).padStart(2, '0'); 
} 
const dt = new Date(2015, 10, 1); 
console.log(numeric_month(dt)); 
//27. 
function short_months(dt) { 
return dt.toLocaleString('en-US', { month: 'short' }); 
} 
const dt = new Date(2015, 10, 1); 
console.log(short_months(dt)); 
//28. 
function full_year(dt) { 
return dt.getFullYear(); 
} 
const dt = new Date(2015, 10, 1); 
console.log(full_year(dt)); 
//29. 
function sort_year(dt) { 
return String(dt.getFullYear()).slice(-2); 
} 
const dt1 = new Date(1989, 10, 1); 
console.log(sort_year(dt1)); 
//30. 
function am_pm_lower(dt) { 
return dt.getHours() >= 12 ? 'pm' : 'am'; 
} 
const dt = new Date(2015, 10, 1); 
console.log(am_pm_lower(dt1)); 
//31. 
function am_pm_upper(dt) { 
return dt.getHours() >= 12 ? 'PM' : 'AM'; 
} 
const dt = new Date(2015, 10, 1); 
console.log(am_pm_upper(dt1)); 
//32. 
function internet_time(dt) { 
const ms = dt.getUTCHours() * 3600 + dt.getUTCMinutes() * 60 + 
dt.getUTCSeconds(); 
return Math.floor((ms + 3600) / 86.4) % 1000; 
} 
const dt1 = new Date(2015, 10, 1); 
console.log(internet_time(dt1)); 
33. 
function hours_with_zeroes(dt) { 
const hour = dt.getHours() % 12 || 12; 
return String(hour).padStart(2, '0'); 
} 
const dt1 = new Date(2015, 10, 1); 
console.log(hours_with_zeroes(dt1)); 
34. 
function hours_without_zeroes(dt) { 
return dt.getHours(); 
} 
const dt1 = new Date(2015, 10, 1); 
console.log(hours_without_zeroes(dt1)); 
//35. 
function minutes_with_leading_zeros(dt) { 
return String(dt.getMinutes()).padStart(2, '0'); 
} 
const dt1 = new Date(2015, 10, 1); 
console.log(minutes_with_leading_zeros(dt1)); 
//36. 
function seconds_with_leading_zeros(dt) { 
return String(dt.getSeconds()).padStart(2, '0'); 
} 
const dt1 = new Date(2015, 10, 1); 
console.log(seconds_with_leading_zeros(dt1)); 
//37. 
function timezone_name(dt) { 
return Intl.DateTimeFormat('en-US', { timeZoneName: 'long' 
}).formatToParts(dt).find(part => part.type === 'timeZoneName').value; 
} 
const now = new Date(); 
console.log(timezone_name(now)); 
//38. 
function daylights_savings(dt) { 
const jan = new Date(dt.getFullYear(), 0, 1).getTimezoneOffset(); 
const jul = new Date(dt.getFullYear(), 6, 1).getTimezoneOffset(); 
return dt.getTimezoneOffset() < Math.max(jan, jul) ? 1 : 0; 
} 
const now= new Date(2015, 10, 1); 
console.log(daylights_savings(now)); 
//39. 
function diff_to_GMT(dt) { 
const offset = -dt.getTimezoneOffset() / 60; 
return offset.toFixed(3); 
} 
const now= new Date(2015, 10, 1); 
console.log(diff_to_GMT(now)); 
//40. 
function timezone_offset_in_seconds(dt) { 
return -dt.getTimezoneOffset() * 60; 
} 
const now= new Date(2015, 10, 1); 
console.log(timezone_offset_in_seconds(now)); 
//41. 
function add_years(dt, years) { 
const result = new Date(dt); 
result.setFullYear(result.getFullYear() + years); 
return result; 
} 
const date1 = new Date(2014, 10, 2); 
console.log(add_years(date1, 10).toString()); 
42. 
function add_weeks(dt, weeks) { 
const result = new Date(dt); 
result.setDate(result.getDate() + weeks * 7); 
return result; 
} 
const date1 = new Date(2014, 10, 2); 
console.log(add_weeks(date1, 10).toString()); 
//43. 
function add_months(dt, months) { 
const result = new Date(dt); 
result.setMonth(result.getMonth() + months); 
return result; 
} 
const date1 = new Date(2014, 10, 2); 
console.log(add_months(date1, 10).toString()); 
//44. 
function diff_minutes(dt1, dt2) { 
return Math.abs((dt2 - dt1) / 60000); 
} 
const date1 = new Date(2014, 10, 2); 
const dt2 = new Date("October 13, 2014 11:13:00"); 
console.log(diff_minutes(date1, dt2)); 
//45. 
function diff_hours(dt1, dt2) { 
return Math.abs((dt2 - dt1) / 3600000); 
} 
const date1 = new Date(2014, 10, 2); 
const dt2 = new Date("October 13, 2014 11:13:00"); 
console.log(diff_hours(date1, dt2)); 
//46. 
function diff_days(dt1, dt2) { 
return Math.abs((dt2 - dt1) / (1000 * 60 * 60 * 24)); 
} 
const date1 = new Date(2014, 10, 2); 
const dt2 = new Date("October 13, 2014 11:13:00"); 
console.log(diff_days(date1, dt2)); 
//47. 
function diff_weeks(dt1, dt2) { 
return Math.abs((dt2 - dt1) / (1000 * 60 * 60 * 24 * 7)); 
} 
console.log(diff_weeks(new Date("June 13, 2014"), new Date("October 19, 2014"))); 
//48. 
function diff_months(dt1, dt2) { 
return Math.abs((dt2.getFullYear() - dt1.getFullYear()) * 12 + dt2.getMonth() - 
dt1.getMonth()); 
} 
console.log(diff_months(new Date("June 13, 2014"), new Date("October 19, 2014"))); 
//49. 
function diff_years(dt1, dt2) { 
return Math.abs(dt2.getFullYear() - dt1.getFullYear()); 
} 
console.log(diff_years(new Date("June 13, 2014"), new Date("October 19, 2017"))); 
//50. 
function week_start_date(dt) { 
const start = new Date(dt); 
start.setDate(dt.getDate() - dt.getDay()); 
return start; 
} 
const now= new Date(2015, 10, 1); 
console.log(week_start_date(now).toString()); 
//51. 
function week_end_date(dt) { 
const end = new Date(dt); 
end.setDate(dt.getDate() + (6 - dt.getDay())); 
return end; 
} 
const now= new Date(2015, 10, 1); 
console.log(week_end_date(now).toString()); 
//52. 
function month_start_date(dt) { 
return new Date(dt.getFullYear(), dt.getMonth(), 1); 
} 
const now= new Date(2015, 10, 1); 
console.log(month_start_date(now).toString()); 
//53. 
function month_end_date(dt) { 
return new Date(dt.getFullYear(), dt.getMonth() + 1, 0); 
} 
const now= new Date(2015, 10, 1); 
console.log(month_end_date(now).toString()); 
