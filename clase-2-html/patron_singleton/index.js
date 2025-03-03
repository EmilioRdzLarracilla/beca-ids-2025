class Singleton {
  constructor() {
    if (!Singleton.instance) {
      this.data = "Instancia única";
      Singleton.instance = this;
    }
    return Singleton.instance;
  }

  getData() {
    return this.data;
  }

  setData(newData) {
    this.data = newData;
  }
}

// Obtener la instancia del Singleton
const instance1 = new Singleton();
const instance2 = new Singleton();

console.log(instance1 === instance2); // true
console.log(instance1.getData()); // "Instancia única"

instance2.setData("Nuevo dato");
console.log(instance1.getData()); // "Nuevo dato"
