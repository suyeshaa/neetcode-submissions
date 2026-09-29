class MyHashSet {
    constructor() {
        this.arr = []
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        this.arr.push(key)
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        
        this.arr = this.arr.filter((a) => a!==key)
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        console.log(this.arr)
        if(this.arr.includes(key)){
            return true
        }
        else{
            return false
        }
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
