

function CurrentOrder(name,price,itemnum,total){
   this.name = name;
   this.price= price;
   this.itemnum = itemnum;
   this.total= total;
}

export function currentOrderConfirm(name,price,itemnum,total){
  let obj = new CurrentOrder(name,price,itemnum,total)
  return obj
}


export   const add = (arr) => {
    return arr.reduce((a, b) =>a + b, 0)
  };