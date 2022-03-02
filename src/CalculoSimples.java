import java.io.IOException;
import java.util.Scanner;

public class CalculoSimples {

  public static void main(String[] args) throws IOException {

    Scanner sc = new Scanner(System.in);

    int codigo1 = sc.nextInt();
    int numeroDePecas1 = sc.nextInt();
    double valorUnitario1 = sc.nextDouble();

    int codigo2 = sc.nextInt();
    int numeroDePecas2 = sc.nextInt();
    double valorUnitario2 = sc.nextDouble();

    double valorTotal = (numeroDePecas1 * valorUnitario1) + (numeroDePecas2 * valorUnitario2);

    System.out.printf("VALOR A PAGAR: R$ %2.2f\n", valorTotal);

    sc.close();

  }
}
