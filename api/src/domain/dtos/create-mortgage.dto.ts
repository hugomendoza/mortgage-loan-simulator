export class CreateMortgageDto {
  private constructor(
    public readonly monthlyIncome: number,
    public readonly monthlyDebts: number,
    public readonly loanAmount: number,
    public readonly propertyValue: number,
    public readonly creditScore: number
  ) {}

  static create(props: { [key: string]: any }): [string?, CreateMortgageDto?] {
    const {
      monthlyIncome,
      monthlyDebts,
      loanAmount,
      propertyValue,
      creditScore,
    } = props;

    if (monthlyIncome === undefined || monthlyIncome === null)
      return ['The monthly income is required'];
    if (monthlyDebts === undefined || monthlyDebts === null)
      return ['The monthly debts are required'];
    if (loanAmount === undefined || loanAmount === null)
      return ['The loan amount is required'];
    if (propertyValue === undefined || propertyValue === null)
      return ['The property value is required'];
    if (creditScore === undefined || creditScore === null)
      return ['The credit score is required'];

    return [
      undefined,
      new CreateMortgageDto(
        monthlyIncome,
        monthlyDebts,
        loanAmount,
        propertyValue,
        creditScore
      ),
    ];
  }
}
