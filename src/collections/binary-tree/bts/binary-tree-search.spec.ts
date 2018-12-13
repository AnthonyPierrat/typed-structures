import { BinaryTreeSearch } from './binary-tree-search';

describe('new tree element', function () {
    it('should add to the root', function () {
        let tree: BinaryTreeSearch<any> = new BinaryTreeSearch<any>();
        let root = tree.root();
        expect(tree.root()).toEqual(undefined);
        expect(tree.add(root, 1)).toBe(true);
        expect(tree.root().data).toEqual(1);
    });

    it('should add to the right', function () {
        let tree: BinaryTreeSearch<any> = new BinaryTreeSearch<any>();
        let root = tree.root();
        expect(tree.add(root, 1)).toBe(true);
        expect(tree.root().data).toBeLessThan(2);
        expect(tree.add(root, 2)).toBe(true);
        expect(tree.root().right.data).toEqual(2);
    });

    it('should add to the left', function () {
        let tree: BinaryTreeSearch<any> = new BinaryTreeSearch<any>();
        let root = tree.root();
        expect(tree.add(root, 2)).toBe(true);
        expect(tree.root().data).toBeGreaterThan(1);
        expect(tree.add(root, 1)).toBe(true);
        expect(tree.root().left.data).toEqual(1);
    });

    it('should add recursively left or right', function () {
        let tree: BinaryTreeSearch<any> = new BinaryTreeSearch<any>();
        let root = tree.root();
        expect(tree.add(root, 2))
        expect(tree.add(root, 3))
        expect(tree.add(root, 1))
        expect(tree.add(root, 4))
        expect(tree.add(root, 0))
    });
});

describe('remove tree element', function() {
    it('should return undefined', function() {
        let tree: BinaryTreeSearch<any> = new BinaryTreeSearch<any>();
        let root = tree.root();
        expect(tree.remove(1)).toBeUndefined();
    });
    it('should remove root', function() {
        let tree: BinaryTreeSearch<any> = new BinaryTreeSearch<any>();
        let root = tree.root();
        tree.add(root, 1);
        expect(tree.root().data).toEqual(1);
        expect(tree.remove(1).data).toEqual(1)
    });
    // it('should remove right children', function() {
    //     let tree: BinaryTreeSearch<any> = new BinaryTreeSearch<any>();
    //     let root = tree.root();
    //     tree.add(root, 2);
    //     tree.add(tree.root(), 1);
    //     tree.add(tree.root(), 3);
    //     tree.add(tree.root(), 4);
    //     expect(tree.remove(3).data).toEqual(4);
    // });
    // it('should remove right children when value is less than root', function() {
    //     let tree: BinaryTreeSearch<any> = new BinaryTreeSearch<any>();
    //     let root = tree.root();
    //     tree.add(root, 5);
    //     tree.add(tree.root(), 1);
    //     tree.add(tree.root(), 3);
    //     tree.add(tree.root(), 4);
    //     expect(tree.remove(3).data).toEqual(4)
    // });
    // it('should remove left children', function() {
    //     let tree: BinaryTreeSearch<any> = new BinaryTreeSearch<any>();
    //     let root = tree.root();
    //     tree.add(root, 2);
    //     tree.add(tree.root(), 1);
    //     tree.add(tree.root(), 3);
    //     tree.add(tree.root(), 2);
    //     expect(tree.remove(3).data).toEqual(2)
    // });
    // it('should remove when two childs', function() {
    //     let tree: BinaryTreeSearch<any> = new BinaryTreeSearch<any>();
    //     let root = tree.root();
    //     expect(tree.add(root, 2));
    //     expect(tree.add(tree.root(), 3));
    //     expect(tree.add(tree.root(), 1));
    //     expect(tree.add(tree.root(), 2));
    //     expect(tree.add(tree.root(), 4));
    //     expect(tree.remove(3).data).toEqual(4);
    // });
    // it('should remove when two childs and more than 1 nodes', function() {
    //     let tree: BinaryTreeSearch<any> = new BinaryTreeSearch<any>();
    //     let root = tree.root();
    //     expect(tree.add(root, 5))
    //     expect(tree.add(tree.root(), 4))
    //     expect(tree.add(tree.root(), 6))
    //     expect(tree.add(tree.root(), 3))
    //     expect(tree.add(tree.root(), 4.5))
    //     expect(tree.add(tree.root(), 5.5))
    //     expect(tree.remove(6).data).toEqual(7);
    //     console.log(jasmine.pp(tree));
    // });
    
})


describe("finding element", function() {
    it("should return undefined", function() {
        let tree: BinaryTreeSearch<any> = new BinaryTreeSearch<any>();
        let root = tree.root();
        expect(tree.add(root, 2))
        expect(tree.find(tree.root(), 1)).toBeUndefined();
    })
    it("should return 2", function() {
        let tree: BinaryTreeSearch<any> = new BinaryTreeSearch<any>();
        let root = tree.root();
        expect(tree.add(root, 2))
        expect(tree.find(tree.root(), 2)).toEqual(2);
    })
    it("should return 4 right", function() {
        let tree: BinaryTreeSearch<any> = new BinaryTreeSearch<any>();
        let root = tree.root();
        expect(tree.add(root, 2))
        expect(tree.add(root, 1))
        expect(tree.add(root, 3))
        expect(tree.add(root, 4))
        expect(tree.find(tree.root(), 4)).toEqual(4);
    })
    it("should return 3 left", function() {
        let tree: BinaryTreeSearch<any> = new BinaryTreeSearch<any>();
        let root = tree.root();
        expect(tree.add(root, 2))
        expect(tree.add(root, 1))
        expect(tree.add(root, 3))
        expect(tree.add(root, 4))
        expect(tree.find(tree.root(), 3)).toEqual(3);
    })
    it("should return first occurence", function() {
        let tree: BinaryTreeSearch<any> = new BinaryTreeSearch<any>();
        let root = tree.root();
        expect(tree.add(root, 2))
        expect(tree.add(root, 1))
        expect(tree.add(root, 3))
        expect(tree.add(root, 4))
        expect(tree.add(root, 2))
        expect(tree.find(tree.root(), 2)).toEqual(2);
    })
})