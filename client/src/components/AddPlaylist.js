import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useDataContext } from "../contexts";

import MsgAlert from "./Alert";

function AddItem(props) {
  const { post, loading, error } = useDataContext();
  const { url } = props;
  const [task, setPlaylist] = useState({
    title: "",
    description: "",
  });

  const handleClick = async () => {
    const payload = task;
    await post(url, payload);
    setPlaylist((prev) => {
      return { ...prev, title: "", description: "" };
    });
  };

  return (
    <div
      style={{
        backgroundColor: "#f7f7f7",
        padding: "20px",
        borderRadius: "5px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.15)",
      }}
    >
      {loading && <div>Loading...</div>}
      {error && <MsgAlert msg={error?.message} />}
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Enter title"
          value={task?.title}
          onChange={(e) =>
            setPlaylist((prev) => {
              return { ...prev, title: e.target.value };
            })
          }
          style={{ backgroundColor: "#fff", color: "#333", padding: "10px" }}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Enter description"
          value={task?.description}
          onChange={(e) =>
            setPlaylist((prev) => {
              return { ...prev, description: e.target.value };
            })
          }
          style={{ backgroundColor: "#fff", color: "#333", padding: "10px" }}
        />
      </InputGroup>
      <Button variant="outline-secondary" onClick={handleClick}>
        Add Playlist
      </Button>
    </div>
  );
}

export default AddItem;
