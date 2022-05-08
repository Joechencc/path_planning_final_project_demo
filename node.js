AVL_Tree = {};

AVL_Tree.rotateLeft=rotateLeft;
AVL_Tree.rotateRight=rotateRight;
AVL_Tree.leftHeight=leftHeight;
AVL_Tree.rightHeight=rightHeight;


var Node = function (key, value) {
  this.left = null;
  this.right = null;
  this.height = 0;
  this.key = key;
  this.value = value;
};

/**
 *
 *       b                              a
 *      / \                            / \
 *     a   e            ->            c   b
 *    / \                                / \
 *   c   d                              d   e
 *
 */
function rotateRight(Node) {
    var neighbor = Node.left;
    Node.left = neighbor.right;
    neighbor.right = Node;
    Node.height = Math.max(leftHeight(Node), rightHeight(Node)) + 1;
    neighbor.height = Math.max(leftHeight(neighbor), Node.height) + 1;
    return neighbor;
};

/**

 *
 *     a                              b
 *    / \                            / \
 *   c   b           ->             a   e
 *      / \                        / \
 *     d   e                      c   d
 *
 */
function rotateLeft(Node) {
    var neighbor = Node.right;
    Node.right = neighbor.left;
    neighbor.left = Node;
    Node.height = Math.max(leftHeight(Node), rightHeight(Node))+1;
    neighbor.height = Math.max(Node.height, rightHeight(neighbor))+1;
    return neighbor;
};

//Left and right height, if Null, return 0
function leftHeight(Node) {
    if (!Node.left) {
        return -1;
    }
    return Node.left.height;
};


function rightHeight(Node) {
    if (!Node.right) {
        return -1;
    }
    return Node.right.height;
};

