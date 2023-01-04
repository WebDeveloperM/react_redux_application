import React, { useState } from "react";
import { logo } from "../constants/index";
import { Input, TextArea } from "../ui";

function CreateArticle() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  return (
    <div>
      <div class="py-3 text-center">
        <img
          class="d-block mx-auto mb-4"
          src={logo}
          alt=""
          width="72"
          height="57"
        />
        <h2>Create Article</h2>
      </div>
      <div className="w-75 mx-auto">
        <form>
          <Input label={"Title"} state={title} setState={setTitle} />
          <TextArea
            label={"Description"}
            state={description}
            setState={setDescription}
            height={"110px"}
          />
          <TextArea
            height={"110px"}
            label={"Body"}
            state={body}
            setState={setBody}
          />
          <button
            className="w-100 btn btn-lg btn-primary my-2"
            type="submit"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateArticle;
