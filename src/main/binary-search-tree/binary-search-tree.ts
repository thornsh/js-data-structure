interface BinarySearchTreeNodeInter {
  key: number;
  left: BinarySearchTreeNodeInter | null;
  right: BinarySearchTreeNodeInter | null;
}

interface BinarySearchTreeInter {
  root: BinarySearchTreeNodeInter | null;
}

class BinarySearchTreeNode implements BinarySearchTreeNodeInter {
  key: number;
  left: BinarySearchTreeNodeInter | null;
  right: BinarySearchTreeNodeInter | null;
  constructor(key: number) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree implements BinarySearchTreeInter {
  root: BinarySearchTreeNodeInter | null;
  constructor() {
    this.root = null;
  }
  insert(key) {
    let newNode = new BinarySearchTreeNode(key);

    if (this.root === null) {
      this.root = newNode;
    } else {
      insertNode(this.root, newNode);
    }
  }
  inOrderTraverse(callback) {
    // 中序遍历
    inOrderTraverseNode(this.root, callback);
  }
  preOrderTraverse(callback) {
    // 先序遍历
    preOrderTraverseNode(this.root, callback);
  }
  postOrderTraverse(callback) {
    postOrderTraverseNode(this.root, callback);
  }
  min() {
    return minNode(this.root);
  }
  remove(key) {
    this.root = removeNode(this.root, key); //{1}
  }
}

function insertNode(
  node: BinarySearchTreeNodeInter,
  newNode: BinarySearchTreeNode
) {
  // 小于则插入左边，大于则插入右边
  if (newNode.key < node.key) {
    if (node.left === null) {
      node.left = newNode;
    } else {
      insertNode(node.left, newNode);
    }
  } else {
    if (node.right === null) {
      node.right = newNode;
    } else {
      insertNode(node.right, newNode);
    }
  }
}
function inOrderTraverseNode(
  node: BinarySearchTreeNodeInter,
  callback: Function
) {
  if (node !== null) {
    inOrderTraverseNode(node.left, callback);
    callback(node.key);
    inOrderTraverseNode(node.right, callback);
  }
}

function preOrderTraverseNode(
  node: BinarySearchTreeNodeInter,
  callback: Function
) {
  if (node !== null) {
    callback(node.key);
    inOrderTraverseNode(node.left, callback);
    inOrderTraverseNode(node.right, callback);
  }
}

function postOrderTraverseNode(
  node: BinarySearchTreeNodeInter,
  callback: Function
) {
  if (node !== null) {
    inOrderTraverseNode(node.left, callback);
    inOrderTraverseNode(node.right, callback);
    callback(node.key);
  }
}
function minNode(node: BinarySearchTreeNodeInter) {
  if (node) {
    while (node && node.left !== null) {
      node = node.left;
    }
    return node.key;
  }
  return null;
}

function findMinNode(node: BinarySearchTreeNodeInter) {
  if (node) {
    while (node && node.left !== null) {
      node = node.left;
    }
    return node;
  }
  return null;
}

function removeNode(node: any, key: any): BinarySearchTreeNodeInter {
  if (node === null) {
    return null;
  }
  if (key < node.key) {
    node.left = removeNode(node.left, key);
    return node;
  } else if (key > node.key) {
    node.right = removeNode(node.right, key);
    return node;
  } else {
    if (node.left === null && node.right === null) {
      node = null;
      return node;
    }
    if (node.left === null) {
      node = node.right;
      return node;
    } else if (node.right === null) {
      node = node.left;
      return node;
    }
    var aux = findMinNode(node.right);
    node.key = aux.key;
    node.right = removeNode(node.right, aux.key);
    return node;
  }
}

var tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);

tree.remove(18);
tree.inOrderTraverse(function (value) {
  console.log(value);
});
