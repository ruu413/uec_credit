//console.log(document.body)
if(document.body.getElementsByTagName("frame").length>2){
document.body.getElementsByTagName("frame")[2].onload = function(){
    //console.log("a");
    var target = body.document.body;
    //target.innerHTML = target.innerHTML.split('秀').join('禿');
    if(!target.innerHTML.includes("GPA計算年度・学期")){
        console.log("not");
        return;
    }
    var tr = target.getElementsByTagName("tr");
    var numf = 0;
    var gpsum = 0;
    var creditsum = 0;
    var nocalccredit = 0;
    for(var i = 6;i<=tr.length;++i){
        elem = tr[i].getElementsByTagName("td");
        //0 No. ,6 単位数 ,9 標語,10 合否
        if(elem.length==0)break;
        elem[0].innerHTML = String(parseInt(elem[0].innerHTML)-numf);
        creditsum+=parseInt(elem[6].innerHTML);
        if(elem[9].innerHTML.includes('秀')){
            gpsum+=parseInt(elem[6].innerHTML)*4;
           // elem[9].innerHTML="禿"
        }else if(elem[9].innerHTML.includes('優')){
            gpsum+=parseInt(elem[6].innerHTML)*3;
        }else if(elem[9].innerHTML.includes('良')){
            gpsum+=parseInt(elem[6].innerHTML)*2;
        }else if(elem[9].innerHTML.includes('可')){
            gpsum+=parseInt(elem[6].innerHTML)*1;
        }else if(elem[9].innerHTML.includes('不')){
            creditsum-=parseInt(elem[6].innerHTML);
            numf++;
            tr[i].remove();
            i--;
            continue;
        }else{
            //creditsum-=parseInt(elem[6].innerHTML);
            nocalccredit+=parseInt(elem[6].innerHTML);
        }
    }
    tr[3].getElementsByTagName("td")[1].innerHTML=String(creditsum.toFixed(1));
    tr[4].getElementsByTagName("td")[1].innerHTML=String(gpsum);
    tr[4].getElementsByTagName("td")[2].innerHTML=(gpsum/(creditsum-nocalccredit)).toFixed(4);
    console.log(gpsum/creditsum);
    /*td = target.getElementsByTagName("td");
    var numf = 0;
    for(var i = 0;i<td.length;++i){
        //console.log(td[i].innerHTML);
        var tmp = parseInt(td[i].innerHTML);
        if(!isNaN(tmp)&&td[i].innerHTML.length<=3){
            if(!td[i].innerHTML.includes('.')){
                td[i].innerHTML=String(tmp-numf)
                //console.log(numf);
            }
        }
        if(td[i].innerHTML.includes('不')){
            numf+=1;
            //console.log(i);
            //console.log(td[i].parentNode);
            td[i].parentNode.remove();
            i-=10;
        }
    }*/
}
}