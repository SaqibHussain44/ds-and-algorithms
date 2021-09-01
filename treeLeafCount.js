
let tree = [ 2,
  [5, 
     false,
     [7,
     false,
     false
     ]
  ],
  [9, 
    false,
    false
  ]
];

//            2
//          /   \
//         5      8
//        / \    / \
//       6   7  9   12
//          /       \
//         1         0
// Leaf count is 2 for this tree

let tree1 = [ 2,
  [ 5,
    [ 6, false, false ],
    [ 7,
      [ 1, false, false ],
      false
    ],
    false
  ],
  [ 8,
    [ 9, false, false ],
    [ 12,
      [ 0, false, false ],
      false
    ]
  ]
];

let leafNodes = [];
let treeDepth = 0;

let leafCount = (arr, branch) => {
	if (!arr || (arr.length && arr.length === 0)) {
		return;
	}
	if (arr[1] === false && arr[2] === false) {
		leafNodes.push(branch);
		if (treeDepth < branch) {
			treeDepth = branch;
		}
		return;
	} else {
		branch = branch + 1;
		leafCount(arr[1], branch);
		leafCount(arr[2], branch);
	}
}

const run = () => {
  leafCount(tree1, 1);
  console.log('leafNodes:', leafNodes, 'treeDepth:', treeDepth)
  totalLeaves = 0;
  leafNodes.forEach(x => {
    if (x === treeDepth) {
      totalLeaves ++;
    }
  });
  console.log('totalLeaves', totalLeaves);
}

run();
