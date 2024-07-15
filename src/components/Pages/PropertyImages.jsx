import React from "react";
import Header from "./Header";

const PropertyImages = () => {
  const HandleChanges = () => {
    alert(
      "Thank you for filling the form. Someone from our team will contact you shortly!!"
    );
  };
  return (
    <>
      <div className="sm:m-20 sm:mx-72 sm:overflow-y-scroll sm:h-96 sm:shadow-xl sm:rounded-xl sm:border sm:border-gray-200">
        <Header />
        <form className="sm:ml-10 sm:mt-8" action="" method="POST">
          <h2 className="sm:font-bold">
            Add photos/videos to attract more tenants!
          </h2>
          <p className="sm:mt-10">
            Add photos of living room,bedroom,floor,doors,kitchen ,
            balcony,location map,neighborhood,
            <br /> etc
          </p>
          <input
            type="file"
            className="sm:border-2 sm:px-48 sm:py-24"
            name="photos"
            multiple
          />
        </form>
        <div className="sm:flex sm:bg-blue-800 sm:p-4 sm:text-white sm:sticky sm:top-0 sm:bottom-0 sm:left-0 sm:right-0">
          <h2>Need help? Call 1800-600-200</h2>
          <button
            type="submit"
            className="sm:ml-96 sm:border-2 sm:p-2 sm:rounded-sm"
            onClick={HandleChanges}
          >
            Save&Post
          </button>
        </div>
      </div>
    </>
  );
};

export default PropertyImages;
