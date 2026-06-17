/* =========================
   src/data/quizData.js
========================= */

export const subjects = {

  "Class 1":["Math","English","GK","EVS"],
  "Class 2":["Math","English","GK","EVS"],
  "Class 3":["Math","English","GK","EVS"],
  "Class 4":["Math","English","GK","EVS"],
  "Class 5":["Math","English","GK","EVS"],

  "Class 6":[
    "Math",
    "English",
    "Science",
    "GK",
    "EVS"
  ],

  "Class 7":[
    "Math",
    "English",
    "Science",
    "GK",
    "EVS"
  ],

  "Class 8":[
    "Math",
    "English",
    "Science",
    "GK",
    "EVS"
  ],

  "Class 9":[
    "Math",
    "English",
    "Physics",
    "Chemistry",
    "Biology",
    "GK"
  ],

  "Class 10":[
    "Math",
    "English",
    "Physics",
    "Chemistry",
    "Biology",
    "GK"
  ]

};

/* =========================
   TOPICS
========================= */

export const topics = {

  Math:[
    "Addition",
    "Subtraction",
    "Multiplication",
    "Division"
  ],

  English:[
    "Grammar",
    "Vocabulary",
    "Nouns",
    "Verbs"
  ],

  GK:[
    "Animals",
    "Countries",
    "Sports",
    "Space"
  ],

  EVS:[
    "Plants",
    "Family",
    "Transport",
    "Environment"
  ],

  Science:[
    "Plants",
    "Human Body",
    "Food",
    "Water"
  ],

  Physics:[
    "Force",
    "Motion",
    "Light",
    "Energy"
  ],

  Chemistry:[
    "Atoms",
    "Water",
    "Acids",
    "Metals"
  ],

  Biology:[
    "Cells",
    "Nutrition",
    "Plants",
    "Animals"
  ]

};

/* =========================
   LEVELS
========================= */

export const levels = [
  "Easy",
  "Moderate",
  "Hard"
];

/* =========================
   QUESTIONS
========================= */

