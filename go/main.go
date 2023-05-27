package main

import "fmt"

const arrSize = 7

type HashTable struct {
	array [arrSize]*Bucket
}

type Bucket struct {
	head *bucketNode
}

type bucketNode struct {
	key  string
	next *bucketNode
}

// Insert into the Hashtable
func (h *HashTable) Insert(key string) {
	index := hashkey(key)
	h.array[index].insert(key)
}

// Delete from the Hashtable
func (h *HashTable) Delete(key string) {
	index := hashkey(key)
	h.array[index].delete(key)
}

// Search the Hashtable
func (h *HashTable) Search(key string) bool {
	index := hashkey(key)
	return h.array[index].search(key)
}

// Insert into the BucketNode
func (b *Bucket) insert(k string) {
	if !b.search(k) {
		newNode := &bucketNode{key: k}
		newNode.next = b.head
		b.head = newNode
	} else {
		fmt.Println("Already exists in bucket")
	}
}

// Delete from the BucketNode
func (b *Bucket) delete(key string) {
	if b.head.key == key {
		b.head = b.head.next
		return
	}

	currentNode := b.head.next
	previousNode := b.head

	for currentNode != nil {
		if currentNode.key == key {
			previousNode.next = currentNode.next
		}

		currentNode = currentNode.next
		previousNode = currentNode
	}

}

// Search the BucketNode
func (b *Bucket) search(key string) bool {
	currentNode := b.head
	for currentNode != nil {
		if currentNode.key == key {
			return true
		}
		currentNode = currentNode.next
	}

	return false
}

func InitHashTable() *HashTable {
	res := &HashTable{}
	for i := range res.array {
		res.array[i] = &Bucket{}
	}

	return res
}

func hashkey(k string) int {
	sumofkey := 0
	for _, v := range k {
		sumofkey += int(v)
	}

	return sumofkey % arrSize
}

func main() {

	newHashTable := InitHashTable()

	newHashTable.Insert("RANDY")
	newHashTable.Insert("ERIC")
	fmt.Println(newHashTable.Search("ERIC"))
	newHashTable.Delete("ERIC")
	fmt.Println(newHashTable.Search("ERIC"))

}
