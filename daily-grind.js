    //alert("can you see this?");

    /*

    Rotate by Day of Week: Use HTML/CSS & JavaScript to create a single page that rotates unique colors and content for each weekday (Sunday to Saturday) into the page.  The content must include:

    One unique image, with appropriate and matching content in the alt tag.  
    A paragraph or two of content that describes the daily item (paragraph must include the name of the highlighted weekday)
    A unique color that supports the image and paragraph of content
    The unique color could affect the background HTML, or an element on the page for each day of the week.  All of the above must occur within one page

    pic - the src of the coffee
    alt - the alt tag for the coffee pic
    desc - a description of the coffee
    day - the day of the week for the coffee
    name - the nane of the coffee
    color - the color associated with the coffee

*/

function coffeeTemplate(coffee){
    return `
    <p>
    <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
   <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong class="feature">${coffee.name}</strong>, ${coffee.desc}
</p>
    `;
}





let myDate = new Date();
let myDay = myDate.getDay();
let today = "";
let coffee ="";

//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate query string parameters
const urlParams = new URLSearchParams(queryString);

if(urlParams.has("day")){//from querystring
    myDay = urlParams.get("day");
 }
 //change string to a number to an integer
myDay=parseInt(myDay);

switch(myDay){

    case 0:
        today = "Sunday";
        coffee = {
            name:"Cold Brew",
            pic:"images/cold-brew.jpg",
            alt:"a picture of an cold brew",
            color:"red",
            day:"Sunday",
            desc:`it perks me up!`
        
        };
        
    break;

    case 1:
        today = "Monday";
        coffee = {
            name:"Pumpkin Spice Latte",
            pic:"images/pumpkin-spice-latte.jpg",
            alt:"a picture of a pumpkin spice latte",
            color:"beige",
            day:"Monday",
            desc:`it is so delicious!`
        
        };
    break;

    case 2:
        today = "Tuesday";
        coffee = {
            name:"Bubble Tea",
            pic:"images/bubble-tea.jpg",
            alt:"a picture of a bubble tea",
            color:"pink",
            day:"Tuesday",
            desc:`I like me some bubble Tea!`
        
        };
    break;

        case 3:
            today = "Wednesday";
            coffee = {
                name:"Mocha",
                pic:"images/mocha.jpg",
                alt:"a picture of a mocha tea",
                color:"brown",
                day:"Wednesday",
                desc:` which is nice and chocolatey!`
            
            };
    break;

    case 4:
        today = "Thursday";
        coffee = {
            name:"Frappaccino",
            pic:"images/frappaccino.jpg",
            alt:"a picture of a frappaccino",
            color:"lavender",
            day:"Thursday",
            desc:`Frappaccino is so good!`
        
        };

    break;

    case 5:
        today = "Friday";
        coffee = {
            name:"Drip",
            pic:"images/drip.jpg",
            alt:"a picture of a drip",
            color:"green",
            day:"Friday",
            desc:`drip coffee is great!`
        
        };
        
    break;

    case 6:
        today = "Saturday";
        coffee = {
            name:"Caramel Latte",
            pic:"images/caramel-latte.jpg",
            alt:"a picture of a caramel latte ",
            color:"teal",
            day:"Saturday",
            desc:`A caramel latte is so good and filling!`
        
        };
        
    break;

    default:
        today = "Something went wrong!";
}


//Injects our coffee object into the page
document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);
//Changes color of HTML element
document.querySelector("html").style.backgroundColor = coffee.color;


console.log(today);