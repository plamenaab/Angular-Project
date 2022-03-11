export class LoggingService{
    historyLog: string[]=[];
    logParteiDataChange(change: string){
        console.log("New data change request:" + change);
        this.historyLog.push(change);
        console.log(this.historyLog);
    }
}
