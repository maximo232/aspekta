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

var noiseArray = [];
//functions on Array() object
noiseArray.push("bass");
noiseArray.push("talking");
noiseArray.unshift("claps");

//bracket notation
noiseArray[3]="beep";

//just to check this in console (inspecting)
for(var a = 0; a < noiseArray.length; a++){
  console.log("The element no:" + a + "is" + noiseArray[a]);
}

//reuturn noiseArray.length;
if(noiseArray[0] === undefined){
  console.log()
}

animal.noises = noiseArray;


var animals = [];

animals.push(animal);

var quackers = { username: 'DaffyDuck', tagline: 'Yippeee!', noises: ['quack', 'honk', 'sneeze', 'growl'] };
//var quackers = animal;
//quackers.username = 'DaffyDuck'; quackers.tagline='Yippeee!'; quackers.noises: ['quack', 'honk', 'sneeze', 'growl'];
