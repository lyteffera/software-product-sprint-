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
 * Fetches the JSON string of comments from the server and adds it to the DOM. 
 */
 function getCommentMessage() {
  const commentPromise = fetch('/data');
  commentPromise.then(handleComment);
}
/**
 * Converts the comment in getCommentMessage() to text, which is handled
 * by addCommentToDOM(). 
 */
function handleComment(comment) {
  const textPromise = comment.text();
  textPromise.then(addCommentToDOM); 
}
/**
 * Adds the comment to the DOM, by parsing the JSON string, creating a bullet list of 
 * comments and appending it to the DOM. 
 */
function addCommentToDOM(comment) {
    const ulElement = $('<ul></ul>'); 
    const headerElement = $('<h3></h3>').text('Comments section:'); 
    comment = JSON.parse(comment);
    //Gets the 3 comments from the Javascript object
    const message1 = createListElement(comment[0]);
    //Appends the li element to the ul element
    console.log(comment);
    console.log(comment[0]);
    $(ulElement).append(message1);
    console.log(ulElement); 
    //appends the ul element to the portfolio webpage
    $('#view-comments').append(headerElement);
    $('#view-comments').append(ulElement);
    
}
/**
 * Creates a li element with the text provided in the paramaters. 
 */
function createListElement(text) {
  const liElement = $('<li></li>');
  $(liElement).text(text);
  return liElement;
}