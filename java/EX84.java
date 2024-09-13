public class Ex84 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		for (int i=1;i<=8;i++) {	
			for (int ke=8;ke>i;ke--) {
				System.out.print(" ");
			}
			for (int j=1;j<=i*2-1;j++) {
				System.out.print("*");
			}
			System.out.println();
		}
		for (int p=1;p<=3;p++) {
			for (int sp=1;sp<=6;sp++) {
				System.out.print(" ");
			}
			for (int ps=1;ps<=3;ps++) {
				System.out.print("*");;
			}
			System.out.println();
		}
	}

}
