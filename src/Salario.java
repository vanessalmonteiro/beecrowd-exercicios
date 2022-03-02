import java.io.IOException;
import java.util.Scanner;

public class Salario {

  public static void main(String[] args) throws IOException {

    Scanner sc = new Scanner(System.in);

    int numeroFuncionario = sc.nextInt();
    int horas = sc.nextInt();
    double salario = sc.nextDouble();

    double calculo = horas * salario;

    System.out.println("NUMBER = " + numeroFuncionario);

    System.out.printf("SALARY = U$ %4.2f\n", calculo);

    sc.close();

  }
}