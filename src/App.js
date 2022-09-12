import NewUp from "./Component/Op1";
import Newop from "./Component/Op2";
import Fruit from "./Component/Op3";
import NewOp4 from "./Component/Op4";
import Op5 from "./Component/Op5";
function Om() {
  // let newIdentity = {
  //   firstName: "pinax",
  //   lastName: "ghosh",
  //   age: 27,
  // };
  // newUpdate(newIdentity);

  const Identity = ["Sinaki", "Ghosh", 28, { name: "abc", age: 20 }];
  const [a, b, c, obj] = Identity;
  console.log(a, b, c, obj);

  return (
    <div>
      <NewUp firstName="pinax" lastName="ghosh" age={27} />
      <Newop carband="audi" modelnumber="A5" price={89999} />
      <p>
        <Fruit apple="kashmir" orange="darjeeling" banana="kerala" />
      </p>
      <NewOp4 firstName="sayan" lastName="ghosh" age={29} />
      <Op5 name={Identity[0]} dataArr={Identity} obj={obj} />
    </div>
  );
}

export default Om;

//function newUpdate(props) {
//   console.log(props);
//   return false;
// }
