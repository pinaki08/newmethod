import NewUp from "./Component/Op1";
import Newop from "./Component/Op2";
import Fruit from "./Component/Op3";
import NewOp4 from "./Component/Op4";
function Om() {
  // let newIdentity = {
  //   firstName: "pinax",
  //   lastName: "ghosh",
  //   age: 27,
  // };
  // newUpdate(newIdentity);
  
  // const Identity = ["Sinaki", "Ghosh", 28];
  // let Identities = Identity[0]
  // Identities = Identity[1];
  // Identities = Identity[2]
  // console.log(Identities);

  return (
    <div>
      <NewUp firstName="pinax" lastName="ghosh" age={27} />
      <Newop carband="audi" modelnumber="A5" price={89999} />
      <p>
        <Fruit apple="kashmir" orange="darjeeling" banana="kerala" />
      </p>
      <NewOp4 firstName = "sayan" lastName = "ghosh" age ={28}/>
    </div>
  );
}

export default Om;

//function newUpdate(props) {
//   console.log(props);
//   return false;
// }

// function Identity(yes) {
//   console.log(yes);
//   return false;
// }
