import React, { useEffect } from "react";
import { Modal, Ripple, initTE } from "tw-elements";
import { AiOutlineClose } from "react-icons/ai";
import { RxCheckCircled } from "react-icons/rx";

type ModalProps = {
    handleClick: () => void
}

const ModalEl = ({handleClick}: ModalProps) => {
  useEffect(() => {
    initTE({ Modal, Ripple });
  }, []);
  return (
    <>
      <div
        data-te-modal-init
        className="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          data-te-modal-dialog-ref
          className="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]"
        >
          <div className="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
            <div className="flex flex-shrink-0 items-center justify-between rounded-t-md p-4">
              <h5
                className="text-xl font-medium leading-normal text-neutral-800"
                id="exampleModalLabel"
              >
                Payment Confirmation
              </h5>
              <button
                type="button"
                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                data-te-modal-dismiss
                aria-label="Close"
              >
                <AiOutlineClose />
              </button>
            </div>

            <div
              className="relative flex-auto p-4 text-center text-xl px-20"
              data-te-modal-body-ref
            >
                <p className="flex justify-center items-center">
                <RxCheckCircled className="mb-5 text-9xl text-green-500" />
                </p>
              Please Confirm Your Payment by clicking the button below.
            </div>

            <div className="text-center pt-10 rounded-b-md p-4">
              <button
                type="button"
                className="ml-1 inline-block rounded bg-black px-6 pb-2 pt-2.5 font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-green-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-green-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 w-[80%] text-lg"
                data-te-ripple-init
                data-te-ripple-color="light"
                onClick={() => handleClick()}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalEl;
