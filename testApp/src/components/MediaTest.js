import React, { useEffect, useState } from "react";
import { webosApis } from "lgservice";

export default () => {
  const [fileName, setFileName] = useState("http://localhost:8888/admin/video/1.mp4");
  const [mediaInfo, setMediaInfo] = useState("");
  const { getMetadata, load, play,unload } = webosApis.mediaservice;
  const [mediaId, setMediaId] = useState("");
  const [error,setError] = useState('')
  useEffect(() => {}, []);

  const getMediaInfo = () => {
    setError("");
    getMetadata(fileName)
      .then((res) => {
        setMediaInfo(JSON.stringify(res));
      })
      .catch((err) => console.log(setError(err)));
  };

  const playClick = () => {
    load(fileName)
      .then((mediaId) => {
        console.log('mediaId',mediaId)
        setMediaId(mediaId);
        return play(mediaId);
      })
      .then(res=>{
        console.log('play is ok')
      })
      .catch((err) => setError(err));
  };
  return (
    <React.Fragment>
      <h3>Media test</h3>
      <div>
        <input
          type="text"
          style={{width:'300px'}}
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
        />
      </div>
      <div>
        <textarea value={mediaInfo} />
      </div>
      <div>
        <button type="button" value="get media info" onClick={getMediaInfo} >get media info</button>
        <button type="button" value="play" onClick={playClick} >play</button>
      </div>
      <div>error:{error}</div>
    </React.Fragment>
  );
};
