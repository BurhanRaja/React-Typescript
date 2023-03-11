const Notification = () => {
  return (
    <>
      <p className="text-start p-4 border-b-2 border-gray-700 font-semibold ">
        Notification
      </p>
      <a href="#">
        <div className="text-start p-3 border-y-[0.1rem]">
          <p className="text-sm font-bold flex justify-between items-center">
            <span>Title</span>
            <span className="font-normal text-xs">3:04:01pm</span>
          </p>
          <p className="text-xs">Lorem ipsum, dolor sit amet....</p>
        </div>
      </a>
      <a href="#">
        <div className="text-start p-3 border-y-[0.1rem]">
          <p className="text-sm font-bold flex justify-between items-center">
            <span>Title</span>
            <span className="font-normal text-xs">3:04:01pm</span>
          </p>
          <p className="text-xs">Lorem ipsum, dolor sit amet....</p>
        </div>
      </a>
      <div className="bg-gray-700 text-white rounded-sm my-3 mx-4">
        <button className="w-[100%] py-1">More</button>
      </div>
    </>
  );
};

export default Notification;
