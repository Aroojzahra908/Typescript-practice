
// You are given the heads of two sorted linked lists list1 and list2. Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.Return the head of the merged linked list.
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

function mergeList(list1:number[],list2:number[]){

    let sorted_list: number[]=  list1.concat(list2).sort()
    console.log(sorted_list)

}

mergeList([],[]);