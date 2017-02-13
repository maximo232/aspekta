function HelloWorld(a,b) {
  alert(a);
  alert(b);
}

var Module = function() {
  //Module.privProperty
  var privateProp = 'HelloWorld';
  
  //Module.doSomething
  function privateMeth(args) {
    alert('doSomething');
  }
  
  //return from Module 
  return {
    publicProp: "",
    publicMeth: function(args) {},
    priviledgedMeth: function(args) {
      privateMeth(args);
    }
  };
};

//Constructor function Car
var Car = function() {
  //private parts :-)
  var gasolineLevel = 10;
  function useGas(amt){
    if(gasolineLevel - amt <= 0) {
      console.log('out of gas');
    } 
    else {
      gasolineLevel -= amt;
    }
  }
  //returning an object :-) with its public methods/properties
  return {
    radioStation: "104.50",
    changeStation: function(station) {
      this.radioStation=station;
    },
    
    go: function(petrol) {useGas(petrol); }
  };
};


