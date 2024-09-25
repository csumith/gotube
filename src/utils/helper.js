  
        var nameList = [
            'Time','Past','Future','Dev',
            'Fly','Flying','Soar','Soaring','Power','Falling',
            'Fall','Jump','Cliff','Mountain','Rend','Red','Blue',
            'Green','Yellow','Gold','Demon','Demonic','Panda','Cat',
            'Kitty','Kitten','Zero','Memory','Trooper','XX','Bandit',
            'Fear','Light','Glow','Tread','Deep','Deeper','Deepest',
            'Mine','Your','Worst','Enemy','Hostile','Force','Video',
            'Game','Donkey','Mule','Colt','Cult','Cultist','Magnum',
            'Gun','Assault','Recon','Trap','Trapper','Redeem','Code',
            'Script','Writer','Near','Close','Open','Cube','Circle',
            'Geo','Genome','Germ','Spaz','Shot','Echo','Beta','Alpha',
            'Gamma','Omega','Seal','Squid','Money','Cash','Lord','King',
            'Duke','Rest','Fire','Flame','Morrow','Break','Breaker','Numb',
            'Ice','Cold','Rotten','Sick','Sickly','Janitor','Camel','Rooster',
            'Sand','Desert','Dessert','Hurdle','Racer','Eraser','Erase','Big',
            'Small','Short','Tall','Sith','Bounty','Hunter','Cracked','Broken',
            'Sad','Happy','Joy','Joyful','Crimson','Destiny','Deceit','Lies',
            'Lie','Honest','Destined','Bloxxer','Hawk','Eagle','Hawker','Walker',
            'Zombie','Sarge','Capt','Captain','Punch','One','Two','Uno','Slice',
            'Slash','Melt','Melted','Melting','Fell','Wolf','Hound',
            'Legacy','Sharp','Dead','Mew','Chuckle','Bubba','Bubble','Sandwich','Smasher','Extreme','Multi','Universe','Ultimate','Death','Ready','Monkey','Elevator','Wrench','Grease','Head','Theme','Grand','Cool','Kid','Boy','Girl','Vortex','Paradox',"Arjun","Shiva", "rana","Skashi","Disha","poonam","Shubhangi","Anju","kajal","jyoti","komal"
        ];

        const positiveAff = [
          { id: 1, quote: "Jai jai shree Ram 🚩🚩🚩🚩" },
          { id: 2, quote: "Har Har Mahadev 🙏🙏🙏🙏" },
          { id: 3, quote: "Jai shree Krishna Murali🪈🪈🪈" },
          { id: 4, quote: "Deva shree Ganesha🙏🚩" },
          { id: 3, quote: "Jai Bajranbali 🙏🙏🙏🙏" }


        
        ]
    
      
    
        export const randomNamegenerate=()=> {
          return nameList[Math.floor( Math.random() * nameList.length )];
           
        };

       
          
        
        export  function newQuote() {
            var randomNumber = Math.floor(Math.random() * (positiveAff.length));
            return positiveAff[randomNumber].quote;
           
          }