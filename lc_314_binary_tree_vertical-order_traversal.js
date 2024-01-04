var verticalOrder = function(root) {
    if (!root) return []
    const res = []
    const queue = [[root, 0]]
    const map = {}

    while(queue.length > 0) {
        const [node, level] = queue.shift()

        if(!map[level]) map[level] = [];
        map[level].push(node.val)

        if (node.left) {
            queue.push([node.left, level-1])
        }
        if (node.right) {
            queue.push([node.right, level + 1])
        }
    }
    const levels = Object.entries(map).sort((a, b) => a[0]-b[0])
    levels.forEach(x => res.push(x[1]))
    return res;
}