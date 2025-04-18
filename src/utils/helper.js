function compare(time1, time2){
    let x= new Date(time1);
    let y=new Date(time2);

    return x>y;
}

module.exports={
    compare,
}