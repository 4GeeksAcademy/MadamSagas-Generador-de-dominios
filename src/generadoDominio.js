let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extension = ['.net', '.com', '.us', '.io'];

for(let i = 0; i < pronoun.length ; i++) {
 for(let j = 0; j < adj.length ; j++) {
   for (let k = 0; k < noun.length ; k++) {
    // console.log(pronoun[i] + adj[j] + noun[k] + '.com'  );
     console.log(pronoun[i] + adj[j] + noun[k] + extension[Math.floor(Math.random() * 3) + 1]  );
    
   }
 }

}