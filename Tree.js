class Tree {
    constructor() {
        this.root = null;
    }

    addNode(node) {
        if (!this.root) {
            this.root = node;
        } else {
            this._addNodeRecursive(this.root, node);
        }
    }

    _addNodeRecursive(parent, child) {
        if (child.data < parent.data) {
            if (!parent.left) {
                parent.left = child;
            } else {
                this._addNodeRecursive(parent.left, child);
            }
        } else if (child.data > parent.data) {
            if (!parent.right) {
                parent.right = child;
            } else {
                this._addNodeRecursive(parent.right, child);
            }
        }
    }

    hasNode(value) {
        return this._hasNodeRecursive(this.root, value);
    }

    _hasNodeRecursive(node, value) {
        if (!node) return false;
        if (node.data === value) return true;
        if (value < node.data) {
            return this._hasNodeRecursive(node.left, value);
        } else {
            return this._hasNodeRecursive(node.right, value);
        }
    }
}

module.exports = Tree;
