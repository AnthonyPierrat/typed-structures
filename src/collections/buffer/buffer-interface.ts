export interface IBuffer<T> {

    /**
     * Returns the array that backs this buffer
     * Invoke the hasArray method before invoking this method in order to ensure that this buffer has an accessible backing array.
     * @return {T[]} The array that backs this buffer
     * @throws ReadOnlyBufferException - If this buffer is backed by an array but is read-only
     * @throws UnsupportedOperationException - If this buffer is not backed by an accessible array
     * @since 0.0.1
     */
    array(): T[];

    /**
     * Returns the offset within this buffer's backing array of the first element of the buffer  (optional operation).
     * If this buffer is backed by an array then buffer position p corresponds to array index p + arrayOffset().
     *
     * Invoke the hasArray method before invoking this method in order to ensure that this buffer has an accessible backing array.
     * @return {number} The offset within this buffer's array of the first element of the buffer
     * @throws ReadOnlyBufferException - If this buffer is backed by an array but is read-only
     * @throws UnsupportedOperationException - If this buffer is not backed by an accessible array
     * @since 0.0.1
     */
    arrayOffset(): number;

    /**
     * Returns this buffer's capacity.
     * @return {number} The capacity of this buffer
     * @since 0.0.1
     */
    capacity(): number;

    /**
     * Invoke this method before using a sequence of channel-read or put operations to fill this buffer. For example:
     *  buf.clear();     // Prepare buffer for reading
     *  in.read(buf);    // Read data
     * This method does not actually erase the data in the buffer, but it is named as if it did because it will most often be used in situations in which that might as well be the case.
     * @return {Buffer} This buffer
     * @since 0.0.1
     */
    clear(): IBuffer<T>;

    /**
     * Flips this buffer. The limit is set to the current position and then the position is set to zero. If the mark is defined then it is discarded.
     * After a sequence of channel-read or put operations, invoke this method to prepare for a sequence of channel-write or relative get operations. For example:
     *  buf.put(magic);    // Prepend header
     *  in.read(buf);      // Read data into rest of buffer
     *  buf.flip();        // Flip buffer
     * out.write(buf);    // Write header + data to channel
     * This method is often used in conjunction with the compact method when transferring data from one place to another.
     * @return {IBuffer<T>} This buffer
     * @since 0.0.1
     */
    flip(): IBuffer<T>;

    /**
     * Tells whether or not this buffer is backed by an accessible array.
     * If this method returns true then the array and arrayOffset methods may safely be invoked.
     * @return {boolean} true if, and only if, this buffer is backed by an array and is not read-only
     * @since 0.0.1
     */
    hasArray(): boolean;

    /**
     * Tells whether there are any elements between the current position and the limit.
     * @return {boolean} true if, and only if, there is at least one element remaining in this buffer
     * @since 0.0.1
     */
    hasRemaining(): boolean;

    /**
     * Tells whether or not this buffer is direct.
     * @return {boolean} true if, and only if, this buffer is direct
     * @since 0.0.1
     */
    isDirect(): boolean;

    /**
     * Tells whether or not this buffer is read-only.
     * @return {boolean} true if, and only if, this buffer is read-only
     * @since 0.0.1
     */
    isReadOnly(): boolean;

    /**
     * Returns this buffer's limit.
     * @return {number} The limit of this buffer
     * @since 0.0.1
     */
    limit(): number;

    /**
     * Sets this buffer's limit. If the position is larger than the new limit then it is set to the new limit. If the mark is defined and larger than the new limit then it is discarded.
     * @param newLimit - The new limit value; must be non-negative and no larger than this buffer's capacity
     * @return This buffer
     * @throws IllegalArgumentException - If the preconditions on newLimit do not hold
     * @since 0.0.1
     */
    limit(newLimit: number): IBuffer<T>;

    /**
     * Sets this buffer's mark at its position.
     * @return {IBuffer<T>} This buffer
     * @since 0.0.1
     */
    mark(): IBuffer<T>;

    /**
     * Returns this buffer's position.
     * @return {number} The position of this buffer
     */
    position(): number;

    /**
     * Sets this buffer's position. If the mark is defined and larger than the new position then it is discarded.
     * @param {number} newPosition - The new position value; must be non-negative and no larger than the current limit
     * @return {IBuffer<T>} This buffer
     * @throws IllegalArgumentException - If the preconditions on newPosition do not hold
     */
    position(newPosition: number): IBuffer<T>;

    /**
     * Returns the number of elements between the current position and the limit.
     * @return {number} The number of elements remaining in this buffer
     */
    remaining(): number;

    /**
     * Resets this buffer's position to the previously-marked position.
     * Invoking this method neither changes nor discards the mark's value.
     * @return {IBuffer<T>} This buffer
     * @throws InvalidMarkException - If the mark has not been set
     */
    reset(): IBuffer<T>;

    /**
     * Rewinds this buffer. The position is set to zero and the mark is discarded.
     * Invoke this method before a sequence of channel-write or get operations, assuming that the limit has already been set appropriately. For example:
     *  out.write(buf);    // Write remaining data
     *  buf.rewind();      // Rewind buffer
     *  buf.get(array);    // Copy data into array
     * @return {IBuffer<T>} This buffer
     */
    rewind(): IBuffer<T>;

    /**
     * Returns the hash code value for this map. The hash code of d map is defined to be the sum of the hash codes of each entry in the map's entrySet() view.
     * This ensures that b1.equals(b2) implies that b1.hashCode() === b2.hashCode() for any two buffers b1 and b2.
     * @return {number} the hash code value for this map
     * @since 0.0.1
     */
    hashCode(): number;
}