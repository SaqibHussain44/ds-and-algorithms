// Amazon Online Assessment - Find the Maximum Quality for given input stream/list over n channels.

// For given list of inputs, and channels find the maximum quality that would be achievable with input values distribution over the channels.
// Quality is mesaured as:

// *sum of medians of the distributed sub lists on each channel.*

// Rule: each channel must have atleast one element.

// Example:
// Input: 1,2,3,4,5
// Channels: 2

// So possible combinations of configurations are:
// Channel1       Channel2                median
//  1             2,3,4,5                 1 + (3+4)/2 = 1+ 3.5 = 4.5 = 5 (rounded)
//  1,2           3,4,5                   (1+2)/2 + 4 =1.5+4 = 5.5 =6
//  1,2,3         4,5                     2 + (4+5)/2 = 6.5 = 7
//  1,2,3,4       5                       (2+3)/2 + 5 =2.5 + 5 = 7.5 = 8
// So answer is maximun Qulity achivable is '8' with configuration 1,2,3,4 on channel 1 and 5 on channel 2

// Similarly for
// input: 1,2,3,4,5
// channels: 3

// possible configurations are:
// ch1              ch2                  ch3                         medians
// 1                2                    3,4,5                       1+2+4 = 7
// 1                2,3                  4,5                         1+2.5+4.5 = 8
// 1                2,3,4                5                           1+3+5 = 9
// 1,2              3                    4,5                         1.5+ 3 + 4.5 = 9
// 1,2              3,4                  5                           1.5 + 3.5 + 5 = 10
// 1,2,3            4                    5                           2 + 4 + 5 = 11
// So maximum quality attainable is 11 with configuration 1,2,3 on channel1, 4 on channel 2 and 5 on channel 3

const getMedian = (arr) => {
  if (arr.length % 2 === 0) { // even
    let medianIndex = Math.floor((arr.length / 2));
    return (arr[medianIndex - 1] + arr[medianIndex]) / 2;
  } else { // odd
    let medianIndex = Math.floor((arr.length / 2));
    return arr[medianIndex];
  }
}

const maxQuality = (input, channels) => {
  let list = input.sort();
  let size = input.length;
  let pointer = size - (channels - 1);
  let firstChannel = list.slice(0, pointer);
  let maxQuality = getMedian(firstChannel);
  while (pointer < size) {
    maxQuality = maxQuality + list[pointer];
    pointer++;
  }
  // console.log('list', list, 'of size', size, ', and total channels:', channels, '\nfirst channel', firstChannel, 'has medium', getMedian(firstChannel));
  return Math.ceil(maxQuality);
}

let maxQ = maxQuality([1,2,3,4,5], 2);
console.log('maxQ', maxQ, '\n');


let maxQ1 = maxQuality([1,5,3,4,6,2], 3);
console.log('maxQ1', maxQ1);



