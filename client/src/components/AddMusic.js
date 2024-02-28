import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

import { useState } from "react";

import { useDataContext } from "../contexts";
import MsgAlert from "./Alert";

function AddItem(props) {
  const { post, loading, error } = useDataContext();
  const { url, playlist } = props;
  const [task, setPlaylist] = useState({
    title: "",
    artist: "",
    duration: "",
  });

  const handleClick = async () => {
    const payload = task;
    payload.playlist = playlist?._id;
    await post(url, payload);
    setPlaylist((prev) => {
      return { ...prev, title: "", artist: "", duration: "" };
    });
  };

  return (
    <Container
      style={{
        backgroundColor: "#f7f7f7",
        borderRadius: "5px",
        padding: "20px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.15)",
      }}
    >
      <Row>
        <Col>
          {loading && <div>Loading...</div>}
          {error && <MsgAlert msg={error?.message} />}
        </Col>
      </Row>
      <Row>
        <Col>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Title"
              value={task?.title}
              onChange={(e) =>
                setPlaylist((prev) => {
                  return { ...prev, title: e.target.value };
                })
              }
              style={{
                backgroundColor: "#fff",
                color: "#333",
                padding: "10px",
              }}
            />
          </InputGroup>
        </Col>
        <Col>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Artist"
              value={task?.artist}
              onChange={(e) =>
                setPlaylist((prev) => {
                  return { ...prev, artist: e.target.value };
                })
              }
              style={{
                backgroundColor: "#fff",
                color: "#333",
                padding: "10px",
              }}
            />
          </InputGroup>
        </Col>
        <Col>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Duration"
              value={task?.duration}
              onChange={(e) =>
                setPlaylist((prev) => {
                  return { ...prev, duration: e.target.value };
                })
              }
              style={{
                backgroundColor: "#fff",
                color: "#333",
                padding: "10px",
              }}
            />
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            variant="outline-secondary"
            onClick={handleClick}
            style={{ backgroundColor: "#1DB954", color: "#fff" }}
          >
            Submit
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default AddItem;
