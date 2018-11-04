int cFibonacci(int num) {
    if (num == 0) {
        return 0;
    } else if (num == 1) {
        return 1;
    }
    return cFibonacci(num - 2) + cFibonacci(num - 1);
}