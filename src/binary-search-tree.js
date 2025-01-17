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
    this.treeRoot = removeNode(this.treeRoot, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else if (node.data > data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {

        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let currentData = node.right.data;
        let nextNode = node.right.left;

        while (nextNode) {
          currentData = nextNode.data;
          nextNode = nextNode.left;
        }

        node.data = currentData;

        node.right = removeNode(node.right, currentData);

        return node;
      }
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
