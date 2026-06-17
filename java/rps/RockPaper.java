import java.util.*;

public class RockPaper {
  public static HashMap<Character, Character> outputs = new HashMap<>() {
    {
      put('P', 'R');
      put('R', 'S');
      put('S', 'P');
    }
  };

  public static void main(String[] args) {
    System.out.println("Hello, World!\n");
    Random rand = new Random();
    Scanner scan = new Scanner(System.in);
    String getInput = """
        Enter Value:
        0: P
        1: R
        2: S
        """;

    System.out.println("Please Enter");
    System.out.println(getInput);
    try {

      int userValue = scan.nextInt();

      runWinner(generateInput(userValue, false), generateInput(rand.nextInt(2), true));

      scan.close();
    } catch (Exception e) {
      System.out.println(e.getMessage());
    }

  }

  public static char generateInput(int value, boolean isRobot) {
    return isRobot ? gen(value) : value > 2 ? 'S' : gen(value);
  }

  public static char gen(int value) {
    return switch (value) {
      case 0 -> 'S';
      case 1 -> 'P';
      case 2 -> 'R';
      default -> '_';
    };

  }

  public static void runWinner(char user, char computer) {
    if (outputs.get(user) == computer) {
      System.out.printf("user character %c\nComputer Character: %c\nHashMap value for User %c\n", user, computer,
          outputs.get(user));

      System.out.println("User Wins!");
    }

    if (outputs.get(computer) == user) {
      System.out.printf("user character %c\nComputer Character: %c\nHashMap value for computer %c\n", user, computer,
          outputs.get(computer));

      System.out.println("Computer Wins!");
    }
  }
}
