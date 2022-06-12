window.onload = function (){
    let nesamone = "vienasdvid";
    let text = "desimt";
    let text2 = "vienuolika";
    let zod1 = "penktas";
    let zod2 = "sestas";
    let zod3 = "septintas";
    let txt1 = "penkiolika";
    let txt2 =  "sesiolika";
    let txt3 = "septiniolika";
    let zodziuJunginys = sudetiZodzius(nesamone,text,text2);
    let zodziuJunginys1 = sudetiZodzius(zod1,zod2,zod3);
    let zodziuJunginys2 = sudetiZodzius(txt1,txt2,txt3);
    
    console.log(sudetiZodzius(zod1[3],zod2[4],zod3[5]));
    
    console.log(sudetiZodzius(nesamone[3],text[4],text2[5]))
    console.log(sudetiZodzius(txt1[3],txt2[4],txt3[5]))

}

function sudetiZodzius(nesamone,text,text2) {
   return text+nesamone+text2
}
