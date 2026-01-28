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
    question: "Source degeneration in a Common Source MOSFET amplifier primarily:",
    options: [
      "Increases voltage gain",
      "Reduces output resistance",
      "Introduces negative feedback improving linearity",
      "Eliminates channel length modulation"
    ],
    correct: 2,
    explanation: "Adding a source resistor R_S introduces local negative feedback. The effective transconductance becomes gm_eff = gm / (1 + gmR_S). For large gmR_S, gm_eff ≈ 1/R_S, making the amplifier more linear and stable, increasing bandwidth but reducing gain."
  },

  {
    question: "Which parasitic capacitor is primarily responsible for the Miller Effect in a Common Source amplifier?",
    options: [
      "C_gs",
      "C_gd",
      "C_db",
      "C_sb"
    ],
    correct: 1,
    explanation: "C_gd connects the input (gate) and output (drain). Because the drain voltage is amplified and inverted, the effective capacitance seen at the input becomes C_gd(1 + |A_v|), known as Miller multiplication, which severely limits bandwidth."
  },
  {
    question: "The intrinsic gain of a MOSFET operating in saturation is given by:",
    options: [
      "g_m / r_o",
      "g_m × r_o",
      "1 / (g_m r_o)",
      "r_o / g_m"
    ],
    correct: 1,
    explanation: "Intrinsic gain is the maximum gain a single MOSFET can provide with an ideal load. It equals gm × r_o, the product of transconductance and output resistance, both device parameters."
  },
  {
    question: "How does the voltage gain of a Common Source amplifier with an Active Load behave with respect to the bias current I_D?",
    options: [
      "Proportional to I_D",
      "Proportional to √I_D",
      "Proportional to 1/√I_D",
      "Independent of I_D"
    ],
    correct: 2,
    explanation: "Voltage gain A_v ≈ gm r_o. Since gm ∝ √I_D and r_o ∝ 1/I_D, the product gm r_o ∝ 1/√I_D. Thus gain decreases as bias current increases."
  },
  {
    question: "What is the phase shift between the input and output voltage of a Common Gate amplifier?",
    options: [
      "0 degrees (In-phase)",
      "90 degrees",
      "180 degrees (Out-of-phase)",
      "45 degrees"
    ],
    correct: 0,
    explanation: "In a CG amplifier, the input is at the source and output at the drain. An increase in source voltage reduces V_GS, reducing I_D, which reduces voltage drop across R_D and raises the drain voltage. Thus output rises when input rises — no phase inversion."
  },
  {
    question: "The approximate output impedance of a Cascode amplifier (CS stage + CG stage) is:",
    options: [
      "r_o",
      "g_m r_o^2",
      "1/g_m",
      "R_D"
    ],
    correct: 1,
    explanation: "The Common Gate transistor increases the output resistance of the Common Source transistor by roughly a factor of gm r_o. Therefore R_out ≈ (gm r_o) × r_o = gm r_o^2."
  },
  {
    question: "Which amplifier configuration is ideally suited for use as a Current Buffer?",
    options: [
      "Common Source",
      "Source Follower",
      "Common Gate",
      "Cascode"
    ],
    correct: 2,
    explanation: "The Common Gate amplifier has low input impedance, high output impedance, and approximately unity current gain, making it ideal for transferring current from a low-impedance source to a high-impedance load."
  },
  {
    question: "If the Body Effect (g_mb) is considered in a Common Gate amplifier, the input impedance becomes approximately:",
    options: [
      "1 / g_m",
      "1 / (g_m + g_mb)",
      "r_o",
      "g_m × r_o"
    ],
    correct: 1,
    explanation: "Body effect introduces an additional transconductance g_mb in parallel with gm. Both contribute to small-signal current, so Z_in ≈ 1 / (gm + gmb)."
  },
  {
    question: "What is the Unity Current Gain Frequency (f_T) of a MOSFET?",
    options: [
      "1 / (2π r_o C_db)",
      "g_m / (2π C_db)",
      "g_m / [2π (C_gs + C_gd)]",
      "1 / (2π R_D C_gd)"
    ],
    correct: 2,
    explanation: "f_T is the frequency where the short-circuit current gain becomes unity. It is determined by how fast gate capacitances can be charged: f_T = gm / [2π (Cgs + Cgd)]."
  },
  {
    question: "In a Common Source amplifier, if the channel length L is doubled while keeping W/L constant, the intrinsic gain:",
    options: [
      "Remains constant",
      "Doubles",
      "Halves",
      "Becomes zero"
    ],
    correct: 1,
    explanation: "Intrinsic gain = gm r_o. With constant W/L and bias current, gm stays roughly constant. Channel length modulation parameter λ decreases as L increases, so r_o = 1/(λI_D) increases roughly proportional to L. Thus intrinsic gain increases approximately in proportion to L."
  },
  {
    question: "Why is the Common Gate amplifier preferred in high-frequency RF applications?",
    options: [
      "It has infinite input impedance",
      "It suppresses the Miller Effect",
      "It has the highest voltage gain",
      "It has zero output impedance"
    ],
    correct: 1,
    explanation: "In CG configuration, the gate is AC-grounded. This shields the input (source) from drain voltage variations, preventing Cgd from creating Miller multiplication, improving high-frequency performance."
  },
  {
    question: "The low-frequency input impedance of a Common Source amplifier is ideally:",
    options: [
      "Zero",
      "1/g_m",
      "Infinity",
      "r_o"
    ],
    correct: 2,
    explanation: "The MOSFET gate is insulated by an oxide layer, so no DC current flows into the gate. Therefore, the ideal low-frequency input impedance is infinite."
  },
  {
    question: "For a Common Source amplifier with Source Degeneration R_S, the voltage gain A_v is approximately:",
    options: [
      "-g_m R_D",
      "-R_D / R_S (for g_m R_S >> 1)",
      "R_D / R_S",
      "1 / (g_m R_S)"
    ],
    correct: 1,
    explanation: "The gain is A_v = -g_m R_D / (1 + g_m R_S). When g_m R_S >> 1, this simplifies to A_v ≈ -R_D / R_S. The gain becomes set mainly by resistor ratio, improving stability and linearity."
  },
  {
    question: "Which parameter causes the finite output resistance (r_o) in a MOSFET?",
    options: [
      "Body effect",
      "Channel Length Modulation",
      "Mobility degradation",
      "Subthreshold conduction"
    ],
    correct: 1,
    explanation: "Channel Length Modulation occurs when V_DS increases, shortening the effective channel length and slightly increasing drain current. This gives the transistor a finite slope in the I_D–V_DS curve, modeled as output resistance r_o."
  }


]

};
