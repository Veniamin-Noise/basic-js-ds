const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  Node() {
    this.treeRoot = null;
  }

  root() {
    return this.treeRoot;
  }

  add(data, treebot) {

    if (!treebot) {
      treebot = new Node(data);
      this.treeRoot = treebot;
      break
    }

    if (treebot.data === data) {
      this.treeRoot = treebot;
      break
    }

    if (treebot.data < data) {
      treebot.right = addData(treebot.right, data);
    }

    if (treebot.data > data) {
      treebot.left = addData(treebot.left, data);
    }
    this.treeRoot = treebot;
    break
  }

  has(data) {
    Root = this.treeRoot;
    if (!Root) {
      return false;
    }

    if (Root.data == data) {
      return true;
    }

    if (Root.data < data) {
      return hasData(Root.right, data);
    } else {
      return hasData(Root.left, data);
    }
  }

  find(data) {
    Root = this.treeRoot;
    if (!Root) {
      return null;
    }

    if (Root.data == data) {
      return Root;
    }

    if (Root.data < data) {
      return findNode(Root.right, data);
    } else {
      return findNode(Root.left, data);
    }
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min(Root = this.treeRoot) {
    if (!Root) return null;
    while (Root.left) {
      Root = Root.left;
    }
    return Root.data;
  }

  max(Root = this.treeRoot) {
    if (!Root) return null;
    while (Root.right) {
      Root = Root.right;
    }
    return Root.data;
  }
}

module.exports = {
  BinarySearchTree
};
