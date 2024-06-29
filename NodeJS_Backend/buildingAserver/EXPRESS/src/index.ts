import express from 'express';


// primary endpoint
const app = express();
const port = 3000;

app.get('/api', (req,res) => {
    res.send('Hello world!');
    class ShowImage {  
        DisplayImage() {  
         var myloc = new Image();  
         myloc.useMap = "DMA SO3.png";  
         var img = document.createElement('img')  
         img.setAttribute('src', myloc.useMap);  
         img.setAttribute('style', "height:149px;width:280px;");  
         document.body.appendChild(img);  
        }  
       }  
       window.onload = () => {  
        var button = document.createElement('button')  
        button.innerText = "Show";  
        button.onclick = function() {  
         var image = new ShowImage();  
         image.DisplayImage();  
        }  
        document.body.appendChild(button);  
       };  
});

// start express server
app.listen(port, () => {
    console.log(`server started at http://localhost: ${port}`);
});