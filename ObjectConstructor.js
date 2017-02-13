var animal = function(){
  noises = Array('oink','hau','meaw');


//dot notation
animal.username = 'Kevin Spacey';
//brace notation
animal['tagline'] = 'Its gotta be a good day';

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

};

var piggy = new animal();
var doggy = new animal();
var pussy = new animal();


