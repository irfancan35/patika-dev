# Proje 1: Insertion Sort Projesi
## **[22,27,16,2,18,6]** -> Insertion Sort

1. Yukarı verilen dizinin sort türüne göre aşamalarını yazınız.
2. Big-O gösterimini yazınız.
3. Time Complexity: Average Case: Aradığımız sayının ortada olması, Worst Case: Aradığımız sayının sonda olması, Best Case: Aradığımız sayının dizinin en başında olması.
4. Dizi sıralandıktan sonra 18 sayısı hangi case kapsamına girer? Yazınız.

## **[7,3,5,8,2,9,4,15,6]** dizisinin Insertion Sort'a göre ilk 4 adımını yazınız.


## Cevaplar
1. Aşamalar
    * [2,27,16,22,18,6]
    * [2,6,16,22,18,27]
    * [2,6,16,18,22,27]
2. O(n²)
3. Average & Worst Case: O(n²), Best Case: O(n)
4. Average Case kapsamına girer

---
* Aşamalar
    1. [2,3,5,8,7,9,4,15,6]
    2. [2,3,4,8,7,9,5,15,6]
    3. [2,3,4,5,7,9,8,15,6]
   4. [2,3,4,5,6,9,8,15,7]
