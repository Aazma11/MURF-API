export interface ASLGesture {
  name: string
  description: string
  instructions: string
  category: string
}

export const aslGestures: { [key: string]: ASLGesture } = {
  "hello": {
    name: "Hello",
    description: "Raise right hand to forehead, then bring down in a salute motion",
    instructions: "Move your right hand to your forehead, then bring it down in a friendly salute motion",
    category: "greetings"
  },
  "hi": {
    name: "Hi",
    description: "Same as hello - raise right hand to forehead, then bring down",
    instructions: "Just like 'hello' - raise your right hand to your forehead, then bring it down",
    category: "greetings"
  },
  "thank_you": {
    name: "Thank You",
    description: "Touch chin with fingertips, then move hand forward",
    instructions: "Touch your chin with your fingertips, then move your hand forward like blowing a kiss",
    category: "manners"
  },
  "thanks": {
    name: "Thanks",
    description: "Same as thank you - touch chin with fingertips, then move hand forward",
    instructions: "Same as 'thank you' - touch your chin with your fingertips, then move your hand forward",
    category: "manners"
  },
  "yes": {
    name: "Yes",
    description: "Make a fist and nod it up and down like agreeing",
    instructions: "Make a fist and nod it up and down like you're enthusiastically agreeing",
    category: "responses"
  },
  "no": {
    name: "No",
    description: "Extend index and middle fingers, then shake hand side to side",
    instructions: "Extend your index and middle fingers, then shake your hand from side to side",
    category: "responses"
  },
  "please": {
    name: "Please",
    description: "Place flat hand on chest and move in circular motion",
    instructions: "Place your flat hand on your chest and move it in a small circular motion",
    category: "manners"
  },
  "sorry": {
    name: "Sorry",
    description: "Make a fist and rub it in circular motion on chest",
    instructions: "Make a fist and rub it in a circular motion on your chest",
    category: "manners"
  },
  "help": {
    name: "Help",
    description: "Place one hand on top of the other and lift both up",
    instructions: "Place one hand on top of the other and lift both hands up together",
    category: "actions"
  },
  "love": {
    name: "Love",
    description: "Cross arms over chest in a hugging motion",
    instructions: "Cross your arms over your chest in a hugging motion",
    category: "emotions"
  },
  "nice": {
    name: "Nice",
    description: "Place flat hand on chest and move in smooth motion",
    instructions: "Place your flat hand on your chest and move it in a smooth, pleasant motion",
    category: "descriptions"
  },
  "meet": {
    name: "Meet",
    description: "Bring both index fingers together in front of chest",
    instructions: "Bring both your index fingers together in front of your chest like two people meeting",
    category: "actions"
  },
  "you": {
    name: "You",
    description: "Point index finger forward",
    instructions: "Point your index finger forward toward the person you're talking to",
    category: "pronouns"
  },
  "my": {
    name: "My",
    description: "Place hand on chest",
    instructions: "Place your hand on your chest to indicate possession",
    category: "pronouns"
  },
  "name": {
    name: "Name",
    description: "Hold index and middle fingers together, tap them on other hand",
    instructions: "Hold your index and middle fingers together, then tap them on your other hand",
    category: "common"
  },
  "how": {
    name: "How",
    description: "Hold hands up and move them in opposite directions",
    instructions: "Hold your hands up and move them in opposite directions",
    category: "questions"
  },
  "are": {
    name: "Are",
    description: "Make 'R' hand and move in small circle",
    instructions: "Make an 'R' shape with your hand and move it in a small circle",
    category: "common"
  },
  "fine": {
    name: "Fine",
    description: "Touch chest with fingertips, then move hand up",
    instructions: "Touch your chest with your fingertips, then move your hand up",
    category: "descriptions"
  },
  "good": {
    name: "Good",
    description: "Touch chin with fingertips, then move hand down",
    instructions: "Touch your chin with your fingertips, then move your hand down",
    category: "descriptions"
  },
  "what": {
    name: "What",
    description: "Hold hands up with palms up and shrug",
    instructions: "Hold your hands up with palms up and shrug your shoulders",
    category: "questions"
  },
  "is": {
    name: "Is",
    description: "Make 'I' hand and move in small circle",
    instructions: "Make an 'I' shape with your hand and move it in a small circle",
    category: "common"
  },
  "your": {
    name: "Your",
    description: "Point index finger forward",
    instructions: "Point your index finger forward toward the person you're talking to",
    category: "pronouns"
  },
  "how are you": {
    name: "How Are You",
    description: "Combination of signs: how + are + you",
    instructions: "First sign 'how' (hold hands up and move them in opposite directions), then 'are' (make 'R' hand and move in small circle), then 'you' (point index finger forward)",
    category: "phrases"
  },
  "nice to meet you": {
    name: "Nice to Meet You",
    description: "Combination of signs: nice + meet + you",
    instructions: "First sign 'nice' (place flat hand on chest and move in smooth motion), then 'meet' (bring both index fingers together in front of chest), then 'you' (point index finger forward)",
    category: "phrases"
  },
  "what is your name": {
    name: "What Is Your Name",
    description: "Combination of signs: what + is + your + name",
    instructions: "Sign 'what' (hold hands up with palms up and shrug), then 'is' (make 'I' hand and move in small circle), then 'your' (point index finger forward), then 'name' (hold index and middle fingers together, tap them on other hand)",
    category: "phrases"
  },
  "my name is": {
    name: "My Name Is",
    description: "Combination of signs: my + name + is",
    instructions: "Sign 'my' (place hand on chest), then 'name' (hold index and middle fingers together, tap them on other hand), then 'is' (make 'I' hand and move in small circle)",
    category: "phrases"
  },
  "i love you": {
    name: "I Love You",
    description: "Combination of signs: I + love + you",
    instructions: "Sign 'I' (point to yourself), then 'love' (cross arms over chest in hugging motion), then 'you' (point index finger forward)",
    category: "phrases"
  },
  "good morning": {
    name: "Good Morning",
    description: "Combination of signs: good + morning",
    instructions: "Sign 'good' (touch chin with fingertips, then move hand down), then 'morning' (hold hand up and move it down like the sun rising)",
    category: "phrases"
  },
  "good night": {
    name: "Good Night",
    description: "Combination of signs: good + night",
    instructions: "Sign 'good' (touch chin with fingertips, then move hand down), then 'night' (hold hand up and move it down like the sun setting)",
    category: "phrases"
  },
  "see you later": {
    name: "See You Later",
    description: "Combination of signs: see + you + later",
    instructions: "Sign 'see' (point to eye, then point forward), then 'you' (point index finger forward), then 'later' (hold hand up and move it back over shoulder)",
    category: "phrases"
  },
  "i am fine": {
    name: "I Am Fine",
    description: "Combination of signs: I + am + fine",
    instructions: "Sign 'I' (point to yourself), then 'am' (make 'A' hand and move in small circle), then 'fine' (touch chest with fingertips, then move hand up)",
    category: "phrases"
  },
  "i am good": {
    name: "I Am Good",
    description: "Combination of signs: I + am + good",
    instructions: "Sign 'I' (point to yourself), then 'am' (make 'A' hand and move in small circle), then 'good' (touch chin with fingertips, then move hand down)",
    category: "phrases"
  }
}

export const getGesture = (word: string): ASLGesture | null => {
  const cleanWord = word.toLowerCase().trim()
  return aslGestures[cleanWord] || null
}
