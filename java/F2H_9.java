public class Extra28 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int n=5;
		int count=0;
		
		while (n<=200) {
			if (n%9==0) {
				++count;
			}
			++n;
		}
		System.out.println("The count of the numbers between 5 and 200 which are divisible by 9: "+count);
	}

}
