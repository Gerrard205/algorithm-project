function analyzeSentence(sentence) {
  let sentenceLength = 0;
  let wordCount = 0;
  let vowelCount = 0;
  let isPreviousSpace = false;

  for (const char of sentence) {
    sentenceLength++;

    if (char === ' ' && !isPreviousSpace) {
      wordCount++;
    }

    isPreviousSpace = char === ' ';

    if (/[aeiouAEIOU]/.test(char)) {
      vowelCount++;
    }
  }

  return {
    sentenceLength,
    wordCount,
    vowelCount,
  };
}

const sentence = "This is a sample sentence.";
const results = analyzeSentence(sentence);

console.log("Sentence Length:", results.sentenceLength); 
console.log("Word Count:", results.wordCount);        
console.log("Vowel Count:", results.vowelCount);


function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;

    // Shift elements of the sorted portion (arr[0] to arr[j]) that are greater than the current element
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Insert the current element at its correct position
    arr[j + 1] = current;
  }

  return arr;
}

// Example usage
const numbers = [5, 2, 4, 6, 1, 3];
const sortedNumbers = insertionSort(numbers);
console.log(sortedNumbers); // Output: [1, 2, 3, 4, 5, 6]


function analyzeSentence(sentence) {
  const vowelsList = 'aeiouAEIOU';
  let length = 0;
  let vowels = 0;
  let words = 0;

  
  const trimmedSentence = sentence.trim();

  
  let inWord = false;

  for (let i = 0; i < trimmedSentence.length; i++) {
      let char = trimmedSentence[i];

      
      if (char === '.' && i === trimmedSentence.length - 1) {
          break;
      }

     
      if (char !== ' ') {
          length++;
      }
      if (vowelsList.includes(char)) {
          vowels++;
      }

      if (char === ' ') {
          inWord = false;
      } else if (!inWord) {
          words++;
          inWord = true;
      }
  }


  if (trimmedSentence.length > 0 && trimmedSentence[trimmedSentence.length - 1] !== '.') {
      if (inWord) {
          words++;
      }
  }

  console.log("Length of the sentence:", length);
  console.log("Number of words in the sentence:", words);
  console.log("Number of vowels in the sentence:", vowels);
} 

analyzeSentence("This is an example sentence.")




