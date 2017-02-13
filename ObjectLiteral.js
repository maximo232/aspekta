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


