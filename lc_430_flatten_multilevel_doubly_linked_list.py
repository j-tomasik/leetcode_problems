def flatten(head):
        def dfs(node):
                #edge case, out of bounds
            if not node:
                return None
                #edge case, nowhere to traverse
            if not node.child and not node.next:
                return node
                #cant go deeper, go to next
            if not node.child:
                return dfs(node.next)

                #hold a pointer to first child, use to build list of children's chidren etc.
            childTail = dfs(node.child)
                #hold pointer for reasigning prev to insert in children to top level list
            nextNode = node.next
                #thread in child to top level
            if nextNode:
                childTail.next = nextNode
                nextNode.prev = childTail
                #thread curr to child node
            node.next = node.child
            node.child.prev = node
                #set child to empty
            node.child = None
                #recurisve call on next if possible, else returns child pointer if going deep at end of list
            return dfs(nextNode) if nextNode else childTail
        dfs(head)
        return head