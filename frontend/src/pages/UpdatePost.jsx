import React from "react";
import Edit from "../components/edit/Edit";
const UpdatePost = () => {
  const update = true;
  return (
    <div className="mt-[6rem] flex  justify-center">
      <Edit update={update} />
    </div>
  );
};

export default UpdatePost;
