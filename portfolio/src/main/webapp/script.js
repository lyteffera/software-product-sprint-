// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
/**
 * Adds a podcast suggestion to the page. I repurposed the code 
 previously written that added a random greeting to the webpage when 
 clicked. 
 */
function selectPodcastReccomendations() {
  const podcastReccomendations = ['Modern Love', 'tech-ish', 'Welcome To Night Vale', 'Radiolab', 'The Nod',
  'Still Processing', 'Ologies with Alie Ward', 'Hello From the Magic Tavern', 'Critical Role'];
  // Pick a podcast.
  const selectedPodcast = podcastReccomendations[Math.floor(Math.random() * podcastReccomendations.length)];
  // Add it to the page.
  const reccomendationsContainer = document.getElementById('recs-container');
  reccomendationsContainer.innerText=selectedPodcast;
}
/**
 * Fetches the JSON string of quotes from the server and adds it to the DOM. 
 */
 function getQuoteMessage() {
  const quotePromise = fetch('/data');
  quotePromise.then(handleQuote);
}
/**
 * Converts the quote in getQuoteMessage() to text, which is handled
 * by addQuoteToDOM(). 
 */
function handleQuote(quote) {
  const textPromise = quote.text();
  textPromise.then(addQuoteToDOM); 
}
/**
 * Adds the quote to the DOM, by parsing the JSON string, creating a bullet list of 
 * quotes and appending it to the DOM. 
 */
function addQuoteToDOM(quote) {
    const ulElement = $('<ul></ul>');
    quote = JSON.parse(quote); 
    //Gets the 3 quotes from the Javascript object
    const message1 = createListElement(quote['firstMessage']);
    const message2 = createListElement(quote['secondMessage']);
    const message3 = createListElement(quote['thirdMessage']);
    //Appends the three li elements to the ul element
    $(ulElement).append(message1).append(message2).append(message3); 
    //appends the ul element to the portfolio webpage
    $('#quotes-container').append(ulElement);
}
/**
 * Creates a li element with the text provided in the paramaters. 
 */
function createListElement(text) {
  const liElement = $('<li></li>');
  $(liElement).text(text);
  return liElement;
}
//Ensures that the quotes are added to the webpage. 
getQuoteMessage(); 