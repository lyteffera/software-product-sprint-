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

function addPodcastRecs() {
  const podcast_recs =
      ['Modern Love', 'tech-ish', 'Welcome To Night Vale', 'Radiolab', 'The Nod',
      'Still Processing','Ologies with Alie Ward', 'Hello From the Magic Tavern','Critical Role'];

  // Pick a podcast.
  const pods = podcast_recs[Math.floor(Math.random() * podcast_recs.length)];

  // Add it to the page.
  const recsContainer = document.getElementById('recs-container');
  recsContainer.innerText = pods;
}


