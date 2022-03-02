import java.io.IOException;
import java.util.Scanner;

public class AreaDoCirculo {

  public static void main(String[] args) throws IOException {

    Scanner scanner = new Scanner(System.in);

    double raio = scanner.nextDouble();
    double n = 3.14159;
    double area = n * (raio * raio);

    System.out.printf("A=%2.4f\n", area);

    scanner.close();

  }

}
