var removeElements = function(head, val) {
    let temp = new  ListNode()
    temp.next = head;
    head =temp
    
  
    while(temp.next != null){
        if(temp.next.val === val){
            temp.next = temp.next.next;
        }
        else{
            temp = temp.next
        }
    }
    return head.next
    
};