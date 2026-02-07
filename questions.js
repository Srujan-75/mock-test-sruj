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
"CS_and_CG_MOSFET_Small_Signal": {

  section_assumptions: "Unless stated otherwise, assume long-channel MOSFETs operating in saturation under small-signal conditions. Ignore short-channel effects, velocity saturation, parasitic resistances, and second-order non-idealities.",

  questions: [

    {
      question: "Source degeneration in a Common Source MOSFET amplifier primarily:",
      options: [
        "Increases voltage gain",
        "Reduces output resistance",
        "Introduces negative feedback improving linearity",
        "Eliminates channel length modulation"
      ],
      correct: 2,
      explanation: "Adding a source resistor R_S introduces local negative feedback. The effective transconductance becomes gm_eff = gm / (1 + gmR_S).",
      assumptions: ["Small-signal operation", "Transistor in saturation"]
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
      explanation: "C_gd connects input and output. Due to voltage gain, it appears multiplied by (1 + |A_v|).",
      assumptions: ["Small-signal model valid"]
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
      explanation: "Intrinsic gain equals gm × r_o.",
      assumptions: ["Long-channel device", "Saturation region"]
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
      explanation: "Since gm ∝ √I_D and r_o ∝ 1/I_D, gain ∝ 1/√I_D.",
      assumptions: [
        "Long-channel square-law model",
        "Strong inversion",
        "Mobility constant",
        "Channel length modulation dominates r_o"
      ]
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
      explanation: "An increase in source voltage reduces I_D, increasing output voltage. No inversion.",
      assumptions: ["Transistor in saturation"]
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
      explanation: "R_out ≈ r_o2 + (g_m2 r_o2) r_o1. For identical devices and large gm r_o, simplifies to g_m r_o^2.",
      assumptions: [
        "Identical transistors",
        "g_m r_o >> 1",
        "Long-channel model",
        "Neglect body effect"
      ]
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
      explanation: "Common Gate has approximately unity current gain with low input impedance.",
      assumptions: ["Small-signal operation"]
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
      explanation: "Both gm and g_mb contribute to small-signal current.",
      assumptions: ["Body effect modeled as transconductance g_mb"]
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
      explanation: "f_T = g_m / [2π (C_gs + C_gd)] under short-circuit output condition.",
      assumptions: [
        "Intrinsic device only",
        "Short-circuit output",
        "Saturation region"
      ]
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
      explanation: "Since λ ∝ 1/L and r_o ∝ L, intrinsic gain increases proportional to L.",
      assumptions: [
        "Long-channel model",
        "Bias current fixed",
        "No short-channel effects"
      ]
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
      explanation: "Gate is AC grounded, preventing Miller multiplication of C_gd.",
      assumptions: ["High-frequency small-signal analysis"]
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
      explanation: "Gate draws no DC current.",
      assumptions: [
        "Ideal MOSFET",
        "No bias resistors",
        "Negligible gate leakage"
      ]
    }

  {
    "question": "In a Common Source amplifier with a resistive load R_D, what is the dominant pole frequency (approximately)?",
    "options": [
      "1 / [2π R_sig (C_gs + (1 + |A_v|)C_gd)]",
      "g_m / (2π C_gs)",
      "1 / (2π R_D C_db)",
      "1 / (2π R_sig C_gd)"
    ],
    "correct": 0,
    "explanation": "The Miller Effect multiplies C_gd, creating a large equivalent capacitance at the input node. Combined with the signal source resistance R_sig, this usually forms the lowest frequency (dominant) pole.",
    "assumptions": ["High-frequency model", "R_sig is significant"]
  },
  {
    "question": "What happens to the input-referred thermal noise voltage of a MOSFET as the transconductance (g_m) increases?",
    "options": [
      "It increases",
      "It decreases",
      "It remains constant",
      "It depends only on the load resistor"
    ],
    "correct": 1,
    "explanation": "The thermal noise power spectral density of a MOSFET is inversely proportional to g_m (V_n^2 ≈ 4kTR / g_m). Therefore, a higher g_m reduces input-referred noise.",
    "assumptions": ["Saturation region", "Thermal noise dominates"]
  },
  {
    "question": "Which of the following is a primary disadvantage of a Cascode amplifier compared to a single-stage Common Source amplifier?",
    "options": [
      "Lower voltage gain",
      "Lower output impedance",
      "Reduced output voltage swing (headroom)",
      "Increased Miller Effect"
    ],
    "correct": 2,
    "explanation": "A Cascode requires at least two stacked transistors to be in saturation. This consumes more DC voltage, reducing the maximum possible swing of the output signal.",
    "assumptions": ["Fixed supply voltage V_DD"]
  },
  {
    "question": "In a Common Gate amplifier, what is the short-circuit current gain (A_is)?",
    "options": [
      "Approximately -g_m r_o",
      "Approximately 1 (Unity)",
      "Approximately 0",
      "g_m R_D"
    ],
    "correct": 1,
    "explanation": "The current entering the source is almost entirely collected at the drain (minus negligible bulk current), making the CG an excellent current buffer with unity current gain.",
    "assumptions": ["Low frequency", "Neglect gate current"]
  },
  {
    "question": "If a MOSFET is used as a voltage-controlled resistor (triode region), how does the resistance R_on change with (V_GS - V_th)?",
    "options": [
      "Increases linearly",
      "Decreases inversely",
      "Remains constant",
      "Increases quadratically"
    ],
    "correct": 1,
    "explanation": "In the deep triode region, R_on ≈ 1 / [μ C_ox (W/L)(V_GS - V_th)]. Increasing the overdrive voltage reduces the channel resistance.",
    "assumptions": ["Deep triode region (V_DS is very small)"]
  },
  {
    "question": "In a Common Source amplifier, the addition of a bypass capacitor across the source resistor R_S serves to:",
    "options": [
      "Reduce the DC bias current",
      "Increase the high-frequency gain to -g_m R_D",
      "Decrease the input impedance",
      "Increase the output resistance at all frequencies"
    ],
    "correct": 1,
    "explanation": "At signal frequencies, the capacitor acts as a short circuit, bypassing R_S and eliminating the negative feedback (degeneration) to recover the full gain of the CS stage.",
    "assumptions": ["Capacitor is large enough to be an AC short"]
  },
  {
    "question": "The 'Transit Time' of a MOSFET is inversely proportional to which frequency parameter?",
    "options": [
      "3-dB bandwidth",
      "Unity current gain frequency (f_T)",
      "Lower cutoff frequency (f_L)",
      "Slew rate"
    ],
    "correct": 1,
    "explanation": "Transit time is the time it takes a carrier to cross the channel. It is fundamentally related to the speed of the device, which is quantified by f_T.",
    "assumptions": ["Short-channel or Long-channel velocity limits apply"]
  },
  {
    "question": "For a MOSFET in saturation, if the drain-to-source voltage (V_DS) is increased significantly, the 'Effective Channel Length' decreases. This is known as:",
    "options": [
      "Velocity Saturation",
      "Channel Length Modulation",
      "The Body Effect",
      "Drain-Induced Barrier Lowering (DIBL)"
    ],
    "correct": 1,
    "explanation": "Channel Length Modulation (CLM) is the phenomenon where the pinch-off point moves toward the source as V_DS increases, modeled by the factor (1 + λV_DS).",
    "assumptions": ["Standard MOSFET physics"]
  }
  ]
}
