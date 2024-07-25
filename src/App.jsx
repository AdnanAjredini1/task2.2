import { useEffect, useState } from "react";
import upIcon from "./assets/up.svg";
import userIcon from "./assets/user.svg";
import downIcon from "./assets/down.svg";

function App() {
  const [isDropDown, setIsDropDown] = useState({
    mainDropDown: false,
    firstDropDown: false,
    secondDropDown: false,
    thirdDropDown: false,
    fourthDropDown: false,
  });

  const handleDropDown = (item) => {
    setIsDropDown((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };
  useEffect(() => {
    if (!isDropDown.mainDropDown) {
      setIsDropDown((prev) => ({
        ...prev,
        firstDropDown: false,
        secondDropDown: false,
        thirdDropDown: false,
        fourthDropDown: false,
      }));
    }
  }, [isDropDown.mainDropDown]);

  return (
    <div className="main-div">
      <div className="main-drop" onClick={() => handleDropDown("mainDropDown")}>
        <div className="user-icon-div">
          <img src={userIcon} width={"55%"} height={"55%"} />
        </div>
        <div className="content-main" style={{ paddingRight: "2rem" }}>
          <p className="title">About Us</p>
          <p className="description">4 articles in this topic</p>
        </div>
        <div className="main-icons">
          {isDropDown.mainDropDown ? (
            <img src={downIcon} width={30} height={30} />
          ) : (
            <img src={upIcon} width={30} height={30} />
          )}
        </div>
      </div>

      {isDropDown.mainDropDown && (
        <div className="drops-container">
          <div
            className="drops1"
            onClick={() => handleDropDown("firstDropDown")}
          >
            <div className="drops-texts">
              <p className="drops-title">
                Lorem Ipsum is simply dummy text of the printing
              </p>
              {isDropDown.firstDropDown && (
                <p className="drops-description">
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting
                </p>
              )}
            </div>
            <div className="main-icons-drops">
              {isDropDown.firstDropDown ? (
                <img src={downIcon} width={30} height={30} />
              ) : (
                <img src={upIcon} width={30} height={30} />
              )}
            </div>
          </div>

          <div
            className="drops2"
            onClick={() => handleDropDown("secondDropDown")}
          >
            <div className="drops-texts">
              <p className="drops-title">
               The standard Lorem Ipsum passage, used since the 1500s
              </p>
              {isDropDown.secondDropDown && (
                <p className="drops-description">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                </p>
              )}
            </div>
            <div className="main-icons-drops">
              {isDropDown.secondDropDown ? (
                <img src={downIcon} width={30} height={30} />
              ) : (
                <img src={upIcon} width={30} height={30} />
              )}
            </div>
          </div>

          <div
            className="drops3"
            onClick={() => handleDropDown("thirdDropDown")}
          >
            <div className="drops-texts">
              <p className="drops-title">
              1914 translation by H. Rackham
              </p>
              {isDropDown.thirdDropDown && (
                <p className="drops-description">
                "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
                </p>
              )}
            </div>
            <div className="main-icons-drops">
              {isDropDown.thirdDropDown ? (
                <img src={downIcon} width={30} height={30} />
              ) : (
                <img src={upIcon} width={30} height={30} />
              )}
            </div>
          </div>

          <div
            className="drops4"
            onClick={() => handleDropDown("fourthDropDown")}
          >
            <div className="drops-texts">
              <p className="drops-title">
              Contrary to popular belief,
              </p>
              {isDropDown.fourthDropDown && (
                <p className="drops-description">
                Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, 
                </p>
              )}
            </div>
            <div className="main-icons-drops">
              {isDropDown.fourthDropDown ? (
                <img src={downIcon} width={30} height={30} />
              ) : (
                <img src={upIcon} width={30} height={30} />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
