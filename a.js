function caculate(){
    var count1=0;
    var count2=0;
    var count3=0;
    var ele=document.getElementById("tiankong1").value;
     if(ele.match("统一建模语言"))
             count1++;
             var arr=new Array();
     arr.push(document.getElementById("tiankong2").value);
     arr.push(document.getElementById("tiankong3").value);
     arr.push(document.getElementById("tiankong4").value);
     for(var i in arr){
             if(arr[i]!=arr[i+1]&&arr[i]!=arr[i+2]){
                     if(arr[i].match("封装性")||arr[i].match("继承性")||arr[i].match("多态性")){
                             count1++;
                     }
             }
     }
     var answer=["B","A","ABD","ABC","false","true"];
     for(var i=0;i<2;i++){
             res=getChoice1(i+1);
             if(res === answer[i]){
                     count2++;
             }
     }
     for(var i=2;i<4;i++){
             res=getChoice2(i+1);
             if(res === answer[i]){
                     count2++;
             }
     }
     for(var i=4;i<6;i++){
             res=getChoice1(i+1);
             if(res === answer[i]){
                     count2++;
             }
     }
     var ele2=document.getElementById("jianshu").value;
     if(ele2.match("模型是对现实世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体；可以是某种图形；或者是一种数学表达式。"))
     count3++;
     alert("考试成绩为："+(count1*5+count2*10+count3*20));
}
function getChoice1(name){
     var res;
     var num = document.getElementsByName(name+"");
for(var item of num){
     if(item.checked){
             res=item.value;
             return res;
     }
}
}
function getChoice2(name){
     var res="";
     var num = document.getElementsByName(name+"");
for(var item of num){
     if(item.checked){
             res+=item.value;   
     }
}
return res;
}