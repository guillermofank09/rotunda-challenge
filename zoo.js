
// Parant Class the defined the speak method
class Animal {
    type = "feline";
    text = "say something"
    noise = "miau";

  constructor() {
    // TODO
  }

  setText(text) {
    this.text = text;
  }

  speak() {
    const words = this.text.split(" ");
    let animalSpeak = ""
    words.forEach(word => {
        animalSpeak = animalSpeak.concat(word);
        animalSpeak = animalSpeak.concat(` ${this.noise} `);
    });

    // Another way to do it, but you don't have the noise for the last word
    // const animalSpeak = words.join(` ${this.noise} `);
    console.log(animalSpeak);
  }
}

// Children extends from Animal
class Lion extends Animal {

    noise = "roar";

    constructor() {
      super();
    }
}

class Tiger extends Animal {

    noise = "grrr";

    constructor() {
      super();
    }
}


const executeZoo = ( { animal, text }) => {
    let selectedAnimal;

    //Creates an instance due the entry.
    switch(animal) {
        case 'Lyon':
            selectedAnimal = new Lion();
            break;
        case 'Tiger':
            selectedAnimal = new Tiger();
            break;
        default:
            selectedAnimal = new Animal();
    }
    selectedAnimal.setText(text);
    selectedAnimal.speak();
}

export default executeZoo;