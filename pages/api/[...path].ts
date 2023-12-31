import type { NextApiRequest, NextApiResponse } from 'next'
import httpProxy from "http-proxy";
import Cookies from 'cookies';

const proxy = httpProxy.createProxyServer()

export const config = {
    api: {
      bodyParser: false,
    },
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
    return new Promise(()=>{
        // Convert cookies to header Authorization
        const  cookies = new Cookies(req, res)
        const accessToken = cookies.get('access_token')
        if(accessToken) {
            req.headers.Authorization = `Bearer ${accessToken}`
        } 
        req.headers.cookie =  '' // don't send cookies to API server
        proxy.web(req, res,{
            target: process.env.API_URL,
            changeOrigin: true,
            selfHandleResponse: false
        })
    })

}
