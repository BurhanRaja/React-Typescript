import { useEffect, useState } from "react";
import useAppSelector from "../hooks/useAppSelector";
import useAppDispatch from "../hooks/useAppDispatch";
import { AiFillEdit } from "react-icons/ai";
// import { RiVisaFill, RiMastercardFill } from "react-icons/ri";
import {
  clearUserprofile,
  getUserProfileThunk,
} from "../features/user/userprofile";
import { updateUserThunk } from "../features/user/user";
// import {
//   addCardsThunk,
//   clearCrudCardState,
//   deleteCardsThunk,
// } from "../features/user/crudcards";
import { toast } from "react-toastify";
// import { clearAllCardState, getAllCardsThunk } from "../features/user/allcards";
// import { Link } from "react-router-dom";

const Profile = () => {
  const { user } = useAppSelector((state) => state.userProfileAction);
  // const { cards } = useAppSelector((state) => state.allCardsAction);
  const dispatch = useAppDispatch();

  const [editUser, setEditUser] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  // User
  const [email, setEmail] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");

  // // Card
  // const [cardName, setCardName] = useState("");
  // const [cardNumber, setCardNumber] = useState("");
  // const [cardExp, setCardExp] = useState("");
  // const [cardCVC, setCardCVC] = useState("");
  // const [errorAddMsg, setErrorAddMsg] = useState("");

  useEffect(() => {
    dispatch(clearUserprofile());
    dispatch(getUserProfileThunk());
  }, []);

  // useEffect(() => {
  //   dispatch(clearAllCardState());
  //   dispatch(getAllCardsThunk());
  // }, []);

  useEffect(() => {
    if (user) {
      setFname(user?.first_name);
      setLname(user?.last_name);
      setEmail(user?.email);
      setPhone(user?.phone_number);
    }
  }, [user]);

  // Edit User
  function handleUserEdit(e: any) {
    e.preventDefault();

    if (
      editUser &&
      fname === "" &&
      lname === "" &&
      email === "" &&
      phone === ""
    ) {
      setErrorMsg("Please enter above field.");
      return;
    }

    let data = {
      first_name: fname,
      last_name: lname,
      email,
      phone_number: phone,
    };

    dispatch(updateUserThunk(data)).then((data: any) => {
      if (data?.error?.code === "ERR_BAD_REQUEST") {
        toast.warn("User doesn't exists.");
        return;
      }
      if (data?.error?.code === "ERR_NETWORK") {
        toast.error("Internal Server Error.");
        return;
      }

      toast.success("Successfully User Updated!");
      dispatch(clearUserprofile());
      dispatch(getUserProfileThunk());
      return;
    });
  }

  // Add Cards
  // function handleAddCards(e: any) {
  //   e.preventDefault();

  //   if (
  //     cardName === "" ||
  //     cardExp === "" ||
  //     cardNumber === "" ||
  //     cardCVC === ""
  //   ) {
  //     setErrorAddMsg("Please fill the above field.");
  //     return;
  //   }

  //   if (
  //     cardNumber !== "4242 4242 4242 4242" &&
  //     cardNumber !== "4000 0566 5566 5556" &&
  //     cardNumber !== "5555 5555 5555 4444" &&
  //     cardNumber !== "5200 8282 8282 8210"
  //   ) {
  //     toast.error("Invalid Card Number.");
  //     return;
  //   }

  //   let number = cardNumber.split(" ")[0].split("")[0];

  //   if (Number(number) !== 4 && Number(number) !== 5) {
  //     toast.warn("Please Enter correct Card Number.");
  //     return;
  //   }

  //   let cardType = "";
  //   if (Number(number) === 4) {
  //     cardType = "V";
  //   } else {
  //     cardType = "M";
  //   }

  //   let my = cardExp.split("/");

  //   let data = {
  //     cardName,
  //     cardExpMonth: Number(my[0]),
  //     cardExpYear: Number(my[1]),
  //     cardNumber,
  //     cardCVC,
  //     cardType,
  //   };

  //   dispatch(clearCrudCardState());
  //   dispatch(addCardsThunk(data)).then((data: any) => {
  //     if (data?.error?.code === "ERR_BAD_REQUEST") {
  //       toast.warn("Some Error Ocurred.");
  //       return;
  //     }
  //     if (data?.error?.code === "ERR_NETWORK") {
  //       toast.error("Internal Server Error.");
  //       return;
  //     }

  //     toast.success("Successfully Card Added!");
  //     setCardCVC("");
  //     setCardName("");
  //     setCardNumber("");
  //     setCardExp("");
  //     dispatch(clearAllCardState());
  //     dispatch(getAllCardsThunk());
  //     return;
  //   });
  // }

  return (
    <>
      <section className="my-20">
        <div className="bg-white w-[95%] mx-auto p-3 shadow-sm rounded-sm border py-4">
          <div className="flex items-center justify-between space-x-2 px-4 font-semibold text-gray-900 leading-8 mb-5">
            <h1 className="tracking-wide text-2xl">About</h1>
            <button
              className="bg-black p-2"
              onClick={() => setEditUser(!editUser)}
            >
              <AiFillEdit className="text-white" />
            </button>
          </div>
          <div className="text-gray-700">
            <form onSubmit={handleUserEdit}>
              <div className="flex">
                <div className="px-4 py-2 font-semibold w-32">First Name</div>
                <div className="px-4 py-2 w-[100%]">
                  <input
                    type="text"
                    name="firstname"
                    className="rounded-lg w-full border p-2 text-sm shadow-sm focus:outline-0"
                    disabled={editUser}
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                  />
                  {!editUser && errorMsg && fname === "" ? (
                    <small className="text-red-500">{errorMsg}</small>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="flex">
                <div className="px-4 py-2 font-semibold w-32">Last Name</div>
                <div className="px-4 py-2 w-[100%]">
                  <input
                    type="text"
                    name="lastname"
                    className="rounded-lg w-full border p-2 text-sm shadow-sm focus:outline-0"
                    disabled={editUser}
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                  />
                  {!editUser && errorMsg && lname === "" ? (
                    <small className="text-red-500">{errorMsg}</small>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="flex">
                <div className="px-4 py-2 font-semibold w-32">Email</div>
                <div className="px-4 py-2 w-[100%]">
                  <input
                    type="email"
                    name="email"
                    className="rounded-lg w-full border p-2 text-sm shadow-sm focus:outline-0"
                    disabled={editUser}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                {!editUser && errorMsg && email === "" ? (
                  <small className="text-red-500">{errorMsg}</small>
                ) : (
                  ""
                )}
              </div>
              <div className="flex">
                <div className="px-4 py-2 font-semibold w-32">Phone</div>
                <div className="px-4 py-2 w-[100%]">
                  <input
                    type="text"
                    name="phone"
                    className="rounded-lg w-full border p-2 text-sm shadow-sm focus:outline-0"
                    disabled={editUser}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                {!editUser && errorMsg && email === "" ? (
                  <small className="text-red-500">{errorMsg}</small>
                ) : (
                  ""
                )}
              </div>
              {!editUser && (
                <div className="text-center mt-5">
                  <button className="bg-black text-white py-2 px-4 rounded">
                    Submit
                  </button>
                </div>
              )}
            </form>
          </div>
          {/* <div className="px-4 mt-8">
            <div className="mt-10">
              <h4 className="text-2xl mb-3 font-semibold">Add Card</h4>
              <small className="text-red-500">
                Add Only cards given below. Please do not add your original card
                as it is for testing.
              </small>
              <table className="table-auto w-[100%] my-8">
                <thead>
                  <tr>
                    <th className="text-start border p-2 bg-black text-white">
                      Card Type
                    </th>
                    <th className="text-start border p-2 bg-black text-white">
                      Card Number
                    </th>
                    <th className="text-start border p-2 bg-black text-white">
                      Card Expiry Date
                    </th>
                    <th className="text-start border p-2 bg-black text-white">
                      Card CVC
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2">Visa</td>
                    <td className="border p-2">4242 4242 4242 4242</td>
                    <td className="border p-2">Any Future Date</td>
                    <td className="border p-2">Any 3 digit</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Visa (debit)</td>
                    <td className="border p-2">4000 0566 5566 5556</td>
                    <td className="border p-2">Any Future Date</td>
                    <td className="border p-2">Any 3 digit</td>
                  </tr>
                  <tr>
                    <td className="border p-2">MasterCard</td>
                    <td className="border p-2">5555 5555 5555 4444</td>
                    <td className="border p-2">Any Future Date</td>
                    <td className="border p-2">Any 3 digit</td>
                  </tr>
                  <tr>
                    <td className="border p-2">MasterCard (Debit)</td>
                    <td className="border p-2">5200 8282 8282 8210</td>
                    <td className="border p-2">Any Future Date</td>
                    <td className="border p-2">Any 3 digit</td>
                  </tr>
                </tbody>
              </table>
              <form onSubmit={handleAddCards}>
                <div>
                  <div className="">
                    <div className="px-4 py-2 font-semibold w-32">
                      Card Name
                    </div>
                    <div className="px-4 py-2 w-[100%]">
                      <input
                        type="text"
                        name="name"
                        className="rounded-lg w-full border p-2 text-sm shadow-sm focus:outline-0"
                        placeholder=""
                        value={cardName}
                        onChange={(e) => setCardName(e.target.value)}
                      />
                      {errorAddMsg && cardName === "" ? (
                        <small className="text-red-500">{errorAddMsg}</small>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="">
                    <div className="px-4 py-2 font-semibold w-[11%]">
                      Card Number
                    </div>
                    <div className="px-4 py-2 w-[100%]">
                      <input
                        type="text"
                        name="cardnumber"
                        className="rounded-lg w-full border p-2 text-sm shadow-sm focus:outline-0"
                        placeholder="4444 4444 4444 4444"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                      />
                      {errorAddMsg && cardNumber === "" ? (
                        <small className="text-red-500">{errorAddMsg}</small>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="w-[50%]">
                    <div className="px-4 py-2 font-semibold w-32">
                      Expiry Date
                    </div>
                    <div className="px-4 py-2 w-[100%]">
                      <input
                        type="text"
                        name="expirydate"
                        className="rounded-lg w-full border p-2 text-sm shadow-sm focus:outline-0"
                        placeholder="05/23"
                        value={cardExp}
                        onChange={(e) => setCardExp(e.target.value)}
                      />
                      {errorAddMsg && cardExp === "" ? (
                        <small className="text-red-500">{errorAddMsg}</small>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="w-[50%]">
                    <div className="px-4 py-2 font-semibold w-32">CVC</div>
                    <div className="px-4 py-2 w-[100%]">
                      <input
                        type="password"
                        name="cvc"
                        className="rounded-lg w-full border p-2 text-sm shadow-sm focus:outline-0"
                        placeholder="123"
                        value={cardCVC}
                        onChange={(e) => setCardCVC(e.target.value)}
                      />
                      {errorAddMsg && cardCVC === "" ? (
                        <small className="text-red-500">{errorAddMsg}</small>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
                <div className="text-center mt-5">
                  <button className="bg-black text-white py-2 px-4 w-[50%] rounded">
                    Add Card
                  </button>
                </div>
              </form>
            </div>
            <div className="mt-10">
              <h4 className="text-2xl font-semibold">Current Cards</h4>
              <table className="table-auto w-[100%] my-8">
                <thead>
                  <tr>
                    <th className="text-start border p-2 bg-black text-white">
                      Card Type
                    </th>
                    <th className="text-start border p-2 bg-black text-white">
                      Card Name
                    </th>
                    <th className="text-start border p-2 bg-black text-white">
                      Card Number
                    </th>
                    <th className="text-start border p-2 bg-black text-white">
                      Card Expiry Date
                    </th>
                    <th className="text-start border p-2 bg-black text-white">
                      Edit
                    </th>
                    <th className="text-start border p-2 bg-black text-white">
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cards.length > 0 ? (
                    cards?.map((el: any) => {
                      return (
                        <tr key={el?._id}>
                          <td className="border p-2">
                            {el?.cardType === "V" ? (
                              <RiVisaFill className="text-3xl" />
                            ) : (
                              <RiMastercardFill className="text-3xl" />
                            )}
                          </td>
                          <td className="border p-2">{el?.cardName}</td>
                          <td className="border p-2">{el?.cardNumber}</td>
                          <td className="border p-2">
                            {el?.cardExpMonth + "/" + el?.cardExpYear}
                          </td>
                          <td className="border p-2">
                            <Link to="/">
                              <button className="p-2 bg-black text-white">
                                <AiFillEdit />
                              </button>
                            </Link>
                          </td>
                          <td className="border p-2">
                            <button
                              className="p-2 bg-black text-white"
                              onClick={() => {
                                dispatch(clearCrudCardState());
                                dispatch(deleteCardsThunk(el?._id)).then(
                                  (data: any) => {
                                    if (
                                      data?.error?.code === "ERR_BAD_REQUEST"
                                    ) {
                                      toast.warn("Some Error Ocurred.");
                                      return;
                                    }
                                    if (data?.error?.code === "ERR_NETWORK") {
                                      toast.error("Internal Server Error.");
                                      return;
                                    }

                                    toast.success("Successfully Card Deleted!");
                                    dispatch(clearAllCardState());
                                    dispatch(getAllCardsThunk());
                                    return;
                                  }
                                );
                              }}
                            >
                              <AiFillDelete />
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td className="border p-2" colSpan={5}>
                        No Card Available
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Profile;
