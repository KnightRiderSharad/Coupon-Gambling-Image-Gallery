//Image Gallery Access using query selector-

//image1-Registration
let image1=document.querySelector("#banner1-img");

//image2-Biodata(Name and Username)
let image2=document.querySelector("#banner2-img");

//image3-Roll the Dice
let image3=document.querySelector("#banner3-img");

//image4-Coupons for you
let image4=document.querySelector("#banner4-img");

//Access of rolling dice, total points, generating coupon
let points=document.getElementById("Point_count");
let dice=document.getElementById("Dice");
let coupon=document.getElementById("Coupon");

//Accessing with name and username 
let field=document.getElementById("form");
let info=document.getElementById("display");

//Accessing Name, email, username, validation error
let input_name=document.getElementById("name");
let input_email=document.getElementById("email");
let input_username=document.getElementById("username");
let error=document.getElementById('error');

//Accessing Button to register
let btn=document.getElementById("submit");

//Adding event to register
btn.addEventListener("click", register)

//A form appears where the user can register themselves by providing their name, email, and username.
var array=[
           {id:0, name:"sharad", email:"ksharad34@gmail.com", user:"sharad123"}
          ] 
var validate=0;
function register()
{
    let name=input_name.value;
    let email=input_email.value;
    let user=input_username.value;

//Checking Validation of all the fields fulfilled or not!
if(name!="" && email!=""&& user!=""){
let len=array.length;
    
var newArray={ id:len, name:name, email:email, user:user }

array.push(newArray);
}

if(name==""||email==""||user==""){
error.innerText="Fields are Empty!";
}
else{
validate=1;
error.innerText="Your form registered successfully!";
input_name.value="";
input_email.value="";
input_username.value="";
}
}

var steps=0;
var countfield=0;
var place=-1;

image1.addEventListener("click",()=>{
    countfield++;
    steps++;
    place++;
     if(steps>=1 && countfield==1 && place>=0)
     {  
      field.style.display="block";
     }  
     place--;
})

//The registered person's name and username should be displayed when the second image is clicked.
var counts=0; 
image2.addEventListener("click",()=>{
    if(countfield==1 && validate==1){
    steps++;
    counts++;
    place++;

    if(steps>1 && counts==1 && place==0){
    field.style.display="none";
    info.style.display="block";
    info.innerHTML="";
    array.forEach((registeredItem)=>{
    if(registeredItem.id>0)
    {
    
    let dataItem=document.createElement("tr");
    dataItem.innerHTML=`<td> &nbsp Name: &nbsp ${registeredItem.name}  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp</td> <td> Username: &nbsp ${registeredItem.user}</td>`
       
    
    //Item.style.justifyContent="center";
    //Item.style.AlignContent="center";
    dataItem.style.height="40px";
    dataItem.style.width="400px";
    dataItem.style.color="white";
    dataItem.style.borderStyle="solid";
    dataItem.style.display="block";
    //Item.style.margin="40px 50px";
    dataItem.style.borderRadius="5px";
      info.append(dataItem);
    }
}
    )
}
place--;
    }
}
)

var number=0; calculate=0;
//When the third image is clicked, it should display a picture of a dice. 
image3.addEventListener("click",()=>{
    place++;
    if(counts==1){
    steps++;
    calculate++;
    if(steps>2 && calculate==1 && place==0){

    points.style.display="block";
    points.innerHTML=" ";
    points.innerHTML=` ${sum} `;

    field.style.display="none";
    info.style.display="none";
    dice.style.display="block";
    }
    place--;
    }
}
)

var sum=0; 
var count=0;
var attempt=0;
dice.addEventListener("click",()=>{
    count++; 
    attempt++;
    place++;
 if(count<=3 && attempt<=6 && place==0)
 {
    
// When clicking the dice, it should generate a random number between 1 and 6.
    sum=sum+ Math.floor(Math.random()*6)+1;
 }

if(sum<=10 && count==3 && attempt==3 && place==0)
  {
    alert("Your Score is less than 10, Try again!");
    sum=0;
    count=0;  
    points.style.display="block";
    points.innerHTML=" ";
    points.innerHTML=` ${sum} `;
    points.innerHTML=" ";
  }
    points.innerHTML=` ${sum} `;
if(sum<=10 && attempt==6)
{
    alert("Bad luck, All Attempts failed! Dont cry, Start from beggining!");
    
}
points.innerHTML=" ";
points.innerHTML=` ${sum} `;
console.log(sum);
place--;
})

//When the fourth image is clicked, a random 12-digit text should be generated as a coupon!
var countNum=0;
image4.addEventListener("click",()=>{
    countNum++;
    steps++;
    place++;
    if(steps>=3 && countNum==1 && place==0)
    {

if(count>=3 && sum>10)
{
     dice.style.display="none";
     field.style.display="none";
     info.style.display="none";
     coupon.style.display="block";

     //Generating 12 digit Coupon Number-
     let number="0123456789";
     let characters=number;
     let coupons="";
     for(let i=0;i<12;i++)
     {
         let random=Math.floor(Math.random()*characters.length);
         coupons=coupons+characters[random];
     }
     
     let Item=document.createElement("tr");

     // After passing Roll dice Criteria, Coupon will be displayed on screen with coupon number and Congratulation Image-
     Item.innerHTML=`<td> &nbsp  &nbsp  &nbsp  &nbsp  &nbsp  &nbsp Your Coupon number is: &nbsp ${coupons}</td>`
    
      Item.style.fontStyle="Italic";
      Item.style.fontSize="22px";
      Item.style.height="30px";
      Item.style.width="550px";
      Item.style.color="white";
      Item.style.display="block";
      Item.style.borderStyle="solid";
      Item.style.margin="40px 20px";
      Item.style.borderRadius="5px";
      coupon.append(Item);   
}
place--;
 }
    })
