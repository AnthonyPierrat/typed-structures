import {Exception} from './exception';
import {ClassCastException} from './class-cast-exception';
import {IllegalArgumentException} from './illegal-argument-exception';
import {NullReferenceException} from './null-reference-exception';
import {UnsupportedOperationException} from './unsupported-operation-exception';
import {IndexOutOfBoundsException} from './index-out-of-bounds-exception';
import {InvalidMarkException} from './invalid-mark-exception';
import {ReadOnlyBufferException} from './read-only-buffer-exception';

describe('exception', function () {
    it('should return the error', function () {
        let e = new Exception('error');
        expect(e.toString()).toEqual('Exception: error\n');
    });
});

describe('classCastException', function () {
    it('should return the error', function () {
        let e = new ClassCastException('error');
        expect(e.toString()).toEqual('ClassCastException: error\n');
    });
});

describe('illegalArgumentException', function () {
    it('should return the error', function () {
        let e = new IllegalArgumentException('error');
        expect(e.toString()).toEqual('IllegalArgumentException: error\n');
    });
});

describe('nullReferenceException', function () {
    it('should return the error', function () {
        let e = new NullReferenceException('error');
        expect(e.toString()).toEqual('NullReferenceException: error\n');
    });
});

describe('unsupportedOperationException', function () {
    it('should return the error', function () {
        let e = new UnsupportedOperationException('error');
        expect(e.toString()).toEqual('UnsupportedOperationException: error\n');
    });
});

describe('IndexOutOfBoundException', function () {
    it('should return the error', function () {
        let e = new IndexOutOfBoundsException('error');
        expect(e.toString()).toEqual('IndexOutOfBoundsException: error\n');
    });
});

describe('InvalidMarkException', function () {
    it('should return the error', function () {
        let e = new InvalidMarkException('error');
        expect(e.toString()).toEqual('InvalidMarkException: error\n');
    });
});

describe('IndexOutOfBoundException', function () {
    it('should return the error', function () {
        let e = new IndexOutOfBoundsException('error');
        expect(e.toString()).toEqual('IndexOutOfBoundsException: error\n');
    });
});

describe('ReadOnlyBufferException', function () {
    it('should return the error', function () {
        let e = new ReadOnlyBufferException('error');
        expect(e.toString()).toEqual('ReadOnlyBufferException: error\n');
    });
});