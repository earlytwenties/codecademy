let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(' '); //puts into array with spaces

console.log(storyWords.length);

let overusedWords = ['really', 'very', 'basically']; // defines overused words

let unnecessaryWords = ['extremely', 'literally', 'actually' ]; // defines words to be removed later

let betterWords = storyWords.filter(word => {
  return !unnecessaryWords.includes(word)
}); // filters out unnecessary words


let reallyCount = 0;
let veryCount = 0;
let basicallyCount = 0;

for (word of storyWords) {
  if (word === 'really') {
    reallyCount +=1;
  }
  else if (word === 'very') {
   veryCount +=1;
  }
  else if (word === 'basically') {
    basicallyCount +=1;
  }
  
} // counts the number of times these words are used

let sentenceCounter = 0;
storyWords.forEach (word => {
  if (word.endsWith('.') || word.endsWith  ('!') || word.endsWith ('?')) sentenceCounter +=1;
})// counts number of sentences

console.log('Number of words: '+storyWords.length,'\n', 'Number of sentences: ' , sentenceCounter, 'Careful, you\'ve used Very this many times: ' + veryCount, '\n', 'Careful, you\'ve used Basically this many times: ', basicallyCount, '\n', 'Careful, you\'ve used Really this many times: ' + reallyCount);

console.log(betterWords.join(' ')); //logs number of words, sentences and overused words that are pre-defined














