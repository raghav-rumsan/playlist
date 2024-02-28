import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

import { API_SERVER } from "../constants";
import { useDataContext } from "../contexts";

function Listmusic(props) {
  const { remove } = useDataContext();
  const { music } = props;

  return (
    <ListGroup
      style={{
        backgroundColor: "#f7f7f7",
        borderRadius: "5px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.15)",
      }}
    >
      {music?.map((music) => {
        return (
          <ListGroup.Item
            key={music?._id}
            style={{
              color: "#333",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px",
                marginBottom: "10px",
                borderRadius: "5px",
              }}
            >
              <h4 style={{ fontWeight: "bold" }}>{music?.title}</h4>
              <h4 style={{ fontWeight: "normal" }}>{music?.artist}</h4>
              <h4 style={{ fontWeight: "normal" }}>{music?.duration}</h4>
            </div>
            <Button
              variant="danger"
              onClick={() => remove(`${API_SERVER}/musics`, music?._id)}
              style={{
                float: "right",
                color: "#fff",
              }}
            >
              Delete
            </Button>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}

export default Listmusic;
