import { APP_ID } from "../constants";

export const screenCapture = (outputFile:string): Promise<any> => {
    return new Promise((resolve, reject) => {
        //@ts-ignore
        const bridge = window.webosBridge;
        bridge.onservicecallback = (msg: string) => {
            const response = JSON.parse(msg)
            const { returnValue, errorText } = response
            if (returnValue) {
                resolve(response)
            } else {
                reject(errorText)
            }
        }
        var url = "luna://com.webos.surfacemanager/captureCompositorOutput"
        var params = JSON.stringify({
            "appId": APP_ID,
            "format": "PNG",
            "output": outputFile
        })
        bridge.call(url, params)
    })
}