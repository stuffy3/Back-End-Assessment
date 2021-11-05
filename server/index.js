const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.
let globalId = 4
const signs = 
[
  {
    "id": 1,
    "text" : "Even if you might normally keep to yourself, socializing could really bring out the best in you right now, especially if you're mixing with people who are as passionate as you are. Taking a class just for fun could help you meet those with similar interests and also help to open your mind and change some perspectives. You might even find that things that used to bother you become more amusing, helping to lighten your heart. A little adventure could do you good.",
    "image":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Scorpio.svg/1200px-Scorpio.svg.png"
  },

  {
    "id": 2,
    "text": "You could find yourself truly blessed in the financial department today -- any hard work you've devoted your time and energy toward can finally start pulling in rewards. If you end up with mad money, you may want to splurge, but you'd also be wise to put some into savings as a safeguard against future economic uncertainty. You might also want to keep any windfalls a secret to keep opportunists from knocking at your door. If you choose to donate, an anonymous donation is probably the smartest move.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Sagittarius.svg/1200px-Sagittarius.svg.png"
  },

  {
    "id": 3,
    "text":"Although Aquarians tend to thrive when connecting with others, starting today, you might begin to find more beauty and benefit in times of solitude. Connecting with your spiritual center and practicing self-love can help you enter a new phase of contentment, one where you feel at peace with the world. You might feel like you should be more productive right now, but there will be a time and place for that. Later in the day, sharing some of your insights with a close friend could help to satisfy your craving for connection.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Capricorn.svg/1200px-Capricorn.svg.png"
  }
]



app.get("/api/horoscopes/:id", (req, res) => {
  let index = signs.findIndex((elem) => elem.id === +req.params.id)
  res.status(200).send(signs[`${index}`].text);
})

app.get('/api/horoscopes/images/:id', (req, res) => {
  let index = signs.findIndex((elem) => elem.id === +req.params.id)
  res.status(200).send(signs[`${index}`].image);
})

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];
  
  
  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];
  
  res.status(200).send(randomCompliment);
});


  app.get("/api/fortunes", (req, res) => {
    const fortunes = ["Be careful who you trust. Salt and sugar look the same.",
             "Tough love only works when there's as much love as there is tough.",
             "Joy is what happens to us when we allow ourselves to recognize how good things really are.",
             "Every new beginning comes from some other beginning's end.",
             "Little by little,one travels far."
    ];

let randomFortuneIndex = Math.floor(Math.random() * fortunes.length);
let randomFortune = fortunes[randomFortuneIndex]

  res.status(200).send(randomFortune);
  
});




app.listen(4000, () => console.log("Server running on 4000"));
