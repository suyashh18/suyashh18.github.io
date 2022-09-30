var names = new Array();
names[0]= "suyash jain";
names[1]= "john";
names[2]= "deepak";
names[3]= "parul";
names[4]= "disha";
names[5]= "soumya";
names[6]= "Jatin";
names[7]= "juhi";
names[8]= "sanskar";

for(var i =0 ; i<names.length; i++){
    if(names[i].charAt()==='J' || names[i].charAt() ==='j'){
        console.log("Goodbye " + names[i])
    }
    else{
        console.log("Hello "+ names[i])  
    }
}