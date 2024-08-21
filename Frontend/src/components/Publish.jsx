import React from "react";

function Publish(prop) {
  const droppedItems = prop.dropped || [];
  console.log(prop);
  return (
    <>
      <div>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Preview</h3>
            <div className="py-4">
            {droppedItems.length === 0 && <p>No publish</p>}
              {droppedItems.map((item, index) => (
                <div className="m-2" key={index}>
                  {item.content}
                </div>
              ))}
            </div>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Publish;
