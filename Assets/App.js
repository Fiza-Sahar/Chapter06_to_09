//Question_01:
document.write("<h3>Result:</h3><br>");
var x = 10;
document.write("The value of a is: " + x);
document.write("<br>...................................<br>");
document.write("The value of  ++a is: " + ++x);
document.write("<br>Now the value of a is: " + x);
document.write("<br><br>The value of  a++ is: " + x++);
document.write("<br>Now the value of a is: " + x);
document.write("<br><br>The value of --a is: " + --x);
document.write("<br>Now the value of a is: " + x);
document.write("<br><br>The value of a-- is: " + x--);
document.write("<br>Now the value of a is: " + x);


//Question_02:
var a = 2 , b = 1;
var result = --a - --b + ++b + b--;
document.write("The value of a is: " + a + "<br>");
document.write("The value of b is: "+ b + "<br>");
document.write("The Result is :" + result + "<br>");


//Question_3:
var UserName = prompt("What is your name?");
document.write("Hello, " + UserName + " Good After Noon Nice to meet you!");

//Question_4:
var  number = +prompt("Enter an Integer: ");
for(var i = 1; i <= 10; i++) {
    var result = i * number;
    document.write(`${number} * ${i} = ${result}` + "<br>");
}


//Question_5:
    // Take input from the user
    var subject_1 = prompt("Enter Subject 1 Name:");
    var subject_2 = prompt("Enter Subject 2 Name:");
    var subject_3 = prompt("Enter Subject 3 Name:");
    var total = 100;
    var obtained_Marks1 = +prompt("Enter Obtained Marks for Subject 1: ");
    var obtained_Marks2 = +prompt("Enter Obtained Marks for Subject 2: ");
    var obtained_Marks3 = +prompt("Enter Obtained Marks for Subject 3: ");
    var totalObtainedMarks = obtained_Marks1 + obtained_Marks2 + obtained_Marks3;
    var percentage = (totalObtainedMarks / (total * 3)) * 100;
    document.write("<h2>Result</h2>");
    document.write("<table>");
    document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
    document.write("<tr><td>" + subject_1 + "</td><td>" + total + "</td><td>" + obtained_Marks1 + "</td></tr>");
    document.write("<tr><td>" + subject_2 + "</td><td>" + total + "</td><td>" + obtained_Marks2 + "</td></tr>");
    document.write("<tr><td>" + subject_3 + "</td><td>" + total + "</td><td>" + obtained_Marks3 + "</td></tr>");
    document.write("<tr><th>Total</th><th>" + (total * 3) + "</th><th>" + totalObtainedMarks + "</th></tr>");
    document.write("<tr><th colspan='3'>Percentage: " + percentage + "%</th></tr>");
    document.write("</table>");

