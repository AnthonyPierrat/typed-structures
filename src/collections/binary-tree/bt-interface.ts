import { BNode } from "./utils/node/b-node";

export interface IBinaryTree<T> {
    
    /**
     * add an element.
     * 
     * @param item the element to add
     * @returns {boolean} true if added, false otherwise
     */
    add(root: BNode<T>, item: T): boolean;

    /**
     * delete an element.
     * 
     * @param item the element to remove
     * @returns {boolean} true if added, false otherwise
     */
    remove(item: T): boolean;

    /**
     * the first element in the tree.
     * 
     * @param item the element to find
     * @returns {T} the first element
     */
    find(item: T): T;

    /**
     * return the root of the tree.
     * @returns {BNode} the root node
     */
    root(): BNode<T>;
}