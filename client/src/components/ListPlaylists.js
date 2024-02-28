import { Accordion } from "react-bootstrap";
import { API_SERVER } from "../constants";
import "../styles/playlist.css"; // Import the CSS file
import AddMusic from "./AddMusic";
import MsgAlert from "./Alert";
import ListMusics from "./ListMusics";

function ListPlaylist(props) {
  const { playlists } = props;

  return (
    <>
      {playlists && playlists.length > 0 ? (
        <>
          <Accordion defaultActiveKey={["0"]} className="playlist-accordion">
            {playlists.map((playlist) => {
              return (
                <Accordion.Item key={playlist?._id} eventKey={playlist?._id}>
                  <Accordion.Header className="playlist-accordion-header">
                    {playlist?.title}
                    {playlist?.description && (
                      <span className="playlist-accordion-description">
                        {playlist?.description}
                      </span>
                    )}
                  </Accordion.Header>
                  <Accordion.Body className="playlist-accordion-body">
                    {playlist?.musics && playlist?.musics.length > 0 ? (
                      <ListMusics music={playlist?.musics} />
                    ) : (
                      <MsgAlert msg="No Music Found. Add one to get started..." />
                    )}
                    <AddMusic
                      playlist={playlist}
                      label="Add new Music"
                      placeholder="Eg: Time"
                      url={`${API_SERVER}/musics`}
                    />
                  </Accordion.Body>
                </Accordion.Item>
              );
            })}
          </Accordion>
        </>
      ) : (
        <>
          <MsgAlert msg="No Playlist Found. Add one to get started..." />
        </>
      )}
    </>
  );
}

export default ListPlaylist;
