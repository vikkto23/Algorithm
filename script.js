function analyzeSentence(sentence) {
    let sentenceLength = 0;
    let wordCount = 0;
    let vowelCount = 0;
    
    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];
        
        sentenceLength++;
        
        if (char.match(/[a-zA-Z]/)) {
           
            wordCount++;
            
            const charLower = char.toLowerCase();
            
            if (charLower.match(/[aeiou]/)) {
                vowelCount++;
            }
        }
    }
    
    return { sentenceLength, wordCount, vowelCount };
}

// Example usage:
const sentence = prompt("Enter a sentence ending with a point: ");
if (sentence.charAt(sentence.length - 1) !== '.') {
    console.log("Error: The sentence must end with a point.");
} else {
    const { sentenceLength, wordCount, vowelCount } = analyzeSentence(sentence);
    console.log("Length of the sentence:", sentenceLength);
    console.log("Number of words in the sentence:", wordCount);
    console.log("Number of vowels in the sentence:", vowelCount);
}
