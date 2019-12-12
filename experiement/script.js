var content=0,chance=0,check=0;
function determine(id)
{
    if(check==0)
    {
        if(content==0)
        {
            
            document.getElementById(id).innerHTML="X";
            
            content=1;
        }
        else
        {
            document.getElementById(id).innerHTML="O";
            
            content=0;
        }
     findmaster(); 
    }
}
function returnParts(master1,master2,master3)
{
check=1;
console.log("in returnparts");
    
document.getElementById(master1).style.backgroundColor="red";
document.getElementById(master2).style.backgroundColor="red";
document.getElementById(master3).style.backgroundColor="red";
var won=document.getElementById(master3).innerHTML;
document.getElementById("write").style.display="block";
document.getElementById("write").innerHTML=won+" is the Master";
}


function refresh()
{
    chance=0;
    document.getElementById("write").style.display="none";
    var all=document.querySelectorAll(".part");
   for(var i=0;i<all.length;i++)
   {
       all[i].innerHTML ="";
       all[i].style.backgroundColor="chartreuse";
   }
   check=0;
   
}
function findmaster()
{
    var box1=document.getElementById("part1").innerHTML;
    var box2=document.getElementById("part2").innerHTML;
    var box3=document.getElementById("part3").innerHTML;
    var box4=document.getElementById("part4").innerHTML;
    var box5=document.getElementById("part5").innerHTML;
    var box6=document.getElementById("part6").innerHTML;
    var box7=document.getElementById("part7").innerHTML;
    var box8=document.getElementById("part8").innerHTML;
    var box9=document.getElementById("part9").innerHTML;
        if(box1==box2&&box1==box3&&(box1=="X"||box=="O"))
        {
            returnParts("part1","part2","part3");
            
        }
        else if(box4==box5&&box5==box6&&(box6=="X"||box6=="O"))
        {
            returnParts("part4","part5","part6");            

        }
        else if(box7==box8&&box9==box7&&(box7=="X"||box7=="O"))
        {
            returnParts("part7","part8","part9");
        }
        else if(box1==box4&&box4==box7&&(box1=="X"||box1=="O"))
        {
            returnParts("part1","part4","part7");
        }
        else if(box5==box2&&box2==box8&&(box8=="X"||box8=="O"))
        {
            returnParts("part2","part5","part8");
        }
        else if(box6==box9&&box9==box3&&(box3=="X"||box3=="O"))
        {
            returnParts("part3","part6","part9");
        }
        else if(box1==box5&&box1==box9&&(box1=="X"||box1=="O"))
        {
            returnParts("part1","part5","part9");
        }
        else if(box3==box7&&box5==box3&&(box5=="X"||box5=="O"))
        {
            returnParts("part7","part5","part3");
        }
        else
        {
         console.log(chance);   
        }
        if(chance==8)
            {
                console.log(chance+"   in else condition");
                document.getElementById("write").style.display="block";
                document.getElementById("write").innerHTML="Draw";
            }
        console.log(chance);
            ++chance;
            
}
