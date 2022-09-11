function NewUp(props) {
  const { firstName, lastName, age } = props;
  return (
    <div>
      {" "}
      i am {firstName} my last name is {lastName} and age is {age}{" "} 
    </div>
  );
  //destruturing
}

export default NewUp;
