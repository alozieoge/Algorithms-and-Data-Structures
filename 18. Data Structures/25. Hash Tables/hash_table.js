class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value) {
        // Accept a key and a value. 
        // Hash the key. 
        // Store the key-value pair in the hash table array via separate chaining. 

        let index = this._hash(key);
        if (this.keyMap[index] == null) {
            this.keyMap[index] = [];
        }
        //TODO: Add logic to overwite duplicate key for new key-value pair.
        this.keyMap[index].push([key, value]);
    }

    get(key) {
        // Accept a key and a value. 
        // Hash the key. 
        // Retrieve the key-value pair from the hash table array. 
        // If the key is not found, return undefined. 
        // Otherwise, return the corresponding value.

        // MEE
//         let index = this._hash(key);
//         let arr = this.keyMap[index];
//         if (!arr) return undefined;
//         for (let keyValue of arr) {
//             if (keyValue[0] == key) return keyValue[1];
//         }

        // CS
        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] == key) {
                    return this.keyMap[index][i][1];
                }
            }
        }
        return undefined;
    }

    keys() {
        // Loop through the hash table array and return an array of keys in the table. 
        // Return only only unique keys (keys should be unique by definition). 

        let keysArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!keysArr.includes(this.keyMap[i][j][0])) {
                        keysArr.push(this.keyMap[i][j][0]);
                    }
                }
            } 
        }
        return keysArr;
    }


    values() {
        // Loop through the hash table array and return an array of values in the table. 
        // Return only only unique values. 

        // MEE
//         let values = [];
//         for (let i = 0; i < this.keyMap.length; i++) {
//             if (this.keyMap[i]) {
//                 for (let j = 0; j < this.keyMap[i].length; j++) {
//                     values.push(this.keyMap[i][j][1]);
//                 }
//             } 
//         }
//         return values;

        // CS
        let valuesArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!valuesArr.includes(this.keyMap[i][j][1])) {
                        valuesArr.push(this.keyMap[i][j][1]);
                    }
                }
            } 
        }
        return valuesArr;
    }
}

// let ht = new HashTable(13);
// ht.set("pink", "#ff69b4");
// ht.set("cyan", "#00ffff");
// ht.set("orangered", "#ff4500");
// ht.set("darkblue", "#00008b");
// ht.set("salmon", "#fa8072");
// ht.set("tomato", "#ff6347");
// ht.set("magenta", "#ff00ff");
// ht.set("yellow", "#ffff00");
// ht.set("green", "#00ff00");
// ht.set("red", "#ff0000");
// ht.set("red", "#ff0000");

// ht.get("cyan");

let ht = new HashTable(17);
ht.set("maroon", "#800000"); 
ht.set("yellow", "#ffff00");
ht.set("olive", "#808000");
ht.set("salmon", "#fa8072");
ht.set("lightcoral", "#f08080");
ht.set("mediumvioletred", "#c71585");
ht.set("plum", "#dda0dd");
ht.set("purple", "#dda0dd");
ht.set("violet", "#dda0dd");

ht.keys();
ht.values();
// To print out all the hast table values to the console:
ht.keys().forEach(function(key) { 
    console.log(ht.get(key)); 
})
