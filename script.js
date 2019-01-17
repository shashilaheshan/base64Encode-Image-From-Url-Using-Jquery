//author heshan
//initioalizing jquery
var $j = jQuery;
//Enter image url resource here.
var testUrl1 = 'https://fb.zeroweb.co/apps/1.png?fbclid=IwAR3XPvZpiEzUhZHN8UuigRNaZi4DA3E1gUMIJo_CTXlQmip8j9WA7o3hpFs';  

var imgSrc = testUrl1;

/* Base 64 Encoding Function */
function base64Encode(str) {
        var CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        var out = "", i = 0, len = str.length, c1, c2, c3;
        while (i < len) {
            c1 = str.charCodeAt(i++) & 0xff;
            if (i == len) {
                out += CHARS.charAt(c1 >> 2);
                out += CHARS.charAt((c1 & 0x3) << 4);
                out += "==";
                break;
            }
            c2 = str.charCodeAt(i++);
            if (i == len) {
                out += CHARS.charAt(c1 >> 2);
                out += CHARS.charAt(((c1 & 0x3)<< 4) | ((c2 & 0xF0) >> 4));
                out += CHARS.charAt((c2 & 0xF) << 2);
                out += "=";
                break;
            }
            c3 = str.charCodeAt(i++);
            out += CHARS.charAt(c1 >> 2);
            out += CHARS.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
            out += CHARS.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
            out += CHARS.charAt(c3 & 0x3F);
        }
        console.log(out);
        return out;
    }

/* Display and Encode without using "canvas" */
function diaplayImage( imgObj, data ){
  $j(imgObj).attr('src', 'data:image/jpeg;base64,' + base64Encode(data));
}




/* Display base 64 encoded string */
function displayBase64Data( dataDiv, data ){
  var dataOut = base64Encode(data);
  $j( dataDiv ).append(dataOut);
}

function GetBas64Image(){
    
        var imgUrl = imgSrc;
        //var img = encodeURIComponent(imgUrl);
        
            $.ajax({
                url: imgUrl,
                type: "GET",
                
                mimeType: "text/plain; charset=x-user-defined",
            }).done(function( data, textStatus, jqXHR ){
                
                diaplayImage( '#image1', data );
                
                
                displayBase64Data( '#dataOutput', data);
            });
            
     
        
    

}

