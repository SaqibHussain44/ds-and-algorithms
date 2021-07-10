#include <iostream>
#include <math.h>
using namespace std;
int binarySearch(int arr[], int left, int right, int find); // prototype declaration
int binarySearchRecursive(int arr[], int left, int right, int find);

int main() {
  int list[16] = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 };
  int n = sizeof(list) / sizeof(list[0]);
  int result1 = binarySearch(list, 0, n - 1, 10);
  int result2 = binarySearchRecursive(list, 0, n - 1, 10);
  cout << "\nResult1: " << result1;
  cout << "\nResult2: " << result2;
  return 0;
}

// binary search
int binarySearch(int arr[], int left, int right, int find) {
  while (left < right) {
    int mid = floor((left + right) / 2);
    if (arr[mid] == find) return mid;
    if (arr[left] == find) return left;
    if (arr[right] == find) return right;
    if (arr[mid] > find) {
      right = mid;
    } else {
      left = mid;
    }
  }
  return -1;
}

// binary search
int binarySearchRecursive(int arr[], int left, int right, int find) {
  if (right >= left) {
    int mid = left + (right - left) / 2;
    cout << "\n" << mid;
    if (arr[mid] == find)
      return mid;
    if (arr[mid] > find)
      return binarySearch(arr, left, mid - 1, find);
    return binarySearch(arr, mid + 1, right, find);
  }
  return -1;
}
