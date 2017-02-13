var animal = {
  noises: Array('oink','hau','meaw'),
  //note the coma and no semicolons in this ObjectLiteral
  extraProp: 'COOLCROCS',
  printMe: function(me){console.log(me)}
};

//here we go normal JS code follows, with some variables adding to animal ObjectLiteral
//dot notation
animal.username = 'Kevin Spacey';
//brace notation
animal['tagline'] = 'Its gotta be a good day';


//some code
var a=0;
for(var props in animal){
  a++;
  if(props=='username'){
    console.log('Hi I am ' + animal[props])
  }
    if(props=='tagline'){
    console.log('Wanted to say that: ' + animal[props])
  }
}

//Create the noise Array
var noiseArray = [];
//functions on Array() object
noiseArray.push("bass"); //Add to the end of Array
noiseArray.push("talking");
noiseArray.unshift("claps"); //Add to the beginning of Array

//bracket notation
noiseArray[3]="beep";
//equivalent for last index. in this case [4] (remember .length starts at 1 and indexes at 0)
noiseArray[noiseArray.length]="knock knock after beep";

//just to check this in console (inspecting)
for(var a = 0; a < noiseArray.length; a++){
  console.log("The element no:" + a + "is" + noiseArray[a]);
}

//reuturn noiseArray.length;
if(noiseArray[0] === undefined){
  console.log('This array element zero is undefined')
}

animal.noises = noiseArray;


var animals = [];

animals.push(animal); //One way to add to the end of Array

var quackers = { username: 'DaffyDuck', tagline: 'Yippeee!', noises: ['quack', 'honk', 'sneeze', 'growl'] };
//var quackers = animal;
//quackers.username = 'DaffyDuck'; quackers.tagline='Yippeee!'; quackers.noises: ['quack', 'honk', 'sneeze', 'growl'];

//Third class 13th Feb

//Add two noises to the end of the Array with two different methods

noisesArray.push('extra oink 1');
noisesArray.[noiseArray.length]="extra oink 2";

//Nest this array into the animal noises: property
animal.noises=noiseArray;

//Inspect this in console
