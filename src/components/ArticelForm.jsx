import React from "react";
import { Input, TextArea } from "../ui";
import { useSelector } from "react-redux";

function ArticelForm(props) {
  const { isLoading } = useSelector(state => state.article);
  const {title, setTitle, description, setDescription, body, setBody, formSubmit} = props

 
  return (
    <form  onSubmit={formSubmit}>
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
        disabled={isLoading}
        type="submit"
       
      >
        {isLoading ? "Loading..." : "Create"}
      </button>
    </form>
  );
}

export default ArticelForm;