const makeQuestions = (
  subject,
  topic,
  level
) => {

  /* =========================
     MATH
  ========================= */

  if(subject === "Math"){

    if(topic === "Addition"){

      return [

        {
          question:"5 + 3 = ?",
          options:["6","7","8","9"],
          answer:"8"
        },

        {
          question:"10 + 5 = ?",
          options:["12","13","14","15"],
          answer:"15"
        },

        {
          question:"7 + 2 = ?",
          options:["7","8","9","10"],
          answer:"9"
        },

        {
          question:"20 + 5 = ?",
          options:["20","25","30","35"],
          answer:"25"
        },

        {
          question:"1 + 9 = ?",
          options:["8","9","10","11"],
          answer:"10"
        },

        {
          question:"6 + 4 = ?",
          options:["8","9","10","11"],
          answer:"10"
        },

        {
          question:"2 + 7 = ?",
          options:["7","8","9","10"],
          answer:"9"
        },

        {
          question:"15 + 5 = ?",
          options:["18","19","20","21"],
          answer:"20"
        },

        {
          question:"11 + 1 = ?",
          options:["10","11","12","13"],
          answer:"12"
        },

        {
          question:"9 + 9 = ?",
          options:["16","17","18","19"],
          answer:"18"
        }

      ];

    }

    if(topic === "Subtraction"){

      return [

        {
          question:"10 - 5 = ?",
          options:["4","5","6","7"],
          answer:"5"
        },

        {
          question:"20 - 10 = ?",
          options:["5","10","15","20"],
          answer:"10"
        },

        {
          question:"15 - 5 = ?",
          options:["8","9","10","11"],
          answer:"10"
        },

        {
          question:"9 - 2 = ?",
          options:["5","6","7","8"],
          answer:"7"
        },

        {
          question:"12 - 1 = ?",
          options:["10","11","12","13"],
          answer:"11"
        },

        {
          question:"25 - 5 = ?",
          options:["15","20","25","30"],
          answer:"20"
        },

        {
          question:"18 - 8 = ?",
          options:["8","9","10","11"],
          answer:"10"
        },

        {
          question:"14 - 4 = ?",
          options:["8","9","10","11"],
          answer:"10"
        },

        {
          question:"7 - 3 = ?",
          options:["2","3","4","5"],
          answer:"4"
        },

        {
          question:"30 - 10 = ?",
          options:["10","20","30","40"],
          answer:"20"
        }

      ];

    }

  }

  /* =========================
     ENGLISH
  ========================= */

  if(subject === "English"){

    return [

      {
        question:"Choose noun",
        options:[
          "Boy",
          "Run",
          "Jump",
          "Fast"
        ],
        answer:"Boy"
      },

      {
        question:"Choose pronoun",
        options:[
          "He",
          "Book",
          "Chair",
          "Dog"
        ],
        answer:"He"
      },

      {
        question:"Plural of Cat?",
        options:[
          "Cats",
          "Cat",
          "Cates",
          "Caties"
        ],
        answer:"Cats"
      },

      {
        question:"Choose verb",
        options:[
          "Run",
          "Chair",
          "Apple",
          "Book"
        ],
        answer:"Run"
      },

      {
        question:"Choose adjective",
        options:[
          "Beautiful",
          "Run",
          "Jump",
          "Book"
        ],
        answer:"Beautiful"
      },

      {
        question:"Past tense of Go?",
        options:[
          "Went",
          "Goed",
          "Gone",
          "Goes"
        ],
        answer:"Went"
      },

      {
        question:"Choose article",
        options:[
          "A",
          "Run",
          "Jump",
          "Fast"
        ],
        answer:"A"
      },

      {
        question:"Choose vowel",
        options:[
          "A",
          "B",
          "C",
          "D"
        ],
        answer:"A"
      },

      {
        question:"Opposite of Hot?",
        options:[
          "Cold",
          "Tall",
          "Fast",
          "Big"
        ],
        answer:"Cold"
      },

      {
        question:"Choose sentence",
        options:[
          "I play football.",
          "Football play",
          "Play football",
          "Football"
        ],
        answer:"I play football."
      }

    ];

  }

  /* =========================
     GK
  ========================= */

  if(subject === "GK"){

    return [

      {
        question:"Capital of India?",
        options:[
          "Delhi",
          "Mumbai",
          "Chennai",
          "Kolkata"
        ],
        answer:"Delhi"
      },

      {
        question:"King of jungle?",
        options:[
          "Lion",
          "Tiger",
          "Dog",
          "Cat"
        ],
        answer:"Lion"
      },

      {
        question:"National bird of India?",
        options:[
          "Peacock",
          "Crow",
          "Parrot",
          "Eagle"
        ],
        answer:"Peacock"
      },

      {
        question:"Which country has Eiffel Tower?",
        options:[
          "France",
          "India",
          "USA",
          "Japan"
        ],
        answer:"France"
      },

      {
        question:"Largest animal?",
        options:[
          "Blue Whale",
          "Lion",
          "Tiger",
          "Dog"
        ],
        answer:"Blue Whale"
      },

      {
        question:"Fastest animal?",
        options:[
          "Cheetah",
          "Dog",
          "Cow",
          "Cat"
        ],
        answer:"Cheetah"
      },

      {
        question:"Capital of Japan?",
        options:[
          "Tokyo",
          "Delhi",
          "London",
          "Paris"
        ],
        answer:"Tokyo"
      },

      {
        question:"Which animal barks?",
        options:[
          "Dog",
          "Cat",
          "Cow",
          "Horse"
        ],
        answer:"Dog"
      },

      {
        question:"Largest country?",
        options:[
          "Russia",
          "India",
          "China",
          "USA"
        ],
        answer:"Russia"
      },

      {
        question:"Which animal lives in water?",
        options:[
          "Fish",
          "Dog",
          "Cat",
          "Tiger"
        ],
        answer:"Fish"
      }

    ];

  }

  /* =========================
     EVS
  ========================= */

  if(subject === "EVS"){

    return [

      {
        question:"Plants need?",
        options:[
          "Sunlight",
          "Plastic",
          "Stone",
          "Glass"
        ],
        answer:"Sunlight"
      },

      {
        question:"Leaf color?",
        options:[
          "Green",
          "Blue",
          "Red",
          "Black"
        ],
        answer:"Green"
      },

      {
        question:"Plants give us?",
        options:[
          "Oxygen",
          "Plastic",
          "Stone",
          "Smoke"
        ],
        answer:"Oxygen"
      },

      {
        question:"Root is under?",
        options:[
          "Soil",
          "Sky",
          "Water",
          "Air"
        ],
        answer:"Soil"
      },

      {
        question:"Tree has?",
        options:[
          "Leaves",
          "Wheels",
          "Engines",
          "Lights"
        ],
        answer:"Leaves"
      },

      {
        question:"Plants are?",
        options:[
          "Living things",
          "Machines",
          "Cars",
          "Robots"
        ],
        answer:"Living things"
      },

      {
        question:"Sunflower is a?",
        options:[
          "Plant",
          "Animal",
          "Bird",
          "Fish"
        ],
        answer:"Plant"
      },

      {
        question:"Plants grow from?",
        options:[
          "Seeds",
          "Metal",
          "Plastic",
          "Glass"
        ],
        answer:"Seeds"
      },

      {
        question:"Rose is a?",
        options:[
          "Flower",
          "Tree",
          "Animal",
          "Bird"
        ],
        answer:"Flower"
      },

      {
        question:"Plants need water to?",
        options:[
          "Grow",
          "Sleep",
          "Jump",
          "Run"
        ],
        answer:"Grow"
      }

    ];

  }

  /* =========================
     SCIENCE
  ========================= */

  if(subject === "Science"){

    return [

      {
        question:"Plants make food by?",
        options:[
          "Photosynthesis",
          "Running",
          "Sleeping",
          "Jumping"
        ],
        answer:"Photosynthesis"
      },

      {
        question:"Humans breathe through?",
        options:[
          "Lungs",
          "Legs",
          "Eyes",
          "Hands"
        ],
        answer:"Lungs"
      },

      {
        question:"Water freezes into?",
        options:[
          "Ice",
          "Smoke",
          "Gas",
          "Fire"
        ],
        answer:"Ice"
      },

      {
        question:"Sun gives us?",
        options:[
          "Heat",
          "Ice",
          "Rain",
          "Smoke"
        ],
        answer:"Heat"
      },

      {
        question:"Largest planet?",
        options:[
          "Jupiter",
          "Earth",
          "Mars",
          "Venus"
        ],
        answer:"Jupiter"
      },

      {
        question:"Plants need?",
        options:[
          "Sunlight",
          "Plastic",
          "Metal",
          "Stone"
        ],
        answer:"Sunlight"
      },

      {
        question:"Body has how many eyes?",
        options:[
          "2",
          "1",
          "3",
          "4"
        ],
        answer:"2"
      },

      {
        question:"Which is liquid?",
        options:[
          "Water",
          "Stone",
          "Glass",
          "Iron"
        ],
        answer:"Water"
      },

      {
        question:"We eat food for?",
        options:[
          "Energy",
          "Sleep",
          "Jump",
          "Cry"
        ],
        answer:"Energy"
      },

      {
        question:"Earth is a?",
        options:[
          "Planet",
          "Animal",
          "Plant",
          "Bird"
        ],
        answer:"Planet"
      }

    ];

  }

  /* =========================
     PHYSICS
  ========================= */

  if(subject === "Physics"){

    return [

      {
        question:"Unit of force?",
        options:[
          "Newton",
          "Volt",
          "Watt",
          "Ampere"
        ],
        answer:"Newton"
      },

      {
        question:"Push or pull is?",
        options:[
          "Force",
          "Energy",
          "Motion",
          "Speed"
        ],
        answer:"Force"
      },

      {
        question:"Gravity pulls objects?",
        options:[
          "Down",
          "Up",
          "Left",
          "Right"
        ],
        answer:"Down"
      },

      {
        question:"Earth has?",
        options:[
          "Gravity",
          "Light",
          "Water",
          "Sound"
        ],
        answer:"Gravity"
      },

      {
        question:"Which is force?",
        options:[
          "Push",
          "Chair",
          "Book",
          "Pen"
        ],
        answer:"Push"
      },

      {
        question:"Force changes?",
        options:[
          "Motion",
          "Taste",
          "Color",
          "Smell"
        ],
        answer:"Motion"
      },

      {
        question:"Friction is a?",
        options:[
          "Force",
          "Animal",
          "Plant",
          "Gas"
        ],
        answer:"Force"
      },

      {
        question:"Magnet uses?",
        options:[
          "Magnetic force",
          "Water",
          "Heat",
          "Light"
        ],
        answer:"Magnetic force"
      },

      {
        question:"Gravity keeps us?",
        options:[
          "On Earth",
          "Flying",
          "Invisible",
          "Underground"
        ],
        answer:"On Earth"
      },

      {
        question:"Sunlight gives?",
        options:[
          "Energy",
          "Stone",
          "Plastic",
          "Paper"
        ],
        answer:"Energy"
      }

    ];

  }

  /* =========================
     CHEMISTRY
  ========================= */

  if(subject === "Chemistry"){

    return [

      {
        question:"Water formula?",
        options:[
          "H2O",
          "CO2",
          "NaCl",
          "O2"
        ],
        answer:"H2O"
      },

      {
        question:"Smallest unit of matter?",
        options:[
          "Atom",
          "Plant",
          "Book",
          "Stone"
        ],
        answer:"Atom"
      },

      {
        question:"Gold is?",
        options:[
          "Metal",
          "Gas",
          "Plant",
          "Water"
        ],
        answer:"Metal"
      },

      {
        question:"Ice is?",
        options:[
          "Solid",
          "Gas",
          "Liquid",
          "Smoke"
        ],
        answer:"Solid"
      },

      {
        question:"Steam is?",
        options:[
          "Gas",
          "Liquid",
          "Solid",
          "Metal"
        ],
        answer:"Gas"
      },

      {
        question:"Salt dissolves in?",
        options:[
          "Water",
          "Stone",
          "Wood",
          "Paper"
        ],
        answer:"Water"
      },

      {
        question:"Oxygen is?",
        options:[
          "Gas",
          "Plant",
          "Animal",
          "Metal"
        ],
        answer:"Gas"
      },

      {
        question:"Iron is?",
        options:[
          "Metal",
          "Plant",
          "Animal",
          "Gas"
        ],
        answer:"Metal"
      },

      {
        question:"Water freezes into?",
        options:[
          "Ice",
          "Smoke",
          "Fire",
          "Gas"
        ],
        answer:"Ice"
      },

      {
        question:"Atoms form?",
        options:[
          "Matter",
          "Nothing",
          "Glass",
          "Paper"
        ],
        answer:"Matter"
      }

    ];

  }

  /* =========================
     BIOLOGY
  ========================= */

  if(subject === "Biology"){

    return [

      {
        question:"Basic unit of life?",
        options:[
          "Cell",
          "Stone",
          "Water",
          "Tree"
        ],
        answer:"Cell"
      },

      {
        question:"Humans are made of?",
        options:[
          "Cells",
          "Clouds",
          "Metal",
          "Rocks"
        ],
        answer:"Cells"
      },

      {
        question:"Heart pumps?",
        options:[
          "Blood",
          "Water",
          "Milk",
          "Air"
        ],
        answer:"Blood"
      },

      {
        question:"Plants make food by?",
        options:[
          "Photosynthesis",
          "Walking",
          "Sleeping",
          "Jumping"
        ],
        answer:"Photosynthesis"
      },

      {
        question:"Largest organ?",
        options:[
          "Skin",
          "Eye",
          "Nose",
          "Ear"
        ],
        answer:"Skin"
      },

      {
        question:"Blood color?",
        options:[
          "Red",
          "Blue",
          "Green",
          "Black"
        ],
        answer:"Red"
      },

      {
        question:"We breathe through?",
        options:[
          "Lungs",
          "Legs",
          "Hands",
          "Eyes"
        ],
        answer:"Lungs"
      },

      {
        question:"Brain is?",
        options:[
          "Organ",
          "Plant",
          "Water",
          "Stone"
        ],
        answer:"Organ"
      },

      {
        question:"Plants have?",
        options:[
          "Cells",
          "Wheels",
          "Lights",
          "Engines"
        ],
        answer:"Cells"
      },

      {
        question:"Animals are?",
        options:[
          "Living things",
          "Machines",
          "Robots",
          "Cars"
        ],
        answer:"Living things"
      }

    ];

  }

  /* =========================
     DEFAULT
  ========================= */

  return [

    {
      question:`${topic} Question 1`,
      options:[
        "Correct Answer",
        "Wrong 1",
        "Wrong 2",
        "Wrong 3"
      ],
      answer:"Correct Answer"
    },

    {
      question:`${topic} Question 2`,
      options:[
        "Correct Answer",
        "Wrong 1",
        "Wrong 2",
        "Wrong 3"
      ],
      answer:"Correct Answer"
    }

  ];

};

/* =========================
   QUIZ DATABASE
========================= */

export const quizDatabase = {};

/* =========================
   AUTO CREATE
========================= */

Object.keys(topics).forEach((subject)=>{

  quizDatabase[subject] = {};

  topics[subject].forEach((topic)=>{

    quizDatabase[subject][topic] = {

      Easy:
      makeQuestions(
        subject,
        topic,
        "Easy"
      ),

      Moderate:
      makeQuestions(
        subject,
        topic,
        "Moderate"
      ),

      Hard:
      makeQuestions(
        subject,
        topic,
        "Hard"
      )

    };

  });

});