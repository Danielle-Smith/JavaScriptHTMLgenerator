//   HTML title generator

heading_generator = function (heading, type) {
    return `<${type}>${heading}</${type}>`;
  }
  console.log(heading_generator('I am a heading', 'h1'));
  console.log(heading_generator('I am a h2', 'h2'));
