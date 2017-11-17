/*
Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at

    http://aws.amazon.com/apache2.0/

or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/


var callButton = document.getElementById('call')
var foldButton = document.getElementById('fold')
var resetButton = document.getElementById('reset')

var callButtonPresses = 0
var foldButtonPresses = 0

callButton.onclick = function addOneToCall(){
  callButtonPresses += 1
  document.getElementById('callCount').innerHTML = callButtonPresses
}

foldButton.onclick = function addOneToFold(){
  foldButtonPresses += 1
  document.getElementById('foldCount').innerHTML = foldButtonPresses
}

resetButton.onclick = function resetCounter(){
  document.getElementById('callCount').innerHTML = 0
  document.getElementById('foldCount').innerHTML = 0
  foldButtonPresses = 0
  callButtonPresses = 0
}











