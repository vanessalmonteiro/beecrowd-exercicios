import java.io.IOException;
import java.util.Scanner;

public class Media2 {

  public static void main(String[] args) throws IOException {

    Scanner sc = new Scanner(System.in);

    double A = sc.nextDouble();
    double B = sc.nextDouble();
    double C = sc.nextDouble();

    double pesoA = 2;
    double pesoB = 3;
    double pesoC = 5;

    double media = ((A * pesoA) + (B * pesoB) + (C * pesoC)) / (pesoA + pesoB + pesoC);

    System.out.printf("MEDIA = %1.1f\n", media);

    sc.close();

  }
}