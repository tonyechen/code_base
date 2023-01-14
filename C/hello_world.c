#include <stdio.h>
#include <stdbool.h>

int main() {


    // getting input
    char name[25];
    printf("What's your name?\n");
    // read white spaces
    fgets(name, 25, stdin);

    int age;
    printf("How old are you?\n");
    // read until white space
    scanf("%d", &age);

    printf("Your name is ");
    printf("You are %d years old", age);
    
    return 0;
}