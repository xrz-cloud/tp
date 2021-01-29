function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}
var tp=GetQueryString("t");
if(tp !=null && tp.toString().length>1)
{
    if(tp == "bili-vd-bak")
    {
        window.location.href=xrzurl.url1
    }
    
}
else
{
var myurl=GetQueryString("url");
if(myurl !=null && myurl.toString().length>1)
{
window.location.href=GetQueryString("url");
}
else
{
window.location.href="https://www.xrzyun.top";
}
}