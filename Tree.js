class Tree {
    constructor() {
        this.root = null;    
    }

    addNode(node) {
        if (!this.root) {
            // Si el árbol está vacío, el nuevo nodo es la raíz
            this.root = node;
        } else {
            // Si el árbol ya tiene raíz, comparamos los datos
            if (node.data < this.root.data) {
                // Si es menor, va a la izquierda
                this.root.left = node;
            } else if (node.data > this.root.data) {
                // Si es mayor, va a la derecha
                this.root.right = node;
            }
            // Si es igual, no hacemos nada (puedes decidir cómo manejar duplicados)
        }
    }
}

module.exports = Tree;
