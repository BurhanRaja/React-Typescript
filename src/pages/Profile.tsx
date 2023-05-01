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
  const dispatch = useAppDispatch();

  const [editUser, setEditUser] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [email, setEmail] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");

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
              <h4 className="text-xl">Add Card</h4>
            </div>

            <div className="mt-5">
              <h4 className="text-xl">Current Cards</h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
