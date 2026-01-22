const questionBank = {
 Bible: [
  {
    question: "Who is the first man according to the Bible?",
    options: [
      "Noah",
      "Abraham",
      "Adam",
      "Moses"
    ],
    correct: 2,
    explanation: "According to Genesis, Adam is the first man created by God."
  },
  {
    question: "Who built the ark to survive the great flood?",
    options: [
      "Moses",
      "Noah",
      "David",
      "Solomon"
    ],
    correct: 1,
    explanation: "God instructed Noah to build the ark to save his family and animals."
  },
  {
    question: "Which book of the Bible begins with the creation of the world?",
    options: [
      "Exodus",
      "Genesis",
      "Leviticus",
      "Psalms"
    ],
    correct: 1,
    explanation: "Genesis starts with the account of creation."
  },
  {
    question: "Who led the Israelites out of Egypt?",
    options: [
      "Joshua",
      "Aaron",
      "Moses",
      "Joseph"
    ],
    correct: 2,
    explanation: "Moses led the Israelites during the Exodus."
  },
  {
    question: "On which mountain did Moses receive the Ten Commandments?",
    options: [
      "Mount Carmel",
      "Mount Sinai",
      "Mount Zion",
      "Mount Nebo"
    ],
    correct: 1,
    explanation: "Moses received the Ten Commandments on Mount Sinai."
  },
  {
    question: "Who was swallowed by a great fish according to the Bible?",
    options: [
      "Elijah",
      "Jonah",
      "Job",
      "Daniel"
    ],
    correct: 1,
    explanation: "Jonah was swallowed by a great fish after fleeing from God’s command."
  },
  {
    question: "Who defeated Goliath?",
    options: [
      "Saul",
      "Samuel",
      "David",
      "Solomon"
    ],
    correct: 2,
    explanation: "David defeated Goliath with a sling and a stone."
  },
  {
    question: "Which king was known for his wisdom?",
    options: [
      "David",
      "Saul",
      "Solomon",
      "Hezekiah"
    ],
    correct: 2,
    explanation: "King Solomon was renowned for his wisdom."
  },
  {
    question: "Who was the first king of Israel?",
    options: [
      "David",
      "Solomon",
      "Saul",
      "Samuel"
    ],
    correct: 2,
    explanation: "Saul was anointed as the first king of Israel."
  },
  {
    question: "Which book contains the Psalms?",
    options: [
      "Proverbs",
      "Isaiah",
      "Psalms",
      "Ecclesiastes"
    ],
    correct: 2,
    explanation: "The Book of Psalms is a collection of songs and prayers."
  },
  {
    question: "Who is considered the father of many nations?",
    options: [
      "Isaac",
      "Jacob",
      "Abraham",
      "Joseph"
    ],
    correct: 2,
    explanation: "God promised Abraham that he would be the father of many nations."
  },
  {
    question: "Who interpreted dreams in Egypt?",
    options: [
      "Daniel",
      "Joseph",
      "Moses",
      "Aaron"
    ],
    correct: 1,
    explanation: "Joseph interpreted Pharaoh’s dreams in Egypt."
  },
  {
    question: "Which prophet was taken to heaven in a chariot of fire?",
    options: [
      "Elijah",
      "Elisha",
      "Isaiah",
      "Jeremiah"
    ],
    correct: 0,
    explanation: "Elijah was taken up to heaven in a chariot of fire."
  },
  {
    question: "Who wrote most of the Proverbs?",
    options: [
      "David",
      "Solomon",
      "Moses",
      "Samuel"
    ],
    correct: 1,
    explanation: "Many Proverbs are attributed to King Solomon."
  },
  {
    question: "Who was thrown into the lions’ den?",
    options: [
      "Joseph",
      "Jeremiah",
      "Daniel",
      "Ezekiel"
    ],
    correct: 2,
    explanation: "Daniel was thrown into the lions’ den for praying to God."
  },
  {
    question: "Who betrayed Jesus?",
    options: [
      "Peter",
      "John",
      "Judas Iscariot",
      "Thomas"
    ],
    correct: 2,
    explanation: "Judas Iscariot betrayed Jesus for thirty pieces of silver."
  },
  {
    question: "Where was Jesus born?",
    options: [
      "Nazareth",
      "Jerusalem",
      "Bethlehem",
      "Galilee"
    ],
    correct: 2,
    explanation: "Jesus was born in Bethlehem."
  },
  {
    question: "Who baptized Jesus?",
    options: [
      "Peter",
      "John the Baptist",
      "Paul",
      "James"
    ],
    correct: 1,
    explanation: "John the Baptist baptized Jesus in the Jordan River."
  },
  {
    question: "Which disciple denied Jesus three times?",
    options: [
      "John",
      "Peter",
      "Andrew",
      "Philip"
    ],
    correct: 1,
    explanation: "Peter denied Jesus three times before the rooster crowed."
  },
  {
    question: "Which book is the last book of the Bible?",
    options: [
      "Jude",
      "Hebrews",
      "Revelation",
      "Acts"
    ],
    correct: 2,
    explanation: "Revelation is the final book of the Bible."
  }
]
,
"CS_and_CG_MOSFET_Small_Signal": [
  {
    question: "Why is small-signal analysis used in MOSFET amplifiers?",
    options: [
      "To study switching behavior",
      "To analyze cutoff region",
      "To linearize operation around the Q-point",
      "To increase drain current"
    ],
    correct: 2,
    explanation: "Small-signal analysis linearizes the MOSFET around a fixed DC operating point to study AC behavior."
  },
  {
    question: "In the small-signal model of a MOSFET, what does the controlled current source represent?",
    options: [
      "Channel resistance",
      "Gate leakage current",
      "Transconductance effect (gₘvgs)",
      "Output resistance"
    ],
    correct: 2,
    explanation: "The dependent current source gₘvgs represents the transconductance of the MOSFET."
  },
  {
    question: "The voltage gain of a Common Source amplifier (including rₒ) is given by",
    options: [
      "+ gₘ (R_D || rₒ)",
      "- gₘ (R_D || rₒ)",
      "- R_D / gₘ",
      "+ 1 / (gₘ R_D)"
    ],
    correct: 1,
    explanation: "Common Source amplifier has gain −gₘ(R_D || rₒ), indicating phase inversion."
  },
  {
    question: "The phase shift introduced by a Common Source amplifier is",
    options: [
      "0°",
      "90°",
      "180°",
      "270°"
    ],
    correct: 2,
    explanation: "The negative sign in voltage gain of CS amplifier indicates a 180° phase shift."
  },
  {
    question: "The input resistance of a Common Source MOSFET amplifier is approximately",
    options: [
      "Zero",
      "1/gₘ",
      "R_D",
      "Infinite"
    ],
    correct: 3,
    explanation: "The MOSFET gate draws negligible current, resulting in very high input resistance."
  },
  {
    question: "In a Common Gate amplifier, the input signal is applied at the",
    options: [
      "Gate",
      "Drain",
      "Source",
      "Body"
    ],
    correct: 2,
    explanation: "In a Common Gate configuration, the source terminal acts as the input."
  },
  {
    question: "The input resistance of a Common Gate amplifier is approximately equal to",
    options: [
      "R_D",
      "rₒ",
      "gₘ",
      "1/gₘ"
    ],
    correct: 3,
    explanation: "The input resistance of a CG amplifier is low and approximately equal to 1/gₘ."
  },
  {
    question: "The voltage gain of a Common Gate amplifier is",
    options: [
      "Negative and high",
      "Positive and high",
      "Unity",
      "Zero"
    ],
    correct: 1,
    explanation: "Common Gate amplifier provides high positive voltage gain with no phase inversion."
  },
  {
    question: "Which MOSFET amplifier configuration suffers from Miller effect?",
    options: [
      "Common Gate",
      "Common Drain",
      "Common Source",
      "Differential amplifier"
    ],
    correct: 2,
    explanation: "Miller effect is significant in Common Source amplifiers due to gate-drain capacitance."
  },
  {
    question: "Which MOSFET amplifier is most suitable for high-frequency applications?",
    options: [
      "Common Source",
      "Common Gate",
      "Common Drain",
      "Emitter follower"
    ],
    correct: 1,
    explanation: "Common Gate amplifier has no Miller effect, making it suitable for high-frequency operation."
  }
]

};
