function formValidation()
{
var fname = document.registration.fullname;
var pname = document.registration.petname;
var pnum = document.registration.phonenumber;
var mail = document.registration.email;
var type = document.registration.animaltype;
var msex = document.registration.msex;
var fsex = document.registration.fsex;
var help = document.registration.whathelp;
if(allLetter(fname))
{
if(allletter(pname))
{
if(allnumeric(pnum))
{ 
if(animaltypeselect(type))
{
if(whathelpselect(help))
{
if(ValidateEmail(mail))
{
if(validsex(msex,fsex))
{
}
} 
}
} 
}
}
}

return false;

} 
function allLetter(fname)
{ 
var letters = /^[A-Za-z]+$/;
if(fname.value.match(letters))
{
return true;
}
else
{
alert('Full Name must have alphabet characters only');
fname.focus();
return false;
}
}
function allletter(pname)
{ 
var letters = /^[A-Za-z]+$/;
if(pname.value.match(letters))
{
return true;
}
else
{
alert('Pet Name must have alphabet characters only');
pname.focus();
return false;
}
}
function animaltypeselect(type)
{
if(type.value == "Default")
{
alert('Select your Animal Type from the list');
type.focus();
return false;
}
else
{
return true;
}
}
function allnumeric(pnum)
{ 
var numbers = /^[0-9]+$/;
if(pnum.value.match(numbers))
{
return true;
}
else
{
alert('Phone Number must have numeric characters only');
pnum.focus();
return false;
}
}
function whathelpselect(help)
{
if(help.value == "Default")
{
alert('Select what we can do for you from the list');
help.focus();
return false;
}
else
{
return true;
}
}
function ValidateEmail(mail)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(mail.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
return false;
}
}
function validsex(msex,fsex)
{
x=0;
if(msex.checked) 
{
x++;
}
if(fsex.checked)
{
x++; 
}
if (x==2)
{
alert('Both Male/Female are checked');
fsex.checked=false
msex.checked=false
msex.focus();
return false;
}
if(x==0)
{
alert('Select Male/Female');
msex.focus();
return false;
}
else
{
alert('Form has been sent');
window.location.reload()
return true;
}
}