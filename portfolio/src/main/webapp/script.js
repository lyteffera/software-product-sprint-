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
var num = 0; 
/**
 * Changes the image of the dog on the page. 
 */
function changeImage(){
  //var num = Math.floor(Math.random() * 4);
  num++;
  if (num >= 4){
    num = 0;
  }
  const dog = 'images/dog' + num + '.jpg';
  $('#dog_pic').attr('src', dog); 
  console.log(num);
  console.log(dog);
}
$('#get_dog').click(changeImage);



