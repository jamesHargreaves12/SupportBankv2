import {Transaction} from './Transaction';

export class Account {
    private amt:number = 0;
    private name:string = 'default';
    private listOfTrans:Array<Transaction> = new Array(0); 



    constructor(name:string)
    {
        this.name = name;        
    }
    
    public transactionOccured(transaction:Transaction ): void 
    {
       if(transaction.getFrom() == this.name) this.amt -= transaction.getAmt();
       else                                   this.amt += transaction.getAmt();

       this.listOfTrans[this.listOfTrans.length] = transaction;
    }

    public getBalence():number
    {
        return this.amt;
    }

    public getTransactionList():Array<Transaction>
    {
        return this.listOfTrans;
    }

    public getName():string
    {
        return this.name;
    }
}

