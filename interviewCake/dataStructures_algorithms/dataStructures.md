# Data Structures

### RAM (Random Access Memory)
- Working memory, where processing happens. (Small + Fast)
- Storage memory, where data is saved. (Large + Slow)

- Ram has self's that are id'ed by addresses.

- A shelf can hold 8bits. `00000000`
- 8bits -> 1byte

- Proccesser: Does the actual work.
- Memory Controller: read / writes to RAM. There's a direct connnection.  So you can read shelf 4 then shelf 5000

- Working Memory reads from a physical head.

- Cache: the proccessor stores copy of things the it recently read from RAM. This is much faster than reading from RAM.

### Strings
- ASCII Mapping (character encode)



### Pointers
- Intigers `pointing` to another spot in memory.
- Example -- Store an array in an array.
![pointer example](https://cl.ly/3z2E3B2D0B2v)
- Are slower because values are sequential / uninterupted.

### Dynamic Arrays
- An list that can dynamically resize itself.

Once the list reaches capacity of it's pre-defined limit O(n):
1. Make a new bigger array (usually twice the size)
2. Copy each element in the old into the new.
3. Free old memory.
4. Append the new item.

Because you're doubling space each time it's still O(n)

### Linked List O(1) (appends)
Is a data structre that consists of a 2 indexed array (a node). That array has a value + a pointer to the next character.

- The first node is the head.
- The last node is the tail.

- Nodes don't have to sit next to each other in memory and don't need large pieces of sequental memory.
- Look up time is O(i)


### Hash Table
- A clever way to use arrrays.
- table with two columns.
- translate a value into and index using a hashing function.
Example: 
"Ben" (ASCII values summed % 30) === value


table -> find the index in hashing function -> store value in linked list value.


