$( document ).ready(function() {
	generate();
    
    
  function generate(){
    var quotes = ["Give me all the bacon and eggs you have.@Ron Swanson","You had me at 'Meat Tornado'.@Ron Swanson","There must be a mistake. You’ve given me the food that my food eats.@Ron Swanson","Son, there is no wrong way to consume alcohol.@Ron Swanson","Clear alcohols are for rich women on diets.@Ron Swanson","Never half-ass two things. Whole-ass one thing.@Ron Swanson","(On England) Enjoy the fact that your overlords are a frail old woman and a tiny baby.@Ron Swanson","History began on July 4, 1776. Everything that happened before that was a mistake.@Ron Swanson","...I don't believe in government. I think that all government is a waste of taxpayer money.@Ron Swanson","Fishing is for sport only. Fish meat is practically a vegetable.@Ron Swanson","The whole point of this country is if you wanna eat garbage, balloon up to 600 pounds and die of a heart attack at 43, you can! You are free to do so! To me, that's beautiful.@Ron Swanson","It's never too early to learn the government is a greedy piglet that suckles on a taxpayer's teat until they have sore, chapped nipples... I'm going to need a different metaphor to give this 9 year old.@Ron Swanson","There has never been a sadness that can't be cured by breakfast food.@Ron Swanson","I call this turf ‘n’ turf. It’s a 16 oz T-bone and a 24 oz porterhouse. Also, whisky and a cigar. I am going to consume all of this at the same time because I am a free American.@Ron Swanson","Fishing relaxes me. It’s like yoga, except I still get to kill something.@Ron Swanson","There’s only one thing I hate more than lying. Skim milk. Which is water. That’s lying about being milk.@Ron Swanson","(On bowling) Straight down the middle. No hook, no spin, no fuss. Anything more and this becomes figure skating.@Ron Swanson","When people get a little too chummy with me I like to call them by the wrong name to let them know I don’t really care about them.@Ron Swanson","Capitalism: God’s way of determining who is smart and who is poor.@Ron Swanson","Shorts over six inches are capri pants, shorts under six inches are European.@Ron Swanson","Crying is only okay in two places: funerals and the Grand Canyon.@Ron Swanson","...I believe luck is a concept created by the weak to explain their failures.@Ron Swanson","Give a man a fish and feed him for a day. Don’t teach a man to fish...and feed yourself. He’s a grown man. And fishing’s not that hard.@Ron Swanson","All my life I’ve avoided Europe and it’s multitudes of terribleness, but it turns out, much to my surprise there is actually one place in Europe that is worth seeing. These tiny islands off the coast of Scotland where God’s chosen elixirs are distilled, barreled and prepared for consumption. This is worth the trip.@Ron Swanson","I...think it’s pointless for a human to paint scenes of nature when they could just go outside and stand in it.@Ron Swanson"
];
    
    
		randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
    quoteAuthor=randomQuote.split("@");
		$('.saying').text(quoteAuthor[0]);
    $('.author').text(quoteAuthor[1]);
  }
  
  
$(".button").on( "click", function() {
    generate();
});  
  
});

var ron = new Audio("Ron.mp3");

$('#sound').click(function () {
        ron.play();
    });   