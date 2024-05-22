export interface IQuestionModel{
  ID: any;
  Type : any;
  Title : string;
  Content : IAnswerModel[];
  IsRequired: boolean;

}
export interface IAnswerModel{
  ID: any;
  Title : string;
  Content : any;
  Checked : boolean;
}
