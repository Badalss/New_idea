import http from 'node:http';
import {readFile} from 'node:fs/promises';
const files={'/':['index.html','text/html'],'/app.js':['app.js','text/javascript'],'/logic.js':['logic.js','text/javascript'],'/style.css':['style.css','text/css']};
http.createServer(async(req,res)=>{const file=files[new URL(req.url,'http://localhost').pathname];if(!file){res.writeHead(404);return res.end('Not found');}try{res.setHeader('Content-Type',file[1]+'; charset=utf-8');res.end(await readFile(new URL(file[0],import.meta.url)));}catch{res.writeHead(500);res.end('Unable to load page');}}).listen(Number(process.env.PORT)||3000,'0.0.0.0',()=>console.log('PurchaseShield running on port '+(process.env.PORT||3000)));
