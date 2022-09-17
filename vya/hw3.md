# Proje 3: Binary Search Tree Projesi
**[7, 5, 1, 8, 3, 6, 0, 9, 4, 2]** dizisinin Binary-Search-Tree aşamalarını yazınız.
**Örnek:** root x'dir. root'un sağından y bulunur. Solunda z bulunur vb.

## Cevaplar
Dizinin en başındaki eleman root olarak seçilir. Bu dizideki Root 7'dir.
1. Root: 7, Solunda: 5, Sağında: 8 bulunur
2. Root: 5, Solunda: 1, Sağında: 6 bulunur
3. Root: 1, Solunda: 0, Sağında: 3 bulunur
4. Root: 8, Solunda: -, Sağında: 9 bulunur
5. Root: 3, Solunda: 2, Sağında: 4 bulunur

Ağaç yapısı aşağıdaki şekilde görülür:
```
      7
     / \
    5   8
   / \   \
  1   6   9
 / \
0   3
   / \
  2   4
```
