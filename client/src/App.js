import { Col, Container, Row } from "react-bootstrap";
import AddPlaylist from "./components/AddPlaylist";
import Title from "./components/Title";
import { API_SERVER } from "./constants";
import Playlist from "./pages/Playlist";

function App() {
  return (
    <Container fluid>
      <Row>
        <Col md={3} className="sidebar">
          <Title name="SongCraft" />
          <AddPlaylist
            label="Add New Playlist"
            placeholder="Eg: 90s bollywood anthem"
            url={`${API_SERVER}/playlists`}
          />
        </Col>
        <Col
          style={{
            backgroundColor: "#f4f4f4",
            padding: "2em",
          }}
          md={9}
          className="main-content"
        >
          <Playlist />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
