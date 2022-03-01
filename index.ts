function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    reportingURL = "http://www...";
  };
}

function test(number: number) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    // console.log('value', value);
    console.log('target', target);
    console.log('propertyKey', propertyKey);
    console.log('descriptor', descriptor);

    console.log(target.greeting('decorator'))
  }
}

@reportableClassDecorator
class Greet {
  constructor() {
    console.log('estou sendo chamado')
  }

  @test(2)
  greeting(name: string = 'World') {
    return `Hello ${ name }`
  }
}

const greet = new Greet();

console.log(greet.greeting('sully'));
