import { useEffect } from "react";
import ListPlaylists from "../components/ListPlaylists";
import { API_SERVER } from "../constants";
import { useDataContext } from "../contexts";

function Playlist() {
  const { loading, data, error, fetchData } = useDataContext();
  useEffect(() => {
    fetchData(`${API_SERVER}/playlists`);
  }, [fetchData]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error?.message}</div>;

  return <>{data && <ListPlaylists playlists={data} />}</>;
}

export default Playlist;
