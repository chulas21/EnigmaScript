//This is a simple JS project that emules the famouse Enigma Machine made by the Germans during WW2
//It counts with 4 main stages:
//  - Input: A keyboard where the user type the message
//  - WirePad: A set of wires that scramble the pressed letter in 1TO1 mode.
//  - Rotor: An spindle with a set of 3 gear-shaped spinners that change the letter one time each time it passes through
//      At the end of the 3th spinner there is a reflector that scramble the letter one more time & return it
//      to the 3th spinner to make the process on the opposite way.
//  - Output: A set of 26 lights that turns on with on the spot of the letter returned from the rotor
//
//The main structure of this porject will be:
//  1 -> The WirePad: This will be a function than will receive the "Wires" that will be a 2LettersPair as configuration. Then will receive a letter/string
//          and will check if the given letter has a wire configured. At least will return the scrambled letter/string.
//  2 -> The Rotter: This part is gonna be made of 3 out of 5 choices of functions (spinners), each one with its specific configurations to scramble the letter and
//          then return it. This spinner will also have an "slot" that will make the next spinner turn one position.
//          At least there will be a reflector that will have a set configuration to scramble the letter one more time and return it to the 3th spinner to make the inverted way
//  3 -> The Enigma Machine: The main function, this will configure the entire "machine". It will receive the wire setting, the order of the selected spinners and
//          their start point. When the Engima Machine receives a letter/string will make the entire way through the sub-systems and return the scrambled results.

import { wirePairs, Alphabet } from './wirePairs.js';
import { Spinners } from './Spinners.js';

const EnigmaScript = (
  message,
  spinnersConfig,
  spinnersOffsets,
  s2Rotation = 26,
  s3Rotation = 26
) => {

  //Null config handler
  if(spinnersConfig === null || spinnersConfig === undefined) {spinnersConfig = [1,2,3]}
  if(spinnersOffsets === null || spinnersOffsets === undefined) {spinnersOffsets = [0,0,0]}

  //Spinners definition based on config
  let Spinner_1 = Spinners(spinnersConfig[0]);
  let Spinner_2 = Spinners(spinnersConfig[1]);
  let Spinner_3 = Spinners(spinnersConfig[2]);
  //Offsets definition based on config
  let s1Counter = spinnersOffsets[0];
  let s2Counter = spinnersOffsets[1];
  let s3Counter = spinnersOffsets[2];

  //First WirePad Scramble
  let messageArr = message.toLowerCase().split("").map((l) => {
    if (l === ' ') {
      return ' '
    }
    else return wirePairs[l]
  });
  //Rotor Scramble
  let SpinnedMessage = messageArr.map((l) => {
    let res
    if (l === " ") {
      res = " ";
    } else {
      let noSpinned = (l + s1Counter) % 26;
      let spinnedOnce = (Spinner_1[noSpinned] + s2Counter) & 26;
      let spinnedTwice = (Spinner_2[spinnedOnce] + s3Counter) % 26;

      res = Spinner_3[spinnedTwice] & 26;

      //For each letter increment the offset of the spiners
      if (s2Counter === s3Rotation - 1) {
        s1Counter = (s1Counter + 1) % 26;
        if (s1Counter === s2Rotation - 1) {
          s2Counter = (s2Counter + 1) % 26;
        }
        if (s2Counter === s3Rotation - 1) {
          s3Counter = (s3Counter + 1) % 26;
        }
      } else {
        s1Counter = (s1Counter + 1) % 26;
        if (s1Counter === s2Rotation - 1) {
          s2Counter = (s2Counter + 1) % 26;
        }
      }
    }

    return res;
  });

  return SpinnedMessage.map(l => {
    if (l === ' '){
      return ' '
    }
    else {
      return Alphabet[l]
    }
  }).join('');
};

console.log(EnigmaScript(process.argv[2],[3,1,2],[25,25,0],15,20))
