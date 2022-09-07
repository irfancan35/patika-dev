# -*- coding: utf-8 -*-

"""
1-) Bir listeyi düzleştiren (flatten) fonksiyon yazın. Elemanları birden çok
    katmanlı listelerden ([[3],2] gibi) oluşabileceği gibi, non-scalar
    verilerden de oluşabilir. Örnek olarak:

    input : [[1,'a',['cat'],2],[[[3]],'dog'],4,5]
    output: [1,'a','cat',2,3,'dog',4,5]

2-) Verilen listenin içindeki elemanları tersine döndüren bir fonksiyon yazın.
    Eğer listenin içindeki elemanlar da liste içeriyorsa onların elemanlarını
    da tersine döndürün. Örnek olarak:

    input : [[1, 2], [3, 4], [5, 6, 7]]
    output: [[7, 6, 5], [4, 3], [2, 1]]
"""

import copy


def list_flatten(arr, _=[]):
    """
    Returns a flatten array of a given array. Keeps the original array safely.
        Parameters:
        -----------
            arr (list): Given array
            _ (optional): Do not use

        Returns:
        --------
            _ (list): Flattened array

        Examples:
        ---------
            >>> input = [1, [2, [3, 4]], [5]]
            >>> list_flatten(input)
            [1, 2, 3, 4, 5]
    """
    for item in arr:
        if type(item) == list:
            list_flatten(item, _)
        else:
            _.append(item)
    return _


def list_reverse(arr, _=None):
    """
    Returns a reverse array of a given array. Keeps the given array safely.

        Parameters:
        -----------
            arr (list): Given array
            _ (optional): Do not use

        Returns:
        --------
            _ (list): Reversed array

        Examples:
        ---------
            >>> input = [1, [2, [3, 4]], [5]]
            >>> list_reverse(input)
            [[5], [[4, 3], 2], 1]
    """
    if not _ and type(arr) == list:
        # In order to keep the original array we create deep copy of the array
        _ = copy.deepcopy(arr)
    if type(_) == list:
        _.reverse()
        for item in _:
            list_reverse(_, item)
    return _


# Sample Usage Example
inp_arr1 = [[1, 'a', ['cat'], 2], [[[3]],'dog'], 4, 5]
inp_arr2 = [1, 'a', 'cat', 2, 3, 'dog', 4, 5]

# Check the original array before and after list_flatten() function call
print(inp_arr1)
out_arr_lf = list_flatten(inp_arr1)
print(out_arr_lf)
print(inp_arr1)

# Check the original array before and after list_reverse() function call
print(inp_arr2)
out_arr_rv = list_reverse(inp_arr2)
print(out_arr_rv)
print(inp_arr2)
