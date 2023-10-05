export default function AboutPage() {
  // obh
  const myComplexObject = { name: 'Hamsa', hobby: 'coding' };
  // JS string
  const myComplexObjectAsString = JSON.stringify(myComplexObject);
  console.log(myComplexObjectAsString);

  const myComplexObjectIntoJSAgain = JSON.parse(myComplexObjectAsString);
  console.log(myComplexObjectIntoJSAgain);

  return <div>About Page</div>;
}
