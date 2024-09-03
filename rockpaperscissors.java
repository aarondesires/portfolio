import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner input=new Scanner(System.in);
    
    System.out.println("Choices:\n0=Rock\n1=Paper\n2=Scissors");
    System.out.print("Enter your choice: ");
    int userChoice=input.nextInt();
    
    int botChoice = (int)(Math.random() * 3);
    
    System.out.println("Your Choice: "+userChoice+"\nBot's Choice: "+botChoice);

// main if statements
    
    if ((userChoice==0 && botChoice==0) || (userChoice==1 && botChoice==1) || (userChoice==2 && botChoice==2)){
      System.out.println("Tie!");
    }
    else if ((userChoice==0 && botChoice==1) || (userChoice==1 && botChoice==2) || (userChoice==2 && botChoice==0)){
      System.out.println("You Lose!");
    }
    else if ((userChoice==0 && botChoice==2) || (userChoice==1 && botChoice==0) || (userChoice==2 && botChoice==1)){
      System.out.println("You Win!");
    }
    else {
      System.out.println("Your choice is out of range!");
    }
  }
}
