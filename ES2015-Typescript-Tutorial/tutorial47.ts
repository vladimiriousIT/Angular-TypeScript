class PersonV{
    public fname: string;
    public lname: string;
    constructor(fname: string, lname: string) {
        this.fname = fname;
        this.lname = lname;
    }
};
//same PersonV = PersonB
class PersonB{
    constructor(public fname: string, public lname:string){

    }
}