import React from 'react'
import DownoadFileTest from './components/DownoadFileTest'
import QueryDeviceInfoTest from './components/QueryDeviceInfoTest'
import IOTest from './components/ioTest'
import MediaTest from './components/MediaTest'
import ZipFile from './components/ZipFile'
export default() => {
  return (
    <React.Fragment>
      <DownoadFileTest/>
      <hr/>
      {/* <QueryDeviceInfoTest/>
      <hr/> */}
      <IOTest />
      <MediaTest />
      <ZipFile />
    </React.Fragment>

  )
}