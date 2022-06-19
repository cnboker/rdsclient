import React, { useEffect, useState } from "react";
import { webosApis,configer } from "lgservice";

export default () => {
  const  {APP_DOWNLOAD_DIR} = configer;
  const [fileName, setFileName] = useState("test.zip");
  const [message, setMessage] = useState("");
  useEffect(() => {}, []);
  const { unzipFile } = webosApis.webosFileService;
  const zip = () => {
    setMessage("");
    unzipFile(APP_DOWNLOAD_DIR + '/' + fileName, APP_DOWNLOAD_DIR)
      .then((res) => {
        setMessage("zip ok")
      })
      .catch((err) => console.log('error',err));
  };

  return (
    <React.Fragment>
      <h3>unzip test</h3>
      <div>
        <input
          type="text"
          style={{ width: "300px" }}
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
        />
      </div>

      <div>
        <button type="button" onClick={zip}>
          zip
        </button>
      </div>
      <div>message:{message}</div>
    </React.Fragment>
  );
};
