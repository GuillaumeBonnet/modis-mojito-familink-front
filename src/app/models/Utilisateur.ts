export default class User {

  private _email:string;
  private _password:string;
  private _password2:string;
  private _nom:string;
  private _prenom:string;
  private _profil:string;
  private _gravatar:string;
  private _codepostal:number;
  private _ville:string;
  private _telephone:number;


  constructor(_email?:string, _password?:string, _password2?:string, _nom?:string, _prenom?:string, _profil?:string, _gravatar?:string, _codepostal?:number, _ville?:string, _telephone?:number)  {  
    this._email = _email;  
    this._password= _password;
    this._password2= _password2;
    this._nom= _nom;
    this._prenom= _prenom;
    this._profil= _profil;
    this._gravatar= _gravatar;
    this._codepostal= _codepostal;
    this._ville= _ville;
    this._telephone= _telephone;

  }
  get email(): string   {  
    return this._email;  
  }
  set email(value: string) {  
    console.log('SET EMAIL', value);  
    this._email = value;  
  }  
  get password(): string {  
    return this._password;  
  }
  set password(value: string) {  
    console.log('SET PASSWORD', value);  
    this._password = value;  
  }

  get password2(): string {
    return this._password;
  }
  set password2(value: string) {
    console.log('SET PASSWORD', value);
    this._password = value;
  }


  get nom(): string {
    return this._nom;
  }
  set nom(value: string) {
    console.log('SET NOM', value);
    this._nom = value;
  }

  get prenom(): string {
    return this._prenom;
  }
  set prenom(value: string) {
    console.log('SET PRENOM', value);
    this._prenom = value;
  }

   get profil(): string {
    return this._profil;
  }
  set profil(value: string) {
    console.log('SET PROFIL', value);
    this._profil = value;
  }

  get gravatar(): string {
    return this._gravatar;
  }
  set gravatar(value: string) {
    console.log('SET GRAVATAR', value);
    this._gravatar = value;
  }

  get codepostal(): number {
    return this._codepostal;
  }
  set codepostal(value: number) {
    console.log('SET CODE POSTAL', value);
    this._codepostal = value;
  }

  get ville(): string {
    return this._ville;
  }

  set ville(value: string) {
    console.log('SET VILLE', value);
    this._ville = value;
  }

  get telephone(): number {
    return this._telephone;
  }
  set telephone(value: number) {
    console.log('SET TELEPHONE', value);
    this._telephone = value;
  }



}
