import { useEffect, useState } from "react";
import useAppSelector from "../hooks/useAppSelector";
import useAppDispatch from "../hooks/useAppDispatch";
import { AiFillEdit } from "react-icons/ai";
import {
  clearUserprofile,
  getUserProfileThunk,
} from "../features/user/userprofile";

const Profile = () => {
  const { user } = useAppSelector((state) => state.userProfileAction);
  const { cards } = useAppSelector((state) => state.allCardsAction);
  const dispatch = useAppDispatch();

  const [editUser, setEditUser] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  // User
  const [email, setEmail] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");

  // Card
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExp, setCardExp] = useState("");
  const [cardCVC, setCardCVC] = useState("");
  const [errorAddMsg, setErrorAddMsg] = useState("");
  
  // Edit Card
  const [editCardName, setEditCardName] = useState("");
  const [editCardExp, setEditCardExp] = useState("");
  const [errorEditMsg, setErrorEditMsg] = useState("");

  const [cardEditId, setCardEditId] = useState("");

  useEffect(() => {
    dispatch(clearUserprofile());
    dispatch(getUserProfileThunk());
  }, []);

  useEffect(() => {
    if (user) {
      setFname(user?.first_name);
      setLname(user?.last_name);
      setEmail(user?.email);
      setPhone(user?.phone_number);
    }
  }, [user]);

  function handleUserEdit() {}

  function handleAddCards(e: any) {
    e.preventDefault();

    if (cardName === "" || cardExp === "" || cardNumber === "" || cardCVC === "") {
      return;
    }
  }

  function enableEditCard(
    id: string,
    name: string,
    expMonth: string,
    expYear: string
  ) {
    setCardEditId(id);
    setEditCardName(name);
    setEditCardExp(expMonth + "/" + expYear);
  }

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
          <div className="px-4 mt-8">
            <h2 className="text-2xl font-semibold">Cards</h2>
            <div className="mt-5">
              <h4 className="text-xl mb-3">Add Card</h4>
              <form onSubmit={handleAddCards}>
                <div>
                  <div className="flex">
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
                    </div>
                  </div>
                  <div className="flex">
                    <div className="px-4 py-2 font-semibold w-32">
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
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex">
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
                    </div>
                  </div>
                  <div className="flex">
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
            <div className="mt-5">
              <h4 className="text-xl">Current Cards</h4>
              {cards?.map((el: any) => {
                return (
                  <div key={el?._id}>
                    <div className="flex justify-end items-center">
                      <button
                        className="bg-black p-2"
                        onClick={() =>
                          enableEditCard(
                            el?._id,
                            el?.cardName,
                            el?.cardExpMonth,
                            el?.cardExpYear
                          )
                        }
                      >
                        <AiFillEdit className="text-white" />
                      </button>
                    </div>
                    <div className="flex">
                      <div className="px-4 py-2 font-semibold w-32">
                        Card Name
                      </div>
                      <div className="px-4 py-2 w-[100%]">
                        <input
                          type="text"
                          name="name"
                          className="rounded-lg w-full border p-2 text-sm shadow-sm focus:outline-0"
                          placeholder=""
                          disabled={cardEditId !== el?._id}
                          value={cardEditId !== el?._id ? el?.cardName : editCardName}
                          onChange={(e) => setEditCardName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="flex">
                      <div className="px-4 py-2 w-[100%]">
                        <input
                          type="text"
                          name="cardnumber"
                          className="rounded-lg w-full border p-2 text-sm shadow-sm focus:outline-0"
                          disabled={true}
                          value={el?.cardNumber}
                        />
                      </div>
                    </div>
                    <div className="flex">
                      <div className="px-4 py-2 font-semibold w-32">
                        Expiry Date
                      </div>
                      <div className="px-4 py-2 w-[100%]">
                        <input
                          type="text"
                          name="expirydate"
                          className="rounded-lg w-full border p-2 text-sm shadow-sm focus:outline-0"
                          placeholder=""
                          disabled={cardEditId !== el?._id}
                          value={cardEditId !== el?._id ? el?.cardExpMonth + "/" + el?.cardExpYear : editCardExp}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
