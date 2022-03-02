import java.io.IOException;
import java.util.Scanner;

public class SalarioComBonus {

  public static void main(String[] args) throws IOException {

    Scanner scanner = new Scanner(System.in);

    String nomeVendedor = scanner.nextLine();
    double salario = scanner.nextDouble();
    double vendasEfetuadas = scanner.nextDouble();

    double totalSalario = (vendasEfetuadas * 0.15) + salario;

    System.out.printf("TOTAL = R$ %3.2f\n", totalSalario);

    scanner.close();

  }

}