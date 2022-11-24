const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name, Nicknames are also acceptable\n', (q1) => {
  
  rl.question('What\'s an activity you like doing?\n', (q2) => {
    
    rl.question('What do you listen to while doing that?\n', (q3) => {
    
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)\n', (q4) => {
    
        rl.question('What\'s your favourite thing to eat for that meal?\n', (q5) => {
    
          rl.question('Which sport is your absolute favourite?\n', (q6) => {
            
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!\n', (q7) => {
            
              console.log(
                `${q1} likes to do ${q2} while listning to ${q3}. Durring ${q4}, you'll find them eating ${q5}, while watching ${q6}. \n
                ...don't tell anyone but ${q1} is great at ${q7}`
              )

              rl.close();
            });
          });
        });
      });
    });
  });
});

