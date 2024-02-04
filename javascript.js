class HashMap {
  constructor(initialCapacity = 16, loadFactor = 0.75) {
    if (initialCapacity < 1 || loadFactor <= 0 || loadFactor >= 1) {
      throw new Error("Invalid initial capacity or load factor");
    }

    this.buckets = new Array(initialCapacity);
    this.loadFactor = loadFactor;
    this.size = 0;
  }

  stringToNumber(string) {
    let hashCode = 0;
    const primeNumber = 31;

    for (let i = 0; i < string.length; i++) {
      hashCode = primeNumber * hashCode + string.charCodeAt(i);
    }

    return hashCode;
  }

  hash(name, surname) {
    const nameHashCode = this.stringToNumber(name);
    const surnameHashCode = this.stringToNumber(surname);

    return nameHashCode + surnameHashCode;
  }
}

let test = new HashMap();
