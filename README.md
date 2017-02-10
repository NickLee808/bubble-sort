Create a README.md file and for each algorithm include the following:

* Explain to a five year old how the algorithm works (3-4 sentences max)
* Psuedo code for each sorting implementation
* In your own words, describe the performance of the alogirthm for the following cases:
    * Best case scenario
    * Worst case scenario

## Bubble Sort

Bubbles travel upwards from underwater because air is lighter than water. In a **bubble sort**, the first item traverses (or "bubbles") through the list and swaps position with the next item if the next item is larger (or "heavier") than itself. The item will keep traversing through the list until it reaches the end or when the next item is no longer larger, in which case, the item at the start of this new list takes over and begins its journey bubbling up. This process repeats over and over again until no more swaps can be made, thus completing the sort.

#### Psuedocode

```
bubbleSort (array) {
  set sorted state to false;
  while (sorted state is false) {
    change sorted state to true;
    loop through (array) {
      if (first item in array > next item in array){
        swap items;
        change sorted state to false;
      }
    }
  }
  return array;
};
```

#### Best case scenario

If the array is already in the proper order, the bubble sort will simply pass through the list once without performing any swaps and terminate once it reaches the end. Its complexity in this case would be *O(n)*.

#### Worst case scenario

If the array is sorted backwards, the bubble sort would have to compare, swap, and traverse through the list for every single item, giving it a complexity of *O(n^{2})*. With more items, it becomes even more impractical.

## Insertion Sort

#### Pseudocode
```
```

