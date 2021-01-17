// See https://github.com/dialogflow/dialogflow-fulfillment-nodejs
// for Dialogflow fulfillment library docs, samples, and to report issues
'use strict';
 
const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');
const {Card, Suggestion} = require('dialogflow-fulfillment');
const {dialogflow, BasicCard, Suggestions} = require('actions-on-google');
const {actionssdk} = require('actions-on-google');

process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements
 
exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  const app = actionssdk({debug: true});
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));
 
  function welcome(agent) {
    agent.add(`Welcome to my agent!`);
  }
 
  function fallback(agent) {
    agent.add(`I didn't understand`);
    agent.add(`I'm sorry, can you try again?`);
  }
   
  function Actors(agent){
    
    //array of actors
    var arrayActors = ["Leonardo DiCaprio","Anthony Hopkins","Morgan Freeman", "Denzel Washington", "Robert De Niro", "Tom Hanks", "John Travolta",
                      "Johnny Depp" , "Mark Wahlberg","James Franco","Clive Owen","Adam Sandler", 
                      "Heath Ledger","Clint Eastwood", "Eddie Murphy", "Jim Carrey", "Jason Statham", "Ben Stiller",
                      "Wesley Snipes", "Shia LaBeouf", "Kevin Spacey", "Samuel L. Jackson", "Ryan Reynolds","Jack Nicholson",
                      "Elijah Wood", "Bruce Willis", "Matt Damon", "Jackie Chan", "Ben Affleck", "Mel Gibson", "Owen Wilson",
                      "Will Smith", "Edward Norton", "Sylvester Stallone", "Danny Glover", "Christian Bale",
                      "Danny DeVito", "Keanu Reeves", "Justin Timberlake", "Liam Neeson", "Robert Downey Jr.", "Jamie Foxx", 
                      "George Clooney", "Hugh Jackman"];
    
    // this will randomly sort the array
    var unsortArrayActors = arrayActors.sort(func); // will sort the 3 names in the array randomly
    function func(a,b){
        return 0.5 - Math.random();
    }
	agent.add (` Your three names are ${unsortArrayActors[0]}, ${unsortArrayActors[1]} , ${unsortArrayActors[2]}. Please say another categorie for 3 more names`);
   
    
    
   }
                                 
  
    function Actress(agent){
    //array of actors
    var ArrayActress = ["Margot Robbie", "Scarlett Johansson", "Blake Lively",  "Laura Vandervoort",  "Megan Fox" , "Isabel Lucas", "Rachel McAdams", 
						"Yvonne Strahovski", "Emma Stone",  "Jessica Alba", "Charlize Theron",  "Evangeline Lilly",  "Olivia Wilde",  "Alicia Vikander" ,
                        "Gwyneth Paltrow", "Michelle Monaghan",  "Alexandra Daddario",  "Natalie Portman",  "Ana de Armas", "Emma Watson", "Kristin Kreuk", 
						"Penélope Cruz" , "Jennifer Lawrence",  "Elizabeth Banks",  "Sofía Vergara",  "Brie Larson",  "Gal Gadot",  "Zoe Saldana ","Cara Delevingne", 
						"Emilia Clarke",  "Keira Knightley",  "Emily Ratajkowski",  "Liv Tyler",  "Melissa Benoist",  "Mila Kunis",  "Odette Annable", 
						"Kristen Bell",  "Nina Dobrev",  "Jennifer Aniston", "Marilyn monroe", "Selena Gomez"];
    
    // this will randomly sort the array
    var unsortArrayActress = ArrayActress.sort(func); // will sort the 3 names in the array randomly
    function func(a,b){
        return 0.5 - Math.random();
    }
	agent.add (` Your three names are ${unsortArrayActress[0]}, ${unsortArrayActress[1]} , ${unsortArrayActress[2]}. Please say another categorie for 3 more names`);
    
    
   }
  
   function Athletes(agent){
    //array of actors
    var ArrayAthletes = ["Martin Brodeur", "Chris Chelios","Sidney Crosby", "Pavel Datsyuk", "Ken Dryden", "Sergei Fedorov", "Peter Forsberg",
						"Auston Mathews", "Wayne Gretzky", "Gordie Howe", "Patrick Kane", "Duncan Keith", "Nicklas Lidstrom", "Mario Lemieux",
						"Bobby Orr", "Alex Ovechkin", "Brendan Shanahan", "Jonathan Toews", "Steve Yzerman", "Shaquille O'Neal", "Kobe Bryant", 
						"Tim Duncan", "Larry Bird", "Wilt Chamberlain", "Magic Johnson", "Kareem Abdul-Jabbar", "LeBron James", "Michael Jordan",
                         "Chris Paul", "James Harden", "Isiah Thomas", "Steve Nash", "Allen Iverson", "Dwyane Wade", "Charles Barkley", "Scottie Pippen",
                         "Kevin Durant", "Stephen Curry", "Jerry Rice", "Tom Brady", "Joe Montana", "Reggie White", "Peyton Manning", "Barry Sanders",
                         "Brett Favre", "Drew Brees", "O.J. Simpson", "Aaron Rodgers", "J.J. Watt", "Larry Fitzgerald", "Alex Rodriguez", "Cy Young",
						"Barry Bonds", "Babe Ruth", "Jackie robinson", "Justin verlander", "Cristiano Ronaldo", "Lionel Messi", "Roger Federer", 
						"Neymar", "Canelo Alvarez",  "Anthony Joshua", "Tiger Woods", "Kyrie Irving", "Rory McIlroy", "John Daley", "Jon Jones",
						"Lewis Hamilton", "Ben Roethlisberger", "Rafael Nadal", "Alex morgan", "Blake Griffin", "Sebastian Vettel", "Phil Mickelson", 
						"conor mcgregor"];
    
    // this will randomly sort the array
    var unsortArrayAthletes = ArrayAthletes.sort(func); // will sort the 3 names in the array randomly
    function func(a,b){
        return 0.5 - Math.random();
    }
	agent.add (` Your three names are ${unsortArrayAthletes[0]}, ${unsortArrayAthletes[1]} , ${unsortArrayAthletes[2]}. Please say another categorie for 3 more names`);
    
    
   }
  
  
  function Authors(agent){
    //array of actors
    var ArrayAuthors = ["William Shakespeare", 	"Agatha Christie", 	"Barbara Cartland", "Danielle Steel", "Harold Robbins", "Georges Simenon",	
						"Enid Blyton", "Sidney Sheldon", "J. K. Rowling", "Gilbert Patten", "Dr. Seuss", "Eiichiro Oda", "Leo Tolstoy", "Corín Tellado",
						"Jackie Collins", "Horatio Alger", "R. L. Stine", "Dean Koontz", "Nora Roberts", "Alexander Pushkin", "Stephen King", 	
						"Paulo Coelho", "Jeffrey Archer", "Louis L'Amour","Jirō Akagawa", "René Goscinny", 	"Erle Stanley Gardner", "Edgar Wallace", 	
						"Jin Yong", "Janet Dailey", "Robert Ludlum", "Akira Toriyama", 	"Osamu Tezuka", "James Patterson", "Frédéric Dard", 
						"Stan and Jan Berenstain", 	"Roald Dahl", "John Grisham", "Zane Grey", "Irving Wallace", "Masashi Kishimoto", "Carter Brown",
						"Mickey Spillane", 	"C. S. Lewis", 	"Kyotaro Nishimura", "Mitsuru Adachi", 	"Rumiko Takahashi", "Gosho Aoyama", "Dan Brown",
						"Ann M. Martin", "Ryōtarō Shiba", "Arthur Hailey", "Gérard de Villiers", "Beatrix Potter", "Michael Crichton", "Richard Scarry", 
						"Clive Cussler", "Alistair MacLean", "Ken Follett", "Astrid Lindgren", "Robert Frost", "Pablo Neruda", "E. E. Cummings", 
						"Langston Hughes", "Walt Whitman", "Thomas Hardy", "Rudyard Kipling", "Oscar Wilde", "John Keats", "Elizabeth Barrett Browning"];
    
    // this will randomly sort the array
    var unsortArrayAuthors = ArrayAuthors.sort(func); // will sort the 3 names in the array randomly
    function func(a,b){
        return 0.5 - Math.random();
    }
	agent.add (` Your three names are ${unsortArrayAuthors[0]}, ${unsortArrayAuthors[1]} , ${unsortArrayAuthors[2]}. Please say another categorie for 3 more names`);
    
    
   }
  
  
   function FemaleSinger(agent){
    //array of actors
    var ArrayFemaleSinger = [ "Kehlani", "Billie Eilish", "Taylor Swift", "Megan Thee Stallion", "Ariana Grande", "Jhené Aiko", "Dua Lipa", 
							"Lizzo", "Beyoncé", "Halsey", "Rihanna", "Adele", "Lady Gaga", "Demi Lovato", "Pink", "Shakira", "Kelly Clarkson", 
							"Jessie J", "Christina Aguilera", "Alicia Keys", "Lana Del Rey", "Carrie Underwood", "Gwen Stefani", "Taylor Swift", 
							"Selena Gomez", "Celine Dion", "Miley Cyrus", "Katy Perry", "Rita Ora", "Cher", "Lorde", "Tove Lo", "Alessia Cara",
                             "Kesha", "Britney Spears", "Camila Cabello", "Tori Kelly", "Avril Lavigne", "Madonna", "Zara Larsson", "Janet Jackson", 
							"Nicki Minaj", "Miranda Lambert", "Bebe Rexha", "Iggy Azalea", "Jordin Sparks", "Missy Elliott", "Ciara", "Carly Rae Jepsen"];
    
    // this will randomly sort the array
    var unsortArrayFemaleSinger = ArrayFemaleSinger.sort(func); // will sort the 3 names in the array randomly
    function func(a,b){
        return 0.5 - Math.random();
    }
	agent.add (` Your three names are ${unsortArrayFemaleSinger[0]}, ${unsortArrayFemaleSinger[1]} , ${unsortArrayFemaleSinger[2]}. Please say another categorie for 3 more names`);
    
    
   }
  
   function FemaleSuperHero(agent){
    //array of actors
    var ArrayFemaleSuperHero = ["catwoman", "Harley Quinn", "Poison Ivy", "Lois Lane", "super girl", "wonder woman",  "spider woman", "Jane Foster", 
								"Jessica Jones", "Black Widow","medusa", "Mary Jane", "Ahsoka Tano", "Rey",  "Padmé Amidala", "Captain Phasma", 
								"Cara Dune", "Princess Leia", "Hermione Granger", "Minerva McGonagall", "Luna Lovegood", "Captin Marvel", "E T", 
								"Wall-E", "R 2 D 2", "C 3 P O", "B B-8", "Katniss Everdeen", "Nebula", "The Phoenix", "Emma Frost", "Storm"];
    
    // this will randomly sort the array
    var unsortArrayFemaleSuperHero = ArrayFemaleSuperHero.sort(func); // will sort the 3 names in the array randomly
    function func(a,b){
        return 0.5 - Math.random();
    }
	agent.add (` Your three names are ${unsortArrayFemaleSuperHero[0]}, ${unsortArrayFemaleSuperHero[1]} , ${unsortArrayFemaleSuperHero[2]}. Please say another categorie for 3 more names`);
    
    
   }

  	 function MaleSingers(agent){
    //array of actors
    var ArrayMaleSingers = ["Elvis Presley","Paul McCartney", "John Lennon","Eric Clapton", "Stevie Wonder", "Ozzy Osbourne", 
                           "Bob Marley","David Bowie", 'Johnny Cash', 'Mick Jagger','Michael Jackson', '50 Cent', 'Adam Lambert', 
                           'Adam Levine', 'Billy Joel','Bruno Mars', 'Chris Brown', 'Drake', 'Ed Sheeran', 'Eminem','Enrique Iglesias', 
                           'Harry Styles','Jason Derulo', 'Joe Jonas', 'Justin Bieber', 'Justin Timberlake','Kanye West', 'Pitbull', 'Prince', 
                           'R Kelly','Steven Tyler','Vance Joy', 'The Weeknd', 'Zayn', 'Shawn Mendes', 'Lewis Capaldi', 'Khalid', 'Post Malone', 
                           'John Legend','Liam Payne', 'Sam Smith', 'Justin Bieber', 'Frank Ocean', 'DaBaby','Nav','YoungBoy Never Broke Again',
                           'Lil Uzi Vert', 'Lil Baby','Lil Durk', 'Juice Wrld', 'Sam Smith', 'Luke Comb', 'All of BTS', 'Travis Scott', 'Xxxtentacion', 
                           '6IX9INE', 'The Beatles', 'A Boogie wit da Hoodie', 'Future', 'Trippie Redd', 'Morgan Wallen', 'Kevin Gates', 'Mac Miller',
                           'MGK','J. Cole','Tory Lanez', 'Kendrick Lamar', 'Jason Aldean', 'Kid Rock',  'Kenny Chesney', 'Sam Hunt', 'NF','Blake Shelton'];
    
    // this will randomly sort the array
    var unsortArrayMaleSingers = ArrayMaleSingers.sort(func); // will sort the 3 names in the array randomly
    function func(a,b){
        return 0.5 - Math.random();
    }
	agent.add (` Your three names are ${unsortArrayMaleSingers[0]}, ${unsortArrayMaleSingers[1]} , ${unsortArrayMaleSingers[2]}. Please say another categorie for 3 more names`);
    
    
   }
  
  function MaleSuperHero(agent){
    //array of actors
    var ArrayMaleSuperHero = ['Darth Vader', 'The Doctor', 'Han Solo', 'Spock',
                              'Dana Scully','Yoda','Captain John Sheridan','Luke Skywalker',
                              'E T', 'Obi-Wan Kenobi','Wall-E','R 2 D 2','C 3 P O','Boba Fett','Count Dooku',
                              'Poe Dameron','General Grievous','Qui-Gon Jinn','Finn','Kylo Ren',
                              'Mace Windu','Chewbacca','Jabba the Hut','Lando Calrissian','Darth Maul',
                              'B B-8','anakin skywalker','Dobby', 'Lucius Malfoy','Rubeus Hagrid',
                              'Fred Weasley','George Weasley','Draco Malfoy','Sirius Black',
                              'Voldemort','Albus Dumbledore','Severus Snape','Ron Weasley',
                              'Harry Potter','Gollum','Gandalf','Legolas','Frodo Baggins',
                              'Captain America','Spider-Man','The Hulk','Wolverine','Deadpool',
                              'Daredevil','Black Panther','Thor','Iron Man','Luke Cage','Punisher',
                              'Doctor Strange','Ant-Man','Professor X','Doctor Doom','Loki','Green Goblin',
                              'Thanos','Alfred Pennyworth','Aquaman', 'Batman','Bane','The Joker',
                              'Green Lantern','Lex Luthor','penguin','superman','robin','The flash',
                              'The Terminator'];
    
    // this will randomly sort the array
    var unsortArrayMaleSuperHero = ArrayMaleSuperHero.sort(func); // will sort the 3 names in the array randomly
    function func(a,b){
        return 0.5 - Math.random();
    }
	agent.add (` Your three names are ${unsortArrayMaleSuperHero[0]}, ${unsortArrayMaleSuperHero[1]} , ${unsortArrayMaleSuperHero[2]}. Please say another categorie for 3 more names`);
    
    
   }



  // // Uncomment and edit to make your own intent handler
  // // uncomment `intentMap.set('your intent name here', yourFunctionHandler);`
  // // below to get this function to be run when a Dialogflow intent is matched
  // function yourFunctionHandler(agent) {
  //   agent.add(`This message is from Dialogflow's Cloud Functions for Firebase editor!`);
  //   agent.add(new Card({
  //       title: `Title: this is a card title`,
  //       imageUrl: 'https://developers.google.com/actions/images/badges/XPM_BADGING_GoogleAssistant_VER.png',
  //       text: `This is the body text of a card.  You can even use line\n  breaks and emoji! 💁`,
  //       buttonText: 'This is a button',
  //       buttonUrl: 'https://assistant.google.com/'
  //     })
  //   );
  //   agent.add(new Suggestion(`Quick Reply`));
  //   agent.add(new Suggestion(`Suggestion`));
  //   agent.setContext({ name: 'weather', lifespan: 2, parameters: { city: 'Rome' }});
  // }

  // // Uncomment and edit to make your own Google Assistant intent handler
  // // uncomment `intentMap.set('your intent name here', googleAssistantHandler);`
  // // below to get this function to be run when a Dialogflow intent is matched
  // function googleAssistantHandler(agent) {
  //   let conv = agent.conv(); // Get Actions on Google library conv instance
  //   conv.ask('Hello from the Actions on Google client library!') // Use Actions on Google library
  //   agent.add(conv); // Add Actions on Google library responses to your agent's response
  // }
  // // See https://github.com/dialogflow/fulfillment-actions-library-nodejs
  // // for a complete Dialogflow fulfillment library Actions on Google client library v2 integration sample

  // Run the proper function handler based on the matched Dialogflow intent name
  let intentMap = new Map();
  intentMap.set('Default Welcome Intent', welcome);
  intentMap.set('Default Fallback Intent', fallback);
  intentMap.set('Actors', Actors);
  intentMap.set('Actress', Actress);
  intentMap.set('Athletes', Athletes);
  intentMap.set('Authors', Authors);
  intentMap.set('FemaleSinger' , FemaleSinger);
  intentMap.set('FemaleSuperHero', FemaleSuperHero);
  intentMap.set('MaleSingers', MaleSingers);
  intentMap.set('MaleSuperHero', MaleSuperHero);
  // intentMap.set('your intent name here', yourFunctionHandler);
  // intentMap.set('your intent name here', googleAssistantHandler);
  agent.handleRequest(intentMap);
});
