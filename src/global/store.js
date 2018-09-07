class Store {
    constructor(prefix = '__PEACE__') {
        this._prefix = prefix
        this._store = {}
    }

    get(key) {
        return this._store[key] || JSON.parse(window.localStorage.getItem(this._prefix + key))
    }

    set(key, val) {
      window.localStorage.setItem(this._prefix + key, JSON.stringify(val))
      this._store[key] = val
    }
}

export default new Store()
