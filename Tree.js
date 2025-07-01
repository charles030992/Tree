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
        // Si es igual, no hacemos nada (puedes decidir cómo manejar duplicados)
    }
}

module.exports = Tree;
