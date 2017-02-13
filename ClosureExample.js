var gameModule = function(){
  var city = {
  penalties: Array('parking ticket',10,'fare dodging',20,'shop lifting',30,'pick pocketing',40,'burglary',50,'graffiti',25,'vagrancy',10,'drunk behaviour',20),
  jobs: Array('Street sweeper',10,'Uber driver',20,'Barista',30,'JavaScript Coder',30,'Prime Minister',100,'Sailor',50,'Popular Chef',40,'Forex Investor',30),
  events: Array('Drinks',1,'Date',1,'Job',8,'Conflict with Law',8)
};
  var human = {
  gender: "",
  age:  "21",
  time: 31*24*12,
  money: 250,
  babies: 0
};

    function getEvent(cat) {
      function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min) + min) * 20;
      }
        for(var keys in cat) {
          //var event=city.cat[getRandom(0,cat.length)];
          var event=city.cat[1];
        }
      }

    function processDay(human) {
      for(var cat in ['jobs','events','penalties']){
      var whatsHappening = getEvent(cat);
      console.log(whatsHappening);
      }
    }
    
    return {
      guy: function() {processDay()},
    };
    
};



/* pseudo code

this game is roulette of things that happen when living. the goal is to make a baby

- you live day by day (24hrs)
- you either sleep or walk some some random hours. in between decisions you need to check your event
- event can be: 
law conflict (you need to pay the tarrif or spent time or both)
job: you earn money
exercise: you earn time
family: you meet someone you date someone (cost you money) or you party with strangers (cost you time)
if you date three times you make baby - this end the game and you WIN
if you run of time or money you LOSE
*/