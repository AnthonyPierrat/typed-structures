import {MapInterface} from './mapInterface';
import {BiFunctionInterface} from '../util/function/biFunctionInterface';
import {FunctionInterface} from '../util/function/functionInterface';
import {SetInterface} from './setInterface';
import {MapEntryInterface} from './mapEntryInterface';
import {UnsupportedOperationException} from '../util/exception/unsupportedOperationException';
import {NullReferenceException} from '../util/exception/nullReferenceException';

export class Map<K, V> implements MapInterface<K, V> {

    private _entries: MapEntryInterface<K, V>[];

    clear(): void {
        try {
            this._entries.length = 0;
        } catch (e) {
            throw new UnsupportedOperationException(e.message);
        }
    }

    compute(key: K, remappingFunction: BiFunctionInterface<K, V, V>): V {

        let oldValue: V = this.get(key);
        let newValue: V = remappingFunction.apply(key, oldValue);
        if (oldValue !== null) {
            if (newValue != null) {
                return this.put(key, newValue);
            } else {
                return this.remove(key);
            }
        } else {
            if (newValue !== null) {
                return this.put(key, newValue);
            } else {
                return null;
            }
        }
    }

    computeIfAbsent(key: K, mappingFunction: FunctionInterface<K, V>): V {

        if (key === null || key === undefined)
            throw new NullReferenceException('The key cannot be null nor undefined');

        if (this.get(key) === null) {
            let newValue: V = mappingFunction.apply(key);
            if (newValue !== null)
                try {
                    return this.put(key, newValue);
                } catch (e) {
                    throw new UnsupportedOperationException(e.message);
                }
        }
    }

    computeIfPresent(key: K, v: BiFunctionInterface<K, V, V>): V {

        if (key === null || key === undefined)
            throw new NullReferenceException('The key cannot be null nor undefined');

        if (this.get(key) !== null) {
            let oldValue: V = this.get(key);
            let newValue: V = v.apply(key, oldValue);
            if (newValue != null) {
                try {
                    return this.put(key, newValue);
                } catch (e) {
                    throw new UnsupportedOperationException(e.message);
                }
            } else {
                return this.remove(key);
            }
        }
    }

    containsKey(key: any): boolean {

        if (key === null || key === undefined)
            throw new NullReferenceException('The key cannot be null nor undefined');

        return this._entries.find((entry: MapEntryInterface<K, V>) => {
            return entry.getKey() === key;
        }) !== undefined;
    }

    containsValue(value: any): boolean {

        if (value === null || value === undefined)
            throw new NullReferenceException('The value cannot be null nor undefined');

        return this._entries.find((entry: MapEntryInterface<K, V>) => {
            return entry.getValue() === value;
        }) !== undefined;
    }

    /**
     * TODO: Implement Set and MapEntry
     * @return {SetInterface<MapEntryInterface<K, V>>}
     */
    entrySet(): SetInterface<MapEntryInterface<K, V>> {
        return (new Set<MapEntry<K, V>>()).addAll(this._entries);
    }

    equals(m: MapInterface<K, V>): boolean {
        return this.entrySet().equals(m.entrySet());
    }

    forEach(callback: FunctionInterface<MapEntryInterface<K, V>, MapEntryInterface<K, V>>): void {
        this._entries = this._entries.map(mapEntry => callback.apply(mapEntry));
    }

    get(key: K): V {
        if (key === null || key === undefined)
            throw new NullReferenceException('The key cannot be null nor undefined');

        try {
            return this._entries
                .find((mapEntry: MapEntryInterface<K, V>) => mapEntry.getKey() === key)
                .getValue();
        } catch (e) {
            return null;
        }
    }

    getOrDefault(key: K, defaultValue: V): V {
        let get = this.get(key);
        if (get) {
            return get;
        } else {
            return defaultValue;
        }
    }

    hashCode(): number {
        return this.entrySet().toArray().reduce((accumulator: number, mapEntry: MapEntryInterface<K, V>) => {
            return accumulator + mapEntry.hashCode();
        }, 0);
    }

    isEmpty(): boolean {
        return this._entries.length > 0;
    }

    keySet(): SetInterface<K> {
        // FIXME: keys() is defined nowhere so not sure it works
        return (new Set<K>()).addAll(this._entries.keys());
    }

    merge(key: K, value: V, remappingFunction: BiFunctionInterface<V, V, V>): V {

        if (key === null || key === undefined)
            throw new NullReferenceException('The key cannot be null nor undefined');

        let oldValue: V = this.get(key);
        let newValue: V = (oldValue === null) ? value : remappingFunction.apply(oldValue, value);
        if (newValue === null) {
            this.remove(key);
        } else {
            try {
                this.put(key, newValue);
                return newValue;
            } catch (e) {
                throw new UnsupportedOperationException(e.message);
            }
        }
    }

    put(key: K, value: V): V {
        let previousValue: V = null;

        if (key === null || key === undefined)
            throw new NullReferenceException('The key cannot be null nor undefined');

        if (this.containsKey(key))
            this._entries = this._entries
                .map((mapEntry: MapEntryInterface<K, V>) => {
                    if (mapEntry.getKey() === key)
                        previousValue = mapEntry.setValue(value);
                    return mapEntry;
                });
        else
            this._entries.push(new MapEntry<K, V>(key, value));

        return previousValue;
    }

    putAll(m: MapInterface<K, V>): void {
        m.entrySet()
            .toArray()
            .forEach((mapEntry: MapEntryInterface<K, V>) => this.put(mapEntry.getKey(), mapEntry.getValue()));
    }

    putIfAbsent(key: K, value: V): V {

        if (key === null || key === undefined)
            throw new NullReferenceException('The key cannot be null nor undefined');

        let v: V = this.get(key);

        if (v === null)
            v = this.put(key, value);

        return v;
    }

    remove(key: K): V;
    remove(key: K, value: V): boolean;
    remove(key: K, value?: V): any {
        if (value)
            if (this.containsKey(key) && this.get(key) === value) {
                this.remove(key);
                return true;
            } else {
                return false;
            }
        else {

            if (key === null || key === undefined)
                throw new NullReferenceException('The key cannot be null nor undefined');

            let length: number = this._entries.length;
            this._entries
                .filter((mapEntry: MapEntryInterface<K, V>) => mapEntry.getKey() !== key);
            return this._entries.length !== length;
        }
    }

    replace(key: K, value: V): V;
    replace(key: K, oldValue: V, newValue: V): boolean;
    replace(key: K, value: V, newValue?: V): any {
        if (value)
            if (this.containsKey(key) && this.get(key) === value) {
                this.put(key, newValue);
                return true;
            } else {
                return false;
            }
        else {
            if (key === null || key === undefined)
                throw new NullReferenceException('The value cannot be null nor undefined');

            if (this.containsKey(key)) {
                return this.put(key, value);
            } else {
                return null;
            }
        }
    }

    replaceAll(f: BiFunctionInterface<K, V, V>): void {

        if (f === null || f === undefined)
            throw new NullReferenceException('The function cannot be null nor undefined');

        this.entrySet().toArray().forEach((mapEntry: MapEntryInterface<K, V>) => {
            mapEntry.setValue(f.apply(mapEntry.getKey(), mapEntry.getValue()));
        });
    }

    size(): number {
        return this._entries.length;
    }

    values(): V[] {
        return this._entries
            .map((mapEntry: MapEntryInterface<K, V>) => mapEntry.getValue());
    }
}