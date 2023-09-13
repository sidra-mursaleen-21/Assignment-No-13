// q no 1

// var students = [];

// students[0] = "laiba";
// students[1] = "khadija";
// students[2] = "mryam";
// students[3] = "ulfat";
// students[4] = "bisma";

// console.log(students);

// q no 2

// var studentsname = new Array ();

// studentsname[0] = "laiba";
// studentsname[1] = "khadija";
// studentsname[2] = "mryam";
// studentsname[3] = "ulfat";
// studentsname[4] = "bisma";

// console.log(studentsname);

// q no 3

// var country = ["turkey", "UK", "switzerland"];

// console.log(country);

// q no 4

// var number = [2, 3, 5];

// console.log(number);

// q no 5

// var boolean = [true , false];

// console.log(boolean);

// q no 6

// var arr = ["turkey" , 5 , true , undefined];

// console.log(arr);

// q no 7

// var qualification = ["SSC" , "HSC ", "BCS ", "BS" , "BCOM ", "MS ", "M.Phil", "PhD"];

// document.write("QUALIFICATION: <br>" + qualification[0] + "<br>" + qualification[1] + "<br>" + qualification[2] + "<br>" + qualification[3] + "<br>" + qualification[4] + "<br>" + qualification[5] + "<br>" + qualification[6] + "<br>" + qualification[7]);

// q no 8

// var students = ["micheal", "jhone", "tony"];
// var score = [320, 230, 480];
// var percentage1 = (score[0] / 500) * 100;
// var percentage2 = (score[1] / 500) * 100;
// var percentage3 = (score[2] / 500) * 100;


// document.write("Score of" + " " + students[0] + " " + "is" + " " + score[0] + ".Percentage :" + " " + percentage1 + "% <br>");
// document.write("Score of" + " " + students[1] + " " + "is" + " " + score[1] + ".Percentage :" + " " + percentage2 + "% <br>");
// document.write("Score of" + " " + students[2] + " " + "is" + " " + score[2] + ".Percentage :" + " " + percentage3 + "%");

// q no 9

// var colors = [];
// var input1 = prompt("Enter first color :");
// var input2 = prompt("Enter second color :");
// var input3 = prompt("Enter third color :");

// colors[0] = input1 ;
// colors[1] = input2 ;
// colors[2] = input3 ;

// document.write(colors + "<br>");

// q no 9 (part a)

// var usercolor1 = prompt("what color you want to add to the beginning");

// colors.unshift(usercolor1);

// document.write(colors + "<br>");

// q no 9 (part b)

// var usercolor2 = prompt(" what color you want to add to the end");

// colors.push(usercolor2);

// document.write(colors + "<br>");

// q no 9 (part c)

// colors.unshift("purple" , "pink")

// document.write(colors + "<br>");

// q no 9 (part d)

// colors.shift();

// document.write(colors + "<br>");

// q no 9 (part e)

// colors.pop();

// document.write(colors + "<br>");

// q no 9 (part f)

// var usercolor3 = prompt("Enter your color :");
// var colorindex = +prompt("Enter the color index :");

// colors.splice(colorindex,0,usercolor3);

// document.write(colors + "<br>");

// q no 9 (part g)

// var deletecolor = +prompt("How many colors you want to delete :");
// var deleteindex = +prompt("At which index you want to delete color(s) :");

// colors.splice(deletecolor,deleteindex);

// document.write(colors);

// q no 10

// var studentsscore = [320 , 230 , 480 , 120];

// document.write("Scores Of Students :" + " " + studentsscore + "<br>");

// studentsscore.sort();

// document.write("Odered Scores Of Students :" + " " + studentsscore);

// q no 11

// var cities = ["karachi" , "lahore" , "islamabad" , "quetta" , "peshawar"];

// document.write("Cities list :" + "<br>" + cities + "<br>");

// var copycities = cities.slice(2,4);

// document.write("Selected cities list :" + "<br>" + copycities);

// q no 12

// var arr = ["This" , "is" ,  "my" , "cat"];

// document.write("Array <br>" + arr + "<br>");

// var joinarr = arr.join( " " );

// document.write("String <br>" + joinarr);

// q no 13

// var devices = ["keyboard" , "mouse" , "printer" , "monitor"];

// document.write("Devices : <br>" + devices + "<br>" );

// devices.shift();

// document.write("Out : <br>" + devices + "<br>" );

// devices.shift()

// document.write("Out : <br>" + devices + "<br>" );

// devices.shift()

// document.write("Out : <br>" + devices + "<br>" );

// q no 14

// var devices = ["keyboard" , "mouse" , "printer" , "monitor"];

// document.write("Devices : <br>" + devices + "<br>" );

// devices.pop();

// document.write("Out : <br>" + devices + "<br>" );

// devices.pop();

// document.write("Out : <br>" + devices + "<br>" );

// devices.pop();

// document.write("Out : <br>" + devices + "<br>" );

// q no 15

// var phonemanufacture = ["Apple" , "Samsung" , "Motorola" , "Nokia" , "Sony" , "Haier"];

// document.write("<form>");
// document.write("Select phone manufactures : <br>")
// document.write("<select name = 'phone manufactures' >");
// document.write("<option>" + phonemanufacture[0] + "</option>");
// document.write("<option>" + phonemanufacture[1] + "</option>");
// document.write("<option>" + phonemanufacture[2] + "</option>");
// document.write("<option>" + phonemanufacture[3] + "</option>");
// document.write("<option>" + phonemanufacture[4] + "</option>");
// document.write("<option>" + phonemanufacture[5] + "</option>");
// document.write("</select>");
// document.write("</form>");
