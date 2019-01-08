var user = {
  name:'Thunder',
  sayHi: () => {
    console.log('Hi',`${this.name}`);
  },
  sayHiAlt () {
    console.log('Hi',`${this.name}`);
  }
}

user.sayHiAlt();
