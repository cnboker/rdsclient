import React, { useEffect, useState } from "react";
import { IContentWorker, getService, serviceRegister } from "lgservice";
import Shim from "./components/Shim";
import config from "../config";
import WebpagePlayer from "./components/WebpagePlayer";

export default () => {
  const [shim, setShim] = useState(true);
  const [url, setUrl] = useState("");

  useEffect(() => {
    serviceRegister();
    const worker = getService("IContentWorker") as IContentWorker;
    worker.log(0, "client started ...");
    worker.execute(() => {
      setShim(false);
      setUrl(`${config.REACT_APP_LG_URL}index.html?${Date.now()}`);
    });
  }, []);
  return (
    <React.Fragment>
      {shim ? <Shim /> : <WebpagePlayer url={url} />}
    </React.Fragment>
  );
};
