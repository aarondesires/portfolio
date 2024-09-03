#include <iostream>
#include <string>
#include <stdlib.h>
using namespace std;

int main() {
	srand(5);
	const int UPPER_LIMIT = 99, LOWER_LIMIT = 0;
	int menu_select, attempts = 5, shot, target = (rand() %(UPPER_LIMIT - LOWER_LIMIT) + LOWER_LIMIT);
	
	cout << "pick option\n";
	cout << "1: Play \n2: How to play \n3: Exit\n";
	cin >> menu_select;
	while (menu_select < 1 or menu_select > 3) {
		cout << "Please select a number in between 1 and 3!\n";
		cin >> menu_select;
	}
	switch (menu_select) {
	case 1: {
		//system("cls"); //Use this to clear the output screen on Visual Studio
		cout << "\033[2J\033[0;0H"; //Use this to clear the output screen on Replit
		for (attempts; attempts > 0; attempts--) {
			cout << "You have " << attempts << " attempts left\n";
			//-------Taking User Input------
			cout << "Enter in a number between " << LOWER_LIMIT << " and " << UPPER_LIMIT << endl;
			cin >> shot;
			//-------Validate Shot----------
			while (shot < LOWER_LIMIT or shot > UPPER_LIMIT) {
				cout << "That's not a valid answer!\n";
				cout << "Enter in a number between " << LOWER_LIMIT << " and " << UPPER_LIMIT << endl;
			}
			//------Compare shot with the target-------
			if (shot == target) {
				cout << "Congrats! You've won!\n";
				return 0;
			}
			else if (shot > target)
				cout << "Guess a lower number!\n";
			else if (shot < target)
				cout << "Guess a higher number!\n";
		}
		//-----Count the game as a loss if attempts run out
		cout << "You lost! The number was " << target << endl;
		cout << "Try again if you want\n";
		break;}
	case 2: {
		cout << "You have five attempts to guess the correct number between 0 and 99\n";
		break;}
	case 3: {
		return 0;
	}
	}


	return 0;
}
