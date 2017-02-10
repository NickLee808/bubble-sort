## Bubble Sort

Bubbles travel upwards from underwater because air is lighter than water. In a **bubble sort**, the first item traverses (or "bubbles") through the list and swaps position with the next item if the next item is larger (or "heavier") than itself. The item will keep traversing through the list until it reaches the end or when the next item is no longer larger, in which case, the item at the start of this new list takes over and begins its journey bubbling up. This process repeats over and over again until no more swaps can be made, thus completing the sort.

#### Psuedocode

```
bubbleSort (array) {
  set sorted state to false;
  while (sorted state is false) {
    change sorted state to true;
    loop through array {
      if (first item in array > next item in array){
        swap items;
        change sorted state to false;
      }
    }
  }
  return array;
};
```

#### Best-case scenario

If the array is already in the proper order, the bubble sort will simply pass through the list once without performing any swaps and terminate once it reaches the end. Its complexity in this case would be *O(n)*.

#### Worst-case scenario

If the array is sorted backwards, the bubble sort would have to compare, swap, and traverse through the list for every single item, giving it a complexity of *O(n^{2})*. With more items, it becomes even more impractical.

## Insertion Sort

An **insertion sort** takes each item from the list and inserts it into its proper position as it traverses through. It begins by picking up the second item in the list and comparing it to the first, swapping if it is smaller and leaving both in place if not. The now compared items are considered sorted while the rest of the items in the list are unsorted. It continues onto the next item from the unsorted side of the list and inserts it into its proper position on the sorted side, repeating this process until the end of the list is reached, where all items have been compared and sorted.

#### Pseudocode

```
insertionSort (array) {
  loop through array starting at first index{
    while (current index of array < previous index of array){
      swap items;
      continue down the list;
    }
  }
  return array;
};
```

#### Best-case scenario

If the array is already in the proper order, the insertion sort will simply pass through the list without performing any swaps and terminate once it reaches the end. Its complexity in this case would be *O(n)*.

#### Worst-case scenario

If the array is sorted backwards, the insertion sort would have to pick up, compare, and insert every single item into its proper place as it traverses the list, giving it a complexity of *O(n<sup>2</sup>)*.

## Selection Sort



#### Pseudocode

```
selectionSort (array) {
  loop through array{
    set thisIndex to i;
    set currentMinimum to current index;
    loop through unsorted remainder of array{
      if(current index of this loop < currentMinimum){
        set current index of this loop to next item's index;
        set currentMinimum to this item;
      }
    }
    set array[thisIndex] to array[i];
    array[i] = currentMinimum;
  }
  return array;
};
```

#### Best-case scenario

*O(n<sup>2</sup>)*

#### Worst-case scenario

*O(n<sup>2</sup>)*

## Quick Sort



#### Pseudocode

```

```

#### Best-case scenario



#### Worst-case scenario



## Merge Sort



#### Pseudocode

```

```

#### Best-case scenario



#### Worst-case scenario


