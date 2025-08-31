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
  }
}

export const getGesture = (word: string): ASLGesture | null => {
  const cleanWord = word.toLowerCase().trim()
  return aslGestures[cleanWord] || null
}
