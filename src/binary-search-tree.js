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
    }
    else if (treebot.data === data) {
      this.treeRoot = treebot;
    }
    else if (treebot.data < data) {
      treebot.right = addData(treebot.right, data);
    }
    else if (treebot.data > data) {
      treebot.left = addData(treebot.left, data);
    }
    this.treeRoot = treebot;
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

  remove(data) {
    Root = this.treeRoot
    if (!Root) {
      this.treeRoot = null;
    }

    if (Root.data < data) {
      Root.right = removeNode(Root.right, data);
      this.treeRoot = node;
    } else if (Root.data > data) {
      Root.left = removeNode(Root.left, data);
      this.treeRoot = Root;
    } else {

      if (!Root.left && !Root.right) {
        this.treeRoot = null;
      }

      if (!Root.left) {
        Root = Root.right;
        this.treeRoot = node;
      }

      if (!Root.right) {
        Root = Root.left;
        this.treeRoot = node;
      }

      let currentData = Root.right.data;
      let nextNode = Root.right.left;

      while (nextNode) {
        currentData = nextNode.data;
        nextNode = nextNode.left;
      }

      Root.data = currentData;

      Root.right = removeNode(Root.right, currentData);

      this.treeRoot = node;
    }
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
