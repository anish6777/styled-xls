import Body from "./../Nodes/Body";

export function createBody() {
  const output = new Body();
  const addSheet = (sheet) => {
    output.elements[0].elements.push(sheet);
  };
  return { output, addSheet };
}
